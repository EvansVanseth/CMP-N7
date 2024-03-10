import '../css/TurnControl.css'

// eslint-disable-next-line react/prop-types
function TurnReset({Reset}) {
  // const [count, setCount] = useState(0)
  let dblClickTime = 300
  let inTime = false
  let timeID = undefined
  function oneClick () {
    if (inTime) {
      inTime = false
      clearTimeout(timeID)
      Reset()
    } else {
      inTime = true
      timeID = setTimeout(()=>{
        inTime = false
      }, dblClickTime)
    }
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