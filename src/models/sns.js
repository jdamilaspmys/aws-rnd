const sns = require('../helpers/sns')

const publishWithAttributes = async (subject, body, topicArn, attributes) => {
  try {
    const params = {
      Subject: subject,
      TopicArn: topicArn,
      MessageAttributes: attributes,
      Message: JSON.stringify(body)
    }    
    await sns.publish(params)
  } catch (error) {
    throw error
  }
}

const publish = async (subject, message, topicArn) => {
  try {
    const params = {
      Subject: subject,
      TopicArn: topicArn,      
      Message: message
      // Message: JSON.stringify(message),
      // MessageStructure: 'json' // Add Messsage Structure 
    }    
    await sns.publish(params)
  } catch (error) {
    throw error
  }
}

module.exports = {
  publishWithAttributes,
  publish
}
