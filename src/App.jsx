import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Title, Paper, Group, Menu, Anchor, Button, Box } from '@mantine/core'
import './App.css'

import IndexPage from './Pages/Index'
import P1_1 from './Pages/P1_1'
import P1_2 from './Pages/P1_2'
import P1_3 from './Pages/P1_3'
import P1_4 from './Pages/P1_4'
import P1_5 from './Pages/P1_5'
import P1_6 from './Pages/P1_6'

function App() {
  const ranges = {
    1: {
      1: <></>,
      2: <></>,
      3: <></>,
      4: <></>,
      5: <></>,
      max: 6
    },
    max: 6
  }
  function pathToPhaseChapter() {
    return {phase: Number(window.location.pathname[1]), chapter: Number(window.location.pathname[3])}
  }

  function moveToNext() {
    let {phase, chapter} = pathToPhaseChapter()
    chapter++
    if (ranges[phase].max < chapter) {
      phase++
      chapter = 1
    }
    if (ranges.max < phase) {
      window.location.href = '/theend'
    } else {
      window.location.href = `/${phase}.${chapter}`
    }
  }

  return (
    <>
    <Paper bg="blue.8" w="100%" p={50} ta="center" mb={40}><Title>Welcome to NewToCTF</Title></Paper>
    <Group>
      <Anchor href='/'>Home</Anchor>
      <Menu>
        <Menu.Target>
          <Button>Crypto</Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item onClick={(e)=>window.location.href='/1.1'}>
            1 - Basics
          </Menu.Item>
          <Menu.Item onClick={(e)=>window.location.href='/1.2'}>
            2 - XOR
          </Menu.Item>
          <Menu.Item onClick={(e)=>window.location.href='/1.3'}>
            3 - Hashes
          </Menu.Item>
          <Menu.Item onClick={(e)=>window.location.href='/1.4'}>
            4 - AES
          </Menu.Item>
          <Menu.Item onClick={(e)=>window.location.href='/1.5'}>
            5 - RSA
          </Menu.Item>
          <Menu.Item onClick={(e)=>window.location.href='/1.6'}>
            6 - Custom
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <Menu>
        <Menu.Target>
          <Button>Forensics</Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item onClick={(e)=>window.location.href='/2.1'}>
            1 - Basics
          </Menu.Item>
          <Menu.Item onClick={(e)=>window.location.href='/2.2'}>
            2 - Zip archives / hash cracking
          </Menu.Item>
          <Menu.Item onClick={(e)=>window.location.href='/2.3'}>
            3 - Networks nad pcap
          </Menu.Item>
          <Menu.Item onClick={(e)=>window.location.href='/2.4'}>
            4 - Memory dumps
          </Menu.Item>
          <Menu.Item onClick={(e)=>window.location.href='/2.5'}>
            5 - Windows registry
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
    <Box w="75%" m="auto">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='/1.1' element={<P1_1 />} />
          <Route path='/1.2' element={<P1_2 />} />
          <Route path='/1.3' element={<P1_3 />} />
          <Route path='/1.4' element={<P1_4 />} />
          <Route path='/1.5' element={<P1_5 />} />
          <Route path='/1.6' element={<P1_6 />} />
        </Routes>
      </BrowserRouter>
    </Box>
    {(window.location.pathname.length === 4) ? <Button onClick={moveToNext}>Next</Button> : <></>}
    </>
  )
}

export default App
