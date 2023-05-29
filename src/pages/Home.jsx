import styled from 'styled-components';
import Navigator from '../components/common/Navigator';

function Home() {
    return (
        <StyledHome>
        <Navigator category="home" />
        </StyledHome>
    );
}

export default Home;

const StyledHome = styled.div`

`;