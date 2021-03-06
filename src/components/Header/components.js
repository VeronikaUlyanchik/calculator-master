import styled from 'styled-components'

export const HeaderStyled = styled.div`
  background-color: ${props => props.theme.backgroundHeader};
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  padding: 0 20px;
  & h3{
    color: white;
    font-size: 16px;
    font-weight: 100;
    cursor: pointer;
  }
  & a{
    color: #c1c1c1;
    outline: none;
    text-decoration: none;
    margin-left: 12px;
  }
  & a.active{
    color: white;
    outline: white;
    position: relative;
  & {
    &::after {
      position: absolute;
      content: "";
      width: 107%;
      height: 1px;
      background-color: white;
      top: 116%;
      left: -2%;
      box-sizing: border-box;
    }
  }
  }
`

