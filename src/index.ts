import express from 'express'
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


const app = express()

app.use(express.json())
// sql
app.use('/sql/benefits', sqlBenefitRouter)
app.use('/sql/coins', sqlCoinRouter)
app.use('/sql/movements', sqlMovementRouter)
app.use('/sql/clients', sqlClientRouter)
app.use('/sql/balances', sqlClientBalanceRouter)
app.use('/sql/movementdata', sqlMovementDataRouter)

//nosql
app.use('/nosql/benefits', nosqlBenefitRouter)
app.use('/nosql/coins', nosqlCoinRouter)
app.use('/nosql/clients', nosqlClientRouter)
app.use('/nosql/movementdata', nosqlMovementDataRouter)

const specs = swaggerJSDoc(options)
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.info(`server up on port ${PORT}`)
})
