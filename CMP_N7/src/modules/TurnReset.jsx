import '../css/TurnControl.css'

// eslint-disable-next-line react/prop-types
function TurnReset( { Data, UpdateData } ) {
  // const [count, setCount] = useState(0)
  let dblClickTime = 300
  let inTime = false
  let timeID = undefined
  function oneClick () {
    if (inTime) {
      inTime = false
      clearTimeout(timeID)
      finishCombat()
    } else {
      inTime = true
      timeID = setTimeout(()=>{
        inTime = false
      }, dblClickTime)
    }
  }
  /** Finalizar combate */
  function finishCombat () {
    const newData = {...Data}
    newData.turn = 0
    newData.inTurn = false
    UpdateData(newData)
  }  

  return (
    <div className="turn-finish">
      <button onClick={oneClick}>
        TERMINAR COMBATE
      </button>
      <p>Para finalizar el combate se debe pulsar el botón dos veces seguidas en menos de {dblClickTime/1000} segundos</p>
    </div>
  )
}

export default TurnReset