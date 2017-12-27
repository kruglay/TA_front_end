import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store, { history } from './store/configureStore'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import { Route, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import Header from './components/Header'


const authPaths = ['/posts/new']



const onEnter = (props) => {
  if (window.localStorage.getItem('token') === null &&
    authPaths.includes(props.location.pathname)) {
    return <Redirect to='/sessions/new'/>
  } else {
    return <App history={ history } {...props}/>
  }
}

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Header/>
      <ConnectedRouter history={history}>
        <Route path="/" render={props => onEnter(props)}/>
      </ConnectedRouter>
    </div>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
