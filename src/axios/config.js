const devBaseUrl = 'http://api.k780.com/'
const proBaseUrl = 'http:xxx//xxxx.xx.com'

// process.env可以用来区分开发还是生产环境
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseUrl : proBaseUrl

export const TIMEOUT = 5000