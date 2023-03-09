import { Request, Response } from "express";
import {
  PrismaClient as NoSqlClient,
  MovementData,
} from "../../../prisma/generated/nosql-client";

const prisma = new NoSqlClient();

export const getAllMovementDataRepository = async (
  req: Request,
  res: Response
): Promise<MovementData[] | Error> => {
  try {
    return await prisma.movementData.findMany({
      where: {
        isActive: true,
      },
      include: {
        coin: {
          select: {
            name: true,
          },
        },
      },
    });
  } catch (e: any) {
    return new Error(e.meta?.cause);
  }
};

export const getMovementDataRepository = async (
  req: Request,
  res: Response
): Promise<MovementData[] | Error> => {
  try {
    const id = req.params.id;

    return await prisma.movementData.findMany({
      where: { isActive: true, client: { dni: id } },
      include: {
        coin: {
          select: {
            name: true,
          },
        },
      },
    });
  } catch (e: any) {
    return new Error(e.meta?.cause);
  }
};

export const postMovementDataRepository = async (
  req: Request,
  res: Response
): Promise<MovementData | Error> => {
  try {
    const {
      clientId,
      type,
      senderWalletAddress,
      receiverWalletAddress,
      coinId,
      amount,
      fee,
    } = req.body;

    return await prisma.movementData.create({
      data: {
        date: new Date(),
        clientId,
        type,
        senderWalletAddress,
        receiverWalletAddress,
        coinId,
        amount,
        fee,
      },
    });
  } catch (e: any) {
    return new Error(e);
  }
};

export const updateMovementDataRepository = async (
  req: Request,
  res: Response
): Promise<MovementData | Error> => {
  try {
    const data = req.body;
    const id = req.params.id;
    const movementData = await prisma.movementData.findUnique({
      where: { id },
    });
    if (movementData === null) {
      return new Error("Record not found");
    }
    if (!movementData.isActive) {
      return new Error("Invalid id");
    }
    return await prisma.movementData.update({
      where: {
        id,
      },
      data,
    });
  } catch (e: any) {
    return new Error(e.meta?.cause);
  }
};

export const deleteMovementDataRepository = async (
  req: Request,
  res: Response
): Promise<MovementData | Error> => {
  try {
    const { id } = req.params;
    const movementData = await prisma.movementData.findUnique({
      where: {
        id,
      },
    });
    if (movementData === null) {
      return new Error("Record not found");
    }
    if (!movementData.isActive) {
      return new Error("Movement data already deleted");
    }
    return await prisma.movementData.update({
      where: {
        id,
      },
      data: {
        isActive: false,
      },
    });
  } catch (e: any) {
    return new Error(e.meta?.cause);
  }
};
