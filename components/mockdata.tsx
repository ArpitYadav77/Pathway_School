import { notices } from "@/lib/mockdata"

export default function NoticeBoard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Latest Notices</h2>

      {notices.map((notice) => (
        <div key={notice._id} className="mb-4 border p-4 rounded">
          <h3 className="font-semibold">{notice.title}</h3>
          <p>{notice.content}</p>
          <span className="text-sm text-gray-500">{notice.date}</span>
        </div>
      ))}
    </div>
  )
}