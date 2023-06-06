import styled from 'styled-components';
import { Logo } from '../assets';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    
    return (
        <StyledHome>
            <StyledLogo>
                <Logo/>
            </StyledLogo>
                    <StyledStart onClick={() => navigate('/login')}>시작하기</StyledStart>
        </StyledHome>
    );
}

export default Home;

const StyledHome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
`;

const StyledStart = styled.button`
    display: flex;
    height: 4rem;
    width: 25rem;
    background-color: rgba(44, 84, 228, 1);
    border-radius: 1rem;
    margin-top: 5rem;
    color: #FFFFFF;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 20px;
`;

const StyledLogo = styled(Logo)`
    position: fixed;
    height: 200px;
    width: 200px;
    top: 30%;
`;