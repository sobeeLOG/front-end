import React from "react";
import './Friend.css'
import { ICSearchButton } from '../../assets';
import styled from "styled-components";

function FriendSearchInput() {
  return (
    <FindFriends>
          <StyledInput type='text' placeholder='닉네임으로 친구를 추가해 보세요.'></StyledInput>
          <button className='button_white'><ICSearchButton/></button>
    </FindFriends>
  );
}

export default FriendSearchInput;

const FindFriends = styled.div`
  display: flex;
  justify-self: center;
  box-sizing: border-box;
  background: white;
  border: 0.1rem solid black;
  border-radius: 1rem;
  margin-top: 1.9rem;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  padding: 0.25rem 0.1rem;
`;

const StyledInput = styled.input`
  width: 95%;
  height: 2.5rem;
  border: white;
  margin: 0.6875rem 1.4375rem;
`;