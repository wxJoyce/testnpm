import {commonLogin} from 'gis-login-npm'
import { APP_ID, SIGN_SECRET } from './config.js'

let requestUrl = 'https://drone.godouav.com/api/sso'
commonLogin(requestUrl,'wx01','123456','',APP_ID,SIGN_SECRET)