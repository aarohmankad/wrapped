import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import store from '../redux/store';

const theme = {
  navy: '#323759',
  grey: '#343434',
  blue: '#2ec0f9',
  white: '#fffffb',
  pink: '#ff96ed',
};

const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css?family=Nunito');
    font-family: 'Nunito', sans-serif;
  }
`;

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <GlobalStyle />
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </Container>
    );
  }
}
