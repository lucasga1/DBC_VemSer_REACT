import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiCep, apiDbc } from '../api';


export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [logged, setLogged] = useState(false);
    const [token, setToken] = useState('');
    const [dataCep, setDataCep] = useState({});

    const navigate = useNavigate();

    const handleLogin = async (value) => {
        try {
            const { data } = await apiDbc.post('/auth', value);
            localStorage.setItem('token', data);
            setLogged(true);
            navigate('/pessoas');
        } catch (error) {
            console.log(error)
            alert('Usuário ou senha inválidos');
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        verificaToken();
        navigate('/');
    }

    const handleSignUp = async (value) => {
        try {
            await apiDbc.post('/auth/create', value);
            alert('Usuário cadastrado');
            navigate('/');
        } catch (error) {
            console.log(error)
        }
    }

    const verificaToken = () => {
        const dataToken = localStorage.getItem('token');
        setToken(dataToken);
    }

    const verificaCep = async (value) => {
        try {
            const { data } = await apiCep.get(`/${value}/json`);
            setDataCep(data);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{
            logged,
            token,
            dataCep,
            handleLogin,
            handleLogout,
            handleSignUp,
            verificaToken,
            verificaCep
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider