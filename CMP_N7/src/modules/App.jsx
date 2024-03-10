import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { loadData, saveData } from '../keepStates.js'
import Cabecera from './Cabecera.jsx'
import TurnShow from './TurnShow.jsx'
import Marc from './Marc.jsx'
import Pie from './Pie.jsx'
import TurnReset from './TurnReset.jsx'
import '../css/App.css'

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
                          editar: ()=>{console.log('hello!!')} }} />
        <Marc Title='PODERES' 
              Logo= {{ alt: 'icono-poderes',
                       src: './src/assets/icons/life.svg' }} 
              Boton= {{ text: '+',
                        action: undefined }} />
        <Marc Title='ARMAS' 
              Logo= {{ alt: 'icono-armas',
                       src: './src/assets/gun.svg' }} 
              Boton= {{ text: '+',
                        action: undefined }} />                        
        <TurnReset Reset={finishCombat} />
      </div>
      <Pie />
    </>
  )
}

export default App
