/* eslint-disable react/prop-types */
import { useState } from 'react'
import Marc from './Marc.jsx'
import Poder from './Poder.jsx'
import FormPoder from './FormPoder.jsx'
import iconPoderes from '../assets/poderes.svg'

function Poderes ({Data, UpdateData}) {
  const [showFPoder, setShowFPoder] = useState(false)
  const [selPoder, setSelPoder] = useState(undefined)
  const [idxPoder, setIdxPoder] = useState(undefined)

  function onAddPower () { 
    setSelPoder(undefined); 
    setIdxPoder(undefined); 
    setShowFPoder(true); 
  }
  function onEditPower (poder, indice) { 
    setSelPoder(poder); 
    setIdxPoder(indice); 
    setShowFPoder(true); 
  }
  function onActivePower (poder, indice) { 
    setSelPoder(poder); 
    setIdxPoder(indice);
    const newData = {...Data}
    newData.rcPIndex = indice
    newData.rcPTurns = poder.recarga
    UpdateData(newData)
  }
  function onCloseFP() { setShowFPoder(false); }

  return (
    <Marc Title='PODERES' 
          Logo= {{ alt: 'icono-poderes',
                  src: iconPoderes }} 
          Boton= {{ text: '+',
                    action: onAddPower }} >
      {Data.powers.map((power, index) => {
        const localKey = 'power-'+index
        return (<Poder key={localKey} 
                       oPoder={power} 
                       poderIndex={index}
                       Data={Data}
                       bDisabled={(Data.rcPIndex!==index && Data.rcPIndex!==-1) || !Data.inTurn}
                       bRecharging={Data.rcPIndex===index}
                       onEdit={onEditPower}
                       onActivate={onActivePower}/>)
      })}
      {showFPoder?<FormPoder onClose={onCloseFP} 
                             oPoder={selPoder}
                             poderIndex={idxPoder}
                             Data={Data} 
                             UpdateData={UpdateData}/>:undefined}
    </Marc>
  )
}

export default Poderes