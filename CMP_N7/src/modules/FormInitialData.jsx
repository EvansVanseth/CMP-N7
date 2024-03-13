/* eslint-disable react/prop-types */
import Form from './Form.jsx'
import FTitle from './FTitle.jsx'
import FText from './FText.jsx'
import FButton from './FButton.jsx'

function FormInitialData({ onClose, onOK }) {
  return (
    <Form>
      <FTitle caption='Restaurar datos' closeForm={onClose} closeable={false}/>
      <FText caption='¿Estas seguro/a que quieres restaurar los datos iniciales?' />
      <FButton keyID='form-initial-data-' texts={['NO','SI']} onClicks={[onClose,onOK]} />
    </Form>
  )
}

export default FormInitialData