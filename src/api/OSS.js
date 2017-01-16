/**
 * Created by qky on 2017/1/5.
 */
import axios from 'axios'
import buildUrl from 'build-url'
import configs from '../config'
const OSS = {
  host: configs.uploadServerUrl,
  fetchPolicy: function (success, error) {
    axios.get(buildUrl(configs.serverUrl, {path: 'console/v0/oss/img'})).then(success).catch(error)
  }
}
export default OSS
