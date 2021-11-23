import styled from "styled-components";

export const Container = styled.div`
  min-height: 98vh;
  /* position: fixed; */
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #e4e4e4;
`

export const TableWrapper = styled.div`
position: relative;
top: 70px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background-color: #fff;
  border: 0.2px solid #b5b5b5;
  border-radius: 5px;
  left: 20vw;
 width: 77vw;
max-width: 80vw;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`

export const GlobalFilterSpan = styled.div`
    position: relative;
    margin-bottom: 10px;
    font-family: 'Silka', sans-serif;

    &.input {
      padding: 5px;
      width: 200px;
      
    }



`
