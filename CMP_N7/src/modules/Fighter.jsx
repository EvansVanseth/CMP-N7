/* eslint-disable react/prop-types */
import { useState } from 'react'
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
import ChangeFighter from './ChangeFighter.jsx'
// imagenes

function Fighter({data, updateData, updateSelFighter}) {
  // ESTADOS
  const [showFormPlayer, setShowFormPlayer] = useState(false)
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
        <ChangeFighter updateSelFighter={updateSelFighter} />
      </div>
      <Pie />
      {showFormPlayer?<FormEditPlayer onClose={closeFormPlayer} 
                                      Data={data} 
                                      UpdateData={updateData}/>:undefined}
    </>
  )
}

export default Fighter
