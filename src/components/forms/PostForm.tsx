import { ChangeEvent, useState, useContext } from 'react';
import { PostBoard, Preview } from './FormComponents';
import { PostFormType } from '../types/types';
import { sendPost,getAccessToken } from '../../services/ArtsApiContext';
import { useMutation,useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import userContext from '../contexts/UserContext';
import { UserContextType } from '../types/types';

function PostForm(): JSX.Element {
  const OneDayInMS = 86400000
  const [form, setForm] = useState<PostFormType>({ title: "", subtitle: "", image: "" });
  const token = localStorage.getItem('token') as string
  const { data,error } = useQuery(token, getAccessToken, {refetchOnReconnect: false,
                                                          retry: false,
                                                          staleTime: OneDayInMS})
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(sendPost, {
    onSuccess: (data) => { alert("Post Concluído"); navigate("/") },
    onError: () => { alert("Ocorreu um erro, tente novamente"); }
  })

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const image: FileList | null = event.target.files;
    if (image) {
      transformFile(image[0])
    }
  };

  function transformFile(file: File | null) {
    const reader: FileReader = new FileReader()

    if (file) {
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        if (reader.result) {
          setForm({ ...form, image: String(reader.result) })
        }
      }
    } else {
      setForm({ ...form, image: "" })
    }
  }

  function handleUploadClick(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isLoading) { return };
    mutate({ ...form, token: data });
  };

  if(error){
    return(
    <PostBoard>
      <p>error, faça o login</p>
    </PostBoard>
    )
  }

  return (
    <>
      <PostBoard>
        <Preview>
          {form.image ? <img src={form.image} alt="" /> : <p>Preview da imagem aparecerá aqui</p>}
        </Preview>
        <form onSubmit={handleUploadClick}>
          <h1>Criar Post</h1>
          <input type="text" name='name' placeholder='Digite o Titulo' onChange={(e) => setForm({ ...form, title: e.target.value })} value={form.title} required />
          <input type="text" name='name' placeholder='Digite a Descrição' onChange={(e) => setForm({ ...form, subtitle: e.target.value })} value={form.subtitle} required />
          <label>
            <input style={{ display: "none" }} type="file" name='image' onChange={handleImageChange} required />
            Escolha sua imagem
          </label>
          <button name='sendFormButton' >Criar Post</button>
        </form>
      </PostBoard>
    </>
  );
}

export default PostForm;