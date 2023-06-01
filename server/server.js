const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 3000;
const cors = require('cors')
const loginRoute = require('./src/routes/loginRoute');
const SignInRoute = require('./src/routes/SigninRoute')


app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
);

app.get('/', (req ,res)=>{
    res.send('Hello I am Server ');
})

app.use('/login' , loginRoute);
app.use('/signin' , SignInRoute);

app.listen(port , ()=>{
    console.log("Coooool , Server is here for you ")
})
  




