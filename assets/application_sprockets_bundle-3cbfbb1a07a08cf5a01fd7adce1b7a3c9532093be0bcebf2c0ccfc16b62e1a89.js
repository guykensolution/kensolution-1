function waitAndRecordAbTestImpression(t, e) {
    var n = 0
        , i = setInterval(function() {
        5 === ++n && window.clearInterval(i),
        window.IntercomGTM && window.IntercomGTM.pageviewId && (window.clearInterval(i),
            window.IntercomGTM.recordAbTestImpression(window.IntercomGTM.pageviewId, t, e))
    }, 500)
}
window.Modernizr = function(t, e, n) {
    function i(t) {
        y.cssText = t
    }
    function o(t, e) {
        return typeof t === e
    }
    function r(t, e) {
        return !!~("" + t).indexOf(e)
    }
    function s(t, e) {
        for (var i in t) {
            var o = t[i];
            if (!r(o, "-") && y[o] !== n)
                return "pfx" == e ? o : !0
        }
        return !1
    }
    function a(t, e, i) {
        for (var r in t) {
            var s = e[t[r]];
            if (s !== n)
                return i === !1 ? t[r] : o(s, "function") ? s.bind(i || e) : s
        }
        return !1
    }
    function l(t, e, n) {
        var i = t.charAt(0).toUpperCase() + t.slice(1)
            , r = (t + " " + x.join(i + " ") + i).split(" ");
        return o(e, "string") || o(e, "undefined") ? s(r, e) : (r = (t + " " + k.join(i + " ") + i).split(" "),
            a(r, e, n))
    }
    var c, u, d, p = "2.8.3", h = {}, f = !0, m = e.documentElement, v = "modernizr", g = e.createElement(v), y = g.style, b = ({}.toString,
        " -webkit- -moz- -o- -ms- ".split(" ")), w = "Webkit Moz O ms", x = w.split(" "), k = w.toLowerCase().split(" "), C = {}, T = [], _ = T.slice, S = function(t, n, i, o) {
        var r, s, a, l, c = e.createElement("div"), u = e.body, d = u || e.createElement("body");
        if (parseInt(i, 10))
            for (; i--; )
                a = e.createElement("div"),
                    a.id = o ? o[i] : v + (i + 1),
                    c.appendChild(a);
        return r = ["&#173;", '<style id="s', v, '">', t, "</style>"].join(""),
            c.id = v,
            (u ? c : d).innerHTML += r,
            d.appendChild(c),
        u || (d.style.background = "",
            d.style.overflow = "hidden",
            l = m.style.overflow,
            m.style.overflow = "hidden",
            m.appendChild(d)),
            s = n(c, t),
            u ? c.parentNode.removeChild(c) : (d.parentNode.removeChild(d),
                m.style.overflow = l),
            !!s
    }, $ = function() {
        function t(t, r) {
            r = r || e.createElement(i[t] || "div"),
                t = "on" + t;
            var s = t in r;
            return s || (r.setAttribute || (r = e.createElement("div")),
            r.setAttribute && r.removeAttribute && (r.setAttribute(t, ""),
                s = o(r[t], "function"),
            o(r[t], "undefined") || (r[t] = n),
                r.removeAttribute(t))),
                r = null,
                s
        }
        var i = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return t
    }(), E = {}.hasOwnProperty;
    d = o(E, "undefined") || o(E.call, "undefined") ? function(t, e) {
            return e in t && o(t.constructor.prototype[e], "undefined")
        }
        : function(t, e) {
            return E.call(t, e)
        }
        ,
    Function.prototype.bind || (Function.prototype.bind = function(t) {
            var e = this;
            if ("function" != typeof e)
                throw new TypeError;
            var n = _.call(arguments, 1)
                , i = function() {
                if (this instanceof i) {
                    var o = function() {};
                    o.prototype = e.prototype;
                    var r = new o
                        , s = e.apply(r, n.concat(_.call(arguments)));
                    return Object(s) === s ? s : r
                }
                return e.apply(t, n.concat(_.call(arguments)))
            };
            return i
        }
    ),
        C.touch = function() {
            var n;
            return "ontouchstart"in t || t.DocumentTouch && e instanceof DocumentTouch ? n = !0 : S(["@media (", b.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
                n = 9 === t.offsetTop
            }),
                n
        }
        ,
        C.cssanimations = function() {
            return l("animationName")
        }
        ,
        C.csstransforms = function() {
            return !!l("transform")
        }
        ,
        C.csstransforms3d = function() {
            var t = !!l("perspective");
            return t && "webkitPerspective"in m.style && S("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e) {
                t = 9 === e.offsetLeft && 3 === e.offsetHeight
            }),
                t
        }
        ,
        C.csstransitions = function() {
            return l("transition")
        }
    ;
    for (var A in C)
        d(C, A) && (u = A.toLowerCase(),
            h[u] = C[A](),
            T.push((h[u] ? "" : "no-") + u));
    return h.addTest = function(t, e) {
        if ("object" == typeof t)
            for (var i in t)
                d(t, i) && h.addTest(i, t[i]);
        else {
            if (t = t.toLowerCase(),
            h[t] !== n)
                return h;
            e = "function" == typeof e ? e() : e,
            "undefined" != typeof f && f && (m.className += " " + (e ? "" : "no-") + t),
                h[t] = e
        }
        return h
    }
        ,
        i(""),
        g = c = null,
        function(t, e) {
            function n(t, e) {
                var n = t.createElement("p")
                    , i = t.getElementsByTagName("head")[0] || t.documentElement;
                return n.innerHTML = "x<style>" + e + "</style>",
                    i.insertBefore(n.lastChild, i.firstChild)
            }
            function i() {
                var t = y.elements;
                return "string" == typeof t ? t.split(" ") : t
            }
            function o(t) {
                var e = g[t[m]];
                return e || (e = {},
                    v++,
                    t[m] = v,
                    g[v] = e),
                    e
            }
            function r(t, n, i) {
                if (n || (n = e),
                    u)
                    return n.createElement(t);
                i || (i = o(n));
                var r;
                return r = i.cache[t] ? i.cache[t].cloneNode() : f.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t),
                    !r.canHaveChildren || h.test(t) || r.tagUrn ? r : i.frag.appendChild(r)
            }
            function s(t, n) {
                if (t || (t = e),
                    u)
                    return t.createDocumentFragment();
                n = n || o(t);
                for (var r = n.frag.cloneNode(), s = 0, a = i(), l = a.length; l > s; s++)
                    r.createElement(a[s]);
                return r
            }
            function a(t, e) {
                e.cache || (e.cache = {},
                    e.createElem = t.createElement,
                    e.createFrag = t.createDocumentFragment,
                    e.frag = e.createFrag()),
                    t.createElement = function(n) {
                        return y.shivMethods ? r(n, t, e) : e.createElem(n)
                    }
                    ,
                    t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function(t) {
                        return e.createElem(t),
                            e.frag.createElement(t),
                        'c("' + t + '")'
                    }) + ");return n}")(y, e.frag)
            }
            function l(t) {
                t || (t = e);
                var i = o(t);
                return !y.shivCSS || c || i.hasCSS || (i.hasCSS = !!n(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
                u || a(t, i),
                    t
            }
            var c, u, d = "3.7.0", p = t.html5 || {}, h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, m = "_html5shiv", v = 0, g = {};
            !function() {
                try {
                    var t = e.createElement("a");
                    t.innerHTML = "<xyz></xyz>",
                        c = "hidden"in t,
                        u = 1 == t.childNodes.length || function() {
                            e.createElement("a");
                            var t = e.createDocumentFragment();
                            return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
                        }()
                } catch (n) {
                    c = !0,
                        u = !0
                }
            }();
            var y = {
                elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                version: d,
                shivCSS: p.shivCSS !== !1,
                supportsUnknownElements: u,
                shivMethods: p.shivMethods !== !1,
                type: "default",
                shivDocument: l,
                createElement: r,
                createDocumentFragment: s
            };
            t.html5 = y,
                l(e)
        }(this, e),
        h._version = p,
        h._prefixes = b,
        h._domPrefixes = k,
        h._cssomPrefixes = x,
        h.hasEvent = $,
        h.testProp = function(t) {
            return s([t])
        }
        ,
        h.testAllProps = l,
        h.testStyles = S,
        h.prefixed = function(t, e, n) {
            return e ? l(t, e, n) : l(t, "pfx")
        }
        ,
        m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + T.join(" ") : ""),
        h
}(this, this.document),
    function(t, e, n) {
        function i(t) {
            return "[object Function]" == v.call(t)
        }
        function o(t) {
            return "string" == typeof t
        }
        function r() {}
        function s(t) {
            return !t || "loaded" == t || "complete" == t || "uninitialized" == t
        }
        function a() {
            var t = g.shift();
            y = 1,
                t ? t.t ? f(function() {
                    ("c" == t.t ? p.injectCss : p.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
                }, 0) : (t(),
                    a()) : y = 0
        }
        function l(t, n, i, o, r, l, c) {
            function u(e) {
                if (!h && s(d.readyState) && (b.r = h = 1,
                !y && a(),
                    d.onload = d.onreadystatechange = null,
                    e)) {
                    "img" != t && f(function() {
                        x.removeChild(d)
                    }, 50);
                    for (var i in S[n])
                        S[n].hasOwnProperty(i) && S[n][i].onload()
                }
            }
            var c = c || p.errorTimeout
                , d = e.createElement(t)
                , h = 0
                , v = 0
                , b = {
                t: i,
                s: n,
                e: r,
                a: l,
                x: c
            };
            1 === S[n] && (v = 1,
                S[n] = []),
                "object" == t ? d.data = n : (d.src = n,
                    d.type = t),
                d.width = d.height = "0",
                d.onerror = d.onload = d.onreadystatechange = function() {
                    u.call(this, v)
                }
                ,
                g.splice(o, 0, b),
            "img" != t && (v || 2 === S[n] ? (x.insertBefore(d, w ? null : m),
                f(u, c)) : S[n].push(d))
        }
        function c(t, e, n, i, r) {
            return y = 0,
                e = e || "j",
                o(t) ? l("c" == e ? C : k, t, e, this.i++, n, i, r) : (g.splice(this.i++, 0, t),
                1 == g.length && a()),
                this
        }
        function u() {
            var t = p;
            return t.loader = {
                load: c,
                i: 0
            },
                t
        }
        var d, p, h = e.documentElement, f = t.setTimeout, m = e.getElementsByTagName("script")[0], v = {}.toString, g = [], y = 0, b = "MozAppearance"in h.style, w = b && !!e.createRange().compareNode, x = w ? h : m.parentNode, h = t.opera && "[object Opera]" == v.call(t.opera), h = !!e.attachEvent && !h, k = b ? "object" : h ? "script" : "img", C = h ? "script" : k, T = Array.isArray || function(t) {
            return "[object Array]" == v.call(t)
        }
            , _ = [], S = {}, $ = {
            timeout: function(t, e) {
                return e.length && (t.timeout = e[0]),
                    t
            }
        };
        p = function(t) {
            function e(t) {
                var e, n, i, t = t.split("!"), o = _.length, r = t.pop(), s = t.length, r = {
                    url: r,
                    origUrl: r,
                    prefixes: t
                };
                for (n = 0; s > n; n++)
                    i = t[n].split("="),
                    (e = $[i.shift()]) && (r = e(r, i));
                for (n = 0; o > n; n++)
                    r = _[n](r);
                return r
            }
            function s(t, o, r, s, a) {
                var l = e(t)
                    , c = l.autoCallback;
                l.url.split(".").pop().split("?").shift(),
                l.bypass || (o && (o = i(o) ? o : o[t] || o[s] || o[t.split("/").pop().split("?")[0]]),
                    l.instead ? l.instead(t, o, r, s, a) : (S[l.url] ? l.noexec = !0 : S[l.url] = 1,
                        r.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : n, l.noexec, l.attrs, l.timeout),
                    (i(o) || i(c)) && r.load(function() {
                        u(),
                        o && o(l.origUrl, a, s),
                        c && c(l.origUrl, a, s),
                            S[l.url] = 2
                    })))
            }
            function a(t, e) {
                function n(t, n) {
                    if (t) {
                        if (o(t))
                            n || (d = function() {
                                    var t = [].slice.call(arguments);
                                    p.apply(this, t),
                                        h()
                                }
                            ),
                                s(t, d, e, 0, c);
                        else if (Object(t) === t)
                            for (l in a = function() {
                                var e, n = 0;
                                for (e in t)
                                    t.hasOwnProperty(e) && n++;
                                return n
                            }(),
                                t)
                                t.hasOwnProperty(l) && (!n && !--a && (i(d) ? d = function() {
                                        var t = [].slice.call(arguments);
                                        p.apply(this, t),
                                            h()
                                    }
                                    : d[l] = function(t) {
                                        return function() {
                                            var e = [].slice.call(arguments);
                                            t && t.apply(this, e),
                                                h()
                                        }
                                    }(p[l])),
                                    s(t[l], d, e, l, c))
                    } else
                        !n && h()
                }
                var a, l, c = !!t.test, u = t.load || t.both, d = t.callback || r, p = d, h = t.complete || r;
                n(c ? t.yep : t.nope, !!u),
                u && n(u)
            }
            var l, c, d = this.yepnope.loader;
            if (o(t))
                s(t, 0, d, 0);
            else if (T(t))
                for (l = 0; l < t.length; l++)
                    c = t[l],
                        o(c) ? s(c, 0, d, 0) : T(c) ? p(c) : Object(c) === c && a(c, d);
            else
                Object(t) === t && a(t, d)
        }
            ,
            p.addPrefix = function(t, e) {
                $[t] = e
            }
            ,
            p.addFilter = function(t) {
                _.push(t)
            }
            ,
            p.errorTimeout = 1e4,
        null == e.readyState && e.addEventListener && (e.readyState = "loading",
            e.addEventListener("DOMContentLoaded", d = function() {
                    e.removeEventListener("DOMContentLoaded", d, 0),
                        e.readyState = "complete"
                }
                , 0)),
            t.yepnope = u(),
            t.yepnope.executeStack = a,
            t.yepnope.injectJs = function(t, n, i, o, l, c) {
                var u, d, h = e.createElement("script"), o = o || p.errorTimeout;
                h.src = t;
                for (d in i)
                    h.setAttribute(d, i[d]);
                n = c ? a : n || r,
                    h.onreadystatechange = h.onload = function() {
                        !u && s(h.readyState) && (u = 1,
                            n(),
                            h.onload = h.onreadystatechange = null)
                    }
                    ,
                    f(function() {
                        u || (u = 1,
                            n(1))
                    }, o),
                    l ? h.onload() : m.parentNode.insertBefore(h, m)
            }
            ,
            t.yepnope.injectCss = function(t, n, i, o, s, l) {
                var c, o = e.createElement("link"), n = l ? a : n || r;
                o.href = t,
                    o.rel = "stylesheet",
                    o.type = "text/css";
                for (c in i)
                    o.setAttribute(c, i[c]);
                s || (m.parentNode.insertBefore(o, m),
                    f(n, 0))
            }
    }(this, document),
    Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    }
    ,
    function(t, e, n, i) {
        "use strict";
        i.addTest("body__firefox", function() {
            return "undefined" != typeof InstallTrigger
        }),
            i.addTest("body__ie", function() {
                var t = e.navigator.userAgent
                    , n = t.indexOf("MSIE ");
                if (n > 0)
                    return parseInt(t.substring(n + 5, t.indexOf(".", n)), 10);
                var i = t.indexOf("Trident/");
                if (i > 0) {
                    var o = t.indexOf("rv:");
                    return parseInt(t.substring(o + 3, t.indexOf(".", o)), 10)
                }
                var r = t.indexOf("Edge/");
                return r > 0 ? parseInt(t.substring(r + 5, t.indexOf(".", r)), 10) : !1
            }),
            i.addTest("csspointerevents", function() {
                var t = n.createElement("a").style;
                return t.cssText = "pointer-events:auto",
                "auto" === t.pointerEvents
            }),
            i.addTest("body__android-os", function() {
                return navigator.userAgent.indexOf("Mozilla/5.0") > -1 && navigator.userAgent.indexOf("Android ") > -1 && navigator.userAgent.indexOf("AppleWebKit") > -1
            })
    }(this.jQuery, this, this.document, this.Modernizr),
    function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
                if (!t.document)
                    throw new Error("jQuery requires a window with a document");
                return e(t)
            }
            : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function n(t) {
            var e = !!t && "length"in t && t.length
                , n = ht.type(t);
            return "function" === n || ht.isWindow(t) ? !1 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }
        function i(t, e, n) {
            if (ht.isFunction(e))
                return ht.grep(t, function(t, i) {
                    return !!e.call(t, i, t) !== n
                });
            if (e.nodeType)
                return ht.grep(t, function(t) {
                    return t === e !== n
                });
            if ("string" == typeof e) {
                if (Ct.test(e))
                    return ht.filter(e, t, n);
                e = ht.filter(e, t)
            }
            return ht.grep(t, function(t) {
                return ht.inArray(t, e) > -1 !== n
            })
        }
        function o(t, e) {
            do
                t = t[e];
            while (t && 1 !== t.nodeType);return t
        }
        function r(t) {
            var e = {};
            return ht.each(t.match(At) || [], function(t, n) {
                e[n] = !0
            }),
                e
        }
        function s() {
            it.addEventListener ? (it.removeEventListener("DOMContentLoaded", a),
                t.removeEventListener("load", a)) : (it.detachEvent("onreadystatechange", a),
                t.detachEvent("onload", a))
        }
        function a() {
            (it.addEventListener || "load" === t.event.type || "complete" === it.readyState) && (s(),
                ht.ready())
        }
        function l(t, e, n) {
            if (void 0 === n && 1 === t.nodeType) {
                var i = "data-" + e.replace(Nt, "-$1").toLowerCase();
                if (n = t.getAttribute(i),
                "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Mt.test(n) ? ht.parseJSON(n) : n
                    } catch (o) {}
                    ht.data(t, e, n)
                } else
                    n = void 0
            }
            return n
        }
        function c(t) {
            var e;
            for (e in t)
                if (("data" !== e || !ht.isEmptyObject(t[e])) && "toJSON" !== e)
                    return !1;
            return !0
        }
        function u(t, e, n, i) {
            if (Dt(t)) {
                var o, r, s = ht.expando, a = t.nodeType, l = a ? ht.cache : t, c = a ? t[s] : t[s] && s;
                if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof e)
                    return c || (c = a ? t[s] = nt.pop() || ht.guid++ : s),
                    l[c] || (l[c] = a ? {} : {
                        toJSON: ht.noop
                    }),
                    "object" != typeof e && "function" != typeof e || (i ? l[c] = ht.extend(l[c], e) : l[c].data = ht.extend(l[c].data, e)),
                        r = l[c],
                    i || (r.data || (r.data = {}),
                        r = r.data),
                    void 0 !== n && (r[ht.camelCase(e)] = n),
                        "string" == typeof e ? (o = r[e],
                        null == o && (o = r[ht.camelCase(e)])) : o = r,
                        o
            }
        }
        function d(t, e, n) {
            if (Dt(t)) {
                var i, o, r = t.nodeType, s = r ? ht.cache : t, a = r ? t[ht.expando] : ht.expando;
                if (s[a]) {
                    if (e && (i = n ? s[a] : s[a].data)) {
                        ht.isArray(e) ? e = e.concat(ht.map(e, ht.camelCase)) : e in i ? e = [e] : (e = ht.camelCase(e),
                            e = e in i ? [e] : e.split(" ")),
                            o = e.length;
                        for (; o--; )
                            delete i[e[o]];
                        if (n ? !c(i) : !ht.isEmptyObject(i))
                            return
                    }
                    (n || (delete s[a].data,
                        c(s[a]))) && (r ? ht.cleanData([t], !0) : dt.deleteExpando || s != s.window ? delete s[a] : s[a] = void 0)
                }
            }
        }
        function p(t, e, n, i) {
            var o, r = 1, s = 20, a = i ? function() {
                    return i.cur()
                }
                : function() {
                    return ht.css(t, e, "")
                }
                , l = a(), c = n && n[3] || (ht.cssNumber[e] ? "" : "px"), u = (ht.cssNumber[e] || "px" !== c && +l) && Pt.exec(ht.css(t, e));
            if (u && u[3] !== c) {
                c = c || u[3],
                    n = n || [],
                    u = +l || 1;
                do
                    r = r || ".5",
                        u /= r,
                        ht.style(t, e, u + c);
                while (r !== (r = a() / l) && 1 !== r && --s)
            }
            return n && (u = +u || +l || 0,
                o = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
            i && (i.unit = c,
                i.start = u,
                i.end = o)),
                o
        }
        function h(t) {
            var e = Wt.split("|")
                , n = t.createDocumentFragment();
            if (n.createElement)
                for (; e.length; )
                    n.createElement(e.pop());
            return n
        }
        function f(t, e) {
            var n, i, o = 0, r = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
            if (!r)
                for (r = [],
                         n = t.childNodes || t; null != (i = n[o]); o++)
                    !e || ht.nodeName(i, e) ? r.push(i) : ht.merge(r, f(i, e));
            return void 0 === e || e && ht.nodeName(t, e) ? ht.merge([t], r) : r
        }
        function m(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++)
                ht._data(n, "globalEval", !e || ht._data(e[i], "globalEval"))
        }
        function v(t) {
            qt.test(t.type) && (t.defaultChecked = t.checked)
        }
        function g(t, e, n, i, o) {
            for (var r, s, a, l, c, u, d, p = t.length, g = h(e), y = [], b = 0; p > b; b++)
                if (s = t[b],
                s || 0 === s)
                    if ("object" === ht.type(s))
                        ht.merge(y, s.nodeType ? [s] : s);
                    else if (Vt.test(s)) {
                        for (l = l || g.appendChild(e.createElement("div")),
                                 c = (zt.exec(s) || ["", ""])[1].toLowerCase(),
                                 d = Ut[c] || Ut._default,
                                 l.innerHTML = d[1] + ht.htmlPrefilter(s) + d[2],
                                 r = d[0]; r--; )
                            l = l.lastChild;
                        if (!dt.leadingWhitespace && Bt.test(s) && y.push(e.createTextNode(Bt.exec(s)[0])),
                            !dt.tbody)
                            for (s = "table" !== c || Gt.test(s) ? "<table>" !== d[1] || Gt.test(s) ? 0 : l : l.firstChild,
                                     r = s && s.childNodes.length; r--; )
                                ht.nodeName(u = s.childNodes[r], "tbody") && !u.childNodes.length && s.removeChild(u);
                        for (ht.merge(y, l.childNodes),
                                 l.textContent = ""; l.firstChild; )
                            l.removeChild(l.firstChild);
                        l = g.lastChild
                    } else
                        y.push(e.createTextNode(s));
            for (l && g.removeChild(l),
                 dt.appendChecked || ht.grep(f(y, "input"), v),
                     b = 0; s = y[b++]; )
                if (i && ht.inArray(s, i) > -1)
                    o && o.push(s);
                else if (a = ht.contains(s.ownerDocument, s),
                    l = f(g.appendChild(s), "script"),
                a && m(l),
                    n)
                    for (r = 0; s = l[r++]; )
                        Rt.test(s.type || "") && n.push(s);
            return l = null,
                g
        }
        function y() {
            return !0
        }
        function b() {
            return !1
        }
        function w() {
            try {
                return it.activeElement
            } catch (t) {}
        }
        function x(t, e, n, i, o, r) {
            var s, a;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n,
                    n = void 0);
                for (a in e)
                    x(t, a, n, i, e[a], r);
                return t
            }
            if (null == i && null == o ? (o = n,
                i = n = void 0) : null == o && ("string" == typeof n ? (o = i,
                i = void 0) : (o = i,
                i = n,
                n = void 0)),
            o === !1)
                o = b;
            else if (!o)
                return t;
            return 1 === r && (s = o,
                o = function(t) {
                    return ht().off(t),
                        s.apply(this, arguments)
                }
                ,
                o.guid = s.guid || (s.guid = ht.guid++)),
                t.each(function() {
                    ht.event.add(this, e, o, i, n)
                })
        }
        function k(t, e) {
            return ht.nodeName(t, "table") && ht.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }
        function C(t) {
            return t.type = (null !== ht.find.attr(t, "type")) + "/" + t.type,
                t
        }
        function T(t) {
            var e = oe.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"),
                t
        }
        function _(t, e) {
            if (1 === e.nodeType && ht.hasData(t)) {
                var n, i, o, r = ht._data(t), s = ht._data(e, r), a = r.events;
                if (a) {
                    delete s.handle,
                        s.events = {};
                    for (n in a)
                        for (i = 0,
                                 o = a[n].length; o > i; i++)
                            ht.event.add(e, n, a[n][i])
                }
                s.data && (s.data = ht.extend({}, s.data))
            }
        }
        function S(t, e) {
            var n, i, o;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(),
                !dt.noCloneEvent && e[ht.expando]) {
                    o = ht._data(e);
                    for (i in o.events)
                        ht.removeEvent(e, i, o.handle);
                    e.removeAttribute(ht.expando)
                }
                "script" === n && e.text !== t.text ? (C(e).text = t.text,
                    T(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML),
                dt.html5Clone && t.innerHTML && !ht.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && qt.test(t.type) ? (e.defaultChecked = e.checked = t.checked,
                e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
            }
        }
        function $(t, e, n, i) {
            e = rt.apply([], e);
            var o, r, s, a, l, c, u = 0, d = t.length, p = d - 1, h = e[0], m = ht.isFunction(h);
            if (m || d > 1 && "string" == typeof h && !dt.checkClone && ie.test(h))
                return t.each(function(o) {
                    var r = t.eq(o);
                    m && (e[0] = h.call(this, o, r.html())),
                        $(r, e, n, i)
                });
            if (d && (c = g(e, t[0].ownerDocument, !1, t, i),
                o = c.firstChild,
            1 === c.childNodes.length && (c = o),
            o || i)) {
                for (a = ht.map(f(c, "script"), C),
                         s = a.length; d > u; u++)
                    r = c,
                    u !== p && (r = ht.clone(r, !0, !0),
                    s && ht.merge(a, f(r, "script"))),
                        n.call(t[u], r, u);
                if (s)
                    for (l = a[a.length - 1].ownerDocument,
                             ht.map(a, T),
                             u = 0; s > u; u++)
                        r = a[u],
                        Rt.test(r.type || "") && !ht._data(r, "globalEval") && ht.contains(l, r) && (r.src ? ht._evalUrl && ht._evalUrl(r.src) : ht.globalEval((r.text || r.textContent || r.innerHTML || "").replace(re, "")));
                c = o = null
            }
            return t
        }
        function E(t, e, n) {
            for (var i, o = e ? ht.filter(e, t) : t, r = 0; null != (i = o[r]); r++)
                n || 1 !== i.nodeType || ht.cleanData(f(i)),
                i.parentNode && (n && ht.contains(i.ownerDocument, i) && m(f(i, "script")),
                    i.parentNode.removeChild(i));
            return t
        }
        function A(t, e) {
            var n = ht(e.createElement(t)).appendTo(e.body)
                , i = ht.css(n[0], "display");
            return n.detach(),
                i
        }
        function I(t) {
            var e = it
                , n = ce[t];
            return n || (n = A(t, e),
            "none" !== n && n || (le = (le || ht("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement),
                e = (le[0].contentWindow || le[0].contentDocument).document,
                e.write(),
                e.close(),
                n = A(t, e),
                le.detach()),
                ce[t] = n),
                n
        }
        function j(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }
        function D(t) {
            if (t in Te)
                return t;
            for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = Ce.length; n--; )
                if (t = Ce[n] + e,
                t in Te)
                    return t
        }
        function M(t, e) {
            for (var n, i, o, r = [], s = 0, a = t.length; a > s; s++)
                i = t[s],
                i.style && (r[s] = ht._data(i, "olddisplay"),
                    n = i.style.display,
                    e ? (r[s] || "none" !== n || (i.style.display = ""),
                    "" === i.style.display && Lt(i) && (r[s] = ht._data(i, "olddisplay", I(i.nodeName)))) : (o = Lt(i),
                    (n && "none" !== n || !o) && ht._data(i, "olddisplay", o ? n : ht.css(i, "display"))));
            for (s = 0; a > s; s++)
                i = t[s],
                i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
            return t
        }
        function N(t, e, n) {
            var i = we.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }
        function F(t, e, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2)
                "margin" === n && (s += ht.css(t, n + Ot[r], !0, o)),
                    i ? ("content" === n && (s -= ht.css(t, "padding" + Ot[r], !0, o)),
                    "margin" !== n && (s -= ht.css(t, "border" + Ot[r] + "Width", !0, o))) : (s += ht.css(t, "padding" + Ot[r], !0, o),
                    "padding" !== n && (s += ht.css(t, "border" + Ot[r] + "Width", !0, o)));
            return s
        }
        function P(t, e, n) {
            var i = !0
                , o = "width" === e ? t.offsetWidth : t.offsetHeight
                , r = fe(t)
                , s = dt.boxSizing && "border-box" === ht.css(t, "boxSizing", !1, r);
            if (0 >= o || null == o) {
                if (o = me(t, e, r),
                (0 > o || null == o) && (o = t.style[e]),
                    de.test(o))
                    return o;
                i = s && (dt.boxSizingReliable() || o === t.style[e]),
                    o = parseFloat(o) || 0
            }
            return o + F(t, e, n || (s ? "border" : "content"), i, r) + "px"
        }
        function O(t, e, n, i, o) {
            return new O.prototype.init(t,e,n,i,o)
        }
        function L() {
            return t.setTimeout(function() {
                _e = void 0
            }),
                _e = ht.now()
        }
        function H(t, e) {
            var n, i = {
                height: t
            }, o = 0;
            for (e = e ? 1 : 0; 4 > o; o += 2 - e)
                n = Ot[o],
                    i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t),
                i
        }
        function q(t, e, n) {
            for (var i, o = (B.tweeners[e] || []).concat(B.tweeners["*"]), r = 0, s = o.length; s > r; r++)
                if (i = o[r].call(n, e, t))
                    return i
        }
        function z(t, e, n) {
            var i, o, r, s, a, l, c, u, d = this, p = {}, h = t.style, f = t.nodeType && Lt(t), m = ht._data(t, "fxshow");
            n.queue || (a = ht._queueHooks(t, "fx"),
            null == a.unqueued && (a.unqueued = 0,
                    l = a.empty.fire,
                    a.empty.fire = function() {
                        a.unqueued || l()
                    }
            ),
                a.unqueued++,
                d.always(function() {
                    d.always(function() {
                        a.unqueued--,
                        ht.queue(t, "fx").length || a.empty.fire()
                    })
                })),
            1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                c = ht.css(t, "display"),
                u = "none" === c ? ht._data(t, "olddisplay") || I(t.nodeName) : c,
            "inline" === u && "none" === ht.css(t, "float") && (dt.inlineBlockNeedsLayout && "inline" !== I(t.nodeName) ? h.zoom = 1 : h.display = "inline-block")),
            n.overflow && (h.overflow = "hidden",
            dt.shrinkWrapBlocks() || d.always(function() {
                h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
            }));
            for (i in e)
                if (o = e[i],
                    $e.exec(o)) {
                    if (delete e[i],
                        r = r || "toggle" === o,
                    o === (f ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i])
                            continue;
                        f = !0
                    }
                    p[i] = m && m[i] || ht.style(t, i)
                } else
                    c = void 0;
            if (ht.isEmptyObject(p))
                "inline" === ("none" === c ? I(t.nodeName) : c) && (h.display = c);
            else {
                m ? "hidden"in m && (f = m.hidden) : m = ht._data(t, "fxshow", {}),
                r && (m.hidden = !f),
                    f ? ht(t).show() : d.done(function() {
                        ht(t).hide()
                    }),
                    d.done(function() {
                        var e;
                        ht._removeData(t, "fxshow");
                        for (e in p)
                            ht.style(t, e, p[e])
                    });
                for (i in p)
                    s = q(f ? m[i] : 0, i, d),
                    i in m || (m[i] = s.start,
                    f && (s.end = s.start,
                        s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }
        function R(t, e) {
            var n, i, o, r, s;
            for (n in t)
                if (i = ht.camelCase(n),
                    o = e[i],
                    r = t[n],
                ht.isArray(r) && (o = r[1],
                    r = t[n] = r[0]),
                n !== i && (t[i] = r,
                    delete t[n]),
                    s = ht.cssHooks[i],
                s && "expand"in s) {
                    r = s.expand(r),
                        delete t[i];
                    for (n in r)
                        n in t || (t[n] = r[n],
                            e[n] = o)
                } else
                    e[i] = o
        }
        function B(t, e, n) {
            var i, o, r = 0, s = B.prefilters.length, a = ht.Deferred().always(function() {
                delete l.elem
            }), l = function() {
                if (o)
                    return !1;
                for (var e = _e || L(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; l > s; s++)
                    c.tweens[s].run(r);
                return a.notifyWith(t, [c, r, n]),
                    1 > r && l ? n : (a.resolveWith(t, [c]),
                        !1)
            }, c = a.promise({
                elem: t,
                props: ht.extend({}, e),
                opts: ht.extend(!0, {
                    specialEasing: {},
                    easing: ht.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: _e || L(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = ht.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i),
                        i
                },
                stop: function(e) {
                    var n = 0
                        , i = e ? c.tweens.length : 0;
                    if (o)
                        return this;
                    for (o = !0; i > n; n++)
                        c.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [c, 1, 0]),
                        a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]),
                        this
                }
            }), u = c.props;
            for (R(u, c.opts.specialEasing); s > r; r++)
                if (i = B.prefilters[r].call(c, t, u, c.opts))
                    return ht.isFunction(i.stop) && (ht._queueHooks(c.elem, c.opts.queue).stop = ht.proxy(i.stop, i)),
                        i;
            return ht.map(u, q, c),
            ht.isFunction(c.opts.start) && c.opts.start.call(t, c),
                ht.fx.timer(ht.extend(l, {
                    elem: t,
                    anim: c,
                    queue: c.opts.queue
                })),
                c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }
        function W(t) {
            return ht.attr(t, "class") || ""
        }
        function U(t) {
            return function(e, n) {
                "string" != typeof e && (n = e,
                    e = "*");
                var i, o = 0, r = e.toLowerCase().match(At) || [];
                if (ht.isFunction(n))
                    for (; i = r[o++]; )
                        "+" === i.charAt(0) ? (i = i.slice(1) || "*",
                            (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }
        function V(t, e, n, i) {
            function o(a) {
                var l;
                return r[a] = !0,
                    ht.each(t[a] || [], function(t, a) {
                        var c = a(e, n, i);
                        return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c),
                            o(c),
                            !1)
                    }),
                    l
            }
            var r = {}
                , s = t === Je;
            return o(e.dataTypes[0]) || !r["*"] && o("*")
        }
        function G(t, e) {
            var n, i, o = ht.ajaxSettings.flatOptions || {};
            for (i in e)
                void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
            return n && ht.extend(!0, t, n),
                t
        }
        function Q(t, e, n) {
            for (var i, o, r, s, a = t.contents, l = t.dataTypes; "*" === l[0]; )
                l.shift(),
                void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
            if (o)
                for (s in a)
                    if (a[s] && a[s].test(o)) {
                        l.unshift(s);
                        break
                    }
            if (l[0]in n)
                r = l[0];
            else {
                for (s in n) {
                    if (!l[0] || t.converters[s + " " + l[0]]) {
                        r = s;
                        break
                    }
                    i || (i = s)
                }
                r = r || i
            }
            return r ? (r !== l[0] && l.unshift(r),
                n[r]) : void 0
        }
        function X(t, e, n, i) {
            var o, r, s, a, l, c = {}, u = t.dataTypes.slice();
            if (u[1])
                for (s in t.converters)
                    c[s.toLowerCase()] = t.converters[s];
            for (r = u.shift(); r; )
                if (t.responseFields[r] && (n[t.responseFields[r]] = e),
                !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                    l = r,
                    r = u.shift())
                    if ("*" === r)
                        r = l;
                    else if ("*" !== l && l !== r) {
                        if (s = c[l + " " + r] || c["* " + r],
                            !s)
                            for (o in c)
                                if (a = o.split(" "),
                                a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    s === !0 ? s = c[o] : c[o] !== !0 && (r = a[0],
                                        u.unshift(a[1]));
                                    break
                                }
                        if (s !== !0)
                            if (s && t["throws"])
                                e = s(e);
                            else
                                try {
                                    e = s(e)
                                } catch (d) {
                                    return {
                                        state: "parsererror",
                                        error: s ? d : "No conversion from " + l + " to " + r
                                    }
                                }
                    }
            return {
                state: "success",
                data: e
            }
        }
        function Y(t) {
            return t.style && t.style.display || ht.css(t, "display")
        }
        function K(t) {
            if (!ht.contains(t.ownerDocument || it, t))
                return !0;
            for (; t && 1 === t.nodeType; ) {
                if ("none" === Y(t) || "hidden" === t.type)
                    return !0;
                t = t.parentNode
            }
            return !1
        }
        function J(t, e, n, i) {
            var o;
            if (ht.isArray(e))
                ht.each(e, function(e, o) {
                    n || on.test(t) ? i(t, o) : J(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
                });
            else if (n || "object" !== ht.type(e))
                i(t, e);
            else
                for (o in e)
                    J(t + "[" + o + "]", e[o], n, i)
        }
        function Z() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {}
        }
        function tt() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }
        function et(t) {
            return ht.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
        }
        var nt = []
            , it = t.document
            , ot = nt.slice
            , rt = nt.concat
            , st = nt.push
            , at = nt.indexOf
            , lt = {}
            , ct = lt.toString
            , ut = lt.hasOwnProperty
            , dt = {}
            , pt = "1.12.4"
            , ht = function(t, e) {
            return new ht.fn.init(t,e)
        }
            , ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
            , mt = /^-ms-/
            , vt = /-([\da-z])/gi
            , gt = function(t, e) {
            return e.toUpperCase()
        };
        ht.fn = ht.prototype = {
            jquery: pt,
            constructor: ht,
            selector: "",
            length: 0,
            toArray: function() {
                return ot.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : ot.call(this)
            },
            pushStack: function(t) {
                var e = ht.merge(this.constructor(), t);
                return e.prevObject = this,
                    e.context = this.context,
                    e
            },
            each: function(t) {
                return ht.each(this, t)
            },
            map: function(t) {
                return this.pushStack(ht.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(ot.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length
                    , n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: st,
            sort: nt.sort,
            splice: nt.splice
        },
            ht.extend = ht.fn.extend = function() {
                var t, e, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
                for ("boolean" == typeof s && (c = s,
                    s = arguments[a] || {},
                    a++),
                     "object" == typeof s || ht.isFunction(s) || (s = {}),
                     a === l && (s = this,
                         a--); l > a; a++)
                    if (null != (o = arguments[a]))
                        for (i in o)
                            t = s[i],
                                n = o[i],
                            s !== n && (c && n && (ht.isPlainObject(n) || (e = ht.isArray(n))) ? (e ? (e = !1,
                                r = t && ht.isArray(t) ? t : []) : r = t && ht.isPlainObject(t) ? t : {},
                                s[i] = ht.extend(c, r, n)) : void 0 !== n && (s[i] = n));
                return s
            }
            ,
            ht.extend({
                expando: "jQuery" + (pt + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(t) {
                    throw new Error(t)
                },
                noop: function() {},
                isFunction: function(t) {
                    return "function" === ht.type(t)
                },
                isArray: Array.isArray || function(t) {
                    return "array" === ht.type(t)
                }
                ,
                isWindow: function(t) {
                    return null != t && t == t.window
                },
                isNumeric: function(t) {
                    var e = t && t.toString();
                    return !ht.isArray(t) && e - parseFloat(e) + 1 >= 0
                },
                isEmptyObject: function(t) {
                    var e;
                    for (e in t)
                        return !1;
                    return !0
                },
                isPlainObject: function(t) {
                    var e;
                    if (!t || "object" !== ht.type(t) || t.nodeType || ht.isWindow(t))
                        return !1;
                    try {
                        if (t.constructor && !ut.call(t, "constructor") && !ut.call(t.constructor.prototype, "isPrototypeOf"))
                            return !1
                    } catch (n) {
                        return !1
                    }
                    if (!dt.ownFirst)
                        for (e in t)
                            return ut.call(t, e);
                    for (e in t)
                        ;
                    return void 0 === e || ut.call(t, e)
                },
                type: function(t) {
                    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ct.call(t)] || "object" : typeof t
                },
                globalEval: function(e) {
                    e && ht.trim(e) && (t.execScript || function(e) {
                            t.eval.call(t, e)
                        }
                    )(e)
                },
                camelCase: function(t) {
                    return t.replace(mt, "ms-").replace(vt, gt)
                },
                nodeName: function(t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                },
                each: function(t, e) {
                    var i, o = 0;
                    if (n(t))
                        for (i = t.length; i > o && e.call(t[o], o, t[o]) !== !1; o++)
                            ;
                    else
                        for (o in t)
                            if (e.call(t[o], o, t[o]) === !1)
                                break;
                    return t
                },
                trim: function(t) {
                    return null == t ? "" : (t + "").replace(ft, "")
                },
                makeArray: function(t, e) {
                    var i = e || [];
                    return null != t && (n(Object(t)) ? ht.merge(i, "string" == typeof t ? [t] : t) : st.call(i, t)),
                        i
                },
                inArray: function(t, e, n) {
                    var i;
                    if (e) {
                        if (at)
                            return at.call(e, t, n);
                        for (i = e.length,
                                 n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                            if (n in e && e[n] === t)
                                return n
                    }
                    return -1
                },
                merge: function(t, e) {
                    for (var n = +e.length, i = 0, o = t.length; n > i; )
                        t[o++] = e[i++];
                    if (n !== n)
                        for (; void 0 !== e[i]; )
                            t[o++] = e[i++];
                    return t.length = o,
                        t
                },
                grep: function(t, e, n) {
                    for (var i, o = [], r = 0, s = t.length, a = !n; s > r; r++)
                        i = !e(t[r], r),
                        i !== a && o.push(t[r]);
                    return o
                },
                map: function(t, e, i) {
                    var o, r, s = 0, a = [];
                    if (n(t))
                        for (o = t.length; o > s; s++)
                            r = e(t[s], s, i),
                            null != r && a.push(r);
                    else
                        for (s in t)
                            r = e(t[s], s, i),
                            null != r && a.push(r);
                    return rt.apply([], a)
                },
                guid: 1,
                proxy: function(t, e) {
                    var n, i, o;
                    return "string" == typeof e && (o = t[e],
                        e = t,
                        t = o),
                        ht.isFunction(t) ? (n = ot.call(arguments, 2),
                            i = function() {
                                return t.apply(e || this, n.concat(ot.call(arguments)))
                            }
                            ,
                            i.guid = t.guid = t.guid || ht.guid++,
                            i) : void 0
                },
                now: function() {
                    return +new Date
                },
                support: dt
            }),
        "function" == typeof Symbol && (ht.fn[Symbol.iterator] = nt[Symbol.iterator]),
            ht.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
                lt["[object " + e + "]"] = e.toLowerCase()
            });
        var yt = function(t) {
            function e(t, e, n, i) {
                var o, r, s, a, l, c, d, h, f = e && e.ownerDocument, m = e ? e.nodeType : 9;
                if (n = n || [],
                "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m)
                    return n;
                if (!i && ((e ? e.ownerDocument || e : q) !== D && j(e),
                    e = e || D,
                    N)) {
                    if (11 !== m && (c = gt.exec(t)))
                        if (o = c[1]) {
                            if (9 === m) {
                                if (!(s = e.getElementById(o)))
                                    return n;
                                if (s.id === o)
                                    return n.push(s),
                                        n
                            } else if (f && (s = f.getElementById(o)) && L(e, s) && s.id === o)
                                return n.push(s),
                                    n
                        } else {
                            if (c[2])
                                return J.apply(n, e.getElementsByTagName(t)),
                                    n;
                            if ((o = c[3]) && x.getElementsByClassName && e.getElementsByClassName)
                                return J.apply(n, e.getElementsByClassName(o)),
                                    n
                        }
                    if (x.qsa && !U[t + " "] && (!F || !F.test(t))) {
                        if (1 !== m)
                            f = e,
                                h = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((a = e.getAttribute("id")) ? a = a.replace(bt, "\\$&") : e.setAttribute("id", a = H),
                                     d = _(t),
                                     r = d.length,
                                     l = pt.test(a) ? "#" + a : "[id='" + a + "']"; r--; )
                                d[r] = l + " " + p(d[r]);
                            h = d.join(","),
                                f = yt.test(t) && u(e.parentNode) || e
                        }
                        if (h)
                            try {
                                return J.apply(n, f.querySelectorAll(h)),
                                    n
                            } catch (v) {} finally {
                                a === H && e.removeAttribute("id")
                            }
                    }
                }
                return $(t.replace(at, "$1"), e, n, i)
            }
            function n() {
                function t(n, i) {
                    return e.push(n + " ") > k.cacheLength && delete t[e.shift()],
                        t[n + " "] = i
                }
                var e = [];
                return t
            }
            function i(t) {
                return t[H] = !0,
                    t
            }
            function o(t) {
                var e = D.createElement("div");
                try {
                    return !!t(e)
                } catch (n) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e),
                        e = null
                }
            }
            function r(t, e) {
                for (var n = t.split("|"), i = n.length; i--; )
                    k.attrHandle[n[i]] = e
            }
            function s(t, e) {
                var n = e && t
                    , i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
                if (i)
                    return i;
                if (n)
                    for (; n = n.nextSibling; )
                        if (n === e)
                            return -1;
                return t ? 1 : -1
            }
            function a(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }
            function l(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }
            function c(t) {
                return i(function(e) {
                    return e = +e,
                        i(function(n, i) {
                            for (var o, r = t([], n.length, e), s = r.length; s--; )
                                n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                        })
                })
            }
            function u(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }
            function d() {}
            function p(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++)
                    i += t[e].value;
                return i
            }
            function h(t, e, n) {
                var i = e.dir
                    , o = n && "parentNode" === i
                    , r = R++;
                return e.first ? function(e, n, r) {
                        for (; e = e[i]; )
                            if (1 === e.nodeType || o)
                                return t(e, n, r)
                    }
                    : function(e, n, s) {
                        var a, l, c, u = [z, r];
                        if (s) {
                            for (; e = e[i]; )
                                if ((1 === e.nodeType || o) && t(e, n, s))
                                    return !0
                        } else
                            for (; e = e[i]; )
                                if (1 === e.nodeType || o) {
                                    if (c = e[H] || (e[H] = {}),
                                        l = c[e.uniqueID] || (c[e.uniqueID] = {}),
                                    (a = l[i]) && a[0] === z && a[1] === r)
                                        return u[2] = a[2];
                                    if (l[i] = u,
                                        u[2] = t(e, n, s))
                                        return !0
                                }
                    }
            }
            function f(t) {
                return t.length > 1 ? function(e, n, i) {
                        for (var o = t.length; o--; )
                            if (!t[o](e, n, i))
                                return !1;
                        return !0
                    }
                    : t[0]
            }
            function m(t, n, i) {
                for (var o = 0, r = n.length; r > o; o++)
                    e(t, n[o], i);
                return i
            }
            function v(t, e, n, i, o) {
                for (var r, s = [], a = 0, l = t.length, c = null != e; l > a; a++)
                    (r = t[a]) && (n && !n(r, i, o) || (s.push(r),
                    c && e.push(a)));
                return s
            }
            function g(t, e, n, o, r, s) {
                return o && !o[H] && (o = g(o)),
                r && !r[H] && (r = g(r, s)),
                    i(function(i, s, a, l) {
                        var c, u, d, p = [], h = [], f = s.length, g = i || m(e || "*", a.nodeType ? [a] : a, []), y = !t || !i && e ? g : v(g, p, t, a, l), b = n ? r || (i ? t : f || o) ? [] : s : y;
                        if (n && n(y, b, a, l),
                            o)
                            for (c = v(b, h),
                                     o(c, [], a, l),
                                     u = c.length; u--; )
                                (d = c[u]) && (b[h[u]] = !(y[h[u]] = d));
                        if (i) {
                            if (r || t) {
                                if (r) {
                                    for (c = [],
                                             u = b.length; u--; )
                                        (d = b[u]) && c.push(y[u] = d);
                                    r(null, b = [], c, l)
                                }
                                for (u = b.length; u--; )
                                    (d = b[u]) && (c = r ? tt(i, d) : p[u]) > -1 && (i[c] = !(s[c] = d))
                            }
                        } else
                            b = v(b === s ? b.splice(f, b.length) : b),
                                r ? r(null, s, b, l) : J.apply(s, b)
                    })
            }
            function y(t) {
                for (var e, n, i, o = t.length, r = k.relative[t[0].type], s = r || k.relative[" "], a = r ? 1 : 0, l = h(function(t) {
                    return t === e
                }, s, !0), c = h(function(t) {
                    return tt(e, t) > -1
                }, s, !0), u = [function(t, n, i) {
                    var o = !r && (i || n !== E) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                    return e = null,
                        o
                }
                ]; o > a; a++)
                    if (n = k.relative[t[a].type])
                        u = [h(f(u), n)];
                    else {
                        if (n = k.filter[t[a].type].apply(null, t[a].matches),
                            n[H]) {
                            for (i = ++a; o > i && !k.relative[t[i].type]; i++)
                                ;
                            return g(a > 1 && f(u), a > 1 && p(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(at, "$1"), n, i > a && y(t.slice(a, i)), o > i && y(t = t.slice(i)), o > i && p(t))
                        }
                        u.push(n)
                    }
                return f(u)
            }
            function b(t, n) {
                var o = n.length > 0
                    , r = t.length > 0
                    , s = function(i, s, a, l, c) {
                    var u, d, p, h = 0, f = "0", m = i && [], g = [], y = E, b = i || r && k.find.TAG("*", c), w = z += null == y ? 1 : Math.random() || .1, x = b.length;
                    for (c && (E = s === D || s || c); f !== x && null != (u = b[f]); f++) {
                        if (r && u) {
                            for (d = 0,
                                 s || u.ownerDocument === D || (j(u),
                                     a = !N); p = t[d++]; )
                                if (p(u, s || D, a)) {
                                    l.push(u);
                                    break
                                }
                            c && (z = w)
                        }
                        o && ((u = !p && u) && h--,
                        i && m.push(u))
                    }
                    if (h += f,
                    o && f !== h) {
                        for (d = 0; p = n[d++]; )
                            p(m, g, s, a);
                        if (i) {
                            if (h > 0)
                                for (; f--; )
                                    m[f] || g[f] || (g[f] = Y.call(l));
                            g = v(g)
                        }
                        J.apply(l, g),
                        c && !i && g.length > 0 && h + n.length > 1 && e.uniqueSort(l)
                    }
                    return c && (z = w,
                        E = y),
                        m
                };
                return o ? i(s) : s
            }
            var w, x, k, C, T, _, S, $, E, A, I, j, D, M, N, F, P, O, L, H = "sizzle" + 1 * new Date, q = t.document, z = 0, R = 0, B = n(), W = n(), U = n(), V = function(t, e) {
                return t === e && (I = !0),
                    0
            }, G = 1 << 31, Q = {}.hasOwnProperty, X = [], Y = X.pop, K = X.push, J = X.push, Z = X.slice, tt = function(t, e) {
                for (var n = 0, i = t.length; i > n; n++)
                    if (t[n] === e)
                        return n;
                return -1
            }, et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ot = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]", rt = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)", st = new RegExp(nt + "+","g"), at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$","g"), lt = new RegExp("^" + nt + "*," + nt + "*"), ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), ut = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]","g"), dt = new RegExp(rt), pt = new RegExp("^" + it + "$"), ht = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it + "|[*])"),
                ATTR: new RegExp("^" + ot),
                PSEUDO: new RegExp("^" + rt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)","i"),
                bool: new RegExp("^(?:" + et + ")$","i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)","i")
            }, ft = /^(?:input|select|textarea|button)$/i, mt = /^h\d$/i, vt = /^[^{]+\{\s*\[native \w/, gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, yt = /[+~]/, bt = /'|\\/g, wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)","ig"), xt = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, kt = function() {
                j()
            };
            try {
                J.apply(X = Z.call(q.childNodes), q.childNodes),
                    X[q.childNodes.length].nodeType
            } catch (Ct) {
                J = {
                    apply: X.length ? function(t, e) {
                            K.apply(t, Z.call(e))
                        }
                        : function(t, e) {
                            for (var n = t.length, i = 0; t[n++] = e[i++]; )
                                ;
                            t.length = n - 1
                        }
                }
            }
            x = e.support = {},
                T = e.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return e ? "HTML" !== e.nodeName : !1
                }
                ,
                j = e.setDocument = function(t) {
                    var e, n, i = t ? t.ownerDocument || t : q;
                    return i !== D && 9 === i.nodeType && i.documentElement ? (D = i,
                        M = D.documentElement,
                        N = !T(D),
                    (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", kt, !1) : n.attachEvent && n.attachEvent("onunload", kt)),
                        x.attributes = o(function(t) {
                            return t.className = "i",
                                !t.getAttribute("className")
                        }),
                        x.getElementsByTagName = o(function(t) {
                            return t.appendChild(D.createComment("")),
                                !t.getElementsByTagName("*").length
                        }),
                        x.getElementsByClassName = vt.test(D.getElementsByClassName),
                        x.getById = o(function(t) {
                            return M.appendChild(t).id = H,
                            !D.getElementsByName || !D.getElementsByName(H).length
                        }),
                        x.getById ? (k.find.ID = function(t, e) {
                                if ("undefined" != typeof e.getElementById && N) {
                                    var n = e.getElementById(t);
                                    return n ? [n] : []
                                }
                            }
                                ,
                                k.filter.ID = function(t) {
                                    var e = t.replace(wt, xt);
                                    return function(t) {
                                        return t.getAttribute("id") === e
                                    }
                                }
                        ) : (delete k.find.ID,
                                k.filter.ID = function(t) {
                                    var e = t.replace(wt, xt);
                                    return function(t) {
                                        var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                                        return n && n.value === e
                                    }
                                }
                        ),
                        k.find.TAG = x.getElementsByTagName ? function(t, e) {
                                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                            }
                            : function(t, e) {
                                var n, i = [], o = 0, r = e.getElementsByTagName(t);
                                if ("*" === t) {
                                    for (; n = r[o++]; )
                                        1 === n.nodeType && i.push(n);
                                    return i
                                }
                                return r
                            }
                        ,
                        k.find.CLASS = x.getElementsByClassName && function(t, e) {
                            return "undefined" != typeof e.getElementsByClassName && N ? e.getElementsByClassName(t) : void 0
                        }
                        ,
                        P = [],
                        F = [],
                    (x.qsa = vt.test(D.querySelectorAll)) && (o(function(t) {
                        M.appendChild(t).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                        t.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + nt + "*(?:''|\"\")"),
                        t.querySelectorAll("[selected]").length || F.push("\\[" + nt + "*(?:value|" + et + ")"),
                        t.querySelectorAll("[id~=" + H + "-]").length || F.push("~="),
                        t.querySelectorAll(":checked").length || F.push(":checked"),
                        t.querySelectorAll("a#" + H + "+*").length || F.push(".#.+[+~]")
                    }),
                        o(function(t) {
                            var e = D.createElement("input");
                            e.setAttribute("type", "hidden"),
                                t.appendChild(e).setAttribute("name", "D"),
                            t.querySelectorAll("[name=d]").length && F.push("name" + nt + "*[*^$|!~]?="),
                            t.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"),
                                t.querySelectorAll("*,:x"),
                                F.push(",.*:")
                        })),
                    (x.matchesSelector = vt.test(O = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && o(function(t) {
                        x.disconnectedMatch = O.call(t, "div"),
                            O.call(t, "[s!='']:x"),
                            P.push("!=", rt)
                    }),
                        F = F.length && new RegExp(F.join("|")),
                        P = P.length && new RegExp(P.join("|")),
                        e = vt.test(M.compareDocumentPosition),
                        L = e || vt.test(M.contains) ? function(t, e) {
                                var n = 9 === t.nodeType ? t.documentElement : t
                                    , i = e && e.parentNode;
                                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                            }
                            : function(t, e) {
                                if (e)
                                    for (; e = e.parentNode; )
                                        if (e === t)
                                            return !0;
                                return !1
                            }
                        ,
                        V = e ? function(t, e) {
                                if (t === e)
                                    return I = !0,
                                        0;
                                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1,
                                    1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === D || t.ownerDocument === q && L(q, t) ? -1 : e === D || e.ownerDocument === q && L(q, e) ? 1 : A ? tt(A, t) - tt(A, e) : 0 : 4 & n ? -1 : 1)
                            }
                            : function(t, e) {
                                if (t === e)
                                    return I = !0,
                                        0;
                                var n, i = 0, o = t.parentNode, r = e.parentNode, a = [t], l = [e];
                                if (!o || !r)
                                    return t === D ? -1 : e === D ? 1 : o ? -1 : r ? 1 : A ? tt(A, t) - tt(A, e) : 0;
                                if (o === r)
                                    return s(t, e);
                                for (n = t; n = n.parentNode; )
                                    a.unshift(n);
                                for (n = e; n = n.parentNode; )
                                    l.unshift(n);
                                for (; a[i] === l[i]; )
                                    i++;
                                return i ? s(a[i], l[i]) : a[i] === q ? -1 : l[i] === q ? 1 : 0
                            }
                        ,
                        D) : D
                }
                ,
                e.matches = function(t, n) {
                    return e(t, null, null, n)
                }
                ,
                e.matchesSelector = function(t, n) {
                    if ((t.ownerDocument || t) !== D && j(t),
                        n = n.replace(ut, "='$1']"),
                    x.matchesSelector && N && !U[n + " "] && (!P || !P.test(n)) && (!F || !F.test(n)))
                        try {
                            var i = O.call(t, n);
                            if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                                return i
                        } catch (o) {}
                    return e(n, D, null, [t]).length > 0
                }
                ,
                e.contains = function(t, e) {
                    return (t.ownerDocument || t) !== D && j(t),
                        L(t, e)
                }
                ,
                e.attr = function(t, e) {
                    (t.ownerDocument || t) !== D && j(t);
                    var n = k.attrHandle[e.toLowerCase()]
                        , i = n && Q.call(k.attrHandle, e.toLowerCase()) ? n(t, e, !N) : void 0;
                    return void 0 !== i ? i : x.attributes || !N ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }
                ,
                e.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }
                ,
                e.uniqueSort = function(t) {
                    var e, n = [], i = 0, o = 0;
                    if (I = !x.detectDuplicates,
                        A = !x.sortStable && t.slice(0),
                        t.sort(V),
                        I) {
                        for (; e = t[o++]; )
                            e === t[o] && (i = n.push(o));
                        for (; i--; )
                            t.splice(n[i], 1)
                    }
                    return A = null,
                        t
                }
                ,
                C = e.getText = function(t) {
                    var e, n = "", i = 0, o = t.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof t.textContent)
                                return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling)
                                n += C(t)
                        } else if (3 === o || 4 === o)
                            return t.nodeValue
                    } else
                        for (; e = t[i++]; )
                            n += C(e);
                    return n
                }
                ,
                k = e.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: ht,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(wt, xt),
                                t[3] = (t[3] || t[4] || t[5] || "").replace(wt, xt),
                            "~=" === t[2] && (t[3] = " " + t[3] + " "),
                                t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(),
                                "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]),
                                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                                    t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                                t
                        },
                        PSEUDO: function(t) {
                            var e, n = !t[6] && t[2];
                            return ht.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && dt.test(n) && (e = _(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                                t[2] = n.slice(0, e)),
                                t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(wt, xt).toLowerCase();
                            return "*" === t ? function() {
                                    return !0
                                }
                                : function(t) {
                                    return t.nodeName && t.nodeName.toLowerCase() === e
                                }
                        },
                        CLASS: function(t) {
                            var e = B[t + " "];
                            return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && B(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, n, i) {
                            return function(o) {
                                var r = e.attr(o, t);
                                return null == r ? "!=" === n : n ? (r += "",
                                    "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                            }
                        },
                        CHILD: function(t, e, n, i, o) {
                            var r = "nth" !== t.slice(0, 3)
                                , s = "last" !== t.slice(-4)
                                , a = "of-type" === e;
                            return 1 === i && 0 === o ? function(t) {
                                    return !!t.parentNode
                                }
                                : function(e, n, l) {
                                    var c, u, d, p, h, f, m = r !== s ? "nextSibling" : "previousSibling", v = e.parentNode, g = a && e.nodeName.toLowerCase(), y = !l && !a, b = !1;
                                    if (v) {
                                        if (r) {
                                            for (; m; ) {
                                                for (p = e; p = p[m]; )
                                                    if (a ? p.nodeName.toLowerCase() === g : 1 === p.nodeType)
                                                        return !1;
                                                f = m = "only" === t && !f && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (f = [s ? v.firstChild : v.lastChild],
                                        s && y) {
                                            for (p = v,
                                                     d = p[H] || (p[H] = {}),
                                                     u = d[p.uniqueID] || (d[p.uniqueID] = {}),
                                                     c = u[t] || [],
                                                     h = c[0] === z && c[1],
                                                     b = h && c[2],
                                                     p = h && v.childNodes[h]; p = ++h && p && p[m] || (b = h = 0) || f.pop(); )
                                                if (1 === p.nodeType && ++b && p === e) {
                                                    u[t] = [z, h, b];
                                                    break
                                                }
                                        } else if (y && (p = e,
                                            d = p[H] || (p[H] = {}),
                                            u = d[p.uniqueID] || (d[p.uniqueID] = {}),
                                            c = u[t] || [],
                                            h = c[0] === z && c[1],
                                            b = h),
                                        b === !1)
                                            for (; (p = ++h && p && p[m] || (b = h = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++b || (y && (d = p[H] || (p[H] = {}),
                                                u = d[p.uniqueID] || (d[p.uniqueID] = {}),
                                                u[t] = [z, b]),
                                            p !== e)); )
                                                ;
                                        return b -= o,
                                        b === i || b % i === 0 && b / i >= 0
                                    }
                                }
                        },
                        PSEUDO: function(t, n) {
                            var o, r = k.pseudos[t] || k.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                            return r[H] ? r(n) : r.length > 1 ? (o = [t, t, "", n],
                                    k.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                                        for (var i, o = r(t, n), s = o.length; s--; )
                                            i = tt(t, o[s]),
                                                t[i] = !(e[i] = o[s])
                                    }) : function(t) {
                                        return r(t, 0, o)
                                    }
                            ) : r
                        }
                    },
                    pseudos: {
                        not: i(function(t) {
                            var e = []
                                , n = []
                                , o = S(t.replace(at, "$1"));
                            return o[H] ? i(function(t, e, n, i) {
                                for (var r, s = o(t, null, i, []), a = t.length; a--; )
                                    (r = s[a]) && (t[a] = !(e[a] = r))
                            }) : function(t, i, r) {
                                return e[0] = t,
                                    o(e, null, r, n),
                                    e[0] = null,
                                    !n.pop()
                            }
                        }),
                        has: i(function(t) {
                            return function(n) {
                                return e(t, n).length > 0
                            }
                        }),
                        contains: i(function(t) {
                            return t = t.replace(wt, xt),
                                function(e) {
                                    return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                                }
                        }),
                        lang: i(function(t) {
                            return pt.test(t || "") || e.error("unsupported lang: " + t),
                                t = t.replace(wt, xt).toLowerCase(),
                                function(e) {
                                    var n;
                                    do
                                        if (n = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                            return n = n.toLowerCase(),
                                            n === t || 0 === n.indexOf(t + "-");
                                    while ((e = e.parentNode) && 1 === e.nodeType);return !1
                                }
                        }),
                        target: function(e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === M
                        },
                        focus: function(t) {
                            return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function(t) {
                            return t.disabled === !1
                        },
                        disabled: function(t) {
                            return t.disabled === !0
                        },
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex,
                            t.selected === !0
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6)
                                    return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !k.pseudos.empty(t)
                        },
                        header: function(t) {
                            return mt.test(t.nodeName)
                        },
                        input: function(t) {
                            return ft.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: c(function() {
                            return [0]
                        }),
                        last: c(function(t, e) {
                            return [e - 1]
                        }),
                        eq: c(function(t, e, n) {
                            return [0 > n ? n + e : n]
                        }),
                        even: c(function(t, e) {
                            for (var n = 0; e > n; n += 2)
                                t.push(n);
                            return t
                        }),
                        odd: c(function(t, e) {
                            for (var n = 1; e > n; n += 2)
                                t.push(n);
                            return t
                        }),
                        lt: c(function(t, e, n) {
                            for (var i = 0 > n ? n + e : n; --i >= 0; )
                                t.push(i);
                            return t
                        }),
                        gt: c(function(t, e, n) {
                            for (var i = 0 > n ? n + e : n; ++i < e; )
                                t.push(i);
                            return t
                        })
                    }
                },
                k.pseudos.nth = k.pseudos.eq;
            for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                k.pseudos[w] = a(w);
            for (w in {
                submit: !0,
                reset: !0
            })
                k.pseudos[w] = l(w);
            return d.prototype = k.filters = k.pseudos,
                k.setFilters = new d,
                _ = e.tokenize = function(t, n) {
                    var i, o, r, s, a, l, c, u = W[t + " "];
                    if (u)
                        return n ? 0 : u.slice(0);
                    for (a = t,
                             l = [],
                             c = k.preFilter; a; ) {
                        i && !(o = lt.exec(a)) || (o && (a = a.slice(o[0].length) || a),
                            l.push(r = [])),
                            i = !1,
                        (o = ct.exec(a)) && (i = o.shift(),
                            r.push({
                                value: i,
                                type: o[0].replace(at, " ")
                            }),
                            a = a.slice(i.length));
                        for (s in k.filter)
                            !(o = ht[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(),
                                r.push({
                                    value: i,
                                    type: s,
                                    matches: o
                                }),
                                a = a.slice(i.length));
                        if (!i)
                            break
                    }
                    return n ? a.length : a ? e.error(t) : W(t, l).slice(0)
                }
                ,
                S = e.compile = function(t, e) {
                    var n, i = [], o = [], r = U[t + " "];
                    if (!r) {
                        for (e || (e = _(t)),
                                 n = e.length; n--; )
                            r = y(e[n]),
                                r[H] ? i.push(r) : o.push(r);
                        r = U(t, b(o, i)),
                            r.selector = t
                    }
                    return r
                }
                ,
                $ = e.select = function(t, e, n, i) {
                    var o, r, s, a, l, c = "function" == typeof t && t, d = !i && _(t = c.selector || t);
                    if (n = n || [],
                    1 === d.length) {
                        if (r = d[0] = d[0].slice(0),
                        r.length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === e.nodeType && N && k.relative[r[1].type]) {
                            if (e = (k.find.ID(s.matches[0].replace(wt, xt), e) || [])[0],
                                !e)
                                return n;
                            c && (e = e.parentNode),
                                t = t.slice(r.shift().value.length)
                        }
                        for (o = ht.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o],
                            !k.relative[a = s.type]); )
                            if ((l = k.find[a]) && (i = l(s.matches[0].replace(wt, xt), yt.test(r[0].type) && u(e.parentNode) || e))) {
                                if (r.splice(o, 1),
                                    t = i.length && p(r),
                                    !t)
                                    return J.apply(n, i),
                                        n;
                                break
                            }
                    }
                    return (c || S(t, d))(i, e, !N, n, !e || yt.test(t) && u(e.parentNode) || e),
                        n
                }
                ,
                x.sortStable = H.split("").sort(V).join("") === H,
                x.detectDuplicates = !!I,
                j(),
                x.sortDetached = o(function(t) {
                    return 1 & t.compareDocumentPosition(D.createElement("div"))
                }),
            o(function(t) {
                return t.innerHTML = "<a href='#'></a>",
                "#" === t.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(t, e, n) {
                return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }),
            x.attributes && o(function(t) {
                return t.innerHTML = "<input/>",
                    t.firstChild.setAttribute("value", ""),
                "" === t.firstChild.getAttribute("value")
            }) || r("value", function(t, e, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }),
            o(function(t) {
                return null == t.getAttribute("disabled")
            }) || r(et, function(t, e, n) {
                var i;
                return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }),
                e
        }(t);
        ht.find = yt,
            ht.expr = yt.selectors,
            ht.expr[":"] = ht.expr.pseudos,
            ht.uniqueSort = ht.unique = yt.uniqueSort,
            ht.text = yt.getText,
            ht.isXMLDoc = yt.isXML,
            ht.contains = yt.contains;
        var bt = function(t, e, n) {
            for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
                if (1 === t.nodeType) {
                    if (o && ht(t).is(n))
                        break;
                    i.push(t)
                }
            return i
        }
            , wt = function(t, e) {
            for (var n = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && n.push(t);
            return n
        }
            , xt = ht.expr.match.needsContext
            , kt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
            , Ct = /^.[^:#\[\.,]*$/;
        ht.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"),
                1 === e.length && 1 === i.nodeType ? ht.find.matchesSelector(i, t) ? [i] : [] : ht.find.matches(t, ht.grep(e, function(t) {
                    return 1 === t.nodeType
                }))
        }
            ,
            ht.fn.extend({
                find: function(t) {
                    var e, n = [], i = this, o = i.length;
                    if ("string" != typeof t)
                        return this.pushStack(ht(t).filter(function() {
                            for (e = 0; o > e; e++)
                                if (ht.contains(i[e], this))
                                    return !0
                        }));
                    for (e = 0; o > e; e++)
                        ht.find(t, i[e], n);
                    return n = this.pushStack(o > 1 ? ht.unique(n) : n),
                        n.selector = this.selector ? this.selector + " " + t : t,
                        n
                },
                filter: function(t) {
                    return this.pushStack(i(this, t || [], !1))
                },
                not: function(t) {
                    return this.pushStack(i(this, t || [], !0))
                },
                is: function(t) {
                    return !!i(this, "string" == typeof t && xt.test(t) ? ht(t) : t || [], !1).length
                }
            });
        var Tt, _t = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, St = ht.fn.init = function(t, e, n) {
                var i, o;
                if (!t)
                    return this;
                if (n = n || Tt,
                "string" == typeof t) {
                    if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : _t.exec(t),
                    !i || !i[1] && e)
                        return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof ht ? e[0] : e,
                            ht.merge(this, ht.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : it, !0)),
                        kt.test(i[1]) && ht.isPlainObject(e))
                            for (i in e)
                                ht.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    if (o = it.getElementById(i[2]),
                    o && o.parentNode) {
                        if (o.id !== i[2])
                            return Tt.find(t);
                        this.length = 1,
                            this[0] = o
                    }
                    return this.context = it,
                        this.selector = t,
                        this
                }
                return t.nodeType ? (this.context = this[0] = t,
                    this.length = 1,
                    this) : ht.isFunction(t) ? "undefined" != typeof n.ready ? n.ready(t) : t(ht) : (void 0 !== t.selector && (this.selector = t.selector,
                    this.context = t.context),
                    ht.makeArray(t, this))
            }
        ;
        St.prototype = ht.fn,
            Tt = ht(it);
        var $t = /^(?:parents|prev(?:Until|All))/
            , Et = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        ht.fn.extend({
            has: function(t) {
                var e, n = ht(t, this), i = n.length;
                return this.filter(function() {
                    for (e = 0; i > e; e++)
                        if (ht.contains(this, n[e]))
                            return !0
                })
            },
            closest: function(t, e) {
                for (var n, i = 0, o = this.length, r = [], s = xt.test(t) || "string" != typeof t ? ht(t, e || this.context) : 0; o > i; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ht.find.matchesSelector(n, t))) {
                            r.push(n);
                            break
                        }
                return this.pushStack(r.length > 1 ? ht.uniqueSort(r) : r)
            },
            index: function(t) {
                return t ? "string" == typeof t ? ht.inArray(this[0], ht(t)) : ht.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(ht.uniqueSort(ht.merge(this.get(), ht(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }),
            ht.each({
                parent: function(t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null
                },
                parents: function(t) {
                    return bt(t, "parentNode")
                },
                parentsUntil: function(t, e, n) {
                    return bt(t, "parentNode", n)
                },
                next: function(t) {
                    return o(t, "nextSibling")
                },
                prev: function(t) {
                    return o(t, "previousSibling")
                },
                nextAll: function(t) {
                    return bt(t, "nextSibling")
                },
                prevAll: function(t) {
                    return bt(t, "previousSibling")
                },
                nextUntil: function(t, e, n) {
                    return bt(t, "nextSibling", n)
                },
                prevUntil: function(t, e, n) {
                    return bt(t, "previousSibling", n)
                },
                siblings: function(t) {
                    return wt((t.parentNode || {}).firstChild, t)
                },
                children: function(t) {
                    return wt(t.firstChild)
                },
                contents: function(t) {
                    return ht.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ht.merge([], t.childNodes)
                }
            }, function(t, e) {
                ht.fn[t] = function(n, i) {
                    var o = ht.map(this, e, n);
                    return "Until" !== t.slice(-5) && (i = n),
                    i && "string" == typeof i && (o = ht.filter(i, o)),
                    this.length > 1 && (Et[t] || (o = ht.uniqueSort(o)),
                    $t.test(t) && (o = o.reverse())),
                        this.pushStack(o)
                }
            });
        var At = /\S+/g;
        ht.Callbacks = function(t) {
            t = "string" == typeof t ? r(t) : ht.extend({}, t);
            var e, n, i, o, s = [], a = [], l = -1, c = function() {
                for (o = t.once,
                         i = e = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < s.length; )
                        s[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = s.length,
                            n = !1);
                t.memory || (n = !1),
                    e = !1,
                o && (s = n ? [] : "")
            }, u = {
                add: function() {
                    return s && (n && !e && (l = s.length - 1,
                        a.push(n)),
                        function i(e) {
                            ht.each(e, function(e, n) {
                                ht.isFunction(n) ? t.unique && u.has(n) || s.push(n) : n && n.length && "string" !== ht.type(n) && i(n)
                            })
                        }(arguments),
                    n && !e && c()),
                        this
                },
                remove: function() {
                    return ht.each(arguments, function(t, e) {
                        for (var n; (n = ht.inArray(e, s, n)) > -1; )
                            s.splice(n, 1),
                            l >= n && l--
                    }),
                        this
                },
                has: function(t) {
                    return t ? ht.inArray(t, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []),
                        this
                },
                disable: function() {
                    return o = a = [],
                        s = n = "",
                        this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return o = !0,
                    n || u.disable(),
                        this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(t, n) {
                    return o || (n = n || [],
                        n = [t, n.slice ? n.slice() : n],
                        a.push(n),
                    e || c()),
                        this
                },
                fire: function() {
                    return u.fireWith(this, arguments),
                        this
                },
                fired: function() {
                    return !!i
                }
            };
            return u
        }
            ,
            ht.extend({
                Deferred: function(t) {
                    var e = [["resolve", "done", ht.Callbacks("once memory"), "resolved"], ["reject", "fail", ht.Callbacks("once memory"), "rejected"], ["notify", "progress", ht.Callbacks("memory")]]
                        , n = "pending"
                        , i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments),
                                this
                        },
                        then: function() {
                            var t = arguments;
                            return ht.Deferred(function(n) {
                                ht.each(e, function(e, r) {
                                    var s = ht.isFunction(t[e]) && t[e];
                                    o[r[1]](function() {
                                        var t = s && s.apply(this, arguments);
                                        t && ht.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                    })
                                }),
                                    t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? ht.extend(t, i) : i
                        }
                    }
                        , o = {};
                    return i.pipe = i.then,
                        ht.each(e, function(t, r) {
                            var s = r[2]
                                , a = r[3];
                            i[r[1]] = s.add,
                            a && s.add(function() {
                                n = a
                            }, e[1 ^ t][2].disable, e[2][2].lock),
                                o[r[0]] = function() {
                                    return o[r[0] + "With"](this === o ? i : this, arguments),
                                        this
                                }
                                ,
                                o[r[0] + "With"] = s.fireWith
                        }),
                        i.promise(o),
                    t && t.call(o, o),
                        o
                },
                when: function(t) {
                    var e, n, i, o = 0, r = ot.call(arguments), s = r.length, a = 1 !== s || t && ht.isFunction(t.promise) ? s : 0, l = 1 === a ? t : ht.Deferred(), c = function(t, n, i) {
                        return function(o) {
                            n[t] = this,
                                i[t] = arguments.length > 1 ? ot.call(arguments) : o,
                                i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                    if (s > 1)
                        for (e = new Array(s),
                                 n = new Array(s),
                                 i = new Array(s); s > o; o++)
                            r[o] && ht.isFunction(r[o].promise) ? r[o].promise().progress(c(o, n, e)).done(c(o, i, r)).fail(l.reject) : --a;
                    return a || l.resolveWith(i, r),
                        l.promise()
                }
            });
        var It;
        ht.fn.ready = function(t) {
            return ht.ready.promise().done(t),
                this
        }
            ,
            ht.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(t) {
                    t ? ht.readyWait++ : ht.ready(!0)
                },
                ready: function(t) {
                    (t === !0 ? --ht.readyWait : ht.isReady) || (ht.isReady = !0,
                    t !== !0 && --ht.readyWait > 0 || (It.resolveWith(it, [ht]),
                    ht.fn.triggerHandler && (ht(it).triggerHandler("ready"),
                        ht(it).off("ready"))))
                }
            }),
            ht.ready.promise = function(e) {
                if (!It)
                    if (It = ht.Deferred(),
                    "complete" === it.readyState || "loading" !== it.readyState && !it.documentElement.doScroll)
                        t.setTimeout(ht.ready);
                    else if (it.addEventListener)
                        it.addEventListener("DOMContentLoaded", a),
                            t.addEventListener("load", a);
                    else {
                        it.attachEvent("onreadystatechange", a),
                            t.attachEvent("onload", a);
                        var n = !1;
                        try {
                            n = null == t.frameElement && it.documentElement
                        } catch (i) {}
                        n && n.doScroll && !function o() {
                            if (!ht.isReady) {
                                try {
                                    n.doScroll("left")
                                } catch (e) {
                                    return t.setTimeout(o, 50)
                                }
                                s(),
                                    ht.ready()
                            }
                        }()
                    }
                return It.promise(e)
            }
            ,
            ht.ready.promise();
        var jt;
        for (jt in ht(dt))
            break;
        dt.ownFirst = "0" === jt,
            dt.inlineBlockNeedsLayout = !1,
            ht(function() {
                var t, e, n, i;
                n = it.getElementsByTagName("body")[0],
                n && n.style && (e = it.createElement("div"),
                    i = it.createElement("div"),
                    i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                    n.appendChild(i).appendChild(e),
                "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
                    dt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth,
                t && (n.style.zoom = 1)),
                    n.removeChild(i))
            }),
            function() {
                var t = it.createElement("div");
                dt.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    dt.deleteExpando = !1
                }
                t = null
            }();
        var Dt = function(t) {
            var e = ht.noData[(t.nodeName + " ").toLowerCase()]
                , n = +t.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
        }
            , Mt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
            , Nt = /([A-Z])/g;
        ht.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(t) {
                return t = t.nodeType ? ht.cache[t[ht.expando]] : t[ht.expando],
                !!t && !c(t)
            },
            data: function(t, e, n) {
                return u(t, e, n)
            },
            removeData: function(t, e) {
                return d(t, e)
            },
            _data: function(t, e, n) {
                return u(t, e, n, !0)
            },
            _removeData: function(t, e) {
                return d(t, e, !0)
            }
        }),
            ht.fn.extend({
                data: function(t, e) {
                    var n, i, o, r = this[0], s = r && r.attributes;
                    if (void 0 === t) {
                        if (this.length && (o = ht.data(r),
                        1 === r.nodeType && !ht._data(r, "parsedAttrs"))) {
                            for (n = s.length; n--; )
                                s[n] && (i = s[n].name,
                                0 === i.indexOf("data-") && (i = ht.camelCase(i.slice(5)),
                                    l(r, i, o[i])));
                            ht._data(r, "parsedAttrs", !0)
                        }
                        return o
                    }
                    return "object" == typeof t ? this.each(function() {
                        ht.data(this, t)
                    }) : arguments.length > 1 ? this.each(function() {
                        ht.data(this, t, e)
                    }) : r ? l(r, t, ht.data(r, t)) : void 0
                },
                removeData: function(t) {
                    return this.each(function() {
                        ht.removeData(this, t)
                    })
                }
            }),
            ht.extend({
                queue: function(t, e, n) {
                    var i;
                    return t ? (e = (e || "fx") + "queue",
                        i = ht._data(t, e),
                    n && (!i || ht.isArray(n) ? i = ht._data(t, e, ht.makeArray(n)) : i.push(n)),
                    i || []) : void 0
                },
                dequeue: function(t, e) {
                    e = e || "fx";
                    var n = ht.queue(t, e)
                        , i = n.length
                        , o = n.shift()
                        , r = ht._queueHooks(t, e)
                        , s = function() {
                        ht.dequeue(t, e)
                    };
                    "inprogress" === o && (o = n.shift(),
                        i--),
                    o && ("fx" === e && n.unshift("inprogress"),
                        delete r.stop,
                        o.call(t, s, r)),
                    !i && r && r.empty.fire()
                },
                _queueHooks: function(t, e) {
                    var n = e + "queueHooks";
                    return ht._data(t, n) || ht._data(t, n, {
                        empty: ht.Callbacks("once memory").add(function() {
                            ht._removeData(t, e + "queue"),
                                ht._removeData(t, n)
                        })
                    })
                }
            }),
            ht.fn.extend({
                queue: function(t, e) {
                    var n = 2;
                    return "string" != typeof t && (e = t,
                        t = "fx",
                        n--),
                        arguments.length < n ? ht.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                            var n = ht.queue(this, t, e);
                            ht._queueHooks(this, t),
                            "fx" === t && "inprogress" !== n[0] && ht.dequeue(this, t)
                        })
                },
                dequeue: function(t) {
                    return this.each(function() {
                        ht.dequeue(this, t)
                    })
                },
                clearQueue: function(t) {
                    return this.queue(t || "fx", [])
                },
                promise: function(t, e) {
                    var n, i = 1, o = ht.Deferred(), r = this, s = this.length, a = function() {
                        --i || o.resolveWith(r, [r])
                    };
                    for ("string" != typeof t && (e = t,
                        t = void 0),
                             t = t || "fx"; s--; )
                        n = ht._data(r[s], t + "queueHooks"),
                        n && n.empty && (i++,
                            n.empty.add(a));
                    return a(),
                        o.promise(e)
                }
            }),
            function() {
                var t;
                dt.shrinkWrapBlocks = function() {
                    if (null != t)
                        return t;
                    t = !1;
                    var e, n, i;
                    return n = it.getElementsByTagName("body")[0],
                        n && n.style ? (e = it.createElement("div"),
                            i = it.createElement("div"),
                            i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                            n.appendChild(i).appendChild(e),
                        "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                            e.appendChild(it.createElement("div")).style.width = "5px",
                            t = 3 !== e.offsetWidth),
                            n.removeChild(i),
                            t) : void 0
                }
            }();
        var Ft = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
            , Pt = new RegExp("^(?:([+-])=|)(" + Ft + ")([a-z%]*)$","i")
            , Ot = ["Top", "Right", "Bottom", "Left"]
            , Lt = function(t, e) {
            return t = e || t,
            "none" === ht.css(t, "display") || !ht.contains(t.ownerDocument, t)
        }
            , Ht = function(t, e, n, i, o, r, s) {
            var a = 0
                , l = t.length
                , c = null == n;
            if ("object" === ht.type(n)) {
                o = !0;
                for (a in n)
                    Ht(t, e, a, n[a], !0, r, s)
            } else if (void 0 !== i && (o = !0,
            ht.isFunction(i) || (s = !0),
            c && (s ? (e.call(t, i),
                e = null) : (c = e,
                    e = function(t, e, n) {
                        return c.call(ht(t), n)
                    }
            )),
                e))
                for (; l > a; a++)
                    e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return o ? t : c ? e.call(t) : l ? e(t[0], n) : r
        }
            , qt = /^(?:checkbox|radio)$/i
            , zt = /<([\w:-]+)/
            , Rt = /^$|\/(?:java|ecma)script/i
            , Bt = /^\s+/
            , Wt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        !function() {
            var t = it.createElement("div")
                , e = it.createDocumentFragment()
                , n = it.createElement("input");
            t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                dt.leadingWhitespace = 3 === t.firstChild.nodeType,
                dt.tbody = !t.getElementsByTagName("tbody").length,
                dt.htmlSerialize = !!t.getElementsByTagName("link").length,
                dt.html5Clone = "<:nav></:nav>" !== it.createElement("nav").cloneNode(!0).outerHTML,
                n.type = "checkbox",
                n.checked = !0,
                e.appendChild(n),
                dt.appendChecked = n.checked,
                t.innerHTML = "<textarea>x</textarea>",
                dt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue,
                e.appendChild(t),
                n = it.createElement("input"),
                n.setAttribute("type", "radio"),
                n.setAttribute("checked", "checked"),
                n.setAttribute("name", "t"),
                t.appendChild(n),
                dt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
                dt.noCloneEvent = !!t.addEventListener,
                t[ht.expando] = 1,
                dt.attributes = !t.getAttribute(ht.expando)
        }();
        var Ut = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: dt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        };
        Ut.optgroup = Ut.option,
            Ut.tbody = Ut.tfoot = Ut.colgroup = Ut.caption = Ut.thead,
            Ut.th = Ut.td;
        var Vt = /<|&#?\w+;/
            , Gt = /<tbody/i;
        !function() {
            var e, n, i = it.createElement("div");
            for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            })
                n = "on" + e,
                (dt[e] = n in t) || (i.setAttribute(n, "t"),
                    dt[e] = i.attributes[n].expando === !1);
            i = null
        }();
        var Qt = /^(?:input|select|textarea)$/i
            , Xt = /^key/
            , Yt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
            , Kt = /^(?:focusinfocus|focusoutblur)$/
            , Jt = /^([^.]*)(?:\.(.+)|)/;
        ht.event = {
            global: {},
            add: function(t, e, n, i, o) {
                var r, s, a, l, c, u, d, p, h, f, m, v = ht._data(t);
                if (v) {
                    for (n.handler && (l = n,
                        n = l.handler,
                        o = l.selector),
                         n.guid || (n.guid = ht.guid++),
                         (s = v.events) || (s = v.events = {}),
                         (u = v.handle) || (u = v.handle = function(t) {
                             return "undefined" == typeof ht || t && ht.event.triggered === t.type ? void 0 : ht.event.dispatch.apply(u.elem, arguments)
                         }
                             ,
                             u.elem = t),
                             e = (e || "").match(At) || [""],
                             a = e.length; a--; )
                        r = Jt.exec(e[a]) || [],
                            h = m = r[1],
                            f = (r[2] || "").split(".").sort(),
                        h && (c = ht.event.special[h] || {},
                            h = (o ? c.delegateType : c.bindType) || h,
                            c = ht.event.special[h] || {},
                            d = ht.extend({
                                type: h,
                                origType: m,
                                data: i,
                                handler: n,
                                guid: n.guid,
                                selector: o,
                                needsContext: o && ht.expr.match.needsContext.test(o),
                                namespace: f.join(".")
                            }, l),
                        (p = s[h]) || (p = s[h] = [],
                            p.delegateCount = 0,
                        c.setup && c.setup.call(t, i, f, u) !== !1 || (t.addEventListener ? t.addEventListener(h, u, !1) : t.attachEvent && t.attachEvent("on" + h, u))),
                        c.add && (c.add.call(t, d),
                        d.handler.guid || (d.handler.guid = n.guid)),
                            o ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                            ht.event.global[h] = !0);
                    t = null
                }
            },
            remove: function(t, e, n, i, o) {
                var r, s, a, l, c, u, d, p, h, f, m, v = ht.hasData(t) && ht._data(t);
                if (v && (u = v.events)) {
                    for (e = (e || "").match(At) || [""],
                             c = e.length; c--; )
                        if (a = Jt.exec(e[c]) || [],
                            h = m = a[1],
                            f = (a[2] || "").split(".").sort(),
                            h) {
                            for (d = ht.event.special[h] || {},
                                     h = (i ? d.delegateType : d.bindType) || h,
                                     p = u[h] || [],
                                     a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                     l = r = p.length; r--; )
                                s = p[r],
                                !o && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (p.splice(r, 1),
                                s.selector && p.delegateCount--,
                                d.remove && d.remove.call(t, s));
                            l && !p.length && (d.teardown && d.teardown.call(t, f, v.handle) !== !1 || ht.removeEvent(t, h, v.handle),
                                delete u[h])
                        } else
                            for (h in u)
                                ht.event.remove(t, h + e[c], n, i, !0);
                    ht.isEmptyObject(u) && (delete v.handle,
                        ht._removeData(t, "events"))
                }
            },
            trigger: function(e, n, i, o) {
                var r, s, a, l, c, u, d, p = [i || it], h = ut.call(e, "type") ? e.type : e, f = ut.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = u = i = i || it,
                3 !== i.nodeType && 8 !== i.nodeType && !Kt.test(h + ht.event.triggered) && (h.indexOf(".") > -1 && (f = h.split("."),
                    h = f.shift(),
                    f.sort()),
                    s = h.indexOf(":") < 0 && "on" + h,
                    e = e[ht.expando] ? e : new ht.Event(h,"object" == typeof e && e),
                    e.isTrigger = o ? 2 : 3,
                    e.namespace = f.join("."),
                    e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    e.result = void 0,
                e.target || (e.target = i),
                    n = null == n ? [e] : ht.makeArray(n, [e]),
                    c = ht.event.special[h] || {},
                o || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                    if (!o && !c.noBubble && !ht.isWindow(i)) {
                        for (l = c.delegateType || h,
                             Kt.test(l + h) || (a = a.parentNode); a; a = a.parentNode)
                            p.push(a),
                                u = a;
                        u === (i.ownerDocument || it) && p.push(u.defaultView || u.parentWindow || t)
                    }
                    for (d = 0; (a = p[d++]) && !e.isPropagationStopped(); )
                        e.type = d > 1 ? l : c.bindType || h,
                            r = (ht._data(a, "events") || {})[e.type] && ht._data(a, "handle"),
                        r && r.apply(a, n),
                            r = s && a[s],
                        r && r.apply && Dt(a) && (e.result = r.apply(a, n),
                        e.result === !1 && e.preventDefault());
                    if (e.type = h,
                    !o && !e.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), n) === !1) && Dt(i) && s && i[h] && !ht.isWindow(i)) {
                        u = i[s],
                        u && (i[s] = null),
                            ht.event.triggered = h;
                        try {
                            i[h]()
                        } catch (m) {}
                        ht.event.triggered = void 0,
                        u && (i[s] = u)
                    }
                    return e.result
                }
            },
            dispatch: function(t) {
                t = ht.event.fix(t);
                var e, n, i, o, r, s = [], a = ot.call(arguments), l = (ht._data(this, "events") || {})[t.type] || [], c = ht.event.special[t.type] || {};
                if (a[0] = t,
                    t.delegateTarget = this,
                !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (s = ht.event.handlers.call(this, t, l),
                             e = 0; (o = s[e++]) && !t.isPropagationStopped(); )
                        for (t.currentTarget = o.elem,
                                 n = 0; (r = o.handlers[n++]) && !t.isImmediatePropagationStopped(); )
                            t.rnamespace && !t.rnamespace.test(r.namespace) || (t.handleObj = r,
                                t.data = r.data,
                                i = ((ht.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a),
                            void 0 !== i && (t.result = i) === !1 && (t.preventDefault(),
                                t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t),
                        t.result
                }
            },
            handlers: function(t, e) {
                var n, i, o, r, s = [], a = e.delegateCount, l = t.target;
                if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                            for (i = [],
                                     n = 0; a > n; n++)
                                r = e[n],
                                    o = r.selector + " ",
                                void 0 === i[o] && (i[o] = r.needsContext ? ht(o, this).index(l) > -1 : ht.find(o, this, null, [l]).length),
                                i[o] && i.push(r);
                            i.length && s.push({
                                elem: l,
                                handlers: i
                            })
                        }
                return a < e.length && s.push({
                    elem: this,
                    handlers: e.slice(a)
                }),
                    s
            },
            fix: function(t) {
                if (t[ht.expando])
                    return t;
                var e, n, i, o = t.type, r = t, s = this.fixHooks[o];
                for (s || (this.fixHooks[o] = s = Yt.test(o) ? this.mouseHooks : Xt.test(o) ? this.keyHooks : {}),
                         i = s.props ? this.props.concat(s.props) : this.props,
                         t = new ht.Event(r),
                         e = i.length; e--; )
                    n = i[e],
                        t[n] = r[n];
                return t.target || (t.target = r.srcElement || it),
                3 === t.target.nodeType && (t.target = t.target.parentNode),
                    t.metaKey = !!t.metaKey,
                    s.filter ? s.filter(t, r) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode),
                        t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var n, i, o, r = e.button, s = e.fromElement;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || it,
                        o = i.documentElement,
                        n = i.body,
                        t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0),
                        t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)),
                    !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s),
                    t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                        t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== w() && this.focus)
                            try {
                                return this.focus(),
                                    !1
                            } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === w() && this.blur ? (this.blur(),
                            !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return ht.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                            !1) : void 0
                    },
                    _default: function(t) {
                        return ht.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, n) {
                var i = ht.extend(new ht.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                ht.event.trigger(i, null, e),
                i.isDefaultPrevented() && n.preventDefault()
            }
        },
            ht.removeEvent = it.removeEventListener ? function(t, e, n) {
                    t.removeEventListener && t.removeEventListener(e, n)
                }
                : function(t, e, n) {
                    var i = "on" + e;
                    t.detachEvent && ("undefined" == typeof t[i] && (t[i] = null),
                        t.detachEvent(i, n))
                }
            ,
            ht.Event = function(t, e) {
                return this instanceof ht.Event ? (t && t.type ? (this.originalEvent = t,
                    this.type = t.type,
                    this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? y : b) : this.type = t,
                e && ht.extend(this, e),
                    this.timeStamp = t && t.timeStamp || ht.now(),
                    void (this[ht.expando] = !0)) : new ht.Event(t,e)
            }
            ,
            ht.Event.prototype = {
                constructor: ht.Event,
                isDefaultPrevented: b,
                isPropagationStopped: b,
                isImmediatePropagationStopped: b,
                preventDefault: function() {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = y,
                    t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
                },
                stopPropagation: function() {
                    var t = this.originalEvent;
                    this.isPropagationStopped = y,
                    t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(),
                        t.cancelBubble = !0)
                },
                stopImmediatePropagation: function() {
                    var t = this.originalEvent;
                    this.isImmediatePropagationStopped = y,
                    t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
                        this.stopPropagation()
                }
            },
            ht.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(t, e) {
                ht.event.special[t] = {
                    delegateType: e,
                    bindType: e,
                    handle: function(t) {
                        var n, i = this, o = t.relatedTarget, r = t.handleObj;
                        return o && (o === i || ht.contains(i, o)) || (t.type = r.origType,
                            n = r.handler.apply(this, arguments),
                            t.type = e),
                            n
                    }
                }
            }),
        dt.submit || (ht.event.special.submit = {
            setup: function() {
                return ht.nodeName(this, "form") ? !1 : void ht.event.add(this, "click._submit keypress._submit", function(t) {
                    var e = t.target
                        , n = ht.nodeName(e, "input") || ht.nodeName(e, "button") ? ht.prop(e, "form") : void 0;
                    n && !ht._data(n, "submit") && (ht.event.add(n, "submit._submit", function(t) {
                        t._submitBubble = !0
                    }),
                        ht._data(n, "submit", !0))
                })
            },
            postDispatch: function(t) {
                t._submitBubble && (delete t._submitBubble,
                this.parentNode && !t.isTrigger && ht.event.simulate("submit", this.parentNode, t))
            },
            teardown: function() {
                return ht.nodeName(this, "form") ? !1 : void ht.event.remove(this, "._submit")
            }
        }),
        dt.change || (ht.event.special.change = {
            setup: function() {
                return Qt.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ht.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
                }),
                    ht.event.add(this, "click._change", function(t) {
                        this._justChanged && !t.isTrigger && (this._justChanged = !1),
                            ht.event.simulate("change", this, t)
                    })),
                    !1) : void ht.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    Qt.test(e.nodeName) && !ht._data(e, "change") && (ht.event.add(e, "change._change", function(t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || ht.event.simulate("change", this.parentNode, t)
                    }),
                        ht._data(e, "change", !0))
                })
            },
            handle: function(t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return ht.event.remove(this, "._change"),
                    !Qt.test(this.nodeName)
            }
        }),
        dt.focusin || ht.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                ht.event.simulate(e, t.target, ht.event.fix(t))
            };
            ht.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this
                        , o = ht._data(i, e);
                    o || i.addEventListener(t, n, !0),
                        ht._data(i, e, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this
                        , o = ht._data(i, e) - 1;
                    o ? ht._data(i, e, o) : (i.removeEventListener(t, n, !0),
                        ht._removeData(i, e))
                }
            }
        }),
            ht.fn.extend({
                on: function(t, e, n, i) {
                    return x(this, t, e, n, i)
                },
                one: function(t, e, n, i) {
                    return x(this, t, e, n, i, 1)
                },
                off: function(t, e, n) {
                    var i, o;
                    if (t && t.preventDefault && t.handleObj)
                        return i = t.handleObj,
                            ht(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                            this;
                    if ("object" == typeof t) {
                        for (o in t)
                            this.off(o, e, t[o]);
                        return this
                    }
                    return e !== !1 && "function" != typeof e || (n = e,
                        e = void 0),
                    n === !1 && (n = b),
                        this.each(function() {
                            ht.event.remove(this, t, n, e)
                        })
                },
                trigger: function(t, e) {
                    return this.each(function() {
                        ht.event.trigger(t, e, this)
                    })
                },
                triggerHandler: function(t, e) {
                    var n = this[0];
                    return n ? ht.event.trigger(t, e, n, !0) : void 0
                }
            });
        var Zt = / jQuery\d+="(?:null|\d+)"/g
            , te = new RegExp("<(?:" + Wt + ")[\\s/>]","i")
            , ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
            , ne = /<script|<style|<link/i
            , ie = /checked\s*(?:[^=]|=\s*.checked.)/i
            , oe = /^true\/(.*)/
            , re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
            , se = h(it)
            , ae = se.appendChild(it.createElement("div"));
        ht.extend({
            htmlPrefilter: function(t) {
                return t.replace(ee, "<$1></$2>")
            },
            clone: function(t, e, n) {
                var i, o, r, s, a, l = ht.contains(t.ownerDocument, t);
                if (dt.html5Clone || ht.isXMLDoc(t) || !te.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (ae.innerHTML = t.outerHTML,
                    ae.removeChild(r = ae.firstChild)),
                    !(dt.noCloneEvent && dt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ht.isXMLDoc(t)))
                    for (i = f(r),
                             a = f(t),
                             s = 0; null != (o = a[s]); ++s)
                        i[s] && S(o, i[s]);
                if (e)
                    if (n)
                        for (a = a || f(t),
                                 i = i || f(r),
                                 s = 0; null != (o = a[s]); s++)
                            _(o, i[s]);
                    else
                        _(t, r);
                return i = f(r, "script"),
                i.length > 0 && m(i, !l && f(t, "script")),
                    i = a = o = null,
                    r
            },
            cleanData: function(t, e) {
                for (var n, i, o, r, s = 0, a = ht.expando, l = ht.cache, c = dt.attributes, u = ht.event.special; null != (n = t[s]); s++)
                    if ((e || Dt(n)) && (o = n[a],
                        r = o && l[o])) {
                        if (r.events)
                            for (i in r.events)
                                u[i] ? ht.event.remove(n, i) : ht.removeEvent(n, i, r.handle);
                        l[o] && (delete l[o],
                            c || "undefined" == typeof n.removeAttribute ? n[a] = void 0 : n.removeAttribute(a),
                            nt.push(o))
                    }
            }
        }),
            ht.fn.extend({
                domManip: $,
                detach: function(t) {
                    return E(this, t, !0)
                },
                remove: function(t) {
                    return E(this, t)
                },
                text: function(t) {
                    return Ht(this, function(t) {
                        return void 0 === t ? ht.text(this) : this.empty().append((this[0] && this[0].ownerDocument || it).createTextNode(t))
                    }, null, t, arguments.length)
                },
                append: function() {
                    return $(this, arguments, function(t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = k(this, t);
                            e.appendChild(t)
                        }
                    })
                },
                prepend: function() {
                    return $(this, arguments, function(t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = k(this, t);
                            e.insertBefore(t, e.firstChild)
                        }
                    })
                },
                before: function() {
                    return $(this, arguments, function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this)
                    })
                },
                after: function() {
                    return $(this, arguments, function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var t, e = 0; null != (t = this[e]); e++) {
                        for (1 === t.nodeType && ht.cleanData(f(t, !1)); t.firstChild; )
                            t.removeChild(t.firstChild);
                        t.options && ht.nodeName(t, "select") && (t.options.length = 0)
                    }
                    return this
                },
                clone: function(t, e) {
                    return t = null == t ? !1 : t,
                        e = null == e ? t : e,
                        this.map(function() {
                            return ht.clone(this, t, e)
                        })
                },
                html: function(t) {
                    return Ht(this, function(t) {
                        var e = this[0] || {}
                            , n = 0
                            , i = this.length;
                        if (void 0 === t)
                            return 1 === e.nodeType ? e.innerHTML.replace(Zt, "") : void 0;
                        if ("string" == typeof t && !ne.test(t) && (dt.htmlSerialize || !te.test(t)) && (dt.leadingWhitespace || !Bt.test(t)) && !Ut[(zt.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = ht.htmlPrefilter(t);
                            try {
                                for (; i > n; n++)
                                    e = this[n] || {},
                                    1 === e.nodeType && (ht.cleanData(f(e, !1)),
                                        e.innerHTML = t);
                                e = 0
                            } catch (o) {}
                        }
                        e && this.empty().append(t)
                    }, null, t, arguments.length)
                },
                replaceWith: function() {
                    var t = [];
                    return $(this, arguments, function(e) {
                        var n = this.parentNode;
                        ht.inArray(this, t) < 0 && (ht.cleanData(f(this)),
                        n && n.replaceChild(e, this))
                    }, t)
                }
            }),
            ht.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(t, e) {
                ht.fn[t] = function(t) {
                    for (var n, i = 0, o = [], r = ht(t), s = r.length - 1; s >= i; i++)
                        n = i === s ? this : this.clone(!0),
                            ht(r[i])[e](n),
                            st.apply(o, n.get());
                    return this.pushStack(o)
                }
            });
        var le, ce = {
            HTML: "block",
            BODY: "block"
        }, ue = /^margin/, de = new RegExp("^(" + Ft + ")(?!px)[a-z%]+$","i"), pe = function(t, e, n, i) {
            var o, r, s = {};
            for (r in e)
                s[r] = t.style[r],
                    t.style[r] = e[r];
            o = n.apply(t, i || []);
            for (r in e)
                t.style[r] = s[r];
            return o
        }, he = it.documentElement;
        !function() {
            function e() {
                var e, u, d = it.documentElement;
                d.appendChild(l),
                    c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                    n = o = a = !1,
                    i = s = !0,
                t.getComputedStyle && (u = t.getComputedStyle(c),
                    n = "1%" !== (u || {}).top,
                    a = "2px" === (u || {}).marginLeft,
                    o = "4px" === (u || {
                        width: "4px"
                    }).width,
                    c.style.marginRight = "50%",
                    i = "4px" === (u || {
                        marginRight: "4px"
                    }).marginRight,
                    e = c.appendChild(it.createElement("div")),
                    e.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                    e.style.marginRight = e.style.width = "0",
                    c.style.width = "1px",
                    s = !parseFloat((t.getComputedStyle(e) || {}).marginRight),
                    c.removeChild(e)),
                    c.style.display = "none",
                    r = 0 === c.getClientRects().length,
                r && (c.style.display = "",
                    c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                    c.childNodes[0].style.borderCollapse = "separate",
                    e = c.getElementsByTagName("td"),
                    e[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                    r = 0 === e[0].offsetHeight,
                r && (e[0].style.display = "",
                    e[1].style.display = "none",
                    r = 0 === e[0].offsetHeight)),
                    d.removeChild(l)
            }
            var n, i, o, r, s, a, l = it.createElement("div"), c = it.createElement("div");
            c.style && (c.style.cssText = "float:left;opacity:.5",
                dt.opacity = "0.5" === c.style.opacity,
                dt.cssFloat = !!c.style.cssFloat,
                c.style.backgroundClip = "content-box",
                c.cloneNode(!0).style.backgroundClip = "",
                dt.clearCloneStyle = "content-box" === c.style.backgroundClip,
                l = it.createElement("div"),
                l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
                c.innerHTML = "",
                l.appendChild(c),
                dt.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing,
                ht.extend(dt, {
                    reliableHiddenOffsets: function() {
                        return null == n && e(),
                            r
                    },
                    boxSizingReliable: function() {
                        return null == n && e(),
                            o
                    },
                    pixelMarginRight: function() {
                        return null == n && e(),
                            i
                    },
                    pixelPosition: function() {
                        return null == n && e(),
                            n
                    },
                    reliableMarginRight: function() {
                        return null == n && e(),
                            s
                    },
                    reliableMarginLeft: function() {
                        return null == n && e(),
                            a
                    }
                }))
        }();
        var fe, me, ve = /^(top|right|bottom|left)$/;
        t.getComputedStyle ? (fe = function(e) {
                var n = e.ownerDocument.defaultView;
                return n && n.opener || (n = t),
                    n.getComputedStyle(e)
            }
                ,
                me = function(t, e, n) {
                    var i, o, r, s, a = t.style;
                    return n = n || fe(t),
                        s = n ? n.getPropertyValue(e) || n[e] : void 0,
                    "" !== s && void 0 !== s || ht.contains(t.ownerDocument, t) || (s = ht.style(t, e)),
                    n && !dt.pixelMarginRight() && de.test(s) && ue.test(e) && (i = a.width,
                        o = a.minWidth,
                        r = a.maxWidth,
                        a.minWidth = a.maxWidth = a.width = s,
                        s = n.width,
                        a.width = i,
                        a.minWidth = o,
                        a.maxWidth = r),
                        void 0 === s ? s : s + ""
                }
        ) : he.currentStyle && (fe = function(t) {
                return t.currentStyle
            }
                ,
                me = function(t, e, n) {
                    var i, o, r, s, a = t.style;
                    return n = n || fe(t),
                        s = n ? n[e] : void 0,
                    null == s && a && a[e] && (s = a[e]),
                    de.test(s) && !ve.test(e) && (i = a.left,
                        o = t.runtimeStyle,
                        r = o && o.left,
                    r && (o.left = t.currentStyle.left),
                        a.left = "fontSize" === e ? "1em" : s,
                        s = a.pixelLeft + "px",
                        a.left = i,
                    r && (o.left = r)),
                        void 0 === s ? s : s + "" || "auto"
                }
        );
        var ge = /alpha\([^)]*\)/i
            , ye = /opacity\s*=\s*([^)]*)/i
            , be = /^(none|table(?!-c[ea]).+)/
            , we = new RegExp("^(" + Ft + ")(.*)$","i")
            , xe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
            , ke = {
            letterSpacing: "0",
            fontWeight: "400"
        }
            , Ce = ["Webkit", "O", "Moz", "ms"]
            , Te = it.createElement("div").style;
        ht.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = me(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": dt.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, s, a = ht.camelCase(e), l = t.style;
                    if (e = ht.cssProps[a] || (ht.cssProps[a] = D(a) || a),
                        s = ht.cssHooks[e] || ht.cssHooks[a],
                    void 0 === n)
                        return s && "get"in s && void 0 !== (o = s.get(t, !1, i)) ? o : l[e];
                    if (r = typeof n,
                    "string" === r && (o = Pt.exec(n)) && o[1] && (n = p(t, e, o),
                        r = "number"),
                    null != n && n === n && ("number" === r && (n += o && o[3] || (ht.cssNumber[a] ? "" : "px")),
                    dt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"),
                        !(s && "set"in s && void 0 === (n = s.set(t, n, i)))))
                        try {
                            l[e] = n
                        } catch (c) {}
                }
            },
            css: function(t, e, n, i) {
                var o, r, s, a = ht.camelCase(e);
                return e = ht.cssProps[a] || (ht.cssProps[a] = D(a) || a),
                    s = ht.cssHooks[e] || ht.cssHooks[a],
                s && "get"in s && (r = s.get(t, !0, n)),
                void 0 === r && (r = me(t, e, i)),
                "normal" === r && e in ke && (r = ke[e]),
                    "" === n || n ? (o = parseFloat(r),
                        n === !0 || isFinite(o) ? o || 0 : r) : r
            }
        }),
            ht.each(["height", "width"], function(t, e) {
                ht.cssHooks[e] = {
                    get: function(t, n, i) {
                        return n ? be.test(ht.css(t, "display")) && 0 === t.offsetWidth ? pe(t, xe, function() {
                            return P(t, e, i)
                        }) : P(t, e, i) : void 0
                    },
                    set: function(t, n, i) {
                        var o = i && fe(t);
                        return N(t, n, i ? F(t, e, i, dt.boxSizing && "border-box" === ht.css(t, "boxSizing", !1, o), o) : 0)
                    }
                }
            }),
        dt.opacity || (ht.cssHooks.opacity = {
            get: function(t, e) {
                return ye.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function(t, e) {
                var n = t.style
                    , i = t.currentStyle
                    , o = ht.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : ""
                    , r = i && i.filter || n.filter || "";
                n.zoom = 1,
                (e >= 1 || "" === e) && "" === ht.trim(r.replace(ge, "")) && n.removeAttribute && (n.removeAttribute("filter"),
                "" === e || i && !i.filter) || (n.filter = ge.test(r) ? r.replace(ge, o) : r + " " + o)
            }
        }),
            ht.cssHooks.marginRight = j(dt.reliableMarginRight, function(t, e) {
                return e ? pe(t, {
                    display: "inline-block"
                }, me, [t, "marginRight"]) : void 0
            }),
            ht.cssHooks.marginLeft = j(dt.reliableMarginLeft, function(t, e) {
                return e ? (parseFloat(me(t, "marginLeft")) || (ht.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - pe(t, {
                    marginLeft: 0
                }, function() {
                    return t.getBoundingClientRect().left
                }) : 0)) + "px" : void 0
            }),
            ht.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(t, e) {
                ht.cssHooks[t + e] = {
                    expand: function(n) {
                        for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                            o[t + Ot[i] + e] = r[i] || r[i - 2] || r[0];
                        return o
                    }
                },
                ue.test(t) || (ht.cssHooks[t + e].set = N)
            }),
            ht.fn.extend({
                css: function(t, e) {
                    return Ht(this, function(t, e, n) {
                        var i, o, r = {}, s = 0;
                        if (ht.isArray(e)) {
                            for (i = fe(t),
                                     o = e.length; o > s; s++)
                                r[e[s]] = ht.css(t, e[s], !1, i);
                            return r
                        }
                        return void 0 !== n ? ht.style(t, e, n) : ht.css(t, e)
                    }, t, e, arguments.length > 1)
                },
                show: function() {
                    return M(this, !0)
                },
                hide: function() {
                    return M(this)
                },
                toggle: function(t) {
                    return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                        Lt(this) ? ht(this).show() : ht(this).hide()
                    })
                }
            }),
            ht.Tween = O,
            O.prototype = {
                constructor: O,
                init: function(t, e, n, i, o, r) {
                    this.elem = t,
                        this.prop = n,
                        this.easing = o || ht.easing._default,
                        this.options = e,
                        this.start = this.now = this.cur(),
                        this.end = i,
                        this.unit = r || (ht.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var t = O.propHooks[this.prop];
                    return t && t.get ? t.get(this) : O.propHooks._default.get(this)
                },
                run: function(t) {
                    var e, n = O.propHooks[this.prop];
                    return this.options.duration ? this.pos = e = ht.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
                        this.now = (this.end - this.start) * e + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                        n && n.set ? n.set(this) : O.propHooks._default.set(this),
                        this
                }
            },
            O.prototype.init.prototype = O.prototype,
            O.propHooks = {
                _default: {
                    get: function(t) {
                        var e;
                        return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ht.css(t.elem, t.prop, ""),
                            e && "auto" !== e ? e : 0)
                    },
                    set: function(t) {
                        ht.fx.step[t.prop] ? ht.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ht.cssProps[t.prop]] && !ht.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ht.style(t.elem, t.prop, t.now + t.unit)
                    }
                }
            },
            O.propHooks.scrollTop = O.propHooks.scrollLeft = {
                set: function(t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                }
            },
            ht.easing = {
                linear: function(t) {
                    return t
                },
                swing: function(t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                },
                _default: "swing"
            },
            ht.fx = O.prototype.init,
            ht.fx.step = {};
        var _e, Se, $e = /^(?:toggle|show|hide)$/, Ee = /queueHooks$/;
        ht.Animation = ht.extend(B, {
            tweeners: {
                "*": [function(t, e) {
                    var n = this.createTween(t, e);
                    return p(n.elem, t, Pt.exec(e), n),
                        n
                }
                ]
            },
            tweener: function(t, e) {
                ht.isFunction(t) ? (e = t,
                    t = ["*"]) : t = t.match(At);
                for (var n, i = 0, o = t.length; o > i; i++)
                    n = t[i],
                        B.tweeners[n] = B.tweeners[n] || [],
                        B.tweeners[n].unshift(e)
            },
            prefilters: [z],
            prefilter: function(t, e) {
                e ? B.prefilters.unshift(t) : B.prefilters.push(t)
            }
        }),
            ht.speed = function(t, e, n) {
                var i = t && "object" == typeof t ? ht.extend({}, t) : {
                    complete: n || !n && e || ht.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !ht.isFunction(e) && e
                };
                return i.duration = ht.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ht.fx.speeds ? ht.fx.speeds[i.duration] : ht.fx.speeds._default,
                null != i.queue && i.queue !== !0 || (i.queue = "fx"),
                    i.old = i.complete,
                    i.complete = function() {
                        ht.isFunction(i.old) && i.old.call(this),
                        i.queue && ht.dequeue(this, i.queue)
                    }
                    ,
                    i
            }
            ,
            ht.fn.extend({
                fadeTo: function(t, e, n, i) {
                    return this.filter(Lt).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function(t, e, n, i) {
                    var o = ht.isEmptyObject(t)
                        , r = ht.speed(e, n, i)
                        , s = function() {
                        var e = B(this, ht.extend({}, t), r);
                        (o || ht._data(this, "finish")) && e.stop(!0)
                    };
                    return s.finish = s,
                        o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop,
                            e(n)
                    };
                    return "string" != typeof t && (n = e,
                        e = t,
                        t = void 0),
                    e && t !== !1 && this.queue(t || "fx", []),
                        this.each(function() {
                            var e = !0
                                , o = null != t && t + "queueHooks"
                                , r = ht.timers
                                , s = ht._data(this);
                            if (o)
                                s[o] && s[o].stop && i(s[o]);
                            else
                                for (o in s)
                                    s[o] && s[o].stop && Ee.test(o) && i(s[o]);
                            for (o = r.length; o--; )
                                r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n),
                                    e = !1,
                                    r.splice(o, 1));
                            !e && n || ht.dequeue(this, t)
                        })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"),
                        this.each(function() {
                            var e, n = ht._data(this), i = n[t + "queue"], o = n[t + "queueHooks"], r = ht.timers, s = i ? i.length : 0;
                            for (n.finish = !0,
                                     ht.queue(this, t, []),
                                 o && o.stop && o.stop.call(this, !0),
                                     e = r.length; e--; )
                                r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0),
                                    r.splice(e, 1));
                            for (e = 0; s > e; e++)
                                i[e] && i[e].finish && i[e].finish.call(this);
                            delete n.finish
                        })
                }
            }),
            ht.each(["toggle", "show", "hide"], function(t, e) {
                var n = ht.fn[e];
                ht.fn[e] = function(t, i, o) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(H(e, !0), t, i, o)
                }
            }),
            ht.each({
                slideDown: H("show"),
                slideUp: H("hide"),
                slideToggle: H("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                ht.fn[t] = function(t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }),
            ht.timers = [],
            ht.fx.tick = function() {
                var t, e = ht.timers, n = 0;
                for (_e = ht.now(); n < e.length; n++)
                    t = e[n],
                    t() || e[n] !== t || e.splice(n--, 1);
                e.length || ht.fx.stop(),
                    _e = void 0
            }
            ,
            ht.fx.timer = function(t) {
                ht.timers.push(t),
                    t() ? ht.fx.start() : ht.timers.pop()
            }
            ,
            ht.fx.interval = 13,
            ht.fx.start = function() {
                Se || (Se = t.setInterval(ht.fx.tick, ht.fx.interval))
            }
            ,
            ht.fx.stop = function() {
                t.clearInterval(Se),
                    Se = null
            }
            ,
            ht.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            ht.fn.delay = function(e, n) {
                return e = ht.fx ? ht.fx.speeds[e] || e : e,
                    n = n || "fx",
                    this.queue(n, function(n, i) {
                        var o = t.setTimeout(n, e);
                        i.stop = function() {
                            t.clearTimeout(o)
                        }
                    })
            }
            ,
            function() {
                var t, e = it.createElement("input"), n = it.createElement("div"), i = it.createElement("select"), o = i.appendChild(it.createElement("option"));
                n = it.createElement("div"),
                    n.setAttribute("className", "t"),
                    n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                    t = n.getElementsByTagName("a")[0],
                    e.setAttribute("type", "checkbox"),
                    n.appendChild(e),
                    t = n.getElementsByTagName("a")[0],
                    t.style.cssText = "top:1px",
                    dt.getSetAttribute = "t" !== n.className,
                    dt.style = /top/.test(t.getAttribute("style")),
                    dt.hrefNormalized = "/a" === t.getAttribute("href"),
                    dt.checkOn = !!e.value,
                    dt.optSelected = o.selected,
                    dt.enctype = !!it.createElement("form").enctype,
                    i.disabled = !0,
                    dt.optDisabled = !o.disabled,
                    e = it.createElement("input"),
                    e.setAttribute("value", ""),
                    dt.input = "" === e.getAttribute("value"),
                    e.value = "t",
                    e.setAttribute("type", "radio"),
                    dt.radioValue = "t" === e.value
            }();
        var Ae = /\r/g
            , Ie = /[\x20\t\r\n\f]+/g;
        ht.fn.extend({
            val: function(t) {
                var e, n, i, o = this[0];
                {
                    if (arguments.length)
                        return i = ht.isFunction(t),
                            this.each(function(n) {
                                var o;
                                1 === this.nodeType && (o = i ? t.call(this, n, ht(this).val()) : t,
                                    null == o ? o = "" : "number" == typeof o ? o += "" : ht.isArray(o) && (o = ht.map(o, function(t) {
                                        return null == t ? "" : t + ""
                                    })),
                                    e = ht.valHooks[this.type] || ht.valHooks[this.nodeName.toLowerCase()],
                                e && "set"in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                            });
                    if (o)
                        return e = ht.valHooks[o.type] || ht.valHooks[o.nodeName.toLowerCase()],
                            e && "get"in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value,
                                "string" == typeof n ? n.replace(Ae, "") : null == n ? "" : n)
                }
            }
        }),
            ht.extend({
                valHooks: {
                    option: {
                        get: function(t) {
                            var e = ht.find.attr(t, "value");
                            return null != e ? e : ht.trim(ht.text(t)).replace(Ie, " ")
                        }
                    },
                    select: {
                        get: function(t) {
                            for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                                if (n = i[l],
                                (n.selected || l === o) && (dt.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ht.nodeName(n.parentNode, "optgroup"))) {
                                    if (e = ht(n).val(),
                                        r)
                                        return e;
                                    s.push(e)
                                }
                            return s
                        },
                        set: function(t, e) {
                            for (var n, i, o = t.options, r = ht.makeArray(e), s = o.length; s--; )
                                if (i = o[s],
                                ht.inArray(ht.valHooks.option.get(i), r) > -1)
                                    try {
                                        i.selected = n = !0
                                    } catch (a) {
                                        i.scrollHeight
                                    }
                                else
                                    i.selected = !1;
                            return n || (t.selectedIndex = -1),
                                o
                        }
                    }
                }
            }),
            ht.each(["radio", "checkbox"], function() {
                ht.valHooks[this] = {
                    set: function(t, e) {
                        return ht.isArray(e) ? t.checked = ht.inArray(ht(t).val(), e) > -1 : void 0
                    }
                },
                dt.checkOn || (ht.valHooks[this].get = function(t) {
                        return null === t.getAttribute("value") ? "on" : t.value
                    }
                )
            });
        var je, De, Me = ht.expr.attrHandle, Ne = /^(?:checked|selected)$/i, Fe = dt.getSetAttribute, Pe = dt.input;
        ht.fn.extend({
            attr: function(t, e) {
                return Ht(this, ht.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    ht.removeAttr(this, t)
                })
            }
        }),
            ht.extend({
                attr: function(t, e, n) {
                    var i, o, r = t.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r)
                        return "undefined" == typeof t.getAttribute ? ht.prop(t, e, n) : (1 === r && ht.isXMLDoc(t) || (e = e.toLowerCase(),
                            o = ht.attrHooks[e] || (ht.expr.match.bool.test(e) ? De : je)),
                            void 0 !== n ? null === n ? void ht.removeAttr(t, e) : o && "set"in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""),
                                n) : o && "get"in o && null !== (i = o.get(t, e)) ? i : (i = ht.find.attr(t, e),
                                null == i ? void 0 : i))
                },
                attrHooks: {
                    type: {
                        set: function(t, e) {
                            if (!dt.radioValue && "radio" === e && ht.nodeName(t, "input")) {
                                var n = t.value;
                                return t.setAttribute("type", e),
                                n && (t.value = n),
                                    e
                            }
                        }
                    }
                },
                removeAttr: function(t, e) {
                    var n, i, o = 0, r = e && e.match(At);
                    if (r && 1 === t.nodeType)
                        for (; n = r[o++]; )
                            i = ht.propFix[n] || n,
                                ht.expr.match.bool.test(n) ? Pe && Fe || !Ne.test(n) ? t[i] = !1 : t[ht.camelCase("default-" + n)] = t[i] = !1 : ht.attr(t, n, ""),
                                t.removeAttribute(Fe ? n : i)
                }
            }),
            De = {
                set: function(t, e, n) {
                    return e === !1 ? ht.removeAttr(t, n) : Pe && Fe || !Ne.test(n) ? t.setAttribute(!Fe && ht.propFix[n] || n, n) : t[ht.camelCase("default-" + n)] = t[n] = !0,
                        n
                }
            },
            ht.each(ht.expr.match.bool.source.match(/\w+/g), function(t, e) {
                var n = Me[e] || ht.find.attr;
                Pe && Fe || !Ne.test(e) ? Me[e] = function(t, e, i) {
                        var o, r;
                        return i || (r = Me[e],
                            Me[e] = o,
                            o = null != n(t, e, i) ? e.toLowerCase() : null,
                            Me[e] = r),
                            o
                    }
                    : Me[e] = function(t, e, n) {
                        return n ? void 0 : t[ht.camelCase("default-" + e)] ? e.toLowerCase() : null
                    }
            }),
        Pe && Fe || (ht.attrHooks.value = {
            set: function(t, e, n) {
                return ht.nodeName(t, "input") ? void (t.defaultValue = e) : je && je.set(t, e, n)
            }
        }),
        Fe || (je = {
            set: function(t, e, n) {
                var i = t.getAttributeNode(n);
                return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)),
                    i.value = e += "",
                    "value" === n || e === t.getAttribute(n) ? e : void 0
            }
        },
            Me.id = Me.name = Me.coords = function(t, e, n) {
                var i;
                return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
            }
            ,
            ht.valHooks.button = {
                get: function(t, e) {
                    var n = t.getAttributeNode(e);
                    return n && n.specified ? n.value : void 0
                },
                set: je.set
            },
            ht.attrHooks.contenteditable = {
                set: function(t, e, n) {
                    je.set(t, "" === e ? !1 : e, n)
                }
            },
            ht.each(["width", "height"], function(t, e) {
                ht.attrHooks[e] = {
                    set: function(t, n) {
                        return "" === n ? (t.setAttribute(e, "auto"),
                            n) : void 0
                    }
                }
            })),
        dt.style || (ht.attrHooks.style = {
            get: function(t) {
                return t.style.cssText || void 0
            },
            set: function(t, e) {
                return t.style.cssText = e + ""
            }
        });
        var Oe = /^(?:input|select|textarea|button|object)$/i
            , Le = /^(?:a|area)$/i;
        ht.fn.extend({
            prop: function(t, e) {
                return Ht(this, ht.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return t = ht.propFix[t] || t,
                    this.each(function() {
                        try {
                            this[t] = void 0,
                                delete this[t]
                        } catch (e) {}
                    })
            }
        }),
            ht.extend({
                prop: function(t, e, n) {
                    var i, o, r = t.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r)
                        return 1 === r && ht.isXMLDoc(t) || (e = ht.propFix[e] || e,
                            o = ht.propHooks[e]),
                            void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get"in o && null !== (i = o.get(t, e)) ? i : t[e]
                },
                propHooks: {
                    tabIndex: {
                        get: function(t) {
                            var e = ht.find.attr(t, "tabindex");
                            return e ? parseInt(e, 10) : Oe.test(t.nodeName) || Le.test(t.nodeName) && t.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    "for": "htmlFor",
                    "class": "className"
                }
            }),
        dt.hrefNormalized || ht.each(["href", "src"], function(t, e) {
            ht.propHooks[e] = {
                get: function(t) {
                    return t.getAttribute(e, 4)
                }
            }
        }),
        dt.optSelected || (ht.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && (e.selectedIndex,
                e.parentNode && e.parentNode.selectedIndex),
                    null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex,
                e.parentNode && e.parentNode.selectedIndex)
            }
        }),
            ht.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                ht.propFix[this.toLowerCase()] = this
            }),
        dt.enctype || (ht.propFix.enctype = "encoding");
        var He = /[\t\r\n\f]/g;
        ht.fn.extend({
            addClass: function(t) {
                var e, n, i, o, r, s, a, l = 0;
                if (ht.isFunction(t))
                    return this.each(function(e) {
                        ht(this).addClass(t.call(this, e, W(this)))
                    });
                if ("string" == typeof t && t)
                    for (e = t.match(At) || []; n = this[l++]; )
                        if (o = W(n),
                            i = 1 === n.nodeType && (" " + o + " ").replace(He, " ")) {
                            for (s = 0; r = e[s++]; )
                                i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            a = ht.trim(i),
                            o !== a && ht.attr(n, "class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, o, r, s, a, l = 0;
                if (ht.isFunction(t))
                    return this.each(function(e) {
                        ht(this).removeClass(t.call(this, e, W(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(At) || []; n = this[l++]; )
                        if (o = W(n),
                            i = 1 === n.nodeType && (" " + o + " ").replace(He, " ")) {
                            for (s = 0; r = e[s++]; )
                                for (; i.indexOf(" " + r + " ") > -1; )
                                    i = i.replace(" " + r + " ", " ");
                            a = ht.trim(i),
                            o !== a && ht.attr(n, "class", a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ht.isFunction(t) ? this.each(function(n) {
                    ht(this).toggleClass(t.call(this, n, W(this), e), e)
                }) : this.each(function() {
                    var e, i, o, r;
                    if ("string" === n)
                        for (i = 0,
                                 o = ht(this),
                                 r = t.match(At) || []; e = r[i++]; )
                            o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else
                        void 0 !== t && "boolean" !== n || (e = W(this),
                        e && ht._data(this, "__className__", e),
                            ht.attr(this, "class", e || t === !1 ? "" : ht._data(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++]; )
                    if (1 === n.nodeType && (" " + W(n) + " ").replace(He, " ").indexOf(e) > -1)
                        return !0;
                return !1
            }
        }),
            ht.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
                ht.fn[e] = function(t, n) {
                    return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
                }
            }),
            ht.fn.extend({
                hover: function(t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                }
            });
        var qe = t.location
            , ze = ht.now()
            , Re = /\?/
            , Be = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        ht.parseJSON = function(e) {
            if (t.JSON && t.JSON.parse)
                return t.JSON.parse(e + "");
            var n, i = null, o = ht.trim(e + "");
            return o && !ht.trim(o.replace(Be, function(t, e, o, r) {
                return n && e && (i = 0),
                    0 === i ? t : (n = o || e,
                        i += !r - !o,
                        "")
            })) ? Function("return " + o)() : ht.error("Invalid JSON: " + e)
        }
            ,
            ht.parseXML = function(e) {
                var n, i;
                if (!e || "string" != typeof e)
                    return null;
                try {
                    t.DOMParser ? (i = new t.DOMParser,
                        n = i.parseFromString(e, "text/xml")) : (n = new t.ActiveXObject("Microsoft.XMLDOM"),
                        n.async = "false",
                        n.loadXML(e))
                } catch (o) {
                    n = void 0
                }
                return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ht.error("Invalid XML: " + e),
                    n
            }
        ;
        var We = /#.*$/
            , Ue = /([?&])_=[^&]*/
            , Ve = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
            , Ge = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
            , Qe = /^(?:GET|HEAD)$/
            , Xe = /^\/\//
            , Ye = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
            , Ke = {}
            , Je = {}
            , Ze = "*/".concat("*")
            , tn = qe.href
            , en = Ye.exec(tn.toLowerCase()) || [];
        ht.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: tn,
                type: "GET",
                isLocal: Ge.test(en[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ze,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ht.parseJSON,
                    "text xml": ht.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? G(G(t, ht.ajaxSettings), e) : G(ht.ajaxSettings, t)
            },
            ajaxPrefilter: U(Ke),
            ajaxTransport: U(Je),
            ajax: function(e, n) {
                function i(e, n, i, o) {
                    var r, d, y, b, x, C = n;
                    2 !== w && (w = 2,
                    l && t.clearTimeout(l),
                        u = void 0,
                        a = o || "",
                        k.readyState = e > 0 ? 4 : 0,
                        r = e >= 200 && 300 > e || 304 === e,
                    i && (b = Q(p, k, i)),
                        b = X(p, b, k, r),
                        r ? (p.ifModified && (x = k.getResponseHeader("Last-Modified"),
                        x && (ht.lastModified[s] = x),
                            x = k.getResponseHeader("etag"),
                        x && (ht.etag[s] = x)),
                            204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state,
                                d = b.data,
                                y = b.error,
                                r = !y)) : (y = C,
                        !e && C || (C = "error",
                        0 > e && (e = 0))),
                        k.status = e,
                        k.statusText = (n || C) + "",
                        r ? m.resolveWith(h, [d, C, k]) : m.rejectWith(h, [k, C, y]),
                        k.statusCode(g),
                        g = void 0,
                    c && f.trigger(r ? "ajaxSuccess" : "ajaxError", [k, p, r ? d : y]),
                        v.fireWith(h, [k, C]),
                    c && (f.trigger("ajaxComplete", [k, p]),
                    --ht.active || ht.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e,
                    e = void 0),
                    n = n || {};
                var o, r, s, a, l, c, u, d, p = ht.ajaxSetup({}, n), h = p.context || p, f = p.context && (h.nodeType || h.jquery) ? ht(h) : ht.event, m = ht.Deferred(), v = ht.Callbacks("once memory"), g = p.statusCode || {}, y = {}, b = {}, w = 0, x = "canceled", k = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === w) {
                            if (!d)
                                for (d = {}; e = Ve.exec(a); )
                                    d[e[1].toLowerCase()] = e[2];
                            e = d[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? a : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return w || (t = b[n] = b[n] || t,
                            y[t] = e),
                            this
                    },
                    overrideMimeType: function(t) {
                        return w || (p.mimeType = t),
                            this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > w)
                                for (e in t)
                                    g[e] = [g[e], t[e]];
                            else
                                k.always(t[k.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || x;
                        return u && u.abort(e),
                            i(0, e),
                            this
                    }
                };
                if (m.promise(k).complete = v.add,
                    k.success = k.done,
                    k.error = k.fail,
                    p.url = ((e || p.url || tn) + "").replace(We, "").replace(Xe, en[1] + "//"),
                    p.type = n.method || n.type || p.method || p.type,
                    p.dataTypes = ht.trim(p.dataType || "*").toLowerCase().match(At) || [""],
                null == p.crossDomain && (o = Ye.exec(p.url.toLowerCase()),
                    p.crossDomain = !(!o || o[1] === en[1] && o[2] === en[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))),
                p.data && p.processData && "string" != typeof p.data && (p.data = ht.param(p.data, p.traditional)),
                    V(Ke, p, n, k),
                2 === w)
                    return k;
                c = ht.event && p.global,
                c && 0 === ht.active++ && ht.event.trigger("ajaxStart"),
                    p.type = p.type.toUpperCase(),
                    p.hasContent = !Qe.test(p.type),
                    s = p.url,
                p.hasContent || (p.data && (s = p.url += (Re.test(s) ? "&" : "?") + p.data,
                    delete p.data),
                p.cache === !1 && (p.url = Ue.test(s) ? s.replace(Ue, "$1_=" + ze++) : s + (Re.test(s) ? "&" : "?") + "_=" + ze++)),
                p.ifModified && (ht.lastModified[s] && k.setRequestHeader("If-Modified-Since", ht.lastModified[s]),
                ht.etag[s] && k.setRequestHeader("If-None-Match", ht.etag[s])),
                (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && k.setRequestHeader("Content-Type", p.contentType),
                    k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ze + "; q=0.01" : "") : p.accepts["*"]);
                for (r in p.headers)
                    k.setRequestHeader(r, p.headers[r]);
                if (p.beforeSend && (p.beforeSend.call(h, k, p) === !1 || 2 === w))
                    return k.abort();
                x = "abort";
                for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    k[r](p[r]);
                if (u = V(Je, p, n, k)) {
                    if (k.readyState = 1,
                    c && f.trigger("ajaxSend", [k, p]),
                    2 === w)
                        return k;
                    p.async && p.timeout > 0 && (l = t.setTimeout(function() {
                        k.abort("timeout")
                    }, p.timeout));
                    try {
                        w = 1,
                            u.send(y, i)
                    } catch (C) {
                        if (!(2 > w))
                            throw C;
                        i(-1, C)
                    }
                } else
                    i(-1, "No Transport");
                return k
            },
            getJSON: function(t, e, n) {
                return ht.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return ht.get(t, void 0, e, "script")
            }
        }),
            ht.each(["get", "post"], function(t, e) {
                ht[e] = function(t, n, i, o) {
                    return ht.isFunction(n) && (o = o || i,
                        i = n,
                        n = void 0),
                        ht.ajax(ht.extend({
                            url: t,
                            type: e,
                            dataType: o,
                            data: n,
                            success: i
                        }, ht.isPlainObject(t) && t))
                }
            }),
            ht._evalUrl = function(t) {
                return ht.ajax({
                    url: t,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }
            ,
            ht.fn.extend({
                wrapAll: function(t) {
                    if (ht.isFunction(t))
                        return this.each(function(e) {
                            ht(this).wrapAll(t.call(this, e))
                        });
                    if (this[0]) {
                        var e = ht(t, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && e.insertBefore(this[0]),
                            e.map(function() {
                                for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; )
                                    t = t.firstChild;
                                return t
                            }).append(this)
                    }
                    return this
                },
                wrapInner: function(t) {
                    return ht.isFunction(t) ? this.each(function(e) {
                        ht(this).wrapInner(t.call(this, e))
                    }) : this.each(function() {
                        var e = ht(this)
                            , n = e.contents();
                        n.length ? n.wrapAll(t) : e.append(t)
                    })
                },
                wrap: function(t) {
                    var e = ht.isFunction(t);
                    return this.each(function(n) {
                        ht(this).wrapAll(e ? t.call(this, n) : t)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        ht.nodeName(this, "body") || ht(this).replaceWith(this.childNodes)
                    }).end()
                }
            }),
            ht.expr.filters.hidden = function(t) {
                return dt.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : K(t)
            }
            ,
            ht.expr.filters.visible = function(t) {
                return !ht.expr.filters.hidden(t)
            }
        ;
        var nn = /%20/g
            , on = /\[\]$/
            , rn = /\r?\n/g
            , sn = /^(?:submit|button|image|reset|file)$/i
            , an = /^(?:input|select|textarea|keygen)/i;
        ht.param = function(t, e) {
            var n, i = [], o = function(t, e) {
                e = ht.isFunction(e) ? e() : null == e ? "" : e,
                    i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
            if (void 0 === e && (e = ht.ajaxSettings && ht.ajaxSettings.traditional),
            ht.isArray(t) || t.jquery && !ht.isPlainObject(t))
                ht.each(t, function() {
                    o(this.name, this.value)
                });
            else
                for (n in t)
                    J(n, t[n], e, o);
            return i.join("&").replace(nn, "+")
        }
            ,
            ht.fn.extend({
                serialize: function() {
                    return ht.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var t = ht.prop(this, "elements");
                        return t ? ht.makeArray(t) : this
                    }).filter(function() {
                        var t = this.type;
                        return this.name && !ht(this).is(":disabled") && an.test(this.nodeName) && !sn.test(t) && (this.checked || !qt.test(t))
                    }).map(function(t, e) {
                        var n = ht(this).val();
                        return null == n ? null : ht.isArray(n) ? ht.map(n, function(t) {
                            return {
                                name: e.name,
                                value: t.replace(rn, "\r\n")
                            }
                        }) : {
                            name: e.name,
                            value: n.replace(rn, "\r\n")
                        }
                    }).get()
                }
            }),
            ht.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
                    return this.isLocal ? tt() : it.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || tt()
                }
                : Z;
        var ln = 0
            , cn = {}
            , un = ht.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function() {
            for (var t in cn)
                cn[t](void 0, !0)
        }),
            dt.cors = !!un && "withCredentials"in un,
            un = dt.ajax = !!un,
        un && ht.ajaxTransport(function(e) {
            if (!e.crossDomain || dt.cors) {
                var n;
                return {
                    send: function(i, o) {
                        var r, s = e.xhr(), a = ++ln;
                        if (s.open(e.type, e.url, e.async, e.username, e.password),
                            e.xhrFields)
                            for (r in e.xhrFields)
                                s[r] = e.xhrFields[r];
                        e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                        e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (r in i)
                            void 0 !== i[r] && s.setRequestHeader(r, i[r] + "");
                        s.send(e.hasContent && e.data || null),
                            n = function(t, i) {
                                var r, l, c;
                                if (n && (i || 4 === s.readyState))
                                    if (delete cn[a],
                                        n = void 0,
                                        s.onreadystatechange = ht.noop,
                                        i)
                                        4 !== s.readyState && s.abort();
                                    else {
                                        c = {},
                                            r = s.status,
                                        "string" == typeof s.responseText && (c.text = s.responseText);
                                        try {
                                            l = s.statusText
                                        } catch (u) {
                                            l = ""
                                        }
                                        r || !e.isLocal || e.crossDomain ? 1223 === r && (r = 204) : r = c.text ? 200 : 404
                                    }
                                c && o(r, l, c, s.getAllResponseHeaders())
                            }
                            ,
                            e.async ? 4 === s.readyState ? t.setTimeout(n) : s.onreadystatechange = cn[a] = n : n()
                    },
                    abort: function() {
                        n && n(void 0, !0)
                    }
                }
            }
        }),
            ht.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(t) {
                        return ht.globalEval(t),
                            t
                    }
                }
            }),
            ht.ajaxPrefilter("script", function(t) {
                void 0 === t.cache && (t.cache = !1),
                t.crossDomain && (t.type = "GET",
                    t.global = !1)
            }),
            ht.ajaxTransport("script", function(t) {
                if (t.crossDomain) {
                    var e, n = it.head || ht("head")[0] || it.documentElement;
                    return {
                        send: function(i, o) {
                            e = it.createElement("script"),
                                e.async = !0,
                            t.scriptCharset && (e.charset = t.scriptCharset),
                                e.src = t.url,
                                e.onload = e.onreadystatechange = function(t, n) {
                                    (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null,
                                    e.parentNode && e.parentNode.removeChild(e),
                                        e = null,
                                    n || o(200, "success"))
                                }
                                ,
                                n.insertBefore(e, n.firstChild)
                        },
                        abort: function() {
                            e && e.onload(void 0, !0)
                        }
                    }
                }
            });
        var dn = []
            , pn = /(=)\?(?=&|$)|\?\?/;
        ht.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = dn.pop() || ht.expando + "_" + ze++;
                return this[t] = !0,
                    t
            }
        }),
            ht.ajaxPrefilter("json jsonp", function(e, n, i) {
                var o, r, s, a = e.jsonp !== !1 && (pn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && pn.test(e.data) && "data");
                return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = ht.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                    a ? e[a] = e[a].replace(pn, "$1" + o) : e.jsonp !== !1 && (e.url += (Re.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                    e.converters["script json"] = function() {
                        return s || ht.error(o + " was not called"),
                            s[0]
                    }
                    ,
                    e.dataTypes[0] = "json",
                    r = t[o],
                    t[o] = function() {
                        s = arguments
                    }
                    ,
                    i.always(function() {
                        void 0 === r ? ht(t).removeProp(o) : t[o] = r,
                        e[o] && (e.jsonpCallback = n.jsonpCallback,
                            dn.push(o)),
                        s && ht.isFunction(r) && r(s[0]),
                            s = r = void 0
                    }),
                    "script") : void 0
            }),
            ht.parseHTML = function(t, e, n) {
                if (!t || "string" != typeof t)
                    return null;
                "boolean" == typeof e && (n = e,
                    e = !1),
                    e = e || it;
                var i = kt.exec(t)
                    , o = !n && [];
                return i ? [e.createElement(i[1])] : (i = g([t], e, o),
                o && o.length && ht(o).remove(),
                    ht.merge([], i.childNodes))
            }
        ;
        var hn = ht.fn.load;
        ht.fn.load = function(t, e, n) {
            if ("string" != typeof t && hn)
                return hn.apply(this, arguments);
            var i, o, r, s = this, a = t.indexOf(" ");
            return a > -1 && (i = ht.trim(t.slice(a, t.length)),
                t = t.slice(0, a)),
                ht.isFunction(e) ? (n = e,
                    e = void 0) : e && "object" == typeof e && (o = "POST"),
            s.length > 0 && ht.ajax({
                url: t,
                type: o || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                r = arguments,
                    s.html(i ? ht("<div>").append(ht.parseHTML(t)).find(i) : t)
            }).always(n && function(t, e) {
                s.each(function() {
                    n.apply(this, r || [t.responseText, e, t])
                })
            }
            ),
                this
        }
            ,
            ht.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
                ht.fn[e] = function(t) {
                    return this.on(e, t)
                }
            }),
            ht.expr.filters.animated = function(t) {
                return ht.grep(ht.timers, function(e) {
                    return t === e.elem
                }).length
            }
            ,
            ht.offset = {
                setOffset: function(t, e, n) {
                    var i, o, r, s, a, l, c, u = ht.css(t, "position"), d = ht(t), p = {};
                    "static" === u && (t.style.position = "relative"),
                        a = d.offset(),
                        r = ht.css(t, "top"),
                        l = ht.css(t, "left"),
                        c = ("absolute" === u || "fixed" === u) && ht.inArray("auto", [r, l]) > -1,
                        c ? (i = d.position(),
                            s = i.top,
                            o = i.left) : (s = parseFloat(r) || 0,
                            o = parseFloat(l) || 0),
                    ht.isFunction(e) && (e = e.call(t, n, ht.extend({}, a))),
                    null != e.top && (p.top = e.top - a.top + s),
                    null != e.left && (p.left = e.left - a.left + o),
                        "using"in e ? e.using.call(t, p) : d.css(p)
                }
            },
            ht.fn.extend({
                offset: function(t) {
                    if (arguments.length)
                        return void 0 === t ? this : this.each(function(e) {
                            ht.offset.setOffset(this, t, e)
                        });
                    var e, n, i = {
                        top: 0,
                        left: 0
                    }, o = this[0], r = o && o.ownerDocument;
                    if (r)
                        return e = r.documentElement,
                            ht.contains(e, o) ? ("undefined" != typeof o.getBoundingClientRect && (i = o.getBoundingClientRect()),
                                n = et(r),
                                {
                                    top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                                    left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                                }) : i
                },
                position: function() {
                    if (this[0]) {
                        var t, e, n = {
                            top: 0,
                            left: 0
                        }, i = this[0];
                        return "fixed" === ht.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(),
                            e = this.offset(),
                        ht.nodeName(t[0], "html") || (n = t.offset()),
                            n.top += ht.css(t[0], "borderTopWidth", !0),
                            n.left += ht.css(t[0], "borderLeftWidth", !0)),
                            {
                                top: e.top - n.top - ht.css(i, "marginTop", !0),
                                left: e.left - n.left - ht.css(i, "marginLeft", !0)
                            }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var t = this.offsetParent; t && !ht.nodeName(t, "html") && "static" === ht.css(t, "position"); )
                            t = t.offsetParent;
                        return t || he
                    })
                }
            }),
            ht.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(t, e) {
                var n = /Y/.test(e);
                ht.fn[t] = function(i) {
                    return Ht(this, function(t, i, o) {
                        var r = et(t);
                        return void 0 === o ? r ? e in r ? r[e] : r.document.documentElement[i] : t[i] : void (r ? r.scrollTo(n ? ht(r).scrollLeft() : o, n ? o : ht(r).scrollTop()) : t[i] = o)
                    }, t, i, arguments.length, null)
                }
            }),
            ht.each(["top", "left"], function(t, e) {
                ht.cssHooks[e] = j(dt.pixelPosition, function(t, n) {
                    return n ? (n = me(t, e),
                        de.test(n) ? ht(t).position()[e] + "px" : n) : void 0
                })
            }),
            ht.each({
                Height: "height",
                Width: "width"
            }, function(t, e) {
                ht.each({
                    padding: "inner" + t,
                    content: e,
                    "": "outer" + t
                }, function(n, i) {
                    ht.fn[i] = function(i, o) {
                        var r = arguments.length && (n || "boolean" != typeof i)
                            , s = n || (i === !0 || o === !0 ? "margin" : "border");
                        return Ht(this, function(e, n, i) {
                            var o;
                            return ht.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement,
                                Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? ht.css(e, n, s) : ht.style(e, n, i, s)
                        }, e, r ? i : void 0, r, null)
                    }
                })
            }),
            ht.fn.extend({
                bind: function(t, e, n) {
                    return this.on(t, null, e, n)
                },
                unbind: function(t, e) {
                    return this.off(t, null, e)
                },
                delegate: function(t, e, n, i) {
                    return this.on(e, t, n, i)
                },
                undelegate: function(t, e, n) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
                }
            }),
            ht.fn.size = function() {
                return this.length
            }
            ,
            ht.fn.andSelf = ht.fn.addBack,
        "function" == typeof define && define.amd && define("jquery", [], function() {
            return ht
        });
        var fn = t.jQuery
            , mn = t.$;
        return ht.noConflict = function(e) {
            return t.$ === ht && (t.$ = mn),
            e && t.jQuery === ht && (t.jQuery = fn),
                ht
        }
            ,
        e || (t.jQuery = t.$ = ht),
            ht
    }),
    function(t, e) {
        "use strict";
        t.rails !== e && t.error("jquery-ujs has already been loaded!");
        var n, i = t(document);
        t.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
            fileInputSelector: "input[name][type=file]:not([disabled])",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            csrfToken: function() {
                return t("meta[name=csrf-token]").attr("content")
            },
            csrfParam: function() {
                return t("meta[name=csrf-param]").attr("content")
            },
            CSRFProtection: function(t) {
                var e = n.csrfToken();
                e && t.setRequestHeader("X-CSRF-Token", e)
            },
            refreshCSRFTokens: function() {
                t('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
            },
            fire: function(e, n, i) {
                var o = t.Event(n);
                return e.trigger(o, i),
                o.result !== !1
            },
            confirm: function(t) {
                return confirm(t)
            },
            ajax: function(e) {
                return t.ajax(e)
            },
            href: function(t) {
                return t[0].href
            },
            isRemote: function(t) {
                return t.data("remote") !== e && t.data("remote") !== !1
            },
            handleRemote: function(i) {
                var o, r, s, a, l, c;
                if (n.fire(i, "ajax:before")) {
                    if (a = i.data("with-credentials") || null,
                        l = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType,
                        i.is("form")) {
                        o = i.data("ujs:submit-button-formmethod") || i.attr("method"),
                            r = i.data("ujs:submit-button-formaction") || i.attr("action"),
                            s = t(i[0]).serializeArray();
                        var u = i.data("ujs:submit-button");
                        u && (s.push(u),
                            i.data("ujs:submit-button", null)),
                            i.data("ujs:submit-button-formmethod", null),
                            i.data("ujs:submit-button-formaction", null)
                    } else
                        i.is(n.inputChangeSelector) ? (o = i.data("method"),
                            r = i.data("url"),
                            s = i.serialize(),
                        i.data("params") && (s = s + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (o = i.data("method") || "get",
                            r = i.data("url"),
                            s = i.serialize(),
                        i.data("params") && (s = s + "&" + i.data("params"))) : (o = i.data("method"),
                            r = n.href(i),
                            s = i.data("params") || null);
                    return c = {
                        type: o || "GET",
                        data: s,
                        dataType: l,
                        beforeSend: function(t, o) {
                            return o.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script),
                                n.fire(i, "ajax:beforeSend", [t, o]) ? void i.trigger("ajax:send", t) : !1
                        },
                        success: function(t, e, n) {
                            i.trigger("ajax:success", [t, e, n])
                        },
                        complete: function(t, e) {
                            i.trigger("ajax:complete", [t, e])
                        },
                        error: function(t, e, n) {
                            i.trigger("ajax:error", [t, e, n])
                        },
                        crossDomain: n.isCrossDomain(r)
                    },
                    a && (c.xhrFields = {
                        withCredentials: a
                    }),
                    r && (c.url = r),
                        n.ajax(c)
                }
                return !1
            },
            isCrossDomain: function(t) {
                var e = document.createElement("a");
                e.href = location.href;
                var n = document.createElement("a");
                try {
                    return n.href = t,
                        n.href = n.href,
                        !((!n.protocol || ":" === n.protocol) && !n.host || e.protocol + "//" + e.host == n.protocol + "//" + n.host)
                } catch (i) {
                    return !0
                }
            },
            handleMethod: function(i) {
                var o = n.href(i)
                    , r = i.data("method")
                    , s = i.attr("target")
                    , a = n.csrfToken()
                    , l = n.csrfParam()
                    , c = t('<form method="post" action="' + o + '"></form>')
                    , u = '<input name="_method" value="' + r + '" type="hidden" />';
                l === e || a === e || n.isCrossDomain(o) || (u += '<input name="' + l + '" value="' + a + '" type="hidden" />'),
                s && c.attr("target", s),
                    c.hide().append(u).appendTo("body"),
                    c.submit()
            },
            formElements: function(e, n) {
                return e.is("form") ? t(e[0].elements).filter(n) : e.find(n)
            },
            disableFormElements: function(e) {
                n.formElements(e, n.disableSelector).each(function() {
                    n.disableFormElement(t(this))
                })
            },
            disableFormElement: function(t) {
                var n, i;
                n = t.is("button") ? "html" : "val",
                    i = t.data("disable-with"),
                i !== e && (t.data("ujs:enable-with", t[n]()),
                    t[n](i)),
                    t.prop("disabled", !0),
                    t.data("ujs:disabled", !0)
            },
            enableFormElements: function(e) {
                n.formElements(e, n.enableSelector).each(function() {
                    n.enableFormElement(t(this))
                })
            },
            enableFormElement: function(t) {
                var n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") !== e && (t[n](t.data("ujs:enable-with")),
                    t.removeData("ujs:enable-with")),
                    t.prop("disabled", !1),
                    t.removeData("ujs:disabled")
            },
            allowAction: function(t) {
                var e, i = t.data("confirm"), o = !1;
                if (!i)
                    return !0;
                if (n.fire(t, "confirm")) {
                    try {
                        o = n.confirm(i)
                    } catch (r) {
                        (console.error || console.log).call(console, r.stack || r)
                    }
                    e = n.fire(t, "confirm:complete", [o])
                }
                return o && e
            },
            blankInputs: function(e, n, i) {
                var o, r, s, a, l = t(), c = n || "input,textarea", u = e.find(c), d = {};
                return u.each(function() {
                    o = t(this),
                        o.is("input[type=radio]") ? (a = o.attr("name"),
                        d[a] || (0 === e.find('input[type=radio]:checked[name="' + a + '"]').length && (s = e.find('input[type=radio][name="' + a + '"]'),
                            l = l.add(s)),
                            d[a] = a)) : (r = o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked") : !!o.val(),
                        r === i && (l = l.add(o)))
                }),
                    l.length ? l : !1
            },
            nonBlankInputs: function(t, e) {
                return n.blankInputs(t, e, !0)
            },
            stopEverything: function(e) {
                return t(e.target).trigger("ujs:everythingStopped"),
                    e.stopImmediatePropagation(),
                    !1
            },
            disableElement: function(t) {
                var i = t.data("disable-with");
                i !== e && (t.data("ujs:enable-with", t.html()),
                    t.html(i)),
                    t.bind("click.railsDisable", function(t) {
                        return n.stopEverything(t)
                    }),
                    t.data("ujs:disabled", !0)
            },
            enableElement: function(t) {
                t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")),
                    t.removeData("ujs:enable-with")),
                    t.unbind("click.railsDisable"),
                    t.removeData("ujs:disabled")
            }
        },
        n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, i) {
            t.crossDomain || n.CSRFProtection(i)
        }),
            t(window).on("pageshow.rails", function() {
                t(t.rails.enableSelector).each(function() {
                    var e = t(this);
                    e.data("ujs:disabled") && t.rails.enableFormElement(e)
                }),
                    t(t.rails.linkDisableSelector).each(function() {
                        var e = t(this);
                        e.data("ujs:disabled") && t.rails.enableElement(e)
                    })
            }),
            i.on("ajax:complete", n.linkDisableSelector, function() {
                n.enableElement(t(this))
            }),
            i.on("ajax:complete", n.buttonDisableSelector, function() {
                n.enableFormElement(t(this))
            }),
            i.on("click.rails", n.linkClickSelector, function(e) {
                var i = t(this)
                    , o = i.data("method")
                    , r = i.data("params")
                    , s = e.metaKey || e.ctrlKey;
                if (!n.allowAction(i))
                    return n.stopEverything(e);
                if (!s && i.is(n.linkDisableSelector) && n.disableElement(i),
                    n.isRemote(i)) {
                    if (s && (!o || "GET" === o) && !r)
                        return !0;
                    var a = n.handleRemote(i);
                    return a === !1 ? n.enableElement(i) : a.fail(function() {
                        n.enableElement(i)
                    }),
                        !1
                }
                return o ? (n.handleMethod(i),
                    !1) : void 0
            }),
            i.on("click.rails", n.buttonClickSelector, function(e) {
                var i = t(this);
                if (!n.allowAction(i) || !n.isRemote(i))
                    return n.stopEverything(e);
                i.is(n.buttonDisableSelector) && n.disableFormElement(i);
                var o = n.handleRemote(i);
                return o === !1 ? n.enableFormElement(i) : o.fail(function() {
                    n.enableFormElement(i)
                }),
                    !1
            }),
            i.on("change.rails", n.inputChangeSelector, function(e) {
                var i = t(this);
                return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i),
                    !1) : n.stopEverything(e)
            }),
            i.on("submit.rails", n.formSubmitSelector, function(i) {
                var o, r, s = t(this), a = n.isRemote(s);
                if (!n.allowAction(s))
                    return n.stopEverything(i);
                if (s.attr("novalidate") === e)
                    if (s.data("ujs:formnovalidate-button") === e) {
                        if (o = n.blankInputs(s, n.requiredInputSelector, !1),
                        o && n.fire(s, "ajax:aborted:required", [o]))
                            return n.stopEverything(i)
                    } else
                        s.data("ujs:formnovalidate-button", e);
                if (a) {
                    if (r = n.nonBlankInputs(s, n.fileInputSelector)) {
                        setTimeout(function() {
                            n.disableFormElements(s)
                        }, 13);
                        var l = n.fire(s, "ajax:aborted:file", [r]);
                        return l || setTimeout(function() {
                            n.enableFormElements(s)
                        }, 13),
                            l
                    }
                    return n.handleRemote(s),
                        !1
                }
                setTimeout(function() {
                    n.disableFormElements(s)
                }, 13)
            }),
            i.on("click.rails", n.formInputClickSelector, function(e) {
                var i = t(this);
                if (!n.allowAction(i))
                    return n.stopEverything(e);
                var o = i.attr("name")
                    , r = o ? {
                    name: o,
                    value: i.val()
                } : null
                    , s = i.closest("form");
                0 === s.length && (s = t("#" + i.attr("form"))),
                    s.data("ujs:submit-button", r),
                    s.data("ujs:formnovalidate-button", i.attr("formnovalidate")),
                    s.data("ujs:submit-button-formaction", i.attr("formaction")),
                    s.data("ujs:submit-button-formmethod", i.attr("formmethod"))
            }),
            i.on("ajax:send.rails", n.formSubmitSelector, function(e) {
                this === e.target && n.disableFormElements(t(this))
            }),
            i.on("ajax:complete.rails", n.formSubmitSelector, function(e) {
                this === e.target && n.enableFormElements(t(this))
            }),
            t(function() {
                n.refreshCSRFTokens()
            }))
    }(jQuery),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(t) {
        "use strict";
        var e = window.Slick || {};
        e = function() {
            function e(e, i) {
                var o, r = this;
                r.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: t(e),
                    appendDots: t(e),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(e, n) {
                        return t('<button type="button" />').text(n + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                },
                    r.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        scrolling: !1,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        swiping: !1,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1,
                        unslicked: !1
                    },
                    t.extend(r, r.initials),
                    r.activeBreakpoint = null,
                    r.animType = null,
                    r.animProp = null,
                    r.breakpoints = [],
                    r.breakpointSettings = [],
                    r.cssTransitions = !1,
                    r.focussed = !1,
                    r.interrupted = !1,
                    r.hidden = "hidden",
                    r.paused = !0,
                    r.positionProp = null,
                    r.respondTo = null,
                    r.rowCount = 1,
                    r.shouldClick = !0,
                    r.$slider = t(e),
                    r.$slidesCache = null,
                    r.transformType = null,
                    r.transitionType = null,
                    r.visibilityChange = "visibilitychange",
                    r.windowWidth = 0,
                    r.windowTimer = null,
                    o = t(e).data("slick") || {},
                    r.options = t.extend({}, r.defaults, i, o),
                    r.currentSlide = r.options.initialSlide,
                    r.originalSettings = r.options,
                    "undefined" != typeof document.mozHidden ? (r.hidden = "mozHidden",
                        r.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (r.hidden = "webkitHidden",
                        r.visibilityChange = "webkitvisibilitychange"),
                    r.autoPlay = t.proxy(r.autoPlay, r),
                    r.autoPlayClear = t.proxy(r.autoPlayClear, r),
                    r.autoPlayIterator = t.proxy(r.autoPlayIterator, r),
                    r.changeSlide = t.proxy(r.changeSlide, r),
                    r.clickHandler = t.proxy(r.clickHandler, r),
                    r.selectHandler = t.proxy(r.selectHandler, r),
                    r.setPosition = t.proxy(r.setPosition, r),
                    r.swipeHandler = t.proxy(r.swipeHandler, r),
                    r.dragHandler = t.proxy(r.dragHandler, r),
                    r.keyHandler = t.proxy(r.keyHandler, r),
                    r.instanceUid = n++,
                    r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
                    r.registerBreakpoints(),
                    r.init(!0)
            }
            var n = 0;
            return e
        }(),
            e.prototype.activateADA = function() {
                var t = this;
                t.$slideTrack.find(".slick-active").attr({
                    "aria-hidden": "false"
                }).find("a, input, button, select").attr({
                    tabindex: "0"
                })
            }
            ,
            e.prototype.addSlide = e.prototype.slickAdd = function(e, n, i) {
                var o = this;
                if ("boolean" == typeof n)
                    i = n,
                        n = null;
                else if (0 > n || n >= o.slideCount)
                    return !1;
                o.unload(),
                    "number" == typeof n ? 0 === n && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : i ? t(e).insertBefore(o.$slides.eq(n)) : t(e).insertAfter(o.$slides.eq(n)) : i === !0 ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack),
                    o.$slides = o.$slideTrack.children(this.options.slide),
                    o.$slideTrack.children(this.options.slide).detach(),
                    o.$slideTrack.append(o.$slides),
                    o.$slides.each(function(e, n) {
                        t(n).attr("data-slick-index", e)
                    }),
                    o.$slidesCache = o.$slides,
                    o.reinit()
            }
            ,
            e.prototype.animateHeight = function() {
                var t = this;
                if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                    var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                    t.$list.animate({
                        height: e
                    }, t.options.speed)
                }
            }
            ,
            e.prototype.animateSlide = function(e, n) {
                var i = {}
                    , o = this;
                o.animateHeight(),
                o.options.rtl === !0 && o.options.vertical === !1 && (e = -e),
                    o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
                        left: e
                    }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
                        top: e
                    }, o.options.speed, o.options.easing, n) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft),
                        t({
                            animStart: o.currentLeft
                        }).animate({
                            animStart: e
                        }, {
                            duration: o.options.speed,
                            easing: o.options.easing,
                            step: function(t) {
                                t = Math.ceil(t),
                                    o.options.vertical === !1 ? (i[o.animType] = "translate(" + t + "px, 0px)",
                                        o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + t + "px)",
                                        o.$slideTrack.css(i))
                            },
                            complete: function() {
                                n && n.call()
                            }
                        })) : (o.applyTransition(),
                        e = Math.ceil(e),
                        o.options.vertical === !1 ? i[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + e + "px, 0px)",
                        o.$slideTrack.css(i),
                    n && setTimeout(function() {
                        o.disableTransition(),
                            n.call()
                    }, o.options.speed))
            }
            ,
            e.prototype.getNavTarget = function() {
                var e = this
                    , n = e.options.asNavFor;
                return n && null !== n && (n = t(n).not(e.$slider)),
                    n
            }
            ,
            e.prototype.asNavFor = function(e) {
                var n = this
                    , i = n.getNavTarget();
                null !== i && "object" == typeof i && i.each(function() {
                    var n = t(this).slick("getSlick");
                    n.unslicked || n.slideHandler(e, !0)
                })
            }
            ,
            e.prototype.applyTransition = function(t) {
                var e = this
                    , n = {};
                e.options.fade === !1 ? n[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : n[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase,
                    e.options.fade === !1 ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
            }
            ,
            e.prototype.autoPlay = function() {
                var t = this;
                t.autoPlayClear(),
                t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
            }
            ,
            e.prototype.autoPlayClear = function() {
                var t = this;
                t.autoPlayTimer && clearInterval(t.autoPlayTimer)
            }
            ,
            e.prototype.autoPlayIterator = function() {
                var t = this
                    , e = t.currentSlide + t.options.slidesToScroll;
                t.paused || t.interrupted || t.focussed || (t.options.infinite === !1 && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll,
                t.currentSlide - 1 === 0 && (t.direction = 1))),
                    t.slideHandler(e))
            }
            ,
            e.prototype.buildArrows = function() {
                var e = this;
                e.options.arrows === !0 && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"),
                    e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"),
                    e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                    e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
                    e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
                    e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                        "aria-disabled": "true",
                        tabindex: "-1"
                    }))
            }
            ,
            e.prototype.buildDots = function() {
                var e, n, i = this;
                if (i.options.dots === !0) {
                    for (i.$slider.addClass("slick-dotted"),
                             n = t("<ul />").addClass(i.options.dotsClass),
                             e = 0; e <= i.getDotCount(); e += 1)
                        n.append(t("<li />").append(i.options.customPaging.call(this, i, e)));
                    i.$dots = n.appendTo(i.options.appendDots),
                        i.$dots.find("li").first().addClass("slick-active")
                }
            }
            ,
            e.prototype.buildOut = function() {
                var e = this;
                e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
                    e.slideCount = e.$slides.length,
                    e.$slides.each(function(e, n) {
                        t(n).attr("data-slick-index", e).data("originalStyling", t(n).attr("style") || "")
                    }),
                    e.$slider.addClass("slick-slider"),
                    e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
                    e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(),
                    e.$slideTrack.css("opacity", 0),
                e.options.centerMode !== !0 && e.options.swipeToSlide !== !0 || (e.options.slidesToScroll = 1),
                    t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
                    e.setupInfinite(),
                    e.buildArrows(),
                    e.buildDots(),
                    e.updateDots(),
                    e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
                e.options.draggable === !0 && e.$list.addClass("draggable")
            }
            ,
            e.prototype.buildRows = function() {
                var t, e, n, i, o, r, s, a = this;
                if (i = document.createDocumentFragment(),
                    r = a.$slider.children(),
                a.options.rows > 1) {
                    for (s = a.options.slidesPerRow * a.options.rows,
                             o = Math.ceil(r.length / s),
                             t = 0; o > t; t++) {
                        var l = document.createElement("div");
                        for (e = 0; e < a.options.rows; e++) {
                            var c = document.createElement("div");
                            for (n = 0; n < a.options.slidesPerRow; n++) {
                                var u = t * s + (e * a.options.slidesPerRow + n);
                                r.get(u) && c.appendChild(r.get(u))
                            }
                            l.appendChild(c)
                        }
                        i.appendChild(l)
                    }
                    a.$slider.empty().append(i),
                        a.$slider.children().children().children().css({
                            width: 100 / a.options.slidesPerRow + "%",
                            display: "inline-block"
                        })
                }
            }
            ,
            e.prototype.checkResponsive = function(e, n) {
                var i, o, r, s = this, a = !1, l = s.$slider.width(), c = window.innerWidth || t(window).width();
                if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)),
                s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                    o = null;
                    for (i in s.breakpoints)
                        s.breakpoints.hasOwnProperty(i) && (s.originalSettings.mobileFirst === !1 ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
                    null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o,
                        "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]),
                        e === !0 && (s.currentSlide = s.options.initialSlide),
                            s.refresh(e)),
                        a = o) : (s.activeBreakpoint = o,
                        "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]),
                        e === !0 && (s.currentSlide = s.options.initialSlide),
                            s.refresh(e)),
                        a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null,
                        s.options = s.originalSettings,
                    e === !0 && (s.currentSlide = s.options.initialSlide),
                        s.refresh(e),
                        a = o),
                    e || a === !1 || s.$slider.trigger("breakpoint", [s, a])
                }
            }
            ,
            e.prototype.changeSlide = function(e, n) {
                var i, o, r, s = this, a = t(e.currentTarget);
                switch (a.is("a") && e.preventDefault(),
                a.is("li") || (a = a.closest("li")),
                    r = s.slideCount % s.options.slidesToScroll !== 0,
                    i = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll,
                    e.data.message) {
                    case "previous":
                        o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i,
                        s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, n);
                        break;
                    case "next":
                        o = 0 === i ? s.options.slidesToScroll : i,
                        s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, n);
                        break;
                    case "index":
                        var l = 0 === e.data.index ? 0 : e.data.index || a.index() * s.options.slidesToScroll;
                        s.slideHandler(s.checkNavigable(l), !1, n),
                            a.children().trigger("focus");
                        break;
                    default:
                        return
                }
            }
            ,
            e.prototype.checkNavigable = function(t) {
                var e, n, i = this;
                if (e = i.getNavigableIndexes(),
                    n = 0,
                t > e[e.length - 1])
                    t = e[e.length - 1];
                else
                    for (var o in e) {
                        if (t < e[o]) {
                            t = n;
                            break
                        }
                        n = e[o]
                    }
                return t
            }
            ,
            e.prototype.cleanUpEvents = function() {
                var e = this;
                e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)),
                e.options.accessibility === !0 && e.$dots.off("keydown.slick", e.keyHandler)),
                    e.$slider.off("focus.slick blur.slick"),
                e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
                e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
                e.options.accessibility === !0 && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
                e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
                    e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
                    e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
                    e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
                    e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
                    e.$list.off("click.slick", e.clickHandler),
                    t(document).off(e.visibilityChange, e.visibility),
                    e.cleanUpSlideEvents(),
                e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler),
                e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler),
                    t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
                    t(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
                    t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
                    t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
            }
            ,
            e.prototype.cleanUpSlideEvents = function() {
                var e = this;
                e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
                    e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
            }
            ,
            e.prototype.cleanUpRows = function() {
                var t, e = this;
                e.options.rows > 1 && (t = e.$slides.children().children(),
                    t.removeAttr("style"),
                    e.$slider.empty().append(t))
            }
            ,
            e.prototype.clickHandler = function(t) {
                var e = this;
                e.shouldClick === !1 && (t.stopImmediatePropagation(),
                    t.stopPropagation(),
                    t.preventDefault())
            }
            ,
            e.prototype.destroy = function(e) {
                var n = this;
                n.autoPlayClear(),
                    n.touchObject = {},
                    n.cleanUpEvents(),
                    t(".slick-cloned", n.$slider).detach(),
                n.$dots && n.$dots.remove(),
                n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
                n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
                n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                    t(this).attr("style", t(this).data("originalStyling"))
                }),
                    n.$slideTrack.children(this.options.slide).detach(),
                    n.$slideTrack.detach(),
                    n.$list.detach(),
                    n.$slider.append(n.$slides)),
                    n.cleanUpRows(),
                    n.$slider.removeClass("slick-slider"),
                    n.$slider.removeClass("slick-initialized"),
                    n.$slider.removeClass("slick-dotted"),
                    n.unslicked = !0,
                e || n.$slider.trigger("destroy", [n])
            }
            ,
            e.prototype.disableTransition = function(t) {
                var e = this
                    , n = {};
                n[e.transitionType] = "",
                    e.options.fade === !1 ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n);
            }
            ,
            e.prototype.fadeSlide = function(t, e) {
                var n = this;
                n.cssTransitions === !1 ? (n.$slides.eq(t).css({
                    zIndex: n.options.zIndex
                }),
                    n.$slides.eq(t).animate({
                        opacity: 1
                    }, n.options.speed, n.options.easing, e)) : (n.applyTransition(t),
                    n.$slides.eq(t).css({
                        opacity: 1,
                        zIndex: n.options.zIndex
                    }),
                e && setTimeout(function() {
                    n.disableTransition(t),
                        e.call()
                }, n.options.speed))
            }
            ,
            e.prototype.fadeSlideOut = function(t) {
                var e = this;
                e.cssTransitions === !1 ? e.$slides.eq(t).animate({
                    opacity: 0,
                    zIndex: e.options.zIndex - 2
                }, e.options.speed, e.options.easing) : (e.applyTransition(t),
                    e.$slides.eq(t).css({
                        opacity: 0,
                        zIndex: e.options.zIndex - 2
                    }))
            }
            ,
            e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
                var e = this;
                null !== t && (e.$slidesCache = e.$slides,
                    e.unload(),
                    e.$slideTrack.children(this.options.slide).detach(),
                    e.$slidesCache.filter(t).appendTo(e.$slideTrack),
                    e.reinit())
            }
            ,
            e.prototype.focusHandler = function() {
                var e = this;
                e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(n) {
                    n.stopImmediatePropagation();
                    var i = t(this);
                    setTimeout(function() {
                        e.options.pauseOnFocus && (e.focussed = i.is(":focus"),
                            e.autoPlay())
                    }, 0)
                })
            }
            ,
            e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
                var t = this;
                return t.currentSlide
            }
            ,
            e.prototype.getDotCount = function() {
                var t = this
                    , e = 0
                    , n = 0
                    , i = 0;
                if (t.options.infinite === !0)
                    if (t.slideCount <= t.options.slidesToShow)
                        ++i;
                    else
                        for (; e < t.slideCount; )
                            ++i,
                                e = n + t.options.slidesToScroll,
                                n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
                else if (t.options.centerMode === !0)
                    i = t.slideCount;
                else if (t.options.asNavFor)
                    for (; e < t.slideCount; )
                        ++i,
                            e = n + t.options.slidesToScroll,
                            n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
                else
                    i = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
                return i - 1
            }
            ,
            e.prototype.getLeft = function(t) {
                var e, n, i, o, r = this, s = 0;
                return r.slideOffset = 0,
                    n = r.$slides.first().outerHeight(!0),
                    r.options.infinite === !0 ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1,
                        o = -1,
                    r.options.vertical === !0 && r.options.centerMode === !0 && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)),
                        s = n * r.options.slidesToShow * o),
                    r.slideCount % r.options.slidesToScroll !== 0 && t + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (t > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (t - r.slideCount)) * r.slideWidth * -1,
                        s = (r.options.slidesToShow - (t - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1,
                        s = r.slideCount % r.options.slidesToScroll * n * -1))) : t + r.options.slidesToShow > r.slideCount && (r.slideOffset = (t + r.options.slidesToShow - r.slideCount) * r.slideWidth,
                        s = (t + r.options.slidesToShow - r.slideCount) * n),
                r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0,
                    s = 0),
                    r.options.centerMode === !0 && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : r.options.centerMode === !0 && r.options.infinite === !0 ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : r.options.centerMode === !0 && (r.slideOffset = 0,
                        r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)),
                    e = r.options.vertical === !1 ? t * r.slideWidth * -1 + r.slideOffset : t * n * -1 + s,
                r.options.variableWidth === !0 && (i = r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow),
                    e = r.options.rtl === !0 ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0,
                r.options.centerMode === !0 && (i = r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow + 1),
                    e = r.options.rtl === !0 ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0,
                    e += (r.$list.width() - i.outerWidth()) / 2)),
                    e
            }
            ,
            e.prototype.getOption = e.prototype.slickGetOption = function(t) {
                var e = this;
                return e.options[t]
            }
            ,
            e.prototype.getNavigableIndexes = function() {
                var t, e = this, n = 0, i = 0, o = [];
                for (e.options.infinite === !1 ? t = e.slideCount : (n = -1 * e.options.slidesToScroll,
                    i = -1 * e.options.slidesToScroll,
                    t = 2 * e.slideCount); t > n; )
                    o.push(n),
                        n = i + e.options.slidesToScroll,
                        i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                return o
            }
            ,
            e.prototype.getSlick = function() {
                return this
            }
            ,
            e.prototype.getSlideCount = function() {
                var e, n, i, o = this;
                return i = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0,
                    o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function(e, r) {
                        return r.offsetLeft - i + t(r).outerWidth() / 2 > -1 * o.swipeLeft ? (n = r,
                            !1) : void 0
                    }),
                        e = Math.abs(t(n).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
            }
            ,
            e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
                var n = this;
                n.changeSlide({
                    data: {
                        message: "index",
                        index: parseInt(t)
                    }
                }, e)
            }
            ,
            e.prototype.init = function(e) {
                var n = this;
                t(n.$slider).hasClass("slick-initialized") || (t(n.$slider).addClass("slick-initialized"),
                    n.buildRows(),
                    n.buildOut(),
                    n.setProps(),
                    n.startLoad(),
                    n.loadSlider(),
                    n.initializeEvents(),
                    n.updateArrows(),
                    n.updateDots(),
                    n.checkResponsive(!0),
                    n.focusHandler()),
                e && n.$slider.trigger("init", [n]),
                n.options.accessibility === !0 && n.initADA(),
                n.options.autoplay && (n.paused = !1,
                    n.autoPlay())
            }
            ,
            e.prototype.initADA = function() {
                var e = this
                    , n = Math.ceil(e.slideCount / e.options.slidesToShow)
                    , i = e.getNavigableIndexes().filter(function(t) {
                    return t >= 0 && t < e.slideCount
                });
                e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                    "aria-hidden": "true",
                    tabindex: "-1"
                }).find("a, input, button, select").attr({
                    tabindex: "-1"
                }),
                null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(n) {
                    var o = i.indexOf(n);
                    t(this).attr({
                        role: "tabpanel",
                        id: "slick-slide" + e.instanceUid + n,
                        tabindex: -1
                    }),
                    -1 !== o && t(this).attr({
                        "aria-describedby": "slick-slide-control" + e.instanceUid + o
                    })
                }),
                    e.$dots.attr("role", "tablist").find("li").each(function(o) {
                        var r = i[o];
                        t(this).attr({
                            role: "presentation"
                        }),
                            t(this).find("button").first().attr({
                                role: "tab",
                                id: "slick-slide-control" + e.instanceUid + o,
                                "aria-controls": "slick-slide" + e.instanceUid + r,
                                "aria-label": o + 1 + " of " + n,
                                "aria-selected": null,
                                tabindex: "-1"
                            })
                    }).eq(e.currentSlide).find("button").attr({
                        "aria-selected": "true",
                        tabindex: "0"
                    }).end());
                for (var o = e.currentSlide, r = o + e.options.slidesToShow; r > o; o++)
                    e.$slides.eq(o).attr("tabindex", 0);
                e.activateADA()
            }
            ,
            e.prototype.initArrowEvents = function() {
                var t = this;
                t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
                    message: "previous"
                }, t.changeSlide),
                    t.$nextArrow.off("click.slick").on("click.slick", {
                        message: "next"
                    }, t.changeSlide),
                t.options.accessibility === !0 && (t.$prevArrow.on("keydown.slick", t.keyHandler),
                    t.$nextArrow.on("keydown.slick", t.keyHandler)))
            }
            ,
            e.prototype.initDotEvents = function() {
                var e = this;
                e.options.dots === !0 && (t("li", e.$dots).on("click.slick", {
                    message: "index"
                }, e.changeSlide),
                e.options.accessibility === !0 && e.$dots.on("keydown.slick", e.keyHandler)),
                e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
            }
            ,
            e.prototype.initSlideEvents = function() {
                var e = this;
                e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
                    e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
            }
            ,
            e.prototype.initializeEvents = function() {
                var e = this;
                e.initArrowEvents(),
                    e.initDotEvents(),
                    e.initSlideEvents(),
                    e.$list.on("touchstart.slick mousedown.slick", {
                        action: "start"
                    }, e.swipeHandler),
                    e.$list.on("touchmove.slick mousemove.slick", {
                        action: "move"
                    }, e.swipeHandler),
                    e.$list.on("touchend.slick mouseup.slick", {
                        action: "end"
                    }, e.swipeHandler),
                    e.$list.on("touchcancel.slick mouseleave.slick", {
                        action: "end"
                    }, e.swipeHandler),
                    e.$list.on("click.slick", e.clickHandler),
                    t(document).on(e.visibilityChange, t.proxy(e.visibility, e)),
                e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler),
                e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
                    t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)),
                    t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)),
                    t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
                    t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
                    t(e.setPosition)
            }
            ,
            e.prototype.initUI = function() {
                var t = this;
                t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(),
                    t.$nextArrow.show()),
                t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show()
            }
            ,
            e.prototype.keyHandler = function(t) {
                var e = this;
                t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({
                    data: {
                        message: e.options.rtl === !0 ? "next" : "previous"
                    }
                }) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({
                    data: {
                        message: e.options.rtl === !0 ? "previous" : "next"
                    }
                }))
            }
            ,
            e.prototype.lazyLoad = function() {
                function e(e) {
                    t("img[data-lazy]", e).each(function() {
                        var e = t(this)
                            , n = t(this).attr("data-lazy")
                            , i = t(this).attr("data-srcset")
                            , o = t(this).attr("data-sizes") || s.$slider.attr("data-sizes")
                            , r = document.createElement("img");
                        r.onload = function() {
                            e.animate({
                                opacity: 0
                            }, 100, function() {
                                i && (e.attr("srcset", i),
                                o && e.attr("sizes", o)),
                                    e.attr("src", n).animate({
                                        opacity: 1
                                    }, 200, function() {
                                        e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                                    }),
                                    s.$slider.trigger("lazyLoaded", [s, e, n])
                            })
                        }
                            ,
                            r.onerror = function() {
                                e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                                    s.$slider.trigger("lazyLoadError", [s, e, n])
                            }
                            ,
                            r.src = n
                    })
                }
                var n, i, o, r, s = this;
                if (s.options.centerMode === !0 ? s.options.infinite === !0 ? (o = s.currentSlide + (s.options.slidesToShow / 2 + 1),
                    r = o + s.options.slidesToShow + 2) : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)),
                    r = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide,
                    r = Math.ceil(o + s.options.slidesToShow),
                s.options.fade === !0 && (o > 0 && o--,
                r <= s.slideCount && r++)),
                    n = s.$slider.find(".slick-slide").slice(o, r),
                "anticipated" === s.options.lazyLoad)
                    for (var a = o - 1, l = r, c = s.$slider.find(".slick-slide"), u = 0; u < s.options.slidesToScroll; u++)
                        0 > a && (a = s.slideCount - 1),
                            n = n.add(c.eq(a)),
                            n = n.add(c.eq(l)),
                            a--,
                            l++;
                e(n),
                    s.slideCount <= s.options.slidesToShow ? (i = s.$slider.find(".slick-slide"),
                        e(i)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (i = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow),
                        e(i)) : 0 === s.currentSlide && (i = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow),
                        e(i))
            }
            ,
            e.prototype.loadSlider = function() {
                var t = this;
                t.setPosition(),
                    t.$slideTrack.css({
                        opacity: 1
                    }),
                    t.$slider.removeClass("slick-loading"),
                    t.initUI(),
                "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
            }
            ,
            e.prototype.next = e.prototype.slickNext = function() {
                var t = this;
                t.changeSlide({
                    data: {
                        message: "next"
                    }
                })
            }
            ,
            e.prototype.orientationChange = function() {
                var t = this;
                t.checkResponsive(),
                    t.setPosition()
            }
            ,
            e.prototype.pause = e.prototype.slickPause = function() {
                var t = this;
                t.autoPlayClear(),
                    t.paused = !0
            }
            ,
            e.prototype.play = e.prototype.slickPlay = function() {
                var t = this;
                t.autoPlay(),
                    t.options.autoplay = !0,
                    t.paused = !1,
                    t.focussed = !1,
                    t.interrupted = !1
            }
            ,
            e.prototype.postSlide = function(e) {
                var n = this;
                if (!n.unslicked && (n.$slider.trigger("afterChange", [n, e]),
                    n.animating = !1,
                n.slideCount > n.options.slidesToShow && n.setPosition(),
                    n.swipeLeft = null,
                n.options.autoplay && n.autoPlay(),
                n.options.accessibility === !0 && (n.initADA(),
                    n.options.focusOnChange))) {
                    var i = t(n.$slides.get(n.currentSlide));
                    i.attr("tabindex", 0).focus()
                }
            }
            ,
            e.prototype.prev = e.prototype.slickPrev = function() {
                var t = this;
                t.changeSlide({
                    data: {
                        message: "previous"
                    }
                })
            }
            ,
            e.prototype.preventDefault = function(t) {
                t.preventDefault()
            }
            ,
            e.prototype.progressiveLazyLoad = function(e) {
                e = e || 1;
                var n, i, o, r, s, a = this, l = t("img[data-lazy]", a.$slider);
                l.length ? (n = l.first(),
                    i = n.attr("data-lazy"),
                    o = n.attr("data-srcset"),
                    r = n.attr("data-sizes") || a.$slider.attr("data-sizes"),
                    s = document.createElement("img"),
                    s.onload = function() {
                        o && (n.attr("srcset", o),
                        r && n.attr("sizes", r)),
                            n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                        a.options.adaptiveHeight === !0 && a.setPosition(),
                            a.$slider.trigger("lazyLoaded", [a, n, i]),
                            a.progressiveLazyLoad()
                    }
                    ,
                    s.onerror = function() {
                        3 > e ? setTimeout(function() {
                            a.progressiveLazyLoad(e + 1)
                        }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                            a.$slider.trigger("lazyLoadError", [a, n, i]),
                            a.progressiveLazyLoad())
                    }
                    ,
                    s.src = i) : a.$slider.trigger("allImagesLoaded", [a])
            }
            ,
            e.prototype.refresh = function(e) {
                var n, i, o = this;
                i = o.slideCount - o.options.slidesToShow,
                !o.options.infinite && o.currentSlide > i && (o.currentSlide = i),
                o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
                    n = o.currentSlide,
                    o.destroy(!0),
                    t.extend(o, o.initials, {
                        currentSlide: n
                    }),
                    o.init(),
                e || o.changeSlide({
                    data: {
                        message: "index",
                        index: n
                    }
                }, !1)
            }
            ,
            e.prototype.registerBreakpoints = function() {
                var e, n, i, o = this, r = o.options.responsive || null;
                if ("array" === t.type(r) && r.length) {
                    o.respondTo = o.options.respondTo || "window";
                    for (e in r)
                        if (i = o.breakpoints.length - 1,
                            r.hasOwnProperty(e)) {
                            for (n = r[e].breakpoint; i >= 0; )
                                o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1),
                                    i--;
                            o.breakpoints.push(n),
                                o.breakpointSettings[n] = r[e].settings
                        }
                    o.breakpoints.sort(function(t, e) {
                        return o.options.mobileFirst ? t - e : e - t
                    })
                }
            }
            ,
            e.prototype.reinit = function() {
                var e = this;
                e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
                    e.slideCount = e.$slides.length,
                e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
                e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                    e.registerBreakpoints(),
                    e.setProps(),
                    e.setupInfinite(),
                    e.buildArrows(),
                    e.updateArrows(),
                    e.initArrowEvents(),
                    e.buildDots(),
                    e.updateDots(),
                    e.initDotEvents(),
                    e.cleanUpSlideEvents(),
                    e.initSlideEvents(),
                    e.checkResponsive(!1, !0),
                e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
                    e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
                    e.setPosition(),
                    e.focusHandler(),
                    e.paused = !e.options.autoplay,
                    e.autoPlay(),
                    e.$slider.trigger("reInit", [e])
            }
            ,
            e.prototype.resize = function() {
                var e = this;
                t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
                    e.windowDelay = window.setTimeout(function() {
                        e.windowWidth = t(window).width(),
                            e.checkResponsive(),
                        e.unslicked || e.setPosition()
                    }, 50))
            }
            ,
            e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, n) {
                var i = this;
                return "boolean" == typeof t ? (e = t,
                    t = e === !0 ? 0 : i.slideCount - 1) : t = e === !0 ? --t : t,
                    i.slideCount < 1 || 0 > t || t > i.slideCount - 1 ? !1 : (i.unload(),
                        n === !0 ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(t).remove(),
                        i.$slides = i.$slideTrack.children(this.options.slide),
                        i.$slideTrack.children(this.options.slide).detach(),
                        i.$slideTrack.append(i.$slides),
                        i.$slidesCache = i.$slides,
                        void i.reinit())
            }
            ,
            e.prototype.setCSS = function(t) {
                var e, n, i = this, o = {};
                i.options.rtl === !0 && (t = -t),
                    e = "left" == i.positionProp ? Math.ceil(t) + "px" : "0px",
                    n = "top" == i.positionProp ? Math.ceil(t) + "px" : "0px",
                    o[i.positionProp] = t,
                    i.transformsEnabled === !1 ? i.$slideTrack.css(o) : (o = {},
                        i.cssTransitions === !1 ? (o[i.animType] = "translate(" + e + ", " + n + ")",
                            i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + e + ", " + n + ", 0px)",
                            i.$slideTrack.css(o)))
            }
            ,
            e.prototype.setDimensions = function() {
                var t = this;
                t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
                    padding: "0px " + t.options.centerPadding
                }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow),
                t.options.centerMode === !0 && t.$list.css({
                    padding: t.options.centerPadding + " 0px"
                })),
                    t.listWidth = t.$list.width(),
                    t.listHeight = t.$list.height(),
                    t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow),
                        t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth),
                        t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
                var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
                t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
            }
            ,
            e.prototype.setFade = function() {
                var e, n = this;
                n.$slides.each(function(i, o) {
                    e = n.slideWidth * i * -1,
                        n.options.rtl === !0 ? t(o).css({
                            position: "relative",
                            right: e,
                            top: 0,
                            zIndex: n.options.zIndex - 2,
                            opacity: 0
                        }) : t(o).css({
                            position: "relative",
                            left: e,
                            top: 0,
                            zIndex: n.options.zIndex - 2,
                            opacity: 0
                        })
                }),
                    n.$slides.eq(n.currentSlide).css({
                        zIndex: n.options.zIndex - 1,
                        opacity: 1
                    })
            }
            ,
            e.prototype.setHeight = function() {
                var t = this;
                if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                    var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                    t.$list.css("height", e)
                }
            }
            ,
            e.prototype.setOption = e.prototype.slickSetOption = function() {
                var e, n, i, o, r, s = this, a = !1;
                if ("object" === t.type(arguments[0]) ? (i = arguments[0],
                    a = arguments[1],
                    r = "multiple") : "string" === t.type(arguments[0]) && (i = arguments[0],
                    o = arguments[1],
                    a = arguments[2],
                    "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? r = "responsive" : "undefined" != typeof arguments[1] && (r = "single")),
                "single" === r)
                    s.options[i] = o;
                else if ("multiple" === r)
                    t.each(i, function(t, e) {
                        s.options[t] = e
                    });
                else if ("responsive" === r)
                    for (n in o)
                        if ("array" !== t.type(s.options.responsive))
                            s.options.responsive = [o[n]];
                        else {
                            for (e = s.options.responsive.length - 1; e >= 0; )
                                s.options.responsive[e].breakpoint === o[n].breakpoint && s.options.responsive.splice(e, 1),
                                    e--;
                            s.options.responsive.push(o[n])
                        }
                a && (s.unload(),
                    s.reinit())
            }
            ,
            e.prototype.setPosition = function() {
                var t = this;
                t.setDimensions(),
                    t.setHeight(),
                    t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(),
                    t.$slider.trigger("setPosition", [t])
            }
            ,
            e.prototype.setProps = function() {
                var t = this
                    , e = document.body.style;
                t.positionProp = t.options.vertical === !0 ? "top" : "left",
                    "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"),
                void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || t.options.useCSS === !0 && (t.cssTransitions = !0),
                t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex),
                void 0 !== e.OTransform && (t.animType = "OTransform",
                    t.transformType = "-o-transform",
                    t.transitionType = "OTransition",
                void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
                void 0 !== e.MozTransform && (t.animType = "MozTransform",
                    t.transformType = "-moz-transform",
                    t.transitionType = "MozTransition",
                void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)),
                void 0 !== e.webkitTransform && (t.animType = "webkitTransform",
                    t.transformType = "-webkit-transform",
                    t.transitionType = "webkitTransition",
                void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
                void 0 !== e.msTransform && (t.animType = "msTransform",
                    t.transformType = "-ms-transform",
                    t.transitionType = "msTransition",
                void 0 === e.msTransform && (t.animType = !1)),
                void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform",
                    t.transformType = "transform",
                    t.transitionType = "transition"),
                    t.transformsEnabled = t.options.useTransform && null !== t.animType && t.animType !== !1
            }
            ,
            e.prototype.setSlideClasses = function(t) {
                var e, n, i, o, r = this;
                if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
                    r.$slides.eq(t).addClass("slick-current"),
                r.options.centerMode === !0) {
                    var s = r.options.slidesToShow % 2 === 0 ? 1 : 0;
                    e = Math.floor(r.options.slidesToShow / 2),
                    r.options.infinite === !0 && (t >= e && t <= r.slideCount - 1 - e ? r.$slides.slice(t - e + s, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + t,
                        n.slice(i - e + 1 + s, i + e + 2).addClass("slick-active").attr("aria-hidden", "false")),
                        0 === t ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : t === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")),
                        r.$slides.eq(t).addClass("slick-center")
                } else
                    t >= 0 && t <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(t, t + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow,
                        i = r.options.infinite === !0 ? r.options.slidesToShow + t : t,
                        r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - t < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
                "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
            }
            ,
            e.prototype.setupInfinite = function() {
                var e, n, i, o = this;
                if (o.options.fade === !0 && (o.options.centerMode = !1),
                o.options.infinite === !0 && o.options.fade === !1 && (n = null,
                o.slideCount > o.options.slidesToShow)) {
                    for (i = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow,
                             e = o.slideCount; e > o.slideCount - i; e -= 1)
                        n = e - 1,
                            t(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                    for (e = 0; e < i + o.slideCount; e += 1)
                        n = e,
                            t(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                    o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                        t(this).attr("id", "")
                    })
                }
            }
            ,
            e.prototype.interrupt = function(t) {
                var e = this;
                t || e.autoPlay(),
                    e.interrupted = t
            }
            ,
            e.prototype.selectHandler = function(e) {
                var n = this
                    , i = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide")
                    , o = parseInt(i.attr("data-slick-index"));
                return o || (o = 0),
                    n.slideCount <= n.options.slidesToShow ? void n.slideHandler(o, !1, !0) : void n.slideHandler(o)
            }
            ,
            e.prototype.slideHandler = function(t, e, n) {
                var i, o, r, s, a, l = null, c = this;
                return e = e || !1,
                    c.animating === !0 && c.options.waitForAnimate === !0 || c.options.fade === !0 && c.currentSlide === t ? void 0 : (e === !1 && c.asNavFor(t),
                        i = t,
                        l = c.getLeft(i),
                        s = c.getLeft(c.currentSlide),
                        c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft,
                        c.options.infinite === !1 && c.options.centerMode === !1 && (0 > t || t > c.getDotCount() * c.options.slidesToScroll) ? void (c.options.fade === !1 && (i = c.currentSlide,
                            n !== !0 ? c.animateSlide(s, function() {
                                c.postSlide(i)
                            }) : c.postSlide(i))) : c.options.infinite === !1 && c.options.centerMode === !0 && (0 > t || t > c.slideCount - c.options.slidesToScroll) ? void (c.options.fade === !1 && (i = c.currentSlide,
                            n !== !0 ? c.animateSlide(s, function() {
                                c.postSlide(i)
                            }) : c.postSlide(i))) : (c.options.autoplay && clearInterval(c.autoPlayTimer),
                            o = 0 > i ? c.slideCount % c.options.slidesToScroll !== 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll !== 0 ? 0 : i - c.slideCount : i,
                            c.animating = !0,
                            c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
                            r = c.currentSlide,
                            c.currentSlide = o,
                            c.setSlideClasses(c.currentSlide),
                        c.options.asNavFor && (a = c.getNavTarget(),
                            a = a.slick("getSlick"),
                        a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)),
                            c.updateDots(),
                            c.updateArrows(),
                            c.options.fade === !0 ? (n !== !0 ? (c.fadeSlideOut(r),
                                c.fadeSlide(o, function() {
                                    c.postSlide(o)
                                })) : c.postSlide(o),
                                void c.animateHeight()) : void (n !== !0 ? c.animateSlide(l, function() {
                                c.postSlide(o)
                            }) : c.postSlide(o))))
            }
            ,
            e.prototype.startLoad = function() {
                var t = this;
                t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(),
                    t.$nextArrow.hide()),
                t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(),
                    t.$slider.addClass("slick-loading")
            }
            ,
            e.prototype.swipeDirection = function() {
                var t, e, n, i, o = this;
                return t = o.touchObject.startX - o.touchObject.curX,
                    e = o.touchObject.startY - o.touchObject.curY,
                    n = Math.atan2(e, t),
                    i = Math.round(180 * n / Math.PI),
                0 > i && (i = 360 - Math.abs(i)),
                    45 >= i && i >= 0 ? o.options.rtl === !1 ? "left" : "right" : 360 >= i && i >= 315 ? o.options.rtl === !1 ? "left" : "right" : i >= 135 && 225 >= i ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? i >= 35 && 135 >= i ? "down" : "up" : "vertical"
            }
            ,
            e.prototype.swipeEnd = function() {
                var t, e, n = this;
                if (n.dragging = !1,
                    n.swiping = !1,
                    n.scrolling)
                    return n.scrolling = !1,
                        !1;
                if (n.interrupted = !1,
                    n.shouldClick = !(n.touchObject.swipeLength > 10),
                void 0 === n.touchObject.curX)
                    return !1;
                if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]),
                n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                    switch (e = n.swipeDirection()) {
                        case "left":
                        case "down":
                            t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(),
                                n.currentDirection = 0;
                            break;
                        case "right":
                        case "up":
                            t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(),
                                n.currentDirection = 1
                    }
                    "vertical" != e && (n.slideHandler(t),
                        n.touchObject = {},
                        n.$slider.trigger("swipe", [n, e]))
                } else
                    n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide),
                        n.touchObject = {})
            }
            ,
            e.prototype.swipeHandler = function(t) {
                var e = this;
                if (!(e.options.swipe === !1 || "ontouchend"in document && e.options.swipe === !1 || e.options.draggable === !1 && -1 !== t.type.indexOf("mouse")))
                    switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1,
                        e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
                    e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
                        t.data.action) {
                        case "start":
                            e.swipeStart(t);
                            break;
                        case "move":
                            e.swipeMove(t);
                            break;
                        case "end":
                            e.swipeEnd(t)
                    }
            }
            ,
            e.prototype.swipeMove = function(t) {
                var e, n, i, o, r, s, a = this;
                return r = void 0 !== t.originalEvent ? t.originalEvent.touches : null,
                    !a.dragging || a.scrolling || r && 1 !== r.length ? !1 : (e = a.getLeft(a.currentSlide),
                        a.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX,
                        a.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY,
                        a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))),
                        s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))),
                        !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0,
                            !1) : (a.options.verticalSwiping === !0 && (a.touchObject.swipeLength = s),
                            n = a.swipeDirection(),
                        void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0,
                            t.preventDefault()),
                            o = (a.options.rtl === !1 ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1),
                        a.options.verticalSwiping === !0 && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                            i = a.touchObject.swipeLength,
                            a.touchObject.edgeHit = !1,
                        a.options.infinite === !1 && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction,
                            a.touchObject.edgeHit = !0),
                            a.options.vertical === !1 ? a.swipeLeft = e + i * o : a.swipeLeft = e + i * (a.$list.height() / a.listWidth) * o,
                        a.options.verticalSwiping === !0 && (a.swipeLeft = e + i * o),
                            a.options.fade === !0 || a.options.touchMove === !1 ? !1 : a.animating === !0 ? (a.swipeLeft = null,
                                !1) : void a.setCSS(a.swipeLeft)))
            }
            ,
            e.prototype.swipeStart = function(t) {
                var e, n = this;
                return n.interrupted = !0,
                    1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {},
                        !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]),
                        n.touchObject.startX = n.touchObject.curX = void 0 !== e ? e.pageX : t.clientX,
                        n.touchObject.startY = n.touchObject.curY = void 0 !== e ? e.pageY : t.clientY,
                        void (n.dragging = !0))
            }
            ,
            e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
                var t = this;
                null !== t.$slidesCache && (t.unload(),
                    t.$slideTrack.children(this.options.slide).detach(),
                    t.$slidesCache.appendTo(t.$slideTrack),
                    t.reinit())
            }
            ,
            e.prototype.unload = function() {
                var e = this;
                t(".slick-cloned", e.$slider).remove(),
                e.$dots && e.$dots.remove(),
                e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
                e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
                    e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
            }
            ,
            e.prototype.unslick = function(t) {
                var e = this;
                e.$slider.trigger("unslick", [e, t]),
                    e.destroy()
            }
            ,
            e.prototype.updateArrows = function() {
                var t, e = this;
                t = Math.floor(e.options.slidesToShow / 2),
                e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                    e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                    0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                        e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                        e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
            }
            ,
            e.prototype.updateDots = function() {
                var t = this;
                null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(),
                    t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
            }
            ,
            e.prototype.visibility = function() {
                var t = this;
                t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
            }
            ,
            t.fn.slick = function() {
                var t, n, i = this, o = arguments[0], r = Array.prototype.slice.call(arguments, 1), s = i.length;
                for (t = 0; s > t; t++)
                    if ("object" == typeof o || "undefined" == typeof o ? i[t].slick = new e(i[t],o) : n = i[t].slick[o].apply(i[t].slick, r),
                    "undefined" != typeof n)
                        return n;
                return i
            }
    }),
    function() {
        var t = this
            , e = t._
            , n = {}
            , i = Array.prototype
            , o = Object.prototype
            , r = Function.prototype
            , s = i.push
            , a = i.slice
            , l = i.concat
            , c = o.toString
            , u = o.hasOwnProperty
            , d = i.forEach
            , p = i.map
            , h = i.reduce
            , f = i.reduceRight
            , m = i.filter
            , v = i.every
            , g = i.some
            , y = i.indexOf
            , b = i.lastIndexOf
            , w = Array.isArray
            , x = Object.keys
            , k = r.bind
            , C = function(t) {
            return t instanceof C ? t : this instanceof C ? void (this._wrapped = t) : new C(t)
        };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = C),
            exports._ = C) : t._ = C,
            C.VERSION = "1.6.0";
        var T = C.each = C.forEach = function(t, e, i) {
                if (null == t)
                    return t;
                if (d && t.forEach === d)
                    t.forEach(e, i);
                else if (t.length === +t.length) {
                    for (var o = 0, r = t.length; r > o; o++)
                        if (e.call(i, t[o], o, t) === n)
                            return
                } else
                    for (var s = C.keys(t), o = 0, r = s.length; r > o; o++)
                        if (e.call(i, t[s[o]], s[o], t) === n)
                            return;
                return t
            }
        ;
        C.map = C.collect = function(t, e, n) {
            var i = [];
            return null == t ? i : p && t.map === p ? t.map(e, n) : (T(t, function(t, o, r) {
                i.push(e.call(n, t, o, r))
            }),
                i)
        }
        ;
        var _ = "Reduce of empty array with no initial value";
        C.reduce = C.foldl = C.inject = function(t, e, n, i) {
            var o = arguments.length > 2;
            if (null == t && (t = []),
            h && t.reduce === h)
                return i && (e = C.bind(e, i)),
                    o ? t.reduce(e, n) : t.reduce(e);
            if (T(t, function(t, r, s) {
                o ? n = e.call(i, n, t, r, s) : (n = t,
                    o = !0)
            }),
                !o)
                throw new TypeError(_);
            return n
        }
            ,
            C.reduceRight = C.foldr = function(t, e, n, i) {
                var o = arguments.length > 2;
                if (null == t && (t = []),
                f && t.reduceRight === f)
                    return i && (e = C.bind(e, i)),
                        o ? t.reduceRight(e, n) : t.reduceRight(e);
                var r = t.length;
                if (r !== +r) {
                    var s = C.keys(t);
                    r = s.length
                }
                if (T(t, function(a, l, c) {
                    l = s ? s[--r] : --r,
                        o ? n = e.call(i, n, t[l], l, c) : (n = t[l],
                            o = !0)
                }),
                    !o)
                    throw new TypeError(_);
                return n
            }
            ,
            C.find = C.detect = function(t, e, n) {
                var i;
                return S(t, function(t, o, r) {
                    return e.call(n, t, o, r) ? (i = t,
                        !0) : void 0
                }),
                    i
            }
            ,
            C.filter = C.select = function(t, e, n) {
                var i = [];
                return null == t ? i : m && t.filter === m ? t.filter(e, n) : (T(t, function(t, o, r) {
                    e.call(n, t, o, r) && i.push(t)
                }),
                    i)
            }
            ,
            C.reject = function(t, e, n) {
                return C.filter(t, function(t, i, o) {
                    return !e.call(n, t, i, o)
                }, n)
            }
            ,
            C.every = C.all = function(t, e, i) {
                e || (e = C.identity);
                var o = !0;
                return null == t ? o : v && t.every === v ? t.every(e, i) : (T(t, function(t, r, s) {
                    return (o = o && e.call(i, t, r, s)) ? void 0 : n
                }),
                    !!o)
            }
        ;
        var S = C.some = C.any = function(t, e, i) {
                e || (e = C.identity);
                var o = !1;
                return null == t ? o : g && t.some === g ? t.some(e, i) : (T(t, function(t, r, s) {
                    return o || (o = e.call(i, t, r, s)) ? n : void 0
                }),
                    !!o)
            }
        ;
        C.contains = C.include = function(t, e) {
            return null == t ? !1 : y && t.indexOf === y ? -1 != t.indexOf(e) : S(t, function(t) {
                return t === e
            })
        }
            ,
            C.invoke = function(t, e) {
                var n = a.call(arguments, 2)
                    , i = C.isFunction(e);
                return C.map(t, function(t) {
                    return (i ? e : t[e]).apply(t, n)
                })
            }
            ,
            C.pluck = function(t, e) {
                return C.map(t, C.property(e))
            }
            ,
            C.where = function(t, e) {
                return C.filter(t, C.matches(e))
            }
            ,
            C.findWhere = function(t, e) {
                return C.find(t, C.matches(e))
            }
            ,
            C.max = function(t, e, n) {
                if (!e && C.isArray(t) && t[0] === +t[0] && t.length < 65535)
                    return Math.max.apply(Math, t);
                var i = -(1 / 0)
                    , o = -(1 / 0);
                return T(t, function(t, r, s) {
                    var a = e ? e.call(n, t, r, s) : t;
                    a > o && (i = t,
                        o = a)
                }),
                    i
            }
            ,
            C.min = function(t, e, n) {
                if (!e && C.isArray(t) && t[0] === +t[0] && t.length < 65535)
                    return Math.min.apply(Math, t);
                var i = 1 / 0
                    , o = 1 / 0;
                return T(t, function(t, r, s) {
                    var a = e ? e.call(n, t, r, s) : t;
                    o > a && (i = t,
                        o = a)
                }),
                    i
            }
            ,
            C.shuffle = function(t) {
                var e, n = 0, i = [];
                return T(t, function(t) {
                    e = C.random(n++),
                        i[n - 1] = i[e],
                        i[e] = t
                }),
                    i
            }
            ,
            C.sample = function(t, e, n) {
                return null == e || n ? (t.length !== +t.length && (t = C.values(t)),
                    t[C.random(t.length - 1)]) : C.shuffle(t).slice(0, Math.max(0, e))
            }
        ;
        var $ = function(t) {
            return null == t ? C.identity : C.isFunction(t) ? t : C.property(t)
        };
        C.sortBy = function(t, e, n) {
            return e = $(e),
                C.pluck(C.map(t, function(t, i, o) {
                    return {
                        value: t,
                        index: i,
                        criteria: e.call(n, t, i, o)
                    }
                }).sort(function(t, e) {
                    var n = t.criteria
                        , i = e.criteria;
                    if (n !== i) {
                        if (n > i || void 0 === n)
                            return 1;
                        if (i > n || void 0 === i)
                            return -1;
                    }
                    return t.index - e.index
                }), "value")
        }
        ;
        var E = function(t) {
            return function(e, n, i) {
                var o = {};
                return n = $(n),
                    T(e, function(r, s) {
                        var a = n.call(i, r, s, e);
                        t(o, a, r)
                    }),
                    o
            }
        };
        C.groupBy = E(function(t, e, n) {
            C.has(t, e) ? t[e].push(n) : t[e] = [n]
        }),
            C.indexBy = E(function(t, e, n) {
                t[e] = n
            }),
            C.countBy = E(function(t, e) {
                C.has(t, e) ? t[e]++ : t[e] = 1
            }),
            C.sortedIndex = function(t, e, n, i) {
                n = $(n);
                for (var o = n.call(i, e), r = 0, s = t.length; s > r; ) {
                    var a = r + s >>> 1;
                    n.call(i, t[a]) < o ? r = a + 1 : s = a
                }
                return r
            }
            ,
            C.toArray = function(t) {
                return t ? C.isArray(t) ? a.call(t) : t.length === +t.length ? C.map(t, C.identity) : C.values(t) : []
            }
            ,
            C.size = function(t) {
                return null == t ? 0 : t.length === +t.length ? t.length : C.keys(t).length
            }
            ,
            C.first = C.head = C.take = function(t, e, n) {
                return null != t ? null == e || n ? t[0] : 0 > e ? [] : a.call(t, 0, e) : void 0
            }
            ,
            C.initial = function(t, e, n) {
                return a.call(t, 0, t.length - (null == e || n ? 1 : e))
            }
            ,
            C.last = function(t, e, n) {
                return null != t ? null == e || n ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0)) : void 0
            }
            ,
            C.rest = C.tail = C.drop = function(t, e, n) {
                return a.call(t, null == e || n ? 1 : e)
            }
            ,
            C.compact = function(t) {
                return C.filter(t, C.identity)
            }
        ;
        var A = function(t, e, n) {
            return e && C.every(t, C.isArray) ? l.apply(n, t) : (T(t, function(t) {
                C.isArray(t) || C.isArguments(t) ? e ? s.apply(n, t) : A(t, e, n) : n.push(t)
            }),
                n)
        };
        C.flatten = function(t, e) {
            return A(t, e, [])
        }
            ,
            C.without = function(t) {
                return C.difference(t, a.call(arguments, 1))
            }
            ,
            C.partition = function(t, e) {
                var n = []
                    , i = [];
                return T(t, function(t) {
                    (e(t) ? n : i).push(t)
                }),
                    [n, i]
            }
            ,
            C.uniq = C.unique = function(t, e, n, i) {
                C.isFunction(e) && (i = n,
                    n = e,
                    e = !1);
                var o = n ? C.map(t, n, i) : t
                    , r = []
                    , s = [];
                return T(o, function(n, i) {
                    (e ? i && s[s.length - 1] === n : C.contains(s, n)) || (s.push(n),
                        r.push(t[i]))
                }),
                    r
            }
            ,
            C.union = function() {
                return C.uniq(C.flatten(arguments, !0))
            }
            ,
            C.intersection = function(t) {
                var e = a.call(arguments, 1);
                return C.filter(C.uniq(t), function(t) {
                    return C.every(e, function(e) {
                        return C.contains(e, t)
                    })
                })
            }
            ,
            C.difference = function(t) {
                var e = l.apply(i, a.call(arguments, 1));
                return C.filter(t, function(t) {
                    return !C.contains(e, t)
                })
            }
            ,
            C.zip = function() {
                for (var t = C.max(C.pluck(arguments, "length").concat(0)), e = new Array(t), n = 0; t > n; n++)
                    e[n] = C.pluck(arguments, "" + n);
                return e
            }
            ,
            C.object = function(t, e) {
                if (null == t)
                    return {};
                for (var n = {}, i = 0, o = t.length; o > i; i++)
                    e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
                return n
            }
            ,
            C.indexOf = function(t, e, n) {
                if (null == t)
                    return -1;
                var i = 0
                    , o = t.length;
                if (n) {
                    if ("number" != typeof n)
                        return i = C.sortedIndex(t, e),
                            t[i] === e ? i : -1;
                    i = 0 > n ? Math.max(0, o + n) : n
                }
                if (y && t.indexOf === y)
                    return t.indexOf(e, n);
                for (; o > i; i++)
                    if (t[i] === e)
                        return i;
                return -1
            }
            ,
            C.lastIndexOf = function(t, e, n) {
                if (null == t)
                    return -1;
                var i = null != n;
                if (b && t.lastIndexOf === b)
                    return i ? t.lastIndexOf(e, n) : t.lastIndexOf(e);
                for (var o = i ? n : t.length; o--; )
                    if (t[o] === e)
                        return o;
                return -1
            }
            ,
            C.range = function(t, e, n) {
                arguments.length <= 1 && (e = t || 0,
                    t = 0),
                    n = arguments[2] || 1;
                for (var i = Math.max(Math.ceil((e - t) / n), 0), o = 0, r = new Array(i); i > o; )
                    r[o++] = t,
                        t += n;
                return r
            }
        ;
        var I = function() {};
        C.bind = function(t, e) {
            var n, i;
            if (k && t.bind === k)
                return k.apply(t, a.call(arguments, 1));
            if (!C.isFunction(t))
                throw new TypeError;
            return n = a.call(arguments, 2),
                i = function() {
                    if (!(this instanceof i))
                        return t.apply(e, n.concat(a.call(arguments)));
                    I.prototype = t.prototype;
                    var o = new I;
                    I.prototype = null;
                    var r = t.apply(o, n.concat(a.call(arguments)));
                    return Object(r) === r ? r : o
                }
        }
            ,
            C.partial = function(t) {
                var e = a.call(arguments, 1);
                return function() {
                    for (var n = 0, i = e.slice(), o = 0, r = i.length; r > o; o++)
                        i[o] === C && (i[o] = arguments[n++]);
                    for (; n < arguments.length; )
                        i.push(arguments[n++]);
                    return t.apply(this, i)
                }
            }
            ,
            C.bindAll = function(t) {
                var e = a.call(arguments, 1);
                if (0 === e.length)
                    throw new Error("bindAll must be passed function names");
                return T(e, function(e) {
                    t[e] = C.bind(t[e], t)
                }),
                    t
            }
            ,
            C.memoize = function(t, e) {
                var n = {};
                return e || (e = C.identity),
                    function() {
                        var i = e.apply(this, arguments);
                        return C.has(n, i) ? n[i] : n[i] = t.apply(this, arguments)
                    }
            }
            ,
            C.delay = function(t, e) {
                var n = a.call(arguments, 2);
                return setTimeout(function() {
                    return t.apply(null, n)
                }, e)
            }
            ,
            C.defer = function(t) {
                return C.delay.apply(C, [t, 1].concat(a.call(arguments, 1)))
            }
            ,
            C.throttle = function(t, e, n) {
                var i, o, r, s = null, a = 0;
                n || (n = {});
                var l = function() {
                    a = n.leading === !1 ? 0 : C.now(),
                        s = null,
                        r = t.apply(i, o),
                        i = o = null
                };
                return function() {
                    var c = C.now();
                    a || n.leading !== !1 || (a = c);
                    var u = e - (c - a);
                    return i = this,
                        o = arguments,
                        0 >= u ? (clearTimeout(s),
                            s = null,
                            a = c,
                            r = t.apply(i, o),
                            i = o = null) : s || n.trailing === !1 || (s = setTimeout(l, u)),
                        r
                }
            }
            ,
            C.debounce = function(t, e, n) {
                var i, o, r, s, a, l = function() {
                    var c = C.now() - s;
                    e > c ? i = setTimeout(l, e - c) : (i = null,
                    n || (a = t.apply(r, o),
                        r = o = null))
                };
                return function() {
                    r = this,
                        o = arguments,
                        s = C.now();
                    var c = n && !i;
                    return i || (i = setTimeout(l, e)),
                    c && (a = t.apply(r, o),
                        r = o = null),
                        a
                }
            }
            ,
            C.once = function(t) {
                var e, n = !1;
                return function() {
                    return n ? e : (n = !0,
                        e = t.apply(this, arguments),
                        t = null,
                        e)
                }
            }
            ,
            C.wrap = function(t, e) {
                return C.partial(e, t)
            }
            ,
            C.compose = function() {
                var t = arguments;
                return function() {
                    for (var e = arguments, n = t.length - 1; n >= 0; n--)
                        e = [t[n].apply(this, e)];
                    return e[0]
                }
            }
            ,
            C.after = function(t, e) {
                return function() {
                    return --t < 1 ? e.apply(this, arguments) : void 0
                }
            }
            ,
            C.keys = function(t) {
                if (!C.isObject(t))
                    return [];
                if (x)
                    return x(t);
                var e = [];
                for (var n in t)
                    C.has(t, n) && e.push(n);
                return e
            }
            ,
            C.values = function(t) {
                for (var e = C.keys(t), n = e.length, i = new Array(n), o = 0; n > o; o++)
                    i[o] = t[e[o]];
                return i
            }
            ,
            C.pairs = function(t) {
                for (var e = C.keys(t), n = e.length, i = new Array(n), o = 0; n > o; o++)
                    i[o] = [e[o], t[e[o]]];
                return i
            }
            ,
            C.invert = function(t) {
                for (var e = {}, n = C.keys(t), i = 0, o = n.length; o > i; i++)
                    e[t[n[i]]] = n[i];
                return e
            }
            ,
            C.functions = C.methods = function(t) {
                var e = [];
                for (var n in t)
                    C.isFunction(t[n]) && e.push(n);
                return e.sort()
            }
            ,
            C.extend = function(t) {
                return T(a.call(arguments, 1), function(e) {
                    if (e)
                        for (var n in e)
                            t[n] = e[n]
                }),
                    t
            }
            ,
            C.pick = function(t) {
                var e = {}
                    , n = l.apply(i, a.call(arguments, 1));
                return T(n, function(n) {
                    n in t && (e[n] = t[n])
                }),
                    e
            }
            ,
            C.omit = function(t) {
                var e = {}
                    , n = l.apply(i, a.call(arguments, 1));
                for (var o in t)
                    C.contains(n, o) || (e[o] = t[o]);
                return e
            }
            ,
            C.defaults = function(t) {
                return T(a.call(arguments, 1), function(e) {
                    if (e)
                        for (var n in e)
                            void 0 === t[n] && (t[n] = e[n])
                }),
                    t
            }
            ,
            C.clone = function(t) {
                return C.isObject(t) ? C.isArray(t) ? t.slice() : C.extend({}, t) : t
            }
            ,
            C.tap = function(t, e) {
                return e(t),
                    t
            }
        ;
        var j = function(t, e, n, i) {
            if (t === e)
                return 0 !== t || 1 / t == 1 / e;
            if (null == t || null == e)
                return t === e;
            t instanceof C && (t = t._wrapped),
            e instanceof C && (e = e._wrapped);
            var o = c.call(t);
            if (o != c.call(e))
                return !1;
            switch (o) {
                case "[object String]":
                    return t == String(e);
                case "[object Number]":
                    return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
                case "[object Date]":
                case "[object Boolean]":
                    return +t == +e;
                case "[object RegExp]":
                    return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
            }
            if ("object" != typeof t || "object" != typeof e)
                return !1;
            for (var r = n.length; r--; )
                if (n[r] == t)
                    return i[r] == e;
            var s = t.constructor
                , a = e.constructor;
            if (s !== a && !(C.isFunction(s) && s instanceof s && C.isFunction(a) && a instanceof a) && "constructor"in t && "constructor"in e)
                return !1;
            n.push(t),
                i.push(e);
            var l = 0
                , u = !0;
            if ("[object Array]" == o) {
                if (l = t.length,
                    u = l == e.length)
                    for (; l-- && (u = j(t[l], e[l], n, i)); )
                        ;
            } else {
                for (var d in t)
                    if (C.has(t, d) && (l++,
                        !(u = C.has(e, d) && j(t[d], e[d], n, i))))
                        break;
                if (u) {
                    for (d in e)
                        if (C.has(e, d) && !l--)
                            break;
                    u = !l
                }
            }
            return n.pop(),
                i.pop(),
                u
        };
        C.isEqual = function(t, e) {
            return j(t, e, [], [])
        }
            ,
            C.isEmpty = function(t) {
                if (null == t)
                    return !0;
                if (C.isArray(t) || C.isString(t))
                    return 0 === t.length;
                for (var e in t)
                    if (C.has(t, e))
                        return !1;
                return !0
            }
            ,
            C.isElement = function(t) {
                return !(!t || 1 !== t.nodeType)
            }
            ,
            C.isArray = w || function(t) {
                return "[object Array]" == c.call(t)
            }
            ,
            C.isObject = function(t) {
                return t === Object(t)
            }
            ,
            T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
                C["is" + t] = function(e) {
                    return c.call(e) == "[object " + t + "]"
                }
            }),
        C.isArguments(arguments) || (C.isArguments = function(t) {
                return !(!t || !C.has(t, "callee"))
            }
        ),
        "function" != typeof /./ && (C.isFunction = function(t) {
                return "function" == typeof t
            }
        ),
            C.isFinite = function(t) {
                return isFinite(t) && !isNaN(parseFloat(t))
            }
            ,
            C.isNaN = function(t) {
                return C.isNumber(t) && t != +t
            }
            ,
            C.isBoolean = function(t) {
                return t === !0 || t === !1 || "[object Boolean]" == c.call(t)
            }
            ,
            C.isNull = function(t) {
                return null === t
            }
            ,
            C.isUndefined = function(t) {
                return void 0 === t
            }
            ,
            C.has = function(t, e) {
                return u.call(t, e)
            }
            ,
            C.noConflict = function() {
                return t._ = e,
                    this
            }
            ,
            C.identity = function(t) {
                return t
            }
            ,
            C.constant = function(t) {
                return function() {
                    return t
                }
            }
            ,
            C.property = function(t) {
                return function(e) {
                    return e[t]
                }
            }
            ,
            C.matches = function(t) {
                return function(e) {
                    if (e === t)
                        return !0;
                    for (var n in t)
                        if (t[n] !== e[n])
                            return !1;
                    return !0
                }
            }
            ,
            C.times = function(t, e, n) {
                for (var i = Array(Math.max(0, t)), o = 0; t > o; o++)
                    i[o] = e.call(n, o);
                return i
            }
            ,
            C.random = function(t, e) {
                return null == e && (e = t,
                    t = 0),
                t + Math.floor(Math.random() * (e - t + 1))
            }
            ,
            C.now = Date.now || function() {
                return (new Date).getTime()
            }
        ;
        var D = {
            escape: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;"
            }
        };
        D.unescape = C.invert(D.escape);
        var M = {
            escape: new RegExp("[" + C.keys(D.escape).join("") + "]","g"),
            unescape: new RegExp("(" + C.keys(D.unescape).join("|") + ")","g")
        };
        C.each(["escape", "unescape"], function(t) {
            C[t] = function(e) {
                return null == e ? "" : ("" + e).replace(M[t], function(e) {
                    return D[t][e]
                })
            }
        }),
            C.result = function(t, e) {
                if (null != t) {
                    var n = t[e];
                    return C.isFunction(n) ? n.call(t) : n
                }
            }
            ,
            C.mixin = function(t) {
                T(C.functions(t), function(e) {
                    var n = C[e] = t[e];
                    C.prototype[e] = function() {
                        var t = [this._wrapped];
                        return s.apply(t, arguments),
                            L.call(this, n.apply(C, t))
                    }
                })
            }
        ;
        var N = 0;
        C.uniqueId = function(t) {
            var e = ++N + "";
            return t ? t + e : e
        }
            ,
            C.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
        var F = /(.)^/
            , P = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }
            , O = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        C.template = function(t, e, n) {
            var i;
            n = C.defaults({}, n, C.templateSettings);
            var o = new RegExp([(n.escape || F).source, (n.interpolate || F).source, (n.evaluate || F).source].join("|") + "|$","g")
                , r = 0
                , s = "__p+='";
            t.replace(o, function(e, n, i, o, a) {
                return s += t.slice(r, a).replace(O, function(t) {
                    return "\\" + P[t]
                }),
                n && (s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"),
                i && (s += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"),
                o && (s += "';\n" + o + "\n__p+='"),
                    r = a + e.length,
                    e
            }),
                s += "';\n",
            n.variable || (s = "with(obj||{}){\n" + s + "}\n"),
                s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
            try {
                i = new Function(n.variable || "obj","_",s)
            } catch (a) {
                throw a.source = s,
                    a
            }
            if (e)
                return i(e, C);
            var l = function(t) {
                return i.call(this, t, C)
            };
            return l.source = "function(" + (n.variable || "obj") + "){\n" + s + "}",
                l
        }
            ,
            C.chain = function(t) {
                return C(t).chain()
            }
        ;
        var L = function(t) {
            return this._chain ? C(t).chain() : t
        };
        C.mixin(C),
            T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
                var e = i[t];
                C.prototype[t] = function() {
                    var n = this._wrapped;
                    return e.apply(n, arguments),
                    "shift" != t && "splice" != t || 0 !== n.length || delete n[0],
                        L.call(this, n)
                }
            }),
            T(["concat", "join", "slice"], function(t) {
                var e = i[t];
                C.prototype[t] = function() {
                    return L.call(this, e.apply(this._wrapped, arguments))
                }
            }),
            C.extend(C.prototype, {
                chain: function() {
                    return this._chain = !0,
                        this
                },
                value: function() {
                    return this._wrapped
                }
            }),
        "function" == typeof define && define.amd && define("underscore", [], function() {
            return C
        })
    }
        .call(this),
    function(t, e) {
        if ("function" == typeof define && define.amd)
            define(["underscore", "jquery", "exports"], function(n, i, o) {
                t.Backbone = e(t, o, n, i)
            });
        else if ("undefined" != typeof exports) {
            var n = require("underscore");
            e(t, exports, n)
        } else
            t.Backbone = e(t, {}, t._, t.jQuery || t.Zepto || t.ender || t.$)
    }(this, function(t, e, n, i) {
        var o = t.Backbone
            , r = []
            , s = (r.push,
            r.slice);
        r.splice;
        e.VERSION = "1.1.2",
            e.$ = i,
            e.noConflict = function() {
                return t.Backbone = o,
                    this
            }
            ,
            e.emulateHTTP = !1,
            e.emulateJSON = !1;
        var a = e.Events = {
            on: function(t, e, n) {
                if (!c(this, "on", t, [e, n]) || !e)
                    return this;
                this._events || (this._events = {});
                var i = this._events[t] || (this._events[t] = []);
                return i.push({
                    callback: e,
                    context: n,
                    ctx: n || this
                }),
                    this
            },
            once: function(t, e, i) {
                if (!c(this, "once", t, [e, i]) || !e)
                    return this;
                var o = this
                    , r = n.once(function() {
                    o.off(t, r),
                        e.apply(this, arguments)
                });
                return r._callback = e,
                    this.on(t, r, i)
            },
            off: function(t, e, i) {
                var o, r, s, a, l, u, d, p;
                if (!this._events || !c(this, "off", t, [e, i]))
                    return this;
                if (!t && !e && !i)
                    return this._events = void 0,
                        this;
                for (a = t ? [t] : n.keys(this._events),
                         l = 0,
                         u = a.length; u > l; l++)
                    if (t = a[l],
                        s = this._events[t]) {
                        if (this._events[t] = o = [],
                        e || i)
                            for (d = 0,
                                     p = s.length; p > d; d++)
                                r = s[d],
                                (e && e !== r.callback && e !== r.callback._callback || i && i !== r.context) && o.push(r);
                        o.length || delete this._events[t]
                    }
                return this
            },
            trigger: function(t) {
                if (!this._events)
                    return this;
                var e = s.call(arguments, 1);
                if (!c(this, "trigger", t, e))
                    return this;
                var n = this._events[t]
                    , i = this._events.all;
                return n && u(n, e),
                i && u(i, arguments),
                    this
            },
            stopListening: function(t, e, i) {
                var o = this._listeningTo;
                if (!o)
                    return this;
                var r = !e && !i;
                i || "object" != typeof e || (i = this),
                t && ((o = {})[t._listenId] = t);
                for (var s in o)
                    t = o[s],
                        t.off(e, i, this),
                    (r || n.isEmpty(t._events)) && delete this._listeningTo[s];
                return this
            }
        }
            , l = /\s+/
            , c = function(t, e, n, i) {
            if (!n)
                return !0;
            if ("object" == typeof n) {
                for (var o in n)
                    t[e].apply(t, [o, n[o]].concat(i));
                return !1
            }
            if (l.test(n)) {
                for (var r = n.split(l), s = 0, a = r.length; a > s; s++)
                    t[e].apply(t, [r[s]].concat(i));
                return !1
            }
            return !0
        }
            , u = function(t, e) {
            var n, i = -1, o = t.length, r = e[0], s = e[1], a = e[2];
            switch (e.length) {
                case 0:
                    for (; ++i < o; )
                        (n = t[i]).callback.call(n.ctx);
                    return;
                case 1:
                    for (; ++i < o; )
                        (n = t[i]).callback.call(n.ctx, r);
                    return;
                case 2:
                    for (; ++i < o; )
                        (n = t[i]).callback.call(n.ctx, r, s);
                    return;
                case 3:
                    for (; ++i < o; )
                        (n = t[i]).callback.call(n.ctx, r, s, a);
                    return;
                default:
                    for (; ++i < o; )
                        (n = t[i]).callback.apply(n.ctx, e);
                    return
            }
        }
            , d = {
            listenTo: "on",
            listenToOnce: "once"
        };
        n.each(d, function(t, e) {
            a[e] = function(e, i, o) {
                var r = this._listeningTo || (this._listeningTo = {})
                    , s = e._listenId || (e._listenId = n.uniqueId("l"));
                return r[s] = e,
                o || "object" != typeof i || (o = this),
                    e[t](i, o, this),
                    this
            }
        }),
            a.bind = a.on,
            a.unbind = a.off,
            n.extend(e, a);
        var p = e.Model = function(t, e) {
                var i = t || {};
                e || (e = {}),
                    this.cid = n.uniqueId("c"),
                    this.attributes = {},
                e.collection && (this.collection = e.collection),
                e.parse && (i = this.parse(i, e) || {}),
                    i = n.defaults({}, i, n.result(this, "defaults")),
                    this.set(i, e),
                    this.changed = {},
                    this.initialize.apply(this, arguments)
            }
        ;
        n.extend(p.prototype, a, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            initialize: function() {},
            toJSON: function() {
                return n.clone(this.attributes)
            },
            sync: function() {
                return e.sync.apply(this, arguments)
            },
            get: function(t) {
                return this.attributes[t]
            },
            escape: function(t) {
                return n.escape(this.get(t))
            },
            has: function(t) {
                return null != this.get(t)
            },
            set: function(t, e, i) {
                var o, r, s, a, l, c, u, d;
                if (null == t)
                    return this;
                if ("object" == typeof t ? (r = t,
                    i = e) : (r = {})[t] = e,
                i || (i = {}),
                    !this._validate(r, i))
                    return !1;
                s = i.unset,
                    l = i.silent,
                    a = [],
                    c = this._changing,
                    this._changing = !0,
                c || (this._previousAttributes = n.clone(this.attributes),
                    this.changed = {}),
                    d = this.attributes,
                    u = this._previousAttributes,
                this.idAttribute in r && (this.id = r[this.idAttribute]);
                for (o in r)
                    e = r[o],
                    n.isEqual(d[o], e) || a.push(o),
                        n.isEqual(u[o], e) ? delete this.changed[o] : this.changed[o] = e,
                        s ? delete d[o] : d[o] = e;
                if (!l) {
                    a.length && (this._pending = i);
                    for (var p = 0, h = a.length; h > p; p++)
                        this.trigger("change:" + a[p], this, d[a[p]], i)
                }
                if (c)
                    return this;
                if (!l)
                    for (; this._pending; )
                        i = this._pending,
                            this._pending = !1,
                            this.trigger("change", this, i);
                return this._pending = !1,
                    this._changing = !1,
                    this
            },
            unset: function(t, e) {
                return this.set(t, void 0, n.extend({}, e, {
                    unset: !0
                }))
            },
            clear: function(t) {
                var e = {};
                for (var i in this.attributes)
                    e[i] = void 0;
                return this.set(e, n.extend({}, t, {
                    unset: !0
                }))
            },
            hasChanged: function(t) {
                return null == t ? !n.isEmpty(this.changed) : n.has(this.changed, t)
            },
            changedAttributes: function(t) {
                if (!t)
                    return this.hasChanged() ? n.clone(this.changed) : !1;
                var e, i = !1, o = this._changing ? this._previousAttributes : this.attributes;
                for (var r in t)
                    n.isEqual(o[r], e = t[r]) || ((i || (i = {}))[r] = e);
                return i
            },
            previous: function(t) {
                return null != t && this._previousAttributes ? this._previousAttributes[t] : null
            },
            previousAttributes: function() {
                return n.clone(this._previousAttributes)
            },
            fetch: function(t) {
                t = t ? n.clone(t) : {},
                void 0 === t.parse && (t.parse = !0);
                var e = this
                    , i = t.success;
                return t.success = function(n) {
                    return e.set(e.parse(n, t), t) ? (i && i(e, n, t),
                        void e.trigger("sync", e, n, t)) : !1
                }
                    ,
                    O(this, t),
                    this.sync("read", this, t)
            },
            save: function(t, e, i) {
                var o, r, s, a = this.attributes;
                if (null == t || "object" == typeof t ? (o = t,
                    i = e) : (o = {})[t] = e,
                    i = n.extend({
                        validate: !0
                    }, i),
                o && !i.wait) {
                    if (!this.set(o, i))
                        return !1
                } else if (!this._validate(o, i))
                    return !1;
                o && i.wait && (this.attributes = n.extend({}, a, o)),
                void 0 === i.parse && (i.parse = !0);
                var l = this
                    , c = i.success;
                return i.success = function(t) {
                    l.attributes = a;
                    var e = l.parse(t, i);
                    return i.wait && (e = n.extend(o || {}, e)),
                        n.isObject(e) && !l.set(e, i) ? !1 : (c && c(l, t, i),
                            void l.trigger("sync", l, t, i))
                }
                    ,
                    O(this, i),
                    r = this.isNew() ? "create" : i.patch ? "patch" : "update",
                "patch" === r && (i.attrs = o),
                    s = this.sync(r, this, i),
                o && i.wait && (this.attributes = a),
                    s
            },
            destroy: function(t) {
                t = t ? n.clone(t) : {};
                var e = this
                    , i = t.success
                    , o = function() {
                    e.trigger("destroy", e, e.collection, t)
                };
                if (t.success = function(n) {
                    (t.wait || e.isNew()) && o(),
                    i && i(e, n, t),
                    e.isNew() || e.trigger("sync", e, n, t)
                }
                    ,
                    this.isNew())
                    return t.success(),
                        !1;
                O(this, t);
                var r = this.sync("delete", this, t);
                return t.wait || o(),
                    r
            },
            url: function() {
                var t = n.result(this, "urlRoot") || n.result(this.collection, "url") || P();
                return this.isNew() ? t : t.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
            },
            parse: function(t) {
                return t
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return !this.has(this.idAttribute)
            },
            isValid: function(t) {
                return this._validate({}, n.extend(t || {}, {
                    validate: !0
                }))
            },
            _validate: function(t, e) {
                if (!e.validate || !this.validate)
                    return !0;
                t = n.extend({}, this.attributes, t);
                var i = this.validationError = this.validate(t, e) || null;
                return i ? (this.trigger("invalid", this, i, n.extend(e, {
                    validationError: i
                })),
                    !1) : !0
            }
        });
        var h = ["keys", "values", "pairs", "invert", "pick", "omit"];
        n.each(h, function(t) {
            p.prototype[t] = function() {
                var e = s.call(arguments);
                return e.unshift(this.attributes),
                    n[t].apply(n, e)
            }
        });
        var f = e.Collection = function(t, e) {
            e || (e = {}),
            e.model && (this.model = e.model),
            void 0 !== e.comparator && (this.comparator = e.comparator),
                this._reset(),
                this.initialize.apply(this, arguments),
            t && this.reset(t, n.extend({
                silent: !0
            }, e))
        }
            , m = {
            add: !0,
            remove: !0,
            merge: !0
        }
            , v = {
            add: !0,
            remove: !1
        };
        n.extend(f.prototype, a, {
            model: p,
            initialize: function() {},
            toJSON: function(t) {
                return this.map(function(e) {
                    return e.toJSON(t)
                })
            },
            sync: function() {
                return e.sync.apply(this, arguments)
            },
            add: function(t, e) {
                return this.set(t, n.extend({
                    merge: !1
                }, e, v))
            },
            remove: function(t, e) {
                var i = !n.isArray(t);
                t = i ? [t] : n.clone(t),
                e || (e = {});
                var o, r, s, a;
                for (o = 0,
                         r = t.length; r > o; o++)
                    a = t[o] = this.get(t[o]),
                    a && (delete this._byId[a.id],
                        delete this._byId[a.cid],
                        s = this.indexOf(a),
                        this.models.splice(s, 1),
                        this.length--,
                    e.silent || (e.index = s,
                        a.trigger("remove", a, this, e)),
                        this._removeReference(a, e));
                return i ? t[0] : t
            },
            set: function(t, e) {
                e = n.defaults({}, e, m),
                e.parse && (t = this.parse(t, e));
                var i = !n.isArray(t);
                t = i ? t ? [t] : [] : n.clone(t);
                var o, r, s, a, l, c, u, d = e.at, h = this.model, f = this.comparator && null == d && e.sort !== !1, v = n.isString(this.comparator) ? this.comparator : null, g = [], y = [], b = {}, w = e.add, x = e.merge, k = e.remove, C = !f && w && k ? [] : !1;
                for (o = 0,
                         r = t.length; r > o; o++) {
                    if (l = t[o] || {},
                        s = l instanceof p ? a = l : l[h.prototype.idAttribute || "id"],
                        c = this.get(s))
                        k && (b[c.cid] = !0),
                        x && (l = l === a ? a.attributes : l,
                        e.parse && (l = c.parse(l, e)),
                            c.set(l, e),
                        f && !u && c.hasChanged(v) && (u = !0)),
                            t[o] = c;
                    else if (w) {
                        if (a = t[o] = this._prepareModel(l, e),
                            !a)
                            continue;
                        g.push(a),
                            this._addReference(a, e)
                    }
                    a = c || a,
                    !C || !a.isNew() && b[a.id] || C.push(a),
                        b[a.id] = !0
                }
                if (k) {
                    for (o = 0,
                             r = this.length; r > o; ++o)
                        b[(a = this.models[o]).cid] || y.push(a);
                    y.length && this.remove(y, e)
                }
                if (g.length || C && C.length)
                    if (f && (u = !0),
                        this.length += g.length,
                    null != d)
                        for (o = 0,
                                 r = g.length; r > o; o++)
                            this.models.splice(d + o, 0, g[o]);
                    else {
                        C && (this.models.length = 0);
                        var T = C || g;
                        for (o = 0,
                                 r = T.length; r > o; o++)
                            this.models.push(T[o])
                    }
                if (u && this.sort({
                    silent: !0
                }),
                    !e.silent) {
                    for (o = 0,
                             r = g.length; r > o; o++)
                        (a = g[o]).trigger("add", a, this, e);
                    (u || C && C.length) && this.trigger("sort", this, e)
                }
                return i ? t[0] : t
            },
            reset: function(t, e) {
                e || (e = {});
                for (var i = 0, o = this.models.length; o > i; i++)
                    this._removeReference(this.models[i], e);
                return e.previousModels = this.models,
                    this._reset(),
                    t = this.add(t, n.extend({
                        silent: !0
                    }, e)),
                e.silent || this.trigger("reset", this, e),
                    t
            },
            push: function(t, e) {
                return this.add(t, n.extend({
                    at: this.length
                }, e))
            },
            pop: function(t) {
                var e = this.at(this.length - 1);
                return this.remove(e, t),
                    e
            },
            unshift: function(t, e) {
                return this.add(t, n.extend({
                    at: 0
                }, e))
            },
            shift: function(t) {
                var e = this.at(0);
                return this.remove(e, t),
                    e
            },
            slice: function() {
                return s.apply(this.models, arguments)
            },
            get: function(t) {
                return null != t ? this._byId[t] || this._byId[t.id] || this._byId[t.cid] : void 0
            },
            at: function(t) {
                return this.models[t]
            },
            where: function(t, e) {
                return n.isEmpty(t) ? e ? void 0 : [] : this[e ? "find" : "filter"](function(e) {
                    for (var n in t)
                        if (t[n] !== e.get(n))
                            return !1;
                    return !0
                })
            },
            findWhere: function(t) {
                return this.where(t, !0)
            },
            sort: function(t) {
                if (!this.comparator)
                    throw new Error("Cannot sort a set without a comparator");
                return t || (t = {}),
                    n.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)),
                t.silent || this.trigger("sort", this, t),
                    this
            },
            pluck: function(t) {
                return n.invoke(this.models, "get", t)
            },
            fetch: function(t) {
                t = t ? n.clone(t) : {},
                void 0 === t.parse && (t.parse = !0);
                var e = t.success
                    , i = this;
                return t.success = function(n) {
                    var o = t.reset ? "reset" : "set";
                    i[o](n, t),
                    e && e(i, n, t),
                        i.trigger("sync", i, n, t)
                }
                    ,
                    O(this, t),
                    this.sync("read", this, t)
            },
            create: function(t, e) {
                if (e = e ? n.clone(e) : {},
                    !(t = this._prepareModel(t, e)))
                    return !1;
                e.wait || this.add(t, e);
                var i = this
                    , o = e.success;
                return e.success = function(t, n) {
                    e.wait && i.add(t, e),
                    o && o(t, n, e)
                }
                    ,
                    t.save(null, e),
                    t
            },
            parse: function(t) {
                return t
            },
            clone: function() {
                return new this.constructor(this.models)
            },
            _reset: function() {
                this.length = 0,
                    this.models = [],
                    this._byId = {}
            },
            _prepareModel: function(t, e) {
                if (t instanceof p)
                    return t;
                e = e ? n.clone(e) : {},
                    e.collection = this;
                var i = new this.model(t,e);
                return i.validationError ? (this.trigger("invalid", this, i.validationError, e),
                    !1) : i
            },
            _addReference: function(t) {
                this._byId[t.cid] = t,
                null != t.id && (this._byId[t.id] = t),
                t.collection || (t.collection = this),
                    t.on("all", this._onModelEvent, this)
            },
            _removeReference: function(t) {
                this === t.collection && delete t.collection,
                    t.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(t, e, n, i) {
                ("add" !== t && "remove" !== t || n === this) && ("destroy" === t && this.remove(e, i),
                e && t === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)],
                null != e.id && (this._byId[e.id] = e)),
                    this.trigger.apply(this, arguments))
            }
        });
        var g = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
        n.each(g, function(t) {
            f.prototype[t] = function() {
                var e = s.call(arguments);
                return e.unshift(this.models),
                    n[t].apply(n, e)
            }
        });
        var y = ["groupBy", "countBy", "sortBy", "indexBy"];
        n.each(y, function(t) {
            f.prototype[t] = function(e, i) {
                var o = n.isFunction(e) ? e : function(t) {
                        return t.get(e)
                    }
                ;
                return n[t](this.models, o, i)
            }
        });
        var b = e.View = function(t) {
            this.cid = n.uniqueId("view"),
            t || (t = {}),
                n.extend(this, n.pick(t, x)),
                this._ensureElement(),
                this.initialize.apply(this, arguments),
                this.delegateEvents()
        }
            , w = /^(\S+)\s*(.*)$/
            , x = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        n.extend(b.prototype, a, {
            tagName: "div",
            $: function(t) {
                return this.$el.find(t)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this.$el.remove(),
                    this.stopListening(),
                    this
            },
            setElement: function(t, n) {
                return this.$el && this.undelegateEvents(),
                    this.$el = t instanceof e.$ ? t : e.$(t),
                    this.el = this.$el[0],
                n !== !1 && this.delegateEvents(),
                    this
            },
            delegateEvents: function(t) {
                if (!t && !(t = n.result(this, "events")))
                    return this;
                this.undelegateEvents();
                for (var e in t) {
                    var i = t[e];
                    if (n.isFunction(i) || (i = this[t[e]]),
                        i) {
                        var o = e.match(w)
                            , r = o[1]
                            , s = o[2];
                        i = n.bind(i, this),
                            r += ".delegateEvents" + this.cid,
                            "" === s ? this.$el.on(r, i) : this.$el.on(r, s, i)
                    }
                }
                return this
            },
            undelegateEvents: function() {
                return this.$el.off(".delegateEvents" + this.cid),
                    this
            },
            _ensureElement: function() {
                if (this.el)
                    this.setElement(n.result(this, "el"), !1);
                else {
                    var t = n.extend({}, n.result(this, "attributes"));
                    this.id && (t.id = n.result(this, "id")),
                    this.className && (t["class"] = n.result(this, "className"));
                    var i = e.$("<" + n.result(this, "tagName") + ">").attr(t);
                    this.setElement(i, !1)
                }
            }
        }),
            e.sync = function(t, i, o) {
                var r = C[t];
                n.defaults(o || (o = {}), {
                    emulateHTTP: e.emulateHTTP,
                    emulateJSON: e.emulateJSON
                });
                var s = {
                    type: r,
                    dataType: "json"
                };
                if (o.url || (s.url = n.result(i, "url") || P()),
                null != o.data || !i || "create" !== t && "update" !== t && "patch" !== t || (s.contentType = "application/json",
                    s.data = JSON.stringify(o.attrs || i.toJSON(o))),
                o.emulateJSON && (s.contentType = "application/x-www-form-urlencoded",
                    s.data = s.data ? {
                        model: s.data
                    } : {}),
                o.emulateHTTP && ("PUT" === r || "DELETE" === r || "PATCH" === r)) {
                    s.type = "POST",
                    o.emulateJSON && (s.data._method = r);
                    var a = o.beforeSend;
                    o.beforeSend = function(t) {
                        return t.setRequestHeader("X-HTTP-Method-Override", r),
                            a ? a.apply(this, arguments) : void 0
                    }
                }
                "GET" === s.type || o.emulateJSON || (s.processData = !1),
                "PATCH" === s.type && k && (s.xhr = function() {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    }
                );
                var l = o.xhr = e.ajax(n.extend(s, o));
                return i.trigger("request", i, l, o),
                    l
            }
        ;
        var k = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent)
            , C = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            "delete": "DELETE",
            read: "GET"
        };
        e.ajax = function() {
            return e.$.ajax.apply(e.$, arguments)
        }
        ;
        var T = e.Router = function(t) {
            t || (t = {}),
            t.routes && (this.routes = t.routes),
                this._bindRoutes(),
                this.initialize.apply(this, arguments)
        }
            , _ = /\((.*?)\)/g
            , S = /(\(\?)?:\w+/g
            , $ = /\*\w+/g
            , E = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        n.extend(T.prototype, a, {
            initialize: function() {},
            route: function(t, i, o) {
                n.isRegExp(t) || (t = this._routeToRegExp(t)),
                n.isFunction(i) && (o = i,
                    i = ""),
                o || (o = this[i]);
                var r = this;
                return e.history.route(t, function(n) {
                    var s = r._extractParameters(t, n);
                    r.execute(o, s),
                        r.trigger.apply(r, ["route:" + i].concat(s)),
                        r.trigger("route", i, s),
                        e.history.trigger("route", r, i, s)
                }),
                    this
            },
            execute: function(t, e) {
                t && t.apply(this, e)
            },
            navigate: function(t, n) {
                return e.history.navigate(t, n),
                    this
            },
            _bindRoutes: function() {
                if (this.routes) {
                    this.routes = n.result(this, "routes");
                    for (var t, e = n.keys(this.routes); null != (t = e.pop()); )
                        this.route(t, this.routes[t])
                }
            },
            _routeToRegExp: function(t) {
                return t = t.replace(E, "\\$&").replace(_, "(?:$1)?").replace(S, function(t, e) {
                    return e ? t : "([^/?]+)"
                }).replace($, "([^?]*?)"),
                    new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function(t, e) {
                var i = t.exec(e).slice(1);
                return n.map(i, function(t, e) {
                    return e === i.length - 1 ? t || null : t ? decodeURIComponent(t) : null
                })
            }
        });
        var A = e.History = function() {
            this.handlers = [],
                n.bindAll(this, "checkUrl"),
            "undefined" != typeof window && (this.location = window.location,
                this.history = window.history)
        }
            , I = /^[#\/]|\s+$/g
            , j = /^\/+|\/+$/g
            , D = /msie [\w.]+/
            , M = /\/$/
            , N = /#.*$/;
        A.started = !1,
            n.extend(A.prototype, a, {
                interval: 50,
                atRoot: function() {
                    return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
                },
                getHash: function(t) {
                    var e = (t || this).location.href.match(/#(.*)$/);
                    return e ? e[1] : ""
                },
                getFragment: function(t, e) {
                    if (null == t)
                        if (this._hasPushState || !this._wantsHashChange || e) {
                            t = decodeURI(this.location.pathname + this.location.search);
                            var n = this.root.replace(M, "");
                            t.indexOf(n) || (t = t.slice(n.length))
                        } else
                            t = this.getHash();
                    return t.replace(I, "")
                },
                start: function(t) {
                    if (A.started)
                        throw new Error("Backbone.history has already been started");
                    A.started = !0,
                        this.options = n.extend({
                            root: "/"
                        }, this.options, t),
                        this.root = this.options.root,
                        this._wantsHashChange = this.options.hashChange !== !1,
                        this._wantsPushState = !!this.options.pushState,
                        this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                    var i = this.getFragment()
                        , o = document.documentMode
                        , r = D.exec(navigator.userAgent.toLowerCase()) && (!o || 7 >= o);
                    if (this.root = ("/" + this.root + "/").replace(j, "/"),
                    r && this._wantsHashChange) {
                        var s = e.$('<iframe src="javascript:0" tabindex="-1">');
                        this.iframe = s.hide().appendTo("body")[0].contentWindow,
                            this.navigate(i)
                    }
                    this._hasPushState ? e.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange"in window && !r ? e.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
                        this.fragment = i;
                    var a = this.location;
                    if (this._wantsHashChange && this._wantsPushState) {
                        if (!this._hasPushState && !this.atRoot())
                            return this.fragment = this.getFragment(null, !0),
                                this.location.replace(this.root + "#" + this.fragment),
                                !0;
                        this._hasPushState && this.atRoot() && a.hash && (this.fragment = this.getHash().replace(I, ""),
                            this.history.replaceState({}, document.title, this.root + this.fragment))
                    }
                    return this.options.silent ? void 0 : this.loadUrl()
                },
                stop: function() {
                    e.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl),
                    this._checkUrlInterval && clearInterval(this._checkUrlInterval),
                        A.started = !1
                },
                route: function(t, e) {
                    this.handlers.unshift({
                        route: t,
                        callback: e
                    })
                },
                checkUrl: function() {
                    var t = this.getFragment();
                    return t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))),
                        t === this.fragment ? !1 : (this.iframe && this.navigate(t),
                            void this.loadUrl())
                },
                loadUrl: function(t) {
                    return t = this.fragment = this.getFragment(t),
                        n.any(this.handlers, function(e) {
                            return e.route.test(t) ? (e.callback(t),
                                !0) : void 0
                        })
                },
                navigate: function(t, e) {
                    if (!A.started)
                        return !1;
                    e && e !== !0 || (e = {
                        trigger: !!e
                    });
                    var n = this.root + (t = this.getFragment(t || ""));
                    if (t = t.replace(N, ""),
                    this.fragment !== t) {
                        if (this.fragment = t,
                        "" === t && "/" !== n && (n = n.slice(0, -1)),
                            this._hasPushState)
                            this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, n);
                        else {
                            if (!this._wantsHashChange)
                                return this.location.assign(n);
                            this._updateHash(this.location, t, e.replace),
                            this.iframe && t !== this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(),
                                this._updateHash(this.iframe.location, t, e.replace))
                        }
                        return e.trigger ? this.loadUrl(t) : void 0
                    }
                },
                _updateHash: function(t, e, n) {
                    if (n) {
                        var i = t.href.replace(/(javascript:|#).*$/, "");
                        t.replace(i + "#" + e)
                    } else
                        t.hash = "#" + e
                }
            }),
            e.history = new A;
        var F = function(t, e) {
            var i, o = this;
            i = t && n.has(t, "constructor") ? t.constructor : function() {
                return o.apply(this, arguments)
            }
                ,
                n.extend(i, o, e);
            var r = function() {
                this.constructor = i
            };
            return r.prototype = o.prototype,
                i.prototype = new r,
            t && n.extend(i.prototype, t),
                i.__super__ = o.prototype,
                i
        };
        p.extend = f.extend = T.extend = b.extend = A.extend = F;
        var P = function() {
            throw new Error('A "url" property or function must be specified')
        }
            , O = function(t, e) {
            var n = e.error;
            e.error = function(i) {
                n && n(t, i, e),
                    t.trigger("error", t, i, e)
            }
        };
        return e
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery || Zepto)
    }(function(t) {
        var e = function(e, n, i) {
            e = t(e);
            var o, r = this, s = e.val();
            n = "function" == typeof n ? n(e.val(), void 0, e, i) : n;
            var a = {
                invalid: [],
                getCaret: function() {
                    try {
                        var t, n = 0, i = e.get(0), o = document.selection, r = i.selectionStart;
                        return o && -1 === navigator.appVersion.indexOf("MSIE 10") ? (t = o.createRange(),
                            t.moveStart("character", e.is("input") ? -e.val().length : -e.text().length),
                            n = t.text.length) : (r || "0" === r) && (n = r),
                            n
                    } catch (s) {}
                },
                setCaret: function(t) {
                    try {
                        if (e.is(":focus")) {
                            var n, i = e.get(0);
                            i.setSelectionRange ? i.setSelectionRange(t, t) : i.createTextRange && (n = i.createTextRange(),
                                n.collapse(!0),
                                n.moveEnd("character", t),
                                n.moveStart("character", t),
                                n.select())
                        }
                    } catch (o) {}
                },
                events: function() {
                    e.on("input.mask keyup.mask", a.behaviour).on("paste.mask drop.mask", function() {
                        setTimeout(function() {
                            e.keydown().keyup()
                        }, 100)
                    }).on("change.mask", function() {
                        e.data("changed", !0)
                    }).on("blur.mask", function() {
                        s === e.val() || e.data("changed") || e.triggerHandler("change"),
                            e.data("changed", !1)
                    }).on("blur.mask", function() {
                        s = e.val()
                    }).on("focus.mask", function(e) {
                        i.selectOnFocus === !0 && t(e.target).select()
                    }).on("focusout.mask", function() {
                        i.clearIfNotMatch && !o.test(a.val()) && a.val("")
                    })
                },
                getRegexMask: function() {
                    for (var t, e, i, o, s, a, l = [], c = 0; c < n.length; c++)
                        t = r.translation[n.charAt(c)],
                            t ? (e = t.pattern.toString().replace(/.{1}$|^.{1}/g, ""),
                                i = t.optional,
                                o = t.recursive,
                                o ? (l.push(n.charAt(c)),
                                    s = {
                                        digit: n.charAt(c),
                                        pattern: e
                                    }) : l.push(i || o ? e + "?" : e)) : l.push(n.charAt(c).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                    return a = l.join(""),
                    s && (a = a.replace(new RegExp("(" + s.digit + "(.*" + s.digit + ")?)"), "($1)?").replace(new RegExp(s.digit,"g"), s.pattern)),
                        new RegExp(a)
                },
                destroyEvents: function() {
                    e.off(["input", "keydown", "keyup", "paste", "drop", "blur", "focusout", ""].join(".mask "))
                },
                val: function(t) {
                    var n, i = e.is("input"), o = i ? "val" : "text";
                    return arguments.length > 0 ? (e[o]() !== t && e[o](t),
                        n = e) : n = e[o](),
                        n
                },
                getMCharsBeforeCount: function(t, e) {
                    for (var i = 0, o = 0, s = n.length; s > o && t > o; o++)
                        r.translation[n.charAt(o)] || (t = e ? t + 1 : t,
                            i++);
                    return i
                },
                caretPos: function(t, e, i, o) {
                    var s = r.translation[n.charAt(Math.min(t - 1, n.length - 1))];
                    return s ? Math.min(t + i - e - o, i) : a.caretPos(t + 1, e, i, o)
                },
                behaviour: function(e) {
                    e = e || window.event,
                        a.invalid = [];
                    var n = e.keyCode || e.which;
                    if (-1 === t.inArray(n, r.byPassKeys)) {
                        var i = a.getCaret()
                            , o = a.val()
                            , s = o.length
                            , l = s > i
                            , c = a.getMasked()
                            , u = c.length
                            , d = a.getMCharsBeforeCount(u - 1) - a.getMCharsBeforeCount(s - 1);
                        return a.val(c),
                        !l || 65 === n && e.ctrlKey || (8 !== n && 46 !== n && (i = a.caretPos(i, s, u, d)),
                            a.setCaret(i)),
                            a.callbacks(e)
                    }
                },
                getMasked: function(t) {
                    var e, o, s = [], l = a.val(), c = 0, u = n.length, d = 0, p = l.length, h = 1, f = "push", m = -1;
                    for (i.reverse ? (f = "unshift",
                            h = -1,
                            e = 0,
                            c = u - 1,
                            d = p - 1,
                            o = function() {
                                return c > -1 && d > -1
                            }
                    ) : (e = u - 1,
                            o = function() {
                                return u > c && p > d
                            }
                    ); o(); ) {
                        var v = n.charAt(c)
                            , g = l.charAt(d)
                            , y = r.translation[v];
                        y ? (g.match(y.pattern) ? (s[f](g),
                        y.recursive && (-1 === m ? m = c : c === e && (c = m - h),
                        e === m && (c -= h)),
                            c += h) : y.optional ? (c += h,
                            d -= h) : y.fallback ? (s[f](y.fallback),
                            c += h,
                            d -= h) : a.invalid.push({
                            p: d,
                            v: g,
                            e: y.pattern
                        }),
                            d += h) : (t || s[f](v),
                        g === v && (d += h),
                            c += h)
                    }
                    var b = n.charAt(e);
                    return u !== p + 1 || r.translation[b] || s.push(b),
                        s.join("")
                },
                callbacks: function(t) {
                    var o = a.val()
                        , r = o !== s
                        , l = [o, t, e, i]
                        , c = function(t, e, n) {
                        "function" == typeof i[t] && e && i[t].apply(this, n)
                    };
                    c("onChange", r === !0, l),
                        c("onKeyPress", r === !0, l),
                        c("onComplete", o.length === n.length, l),
                        c("onInvalid", a.invalid.length > 0, [o, t, e, a.invalid, i])
                }
            };
            r.mask = n,
                r.options = i,
                r.remove = function() {
                    var t = a.getCaret();
                    return a.destroyEvents(),
                        a.val(r.getCleanVal()),
                        a.setCaret(t - a.getMCharsBeforeCount(t)),
                        e
                }
                ,
                r.getCleanVal = function() {
                    return a.getMasked(!0)
                }
                ,
                r.init = function(n) {
                    if (n = n || !1,
                        i = i || {},
                        r.byPassKeys = t.jMaskGlobals.byPassKeys,
                        r.translation = t.jMaskGlobals.translation,
                        r.translation = t.extend({}, r.translation, i.translation),
                        r = t.extend(!0, {}, r, i),
                        o = a.getRegexMask(),
                    n === !1) {
                        i.placeholder && e.attr("placeholder", i.placeholder),
                        t("input").length && "oninput"in t("input")[0] == !1 && "on" === e.attr("autocomplete") && e.attr("autocomplete", "off"),
                            a.destroyEvents(),
                            a.events();
                        var s = a.getCaret();
                        a.val(a.getMasked()),
                            a.setCaret(s + a.getMCharsBeforeCount(s, !0))
                    } else
                        a.events(),
                            a.val(a.getMasked())
                }
                ,
                r.init(!e.is("input"))
        };
        t.maskWatchers = {};
        var n = function() {
            var n = t(this)
                , o = {}
                , r = "data-mask-"
                , s = n.attr("data-mask");
            return n.attr(r + "reverse") && (o.reverse = !0),
            n.attr(r + "clearifnotmatch") && (o.clearIfNotMatch = !0),
            "true" === n.attr(r + "selectonfocus") && (o.selectOnFocus = !0),
                i(n, s, o) ? n.data("mask", new e(this,s,o)) : void 0
        }
            , i = function(e, n, i) {
            i = i || {};
            var o = t(e).data("mask")
                , r = JSON.stringify
                , s = t(e).val() || t(e).text();
            try {
                return "function" == typeof n && (n = n(s)),
                "object" != typeof o || r(o.options) !== r(i) || o.mask !== n
            } catch (a) {}
        };
        t.fn.mask = function(n, o) {
            o = o || {};
            var r = this.selector
                , s = t.jMaskGlobals
                , a = t.jMaskGlobals.watchInterval
                , l = function() {
                return i(this, n, o) ? t(this).data("mask", new e(this,n,o)) : void 0
            };
            return t(this).each(l),
            r && "" !== r && s.watchInputs && (clearInterval(t.maskWatchers[r]),
                t.maskWatchers[r] = setInterval(function() {
                    t(document).find(r).each(l)
                }, a)),
                this
        }
            ,
            t.fn.unmask = function() {
                return clearInterval(t.maskWatchers[this.selector]),
                    delete t.maskWatchers[this.selector],
                    this.each(function() {
                        var e = t(this).data("mask");
                        e && e.remove().removeData("mask")
                    })
            }
            ,
            t.fn.cleanVal = function() {
                return this.data("mask").getCleanVal()
            }
            ,
            t.applyDataMask = function(e) {
                e = e || t.jMaskGlobals.maskElements;
                var i = e instanceof t ? e : t(e);
                i.filter(t.jMaskGlobals.dataMaskAttr).each(n)
            }
        ;
        var o = {
            maskElements: "input,td,span,div",
            dataMaskAttr: "*[data-mask]",
            dataMask: !0,
            watchInterval: 300,
            watchInputs: !0,
            watchDataMask: !1,
            byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
            translation: {
                0: {
                    pattern: /\d/
                },
                9: {
                    pattern: /\d/,
                    optional: !0
                },
                "#": {
                    pattern: /\d/,
                    recursive: !0
                },
                A: {
                    pattern: /[a-zA-Z0-9]/
                },
                S: {
                    pattern: /[a-zA-Z]/
                }
            }
        };
        t.jMaskGlobals = t.jMaskGlobals || {},
            o = t.jMaskGlobals = t.extend(!0, {}, o, t.jMaskGlobals),
        o.dataMask && t.applyDataMask(),
            setInterval(function() {
                t.jMaskGlobals.watchDataMask && t.applyDataMask()
            }, o.watchInterval)
    }),
    function(t) {
        var e = -1
            , n = -1
            , i = function(e) {
                var n = 1
                    , i = t(e)
                    , r = null
                    , s = [];
                return i.each(function() {
                    var e = t(this)
                        , i = e.offset().top - o(e.css("margin-top"))
                        , a = s.length > 0 ? s[s.length - 1] : null;
                    null === a ? s.push(e) : Math.floor(Math.abs(r - i)) <= n ? s[s.length - 1] = a.add(e) : s.push(e),
                        r = i
                }),
                    s
            }
            , o = function(t) {
                return parseFloat(t) || 0
            }
            , r = t.fn.matchHeight = function(e) {
                if ("remove" === e) {
                    var n = this;
                    return this.css("height", ""),
                        t.each(r._groups, function(t, e) {
                            e.elements = e.elements.not(n)
                        }),
                        this
                }
                return this.length <= 1 ? this : (e = "undefined" != typeof e ? e : !0,
                    r._groups.push({
                        elements: this,
                        byRow: e
                    }),
                    r._apply(this, e),
                    this)
            }
        ;
        r._groups = [],
            r._throttle = 80,
            r._maintainScroll = !1,
            r._beforeUpdate = null,
            r._afterUpdate = null,
            r._apply = function(e, n) {
                var s = t(e)
                    , a = [s]
                    , l = t(window).scrollTop()
                    , c = t("html").outerHeight(!0)
                    , u = s.parents().filter(":hidden");
                return u.css("display", "block"),
                n && (s.each(function() {
                    var e = t(this)
                        , n = "inline-block" === e.css("display") ? "inline-block" : "block";
                    e.data("style-cache", e.attr("style")),
                        e.css({
                            display: n,
                            "padding-top": "0",
                            "padding-bottom": "0",
                            "margin-top": "0",
                            "margin-bottom": "0",
                            "border-top-width": "0",
                            "border-bottom-width": "0",
                            height: "100px"
                        })
                }),
                    a = i(s),
                    s.each(function() {
                        var e = t(this);
                        e.attr("style", e.data("style-cache") || "").css("height", "")
                    })),
                    t.each(a, function(e, i) {
                        var r = t(i)
                            , s = 0;
                        n && r.length <= 1 || (r.each(function() {
                            var e = t(this)
                                , n = "inline-block" === e.css("display") ? "inline-block" : "block";
                            e.css({
                                display: n,
                                height: ""
                            }),
                            e.outerHeight(!1) > s && (s = e.outerHeight(!1)),
                                e.css("display", "")
                        }),
                            r.each(function() {
                                var e = t(this)
                                    , n = 0;
                                "border-box" !== e.css("box-sizing") && (n += o(e.css("border-top-width")) + o(e.css("border-bottom-width")),
                                    n += o(e.css("padding-top")) + o(e.css("padding-bottom"))),
                                    e.css("height", s - n)
                            }))
                    }),
                    u.css("display", ""),
                r._maintainScroll && t(window).scrollTop(l / c * t("html").outerHeight(!0)),
                    this
            }
            ,
            r._applyDataApi = function() {
                var e = {};
                t("[data-match-height], [data-mh]").each(function() {
                    var n = t(this)
                        , i = n.attr("data-match-height") || n.attr("data-mh");
                    i in e ? e[i] = e[i].add(n) : e[i] = n
                }),
                    t.each(e, function() {
                        this.matchHeight(!0)
                    })
            }
        ;
        var s = function(e) {
            r._beforeUpdate && r._beforeUpdate(e, r._groups),
                t.each(r._groups, function() {
                    r._apply(this.elements, this.byRow)
                }),
            r._afterUpdate && r._afterUpdate(e, r._groups)
        };
        r._update = function(i, o) {
            if (o && "resize" === o.type) {
                var a = t(window).width();
                if (a === e)
                    return;
                e = a
            }
            i ? -1 === n && (n = setTimeout(function() {
                s(o),
                    n = -1
            }, r._throttle)) : s(o)
        }
            ,
            t(r._applyDataApi),
            t(window).bind("load", function(t) {
                r._update(!1, t)
            }),
            t(window).bind("resize orientationchange", function(t) {
                r._update(!0, t)
            })
    }(jQuery),
    function(t) {
        t.fn.swipeEvents = function() {
            return this.each(function() {
                function e(t) {
                    var e = t.originalEvent.touches;
                    e && e.length && (o = e[0].pageX,
                        r = e[0].pageY,
                        s.bind("touchmove", n),
                        s.bind("touchend", i))
                }
                function n(t) {
                    var e = t.originalEvent.touches;
                    if (e && e.length) {
                        var a = o - e[0].pageX
                            , l = r - e[0].pageY;
                        a >= 50 && s.trigger("swipeLeft"),
                        -50 >= a && s.trigger("swipeRight"),
                        l >= 50 && s.trigger("swipeUp"),
                        -50 >= l && s.trigger("swipeDown"),
                        (Math.abs(a) >= 50 || Math.abs(l) >= 50) && (s.unbind("touchmove", n),
                            s.unbind("touchend", i))
                    }
                }
                function i() {
                    s.unbind("touchmove", n)
                }
                var o, r, s = t(this);
                s.bind("touchstart", e)
            })
        }
    }(jQuery),
    $.fn.extend({
        backspace: function(t, e) {
            var n;
            return n = $.extend({
                callback: function() {},
                keypress: function() {},
                t: 100,
                e: .04
            }, e),
                this.each(function() {
                    var e;
                    e = this,
                        $(e).queue(function() {
                            var i, o;
                            o = function(t, i) {
                                t ? (e[/(np|x)/i.test(e.tagName) ? "value" : "innerHTML"] = e[/(np|x)/i.test(e.tagName) ? "value" : "innerHTML"].slice(0, -1),
                                    n.keypress.call(e),
                                    setTimeout(function() {
                                        o(t - 1, i)
                                    }, n.t)) : (n.callback.call(e),
                                    $(e).dequeue())
                            }
                                ,
                                i = function(t, o) {
                                    t ? (e[/(np|x)/i.test(e.tagName) ? "value" : "innerHTML"] += t[0],
                                        n.keypress.call(e),
                                        setTimeout(function() {
                                            i(t.slice(1), o)
                                        }, n.t)) : o()
                                }
                                ,
                                o(t)
                        })
                })
        },
        typetype: function(t, e) {
            var n;
            return n = $.extend({
                callback: function() {},
                keypress: function() {},
                t: 100,
                e: .04
            }, e),
                this.each(function() {
                    var e;
                    e = this,
                        $(e).queue(function() {
                            var i, o, r;
                            o = function(t, i) {
                                t ? (e[/(np|x)/i.test(e.tagName) ? "value" : "innerHTML"] = e[/(np|x)/i.test(e.tagName) ? "value" : "innerHTML"].slice(0, -1),
                                    n.keypress.call(e),
                                    setTimeout(function() {
                                        o(t - 1, i)
                                    }, n.t)) : i()
                            }
                                ,
                                i = function(t, o) {
                                    t ? (e[/(np|x)/i.test(e.tagName) ? "value" : "innerHTML"] += t[0],
                                        n.keypress.call(e),
                                        setTimeout(function() {
                                            i(t.slice(1), o)
                                        }, n.t)) : o()
                                }
                                ,
                                (r = function(s) {
                                        var a, l;
                                        a = function() {
                                            return setTimeout(function() {
                                                r(s)
                                            }, Math.random() * n.t * (t[s - 1] === t[s] ? 1.6 : "." === t[s - 1] ? 12 : "!" === t[s - 1] ? 12 : "?" === t[s - 1] ? 12 : "\n" === t[s - 1] ? 12 : "," === t[s - 1] ? 8 : ";" === t[s - 1] ? 8 : ":" === t[s - 1] ? 8 : " " === t[s - 1] ? 3 : 2))
                                        }
                                            ,
                                            l = Math.random() / n.e,
                                            t.length >= s ? .3 > l && t[s - 1] !== t[s] && t.length > s + 4 ? i(t.slice(s, s + 4), function() {
                                                o(4, a)
                                            }) : .7 > l && s > 1 && /[A-Z]/.test(t[s - 2] && t.length > s + 4) ? i(t[s - 1].toUpperCase() + t.slice(s, s + 4), function() {
                                                o(5, a)
                                            }) : .5 > l && t[s - 1] !== t[s] && t.length > s ? i(t[s], function() {
                                                o(1, a)
                                            }) : 1 > l && t[s - 1] !== t[s] && t.length > s ? i(t[s] + t[s - 1], function() {
                                                o(2, a)
                                            }) : .5 > l && /[A-Z]/.test(t[s]) ? i(t[s].toLowerCase(), function() {
                                                o(1, a)
                                            }) : (e[/(np|x)/i.test(e.tagName) ? "value" : "innerHTML"] += t[s - 1],
                                                n.keypress.call(e),
                                                setTimeout(function() {
                                                    r(s + 1)
                                                }, Math.random() * n.t * (t[s - 1] === t[s] ? 1.6 : "." === t[s - 1] ? 12 : "!" === t[s - 1] ? 12 : "?" === t[s - 1] ? 12 : "\n" === t[s - 1] ? 12 : "," === t[s - 1] ? 8 : ";" === t[s - 1] ? 8 : ":" === t[s - 1] ? 8 : " " === t[s - 1] ? 3 : 2))) : (n.callback.call(e),
                                                $(e).dequeue())
                                    }
                                )(1)
                        })
                })
        }
    }),
    function(t, e, n) {
        function i(e, n) {
            this.element = e,
                this.options = t.extend({}, r, n),
                this._defaults = r,
                this._name = o,
                this.init()
        }
        var o = "accordion"
            , r = {
            transitionSpeed: 300,
            transitionEasing: "ease",
            controlElement: "[data-accordion-control]",
            contentElement: "[data-accordion-content]",
            groupElement: "[data-accordion-group]",
            singleOpen: !0
        };
        i.prototype.init = function() {
            function i(t, e, n) {
                var i;
                return function() {
                    function o() {
                        n || t.apply(r, s),
                            i = null
                    }
                    var r = this
                        , s = arguments;
                    i ? clearTimeout(i) : n && t.apply(r, s),
                        i = setTimeout(o, e || 100)
                }
            }
            function o() {
                var t = n.body || n.documentElement
                    , e = t.style
                    , i = "transition";
                if ("string" == typeof e[i])
                    return !0;
                var o = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
                i = "Transition";
                for (var r = 0; r < o.length; r++)
                    if ("string" == typeof e[o[r] + i])
                        return !0;
                return !1
            }
            function r(t) {
                e.requestAnimationFrame ? requestAnimationFrame(t) : e.webkitRequestAnimationFrame ? webkitRequestAnimationFrame(t) : e.mozRequestAnimationFrame ? mozRequestAnimationFrame(t) : setTimeout(t, 1e3 / 60)
            }
            function s(t, e) {
                e ? w.css({
                    "-webkit-transition": "",
                    transition: ""
                }) : w.css({
                    "-webkit-transition": "max-height " + g.transitionSpeed + "ms " + g.transitionEasing,
                    transition: "max-height " + g.transitionSpeed + "ms " + g.transitionEasing
                })
            }
            function a(e) {
                var n = 0;
                e.children().each(function() {
                    n += t(this).outerHeight(!0)
                }),
                    e.data("oHeight", n)
            }
            function l(e, n, i, o) {
                var r, s = e.filter(".open").find("> [data-accordion-content]"), a = s.find("[data-accordion].open > [data-accordion-content]");
                g.singleOpen || (a = a.not(n.siblings("[data-accordion].open").find("> [data-accordion-content]"))),
                    r = s.add(a),
                e.hasClass("open") && r.each(function() {
                    var e = t(this).data("oHeight");
                    switch (o) {
                        case "+":
                            t(this).data("oHeight", e + i);
                            break;
                        case "-":
                            t(this).data("oHeight", e - i);
                            break;
                        default:
                            throw "updateParentHeight method needs an operation"
                    }
                    t(this).css("max-height", t(this).data("oHeight"))
                })
            }
            function c(t) {
                if (t.hasClass("open")) {
                    var e = t.find("> [data-accordion-content]")
                        , n = e.find("[data-accordion].open > [data-accordion-content]")
                        , i = e.add(n);
                    a(i),
                        i.css("max-height", i.data("oHeight"))
                }
            }
            function u(t, e) {
                if (t.trigger("accordion.close"),
                    T) {
                    if (k) {
                        var n = t.parents("[data-accordion]");
                        l(n, t, e.data("oHeight"), "-")
                    }
                    e.css(C),
                        t.removeClass("open")
                } else
                    e.css("max-height", e.data("oHeight")),
                        e.animate(C, g.transitionSpeed),
                        t.removeClass("open")
            }
            function d(t, e) {
                if (t.trigger("accordion.open"),
                    T) {
                    if (s(e),
                        k) {
                        var n = t.parents("[data-accordion]");
                        l(n, t, e.data("oHeight"), "+")
                    }
                    r(function() {
                        e.css("max-height", e.data("oHeight"))
                    }),
                        t.addClass("open")
                } else
                    e.animate({
                        "max-height": e.data("oHeight")
                    }, g.transitionSpeed, function() {
                        e.css({
                            "max-height": "none"
                        })
                    }),
                        t.addClass("open")
            }
            function p(e) {
                var n = (e.closest(g.groupElement),
                    e.siblings("[data-accordion]").filter(".open"))
                    , i = n.find("[data-accordion]").filter(".open")
                    , o = n.add(i);
                o.each(function() {
                    var e = t(this)
                        , n = e.find(g.contentElement);
                    u(e, n)
                }),
                    o.removeClass("open")
            }
            function h() {
                var t = g.singleOpen ? y.parents(g.groupElement).length > 0 : !1;
                a(w),
                t && p(y),
                    y.hasClass("open") ? u(y, w) : d(y, w)
            }
            function f() {
                b.on("click", h),
                    b.on("accordion.toggle", function() {
                        return g.singleOpen && b.length > 1 ? !1 : void h()
                    }),
                    b.on("accordion.refresh", function() {
                        c(y)
                    }),
                    t(e).on("resize", i(function() {
                        c(y)
                    }))
            }
            function m() {
                w.each(function() {
                    var e = t(this);
                    0 != e.css("max-height") && (e.closest("[data-accordion]").hasClass("open") ? (s(e),
                        a(e),
                        e.css("max-height", e.data("oHeight"))) : e.css({
                        "max-height": 0,
                        overflow: "hidden"
                    }))
                }),
                y.attr("data-accordion") || (y.attr("data-accordion", ""),
                    y.find(g.controlElement).attr("data-accordion-control", ""),
                    y.find(g.contentElement).attr("data-accordion-content", ""))
            }
            var v = this
                , g = v.options
                , y = t(v.element)
                , b = y.find("> " + g.controlElement)
                , w = y.find("> " + g.contentElement)
                , x = y.parents("[data-accordion]").length
                , k = x > 0
                , C = {
                "max-height": 0,
                overflow: "hidden"
            }
                , T = o();
            m(),
                f()
        }
            ,
            t.fn[o] = function(e) {
                return this.each(function() {
                    t.data(this, "plugin_" + o) || t.data(this, "plugin_" + o, new i(this,e))
                })
            }
    }(jQuery, window, document),
    function(t, e, n) {
        "use strict";
        function i(e, n) {
            return this.name = o,
                this.el = e,
                this.$el = t(e),
                this.options = t.extend({}, r, n),
                this.$document = t(this.$el[0].ownerDocument),
                this.$body = this.$document.find("body"),
                this.moveTrigger = "MSPointerMove pointermove touchmove mousemove",
                this.startTrigger = "MSPointerDown pointerdown touchstart mousedown",
                this.stopTrigger = "MSPointerUp pointerup touchend mouseup",
                this.startTriggerArray = this.startTrigger.split(" "),
                this.moveTriggerArray = this.moveTrigger.split(" "),
                this.stopTriggerArray = this.stopTrigger.split(" "),
                this.stopEvents = [this.stopTrigger, this.options.stopEvents].join(" "),
                "window" === this.options.constrainTo ? this.$container = this.$document : this.options.constrainTo && "parent" !== this.options.constrainTo ? this.$container = t(this.options.constrainTo) : this.$container = this.$el.parent(),
            this.isPointerEventCompatible() && this.applyMSDefaults(),
                this.CSSEaseHash = this.getCSSEaseHash(),
                this.scale = 1,
                this.started = !1,
                this.disabled = !1,
                this.autoAxis = !1,
                this.activeDropRegions = [],
                this.resetVelocityQueue(),
                this.init(),
                this
        }
        var o = "pep"
            , r = {
            initiate: function() {},
            start: function() {},
            drag: function() {},
            stop: function() {},
            easing: null,
            rest: function() {},
            moveTo: !1,
            callIfNotStarted: ["stop", "rest"],
            startThreshold: [0, 0],
            grid: [1, 1],
            debug: !1,
            activeClass: "pep-active",
            startClass: "pep-start",
            easeClass: "pep-ease",
            multiplier: 1,
            velocityMultiplier: 2.5,
            shouldPreventDefault: !0,
            allowDragEventPropagation: !0,
            stopEvents: "",
            hardwareAccelerate: !0,
            useCSSTranslation: !0,
            disableSelect: !0,
            cssEaseString: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
            cssEaseDuration: 1e3,
            shouldEase: !0,
            droppable: !1,
            droppableActiveClass: "pep-dpa",
            overlapFunction: !1,
            constrainTo: !1,
            removeMargins: !0,
            place: !0,
            deferPlacement: !1,
            axis: null,
            forceNonCSS3Movement: !1,
            elementsWithInteraction: "input",
            revert: !1,
            revertAfter: "stop",
            revertIf: function() {
                return !0
            },
            ignoreRightClick: !0,
            startPos: {
                left: null,
                top: null
            },
            useBoundingClientRect: !1
        };
        i.prototype.init = function() {
            this.options.debug && this.buildDebugDiv(),
            this.options.disableSelect && this.disableSelect(),
            this.options.place && !this.options.deferPlacement && (this.positionParent(),
                this.placeObject()),
                this.ev = {},
                this.pos = {},
                this.subscribe()
        }
            ,
            i.prototype.subscribe = function() {
                var t = this;
                this.onStartEvent = function(e) {
                    t.handleStart(e)
                }
                    ,
                    this.$el.on(this.startTrigger, this.onStartEvent),
                    this.onStartEventOnElementsWithInteraction = function(t) {
                        t.ignorePropagation = !0
                    }
                    ,
                    this.$el.on(this.startTrigger, this.options.elementsWithInteraction, this.onStartEventOnElementsWithInteraction),
                    this.onStopEvents = function(e) {
                        t.handleStop(e)
                    }
                    ,
                    this.$document.on(this.stopEvents, this.onStopEvents),
                    this.onMoveEvents = function(e) {
                        t.moveEvent = e
                    }
                    ,
                    this.$document.on(this.moveTrigger, this.onMoveEvents)
            }
            ,
            i.prototype.unsubscribe = function() {
                this.$el.off(this.startTrigger, this.onStartEvent),
                    this.$el.off(this.startTrigger, this.options.elementsWithInteraction, this.onStartEventOnElementsWithInteraction),
                    this.$document.off(this.stopEvents, this.onStopEvents),
                    this.$document.off(this.moveTrigger, this.onMoveEvents)
            }
            ,
            i.prototype.handleStart = function(t) {
                if (!t.ignorePropagation) {
                    var e = this;
                    if (this.isValidMoveEvent(t) && !this.disabled && (!this.options.ignoreRightClick || 3 !== t.which)) {
                        this.isPointerEventCompatible() && t.preventManipulation && t.preventManipulation(),
                            t = this.normalizeEvent(t),
                        this.options.place && this.options.deferPlacement && (this.positionParent(),
                            this.placeObject()),
                            this.log({
                                type: "event",
                                event: t.type
                            }),
                        this.options.hardwareAccelerate && !this.hardwareAccelerated && (this.hardwareAccelerate(),
                            this.hardwareAccelerated = !0);
                        var n = this.options.initiate.call(this, t, this);
                        if (n === !1)
                            return;
                        clearTimeout(this.restTimeout),
                            this.$el.addClass(this.options.activeClass),
                            this.removeCSSEasing(),
                            this.startX = this.ev.x = t.pep.x,
                            this.startY = this.ev.y = t.pep.y,
                            this.initialPosition = this.initialPosition || this.$el.position(),
                            this.startEvent = this.moveEvent = t,
                            this.active = !0,
                        this.options.shouldPreventDefault && t.preventDefault(),
                        this.options.allowDragEventPropagation || t.stopPropagation(),
                            function i() {
                                e.active && (e.handleMove(),
                                    e.requestAnimationFrame(i))
                            }(),
                            function o() {
                                e.options.easing && (e.easing && e.options.easing.call(e, null, e),
                                    e.requestAnimationFrame(o))
                            }()
                    }
                }
            }
            ,
            i.prototype.handleMove = function() {
                if ("undefined" != typeof this.moveEvent) {
                    var n = this.normalizeEvent(this.moveEvent)
                        , i = e.parseInt(n.pep.x / this.options.grid[0]) * this.options.grid[0]
                        , o = e.parseInt(n.pep.y / this.options.grid[1]) * this.options.grid[1];
                    this.addToLIFO({
                        time: n.timeStamp,
                        x: i,
                        y: o
                    });
                    var r, s;
                    if (t.inArray(n.type, this.startTriggerArray) > -1 ? (r = 0,
                        s = 0) : (r = i - this.ev.x,
                        s = o - this.ev.y),
                        this.dx = r,
                        this.dy = s,
                        this.ev.x = i,
                        this.ev.y = o,
                    0 === r && 0 === s)
                        return void this.log({
                            type: "event",
                            event: "** stopped **"
                        });
                    var a = Math.abs(this.startX - i)
                        , l = Math.abs(this.startY - o);
                    !this.started && (a > this.options.startThreshold[0] || l > this.options.startThreshold[1]) && (this.started = !0,
                        this.$el.addClass(this.options.startClass),
                        this.options.start.call(this, this.startEvent, this)),
                        this.doMoveTo(r, s),
                    this.options.droppable && this.calculateActiveDropRegions();
                    var c = this.options.drag.call(this, n, this);
                    if (c === !1)
                        return void this.resetVelocityQueue();
                    this.log({
                        type: "event",
                        event: n.type
                    }),
                        this.log({
                            type: "event-coords",
                            x: this.ev.x,
                            y: this.ev.y
                        }),
                        this.log({
                            type: "velocity"
                        })
                }
            }
            ,
            i.prototype.doMoveTo = function(t, e) {
                var n, i, o = this.handleConstraint(t, e);
                "auto" !== this.options.axis || this.autoAxis || (Math.abs(t) > Math.abs(e) ? this.autoAxis = "x" : Math.abs(t) < Math.abs(e) ? this.autoAxis = "y" : (e = 0,
                    t = 0)),
                    "function" == typeof this.options.moveTo ? (n = t >= 0 ? "+=" + Math.abs(t / this.scale) * this.options.multiplier : "-=" + Math.abs(t / this.scale) * this.options.multiplier,
                        i = e >= 0 ? "+=" + Math.abs(e / this.scale) * this.options.multiplier : "-=" + Math.abs(e / this.scale) * this.options.multiplier,
                    this.options.constrainTo && (n = o.x !== !1 ? o.x : n,
                        i = o.y !== !1 ? o.y : i),
                    "x" !== this.options.axis && "x" !== this.autoAxis || (i = o.y),
                    "y" !== this.options.axis && "y" !== this.autoAxis || (n = o.x),
                        this.options.moveTo.call(this, n, i)) : this.shouldUseCSSTranslation() ? (t = t / this.scale * this.options.multiplier,
                        e = e / this.scale * this.options.multiplier,
                    this.options.constrainTo && (t = o.x === !1 ? t : 0,
                        e = o.y === !1 ? e : 0),
                    "x" !== this.options.axis && "x" !== this.autoAxis || (e = 0),
                    "y" !== this.options.axis && "y" !== this.autoAxis || (t = 0),
                        this.moveToUsingTransforms(t, e)) : (n = t >= 0 ? "+=" + Math.abs(t / this.scale) * this.options.multiplier : "-=" + Math.abs(t / this.scale) * this.options.multiplier,
                        i = e >= 0 ? "+=" + Math.abs(e / this.scale) * this.options.multiplier : "-=" + Math.abs(e / this.scale) * this.options.multiplier,
                    this.options.constrainTo && (n = o.x !== !1 ? o.x : n,
                        i = o.y !== !1 ? o.y : i),
                    "x" !== this.options.axis && "x" !== this.autoAxis || (i = o.y),
                    "y" !== this.options.axis && "y" !== this.autoAxis || (n = o.x),
                        this.moveTo(n, i))
            }
            ,
            i.prototype.handleStop = function(e) {
                this.active && (this.log({
                    type: "event",
                    event: e.type
                }),
                    this.active = !1,
                    this.easing = !0,
                    this.$el.removeClass(this.options.startClass).addClass(this.options.easeClass),
                this.options.droppable && this.calculateActiveDropRegions(),
                (this.started || !this.started && t.inArray("stop", this.options.callIfNotStarted) > -1) && this.options.stop.call(this, e, this),
                    this.options.shouldEase ? this.ease(e, this.started) : this.removeActiveClass(),
                this.options.revert && ("stop" === this.options.revertAfter || !this.options.shouldEase) && this.options.revertIf && this.options.revertIf.call(this) && this.revert(),
                    this.started = !1,
                this.autoAxis && (this.autoAxis = !1),
                    this.resetVelocityQueue())
            }
            ,
            i.prototype.ease = function(e, n) {
                var i = (this.$el.position(),
                    this.velocity())
                    , o = (this.dt,
                i.x / this.scale * this.options.multiplier)
                    , r = i.y / this.scale * this.options.multiplier
                    , s = this.handleConstraint(o, r, !0);
                this.cssAnimationsSupported() && this.$el.css(this.getCSSEaseHash());
                var a = i.x > 0 ? "+=" + o : "-=" + Math.abs(o)
                    , l = i.y > 0 ? "+=" + r : "-=" + Math.abs(r);
                this.options.constrainTo && (a = s.x !== !1 ? s.x : a,
                    l = s.y !== !1 ? s.y : l),
                "x" !== this.options.axis && "x" !== this.autoAxis || (l = "+=0"),
                "y" !== this.options.axis && "y" !== this.autoAxis || (a = "+=0");
                var c = !this.cssAnimationsSupported() || this.options.forceNonCSS3Movement;
                "function" == typeof this.options.moveTo ? this.options.moveTo.call(this, a, l) : this.moveTo(a, l, c);
                var u = this;
                this.restTimeout = setTimeout(function() {
                    u.options.droppable && u.calculateActiveDropRegions(),
                        u.easing = !1,
                    (n || !n && t.inArray("rest", u.options.callIfNotStarted) > -1) && u.options.rest.call(u, e, u),
                    u.options.revert && "ease" === u.options.revertAfter && u.options.shouldEase && u.options.revertIf && u.options.revertIf.call(u) && u.revert(),
                        u.removeActiveClass()
                }, this.options.cssEaseDuration)
            }
            ,
            i.prototype.normalizeEvent = function(t) {
                return t.pep = {},
                    this.isTouch(t) ? (t.pep.x = t.originalEvent.touches[0].pageX,
                        t.pep.y = t.originalEvent.touches[0].pageY,
                        t.pep.type = t.type) : !this.isPointerEventCompatible() && this.isTouch(t) || (t.pageX ? (t.pep.x = t.pageX,
                        t.pep.y = t.pageY) : (t.pep.x = t.originalEvent.pageX,
                        t.pep.y = t.originalEvent.pageY),
                        t.pep.type = t.type),
                    t
            }
            ,
            i.prototype.resetVelocityQueue = function() {
                this.velocityQueue = new Array(5)
            }
            ,
            i.prototype.moveTo = function(t, e, n) {
                this.log({
                    type: "delta",
                    x: t,
                    y: e
                }),
                    n ? this.$el.animate({
                        top: e,
                        left: t
                    }, 0, "easeOutQuad", {
                        queue: !1
                    }) : this.$el.stop(!0, !1).css({
                        top: e,
                        left: t
                    })
            }
            ,
            i.prototype.moveToUsingTransforms = function(t, e) {
                var n = this.matrixToArray(this.matrixString());
                this.cssX || (this.cssX = this.xTranslation(n)),
                this.cssY || (this.cssY = this.yTranslation(n)),
                    this.cssX = this.cssX + t,
                    this.cssY = this.cssY + e,
                    this.log({
                        type: "delta",
                        x: t,
                        y: e
                    }),
                    n[4] = this.cssX,
                    n[5] = this.cssY,
                    this.translation = this.arrayToMatrix(n),
                    this.transform(this.translation)
            }
            ,
            i.prototype.transform = function(t) {
                this.$el.css({
                    "-webkit-transform": t,
                    "-moz-transform": t,
                    "-ms-transform": t,
                    "-o-transform": t,
                    transform: t
                })
            }
            ,
            i.prototype.xTranslation = function(t) {
                return t = t || this.matrixToArray(this.matrixString()),
                    parseInt(t[4], 10)
            }
            ,
            i.prototype.yTranslation = function(t) {
                return t = t || this.matrixToArray(this.matrixString()),
                    parseInt(t[5], 10)
            }
            ,
            i.prototype.matrixString = function() {
                var t = function(t) {
                    return !(!t || "none" === t || t.indexOf("matrix") < 0)
                }
                    , e = "matrix(1, 0, 0, 1, 0, 0)";
                return t(this.$el.css("-webkit-transform")) && (e = this.$el.css("-webkit-transform")),
                t(this.$el.css("-moz-transform")) && (e = this.$el.css("-moz-transform")),
                t(this.$el.css("-ms-transform")) && (e = this.$el.css("-ms-transform")),
                t(this.$el.css("-o-transform")) && (e = this.$el.css("-o-transform")),
                t(this.$el.css("transform")) && (e = this.$el.css("transform")),
                    e
            }
            ,
            i.prototype.matrixToArray = function(t) {
                return t.split("(")[1].split(")")[0].split(",")
            }
            ,
            i.prototype.arrayToMatrix = function(t) {
                return "matrix(" + t.join(",") + ")"
            }
            ,
            i.prototype.addToLIFO = function(t) {
                var e = this.velocityQueue;
                e = e.slice(1, e.length),
                    e.push(t),
                    this.velocityQueue = e
            }
            ,
            i.prototype.velocity = function() {
                for (var t = 0, e = 0, n = 0; n < this.velocityQueue.length - 1; n++)
                    this.velocityQueue[n] && (t += this.velocityQueue[n + 1].x - this.velocityQueue[n].x,
                        e += this.velocityQueue[n + 1].y - this.velocityQueue[n].y,
                        this.dt = this.velocityQueue[n + 1].time - this.velocityQueue[n].time);
                return {
                    x: t * this.options.velocityMultiplier,
                    y: e * this.options.velocityMultiplier
                }
            }
            ,
            i.prototype.revert = function() {
                this.shouldUseCSSTranslation() && this.moveToUsingTransforms(-this.xTranslation(), -this.yTranslation()),
                this.options.place && this.moveTo(this.initialPosition.left, this.initialPosition.top)
            }
            ,
            i.prototype.requestAnimationFrame = function(t) {
                return e.requestAnimationFrame && e.requestAnimationFrame(t) || e.webkitRequestAnimationFrame && e.webkitRequestAnimationFrame(t) || e.mozRequestAnimationFrame && e.mozRequestAnimationFrame(t) || e.oRequestAnimationFrame && e.mozRequestAnimationFrame(t) || e.msRequestAnimationFrame && e.msRequestAnimationFrame(t) || e.setTimeout(t, 1e3 / 60)
            }
            ,
            i.prototype.positionParent = function() {
                this.options.constrainTo && !this.parentPositioned && (this.parentPositioned = !0,
                    "parent" === this.options.constrainTo ? this.$container.css({
                        position: "relative"
                    }) : "window" === this.options.constrainTo && "#document" !== this.$container.get(0).nodeName && "static" !== this.$container.css("position") && this.$container.css({
                        position: "static"
                    }))
            }
            ,
            i.prototype.placeObject = function() {
                this.objectPlaced || (this.objectPlaced = !0,
                    this.offset = "parent" === this.options.constrainTo || this.hasNonBodyRelative() ? this.$el.position() : this.$el.offset(),
                parseInt(this.$el.css("left"), 10) && (this.offset.left = this.$el.css("left")),
                "number" == typeof this.options.startPos.left && (this.offset.left = this.options.startPos.left),
                parseInt(this.$el.css("top"), 10) && (this.offset.top = this.$el.css("top")),
                "number" == typeof this.options.startPos.top && (this.offset.top = this.options.startPos.top),
                this.options.removeMargins && this.$el.css({
                    margin: 0
                }),
                    this.$el.css({
                        position: "absolute",
                        top: this.offset.top,
                        left: this.offset.left
                    }))
            }
            ,
            i.prototype.hasNonBodyRelative = function() {
                return this.$el.parents().filter(function() {
                    var e = t(this);
                    return e.is("body") || "relative" === e.css("position")
                }).length > 1
            }
            ,
            i.prototype.setScale = function(t) {
                this.scale = t
            }
            ,
            i.prototype.setMultiplier = function(t) {
                this.options.multiplier = t
            }
            ,
            i.prototype.removeCSSEasing = function() {
                this.cssAnimationsSupported() && this.$el.css(this.getCSSEaseHash(!0))
            }
            ,
            i.prototype.disableSelect = function() {
                this.$el.css({
                    "-webkit-touch-callout": "none",
                    "-webkit-user-select": "none",
                    "-khtml-user-select": "none",
                    "-moz-user-select": "none",
                    "-ms-user-select": "none",
                    "user-select": "none"
                })
            }
            ,
            i.prototype.removeActiveClass = function() {
                this.$el.removeClass([this.options.activeClass, this.options.easeClass].join(" "))
            }
            ,
            i.prototype.handleConstraint = function(e, i, o) {
                var r = this.$el.position();
                this.pos.x = r.left,
                    this.pos.y = r.top;
                var s, a, l, c, u = {
                    x: !1,
                    y: !1
                };
                return this.log({
                    type: "pos-coords",
                    x: this.pos.x,
                    y: this.pos.y
                }),
                    t.isArray(this.options.constrainTo) ? (this.options.constrainTo[3] !== n && this.options.constrainTo[1] !== n && (a = this.options.constrainTo[1] === !1 ? 1 / 0 : this.options.constrainTo[1],
                        l = this.options.constrainTo[3] === !1 ? -(1 / 0) : this.options.constrainTo[3]),
                    this.options.constrainTo[0] !== !1 && this.options.constrainTo[2] !== !1 && (s = this.options.constrainTo[2] === !1 ? 1 / 0 : this.options.constrainTo[2],
                        c = this.options.constrainTo[0] === !1 ? -(1 / 0) : this.options.constrainTo[0]),
                    this.pos.x + e < l && (u.x = l),
                    this.pos.y + i < c && (u.y = c)) : "string" == typeof this.options.constrainTo && (l = 0,
                        c = 0,
                        a = this.$container.width() - (this.options.useBoundingClientRect ? this.$el[0].getBoundingClientRect().width : this.$el.outerWidth()),
                        s = this.$container.height() - (this.options.useBoundingClientRect ? this.$el[0].getBoundingClientRect().height : this.$el.outerHeight()),
                    this.pos.x + e < 0 && (u.x = 0),
                    this.pos.y + i < 0 && (u.y = 0)),
                this.pos.x + e > a && (u.x = a),
                this.pos.y + i > s && (u.y = s),
                this.shouldUseCSSTranslation() && o && (u.x === l && this.xTranslation() && (u.x = l - this.xTranslation()),
                u.x === a && this.xTranslation() && (u.x = a - this.xTranslation()),
                u.y === c && this.yTranslation() && (u.y = c - this.yTranslation()),
                u.y === s && this.yTranslation() && (u.y = s - this.yTranslation())),
                    u
            }
            ,
            i.prototype.getCSSEaseHash = function(t) {
                "undefined" == typeof t && (t = !1);
                var e;
                if (t)
                    e = "";
                else {
                    if (this.CSSEaseHash)
                        return this.CSSEaseHash;
                    e = ["all", this.options.cssEaseDuration + "ms", this.options.cssEaseString].join(" ")
                }
                return {
                    "-webkit-transition": e,
                    "-moz-transition": e,
                    "-ms-transition": e,
                    "-o-transition": e,
                    transition: e
                }
            }
            ,
            i.prototype.calculateActiveDropRegions = function() {
                var e = this;
                this.activeDropRegions.length = 0,
                    t.each(t(this.options.droppable), function(n, i) {
                        var o = t(i);
                        e.isOverlapping(o, e.$el) ? (o.addClass(e.options.droppableActiveClass),
                            e.activeDropRegions.push(o)) : o.removeClass(e.options.droppableActiveClass)
                    })
            }
            ,
            i.prototype.isOverlapping = function(t, e) {
                if (this.options.overlapFunction)
                    return this.options.overlapFunction(t, e);
                var n = t[0].getBoundingClientRect()
                    , i = e[0].getBoundingClientRect();
                return !(n.right < i.left || n.left > i.right || n.bottom < i.top || n.top > i.bottom)
            }
            ,
            i.prototype.isTouch = function(t) {
                return t.type.search("touch") > -1
            }
            ,
            i.prototype.isPointerEventCompatible = function() {
                return "MSPointerEvent"in e
            }
            ,
            i.prototype.applyMSDefaults = function() {
                this.$el.css({
                    "-ms-touch-action": "none",
                    "touch-action": "none",
                    "-ms-scroll-chaining": "none",
                    "-ms-scroll-limit": "0 0 0 0"
                })
            }
            ,
            i.prototype.isValidMoveEvent = function(t) {
                return !this.isTouch(t) || this.isTouch(t) && t.originalEvent && t.originalEvent.touches && 1 === t.originalEvent.touches.length
            }
            ,
            i.prototype.shouldUseCSSTranslation = function() {
                if (this.options.forceNonCSS3Movement)
                    return !1;
                if ("undefined" != typeof this.useCSSTranslation)
                    return this.useCSSTranslation;
                var t = !1;
                return t = this.options.useCSSTranslation && ("undefined" == typeof Modernizr || Modernizr.csstransforms),
                    this.useCSSTranslation = t,
                    t
            }
            ,
            i.prototype.cssAnimationsSupported = function() {
                if ("undefined" != typeof this.cssAnimationsSupport)
                    return this.cssAnimationsSupport;
                if ("undefined" != typeof Modernizr && Modernizr.cssanimations)
                    return this.cssAnimationsSupport = !0,
                        !0;
                var t = !1
                    , e = document.createElement("div")
                    , i = "animation"
                    , o = ""
                    , r = "Webkit Moz O ms Khtml".split(" ")
                    , s = "";
                if (e.style.animationName && (t = !0),
                t === !1)
                    for (var a = 0; a < r.length; a++)
                        if (e.style[r[a] + "AnimationName"] !== n) {
                            s = r[a],
                                i = s + "Animation",
                                o = "-" + s.toLowerCase() + "-",
                                t = !0;
                            break
                        }
                return this.cssAnimationsSupport = t,
                    t
            }
            ,
            i.prototype.hardwareAccelerate = function() {
                this.$el.css({
                    "-webkit-perspective": 1e3,
                    perspective: 1e3,
                    "-webkit-backface-visibility": "hidden",
                    "backface-visibility": "hidden"
                })
            }
            ,
            i.prototype.getMovementValues = function() {
                return {
                    ev: this.ev,
                    pos: this.pos,
                    velocity: this.velocity()
                }
            }
            ,
            i.prototype.buildDebugDiv = function() {
                var e;
                0 === t("#pep-debug").length && (e = t("<div></div>"),
                    e.attr("id", "pep-debug").append("<div style='font-weight:bold; background: red; color: white;'>DEBUG MODE</div>").append("<div id='pep-debug-event'>no event</div>").append("<div id='pep-debug-ev-coords'>event coords: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>").append("<div id='pep-debug-pos-coords'>position coords: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>").append("<div id='pep-debug-velocity'>velocity: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>").append("<div id='pep-debug-delta'>&Delta; movement: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>").css({
                        position: "fixed",
                        bottom: 5,
                        right: 5,
                        zIndex: 99999,
                        textAlign: "right",
                        fontFamily: "Arial, sans",
                        fontSize: 10,
                        border: "1px solid #DDD",
                        padding: "3px",
                        background: "white",
                        color: "#333"
                    }));
                var n = this;
                setTimeout(function() {
                    n.debugElements = {
                        $event: t("#pep-debug-event"),
                        $velocityX: t("#pep-debug-velocity .pep-x"),
                        $velocityY: t("#pep-debug-velocity .pep-y"),
                        $dX: t("#pep-debug-delta .pep-x"),
                        $dY: t("#pep-debug-delta .pep-y"),
                        $evCoordsX: t("#pep-debug-ev-coords .pep-x"),
                        $evCoordsY: t("#pep-debug-ev-coords .pep-y"),
                        $posCoordsX: t("#pep-debug-pos-coords .pep-x"),
                        $posCoordsY: t("#pep-debug-pos-coords .pep-y")
                    }
                }, 0),
                    t("body").append(e)
            }
            ,
            i.prototype.log = function(t) {
                if (this.options.debug)
                    switch (t.type) {
                        case "event":
                            this.debugElements.$event.text(t.event);
                            break;
                        case "pos-coords":
                            this.debugElements.$posCoordsX.text(t.x),
                                this.debugElements.$posCoordsY.text(t.y);
                            break;
                        case "event-coords":
                            this.debugElements.$evCoordsX.text(t.x),
                                this.debugElements.$evCoordsY.text(t.y);
                            break;
                        case "delta":
                            this.debugElements.$dX.text(t.x),
                                this.debugElements.$dY.text(t.y);
                            break;
                        case "velocity":
                            var e = this.velocity();
                            this.debugElements.$velocityX.text(Math.round(e.x)),
                                this.debugElements.$velocityY.text(Math.round(e.y))
                    }
            }
            ,
            i.prototype.toggle = function(t) {
                "undefined" == typeof t ? this.disabled = !this.disabled : this.disabled = !t
            }
            ,
            t.extend(t.easing, {
                easeOutQuad: function(t, e, n, i, o) {
                    return -i * (e /= o) * (e - 2) + n
                },
                easeOutCirc: function(t, e, n, i, o) {
                    return i * Math.sqrt(1 - (e = e / o - 1) * e) + n
                },
                easeOutExpo: function(t, e, n, i, o) {
                    return e === o ? n + i : i * (-Math.pow(2, -10 * e / o) + 1) + n
                }
            }),
            t.fn[o] = function(e) {
                return this.each(function() {
                    if (!t.data(this, "plugin_" + o)) {
                        var n = new i(this,e);
                        t.data(this, "plugin_" + o, n),
                            t.pep.peps.push(n)
                    }
                })
            }
            ,
            t.pep = {},
            t.pep.peps = [],
            t.pep.toggleAll = function(e) {
                t.each(this.peps, function(t, n) {
                    n.toggle(e)
                })
            }
            ,
            t.pep.unbind = function(e) {
                t.each(e, function(e, n) {
                    n = t(n);
                    var i = n.data("plugin_" + o);
                    "undefined" != typeof i && (i.toggle(!1),
                        i.unsubscribe(),
                        n.removeData("plugin_" + o))
                })
            }
    }(jQuery, window),
    function() {
        var t, e, n, i = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        n = Math.random,
            e = Math.floor,
            t = function() {
                function t(e, n, o) {
                    var r, s, a, l;
                    return this.el = e,
                        this.text = n,
                        this.options = null != o ? o : {},
                        this.clear = i(this.clear, this),
                        this.type = i(this.type, this),
                        this instanceof t ? ("string" == typeof this.el && (this.el = document.querySelector(this.el)),
                            this.len = this.text.length,
                            this.i = 0,
                            a = this.options,
                            r = a.accuracy,
                            s = a.interval,
                            this.callback = a.callback,
                            this.accuracy = null != r ? r : this.accuracy,
                            this["int"] = null != s ? s : this["int"],
                            (l = "textarea" === this.el.tagName.toLowerCase() || "input" === l) ? (this.attr = "value",
                                this.el.focus()) : this.attr = "innerText",
                            void this.type()) : new t(this.el,this.text,this.options)
                }
                return t.prototype["int"] = 100,
                    t.prototype.accuracy = .95,
                    t.prototype.keys = "qwertyuiopasdfghjklzxcvbnm,./;-=[]".split(""),
                    t.prototype.type = function() {
                        return this.i === this.len + 1 ? "function" == typeof this.callback ? this.callback() : void 0 : n() > this.accuracy ? (this.el[this.attr] = this.text.slice(0, this.i) + this.keys[e(n() * this.keys.length)],
                            this.timer = setTimeout(function(t) {
                                return function() {
                                    return t.el[t.attr] = t.text.slice(0, t.i),
                                        t.timer = setTimeout(t.type, n() * t["int"] + .8 * t["int"])
                                }
                            }(this), 1.5 * this["int"])) : (this.el[this.attr] = this.text.slice(0, this.i++),
                            this.timer = setTimeout(this.type, function(t) {
                                return function() {
                                    var e;
                                    return e = n() * t["int"] + .1 * t["int"],
                                    " " === t.text[t.i] && (e += n() * t["int"]),
                                    "." !== t.text[t.i] && "," !== t.text[t.i] || (e += n() * t["int"] * 3),
                                    n() > .97 && (e += 2 * t["int"]),
                                    n() > .95 && (e += t["int"]),
                                        e
                                }
                            }(this)()))
                    }
                    ,
                    t.prototype.pause = function() {
                        return clearTimeout(this.timer),
                            this.el[this.attr]
                    }
                    ,
                    t.prototype.clear = function(t) {
                        return null == t && (t = this.len),
                            -2 !== t ? (this.el[this.attr] = this.text.slice(0, this.i--),
                                setTimeout(this.clear.bind(this, --t), n() * this["int"])) : void 0
                    }
                    ,
                    t
            }(),
            ("undefined" != typeof module && null !== module ? module.exports : void 0) ? module.exports = t : ("undefined" != typeof define && null !== define ? define.amd : void 0) ? define(function() {
                return t
            }) : window.TuringType = t
    }
        .call(this),
    function(t) {
        "use strict";
        function e(t, n) {
            if (!(this instanceof e)) {
                var i = new e(t,n);
                return i.open(),
                    i
            }
            this.id = e.id++,
                this.setup(t, n),
                this.chainCallbacks(e._callbackChain)
        }
        if ("undefined" == typeof t)
            return void ("console"in window && window.console.info("Too much lightness, Featherlight needs jQuery."));
        var n = []
            , i = function(e) {
            return n = t.grep(n, function(t) {
                return t !== e && t.$instance.closest("body").length > 0
            })
        }
            , o = function(t, e) {
            var n = {}
                , i = new RegExp("^" + e + "([A-Z])(.*)");
            for (var o in t) {
                var r = o.match(i);
                if (r) {
                    var s = (r[1] + r[2].replace(/([A-Z])/g, "-$1")).toLowerCase();
                    n[s] = t[o]
                }
            }
            return n
        }
            , r = {
            keyup: "onKeyUp",
            resize: "onResize"
        }
            , s = function(n) {
            t.each(e.opened().reverse(), function() {
                return n.isDefaultPrevented() || !1 !== this[r[n.type]](n) ? void 0 : (n.preventDefault(),
                    n.stopPropagation(),
                    !1)
            })
        }
            , a = function(n) {
            if (n !== e._globalHandlerInstalled) {
                e._globalHandlerInstalled = n;
                var i = t.map(r, function(t, n) {
                    return n + "." + e.prototype.namespace
                }).join(" ");
                t(window)[n ? "on" : "off"](i, s)
            }
        };
        e.prototype = {
            constructor: e,
            namespace: "featherlight",
            targetAttr: "data-featherlight",
            variant: null,
            resetCss: !1,
            background: null,
            openTrigger: "click",
            closeTrigger: "click",
            filter: null,
            root: "body",
            openSpeed: 250,
            closeSpeed: 250,
            closeOnClick: "background",
            closeOnEsc: !0,
            closeIcon: "&#10005;",
            loading: "",
            persist: !1,
            otherClose: null,
            beforeOpen: t.noop,
            beforeContent: t.noop,
            beforeClose: t.noop,
            afterOpen: t.noop,
            afterContent: t.noop,
            afterClose: t.noop,
            onKeyUp: t.noop,
            onResize: t.noop,
            type: null,
            contentFilters: ["jquery", "image", "html", "ajax", "iframe", "text"],
            setup: function(e, n) {
                "object" != typeof e || e instanceof t != !1 || n || (n = e,
                    e = void 0);
                var i = t.extend(this, n, {
                    target: e
                })
                    , o = i.resetCss ? i.namespace + "-reset" : i.namespace
                    , r = t(i.background || ['<div class="' + o + "-loading " + o + '">', '<div class="' + o + '-content">', '<span class="' + o + "-close-icon " + i.namespace + '-close">', i.closeIcon, "</span>", '<div class="' + i.namespace + '-inner">' + i.loading + "</div>", "</div>", "</div>"].join(""))
                    , s = "." + i.namespace + "-close" + (i.otherClose ? "," + i.otherClose : "");
                return i.$instance = r.clone().addClass(i.variant),
                    i.$instance.on(i.closeTrigger + "." + i.namespace, function(e) {
                        var n = t(e.target);
                        ("background" === i.closeOnClick && n.is("." + i.namespace) || "anywhere" === i.closeOnClick || n.closest(s).length) && (e.preventDefault(),
                            i.close())
                    }),
                    this
            },
            getContent: function() {
                if (this.persist !== !1 && this.$content)
                    return this.$content;
                var e = this
                    , n = this.constructor.contentFilters
                    , i = function(t) {
                    return e.$currentTarget && e.$currentTarget.attr(t)
                }
                    , o = i(e.targetAttr)
                    , r = e.target || o || ""
                    , s = n[e.type];
                if (!s && r in n && (s = n[r],
                    r = e.target && o),
                    r = r || i("href") || "",
                    !s)
                    for (var a in n)
                        e[a] && (s = n[a],
                            r = e[a]);
                if (!s) {
                    var l = r;
                    if (r = null,
                        t.each(e.contentFilters, function() {
                            return s = n[this],
                            s.test && (r = s.test(l)),
                            !r && s.regex && l.match && l.match(s.regex) && (r = l),
                                !r
                        }),
                        !r)
                        return "console"in window && window.console.error("Featherlight: no content filter found " + (l ? ' for "' + l + '"' : " (no target specified)")),
                            !1
                }
                return s.process.call(e, r)
            },
            setContent: function(e) {
                var n = this;
                return (e.is("iframe") || t("iframe", e).length > 0) && n.$instance.addClass(n.namespace + "-iframe"),
                    n.$instance.removeClass(n.namespace + "-loading"),
                    n.$instance.find("." + n.namespace + "-inner").not(e).slice(1).remove().end().replaceWith(t.contains(n.$instance[0], e[0]) ? "" : e),
                    n.$content = e.addClass(n.namespace + "-inner"),
                    n
            },
            open: function(e) {
                var i = this;
                if (i.$instance.hide().appendTo(i.root),
                    !(e && e.isDefaultPrevented() || i.beforeOpen(e) === !1)) {
                    e && e.preventDefault();
                    var o = i.getContent();
                    if (o)
                        return n.push(i),
                            a(!0),
                            i.$instance.fadeIn(i.openSpeed),
                            i.beforeContent(e),
                            t.when(o).always(function(t) {
                                i.setContent(t),
                                    i.afterContent(e)
                            }).then(i.$instance.promise()).done(function() {
                                i.afterOpen(e)
                            })
                }
                return i.$instance.detach(),
                    t.Deferred().reject().promise()
            },
            close: function(e) {
                var n = this
                    , o = t.Deferred();
                return n.beforeClose(e) === !1 ? o.reject() : (0 === i(n).length && a(!1),
                    n.$instance.fadeOut(n.closeSpeed, function() {
                        n.$instance.detach(),
                            n.afterClose(e),
                            o.resolve()
                    })),
                    o.promise()
            },
            chainCallbacks: function(e) {
                for (var n in e)
                    this[n] = t.proxy(e[n], this, t.proxy(this[n], this))
            }
        },
            t.extend(e, {
                id: 0,
                autoBind: "[data-featherlight]",
                defaults: e.prototype,
                contentFilters: {
                    jquery: {
                        regex: /^[#.]\w/,
                        test: function(e) {
                            return e instanceof t && e
                        },
                        process: function(e) {
                            return this.persist !== !1 ? t(e) : t(e).clone(!0)
                        }
                    },
                    image: {
                        regex: /\.(png|jpg|jpeg|gif|tiff|bmp|svg)(\?\S*)?$/i,
                        process: function(e) {
                            var n = this
                                , i = t.Deferred()
                                , o = new Image
                                , r = t('<img src="' + e + '" alt="" class="' + n.namespace + '-image" />');
                            return o.onload = function() {
                                r.naturalWidth = o.width,
                                    r.naturalHeight = o.height,
                                    i.resolve(r)
                            }
                                ,
                                o.onerror = function() {
                                    i.reject(r)
                                }
                                ,
                                o.src = e,
                                i.promise()
                        }
                    },
                    html: {
                        regex: /^\s*<[\w!][^<]*>/,
                        process: function(e) {
                            return t(e)
                        }
                    },
                    ajax: {
                        regex: /./,
                        process: function(e) {
                            var n = t.Deferred()
                                , i = t("<div></div>").load(e, function(t, e) {
                                "error" !== e && n.resolve(i.contents()),
                                    n.fail()
                            });
                            return n.promise()
                        }
                    },
                    iframe: {
                        process: function(e) {
                            var n = new t.Deferred
                                , i = t("<iframe/>").hide().attr("src", e).css(o(this, "iframe")).on("load", function() {
                                n.resolve(i.show())
                            }).appendTo(this.$instance.find("." + this.namespace + "-content"));
                            return n.promise()
                        }
                    },
                    text: {
                        process: function(e) {
                            return t("<div>", {
                                text: e
                            })
                        }
                    }
                },
                functionAttributes: ["beforeOpen", "afterOpen", "beforeContent", "afterContent", "beforeClose", "afterClose"],
                readElementConfig: function(e, n) {
                    var i = this
                        , o = new RegExp("^data-" + n + "-(.*)")
                        , r = {};
                    return e && e.attributes && t.each(e.attributes, function() {
                        var e = this.name.match(o);
                        if (e) {
                            var n = this.value
                                , s = t.camelCase(e[1]);
                            if (t.inArray(s, i.functionAttributes) >= 0)
                                n = new Function(n);
                            else
                                try {
                                    n = t.parseJSON(n)
                                } catch (a) {}
                            r[s] = n
                        }
                    }),
                        r
                },
                extend: function(e, n) {
                    var i = function() {
                        this.constructor = e
                    };
                    return i.prototype = this.prototype,
                        e.prototype = new i,
                        e.__super__ = this.prototype,
                        t.extend(e, this, n),
                        e.defaults = e.prototype,
                        e
                },
                attach: function(e, n, i) {
                    var o = this;
                    "object" != typeof n || n instanceof t != !1 || i || (i = n,
                        n = void 0),
                        i = t.extend({}, i);
                    var r, s = i.namespace || o.defaults.namespace, a = t.extend({}, o.defaults, o.readElementConfig(e[0], s), i);
                    return e.on(a.openTrigger + "." + a.namespace, a.filter, function(s) {
                        var l = t.extend({
                            $source: e,
                            $currentTarget: t(this)
                        }, o.readElementConfig(e[0], a.namespace), o.readElementConfig(this, a.namespace), i)
                            , c = r || t(this).data("featherlight-persisted") || new o(n,l);
                        "shared" === c.persist ? r = c : c.persist !== !1 && t(this).data("featherlight-persisted", c),
                            l.$currentTarget.blur(),
                            c.open(s)
                    }),
                        e
                },
                current: function() {
                    var t = this.opened();
                    return t[t.length - 1] || null
                },
                opened: function() {
                    var e = this;
                    return i(),
                        t.grep(n, function(t) {
                            return t instanceof e
                        })
                },
                close: function() {
                    var t = this.current();
                    return t ? t.close() : void 0
                },
                _onReady: function() {
                    var e = this;
                    e.autoBind && (t(e.autoBind).each(function() {
                        e.attach(t(this))
                    }),
                        t(document).on("click", e.autoBind, function(n) {
                            n.isDefaultPrevented() || (n.preventDefault(),
                                e.attach(t(n.currentTarget)),
                                t(n.target).click())
                        }))
                },
                _callbackChain: {
                    onKeyUp: function(t, e) {
                        return 27 === e.keyCode ? (this.closeOnEsc && this.$instance.find("." + this.namespace + "-close:first").click(),
                            !1) : t(e)
                    },
                    onResize: function(t, e) {
                        if (this.$content.naturalWidth) {
                            var n = this.$content.naturalWidth
                                , i = this.$content.naturalHeight;
                            this.$content.css("width", "").css("height", "");
                            var o = Math.max(n / parseInt(this.$content.parent().css("width"), 10), i / parseInt(this.$content.parent().css("height"), 10));
                            o > 1 && this.$content.css("width", "" + n / o + "px").css("height", "" + i / o + "px")
                        }
                        return t(e)
                    },
                    afterContent: function(t, e) {
                        var n = t(e);
                        return this.onResize(e),
                            n
                    }
                }
            }),
            t.featherlight = e,
            t.fn.featherlight = function(t, n) {
                return e.attach(this, t, n)
            }
            ,
            t(document).ready(function() {
                e._onReady()
            })
    }(jQuery),
    function(t, e) {
        "undefined" != typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && "object" == typeof define.amd ? define(e) : this[t] = e()
    }("validator", function(t) {
        "use strict";
        function e(t) {
            var e = t.match(j);
            if (!e)
                return (new Date).getTimezoneOffset();
            var n = e[21];
            if (!n || "z" === n || "Z" === n)
                return 0;
            var i, o, r = e[22];
            return -1 !== n.indexOf(":") ? (i = parseInt(e[23]),
                o = parseInt(e[24])) : (i = 0,
                o = parseInt(e[23])),
            (60 * i + o) * ("-" === r ? 1 : -1)
        }
        function n(t, e) {
            t = t || {};
            for (var n in e)
                "undefined" == typeof t[n] && (t[n] = e[n]);
            return t
        }
        function i(t) {
            var e = "(\\" + t.symbol.replace(/\./g, "\\.") + ")" + (t.require_symbol ? "" : "?")
                , n = "-?"
                , i = "[1-9]\\d*"
                , o = "[1-9]\\d{0,2}(\\" + t.thousands_separator + "\\d{3})*"
                , r = ["0", i, o]
                , s = "(" + r.join("|") + ")?"
                , a = "(\\" + t.decimal_separator + "\\d{2})?"
                , l = s + a;
            return t.allow_negatives && !t.parens_for_negatives && (t.negative_sign_after_digits ? l += n : t.negative_sign_before_digits && (l = n + l)),
                t.allow_negative_sign_placeholder ? l = "( (?!\\-))?" + l : t.allow_space_after_symbol ? l = " ?" + l : t.allow_space_after_digits && (l += "( (?!$))?"),
                t.symbol_after_digits ? l += e : l = e + l,
            t.allow_negatives && (t.parens_for_negatives ? l = "(\\(" + l + "\\)|" + l + ")" : t.negative_sign_before_digits || t.negative_sign_after_digits || (l = n + l)),
                new RegExp("^(?!-? )(?=.*\\d)" + l + "$")
        }
        t = {
            version: "4.2.0"
        };
        var o = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i
            , r = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i
            , s = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i
            , a = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i
            , l = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i
            , c = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
            , u = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/
            , d = /^(?:[0-9]{9}X|[0-9]{10})$/
            , p = /^(?:[0-9]{13})$/
            , h = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/
            , f = /^[0-9A-F]{1,4}$/i
            , m = {
            3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
            4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
            5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
            all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
        }
            , v = /^[A-Z]+$/i
            , g = /^[0-9A-Z]+$/i
            , y = /^[-+]?[0-9]+$/
            , b = /^(?:[-+]?(?:0|[1-9][0-9]*))$/
            , w = /^(?:[-+]?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/
            , x = /^[0-9A-F]+$/i
            , k = /^[-+]?([0-9]+|\.[0-9]+|[0-9]+\.[0-9]+)$/
            , C = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i
            , T = /^[\x00-\x7F]+$/
            , _ = /[^\x00-\x7F]/
            , S = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/
            , $ = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/
            , E = /[\uD800-\uDBFF][\uDC00-\uDFFF]/
            , A = /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i
            , I = {
            "zh-CN": /^(\+?0?86\-?)?1[345789]\d{9}$/,
            "zh-TW": /^(\+?886\-?|0)?9\d{8}$/,
            "en-ZA": /^(\+?27|0)\d{9}$/,
            "en-AU": /^(\+?61|0)4\d{8}$/,
            "en-HK": /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
            "fr-FR": /^(\+?33|0)[67]\d{8}$/,
            "pt-PT": /^(\+351)?9[1236]\d{7}$/,
            "el-GR": /^(\+30)?((2\d{9})|(69\d{8}))$/,
            "en-GB": /^(\+?44|0)7\d{9}$/,
            "en-US": /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
            "en-ZM": /^(\+26)?09[567]\d{7}$/,
            "ru-RU": /^(\+?7|8)?9\d{9}$/,
            "nb-NO": /^(\+?47)?[49]\d{7}$/,
            "nn-NO": /^(\+?47)?[49]\d{7}$/
        }
            , j = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
        t.extend = function(e, n) {
            t[e] = function() {
                var e = Array.prototype.slice.call(arguments);
                return e[0] = t.toString(e[0]),
                    n.apply(t, e)
            }
        }
            ,
            t.init = function() {
                for (var e in t)
                    "function" == typeof t[e] && "toString" !== e && "toDate" !== e && "extend" !== e && "init" !== e && t.extend(e, t[e])
            }
            ,
            t.toString = function(t) {
                return "object" == typeof t && null !== t && t.toString ? t = t.toString() : (null === t || "undefined" == typeof t || isNaN(t) && !t.length) && (t = ""),
                "" + t
            }
            ,
            t.toDate = function(t) {
                return "[object Date]" === Object.prototype.toString.call(t) ? t : (t = Date.parse(t),
                    isNaN(t) ? null : new Date(t))
            }
            ,
            t.toFloat = function(t) {
                return parseFloat(t)
            }
            ,
            t.toInt = function(t, e) {
                return parseInt(t, e || 10)
            }
            ,
            t.toBoolean = function(t, e) {
                return e ? "1" === t || "true" === t : "0" !== t && "false" !== t && "" !== t
            }
            ,
            t.equals = function(e, n) {
                return e === t.toString(n)
            }
            ,
            t.contains = function(e, n) {
                return e.indexOf(t.toString(n)) >= 0
            }
            ,
            t.matches = function(t, e, n) {
                return "[object RegExp]" !== Object.prototype.toString.call(e) && (e = new RegExp(e,n)),
                    e.test(t)
            }
        ;
        var D = {
            allow_display_name: !1,
            allow_utf8_local_part: !0,
            require_tld: !0
        };
        t.isEmail = function(e, i) {
            if (i = n(i, D),
                i.allow_display_name) {
                var c = e.match(l);
                c && (e = c[1])
            }
            var u = e.split("@")
                , d = u.pop()
                , p = u.join("@")
                , h = d.toLowerCase();
            if ("gmail.com" !== h && "googlemail.com" !== h || (p = p.replace(/\./g, "").toLowerCase()),
            !t.isByteLength(p, 0, 64) || !t.isByteLength(d, 0, 256))
                return !1;
            if (!t.isFQDN(d, {
                require_tld: i.require_tld
            }))
                return !1;
            if ('"' === p[0])
                return p = p.slice(1, p.length - 1),
                    i.allow_utf8_local_part ? a.test(p) : r.test(p);
            for (var f = i.allow_utf8_local_part ? s : o, m = p.split("."), v = 0; v < m.length; v++)
                if (!f.test(m[v]))
                    return !1;
            return !0
        }
        ;
        var M = {
            protocols: ["http", "https", "ftp"],
            require_tld: !0,
            require_protocol: !1,
            require_valid_protocol: !0,
            allow_underscores: !1,
            allow_trailing_dot: !1,
            allow_protocol_relative_urls: !1
        };
        t.isURL = function(e, i) {
            if (!e || e.length >= 2083 || /\s/.test(e))
                return !1;
            if (0 === e.indexOf("mailto:"))
                return !1;
            i = n(i, M);
            var o, r, s, a, l, c, u;
            if (u = e.split("://"),
            u.length > 1) {
                if (o = u.shift(),
                i.require_valid_protocol && -1 === i.protocols.indexOf(o))
                    return !1
            } else {
                if (i.require_protocol)
                    return !1;
                i.allow_protocol_relative_urls && "//" === e.substr(0, 2) && (u[0] = e.substr(2))
            }
            return e = u.join("://"),
                u = e.split("#"),
                e = u.shift(),
                u = e.split("?"),
                e = u.shift(),
                u = e.split("/"),
                e = u.shift(),
                u = e.split("@"),
                u.length > 1 && (r = u.shift(),
                r.indexOf(":") >= 0 && r.split(":").length > 2) ? !1 : (a = u.join("@"),
                    u = a.split(":"),
                    s = u.shift(),
                    u.length && (c = u.join(":"),
                        l = parseInt(c, 10),
                    !/^[0-9]+$/.test(c) || 0 >= l || l > 65535) ? !1 : t.isIP(s) || t.isFQDN(s, i) || "localhost" === s ? i.host_whitelist && -1 === i.host_whitelist.indexOf(s) ? !1 : !i.host_blacklist || -1 === i.host_blacklist.indexOf(s) : !1)
        }
            ,
            t.isIP = function(e, n) {
                if (n = t.toString(n),
                    !n)
                    return t.isIP(e, 4) || t.isIP(e, 6);
                if ("4" === n) {
                    if (!h.test(e))
                        return !1;
                    var i = e.split(".").sort(function(t, e) {
                        return t - e
                    });
                    return i[3] <= 255
                }
                if ("6" === n) {
                    var o = e.split(":")
                        , r = !1
                        , s = t.isIP(o[o.length - 1], 4)
                        , a = s ? 7 : 8;
                    if (o.length > a)
                        return !1;
                    if ("::" === e)
                        return !0;
                    "::" === e.substr(0, 2) ? (o.shift(),
                        o.shift(),
                        r = !0) : "::" === e.substr(e.length - 2) && (o.pop(),
                        o.pop(),
                        r = !0);
                    for (var l = 0; l < o.length; ++l)
                        if ("" === o[l] && l > 0 && l < o.length - 1) {
                            if (r)
                                return !1;
                            r = !0
                        } else if (s && l == o.length - 1)
                            ;
                        else if (!f.test(o[l]))
                            return !1;
                    return r ? o.length >= 1 : o.length === a
                }
                return !1
            }
        ;
        var N = {
            require_tld: !0,
            allow_underscores: !1,
            allow_trailing_dot: !1
        };
        t.isFQDN = function(t, e) {
            e = n(e, N),
            e.allow_trailing_dot && "." === t[t.length - 1] && (t = t.substring(0, t.length - 1));
            var i = t.split(".");
            if (e.require_tld) {
                var o = i.pop();
                if (!i.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(o))
                    return !1
            }
            for (var r, s = 0; s < i.length; s++) {
                if (r = i[s],
                    e.allow_underscores) {
                    if (r.indexOf("__") >= 0)
                        return !1;
                    r = r.replace(/_/g, "")
                }
                if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(r))
                    return !1;
                if (/[\uff01-\uff5e]/.test(r))
                    return !1;
                if ("-" === r[0] || "-" === r[r.length - 1] || r.indexOf("---") >= 0)
                    return !1
            }
            return !0
        }
            ,
            t.isBoolean = function(t) {
                return ["true", "false", "1", "0"].indexOf(t) >= 0
            }
            ,
            t.isAlpha = function(t) {
                return v.test(t)
            }
            ,
            t.isAlphanumeric = function(t) {
                return g.test(t)
            }
            ,
            t.isNumeric = function(t) {
                return y.test(t)
            }
            ,
            t.isDecimal = function(t) {
                return "" !== t && k.test(t)
            }
            ,
            t.isHexadecimal = function(t) {
                return x.test(t)
            }
            ,
            t.isHexColor = function(t) {
                return C.test(t)
            }
            ,
            t.isLowercase = function(t) {
                return t === t.toLowerCase()
            }
            ,
            t.isUppercase = function(t) {
                return t === t.toUpperCase()
            }
            ,
            t.isInt = function(t, e) {
                return e = e || {},
                b.test(t) && (!e.hasOwnProperty("min") || t >= e.min) && (!e.hasOwnProperty("max") || t <= e.max)
            }
            ,
            t.isFloat = function(t, e) {
                return e = e || {},
                    "" === t || "." === t ? !1 : w.test(t) && (!e.hasOwnProperty("min") || t >= e.min) && (!e.hasOwnProperty("max") || t <= e.max)
            }
            ,
            t.isDivisibleBy = function(e, n) {
                return t.toFloat(e) % t.toInt(n) === 0
            }
            ,
            t.isNull = function(t) {
                return 0 === t.length
            }
            ,
            t.isLength = function(t, e, n) {
                var i = t.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || []
                    , o = t.length - i.length;
                return o >= e && ("undefined" == typeof n || n >= o)
            }
            ,
            t.isByteLength = function(t, e, n) {
                var i = encodeURI(t).split(/%..|./).length - 1;
                return i >= e && ("undefined" == typeof n || n >= i)
            }
            ,
            t.isUUID = function(t, e) {
                var n = m[e ? e : "all"];
                return n && n.test(t)
            }
            ,
            t.isDate = function(t) {
                var n = new Date(new Date(t).toUTCString())
                    , i = String(n.getUTCDate())
                    , o = n.getTimezoneOffset() - e(t);
                n = new Date(n.getTime() + 6e4 * o);
                var r, s, a, l = String(n.getDate());
                return isNaN(Date.parse(n)) ? !1 : (s = t.match(/(^|[^:\d])[23]\d([^:\d]|$)/g)) ? (r = s.map(function(t) {
                    return t.match(/\d+/g)[0]
                }).join("/"),
                    a = String(n.getFullYear()).slice(-2),
                    r === l || r === i || r === a ? !0 : r === l + "/" + a || r === a + "/" + l ? !0 : r === i + "/" + a || r === a + "/" + i) : !0
            }
            ,
            t.isAfter = function(e, n) {
                var i = t.toDate(n || new Date)
                    , o = t.toDate(e);
                return !!(o && i && o > i)
            }
            ,
            t.isBefore = function(e, n) {
                var i = t.toDate(n || new Date)
                    , o = t.toDate(e);
                return !!(o && i && i > o)
            }
            ,
            t.isIn = function(e, n) {
                var i;
                if ("[object Array]" === Object.prototype.toString.call(n)) {
                    var o = [];
                    for (i in n)
                        o[i] = t.toString(n[i]);
                    return o.indexOf(e) >= 0
                }
                return "object" == typeof n ? n.hasOwnProperty(e) : n && "function" == typeof n.indexOf ? n.indexOf(e) >= 0 : !1
            }
            ,
            t.isCreditCard = function(t) {
                var e = t.replace(/[^0-9]+/g, "");
                if (!c.test(e))
                    return !1;
                for (var n, i, o, r = 0, s = e.length - 1; s >= 0; s--)
                    n = e.substring(s, s + 1),
                        i = parseInt(n, 10),
                        o ? (i *= 2,
                            r += i >= 10 ? i % 10 + 1 : i) : r += i,
                        o = !o;
                return !!(r % 10 === 0 ? e : !1)
            }
            ,
            t.isISIN = function(t) {
                if (!u.test(t))
                    return !1;
                for (var e, n, i = t.replace(/[A-Z]/g, function(t) {
                    return parseInt(t, 36)
                }), o = 0, r = !0, s = i.length - 2; s >= 0; s--)
                    e = i.substring(s, s + 1),
                        n = parseInt(e, 10),
                        r ? (n *= 2,
                            o += n >= 10 ? n + 1 : n) : o += n,
                        r = !r;
                return parseInt(t.substr(t.length - 1), 10) === (1e4 - o) % 10
            }
            ,
            t.isISBN = function(e, n) {
                if (n = t.toString(n),
                    !n)
                    return t.isISBN(e, 10) || t.isISBN(e, 13);
                var i, o = e.replace(/[\s-]+/g, ""), r = 0;
                if ("10" === n) {
                    if (!d.test(o))
                        return !1;
                    for (i = 0; 9 > i; i++)
                        r += (i + 1) * o.charAt(i);
                    if (r += "X" === o.charAt(9) ? 100 : 10 * o.charAt(9),
                    r % 11 === 0)
                        return !!o
                } else if ("13" === n) {
                    if (!p.test(o))
                        return !1;
                    var s = [1, 3];
                    for (i = 0; 12 > i; i++)
                        r += s[i % 2] * o.charAt(i);
                    if (o.charAt(12) - (10 - r % 10) % 10 === 0)
                        return !!o
                }
                return !1
            }
            ,
            t.isMobilePhone = function(t, e) {
                return e in I ? I[e].test(t) : !1
            }
        ;
        var F = {
            symbol: "$",
            require_symbol: !1,
            allow_space_after_symbol: !1,
            symbol_after_digits: !1,
            allow_negatives: !0,
            parens_for_negatives: !1,
            negative_sign_before_digits: !1,
            negative_sign_after_digits: !1,
            allow_negative_sign_placeholder: !1,
            thousands_separator: ",",
            decimal_separator: ".",
            allow_space_after_digits: !1
        };
        t.isCurrency = function(t, e) {
            return e = n(e, F),
                i(e).test(t)
        }
            ,
            t.isJSON = function(t) {
                try {
                    var e = JSON.parse(t);
                    return !!e && "object" == typeof e
                } catch (n) {}
                return !1
            }
            ,
            t.isMultibyte = function(t) {
                return _.test(t)
            }
            ,
            t.isAscii = function(t) {
                return T.test(t)
            }
            ,
            t.isFullWidth = function(t) {
                return S.test(t)
            }
            ,
            t.isHalfWidth = function(t) {
                return $.test(t)
            }
            ,
            t.isVariableWidth = function(t) {
                return S.test(t) && $.test(t)
            }
            ,
            t.isSurrogatePair = function(t) {
                return E.test(t)
            }
            ,
            t.isBase64 = function(t) {
                return A.test(t)
            }
            ,
            t.isMongoId = function(e) {
                return t.isHexadecimal(e) && 24 === e.length
            }
            ,
            t.isISO8601 = function(t) {
                return j.test(t)
            }
            ,
            t.ltrim = function(t, e) {
                var n = e ? new RegExp("^[" + e + "]+","g") : /^\s+/g;
                return t.replace(n, "")
            }
            ,
            t.rtrim = function(t, e) {
                var n = e ? new RegExp("[" + e + "]+$","g") : /\s+$/g;
                return t.replace(n, "")
            }
            ,
            t.trim = function(t, e) {
                var n = e ? new RegExp("^[" + e + "]+|[" + e + "]+$","g") : /^\s+|\s+$/g;
                return t.replace(n, "")
            }
            ,
            t.escape = function(t) {
                return t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2F;").replace(/\`/g, "&#96;")
            }
            ,
            t.stripLow = function(e, n) {
                var i = n ? "\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F" : "\\x00-\\x1F\\x7F";
                return t.blacklist(e, i)
            }
            ,
            t.whitelist = function(t, e) {
                return t.replace(new RegExp("[^" + e + "]+","g"), "")
            }
            ,
            t.blacklist = function(t, e) {
                return t.replace(new RegExp("[" + e + "]+","g"), "")
            }
        ;
        var P = {
            lowercase: !0
        };
        return t.normalizeEmail = function(e, i) {
            if (i = n(i, P),
                !t.isEmail(e))
                return !1;
            var o = e.split("@", 2);
            if (o[1] = o[1].toLowerCase(),
            "gmail.com" === o[1] || "googlemail.com" === o[1]) {
                if (o[0] = o[0].toLowerCase().replace(/\./g, ""),
                "+" === o[0][0])
                    return !1;
                o[0] = o[0].split("+")[0],
                    o[1] = "gmail.com"
            } else
                i.lowercase && (o[0] = o[0].toLowerCase());
            return o.join("@")
        }
            ,
            t.init(),
            t
    }),
    function(t, e, n) {
        function i(e, n) {
            this.bodyOverflowX,
                this.callbacks = {
                    hide: [],
                    show: []
                },
                this.checkInterval = null,
                this.Content,
                this.$el = t(e),
                this.$elProxy,
                this.elProxyPosition,
                this.enabled = !0,
                this.options = t.extend({}, l, n),
                this.mouseIsOverProxy = !1,
                this.namespace = "tooltipster-" + Math.round(1e5 * Math.random()),
                this.Status = "hidden",
                this.timerHide = null,
                this.timerShow = null,
                this.$tooltip,
                this.options.iconTheme = this.options.iconTheme.replace(".", ""),
                this.options.theme = this.options.theme.replace(".", ""),
                this._init()
        }
        function o(e, n) {
            var i = !0;
            return t.each(e, function(t) {
                return "undefined" == typeof n[t] || e[t] !== n[t] ? (i = !1,
                    !1) : void 0
            }),
                i
        }
        function r() {
            return !u && c
        }
        function s() {
            var t = n.body || n.documentElement
                , e = t.style
                , i = "transition";
            if ("string" == typeof e[i])
                return !0;
            v = ["Moz", "Webkit", "Khtml", "O", "ms"],
                i = i.charAt(0).toUpperCase() + i.substr(1);
            for (var o = 0; o < v.length; o++)
                if ("string" == typeof e[v[o] + i])
                    return !0;
            return !1
        }
        var a = "tooltipster"
            , l = {
            animation: "fade",
            arrow: !0,
            arrowColor: "",
            autoClose: !0,
            content: null,
            contentAsHTML: !1,
            contentCloning: !0,
            debug: !0,
            delay: 200,
            minWidth: 0,
            maxWidth: null,
            functionInit: function() {},
            functionBefore: function(t, e) {
                e()
            },
            functionReady: function() {},
            functionAfter: function() {},
            hideOnClick: !1,
            icon: "(?)",
            iconCloning: !0,
            iconDesktop: !1,
            iconTouch: !1,
            iconTheme: "tooltipster-icon",
            interactive: !1,
            interactiveTolerance: 350,
            multiple: !1,
            offsetX: 0,
            offsetY: 0,
            onlyOne: !1,
            position: "top",
            positionTracker: !1,
            positionTrackerCallback: function() {
                "hover" == this.option("trigger") && this.option("autoClose") && this.hide()
            },
            restoration: "current",
            speed: 350,
            timer: 0,
            theme: "tooltipster-default",
            touchDevices: !0,
            trigger: "hover",
            updateAnimation: !0
        };
        i.prototype = {
            _init: function() {
                var e = this;
                if (n.querySelector) {
                    var i = null;
                    void 0 === e.$el.data("tooltipster-initialTitle") && (i = e.$el.attr("title"),
                    void 0 === i && (i = null),
                        e.$el.data("tooltipster-initialTitle", i)),
                        null !== e.options.content ? e._content_set(e.options.content) : e._content_set(i);
                    var o = e.options.functionInit.call(e.$el, e.$el, e.Content);
                    "undefined" != typeof o && e._content_set(o),
                        e.$el.removeAttr("title").addClass("tooltipstered"),
                        !c && e.options.iconDesktop || c && e.options.iconTouch ? ("string" == typeof e.options.icon ? (e.$elProxy = t('<span class="' + e.options.iconTheme + '"></span>'),
                            e.$elProxy.text(e.options.icon)) : e.options.iconCloning ? e.$elProxy = e.options.icon.clone(!0) : e.$elProxy = e.options.icon,
                            e.$elProxy.insertAfter(e.$el)) : e.$elProxy = e.$el,
                        "hover" == e.options.trigger ? (e.$elProxy.on("mouseenter." + e.namespace, function() {
                            r() && !e.options.touchDevices || (e.mouseIsOverProxy = !0,
                                e._show())
                        }).on("mouseleave." + e.namespace, function() {
                            r() && !e.options.touchDevices || (e.mouseIsOverProxy = !1)
                        }),
                        c && e.options.touchDevices && e.$elProxy.on("touchstart." + e.namespace, function() {
                            e._showNow()
                        })) : "click" == e.options.trigger && e.$elProxy.on("click." + e.namespace, function() {
                            r() && !e.options.touchDevices || e._show()
                        })
                }
            },
            _show: function() {
                var t = this;
                "shown" != t.Status && "appearing" != t.Status && (t.options.delay ? t.timerShow = setTimeout(function() {
                    ("click" == t.options.trigger || "hover" == t.options.trigger && t.mouseIsOverProxy) && t._showNow()
                }, t.options.delay) : t._showNow())
            },
            _showNow: function(n) {
                var i = this;
                i.options.functionBefore.call(i.$el, i.$el, function() {
                    if (i.enabled && null !== i.Content) {
                        n && i.callbacks.show.push(n),
                            i.callbacks.hide = [],
                            clearTimeout(i.timerShow),
                            i.timerShow = null,
                            clearTimeout(i.timerHide),
                            i.timerHide = null,
                        i.options.onlyOne && t(".tooltipstered").not(i.$el).each(function(e, n) {
                            var i = t(n)
                                , o = i.data("tooltipster-ns");
                            t.each(o, function(t, e) {
                                var n = i.data(e)
                                    , o = n.status()
                                    , r = n.option("autoClose");
                                "hidden" !== o && "disappearing" !== o && r && n.hide()
                            })
                        });
                        var o = function() {
                            i.Status = "shown",
                                t.each(i.callbacks.show, function(t, e) {
                                    e.call(i.$el)
                                }),
                                i.callbacks.show = []
                        };
                        if ("hidden" !== i.Status) {
                            var r = 0;
                            "disappearing" === i.Status ? (i.Status = "appearing",
                                s() ? (i.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-" + i.options.animation + "-show"),
                                i.options.speed > 0 && i.$tooltip.delay(i.options.speed),
                                    i.$tooltip.queue(o)) : i.$tooltip.stop().fadeIn(o)) : "shown" === i.Status && o()
                        } else {
                            i.Status = "appearing";
                            var r = i.options.speed;
                            i.bodyOverflowX = t("body").css("overflow-x"),
                                t("body").css("overflow-x", "hidden");
                            var a = "tooltipster-" + i.options.animation
                                , l = "-webkit-transition-duration: " + i.options.speed + "ms; -webkit-animation-duration: " + i.options.speed + "ms; -moz-transition-duration: " + i.options.speed + "ms; -moz-animation-duration: " + i.options.speed + "ms; -o-transition-duration: " + i.options.speed + "ms; -o-animation-duration: " + i.options.speed + "ms; -ms-transition-duration: " + i.options.speed + "ms; -ms-animation-duration: " + i.options.speed + "ms; transition-duration: " + i.options.speed + "ms; animation-duration: " + i.options.speed + "ms;"
                                , u = i.options.minWidth ? "min-width:" + Math.round(i.options.minWidth) + "px;" : ""
                                , d = i.options.maxWidth ? "max-width:" + Math.round(i.options.maxWidth) + "px;" : ""
                                , p = i.options.interactive ? "pointer-events: auto;" : "";
                            if (i.$tooltip = t('<div class="tooltipster-base ' + i.options.theme + '" style="' + u + " " + d + " " + p + " " + l + '"><div class="tooltipster-content"></div></div>'),
                            s() && i.$tooltip.addClass(a),
                                i._content_insert(),
                                i.$tooltip.appendTo("body"),
                                i.reposition(),
                                i.options.functionReady.call(i.$el, i.$el, i.$tooltip),
                                s() ? (i.$tooltip.addClass(a + "-show"),
                                i.options.speed > 0 && i.$tooltip.delay(i.options.speed),
                                    i.$tooltip.queue(o)) : i.$tooltip.css("display", "none").fadeIn(i.options.speed, o),
                                i._interval_set(),
                                t(e).on("scroll." + i.namespace + " resize." + i.namespace, function() {
                                    i.reposition()
                                }),
                                i.options.autoClose)
                                if (t("body").off("." + i.namespace),
                                "hover" == i.options.trigger) {
                                    if (c && setTimeout(function() {
                                        t("body").on("touchstart." + i.namespace, function() {
                                            i.hide()
                                        })
                                    }, 0),
                                        i.options.interactive) {
                                        c && i.$tooltip.on("touchstart." + i.namespace, function(t) {
                                            t.stopPropagation()
                                        });
                                        var h = null;
                                        i.$elProxy.add(i.$tooltip).on("mouseleave." + i.namespace + "-autoClose", function() {
                                            clearTimeout(h),
                                                h = setTimeout(function() {
                                                    i.hide()
                                                }, i.options.interactiveTolerance)
                                        }).on("mouseenter." + i.namespace + "-autoClose", function() {
                                            clearTimeout(h)
                                        })
                                    } else
                                        i.$elProxy.on("mouseleave." + i.namespace + "-autoClose", function() {
                                            i.hide()
                                        });
                                    i.options.hideOnClick && i.$elProxy.on("click." + i.namespace + "-autoClose", function() {
                                        i.hide()
                                    })
                                } else
                                    "click" == i.options.trigger && (setTimeout(function() {
                                        t("body").on("click." + i.namespace + " touchstart." + i.namespace, function() {
                                            i.hide()
                                        })
                                    }, 0),
                                    i.options.interactive && i.$tooltip.on("click." + i.namespace + " touchstart." + i.namespace, function(t) {
                                        t.stopPropagation()
                                    }))
                        }
                        i.options.timer > 0 && (i.timerHide = setTimeout(function() {
                            i.timerHide = null,
                                i.hide()
                        }, i.options.timer + r))
                    }
                })
            },
            _interval_set: function() {
                var e = this;
                e.checkInterval = setInterval(function() {
                    if (0 === t("body").find(e.$el).length || 0 === t("body").find(e.$elProxy).length || "hidden" == e.Status || 0 === t("body").find(e.$tooltip).length)
                        "shown" != e.Status && "appearing" != e.Status || e.hide(),
                            e._interval_cancel();
                    else if (e.options.positionTracker) {
                        var n = e._repositionInfo(e.$elProxy)
                            , i = !1;
                        o(n.dimension, e.elProxyPosition.dimension) && ("fixed" === e.$elProxy.css("position") ? o(n.position, e.elProxyPosition.position) && (i = !0) : o(n.offset, e.elProxyPosition.offset) && (i = !0)),
                        i || (e.reposition(),
                            e.options.positionTrackerCallback.call(e, e.$el))
                    }
                }, 200)
            },
            _interval_cancel: function() {
                clearInterval(this.checkInterval),
                    this.checkInterval = null
            },
            _content_set: function(t) {
                "object" == typeof t && null !== t && this.options.contentCloning && (t = t.clone(!0)),
                    this.Content = t
            },
            _content_insert: function() {
                var t = this
                    , e = this.$tooltip.find(".tooltipster-content");
                "string" != typeof t.Content || t.options.contentAsHTML ? e.empty().append(t.Content) : e.text(t.Content)
            },
            _update: function(t) {
                var e = this;
                e._content_set(t),
                    null !== e.Content ? "hidden" !== e.Status && (e._content_insert(),
                        e.reposition(),
                    e.options.updateAnimation && (s() ? (e.$tooltip.css({
                        width: "",
                        "-webkit-transition": "all " + e.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                        "-moz-transition": "all " + e.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                        "-o-transition": "all " + e.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                        "-ms-transition": "all " + e.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                        transition: "all " + e.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms"
                    }).addClass("tooltipster-content-changing"),
                        setTimeout(function() {
                            "hidden" != e.Status && (e.$tooltip.removeClass("tooltipster-content-changing"),
                                setTimeout(function() {
                                    "hidden" !== e.Status && e.$tooltip.css({
                                        "-webkit-transition": e.options.speed + "ms",
                                        "-moz-transition": e.options.speed + "ms",
                                        "-o-transition": e.options.speed + "ms",
                                        "-ms-transition": e.options.speed + "ms",
                                        transition: e.options.speed + "ms"
                                    })
                                }, e.options.speed))
                        }, e.options.speed)) : e.$tooltip.fadeTo(e.options.speed, .5, function() {
                        "hidden" != e.Status && e.$tooltip.fadeTo(e.options.speed, 1)
                    }))) : e.hide()
            },
            _repositionInfo: function(t) {
                return {
                    dimension: {
                        height: t.outerHeight(!1),
                        width: t.outerWidth(!1)
                    },
                    offset: t.offset(),
                    position: {
                        left: parseInt(t.css("left")),
                        top: parseInt(t.css("top"))
                    }
                }
            },
            hide: function(n) {
                var i = this;
                n && i.callbacks.hide.push(n),
                    i.callbacks.show = [],
                    clearTimeout(i.timerShow),
                    i.timerShow = null,
                    clearTimeout(i.timerHide),
                    i.timerHide = null;
                var o = function() {
                    t.each(i.callbacks.hide, function(t, e) {
                        e.call(i.$el)
                    }),
                        i.callbacks.hide = []
                };
                if ("shown" == i.Status || "appearing" == i.Status) {
                    i.Status = "disappearing";
                    var r = function() {
                        i.Status = "hidden",
                        "object" == typeof i.Content && null !== i.Content && i.Content.detach(),
                            i.$tooltip.remove(),
                            i.$tooltip = null,
                            t(e).off("." + i.namespace),
                            t("body").off("." + i.namespace).css("overflow-x", i.bodyOverflowX),
                            t("body").off("." + i.namespace),
                            i.$elProxy.off("." + i.namespace + "-autoClose"),
                            i.options.functionAfter.call(i.$el, i.$el),
                            o()
                    };
                    s() ? (i.$tooltip.clearQueue().removeClass("tooltipster-" + i.options.animation + "-show").addClass("tooltipster-dying"),
                    i.options.speed > 0 && i.$tooltip.delay(i.options.speed),
                        i.$tooltip.queue(r)) : i.$tooltip.stop().fadeOut(i.options.speed, r)
                } else
                    "hidden" == i.Status && o();
                return i
            },
            show: function(t) {
                return this._showNow(t),
                    this
            },
            update: function(t) {
                return this.content(t)
            },
            content: function(t) {
                return "undefined" == typeof t ? this.Content : (this._update(t),
                    this)
            },
            reposition: function() {
                function n() {
                    var n = t(e).scrollLeft();
                    0 > E - n && (r = E - n,
                        E = n),
                    E + l - n > s && (r = E - (s + n - l),
                        E = s + n - l)
                }
                function i(n, i) {
                    a.offset.top - t(e).scrollTop() - c - j - 12 < 0 && i.indexOf("top") > -1 && (M = n),
                    a.offset.top + a.dimension.height + c + 12 + j > t(e).scrollTop() + t(e).height() && i.indexOf("bottom") > -1 && (M = n,
                        I = a.offset.top - c - j - 12)
                }
                var o = this;
                if (0 !== t("body").find(o.$tooltip).length) {
                    o.$tooltip.css("width", ""),
                        o.elProxyPosition = o._repositionInfo(o.$elProxy);
                    var r = null
                        , s = t(e).width()
                        , a = o.elProxyPosition
                        , l = o.$tooltip.outerWidth(!1)
                        , c = (o.$tooltip.innerWidth() + 1,
                        o.$tooltip.outerHeight(!1));
                    if (o.$elProxy.is("area")) {
                        var u = o.$elProxy.attr("shape")
                            , d = o.$elProxy.parent().attr("name")
                            , p = t('img[usemap="#' + d + '"]')
                            , h = p.offset().left
                            , f = p.offset().top
                            , m = void 0 !== o.$elProxy.attr("coords") ? o.$elProxy.attr("coords").split(",") : void 0;
                        if ("circle" == u) {
                            var v = parseInt(m[0])
                                , g = parseInt(m[1])
                                , y = parseInt(m[2]);
                            a.dimension.height = 2 * y,
                                a.dimension.width = 2 * y,
                                a.offset.top = f + g - y,
                                a.offset.left = h + v - y
                        } else if ("rect" == u) {
                            var v = parseInt(m[0])
                                , g = parseInt(m[1])
                                , b = parseInt(m[2])
                                , w = parseInt(m[3]);
                            a.dimension.height = w - g,
                                a.dimension.width = b - v,
                                a.offset.top = f + g,
                                a.offset.left = h + v
                        } else if ("poly" == u) {
                            for (var x = 0, k = 0, C = 0, T = 0, _ = "even", S = 0; S < m.length; S++) {
                                var $ = parseInt(m[S]);
                                "even" == _ ? ($ > C && (C = $,
                                0 === S && (x = C)),
                                x > $ && (x = $),
                                    _ = "odd") : ($ > T && (T = $,
                                1 == S && (k = T)),
                                k > $ && (k = $),
                                    _ = "even")
                            }
                            a.dimension.height = T - k,
                                a.dimension.width = C - x,
                                a.offset.top = f + k,
                                a.offset.left = h + x
                        } else
                            a.dimension.height = p.outerHeight(!1),
                                a.dimension.width = p.outerWidth(!1),
                                a.offset.top = f,
                                a.offset.left = h
                    }
                    var E = 0
                        , A = 0
                        , I = 0
                        , j = parseInt(o.options.offsetY)
                        , D = parseInt(o.options.offsetX)
                        , M = o.options.position;
                    if ("top" == M) {
                        var N = a.offset.left + l - (a.offset.left + a.dimension.width);
                        E = a.offset.left + D - N / 2,
                            I = a.offset.top - c - j - 12,
                            n(),
                            i("bottom", "top")
                    }
                    if ("top-left" == M && (E = a.offset.left + D,
                        I = a.offset.top - c - j - 12,
                        n(),
                        i("bottom-left", "top-left")),
                    "top-right" == M && (E = a.offset.left + a.dimension.width + D - l,
                        I = a.offset.top - c - j - 12,
                        n(),
                        i("bottom-right", "top-right")),
                    "bottom" == M) {
                        var N = a.offset.left + l - (a.offset.left + a.dimension.width);
                        E = a.offset.left - N / 2 + D,
                            I = a.offset.top + a.dimension.height + j + 12,
                            n(),
                            i("top", "bottom")
                    }
                    if ("bottom-left" == M && (E = a.offset.left + D,
                        I = a.offset.top + a.dimension.height + j + 12,
                        n(),
                        i("top-left", "bottom-left")),
                    "bottom-right" == M && (E = a.offset.left + a.dimension.width + D - l,
                        I = a.offset.top + a.dimension.height + j + 12,
                        n(),
                        i("top-right", "bottom-right")),
                    "left" == M) {
                        E = a.offset.left - D - l - 12,
                            A = a.offset.left + D + a.dimension.width + 12;
                        var F = a.offset.top + c - (a.offset.top + a.dimension.height);
                        if (I = a.offset.top - F / 2 - j,
                        0 > E && A + l > s) {
                            var P = 2 * parseFloat(o.$tooltip.css("border-width"))
                                , O = l + E - P;
                            o.$tooltip.css("width", O + "px"),
                                c = o.$tooltip.outerHeight(!1),
                                E = a.offset.left - D - O - 12 - P,
                                F = a.offset.top + c - (a.offset.top + a.dimension.height),
                                I = a.offset.top - F / 2 - j
                        } else
                            0 > E && (E = a.offset.left + D + a.dimension.width + 12,
                                r = "left")
                    }
                    if ("right" == M) {
                        E = a.offset.left + D + a.dimension.width + 12,
                            A = a.offset.left - D - l - 12;
                        var F = a.offset.top + c - (a.offset.top + a.dimension.height);
                        if (I = a.offset.top - F / 2 - j,
                        E + l > s && 0 > A) {
                            var P = 2 * parseFloat(o.$tooltip.css("border-width"))
                                , O = s - E - P;
                            o.$tooltip.css("width", O + "px"),
                                c = o.$tooltip.outerHeight(!1),
                                F = a.offset.top + c - (a.offset.top + a.dimension.height),
                                I = a.offset.top - F / 2 - j
                        } else
                            E + l > s && (E = a.offset.left - D - l - 12,
                                r = "right")
                    }
                    if (o.options.arrow) {
                        var L = "tooltipster-arrow-" + M;
                        if (o.options.arrowColor.length < 1)
                            var H = o.$tooltip.css("background-color");
                        else
                            var H = o.options.arrowColor;
                        if (r ? "left" == r ? (L = "tooltipster-arrow-right",
                            r = "") : "right" == r ? (L = "tooltipster-arrow-left",
                            r = "") : r = "left:" + Math.round(r) + "px;" : r = "",
                        "top" == M || "top-left" == M || "top-right" == M)
                            var q = parseFloat(o.$tooltip.css("border-bottom-width"))
                                , z = o.$tooltip.css("border-bottom-color");
                        else if ("bottom" == M || "bottom-left" == M || "bottom-right" == M)
                            var q = parseFloat(o.$tooltip.css("border-top-width"))
                                , z = o.$tooltip.css("border-top-color");
                        else if ("left" == M)
                            var q = parseFloat(o.$tooltip.css("border-right-width"))
                                , z = o.$tooltip.css("border-right-color");
                        else if ("right" == M)
                            var q = parseFloat(o.$tooltip.css("border-left-width"))
                                , z = o.$tooltip.css("border-left-color");
                        else
                            var q = parseFloat(o.$tooltip.css("border-bottom-width"))
                                , z = o.$tooltip.css("border-bottom-color");
                        q > 1 && q++;
                        var R = "";
                        if (0 !== q) {
                            var B = ""
                                , W = "border-color: " + z + ";";
                            -1 !== L.indexOf("bottom") ? B = "margin-top: -" + Math.round(q) + "px;" : -1 !== L.indexOf("top") ? B = "margin-bottom: -" + Math.round(q) + "px;" : -1 !== L.indexOf("left") ? B = "margin-right: -" + Math.round(q) + "px;" : -1 !== L.indexOf("right") && (B = "margin-left: -" + Math.round(q) + "px;"),
                                R = '<span class="tooltipster-arrow-border" style="' + B + " " + W + ';"></span>'
                        }
                        o.$tooltip.find(".tooltipster-arrow").remove();
                        var U = '<div class="' + L + ' tooltipster-arrow" style="' + r + '">' + R + '<span style="border-color:' + H + ';"></span></div>';
                        o.$tooltip.append(U)
                    }
                    o.$tooltip.css({
                        top: Math.round(I) + "px",
                        left: Math.round(E) + "px"
                    })
                }
                return o
            },
            enable: function() {
                return this.enabled = !0,
                    this
            },
            disable: function() {
                return this.hide(),
                    this.enabled = !1,
                    this
            },
            destroy: function() {
                var e = this;
                e.hide(),
                e.$el[0] !== e.$elProxy[0] && e.$elProxy.remove(),
                    e.$el.removeData(e.namespace).off("." + e.namespace);
                var n = e.$el.data("tooltipster-ns");
                if (1 === n.length) {
                    var i = null;
                    "previous" === e.options.restoration ? i = e.$el.data("tooltipster-initialTitle") : "current" === e.options.restoration && (i = "string" == typeof e.Content ? e.Content : t("<div></div>").append(e.Content).html()),
                    i && e.$el.attr("title", i),
                        e.$el.removeClass("tooltipstered").removeData("tooltipster-ns").removeData("tooltipster-initialTitle")
                } else
                    n = t.grep(n, function(t) {
                        return t !== e.namespace
                    }),
                        e.$el.data("tooltipster-ns", n);
                return e
            },
            elementIcon: function() {
                return this.$el[0] !== this.$elProxy[0] ? this.$elProxy[0] : void 0
            },
            elementTooltip: function() {
                return this.$tooltip ? this.$tooltip[0] : void 0
            },
            option: function(t, e) {
                return "undefined" == typeof e ? this.options[t] : (this.options[t] = e,
                    this)
            },
            status: function() {
                return this.Status
            }
        },
            t.fn[a] = function() {
                var e = arguments;
                if (0 === this.length) {
                    if ("string" == typeof e[0]) {
                        var n = !0;
                        switch (e[0]) {
                            case "setDefaults":
                                t.extend(l, e[1]);
                                break;
                            default:
                                n = !1
                        }
                        return n ? !0 : this
                    }
                    return this
                }
                if ("string" == typeof e[0]) {
                    var o = "#*$~&";
                    return this.each(function() {
                        var n = t(this).data("tooltipster-ns")
                            , i = n ? t(this).data(n[0]) : null;
                        if (!i)
                            throw new Error("You called Tooltipster's \"" + e[0] + '" method on an uninitialized element');
                        if ("function" != typeof i[e[0]])
                            throw new Error('Unknown method .tooltipster("' + e[0] + '")');
                        var r = i[e[0]](e[1], e[2]);
                        return r !== i ? (o = r,
                            !1) : void 0
                    }),
                        "#*$~&" !== o ? o : this
                }
                var r = []
                    , s = e[0] && "undefined" != typeof e[0].multiple
                    , a = s && e[0].multiple || !s && l.multiple
                    , c = e[0] && "undefined" != typeof e[0].debug
                    , u = c && e[0].debug || !c && l.debug;
                return this.each(function() {
                    var n = !1
                        , o = t(this).data("tooltipster-ns")
                        , s = null;
                    o ? a ? n = !0 : u && console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.') : n = !0,
                    n && (s = new i(this,e[0]),
                    o || (o = []),
                        o.push(s.namespace),
                        t(this).data("tooltipster-ns", o),
                        t(this).data(s.namespace, s)),
                        r.push(s)
                }),
                    a ? r : this
            }
        ;
        var c = !!("ontouchstart"in e)
            , u = !1;
        t("body").one("mousemove", function() {
            u = !0
        })
    }(jQuery, window, document),
    function(t) {
        t.fn.niceSelect = function() {
            this.hide(),
                this.each(function() {
                    var e = t(this);
                    if (!e.next().hasClass("nice-select")) {
                        e.after('<div class="nice-select' + (" " + e.attr("class") || "") + (e.attr("disabled") ? " disabled" : '" tabindex="0') + '"><span class="current"></span><ul class="list"></ul></div>');
                        var n = e.next()
                            , i = e.find("option")
                            , o = e.find("option:selected");
                        n.find(".current").html(o.data("display") || o.text()),
                            i.each(function() {
                                var e = t(this).data("display");
                                n.find("ul").append('<li class="option' + (t(this).is(":selected") ? " selected" : "") + (t(this).is(":disabled") ? " disabled" : "") + '" data-value="' + t(this).val() + '"' + (e ? ' data-display="' + e : "") + '">' + t(this).text() + "</li>")
                            })
                    }
                }),
                t(document).off(".nice_select"),
                t(document).on("click.nice_select", ".nice-select", function() {
                    var e = t(this);
                    t(".nice-select").not(e).removeClass("open"),
                        e.toggleClass("open"),
                        e.hasClass("open") ? (e.find(".option"),
                            e.find(".focus").removeClass("focus"),
                            e.find(".selected").addClass("focus")) : e.focus()
                }),
                t(document).on("click.nice_select", function(e) {
                    0 === t(e.target).closest(".nice-select").length && t(".nice-select").removeClass("open").find(".option")
                }),
                t(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function() {
                    var e = t(this)
                        , n = e.closest(".nice-select");
                    n.find(".selected").removeClass("selected"),
                        e.addClass("selected");
                    var i = e.data("display") || e.text();
                    n.find(".current").text(i),
                        n.prev("select").val(e.data("value")).trigger("change")
                }),
                t(document).on("keydown.nice_select", ".nice-select", function(e) {
                    var n = t(this)
                        , i = t(n.find(".focus") || n.find(".list .option.selected"));
                    if (32 == e.keyCode || 13 == e.keyCode)
                        return n.hasClass("open") ? i.trigger("click") : n.trigger("click"),
                            !1;
                    if (40 == e.keyCode) {
                        if (n.hasClass("open")) {
                            var o = i.nextAll(".option:not(.disabled)").first();
                            o.length > 0 && (n.find(".focus").removeClass("focus"),
                                o.addClass("focus"))
                        } else
                            n.trigger("click");
                        return !1
                    }
                    if (38 == e.keyCode) {
                        if (n.hasClass("open")) {
                            var r = i.prevAll(".option:not(.disabled)").first();
                            r.length > 0 && (n.find(".focus").removeClass("focus"),
                                r.addClass("focus"))
                        } else
                            n.trigger("click");
                        return !1
                    }
                    if (27 == e.keyCode)
                        n.hasClass("open") && n.trigger("click");
                    else if (9 == e.keyCode && n.hasClass("open"))
                        return !1
                });
            var e = document.createElement("a").style;
            e.cssText = "pointer-events:auto",
            "auto" !== e.pointerEvents && t("html").addClass("no-csspointerevents")
        }
    }(jQuery),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            t(e, window, document)
        }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window, document) : t(jQuery, window, document)
    }(function(t, e, n, i) {
        "use strict";
        function o(e, n) {
            this.telInput = t(e),
                this.options = t.extend({}, a, n),
                this.ns = "." + r + s++,
                this.isGoodBrowser = Boolean(e.setSelectionRange),
                this.hadInitialPlaceholder = Boolean(t(e).attr("placeholder"))
        }
        var r = "intlTelInput"
            , s = 1
            , a = {
            allowDropdown: !0,
            autoHideDialCode: !0,
            autoPlaceholder: !0,
            customPlaceholder: null,
            dropdownContainer: "",
            excludeCountries: [],
            formatOnInit: !0,
            geoIpLookup: null,
            initialCountry: "",
            nationalMode: !0,
            numberType: "MOBILE",
            onlyCountries: [],
            preferredCountries: ["us", "gb"],
            separateDialCode: !1,
            utilsScript: ""
        }
            , l = {
            UP: 38,
            DOWN: 40,
            ENTER: 13,
            ESC: 27,
            PLUS: 43,
            A: 65,
            Z: 90,
            SPACE: 32,
            TAB: 9
        };
        t(e).on("load", function() {
            t.fn[r].windowLoaded = !0
        }),
            o.prototype = {
                _init: function() {
                    return this.options.nationalMode && (this.options.autoHideDialCode = !1),
                    this.options.separateDialCode && (this.options.autoHideDialCode = this.options.nationalMode = !1,
                        this.options.allowDropdown = !0),
                        this.isMobile = /Android.+Mobile|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    this.isMobile && (t("body").addClass("iti-mobile"),
                    this.options.dropdownContainer || (this.options.dropdownContainer = "body")),
                        this.autoCountryDeferred = new t.Deferred,
                        this.utilsScriptDeferred = new t.Deferred,
                        this._processCountryData(),
                        this._generateMarkup(),
                        this._setInitialState(),
                        this._initListeners(),
                        this._initRequests(),
                        [this.autoCountryDeferred, this.utilsScriptDeferred]
                },
                _processCountryData: function() {
                    this._processAllCountries(),
                        this._processCountryCodes(),
                        this._processPreferredCountries()
                },
                _addCountryCode: function(t, e, n) {
                    e in this.countryCodes || (this.countryCodes[e] = []);
                    var i = n || 0;
                    this.countryCodes[e][i] = t
                },
                _filterCountries: function(e, n) {
                    var i;
                    for (i = 0; i < e.length; i++)
                        e[i] = e[i].toLowerCase();
                    for (this.countries = [],
                             i = 0; i < c.length; i++)
                        n(t.inArray(c[i].iso2, e)) && this.countries.push(c[i])
                },
                _processAllCountries: function() {
                    this.options.onlyCountries.length ? this._filterCountries(this.options.onlyCountries, function(t) {
                        return -1 != t
                    }) : this.options.excludeCountries.length ? this._filterCountries(this.options.excludeCountries, function(t) {
                        return -1 == t
                    }) : this.countries = c
                },
                _processCountryCodes: function() {
                    this.countryCodes = {};
                    for (var t = 0; t < this.countries.length; t++) {
                        var e = this.countries[t];
                        if (this._addCountryCode(e.iso2, e.dialCode, e.priority),
                            e.areaCodes)
                            for (var n = 0; n < e.areaCodes.length; n++)
                                this._addCountryCode(e.iso2, e.dialCode + e.areaCodes[n])
                    }
                },
                _processPreferredCountries: function() {
                    this.preferredCountries = [];
                    for (var t = 0; t < this.options.preferredCountries.length; t++) {
                        var e = this.options.preferredCountries[t].toLowerCase()
                            , n = this._getCountryData(e, !1, !0);
                        n && this.preferredCountries.push(n)
                    }
                },
                _generateMarkup: function() {
                    this.telInput.attr("autocomplete", "off");
                    var e = "intl-tel-input";
                    this.options.allowDropdown && (e += " allow-dropdown"),
                    this.options.separateDialCode && (e += " separate-dial-code"),
                        this.telInput.wrap(t("<div>", {
                            "class": e
                        })),
                        this.flagsContainer = t("<div>", {
                            "class": "flag-container"
                        }).insertBefore(this.telInput);
                    var n = t("<div>", {
                        "class": "selected-flag"
                    });
                    n.appendTo(this.flagsContainer),
                        this.selectedFlagInner = t("<div>", {
                            "class": "iti-flag"
                        }).appendTo(n),
                    this.options.separateDialCode && (this.selectedDialCode = t("<div>", {
                        "class": "selected-dial-code"
                    }).appendTo(n)),
                        this.options.allowDropdown ? (n.attr("tabindex", "0"),
                            t("<div>", {
                                "class": "iti-arrow"
                            }).appendTo(n),
                            this.countryList = t("<ul>", {
                                "class": "country-list hide"
                            }),
                        this.preferredCountries.length && (this._appendListItems(this.preferredCountries, "preferred"),
                            t("<li>", {
                                "class": "divider"
                            }).appendTo(this.countryList)),
                            this._appendListItems(this.countries, ""),
                            this.countryListItems = this.countryList.children(".country"),
                            this.options.dropdownContainer ? this.dropdown = t("<div>", {
                                "class": "intl-tel-input iti-container"
                            }).append(this.countryList) : this.countryList.appendTo(this.flagsContainer)) : this.countryListItems = t()
                },
                _appendListItems: function(t, e) {
                    for (var n = "", i = 0; i < t.length; i++) {
                        var o = t[i];
                        n += "<li class='country " + e + "' data-dial-code='" + o.dialCode + "' data-country-code='" + o.iso2 + "'>",
                            n += "<div class='flag-box'><div class='iti-flag " + o.iso2 + "'></div></div>",
                            n += "<span class='country-name'>" + o.name + "</span>",
                            n += "<span class='dial-code'>+" + o.dialCode + "</span>",
                            n += "</li>"
                    }
                    this.countryList.append(n)
                },
                _setInitialState: function() {
                    var t = this.telInput.val();
                    this._getDialCode(t) ? this._updateFlagFromNumber(t, !0) : "auto" !== this.options.initialCountry && (this.options.initialCountry ? this._setFlag(this.options.initialCountry, !0) : (this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2,
                    t || this._setFlag(this.defaultCountry, !0)),
                    t || this.options.nationalMode || this.options.autoHideDialCode || this.options.separateDialCode || this.telInput.val("+" + this.selectedCountryData.dialCode)),
                    t && this._updateValFromNumber(t, this.options.formatOnInit)
                },
                _initListeners: function() {
                    this._initKeyListeners(),
                    this.options.autoHideDialCode && this._initFocusListeners(),
                    this.options.allowDropdown && this._initDropdownListeners()
                },
                _initDropdownListeners: function() {
                    var t = this
                        , e = this.telInput.closest("label");
                    e.length && e.on("click" + this.ns, function(e) {
                        t.countryList.hasClass("hide") ? t.telInput.focus() : e.preventDefault()
                    });
                    var n = this.selectedFlagInner.parent();
                    n.on("click" + this.ns, function() {
                        !t.countryList.hasClass("hide") || t.telInput.prop("disabled") || t.telInput.prop("readonly") || t._showDropdown()
                    }),
                        this.flagsContainer.on("keydown" + t.ns, function(e) {
                            var n = t.countryList.hasClass("hide");
                            !n || e.which != l.UP && e.which != l.DOWN && e.which != l.SPACE && e.which != l.ENTER || (e.preventDefault(),
                                e.stopPropagation(),
                                t._showDropdown()),
                            e.which == l.TAB && t._closeDropdown()
                        })
                },
                _initRequests: function() {
                    var n = this;
                    this.options.utilsScript ? t.fn[r].windowLoaded ? t.fn[r].loadUtils(this.options.utilsScript, this.utilsScriptDeferred) : t(e).on("load", function() {
                        t.fn[r].loadUtils(n.options.utilsScript, n.utilsScriptDeferred)
                    }) : this.utilsScriptDeferred.resolve(),
                        "auto" === this.options.initialCountry ? this._loadAutoCountry() : this.autoCountryDeferred.resolve()
                },
                _loadAutoCountry: function() {
                    t.fn[r].autoCountry ? this.handleAutoCountry() : t.fn[r].startedLoadingAutoCountry || (t.fn[r].startedLoadingAutoCountry = !0,
                    "function" == typeof this.options.geoIpLookup && this.options.geoIpLookup(function(e) {
                        t.fn[r].autoCountry = e.toLowerCase(),
                            setTimeout(function() {
                                t(".intl-tel-input input").intlTelInput("handleAutoCountry")
                            })
                    }))
                },
                _initKeyListeners: function() {
                    var t = this;
                    this.telInput.on("keyup" + this.ns, function() {
                        t._updateFlagFromNumber(t.telInput.val())
                    }),
                        this.telInput.on("cut" + this.ns + " paste" + this.ns, function() {
                            setTimeout(function() {
                                t._updateFlagFromNumber(t.telInput.val())
                            })
                        })
                },
                _cap: function(t) {
                    var e = this.telInput.attr("maxlength");
                    return e && t.length > e ? t.substr(0, e) : t
                },
                _initFocusListeners: function() {
                    var e = this;
                    this.telInput.on("mousedown" + this.ns, function(t) {
                        e.telInput.is(":focus") || e.telInput.val() || (t.preventDefault(),
                            e.telInput.focus())
                    }),
                        this.telInput.on("focus" + this.ns, function() {
                            e.telInput.val() || e.telInput.prop("readonly") || !e.selectedCountryData.dialCode || (e.telInput.val("+" + e.selectedCountryData.dialCode),
                                e.telInput.one("keypress.plus" + e.ns, function(t) {
                                    t.which == l.PLUS && e.telInput.val("")
                                }),
                                setTimeout(function() {
                                    var t = e.telInput[0];
                                    if (e.isGoodBrowser) {
                                        var n = e.telInput.val().length;
                                        t.setSelectionRange(n, n)
                                    }
                                }))
                        });
                    var n = this.telInput.prop("form");
                    n && t(n).on("submit" + this.ns, function() {
                        e._removeEmptyDialCode()
                    }),
                        this.telInput.on("blur" + this.ns, function() {
                            e._removeEmptyDialCode()
                        })
                },
                _removeEmptyDialCode: function() {
                    var t = this.telInput.val()
                        , e = "+" == t.charAt(0);
                    if (e) {
                        var n = this._getNumeric(t);
                        n && this.selectedCountryData.dialCode != n || this.telInput.val("")
                    }
                    this.telInput.off("keypress.plus" + this.ns)
                },
                _getNumeric: function(t) {
                    return t.replace(/\D/g, "")
                },
                _showDropdown: function() {
                    this._setDropdownPosition();
                    var t = this.countryList.children(".active");
                    t.length && (this._highlightListItem(t),
                        this._scrollTo(t)),
                        this._bindDropdownListeners(),
                        this.selectedFlagInner.children(".iti-arrow").addClass("up")
                },
                _setDropdownPosition: function() {
                    var n = this;
                    if (this.options.dropdownContainer && this.dropdown.appendTo(this.options.dropdownContainer),
                        this.dropdownHeight = this.countryList.removeClass("hide").outerHeight(),
                        !this.isMobile) {
                        var i = this.telInput.offset()
                            , o = i.top
                            , r = t(e).scrollTop()
                            , s = o + this.telInput.outerHeight() + this.dropdownHeight < r + t(e).height()
                            , a = o - this.dropdownHeight > r;
                        if (this.countryList.toggleClass("dropup", !s && a),
                            this.options.dropdownContainer) {
                            var l = !s && a ? 0 : this.telInput.innerHeight();
                            this.dropdown.css({
                                top: o + l,
                                left: i.left
                            }),
                                t(e).on("scroll" + this.ns, function() {
                                    n._closeDropdown()
                                })
                        }
                    }
                },
                _bindDropdownListeners: function() {
                    var e = this;
                    this.countryList.on("mouseover" + this.ns, ".country", function() {
                        e._highlightListItem(t(this))
                    }),
                        this.countryList.on("click" + this.ns, ".country", function() {
                            e._selectListItem(t(this))
                        });
                    var i = !0;
                    t("html").on("click" + this.ns, function() {
                        i || e._closeDropdown(),
                            i = !1
                    });
                    var o = ""
                        , r = null;
                    t(n).on("keydown" + this.ns, function(t) {
                        t.preventDefault(),
                            t.which == l.UP || t.which == l.DOWN ? e._handleUpDownKey(t.which) : t.which == l.ENTER ? e._handleEnterKey() : t.which == l.ESC ? e._closeDropdown() : (t.which >= l.A && t.which <= l.Z || t.which == l.SPACE) && (r && clearTimeout(r),
                                o += String.fromCharCode(t.which),
                                e._searchForCountry(o),
                                r = setTimeout(function() {
                                    o = ""
                                }, 1e3))
                    })
                },
                _handleUpDownKey: function(t) {
                    var e = this.countryList.children(".highlight").first()
                        , n = t == l.UP ? e.prev() : e.next();
                    n.length && (n.hasClass("divider") && (n = t == l.UP ? n.prev() : n.next()),
                        this._highlightListItem(n),
                        this._scrollTo(n))
                },
                _handleEnterKey: function() {
                    var t = this.countryList.children(".highlight").first();
                    t.length && this._selectListItem(t)
                },
                _searchForCountry: function(t) {
                    for (var e = 0; e < this.countries.length; e++)
                        if (this._startsWith(this.countries[e].name, t)) {
                            var n = this.countryList.children("[data-country-code=" + this.countries[e].iso2 + "]").not(".preferred");
                            this._highlightListItem(n),
                                this._scrollTo(n, !0);
                            break
                        }
                },
                _startsWith: function(t, e) {
                    return t.substr(0, e.length).toUpperCase() == e
                },
                _updateValFromNumber: function(t, n) {
                    if (n && e.intlTelInputUtils && this.selectedCountryData) {
                        var i = this.options.separateDialCode || !this.options.nationalMode && "+" == t.charAt(0) ? intlTelInputUtils.numberFormat.INTERNATIONAL : intlTelInputUtils.numberFormat.NATIONAL;
                        t = intlTelInputUtils.formatNumber(t, this.selectedCountryData.iso2, i)
                    }
                    t = this._beforeSetNumber(t),
                        this.telInput.val(t)
                },
                _updateFlagFromNumber: function(e, n) {
                    e && this.options.nationalMode && this.selectedCountryData && "1" == this.selectedCountryData.dialCode && "+" != e.charAt(0) && ("1" != e.charAt(0) && (e = "1" + e),
                        e = "+" + e);
                    var i = this._getDialCode(e)
                        , o = null;
                    if (i) {
                        var r = this.countryCodes[this._getNumeric(i)]
                            , s = this.selectedCountryData && -1 != t.inArray(this.selectedCountryData.iso2, r);
                        if (!s || this._isUnknownNanp(e, i))
                            for (var a = 0; a < r.length; a++)
                                if (r[a]) {
                                    o = r[a];
                                    break
                                }
                    } else
                        "+" == e.charAt(0) && this._getNumeric(e).length ? o = "" : e && "+" != e || (o = this.defaultCountry);
                    null !== o && this._setFlag(o, n)
                },
                _isUnknownNanp: function(t, e) {
                    return "+1" == e && this._getNumeric(t).length >= 4
                },
                _highlightListItem: function(t) {
                    this.countryListItems.removeClass("highlight"),
                        t.addClass("highlight")
                },
                _getCountryData: function(t, e, n) {
                    for (var i = e ? c : this.countries, o = 0; o < i.length; o++)
                        if (i[o].iso2 == t)
                            return i[o];
                    if (n)
                        return null;
                    throw new Error("No country data for '" + t + "'")
                },
                _setFlag: function(t, e) {
                    var n = this.selectedCountryData && this.selectedCountryData.iso2 ? this.selectedCountryData : {};
                    this.selectedCountryData = t ? this._getCountryData(t, !1, !1) : {},
                    this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2),
                        this.selectedFlagInner.attr("class", "iti-flag " + t);
                    var i = t ? this.selectedCountryData.name + ": +" + this.selectedCountryData.dialCode : "Unknown";
                    if (this.selectedFlagInner.parent().attr("title", i),
                        this.options.separateDialCode) {
                        var o = this.selectedCountryData.dialCode ? "+" + this.selectedCountryData.dialCode : ""
                            , r = this.telInput.parent();
                        n.dialCode && r.removeClass("iti-sdc-" + (n.dialCode.length + 1)),
                        o && r.addClass("iti-sdc-" + o.length),
                            this.selectedDialCode.text(o)
                    }
                    this._updatePlaceholder(),
                        this.countryListItems.removeClass("active"),
                    t && this.countryListItems.find(".iti-flag." + t).first().closest(".country").addClass("active"),
                    e || n.iso2 === t || this.telInput.trigger("countrychange", this.selectedCountryData)
                },
                _updatePlaceholder: function() {
                    if (e.intlTelInputUtils && !this.hadInitialPlaceholder && this.options.autoPlaceholder && this.selectedCountryData) {
                        var t = intlTelInputUtils.numberType[this.options.numberType]
                            , n = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, t) : "";
                        n = this._beforeSetNumber(n),
                        "0812-345-678" === n && (n += "00"),
                        "function" == typeof this.options.customPlaceholder && (n = this.options.customPlaceholder(n, this.selectedCountryData)),
                            this.telInput.attr("placeholder", n)
                    }
                },
                _selectListItem: function(t) {
                    if (this._setFlag(t.attr("data-country-code")),
                        this._closeDropdown(),
                        this._updateDialCode(t.attr("data-dial-code"), !0),
                        this.telInput.focus(),
                        this.isGoodBrowser) {
                        var e = this.telInput.val().length;
                        this.telInput[0].setSelectionRange(e, e)
                    }
                },
                _closeDropdown: function() {
                    this.countryList.addClass("hide"),
                        this.selectedFlagInner.children(".iti-arrow").removeClass("up"),
                        t(n).off(this.ns),
                        t("html").off(this.ns),
                        this.countryList.off(this.ns),
                    this.options.dropdownContainer && (this.isMobile || t(e).off("scroll" + this.ns),
                        this.dropdown.detach())
                },
                _scrollTo: function(t, e) {
                    var n = this.countryList
                        , i = n.height()
                        , o = n.offset().top
                        , r = o + i
                        , s = t.outerHeight()
                        , a = t.offset().top
                        , l = a + s
                        , c = a - o + n.scrollTop()
                        , u = i / 2 - s / 2;
                    if (o > a)
                        e && (c -= u),
                            n.scrollTop(c);
                    else if (l > r) {
                        e && (c += u);
                        var d = i - s;
                        n.scrollTop(c - d)
                    }
                },
                _updateDialCode: function(t, e) {
                    var n, i = this.telInput.val();
                    if (t = "+" + t,
                    "+" == i.charAt(0)) {
                        var o = this._getDialCode(i);
                        n = o ? i.replace(o, t) : t
                    } else {
                        if (this.options.nationalMode || this.options.separateDialCode)
                            return;
                        if (i)
                            n = t + i;
                        else {
                            if (!e && this.options.autoHideDialCode)
                                return;
                            n = t
                        }
                    }
                    this.telInput.val(n)
                },
                _getDialCode: function(e) {
                    var n = "";
                    if ("+" == e.charAt(0))
                        for (var i = "", o = 0; o < e.length; o++) {
                            var r = e.charAt(o);
                            if (t.isNumeric(r) && (i += r,
                            this.countryCodes[i] && (n = e.substr(0, o + 1)),
                            4 == i.length))
                                break
                        }
                    return n
                },
                _getFullNumber: function() {
                    var t = this.options.separateDialCode ? "+" + this.selectedCountryData.dialCode : "";
                    return t + this.telInput.val()
                },
                _beforeSetNumber: function(t) {
                    if (this.options.separateDialCode) {
                        var e = this._getDialCode(t);
                        if (e) {
                            null !== this.selectedCountryData.areaCodes && (e = "+" + this.selectedCountryData.dialCode);
                            var n = " " === t[e.length] || "-" === t[e.length] ? e.length + 1 : e.length;
                            t = t.substr(n)
                        }
                    }
                    return this._cap(t)
                },
                handleAutoCountry: function() {
                    "auto" === this.options.initialCountry && (this.defaultCountry = t.fn[r].autoCountry,
                    this.telInput.val() || this.setCountry(this.defaultCountry),
                        this.autoCountryDeferred.resolve())
                },
                destroy: function() {
                    if (this.allowDropdown && (this._closeDropdown(),
                        this.selectedFlagInner.parent().off(this.ns),
                        this.telInput.closest("label").off(this.ns)),
                        this.options.autoHideDialCode) {
                        var e = this.telInput.prop("form");
                        e && t(e).off(this.ns)
                    }
                    this.telInput.off(this.ns);
                    var n = this.telInput.parent();
                    n.before(this.telInput).remove()
                },
                getExtension: function() {
                    return e.intlTelInputUtils ? intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2) : ""
                },
                getNumber: function(t) {
                    return e.intlTelInputUtils ? intlTelInputUtils.formatNumber(this._getFullNumber(), this.selectedCountryData.iso2, t) : ""
                },
                getNumberType: function() {
                    return e.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2) : -99
                },
                getSelectedCountryData: function() {
                    return this.selectedCountryData || {}
                },
                getValidationError: function() {
                    return e.intlTelInputUtils ? intlTelInputUtils.getValidationError(this._getFullNumber(), this.selectedCountryData.iso2) : -99
                },
                isValidNumber: function() {
                    var n = t.trim(this._getFullNumber())
                        , i = this.options.nationalMode ? this.selectedCountryData.iso2 : "";
                    return e.intlTelInputUtils ? intlTelInputUtils.isValidNumber(n, i) : null
                },
                setCountry: function(t) {
                    t = t.toLowerCase(),
                    this.selectedFlagInner.hasClass(t) || (this._setFlag(t),
                        this._updateDialCode(this.selectedCountryData.dialCode, !1))
                },
                setNumber: function(t, e) {
                    this._updateFlagFromNumber(t),
                        this._updateValFromNumber(t, !e)
                },
                handleUtils: function() {
                    e.intlTelInputUtils && (this.telInput.val() && this._updateValFromNumber(this.telInput.val(), this.options.formatOnInit),
                        this._updatePlaceholder()),
                        this.utilsScriptDeferred.resolve()
                }
            },
            t.fn[r] = function(e) {
                var n = arguments;
                if (e === i || "object" == typeof e) {
                    var s = [];
                    return this.each(function() {
                        if (!t.data(this, "plugin_" + r)) {
                            var n = new o(this,e)
                                , i = n._init();
                            s.push(i[0]),
                                s.push(i[1]),
                                t.data(this, "plugin_" + r, n)
                        }
                    }),
                        t.when.apply(null, s)
                }
                if ("string" == typeof e && "_" !== e[0]) {
                    var a;
                    return this.each(function() {
                        var i = t.data(this, "plugin_" + r);
                        i instanceof o && "function" == typeof i[e] && (a = i[e].apply(i, Array.prototype.slice.call(n, 1))),
                        "destroy" === e && t.data(this, "plugin_" + r, null)
                    }),
                        a !== i ? a : this
                }
            }
            ,
            t.fn[r].getCountryData = function() {
                return c
            }
            ,
            t.fn[r].loadUtils = function(e, n) {
                t.fn[r].loadedUtilsScript ? n && n.resolve() : (t.fn[r].loadedUtilsScript = !0,
                    t.ajax({
                        url: e,
                        complete: function() {
                            t(".intl-tel-input input").intlTelInput("handleUtils")
                        },
                        dataType: "script",
                        cache: !0
                    }))
            }
            ,
            t.fn[r].version = "9.0.3";
        for (var c = [["Afghanistan (\u202b\u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646\u202c\u200e)", "af", "93"], ["Albania (Shqip\xebri)", "al", "355"], ["Algeria (\u202b\u0627\u0644\u062c\u0632\u0627\u0626\u0631\u202c\u200e)", "dz", "213"], ["American Samoa", "as", "1684"], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1264"], ["Antigua and Barbuda", "ag", "1268"], ["Argentina", "ar", "54"], ["Armenia (\u0540\u0561\u0575\u0561\u057d\u057f\u0561\u0576)", "am", "374"], ["Aruba", "aw", "297"], ["Australia", "au", "61", 0], ["Austria (\xd6sterreich)", "at", "43"], ["Azerbaijan (Az\u0259rbaycan)", "az", "994"], ["Bahamas", "bs", "1242"], ["Bahrain (\u202b\u0627\u0644\u0628\u062d\u0631\u064a\u0646\u202c\u200e)", "bh", "973"], ["Bangladesh (\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6)", "bd", "880"], ["Barbados", "bb", "1246"], ["Belarus (\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c)", "by", "375"], ["Belgium (Belgi\xeb)", "be", "32"], ["Belize", "bz", "501"], ["Benin (B\xe9nin)", "bj", "229"], ["Bermuda", "bm", "1441"], ["Bhutan (\u0f60\u0f56\u0fb2\u0f74\u0f42)", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina (\u0411\u043e\u0441\u043d\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043e\u0432\u0438\u043d\u0430)", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil (Brasil)", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1284"], ["Brunei", "bn", "673"], ["Bulgaria (\u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f)", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi (Uburundi)", "bi", "257"], ["Cambodia (\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6)", "kh", "855"], ["Cameroon (Cameroun)", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde (Kabu Verdi)", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1], ["Cayman Islands", "ky", "1345"], ["Central African Republic (R\xe9publique centrafricaine)", "cf", "236"], ["Chad (Tchad)", "td", "235"], ["Chile", "cl", "56"], ["China (\u4e2d\u56fd)", "cn", "86"], ["Christmas Island", "cx", "61", 2], ["Cocos (Keeling) Islands", "cc", "61", 1], ["Colombia", "co", "57"], ["Comoros (\u202b\u062c\u0632\u0631 \u0627\u0644\u0642\u0645\u0631\u202c\u200e)", "km", "269"], ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"], ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["C\xf4te d\u2019Ivoire", "ci", "225"], ["Croatia (Hrvatska)", "hr", "385"], ["Cuba", "cu", "53"], ["Cura\xe7ao", "cw", "599", 0], ["Cyprus (\u039a\u03cd\u03c0\u03c1\u03bf\u03c2)", "cy", "357"], ["Czech Republic (\u010cesk\xe1 republika)", "cz", "420"], ["Denmark (Danmark)", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1767"], ["Dominican Republic (Rep\xfablica Dominicana)", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt (\u202b\u0645\u0635\u0631\u202c\u200e)", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia (Eesti)", "ee", "372"], ["Ethiopia", "et", "251"], ["Falkland Islands (Islas Malvinas)", "fk", "500"], ["Faroe Islands (F\xf8royar)", "fo", "298"], ["Fiji", "fj", "679"], ["Finland (Suomi)", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana (Guyane fran\xe7aise)", "gf", "594"], ["French Polynesia (Polyn\xe9sie fran\xe7aise)", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia (\u10e1\u10d0\u10e5\u10d0\u10e0\u10d7\u10d5\u10d4\u10da\u10dd)", "ge", "995"], ["Germany (Deutschland)", "de", "49"], ["Ghana (Gaana)", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece (\u0395\u03bb\u03bb\u03ac\u03b4\u03b1)", "gr", "30"], ["Greenland (Kalaallit Nunaat)", "gl", "299"], ["Grenada", "gd", "1473"], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1671"], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1], ["Guinea (Guin\xe9e)", "gn", "224"], ["Guinea-Bissau (Guin\xe9 Bissau)", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong (\u9999\u6e2f)", "hk", "852"], ["Hungary (Magyarorsz\xe1g)", "hu", "36"], ["Iceland (\xcdsland)", "is", "354"], ["India (\u092d\u093e\u0930\u0924)", "in", "91"], ["Indonesia", "id", "62"], ["Iran (\u202b\u0627\u06cc\u0631\u0627\u0646\u202c\u200e)", "ir", "98"], ["Iraq (\u202b\u0627\u0644\u0639\u0631\u0627\u0642\u202c\u200e)", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2], ["Israel (\u202b\u05d9\u05e9\u05e8\u05d0\u05dc\u202c\u200e)", "il", "972"], ["Italy (Italia)", "it", "39", 0], ["Jamaica", "jm", "1876"], ["Japan (\u65e5\u672c)", "jp", "81"], ["Jersey", "je", "44", 3], ["Jordan (\u202b\u0627\u0644\u0623\u0631\u062f\u0646\u202c\u200e)", "jo", "962"], ["Kazakhstan (\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d)", "kz", "7", 1], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait (\u202b\u0627\u0644\u0643\u0648\u064a\u062a\u202c\u200e)", "kw", "965"], ["Kyrgyzstan (\u041a\u044b\u0440\u0433\u044b\u0437\u0441\u0442\u0430\u043d)", "kg", "996"], ["Laos (\u0ea5\u0eb2\u0ea7)", "la", "856"], ["Latvia (Latvija)", "lv", "371"], ["Lebanon (\u202b\u0644\u0628\u0646\u0627\u0646\u202c\u200e)", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya (\u202b\u0644\u064a\u0628\u064a\u0627\u202c\u200e)", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania (Lietuva)", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau (\u6fb3\u9580)", "mo", "853"], ["Macedonia (FYROM) (\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0438\u0458\u0430)", "mk", "389"], ["Madagascar (Madagasikara)", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania (\u202b\u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627\u202c\u200e)", "mr", "222"], ["Mauritius (Moris)", "mu", "230"], ["Mayotte", "yt", "262", 1], ["Mexico (M\xe9xico)", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova (Republica Moldova)", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia (\u041c\u043e\u043d\u0433\u043e\u043b)", "mn", "976"], ["Montenegro (Crna Gora)", "me", "382"], ["Montserrat", "ms", "1664"], ["Morocco (\u202b\u0627\u0644\u0645\u063a\u0631\u0628\u202c\u200e)", "ma", "212", 0], ["Mozambique (Mo\xe7ambique)", "mz", "258"], ["Myanmar (Burma) (\u1019\u103c\u1014\u103a\u1019\u102c)", "mm", "95"], ["Namibia (Namibi\xeb)", "na", "264"], ["Nauru", "nr", "674"], ["Nepal (\u0928\u0947\u092a\u093e\u0932)", "np", "977"], ["Netherlands (Nederland)", "nl", "31"], ["New Caledonia (Nouvelle-Cal\xe9donie)", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger (Nijar)", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea (\uc870\uc120 \ubbfc\uc8fc\uc8fc\uc758 \uc778\ubbfc \uacf5\ud654\uad6d)", "kp", "850"], ["Northern Mariana Islands", "mp", "1670"], ["Norway (Norge)", "no", "47", 0], ["Oman (\u202b\u0639\u064f\u0645\u0627\u0646\u202c\u200e)", "om", "968"], ["Pakistan (\u202b\u067e\u0627\u06a9\u0633\u062a\u0627\u0646\u202c\u200e)", "pk", "92"], ["Palau", "pw", "680"], ["Palestine (\u202b\u0641\u0644\u0633\u0637\u064a\u0646\u202c\u200e)", "ps", "970"], ["Panama (Panam\xe1)", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru (Per\xfa)", "pe", "51"], ["Philippines", "ph", "63"], ["Poland (Polska)", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar (\u202b\u0642\u0637\u0631\u202c\u200e)", "qa", "974"], ["R\xe9union (La R\xe9union)", "re", "262", 0], ["Romania (Rom\xe2nia)", "ro", "40"], ["Russia (\u0420\u043e\u0441\u0441\u0438\u044f)", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Saint Barth\xe9lemy (Saint-Barth\xe9lemy)", "bl", "590", 1], ["Saint Helena", "sh", "290"], ["Saint Kitts and Nevis", "kn", "1869"], ["Saint Lucia", "lc", "1758"], ["Saint Martin (Saint-Martin (partie fran\xe7aise))", "mf", "590", 2], ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"], ["Saint Vincent and the Grenadines", "vc", "1784"], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["S\xe3o Tom\xe9 and Pr\xedncipe (S\xe3o Tom\xe9 e Pr\xedncipe)", "st", "239"], ["Saudi Arabia (\u202b\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629\u202c\u200e)", "sa", "966"], ["Senegal (S\xe9n\xe9gal)", "sn", "221"], ["Serbia (\u0421\u0440\u0431\u0438\u0458\u0430)", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1721"], ["Slovakia (Slovensko)", "sk", "421"], ["Slovenia (Slovenija)", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia (Soomaaliya)", "so", "252"], ["South Africa", "za", "27"], ["South Korea (\ub300\ud55c\ubbfc\uad6d)", "kr", "82"], ["South Sudan (\u202b\u062c\u0646\u0648\u0628 \u0627\u0644\u0633\u0648\u062f\u0627\u0646\u202c\u200e)", "ss", "211"], ["Spain (Espa\xf1a)", "es", "34"], ["Sri Lanka (\u0dc1\u0dca\u200d\u0dbb\u0dd3 \u0dbd\u0d82\u0d9a\u0dcf\u0dc0)", "lk", "94"], ["Sudan (\u202b\u0627\u0644\u0633\u0648\u062f\u0627\u0646\u202c\u200e)", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard and Jan Mayen", "sj", "47", 1], ["Swaziland", "sz", "268"], ["Sweden (Sverige)", "se", "46"], ["Switzerland (Schweiz)", "ch", "41"], ["Syria (\u202b\u0633\u0648\u0631\u064a\u0627\u202c\u200e)", "sy", "963"], ["Taiwan (\u53f0\u7063)", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand (\u0e44\u0e17\u0e22)", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1868"], ["Tunisia (\u202b\u062a\u0648\u0646\u0633\u202c\u200e)", "tn", "216"], ["Turkey (T\xfcrkiye)", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks and Caicos Islands", "tc", "1649"], ["Tuvalu", "tv", "688"], ["U.S. Virgin Islands", "vi", "1340"], ["Uganda", "ug", "256"], ["Ukraine (\u0423\u043a\u0440\u0430\u0457\u043d\u0430)", "ua", "380"], ["United Arab Emirates (\u202b\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0645\u062a\u062d\u062f\u0629\u202c\u200e)", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["Uzbekistan (O\u02bbzbekiston)", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City (Citt\xe0 del Vaticano)", "va", "39", 1], ["Venezuela", "ve", "58"], ["Vietnam (Vi\u1ec7t Nam)", "vn", "84"], ["Wallis and Futuna", "wf", "681"], ["Western Sahara (\u202b\u0627\u0644\u0635\u062d\u0631\u0627\u0621 \u0627\u0644\u063a\u0631\u0628\u064a\u0629\u202c\u200e)", "eh", "212", 1], ["Yemen (\u202b\u0627\u0644\u064a\u0645\u0646\u202c\u200e)", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["\xc5land Islands", "ax", "358", 1]], u = 0; u < c.length; u++) {
            var d = c[u];
            c[u] = {
                name: d[0],
                iso2: d[1],
                dialCode: d[2],
                priority: d[3] || 0,
                areaCodes: d[4] || null
            }
        }
    }),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(t) {
        "use strict";
        function e() {
            var t = document.createElement("input");
            return t.setAttribute("type", "range"),
            "text" !== t.type
        }
        function n(t, e) {
            var n = Array.prototype.slice.call(arguments, 2);
            return setTimeout(function() {
                return t.apply(null, n)
            }, e)
        }
        function i(t, e) {
            return e = e || 100,
                function() {
                    if (!t.debouncing) {
                        var n = Array.prototype.slice.apply(arguments);
                        t.lastReturnVal = t.apply(window, n),
                            t.debouncing = !0
                    }
                    return clearTimeout(t.debounceTimeout),
                        t.debounceTimeout = setTimeout(function() {
                            t.debouncing = !1
                        }, e),
                        t.lastReturnVal
                }
        }
        function o(t) {
            return t && (0 === t.offsetWidth || 0 === t.offsetHeight || t.open === !1)
        }
        function r(t) {
            for (var e = [], n = t.parentNode; o(n); )
                e.push(n),
                    n = n.parentNode;
            return e
        }
        function s(t, e) {
            function n(t) {
                "undefined" != typeof t.open && (t.open = !t.open)
            }
            var i = r(t)
                , o = i.length
                , s = []
                , a = t[e];
            if (o) {
                for (var l = 0; o > l; l++)
                    s[l] = i[l].style.cssText,
                        i[l].style.setProperty ? i[l].style.setProperty("display", "block", "important") : i[l].style.cssText += ";display: block !important",
                        i[l].style.height = "0",
                        i[l].style.overflow = "hidden",
                        i[l].style.visibility = "hidden",
                        n(i[l]);
                a = t[e];
                for (var c = 0; o > c; c++)
                    i[c].style.cssText = s[c],
                        n(i[c])
            }
            return a
        }
        function a(t, e) {
            var n = parseFloat(t);
            return Number.isNaN(n) ? e : n
        }
        function l(t) {
            return t.charAt(0).toUpperCase() + t.substr(1)
        }
        function c(e, o) {
            if (this.$window = t(window),
                this.$document = t(document),
                this.$element = t(e),
                this.options = t.extend({}, h, o),
                this.polyfill = this.options.polyfill,
                this.orientation = this.$element[0].getAttribute("data-orientation") || this.options.orientation,
                this.onInit = this.options.onInit,
                this.onSlide = this.options.onSlide,
                this.onSlideEnd = this.options.onSlideEnd,
                this.DIMENSION = f.orientation[this.orientation].dimension,
                this.DIRECTION = f.orientation[this.orientation].direction,
                this.DIRECTION_STYLE = f.orientation[this.orientation].directionStyle,
                this.COORDINATE = f.orientation[this.orientation].coordinate,
            this.polyfill && p)
                return !1;
            this.identifier = "js-" + u + "-" + d++,
                this.startEvent = this.options.startEvent.join("." + this.identifier + " ") + "." + this.identifier,
                this.moveEvent = this.options.moveEvent.join("." + this.identifier + " ") + "." + this.identifier,
                this.endEvent = this.options.endEvent.join("." + this.identifier + " ") + "." + this.identifier,
                this.toFixed = (this.step + "").replace(".", "").length - 1,
                this.$fill = t('<div class="' + this.options.fillClass + '" />'),
                this.$handle = t('<div class="' + this.options.handleClass + '" />'),
                this.$range = t('<div class="' + this.options.rangeClass + " " + this.options[this.orientation + "Class"] + '" id="' + this.identifier + '" />').insertAfter(this.$element).prepend(this.$fill, this.$handle),
                this.$element.css({
                    position: "absolute",
                    width: "1px",
                    height: "1px",
                    overflow: "hidden",
                    opacity: "0"
                }),
                this.handleDown = t.proxy(this.handleDown, this),
                this.handleMove = t.proxy(this.handleMove, this),
                this.handleEnd = t.proxy(this.handleEnd, this),
                this.init();
            var r = this;
            this.$window.on("resize." + this.identifier, i(function() {
                n(function() {
                    r.update(!1, !1)
                }, 300)
            }, 20)),
                this.$document.on(this.startEvent, "#" + this.identifier + ":not(." + this.options.disabledClass + ")", this.handleDown),
                this.$element.on("change." + this.identifier, function(t, e) {
                    if (!e || e.origin !== r.identifier) {
                        var n = t.target.value
                            , i = r.getPositionFromValue(n);
                        r.setPosition(i)
                    }
                })
        }
        Number.isNaN = Number.isNaN || function(t) {
            return "number" == typeof t && t !== t
        }
        ;
        var u = "rangeslider"
            , d = 0
            , p = e()
            , h = {
            polyfill: !0,
            orientation: "horizontal",
            rangeClass: "rangeslider",
            disabledClass: "rangeslider--disabled",
            horizontalClass: "rangeslider--horizontal",
            verticalClass: "rangeslider--vertical",
            fillClass: "rangeslider__fill",
            handleClass: "rangeslider__handle",
            startEvent: ["mousedown", "touchstart", "pointerdown"],
            moveEvent: ["mousemove", "touchmove", "pointermove"],
            endEvent: ["mouseup", "touchend", "pointerup"]
        }
            , f = {
            orientation: {
                horizontal: {
                    dimension: "width",
                    direction: "left",
                    directionStyle: "left",
                    coordinate: "x"
                },
                vertical: {
                    dimension: "height",
                    direction: "top",
                    directionStyle: "bottom",
                    coordinate: "y"
                }
            }
        };
        return c.prototype.init = function() {
            this.update(!0, !1),
            this.onInit && "function" == typeof this.onInit && this.onInit()
        }
            ,
            c.prototype.update = function(t, e) {
                t = t || !1,
                t && (this.min = a(this.$element[0].getAttribute("min"), 0),
                    this.max = a(this.$element[0].getAttribute("max"), 100),
                    this.value = a(this.$element[0].value, Math.round(this.min + (this.max - this.min) / 2)),
                    this.step = a(this.$element[0].getAttribute("step"), 1)),
                    this.handleDimension = s(this.$handle[0], "offset" + l(this.DIMENSION)),
                    this.rangeDimension = s(this.$range[0], "offset" + l(this.DIMENSION)),
                    this.maxHandlePos = this.rangeDimension - this.handleDimension,
                    this.grabPos = this.handleDimension / 2,
                    this.position = this.getPositionFromValue(this.value),
                    this.$element[0].disabled ? this.$range.addClass(this.options.disabledClass) : this.$range.removeClass(this.options.disabledClass),
                    this.setPosition(this.position, e)
            }
            ,
            c.prototype.handleDown = function(t) {
                if (this.$document.on(this.moveEvent, this.handleMove),
                    this.$document.on(this.endEvent, this.handleEnd),
                    !((" " + t.target.className + " ").replace(/[\n\t]/g, " ").indexOf(this.options.handleClass) > -1)) {
                    var e = this.getRelativePosition(t)
                        , n = this.$range[0].getBoundingClientRect()[this.DIRECTION]
                        , i = this.getPositionFromNode(this.$handle[0]) - n
                        , o = "vertical" === this.orientation ? this.maxHandlePos - (e - this.grabPos) : e - this.grabPos;
                    this.setPosition(o),
                    e >= i && e < i + this.handleDimension && (this.grabPos = e - i)
                }
            }
            ,
            c.prototype.handleMove = function(t) {
                t.preventDefault();
                var e = this.getRelativePosition(t)
                    , n = "vertical" === this.orientation ? this.maxHandlePos - (e - this.grabPos) : e - this.grabPos;
                this.setPosition(n)
            }
            ,
            c.prototype.handleEnd = function(t) {
                t.preventDefault(),
                    this.$document.off(this.moveEvent, this.handleMove),
                    this.$document.off(this.endEvent, this.handleEnd),
                    this.$element.trigger("change", {
                        origin: this.identifier
                    }),
                this.onSlideEnd && "function" == typeof this.onSlideEnd && this.onSlideEnd(this.position, this.value)
            }
            ,
            c.prototype.cap = function(t, e, n) {
                return e > t ? e : t > n ? n : t
            }
            ,
            c.prototype.setPosition = function(t, e) {
                var n, i;
                void 0 === e && (e = !0),
                    n = this.getValueFromPosition(this.cap(t, 0, this.maxHandlePos)),
                    i = this.getPositionFromValue(n),
                    this.$fill[0].style[this.DIMENSION] = i + this.grabPos + "px",
                    this.$handle[0].style[this.DIRECTION_STYLE] = i + "px",
                    this.setValue(n),
                    this.position = i,
                    this.value = n,
                e && this.onSlide && "function" == typeof this.onSlide && this.onSlide(i, n)
            }
            ,
            c.prototype.getPositionFromNode = function(t) {
                for (var e = 0; null !== t; )
                    e += t.offsetLeft,
                        t = t.offsetParent;
                return e
            }
            ,
            c.prototype.getRelativePosition = function(t) {
                var e = l(this.COORDINATE)
                    , n = this.$range[0].getBoundingClientRect()[this.DIRECTION]
                    , i = 0;
                return "undefined" != typeof t["page" + e] ? i = t["page" + e] : "undefined" != typeof t.originalEvent["client" + e] ? i = t.originalEvent["client" + e] : t.originalEvent.touches && t.originalEvent.touches[0] && "undefined" != typeof t.originalEvent.touches[0]["page" + e] ? i = t.originalEvent.touches[0]["page" + e] : t.currentPoint && "undefined" != typeof t.currentPoint[this.COORDINATE] && (i = t.currentPoint[this.COORDINATE]),
                i - n
            }
            ,
            c.prototype.getPositionFromValue = function(t) {
                var e, n;
                return e = (t - this.min) / (this.max - this.min),
                    n = Number.isNaN(e) ? 0 : e * this.maxHandlePos
            }
            ,
            c.prototype.getValueFromPosition = function(t) {
                var e, n;
                return e = t / (this.maxHandlePos || 1),
                    n = this.step * Math.round(e * (this.max - this.min) / this.step) + this.min,
                    Number(n.toFixed(this.toFixed))
            }
            ,
            c.prototype.setValue = function(t) {
                t === this.value && "" !== this.$element[0].value || this.$element.val(t).trigger("input", {
                    origin: this.identifier
                })
            }
            ,
            c.prototype.destroy = function() {
                this.$document.off("." + this.identifier),
                    this.$window.off("." + this.identifier),
                    this.$element.off("." + this.identifier).removeAttr("style").removeData("plugin_" + u),
                this.$range && this.$range.length && this.$range[0].parentNode.removeChild(this.$range[0])
            }
            ,
            t.fn[u] = function(e) {
                var n = Array.prototype.slice.call(arguments, 1);
                return this.each(function() {
                    var i = t(this)
                        , o = i.data("plugin_" + u);
                    o || i.data("plugin_" + u, o = new c(this,e)),
                    "string" == typeof e && o[e].apply(o, n)
                })
            }
            ,
            "rangeslider.js is available in jQuery context e.g $(selector).rangeslider(options);"
    }),
    function() {
        for (var t = 0, e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length && !window.requestAnimationFrame; ++n)
            window.requestAnimationFrame = window[e[n] + "RequestAnimationFrame"],
                window.cancelAnimationFrame = window[e[n] + "CancelAnimationFrame"] || window[e[n] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
                var n = (new Date).getTime()
                    , i = Math.max(0, 16 - (n - t))
                    , o = window.setTimeout(function() {
                    e(n + i)
                }, i);
                return t = n + i,
                    o
            }
        ),
        window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                clearTimeout(t)
            }
        )
    }(),
    function(t, e) {
        "use strict";
        var n = t.App = {
            fn: {},
            events: {},
            settings: {}
        };
        n.settings = {
            sm: 480,
            md: 767,
            lg: 1024,
            xlg: 1364
        },
            n.util = {
                width: function() {
                    return t.innerWidth || $(t).width()
                },
                y: function() {
                    return t.pageYOffset !== e ? t.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
                },
                emailRegexp: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                ungatedParam: "XzQuyoMq8e"
            },
            n.environment = {
                production: !0,
                staging: !1,
                development: !1
            },
            n.query = function(e) {
                return "retina" === e ? t.devicePixelRatio > 1 : n.util.width() <= n.settings[e]
            }
            ,
            n.delay = function(e) {
                var n = $.Deferred();
                return t.setTimeout(n.resolve, e),
                    n
            }
    }(this),
    function(t, e) {
        "use strict";
        var n = e.App;
        n.callbacks = {},
            n.callbacks.elementLoaded = function() {
                t('[data-callback="elementLoaded"]').parent().addClass("element-loaded")
            }
    }(this.jQuery, this, this.document),
    function(t, e) {
        "use strict";
        var n = e.App;
        n.events.resize = [];
        var i, o = 500;
        t(e).on("resize.app", function() {
            e.clearTimeout(i),
                i = e.setTimeout(function() {
                    t.each(n.events.resize, function(n, i) {
                        i(t(e).outerWidth(), t(e).outerHeight())
                    })
                }, o)
        })
    }(this.jQuery, this, this.document),
    function(t, e, n) {
        "use strict";
        function i() {
            var t = void 0 !== e.pageYOffset ? e.pageYOffset : (n.documentElement || n.body.parentNode || n.body).scrollTop;
            r.recalculateAll(),
                r.scrollCheck(t)
        }
        var o = function(t, e, n) {
            var i;
            return function() {
                var o = this
                    , r = arguments
                    , s = function() {
                    i = null,
                    n || t.apply(o, r)
                }
                    , a = n && !i;
                clearTimeout(i),
                    i = setTimeout(s, e),
                a && t.apply(o, r)
            }
        }
            , r = {
            bindings: {},
            counter: 0
        };
        !function(t) {
            function i(t) {
                return parseInt(t, 10) / 100
            }
            var o = 0;
            t.add = function(e, n, i, o) {
                void 0 === i && (i = "25%"),
                void 0 === o && (o = !1),
                    t.bindings[t.counter] = {
                        el: e,
                        fn: n,
                        visible: i,
                        remove: o
                    },
                    t.refreshScrollInfo(t.counter),
                    t.counter += 1
            }
                ,
                t.remove = function(e) {
                    delete t.bindings[e]
                }
                ,
                t.refreshScrollInfo = function(e) {
                    var n = t.bindings[e];
                    n.height = n.el.outerHeight(),
                        n.top = n.el.offset().top,
                        "string" == typeof n.visible ? n.visiblePixels = n.height * i(n.visible) : n.visiblePixels = n.visible,
                        n.scrolledToFromBottomPoint = Math.floor(n.top + n.visiblePixels),
                        n.scrolledToFromTopPoint = Math.floor(n.top + n.height - n.visiblePixels)
                }
                ,
                t.recalculateAll = function() {
                    t.recalculateBrowserHeight();
                    for (var e in t.bindings)
                        t.refreshScrollInfo(e)
                }
                ,
                t.recalculateBrowserHeight = function() {
                    o = e.innerHeight || n.documentElement.clientHeight || n.getElementsByTagName("body")[0].clientHeight
                }
                ,
                t.inView = function(t, e) {
                    var n = t.top < e + .2 * o && t.top + t.visiblePixels > e + .8 * o
                        , i = e + o > t.scrolledToFromBottomPoint
                        , r = e < t.scrolledToFromTopPoint;
                    return n || r && i
                }
                ,
                t.scrollCheck = function(e) {
                    var n;
                    for (var i in t.bindings)
                        n = t.bindings[i],
                        t.inView(n, e) && (n.fn(n.el),
                        n.remove && t.remove(i))
                }
        }(r);
        var s = function(e, n, i) {
            e = t(e),
            0 !== e.length && r.add(e, n, i)
        };
        t(e).on("resize", o(function() {
            r.recalculateAll()
        }, 250)),
            t(n).on("ready", function() {
                r.recalculateBrowserHeight(),
                    i()
            }),
            t(e).on("load", i).on("scroll", o(i, 50)),
            e.App.fn.inView = s
    }(jQuery, window, document),
    function(t, e) {
        "use strict";
        function n(e) {
            var n = t.Deferred();
            return t("<img>").attr({
                src: e
            }).load(n.resolve),
                n
        }
        function i(e) {
            if (!e.data("loaded") && e.data("gif")) {
                e.data("loaded", !0);
                var i = e.siblings("img.gif-placeholder").attr("src")
                    , r = e.data("delay") || 500
                    , s = n(i)
                    , a = o.delay(r);
                return t.when(s, a).then(function() {
                    e.attr("src", i)
                })
            }
        }
        var o = e.App;
        t("[data-gif]").each(function() {
            var e = t(this);
            o.fn.inView(this, function() {
                i(e)
            }, "100%")
        }),
            o.fn.gif = i
    }(this.jQuery, this, this.document),
    function(t, e, n, i) {
        "use strict";
        var o, r, s, a = e.App, l = a.fn.video = {}, c = a.query("md");
        t("video").on("ended", function() {
            this.setAttribute("data:hasPlayed", "true")
        }),
            t(".js__play-all").each(function() {
                a.fn.inView(this, function(e) {
                    a.query("md") || t(e).find("video").each(function() {
                        "true" !== this.getAttribute("data:hasPlayed") && this.play()
                    })
                }, "80%")
            }),
            l.play = function(e) {
                t(e).length && ("undefined" != typeof o && "function" == typeof o.get && "function" == typeof o.get(0).pause && o.each(function() {
                    this.pause && this.pause()
                }),
                    o = t(e).get(0),
                    s = o.hasAttribute("loop"),
                    r = "true" === o.getAttribute("data:hasPlayed"),
                c || !s && r || (o = t(e),
                    o.each(function() {
                        if (this.play) {
                            var t = this.play();
                            t && t["catch"] && t["catch"](function() {})
                        }
                    })))
            }
            ,
            l.load = function() {
                a.query("md") || t("video source[data-src]").each(function() {
                    var e = t(this)
                        , n = e.data("src")
                        , i = e.parent().data("poster")
                        , o = e.parent().attr("retina")
                        , r = e.attr("type");
                    a.query("retina") && o && (n = o),
                    "video/mp4" !== r || c || e.parent().attr("src", n).attr("poster", i).removeAttr("data-poster"),
                        e.remove()
                })
            }
            ,
            l.load(),
            a.events.resize.push(l.load),
            t('video[data-autoplay="this"]').each(function() {
                var e = t(this).data("autoplayShownAmount");
                e === i && (e = "100%"),
                    a.fn.inView(this, function(t) {
                        l.play(t)
                    }, e)
            }),
            t('[data-lightbox="video"]').on("click", function(e) {
                e.preventDefault(),
                    t.featherlight('<div class="video__lightbox"><iframe src="' + t(this).attr("href") + '" frameborder="0" allowfullscreen></iframe></div>', {
                        filter: null,
                        type: "html"
                    })
            })
    }(this.jQuery, this, this.document),
    function(t, e) {
        "use strict";
        var n = t.App;
        e.fn.lazyLoad = function() {
            function i(t, e) {
                return -1 !== e.indexOf("placeholder.com") ? t.data(e) : t.data(e + a) || t.data(e)
            }
            function o(t, i) {
                t && n.callbacks && n.callbacks[i] && "function" == typeof n.callbacks[i] && e("<img/>").attr("src", t).load(n.callbacks[i])
            }
            function r() {
                s.each(function() {
                    var t = e(this)
                        , r = i(t, "large");
                    if (n.query("md") && (r = i(t, "medium")),
                    n.query("sm") && (r = i(t, "small") || i(t, "medium")),
                        r) {
                        var s = r.split("#");
                        o(s[0], t.data("callback")),
                            s[1] ? (t.attr("src", s[0]),
                                t.attr("width", s[1])) : -1 !== s[0].indexOf("-2x") ? e("<img/>").attr("src", s[0]).load(function() {
                                t.attr("width", Math.floor(this.width / 2)),
                                    t.attr("src", s[0])
                            }) : t.attr("src", s[0])
                    }
                })
            }
            var s = this
                , a = n.query("retina") ? "2x" : "";
            return e(t).on("resize.lazy", r),
                r(),
                s
        }
            ,
            e('img[data-lazy-load="true"]').lazyLoad()
    }(this, this.jQuery),
    function(t, e, n, i) {
        "use strict";
        function o(n, o) {
            var r = o.data("cb");
            n.removeClass("u__fading-in u__fading-out"),
            e.disabledScroll === i && t(e).trigger("scroll"),
                a.fn.video.play(n.find("video")),
            r && a.callbacks[r] && a.callbacks[r](n, o)
        }
        function r(t, e) {
            var n = t.closest(".container").length ? t.closest(".container") : t.closest('[data-carousel="wrap"]')
                , i = n.find(".active[data-show]")
                , o = i.parent()[e]().find("[data-show]");
            o.length ? o.trigger("click.app") : "prev" === e ? i.parent().siblings(":last").find("[data-show]").trigger("click.app") : "next" === e && i.parent().siblings(":first").find("[data-show]").trigger("click.app")
        }
        var s, a = e.App;
        a.settings.animationDelay = 200,
            a.fn.animations = function(n) {
                n = n || t("body"),
                    t("[data-show], [data-control]", n).on("click.user", function() {
                        s && e.clearInterval(s)
                    }),
                    t("[data-show]", n).on("click.app", function(e) {
                        e.preventDefault();
                        var n = t(this)
                            , i = n.closest('[data-carousel="wrap"]').length ? n.closest('[data-carousel="wrap"]') : n.closest(".container")
                            , r = n.data("group")
                            , s = i.find("[data-item]")
                            , l = i.find("[data-show]")
                            , c = i.data("hide-fade-effect")
                            , u = "disabled" === i.data("carousel-items");
                        r && (s = s.filter('[data-group="' + r + '"]'),
                            l = l.filter('[data-group="' + r + '"]'));
                        var d = n.data("show")
                            , p = s.filter('[data-item="' + d + '"]');
                        if (l.removeClass("active"),
                            n.addClass("active"),
                        (p.hasClass("u__hidden") || u) && (i.attr("data-animation-item", d),
                            !u)) {
                            if (a.settings.disableAnimations)
                                return s.removeClass("u__fading-out u__fading-in").addClass("u__hidden"),
                                    p.removeClass("u__hidden"),
                                    o(p, n);
                            c || s.addClass("u__fading-out"),
                                a.delay(a.settings.animationDelay).then(function() {
                                    return s.addClass("u__hidden"),
                                        p.removeClass("u__hidden"),
                                        a.wisUtils.pauseLatest(),
                                        a.delay(10)
                                }).then(function() {
                                    c || p.addClass("u__fading-in");
                                    var t = p.find(".wistia__video");
                                    return t.length && a.wisUtils.play(new a.wisUtils.vidObj(t)),
                                        a.delay(a.settings.animationDelay)
                                }).then(function() {
                                    s.removeClass("u__fading-out"),
                                        o(p, n)
                                })
                        }
                    }),
                    t("[data-item]", n).swipeEvents().on("swipeLeft", function() {
                        r(t(this), "next")
                    }).on("swipeRight", function() {
                        r(t(this), "prev")
                    }),
                    t("[data-control]", n).on("click.app", function(e) {
                        e.preventDefault();
                        var n = t(this)
                            , i = n.data("control");
                        r(n, i)
                    }),
                    t("[data-carousel-init]", n).each(function() {
                        var n = t(this).data("carouselInit");
                        s = e.setInterval(function() {
                            t("[data-carousel]:hover").length || t('[data-control="next"]').trigger("click.app")
                        }, n)
                    }),
                    t("[data-toggle]", n).on("click.app", function(e) {
                        e.preventDefault();
                        var n = t(this);
                        t('[data-toggle-wrap="' + n.data("toggle") + '"]').toggleClass("u__hidden"),
                            n.toggleClass("toggled")
                    }),
                    t('[data-hover="click"]').on("mouseover", function() {
                        t(this).trigger("click")
                    })
            }
            ,
            a.fn.animations()
    }(this.jQuery, this, this.document);
var marketoFormIds = {
    blog: 1040,
    books: 1021,
    books_footer: 1040,
    content: 1021,
    event_registration: 1020,
    signup_start: 1037,
    starter_kit: 1021,
    webinar: 1022
}
    , marketoAccountId = "258-CLW-344";
!function(t, e, n, i, o, r) {
    "use strict";
    var s = i.App
        , a = {};
    s.cta = {},
        s.cta.EmailAddressValidator = e.Model.extend({
            validateEmail: function(t) {
                return s.util.emailRegexp.test(t)
            },
            validate: function(t) {
                return this.validateEmail(t.email) ? void 0 : {
                    invalid_email: !0
                }
            }
        }),
        s.cta.adblockerError = {
            responseText: i.JSON.stringify({
                errors: {
                    base: ["We could not process your request. This is sometimes caused by ad blockers misbehaving and preventing requests from being made to Intercom. Please disable your ad blocker. Then refresh this page and try again."]
                }
            })
        },
        s.cta.CtaView = e.View.extend({
            events: {
                submit: "validateEmailAddressValidatorAndRedirect"
            },
            marketoFormIds: i.marketoFormIds,
            marketoAccountId: i.marketoAccountId,
            initialize: function() {
                this.$submit = t('[type="submit"]', this.$el),
                    this.$email = t('[data-signup="email"]', this.$el),
                    this.$pppVariation = t("[data-ppp-variation]", this.$el),
                    this.$freeSignup = t("[data-free-signup]", this.$el),
                    this.$pppEvent = t("[data-record-pricing]", this.$el),
                    this.$errors = t("[data-errors]", this.$el),
                    this.$form = this.$el.hasClass("cta__form") ? this.$el : t(".cta__form", this.$el)
            },
            initMarketoForm: function(t) {
                i.IntercomGTM && i.IntercomGTM.initMarketoForms && !s.environment.development && i.IntercomGTM.initMarketoForms("//app-ab27.marketo.com", i.marketoAccountId, t)["catch"](function() {})
            },
            recordEmailSubmissionWithMarketo: function(t, e) {
                return i.IntercomGTM.recordEmailSubmission(t, null, null, {}, null, e)
            },
            isLoading: function() {
                return this.$submit.hasClass("loading")
            },
            clearState: function() {
                this.$form.removeClass("error"),
                    this.$submit.addClass("loading"),
                    this.$email.removeClass("error"),
                    this.$errors.html("")
            },
            validateEmailAddressValidatorAndRedirect: function(t) {
                t.preventDefault(),
                this.isLoading() || (this.clearState(),
                    this.onboarding_email_address = new s.cta.EmailAddressValidator({
                        email: this.$email.val()
                    }),
                    this.onboarding_email_address.isValid() || 0 === this.$email.length ? this.successHandler() : this.errorHandler())
            },
            errorHandler: function() {
                i.setTimeout(function() {
                    this.$form.addClass("error")
                }
                    .bind(this), 0),
                    this.$email.focus().addClass("error"),
                    this.$submit.removeClass("loading")
            },
            outputErrors: function(e) {
                var n, o = {
                    base: ["We could not process your request. Please try again."]
                };
                try {
                    n = e.responseText ? i.JSON.parse(e.responseText).errors : {}
                } catch (r) {
                    n = o
                }
                if (Object.getOwnPropertyNames(n).length || (n = o),
                    this.$errors.html(""),
                    n)
                    for (var r in n)
                        t('input[name="' + r + '"]', this.$el).addClass("error"),
                            this.$errors.append('<p class="info__error">' + n[r].join('</p><p class="info__error">') + "</p>");
                this.$submit.removeClass("loading")
            },
            transition: function(e, n, i) {
                "function" != typeof i && (i = r),
                    t('[data-signup="' + e + '"]', this.$el).stop().fadeOut(400, function() {
                        t('[data-signup="' + n + '"]', this.$el).stop().fadeIn(400, i)
                    }
                        .bind(this))
            },
            popup: function(e) {
                t.featherlight(t('[data-book="' + e + '"]').html(), {
                    filter: null,
                    type: "html",
                    afterOpen: function() {
                        s.Book.Instances[e] = new s.Book[e]({
                            el: t(".featherlight-inner")
                        }),
                        a[e] && t.each(a[e], function(e, n) {
                            t('[name="' + e + '"]', ".featherlight-content form").val(n),
                                "phone" === e ? t('[name="' + e + '"]', ".featherlight-content form").val(n.phone).intlTelInput("setCountry", n.country) : t('[name="' + e + '"]', ".featherlight-content form").val(n)
                        }),
                            t("body").addClass("body__lightbox-open")
                    }
                        .bind(this),
                    beforeClose: function() {
                        a[e] = {},
                            t("input, select", ".featherlight-content form").each(function() {
                                var n = t(this).attr("name")
                                    , i = t(this).val();
                                "phone" === n && (i = {
                                    phone: i,
                                    country: t(this).intlTelInput("getSelectedCountryData").iso2
                                }),
                                    a[e][n] = i
                            }),
                            t("body").removeClass("body__lightbox-open")
                    }
                })
            }
        })
}(this.jQuery, this.Backbone, this._, this, this.document),
    function(t, e, n, i, o, r) {
        "use strict";
        function s() {
            return -1 === ["www.intercom.com", "www.intercom.io", "www.intercom.test"].indexOf(i.location.host)
        }
        var a = i.App;
        a.cta.OnboardingView = a.cta.CtaView.extend({
            initialize: function() {
                a.cta.CtaView.prototype.initialize.apply(this, Array.prototype.slice.call(arguments)),
                    this.initMarketoForm(this.marketoFormIds.signup_start)
            },
            successHandler: function() {
                var t = this.$email.val()
                    , e = this.$pppVariation.val()
                    , n = this.$freeSignup.val();
                this.recordGTMMetrics(t, function(i) {
                    this.recordPricingEvent(),
                        this.fireThirdPartyEvents(i),
                        a.query("md") && !e ? this.sendEmail(t) : this.prepareRedirect(t, i, e, n)
                }
                    .bind(this))
            },
            prepareRedirect: function(e, o, s, a) {
                var l, c = {
                    email: e,
                    email_submission_id: o,
                    locale: (i.translations || {}).locale || "en"
                };
                a ? (l = "https://app.intercom.io/a/signup/new/create",
                    c.free_signup = !0) : l = s ? "https://app.intercom.io/a/signup/new" : "https://app.intercom.io/admins/sign_up";
                var u = this.$el.data("product-id")
                    , d = this.$el.data("plan-ids")
                    , p = this.$el.data("solution-id")
                    , h = this.$el.data("extra");
                n.isNumber(u) && (c.product_id = u),
                n.isNumber(p) && (c.solution_id = p),
                n.isNumber(d) && (c.plan_ids = d),
                "flag_present" === s && (c.per_product_pricing_enabled = !0),
                h && t.isPlainObject(h) && (c = t.extend({}, c, h)),
                    n.each(c, function(t, e) {
                        t !== r && "" !== t || delete c[e]
                    });
                var f = t.param(c);
                this.redirect(l + "?" + f)
            },
            redirect: function(t) {
                i.location.href = t
            },
            recordPricingEvent: function() {
                var t = this.$pppEvent.data("record-pricing");
                if (t) {
                    var e = t.split("/")
                        , n = e[0]
                        , o = e[1];
                    try {
                        i.Intercom("trackEvent", o, {
                            action: "clicked",
                            object: o,
                            gtm_tracking_pageview_id: i.IntercomGTM.pageviewId,
                            place: n,
                            context: "pricing_page"
                        })
                    } catch (r) {}
                }
            },
            sendEmail: function(e) {
                t.ajax({
                    url: (s() ? "" : "") + "/api/mobile-signup",
                    type: "POST",
                    data: {
                        email: e
                    },
                    dataType: "json",
                    headers: {
                        "X-Requested-With": "intercom"
                    }
                }).then(function() {
                    this.transition("inputs", "success")
                }
                    .bind(this), this.errorHandler.bind(this)),
                i.ga && i.ga("send", "event", "button", "click", "open_installer_mobile")
            },
            recordGTMMetrics: function(t, e) {
                this.recordEmailSubmission(t, e)
            },
            recordEmailSubmission: function(t, e) {
                return i.IntercomGTM && !i.IntercomGTM.blocked ? i.IntercomGTM.recordEmailSubmission(t, !0, i.IntercomGTM.pageviewId, {
                    source: "signup-intent"
                }, null, i.marketoFormIds.signup_start).then(e) : e()
            },
            fireThirdPartyEvents: function(t) {
                if (i.App.environment.production) {
                    i.optimizely = i.optimizely || [],
                        i.optimizely.push({
                            type: "event",
                            eventName: "email_submission",
                            tags: {
                                emailSubmissionId: t
                            }
                        });
                    var e = this.$el.closest(".cta__footer").length
                        , n = e ? "wfSubmitGetStartedBottom" : "wfSubmitGetStartedTop";
                    i.optimizely.push({
                        type: "event",
                        eventName: n,
                        tags: {
                            emailSubmissionId: t
                        }
                    }),
                    i.fbq && (i.fbq("trackCustom", "ms_email_signed_up", {}),
                        i.fbq("track", "Lead", {})),
                    i.qp && i.qp("track", "Generic"),
                    i.gtag && i.gtag("event", "conversion", {
                        send_to: "AW-967943485/UutXCOvj9WQQvcrGzQM"
                    });
                    var o = new Image(1,1);
                    o.src = "//insight.adsrvr.org/track/conv/?adv=bzwixbq&ct=0:sxgxp5i&fmt=3";
                    var r = new Image(1,1);
                    r.src = "https://dc.ads.linkedin.com/collect/?pid=38643&conversionId=139071&fmt=gif",
                    i.IntercomGTM && i.IntercomGTM.recordGoogleImgPixel({
                        ms_email_signed_up: "true",
                        label: "e0V8CJ2JkGwQvcrGzQM",
                        value: "1.00",
                        currency_code: "USD"
                    }),
                        i.uetq = i.uetq || [],
                        i.uetq.push({
                            ec: "email_submission",
                            ea: "email_submission",
                            el: "email_submission",
                            ev: 0,
                            gv: 0
                        })
                }
            }
        }),
            a.cta.OnboardingsView = e.View.extend({
                el: "body",
                initMarketo: function() {
                    i.IntercomGTM && i.IntercomGTM.initMarketoForms && i.IntercomGTM.initMarketoForms("//app-ab27.marketo.com", i.marketoAccountId, i.marketoFormIds.signup_start)["catch"](function() {})
                },
                initialize: function() {
                    this.bindOnboardingEmailAddressForms(),
                        t(i).load(this.initMarketo)
                },
                bindOnboardingEmailAddressForms: function() {
                    this.onboarding_email_address_form_views = [],
                        n.each(t('[data-signup="form"]'), function(e) {
                            var n = new a.cta.OnboardingView({
                                el: t(e)
                            });
                            this.onboarding_email_address_form_views.push(n)
                        }
                            .bind(this))
                }
            }),
            t(function() {
                a.cta.OnboardingInit = new a.cta.OnboardingsView
            })
    }(this.jQuery, this.Backbone, this._, this, this.document),
    function(t, e, n, i) {
        "use strict";
        function o() {
            a = t(".js__book-bg"),
                r(),
                t(i).on("scroll.paralax", function() {
                    i.requestAnimationFrame(r)
                })
        }
        function r() {
            a.each(function() {
                var e = t(this)
                    , n = Math.round((e.offset().top - s.util.y()) / 7);
                e.css("transform", "translate3d(0, " + n + "px, 0)")
            })
        }
        var s = i.App;
        s.Book = {},
            s.Book.Instances = {};
        var a;
        s.Book.CS2Book = s.cta.CtaView.extend({
            initialize: function() {
                s.cta.CtaView.prototype.initialize.apply(this, Array.prototype.slice.call(arguments)),
                    this.initMarketoForm(this.marketoFormIds.books)
            },
            successHandler: function() {
                s.Book.email = this.$email.val(),
                    s.Book.newsletter = !!t("[data-newsletter]", this.$el).get(0).checked;
                var e = new this.model({
                    email: s.Book.email,
                    newsletter: s.Book.newsletter
                }).save();
                i.ga("send", "event", "button", "click", "cs2_book-original-email"),
                    this.recordEmailSubmissionWithMarketo(this.$email.val(), this.marketoFormIds.books).then(function() {
                        e.done(function(e) {
                            e.send_book ? (this.transition("initial", "success"),
                                this.transition("initial-copy", "success-copy")) : (this.transition("initial", "step-2"),
                                t("[data-book-init]", this.$el).on("click.book", function(e) {
                                    this.popup(t(e.currentTarget).data("bookInit"))
                                }
                                    .bind(this)))
                        }
                            .bind(this)),
                            e.error(this.outputErrors.bind(this))
                    }
                        .bind(this))["catch"](function() {
                        this.outputErrors(s.cta.adblockerError)
                    }
                        .bind(this))
            },
            model: e.Model.extend({
                urlRoot: "/api/books/customer-support",
                defaults: {
                    email: "",
                    newsletter: !1
                }
            })
        }),
            t(function() {
                var e = t('[data-book="customer-support-2"]');
                e.length && (s.Book.Instances.CS2 = new s.Book.CS2Book({
                    el: e
                }),
                    o())
            })
    }(this.jQuery, this.Backbone, this._, this, this.document),
    function(t, e, n, i) {
        "use strict";
        var o = i.App
            , r = o.Book
            , s = i.validator
            , a = /^\+?\d+$/;
        r.Base = e.View.extend({
            events: {
                submit: "handleSubmit"
            },
            marketoFormIds: i.marketoFormIds,
            marketoAccountId: i.marketoAccountId,
            initMarketo: function() {
                i.IntercomGTM && i.IntercomGTM.initMarketoForms && n.each(i.marketoFormIds, function(t) {
                    i.IntercomGTM.initMarketoForms("//app-ab27.marketo.com", i.marketoAccountId, t)["catch"](function() {})
                })
            },
            validateInput: function(e) {
                var n = !1
                    , i = e.data("validate");
                if (!i)
                    return !1;
                var o = i.split(",")
                    , r = e.data("notEqual");
                return o.forEach(function(i) {
                    var o = i.split(":")
                        , a = o[0]
                        , l = [e.val()];
                    l.push(o[1]),
                        s["is" + a].apply(null, l) ? e.removeClass("error") : (e.addClass("error"),
                            n = !0),
                    r && s.equals(e.val(), t('[name="' + r + '"]', this.$el).val()) && (e.addClass("error"),
                        n = !0)
                }
                    .bind(this)),
                    n
            },
            validateAll: function() {
                var e = !1;
                this.liveEdit(),
                    t("input", this.$el).each(function(n, i) {
                        this.validateInput(t(i)) && (e = !0)
                    }
                        .bind(this)),
                    this.$el.toggleClass("error", e)
            },
            isValidForm: function() {
                return !this.$el.hasClass("error")
            },
            liveEdit: function() {
                this.live !== !0 && (this.live = !0,
                    t("input", this.$el).on("keyup.book", function(e) {
                        this.validateInput(t(e.currentTarget))
                    }
                        .bind(this)))
            },
            saveData: function(e, n) {
                return new e(n).save({
                    beforeSend: function(e) {
                        e.setRequestHeader("X-CSRF-Token", t('meta[name="csrf-token"]').attr("content"))
                    }
                })
            },
            serialize: function() {
                var t = {};
                return this.$el.serializeArray().forEach(function(e) {
                    t[e.name] = e.value
                }),
                    t
            },
            success: function() {
                t('[type="submit"]', this.$el).removeClass("loading"),
                    t("[data-success]", this.$el).removeClass("u__hidden"),
                    t("[data-content]", this.$el).addClass("u__hidden"),
                    this.clearErrors(),
                    this.tag(),
                    i.App.fn.popups()
            },
            clearErrors: function() {
                t("[data-errors]", this.$el).html("")
            },
            error: function(e) {
                t('[type="submit"]').removeClass("loading"),
                    this.clearErrors();
                var n;
                try {
                    n = e.responseText ? i.JSON.parse(e.responseText).errors : {}
                } catch (o) {
                    n = {
                        base: ["We could not process your request for the book. Please try again."]
                    }
                }
                if (t("[data-errors]", this.$el).html(""),
                    n)
                    for (var o in n)
                        t('input[name="' + o + '"]', this.$el).addClass("error"),
                            t("[data-errors]", this.$el).append('<p class="info__error">' + n[o].join('</p><p class="info__error">') + "</p>")
            },
            tag: function() {
                var t = this.$el.data("tag");
                t && i.ga && i.ga("book.send", "event", "button", "click", t)
            },
            validateFields: function(e) {
                var n = !1;
                return t("[required]", this.$el.find(e)).each(function(e, i) {
                    this.isValidInput(i) ? t(i).removeClass("error") : (n = !0,
                        t(i).addClass("error"))
                }
                    .bind(this)),
                    n
            },
            isValidEmail: function(e) {
                return "email" === t(e).attr("type") ? o.util.emailRegexp.test(t(e).val()) : !0
            },
            isValidPhone: function(e) {
                var n = t(e).val().replace(/\D/g, "");
                return "phone" === t(e).attr("name") ? a.test(n) : !0
            },
            isValidInput: function(t) {
                return this.isValidPhone(t) && this.isValidEmail(t) && !!this.inputVal(t)
            },
            inputVal: function(e) {
                return "checkbox" === t(e).attr("type") ? e.checked : "phone" === t(e).attr("name") ? t(e).intlTelInput("getNumber") : t(e).val()
            }
        })
    }(this.jQuery, this.Backbone, this._, this, this.document),
    function(t, e, n, i) {
        "use strict";
        var o = i.App;
        o.Book.JTBDBook = o.cta.CtaView.extend({
            initialize: function() {
                o.cta.CtaView.prototype.initialize.apply(this, Array.prototype.slice.call(arguments)),
                    this.initMarketoForm(this.marketoFormIds.books)
            },
            successHandler: function() {
                o.Book.email = this.$email.val(),
                    o.Book.newsletter = !!t("[data-newsletter]", this.$el).get(0).checked;
                var e = new this.model({
                    email: o.Book.email,
                    newsletter: o.Book.newsletter
                }).save();
                i.ga("send", "event", "button", "click", "jtbd_book-original-email"),
                    this.recordEmailSubmissionWithMarketo(o.Book.email, this.marketoFormIds.books).then(function() {
                        i.fbq && i.fbq("trackCustom", "ms_book_email_submission", {
                            book_name: "jobs_to_be_done"
                        }),
                            e.done(function() {
                                this.transition("initial", "success")
                            }
                                .bind(this)).error(this.outputErrors.bind(this))
                    }
                        .bind(this))["catch"](function() {
                        this.outputErrors(o.cta.adblockerError)
                    }
                        .bind(this))
            },
            model: e.Model.extend({
                urlRoot: "/api/books/jtbd",
                defaults: {
                    email: "",
                    newsletter: !1
                }
            })
        }),
            t(function() {
                var e = t('[data-book="jtbd"]');
                e.length && (o.Book.Instances.JTBD = new o.Book.JTBDBook({
                    el: e
                }))
            })
    }(this.jQuery, this.Backbone, this._, this, this.document),
    function(t, e, n, i) {
        "use strict";
        var o = i.App
            , r = o.Book;
        r.Friends = r.Base.extend({
            initialize: function() {
                t("[data-success]", this.$el).addClass("u__hidden"),
                    t("[data-content]", this.$el).removeClass("u__hidden")
            },
            handleSubmit: function(n) {
                if (n.preventDefault(),
                    this.validateAll(),
                    i.ga("send", "event", "button", "click", this.$el.data("tag")),
                    this.isValidForm()) {
                    t('[type="submit"]', this.$el).addClass("loading");
                    var r = this.serialize();
                    r.email = o.Book.email,
                        r.newsletter = o.Book.newsletter,
                        r.type = "friend",
                        this.saveData(e.Model.extend({
                            urlRoot: this.$el.data("model")
                        }), r).done(this.success.bind(this)).error(this.error.bind(this))
                }
            }
        })
    }(this.jQuery, this.Backbone, this._, this, this.document),
    function(t, e, n, i) {
        "use strict";
        var o = i.App
            , r = o.Book;
        r.Charity = r.Base.extend({
            initialize: function() {
                var e = this.$el;
                o.fn.tooltips(e),
                    t("[data-success]", e).addClass("u__hidden"),
                    t("[data-content]", e).removeClass("u__hidden"),
                    t('[name="credit-card"]', e).mask("0000 0000 0000 0000"),
                    t('[name="cvc"]', e).mask("0000"),
                    t('[name="expiry-month"]', e).mask("00"),
                    t('[name="expiry-year"]', e).mask("00"),
                    t('[name="credit-card"]', e).on("keyup", function() {
                        19 === t(this).val().length && t('[name="expiry-month"]', e).trigger("focus")
                    }),
                    t('[name="expiry-month"]', e).on("keyup", function() {
                        2 === t(this).val().length && t('[name="expiry-year"]', e).trigger("focus")
                    }),
                    t('[name="expiry-year"]', e).on("keyup", function() {
                        2 === t(this).val().length && t('[name="cvc"]', e).trigger("focus")
                    })
            },
            getToken: function(e) {
                i.Stripe.setPublishableKey(i.stripeApiKey),
                    i.Stripe.card.createToken({
                        number: t('[name="credit-card"]', this.$el).val(),
                        cvc: t('[name="cvc"]', this.$el).val(),
                        exp_month: t('[name="expiry-month"]', this.$el).val(),
                        exp_year: "20" + t('[name="expiry-year"]', this.$el).val()
                    }, e)
            },
            handleSubmit: function(n) {
                if (n.preventDefault(),
                    this.validateAll(),
                    i.ga("send", "event", "button", "click", this.$el.data("tag")),
                    this.isValidForm()) {
                    t('[type="submit"]', this.$el).addClass("loading");
                    var r = {
                        email: o.Book.email,
                        newsletter: o.Book.newsletter,
                        type: "charity"
                    };
                    this.getToken(function(n, i) {
                        200 === n ? (r.stripe_token = i.id,
                            this.saveData(e.Model.extend({
                                urlRoot: this.$el.data("model")
                            }), r).done(this.success.bind(this)).error(this.error.bind(this))) : (this.clearErrors(),
                            t('[type="submit"]').removeClass("loading"),
                            t("[data-errors]", this.$el).append('<p class="info__error">' + i.error.message + "</p>"))
                    }
                        .bind(this))
                }
            }
        })
    }(this.jQuery, this.Backbone, this._, this, this.document),
    function(t, e, n, i) {
        "use strict";
        var o = i.App;
        o.Book.OnboardingBook = o.cta.CtaView.extend({
            initialize: function() {
                o.cta.CtaView.prototype.initialize.apply(this, Array.prototype.slice.call(arguments)),
                    this.initMarketoForm(this.marketoFormIds.books);
            },
            successHandler: function() {
                o.Book.email = this.$email.val(),
                    o.Book.newsletter = !!t("[data-newsletter]", this.$el).get(0).checked;
                var e = new this.model({
                    email: o.Book.email,
                    newsletter: o.Book.newsletter
                }).save();
                i.ga("send", "event", "button", "click", "onboarding_book-original-email"),
                    this.recordEmailSubmissionWithMarketo(o.Book.email, this.marketoFormIds.books).then(function() {
                        i.fbq && i.fbq("trackCustom", "ms_book_email_submission", {
                            book_name: "onboarding"
                        }),
                            e.error(function(e) {
                                t.featherlight.close(),
                                    this.transition("success", "initial"),
                                    this.outputErrors(e),
                                    t('[type="submit"]', this.$el).removeClass("loading")
                            }
                                .bind(this)),
                            this.transition("initial", "success"),
                            t("[data-book-init]", this.$el).on("click.book", function(e) {
                                this.popup(t(e.currentTarget).data("bookInit"))
                            }
                                .bind(this))
                    }
                        .bind(this))["catch"](function() {
                        this.outputErrors(o.cta.adblockerError)
                    }
                        .bind(this))
            },
            model: e.Model.extend({
                urlRoot: "/api/books/onboarding",
                defaults: {
                    email: "",
                    newsletter: !1
                }
            })
        }),
            t(function() {
                var e = t('[data-book="onboarding"]');
                e.length && (o.Book.Instances.Onboarding = new o.Book.OnboardingBook({
                    el: e
                }))
            })
    }(this.jQuery, this.Backbone, this._, this, this.document),
    function(t, e, n, i) {
        "use strict";
        var o = i.App;
        o.cta.PowerOfMessaging = o.cta.CtaView.extend({
            initialize: function() {
                o.cta.CtaView.prototype.initialize.apply(this, Array.prototype.slice.call(arguments)),
                    this.initMarketoForm(this.marketoFormIds.signup_start)
            },
            successHandler: function() {
                this.recordEmailSubmissionWithMarketo(this.$email.val(), this.marketoFormIds.signup_start).then(function() {
                    t.ajax({
                        url: ("http://www.intercom.test" === i.location.origin ? "http://www.intercom.test" : "") + "/api/power-of-messaging",
                        data: {
                            email: this.$email.val()
                        },
                        dataType: "jsonp"
                    }).error(this.outputErrors.bind(this)).done(function() {
                        this.transition("initial", "success")
                    }
                        .bind(this))
                }
                    .bind(this))["catch"](function() {
                    this.outputErrors(o.cta.adblockerError)
                }
                    .bind(this))
            }
        }),
            t(function() {
                var e = t('[data-microsite="power-of-messaging"]');
                e.length && (o.cta.PowerOfMessagingInit = new o.cta.PowerOfMessaging({
                    el: e
                }))
            })
    }(this.jQuery, this.Backbone, this._, this, this.document),
    function(t, e) {
        "use strict";
        var n = e.App;
        n.cta.MobileAppsSMS = n.cta.CtaView.extend({
            events: {
                submit: "validateNumber"
            },
            validateNumber: function(t) {
                if (t.preventDefault(),
                    !this.isLoading()) {
                    this.clearState();
                    var e = /(\+\d{1,2}[\s]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
                    e.test(this.$email.intlTelInput("getNumber")) ? this.successHandler() : this.errorHandler()
                }
            },
            successHandler: function() {
                var t = new this.model({
                    number: this.$email.intlTelInput("getNumber")
                }).save();
                t.done(this.transition.bind(this, "form", "success")).error(this.outputErrors.bind(this))
            },
            model: e.Backbone.Model.extend({
                urlRoot: "/api/mobile-apps-sms",
                defaults: {
                    number: ""
                }
            })
        }),
            t(function() {
                n.cta.MobileAppsSMSInit = [],
                    t('[data-form="mobile-apps-sms"]').each(function() {
                        n.cta.MobileAppsSMSInit.push(new n.cta.MobileAppsSMS({
                            el: t(this)
                        }));
                        var e = t('input[type="text"].js__cta__phone-number', this);
                        e.intlTelInput({
                            initialCountry: "us",
                            autoPlaceholder: !0,
                            utilsScript: "/assets/_redesign/mobile-apps/utils.js",
                            customPlaceholder: function(t) {
                                var i = t.replace(/[0-9]/g, "0");
                                return e.mask(i),
                                    n.tr("mobile_apps.input_placeholder")
                            }
                        })
                    })
            })
    }(this.jQuery, this, this.document),
    function(t, e) {
        "use strict";
        t(e).load(function() {
            t("[data-blog-config]").each(function() {
                var e = t(this)
                    , n = e.find("[data-blog-spinner]")
                    , i = e.data("blogConfig")
                    , o = "";
                t.ajax({
                    url: "/api/blog/posts",
                    method: "GET",
                    data: i
                }).done(function(i) {
                    t.each(i, function(t, e) {
                        o += '<div class="footer__link"><a href="' + e.link + '">' + e.title + "</a></div>"
                    }),
                        n.addClass("hidden"),
                        e.html(o).removeClass("hidden").removeClass("u__hidden")
                })
            })
        })
    }(this.jQuery, this, this.document),
    function(t, e, n) {
        "use strict";
        function i() {
            a.forEach(function(t) {
                t.slick("unslick")
            }),
                a = [],
                t(".js__slider-mobile").each(function() {
                    var e = t(this)
                        , n = e.data("disableCenterMode") === !0;
                    o.query("md") && (e.find("> .u__hidden--md").remove(),
                        e.on("init", function() {
                            t('img[data-lazy-load="true"]').lazyLoad()
                        }),
                        a.push(e.slick({
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: !1,
                            dots: !0,
                            centerMode: !n,
                            focusOnSelect: !0,
                            centerPadding: "20px"
                        })))
                }),
                t(".js__slider-desktop").each(function() {
                    var e = t(this);
                    o.util.width() > o.settings.md && (e.on("init", function() {
                        t('img[data-lazy-load="true"]').lazyLoad()
                    }),
                        a.push(e.slick({
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: !1,
                            dots: !0,
                            autoplay: !0,
                            autoplaySpeed: 3e3
                        })))
                })
        }
        var o = e.App;
        t("[data-visible]").each(function() {
            var e = t(this).data("visible") || "100%";
            o.fn.inView(this, function(e) {
                t(e).addClass("element-visible")
            }, e)
        }),
            t(".same-height").matchHeight(),
            o.fn.tooltips = function(n) {
                t('[data-tooltip="trigger"]', n).each(function() {
                    var n = t(this);
                    n.tooltipster({
                        delay: 0,
                        content: n.html(),
                        contentAsHTML: !0,
                        interactive: !0,
                        interactiveTolerance: 10,
                        maxWidth: "180",
                        positionTracker: !0,
                        position: o.query("md") ? "top" : "left",
                        speed: 0,
                        timer: 0,
                        trigger: e.Modernizr.touch ? "click" : "hover"
                    })
                })
            }
            ,
            o.fn.tooltips(n),
            t(".select").niceSelect();
        var r;
        if (t("[data-inline-wistia]").each(function() {
            var n = t(this)
                , i = n.data("inlineWistia");
            n.attr("id", "wistia_" + i),
                r = e.Wistia.embed(i, {
                    videoQuality: "hd-only"
                })
        }),
            t("[data-play]").on("click.play", function() {
                var e = t(this);
                r && r.play && r.play(),
                "wrap" !== t(this).data("play") && e.addClass("u__hidden"),
                    e.off("click.play")
            }),
            t(".language-banner").length) {
            var s = t(".home-banner-link");
            s.on("click", function(t) {
                t.preventDefault(),
                    e.ga("send", "event", "button", "click", "language-banner", s.attr("data-locale")),
                    e.location.assign(s.attr("data-href"))
            })
        }
        var a = [];
        o.events.resize.push(i),
            i(),
            t(".js__slider-simple").each(function() {
                t(this).slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: !0,
                    dots: !0,
                    autoplay: !0,
                    autoplaySpeed: 15e3
                })
            }),
            t("[data-record]").on("click", function(n) {
                n.preventDefault();
                var i = t(this).data("record")
                    , o = t(this).attr("href");
                try {
                    e.Intercom("trackEvent", i)
                } catch (n) {}
                e.setTimeout(function() {
                    e.location.href = o
                }, 1500)
            }),
            t("[data-accordion]").accordion(),
            t('[data-lightbox="open"]').on("click", function(e) {
                e.preventDefault();
                var n = t(this).data("lightboxTarget");
                t.featherlight(t('[data-lightbox="' + n + '"]').html(), {
                    filter: null,
                    type: "html"
                })
            })
    }(this.jQuery, this, this.document),
    function(t, e) {
        "use strict";
        function n() {
            var e = t(".nav__primary__placeholder")
                , n = e.length ? e : l;
            n.length && (r = n.offset().top)
        }
        function i() {
            var e = t('[data-subnav="sticky"]');
            e.length && (d = e.offset().top)
        }
        var o, r, s = e.App, a = t("body"), l = t(".nav__primary"), c = t(".nav__subnav").length, u = t("[data-nav]"), d = t("[data-subnavHeight]").attr("data-subnavHeight") || 150, p = (t("[data-nav-links]"),
            t(".js__dropdown")), h = !1;
        e.Modernizr.touch || s.query("md") || "#nav" === e.location.hash ? u.on("click.navigation", function() {
            l.toggleClass("nav__open"),
                t(this).toggleClass("active"),
                p.css("max-height", e.innerHeight - 72 + "px")
        }) : u.on("mouseover.navigation", function() {
            e.clearTimeout(o),
                t(this).addClass("active"),
                o = e.setTimeout(function() {
                    l.addClass("nav__open")
                }, 300)
        }).on("mouseleave.navigation", function(n) {
            var i = t(this)
                , r = t(n.relatedTarget);
            r.hasClass("nav__link-arrow") || (l.removeClass("nav__open"),
                e.clearTimeout(o)),
                e.setTimeout(function() {
                    i.removeClass("active")
                }, 1)
        }),
        c && t(e).on("scroll", function() {
            a.toggleClass("nav__subnav-active", s.util.y() > d)
        }),
            i(),
            t(e).on("load", i),
            s.events.resize.push(i),
        a.hasClass("nav__fixed") || a.hasClass("nav__disabled-scroll") || c || (t(e).on("scroll", function() {
            var t = s.util.y();
            h && r >= t ? (a.removeClass("nav__fixed"),
                h = !1) : t > r && (a.addClass("nav__fixed"),
                h = !0)
        }),
            n(),
            t(e).on("load", n),
            s.events.resize.push(n))
    }(this.jQuery, this, this.document),
    $(function() {
        "use strict";
        function t() {
            $("[data-scroll=true]").on("click", function(t) {
                var e = this.href.split("#")[1]
                    , n = "#" + e
                    , i = $(n)
                    , r = $(this).data("offset") || 0;
                i.length && ($("html, body").animate({
                    scrollTop: i.offset().top - o + r
                }, 500, function() {
                    window.history && window.history.pushState && window.history.pushState({}, "", n)
                }),
                    t.preventDefault())
            })
        }
        function e() {
            var t = $('[data-active-link="true"]')
                , e = {};
            t.length && (t.each(function() {
                    var t = $(this).attr("href").replace(/^\//, "")
                        , n = $(t);
                    n.offset() && (e[t] = {
                        $el: $(this),
                        start: window.Math.floor(n.offset().top) - (o + 2),
                        stop: window.Math.floor(n.offset().top + n.outerHeight()) - (o + 2)
                    })
                }),
                    n = function(n) {
                        t.removeClass("active"),
                            $.each(e, function(e, o) {
                                o.start < n && o.stop > n && (t.removeClass("active"),
                                    o.$el.addClass("active"),
                                i.events.activeLinksCb && i.events.activeLinksCb.call(o.$el))
                            })
                    }
            )
        }
        var n, i = window.App, o = 60 + (i.headerOffset || 0);
        window.App.fn.initActiveLinks = e,
            window.App.fn.animateScroll = t,
            window.setTimeout(e, 3e3),
            $(window).on("load", e),
            i.events.resize.push(e),
            e(),
            t(),
            $(window).on("scroll", function() {
                n && n(i.util.y())
            })
    }),
    function(t, e, n) {
        "use strict";
        function i() {
            r.numberCtaEvents(),
                e.analytics = {},
                e.analytics.GTMEventList = [],
                s.scroll(),
                s.click()
        }
        e.ga = e.ga || function() {
            (e.ga.q = e.ga.q || []).push(arguments)
        }
        ;
        var o = {
            scrollMaxPercent: 0,
            arrScrollTier: [-25, 0],
            scrollTier: 0
        }
            , r = {
            gatherData: function(t) {
                var e = t.data("track").split(",");
                return t.data("trackCta") && (e[1] += "-" + t.data("trackCta")),
                    e
            },
            numberCtaEvents: function() {
                t(".cta").each(function(e) {
                    t("[data-track]", t(this)).data("trackCta", e + 1),
                        e += 1
                })
            },
            findScrollPercent: function() {
                var i = t(e).scrollTop()
                    , o = t(n).height()
                    , r = t(e).height()
                    , s = i / (o - r);
                return s = Math.round(100 * s)
            },
            findScrollTier: function() {
                var t = o.scrollMaxPercent
                    , e = 0;
                switch (!0) {
                    case t > 25 && 50 >= t:
                        e = 25;
                        break;
                    case t > 50 && 75 >= t:
                        e = 50;
                        break;
                    case t > 75 && 100 >= t:
                        e = 75;
                        break;
                    default:
                        e = 0
                }
                return e
            },
            updateScrollPercent: function() {
                return r.findScrollPercent() > o.scrollMaxPercent ? (o.scrollMaxPercent = r.findScrollPercent(),
                    !0) : !1
            },
            updateScrollTier: function() {
                return o.scrollMaxPercent > o.arrScrollTier[1] ? (o.arrScrollTier[0] += 25,
                    o.arrScrollTier[1] += 25,
                    o.scrollTier = r.findScrollTier(),
                    !0) : !1
            }
        }
            , s = {
            scroll: function() {
                t(e).scroll(function() {
                    a.pageScroll()
                })
            },
            click: function() {
                t("[data-track]").click(function() {
                    var e = r.gatherData(t(this));
                    a.clickEvent(e)
                }),
                    t("[data-track-gtm]").click(function() {
                        a.gtmEvent(t(this).data("track-gtm"))
                    })
            }
        }
            , a = {
            pageScroll: function() {
                r.updateScrollPercent() && (e.ga("send", "event", "page", "scroll", "percent", o.scrollMaxPercent),
                r.updateScrollTier() && e.ga("send", "event", "page", "scroll", "tier", o.scrollTier))
            },
            clickEvent: function(t) {
                e.ga("send", "event", t[0], "click", t[1].trim())
            },
            gtmEvent: function(t) {
                e.Intercom && e.IntercomGTM && -1 === _.indexOf(e.analytics.GTMEventList, t) && (e.IntercomGTM.recordEvent(t.trim(), e.IntercomGTM.pageviewId),
                    e.analytics.GTMEventList.push(t))
            }
        };
        i()
    }(jQuery, window, document);
var _wq = window._wq || [];
!function(t, e, n) {
    "use strict";
    function i(t) {
        this.$node = t,
            this.wisId = t.data("wistia"),
            this.$wisNode = t.closest(".wistia_embed"),
            this.autoplay = t.data("autoplay"),
            this.playCount = 0,
            this.loop = t.data("loop"),
            this.quality = t.data("quality")
    }
    function o() {
        d.collectVids(),
            d.addVidOptions(),
            r(),
            s()
    }
    function r() {
        if (t("[data-wistia]").length) {
            var e = n.createElement("script");
            e.src = "//fast.wistia.net/assets/external/E-v1.js",
                t("body").append(e)
        }
    }
    function s() {
        t(".wistia__video-iframe").each(function() {
            var e = t("iframe", this);
            e.data("autoplay") && c.fn.inView(e, a.bind(null, e), "100%")
        })
    }
    function a(t) {
        !e.Wistia || t.data("played") === !0 && t.data("loop") !== !0 || (d.pauseLatest(),
            l = e.Wistia.api(t.data("wistia")),
            l.play(),
            l.bind("end", t.data.bind(t, "played", !0)))
    }
    var l, c = e.App, u = [], d = {
        collectVids: function() {
            t("[data-wistia]").each(function() {
                var e = new i(t(this));
                u.push(e)
            })
        },
        addToEventQueue: function(t, e) {
            var n = {};
            n[t] = e,
                _wq.push(n)
        },
        addVidOptions: function() {
            for (var t = 0; t < u.length; t++) {
                var e = u[t];
                e.autoplay && d.playOnView(e)
            }
        },
        play: function(t) {
            var e = function(e) {
                l && l.pause(),
                    e.play(),
                    t.playCount += 1,
                    l = e
            };
            (t.loop || t.playCount < 1) && d.addToEventQueue(t.wisId, e)
        },
        pauseLatest: function() {
            l && l.pause()
        },
        playOnView: function(t) {
            c.fn.inView(t.$node, d.play.bind(d, t), "100%")
        },
        vidObj: i
    };
    c.wisUtils = d,
        o()
}(this.jQuery, this, this.document),
    function(t, e, n) {
        "use strict";
        function i() {
            var e = Number(t('[data-events-gallery="position"]').text()) - 1;
            e = e > 0 ? e : t("[data-events-gallery-total]").data("eventsGalleryTotal");
            var n = t('[data-index="' + e + '"]');
            t("[data-original]").attr("src", n.data("large")),
                t('[data-events-gallery="position"]').text(e)
        }
        function o() {
            var e = Number(t('[data-events-gallery="position"]').text()) + 1;
            e = e <= t("[data-events-gallery-total]").data("eventsGalleryTotal") ? e : 1;
            var n = t('[data-index="' + e + '"]');
            t("[data-original]").attr("src", n.data("large")),
                t('[data-events-gallery="position"]').text(e)
        }
        function r() {
            t("body").removeClass("body__lightbox-active"),
                e.setTimeout(function() {
                    t('[data-events-gallery="wrap"]').addClass("u__hidden")
                }, 500)
        }
        function s() {
            var t = p.width()
                , e = p.height()
                , n = 1.77866;
            e * n > t ? (h.attr("height", e),
                h.attr("width", e * n),
                h.css("left", -(e * n - t) / 2)) : (h.attr("height", t / n),
                h.attr("width", t),
                h.css("top", -(t / n - e) / 2)),
                h.addClass("loaded")
        }
        function a() {
            f || c.query("md") || h[0].play()
        }
        function l() {
            c.query("md") || h[0].pause()
        }
        var c = e.App;
        if (t('[data-event="init"]').length) {
            t("[data-event-filter]").on("change", function() {
                var e = t('[data-event-filter="location"]').val();
                t("[data-event-location], .events__feed-month").removeClass("u__hidden"),
                "all" !== e && t('.event__feed-item[data-event-location!="' + e + '"]').addClass("u__hidden"),
                    t(".events__feed-month").each(function() {
                        var e = t(this)
                            , n = e.text();
                        t('[data-event-month="' + n + '"]:visible').length || e.addClass("u__hidden")
                    })
            });
            var u = t(e).height()
                , d = t("body");
            t(e).on("scroll", function() {
                d.toggleClass("event__scrolling", e.App.util.y() > u / 2)
            }),
                t("[data-thumbnail]").on("click", function() {
                    var n = t(this);
                    t('[data-events-gallery="wrap"]').removeClass("u__hidden"),
                        t("[data-original]").attr("src", n.data("large")),
                        t('[data-events-gallery="position"]').text(n.data("index")),
                        e.setTimeout(function() {
                            t("body").addClass("body__lightbox-active")
                        }, 10)
                }),
                t('[data-events-gallery="prev"]').on("click", i),
                t('[data-events-gallery="next"]').on("click", o),
                t(n).on("keydown.hide-footer", function(t) {
                    27 === t.which && r(),
                    40 !== t.which && 39 !== t.which || o(),
                    38 !== t.which && 37 !== t.which || i()
                }),
                t('[data-events-gallery="wrap"]').on("click", function(e) {
                    "wrap" === t(e.target).data("eventsGallery") && r()
                });
            var p = t(".events__video")
                , h = t("video", p)
                , f = !1;
            h.length && (s(),
                c.events.resize.push(s),
                t('[data-events="video-play"]').on("click", function(e) {
                    e.preventDefault(),
                        t.featherlight('<div class="video__lightbox"><iframe src="https://www.youtube.com/embed/yywFufxPIN0?autoplay=1&hd=1&rel=0" frameborder="0" allowfullscreen></iframe></div>', {
                            filter: null,
                            type: "html",
                            afterOpen: function() {
                                f = !0,
                                    l()
                            },
                            afterClose: function() {
                                f = !1,
                                    a()
                            }
                        })
                }),
                t(e).load(a),
                e.setTimeout(a, 3e3))
        }
    }(this.jQuery, this, this.document),
    function(t, e) {
        "use strict";
        var n = e.App
            , i = t("body")
            , o = t(".js__startups-van");
        o.length && !n.query("sm") && t(e).on("scroll.early-stage", function() {
            var t = e.scrollY || e.pageYOffset
                , n = e.Math.floor(t / 3)
                , r = e.Math.floor(t / 6);
            i.toggleClass("startups__body-past-hero", t > 800),
            500 > t && o.css("transform", "translate(" + n + "%," + r + "%)")
        })
    }(this.jQuery, this, this.document),
    function(t, e) {
        "use strict";
        function n() {
            return t.trim(t(".js__search-filter").val().toLowerCase())
        }
        function i() {
            var e = n()
                , i = "*"
                , s = t(".js__integrations-default .js__integration-col").clone();
            t(".js__category-filter").each(function() {
                var e = t(this);
                e.is(":checked") && (i += '[data-category*="' + e.attr("name") + '"]')
            }),
            t(".js__intercom-filter").is(":checked") && (i += '[data-intercom="true"]'),
                s = s.filter(i),
            e && (s = s.filter(function() {
                var n = !1;
                return t(this).find(".js__searchable").each(function() {
                    t.trim(t(this).text().toLowerCase()).match(e) && (n = !0)
                }),
                    n
            })),
                "*" !== i || e ? o(s) : r()
        }
        function o(e) {
            var n = c.hasClass("active") ? c : l;
            e.length || (e = '<div class="g__c12"><div class="sp__4"></div><h5 class="t__h5 f__left u__reset">No results found</h5></div>'),
                n.removeClass("active"),
                a.delay(200).then(function() {
                    return n.addClass("u__hidden"),
                        c.removeClass("u__hidden"),
                        t(".js__integrations-search-row").html(e),
                        a.delay(10)
                }).then(function() {
                    c.addClass("active")
                })
        }
        function r() {
            c.removeClass("active"),
                a.delay(200).then(function() {
                    return c.addClass("u__hidden"),
                        l.removeClass("u__hidden"),
                        a.delay(10)
                }).then(function() {
                    l.addClass("active")
                })
        }
        function s() {
            t(".js__search-filter").val(""),
                t(".js__category-filter").each(function() {
                    t(this).attr("checked", !1)
                }),
                t(".js__intercom-filter").attr("checked", !1),
                r()
        }
        var a = e.App
            , l = t(".js__integrations-default")
            , c = t(".js__integrations-search");
        c.length && (t(".js__integrations-filters-trigger").on("click", function() {
            var n = t(this).parent().hasClass("integrations__filters-open") ? "close-filters" : "open-filters";
            e.ga("send", "event", "integrations-filters", "click", n),
                t(this).parent().toggleClass("integrations__filters-open")
        }),
            t(".js__integrations-filters-clear").on("click", function(t) {
                e.ga("send", "event", "integrations-filters", "click", "clear-filters"),
                    t.preventDefault(),
                    s()
            }),
            t(".js__category-filter, .js__intercom-filter").on("change", e._.debounce(function() {
                e.ga("send", "event", "integrations-filters", "click", t(this).attr("name")),
                    i()
            }, 200)),
            t(".js__search-filter").on("input", e._.debounce(function() {
                e.ga("send", "event", "integrations-filters", "search", n()),
                    i()
            }, 500)))
    }(this.jQuery, this, this.document),
    function(t, e) {
        "use strict";
        function n(t) {
            v.currentTime = t,
                r(),
                v.play()
        }
        function i() {
            v.pause(),
                d = e.clearInterval(d),
                o()
        }
        function o() {
            var t = 1e3 / h * v.currentTime;
            g.val(t).trigger("change.js-rangeslider-0")
        }
        function r() {
            e.clearInterval(d),
                d = e.setInterval(function() {
                    o(),
                        s()
                }, 16)
        }
        function s() {
            u.attr("data-video-slideshow", b),
            v.currentTime > f[b] && (i(),
                v.currentTime = f[b],
                o()),
                b = a(v.currentTime) || 100
        }
        function a(t) {
            var e = 0;
            return f.forEach(function(n, i) {
                t >= n && t <= (f[++i] || 100) && (e = i)
            }),
                e
        }
        function l() {
            f.forEach(function(e, n) {
                var i = "left: " + e / h * 100 + "%";
                t("[data-video-progress]").append('<div class="video__progress-breakpoint" style="' + i + '" data-video="' + (n + 1) + '"></div>')
            }),
                t("[data-video-progress]").append('<div class="video__progress-breakpoint" style="right: -4px;"></div>')
        }
        var c = e.App
            , u = t("[data-video-slideshow]");
        if (u.length && !c.query("md")) {
            var d, p, h = e.videoDuration || 12, f = e.videoBreakpoints || [0, 3, 6, 9], m = t("video", u), v = m[0], g = t('input[type="range"]', u), y = !1, b = 100, w = navigator.userAgent.match(/Version\/([\d\.]+).*Safari/), x = w && Number(w[1]) < 10;
            g.rangeslider({
                polyfill: !1
            }),
                l(),
                c.fn.inView(u[0], function() {
                    y || (x && f.push(h - .05),
                        n(0),
                        y = !0)
                }, "80%"),
                t("[data-video]").on("click", function() {
                    b = t(this).data("video"),
                        n(f[b - 1] + .1),
                        o()
                }),
                g.on("change.video", function() {
                    e.clearInterval(d);
                    var t = Math.floor(h * (g.val() / 1e3) * 100) / 100;
                    b = a(t),
                        v.currentTime = t,
                        o(),
                        n(t)
                }),
                m.on("ended", function() {
                    e.clearInterval(d),
                        o(),
                        b += 1
                }),
                t("#js-rangeslider-0").on("mousedown", i),
                t("[data-video-rewind]").on("click", function(t) {
                    t.preventDefault();
                    var i = 1;
                    (v.paused || p) && (i = 2);
                    var r = f[b - i] + .1;
                    (r || 0 === r) && (v.currentTime = r,
                        o(),
                        p = e.clearInterval(p),
                        p = e.setTimeout(function() {
                            n(v.currentTime),
                                p = !1
                        }, 300))
                })
        }
    }(this.jQuery, this),
    function(t, e) {
        "use strict";
        function n() {
            var t = p.shift();
            return p.push(t),
                t
        }
        function i(n, i) {
            var o = t.Deferred();
            return new e.TuringType(n,i,{
                accuracy: 1,
                interval: 60,
                callback: o.resolve
            }),
                o
        }
        function o() {
            var r = n();
            l.text(""),
                c.text(""),
                u.text(""),
                d.text(""),
                s.attr("data-active", ""),
                t(".filters-box__progress", s).html(""),
                e.setTimeout(function() {
                    t(".filters-box__progress", s).html("<span></span>"),
                        e.setTimeout(function() {
                            t(".filters-box__progress span", s).addClass("active")
                        }, 10)
                }, 10),
                i(l[0], r.if_span).then(function() {
                    return i(c[0], r.if_strong)
                }).then(function() {
                    return r.active && s.attr("data-active", r.active),
                        i(u[0], r.then_span)
                }).then(function() {
                    return i(d[0], r.then_strong)
                }),
                a.push(e.setTimeout(o, 5e3))
        }
        function r() {
            a.forEach(function(t) {
                e.clearTimeout(t)
            })
        }
        var s = (e.App,
            t("[data-support-solution]"))
            , a = [];
        if (s.length) {
            var l = t('[data-type="if-1"]')
                , c = t('[data-type="if-2"]')
                , u = t('[data-type="then-1"]')
                , d = t('[data-type="then-2"]')
                , p = e.filtersToggleData || [];
            o(),
                t(e).focus(function() {
                    r(),
                        o()
                }),
                t(e).blur(function() {
                    r()
                })
        }
    }(this.jQuery, this),
    function(t, e) {
        "use strict";
        function n(o, r) {
            var s = t(o).find('[data-class-trigger="' + r + '"]');
            s.trigger("mouseenter.class"),
                s.length ? i = e.setTimeout(function() {
                    n(o, ++r)
                }, 2e3) : t(o).attr("data-class", "")
        }
        var i;
        t("[data-class-trigger]").each(function() {
            var n = t(this)
                , o = n.data("event") || "mouseenter";
            n.on(o + ".class", function(n) {
                n.preventDefault(),
                    e.clearTimeout(i);
                var o = t(this).data("classTrigger");
                t(this).closest("[data-class]").attr("data-class", o)
            })
        }),
            t('[data-class="0"]').each(function() {
                e.App.fn.inView(this, function(e) {
                    "0" === t(e).attr("data-class") && n(e, 1)
                }, "70%")
            })
    }(this.jQuery, this, this.document),
    function(t, e) {
        "use strict";
        t(".shopify__get-started").click(function() {
            var t = new Image(1,1);
            t.src = "//www.googleadservices.com/pagead/conversion/967943485/?label=i99GCILw720QvcrGzQM&guid=ON&script=0",
            e.IntercomGTM && e.IntercomGTM.recordGoogleImgPixel({
                ms_shopify_get_started_remarketing: "true",
                label: "ZZF5CI-50W0QvcrGzQM"
            })
        })
    }(this.jQuery, this, this.document),
    $(function() {
        "use strict";
        window.App.fn.popups = function() {
            $("[data-popup]").off("click.popup").on("click.popup", function(t) {
                t.preventDefault();
                var e = window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - 275
                    , n = window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - 250;
                window.open($(this).attr("href"), $(this).data("share"), "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=550, height=500, top=" + n + ", left=" + e)
            })
        }
            ,
            window.App.fn.popups(),
            window.App.fn.socialCount = function() {
                function t(t) {
                    return $.ajax({
                        url: t,
                        dataType: "jsonp",
                        timeout: 1500
                    })
                }
                $(".twitter[data-url]").each(function() {
                    var e = $(this);
                    t("https://cdn.api.twitter.com/1/urls/count.json?url=" + e.data("url")).done(function(t) {
                        e.text(t.count || 0)
                    }).fail(function() {
                        e.text("share")
                    })
                }),
                    $(".facebook[data-url]").each(function() {
                        var e = $(this);
                        t("https://graph.facebook.com/?id=" + e.data("url")).done(function(t) {
                            e.text(t.shares || 0)
                        }).fail(function() {
                            e.text("share")
                        })
                    })
            }
            ,
            window.App.fn.socialCount()
    }),
    function() {
        var t = $("[data-open-messenger]");
        t && $.map(t, function(t) {
            t.addEventListener("click", function() {
                Intercom("show")
            })
        })
    }(),
    function(t, e, n, i) {
        "use strict";
        function o(t, e) {
            return t.split(".").reduce(function(t, e) {
                return t ? t[e] : i
            }, e)
        }
        var r = e.App;
        r.tr = function(t) {
            return o(t, e.translations.locales[e.translations.locale]) || o(t, e.translations.locales[e.translations.defaultLocale])
        }
            ,
            r.localizeUrl = function(t) {
                return e.translations.defaultLocale === e.translations.locale ? t : "/" + e.translations.locale + t
            }
    }(this.jQuery, this, this.document),
    function(t, e, n) {
        var i = function() {};
        i.prototype.get_ga = function() {

        }
            ,
            i.prototype.get_inspectlet = function() {
                e.__insp = e.__insp || [],
                    __insp.push(["wid", 1340500707]),
                    function() {
                        function t() {
                            if ("undefined" == typeof e.__inspld) {
                                e.__inspld = 1;
                                var t = n.createElement("script");
                                t.type = "text/javascript",
                                    t.async = !0,
                                    t.id = "inspsync",
                                    t.src = ("https:" == n.location.protocol ? "https" : "http") + "://cdn.inspectlet.com/inspectlet.js";
                                var i = n.getElementsByTagName("script")[0];
                                i.parentNode.insertBefore(t, i)
                            }
                        }
                        setTimeout(t, 500),
                            "complete" != n.readyState ? e.attachEvent ? e.attachEvent("onload", t) : e.addEventListener("load", t, !1) : t()
                    }(),
                "undefined" != typeof Intercom && Intercom("onShow", function() {
                    __insp.push(["tagSession", "opened messenger"])
                })
            }
            ,
            i.prototype.get_fullstory = function() {
                /^\/(live-chat|pricing|respond|engage)/.test(n.location.pathname) && (e._fs_debug = !1,
                    e._fs_host = "fullstory.com",
                    e._fs_org = "R4ZV",
                    e._fs_namespace = "FS",
                    function(t, e, i, o, r, s, a, l) {
                        return i in t ? void (t.console && t.console.log && t.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].')) : (a = t[i] = function(t, e) {
                            a.q ? a.q.push([t, e]) : a._api(t, e)
                        }
                            ,
                            a.q = [],
                            s = e.createElement(o),
                            s.async = 1,
                            s.src = "https://" + _fs_host + "/s/fs.js",
                            l = e.getElementsByTagName(o)[0],
                            l.parentNode.insertBefore(s, l),
                            a.identify = function(t, e) {
                                a(r, {
                                    uid: t
                                }),
                                e && a(r, e)
                            }
                            ,
                            a.setUserVars = function(t) {
                                a(r, t)
                            }
                            ,
                            a.identifyAccount = function(t, e) {
                                s = "account",
                                    e = e || {},
                                    e.acctId = t,
                                    a(s, e)
                            }
                            ,
                            void (a.clearUserCookie = function(t, i, o) {
                                    if (!t || n.cookie.match("fs_uid=[`;`]*`[`;`]*`[`;`]*`"))
                                        for (i = e.domain; ; ) {
                                            if (e.cookie = "fs_uid=;domain=" + i + ";path=/;expires=" + new Date(0).toUTCString(),
                                                o = i.indexOf("."),
                                            0 > o)
                                                break;
                                            i = i.slice(o + 1)
                                        }
                                }
                            ))
                    }(e, n, e._fs_namespace, "script", "user"))
            }
            ,
            i.prototype.get_facebook_pixel = function() {
                !function(t, e, n, i, o, r, s) {
                    t.fbq || (o = t.fbq = function() {
                        o.callMethod ? o.callMethod.apply(o, arguments) : o.queue.push(arguments)
                    }
                        ,
                    t._fbq || (t._fbq = o),
                        o.push = o,
                        o.loaded = !0,
                        o.version = "2.0",
                        o.queue = [],
                        r = e.createElement(n),
                        r.async = !0,
                        r.src = i,
                        s = e.getElementsByTagName(n)[0],
                        s.parentNode.insertBefore(r, s))
                }(e, n, "script", "https://connect.facebook.net/en_US/fbevents.js"),
                    fbq("init", "938193196235407"),
                    fbq("trackCustom", "ms_page_view", {}),
                    fbq("track", "PageView", {})
            }
            ,
            i.prototype.get_adwords_pixel = function() {
                t.getScript("https://www.googletagmanager.com/gtag/js?id=AW-967943485", function() {
                    function t() {
                        dataLayer.push(arguments)
                    }
                    e.dataLayer = e.dataLayer || [],
                        t("js", new Date),
                        t("config", "AW-967943485"),
                        e.gtag = t
                })
            }
            ,
            i.prototype.get_bing_uet = function() {
                !function(t, e, n, i, o) {
                    var r, s, a;
                    t[o] = t[o] || [],
                        r = function() {
                            var e = {
                                ti: "5102953"
                            };
                            e.q = t[o],
                                t[o] = new UET(e),
                                t[o].push("pageLoad")
                        }
                        ,
                        s = e.createElement(n),
                        s.src = i,
                        s.async = 1,
                        s.onload = s.onreadystatechange = function() {
                            var t = this.readyState;
                            t && "loaded" !== t && "complete" !== t || (r(),
                                s.onload = s.onreadystatechange = null)
                        }
                        ,
                        a = e.getElementsByTagName(n)[0],
                        a.parentNode.insertBefore(s, a)
                }(e, n, "script", "//bat.bing.com/bat.js", "uetq")
            }
            ,
            i.prototype.load_clearbit_ga = function() {
                ga("require", "Clearbit", {
                    mapping: {
                        companyName: "dimension11",
                        companyEmployeesRange: "dimension12",
                        companyTags: "dimension13",
                        companyTech: "dimension14",
                        companySubIndustry: "dimension15",
                        companyIndustry: "dimension16",
                        companyIndustryGroup: "dimension17",
                        companySector: "dimension18",
                        companyType: "dimension19",
                        companyDomain: "dimension20"
                    }
                }),
                    function() {
                        var t = n.getElementsByTagName("script")[0]
                            , e = n.createElement("script");
                        e.type = "text/javascript",
                            e.async = !0,
                            e.src = "https://ga.clearbit.com/v1/ga.js?authorization=pk_281710c391d62b4da12e1a9adc3f3a72",
                            t.parentNode.insertBefore(e, t)
                    }()
            }
            ,
            i.prototype.load_heap = function() {
                e.heap = e.heap || [],
                    heap.load = function(t, i) {
                        e.heap.appid = t,
                            e.heap.config = i = i || {};
                        var o = i.forceSSL || "https:" === n.location.protocol
                            , r = n.createElement("script");
                        r.type = "text/javascript",
                            r.async = !0,
                            r.src = (o ? "https:" : "http:") + "//cdn.heapanalytics.com/js/heap-" + t + ".js";
                        var s = n.getElementsByTagName("script")[0];
                        s.parentNode.insertBefore(r, s);
                        for (var a = function(t) {
                            return function() {
                                heap.push([t].concat(Array.prototype.slice.call(arguments, 0)))
                            }
                        }, l = ["addEventProperties", "addUserProperties", "clearEventProperties", "identify", "removeEventProperty", "setEventProperties", "track", "unsetEventProperty"], c = 0; c < l.length; c++)
                            heap[l[c]] = a(l[c])
                    }
                    ,
                    heap.load(e.heap_secret)
            }
            ,
            i.prototype.load_linkedin = function() {
                _linkedin_data_partner_id = "38643",
                    function() {
                        var t = n.getElementsByTagName("script")[0]
                            , e = n.createElement("script");
                        e.type = "text/javascript",
                            e.async = !0,
                            e.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js",
                            t.parentNode.insertBefore(e, t)
                    }()
            }
            ,
            i.prototype.load_ethnio = function() {
                e.ethnio_script_src && !function() {
                    var t = n.getElementsByTagName("script")[0]
                        , i = n.createElement("script");
                    i.type = "text/javascript",
                        i.async = !0,
                        i.language = "javascript",
                        i.charset = "utf-8",
                        i.src = e.ethnio_script_src,
                        t.parentNode.insertBefore(i, t)
                }()
            }
            ,
            i.prototype.load_quora = function() {
                !function(t, e, i, o, r, s) {
                    t.qp || (o = t.qp = function() {
                        o.qp ? o.qp.apply(o, arguments) : o.queue.push(arguments)
                    }
                        ,
                        o.queue = [],
                        r = n.createElement(e),
                        r.async = !0,
                        r.src = i,
                        s = n.getElementsByTagName(e)[0],
                        s.parentNode.insertBefore(r, s))
                }(e, "script", "https://a.quora.com/qevents.js"),
                    qp("init", "7d891720ea074398a27c52613aa55b9d"),
                    qp("track", "ViewContent")
            }
            ,
            i.prototype.load_munchkin_marketo = function() {
                !function() {
                    function t() {
                        e === !1 && (e = !0,
                            Munchkin.init("258-CLW-344"))
                    }
                    var e = !1
                        , i = n.createElement("script");
                    i.type = "text/javascript",
                        i.async = !0,
                        i.src = "//munchkin.marketo.net/munchkin.js",
                        i.onreadystatechange = function() {
                            "complete" != this.readyState && "loaded" != this.readyState || t()
                        }
                        ,
                        i.onload = t,
                        n.getElementsByTagName("head")[0].appendChild(i)
                }()
            }
            ,
            i.prototype.load_hotjar_pixel = function() {
                !function(t, e, n, i, o, r) {
                    t.hj = t.hj || function() {
                        (t.hj.q = t.hj.q || []).push(arguments)
                    }
                        ,
                        t._hjSettings = {
                            hjid: 743117,
                            hjsv: 6
                        },
                        o = e.getElementsByTagName("head")[0],
                        (r = e.createElement("script")).async = 1,
                        r.src = "https://static.hotjar.com/c/hotjar-" + t._hjSettings.hjid + ".js?sv=" + t._hjSettings.hjsv,
                        o.appendChild(r)
                }(e, n)
            }
            ,
        e.App.environment.production && t(e).load(function() {
            var e = new i
                , n = t('[data-js~="open-sandbox-product-store"]').length < 1;
            e.get_ga(),
                e.get_inspectlet(),
                e.get_fullstory(),
                e.get_facebook_pixel(),
                e.get_adwords_pixel(),
                e.get_bing_uet(),
                e.load_clearbit_ga(),
                e.load_heap(),
                e.load_linkedin(),
                e.load_ethnio(),
                e.load_quora(),
                e.load_munchkin_marketo(),
            1 == t("body.allow-hotjar-load").length && n && e.load_hotjar_pixel()
        })
    }(this.jQuery, this, this.document),
    function(t, e) {
        "use strict";
        var n, i = e.App;
        if (i.settings.animationDelay = 200,
        0 !== t(".light__box-wrapper-slide").length) {
            var o = function() {
                s.featuresPopup();
                var e = t('[data-carousel="wrap"]').find(".browser.desktop__animation-item.u__hidden");
                e.removeClass("u__hidden")
            }
                , r = {
                openPopup: function(i) {
                    var o = i.closest("section").children('[data-popup="light-box-popup"]')
                        , s = i.data("slideTarget");
                    t.featherlight(o.html(), {
                        filter: null,
                        type: "html",
                        afterOpen: function() {
                            n = t(".featherlight"),
                                e.App.fn.animations(n),
                                r.goToSlide(s),
                                t(".featherlight-content").addClass("featherlight-content__wide"),
                                t("body").css("overflow", "hidden")
                        },
                        beforeClose: function() {
                            t("body").css("overflow", "visible")
                        }
                    })
                },
                goToSlide: function(e) {
                    var n = t(".featherlight-content");
                    t('.light__box-wrapper-slide[data-item="' + e + '"]', n).removeClass("u__hidden").addClass("active")
                }
            }
                , s = {
                featuresPopup: function() {
                    t('[data-event="open-popup"]').on("click", function(n) {
                        n.preventDefault(),
                            r.openPopup(t(this));
                        var i = t(this).find(".t__h6").text();
                        e.ga("send", "event", "feature-lightbox", "click", i)
                    })
                }
            };
            o()
        }
    }(this.jQuery, this, this.document);
//# sourceMappingURL=/assets/maps/application_sprockets_bundle-0b0718d4f939f3c61b8d834d6d2326082d2d731da7f78b11df7a8b0355ea712d.js.map
