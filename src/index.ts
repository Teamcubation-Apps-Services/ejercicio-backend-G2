import express from 'express'
import benefitRouter from './routes/benefitRouter'
import coinRouter from './routes/coinRouter'
import movementRouter from './routes/movementRouter'
import clientRouter from './routes/clientRouter'
import clientBalanceRouter from './routes/clientBalanceRouter'

const app = express()

app.use(express.json())
app.use('/benefits', benefitRouter)
app.use('/coins', coinRouter)
app.use('/movements', movementRouter)
app.use('/clients', clientRouter)
app.use('/balances', clientBalanceRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.info(`server up on port ${PORT}`)
})
