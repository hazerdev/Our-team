/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */ ! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function(e) {
            return t.flat.call(e)
        } : function(e) {
            return t.concat.apply([], e)
        },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        x = function(e) {
            return null != e && e === e.window
        },
        E = C.document,
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.6.0",
        S = function(e, t) {
            return new S.fn.init(e, t)
        };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            j = function(e, t) {
                return e === t && (l = !0), 0
            },
            D = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                T()
            },
            ae = be(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                    }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[S] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
                var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : p;
                return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function(e) {
                    return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), d.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ce(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) {
                    return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
                }), d.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                    var t;
                    a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
                }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, j = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
                }), C
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    N(t, !0)
                }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) != C && T(e), y(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) != C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
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
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = m[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [k, s, d];
                                            break
                                        }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace($, "$1"));
                        return s[S] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function(n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function() {
                        return [0]
                    }),
                    last: ve(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ve(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) {
                    i = Te(p, u), v(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                    return e === i
                }, a, !0), l = be(function(e) {
                    return -1 < P(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace($, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = A[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
    var h = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        T = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        k = S.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return m(n) ? S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (S.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || D, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }).prototype = S.fn, D = S(E);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
        }
    }, function(r, i) {
        S.fn[r] = function(e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }), n) : S.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        S.each(e, function(e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return S.each(arguments, function(e, t) {
                        var n;
                        while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < S.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, S.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return S.Deferred(function(r) {
                            S.each(o, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return S.Deferred(function(e) {
                            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? S.extend(e, a) : a
                    }
                },
                s = {};
            return S.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, S.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    };
    var F = S.Deferred();

    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready()
    }
    S.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            S.readyException(e)
        }), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(S(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }), S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                Q.set(this, n)
            }) : $(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }), S.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                S.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function(e) {
            return S.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return S.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, S.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ue = {};

    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }
    var be = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function Te() {
        return !1
    }

    function Ce(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ee(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return S().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = S.guid++)), e.each(function() {
            S.event.add(this, t, i, r, n)
        })
    }

    function Se(e, i, o) {
        o ? (Y.set(e, i, !1), S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                } else r.length && (Y.set(this, i, {
                    value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, we)
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(P) || [""]).length;
                while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, S.Event = function(e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, S.event.addProp), S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        S.event.special[e] = {
            setup: function() {
                return Se(this, e, Ce), !1
            },
            trigger: function() {
                return Se(this, e), !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), S.fn.extend({
        on: function(e, t, n, r) {
            return Ee(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ee(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function() {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var ke = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function je(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
        }
    }

    function He(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o)
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : b(u.textContent.replace(Ne, ""), u, l))
        }
        return n
    }

    function Oe(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
                else Le(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), S.fn.extend({
        detach: function(e) {
            return Oe(this, e, !0)
        },
        remove: function(e) {
            return Oe(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return He(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return He(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return He(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        S.fn[e] = function(e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Re = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        Me = function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        Ie = new RegExp(ne.join("|"), "i");

    function We(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Fe(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"),
            l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a
            }
        }))
    }();
    var Be = ["Webkit", "Moz", "ms"],
        $e = E.createElement("div").style,
        _e = {};

    function ze(e) {
        var t = S.cssProps[e] || _e[e];
        return t || (e in $e ? e : _e[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = Be.length;
            while (n--)
                if ((e = Be[n] + t) in $e) return e
        }(e) || e)
    }
    var Ue = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ge = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ye(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Qe(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Je(e, t, n) {
        var r = Re(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = We(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function Ke(e, t, n, r, i) {
        return new Ke.prototype.init(e, t, n, r, i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = We(e, "opacity");
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
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t),
                    u = Xe.test(t),
                    l = e.style;
                if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), S.each(["height", "width"], function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function() {
                    return Je(e, u, n)
                })
            },
            set: function(e, t, n) {
                var r, i = Re(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    s = n ? Qe(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s)
            }
        }
    }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        S.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (S.cssHooks[i + o].set = Ye)
    }), S.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = Ke).prototype = {
        constructor: Ke,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ke.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ke.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this
        }
    }).init.prototype = Ke.prototype, (Ke.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ke.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = Ke.prototype.init, S.fx.step = {};
    var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/,
        it = /queueHooks$/;

    function ot() {
        et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick())
    }

    function at() {
        return C.setTimeout(function() {
            Ze = void 0
        }), Ze = Date.now()
    }

    function st(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ut(e, t, n) {
        for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function lt(o, e, t) {
        var n, a, r = 0,
            i = lt.prefilters.length,
            s = S.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ze || at(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    S.Animation = S.extend(lt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], rt.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                    display: l
                }), o && (v.hidden = !g), g && le([e], !0), p.done(function() {
                    for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
                })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
        }
    }), S.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
        }, r
    }, S.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t),
                o = S.speed(e, n, r),
                a = function() {
                    var e = lt(this, S.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = S.timers,
                    r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = S.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n)
        }
    }), S.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        S.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), S.timers = [], S.fx.tick = function() {
        var e, t = 0,
            n = S.timers;
        for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), Ze = void 0
    }, S.fx.timer = function(e) {
        S.timers.push(e), S.fx.start()
    }, S.fx.interval = 13, S.fx.start = function() {
        et || (et = !0, ot())
    }, S.fx.stop = function() {
        et = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value;
    var ct, ft = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), ct = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = ft[t] || S.find.attr;
        ft[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r
        }
    });
    var pt = /^(?:input|select|textarea|button)$/i,
        dt = /^(?:a|area)$/i;

    function ht(e) {
        return (e.match(P) || []).join(" ")
    }

    function gt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function vt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), y.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }), S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                S(this).addClass(t.call(this, e, gt(this)))
            });
            if ((e = vt(t)).length)
                while (n = this[u++])
                    if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                S(this).removeClass(t.call(this, e, gt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = vt(t)).length)
                while (n = this[u++])
                    if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                S(this).toggleClass(i.call(this, e, gt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0, n = S(this), r = vt(i);
                    while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var yt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : ht(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = S.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        }, y.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in C;
    var mt = /^(?:focusinfocus|focusoutblur)$/,
        xt = function(e) {
            e.stopPropagation()
        };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }), S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0)
        }
    }), y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var bt = C.location,
        wt = {
            guid: Date.now()
        },
        Tt = /\?/;
    S.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)), t
    };
    var Ct = /\[\]$/,
        Et = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        kt = /^(?:input|select|textarea|keygen)/i;

    function At(n, e, r, i) {
        var t;
        if (Array.isArray(e)) S.each(e, function(e, t) {
            r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) At(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) At(n, e[n], t, i);
        return r.join("&")
    }, S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Et, "\r\n")
                }
            }).get()
        }
    });
    var Nt = /%20/g,
        jt = /#.*$/,
        Dt = /([?&])_=[^&]*/,
        qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Lt = /^(?:GET|HEAD)$/,
        Ht = /^\/\//,
        Ot = {},
        Pt = {},
        Rt = "*/".concat("*"),
        Mt = E.createElement("a");

    function It(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Wt(t, i, o, a) {
        var s = {},
            u = t === Pt;

        function l(e) {
            var r;
            return s[e] = !0, S.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Ft(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e
    }
    Mt.href = bt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
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
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e)
        },
        ajaxPrefilter: It(Ot),
        ajaxTransport: It(Pt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                x = S.Deferred(),
                b = S.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = qt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (v.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {}), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function(e, i) {
        S[i] = function(e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }), S.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n)
            }
        })
    }, S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }), this
        }
    }), S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }, S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var Bt = {
            0: 200,
            1223: 204
        },
        $t = S.ajaxSettings.xhr();
    y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || $t && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), S.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = S("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var _t, zt = [],
        Ut = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = zt.pop() || S.expando + "_" + wt.guid++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || S.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
        var r, i, o
    }, S.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }, S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"),
                c = S(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, S.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                S.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position")) e = e.offsetParent;
                return e || re
            })
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function(e, n) {
        S.cssHooks[n] = Fe(y.pixelPosition, function(e, t) {
            if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t
        })
    }), S.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || S.guid++, i
    }, S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Xt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Vt = C.jQuery,
        Gt = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S
    }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});
