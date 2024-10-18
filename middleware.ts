import { NextRequest, NextResponse } from "next/server";
import { URL } from "url";

// URL of your Java service
const JAVA_SERVICE_URL = "http://localhost:8080";

// Middleware function to handle request forwarding
export async function middleware(request: NextRequest) {
  console.log("run into middleware");
  const {
    method,
    headers,
    nextUrl: { pathname },
  } = request;
  // Forward the request to the Java service
  try {
    const response = await fetch(JAVA_SERVICE_URL + pathname, {
      method: method,
      headers: headers,
      body: method === "POST" || method === "PUT" ? request.body : undefined,
    });
    const json = await response.json();
    console.log(response.status, json);
    return NextResponse.json(json);
  } catch (e) {
    console.log(e);
    return null;
  }
}

// Apply middleware to all routes
export const config = {
  matcher: ["/api/:path*"], // Matches all routes
};
