import { InMemoryCache, ApolloClient, makeVar } from '@apollo/client';

export const isLoggedInVar = makeVar(false);

const client = new ApolloClient({
  cache: new InMemoryCache,
  uri: "https://modern-elephant-24.loca.lt/graphql"
})

export default client;