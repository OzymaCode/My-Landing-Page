import React from 'react'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'

const Resume = () => {
  return (
    <div className="fillBelowBar">
      <Toolbar />

      <div className="fillContainer centerContent">
        <object
          data="https://docs.google.com/document/d/1ihZaeT05QygnV5TxmjU0D6k2Lm8LKG-n8D1a9-9N5FM/edit?usp=sharing"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <div className="fillContainer centerContent">
            Alternative text - include a link{' '}
            <a href="https://docs.google.com/document/d/1ihZaeT05QygnV5TxmjU0D6k2Lm8LKG-n8D1a9-9N5FM/edit?usp=sharing">
              to the PDF!
            </a>
          </div>
        </object>
      </div>
    </div>
  )
}

export default Resume
