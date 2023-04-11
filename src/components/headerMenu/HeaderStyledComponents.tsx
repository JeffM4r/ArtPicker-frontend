import styled from "styled-components";
import { StyledComponent } from "styled-components"

export const Menu: StyledComponent<"div", any, {}, never> = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 59px;
width: 70vw;
min-width: 800px;
color: #ebebeb;
`
export const Line: StyledComponent<"div", any, {}, never> = styled.div`
height: 1px;
width: 500vw;
background-color: #424141;
`
export const Top: StyledComponent<"header", any, {}, never> = styled.header`
position: fixed;
left: 0;
top: 0;
right: 0;
background-color: #0c0c0c;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const Portrait = styled.img`
width: 50px;
height: 50px;
border-radius: 50px;
object-fit: cover;
`
export const Image: StyledComponent<"img", any, {}, never> = styled.img`
height: 55px;
object-fit: cover;
`
export const LoginButton: StyledComponent<"button", any, {}, never> = styled.button`
height: 45px;
width: 100px;
font-weight: 700;
font-size: 30px;
background-color: #fdfdfd;
border-radius: 15px;
  :hover{
        cursor: pointer;
  }
`
export const SearchBar: StyledComponent<"input", any, {}, never> = styled.input`
height: 25px;
margin-right: 50px;
width: 160px;
border-radius: 5px;
font-size: 18px;
::placeholder {
  text-align: center;
}
`