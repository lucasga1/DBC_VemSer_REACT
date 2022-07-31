import { createContext, useState, useEffect } from 'react';
import { apiDbc } from '../api';

export const PeopleContext = createContext();

function PeopleProvider({ children }) {

    const [buscaPessoas, setBuscaPessoas] = useState([])
    const [isUpdate, setIsUpdate] = useState(false)
    const [user, setUser] = useState([])

    async function setup() {
        try {
            const { data } = await apiDbc.get('/pessoa?pagina=0&tamanhoDasPaginas=20')
            setBuscaPessoas(data.content)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setup();
        }, [])

    const getPessoaId = async (id) => {        
        try {
            const { data } = await apiDbc.get(`/pessoa/lista-completa?idPessoa=${id}`)
            setUser(data[0])
        } catch (error) {
            console.log(error)
        }
    }

    const handleCreateUser = async (value) => {
        try {
            await apiDbc.post('/pessoa', value);            
            setup()
            window.location.href = '/pessoas'
        } catch (error) {
            console.log(error);
        }
    }

    const mudaPagina = () => {
        setIsUpdate(false)
        window.location.href = '/cadastra-pessoa'
    }

    const handleDelete = async (id) => {
        console.log(id)
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
            setup()            
            window.location.href = '/pessoas'
        } catch (error) {
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

