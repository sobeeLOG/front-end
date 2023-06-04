import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { ICAddFriend } from '../../assets';

function FriendSearchPageButton() {
    const navigate = useNavigate();
    
    return (
        <ButtonGoToRequestPage onClick={() => navigate('/friend/search')}>
            <ICAddFriend/>
        </ButtonGoToRequestPage>
  );
}

export default FriendSearchPageButton;


const ButtonGoToRequestPage = styled.button`
    margin: 1.2rem 0 0 auto;
    margin-right: 1.5rem;
    padding: 0.5rem 0.5rem 0 0.5rem;
    width: fit-content;
    text-decoration: none;
    color: white;
`;
