import React from 'react';
import { Link } from 'react-router-dom';

import { FiPower } from 'react-icons/fi';
import { Container, HeaderContent, Profile, SuggestCourse } from './styles';

import logoImg from '../../assets/logo.svg';
import userAvatar from '../../assets/ninja.png';
import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <HeaderContent>
        <Link to="/">
          <img src={logoImg} alt="Fixar" />
        </Link>
        {user && (
          <>
            <SuggestCourse>
              {user.admin && <Link to="/pending-courses">Aprovar cursos</Link>}
              <Link to="/course-suggestion">Adicionar curso</Link>
            </SuggestCourse>
            <Profile>
              <img src={user.avatar_url || userAvatar} alt={user.name} />
              <div>
                <span>Bem-vindo,</span>
                <Link to="/profile">
                  <strong>{user.name.split(' ')[0]}</strong>
                </Link>
              </div>
            </Profile>
            <button type="button" onClick={signOut}>
              <FiPower />
            </button>
          </>
        )}
        {!user && (
          <SuggestCourse>
            <Link to="/signin">Login</Link>
            <Link to="/signup">Cadastro</Link>
          </SuggestCourse>
        )}
      </HeaderContent>
    </Container>
  );
};

export default Header;
