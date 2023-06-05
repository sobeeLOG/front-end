import styled from 'styled-components';
import Navigator from '../components/common/Navigator';
import Header from '../components/common/Header';
import { ICProfile } from '../assets';

function Setting() {
    return (
        <StyledSetting>
            <Header/>
            <StyledProfile></StyledProfile>
            <Navigator category="setting" />
            <StyledBox1>
                <StyledText1>닉네임</StyledText1>
                <StyledText2>한 달 목표 소비액</StyledText2>
                <StyledBox2>프로필 설정</StyledBox2>
                <StyledBox2>비밀번호 변경</StyledBox2>
                <StyledBox2>로그아웃</StyledBox2>
            </StyledBox1>
        </StyledSetting>
    );
}

export default Setting;

const StyledSetting = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
    margin-top: 7rem;
    background-color: #FFFFFF;
`;

const StyledProfile = styled(ICProfile)`
    position: fixed;
    top: 26%;
    left: 16%;
    height: 120px;
    width: 110px;
`;

const StyledBox1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80%;
    width: 100%;
    border-radius: 5rem;
    background-color: rgba(202, 212, 248, 0.8);
`;

const StyledBox2 = styled.div`
    display: flex;
    height: 6rem;
    width: 32rem;
    background-color: #FFFFFF;
    border-radius: 2rem;
    margin-top: 4rem;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 20px;
`;

const StyledText1 = styled.div`
    position: relative;
    font-size: 25px;
    font-weight: bold;
    bottom: 7rem;
    left: 4rem;
`;

const StyledText2 = styled.div`
    position: relative;
    font-size: 15px;
    bottom: 5.5rem;
    left: 6rem;
`;