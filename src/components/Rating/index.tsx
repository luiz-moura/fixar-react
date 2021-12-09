import React from 'react';
import { format, parseISO } from 'date-fns';

import Stars from '../Stars';

import { Container, Author } from './styles';

import userAvatar from '../../assets/ninja.png';

interface Rating {
  id: string;
  value: number;
  comment: string;
  created_at: string;
  user: {
    name: string;
    avatar_url: string;
  };
}

interface RatingProps {
  rating: Rating;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  return (
    <Container>
      <img src={rating.user.avatar_url || userAvatar} alt={rating.user.name} />
      <div>
        <Author>
          {/* <Stars rating={5} /> */}
          <span>{rating.user.name} em&nbsp;</span>
          {format(parseISO(rating.created_at), 'dd/MM/yyyy hh:mm')}
        </Author>
        <p>{rating.comment}</p>
      </div>
    </Container>
  );
};

export default Rating;
