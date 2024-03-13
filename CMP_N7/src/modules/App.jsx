import { useState } from 'react'
import { defaultData } from '../initialData.js'
import { loadData, saveData} from '../keepStates.js'
// Modulos
import Cabecera from './Cabecera.jsx'
import TurnShow from './TurnShow.jsx'
import Combatiente from './Combatiente.jsx'
import Marc from './Marc.jsx'
import Poderes from './Poderes.jsx'
import FormEditPlayer from './FormEditPlayer.jsx'
import Pie from './Pie.jsx'
import TurnReset from './TurnReset.jsx'
// CSS
import '../css/App.css'
// imagenes
import iconArmas from '../assets/gun.svg'


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
        <Marc Title='ARMAS' 
              Logo= {{ alt: 'icono-armas',
                       src: iconArmas }} 
              Boton= {{ text: '+',
                        action: undefined }} />                        
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
