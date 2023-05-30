import React from 'react';
import { ICCalendar, ICFriend, ICHome, ICSetting } from '../../assets';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Navigator({category}){
    const navigate = useNavigate();
    console.log(category)
    return (
        <StyledNavigator>
            <StyledNavButton onClick={() => navigate('/feed')} isactive={category==='feed'}>
                <ICHome />
            </StyledNavButton>

            <StyledNavButton onClick={() => navigate('/calendar')} isactive={category==='calendar'}>
                <ICCalendar />
            </StyledNavButton>
            
            <StyledNavButton onClick={()=> navigate('/friend')} isactive={category==='friend'}>
                <ICFriend />
            </StyledNavButton>

            <StyledNavButton onClick={()=> navigate('/setting')} isactive={category==='setting'}>
                <ICSetting />
            </StyledNavButton>
            
        </StyledNavigator>
    )
}

export default Navigator;

const StyledNavigator = styled.footer`
    position: fixed;
    width: 100%;
    display: flex;
    gap: 5.6rem;
    padding: 1.4rem 4.1rem 1.385rem 4.1rem;
    box-shadow: 0px -4px 8px rgba(178, 178, 226, 0.25);
    bottom: 0;
    box-sizing:border-box;
    justify-content: space-between;
    height: 6.4rem;
    background-color: #FFFFFF;
`

const StyledNavButton = styled.button`
    padding: 0;
    display:flex;
    svg > path {
        fill-opacity: ${(props) => (props.isactive ? 1.0 : 0.5)}
    }

    &:hover {
        svg > path {
            fill: ${(props) => props.theme.colors.mainBlue};
        }
    }
`