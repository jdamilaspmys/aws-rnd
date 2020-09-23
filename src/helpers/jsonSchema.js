const sendDynamicEmailSchema = {
  'id': 'post:/send/dynamic/email',
  'type': 'object',
  'properties': {
    subject: {
      type: 'string',
      description: 'Email subject',
      example: 'Request to create Refuel Assignment'
    },
    body: {
      type: 'string',
      description: 'Email subject',
      example: 'Request to create Refuel Assignment'
    },
    sendTo: {
      type: 'string',
      description: `Email send group
       TECH   - Tech Team
       OPS    - Ops Team 
       SALES  - Sales Team       
      `,
      enum: [ 'TECH', 'OPS', 'SALES' ]
    }
  },
  'required': [
    'subject',
    'body',
    'sendTo'
  ]
}

module.exports = {
  sendDynamicEmailSchema
}
