import { ChakraProvider } from '@chakra-ui/react';

import theme from './ui/theme';
import { AuthContextProvider } from './contexts/AuthContext';

import Router from './components/Router';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </ChakraProvider>
  );
}

export default App;
