import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 250,
    [theme.breakpoints.down('sm')]: {
      height: 150,
    },
  },
  card: {
    marginBottom: theme.spacing(5),
  },
}))
const Post = () => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?cs=srgb&dl=pexels-aleksandar-pasaric-2603464.jpg&fm=jpg'
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5'>
            My first Post
          </Typography>
          <Typography variant='body2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            repellat autem veniam, nisi impedit error aut nostrum. Consequatur
            aperiam blanditiis harum ratione. Nobis, laudantium rerum vitae sit
            officiis quae harum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dignissimos aliquid impedit, perspiciatis sint
            necessitatibus repellat rerum magnam provident eum earum non saepe
            obcaecati? Beatae exercitationem ullam sunt iste ad amet.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post
