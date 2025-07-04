import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";



export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex">
  {/* Sidebar */}
  <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-white shadow-lg border-r border-gray-200 flex flex-col items-center lg:items-start p-4 gap-6">
    {/* Logo Section */}
    <Link href="/" className="flex items-center gap-2">
      <Image src="/logo.png" alt="logo" width={32} height={32} />
      <span className="hidden lg:block font-semibold text-gray-700 text-lg">School</span>
    </Link>

    {/* Menu Section */}
    <div className="flex-1 w-full overflow-auto">
      <Menu />
    </div>
  </div>

  {/* Main Content */}
  <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-y-auto">
    <Navbar />
    {children}
  </div>
</div>

  );
}
