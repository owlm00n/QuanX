
/****
IOS songshu签到脚本
更新时间: 2024.5.21
脚本兼容: QuantumultX
author: @owlm00n
抓取Cookie说明:
登录账号后, 开启抓包软件并刷新页面.抓取该URL请求头下的Cookie字段, 填入以下CookieWA的单引号内即可. 
*/

const PutCookieWA = 'wordpress_sec_1c7d00f82b03760c42141efd416a59a8=mpweixin_16399985%7C1715925388%7CPKjEXGG7sgmiaPr0G5Wx8HSkaJnDSipT90vyMBS4U2S%7Ceb5492c7a67b548801f8dd87dbd09fd481fe6e7c81dab3216899f7febab2d9ef; wordpress_logged_in_1c7d00f82b03760c42141efd416a59a8=mpweixin_16399985%7C1715925388%7CPKjEXGG7sgmiaPr0G5Wx8HSkaJnDSipT90vyMBS4U2S%7Cd957cb137d1c713b01de31102bb0a16177de695c4691460b78d018ee27e9511b; wordpress_test_cookie=WP%20Cookie%20check; PHPSESSID=fnvcjmiii07s0qv2gsloaun1ia; ripro_notice_cookie=1';
const GetCookieWa = 'wordpress_logged_in_1c7d00f82b03760c42141efd416a59a8=mpweixin_74596770%7C1716443988%7CsIZDbgaWxvsYV0US7X0XkFiUkSLPDd6SihF3AnamOV0%7Cee134e1a32b33b045c3e2d34523bdad281924a676306f976cc08a229efbc4487; PHPSESSID=kcr924nk6c50rh0mtifff326ot';
const barkKey = '';
const nonceValue = '';
const $ = API('songshu')
const date = new Date();

const getData = {
    url: `https://iios.songshuyouxi.com/user`,
    headers: {
        Cookie: GetCookieWa,
        'Sec-Fetch-Mode' : `navigate`,
        'Connection' : `keep-alive`,
        'Accept' : `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`,
        'Accept-Encoding' : `gzip, deflate, br`,
        'Host' : `iios.songshuyouxi.com`,
        'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 17_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.49(0x1800312d) NetType/4G Language/zh_CN`,
        'Sec-Fetch-Site' : `none`,
        'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
        'Sec-Fetch-Dest' : `document`
    },
    body: ``
};

$.http.get(getData)
    .then((resp) => {
      if (resp.statusCode == 200) {
        console.log(resp.body);
        nonceValue = getNonceValue(resp.body);
        //console.log(nonceValue);
        $.msgBody = "获取nonce: " + nonceValue;
      } else if (resp.statusCode == 403) {
        $.msgBody = "服务器暂停 ⚠️"
      } else {
        $.msgBody = "脚本待更新 ‼️‼️"
      }
    })
    .catch((err) => ($.msgBody = `获取nonce失败 ‼️‼️\n${err || err.message}`))
    .finally(async () => {
      if (barkKey) {
        await BarkNotify($, barkKey, 'iosyuchen', $.msgBody);
      }
      $.notify('ios 松鼠', ``, $.msgBody);
    })

const reqData = {
    url: `https://iios.songshuyouxi.com/wp-admin/admin-ajax.php`，
    headers: {
        'X-Requested-With' : `XMLHttpRequest`,
        'Sec-Fetch-Dest' : `empty`,
        'Connection' : `keep-alive`,
        'Accept-Encoding' : `gzip, deflate, br`,
        'Content-Type' : `application/x-www-form-urlencoded; charset=UTF-8`,
        'Sec-Fetch-Site' : `same-origin`,
        'Origin' : `https://iios.songshuyouxi.com`,
        'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 17_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.49(0x1800312c) NetType/4G Language/zh_CN`,
        'Sec-Fetch-Mode' : `cors`,
        Cookie: PutCookieWA || $.read("COOKIE"),
        'Host' : `iios.songshuyouxi.com`,
        'Referer' : `https://iios.songshuyouxi.com/user`,
        'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
        'Accept' : `application/json, text/javascript, */*; q=0.01`
    },
    body: `action=user_qiandao&nonce=` + nonceValue
};

