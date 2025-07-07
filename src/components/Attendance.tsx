"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Image from "next/image";
import { useState, useEffect } from "react";

const initialData = [
  { name: "Mon", present: 90, absent: 10 },
  { name: "Tue", present: 80, absent: 20 },
  { name: "Wed", present: 95, absent: 5 },
  { name: "Thu", present: 60, absent: 40 },
  { name: "Fri", present: 70, absent: 30 },
  { name: "Sat", present: 30, absent: 70 },
  { name: "Sun", present: 85, absent: 15 },
];

const Attendance = () => {
  // If you want dynamic data refresh, use state here:
  const [data, setData] = useState(initialData);

  // Example: You could update data dynamically here if needed (optional)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Update data logic
  //     setData((prev) => [...prev]); // dummy update, replace with real logic
  //   }, 10000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-gray-800">📊 Attendance</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>

      {/* Chart */}
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barSize={20}
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />
            <Legend verticalAlign="top" height={36} />
            <Bar
              dataKey="present"
              name="Present"
              fill="#38BDF8" // Sky Blue (like Boys)
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="absent"
              name="Absent"
              fill="#FACC15" // Yellow (like Girls)
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Attendance;
