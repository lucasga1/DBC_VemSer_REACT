import PeopleList from "./PeopleList";
import { useContext } from 'react';
import { PeopleContext } from '../../context/PeopleContext';
import { Pessoas, Descricao, Container, BarraUsuario, DivFlex, BarraDescricao, PerfilUsuario, ButtonsBarraUsuario } from './PeopleDetails.styled';
import { ButtonPrimary } from "../../components/button/ButtonPrimary";
import { FaSistrix, FaBell, FaGrinAlt, FaLongArrowAltUp, FaFilter } from "react-icons/fa";

function PeopleDetails() {

    const { mudaPagina } = useContext(PeopleContext)

    return (
        <div>
            <Container>
                <Pessoas>
                    <BarraUsuario>
                        <h1>Tickets</h1>

                        <DivFlex>
                            <ButtonsBarraUsuario>
                                <button><FaSistrix /></button>
                                <button><FaBell /></button>
                            </ButtonsBarraUsuario>
                            <PerfilUsuario>
                                <h3>Nome Usuario</h3>
                                <p><FaGrinAlt /></p>
                            </PerfilUsuario>
                        </DivFlex>

                    </BarraUsuario>
                    <BarraDescricao>
                        <h3>All tikets</h3>
                        <div>
                            <button><FaLongArrowAltUp />Sort</button>
                            <button><FaFilter />Filter</button>
                        </div>
                    </BarraDescricao>
                    <Descricao>
                        <p>Nome</p>
                        <p>Data de Nascimento</p>
                        <p>CPF</p>
                        <p>E-mail</p>
                        <p>Selecione</p>
                    </Descricao>
                    <PeopleList />
                    <ButtonPrimary width="80" onClick={mudaPagina}>Cadastrar</ButtonPrimary>
                </Pessoas>

            </Container >
        </div>
    )
}
export default PeopleDetails