! function($) {
    var defaults = {
        sectionContainer: "section",
        easing: "ease",
        animationTime: 1000,
        pagination: !0,
        updateURL: !1,
        keyboard: !0,
        beforeMove: null,
        afterMove: null,
        loop: !0,
        responsiveFallback: !1,
        direction: 'vertical'
    };
    $.fn.swipeEvents = function() {
        return this.each(function() {
            var startX, startY, $this = $(this);
            $this.bind('touchstart', touchstart);

            function touchstart(event) {
                var touches = event.originalEvent.touches;
                if (touches && touches.length) {
                    startX = touches[0].pageX;
                    startY = touches[0].pageY;
                    $this.bind('touchmove', touchmove)
                }
            }

            function touchmove(event) {
                var touches = event.originalEvent.touches;
                if (touches && touches.length) {
                    var deltaX = startX - touches[0].pageX;
                    var deltaY = startY - touches[0].pageY;
                    if (deltaX >= 50) {
                        $this.trigger("swipeLeft")
                    }
                    if (deltaX <= -50) {
                        $this.trigger("swipeRight")
                    }
                    if (deltaY >= 50) {
                        $this.trigger("swipeUp")
                    }
                    if (deltaY <= -50) {
                        $this.trigger("swipeDown")
                    }
                    if (Math.abs(deltaX) >= 50 || Math.abs(deltaY) >= 50) {
                        $this.unbind('touchmove', touchmove)
                    }
                }
            }
        })
    };
    $.fn.onepage_scroll = function(options) {
        var settings = $.extend({}, defaults, options),
            el = $(this),
            sections = $(settings.sectionContainer)
        total = sections.length, status = "off", topPos = 0, leftPos = 0, lastAnimation = 0, quietPeriod = 500, paginationList = "";
        $.fn.transformPage = function(settings, pos, index) {
            if (typeof settings.beforeMove == 'function') settings.beforeMove(index);
            if ($('html').hasClass('ie8')) {
                if (settings.direction == 'horizontal') {
                    var toppos = (el.width() / 100) * pos;
                    $(this).animate({
                        left: toppos + 'px'
                    }, settings.animationTime)
                } else {
                    var toppos = (el.height() / 100) * pos;
                    $(this).animate({
                        top: toppos + 'px'
                    }, settings.animationTime)
                }
            } else {
                $(this).css({
                    "-webkit-transform": (settings.direction == 'horizontal') ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
                    "-webkit-transition": "all " + settings.animationTime + "ms " + settings.easing,
                    "-moz-transform": (settings.direction == 'horizontal') ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
                    "-moz-transition": "all " + settings.animationTime + "ms " + settings.easing,
                    "-ms-transform": (settings.direction == 'horizontal') ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
                    "-ms-transition": "all " + settings.animationTime + "ms " + settings.easing,
                    "transform": (settings.direction == 'horizontal') ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
                    "transition": "all " + settings.animationTime + "ms " + settings.easing
                })
            }
            $(this).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
                if (typeof settings.afterMove == 'function') settings.afterMove(index)
            })
        }
        $.fn.moveDown = function() {
            var el = $(this)
            index = $(settings.sectionContainer + ".active").data("index");
            current = $(settings.sectionContainer + "[data-index='" + index + "']");
            next = $(settings.sectionContainer + "[data-index='" + (index + 1) + "']");
            if (next.length < 1) {
                if (settings.loop == !0) {
                    pos = 0;
                    next = $(settings.sectionContainer + "[data-index='1']")
                } else {
                    return
                }
            } else {
                pos = (index * 100) * -1
            }
            if (typeof settings.beforeMove == 'function') settings.beforeMove(next.data("index"));
            current.removeClass("active")
            next.addClass("active");
            if (settings.pagination == !0) {
                $(".onepage-pagination li a" + "[data-index='" + index + "']").removeClass("active");
                $(".onepage-pagination li a" + "[data-index='" + next.data("index") + "']").addClass("active")
            }
            $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, '');
            $("body").addClass("viewing-page-" + next.data("index"))
            if (history.replaceState && settings.updateURL == !0) {
                var href = window.location.href.substr(0, window.location.href.indexOf('#')) + "#" + (index + 1);
                history.pushState({}, document.title, href)
            }
            el.transformPage(settings, pos, next.data("index"))
        }
        $.fn.moveUp = function() {
            var el = $(this)
            index = $(settings.sectionContainer + ".active").data("index");
            current = $(settings.sectionContainer + "[data-index='" + index + "']");
            next = $(settings.sectionContainer + "[data-index='" + (index - 1) + "']");
            if (next.length < 1) {
                if (settings.loop == !0) {
                    pos = ((total - 1) * 100) * -1;
                    next = $(settings.sectionContainer + "[data-index='" + total + "']")
                } else {
                    return
                }
            } else {
                pos = ((next.data("index") - 1) * 100) * -1
            }
            if (typeof settings.beforeMove == 'function') settings.beforeMove(next.data("index"));
            current.removeClass("active")
            next.addClass("active")
            if (settings.pagination == !0) {
                $(".onepage-pagination li a" + "[data-index='" + index + "']").removeClass("active");
                $(".onepage-pagination li a" + "[data-index='" + next.data("index") + "']").addClass("active")
            }
            $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, '');
            $("body").addClass("viewing-page-" + next.data("index"))
            if (history.replaceState && settings.updateURL == !0) {
                var href = window.location.href.substr(0, window.location.href.indexOf('#')) + "#" + (index - 1);
                history.pushState({}, document.title, href)
            }
            el.transformPage(settings, pos, next.data("index"))
        }
        $.fn.moveTo = function(page_index) {
            current = $(settings.sectionContainer + ".active")
            next = $(settings.sectionContainer + "[data-index='" + (page_index) + "']");
            if (next.length > 0) {
                if (typeof settings.beforeMove == 'function') settings.beforeMove(next.data("index"));
                current.removeClass("active")
                next.addClass("active")
                $(".onepage-pagination li a" + ".active").removeClass("active");
                $(".onepage-pagination li a" + "[data-index='" + (page_index) + "']").addClass("active");
                $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, '');
                $("body").addClass("viewing-page-" + next.data("index"))
                pos = ((page_index - 1) * 100) * -1;
                if (history.replaceState && settings.updateURL == !0) {
                    var href = window.location.href.substr(0, window.location.href.indexOf('#')) + "#" + (page_index - 1);
                    history.pushState({}, document.title, href)
                }
                el.transformPage(settings, pos, page_index)
            }
        }

        function responsive() {
            var valForTest = !1;
            var typeOfRF = typeof settings.responsiveFallback
            if (typeOfRF == "number") {
                valForTest = $(window).width() < settings.responsiveFallback
            }
            if (typeOfRF == "boolean") {
                valForTest = settings.responsiveFallback
            }
            if (typeOfRF == "function") {
                valFunction = settings.responsiveFallback();
                valForTest = valFunction;
                typeOFv = typeof valForTest;
                if (typeOFv == "number") {
                    valForTest = $(window).width() < valFunction
                }
            }
            if (valForTest) {
                $("body").addClass("disabled-onepage-scroll");
                $(document).unbind('mousewheel DOMMouseScroll MozMousePixelScroll');
                el.swipeEvents().unbind("swipeDown swipeUp")
            } else {
                if ($("body").hasClass("disabled-onepage-scroll")) {
                    $("body").removeClass("disabled-onepage-scroll");
                    $("html, body, .wrapper").animate({
                        scrollTop: 0
                    }, "fast")
                }
                el.swipeEvents().bind("swipeDown", function(event) {
                    if (!$("body").hasClass("disabled-onepage-scroll")) event.preventDefault();
                    el.moveUp()
                }).bind("swipeUp", function(event) {
                    if (!$("body").hasClass("disabled-onepage-scroll")) event.preventDefault();
                    el.moveDown()
                });
                $(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
                    var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
                    init_scroll(event, delta)
                })
            }
        }

        function init_scroll(event, delta) {
            deltaOfInterest = delta;
            var timeNow = new Date().getTime();
            if (timeNow - lastAnimation < quietPeriod + settings.animationTime) {
                return
            }
            if (deltaOfInterest < 0) {
                el.moveDown()
            } else {
                el.moveUp()
            }
            lastAnimation = timeNow
        }
        el.addClass("onepage-wrapper").css("position", "relative");
        $.each(sections, function(i) {
            $(this).css({
                position: "absolute",
                top: topPos + "%"
            }).addClass("section").attr("data-index", i + 1);
            $(this).css({
                position: "absolute",
                left: (settings.direction == 'horizontal') ? leftPos + "%" : 0,
                top: (settings.direction == 'vertical' || settings.direction != 'horizontal') ? topPos + "%" : 0
            });
            if (settings.direction == 'horizontal')
                leftPos = leftPos + 100;
            else topPos = topPos + 100;
            if (settings.pagination == !0) {
                paginationList += "<li><a data-index='" + (i + 1) + "' href='#" + (i + 1) + "'></a></li>"
            }
        });
        el.swipeEvents().bind("swipeDown", function(event) {
            if (!$("body").hasClass("disabled-onepage-scroll")) event.preventDefault();
            el.moveUp()
        }).bind("swipeUp", function(event) {
            if (!$("body").hasClass("disabled-onepage-scroll")) event.preventDefault();
            el.moveDown()
        });
        if (settings.pagination == !0) {
            if ($('ul.onepage-pagination').length < 1) $("<ul class='onepage-pagination'></ul>").prependTo("body");
            if (settings.direction == 'horizontal') {
                posLeft = (el.find(".onepage-pagination").width() / 2) * -1;
                el.find(".onepage-pagination").css("margin-left", posLeft)
            } else {
                posTop = (el.find(".onepage-pagination").height() / 2) * -1;
                el.find(".onepage-pagination").css("margin-top", posTop)
            }
            $('ul.onepage-pagination').html(paginationList)
        }
        if (window.location.hash != "" && window.location.hash != "#1") {
            init_index = window.location.hash.replace("#", "")
            if (parseInt(init_index) <= total && parseInt(init_index) > 0) {
                $(settings.sectionContainer + "[data-index='" + init_index + "']").addClass("active")
                $("body").addClass("viewing-page-" + init_index)
                if (settings.pagination == !0) $(".onepage-pagination li a" + "[data-index='" + init_index + "']").addClass("active");
                next = $(settings.sectionContainer + "[data-index='" + (init_index) + "']");
                if (next) {
                    next.addClass("active")
                    if (settings.pagination == !0) $(".onepage-pagination li a" + "[data-index='" + (init_index) + "']").addClass("active");
                    $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, '');
                    $("body").addClass("viewing-page-" + next.data("index"))
                    if (history.replaceState && settings.updateURL == !0) {
                        var href = window.location.href.substr(0, window.location.href.indexOf('#')) + "#" + (init_index);
                        history.pushState({}, document.title, href)
                    }
                }
                pos = ((init_index - 1) * 100) * -1;
                el.transformPage(settings, pos, init_index)
            } else {
                $(settings.sectionContainer + "[data-index='1']").addClass("active")
                $("body").addClass("viewing-page-1")
                if (settings.pagination == !0) $(".onepage-pagination li a" + "[data-index='1']").addClass("active")
            }
        } else {
            $(settings.sectionContainer + "[data-index='1']").addClass("active")
            $("body").addClass("viewing-page-1")
            if (settings.pagination == !0) $(".onepage-pagination li a" + "[data-index='1']").addClass("active")
        }
        if (settings.pagination == !0) {
            $(".onepage-pagination li a").click(function() {
                var page_index = $(this).data("index");
                el.moveTo(page_index)
            })
        }
        $(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
            var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
            if (!$("body").hasClass("disabled-onepage-scroll")) init_scroll(event, delta)
        });
        if (settings.responsiveFallback != !1) {
            $(window).resize(function() {
                responsive()
            });
            responsive()
        }
        if (settings.keyboard == !0) {
            $(document).keydown(function(e) {
                var tag = e.target.tagName.toLowerCase();
                if (!$("body").hasClass("disabled-onepage-scroll")) {
                    switch (e.which) {
                        case 38:
                            if (tag != 'input' && tag != 'textarea') el.moveUp()
                            break;
                        case 40:
                            if (tag != 'input' && tag != 'textarea') el.moveDown()
                            break;
                        case 32:
                            if (tag != 'input' && tag != 'textarea') el.moveDown()
                            break;
                        case 33:
                            if (tag != 'input' && tag != 'textarea') el.moveUp()
                            break;
                        case 34:
                            if (tag != 'input' && tag != 'textarea') el.moveDown()
                            break;
                        case 36:
                            el.moveTo(1);
                            break;
                        case 35:
                            el.moveTo(total);
                            break;
                        default:
                            return
                    }
                }
            })
        }
        return !1
    }
}(window.jQuery);
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory)
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'))
    } else {
        factory(jQuery)
    }
}(function(jQuery) {
    "use strict";
    var domfocus = !1,
        mousefocus = !1,
        tabindexcounter = 0,
        ascrailcounter = 2000,
        globalmaxzindex = 0;
    var $ = jQuery,
        _doc = document,
        _win = window,
        $window = $(_win);
    var delegatevents = [];

    function getScriptPath() {
        var scripts = _doc.currentScript || (function() {
            var s = _doc.getElementsByTagName('script');
            return (s.length) ? s[s.length - 1] : !1
        })();
        var path = scripts ? scripts.src.split('?')[0] : '';
        return (path.split('/').length > 0) ? path.split('/').slice(0, -1).join('/') + '/' : ''
    }
    var setAnimationFrame = _win.requestAnimationFrame || _win.webkitRequestAnimationFrame || _win.mozRequestAnimationFrame || !1;
    var clearAnimationFrame = _win.cancelAnimationFrame || _win.webkitCancelAnimationFrame || _win.mozCancelAnimationFrame || !1;
    if (!setAnimationFrame) {
        var anilasttime = 0;
        setAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - anilasttime));
            var id = _win.setTimeout(function() {
                callback(currTime + timeToCall)
            }, timeToCall);
            anilasttime = currTime + timeToCall;
            return id
        };
        clearAnimationFrame = function(id) {
            _win.clearTimeout(id)
        }
    } else {
        if (!_win.cancelAnimationFrame) clearAnimationFrame = function(id) {}
    }
    var ClsMutationObserver = _win.MutationObserver || _win.WebKitMutationObserver || !1;
    var now = Date.now || function() {
        return new Date().getTime()
    };
    var _globaloptions = {
        zindex: "auto",
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        cursorcolor: "#424242",
        cursorwidth: "6px",
        cursorborder: "1px solid #fff",
        cursorborderradius: "5px",
        scrollspeed: 40,
        mousescrollstep: 9 * 3,
        touchbehavior: !1,
        emulatetouch: !1,
        hwacceleration: !0,
        usetransition: !0,
        boxzoom: !1,
        dblclickzoom: !0,
        gesturezoom: !0,
        grabcursorenabled: !0,
        autohidemode: !0,
        background: "",
        iframeautoresize: !0,
        cursorminheight: 32,
        preservenativescrolling: !0,
        railoffset: !1,
        railhoffset: !1,
        bouncescroll: !0,
        spacebarenabled: !0,
        railpadding: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
        },
        disableoutline: !0,
        horizrailenabled: !0,
        railalign: "right",
        railvalign: "bottom",
        enabletranslate3d: !0,
        enablemousewheel: !0,
        enablekeyboard: !0,
        smoothscroll: !0,
        sensitiverail: !0,
        enablemouselockapi: !0,
        cursorfixedheight: !1,
        directionlockdeadzone: 6,
        hidecursordelay: 400,
        nativeparentscrolling: !0,
        enablescrollonselection: !0,
        overflowx: !0,
        overflowy: !0,
        cursordragspeed: 0.3,
        rtlmode: "auto",
        cursordragontouch: !1,
        oneaxismousemode: "auto",
        scriptpath: getScriptPath(),
        preventmultitouchscrolling: !0,
        disablemutationobserver: !1,
        enableobserver: !0,
        scrollbarid: !1,
        scrollCLass: !1
    };
    var browserdetected = !1;
    var getBrowserDetection = function() {
        if (browserdetected) return browserdetected;
        var _el = _doc.createElement('DIV'),
            _style = _el.style,
            _agent = navigator.userAgent,
            _platform = navigator.platform,
            d = {};
        d.haspointerlock = "pointerLockElement" in _doc || "webkitPointerLockElement" in _doc || "mozPointerLockElement" in _doc;
        d.isopera = ("opera" in _win);
        d.isopera12 = (d.isopera && ("getUserMedia" in navigator));
        d.isoperamini = (Object.prototype.toString.call(_win.operamini) === "[object OperaMini]");
        d.isie = (("all" in _doc) && ("attachEvent" in _el) && !d.isopera);
        d.isieold = (d.isie && !("msInterpolationMode" in _style));
        d.isie7 = d.isie && !d.isieold && (!("documentMode" in _doc) || (_doc.documentMode === 7));
        d.isie8 = d.isie && ("documentMode" in _doc) && (_doc.documentMode === 8);
        d.isie9 = d.isie && ("performance" in _win) && (_doc.documentMode === 9);
        d.isie10 = d.isie && ("performance" in _win) && (_doc.documentMode === 10);
        d.isie11 = ("msRequestFullscreen" in _el) && (_doc.documentMode >= 11);
        d.ismsedge = ("msCredentials" in _win);
        d.ismozilla = ("MozAppearance" in _style);
        d.iswebkit = !d.ismsedge && ("WebkitAppearance" in _style);
        d.ischrome = d.iswebkit && ("chrome" in _win);
        d.ischrome38 = (d.ischrome && ("touchAction" in _style));
        d.ischrome22 = (!d.ischrome38) && (d.ischrome && d.haspointerlock);
        d.ischrome26 = (!d.ischrome38) && (d.ischrome && ("transition" in _style));
        d.cantouch = ("ontouchstart" in _doc.documentElement) || ("ontouchstart" in _win);
        d.hasw3ctouch = (_win.PointerEvent || !1) && ((navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
        d.hasmstouch = (!d.hasw3ctouch) && (_win.MSPointerEvent || !1);
        d.ismac = /^mac$/i.test(_platform);
        d.isios = d.cantouch && /iphone|ipad|ipod/i.test(_platform);
        d.isios4 = d.isios && !("seal" in Object);
        d.isios7 = d.isios && ("webkitHidden" in _doc);
        d.isios8 = d.isios && ("hidden" in _doc);
        d.isios10 = d.isios && _win.Proxy;
        d.isandroid = (/android/i.test(_agent));
        d.haseventlistener = ("addEventListener" in _el);
        d.trstyle = !1;
        d.hastransform = !1;
        d.hastranslate3d = !1;
        d.transitionstyle = !1;
        d.hastransition = !1;
        d.transitionend = !1;
        d.trstyle = "transform";
        d.hastransform = ("transform" in _style) || (function() {
            var check = ['msTransform', 'webkitTransform', 'MozTransform', 'OTransform'];
            for (var a = 0, c = check.length; a < c; a++) {
                if (_style[check[a]] !== undefined) {
                    d.trstyle = check[a];
                    break
                }
            }
            d.hastransform = (!!d.trstyle)
        })();
        if (d.hastransform) {
            _style[d.trstyle] = "translate3d(1px,2px,3px)";
            d.hastranslate3d = /translate3d/.test(_style[d.trstyle])
        }
        d.transitionstyle = "transition";
        d.prefixstyle = '';
        d.transitionend = "transitionend";
        d.hastransition = ("transition" in _style) || (function() {
            d.transitionend = !1;
            var check = ['webkitTransition', 'msTransition', 'MozTransition', 'OTransition', 'OTransition', 'KhtmlTransition'];
            var prefix = ['-webkit-', '-ms-', '-moz-', '-o-', '-o', '-khtml-'];
            var evs = ['webkitTransitionEnd', 'msTransitionEnd', 'transitionend', 'otransitionend', 'oTransitionEnd', 'KhtmlTransitionEnd'];
            for (var a = 0, c = check.length; a < c; a++) {
                if (check[a] in _style) {
                    d.transitionstyle = check[a];
                    d.prefixstyle = prefix[a];
                    d.transitionend = evs[a];
                    break
                }
            }
            if (d.ischrome26) d.prefixstyle = prefix[1];
            d.hastransition = (d.transitionstyle)
        })();

        function detectCursorGrab() {
            var lst = ['grab', '-webkit-grab', '-moz-grab'];
            if ((d.ischrome && !d.ischrome38) || d.isie) lst = [];
            for (var a = 0, l = lst.length; a < l; a++) {
                var p = lst[a];
                _style.cursor = p;
                if (_style.cursor == p) return p
            }
            return 'url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize'
        }
        d.cursorgrabvalue = detectCursorGrab();
        d.hasmousecapture = ("setCapture" in _el);
        d.hasMutationObserver = (ClsMutationObserver !== !1);
        _el = null;
        browserdetected = d;
        return d
    };
    var NiceScrollClass = function(myopt, me) {
        var self = this;
        this.version = '3.7.6';
        this.name = 'nicescroll';
        this.me = me;
        var $body = $("body");
        var opt = this.opt = {
            doc: $body,
            win: !1
        };
        $.extend(opt, _globaloptions);
        opt.snapbackspeed = 80;
        if (myopt || !1) {
            for (var a in opt) {
                if (myopt[a] !== undefined) opt[a] = myopt[a]
            }
        }
        if (opt.disablemutationobserver) ClsMutationObserver = !1;
        this.doc = opt.doc;
        this.iddoc = (this.doc && this.doc[0]) ? this.doc[0].id || '' : '';
        this.ispage = /^BODY|HTML/.test((opt.win) ? opt.win[0].nodeName : this.doc[0].nodeName);
        this.haswrapper = (opt.win !== !1);
        this.win = opt.win || (this.ispage ? $window : this.doc);
        this.docscroll = (this.ispage && !this.haswrapper) ? $window : this.win;
        this.body = $body;
        this.viewport = !1;
        this.isfixed = !1;
        this.iframe = !1;
        this.isiframe = ((this.doc[0].nodeName == 'IFRAME') && (this.win[0].nodeName == 'IFRAME'));
        this.istextarea = (this.win[0].nodeName == 'TEXTAREA');
        this.forcescreen = !1;
        this.canshowonmouseevent = (opt.autohidemode != "scroll");
        this.onmousedown = !1;
        this.onmouseup = !1;
        this.onmousemove = !1;
        this.onmousewheel = !1;
        this.onkeypress = !1;
        this.ongesturezoom = !1;
        this.onclick = !1;
        this.onscrollstart = !1;
        this.onscrollend = !1;
        this.onscrollcancel = !1;
        this.onzoomin = !1;
        this.onzoomout = !1;
        this.view = !1;
        this.page = !1;
        this.scroll = {
            x: 0,
            y: 0
        };
        this.scrollratio = {
            x: 0,
            y: 0
        };
        this.cursorheight = 20;
        this.scrollvaluemax = 0;
        if (opt.rtlmode == "auto") {
            var target = this.win[0] == _win ? this.body : this.win;
            var writingMode = target.css("writing-mode") || target.css("-webkit-writing-mode") || target.css("-ms-writing-mode") || target.css("-moz-writing-mode");
            if (writingMode == "horizontal-tb" || writingMode == "lr-tb" || writingMode === "") {
                this.isrtlmode = (target.css("direction") == "rtl");
                this.isvertical = !1
            } else {
                this.isrtlmode = (writingMode == "vertical-rl" || writingMode == "tb" || writingMode == "tb-rl" || writingMode == "rl-tb");
                this.isvertical = (writingMode == "vertical-rl" || writingMode == "tb" || writingMode == "tb-rl")
            }
        } else {
            this.isrtlmode = (opt.rtlmode === !0);
            this.isvertical = !1
        }
        this.scrollrunning = !1;
        this.scrollmom = !1;
        this.observer = !1;
        this.observerremover = !1;
        this.observerbody = !1;
        if (opt.scrollbarid !== !1) {
            this.id = opt.scrollbarid
        } else {
            do {
                this.id = "ascrail" + (ascrailcounter++)
            } while (_doc.getElementById(this.id));
        }
        this.rail = !1;
        this.cursor = !1;
        this.cursorfreezed = !1;
        this.selectiondrag = !1;
        this.zoom = !1;
        this.zoomactive = !1;
        this.hasfocus = !1;
        this.hasmousefocus = !1;
        this.railslocked = !1;
        this.locked = !1;
        this.hidden = !1;
        this.cursoractive = !0;
        this.wheelprevented = !1;
        this.overflowx = opt.overflowx;
        this.overflowy = opt.overflowy;
        this.nativescrollingarea = !1;
        this.checkarea = 0;
        this.events = [];
        this.saved = {};
        this.delaylist = {};
        this.synclist = {};
        this.lastdeltax = 0;
        this.lastdeltay = 0;
        this.detected = getBrowserDetection();
        var cap = $.extend({}, this.detected);
        this.canhwscroll = (cap.hastransform && opt.hwacceleration);
        this.ishwscroll = (this.canhwscroll && self.haswrapper);
        if (!this.isrtlmode) {
            this.hasreversehr = !1
        } else if (this.isvertical) {
            this.hasreversehr = !(cap.iswebkit || cap.isie || cap.isie11)
        } else {
            this.hasreversehr = !(cap.iswebkit || (cap.isie && !cap.isie10 && !cap.isie11))
        }
        this.istouchcapable = !1;
        if (!cap.cantouch && (cap.hasw3ctouch || cap.hasmstouch)) {
            this.istouchcapable = !0
        } else if (cap.cantouch && !cap.isios && !cap.isandroid && (cap.iswebkit || cap.ismozilla)) {
            this.istouchcapable = !0
        }
        if (!opt.enablemouselockapi) {
            cap.hasmousecapture = !1;
            cap.haspointerlock = !1
        }
        this.debounced = function(name, fn, tm) {
            if (!self) return;
            var dd = self.delaylist[name] || !1;
            if (!dd) {
                self.delaylist[name] = {
                    h: setAnimationFrame(function() {
                        self.delaylist[name].fn.call(self);
                        self.delaylist[name] = !1
                    }, tm)
                };
                fn.call(self)
            }
            self.delaylist[name].fn = fn
        };
        this.synched = function(name, fn) {
            if (self.synclist[name]) self.synclist[name] = fn;
            else {
                self.synclist[name] = fn;
                setAnimationFrame(function() {
                    if (!self) return;
                    self.synclist[name] && self.synclist[name].call(self);
                    self.synclist[name] = null
                })
            }
        };
        this.unsynched = function(name) {
            if (self.synclist[name]) self.synclist[name] = !1
        };
        this.css = function(el, pars) {
            for (var n in pars) {
                self.saved.css.push([el, n, el.css(n)]);
                el.css(n, pars[n])
            }
        };
        this.scrollTop = function(val) {
            return (val === undefined) ? self.getScrollTop() : self.setScrollTop(val)
        };
        this.scrollLeft = function(val) {
            return (val === undefined) ? self.getScrollLeft() : self.setScrollLeft(val)
        };
        var BezierClass = function(st, ed, spd, p1, p2, p3, p4) {
            this.st = st;
            this.ed = ed;
            this.spd = spd;
            this.p1 = p1 || 0;
            this.p2 = p2 || 1;
            this.p3 = p3 || 0;
            this.p4 = p4 || 1;
            this.ts = now();
            this.df = ed - st
        };
        BezierClass.prototype = {
            B2: function(t) {
                return 3 * (1 - t) * (1 - t) * t
            },
            B3: function(t) {
                return 3 * (1 - t) * t * t
            },
            B4: function(t) {
                return t * t * t
            },
            getPos: function() {
                return (now() - this.ts) / this.spd
            },
            getNow: function() {
                var pc = (now() - this.ts) / this.spd;
                var bz = this.B2(pc) + this.B3(pc) + this.B4(pc);
                return (pc >= 1) ? this.ed : this.st + (this.df * bz) | 0
            },
            update: function(ed, spd) {
                this.st = this.getNow();
                this.ed = ed;
                this.spd = spd;
                this.ts = now();
                this.df = this.ed - this.st;
                return this
            }
        };

        function getMatrixValues() {
            var tr = self.doc.css(cap.trstyle);
            if (tr && (tr.substr(0, 6) == "matrix")) {
                return tr.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, '').split(/, +/)
            }
            return !1
        }
        if (this.ishwscroll) {
            this.doc.translate = {
                x: 0,
                y: 0,
                tx: "0px",
                ty: "0px"
            };
            if (cap.hastranslate3d && cap.isios) this.doc.css("-webkit-backface-visibility", "hidden");
            this.getScrollTop = function(last) {
                if (!last) {
                    var mtx = getMatrixValues();
                    if (mtx) return (mtx.length == 16) ? -mtx[13] : -mtx[5];
                    if (self.timerscroll && self.timerscroll.bz) return self.timerscroll.bz.getNow()
                }
                return self.doc.translate.y
            };
            this.getScrollLeft = function(last) {
                if (!last) {
                    var mtx = getMatrixValues();
                    if (mtx) return (mtx.length == 16) ? -mtx[12] : -mtx[4];
                    if (self.timerscroll && self.timerscroll.bh) return self.timerscroll.bh.getNow()
                }
                return self.doc.translate.x
            };
            this.notifyScrollEvent = function(el) {
                var e = _doc.createEvent("UIEvents");
                e.initUIEvent("scroll", !1, !1, _win, 1);
                e.niceevent = !0;
                el.dispatchEvent(e)
            };
            var cxscrollleft = (this.isrtlmode) ? 1 : -1;
            if (cap.hastranslate3d && opt.enabletranslate3d) {
                this.setScrollTop = function(val, silent) {
                    self.doc.translate.y = val;
                    self.doc.translate.ty = (val * -1) + "px";
                    self.doc.css(cap.trstyle, "translate3d(" + self.doc.translate.tx + "," + self.doc.translate.ty + ",0)");
                    if (!silent) self.notifyScrollEvent(self.win[0])
                };
                this.setScrollLeft = function(val, silent) {
                    self.doc.translate.x = val;
                    self.doc.translate.tx = (val * cxscrollleft) + "px";
                    self.doc.css(cap.trstyle, "translate3d(" + self.doc.translate.tx + "," + self.doc.translate.ty + ",0)");
                    if (!silent) self.notifyScrollEvent(self.win[0])
                }
            } else {
                this.setScrollTop = function(val, silent) {
                    self.doc.translate.y = val;
                    self.doc.translate.ty = (val * -1) + "px";
                    self.doc.css(cap.trstyle, "translate(" + self.doc.translate.tx + "," + self.doc.translate.ty + ")");
                    if (!silent) self.notifyScrollEvent(self.win[0])
                };
                this.setScrollLeft = function(val, silent) {
                    self.doc.translate.x = val;
                    self.doc.translate.tx = (val * cxscrollleft) + "px";
                    self.doc.css(cap.trstyle, "translate(" + self.doc.translate.tx + "," + self.doc.translate.ty + ")");
                    if (!silent) self.notifyScrollEvent(self.win[0])
                }
            }
        } else {
            this.getScrollTop = function() {
                return self.docscroll.scrollTop()
            };
            this.setScrollTop = function(val) {
                self.docscroll.scrollTop(val)
            };
            this.getScrollLeft = function() {
                var val;
                if (!self.hasreversehr) {
                    val = self.docscroll.scrollLeft()
                } else if (self.detected.ismozilla) {
                    val = self.page.maxw - Math.abs(self.docscroll.scrollLeft())
                } else {
                    val = self.page.maxw - self.docscroll.scrollLeft()
                }
                return val
            };
            this.setScrollLeft = function(val) {
                return setTimeout(function() {
                    if (!self) return;
                    if (self.hasreversehr) {
                        if (self.detected.ismozilla) {
                            val = -(self.page.maxw - val)
                        } else {
                            val = self.page.maxw - val
                        }
                    }
                    return self.docscroll.scrollLeft(val)
                }, 1)
            }
        }
        this.getTarget = function(e) {
            if (!e) return !1;
            if (e.target) return e.target;
            if (e.srcElement) return e.srcElement;
            return !1
        };
        this.hasParent = function(e, id) {
            if (!e) return !1;
            var el = e.target || e.srcElement || e || !1;
            while (el && el.id != id) {
                el = el.parentNode || !1
            }
            return (el !== !1)
        };

        function getZIndex() {
            var dom = self.win;
            if ("zIndex" in dom) return dom.zIndex();
            while (dom.length > 0) {
                if (dom[0].nodeType == 9) return !1;
                var zi = dom.css('zIndex');
                if (!isNaN(zi) && zi !== 0) return parseInt(zi);
                dom = dom.parent()
            }
            return !1
        }
        var _convertBorderWidth = {
            "thin": 1,
            "medium": 3,
            "thick": 5
        };

        function getWidthToPixel(dom, prop, chkheight) {
            var wd = dom.css(prop);
            var px = parseFloat(wd);
            if (isNaN(px)) {
                px = _convertBorderWidth[wd] || 0;
                var brd = (px == 3) ? ((chkheight) ? (self.win.outerHeight() - self.win.innerHeight()) : (self.win.outerWidth() - self.win.innerWidth())) : 1;
                if (self.isie8 && px) px += 1;
                return (brd) ? px : 0
            }
            return px
        }
        this.getDocumentScrollOffset = function() {
            return {
                top: _win.pageYOffset || _doc.documentElement.scrollTop,
                left: _win.pageXOffset || _doc.documentElement.scrollLeft
            }
        };
        this.getOffset = function() {
            if (self.isfixed) {
                var ofs = self.win.offset();
                var scrl = self.getDocumentScrollOffset();
                ofs.top -= scrl.top;
                ofs.left -= scrl.left;
                return ofs
            }
            var ww = self.win.offset();
            if (!self.viewport) return ww;
            var vp = self.viewport.offset();
            return {
                top: ww.top - vp.top,
                left: ww.left - vp.left
            }
        };
        this.updateScrollBar = function(len) {
            var pos, off;
            if (self.ishwscroll) {
                self.rail.css({
                    height: self.win.innerHeight() - (opt.railpadding.top + opt.railpadding.bottom)
                });
                if (self.railh) self.railh.css({
                    width: self.win.innerWidth() - (opt.railpadding.left + opt.railpadding.right)
                })
            } else {
                var wpos = self.getOffset();
                pos = {
                    top: wpos.top,
                    left: wpos.left - (opt.railpadding.left + opt.railpadding.right)
                };
                pos.top += getWidthToPixel(self.win, 'border-top-width', !0);
                pos.left += (self.rail.align) ? self.win.outerWidth() - getWidthToPixel(self.win, 'border-right-width') - self.rail.width : getWidthToPixel(self.win, 'border-left-width');
                off = opt.railoffset;
                if (off) {
                    if (off.top) pos.top += off.top;
                    if (off.left) pos.left += off.left
                }
                if (!self.railslocked) self.rail.css({
                    top: pos.top,
                    left: pos.left,
                    height: ((len) ? len.h : self.win.innerHeight()) - (opt.railpadding.top + opt.railpadding.bottom)
                });
                if (self.zoom) {
                    self.zoom.css({
                        top: pos.top + 1,
                        left: (self.rail.align == 1) ? pos.left - 20 : pos.left + self.rail.width + 4
                    })
                }
                if (self.railh && !self.railslocked) {
                    pos = {
                        top: wpos.top,
                        left: wpos.left
                    };
                    off = opt.railhoffset;
                    if (off) {
                        if (off.top) pos.top += off.top;
                        if (off.left) pos.left += off.left
                    }
                    var y = (self.railh.align) ? pos.top + getWidthToPixel(self.win, 'border-top-width', !0) + self.win.innerHeight() - self.railh.height : pos.top + getWidthToPixel(self.win, 'border-top-width', !0);
                    var x = pos.left + getWidthToPixel(self.win, 'border-left-width');
                    self.railh.css({
                        top: y - (opt.railpadding.top + opt.railpadding.bottom),
                        left: x,
                        width: self.railh.width
                    })
                }
            }
        };
        this.doRailClick = function(e, dbl, hr) {
            var fn, pg, cur, pos;
            if (self.railslocked) return;
            self.cancelEvent(e);
            if (!("pageY" in e)) {
                e.pageX = e.clientX + _doc.documentElement.scrollLeft;
                e.pageY = e.clientY + _doc.documentElement.scrollTop
            }
            if (dbl) {
                fn = (hr) ? self.doScrollLeft : self.doScrollTop;
                cur = (hr) ? ((e.pageX - self.railh.offset().left - (self.cursorwidth / 2)) * self.scrollratio.x) : ((e.pageY - self.rail.offset().top - (self.cursorheight / 2)) * self.scrollratio.y);
                self.unsynched("relativexy");
                fn(cur | 0)
            } else {
                fn = (hr) ? self.doScrollLeftBy : self.doScrollBy;
                cur = (hr) ? self.scroll.x : self.scroll.y;
                pos = (hr) ? e.pageX - self.railh.offset().left : e.pageY - self.rail.offset().top;
                pg = (hr) ? self.view.w : self.view.h;
                fn((cur >= pos) ? pg : -pg)
            }
        };
        self.newscrolly = self.newscrollx = 0;
        self.hasanimationframe = ("requestAnimationFrame" in _win);
        self.hascancelanimationframe = ("cancelAnimationFrame" in _win);
        self.hasborderbox = !1;
        this.init = function() {
            self.saved.css = [];
            if (cap.isoperamini) return !0;
            if (cap.isandroid && !("hidden" in _doc)) return !0;
            opt.emulatetouch = opt.emulatetouch || opt.touchbehavior;
            self.hasborderbox = _win.getComputedStyle && (_win.getComputedStyle(_doc.body)['box-sizing'] === "border-box");
            var _scrollyhidden = {
                'overflow-y': 'hidden'
            };
            if (cap.isie11 || cap.isie10) _scrollyhidden['-ms-overflow-style'] = 'none';
            if (self.ishwscroll) {
                this.doc.css(cap.transitionstyle, cap.prefixstyle + 'transform 0ms ease-out');
                if (cap.transitionend) self.bind(self.doc, cap.transitionend, self.onScrollTransitionEnd, !1)
            }
            self.zindex = "auto";
            if (!self.ispage && opt.zindex == "auto") {
                self.zindex = getZIndex() || "auto"
            } else {
                self.zindex = opt.zindex
            }
            if (!self.ispage && self.zindex != "auto" && self.zindex > globalmaxzindex) {
                globalmaxzindex = self.zindex
            }
            if (self.isie && self.zindex === 0 && opt.zindex == "auto") {
                self.zindex = "auto"
            }
            if (!self.ispage || !cap.isieold) {
                var cont = self.docscroll;
                if (self.ispage) cont = (self.haswrapper) ? self.win : self.doc;
                self.css(cont, _scrollyhidden);
                if (self.ispage && (cap.isie11 || cap.isie)) {
                    self.css($("html"), _scrollyhidden)
                }
                if (cap.isios && !self.ispage && !self.haswrapper) self.css($body, {
                    "-webkit-overflow-scrolling": "touch"
                });
                var cursor = $(_doc.createElement('div'));
                cursor.css({
                    position: "relative",
                    top: 0,
                    "float": "right",
                    width: opt.cursorwidth,
                    height: 0,
                    'background-color': opt.cursorcolor,
                    border: opt.cursorborder,
                    'background-clip': 'padding-box',
                    '-webkit-border-radius': opt.cursorborderradius,
                    '-moz-border-radius': opt.cursorborderradius,
                    'border-radius': opt.cursorborderradius
                });
                cursor.addClass('nicescroll-cursors');
                self.cursor = cursor;
                var rail = $(_doc.createElement('div'));
                rail.attr('id', self.id);
                rail.addClass('nicescroll-rails nicescroll-rails-vr');
                if (opt.scrollCLass) {
                    rail.addClass(opt.scrollCLass)
                }
                var v, a, kp = ["left", "right", "top", "bottom"];
                for (var n in kp) {
                    a = kp[n];
                    v = opt.railpadding[a] || 0;
                    v && rail.css("padding-" + a, v + "px")
                }
                rail.append(cursor);
                rail.width = Math.max(parseFloat(opt.cursorwidth), cursor.outerWidth());
                rail.css({
                    width: rail.width + "px",
                    zIndex: self.zindex,
                    background: opt.background,
                    cursor: "default"
                });
                rail.visibility = !0;
                rail.scrollable = !0;
                rail.align = (opt.railalign == "left") ? 0 : 1;
                self.rail = rail;
                self.rail.drag = !1;
                var zoom = !1;
                if (opt.boxzoom && !self.ispage && !cap.isieold) {
                    zoom = _doc.createElement('div');
                    self.bind(zoom, "click", self.doZoom);
                    self.bind(zoom, "mouseenter", function() {
                        self.zoom.css('opacity', opt.cursoropacitymax)
                    });
                    self.bind(zoom, "mouseleave", function() {
                        self.zoom.css('opacity', opt.cursoropacitymin)
                    });
                    self.zoom = $(zoom);
                    self.zoom.css({
                        cursor: "pointer",
                        zIndex: self.zindex,
                        backgroundImage: 'url(' + opt.scriptpath + 'zoomico.png)',
                        height: 18,
                        width: 18,
                        backgroundPosition: '0 0'
                    });
                    if (opt.dblclickzoom) self.bind(self.win, "dblclick", self.doZoom);
                    if (cap.cantouch && opt.gesturezoom) {
                        self.ongesturezoom = function(e) {
                            if (e.scale > 1.5) self.doZoomIn(e);
                            if (e.scale < 0.8) self.doZoomOut(e);
                            return self.cancelEvent(e)
                        };
                        self.bind(self.win, "gestureend", self.ongesturezoom)
                    }
                }
                self.railh = !1;
                var railh;
                if (opt.horizrailenabled) {
                    self.css(cont, {
                        overflowX: 'hidden'
                    });
                    cursor = $(_doc.createElement('div'));
                    cursor.css({
                        position: "absolute",
                        top: 0,
                        height: opt.cursorwidth,
                        width: 0,
                        backgroundColor: opt.cursorcolor,
                        border: opt.cursorborder,
                        backgroundClip: 'padding-box',
                        '-webkit-border-radius': opt.cursorborderradius,
                        '-moz-border-radius': opt.cursorborderradius,
                        'border-radius': opt.cursorborderradius
                    });
                    if (cap.isieold) cursor.css('overflow', 'hidden');
                    cursor.addClass('nicescroll-cursors');
                    self.cursorh = cursor;
                    railh = $(_doc.createElement('div'));
                    railh.attr('id', self.id + '-hr');
                    railh.addClass('nicescroll-rails nicescroll-rails-hr');
                    if (opt.scrollCLass) {
                        railh.addClass(opt.scrollCLass)
                    }
                    railh.height = Math.max(parseFloat(opt.cursorwidth), cursor.outerHeight());
                    railh.css({
                        height: railh.height + "px",
                        'zIndex': self.zindex,
                        "background": opt.background
                    });
                    railh.append(cursor);
                    railh.visibility = !0;
                    railh.scrollable = !0;
                    railh.align = (opt.railvalign == "top") ? 0 : 1;
                    self.railh = railh;
                    self.railh.drag = !1
                }
                if (self.ispage) {
                    rail.css({
                        position: "fixed",
                        top: 0,
                        height: "100%"
                    });
                    rail.css((rail.align) ? {
                        right: 0
                    } : {
                        left: 0
                    });
                    self.body.append(rail);
                    if (self.railh) {
                        railh.css({
                            position: "fixed",
                            left: 0,
                            width: "100%"
                        });
                        railh.css((railh.align) ? {
                            bottom: 0
                        } : {
                            top: 0
                        });
                        self.body.append(railh)
                    }
                } else {
                    if (self.ishwscroll) {
                        if (self.win.css('position') == 'static') self.css(self.win, {
                            'position': 'relative'
                        });
                        var bd = (self.win[0].nodeName == 'HTML') ? self.body : self.win;
                        $(bd).scrollTop(0).scrollLeft(0);
                        if (self.zoom) {
                            self.zoom.css({
                                position: "absolute",
                                top: 1,
                                right: 0,
                                "margin-right": rail.width + 4
                            });
                            bd.append(self.zoom)
                        }
                        rail.css({
                            position: "absolute",
                            top: 0
                        });
                        rail.css((rail.align) ? {
                            right: 0
                        } : {
                            left: 0
                        });
                        bd.append(rail);
                        if (railh) {
                            railh.css({
                                position: "absolute",
                                left: 0,
                                bottom: 0
                            });
                            railh.css((railh.align) ? {
                                bottom: 0
                            } : {
                                top: 0
                            });
                            bd.append(railh)
                        }
                    } else {
                        self.isfixed = (self.win.css("position") == "fixed");
                        var rlpos = (self.isfixed) ? "fixed" : "absolute";
                        if (!self.isfixed) self.viewport = self.getViewport(self.win[0]);
                        if (self.viewport) {
                            self.body = self.viewport;
                            if (!(/fixed|absolute/.test(self.viewport.css("position")))) self.css(self.viewport, {
                                "position": "relative"
                            })
                        }
                        rail.css({
                            position: rlpos
                        });
                        if (self.zoom) self.zoom.css({
                            position: rlpos
                        });
                        self.updateScrollBar();
                        self.body.append(rail);
                        if (self.zoom) self.body.append(self.zoom);
                        if (self.railh) {
                            railh.css({
                                position: rlpos
                            });
                            self.body.append(railh)
                        }
                    }
                    if (cap.isios) self.css(self.win, {
                        '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
                        '-webkit-touch-callout': 'none'
                    });
                    if (opt.disableoutline) {
                        if (cap.isie) self.win.attr("hideFocus", "true");
                        if (cap.iswebkit) self.win.css('outline', 'none')
                    }
                }
                if (opt.autohidemode === !1) {
                    self.autohidedom = !1;
                    self.rail.css({
                        opacity: opt.cursoropacitymax
                    });
                    if (self.railh) self.railh.css({
                        opacity: opt.cursoropacitymax
                    })
                } else if ((opt.autohidemode === !0) || (opt.autohidemode === "leave")) {
                    self.autohidedom = $().add(self.rail);
                    if (cap.isie8) self.autohidedom = self.autohidedom.add(self.cursor);
                    if (self.railh) self.autohidedom = self.autohidedom.add(self.railh);
                    if (self.railh && cap.isie8) self.autohidedom = self.autohidedom.add(self.cursorh)
                } else if (opt.autohidemode == "scroll") {
                    self.autohidedom = $().add(self.rail);
                    if (self.railh) self.autohidedom = self.autohidedom.add(self.railh)
                } else if (opt.autohidemode == "cursor") {
                    self.autohidedom = $().add(self.cursor);
                    if (self.railh) self.autohidedom = self.autohidedom.add(self.cursorh)
                } else if (opt.autohidemode == "hidden") {
                    self.autohidedom = !1;
                    self.hide();
                    self.railslocked = !1
                }
                if (cap.cantouch || self.istouchcapable || opt.emulatetouch || cap.hasmstouch) {
                    self.scrollmom = new ScrollMomentumClass2D(self);
                    var delayedclick = null;
                    self.ontouchstart = function(e) {
                        if (self.locked) return !1;
                        if (e.pointerType && (e.pointerType === 'mouse' || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !1;
                        self.hasmoving = !1;
                        if (self.scrollmom.timer) {
                            self.triggerScrollEnd();
                            self.scrollmom.stop()
                        }
                        if (!self.railslocked) {
                            var tg = self.getTarget(e);
                            if (tg) {
                                var skp = (/INPUT/i.test(tg.nodeName)) && (/range/i.test(tg.type));
                                if (skp) return self.stopPropagation(e)
                            }
                            var ismouse = (e.type === "mousedown");
                            if (!("clientX" in e) && ("changedTouches" in e)) {
                                e.clientX = e.changedTouches[0].clientX;
                                e.clientY = e.changedTouches[0].clientY
                            }
                            if (self.forcescreen) {
                                var le = e;
                                e = {
                                    "original": (e.original) ? e.original : e
                                };
                                e.clientX = le.screenX;
                                e.clientY = le.screenY
                            }
                            self.rail.drag = {
                                x: e.clientX,
                                y: e.clientY,
                                sx: self.scroll.x,
                                sy: self.scroll.y,
                                st: self.getScrollTop(),
                                sl: self.getScrollLeft(),
                                pt: 2,
                                dl: !1,
                                tg: tg
                            };
                            if (self.ispage || !opt.directionlockdeadzone) {
                                self.rail.drag.dl = "f"
                            } else {
                                var view = {
                                    w: $window.width(),
                                    h: $window.height()
                                };
                                var page = self.getContentSize();
                                var maxh = page.h - view.h;
                                var maxw = page.w - view.w;
                                if (self.rail.scrollable && !self.railh.scrollable) self.rail.drag.ck = (maxh > 0) ? "v" : !1;
                                else if (!self.rail.scrollable && self.railh.scrollable) self.rail.drag.ck = (maxw > 0) ? "h" : !1;
                                else self.rail.drag.ck = !1
                            }
                            if (opt.emulatetouch && self.isiframe && cap.isie) {
                                var wp = self.win.position();
                                self.rail.drag.x += wp.left;
                                self.rail.drag.y += wp.top
                            }
                            self.hasmoving = !1;
                            self.lastmouseup = !1;
                            self.scrollmom.reset(e.clientX, e.clientY);
                            if (tg && ismouse) {
                                var ip = /INPUT|SELECT|BUTTON|TEXTAREA/i.test(tg.nodeName);
                                if (!ip) {
                                    if (cap.hasmousecapture) tg.setCapture();
                                    if (opt.emulatetouch) {
                                        if (tg.onclick && !(tg._onclick || !1)) {
                                            tg._onclick = tg.onclick;
                                            tg.onclick = function(e) {
                                                if (self.hasmoving) return !1;
                                                tg._onclick.call(this, e)
                                            }
                                        }
                                        return self.cancelEvent(e)
                                    }
                                    return self.stopPropagation(e)
                                }
                                if (/SUBMIT|CANCEL|BUTTON/i.test($(tg).attr('type'))) {
                                    self.preventclick = {
                                        "tg": tg,
                                        "click": !1
                                    }
                                }
                            }
                        }
                    };
                    self.ontouchend = function(e) {
                        if (!self.rail.drag) return !0;
                        if (self.rail.drag.pt == 2) {
                            if (e.pointerType && (e.pointerType === 'mouse' || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !1;
                            self.rail.drag = !1;
                            var ismouse = (e.type === "mouseup");
                            if (self.hasmoving) {
                                self.scrollmom.doMomentum();
                                self.lastmouseup = !0;
                                self.hideCursor();
                                if (cap.hasmousecapture) _doc.releaseCapture();
                                if (ismouse) return self.cancelEvent(e)
                            }
                        } else if (self.rail.drag.pt == 1) {
                            return self.onmouseup(e)
                        }
                    };
                    var moveneedoffset = (opt.emulatetouch && self.isiframe && !cap.hasmousecapture);
                    var locktollerance = opt.directionlockdeadzone * 0.3 | 0;
                    self.ontouchmove = function(e, byiframe) {
                        if (!self.rail.drag) return !0;
                        if (e.targetTouches && opt.preventmultitouchscrolling) {
                            if (e.targetTouches.length > 1) return !0
                        }
                        if (e.pointerType && (e.pointerType === 'mouse' || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !0;
                        if (self.rail.drag.pt == 2) {
                            if (("changedTouches" in e)) {
                                e.clientX = e.changedTouches[0].clientX;
                                e.clientY = e.changedTouches[0].clientY
                            }
                            var ofy, ofx;
                            ofx = ofy = 0;
                            if (moveneedoffset && !byiframe) {
                                var wp = self.win.position();
                                ofx = -wp.left;
                                ofy = -wp.top
                            }
                            var fy = e.clientY + ofy;
                            var my = (fy - self.rail.drag.y);
                            var fx = e.clientX + ofx;
                            var mx = (fx - self.rail.drag.x);
                            var ny = self.rail.drag.st - my;
                            if (self.ishwscroll && opt.bouncescroll) {
                                if (ny < 0) {
                                    ny = Math.round(ny / 2)
                                } else if (ny > self.page.maxh) {
                                    ny = self.page.maxh + Math.round((ny - self.page.maxh) / 2)
                                }
                            } else {
                                if (ny < 0) {
                                    ny = 0;
                                    fy = 0
                                } else if (ny > self.page.maxh) {
                                    ny = self.page.maxh;
                                    fy = 0
                                }
                                if (fy === 0 && !self.hasmoving) {
                                    if (!self.ispage) self.rail.drag = !1;
                                    return !0
                                }
                            }
                            var nx = self.getScrollLeft();
                            if (self.railh && self.railh.scrollable) {
                                nx = (self.isrtlmode) ? mx - self.rail.drag.sl : self.rail.drag.sl - mx;
                                if (self.ishwscroll && opt.bouncescroll) {
                                    if (nx < 0) {
                                        nx = Math.round(nx / 2)
                                    } else if (nx > self.page.maxw) {
                                        nx = self.page.maxw + Math.round((nx - self.page.maxw) / 2)
                                    }
                                } else {
                                    if (nx < 0) {
                                        nx = 0;
                                        fx = 0
                                    }
                                    if (nx > self.page.maxw) {
                                        nx = self.page.maxw;
                                        fx = 0
                                    }
                                }
                            }
                            if (!self.hasmoving) {
                                if (self.rail.drag.y === e.clientY && self.rail.drag.x === e.clientX) return self.cancelEvent(e);
                                var ay = Math.abs(my);
                                var ax = Math.abs(mx);
                                var dz = opt.directionlockdeadzone;
                                if (!self.rail.drag.ck) {
                                    if (ay > dz && ax > dz) self.rail.drag.dl = "f";
                                    else if (ay > dz) self.rail.drag.dl = (ax > locktollerance) ? "f" : "v";
                                    else if (ax > dz) self.rail.drag.dl = (ay > locktollerance) ? "f" : "h"
                                } else if (self.rail.drag.ck == "v") {
                                    if (ax > dz && ay <= locktollerance) {
                                        self.rail.drag = !1
                                    } else if (ay > dz) self.rail.drag.dl = "v"
                                } else if (self.rail.drag.ck == "h") {
                                    if (ay > dz && ax <= locktollerance) {
                                        self.rail.drag = !1
                                    } else if (ax > dz) self.rail.drag.dl = "h"
                                }
                                if (!self.rail.drag.dl) return self.cancelEvent(e);
                                self.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0);
                                self.hasmoving = !0
                            }
                            if (self.preventclick && !self.preventclick.click) {
                                self.preventclick.click = self.preventclick.tg.onclick || !1;
                                self.preventclick.tg.onclick = self.onpreventclick
                            }
                            if (self.rail.drag.dl) {
                                if (self.rail.drag.dl == "v") nx = self.rail.drag.sl;
                                else if (self.rail.drag.dl == "h") ny = self.rail.drag.st
                            }
                            self.synched("touchmove", function() {
                                if (self.rail.drag && (self.rail.drag.pt == 2)) {
                                    if (self.prepareTransition) self.resetTransition();
                                    if (self.rail.scrollable) self.setScrollTop(ny);
                                    self.scrollmom.update(fx, fy);
                                    if (self.railh && self.railh.scrollable) {
                                        self.setScrollLeft(nx);
                                        self.showCursor(ny, nx)
                                    } else {
                                        self.showCursor(ny)
                                    }
                                    if (cap.isie10) _doc.selection.clear()
                                }
                            });
                            return self.cancelEvent(e)
                        } else if (self.rail.drag.pt == 1) {
                            return self.onmousemove(e)
                        }
                    };
                    self.ontouchstartCursor = function(e, hronly) {
                        if (self.rail.drag && self.rail.drag.pt != 3) return;
                        if (self.locked) return self.cancelEvent(e);
                        self.cancelScroll();
                        self.rail.drag = {
                            x: e.touches[0].clientX,
                            y: e.touches[0].clientY,
                            sx: self.scroll.x,
                            sy: self.scroll.y,
                            pt: 3,
                            hr: (!!hronly)
                        };
                        var tg = self.getTarget(e);
                        if (!self.ispage && cap.hasmousecapture) tg.setCapture();
                        if (self.isiframe && !cap.hasmousecapture) {
                            self.saved.csspointerevents = self.doc.css("pointer-events");
                            self.css(self.doc, {
                                "pointer-events": "none"
                            })
                        }
                        return self.cancelEvent(e)
                    };
                    self.ontouchendCursor = function(e) {
                        if (self.rail.drag) {
                            if (cap.hasmousecapture) _doc.releaseCapture();
                            if (self.isiframe && !cap.hasmousecapture) self.doc.css("pointer-events", self.saved.csspointerevents);
                            if (self.rail.drag.pt != 3) return;
                            self.rail.drag = !1;
                            return self.cancelEvent(e)
                        }
                    };
                    self.ontouchmoveCursor = function(e) {
                        if (self.rail.drag) {
                            if (self.rail.drag.pt != 3) return;
                            self.cursorfreezed = !0;
                            if (self.rail.drag.hr) {
                                self.scroll.x = self.rail.drag.sx + (e.touches[0].clientX - self.rail.drag.x);
                                if (self.scroll.x < 0) self.scroll.x = 0;
                                var mw = self.scrollvaluemaxw;
                                if (self.scroll.x > mw) self.scroll.x = mw
                            } else {
                                self.scroll.y = self.rail.drag.sy + (e.touches[0].clientY - self.rail.drag.y);
                                if (self.scroll.y < 0) self.scroll.y = 0;
                                var my = self.scrollvaluemax;
                                if (self.scroll.y > my) self.scroll.y = my
                            }
                            self.synched('touchmove', function() {
                                if (self.rail.drag && (self.rail.drag.pt == 3)) {
                                    self.showCursor();
                                    if (self.rail.drag.hr) self.doScrollLeft(Math.round(self.scroll.x * self.scrollratio.x), opt.cursordragspeed);
                                    else self.doScrollTop(Math.round(self.scroll.y * self.scrollratio.y), opt.cursordragspeed)
                                }
                            });
                            return self.cancelEvent(e)
                        }
                    }
                }
                self.onmousedown = function(e, hronly) {
                    if (self.rail.drag && self.rail.drag.pt != 1) return;
                    if (self.railslocked) return self.cancelEvent(e);
                    self.cancelScroll();
                    self.rail.drag = {
                        x: e.clientX,
                        y: e.clientY,
                        sx: self.scroll.x,
                        sy: self.scroll.y,
                        pt: 1,
                        hr: hronly || !1
                    };
                    var tg = self.getTarget(e);
                    if (cap.hasmousecapture) tg.setCapture();
                    if (self.isiframe && !cap.hasmousecapture) {
                        self.saved.csspointerevents = self.doc.css("pointer-events");
                        self.css(self.doc, {
                            "pointer-events": "none"
                        })
                    }
                    self.hasmoving = !1;
                    return self.cancelEvent(e)
                };
                self.onmouseup = function(e) {
                    if (self.rail.drag) {
                        if (self.rail.drag.pt != 1) return !0;
                        if (cap.hasmousecapture) _doc.releaseCapture();
                        if (self.isiframe && !cap.hasmousecapture) self.doc.css("pointer-events", self.saved.csspointerevents);
                        self.rail.drag = !1;
                        self.cursorfreezed = !1;
                        if (self.hasmoving) self.triggerScrollEnd();
                        return self.cancelEvent(e)
                    }
                };
                self.onmousemove = function(e) {
                    if (self.rail.drag) {
                        if (self.rail.drag.pt !== 1) return;
                        if (cap.ischrome && e.which === 0) return self.onmouseup(e);
                        self.cursorfreezed = !0;
                        if (!self.hasmoving) self.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0);
                        self.hasmoving = !0;
                        if (self.rail.drag.hr) {
                            self.scroll.x = self.rail.drag.sx + (e.clientX - self.rail.drag.x);
                            if (self.scroll.x < 0) self.scroll.x = 0;
                            var mw = self.scrollvaluemaxw;
                            if (self.scroll.x > mw) self.scroll.x = mw
                        } else {
                            self.scroll.y = self.rail.drag.sy + (e.clientY - self.rail.drag.y);
                            if (self.scroll.y < 0) self.scroll.y = 0;
                            var my = self.scrollvaluemax;
                            if (self.scroll.y > my) self.scroll.y = my
                        }
                        self.synched('mousemove', function() {
                            if (self.cursorfreezed) {
                                self.showCursor();
                                if (self.rail.drag.hr) {
                                    self.scrollLeft(Math.round(self.scroll.x * self.scrollratio.x))
                                } else {
                                    self.scrollTop(Math.round(self.scroll.y * self.scrollratio.y))
                                }
                            }
                        });
                        return self.cancelEvent(e)
                    } else {
                        self.checkarea = 0
                    }
                };
                if (cap.cantouch || opt.emulatetouch) {
                    self.onpreventclick = function(e) {
                        if (self.preventclick) {
                            self.preventclick.tg.onclick = self.preventclick.click;
                            self.preventclick = !1;
                            return self.cancelEvent(e)
                        }
                    };
                    self.onclick = (cap.isios) ? !1 : function(e) {
                        if (self.lastmouseup) {
                            self.lastmouseup = !1;
                            return self.cancelEvent(e)
                        } else {
                            return !0
                        }
                    };
                    if (opt.grabcursorenabled && cap.cursorgrabvalue) {
                        self.css((self.ispage) ? self.doc : self.win, {
                            'cursor': cap.cursorgrabvalue
                        });
                        self.css(self.rail, {
                            'cursor': cap.cursorgrabvalue
                        })
                    }
                } else {
                    var checkSelectionScroll = function(e) {
                        if (!self.selectiondrag) return;
                        if (e) {
                            var ww = self.win.outerHeight();
                            var df = (e.pageY - self.selectiondrag.top);
                            if (df > 0 && df < ww) df = 0;
                            if (df >= ww) df -= ww;
                            self.selectiondrag.df = df
                        }
                        if (self.selectiondrag.df === 0) return;
                        var rt = -(self.selectiondrag.df * 2 / 6) | 0;
                        self.doScrollBy(rt);
                        self.debounced("doselectionscroll", function() {
                            checkSelectionScroll()
                        }, 50)
                    };
                    if ("getSelection" in _doc) {
                        self.hasTextSelected = function() {
                            return (_doc.getSelection().rangeCount > 0)
                        }
                    } else if ("selection" in _doc) {
                        self.hasTextSelected = function() {
                            return (_doc.selection.type != "None")
                        }
                    } else {
                        self.hasTextSelected = function() {
                            return !1
                        }
                    }
                    self.onselectionstart = function(e) {
                        if (self.ispage) return;
                        self.selectiondrag = self.win.offset()
                    };
                    self.onselectionend = function(e) {
                        self.selectiondrag = !1
                    };
                    self.onselectiondrag = function(e) {
                        if (!self.selectiondrag) return;
                        if (self.hasTextSelected()) self.debounced("selectionscroll", function() {
                            checkSelectionScroll(e)
                        }, 250)
                    }
                }
                if (cap.hasw3ctouch) {
                    self.css((self.ispage) ? $("html") : self.win, {
                        'touch-action': 'none'
                    });
                    self.css(self.rail, {
                        'touch-action': 'none'
                    });
                    self.css(self.cursor, {
                        'touch-action': 'none'
                    });
                    self.bind(self.win, "pointerdown", self.ontouchstart);
                    self.bind(_doc, "pointerup", self.ontouchend);
                    self.delegate(_doc, "pointermove", self.ontouchmove)
                } else if (cap.hasmstouch) {
                    self.css((self.ispage) ? $("html") : self.win, {
                        '-ms-touch-action': 'none'
                    });
                    self.css(self.rail, {
                        '-ms-touch-action': 'none'
                    });
                    self.css(self.cursor, {
                        '-ms-touch-action': 'none'
                    });
                    self.bind(self.win, "MSPointerDown", self.ontouchstart);
                    self.bind(_doc, "MSPointerUp", self.ontouchend);
                    self.delegate(_doc, "MSPointerMove", self.ontouchmove);
                    self.bind(self.cursor, "MSGestureHold", function(e) {
                        e.preventDefault()
                    });
                    self.bind(self.cursor, "contextmenu", function(e) {
                        e.preventDefault()
                    })
                } else if (cap.cantouch) {
                    self.bind(self.win, "touchstart", self.ontouchstart, !1, !0);
                    self.bind(_doc, "touchend", self.ontouchend, !1, !0);
                    self.bind(_doc, "touchcancel", self.ontouchend, !1, !0);
                    self.delegate(_doc, "touchmove", self.ontouchmove, !1, !0)
                }
                if (opt.emulatetouch) {
                    self.bind(self.win, "mousedown", self.ontouchstart, !1, !0);
                    self.bind(_doc, "mouseup", self.ontouchend, !1, !0);
                    self.bind(_doc, "mousemove", self.ontouchmove, !1, !0)
                }
                if (opt.cursordragontouch || (!cap.cantouch && !opt.emulatetouch)) {
                    self.rail.css({
                        cursor: "default"
                    });
                    self.railh && self.railh.css({
                        cursor: "default"
                    });
                    self.jqbind(self.rail, "mouseenter", function() {
                        if (!self.ispage && !self.win.is(":visible")) return !1;
                        if (self.canshowonmouseevent) self.showCursor();
                        self.rail.active = !0
                    });
                    self.jqbind(self.rail, "mouseleave", function() {
                        self.rail.active = !1;
                        if (!self.rail.drag) self.hideCursor()
                    });
                    if (opt.sensitiverail) {
                        self.bind(self.rail, "click", function(e) {
                            self.doRailClick(e, !1, !1)
                        });
                        self.bind(self.rail, "dblclick", function(e) {
                            self.doRailClick(e, !0, !1)
                        });
                        self.bind(self.cursor, "click", function(e) {
                            self.cancelEvent(e)
                        });
                        self.bind(self.cursor, "dblclick", function(e) {
                            self.cancelEvent(e)
                        })
                    }
                    if (self.railh) {
                        self.jqbind(self.railh, "mouseenter", function() {
                            if (!self.ispage && !self.win.is(":visible")) return !1;
                            if (self.canshowonmouseevent) self.showCursor();
                            self.rail.active = !0
                        });
                        self.jqbind(self.railh, "mouseleave", function() {
                            self.rail.active = !1;
                            if (!self.rail.drag) self.hideCursor()
                        });
                        if (opt.sensitiverail) {
                            self.bind(self.railh, "click", function(e) {
                                self.doRailClick(e, !1, !0)
                            });
                            self.bind(self.railh, "dblclick", function(e) {
                                self.doRailClick(e, !0, !0)
                            });
                            self.bind(self.cursorh, "click", function(e) {
                                self.cancelEvent(e)
                            });
                            self.bind(self.cursorh, "dblclick", function(e) {
                                self.cancelEvent(e)
                            })
                        }
                    }
                }
                if (opt.cursordragontouch && (this.istouchcapable || cap.cantouch)) {
                    self.bind(self.cursor, "touchstart", self.ontouchstartCursor);
                    self.bind(self.cursor, "touchmove", self.ontouchmoveCursor);
                    self.bind(self.cursor, "touchend", self.ontouchendCursor);
                    self.cursorh && self.bind(self.cursorh, "touchstart", function(e) {
                        self.ontouchstartCursor(e, !0)
                    });
                    self.cursorh && self.bind(self.cursorh, "touchmove", self.ontouchmoveCursor);
                    self.cursorh && self.bind(self.cursorh, "touchend", self.ontouchendCursor)
                }
                if (!opt.emulatetouch && !cap.isandroid && !cap.isios) {
                    self.bind((cap.hasmousecapture) ? self.win : _doc, "mouseup", self.onmouseup);
                    self.bind(_doc, "mousemove", self.onmousemove);
                    if (self.onclick) self.bind(_doc, "click", self.onclick);
                    self.bind(self.cursor, "mousedown", self.onmousedown);
                    self.bind(self.cursor, "mouseup", self.onmouseup);
                    if (self.railh) {
                        self.bind(self.cursorh, "mousedown", function(e) {
                            self.onmousedown(e, !0)
                        });
                        self.bind(self.cursorh, "mouseup", self.onmouseup)
                    }
                    if (!self.ispage && opt.enablescrollonselection) {
                        self.bind(self.win[0], "mousedown", self.onselectionstart);
                        self.bind(_doc, "mouseup", self.onselectionend);
                        self.bind(self.cursor, "mouseup", self.onselectionend);
                        if (self.cursorh) self.bind(self.cursorh, "mouseup", self.onselectionend);
                        self.bind(_doc, "mousemove", self.onselectiondrag)
                    }
                    if (self.zoom) {
                        self.jqbind(self.zoom, "mouseenter", function() {
                            if (self.canshowonmouseevent) self.showCursor();
                            self.rail.active = !0
                        });
                        self.jqbind(self.zoom, "mouseleave", function() {
                            self.rail.active = !1;
                            if (!self.rail.drag) self.hideCursor()
                        })
                    }
                } else {
                    self.bind((cap.hasmousecapture) ? self.win : _doc, "mouseup", self.ontouchend);
                    if (self.onclick) self.bind(_doc, "click", self.onclick);
                    if (opt.cursordragontouch) {
                        self.bind(self.cursor, "mousedown", self.onmousedown);
                        self.bind(self.cursor, "mouseup", self.onmouseup);
                        self.cursorh && self.bind(self.cursorh, "mousedown", function(e) {
                            self.onmousedown(e, !0)
                        });
                        self.cursorh && self.bind(self.cursorh, "mouseup", self.onmouseup)
                    } else {
                        self.bind(self.rail, "mousedown", function(e) {
                            e.preventDefault()
                        });
                        self.railh && self.bind(self.railh, "mousedown", function(e) {
                            e.preventDefault()
                        })
                    }
                }
                if (opt.enablemousewheel) {
                    if (!self.isiframe) self.mousewheel((cap.isie && self.ispage) ? _doc : self.win, self.onmousewheel);
                    self.mousewheel(self.rail, self.onmousewheel);
                    if (self.railh) self.mousewheel(self.railh, self.onmousewheelhr)
                }
                if (!self.ispage && !cap.cantouch && !(/HTML|^BODY/.test(self.win[0].nodeName))) {
                    if (!self.win.attr("tabindex")) self.win.attr({
                        "tabindex": ++tabindexcounter
                    });
                    self.bind(self.win, "focus", function(e) {
                        domfocus = (self.getTarget(e)).id || self.getTarget(e) || !1;
                        self.hasfocus = !0;
                        if (self.canshowonmouseevent) self.noticeCursor()
                    });
                    self.bind(self.win, "blur", function(e) {
                        domfocus = !1;
                        self.hasfocus = !1
                    });
                    self.bind(self.win, "mouseenter", function(e) {
                        mousefocus = (self.getTarget(e)).id || self.getTarget(e) || !1;
                        self.hasmousefocus = !0;
                        if (self.canshowonmouseevent) self.noticeCursor()
                    });
                    self.bind(self.win, "mouseleave", function(e) {
                        mousefocus = !1;
                        self.hasmousefocus = !1;
                        if (!self.rail.drag) self.hideCursor()
                    })
                }
                self.onkeypress = function(e) {
                    if (self.railslocked && self.page.maxh === 0) return !0;
                    e = e || _win.event;
                    var tg = self.getTarget(e);
                    if (tg && /INPUT|TEXTAREA|SELECT|OPTION/.test(tg.nodeName)) {
                        var tp = tg.getAttribute('type') || tg.type || !1;
                        if ((!tp) || !(/submit|button|cancel/i.tp)) return !0
                    }
                    if ($(tg).attr('contenteditable')) return !0;
                    if (self.hasfocus || (self.hasmousefocus && !domfocus) || (self.ispage && !domfocus && !mousefocus)) {
                        var key = e.keyCode;
                        if (self.railslocked && key != 27) return self.cancelEvent(e);
                        var ctrl = e.ctrlKey || !1;
                        var shift = e.shiftKey || !1;
                        var ret = !1;
                        switch (key) {
                            case 38:
                            case 63233:
                                self.doScrollBy(24 * 3);
                                ret = !0;
                                break;
                            case 40:
                            case 63235:
                                self.doScrollBy(-24 * 3);
                                ret = !0;
                                break;
                            case 37:
                            case 63232:
                                if (self.railh) {
                                    (ctrl) ? self.doScrollLeft(0): self.doScrollLeftBy(24 * 3);
                                    ret = !0
                                }
                                break;
                            case 39:
                            case 63234:
                                if (self.railh) {
                                    (ctrl) ? self.doScrollLeft(self.page.maxw): self.doScrollLeftBy(-24 * 3);
                                    ret = !0
                                }
                                break;
                            case 33:
                            case 63276:
                                self.doScrollBy(self.view.h);
                                ret = !0;
                                break;
                            case 34:
                            case 63277:
                                self.doScrollBy(-self.view.h);
                                ret = !0;
                                break;
                            case 36:
                            case 63273:
                                (self.railh && ctrl) ? self.doScrollPos(0, 0): self.doScrollTo(0);
                                ret = !0;
                                break;
                            case 35:
                            case 63275:
                                (self.railh && ctrl) ? self.doScrollPos(self.page.maxw, self.page.maxh): self.doScrollTo(self.page.maxh);
                                ret = !0;
                                break;
                            case 32:
                                if (opt.spacebarenabled) {
                                    (shift) ? self.doScrollBy(self.view.h): self.doScrollBy(-self.view.h);
                                    ret = !0
                                }
                                break;
                            case 27:
                                if (self.zoomactive) {
                                    self.doZoom();
                                    ret = !0
                                }
                                break
                        }
                        if (ret) return self.cancelEvent(e)
                    }
                };
                if (opt.enablekeyboard) self.bind(_doc, (cap.isopera && !cap.isopera12) ? "keypress" : "keydown", self.onkeypress);
                self.bind(_doc, "keydown", function(e) {
                    var ctrl = e.ctrlKey || !1;
                    if (ctrl) self.wheelprevented = !0
                });
                self.bind(_doc, "keyup", function(e) {
                    var ctrl = e.ctrlKey || !1;
                    if (!ctrl) self.wheelprevented = !1
                });
                self.bind(_win, "blur", function(e) {
                    self.wheelprevented = !1
                });
                self.bind(_win, 'resize', self.onscreenresize);
                self.bind(_win, 'orientationchange', self.onscreenresize);
                self.bind(_win, "load", self.lazyResize);
                if (cap.ischrome && !self.ispage && !self.haswrapper) {
                    var tmp = self.win.attr("style");
                    var ww = parseFloat(self.win.css("width")) + 1;
                    self.win.css('width', ww);
                    self.synched("chromefix", function() {
                        self.win.attr("style", tmp)
                    })
                }
                self.onAttributeChange = function(e) {
                    self.lazyResize(self.isieold ? 250 : 30)
                };
                if (opt.enableobserver) {
                    if ((!self.isie11) && (ClsMutationObserver !== !1)) {
                        self.observerbody = new ClsMutationObserver(function(mutations) {
                            mutations.forEach(function(mut) {
                                if (mut.type == "attributes") {
                                    return ($body.hasClass("modal-open") && $body.hasClass("modal-dialog") && !$.contains($('.modal-dialog')[0], self.doc[0])) ? self.hide() : self.show()
                                }
                            });
                            if (self.me.clientWidth != self.page.width || self.me.clientHeight != self.page.height) return self.lazyResize(30)
                        });
                        self.observerbody.observe(_doc.body, {
                            childList: !0,
                            subtree: !0,
                            characterData: !1,
                            attributes: !0,
                            attributeFilter: ['class']
                        })
                    }
                    if (!self.ispage && !self.haswrapper) {
                        var _dom = self.win[0];
                        if (ClsMutationObserver !== !1) {
                            self.observer = new ClsMutationObserver(function(mutations) {
                                mutations.forEach(self.onAttributeChange)
                            });
                            self.observer.observe(_dom, {
                                childList: !0,
                                characterData: !1,
                                attributes: !0,
                                subtree: !1
                            });
                            self.observerremover = new ClsMutationObserver(function(mutations) {
                                mutations.forEach(function(mo) {
                                    if (mo.removedNodes.length > 0) {
                                        for (var dd in mo.removedNodes) {
                                            if (!!self && (mo.removedNodes[dd] === _dom)) return self.remove()
                                        }
                                    }
                                })
                            });
                            self.observerremover.observe(_dom.parentNode, {
                                childList: !0,
                                characterData: !1,
                                attributes: !1,
                                subtree: !1
                            })
                        } else {
                            self.bind(_dom, (cap.isie && !cap.isie9) ? "propertychange" : "DOMAttrModified", self.onAttributeChange);
                            if (cap.isie9) _dom.attachEvent("onpropertychange", self.onAttributeChange);
                            self.bind(_dom, "DOMNodeRemoved", function(e) {
                                if (e.target === _dom) self.remove()
                            })
                        }
                    }
                }
                if (!self.ispage && opt.boxzoom) self.bind(_win, "resize", self.resizeZoom);
                if (self.istextarea) {
                    self.bind(self.win, "keydown", self.lazyResize);
                    self.bind(self.win, "mouseup", self.lazyResize)
                }
                self.lazyResize(30)
            }
            if (this.doc[0].nodeName == 'IFRAME') {
                var oniframeload = function() {
                    self.iframexd = !1;
                    var doc;
                    try {
                        doc = 'contentDocument' in this ? this.contentDocument : this.contentWindow._doc;
                        var a = doc.domain
                    } catch (e) {
                        self.iframexd = !0;
                        doc = !1
                    }
                    if (self.iframexd) {
                        if ("console" in _win) console.log('NiceScroll error: policy restriced iframe');
                        return !0
                    }
                    self.forcescreen = !0;
                    if (self.isiframe) {
                        self.iframe = {
                            "doc": $(doc),
                            "html": self.doc.contents().find('html')[0],
                            "body": self.doc.contents().find('body')[0]
                        };
                        self.getContentSize = function() {
                            return {
                                w: Math.max(self.iframe.html.scrollWidth, self.iframe.body.scrollWidth),
                                h: Math.max(self.iframe.html.scrollHeight, self.iframe.body.scrollHeight)
                            }
                        };
                        self.docscroll = $(self.iframe.body)
                    }
                    if (!cap.isios && opt.iframeautoresize && !self.isiframe) {
                        self.win.scrollTop(0);
                        self.doc.height("");
                        var hh = Math.max(doc.getElementsByTagName('html')[0].scrollHeight, doc.body.scrollHeight);
                        self.doc.height(hh)
                    }
                    self.lazyResize(30);
                    self.css($(self.iframe.body), _scrollyhidden);
                    if (cap.isios && self.haswrapper) {
                        self.css($(doc.body), {
                            '-webkit-transform': 'translate3d(0,0,0)'
                        })
                    }
                    if ('contentWindow' in this) {
                        self.bind(this.contentWindow, "scroll", self.onscroll)
                    } else {
                        self.bind(doc, "scroll", self.onscroll)
                    }
                    if (opt.enablemousewheel) {
                        self.mousewheel(doc, self.onmousewheel)
                    }
                    if (opt.enablekeyboard) self.bind(doc, (cap.isopera) ? "keypress" : "keydown", self.onkeypress);
                    if (cap.cantouch) {
                        self.bind(doc, "touchstart", self.ontouchstart);
                        self.bind(doc, "touchmove", self.ontouchmove)
                    } else if (opt.emulatetouch) {
                        self.bind(doc, "mousedown", self.ontouchstart);
                        self.bind(doc, "mousemove", function(e) {
                            return self.ontouchmove(e, !0)
                        });
                        if (opt.grabcursorenabled && cap.cursorgrabvalue) self.css($(doc.body), {
                            'cursor': cap.cursorgrabvalue
                        })
                    }
                    self.bind(doc, "mouseup", self.ontouchend);
                    if (self.zoom) {
                        if (opt.dblclickzoom) self.bind(doc, 'dblclick', self.doZoom);
                        if (self.ongesturezoom) self.bind(doc, "gestureend", self.ongesturezoom)
                    }
                };
                if (this.doc[0].readyState && this.doc[0].readyState === "complete") {
                    setTimeout(function() {
                        oniframeload.call(self.doc[0], !1)
                    }, 500)
                }
                self.bind(this.doc, "load", oniframeload)
            }
        };
        this.showCursor = function(py, px) {
            if (self.cursortimeout) {
                clearTimeout(self.cursortimeout);
                self.cursortimeout = 0
            }
            if (!self.rail) return;
            if (self.autohidedom) {
                self.autohidedom.stop().css({
                    opacity: opt.cursoropacitymax
                });
                self.cursoractive = !0
            }
            if (!self.rail.drag || self.rail.drag.pt != 1) {
                if (py !== undefined && py !== !1) {
                    self.scroll.y = (py / self.scrollratio.y) | 0
                }
                if (px !== undefined) {
                    self.scroll.x = (px / self.scrollratio.x) | 0
                }
            }
            self.cursor.css({
                height: self.cursorheight,
                top: self.scroll.y
            });
            if (self.cursorh) {
                var lx = (self.hasreversehr) ? self.scrollvaluemaxw - self.scroll.x : self.scroll.x;
                self.cursorh.css({
                    width: self.cursorwidth,
                    left: (!self.rail.align && self.rail.visibility) ? lx + self.rail.width : lx
                });
                self.cursoractive = !0
            }
            if (self.zoom) self.zoom.stop().css({
                opacity: opt.cursoropacitymax
            })
        };
        this.hideCursor = function(tm) {
            if (self.cursortimeout) return;
            if (!self.rail) return;
            if (!self.autohidedom) return;
            if (self.hasmousefocus && opt.autohidemode === "leave") return;
            self.cursortimeout = setTimeout(function() {
                if (!self.rail.active || !self.showonmouseevent) {
                    self.autohidedom.stop().animate({
                        opacity: opt.cursoropacitymin
                    });
                    if (self.zoom) self.zoom.stop().animate({
                        opacity: opt.cursoropacitymin
                    });
                    self.cursoractive = !1
                }
                self.cursortimeout = 0
            }, tm || opt.hidecursordelay)
        };
        this.noticeCursor = function(tm, py, px) {
            self.showCursor(py, px);
            if (!self.rail.active) self.hideCursor(tm)
        };
        this.getContentSize = (self.ispage) ? function() {
            return {
                w: Math.max(_doc.body.scrollWidth, _doc.documentElement.scrollWidth),
                h: Math.max(_doc.body.scrollHeight, _doc.documentElement.scrollHeight)
            }
        } : (self.haswrapper) ? function() {
            return {
                w: self.doc[0].offsetWidth,
                h: self.doc[0].offsetHeight
            }
        } : function() {
            return {
                w: self.docscroll[0].scrollWidth,
                h: self.docscroll[0].scrollHeight
            }
        };
        this.onResize = function(e, page) {
            if (!self || !self.win) return !1;
            var premaxh = self.page.maxh,
                premaxw = self.page.maxw,
                previewh = self.view.h,
                previeww = self.view.w;
            self.view = {
                w: (self.ispage) ? self.win.width() : self.win[0].clientWidth,
                h: (self.ispage) ? self.win.height() : self.win[0].clientHeight
            };
            self.page = (page) ? page : self.getContentSize();
            self.page.maxh = Math.max(0, self.page.h - self.view.h);
            self.page.maxw = Math.max(0, self.page.w - self.view.w);
            if ((self.page.maxh == premaxh) && (self.page.maxw == premaxw) && (self.view.w == previeww) && (self.view.h == previewh)) {
                if (!self.ispage) {
                    var pos = self.win.offset();
                    if (self.lastposition) {
                        var lst = self.lastposition;
                        if ((lst.top == pos.top) && (lst.left == pos.left)) return self
                    }
                    self.lastposition = pos
                } else {
                    return self
                }
            }
            if (self.page.maxh === 0) {
                self.hideRail();
                self.scrollvaluemax = 0;
                self.scroll.y = 0;
                self.scrollratio.y = 0;
                self.cursorheight = 0;
                self.setScrollTop(0);
                if (self.rail) self.rail.scrollable = !1
            } else {
                self.page.maxh -= (opt.railpadding.top + opt.railpadding.bottom);
                self.rail.scrollable = !0
            }
            if (self.page.maxw === 0) {
                self.hideRailHr();
                self.scrollvaluemaxw = 0;
                self.scroll.x = 0;
                self.scrollratio.x = 0;
                self.cursorwidth = 0;
                self.setScrollLeft(0);
                if (self.railh) {
                    self.railh.scrollable = !1
                }
            } else {
                self.page.maxw -= (opt.railpadding.left + opt.railpadding.right);
                if (self.railh) self.railh.scrollable = (opt.horizrailenabled)
            }
            self.railslocked = (self.locked) || ((self.page.maxh === 0) && (self.page.maxw === 0));
            if (self.railslocked) {
                if (!self.ispage) self.updateScrollBar(self.view);
                return !1
            }
            if (!self.hidden) {
                if (!self.rail.visibility) self.showRail();
                if (self.railh && !self.railh.visibility) self.showRailHr()
            }
            if (self.istextarea && self.win.css('resize') && self.win.css('resize') != 'none') self.view.h -= 20;
            self.cursorheight = Math.min(self.view.h, Math.round(self.view.h * (self.view.h / self.page.h)));
            self.cursorheight = (opt.cursorfixedheight) ? opt.cursorfixedheight : Math.max(opt.cursorminheight, self.cursorheight);
            self.cursorwidth = Math.min(self.view.w, Math.round(self.view.w * (self.view.w / self.page.w)));
            self.cursorwidth = (opt.cursorfixedheight) ? opt.cursorfixedheight : Math.max(opt.cursorminheight, self.cursorwidth);
            self.scrollvaluemax = self.view.h - self.cursorheight - (opt.railpadding.top + opt.railpadding.bottom);
            if (!self.hasborderbox) self.scrollvaluemax -= self.cursor[0].offsetHeight - self.cursor[0].clientHeight;
            if (self.railh) {
                self.railh.width = (self.page.maxh > 0) ? (self.view.w - self.rail.width) : self.view.w;
                self.scrollvaluemaxw = self.railh.width - self.cursorwidth - (opt.railpadding.left + opt.railpadding.right)
            }
            if (!self.ispage) self.updateScrollBar(self.view);
            self.scrollratio = {
                x: (self.page.maxw / self.scrollvaluemaxw),
                y: (self.page.maxh / self.scrollvaluemax)
            };
            var sy = self.getScrollTop();
            if (sy > self.page.maxh) {
                self.doScrollTop(self.page.maxh)
            } else {
                self.scroll.y = (self.getScrollTop() / self.scrollratio.y) | 0;
                self.scroll.x = (self.getScrollLeft() / self.scrollratio.x) | 0;
                if (self.cursoractive) self.noticeCursor()
            }
            if (self.scroll.y && (self.getScrollTop() === 0)) self.doScrollTo((self.scroll.y * self.scrollratio.y) | 0);
            return self
        };
        this.resize = self.onResize;
        var hlazyresize = 0;
        this.onscreenresize = function(e) {
            clearTimeout(hlazyresize);
            var hiderails = (!self.ispage && !self.haswrapper);
            if (hiderails) self.hideRails();
            hlazyresize = setTimeout(function() {
                if (self) {
                    if (hiderails) self.showRails();
                    self.resize()
                }
                hlazyresize = 0
            }, 120)
        };
        this.lazyResize = function(tm) {
            clearTimeout(hlazyresize);
            tm = isNaN(tm) ? 240 : tm;
            hlazyresize = setTimeout(function() {
                self && self.resize();
                hlazyresize = 0
            }, tm);
            return self
        };

        function _modernWheelEvent(dom, name, fn, bubble) {
            self._bind(dom, name, function(e) {
                e = e || _win.event;
                var event = {
                    original: e,
                    target: e.target || e.srcElement,
                    type: "wheel",
                    deltaMode: e.type == "MozMousePixelScroll" ? 0 : 1,
                    deltaX: 0,
                    deltaZ: 0,
                    preventDefault: function() {
                        e.preventDefault ? e.preventDefault() : e.returnValue = !1;
                        return !1
                    },
                    stopImmediatePropagation: function() {
                        (e.stopImmediatePropagation) ? e.stopImmediatePropagation(): e.cancelBubble = !0
                    }
                };
                if (name == "mousewheel") {
                    e.wheelDeltaX && (event.deltaX = -1 / 40 * e.wheelDeltaX);
                    e.wheelDeltaY && (event.deltaY = -1 / 40 * e.wheelDeltaY);
                    !event.deltaY && !event.deltaX && (event.deltaY = -1 / 40 * e.wheelDelta)
                } else {
                    event.deltaY = e.detail
                }
                return fn.call(dom, event)
            }, bubble)
        }
        this.jqbind = function(dom, name, fn) {
            self.events.push({
                e: dom,
                n: name,
                f: fn,
                q: !0
            });
            $(dom).on(name, fn)
        };
        this.mousewheel = function(dom, fn, bubble) {
            var el = ("jquery" in dom) ? dom[0] : dom;
            if ("onwheel" in _doc.createElement("div")) {
                self._bind(el, "wheel", fn, bubble || !1)
            } else {
                var wname = (_doc.onmousewheel !== undefined) ? "mousewheel" : "DOMMouseScroll";
                _modernWheelEvent(el, wname, fn, bubble || !1);
                if (wname == "DOMMouseScroll") _modernWheelEvent(el, "MozMousePixelScroll", fn, bubble || !1)
            }
        };
        var passiveSupported = !1;
        if (cap.haseventlistener) {
            try {
                var options = Object.defineProperty({}, "passive", {
                    get: function() {
                        passiveSupported = !0
                    }
                });
                _win.addEventListener("test", null, options)
            } catch (err) {}
            this.stopPropagation = function(e) {
                if (!e) return !1;
                e = (e.original) ? e.original : e;
                e.stopPropagation();
                return !1
            };
            this.cancelEvent = function(e) {
                if (e.cancelable) e.preventDefault();
                e.stopImmediatePropagation();
                if (e.preventManipulation) e.preventManipulation();
                return !1
            }
        } else {
            Event.prototype.preventDefault = function() {
                this.returnValue = !1
            };
            Event.prototype.stopPropagation = function() {
                this.cancelBubble = !0
            };
            _win.constructor.prototype.addEventListener = _doc.constructor.prototype.addEventListener = Element.prototype.addEventListener = function(type, listener, useCapture) {
                this.attachEvent("on" + type, listener)
            };
            _win.constructor.prototype.removeEventListener = _doc.constructor.prototype.removeEventListener = Element.prototype.removeEventListener = function(type, listener, useCapture) {
                this.detachEvent("on" + type, listener)
            };
            this.cancelEvent = function(e) {
                e = e || _win.event;
                if (e) {
                    e.cancelBubble = !0;
                    e.cancel = !0;
                    e.returnValue = !1
                }
                return !1
            };
            this.stopPropagation = function(e) {
                e = e || _win.event;
                if (e) e.cancelBubble = !0;
                return !1
            }
        }
        this.delegate = function(dom, name, fn, bubble, active) {
            var de = delegatevents[name] || !1;
            if (!de) {
                de = {
                    a: [],
                    l: [],
                    f: function(e) {
                        var lst = de.l,
                            l = lst.length - 1;
                        var r = !1;
                        for (var a = l; a >= 0; a--) {
                            r = lst[a].call(e.target, e);
                            if (r === !1) return !1
                        }
                        return r
                    }
                };
                self.bind(dom, name, de.f, bubble, active);
                delegatevents[name] = de
            }
            if (self.ispage) {
                de.a = [self.id].concat(de.a);
                de.l = [fn].concat(de.l)
            } else {
                de.a.push(self.id);
                de.l.push(fn)
            }
        };
        this.undelegate = function(dom, name, fn, bubble, active) {
            var de = delegatevents[name] || !1;
            if (de && de.l) {
                for (var a = 0, l = de.l.length; a < l; a++) {
                    if (de.a[a] === self.id) {
                        de.a.splice(a);
                        de.l.splice(a);
                        if (de.a.length === 0) {
                            self._unbind(dom, name, de.l.f);
                            delegatevents[name] = null
                        }
                    }
                }
            }
        };
        this.bind = function(dom, name, fn, bubble, active) {
            var el = ("jquery" in dom) ? dom[0] : dom;
            self._bind(el, name, fn, bubble || !1, active || !1)
        };
        this._bind = function(el, name, fn, bubble, active) {
            self.events.push({
                e: el,
                n: name,
                f: fn,
                b: bubble,
                q: !1
            });
            (passiveSupported && active) ? el.addEventListener(name, fn, {
                passive: !1,
                capture: bubble
            }): el.addEventListener(name, fn, bubble || !1)
        };
        this._unbind = function(el, name, fn, bub) {
            if (delegatevents[name]) self.undelegate(el, name, fn, bub);
            else el.removeEventListener(name, fn, bub)
        };
        this.unbindAll = function() {
            for (var a = 0; a < self.events.length; a++) {
                var r = self.events[a];
                (r.q) ? r.e.unbind(r.n, r.f): self._unbind(r.e, r.n, r.f, r.b)
            }
        };
        this.showRails = function() {
            return self.showRail().showRailHr()
        };
        this.showRail = function() {
            if ((self.page.maxh !== 0) && (self.ispage || self.win.css('display') != 'none')) {
                self.rail.visibility = !0;
                self.rail.css('display', 'block')
            }
            return self
        };
        this.showRailHr = function() {
            if (self.railh) {
                if ((self.page.maxw !== 0) && (self.ispage || self.win.css('display') != 'none')) {
                    self.railh.visibility = !0;
                    self.railh.css('display', 'block')
                }
            }
            return self
        };
        this.hideRails = function() {
            return self.hideRail().hideRailHr()
        };
        this.hideRail = function() {
            self.rail.visibility = !1;
            self.rail.css('display', 'none');
            return self
        };
        this.hideRailHr = function() {
            if (self.railh) {
                self.railh.visibility = !1;
                self.railh.css('display', 'none')
            }
            return self
        };
        this.show = function() {
            self.hidden = !1;
            self.railslocked = !1;
            return self.showRails()
        };
        this.hide = function() {
            self.hidden = !0;
            self.railslocked = !0;
            return self.hideRails()
        };
        this.toggle = function() {
            return (self.hidden) ? self.show() : self.hide()
        };
        this.remove = function() {
            self.stop();
            if (self.cursortimeout) clearTimeout(self.cursortimeout);
            for (var n in self.delaylist)
                if (self.delaylist[n]) clearAnimationFrame(self.delaylist[n].h);
            self.doZoomOut();
            self.unbindAll();
            if (cap.isie9) self.win[0].detachEvent("onpropertychange", self.onAttributeChange);
            if (self.observer !== !1) self.observer.disconnect();
            if (self.observerremover !== !1) self.observerremover.disconnect();
            if (self.observerbody !== !1) self.observerbody.disconnect();
            self.events = null;
            if (self.cursor) {
                self.cursor.remove()
            }
            if (self.cursorh) {
                self.cursorh.remove()
            }
            if (self.rail) {
                self.rail.remove()
            }
            if (self.railh) {
                self.railh.remove()
            }
            if (self.zoom) {
                self.zoom.remove()
            }
            for (var a = 0; a < self.saved.css.length; a++) {
                var d = self.saved.css[a];
                d[0].css(d[1], (d[2] === undefined) ? '' : d[2])
            }
            self.saved = !1;
            self.me.data('__nicescroll', '');
            var lst = $.nicescroll;
            lst.each(function(i) {
                if (!this) return;
                if (this.id === self.id) {
                    delete lst[i];
                    for (var b = ++i; b < lst.length; b++, i++) lst[i] = lst[b];
                    lst.length--;
                    if (lst.length) delete lst[lst.length]
                }
            });
            for (var i in self) {
                self[i] = null;
                delete self[i]
            }
            self = null
        };
        this.scrollstart = function(fn) {
            this.onscrollstart = fn;
            return self
        };
        this.scrollend = function(fn) {
            this.onscrollend = fn;
            return self
        };
        this.scrollcancel = function(fn) {
            this.onscrollcancel = fn;
            return self
        };
        this.zoomin = function(fn) {
            this.onzoomin = fn;
            return self
        };
        this.zoomout = function(fn) {
            this.onzoomout = fn;
            return self
        };
        this.isScrollable = function(e) {
            var dom = (e.target) ? e.target : e;
            if (dom.nodeName == 'OPTION') return !0;
            while (dom && (dom.nodeType == 1) && (dom !== this.me[0]) && !(/^BODY|HTML/.test(dom.nodeName))) {
                var dd = $(dom);
                var ov = dd.css('overflowY') || dd.css('overflowX') || dd.css('overflow') || '';
                if (/scroll|auto/.test(ov)) return (dom.clientHeight != dom.scrollHeight);
                dom = (dom.parentNode) ? dom.parentNode : !1
            }
            return !1
        };
        this.getViewport = function(me) {
            var dom = (me && me.parentNode) ? me.parentNode : !1;
            while (dom && (dom.nodeType == 1) && !(/^BODY|HTML/.test(dom.nodeName))) {
                var dd = $(dom);
                if (/fixed|absolute/.test(dd.css("position"))) return dd;
                var ov = dd.css('overflowY') || dd.css('overflowX') || dd.css('overflow') || '';
                if ((/scroll|auto/.test(ov)) && (dom.clientHeight != dom.scrollHeight)) return dd;
                if (dd.getNiceScroll().length > 0) return dd;
                dom = (dom.parentNode) ? dom.parentNode : !1
            }
            return !1
        };
        this.triggerScrollStart = function(cx, cy, rx, ry, ms) {
            if (self.onscrollstart) {
                var info = {
                    type: "scrollstart",
                    current: {
                        x: cx,
                        y: cy
                    },
                    request: {
                        x: rx,
                        y: ry
                    },
                    end: {
                        x: self.newscrollx,
                        y: self.newscrolly
                    },
                    speed: ms
                };
                self.onscrollstart.call(self, info)
            }
        };
        this.triggerScrollEnd = function() {
            if (self.onscrollend) {
                var px = self.getScrollLeft();
                var py = self.getScrollTop();
                var info = {
                    type: "scrollend",
                    current: {
                        x: px,
                        y: py
                    },
                    end: {
                        x: px,
                        y: py
                    }
                };
                self.onscrollend.call(self, info)
            }
        };
        var scrolldiry = 0,
            scrolldirx = 0,
            scrolltmr = 0,
            scrollspd = 1;

        function doScrollRelative(px, py, chkscroll, iswheel) {
            if (!self.scrollrunning) {
                self.newscrolly = self.getScrollTop();
                self.newscrollx = self.getScrollLeft();
                scrolltmr = now()
            }
            var gap = (now() - scrolltmr);
            scrolltmr = now();
            if (gap > 350) {
                scrollspd = 1
            } else {
                scrollspd += (2 - scrollspd) / 10
            }
            px = px * scrollspd | 0;
            py = py * scrollspd | 0;
            if (px) {
                if (iswheel) {
                    if (px < 0) {
                        if (self.getScrollLeft() >= self.page.maxw) return !0
                    } else {
                        if (self.getScrollLeft() <= 0) return !0
                    }
                }
                var dx = px > 0 ? 1 : -1;
                if (scrolldirx !== dx) {
                    if (self.scrollmom) self.scrollmom.stop();
                    self.newscrollx = self.getScrollLeft();
                    scrolldirx = dx
                }
                self.lastdeltax -= px
            }
            if (py) {
                var chk = (function() {
                    var top = self.getScrollTop();
                    if (py < 0) {
                        if (top >= self.page.maxh) return !0
                    } else {
                        if (top <= 0) return !0
                    }
                })();
                if (chk) {
                    if (opt.nativeparentscrolling && chkscroll && !self.ispage && !self.zoomactive) return !0;
                    var ny = self.view.h >> 1;
                    if (self.newscrolly < -ny) {
                        self.newscrolly = -ny;
                        py = -1
                    } else if (self.newscrolly > self.page.maxh + ny) {
                        self.newscrolly = self.page.maxh + ny;
                        py = 1
                    } else py = 0
                }
                var dy = py > 0 ? 1 : -1;
                if (scrolldiry !== dy) {
                    if (self.scrollmom) self.scrollmom.stop();
                    self.newscrolly = self.getScrollTop();
                    scrolldiry = dy
                }
                self.lastdeltay -= py
            }
            if (py || px) {
                self.synched("relativexy", function() {
                    var dty = self.lastdeltay + self.newscrolly;
                    self.lastdeltay = 0;
                    var dtx = self.lastdeltax + self.newscrollx;
                    self.lastdeltax = 0;
                    if (!self.rail.drag) self.doScrollPos(dtx, dty)
                })
            }
        }
        var hasparentscrollingphase = !1;

        function execScrollWheel(e, hr, chkscroll) {
            var px, py;
            if (!chkscroll && hasparentscrollingphase) return !0;
            if (e.deltaMode === 0) {
                px = -(e.deltaX * (opt.mousescrollstep / (18 * 3))) | 0;
                py = -(e.deltaY * (opt.mousescrollstep / (18 * 3))) | 0
            } else if (e.deltaMode === 1) {
                px = -(e.deltaX * opt.mousescrollstep * 50 / 80) | 0;
                py = -(e.deltaY * opt.mousescrollstep * 50 / 80) | 0
            }
            if (hr && opt.oneaxismousemode && (px === 0) && py) {
                px = py;
                py = 0;
                if (chkscroll) {
                    var hrend = (px < 0) ? (self.getScrollLeft() >= self.page.maxw) : (self.getScrollLeft() <= 0);
                    if (hrend) {
                        py = px;
                        px = 0
                    }
                }
            }
            if (self.isrtlmode) px = -px;
            var chk = doScrollRelative(px, py, chkscroll, !0);
            if (chk) {
                if (chkscroll) hasparentscrollingphase = !0
            } else {
                hasparentscrollingphase = !1;
                e.stopImmediatePropagation();
                return e.preventDefault()
            }
        }
        this.onmousewheel = function(e) {
            if (self.wheelprevented || self.locked) return !1;
            if (self.railslocked) {
                self.debounced("checkunlock", self.resize, 250);
                return !1
            }
            if (self.rail.drag) return self.cancelEvent(e);
            if (opt.oneaxismousemode === "auto" && e.deltaX !== 0) opt.oneaxismousemode = !1;
            if (opt.oneaxismousemode && e.deltaX === 0) {
                if (!self.rail.scrollable) {
                    if (self.railh && self.railh.scrollable) {
                        return self.onmousewheelhr(e)
                    } else {
                        return !0
                    }
                }
            }
            var nw = now();
            var chk = !1;
            if (opt.preservenativescrolling && ((self.checkarea + 600) < nw)) {
                self.nativescrollingarea = self.isScrollable(e);
                chk = !0
            }
            self.checkarea = nw;
            if (self.nativescrollingarea) return !0;
            var ret = execScrollWheel(e, !1, chk);
            if (ret) self.checkarea = 0;
            return ret
        };
        this.onmousewheelhr = function(e) {
            if (self.wheelprevented) return;
            if (self.railslocked || !self.railh.scrollable) return !0;
            if (self.rail.drag) return self.cancelEvent(e);
            var nw = now();
            var chk = !1;
            if (opt.preservenativescrolling && ((self.checkarea + 600) < nw)) {
                self.nativescrollingarea = self.isScrollable(e);
                chk = !0
            }
            self.checkarea = nw;
            if (self.nativescrollingarea) return !0;
            if (self.railslocked) return self.cancelEvent(e);
            return execScrollWheel(e, !0, chk)
        };
        this.stop = function() {
            self.cancelScroll();
            if (self.scrollmon) self.scrollmon.stop();
            self.cursorfreezed = !1;
            self.scroll.y = Math.round(self.getScrollTop() * (1 / self.scrollratio.y));
            self.noticeCursor();
            return self
        };
        this.getTransitionSpeed = function(dif) {
            return 80 + (dif / 72) * opt.scrollspeed | 0
        };
        if (!opt.smoothscroll) {
            this.doScrollLeft = function(x, spd) {
                var y = self.getScrollTop();
                self.doScrollPos(x, y, spd)
            };
            this.doScrollTop = function(y, spd) {
                var x = self.getScrollLeft();
                self.doScrollPos(x, y, spd)
            };
            this.doScrollPos = function(x, y, spd) {
                var nx = (x > self.page.maxw) ? self.page.maxw : x;
                if (nx < 0) nx = 0;
                var ny = (y > self.page.maxh) ? self.page.maxh : y;
                if (ny < 0) ny = 0;
                self.synched('scroll', function() {
                    self.setScrollTop(ny);
                    self.setScrollLeft(nx)
                })
            };
            this.cancelScroll = function() {}
        } else if (self.ishwscroll && cap.hastransition && opt.usetransition && !!opt.smoothscroll) {
            var lasttransitionstyle = '';
            this.resetTransition = function() {
                lasttransitionstyle = '';
                self.doc.css(cap.prefixstyle + 'transition-duration', '0ms')
            };
            this.prepareTransition = function(dif, istime) {
                var ex = (istime) ? dif : self.getTransitionSpeed(dif);
                var trans = ex + 'ms';
                if (lasttransitionstyle !== trans) {
                    lasttransitionstyle = trans;
                    self.doc.css(cap.prefixstyle + 'transition-duration', trans)
                }
                return ex
            };
            this.doScrollLeft = function(x, spd) {
                var y = (self.scrollrunning) ? self.newscrolly : self.getScrollTop();
                self.doScrollPos(x, y, spd)
            };
            this.doScrollTop = function(y, spd) {
                var x = (self.scrollrunning) ? self.newscrollx : self.getScrollLeft();
                self.doScrollPos(x, y, spd)
            };
            this.cursorupdate = {
                running: !1,
                start: function() {
                    var m = this;
                    if (m.running) return;
                    m.running = !0;
                    var loop = function() {
                        if (m.running) setAnimationFrame(loop);
                        self.showCursor(self.getScrollTop(), self.getScrollLeft());
                        self.notifyScrollEvent(self.win[0])
                    };
                    setAnimationFrame(loop)
                },
                stop: function() {
                    this.running = !1
                }
            };
            this.doScrollPos = function(x, y, spd) {
                var py = self.getScrollTop();
                var px = self.getScrollLeft();
                if (((self.newscrolly - py) * (y - py) < 0) || ((self.newscrollx - px) * (x - px) < 0)) self.cancelScroll();
                if (!opt.bouncescroll) {
                    if (y < 0) y = 0;
                    else if (y > self.page.maxh) y = self.page.maxh;
                    if (x < 0) x = 0;
                    else if (x > self.page.maxw) x = self.page.maxw
                } else {
                    if (y < 0) y = y / 2 | 0;
                    else if (y > self.page.maxh) y = self.page.maxh + (y - self.page.maxh) / 2 | 0;
                    if (x < 0) x = x / 2 | 0;
                    else if (x > self.page.maxw) x = self.page.maxw + (x - self.page.maxw) / 2 | 0
                }
                if (self.scrollrunning && x == self.newscrollx && y == self.newscrolly) return !1;
                self.newscrolly = y;
                self.newscrollx = x;
                var top = self.getScrollTop();
                var lft = self.getScrollLeft();
                var dst = {};
                dst.x = x - lft;
                dst.y = y - top;
                var dd = Math.sqrt((dst.x * dst.x) + (dst.y * dst.y)) | 0;
                var ms = self.prepareTransition(dd);
                if (!self.scrollrunning) {
                    self.scrollrunning = !0;
                    self.triggerScrollStart(lft, top, x, y, ms);
                    self.cursorupdate.start()
                }
                self.scrollendtrapped = !0;
                if (!cap.transitionend) {
                    if (self.scrollendtrapped) clearTimeout(self.scrollendtrapped);
                    self.scrollendtrapped = setTimeout(self.onScrollTransitionEnd, ms)
                }
                self.setScrollTop(self.newscrolly);
                self.setScrollLeft(self.newscrollx)
            };
            this.cancelScroll = function() {
                if (!self.scrollendtrapped) return !0;
                var py = self.getScrollTop();
                var px = self.getScrollLeft();
                self.scrollrunning = !1;
                if (!cap.transitionend) clearTimeout(cap.transitionend);
                self.scrollendtrapped = !1;
                self.resetTransition();
                self.setScrollTop(py);
                if (self.railh) self.setScrollLeft(px);
                if (self.timerscroll && self.timerscroll.tm) clearInterval(self.timerscroll.tm);
                self.timerscroll = !1;
                self.cursorfreezed = !1;
                self.cursorupdate.stop();
                self.showCursor(py, px);
                return self
            };
            this.onScrollTransitionEnd = function() {
                if (!self.scrollendtrapped) return;
                var py = self.getScrollTop();
                var px = self.getScrollLeft();
                if (py < 0) py = 0;
                else if (py > self.page.maxh) py = self.page.maxh;
                if (px < 0) px = 0;
                else if (px > self.page.maxw) px = self.page.maxw;
                if ((py != self.newscrolly) || (px != self.newscrollx)) return self.doScrollPos(px, py, opt.snapbackspeed);
                if (self.scrollrunning) self.triggerScrollEnd();
                self.scrollrunning = !1;
                self.scrollendtrapped = !1;
                self.resetTransition();
                self.timerscroll = !1;
                self.setScrollTop(py);
                if (self.railh) self.setScrollLeft(px);
                self.cursorupdate.stop();
                self.noticeCursor(!1, py, px);
                self.cursorfreezed = !1
            }
        } else {
            this.doScrollLeft = function(x, spd) {
                var y = (self.scrollrunning) ? self.newscrolly : self.getScrollTop();
                self.doScrollPos(x, y, spd)
            };
            this.doScrollTop = function(y, spd) {
                var x = (self.scrollrunning) ? self.newscrollx : self.getScrollLeft();
                self.doScrollPos(x, y, spd)
            };
            this.doScrollPos = function(x, y, spd) {
                var py = self.getScrollTop();
                var px = self.getScrollLeft();
                if (((self.newscrolly - py) * (y - py) < 0) || ((self.newscrollx - px) * (x - px) < 0)) self.cancelScroll();
                var clipped = !1;
                if (!self.bouncescroll || !self.rail.visibility) {
                    if (y < 0) {
                        y = 0;
                        clipped = !0
                    } else if (y > self.page.maxh) {
                        y = self.page.maxh;
                        clipped = !0
                    }
                }
                if (!self.bouncescroll || !self.railh.visibility) {
                    if (x < 0) {
                        x = 0;
                        clipped = !0
                    } else if (x > self.page.maxw) {
                        x = self.page.maxw;
                        clipped = !0
                    }
                }
                if (self.scrollrunning && (self.newscrolly === y) && (self.newscrollx === x)) return !0;
                self.newscrolly = y;
                self.newscrollx = x;
                self.dst = {};
                self.dst.x = x - px;
                self.dst.y = y - py;
                self.dst.px = px;
                self.dst.py = py;
                var dd = Math.sqrt((self.dst.x * self.dst.x) + (self.dst.y * self.dst.y)) | 0;
                var ms = self.getTransitionSpeed(dd);
                self.bzscroll = {};
                var p3 = (clipped) ? 1 : 0.58;
                self.bzscroll.x = new BezierClass(px, self.newscrollx, ms, 0, 0, p3, 1);
                self.bzscroll.y = new BezierClass(py, self.newscrolly, ms, 0, 0, p3, 1);
                var loopid = now();
                var loop = function() {
                    if (!self.scrollrunning) return;
                    var x = self.bzscroll.y.getPos();
                    self.setScrollLeft(self.bzscroll.x.getNow());
                    self.setScrollTop(self.bzscroll.y.getNow());
                    if (x <= 1) {
                        self.timer = setAnimationFrame(loop)
                    } else {
                        self.scrollrunning = !1;
                        self.timer = 0;
                        self.triggerScrollEnd()
                    }
                };
                if (!self.scrollrunning) {
                    self.triggerScrollStart(px, py, x, y, ms);
                    self.scrollrunning = !0;
                    self.timer = setAnimationFrame(loop)
                }
            };
            this.cancelScroll = function() {
                if (self.timer) clearAnimationFrame(self.timer);
                self.timer = 0;
                self.bzscroll = !1;
                self.scrollrunning = !1;
                return self
            }
        }
        this.doScrollBy = function(stp, relative) {
            doScrollRelative(0, stp)
        };
        this.doScrollLeftBy = function(stp, relative) {
            doScrollRelative(stp, 0)
        };
        this.doScrollTo = function(pos, relative) {
            var ny = (relative) ? Math.round(pos * self.scrollratio.y) : pos;
            if (ny < 0) ny = 0;
            else if (ny > self.page.maxh) ny = self.page.maxh;
            self.cursorfreezed = !1;
            self.doScrollTop(pos)
        };
        this.checkContentSize = function() {
            var pg = self.getContentSize();
            if ((pg.h != self.page.h) || (pg.w != self.page.w)) self.resize(!1, pg)
        };
        self.onscroll = function(e) {
            if (self.rail.drag) return;
            if (!self.cursorfreezed) {
                self.synched('scroll', function() {
                    self.scroll.y = Math.round(self.getScrollTop() / self.scrollratio.y);
                    if (self.railh) self.scroll.x = Math.round(self.getScrollLeft() / self.scrollratio.x);
                    self.noticeCursor()
                })
            }
        };
        self.bind(self.docscroll, "scroll", self.onscroll);
        this.doZoomIn = function(e) {
            if (self.zoomactive) return;
            self.zoomactive = !0;
            self.zoomrestore = {
                style: {}
            };
            var lst = ['position', 'top', 'left', 'zIndex', 'backgroundColor', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight'];
            var win = self.win[0].style;
            for (var a in lst) {
                var pp = lst[a];
                self.zoomrestore.style[pp] = (win[pp] !== undefined) ? win[pp] : ''
            }
            self.zoomrestore.style.width = self.win.css('width');
            self.zoomrestore.style.height = self.win.css('height');
            self.zoomrestore.padding = {
                w: self.win.outerWidth() - self.win.width(),
                h: self.win.outerHeight() - self.win.height()
            };
            if (cap.isios4) {
                self.zoomrestore.scrollTop = $window.scrollTop();
                $window.scrollTop(0)
            }
            self.win.css({
                position: (cap.isios4) ? "absolute" : "fixed",
                top: 0,
                left: 0,
                zIndex: globalmaxzindex + 100,
                margin: 0
            });
            var bkg = self.win.css("backgroundColor");
            if ("" === bkg || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(bkg)) self.win.css("backgroundColor", "#fff");
            self.rail.css({
                zIndex: globalmaxzindex + 101
            });
            self.zoom.css({
                zIndex: globalmaxzindex + 102
            });
            self.zoom.css('backgroundPosition', '0 -18px');
            self.resizeZoom();
            if (self.onzoomin) self.onzoomin.call(self);
            return self.cancelEvent(e)
        };
        this.doZoomOut = function(e) {
            if (!self.zoomactive) return;
            self.zoomactive = !1;
            self.win.css("margin", "");
            self.win.css(self.zoomrestore.style);
            if (cap.isios4) {
                $window.scrollTop(self.zoomrestore.scrollTop)
            }
            self.rail.css({
                "z-index": self.zindex
            });
            self.zoom.css({
                "z-index": self.zindex
            });
            self.zoomrestore = !1;
            self.zoom.css('backgroundPosition', '0 0');
            self.onResize();
            if (self.onzoomout) self.onzoomout.call(self);
            return self.cancelEvent(e)
        };
        this.doZoom = function(e) {
            return (self.zoomactive) ? self.doZoomOut(e) : self.doZoomIn(e)
        };
        this.resizeZoom = function() {
            if (!self.zoomactive) return;
            var py = self.getScrollTop();
            self.win.css({
                width: $window.width() - self.zoomrestore.padding.w + "px",
                height: $window.height() - self.zoomrestore.padding.h + "px"
            });
            self.onResize();
            self.setScrollTop(Math.min(self.page.maxh, py))
        };
        this.init();
        $.nicescroll.push(this)
    };
    var ScrollMomentumClass2D = function(nc) {
        var self = this;
        this.nc = nc;
        this.lastx = 0;
        this.lasty = 0;
        this.speedx = 0;
        this.speedy = 0;
        this.lasttime = 0;
        this.steptime = 0;
        this.snapx = !1;
        this.snapy = !1;
        this.demulx = 0;
        this.demuly = 0;
        this.lastscrollx = -1;
        this.lastscrolly = -1;
        this.chkx = 0;
        this.chky = 0;
        this.timer = 0;
        this.reset = function(px, py) {
            self.stop();
            self.steptime = 0;
            self.lasttime = now();
            self.speedx = 0;
            self.speedy = 0;
            self.lastx = px;
            self.lasty = py;
            self.lastscrollx = -1;
            self.lastscrolly = -1
        };
        this.update = function(px, py) {
            var tm = now();
            self.steptime = tm - self.lasttime;
            self.lasttime = tm;
            var dy = py - self.lasty;
            var dx = px - self.lastx;
            var sy = self.nc.getScrollTop();
            var sx = self.nc.getScrollLeft();
            var newy = sy + dy;
            var newx = sx + dx;
            self.snapx = (newx < 0) || (newx > self.nc.page.maxw);
            self.snapy = (newy < 0) || (newy > self.nc.page.maxh);
            self.speedx = dx;
            self.speedy = dy;
            self.lastx = px;
            self.lasty = py
        };
        this.stop = function() {
            self.nc.unsynched("domomentum2d");
            if (self.timer) clearTimeout(self.timer);
            self.timer = 0;
            self.lastscrollx = -1;
            self.lastscrolly = -1
        };
        this.doSnapy = function(nx, ny) {
            var snap = !1;
            if (ny < 0) {
                ny = 0;
                snap = !0
            } else if (ny > self.nc.page.maxh) {
                ny = self.nc.page.maxh;
                snap = !0
            }
            if (nx < 0) {
                nx = 0;
                snap = !0
            } else if (nx > self.nc.page.maxw) {
                nx = self.nc.page.maxw;
                snap = !0
            }(snap) ? self.nc.doScrollPos(nx, ny, self.nc.opt.snapbackspeed): self.nc.triggerScrollEnd()
        };
        this.doMomentum = function(gp) {
            var t = now();
            var l = (gp) ? t + gp : self.lasttime;
            var sl = self.nc.getScrollLeft();
            var st = self.nc.getScrollTop();
            var pageh = self.nc.page.maxh;
            var pagew = self.nc.page.maxw;
            self.speedx = (pagew > 0) ? Math.min(60, self.speedx) : 0;
            self.speedy = (pageh > 0) ? Math.min(60, self.speedy) : 0;
            var chk = l && (t - l) <= 60;
            if ((st < 0) || (st > pageh) || (sl < 0) || (sl > pagew)) chk = !1;
            var sy = (self.speedy && chk) ? self.speedy : !1;
            var sx = (self.speedx && chk) ? self.speedx : !1;
            if (sy || sx) {
                var tm = Math.max(16, self.steptime);
                if (tm > 50) {
                    var xm = tm / 50;
                    self.speedx *= xm;
                    self.speedy *= xm;
                    tm = 50
                }
                self.demulxy = 0;
                self.lastscrollx = self.nc.getScrollLeft();
                self.chkx = self.lastscrollx;
                self.lastscrolly = self.nc.getScrollTop();
                self.chky = self.lastscrolly;
                var nx = self.lastscrollx;
                var ny = self.lastscrolly;
                var onscroll = function() {
                    var df = ((now() - t) > 600) ? 0.04 : 0.02;
                    if (self.speedx) {
                        nx = Math.floor(self.lastscrollx - (self.speedx * (1 - self.demulxy)));
                        self.lastscrollx = nx;
                        if ((nx < 0) || (nx > pagew)) df = 0.10
                    }
                    if (self.speedy) {
                        ny = Math.floor(self.lastscrolly - (self.speedy * (1 - self.demulxy)));
                        self.lastscrolly = ny;
                        if ((ny < 0) || (ny > pageh)) df = 0.10
                    }
                    self.demulxy = Math.min(1, self.demulxy + df);
                    self.nc.synched("domomentum2d", function() {
                        if (self.speedx) {
                            var scx = self.nc.getScrollLeft();
                            self.chkx = nx;
                            self.nc.setScrollLeft(nx)
                        }
                        if (self.speedy) {
                            var scy = self.nc.getScrollTop();
                            self.chky = ny;
                            self.nc.setScrollTop(ny)
                        }
                        if (!self.timer) {
                            self.nc.hideCursor();
                            self.doSnapy(nx, ny)
                        }
                    });
                    if (self.demulxy < 1) {
                        self.timer = setTimeout(onscroll, tm)
                    } else {
                        self.stop();
                        self.nc.hideCursor();
                        self.doSnapy(nx, ny)
                    }
                };
                onscroll()
            } else {
                self.doSnapy(self.nc.getScrollLeft(), self.nc.getScrollTop())
            }
        }
    };
    var _scrollTop = jQuery.fn.scrollTop;
    jQuery.cssHooks.pageYOffset = {
        get: function(elem, computed, extra) {
            var nice = $.data(elem, '__nicescroll') || !1;
            return (nice && nice.ishwscroll) ? nice.getScrollTop() : _scrollTop.call(elem)
        },
        set: function(elem, value) {
            var nice = $.data(elem, '__nicescroll') || !1;
            (nice && nice.ishwscroll) ? nice.setScrollTop(parseInt(value)): _scrollTop.call(elem, value);
            return this
        }
    };
    jQuery.fn.scrollTop = function(value) {
        if (value === undefined) {
            var nice = (this[0]) ? $.data(this[0], '__nicescroll') || !1 : !1;
            return (nice && nice.ishwscroll) ? nice.getScrollTop() : _scrollTop.call(this)
        } else {
            return this.each(function() {
                var nice = $.data(this, '__nicescroll') || !1;
                (nice && nice.ishwscroll) ? nice.setScrollTop(parseInt(value)): _scrollTop.call($(this), value)
            })
        }
    };
    var _scrollLeft = jQuery.fn.scrollLeft;
    $.cssHooks.pageXOffset = {
        get: function(elem, computed, extra) {
            var nice = $.data(elem, '__nicescroll') || !1;
            return (nice && nice.ishwscroll) ? nice.getScrollLeft() : _scrollLeft.call(elem)
        },
        set: function(elem, value) {
            var nice = $.data(elem, '__nicescroll') || !1;
            (nice && nice.ishwscroll) ? nice.setScrollLeft(parseInt(value)): _scrollLeft.call(elem, value);
            return this
        }
    };
    jQuery.fn.scrollLeft = function(value) {
        if (value === undefined) {
            var nice = (this[0]) ? $.data(this[0], '__nicescroll') || !1 : !1;
            return (nice && nice.ishwscroll) ? nice.getScrollLeft() : _scrollLeft.call(this)
        } else {
            return this.each(function() {
                var nice = $.data(this, '__nicescroll') || !1;
                (nice && nice.ishwscroll) ? nice.setScrollLeft(parseInt(value)): _scrollLeft.call($(this), value)
            })
        }
    };
    var NiceScrollArray = function(doms) {
        var self = this;
        this.length = 0;
        this.name = "nicescrollarray";
        this.each = function(fn) {
            $.each(self, fn);
            return self
        };
        this.push = function(nice) {
            self[self.length] = nice;
            self.length++
        };
        this.eq = function(idx) {
            return self[idx]
        };
        if (doms) {
            for (var a = 0; a < doms.length; a++) {
                var nice = $.data(doms[a], '__nicescroll') || !1;
                if (nice) {
                    this[this.length] = nice;
                    this.length++
                }
            }
        }
        return this
    };

    function mplex(el, lst, fn) {
        for (var a = 0, l = lst.length; a < l; a++) fn(el, lst[a]);
    }
    mplex(NiceScrollArray.prototype, ['show', 'hide', 'toggle', 'onResize', 'resize', 'remove', 'stop', 'doScrollPos'], function(e, n) {
        e[n] = function() {
            var args = arguments;
            return this.each(function() {
                this[n].apply(this, args)
            })
        }
    });
    jQuery.fn.getNiceScroll = function(index) {
        if (index === undefined) {
            return new NiceScrollArray(this)
        } else {
            return this[index] && $.data(this[index], '__nicescroll') || !1
        }
    };
    var pseudos = jQuery.expr.pseudos || jQuery.expr[':'];
    pseudos.nicescroll = function(a) {
        return $.data(a, '__nicescroll') !== undefined
    };
    $.fn.niceScroll = function(wrapper, _opt) {
        if (_opt === undefined && typeof wrapper == "object" && !("jquery" in wrapper)) {
            _opt = wrapper;
            wrapper = !1
        }
        var ret = new NiceScrollArray();
        this.each(function() {
            var $this = $(this);
            var opt = $.extend({}, _opt);
            if (wrapper || !1) {
                var wrp = $(wrapper);
                opt.doc = (wrp.length > 1) ? $(wrapper, $this) : wrp;
                opt.win = $this
            }
            var docundef = !("doc" in opt);
            if (!docundef && !("win" in opt)) opt.win = $this;
            var nice = $this.data('__nicescroll') || !1;
            if (!nice) {
                opt.doc = opt.doc || $this;
                nice = new NiceScrollClass(opt, $this);
                $this.data('__nicescroll', nice)
            }
            ret.push(nice)
        });
        return (ret.length === 1) ? ret[0] : ret
    };
    _win.NiceScroll = {
        getjQuery: function() {
            return jQuery
        }
    };
    if (!$.nicescroll) {
        $.nicescroll = new NiceScrollArray();
        $.nicescroll.options = _globaloptions
    }
}));
jQuery(function($) {
    function OnePageScroll() {
        if ($(document).find('.page__slider').length > 0) {
            $(".page__slider").onepage_scroll({
                responsiveFallback: 992,
                loop: !1,
                keyboard: !0,
                beforeMove: function() {
                    $('.onepage-pagination li a span').remove()
                },
                afterMove: function(index) {
                    $('.js-page-title li').removeClass('active');
                    $('.js-page-title li:nth-child(' + index + ')').addClass('active');
                    let pageName = $('.js-page-title .active').text();
                    $('.onepage-pagination li .active').prepend('<span>' + pageName + '</span>')
                }
            })
        }
    }

    function clickSlider() {
        $('[data-target]').on('click', function(event) {
            event.preventDefault();
            let blockId = $(this).data('target');
            hideSecondMenu();
            closePageInfo();
            if ($(window).width() <= 991) {
                $('html,body').animate({
                    scrollTop: $(blockId)[0].offsetTop - 76
                }, 500)
            } else {
                let blockIndex = $(blockId).index() + 1;
                $(".page__slider").moveTo(blockIndex)
            }
        })
    }

    function showDarkOverlay() {
        $('.dark__overlay').addClass('active')
    }

    function hideDarkOverlay() {
        $('.dark__overlay').removeClass('active')
    }

    function showFadeOverlay() {
        $('.fade__overlay').addClass('active')
    }

    function hideFadeOverlay() {
        $('.fade__overlay').removeClass('active')
    }

    function showSecondMenu() {
        showDarkOverlay();
        $('body').addClass('fixed');
        $('.js-burger-menu').addClass('active')
    }

    function hideSecondMenu() {
        hideDarkOverlay();
        $('body').removeClass('fixed');
        $('.js-burger-menu').removeClass('active')
    }

    function initalSecondMenu() {
        $('.page__slider >section').each(function() {
            const $elm = $(this);
            let setIdToData = $elm.attr('id');
            let setDataToName = $elm.data('menu-item');
            $('.js-block-menu ul').append('<li><a href="#' + setIdToData + '" data-target="#' + setIdToData + '">' + setDataToName + '</a></li>')
        })
    };
    $('.burger').on('click', function() {
        showSecondMenu()
    });
    $('.js-close-menu').on('click', function() {
        hideSecondMenu()
    });
    $('.js-close-info').on('click', function() {
        closePageInfo()
    });
    $('.js-next-section').on('click', function() {
        $(".page__slider").moveDown();
        closePageInfo()
    });
    $(document).mouseup(function(e) {
        var div = $(".js-block-menu");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            hideSecondMenu()
        }
    });
    $(document).mouseup(function(e) {
        var div = $(".image__popup");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            closePopUp()
        }
    });

    function closePageInfo() {
        $('.js-page-info').removeClass('active');
        $('.js-page-info .info__img, .js-page-info .info__text').html('');
        $('header').removeClass('open__info');
        $('body').removeClass('fixed')
    }
    $('.content__item').on('click', function(e) {
        e.preventDefault();
        let $elm = $(this);
        let $pageImg = $elm.find('.hide__content figure');
        let $pageText = $elm.find('.hide__content');
        $pageImg.addClass('active');
        $pageImg.clone().appendTo($('.js-page-info .info__img'));
        $pageText.clone().appendTo($('.js-page-info .info__text'));
        $('body').addClass('fixed');
        $('.js-page-info').addClass('active');
        $('header').addClass('open__info')
    });

    function closePopUp() {
        $('.image__popup').removeClass('active');
        hideFadeOverlay()
    }
    $('.graphs__inner').on('click', 'li', function() {
        const $elm = $(this);
        const $image = $elm.find('img');
        const $imagePopUp = $('.image__popup');
        const $imageInPopUp = $imagePopUp.find('img');
        $imageInPopUp.remove();
        $image.clone().appendTo($imagePopUp);
        showFadeOverlay();
        $imagePopUp.addClass('active')
    });
    $('.js-close-popup').on('click', function() {
        closePopUp()
    });
    $(document).ready(function() {
        $(".info__text").niceScroll({
            cursorcolor: "#1c9f9f",
            cursorwidth: "8px",
            cursorborder: "0px solid #fff",
            cursorborderradius: "0px",
            autohidemode: "scroll",
            background: "#e9e9e9"
        });
        OnePageScroll();
        initalSecondMenu();
        clickSlider();
        let pageName = $('.js-page-title .active').text();
        $('.onepage-pagination li .active').prepend('<span>' + pageName + '</span>')
    })
})