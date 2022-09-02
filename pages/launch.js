import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import HoverVideoPlayer from 'react-hover-video-player'
import Head from 'next/head'
import Toolbar from '@mui/material/Toolbar'

import Card from './components/NewProjectCard'
import { update } from 'lodash'

const Launch = () => {
  const content = [
    {
      title: 'Alaskan Fishery',
      description:
        'This is an e-commerce website for selling fish I made. It uses Next Js, Redux, Framer-Motion, Tailwindcss, Mui and is connected to PayPal for payments. The front-end hosted on Netlify, and the back-end on Heroku. ',
      tags: ['NextJS', 'Redux'],
      tab: '/alaskan-fishery',
      video: 'https://youtu.be/EDcYA48qwug',
      link: 'https://alaskan-fishery.netlify.app/',
      git: 'https://github.com/stars/OzymaCode/lists/alaskan-fishery',
    },
    {
      title: 'Chat App',
      description:
        'A messaging app I made for my friends. Lets users create or login to an account and send messages to each other with the message log. The data is stored through my Mongo Database and accessed via the server hosted on Heroku.',
      tags: ['React', 'MongoDB'],
      tab: '/chat-app',
      video: 'https://youtu.be/5sIAVRcFUiU',
      link: 'https://ozyma-chatapp.netlify.app/',
      git: 'https://github.com/stars/OzymaCode/lists/chatapp',
    },
    {
      title: 'Ethereum Exchange',
      description:
        'An app that lets users send each other ethereum. The program uses an api to connect to a solidity contract I deployed to the Ethereum Block-Chain. It then sends the ether through the contract to the address that the user entered. *Metamask required.',
      tags: ['React', 'Solidity'],
      tab: '/ethereum-exchange',
      video: 'https://youtu.be/tyHF-DGLIvw',
      link: 'https://ozyma-ethereum-exchange.netlify.app',
      git: 'https://github.com/stars/OzymaCode/lists/ethex',
    },
  ]

  const router = useRouter()
  const [check, setCheck] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setCheck(true)
    }, [350])
  }, [])
  const handleClick = async (project) => {
    await setCheck(false)
    router.push(project.tab)
  }

  const projectTagsHandler = () => {
    const projectLogic = (project, i) => {
      if (check) {
        return (
          <div onClick={() => handleClick(project)}>
            <Card content={project} />
          </div>
        )
      } else {
        return (
          <motion.img
            src={`../..${project.tab}-image.png`}
            layout
            layoutId={project.tab}
          />
        )
      }
    }
    return content.map((project, i) => (
      <div key={i} className="px-10 h-20">
        {projectLogic(project, i)}
      </div>
    ))
  }

  return (
    <div className="bg-white h-full w-full px-5">
      <Head>
        <title>Toby Martiny | </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-3 ">{projectTagsHandler()}</div>
    </div>
  )
}

export default Launch
//{projectTagsHandler()}
