"use client";

import dynamic from "next/dynamic";
import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";
import Finance from "@/components/Finance";

// Dynamically import Attendance to avoid SSR issues
const Attendance = dynamic(() => import("@/components/Attendance"), { ssr: false });

export default function AdminPage() {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row min-h-screen">
      {/* Left Section */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* User Cards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>

        {/* Chart Section */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Count Chart */}
          <div className="w-full lg:w-1/3">
            <CountChart />
          </div>

          {/* Attendance Chart */}
          <div className="w-full lg:w-2/3 h-[400px]">
            <Attendance />
          </div>
        </div>
        <div className="w-full h-[500px]">
          <Finance/>

        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3">
        {/* Put any content or keep empty */}
      </div>
    </div>
  );
}
