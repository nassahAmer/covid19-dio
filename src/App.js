import React from 'react'
import { StylesProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import GlobalStyle from './commons/styles/global-style'
import Main from './containers/Main'

function App() {
  return (
    <StylesProvider>
      <CssBaseline />
      <GlobalStyle />
      <Main />
    </StylesProvider>
  );
}

export default App;
