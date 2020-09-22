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
    filterType: {
      type: 'string',
      description: `Email filter type 
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
    'filterType'
  ]
}

module.exports = {
  sendDynamicEmailSchema
}
