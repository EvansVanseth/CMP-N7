/* eslint-disable react/prop-types */
import '../css/TurnControl.css'

function TurnShow({Data, Start, Finish}) {
  // const [count, setCount] = useState(0)

  return (
    <div className="turn-control">
      <button className={Data.inTurn?'tc-btn-disabled':''}
              onClick={!Data.inTurn?Start:undefined}>
        EMPEZAR
      </button>
      <div>
        TURNO: <span>{Data.turn}</span>
      </div>
      <button className={!Data.inTurn?'tc-btn-disabled':''}
              onClick={Data.inTurn?Finish:undefined}>
        TERMINAR
      </button>
    </div>
  )
}

export default TurnShow