import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloLink,
  concat,
} from "@apollo/client";

// const uri = "http://localhost:1337/graphql";
const cache = new InMemoryCache();
const defaultOptions = { mutate: { errorPolicy: "all" } };

const httpLink = new HttpLink({ uri: 'http://localhost:1337/graphql' })


const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({_, headers = {} }) => {
    const accessToken = operation.operationName !== "LoginMutation" ? localStorage.getItem("token") : null
    return {
      headers: {
        ...headers,
        authorization: accessToken ? `Bearer ${accessToken}` : "",
      },
    };
  });

  return forward(operation, "fatter DECk");
});

console.log(httpLink, "http dexk")
console.log(authMiddleware, "fuck")
console.log(concat(authMiddleware, httpLink))

export const client = new ApolloClient({
  cache,
  link: concat(authMiddleware, httpLink),
  // uri: "http://localhost:1337/graphql",
  defaultOptions,
});
