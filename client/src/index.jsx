import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, browserHistory } from 'react-router-dom';
import App from './components/app.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';


// APOLLO SERVER CONNECTION - create a link that connects the Apollo Client to graphQL server
const httpLink = new HttpLink({ uri: '/graphql' });
const wsLink = new WebSocketLink({
  uri: 'wss://subscriptions',
  options: {
    reconnect: true
  }
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);
// Instantiate ApolloClient
const client = new ApolloClient({
  link: link,
  timeout:3000,
  cache: new InMemoryCache() // store for state management
})

ReactDOM.render(
  <BrowserRouter>
  <MuiThemeProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </MuiThemeProvider>
  </BrowserRouter>, document.getElementById('app'));