import { useEffect, useState } from 'react'
import { dataTypeForEventCreation } from '../../../../utils/type';
import Button from '@mui/material/Button';

export default function EventTopicsCom() {


  type props = {
    objForEvent: dataTypeForEventCreation
    setObj: React.Dispatch<React.SetStateAction<dataTypeForEventCreation>>
  }

  const posts = [
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    
  ];
  return (
    <div className="mx-auto text-left  pb-10 ">
      <div className="flex flex-row flex-wrap justify-normal:md justify-center">

        {posts.map((post) => (
          <article
            key={post.id}
            className="flex max-w-xl border p-5 hover:border-gray-600 rounded-md flex-col items-start justify-center mx-4 my-4"  
          >
            <div className="flex items-center gap-x-4 text-xs ">
              <input type="date" className="text-gray-500 outline-none" />
              <input
                type="text"
                placeholder="web development"
                className="relative z-10 rounded-full w-1/2 outline-none  bg-gray-300 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              />
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6">
                <input
                  type="text"
                  placeholder="Front-end Development"
                  className="outline-none text-black "
                />
              </h3>
              <input
                className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 outline-none"
                placeholder="Add Eventathon topic details"
              />
            </div>
          </article>
        ))}

      </div>
      <div className='flex justify-center mt-10'>
        <Button variant='contained' >Add One</Button>
      </div>
    </div>
  );
}


// 
// mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  lg:mx-0 lg:max-w-none lg:grid-cols-3