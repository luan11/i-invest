import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';

import Sidebar from '../../components/Sidebar';
import Home from '../../pages/Home';

function Router() {
  return (
    <BrowserRouter>
      <Flex>
        <Sidebar />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/dashboard" exact>
            <h1>Dashboard</h1>
          </Route>

          <Route path="/papers" exact>
            <h1>Papers</h1>
          </Route>
        </Switch>
      </Flex>
    </BrowserRouter>
  );
}

export default Router;
