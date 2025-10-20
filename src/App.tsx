import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Paper, Title, Box } from '@mantine/core'
import MainPage from './Pages/MainPage'
import './App.css'

function App() {
  return (
      <>
      <Paper bg="blue.8" w="100%" p={50} ta="center" mb={40}><Title>Welcome to CTF</Title></Paper>
      <Box w="75%" m="auto">
        <BrowserRouter basename='/CTF'>
          <Routes>
            <Route path='/' element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </Box>
      </>
    )
}

export default App;
