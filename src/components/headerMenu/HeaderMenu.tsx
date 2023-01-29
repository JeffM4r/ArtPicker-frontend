import styled from "styled-components";
import logo from "../../assets/Images/TopMenuLogo.png";

function HeaderMenu(): JSX.Element {
  return(
    <Top>
      <Menu>
        <Image src={logo} alt="ArtPicker" />
        <div>
          <SearchBar placeholder="Pesquisar Post"/>
        </div>
        <LoginButton>Login</LoginButton>
      </Menu>
      <Line/>
    </Top>
  );
};

const Menu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 59px;
width: 70vw;
color: #ebebeb;
`
const Line = styled.div`
height: 1px;
width: 100vw;
background-color: #424141;
`
const Top = styled.header`
width: 100vw;
position: fixed;
left: 0;
top: 0;
background-color: #0c0c0c;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Image = styled.img`
height: 55px;
object-fit: cover;
`
const LoginButton = styled.button`
height: 45px;
width: 100px;
font-weight: 700;
font-size: 30px;
background-color: #fdfdfd;
border-radius: 15px;
`
const SearchBar = styled.input`
height: 25px;
margin-right: 50px;
width: 160px;
border-radius: 5px;
font-size: 18px;
::placeholder {
  text-align: center;
}
`

export default HeaderMenu;