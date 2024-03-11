import { useState } from 'react'
import { loadData, saveData } from '../keepStates.js'
// Modulos
import Cabecera from './Cabecera.jsx'
import TurnShow from './TurnShow.jsx'
import Marc from './Marc.jsx'
import Tupla from './Tupla.jsx'
import Pie from './Pie.jsx'
import TurnReset from './TurnReset.jsx'
// CSS
import '../css/App.css'
// imagenes
import iconPoderes from '../assets/icons/life.svg'
import iconArmas from '../assets/gun.svg'

function App() {
  // valores por defecto de la aplicación
  const defaultData = {
    turn: 0,
    inTurn: false,
    playerName: 'Jugador'
  }
  // ESTADOS
  const [data, setData] = useState(loadData(defaultData))
  // LOGICA
  /** Iniciar turno */
  function startTurn () {
    const newData = {...data}
    newData.inTurn = true
    newData.turn = data.turn + 1
    saveData(newData)
    setData(newData)
  }
  /** Finalizar turno */
  function finishTurn () {
    const newData = {...data}
    newData.inTurn = false
    saveData(newData)
    setData(newData)
  }
  /** Finalizar combate */
  function finishCombat () {
    const newData = {...data}
    newData.turn = 0
    newData.inTurn = false
    console.log(newData)
    saveData(newData)
    setData(newData)
  }

  return ( 
    <>
      <Cabecera />
      <div className='contenedor'>
        <TurnShow Data={data} Start={startTurn} Finish={finishTurn} />
        <Marc Title='COMBATIENTE:' 
              Jugador= {{ nombre: data.playerName,
                          editar: ()=>{console.log('hello!!')} }} >
          <Tupla titulo='ESCU' valor='23' total='30' bp='0'/>
          <Tupla titulo='VIDA' valor='46' total='54' bp='0.5'/>
        </Marc>
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
        <TurnReset Reset={finishCombat} />
      </div>
      <Pie />
    </>
  )
}

export default App
