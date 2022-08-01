import styled from "styled-components";
import { colorButtonPrimary } from '../../consts'

export const ButtonPrimary = styled.button(() => ({
    position: 'relative',
    backgroundColor: colorButtonPrimary,
    color: '#fff',
    width: 312,
    height: 48,
    border: 'none',
    borderRadius: 8,
    fontFamily: 'Mulish',
    fontSize: 14,
    fontWeight: 600,
    marginTop: 15,
}));

export const ButtonSecundary = styled.button(() => ({
    position: 'relative',
    backgroundColor: colorButtonPrimary,
    color: '#fff',
    width: 220,
    height: 35,
    border: 'none',
    borderRadius: 8,
    fontFamily: 'Mulish',
    fontSize: 14,
    fontWeight: 600,
    marginTop: 15,    
}));