/**
 * Created by qky on 2017/1/7.
 */
/* global moment */
export function setTime (orginalTime, format) {
  var time = ''
  let f = format || 'YYYY-MM-DD HH:mm'
  if (orginalTime && orginalTime !== '') {
    time = moment(orginalTime).format(f)
  }
  return time
}
