/**
 * Created by tonychen on 16/12/31.
 */
import axios from 'axios'
import buildUrl from 'build-url'
import configs from '../config'
const apiEndPoint = {
  login: buildUrl(configs.serverUrl, {path: 'api/v0/login'}),
  logout: buildUrl(configs.serverUrl, {path: 'api/v0/logout'})
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
  logout: function (res, err) {
    axios.post(apiEndPoint.logout)
      .then(res)
      .catch(err)
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
    return user.token !== null || user.token !== undefined
  },
  getUser: GetUser,
  getAuthHeader () {
    return GetUser().token
  },
  removeUser () {
    localStorage.removeItem('User')
  }
}

export default user
