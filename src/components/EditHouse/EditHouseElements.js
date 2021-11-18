import styled from "styled-components";

export const Container = styled.div`
  min-height: 90vh;
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
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;

  @media screen and (max-width: 400px) {
    height: 80%;
`