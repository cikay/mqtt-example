const mqtt = require('mqtt')
const mqttClient = mqtt.connect('mqtt://test.mosquitto.org')

const queryTopic = 'resolveMyQuery'
const responseTopic = 'responseFromServer'

mqttClient.on('connect', function () {
  console.log('Client connected to Mqtt broker')
  mqttClient.subscribe(queryTopic)
})
mqttClient.on('message', function (topic, message) {
  // message is Buffer
  console.log('Received response from server:-', message.toString())
})
