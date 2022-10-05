import { GraphQLClient, gql } from "graphql-request";
const hygraphClient = new GraphQLClient(process.env.HYGRAPH_ENDPOINT);

export default hygraphClient;
export { gql };
