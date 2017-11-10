import { REDIRECT } from "../middlewares/redirect"

export default function redirect(state={}, action) {
  switch(action.type) {
    case REDIRECT:
      return {
        path:action.path
      }
    default:
      return {}
  }
}