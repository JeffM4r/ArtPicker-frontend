import { ChangeEvent, useState } from 'react';
import { PostBoard, Preview } from './FormComponents';

function PostForm(): JSX.Element {
  const [image, setImage] = useState<string>("");
  const [form, setForm] = useState<{}>({});

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) { 
    const image: FileList | null = event.target.files;
    if(image){
      transformFile(image[0])
    }  
  };

  function transformFile(file:File | null){
    const reader: FileReader = new FileReader()

    if (file){
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        if(reader.result){
          setImage(String(reader.result));
        }
      }
    } else {
      setImage("")
    }
  }

  function handleUploadClick(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  };

  return (
    <>
      <PostBoard>
        <Preview>
          {image? <img src={image} alt="" />:<p>Preview da imagem aparecerá aqui</p>}
        </Preview>
        <form onSubmit={handleUploadClick}>
          <h1>Criar Post</h1>
          <input type="text" name='name' placeholder='Digite o Titulo' required/>
          <input type="text" name='name' placeholder='Digite a Descrição' required/>
          <label>
            <input style={{display:"none"}} type="file" name='image' onChange={handleImageChange} required/>
            Escolha sua imagem
          </label>
          <button name='sendFormButton' >Criar Post</button>
        </form>
      </PostBoard>
    </>
  );
}

export default PostForm;