const sns = require('../../models/sns')

const sendToSNSTopicMapper = {
  TECH : process.env.SNS_TECH_EMAIL_TOPIC,
  OPS : process.env.SNS_OPS_EMAIL_TOPIC,
  SALES : process.env.SNS_SALES_EMAIL_TOPIC,
}

const processTechOpsSalesEmailSQS = async (data) => {
  try {     
    const { subject, body, sendTo } = data        
    const topicArn = sendToSNSTopicMapper[sendTo]
    await sns.publish(subject, body, topicArn)    
  } catch (error) {
    throw error
  }
}

module.exports = {
  processTechOpsSalesEmailSQS
}
