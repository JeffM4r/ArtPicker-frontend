import logo from "../../assets/Images/TopMenuLogo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Top,
  Menu,
  Image,
  SearchBar,
  LoginButton,
  Line,
  Portrait
} from "./HeaderStyledComponents";

function HeaderMenu(): JSX.Element {
  const profileImageLocalStorage: string = localStorage.getItem('profile') as string
  const [profilePicture, setProfilePicture] = useState<string>("")

  useEffect(() => {
    setProfilePicture(profileImageLocalStorage)
  }, [profileImageLocalStorage])

  return (
    <Top>
      <Menu>
        <Link to="/" >
          <Image src={logo} alt="ArtPicker" />
        </Link>
        <div>
          <SearchBar placeholder="Pesquisar Post" />
        </div>
        {profilePicture ?
          <Portrait src={profilePicture} /> :
          <Link to="/signin" >
            <LoginButton>Login</LoginButton>
          </Link>
        }
      </Menu>
      <Line />
    </Top>
  );
};

export default HeaderMenu;