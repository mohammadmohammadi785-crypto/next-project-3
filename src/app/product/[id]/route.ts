import { blogs } from "../blog";
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const index = blogs.findIndex((post) => post.id === parseInt(id));
  if (index === -1) {
    return new Response("Post not found to delete", { status: 404 });
  }
  const deletePost = blogs.splice(index, 1);
  return Response.json(deletePost[0]);
}
