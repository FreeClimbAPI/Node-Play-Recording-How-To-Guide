require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const freeclimbSDK = require('@freeclimb/sdk')
const { PerclScript, Play } = require('@freeclimb/sdk')

const app = express()
app.use(bodyParser.json())
// Where your app is hosted ex. www.myapp.com
const port = process.env.PORT || 80
// your freeclimb API key (available in the Dashboard) - be sure to set up environment variables to store these values
const accountId = process.env.ACCOUNT_ID
const apiKey = process.env.API_KEY
const applicationId = process.env.APPLICATION_ID
const host = process.env.HOST
const to = 'YOUR_TO_NUMBER'
const from = 'YOUR_FROM_NUMBER'
const configuration = freeclimbSDK.createConfiguration({ accountId, apiKey })
const freeclimb = new freeclimbSDK.DefaultApi(configuration)

freeclimb.makeACall({ to, from, applicationId, callConnectUrl: `${host}/incomingCall` }).catch(err => { console.log(err) })

app.post('/incomingCall', (req, res) => {
  const recordingUrl = 'YOUR_RECORDING_URL'
  res.status(200).json(new PerclScript({
    commands: [
      new Play({ file: recordingUrl })
    ]
  }).build())
})

// Specify this route with 'Status Callback URL' in App Config
app.post('/status', (req, res) => {
  // handle status changes
  res.status(200)
})

app.listen(port, () => {
  console.log(`Started server on port ${port}`)
})
