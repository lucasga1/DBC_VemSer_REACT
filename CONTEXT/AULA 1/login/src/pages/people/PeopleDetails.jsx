import PeopleList from "./PeopleList";
import { useContext } from 'react';
import { PeopleContext } from '../../context/PeopleContext';
import { Pessoas, BgColor, Descricao, DivDetail, BarraUsuario, DivFlex, DivAbsolute, AllTickets, PerfilUsuario, ButtonsBarraUsuario, DivButtonRegister } from './PeopleDetails.styled';
import { ButtonSecundary } from "../../components/button/ButtonPrimary";
import { FaSistrix, FaBell, FaEllipsisV, FaLongArrowAltUp, FaFilter } from "react-icons/fa";
import fotoPerfil from '../../imagens/fotoPerfil.png'
import { useEffect } from "react";

function PeopleDetails() {

    const { mudaPagina } = useContext(PeopleContext)

    return (
        <BgColor>
            <DivAbsolute>
                <DivDetail>
                    <BarraUsuario>
                        <h1>Tickets</h1>
                        <DivFlex>
                            <ButtonsBarraUsuario>
                                <button><FaSistrix style={{ fontSize: '18px', color: ' #C5C7CD' }} /></button>
                                <button><FaBell style={{ fontSize: '18px', color: ' #C5C7CD' }} /></button>
                            </ButtonsBarraUsuario>
                            <PerfilUsuario>
                                <h3>Nome Usuario</h3>
                                <img src={fotoPerfil} alt="foto" />
                            </PerfilUsuario>
                        </DivFlex>

                    </BarraUsuario>
                </DivDetail >
                <Pessoas>
                    <AllTickets>
                        <h3>Usuários</h3>
                        <div>
                            <button><FaLongArrowAltUp style={{ fontSize: '14px', color: '#C5C7CD' }} /><FaEllipsisV style={{ fontSize: '14px', color: '#C5C7CD' }} />Sort</button>
                            <button><FaFilter style={{ fontSize: '14px', color: '#C5C7CD', padding: '0 5px' }} />Filter</button>
                        </div>
                    </AllTickets>
                    <Descricao>
                        <p>Nome</p>
                        <p>Data de Nascimento</p>
                        <p>CPF</p>
                        <p>E-mail</p>
                        <p>Selecione</p>
                    </Descricao>
                    <PeopleList />
                    <DivButtonRegister>
                        <ButtonSecundary onClick={mudaPagina} style={{cursor: 'pointer'}}>Registrar novo usuário</ButtonSecundary>
                    </DivButtonRegister>
                </Pessoas>
            </DivAbsolute>
        </BgColor >
    )
}
export default PeopleDetails