import styled from 'styled-components';
import Navigator from '../components/common/Navigator';
import Header from '../components/common/Header';

function Setting() {
    return (
        <StyledSetting>
            <Header/>
            <Navigator category="setting" />
        </StyledSetting>
    );
}

export default Setting;

const StyledSetting = styled.div`

`;