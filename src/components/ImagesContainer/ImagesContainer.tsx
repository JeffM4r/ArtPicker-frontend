import { Container,
        ImageContainer } from "./FrontPageStyledComponents";
import { useQuery } from "react-query";
import { getImages } from "../../services/ArtsApiContext";

function Content(): JSX.Element {
  const OneDayInMS = 86400000
  const { data, isLoading, error } = useQuery("artsUploaded", getImages, {refetchOnReconnect: false,
                                                                          retry: false,
                                                                          staleTime: OneDayInMS})
  console.log(data)
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
          {data.map((imgs: any)=>{
            return(
              <div key={imgs.id}>
                <ImageContainer src={imgs.pictureLink}/>
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
        <Container>
          Carregando
        </Container>
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