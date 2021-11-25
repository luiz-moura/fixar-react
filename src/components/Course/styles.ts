import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 16px 24px;
  border-radius: 10px;
  box-shadow: teal;

  div {
    flex: 1;

    a {
      text-decoration: none;
      display: flex;
      color: #ff9000;

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

  strong {
    color: #2f3640;
    font-size: 20px;

    a {
      display: block;
    }
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
`;
