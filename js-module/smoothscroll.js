export const initSmoothScroll = () => {


! function () {
    var e, t, o, n, r = {
            frameRate: 150,
            animationTime: 900,
            stepSize: 100,
            pulseAlgorithm: !0,
            pulseScale: 4,
            pulseNormalize: 1,
            accelerationDelta: 50,
            accelerationMax: 3,
            keyboardSupport: !0,
            arrowScroll: 50,
            fixedBackground: !0,
            excluded: ""
        },
        a = r,
        l = !1,
        i = !1,
        c = {
            x: 0,
            y: 0
        },
        s = !1,
        u = document.documentElement,
        d = [],
        f = /^Mac/.test(navigator.platform),
        m = {
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            spacebar: 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36
        },
        h = {
            37: 1,
            38: 1,
            39: 1,
            40: 1
        };

    function w() {
        if (!s && document.body) {
            s = !0;
            var n = document.body,
                r = document.documentElement,
                c = window.innerHeight,
                d = n.scrollHeight;
            if (u = 0 <= document.compatMode.indexOf("CSS") ? r : n, e = n, a.keyboardSupport && Y("keydown", S), top != self) i = !0;
            else if (Q && c < d && (n.offsetHeight <= c || r.offsetHeight <= c)) {
                var f, m = document.createElement("div");
                if (m.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + u.scrollHeight + "px", document.body.appendChild(m), o = function() {
                        f = f || setTimeout((function() {
                            l || (m.style.height = "0", m.style.height = u.scrollHeight + "px", f = null)
                        }), 500)
                    }, setTimeout(o, 10), Y("resize", o), (t = new R(o)).observe(n, {
                        attributes: !0,
                        childList: !0,
                        characterData: !1
                    }), u.offsetHeight <= c) {
                    var h = document.createElement("div");
                    h.style.clear = "both", n.appendChild(h)
                }
            }
            a.fixedBackground || l || (n.style.backgroundAttachment = "scroll", r.style.backgroundAttachment = "scroll")
        }
    }
    var p = [],
        v = !1,
        y = Date.now();

    function b(e, t, o) {
        if (function(e, t) {
                e = 0 < e ? 1 : -1, t = 0 < t ? 1 : -1, c.x === e && c.y === t || (c.x = e, c.y = t, p = [], y = 0)
            }(t, o), 1 != a.accelerationMax) {
            var n = Date.now() - y;
            if (n < a.accelerationDelta) {
                var r = (1 + 50 / n) / 2;
                1 < r && (r = Math.min(r, a.accelerationMax), t *= r, o *= r)
            }
            y = Date.now()
        }
        if (p.push({
                x: t,
                y: o,
                lastX: t < 0 ? .99 : -.99,
                lastY: o < 0 ? .99 : -.99,
                start: Date.now()
            }), !v) {
            var l = q(),
                i = e === l || e === document.body;
            null == e.$scrollBehavior && function(e) {
                var t = M(e);
                if (null == B[t]) {
                    var o = getComputedStyle(e, "")["scroll-behavior"];
                    B[t] = "smooth" == o
                }
                return B[t]
            }(e) && (e.$scrollBehavior = e.style.scrollBehavior, e.style.scrollBehavior = "auto");
            var s = function(n) {
                for (var r = Date.now(), l = 0, c = 0, u = 0; u < p.length; u++) {
                    var d = p[u],
                        f = r - d.start,
                        m = f >= a.animationTime,
                        h = m ? 1 : f / a.animationTime;
                    a.pulseAlgorithm && (h = F(h));
                    var w = d.x * h - d.lastX >> 0,
                        y = d.y * h - d.lastY >> 0;
                    l += w, c += y, d.lastX += w, d.lastY += y, m && (p.splice(u, 1), u--)
                }
                i ? window.scrollBy(l, c) : (l && (e.scrollLeft += l), c && (e.scrollTop += c)), t || o || (p = []), p.length ? j(s, e, 1e3 / a.frameRate + 1) : (v = !1, null != e.$scrollBehavior && (e.style.scrollBehavior = e.$scrollBehavior, e.$scrollBehavior = null))
            };
            j(s, e, 0), v = !0
        }
    }

    function g(t) {
        s || w();
        var o = t.target;
        if (t.defaultPrevented || t.ctrlKey) return !0;
        if (N(e, "embed") || N(o, "embed") && /\.pdf/i.test(o.src) || N(e, "object") || o.shadowRoot) return !0;
        var r = -t.wheelDeltaX || t.deltaX || 0,
            l = -t.wheelDeltaY || t.deltaY || 0;
        f && (t.wheelDeltaX && K(t.wheelDeltaX, 120) && (r = t.wheelDeltaX / Math.abs(t.wheelDeltaX) * -120), t.wheelDeltaY && K(t.wheelDeltaY, 120) && (l = t.wheelDeltaY / Math.abs(t.wheelDeltaY) * -120)), r || l || (l = -t.wheelDelta || 0), 1 === t.deltaMode && (r *= 40, l *= 40);
        var c = z(o);
        return c ? !! function(e) {
            if (e) {
                d.length || (d = [e, e, e]), e = Math.abs(e), d.push(e), d.shift(), clearTimeout(n), n = setTimeout((function() {
                    try {
                        localStorage.SS_deltaBuffer = d.join(",")
                    } catch (e) {}
                }), 1e3);
                var t = 120 < e && P(e),
                    o = !P(120) && !P(100) && !t;
                return e < 50 || o
            }
        }(l) || (1.2 < Math.abs(r) && (r *= a.stepSize / 120), 1.2 < Math.abs(l) && (l *= a.stepSize / 120), b(c, r, l), t.preventDefault(), void C()) : !i || !W || (Object.defineProperty(t, "target", {
            value: window.frameElement
        }), parent.wheel(t))
    }

    function S(t) {
        var o = t.target,
            n = t.ctrlKey || t.altKey || t.metaKey || t.shiftKey && t.keyCode !== m.spacebar;
        document.body.contains(e) || (e = document.activeElement);
        var r = /^(button|submit|radio|checkbox|file|color|image)$/i;
        if (t.defaultPrevented || /^(textarea|select|embed|object)$/i.test(o.nodeName) || N(o, "input") && !r.test(o.type) || N(e, "video") || function(e) {
                var t = e.target,
                    o = !1;
                if (-1 != document.URL.indexOf("www.youtube.com/watch"))
                    do {
                        if (o = t.classList && t.classList.contains("html5-video-controls")) break
                    } while (t = t.parentNode);
                return o
            }(t) || o.isContentEditable || n) return !0;
        if ((N(o, "button") || N(o, "input") && r.test(o.type)) && t.keyCode === m.spacebar) return !0;
        if (N(o, "input") && "radio" == o.type && h[t.keyCode]) return !0;
        var l = 0,
            c = 0,
            s = z(e);
        if (!s) return !i || !W || parent.keydown(t);
        var u = s.clientHeight;
        switch (s == document.body && (u = window.innerHeight), t.keyCode) {
            case m.up:
                c = -a.arrowScroll;
                break;
            case m.down:
                c = a.arrowScroll;
                break;
            case m.spacebar:
                c = -(t.shiftKey ? 1 : -1) * u * .9;
                break;
            case m.pageup:
                c = .9 * -u;
                break;
            case m.pagedown:
                c = .9 * u;
                break;
            case m.home:
                s == document.body && document.scrollingElement && (s = document.scrollingElement), c = -s.scrollTop;
                break;
            case m.end:
                var d = s.scrollHeight - s.scrollTop - u;
                c = 0 < d ? 10 + d : 0;
                break;
            case m.left:
                l = -a.arrowScroll;
                break;
            case m.right:
                l = a.arrowScroll;
                break;
            default:
                return !0
        }
        b(s, l, c), t.preventDefault(), C()
    }

    function x(t) {
        e = t.target
    }
    var k, D, M = (k = 0, function(e) {
            return e.uniqueID || (e.uniqueID = k++)
        }),
        E = {},
        T = {},
        B = {};

    function C() {
        clearTimeout(D), D = setInterval((function() {
            E = T = B = {}
        }), 1e3)
    }

    function H(e, t, o) {
        for (var n = o ? E : T, r = e.length; r--;) n[M(e[r])] = t;
        return t
    }

    function z(e) {
        var t = [],
            o = document.body,
            n = u.scrollHeight;
        do {
            var r = T[M(e)];
            if (r) return H(t, r);
            if (t.push(e), n === e.scrollHeight) {
                var a = O(u) && O(o) || X(u);
                if (i && L(u) || !i && a) return H(t, q())
            } else if (L(e) && X(e)) return H(t, e)
        } while (e = e.parentElement)
    }

    function L(e) {
        return e.clientHeight + 10 < e.scrollHeight
    }

    function O(e) {
        return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y")
    }

    function X(e) {
        var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
        return "scroll" === t || "auto" === t
    }

    function Y(e, t, o) {
        window.addEventListener(e, t, o || !1)
    }

    function A(e, t, o) {
        window.removeEventListener(e, t, o || !1)
    }

    function N(e, t) {
        return e && (e.nodeName || "").toLowerCase() === t.toLowerCase()
    }
    if (window.localStorage && localStorage.SS_deltaBuffer) try {
        d = localStorage.SS_deltaBuffer.split(",")
    } catch (g) {}

    function K(e, t) {
        return Math.floor(e / t) == e / t
    }

    function P(e) {
        return K(d[0], e) && K(d[1], e) && K(d[2], e)
    }
    var $, j = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e, t, o) {
            window.setTimeout(e, o || 1e3 / 60)
        },
        R = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
        q = ($ = document.scrollingElement, function() {
            if (!$) {
                var e = document.createElement("div");
                e.style.cssText = "height:10000px;width:1px;", document.body.appendChild(e);
                var t = document.body.scrollTop;
                document.documentElement.scrollTop, window.scrollBy(0, 3), $ = document.body.scrollTop != t ? document.body : document.documentElement, window.scrollBy(0, -3), document.body.removeChild(e)
            }
            return $
        });

    function V(e) {
        var t;
        return ((e *= a.pulseScale) < 1 ? e - (1 - Math.exp(-e)) : (e -= 1, (t = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - t))) * a.pulseNormalize
    }

    function F(e) {
        return 1 <= e ? 1 : e <= 0 ? 0 : (1 == a.pulseNormalize && (a.pulseNormalize /= V(1)), V(e))
    }
    var I = window.navigator.userAgent,
        _ = /Edge/.test(I),
        W = /chrome/i.test(I) && !_,
        U = /safari/i.test(I) && !_,
        G = /mobile/i.test(I),
        J = /Windows NT 6.1/i.test(I) && /rv:11/i.test(I),
        Q = U && (/Version\/8/i.test(I) || /Version\/9/i.test(I)),
        Z = (W || U || J) && !G,
        ee = !1;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: function() {
                ee = !0
            }
        }))
    } catch (g) {}
    var te = !!ee && {
            passive: !1
        },
        oe = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

    function ne(e) {
        for (var t in e) r.hasOwnProperty(t) && (a[t] = e[t])
    }
    oe && Z && (Y(oe, g, te), Y("mousedown", x), Y("load", w)), ne.destroy = function() {
        t && t.disconnect(), A(oe, g), A("mousedown", x), A("keydown", S), A("resize", o), A("load", w)
    }, window.SmoothScrollOptions && ne(window.SmoothScrollOptions), "function" == typeof define && define.amd ? define((function() {
        return ne
    })) : "object" == typeof exports ? module.exports = ne : window.SmoothScroll = ne
    }();

    }