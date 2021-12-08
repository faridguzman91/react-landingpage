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
top: 150px;
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
export const TableButtonContainer = styled.div `
display: flex;
justify-content: flex-end;
align-items: flex-end;

`

export const TableButtonEdit = styled.button `
background-color: #007bff;
width: 40px;
height: 40px;
border: none;
position: relative;
display: flex;
justify-content: flex-end;
color: white;
font-size: 20px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
border-radius: 10px;

&:hover {
  background-color: #fff;
  color: #000;
  border: 0.3px solid #52525250;
}

`

export const TableButtonRemove = styled.button `
background-color: #ff0000;
width: 40px;
height: 40px;
border: none;
position: relative;
display: flex;
justify-content: flex-end;
color: white;
font-size: 20px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
border-radius: 10px;
margin-right: 10px;

&:hover {
  background-color: #fff;
  color: #000;
  border: 0.3px solid #52525250;
}

`
export const TableButtonRowEdit = styled.button `
background-color: #007bff;
width: 40px;
height: 40px;
border: none;
position: relative;
display: flex;
justify-content: flex-end;
color: white;
font-size: 20px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
border-radius: 10px;


&:hover {
  background-color: #fff;
  color: #000;
  border: 0.3px solid #52525250;
}

`

export const TableButtonAddHouse = styled.button `
background-color: #007bff;
width: 40px;
height: 40px;
border: none;
position: relative;
display: flex;
justify-content: flex-end;
color: white;
font-size: 20px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
border-radius: 10px;


&:hover {
  background-color: #fff;
  color: #000;
  border: 0.3px solid #52525250;
}



`

export const TableButtonAddColumn = styled.button `
background-color: #007bff;
width: 40px;
height: 40px;
border: none;
position: relative;
display: flex;
justify-content: flex-end;
color: white;
font-size: 20px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
border-radius: 10px;


&:hover {
  background-color: #fff;
  color: #000;
  border: 0.3px solid #52525250;
}
`
