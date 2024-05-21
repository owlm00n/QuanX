
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://iios.songshuyouxi.com/wp-admin/admin-ajax.php`;
const method = `POST`;
const headers = {
'X-Requested-With' : `XMLHttpRequest`,
'Sec-Fetch-Dest' : `empty`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'Content-Type' : `application/x-www-form-urlencoded; charset=UTF-8`,
'Sec-Fetch-Site' : `same-origin`,
'Origin' : `https://iios.songshuyouxi.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 17_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.49(0x1800312c) NetType/4G Language/zh_CN`,
'Sec-Fetch-Mode' : `cors`,
'Cookie' : `wordpress_sec_1c7d00f82b03760c42141efd416a59a8=mpweixin_16399985%7C1715925388%7CPKjEXGG7sgmiaPr0G5Wx8HSkaJnDSipT90vyMBS4U2S%7Ceb5492c7a67b548801f8dd87dbd09fd481fe6e7c81dab3216899f7febab2d9ef; wordpress_logged_in_1c7d00f82b03760c42141efd416a59a8=mpweixin_16399985%7C1715925388%7CPKjEXGG7sgmiaPr0G5Wx8HSkaJnDSipT90vyMBS4U2S%7Cd957cb137d1c713b01de31102bb0a16177de695c4691460b78d018ee27e9511b; wordpress_test_cookie=WP%20Cookie%20check; PHPSESSID=fnvcjmiii07s0qv2gsloaun1ia; ripro_notice_cookie=1`,
'Host' : `iios.songshuyouxi.com`,
'Referer' : `https://iios.songshuyouxi.com/user`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
'Accept' : `application/json, text/javascript, */*; q=0.01`
};
const body = `action=user_qiandao&nonce=674ed2111f`;

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
