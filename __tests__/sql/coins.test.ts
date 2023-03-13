import createServer from '../../src/server'
import supertest from 'supertest'
import * as CoinsRepository from '../../src/repository/sql/coinRepository'

const app = createServer()

const coinId: number = 1

const testCoin = {
  name: 'RBTC',
  description: 'rsk',
  quotationReference: 102,
  annualPerformance: 13
}

const coinInput = {
  name: 'ETH',
  description: 'ethereum',
  quotationReference: 1333.43,
  annualPerformance: 10
}

const coinPayload = {
  id: coinId,
  ...coinInput
}

it('Should return an array with at least 1 record, and status code 200', async () => {
  const getAllCoinsMock = jest.spyOn(CoinsRepository, 'getAllCoinRepository')
    // @ts-expect-error
    .mockReturnValueOnce([coinPayload])
  const { statusCode, body } = await supertest(app).get('/sql/coins')

  expect(statusCode).toBe(200)
  expect(body).toEqual([coinPayload])
  expect(getAllCoinsMock).toHaveBeenCalled()
})

it('Should return the correct document', async () => {
  const getCoin = jest.spyOn(CoinsRepository, 'getCoinRepository')
    // @ts-expect-error
    .mockReturnValueOnce(coinInput)
  const { statusCode, body } = await supertest(app).get(`/sql/coins/${coinId}`)
  console.log(body)

  expect(statusCode).toBe(200)
  expect(body).toEqual(coinInput)
  expect(getCoin).toHaveBeenCalled()
})

it('Should create a coin', async () => {
  jest.spyOn(CoinsRepository, 'postCoinRepository')
    // @ts-expect-error
    .mockReturnValueOnce(testCoin)
  const { statusCode, body } = await supertest(app).post('/sql/coins').send(testCoin)

  expect(statusCode).toBe(201)
  expect(body).toEqual(testCoin)
})

it('Should not create a benefit if not name is given', async () => {
  jest.spyOn(CoinsRepository, 'postCoinRepository')
    // @ts-expect-error
    .mockReturnValueOnce()

  const { statusCode } = await supertest(app).post('/sql/coins').send({ description: 'rsk', quotationReference: '102', annualPerformance: '13' })
  expect(statusCode).toBe(400)
})

it('Should update a record', async () => {
  jest.spyOn(CoinsRepository, 'updateCoinRepository')
    // @ts-expect-error
    .mockReturnValueOnce()
  const response = await supertest(app).put(`/sql/coins/${coinId}`).send({ name: 'Nombre' })

  expect(response.statusCode).toBe(200)
})

it('Should delete a record', async () => {
  jest.spyOn(CoinsRepository, 'deleteCoinRepository')
    // @ts-expect-error
    .mockReturnValueOnce()
  const { statusCode } = await supertest(app).delete(`/sql/coins/${coinId}`)

  expect(statusCode).toBe(200)
})
