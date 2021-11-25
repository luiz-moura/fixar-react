import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import { FiPower } from 'react-icons/fi';
import { Container, HeaderContent, Profile, SuggestCourse } from './styles';

import logoImg from '../../assets/logo.svg';
import userAvatar from '../../assets/ninja.png';
import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();

  const handleNameProfile = useCallback(() => {
    const firstName = user.name.split(' ')[0];

    return firstName;
  }, [user.name]);

  return (
    <Container>
      <HeaderContent>
        <Link to="/">
          <img src={logoImg} alt="Fixar" />
        </Link>
        <SuggestCourse>
          {user.admin && <Link to="/pending-courses">Aprovar cursos</Link>}
          <Link to="/course-suggestion">Adicionar curso</Link>
        </SuggestCourse>
        <Profile>
          <img src={user.avatar_url || userAvatar} alt={user.name} />
          <div>
            <span>Bem-vindo,</span>
            <strong>{handleNameProfile()}</strong>
          </div>
        </Profile>
        <button type="button" onClick={signOut}>
          <FiPower />
        </button>
      </HeaderContent>
    </Container>
  );
};

export default Header;
