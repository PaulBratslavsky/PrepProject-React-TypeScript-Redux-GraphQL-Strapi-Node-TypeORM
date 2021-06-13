import { ApolloClient, InMemoryCache } from "@apollo/client";

const uri = "http://localhost:1337/graphql";
const cache = new InMemoryCache();
const defaultOptions = { mutate:  {errorPolicy: "all" }};

export const client = new ApolloClient({ uri, cache, defaultOptions });
