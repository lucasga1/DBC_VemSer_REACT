import { createContext, useState, useEffect } from 'react';
import { apiCep, apiDbc } from '../api';

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [auth, setAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const [dataCep, setDataCep] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            apiDbc.defaults.headers.common['Authorization'] = token;
            setAuth(true);
        }
        setLoading(false);
    }, [])

    const handleLogin = async (value) => {
        try {
            const { data } = await apiDbc.post('/auth', value);
            localStorage.setItem('token', data);
            apiDbc.defaults.headers.common['Authorization'] = data;
            setAuth(true);
            window.location.href = '/pessoas'
        } catch (error) {
            console.log(error)
            alert('Usuário ou senha inválidos');
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        apiDbc.defaults.headers.common['Authorization'] = undefined;
        setAuth(false);
        window.location.href = '/'
    }

    const handleSignUp = async (value) => {
        try {
            await apiDbc.post('/auth/create', value);
            window.location.href = '/'
           
        } catch (error) {
            console.log(error)
        }
    }

    const verificaCep = async (value) => {
        try {
            const { data } = await apiCep.get(`/${value}/json`);
            setDataCep(data);
        } catch (error) {
            console.log(error)
        }
    }
    
    if(loading){
        return (
            <div>
                Carregando Pagina - Loading
            </div>
        )
    }

    return (
        <AuthContext.Provider value={{
            auth,
            dataCep,
            loading,
            setLoading,
            setAuth,
            handleLogin,
            handleLogout,
            handleSignUp,
            verificaCep            
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider