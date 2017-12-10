import React from 'react'

import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import Button from './'

storiesOf('Button', module).add('default', () => (
  <Button onClick={action('on-click')}>Click!</Button>
))
