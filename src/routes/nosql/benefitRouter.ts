import { Router } from 'express'
import { createBenefitController, deleteBenefitController, getAllBenefitsController, updateBenefitController } from '../../controllers/nosql/benefitController'

const benefits = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    MongoBenefitBody:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        discountPercentage:
 *          type: number
 *        refoundCap:
 *          type: number
 *        valideSince:
 *          type: string
 *          format: date-time
 *        valideTo:
 *          type: string
 *          format: date-time
 *    MongoBenefitResponse:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *        name:
 *          type: string
 *        discountPercentage:
 *          type: string
 *        refoundCap:
 *          type: string
 *        valideSince:
 *          type: string
 *          format: date-time
 *        valideTo:
 *          type: string
 *          format: date-time
 *        isActive:
 *          type: boolean
 */
/**
  * @swagger
  * tags:
  *   name: benefits
 */
/**
 * @swagger
 * /nosql/benefits:
 *  get:
 *    summary: List all benefits
 *    tags: [benefits]
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/MongoBenefitResponse'
 *  post:
 *    summary: Create a new benefit
 *    tags: [benefits]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/MongoBenefitBody'
 *    responses:
 *      201:
 *        description: Created benefit
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MongoBenefitResponse'
 */
/**
 * @swagger
 * /nosql/benefits/{id}:
 *  put:
 *    summary: Update a benefit
 *    tags: [benefits]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Id of the benefit to update
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/MongoBenefitBody'
 *    responses:
 *      200:
 *        description: Updated benefit
 *        content:
 *          application/json:
 *            schema:
 *                $ref: '#/components/schemas/MongoBenefitResponse'
 *  delete:
 *    summary: Delete a benefit
 *    tags: [benefits]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Id of the benefit to delete
 *    responses:
 *      200:
 *        description: Deleted benefit
 *        content:
 *          application/json:
 *            schema:
 *                $ref: '#/components/schemas/MongoBenefitResponse'
 *            example:
 *                id: "4"
 *                name: beneficio super
 *                discountPercentage: "30"
 *                refoundCap: "100"
 *                valideSince: 2022-11-03T00:00:00.000Z
 *                valideTo: 2023-11-03T00:00:00.000Z
 *                isActive: false
 */

benefits.get('/', getAllBenefitsController)
benefits.post('/', createBenefitController)
benefits.put('/:id', updateBenefitController)
benefits.delete('/:id', deleteBenefitController)

export default benefits
