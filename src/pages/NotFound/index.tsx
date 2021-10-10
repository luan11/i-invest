import {
  useBreakpointValue,
  Flex,
  Image,
  Heading,
  Button,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

function NotFound() {
  const imageMaxW = useBreakpointValue({
    base: `100%`,
    lg: `50%`,
  });

  const history = useHistory();

  const handleButtonClick = () => history.goBack();

  return (
    <Flex
      flex="1"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Image src="assets/images/coding.svg" alt="Coding" maxW={imageMaxW} />
      <Heading my="10" color="gray.700" size="lg">
        Página não encontrada ou em construção
      </Heading>
      <Button
        leftIcon={<AiOutlineArrowLeft />}
        size="md"
        colorScheme="green"
        onClick={handleButtonClick}
      >
        Voltar
      </Button>
    </Flex>
  );
}

export default NotFound;
