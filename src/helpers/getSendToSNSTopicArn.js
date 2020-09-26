const getSendToSNSTopicArn = (sendTo) => {
  const sendToSNSTopicMapper = {
    TECH: process.env.SNS_TECH_EMAIL_TOPIC,
    OPS: process.env.SNS_OPS_EMAIL_TOPIC,
    SALES: process.env.SNS_SALES_EMAIL_TOPIC
  }
  return sendToSNSTopicMapper[sendTo]
}

module.exports = {
  getSendToSNSTopicArn
}
