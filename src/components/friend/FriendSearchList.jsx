import React from "react";
import './Friend.css'
import { ICProfile } from '../../assets';

function FriendSearchPage() {
  //TODO: API 불러오도록 바꾸기
  let requestList = ['홍길동', '홍길은', '홍길금'];
  
  return (
    <>
    <div className='grid'>
      <div>
        {requestList.map((requestListElem, index) => {
          return (
            <div className='request_list' key = {index}>
              <div className='profile_img'>
                <ICProfile/>
              </div>
              <div> {requestListElem} </div>
              <div className='reply_buttons'>
                <button className='button_blue'>팔로우</button>
              </div> 
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}

export default FriendSearchPage;