import { NextResponse } from 'next/server'
import countryData from '../../countries.json'

export async function GET() {
    return NextResponse.json(countryData)
}
