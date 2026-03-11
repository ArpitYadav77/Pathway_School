import { getNotices } from "@/lib/sanityQueries";
import Link from "next/link";

interface Notice {
  _id: string;
  title: string;
  content: string;
  date?: string;
}

export default async function SideNoticeBoard() {
  const notices = await getNotices();

  return (
    <div className="h-[500px] md:h-[600px] lg:h-[650px] bg-white flex flex-col border-l border-gray-200">
      {/* Header */}
      <div className="bg-[#1a5b9c] text-white text-center py-4 font-bold text-2xl uppercase tracking-wide relative shadow-md z-10 flex-shrink-0">
        NOTICE BOARD
      </div>

      {/* Scrolling Content */}
      <div className="flex-1 overflow-hidden relative group bg-white">
        <div className="absolute top-0 w-full animate-marquee flex flex-col px-6">
          {/* Main List */}
          {notices.map((notice: Notice) => (
            <div key={notice._id} className="border-b border-gray-200 py-4 last:border-b-0">
              <div className="flex items-start gap-2 mb-2">
                <span className="w-1.5 h-1.5 bg-[#1a5b9c] rounded-full mt-2 shrink-0"></span>
                <div className="text-[#1a5b9c] hover:underline font-semibold text-sm line-clamp-2">
                  {notice.title}
                </div>
              </div>
              <div className="pl-3.5 flex items-center relative w-max">
                <div className="bg-[#8ab2d3] text-gray-800 text-xs px-3 py-1 font-medium z-10">
                  {notice.date 
                    ? new Date(notice.date).toLocaleDateString("en-GB").replace(/\//g, '-') 
                    : "New Update"}
                </div>
                {/* NEW Badge */}
                <span className="absolute -right-6 -top-2 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm -rotate-6 shadow-sm z-20">
                  NEW
                </span>
              </div>
            </div>
          ))}
          {/* Duplicated List for Infinite Scroll Illusion */}
          {notices.map((notice: Notice) => (
            <div key={`dup-${notice._id}`} className="border-b border-gray-200 py-4 last:border-b-0">
              <div className="flex items-start gap-2 mb-2">
                <span className="w-1.5 h-1.5 bg-[#1a5b9c] rounded-full mt-2 shrink-0"></span>
                <div className="text-[#1a5b9c] hover:underline font-semibold text-sm line-clamp-2">
                  {notice.title}
                </div>
              </div>
              <div className="pl-3.5 flex items-center relative w-max">
                <div className="bg-[#8ab2d3] text-gray-800 text-xs px-3 py-1 font-medium z-10">
                  {notice.date 
                    ? new Date(notice.date).toLocaleDateString("en-GB").replace(/\//g, '-') 
                    : "New Update"}
                </div>
                <span className="absolute -right-6 -top-2 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm -rotate-6 shadow-sm z-20">
                  NEW
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="p-4 bg-white border-t border-gray-200 text-center z-10 flex-shrink-0">
        <Link href="/notice-board" className="inline-block bg-[#1a5b9c] hover:bg-[#134980] text-white font-bold py-3 px-8 transition-colors w-full uppercase text-sm">
          View All
        </Link>
      </div>
    </div>
  );
}
