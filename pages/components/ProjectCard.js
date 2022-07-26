import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import GitHubIcon from '@mui/icons-material/GitHub'

const ImgMediaCard = ({
  content = {
    title: '',
    description: '',
    tags: '',
    video: '',
    link: '',
    git: '',
  },
}) => {
  return (
    <Paper elevation={5}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {content.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content.description}
          </Typography>
        </CardContent>
        <CardActions style={{ marginTop: '0', paddingTop: '0' }}>
          <Button size="small">
            <a target="_blank" href={content.video} rel="noopener noreferrer">
              Watch Video
            </a>
          </Button>

          <Button size="small">
            <a href={content.link} target="_blank" rel="noopener noreferrer">
              Open App
            </a>
          </Button>
          <div
            style={{
              display: 'flex',
              flexGrow: '1',
              justifyContent: 'flex-end',
            }}
          >
            <Button size="small">
              <a
                target="_blank"
                href={content.git}
                rel="noopener noreferrer"
                style={{
                  color: 'rgba(0, 0, 0, .6)',
                  marginTop: '.5em',
                }}
              >
                <GitHubIcon />
              </a>
            </Button>
          </div>
        </CardActions>
      </Card>
    </Paper>
  )
}

export default ImgMediaCard
