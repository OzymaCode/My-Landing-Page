import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import { withTheme } from '@emotion/react'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'

const Contact = () => {
  const styles = {
    links: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '2em',
    },
    textField: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '1em',
      color: 'white',
    },
  }
  const email = {
    send: () => {
      return (
        <div>
          <div style={styles.links}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                color: '#232b2b',
              }}
            >
              Email Me
            </Typography>
          </div>
          <div style={styles.links}>
            <TextField
              required
              id="name"
              label="Your Email"
              fullWidth
              type="name"
              className="outlined-required"
            />
          </div>
          <div style={styles.links}>
            <TextField
              required
              label="Message"
              id="message"
              fullWidth
              multiline
              type="message"
              rows={4}
              className="outlined-required"
            />
          </div>
          <div style={styles.links} sx={{ color: '#232b2b' }}>
            <Button type="submit" variant="contained" fullWidth>
              Send
            </Button>
          </div>
        </div>
      )
    },
    sent: () => {
      return (
        <div className="fillContainer centerContent">
          <Toolbar />
          <Typography variant="h3" sx={{ color: '#232b2b' }}>
            Message Sent.
          </Typography>
        </div>
      )
    },
    error: () => {
      return (
        <div className="fillContainer centerContent">
          <Toolbar />
          <Typography variant="h3" sx={{ color: '#232b2b' }}>
            Something went wrong. Sorry.
          </Typography>
        </div>
      )
    },
  }
  const [content, setContent] = useState(email.send)

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .send(
        'gmail',
        'template_nbf040f',
        {
          name: document.getElementById('name').value,
          message: document.getElementById('message').value,
        },
        'BLYpfPOVQllqu9RdH',
      )
      .then(
        (result) => {
          console.log(result.text)
          setContent(email.sent)
        },
        (error) => {
          console.log(error.text)
          setContent(email.error)
        },
      )
  }

  return (
    <div className="centerContent fillContainer background">
      <Toolbar />
      <Container>
        <Paper elevation={15} style={{ padding: '1em' }}>
          <form onSubmit={handleSubmit}>{content}</form>
        </Paper>
      </Container>
    </div>
  )
}

export default Contact
