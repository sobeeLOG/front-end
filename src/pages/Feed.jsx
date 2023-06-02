import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import Navigator from '../components/common/Navigator';
import Header from '../components/common/Header';
import CalendarConsumption from '../components/calendar/CalendarConsumption';
import { consumptionList } from '../mock-data/consumptionList';
import { client } from '../libs/api';

function Feed() {
    const [feedList, setFeedList] = useState(consumptionList);
    const getFeedListData = async () => {
        const {data} = await client.get(`/calendarfeed`);
        console.log(data.data.feedList);
        setFeedList(data.data.feedList);
        console.log(feedList);
    }
    
    useEffect(() => {
        getFeedListData();
    },[]);

    return (
        <StyledFeed>
            <Header/>
            <StyledFeedList>
                {feedList && feedList.map((element)=>{
                    return <CalendarConsumption info={element} key={element.chistoryID}></CalendarConsumption>
                })}
            </StyledFeedList>
            <Navigator category="feed" />
        </StyledFeed>
    );
}

export default Feed;

const StyledFeed = styled.div`
    overflow-y:scroll;
    height: 80vh;
    margin-top: 8rem;
    margin-bottom: 10rem;
    ::-webkit-scrollbar {
        display: none;
    }
`

const StyledFeedList = styled.div`
    display:flex;
    flex-direction: column;
    gap: 1.2rem;
`;