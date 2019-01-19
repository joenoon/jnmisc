import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {setContext} from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloLink} from 'apollo-link';
import {tokenManager} from './TokenManager';

export function initApollo() {
  const httpLink = createHttpLink({
    uri: 'http://localhost:3000/graphql',
  });

  const authLink = setContext((_, {headers}) => {
    // get the authentication token from local storage if it exists
    const token = tokenManager.current;
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: ApolloLink.from([authLink, httpLink]),
    cache: new InMemoryCache(),
  });

  return client;
}

export type AppApolloClient = ReturnType<typeof initApollo>;