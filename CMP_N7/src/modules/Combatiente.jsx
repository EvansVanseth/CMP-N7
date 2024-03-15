/* eslint-disable react/prop-types */
import Marc from './Marc.jsx'
import Tupla from './Tupla.jsx'
import BrokedShields from './BrokedShields.jsx'

import iconVida from '../assets/life.svg'
import iconEscu from '../assets/shield.svg'

function Combatiente( { Data, UpdateData, onClickTitle } ) {
  // const [count, setCount] = useState(0)

  /** Aumentar vida */
  function lifeUp () {
    const newData = {...Data}
    newData.lifeValue = Math.min(Data.lifeValue + 1, Data.lifeTotal)
    UpdateData(newData)   
  }
  /** Reducir vida */
  function lifeDn () {
    const newData = {...Data}
    if (Data.shldValue===0) newData.shldBroke = 2
    newData.lifeValue = Math.max(Data.lifeValue - 1, -10)
    UpdateData(newData)  
  }
  /** Aumentar escudos */
  function shldUp () {
    const newData = {...Data}
    newData.shldValue = Math.min(Data.shldValue + 1, Data.shldTotal)
    UpdateData(newData) 
  }
  /** Reducir escudos */
  function shldDn () {
    const newData = {...Data}
    if (Data.shldValue === 1) {
      newData.shldBroke = 2;
    }
    newData.shldValue = Math.max(Data.shldValue - 1, 0)
    UpdateData(newData)
  }

  return (
    <Marc Title='COMBATIENTE' 
          Jugador= {{ nombre: Data.playerName,
                      editar: onClickTitle }} >
      {Data.shldValue===0?
        <BrokedShields Data={Data} UpdateData={UpdateData}
                       icon = {{ alt: 'icono-escu',
                                 src: iconEscu }}/>:
        <Tupla valor={Data.shldValue} total={Data.shldTotal}
                      bp={Data.shldBP} re={Data.shldRE} blifeShld={true}
                      btnUp={shldUp} btnDn={shldDn}
                      icon = {{ alt: 'icono-escu',
                                src: iconEscu }} />
      }
      <Tupla valor={Data.lifeValue} total={Data.lifeTotal}
              bp={Data.lifeBP} re={Data.lifeRE}
              btnUp={lifeUp} btnDn={lifeDn}
              icon = {{ alt: 'icono-vida',
              src: iconVida }} />
    </Marc>
  )
}

export default Combatiente