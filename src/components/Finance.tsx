"use client";

import Image from "next/image";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", feesCollected: 120, expenses: 80, surplus: 40 },
  { month: "Feb", feesCollected: 135, expenses: 90, surplus: 45 },
  { month: "Mar", feesCollected: 150, expenses: 100, surplus: 50 },
  { month: "Apr", feesCollected: 130, expenses: 85, surplus: 45 },
  { month: "May", feesCollected: 160, expenses: 95, surplus: 65 },
  { month: "Jun", feesCollected: 170, expenses: 110, surplus: 60 },
  { month: "Jul", feesCollected: 155, expenses: 100, surplus: 55 },
  { month: "Aug", feesCollected: 165, expenses: 105, surplus: 60 },
  { month: "Sep", feesCollected: 180, expenses: 115, surplus: 65 },
  { month: "Oct", feesCollected: 175, expenses: 120, surplus: 55 },
  { month: "Nov", feesCollected: 190, expenses: 130, surplus: 60 },
  { month: "Dec", feesCollected: 200, expenses: 140, surplus: 60 },
];

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-300 rounded shadow-md text-sm text-gray-700">
        <p className="font-semibold mb-1">Month: {label}</p>
        {payload.map((entry) => (
          <p key={entry.dataKey} className="mb-0">
            <span
              className="inline-block w-3 h-3 mr-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></span>
            {entry.name}: {entry.value}k
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const Finance = () => {
  return (
    <div className="bg-white rounded-2xl w-full h-full p-6 shadow-lg border flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-gray-800">💰 Finance</h1>
        <Image src="/moreDark.png" alt="more options" width={20} height={20} />
      </div>

      <div className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorFees" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#38BDF8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#38BDF8" stopOpacity={0.2} />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FACC15" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FACC15" stopOpacity={0.2} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="month" tick={{ fill: "#6b7280", fontWeight: 600 }} />
            <YAxis
              tick={{ fill: "#6b7280", fontWeight: 600 }}
              tickFormatter={(value) => `${value}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="top"
              height={36}
              wrapperStyle={{ fontWeight: "600", color: "#374151" }}
            />

            <Bar
              dataKey="feesCollected"
              fill="url(#colorFees)"
              name="Fees Collected"
              barSize={20}
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="expenses"
              fill="url(#colorExpenses)"
              name="Expenses"
              barSize={20}
              radius={[4, 4, 0, 0]}
            />
            <Line
              type="monotone"
              dataKey="surplus"
              stroke="#1E40AF" // deeper blue for surplus line
              strokeWidth={3}
              name="Surplus"
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Finance;
