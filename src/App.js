import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import './style/app';
import { theme } from './style/theme';
import Home from './containers/home/home';

//No router since we are only dealing with a single route (root)
class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Home/>              
        </ThemeProvider>        
      </div>
    );
  }
}

export default App;
