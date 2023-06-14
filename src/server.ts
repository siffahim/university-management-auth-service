import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/logger'

process.on('uncaughtException', error => {
  errorLogger.error(error)
  process.exit(1)
})

//connect database

let server: Server
async function run() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('🛢 Database is connected successfully')

    //listening app
    server = app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error('😸 Failed to connect database', err)
  }

  //unhandled rejection
  process.on('unhandledRejection', error => {
    // console.log(
    //   'Unhandled Rejection is detected ,we are closing our server....'
    // )
    if (server) {
      server.close(() => {
        errorLogger.error(error)
      })
    } else {
      process.exit(1)
    }
  })
}

run()

process.on('SIGTERM', () => {
  logger.info('SIGTERM IS received')
  if (server) {
    server.close()
  }
})

//console.log(X)
