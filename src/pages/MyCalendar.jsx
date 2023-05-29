import styled from 'styled-components';
import Navigator from '../components/common/Navigator';
import { Calendar } from '../components/calendar/Calendar';
function MyCalendar() {
    return (
        <StyledMyCalendar>
            <Calendar/>
            <Navigator category="calendar" />
        </StyledMyCalendar>
    );
}

export default MyCalendar;

const StyledMyCalendar = styled.div`

`;