import React, { createContext, useState } from "react";

export const userProfilContext = createContext({
    email: "",
    password: "",
    setUserProfilContext: () => {}
});

const UserProfilContextProvider = ({children}) => {
    const userProfilState = {
        email: "",
        password: "",
        setUserProfilContext: info =>
            setUserProfil(prevState => ({
                ...prevState,
                [Object.keys(info)]: Object.values(info)[0]
            })
        )
    }
    const [userProfil, setUserProfil] = useState(userProfilState);
    return <userProfilContext.Provider value={userProfil}>{ children }</userProfilContext.Provider>
}
export default UserProfilContextProvider;