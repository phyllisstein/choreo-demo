import 'yui/cssreset/cssreset.css'
import { App } from 'components/app/app.development'
import ReactDOM from 'react-dom'

const render = () => {
  const main = document.querySelector('main')
  ReactDOM.render(<App />, main)

  if (module.hot) {
    module.hot.accept(['/'], () => {
      const { App } = require('components/app')
      ReactDOM.render(<App />, main)
    })
  }
}

window.addEventListener('load', ev => {
  console.log('got load event: ', ev)
  render()
})
