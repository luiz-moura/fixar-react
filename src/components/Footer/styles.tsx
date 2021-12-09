import styled from 'styled-components';

export const Container = styled.footer`
  padding: 32px 0;
`;

export const FooterContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  text-align: center;

  ul {
    display: inline-flex;
    margin-top: 10px;
    list-style: none;

    & > li {
      margin-left: 10px;
    }

    a {
      text-decoration: none;
    }
  }
`;
