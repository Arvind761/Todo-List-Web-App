import React from 'react'
import { Toaster } from 'react-hot-toast'
import Body from './components/Body'
import Header from './components/Header'

export default function App() {
  return (
    <div>
      <Toaster/>
      <Header/>
      <Body/>
    </div>
  )
}