if ($.env.isRequest) {
  GetCookie()
} else if (!reqData.headers.Cookie) {
  $.notify('IOS松鼠', ``, `未填写/未获取Cookie!`);
} 
else {
  $.http.post(reqData)
    .then((resp) => {
      if (resp.statusCode == 200) {
        var msg = JSON.parse(resp.body).msg;
        $.msgBody = date.getMonth() + 1 + "月" + date.getDate() + "日, 签到完成 🎉" + "\n" + msg
      } else if (resp.statusCode == 403) {
        $.msgBody = "服务器暂停签到 ⚠️"
      } else {
        $.msgBody = "脚本待更新 ‼️‼️"
      }
    })
    .catch((err) => ($.msgBody = `签到失败 ‼️‼️\n${err || err.message}`))
    .finally(async () => {
      if (barkKey) {
        await BarkNotify($, barkKey, 'ios 松鼠', $.msgBody);
      }
      $.notify('ios 松鼠', ``, $.msgBody);
      $.done();
    })
}

function getNonceValue(respBody) {
  // 使用正则表达式匹配data-nonce属性的值
  const match = /data-nonce="([^"]*)"/.exec(respBody);

  // 如果匹配成功，则返回nonce值，否则返回undefined
  return match ? match[1] : undefined;
}

function GetCookie() {
  const TM = $.read("TIME");
  const CK = $request.headers['Cookie'] || $request.headers['cookie'];
  if (CK) {
    $.write(CK, "COOKIE");
    if (!TM || TM && (Date.now() - TM) / 1000 >= 21600) {
      $.notify("ios yuchen", "", `写入Cookie成功 🎉`);
      $.write(JSON.stringify(Date.now()), "TIME");
    } else {
      $.info(`ios yuchen\n写入Cookie成功 🎉`)
    }
  } else {
    $.info(`ios yuchen\n写入Cookie失败, 关键值缺失`)
  }
  $.done()
}

//Bark APP notify
async function BarkNotify(c, k, t, b) { for (let i = 0; i < 3; i++) { console.log(`🔷Bark notify >> Start push (${i + 1})`); const s = await new Promise((n) => { c.post({ url: 'https://api.day.app/push', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title: t, body: b, device_key: k, ext_params: { group: t } }) }, (e, r, d) => r && r.status == 200 ? n(1) : n(d || e)) }); if (s === 1) { console.log('✅Push success!'); break } else { console.log(`❌Push failed! >> ${s.message || s}`) } } };

