import createServer from '../../src/server'
import supertest from 'supertest'
import * as MovementRepository from '../../src/repository/sql/movementsRepository'

const app = createServer()

const movementId = 2

const movementInput = {
  type: 'purchase'
}

const movementPayload = {
  id: movementId,
  ...movementInput
}

it('Should return an array with at least 1 record, and status code 200', async () => {
  const getAllMovementsMock = jest.spyOn(MovementRepository, 'getAllMovementsRepository')
    // @ts-ignore
    .mockReturnValueOnce([movementPayload])
  const { statusCode, body } = await supertest(app).get('/sql/movements')

  expect(statusCode).toBe(200)
  expect(body).toEqual([movementPayload])
  expect(getAllMovementsMock).toHaveBeenCalled()
})

it('Should create a movement', async () => {
  jest.spyOn(MovementRepository, 'createMovementRepository')
    // @ts-ignore
    .mockReturnValueOnce(movementPayload)
  const { statusCode, body } = await supertest(app).post('/sql/movements').send(movementInput)

  expect(statusCode).toBe(201)
  expect(body).toEqual(movementPayload)
})

it('Should not create a movement if not type is given', async () => {
  jest.spyOn(MovementRepository, 'createMovementRepository')
    // @ts-ignore
    .mockReturnValueOnce(movementPayload)
  const { type, ...rest } = movementInput
  const { statusCode } = await supertest(app).post('/sql/movements').send(rest)

  expect(statusCode).toBe(400)
})

it('Should update a record', async () => {
  jest.spyOn(MovementRepository, 'updateMovementRepository')
    // @ts-ignore
    .mockReturnValueOnce(movementPayload)
  const { statusCode } = await supertest(app).put(`/sql/movements/${movementId}`).send({ ...movementInput, name: 'New name' })

  expect(statusCode).toBe(200)
})

it('Should delete a record', async () => {
  jest.spyOn(MovementRepository, 'deleteMovementRepository')
  // @ts-ignore
    .mockReturnValueOnce(movementPayload)
  const { statusCode } = await supertest(app).delete(`/sql/movements/${movementId}`)

  expect(statusCode).toBe(200)
})
