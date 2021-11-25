import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 16px 24px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);

  h2 {
    margin-bottom: 10px;
  }

  div {
    flex: 1;

    > div {
      margin-bottom: 10px;
    }

    a {
      text-decoration: none;
      color: #ff9000;
      margin-left: auto;

      svg {
        margin-left: 10px;
        font-size: 20px;
      }
    }
  }

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-right: 24px;
  }

  & + div {
    margin-top: 16px;
  }

  span {
    color: #2f3640;

    svg {
      color: #ff9000;
      margin-right: 8px;
    }
  }
`;

export const Details = styled.div`
  display: flex;
  margin-top: 10px;
`;
