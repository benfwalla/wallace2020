// https://zeit.co/guides/handling-node-request-body
// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ses-examples-sending-email.html

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

require('dotenv').config();

module.exports = async (req, res) => {
    const { body } = req;

    console.log('New message from %s on %s', body.name, Date().toString());

    // Set the region
    AWS.config.update({
        region: process.env.BW_AWS_REGION,
        accessKeyId: process.env.BW_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.BW_AWS_SECRET_ACCESS_KEY
    });

    // Create sendEmail params
    var params = {
        Destination: {
            ToAddresses: [
                process.env.EMAIL,
            ]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: "You've received a message from Wallace2020.org:" +
                        "<br><br>" +
                        "Name: " + body.name +
                        "<br>" +
                        "Email: " + body.email +
                        "<br>" +
                        "Subject: <b>" + body.subject + "</b>" +
                        "<br>" +
                        "Message: " + body.message
                },
            },
            Subject: {
                Charset: 'UTF-8',
                Data: 'New Message from Wallace 2020: ' + body.subject
            }
        },
        Source: process.env.EMAIL,
        ReplyToAddresses: [
            process.env.EMAIL,
        ],
    };

    // Create the promise and SES service object
    var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

    // Handle promise's fulfilled/rejected states
    sendPromise.then(
        function(data) {
            console.log("Successfully sent email to %s", process.env.EMAIL);
            console.log("MessageId: %s", data.MessageId);
            res.send("Thank you! Your message has been sent to the team.");
        }).catch(
        function(err) {
            console.log("Failed to send email to %s", process.env.EMAIL);
            console.log(err);
            console.log(err.stack);
            res.send("Oops! Something went wrong, and we couldn't send your message.");
        });
};

