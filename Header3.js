import React from 'react';
import { Logo } from '../../assets';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Header3(){
    const navigate = useNavigate();
    return (
        <StyledHeader>
            <Logo onClick={()=>navigate("/")}/>
        </StyledHeader>
    )
}

export default Header3;

const StyledHeader = styled.header`
    position: absolute;
    top: 10%;
    left: 44%;
    padding-left: 2.3rem;
    background-color: #FFFFFF;
`
