import NavbarForEvent from "../../component/NavbarForEvent"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box, CardActions, Button, Avatar } from '@mui/material';


export default function EventDetailsPage() {

    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );
    return (
        <div className="flex flex-col  text-black ">
            <div className="flex justify-center h-24 ">
                <NavbarForEvent />
            </div>
            <div className="flex flex-col my-2">
                <div id="event-poster" className="h-96 border w-[90%] mx-auto">
                    <img src="https://img.freepik.com/premium-vector/music-event-horizontal-poster-flyer-template-with-gradient-colorful-design_85212-212.jpg" className="h-96 w-full" />
                </div>
                <div id='about' className="h-96 border my-10 mx-10 flex md:flex-row flex-col">
                    <div className="md:w-3/5 w-full">
                        <Card className="w-full h-80 my-auto">
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="div">
                                    be{bull}nev{bull}o{bull}lent
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="border border-green-500 md:w-2/5 w-full hidden md:block">
                        Organised By
                        <Avatar>
                            
                        </Avatar>
                    </div>
                </div>
                <div id='topics' className="h-56 border  my-4">
                    Topics
                </div>
                <div id='spekers' className="h-56 border  my-4">
                    Spekers
                </div>
                <div id='venues' className="h-56 border  my-4">
                    Venues
                </div>
            </div>

        </div>
    )
}
