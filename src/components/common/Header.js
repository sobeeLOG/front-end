import React from 'react';
import { Logo } from '../../assets';
import styled from 'styled-components';

function Header(){
    return (
        <StyledHeader>
            <Logo />
        </StyledHeader>
    )
}

export default Header;

const StyledHeader = styled.header`
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    padding-left: 2.3rem;
    background-color: #FFFFFF;
`
