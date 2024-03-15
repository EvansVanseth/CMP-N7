/* eslint-disable react/prop-types */
import { useState } from "react"
import Marc from "./Marc"
import Cargadores from "./Cargadores"
import Arma from "./Arma"
import FormArma from "./FormArma.jsx"
import iconArmas from '../assets/gun.svg'


function Armas ({ Data, UpdateData }) {
  const [showFEA, setShowFEA] = useState(false)
  const [selArma, setSelArma] = useState(undefined)
  const [idxArma, setIdxArma] = useState(undefined)
  
  function onAddArma () { 
    setSelArma(undefined); 
    setIdxArma(undefined); 
    setShowFEA(true); 
  }
  function onEditArma (arma, indice) { 
    setSelArma(arma); 
    setIdxArma(indice); 
    setShowFEA(true); 
  }
  function onCloseFA (){ setShowFEA(false) }


  return (
    <Marc Title='ARMAS' 
          Logo= {{ alt: 'icono-armas',
                   src: iconArmas }} 
          Boton= {{ text: '+',
                    action: onAddArma }} >
      <Cargadores Data={Data} UpdateData={UpdateData} />
      {Data.guns.map((arma, index)=>{
        const localKey = 'arma-'+index
        return (
          <Arma key={localKey} 
                oArma={arma}
                idxArma={index} 
                onEdit={onEditArma}
                Data={Data} 
                UpdateData={UpdateData} />
          )  
        })}
    {showFEA?<FormArma onClose={onCloseFA}
                       oArma={selArma}
                       armaIndex={idxArma}
                       Data={Data} 
                       UpdateData={UpdateData}/>:undefined}
    </Marc> 
  )
}

export default Armas