import { APP_ID, SIGN_SECRET } from './config.js'
import Rsa from './plugins/rsa.js'
import { sha256 } from 'js-sha256'
import axios from "axios"
let requestUrl = 'https://dev.godouav.com/api/sso'
const CommonLogin = async (baseUrl=requestUrl,accounts,password,vertifyCode=null,appid=APP_ID,sign_secret=SIGN_SECRET)=>{
    console.log('into login')
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
    return await axios({
        url: baseUrl+ '/login',
        method: 'post',
        data: params,
        headers:{
            'Content-Type':'application/json',
            'appid': appid,
            'timestamp': timestamp,
            'sign': sign
        }

    }).then(res=>{
        // console.log('login result: ',res.data)
        return res.data
    }).catch(err=>{
        console.log(err)
        return err
    })
    
    
}
// let res =await CommonLogin(requestUrl,'wx01','123456','',APP_ID,SIGN_SECRET)
// console.log('本页面调试结果', res)
export default CommonLogin;