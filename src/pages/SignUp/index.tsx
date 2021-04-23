import React, { useCallback, useRef } from 'react';
import {
  FiArrowLeft, FiMail, FiLock, FiUser,
} from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import logoImg from '../../assets/Logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {
  Container, Content, Background, AnimationContainer,
} from './style';
import getValidationErrors from '../../utils/getValidationErrors';

interface SignUpFormData{
  name: string;
  email:string;
  password:string;
}
const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const handleSubmit = useCallback(async (data:SignUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um E-mail válido'),
        password: Yup.string().min(8, 'No mínimo 8 digitos'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      await api.post('/users', data);
      history.push('/');
      addToast({
        type: 'success',
        title: 'Cadastro realizado',
        description: 'Voçê já pode fazer o seu login',

      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const erros = getValidationErrors(err);
        formRef.current?.setErrors(erros);
      } else {
        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro no seu cadastro.',
        });
      }
    }
  }, [addToast, history]);
  return (
    <Container>
    <Background />
    <Content>
      <AnimationContainer>
        <img src={logoImg} alt="GoBarber"/>
        <Form ref={formRef} onSubmit={handleSubmit}>

          <h1>Faça o seu cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Nome"/>

          <Input name="email" icon={FiMail} placeholder="E-mail"/>

          <Input name="password" icon={FiLock} type="password" placeholder="Password"/>

          <Button type="submit">Cadastrar</Button>

        </Form>
        <Link to="/">
            <FiArrowLeft/>
            Voltar para logon
          </Link>
        </AnimationContainer>
    </Content>
  </Container>
  );
};

export default SignUp;
