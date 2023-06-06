import React from "react";
import './Friend.css'
import { ICSearchButton } from '../../assets';
import styled from "styled-components";

function FriendSearchInput({ value, onChange, onSubmit }) {
  return (
    <FindFriends>
          <StyledInput 
            type='text' 
            placeholder='닉네임으로 친구를 추가해 보세요.'
            value={value}
            onChange={onChange}
            />
          <SearchButton onClick={onSubmit}><ICSearchButton/></SearchButton>
    </FindFriends>
  );
}

export default FriendSearchInput;

const FindFriends = styled.div`
  display: flex;
  justify-self: center;
  box-sizing: border-box;
  background: white;
  border: 1px solid black;
  border-radius: 1rem;
  margin: 2rem 1.5rem 0 1.5rem;
`;

const StyledInput = styled.input`
  width: 95%;
  height: 2.5rem;
  border: white;
  margin: 0.6875rem 1.4375rem;
`;

const SearchButton = styled.button `
  width: 5.8rem;
  border-radius: 0.625rem;
  margin: 0.5rem;
  padding: 0.5rem;
  float: inline-end;
  background: white;
  border: white;
  color: black;
`;