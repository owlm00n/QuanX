
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */
/*
IOS yuchen签到脚本
/**
更新时间: 2024.5.20
脚本兼容: QuantumultX
author: @owlm00n

抓取Cookie说明:
浏览器打开 https://www.52pojie.cn/home.php 登录账号后, 开启抓包软件并刷新页面.
抓取该URL请求头下的Cookie字段, 填入以下CookieWA的单引号内即可. */
*/
const CookieWA = 'wordpress_sec_3fded9bb7b81e244ce750634dc5801ae=W169529718871%7C1716479418%7C83NDHlNU71rh6WGz5bxd5USWblwDWkckgnZPFpL1MJI%7C2385f55844347d93b43f812be3621a0a6335956078cb09218ae66654fe55802e; pps_cookie_431=3_days; wordpress_logged_in_3fded9bb7b81e244ce750634dc5801ae=W169529718871%7C1716479418%7C83NDHlNU71rh6WGz5bxd5USWblwDWkckgnZPFpL1MJI%7C96c46d13768e828375eedab51fb77b20c568438150d94a1a9fefad4f59b83af9; Hm_lpvt_9b06a186a026bf08db4df6b387ebfd56=1715269772; Hm_lvt_9b06a186a026bf08db4df6b387ebfd56=1714712628,1714842847,1714850102,1715269772';

//Bark APP 通知推送Key
const barkKey = '';

/***********************
QuantumultX 远程脚本配置:
************************

[task_local]
# 吾爱签到
1 0 * * * https://raw.githubusercontent.com/owlm00n/QuanX/main/Script/yuchen.js

[rewrite_local]
# 获取Cookie
https:\/\/yuchen\.tonghuaios\.com/wp-admin/admin-ajax\.php\? url script-request-header https://raw.githubusercontent.com/owlm00n/QuanX/main/Script/yuchen.js

[mitm] 
hostname= yuchen.tonghuaios.com

*/
const $ = API('iosyuchen');
const date = new Date();
const reqData = {
  url: `https://yuchen.tonghuaios.com/wp-admin/admin-ajax.php`,
  headers: {
    'X-Requested-With' : `XMLHttpRequest`,
    'Sec-Fetch-Dest' : `empty`,
    'Connection' : `keep-alive`,
    'Accept-Encoding' : `gzip, deflate, br`,
    'Content-Type' : `application/x-www-form-urlencoded; charset=UTF-8`,
    'Sec-Fetch-Site' : `same-origin`,
    'Origin' : `https://yuchen.tonghuaios.com`,
    'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 17_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4.1 Mobile/15E148 Safari/604.1`,
    'Sec-Fetch-Mode' : `cors`,
    Cookie: CookieWA || $.read("COOKIE"),
    'Host' : `yuchen.tonghuaios.com`,
    'Referer' : `https://yuchen.tonghuaios.com/users?tab=orders`,
    'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
    'Accept' : `application/json, text/javascript, */*; q=0.01`   
    }
  };

