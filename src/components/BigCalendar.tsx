"use client";

import { Calendar, momentLocalizer, Views, View } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import { calendarEvents } from "@/lib/data"; // make sure this path is correct

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <div className="h-[90vh] p-4">
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        view={view}
        views={["day", "work_week"]}
        onView={handleOnChangeView}
        defaultDate={new Date(2024, 7, 12)} // August 12, 2024
        min={new Date(2024, 7, 12, 8, 0)}   // 8:00 AM
        max={new Date(2024, 7, 12, 17, 0)}  // 5:00 PM
        step={15}
        timeslots={2}
        style={{ height: "100%" }}
        eventPropGetter={() => ({
          style: {
            backgroundColor: "#3b82f6",
            color: "white",
            borderRadius: "5px",
            padding: "4px",
          },
        })}
      />
    </div>
  );
};

export default BigCalendar;
