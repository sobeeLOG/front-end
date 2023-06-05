import styled from 'styled-components';
import Header from '../components/common/Header2';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <StyledLogin>
            <Header/>
            <Text1>이메일</Text1>
            <StyledBox1>
                <input type="email" placeholder='이메일을 입력하세요'/>
            </StyledBox1>
            <Text2>비밀번호</Text2>
            <StyledBox1>
                <input type="password" placeholder='비밀번호를 입력하세요'/>
            </StyledBox1>
            <StyledBox2>로그인</StyledBox2>
            <Container>
                <Word><Link to="/Join" style={{ textDecoration: 'none', color: 'inherit' }}>
                    회원 가입</Link></Word>
                <Word>/</Word>
                <Word><Link to="/ChangePwd" style={{ textDecoration: 'none', color: 'inherit' }}>
                    비밀번호 찾기</Link></Word>
            </Container>
        </StyledLogin>
    );
}

export default Login;

const StyledLogin = styled.div`
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
    top: 31%;
    left: 20%;
    font-size: 15px;
`;

const Text2 = styled.div`
    position: absolute;
    top: 41.5%;
    left: 20%;
    font-size: 15px;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const Word = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
    font-size: 12px;
`;