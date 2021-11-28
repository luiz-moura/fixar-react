import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { FiStar, FiSend } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, Courses, Section, About, NoVideo } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Rating from '../../components/Rating';
import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';

interface CourseDTO {
  id: string;
  name: string;
  price: string;
  pricing: string;
  level: string;
  workload: string;
  certification: string;
  about: string;
  video: string;
  rating_media: number;
  ratings: RatingDTO[];
  platform: {
    id: string;
    name: string;
    url: string;
  };
  instructor: {
    id: string;
    name: string;
  };
  category: {
    id: string;
    name: string;
  };
}

interface RatingDTO {
  id: string;
  value: number;
  comment: string;
  created_at: string;
  user: {
    name: string;
    avatar_url: string;
    id: string;
  };
}

interface Params {
  course_id: string;
}

interface RatingFormData {
  value: number;
  comment: string;
}

const CoursePage: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { user } = useAuth();

  const { course_id } = useParams<Params>();

  const [course, setCourse] = useState<CourseDTO>();

  const { addToast } = useToast();
  const history = useHistory();

  useEffect(() => {
    api
      .get(`/courses/show/${course_id}`)
      .then((response) => {
        setCourse(response.data);
      })
      .catch(() => {
        history.push('/');

        addToast({
          type: 'error',
          title: 'Curso não encotrado',
          description: 'Ocorreu na busca pela curso',
        });
      });
  }, [course_id, addToast, history]);

  const handleSubmit = useCallback(
    async (data: RatingFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          comment: Yup.string().required('Comentário é obrigatório'),
          // value: Yup.string().required('Selecione a avaliação'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        api
          .post(`/ratings/`, {
            course_id,
            value: 5,
            comment: data.comment,
          })
          .then(() => {
            addToast({
              type: 'success',
              title: 'Comentário enviado com sucesso',
              description:
                'Obrigado por comentar, você está contribuindo para melhorar a experiência de todos usuários',
            });

            history.go(0);
          })
          .catch(({ response }) => {
            if (response.status === 403) {
              addToast({
                type: 'info',
                title: 'Você já avaliou esse curso',
                description: 'Você só pode avaliar uma unica vez cada curso',
              });

              return;
            }

            addToast({
              type: 'error',
              title: 'Erro ao enviar comentário',
              description:
                'Ocorreu um erro ao enviar seu comentário, tente novamente mais tarde',
            });
          });
      } catch (err) {
        const errors = getValidationErrors(err as Yup.ValidationError);

        formRef.current?.setErrors(errors);
      }
    },
    [addToast, course_id, history],
  );

  return (
    <Container>
      <Header />
      <Content>
        {course && (
          <>
            <Courses>
              <p>
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
              </p>
              <h1>{course.name}</h1>
              <p>
                <span>
                  <Link to="/">Cursos</Link>
                </span>
                <span>
                  <Link to={`/category/${course.category.id}`}>
                    {course.category.name}
                  </Link>
                </span>
                <span title={course.name}>{course.name.substr(0, 30)}...</span>
              </p>
              <Section>
                {course.video && (
                  <iframe
                    width="100%"
                    height="400px"
                    src={`https://www.youtube.com/embed/${
                      course.video.split('watch?v=')[1]
                    }`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
                {!course.video && <NoVideo>Sem vídeo de apresentação</NoVideo>}
                <p>{course.about}</p>
                <h3>
                  Curso disponibilizado por{' '}
                  <Link to={`/platform/${course.platform.id}`}>
                    {course.platform.name}
                  </Link>
                </h3>
                <h4>Avaliações {course.ratings.length}</h4>
                {course.ratings.map((ratingz) => (
                  <Rating key={ratingz.id} rating={ratingz} />
                ))}
                {!course.ratings.find((rat) => rat.user.id === user.id) && (
                  <Form ref={formRef} onSubmit={handleSubmit}>
                    <h4>Avalie esse curso</h4>
                    {/* <p>
                       <FiStar onClick={handleStartChange(1)} />
                    <FiStar onClick={handleStartChange(2)} />
                    <FiStar onClick={handleStartChange(3)} />
                    <FiStar onClick={handleStartChange(4)} />
                    <FiStar onClick={handleStartChange(5)} />
                    </p> */}
                    <Input
                      name="comment"
                      type="text"
                      placeholder="Escreve aqui seu comentário"
                    />
                    <Button type="submit">
                      <FiSend />
                      &nbsp; Avaliar
                    </Button>
                  </Form>
                )}
              </Section>
            </Courses>
            <About>
              <h2>Detalhes do curso</h2>
              <ul>
                <li>
                  <span>Tempo de curso: </span> {course.workload}
                </li>
                <li>
                  <span>Precificação: </span> {course.pricing}
                </li>
                <li>
                  <span>Nível de conhecimento desejavel: </span> {course.level}
                </li>
                <li>
                  <span>Certificação: </span> {course.certification}
                </li>
              </ul>
              <hr />
              <div>
                <span>Instrutor: </span> {course.instructor.name}
              </div>
              <a href={course.platform.url}>Acessar curso</a>
            </About>
          </>
        )}
      </Content>
      <Footer />
    </Container>
  );
};

export default CoursePage;
