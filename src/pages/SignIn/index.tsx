import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import logoImg from '../../assets/Logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {
  Container, Content, Background, AnimationContainer,
} from './style';
import getValidationErrors from '../../utils/getValidationErrors';

interface SignInFormData{
  email:string,
  password:string,
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
    formRef.current?.setErrors({});
    const schema = Yup.object().shape({
      email: Yup.string().required('Digite seu E-mail'),
      password: Yup.string().required('Digite sua senha'),
    });
    await schema.validate(data, {
      abortEarly: false,
    });

    await signIn({
      email: data.email,
      password: data.password,
    });
    history.push('/dashboard');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const erros = getValidationErrors(err);
        formRef.current?.setErrors(erros);
      } else {
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer o login.',
        });
      }
    }
  }, [signIn, addToast, history]);

  return (
    <Container>
      <Content>
        <AnimationContainer>
            <img src={logoImg} alt="GoBarber"/>
            <Form ref={formRef} onSubmit={handleSubmit}>

              <h1>Faça o seu login</h1>

              <Input name="email" icon={FiMail} placeholder="E-mail"/>

              <Input name="password" icon={FiLock} type="password" placeholder="Password"/>

              <Button type="submit">Entrar</Button>
              <a href="forgot">Esqueci minha senha</a>

            </Form>

            <Link to="/signup">
                <FiLogIn/>
                Criar conta
              </Link>
          </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
