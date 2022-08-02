import { createContext, useState, useEffect } from 'react';
import { apiDbc } from '../api';
import toast from 'react-hot-toast';

export const PeopleContext = createContext();

function PeopleProvider({ children }) {

    const [buscaPessoas, setBuscaPessoas] = useState([])
    const [isUpdate, setIsUpdate] = useState(false)
    const [user, setUser] = useState([])

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

    async function setup() {
        try {
            const { data } = await apiDbc.get('/pessoa?pagina=0&tamanhoDasPaginas=20')
            setBuscaPessoas(data.content)
        } catch (error) {
            console.log(error)
        }
    }

    const getPessoaId = async (id) => {
        try {
            const { data } = await apiDbc.get(`/pessoa/lista-completa?idPessoa=${id}`)
            setUser(data[0])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setup();
    }, [])

    const handleCreateUser = async (value) => {
        try {
            await apiDbc.post('/pessoa', value);
            notifyPositive('Usuário criado com sucesso!')
            setTimeout(() => {
                setup()
                window.location.href = '/pessoas'
            }, 1500)
        } catch (error) {
            notifyError('Usuário já existe')
            console.log(error);
        }
    }

    const mudaPagina = () => {
        setIsUpdate(false)
        window.location.href = '/cadastra-pessoa'
    }

    const handleDelete = async (id) => {
        try {
            await apiDbc.delete(`/pessoa/${id}`)
            setup()
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdate = async (value, id) => {
        try {
            await apiDbc.put(`/pessoa/${id}`, value)
            notifyPositive('Usuário atualizado com sucesso!')
            setTimeout(() => {
                setup()
                window.location.href = '/pessoas'
            }, 1500)
        } catch (error) {
            notifyError('Falha na atualização.')
            console.log(error)
        }
    }

    const irParaUpdate = (idPessoa) => {
        window.location.href = `/atualiza-pessoa/${idPessoa}`
    }

    return (
        <>
            <PeopleContext.Provider value={{
                buscaPessoas,
                isUpdate,
                user,
                setIsUpdate,
                handleCreateUser,
                handleUpdate,
                handleDelete,
                irParaUpdate,
                mudaPagina,
                getPessoaId
            }}>
                {children}
            </PeopleContext.Provider>
        </>
    )
}

export default PeopleProvider

