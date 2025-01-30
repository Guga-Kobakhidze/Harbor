import { BrowserRouter } from "react-router-dom";
import Router from "./Routes";
import GlobalStyle from "./theme/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}

export default App;
