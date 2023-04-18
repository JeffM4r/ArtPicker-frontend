import GlobalStyle from "./assets/styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import userContext from "./components/contexts/UserContext";
import FrontPage from "./pages/frontpage/FrontPage";
import SignupPage from "./pages/signuppage/SignupPage";
import SigninPage from "./pages/loginpage/SigninPage";
import UploadPage from "./pages/uploadpage/UploadPage";
import PostPage from "./pages/postpage/PostPage";
import { useState } from "react";

function App(): JSX.Element {
  const queryClient = new QueryClient()
  const [token, setToken] = useState<string>("")
  const [isLogged, setIsLogged] = useState<boolean>(false)

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <userContext.Provider value={{ token, isLogged, setToken, setIsLogged }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<FrontPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/signin" element={<SigninPage />} />
              <Route path="/sendpost" element={<UploadPage />} />
              <Route path="/post/:id" element={<PostPage />} />
            </Routes>
          </BrowserRouter>
        </userContext.Provider>
      </QueryClientProvider>
    </>
  );
};

export default App;
