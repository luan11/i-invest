import { ComponentType } from 'react';
import { Link, Text } from '@chakra-ui/react';
import { useLocation, Link as RouterLink } from 'react-router-dom';

interface SidebarLinkProps {
  to?: string;
  Icon: ComponentType;
  text: string;
  isExit?: boolean;
  onClick?: () => void;
}

function SidebarLink({
  to = `/`,
  Icon,
  text,
  isExit = false,
  onClick,
}: SidebarLinkProps) {
  const { pathname } = useLocation();

  const isActive = to === pathname;

  if (isExit) {
    return (
      <Link
        py="3"
        px="6"
        fontSize="2xl"
        w="full"
        color="white"
        backgroundColor="red.400"
        display="flex"
        alignItems="center"
        onClick={onClick}
        mt="auto"
      >
        <Icon />
        <Text ml="2" fontSize="md">
          {text}
        </Text>
      </Link>
    );
  }

  return (
    <Link
      as={RouterLink}
      to={to}
      py="3"
      px="6"
      fontSize="2xl"
      w="full"
      color={isActive ? `white` : `green.400`}
      backgroundColor={isActive ? `green.400` : `transparent`}
      display="flex"
      alignItems="center"
      borderTop="2px"
      borderColor="gray.100"
    >
      <Icon />
      <Text ml="2" fontSize="md">
        {text}
      </Text>
    </Link>
  );
}

export default SidebarLink;
