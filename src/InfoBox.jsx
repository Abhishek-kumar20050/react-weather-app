import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {

  const INIT_URL = "https://images.unsplash.com/photo-1641970304222-b2b332808a4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  let HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  let COLD_URL = "https://images.unsplash.com/photo-1511479120330-75dc151b216c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  let RAINY_URL = "https://images.unsplash.com/photo-1558409057-bbe679023136?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  return (
    <div className="InfoBox">
      <br /> <br />
      <div className='CardContainer'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 && info.temp > 15 ? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {
                info.humidity > 80 && info.temp > 15 
                ? <ThunderstormIcon /> 
                : info.temp > 15 
                ? <SunnyIcon /> 
                : <AcUnitIcon />
              }
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
              <p>Temprature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>The weather can be descrived as <i><b>{info.weather}</b></i> feels like {info.feelsLike}&deg;C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}