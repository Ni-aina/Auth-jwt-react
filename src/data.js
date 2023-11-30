import Axios from "axios";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";

const cookie = new Cookies();

export const isAuthentication = ()=> {
    if (JSON.parse(localStorage.getItem("%&a%g$r$£%z7%&")!==null) && cookie.get("a%@&dr$o#%$u%")) {
        const decodeCookie = jwtDecode(cookie.get("a%@&dr$o#%$u%"));
        const decodeLocal = jwtDecode(JSON.parse(localStorage.getItem("%&a%g$r$£%z7%&")));
        if (decodeCookie.email===decodeLocal.email)
            return true;
    }
    return false;
}

export const authentication = async (email, password)=> {
    const isAuthentication = await Axios.post(`${process.env.REACT_APP_API_URL}/api/login_check`, {
        email: email,
        password: password
    }).then(res => { 
        cookie.set("a%@&dr$o#%$u%", res.data.token, {
            path: "/"
        });
        localStorage.setItem("%&a%g$r$£%z7%&", JSON.stringify(res.data.token));
        return true;
    }).catch(() => {
        return false;
    });
    return isAuthentication;
}