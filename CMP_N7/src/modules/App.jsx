import { useState } from 'react'
import { loadData, saveData } from '../keepStates.js'
// Modulos
import Cabecera from './Cabecera.jsx'
import TurnShow from './TurnShow.jsx'
import Combatiente from './Combatiente.jsx'
import Marc from './Marc.jsx'
import FormEditPlayer from './FormEditPlayer.jsx'
import Pie from './Pie.jsx'
import TurnReset from './TurnReset.jsx'
// CSS
import '../css/App.css'
// imagenes
import iconPoderes from '../assets/poderes.svg'
import iconArmas from '../assets/gun.svg'


function App() {
  // valores por defecto de la aplicación
  const defaultData = {
    turn: 0,
    inTurn: false,
    playerName: 'Jugador',
    lifeValue: 20,
    lifeTotal: 20,
    lifeBP: 0,
    lifeRE: 0,
    shldValue: 20,
    shldTotal: 20,
    shldBP: 0,
    shldRE: 2
  }
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
        <Marc Title='PODERES' 
              Logo= {{ alt: 'icono-poderes',
                       src: iconPoderes }} 
              Boton= {{ text: '+',
                        action: undefined }} />
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
