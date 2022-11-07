import express from 'express'
import benefitRouter from './routes/benefitRouter'
import coinRouter from './routes/coinRouter'

const app = express()

app.use(express.json())
app.use('/benefits', benefitRouter)
app.use('/coins', coinRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.info(`server up on port ${PORT}`)
})
