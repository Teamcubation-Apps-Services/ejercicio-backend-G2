import createServer from '../../src/server'
import supertest from 'supertest'
import * as MovementDataRepository from '../../src/repository/sql/movementDataRepository'

const app = createServer()

const movementDataId : number = 6

const movementDataInput = {
    date: "2022-10-18T16:23:00.000Z",
    clientId: 2,
    movementId: 2,
    senderWalletAddress: "0x651C602e329A6cd02363379A96Cd5742605B7fA8",
    receiverWalletAddress: "0x651C602e329A6cd02363379A96Cd5742605B7fA8",
    coinId: 3,
    amount: "0.1",
    fee: "0.006"
}

const movementDataPayload = {
    id: movementDataId,
    ...movementDataInput
}

it('Should return an array with at least 1 record, and status code 200', async() => {
    const getAllMovementData = jest.spyOn(MovementDataRepository, "getAllMovmentDataRepository")
    //@ts-ignore
        .mockReturnValueOnce([movementDataPayload])
    const { statusCode, body } = await supertest(app).get('/sql/movement-data')

    expect(statusCode).toBe(200)
    expect(body).toEqual([movementDataPayload])
    expect(getAllMovementData).toHaveBeenCalled()
})


it('Should return the correct document', async () => {
    const getMovementData = jest.spyOn(MovementDataRepository, "getMovementDataRepository")
    //@ts-ignore
        .mockReturnValueOnce(movementDataPayload)
    const { statusCode, body } = await supertest(app).get(`/sql/movement-data/${movementDataId}`)
    
    expect(statusCode).toBe(200)
    expect(body).toEqual(movementDataPayload)
})


it('Should create a movement', async() => {
    jest.spyOn(MovementDataRepository, "postMovementDataRepository")
    //@ts-ignore
        .mockReturnValueOnce(movementDataPayload)
    const response = await supertest(app).post('/sql/movement-data').send(movementDataInput)
    
    console.log(response.error);
    

    expect(response.statusCode).toBe(201)
    expect(response.body).toEqual(movementDataPayload)
})


it('Should not create a movement if not coinId is given', async() => {
    jest.spyOn(MovementDataRepository, "postMovementDataRepository")
    //@ts-ignore
        .mockReturnValueOnce(movementDataPayload)
    const { coinId, ...inputWithoutCoin } = movementDataInput
    const { statusCode } = await supertest(app).post('/sql/movement-data').send(inputWithoutCoin)
    
    expect(statusCode).toBe(400)
})

it('Should update a record', async () => {
    jest.spyOn(MovementDataRepository, "updateMovementDataRepository")
    //@ts-ignore
        .mockReturnValueOnce(movementDataPayload)
    const { statusCode } = await supertest(app).put(`/sql/movement-data/${movementDataId}`).send({...movementDataInput, coinId: "6384ffeae87779253278b98a"})

    expect(statusCode).toBe(200)
})

it('Should delete a record', async() => {
    jest.spyOn(MovementDataRepository, "deleteMovementDataRepository")
    //@ts-ignore
        .mockReturnValueOnce(movementDataPayload)
    const { statusCode } = await supertest(app).delete(`/sql/movement-data/${movementDataId}`)

    expect(statusCode).toBe(200)
})