import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();
  const [Role, setRole] = useState("User");
  const handleChange = (event: any) => {
    setRole(event.target.value);
  };

  const handleLogIn = async () => {
    // const res = loginWithGithub();
    // console.log(res);
    navigate("/home");
  };
  return (
    <div className="flex flex-col my-auto">
      <div className="my-5 ">
        <FormControl fullWidth>
          {/* <InputLabel id="demo-simple-select-helper-label">Type</InputLabel> */}
          {/* <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Role}
            label="Role"
            onChange={handleChange}
          >
            <MenuItem value={"User"}>User</MenuItem>
            <MenuItem value={"Doctor"}>Doctor</MenuItem>
          </Select> */}

          <TextField
            className="my-5"
            label="Email"
            type="email"
            style={{
              margin: "10px 0px",
            }}
          />
          <TextField
            className="my-5"
            label="Password"
            type="password"
            style={{
              margin: "10px 0px",
            }}
          />
        </FormControl>
      </div>
      <div className="my-auto space-x-5 flex justify-center items-center">
        <div
          className="bg-primary text-black w-1/2 p-2 rounded-lg font-semibold hover:bg-purple-600 cursor-pointer text-center "
          onClick={() => handleLogIn()}
        >
          <span className="flex justify-center items-center gap-3">
            <FaGithub /> Log In with Github
          </span>
        </div>
      </div>
    </div>
  );
}
