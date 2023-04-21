import { useState, useContext } from 'react';
import logo from "../../assets/Images/LoginScreenLogo.png";
import { Board, Logo } from './FormComponents';
import { SigninFormType } from '../types/types';
import { useMutation } from 'react-query';
import { signin } from '../../services/ArtsApiContext';
import { useNavigate } from 'react-router-dom';
import userContext from '../contexts/UserContext';
import { UserContextType } from '../types/types';

function SigninForm(): JSX.Element {
  const { setToken } = useContext(userContext) as UserContextType
  const [form, setForm] = useState<SigninFormType>({ email: "", password: "" });
  let navigate = useNavigate();
  
  const { mutate, isLoading } = useMutation(signin, {
    onSuccess: (data) => { alert("Login Concluido"); setToken(data.refreshToken); navigate("/") },
    onError: () => { alert("Houve um erro nessa tentativa de cadastro, email ou nome de usuário pode estar em uso"); }
  })

  function handleUploadClick(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isLoading) { return };
    mutate(form);
  };

  return (
    <Board>
      <Logo src={logo} alt="logo" />
      <form onSubmit={handleUploadClick}>
        <h1>Criar Conta</h1>
        <input type="email" name='email' placeholder='Digite seu email' onChange={(e) => setForm({ ...form, email: e.target.value })} value={form.email} required />
        <input type="password" name='password' placeholder='Digite sua senha' onChange={(e) => setForm({ ...form, password: e.target.value })} value={form.password} required />
        <button name='sendFormButton' >Acessar conta</button>
      </form>
    </Board>
  );
}

export default SigninForm;