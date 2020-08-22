import React from 'react';
import { Router } from '@reach/router';
import { Header } from './components/Header/index';
import { GlobalStyle } from './styles/GlobalStyles';
import { Footer } from './components/Footer/index';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { OnWork } from './pages/OnWork';
import { NotFound } from './pages/NotFound';

export const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Router>
      <Home path='/' />
      <Contact path='/contact' />
      <OnWork path='/about' />
      <OnWork path='/blog' />
      <OnWork path='/careers' />
      <NotFound default />
    </Router>
    <Footer />
  </>
);
