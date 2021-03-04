import React from 'react';
import { render } from 'react-dom';
import App, * as myStuff from './app';
import { BrowserRouter } from 'react-router-dom';
import Style from './styles.css'

render(
  <BrowserRouter>
   <App />
  </BrowserRouter>,
  document.getElementById('root')
);