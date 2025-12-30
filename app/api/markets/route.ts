import { NextResponse } from "next/server";

// In-memory array to store markets (resets on server restart)
let markets: any[] = [];

export async function GET() {
  return NextResponse.json(markets);
}

export async function POST(req: Request) {
  const body = await req.json();

  // Add timestamp and status for demo purposes
  const newMarket = {
    ...body,
    status: "Active",
    createdAt: new Date().toISOString(),
  };

  markets.push(newMarket);
  return NextResponse.json(newMarket);
}
