// https://zeit.co/guides/handling-node-request-body
// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ses-examples-sending-email.html

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

require('dotenv').config();

module.exports = async (req, res) => {
    const { body } = req;

    // Set the region
    AWS.config.update({
        region: process.env.AWS_REGION,
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    });

    // Create sendEmail params
    var params = {
        Destination: { /* required */
            ToAddresses: [
                'benfwalla@gmail.com',
                /* more items */
            ]
        },
        Message: { /* required */
            Body: { /* required */
                Html: {
                    Charset: "UTF-8",
                    Data: "You've received a message from Wallace2020.org:" +
                        "<br><br>" +
                        "Name: " + body.name +
                        "<br>" +
                        "Email: " + body.email +
                        "<br>" +
                        "Phone: " + body.phone +
                        "<br>" +
                        "Message: " + body.message
                },
            },
            Subject: {
                Charset: 'UTF-8',
                Data: 'Test .js email'
            }
        },
        Source: 'benfwalla@gmail.com', /* required */
        ReplyToAddresses: [
            'benfwalla@gmail.com',
            /* more items */
        ],
    };

    // Create the promise and SES service object
    var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

    // Handle promise's fulfilled/rejected states
    sendPromise.then(
        function(data) {
            res.end(data.MessageId);
        }).catch(
        function(err) {
            res.end(err, err.stack);
        });
};

