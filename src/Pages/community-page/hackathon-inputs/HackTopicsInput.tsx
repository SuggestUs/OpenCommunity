import Button from "@mui/material/Button";
import { useState } from "react";

export default function HackTopicsCom() {
  type objFortopicArray = {
    "time-for-topic": string;
    title: string;
    speakername: string;
    tag: string;
  };

  type ArrayForTopic = objFortopicArray[];

  const topicArray = {
    "time-for-topic": "",
    title: "",
    speakername: "",
    tag: "",
  };

  const [arrayForTpoic, setArrayForTpoic] = useState<ArrayForTopic>([
    {
      "time-for-topic": "",
      title: "",
      speakername: "",
      tag: "",
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
  return (
    <div className="mx-auto text-left pb-10 ">
      {arrayForTpoic.map((items, index) => (
        <article
          key={index}
          className="flex w-[65%] md:w-auto border p-5 hover:border-gray-600 rounded-md flex-col items-start justify-center mx-4 my-4"
        >
          <div className="flex items-center gap-x-4 text-xs ">
            <input
              type="text"
              placeholder="Related Tag"
              name="tag"
              value={items.tag}
              className="relative z-10 rounded-full w-[50%] outline-none  bg-gray-300 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
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
              />
            </h3>
            <textarea
              className="mt-5 line-clamp-3 text-sm leading-6 w-auto p-2 text-gray-600 outline-none border "
              placeholder="about topic"
              name="speakername"
              // value={items.speakername}
            />
          </div>
        </article>
      ))}

      <div className="flex justify-center mt-10">
        <Button variant="contained" onClick={addAnotherTopic}>
          Add One
        </Button>
      </div>
    </div>
  );
}
