import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/posts"));
}
export const config = {
  matcher: ["/blogs", "hello"],
};
