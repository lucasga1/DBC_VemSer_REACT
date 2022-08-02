import { createContext, useState, useEffect } from 'react';
import { apiDbc } from '../api';
import toast from 'react-hot-toast';

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [auth, setAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const notifyPositive = (value) => toast(value, {
        position: 'top-right',
        style: {
            backgroundColor: '	#7CFC00',
            color: '#000'
        },
    });
    const notifyError = (value) => toast(value, {
        position: 'top-right',
        style: {
            backgroundColor: '#FF0000',
            color: '#fff'
        },
    });

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
            notifyPositive('Login efetuado com sucesso!')
            setTimeout(() => {
                localStorage.setItem('token', data);
                apiDbc.defaults.headers.common['Authorization'] = data;
                setAuth(true);
                window.location.href = '/pessoas'
            }, 1500
            )
        } catch (error) {
            console.log(error)
            notifyError('Usuário ou senha inválido.')
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
            notifyPositive('Cadastro efetuado com sucesso!')
            setTimeout(() => {
                window.location.href = '/'
            }, 1500)
        } catch (error) {
            notifyError('Usuário já cadastrado, tente novamente.')
            console.log(error)
        }
    }

    if (loading) {
        return (
            <div>
                Carregando Pagina - Loading
            </div>
        )
    }

    return (
        <AuthContext.Provider value={{
            auth,
            loading,
            setLoading,
            setAuth,
            handleLogin,
            handleLogout,
            handleSignUp,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider