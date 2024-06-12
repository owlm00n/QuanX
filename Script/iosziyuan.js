
/****
脚本名称：iosziyuan签到脚本
更新时间: 2024.6.12
脚本兼容: QuantumultX
author: @owlm00n
抓取Cookie说明:
浏览器打开网页登录账号后, 开启抓包软件并刷新页面.
抓取该URL请求头下的Cookie字段保存在本地环境, 或者手动填入以下CookieWA的单引号内即可. 优先使用本地保存的
*/

const CookieWA = 'wordpress_139824836db68d332edd352c9f3ca6ae=owl%7C1719402459%7CpCoti0aT9ihQv9NEsrIYGs4FHFsvYzzlAOz65iMwhT1%7Ceec11d55e933dcb9fb32115880d8cd859dd65b07fc8bffae2453e97180dd3d14; wordpress_sec_139824836db68d332edd352c9f3ca6ae=owl%7C1719402459%7CzWLtzm6WPbAMlSRfS4hy2ubmrx98RdovbEc2i7w7pnV%7C02d86728d54693afefb96b1988702c33843a2ca53acf332cdbc103e6fdccba54; wordpress_logged_in_139824836db68d332edd352c9f3ca6ae=owl%7C1719402459%7CzWLtzm6WPbAMlSRfS4hy2ubmrx98RdovbEc2i7w7pnV%7Cd6f8a1f41c110c8dc3419c4cde979e6fd855fa5a087e71e2bf454228f82b4350';

//Bark APP 通知推送Key
const barkKey = '';

/***********************
QuantumultX 远程脚本配置:
************************

[task_local]
# 签到
1 0 * * * https://raw.githubusercontent.com/owlm00n/QuanX/main/Script/ziyuan.js

[rewrite_local]
# 获取Cookie
https:\/\/yuchen\.tonghuaios\.com/wp-admin/admin-ajax\.php\? url script-request-header https://raw.githubusercontent.com/owlm00n/QuanX/main/Script/ziyuan.js

[mitm] 
hostname= iosziyuan.com
*/


const jsName = 'iosziyuan';
const $ = API(jsName);
const date = new Date();
const reqData = {
  url: `https://iosziyuan.com/wp-admin/admin-ajax.php`,
  headers: {
    'X-Requested-With' : `XMLHttpRequest`,
    'Sec-Fetch-Dest' : `empty`,
    'Connection' : `keep-alive`,
    'Accept-Encoding' : `gzip, deflate, br`,
    'Content-Type' : `application/x-www-form-urlencoded; charset=UTF-8`,
    'Sec-Fetch-Site' : `same-origin`,
    'Origin' : `https://iosziyuan.com`,
    'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1`,
    'Sec-Fetch-Mode' : `cors`,
    Cookie: $.read("COOKIE") || CookieWA,
    'Host' : `iosziyuan.com`,
    'Referer' : `https://iosziyuan.com/user/coin/`,
    'Accept-Language' : `en-US,en;q=0.9`,
    'Accept' : `application/json, text/javascript, */*; q=0.01`
    },
  body: `nonce=3f0fe6b049&action=zb_user_qiandao`
  };

if ($.env.isRequest) {
  GetCookie()
} else if (!reqData.headers.Cookie) {
  $.notify(jsName, ``, `未填写/未获取Cookie!`);
} 
else {
  $.info(reqData.headers.Cookie)
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
        await BarkNotify($, barkKey, jsName, $.msgBody);
      }
      $.notify(jsName, ``, $.msgBody);
      $.done();
    })
}

function GetCookie() {
  const TM = $.read("TIME");
  const CK = $request.headers['Cookie'] || $request.headers['cookie'];
  if (CK && (CK.includes('wordpress_sec_') && CK.includes('wordpress_logged_in_'))) {
    $.write(CK, "COOKIE");
    $.info("COOKIE :" + CK)
    if (!TM || TM && (Date.now() - TM) / 1000 >= 21600) {
      $.notify(jsName, "", `写入Cookie成功 🎉`);
      $.write(JSON.stringify(Date.now()), "TIME");
    } else {
      $.info(jsName + `\n写入Cookie成功 🎉`)
    }
  } else {
    $.info(jsName + `\n写入Cookie失败, 关键值缺失`)
  }
  $.done()
}

//Bark APP notify
async function BarkNotify(c, k, t, b) { for (let i = 0; i < 3; i++) { console.log(`🔷Bark notify >> Start push (${i + 1})`); const s = await new Promise((n) => { c.post({ url: 'https://api.day.app/push', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title: t, body: b, device_key: k, ext_params: { group: t } }) }, (e, r, d) => r && r.status == 200 ? n(1) : n(d || e)) }); if (s === 1) { console.log('✅Push success!'); break } else { console.log(`❌Push failed! >> ${s.message || s}`) } } };

function ENV(){const e="function"==typeof require&&"undefined"!=typeof $jsbox;return{isQX:"undefined"!=typeof $task,isLoon:"undefined"!=typeof $loon,isSurge:"undefined"!=typeof $httpClient&&"undefined"!=typeof $utils,isBrowser:"undefined"!=typeof document,isNode:"function"==typeof require&&!e,isJSBox:e,isRequest:"undefined"!=typeof $request,isScriptable:"undefined"!=typeof importModule}}function HTTP(e={baseURL:""}){const{isQX:t,isLoon:s,isSurge:o,isScriptable:n,isNode:i,isBrowser:r}=ENV(),u=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;const a={};return["GET","POST","PUT","DELETE","HEAD","OPTIONS","PATCH"].forEach(h=>a[h.toLowerCase()]=(a=>(function(a,h){h="string"==typeof h?{url:h}:h;const d=e.baseURL;d&&!u.test(h.url||"")&&(h.url=d?d+h.url:h.url),h.body&&h.headers&&!h.headers["Content-Type"]&&(h.headers["Content-Type"]="application/x-www-form-urlencoded");const l=(h={...e,...h}).timeout,c={onRequest:()=>{},onResponse:e=>e,onTimeout:()=>{},...h.events};let f,p;if(c.onRequest(a,h),t)f=$task.fetch({method:a,...h});else if(s||o||i)f=new Promise((e,t)=>{(i?require("request"):$httpClient)[a.toLowerCase()](h,(s,o,n)=>{s?t(s):e({statusCode:o.status||o.statusCode,headers:o.headers,body:n})})});else if(n){const e=new Request(h.url);e.method=a,e.headers=h.headers,e.body=h.body,f=new Promise((t,s)=>{e.loadString().then(s=>{t({statusCode:e.response.statusCode,headers:e.response.headers,body:s})}).catch(e=>s(e))})}else r&&(f=new Promise((e,t)=>{fetch(h.url,{method:a,headers:h.headers,body:h.body}).then(e=>e.json()).then(t=>e({statusCode:t.status,headers:t.headers,body:t.data})).catch(t)}));const y=l?new Promise((e,t)=>{p=setTimeout(()=>(c.onTimeout(),t(`${a} URL: ${h.url} exceeds the timeout ${l} ms`)),l)}):null;return(y?Promise.race([y,f]).then(e=>(clearTimeout(p),e)):f).then(e=>c.onResponse(e))})(h,a))),a}function API(e="untitled",t=!1){const{isQX:s,isLoon:o,isSurge:n,isNode:i,isJSBox:r,isScriptable:u}=ENV();return new class{constructor(e,t){this.name=e,this.debug=t,this.http=HTTP(),this.env=ENV(),this.node=(()=>{if(i){return{fs:require("fs")}}return null})(),this.initCache();Promise.prototype.delay=function(e){return this.then(function(t){return((e,t)=>new Promise(function(s){setTimeout(s.bind(null,t),e)}))(e,t)})}}initCache(){if(s&&(this.cache=JSON.parse($prefs.valueForKey(this.name)||"{}")),(o||n)&&(this.cache=JSON.parse($persistentStore.read(this.name)||"{}")),i){let e="root.json";this.node.fs.existsSync(e)||this.node.fs.writeFileSync(e,JSON.stringify({}),{flag:"wx"},e=>console.log(e)),this.root={},e=`${this.name}.json`,this.node.fs.existsSync(e)?this.cache=JSON.parse(this.node.fs.readFileSync(`${this.name}.json`)):(this.node.fs.writeFileSync(e,JSON.stringify({}),{flag:"wx"},e=>console.log(e)),this.cache={})}}persistCache(){const e=JSON.stringify(this.cache,null,2);s&&$prefs.setValueForKey(e,this.name),(o||n)&&$persistentStore.write(e,this.name),i&&(this.node.fs.writeFileSync(`${this.name}.json`,e,{flag:"w"},e=>console.log(e)),this.node.fs.writeFileSync("root.json",JSON.stringify(this.root,null,2),{flag:"w"},e=>console.log(e)))}write(e,t){if(this.log(`SET ${t}`),-1!==t.indexOf("#")){if(t=t.substr(1),n||o)return $persistentStore.write(e,t);if(s)return $prefs.setValueForKey(e,t);i&&(this.root[t]=e)}else this.cache[t]=e;this.persistCache()}read(e){return this.log(`READ ${e}`),-1===e.indexOf("#")?this.cache[e]:(e=e.substr(1),n||o?$persistentStore.read(e):s?$prefs.valueForKey(e):i?this.root[e]:void 0)}delete(e){if(this.log(`DELETE ${e}`),-1!==e.indexOf("#")){if(e=e.substr(1),n||o)return $persistentStore.write(null,e);if(s)return $prefs.removeValueForKey(e);i&&delete this.root[e]}else delete this.cache[e];this.persistCache()}notify(e,t="",a="",h={}){const d=h["open-url"],l=h["media-url"];if(s&&$notify(e,t,a,h),n&&$notification.post(e,t,a+`${l?"\n多媒体:"+l:""}`,{url:d}),o){let s={};d&&(s.openUrl=d),l&&(s.mediaUrl=l),"{}"===JSON.stringify(s)?$notification.post(e,t,a):$notification.post(e,t,a,s)}if(i||u){const s=a+(d?`\n点击跳转: ${d}`:"")+(l?`\n多媒体: ${l}`:"");if(r){require("push").schedule({title:e,body:(t?t+"\n":"")+s})}else console.log(`${e}\n${t}\n${s}\n\n`)}}log(e){this.debug&&console.log(`[${this.name}] LOG: ${this.stringify(e)}`)}info(e){console.log(`[${this.name}] INFO: ${this.stringify(e)}`)}error(e){console.log(`[${this.name}] ERROR: ${this.stringify(e)}`)}wait(e){return new Promise(t=>setTimeout(t,e))}done(e={}){s||o||n?$done(e):i&&!r&&"undefined"!=typeof $context&&($context.headers=e.headers,$context.statusCode=e.statusCode,$context.body=e.body)}stringify(e){if("string"==typeof e||e instanceof String)return e;try{return JSON.stringify(e,null,2)}catch(e){return"[object Object]"}}}(e,t)}
