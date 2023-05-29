import styled from 'styled-components';
import Navigator from '../components/common/Navigator';
import Header from '../components/common/Header';

function Friend() {
    return (
        <StyledFriend>
            <Header/>
            <Navigator category="friend" />
        </StyledFriend>
    );
}

export default Friend;

const StyledFriend = styled.div`

`;