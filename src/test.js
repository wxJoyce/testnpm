import CommonLogin from 'gis-common-login'
import { APP_ID, SIGN_SECRET } from './config.js'

let requestUrl = 'https://dev.godouav.com/api/sso';
let res =await CommonLogin(requestUrl,'wx01','123456','',APP_ID,SIGN_SECRET)
console.log('最终请求结果', res)