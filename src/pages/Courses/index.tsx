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
import Course from '../../components/Course';

import api from '../../services/api';

interface CourseDTO {
  id: string;
  name: string;
  workload: string;
  rating_media: number;
  platform: PlatformDTO;
  category: CategoryDTO;
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
          <h1>Cursos</h1>
          <p>
            <span>Todos os cursos</span>
          </p>
          <Section>
            {courses.map((course) => (
              <Course key={course.id} course={course} />
            ))}
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
    </Container>
  );
};

export default CoursesPage;
