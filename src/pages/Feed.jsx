import styled from 'styled-components';
import Navigator from '../components/common/Navigator';
import Header from '../components/common/Header';

function Feed() {
    return (
        <StyledFeed>
            <Header/>
            <Navigator category="feed" />
        </StyledFeed>
    );
}

export default Feed;

const StyledFeed = styled.div`

`;