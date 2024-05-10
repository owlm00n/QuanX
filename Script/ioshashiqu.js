
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `http://www.ioshashiqi.com/aspx3/mobile/qiandao.aspx?action=list&s=1715127081621&no=`;
const method = `POST`;
const headers = {
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate`,
'Upgrade-Insecure-Requests' : `1`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Origin' : `http://www.ioshashiqi.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 17_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.49(0x18003129) NetType/4G Language/zh_CN`,
'Cookie' : `USER_COOKIE=Chkaccount=True&userName=15779094967&Chkpass=True&userPwd=bao2043.; dt_cookie_user_name_remember=DTcms=15779094967`,
'Host' : `www.ioshashiqi.com`,
'Referer' : `http://www.ioshashiqi.com/aspx3/mobile/qiandao.aspx?action=list&s=1715127081621&no=`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
'Accept' : `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`
};
const body = `__EVENTTARGET=_lbtqd&__EVENTARGUMENT=&__VIEWSTATE=16uK3ZAnkDvqlv069Y0%2F5Na%2FX5IgOOSzbU7bdvzK5s3rOyWxhZ3gSfM54rg6qEYAdmocbR2EnLDw7XjpItEVLExTP4tbnv8pjZ0Tp%2FNKrwptsQqkJYzP4%2FdY%2BcL5vNN1pnjCIsZruKxBtTXgoAgv2BiG92WwZyKKwLtE99XZZ78%3D&__VIEWSTATEGENERATOR=1E359395`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
