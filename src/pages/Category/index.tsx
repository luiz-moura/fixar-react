import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import { Container, Content, Courses, Section, Categories } from './styles';

import Header from '../../components/Header';
import Course from '../../components/Course';
import Footer from '../../components/Footer';
import Alert from '../../components/Alert';

import api from '../../services/api';
import { useToast } from '../../hooks/toast';

interface CategoryDTO {
  id: string;
  name: string;
  courses: CourseDTO[];
}

interface CourseDTO {
  id: string;
  name: string;
  workload: string;
  active: boolean;
  rating_media: number;
  platform: Platform;
  category: CategoryDTO;
  instructor: {
    name: string;
  };
}

interface Platform {
  id: string;
  name: string;
  about: string;
  courses: CourseDTO[];
}

interface Params {
  category_id: string;
}

const CategoryPage: React.FC = () => {
  const { category_id } = useParams<Params>();

  const [categories, setCategories] = useState<CategoryDTO[]>([]);
  const [category, setCategory] = useState<CategoryDTO>();

  const { addToast } = useToast();
  const history = useHistory();

  useEffect(() => {
    api.get(`/categories`).then((response) => {
      setCategories(response.data);
    });
  }, []);

  useEffect(() => {
    api
      .get(`/categories/show/${category_id}`)
      .then((response) => {
        setCategory(response.data);
      })
      .catch(() => {
        history.push('/courses');

        addToast({
          type: 'error',
          title: 'Curso não encotrado',
          description: 'Ocorreu na busca pela plataforma de cursos',
        });
      });
  }, [category_id, addToast, history]);

  return (
    <Container>
      <Header />
      <Content>
        {category && (
          <>
            <Courses>
              <p>
                <span>
                  <Link to="/courses">Cursos</Link>
                </span>
                <span>{category.name}</span>
              </p>
              <h1>{category.name}</h1>
              <Section>
                {category.courses.map(
                  (course) =>
                    course.active && <Course key={course.id} course={course} />,
                )}
                {category.courses.length < 1 && (
                  <Alert>Nenhum curso encontrado para essa categoria</Alert>
                )}
              </Section>
            </Courses>
            <aside>
              <Categories>
                <h1>Categorias</h1>
                <ul>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <Link to={`/category/${cat.id}`}>{cat.name}</Link>
                    </li>
                  ))}
                </ul>
              </Categories>
            </aside>
          </>
        )}
      </Content>
      <Footer />
    </Container>
  );
};

export default CategoryPage;
