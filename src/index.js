import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store, { history } from './store/configureStore'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider store={store}>
    <App history={ history }/>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
