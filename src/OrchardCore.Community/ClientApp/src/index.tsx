import React from 'react';
import ReactDOM from 'react-dom';

import {ApolloProvider} from '@apollo/client';
//import App from './components/app.jsx';

import { Provider } from 'react-redux';
import createStore from "./state/store";
import App from './layouts';
import getPageContext from "./getPageContext";
import theme from "./styles/theme";

ReactDOM.render( 
  <Provider store={createStore()}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
