import { useState } from 'react'
import { defaultAppData, defaultData } from '../initialData.js'
import { loadAppData, saveAppData} from '../keepStates.js'
// Modulos
import Fighter from './Fighter.jsx'
import Fighters from '../css/Fighters.jsx'
// CSS
import '../css/App.css'
// imagenes


function App() {
  // ESTADOS
  const [AppData, setAppData] = useState(loadAppData(defaultAppData))
  // Actualización del combatiente seleccionado
  function updateSelFighter (newSelection) {
    const newAppData = {...AppData}
    newAppData.selected = newSelection
    saveAppData(newAppData)
    setAppData(newAppData)
  }
  // Actualización de los datos del combatiente seleccionado
  function updateData (newData) { 
    const newAppData = {...AppData}
    newAppData.fighters[AppData.selected] = newData
    saveAppData(newAppData)
    setAppData(newAppData)
  }
  function onAddFighter () {
    const newFighter = {...defaultData}
    newFighter.playerName = `Nuevo ${AppData.fighters.length + 1}`
    const newAppData = {...AppData}
    newAppData.fighters.push(newFighter)
    saveAppData(newAppData)    
    setAppData(newAppData)
  }
  function onDeleteFighter (idxDeletedFighter) {
    const newAppData = {...AppData}
    newAppData.fighters.splice(idxDeletedFighter, 1)
    saveAppData(newAppData)    
    setAppData(newAppData)
  }

  // Combatiente seleccionado
  if (AppData.selected >= 0 ) {
    return (<Fighter data={AppData.fighters[AppData.selected]} 
                     updateData={updateData}
                     updateSelFighter={updateSelFighter} 
                     />)
  } else {
    return (<Fighters AppData={AppData}
                      onAddFighter={onAddFighter}
                      updateSelFighter={updateSelFighter} 
                      onDeleteFighter={onDeleteFighter}                      
                      />)
  }
}

export default App
