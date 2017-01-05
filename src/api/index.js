/**
 * Created by tonychen on 17/1/5.
 */
import axios from 'axios'
import user from './User'
const config = function () {
  axios.interceptors.request.use(config => {
    console.log(config)
    if (user.hasAuthed()) {
      config.headers = user.getAuthHeader()
    }
    return config
  }, error => {
    return Promise.reject(error)
  })
}
export default {
  config: config
}
