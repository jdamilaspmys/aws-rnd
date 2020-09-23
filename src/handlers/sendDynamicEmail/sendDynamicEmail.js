const SchemaValidator = require('../../helpers/schemaValidator')
const { sendDynamicEmailSchema } = require('../../helpers/jsonSchema')
const sns = require('../../models/sns')

const sendDynamicEmail = async (event) => {
  try {
    const reqBody = JSON.parse(event.body)
    const validator = new SchemaValidator()
    await validator.validate(reqBody, sendDynamicEmailSchema)
    const { subject, sendTo } = reqBody    
    const attributes = { 'SEND_TO': { DataType: 'String', StringValue: sendTo } }      
    await sns.publishWithAttributes(subject, reqBody, process.env.SNS_EMAIL_FILTER_TOPIC, attributes)
    return { message: 'ok' }
  } catch (error) {
    throw error
  }
}

module.exports = {
  sendDynamicEmail
}
