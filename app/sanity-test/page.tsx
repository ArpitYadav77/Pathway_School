import { notices } from "@/lib/mockdata"

export default async function Page() {

  return (
    <div style={{ padding: "40px" }}>
      <h1>Sanity CMS Connection Test</h1>

      {notices.length === 0 && <p>No notices found.</p>}

      {notices.map((notice: { _id: string; title: string; content: string }) => (
        <div key={notice._id}>
          <h3>{notice.title}</h3>
          <p>{notice.content}</p>
        </div>
      ))}
    </div>
  )
}
