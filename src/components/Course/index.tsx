import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowRightCircle, FiClock } from 'react-icons/fi';
import { Container, Details } from './styles';

import Stars from '../Stars';

interface CourseDTO {
  id: string;
  name: string;
  workload: string;
  platform: PlatformDTO;
  category: CategoryDTO;
  rating_media: number;
  name_instructor: string;
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

interface CourseProps {
  course: CourseDTO;
  path?: string | null;
  rating?: boolean;
}

const Course: React.FC<CourseProps> = ({ course, path, rating }) => {
  return (
    <Container>
      {/* <img
        src="https://avatars.githubusercontent.com/u/57726726?v=4"
        alt={course.name}
      /> */}
      <div>
        <h2>
          <Link to={`/course/${course.id}`}>{course.name}</Link>
        </h2>
        <div className="row">
          Plataforma:&nbsp;{' '}
          <strong>
            <Link to={`/platform/${course.platform.id}`}>
              {course.platform.name}
            </Link>
          </strong>
        </div>
        <div className="row">
          Categoria:&nbsp;{' '}
          <strong>
            <Link to={`/category/${course.category.id}`}>
              {course.category.name}
            </Link>
          </strong>
        </div>
        <div className="row">
          {/* Instrutor:&nbsp; <strong>{course.instructor.name}</strong> */}
          Instrutor:&nbsp; <strong>{course.name_instructor}</strong>
        </div>
        <div className="row">
          <FiClock />
          <strong>&nbsp;{course.workload}</strong>
        </div>
        <Details>
          {rating && <Stars rating={5} />}
          <Link to={`${path || '/course/'}${course.id}`}>
            Ver detalhes
            <FiArrowRightCircle />
          </Link>
        </Details>
      </div>
    </Container>
  );
};

export default Course;
