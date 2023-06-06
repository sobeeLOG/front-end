import React, { useState, useEffect } from "react";
import { client } from "../../libs/api";
import './Friend.css'
import { ICProfile } from '../../assets';

function FriendRequestList() {
  const [requests, setRequests] = useState([]);
  const [myID, setMyID] = useState(null);
  
  useEffect(() => {
    const fetchFriendRequestList = async () => {
      try {
        //TODO: 로그인 한 사용자의 아이디를 가져오도록 바꾸기
        const inUserID = 1; 
        setMyID(inUserID);

        const response = await client.get(`/friends/requests/${myID}`);
        const requestList = response.data.data.requestList;
        setRequests(requestList);
      } catch (error) {
        console.log(error);
      }};
    
      fetchFriendRequestList();
    }, [myID]);

    const handleAccept = async(receiverID, senderID) => {
      try{
        console.log("[친구 수락]: " + receiverID + ", " + senderID);
        await client.patch('/friends/requests', {receiverID, senderID});

        //수락한 요청은 목록에서 지우기
        setRequests((prevRequests) =>
          prevRequests.filter((request) => request.senderID !== senderID)
        );
        window.location.reload();
      }catch(error){
        console.log(error);
      }
    }

    const handleReject = async(receiverID, senderID) => {
      try{
        console.log("[친구 거절]: " + receiverID + ", "+ senderID);
        await client.post('/friends/requests/delete', {
          user1ID: receiverID, 
          user2ID: senderID
        });

        //수락한 요청은 목록에서 지우기
        setRequests((prevRequests) =>
          prevRequests.filter((request) => request.senderID !== senderID)
        );
        window.location.reload();
      }catch(error){
        console.log(error);
      }
    }
  
  //TODO: 따로 새로고침 하지 않아도 수락/거절 반영 내용 화면에 나오도록 바꾸기
  return (
    <div className='grid'>
        <p>친구 요청 목록</p>
        <div>
            {requests.map((request, index) => {
                const {userID, nickname} = request;
                return (
                    <div className='request_list' key = {index}>
                    <div className='profile_img'>
                      <ICProfile/>
                    </div>
                    <div> {nickname} </div>
                    <div className='reply_buttons'> 
                        <button className='button_blue' onClick={() => handleAccept(myID, userID)}>수락</button> 
                        <button className='button_grey' onClick={() => handleReject(myID, userID)}>거절</button>
                    </div> 
                    </div>
                );
            })}
          </div>
    </div>
  );
}

export default FriendRequestList;