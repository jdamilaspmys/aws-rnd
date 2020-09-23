const sns = require('../../models/sns')
const sendToSNSTopicMapper = require('../../helpers/sendToSNSTopicMapper')

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
