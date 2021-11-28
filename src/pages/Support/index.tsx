import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Textarea from '../../components/Textarea';

import { Container, Content, AnimationContainer } from './styles';

import logoImg from '../../assets/logo.svg';

interface FormData {
  name: string;
  about: string;
  workload: string;
  url: string;
  video: string;
  imagem: string;
  pricing: string;
}

const Support: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          subject: Yup.string().required('Descrição é obrigatória'),
          message: Yup.string().required('Mensagem é obrigatória'),
          email: Yup.string().required('E-mail é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('courses', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cursos cadastrado com sucesso!',
          description:
            'Obrigado por contribuir, curso cadastrado aguardando aprovação de um administrador!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        } else {
          addToast({
            type: 'error',
            title: 'Erro no cadastro',
            description: 'Ocorreu um erro ao fazer cadastro, tente novamente',
          });
        }
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <header>
        <div>
          <Link to="/">
            <FiArrowLeft />
            <img src={logoImg} alt="Fixar" />
          </Link>
        </div>
      </header>
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Suporte</h1>
            <h3>Diga-nos no que podemos ajudar</h3>

            <Input name="subject" type="text" placeholder="Digite o assunto" />
            <Textarea placeholder="Digite a mensagem" name="message" />
            <Input
              name="email"
              type="email"
              placeholder="Digite o e-mail para contato"
            />

            <Button type="submit">Enviar</Button>
          </Form>
        </AnimationContainer>
      </Content>
      <Footer />
    </Container>
  );
};

export default Support;
