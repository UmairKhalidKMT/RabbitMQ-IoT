// mqttClient.js
const mqtt = require('mqtt');

function createConnection() {
    const client = mqtt.connect('https://localhost:1883', {
        username: 'shari123',  
        password: 'shari123'   
    });

    client.on('connect', () => {
        console.log("Connected to RabbitMQ over MQTT on localhost");
    });

    client.on('error', (error) => {
        console.log("Failed to connect to RabbitMQ:", error);
    });

    return client;
}

module.exports = { createConnection };
