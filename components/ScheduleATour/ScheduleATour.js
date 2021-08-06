import React, { useState } from 'react';
import { DayPickerSingleDateController, isInclusivelyAfterDay } from 'react-dates';
import * as Moment from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);
import 'react-dates/initialize'
import {WrapperContainer} from "../Wrapper/styles";
import 'react-dates/lib/css/_datepicker.css'
import Prev from "../../vectors/prev";
import Next from "../../vectors/next";
import {Box, Button} from "@chakra-ui/react";
import Bell from "../../vectors/bell";
import {StyledTourContainer} from "./styles";
import Guide from "../../vectors/guide";

const ScheduleATour = () => {
    const [date, setDate] = useState()
    const [focus, setFocus] = useState(true)
    if(date) {
        console.log("date", date.format('YYYY-MM-DD'))
    }
   const onDateChange =(date) => {
        setDate(date);
    }

   const onFocusChange =({focused} ) =>{
       setFocus(focused);
    }

    // const interval = 'weeks';
    // const range2 = moment.rangeFromInterval(interval, 2);
    const renderCalendarButton = () => {

        return <Box w="100%" ml={9} >

        <Button
            type="button"
            variant="primary"
            style={{backgroundImage:"linear-gradient(266.78deg, #60D77A 9.78%, #2FB94D 94.25%)"}}
            w="90%"
            h="7.7rem"
            color="#fff"
            fontSize="1.9rem"
            borderRadius="1rem"
            fontWeight="800"
            mb={6}
        >
            Continue
        </Button>
        </Box>
    }

    return (
        <WrapperContainer>
            <StyledTourContainer>
            <div className="tour-details-container">
            <p>Credo <span>Product</span> <span>Tour</span></p>
                <div className="guide-container">
                    <Guide/>
                </div>
            </div>
            <div className="calendar-container">
                <Box as="span" className="bell">
                    <Bell/>
                </Box>
                <DayPickerSingleDateController
                    numberOfMonths={1}
                    // navPrev={<Prev />}
                    // navNext={<Next />}1
                    autoFocus
                    daySize={70}
                    id="date_input"
                    date={date}
                    focused={focus}
                    onDateChange={(date) => onDateChange(date)}
                    onFocusChange={(focus) => onFocusChange(focus)}
                    isOutsideRange={day => !isInclusivelyAfterDay(day, moment())}
                    renderCalendarInfo={renderCalendarButton}
                />
            </div>
            </StyledTourContainer>
        </WrapperContainer>
    );
};

export default ScheduleATour;
