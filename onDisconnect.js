// lambda/sendMessage.js
const AWS = require("aws-sdk");

const db = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const message = JSON.parse(event.body).message;

    const allConnections = await db.scan({
        TableName: "ChatConnections"
    }).promise();

    const apigw = new AWS.ApiGatewayManagementApi({
        endpoint: event.requestContext.domainName + "/" + event.requestContext.stage
    });

    const sendToAll = allConnections.Items.map(async ({ connectionId }) => {
        try {
            await apigw.postToConnection({
                ConnectionId: connectionId,
                Data: message
            }).promise();
        } catch (err) {
            console.log("Failed:", connectionId);
        }
    });

    await Promise.all(sendToAll);

    return { statusCode: 200, body: "Message sent" };
};
