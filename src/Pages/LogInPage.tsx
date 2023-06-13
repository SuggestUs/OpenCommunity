import { useState, ChangeEvent, useContext } from "react";
import {  TextField, FormControl } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomizedSnackbars from "../Alert/Alert.jsx";
import { FaGithub } from "react-icons/fa";
import { LogInRule, AlertRuel, ResultForAuth } from "../../utils/type";
import { LoginInValidation } from "../../validation/loginValidation.js";
import { loginWithAppwrite } from "../Appwrite/auth/login.app.js";
import { MainContext } from "../context/context.tsx";

export default function Login() {
  const navigate = useNavigate();

  const mainContext = useContext(MainContext);
  const [loginData, setLogInData] = useState<LogInRule>({
    Email: "",
    Password: "",
  });

  const [alert, setAlert] = useState<AlertRuel>({
    display: false,
    severityType: "error",
    message: "",
  });

  const [initialLoading, setInitialLoading] = useState(false);

  const handleLogIn2 = async () => {};

  const handleLogIn = async () => {
    setInitialLoading(true);

    const res: ResultForAuth = LoginInValidation(loginData);
    if (res.isValid) {
      try {
        await loginWithAppwrite(loginData).then((_res) => {
          // console.log("res" , res)
          mainContext?.getSession();
          setInitialLoading(false);
        });
        navigate("/home");
      } catch (error: any) {
        const errorMessage: string = error.toString();
        setAlert({
          display: true,
          severityType: "error",
          message: errorMessage,
        });
      }
    } else {
      setAlert({
        display: true,
        severityType: "error",
        message: res.message,
      });
    }
    // setInitialLoading(false)
  };

  const handleChangInValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLogInData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col my-auto">
      <div className="alert-box absolute top-0 z-10 left-1 w-1/3">
        {alert.display && (
          <CustomizedSnackbars
            status={alert.severityType}
            message={alert.message}
            setAlert={setAlert}
            setClose={setInitialLoading}
          />
        )}
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
            name="Email"
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
      <div className="my-auto space-y-5 flex  flex-col justify-center items-center">
        {/*  log in with github */}
        <div
          className="bg-primary border-2 border-primary text-black w-full p-2 rounded-lg font-semibold hover:bg-purple-600 cursor-pointer text-center "
          onClick={() => handleLogIn2()}
        >
          <span className="flex justify-center items-center gap-3">
            {initialLoading ? (
              "loading..."
            ) : (
              <>
                <FaGithub /> Log In with Github
              </>
            )}
          </span>
        </div>
        {/*  simple log in button */}
        <div className="my-auto w-full">
          <div
            onClick={handleLogIn}
            className="border-2 border-gray-300 bg-gray-200 text-black w-full p-2 rounded-lg font-semibold
            hover:bg-gray-100 cursor-pointer text-center "
          >
            {initialLoading ? "loading..." : <>Log In</>}
          </div>
        </div>
      </div>
    </div>
  );
}
