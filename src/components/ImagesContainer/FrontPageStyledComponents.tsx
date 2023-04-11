import styled from "styled-components"
import { StyledComponent } from "styled-components"

export const InfoBox = styled.div`

`

export const Container: StyledComponent<"main", any, {}, never> = styled.main`
margin-top: 15px;
margin-bottom: 15px;
width: 70vw;
-webkit-column-count: 3;
-moz-column-count: 3;
column-count: 3;
-webkit-column-width: 33%;
-moz-column-width: 33%;
column-width: 33%;
padding: 0 12px;
-webkit-transition: all 350ms ease;
transition: all 350ms ease;
margin-bottom: 12px;

@media (max-width: 991px) {
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;
}
`
export const ImageContainer: StyledComponent<"img", any, {}, never> = styled.img`
width: 100%;
-webkit-transition: all 350ms ease;
transition: all 350ms ease;
cursor: pointer;
margin-bottom: 12px;
`