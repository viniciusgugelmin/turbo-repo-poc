import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, GlobalContextProvider, useGlobalContext } from "ui";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GlobalContextProvider>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more. teste 
        <Button />
        <LoremComponent />
      </p>
      </GlobalContextProvider>
    </>
  )
}

function LoremComponent() {
  const { value, setValue } = useGlobalContext()

  console.log(value)

  return <div><button onClick={() => setValue(value === "default" ? "other" : "default")}>{value}</button></div>
}

export default App
