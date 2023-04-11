import { ChangeEvent, useState } from 'react';
import logo from "../../assets/Images/LoginScreenLogo.png";
import { Board,Logo } from './FormComponents';

function SigninForm(): JSX.Element {
  const [form, setForm] = useState<{}>({});

  function handleUploadClick(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  };

  return (
    <Board>
      <Logo src={logo} alt="logo" />
      <form onSubmit={handleUploadClick}>
        <h1>Criar Conta</h1>
        <input type="text" name='name' placeholder='Digite seu nick' required/>
        <input type="password" name='password' placeholder='Digite sua senha' required/>
        <button name='sendFormButton' >Acessar conta</button>
      </form>
    </Board>
  );
}

export default SigninForm;