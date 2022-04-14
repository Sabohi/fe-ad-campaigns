import React from 'react';
import { Redirect } from 'react-router';
import Campaigns from '@/pages/Campaigns';
import NotFound from '@/components/NotFound';
import { GLOBALCONSTANTS } from '@/utils/GlobalConstants';
import Routes from './Routes';

const {
  REACT_ROUTES: { HOME_COM, NOT_FOUND_COMPONENT },
} = GLOBALCONSTANTS;

export const routes = [
  <Routes key="Home" path={HOME_COM} component={Campaigns} exact restricted={false} />,
  <Routes key="NotFoundComponent" path={NOT_FOUND_COMPONENT} component={NotFound} exact restricted={false} />,
  <Redirect key="*" from="*" to="/404" />,
];
