
import apiRouter from './routers/api.js'

import errorHandle from './middlewares/error-handle.js'

export default function initRoutes(app) {
  // OAUTH
  app.use('/api', apiRouter)

  // handle ValidationError
  app.use(errorHandle)
}
