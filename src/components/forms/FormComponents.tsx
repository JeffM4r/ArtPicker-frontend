import styled from "styled-components";
import { StyledComponent } from "styled-components";

export const Board: StyledComponent<"div", any, {}, never> = styled.div`
margin-top: -30px;
margin-bottom: 30px;
min-height: 370px;
width: 60vw;
height: 80vh;
background-color: #0c0c0c;
padding: 20px;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
 form{
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    font-size: 30px;
    color: white;
  }
  input{
    margin-top: 8px;
    width: 55vw;
    max-width:400px;
  }
  button{
    margin-top: 12px;
    width: 55vw;
    max-width:400px;
    :hover{
      cursor: pointer;
    }
  }
 }
`
export const PostBoard: StyledComponent<"div", any, {}, never> = styled.div`
margin-top: 10px;
margin-bottom: 30px;
min-height: 700px;
min-width: 800px;
margin-left: auto; 
margin-right: auto;
width: 60vw;
height: 80vh;
background-color: #0c0c0c;
padding: 20px;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
margin-left: 10px;
margin-right: 10px;
 form{
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
  width: 500px;
  h1{
    font-size: 30px;
    color: white;
  }
  input{
    margin-top: 8px;
    width: 300px;    
    height: 25px;
    border-radius: 5px;
    font-size: 18px;
    ::placeholder {
      text-align: center;
    }
  }
  label{
    margin-top: 8px;
    height: 25px;
    width: 302px;
    max-width:400px;
    font-weight: 700;
    font-size: 25px;
    text-align: center;
    background-color: #fdfdfd;
    border-radius: 5px;
    :hover{
      cursor: pointer;
    }
  }
  button{
    margin-top: 12px;
    width: 300px;
    max-width:400px;
    height: 45px;
    font-weight: 700;
    font-size: 30px;
    background-color: #fdfdfd;
    border-radius: 15px;
    :hover{
      cursor: pointer;
    }
  }
 }
`

export const Preview: StyledComponent<"div", any, {}, never> = styled.div`
height: 600px;
width: 450px;
margin-right: 35px;
display: flex;
justify-content: center;
align-items: center;
border: 1px;
border-style: solid;
border-color: white;

 p{
  color: #ebebeb;
  text-align: center;
 }
 img{
  height: 600px;
  width: 450px;
  object-fit: contain;
 }
`

export const Logo: StyledComponent<"img", any, {}, never> = styled.img`
width: 55vw;
object-fit: cover;
max-width:400px;
  @media screen and (max-height: 700px) {
    max-width:205px;
  }
`