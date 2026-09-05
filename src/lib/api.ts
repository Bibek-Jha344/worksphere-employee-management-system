import { NextResponse } from "next/server";

export function ok<T>(data: T, message = "success") {
  return NextResponse.json({ success: true, data, message });
}

export function badRequest(message: string, details?: unknown) {
  return NextResponse.json(
    {
      success: false,
      message,
      details,
    },
    { status: 400 },
  );
}

export function unauthorized(message = "Unauthorized") {
  return NextResponse.json(
    {
      success: false,
      message,
    },
    { status: 401 },
  );
}

export function forbidden(message = "Forbidden") {
  return NextResponse.json(
    {
      success: false,
      message,
    },
    { status: 403 },
  );
}
