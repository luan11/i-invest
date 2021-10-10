import { Flex, Avatar } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { AiOutlineDashboard, AiOutlineTags } from 'react-icons/ai';
import { FiTrendingUp } from 'react-icons/fi';
import { IoExitOutline, IoBulbOutline } from 'react-icons/io5';

import useAuth from '../../hooks/useAuth';

import Logo from '../Logo';
import SidebarLink from '../../ui/SidebarLink';

function Sidebar() {
  const { logout } = useAuth();
  const { pathname } = useLocation();

  if (pathname === `/`) {
    return null;
  }

  return (
    <Flex
      as="header"
      flexDirection="column"
      h="100vh"
      w="20vw"
      boxShadow="xl"
      zIndex="1"
      pt="6"
    >
      <Logo />

      <Flex
        w="full"
        alignItems="center"
        px="6"
        py="2"
        mt="4"
        mb="2"
        color="gray.700"
      >
        <Avatar name="Luan Novais" mr="2" bg="gray.400" color="white" />
        Bem-vindo(a), Luan
      </Flex>

      <Flex flexDirection="column" flex="1">
        <SidebarLink
          to="/dashboard"
          Icon={AiOutlineDashboard}
          text="Visão Geral"
        />

        <SidebarLink
          to="/categories"
          Icon={AiOutlineTags}
          text="Minhas Categorias"
        />

        <SidebarLink
          to="/investments"
          Icon={FiTrendingUp}
          text="Meus Investimentos"
        />

        <SidebarLink to="/dayTip" Icon={IoBulbOutline} text="Dica do Dia" />

        <SidebarLink Icon={IoExitOutline} text="Sair" isExit onClick={logout} />
      </Flex>
    </Flex>
  );
}

export default Sidebar;
