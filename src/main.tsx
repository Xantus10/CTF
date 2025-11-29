import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import App from './App.tsx'

import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'

import './index.css'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider forceColorScheme='dark'>
      <Notifications position='bottom-right' autoClose={5000} />
      <App />
    </MantineProvider>
  </StrictMode>,
)
