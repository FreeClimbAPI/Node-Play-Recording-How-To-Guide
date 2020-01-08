# Node - Play Recording Tutorial

This project serves as a guide to help you build an application with FreeClimb. View this tutorial on [FreeClimb.com](https://docs.freeclimb.com/docs/play-a-recording#section-javascript). Specifically, the project will:

- Play a recording to a caller during a call.   

## Setting up your new app within your FreeClimb account

To get started using a FreeClimb account, follow the instructions [here](https://docs.freeclimb.com/docs/getting-started-with-freeclimb).

## Setting up the Tutorial

1. Install the node packages necessary using command:

   ```bash
   $ yarn install
   ```

2. Configure environment variables (this tutorial uses the [dotenv package](https://www.npmjs.com/package/dotenv)).

   | ENV VARIABLE            | DESCRIPTION                                                                                                                                                                             |
   | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | ACCOUNT_ID              | Account ID which can be found under [API Keys](https://www.freeclimb.com/dashboard/portal/account/authentication) in Dashboard                                                         |
   | AUTH_TOKEN              | Authentication Token which can be found under [API Keys](https://www.freeclimb.com/dashboard/portal/account/authentication) in Dashboard                                               |
   | APPLICATION_ID | Appliction IDs can be found under [Apps](https://www.freeclimb.com/dashboard/portal/applications)

3. Provide a value for the variables `to`, `from`, and `recordingUrl` in playARecording.js. The `to` number is any phone number you wish to call. This number must be [verified](https://docs.freeclimb.com/docs/using-your-trial-account#section-verifying-outbound-numbers) (for trial users) and in E.164 format. `from` is a FreeClimb number that makes the call ([Incoming Numbers](https://www.freeclimb.com/dashboard/portal/numbers)). `recordingUrl` is a url where FreeClimb can download a recording to play. The recording must be [formatted correclty](https://docs.freeclimb.com/reference/interactive-voice-response-ivr#play) to work with FreeClimb. Recordings made by FreeClimb during other calls can be played by using the url provided in the [recordings page](https://www.freeclimb.com/dashboard/portal/recordings).

## Runnning the Tutorial

1. Run the application using command:

   ```bash
   $ node playARecording.js
   ```

