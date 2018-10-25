const twilio = require('twilio');

const accountSid = 'AC06f9c3f52ee4483b3b9d041d21292453';
const authToken = '220fd3e5e411189913a5fa4affa7e723';

module.export = new twilio.Twilio(accountSid, authToken);
