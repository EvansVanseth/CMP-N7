/* eslint-disable react/prop-types */
import Marc from './Marc.jsx'
import Tupla from './Tupla.jsx'

import iconVida from '../assets/life.svg'
import iconEscu from '../assets/shield.svg'

function Combatiente( { Data, UpdateData, onClickTitle } ) {
  // const [count, setCount] = useState(0)

  /** Aumentar vida */
  function lifeUp () {
    const newData = {...Data}
    newData.lifeValue = Data.lifeValue + 1
    UpdateData(newData)   
  }
  /** Reducir vida */
  function lifeDn () {
    const newData = {...Data}
    newData.lifeValue = Math.max(Data.lifeValue - 1, -10)
    UpdateData(newData)  
  }
  /** Aumentar escudos */
  function shldUp () {
    const newData = {...Data}
    newData.shldValue = Data.shldValue + 1
    UpdateData(newData) 
  }
  /** Reducir escudos */
  function shldDn () {
    const newData = {...Data}
    newData.shldValue = Math.max(Data.shldValue - 1, 0)
    UpdateData(newData)
  }

  return (
    <Marc Title='COMBATIENTE:' 
          Jugador= {{ nombre: Data.playerName,
                      editar: onClickTitle }} >
      <Tupla valor={Data.shldValue} total={Data.shldTotal}
              bp={Data.shldBP} re={Data.shldRE} blifeShld={true}
              btnUp={shldUp} btnDn={shldDn}
              icon = {{ alt: 'icono-escu',
              src: iconEscu }} />
      <Tupla valor={Data.lifeValue} total={Data.lifeTotal}
              bp={Data.lifeBP} re={Data.lifeRE}
              btnUp={lifeUp} btnDn={lifeDn}
              icon = {{ alt: 'icono-vida',
              src: iconVida }} />
    </Marc>
  )
}

export default Combatiente