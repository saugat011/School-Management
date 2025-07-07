"use client";

import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  const formatSelectedDate = () => {
    if (value instanceof Date) return value.toDateString();
    if (Array.isArray(value)) {
      const [start, end] = value;
      if (start && end) return `${start.toDateString()} → ${end.toDateString()}`;
      if (start) return start.toDateString();
    }
    return "No date selected";
  };

  useEffect(() => {
    console.log("📘 School EventCalendar mounted");
  }, []);

  const events = [
    {
      time: "9:00 AM",
      title: "Math Exam",
      description: "Grade 10 - Algebra and Geometry exam in Room 205.",
    },
    {
      time: "11:00 AM",
      title: "Parent-Teacher Meeting",
      description: "Scheduled meetings with parents in Auditorium.",
    },
    {
      time: "1:00 PM",
      title: "Science Project Deadline",
      description: "Submission of final project reports.",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
      <div className="bg-white border rounded-xl shadow-md p-3 sm:p-4 md:p-4 w-full max-w-full sm:max-w-md lg:max-w-2xl mx-auto">
        <h1 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2">
          📅 School Calendar
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mb-2">
          Select a date or range:
        </p>

        <div className="rounded-md border border-gray-300 p-1 sm:p-1.5 mb-2">
          <Calendar
            onChange={onChange}
            value={value}
            selectRange={true}
            className="w-full"
          />
        </div>

        <p className="mt-1 text-xs sm:text-sm text-gray-600">
          Selected:{" "}
          <span className="font-semibold text-gray-800">
            {formatSelectedDate()}
          </span>
        </p>

        <div className="mt-3">
          <h2 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">
            📌 Today's Schedule
          </h2>
          <ul className="space-y-1.5">
            {events.map((event, index) => (
              <li
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-md p-2 shadow-sm"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-medium text-blue-600">
                    {event.time}
                  </span>
                  <span className="text-xs text-gray-400">🕒</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800">
                  {event.title}
                </h3>
                <p className="text-xs text-gray-600">{event.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
