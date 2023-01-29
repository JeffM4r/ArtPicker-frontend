import GlobalStyle from "./assets/styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./pages/frontpage/FrontPage";

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
