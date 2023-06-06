import React, { useState, useEffect } from "react";
import { client } from "../../libs/api";
import './Friend.css'
import { ICProfile } from '../../assets';
import styled from "styled-components";

function FriendList({info}){
    const [userName, setUserName] = useState([]);

    useEffect(() => {
        const fetchFriendList = async () => {
        try {
            const userID = 1; //TODO: 로그인 한 사용자의 아이디를 가져오도록 바꾸기
            const response = await client.get(`/friends/${userID}`);
            const friendList = response.data.data.friendsList;
            const nicknames = friendList.map(friend => friend.nickname);
            setUserName(nicknames);
        } catch (error) {
            console.log(error);
        }};

        fetchFriendList();
    }, []);

    return (
        <div className='grid'>
            <p>친구 목록</p>
            <MyFriendList>
                {userName.map((userNameElem, index) => {
                    return (
                        <MyFriendsProfile key = {index}>
                            <ProfileUl><ICProfile/></ProfileUl>
                            <ProfileUl>{userNameElem}</ProfileUl>
                        </MyFriendsProfile>
                    );
                })}
            </MyFriendList>
        </div>
    );
}

export default FriendList;

const ProfileUl = styled.ul`
    display: flex;
    justify-content: center;
    padding: 1.25rem;
    font-size: 15px;
`;

const MyFriendList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1em;
    margin: 1.25rem;
`;

const MyFriendsProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 9.5rem;
  height: 12.5rem;
  background: rgba(202, 212, 248, 0.71);
  border-radius: 0.625rem;
`;