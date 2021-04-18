const mqtt = require('mqtt')
const mqttClient = mqtt.connect('mqtt://test.mosquitto.org')

const queryTopic = 'resolveMyQuery'
const responseTopic = 'responseFromServer'

mqttClient.on('connect', function () {
  console.log('Server connected to Mqtt broker')
  setInterval(() => {
    mqttClient.subscribe(responseTopic)
    // Publish message
    mqttClient.publish(
      queryTopic,
      `Hello client, my random number${Math.random() * 50} `
    )

    console.log('Responded to client')
  }, 5000)
})

// On receiving message from any client
mqttClient.on('message', function (topic, message) {
  console.log('Received query from client: -', message.toString())
  // Responding to client
})
