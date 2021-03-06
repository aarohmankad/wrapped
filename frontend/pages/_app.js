import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import Firebase, { FirebaseContext } from "../components/Firebase";
import { authStateChanged } from "../redux/actions/Auth";
import store from "../redux/store";

const theme = {
  navy: "#323759",
  grey: "#343434",
  lt_grey: "#8f91a4",
  blue: "#2ec0f9",
  lt_blue: "#8ddcfb",
  white: "#fffffb",
  pink: "#ff96ed"
};

const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css?family=Nunito');
    font-family: 'Nunito', sans-serif;
    margin: 0;
  }
`;

const firebase = new Firebase();
export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(user => {
      firebase
        .user(user.uid)
        .on('value', snapshot =>
          store.dispatch(authStateChanged({ ...user, ...snapshot.val() }))
        );
    });
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <GlobalStyle />
        <FirebaseContext.Provider value={firebase}>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </Provider>
        </FirebaseContext.Provider>
      </Container>
    );
  }
}
