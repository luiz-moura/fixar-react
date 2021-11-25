import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: table;
  background: #f8efba;
  border-radius: 10px;
  padding: 16px;
  border: 2px solid #f8efba;
  color: #2f3640;
  width: 100%;

  &&:nth-child(1) {
    margin-right: 10px;
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

  select {
    background: transparent;
    border: 0;
    color: #2f3640;
    width: 100%;

    a::placeholder {
      color: #2f3640b8;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const LabelAndSelect = styled.div`
  width: 100%;

  label {
    color: #84817a;
    display: block;
    margin-bottom: 10px;
  }

  &:nth-child(2) {
    margin-left: 10px;
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
