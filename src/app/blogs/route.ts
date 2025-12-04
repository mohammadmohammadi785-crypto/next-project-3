import { blog } from "./posts";
export function GET() {
  return Response.json(blog);
}
export async function POST(request: Request) {
  const data = await request.json();
  const newBlog = {
    id: data.id,
    text: data.text,
  };
  blog.push();
  return (
    Response.json(newBlog),
    {
      headers: { "content-type": "application/json" },
      status: 200,
    }
  );
}
