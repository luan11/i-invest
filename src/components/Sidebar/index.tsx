import { Flex } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { AiOutlineDashboard, AiOutlineFileText } from 'react-icons/ai';
import { IoExitOutline } from 'react-icons/io5';

import Logo from '../Logo';
import SidebarLink from '../../ui/SidebarLink';

function Sidebar() {
  const { pathname } = useLocation();

  if (pathname === `/`) {
    return null;
  }

  return (
    <Flex
      flexDirection="column"
      h="100vh"
      w="20vw"
      boxShadow="xl"
      zIndex="1"
      pt="6"
    >
      <Logo />

      <Flex marginTop="6" flexDirection="column" flex="1">
        <SidebarLink
          pathname={pathname}
          to="/dashboard"
          Icon={AiOutlineDashboard}
          text="Dashboard"
        />

        <SidebarLink
          pathname={pathname}
          to="/papers"
          Icon={AiOutlineFileText}
          text="Papéis"
        />

        <SidebarLink Icon={IoExitOutline} text="Sair" isExit />
      </Flex>
    </Flex>
  );
}

export default Sidebar;
