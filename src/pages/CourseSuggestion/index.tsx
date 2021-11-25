import React, { useCallback, useRef, useState, useEffect } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import { FiFile } from 'react-icons/fi';
import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';

import { Container, Content, AnimationContainer } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

interface CategoryDTO {
  id: string;
  name: string;
}

interface InstructorDTO {
  id: string;
  name: string;
}

const CourseSuggestion: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const [categories, setCategories] = useState<CategoryDTO[]>();
  const [instructors, setInstructors] = useState<InstructorDTO[]>();
  const [platforms, setPlatforms] = useState<InstructorDTO[]>();

  useEffect(() => {
    api.get(`/categories`).then((response) => {
      setCategories(response.data);
    });
    api.get(`/instructors`).then((response) => {
      setInstructors(response.data);
    });
    api.get(`/platforms`).then((response) => {
      setPlatforms(response.data);
    });
  }, []);

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 digítos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer seu logon no Fixar!',
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
      <Header />
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Adicione o curso desejado</h1>
            <h3>Contribuia compartilhando cursos que você gostou 🤓</h3>

            <Input name="name" type="text" placeholder="Nome do curso" />
            <Textarea placeholder="Descrição do curso" name="bio" />
            <Input name="workload" type="text" placeholder="Carga horária" />
            <Input
              name="url"
              type="text"
              placeholder="Endereço do curso (site)"
            />
            <Input name="pricing" type="text" placeholder="Forma de compra" />
            <Input name="video" type="text" placeholder="Vídeo" />
            <Input
              name="poster"
              type="file"
              icon={FiFile}
              placeholder="Imagem"
              accept=".jpg, .jpeg, .png"
            />
            <div className="row">
              <Select name="pricing">
                <option>Grátis</option>
                <option>Assinatura</option>
                <option>Compra</option>
              </Select>
              <Select name="pricing">
                <option>Com certifição</option>
                <option>Sem certificação</option>
              </Select>
            </div>
            <div className="row">
              <Select name="level">
                <option>Básico</option>
                <option>Intermediário</option>
                <option>Avançado</option>
              </Select>
              <Select name="category">
                {categories?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </Select>
            </div>
            <div className="row">
              <Select name="plataforma">
                {instructors?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </Select>
              <Select name="professor">
                {platforms?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </Select>
            </div>
            <Button type="submit">Cadastrar</Button>
          </Form>
        </AnimationContainer>
      </Content>
      <Footer />
    </Container>
  );
};

export default CourseSuggestion;
