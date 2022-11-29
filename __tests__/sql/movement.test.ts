import app from '../../src/app'
import supertest from 'supertest'

let idResponse: string;

it('Should return an array with at least 1 record, and status code 200', async () => {
  const response = await supertest(app).get('/sql/movements/1')

  expect(response.body.length).toBeGreaterThan(0)
  expect(response.statusCode).toBe(200)
})

it('Should create a movement', async() => {
  const response = await supertest(app).post('/sql/movements').send({ type: 'purchase' })
  idResponse = response.body.id
  expect(response.statusCode).toBe(201)
  expect(response.body.type).toBe('purchase')
  expect(response.body.isActive).toBe(true)
})


it('Should update a record', async () => {
  const response = await supertest(app).put(`/sql/movements/${idResponse}`).send({ type: 'investment' })
  expect(response.statusCode).toBe(200)
  expect(response.body.type).toBe('investment')
})

it('Should delete a record', async() => {
  const response = await supertest(app).delete(`/sql/movements/${idResponse}`)
    
  expect(response.statusCode).toBe(200)
  expect(response.body.isActive).toBe(false)
})