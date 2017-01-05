/**
 * Created by tonychen on 16/12/31.
 */
import axios from 'axios'
import buildUrl from 'build-url'
import configs from '../config'
const apiEndPoint = {
  login: buildUrl(configs.serverUrl, {path: 'v0/login'})
}
var User
var GetUser = function () {
  return User || JSON.parse(localStorage.getItem('User'))
}
const user = {
  login: function (username, password, success, error) {
    axios.post(apiEndPoint.login, {username: username, password: password})
    .then(success)
    .catch(error)
  },
  setUser: function (user) {
    User = user
    localStorage.setItem('User', JSON.stringify(user))
  },
  hasAuthed: function () {
    if (User) {
      return User.token
    }
    const userstr = localStorage.getItem('User')
    if (!userstr) {
      return false
    }
    var user = JSON.parse(userstr)
    return !user.token
  },
  getUser: GetUser,
  getAuthHeader () {
    return {
      'Authorization': 'Bearer' + GetUser().token
    }
  }
}

export default user
