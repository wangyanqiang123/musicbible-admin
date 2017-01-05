/**
 * Created by qky on 2017/1/5.
 */
import axios from 'axios'
const OSS = {
  fetchPolicy: function (success, error) {
    axios.get('http://www.musicbible.com/api/v1/records/AliOSSPolicy').then(success).catch(error)
  }
}
export default OSS
