import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'

import { db } from '@/lib/db'

export async function POST(request: Request) {
  const body = await request.json()
  const { email, name, password } = body

  const hashedPassword = await bcrypt.hash(password, 12)

  const user = await db.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  })

  return NextResponse.json(user)
}
