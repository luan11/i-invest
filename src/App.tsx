import { ChakraProvider } from '@chakra-ui/react';

import theme from './ui/theme';

import Router from './components/Router';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
}

export default App;
