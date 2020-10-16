import React, { useCallback } from 'react';
import logoImg from '../../assets/Logo.svg';
import {FiArrowLeft, FiMail, FiLock, FiUser} from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background } from './style';
import { Form } from '@unform/web';
import * as Yup from 'yup';

const SignUp: React.FC = () =>{
  const handleSubmit=useCallback(async(data:object)=>{
    try{
      const schema  = Yup.object().shape({
        name:Yup.string().required('Nome obrigatório'),
        email:Yup.string().required('E-mail obrigatório').email('Digite um E-mail válido'),
        password:Yup.string().min(8, 'No mínimo 8 digitos'),
      });
      await schema.validate(data, {
        abortEarly:false,
      });
    }catch(err){
      console.log(err);
    }
  },[]);
  return(
    <Container>
<Background />
  <Content>
    <img src={logoImg} alt="GoBarber"/>
    <Form onSubmit={handleSubmit}>

      <h1>Faça o seu cadastro</h1>

      <Input name="nome" icon={FiUser} placeholder="Nome"/>

      <Input name="email" icon={FiMail} placeholder="E-mail"/>

      <Input name="password" icon={FiLock} type="password" placeholder="Password"/>

      <Button type="submit">Cadastrar</Button>


    </Form>
    <a href="login">
        <FiArrowLeft/>
        Voltar para logon
      </a>
  </Content>
</Container>
  );
}

export default SignUp;
