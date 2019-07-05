import axios from 'axios'
import qs from 'qs'
const http = {
    get(url, realmName, callback,json = null) {
        let finalUrl = realmName + url
        if (json) {
            let params = Object.keys(json).map(function (key) {
                return encodeURIComponent(key) + "=" + encodeURIComponent(json[key])
            }).join("&")
            finalUrl = finalUrl + '?' + params
        }
        console.log(finalUrl)
        axios({
            method: 'get',
            url: finalUrl,
        }).then((res)=>{
            callback(res.data)
        })
        .catch((res)=>{
            console.log('error')
        })
    },

    post(url, realmName, callback,json = null) {
        let finalUrl = realmName + url
        axios({
            method: 'post',
            url: finalUrl,
            data: json?qs.stringify(json):{}
        }).then((res)=>{
            callback(res.data)
        })
        .catch((res)=>{
            console.log('error')
        })
    }
}
export default http
