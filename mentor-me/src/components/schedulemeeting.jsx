import React, { useState } from 'react';
import CalendarComponent from './CalendarComponent';
import emailjs from 'emailjs-com';

const ScheduleMeeting = () => {
  const [events, setEvents] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSelectSlot = (slotInfo) => {
    setSelectedSlot(slotInfo);
    const title = prompt('Enter your name to confirm the meeting:');
    if (title) {
      const newEvent = {
        title: `Meeting with ${title}`,
        start: slotInfo.start,
        end: slotInfo.end,
      };

      // Update calendar view
      setEvents([...events, newEvent]);

      // Send email confirmation
      sendEmail(title, slotInfo.start);
    }
  };

  const sendEmail = (name, time) => {
    emailjs.send(
      'your_service_id',
      'your_template_id',
      {
        to_name: name,
        meeting_time: time.toString(),
      },
      'your_user_id'
    ).then(() => {
      alert('Email sent!');
    }).catch(err => console.error('Email error:', err));
  };

  return (
    <div>
      <h2>Schedule a Meeting</h2>
      <CalendarComponent events={events} onSelectSlot={handleSelectSlot} />
    </div>
  );
};

export default ScheduleMeeting;
