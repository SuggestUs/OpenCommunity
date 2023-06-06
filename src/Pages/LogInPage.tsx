import { useState, ChangeEvent } from "react";
import { Button, TextField, FormControl } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import CustomizedSnackbars from '../Alert/Alert.jsx';
import { FaGithub } from "react-icons/fa";
import { LogInRule, AlertRuel, ResultForAuth } from '../../utils/type';
import { LoginInValidation } from '../../validation/loginValidation.js';
import { loginWithAppwrite } from '../Appwrite/auth/login.app.js'

export default function Login() {
  const navigate = useNavigate();
  const [loginData, setLogInData] = useState<LogInRule>({
    Email: '',
    Password: ''
  });

  const [alert, setAlert] = useState<AlertRuel>({
    display: false,
    severityType: "error",
    message: "",
  });

  const handleLogIn2 = async () => {
  };

  const handleLogIn = async () => {

    const res: ResultForAuth = LoginInValidation(loginData);
    if (res.isValid) {
      try {
        await loginWithAppwrite(loginData)
        .then((res)=>{
          console.log("res" , res)
          navigate("/home");
        })
      } catch (error : any) {
        const errorMessage : string = error.toString();
        setAlert({
          display: true,
          severityType: "error",
          message: errorMessage
        })
      }
    } else {
      setAlert(
        {
          display: true,
          severityType: 'error',
          message: res.message
        })
    }
  }

  const handleChangInValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLogInData({
      ...loginData,
      [name]: value
    })
  }

  return (
    <div className="flex flex-col my-auto">

      <div className='alert-box absolute top-0 z-10 left-1 w-1/3'>
        {alert.display && (<CustomizedSnackbars status={alert.severityType} message={alert.message} setAlert={setAlert} />)}
      </div>
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
            onChange={handleChangInValue}
            value={loginData.Email}
          />
          <TextField
            className="my-5"
            label="Password"
            type="password"
            style={{
              margin: "10px 0px",
            }}
            name="Password"
            onChange={handleChangInValue}
            value={loginData.Password}
          />
        </FormControl>
      </div>
      <div className="my-auto space-x-5 flex justify-center items-center">
        <div
          className="bg-primary text-black w-1/2 p-2 rounded-lg font-semibold hover:bg-purple-600 cursor-pointer text-center "
          onClick={() => handleLogIn2()}
        >
          <span className="flex justify-center items-center gap-3">
            <FaGithub /> Log In with Github
          </span>
        </div>
        <div className='my-auto'>
          <Button variant='contained' color='success' onClick={handleLogIn}>Log In</Button>
        </div>
      </div>
    </div>
  );
}
