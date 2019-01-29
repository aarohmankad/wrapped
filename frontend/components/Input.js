import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';

// background: #ffa9f0;
const StyledInput = styled.input`
  background: ${({ theme }) => transparentize(0.75, theme.white)};
  border: none;
  color: ${({ theme }) => theme.white};
  font-size: 18px;
  padding: 5px;
  margin: 5px;

  &::placeholder {
    color: ${({ theme }) => theme.white};
  }
`;

const Input = ({ children, ...props }) => (
  <StyledInput {...props}>{children}</StyledInput>
);

export default Input;
