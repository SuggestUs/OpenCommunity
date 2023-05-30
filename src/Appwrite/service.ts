import { Client, Account } from 'appwrite'
// import { Client as Appwrite, Databases, Account } from 'appwrite'

const client = new Client()
client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject('6475e3ee034aec0ee319')

const account = new Account(client)

// Go to OAuth provider login page
const loginWithGithub = async () => {
  const res = await account.createOAuth2Session(
    'github',
    'http://localhost:5174/home',
    'http://localhost:5174/login'
  )
  console.log(res)
}

export default loginWithGithub
