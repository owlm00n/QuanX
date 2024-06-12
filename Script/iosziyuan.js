
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://iosziyuan.com/wp-admin/admin-ajax.php`;
const method = `POST`;
const headers = {
'X-Requested-With' : `XMLHttpRequest`,
'Sec-Fetch-Dest' : `empty`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'Content-Type' : `application/x-www-form-urlencoded; charset=UTF-8`,
'Sec-Fetch-Site' : `same-origin`,
'Origin' : `https://iosziyuan.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1`,
'Sec-Fetch-Mode' : `cors`,
'Cookie' : `wordpress_139824836db68d332edd352c9f3ca6ae=owl%7C1719402459%7CpCoti0aT9ihQv9NEsrIYGs4FHFsvYzzlAOz65iMwhT1%7Ceec11d55e933dcb9fb32115880d8cd859dd65b07fc8bffae2453e97180dd3d14; wordpress_sec_139824836db68d332edd352c9f3ca6ae=owl%7C1719402459%7CzWLtzm6WPbAMlSRfS4hy2ubmrx98RdovbEc2i7w7pnV%7C02d86728d54693afefb96b1988702c33843a2ca53acf332cdbc103e6fdccba54; wordpress_logged_in_139824836db68d332edd352c9f3ca6ae=owl%7C1719402459%7CzWLtzm6WPbAMlSRfS4hy2ubmrx98RdovbEc2i7w7pnV%7Cd6f8a1f41c110c8dc3419c4cde979e6fd855fa5a087e71e2bf454228f82b4350`,
'Host' : `iosziyuan.com`,
'Referer' : `https://iosziyuan.com/user/coin/`,
'Accept-Language' : `en-US,en;q=0.9`,
'Accept' : `application/json, text/javascript, */*; q=0.01`
};
const body = `nonce=3f0fe6b049&action=zb_user_qiandao`;

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
