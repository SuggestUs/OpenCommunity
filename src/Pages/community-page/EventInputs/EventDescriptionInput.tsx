import { useEffect, useState } from "react";
import { dataTypeForEventCreation } from "../../../../utils/type";
import { FormControl, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

type props = {
  objForEvent: dataTypeForEventCreation;
  setObj: React.Dispatch<React.SetStateAction<dataTypeForEventCreation>>;
};
export default function EventDescriptionCom({ objForEvent, setObj }: props) {
  const [mode, setMode] = useState<string>("");

  const hadleChangeInMode = (event: any) => {
    setMode(event.target.value);
    setObj({
      ...objForEvent,
      "event-mode": event.target.value,
    });
  };

  const handleChangeInDetailsForEvent = (event: any) => {
    const { name, value } = event.target;
    setObj({
      ...objForEvent,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(objForEvent, setObj);
  });
  return (
    <div className="mt-6 border-gray-100 text-center">
      <dl className=" divide-gray-100 ">
        <p className="flex items-center justify-center mb-10 font-bold text-xl md:text-2xl">
          All details about the Event
        </p>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
          <dt className="text-sm font-bold leading-6 text-gray-900 ">
            Event name
          </dt>
          <dd className="border">
            <TextField
              variant="outlined"
              type="text"
              label="Event Name"
              name="event-name"
              onChange={handleChangeInDetailsForEvent}
              className="border p-2  outline-none rounded-md "
              fullWidth
            />
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-bold  leading-6 text-gray-900">
            Event Mode
          </dt>
          <dd className="border ">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Mode</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                label="Mode"
                id="demo-simple-select"
                value={mode}
                name="event-mode"
                onChange={hadleChangeInMode}
                fullWidth
              >
                <MenuItem value={"Online & Offline"} selected>
                  Online & Offline
                </MenuItem>
                <MenuItem value={"Online"}>Online</MenuItem>
                <MenuItem value={"Offline"}>Offline</MenuItem>
              </Select>
            </FormControl>
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-bold  leading-6 text-gray-900">
            Email address
          </dt>
          <dd>
            <TextField
              variant="outlined"
              type="email"
              label="Email"
              name="event-email"
              onChange={handleChangeInDetailsForEvent}
              className="border p-2  outline-none rounded-md "
              helperText="This email is for communication purpose with community"
              fullWidth
            />
          </dd>
        </div>

        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-bold leading-6 text-gray-900">
            Event Date
          </dt>
          <dd>
            <TextField
              variant="outlined"
              type="datetime-local"
              name="event-date"
              onChange={handleChangeInDetailsForEvent}
              className="border p-2  outline-none rounded-md "
              fullWidth
            />
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-bold leading-6 text-gray-900">
            Registration Fee
          </dt>
          <dd>
            <TextField
              variant="outlined"
              type="text"
              name="event-fees"
              className="border p-2  outline-none rounded-md"
              label="Amount"
              onChange={handleChangeInDetailsForEvent}
              fullWidth
            />
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-bold leading-6 text-gray-900">
            About the Event
          </dt>
          <dd>
            <textarea
              placeholder="Share details about the  Event"
              className="border p-2 w-full h-32 outline-none resize-none rounded-md "
              onChange={handleChangeInDetailsForEvent}
              name="about-event"
            />
          </dd>
        </div>
      </dl>
    </div>
  );
}

// mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0
