
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css" 
 export default function InfoBox({info}) {
     let img_url = "https://images.unsplash.com/photo-1592639296346-560c37a0f711?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVsaGl8ZW58MHx8MHx8fDA%3D";
    let hot_url = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let cold_url = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let rain_url = "https://plus.unsplash.com/premium_photo-1664910358669-b19dce4be056?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
 <div className="InfoBox">
    <div className="cardContainer">
       <Card sx={{ maxWidth: 345 }}>
         <CardMedia
           component="img"
           alt="green iguana"
           height="140"
           image={
            info.humidity > 80 
            ? rain_url
            : info.temp > 15 
            ? hot_url 
            : cold_url
        }
          />
         <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography  variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <div>Temperature = {info.temp}&deg;C </div>
         <div>Hummidity = {info.humidity} </div>
         <p>Min Temp = {info.tempMin}&deg;C  </p>
         <p>Max Temp = {info.tempMax}&deg;C  </p>
         <p>The Weather Can be describe as {info.weather} and feels like {info.feelsLike}&deg;C </p>
  
        </Typography>
        </CardContent>
     
        </Card>
    </div>
  
</div>
    )
};