'use strict';

module.exports.processDynamicEmailQueue = async event => {
 
 console.log('---------------- STEP_01 ---------------------')
 console.log(event)
 console.log(process.env.SNS_DYNAMIC_EMAIL_TOPIC_ARN)

};
