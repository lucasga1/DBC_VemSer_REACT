import PeopleList from "./PeopleList";
import { useContext } from 'react';
import { PeopleContext } from '../../context/PeopleContext';
import { Pessoas, BgColor, Descricao, DivDetail, BarraUsuario, DivFlex, AllTickets, PerfilUsuario, ButtonsBarraUsuario, DivButtonRegister } from './PeopleDetails.styled';
import { ButtonSecundary } from "../../components/button/ButtonPrimary";
import { FaSistrix, FaBell, FaEllipsisV, FaLongArrowAltUp, FaFilter } from "react-icons/fa";

function PeopleDetails() {
    
    const { mudaPagina } = useContext(PeopleContext)

    return (
        <BgColor>
            <DivDetail>
                <BarraUsuario>
                    <h1>Tickets</h1>

                    <DivFlex>
                        <ButtonsBarraUsuario>
                            <button><FaSistrix style={{fontSize: '18px', color:' #C5C7CD'}}/></button>
                            <button><FaBell style={{fontSize: '18px',color:' #C5C7CD'}}/></button>
                        </ButtonsBarraUsuario>
                        <PerfilUsuario>
                            <h3>Nome Usuario</h3>
                        </PerfilUsuario>
                    </DivFlex>

                </BarraUsuario>
            </DivDetail >
            <Pessoas>
                <AllTickets>
                    <h3>All tickets</h3>
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
                    <ButtonSecundary onClick={mudaPagina}>Register new person</ButtonSecundary>
                </DivButtonRegister>
            </Pessoas>

        </BgColor >
    )
}
export default PeopleDetails