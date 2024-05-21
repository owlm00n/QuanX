
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://iios.songshuyouxi.com/user`;
const method = `GET`;
const headers = {
'Cookie' : `wordpress_logged_in_1c7d00f82b03760c42141efd416a59a8=mpweixin_74596770%7C1716428835%7CdaZS2sZVGpt911ENSCBg8Ld886vyAARIFzsKMalXYjG%7Ceeec847342fdb05e677c0e5624a6dd4fee49df0c59764876a8c8c8b88d5735cd; wordpress_test_cookie=WP%20Cookie%20check; PHPSESSID=iaunmm94l4tnta5umsshvcdt7k; ripro_notice_cookie=1`,
'Sec-Fetch-Mode' : `navigate`,
'Connection' : `keep-alive`,
'Accept' : `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`,
'Accept-Encoding' : `gzip, deflate, br`,
'Host' : `iios.songshuyouxi.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 17_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.49(0x1800312d) NetType/4G Language/zh_CN`,
'Sec-Fetch-Site' : `none`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
'Sec-Fetch-Dest' : `document`
};
const body = ``;

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
