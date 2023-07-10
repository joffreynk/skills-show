import { createUserMutation, getUserQuery } from "@/graphQL/queries";
import { GraphQLClient } from "graphql-request";

const isProduction = process.env.NODE_ENV === "production";
const apiUrl = isProduction ? process.env.GRAFBASE_URL || "" : "http://127.0.0.1:4000/graphql";
const apiKey = isProduction ? process.env.GRAFBASE_KEY || "" : process.env.AUTH_SECRET || "mysecret";
const serverUrl = isProduction ? process.env.DEPLOYED_APP_URI : "http://localhost:3000";

const client = new GraphQLClient(apiUrl);

const makeGraphQLRequest = async (query: string, variables = {}) => {
    try {
      return await client.request(query, variables);
  } catch (error) {
      throw error;
  }
}


export const getUser = (email: string ) => {
  client.setHeader('x-api-key', apiKey)
  return makeGraphQLRequest(getUserQuery, { email });
}

export const createUser = (email: string, name: string, avatarUrl: string) => {
  client.setHeader('x-api-key', apiKey)
  const variables = { email, name, avatarUrl };
  return makeGraphQLRequest(createUserMutation, variables);
}