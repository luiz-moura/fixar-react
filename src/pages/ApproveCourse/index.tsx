import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { FiStar, FiCheckCircle } from 'react-icons/fi';

import { Container, Content, Courses, Section, About, NoVideo } from './styles';

import Header from '../../components/Header';

import api from '../../services/api';
import { useToast } from '../../hooks/toast';

interface CourseDTO {
  id: string;
  name: string;
  price: string;
  pricing: string;
  level: string;
  workload: string;
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
      .get(`/courses/show/${course_id}?disabled=true`)
      .then((response) => {
        setCourse(response.data);
      })
      .catch(() => {
        history.push('/courses');

        addToast({
          type: 'error',
          title: 'Curso não encotrado',
          description: 'Ocorreu na busca pela curso',
        });
      });
  }, [course_id, addToast, history]);

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
                  <Link to="/courses">Cursos</Link>
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
                    src="https://www.youtube.com/embed/Ejkb_YpuHWs"
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
              </ul>
              <hr />
              <div>
                <span>Instrutor: </span> {course.instructor.name}
              </div>
              <a href={course.platform.url}>
                <FiCheckCircle /> Aprovar Curso
              </a>
            </About>
          </>
        )}
      </Content>
    </Container>
  );
};

export default ApproveCourse;
