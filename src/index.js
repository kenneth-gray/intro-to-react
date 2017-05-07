import React from 'react'
import { render as reactDomRender } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import 'normalize.css/normalize.css'

import App from './App'

const rootElement = document.getElementById('app')

const render = Component => {
  reactDomRender(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootElement
  )
}

render(App)

if (module.hot) module.hot.accept('./App', () => render(App))
