import axios from 'axios';
import { useEffect, useState } from 'react';
import css from './Header.module.css';

const Header = () => {
    const [name, setName] = useState([]);
    const [avatar, setAvatar] = useState([]);
    const [endereco, setEndereco] = useState([]);
    const [company, setCompany] = useState([]);

    async function setup() {
        try {
            const { data } = await axios.get('https://api.github.com/users/lucasga1');
            setAvatar(data.avatar_url)
            setName(data.name)
            setEndereco(data.location)
            setCompany(data.company)                   
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setup()
    }, []);

    return (
        <div className={css.header}>
            <img src={avatar} alt="avatar" />
            <div className={css.informacoes}>
                <h1>{name}</h1>
                <p>{endereco}</p>
                <p>Estágiario na {company}</p>
            </div>
        </div>
    )
}

export default Header;