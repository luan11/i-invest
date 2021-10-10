import { useBreakpointValue, Box, Container, Button } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';

import useAuth from '../../hooks/useAuth';

import Logo from '../../components/Logo';

function Home() {
  const buttonSize = useBreakpointValue({
    base: `md`,
    md: `lg`,
  });
  const { isAuthenticated, login, isLoadingButton } = useAuth();
  const history = useHistory();

  function goToDashboard() {
    history.push(`/dashboard`);
  }

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
          borderColor="gray.100"
          rounded="md"
          my="auto"
          display="flex"
          justifyContent="center"
        >
          <Button
            leftIcon={isAuthenticated ? <AiOutlineArrowRight /> : <BsGoogle />}
            size={buttonSize}
            colorScheme="green"
            onClick={isAuthenticated ? goToDashboard : login}
            isLoading={isLoadingButton}
          >
            Acessar
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
