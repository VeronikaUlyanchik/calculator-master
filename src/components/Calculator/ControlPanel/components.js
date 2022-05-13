import styled from 'styled-components'

export const PanelStyled = styled.div`
  height: 30px;
  grid-area: panel;
  border: 1px solid ${props => props.theme.fontColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  cursor: pointer;
  color:${props => props.theme.fontColor};
`

