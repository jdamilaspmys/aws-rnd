const AWS = require('aws-sdk')

const publish = (params) => {
  const SNS = new AWS.SNS({ region: process.env.CLOUD_REGION })
  SNS.maxRetries = process.env.SNS_MAX_RETRIES
  return new Promise((resolve, reject) => {
    SNS.publish(params, err => {
      if (err) {
        reject(err)
      } else {
        resolve(params)
      }
    })
  })
}

module.exports = {
  publish
}
