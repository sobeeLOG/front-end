import { addMonths, format, subMonths } from "date-fns";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { isSameMonth, isSameDay, addDays } from 'date-fns';
import React,{useState} from "react";
import styled from "styled-components";
import Header from "../common/Header";
import Navigator from "../common/Navigator";
import { ICArrowLeft, ICArrowRight } from "../../assets";

export const Calendar = ({onClick}) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth,1));
    }
    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth,1));
    }

    const onDateClick = (day) => {
        setSelectedDate(day);
        const date = new Date(format(day, 'yyyy-MM-dd'));
        const sendDate = format(date,'yyyy-MM-dd');
        onClick(sendDate);
    }

    return (
        <>
            <StyledCalendar>
                <RenderHeader 
                    currentMonth={currentMonth}
                    prevMonth={prevMonth}
                    nextMonth={nextMonth}
                />
                <Border>
                    <RenderDays/>
                    <RenderCells
                        currentMonth={currentMonth}
                        selectedDate={selectedDate}
                        onDateClick={onDateClick}
                    />
                </Border>
            </StyledCalendar>
        </>
    )
}

const RenderHeader = ({currentMonth, prevMonth, nextMonth}) => {
    return (
            <StyledHeader>
                <StyledYear>{format(currentMonth,'yyyy')}</StyledYear>
                <ColMonth>
                    <div className="prev-month-icon" onClick={prevMonth}>
                        <ICArrowLeft />
                    </div>
                    <div className="text-month">
                        {format(currentMonth,'M')}월
                    </div>
                    <div className="next-month-icon" onClick={nextMonth}>
                        <ICArrowRight />
                    </div>
                </ColMonth>
            </StyledHeader>

        
    )
}

const RenderDays = () => {
    const days = [];
    const date = ['SUN','MON','TUE','WED','THU',"FRI",'SAT'];
    for(let i = 0; i<7; i++){
        days.push(
            <div className="col" key={i}>
                {date[i]}
            </div>
        )
    }

    return <Days>{days}</Days>
}

const RenderCells = ({currentMonth, selectedDate, onDateClick}) => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';
    const today = new Date();
    
    while(day<=endDate){
        for(let i = 0; i < 7; i++){
            formattedDate = format(day, 'd');
            const cloneDay = day;
            const parsedDate = new Date(format(cloneDay, 'yyyy-MM-dd'));
            days.push(
                
                <DayCell 
                    className={`col-cell${
                        !isSameMonth(day, monthStart)
                            ? '-disabled' 
                            : isSameDay(day, selectedDate)
                            ? '-selected'
                            : format(currentMonth, 'M') !== format(day, 'M')
                            ? 'not-valid'
                            : 'valid'
                    }`}
                    key={day}
                    onClick={()=>onDateClick(parsedDate)}
                >
                    <Day
                        isToday={isSameDay(day,today)}
                    >
                        {formattedDate}
                    </Day>
                </DayCell>
            );
            day = addDays(day,1);
        }
        rows.push(
            <Row key={day}>
                {days}
            </Row>
        );
        days=[];
    }
    return <Body>{rows}</Body>;
}



const StyledCalendar = styled.div`
    left: 0;
    right: 0;
`

const StyledHeader = styled.div`
    margin:0;
    display:flex;
    flex-direction:column;
    gap:0.1rem;
    .text-month{
        font-size:3rem;
    }
    .prev-month-icon{
        font-size:2.5rem;
    }
    .next-month-icon{
        font-size:2.5rem;
    }
    padding-top: 9.8rem;
`

const StyledYear = styled.div`
    display:flex;
    justify-content:center;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
`

const ColMonth = styled.div`
    margin: 0 0.29rem;
    display:flex;
    flex-direction:row;
    justify-content: space-around;
`

const Row = styled.div`
    display:flex;
    flex-direction:row;
    gap: 0.4rem;
    justify-content: space-between;
    margin: 0 0.29rem;
`

const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.3rem;
    .col-cell-disabled{
        color: grey;
    }
    .col-cell-selected{
        border: 0.1rem solid;
        border-radius: 30px;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    
`

const DayCell = styled.div`
    width: 3.8rem;
    height: 3.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const Day = styled.div`
    display: flex;
    flex-direction:row;
    gap: 1.2rem;
    width: 1.2rem;
    justify-content:center;
    font-size: 2.0rem;
    color: ${prop => {if(prop.isToday) return '#2c54e4'}};
`

const Days = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin: 0 0.29rem 1.4rem 0.29rem;
    font-size: 1.4rem;
`

const Border = styled.div`
    border: 0.2rem solid;
    border-radius: 10px;
    padding: 1.4rem 2.2rem;
    margin: 2.2rem 2.3rem;
`