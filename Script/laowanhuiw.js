
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://zhike.banchengyun.com/api/wechat/activityLottery/luckDraw`;
const method = `POST`;
const headers = {
'Sec-Fetch-Dest' : `empty`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'Content-Type' : `application/json`,
'Sec-Fetch-Site' : `cross-site`,
'X-Platform-Type' : `OA_WECHAT`,
'Origin' : `https://91861cdb10f322e0.0.bancheng04.xyz`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 17_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.49(0x1800312a) NetType/4G Language/zh_CN`,
'Sec-Fetch-Mode' : `cors`,
'Host' : `zhike.banchengyun.com`,
'Referer' : `https://91861cdb10f322e0.0.bancheng04.xyz/`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
'Accept' : `*/*`
};
const body = `{
  "wechatUnionid" : "oqDv9wIh5wraoGSW4YLoZYRNBv7s",
  "staffId" : 512178,
  "brandId" : 918,
  "shareUser" : 0,
  "lotteryId" : 17290,
  "staffMarket" : 101028
}`;

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
