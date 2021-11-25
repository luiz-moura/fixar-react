import styled from 'styled-components';

export const Container = styled.header`
  padding: 32px 0;
  background: #ffda79;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > a img {
    height: 80px;
  }

  button {
    margin-left: 20px;
    background: transparent;
    border: 0;

    svg {
      color: #2f3640;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #2f3640;
    }

    strong {
      color: #2f3640;
    }
  }
`;

export const SuggestCourse = styled.div`
  padding: 7px;
  border-radius: 10px;
  background-color: darkorange;
  color: white;
  box-shadow: 2px 1px 1px rgba(0, 0, 0, 0.1);
  border: 1px dashed black;
  margin-left: auto;
  margin-right: 20px;

  a {
    color: inherit;
    text-decoration: none;
  }

  a:first-child {
    margin-right: 15px;
    padding: 15px;
    border-right: 1px solid;
  }
`;
