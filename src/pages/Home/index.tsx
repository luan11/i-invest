import { useBreakpointValue, Box, Container, Button } from '@chakra-ui/react';
import { BsGoogle } from 'react-icons/bs';

import Logo from '../../components/Logo';

function Home() {
  const buttonSize = useBreakpointValue({
    base: `md`,
    md: `lg`,
  });

  return (
    <Box w="100%" h="100vh" bg="white" paddingY="24">
      <Container
        maxW="container.lg"
        height="full"
        sx={{ display: `flex`, flexDirection: `column`, alignItems: `center` }}
      >
        <Logo />

        <Box
          maxW="sm"
          py="8"
          px="16"
          border="2px"
          borderColor="green.100"
          rounded="md"
          my="auto"
          display="flex"
          justifyContent="center"
        >
          <Button leftIcon={<BsGoogle />} size={buttonSize} colorScheme="green">
            Acessar
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
