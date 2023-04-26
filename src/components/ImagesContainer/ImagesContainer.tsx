import { useQuery } from "react-query";
import { getImages } from "../../services/ArtsApiContext";
import { PostBoard } from "../forms/FormComponents";
import { Link } from "react-router-dom";
import {
  Container,
  ImageContainer,
  LoadingAnimation
} from "./FrontPageStyledComponents";


function Content(): JSX.Element {
  const OneDayInMS = 86400000
  const { data, isLoading, error } = useQuery("artsUploaded", getImages, {
    refetchOnReconnect: false,
    retry: false,
    staleTime: OneDayInMS
  })

  if (error) {
    return (
      <>
        <Container>
          Deu ruim
        </Container>
      </>
    );
  }
  if (data) {
    return (
      <>
        <Container>
          {data.map((imgs: any) => {
            return (
              <div key={imgs.id}>
                <Link to={`/post/${imgs.id}`} >
                  <ImageContainer src={imgs.pictureLink} />
                </Link>
              </div>
            )
          })}
        </Container>
      </>
    );
  }
  if (isLoading) {
    return (
      <>
        < PostBoard>
          <LoadingAnimation />
        </ PostBoard>
      </>
    );
  }
  return (
    <PostBoard>
      Sem Contato com API
    </PostBoard>
  );

};



export default Content;