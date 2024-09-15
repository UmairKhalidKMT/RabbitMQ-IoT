// subscribeToTopic.js
const { createConnection } = require('../config/mqttClient');

function subscribeToTopic(topic) {
    const client = createConnection();

    client.on('connect', () => {
        client.subscribe(topic, (err) => {
            if (!err) {
                console.log(`Subscribed to topic ${topic}`);
            } else {
                console.error(`Failed to subscribe to topic ${topic}:`, err);
            }
        });
    });

    client.on('message', (topic, message) => {
        console.log(`Received message from topic ${topic}:`, message.toString());
    });
}

module.exports = { subscribeToTopic };
