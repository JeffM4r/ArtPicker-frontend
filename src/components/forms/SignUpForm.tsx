import { ChangeEvent, useState } from 'react';
import logo from "../../assets/Images/LoginScreenLogo.png";
import { Board,Logo } from './FormComponents';

function SignupForm(): JSX.Element {
  const [image, setImage] = useState<string | ArrayBuffer>("");
  const [form, setForm] = useState<{}>({});

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
          setImage(reader.result);
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
    <Board>
      <Logo src={logo} alt="logo" />
      <form onSubmit={handleUploadClick}>
        <h1>Criar Conta</h1>
        <input type="text" name='name' placeholder='Digite seu nick' required/>
        <input type="email" name='email' placeholder='Digite seu email' required/>
        <input type="password" name='password' placeholder='Digite sua senha' required/>
        <input type="password" name='password confirm' placeholder='Digite sua senha novamente' required/>
        <input type="file" name='image' onChange={handleImageChange} required/>
        <button name='sendFormButton' >Criar conta</button>
      </form>
    </Board>
  );
}

export default SignupForm;