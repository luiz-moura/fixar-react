import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

import { Container, Content, Courses, Section, About, NoVideo } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import api from '../../services/api';
import { useToast } from '../../hooks/toast';

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

const ApproveCourse: React.FC = () => {
  const { course_id } = useParams<Params>();

  const [course, setCourse] = useState<CourseDTO>();

  const { addToast } = useToast();
  const history = useHistory();

  useEffect(() => {
    api
      .get(`/courses-pending/show/${course_id}`)
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

  const handleCourseApprove = useCallback(async () => {
    try {
      const data = {
        active: true,
      };

      await api.put(`courses/${course_id}`, data);

      history.push('/pending-courses');

      addToast({
        type: 'success',
        title: 'Curso aprovado!',
        description: 'O curso foi disponibilizado para todos usuários!',
      });
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro na atualização',
        description: 'Ocorreu um erro ao aprovar o curso, tente novamente',
      });
    }
  }, [course_id, history, addToast]);

  return (
    <Container>
      <Header />
      <Content>
        {course && (
          <>
            <Courses>
              <h1>{course.name}</h1>
              <p>
                <span>
                  <Link to="/">Cursos</Link>
                </span>
                <span>
                  <Link to="/pending-courses">Pendentes</Link>
                </span>
                <span>{course.name}</span>
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
              <button type="button" onClick={handleCourseApprove}>
                <FiCheckCircle /> Aprovar Curso
              </button>
            </About>
          </>
        )}
      </Content>
      <Footer />
    </Container>
  );
};

export default ApproveCourse;
