import React from 'react';
import styled from 'styled-components';

function Tag({content}){
    const tag = content;
    return(
        <StyledTaged>
            <p>#{tag}</p>
        </StyledTaged>
    )
}

export default Tag;

const StyledTaged = styled.div`
    width: 7.9rem;
    height: 2.2rem;
    background-color: ${(props) => props.theme.colors.mainBlue};
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        font-size: 1.5rem;
        font-weight: 400;
        color: #FFFFFF;
    }
`