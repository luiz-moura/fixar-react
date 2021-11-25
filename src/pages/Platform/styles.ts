import styled from 'styled-components';

export const Container = styled.div`
  aside {
    width: 380px;

    > div {
      margin-bottom: 20px;
    }

    a {
      text-decoration: none;
      color: #976f00;
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`;

export const Courses = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
  }

  p {
    margin-top: 8px;
    display: flex;
    align-items: center;
    font-weight: 500;
    text-align: justify;

    span {
      display: flex;
      align-items: center;
      color: #ff9000;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: #ff9000;
      margin: 0 8px;
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    color: #999591;
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid #3e3b47;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`;

export const Categories = styled.div`
  ul {
    list-style: circle;
    padding: 0 0 0 20px;
    margin-bottom: 10px;
    line-height: 2rem;
    font-weight: 500;
  }
`;

export const Platforms = styled.div`
  ul {
    list-style: circle;
    padding: 0 0 0 20px;
    margin-bottom: 10px;
    line-height: 2rem;
    font-weight: 500;
  }
`;
