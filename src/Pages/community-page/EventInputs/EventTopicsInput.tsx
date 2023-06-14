import Button from "@mui/material/Button";
import { ChangeEvent, useState } from "react";
import { dataTypeForEventCreation } from "../../../../utils/type";

type props = {
  objForEvent: dataTypeForEventCreation;
  setObj: React.Dispatch<React.SetStateAction<dataTypeForEventCreation>>;
};

type feild = 'time' | 'tag' | 'about' | 'title'

export default function EventTopicsCom({ objForEvent, setObj }: props) {
  type objFortopicArray = {
    "time-for-topic": string;
    "title": string;
    "about-topic": string;
    "tag": string;
  };

  type ArrayForTopic = objFortopicArray[];

  const topicArray = {
    "time-for-topic": "",
    "title": "",
    "about-topic": "",
    "tag": "",
  };

  const [arrayForTpoic, setArrayForTpoic] = useState<ArrayForTopic>([
    {
      "time-for-topic": "",
      "title": "",
      "about-topic": "",
      "tag": "",
    },
  ]);

  const addAnotherTopic = () => {
    const newArray = [...arrayForTpoic];
    newArray.push(topicArray);
    setArrayForTpoic(newArray);
  };

  const deleteTopic = (index: number) => {
    let updatedArray = [...arrayForTpoic];
    updatedArray.splice(index, 1);
    setArrayForTpoic(updatedArray);
  };

  const changeInData = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>, index: number, feild: feild) => {
    const { value } = event.target;
    let newArray = [...arrayForTpoic];
    if (feild === 'time') {
      newArray[index]["time-for-topic"] = value
    } else if (feild === "tag") {
      newArray[index].tag = value;
    } else if (feild === "title") {
      newArray[index].title = value
    } else {
      newArray[index]["about-topic"] = value
    }
    setArrayForTpoic(newArray);
  }

  const setTomainObj = () => {
    console.log(objForEvent, setObj)
  }


  return (
    <>
      <div className="flex flex-row ">
        <p className="flex items-center mx-10 p-5 font-bold text-xl md:text-2xl border w-4/5">
          Event Topics 📌
        </p>
        <Button variant="outlined" onClick={setTomainObj}>Done</Button>
      </div>
      <div className="mx-auto pb-10 flex  md:flex-row border flex-wrap flex-col justify-center">
        {arrayForTpoic.map((items, index) => (
          <article
            key={index}
            className="flex w-[65%] md:w-auto border p-5 hover:border-gray-600 rounded-md flex-col items-start justify-center mx-4 my-4 "
          >
            <div className="flex items-center gap-x-4 text-xs ">
              <input
                type="time"
                className="text-gray-500 outline-none"
                name="time-for-topic"
                value={items["time-for-topic"]}
                onChange={(e) => changeInData(e, index, 'time')}
              />
              <input
                type="text"
                placeholder="Related Tag"
                name="tag"
                value={items.tag}
                onChange={(e) => changeInData(e, index, 'tag')}
                className="relative z-10 rounded-full w-1/2 outline-none  bg-gray-300 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              />
              <div className=" w-16">
                {index !== 0 && (
                  <Button variant="outlined" onClick={() => deleteTopic(index)}>
                    D
                  </Button>
                )}
              </div>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6">
                <input
                  type="text"
                  placeholder="Title"
                  className="outline-none text-black "
                  name="title"
                  value={items.title}
                  onChange={(e) => changeInData(e, index, 'title')}
                />
              </h3>
              <textarea
                className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 outline-none"
                name="about-topic"
                value={items["about-topic"]}
                onChange={(e) => changeInData(e, index, 'about')}
              />
            </div>
          </article>
        ))}
      </div>
      <div className="flex justify-center">
        <Button variant="contained" onClick={addAnotherTopic} className="flex justify-center w-40 mx-auto border ">
          Add One
        </Button>
      </div>
    </>

  );
}
