import React, { useState } from 'react';
import { FiPower, FiSettings, FiUser } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

import {
  Container, Content, MenuList, ItemList,
} from './styles';

const ProfileMenu: React.FC = () => {
  const { signOut } = useAuth();
  const [visible, setvisible] = useState(false);
  function hangleToggleVisible() {
    setvisible(!visible);
  }
  return (
      <Container>
        <Content onClick={hangleToggleVisible}>
          <img src="https://avatars3.githubusercontent.com/u/11380226?s=460&u=1cfdf11001473b6f40755e64ea1fa9dcff649f1e&v=4"
            alt="Sandro Campos" sizes="32"/>
        </Content>
        <MenuList visible={visible}>
        <ItemList>
             <FiUser/>
             <p>Profile</p>
          </ItemList>
          <ItemList>
             <FiSettings/>
             <p>Configurações</p>
          </ItemList>
          <ItemList onClick={signOut}>
              <FiPower/>
              <p>Logout</p>
          </ItemList>

        </MenuList>
      </Container>
  );
};

export default ProfileMenu;
