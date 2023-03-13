import createServer from '../../src/server'
import supertest from 'supertest'
import * as BenefitRepository from '../../src/repository/nosql/benefitRepository'

const app = createServer()

const benefitId = '6385083253473e2efed16d19'

const benefitInput = {
  name: 'Test benefit',
  discountPercentage: 10,
  refoundCap: 9999,
  valideSince: '2022-11-03T00:00:00.000Z',
  valideTo: '2023-11-03T00:00:00.000Z'
}

const benefitPayload = {
  id: benefitId,
  ...benefitInput
}

it('Should return an array with one record and status code 200', async () => {
  const getAllBenefitsMock = jest.spyOn(BenefitRepository, 'getAllBenefitsRepository')
    // @ts-expect-error
    .mockReturnValueOnce([benefitPayload])
  const { statusCode, body } = await supertest(app).get('/nosql/benefits')

  expect(statusCode).toBe(200)
  expect(body).toEqual([benefitPayload])
  expect(getAllBenefitsMock).toHaveBeenCalled()
})

it('Should create a benefit', async () => {
  jest.spyOn(BenefitRepository, 'createBenefitRepository')
    // @ts-expect-error
    .mockReturnValueOnce(benefitPayload)
  const { statusCode, body } = await supertest(app).post('/nosql/benefits').send(benefitInput)

  expect(statusCode).toBe(201)
  expect(body).toEqual(benefitPayload)
})

it('Should not create a benefit if not name is given', async () => {
  jest.spyOn(BenefitRepository, 'createBenefitRepository')
    // @ts-expect-error
    .mockReturnValueOnce(benefitPayload)
  const { name, ...rest } = benefitInput
  const { statusCode } = await supertest(app).post('/nosql/benefits').send(rest)

  expect(statusCode).toBe(400)
})

it('Should update a record', async () => {
  jest.spyOn(BenefitRepository, 'updateBenefitRepository')
    // @ts-expect-error
    .mockReturnValueOnce(benefitPayload)
  const { statusCode } = await supertest(app).put(`/nosql/benefits/${benefitId}`).send({ ...benefitInput, name: 'New name' })

  expect(statusCode).toBe(200)
})

it('Should delete a record', async () => {
  jest.spyOn(BenefitRepository, 'deleteBenefitRepository')
    // @ts-expect-error
    .mockReturnValueOnce(benefitPayload)
  const { statusCode } = await supertest(app).delete(`/nosql/benefits/${benefitId}`)

  expect(statusCode).toBe(200)
})
