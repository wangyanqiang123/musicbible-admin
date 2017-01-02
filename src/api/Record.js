/**
 * Created by tonychen on 17/1/2.
 */
import axios from 'axios'

const record = {
  list: function (pageNumber, pageSize, success, error) {
    axios.get('http://www.musicbible.com/api/v1/records/list', {params: {page: pageNumber, pageSize: pageSize}}).then(success).catch(error)
  }
}

export default record
