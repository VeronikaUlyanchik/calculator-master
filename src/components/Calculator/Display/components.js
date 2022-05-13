import styled from 'styled-components'

export const DisplayStyled = styled.div`
  height: 80px;
  grid-area: display;
  border-bottom: 1px solid ${props => props.theme.fontColor};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 3vw;
  padding: 0 30px;
  margin-right: 5px;
  color: ${props => props.theme.fontColor};
`

