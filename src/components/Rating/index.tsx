import React from 'react';
import { format, parseISO } from 'date-fns';

import Stars from '../Stars';

import { Container } from './styles';

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
        <Stars rating={5} />
        {rating.user.name} em&nbsp;
        {format(parseISO(rating.created_at), 'dd/MM/yyyy hh:mm')}
        <p>{rating.comment}</p>
      </div>
    </Container>
  );
};

export default Rating;
