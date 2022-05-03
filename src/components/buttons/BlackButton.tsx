import React, { ReactNode } from 'react'
import styled from 'styled-components/macro';
import { mobile } from 'styles/breakpoints';
import { BaseButton } from './elements/BaseButton';

export interface ButtonProps  {
	onClick?: () => void;
	children: ReactNode;
}

export const BlackButton: React.FC<ButtonProps> = ({children, onClick}) => {
  return (
    <BlackStyledButton onClick={onClick}>{children}</BlackStyledButton>
  )
}

const BlackStyledButton = styled(BaseButton)`
  width: 12.5rem;
  background-color: black;
  color: white;
  border-radius: 1rem;
  padding:  1.31rem 2.31rem;

  @media ${mobile} {
        min-width: 6rem;
	};

`