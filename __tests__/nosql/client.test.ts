import app from '../../src/app'
import supertest from 'supertest'

it('Should return an array with at least 1 record, and status code 200', async () => {
  const response = await supertest(app).get('/nosql/clients/1')

  expect(response.body.length).toBeGreaterThan(0)
  expect(response.statusCode).toBe(200)
})

it('Should create a client', async () => {
  const response = await supertest(app).post('/nosql/clients').send({ dni: 31164331, firstName: 'Matias', lastName: 'Kosoy', email: 'holaprobando@gmail.com', phoneNumber: 12341234 })
  expect(response.statusCode).toBe(201)
  expect(response.body.dni).toBe(31164331)
  expect(response.body.firstName).toBe('Matias')
  expect(response.body.lastName).toBe('Kosoy')
  expect(response.body.email).toBe('holaprobando@gmail.com')
  expect(response.body.phoneNumber).toBe(12341234)
  expect(response.body.isActive).toBe(true)
})

it('Should update a record', async () => {
  const response = await supertest(app).put('/nosql/clients/1').send({ email: 'holacambiemimail@gmail.com' })
  expect(response.statusCode).toBe(200)
  expect(response.body.email).toBe('holacambiemimail@gmail.com')
})

it.skip('Should delete a record', async () => {
  const response = await supertest(app).delete('/nosql/clients/1')

  expect(response.statusCode).toBe(200)
  expect(response.body.isActive).toBe(false)
})
