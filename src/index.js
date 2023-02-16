import { APP_ID, SIGN_SECRET } from './config.js'
import Rsa from './plugins/rsa.js'
import { sha256 } from 'js-sha256'
import axios from "axios"
let requestUrl = 'https://dev.godouav.com/api/sso'
function commonLogin(baseUrl,accounts,password,vertifyCode,appid,sign_secret){
    let passwordSec = Rsa.rsaPublicData(password);
    let timestamp = Math.round(new Date())
    let sign = ''
    if(appid && sign_secret){
        sign = sha256(appid + timestamp + accounts + passwordSec + sign_secret)
    }
    let params = {
        accounts: accounts,
        passwd: passwordSec,
        verifyInput: vertifyCode,
    }
    axios({
        url: baseUrl+ '/login',
        method: 'post',
        data: params,
        headers:{
            'Content-Type':'application/json',
            'appid': appid?appid:APP_ID,
            'timestamp': timestamp,
            'sign': sign
        }

    }).then(res=>{
        // return res.data
        console.log(res.data)
    }).catch(err=>{
        console.log(err)
    })
}
commonLogin(requestUrl,'wx01','123456','',APP_ID,SIGN_SECRET)
export default {commonLogin};