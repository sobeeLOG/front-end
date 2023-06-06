import React from "react";
import './Friend.css'
import { ICProfile } from '../../assets';

function FriendSearchList({results}) {
  if (results) {
    return (
      <>
      <div className='grid'>
        <div>
          {results.map((user, index) => {
            return (
              <div className='request_list' key = {index}>
                <div className='profile_img'>
                  <ICProfile/>
                </div>
                <div> {user.nickname} </div>
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
  
  return null;
}

export default FriendSearchList;