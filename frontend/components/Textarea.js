import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';

const StyledInput = styled.textarea`
  background: ${({ theme, background }) =>
    background || transparentize(0.75, theme.white)};
  border: ${({ border }) => border || 'none'};
  color: ${({ theme, color }) => color || theme.white};
  font-size: 20px;
  padding: 5px;
  margin: ${({ spacing }) => spacing || '5px'};
  max-width: ${({ width }) => width || '400px'};
  max-height: 40px;
  padding-left: 10px;
  &::placeholder {
    color: ${({ theme, color }) => color || theme.white};
  }
`;

const Input = ({ children, ...props }) => (
  <StyledInput {...props}>{children}</StyledInput>
);

export default Input;
