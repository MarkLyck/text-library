import App, { Container } from "next/app";
import { ApolloProvider } from "react-apollo";
import React from "react";
import Head from "next/head";
import withApolloClient from "../lib/with-apollo-client";

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient, FSApolloClient } = this.props;
    return (
      <Container>
        <Head>
          <title>High Status Texts</title>
        </Head>
        <ApolloProvider client={apolloClient}>
          <Component
            {...pageProps}
            apolloClient={apolloClient}
            FSApolloClient={FSApolloClient}
          />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
