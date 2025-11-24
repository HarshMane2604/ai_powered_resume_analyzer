import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/index.css'
import UploadBox from './components/UploadBox'
import Router from './routes/router.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <h1 class="text-3xl font-bold underline text-amber-700">
        AI Resume Analyzer
      </h1>
      <UploadBox onFileSelect={(file) => console.log(file)} />
      <Router />
    </>
  )
}

export default App
