import { gql } from "apollo-server-express";
import createRepository from "../../io/database/createRepository";

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

  input ClientListOptions {
    take: Int
    skip: Int
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
      const { take = 10, skip = 0 } = args.options || {};
      const clients = await clientRepository.read();

      return {
        items: clients.slice(skip, skip + take),
        totalItems: clients.length,
      };
    },
  },
};
