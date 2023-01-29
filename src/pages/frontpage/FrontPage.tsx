import HeaderMenu from "../../components/headerMenu/HeaderMenu";
import styled from "styled-components";

function FrontPage(): JSX.Element {
  return(
    <>
      <HeaderMenu/>
      <Content>
        <h1>DooM</h1>
      </Content>      
    </>
  );
};

const Content = styled.main`
width: 70vw;
`

export default FrontPage;