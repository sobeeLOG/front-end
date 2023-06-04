import React from "react";
import './Friend.css'
import { ICProfile } from '../../assets';
import styled from "styled-components";

function FriendList(){
    //TODO: API 불러와서 실제 데이터로 바꾸기
    let userName = ['일순신', '이순신', '삼순신', '사순신', '오순신', '육순신','칠순신', '팔순신', '구순신', '십순신'];

    return (
        <div className='grid'>
            <p>친구 목록</p>
            <MyFriendList>
                {userName.map((userNameElem, index) => {
                    return (
                        <div className='myFriends_profile' key = {index}>
                            <ProfileUl><ICProfile/></ProfileUl>
                            <ProfileUl>{userNameElem}</ProfileUl>
                        </div>
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