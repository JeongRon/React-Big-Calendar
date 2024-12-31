import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment); // Moment.js를 로컬라이저로 설정

const events = [
  {
    title: 'Meeting',
    start: new Date(2024, 11, 30, 10, 0), // 이벤트 시작 시간
    end: new Date(2024, 11, 30, 12, 0), // 이벤트 종료 시간
    allDay: false, // 종일 이벤트 여부
  },
  {
    title: 'Lunch Break',
    start: new Date(2024, 11, 30, 13, 0),
    end: new Date(2024, 11, 30, 14, 0),
    allDay: false,
  },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>My Calendar</h1>
      <Calendar
        localizer={localizer} // 로컬라이저 설정
        events={events} // 이벤트 데이터
        startAccessor="start" // 시작 시간 키
        endAccessor="end" // 종료 시간 키
        style={{ height: 500 }} // 캘린더 높이
      />
    </div>
  );
};

export default App;
