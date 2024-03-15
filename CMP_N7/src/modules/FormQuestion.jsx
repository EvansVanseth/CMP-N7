/* eslint-disable react/prop-types */
import Form from './Form.jsx'
import FTitle from './FTitle.jsx'
import FText from './FText.jsx'
import FButton from './FButton.jsx'

function FormQuestion({ title, question, onClose, onOK }) {
  return (
    <Form>
      <FTitle caption={title} closeForm={onClose} closeable={false}/>
      <FText caption={question} />
      <FButton keyID='form-question-btn-' texts={['NO','SI']} onClicks={[onClose,onOK]} />
    </Form>
  )
}

export default FormQuestion