import styled from 'styled-components';

export const Container = styled.footer`
  padding: 32px 0;
`;

export const FooterContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    list-style: none;

    & > li {
      margin-left: 10px;
    }

    a {
      text-decoration: none;
    }
  }
`;
