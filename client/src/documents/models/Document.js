import * as Base from '../../common/Form'
import { withCustomProps } from '../../common/utils'

export const typeToInput = data => {
  return {
    title: data.title,
    body: data.body,
  }
}

export const JSON_SCHEMA = {
  type: 'object',
  properties: {
    title: {
      type: 'string'
    },
    body: {
      type: 'string'
    },
  }
}

export const UI_SCHEMA = {
  body: {
    'ui:widget': 'textarea'
  }
}

// a decorator to append `Document` model spedific schemas,
// for Form component
export const withSchemaForForm = withCustomProps({
  schema: JSON_SCHEMA,
  uiSchema: UI_SCHEMA,
})

export const Form = withSchemaForForm(Base.Form)
