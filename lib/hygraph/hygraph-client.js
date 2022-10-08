import { GraphQLClient, gql } from "graphql-request";

export { gql };

const hygraphClient = new GraphQLClient(process.env.HYGRAPH_ENDPOINT);
export default hygraphClient;
