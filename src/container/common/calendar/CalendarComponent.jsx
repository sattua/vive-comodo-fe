import React from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

class CalendarComponent extends React.PureComponent {
    render() {
        const y = moment().format('YYYY');
        const m = moment().format('MM');
        const d = moment().format('DD');
debugger;
    return (<div>
        <Calendar
            localizer={localizer}
            events={[]}
            startAccessor="start"
            endAccessor="end"
            view="week"
            views={['week']}
            step={60}
            timeslots={1}
            min={new Date(2019, 7, 24, 8, 0, 0)}
            max={new Date(2020, 1, 1, 18, 0, 0)}
        />
        </div>)
    }

};

export default CalendarComponent;