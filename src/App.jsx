import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [names, setNames] = useState([
  ])


  const [newName, setNewName] = useState("")
 

  const handleNewNameChange = event => {
    setNewName(event.target.value)
    
  }

  const handleAddClick = () => {
    let newNames = [...names]
    newNames.push(newName)
    setNames(newNames)
  }


  const handleDeleteClick = () => {
    setNames([])
  }

  const handleItemClick = (name) => {
    setNames(names.filter(item => item != name))

  }


  return (
    <div className="App">

      <h1> Dienas darbi </h1>
      
      {names.length > 0 ? 
        
        names.map(name => 
          <li key={name} onClick={() => {handleItemClick(name)}}>
            {name}
          </li>
          
          
          
          )
        
       : <h5>Viss done</h5>
      }

        <input value={newName} onChange={handleNewNameChange}>
        
        
        </input>
        <button onClick={() => {handleAddClick()}}>
          pievienot
        </button>

        {names.length > 0 ? 
        
        <button onClick={() => {handleDeleteClick()}}>
        dzēst
       </button>
       : ""
        }
    </div>
  )
}

export default App
