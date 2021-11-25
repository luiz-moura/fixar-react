import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  aside {
    width: 380px;

    > div {
      margin-bottom: 20px;
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;

  a {
    color: #ff9000;
    text-decoration-style: wavy;
    text-decoration-color: #f77c7c;
  }
`;

export const NoVideo = styled.div`
  width: 100%;
  height: 400px;
  background: #ff9000;
  display: flex;
  align-items: center;
  justify-content: center;
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

    span {
      display: flex;
      align-items: center;
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

  p {
    text-align: justify;
    line-height: 1.6rem;
    margin-bottom: 20px;
  }

  h4 {
    margin: 30px 0 15px 0;
  }
`;

export const Course = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 16px 24px;
  border-radius: 10px;
  box-shadow: teal;

  div {
    flex: 1;
  }

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-right: 24px;
  }

  strong {
    color: #2f3640;
    font-size: 20px;
  }

  & + div {
    margin-top: 16px;
  }

  span {
    display: flex;
    align-items: center;
    color: #2f3640;

    svg {
      color: #ff9000;
      margin-right: 8px;
    }
  }

  a {
    float: right;
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

export const About = styled.div`
  width: 380px;

  ul {
    display: block;
    margin-left: -10px;
    padding-left: 50px;
    margin: 20px 0;

    li {
      display: block;
      position: relative;
    }

    li:not(:last-child) {
      margin-bottom: 16px;
    }

    li:before {
      content: '';
      position: absolute;
      top: 1.2em;
      left: -30px;
      margin-top: -0.9em;
      background: linear-gradient(45deg, #f69ec4, #f9dd94);
      height: 12px;
      width: 12px;
      border-radius: 50%;
    }
  }

  hr {
    height: 30px;
    border-style: solid;
    border-color: #8c8b8b;
    border-width: 1px 0 0 0;
    border-radius: 20px;
  }
  hr:before {
    display: block;
    content: '';
    height: 30px;
    margin-top: -31px;
    border-style: solid;
    border-color: #8c8b8b;
    border-width: 0 0 1px 0;
    border-radius: 20px;
  }

  a {
    display: block;
    background: #ffda79;
    padding: 15px 0 !important;
    text-align: center;
    border-radius: 10px;
    color: #312e38;
    width: 100%;
    font-weight: 500;
    margin-top: 30px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ffda79')};
    }
  }
`;
