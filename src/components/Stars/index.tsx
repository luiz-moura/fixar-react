import React from 'react';

import { FiStar } from 'react-icons/fi';

import { Container } from './styles';

interface CourseProps {
  rating: number;
}

const Stars: React.FC<CourseProps> = ({ rating }) => {
  return (
    <Container>
      <p>
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
      </p>
    </Container>
  );
};

export default Stars;
