// var now = new Date;
// function createtime() {
//   now.setTime(now.getTime() + 1e3);
//   var e = new Date("01/18/2023 00:00:00"),
//     t = Math.trunc(234e8 + (now - e) / 1e3 * 17),
//     a = (t / 1496e5).toFixed(6), o = new Date("01/18/2023 00:00:00"),
//     n = (now - o) / 1e3 / 60 / 60 / 24, r = Math.floor(n),
//     i = (now - o) / 1e3 / 60 / 60 - 24 * r, s = Math.floor(i);
//   1 == String(s).length && (s = "0" + s);
//   var d = (now - o) / 1e3 / 60 - 1440 * r - 60 * s, l = Math.floor(d); 1 == String(l).length && (l = "0" + l);
//   var g = (now - o) / 1e3 - 86400 * r - 3600 * s - 60 * l, b = Math.round(g); 1 == String(b).length && (b = "0" + b);
//   let c = "";
//   c = s < 18 && s >= 9 ? `<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-科研摸鱼中.svg' title='什么时候能够实现财富自由呀~'><br> <div style="font-size:13px;font-weight:bold">本站已经运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>` : `<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-下班休息啦.svg' title='下班了就该开开心心地玩耍~'><br> <div style="font-size:13px;font-weight:bold">本站已经运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>`,
//     document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = c)
// } setInterval((() => { createtime() }), 1e3);

var now = new Date();
function createtime() {
  // 当前时间
  now.setTime(now.getTime() + 1000);
  var start = new Date("01/18/2023 00:00:00"); // 旅行者1号开始计算的时间
  var dis = Math.trunc(23400000000 + ((now - start) / 1000) * 17); // 距离=秒数*速度 记住转换毫秒
  var unit = (dis / 149600000).toFixed(6);  // 天文单位
  var grt = new Date("01/18/2023 00:00:00");	// 网站诞生时间
  var days = (now - grt) / 1e3 / 60 / 60 / 24,
    dnum = Math.floor(days),
    hours = (now - grt) / 1e3 / 60 / 60 - 24 * dnum,
    hnum = Math.floor(hours);
  1 == String(hnum).length && (hnum = "0" + hnum);
  var minutes = (now - grt) / 1e3 / 60 - 1440 * dnum - 60 * hnum,
    mnum = Math.floor(minutes);
  1 == String(mnum).length && (mnum = "0" + mnum);
  var seconds = (now - grt) / 1e3 - 86400 * dnum - 3600 * hnum - 60 * mnum,
    snum = Math.round(seconds);
  1 == String(snum).length && (snum = "0" + snum);
  let currentTimeHtml = "";
  (currentTimeHtml =
    hnum < 18 && hnum >= 9
      ? `<img class='boardsign' src='https://cdn.staticaly.com/gh/bob-bzh/picgo_pic@main/img/徽标白.svg' title='什么时候能够实现财富自由呀~'><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${dis} 千米，约为 ${unit} 个天文单位 🚀</div>`
      : `<img class='boardsign' src='https://cdn.staticaly.com/gh/bob-bzh/picgo_pic@main/img/徽标晚.svg' title='下班了就该开开心心地玩耍~'><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${dis} 千米，约为 ${unit} 个天文单位 🚀</div>`),
    document.getElementById("workboard") &&
    (document.getElementById("workboard").innerHTML = currentTimeHtml);
}
// https://img.shields.io/badge/dynamic/json?style=social&url=https://cdn.staticaly.com/gh/bob-bzh/picgo_pic@main/img/huibiao.json&label=%F0%9F%8E%89BoB%E5%B0%8F%E7%AA%9D&query=$[%27phoneNumbers%27][0][%27type%27]
// 徽标原始代码
// 设置重复执行函数，周期1000ms
setInterval(() => {
  createtime();
}, 1000);