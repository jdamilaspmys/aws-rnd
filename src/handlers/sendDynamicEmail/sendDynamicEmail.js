const SchemaValidator = require('../../helpers/schemaValidator')
const { sendDynamicEmailSchema } = require('../../helpers/jsonSchema')
const sns = require('../../models/sns')

const sendDynamicEmail = async (event) => {
  try {
    const reqBody = JSON.parse(event.body)
    const validator = new SchemaValidator()
    await validator.validate(reqBody, sendDynamicEmailSchema)
    const { subject, body, filterType } = reqBody    
    const attributes = { 'Q_TYPE': { DataType: 'String', StringValue: filterType } }      
    await sns.publishWithAttributes(subject, body, process.env.SNS_EMAIL_FILTER_TOPIC, attributes)
    return { message: 'ok' }
  } catch (error) {
    throw error
  }
}

module.exports = {
  sendDynamicEmail
}
