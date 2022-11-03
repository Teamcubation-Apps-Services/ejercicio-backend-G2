import express, { Request, Response } from 'express'
import benefitRouter from './routes/benefitRouter'

const app = express()

app.use('/benefits', benefitRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.info(`server up on port ${PORT}`)
})