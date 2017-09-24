import React from 'react'
import { graphql } from 'react-apollo'

export const decorate = (Component, ...decorators) => {
  return decorators.reduce((c, deco) => deco(c), Component)
}

export const withLoading = Component => {
  return props => {
    const data = props.data
    if (data.loading) return <div>Loading...</div>
    if (data.error) return <div>{data.error}</div>
    return <Component {...props}/>
  }
}

export const withQuery = (query, options) => {
  return Component => decorate(Component, withLoading, graphql(query, options))
}

export const customizeProps = (props, customProps) => {
  return Object.assign({}, props, customProps)
}

const withCustomPropsFn = customPropsFn => {
  return Component => {
    return props => <Component {...(customizeProps(props, customPropsFn(props)))}/>
  }
}

// a decorator to append customzied props
// usage: withCustomProps(customProps)(SomeComponent)
export const withCustomProps = customProps => {
  if (customProps instanceof Function) return withCustomPropsFn(customProps)
  return Component => {
    return props => <Component {...(customizeProps(props, customProps))}/>
  }
}
