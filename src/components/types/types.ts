export interface UserContextType {
  token: string;
  isLogged: boolean,
  setToken: React.Dispatch<React.SetStateAction<string>>,
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>
}