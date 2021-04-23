import React from 'react';
import { FiMenu } from 'react-icons/fi';

import ProfileMenu from '../ProfileMenu';
import {
  Container, HeaderMain, HeaderContent, HeaderInfo,
} from './styles';

import logoImg from '../../assets/header.png';

const Header: React.FC = () => (<Container>
    <HeaderMain>
      <HeaderContent>
        <HeaderInfo>
        <button type="button">
            <FiMenu/>
        </button>
          <img src={logoImg} alt="all.music"/>
        </HeaderInfo>

        <ProfileMenu/>

      </HeaderContent>
    </HeaderMain>

    </Container>);
export default Header;
