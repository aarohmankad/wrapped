import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${({ theme }) => theme.white};
  border: 1.75px solid ${({ theme }) => theme.pink};
  border-radius: 10px;
  color: ${({ theme }) => theme.pink};
  padding: 7px;
`;

const Button = props => <StyledButton>{props.children}</StyledButton>;

export default Button;
