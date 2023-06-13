import { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LogInPage from "../Pages/LogInPage";
import SignInPage from "../Pages/SignInPage";
import { useLocation } from "react-router-dom";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Authentication() {
  const location = useLocation();

  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const Fontcolor = {
    color: "black",
  };

  useEffect(() => {
     
    if (location.state !== null) {
      setValue(location.state.authNo);
    }


  }, []);
  console.log("location.state",)
  return (
    <section className="flex flex-col justify-center items-center h-screen ">
      <div className="my-5 font-bold text-center text-black text-2xl md:text-3xl ">
        {" "}
        Welcome to,<span className="text-primary">Open </span>
        <span className="text-black">Community</span>
      </div>
      <div className="bg-white p-4 rounded-lg border-2  md:w-1/3 w-5/6 text-center flex flex-row shadow-md ">
        <div className=" w-full mx-2 md:justify-end justify-center h-[35rem] overflow-y-auto">
          <Box sx={{ width: "100%" }}>
            <Box>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                TabIndicatorProps={{
                  style: { backgroundColor: "purple" },
                }}
              >
                <Tab label="Log In " style={Fontcolor} />
                <Tab label="Sign Up" style={Fontcolor} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <LogInPage />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <SignInPage />
            </TabPanel>
          </Box>
        </div>
      </div>
    </section>
  );
}
