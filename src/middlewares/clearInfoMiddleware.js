import { clearInfo } from "../actions/auth"


const clearInfoMiddleware = store => next => action => {
  if(action.type === "@@router/LOCATION_CHANGE" && action.payload.pathname !== '/' && store.getState().auth.info ) {
    return store.dispatch(clearInfo())
  }
  next(action)
}

export default clearInfoMiddleware