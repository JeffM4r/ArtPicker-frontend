export interface UserContextType {
  token: string;
  isLogged: boolean,
  setToken: React.Dispatch<React.SetStateAction<string>>,
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>
}

export interface SignupFormType {
  userName: string,
  email: string,
  password: string,
  password2: string,
  image: string
}