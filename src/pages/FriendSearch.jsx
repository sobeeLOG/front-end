import styled from 'styled-components';
import Navigator from '../components/common/Navigator';
import Header from '../components/common/Header';
import FriendSearchInput from '../components/friend/FriendSearchInput';
import FriendSearchList from '../components/friend/FriendSearchList';

function FriendSearch() {
    return (
        <StyledFriend>
            <Header/>
            <StyledFriendList>
                <FriendSearchInput/>
                <FriendSearchList/>
            </StyledFriendList>
            <Navigator category="friend"/>
        </StyledFriend>
    );
}

export default FriendSearch;

const StyledFriend = styled.div`
    overflow-y:scroll;
    height: 80vh;
    margin-top: 8rem;
    margin-bottom: 10rem;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const StyledFriendList = styled.div`
    display:flex;
    flex-direction: column;
    gap: 1.2rem;
`;