import app from '../src/app'
import supertest from 'supertest'

it('Should return an array with at least 1 record, and status code 200', async() => {
    const response = await supertest(app).get('/balances/1')
    
    expect(response.body.length).toBeGreaterThan(0)
    expect(response.statusCode).toBe(200)
})

it('Should create a balance', async() => {
    const response = await supertest(app).post('/balances').send({clientId: 1, coinId: 3, balance: 100})
    expect(response.statusCode).toBe(201)
    expect(response.body.clientId).toBe(1)
    expect(response.body.coinId).toBe(3)
    expect(response.body.balance).toBe("100")
    expect(response.body.isActive).toBe(true)
})

it('Should not create a negative balance', async() => {
    const response = await supertest(app).post('/balances/1/2').send({balance: -20})

    expect(response.statusCode).toBe(404)
})

it('Should update a record', async () => {
    const response = await supertest(app).put('/balances/1/2').send({balance: 222})
    expect(response.statusCode).toBe(200)
    expect(response.body.balance).toBe("222")
})

it.skip('Should delete a record', async() => {
    const response = await supertest(app).delete('/balances/1/2')
    
    expect(response.statusCode).toBe(200)
    expect(response.body.isActive).toBe(false)
})