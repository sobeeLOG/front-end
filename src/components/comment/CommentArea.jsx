import React, { useState } from 'react';
import styled from 'styled-components';
import { ICProfile } from '../../assets';

function CommentArea({comment}){
    console.log(comment);
    return(
        <StyledComment>
            <StyledProfile>
                <ICProfile/>
                <p>{comment.nickname}</p>
            </StyledProfile>
            <StyledContent>
                <p>{comment.content}</p>
            </StyledContent>
        </StyledComment>
    )
}

export default CommentArea;

const StyledComment = styled.div`
    height: 7rem;
    background-color: rgba(217,217,217,0.3);
    box-shadow: 0 0.4rem 0.4rem rgba(0,0,0,0.25);
    border-radius: 2rem;
    margin-top: 1.19rem;
`

const StyledProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7rem;
    padding-top: 0.7rem;
    padding-left: 1.3rem;
    padding-right: 1.3rem;
    p {
        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.5rem;
        color: #000000;
        opacity: 1.0;
    }
    svg {
        width: 2.959rem;
        height: 2.868rem;
    }
`

const StyledContent = styled.div`
    margin-top: 0.425rem;
    padding-left: 1.7rem;
    padding-right: 1.7rem;
    p {
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 1.8rem;

        color: #000000;
    }
`