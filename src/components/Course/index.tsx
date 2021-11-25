import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowRightCircle, FiClock } from 'react-icons/fi';
import { Container } from './styles';

import Stars from '../Stars';

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

interface CourseProps {
  course: CourseDTO;
  path?: string | null;
}

const Course: React.FC<CourseProps> = ({ course, path }) => {
  return (
    <Container>
      <img
        src="https://avatars.githubusercontent.com/u/57726726?v=4"
        alt={course.name}
      />
      <div>
        <strong>
          <Link to={`course/${course.id}`}>{course.name}</Link>
        </strong>
        <p>
          <span>Plataforma:&nbsp;</span>{' '}
          <Link to={`platform/${course.platform.id}`}>
            {course.platform.name}
          </Link>
        </p>
        <p>Instrutor:&nbsp; {course.instructor.name}</p>
        <p>
          <FiClock />
          &nbsp;{course.workload}
        </p>
        <p>
          <Stars rating={5} />
          <Link to={`${path || '/course/'}${course.id}`}>
            Ver detalhes
            <FiArrowRightCircle />
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Course;
