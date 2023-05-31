import styled from 'styled-components';
import Navigator from '../components/common/Navigator';
import { Calendar } from '../components/calendar/Calendar';
import TotalAmount from '../components/calendar/TotalAmount';
import CalendarConsumption from '../components/calendar/CalendarConsumption';
import { useState } from 'react';
import { consumptionList } from '../mock-data/consumptionList';
import Header from '../components/common/Header';
import CommentArea from '../components/comment/CommentArea';
import { ICAddButton } from '../assets';
import ConsumptionModal from '../components/calendar/ConsumotionModal';

function MyCalendar() {
    const [list, setList] = useState(consumptionList);
    
    const [modalOpen, setModalOpen] = useState(false);
    
    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }
    return (
        <>
        <Header/>
        <StyledMyCalendar>
            <Calendar/>
            <TotalAmount/>
            <StyledConsumptionList>
                {list && list.map((element) => {
                    return <CalendarConsumption info={element} key={element.chistoryID}/>
                })}
            </StyledConsumptionList>
            <StyledButton>
                <ICAddButton onClick={openModal}/>
                <ConsumptionModal open={modalOpen} close={closeModal}/>
            </StyledButton>
        </StyledMyCalendar>
        <Navigator category="calendar" />
        </>
    );
}

export default MyCalendar;

const StyledMyCalendar = styled.div`
    overflow-y:scroll;
    height: 90vh;
    margin-bottom: 8.2rem;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const StyledConsumptionList = styled.div`
`
const StyledButton = styled.button`
    position: fixed;
    z-index: 20;
    bottom: 9.1rem;
    right: 2rem;
    padding: 0;
    margin: 0;
    svg {
        fill: ${(props) => props.theme.colors.mainBlue};
        fill-opacity: 0.5;
    }
`