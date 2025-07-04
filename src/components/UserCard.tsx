import Image from 'next/image';
import React from 'react';

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-5 flex-1 min-w-[150px] max-w-sm text-black transition-all hover:shadow-lg hover:scale-[1.02] duration-200 shadow-md">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-[10px] font-semibold bg-white text-green-600 px-2 py-[2px] rounded-full shadow-sm">
          2024/25
        </span>
        <Image src="/more.png" alt="More" width={20} height={20} />
      </div>

      {/* Main Number */}
      <h1 className="text-3xl font-bold mb-2 tracking-tight">1,234</h1>

      {/* Type */}
      <h2 className="capitalize text-sm font-medium opacity-90">{type}</h2>
    </div>
  );
};

export default UserCard;
