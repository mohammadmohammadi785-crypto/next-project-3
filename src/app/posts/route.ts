import { data } from "./data";
export function GET() {
  return Response.json(data);
}
export async function POST(request: Request) {
  const data = await request.json();
  const newBlog = {
    id: data.length + 1,
    name: data.name,
    text: data.text,
  };
  data.push(newBlog);
  return new Response(JSON.stringify(newBlog), {
    headers: { "content-type": "application/json" },
    status: 200,
  });
}
