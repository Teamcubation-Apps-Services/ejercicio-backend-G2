import createServer from '../../src/server'
import supertest from 'supertest'
import * as CoinsRepository from '../../src/repository/nosql/coinRepository'

const app = createServer()

const coinId = '6384e5252653150f569c2356'

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

// Se fija que el get devuelva aunque sea un documento
it('Should return an array with at least 1 record, and status code 200', async () => {
  const getAllCoinsMock = jest.spyOn(CoinsRepository, 'getAllCoinRepository')
    // @ts-expect-error
    .mockReturnValueOnce([coinPayload])
  const { statusCode, body } = await supertest(app).get('/nosql/coins')

  expect(statusCode).toBe(200)
  expect(body).toEqual([coinPayload])
  expect(getAllCoinsMock).toHaveBeenCalled()
})

it('Should return the correct document', async () => {
  const getCoin = jest.spyOn(CoinsRepository, 'getCoinRepository')
    // @ts-expect-error
    .mockReturnValueOnce(coinInput)
  const { statusCode, body } = await supertest(app).get(`/nosql/coins/${coinId}`)

  expect(statusCode).toBe(200)
  expect(body).toEqual(coinInput)
  expect(getCoin).toHaveBeenCalled()
})

it('Should create a coin', async () => {
  jest.spyOn(CoinsRepository, 'postCoinRepository')
    // @ts-expect-error
    .mockReturnValueOnce(testCoin)
  const { statusCode, body } = await supertest(app).post('/nosql/coins').send(testCoin)

  expect(statusCode).toBe(201)
  expect(body).toEqual(testCoin)
})

it('Should not create a benefit if not name is given', async () => {
  jest.spyOn(CoinsRepository, 'postCoinRepository')
    // @ts-expect-error
    .mockReturnValueOnce()

  const { statusCode } = await supertest(app).post('/nosql/coins').send({ description: 'rsk', quotationReference: '102', annualPerformance: '13' })
  expect(statusCode).toBe(400)
})

it('Should update a record', async () => {
  jest.spyOn(CoinsRepository, 'updateCoinRepository')
    // @ts-expect-error
    .mockReturnValueOnce()
  const response = await supertest(app).put(`/nosql/coins/${coinId}`).send({ name: 'Nombre' })

  expect(response.statusCode).toBe(200)
})

it('Should delete a record', async () => {
  jest.spyOn(CoinsRepository, 'deleteCoinRepository')
    // @ts-expect-error
    .mockReturnValueOnce()
  const { statusCode } = await supertest(app).delete(`/nosql/coins/${coinId}`)

  expect(statusCode).toBe(200)
})

// Dejo estos comentarios para dejar documentado los test anteriores

// // Debe retornar toda la data especifica del documento con id 3
// it('Should return the correct document', async () => {
//     const response = await supertest(app).get('/nosql/coins/6384e5252653150f569c2356')
//     console.log(response.body);

//     expect(response.body[0].name).toBe("ETH")
//     expect(response.body[0].description).toBe("ethereum")
//     expect(response.body[0].annualPerformance).toBe(10)
//     expect(response.body[0].quotationReference).toBe(1333.43)
//     expect(response.statusCode).toBe(200)
// })

// // Debe crear correctamente un documento
// it('Should create a coin', async() => {
//     const response = await supertest(app).post('/nosql/coins').send(testCoin)

//     idResponse = response.body.id;

//     expect(response.statusCode).toBe(201)
//     expect(response.body.name).toBe(testCoin.name)
//     expect(response.body.description).toBe(testCoin.description)
//     expect(response.body.annualPerformance).toBe(testCoin.annualPerformance)
//     expect(response.body.quotationReference).toBe(testCoin.quotationReference)
//     expect(response.body.isActive).toBe(true)
// })

// // No debe crear ningun documento, ya que no le pasamos un "name" que es un campo requerido
// it('Should not create a coin if not name is given', async() => {
//     const response = await supertest(app).post('/nosql/coins').send({description: 'rsk', quotationReference: '102', annualPerformance: '13',})

//     expect(response.statusCode).toBe(400)
// })

// // Debe hacer un update a un documento de forma apropiada
// // Lo mejor seria pasarle al .put() un id de un documento que no se le haya hecho un update
// it('Should update a record', async () => {
//     const response = await supertest(app).put(`/nosql/coins/${idResponse}`).send({description: "RSK", annualPerformance: 10,  quotationReference: 100})

//     expect(response.statusCode).toBe(200)
//     expect(response.body.name).toBe("RBTC")
//     expect(response.body.description).toBe("RSK")
//     expect(response.body.annualPerformance).toBe(10)
//     expect(response.body.quotationReference).toBe(100)
// })

// // Debe hacer un delete de forma apropiada
// // En el .delete() pasarle el id de un documento que no se haya borrado
// // de lo contratio nos retornara un mensaje de error diciendo que el documento ya esta borrado
// it('Should delete a record', async() => {
//     const response = await supertest(app).delete(`/nosql/coins/${idResponse}`)

//     expect(response.statusCode).toBe(200)
//     expect(response.body.isActive).toBe(false)
// })
