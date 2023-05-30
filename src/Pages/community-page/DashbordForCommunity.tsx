import { Routes , Route ,   useLocation } from 'react-router-dom'
import { Suspense } from 'react'
import CommunityList from './CommunityList';
import AccountForCommuntity from './AccountForCommuntity';
import CreateHackethons from './CreateHackethons';
import CreateTweet from './CreateTweet';
import CreateEvents from './CreateEvents';


export default function DashbordForCommunity() {

  console.log("Data ", useLocation().pathname.startsWith('/community'))
  if(!useLocation().pathname.startsWith('/community')){
    return null;
  }
  return (
    <div className="flex flex-row border w-full h-screen text-black">
        <div className="flex flex-col md:w-1/5 border w-auto">
            <CommunityList/>
        </div>
        <div className="w-4/5 border"> 
        <Routes>
          <Route
            path='/community/1111/CreateHackethons'
            element={
              <Suspense >
                <CreateHackethons/>
              </Suspense>
            }
          />
          <Route
            path='/community/1111/CreateEvents'
            element={
              <CreateEvents/>
            }
          />
          <Route
            path='/community/1111/CreateInform'
            element={
              <CreateTweet/>
            }
          />
          <Route
            path='community/1111/Account'
            element={
              <AccountForCommuntity/>
            }
          />
         
        </Routes>
        </div>
    </div>
  )
}
