import { Calendar } from "lucide-react";
import { getNotices } from "@/lib/sanityQueries";

interface Notice {
  _id: string;
  title: string;
  content: string;
  date?: string;
}

export default async function NoticeBoard() {
  const notices = await getNotices();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Latest Notices
        </h2>

        {notices.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No notices available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notices.map((notice: Notice) => (
              <div
                key={notice._id}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 line-clamp-2">
                    {notice.title}
                  </h3>

                  {notice.date && (
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <time dateTime={notice.date}>
                        {new Date(notice.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                  )}

                  <p className="text-gray-600 line-clamp-3 text-sm mt-auto">
                    {notice.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
