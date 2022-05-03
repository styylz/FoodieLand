import React, { InputHTMLAttributes } from 'react'
import { Box, Typography } from 'components';
import { Theme } from 'styles/theme';
import { Styles } from 'components/wrappers/Box';
import styled from 'styled-components/macro';
import { tablet } from 'styles/breakpoints';

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  Styles<Theme> & {
    label?: string;
    errorMessage?: string;
  };

export const Input: React.FC<InputProps> = ({
  min,
  max,
  placeholder,
  type,
  onChange,
  label,
  errorMessage,
  ...props
}) => {
  return (
    <>
      {errorMessage && (
        <label htmlFor="input">
          <Typography type="body16">{errorMessage}</Typography>
        </label>
      )}
      <label htmlFor="input">
        <Typography type="body16">{label}</Typography>
      </label>
      <StyledBox
        as="input"
        placeholder={placeholder}
        min={min}
        max={max}
        type={type}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

const StyledBox = styled(Box)<Styles<Theme>>`
    width: 30rem;
    height: 5rem;
    padding-left: 2rem;
    border-radius: 1.5rem;
    border: 0rem;
    @media ${tablet} {
        width: 20rem;
        height: 3.83rem;
  }
`;