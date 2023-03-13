import express from 'express'
import cors from 'cors'
import swaggerUI from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import { options } from './swaggerOptions'

// sql routes
import sqlBenefitRouter from './routes/sql/benefitRouter'
import sqlCoinRouter from './routes/sql/coinRouter'
import sqlMovementRouter from './routes/sql/movementRouter'
import sqlClientRouter from './routes/sql/clientRouter'
import sqlClientBalanceRouter from './routes/sql/clientBalanceRouter'
import sqlMovementDataRouter from './routes/sql/movementDataRouter'

// no-sql routes
import nosqlBenefitRouter from './routes/nosql/benefitRouter'
import nosqlCoinRouter from './routes/nosql/coinRouter'
import nosqlClientRouter from './routes/nosql/clientRouter'
import nosqlMovementDataRouter from './routes/nosql/movementDataRouter'
import { protect } from './controllers/authController'

function createServer () {
  const app = express()

  app.use(express.json())
  app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL }))
  app.use(protect)
  // sql
  app.use('/sql/benefits', sqlBenefitRouter)
  app.use('/sql/coins', sqlCoinRouter)
  app.use('/sql/movements', sqlMovementRouter)
  app.use('/sql/clients', sqlClientRouter)
  app.use('/sql/balances', sqlClientBalanceRouter)
  app.use('/sql/movement-data', sqlMovementDataRouter)

  // nosql
  app.use('/nosql/benefits', nosqlBenefitRouter)
  app.use('/nosql/coins', nosqlCoinRouter)
  app.use('/nosql/clients', nosqlClientRouter)
  app.use('/nosql/movement-data', nosqlMovementDataRouter)

  const specs = swaggerJSDoc(options)
  app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

  return app
}

export default createServer
