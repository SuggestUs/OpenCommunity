import { Avatar, TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState, ChangeEvent } from "react";

export default function EventSpeakersCom() {
  type typeForSpeakersImage = {
    speaker1: File | undefined;
    speaker2: File | undefined;
    speaker3: File | undefined;
  };
  type typeForSpeakersURL = {
    speaker1: string;
    speaker2: string;
    speaker3: string;
  };

  const fileInputRef1 = useRef<HTMLInputElement>(null);
  const fileInputRef2 = useRef<HTMLInputElement>(null);
  const fileInputRef3 = useRef<HTMLInputElement>(null);

  const [speakersURL, setSpeakersURL] = useState<typeForSpeakersURL>({
    speaker1: "",
    speaker2: "",
    speaker3: "",
  });
  const [speakersImage, setSpeakersImage] = useState<typeForSpeakersImage>({
    speaker1: undefined,
    speaker2: undefined,
    speaker3: undefined,
  });

  const changeProfileImageForSpeakes = (
    Ref: React.RefObject<HTMLInputElement>
  ) => {
    Ref.current?.click();
  };

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const name = event.target.name;
    if (file) {
      // setSelectedFile(file)
      setSpeakersURL({
        ...speakersURL,
        [name]: URL.createObjectURL(file),
      });
      setSpeakersImage({
        ...speakersImage,
        [name]: file,
      });
    }
  };

  useEffect(() => {});

  return (
    <>
      <div className="flex md:flex-row flex-col h-auto  w-full flex-wrap">
        <div className="flex flex-col my-4 mx-4 ">
          <div className=" flex items-center mx-10">
            <Avatar
              src={speakersURL.speaker1}
              sx={{ width: 150, height: 150 }}
              onClick={() => changeProfileImageForSpeakes(fileInputRef1)}
            >
              <input
                ref={fileInputRef1}
                id="avatarInput"
                name="speaker1"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileInputChange}
              />
            </Avatar>
          </div>
          <div className="flex items-center justify-center my-5 flex-col">
            <div className="my-4">
              <Typography variant="body2">Speaker's Name</Typography>
              <TextField
                variant="outlined"
                label="Speaker Name"
                type="text"
                className="border outline-none p-2 rounded-md "
                placeholder="Speaker's Name"
              />
            </div>
            <div className="my-4">
              <Typography variant="body2">Post For Speaker</Typography>
              <TextField
                variant="outlined"
                label="Achivments"
                type="text"
                className="border outline-none p-2 rounded-md "
                placeholder="Achivments"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col my-4 mx-4 ">
          <div className=" flex items-center mx-10">
            <Avatar
              src={speakersURL.speaker2}
              sx={{ width: 150, height: 150 }}
              onClick={() => changeProfileImageForSpeakes(fileInputRef2)}
            >
              <input
                ref={fileInputRef2}
                id="avatarInput"
                name="speaker2"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileInputChange}
              />
            </Avatar>
          </div>
          <div className="flex items-center justify-center my-5 flex-col">
            <div className="my-4">
              <Typography variant="body2">Speaker's Name</Typography>
              <TextField
                variant="outlined"
                label="Speaker Name"
                type="text"
                className="border outline-none p-2 rounded-md "
                placeholder="Speaker's Name"
              />
            </div>
            <div className="my-4">
              <Typography variant="body2">Post For Speaker</Typography>
              <TextField
                variant="outlined"
                label="Achivments"
                type="text"
                className="border outline-none p-2 rounded-md "
                placeholder="Achivments"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col my-4 mx-4 ">
          <div className=" flex items-center mx-10">
            <Avatar
              src={speakersURL.speaker3}
              sx={{ width: 150, height: 150 }}
              onClick={() => changeProfileImageForSpeakes(fileInputRef3)}
            >
              <input
                ref={fileInputRef3}
                id="avatarInput"
                name="speaker3"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileInputChange}
              />
            </Avatar>
          </div>
          <div className="flex items-center justify-center my-5 flex-col">
            <div className="my-4">
              <Typography variant="body2">Speaker's Name</Typography>
              <TextField
                variant="outlined"
                label="Speaker Name"
                type="text"
                className="border outline-none p-2 rounded-md "
                placeholder="Speaker's Name"
              />
            </div>
            <div className="my-4">
              <Typography variant="body2">Post For Speaker</Typography>
              <TextField
                variant="outlined"
                label="Achivments"
                type="text"
                className="border outline-none p-2 rounded-md "
                placeholder="Achivments"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
