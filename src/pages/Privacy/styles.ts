import styled from 'styled-components';

export const Container = styled.div`
  > header {
    height: 144px;
    background: #ffda79;

    display: flex;
    align-items: center;

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        color: #353b48;
        width: 24px;
        height: 24px;
        margin-bottom: 20px;
      }
    }

    img {
      height: 80px;
      margin-left: 80px;
    }

    margin-bottom: 40px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 800px;

  margin: auto;

  h2 {
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 10px;
    text-align: justify;
  }

  hr {
    margin: 30px;
  }

  ol {
    padding: 20px;
  }
`;
