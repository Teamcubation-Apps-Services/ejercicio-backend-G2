import express from 'express'
import benefitRouter from './routes/benefitRouter'
import coinRouter from './routes/coinRouter'
import movementRouter from './routes/movementRouter'
import clientRouter from './routes/clientRouter'

const app = express()

app.use(express.json())
app.use('/benefits', benefitRouter)
app.use('/coins', coinRouter)
app.use('/movements', movementRouter)
app.use('/clients', clientRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.info(`server up on port ${PORT}`)
})
