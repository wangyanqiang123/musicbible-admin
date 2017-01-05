/**
 * Created by tonychen on 17/1/5.
 */
import axios from 'axios'
import buildUrl from 'build-url'
import configs from '../config'

const apiEndPoint = {
  list: buildUrl(configs.serverUrl, {path: 'console/v0/taxonomy/group/list'})
}
const taxonomy = {
  list: function (success, error) {
    axios.get(apiEndPoint.list).then(success).catch(error)
  }
}
export default taxonomy
