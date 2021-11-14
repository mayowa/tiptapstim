import './css/styles.css'
import { Application } from '@hotwired/stimulus'

import HelloController from './controllers/hello_controller'

let Stimulus = Application.start()
// @ts-ignore
window.Stimulus = Stimulus

Stimulus.register('hello', HelloController)
