import styled from 'styled-components'

export const CalculatorStyled = styled.div`
  grid-template-areas:
    "display display history"
    "keypad keypad history"
    "keypad keypad history";
  grid-template-rows: 0fr 4fr 80px;
  grid-template-columns: 1fr 1fr 17%;
  grid-gap: 5px;
  width: 100%;
  display: grid;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  padding: 0 20px;

`

