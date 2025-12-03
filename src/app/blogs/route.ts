import { blog } from "./posts";
export function GET() {
  return new Response(JSON.stringify(blog));
}
export async function POST(request: Request) {
  const data = await request.json();
  const newBlog = {
    id: data.id,
    text: data.text,
  };
  blog.push();
  return new Response(JSON.stringify(newBlog), {
    headers: { "content-type": "application/json" },
  });
}
