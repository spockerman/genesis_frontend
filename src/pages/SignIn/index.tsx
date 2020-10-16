import React from 'react';
import logoImg from '../../assets/Logo.svg';
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background } from './style';
import { Form } from '@unform/web';



const SignIn: React.FC = () =>{
  function handleSubmit(data:object):void{
    console.log(data);

  }
  return(
    <Container>

  <Content>
    <img src={logoImg} alt="GoBarber"/>
    <Form onSubmit={handleSubmit}>

      <h1>Faça o seu login</h1>



      <Input name="email" icon={FiMail} placeholder="E-mail"/>

      <Input name="password" icon={FiLock} type="password" placeholder="Password"/>

      <Button type="submit">Entrar</Button>
      <a href="forgot">Esqueci minha senha</a>

    </Form>

  <a href="login">
      <FiLogIn/>
      Criar conta
    </a>
  </Content>
  <Background />
</Container>
  );
}

export default SignIn;



