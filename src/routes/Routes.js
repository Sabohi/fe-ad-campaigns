/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { isValidElementType } from 'react-is';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const Routes = ({ component: Component, restricted, ...rest }) => (
  // restricted = false meaning public route
  // restricted = true meaning restricted route
  <Route {...rest} render={(props) => (restricted ? <Redirect to="/" /> : <Component {...props} />)} />
);

Routes.propTypes = {
  restricted: PropTypes.bool.isRequired,
  component: (props) => {
    const { component } = props;
    if (component && !isValidElementType(component)) {
      return new Error("Invalid prop 'component' supplied to 'Routes': the prop is not a valid React component");
    }
    return null;
  },
};

Routes.defaultProps = {
  component: null,
};

export default Routes;
