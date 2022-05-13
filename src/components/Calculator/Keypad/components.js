import styled from 'styled-components'

export const KeypadStyled = styled.div`
  grid-area: keypad;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 16px;
  padding: 0 20px;
  &>div{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 10px;
  }
`

export const Button = styled.button`
  margin-top: 10px;
  outline: none;
  padding: 16px;
  font-weight: 500;
  background: ${props => props.theme.buttonColor};
  border-radius: 18px;
  border: 1px solid ${props => props.theme.borderColor};
  position: relative;
  color: black;
  font-size: 3vw;
  margin-right: 44px;
  cursor: pointer;
  &:hover {
    background: rgba(128, 128, 128, 0.77);
  }
  &:active{
    transform: scale(0.95);
  }
`

