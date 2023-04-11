import logo from "../../assets/Images/TopMenuLogo.png";
import { Top,
        Menu,
        Image,
        SearchBar,
        LoginButton,
        Line } from "./HeaderStyledComponents";

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

export default HeaderMenu;