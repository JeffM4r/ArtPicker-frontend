import { useQuery } from "react-query";
import { getImages } from "../../services/ArtsApiContext";
import { Board } from "../forms/FormComponents";
import {Container,
        ImageContainer,
        LoadingAnimation} from "./FrontPageStyledComponents";


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
                <ImageContainer src={imgs.pictureLink} />
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
        < Board>
          <LoadingAnimation/>
        </ Board>
      </>
    );
  }
  return (
    <h1>
      Sem Contato com API
    </h1>
  );

};



export default Content;