import styled from 'styled-components';

export const Container = styled.div`

`;
export const HeaderMain = styled.header`
    position: fixed;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    max-width:1620px;
    height: 72px;
    padding: 0px 30px;
    background: rgb(32, 32, 36);
    top: 0px;
    z-index: 9998;
    transition: all 0.5s ease-in-out 0s;
    /* box-shadow: rgb(18, 18, 20) 0px 1rem 2rem; */
    opacity: 1;
    transform: translateY(0px);
    visibility: visible;


`;

export const HeaderContent = styled.div`
  width:100%;
  display: flex;
  justify-content: space-between;
  button{
    margin-right: 35px;
    background: transparent;
    border:0;
    margin-left:15px;
    svg{
      color:#999591;
      width:32px;
      height:32px;
    }
  }
`;

export const HeaderInfo = styled.div`
  display:flex;
  align-items:center;

  img{
    margin-left: 15px;
    width:40px;
    height:40px;
  }
`;

export const HeaderProfile = styled.div`
  display:flex;
  align-items:center;
  img{
    width:40px;
    height:40px;
    border-radius:50%;
    margin-right:35px;
  }

`;
