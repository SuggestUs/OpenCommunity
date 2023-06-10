import { useState, ChangeEvent, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, FormControl, Avatar } from "@mui/material";
import CustomizedSnackbars from "../../Alert/Alert";
import { account } from "../../Appwrite/service";
import { createCommunity } from "../../Appwrite/datbase/database.js";
import { MainContext } from "../../context/context.js";
import { communityLoginInValidation } from "../../../validation/communityValidation.js";

type typeForCommunity = {
  Email: string;
  name: string;
};

export interface AlertRuel {
  display: boolean;
  severityType: "error" | "warning" | "info" | "success";
  message: string;
}

type closeDrower = {
  setclose: React.Dispatch<React.SetStateAction<any>>;
  defaultEmail: string;
};

export default function LogInForCommunity({
  setclose,
  defaultEmail,
}: closeDrower) {
  const navigate = useNavigate();

  const mainContext = useContext(MainContext);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [dataForComm, setdataForComm] = useState<typeForCommunity>({
    Email: "",
    name: "",
  });

  const defaultProfile =
    "https://t3.ftcdn.net/jpg/00/64/67/52/360_F_64675209_7ve2XQANuzuHjMZXP3aIYIpsDKEbF5dD.jpg";

  const [srcForAvtar, setSrcForAvtar] = useState<string>("");

  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);

  const [alertForError, setAlert] = useState<AlertRuel>({
    display: false,
    severityType: "error",
    message: "",
  });

  const handleCreationForCommunity = async () => {
    //  function for creation documents
    const validate = communityLoginInValidation(dataForComm);

    if (validate.isValid) {
      const objForCommunity = {
        "community-name": dataForComm.name,
        "community-email": dataForComm.Email,
        creatorId: mainContext?.userData.userId,
        "creator-email": mainContext?.userData.email,
        profileId: "",
      };
      try {
        await createCommunity(objForCommunity, selectedFile).then(
          (responce) => {
            // setclose(false);
            navigate("/community");
            setAlert({
              display: true,
              severityType: "success",
              message: "Your Communiy is created Successfully",
            });
          }
        );
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
        message: validate.message,
      });
    }
  };

  const handleChangInValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setdataForComm({
      ...dataForComm,
      [name]: value,
    });
  };

  const handleClose = () => {
    setclose(false);
    navigate(-1);
  };

  const changeProfileImageForCommunity = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log("file", file);
    if (file) {
      setSelectedFile(file);
      setSrcForAvtar(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    const promise = account.get();
    promise
      .then((res) => {
        setdataForComm({
          ...dataForComm,
          Email: res.email,
        });
        // setSrcForAvtar(defaultProfile)
      })
      .catch((error) => {
        console.log("Error ", error.message);
        navigate("/authentication");
      });

    console.log("Email", defaultEmail);
  }, []);
  return (
    <div className="flex flex-col my-auto">
      <div className="alert-box absolute top-0 z-10 left-1 w-1/3">
        {alertForError.display && (
          <CustomizedSnackbars
            status={alertForError.severityType}
            message={alertForError.message}
            setAlert={setAlert}
          />
        )}
      </div>
      <div className=" h-auto flex justify-center">
        <Avatar
          src={srcForAvtar}
          sx={{ width: 150, height: 150 }}
          onClick={changeProfileImageForCommunity}
          defaultValue={defaultProfile}
        >
          <input
            ref={fileInputRef}
            id="avatarInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileInputChange}
          />
        </Avatar>
      </div>
      <div className="my-5 flex flex-col">
        <FormControl fullWidth>
          <TextField
            className="my-5"
            label="Community Name"
            type="text"
            style={{
              margin: "10px 0px",
            }}
            name="name"
            onChange={handleChangInValue}
            value={dataForComm.name}
          />
          <TextField
            className="my-5"
            label="Email"
            type="email"
            helperText="Email use for your community, You can change it to any other email"
            color="warning"
            style={{
              margin: "10px 0px",
            }}
            name="Email"
            onChange={handleChangInValue}
            value={dataForComm.Email}
          />
        </FormControl>
      </div>
      <div className="my-auto space-x-5 flex justify-between items-center">
        <div className="my-auto">
          <Button variant="contained" color="error" onClick={handleClose}>
            Close
          </Button>
        </div>
        <div className="my-auto">
          <Button
            variant="contained"
            color="success"
            onClick={handleCreationForCommunity}
          >
            Create Community
          </Button>
        </div>
      </div>
    </div>
  );
}

/*


Event 

name 
image id 
com -email 
creator email 
creator username 
event : {
    Name :
    poster : 
    about :
    cretaed by :
    venue :
    speakers :
    topics: 
}

//    Communities
    
     1. Email
     name 
     Profile :
     original email 
     maintaner
     co-maintaner
     Evenst : []
     Hackethons : []     



*/
