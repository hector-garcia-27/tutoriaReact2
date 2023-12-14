import './App.css'
import { useState } from "react"
import Registro from './components/Registro'


function App() {
  const [error, setError] = useState("")
  const [succes, setSucces] = useState("")
  return (
    <>
      <Registro error={error} succes={succes} setError={setError} setSucces={setSucces}/>
    </>
  )
}

export default App
