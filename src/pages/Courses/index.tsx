import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Content,
  Courses,
  Section,
  Categories,
  Platforms,
} from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Course from '../../components/Course';
import Alert from '../../components/Alert';

import api from '../../services/api';

interface CourseDTO {
  id: string;
  name: string;
  workload: string;
  rating_media: number;
  platform: PlatformDTO;
  category: CategoryDTO;
  name_instructor: string;
  instructor: {
    name: string;
  };
}

interface CategoryDTO {
  id: string;
  name: string;
}

interface PlatformDTO {
  id: string;
  name: string;
  about: string;
  courses: CourseDTO[];
}

const CoursesPage: React.FC = () => {
  const [categories, setCategories] = useState<CategoryDTO[]>([]);
  const [platforms, setPlatforms] = useState<PlatformDTO[]>([]);
  const [courses, setCourses] = useState<CourseDTO[]>([]);

  useEffect(() => {
    api.get(`/categories`).then((response) => {
      setCategories(response.data);
    });
  }, []);

  useEffect(() => {
    api.get(`/courses`).then((response) => {
      setCourses(response.data);
    });
  }, []);

  useEffect(() => {
    api.get(`/platforms`).then((response) => {
      setPlatforms(response.data);
    });
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <Courses>
          <p>
            <span>Todos os cursos disponibilizado</span>
          </p>
          <h1>Cursos</h1>
          <Section>
            {courses.map((course) => (
              <Course key={course.id} course={course} />
            ))}
            {courses.length < 1 && <Alert>Nenhum curso publicado</Alert>}
          </Section>
        </Courses>
        <aside>
          <Categories>
            <h1>Categorias</h1>
            <ul>
              {categories.map((category) => (
                <li key={category.id}>
                  <Link to={`/category/${category.id}`}>{category.name}</Link>
                </li>
              ))}
            </ul>
          </Categories>
          <Platforms>
            <h1>Plataformas</h1>
            <ul>
              {platforms.map((platform) => (
                <li key={platform.id}>
                  <Link to={`/platform/${platform.id}`}>{platform.name}</Link>
                </li>
              ))}
            </ul>
          </Platforms>
        </aside>
      </Content>
      <Footer />
    </Container>
  );
};

export default CoursesPage;
