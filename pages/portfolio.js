import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from './components/ProjectCard'
import Toolbar from '@mui/material/Toolbar'

const Work = () => {
  const styles = {
    card: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '4em',
    },
  }
  const content = {
    chat: {
      title: 'ChatApp | React, MongoDB',
      description:
        'A messaging app I made for my friends. Lets users create or login to an account and send messages to each other with the message log. The data is stored through my Mongo Database and accessed via the server hosted on Heroku.',
      tags: '',
      video: 'https://youtu.be/5sIAVRcFUiU',
      link: 'https://ozyma-chatapp.netlify.app/',
      git: 'https://github.com/stars/OzymaCode/lists/chatapp',
    },
    eth: {
      title: 'Ethereum Exchange | React, Solidity',
      description:
        'An app that lets users send each other ethereum. The program uses an api to connect to a solidity contract I deployed to the Ethereum Block-Chain. It then sends the ether through the contract to the address that the user entered. *Metamask required.',
      tags: '',
      video: 'https://youtu.be/tyHF-DGLIvw',
      link: 'https://ozyma-ethereum-exchange.netlify.app',
      git: 'https://github.com/stars/OzymaCode/lists/ethex',
    },
  }
  return (
    <div className="centerContent fillContainer background">
      <Toolbar />
      <Container>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent={'center'}
        >
          <Grid item xs={12} sm={6} style={styles.card}>
            <Card content={content.chat} />
          </Grid>
          <Grid item xs={12} sm={6} style={styles.card}>
            <Card content={content.eth} />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Work
