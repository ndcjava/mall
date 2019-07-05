import storage from './storage'
import config from './config'
const loginout={
   exit(){
       //退出登录
    storage.remove(config.userInfoName) 
   }  
}
export default loginout
