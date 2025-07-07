import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";

export default function TeacherPage() {
  return (
    <div className="p-4 flex flex-col xl:flex-row gap-4">
      {/* Left - Schedule */}
      <div className="w-full xl:w-2/3">
        <div className="bg-white p-4 rounded-md h-full shadow-sm">
          <h1 className="text-xl font-semibold text-gray-800 mb-3">📅 Schedule</h1>
          <BigCalendar />
        </div>
      </div>

      {/* Right - Announcements */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md h-full shadow-sm">
          <Announcements />
        </div>
      </div>
    </div>
  );
}
