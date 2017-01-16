/**
 * Created by qky on 2017/1/4.
 */
let env = process.env.NODE_ENV || 'development'
let configs = {
  'development': {
    homeUrl: '/',
    serverUrl: 'http://120.25.204.174:8888',
    uploadServerUrl: 'http://hifiimg.img-cn-hangzhou.aliyuncs.com',
    mediaUrl: 'http://hifimedia.oss-cn-hangzhou.aliyuncs.com'
  },
  'production': {
    homeUrl: '/',
    serverUrl: 'https://preview.musicbible.com/api',
    uploadServerUrl: 'http://hifiimg.img-cn-hangzhou.aliyuncs.com',
    mediaUrl: 'http://hifimedia.oss-cn-hangzhou.aliyuncs.com'
  }
}

export default configs[env]