function ENV(){const e="function"==typeof require&&"undefined"!=typeof $jsbox;return{isQX:"undefined"!=typeof $task,isLoon:"undefined"!=typeof $loon,isSurge:"undefined"!=typeof $httpClient&&"undefined"!=typeof $utils,isBrowser:"undefined"!=typeof document,isNode:"function"==typeof require&&!e,isJSBox:e,isRequest:"undefined"!=typeof $request,isScriptable:"undefined"!=typeof importModule}}function HTTP(e={baseURL:""}){const{isQX:t,isLoon:s,isSurge:o,isScriptable:n,isNode:i,isBrowser:r}=ENV(),u=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;const a={};return["GET","POST","PUT","DELETE","HEAD","OPTIONS","PATCH"].forEach(h=>a[h.toLowerCase()]=(a=>(function(a,h){h="string"==typeof h?{url:h}:h;const d=e.baseURL;d&&!u.test(h.url||"")&&(h.url=d?d+h.url:h.url),h.body&&h.headers&&!h.headers["Content-Type"]&&(h.headers["Content-Type"]="application/x-www-form-urlencoded");const l=(h={...e,...h}).timeout,c={onRequest:()=>{},onResponse:e=>e,onTimeout:()=>{},...h.events};let f,p;if(c.onRequest(a,h),t)f=$task.fetch({method:a,...h});else if(s||o||i)f=new Promise((e,t)=>{(i?require("request"):$httpClient)[a.toLowerCase()](h,(s,o,n)=>{s?t(s):e({statusCode:o.status||o.statusCode,headers:o.headers,body:n})})});else if(n){const e=new Request(h.url);e.method=a,e.headers=h.headers,e.body=h.body,f=new Promise((t,s)=>{e.loadString().then(s=>{t({statusCode:e.response.statusCode,headers:e.response.headers,body:s})}).catch(e=>s(e))})}else r&&(f=new Promise((e,t)=>{fetch(h.url,{method:a,headers:h.headers,body:h.body}).then(e=>e.json()).then(t=>e({statusCode:t.status,headers:t.headers,body:t.data})).catch(t)}));const y=l?new Promise((e,t)=>{p=setTimeout(()=>(c.onTimeout(),t(`${a} URL: ${h.url} exceeds the timeout ${l} ms`)),l)}):null;return(y?Promise.race([y,f]).then(e=>(clearTimeout(p),e)):f).then(e=>c.onResponse(e))})(h,a))),a}function API(e="untitled",t=!1){const{isQX:s,isLoon:o,isSurge:n,isNode:i,isJSBox:r,isScriptable:u}=ENV();return new class{constructor(e,t){this.name=e,this.debug=t,this.http=HTTP(),this.env=ENV(),this.node=(()=>{if(i){return{fs:require("fs")}}return null})(),this.initCache();Promise.prototype.delay=function(e){return this.then(function(t){return((e,t)=>new Promise(function(s){setTimeout(s.bind(null,t),e)}))(e,t)})}}initCache(){if(s&&(this.cache=JSON.parse($prefs.valueForKey(this.name)||"{}")),(o||n)&&(this.cache=JSON.parse($persistentStore.read(this.name)||"{}")),i){let e="root.json";this.node.fs.existsSync(e)||this.node.fs.writeFileSync(e,JSON.stringify({}),{flag:"wx"},e=>console.log(e)),this.root={},e=`${this.name}.json`,this.node.fs.existsSync(e)?this.cache=JSON.parse(this.node.fs.readFileSync(`${this.name}.json`)):(this.node.fs.writeFileSync(e,JSON.stringify({}),{flag:"wx"},e=>console.log(e)),this.cache={})}}persistCache(){const e=JSON.stringify(this.cache,null,2);s&&$prefs.setValueForKey(e,this.name),(o||n)&&$persistentStore.write(e,this.name),i&&(this.node.fs.writeFileSync(`${this.name}.json`,e,{flag:"w"},e=>console.log(e)),this.node.fs.writeFileSync("root.json",JSON.stringify(this.root,null,2),{flag:"w"},e=>console.log(e)))}write(e,t){if(this.log(`SET ${t}`),-1!==t.indexOf("#")){if(t=t.substr(1),n||o)return $persistentStore.write(e,t);if(s)return $prefs.setValueForKey(e,t);i&&(this.root[t]=e)}else this.cache[t]=e;this.persistCache()}read(e){return this.log(`READ ${e}`),-1===e.indexOf("#")?this.cache[e]:(e=e.substr(1),n||o?$persistentStore.read(e):s?$prefs.valueForKey(e):i?this.root[e]:void 0)}delete(e){if(this.log(`DELETE ${e}`),-1!==e.indexOf("#")){if(e=e.substr(1),n||o)return $persistentStore.write(null,e);if(s)return $prefs.removeValueForKey(e);i&&delete this.root[e]}else delete this.cache[e];this.persistCache()}notify(e,t="",a="",h={}){const d=h["open-url"],l=h["media-url"];if(s&&$notify(e,t,a,h),n&&$notification.post(e,t,a+`${l?"\n多媒体:"+l:""}`,{url:d}),o){let s={};d&&(s.openUrl=d),l&&(s.mediaUrl=l),"{}"===JSON.stringify(s)?$notification.post(e,t,a):$notification.post(e,t,a,s)}if(i||u){const s=a+(d?`\n点击跳转: ${d}`:"")+(l?`\n多媒体: ${l}`:"");if(r){require("push").schedule({title:e,body:(t?t+"\n":"")+s})}else console.log(`${e}\n${t}\n${s}\n\n`)}}log(e){this.debug&&console.log(`[${this.name}] LOG: ${this.stringify(e)}`)}info(e){console.log(`[${this.name}] INFO: ${this.stringify(e)}`)}error(e){console.log(`[${this.name}] ERROR: ${this.stringify(e)}`)}wait(e){return new Promise(t=>setTimeout(t,e))}done(e={}){s||o||n?$done(e):i&&!r&&"undefined"!=typeof $context&&($context.headers=e.headers,$context.statusCode=e.statusCode,$context.body=e.body)}stringify(e){if("string"==typeof e||e instanceof String)return e;try{return JSON.stringify(e,null,2)}catch(e){return"[object Object]"}}}(e,t)}
