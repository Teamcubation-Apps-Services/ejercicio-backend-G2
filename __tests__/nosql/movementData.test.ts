import app from '../../src/app'
import supertest from 'supertest'

let idResponse: string;

const testMovementData = {
    clientId: "oaifjaoefj",
    senderWalletAddress: "0x651C602e329A6cd02363379A96Cd5742605B7fA8",
    receiverWalletAddress: "0x651C602e329A6cd02363379A96Cd5742605B7fA1",
    type: "buy",
    coinId: "6384ffeae87779253278b98a",
    amount: 0.1,
    fee: 0.006        
}

it('Should return an array with at least 1 record, and status code 200', async() => {
    const response = await supertest(app).get('/nosql/movement-data')
    
    expect(response.body.length).toBeGreaterThan(0)
    expect(response.statusCode).toBe(200)
})


it('Should return the correct document', async () => {
    const response = await supertest(app).get('/nosql/movement-data/6384f7001149fcd0ff14ff70')
    
    
    expect(response.body[0].clientId).toBe("oaifjaoefj")
    expect(response.body[0].type).toBe("buy")
    expect(response.body[0].senderWalletAddress).toBe("0x651C602e329A6cd02363379A96Cd5742605B7fA8")
    expect(response.body[0].receiverWalletAddress).toBe("0x651C602e329A6cd02363379A96Cd5742605B7fA1")
    expect(response.body[0].coinId).toBe("aiefjaeoifj")
    expect(response.body[0].amount).toBe(0.1)
    expect(response.body[0].fee).toBe(0.006)
    expect(response.statusCode).toBe(200)
})


it('Should create a coin', async() => {
    const response = await supertest(app).post('/nosql/movement-data').send({...testMovementData})
    
    // Guardo el id del nuevo documento para despues poder hacer un .put y un .delete con el mismo sin afectar a otra data de la db
    idResponse = response.body.id;

    console.log(response.error);
    

    expect(response.body.clientId).toBe(testMovementData.clientId)
    expect(response.body.type).toBe(testMovementData.type)
    expect(response.body.senderWalletAddress).toBe(testMovementData.senderWalletAddress)
    expect(response.body.receiverWalletAddress).toBe(testMovementData.receiverWalletAddress)
    expect(response.body.coinId).toBe(testMovementData.coinId)
    expect(response.body.amount).toBe(testMovementData.amount)
    expect(response.body.fee).toBe(testMovementData.fee)
    expect(response.body.isActive).toBe(true)
    expect(response.statusCode).toBe(201)
    
})


it('Should not create a coin if not name is given', async() => {
    const response = await supertest(app).post('/nosql/movement-data').send({senderWalletAddress: "0x651C602e329A6cd02363379A96Cd5742605B7fA8", receiverWalletAddress: "0x651C602e329A6cd02363379A96Cd5742605B7fA8", coinId: "idfrometh",})

    expect(response.statusCode).toBe(400)
})


it('Should update a record', async () => {
    const response = await supertest(app).put(`/nosql/movement-data/${idResponse}`).send({senderWalletAddress: "0x651C602e329A6cd0236337JUANCd5742605B7fA8", coinId: "ETHid"})

    expect(response.statusCode).toBe(200)
    expect(response.body.senderWalletAddress).toBe("0x651C602e329A6cd0236337JUANCd5742605B7fA8")
    expect(response.body.receiverWalletAddress).toBe("0x651C602e329A6cd02363379A96Cd5742605B7fA1")
    expect(response.body.coinId).toBe("ETHid")
    
})


it('Should delete a record', async() => {
    const response = await supertest(app).delete(`/nosql/movement-data/${idResponse}`)
    
    expect(response.statusCode).toBe(200)
    expect(response.body.isActive).toBe(false)
})