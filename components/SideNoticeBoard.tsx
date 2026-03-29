import { getNotices } from "@/lib/sanityQueries";
import Link from "next/link";

interface Notice {
  _id: string;
  title: string;
  content: string;
  date?: string;
  fileUrl?: string;
  fileName?: string;
  link?: string;
  isExternal?: boolean;
}

export default async function SideNoticeBoard() {
  const notices = await getNotices();

  return (
    <div className="flex flex-col h-[500px]">
      <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-teal-500/20">
        <div className="flex flex-col gap-4">
          {notices.map((notice: Notice) => (
            <div key={notice._id} className="p-4 rounded-lg bg-gray-50 hover:bg-teal-50/50 transition-colors border border-gray-100 group">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-teal-500 rounded-full mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
                <div className="flex-1">
                  {notice.fileUrl || notice.link ? (
                    <a
                      href={notice.fileUrl || notice.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-teal-600 font-semibold text-sm line-clamp-2 transition-colors"
                    >
                      {notice.title}
                    </a>
                  ) : (
                    <div className="text-primary font-semibold text-sm line-clamp-2">
                      {notice.title}
                    </div>
                  )}

                  <div className="mt-2 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-medium text-gray-500 bg-white px-2 py-0.5 rounded border border-gray-100 italic">
                      {notice.date 
                        ? new Date(notice.date).toLocaleDateString("en-GB")
                        : "New Update"}
                    </span>
                    {(notice.fileUrl || notice.link) && (
                      <a 
                        href={notice.fileUrl || notice.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-teal-600 text-[11px] font-bold hover:underline"
                      >
                        View Details →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Fill extra space if few notices */}
          {notices.length < 3 && (
            <div className="p-8 text-center text-gray-400 text-sm border-2 border-dashed border-gray-100 rounded-xl">
              Stay tuned for more updates!
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
        <Link href="/notice-board" className="flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-6 rounded-lg transition-all text-sm uppercase tracking-wide shadow-sm hover:shadow-md">
          View Full Notice Board
        </Link>
      </div>
    </div>
  );
}
