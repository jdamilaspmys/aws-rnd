const { mapToJsonResponse } = require('../../helpers/general')
const { sendDynamicEmail } = require('./sendDynamicEmail')

const processEventData = async (event, context, callback) => {
  try {
    const data = await sendDynamicEmail(event)
    callback(null, mapToJsonResponse(200, data))
  } catch (error) {
    callback(null, mapToJsonResponse(400, error))
  }
}

module.exports = {
  processEventData
}
