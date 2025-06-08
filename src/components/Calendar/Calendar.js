import React, { useState } from 'react';
import './Calendar.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = () => {
  const [events] = useState([
    { title: 'Meeting', date: '2025-06-08' },
    { title: 'Conference', date: '2025-06-10' }
  ]);

  return (
    <div className="calendar">
      <h2>Event Calendar</h2>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} />
    </div>
  );
};

export default Calendar;