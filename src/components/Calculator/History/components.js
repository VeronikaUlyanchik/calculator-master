import styled from 'styled-components'

export const HistoryStyled = styled.div`
  position: relative;
  left: ${props => props.left};
  grid-area: history;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;
  padding: 0 20px;
  border-left: 1px solid ${props => props.theme.fontColor};
  transition-property: left;
  transition-duration: 500ms;

  & h5 {
    color: ${props => props.theme.fontColor};
    font-size: 16px;
    font-weight: 100;
    margin: 22px;
  }

  & div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 5px;
  }
`

