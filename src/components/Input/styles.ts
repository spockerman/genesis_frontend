import styled, { css } from 'styled-components';
import tooltip from '../Tooltip';

interface ContainerProps{
  isFocused:boolean;
  isField:boolean;
  isErrored:boolean;
}

export const Container = styled.div<ContainerProps>`
    background:#232129;
    border-radius:10px;
    padding:16px;
    width:90%;

    border: 2px solid #232129;
    color:#666360;

    display:flex;
    align-items:center;

    & + div{
      margin-top: 8px;
    }

    ${(props) => props.isFocused && css`
    color: #00EBC1;
    border-color:#00EBC1;
    `}
    ${(props) => props.isErrored && css`
    border-color:#c53030;
    `}


input{
    flex:1;
    background:transparent;
    border:0;
    color:#F4EDE8;

    &::placeholder{
      color:#666360;
    }

  }
svg{
  margin-right: 16px;
}
`;
export const Error = styled(tooltip)`
height:20px;
margin-left:16px;
svg{
  margin:0;
  color:#c53030;
  size:20
}
span{
  background:#c53030;
  color:#FFF;
  &::before{
  border-color:#c53030 transparent;
}
}

`;
