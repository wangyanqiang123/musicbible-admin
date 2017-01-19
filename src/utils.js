/**
 * Created by qky on 2017/1/7.
 */
/* global moment */
import Config from './config'
var uploadServerUrl = Config.uploadServerUrl
export function setTime (orginalTime, format) {
    var time = ''
    let f = format || 'YYYY-MM-DD HH:mm'
    if (orginalTime && orginalTime !== '') {
        time = moment(orginalTime).format(f)
    }
    return time
}
export function revertListToName (listOption) {
    let newList = []
    listOption.forEach(function (item) {
        let newItem = {}
        newItem.name = item.id
        newItem.url = item.url
        newList.push(newItem)
    })
    return newList
}
export function revertListToId (listOption) {
    let newList = []
    listOption.forEach(function (item) {
        let newItem = {}
        newItem.id = item.name
        newItem.url = excludeImagePrefix(item.url)
        newList.push(newItem)
    })
    return newList
}

function excludeImagePrefix (url) {
  return url.replace(uploadServerUrl + '/', '')
}

export function setImageUrl (orginalUrl, type) {
    var url = ''
    var endFix = '@!thumbnail'
    if (!orginalUrl || orginalUrl === '') {
        url = ''
    } else if (orginalUrl.lastIndexOf('http', 0) === 0) {
      return orginalUrl
    } else {
      if (type === 'origin') {
        endFix = '@!origin'
      } else if (type === 'diskCover') {
        endFix = '@!diskCover'
      }
      if (orginalUrl.substr(0, 1) !== '/') {
        orginalUrl = '/' + orginalUrl
      }
      url = uploadServerUrl + orginalUrl + endFix
    }
    return url
}

export function formatDate (now) {
  var year = now.getFullYear()
  var month = now.getMonth() + 1
  var date = now.getDate()
  var hour = now.getHours()
  var minute = now.getMinutes()
  var second = now.getSeconds()
  return year + '' + addZero(month) + '' + addZero(date) + '' + addZero(hour) + '' + addZero(minute) + '' + addZero(second)
}
export function addZero (number) {
  return number >= 10 ? number : '0' + number
}
