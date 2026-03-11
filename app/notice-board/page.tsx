import { getNotices } from "@/lib/sanityQueries";
import { Calendar, ChevronLeft } from "lucide-react";
import Link from "next/link";

interface Notice {
  _id: string;
  title: string;
  content: string;
  date?: string;
  slug?: string;
}

const mockNotices = [
  { _id: "1", title: "Datesheet Final Examination 2026 (Classes 1 to 7)", content: "", date: "2026-03-10" },
  { _id: "2", title: "Transport Instructions for Parents", content: "", date: "2026-03-09" },
  { _id: "3", title: "Instructions regarding books", content: "", date: "2026-03-08" },
  { _id: "4", title: "List of Books for Session 2026-27", content: "", date: "2026-03-07" },
  { _id: "5", title: "Instructions regarding Online Fee Payment", content: "", date: "2026-03-06" },
  { _id: "6", title: "Fee Details 2026-27", content: "", date: "2026-03-05" },
  { _id: "7", title: "Fee Voucher", content: "", date: "2026-03-04" },
  { _id: "8", title: "Date Sheet Final Examination 8th, 9th & 11th", content: "", date: "2026-03-03" },
  { _id: "9", title: "Uniform Pattern", content: "", date: "2026-03-02" },
  { _id: "10", title: "Form 5A of EPFO", content: "", date: "2026-03-01" },
  { _id: "11", title: "DAV Schools Recruitment Portal", content: "", date: "2026-02-28" },
];

export default async function NoticeBoardPage() {
  let fetchedNotices = await getNotices();
  
  if (!fetchedNotices || fetchedNotices.length === 0) {
    fetchedNotices = mockNotices;
  }

  return (
    <main className="min-h-screen bg-bg-light pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition-colors mb-8"
        >
          <ChevronLeft size={20} />
          <span>Back to Home</span>
        </Link>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
          <div className="bg-[#1a5b9c] p-6 text-center shadow-sm relative">
            <h1 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
              NOTICE BOARD
            </h1>
          </div>

          <div className="p-4 md:p-8 flex flex-col gap-4">
            {fetchedNotices.map((notice: Notice) => (
              <div 
                key={notice._id} 
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors rounded-lg group"
              >
                {/* Date Badge */}
                <div className="flex-shrink-0 flex items-center justify-center p-3 bg-blue-50 text-[#1a5b9c] border border-blue-100 rounded-lg min-w-[140px]">
                  <Calendar size={18} className="mr-2" />
                  <span className="font-semibold text-sm">
                    {notice.date 
                      ? new Date(notice.date).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric"
                        })
                      : "New Notice"}
                  </span>
                </div>

                {/* Title */}
                <div className="flex items-center flex-1">
                  <a 
                    href={notice.slug ? `/notices/${notice.slug}` : "#"} 
                    className="text-lg font-semibold text-[#1a5b9c] group-hover:text-accent transition-colors"
                  >
                    {notice.title}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
