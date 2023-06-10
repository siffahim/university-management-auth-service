import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { logger, errorLogger } from './shared/logger'

//connect database
async function run() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('🛢 Database is connected successfully')

    //listening app
    app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error('😸 Failed to connect database', err)
  }
}

run()
