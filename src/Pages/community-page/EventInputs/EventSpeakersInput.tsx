import { Avatar, Button, TextField, Typography, } from "@mui/material";
import { useEffect, useRef, useState, ChangeEvent } from "react";

export default function EventSpeakersCom() {

  type typeForSpeakersObj = {
    speaker_file: null | File,
    speaker_url: string,
    speaker_name: string
    speaker_post : string
  };
  type typeForSpeakersArray = typeForSpeakersObj[];


  const SpeakersObj =
  {
    speaker_file: null,
    speaker_url: '',
    speaker_name: '',
    speaker_post : '' 
  }
  
  const fileInputRef = useRef<(HTMLInputElement | null)[]>([]);

  const [arrayForSpeakers, setArrayForSpeakers] = useState<typeForSpeakersArray>([
    {
    speaker_file: null,
    speaker_url: '',
    speaker_name: '',
    speaker_post : ''
  }
]);

  const handleFileInputChange = (index : number) => {
      fileInputRef.current[index]?.click();
  }


  const changeProfileImageForSpeakes = (event: ChangeEvent<HTMLInputElement> , index : number) => {
    const file = event.target.files?.[0]
    if (file) {
      const newArray = [...arrayForSpeakers];
      newArray[index].speaker_file = file,
      newArray[index].speaker_url = URL.createObjectURL(file)

      setArrayForSpeakers(newArray);
    }
  }

  const hadleChangeInDetails = (event: any, index : number)=>{

  }

  const addProfileForSpeakers = () => {
    const updatedArray = [...arrayForSpeakers];
    updatedArray.push(SpeakersObj)
    setArrayForSpeakers(updatedArray)
    

  }

  const deleteProfileCard =(index : number)=>{
    console.log("index " , index )
    const newArray  =  [...arrayForSpeakers]
    newArray.splice(index , 1);
    setArrayForSpeakers(newArray);
  }

  useEffect(() => {

  })

  console.log("arrayForSpeakers", arrayForSpeakers)

  return (
    <>
      <div className="flex flex-col h-auto w-full justify-center">
        <div className="flex md:flex-row flex-col h-auto  w-full flex-wrap justify-normal:md justify-center" id='containerForSpeakers'>
          {arrayForSpeakers.map((item, index) => {
            return (
              <div className="flex flex-col my-4 mx-4 justify-center border p-5 hover:border-gray-600" key={index}>
                 <div className="flex w-full justify-end h-10">
                 {index!==0 && (<Button variant="outlined" className="" onClick={()=>deleteProfileCard(index)}>D</Button>)}
                </div>
                <div className=" flex flex-col items-center mx-10 justify-center mt-4">

                  <Avatar
                    src={arrayForSpeakers[index].speaker_url}
                    sx={{ width: 150, height: 150 }}
                    onClick={() => handleFileInputChange(index)}
                  >
                    <input
                      ref={(el)=>(fileInputRef.current[index]=el)}
                      id='avatarInput'
                      name='speaker1'
                      type='file'
                      accept='image/*'
                      style={{ display: 'none' }}
                      onChange={(event)=>changeProfileImageForSpeakes(event , index)}
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
                      name=''
                      onChange={(event)=>hadleChangeInDetails(event , index)}
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
                      onChange={(event)=>hadleChangeInDetails(event , index)}
                    />
                  </div>
                </div>
              </div>
            )
          })}


        </div>
        <div className="flex items-center justify-center">
          <Button variant="contained" onClick={addProfileForSpeakers} className="w-40">Add</Button>
        </div>
      </div>

    </>
  );
}
