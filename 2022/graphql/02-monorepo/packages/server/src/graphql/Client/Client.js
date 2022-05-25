import { gql } from "apollo-server-express";
import createRepository from "../../io/database/createRepository";
import { ListSortmentEnum } from "../List/List";

const clientRepository = createRepository("client");

export const typeDefs = gql`
  type Client implements Node {
    id: ID!
    name: String!
    email: String!
    disabled: Boolean!
  }

  type ClientList implements List {
    items: [Client!]!
    totalItems: Int!
  }

  input ClientListFilter {
    name: String
    email: String
    disabled: Boolean
  }

  input ClientListOptions {
    take: Int
    skip: Int
    sort: ListSort
    filter: ClientListFilter
  }

  extend type Query {
    client(id: ID): Client
    clients(options: ClientListOptions): ClientList
  }
`;

export const resolvers = {
  Query: {
    client: async (_, { id }) => {
      const clients = await clientRepository.read();
      return clients.find((client) => client.id === id);
    },

    clients: async (_, args) => {
      const { take = 10, skip = 0, sort, filter } = args.options || {};

      const clients = await clientRepository.read();

      if (sort) {
        clients.sort((clientA, clientB) => {
          if (!["name", "email", "disabled"].includes(sort.sorter))
            throw new Error(`Cannot sort by field "${sort.sorter}".`);

          const fieldA = clientA[sort.sorter];
          const fieldB = clientB[sort.sorter];

          if (typeof fieldA === "string") {
            if (sort.sortment === ListSortmentEnum.ASC)
              return fieldA.localeCompare(fieldB);
            else return fieldB.localeCompare(fieldA);
          }

          if (sort.sortment === ListSortmentEnum.ASC)
            return Number(fieldA) - Number(fieldB);
          else return Number(fieldB) - Number(fieldA);
        });
      }

      const filteredClients = clients.filter((client) => {
        if (!filter || Object.keys(filter).length === 0) return true;

        return Object.entries(filter).every(([field, value]) => {
          if (client[field] === null || client[field] === undefined)
            return false;
          if (typeof value === "string") {
            if (value.startsWith("%") && value.endsWith("%"))
              return client[field].includes(value.substr(1, value.length - 2));
            if (value.startsWith("%"))
              return client[field].endsWith(value.substr(1));
            if (value.endsWith("%"))
              return client[field].startsWith(
                value.substr(0, value.length - 1)
              );

            return client[field] === value;
          }
          return client[field] === value;
        });
      });

      return {
        items: filteredClients.slice(skip, skip + take),
        totalItems: filteredClients.length,
      };
    },
  },
};
