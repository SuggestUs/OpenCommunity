import { Route, Routes, useLocation } from 'react-router-dom'

// let permission = useLocation().pathname === '/community';

export default function DashbordForCommunity() {

  console.log("Data ", useLocation().pathname.startsWith('/community'))
  if(!useLocation().pathname.startsWith('/community')){
    return null;
  }
  return (
    <div className="flex flex-row border border-red-500 w-full h-screen">
        <div className="flex flex-col w-1/5 border border-green-400">
                Community
        </div>
        <div className="w-4/5 border border-pink-800">
            Details
        </div>
    </div>
  )
}
