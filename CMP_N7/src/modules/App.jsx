import { useState } from 'react'
import { defaultData } from '../initialData.js'
import { loadData, saveData} from '../keepStates.js'
// Modulos
import Cabecera from './Cabecera.jsx'
import TurnShow from './TurnShow.jsx'
import Combatiente from './Combatiente.jsx'
import Poderes from './Poderes.jsx'
import Armas from './Armas.jsx'
import FormEditPlayer from './FormEditPlayer.jsx'
import Pie from './Pie.jsx'
import TurnReset from './TurnReset.jsx'
// CSS
import '../css/App.css'
// imagenes


function App() {
  // ESTADOS
  const [data, setData] = useState(loadData(defaultData))
  const [showFormPlayer, setShowFormPlayer] = useState(false)
  // LOGICA
  function updateData (newData) {
    saveData(newData)
    setData(newData)    
  }
  // Cierre de formularios
  function closeFormPlayer () { setShowFormPlayer(false); }

  // Muestra de formualrios
  function openFormPlayer () { setShowFormPlayer(true); }

  return ( 
    <>
      <Cabecera />
      <div className='contenedor'>
        <TurnShow Data={data} UpdateData={updateData} />
        <Combatiente Data={data} UpdateData={updateData} onClickTitle={openFormPlayer}/>
        <Poderes Data={data} UpdateData={updateData}/>
        <Armas Data={data} UpdateData={updateData} />
        <TurnReset Data={data} UpdateData={updateData} />
      </div>
      <Pie />
      {showFormPlayer?<FormEditPlayer onClose={closeFormPlayer} 
                                      Data={data} 
                                      UpdateData={updateData}/>:undefined}
    </>
  )
}

export default App
