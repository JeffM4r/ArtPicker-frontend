import { ChangeEvent, useState } from 'react';
import logo from "../../assets/Images/LoginScreenLogo.png";
import { Board,Logo } from './FormComponents';

function SignupForm(): JSX.Element {
  const [image, setImage] = useState<string>("");
  const [form, setForm] = useState<{}>({});
  const [isLoading, setIsLoading] = useState<boolean>(false)

  console.log(image)

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) { 
    const image: FileList | null = event.target.files;
    if(image){
      transformFile(image[0])
    }  
  };

  function transformFile(file:File | null){
    const reader = new FileReader()

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
    if(isLoading){return};
    setIsLoading(true);
  };

  return (
    <Board>
      <Logo src={logo} alt="logo" />
      <form onSubmit={handleUploadClick}>
        <h1>Criar Conta</h1>
        <input type="text" name='name' placeholder='Digite seu nick' onChange={(e) => setForm({...form, email: e.target.value})} required/>
        <input type="email" name='email' placeholder='Digite seu email' onChange={(e) => setForm({...form, email: e.target.value})} required/>
        <input type="password" name='password' placeholder='Digite sua senha' onChange={(e) => setForm({...form, email: e.target.value})} required/>
        <input type="password" name='password confirm' placeholder='Digite sua senha novamente' onChange={(e) => setForm({...form, email: e.target.value})} required/>
        {image? <img src={image} alt="preview profile picture" />:<p>Preview da imagem aparecerá aqui</p>}
        <label>
            <input style={{display:"none"}} type="file" name='image' onChange={handleImageChange} required/>
            Escolha sua imagem
          </label>
        <button name='sendFormButton' >Criar conta</button>
      </form>
    </Board>
  );
}

export default SignupForm;