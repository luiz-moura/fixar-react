import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f8efba;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #f8efba;
  color: #2f3640;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #ffb900;
      border-color: #ffb900;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ffb900;
    `}

  textarea {
    min-height: 100px;
    max-height: 200px;

    flex: 1;
    background: transparent;
    border: 0;
    color: #2f3640;
    font: inherit;

    a::placeholder {
      color: #2f3640b8;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
