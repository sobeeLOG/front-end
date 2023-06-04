import React from "react";
import styled from "styled-components";
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
                <StyledButton className='button_blue'>팔로우</StyledButton>
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

const StyledButton = styled.button`
  width: 5.8rem;
  border-radius: 0.625rem;
  margin: 0.5rem;
  padding: 0.5rem;
  float: inline-end;
`;