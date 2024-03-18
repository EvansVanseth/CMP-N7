/* eslint-disable react/prop-types */
import { useState } from 'react'
import FormQuestion from './FormQuestion.jsx'
import '../css/TurnControl.css'

function TurnReset( { Data, UpdateData } ) {
   const [showFQ, setShowFQ] = useState(false)
  /** Finalizar combate */
  function finishCombat () {setShowFQ(true)}  
  function onClose () {setShowFQ(false)}
  function onOK () {
    const newData = {...Data}
    newData.turn = 0
    newData.inTurn = false
    newData.shldValue = Data.shldTotal
    newData.shldBroke = 0
    newData.rcPIndex = -1
    newData.rcPTurns = 0
    UpdateData(newData)
    setShowFQ(false)
  }

  return (
    <div className="turn-finish">
      <button className='btn' onClick={finishCombat}>
        TERMINAR COMBATE
      </button>
      <p>Finalizar el combate reseteará las barreras al 100% y pondrá el contador de turnos a 0</p>
      {showFQ?<FormQuestion title='Terminar combate'
            question='¿Estas seguro/a que quieres terminar el combate?'
            onClose={onClose} onOK={onOK}/>:undefined}
    </div>
  )
}

export default TurnReset