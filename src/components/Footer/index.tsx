import React from 'react';
import { Link } from 'react-router-dom';

import { Container, FooterContent } from './styles';

const Footer: React.FC = () => (
  <Container>
    <FooterContent>
      <ul>
        <li>Fixar 2021.</li>
        <li>
          <Link to="/support">Suporte</Link>
        </li>
        <li>
          <Link to="/privacy">Privacidade</Link>
        </li>
      </ul>
    </FooterContent>
  </Container>
);

export default Footer;
