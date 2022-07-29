import { createContext, useState, useEffect } from 'react';
import { apiDbc } from '../api';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';

export const PeopleContext = createContext();

function PeopleProvider({ children }) {
    
    const navigate = useNavigate()
    const [buscaPessoas, setBuscaPessoas] = useState([])
    const [isUpdate, setIsUpdate] = useState(false)
    const [id, setId] = useState([])

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

    const handleCreateUser = async (value) => {
        try {
            const data = await apiDbc.post('/pessoa', value);
            console.log(data.content)
            setup()
            navigate('/pessoas')
        } catch (error) {
            console.log(error);
        }
    }

    const mudaPagina = () => {
        setIsUpdate(false)
        navigate('/cadastra-pessoa')
    }

    const handleDelete = async (value) => {
        try {
            const data = await apiDbc.delete(`/pessoa/${value}`)
            console.log(data.content)
            setup()
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdate = async (value) => {
        try {
            const data = await apiDbc.put(`/pessoa/${id}`, value)
            console.log(data.content)
            console.log(id)
            setup()
            navigate('/pessoas')
        } catch (error) {
            console.log(error)
        }
    }

    const alteraValor = (value, verdadeiro) => {
        navigate(`/atualiza-pessoa/${value}`)
        setId(value)
        setIsUpdate(verdadeiro)

    }

    //Masks
    function DataNascimento(props) {
        return (
            <InputMask
                placeholder='Digite sua data de nascimento'
                mask='99/99/9999'
                value={props.value}
                onChange={props.onChange}>
            </InputMask>
        );
    }

    function Cpf(props) {
        return (
            <InputMask
                placeholder='Digite seu cpf'
                mask='999.999.999-99'
                value={props.value}
                onChange={props.onChange}>
            </InputMask>
        );
    }

    return (
        <>
            <PeopleContext.Provider value={{
                
                buscaPessoas,
                isUpdate,
                setId,
                setIsUpdate,
                handleCreateUser,
                handleUpdate,
                handleDelete,
                alteraValor,
                mudaPagina,
                DataNascimento,
                Cpf
            }}>
                {children}
            </PeopleContext.Provider>
        </>
    )
}

export default PeopleProvider

