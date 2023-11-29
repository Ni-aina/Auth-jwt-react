import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { PrivateRoutes } from "./PrivateRoutes";
import { Auth } from "./Auth";
import { Home } from "./Home";
import { Admin } from "./Admin";

const App = ()=> {
  return(
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Auth />} />
            <Route element={<PrivateRoutes />}>
              <Route element={<Home />} path="/" exact/>
              <Route element={<Admin />} path="/admin" />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