if ($.env.isRequest) {
  GetCookie()
} else if (!reqData.headers.Cookie) {
  $.notify('吾爱破解', ``, `未填写/未获取Cookie!`);
} 
else {
  $.http.put(reqData)
    .then((resp) => {
      if (resp.statusCode == 200) {
        $.msgBody = date.getMonth() + 1 + "月" + date.getDate() + "日, 签到完成 🎉" + \n + resp.body
      } else if (resp.statusCode == 403) {
        $.msgBody = "服务器暂停签到 ⚠️"
      } else {
        $.msgBody = "脚本待更新 ‼️‼️"
      }
    })
    .catch((err) => ($.msgBody = `签到失败 ‼️‼️\n${err || err.message}`))
    .finally(async () => {
      if (barkKey) {
        await BarkNotify($, barkKey, 'iosyuchen', $.msgBody);
      }
      $.notify('ios yuchen', ``, $.msgBody);
      $.done();
    })
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

//https://github.com/Peng-YM/QuanX/tree/master/Tools/OpenAPI/**
 * OpenAPI
 * @author: Peng-YM
 * https://github.com/Peng-YM/QuanX/blob/master/Tools/OpenAPI/README.md
 */

function ENV() {
    const isJSBox = typeof require == "function" && typeof $jsbox != "undefined";
    return {
        isQX: typeof $task !== "undefined",
        isLoon: typeof $loon !== "undefined",
        isSurge: typeof $httpClient !== "undefined" && typeof $utils !== "undefined",
        isBrowser: typeof document !== "undefined",
        isNode: typeof require == "function" && !isJSBox,
        isJSBox,
        isRequest: typeof $request !== "undefined",
        isScriptable: typeof importModule !== "undefined",
    };
}

function HTTP(defaultOptions = {
    baseURL: ""
}) {
    const {
        isQX,
        isLoon,
        isSurge,
        isScriptable,
        isNode,
        isBrowser
    } = ENV();
    const methods = ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS", "PATCH"];
    const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

    function send(method, options) {
        options = typeof options === "string" ? {
            url: options
        } : options;
        const baseURL = defaultOptions.baseURL;
        if (baseURL && !URL_REGEX.test(options.url || "")) {
            options.url = baseURL ? baseURL + options.url : options.url;
        }
        if (options.body && options.headers && !options.headers['Content-Type']) {
            options.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        }
        options = {
            ...defaultOptions,
            ...options
        };
        const timeout = options.timeout;
        const events = {
            ...{
                onRequest: () => {
                },
                onResponse: (resp) => resp,
                onTimeout: () => {
                },
            },
            ...options.events,
        };

        events.onRequest(method, options);

        let worker;
        if (isQX) {
            worker = $task.fetch({
                method,
                ...options
            });
        } else if (isLoon || isSurge || isNode) {
            worker = new Promise((resolve, reject) => {
                const request = isNode ? require("request") : $httpClient;
                request[method.toLowerCase()](options, (err, response, body) => {
                    if (err) reject(err);
                    else
                        resolve({
                            statusCode: response.status || response.statusCode,
                            headers: response.headers,
                            body,
                        });
                });
            });
        } else if (isScriptable) {
            const request = new Request(options.url);
            request.method = method;
            request.headers = options.headers;
            request.body = options.body;
            worker = new Promise((resolve, reject) => {
                request
                    .loadString()
                    .then((body) => {
                        resolve({
                            statusCode: request.response.statusCode,
                            headers: request.response.headers,
                            body,
                        });
                    })
                    .catch((err) => reject(err));
            });
        } else if (isBrowser) {
            worker = new Promise((resolve, reject) => {
                fetch(options.url, {
                    method,
                    headers: options.headers,
                    body: options.body,
                })
                    .then(response => response.json())
                    .then(response => resolve({
                    statusCode: response.status,
                    headers: response.headers,
                    body: response.data,
                })).catch(reject);
            });
        }

        let timeoutid;
        const timer = timeout ?
            new Promise((_, reject) => {
                timeoutid = setTimeout(() => {
                    events.onTimeout();
                    return reject(
                        `${method} URL: ${options.url} exceeds the timeout ${timeout} ms`
                    );
                }, timeout);
            }) :
            null;

        return (timer ?
                Promise.race([timer, worker]).then((res) => {
                    clearTimeout(timeoutid);
                    return res;
                }) :
                worker
        ).then((resp) => events.onResponse(resp));
    }

    const http = {};
    methods.forEach(
        (method) =>
            (http[method.toLowerCase()] = (options) => send(method, options))
    );
    return http;
}

function API(name = "untitled", debug = false) {
    const {
        isQX,
        isLoon,
        isSurge,
        isNode,
        isJSBox,
        isScriptable
    } = ENV();
    return new (class {
        constructor(name, debug) {
            this.name = name;
            this.debug = debug;

            this.http = HTTP();
            this.env = ENV();

            this.node = (() => {
                if (isNode) {
                    const fs = require("fs");

                    return {
                        fs,
                    };
                } else {
                    return null;
                }
            })();
            this.initCache();

            const delay = (t, v) =>
                new Promise(function (resolve) {
                    setTimeout(resolve.bind(null, v), t);
                });

            Promise.prototype.delay = function (t) {
                return this.then(function (v) {
                    return delay(t, v);
                });
            };
        }

        // persistence
        // initialize cache
        initCache() {
            if (isQX) this.cache = JSON.parse($prefs.valueForKey(this.name) || "{}");
            if (isLoon || isSurge)
                this.cache = JSON.parse($persistentStore.read(this.name) || "{}");

            if (isNode) {
                // create a json for root cache
                let fpath = "root.json";
                if (!this.node.fs.existsSync(fpath)) {
                    this.node.fs.writeFileSync(
                        fpath,
                        JSON.stringify({}), {
                            flag: "wx"
                        },
                        (err) => console.log(err)
                    );
                }
                this.root = {};

                // create a json file with the given name if not exists
                fpath = `${this.name}.json`;
                if (!this.node.fs.existsSync(fpath)) {
                    this.node.fs.writeFileSync(
                        fpath,
                        JSON.stringify({}), {
                            flag: "wx"
                        },
                        (err) => console.log(err)
                    );
                    this.cache = {};
                } else {
                    this.cache = JSON.parse(
                        this.node.fs.readFileSync(`${this.name}.json`)
                    );
                }
            }
        }

        // store cache
        persistCache() {
            const data = JSON.stringify(this.cache, null, 2);
            if (isQX) $prefs.setValueForKey(data, this.name);
            if (isLoon || isSurge) $persistentStore.write(data, this.name);
            if (isNode) {
                this.node.fs.writeFileSync(
                    `${this.name}.json`,
                    data, {
                        flag: "w"
                    },
                    (err) => console.log(err)
                );
                this.node.fs.writeFileSync(
                    "root.json",
                    JSON.stringify(this.root, null, 2), {
                        flag: "w"
                    },
                    (err) => console.log(err)
                );
            }
        }

        write(data, key) {
            this.log(`SET ${key}`);
            if (key.indexOf("#") !== -1) {
                key = key.substr(1);
                if (isSurge || isLoon) {
                    return $persistentStore.write(data, key);
                }
                if (isQX) {
                    return $prefs.setValueForKey(data, key);
                }
                if (isNode) {
                    this.root[key] = data;
                }
            } else {
                this.cache[key] = data;
            }
            this.persistCache();
        }

        read(key) {
            this.log(`READ ${key}`);
            if (key.indexOf("#") !== -1) {
                key = key.substr(1);
                if (isSurge || isLoon) {
                    return $persistentStore.read(key);
                }
                if (isQX) {
                    return $prefs.valueForKey(key);
                }
                if (isNode) {
                    return this.root[key];
                }
            } else {
                return this.cache[key];
            }
        }

        delete(key) {
            this.log(`DELETE ${key}`);
            if (key.indexOf("#") !== -1) {
                key = key.substr(1);
                if (isSurge || isLoon) {
                    return $persistentStore.write(null, key);
                }
                if (isQX) {
                    return $prefs.removeValueForKey(key);
                }
                if (isNode) {
                    delete this.root[key];
                }
            } else {
                delete this.cache[key];
            }
            this.persistCache();
        }

        // notification
        notify(title, subtitle = "", content = "", options = {}) {
            const openURL = options["open-url"];
            const mediaURL = options["media-url"];

            if (isQX) $notify(title, subtitle, content, options);
            if (isSurge) {
                $notification.post(
                    title,
                    subtitle,
                    content + `${mediaURL ? "\n多媒体:" + mediaURL : ""}`, {
                        url: openURL,
                    }
                );
            }
            if (isLoon) {
                let opts = {};
                if (openURL) opts["openUrl"] = openURL;
                if (mediaURL) opts["mediaUrl"] = mediaURL;
                if (JSON.stringify(opts) === "{}") {
                    $notification.post(title, subtitle, content);
                } else {
                    $notification.post(title, subtitle, content, opts);
                }
            }
            if (isNode || isScriptable) {
                const content_ =
                    content +
                    (openURL ? `\n点击跳转: ${openURL}` : "") +
                    (mediaURL ? `\n多媒体: ${mediaURL}` : "");
                if (isJSBox) {
                    const push = require("push");
                    push.schedule({
                        title: title,
                        body: (subtitle ? subtitle + "\n" : "") + content_,
                    });
                } else {
                    console.log(`${title}\n${subtitle}\n${content_}\n\n`);
                }
            }
        }

        // other helper functions
        log(msg) {
            if (this.debug) console.log(`[${this.name}] LOG: ${this.stringify(msg)}`);
        }

        info(msg) {
            console.log(`[${this.name}] INFO: ${this.stringify(msg)}`);
        }

        error(msg) {
            console.log(`[${this.name}] ERROR: ${this.stringify(msg)}`);
        }

        wait(millisec) {
            return new Promise((resolve) => setTimeout(resolve, millisec));
        }

        done(value = {}) {
            if (isQX || isLoon || isSurge) {
                $done(value);
            } else if (isNode && !isJSBox) {
                if (typeof $context !== "undefined") {
                    $context.headers = value.headers;
                    $context.statusCode = value.statusCode;
                    $context.body = value.body;
                }
            }
        }

        stringify(obj_or_str) {
            if (typeof obj_or_str === 'string' || obj_or_str instanceof String)
                return obj_or_str;
            else
                try {
                    return JSON.stringify(obj_or_str, null, 2);
                } catch (err) {
                    return "[object Object]";
                }
        }
    })(name, debug);
}
