/**
 * Created by tonychen on 16/12/31.
 */
import axios from 'axios'

const apiEndPoint = {
  login: 'http://test.boostfield.com:8888/api/login'
}
const user = {
  login: function (username, password, success, error) {
    axios.post(apiEndPoint.login, {username: username, password: password})
    .then(success)
    .catch(error)
  }
}

export default user
