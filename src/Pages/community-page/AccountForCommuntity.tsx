import { useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, IconButton, Avatar } from "@mui/material";
import { getDataForCommunityProfile , getProfileForCommunity} from "../../Appwrite/search/searchForUrl";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import NavbarForDashBord from "../../component/NavbarForDashBord";


export default function AccountForCommuntity() {
  const navigate = useNavigate();
  const params = useParams();
  // const contextForCommunity = useContext(CommunityContext); 

  const objForProfile = {
    status: false,
    'community-email': '',
    'community-name': '',
    'creator-email': '',
    'organized-events': [],
    'organized-hack': [],
  }
  const [profileData, setprofileData] = useState(objForProfile);

  const [initialLoading, setInitialLoading] = useState(false);

  const [inValidRequeat, setinValidRequeat] = useState(false);

  const [_profile, setProfile] = useState<File | undefined>();

  const [urlForProfile, setUrl] = useState<string>('');


  const handleChangeInProfile = (event: any) => {
    let file = event.target.files?.[0];
    setProfile(file);
    setUrl(URL.createObjectURL(file));
  };

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {

    async function fetchProfile() {
      const communityId: any = params.id;
      try {
        let data: any = await getDataForCommunityProfile(communityId)
        console.log("data data" , data)
        setprofileData({
          ...profileData,
          status: true,
          'community-email': data["community-email"],
          'community-name': data["community-name"],
          'creator-email': data["creator-email"],
        })

        let src : any = data.profileId !=='' ?  await getProfileForCommunity(data.profileId) : '';
        console.log("src" , src)
         
        src !== '' && setUrl(src.href)

        setInitialLoading(true);
      } catch (error) {
        // console.log(error);
        setInitialLoading(true);
        setinValidRequeat(true)
      }

    }
     console.log('urlForProfile' , urlForProfile)
    fetchProfile();
  }, [initialLoading])

  return (
    <div>
      {(initialLoading && profileData.status) && (
        <div className="rounded-lg mt-10 shadow-lg border bg-white mx-6 text-xl font-inter flex flex-col scroll-m-0">
           <section className="h-screen flex md:flex-row flex-col w-full">
            <NavbarForDashBord />
           
          <div className="p-5 flex justify-start">
            <Button variant="outlined" color="secondary" onClick={handleBack}>
              Back
            </Button>
          </div>
          <div className="flex flex-row items-center justify-between w-full my-1">
            <div className="flex justify-center ">
              <Avatar
                style={{
                  marginLeft: "50px",
                  marginTop: "50px",
                }}
                src={urlForProfile}
                sx={{ width: 90, height: 90 }}
              />
            </div>
            <div className="flex justify-end  mr-5">
              <IconButton
                color="success"
                aria-label="upload picture"
                component="label"
              >
                <input hidden type="file" onChange={handleChangeInProfile} />
                <PhotoCamera />
              </IconButton>
            </div>
          </div>
          <div className="p-1 md:p-12 text-left">
            <div
              className="block border-4 border-white rounded-full mx-auto -mt-16 h-24 w-24 bg-cover bg-center md:h-32 md:w-32 md:-mt-32"
              style={{
                backgroundImage: `url()`,
              }}
            />
            <h1 className="text-3xl font-bold text-gray-900">{profileData["community-name"]}</h1>
            <div className="flex gap-2 mt-5">
              <GitHubIcon className="text-black" />
              <TwitterIcon className="text-blue-400" />
              <LinkedInIcon className="text-blue-800" />
            </div>
            <p className="text-md  text-gray-500 mt-9">
              <span style={{ display: "inline-block" }}>
                {" "}
                <MarkEmailUnreadOutlinedIcon
                  sx={{
                    color: "green",
                    backgroundColor: "white",
                  }}
                />
              </span>
              <span className="ml-2 mb-10">{profileData["community-email"]}</span>
            </p>  
            <p className="text-black mt-10 font-bold">organizations</p>
            <div className="flex gap-2 mt-4">
              
            </div>
          </div>
          <div className="mx-auto w-4/5 pt-3 border-b-2 border-grey-100 opacity-25" />
           </section>
        </div>
      )}
      {!initialLoading && (
        <>
          <Box className='mx-10 flex justify-center text-center'>
          <CircularProgress />
        </Box>
        </>
      )}
      {inValidRequeat && (
        <div className="rounded-lg mt-10 shadow-lg border bg-white mx-6 text-xl font-inter flex flex-col scroll-m-0 text-black">
          <div className="p-5 flex justify-start">
            <Button variant="outlined" color="secondary" onClick={handleBack}>
              Back
            </Button>
          </div>
          {'Sorry Chhotu , No user'}
        </div>
      )}
    </div>
  );
}
