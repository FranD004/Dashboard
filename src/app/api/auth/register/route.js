import { NextResponse } from 'next/server'
import db from '@/libs/db'


export async function  POST(request) {
    const data = await request.json()

    const userFound = await db.user.findUnique({
        where: {
            email: data.email
        }
    })

    if (userFound) {
        return NextResponse.json({error: 'Email already exists'}, {status: 409})
    }

    const userNameFound = await db.user.findUnique({
        where: {
            username: data.username
        }
    })

    if (userNameFound) {
        return NextResponse.json({error: 'Username already exists'}, {status: 409})
    }

    console.log(data)
    const newUser = await db.user.create({
        data
    })

    return NextResponse.json(newUser)
}