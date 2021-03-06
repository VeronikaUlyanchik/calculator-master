import styled from 'styled-components'

export const CalculatorComponent = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 32px;

  display: flex;
  flex-direction: row;
  align-items: center;

  box-shadow: ${({ theme }) => theme.boxShadows[0]};

  padding: ${({ theme }) => theme.spaces[4]}px;
`

export const Heading = styled.h3``
