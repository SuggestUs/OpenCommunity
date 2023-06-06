import { ChangeEvent } from 'react';
import { useEffect, useState } from 'react'
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import CustomizedSnackbars from '../Alert/Alert.jsx';
import { Link, useNavigate } from "react-router-dom";
import { SignInRule, AlertRuel, ResultForAuth } from '../../utils/type.ts'
import { signInValidation } from '../../validation/signInValidation.ts';
import { signInWithAppwrite } from '../Appwrite/auth/signIn.app.ts'
export default function SignInForUser() {

  const navigate = useNavigate();

  const [alert, setAlert] = useState<AlertRuel>({
    display: false,
    severityType: "error",
    message: "",
  });

  const [signinData, setSignInData] = useState<SignInRule>({
    First_Name: '',
    Last_Name: '',
    Email: '',
    Password: '',
    Confirm_Password: '',
  })

  const handleChangInValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignInData({
      ...signinData,
      [name]: value
    })

  }

  const handleSignIn = async () => {

    const res: ResultForAuth = signInValidation(signinData);
    console.log("Result", res);
    if (res.isValid) {
      try {
        await signInWithAppwrite(signinData)
          .then((res) => {
            navigate("/home")
          })
      } catch (error : any) {
        const errorMessage : string = error.toString();
        setAlert(
          {
            display: true,
            severityType: 'error',
            message: errorMessage
          })
      }

    } else {
      console.log('Insdide Else', res.message)
      setAlert(
        {
          display: true,
          severityType: 'error',
          message: res.message
        })
    }
  }

  useEffect(() => {
    // setUserSignInData(objForUserSignInData)  
  }, [])

  return (
    <div className='User-from flex flex-col'>
      <div className='alert-box absolute top-0 z-10 left-1 w-1/3'>
        {alert.display && (<CustomizedSnackbars status={alert.severityType} message={alert.message} setAlert={setAlert} />)}
      </div>
      <div className="text-center">
        <FormControl fullWidth className="my-5">
          <TextField
            className="my-5"
            label="First Name"
            type='First Name'
            name='First_Name'
            onChange={handleChangInValue}
            style={{
              margin: "10px 0px",
            }}
            // value={}
            value={signinData.First_Name}
          />
          <TextField
            className="my-5"
            label="Last Name"
            type='Last Name'
            name='Last_Name'
            onChange={handleChangInValue}
            style={{
              margin: "10px 0px",
            }}
          // value={objForUserSignInData.Last_Name}
          />
          <TextField
            className="my-5"
            label="Email"
            type='email'
            name='Email'
            onChange={handleChangInValue}
            style={{
              margin: "10px 0px",
            }}
            value={signinData.Email}
          />
          <TextField
            className="my-5"
            label="Password"
            type='password'
            name='Password'
            onChange={handleChangInValue}
            style={{
              margin: "10px 0px",
            }}
            value={signinData.Password}
          />
          <TextField
            className="my-5"
            label="Confirm Password"
            name="Confirm_Password"
            type="password"
            style={{
              margin: "10px 0px",
            }}
            onChange={handleChangInValue}
            value={signinData.Confirm_Password}
          />
        </FormControl>
      </div>
      <div className='my-auto space-x-5'>

        <Link to='/'>
          <Button variant='outlined' color='success'>Back</Button>
        </Link>
        <div className='my-auto'>
          <Button variant='contained' color='success' onClick={handleSignIn}>Sign In</Button>
        </div>
      </div>
    </div>
  )
}
