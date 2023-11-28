import Axios from "axios";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";

const cookie = new Cookies();

export const isNotAuthentication = ()=> {
    if (JSON.parse(localStorage.getItem("%&a%g$r$£%z7%&")!==null) && cookie.get("a%@&dr$o#%$u%")) {
        const decoded = jwtDecode(JSON.parse(localStorage.getItem("%&a%g$r$£%z7%&")));
        const current_user = jwtDecode(cookie.get("a%@&dr$o#%$u%")); 
        if (decoded.email!==current_user.email)
            return true;
        return false;
    }
    else return true;
}

export const authentication = async (email, password)=> {
    const isAuthentication = await Axios.post('http://localhost:8000/api/login_check', {
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
