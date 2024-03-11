/* eslint-disable react/prop-types */
import '../css/TurnControl.css'

function TurnShow({Data, UpdateData}) {
  /** Iniciar turno */
  function startTurn () {
    const newData = {...Data}
    newData.inTurn = true
    newData.turn = Data.turn + 1
    UpdateData(newData)
  }
  /** Finalizar turno */
  function finishTurn () {
    const newData = {...Data}
    newData.inTurn = false
    UpdateData(newData)
  }

  return (
    <div className="turn-control">
      <button className={Data.inTurn?'tc-btn-disabled':''}
              onClick={!Data.inTurn?startTurn:undefined}>
        EMPEZAR
      </button>
      <div>
        TURNO: <span>{Data.turn}</span>
      </div>
      <button className={!Data.inTurn?'tc-btn-disabled':''}
              onClick={Data.inTurn?finishTurn:undefined}>
        TERMINAR
      </button>
    </div>
  )
}

export default TurnShow