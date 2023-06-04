import React, { useState, useEffect } from "react";
import { client } from "../../libs/api";
import './Friend.css'
import { ICProfile } from '../../assets';

function FriendRequestList() {
  const [request, setRequest] = useState([]);

    useEffect(() => {
        const fetchFriendList = async () => {
        try {
            const userID = 1; //TODO: 로그인 한 사용자의 아이디를 가져오도록 바꾸기
            const response = await client.get(`/friends/requests/${userID}`);
            const requestList = response.data.data.requestList;
            const requests = requestList.map(request => request.nickname);
            setRequest(requests);
        } catch (error) {
            console.log(error);
        }};

        fetchFriendList();
    }, []);
  
  //TODO: 버튼 누르면 친구 수락/삭제 POST 작동하도록
  return (
    <div className='grid'>
        <p>친구 요청 목록</p>
        <div>
            {request.map((requestListElem, index) => {
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