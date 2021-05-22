import { InMemoryCache, ApolloClient, makeVar, createHttpLink } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setContext } from '@apollo/client/link/context';
import { offsetLimitPagination } from '@apollo/client/utilities';

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar("");

export const logUserIn = async token => {
  await AsyncStorage.setItem("token", token);
  isLoggedInVar(true);
  tokenVar(token);
}

export const logUserOut = async () => {
  await AsyncStorage.removeItem("token");
  isLoggedInVar(false);
  tokenVar(null);
}

const httpLink = createHttpLink({
  uri: "https://stale-termite-20.loca.lt/graphql",
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token: tokenVar()
    }
  }
});

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        seeFeed: offsetLimitPagination()
      }
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
})

//offsetLimitPagination() 아래로 대체 가능
/* {
  keyArgs: false,
  merge(existing = [], incoming = []) {
    return [...existing, ...incoming]
  }
} */

export default client;