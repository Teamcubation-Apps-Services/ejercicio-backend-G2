import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { promisify } from 'util'
import {
  PrismaClient as SqlClient,
  Client
} from '../../prisma/generated/sql-client'

const prisma = new SqlClient()

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token
    // 1) getting token and check if it's there
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1]
    }

    if (!token) {
      res.status(401).json({
        status: 'fail',
        message: 'You are not logged in! Please log in to get access.'
      })
    }

    // 2) Verification token
    // @ts-ignore
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)

    // 3) Check if user still exists
    const freshClient: any = await prisma.client.findUnique({
      // @ts-ignore
      where: { id: decoded.id }
    })

    if (!freshClient.isActive || !freshClient) {
      res.status(401).json({
        status: 'fail',
        message: 'The user belonging to this token does no longer exist.'
      })
    }

    next()
  } catch (error) {
    if (error == 'JsonWebTokenError: invalid signature') {
      res.status(401).json({
        status: 'fail',
        message: 'Invalid token, please login again.'
      })
    }
    console.log(`Error: ${error}`)
  }
}
