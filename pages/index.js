import React, { useState, useEffect, useRef } from 'react'

import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Home = () => {
  const styles = {
    item1: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      height: '100%',
    },
    item2: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '100%',
    },
    info: {
      border: 'solid black 1px',
    },
  }

  return (
    <div className="centerContent fillContainer background">
      <Typography variant="h4" style={{ color: '	#232b2b' }}>
        Hi! I&apos;m Toby and I&apos;m a Software Developer
      </Typography>
      <Typography variant="body2"></Typography>
    </div>
  )
}

export default Home
