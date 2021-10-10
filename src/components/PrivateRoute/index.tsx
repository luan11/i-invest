import { ReactNode } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

interface AuthRouteProps extends RouteProps {
  children: ReactNode;
}

function PrivateRoute({ children, ...rest }: AuthRouteProps) {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: `/`,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
