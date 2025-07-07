"use client"
import { useEffect, useState } from "react";

// Mock announcement data (simulate from API or JSON file)
const mockAnnouncements = [
  {
    id: 1,
    title: "Exam Schedule Released",
    message:
      "The final exam schedule for Grade 12 has been published. Please check the notice board or school website.",
  },
  {
    id: 2,
    title: "Parent-Teacher Meeting",
    message:
      "There will be a parent-teacher meeting on Friday at 10 AM in the main hall. All parents are encouraged to attend.",
  },
];

const Announcements = () => {
  const [announcements, setAnnouncements] = useState<
    { title: string; message: string; id: number }[]
  >([]);

  useEffect(() => {
    setAnnouncements(mockAnnouncements);
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">📢 Announcements</h2>

      {announcements.length === 0 ? (
        <p className="text-gray-500">No announcements available.</p>
      ) : (
        <ul className="space-y-4">
          {announcements.map(({ id, title, message }) => (
            <li
              key={id}
              className="border border-gray-300 rounded p-4 bg-gray-50"
            >
              <h4 className="font-semibold text-gray-800">{title}</h4>
              <p className="text-gray-700 mt-1 whitespace-pre-line">{message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Announcements;
