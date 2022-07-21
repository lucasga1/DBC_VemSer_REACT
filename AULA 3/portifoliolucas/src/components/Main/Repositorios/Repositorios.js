import axios from 'axios';
import moment from 'moment'
import { useEffect, useState } from 'react';
import css from './Repositorios.module.css'

const Repositorios = () => {

    const [reposProjetoDupla, setReposProjetoDupla] = useState([]);
    const [reposLandingPage, setReposLandingPage] = useState([]);
    const [reposFlexBox, setReposFlexBox] = useState([]);
    const [reposCalculadora, setReposCalculadora] = useState([]);
    const [reposToDo, setReposToDo] = useState([]);
    const [reposReact, setReposReact] = useState([]);
    const [date1, setDate1] = useState([]);
    const [date2, setDate2] = useState([]);
    const [date3, setDate3] = useState([]);
    const [date4, setDate4] = useState([]);
    const [date5, setDate5] = useState([]);
    const [date6, setDate6] = useState([]);

    async function setup() {
        try {
            const { data } = await axios.get('https://api.github.com/users/lucasga1/repos');

            setReposProjetoDupla(data[8].html_url)
            setReposLandingPage(data[11].html_url)
            setReposFlexBox(data[3].html_url)
            setReposCalculadora(data[0].html_url)
            setReposToDo(data[12].html_url)
            setReposReact(data[10].html_url)
            setDate1(data[8].created_at)
            setDate2(data[11].created_at)
            setDate3(data[3].created_at)
            setDate4(data[0].created_at)
            setDate5(data[12].created_at)
            setDate6(data[10].created_at)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setup()
    }, []);

    const horaP1 = moment(date1).format('ll')
    const horaP2 = moment(date2).format('ll')
    const horaP3 = moment(date3).format('ll')
    const horaP4 = moment(date4).format('ll')
    const horaP5 = moment(date5).format('ll')
    const horaP6 = moment(date6).format('ll')

    return (
        <div className={css.repositorio}>
            <h1>Repositórios</h1>
            <div>
                <div>
                    <a href={reposProjetoDupla}>Projeto em Dupla</a>
                    <p>Criado em: {horaP1}</p>
                </div>
                <div>
                    <a href={reposLandingPage}>Landing Page</a>
                    <p>Criado em: {horaP2}</p>
                </div>
                <div>
                    <a href={reposFlexBox}>FlexBox</a>
                    <p>Criado em: {horaP3}</p>
                </div>
                <div>
                    <a href={reposCalculadora}>Calculadora</a>
                    <p>Criado em: {horaP4}</p>
                </div>
                <div>
                    <a href={reposToDo}>Lista de Tarefas - ToDo</a>
                    <p>Criado em: {horaP5}</p>
                </div>
                <div>
                    <a href={reposReact}>Aulas de React</a>
                    <p>Criado em: {horaP6}</p>
                </div>
            </div>
        </div>
    )
}

export default Repositorios;