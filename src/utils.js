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
        newItem.url = item.url
        newList.push(newItem)
    })
    return newList
}
