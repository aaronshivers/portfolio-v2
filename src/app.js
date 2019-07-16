import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import 'bootstrap'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import { fab } from '@fortawesome/fontawesome-free'

render(<App />, document.getElementById('app'))
