/**
 * Created by qky on 2017/1/4.
 */
let env = process.env.NODE_ENV || "dev";

let configs = {
  'dev': {
    homeUrl: '/',
    serverUrl: 'http://114.55.65.35:9999/api',
    uploadServerUrl: "http://hifiimg.img-cn-hangzhou.aliyuncs.com",
    mediaUrl: "http://hifimedia.oss-cn-hangzhou.aliyuncs.com"
  },
  'production': {
    homeUrl: '/',
    serverUrl: 'https://preview.musicbible.com/api',
    uploadServerUrl: "http://hifiimg.img-cn-hangzhou.aliyuncs.com",
    mediaUrl: "http://hifimedia.oss-cn-hangzhou.aliyuncs.com"
  }
};

export default configs[env];
