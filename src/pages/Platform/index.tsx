import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import { Container, Content, Courses, Section, Platforms } from './styles';

import Header from '../../components/Header';
import Course from '../../components/Course';

import api from '../../services/api';
import { useToast } from '../../hooks/toast';

interface CourseDTO {
  id: string;
  name: string;
  workload: string;
  platform: PlatformDTO;
  category: CategoryDTO;
  active: string;
  rating_media: number;
  instructor: {
    name: string;
  };
}

interface PlatformDTO {
  id: string;
  name: string;
  about: string;
  courses: CourseDTO[];
}

interface CategoryDTO {
  id: string;
  name: string;
}

interface Params {
  platform_id: string;
}

const PlatformPage: React.FC = () => {
  const { platform_id } = useParams<Params>();

  const [platforms, setPlatforms] = useState<PlatformDTO[]>();
  const [platform, setPlatform] = useState<PlatformDTO | null>(null);

  const { addToast } = useToast();
  const history = useHistory();

  useEffect(() => {
    api.get(`/platforms`).then((response) => {
      setPlatforms(response.data);
    });
  }, []);

  useEffect(() => {
    api
      .get(`/platforms/show/${platform_id}`)
      .then((response) => {
        setPlatform(response.data);
      })
      .catch(() => {
        history.push('/courses');

        addToast({
          type: 'error',
          title: 'Plataforma de cursos não encontrada',
          description: 'Ocorreu na busca pela plataforma de cursos',
        });
      });
  }, [platform_id, addToast, history]);

  return (
    <>
      {platform && (
        <Container>
          <Header />
          <Content>
            <Courses>
              <p>
                <span>
                  <Link to="/courses">Cursos</Link>
                </span>
                <span>{platform.name}</span>
              </p>
              <h1>{platform.name}</h1>
              <p>{platform.about}</p>
              <Section>
                {platform.courses.map(
                  (course) =>
                    course.active && <Course key={course.id} course={course} />,
                )}
              </Section>
            </Courses>
            <aside>
              {platforms && (
                <Platforms>
                  <h1>Plataformas</h1>
                  <ul>
                    {platforms.map((platf) => (
                      <li key={platf.id}>
                        <Link to={`/platform/${platf.id}`}>{platf.name}</Link>
                      </li>
                    ))}
                  </ul>
                </Platforms>
              )}
            </aside>
          </Content>
        </Container>
      )}
    </>
  );
};

export default PlatformPage;
