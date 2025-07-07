"use client";

import dynamic from "next/dynamic";
import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";
import Finance from "@/components/Finance";
import Announcements from "@/components/Announcements";

// ✅ Dynamically import to prevent SSR issues
const EventCalendar = dynamic(() => import("@/components/EventCalendar"), { ssr: false });
const Attendance = dynamic(() => import("@/components/Attendance"), { ssr: false });

export default function AdminPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 min-h-screen bg-gray-50">
      {/* Left Section */}
      <div className="w-full lg:w-2/3 flex flex-col gap-6">
        {/* User Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>

        {/* Chart Section */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/3 bg-white rounded-2xl p-4 shadow-md min-h-[300px]">
            <CountChart />
          </div>

          <div className="w-full lg:w-2/3 bg-white rounded-2xl p-4 shadow-md min-h-[400px]">
            <Attendance />
          </div>
        </div>

        {/* Finance Section */}
        <div className="w-full min-h-[420px]">
          <Finance />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        {/* Calendar */}
        <div className="bg-white rounded-2xl p-4 shadow-md min-h-[400px]">
          <EventCalendar />
        </div>

        {/* Announcements */}
        <div className="bg-white rounded-2xl p-4 shadow-md">
          <Announcements />
        </div>
      </div>
    </div>
  );
}
