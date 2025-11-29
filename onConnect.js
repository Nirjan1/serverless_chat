// lambda/onConnect.js
const AWS = require("aws-sdk");
const db = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const connectionId = event.requestContext.connectionId;

    await db.put({
        TableName: "ChatConnections",
        Item: { connectionId }
    }).promise();

    return { statusCode: 200, body: "Connected" };
};

