import styled from 'styled-components';
import Navigator from '../components/common/Navigator';
import { Calendar } from '../components/calendar/Calendar';
import TotalAmount from '../components/calendar/TotalAmount';
import CalendarConsumption from '../components/calendar/CalendarConsumption';
import { useState } from 'react';
import { consumptionList } from '../mock-data/consumptionList';
import Header from '../components/common/Header';
import CommentArea from '../components/comment/CommentArea';

function MyCalendar() {
    const [list, setList] = useState(consumptionList);
    console.log(list.comment);
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
    -webkit-scrollbar {
        display: none;
    }
`;

const StyledConsumptionList = styled.div`
`