import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Flex, Spinner } from '@chakra-ui/react';

import useAuth from '../../hooks/useAuth';

import Sidebar from '../../components/Sidebar';
import PrivateRoute from '../PrivateRoute';

import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';

function Router() {
  const { isLoading, isAuthenticated } = useAuth();

  return isLoading || isAuthenticated === null ? (
    <Flex justifyContent="center" alignItems="center" h="100vh" w="full">
      <Spinner color="green.400" size="xl" />
    </Flex>
  ) : (
    <BrowserRouter>
      <Flex>
        {isAuthenticated && <Sidebar />}

        <Flex as="main" flex="1" flexDirection="column">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <PrivateRoute path="/dashboard" exact>
              <h1>Dashboard</h1>
            </PrivateRoute>

            <PrivateRoute path="/categories" exact>
              <h1>Categories</h1>
            </PrivateRoute>

            <PrivateRoute path="/investments" exact>
              <h1>Meus Investimentos</h1>
            </PrivateRoute>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Flex>
      </Flex>
    </BrowserRouter>
  );
}

export default Router;
