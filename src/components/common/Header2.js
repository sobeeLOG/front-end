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
    position: flex;
    background-color: rgba(0, 0, 0, 0);
`

