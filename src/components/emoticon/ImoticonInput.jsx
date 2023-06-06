import React, { useState } from 'react';
import styled from 'styled-components';
import { client } from '../../libs/api';
import {ICGoodEmoticon, ICBadEmoticon, ICCheckGoodEmoticon, ICCheckBadEmoticon} from '../../assets';

function ImoticonInput({cHistoryID, category, clickCategory}) {
    const user = JSON.parse(sessionStorage.getItem("user"));
    
    // 클릭하지 않은 이모티콘 클릭 -> post
    const newClick = async () => {
        const postData = {
            userID: user.userID,
            category: category
        }
        const {data} =  await client.post(`/emoticon/${cHistoryID}`,{...postData});
        if(data.success){
            window.location.reload();
        }
    }

    // 클릭한 적이 있는 이모티콘 클릭 -> delete
    const oldClick = async () => {
        const deleteData = {
            userID: user.userID,
            category: category
        }
        const {data} =  await client.delete(`/emoticon/${cHistoryID}`,{...deleteData});
        if(data.success){
            window.location.reload();
        }
    }

    return(
        (category === 0)
        ? (
            (clickCategory === 0) 
            ? <ICGoodEmoticon onClick={oldClick} width="25" height="25"/> // 좋아요가 이미 클릭된 상태
            : <ICGoodEmoticon onClick={newClick} width="25" height="25"/>
        )
        : (
            (clickCategory === 1)
            ? <ICBadEmoticon onClick={oldClick} width="25" height="25"/> // 싫어요가 이미 클릭된 상태
            : <ICBadEmoticon onClick={newClick} width="25" height="25"/>
        )
    )
}

export default ImoticonInput;