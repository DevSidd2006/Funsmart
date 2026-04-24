import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    { message: 'Preview mode is disabled while CMS is turned off.' },
    { status: 410 }
  )
}
