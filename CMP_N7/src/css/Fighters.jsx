/* eslint-disable react/prop-types */
import { useState } from 'react'
import '../css/Fighters.css'

import Cabecera from "../modules/Cabecera"
import Marc from "../modules/Marc"

import iconComb from '../assets/helmet.svg'
import FormQuestion from '../modules/FormQuestion'

function Fighters ({AppData, onAddFighter, updateSelFighter, onDeleteFighter}) {
  const [showFQ, setShowFQ] = useState(false)
  const [idxSel, setIdxSel] = useState(-1)
  function onShowFQ (newSel) { 
    setIdxSel(newSel)
    setShowFQ(true) }
  function onCloseFQ () { setShowFQ(false) }
  function onOKFQ () { 
    if(AppData.fighters.length === 1) return;
    onDeleteFighter(idxSel)
    setShowFQ(false) 
  }
  return (
    <>
      <Cabecera />
      <div className='contenedor'>
        <Marc Title='COMBATIENTES' 
              Logo= {{ alt: 'icono-poderes',
                src: iconComb }} 
              Boton= {{ text: '+',
                  action: onAddFighter }} >
          {AppData.fighters.map((fighter, idx)=>{
            return (
              <div key={`fighters-${idx}`} 
                   className='fighter-mark'>
                <p className='fighter-name'
                   onClick={()=>{updateSelFighter(idx)}}>
                    {fighter.playerName}</p>
                <button className='btn fighter-button'
                        onClick={()=>{onShowFQ(idx)}}>BORRAR</button>
              </div>
            )  
          } ) }
        </Marc >
      </div>
      {(showFQ?<FormQuestion title='Borrar combatiente'
                               question='¿Estas seguro/a que deseas eliminar el combatiente?'
                               onClose={onCloseFQ}
                               onOK={onOKFQ} />
                               :undefined)}
    </>
  )
}

export default Fighters