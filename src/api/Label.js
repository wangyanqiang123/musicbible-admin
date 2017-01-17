/**
 * Created by qky on 2017/1/16.
 */
import axios from 'axios'
import buildUrl from 'build-url'
import configs from '../config'
const apiList = {
  list: buildUrl(configs.serverUrl, {path: 'console/v0/publisher/list'})
}

const label = {
  list: function (params, resp, error) {
    axios.get(apiList.list, {params: params}).then(resp).catch(error)
  }
}

export default label
