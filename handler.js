'use strict';

const log = console

module.exports.listEnv = async event => {

    // SNS
    // TOPIC 
    // SNS_EMAIL_FILTER_TOPIC: !Ref EmailFilterTopic
    // SNS_TECH_EMAIL_TOPIC: !Ref TechEmailTopic
    // SNS_OPS_EMAIL_TOPIC: !Ref OpsEmailTopic
    // SNS_SALES_EMAIL_TOPIC: !Ref SalesEmailTopic
    const SNS_EMAIL_FILTER_TOPIC = process.env.SNS_EMAIL_FILTER_TOPIC
    const SNS_TECH_EMAIL_TOPIC = process.env.SNS_TECH_EMAIL_TOPIC
    const SNS_OPS_EMAIL_TOPIC = process.env.SNS_OPS_EMAIL_TOPIC
    const SNS_SALES_EMAIL_TOPIC = process.env.SNS_SALES_EMAIL_TOPIC
    const topic = { 
        SNS_EMAIL_FILTER_TOPIC: SNS_EMAIL_FILTER_TOPIC, 
        SNS_TECH_EMAIL_TOPIC:   SNS_TECH_EMAIL_TOPIC,
        SNS_OPS_EMAIL_TOPIC:    SNS_OPS_EMAIL_TOPIC,
        SNS_SALES_EMAIL_TOPIC:  SNS_SALES_EMAIL_TOPIC
    }
    const sns = { topic }
    // SQS
    // TECH_EMAIL_QUEUE: !Ref TechEmailQueue  
    // OPS_EMAIL_QUEUE: !Ref OpsEmailQueue
    // SALES_EMAIL_QUEUE: !Ref SalesEmailQueue
    // DEAD_LETTER_TECH_EMAIL_QUEUE: !Ref DeadLetterTechEmailQueue  
    // DEAD_LETTER_OPS_EMAIL_QUEUE: !Ref DeadLetterOpsEmailQueue
    // DEAD_LETTER_SALES_EMAIL_QUEUE: !Ref DeadLetterSalesEmailQueue
    const TECH_EMAIL_QUEUE = process.env.TECH_EMAIL_QUEUE
    const OPS_EMAIL_QUEUE = process.env.OPS_EMAIL_QUEUE
    const SALES_EMAIL_QUEUE = process.env.SALES_EMAIL_QUEUE
    const DEAD_LETTER_TECH_EMAIL_QUEUE = process.env.DEAD_LETTER_TECH_EMAIL_QUEUE
    const DEAD_LETTER_OPS_EMAIL_QUEUE = process.env.DEAD_LETTER_OPS_EMAIL_QUEUE
    const DEAD_LETTER_SALES_EMAIL_QUEUE = process.env.DEAD_LETTER_SALES_EMAIL_QUEUE
    const sqs = { 
        TECH_EMAIL_QUEUE: TECH_EMAIL_QUEUE,
        OPS_EMAIL_QUEUE: OPS_EMAIL_QUEUE,
        SALES_EMAIL_QUEUE: SALES_EMAIL_QUEUE,
        DEAD_LETTER_TECH_EMAIL_QUEUE: DEAD_LETTER_TECH_EMAIL_QUEUE,
        DEAD_LETTER_OPS_EMAIL_QUEUE: DEAD_LETTER_OPS_EMAIL_QUEUE,
        DEAD_LETTER_SALES_EMAIL_QUEUE: DEAD_LETTER_SALES_EMAIL_QUEUE
    }

    // Env object 
    const env = { sns, sqs }    
    // data object 
    const data = { env }
    // response 
    const response = {
        statusCode: 200,
        body: JSON.stringify(data),
    };    
    return response;

};
