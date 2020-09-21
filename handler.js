'use strict';

const log = console

module.exports.listEnv = async event => {

    // SNS_EMAIL_FILTER_TOPIC: !Ref EmailFilterTopic
    // SNS_TECH_EMAIL_TOPIC: !Ref TechEmailTopic
    // SNS_OPS_EMAIL_TOPIC: !Ref OpsEmailTopic
    // SNS_SALES_EMAIL_TOPIC: !Ref SalesEmailTopic
    const SNS_EMAIL_FILTER_TOPIC = process.env.SNS_EMAIL_FILTER_TOPIC
    const SNS_TECH_EMAIL_TOPIC = process.env.SNS_TECH_EMAIL_TOPIC
    const SNS_OPS_EMAIL_TOPIC = process.env.SNS_OPS_EMAIL_TOPIC
    const SNS_SALES_EMAIL_TOPIC = process.env.SNS_SALES_EMAIL_TOPIC
    const env = { 
        SNS_EMAIL_FILTER_TOPIC: SNS_EMAIL_FILTER_TOPIC, 
        SNS_TECH_EMAIL_TOPIC:   SNS_TECH_EMAIL_TOPIC,
        SNS_OPS_EMAIL_TOPIC:    SNS_OPS_EMAIL_TOPIC,
        SNS_SALES_EMAIL_TOPIC:  SNS_SALES_EMAIL_TOPIC
    }
    const data = { env }
    const response = {
        statusCode: 200,
        body: JSON.stringify(data),
    };
    log.log(env)
    return response;

};
