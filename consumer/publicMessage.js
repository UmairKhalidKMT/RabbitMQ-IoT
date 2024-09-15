// publishMessage.js
const { createConnection } = require('../config/mqttClient');

function publishMessage(topic, message) {
    const client = createConnection();

    client.on('connect', () => {
        client.publish(topic, JSON.stringify(message), () => {
            console.log(`Message sent to topic ${topic}:`, message);
            client.end();
        });
    });
}

module.exports = { publishMessage };
