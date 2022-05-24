import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Demand {
    id: String!
    name: String
    client: Client
    deadline: String
  }

  extend type Query {
    demands: [Demand]!
  }
`;

export const resolvers = {
  Query: {
    demands: () => [],
  },
};
