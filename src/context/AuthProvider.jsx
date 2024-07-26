import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useState } from "react";


const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({ children}) => {
    const navigate = useNavigate();
    const [userState, setUserState] = useState(init);
    //const userPre = init();

    const login = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        setUserState({
            logged: true,
            user: user
        });
        navigate('/home');
    }

    const logout = () => {
        localStorage.removeItem('user','token');
        setUserState({
            logged: false,
            user: null
        });
        navigate('/');
       
    }

    return (
        <AuthContext.Provider value={{ ...userState, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
