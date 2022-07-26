import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

export const AuthContext = createContext();

function AuthProvider({ children }) {
    
    const [usuario, setUsuario] = useState(false);
    
    const navigate = useNavigate();

    const login = async (user) => {
        const { data } = await api.post('/auth', user);

        localStorage.setItem('token', data);
        setUsuario(true);
        navigate('/usuario');
    };

    return (
        <AuthContext.Provider value={{ usuario, login }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;