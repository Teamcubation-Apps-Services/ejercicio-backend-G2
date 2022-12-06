import createServer from '../../src/server'
import supertest from 'supertest'
import * as ClientRepository from '../../src/repository/sql/clientsRepository'

const app = createServer()

const clientId = 1

const clientInput = {
  dni: '40396022',
  firstName: 'Julia',
  lastName: 'Zack',
  email: 'holacambiemimail@gmail.com',
  phoneNumber: '1130232617'
}

const clientPayload = {
  id: clientId,
  ...clientInput
}

it('Should return an array with at least 1 record, and status code 200', async () => {
  const getAllClientsMock = jest.spyOn(ClientRepository, 'getAllClientRepository')
    // @ts-ignore
    .mockReturnValueOnce([clientPayload])
  const { statusCode, body } = await supertest(app).get('/sql/clients')

  expect(statusCode).toBe(200)
  expect(body).toEqual([clientPayload])
  expect(getAllClientsMock).toHaveBeenCalled()
})

it('Should create a client', async () => {
  jest.spyOn(ClientRepository, 'createClientRepository')
    // @ts-ignore
    .mockReturnValueOnce(clientPayload)
  const { statusCode, body } = await supertest(app).post('/sql/clients').send(clientInput)

  expect(statusCode).toBe(201)
  expect(body).toEqual(clientPayload)
})

it('Should not create a client if not dni is given', async () => {
  jest.spyOn(ClientRepository, 'createClientRepository')
    // @ts-ignore
    .mockReturnValueOnce(clientPayload)
  const { dni, ...rest } = clientInput
  const { statusCode } = await supertest(app).post('/sql/clients').send(rest)

  expect(statusCode).toBe(400)
})

it('Should update a record', async () => {
  jest.spyOn(ClientRepository, 'updateClientRepository')
    // @ts-ignore
    .mockReturnValueOnce(benefitPayload)
  const { statusCode } = await supertest(app).put(`/sql/clients/${clientId}`).send({ ...clientInput, name: 'New name' })

  expect(statusCode).toBe(200)
})

it('Should delete a record', async () => {
  jest.spyOn(ClientRepository, 'deleteClientRepository')
  // @ts-ignore
    .mockReturnValueOnce(benefitPayload)
  const { statusCode } = await supertest(app).delete(`/sql/clients/${clientId}`)

  expect(statusCode).toBe(200)
})
