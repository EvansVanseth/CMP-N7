import { useState } from 'react'
import { defaultAppData } from '../initialData.js'
import { loadAppData, saveAppData} from '../keepStates.js'
// Modulos
import Fighter from './Fighter.jsx'
// CSS
import '../css/App.css'
// imagenes

function App() {
  // ESTADOS
  const [AppData, setAppData] = useState(loadAppData(defaultAppData))
  // Actualización del combatiente seleccionado
  function updateSelFighter (selected) {
    const newAppData = {...AppData}
    newAppData.selected = selected
    setAppData(newAppData)
    saveAppData(newAppData)
  }
  // Actualización de los datos del combatiente seleccionado
  function updateData (newData) { 
    const newAppData = {...AppData}
    newAppData.fighters[AppData.selected] = newData
    setAppData(newAppData)
    saveAppData(newAppData)
  }
  console.log(AppData)
  if (AppData.selected >= 0 ) {
    return (<Fighter data={AppData.fighters[AppData.selected]} 
                     updateData={updateData}/>)
  } else {
    return (undefined)
  }
}

export default App
