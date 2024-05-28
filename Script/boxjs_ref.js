{
  "id": "owlm00n.app.sub",
  "name": "owlm00n 脚本订阅",
  "description": "该订阅兼容BoxJs以及QX Gallery",
  "author": "@owlm00n",
  "icon": "https://avatars.githubusercontent.com/u/42443925",
  "repo": "https://github.com/owlm00n/QuanX",
  "apps": [{
    "id": "多合一签到",
    "name": "京东",
    "keys": ["CookiesJD"],
    "descs_html": [
      "<h4 align=\"center\">获取Cookie以及脚本配置请查看<a href=\"https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js\">脚本注释</a></h4>",
      "<h4 align=\"center\">如需修改Cookie列表请严格按照<a href=\"https://www.bejson.com/json/format\">JSON格式</a>修改</h4>",
      "<h4 align=\"center\">建议通过脚本获取Cookie</h4>",
      "<br />",
      "<h3 align=\"center\">签到相关教程</h3>",
      "<p align=\"center\"><iframe src=\"https://www.youtube.com/embed/6vMz1LKF1-8\" width=\"100%\" height=\"100%\"></iframe></p>"
    ],
    "settings": [{
      "id": "JD_DailyBonusLog",
      "name": "详细响应日志",
      "val": false,
      "type": "boolean",
      "desc": "打印原始签到结果, 用于调试脚本, 一般用户建议关闭."
    }, {
      "id": "JD_Crash_disable",
      "name": "崩溃自动禁用",
      "val": true,
      "type": "boolean",
      "desc": "脚本运行崩溃时(如VPN断连), 下次运行时将自动禁用相关崩溃接口(仅部分接口启用), 注: 崩溃时可能会误禁用正常接口."
    }, {
      "id": "JD_Retry_disable",
      "name": "签到接口增强",
      "val": true,
      "type": "boolean",
      "desc": "用于部分接口提示\"不含活动数据\"问题, 开启后会进行二次查询, 注: 可能会导致崩溃(小概率)."
    }, {
      "id": "JD_Follow_disable",
      "name": "自动关注店铺",
      "val": true,
      "type": "boolean",
      "desc": "部分接口签到过程可能需要关注店铺, 如介意可选择关闭."
    }, {
      "id": "JD_DailyBonusDisables",
      "name": "签到接口禁用",
      "val": "",
      "type": "checkboxes",
      "desc": "",
      "items": [{
        "key": "JDBean",
        "label": "京东京豆"
      }, {
        "key": "JRSteel",
        "label": "金融钢镚"
      }, {
        "key": "JDTurn",
        "label": "京东转盘"
      }, {
        "key": "JDGStore",
        "label": "京东超市"
      }, {
        "key": "JDCard",
        "label": "京东卡包"
      }, {
        "key": "JD3C",
        "label": "京东数码"
      }, {
        "key": "JDSuitcase",
        "label": "京东箱包"
      }, {
        "key": "JDChild",
        "label": "京东童装"
      }, {
        "key": "JDBaby",
        "label": "京东母婴"
      }, {
        "key": "JDCash",
        "label": "京东红包"
      }, {
        "key": "JDFSale",
        "label": "京东闪购"
      }, {
        "key": "JDBook",
        "label": "京东图书"
      }, {
        "key": "JDStory",
        "label": "失眠补贴"
      }, {
        "key": "JDPhone",
        "label": "手机小时达"
      }, {
        "key": "JDSchool",
        "label": "京东校园"
      }, {
        "key": "JDUndies",
        "label": "京东内衣"
      }, {
        "key": "JDShoes",
        "label": "京东鞋靴"
      }, {
        "key": "JDShand",
        "label": "京东二手"
      }, {
        "key": "JDHealth",
        "label": "京东健康"
      }, {
        "key": "JDWomen",
        "label": "京东女装"
      }, {
        "key": "JDSecKill",
        "label": "京东秒杀"
      }, {
        "key": "JTDouble",
        "label": "金贴双签"
      }, {
        "key": "JDVege",
        "label": "京东菜场"
      }, {
        "key": "JDClean",
        "label": "京东清洁"
      }, {
        "key": "JDCare",
        "label": "京东个护"
      }, {
        "key": "JDaccompany",
        "label": "京东陪伴"
      }, {
        "key": "JDCube",
        "label": "京东魔方"
      }, {
        "key": "JDJiaDian",
        "label": "京东家电"
      }, {
        "key": "JDDouble",
        "label": "京豆双签"
      }, {
        "key": "subsidy",
        "label": "京东金贴"
      }, {
        "key": "JDGetCash",
        "label": "京东现金"
      }, {
        "key": "JDShake",
        "label": "京东摇一摇"
      }, {
        "key": "Qbear",
        "label": "总京豆查询"
      }, {
        "key": "TCash",
        "label": "总红包查询"
      }, {
        "key": "TSteel",
        "label": "总钢镚查询"
      }, {
        "key": "TotalSubsidy",
        "label": "总金贴查询"
      }, {
        "key": "TotalMoney",
        "label": "总现金查询"
      }]
    }, {
      "id": "JD_DailyBonusTimeOut",
      "name": "超时退出 (毫秒)",
      "val": "",
      "type": "number",
      "placeholder": "默认无超时 (点击以展开说明)",
      "desc": "按需填写, 用于由网络不稳定引起的脚本中断, 正常或越狱用户建议留空. 如QX日志出现大量\"JS Context timeout\"后脚本中断时, 建议填写6000"
    }, {
      "id": "JD_DailyBonusDelay",
      "name": "接口延迟 (毫秒)",
      "val": "",
      "type": "number",
      "placeholder": "默认并发无延迟 (点击以展开说明)",
      "desc": "延迟作用于每个签到接口, 该参数接受随机或指定延迟(例: '2000'则表示延迟2秒; '2000-5000'则表示延迟最小2秒,最大5秒内的随机延迟), 如填入延迟则切换顺序签到(耗时较长); VPN重启或越狱用户建议填写1(顺序执行), Surge用户请注意在SurgeUI界面调整脚本超时."
    }, {
      "id": "CookiesJD",
      "name": "Cookie列表",
      "val": "",
      "type": "textarea",
      "autoGrow": false,
      "rows": 9,
      "val": "[\n  {\n    \"cookie\": \"此处填写账号1 Cookie\"\n  },\n  {\n    \"cookie\": \"此处填写账号2 Cookie\",\n    \"jrBody\": \"此处填写账号2 钢镚Body\"\n  }\n]",
      "placeholder": "[ {\"cookie\": \"pt_key=xxx;pt_pin=yyy;\", \"jrBody\": \"reqData=zzz\"}  ]",
      "desc": "Cookie和钢镚签到Body列表, 如需修改请严格按照JSON格式填写; \"cookie\"为必须, 其他为可选."
    }],
    "scripts": [{
      "name": "京东签到",
      "script": "https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js"
    }, {
      "name": "初始化设置",
      "script": "https://gist.githubusercontent.com/NobyDa/91cbe57dd50b3588a975af8922507a72/raw/JD_initial.js"
    }],
    "author": "@NobyDa",
    "repo": "https://github.com/NobyDa/Script/tree/master/JD-DailyBonus",
    "icons": ["https://raw.githubusercontent.com/NobyDa/mini/master/Alpha/jd.png", "https://raw.githubusercontent.com/NobyDa/mini/master/Color/jd.png"]
  }, {
    "id": "iQIYI",
    "name": "爱奇艺",
    "keys": ["CookieQY"],
    "descs_html": [
      "<h4 align=\"center\">获取Cookie以及脚本配置请查看<a href=\"https://raw.githubusercontent.com/NobyDa/Script/master/iQIYI-DailyBonus/iQIYI.js\">脚本注释</a></h4>"
    ],
    "settings": [{
      "id": "iQIYI_LogDetails",
      "name": "响应日志",
      "val": false,
      "type": "boolean",
      "desc": ""
    }],
    "script": "https://raw.githubusercontent.com/NobyDa/Script/master/iQIYI-DailyBonus/iQIYI.js",
    "author": "@NobyDa",
    "repo": "https://github.com/NobyDa/Script/blob/master/iQIYI-DailyBonus/iQIYI.js",
    "icons": ["https://raw.githubusercontent.com/NobyDa/mini/master/Alpha/iQIYI.png", "https://raw.githubusercontent.com/NobyDa/mini/master/Color/iQIYI.png"]
  }, {
    "id": "BiliManga",
    "name": "哔哩漫画",
    "keys": ["CookieBM"],
    "descs_html": [
      "<h4 align=\"center\">获取Cookie以及脚本配置请查看<a href=\"https://raw.githubusercontent.com/NobyDa/Script/master/Bilibili-DailyBonus/Manga.js\">脚本注释</a></h4>"
    ],
    "script": "https://raw.githubusercontent.com/NobyDa/Script/master/Bilibili-DailyBonus/Manga.js",
    "author": "@NobyDa",
    "repo": "https://github.com/NobyDa/Script/blob/master/Bilibili-DailyBonus/Manga.js",
    "icons": ["https://raw.githubusercontent.com/NobyDa/mini/master/Alpha/manga.png", "https://raw.githubusercontent.com/NobyDa/mini/master/Color/manga.png"]
  }, {
    "id": "BiliMangaPoints",
    "name": "哔哩漫画抢券",
    "descs_html": [
      "<h4 align=\"center\">脚本配置请查看<a href=\"https://raw.githubusercontent.com/NobyDa/Script/master/Bilibili-DailyBonus/ExchangePoints.js\">脚本注释</a></h4>"
    ],
    "keys": ["BM_ProductName", "BM_ProductNum", "BM_ExchangeNum"],
    "settings": [{
      "id": "BM_ProductName",
      "name": "商品名",
      "val": "积分兑换",
      "type": "text",
      "placeholder": "(点击以展开说明)",
      "desc": "要抢购的积分商城商品名"
    }, {
      "id": "BM_ProductNum",
      "name": "兑换数量",
      "val": "",
      "type": "text",
      "placeholder": "(点击以展开说明)",
      "desc": "要兑换的数量, 默认为积分可兑换的最大值"
    }, {
      "id": "BM_ExchangeNum",
      "name": "抢购次数",
      "val": "",
      "type": "text",
      "placeholder": "(点击以展开说明)",
      "desc": "默认暴力抢购100次"
    }],
    "script": "https://raw.githubusercontent.com/NobyDa/Script/master/Bilibili-DailyBonus/ExchangePoints.js",
    "author": "@NobyDa",
    "repo": "https://github.com/NobyDa/Script/blob/master/Bilibili-DailyBonus/ExchangePoints.js",
    "icons": ["https://raw.githubusercontent.com/NobyDa/mini/master/Alpha/manga.png", "https://raw.githubusercontent.com/NobyDa/mini/master/Color/manga.png"]
  }, {
    "id": "BaiduTB",
    "name": "百度贴吧",
    "keys": ["CookieTB"],
    "descs_html": [
      "<h4 align=\"center\">获取Cookie以及脚本配置请查看<a href=\"https://raw.githubusercontent.com/NobyDa/Script/master/BDTieBa-DailyBonus/TieBa.js\">脚本注释</a></h4>"
    ],
    "settings": [{
      "id": "BDTB_DailyBonus_Mode",
      "name": "签到模式",
      "val": "0",
      "type": "radios",
      "desc": "",
      "items": [{
        "key": "0",
        "label": "自动切换"
      }, {
        "key": "1",
        "label": "顺序执行"
      }, {
        "key": "2",
        "label": "并发执行"
      }]
    }, {
      "id": "BDTB_DailyBonus_notify",
      "name": "通知汇总",
      "val": "",
      "type": "number",
      "placeholder": "默认20 (点击以展开说明)",
      "desc": "想签到几个汇总到一个通知里, 这里就填几个(比如我有13个要签到的, 这里填了5, 就会分三次推送通知)"
    }],
    "script": "https://raw.githubusercontent.com/NobyDa/Script/master/BDTieBa-DailyBonus/TieBa.js",
    "author": "@sazs34, @NobyDa",
    "repo": "https://github.com/sazs34/TaskConfig/blob/master/task/sign_baidu_tieba_v2.js",
    "icons": ["https://raw.githubusercontent.com/NobyDa/mini/master/Alpha/tieba.png", "https://raw.githubusercontent.com/NobyDa/mini/master/Color/tieba.png"]
  }, {
    "id": "52poje",
    "name": "吾爱破解",
    "keys": ["nobyda_52pojie"],
    "descs_html": [
      "<h4 align=\"center\">获取Cookie以及脚本配置请查看<a href=\"https://raw.githubusercontent.com/NobyDa/Script/master/52pojie-DailyBonus/52pojie.js\">脚本注释</a></h4>"
    ],
    "script": "https://raw.githubusercontent.com/NobyDa/Script/master/52pojie-DailyBonus/52pojie.js",
    "author": "@NobyDa",
    "repo": "https://github.com/NobyDa/Script/blob/master/52pojie-DailyBonus/52pojie.js",
    "icons": ["https://raw.githubusercontent.com/NobyDa/mini/master/Alpha/52pj.png", "https://raw.githubusercontent.com/NobyDa/mini/master/Color/52pj.png"]
  }, {
    "id": "KuaiKan",
    "name": "快看漫画",
    "keys": ["@KKMH.COOKIE", "@KKMH.TIME", "@KKMH.UID", "@KKMH.DATE"],
    "descs_html": [
      "<h4 align=\"center\">获取Cookie以及脚本配置请查看<a href=\"https://raw.githubusercontent.com/NobyDa/Script/master/KuaiKan-DailyBonus/KKMH.js\">脚本注释</a></h4>"
    ],
    "settings": [{
      "id": "@KKMH.LOG",
      "name": "响应日志",
      "val": false,
      "type": "boolean",
      "desc": "打印原始签到结果, 用于调试脚本, 一般用户建议关闭."
    }],
    "script": "https://raw.githubusercontent.com/NobyDa/Script/master/KuaiKan-DailyBonus/KKMH.js",
    "author": "@NobyDa",
    "repo": "https://github.com/NobyDa/Script/blob/master/KuaiKan-DailyBonus/KKMH.js",
    "icons": ["https://raw.githubusercontent.com/NobyDa/mini/master/Alpha/KuaiKan.png", "https://raw.githubusercontent.com/NobyDa/mini/master/Color/KuaiKan.png"]
  }, {
    "id": "Bahamut",
    "name": "巴哈姆特",
    "keys": ["@ND_BAHA.ID", "@ND_BAHA.PW", "@ND_BAHA.TOTP", "@ND_BAHA.GUILD", "@ND_BAHA.ANSWER", "@ND_BAHA.ADS"],
    "descs_html": [
      "<h4 align=\"center\">脚本配置请查看<a href=\"https://raw.githubusercontent.com/NobyDa/Script/master/Bahamut/BahamutDailyBonus.js\">脚本注释</a></h4>"
    ],
    "settings": [{
      "id": "@ND_BAHA.ADS",
      "name": "签到广告",
      "val": false,
      "type": "boolean",
      "desc": "开启后将签到双倍巴币奖励, 默认关闭. 请注意, 此功能耗时过长(30秒以上), 如果使用Surge请调整该脚本超时为300秒"
    }, {
      "id": "@ND_BAHA.GUILD",
      "name": "签到公会",
      "val": true,
      "type": "boolean",
      "desc": "开启后将自动签到公会"
    }, {
      "id": "@ND_BAHA.ANSWER",
      "name": "动画疯答题",
      "val": true,
      "type": "boolean",
      "desc": "开启后将自动答题"
    }, {
      "id": "@ND_BAHA.ID",
      "name": "用户名",
      "val": "",
      "type": "text",
      "placeholder": "(点击以展开说明)",
      "desc": "输入用户名(账号)"
    }, {
      "id": "@ND_BAHA.PW",
      "name": "用户密码",
      "val": "",
      "type": "text",
      "placeholder": "",
      "desc": "输入用户密码"
    }, {
      "id": "@ND_BAHA.TOTP",
      "name": "两步验证令牌",
      "val": "",
      "type": "text",
      "placeholder": "(点击以展开说明)",
      "desc": "输入网站生成的16位令牌, 如未设置两步验证, 请留空"
    }],
    "script": "https://raw.githubusercontent.com/NobyDa/Script/master/Bahamut/BahamutDailyBonus.js",
    "author": "@NobyDa",
    "repo": "https://github.com/NobyDa/Script/blob/master/Bahamut/BahamutDailyBonus.js",
    "icons": ["https://raw.githubusercontent.com/NobyDa/mini/master/Alpha/bahamutGame.png", "https://raw.githubusercontent.com/NobyDa/mini/master/Color/bahamutGame.png"]
  }, {
    "id": "BiliRegion",
    "name": "哔哩番剧自动地区",
    "descs_html": [
      "<h4 align=\"center\">脚本配置请查看<a href=\"https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Bili_Auto_Regions.js\">脚本注释</a></h4>"
    ],
    "keys": ["BiliArea_Policy", "BiliArea_CN", "BiliArea_HK", "BiliArea_TW", "BiliArea_DF", "BiliArea_disabled"],
    "settings": [{
      "id": "BiliAreaNotify",
      "name": "静默运行",
      "val": false,
      "type": "boolean",
      "desc": "开启后将不再发出切换策略通知"
    }, {
      "id": "BiliDoubanRating",
      "name": "豆瓣评分",
      "val": true,
      "type": "boolean",
      "desc": "关闭后将不再查询豆瓣评分, 可显著提高相关页面载入速度"
    }, {
      "id": "BiliArea_Policy",
      "name": "策略组名",
      "val": "",
      "type": "text",
      "placeholder": "(点击以展开说明)",
      "desc": "哔哩哔哩分流的策略组名"
    }, {
      "id": "BiliArea_CN",
      "name": "中国大陆-子策略名",
      "val": "DIRECT",
      "type": "text",
      "placeholder": "(点击以展开说明)",
      "desc": "哔哩哔哩分流策略组里的中国大陆子策略名"
    }, {
      "id": "BiliArea_HK",
      "name": "中国香港-子策略名",
      "val": "",
      "type": "text",
      "placeholder": "(点击以展开说明)",
      "desc": "哔哩哔哩分流策略组里的香港子策略名"
    }, {
      "id": "BiliArea_TW",
      "name": "中国台湾-子策略名",
      "val": "",
      "type": "text",
      "placeholder": "(点击以展开说明)",
      "desc": "哔哩哔哩分流策略组里的台湾子策略名"
    }, {
      "id": "BiliArea_DF",
      "name": "后备-子策略名",
      "val": "",
      "type": "text",
      "placeholder": "(点击以展开说明)",
      "desc": "部分番剧可能会被屏蔽, 使用该策略以避免页面加载失败. 建议填写台湾子策略"
    }, {
      "id": "BiliArea_disabled",
      "name": "WiFi黑名单",
      "val": "",
      "type": "text",
      "placeholder": "(点击以展开说明)",
      "desc": "WiFi名称以逗号分隔, 名单内将跳过策略切换"
    }],
    "author": "@NobyDa",
    "repo": "https://github.com/NobyDa/Script/blob/master/Surge/JS/Bili_Auto_Regions.js",
    "icons": ["https://raw.githubusercontent.com/NobyDa/mini/master/Alpha/bilibili.png", "https://raw.githubusercontent.com/NobyDa/mini/master/Color/bilibili.png"]
  }, {
    "id": "TestFlightAccount",
    "name": "TestFlight账户管理",
    "keys": ["TESTFLIGHT-ACCOUNT"],
    "descs_html": [
      "<h4 align=\"center\">脚本说明以及配置请查看<a href=\"https://raw.githubusercontent.com/NobyDa/Script/master/TestFlight/TestFlightAccount.js\">脚本注释</a></h4>"
    ],
    "settings": [{
      "id": "@TESTFLIGHT-ACCOUNT.Debug",
      "name": "开发者模式",
      "val": false,
      "type": "boolean",
      "desc": "用于调试脚本, 一般用户请勿开启."
    }, {
      "id": "@TESTFLIGHT-ACCOUNT.EnableCache",
      "name": "启用缓存",
      "val": true,
      "type": "boolean",
      "desc": "用于缓存APP列表, 改善列表页面加载过慢，需与\"请求超时\"配合使用。开启缓存并刷新列表后，可适当调小超时"
    }, {
      "id": "@TESTFLIGHT-ACCOUNT.Timeout",
      "name": "请求超时",
      "val":"",
      "type": "number",
      "placeholder": "30",
      "desc": "默认为30, 单位: 秒"
    }, {
      "id": "@TESTFLIGHT-ACCOUNT.ForceIOSlist",
      "name": "使用iOS应用列表",
      "val": false,
      "type": "boolean",
      "desc": "强制使用iOS应用列表, 用于改善 macOS TestFlight 加载过慢, iOS用户无需开启"
    }],
    "scripts": [{
      "name": "清除缓存",
      "script": "https://gist.githubusercontent.com/NobyDa/d025c53d3922657f921b983ce129fc1d/raw/TestFlightAccountRemoveCache.js"
    }],
    "author": "@NobyDa",
    "repo": "https://github.com/NobyDa/Script/blob/master/TestFlight/TestFlightAccount.js",
    "icons": ["https://raw.githubusercontent.com/NobyDa/mini/master/Alpha/testflight.png", "https://raw.githubusercontent.com/NobyDa/mini/master/Color/testflight.png"]
  }],
  "task": [{
    "config": "0 8 * * * https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js, tag=京东签到, img-url=https://raw.githubusercontent.com/NobyDa/mini/master/Color/jd.png",
    "addons": "https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/Js_Remote_Cookie.conf, tag=NobyDa Cookie获取"
  }, {
    "config": "5 8 * * * https://raw.githubusercontent.com/NobyDa/Script/master/iQIYI-DailyBonus/iQIYI.js, tag=爱奇艺签到, img-url=https://raw.githubusercontent.com/NobyDa/mini/master/Color/iQIYI.png",
    "addons": "https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/Js_Remote_Cookie.conf, tag=NobyDa Cookie获取"
  }, {
    "config": "10 8 * * * https://raw.githubusercontent.com/NobyDa/Script/master/Bilibili-DailyBonus/Manga.js, tag=哔哩漫画签到, img-url=https://raw.githubusercontent.com/NobyDa/mini/master/Color/manga.png",
    "addons": "https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/Js_Remote_Cookie.conf, tag=NobyDa Cookie获取"
  }, {
    "config": "10,20,30 0 12 * * * https://raw.githubusercontent.com/NobyDa/Script/master/Bilibili-DailyBonus/ExchangePoints.js, tag=哔哩漫画抢券, img-url=https://raw.githubusercontent.com/NobyDa/mini/master/Color/manga.png",
    "addons": "https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/Js_Remote_Cookie.conf, tag=NobyDa Cookie获取"
  }, {
    "config": "15 8 * * * https://raw.githubusercontent.com/NobyDa/Script/master/BDTieBa-DailyBonus/TieBa.js, tag=百度贴吧签到, img-url=https://raw.githubusercontent.com/NobyDa/mini/master/Color/tieba.png",
    "addons": "https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/Js_Remote_Cookie.conf, tag=NobyDa Cookie获取"
  }, {
    "config": "20 8 * * * https://raw.githubusercontent.com/NobyDa/Script/master/52pojie-DailyBonus/52pojie.js, tag=吾爱破解签到, img-url=https://raw.githubusercontent.com/NobyDa/mini/master/Color/52pj.png",
    "addons": "https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/Js_Remote_Cookie.conf, tag=NobyDa Cookie获取"
  }, {
    "config": "25 8 * * * https://raw.githubusercontent.com/NobyDa/Script/master/KuaiKan-DailyBonus/KKMH.js, tag=快看漫画签到, img-url=https://raw.githubusercontent.com/NobyDa/mini/master/Color/KuaiKan.png",
    "addons": "https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/Js_Remote_Cookie.conf, tag=NobyDa Cookie获取"
  }, {
    "config": "0 8 * * * https://raw.githubusercontent.com/NobyDa/Script/master/Bahamut/BahamutDailyBonus.js, tag=巴哈姆特签到, img-url=https://raw.githubusercontent.com/NobyDa/mini/master/Color/bahamutGame.png"
  }]
}
