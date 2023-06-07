import React from 'react';
import { Logo } from '../../assets';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Header2(){
    const navigate = useNavigate();
    return (
        <StyledHeader>
            <Logo onClick={()=>navigate("/")}/>
        </StyledHeader>
    )
}

export default Header2;

const StyledHeader = styled.header`
    position: flex;
    background-color: rgba(0, 0, 0, 0);
`

