/* eslint-disable react/prop-types */
import '../css/TurnControl.css'

function ChangeFighter( { updateSelFighter } ) {
  
  return (
    <div className="turn-finish">
      <button className='btn' onClick={()=>{updateSelFighter(-1)}}>
        CAMBIAR COMBATIENTE
      </button>
    </div>
  )
}

export default ChangeFighter