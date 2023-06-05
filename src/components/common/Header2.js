import React from 'react';
import { Logo } from '../../assets';
import styled from 'styled-components';

function Header2(){
    return (
        <StyledHeader>
            <Logo />
        </StyledHeader>
    )
}

export default Header2;

const StyledHeader = styled.header`
    position: fixed;
    top: 17%;
    left: 35%;
    background-color: #FFFFFF;
`

