// backend/onDisconnect.js
// Simulate a user disconnect
function onDisconnect(connectionId, connections){
    const index = connections.indexOf(connectionId);
    if(index > -1) connections.splice(index,1);
    console.log("Disconnected:", connectionId);
}

// Export for frontend simulation
if (typeof module !== 'undefined') module.exports = { onDisconnect };
