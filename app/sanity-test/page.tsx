import { getNotices } from "@/lib/sanityQueries"

export default async function Page() {
  const notices = await getNotices();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Sanity CMS Connection Test</h1>

      {(!notices || notices.length === 0) && <p>No notices found.</p>}

      {notices && notices.map((notice: { _id: string; title: string; content: string }) => (
        <div key={notice._id}>
          <h3>{notice.title}</h3>
          <p>{notice.content}</p>
        </div>
      ))}
    </div>
  )
}
