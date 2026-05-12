import { NextResponse } from "next/server";
import { getAnalyticsData } from "@/lib/analytics-data";

export async function GET() {
  return NextResponse.json(getAnalyticsData());
}
