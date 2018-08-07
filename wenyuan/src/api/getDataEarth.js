import fetch from '@/config/fetch'
import router from '@/router'
/**
 * 获取电话记录
 */

var check_login = function(res){
    return new Promise(function(resolve,reject){
        if (res.code == 999) {
            router.push('/');
        } else {
            resolve(res);
        }

    });
}
export const news_list = data => fetch('/waibao/entity/cixi_list', data, 'POST').then(check_login);

