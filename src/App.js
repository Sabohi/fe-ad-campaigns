import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch } from 'react-router-dom';
import ErrorBoundary from '@/components/ErrorBoundary';
import 'react-toastify/dist/ReactToastify.css';
import { routes } from './routes';
import localization from './utils/localization';
import GlobalStyled from './styles/GlobalStyle';

const App = () => {
  const renderTitle = () => (
    <Helmet>
      <title>{localization.header.projectHeader}</title>
    </Helmet>
  );

  return (
    <>
      {renderTitle()}
      {/* Initializes the global app styles dynamically */}
      <GlobalStyled />
      <ErrorBoundary>
        <Switch>{routes.map((route) => route)}</Switch>
      </ErrorBoundary>
    </>
  );
};

export default App;
