const sns = require('../../models/sns')
const { getSendToSNSTopicArn } = require('../../helpers/getSendToSNSTopicArn')

const processTechOpsSalesEmailSQS = async (data) => {
  try {     
    const { subject, body, sendTo } = data        
    const topicArn = getSendToSNSTopicArn(sendTo)    
    await sns.publish(subject, body, topicArn)    
  } catch (error) {
    throw error
  }
}

module.exports = {
  processTechOpsSalesEmailSQS
}
