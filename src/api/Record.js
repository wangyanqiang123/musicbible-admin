/**
 * Created by tonychen on 17/1/2.
 */
import axios from 'axios'

const record = {
  list: function (params, success, error) {
    axios.get('http://www.musicbible.com/api/v1/records/list', {params: params}).then(success).catch(error)
  }
}

export default record
