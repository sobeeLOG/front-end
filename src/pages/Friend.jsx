import styled from 'styled-components';
import Navigator from '../components/common/Navigator';
import Header from '../components/common/Header';
import FriendList from '../components/friend/FriendList';
import FriendRequestList from '../components/friend/FriendRequestList';
import FriendSearchPageButton from '../components/friend/FriendSearchPageButton';

function Friend() {
    return (
        <StyledFriend>
            <Header/>
            <StyledFriendList>
                <FriendSearchPageButton/>
                <FriendRequestList/>
                <FriendList/>
            </StyledFriendList>
            <Navigator category="friend" />
        </StyledFriend>
    );
}

export default Friend;

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