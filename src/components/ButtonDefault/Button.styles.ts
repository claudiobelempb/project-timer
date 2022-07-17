import styled from 'styled-components';

interface ButtonContainerProps {
  color?: 'btn-primary';
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  background-color: ${props => props.theme.primary};
  color: white;
  border-radius: 0.3rem;
  padding: 0 1rem;
`;
