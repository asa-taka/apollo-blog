import BaseForm from 'react-jsonschema-form'
import { withCustomProps } from './utils'

export const Form = withCustomProps(props => ({

  // extract formData from original payload into new payload,
  onSubmit: event => props.onSubmit(event.formData)

}))(BaseForm)

export default Form
