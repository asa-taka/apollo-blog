import React from 'react'
import { graphql } from 'react-apollo'
import BaseForm from 'react-jsonschema-form'
import * as omitEmpty from 'omit-empty'
import { withCustomProps } from './utils'

export const Form = withCustomProps(props => ({

  // extract formData from original payload into new payload,
  onSubmit: event => props.onSubmit(event.formData)

}))(BaseForm)

export default Form
