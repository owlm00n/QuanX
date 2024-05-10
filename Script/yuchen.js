
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://yuchen.tonghuaios.com/wp-admin/admin-ajax.php`;
const method = `POST`;
const headers = {
'X-Requested-With' : `XMLHttpRequest`,
'Sec-Fetch-Dest' : `empty`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'Content-Type' : `application/x-www-form-urlencoded; charset=UTF-8`,
'Sec-Fetch-Site' : `same-origin`,
'Origin' : `https://yuchen.tonghuaios.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 17_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4.1 Mobile/15E148 Safari/604.1`,
'Sec-Fetch-Mode' : `cors`,
'Cookie' : `wordpress_sec_3fded9bb7b81e244ce750634dc5801ae=W169529718871%7C1716479418%7C83NDHlNU71rh6WGz5bxd5USWblwDWkckgnZPFpL1MJI%7C2385f55844347d93b43f812be3621a0a6335956078cb09218ae66654fe55802e; pps_cookie_431=3_days; wordpress_logged_in_3fded9bb7b81e244ce750634dc5801ae=W169529718871%7C1716479418%7C83NDHlNU71rh6WGz5bxd5USWblwDWkckgnZPFpL1MJI%7C96c46d13768e828375eedab51fb77b20c568438150d94a1a9fefad4f59b83af9; Hm_lpvt_9b06a186a026bf08db4df6b387ebfd56=1715269772; Hm_lvt_9b06a186a026bf08db4df6b387ebfd56=1714712628,1714842847,1714850102,1715269772`,
'Host' : `yuchen.tonghuaios.com`,
'Referer' : `https://yuchen.tonghuaios.com/users?tab=orders`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
'Accept' : `application/json, text/javascript, */*; q=0.01`
};
const body = `action=daily_sign`;

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
