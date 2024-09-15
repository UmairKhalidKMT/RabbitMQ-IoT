const { subscribeToTopic} = require('./providers/sendMessage');
const { publishMessage } = require('./consumer/publicMessage');

// Send a message to the queue
publishMessage("taskQueue", { task: "Aoa" });

// Start consuming messages from the queue
subscribeToTopic("taskQueue");
