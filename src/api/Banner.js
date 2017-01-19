/**
 * Created by qky on 2017/1/19.
 */
import axios from 'axios'
import buildUrl from 'build-url'
import configs from '../config'
const apiList = {
  list: buildUrl(configs.serverUrl, {path: 'console/v0/banner/list'}),
  new: buildUrl(configs.serverUrl, {path: 'console/v0/banner'})
}

const banner = {
  list: function (params, resp, error) {
    axios.get(apiList.list, {params: params}).then(resp).catch(error)
  },
  create: function (params, res, err) {
    axios.post(apiList.new, params)
      .then(res)
      .catch(err)
  }
}

export default banner
