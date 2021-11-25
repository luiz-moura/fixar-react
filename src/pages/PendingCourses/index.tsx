import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Courses, Section } from './styles';

import Header from '../../components/Header';
import Course from '../../components/Course';
import Alert from '../../components/Alert';

import api from '../../services/api';
import Footer from '../../components/Footer';

interface CourseDTO {
  id: string;
  name: string;
  workload: string;
  platform: PlatformDTO;
  category: CategoryDTO;
  rating_media: number;
  instructor: {
    name: string;
  };
}

interface PlatformDTO {
  id: string;
  name: string;
  about: string;
  url?: string;
  courses: CourseDTO[];
}

interface CategoryDTO {
  id: string;
  name: string;
}

const ApproveCourses: React.FC = () => {
  const [courses, setCourses] = useState<CourseDTO[]>([]);

  useEffect(() => {
    api.get(`/courses-pending`).then((response) => {
      setCourses(response.data);
    });
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <Courses>
          <h1>Cursos pendentes</h1>
          <p>
            <span>
              <Link to="/courses">Cursos</Link>
            </span>
            <span>Pendentes</span>
          </p>
          <Section>
            {courses.map((course) => (
              <Course
                path="/approve-course/"
                key={course.id}
                course={course}
                rating={false}
              />
            ))}
            {courses.length < 1 && <Alert>Nenhum curso pendente</Alert>}
          </Section>
        </Courses>
      </Content>
      <Footer />
    </Container>
  );
};

export default ApproveCourses;
