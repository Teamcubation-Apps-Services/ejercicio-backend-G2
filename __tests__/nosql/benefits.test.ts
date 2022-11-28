import app from '../../src/app'
import supertest from 'supertest'

let idResponse: string;

const testBenefit = {
  name: "Test benefit",
  discountPercentage: 10,
  refoundCap: 18122022,
  valideSince: new Date("2022-01-01"),
  valideTo: new Date("2023-01-01")
}

const incompleteBenefit = {
  discountPercentage: 10,
  refoundCap: 18122022,
  valideSince: new Date("2022-01-01"),
  valideTo: new Date("2023-01-01")
}

const updateBenefit = {
  name: "Test benefit edited"
}

it('Should return an array with at least 1 record, and status code 200', async() => {
    const response = await supertest(app).get('/nosql/benefits')
    
    expect(response.body.length).toBeGreaterThan(0)
    expect(response.statusCode).toBe(200)
})

it('Should create a benefit', async() => {
    const response = await supertest(app).post('/nosql/benefits').send(testBenefit)
    idResponse = response.body.id
    expect(response.statusCode).toBe(201)
    expect(response.body.name).toBe(testBenefit.name)
    expect(response.body.discountPercentage).toBe(testBenefit.discountPercentage)
    expect(response.body.refoundCap).toBe(testBenefit.refoundCap)
    expect(response.body.valideSince).toBe(testBenefit.valideSince.toISOString())
    expect(response.body.valideTo).toBe(testBenefit.valideTo.toISOString())
    expect(response.body.isActive).toBe(true)
})

it('Should not create a benefit if not name is given', async() => {
    const response = await supertest(app).post('/nosql/benefits').send(incompleteBenefit)

    expect(response.statusCode).toBe(400)
})

it('Should update a record', async () => {
    const response = await supertest(app).put(`/nosql/benefits/${idResponse}`).send(updateBenefit)
    expect(response.statusCode).toBe(200)
    expect(response.body.name).toBe(updateBenefit.name)
})

it('Should delete a record', async() => {
    const response = await supertest(app).delete(`/nosql/benefits/${idResponse}`)
    
    expect(response.statusCode).toBe(200)
    expect(response.body.isActive).toBe(false)
})