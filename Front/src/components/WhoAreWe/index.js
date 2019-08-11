import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { FaLinkedin } from 'react-icons/fa';

import './whoarewe.scss';

const useStyles = makeStyles({
  card: {
    minWidth: 345,
    marginRight: '3em',
  },
  alexCard: {
    minWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div className="cards">
      <Card className={classes.card}>
        <CardMedia
          component="img"
          height="350"
          className="card-johann"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Johann
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Product Owner
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="linkedin">
            <a href="http://linkedin.com/in/johann-raoul" target="_blank"><FaLinkedin /></a>
          </IconButton>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          height="350"
          className="card-maxime"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Maxime
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Product Manager / Lead Dev Front
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="linkedin">
            <a href="https://www.linkedin.com/in/maximerigaud-dev/" target="_blank"><FaLinkedin /></a>
          </IconButton>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          height="350"
          className="card-camille"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Camille
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Git Master / Beer Master
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="linkedin">
            <a href="https://www.linkedin.com/in/camille-badique/" target="_blank"><FaLinkedin /></a>
          </IconButton>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          height="350"
          className="card-alex"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Alexandre
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lead Dev Back
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="linkedin">
            <a href="http://linkedin.com/in/johann-raoul" target="_blank"><FaLinkedin /></a>
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
