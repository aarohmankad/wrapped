import React from 'react';
import styled from 'styled-components';

const StyledActionButton = styled.button`
  background: ${({ theme }) => theme.white};
  border: 1.75px solid ${({ theme }) => theme.pink};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 36px;
  color: ${({ theme }) => theme.pink};
  font-size: 24px;
  font-weight: bold;
  margin: 10px;
  padding: 20px;
  width: 300px;
`;

const ActionButton = props => (
  <StyledActionButton>{props.children}</StyledActionButton>
);

export default ActionButton;
