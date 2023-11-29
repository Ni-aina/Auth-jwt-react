import { Outlet, Navigate } from "react-router-dom";
import { isAuthentication } from "./data";

export const PrivateRoutes = ()=> {
    let auth = {'token': false}
    if (isAuthentication()) auth.token = true;
    return(
        auth.token ? <Outlet /> : <Navigate to="/login"/>
    )
}