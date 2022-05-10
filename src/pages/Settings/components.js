import styled from 'styled-components'

export const Select = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 16px;
  padding: 40px;
  position: relative;
  & h3{
    font-size: 30px;
    font-weight: 100;
    margin-bottom: 21px;
  }
  & h5{
    font-size: 13px;
    font-weight: 600;
  }
  & .select{
    position: relative;
    border: 1px solid black;
    width: 185px;
    z-index: 1;
    border-radius: 5px;
    background-color: white;
    cursor: pointer;
  }
  & .chosen{
    padding: 10px 7px;
    border-bottom: 1px solid;
  }
  & .notChosen{
    padding: 5px 7px;
    border-bottom: 1px solid;
  }
`

export const ButtonClear = styled.div`
  border: 1px solid black;
  width: 185px;
  padding: 10px 7px;
  background-color: #8080801c;
  position: absolute;
  top: 166px;
  border-radius: 5px;
  cursor: pointer;
  & :active{
    transform: scale(0.95);
  }
`

