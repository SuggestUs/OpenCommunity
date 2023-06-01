import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();
  const [AuthEmail, setAuthEmail] = useState();
  const [AuthPass, setAuthPass] = useState();
 
  const handleLogIn = async () => {
    
    const optionalData = {
      Email : AuthEmail,
      Password : AuthPass
    }
    await axios.post('http://localhost:3000/login' , optionalData)
    .then((res)=>{
      console.log("Res",res)
      navigate("/home");
    })
    .catch((error)=>{
      console.log("error ",error)
    })
    
  };
  
  const handleChangInEmail = (event : any)=>{
       setAuthEmail(event.target.value)
  }

  const handleChangInPassword = (event : any)=>{
       setAuthPass(event.target.value)
  }
 
  return (
    <div className="flex flex-col my-auto">
      <div className="my-5 ">
        <FormControl fullWidth>

          <TextField
            className="my-5"
            label="Email"
            type="email"
            style={{
              margin: "10px 0px",
            }}
            name='Email'
            onChange={(e)=>handleChangInEmail(e)}
          />
          <TextField
            className="my-5"
            label="Password"
            type="password"
            style={{
              margin: "10px 0px",
            }}
            name="Password"
            onChange={(e)=>handleChangInPassword(e)}
          />
        </FormControl>
      </div>
      <div className="my-auto space-x-5">
        <Button
          variant="contained"
          color="success"
          onClick={() => handleLogIn()}
        >
          Log In with Github
        </Button>
        <Link to="/">
          <Button variant="outlined" color="success">
            Back
          </Button>
        </Link>
      </div>
    </div>
  );
}
