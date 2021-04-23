/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

interface MenuListProps{
  visible:boolean;
}

export const Container = styled.div`
img {
  width:52px;
  height:52px;
  border-radius:50%;
  border:0;
  display:flex;
  align-items:center;
  margin-top:10px;
  margin-right:35px;


}
`;
export const Content = styled.div`
  cursor:pointer;
`;

export const MenuList = styled.div<MenuListProps>`
    position: absolute;
    right: 0px;
    top: calc(100% + 20px);
    right: 75px;
    width: 256px;
    padding: 20px;
    background: rgb(32, 32, 36);
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.6) 0px 5px 20px;
    transition: opacity 0.2s ease 0s, visibility 0.2s ease 0s;
    opacity: 1;
    visibility: visible;
    display: ${(props) => (props.visible ? 'block' : 'none')};

    &::before{
      content:' ';
      position:absolute;
      border-radius:4px;
      right: 3px;
      top: calc(-15px);
      width:0;
      height:0;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-bottom: 15px solid rgb(32, 32, 36, 0.8);
    }

`;

export const ItemList = styled.div`
  color:#F4EDE8;
  display:flex;
  align-items:center;
  cursor: pointer;

  & + div{
    margin-top:15px;
    padding-top:15px;
    border-top: 1px solid rgba(0,255,0,0.3);
  }

  p {
    font-size:13px;
    line-height:18px;
    padding: 0 5px;
    margin: 0 5px;

  }

  }

  button{
    font-size:12px;
    border:0;
    background-color:none;

    svg{
      color:#999591;
      width:20px;
      height:20px;
    }
  }
`;
