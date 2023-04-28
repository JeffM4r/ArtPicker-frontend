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

export interface SigninFormType {
  email: string,
  password: string
}

export interface PostFormType {
  title: string,
  subtitle: string,
  image: string
}

export interface hiddenMenuProps {
  menuHidden: boolean;
}