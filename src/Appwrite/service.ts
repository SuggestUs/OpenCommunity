import { Client, Account , ID , Databases ,Permission ,Role} from 'appwrite'
// import { Client as Appwrite, Databases, Account } from 'appwrite'

const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject('64771ddf721df3a0d8a5')

const account = new Account(client);
const database  = new Databases(client);


export  {account,client,ID ,database ,Permission ,Role};
















// Go to OAuth provider login page
// const loginWithGithub = async () => {
//   const res = await account.createOAuth2Session(
//     'github',
//     'http://localhost:5174/home',
//     'http://localhost:5174/login'
//   )
//   console.log(res);
// }