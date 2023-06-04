import React from "react";
import './Friend.css'
import { ICProfile } from '../../assets';

function FriendRequestList() {
  //TODO: API 불러서 실제 데이터로 바꾸기
  let requestList = ['홍길동', '홍길은', '홍길금'];

  return (
    <div className='grid'>
        <p>친구 요청 목록</p>
        <div>
            {requestList.map((requestListElem, index) => {
                return (
                    <div className='request_list' key = {index}>
                    <div className='profile_img'>
                      <ICProfile/>
                    </div>
                    <div> {requestListElem} </div>
                    <div className='reply_buttons'>
                        <button className='button_blue'>수락</button> 
                        <button className='button_grey'>거절</button>
                    </div> 
                    </div>
                );
            })}
          </div>
    </div>
  );
}

export default FriendRequestList;