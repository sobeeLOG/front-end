import styled from 'styled-components';
import Header from '../components/common/Header2';

function ChangePwd() {
    return (
        <StyledChangePwd>
            <Header/>
            <Text1>비밀번호</Text1>
            <StyledBox1>
                <input type="password" placeholder='변경할 비밀번호를 입력하세요'/>
            </StyledBox1>
            <Text2>비밀번호 확인</Text2>
            <StyledBox1>
                <input type="password" placeholder='변경할 비밀번호를 한 번 더 입력하세요'/>
            </StyledBox1>
            <StyledBox2>비밀번호 변경</StyledBox2>
        </StyledChangePwd>
    );
}

export default ChangePwd;

const StyledChangePwd = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
`;

const StyledBox1 = styled.div`
    display: flex;
    height: 4rem;
    width: 25rem;
    background-color: #FFFFFF;
    border-radius: 1rem;
    border: 1px solid #000000;
    margin-bottom: 5rem;
    padding: 0.7rem 1.3rem;
    input { 
        width: 100%;
        border: none;
        border-radius:4px;
        box-shadow: none;
        -webkit-appearance:none;
        -moz-appearance: none;
        -o-appearance:none;
        appearance: none;
        ::placeholder{
            font-size: 1.2rem;
        }
        :focus{
            outline:none;
        }
    }
`;

const StyledBox2 = styled.div`
    display: flex;
    height: 4rem;
    width: 25rem;
    background-color: rgba(44, 84, 228, 0.8);
    border-radius: 1rem;
    margin-bottom: 5rem;
    color: #FFFFFF;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 20px;
`;

const Text1 = styled.div`
    position: absolute;
    top: 31.5%;
    left: 20%;
    font-size: 15px;
`;

const Text2 = styled.div`
    position: absolute;
    top: 42%;
    left: 20%;
    font-size: 15px;
`;