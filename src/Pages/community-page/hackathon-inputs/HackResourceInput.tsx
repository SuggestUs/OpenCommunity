import Button from '@mui/material/Button';
import { useState } from 'react';

export default function HackResourceInput() {

  type objFortopicArray = {
    "time-for-topic": string,
    "title": string,
    "speakername": string,
    "tag": string
  }


  type ArrayForTopic = objFortopicArray[];

  const topicArray =
  {
    "time-for-topic": '',
    "title": '',
    "speakername": '',
    "tag": ''
  }


  const [arrayForTpoic, setArrayForTpoic] = useState<ArrayForTopic>([{
    "time-for-topic": '',
    "title": '',
    "speakername": '',
    "tag": ''
  }])

  const addAnotherTopic = () => {
    const newArray = [...arrayForTpoic];
    newArray.push(topicArray);
    setArrayForTpoic(newArray);
  }

  const deleteTopic = (index: number) => {
    let updatedArray = [...arrayForTpoic]
    updatedArray.splice(index, 1);
    setArrayForTpoic(updatedArray);
  }
  return (
    <div className="mx-auto text-left  pb-10 ">
      <div className="flex flex-row flex-wrap justify-normal:md justify-center">

        {arrayForTpoic.map((items, index) => (
          <article
            key={index}
            className="flex max-w-xl border p-5 hover:border-gray-600 rounded-md flex-col items-start justify-center mx-4 my-4"
          >
            <div className="flex items-center gap-x-4 text-xs ">
              <input type="time" className="text-gray-500 outline-none" name='time-for-topic'
                value={items['time-for-topic']}
              />
              <input
                type="text"
                placeholder="Related Tag"
                name='tag'
                value={items.tag}
                className="relative z-10 rounded-full w-1/2 outline-none  bg-gray-300 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              />
              <div className=' w-16'>
                {index !== 0 && (<Button variant='outlined' onClick={() => deleteTopic(index)}>D</Button>)}
              </div>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6">
                <input
                  type="text"
                  placeholder="Title"
                  className="outline-none text-black "
                  name='title'
                  value={items.title}
                />
              </h3>
              <input
                className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 outline-none"
                placeholder="Speaker name"
                name='speakername'
                value={items.speakername}
              />
            </div>
          </article>
        ))}

      </div>
      <div className='flex justify-center mt-10'>
        <Button variant='contained' onClick={addAnotherTopic}>Add One</Button>
      </div>
    </div>
  );
}


