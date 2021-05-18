import { InMemoryCache, ApolloClient, makeVar } from '@apollo/client';

export const isLoggedInVar = makeVar(false);

const client = new ApolloClient({
  cache: new InMemoryCache,
  uri: "https://dangerous-otter-21.loca.lt/graphql"
})

export default client;