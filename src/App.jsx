import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Auth } from "./Auth";
import { Home } from "./Home";

const App = ()=> {
  return(
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Auth />} />
            <Route  path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
