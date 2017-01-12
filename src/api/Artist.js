/**
 * Created by qky on 2017/1/9.
 */
import axios from 'axios'
import buildUrl from 'build-url'
import configs from '../config'
const apiEndPoint = {
  list: buildUrl(configs.serverUrl, {path: 'console/v0/artist/list'}),
  new: buildUrl(configs.serverUrl, {path: 'console/v0/artist'})
}

const artist = {
  list: function (params, res, err) {
    axios.get(apiEndPoint.list, {params: params})
      .then(res)
      .catch(err)
  }
}

export default artist
