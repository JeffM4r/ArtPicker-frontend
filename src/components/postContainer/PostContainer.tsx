import { useParams } from "react-router-dom";
import { Portrait } from "../headerMenu/HeaderStyledComponents";
import { ImageContainer,
        ArtInfo,
        Comments,
        CommentForm} from "./PostStyledComponents";

function PostContainer(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  console.log(id)

  return (
    <>
      <ImageContainer >
        <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg" alt="" />
      </ImageContainer >
      <ArtInfo>
        <h1>Titulo: Pyke</h1>
        <h2>Descrição: desenho que demorei milhoes de anos para fazer(mentira peguei da internet para fazer teste)asdasdassssssssss asdddddddddda asssssssssssda    sdddddd asssssssssssda    sdddddd asssssssssssda    sdddddd</h2>
      </ArtInfo>
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