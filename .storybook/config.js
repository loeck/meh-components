import { addDecorator, configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { withKnobs } from '@storybook/addon-knobs'

const req = require.context('../src', true, /stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

setOptions({
  downPanelInRight: true,
})

addDecorator(withKnobs)

configure(loadStories, module)
