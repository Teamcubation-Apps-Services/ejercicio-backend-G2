import createServer from '../../src/server'
import supertest from 'supertest'
import * as MovementDataRepository from '../../src/repository/nosql/movementDataRepository'

const app = createServer()

const movementDataId = '6384f7001149fcd0ff14ff70'

const movementDataInput = {
  date: '2022-11-03T00:00:00.000Z',
  type: 'buy',
  clientId: '6385013a6b5f7a49046e5638',
  senderWalletAddress: '0x651C602e329A6cd02363379A96Cd5742605B7fA8',
  receiverWalletAddress: '0x651C602e329A6cd02363379A96Cd5742605B7fA1',
  coinId: '6384e5252653150f569c2356',
  amount: 10,
  fee: 0.003
}

const movementDataPayload = {
  id: movementDataId,
  ...movementDataInput
}

it('Should return an array with at least 1 record, and status code 200', async () => {
  const getAllMovementData = jest
    .spyOn(MovementDataRepository, 'getAllMovementDataRepository')
    // @ts-expect-error
    .mockReturnValueOnce([movementDataPayload])
  const { statusCode, body } = await supertest(app).get('/nosql/movement-data')

  expect(statusCode).toBe(200)
  expect(body).toEqual([movementDataPayload])
  expect(getAllMovementData).toHaveBeenCalled()
})

it('Should return the correct document', async () => {
  const getMovementData = jest
    .spyOn(MovementDataRepository, 'getMovementDataRepository')
    // @ts-expect-error
    .mockReturnValueOnce(movementDataPayload)
  const { statusCode, body } = await supertest(app).get(
    `/nosql/movement-data/${movementDataId}`
  )

  expect(statusCode).toBe(200)
  expect(body).toEqual(movementDataPayload)
  expect(getMovementData).toHaveBeenCalled()
})

it('Should create a movement', async () => {
  jest
    .spyOn(MovementDataRepository, 'postMovementDataRepository')
    // @ts-expect-error
    .mockReturnValueOnce(movementDataPayload)
  const { statusCode, body } = await supertest(app)
    .post('/nosql/movement-data')
    .send(movementDataInput)

  expect(statusCode).toBe(201)
  expect(body).toEqual(movementDataPayload)
})

it('Should not create a movement if not coinId is given', async () => {
  jest
    .spyOn(MovementDataRepository, 'postMovementDataRepository')
    // @ts-expect-error
    .mockReturnValueOnce(movementDataPayload)
  const { coinId, ...inputWithoutCoin } = movementDataInput
  const { statusCode } = await supertest(app)
    .post('/nosql/movement-data')
    .send(inputWithoutCoin)

  expect(statusCode).toBe(400)
})

it('Should update a record', async () => {
  jest
    .spyOn(MovementDataRepository, 'updateMovementDataRepository')
    // @ts-expect-error
    .mockReturnValueOnce(movementDataPayload)
  const { statusCode } = await supertest(app)
    .put(`/nosql/movement-data/${movementDataId}`)
    .send({ ...movementDataInput, coinId: '6384ffeae87779253278b98a' })

  expect(statusCode).toBe(200)
})

it('Should delete a record', async () => {
  jest
    .spyOn(MovementDataRepository, 'deleteMovementDataRepository')
    // @ts-expect-error
    .mockReturnValueOnce(movementDataPayload)
  const { statusCode } = await supertest(app).delete(
    `/nosql/movement-data/${movementDataId}`
  )

  expect(statusCode).toBe(200)
})
