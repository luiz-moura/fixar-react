import React, { HTMLAttributes } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { Container } from './styles';

type Props = HTMLAttributes<Element>;

const Alert: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <FiAlertCircle />
      {children}
    </Container>
  );
};

export default Alert;
