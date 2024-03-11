/* eslint-disable react/prop-types */
import '../css/FText.css'

function FText( { caption } ) {
  // const [count, setCount] = useState(0)

  return (
    <p className='form-details-text'>{caption}</p>
  )
}

export default FText