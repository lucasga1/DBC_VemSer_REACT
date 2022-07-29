import styled from "styled-components";
import { colorButtonPrimary } from '../../consts'

export const ButtonPrimary  = styled.button(width => ({
    position: 'relative',
    backgroundColor: colorButtonPrimary,
    color: '#fff',
    width: width,
    height: 48,
    border: 'none',
    borderRadius: 8,
    fontFamily: 'Mulish',
    fontSize: 14,
    fontWeight: 600,
    marginTop: 24,
}));