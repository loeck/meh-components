import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import noop from 'lodash/noop'

const Button = styled.div`
  display: inline-flex;
  cursor: pointer;
`

Button.defaultProps = {
  onClick: noop,
}

Button.propTypes = {
  onClick: PropTypes.func,
}

export default props => (
  <Button
    onClick={props.onClick}
    onKeyUp={e => [13, 32].includes(e.keyCode) && props.onClick(e)} // Press enter or space
    role="button"
    tabIndex={0}
    {...props}
  />
)
