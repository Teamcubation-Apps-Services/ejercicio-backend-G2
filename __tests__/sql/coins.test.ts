import app from '../../src/app'
import supertest from 'supertest'

const testCoin = {
    name: 'RBTC',
    description: 'rsk',
    quotationReference: '102',
    annualPerformance: '13',
}

// Se fija que el get devuelva aunque sea un documento
it('Should return an array with at least 1 record, and status code 200', async() => {
    const response = await supertest(app).get('/sql/coins')
    
    expect(response.body.length).toBeGreaterThan(0)
    expect(response.statusCode).toBe(200)
})

// Debe retornar toda la data especifica del documento con id 3
it('Should return the correct document', async () => {
    const response = await supertest(app).get('/sql/coins/3')
    
    expect(response.body[0].name).toBe("MATIC")
    expect(response.body[0].description).toBe("mumbai")
    expect(response.body[0].annualPerformance).toBe("7")
    expect(response.body[0].quotationReference).toBe("837.15")
    expect(response.statusCode).toBe(200)
})

// Debe crear correctamente un documento
it('Should create a coin', async() => {
    const response = await supertest(app).post('/sql/coins').send(testCoin)
    expect(response.statusCode).toBe(201)
    expect(response.body.name).toBe(testCoin.name)
    expect(response.body.description).toBe(testCoin.description)
    expect(response.body.annualPerformance).toBe(testCoin.annualPerformance)
    expect(response.body.quotationReference).toBe(testCoin.quotationReference)
    expect(response.body.isActive).toBe(true)
})

// No debe crear ningun documento, ya que no le pasamos un "name" que es un campo requerido
it('Should not create a coin if not name is given', async() => {
    const response = await supertest(app).post('/sql/coins').send({description: 'rsk', quotationReference: '102', annualPerformance: '13',})

    expect(response.statusCode).toBe(400)
})

// Debe hacer un update a un documento de forma apropiada
// Lo mejor seria pasarle al .put() un id de un documento que no se le haya hecho un update
it('Should update a record', async () => {
    const response = await supertest(app).put('/sql/coins/10').send({description: "RSK", annualPerformance: "10",  quotationReference: "100"})

    expect(response.statusCode).toBe(200)
    expect(response.body.name).toBe("RBTC")
    expect(response.body.description).toBe("RSK")
    expect(response.body.annualPerformance).toBe("10")
    expect(response.body.quotationReference).toBe("100")
})

// Debe hacer un delete de forma apropiada
// En el .delete() pasarle el id de un documento que no se haya borrado
// de lo contratio nos retornara un mensaje de error diciendo que el documento ya esta borrado
it('Should delete a record', async() => {
    const response = await supertest(app).delete('/sql/coins/11')
    
    expect(response.statusCode).toBe(200)
    expect(response.body.isActive).toBe(false)
})