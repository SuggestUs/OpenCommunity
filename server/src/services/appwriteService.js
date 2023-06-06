const {Client ,Account } = require('appwrite')
// const {Client ,Account } = require('node-appwrite')
// const sdk = require('node-appwrite');

const client = new Client();

client
.setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('64771ddf721df3a0d8a5')
    // .setKey('a7e4e39b13e3cc9c109046d663f59edd12d7f16f6a62e2329f9d75a0f09f72458ad7ab1f5f5785e2c4b2735394cbf74eab2b94f42a0e8d8ea7238c9fcf41a78fcf053375d43a036567986a59e986642002340fa6c65c34b1236ee47c82c2866cd17d450d368fdc3cdaf80e0f308e2a9fa561cdef30926e33900e6dc0ba0bf4e3')
    
    
    const account = new Account(client); 

    module.exports = {client , account }