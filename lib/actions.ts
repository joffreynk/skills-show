import { GraphQLClient } from "graphql-request";

const isProduction = process.env.NODE_ENV === "production";
const apiUrl = isProduction ? process.env.GRAFBASE_URL || "" : "";
const apiKey = isProduction ? process.env.GRAFBASE_KEY || "" : "mysecret";
const serverUrl = isProduction ? process.env.DEPLOYED_APP_URI : "http://localhost:3000";

const client = new GraphQLClient(apiUrl);

const makeGraphQLRequest = async (query: string, variables = {}) => {
    try {
      return await client.request(query, variables);
  } catch (error) {
      throw error;
  }
}
