const { processTechOpsSalesEmailSQS } = require('./processTechOpsSalesEmailSQS')

const processSQSData = async (event, context, callback) => {
  try {
    for (const record of event.Records) {
      const data = JSON.parse(record.body)      
      await processTechOpsSalesEmailSQS(data)
    }    
    callback(null, 'Successfully Processed Tech Team Email')
  } catch (error) {
    callback(error)
  }
}

module.exports = {
  processSQSData
}
