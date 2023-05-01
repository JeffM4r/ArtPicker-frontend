import { useParams } from "react-router-dom";
import { Portrait } from "../headerMenu/HeaderStyledComponents";
import { useQuery,useMutation } from "react-query";
import { getPost } from "../../services/ArtsApiContext";
import { PostBoard } from "../forms/FormComponents";
import { LoadingAnimation } from "../ImagesContainer/FrontPageStyledComponents";
import PostComments from "../comments/CommentsLoader";
import {
  ImageContainer,
  ArtInfo,
  Comments,
  CommentForm
} from "./PostStyledComponents";
import { useState, useEffect } from "react";

function PostContainer(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const tokenLocalStorage: string = localStorage.getItem('token') as string
  const [token, setToken] = useState<string>()
  const OneDayInMS = 86400000
  const { data, isLoading, error } = useQuery([id], getPost, {
    refetchOnReconnect: false,
    retry: false,
    staleTime: OneDayInMS
  })

  const { mutate, isLoading:isLoading2 } = useMutation(async()=>{}, {
    onSuccess: (data) => { alert("Mensagem enviada") },
    onError: () => { alert("Ocorreu um erro, tente novamente"); }
  })

  useEffect(() => {
    setToken(tokenLocalStorage);
  }, [tokenLocalStorage])

  if (error) {
    return (
      <>
        <PostBoard>
          <h2>não foi possivel carregar os posts</h2>
        </PostBoard>
      </>
    );
  }
  if (data) {
    return (
      <>
        <ImageContainer >
          <img src={data.pictureLink} alt="" />
        </ImageContainer >
        <ArtInfo>
          <h1>Titulo: {data.title}</h1>
          <h2>Descrição: {data.subtitle}</h2>
          <h3>feito por: {data.users.userName}</h3>
        </ArtInfo>
        <PostComments id={data.id} />
        {token ?
          <CommentForm>
            <input placeholder="Escreva um comentário" type="text" required />
            <button>Enviar</button>
          </CommentForm>
          :
          <CommentForm>
            <p>faça login para poder comentar</p>
          </CommentForm>
        }

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
    <>
      <Comments>
        <div>
          <Portrait src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg" alt="" />
          <p>JefdasTretaasdaasdasdasdasdasdass</p>
        </div>
        <p>comentario legal orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      </Comments>
      <Comments>
        <div>
          <Portrait src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg" alt="" />
          <p>JefdasTretaasdaas asdas</p>
        </div>
        <p>remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      </Comments>
      <Comments>
        <div>
          <Portrait src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg" alt="" />
          <p>JefdasTretaasdaas asdas</p>
        </div>
        <p>Muito legal</p>
      </Comments>
      <CommentForm>
        <input placeholder="Escreva um comentário" type="text" required />
        <button>Enviar</button>
      </CommentForm>
    </>
  );
}

export default PostContainer;