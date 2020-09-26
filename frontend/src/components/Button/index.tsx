/* eslint-disable react/prop-types */
import React, { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => (
  <Container type='submit' {...rest}>
    {children}
  </Container>
)

export default Button
