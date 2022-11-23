import express from 'express'
import benefitRouter from './routes/benefitRouter'
import coinRouter from './routes/coinRouter'
import movementRouter from './routes/movementRouter'
import clientRouter from './routes/clientRouter'
import clientBalanceRouter from './routes/clientBalanceRouter'
import movementDataRouter from './routes/movementDataRouter'
import swaggerUI from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import { options } from './swaggerOptions'

const app = express()

app.use(express.json())
app.use('/benefits', benefitRouter)
app.use('/coins', coinRouter)
app.use('/movements', movementRouter)
app.use('/clients', clientRouter)
app.use('/balances', clientBalanceRouter)
app.use('/movementdata', movementDataRouter)

const specs = swaggerJSDoc(options)
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

export default app;