import app from '../../src/app'
import supertest from 'supertest'

let idResponse: number;

let testClient = { 
  dni: "31164341", 
  firstName: 'Matias', 
  lastName: 'Kosoy2', 
  email: 'holaproban1do@gmail.com', 
  phoneNumber: 123414434 
}

it('Should return an array with at least 1 record, and status code 200', async () => {
  const response = await supertest(app).get('/sql/clients/')

  expect(response.body.length).toBeGreaterThan(0)
  expect(response.statusCode).toBe(200)
})

it('Should create a client', async () => {
  const response = await supertest(app).post('/sql/clients').send({...testClient})
  
  idResponse = response.body.id
  
  console.log(response.error);
  
  expect(response.statusCode).toBe(201)
  expect(response.body.dni).toBe(testClient.dni)
  expect(response.body.firstName).toBe(testClient.firstName)
  expect(response.body.lastName).toBe(testClient.lastName)
  expect(response.body.email).toBe(testClient.email)
  expect(response.body.phoneNumber).toBe(testClient.phoneNumber)
  expect(response.body.isActive).toBe(true)
})

it('Should update a record', async () => {
  const response = await supertest(app).put(`/sql/clients/${idResponse}`).send({ email: "julia.zack@testeandoando.org" })

  console.log(response.error);
  

  expect(response.statusCode).toBe(200)
  expect(response.body.email).toBe('julia.zack@testeandoando.org')
})

it('Should delete a record', async () => {
  const response = await supertest(app).delete(`/sql/clients/${idResponse}`)

  expect(response.statusCode).toBe(200)
  expect(response.body.isActive).toBe(false)
})

it('Should definitely delete a record', async () => {
  const response = await supertest(app).delete(`/sql/clients/delete/${idResponse}`)
  expect(response.statusCode).toBe(200)
})
