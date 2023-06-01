const {Client ,Account,} = require('appwrite')



const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('64771ddf721df3a0d8a5')

const account = new Account(client);



module.exports = {client , account}