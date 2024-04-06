import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export function SearchForParkingCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://static.vecteezy.com/system/resources/previews/000/538/418/non_2x/the-magnifying-glass-and-pin-location-icon-and-map-vector-the-concept-of-travel.jpg"
          alt="Magnifying Glass"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Search for Parking
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Enter your destination address to find available parking spots nearby.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function BookYourSpotCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.prismic.io/spothero/e8b36b04-1ad0-406a-b609-63ace2e3937e_faq-car.png?auto=compress,format"
          alt="Book Your Spot"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Book Your Spot
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Reserve your preferred parking spot with just a few clicks.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function ParkAndEnjoyCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.shutterstock.com/image-vector/little-girl-walking-on-pedestrian-260nw-1996451291.jpg"
          alt="Park and Enjoy"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Park and Enjoy
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Arrive at your destination stress-free and ready to go!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

// Define other card components similarly

