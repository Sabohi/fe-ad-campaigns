import React from 'react';
import { StyledContainer } from './styles';

export default function NotFound() {
  return (
    <StyledContainer>
      <p>OOPS! - Could not Find it</p>
      <h2 style={{ fontSize: '100px', color: '#72d36b', margin: '20px 0' }}>404</h2>
    </StyledContainer>
  );
}
