// backend/onConnect.js
// Simulate a new user connection
let connections = [];

function onConnect(connectionId){
    connections.push(connectionId);
    console.log("Connected:", connectionId);
}

// Export for frontend simulation (if needed)
if (typeof module !== 'undefined') module.exports = { onConnect, connections };
