"use client";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import Image from "next/image";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "#E5E7EB", // soft gray for background ring
  },
  {
    name: "Girls",
    count: 45,
    fill: "#FACC15", // lamaYellow
  },
  {
    name: "Boys",
    count: 55,
    fill: "#38BDF8", // lamaSky
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-2xl w-full h-[420px] p-6 shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-gray-800">👨‍🎓 Students</h1>
        <Image src="/moreDark.png" alt="more options" width={20} height={20} />
      </div>

      {/* Chart */}
      <div className=" relative w-full h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="35%"
            outerRadius="100%"
            barSize={18}
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
            <RadialBar
              background
             
              dataKey="count"
              cornerRadius={10}
              animationDuration={800}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image src="/maleFemale.png" alt="" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
      </div>

      {/* Legend / Stats */}
      <div className="mt-6 grid grid-cols-2 gap-4 text-center">
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 bg-[#38BDF8] rounded-full mb-2"></div>
          <h2 className="text-base font-bold text-gray-700">1,234</h2>
          <p className="text-sm text-gray-500">Boys (55%)</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 bg-[#FACC15] rounded-full mb-2"></div>
          <h2 className="text-base font-bold text-gray-700">1,010</h2>
          <p className="text-sm text-gray-500">Girls (45%)</p>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
