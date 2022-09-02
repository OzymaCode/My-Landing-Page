import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Head from 'next/head'

export async function getServerSideProps(context) {
  const projects = [
    {
      title: 'ChatApp',
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
  ]
  console.log('context.query.land, ', context.query.land)

  const thisProject = projects.filter((project) => {
    return project.tab == '/' + context.query.land
    console.log('project.tab, ', project.tab)
  })[0]
  console.log('thisProject, ', thisProject)

  return {
    props: thisProject,
  }
}

const Land = (project) => {
  const router = useRouter()
  const [check, setCheck] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setCheck(true)
    }, [350])
  }, [])
  const handleClick = async () => {
    await setCheck(false)
    console.log('launching...')
    router.push('/launch')
  }

  return (
    <div>
      <Head>
        <title>Toby Martiny | </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div onClick={() => handleClick()}>
        <motion.img
          src={`../..${project.tab}-image.png`}
          alt="Video not found."
          layout
          layoutId={project.tab}
          className="absolute top-0 right-0"
        />
        {check && (
          <motion.video
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05 }}
            loop
            autoPlay
            muted
            className="absolute top-0 right-0"
            src={`../..${project.tab}-video.mp4`}
          />
        )}
      </div>
    </div>
  )
}

export default Land
