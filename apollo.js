import { InMemoryCache, ApolloClient, makeVar } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar("");

export const logUserIn = async token => {
  await AsyncStorage.multiSet([["token", token], ["loggedIn", "yes"]]);
  isLoggedInVar(true);
  tokenVar(token);
}

const client = new ApolloClient({
  cache: new InMemoryCache,
  uri: "https://helpless-squid-43.loca.lt/graphql"
})

export default client;