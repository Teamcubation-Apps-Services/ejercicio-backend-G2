import express from 'express'
import benefitRouter from './routes/sql/benefitRouter'
import coinRouter from './routes/sql/coinRouter'
import movementRouter from './routes/sql/movementRouter'
import clientRouter from './routes/sql/clientRouter'
import clientBalanceRouter from './routes/sql/clientBalanceRouter'
import movementDataRouter from './routes/sql/movementDataRouter'
import swaggerUI from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import { options } from './swaggerOptions'

const app = express()

app.use(express.json())
app.use('/sql/benefits', benefitRouter)
app.use('/sql/coins', coinRouter)
app.use('/sql/movements', movementRouter)
app.use('/sql/clients', clientRouter)
app.use('/sql/balances', clientBalanceRouter)
app.use('/sql/movementdata', movementDataRouter)

const specs = swaggerJSDoc(options)
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.info(`server up on port ${PORT}`)
})
