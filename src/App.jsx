import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { PrivateRoutes } from "./PrivateRoutes";
import { Auth } from "./auth";
import { Home } from "./home";
import { Admin } from "./admin";
import { Register } from "./Register";
import { ImageUpload } from "./ImageUpload";
import DrawerAppBar from "./Navbar";

const App = ()=> {
  return(
    <>
      <CssBaseline />
      <BrowserRouter>
        <DrawerAppBar />
        <Routes>
            <Route path="/login" element={<Auth />} />
            <Route element={<PrivateRoutes />}>
              <Route element={<ImageUpload /> } path="/" exact/>
              <Route element={<Home />} path="/home" />
              <Route element={<Admin />} path="/admin" />
            </Route>
            <Route element={<Register />} path="/register" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
