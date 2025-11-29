// backend/sendMessage.js
// Simulate sending a message to all connections
function sendMessage(senderId, message, connections, callback){
    connections.forEach(conn => {
        const displayMsg = (conn === senderId ? "Me: " : "User: ") + message;
        callback(displayMsg);
    });
}

// Export for frontend simulation
if (typeof module !== 'undefined') module.exports = { sendMessage };
