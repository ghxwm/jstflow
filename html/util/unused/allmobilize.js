/* AllMobilize.com/YunShiPei.com 2.4(2014-01-06T00:14:18.660Z #*#) */
!
function(t, e) {
    "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Spinner = e()
} (this,
function() {
    "use strict";
    function t(t, e) {
        var i, o = document.createElement(t || "div");
        for (i in e) o[i] = e[i];
        return o
    }
    function e(t) {
        for (var e = 1,
        i = arguments.length; i > e; e++) t.appendChild(arguments[e]);
        return t
    }
    function i(t, e, i, o) {
        var n = ["opacity", e, ~~ (100 * t), i, o].join("-"),
        r = .01 + 100 * (i / o),
        s = Math.max(1 - (1 - t) / e * (100 - r), t),
        a = f.substring(0, f.indexOf("Animation")).toLowerCase(),
        l = a && "-" + a + "-" || "";
        return p[n] || (c.insertRule("@" + l + "keyframes " + n + "{" + "0%{opacity:" + s + "}" + r + "%{opacity:" + t + "}" + (r + .01) + "%{opacity:1}" + (r + e) % 100 + "%{opacity:" + t + "}" + "100%{opacity:" + s + "}" + "}", c.cssRules.length), p[n] = 1),
        n
    }
    function o(t, e) {
        var i, o, n = t.style;
        if (void 0 !== n[e]) return e;
        for (e = e.charAt(0).toUpperCase() + e.slice(1), o = 0; o < d.length; o++) if (i = d[o] + e, void 0 !== n[i]) return i
    }
    function n(t, e) {
        for (var i in e) t.style[o(t, i) || i] = e[i];
        return t
    }
    function r(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var o in i) void 0 === t[o] && (t[o] = i[o])
        }
        return t
    }
    function s(t) {
        for (var e = {
            x: t.offsetLeft,
            y: t.offsetTop
        }; t = t.offsetParent;) e.x += t.offsetLeft,
        e.y += t.offsetTop;
        return e
    }
    function a(t) {
        return "undefined" == typeof this ? new a(t) : (this.opts = r(t || {},
        a.defaults, u), void 0)
    }
    function l() {
        function i(e, i) {
            return t("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', i)
        }
        c.addRule(".spin-vml", "behavior:url(#default#VML)"),
        a.prototype.lines = function(t, o) {
            function r() {
                return n(i("group", {
                    coordsize: f + " " + f,
                    coordorigin: -l + " " + -l
                }), {
                    width: f,
                    height: f
                })
            }
            function s(t, s, a) {
                e(p, e(n(r(), {
                    rotation: 360 / o.lines * t + "deg",
                    left: ~~s
                }), e(n(i("roundrect", {
                    arcsize: o.corners
                }), {
                    width: l,
                    height: o.width,
                    left: o.radius,
                    top: -o.width >> 1,
                    filter: a
                }), i("fill", {
                    color: o.color,
                    opacity: o.opacity
                }), i("stroke", {
                    opacity: 0
                }))))
            }
            var a, l = o.length + o.width,
            f = 2 * l,
            d = 2 * -(o.width + o.length) + "px",
            p = n(r(), {
                position: "absolute",
                top: d,
                left: d
            });
            if (o.shadow) for (a = 1; a <= o.lines; a++) s(a, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (a = 1; a <= o.lines; a++) s(a);
            return e(t, p)
        },
        a.prototype.opacity = function(t, e, i, o) {
            var n = t.firstChild;
            o = o.shadow && o.lines || 0,
            n && e + o < n.childNodes.length && (n = n.childNodes[e + o], n = n && n.firstChild, n = n && n.firstChild, n && (n.opacity = i))
        }
    }
    var f, d = ["webkit", "Moz", "ms", "O"],
    p = {},
    c = function() {
        var i = t("style", {
            type: "text/css"
        });
        return e(document.getElementsByTagName("head")[0], i),
        i.sheet || i.styleSheet
    } (),
    u = {
        lines: 12,
        length: 7,
        width: 5,
        radius: 10,
        rotate: 0,
        corners: 1,
        color: "#000",
        direction: 1,
        speed: 1,
        trail: 100,
        opacity: .25,
        fps: 20,
        zIndex: 2e9,
        className: "spinner",
        top: "auto",
        left: "auto",
        position: "relative"
    };
    a.defaults = {},
    r(a.prototype, {
        spin: function(e) {
            this.stop();
            var i, o, r = this,
            a = r.opts,
            l = r.el = n(t(0, {
                className: a.className
            }), {
                position: a.position,
                width: 0,
                zIndex: a.zIndex
            }),
            d = a.radius + a.length + a.width;
            if (e && (e.insertBefore(l, e.firstChild || null), o = s(e), i = s(l), n(l, {
                left: ("auto" == a.left ? o.x - i.x + (e.offsetWidth >> 1) : parseInt(a.left, 10) + d) + "px",
                top: ("auto" == a.top ? o.y - i.y + (e.offsetHeight >> 1) : parseInt(a.top, 10) + d) + "px"
            })), l.setAttribute("role", "progressbar"), r.lines(l, r.opts), !f) {
                var p, c = 0,
                u = (a.lines - 1) * (1 - a.direction) / 2,
                h = a.fps,
                m = h / a.speed,
                y = (1 - a.opacity) / (m * a.trail / 100),
                g = m / a.lines; !
                function v() {
                    c++;
                    for (var t = 0; t < a.lines; t++) p = Math.max(1 - (c + (a.lines - t) * g) % m * y, a.opacity),
                    r.opacity(l, t * a.direction + u, p, a);
                    r.timeout = r.el && setTimeout(v, ~~ (1e3 / h))
                } ()
            }
            return r
        },
        stop: function() {
            var t = this.el;
            return t && (clearTimeout(this.timeout), t.parentNode && t.parentNode.removeChild(t), this.el = void 0),
            this
        },
        lines: function(o, r) {
            function s(e, i) {
                return n(t(), {
                    position: "absolute",
                    width: r.length + r.width + "px",
                    height: r.width + "px",
                    background: e,
                    boxShadow: i,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~ (360 / r.lines * l + r.rotate) + "deg) translate(" + r.radius + "px" + ",0)",
                    borderRadius: (r.corners * r.width >> 1) + "px"
                })
            }
            for (var a, l = 0,
            d = (r.lines - 1) * (1 - r.direction) / 2; l < r.lines; l++) a = n(t(), {
                position: "absolute",
                top: 1 + ~ (r.width / 2) + "px",
                transform: r.hwaccel ? "translate3d(0,0,0)": "",
                opacity: r.opacity,
                animation: f && i(r.opacity, r.trail, d + l * r.direction, r.lines) + " " + 1 / r.speed + "s linear infinite"
            }),
            r.shadow && e(a, n(s("#000", "0 0 4px #000"), {
                top: "2px"
            })),
            e(o, e(a, s(r.color, "0 0 1px rgba(0,0,0,.1)")));
            return o
        },
        opacity: function(t, e, i) {
            e < t.childNodes.length && (t.childNodes[e].style.opacity = i)
        }
    });
    var h = n(t("group"), {
        behavior: "url(#default#VML)"
    });
    return ! o(h, "transform") && h.adj ? l() : f = o(h, "animation"),
    a
});
window._amVersion = {
    "phone": 1,
    "version": 1396743259658
}; !
function(e, i, t) {
    if (!e.AMPlatform) {
        var o = e.AMPlatform = {
            __state: 0,
            __config: {},
            __module: {},
            __tmpl: {},
            __timing: [[ + new Date, "allmobilize"]]
        },
        n = function(e) {
            return /(bb\d+|meego).+mobile|ucweb|ucbrowser|mqqbrowser|360browser|avantgo|bada\/|blackberry|android|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/.test(e.substr(0, 4)) ? !0 : !1
        },
        a = function(e) {
            return /ipad|tablet|GT-P7500/i.test(e) ? !0 : !1
        },
        r = function(e) {
            return e && e.match(/msie [678]\./)
        },
        l = function(i) {
            if (i) {
                var t = new RegExp(i, "i");
                return t.test(e.location.hostname)
            }
            return ! 0
        },
        c = function(i) {
            i = i.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var t = "[\\?&]" + i + "=([^&#]*)",
            o = new RegExp(t),
            n = o.exec(e.location.href);
            return null == n ? "": decodeURIComponent(n[1].replace(/\+/g, " "))
        },
        s = function() {
            return /allmobilize=desktop($|;)/.test(i.cookie)
        },
        d = function() {
            return /allmobilize=mobile($|;)/.test(i.cookie) || /allmobilize=preview($|;)/.test(i.cookie)
        },
        m = function() {
            return "_allmobilize" == e.name || /(dev)?proxy\.yunshipei\.com/.test(e.location.hostname) || /^localhost$/.test(e.location.hostname) || /^127\.0\.0/.test(e.location.hostname)
        },
        p = function(e) {
            return /yunshipei\.com/.test(e) || /allmobilize\.com/.test(e) || /42\.159\.5\.10/.test(e) || /192\.168/.test(e)
        },
        u = function(e) {
            var i = (new Date).getTime();
            return ! e || parseInt(e) >= i
        },
        h = function() {
            var i = e.navigator.userLanguage || e.navigator.language || "en-US";
            return i.split("-")[0]
        },
        g = function(e, i) {
            return i.width = Math.round(i.width * e),
            i.height = Math.round(i.height * e),
            i
        },
        v = function(i) {
            var t = (e.devicePixelRatio || 1, e.orientation || 0),
            i = i || "",
            o = {
                width: e.outerWidth,
                height: e.outerHeight
            };
            if (!i.match(/iphone|ipod|ipad/i)) {
                var n = (i.match(/android (\d)/i) || {})[1];
                return n > 3 ? g(o) : o
            }
            var a = t % 180;
            return a ? (o.height = screen.width, o.width = screen.height) : (o.width = screen.width, o.height = screen.height),
            g(o)
        },
        b = function(e) {
            var i = v(e),
            t = {
                "long": i.width > i.height ? i.width: i.height,
                "short": i.width < i.height ? i.width: i.height
            };
            return t.short <= 800
        },
        w = function() {
            var i = e.location.href,
            t = i.indexOf("_allmobilize"); - 1 != t && (i = i.substr(0, t - 1)),
            e.location = i
        },
        f = function(t) {
            var o = {
                en: "View Mobile Site",
                zh: "回到云适配版"
            },
            n = o[t] || o.en;
            if (/allmobilize=desktop/.test(i.cookie)) {
                var a = i.createElement("div"),
                r = i.createElement("span"),
                l = i.createTextNode(n);
                a.appendChild(r),
                r.appendChild(l),
                a.id = "_allmobilizeGoMo",
                a.style.textAlign = "center",
                a.style.clear = "both",
                a.style.padding = 0,
                a.style.margin = "20px 0",
                a.style.zIndex = "99999",
                r.style.background = "#222",
                r.style.color = "#FFF",
                r.style.margin = 0,
                r.style.padding = "10px 20px",
                r.style.borderRadius = "5px",
                r.style.font = "14px 'Microsoft YaHei',SimSun,Arial,Sans-Serif",
                r.style.cursor = "pointer",
                r.onclick = function() {
                    i.cookie = "allmobilize=; path=/;",
                    e.location.reload()
                },
                i.body.appendChild(a)
            }
        },
        y = function() {
            void 0 !== e.stop ? e.stop() : void 0 !== i.execCommand && i.execCommand("Stop", !1)
        },
        x = function() {
            var t = !1,
            o = function(o) {
                var n = function() {
                    return t ? void 0 : (t = !0, o())
                },
                a = function() {
                    if (!t) {
                        try {
                            i.documentElement.doScroll("left")
                        } catch(e) {
                            return setTimeout(a, 1),
                            void 0
                        }
                        return n()
                    }
                };
                if ("complete" === i.readyState) return n();
                if (i.addEventListener) i.addEventListener("DOMContentLoaded", n, !1),
                e.addEventListener("load", n, !1);
                else if (i.attachEvent) {
                    i.attachEvent("onreadystatechange", n),
                    e.attachEvent("onload", n);
                    var r = !1;
                    try {
                        r = null == e.frameElement
                    } catch(l) {}
                    if (i.documentElement.doScroll && r) return a()
                }
            };
            return o
        } (),
        k = !1,
        z = m();
        doc = i,
        ua = (navigator.userAgent || navigator.vendor || e.opera || "").toLowerCase(),
        isOldBrowser = r(ua),
        weixinId = c("sukey"),
        lang = h(),
        thisScript = i.getElementById("allmobilize"),
        scriptSrc = thisScript ? thisScript.src: "";
        var _ = e.onerror;
        if (e.onerror = function(e, i, t) {
            return isOldBrowser ? !0 : _ ? _(e, i, t) : !1
        },
        t.debug) {
            if (c("_allmobilizedev")) return i.cookie = "allmobilize=mobile; path=/;",
            w(),
            void 0;
            if (c("_allmobilizepro")) return i.cookie = "allmobilize=; path=/;",
            w(),
            void 0;
            if (c("_allmobilizeprv")) return i.cookie = "allmobilize=preview; path=/;",
            w(),
            void 0;
            k = d()
        } else k = t.tablet && a(ua),
        k = k || t.desktop || n(ua) || weixinId || !ua && b();
        if (k = (k || z) && !t.suspend && !isOldBrowser && !s() && l(t.domains), !z && k && (k = k && p(scriptSrc) && u(t.version)), k) {
            o.__enable = !0;
            var S = '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" id="allmobilize_viewport" />',
            E = {
                en: "Loading",
                zh: "页面加载中"
            },
            I = E[lang] || E.en,
            M = '<div id="allmobilize_loader" style="position:fixed;top:50%;left:50%;width:120px;height:120px;margin-top:-60px;margin-left:-60px;text-align:center;"><div id="allmobilize_spinner" style="height: 50px;"></div><p style="margin:10px 0;font-size:1em;font-family:\'Microsoft YaHei\',\'微软雅黑\',Helvetica,Arial,sans-serif">' + I + " ...</p></div>" + '<script>var spinner = new Spinner().spin(document.getElementById("allmobilize_spinner")); </script>',
            C = '<plaintext style="display:none">';
            doc.write(S + M + C),
            o.__timing.push([ + new Date, "begin"])
        }
        x(function() {
            if (k) {
                y();
                var e = {
                    scriptSrc: scriptSrc,
                    weixinId: weixinId
                };
                o.main.mobilize(e)
            } else f(lang)
        })
    }
} (this, document, window._amVersion);
window.AMPlatform.__config = {
    _options: {
        openLinkInSameWindow: !1,
        removeStyle: !0,
        cleanImg: !1,
        cleanTable: !1,
        cleanFrame: !1,
        cleanEmbed: !1
    },
    _helpers: {
        getHost: function() {
            return window.location.host
        }
    },
    title: function(e) {
        return e("title").html()
    },
    footer: function(e) {
        return e(".footer").html()
    },
    mdData: function() {
        var e = {};
        return e.slidenav = [{
            link: "http://m.csdn.net",
            title: "资讯"
        },
        {
            link: "http://m.blog.csdn.net",
            title: "Blog"
        },
        {
            link: "http://geek.csdn.net/",
            title: "Geek头条"
        }],
        e
    },
    content: function(e, t) {
        return t.select({
            "^/($|\\?)": {
                template: "index",
                html: function(e) {
                    var t = {};
                    t.news = [];
                    var n = e(".news");
                    e(".news").find(".news_left ul").remove(),
                    n.find("dt a").eq(0).appendTo(n.find("dt")),
                    e(".news_list > a").text("更多 +"),
                    t.news.push({
                        name: "news",
                        content: n.html()
                    });
                    var o = e(".flow");
                    o.find("ul.develop").remove(),
                    o.find(".ad_flow_text").remove(),
                    o.find("ul li").slice(10).remove(),
                    o.find(".more").text("更多 +"),
                    t.news.push({
                        name: "flow",
                        content: o.html()
                    });
                    var l = e(".hot_blog").eq(0);
                    return l.find("h2 .more").text("更多 +").appendTo(l),
                    t.news.push({
                        name: "geek",
                        content: l.html()
                    }),
                    t.topics = ["开放平台", "HTML5", "开源", "移动开发", "iOS", "Android", "云计算", "大数据", "Hadoop", "OpenStack"],
                    t
                }
            },
            "^/(.+)$": {
                template: "general",
                html: function(e) {
                    return e(".content .left").html()
                }
            }
        })
    }
};
window.AMPlatform.__module.powered_by = function(n, r, e, a, o) {
    function i(n, r) {
        var a, o, i, s = "";
        return s += '\r\n  <div class="md-am-bar">\r\n    ',
        i = {
            hash: {},
            inverse: d.program(4, t, r),
            fn: d.program(2, l, r),
            data: r
        },
        a = e.ifCond || n && n.ifCond,
        o = a ? a.call(n, (a = n && n.powerBy, a = null == a || a === !1 ? a: a.options, null == a || a === !1 ? a: a.lang), "==", "en", i) : u.call(n, "ifCond", (a = n && n.powerBy, a = null == a || a === !1 ? a: a.options, null == a || a === !1 ? a: a.lang), "==", "en", i),
        (o || 0 === o) && (s += o),
        s += "\r\n  </div>\r\n"
    }
    function l() {
        return '\r\n      <div class="yunshipei-bar">\r\n        <a href="http://www.yunshipei.com" data-role="none" data-rel="external">Powered By <strong>AllMobilize</strong></a>\r\n      </div>\r\n    '
    }
    function t() {
        return '\r\n      <div class="yunshipei-bar">\r\n        <a href="http://www.yunshipei.com" data-role="none" data-rel="external">本手机网页使用<strong>云适配</strong>创建</a>\r\n      </div>\r\n    '
    }
    this.compilerInfo = [4, ">= 1.0.0"],
    e = this.merge(e, n.helpers),
    o = o || {};
    var s, p, d = this,
    u = e.helperMissing,
    h = "function",
    c = e.blockHelperMissing;
    return s = typeof r === h ? r.apply(r) : r,
    p = c.call(r, s, {
        hash: {},
        inverse: d.noop,
        fn: d.program(1, i, o),
        data: o
    }),
    p || 0 === p ? p: ""
};
window.AMPlatform.__module.switch_mode = function(n, l, o, r, a) {
    function s(n, l) {
        var r, a, s, d = "";
        return d += '\r\n  <div class="ysp-switcher md-switch',
        a = o["if"].call(n, (r = n && n.switchMode, null == r || r === !1 ? r: r.theme), {
            hash: {},
            inverse: T.noop,
            fn: T.program(2, t, l),
            data: l
        }),
        (a || 0 === a) && (d += a),
        d += '">\r\n    <span class="current md-sm-ysp"\r\n          data-target="#md-switch-modal',
        a = o["if"].call(n, (r = n && n.switchMode, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.id), {
            hash: {},
            inverse: T.noop,
            fn: T.program(4, e, l),
            data: l
        }),
        (a || 0 === a) && (d += a),
        d += '"',
        a = o["if"].call(n, (r = n && n.switchMode, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.modal), {
            hash: {},
            inverse: T.noop,
            fn: T.program(6, i, l),
            data: l
        }),
        (a || 0 === a) && (d += a),
        d += ">\r\n      ",
        a = o.unless.call(n, (r = n && n.switchMode, r = null == r || r === !1 ? r: r.content, null == r || r === !1 ? r: r.switchName), {
            hash: {},
            inverse: T.program(13, u, l),
            fn: T.program(8, c, l),
            data: l
        }),
        (a || 0 === a) && (d += a),
        d += '\r\n    </span>\r\n    <span class="divider"> | </span>\r\n    <a id="godesktop" class="md-sm-desktop" href="#" data-role="none" onclick="AMPlatform.util.goDesktop();">\r\n      ',
        s = {
            hash: {},
            inverse: T.program(17, f, l),
            fn: T.program(15, h, l),
            data: l
        },
        r = o.ifCond || n && n.ifCond,
        a = r ? r.call(n, (r = n && n.switchMode, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.lang), "==", "en", s) : j.call(n, "ifCond", (r = n && n.switchMode, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.lang), "==", "en", s),
        (a || 0 === a) && (d += a),
        d += '\r\n    </a>\r\n  </div>\r\n  <div id="md-switch-modal',
        a = o["if"].call(n, (r = n && n.switchMode, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.id), {
            hash: {},
            inverse: T.noop,
            fn: T.program(4, e, l),
            data: l
        }),
        (a || 0 === a) && (d += a),
        d += '"\r\n       class="modal md-switch-modal',
        a = o["if"].call(n, (r = n && n.switchMode, null == r || r === !1 ? r: r.theme), {
            hash: {},
            inverse: T.noop,
            fn: T.program(19, m, l),
            data: l
        }),
        (a || 0 === a) && (d += a),
        d += '">\r\n    <div class="md-sm-m-wrap">\r\n      <div class="md-sm-m-hd">\r\n        <a href="javascript:void(0)" data-dismiss="modal" class="md-sm-m-close">Close</a>\r\n      </div>\r\n      <div class="md-sm-m-bd">\r\n        ',
        s = {
            hash: {},
            inverse: T.program(34, b, l),
            fn: T.program(21, g, l),
            data: l
        },
        r = o.ifCond || n && n.ifCond,
        a = r ? r.call(n, (r = n && n.switchMode, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.siteType), "==", "ec", s) : j.call(n, "ifCond", (r = n && n.switchMode, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.siteType), "==", "ec", s),
        (a || 0 === a) && (d += a),
        d += "\r\n      </div>\r\n    </div>\r\n  </div>\r\n"
    }
    function t(n) {
        var l, o = "";
        return o += " md-sm-t-" + P((l = n && n.switchMode, l = null == l || l === !1 ? l: l.theme, typeof l === N ? l.apply(n) : l))
    }
    function e(n) {
        var l, o = "";
        return o += "-" + P((l = n && n.switchMode, l = null == l || l === !1 ? l: l.options, l = null == l || l === !1 ? l: l.id, typeof l === N ? l.apply(n) : l))
    }
    function i() {
        return '\r\n          data-toggle="modal"'
    }
    function c(n, l) {
        var r, a, s, t = "";
        return t += "\r\n        ",
        s = {
            hash: {},
            inverse: T.program(11, p, l),
            fn: T.program(9, d, l),
            data: l
        },
        r = o.ifCond || n && n.ifCond,
        a = r ? r.call(n, (r = n && n.switchMode, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.lang), "==", "en", s) : j.call(n, "ifCond", (r = n && n.switchMode, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.lang), "==", "en", s),
        (a || 0 === a) && (t += a),
        t += "\r\n        "
    }
    function d() {
        return "\r\n          Mobilized\r\n        "
    }
    function p() {
        return "\r\n          云适配版\r\n        "
    }
    function u(n) {
        var l, o = "";
        return o += "\r\n          " + P((l = n && n.switchMode, l = null == l || l === !1 ? l: l.content, l = null == l || l === !1 ? l: l.switchName, typeof l === N ? l.apply(n) : l)) + "\r\n      "
    }
    function h() {
        return "\r\n        Desktop\r\n      "
    }
    function f() {
        return "\r\n        电脑版\r\n      "
    }
    function m(n) {
        var l, o = "";
        return o += " md-sm-mt-" + P((l = n && n.switchMode, l = null == l || l === !1 ? l: l.theme, typeof l === N ? l.apply(n) : l))
    }
    function g(n, l) {
        var r, a, s, t = "";
        return t += "\r\n          ",
        s = {
            hash: {},
            inverse: T.program(24, w, l),
            fn: T.program(22, v, l),
            data: l
        },
        r = o.ifCond || n && n.ifCond,
        a = r ? r.call(n, (r = n && n.switchMode, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.lang), "==", "en", s) : j.call(n, "ifCond", (r = n && n.switchMode, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.lang), "==", "en", s),
        (a || 0 === a) && (t += a),
        a = o["if"].call(n, (r = n && n.switchMode, r = null == r || r === !1 ? r: r.content, null == r || r === !1 ? r: r.owner), {
            hash: {},
            inverse: T.noop,
            fn: T.program(26, M, l),
            data: l
        }),
        (a || 0 === a) && (t += a),
        a = o["if"].call(n, (r = n && n.switchMode, r = null == r || r === !1 ? r: r.content, null == r || r === !1 ? r: r.org), {
            hash: {},
            inverse: T.noop,
            fn: T.program(28, y, l),
            data: l
        }),
        (a || 0 === a) && (t += a),
        t += '<span\r\n            class="md-sm-slogan">',
        a = o["if"].call(n, (r = n && n.switchMode, r = null == r || r === !1 ? r: r.content, null == r || r === !1 ? r: r.slogan), {
            hash: {},
            inverse: T.program(32, k, l),
            fn: T.program(30, C, l),
            data: l
        }),
        (a || 0 === a) && (t += a),
        t += "</span>\r\n        "
    }
    function v() {
        return "You are visiting "
    }
    function w() {
        return "\r\n            您正在浏览的是"
    }
    function M(n) {
        var l, o = "";
        return o += '<span\r\n            class="md-sm-owner">' + P((l = n && n.switchMode, l = null == l || l === !1 ? l: l.content, l = null == l || l === !1 ? l: l.owner, typeof l === N ? l.apply(n) : l)) + "</span>"
    }
    function y(n) {
        var l, o = "";
        return o += '<span\r\n            class="md-sm-org">' + P((l = n && n.switchMode, l = null == l || l === !1 ? l: l.content, l = null == l || l === !1 ? l: l.org, typeof l === N ? l.apply(n) : l)) + "</span>"
    }
    function C(n) {
        var l, o;
        return l = n && n.switchMode,
        l = null == l || l === !1 ? l: l.content,
        l = null == l || l === !1 ? l: l.slogan,
        o = typeof l === N ? l.apply(n) : l,
        o || 0 === o ? o: ""
    }
    function k() {
        return "为您当前手机定做的移动网站。轻动手指尖，移动随心购！"
    }
    function b(n, l) {
        var r, a, s, t = "";
        return t += "\r\n          ",
        s = {
            hash: {},
            inverse: T.program(24, w, l),
            fn: T.program(22, v, l),
            data: l
        },
        r = o.ifCond || n && n.ifCond,
        a = r ? r.call(n, (r = n && n.switchMode, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.lang), "==", "en", s) : j.call(n, "ifCond", (r = n && n.switchMode, r = null == r || r === !1 ? r: r.options, null == r || r === !1 ? r: r.lang), "==", "en", s),
        (a || 0 === a) && (t += a),
        a = o["if"].call(n, (r = n && n.switchMode, r = null == r || r === !1 ? r: r.content, null == r || r === !1 ? r: r.owner), {
            hash: {},
            inverse: T.noop,
            fn: T.program(26, M, l),
            data: l
        }),
        (a || 0 === a) && (t += a),
        a = o["if"].call(n, (r = n && n.switchMode, r = null == r || r === !1 ? r: r.content, null == r || r === !1 ? r: r.org), {
            hash: {},
            inverse: T.noop,
            fn: T.program(28, y, l),
            data: l
        }),
        (a || 0 === a) && (t += a),
        t += '<span\r\n            class="md-sm-slogan">',
        a = o["if"].call(n, (r = n && n.switchMode, r = null == r || r === !1 ? r: r.content, null == r || r === !1 ? r: r.slogan), {
            hash: {},
            inverse: T.program(35, _, l),
            fn: T.program(30, C, l),
            data: l
        }),
        (a || 0 === a) && (t += a),
        t += "</span>\r\n        "
    }
    function _() {
        return "为您当前手机定做的移动网站。"
    }
    this.compilerInfo = [4, ">= 1.0.0"],
    o = this.merge(o, n.helpers),
    a = a || {};
    var A, D, N = "function",
    P = this.escapeExpression,
    T = this,
    j = o.helperMissing,
    x = o.blockHelperMissing;
    return A = typeof l === N ? l.apply(l) : l,
    D = x.call(l, A, {
        hash: {},
        inverse: T.noop,
        fn: T.program(1, s, a),
        data: a
    }),
    D || 0 === D ? D: ""
};
window.AMPlatform.__module.allmobilize_track = function(t, e, n, r, a) {
    return this.compilerInfo = [4, ">= 1.0.0"],
    n = this.merge(n, t.helpers),
    a = a || {},
    '<script type="text/javascript">\n   var _paq = _paq || [];\n  _paq.push(["trackPageView"]);\n  _paq.push(["enableLinkTracking"]);\n(function() {\n    var u=(("https:" == document.location.protocol) ? "https" : "http") + "://s.yunshipei.com/";\n    _paq.push(["setTrackerUrl","http://n.yunshipei.com/deliver"]);\n    _paq.push(["setSiteId", "37"]);\n   var d=document,\n       g=d.createElement("script"),\n       s=d.getElementsByTagName("script")[0];\n       g.type="text/javascript";\n       g.defer=true;\n       g.async=true;\n       g.src=u+"javascript/aa.min.js";\n       s.parentNode.insertBefore(g,s);\n})();\n</script>'
};
window.AMPlatform.__tmpl.index = function(n, t, a, e, s) {
    function l(n, t) {
        var e, s = "";
        return s += '\n                <div class="md" id="',
        (e = a.name) ? e = e.call(n, {
            hash: {},
            data: t
        }) : (e = n && n.name, e = typeof e === d ? e.call(n, {
            hash: {},
            data: t
        }) : e),
        s += p(e) + '">\n                      ',
        (e = a.content) ? e = e.call(n, {
            hash: {},
            data: t
        }) : (e = n && n.content, e = typeof e === d ? e.call(n, {
            hash: {},
            data: t
        }) : e),
        (e || 0 === e) && (s += e),
        s += "\n                </div>\n            "
    }
    function i(n, t) {
        var e, s, l = "";
        return l += '\n                    <ul class="tag_list">\n                        ',
        s = a.each.call(n, (e = n && n.content, e = null == e || e === !1 ? e: e.html, null == e || e === !1 ? e: e.topics), {
            hash: {},
            inverse: m.noop,
            fn: m.program(4, c, t),
            data: t
        }),
        (s || 0 === s) && (l += s),
        l += "\n                    </ul>\n                "
    }
    function c(n) {
        var t = "";
        return t += '\n                            <li><a href="http://m.csdn.net/tag_list.html?tag=' + p(typeof n === d ? n.apply(n) : n) + '">' + p(typeof n === d ? n.apply(n) : n) + "</a></li>\n                        "
    }
    this.compilerInfo = [4, ">= 1.0.0"],
    a = this.merge(a, n.helpers),
    e = this.merge(e, n.partials),
    s = s || {};
    var r, o, h = "",
    d = "function",
    p = this.escapeExpression,
    m = this;
    return h += '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="initial-scale=1, minimum-scale=1, maximum-scale=1">\n  <title>',
    (r = a.title) ? r = r.call(t, {
        hash: {},
        data: s
    }) : (r = t && t.title, r = typeof r === d ? r.call(t, {
        hash: {},
        data: s
    }) : r),
    h += p(r) + '</title>\n  <link rel="stylesheet" href="',
    (r = a.__stylePath) ? r = r.call(t, {
        hash: {},
        data: s
    }) : (r = t && t.__stylePath, r = typeof r === d ? r.call(t, {
        hash: {},
        data: s
    }) : r),
    h += p(r) + '" />\n</head>\n<body class="cn">\n	<div data-role="page" class="page">\n		<div class="hd i-hd">\n            <h1><a href="http://www.csdn.net/">CSDN.NET</a></h1>\n            <a href="#nav" class="nav-link"><em></em><span>Menu</span></a>\n		</div>\n        <nav id="nav">\n            <ul>\n                <li><a href="http://m.csdn.net" target="_blank">资讯</a></li>\n                <li><a href="http://geek.csdn.net/" target="_blank">极客头条</a></li>\n                <li><a href="http://m.blog.csdn.net" target="_blank">博客</a></li>\n            </ul>\n        </nav>\n		<div data-role="content" data-theme="c" class="content">\n            ',
    o = a.each.call(t, (r = t && t.content, r = null == r || r === !1 ? r: r.html, null == r || r === !1 ? r: r.news), {
        hash: {},
        inverse: m.noop,
        fn: m.program(1, l, s),
        data: s
    }),
    (o || 0 === o) && (h += o),
    h += '\n            <div class="md" id="topics">\n                <h2><a href="#">热门主题</a></h2>\n                ',
    o = a["if"].call(t, (r = t && t.content, r = null == r || r === !1 ? r: r.html, null == r || r === !1 ? r: r.topics), {
        hash: {},
        inverse: m.noop,
        fn: m.program(3, i, s),
        data: s
    }),
    (o || 0 === o) && (h += o),
    h += '\n            </div>\n\n		</div>\n        <div class="syp-bar ft">\n            ',
    o = m.invokePartial(e.switch_mode, "switch_mode", t, a, e, s),
    (o || 0 === o) && (h += o),
    h += '\n            <p class="ft-cr">&copy; 1999-2012, CSDN.NET, All Rights Reserved.</p>\n        </div>\n        ',
    o = m.invokePartial(e.powered_by, "powered_by", t, a, e, s),
    (o || 0 === o) && (h += o),
    h += '\n\n    </div>\n    <script src="http://s.yunshipei.com/javascript/jquery-1.9.1.min.js"></script>\n    <script src="http://counter.csdn.net/a/js/AreaCounter.js" type="text/javascript"></script>\n    <script type="text/javascript">\n        (function ($) {\n            $(function () {\n                $(".nav-link").click(function () {\n                    $("#nav").slideToggle();\n                    return false;\n                });\n                $(".md h2").each(function () {\n                    var $t = $(this);\n                    $t.append("<span class=\'expander\'>—</span>");\n                    $t.siblings().wrapAll("<div class=\'md-bd\'></div>");\n                    var $ex = $(this).find(".expander");\n\n                    $ex.text($t.next(".md-bd").is(":hidden") ? "+" : "—");\n\n                    $t.click(function () {\n                        $ex.text(($ex.text() == "+") ? "—" : "+");\n                        $t.next(".md-bd").slideToggle("fast");\n                        return false;\n                    });\n                });\n\n                $("#geek li").each(function (i) {\n                    var index = "0" + (i + 1);\n                    $("<span class=\'order\'>" + index + "<span>").insertBefore($(this).find("a"));\n                });\n            });\n        })(jQuery);\n\n        //google计数器\n        var _gaq = _gaq || [];\n        _gaq.push([\'_setAccount\', \'UA-535605-6\']);\n        _gaq.push([\'_setDomainName\', \'csdn.net\']);\n        _gaq.push([\'_trackPageview\']);\n        (function() {\n            var ga = document.createElement(\'script\'); ga.type = \'text/javascript\'; ga.async = true;\n            ga.src = (\'https:\' == document.location.protocol ? \'https://ssl\' : \'http://www\') + \'.google-analytics.com/ga.js\';\n            var s = document.getElementsByTagName(\'script\')[0]; s.parentNode.insertBefore(ga, s);\n        })();\n    </script>\n',
    o = m.invokePartial(e.allmobilize_track, "allmobilize_track", t, a, e, s),
    (o || 0 === o) && (h += o),
    h += "</body>\n</html>\n"
};
window.AMPlatform.__tmpl.general = function(n, t, a, e, s) {
    this.compilerInfo = [4, ">= 1.0.0"],
    a = this.merge(a, n.helpers),
    e = this.merge(e, n.partials),
    s = s || {};
    var l, i, c = "",
    r = "function",
    o = this.escapeExpression,
    d = this;
    return c += '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="initial-scale=1, minimum-scale=1, maximum-scale=1">\n  <title>',
    (l = a.title) ? l = l.call(t, {
        hash: {},
        data: s
    }) : (l = t && t.title, l = typeof l === r ? l.call(t, {
        hash: {},
        data: s
    }) : l),
    c += o(l) + '</title>\n  <meta name="format-detection" content="telephone=no">\n  <link rel="stylesheet" href="',
    (l = a.__stylePath) ? l = l.call(t, {
        hash: {},
        data: s
    }) : (l = t && t.__stylePath, l = typeof l === r ? l.call(t, {
        hash: {},
        data: s
    }) : l),
    c += o(l) + '" />\n</head>\n<body class="cn">\n	<div data-role="page" class="page">\n        <div class="hd i-hd">\n            <h1><a href="http://www.csdn.net/">CSDN.NET</a></h1>\n            <a href="#nav" class="nav-link"><em></em><span>Menu</span></a>\n        </div>\n        <nav id="nav">\n            <ul>\n                <li><a href="http://m.csdn.net" target="_blank">资讯</a></li>\n                <li><a href="http://geek.csdn.net/" target="_blank">极客头条</a></li>\n                <li><a href="http://m.blog.csdn.net" target="_blank">博客</a></li>\n            </ul>\n        </nav>\n		<div data-role="content" data-theme="c" class="content">\n			',
    l = t && t.content,
    l = null == l || l === !1 ? l: l.html,
    i = typeof l === r ? l.apply(t) : l,
    (i || 0 === i) && (c += i),
    c += '\n		</div>\n        <div class="syp-bar ft">\n            ',
    i = d.invokePartial(e.switch_mode, "switch_mode", t, a, e, s),
    (i || 0 === i) && (c += i),
    c += '\n            <p class="ft-cr">&copy; 1999-2012, CSDN.NET, All Rights Reserved.</p>\n        </div>\n        ',
    i = d.invokePartial(e.powered_by, "powered_by", t, a, e, s),
    (i || 0 === i) && (c += i),
    c += '\n    </div>\n    <script src="http://s.yunshipei.com/javascript/jquery-1.9.1.min.js"></script>\n    <script src="http://counter.csdn.net/a/js/AreaCounter.js" type="text/javascript"></script>\n    <script type="text/javascript">\n    (function($) {\n        $(function () {\n            $(".nav-link").click(function () {\n                $("#nav").slideToggle();\n                return false;\n            });\n\n            var $nl = $(".news_list");\n\n            $nl.find("dt").each(function () {\n                var $t = $(this);\n                $t.append("<span class=\'arrow\'></span>");\n                $t.click(function () {\n                    $t.next("dd").slideToggle("fast");\n                    $t.find(".arrow").toggleClass("expanded");\n                });\n            });\n            $nl.find("dt").eq(0).next("dd").slideDown().\n                    end().find(".arrow").addClass("expanded");\n\n        });\n    })(jQuery);\n\n    //google计数器\n    var _gaq = _gaq || [];\n    _gaq.push([\'_setAccount\', \'UA-535605-6\']);\n    _gaq.push([\'_setDomainName\', \'csdn.net\']);\n    _gaq.push([\'_trackPageview\']);\n    (function() {\n        var ga = document.createElement(\'script\'); ga.type = \'text/javascript\'; ga.async = true;\n        ga.src = (\'https:\' == document.location.protocol ? \'https://ssl\' : \'http://www\') + \'.google-analytics.com/ga.js\';\n        var s = document.getElementsByTagName(\'script\')[0]; s.parentNode.insertBefore(ga, s);\n    })();\n</script>\n',
    i = d.invokePartial(e.allmobilize_track, "allmobilize_track", t, a, e, s),
    (i || 0 === i) && (c += i),
    c += "</body>\n</html>\n"
}; !
function(t) {
    String.prototype.trim === t && (String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    }),
    Array.prototype.reduce === t && (Array.prototype.reduce = function(n) {
        if (void 0 === this || null === this) throw new TypeError;
        var e, i = Object(this),
        r = i.length >>> 0,
        o = 0;
        if ("function" != typeof n) throw new TypeError;
        if (0 == r && 1 == arguments.length) throw new TypeError;
        if (arguments.length >= 2) e = arguments[1];
        else for (;;) {
            if (o in i) {
                e = i[o++];
                break
            }
            if (++o >= r) throw new TypeError
        }
        for (; r > o;) o in i && (e = n.call(t, e, i[o], o, i)),
        o++;
        return e
    })
} ();
var Zepto = function() {
    function t(t) {
        return null == t ? String(t) : X[W.call(t)] || "object"
    }
    function n(n) {
        return "function" == t(n)
    }
    function e(t) {
        return null != t && t == t.window
    }
    function i(t) {
        return null != t && t.nodeType == t.DOCUMENT_NODE
    }
    function r(n) {
        return "object" == t(n)
    }
    function o(t) {
        return r(t) && !e(t) && t.__proto__ == Object.prototype
    }
    function a(t) {
        return t instanceof Array
    }
    function s(t) {
        return "number" == typeof t.length
    }
    function u(t) {
        return A.call(t,
        function(t) {
            return null != t
        })
    }
    function c(t) {
        return t.length > 0 ? j.fn.concat.apply([], t) : t
    }
    function l(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }
    function f(t) {
        return t in _ ? _[t] : _[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
    }
    function h(t, n) {
        return "number" != typeof n || Z[l(t)] ? n: n + "px"
    }
    function p(t) {
        var n, e;
        return $[t] || (n = k.createElement(t), k.body.appendChild(n), e = M(n, "").getPropertyValue("display"), n.parentNode.removeChild(n), "none" == e && (e = "block"), $[t] = e),
        $[t]
    }
    function d(t) {
        return "children" in t ? P.call(t.children) : j.map(t.childNodes,
        function(t) {
            return 1 == t.nodeType ? t: void 0
        })
    }
    function m(t, n, e) {
        for (T in n) e && (o(n[T]) || a(n[T])) ? (o(n[T]) && !o(t[T]) && (t[T] = {}), a(n[T]) && !a(t[T]) && (t[T] = []), m(t[T], n[T], e)) : n[T] !== E && (t[T] = n[T])
    }
    function v(t, n) {
        return n === E ? j(t) : j(t).filter(n)
    }
    function g(t, e, i, r) {
        return n(e) ? e.call(t, i, r) : e
    }
    function y(t, n, e) {
        null == e ? t.removeAttribute(n) : t.setAttribute(n, e)
    }
    function b(t, n) {
        var e = t.className,
        i = e && e.baseVal !== E;
        return n === E ? i ? e.baseVal: e: (i ? e.baseVal = n: t.className = n, void 0)
    }
    function x(t) {
        var n;
        try {
            return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null: isNaN(n = Number(t)) ? /^[\[\{]/.test(t) ? j.parseJSON(t) : t: n) : t
        } catch(e) {
            return t
        }
    }
    function w(t, n) {
        n(t);
        for (var e in t.childNodes) w(t.childNodes[e], n)
    }
    var E, T, j, S, N, C, O = [],
    P = O.slice,
    A = O.filter,
    k = window.document,
    $ = {},
    _ = {},
    M = k.defaultView.getComputedStyle,
    Z = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    },
    z = /^\s*<(\w+|!)[^>]*>/,
    R = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    D = /^(?:body|html)$/i,
    L = ["val", "css", "html", "text", "data", "width", "height", "offset"],
    q = ["after", "prepend", "before", "append"],
    F = k.createElement("table"),
    B = k.createElement("tr"),
    I = {
        tr: k.createElement("tbody"),
        tbody: F,
        thead: F,
        tfoot: F,
        td: B,
        th: B,
        "*": k.createElement("div")
    },
    H = /complete|loaded|interactive/,
    U = /^\.([\w-]+)$/,
    V = /^#([\w-]*)$/,
    J = /^[\w-]+$/,
    X = {},
    W = X.toString,
    Y = {},
    G = k.createElement("div");
    return Y.matches = function(t, n) {
        if (!t || 1 !== t.nodeType) return ! 1;
        var e = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
        if (e) return e.call(t, n);
        var i, r = t.parentNode,
        o = !r;
        return o && (r = G).appendChild(t),
        i = ~Y.qsa(r, n).indexOf(t),
        o && G.removeChild(t),
        i
    },
    N = function(t) {
        return t.replace(/-+(.)?/g,
        function(t, n) {
            return n ? n.toUpperCase() : ""
        })
    },
    C = function(t) {
        return A.call(t,
        function(n, e) {
            return t.indexOf(n) == e
        })
    },
    Y.fragment = function(t, n, e) {
        t.replace && (t = t.replace(R, "<$1></$2>")),
        n === E && (n = z.test(t) && RegExp.$1),
        n in I || (n = "*");
        var i, r, a = I[n];
        return a.innerHTML = "" + t,
        r = j.each(P.call(a.childNodes),
        function() {
            a.removeChild(this)
        }),
        o(e) && (i = j(r), j.each(e,
        function(t, n) {
            L.indexOf(t) > -1 ? i[t](n) : i.attr(t, n)
        })),
        r
    },
    Y.Z = function(t, n) {
        return t = t || [],
        t.__proto__ = j.fn,
        t.selector = n || "",
        t
    },
    Y.isZ = function(t) {
        return t instanceof Y.Z
    },
    Y.init = function(t, e) {
        if (t) {
            if (n(t)) return j(k).ready(t);
            if (Y.isZ(t)) return t;
            var i;
            if (a(t)) i = u(t);
            else if (r(t)) i = [o(t) ? j.extend({},
            t) : t],
            t = null;
            else if (z.test(t)) i = Y.fragment(t.trim(), RegExp.$1, e),
            t = null;
            else {
                if (e !== E) return j(e).find(t);
                i = Y.qsa(k, t)
            }
            return Y.Z(i, t)
        }
        return Y.Z()
    },
    j = function(t, n) {
        return Y.init(t, n)
    },
    j.extend = function(t) {
        var n, e = P.call(arguments, 1);
        return "boolean" == typeof t && (n = t, t = e.shift()),
        e.forEach(function(e) {
            m(t, e, n)
        }),
        t
    },
    Y.qsa = function(t, n) {
        var e;
        return i(t) && V.test(n) ? (e = t.getElementById(RegExp.$1)) ? [e] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : P.call(U.test(n) ? t.getElementsByClassName(RegExp.$1) : J.test(n) ? t.getElementsByTagName(n) : t.querySelectorAll(n))
    },
    j.contains = function(t, n) {
        return t !== n && t.contains(n)
    },
    j.type = t,
    j.isFunction = n,
    j.isWindow = e,
    j.isArray = a,
    j.isPlainObject = o,
    j.isEmptyObject = function(t) {
        var n;
        for (n in t) return ! 1;
        return ! 0
    },
    j.inArray = function(t, n, e) {
        return O.indexOf.call(n, t, e)
    },
    j.camelCase = N,
    j.trim = function(t) {
        return t.trim()
    },
    j.uuid = 0,
    j.support = {},
    j.expr = {},
    j.map = function(t, n) {
        var e, i, r, o = [];
        if (s(t)) for (i = 0; i < t.length; i++) e = n(t[i], i),
        null != e && o.push(e);
        else for (r in t) e = n(t[r], r),
        null != e && o.push(e);
        return c(o)
    },
    j.each = function(t, n) {
        var e, i;
        if (s(t)) {
            for (e = 0; e < t.length; e++) if (n.call(t[e], e, t[e]) === !1) return t
        } else for (i in t) if (n.call(t[i], i, t[i]) === !1) return t;
        return t
    },
    j.grep = function(t, n) {
        return A.call(t, n)
    },
    window.JSON && (j.parseJSON = JSON.parse),
    j.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(t, n) {
        X["[object " + n + "]"] = n.toLowerCase()
    }),
    j.fn = {
        forEach: O.forEach,
        reduce: O.reduce,
        push: O.push,
        sort: O.sort,
        indexOf: O.indexOf,
        concat: O.concat,
        map: function(t) {
            return j(j.map(this,
            function(n, e) {
                return t.call(n, e, n)
            }))
        },
        slice: function() {
            return j(P.apply(this, arguments))
        },
        ready: function(t) {
            return H.test(k.readyState) ? t(j) : k.addEventListener("DOMContentLoaded",
            function() {
                t(j)
            },
            !1),
            this
        },
        get: function(t) {
            return t === E ? P.call(this) : this[t >= 0 ? t: t + this.length]
        },
        toArray: function() {
            return this.get()
        },
        size: function() {
            return this.length
        },
        remove: function() {
            return this.each(function() {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function(t) {
            return O.every.call(this,
            function(n, e) {
                return t.call(n, e, n) !== !1
            }),
            this
        },
        filter: function(t) {
            return n(t) ? this.not(this.not(t)) : j(A.call(this,
            function(n) {
                return Y.matches(n, t)
            }))
        },
        add: function(t, n) {
            return j(C(this.concat(j(t, n))))
        },
        is: function(t) {
            return this.length > 0 && Y.matches(this[0], t)
        },
        not: function(t) {
            var e = [];
            if (n(t) && t.call !== E) this.each(function(n) {
                t.call(this, n) || e.push(this)
            });
            else {
                var i = "string" == typeof t ? this.filter(t) : s(t) && n(t.item) ? P.call(t) : j(t);
                this.forEach(function(t) {
                    i.indexOf(t) < 0 && e.push(t)
                })
            }
            return j(e)
        },
        has: function(t) {
            return this.filter(function() {
                return r(t) ? j.contains(this, t) : j(this).find(t).size()
            })
        },
        eq: function(t) {
            return - 1 === t ? this.slice(t) : this.slice(t, +t + 1)
        },
        first: function() {
            var t = this[0];
            return t && !r(t) ? t: j(t)
        },
        last: function() {
            var t = this[this.length - 1];
            return t && !r(t) ? t: j(t)
        },
        find: function(t) {
            var n, e = this;
            return n = "object" == typeof t ? j(t).filter(function() {
                var t = this;
                return O.some.call(e,
                function(n) {
                    return j.contains(n, t)
                })
            }) : 1 == this.length ? j(Y.qsa(this[0], t)) : this.map(function() {
                return Y.qsa(this, t)
            })
        },
        closest: function(t, n) {
            var e = this[0],
            r = !1;
            for ("object" == typeof t && (r = j(t)); e && !(r ? r.indexOf(e) >= 0 : Y.matches(e, t));) e = e !== n && !i(e) && e.parentNode;
            return j(e)
        },
        parents: function(t) {
            for (var n = [], e = this; e.length > 0;) e = j.map(e,
            function(t) {
                return (t = t.parentNode) && !i(t) && n.indexOf(t) < 0 ? (n.push(t), t) : void 0
            });
            return v(n, t)
        },
        parent: function(t) {
            return v(C(this.pluck("parentNode")), t)
        },
        children: function(t) {
            return v(this.map(function() {
                return d(this)
            }), t)
        },
        contents: function() {
            return this.map(function() {
                return P.call(this.childNodes)
            })
        },
        siblings: function(t) {
            return v(this.map(function(t, n) {
                return A.call(d(n.parentNode),
                function(t) {
                    return t !== n
                })
            }), t)
        },
        empty: function() {
            return this.each(function() {
                this.innerHTML = ""
            })
        },
        pluck: function(t) {
            return j.map(this,
            function(n) {
                return n[t]
            })
        },
        show: function() {
            return this.each(function() {
                "none" == this.style.display && (this.style.display = null),
                "none" == M(this, "").getPropertyValue("display") && (this.style.display = p(this.nodeName))
            })
        },
        replaceWith: function(t) {
            return this.before(t).remove()
        },
        wrap: function(t) {
            var e = n(t);
            if (this[0] && !e) var i = j(t).get(0),
            r = i.parentNode || this.length > 1;
            return this.each(function(n) {
                j(this).wrapAll(e ? t.call(this, n) : r ? i.cloneNode(!0) : i)
            })
        },
        wrapAll: function(t) {
            if (this[0]) {
                j(this[0]).before(t = j(t));
                for (var n; (n = t.children()).length;) t = n.first();
                j(t).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            var e = n(t);
            return this.each(function(n) {
                var i = j(this),
                r = i.contents(),
                o = e ? t.call(this, n) : t;
                r.length ? r.wrapAll(o) : i.append(o)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                j(this).replaceWith(j(this).children())
            }),
            this
        },
        clone: function() {
            return this.map(function() {
                return this.cloneNode(!0)
            })
        },
        hide: function() {
            return this.css("display", "none")
        },
        toggle: function(t) {
            return this.each(function() {
                var n = j(this); (t === E ? "none" == n.css("display") : t) ? n.show() : n.hide()
            })
        },
        prev: function(t) {
            return j(this.pluck("previousElementSibling")).filter(t || "*")
        },
        next: function(t) {
            return j(this.pluck("nextElementSibling")).filter(t || "*")
        },
        html: function(t) {
            return t === E ? this.length > 0 ? this[0].innerHTML: null: this.each(function(n) {
                var e = this.innerHTML;
                j(this).empty().append(g(this, t, n, e))
            })
        },
        text: function(t) {
            return t === E ? this.length > 0 ? this[0].textContent: null: this.each(function() {
                this.textContent = t
            })
        },
        attr: function(t, n) {
            var e;
            return "string" == typeof t && n === E ? 0 == this.length || 1 !== this[0].nodeType ? E: "value" == t && "INPUT" == this[0].nodeName ? this.val() : !(e = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : e: this.each(function(e) {
                if (1 === this.nodeType) if (r(t)) for (T in t) y(this, T, t[T]);
                else y(this, t, g(this, n, e, this.getAttribute(t)))
            })
        },
        removeAttr: function(t) {
            return this.each(function() {
                1 === this.nodeType && y(this, t)
            })
        },
        prop: function(t, n) {
            return n === E ? this[0] && this[0][t] : this.each(function(e) {
                this[t] = g(this, n, e, this[t])
            })
        },
        data: function(t, n) {
            var e = this.attr("data-" + l(t), n);
            return null !== e ? x(e) : E
        },
        val: function(t) {
            return t === E ? this[0] && (this[0].multiple ? j(this[0]).find("option").filter(function() {
                return this.selected
            }).pluck("value") : this[0].value) : this.each(function(n) {
                this.value = g(this, t, n, this.value)
            })
        },
        offset: function(t) {
            if (t) return this.each(function(n) {
                var e = j(this),
                i = g(this, t, n, e.offset()),
                r = e.offsetParent().offset(),
                o = {
                    top: i.top - r.top,
                    left: i.left - r.left
                };
                "static" == e.css("position") && (o.position = "relative"),
                e.css(o)
            });
            if (0 == this.length) return null;
            var n = this[0].getBoundingClientRect();
            return {
                left: n.left + window.pageXOffset,
                top: n.top + window.pageYOffset,
                width: Math.round(n.width),
                height: Math.round(n.height)
            }
        },
        css: function(n, e) {
            if (arguments.length < 2 && "string" == typeof n) return this[0] && (this[0].style[N(n)] || M(this[0], "").getPropertyValue(n));
            var i = "";
            if ("string" == t(n)) e || 0 === e ? i = l(n) + ":" + h(n, e) : this.each(function() {
                this.style.removeProperty(l(n))
            });
            else for (T in n) n[T] || 0 === n[T] ? i += l(T) + ":" + h(T, n[T]) + ";": this.each(function() {
                this.style.removeProperty(l(T))
            });
            return this.each(function() {
                this.style.cssText += ";" + i
            })
        },
        index: function(t) {
            return t ? this.indexOf(j(t)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function(t) {
            return O.some.call(this,
            function(t) {
                return this.test(b(t))
            },
            f(t))
        },
        addClass: function(t) {
            return this.each(function(n) {
                S = [];
                var e = b(this),
                i = g(this, t, n, e);
                i.split(/\s+/g).forEach(function(t) {
                    j(this).hasClass(t) || S.push(t)
                },
                this),
                S.length && b(this, e + (e ? " ": "") + S.join(" "))
            })
        },
        removeClass: function(t) {
            return this.each(function(n) {
                return t === E ? b(this, "") : (S = b(this), g(this, t, n, S).split(/\s+/g).forEach(function(t) {
                    S = S.replace(f(t), " ")
                }), b(this, S.trim()), void 0)
            })
        },
        toggleClass: function(t, n) {
            return this.each(function(e) {
                var i = j(this),
                r = g(this, t, e, b(this));
                r.split(/\s+/g).forEach(function(t) { (n === E ? !i.hasClass(t) : n) ? i.addClass(t) : i.removeClass(t)
                })
            })
        },
        scrollTop: function() {
            return this.length ? "scrollTop" in this[0] ? this[0].scrollTop: this[0].scrollY: void 0
        },
        position: function() {
            if (this.length) {
                var t = this[0],
                n = this.offsetParent(),
                e = this.offset(),
                i = D.test(n[0].nodeName) ? {
                    top: 0,
                    left: 0
                }: n.offset();
                return e.top -= parseFloat(j(t).css("margin-top")) || 0,
                e.left -= parseFloat(j(t).css("margin-left")) || 0,
                i.top += parseFloat(j(n[0]).css("border-top-width")) || 0,
                i.left += parseFloat(j(n[0]).css("border-left-width")) || 0,
                {
                    top: e.top - i.top,
                    left: e.left - i.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || k.body; t && !D.test(t.nodeName) && "static" == j(t).css("position");) t = t.offsetParent;
                return t
            })
        }
    },
    j.fn.detach = j.fn.remove,
    ["width", "height"].forEach(function(t) {
        j.fn[t] = function(n) {
            var r, o = this[0],
            a = t.replace(/./,
            function(t) {
                return t[0].toUpperCase()
            });
            return n === E ? e(o) ? o["inner" + a] : i(o) ? o.documentElement["offset" + a] : (r = this.offset()) && r[t] : this.each(function(e) {
                o = j(this),
                o.css(t, g(this, n, e, o[t]()))
            })
        }
    }),
    q.forEach(function(n, e) {
        var i = e % 2;
        j.fn[n] = function() {
            var n, r, o = j.map(arguments,
            function(e) {
                return n = t(e),
                "object" == n || "array" == n || null == e ? e: Y.fragment(e)
            }),
            a = this.length > 1;
            return o.length < 1 ? this: this.each(function(t, n) {
                r = i ? n: n.parentNode,
                n = 0 == e ? n.nextSibling: 1 == e ? n.firstChild: 2 == e ? n: null,
                o.forEach(function(t) {
                    if (a) t = t.cloneNode(!0);
                    else if (!r) return j(t).remove();
                    w(r.insertBefore(t, n),
                    function(t) {
                        null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                    })
                })
            })
        },
        j.fn[i ? n + "To": "insert" + (e ? "Before": "After")] = function(t) {
            return j(t)[n](this),
            this
        }
    }),
    Y.Z.prototype = j.fn,
    Y.uniq = C,
    Y.deserializeValue = x,
    j.zepto = Y,
    j
} ();
window.Zepto = Zepto,
"$" in window || (window.$ = Zepto),
function(t) {
    function n(t) {
        var n = this.os = {},
        e = this.browser = {},
        i = t.match(/WebKit\/([\d.]+)/),
        r = t.match(/(Android)\s+([\d.]+)/),
        o = t.match(/(iPad).*OS\s([\d_]+)/),
        a = !o && t.match(/(iPhone\sOS)\s([\d_]+)/),
        s = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
        u = s && t.match(/TouchPad/),
        c = t.match(/Kindle\/([\d.]+)/),
        l = t.match(/Silk\/([\d._]+)/),
        f = t.match(/(BlackBerry).*Version\/([\d.]+)/),
        h = t.match(/(BB10).*Version\/([\d.]+)/),
        p = t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
        d = t.match(/PlayBook/),
        m = t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/),
        v = t.match(/Firefox\/([\d.]+)/); (e.webkit = !!i) && (e.version = i[1]),
        r && (n.android = !0, n.version = r[2]),
        a && (n.ios = n.iphone = !0, n.version = a[2].replace(/_/g, ".")),
        o && (n.ios = n.ipad = !0, n.version = o[2].replace(/_/g, ".")),
        s && (n.webos = !0, n.version = s[2]),
        u && (n.touchpad = !0),
        f && (n.blackberry = !0, n.version = f[2]),
        h && (n.bb10 = !0, n.version = h[2]),
        p && (n.rimtabletos = !0, n.version = p[2]),
        d && (e.playbook = !0),
        c && (n.kindle = !0, n.version = c[1]),
        l && (e.silk = !0, e.version = l[1]),
        !l && n.android && t.match(/Kindle Fire/) && (e.silk = !0),
        m && (e.chrome = !0, e.version = m[1]),
        v && (e.firefox = !0, e.version = v[1]),
        n.tablet = !!(o || d || r && !t.match(/Mobile/) || v && t.match(/Tablet/)),
        n.phone = !(n.tablet || !(r || a || s || f || h || m && t.match(/Android/) || m && t.match(/CriOS\/([\d.]+)/) || v && t.match(/Mobile/)))
    }
    n.call(t, navigator.userAgent),
    t.__detect = n
} (Zepto),
function(t) {
    function n(t) {
        return t._zid || (t._zid = p++)
    }
    function e(t, e, o, a) {
        if (e = i(e), e.ns) var s = r(e.ns);
        return (h[n(t)] || []).filter(function(t) {
            return ! (!t || e.e && t.e != e.e || e.ns && !s.test(t.ns) || o && n(t.fn) !== n(o) || a && t.sel != a)
        })
    }
    function i(t) {
        var n = ("" + t).split(".");
        return {
            e: n[0],
            ns: n.slice(1).sort().join(" ")
        }
    }
    function r(t) {
        return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
    }
    function o(n, e, i) {
        "string" != t.type(n) ? t.each(n, i) : n.split(/\s/).forEach(function(t) {
            i(t, e)
        })
    }
    function a(t, n) {
        return t.del && ("focus" == t.e || "blur" == t.e) || !!n
    }
    function s(t) {
        return m[t] || t
    }
    function u(e, r, u, c, l, f) {
        var p = n(e),
        d = h[p] || (h[p] = []);
        o(r, u,
        function(n, r) {
            var o = i(n);
            o.fn = r,
            o.sel = c,
            o.e in m && (r = function(n) {
                var e = n.relatedTarget;
                return ! e || e !== this && !t.contains(this, e) ? o.fn.apply(this, arguments) : void 0
            }),
            o.del = l && l(r, n);
            var u = o.del || r;
            o.proxy = function(t) {
                var n = u.apply(e, [t].concat(t.data));
                return n === !1 && (t.preventDefault(), t.stopPropagation()),
                n
            },
            o.i = d.length,
            d.push(o),
            e.addEventListener(s(o.e), o.proxy, a(o, f))
        })
    }
    function c(t, i, r, u, c) {
        var l = n(t);
        o(i || "", r,
        function(n, i) {
            e(t, n, i, u).forEach(function(n) {
                delete h[l][n.i],
                t.removeEventListener(s(n.e), n.proxy, a(n, c))
            })
        })
    }
    function l(n) {
        var e, i = {
            originalEvent: n
        };
        for (e in n) y.test(e) || void 0 === n[e] || (i[e] = n[e]);
        return t.each(b,
        function(t, e) {
            i[t] = function() {
                return this[e] = v,
                n[t].apply(n, arguments)
            },
            i[e] = g
        }),
        i
    }
    function f(t) {
        if (! ("defaultPrevented" in t)) {
            t.defaultPrevented = !1;
            var n = t.preventDefault;
            t.preventDefault = function() {
                this.defaultPrevented = !0,
                n.call(this)
            }
        }
    }
    var h = (t.zepto.qsa, {}),
    p = 1,
    d = {},
    m = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    d.click = d.mousedown = d.mouseup = d.mousemove = "MouseEvents",
    t.event = {
        add: u,
        remove: c
    },
    t.proxy = function(e, i) {
        if (t.isFunction(e)) {
            var r = function() {
                return e.apply(i, arguments)
            };
            return r._zid = n(e),
            r
        }
        if ("string" == typeof i) return t.proxy(e[i], e);
        throw new TypeError("expected function")
    },
    t.fn.bind = function(t, n) {
        return this.each(function() {
            u(this, t, n)
        })
    },
    t.fn.unbind = function(t, n) {
        return this.each(function() {
            c(this, t, n)
        })
    },
    t.fn.one = function(t, n) {
        return this.each(function(e, i) {
            u(this, t, n, null,
            function(t, n) {
                return function() {
                    var e = t.apply(i, arguments);
                    return c(i, n, t),
                    e
                }
            })
        })
    };
    var v = function() {
        return ! 0
    },
    g = function() {
        return ! 1
    },
    y = /^([A-Z]|layer[XY]$)/,
    b = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };
    t.fn.delegate = function(n, e, i) {
        return this.each(function(r, o) {
            u(o, e, i, n,
            function(e) {
                return function(i) {
                    var r, a = t(i.target).closest(n, o).get(0);
                    return a ? (r = t.extend(l(i), {
                        currentTarget: a,
                        liveFired: o
                    }), e.apply(a, [r].concat([].slice.call(arguments, 1)))) : void 0
                }
            })
        })
    },
    t.fn.undelegate = function(t, n, e) {
        return this.each(function() {
            c(this, n, e, t)
        })
    },
    t.fn.live = function(n, e) {
        return t(document.body).delegate(this.selector, n, e),
        this
    },
    t.fn.die = function(n, e) {
        return t(document.body).undelegate(this.selector, n, e),
        this
    },
    t.fn.on = function(n, e, i) {
        return ! e || t.isFunction(e) ? this.bind(n, e || i) : this.delegate(e, n, i)
    },
    t.fn.off = function(n, e, i) {
        return ! e || t.isFunction(e) ? this.unbind(n, e || i) : this.undelegate(e, n, i)
    },
    t.fn.trigger = function(n, e) {
        return ("string" == typeof n || t.isPlainObject(n)) && (n = t.Event(n)),
        f(n),
        n.data = e,
        this.each(function() {
            "dispatchEvent" in this && this.dispatchEvent(n)
        })
    },
    t.fn.triggerHandler = function(n, i) {
        var r, o;
        return this.each(function(a, s) {
            r = l("string" == typeof n ? t.Event(n) : n),
            r.data = i,
            r.target = s,
            t.each(e(s, n.type || n),
            function(t, n) {
                return o = n.proxy(r),
                r.isImmediatePropagationStopped() ? !1 : void 0
            })
        }),
        o
    },
    "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(n) {
        t.fn[n] = function(t) {
            return t ? this.bind(n, t) : this.trigger(n)
        }
    }),
    ["focus", "blur"].forEach(function(n) {
        t.fn[n] = function(t) {
            return t ? this.bind(n, t) : this.each(function() {
                try {
                    this[n]()
                } catch(t) {}
            }),
            this
        }
    }),
    t.Event = function(t, n) {
        "string" != typeof t && (n = t, t = n.type);
        var e = document.createEvent(d[t] || "Events"),
        i = !0;
        if (n) for (var r in n)"bubbles" == r ? i = !!n[r] : e[r] = n[r];
        return e.initEvent(t, i, !0, null, null, null, null, null, null, null, null, null, null, null, null),
        e.isDefaultPrevented = function() {
            return this.defaultPrevented
        },
        e
    }
} (Zepto),
function(t) {
    function n(n, e, i) {
        var r = t.Event(e);
        return t(n).trigger(r, i),
        !r.defaultPrevented
    }
    function e(t, e, i, r) {
        return t.global ? n(e || y, i, r) : void 0
    }
    function i(n) {
        n.global && 0 === t.active++&&e(n, null, "ajaxStart")
    }
    function r(n) {
        n.global && !--t.active && e(n, null, "ajaxStop")
    }
    function o(t, n) {
        var i = n.context;
        return n.beforeSend.call(i, t, n) === !1 || e(n, i, "ajaxBeforeSend", [t, n]) === !1 ? !1 : (e(n, i, "ajaxSend", [t, n]), void 0)
    }
    function a(t, n, i) {
        var r = i.context,
        o = "success";
        i.success.call(r, t, o, n),
        e(i, r, "ajaxSuccess", [n, i, t]),
        u(o, n, i)
    }
    function s(t, n, i, r) {
        var o = r.context;
        r.error.call(o, i, n, t),
        e(r, o, "ajaxError", [i, r, t]),
        u(n, i, r)
    }
    function u(t, n, i) {
        var o = i.context;
        i.complete.call(o, n, t),
        e(i, o, "ajaxComplete", [n, i]),
        r(i)
    }
    function c() {}
    function l(t) {
        return t && (t = t.split(";", 2)[0]),
        t && (t == T ? "html": t == E ? "json": x.test(t) ? "script": w.test(t) && "xml") || "text"
    }
    function f(t, n) {
        return (t + "&" + n).replace(/[&?]{1,2}/, "?")
    }
    function h(n) {
        n.processData && n.data && "string" != t.type(n.data) && (n.data = t.param(n.data, n.traditional)),
        !n.data || n.type && "GET" != n.type.toUpperCase() || (n.url = f(n.url, n.data))
    }
    function p(n, e, i, r) {
        var o = !t.isFunction(e);
        return {
            url: n,
            data: o ? e: void 0,
            success: o ? t.isFunction(i) ? i: void 0 : e,
            dataType: o ? r || i: i
        }
    }
    function d(n, e, i, r) {
        var o, a = t.isArray(e);
        t.each(e,
        function(e, s) {
            o = t.type(s),
            r && (e = i ? r: r + "[" + (a ? "": e) + "]"),
            !r && a ? n.add(s.name, s.value) : "array" == o || !i && "object" == o ? d(n, s, i, e) : n.add(e, s)
        })
    }
    var m, v, g = 0,
    y = window.document,
    b = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    x = /^(?:text|application)\/javascript/i,
    w = /^(?:text|application)\/xml/i,
    E = "application/json",
    T = "text/html",
    j = /^\s*$/;
    t.active = 0,
    t.ajaxJSONP = function(n) {
        if (! ("type" in n)) return t.ajax(n);
        var e, i = "jsonp" + ++g,
        r = y.createElement("script"),
        u = function() {
            clearTimeout(e),
            t(r).remove(),
            delete window[i]
        },
        l = function(t) {
            u(),
            t && "timeout" != t || (window[i] = c),
            s(null, t || "abort", f, n)
        },
        f = {
            abort: l
        };
        return o(f, n) === !1 ? (l("abort"), !1) : (window[i] = function(t) {
            u(),
            a(t, f, n)
        },
        r.onerror = function() {
            l("error")
        },
        r.src = n.url.replace(/=\?/, "=" + i), t("head").append(r), n.timeout > 0 && (e = setTimeout(function() {
            l("timeout")
        },
        n.timeout)), f)
    },
    t.ajaxSettings = {
        type: "GET",
        beforeSend: c,
        success: c,
        error: c,
        complete: c,
        context: null,
        global: !0,
        xhr: function() {
            return new window.XMLHttpRequest
        },
        accepts: {
            script: "text/javascript, application/javascript",
            json: E,
            xml: "application/xml, text/xml",
            html: T,
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
    },
    t.ajax = function(n) {
        var e = t.extend({},
        n || {});
        for (m in t.ajaxSettings) void 0 === e[m] && (e[m] = t.ajaxSettings[m]);
        i(e),
        e.crossDomain || (e.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(e.url) && RegExp.$2 != window.location.host),
        e.url || (e.url = window.location.toString()),
        h(e),
        e.cache === !1 && (e.url = f(e.url, "_=" + Date.now()));
        var r = e.dataType,
        u = /=\?/.test(e.url);
        if ("jsonp" == r || u) return u || (e.url = f(e.url, "callback=?")),
        t.ajaxJSONP(e);
        var p, d = e.accepts[r],
        g = {},
        y = /^([\w-]+:)\/\//.test(e.url) ? RegExp.$1: window.location.protocol,
        b = e.xhr();
        e.crossDomain || (g["X-Requested-With"] = "XMLHttpRequest"),
        d && (g.Accept = d, d.indexOf(",") > -1 && (d = d.split(",", 2)[0]), b.overrideMimeType && b.overrideMimeType(d)),
        (e.contentType || e.contentType !== !1 && e.data && "GET" != e.type.toUpperCase()) && (g["Content-Type"] = e.contentType || "application/x-www-form-urlencoded"),
        e.headers = t.extend(g, e.headers || {}),
        b.onreadystatechange = function() {
            if (4 == b.readyState) {
                b.onreadystatechange = c,
                clearTimeout(p);
                var n, i = !1;
                if (b.status >= 200 && b.status < 300 || 304 == b.status || 0 == b.status && "file:" == y) {
                    r = r || l(b.getResponseHeader("content-type")),
                    n = b.responseText;
                    try {
                        "script" == r ? (1, eval)(n) : "xml" == r ? n = b.responseXML: "json" == r && (n = j.test(n) ? null: t.parseJSON(n))
                    } catch(o) {
                        i = o
                    }
                    i ? s(i, "parsererror", b, e) : a(n, b, e)
                } else s(null, b.status ? "error": "abort", b, e)
            }
        };
        var x = "async" in e ? e.async: !0;
        b.open(e.type, e.url, x);
        for (v in e.headers) b.setRequestHeader(v, e.headers[v]);
        return o(b, e) === !1 ? (b.abort(), !1) : (e.timeout > 0 && (p = setTimeout(function() {
            b.onreadystatechange = c,
            b.abort(),
            s(null, "timeout", b, e)
        },
        e.timeout)), b.send(e.data ? e.data: null), b)
    },
    t.get = function() {
        return t.ajax(p.apply(null, arguments))
    },
    t.post = function() {
        var n = p.apply(null, arguments);
        return n.type = "POST",
        t.ajax(n)
    },
    t.getJSON = function() {
        var n = p.apply(null, arguments);
        return n.dataType = "json",
        t.ajax(n)
    },
    t.fn.load = function(n, e, i) {
        if (!this.length) return this;
        var r, o = this,
        a = n.split(/\s/),
        s = p(n, e, i),
        u = s.success;
        return a.length > 1 && (s.url = a[0], r = a[1]),
        s.success = function(n) {
            o.html(r ? t("<div>").html(n.replace(b, "")).find(r) : n),
            u && u.apply(o, arguments)
        },
        t.ajax(s),
        this
    };
    var S = encodeURIComponent;
    t.param = function(t, n) {
        var e = [];
        return e.add = function(t, n) {
            this.push(S(t) + "=" + S(n))
        },
        d(e, t, n),
        e.join("&").replace(/%20/g, "+")
    }
} (Zepto),
function(t) {
    t.fn.serializeArray = function() {
        var n, e = [];
        return t(Array.prototype.slice.call(this.get(0).elements)).each(function() {
            n = t(this);
            var i = n.attr("type");
            "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != i && "reset" != i && "button" != i && ("radio" != i && "checkbox" != i || this.checked) && e.push({
                name: n.attr("name"),
                value: n.val()
            })
        }),
        e
    },
    t.fn.serialize = function() {
        var t = [];
        return this.serializeArray().forEach(function(n) {
            t.push(encodeURIComponent(n.name) + "=" + encodeURIComponent(n.value))
        }),
        t.join("&")
    },
    t.fn.submit = function(n) {
        if (n) this.bind("submit", n);
        else if (this.length) {
            var e = t.Event("submit");
            this.eq(0).trigger(e),
            e.defaultPrevented || this.get(0).submit()
        }
        return this
    }
} (Zepto),
function(t, n) {
    function e(t) {
        return i(t.replace(/([a-z])([A-Z])/, "$1-$2"))
    }
    function i(t) {
        return t.toLowerCase()
    }
    function r(t) {
        return o ? o + t: i(t)
    }
    var o, a, s, u, c, l, f, h, p = "",
    d = {
        Webkit: "webkit",
        Moz: "",
        O: "o",
        ms: "MS"
    },
    m = window.document,
    v = m.createElement("div"),
    g = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
    y = {};
    t.each(d,
    function(t, e) {
        return v.style[t + "TransitionProperty"] !== n ? (p = "-" + i(t) + "-", o = e, !1) : void 0
    }),
    a = p + "transform",
    y[s = p + "transition-property"] = y[u = p + "transition-duration"] = y[c = p + "transition-timing-function"] = y[l = p + "animation-name"] = y[f = p + "animation-duration"] = y[h = p + "animation-timing-function"] = "",
    t.fx = {
        off: o === n && v.style.transitionProperty === n,
        speeds: {
            _default: 400,
            fast: 200,
            slow: 600
        },
        cssPrefix: p,
        transitionEnd: r("TransitionEnd"),
        animationEnd: r("AnimationEnd")
    },
    t.fn.animate = function(n, e, i, r) {
        return t.isPlainObject(e) && (i = e.easing, r = e.complete, e = e.duration),
        e && (e = ("number" == typeof e ? e: t.fx.speeds[e] || t.fx.speeds._default) / 1e3),
        this.anim(n, e, i, r)
    },
    t.fn.anim = function(i, r, o, p) {
        var d, m, v, b = {},
        x = "",
        w = this,
        E = t.fx.transitionEnd;
        if (r === n && (r = .4), t.fx.off && (r = 0), "string" == typeof i) b[l] = i,
        b[f] = r + "s",
        b[h] = o || "linear",
        E = t.fx.animationEnd;
        else {
            m = [];
            for (d in i) g.test(d) ? x += d + "(" + i[d] + ") ": (b[d] = i[d], m.push(e(d)));
            x && (b[a] = x, m.push(a)),
            r > 0 && "object" == typeof i && (b[s] = m.join(", "), b[u] = r + "s", b[c] = o || "linear")
        }
        return v = function(n) {
            if ("undefined" != typeof n) {
                if (n.target !== n.currentTarget) return;
                t(n.target).unbind(E, v)
            }
            t(this).css(y),
            p && p.call(this)
        },
        r > 0 && this.bind(E, v),
        this.size() && this.get(0).clientLeft,
        this.css(b),
        0 >= r && setTimeout(function() {
            w.each(function() {
                v.call(this)
            })
        },
        0),
        this
    },
    v = null
} (Zepto); !
function() {
    var t = [],
    e = window.Zepto;
    if (e && !t.__proto__) {
        var o = function(e) {
            return t.push.apply(this, e),
            this
        };
        e.zepto.Z = function(t, e) {
            t = t || [];
            var r = new o(t);
            return r.selector = e || "",
            r
        },
        e.zepto.Z.prototype = o.prototype = e.fn,
        e.fn.concat = function() {
            var t = [];
            return t.push.apply(t, this),
            e.each(arguments,
            function(e, o) {
                "object" == typeof o && "number" == typeof o.length ? t.push.apply(t, o) : t.push(o)
            }),
            t
        },
        e.fn.empty = function() {
            return this.each(function(t, e) {
                for (; e.firstChild;) e.removeChild(e.firstChild)
            })
        };
        var r = /^\s*<(\w+)[^>]*>/,
        n = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        l = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            "*": [0, "", ""]
        };
        l.optgroup = l.option,
        l.tbody = l.tfoot = l.colgroup = l.caption = l.thead,
        l.th = l.td,
        e.zepto.fragment = function(e, o) {
            void 0 === o && (o = r.test(e) && RegExp.$1),
            e = e.toString().replace(n, "<$1></$2>");
            var a = l[o] || l["*"],
            p = a[0],
            i = document.createElement("div");
            for (i.innerHTML = a[1] + e + a[2]; p--;) i = i.lastChild;
            return t.slice.call(i.childNodes)
        }
    }
} (); !
function(t) {
    t.AMPlatform && (t.$ && t.$.noConflict ? t.AMPlatform.$ = t.$.noConflict(!0) : (t.AMPlatform.$ = t.Zepto, t.AMPlatform.$.support = t.AMPlatform.$.support || {},
    Zepto === t.$ && delete t.$, delete t.Zepto))
} (this);
var Handlebars = function() {
    var r = function() {
        "use strict";
        function r(r) {
            this.string = r
        }
        var e;
        return r.prototype.toString = function() {
            return "" + this.string
        },
        e = r
    } (),
    e = function(r) {
        "use strict";
        function e(r) {
            return s[r] || "&amp;"
        }
        function t(r, e) {
            for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t])
        }
        function n(r) {
            return r instanceof a ? r.toString() : r || 0 === r ? (r = "" + r, u.test(r) ? r.replace(l, e) : r) : ""
        }
        function i(r) {
            return r || 0 === r ? f(r) && 0 === r.length ? !0 : !1 : !0
        }
        var o = {},
        a = r,
        s = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        l = /[&<>"'`]/g,
        u = /[&<>"'`]/;
        o.extend = t;
        var c = Object.prototype.toString;
        o.toString = c;
        var p = function(r) {
            return "function" == typeof r
        };
        p(/x/) && (p = function(r) {
            return "function" == typeof r && "[object Function]" === c.call(r)
        });
        var p;
        o.isFunction = p;
        var f = Array.isArray ||
        function(r) {
            return r && "object" == typeof r ? "[object Array]" === c.call(r) : !1
        };
        return o.isArray = f,
        o.escapeExpression = n,
        o.isEmpty = i,
        o
    } (r),
    t = function() {
        "use strict";
        function r() {
            for (var r = Error.prototype.constructor.apply(this, arguments), e = 0; e < t.length; e++) this[t[e]] = r[t[e]]
        }
        var e, t = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        return r.prototype = new Error,
        e = r
    } (),
    n = function(r, e) {
        "use strict";
        function t(r, e) {
            this.helpers = r || {},
            this.partials = e || {},
            n(this)
        }
        function n(r) {
            r.registerHelper("helperMissing",
            function(r) {
                if (2 === arguments.length) return void 0;
                throw new Error("Missing helper: '" + r + "'")
            }),
            r.registerHelper("blockHelperMissing",
            function(e, t) {
                var n = t.inverse ||
                function() {},
                i = t.fn;
                return f(e) && (e = e.call(this)),
                e === !0 ? i(this) : e === !1 || null == e ? n(this) : p(e) ? e.length > 0 ? r.helpers.each(e, t) : n(this) : i(e)
            }),
            r.registerHelper("each",
            function(r, e) {
                var t, n = e.fn,
                i = e.inverse,
                o = 0,
                a = "";
                if (f(r) && (r = r.call(this)), e.data && (t = d(e.data)), r && "object" == typeof r) if (p(r)) for (var s = r.length; s > o; o++) t && (t.index = o, t.first = 0 === o, t.last = o === r.length - 1),
                a += n(r[o], {
                    data: t
                });
                else for (var l in r) r.hasOwnProperty(l) && (t && (t.key = l, t.index = o, t.first = 0 === o), a += n(r[l], {
                    data: t
                }), o++);
                return 0 === o && (a = i(this)),
                a
            }),
            r.registerHelper("if",
            function(r, e) {
                return f(r) && (r = r.call(this)),
                !e.hash.includeZero && !r || a.isEmpty(r) ? e.inverse(this) : e.fn(this)
            }),
            r.registerHelper("unless",
            function(e, t) {
                return r.helpers["if"].call(this, e, {
                    fn: t.inverse,
                    inverse: t.fn,
                    hash: t.hash
                })
            }),
            r.registerHelper("with",
            function(r, e) {
                return f(r) && (r = r.call(this)),
                a.isEmpty(r) ? void 0 : e.fn(r)
            }),
            r.registerHelper("log",
            function(e, t) {
                var n = t.data && null != t.data.level ? parseInt(t.data.level, 10) : 1;
                r.log(n, e)
            })
        }
        function i(r, e) {
            g.log(r, e)
        }
        var o = {},
        a = r,
        s = e,
        l = "1.2.1";
        o.VERSION = l;
        var u = 4;
        o.COMPILER_REVISION = u;
        var c = {
            1 : "<= 1.0.rc.2",
            2 : "== 1.0.0-rc.3",
            3 : "== 1.0.0-rc.4",
            4 : ">= 1.0.0"
        };
        o.REVISION_CHANGES = c;
        var p = a.isArray,
        f = a.isFunction,
        h = a.toString,
        v = "[object Object]";
        o.HandlebarsEnvironment = t,
        t.prototype = {
            constructor: t,
            logger: g,
            log: i,
            registerHelper: function(r, e, t) {
                if (h.call(r) === v) {
                    if (t || e) throw new s("Arg not supported with multiple helpers");
                    a.extend(this.helpers, r)
                } else t && (e.not = t),
                this.helpers[r] = e
            },
            registerPartial: function(r, e) {
                h.call(r) === v ? a.extend(this.partials, r) : this.partials[r] = e
            }
        };
        var g = {
            methodMap: {
                0 : "debug",
                1 : "info",
                2 : "warn",
                3 : "error"
            },
            DEBUG: 0,
            INFO: 1,
            WARN: 2,
            ERROR: 3,
            level: 3,
            log: function(r, e) {
                if (g.level <= r) {
                    var t = g.methodMap[r];
                    "undefined" != typeof console && console[t] && console[t].call(console, e)
                }
            }
        };
        o.logger = g,
        o.log = i;
        var d = function(r) {
            var e = {};
            return a.extend(e, r),
            e
        };
        return o.createFrame = d,
        o
    } (e, t),
    i = function(r, e, t) {
        "use strict";
        function n(r) {
            var e = r && r[0] || 1,
            t = f;
            if (e !== t) {
                if (t > e) {
                    var n = h[t],
                    i = h[e];
                    throw new Error("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + n + ") or downgrade your runtime to an older version (" + i + ").")
                }
                throw new Error("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + r[1] + ").")
            }
        }
        function i(r, e) {
            if (!e) throw new Error("No environment passed to template");
            var t = function(r, t, n, i, o, a) {
                var s = e.VM.invokePartial.apply(this, arguments);
                if (null != s) return s;
                if (e.compile) {
                    var l = {
                        helpers: i,
                        partials: o,
                        data: a
                    };
                    return o[t] = e.compile(r, {
                        data: void 0 !== a
                    },
                    e),
                    o[t](n, l)
                }
                throw new p("The partial " + t + " could not be compiled when running in runtime-only mode")
            },
            n = {
                escapeExpression: c.escapeExpression,
                invokePartial: t,
                programs: [],
                program: function(r, e, t) {
                    var n = this.programs[r];
                    return t ? n = a(r, e, t) : n || (n = this.programs[r] = a(r, e)),
                    n
                },
                merge: function(r, e) {
                    var t = r || e;
                    return r && e && r !== e && (t = {},
                    c.extend(t, e), c.extend(t, r)),
                    t
                },
                programWithDepth: e.VM.programWithDepth,
                noop: e.VM.noop,
                compilerInfo: null
            };
            return function(t, i) {
                i = i || {};
                var o, a, s = i.partial ? i: e;
                i.partial || (o = i.helpers, a = i.partials);
                var l = r.call(n, s, t, o, a, i.data);
                return i.partial || e.VM.checkRevision(n.compilerInfo),
                l
            }
        }
        function o(r, e, t) {
            var n = Array.prototype.slice.call(arguments, 3),
            i = function(r, i) {
                return i = i || {},
                e.apply(this, [r, i.data || t].concat(n))
            };
            return i.program = r,
            i.depth = n.length,
            i
        }
        function a(r, e, t) {
            var n = function(r, n) {
                return n = n || {},
                e(r, n.data || t)
            };
            return n.program = r,
            n.depth = 0,
            n
        }
        function s(r, e, t, n, i, o) {
            var a = {
                partial: !0,
                helpers: n,
                partials: i,
                data: o
            };
            if (void 0 === r) throw new p("The partial " + e + " could not be found");
            return r instanceof Function ? r(t, a) : void 0
        }
        function l() {
            return ""
        }
        var u = {},
        c = r,
        p = e,
        f = t.COMPILER_REVISION,
        h = t.REVISION_CHANGES;
        return u.checkRevision = n,
        u.template = i,
        u.programWithDepth = o,
        u.program = a,
        u.invokePartial = s,
        u.noop = l,
        u
    } (e, t, n),
    o = function(r, e, t, n, i) {
        "use strict";
        var o, a = r,
        s = e,
        l = t,
        u = n,
        c = i,
        p = function() {
            var r = new a.HandlebarsEnvironment;
            return u.extend(r, a),
            r.SafeString = s,
            r.Exception = l,
            r.Utils = u,
            r.VM = c,
            r.template = function(e) {
                return c.template(e, r)
            },
            r
        },
        f = p();
        return f.create = p,
        o = f
    } (n, r, t, e, i);
    return o
} (); !
function(e, t) {
    var n = function() {
        for (var n in e.__module) e.__module.hasOwnProperty(n) && t.registerPartial(n, t.template(e.__module[n]));
        t.registerHelper("ifCond",
        function(e, t, n, r) {
            switch (t) {
            case "==":
                return e == n ? r.fn(this) : r.inverse(this);
            case "===":
                return e === n ? r.fn(this) : r.inverse(this);
            case "<":
                return n > e ? r.fn(this) : r.inverse(this);
            case "<=":
                return n >= e ? r.fn(this) : r.inverse(this);
            case ">":
                return e > n ? r.fn(this) : r.inverse(this);
            case ">=":
                return e >= n ? r.fn(this) : r.inverse(this);
            default:
                return r.inverse(this)
            }
            return r.inverse(this)
        })
    },
    r = function(n) {
        var r = n.content && n.content.template,
        i = e.__tmpl[r];
        return i ? (i = t.template(i), i(n)) : ""
    };
    e.template = e.template || {
        buildHtml: function(e) {
            return n(),
            r(e)
        }
    }
} (window.AMPlatform, Handlebars); !
function(t) {
    var r = function(t) {
        console && console.log(t)
    };
    t.logger = t.logger || {
        times: [],
        errors: [],
        time: function(t, r) {
            var i = r || +new Date;
            return this.times.push([i, t]),
            i
        },
        error: function(t, r) {
            var i = r || +new Date;
            this.errors.push([i, t])
        },
        reset: function() {
            this.times = [].concat(t.__timing),
            this.errors = []
        },
        dump: function() {
            r("--------- Timings (in milliseconds) ----------");
            for (var t = this.times.length ? this.times[0][0] : 0, i = 0, s = this.times.length; s > i; i++) {
                var e = this.times[i];
                r(e[0] - t + "		" + e[1])
            }
            if (this.errors.length) {
                r("--------------- Errors -----------------");
                for (var i = 0,
                s = this.errors.length; s > i; i++) {
                    var e = this.times[i];
                    r(e[0])
                }
            }
        }
    }
} (window.AMPlatform); !
function(t, e) {
    var n = function(t) {
        var n = function(t, n, o) {
            return (e.fn.init || e.zepto.init).call(this, t, n || r.context(), o)
        },
        r = e.sub(n);
        return r.context = function() {
            return t || "<div>"
        },
        r.zepto || (r.fn.init = n, r.fn.init.prototype = e.fn),
        r
    };
    e.sub = e.sub ||
    function(t) {
        return e.extend(t, e),
        t.zepto = e.extend({},
        e.zepto),
        t
    },
    e.fn.anchor = function() {
        return n(this)
    };
    var r = function(e, n) {
        return n && (n.jquery || e.zepto && e.zepto.isZ && e.zepto.isZ(n) || n.selector && n.length || n.innerHTML) ? t.html.htmlFromElement(n) : "object" == typeof n ? n: n && n.toString() || ""
    },
    o = function(t, n, i) {
        if ("function" == typeof t) {
            var a = extractor(n, i);
            return r(n, a)
        }
        var c = {};
        return e.each(t,
        function(t, e) {
            if ("_" != t[0]) {
                var a;
                "function" == typeof e ? (a = e(n, i), a = r(n, a)) : a = "object" == typeof e ? o(e, n, i) : e,
                c[t] = a
            } else c[t] = e
        }),
        c
    },
    i = function(t, e) {
        t.openLinkInSameWindow && e("a").removeAttr("target"),
        t.removeStyle && (e("*").removeAttr("style"), e("style").remove()),
        t.cleanImg && e('img, input[type="image"]').removeAttr("height").removeAttr("width").removeAttr("align"),
        t.cleanTable && (e("table").removeAttr("height").removeAttr("width"), e("tr, th, td").removeAttr("height").removeAttr("width").removeAttr("bgcolor")),
        t.cleanFrame && e("iframe").removeAttr("width"),
        t.cleanEmbed && e("embed").removeAttr("width")
    },
    a = function() {
        return window.location.pathname + (window.location.search ? window.location.search: "")
    },
    c = {
        select: function(t) {
            var n = this,
            r = {};
            return e.each(t,
            function(t, e) {
                return new RegExp(t, "i").test(a()) ? (r = o(e, n.__AM__.$, n), !1) : void 0
            }),
            r
        }
    };
    t.extractor = t.extractor || {
        extractData: function(t, r) {
            var a = n(t.$html),
            m = e.extend({},
            r),
            u = {
                openLinkInSameWindow: !1,
                removeStyle: !0,
                cleanImg: !1,
                cleanTable: !1,
                cleanFrame: !1,
                cleanEmbed: !1
            };
            return e.extend(m, c),
            r._options && e.extend(u, r._options),
            i(u, a),
            m.__AM__ = {
                config: r,
                options: u,
                $: a
            },
            o(r, a, m)
        }
    }
} (window.AMPlatform, window.AMPlatform.$); !
function(o) {
    o.util = o.util || {
        goDesktop: function() {
            document.cookie = "allmobilize=desktop; path=/;",
            window.location.reload()
        }
    }
} (window.AMPlatform); !
function(e, t) {
    var n, i = function(e) {
        return t.map(e,
        function(e, t) {
            return t
        })
    },
    r = function(e) {
        return t.map(e,
        function(e) {
            return e
        })
    },
    o = new RegExp("(<script[\\s\\S]*?>)", "gi"),
    a = {
        style: ' media="allmobilize-media"',
        script: ' type="text/allmobilize-script"'
    },
    l = new RegExp(r(a).join("|"), "g"),
    d = {
        img: ["src"],
        iframe: ["src"],
        script: ["src", "type"],
        link: ["href"],
        style: ["media"]
    },
    c = new RegExp("<(" + i(d).join("|") + ")([\\s\\S]*?)>", "gi"),
    u = {},
    s = {};
    t.each(d,
    function(e, n) {
        t.each(n,
        function(e, t) {
            s[t] = !0
        }),
        "img" === e && (n = n.concat("width", "height")),
        u[e] = new RegExp("\\s+((?:" + n.join("|") + ")\\s*=\\s*(?:'([\\s\\S])+?'|\"([\\s\\S])+?\"))", "gi")
    }),
    n = new RegExp("\\sx-(" + i(s).join("|") + ")", "gi");
    var h = function(e, t, n) {
        return t = t.toLowerCase(),
        result = "<" + t + (a[t] || "") + n.replace(u[t], " x-$1") + ">"
    },
    m = function(e) {
        return e.nodeName.toLowerCase()
    },
    p = function(e) {
        return e.replace('"', "&quot;")
    },
    f = function(e) {
        if (!e) return "";
        e.length && (e = e[0]);
        var t = [];
        return [].forEach.call(e.attributes,
        function(e) {
            t.push(" ", e.name, '="', p(e.value), '"')
        }),
        "<" + m(e) + t.join("") + ">"
    },
    g = function(e) {
        var t = e.doctype || [].filter.call(e.childNodes,
        function(e) {
            return e.nodeType == Node.DOCUMENT_TYPE_NODE
        })[0];
        return t ? "<!DOCTYPE HTML" + (t.publicId ? ' PUBLIC "' + t.publicId + '"': "") + (t.systemId ? ' "' + t.systemId + '"': "") + ">": ""
    },
    b = function(e) {
        return e ? [].map.call(e.childNodes,
        function(e) {
            var t = m(e);
            return "#comment" == t ? "<!--" + e.textContent + "-->": "plaintext" == t ? e.textContent: "script" == t && (/allmobilize\./.test(e.src) || /AllMobilize/.test(e.textContent)) ? "": e.outerHTML || e.nodeValue
        }).join("") : ""
    },
    y = "",
    C = function(e) {
        if (y) return y;
        var e = e || document,
        t = e.getElementsByTagName("head")[0] || e.createElement("head"),
        n = e.getElementsByTagName("body")[0] || e.createElement("body"),
        i = e.getElementsByTagName("html")[0];
        return y = {
            doctype: g(e),
            htmlTag: f(i),
            headTag: f(t),
            bodyTag: f(n),
            headContent: b(t),
            bodyContent: b(n)
        },
        y.all = function(e) {
            return this.doctype + this.htmlTag + this.headTag + (e || "") + this.headContent + this.bodyContent
        },
        y
    },
    v = function(e) {
        var n = e.match(/^<(\w+)([\s\S]*)/i),
        i = document.createElement(n[1]);
        return t.each(t("<div" + n[2])[0].attributes,
        function(e, t) {
            i.setAttribute(t.nodeName, t.nodeValue)
        }),
        i
    },
    T = function(e) {
        var n = /<!--(?:[\s\S]*?)-->|(<\/head\s*>|<body[\s\S]*$)/gi;
        e = t.extend({},
        e);
        var i = e.bodyContent = e.headContent + e.bodyContent;
        e.headContent = "";
        for (var r; r = n.exec(i); r) if (r[1]) {
            if ("/" != r[1][1]) {
                e.headContent = e.head || i.slice(0, r.index),
                e.bodyContent = r[0];
                var o = /^((?:[^>'"]*|'[^']*?'|"[^"]*?")*>)([\s\S]*)$/.exec(r[0]);
                o && (e.bodyTag = o[1], e.bodyContent = o[2]);
                break
            }
            e.headContent = i.slice(0, r.index),
            e.bodyContent = i.slice(r.index + r[1].length)
        }
        return e
    };
    e.html = e.html || {
        disable: function(e) {
            var t = /(<!--[\s\S]*?-->)|(?=<\/script)/i,
            n = e.split(t),
            i = n.map(function(e) {
                var t;
                return e ? /^<!--/.test(e) ? e: (t = e.split(o), t[0] = t[0].replace(c, h), t[1] && (t[1] = t[1].replace(c, h)), t) : ""
            });
            return [].concat.apply([], i).join("")
        },
        enable: function(e) {
            return e.replace(n, " $1").replace(l, "")
        },
        htmlFromElement: function(e) {
            var n = "";
            if (e.length) {
                var i = e.length ? e[0] : e;
                n = i.outerHTML ? i.outerHTML: t("<div>").append(t(i).clone()).html(),
                "string" == typeof n && (n = t.trim(n))
            }
            return n
        },
        buildOriginalDOM: function() {
            var n = T(C()),
            i = e.html.disable(n.headContent),
            r = e.html.disable(n.bodyContent),
            o = document.createElement("div"),
            a = v(n.headTag),
            l = v(n.bodyTag),
            d = v(n.htmlTag),
            c = {
                doctype: n.doctype,
                $head: t(a),
                $body: t(l),
                $html: t(d)
            };
            for (o.innerHTML = i; o.firstChild; a.appendChild(o.firstChild));
            for (o.innerHTML = r; o.firstChild; l.appendChild(o.firstChild));
            return d.appendChild(a),
            d.appendChild(l),
            c
        },
        buildOriginalHtml: function(e) {
            return e.$head.find("#allmobilize_viewport").remove(),
            e.$head.find("#allmobilize_loader").remove(),
            e.doctype + e.$head.html() + e.$body.html()
        }
    }
} (window.AMPlatform, window.AMPlatform.$); !
function(i, t, e) {
    var n = window,
    o = document,
    l = function(i) {
        n.setTimeout(function() {
            o.open("text/html", "replace"),
            o.write(i),
            o.close()
        })
    };
    i.main = i.main || {
        mobilize: function(t) {
            i.logger.time("mobilize"),
            i.data = i.data || {},
            config = i.data.config = i.__config;
            var r = t.scriptSrc.lastIndexOf("/"),
            a = -1 !== r ? t.scriptSrc.substr(0, r + 1) : "";
            config.__root = a,
            config.__weixinId = t.weixinId;
            var m = i.html.buildOriginalDOM(o),
            c = i.extractor.extractData(m, config);
            if (c.content && c.content.redirect) return n.location.href = c.content.redirect,
            void 0;
            c.__root = a,
            c.__stylePath = a + "style.min.css",
            c.__jsPath = a + "script.min.js";
            var d = i.template.buildHtml(c);
            d = i.html.enable(d),
            e = !1,
            d ? (l(d), i.logger.time("completed")) : e ? (l("<h1>No template found</h1>"), i.logger.time("failed")) : (i.main.unmobilize(m), i.logger.time("unmobilize")),
            e && i.logger.dump()
        },
        unmobilize: function(t) {
            i.logger.time("unmobilize");
            var e = i.html.buildOriginalHtml(t);
            e = i.html.enable(e),
            l(e)
        }
    }
} (window.AMPlatform, window.AMPlatform.$, window._amVersion.debug);
