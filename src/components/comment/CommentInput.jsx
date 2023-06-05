import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ICComment } from '../../assets';

function CommentInput({replyActive, replyCommentInfo}){
    // TODO: 댓글 POST할 때 필요(onClick에 걸어야함)
    // const cHistoryID = chistoryId;
    const [comment, setComment] = useState('');
    const [replyInfo, setReplyInfo] = useState();
    console.log(replyCommentInfo);
    const update = () => {
        if(replyActive){
            const str = '@' + replyCommentInfo.userID;
            setReplyInfo(str);
        }
    }
    const onChange = (e) => {
        setComment(e.target.value);
    }

    useEffect(()=>{
        update()
    });

    console.log(comment);
    return(
        replyActive ? 
        <StyledReplyCommentInputBox>
            <input placeholder={replyInfo} onChange={onChange} />
            <ICComment onClick={()=>{
                console.log("댓글 작성 완료");
            }}/>
        </StyledReplyCommentInputBox>
        :
        <StyledCommentInputBox>
            <input placeholder='댓글을 입력하세요' onChange={onChange} />
            <ICComment onClick={()=>{
                console.log("댓글 작성 완료");
            }}/>
        </StyledCommentInputBox>
    )
}

export default CommentInput;

const StyledCommentInputBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.8rem;
    background-color: #FFFFFF;
    box-shadow: 0 0.4rem 0.4rem rgba(0,0,0,0.25);
    border-radius: 2rem;
    border: 1px solid #000000;
    margin-top: 1.19rem;
    padding: 0.7rem 1.3rem 0.7rem 1.3rem;
    gap:0.5rem;
    input { 
        width: 100%;
        border: none;
        border-radius:4px;
        box-shadow: none;
        -webkit-appearance:none;
        -moz-appearance: none;
        -o-appearance:none;
        appearance: none;
        ::placeholder{
            font-size: 1.2rem;
        }
        :focus{
            outline:none;
        }
    }
`

const StyledInput = styled.input`
    
`

const StyledReplyCommentInputBox = styled.div`
display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.8rem;
    background-color: #FFFFFF;
    box-shadow: 0 0.4rem 0.4rem rgba(0,0,0,0.25);
    border-radius: 2rem;
    border: 1px solid #000000;
    margin-top: 1.19rem;
    padding: 0.7rem 1.3rem 0.7rem 1.3rem;
    gap:0.5rem;
    input { 
        width: 100%;
        border: none;
        border-radius:4px;
        box-shadow: none;
        -webkit-appearance:none;
        -moz-appearance: none;
        -o-appearance:none;
        appearance: none;
        ::placeholder{
            font-size: 1.2rem;
        }
        :focus{
            outline:none;
        }
    }
`