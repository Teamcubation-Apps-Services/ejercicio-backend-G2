import createServer from '../../src/server'
import supertest from 'supertest'
import * as ClientBalanceRepository from '../../src/repository/sql/clientBalanceRepository'

const app = createServer()

const balanceId = 1

const balanceInput = {
    clientId: 2,
    coinId: 3,
    balance: 999
}

const balancePayload = {
    id: balanceId,
    ...balanceInput
}

it('Should return an array with all client balances given a clientId and status code 200', async() => {
    const getAllClientBalancesMock = jest.spyOn(ClientBalanceRepository, "getAllClientBalancesRepository")
    //@ts-ignore
        .mockReturnValueOnce([balancePayload])
    const { clientId } = balanceInput
    const { statusCode, body } = await supertest(app).get(`/sql/balances/${clientId}`)

    expect(statusCode).toBe(200)
    expect(body).toEqual([balancePayload])
    expect(getAllClientBalancesMock).toHaveBeenCalled()
})

it('Should return an array with all balances matching clientId and coinId given and status code 200', async() => {
    const getClientBalanceMock = jest.spyOn(ClientBalanceRepository, "getClientBalanceRepository")
    //@ts-ignore
        .mockReturnValueOnce([balancePayload])
    const { clientId, coinId } = balanceInput
    const { statusCode, body } = await supertest(app).get(`/sql/balances/${clientId}/${coinId}`)

    expect(statusCode).toBe(200)
    expect(body).toEqual([balancePayload])
    expect(getClientBalanceMock).toHaveBeenCalled()
})

it('Should create a balance', async() => {
    jest.spyOn(ClientBalanceRepository, "createClientBalanceRepository")
    //@ts-ignore
        .mockReturnValueOnce(balancePayload)
    const { statusCode, body} = await supertest(app).post('/sql/balances').send(balanceInput)
    
    expect(statusCode).toBe(201)
    expect(body).toEqual(balancePayload)
})

it('Should update a record', async () => {
    jest.spyOn(ClientBalanceRepository, "updateClientBalanceRepository")
    //@ts-ignore
        .mockReturnValueOnce(balancePayload)
    const { clientId, coinId } = balanceInput
    const { statusCode } = await supertest(app).put(`/sql/balances/${clientId}/${coinId}`).send({balance: 222})
        
    expect(statusCode).toBe(200)
})

it('Should delete a record', async() => {
    jest.spyOn(ClientBalanceRepository, "deleteClientBalanceRepository")
    //@ts-ignore
        .mockReturnValueOnce(balancePayload)
    const { clientId, coinId } = balanceInput
    const { statusCode } = await supertest(app).delete(`/sql/balances/${clientId}/${coinId}`)

    expect(statusCode).toBe(200)
})