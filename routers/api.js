import express from 'express'
import apiController from '../controllers/apiController.js'

const apiRouter = express.Router()

apiRouter.get('/send', apiController.send)

export default apiRouter
