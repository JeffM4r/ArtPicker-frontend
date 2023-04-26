import logo from "../../assets/Images/TopMenuLogo.png";
import { Link } from "react-router-dom";
import {
  Top,
  Menu,
  Image,
  SearchBar,
  LoginButton,
  Line
} from "./HeaderStyledComponents";

function HeaderMenu(): JSX.Element {
  return (
    <Top>
      <Menu>
        <Link to="/" >
          <Image src={logo} alt="ArtPicker" />
        </Link>
        <div>
          <SearchBar placeholder="Pesquisar Post" />
        </div>
        <Link to="/signin" >
          <LoginButton>Login</LoginButton>
        </Link>
      </Menu>
      <Line />
    </Top>
  );
};

export default HeaderMenu;