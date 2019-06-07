// import { withData } from "next-apollo";
// import { HttpLink } from "apollo-link-http";

// const config = {
//   link: new HttpLink({
//     uri: "", // Server URL (must be absolute)
//     opts: {
//       credentials: "same-origin" // Additional fetch() options like `credentials` or `headers`
//     }
//   })
// };

// export default withData(config);

import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { setContext } from "apollo-link-context";
import fetch from "isomorphic-unfetch";

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

const graphCoolEndpoint =
  "https://api.graph.cool/simple/v1/cjohn0trr0iqh0110icrg9951";
const httpLink = new HttpLink({
  uri: graphCoolEndpoint,
  credentials: "same-origin"
});

function create(initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: httpLink,
    cache: new InMemoryCache().restore(initialState || {})
  });
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
