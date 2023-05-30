import React from 'react';
import styled from 'styled-components';

function TotalAmount(){
    const amount = 15000;
    return(
        <>
            <StyledTotalAmount>
                <StyledTitle>오늘의 지출</StyledTitle>
                <StyledAmount>-{amount}원</StyledAmount>
            </StyledTotalAmount>
        </>
    )
}

export default TotalAmount;

const StyledTotalAmount = styled.div`
    display:flex;
    justify-content: space-between;
    margin: 0 3rem;
`

const StyledTitle = styled.p`
    font-size: 2rem;
`

const StyledAmount = styled.p`
    font-size: 2rem;
    color: ${(props) => props.theme.colors.red};
`