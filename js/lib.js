/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransitions-shiv-cssclasses-testprop-testallprops-domprefixes-load
 */
;
window.Modernizr = function (a, b, c) {
    function x(a) {
      j.cssText = a
    }

    function y(a, b) {
      return x(prefixes.join(a + ";") + (b || ""))
    }

    function z(a, b) {
      return typeof a === b
    }

    function A(a, b) {
      return !!~("" + a).indexOf(b)
    }

    function B(a, b) {
      for (var d in a) {
        var e = a[d];
        if (!A(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
      }
      return !1
    }

    function C(a, b, d) {
      for (var e in a) {
        var f = b[a[e]];
        if (f !== c) return d === !1 ? a[e] : z(f, "function") ? f.bind(d || b) : f
      }
      return !1
    }

    function D(a, b, c) {
      var d = a.charAt(0).toUpperCase() + a.slice(1),
        e = (a + " " + n.join(d + " ") + d).split(" ");
      return z(b, "string") || z(b, "undefined") ? B(e, b) : (e = (a + " " + o.join(d + " ") + d).split(" "), C(e, b, c))
    }
    var d = "2.6.2",
      e = {},
      f = !0,
      g = b.documentElement,
      h = "modernizr",
      i = b.createElement(h),
      j = i.style,
      k, l = {}.toString,
      m = "Webkit Moz O ms",
      n = m.split(" "),
      o = m.toLowerCase().split(" "),
      p = {},
      q = {},
      r = {},
      s = [],
      t = s.slice,
      u, v = {}.hasOwnProperty,
      w;
    !z(v, "undefined") && !z(v.call, "undefined") ? w = function (a, b) {
      return v.call(a, b)
    } : w = function (a, b) {
      return b in a && z(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function (b) {
      var c = this;
      if (typeof c != "function") throw new TypeError;
      var d = t.call(arguments, 1),
        e = function () {
          if (this instanceof e) {
            var a = function () {};
            a.prototype = c.prototype;
            var f = new a,
              g = c.apply(f, d.concat(t.call(arguments)));
            return Object(g) === g ? g : f
          }
          return c.apply(b, d.concat(t.call(arguments)))
        };
      return e
    }), p.csstransitions = function () {
      return D("transition")
    };
    for (var E in p) w(p, E) && (u = E.toLowerCase(), e[u] = p[E](), s.push((e[u] ? "" : "no-") + u));
    return e.addTest = function (a, b) {
        if (typeof a == "object")
          for (var d in a) w(a, d) && e.addTest(d, a[d]);
        else {
          a = a.toLowerCase();
          if (e[a] !== c) return e;
          b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
      }, x(""), i = k = null,
      function (a, b) {
        function k(a, b) {
          var c = a.createElement("p"),
            d = a.getElementsByTagName("head")[0] || a.documentElement;
          return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
        }

        function l() {
          var a = r.elements;
          return typeof a == "string" ? a.split(" ") : a
        }

        function m(a) {
          var b = i[a[g]];
          return b || (b = {}, h++, a[g] = h, i[h] = b), b
        }

        function n(a, c, f) {
          c || (c = b);
          if (j) return c.createElement(a);
          f || (f = m(c));
          var g;
          return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
        }

        function o(a, c) {
          a || (a = b);
          if (j) return a.createDocumentFragment();
          c = c || m(a);
          var d = c.frag.cloneNode(),
            e = 0,
            f = l(),
            g = f.length;
          for (; e < g; e++) d.createElement(f[e]);
          return d
        }

        function p(a, b) {
          b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
            return r.shivMethods ? n(c, a, b) : b.createElem(c)
          }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function (a) {
            return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
          }) + ");return n}")(r, b.frag)
        }

        function q(a) {
          a || (a = b);
          var c = m(a);
          return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
        }
        var c = a.html5 || {},
          d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
          e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
          f, g = "_html5shiv",
          h = 0,
          i = {},
          j;
        (function () {
          try {
            var a = b.createElement("a");
            a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function () {
              b.createElement("a");
              var a = b.createDocumentFragment();
              return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
            }()
          } catch (c) {
            f = !0, j = !0
          }
        })();
        var r = {
          elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
          shivCSS: c.shivCSS !== !1,
          supportsUnknownElements: j,
          shivMethods: c.shivMethods !== !1,
          type: "default",
          shivDocument: q,
          createElement: n,
          createDocumentFragment: o
        };
        a.html5 = r, q(b)
      }(this, b), e._version = d, e._domPrefixes = o, e._cssomPrefixes = n, e.testProp = function (a) {
        return B([a])
      }, e.testAllProps = D, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + s.join(" ") : ""), e
  }(this, this.document),
  function (a, b, c) {
    function d(a) {
      return "[object Function]" == o.call(a)
    }

    function e(a) {
      return "string" == typeof a
    }

    function f() {}

    function g(a) {
      return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function h() {
      var a = p.shift();
      q = 1, a ? a.t ? m(function () {
        ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
      }, 0) : (a(), h()) : q = 0
    }

    function i(a, c, d, e, f, i, j) {
      function k(b) {
        if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
          "img" != a && m(function () {
            t.removeChild(l)
          }, 50);
          for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
        }
      }
      var j = j || B.errorTimeout,
        l = b.createElement(a),
        o = 0,
        r = 0,
        u = {
          t: d,
          s: c,
          e: f,
          a: i,
          x: j
        };
      1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
        k.call(this, r)
      }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }

    function j(a, b, c, d, f) {
      return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
    }

    function k() {
      var a = B;
      return a.loader = {
        load: j,
        i: 0
      }, a
    }
    var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName("script")[0],
      o = {}.toString,
      p = [],
      q = 0,
      r = "MozAppearance" in l.style,
      s = r && !!b.createRange().compareNode,
      t = s ? l : n.parentNode,
      l = a.opera && "[object Opera]" == o.call(a.opera),
      l = !!b.attachEvent && !l,
      u = r ? "object" : l ? "script" : "img",
      v = l ? "script" : u,
      w = Array.isArray || function (a) {
        return "[object Array]" == o.call(a)
      },
      x = [],
      y = {},
      z = {
        timeout: function (a, b) {
          return b.length && (a.timeout = b[0]), a
        }
      },
      A, B;
    B = function (a) {
      function b(a) {
        var a = a.split("!"),
          b = x.length,
          c = a.pop(),
          d = a.length,
          c = {
            url: c,
            origUrl: c,
            prefixes: a
          },
          e, f, g;
        for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
        for (f = 0; f < b; f++) c = x[f](c);
        return c
      }

      function g(a, e, f, g, h) {
        var i = b(a),
          j = i.autoCallback;
        i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
          k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
        })))
      }

      function h(a, b) {
        function c(a, c) {
          if (a) {
            if (e(a)) c || (j = function () {
              var a = [].slice.call(arguments);
              k.apply(this, a), l()
            }), g(a, j, b, 0, h);
            else if (Object(a) === a)
              for (n in m = function () {
                  var b = 0,
                    c;
                  for (c in a) a.hasOwnProperty(c) && b++;
                  return b
                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () {
                var a = [].slice.call(arguments);
                k.apply(this, a), l()
              } : j[n] = function (a) {
                return function () {
                  var b = [].slice.call(arguments);
                  a && a.apply(this, b), l()
                }
              }(k[n])), g(a[n], j, b, n, h))
          } else !c && l()
        }
        var h = !!a.test,
          i = a.load || a.both,
          j = a.callback || f,
          k = j,
          l = a.complete || f,
          m, n;
        c(h ? a.yep : a.nope, !!i), i && c(i)
      }
      var i, j, l = this.yepnope.loader;
      if (e(a)) g(a, 0, l, 0);
      else if (w(a))
        for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
      else Object(a) === a && h(a, l)
    }, B.addPrefix = function (a, b) {
      z[a] = b
    }, B.addFilter = function (a) {
      x.push(a)
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () {
      b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
      var k = b.createElement("script"),
        l, o, e = e || B.errorTimeout;
      k.src = a;
      for (o in d) k.setAttribute(o, d[o]);
      c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
        !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
      }, m(function () {
        l || (l = 1, c(1))
      }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
      var e = b.createElement("link"),
        j, c = i ? h : c || f;
      e.href = a, e.rel = "stylesheet", e.type = "text/css";
      for (j in d) e.setAttribute(j, d[j]);
      g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
  }(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
  };


/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.7
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
! function (a) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
  "use strict";
  var b = window.Slick || {};
  b = function () {
    function c(c, d) {
      var f, e = this;
      e.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: a(c),
        appendDots: a(c),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (a, b) {
          return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (b + 1) + "</button>"
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
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
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, e.initials = {
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
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.hidden = "hidden", e.paused = !1, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, f, d), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0), e.checkResponsive(!0)
    }
    var b = 0;
    return c
  }(), b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
    var e = this;
    if ("boolean" == typeof c) d = c, c = null;
    else if (0 > c || c >= e.slideCount) return !1;
    e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
      a(c).attr("data-slick-index", b)
    }), e.$slidesCache = e.$slides, e.reinit()
  }, b.prototype.animateHeight = function () {
    var a = this;
    if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
      a.$list.animate({
        height: b
      }, a.options.speed)
    }
  }, b.prototype.animateSlide = function (b, c) {
    var d = {},
      e = this;
    e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
      left: b
    }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
      top: b
    }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
      animStart: e.currentLeft
    }).animate({
      animStart: b
    }, {
      duration: e.options.speed,
      easing: e.options.easing,
      step: function (a) {
        a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
      },
      complete: function () {
        c && c.call()
      }
    })) : (e.applyTransition(), b = Math.ceil(b), d[e.animType] = e.options.vertical === !1 ? "translate3d(" + b + "px, 0px, 0px)" : "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
      e.disableTransition(), c.call()
    }, e.options.speed))
  }, b.prototype.asNavFor = function (b) {
    var c = this,
      d = c.options.asNavFor;
    d && null !== d && (d = a(d).not(c.$slider)), null !== d && "object" == typeof d && d.each(function () {
      var c = a(this).slick("getSlick");
      c.unslicked || c.slideHandler(b, !0)
    })
  }, b.prototype.applyTransition = function (a) {
    var b = this,
      c = {};
    c[b.transitionType] = b.options.fade === !1 ? b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
  }, b.prototype.autoPlay = function () {
    var a = this;
    a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
  }, b.prototype.autoPlayClear = function () {
    var a = this;
    a.autoPlayTimer && clearInterval(a.autoPlayTimer)
  }, b.prototype.autoPlayIterator = function () {
    var a = this;
    a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (0 === a.currentSlide - 1 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
  }, b.prototype.buildArrows = function () {
    var b = this;
    b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }))
  }, b.prototype.buildDots = function () {
    var c, d, b = this;
    if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
      for (d = '<ul class="' + b.options.dotsClass + '">', c = 0; c <= b.getDotCount(); c += 1) d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>";
      d += "</ul>", b.$dots = a(d).appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
    }
  }, b.prototype.buildOut = function () {
    var b = this;
    b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
      a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
    }), b.$slidesCache = b.$slides, b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
  }, b.prototype.buildRows = function () {
    var b, c, d, e, f, g, h, a = this;
    if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
      for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
        var i = document.createElement("div");
        for (c = 0; c < a.options.rows; c++) {
          var j = document.createElement("div");
          for (d = 0; d < a.options.slidesPerRow; d++) {
            var k = b * h + (c * a.options.slidesPerRow + d);
            g.get(k) && j.appendChild(g.get(k))
          }
          i.appendChild(j)
        }
        e.appendChild(i)
      }
      a.$slider.html(e), a.$slider.children().children().children().css({
        width: 100 / a.options.slidesPerRow + "%",
        display: "inline-block"
      })
    }
  }, b.prototype.checkResponsive = function (b, c) {
    var e, f, g, d = this,
      h = !1,
      i = d.$slider.width(),
      j = window.innerWidth || a(window).width();
    if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
      f = null;
      for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
      null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
    }
  }, b.prototype.changeSlide = function (b, c) {
    var f, g, h, d = this,
      e = a(b.target);
    switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = 0 !== d.slideCount % d.options.slidesToScroll, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
      case "previous":
        g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
        break;
      case "next":
        g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
        break;
      case "index":
        var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
        d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
        break;
      default:
        return
    }
  }, b.prototype.checkNavigable = function (a) {
    var c, d, b = this;
    if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
    else
      for (var e in c) {
        if (a < c[e]) {
          a = d;
          break
        }
        d = c[e]
      }
    return a
  }, b.prototype.cleanUpEvents = function () {
    var b = this;
    b.options.dots && null !== b.$dots && (a("li", b.$dots).off("click.slick", b.changeSlide), b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).off("mouseenter.slick", a.proxy(b.setPaused, b, !0)).off("mouseleave.slick", a.proxy(b.setPaused, b, !1))), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.$list.off("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
  }, b.prototype.cleanUpRows = function () {
    var b, a = this;
    a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.html(b))
  }, b.prototype.clickHandler = function (a) {
    var b = this;
    b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
  }, b.prototype.destroy = function (b) {
    var c = this;
    c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.options.arrows === !0 && (c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove())), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      a(this).attr("style", a(this).data("originalStyling"))
    }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
  }, b.prototype.disableTransition = function (a) {
    var b = this,
      c = {};
    c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
  }, b.prototype.fadeSlide = function (a, b) {
    var c = this;
    c.cssTransitions === !1 ? (c.$slides.eq(a).css({
      zIndex: c.options.zIndex
    }), c.$slides.eq(a).animate({
      opacity: 1
    }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
      opacity: 1,
      zIndex: c.options.zIndex
    }), b && setTimeout(function () {
      c.disableTransition(a), b.call()
    }, c.options.speed))
  }, b.prototype.fadeSlideOut = function (a) {
    var b = this;
    b.cssTransitions === !1 ? b.$slides.eq(a).animate({
      opacity: 0,
      zIndex: b.options.zIndex - 2
    }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
      opacity: 0,
      zIndex: b.options.zIndex - 2
    }))
  }, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
    var b = this;
    null !== a && (b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
  }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
    var a = this;
    return a.currentSlide
  }, b.prototype.getDotCount = function () {
    var a = this,
      b = 0,
      c = 0,
      d = 0;
    if (a.options.infinite === !0)
      for (; b < a.slideCount;) ++d, b = c + a.options.slidesToShow, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    else if (a.options.centerMode === !0) d = a.slideCount;
    else
      for (; b < a.slideCount;) ++d, b = c + a.options.slidesToShow, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    return d - 1
  }, b.prototype.getLeft = function (a) {
    var c, d, f, b = this,
      e = 0;
    return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = -1 * b.slideWidth * b.options.slidesToShow, e = -1 * d * b.options.slidesToShow), 0 !== b.slideCount % b.options.slidesToScroll && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = -1 * (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth, e = -1 * (b.options.slidesToShow - (a - b.slideCount)) * d) : (b.slideOffset = -1 * b.slideCount % b.options.slidesToScroll * b.slideWidth, e = -1 * b.slideCount % b.options.slidesToScroll * d))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? -1 * a * b.slideWidth + b.slideOffset : -1 * a * d + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
  }, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
    var b = this;
    return b.options[a]
  }, b.prototype.getNavigableIndexes = function () {
    var e, a = this,
      b = 0,
      c = 0,
      d = [];
    for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    return d
  }, b.prototype.getSlick = function () {
    return this
  }, b.prototype.getSlideCount = function () {
    var c, d, e, b = this;
    return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
      return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
    }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
  }, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
    var c = this;
    c.changeSlide({
      data: {
        message: "index",
        index: parseInt(a)
      }
    }, b)
  }, b.prototype.init = function (b) {
    var c = this;
    a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA()
  }, b.prototype.initArrowEvents = function () {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
      message: "previous"
    }, a.changeSlide), a.$nextArrow.on("click.slick", {
      message: "next"
    }, a.changeSlide))
  }, b.prototype.initDotEvents = function () {
    var b = this;
    b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
      message: "index"
    }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.setPaused, b, !0)).on("mouseleave.slick", a.proxy(b.setPaused, b, !1))
  }, b.prototype.initializeEvents = function () {
    var b = this;
    b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.$list.on("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
  }, b.prototype.initUI = function () {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay()
  }, b.prototype.keyHandler = function (a) {
    var b = this;
    a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
      data: {
        message: "previous"
      }
    }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
      data: {
        message: "next"
      }
    }))
  }, b.prototype.lazyLoad = function () {
    function g(b) {
      a("img[data-lazy]", b).each(function () {
        var b = a(this),
          c = a(this).attr("data-lazy"),
          d = document.createElement("img");
        d.onload = function () {
          b.animate({
            opacity: 0
          }, 100, function () {
            b.attr("src", c).animate({
              opacity: 1
            }, 200, function () {
              b.removeAttr("data-lazy").removeClass("slick-loading")
            })
          })
        }, d.src = c
      })
    }
    var c, d, e, f, b = this;
    b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = e + b.options.slidesToShow, b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
  }, b.prototype.loadSlider = function () {
    var a = this;
    a.setPosition(), a.$slideTrack.css({
      opacity: 1
    }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
  }, b.prototype.next = b.prototype.slickNext = function () {
    var a = this;
    a.changeSlide({
      data: {
        message: "next"
      }
    })
  }, b.prototype.orientationChange = function () {
    var a = this;
    a.checkResponsive(), a.setPosition()
  }, b.prototype.pause = b.prototype.slickPause = function () {
    var a = this;
    a.autoPlayClear(), a.paused = !0
  }, b.prototype.play = b.prototype.slickPlay = function () {
    var a = this;
    a.paused = !1, a.autoPlay()
  }, b.prototype.postSlide = function (a) {
    var b = this;
    b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay(), b.options.accessibility === !0 && b.initADA()
  }, b.prototype.prev = b.prototype.slickPrev = function () {
    var a = this;
    a.changeSlide({
      data: {
        message: "previous"
      }
    })
  }, b.prototype.preventDefault = function (a) {
    a.preventDefault()
  }, b.prototype.progressiveLazyLoad = function () {
    var c, d, b = this;
    c = a("img[data-lazy]", b.$slider).length, c > 0 && (d = a("img[data-lazy]", b.$slider).first(), d.attr("src", d.attr("data-lazy")).removeClass("slick-loading").load(function () {
      d.removeAttr("data-lazy"), b.progressiveLazyLoad(), b.options.adaptiveHeight === !0 && b.setPosition()
    }).error(function () {
      d.removeAttr("data-lazy"), b.progressiveLazyLoad()
    }))
  }, b.prototype.refresh = function (b) {
    var c = this,
      d = c.currentSlide;
    c.destroy(!0), a.extend(c, c.initials, {
      currentSlide: d
    }), c.init(), b || c.changeSlide({
      data: {
        message: "index",
        index: d
      }
    }, !1)
  }, b.prototype.registerBreakpoints = function () {
    var c, d, e, b = this,
      f = b.options.responsive || null;
    if ("array" === a.type(f) && f.length) {
      b.respondTo = b.options.respondTo || "window";
      for (c in f)
        if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
          for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
          b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
        }
      b.breakpoints.sort(function (a, c) {
        return b.options.mobileFirst ? a - c : c - a
      })
    }
  }, b.prototype.reinit = function () {
    var b = this;
    b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), b.$slider.trigger("reInit", [b]), b.options.autoplay === !0 && b.focusHandler()
  }, b.prototype.resize = function () {
    var b = this;
    a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
      b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
    }, 50))
  }, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
    var d = this;
    return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, d.reinit(), void 0)
  }, b.prototype.setCSS = function (a) {
    var d, e, b = this,
      c = {};
    b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
  }, b.prototype.setDimensions = function () {
    var a = this;
    a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
      padding: "0px " + a.options.centerPadding
    }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
      padding: a.options.centerPadding + " 0px"
    })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
    var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
    a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
  }, b.prototype.setFade = function () {
    var c, b = this;
    b.$slides.each(function (d, e) {
      c = -1 * b.slideWidth * d, b.options.rtl === !0 ? a(e).css({
        position: "relative",
        right: c,
        top: 0,
        zIndex: b.options.zIndex - 2,
        opacity: 0
      }) : a(e).css({
        position: "relative",
        left: c,
        top: 0,
        zIndex: b.options.zIndex - 2,
        opacity: 0
      })
    }), b.$slides.eq(b.currentSlide).css({
      zIndex: b.options.zIndex - 1,
      opacity: 1
    })
  }, b.prototype.setHeight = function () {
    var a = this;
    if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
      a.$list.css("height", b)
    }
  }, b.prototype.setOption = b.prototype.slickSetOption = function (b, c, d) {
    var f, g, e = this;
    if ("responsive" === b && "array" === a.type(c))
      for (g in c)
        if ("array" !== a.type(e.options.responsive)) e.options.responsive = [c[g]];
        else {
          for (f = e.options.responsive.length - 1; f >= 0;) e.options.responsive[f].breakpoint === c[g].breakpoint && e.options.responsive.splice(f, 1), f--;
          e.options.responsive.push(c[g])
        }
    else e.options[b] = c;
    d === !0 && (e.unload(), e.reinit())
  }, b.prototype.setPosition = function () {
    var a = this;
    a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
  }, b.prototype.setProps = function () {
    var a = this,
      b = document.body.style;
    a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = null !== a.animType && a.animType !== !1
  }, b.prototype.setSlideClasses = function (a) {
    var c, d, e, f, b = this;
    d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
  }, b.prototype.setupInfinite = function () {
    var c, d, e, b = this;
    if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
      for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
      for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
      b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        a(this).attr("id", "")
      })
    }
  }, b.prototype.setPaused = function (a) {
    var b = this;
    b.options.autoplay === !0 && b.options.pauseOnHover === !0 && (b.paused = a, a ? b.autoPlayClear() : b.autoPlay())
  }, b.prototype.selectHandler = function (b) {
    var c = this,
      d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
      e = parseInt(d.attr("data-slick-index"));
    return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), c.asNavFor(e), void 0) : (c.slideHandler(e), void 0)
  }, b.prototype.slideHandler = function (a, b, c) {
    var d, e, f, g, h = null,
      i = this;
    return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
      i.postSlide(d)
    }) : i.postSlide(d)), void 0) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
      i.postSlide(d)
    }) : i.postSlide(d)), void 0) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), e = 0 > d ? 0 !== i.slideCount % i.options.slidesToScroll ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? 0 !== i.slideCount % i.options.slidesToScroll ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
      i.postSlide(e)
    })) : i.postSlide(e), i.animateHeight(), void 0) : (c !== !0 ? i.animateSlide(h, function () {
      i.postSlide(e)
    }) : i.postSlide(e), void 0)))
  }, b.prototype.startLoad = function () {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
  }, b.prototype.swipeDirection = function () {
    var a, b, c, d, e = this;
    return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "left" : "right" : "vertical"
  }, b.prototype.swipeEnd = function () {
    var c, b = this;
    if (b.dragging = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
    if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) switch (b.swipeDirection()) {
      case "left":
        c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.slideHandler(c), b.currentDirection = 0, b.touchObject = {}, b.$slider.trigger("swipe", [b, "left"]);
        break;
      case "right":
        c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.slideHandler(c), b.currentDirection = 1, b.touchObject = {}, b.$slider.trigger("swipe", [b, "right"])
    } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
  }, b.prototype.swipeHandler = function (a) {
    var b = this;
    if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
      case "start":
        b.swipeStart(a);
        break;
      case "move":
        b.swipeMove(a);
        break;
      case "end":
        b.swipeEnd(a)
    }
  }, b.prototype.swipeMove = function (a) {
    var d, e, f, g, h, b = this;
    return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.swipeLeft = b.options.vertical === !1 ? d + f * g : d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : (b.setCSS(b.swipeLeft), void 0)) : void 0)
  }, b.prototype.swipeStart = function (a) {
    var c, b = this;
    return 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, b.dragging = !0, void 0)
  }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
    var a = this;
    null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
  }, b.prototype.unload = function () {
    var b = this;
    a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
  }, b.prototype.unslick = function (a) {
    var b = this;
    b.$slider.trigger("unslick", [b, a]), b.destroy()
  }, b.prototype.updateArrows = function () {
    var b, a = this;
    b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
  }, b.prototype.updateDots = function () {
    var a = this;
    null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
  }, b.prototype.visibility = function () {
    var a = this;
    document[a.hidden] ? (a.paused = !0, a.autoPlayClear()) : a.options.autoplay === !0 && (a.paused = !1, a.autoPlay())
  }, b.prototype.initADA = function () {
    var b = this;
    console.log(b.$slideTrack)
    b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
      a(this).attr({
        role: "option",
        "aria-describedby": "slick-slide" + b.instanceUid + c
      })
    }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
      a(this).attr({
        role: "presentation",
        "aria-selected": "false",
        "aria-controls": "navigation" + b.instanceUid + c,
        id: "slick-slide" + b.instanceUid + c
      })
    }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
  }, b.prototype.activateADA = function () {
    var a = this,
      b = a.$slider.find("*").is(":focus");
    a.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false",
      tabindex: "0"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    }), b && a.$slideTrack.find(".slick-active").focus()
  }, b.prototype.focusHandler = function () {
    var b = this;
    b.$slider.on("focus.slick blur.slick", "*", function (c) {
      c.stopImmediatePropagation();
      var d = a(this);
      setTimeout(function () {
        b.isPlay && (d.is(":focus") ? (b.autoPlayClear(), b.paused = !0) : (b.paused = !1, b.autoPlay()))
      }, 0)
    })
  }, a.fn.slick = function () {
    var g, a = this,
      c = arguments[0],
      d = Array.prototype.slice.call(arguments, 1),
      e = a.length,
      f = 0;
    for (f; e > f; f++)
      if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
    return a
  }
});

/*!
 * VERSION: 1.18.2
 * DATE: 2015-12-22
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c) {
        var d = function (a) {
            var b, c = [],
              d = a.length;
            for (b = 0; b !== d; c.push(a[b++]));
            return c
          },
          e = function (a, b, c) {
            var d, e, f = a.cycle;
            for (d in f) e = f[d], a[d] = "function" == typeof e ? e.call(b[c], c) : e[c % e.length];
            delete a.cycle
          },
          f = function (a, b, d) {
            c.call(this, a, b, d), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = f.prototype.render
          },
          g = 1e-10,
          h = c._internals,
          i = h.isSelector,
          j = h.isArray,
          k = f.prototype = c.to({}, .1, {}),
          l = [];
        f.version = "1.18.2", k.constructor = f, k.kill()._gc = !1, f.killTweensOf = f.killDelayedCallsTo = c.killTweensOf, f.getTweensOf = c.getTweensOf, f.lagSmoothing = c.lagSmoothing, f.ticker = c.ticker, f.render = c.render, k.invalidate = function () {
          return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), c.prototype.invalidate.call(this)
        }, k.updateTo = function (a, b) {
          var d, e = this.ratio,
            f = this.vars.immediateRender || a.immediateRender;
          b && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
          for (d in a) this.vars[d] = a[d];
          if (this._initted || f)
            if (b) this._initted = !1, f && this.render(0, !0, !0);
            else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
            var g = this._totalTime;
            this.render(0, !0, !1), this._initted = !1, this.render(g, !0, !1)
          } else if (this._initted = !1, this._init(), this._time > 0 || f)
            for (var h, i = 1 / (1 - e), j = this._firstPT; j;) h = j.s + j.c, j.c *= i, j.s = h - j.c, j = j._next;
          return this
        }, k.render = function (a, b, c) {
          this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
          var d, e, f, i, j, k, l, m, n = this._dirty ? this.totalDuration() : this._totalDuration,
            o = this._time,
            p = this._totalTime,
            q = this._cycle,
            r = this._duration,
            s = this._rawPrevTime;
          if (a >= n - 1e-7 ? (this._totalTime = n, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = r, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === r && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > s || 0 >= a && a >= -1e-7 || s === g && "isPause" !== this.data) && s !== a && (c = !0, s > g && (e = "onReverseComplete")), this._rawPrevTime = m = !b || a || s === a ? a : g)) : 1e-7 > a ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== p || 0 === r && s > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === r && (this._initted || !this.vars.lazy || c) && (s >= 0 && (c = !0), this._rawPrevTime = m = !b || a || s === a ? a : g)), this._initted || (c = !0)) : (this._totalTime = this._time = a, 0 !== this._repeat && (i = r + this._repeatDelay, this._cycle = this._totalTime / i >> 0, 0 !== this._cycle && this._cycle === this._totalTime / i && this._cycle--, this._time = this._totalTime - this._cycle * i, this._yoyo && 0 !== (1 & this._cycle) && (this._time = r - this._time), this._time > r ? this._time = r : this._time < 0 && (this._time = 0)), this._easeType ? (j = this._time / r, k = this._easeType, l = this._easePower, (1 === k || 3 === k && j >= .5) && (j = 1 - j), 3 === k && (j *= 2), 1 === l ? j *= j : 2 === l ? j *= j * j : 3 === l ? j *= j * j * j : 4 === l && (j *= j * j * j * j), 1 === k ? this.ratio = 1 - j : 2 === k ? this.ratio = j : this._time / r < .5 ? this.ratio = j / 2 : this.ratio = 1 - j / 2) : this.ratio = this._ease.getRatio(this._time / r)), o === this._time && !c && q === this._cycle) return void(p !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));
          if (!this._initted) {
            if (this._init(), !this._initted || this._gc) return;
            if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = o, this._totalTime = p, this._rawPrevTime = s, this._cycle = q, h.lazyTweens.push(this), void(this._lazy = [a, b]);
            this._time && !d ? this.ratio = this._ease.getRatio(this._time / r) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
          }
          for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && a >= 0 && (this._active = !0), 0 === p && (2 === this._initted && a > 0 && this._init(), this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === r) && (b || this._callback("onStart"))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
          this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, b, c), b || (this._totalTime !== p || d) && this._callback("onUpdate")), this._cycle !== q && (b || this._gc || this.vars.onRepeat && this._callback("onRepeat")), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === r && this._rawPrevTime === g && m !== g && (this._rawPrevTime = 0))
        }, f.to = function (a, b, c) {
          return new f(a, b, c)
        }, f.from = function (a, b, c) {
          return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new f(a, b, c)
        }, f.fromTo = function (a, b, c, d) {
          return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new f(a, b, d)
        }, f.staggerTo = f.allTo = function (a, b, g, h, k, m, n) {
          h = h || 0;
          var o, p, q, r, s = 0,
            t = [],
            u = function () {
              g.onComplete && g.onComplete.apply(g.onCompleteScope || this, arguments), k.apply(n || g.callbackScope || this, m || l)
            },
            v = g.cycle,
            w = g.startAt && g.startAt.cycle;
          for (j(a) || ("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a))), a = a || [], 0 > h && (a = d(a), a.reverse(), h *= -1), o = a.length - 1, q = 0; o >= q; q++) {
            p = {};
            for (r in g) p[r] = g[r];
            if (v && e(p, a, q), w) {
              w = p.startAt = {};
              for (r in g.startAt) w[r] = g.startAt[r];
              e(p.startAt, a, q)
            }
            p.delay = s + (p.delay || 0), q === o && k && (p.onComplete = u), t[q] = new f(a[q], b, p), s += h
          }
          return t
        }, f.staggerFrom = f.allFrom = function (a, b, c, d, e, g, h) {
          return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, f.staggerTo(a, b, c, d, e, g, h)
        }, f.staggerFromTo = f.allFromTo = function (a, b, c, d, e, g, h, i) {
          return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, f.staggerTo(a, b, d, e, g, h, i)
        }, f.delayedCall = function (a, b, c, d, e) {
          return new f(b, 0, {
            delay: a,
            onComplete: b,
            onCompleteParams: c,
            callbackScope: d,
            onReverseComplete: b,
            onReverseCompleteParams: c,
            immediateRender: !1,
            useFrames: e,
            overwrite: 0
          })
        }, f.set = function (a, b) {
          return new f(a, 0, b)
        }, f.isTweening = function (a) {
          return c.getTweensOf(a, !0).length > 0
        };
        var m = function (a, b) {
            for (var d = [], e = 0, f = a._first; f;) f instanceof c ? d[e++] = f : (b && (d[e++] = f), d = d.concat(m(f, b)), e = d.length), f = f._next;
            return d
          },
          n = f.getAllTweens = function (b) {
            return m(a._rootTimeline, b).concat(m(a._rootFramesTimeline, b))
          };
        f.killAll = function (a, c, d, e) {
          null == c && (c = !0), null == d && (d = !0);
          var f, g, h, i = n(0 != e),
            j = i.length,
            k = c && d && e;
          for (h = 0; j > h; h++) g = i[h], (k || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1))
        }, f.killChildTweensOf = function (a, b) {
          if (null != a) {
            var e, g, k, l, m, n = h.tweenLookup;
            if ("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a)), j(a))
              for (l = a.length; --l > -1;) f.killChildTweensOf(a[l], b);
            else {
              e = [];
              for (k in n)
                for (g = n[k].target.parentNode; g;) g === a && (e = e.concat(n[k].tweens)), g = g.parentNode;
              for (m = e.length, l = 0; m > l; l++) b && e[l].totalTime(e[l].totalDuration()), e[l]._enabled(!1, !1)
            }
          }
        };
        var o = function (a, c, d, e) {
          c = c !== !1, d = d !== !1, e = e !== !1;
          for (var f, g, h = n(e), i = c && d && e, j = h.length; --j > -1;) g = h[j], (i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a)
        };
        return f.pauseAll = function (a, b, c) {
          o(!0, a, b, c)
        }, f.resumeAll = function (a, b, c) {
          o(!1, a, b, c)
        }, f.globalTimeScale = function (b) {
          var d = a._rootTimeline,
            e = c.ticker.time;
          return arguments.length ? (b = b || g, d._startTime = e - (e - d._startTime) * d._timeScale / b, d = a._rootFramesTimeline, e = c.ticker.frame, d._startTime = e - (e - d._startTime) * d._timeScale / b, d._timeScale = a._rootTimeline._timeScale = b, b) : d._timeScale
        }, k.progress = function (a) {
          return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, k.totalProgress = function (a) {
          return arguments.length ? this.totalTime(this.totalDuration() * a, !1) : this._totalTime / this.totalDuration()
        }, k.time = function (a, b) {
          return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
        }, k.duration = function (b) {
          return arguments.length ? a.prototype.duration.call(this, b) : this._duration
        }, k.totalDuration = function (a) {
          return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, k.repeat = function (a) {
          return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
        }, k.repeatDelay = function (a) {
          return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
        }, k.yoyo = function (a) {
          return arguments.length ? (this._yoyo = a, this) : this._yoyo
        }, f
      }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c) {
        var d = function (a) {
            b.call(this, a), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
            var c, d, e = this.vars;
            for (d in e) c = e[d], i(c) && -1 !== c.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(c));
            i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger)
          },
          e = 1e-10,
          f = c._internals,
          g = d._internals = {},
          h = f.isSelector,
          i = f.isArray,
          j = f.lazyTweens,
          k = f.lazyRender,
          l = _gsScope._gsDefine.globals,
          m = function (a) {
            var b, c = {};
            for (b in a) c[b] = a[b];
            return c
          },
          n = function (a, b, c) {
            var d, e, f = a.cycle;
            for (d in f) e = f[d], a[d] = "function" == typeof e ? e.call(b[c], c) : e[c % e.length];
            delete a.cycle
          },
          o = g.pauseCallback = function () {},
          p = function (a) {
            var b, c = [],
              d = a.length;
            for (b = 0; b !== d; c.push(a[b++]));
            return c
          },
          q = d.prototype = new b;
        return d.version = "1.18.2", q.constructor = d, q.kill()._gc = q._forcingPlayhead = q._hasPause = !1, q.to = function (a, b, d, e) {
          var f = d.repeat && l.TweenMax || c;
          return b ? this.add(new f(a, b, d), e) : this.set(a, d, e)
        }, q.from = function (a, b, d, e) {
          return this.add((d.repeat && l.TweenMax || c).from(a, b, d), e)
        }, q.fromTo = function (a, b, d, e, f) {
          var g = e.repeat && l.TweenMax || c;
          return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f)
        }, q.staggerTo = function (a, b, e, f, g, i, j, k) {
          var l, o, q = new d({
              onComplete: i,
              onCompleteParams: j,
              callbackScope: k,
              smoothChildTiming: this.smoothChildTiming
            }),
            r = e.cycle;
          for ("string" == typeof a && (a = c.selector(a) || a), a = a || [], h(a) && (a = p(a)), f = f || 0, 0 > f && (a = p(a), a.reverse(), f *= -1), o = 0; o < a.length; o++) l = m(e), l.startAt && (l.startAt = m(l.startAt), l.startAt.cycle && n(l.startAt, a, o)), r && n(l, a, o), q.to(a[o], b, l, o * f);
          return this.add(q, g)
        }, q.staggerFrom = function (a, b, c, d, e, f, g, h) {
          return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, d, e, f, g, h)
        }, q.staggerFromTo = function (a, b, c, d, e, f, g, h, i) {
          return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, this.staggerTo(a, b, d, e, f, g, h, i)
        }, q.call = function (a, b, d, e) {
          return this.add(c.delayedCall(0, a, b, d), e)
        }, q.set = function (a, b, d) {
          return d = this._parseTimeOrLabel(d, 0, !0), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), this.add(new c(a, 0, b), d)
        }, d.exportRoot = function (a, b) {
          a = a || {}, null == a.smoothChildTiming && (a.smoothChildTiming = !0);
          var e, f, g = new d(a),
            h = g._timeline;
          for (null == b && (b = !0), h._remove(g, !0), g._startTime = 0, g._rawPrevTime = g._time = g._totalTime = h._time, e = h._first; e;) f = e._next, b && e instanceof c && e.target === e.vars.onComplete || g.add(e, e._startTime - e._delay), e = f;
          return h.add(g, 0), g
        }, q.add = function (e, f, g, h) {
          var j, k, l, m, n, o;
          if ("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
            if (e instanceof Array || e && e.push && i(e)) {
              for (g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; k > l; l++) i(m = e[l]) && (m = new d({
                tweens: m
              })), this.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())), j += h;
              return this._uncache(!0)
            }
            if ("string" == typeof e) return this.addLabel(e, f);
            if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
            e = c.delayedCall(0, e)
          }
          if (b.prototype.add.call(this, e, f), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
            for (n = this, o = n.rawTime() > e._startTime; n._timeline;) o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), n = n._timeline;
          return this
        }, q.remove = function (b) {
          if (b instanceof a) {
            this._remove(b, !1);
            var c = b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline;
            return b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale, this
          }
          if (b instanceof Array || b && b.push && i(b)) {
            for (var d = b.length; --d > -1;) this.remove(b[d]);
            return this
          }
          return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b)
        }, q._remove = function (a, c) {
          b.prototype._remove.call(this, a, c);
          var d = this._last;
          return d ? this._time > d._startTime + d._totalDuration / d._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, q.append = function (a, b) {
          return this.add(a, this._parseTimeOrLabel(null, b, !0, a))
        }, q.insert = q.insertMultiple = function (a, b, c, d) {
          return this.add(a, b || 0, c, d)
        }, q.appendMultiple = function (a, b, c, d) {
          return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d)
        }, q.addLabel = function (a, b) {
          return this._labels[a] = this._parseTimeOrLabel(b), this
        }, q.addPause = function (a, b, d, e) {
          var f = c.delayedCall(0, o, d, e || this);
          return f.vars.onComplete = f.vars.onReverseComplete = b, f.data = "isPause", this._hasPause = !0, this.add(f, a)
        }, q.removeLabel = function (a) {
          return delete this._labels[a], this
        }, q.getLabelTime = function (a) {
          return null != this._labels[a] ? this._labels[a] : -1
        }, q._parseTimeOrLabel = function (b, c, d, e) {
          var f;
          if (e instanceof a && e.timeline === this) this.remove(e);
          else if (e && (e instanceof Array || e.push && i(e)))
            for (f = e.length; --f > -1;) e[f] instanceof a && e[f].timeline === this && this.remove(e[f]);
          if ("string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - this.duration() : 0, d);
          if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = this.duration());
          else {
            if (f = b.indexOf("="), -1 === f) return null == this._labels[b] ? d ? this._labels[b] = this.duration() + c : c : this._labels[b] + c;
            c = parseInt(b.charAt(f - 1) + "1", 10) * Number(b.substr(f + 1)), b = f > 1 ? this._parseTimeOrLabel(b.substr(0, f - 1), 0, d) : this.duration()
          }
          return Number(b) + c
        }, q.seek = function (a, b) {
          return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1)
        }, q.stop = function () {
          return this.paused(!0)
        }, q.gotoAndPlay = function (a, b) {
          return this.play(a, b)
        }, q.gotoAndStop = function (a, b) {
          return this.pause(a, b)
        }, q.render = function (a, b, c) {
          this._gc && this._enabled(!0, !1);
          var d, f, g, h, i, l, m, n = this._dirty ? this.totalDuration() : this._totalDuration,
            o = this._time,
            p = this._startTime,
            q = this._timeScale,
            r = this._paused;
          if (a >= n - 1e-7) this._totalTime = this._time = n, this._reversed || this._hasPausedChild() || (f = !0, h = "onComplete", i = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && a >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === e) && this._rawPrevTime !== a && this._first && (i = !0, this._rawPrevTime > e && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, a = n + 1e-4;
          else if (1e-7 > a)
            if (this._totalTime = this._time = 0, (0 !== o || 0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || 0 > a && this._rawPrevTime >= 0)) && (h = "onReverseComplete", f = this._reversed), 0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (i = f = !0, h = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (i = !0), this._rawPrevTime = a;
            else {
              if (this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, 0 === a && f)
                for (d = this._first; d && 0 === d._startTime;) d._duration || (f = !1), d = d._next;
              a = 0, this._initted || (i = !0)
            }
          else {
            if (this._hasPause && !this._forcingPlayhead && !b) {
              if (a >= o)
                for (d = this._first; d && d._startTime <= a && !l;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (l = d), d = d._next;
              else
                for (d = this._last; d && d._startTime >= a && !l;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (l = d), d = d._prev;
              l && (this._time = a = l._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
            }
            this._totalTime = this._time = this._rawPrevTime = a
          }
          if (this._time !== o && this._first || c || i || l) {
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== o && a > 0 && (this._active = !0), 0 === o && this.vars.onStart && 0 !== this._time && (b || this._callback("onStart")), m = this._time, m >= o)
              for (d = this._first; d && (g = d._next, m === this._time && (!this._paused || r));)(d._active || d._startTime <= m && !d._paused && !d._gc) && (l === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
            else
              for (d = this._last; d && (g = d._prev, m === this._time && (!this._paused || r));) {
                if (d._active || d._startTime <= o && !d._paused && !d._gc) {
                  if (l === d) {
                    for (l = d._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c), l = l._prev;
                    l = null, this.pause()
                  }
                  d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
                }
                d = g
              }
            this._onUpdate && (b || (j.length && k(), this._callback("onUpdate"))), h && (this._gc || (p === this._startTime || q !== this._timeScale) && (0 === this._time || n >= this.totalDuration()) && (f && (j.length && k(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[h] && this._callback(h)))
          }
        }, q._hasPausedChild = function () {
          for (var a = this._first; a;) {
            if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
            a = a._next
          }
          return !1
        }, q.getChildren = function (a, b, d, e) {
          e = e || -9999999999;
          for (var f = [], g = this._first, h = 0; g;) g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;
          return f
        }, q.getTweensOf = function (a, b) {
          var d, e, f = this._gc,
            g = [],
            h = 0;
          for (f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length; --e > -1;)(d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
          return f && this._enabled(!1, !0), g
        }, q.recent = function () {
          return this._recent
        }, q._contains = function (a) {
          for (var b = a.timeline; b;) {
            if (b === this) return !0;
            b = b.timeline
          }
          return !1
        }, q.shiftChildren = function (a, b, c) {
          c = c || 0;
          for (var d, e = this._first, f = this._labels; e;) e._startTime >= c && (e._startTime += a), e = e._next;
          if (b)
            for (d in f) f[d] >= c && (f[d] += a);
          return this._uncache(!0)
        }, q._kill = function (a, b) {
          if (!a && !b) return this._enabled(!1, !1);
          for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;) c[d]._kill(a, b) && (e = !0);
          return e
        }, q.clear = function (a) {
          var b = this.getChildren(!1, !0, !0),
            c = b.length;
          for (this._time = this._totalTime = 0; --c > -1;) b[c]._enabled(!1, !1);
          return a !== !1 && (this._labels = {}), this._uncache(!0)
        }, q.invalidate = function () {
          for (var b = this._first; b;) b.invalidate(), b = b._next;
          return a.prototype.invalidate.call(this)
        }, q._enabled = function (a, c) {
          if (a === this._gc)
            for (var d = this._first; d;) d._enabled(a, !0), d = d._next;
          return b.prototype._enabled.call(this, a, c)
        }, q.totalTime = function (b, c, d) {
          this._forcingPlayhead = !0;
          var e = a.prototype.totalTime.apply(this, arguments);
          return this._forcingPlayhead = !1, e
        }, q.duration = function (a) {
          return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration)
        }, q.totalDuration = function (a) {
          if (!arguments.length) {
            if (this._dirty) {
              for (var b, c, d = 0, e = this._last, f = 999999999999; e;) b = e._prev, e._dirty && e.totalDuration(), e._startTime > f && this._sortChildren && !e._paused ? this.add(e, e._startTime - e._delay) : f = e._startTime, e._startTime < 0 && !e._paused && (d -= e._startTime, this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale), this.shiftChildren(-e._startTime, !1, -9999999999), f = 0), c = e._startTime + e._totalDuration / e._timeScale, c > d && (d = c), e = b;
              this._duration = this._totalDuration = d, this._dirty = !1
            }
            return this._totalDuration
          }
          return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this
        }, q.paused = function (b) {
          if (!b)
            for (var c = this._first, d = this._time; c;) c._startTime === d && "isPause" === c.data && (c._rawPrevTime = 0), c = c._next;
          return a.prototype.paused.apply(this, arguments)
        }, q.usesFrames = function () {
          for (var b = this._timeline; b._timeline;) b = b._timeline;
          return b === a._rootFramesTimeline
        }, q.rawTime = function () {
          return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, d
      }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (a, b, c) {
        var d = function (b) {
            a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
          },
          e = 1e-10,
          f = b._internals,
          g = f.lazyTweens,
          h = f.lazyRender,
          i = new c(null, null, 1, 0),
          j = d.prototype = new a;
        return j.constructor = d, j.kill()._gc = !1, d.version = "1.18.2", j.invalidate = function () {
          return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a.prototype.invalidate.call(this)
        }, j.addCallback = function (a, c, d, e) {
          return this.add(b.delayedCall(0, a, d, e), c)
        }, j.removeCallback = function (a, b) {
          if (a)
            if (null == b) this._kill(null, a);
            else
              for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1;) c[d]._startTime === e && c[d]._enabled(!1, !1);
          return this
        }, j.removePause = function (b) {
          return this.removeCallback(a._internals.pauseCallback, b)
        }, j.tweenTo = function (a, c) {
          c = c || {};
          var d, e, f, g = {
            ease: i,
            useFrames: this.usesFrames(),
            immediateRender: !1
          };
          for (e in c) g[e] = c[e];
          return g.time = this._parseTimeOrLabel(a), d = Math.abs(Number(g.time) - this._time) / this._timeScale || .001, f = new b(this, d, g), g.onStart = function () {
            f.target.paused(!0), f.vars.time !== f.target.time() && d === f.duration() && f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale), c.onStart && f._callback("onStart")
          }, f
        }, j.tweenFromTo = function (a, b, c) {
          c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = {
            onComplete: this.seek,
            onCompleteParams: [a],
            callbackScope: this
          }, c.immediateRender = c.immediateRender !== !1;
          var d = this.tweenTo(b, c);
          return d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001)
        }, j.render = function (a, b, c) {
          this._gc && this._enabled(!0, !1);
          var d, f, i, j, k, l, m, n, o = this._dirty ? this.totalDuration() : this._totalDuration,
            p = this._duration,
            q = this._time,
            r = this._totalTime,
            s = this._startTime,
            t = this._timeScale,
            u = this._rawPrevTime,
            v = this._paused,
            w = this._cycle;
          if (a >= o - 1e-7) this._locked || (this._totalTime = o, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (f = !0, j = "onComplete", k = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && a >= -1e-7 || 0 > u || u === e) && u !== a && this._first && (k = !0, u > e && (j = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, this._yoyo && 0 !== (1 & this._cycle) ? this._time = a = 0 : (this._time = p, a = p + 1e-4);
          else if (1e-7 > a)
            if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== q || 0 === p && u !== e && (u > 0 || 0 > a && u >= 0) && !this._locked) && (j = "onReverseComplete", f = this._reversed), 0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (k = f = !0, j = "onReverseComplete") : u >= 0 && this._first && (k = !0), this._rawPrevTime = a;
            else {
              if (this._rawPrevTime = p || !b || a || this._rawPrevTime === a ? a : e, 0 === a && f)
                for (d = this._first; d && 0 === d._startTime;) d._duration || (f = !1), d = d._next;
              a = 0, this._initted || (k = !0)
            }
          else if (0 === p && 0 > u && (k = !0), this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 0 !== this._repeat && (l = p + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = p - this._time), this._time > p ? (this._time = p, a = p + 1e-4) : this._time < 0 ? this._time = a = 0 : a = this._time)), this._hasPause && !this._forcingPlayhead && !b) {
            if (a = this._time, a >= q)
              for (d = this._first; d && d._startTime <= a && !m;) d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (m = d), d = d._next;
            else
              for (d = this._last; d && d._startTime >= a && !m;) d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (m = d), d = d._prev;
            m && (this._time = a = m._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay))
          }
          if (this._cycle !== w && !this._locked) {
            var x = this._yoyo && 0 !== (1 & w),
              y = x === (this._yoyo && 0 !== (1 & this._cycle)),
              z = this._totalTime,
              A = this._cycle,
              B = this._rawPrevTime,
              C = this._time;
            if (this._totalTime = w * p, this._cycle < w ? x = !x : this._totalTime += p, this._time = q, this._rawPrevTime = 0 === p ? u - 1e-4 : u, this._cycle = w, this._locked = !0, q = x ? 0 : p, this.render(q, b, 0 === p), b || this._gc || this.vars.onRepeat && this._callback("onRepeat"), q !== this._time) return;
            if (y && (q = x ? p + 1e-4 : -1e-4, this.render(q, !0, !1)), this._locked = !1, this._paused && !v) return;
            this._time = C, this._totalTime = z, this._cycle = A, this._rawPrevTime = B
          }
          if (!(this._time !== q && this._first || c || k || m)) return void(r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));
          if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== r && a > 0 && (this._active = !0), 0 === r && this.vars.onStart && 0 !== this._totalTime && (b || this._callback("onStart")), n = this._time, n >= q)
            for (d = this._first; d && (i = d._next, n === this._time && (!this._paused || v));)(d._active || d._startTime <= this._time && !d._paused && !d._gc) && (m === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = i;
          else
            for (d = this._last; d && (i = d._prev, n === this._time && (!this._paused || v));) {
              if (d._active || d._startTime <= q && !d._paused && !d._gc) {
                if (m === d) {
                  for (m = d._prev; m && m.endTime() > this._time;) m.render(m._reversed ? m.totalDuration() - (a - m._startTime) * m._timeScale : (a - m._startTime) * m._timeScale, b, c), m = m._prev;
                  m = null, this.pause()
                }
                d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)
              }
              d = i
            }
          this._onUpdate && (b || (g.length && h(), this._callback("onUpdate"))), j && (this._locked || this._gc || (s === this._startTime || t !== this._timeScale) && (0 === this._time || o >= this.totalDuration()) && (f && (g.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[j] && this._callback(j)))
        }, j.getActive = function (a, b, c) {
          null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
          var d, e, f = [],
            g = this.getChildren(a, b, c),
            h = 0,
            i = g.length;
          for (d = 0; i > d; d++) e = g[d], e.isActive() && (f[h++] = e);
          return f
        }, j.getLabelAfter = function (a) {
          a || 0 !== a && (a = this._time);
          var b, c = this.getLabelsArray(),
            d = c.length;
          for (b = 0; d > b; b++)
            if (c[b].time > a) return c[b].name;
          return null
        }, j.getLabelBefore = function (a) {
          null == a && (a = this._time);
          for (var b = this.getLabelsArray(), c = b.length; --c > -1;)
            if (b[c].time < a) return b[c].name;
          return null
        }, j.getLabelsArray = function () {
          var a, b = [],
            c = 0;
          for (a in this._labels) b[c++] = {
            time: this._labels[a],
            name: a
          };
          return b.sort(function (a, b) {
            return a.time - b.time
          }), b
        }, j.progress = function (a, b) {
          return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration()
        }, j.totalProgress = function (a, b) {
          return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration()
        }, j.totalDuration = function (b) {
          return arguments.length ? -1 !== this._repeat && b ? this.timeScale(this.totalDuration() / b) : this : (this._dirty && (a.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, j.time = function (a, b) {
          return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
        }, j.repeat = function (a) {
          return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
        }, j.repeatDelay = function (a) {
          return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
        }, j.yoyo = function (a) {
          return arguments.length ? (this._yoyo = a, this) : this._yoyo
        }, j.currentLabel = function (a) {
          return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8)
        }, d
      }, !0),
      function () {
        var a = 180 / Math.PI,
          b = [],
          c = [],
          d = [],
          e = {},
          f = _gsScope._gsDefine.globals,
          g = function (a, b, c, d) {
            this.a = a, this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, this.ba = b - a
          },
          h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
          i = function (a, b, c, d) {
            var e = {
                a: a
              },
              f = {},
              g = {},
              h = {
                c: d
              },
              i = (a + b) / 2,
              j = (b + c) / 2,
              k = (c + d) / 2,
              l = (i + j) / 2,
              m = (j + k) / 2,
              n = (m - l) / 8;
            return e.b = i + (a - i) / 4, f.b = l + n, e.c = f.a = (e.b + f.b) / 2, f.c = g.a = (l + m) / 2, g.b = m - n, h.b = k + (d - k) / 4, g.c = h.a = (g.b + h.b) / 2, [e, f, g, h]
          },
          j = function (a, e, f, g, h) {
            var j, k, l, m, n, o, p, q, r, s, t, u, v, w = a.length - 1,
              x = 0,
              y = a[0].a;
            for (j = 0; w > j; j++) n = a[x], k = n.a, l = n.d, m = a[x + 1].d, h ? (t = b[j], u = c[j], v = (u + t) * e * .25 / (g ? .5 : d[j] || .5), o = l - (l - k) * (g ? .5 * e : 0 !== t ? v / t : 0), p = l + (m - l) * (g ? .5 * e : 0 !== u ? v / u : 0), q = l - (o + ((p - o) * (3 * t / (t + u) + .5) / 4 || 0))) : (o = l - (l - k) * e * .5, p = l + (m - l) * e * .5, q = l - (o + p) / 2), o += q, p += q, n.c = r = o, 0 !== j ? n.b = y : n.b = y = n.a + .6 * (n.c - n.a), n.da = l - k, n.ca = r - k, n.ba = y - k, f ? (s = i(k, y, r, l), a.splice(x, 1, s[0], s[1], s[2], s[3]), x += 4) : x++, y = p;
            n = a[x], n.b = y, n.c = y + .4 * (n.d - y), n.da = n.d - n.a, n.ca = n.c - n.a, n.ba = y - n.a, f && (s = i(n.a, y, n.c, n.d), a.splice(x, 1, s[0], s[1], s[2], s[3]))
          },
          k = function (a, d, e, f) {
            var h, i, j, k, l, m, n = [];
            if (f)
              for (a = [f].concat(a), i = a.length; --i > -1;) "string" == typeof (m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
            if (h = a.length - 2, 0 > h) return n[0] = new g(a[0][d], 0, 0, a[-1 > h ? 0 : 1][d]), n;
            for (i = 0; h > i; i++) j = a[i][d], k = a[i + 1][d], n[i] = new g(j, 0, 0, k), e && (l = a[i + 2][d], b[i] = (b[i] || 0) + (k - j) * (k - j), c[i] = (c[i] || 0) + (l - k) * (l - k));
            return n[i] = new g(a[i][d], 0, 0, a[i + 1][d]), n
          },
          l = function (a, f, g, i, l, m) {
            var n, o, p, q, r, s, t, u, v = {},
              w = [],
              x = m || a[0];
            l = "string" == typeof l ? "," + l + "," : h, null == f && (f = 1);
            for (o in a[0]) w.push(o);
            if (a.length > 1) {
              for (u = a[a.length - 1], t = !0, n = w.length; --n > -1;)
                if (o = w[n], Math.abs(x[o] - u[o]) > .05) {
                  t = !1;
                  break
                }
              t && (a = a.concat(), m && a.unshift(m), a.push(a[1]), m = a[a.length - 3])
            }
            for (b.length = c.length = d.length = 0, n = w.length; --n > -1;) o = w[n], e[o] = -1 !== l.indexOf("," + o + ","), v[o] = k(a, o, e[o], m);
            for (n = b.length; --n > -1;) b[n] = Math.sqrt(b[n]), c[n] = Math.sqrt(c[n]);
            if (!i) {
              for (n = w.length; --n > -1;)
                if (e[o])
                  for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++) r = p[q + 1].da / c[q] + p[q].da / b[q], d[q] = (d[q] || 0) + r * r;
              for (n = d.length; --n > -1;) d[n] = Math.sqrt(d[n])
            }
            for (n = w.length, q = g ? 4 : 1; --n > -1;) o = w[n], p = v[o], j(p, f, g, i, e[o]), t && (p.splice(0, q), p.splice(p.length - q, q));
            return v
          },
          m = function (a, b, c) {
            b = b || "soft";
            var d, e, f, h, i, j, k, l, m, n, o, p = {},
              q = "cubic" === b ? 3 : 2,
              r = "soft" === b,
              s = [];
            if (r && c && (a = [c].concat(a)), null == a || a.length < q + 1) throw "invalid Bezier data";
            for (m in a[0]) s.push(m);
            for (j = s.length; --j > -1;) {
              for (m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; l > k; k++) d = null == c ? a[k][m] : "string" == typeof (o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o), r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2), i[n++] = d;
              for (l = n - q + 1, n = 0, k = 0; l > k; k += q) d = i[k], e = i[k + 1], f = i[k + 2], h = 2 === q ? 0 : i[k + 3], i[n++] = o = 3 === q ? new g(d, e, f, h) : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f);
              i.length = n
            }
            return p
          },
          n = function (a, b, c) {
            for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1;)
              for (m = a[p], f = m.a, g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; c >= k; k++) j = o * k, l = 1 - j, d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j), n = p * c + k - 1, b[n] = (b[n] || 0) + d * d
          },
          o = function (a, b) {
            b = b >> 0 || 6;
            var c, d, e, f, g = [],
              h = [],
              i = 0,
              j = 0,
              k = b - 1,
              l = [],
              m = [];
            for (c in a) n(a[c], g, b);
            for (e = g.length, d = 0; e > d; d++) i += Math.sqrt(g[d]), f = d % b, m[f] = i, f === k && (j += i, f = d / b >> 0, l[f] = m, h[f] = j, i = 0, m = []);
            return {
              length: j,
              lengths: h,
              segments: l
            }
          },
          p = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.4",
            API: 2,
            global: !0,
            init: function (a, b, c) {
              this._target = a, b instanceof Array && (b = {
                values: b
              }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
              var d, e, f, g, h, i = b.values || [],
                j = {},
                k = i[0],
                n = b.autoRotate || c.vars.orientToBezier;
              this._autoRotate = n ? n instanceof Array ? n : [
                ["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]
              ] : null;
              for (d in k) this._props.push(d);
              for (f = this._props.length; --f > -1;) d = this._props[f], this._overwriteProps.push(d), e = this._func[d] = "function" == typeof a[d], j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]), h || j[d] !== i[0][d] && (h = j);
              if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m(i, b.type, j), this._segCount = this._beziers[d].length, this._timeRes) {
                var p = o(this._beziers, this._timeRes);
                this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
              }
              if (n = this._autoRotate)
                for (this._initialRotations = [], n[0] instanceof Array || (this._autoRotate = n = [n]), f = n.length; --f > -1;) {
                  for (g = 0; 3 > g; g++) d = n[f][g], this._func[d] = "function" == typeof a[d] ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1;
                  d = n[f][2], this._initialRotations[f] = this._func[d] ? this._func[d].call(this._target) : this._target[d]
                }
              return this._startRatio = c.vars.runBackwards ? 1 : 0, !0
            },
            set: function (b) {
              var c, d, e, f, g, h, i, j, k, l, m = this._segCount,
                n = this._func,
                o = this._target,
                p = b !== this._startRatio;
              if (this._timeRes) {
                if (k = this._lengths, l = this._curSeg, b *= this._length, e = this._li, b > this._l2 && m - 1 > e) {
                  for (j = m - 1; j > e && (this._l2 = k[++e]) <= b;);
                  this._l1 = k[e - 1], this._li = e, this._curSeg = l = this._segments[e], this._s2 = l[this._s1 = this._si = 0]
                } else if (b < this._l1 && e > 0) {
                  for (; e > 0 && (this._l1 = k[--e]) >= b;);
                  0 === e && b < this._l1 ? this._l1 = 0 : e++, this._l2 = k[e], this._li = e, this._curSeg = l = this._segments[e], this._s1 = l[(this._si = l.length - 1) - 1] || 0, this._s2 = l[this._si]
                }
                if (c = e, b -= this._l1, e = this._si, b > this._s2 && e < l.length - 1) {
                  for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= b;);
                  this._s1 = l[e - 1], this._si = e
                } else if (b < this._s1 && e > 0) {
                  for (; e > 0 && (this._s1 = l[--e]) >= b;);
                  0 === e && b < this._s1 ? this._s1 = 0 : e++, this._s2 = l[e], this._si = e
                }
                h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec
              } else c = 0 > b ? 0 : b >= 1 ? m - 1 : m * b >> 0, h = (b - c * (1 / m)) * m;
              for (d = 1 - h, e = this._props.length; --e > -1;) f = this._props[e], g = this._beziers[f][c], i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a, this._round[f] && (i = Math.round(i)), n[f] ? o[f](i) : o[f] = i;
              if (this._autoRotate) {
                var q, r, s, t, u, v, w, x = this._autoRotate;
                for (e = x.length; --e > -1;) f = x[e][2], v = x[e][3] || 0, w = x[e][4] === !0 ? 1 : a, g = this._beziers[x[e][0]], q = this._beziers[x[e][1]], g && q && (g = g[c], q = q[c], r = g.a + (g.b - g.a) * h, t = g.b + (g.c - g.b) * h, r += (t - r) * h, t += (g.c + (g.d - g.c) * h - t) * h, s = q.a + (q.b - q.a) * h, u = q.b + (q.c - q.b) * h, s += (u - s) * h, u += (q.c + (q.d - q.c) * h - u) * h, i = p ? Math.atan2(u - s, t - r) * w + v : this._initialRotations[e], n[f] ? o[f](i) : o[f] = i)
              }
            }
          }),
          q = p.prototype;
        p.bezierThrough = l, p.cubicToQuadratic = i, p._autoCSS = !0, p.quadraticToCubic = function (a, b, c) {
          return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c)
        }, p._cssRegister = function () {
          var a = f.CSSPlugin;
          if (a) {
            var b = a._internals,
              c = b._parseToProxy,
              d = b._setPluginRatio,
              e = b.CSSPropTween;
            b._registerComplexSpecialProp("bezier", {
              parser: function (a, b, f, g, h, i) {
                b instanceof Array && (b = {
                  values: b
                }), i = new p;
                var j, k, l, m = b.values,
                  n = m.length - 1,
                  o = [],
                  q = {};
                if (0 > n) return h;
                for (j = 0; n >= j; j++) l = c(a, m[j], g, h, i, n !== j), o[j] = l.end;
                for (k in b) q[k] = b[k];
                return q.values = o, h = new e(a, "bezier", 0, 0, l.pt, 2), h.data = l, h.plugin = i, h.setRatio = d, 0 === q.autoRotate && (q.autoRotate = !0), !q.autoRotate || q.autoRotate instanceof Array || (j = q.autoRotate === !0 ? 0 : Number(q.autoRotate), q.autoRotate = null != l.end.left ? [
                  ["left", "top", "rotation", j, !1]
                ] : null != l.end.x ? [
                  ["x", "y", "rotation", j, !1]
                ] : !1), q.autoRotate && (g._transform || g._enableTransforms(!1), l.autoRotate = g._target._gsTransform), i._onInitTween(l.proxy, q, g._tween), h
              }
            })
          }
        }, q._roundProps = function (a, b) {
          for (var c = this._overwriteProps, d = c.length; --d > -1;)(a[c[d]] || a.bezier || a.bezierThrough) && (this._round[c[d]] = b)
        }, q._kill = function (a) {
          var b, c, d = this._props;
          for (b in this._beziers)
            if (b in a)
              for (delete this._beziers[b], delete this._func[b], c = d.length; --c > -1;) d[c] === b && d.splice(c, 1);
          return this._super._kill.call(this, a)
        }
      }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (a, b) {
        var c, d, e, f, g = function () {
            a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio
          },
          h = _gsScope._gsDefine.globals,
          i = {},
          j = g.prototype = new a("css");
        j.constructor = g, g.version = "1.18.2", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", g.defaultSmoothOrigin = !0, j = "px", g.suffixMap = {
          top: j,
          right: j,
          bottom: j,
          left: j,
          width: j,
          height: j,
          fontSize: j,
          padding: j,
          margin: j,
          perspective: j,
          lineHeight: ""
        };
        var k, l, m, n, o, p, q = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
          r = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
          s = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
          t = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
          u = /(?:\d|\-|\+|=|#|\.)*/g,
          v = /opacity *= *([^)]*)/i,
          w = /opacity:([^;]*)/i,
          x = /alpha\(opacity *=.+?\)/i,
          y = /^(rgb|hsl)/,
          z = /([A-Z])/g,
          A = /-([a-z])/gi,
          B = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
          C = function (a, b) {
            return b.toUpperCase()
          },
          D = /(?:Left|Right|Width)/i,
          E = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
          F = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
          G = /,(?=[^\)]*(?:\(|$))/gi,
          H = Math.PI / 180,
          I = 180 / Math.PI,
          J = {},
          K = document,
          L = function (a) {
            return K.createElementNS ? K.createElementNS("http://www.w3.org/1999/xhtml", a) : K.createElement(a)
          },
          M = L("div"),
          N = L("img"),
          O = g._internals = {
            _specialProps: i
          },
          P = navigator.userAgent,
          Q = function () {
            var a = P.indexOf("Android"),
              b = L("a");
            return m = -1 !== P.indexOf("Safari") && -1 === P.indexOf("Chrome") && (-1 === a || Number(P.substr(a + 8, 1)) > 3), o = m && Number(P.substr(P.indexOf("Version/") + 8, 1)) < 6, n = -1 !== P.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(P) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(P)) && (p = parseFloat(RegExp.$1)), b ? (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity)) : !1
          }(),
          R = function (a) {
            return v.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
          },
          S = function (a) {
            window.console && console.log(a)
          },
          T = "",
          U = "",
          V = function (a, b) {
            b = b || M;
            var c, d, e = b.style;
            if (void 0 !== e[a]) return a;
            for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];);
            return d >= 0 ? (U = 3 === d ? "ms" : c[d], T = "-" + U.toLowerCase() + "-", U + a) : null
          },
          W = K.defaultView ? K.defaultView.getComputedStyle : function () {},
          X = g.getStyle = function (a, b, c, d, e) {
            var f;
            return Q || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || W(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(z, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : R(a)
          },
          Y = O.convertToPixels = function (a, c, d, e, f) {
            if ("px" === e || !e) return d;
            if ("auto" === e || !d) return 0;
            var h, i, j, k = D.test(c),
              l = a,
              m = M.style,
              n = 0 > d;
            if (n && (d = -d), "%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight);
            else {
              if (m.cssText = "border:0 solid red;position:" + X(a, "position") + ";line-height:0;", "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
              else {
                if (l = a.parentNode || K.body, i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;
                m[k ? "width" : "height"] = d + e
              }
              l.appendChild(M), h = parseFloat(M[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(M), k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {}, i.time = j, i.width = h / d * 100), 0 !== h || f || (h = Y(a, c, d, e, !0))
            }
            return n ? -h : h
          },
          Z = O.calculateOffset = function (a, b, c) {
            if ("absolute" !== X(a, "position", c)) return 0;
            var d = "left" === b ? "Left" : "Top",
              e = X(a, "margin" + d, c);
            return a["offset" + d] - (Y(a, b, parseFloat(e), e.replace(u, "")) || 0)
          },
          $ = function (a, b) {
            var c, d, e, f = {};
            if (b = b || W(a, null))
              if (c = b.length)
                for (; --c > -1;) e = b[c], (-1 === e.indexOf("-transform") || za === e) && (f[e.replace(A, C)] = b.getPropertyValue(e));
              else
                for (c in b)(-1 === c.indexOf("Transform") || ya === c) && (f[c] = b[c]);
            else if (b = a.currentStyle || a.style)
              for (c in b) "string" == typeof c && void 0 === f[c] && (f[c.replace(A, C)] = b[c]);
            return Q || (f.opacity = R(a)), d = La(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, Ba && (f.z = d.z, f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, f
          },
          _ = function (a, b, c, d, e) {
            var f, g, h, i = {},
              j = a.style;
            for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(t, "") ? f : 0 : Z(a, g), void 0 !== j[g] && (h = new oa(j, g, j[g], h)));
            if (d)
              for (g in d) "className" !== g && (i[g] = d[g]);
            return {
              difs: i,
              firstMPT: h
            }
          },
          aa = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
          },
          ba = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
          ca = function (a, b, c) {
            var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
              e = aa[b],
              f = e.length;
            for (c = c || W(a, null); --f > -1;) d -= parseFloat(X(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(X(a, "border" + e[f] + "Width", c, !0)) || 0;
            return d
          },
          da = function (a, b) {
            if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
            (null == a || "" === a) && (a = "0 0");
            var c = a.split(" "),
              d = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : c[0],
              e = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : c[1];
            return null == e ? e = "center" === d ? "50%" : "0" : "center" === e && (e = "50%"), ("center" === d || isNaN(parseFloat(d)) && -1 === (d + "").indexOf("=")) && (d = "50%"), a = d + " " + e + (c.length > 2 ? " " + c[2] : ""), b && (b.oxp = -1 !== d.indexOf("%"), b.oyp = -1 !== e.indexOf("%"), b.oxr = "=" === d.charAt(1), b.oyr = "=" === e.charAt(1), b.ox = parseFloat(d.replace(t, "")), b.oy = parseFloat(e.replace(t, "")), b.v = a), b || a
          },
          ea = function (a, b) {
            return "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b)
          },
          fa = function (a, b) {
            return null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a)
          },
          ga = function (a, b, c, d) {
            var e, f, g, h, i, j = 1e-6;
            return null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), i = "=" === a.charAt(1), g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : I) - (i ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), h = b + g), j > h && h > -j && (h = 0), h
          },
          ha = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
          },
          ia = function (a, b, c) {
            return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0
          },
          ja = g.parseColor = function (a, b) {
            var c, d, e, f, g, h, i, j, k, l, m;
            if (a)
              if ("number" == typeof a) c = [a >> 16, a >> 8 & 255, 255 & a];
              else {
                if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), ha[a]) c = ha[a];
                else if ("#" === a.charAt(0)) 4 === a.length && (d = a.charAt(1), e = a.charAt(2), f = a.charAt(3), a = "#" + d + d + e + e + f + f), a = parseInt(a.substr(1), 16), c = [a >> 16, a >> 8 & 255, 255 & a];
                else if ("hsl" === a.substr(0, 3))
                  if (c = m = a.match(q), b) {
                    if (-1 !== a.indexOf("=")) return a.match(r)
                  } else g = Number(c[0]) % 360 / 360, h = Number(c[1]) / 100, i = Number(c[2]) / 100, e = .5 >= i ? i * (h + 1) : i + h - i * h, d = 2 * i - e, c.length > 3 && (c[3] = Number(a[3])), c[0] = ia(g + 1 / 3, d, e), c[1] = ia(g, d, e), c[2] = ia(g - 1 / 3, d, e);
                else c = a.match(q) || ha.transparent;
                c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), c.length > 3 && (c[3] = Number(c[3]))
              }
            else c = ha.black;
            return b && !m && (d = c[0] / 255, e = c[1] / 255, f = c[2] / 255, j = Math.max(d, e, f), k = Math.min(d, e, f), i = (j + k) / 2, j === k ? g = h = 0 : (l = j - k, h = i > .5 ? l / (2 - j - k) : l / (j + k), g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4, g *= 60), c[0] = g + .5 | 0, c[1] = 100 * h + .5 | 0, c[2] = 100 * i + .5 | 0), c
          },
          ka = function (a, b) {
            var c, d, e, f = a.match(la) || [],
              g = 0,
              h = f.length ? "" : a;
            for (c = 0; c < f.length; c++) d = f[c], e = a.substr(g, a.indexOf(d, g) - g), g += e.length + d.length, d = ja(d, b), 3 === d.length && d.push(1), h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
            return h
          },
          la = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (j in ha) la += "|" + j + "\\b";
        la = new RegExp(la + ")", "gi"), g.colorStringFilter = function (a) {
          var b, c = a[0] + a[1];
          la.lastIndex = 0, la.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = ka(a[0], b), a[1] = ka(a[1], b))
        }, b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
        var ma = function (a, b, c, d) {
            if (null == a) return function (a) {
              return a
            };
            var e, f = b ? (a.match(la) || [""])[0] : "",
              g = a.split(f).join("").match(s) || [],
              h = a.substr(0, a.indexOf(g[0])),
              i = ")" === a.charAt(a.length - 1) ? ")" : "",
              j = -1 !== a.indexOf(" ") ? " " : ",",
              k = g.length,
              l = k > 0 ? g[0].replace(q, "") : "";
            return k ? e = b ? function (a) {
              var b, m, n, o;
              if ("number" == typeof a) a += l;
              else if (d && G.test(a)) {
                for (o = a.replace(G, "|").split("|"), n = 0; n < o.length; n++) o[n] = e(o[n]);
                return o.join(",")
              }
              if (b = (a.match(la) || [f])[0], m = a.split(b).join("").match(s) || [], n = m.length, k > n--)
                for (; ++n < k;) m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
              return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
            } : function (a) {
              var b, f, m;
              if ("number" == typeof a) a += l;
              else if (d && G.test(a)) {
                for (f = a.replace(G, "|").split("|"), m = 0; m < f.length; m++) f[m] = e(f[m]);
                return f.join(",")
              }
              if (b = a.match(s) || [], m = b.length, k > m--)
                for (; ++m < k;) b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
              return h + b.join(j) + i
            } : function (a) {
              return a
            }
          },
          na = function (a) {
            return a = a.split(","),
              function (b, c, d, e, f, g, h) {
                var i, j = (c + "").split(" ");
                for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                return e.parse(b, h, f, g)
              }
          },
          oa = (O._setPluginRatio = function (a) {
            this.plugin.setRatio(a);
            for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i;) b = h[i.v], i.r ? b = Math.round(b) : j > b && b > -j && (b = 0), i.t[i.p] = b, i = i._next;
            if (g.autoRotate && (g.autoRotate.rotation = h.rotation), 1 === a || 0 === a)
              for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i;) {
                if (c = i.t, c.type) {
                  if (1 === c.type) {
                    for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                    c[f] = e
                  }
                } else c[f] = c.s + c.xs0;
                i = i._next
              }
          }, function (a, b, c, d, e) {
            this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d)
          }),
          pa = (O._parseToProxy = function (a, b, c, d, e, f) {
            var g, h, i, j, k, l = d,
              m = {},
              n = {},
              o = c._transform,
              p = J;
            for (c._transform = null, J = b, d = k = c.parse(a, b, d, e), J = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
              if (d.type <= 1 && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new oa(d, "s", h, j, d.r), d.c = 0), 1 === d.type))
                for (g = d.l; --g > 0;) i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new oa(d, i, h, j, d.rxp[i]));
              d = d._next
            }
            return {
              proxy: m,
              end: n,
              firstMPT: j,
              pt: k
            }
          }, O.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m) {
            this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof pa || f.push(this.n), this.r = j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this)
          }),
          qa = function (a, b, c, d, e, f) {
            var g = new pa(a, b, c, d - c, e, -1, f);
            return g.b = c, g.e = g.xs0 = d, g
          },
          ra = g.parseComplex = function (a, b, c, d, e, f, g, h, i, j) {
            c = c || f || "", g = new pa(a, b, 0, 0, g, j ? 2 : 1, null, !1, h, c, d), d += "";
            var l, m, n, o, p, s, t, u, v, w, x, y, z, A = c.split(", ").join(",").split(" "),
              B = d.split(", ").join(",").split(" "),
              C = A.length,
              D = k !== !1;
            for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (A = A.join(" ").replace(G, ", ").split(" "), B = B.join(" ").replace(G, ", ").split(" "), C = A.length), C !== B.length && (A = (f || "").split(" "), C = A.length), g.plugin = i, g.setRatio = j, la.lastIndex = 0, l = 0; C > l; l++)
              if (o = A[l], p = B[l], u = parseFloat(o), u || 0 === u) g.appendXtra("", u, ea(p, u), p.replace(r, ""), D && -1 !== p.indexOf("px"), !0);
              else if (e && la.test(o)) y = "," === p.charAt(p.length - 1) ? ")," : ")", z = -1 !== p.indexOf("hsl") && Q, o = ja(o, z), p = ja(p, z), v = o.length + p.length > 6, v && !Q && 0 === p[3] ? (g["xs" + g.l] += g.l ? " transparent" : "transparent", g.e = g.e.split(B[l]).join("transparent")) : (Q || (v = !1), z ? g.appendXtra(v ? "hsla(" : "hsl(", o[0], ea(p[0], o[0]), ",", !1, !0).appendXtra("", o[1], ea(p[1], o[1]), "%,", !1).appendXtra("", o[2], ea(p[2], o[2]), v ? "%," : "%" + y, !1) : g.appendXtra(v ? "rgba(" : "rgb(", o[0], p[0] - o[0], ",", !0, !0).appendXtra("", o[1], p[1] - o[1], ",", !0).appendXtra("", o[2], p[2] - o[2], v ? "," : y, !0), v && (o = o.length < 4 ? 1 : o[3], g.appendXtra("", o, (p.length < 4 ? 1 : p[3]) - o, y, !1))), la.lastIndex = 0;
            else if (s = o.match(q)) {
              if (t = p.match(r), !t || t.length !== s.length) return g;
              for (n = 0, m = 0; m < s.length; m++) x = s[m], w = o.indexOf(x, n), g.appendXtra(o.substr(n, w - n), Number(x), ea(t[m], x), "", D && "px" === o.substr(w + x.length, 2), 0 === m), n = w + x.length;
              g["xs" + g.l] += o.substr(n)
            } else g["xs" + g.l] += g.l ? " " + p : p;
            if (-1 !== d.indexOf("=") && g.data) {
              for (y = g.xs0 + g.data.s, l = 1; l < g.l; l++) y += g["xs" + l] + g.data["xn" + l];
              g.e = y + g["xs" + l]
            }
            return g.l || (g.type = -1, g.xs0 = g.e), g.xfirst || g
          },
          sa = 9;
        for (j = pa.prototype, j.l = j.pr = 0; --sa > 0;) j["xn" + sa] = 0, j["xs" + sa] = "";
        j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, j.appendXtra = function (a, b, c, d, e, f) {
          var g = this,
            h = g.l;
          return g["xs" + h] += f && h ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new pa(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
            s: b + c
          }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g)
        };
        var ta = function (a, b) {
            b = b || {}, this.p = b.prefix ? V(a) || a : a, i[a] = i[this.p] = this, this.format = b.formatter || ma(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0
          },
          ua = O._registerComplexSpecialProp = function (a, b, c) {
            "object" != typeof b && (b = {
              parser: c
            });
            var d, e, f = a.split(","),
              g = b.defaultValue;
            for (c = c || [g], d = 0; d < f.length; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new ta(f[d], b)
          },
          va = function (a) {
            if (!i[a]) {
              var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
              ua(a, {
                parser: function (a, c, d, e, f, g, j) {
                  var k = h.com.greensock.plugins[b];
                  return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (S("Error: " + b + " js file not loaded."), f)
                }
              })
            }
          };
        j = ta.prototype, j.parseComplex = function (a, b, c, d, e, f) {
          var g, h, i, j, k, l, m = this.keyword;
          if (this.multi && (G.test(c) || G.test(b) ? (h = b.replace(G, "|").split("|"), i = c.replace(G, "|").split("|")) : m && (h = [b], i = [c])), i) {
            for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
            b = h.join(", "), c = i.join(", ")
          }
          return ra(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
        }, j.parse = function (a, b, c, d, f, g, h) {
          return this.parseComplex(a.style, this.format(X(a, this.p, e, !1, this.dflt)), this.format(b), f, g)
        }, g.registerSpecialProp = function (a, b, c) {
          ua(a, {
            parser: function (a, d, e, f, g, h, i) {
              var j = new pa(a, e, 0, 0, g, 2, e, !1, c);
              return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j
            },
            priority: c
          })
        }, g.useSVGTransformAttr = m || n;
        var wa, xa = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
          ya = V("transform"),
          za = T + "transform",
          Aa = V("transformOrigin"),
          Ba = null !== V("perspective"),
          Ca = O.Transform = function () {
            this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = g.defaultForce3D !== !1 && Ba ? g.defaultForce3D || "auto" : !1
          },
          Da = window.SVGElement,
          Ea = function (a, b, c) {
            var d, e = K.createElementNS("http://www.w3.org/2000/svg", a),
              f = /([a-z])([A-Z])/g;
            for (d in c) e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
            return b.appendChild(e), e
          },
          Fa = K.documentElement,
          Ga = function () {
            var a, b, c, d = p || /Android/i.test(P) && !window.chrome;
            return K.createElementNS && !d && (a = Ea("svg", Fa), b = Ea("rect", a, {
              width: 100,
              height: 50,
              x: 100
            }), c = b.getBoundingClientRect().width, b.style[Aa] = "50% 50%", b.style[ya] = "scaleX(0.5)", d = c === b.getBoundingClientRect().width && !(n && Ba), Fa.removeChild(a)), d
          }(),
          Ha = function (a, b, c, d, e) {
            var f, h, i, j, k, l, m, n, o, p, q, r, s, t, u = a._gsTransform,
              v = Ka(a, !0);
            u && (s = u.xOrigin, t = u.yOrigin), (!d || (f = d.split(" ")).length < 2) && (m = a.getBBox(), b = da(b).split(" "), f = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * m.width : parseFloat(b[0])) + m.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * m.height : parseFloat(b[1])) + m.y]), c.xOrigin = j = parseFloat(f[0]), c.yOrigin = k = parseFloat(f[1]), d && v !== Ja && (l = v[0], m = v[1], n = v[2], o = v[3], p = v[4], q = v[5], r = l * o - m * n, h = j * (o / r) + k * (-n / r) + (n * q - o * p) / r, i = j * (-m / r) + k * (l / r) - (l * q - m * p) / r, j = c.xOrigin = f[0] = h, k = c.yOrigin = f[1] = i), u && (e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (h = j - s, i = k - t, u.xOffset += h * v[0] + i * v[2] - h, u.yOffset += h * v[1] + i * v[3] - i) : u.xOffset = u.yOffset = 0), a.setAttribute("data-svg-origin", f.join(" "))
          },
          Ia = function (a) {
            return !!(Da && "function" == typeof a.getBBox && a.getCTM && (!a.parentNode || a.parentNode.getBBox && a.parentNode.getCTM))
          },
          Ja = [1, 0, 0, 1, 0, 0],
          Ka = function (a, b) {
            var c, d, e, f, g, h = a._gsTransform || new Ca,
              i = 1e5;
            if (ya ? d = X(a, za, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(E), d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), h.x || 0, h.y || 0].join(",") : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, (h.svg || a.getBBox && Ia(a)) && (c && -1 !== (a.style[ya] + "").indexOf("matrix") && (d = a.style[ya], c = 0), e = a.getAttribute("transform"), c && e && (-1 !== e.indexOf("matrix") ? (d = e, c = 0) : -1 !== e.indexOf("translate") && (d = "matrix(1,0,0,1," + e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", c = 0))), c) return Ja;
            for (e = (d || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], sa = e.length; --sa > -1;) f = Number(e[sa]), e[sa] = (g = f - (f |= 0)) ? (g * i + (0 > g ? -.5 : .5) | 0) / i + f : f;
            return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e
          },
          La = O.getTransform = function (a, c, d, f) {
            if (a._gsTransform && d && !f) return a._gsTransform;
            var h, i, j, k, l, m, n = d ? a._gsTransform || new Ca : new Ca,
              o = n.scaleX < 0,
              p = 2e-5,
              q = 1e5,
              r = Ba ? parseFloat(X(a, Aa, c, !1, "0 0 0").split(" ")[2]) || n.zOrigin || 0 : 0,
              s = parseFloat(g.defaultTransformPerspective) || 0;
            if (n.svg = !(!a.getBBox || !Ia(a)), n.svg && (Ha(a, X(a, Aa, e, !1, "50% 50%") + "", n, a.getAttribute("data-svg-origin")), wa = g.useSVGTransformAttr || Ga), h = Ka(a), h !== Ja) {
              if (16 === h.length) {
                var t, u, v, w, x, y = h[0],
                  z = h[1],
                  A = h[2],
                  B = h[3],
                  C = h[4],
                  D = h[5],
                  E = h[6],
                  F = h[7],
                  G = h[8],
                  H = h[9],
                  J = h[10],
                  K = h[12],
                  L = h[13],
                  M = h[14],
                  N = h[11],
                  O = Math.atan2(E, J);
                n.zOrigin && (M = -n.zOrigin, K = G * M - h[12], L = H * M - h[13], M = J * M + n.zOrigin - h[14]), n.rotationX = O * I, O && (w = Math.cos(-O), x = Math.sin(-O), t = C * w + G * x, u = D * w + H * x, v = E * w + J * x, G = C * -x + G * w, H = D * -x + H * w, J = E * -x + J * w, N = F * -x + N * w, C = t, D = u, E = v), O = Math.atan2(-A, J), n.rotationY = O * I, O && (w = Math.cos(-O), x = Math.sin(-O), t = y * w - G * x, u = z * w - H * x, v = A * w - J * x, H = z * x + H * w, J = A * x + J * w, N = B * x + N * w, y = t, z = u, A = v), O = Math.atan2(z, y), n.rotation = O * I, O && (w = Math.cos(-O), x = Math.sin(-O), y = y * w + C * x, u = z * w + D * x, D = z * -x + D * w, E = A * -x + E * w, z = u), n.rotationX && Math.abs(n.rotationX) + Math.abs(n.rotation) > 359.9 && (n.rotationX = n.rotation = 0, n.rotationY = 180 - n.rotationY), n.scaleX = (Math.sqrt(y * y + z * z) * q + .5 | 0) / q, n.scaleY = (Math.sqrt(D * D + H * H) * q + .5 | 0) / q, n.scaleZ = (Math.sqrt(E * E + J * J) * q + .5 | 0) / q, n.skewX = 0, n.perspective = N ? 1 / (0 > N ? -N : N) : 0, n.x = K, n.y = L, n.z = M, n.svg && (n.x -= n.xOrigin - (n.xOrigin * y - n.yOrigin * C), n.y -= n.yOrigin - (n.yOrigin * z - n.xOrigin * D))
              } else if ((!Ba || f || !h.length || n.x !== h[4] || n.y !== h[5] || !n.rotationX && !n.rotationY) && (void 0 === n.x || "none" !== X(a, "display", c))) {
                var P = h.length >= 6,
                  Q = P ? h[0] : 1,
                  R = h[1] || 0,
                  S = h[2] || 0,
                  T = P ? h[3] : 1;
                n.x = h[4] || 0, n.y = h[5] || 0, j = Math.sqrt(Q * Q + R * R), k = Math.sqrt(T * T + S * S), l = Q || R ? Math.atan2(R, Q) * I : n.rotation || 0, m = S || T ? Math.atan2(S, T) * I + l : n.skewX || 0, Math.abs(m) > 90 && Math.abs(m) < 270 && (o ? (j *= -1, m += 0 >= l ? 180 : -180, l += 0 >= l ? 180 : -180) : (k *= -1, m += 0 >= m ? 180 : -180)), n.scaleX = j, n.scaleY = k, n.rotation = l, n.skewX = m, Ba && (n.rotationX = n.rotationY = n.z = 0, n.perspective = s, n.scaleZ = 1), n.svg && (n.x -= n.xOrigin - (n.xOrigin * Q + n.yOrigin * S), n.y -= n.yOrigin - (n.xOrigin * R + n.yOrigin * T))
              }
              n.zOrigin = r;
              for (i in n) n[i] < p && n[i] > -p && (n[i] = 0)
            }
            return d && (a._gsTransform = n, n.svg && (wa && a.style[ya] ? b.delayedCall(.001, function () {
              Pa(a.style, ya)
            }) : !wa && a.getAttribute("transform") && b.delayedCall(.001, function () {
              a.removeAttribute("transform")
            }))), n
          },
          Ma = function (a) {
            var b, c, d = this.data,
              e = -d.rotation * H,
              f = e + d.skewX * H,
              g = 1e5,
              h = (Math.cos(e) * d.scaleX * g | 0) / g,
              i = (Math.sin(e) * d.scaleX * g | 0) / g,
              j = (Math.sin(f) * -d.scaleY * g | 0) / g,
              k = (Math.cos(f) * d.scaleY * g | 0) / g,
              l = this.t.style,
              m = this.t.currentStyle;
            if (m) {
              c = i, i = -j, j = -c, b = m.filter, l.filter = "";
              var n, o, q = this.t.offsetWidth,
                r = this.t.offsetHeight,
                s = "absolute" !== m.position,
                t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
                w = d.x + q * d.xPercent / 100,
                x = d.y + r * d.yPercent / 100;
              if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2, o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2, w += n - (n * h + o * i), x += o - (n * j + o * k)), s ? (n = q / 2, o = r / 2, t += ", Dx=" + (n - (n * h + o * i) + w) + ", Dy=" + (o - (n * j + o * k) + x) + ")") : t += ", sizingMethod='auto expand')", -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(F, t) : l.filter = t + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || v.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) {
                var y, z, A, B = 8 > p ? 1 : -1;
                for (n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + w), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + x), sa = 0; 4 > sa; sa++) z = ba[sa], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : Y(this.t, z, parseFloat(y), y.replace(u, "")) || 0, A = c !== d[z] ? 2 > sa ? -d.ieOffsetX : -d.ieOffsetY : 2 > sa ? n - d.ieOffsetX : o - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === sa || 2 === sa ? 1 : B))) + "px"
              }
            }
          },
          Na = O.set3DTransformRatio = O.setTransformRatio = function (a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z = this.data,
              A = this.t.style,
              B = z.rotation,
              C = z.rotationX,
              D = z.rotationY,
              E = z.scaleX,
              F = z.scaleY,
              G = z.scaleZ,
              I = z.x,
              J = z.y,
              K = z.z,
              L = z.svg,
              M = z.perspective,
              N = z.force3D;
            if (((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !K && !M && !D && !C && 1 === G || wa && L || !Ba) return void(B || z.skewX || L ? (B *= H, x = z.skewX * H, y = 1e5, b = Math.cos(B) * E, e = Math.sin(B) * E, c = Math.sin(B - x) * -F, f = Math.cos(B - x) * F, x && "simple" === z.skewType && (s = Math.tan(x), s = Math.sqrt(1 + s * s), c *= s, f *= s, z.skewY && (b *= s, e *= s)), L && (I += z.xOrigin - (z.xOrigin * b + z.yOrigin * c) + z.xOffset, J += z.yOrigin - (z.xOrigin * e + z.yOrigin * f) + z.yOffset, wa && (z.xPercent || z.yPercent) && (p = this.t.getBBox(), I += .01 * z.xPercent * p.width, J += .01 * z.yPercent * p.height), p = 1e-6, p > I && I > -p && (I = 0), p > J && J > -p && (J = 0)), u = (b * y | 0) / y + "," + (e * y | 0) / y + "," + (c * y | 0) / y + "," + (f * y | 0) / y + "," + I + "," + J + ")", L && wa ? this.t.setAttribute("transform", "matrix(" + u) : A[ya] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[ya] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + I + "," + J + ")");
            if (n && (p = 1e-4, p > E && E > -p && (E = G = 2e-5), p > F && F > -p && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || z.skewX) B *= H, q = b = Math.cos(B), r = e = Math.sin(B), z.skewX && (B -= z.skewX * H, q = Math.cos(B), r = Math.sin(B), "simple" === z.skewType && (s = Math.tan(z.skewX * H), s = Math.sqrt(1 + s * s), q *= s, r *= s, z.skewY && (b *= s, e *= s))), c = -r, f = q;
            else {
              if (!(D || C || 1 !== G || M || L)) return void(A[ya] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + I + "px," + J + "px," + K + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
              b = f = 1, c = e = 0
            }
            j = 1, d = g = h = i = k = l = 0, m = M ? -1 / M : 0, o = z.zOrigin, p = 1e-6, v = ",", w = "0", B = D * H, B && (q = Math.cos(B), r = Math.sin(B), h = -r, k = m * -r, d = b * r, g = e * r, j = q, m *= q, b *= q, e *= q), B = C * H, B && (q = Math.cos(B), r = Math.sin(B), s = c * q + d * r, t = f * q + g * r, i = j * r, l = m * r, d = c * -r + d * q, g = f * -r + g * q, j *= q, m *= q, c = s, f = t), 1 !== G && (d *= G, g *= G, j *= G, m *= G), 1 !== F && (c *= F, f *= F, i *= F, l *= F), 1 !== E && (b *= E, e *= E, h *= E, k *= E), (o || L) && (o && (I += d * -o, J += g * -o, K += j * -o + o), L && (I += z.xOrigin - (z.xOrigin * b + z.yOrigin * c) + z.xOffset, J += z.yOrigin - (z.xOrigin * e + z.yOrigin * f) + z.yOffset), p > I && I > -p && (I = w), p > J && J > -p && (J = w), p > K && K > -p && (K = 0)), u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(", u += (p > b && b > -p ? w : b) + v + (p > e && e > -p ? w : e) + v + (p > h && h > -p ? w : h), u += v + (p > k && k > -p ? w : k) + v + (p > c && c > -p ? w : c) + v + (p > f && f > -p ? w : f), C || D || 1 !== G ? (u += v + (p > i && i > -p ? w : i) + v + (p > l && l > -p ? w : l) + v + (p > d && d > -p ? w : d), u += v + (p > g && g > -p ? w : g) + v + (p > j && j > -p ? w : j) + v + (p > m && m > -p ? w : m) + v) : u += ",0,0,0,0,1,0,", u += I + v + J + v + K + v + (M ? 1 + -K / M : 1) + ")", A[ya] = u
          };
        j = Ca.prototype, j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0, j.scaleX = j.scaleY = j.scaleZ = 1, ua("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
          parser: function (a, b, c, d, f, h, i) {
            if (d._lastParsedTransform === i) return f;
            d._lastParsedTransform = i;
            var j, k, l, m, n, o, p, q, r, s, t = a._gsTransform,
              u = a.style,
              v = 1e-6,
              w = xa.length,
              x = i,
              y = {},
              z = "transformOrigin";
            if (i.display ? (m = X(a, "display"), u.display = "block", j = La(a, e, !0, i.parseTransform), u.display = m) : j = La(a, e, !0, i.parseTransform), d._transform = j, "string" == typeof x.transform && ya) m = M.style, m[ya] = x.transform, m.display = "block", m.position = "absolute", K.body.appendChild(M), k = La(M, null, !1), K.body.removeChild(M), k.perspective || (k.perspective = j.perspective), null != x.xPercent && (k.xPercent = fa(x.xPercent, j.xPercent)), null != x.yPercent && (k.yPercent = fa(x.yPercent, j.yPercent));
            else if ("object" == typeof x) {
              if (k = {
                  scaleX: fa(null != x.scaleX ? x.scaleX : x.scale, j.scaleX),
                  scaleY: fa(null != x.scaleY ? x.scaleY : x.scale, j.scaleY),
                  scaleZ: fa(x.scaleZ, j.scaleZ),
                  x: fa(x.x, j.x),
                  y: fa(x.y, j.y),
                  z: fa(x.z, j.z),
                  xPercent: fa(x.xPercent, j.xPercent),
                  yPercent: fa(x.yPercent, j.yPercent),
                  perspective: fa(x.transformPerspective, j.perspective)
                }, q = x.directionalRotation, null != q)
                if ("object" == typeof q)
                  for (m in q) x[m] = q[m];
                else x.rotation = q;
              "string" == typeof x.x && -1 !== x.x.indexOf("%") && (k.x = 0, k.xPercent = fa(x.x, j.xPercent)), "string" == typeof x.y && -1 !== x.y.indexOf("%") && (k.y = 0, k.yPercent = fa(x.y, j.yPercent)), k.rotation = ga("rotation" in x ? x.rotation : "shortRotation" in x ? x.shortRotation + "_short" : "rotationZ" in x ? x.rotationZ : j.rotation, j.rotation, "rotation", y), Ba && (k.rotationX = ga("rotationX" in x ? x.rotationX : "shortRotationX" in x ? x.shortRotationX + "_short" : j.rotationX || 0, j.rotationX, "rotationX", y), k.rotationY = ga("rotationY" in x ? x.rotationY : "shortRotationY" in x ? x.shortRotationY + "_short" : j.rotationY || 0, j.rotationY, "rotationY", y)), k.skewX = null == x.skewX ? j.skewX : ga(x.skewX, j.skewX), k.skewY = null == x.skewY ? j.skewY : ga(x.skewY, j.skewY), (l = k.skewY - j.skewY) && (k.skewX += l, k.rotation += l)
            }
            for (Ba && null != x.force3D && (j.force3D = x.force3D, p = !0), j.skewType = x.skewType || j.skewType || g.defaultSkewType, o = j.force3D || j.z || j.rotationX || j.rotationY || k.z || k.rotationX || k.rotationY || k.perspective, o || null == x.scale || (k.scaleZ = 1); --w > -1;) c = xa[w], n = k[c] - j[c], (n > v || -v > n || null != x[c] || null != J[c]) && (p = !0, f = new pa(j, c, j[c], n, f), c in y && (f.e = y[c]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
            return n = x.transformOrigin, j.svg && (n || x.svgOrigin) && (r = j.xOffset, s = j.yOffset, Ha(a, da(n), k, x.svgOrigin, x.smoothOrigin), f = qa(j, "xOrigin", (t ? j : k).xOrigin, k.xOrigin, f, z), f = qa(j, "yOrigin", (t ? j : k).yOrigin, k.yOrigin, f, z), (r !== j.xOffset || s !== j.yOffset) && (f = qa(j, "xOffset", t ? r : j.xOffset, j.xOffset, f, z), f = qa(j, "yOffset", t ? s : j.yOffset, j.yOffset, f, z)), n = wa ? null : "0px 0px"), (n || Ba && o && j.zOrigin) && (ya ? (p = !0, c = Aa, n = (n || X(a, c, e, !1, "50% 50%")) + "", f = new pa(u, c, 0, 0, f, -1, z), f.b = u[c], f.plugin = h, Ba ? (m = j.zOrigin, n = n.split(" "), j.zOrigin = (n.length > 2 && (0 === m || "0px" !== n[2]) ? parseFloat(n[2]) : m) || 0, f.xs0 = f.e = n[0] + " " + (n[1] || "50%") + " 0px", f = new pa(j, "zOrigin", 0, 0, f, -1, f.n), f.b = m, f.xs0 = f.e = j.zOrigin) : f.xs0 = f.e = n) : da(n + "", j)), p && (d._transformType = j.svg && wa || !o && 3 !== this._transformType ? 2 : 3), f
          },
          prefix: !0
        }), ua("boxShadow", {
          defaultValue: "0px 0px 0px 0px #999",
          prefix: !0,
          color: !0,
          multi: !0,
          keyword: "inset"
        }), ua("borderRadius", {
          defaultValue: "0px",
          parser: function (a, b, c, f, g, h) {
            b = this.format(b);
            var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
              z = a.style;
            for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++) this.p.indexOf("border") && (y[j] = V(y[j])), m = l = X(a, y[j], e, !1, "0px"), -1 !== m.indexOf(" ") && (l = m.split(" "), m = l[0], l = l[1]), n = k = i[j], o = parseFloat(m), t = m.substr((o + "").length), u = "=" === n.charAt(1), u ? (p = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), p *= parseFloat(n), s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n), s = n.substr((p + "").length)), "" === s && (s = d[c] || t), s !== t && (v = Y(a, "borderLeft", o, t), w = Y(a, "borderTop", o, t), "%" === s ? (m = v / q * 100 + "%", l = w / r * 100 + "%") : "em" === s ? (x = Y(a, "borderLeft", 1, "em"), m = v / x + "em", l = w / x + "em") : (m = v + "px", l = w + "px"), u && (n = parseFloat(m) + p + s, k = parseFloat(l) + p + s)), g = ra(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
            return g
          },
          prefix: !0,
          formatter: ma("0px 0px 0px 0px", !1, !0)
        }), ua("backgroundPosition", {
          defaultValue: "0 0",
          parser: function (a, b, c, d, f, g) {
            var h, i, j, k, l, m, n = "background-position",
              o = e || W(a, null),
              q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
              r = this.format(b);
            if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && (m = X(a, "backgroundImage").replace(B, ""), m && "none" !== m)) {
              for (h = q.split(" "), i = r.split(" "), N.setAttribute("src", m), j = 2; --j > -1;) q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - N.width : a.offsetHeight - N.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
              q = h.join(" ")
            }
            return this.parseComplex(a.style, q, r, f, g)
          },
          formatter: da
        }), ua("backgroundSize", {
          defaultValue: "0 0",
          formatter: da
        }), ua("perspective", {
          defaultValue: "0px",
          prefix: !0
        }), ua("perspectiveOrigin", {
          defaultValue: "50% 50%",
          prefix: !0
        }), ua("transformStyle", {
          prefix: !0
        }), ua("backfaceVisibility", {
          prefix: !0
        }), ua("userSelect", {
          prefix: !0
        }), ua("margin", {
          parser: na("marginTop,marginRight,marginBottom,marginLeft")
        }), ua("padding", {
          parser: na("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }), ua("clip", {
          defaultValue: "rect(0px,0px,0px,0px)",
          parser: function (a, b, c, d, f, g) {
            var h, i, j;
            return 9 > p ? (i = a.currentStyle, j = 8 > p ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(X(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g)
          }
        }), ua("textShadow", {
          defaultValue: "0px 0px 0px #999",
          color: !0,
          multi: !0
        }), ua("autoRound,strictUnits", {
          parser: function (a, b, c, d, e) {
            return e
          }
        }), ua("border", {
          defaultValue: "0px solid #000",
          parser: function (a, b, c, d, f, g) {
            return this.parseComplex(a.style, this.format(X(a, "borderTopWidth", e, !1, "0px") + " " + X(a, "borderTopStyle", e, !1, "solid") + " " + X(a, "borderTopColor", e, !1, "#000")), this.format(b), f, g)
          },
          color: !0,
          formatter: function (a) {
            var b = a.split(" ");
            return b[0] + " " + (b[1] || "solid") + " " + (a.match(la) || ["#000"])[0]
          }
        }), ua("borderWidth", {
          parser: na("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }), ua("float,cssFloat,styleFloat", {
          parser: function (a, b, c, d, e, f) {
            var g = a.style,
              h = "cssFloat" in g ? "cssFloat" : "styleFloat";
            return new pa(g, h, 0, 0, e, -1, c, !1, 0, g[h], b)
          }
        });
        var Oa = function (a) {
          var b, c = this.t,
            d = c.filter || X(this.data, "filter") || "",
            e = this.s + this.c * a | 0;
          100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !X(this.data, "filter")) : (c.filter = d.replace(x, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(v, "opacity=" + e))
        };
        ua("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser: function (a, b, c, d, f, g) {
            var h = parseFloat(X(a, "opacity", e, !1, "1")),
              i = a.style,
              j = "autoAlpha" === c;
            return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === X(a, "visibility", e) && 0 !== b && (h = 0), Q ? f = new pa(i, "opacity", h, b - h, f) : (f = new pa(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Oa), j && (f = new pa(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f
          }
        });
        var Pa = function (a, b) {
            b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(z, "-$1").toLowerCase())) : a.removeAttribute(b))
          },
          Qa = function (a) {
            if (this.t._gsClassPT = this, 1 === a || 0 === a) {
              this.t.setAttribute("class", 0 === a ? this.b : this.e);
              for (var b = this.data, c = this.t.style; b;) b.v ? c[b.p] = b.v : Pa(c, b.p), b = b._next;
              1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
          };
        ua("className", {
          parser: function (a, b, d, f, g, h, i) {
            var j, k, l, m, n, o = a.getAttribute("class") || "",
              p = a.style.cssText;
            if (g = f._classNamePT = new pa(a, d, 0, 0, g, 2), g.setRatio = Qa, g.pr = -11, c = !0, g.b = o, k = $(a, e), l = a._gsClassPT) {
              for (m = {}, n = l.data; n;) m[n.p] = 1, n = n._next;
              l.setRatio(1)
            }
            return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("\\s*\\b" + b.substr(2) + "\\b"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), a.setAttribute("class", g.e), j = _(a, k, $(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h)
          }
        });
        var Ra = function (a) {
          if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
            var b, c, d, e, f, g = this.t.style,
              h = i.transform.parse;
            if ("all" === this.e) g.cssText = "", e = !0;
            else
              for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1;) c = b[d], i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Aa : i[c].p), Pa(g, c);
            e && (Pa(g, ya), f = this.t._gsTransform, f && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
          }
        };
        for (ua("clearProps", {
            parser: function (a, b, d, e, f) {
              return f = new pa(a, d, 0, 0, f, 2), f.setRatio = Ra, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f
            }
          }), j = "bezier,throwProps,physicsProps,physics2D".split(","), sa = j.length; sa--;) va(j[sa]);
        j = g.prototype, j._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function (a, b, h) {
          if (!a.nodeType) return !1;
          this._target = a, this._tween = h, this._vars = b, k = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = W(a, ""), f = this._overwriteProps;
          var j, n, p, q, r, s, t, u, v, x = a.style;
          if (l && "" === x.zIndex && (j = X(a, "zIndex", e), ("auto" === j || "" === j) && this._addLazySet(x, "zIndex", 0)), "string" == typeof b && (q = x.cssText, j = $(a, e), x.cssText = q + ";" + b, j = _(a, j, $(a)).difs, !Q && w.test(b) && (j.opacity = parseFloat(RegExp.$1)), b = j, x.cssText = q), b.className ? this._firstPT = n = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = n = this.parse(a, b, null), this._transformType) {
            for (v = 3 === this._transformType, ya ? m && (l = !0, "" === x.zIndex && (t = X(a, "zIndex", e), ("auto" === t || "" === t) && this._addLazySet(x, "zIndex", 0)), o && this._addLazySet(x, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (v ? "visible" : "hidden"))) : x.zoom = 1, p = n; p && p._next;) p = p._next;
            u = new pa(a, "transform", 0, 0, null, 2), this._linkCSSP(u, null, p), u.setRatio = ya ? Na : Ma, u.data = this._transform || La(a, e, !0), u.tween = h, u.pr = -1, f.pop()
          }
          if (c) {
            for (; n;) {
              for (s = n._next, p = q; p && p.pr > n.pr;) p = p._next;
              (n._prev = p ? p._prev : r) ? n._prev._next = n: q = n, (n._next = p) ? p._prev = n : r = n, n = s
            }
            this._firstPT = q
          }
          return !0
        }, j.parse = function (a, b, c, f) {
          var g, h, j, l, m, n, o, p, q, r, s = a.style;
          for (g in b) n = b[g], h = i[g], h ? c = h.parse(a, n, g, this, c, f, b) : (m = X(a, g, e) + "", q = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || q && y.test(n) ? (q || (n = ja(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = ra(s, g, m, n, !0, "transparent", c, 0, f)) : !q || -1 === n.indexOf(" ") && -1 === n.indexOf(",") ? (j = parseFloat(m), o = j || 0 === j ? m.substr((j + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = ca(a, g, e), o = "px") : "left" === g || "top" === g ? (j = Z(a, g, e), o = "px") : (j = "opacity" !== g ? 0 : 1, o = "")), r = q && "=" === n.charAt(1), r ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(u, "")) : (l = parseFloat(n), p = q ? n.replace(u, "") : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (r ? l + j : l) + p : b[g], o !== p && "" !== p && (l || 0 === l) && j && (j = Y(a, g, j, o), "%" === p ? (j /= Y(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= Y(a, g, 1, p) : "px" !== p && (l = Y(a, g, l, p), p = "px"), r && (l || 0 === l) && (n = l + j + p)), r && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== s[g] && (n || n + "" != "NaN" && null != n) ? (c = new pa(s, g, l || j || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : S("invalid " + g + " tween value: " + b[g]) : (c = new pa(s, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p)) : c = ra(s, g, m, n, !0, null, c, 0, f)), f && c && !c.plugin && (c.plugin = f);
          return c
        }, j.setRatio = function (a) {
          var b, c, d, e = this._firstPT,
            f = 1e-6;
          if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
            if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
              for (; e;) {
                if (b = e.c * a + e.s, e.r ? b = Math.round(b) : f > b && b > -f && (b = 0), e.type)
                  if (1 === e.type)
                    if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                    else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                else {
                  for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                  e.t[e.p] = c
                } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
                else e.t[e.p] = b + e.xs0;
                e = e._next
              } else
                for (; e;) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
            else
              for (; e;) {
                if (2 !== e.type)
                  if (e.r && -1 !== e.type)
                    if (b = Math.round(e.s + e.c), e.type) {
                      if (1 === e.type) {
                        for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                        e.t[e.p] = c
                      }
                    } else e.t[e.p] = b + e.xs0;
                else e.t[e.p] = e.e;
                else e.setRatio(a);
                e = e._next
              }
        }, j._enableTransforms = function (a) {
          this._transform = this._transform || La(this._target, e, !0), this._transformType = this._transform.svg && wa || !a && 3 !== this._transformType ? 2 : 3
        };
        var Sa = function (a) {
          this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        j._addLazySet = function (a, b, c) {
          var d = this._firstPT = new pa(a, b, 0, 0, this._firstPT, 2);
          d.e = c, d.setRatio = Sa, d.data = this
        }, j._linkCSSP = function (a, b, c, d) {
          return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a
        }, j._kill = function (b) {
          var c, d, e, f = b;
          if (b.autoAlpha || b.alpha) {
            f = {};
            for (d in b) f[d] = b[d];
            f.opacity = 1, f.autoAlpha && (f.visibility = 1)
          }
          return b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), a.prototype._kill.call(this, f)
        };
        var Ta = function (a, b, c) {
          var d, e, f, g;
          if (a.slice)
            for (e = a.length; --e > -1;) Ta(a[e], b, c);
          else
            for (d = a.childNodes, e = d.length; --e > -1;) f = d[e], g = f.type, f.style && (b.push($(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Ta(f, b, c)
        };
        return g.cascadeTo = function (a, c, d) {
          var e, f, g, h, i = b.to(a, c, d),
            j = [i],
            k = [],
            l = [],
            m = [],
            n = b._internals.reservedProps;
          for (a = i._targets || i.target, Ta(a, k, m), i.render(c, !0, !0), Ta(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1;)
            if (f = _(m[e], k[e], l[e]), f.firstMPT) {
              f = f.difs;
              for (g in d) n[g] && (f[g] = d[g]);
              h = {};
              for (g in f) h[g] = k[e][g];
              j.push(b.fromTo(m[e], c, h, f))
            }
          return j
        }, a.activate([g]), g
      }, !0),
      function () {
        var a = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.5",
            priority: -1,
            API: 2,
            init: function (a, b, c) {
              return this._tween = c, !0
            }
          }),
          b = function (a) {
            for (; a;) a.f || a.blob || (a.r = 1), a = a._next
          },
          c = a.prototype;
        c._onInitAllProps = function () {
          for (var a, c, d, e = this._tween, f = e.vars.roundProps.join ? e.vars.roundProps : e.vars.roundProps.split(","), g = f.length, h = {}, i = e._propLookup.roundProps; --g > -1;) h[f[g]] = 1;
          for (g = f.length; --g > -1;)
            for (a = f[g], c = e._firstPT; c;) d = c._next, c.pg ? c.t._roundProps(h, !0) : c.n === a && (2 === c.f && c.t ? b(c.t._firstPT) : (this._add(c.t, a, c.s, c.c), d && (d._prev = c._prev), c._prev ? c._prev._next = d : e._firstPT === c && (e._firstPT = d), c._next = c._prev = null, e._propLookup[a] = i)), c = d;
          return !1
        }, c._add = function (a, b, c, d) {
          this._addTween(a, b, c, c + d, b, !0), this._overwriteProps.push(b)
        }
      }(),
      function () {
        _gsScope._gsDefine.plugin({
          propName: "attr",
          API: 2,
          version: "0.5.0",
          init: function (a, b, c) {
            var d;
            if ("function" != typeof a.setAttribute) return !1;
            for (d in b) this._addTween(a, "setAttribute", a.getAttribute(d) + "", b[d] + "", d, !1, d), this._overwriteProps.push(d);
            return !0
          }
        })
      }(), _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.2.1",
        API: 2,
        init: function (a, b, c) {
          "object" != typeof b && (b = {
            rotation: b
          }), this.finals = {};
          var d, e, f, g, h, i, j = b.useRadians === !0 ? 2 * Math.PI : 360,
            k = 1e-6;
          for (d in b) "useRadians" !== d && (i = (b[d] + "").split("_"), e = i[0], f = parseFloat("function" != typeof a[d] ? a[d] : a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]()), g = this.finals[d] = "string" == typeof e && "=" === e.charAt(1) ? f + parseInt(e.charAt(0) + "1", 10) * Number(e.substr(2)) : Number(e) || 0, h = g - f, i.length && (e = i.join("_"), -1 !== e.indexOf("short") && (h %= j, h !== h % (j / 2) && (h = 0 > h ? h + j : h - j)), -1 !== e.indexOf("_cw") && 0 > h ? h = (h + 9999999999 * j) % j - (h / j | 0) * j : -1 !== e.indexOf("ccw") && h > 0 && (h = (h - 9999999999 * j) % j - (h / j | 0) * j)), (h > k || -k > h) && (this._addTween(a, d, f, f + h, d), this._overwriteProps.push(d)));
          return !0
        },
        set: function (a) {
          var b;
          if (1 !== a) this._super.setRatio.call(this, a);
          else
            for (b = this._firstPT; b;) b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], b = b._next
        }
      })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (a) {
        var b, c, d, e = _gsScope.GreenSockGlobals || _gsScope,
          f = e.com.greensock,
          g = 2 * Math.PI,
          h = Math.PI / 2,
          i = f._class,
          j = function (b, c) {
            var d = i("easing." + b, function () {}, !0),
              e = d.prototype = new a;
            return e.constructor = d, e.getRatio = c, d
          },
          k = a.register || function () {},
          l = function (a, b, c, d, e) {
            var f = i("easing." + a, {
              easeOut: new b,
              easeIn: new c,
              easeInOut: new d
            }, !0);
            return k(f, a), f
          },
          m = function (a, b, c) {
            this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a)
          },
          n = function (b, c) {
            var d = i("easing." + b, function (a) {
                this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1
              }, !0),
              e = d.prototype = new a;
            return e.constructor = d, e.getRatio = c, e.config = function (a) {
              return new d(a)
            }, d
          },
          o = l("Back", n("BackOut", function (a) {
            return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
          }), n("BackIn", function (a) {
            return a * a * ((this._p1 + 1) * a - this._p1)
          }), n("BackInOut", function (a) {
            return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
          })),
          p = i("easing.SlowMo", function (a, b, c) {
            b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0
          }, !0),
          q = p.prototype = new a;
        return q.constructor = p, q.getRatio = function (a) {
          var b = a + (.5 - a) * this._p;
          return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
        }, p.ease = new p(.7, .7), q.config = p.config = function (a, b, c) {
          return new p(a, b, c)
        }, b = i("easing.SteppedEase", function (a) {
          a = a || 1, this._p1 = 1 / a, this._p2 = a + 1
        }, !0), q = b.prototype = new a, q.constructor = b, q.getRatio = function (a) {
          return 0 > a ? a = 0 : a >= 1 && (a = .999999999), (this._p2 * a >> 0) * this._p1
        }, q.config = b.config = function (a) {
          return new b(a)
        }, c = i("easing.RoughEase", function (b) {
          b = b || {};
          for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), n = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --n > -1;) c = o ? Math.random() : 1 / l * n, d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, e = f * f * .5 * r) : (f = 2 * (1 - c), e = f * f * .5 * r), o ? d += Math.random() * e - .5 * e : n % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = {
            x: c,
            y: d
          };
          for (j.sort(function (a, b) {
              return a.x - b.x
            }), h = new m(1, 1, null), n = l; --n > -1;) g = j[n], h = new m(g.x, g.y, h);
          this._prev = new m(0, 0, 0 !== h.t ? h : h.next)
        }, !0), q = c.prototype = new a, q.constructor = c, q.getRatio = function (a) {
          var b = this._prev;
          if (a > b.t) {
            for (; b.next && a >= b.t;) b = b.next;
            b = b.prev
          } else
            for (; b.prev && a <= b.t;) b = b.prev;
          return this._prev = b, b.v + (a - b.t) / b.gap * b.c
        }, q.config = function (a) {
          return new c(a)
        }, c.ease = new c, l("Bounce", j("BounceOut", function (a) {
          return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
        }), j("BounceIn", function (a) {
          return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
        }), j("BounceInOut", function (a) {
          var b = .5 > a;
          return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5
        })), l("Circ", j("CircOut", function (a) {
          return Math.sqrt(1 - (a -= 1) * a)
        }), j("CircIn", function (a) {
          return -(Math.sqrt(1 - a * a) - 1)
        }), j("CircInOut", function (a) {
          return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        })), d = function (b, c, d) {
          var e = i("easing." + b, function (a, b) {
              this._p1 = a >= 1 ? a : 1, this._p2 = (b || d) / (1 > a ? a : 1), this._p3 = this._p2 / g * (Math.asin(1 / this._p1) || 0), this._p2 = g / this._p2
            }, !0),
            f = e.prototype = new a;
          return f.constructor = e, f.getRatio = c, f.config = function (a, b) {
            return new e(a, b)
          }, e
        }, l("Elastic", d("ElasticOut", function (a) {
          return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1
        }, .3), d("ElasticIn", function (a) {
          return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2))
        }, .3), d("ElasticInOut", function (a) {
          return (a *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1
        }, .45)), l("Expo", j("ExpoOut", function (a) {
          return 1 - Math.pow(2, -10 * a)
        }), j("ExpoIn", function (a) {
          return Math.pow(2, 10 * (a - 1)) - .001
        }), j("ExpoInOut", function (a) {
          return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
        })), l("Sine", j("SineOut", function (a) {
          return Math.sin(a * h)
        }), j("SineIn", function (a) {
          return -Math.cos(a * h) + 1
        }), j("SineInOut", function (a) {
          return -.5 * (Math.cos(Math.PI * a) - 1)
        })), i("easing.EaseLookup", {
          find: function (b) {
            return a.map[b]
          }
        }, !0), k(e.SlowMo, "SlowMo", "ease,"), k(c, "RoughEase", "ease,"), k(b, "SteppedEase", "ease,"), o
      }, !0)
  }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  function (a, b) {
    "use strict";
    var c = a.GreenSockGlobals = a.GreenSockGlobals || a;
    if (!c.TweenLite) {
      var d, e, f, g, h, i = function (a) {
          var b, d = a.split("."),
            e = c;
          for (b = 0; b < d.length; b++) e[d[b]] = e = e[d[b]] || {};
          return e
        },
        j = i("com.greensock"),
        k = 1e-10,
        l = function (a) {
          var b, c = [],
            d = a.length;
          for (b = 0; b !== d; c.push(a[b++]));
          return c
        },
        m = function () {},
        n = function () {
          var a = Object.prototype.toString,
            b = a.call([]);
          return function (c) {
            return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
          }
        }(),
        o = {},
        p = function (d, e, f, g) {
          this.sc = o[d] ? o[d].sc : [], o[d] = this, this.gsClass = null, this.func = f;
          var h = [];
          this.check = function (j) {
            for (var k, l, m, n, q, r = e.length, s = r; --r > -1;)(k = o[e[r]] || new p(e[r], [])).gsClass ? (h[r] = k.gsClass, s--) : j && k.sc.push(this);
            if (0 === s && f)
              for (l = ("com.greensock." + d).split("."), m = l.pop(), n = i(l.join("."))[m] = this.gsClass = f.apply(f, h), g && (c[m] = n, q = "undefined" != typeof module && module.exports, !q && "function" == typeof define && define.amd ? define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function () {
                  return n
                }) : d === b && q && (module.exports = n)), r = 0; r < this.sc.length; r++) this.sc[r].check()
          }, this.check(!0)
        },
        q = a._gsDefine = function (a, b, c, d) {
          return new p(a, b, c, d)
        },
        r = j._class = function (a, b, c) {
          return b = b || function () {}, q(a, [], function () {
            return b
          }, c), b
        };
      q.globals = c;
      var s = [0, 0, 1, 1],
        t = [],
        u = r("easing.Ease", function (a, b, c, d) {
          this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? s.concat(b) : s
        }, !0),
        v = u.map = {},
        w = u.register = function (a, b, c, d) {
          for (var e, f, g, h, i = b.split(","), k = i.length, l = (c || "easeIn,easeOut,easeInOut").split(","); --k > -1;)
            for (f = i[k], e = d ? r("easing." + f, null, !0) : j.easing[f] || {}, g = l.length; --g > -1;) h = l[g], v[f + "." + h] = v[h + f] = e[h] = a.getRatio ? a : a[h] || new a
        };
      for (f = u.prototype, f._calcEnd = !1, f.getRatio = function (a) {
          if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
          var b = this._type,
            c = this._power,
            d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
          return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
        }, d = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], e = d.length; --e > -1;) f = d[e] + ",Power" + e, w(new u(null, null, 1, e), f, "easeOut", !0), w(new u(null, null, 2, e), f, "easeIn" + (0 === e ? ",easeNone" : "")), w(new u(null, null, 3, e), f, "easeInOut");
      v.linear = j.easing.Linear.easeIn, v.swing = j.easing.Quad.easeInOut;
      var x = r("events.EventDispatcher", function (a) {
        this._listeners = {}, this._eventTarget = a || this
      });
      f = x.prototype, f.addEventListener = function (a, b, c, d, e) {
        e = e || 0;
        var f, i, j = this._listeners[a],
          k = 0;
        for (null == j && (this._listeners[a] = j = []), i = j.length; --i > -1;) f = j[i], f.c === b && f.s === c ? j.splice(i, 1) : 0 === k && f.pr < e && (k = i + 1);
        j.splice(k, 0, {
          c: b,
          s: c,
          up: d,
          pr: e
        }), this !== g || h || g.wake()
      }, f.removeEventListener = function (a, b) {
        var c, d = this._listeners[a];
        if (d)
          for (c = d.length; --c > -1;)
            if (d[c].c === b) return void d.splice(c, 1)
      }, f.dispatchEvent = function (a) {
        var b, c, d, e = this._listeners[a];
        if (e)
          for (b = e.length, c = this._eventTarget; --b > -1;) d = e[b], d && (d.up ? d.c.call(d.s || c, {
            type: a,
            target: c
          }) : d.c.call(d.s || c))
      };
      var y = a.requestAnimationFrame,
        z = a.cancelAnimationFrame,
        A = Date.now || function () {
          return (new Date).getTime()
        },
        B = A();
      for (d = ["ms", "moz", "webkit", "o"], e = d.length; --e > -1 && !y;) y = a[d[e] + "RequestAnimationFrame"], z = a[d[e] + "CancelAnimationFrame"] || a[d[e] + "CancelRequestAnimationFrame"];
      r("Ticker", function (a, b) {
        var c, d, e, f, i, j = this,
          l = A(),
          n = b !== !1 && y ? "auto" : !1,
          o = 500,
          p = 33,
          q = "tick",
          r = function (a) {
            var b, g, h = A() - B;
            h > o && (l += h - p), B += h, j.time = (B - l) / 1e3, b = j.time - i, (!c || b > 0 || a === !0) && (j.frame++, i += b + (b >= f ? .004 : f - b), g = !0), a !== !0 && (e = d(r)), g && j.dispatchEvent(q)
          };
        x.call(j), j.time = j.frame = 0, j.tick = function () {
          r(!0)
        }, j.lagSmoothing = function (a, b) {
          o = a || 1 / k, p = Math.min(b, o, 0)
        }, j.sleep = function () {
          null != e && (n && z ? z(e) : clearTimeout(e), d = m, e = null, j === g && (h = !1))
        }, j.wake = function (a) {
          null !== e ? j.sleep() : a ? l += -B + (B = A()) : j.frame > 10 && (B = A() - o + 5), d = 0 === c ? m : n && y ? y : function (a) {
            return setTimeout(a, 1e3 * (i - j.time) + 1 | 0)
          }, j === g && (h = !0), r(2)
        }, j.fps = function (a) {
          return arguments.length ? (c = a, f = 1 / (c || 60), i = this.time + f, void j.wake()) : c
        }, j.useRAF = function (a) {
          return arguments.length ? (j.sleep(), n = a, void j.fps(c)) : n
        }, j.fps(a), setTimeout(function () {
          "auto" === n && j.frame < 5 && "hidden" !== document.visibilityState && j.useRAF(!1)
        }, 1500)
      }), f = j.Ticker.prototype = new j.events.EventDispatcher, f.constructor = j.Ticker;
      var C = r("core.Animation", function (a, b) {
        if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, V) {
          h || g.wake();
          var c = this.vars.useFrames ? U : V;
          c.add(this, c._time), this.vars.paused && this.paused(!0)
        }
      });
      g = C.ticker = new j.Ticker, f = C.prototype, f._dirty = f._gc = f._initted = f._paused = !1, f._totalTime = f._time = 0, f._rawPrevTime = -1, f._next = f._last = f._onUpdate = f._timeline = f.timeline = null, f._paused = !1;
      var D = function () {
        h && A() - B > 2e3 && g.wake(), setTimeout(D, 2e3)
      };
      D(), f.play = function (a, b) {
        return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
      }, f.pause = function (a, b) {
        return null != a && this.seek(a, b), this.paused(!0)
      }, f.resume = function (a, b) {
        return null != a && this.seek(a, b), this.paused(!1)
      }, f.seek = function (a, b) {
        return this.totalTime(Number(a), b !== !1)
      }, f.restart = function (a, b) {
        return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
      }, f.reverse = function (a, b) {
        return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
      }, f.render = function (a, b, c) {}, f.invalidate = function () {
        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
      }, f.isActive = function () {
        var a, b = this._timeline,
          c = this._startTime;
        return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && a < c + this.totalDuration() / this._timeScale
      }, f._enabled = function (a, b) {
        return h || g.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
      }, f._kill = function (a, b) {
        return this._enabled(!1, !1)
      }, f.kill = function (a, b) {
        return this._kill(a, b), this
      }, f._uncache = function (a) {
        for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
        return this
      }, f._swapSelfInParams = function (a) {
        for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
        return c
      }, f._callback = function (a) {
        var b = this.vars;
        b[a].apply(b[a + "Scope"] || b.callbackScope || this, b[a + "Params"] || t)
      }, f.eventCallback = function (a, b, c, d) {
        if ("on" === (a || "").substr(0, 2)) {
          var e = this.vars;
          if (1 === arguments.length) return e[a];
          null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = n(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
        }
        return this
      }, f.delay = function (a) {
        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
      }, f.duration = function (a) {
        return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
      }, f.totalDuration = function (a) {
        return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
      }, f.time = function (a, b) {
        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
      }, f.totalTime = function (a, b, c) {
        if (h || g.wake(), !arguments.length) return this._totalTime;
        if (this._timeline) {
          if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
            this._dirty && this.totalDuration();
            var d = this._totalDuration,
              e = this._timeline;
            if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)
              for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
          }
          this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (I.length && X(), this.render(a, b, !1), I.length && X())
        }
        return this
      }, f.progress = f.totalProgress = function (a, b) {
        var c = this.duration();
        return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio
      }, f.startTime = function (a) {
        return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
      }, f.endTime = function (a) {
        return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
      }, f.timeScale = function (a) {
        if (!arguments.length) return this._timeScale;
        if (a = a || k, this._timeline && this._timeline.smoothChildTiming) {
          var b = this._pauseTime,
            c = b || 0 === b ? b : this._timeline.totalTime();
          this._startTime = c - (c - this._startTime) * this._timeScale / a
        }
        return this._timeScale = a, this._uncache(!1)
      }, f.reversed = function (a) {
        return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
      }, f.paused = function (a) {
        if (!arguments.length) return this._paused;
        var b, c, d = this._timeline;
        return a != this._paused && d && (h || a || g.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this
      };
      var E = r("core.SimpleTimeline", function (a) {
        C.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
      });
      f = E.prototype = new C, f.constructor = E, f.kill()._gc = !1, f._first = f._last = f._recent = null, f._sortChildren = !1, f.add = f.insert = function (a, b, c, d) {
        var e, f;
        if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren)
          for (f = a._startTime; e && e._startTime > f;) e = e._prev;
        return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this
      }, f._remove = function (a, b) {
        return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
      }, f.render = function (a, b, c) {
        var d, e = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
      }, f.rawTime = function () {
        return h || g.wake(), this._totalTime
      };
      var F = r("TweenLite", function (b, c, d) {
          if (C.call(this, c, d), this.render = F.prototype.render, null == b) throw "Cannot tween a null target.";
          this.target = b = "string" != typeof b ? b : F.selector(b) || b;
          var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
            i = this.vars.overwrite;
          if (this._overwrite = i = null == i ? T[F.defaultOverwrite] : "number" == typeof i ? i >> 0 : T[i], (h || b instanceof Array || b.push && n(b)) && "number" != typeof b[0])
            for (this._targets = g = l(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++) f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(l(f))) : (this._siblings[e] = Y(f, this, !1), 1 === i && this._siblings[e].length > 1 && $(f, this, null, 1, this._siblings[e])) : (f = g[e--] = F.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
          else this._propLookup = {}, this._siblings = Y(b, this, !1), 1 === i && this._siblings.length > 1 && $(b, this, null, 1, this._siblings);
          (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -k, this.render(-this._delay))
        }, !0),
        G = function (b) {
          return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
        },
        H = function (a, b) {
          var c, d = {};
          for (c in a) S[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!P[c] || P[c] && P[c]._autoCSS) || (d[c] = a[c], delete a[c]);
          a.css = d
        };
      f = F.prototype = new C, f.constructor = F, f.kill()._gc = !1, f.ratio = 0, f._firstPT = f._targets = f._overwrittenProps = f._startAt = null, f._notifyPluginsOfEnabled = f._lazy = !1, F.version = "1.18.2", F.defaultEase = f._ease = new u(null, null, 1, 1), F.defaultOverwrite = "auto", F.ticker = g, F.autoSleep = 120, F.lagSmoothing = function (a, b) {
        g.lagSmoothing(a, b)
      }, F.selector = a.$ || a.jQuery || function (b) {
        var c = a.$ || a.jQuery;
        return c ? (F.selector = c, c(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
      };
      var I = [],
        J = {},
        K = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        L = function (a) {
          for (var b, c = this._firstPT, d = 1e-6; c;) b = c.blob ? a ? this.join("") : this.start : c.c * a + c.s, c.r ? b = Math.round(b) : d > b && b > -d && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next
        },
        M = function (a, b, c, d) {
          var e, f, g, h, i, j, k, l = [a, b],
            m = 0,
            n = "",
            o = 0;
          for (l.start = a, c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(K) || [], f = b.match(K) || [], d && (d._next = null, d.blob = 1, l._firstPT = d), i = f.length, h = 0; i > h; h++) k = f[h], j = b.substr(m, b.indexOf(k, m) - m), n += j || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = {
            _next: l._firstPT,
            t: l,
            p: l.length - 1,
            s: g,
            c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
            f: 0,
            r: o && 4 > o
          }), m += k.length;
          return n += b.substr(m), n && l.push(n), l.setRatio = L, l
        },
        N = function (a, b, c, d, e, f, g, h) {
          var i, j, k = "get" === c ? a[b] : c,
            l = typeof a[b],
            m = "string" == typeof d && "=" === d.charAt(1),
            n = {
              t: a,
              p: b,
              s: k,
              f: "function" === l,
              pg: 0,
              n: e || b,
              r: f,
              pr: 0,
              c: m ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - k || 0
            };
          return "number" !== l && ("function" === l && "get" === c && (j = b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3), n.s = k = g ? a[j](g) : a[j]()), "string" == typeof k && (g || isNaN(k)) ? (n.fp = g, i = M(k, d, h || F.defaultStringFilter, n), n = {
            t: i,
            p: "setRatio",
            s: 0,
            c: 1,
            f: 2,
            pg: 0,
            n: e || b,
            pr: 0
          }) : m || (n.s = parseFloat(k), n.c = parseFloat(d) - n.s || 0)), n.c ? ((n._next = this._firstPT) && (n._next._prev = n), this._firstPT = n, n) : void 0
        },
        O = F._internals = {
          isArray: n,
          isSelector: G,
          lazyTweens: I,
          blobDif: M
        },
        P = F._plugins = {},
        Q = O.tweenLookup = {},
        R = 0,
        S = O.reservedProps = {
          ease: 1,
          delay: 1,
          overwrite: 1,
          onComplete: 1,
          onCompleteParams: 1,
          onCompleteScope: 1,
          useFrames: 1,
          runBackwards: 1,
          startAt: 1,
          onUpdate: 1,
          onUpdateParams: 1,
          onUpdateScope: 1,
          onStart: 1,
          onStartParams: 1,
          onStartScope: 1,
          onReverseComplete: 1,
          onReverseCompleteParams: 1,
          onReverseCompleteScope: 1,
          onRepeat: 1,
          onRepeatParams: 1,
          onRepeatScope: 1,
          easeParams: 1,
          yoyo: 1,
          immediateRender: 1,
          repeat: 1,
          repeatDelay: 1,
          data: 1,
          paused: 1,
          reversed: 1,
          autoCSS: 1,
          lazy: 1,
          onOverwrite: 1,
          callbackScope: 1,
          stringFilter: 1
        },
        T = {
          none: 0,
          all: 1,
          auto: 2,
          concurrent: 3,
          allOnStart: 4,
          preexisting: 5,
          "true": 1,
          "false": 0
        },
        U = C._rootFramesTimeline = new E,
        V = C._rootTimeline = new E,
        W = 30,
        X = O.lazyRender = function () {
          var a, b = I.length;
          for (J = {}; --b > -1;) a = I[b], a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
          I.length = 0
        };
      V._startTime = g.time, U._startTime = g.frame, V._active = U._active = !0, setTimeout(X, 1), C._updateRoot = F.render = function () {
        var a, b, c;
        if (I.length && X(), V.render((g.time - V._startTime) * V._timeScale, !1, !1), U.render((g.frame - U._startTime) * U._timeScale, !1, !1), I.length && X(), g.frame >= W) {
          W = g.frame + (parseInt(F.autoSleep, 10) || 120);
          for (c in Q) {
            for (b = Q[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
            0 === b.length && delete Q[c]
          }
          if (c = V._first, (!c || c._paused) && F.autoSleep && !U._first && 1 === g._listeners.tick.length) {
            for (; c && c._paused;) c = c._next;
            c || g.sleep()
          }
        }
      }, g.addEventListener("tick", C._updateRoot);
      var Y = function (a, b, c) {
          var d, e, f = a._gsTweenID;
          if (Q[f || (a._gsTweenID = f = "t" + R++)] || (Q[f] = {
              target: a,
              tweens: []
            }), b && (d = Q[f].tweens, d[e = d.length] = b, c))
            for (; --e > -1;) d[e] === b && d.splice(e, 1);
          return Q[f].tweens
        },
        Z = function (a, b, c, d) {
          var e, f, g = a.vars.onOverwrite;
          return g && (e = g(a, b, c, d)), g = F.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1
        },
        $ = function (a, b, c, d, e) {
          var f, g, h, i;
          if (1 === d || d >= 4) {
            for (i = e.length, f = 0; i > f; f++)
              if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0);
              else if (5 === d) break;
            return g
          }
          var j, l = b._startTime + k,
            m = [],
            n = 0,
            o = 0 === b._duration;
          for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || _(b, 0, o), 0 === _(h, j, o) && (m[n++] = h)) : h._startTime <= l && h._startTime + h.totalDuration() / h._timeScale > l && ((o || !h._initted) && l - h._startTime <= 2e-10 || (m[n++] = h)));
          for (f = n; --f > -1;)
            if (h = m[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted) {
              if (2 !== d && !Z(h, b)) continue;
              h._enabled(!1, !1) && (g = !0)
            }
          return g
        },
        _ = function (a, b, c) {
          for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
            if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
            d = d._timeline
          }
          return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * k > f - b ? k : (f += a.totalDuration() / a._timeScale / e) > b + k ? 0 : f - b - k
        };
      f._init = function () {
        var a, b, c, d, e, f = this.vars,
          g = this._overwrittenProps,
          h = this._duration,
          i = !!f.immediateRender,
          j = f.ease;
        if (f.startAt) {
          this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {};
          for (d in f.startAt) e[d] = f.startAt[d];
          if (e.overwrite = !1, e.immediateRender = !0, e.lazy = i && f.lazy !== !1, e.startAt = e.delay = null, this._startAt = F.to(this.target, 0, e), i)
            if (this._time > 0) this._startAt = null;
            else if (0 !== h) return
        } else if (f.runBackwards && 0 !== h)
          if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
          else {
            0 !== this._time && (i = !1), c = {};
            for (d in f) S[d] && "autoCSS" !== d || (c[d] = f[d]);
            if (c.overwrite = 0, c.data = "isFromStart", c.lazy = i && f.lazy !== !1, c.immediateRender = i, this._startAt = F.to(this.target, 0, c), i) {
              if (0 === this._time) return
            } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
          }
        if (this._ease = j = j ? j instanceof u ? j : "function" == typeof j ? new u(j, f.easeParams) : v[j] || F.defaultEase : F.defaultEase, f.easeParams instanceof Array && j.config && (this._ease = j.config.apply(j, f.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
          for (a = this._targets.length; --a > -1;) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], g ? g[a] : null) && (b = !0);
        else b = this._initProps(this.target, this._propLookup, this._siblings, g);
        if (b && F._onPluginEvent("_onInitAllProps", this), g && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), f.runBackwards)
          for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
        this._onUpdate = f.onUpdate, this._initted = !0
      }, f._initProps = function (b, c, d, e) {
        var f, g, h, i, j, k;
        if (null == b) return !1;
        J[b._gsTweenID] && X(), this.vars.css || b.style && b !== a && b.nodeType && P.css && this.vars.autoCSS !== !1 && H(this.vars, b);
        for (f in this.vars)
          if (k = this.vars[f], S[f]) k && (k instanceof Array || k.push && n(k)) && -1 !== k.join("").indexOf("{self}") && (this.vars[f] = k = this._swapSelfInParams(k, this));
          else if (P[f] && (i = new P[f])._onInitTween(b, this.vars[f], this)) {
          for (this._firstPT = j = {
              _next: this._firstPT,
              t: i,
              p: "setRatio",
              s: 0,
              c: 1,
              f: 1,
              n: f,
              pg: 1,
              pr: i._priority
            }, g = i._overwriteProps.length; --g > -1;) c[i._overwriteProps[g]] = this._firstPT;
          (i._priority || i._onInitAllProps) && (h = !0), (i._onDisable || i._onEnable) && (this._notifyPluginsOfEnabled = !0), j._next && (j._next._prev = j)
        } else c[f] = N.call(this, b, f, "get", k, f, 0, null, this.vars.stringFilter);
        return e && this._kill(e, b) ? this._initProps(b, c, d, e) : this._overwrite > 1 && this._firstPT && d.length > 1 && $(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (J[b._gsTweenID] = !0), h)
      }, f.render = function (a, b, c) {
        var d, e, f, g, h = this._time,
          i = this._duration,
          j = this._rawPrevTime;
        if (a >= i - 1e-7) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > j || 0 >= a && a >= -1e-7 || j === k && "isPause" !== this.data) && j !== a && (c = !0, j > k && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : k);
        else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== k || "isPause" !== this.data) && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : k)), this._initted || (c = !0);
        else if (this._totalTime = this._time = a, this._easeType) {
          var l = a / i,
            m = this._easeType,
            n = this._easePower;
          (1 === m || 3 === m && l >= .5) && (l = 1 - l), 3 === m && (l *= 2), 1 === n ? l *= l : 2 === n ? l *= l * l : 3 === n ? l *= l * l * l : 4 === n && (l *= l * l * l * l), 1 === m ? this.ratio = 1 - l : 2 === m ? this.ratio = l : .5 > a / i ? this.ratio = l / 2 : this.ratio = 1 - l / 2
        } else this.ratio = this._ease.getRatio(a / i);
        if (this._time !== h || c) {
          if (!this._initted) {
            if (this._init(), !this._initted || this._gc) return;
            if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, I.push(this), void(this._lazy = [a, b]);
            this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
          }
          for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
          this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, b, c), b || (this._time !== h || d) && this._callback("onUpdate")), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === i && this._rawPrevTime === k && g !== k && (this._rawPrevTime = 0))
        }
      }, f._kill = function (a, b, c) {
        if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
        b = "string" != typeof b ? b || this._targets || this.target : F.selector(b) || b;
        var d, e, f, g, h, i, j, k, l, m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;
        if ((n(b) || G(b)) && "number" != typeof b[0])
          for (d = b.length; --d > -1;) this._kill(a, b[d], c) && (i = !0);
        else {
          if (this._targets) {
            for (d = this._targets.length; --d > -1;)
              if (b === this._targets[d]) {
                h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
                break
              }
          } else {
            if (b !== this.target) return !1;
            h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
          }
          if (h) {
            if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill), c && (F.onOverwrite || this.vars.onOverwrite)) {
              for (f in j) h[f] && (l || (l = []), l.push(f));
              if ((l || !a) && !Z(this, c, b, l)) return !1
            }
            for (f in j)(g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
            !this._firstPT && this._initted && this._enabled(!1, !1)
          }
        }
        return i
      }, f.invalidate = function () {
        return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], C.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -k, this.render(-this._delay)), this
      }, f._enabled = function (a, b) {
        if (h || g.wake(), a && this._gc) {
          var c, d = this._targets;
          if (d)
            for (c = d.length; --c > -1;) this._siblings[c] = Y(d[c], this, !0);
          else this._siblings = Y(this.target, this, !0)
        }
        return C.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? F._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
      }, F.to = function (a, b, c) {
        return new F(a, b, c)
      }, F.from = function (a, b, c) {
        return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new F(a, b, c)
      }, F.fromTo = function (a, b, c, d) {
        return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new F(a, b, d)
      }, F.delayedCall = function (a, b, c, d, e) {
        return new F(b, 0, {
          delay: a,
          onComplete: b,
          onCompleteParams: c,
          callbackScope: d,
          onReverseComplete: b,
          onReverseCompleteParams: c,
          immediateRender: !1,
          lazy: !1,
          useFrames: e,
          overwrite: 0
        })
      }, F.set = function (a, b) {
        return new F(a, 0, b)
      }, F.getTweensOf = function (a, b) {
        if (null == a) return [];
        a = "string" != typeof a ? a : F.selector(a) || a;
        var c, d, e, f;
        if ((n(a) || G(a)) && "number" != typeof a[0]) {
          for (c = a.length, d = []; --c > -1;) d = d.concat(F.getTweensOf(a[c], b));
          for (c = d.length; --c > -1;)
            for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
        } else
          for (d = Y(a).concat(), c = d.length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
        return d
      }, F.killTweensOf = F.killDelayedCallsTo = function (a, b, c) {
        "object" == typeof b && (c = b, b = !1);
        for (var d = F.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a)
      };
      var aa = r("plugins.TweenPlugin", function (a, b) {
        this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = aa.prototype
      }, !0);
      if (f = aa.prototype, aa.version = "1.18.0", aa.API = 2, f._firstPT = null, f._addTween = N, f.setRatio = L, f._kill = function (a) {
          var b, c = this._overwriteProps,
            d = this._firstPT;
          if (null != a[this._propName]) this._overwriteProps = [];
          else
            for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
          for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
          return !1
        }, f._roundProps = function (a, b) {
          for (var c = this._firstPT; c;)(a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && (c.r = b), c = c._next
        }, F._onPluginEvent = function (a, b) {
          var c, d, e, f, g, h = b._firstPT;
          if ("_onInitAllProps" === a) {
            for (; h;) {
              for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
              (h._prev = d ? d._prev : f) ? h._prev._next = h: e = h, (h._next = d) ? d._prev = h : f = h, h = g
            }
            h = b._firstPT = e
          }
          for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
          return c
        }, aa.activate = function (a) {
          for (var b = a.length; --b > -1;) a[b].API === aa.API && (P[(new a[b])._propName] = a[b]);
          return !0
        }, q.plugin = function (a) {
          if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
          var b, c = a.propName,
            d = a.priority || 0,
            e = a.overwriteProps,
            f = {
              init: "_onInitTween",
              set: "setRatio",
              kill: "_kill",
              round: "_roundProps",
              initAll: "_onInitAllProps"
            },
            g = r("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function () {
              aa.call(this, c, d), this._overwriteProps = e || []
            }, a.global === !0),
            h = g.prototype = new aa(c);
          h.constructor = g, g.API = a.API;
          for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
          return g.version = a.version, aa.activate([g]), g
        }, d = a._gsQueue) {
        for (e = 0; e < d.length; e++) d[e]();
        for (f in o) o[f].func || a.console.log("GSAP encountered missing dependency: com.greensock." + f)
      }
      h = !1
    }
  }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");

/* TweenMax scrollTo plugin*/
(window._gsQueue || (window._gsQueue = [])).push(function () {
  _gsDefine("plugins.ScrollToPlugin", ["plugins.TweenPlugin"], function (t) {
    var o = function () {
        t.call(this, "scrollTo"), this._overwriteProps.pop()
      },
      s = o.prototype = new t("scrollTo"),
      e = function () {
        return null != window.pageXOffset ? window.pageXOffset : null != document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft
      },
      i = function () {
        return null != window.pageYOffset ? window.pageYOffset : null != document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop
      },
      l = t.prototype.setRatio;
    return s.constructor = o, o.API = 2, s._onInitTween = function (t, o) {
      return this._wdw = t == window, this._target = t, "object" != typeof o && (o = {
        y: Number(o)
      }), this.x = this._wdw ? e() : t.scrollLeft, this.y = this._wdw ? i() : t.scrollTop, null != o.x ? this._addTween(this, "x", this.x, o.x, "scrollTo_x", !0) : this.skipX = !0, null != o.y ? this._addTween(this, "y", this.y, o.y, "scrollTo_y", !0) : this.skipY = !0, !0
    }, s._kill = function (o) {
      return o.scrollTo_x && (this.skipX = !0), o.scrollTo_x && (this.skipY = !0), t.prototype._kill.call(this, o)
    }, s.setRatio = function (t) {
      l.call(this, t), this._wdw ? window.scrollTo(this.skipX ? e() : this.x, this.skipY ? i() : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x))
    }, t.activate([o]), o
  }, !0)
}), window._gsDefine && _gsQueue.pop()();


/*mousewheel*/
(function (a) {
  function d(b) {
    var c = b || window.event,
      d = [].slice.call(arguments, 1),
      e = 0,
      f = !0,
      g = 0,
      h = 0;
    return b = a.event.fix(c), b.type = "mousewheel", c.wheelDelta && (e = c.wheelDelta / 120), c.detail && (e = -c.detail / 3), h = e, c.axis !== undefined && c.axis === c.HORIZONTAL_AXIS && (h = 0, g = -1 * e), c.wheelDeltaY !== undefined && (h = c.wheelDeltaY / 120), c.wheelDeltaX !== undefined && (g = -1 * c.wheelDeltaX / 120), d.unshift(b, e, g, h), (a.event.dispatch || a.event.handle).apply(this, d)
  }
  var b = ["DOMMouseScroll", "mousewheel"];
  if (a.event.fixHooks)
    for (var c = b.length; c;) a.event.fixHooks[b[--c]] = a.event.mouseHooks;
  a.event.special.mousewheel = {
    setup: function () {
      if (this.addEventListener)
        for (var a = b.length; a;) this.addEventListener(b[--a], d, !1);
      else this.onmousewheel = d
    },
    teardown: function () {
      if (this.removeEventListener)
        for (var a = b.length; a;) this.removeEventListener(b[--a], d, !1);
      else this.onmousewheel = null
    }
  }, a.fn.extend({
    mousewheel: function (a) {
      return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
    },
    unmousewheel: function (a) {
      return this.unbind("mousewheel", a)
    }
  })
})(jQuery);
/*custom scrollbar*/
(function (c) {
  var b = {
      init: function (e) {
        var f = {
            set_width: false,
            set_height: false,
            horizontalScroll: false,
            scrollInertia: 950,
            mouseWheel: true,
            mouseWheelPixels: "auto",
            autoDraggerLength: true,
            autoHideScrollbar: false,
            snapAmount: null,
            snapOffset: 0,
            scrollButtons: {
              enable: false,
              scrollType: "continuous",
              scrollSpeed: "auto",
              scrollAmount: 40
            },
            advanced: {
              updateOnBrowserResize: true,
              updateOnContentResize: false,
              autoExpandHorizontalScroll: false,
              autoScrollOnFocus: true,
              normalizeMouseWheelDelta: false
            },
            contentTouchScroll: true,
            callbacks: {
              onScrollStart: function () {},
              onScroll: function () {},
              onTotalScroll: function () {},
              onTotalScrollBack: function () {},
              onTotalScrollOffset: 0,
              onTotalScrollBackOffset: 0,
              whileScrolling: function () {}
            },
            theme: "light"
          },
          e = c.extend(true, f, e);
        return this.each(function () {
          var m = c(this);
          if (e.set_width) {
            m.css("width", e.set_width)
          }
          if (e.set_height) {
            m.css("height", e.set_height)
          }
          if (!c(document).data("mCustomScrollbar-index")) {
            c(document).data("mCustomScrollbar-index", "1")
          } else {
            var t = parseInt(c(document).data("mCustomScrollbar-index"));
            c(document).data("mCustomScrollbar-index", t + 1)
          }
          m.wrapInner("<div class='mCustomScrollBox mCS-" + e.theme + "' id='mCSB_" + c(document).data("mCustomScrollbar-index") + "' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_" + c(document).data("mCustomScrollbar-index"));
          var g = m.children(".mCustomScrollBox");
          if (e.horizontalScroll) {
            g.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");
            var k = g.children(".mCSB_h_wrapper");
            k.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({
              width: k.children().outerWidth(),
              position: "relative"
            }).unwrap()
          } else {
            g.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />")
          }
          var o = g.children(".mCSB_container");
          if (c.support.touch) {
            o.addClass("mCS_touch")
          }
          o.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer'><div class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");
          var l = g.children(".mCSB_scrollTools"),
            h = l.children(".mCSB_draggerContainer"),
            q = h.children(".mCSB_dragger");
          if (e.horizontalScroll) {
            q.data("minDraggerWidth", q.width())
          } else {
            q.data("minDraggerHeight", q.height())
          }
          if (e.scrollButtons.enable) {
            if (e.horizontalScroll) {
              l.prepend("<a class='mCSB_buttonLeft' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonRight' oncontextmenu='return false;'></a>")
            } else {
              l.prepend("<a class='mCSB_buttonUp' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonDown' oncontextmenu='return false;'></a>")
            }
          }
          g.bind("scroll", function () {
            if (!m.is(".mCS_disabled")) {
              g.scrollTop(0).scrollLeft(0)
            }
          });
          m.data({
            mCS_Init: true,
            mCustomScrollbarIndex: c(document).data("mCustomScrollbar-index"),
            horizontalScroll: e.horizontalScroll,
            scrollInertia: e.scrollInertia,
            scrollEasing: "mcsEaseOut",
            mouseWheel: e.mouseWheel,
            mouseWheelPixels: e.mouseWheelPixels,
            autoDraggerLength: e.autoDraggerLength,
            autoHideScrollbar: e.autoHideScrollbar,
            snapAmount: e.snapAmount,
            snapOffset: e.snapOffset,
            scrollButtons_enable: e.scrollButtons.enable,
            scrollButtons_scrollType: e.scrollButtons.scrollType,
            scrollButtons_scrollSpeed: e.scrollButtons.scrollSpeed,
            scrollButtons_scrollAmount: e.scrollButtons.scrollAmount,
            autoExpandHorizontalScroll: e.advanced.autoExpandHorizontalScroll,
            autoScrollOnFocus: e.advanced.autoScrollOnFocus,
            normalizeMouseWheelDelta: e.advanced.normalizeMouseWheelDelta,
            contentTouchScroll: e.contentTouchScroll,
            onScrollStart_Callback: e.callbacks.onScrollStart,
            onScroll_Callback: e.callbacks.onScroll,
            onTotalScroll_Callback: e.callbacks.onTotalScroll,
            onTotalScrollBack_Callback: e.callbacks.onTotalScrollBack,
            onTotalScroll_Offset: e.callbacks.onTotalScrollOffset,
            onTotalScrollBack_Offset: e.callbacks.onTotalScrollBackOffset,
            whileScrolling_Callback: e.callbacks.whileScrolling,
            bindEvent_scrollbar_drag: false,
            bindEvent_content_touch: false,
            bindEvent_scrollbar_click: false,
            bindEvent_mousewheel: false,
            bindEvent_buttonsContinuous_y: false,
            bindEvent_buttonsContinuous_x: false,
            bindEvent_buttonsPixels_y: false,
            bindEvent_buttonsPixels_x: false,
            bindEvent_focusin: false,
            bindEvent_autoHideScrollbar: false,
            mCSB_buttonScrollRight: false,
            mCSB_buttonScrollLeft: false,
            mCSB_buttonScrollDown: false,
            mCSB_buttonScrollUp: false
          });
          if (e.horizontalScroll) {
            if (m.css("max-width") !== "none") {
              if (!e.advanced.updateOnContentResize) {
                e.advanced.updateOnContentResize = true
              }
            }
          } else {
            if (m.css("max-height") !== "none") {
              var s = false,
                r = parseInt(m.css("max-height"));
              if (m.css("max-height").indexOf("%") >= 0) {
                s = r, r = m.parent().height() * s / 100
              }
              m.css("overflow", "hidden");
              g.css("max-height", r)
            }
          }
          m.mCustomScrollbar("update");
          if (e.advanced.updateOnBrowserResize) {
            var i, j = c(window).width(),
              u = c(window).height();
            c(window).bind("resize." + m.data("mCustomScrollbarIndex"), function () {
              if (i) {
                clearTimeout(i)
              }
              i = setTimeout(function () {
                if (!m.is(".mCS_disabled") && !m.is(".mCS_destroyed")) {
                  var w = c(window).width(),
                    v = c(window).height();
                  if (j !== w || u !== v) {
                    if (m.css("max-height") !== "none" && s) {
                      g.css("max-height", m.parent().height() * s / 100)
                    }
                    m.mCustomScrollbar("update");
                    j = w;
                    u = v
                  }
                }
              }, 150)
            })
          }
          if (e.advanced.updateOnContentResize) {
            var p;
            if (e.horizontalScroll) {
              var n = o.outerWidth()
            } else {
              var n = o.outerHeight()
            }
            p = setInterval(function () {
              if (e.horizontalScroll) {
                if (e.advanced.autoExpandHorizontalScroll) {
                  o.css({
                    position: "absolute",
                    width: "auto"
                  }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                    width: o.outerWidth(),
                    position: "relative"
                  }).unwrap()
                }
                var v = o.outerWidth()
              } else {
                var v = o.outerHeight()
              }
              if (v != n) {
                m.mCustomScrollbar("update");
                n = v
              }
            }, 300)
          }
        })
      },
      update: function () {
        var n = c(this),
          k = n.children(".mCustomScrollBox"),
          q = k.children(".mCSB_container");
        q.removeClass("mCS_no_scrollbar");
        n.removeClass("mCS_disabled mCS_destroyed");
        k.scrollTop(0).scrollLeft(0);
        var y = k.children(".mCSB_scrollTools"),
          o = y.children(".mCSB_draggerContainer"),
          m = o.children(".mCSB_dragger");
        if (n.data("horizontalScroll")) {
          var A = y.children(".mCSB_buttonLeft"),
            t = y.children(".mCSB_buttonRight"),
            f = k.width();
          if (n.data("autoExpandHorizontalScroll")) {
            q.css({
              position: "absolute",
              width: "auto"
            }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
              width: q.outerWidth(),
              position: "relative"
            }).unwrap()
          }
          var z = q.outerWidth()
        } else {
          var w = y.children(".mCSB_buttonUp"),
            g = y.children(".mCSB_buttonDown"),
            r = k.height(),
            i = q.outerHeight()
        }
        if (i > r && !n.data("horizontalScroll")) {
          y.css("display", "block");
          var s = o.height();
          if (n.data("autoDraggerLength")) {
            var u = Math.round(r / i * s),
              l = m.data("minDraggerHeight");
            if (u <= l) {
              m.css({
                height: l
              })
            } else {
              if (u >= s - 10) {
                var p = s - 10;
                m.css({
                  height: p
                })
              } else {
                m.css({
                  height: u
                })
              }
            }
            m.children(".mCSB_dragger_bar").css({
              "line-height": m.height() + "px"
            })
          }
          var B = m.height(),
            x = (i - r) / (s - B);
          n.data("scrollAmount", x).mCustomScrollbar("scrolling", k, q, o, m, w, g, A, t);
          var D = Math.abs(q.position().top);
          n.mCustomScrollbar("scrollTo", D, {
            scrollInertia: 0,
            trigger: "internal"
          })
        } else {
          if (z > f && n.data("horizontalScroll")) {
            y.css("display", "block");
            var h = o.width();
            if (n.data("autoDraggerLength")) {
              var j = Math.round(f / z * h),
                C = m.data("minDraggerWidth");
              if (j <= C) {
                m.css({
                  width: C
                })
              } else {
                if (j >= h - 10) {
                  var e = h - 10;
                  m.css({
                    width: e
                  })
                } else {
                  m.css({
                    width: j
                  })
                }
              }
            }
            var v = m.width(),
              x = (z - f) / (h - v);
            n.data("scrollAmount", x).mCustomScrollbar("scrolling", k, q, o, m, w, g, A, t);
            var D = Math.abs(q.position().left);
            n.mCustomScrollbar("scrollTo", D, {
              scrollInertia: 0,
              trigger: "internal"
            })
          } else {
            k.unbind("mousewheel focusin");
            if (n.data("horizontalScroll")) {
              m.add(q).css("left", 0)
            } else {
              m.add(q).css("top", 0)
            }
            y.css("display", "none");
            q.addClass("mCS_no_scrollbar");
            n.data({
              bindEvent_mousewheel: false,
              bindEvent_focusin: false
            })
          }
        }
      },
      scrolling: function (h, p, m, j, w, e, A, v) {
        var k = c(this);
        if (!k.data("bindEvent_scrollbar_drag")) {
          var n, o;
          if (c.support.msPointer) {
            j.bind("MSPointerDown", function (H) {
              H.preventDefault();
              k.data({
                on_drag: true
              });
              j.addClass("mCSB_dragger_onDrag");
              var G = c(this),
                J = G.offset(),
                F = H.originalEvent.pageX - J.left,
                I = H.originalEvent.pageY - J.top;
              if (F < G.width() && F > 0 && I < G.height() && I > 0) {
                n = I;
                o = F
              }
            });
            c(document).bind("MSPointerMove." + k.data("mCustomScrollbarIndex"), function (H) {
              H.preventDefault();
              if (k.data("on_drag")) {
                var G = j,
                  J = G.offset(),
                  F = H.originalEvent.pageX - J.left,
                  I = H.originalEvent.pageY - J.top;
                D(n, o, I, F)
              }
            }).bind("MSPointerUp." + k.data("mCustomScrollbarIndex"), function (x) {
              k.data({
                on_drag: false
              });
              j.removeClass("mCSB_dragger_onDrag")
            })
          } else {
            j.bind("mousedown touchstart", function (H) {
              H.preventDefault();
              H.stopImmediatePropagation();
              var G = c(this),
                K = G.offset(),
                F, J;
              if (H.type === "touchstart") {
                var I = H.originalEvent.touches[0] || H.originalEvent.changedTouches[0];
                F = I.pageX - K.left;
                J = I.pageY - K.top
              } else {
                k.data({
                  on_drag: true
                });
                j.addClass("mCSB_dragger_onDrag");
                F = H.pageX - K.left;
                J = H.pageY - K.top
              }
              if (F < G.width() && F > 0 && J < G.height() && J > 0) {
                n = J;
                o = F
              }
            }).bind("touchmove", function (H) {
              H.preventDefault();
              H.stopImmediatePropagation();
              var K = H.originalEvent.touches[0] || H.originalEvent.changedTouches[0],
                G = c(this),
                J = G.offset(),
                F = K.pageX - J.left,
                I = K.pageY - J.top;
              D(n, o, I, F)
            });
            c(document).bind("mousemove." + k.data("mCustomScrollbarIndex"), function (H) {
              if (k.data("on_drag")) {
                var G = j,
                  J = G.offset(),
                  F = H.pageX - J.left,
                  I = H.pageY - J.top;
                D(n, o, I, F)
              }
            }).bind("mouseup." + k.data("mCustomScrollbarIndex"), function (x) {
              k.data({
                on_drag: false
              });
              j.removeClass("mCSB_dragger_onDrag")
            })
          }
          k.data({
            bindEvent_scrollbar_drag: true
          })
        }

        function D(G, H, I, F) {
          if (k.data("horizontalScroll")) {
            k.mCustomScrollbar("scrollTo", (j.position().left - (H)) + F, {
              moveDragger: true,
              trigger: "internal"
            })
          } else {
            k.mCustomScrollbar("scrollTo", (j.position().top - (G)) + I, {
              moveDragger: true,
              trigger: "internal"
            })
          }
        }
        if (c.support.touch && k.data("contentTouchScroll")) {
          if (!k.data("bindEvent_content_touch")) {
            var l, B, r, s, u, C, E;
            p.bind("touchstart", function (x) {
              x.stopImmediatePropagation();
              l = x.originalEvent.touches[0] || x.originalEvent.changedTouches[0];
              B = c(this);
              r = B.offset();
              u = l.pageX - r.left;
              s = l.pageY - r.top;
              C = s;
              E = u
            });
            p.bind("touchmove", function (x) {
              x.preventDefault();
              x.stopImmediatePropagation();
              l = x.originalEvent.touches[0] || x.originalEvent.changedTouches[0];
              B = c(this).parent();
              r = B.offset();
              u = l.pageX - r.left;
              s = l.pageY - r.top;
              if (k.data("horizontalScroll")) {
                k.mCustomScrollbar("scrollTo", E - u, {
                  trigger: "internal"
                })
              } else {
                k.mCustomScrollbar("scrollTo", C - s, {
                  trigger: "internal"
                })
              }
            })
          }
        }
        if (!k.data("bindEvent_scrollbar_click")) {
          m.bind("click", function (F) {
            var x = (F.pageY - m.offset().top) * k.data("scrollAmount"),
              y = c(F.target);
            if (k.data("horizontalScroll")) {
              x = (F.pageX - m.offset().left) * k.data("scrollAmount")
            }
            if (y.hasClass("mCSB_draggerContainer") || y.hasClass("mCSB_draggerRail")) {
              k.mCustomScrollbar("scrollTo", x, {
                trigger: "internal",
                scrollEasing: "draggerRailEase"
              })
            }
          });
          k.data({
            bindEvent_scrollbar_click: true
          })
        }
        if (k.data("mouseWheel")) {
          if (!k.data("bindEvent_mousewheel")) {
            h.bind("mousewheel", function (H, J) {
              var G, F = k.data("mouseWheelPixels"),
                x = Math.abs(p.position().top),
                I = j.position().top,
                y = m.height() - j.height();
              if (k.data("normalizeMouseWheelDelta")) {
                if (J < 0) {
                  J = -1
                } else {
                  J = 1
                }
              }
              if (F === "auto") {
                F = 100 + Math.round(k.data("scrollAmount") / 2)
              }
              if (k.data("horizontalScroll")) {
                I = j.position().left;
                y = m.width() - j.width();
                x = Math.abs(p.position().left)
              }
              if ((J > 0 && I !== 0) || (J < 0 && I !== y)) {
                H.preventDefault();
                H.stopImmediatePropagation()
              }
              G = x - (J * F);
              k.mCustomScrollbar("scrollTo", G, {
                trigger: "internal"
              })
            });
            k.data({
              bindEvent_mousewheel: true
            })
          }
        }
        if (k.data("scrollButtons_enable")) {
          if (k.data("scrollButtons_scrollType") === "pixels") {
            if (k.data("horizontalScroll")) {
              v.add(A).unbind("mousedown touchstart MSPointerDown mouseup MSPointerUp mouseout MSPointerOut touchend", i, g);
              k.data({
                bindEvent_buttonsContinuous_x: false
              });
              if (!k.data("bindEvent_buttonsPixels_x")) {
                v.bind("click", function (x) {
                  x.preventDefault();
                  q(Math.abs(p.position().left) + k.data("scrollButtons_scrollAmount"))
                });
                A.bind("click", function (x) {
                  x.preventDefault();
                  q(Math.abs(p.position().left) - k.data("scrollButtons_scrollAmount"))
                });
                k.data({
                  bindEvent_buttonsPixels_x: true
                })
              }
            } else {
              e.add(w).unbind("mousedown touchstart MSPointerDown mouseup MSPointerUp mouseout MSPointerOut touchend", i, g);
              k.data({
                bindEvent_buttonsContinuous_y: false
              });
              if (!k.data("bindEvent_buttonsPixels_y")) {
                e.bind("click", function (x) {
                  x.preventDefault();
                  q(Math.abs(p.position().top) + k.data("scrollButtons_scrollAmount"))
                });
                w.bind("click", function (x) {
                  x.preventDefault();
                  q(Math.abs(p.position().top) - k.data("scrollButtons_scrollAmount"))
                });
                k.data({
                  bindEvent_buttonsPixels_y: true
                })
              }
            }

            function q(x) {
              if (!j.data("preventAction")) {
                j.data("preventAction", true);
                k.mCustomScrollbar("scrollTo", x, {
                  trigger: "internal"
                })
              }
            }
          } else {
            if (k.data("horizontalScroll")) {
              v.add(A).unbind("click");
              k.data({
                bindEvent_buttonsPixels_x: false
              });
              if (!k.data("bindEvent_buttonsContinuous_x")) {
                v.bind("mousedown touchstart MSPointerDown", function (y) {
                  y.preventDefault();
                  var x = z();
                  k.data({
                    mCSB_buttonScrollRight: setInterval(function () {
                      k.mCustomScrollbar("scrollTo", Math.abs(p.position().left) + x, {
                        trigger: "internal",
                        scrollEasing: "easeOutCirc"
                      })
                    }, 17)
                  })
                });
                var i = function (x) {
                  x.preventDefault();
                  clearInterval(k.data("mCSB_buttonScrollRight"))
                };
                v.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", i);
                A.bind("mousedown touchstart MSPointerDown", function (y) {
                  y.preventDefault();
                  var x = z();
                  k.data({
                    mCSB_buttonScrollLeft: setInterval(function () {
                      k.mCustomScrollbar("scrollTo", Math.abs(p.position().left) - x, {
                        trigger: "internal",
                        scrollEasing: "easeOutCirc"
                      })
                    }, 17)
                  })
                });
                var g = function (x) {
                  x.preventDefault();
                  clearInterval(k.data("mCSB_buttonScrollLeft"))
                };
                A.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", g);
                k.data({
                  bindEvent_buttonsContinuous_x: true
                })
              }
            } else {
              e.add(w).unbind("click");
              k.data({
                bindEvent_buttonsPixels_y: false
              });
              if (!k.data("bindEvent_buttonsContinuous_y")) {
                e.bind("mousedown touchstart MSPointerDown", function (y) {
                  y.preventDefault();
                  var x = z();
                  k.data({
                    mCSB_buttonScrollDown: setInterval(function () {
                      k.mCustomScrollbar("scrollTo", Math.abs(p.position().top) + x, {
                        trigger: "internal",
                        scrollEasing: "easeOutCirc"
                      })
                    }, 17)
                  })
                });
                var t = function (x) {
                  x.preventDefault();
                  clearInterval(k.data("mCSB_buttonScrollDown"))
                };
                e.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", t);
                w.bind("mousedown touchstart MSPointerDown", function (y) {
                  y.preventDefault();
                  var x = z();
                  k.data({
                    mCSB_buttonScrollUp: setInterval(function () {
                      k.mCustomScrollbar("scrollTo", Math.abs(p.position().top) - x, {
                        trigger: "internal",
                        scrollEasing: "easeOutCirc"
                      })
                    }, 17)
                  })
                });
                var f = function (x) {
                  x.preventDefault();
                  clearInterval(k.data("mCSB_buttonScrollUp"))
                };
                w.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", f);
                k.data({
                  bindEvent_buttonsContinuous_y: true
                })
              }
            }

            function z() {
              var x = k.data("scrollButtons_scrollSpeed");
              if (k.data("scrollButtons_scrollSpeed") === "auto") {
                x = Math.round((k.data("scrollInertia") + 100) / 40)
              }
              return x
            }
          }
        }
        if (k.data("autoScrollOnFocus")) {
          if (!k.data("bindEvent_focusin")) {
            h.bind("focusin", function () {
              h.scrollTop(0).scrollLeft(0);
              var x = c(document.activeElement);
              if (x.is("input,textarea,select,button,a[tabindex],area,object")) {
                var G = p.position().top,
                  y = x.position().top,
                  F = h.height() - x.outerHeight();
                if (k.data("horizontalScroll")) {
                  G = p.position().left;
                  y = x.position().left;
                  F = h.width() - x.outerWidth()
                }
                if (G + y < 0 || G + y > F) {
                  k.mCustomScrollbar("scrollTo", y, {
                    trigger: "internal"
                  })
                }
              }
            });
            k.data({
              bindEvent_focusin: true
            })
          }
        }
        if (k.data("autoHideScrollbar")) {
          if (!k.data("bindEvent_autoHideScrollbar")) {
            h.bind("mouseenter", function (x) {
              h.addClass("mCS-mouse-over");
              d.showScrollbar.call(h.children(".mCSB_scrollTools"))
            }).bind("mouseleave touchend", function (x) {
              h.removeClass("mCS-mouse-over");
              if (x.type === "mouseleave") {
                d.hideScrollbar.call(h.children(".mCSB_scrollTools"))
              }
            });
            k.data({
              bindEvent_autoHideScrollbar: true
            })
          }
        }
      },
      scrollTo: function (e, f) {
        var i = c(this),
          o = {
            moveDragger: false,
            trigger: "external",
            callbacks: true,
            scrollInertia: i.data("scrollInertia"),
            scrollEasing: i.data("scrollEasing")
          },
          f = c.extend(o, f),
          p, g = i.children(".mCustomScrollBox"),
          k = g.children(".mCSB_container"),
          r = g.children(".mCSB_scrollTools"),
          j = r.children(".mCSB_draggerContainer"),
          h = j.children(".mCSB_dragger"),
          t = draggerSpeed = f.scrollInertia,
          q, s, m, l;
        if (!k.hasClass("mCS_no_scrollbar")) {
          i.data({
            mCS_trigger: f.trigger
          });
          if (i.data("mCS_Init")) {
            f.callbacks = false
          }
          if (e || e === 0) {
            if (typeof (e) === "number") {
              if (f.moveDragger) {
                p = e;
                if (i.data("horizontalScroll")) {
                  e = h.position().left * i.data("scrollAmount")
                } else {
                  e = h.position().top * i.data("scrollAmount")
                }
                draggerSpeed = 0
              } else {
                p = e / i.data("scrollAmount")
              }
            } else {
              if (typeof (e) === "string") {
                var v;
                if (e === "top") {
                  v = 0
                } else {
                  if (e === "bottom" && !i.data("horizontalScroll")) {
                    v = k.outerHeight() - g.height()
                  } else {
                    if (e === "left") {
                      v = 0
                    } else {
                      if (e === "right" && i.data("horizontalScroll")) {
                        v = k.outerWidth() - g.width()
                      } else {
                        if (e === "first") {
                          v = i.find(".mCSB_container").find(":first")
                        } else {
                          if (e === "last") {
                            v = i.find(".mCSB_container").find(":last")
                          } else {
                            v = i.find(e)
                          }
                        }
                      }
                    }
                  }
                }
                if (v.length === 1) {
                  if (i.data("horizontalScroll")) {
                    e = v.position().left
                  } else {
                    e = v.position().top
                  }
                  p = e / i.data("scrollAmount")
                } else {
                  p = e = v
                }
              }
            }
            if (i.data("horizontalScroll")) {
              if (i.data("onTotalScrollBack_Offset")) {
                s = -i.data("onTotalScrollBack_Offset")
              }
              if (i.data("onTotalScroll_Offset")) {
                l = g.width() - k.outerWidth() + i.data("onTotalScroll_Offset")
              }
              if (p < 0) {
                p = e = 0;
                clearInterval(i.data("mCSB_buttonScrollLeft"));
                if (!s) {
                  q = true
                }
              } else {
                if (p >= j.width() - h.width()) {
                  p = j.width() - h.width();
                  e = g.width() - k.outerWidth();
                  clearInterval(i.data("mCSB_buttonScrollRight"));
                  if (!l) {
                    m = true
                  }
                } else {
                  e = -e
                }
              }
              var n = i.data("snapAmount");
              if (n) {
                e = Math.round(e / n) * n - i.data("snapOffset")
              }
              d.mTweenAxis.call(this, h[0], "left", Math.round(p), draggerSpeed, f.scrollEasing);
              d.mTweenAxis.call(this, k[0], "left", Math.round(e), t, f.scrollEasing, {
                onStart: function () {
                  if (f.callbacks && !i.data("mCS_tweenRunning")) {
                    u("onScrollStart")
                  }
                  if (i.data("autoHideScrollbar")) {
                    d.showScrollbar.call(r)
                  }
                },
                onUpdate: function () {
                  if (f.callbacks) {
                    u("whileScrolling")
                  }
                },
                onComplete: function () {
                  if (f.callbacks) {
                    u("onScroll");
                    if (q || (s && k.position().left >= s)) {
                      u("onTotalScrollBack")
                    }
                    if (m || (l && k.position().left <= l)) {
                      u("onTotalScroll")
                    }
                  }
                  h.data("preventAction", false);
                  i.data("mCS_tweenRunning", false);
                  if (i.data("autoHideScrollbar")) {
                    if (!g.hasClass("mCS-mouse-over")) {
                      d.hideScrollbar.call(r)
                    }
                  }
                }
              })
            } else {
              if (i.data("onTotalScrollBack_Offset")) {
                s = -i.data("onTotalScrollBack_Offset")
              }
              if (i.data("onTotalScroll_Offset")) {
                l = g.height() - k.outerHeight() + i.data("onTotalScroll_Offset")
              }
              if (p < 0) {
                p = e = 0;
                clearInterval(i.data("mCSB_buttonScrollUp"));
                if (!s) {
                  q = true
                }
              } else {
                if (p >= j.height() - h.height()) {
                  p = j.height() - h.height();
                  e = g.height() - k.outerHeight();
                  clearInterval(i.data("mCSB_buttonScrollDown"));
                  if (!l) {
                    m = true
                  }
                } else {
                  e = -e
                }
              }
              var n = i.data("snapAmount");
              if (n) {
                e = Math.round(e / n) * n - i.data("snapOffset")
              }
              d.mTweenAxis.call(this, h[0], "top", Math.round(p), draggerSpeed, f.scrollEasing);
              d.mTweenAxis.call(this, k[0], "top", Math.round(e), t, f.scrollEasing, {
                onStart: function () {
                  if (f.callbacks && !i.data("mCS_tweenRunning")) {
                    u("onScrollStart")
                  }
                  if (i.data("autoHideScrollbar")) {
                    d.showScrollbar.call(r)
                  }
                },
                onUpdate: function () {
                  if (f.callbacks) {
                    u("whileScrolling")
                  }
                },
                onComplete: function () {
                  if (f.callbacks) {
                    u("onScroll");
                    if (q || (s && k.position().top >= s)) {
                      u("onTotalScrollBack")
                    }
                    if (m || (l && k.position().top <= l)) {
                      u("onTotalScroll")
                    }
                  }
                  h.data("preventAction", false);
                  i.data("mCS_tweenRunning", false);
                  if (i.data("autoHideScrollbar")) {
                    if (!g.hasClass("mCS-mouse-over")) {
                      d.hideScrollbar.call(r)
                    }
                  }
                }
              })
            }
            if (i.data("mCS_Init")) {
              i.data({
                mCS_Init: false
              })
            }
          }
        }

        function u(w) {
          this.mcs = {
            top: k.position().top,
            left: k.position().left,
            draggerTop: h.position().top,
            draggerLeft: h.position().left,
            topPct: Math.round((100 * Math.abs(k.position().top)) / Math.abs(k.outerHeight() - g.height())),
            leftPct: Math.round((100 * Math.abs(k.position().left)) / Math.abs(k.outerWidth() - g.width()))
          };
          switch (w) {
            case "onScrollStart":
              i.data("mCS_tweenRunning", true).data("onScrollStart_Callback").call(i, this.mcs);
              break;
            case "whileScrolling":
              i.data("whileScrolling_Callback").call(i, this.mcs);
              break;
            case "onScroll":
              i.data("onScroll_Callback").call(i, this.mcs);
              break;
            case "onTotalScrollBack":
              i.data("onTotalScrollBack_Callback").call(i, this.mcs);
              break;
            case "onTotalScroll":
              i.data("onTotalScroll_Callback").call(i, this.mcs);
              break
          }
        }
      },
      stop: function () {
        var g = c(this),
          e = g.children().children(".mCSB_container"),
          f = g.children().children().children().children(".mCSB_dragger");
        d.mTweenAxisStop.call(this, e[0]);
        d.mTweenAxisStop.call(this, f[0])
      },
      disable: function (e) {
        var j = c(this),
          f = j.children(".mCustomScrollBox"),
          h = f.children(".mCSB_container"),
          g = f.children(".mCSB_scrollTools"),
          i = g.children().children(".mCSB_dragger");
        f.unbind("mousewheel focusin mouseenter mouseleave touchend");
        h.unbind("touchstart touchmove");
        if (e) {
          if (j.data("horizontalScroll")) {
            i.add(h).css("left", 0)
          } else {
            i.add(h).css("top", 0)
          }
        }
        g.css("display", "none");
        h.addClass("mCS_no_scrollbar");
        j.data({
          bindEvent_mousewheel: false,
          bindEvent_focusin: false,
          bindEvent_content_touch: false,
          bindEvent_autoHideScrollbar: false
        }).addClass("mCS_disabled")
      },
      destroy: function () {
        var e = c(this);
        e.removeClass("mCustomScrollbar _mCS_" + e.data("mCustomScrollbarIndex")).addClass("mCS_destroyed").children().children(".mCSB_container").unwrap().children().unwrap().siblings(".mCSB_scrollTools").remove();
        c(document).unbind("mousemove." + e.data("mCustomScrollbarIndex") + " mouseup." + e.data("mCustomScrollbarIndex") + " MSPointerMove." + e.data("mCustomScrollbarIndex") + " MSPointerUp." + e.data("mCustomScrollbarIndex"));
        c(window).unbind("resize." + e.data("mCustomScrollbarIndex"))
      }
    },
    d = {
      showScrollbar: function () {
        this.stop().animate({
          opacity: 1
        }, "fast")
      },
      hideScrollbar: function () {
        this.stop().animate({
          opacity: 0
        }, "fast")
      },
      mTweenAxis: function (g, i, h, f, o, y) {
        var y = y || {},
          v = y.onStart || function () {},
          p = y.onUpdate || function () {},
          w = y.onComplete || function () {};
        var n = t(),
          l, j = 0,
          r = g.offsetTop,
          s = g.style;
        if (i === "left") {
          r = g.offsetLeft
        }
        var m = h - r;
        q();
        e();

        function t() {
          if (window.performance && window.performance.now) {
            return window.performance.now()
          } else {
            if (window.performance && window.performance.webkitNow) {
              return window.performance.webkitNow()
            } else {
              if (Date.now) {
                return Date.now()
              } else {
                return new Date().getTime()
              }
            }
          }
        }

        function x() {
          if (!j) {
            v.call()
          }
          j = t() - n;
          u();
          if (j >= g._time) {
            g._time = (j > g._time) ? j + l - (j - g._time) : j + l - 1;
            if (g._time < j + 1) {
              g._time = j + 1
            }
          }
          if (g._time < f) {
            g._id = _request(x)
          } else {
            w.call()
          }
        }

        function u() {
          if (f > 0) {
            g.currVal = k(g._time, r, m, f, o);
            s[i] = Math.round(g.currVal) + "px"
          } else {
            s[i] = h + "px"
          }
          p.call()
        }

        function e() {
          l = 1000 / 60;
          g._time = j + l;
          _request = (!window.requestAnimationFrame) ? function (z) {
            u();
            return setTimeout(z, 0.01)
          } : window.requestAnimationFrame;
          g._id = _request(x)
        }

        function q() {
          if (g._id == null) {
            return
          }
          if (!window.requestAnimationFrame) {
            clearTimeout(g._id)
          } else {
            window.cancelAnimationFrame(g._id)
          }
          g._id = null
        }

        function k(B, A, F, E, C) {
          switch (C) {
            case "linear":
              return F * B / E + A;
              break;
            case "easeOutQuad":
              B /= E;
              return -F * B * (B - 2) + A;
              break;
            case "easeInOutQuad":
              B /= E / 2;
              if (B < 1) {
                return F / 2 * B * B + A
              }
              B--;
              return -F / 2 * (B * (B - 2) - 1) + A;
              break;
            case "easeOutCubic":
              B /= E;
              B--;
              return F * (B * B * B + 1) + A;
              break;
            case "easeOutQuart":
              B /= E;
              B--;
              return -F * (B * B * B * B - 1) + A;
              break;
            case "easeOutQuint":
              B /= E;
              B--;
              return F * (B * B * B * B * B + 1) + A;
              break;
            case "easeOutCirc":
              B /= E;
              B--;
              return F * Math.sqrt(1 - B * B) + A;
              break;
            case "easeOutSine":
              return F * Math.sin(B / E * (Math.PI / 2)) + A;
              break;
            case "easeOutExpo":
              return F * (-Math.pow(2, -10 * B / E) + 1) + A;
              break;
            case "mcsEaseOut":
              var D = (B /= E) * B,
                z = D * B;
              return A + F * (0.499999999999997 * z * D + -2.5 * D * D + 5.5 * z + -6.5 * D + 4 * B);
              break;
            case "draggerRailEase":
              B /= E / 2;
              if (B < 1) {
                return F / 2 * B * B * B + A
              }
              B -= 2;
              return F / 2 * (B * B * B + 2) + A;
              break
          }
        }
      },
      mTweenAxisStop: function (e) {
        if (e._id == null) {
          return
        }
        if (!window.requestAnimationFrame) {
          clearTimeout(e._id)
        } else {
          window.cancelAnimationFrame(e._id)
        }
        e._id = null
      },
      rafPolyfill: function () {
        var f = ["ms", "moz", "webkit", "o"],
          e = f.length;
        while (--e > -1 && !window.requestAnimationFrame) {
          window.requestAnimationFrame = window[f[e] + "RequestAnimationFrame"];
          window.cancelAnimationFrame = window[f[e] + "CancelAnimationFrame"] || window[f[e] + "CancelRequestAnimationFrame"]
        }
      }
    };
  d.rafPolyfill.call();
  c.support.touch = !!("ontouchstart" in window);
  c.support.msPointer = window.navigator.msPointerEnabled;
  var a = ("https:" == document.location.protocol) ? "https:" : "http:";
  c.event.special.mousewheel || document.write('<script src="' + a + '//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js"><\/script>');
  c.fn.mCustomScrollbar = function (e) {
    if (b[e]) {
      return b[e].apply(this, Array.prototype.slice.call(arguments, 1))
    } else {
      if (typeof e === "object" || !e) {
        return b.init.apply(this, arguments)
      } else {
        c.error("Method " + e + " does not exist")
      }
    }
  }
})(jQuery);

// Snap.svg 0.4.1
//
// Copyright (c) 2013 – 2015 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// build: 2015-04-13

! function (a) {
  var b, c, d = "0.4.2",
    e = "hasOwnProperty",
    f = /[\.\/]/,
    g = /\s*,\s*/,
    h = "*",
    i = function (a, b) {
      return a - b
    },
    j = {
      n: {}
    },
    k = function () {
      for (var a = 0, b = this.length; b > a; a++)
        if ("undefined" != typeof this[a]) return this[a]
    },
    l = function () {
      for (var a = this.length; --a;)
        if ("undefined" != typeof this[a]) return this[a]
    },
    m = function (a, d) {
      a = String(a);
      var e, f = c,
        g = Array.prototype.slice.call(arguments, 2),
        h = m.listeners(a),
        j = 0,
        n = [],
        o = {},
        p = [],
        q = b;
      p.firstDefined = k, p.lastDefined = l, b = a, c = 0;
      for (var r = 0, s = h.length; s > r; r++) "zIndex" in h[r] && (n.push(h[r].zIndex), h[r].zIndex < 0 && (o[h[r].zIndex] = h[r]));
      for (n.sort(i); n[j] < 0;)
        if (e = o[n[j++]], p.push(e.apply(d, g)), c) return c = f, p;
      for (r = 0; s > r; r++)
        if (e = h[r], "zIndex" in e)
          if (e.zIndex == n[j]) {
            if (p.push(e.apply(d, g)), c) break;
            do
              if (j++, e = o[n[j]], e && p.push(e.apply(d, g)), c) break; while (e)
          } else o[e.zIndex] = e;
      else if (p.push(e.apply(d, g)), c) break;
      return c = f, b = q, p
    };
  m._events = j, m.listeners = function (a) {
    var b, c, d, e, g, i, k, l, m = a.split(f),
      n = j,
      o = [n],
      p = [];
    for (e = 0, g = m.length; g > e; e++) {
      for (l = [], i = 0, k = o.length; k > i; i++)
        for (n = o[i].n, c = [n[m[e]], n[h]], d = 2; d--;) b = c[d], b && (l.push(b), p = p.concat(b.f || []));
      o = l
    }
    return p
  }, m.on = function (a, b) {
    if (a = String(a), "function" != typeof b) return function () {};
    for (var c = a.split(g), d = 0, e = c.length; e > d; d++) ! function (a) {
      for (var c, d = a.split(f), e = j, g = 0, h = d.length; h > g; g++) e = e.n, e = e.hasOwnProperty(d[g]) && e[d[g]] || (e[d[g]] = {
        n: {}
      });
      for (e.f = e.f || [], g = 0, h = e.f.length; h > g; g++)
        if (e.f[g] == b) {
          c = !0;
          break
        }!c && e.f.push(b)
    }(c[d]);
    return function (a) {
      +a == +a && (b.zIndex = +a)
    }
  }, m.f = function (a) {
    var b = [].slice.call(arguments, 1);
    return function () {
      m.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
    }
  }, m.stop = function () {
    c = 1
  }, m.nt = function (a) {
    return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b
  }, m.nts = function () {
    return b.split(f)
  }, m.off = m.unbind = function (a, b) {
    if (!a) return void(m._events = j = {
      n: {}
    });
    var c = a.split(g);
    if (c.length > 1)
      for (var d = 0, i = c.length; i > d; d++) m.off(c[d], b);
    else {
      c = a.split(f);
      var k, l, n, d, i, o, p, q = [j];
      for (d = 0, i = c.length; i > d; d++)
        for (o = 0; o < q.length; o += n.length - 2) {
          if (n = [o, 1], k = q[o].n, c[d] != h) k[c[d]] && n.push(k[c[d]]);
          else
            for (l in k) k[e](l) && n.push(k[l]);
          q.splice.apply(q, n)
        }
      for (d = 0, i = q.length; i > d; d++)
        for (k = q[d]; k.n;) {
          if (b) {
            if (k.f) {
              for (o = 0, p = k.f.length; p > o; o++)
                if (k.f[o] == b) {
                  k.f.splice(o, 1);
                  break
                }!k.f.length && delete k.f
            }
            for (l in k.n)
              if (k.n[e](l) && k.n[l].f) {
                var r = k.n[l].f;
                for (o = 0, p = r.length; p > o; o++)
                  if (r[o] == b) {
                    r.splice(o, 1);
                    break
                  }!r.length && delete k.n[l].f
              }
          } else {
            delete k.f;
            for (l in k.n) k.n[e](l) && k.n[l].f && delete k.n[l].f
          }
          k = k.n
        }
    }
  }, m.once = function (a, b) {
    var c = function () {
      return m.unbind(a, c), b.apply(this, arguments)
    };
    return m.on(a, c)
  }, m.version = d, m.toString = function () {
    return "You are running Eve " + d
  }, "undefined" != typeof module && module.exports ? module.exports = m : "function" == typeof define && define.amd ? define("eve", [], function () {
    return m
  }) : a.eve = m
}(this),
function (a, b) {
  if ("function" == typeof define && define.amd) define(["eve"], function (c) {
    return b(a, c)
  });
  else if ("undefined" != typeof exports) {
    var c = require("eve");
    module.exports = b(a, c)
  } else b(a, a.eve)
}(window || this, function (a, b) {
  var c = function (b) {
      var c = {},
        d = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function (a) {
          setTimeout(a, 16)
        },
        e = Array.isArray || function (a) {
          return a instanceof Array || "[object Array]" == Object.prototype.toString.call(a)
        },
        f = 0,
        g = "M" + (+new Date).toString(36),
        h = function () {
          return g + (f++).toString(36)
        },
        i = Date.now || function () {
          return +new Date
        },
        j = function (a) {
          var b = this;
          if (null == a) return b.s;
          var c = b.s - a;
          b.b += b.dur * c, b.B += b.dur * c, b.s = a
        },
        k = function (a) {
          var b = this;
          return null == a ? b.spd : void(b.spd = a)
        },
        l = function (a) {
          var b = this;
          return null == a ? b.dur : (b.s = b.s * a / b.dur, void(b.dur = a))
        },
        m = function () {
          var a = this;
          delete c[a.id], a.update(), b("mina.stop." + a.id, a)
        },
        n = function () {
          var a = this;
          a.pdif || (delete c[a.id], a.update(), a.pdif = a.get() - a.b)
        },
        o = function () {
          var a = this;
          a.pdif && (a.b = a.get() - a.pdif, delete a.pdif, c[a.id] = a)
        },
        p = function () {
          var a, b = this;
          if (e(b.start)) {
            a = [];
            for (var c = 0, d = b.start.length; d > c; c++) a[c] = +b.start[c] + (b.end[c] - b.start[c]) * b.easing(b.s)
          } else a = +b.start + (b.end - b.start) * b.easing(b.s);
          b.set(a)
        },
        q = function () {
          var a = 0;
          for (var e in c)
            if (c.hasOwnProperty(e)) {
              var f = c[e],
                g = f.get();
              a++, f.s = (g - f.b) / (f.dur / f.spd), f.s >= 1 && (delete c[e], f.s = 1, a--, function (a) {
                setTimeout(function () {
                  b("mina.finish." + a.id, a)
                })
              }(f)), f.update()
            }
          a && d(q)
        },
        r = function (a, b, e, f, g, i, s) {
          var t = {
            id: h(),
            start: a,
            end: b,
            b: e,
            s: 0,
            dur: f - e,
            spd: 1,
            get: g,
            set: i,
            easing: s || r.linear,
            status: j,
            speed: k,
            duration: l,
            stop: m,
            pause: n,
            resume: o,
            update: p
          };
          c[t.id] = t;
          var u, v = 0;
          for (u in c)
            if (c.hasOwnProperty(u) && (v++, 2 == v)) break;
          return 1 == v && d(q), t
        };
      return r.time = i, r.getById = function (a) {
        return c[a] || null
      }, r.linear = function (a) {
        return a
      }, r.easeout = function (a) {
        return Math.pow(a, 1.7)
      }, r.easein = function (a) {
        return Math.pow(a, .48)
      }, r.easeinout = function (a) {
        if (1 == a) return 1;
        if (0 == a) return 0;
        var b = .48 - a / 1.04,
          c = Math.sqrt(.1734 + b * b),
          d = c - b,
          e = Math.pow(Math.abs(d), 1 / 3) * (0 > d ? -1 : 1),
          f = -c - b,
          g = Math.pow(Math.abs(f), 1 / 3) * (0 > f ? -1 : 1),
          h = e + g + .5;
        return 3 * (1 - h) * h * h + h * h * h
      }, r.backin = function (a) {
        if (1 == a) return 1;
        var b = 1.70158;
        return a * a * ((b + 1) * a - b)
      }, r.backout = function (a) {
        if (0 == a) return 0;
        a -= 1;
        var b = 1.70158;
        return a * a * ((b + 1) * a + b) + 1
      }, r.elastic = function (a) {
        return a == !!a ? a : Math.pow(2, -10 * a) * Math.sin(2 * (a - .075) * Math.PI / .3) + 1
      }, r.bounce = function (a) {
        var b, c = 7.5625,
          d = 2.75;
        return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b
      }, a.mina = r, r
    }("undefined" == typeof b ? function () {} : b),
    d = function (a) {
      function c(a, b) {
        if (a) {
          if (a.nodeType) return w(a);
          if (e(a, "array") && c.set) return c.set.apply(c, a);
          if (a instanceof s) return a;
          if (null == b) return a = y.doc.querySelector(String(a)), w(a)
        }
        return a = null == a ? "100%" : a, b = null == b ? "100%" : b, new v(a, b)
      }

      function d(a, b) {
        if (b) {
          if ("#text" == a && (a = y.doc.createTextNode(b.text || b["#text"] || "")), "#comment" == a && (a = y.doc.createComment(b.text || b["#text"] || "")), "string" == typeof a && (a = d(a)), "string" == typeof b) return 1 == a.nodeType ? "xlink:" == b.substring(0, 6) ? a.getAttributeNS(T, b.substring(6)) : "xml:" == b.substring(0, 4) ? a.getAttributeNS(U, b.substring(4)) : a.getAttribute(b) : "text" == b ? a.nodeValue : null;
          if (1 == a.nodeType) {
            for (var c in b)
              if (b[z](c)) {
                var e = A(b[c]);
                e ? "xlink:" == c.substring(0, 6) ? a.setAttributeNS(T, c.substring(6), e) : "xml:" == c.substring(0, 4) ? a.setAttributeNS(U, c.substring(4), e) : a.setAttribute(c, e) : a.removeAttribute(c)
              }
          } else "text" in b && (a.nodeValue = b.text)
        } else a = y.doc.createElementNS(U, a);
        return a
      }

      function e(a, b) {
        return b = A.prototype.toLowerCase.call(b), "finite" == b ? isFinite(a) : "array" == b && (a instanceof Array || Array.isArray && Array.isArray(a)) ? !0 : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || J.call(a).slice(8, -1).toLowerCase() == b
      }

      function f(a) {
        if ("function" == typeof a || Object(a) !== a) return a;
        var b = new a.constructor;
        for (var c in a) a[z](c) && (b[c] = f(a[c]));
        return b
      }

      function h(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
          if (a[c] === b) return a.push(a.splice(c, 1)[0])
      }

      function i(a, b, c) {
        function d() {
          var e = Array.prototype.slice.call(arguments, 0),
            f = e.join("␀"),
            g = d.cache = d.cache || {},
            i = d.count = d.count || [];
          return g[z](f) ? (h(i, f), c ? c(g[f]) : g[f]) : (i.length >= 1e3 && delete g[i.shift()], i.push(f), g[f] = a.apply(b, e), c ? c(g[f]) : g[f])
        }
        return d
      }

      function j(a, b, c, d, e, f) {
        if (null == e) {
          var g = a - c,
            h = b - d;
          return g || h ? (180 + 180 * D.atan2(-h, -g) / H + 360) % 360 : 0
        }
        return j(a, b, e, f) - j(c, d, e, f)
      }

      function k(a) {
        return a % 360 * H / 180
      }

      function l(a) {
        return 180 * a / H % 360
      }

      function m(a) {
        var b = [];
        return a = a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (a, c, d) {
          return d = d.split(/\s*,\s*|\s+/), "rotate" == c && 1 == d.length && d.push(0, 0), "scale" == c && (d.length > 2 ? d = d.slice(0, 2) : 2 == d.length && d.push(0, 0), 1 == d.length && d.push(d[0], 0, 0)), b.push("skewX" == c ? ["m", 1, 0, D.tan(k(d[0])), 1, 0, 0] : "skewY" == c ? ["m", 1, D.tan(k(d[0])), 0, 1, 0, 0] : [c.charAt(0)].concat(d)), a
        }), b
      }

      function n(a, b) {
        var d = ab(a),
          e = new c.Matrix;
        if (d)
          for (var f = 0, g = d.length; g > f; f++) {
            var h, i, j, k, l, m = d[f],
              n = m.length,
              o = A(m[0]).toLowerCase(),
              p = m[0] != o,
              q = p ? e.invert() : 0;
            "t" == o && 2 == n ? e.translate(m[1], 0) : "t" == o && 3 == n ? p ? (h = q.x(0, 0), i = q.y(0, 0), j = q.x(m[1], m[2]), k = q.y(m[1], m[2]), e.translate(j - h, k - i)) : e.translate(m[1], m[2]) : "r" == o ? 2 == n ? (l = l || b, e.rotate(m[1], l.x + l.width / 2, l.y + l.height / 2)) : 4 == n && (p ? (j = q.x(m[2], m[3]), k = q.y(m[2], m[3]), e.rotate(m[1], j, k)) : e.rotate(m[1], m[2], m[3])) : "s" == o ? 2 == n || 3 == n ? (l = l || b, e.scale(m[1], m[n - 1], l.x + l.width / 2, l.y + l.height / 2)) : 4 == n ? p ? (j = q.x(m[2], m[3]), k = q.y(m[2], m[3]), e.scale(m[1], m[1], j, k)) : e.scale(m[1], m[1], m[2], m[3]) : 5 == n && (p ? (j = q.x(m[3], m[4]), k = q.y(m[3], m[4]), e.scale(m[1], m[2], j, k)) : e.scale(m[1], m[2], m[3], m[4])) : "m" == o && 7 == n && e.add(m[1], m[2], m[3], m[4], m[5], m[6])
          }
        return e
      }

      function o(a) {
        var b = a.node.ownerSVGElement && w(a.node.ownerSVGElement) || a.node.parentNode && w(a.node.parentNode) || c.select("svg") || c(0, 0),
          d = b.select("defs"),
          e = null == d ? !1 : d.node;
        return e || (e = u("defs", b.node).node), e
      }

      function p(a) {
        return a.node.ownerSVGElement && w(a.node.ownerSVGElement) || c.select("svg")
      }

      function q(a, b, c) {
        function e(a) {
          if (null == a) return I;
          if (a == +a) return a;
          d(j, {
            width: a
          });
          try {
            return j.getBBox().width
          } catch (b) {
            return 0
          }
        }

        function f(a) {
          if (null == a) return I;
          if (a == +a) return a;
          d(j, {
            height: a
          });
          try {
            return j.getBBox().height
          } catch (b) {
            return 0
          }
        }

        function g(d, e) {
          null == b ? i[d] = e(a.attr(d) || 0) : d == b && (i = e(null == c ? a.attr(d) || 0 : c))
        }
        var h = p(a).node,
          i = {},
          j = h.querySelector(".svg---mgr");
        switch (j || (j = d("rect"), d(j, {
          x: -9e9,
          y: -9e9,
          width: 10,
          height: 10,
          "class": "svg---mgr",
          fill: "none"
        }), h.appendChild(j)), a.type) {
          case "rect":
            g("rx", e), g("ry", f);
          case "image":
            g("width", e), g("height", f);
          case "text":
            g("x", e), g("y", f);
            break;
          case "circle":
            g("cx", e), g("cy", f), g("r", e);
            break;
          case "ellipse":
            g("cx", e), g("cy", f), g("rx", e), g("ry", f);
            break;
          case "line":
            g("x1", e), g("x2", e), g("y1", f), g("y2", f);
            break;
          case "marker":
            g("refX", e), g("markerWidth", e), g("refY", f), g("markerHeight", f);
            break;
          case "radialGradient":
            g("fx", e), g("fy", f);
            break;
          case "tspan":
            g("dx", e), g("dy", f);
            break;
          default:
            g(b, e)
        }
        return h.removeChild(j), i
      }

      function r(a) {
        e(a, "array") || (a = Array.prototype.slice.call(arguments, 0));
        for (var b = 0, c = 0, d = this.node; this[b];) delete this[b++];
        for (b = 0; b < a.length; b++) "set" == a[b].type ? a[b].forEach(function (a) {
          d.appendChild(a.node)
        }) : d.appendChild(a[b].node);
        var f = d.childNodes;
        for (b = 0; b < f.length; b++) this[c++] = w(f[b]);
        return this
      }

      function s(a) {
        if (a.snap in V) return V[a.snap];
        var b;
        try {
          b = a.ownerSVGElement
        } catch (c) {}
        this.node = a, b && (this.paper = new v(b)), this.type = a.tagName || a.nodeName;
        var d = this.id = S(this);
        if (this.anims = {}, this._ = {
            transform: []
          }, a.snap = d, V[d] = this, "g" == this.type && (this.add = r), this.type in {
            g: 1,
            mask: 1,
            pattern: 1,
            symbol: 1
          })
          for (var e in v.prototype) v.prototype[z](e) && (this[e] = v.prototype[e])
      }

      function t(a) {
        this.node = a
      }

      function u(a, b) {
        var c = d(a);
        b.appendChild(c);
        var e = w(c);
        return e
      }

      function v(a, b) {
        var c, e, f, g = v.prototype;
        if (a && "svg" == a.tagName) {
          if (a.snap in V) return V[a.snap];
          var h = a.ownerDocument;
          c = new s(a), e = a.getElementsByTagName("desc")[0], f = a.getElementsByTagName("defs")[0], e || (e = d("desc"), e.appendChild(h.createTextNode("Created with Snap")), c.node.appendChild(e)), f || (f = d("defs"), c.node.appendChild(f)), c.defs = f;
          for (var i in g) g[z](i) && (c[i] = g[i]);
          c.paper = c.root = c
        } else c = u("svg", y.doc.body), d(c.node, {
          height: b,
          version: 1.1,
          width: a,
          xmlns: U
        });
        return c
      }

      function w(a) {
        return a ? a instanceof s || a instanceof t ? a : a.tagName && "svg" == a.tagName.toLowerCase() ? new v(a) : a.tagName && "object" == a.tagName.toLowerCase() && "image/svg+xml" == a.type ? new v(a.contentDocument.getElementsByTagName("svg")[0]) : new s(a) : a
      }

      function x(a, b) {
        for (var c = 0, d = a.length; d > c; c++) {
          var e = {
              type: a[c].type,
              attr: a[c].attr()
            },
            f = a[c].children();
          b.push(e), f.length && x(f, e.childNodes = [])
        }
      }
      c.version = "0.4.0", c.toString = function () {
        return "Snap v" + this.version
      }, c._ = {};
      var y = {
        win: a.window,
        doc: a.window.document
      };
      c._.glob = y; {
        var z = "hasOwnProperty",
          A = String,
          B = parseFloat,
          C = parseInt,
          D = Math,
          E = D.max,
          F = D.min,
          G = D.abs,
          H = (D.pow, D.PI),
          I = (D.round, ""),
          J = Object.prototype.toString,
          K = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
          L = (c._.separator = /[,\s]+/, /[\s]*,[\s]*/),
          M = {
            hs: 1,
            rg: 1
          },
          N = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
          O = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
          P = /(-?\d*\.?\d*(?:e[\-+]?\\d+)?)[\s]*,?[\s]*/gi,
          Q = 0,
          R = "S" + (+new Date).toString(36),
          S = function (a) {
            return (a && a.type ? a.type : I) + R + (Q++).toString(36)
          },
          T = "http://www.w3.org/1999/xlink",
          U = "http://www.w3.org/2000/svg",
          V = {};
        c.url = function (a) {
          return "url('#" + a + "')"
        }
      }
      c._.$ = d, c._.id = S, c.format = function () {
        var a = /\{([^\}]+)\}/g,
          b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
          c = function (a, c, d) {
            var e = d;
            return c.replace(b, function (a, b, c, d, f) {
              b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()))
            }), e = (null == e || e == d ? a : e) + ""
          };
        return function (b, d) {
          return A(b).replace(a, function (a, b) {
            return c(a, b, d)
          })
        }
      }(), c._.clone = f, c._.cacher = i, c.rad = k, c.deg = l, c.sin = function (a) {
        return D.sin(c.rad(a))
      }, c.tan = function (a) {
        return D.tan(c.rad(a))
      }, c.cos = function (a) {
        return D.cos(c.rad(a))
      }, c.asin = function (a) {
        return c.deg(D.asin(a))
      }, c.acos = function (a) {
        return c.deg(D.acos(a))
      }, c.atan = function (a) {
        return c.deg(D.atan(a))
      }, c.atan2 = function (a) {
        return c.deg(D.atan2(a))
      }, c.angle = j, c.len = function (a, b, d, e) {
        return Math.sqrt(c.len2(a, b, d, e))
      }, c.len2 = function (a, b, c, d) {
        return (a - c) * (a - c) + (b - d) * (b - d)
      }, c.closestPoint = function (a, b, c) {
        function d(a) {
          var d = a.x - b,
            e = a.y - c;
          return d * d + e * e
        }
        for (var e, f, g, h, i = a.node, j = i.getTotalLength(), k = j / i.pathSegList.numberOfItems * .125, l = 1 / 0, m = 0; j >= m; m += k)(h = d(g = i.getPointAtLength(m))) < l && (e = g, f = m, l = h);
        for (k *= .5; k > .5;) {
          var n, o, p, q, r, s;
          (p = f - k) >= 0 && (r = d(n = i.getPointAtLength(p))) < l ? (e = n, f = p, l = r) : (q = f + k) <= j && (s = d(o = i.getPointAtLength(q))) < l ? (e = o, f = q, l = s) : k *= .5
        }
        return e = {
          x: e.x,
          y: e.y,
          length: f,
          distance: Math.sqrt(l)
        }
      }, c.is = e, c.snapTo = function (a, b, c) {
        if (c = e(c, "finite") ? c : 10, e(a, "array")) {
          for (var d = a.length; d--;)
            if (G(a[d] - b) <= c) return a[d]
        } else {
          a = +a;
          var f = b % a;
          if (c > f) return b - f;
          if (f > a - c) return b - f + a
        }
        return b
      }, c.getRGB = i(function (a) {
        if (!a || (a = A(a)).indexOf("-") + 1) return {
          r: -1,
          g: -1,
          b: -1,
          hex: "none",
          error: 1,
          toString: Z
        };
        if ("none" == a) return {
          r: -1,
          g: -1,
          b: -1,
          hex: "none",
          toString: Z
        };
        if (!(M[z](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = W(a)), !a) return {
          r: -1,
          g: -1,
          b: -1,
          hex: "none",
          error: 1,
          toString: Z
        };
        var b, d, f, g, h, i, j = a.match(K);
        return j ? (j[2] && (f = C(j[2].substring(5), 16), d = C(j[2].substring(3, 5), 16), b = C(j[2].substring(1, 3), 16)), j[3] && (f = C((h = j[3].charAt(3)) + h, 16), d = C((h = j[3].charAt(2)) + h, 16), b = C((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4].split(L), b = B(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = B(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), f = B(i[2]), "%" == i[2].slice(-1) && (f *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (g = B(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100)), j[5] ? (i = j[5].split(L), b = B(i[0]), "%" == i[0].slice(-1) && (b /= 100), d = B(i[1]), "%" == i[1].slice(-1) && (d /= 100), f = B(i[2]), "%" == i[2].slice(-1) && (f /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsba" == j[1].toLowerCase().slice(0, 4) && (g = B(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), c.hsb2rgb(b, d, f, g)) : j[6] ? (i = j[6].split(L), b = B(i[0]), "%" == i[0].slice(-1) && (b /= 100), d = B(i[1]), "%" == i[1].slice(-1) && (d /= 100), f = B(i[2]), "%" == i[2].slice(-1) && (f /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (g = B(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), c.hsl2rgb(b, d, f, g)) : (b = F(D.round(b), 255), d = F(D.round(d), 255), f = F(D.round(f), 255), g = F(E(g, 0), 1), j = {
          r: b,
          g: d,
          b: f,
          toString: Z
        }, j.hex = "#" + (16777216 | f | d << 8 | b << 16).toString(16).slice(1), j.opacity = e(g, "finite") ? g : 1, j)) : {
          r: -1,
          g: -1,
          b: -1,
          hex: "none",
          error: 1,
          toString: Z
        }
      }, c), c.hsb = i(function (a, b, d) {
        return c.hsb2rgb(a, b, d).hex
      }), c.hsl = i(function (a, b, d) {
        return c.hsl2rgb(a, b, d).hex
      }), c.rgb = i(function (a, b, c, d) {
        if (e(d, "finite")) {
          var f = D.round;
          return "rgba(" + [f(a), f(b), f(c), +d.toFixed(2)] + ")"
        }
        return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1)
      });
      var W = function (a) {
          var b = y.doc.getElementsByTagName("head")[0] || y.doc.getElementsByTagName("svg")[0],
            c = "rgb(255, 0, 0)";
          return (W = i(function (a) {
            if ("red" == a.toLowerCase()) return c;
            b.style.color = c, b.style.color = a;
            var d = y.doc.defaultView.getComputedStyle(b, I).getPropertyValue("color");
            return d == c ? null : d
          }))(a)
        },
        X = function () {
          return "hsb(" + [this.h, this.s, this.b] + ")"
        },
        Y = function () {
          return "hsl(" + [this.h, this.s, this.l] + ")"
        },
        Z = function () {
          return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
        },
        $ = function (a, b, d) {
          if (null == b && e(a, "object") && "r" in a && "g" in a && "b" in a && (d = a.b, b = a.g, a = a.r), null == b && e(a, string)) {
            var f = c.getRGB(a);
            a = f.r, b = f.g, d = f.b
          }
          return (a > 1 || b > 1 || d > 1) && (a /= 255, b /= 255, d /= 255), [a, b, d]
        },
        _ = function (a, b, d, f) {
          a = D.round(255 * a), b = D.round(255 * b), d = D.round(255 * d);
          var g = {
            r: a,
            g: b,
            b: d,
            opacity: e(f, "finite") ? f : 1,
            hex: c.rgb(a, b, d),
            toString: Z
          };
          return e(f, "finite") && (g.opacity = f), g
        };
      c.color = function (a) {
        var b;
        return e(a, "object") && "h" in a && "s" in a && "b" in a ? (b = c.hsb2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : e(a, "object") && "h" in a && "s" in a && "l" in a ? (b = c.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : (e(a, "string") && (a = c.getRGB(a)), e(a, "object") && "r" in a && "g" in a && "b" in a && !("error" in a) ? (b = c.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = c.rgb2hsb(a), a.v = b.b) : (a = {
          hex: "none"
        }, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1, a.error = 1)), a.toString = Z, a
      }, c.hsb2rgb = function (a, b, c, d) {
        e(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, d = a.o, a = a.h), a *= 360;
        var f, g, h, i, j;
        return a = a % 360 / 60, j = c * b, i = j * (1 - G(a % 2 - 1)), f = g = h = c - j, a = ~~a, f += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], _(f, g, h, d)
      }, c.hsl2rgb = function (a, b, c, d) {
        e(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;
        var f, g, h, i, j;
        return a = a % 360 / 60, j = 2 * b * (.5 > c ? c : 1 - c), i = j * (1 - G(a % 2 - 1)), f = g = h = c - j / 2, a = ~~a, f += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], _(f, g, h, d)
      }, c.rgb2hsb = function (a, b, c) {
        c = $(a, b, c), a = c[0], b = c[1], c = c[2];
        var d, e, f, g;
        return f = E(a, b, c), g = f - F(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = (d + 360) % 6 * 60 / 360, e = 0 == g ? 0 : g / f, {
          h: d,
          s: e,
          b: f,
          toString: X
        }
      }, c.rgb2hsl = function (a, b, c) {
        c = $(a, b, c), a = c[0], b = c[1], c = c[2];
        var d, e, f, g, h, i;
        return g = E(a, b, c), h = F(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = (d + 360) % 6 * 60 / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), {
          h: d,
          s: e,
          l: f,
          toString: Y
        }
      }, c.parsePathString = function (a) {
        if (!a) return null;
        var b = c.path(a);
        if (b.arr) return c.path.clone(b.arr);
        var d = {
            a: 7,
            c: 6,
            o: 2,
            h: 1,
            l: 2,
            m: 2,
            r: 4,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            u: 3,
            z: 0
          },
          f = [];
        return e(a, "array") && e(a[0], "array") && (f = c.path.clone(a)), f.length || A(a).replace(N, function (a, b, c) {
          var e = [],
            g = b.toLowerCase();
          if (c.replace(P, function (a, b) {
              b && e.push(+b)
            }), "m" == g && e.length > 2 && (f.push([b].concat(e.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "o" == g && 1 == e.length && f.push([b, e[0]]), "r" == g) f.push([b].concat(e));
          else
            for (; e.length >= d[g] && (f.push([b].concat(e.splice(0, d[g]))), d[g]););
        }), f.toString = c.path.toString, b.arr = c.path.clone(f), f
      };
      var ab = c.parseTransformString = function (a) {
        if (!a) return null;
        var b = [];
        return e(a, "array") && e(a[0], "array") && (b = c.path.clone(a)), b.length || A(a).replace(O, function (a, c, d) {
          {
            var e = [];
            c.toLowerCase()
          }
          d.replace(P, function (a, b) {
            b && e.push(+b)
          }), b.push([c].concat(e))
        }), b.toString = c.path.toString, b
      };
      c._.svgTransform2string = m, c._.rgTransform = /^[a-z][\s]*-?\.?\d/i, c._.transform2matrix = n, c._unit2px = q;
      y.doc.contains || y.doc.compareDocumentPosition ? function (a, b) {
        var c = 9 == a.nodeType ? a.documentElement : a,
          d = b && b.parentNode;
        return a == d || !(!d || 1 != d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
      } : function (a, b) {
        if (b)
          for (; b;)
            if (b = b.parentNode, b == a) return !0;
        return !1
      };
      c._.getSomeDefs = o, c._.getSomeSVG = p, c.select = function (a) {
        return a = A(a).replace(/([^\\]):/g, "$1\\:"), w(y.doc.querySelector(a))
      }, c.selectAll = function (a) {
        for (var b = y.doc.querySelectorAll(a), d = (c.set || Array)(), e = 0; e < b.length; e++) d.push(w(b[e]));
        return d
      }, setInterval(function () {
        for (var a in V)
          if (V[z](a)) {
            var b = V[a],
              c = b.node;
            ("svg" != b.type && !c.ownerSVGElement || "svg" == b.type && (!c.parentNode || "ownerSVGElement" in c.parentNode && !c.ownerSVGElement)) && delete V[a]
          }
      }, 1e4), s.prototype.attr = function (a, c) {
        var d = this,
          f = d.node;
        if (!a) {
          if (1 != f.nodeType) return {
            text: f.nodeValue
          };
          for (var g = f.attributes, h = {}, i = 0, j = g.length; j > i; i++) h[g[i].nodeName] = g[i].nodeValue;
          return h
        }
        if (e(a, "string")) {
          if (!(arguments.length > 1)) return b("snap.util.getattr." + a, d).firstDefined();
          var k = {};
          k[a] = c, a = k
        }
        for (var l in a) a[z](l) && b("snap.util.attr." + l, d, a[l]);
        return d
      }, c.parse = function (a) {
        var b = y.doc.createDocumentFragment(),
          c = !0,
          d = y.doc.createElement("div");
        if (a = A(a), a.match(/^\s*<\s*svg(?:\s|>)/) || (a = "<svg>" + a + "</svg>", c = !1), d.innerHTML = a, a = d.getElementsByTagName("svg")[0])
          if (c) b = a;
          else
            for (; a.firstChild;) b.appendChild(a.firstChild);
        return new t(b)
      }, c.fragment = function () {
        for (var a = Array.prototype.slice.call(arguments, 0), b = y.doc.createDocumentFragment(), d = 0, e = a.length; e > d; d++) {
          var f = a[d];
          f.node && f.node.nodeType && b.appendChild(f.node), f.nodeType && b.appendChild(f), "string" == typeof f && b.appendChild(c.parse(f).node)
        }
        return new t(b)
      }, c._.make = u, c._.wrap = w, v.prototype.el = function (a, b) {
        var c = u(a, this.node);
        return b && c.attr(b), c
      }, s.prototype.children = function () {
        for (var a = [], b = this.node.childNodes, d = 0, e = b.length; e > d; d++) a[d] = c(b[d]);
        return a
      }, s.prototype.toJSON = function () {
        var a = [];
        return x([this], a), a[0]
      }, b.on("snap.util.getattr", function () {
        var a = b.nt();
        a = a.substring(a.lastIndexOf(".") + 1);
        var c = a.replace(/[A-Z]/g, function (a) {
          return "-" + a.toLowerCase()
        });
        return bb[z](c) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(c) : d(this.node, a)
      });
      var bb = {
        "alignment-baseline": 0,
        "baseline-shift": 0,
        clip: 0,
        "clip-path": 0,
        "clip-rule": 0,
        color: 0,
        "color-interpolation": 0,
        "color-interpolation-filters": 0,
        "color-profile": 0,
        "color-rendering": 0,
        cursor: 0,
        direction: 0,
        display: 0,
        "dominant-baseline": 0,
        "enable-background": 0,
        fill: 0,
        "fill-opacity": 0,
        "fill-rule": 0,
        filter: 0,
        "flood-color": 0,
        "flood-opacity": 0,
        font: 0,
        "font-family": 0,
        "font-size": 0,
        "font-size-adjust": 0,
        "font-stretch": 0,
        "font-style": 0,
        "font-variant": 0,
        "font-weight": 0,
        "glyph-orientation-horizontal": 0,
        "glyph-orientation-vertical": 0,
        "image-rendering": 0,
        kerning: 0,
        "letter-spacing": 0,
        "lighting-color": 0,
        marker: 0,
        "marker-end": 0,
        "marker-mid": 0,
        "marker-start": 0,
        mask: 0,
        opacity: 0,
        overflow: 0,
        "pointer-events": 0,
        "shape-rendering": 0,
        "stop-color": 0,
        "stop-opacity": 0,
        stroke: 0,
        "stroke-dasharray": 0,
        "stroke-dashoffset": 0,
        "stroke-linecap": 0,
        "stroke-linejoin": 0,
        "stroke-miterlimit": 0,
        "stroke-opacity": 0,
        "stroke-width": 0,
        "text-anchor": 0,
        "text-decoration": 0,
        "text-rendering": 0,
        "unicode-bidi": 0,
        visibility: 0,
        "word-spacing": 0,
        "writing-mode": 0
      };
      b.on("snap.util.attr", function (a) {
          var c = b.nt(),
            e = {};
          c = c.substring(c.lastIndexOf(".") + 1), e[c] = a;
          var f = c.replace(/-(\w)/gi, function (a, b) {
              return b.toUpperCase()
            }),
            g = c.replace(/[A-Z]/g, function (a) {
              return "-" + a.toLowerCase()
            });
          bb[z](g) ? this.node.style[f] = null == a ? I : a : d(this.node, e)
        }),
        function () {}(v.prototype), c.ajax = function (a, c, d, f) {
          var g = new XMLHttpRequest,
            h = S();
          if (g) {
            if (e(c, "function")) f = d, d = c, c = null;
            else if (e(c, "object")) {
              var i = [];
              for (var j in c) c.hasOwnProperty(j) && i.push(encodeURIComponent(j) + "=" + encodeURIComponent(c[j]));
              c = i.join("&")
            }
            return g.open(c ? "POST" : "GET", a, !0), c && (g.setRequestHeader("X-Requested-With", "XMLHttpRequest"), g.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), d && (b.once("snap.ajax." + h + ".0", d), b.once("snap.ajax." + h + ".200", d), b.once("snap.ajax." + h + ".304", d)), g.onreadystatechange = function () {
              4 == g.readyState && b("snap.ajax." + h + "." + g.status, f, g)
            }, 4 == g.readyState ? g : (g.send(c), g)
          }
        }, c.load = function (a, b, d) {
          c.ajax(a, function (a) {
            var e = c.parse(a.responseText);
            d ? b.call(d, e) : b(e)
          })
        };
      var cb = function (a) {
        var b = a.getBoundingClientRect(),
          c = a.ownerDocument,
          d = c.body,
          e = c.documentElement,
          f = e.clientTop || d.clientTop || 0,
          h = e.clientLeft || d.clientLeft || 0,
          i = b.top + (g.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
          j = b.left + (g.win.pageXOffset || e.scrollLeft || d.scrollLeft) - h;
        return {
          y: i,
          x: j
        }
      };
      return c.getElementByPoint = function (a, b) {
        var c = this,
          d = (c.canvas, y.doc.elementFromPoint(a, b));
        if (y.win.opera && "svg" == d.tagName) {
          var e = cb(d),
            f = d.createSVGRect();
          f.x = a - e.x, f.y = b - e.y, f.width = f.height = 1;
          var g = d.getIntersectionList(f, null);
          g.length && (d = g[g.length - 1])
        }
        return d ? w(d) : null
      }, c.plugin = function (a) {
        a(c, s, v, y, t)
      }, y.win.Snap = c, c
    }(a || this);
  return d.plugin(function (d, e, f, g, h) {
    function i(a, b) {
      if (null == b) {
        var c = !0;
        if (b = a.node.getAttribute("linearGradient" == a.type || "radialGradient" == a.type ? "gradientTransform" : "pattern" == a.type ? "patternTransform" : "transform"), !b) return new d.Matrix;
        b = d._.svgTransform2string(b)
      } else b = d._.rgTransform.test(b) ? o(b).replace(/\.{3}|\u2026/g, a._.transform || "") : d._.svgTransform2string(b), n(b, "array") && (b = d.path ? d.path.toString.call(b) : o(b)), a._.transform = b;
      var e = d._.transform2matrix(b, a.getBBox(1));
      return c ? e : void(a.matrix = e)
    }

    function j(a) {
      function b(a, b) {
        var c = q(a.node, b);
        c = c && c.match(f), c = c && c[2], c && "#" == c.charAt() && (c = c.substring(1), c && (h[c] = (h[c] || []).concat(function (c) {
          var d = {};
          d[b] = URL(c), q(a.node, d)
        })))
      }

      function c(a) {
        var b = q(a.node, "xlink:href");
        b && "#" == b.charAt() && (b = b.substring(1), b && (h[b] = (h[b] || []).concat(function (b) {
          a.attr("xlink:href", "#" + b)
        })))
      }
      for (var d, e = a.selectAll("*"), f = /^\s*url\(("|'|)(.*)\1\)\s*$/, g = [], h = {}, i = 0, j = e.length; j > i; i++) {
        d = e[i], b(d, "fill"), b(d, "stroke"), b(d, "filter"), b(d, "mask"), b(d, "clip-path"), c(d);
        var k = q(d.node, "id");
        k && (q(d.node, {
          id: d.id
        }), g.push({
          old: k,
          id: d.id
        }))
      }
      for (i = 0, j = g.length; j > i; i++) {
        var l = h[g[i].old];
        if (l)
          for (var m = 0, n = l.length; n > m; m++) l[m](g[i].id)
      }
    }

    function k(a, b, c) {
      return function (d) {
        var e = d.slice(a, b);
        return 1 == e.length && (e = e[0]), c ? c(e) : e
      }
    }

    function l(a) {
      return function () {
        var b = a ? "<" + this.type : "",
          c = this.node.attributes,
          d = this.node.childNodes;
        if (a)
          for (var e = 0, f = c.length; f > e; e++) b += " " + c[e].name + '="' + c[e].value.replace(/"/g, '\\"') + '"';
        if (d.length) {
          for (a && (b += ">"), e = 0, f = d.length; f > e; e++) 3 == d[e].nodeType ? b += d[e].nodeValue : 1 == d[e].nodeType && (b += u(d[e]).toString());
          a && (b += "</" + this.type + ">")
        } else a && (b += "/>");
        return b
      }
    }
    var m = e.prototype,
      n = d.is,
      o = String,
      p = d._unit2px,
      q = d._.$,
      r = d._.make,
      s = d._.getSomeDefs,
      t = "hasOwnProperty",
      u = d._.wrap;
    m.getBBox = function (a) {
      if (!d.Matrix || !d.path) return this.node.getBBox();
      var b = this,
        c = new d.Matrix;
      if (b.removed) return d._.box();
      for (;
        "use" == b.type;)
        if (a || (c = c.add(b.transform().localMatrix.translate(b.attr("x") || 0, b.attr("y") || 0))), b.original) b = b.original;
        else {
          var e = b.attr("xlink:href");
          b = b.original = b.node.ownerDocument.getElementById(e.substring(e.indexOf("#") + 1))
        }
      var f = b._,
        g = d.path.get[b.type] || d.path.get.deflt;
      try {
        return a ? (f.bboxwt = g ? d.path.getBBox(b.realPath = g(b)) : d._.box(b.node.getBBox()), d._.box(f.bboxwt)) : (b.realPath = g(b), b.matrix = b.transform().localMatrix, f.bbox = d.path.getBBox(d.path.map(b.realPath, c.add(b.matrix))), d._.box(f.bbox))
      } catch (h) {
        return d._.box()
      }
    };
    var v = function () {
      return this.string
    };
    m.transform = function (a) {
      var b = this._;
      if (null == a) {
        for (var c, e = this, f = new d.Matrix(this.node.getCTM()), g = i(this), h = [g], j = new d.Matrix, k = g.toTransformString(), l = o(g) == o(this.matrix) ? o(b.transform) : k;
          "svg" != e.type && (e = e.parent());) h.push(i(e));
        for (c = h.length; c--;) j.add(h[c]);
        return {
          string: l,
          globalMatrix: f,
          totalMatrix: j,
          localMatrix: g,
          diffMatrix: f.clone().add(g.invert()),
          global: f.toTransformString(),
          total: j.toTransformString(),
          local: k,
          toString: v
        }
      }
      return a instanceof d.Matrix ? (this.matrix = a, this._.transform = a.toTransformString()) : i(this, a), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? q(this.node, {
        gradientTransform: this.matrix
      }) : "pattern" == this.type ? q(this.node, {
        patternTransform: this.matrix
      }) : q(this.node, {
        transform: this.matrix
      })), this
    }, m.parent = function () {
      return u(this.node.parentNode)
    }, m.append = m.add = function (a) {
      if (a) {
        if ("set" == a.type) {
          var b = this;
          return a.forEach(function (a) {
            b.add(a)
          }), this
        }
        a = u(a), this.node.appendChild(a.node), a.paper = this.paper
      }
      return this
    }, m.appendTo = function (a) {
      return a && (a = u(a), a.append(this)), this
    }, m.prepend = function (a) {
      if (a) {
        if ("set" == a.type) {
          var b, c = this;
          return a.forEach(function (a) {
            b ? b.after(a) : c.prepend(a), b = a
          }), this
        }
        a = u(a);
        var d = a.parent();
        this.node.insertBefore(a.node, this.node.firstChild), this.add && this.add(), a.paper = this.paper, this.parent() && this.parent().add(), d && d.add()
      }
      return this
    }, m.prependTo = function (a) {
      return a = u(a), a.prepend(this), this
    }, m.before = function (a) {
      if ("set" == a.type) {
        var b = this;
        return a.forEach(function (a) {
          var c = a.parent();
          b.node.parentNode.insertBefore(a.node, b.node), c && c.add()
        }), this.parent().add(), this
      }
      a = u(a);
      var c = a.parent();
      return this.node.parentNode.insertBefore(a.node, this.node), this.parent() && this.parent().add(), c && c.add(), a.paper = this.paper, this
    }, m.after = function (a) {
      a = u(a);
      var b = a.parent();
      return this.node.nextSibling ? this.node.parentNode.insertBefore(a.node, this.node.nextSibling) : this.node.parentNode.appendChild(a.node), this.parent() && this.parent().add(), b && b.add(), a.paper = this.paper, this
    }, m.insertBefore = function (a) {
      a = u(a);
      var b = this.parent();
      return a.node.parentNode.insertBefore(this.node, a.node), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
    }, m.insertAfter = function (a) {
      a = u(a);
      var b = this.parent();
      return a.node.parentNode.insertBefore(this.node, a.node.nextSibling), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
    }, m.remove = function () {
      var a = this.parent();
      return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, a && a.add(), this
    }, m.select = function (a) {
      return u(this.node.querySelector(a))
    }, m.selectAll = function (a) {
      for (var b = this.node.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++) c.push(u(b[e]));
      return c
    }, m.asPX = function (a, b) {
      return null == b && (b = this.attr(a)), +p(this, a, b)
    }, m.use = function () {
      var a, b = this.node.id;
      return b || (b = this.id, q(this.node, {
        id: b
      })), a = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? r(this.type, this.node.parentNode) : r("use", this.node.parentNode), q(a.node, {
        "xlink:href": "#" + b
      }), a.original = this, a
    }, m.clone = function () {
      var a = u(this.node.cloneNode(!0));
      return q(a.node, "id") && q(a.node, {
        id: a.id
      }), j(a), a.insertAfter(this), a
    }, m.toDefs = function () {
      var a = s(this);
      return a.appendChild(this.node), this
    }, m.pattern = m.toPattern = function (a, b, c, d) {
      var e = r("pattern", s(this));
      return null == a && (a = this.getBBox()), n(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, a = a.x), q(e.node, {
        x: a,
        y: b,
        width: c,
        height: d,
        patternUnits: "userSpaceOnUse",
        id: e.id,
        viewBox: [a, b, c, d].join(" ")
      }), e.node.appendChild(this.node), e
    }, m.marker = function (a, b, c, d, e, f) {
      var g = r("marker", s(this));
      return null == a && (a = this.getBBox()), n(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, e = a.refX || a.cx, f = a.refY || a.cy, a = a.x), q(g.node, {
        viewBox: [a, b, c, d].join(" "),
        markerWidth: c,
        markerHeight: d,
        orient: "auto",
        refX: e || 0,
        refY: f || 0,
        id: g.id
      }), g.node.appendChild(this.node), g
    };
    var w = function (a, b, d, e) {
      "function" != typeof d || d.length || (e = d, d = c.linear), this.attr = a, this.dur = b, d && (this.easing = d), e && (this.callback = e)
    };
    d._.Animation = w, d.animation = function (a, b, c, d) {
      return new w(a, b, c, d)
    }, m.inAnim = function () {
      var a = this,
        b = [];
      for (var c in a.anims) a.anims[t](c) && ! function (a) {
        b.push({
          anim: new w(a._attrs, a.dur, a.easing, a._callback),
          mina: a,
          curStatus: a.status(),
          status: function (b) {
            return a.status(b)
          },
          stop: function () {
            a.stop()
          }
        })
      }(a.anims[c]);
      return b
    }, d.animate = function (a, d, e, f, g, h) {
      "function" != typeof g || g.length || (h = g, g = c.linear);
      var i = c.time(),
        j = c(a, d, i, i + f, c.time, e, g);
      return h && b.once("mina.finish." + j.id, h), j
    }, m.stop = function () {
      for (var a = this.inAnim(), b = 0, c = a.length; c > b; b++) a[b].stop();
      return this
    }, m.animate = function (a, d, e, f) {
      "function" != typeof e || e.length || (f = e, e = c.linear), a instanceof w && (f = a.callback, e = a.easing, d = a.dur, a = a.attr);
      var g, h, i, j, l = [],
        m = [],
        p = {},
        q = this;
      for (var r in a)
        if (a[t](r)) {
          q.equal ? (j = q.equal(r, o(a[r])), g = j.from, h = j.to, i = j.f) : (g = +q.attr(r), h = +a[r]);
          var s = n(g, "array") ? g.length : 1;
          p[r] = k(l.length, l.length + s, i), l = l.concat(g), m = m.concat(h)
        }
      var u = c.time(),
        v = c(l, m, u, u + d, c.time, function (a) {
          var b = {};
          for (var c in p) p[t](c) && (b[c] = p[c](a));
          q.attr(b)
        }, e);
      return q.anims[v.id] = v, v._attrs = a, v._callback = f, b("snap.animcreated." + q.id, v), b.once("mina.finish." + v.id, function () {
        delete q.anims[v.id], f && f.call(q)
      }), b.once("mina.stop." + v.id, function () {
        delete q.anims[v.id]
      }), q
    };
    var x = {};
    m.data = function (a, c) {
      var e = x[this.id] = x[this.id] || {};
      if (0 == arguments.length) return b("snap.data.get." + this.id, this, e, null), e;
      if (1 == arguments.length) {
        if (d.is(a, "object")) {
          for (var f in a) a[t](f) && this.data(f, a[f]);
          return this
        }
        return b("snap.data.get." + this.id, this, e[a], a), e[a]
      }
      return e[a] = c, b("snap.data.set." + this.id, this, c, a), this
    }, m.removeData = function (a) {
      return null == a ? x[this.id] = {} : x[this.id] && delete x[this.id][a], this
    }, m.outerSVG = m.toString = l(1), m.innerSVG = l(), m.toDataURL = function () {
      if (a && a.btoa) {
        var b = this.getBBox(),
          c = d.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
            x: +b.x.toFixed(3),
            y: +b.y.toFixed(3),
            width: +b.width.toFixed(3),
            height: +b.height.toFixed(3),
            contents: this.outerSVG()
          });
        return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(c)))
      }
    }, h.prototype.select = m.select, h.prototype.selectAll = m.selectAll
  }), d.plugin(function (a) {
    function b(a, b, d, e, f, g) {
      return null == b && "[object SVGMatrix]" == c.call(a) ? (this.a = a.a, this.b = a.b, this.c = a.c, this.d = a.d, this.e = a.e, void(this.f = a.f)) : void(null != a ? (this.a = +a, this.b = +b, this.c = +d, this.d = +e, this.e = +f, this.f = +g) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
    }
    var c = Object.prototype.toString,
      d = String,
      e = Math,
      f = "";
    ! function (c) {
      function g(a) {
        return a[0] * a[0] + a[1] * a[1]
      }

      function h(a) {
        var b = e.sqrt(g(a));
        a[0] && (a[0] /= b), a[1] && (a[1] /= b)
      }
      c.add = function (a, c, d, e, f, g) {
        var h, i, j, k, l = [
            [],
            [],
            []
          ],
          m = [
            [this.a, this.c, this.e],
            [this.b, this.d, this.f],
            [0, 0, 1]
          ],
          n = [
            [a, d, f],
            [c, e, g],
            [0, 0, 1]
          ];
        for (a && a instanceof b && (n = [
            [a.a, a.c, a.e],
            [a.b, a.d, a.f],
            [0, 0, 1]
          ]), h = 0; 3 > h; h++)
          for (i = 0; 3 > i; i++) {
            for (k = 0, j = 0; 3 > j; j++) k += m[h][j] * n[j][i];
            l[h][i] = k
          }
        return this.a = l[0][0], this.b = l[1][0], this.c = l[0][1], this.d = l[1][1], this.e = l[0][2], this.f = l[1][2], this
      }, c.invert = function () {
        var a = this,
          c = a.a * a.d - a.b * a.c;
        return new b(a.d / c, -a.b / c, -a.c / c, a.a / c, (a.c * a.f - a.d * a.e) / c, (a.b * a.e - a.a * a.f) / c)
      }, c.clone = function () {
        return new b(this.a, this.b, this.c, this.d, this.e, this.f)
      }, c.translate = function (a, b) {
        return this.add(1, 0, 0, 1, a, b)
      }, c.scale = function (a, b, c, d) {
        return null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d), this
      }, c.rotate = function (b, c, d) {
        b = a.rad(b), c = c || 0, d = d || 0;
        var f = +e.cos(b).toFixed(9),
          g = +e.sin(b).toFixed(9);
        return this.add(f, g, -g, f, c, d), this.add(1, 0, 0, 1, -c, -d)
      }, c.x = function (a, b) {
        return a * this.a + b * this.c + this.e
      }, c.y = function (a, b) {
        return a * this.b + b * this.d + this.f
      }, c.get = function (a) {
        return +this[d.fromCharCode(97 + a)].toFixed(4)
      }, c.toString = function () {
        return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
      }, c.offset = function () {
        return [this.e.toFixed(4), this.f.toFixed(4)]
      }, c.determinant = function () {
        return this.a * this.d - this.b * this.c
      }, c.split = function () {
        var b = {};
        b.dx = this.e, b.dy = this.f;
        var c = [
          [this.a, this.c],
          [this.b, this.d]
        ];
        b.scalex = e.sqrt(g(c[0])), h(c[0]), b.shear = c[0][0] * c[1][0] + c[0][1] * c[1][1], c[1] = [c[1][0] - c[0][0] * b.shear, c[1][1] - c[0][1] * b.shear], b.scaley = e.sqrt(g(c[1])), h(c[1]), b.shear /= b.scaley, this.determinant() < 0 && (b.scalex = -b.scalex);
        var d = -c[0][1],
          f = c[1][1];
        return 0 > f ? (b.rotate = a.deg(e.acos(f)), 0 > d && (b.rotate = 360 - b.rotate)) : b.rotate = a.deg(e.asin(d)), b.isSimple = !(+b.shear.toFixed(9) || b.scalex.toFixed(9) != b.scaley.toFixed(9) && b.rotate), b.isSuperSimple = !+b.shear.toFixed(9) && b.scalex.toFixed(9) == b.scaley.toFixed(9) && !b.rotate, b.noRotation = !+b.shear.toFixed(9) && !b.rotate, b
      }, c.toTransformString = function (a) {
        var b = a || this.split();
        return +b.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [+b.dx.toFixed(4), +b.dy.toFixed(4)] : f) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : f) + (b.rotate ? "r" + [+b.rotate.toFixed(4), 0, 0] : f))
      }
    }(b.prototype), a.Matrix = b, a.matrix = function (a, c, d, e, f, g) {
      return new b(a, c, d, e, f, g)
    }
  }), d.plugin(function (a, c, d, e, f) {
    function g(d) {
      return function (e) {
        if (b.stop(), e instanceof f && 1 == e.node.childNodes.length && ("radialGradient" == e.node.firstChild.tagName || "linearGradient" == e.node.firstChild.tagName || "pattern" == e.node.firstChild.tagName) && (e = e.node.firstChild, n(this).appendChild(e), e = l(e)), e instanceof c)
          if ("radialGradient" == e.type || "linearGradient" == e.type || "pattern" == e.type) {
            e.node.id || p(e.node, {
              id: e.id
            });
            var g = q(e.node.id)
          } else g = e.attr(d);
        else if (g = a.color(e), g.error) {
          var h = a(n(this).ownerSVGElement).gradient(e);
          h ? (h.node.id || p(h.node, {
            id: h.id
          }), g = q(h.node.id)) : g = e
        } else g = r(g);
        var i = {};
        i[d] = g, p(this.node, i), this.node.style[d] = t
      }
    }

    function h(a) {
      b.stop(), a == +a && (a += "px"), this.node.style.fontSize = a
    }

    function i(a) {
      for (var b = [], c = a.childNodes, d = 0, e = c.length; e > d; d++) {
        var f = c[d];
        3 == f.nodeType && b.push(f.nodeValue), "tspan" == f.tagName && b.push(1 == f.childNodes.length && 3 == f.firstChild.nodeType ? f.firstChild.nodeValue : i(f))
      }
      return b
    }

    function j() {
      return b.stop(), this.node.style.fontSize
    }
    var k = a._.make,
      l = a._.wrap,
      m = a.is,
      n = a._.getSomeDefs,
      o = /^url\(#?([^)]+)\)$/,
      p = a._.$,
      q = a.url,
      r = String,
      s = a._.separator,
      t = "";
    b.on("snap.util.attr.mask", function (a) {
        if (a instanceof c || a instanceof f) {
          if (b.stop(), a instanceof f && 1 == a.node.childNodes.length && (a = a.node.firstChild, n(this).appendChild(a), a = l(a)), "mask" == a.type) var d = a;
          else d = k("mask", n(this)), d.node.appendChild(a.node);
          !d.node.id && p(d.node, {
            id: d.id
          }), p(this.node, {
            mask: q(d.id)
          })
        }
      }),
      function (a) {
        b.on("snap.util.attr.clip", a), b.on("snap.util.attr.clip-path", a), b.on("snap.util.attr.clipPath", a)
      }(function (a) {
        if (a instanceof c || a instanceof f) {
          if (b.stop(), "clipPath" == a.type) var d = a;
          else d = k("clipPath", n(this)), d.node.appendChild(a.node), !d.node.id && p(d.node, {
            id: d.id
          });
          p(this.node, {
            "clip-path": q(d.node.id || d.id)
          })
        }
      }), b.on("snap.util.attr.fill", g("fill")), b.on("snap.util.attr.stroke", g("stroke"));
    var u = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
    b.on("snap.util.grad.parse", function (a) {
        a = r(a);
        var b = a.match(u);
        if (!b) return null;
        var c = b[1],
          d = b[2],
          e = b[3];
        return d = d.split(/\s*,\s*/).map(function (a) {
          return +a == a ? +a : a
        }), 1 == d.length && 0 == d[0] && (d = []), e = e.split("-"), e = e.map(function (a) {
          a = a.split(":");
          var b = {
            color: a[0]
          };
          return a[1] && (b.offset = parseFloat(a[1])), b
        }), {
          type: c,
          params: d,
          stops: e
        }
      }), b.on("snap.util.attr.d", function (c) {
        b.stop(), m(c, "array") && m(c[0], "array") && (c = a.path.toString.call(c)), c = r(c), c.match(/[ruo]/i) && (c = a.path.toAbsolute(c)), p(this.node, {
          d: c
        })
      })(-1), b.on("snap.util.attr.#text", function (a) {
        b.stop(), a = r(a);
        for (var c = e.doc.createTextNode(a); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
        this.node.appendChild(c)
      })(-1), b.on("snap.util.attr.path", function (a) {
        b.stop(), this.attr({
          d: a
        })
      })(-1), b.on("snap.util.attr.class", function (a) {
        b.stop(), this.node.className.baseVal = a
      })(-1), b.on("snap.util.attr.viewBox", function (a) {
        var c;
        c = m(a, "object") && "x" in a ? [a.x, a.y, a.width, a.height].join(" ") : m(a, "array") ? a.join(" ") : a, p(this.node, {
          viewBox: c
        }), b.stop()
      })(-1), b.on("snap.util.attr.transform", function (a) {
        this.transform(a), b.stop()
      })(-1), b.on("snap.util.attr.r", function (a) {
        "rect" == this.type && (b.stop(), p(this.node, {
          rx: a,
          ry: a
        }))
      })(-1), b.on("snap.util.attr.textpath", function (a) {
        if (b.stop(), "text" == this.type) {
          var d, e, f;
          if (!a && this.textPath) {
            for (e = this.textPath; e.node.firstChild;) this.node.appendChild(e.node.firstChild);
            return e.remove(), void delete this.textPath
          }
          if (m(a, "string")) {
            var g = n(this),
              h = l(g.parentNode).path(a);
            g.appendChild(h.node), d = h.id, h.attr({
              id: d
            })
          } else a = l(a), a instanceof c && (d = a.attr("id"), d || (d = a.id, a.attr({
            id: d
          })));
          if (d)
            if (e = this.textPath, f = this.node, e) e.attr({
              "xlink:href": "#" + d
            });
            else {
              for (e = p("textPath", {
                  "xlink:href": "#" + d
                }); f.firstChild;) e.appendChild(f.firstChild);
              f.appendChild(e), this.textPath = l(e)
            }
        }
      })(-1), b.on("snap.util.attr.text", function (a) {
        if ("text" == this.type) {
          for (var c = this.node, d = function (a) {
              var b = p("tspan");
              if (m(a, "array"))
                for (var c = 0; c < a.length; c++) b.appendChild(d(a[c]));
              else b.appendChild(e.doc.createTextNode(a));
              return b.normalize && b.normalize(), b
            }; c.firstChild;) c.removeChild(c.firstChild);
          for (var f = d(a); f.firstChild;) c.appendChild(f.firstChild)
        }
        b.stop()
      })(-1), b.on("snap.util.attr.fontSize", h)(-1), b.on("snap.util.attr.font-size", h)(-1), b.on("snap.util.getattr.transform", function () {
        return b.stop(), this.transform()
      })(-1), b.on("snap.util.getattr.textpath", function () {
        return b.stop(), this.textPath
      })(-1),
      function () {
        function c(c) {
          return function () {
            b.stop();
            var d = e.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + c);
            return "none" == d ? d : a(e.doc.getElementById(d.match(o)[1]))
          }
        }

        function d(a) {
          return function (c) {
            b.stop();
            var d = "marker" + a.charAt(0).toUpperCase() + a.substring(1);
            if ("" == c || !c) return void(this.node.style[d] = "none");
            if ("marker" == c.type) {
              var e = c.node.id;
              return e || p(c.node, {
                id: c.id
              }), void(this.node.style[d] = q(e))
            }
          }
        }
        b.on("snap.util.getattr.marker-end", c("end"))(-1), b.on("snap.util.getattr.markerEnd", c("end"))(-1), b.on("snap.util.getattr.marker-start", c("start"))(-1), b.on("snap.util.getattr.markerStart", c("start"))(-1), b.on("snap.util.getattr.marker-mid", c("mid"))(-1), b.on("snap.util.getattr.markerMid", c("mid"))(-1), b.on("snap.util.attr.marker-end", d("end"))(-1), b.on("snap.util.attr.markerEnd", d("end"))(-1), b.on("snap.util.attr.marker-start", d("start"))(-1), b.on("snap.util.attr.markerStart", d("start"))(-1), b.on("snap.util.attr.marker-mid", d("mid"))(-1), b.on("snap.util.attr.markerMid", d("mid"))(-1)
      }(), b.on("snap.util.getattr.r", function () {
        return "rect" == this.type && p(this.node, "rx") == p(this.node, "ry") ? (b.stop(), p(this.node, "rx")) : void 0
      })(-1), b.on("snap.util.getattr.text", function () {
        if ("text" == this.type || "tspan" == this.type) {
          b.stop();
          var a = i(this.node);
          return 1 == a.length ? a[0] : a
        }
      })(-1), b.on("snap.util.getattr.#text", function () {
        return this.node.textContent
      })(-1), b.on("snap.util.getattr.viewBox", function () {
        b.stop();
        var c = p(this.node, "viewBox");
        return c ? (c = c.split(s), a._.box(+c[0], +c[1], +c[2], +c[3])) : void 0
      })(-1), b.on("snap.util.getattr.points", function () {
        var a = p(this.node, "points");
        return b.stop(), a ? a.split(s) : void 0
      })(-1), b.on("snap.util.getattr.path", function () {
        var a = p(this.node, "d");
        return b.stop(), a
      })(-1), b.on("snap.util.getattr.class", function () {
        return this.node.className.baseVal
      })(-1), b.on("snap.util.getattr.fontSize", j)(-1), b.on("snap.util.getattr.font-size", j)(-1)
  }), d.plugin(function (a, b) {
    var c = /\S+/g,
      d = String,
      e = b.prototype;
    e.addClass = function (a) {
      var b, e, f, g, h = d(a || "").match(c) || [],
        i = this.node,
        j = i.className.baseVal,
        k = j.match(c) || [];
      if (h.length) {
        for (b = 0; f = h[b++];) e = k.indexOf(f), ~e || k.push(f);
        g = k.join(" "), j != g && (i.className.baseVal = g)
      }
      return this
    }, e.removeClass = function (a) {
      var b, e, f, g, h = d(a || "").match(c) || [],
        i = this.node,
        j = i.className.baseVal,
        k = j.match(c) || [];
      if (k.length) {
        for (b = 0; f = h[b++];) e = k.indexOf(f), ~e && k.splice(e, 1);
        g = k.join(" "), j != g && (i.className.baseVal = g)
      }
      return this
    }, e.hasClass = function (a) {
      var b = this.node,
        d = b.className.baseVal,
        e = d.match(c) || [];
      return !!~e.indexOf(a)
    }, e.toggleClass = function (a, b) {
      if (null != b) return b ? this.addClass(a) : this.removeClass(a);
      var d, e, f, g, h = (a || "").match(c) || [],
        i = this.node,
        j = i.className.baseVal,
        k = j.match(c) || [];
      for (d = 0; f = h[d++];) e = k.indexOf(f), ~e ? k.splice(e, 1) : k.push(f);
      return g = k.join(" "), j != g && (i.className.baseVal = g), this
    }
  }), d.plugin(function () {
    function a(a) {
      return a
    }

    function c(a) {
      return function (b) {
        return +b.toFixed(3) + a
      }
    }
    var d = {
        "+": function (a, b) {
          return a + b
        },
        "-": function (a, b) {
          return a - b
        },
        "/": function (a, b) {
          return a / b
        },
        "*": function (a, b) {
          return a * b
        }
      },
      e = String,
      f = /[a-z]+$/i,
      g = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
    b.on("snap.util.attr", function (a) {
      var c = e(a).match(g);
      if (c) {
        var h = b.nt(),
          i = h.substring(h.lastIndexOf(".") + 1),
          j = this.attr(i),
          k = {};
        b.stop();
        var l = c[3] || "",
          m = j.match(f),
          n = d[c[1]];
        if (m && m == l ? a = n(parseFloat(j), +c[2]) : (j = this.asPX(i), a = n(this.asPX(i), this.asPX(i, c[2] + l))), isNaN(j) || isNaN(a)) return;
        k[i] = a, this.attr(k)
      }
    })(-10), b.on("snap.util.equal", function (h, i) {
      var j = e(this.attr(h) || ""),
        k = e(i).match(g);
      if (k) {
        b.stop();
        var l = k[3] || "",
          m = j.match(f),
          n = d[k[1]];
        return m && m == l ? {
          from: parseFloat(j),
          to: n(parseFloat(j), +k[2]),
          f: c(m)
        } : (j = this.asPX(h), {
          from: j,
          to: n(j, this.asPX(h, k[2] + l)),
          f: a
        })
      }
    })(-10)
  }), d.plugin(function (c, d, e, f) {
    var g = e.prototype,
      h = c.is;
    g.rect = function (a, b, c, d, e, f) {
      var g;
      return null == f && (f = e), h(a, "object") && "[object Object]" == a ? g = a : null != a && (g = {
        x: a,
        y: b,
        width: c,
        height: d
      }, null != e && (g.rx = e, g.ry = f)), this.el("rect", g)
    }, g.circle = function (a, b, c) {
      var d;
      return h(a, "object") && "[object Object]" == a ? d = a : null != a && (d = {
        cx: a,
        cy: b,
        r: c
      }), this.el("circle", d)
    };
    var i = function () {
      function a() {
        this.parentNode.removeChild(this)
      }
      return function (b, c) {
        var d = f.doc.createElement("img"),
          e = f.doc.body;
        d.style.cssText = "position:absolute;left:-9999em;top:-9999em", d.onload = function () {
          c.call(d), d.onload = d.onerror = null, e.removeChild(d)
        }, d.onerror = a, e.appendChild(d), d.src = b
      }
    }();
    g.image = function (a, b, d, e, f) {
        var g = this.el("image");
        if (h(a, "object") && "src" in a) g.attr(a);
        else if (null != a) {
          var j = {
            "xlink:href": a,
            preserveAspectRatio: "none"
          };
          null != b && null != d && (j.x = b, j.y = d), null != e && null != f ? (j.width = e, j.height = f) : i(a, function () {
            c._.$(g.node, {
              width: this.offsetWidth,
              height: this.offsetHeight
            })
          }), c._.$(g.node, j)
        }
        return g
      }, g.ellipse = function (a, b, c, d) {
        var e;
        return h(a, "object") && "[object Object]" == a ? e = a : null != a && (e = {
          cx: a,
          cy: b,
          rx: c,
          ry: d
        }), this.el("ellipse", e)
      }, g.path = function (a) {
        var b;
        return h(a, "object") && !h(a, "array") ? b = a : a && (b = {
          d: a
        }), this.el("path", b)
      }, g.group = g.g = function (a) {
        var b = this.el("g");
        return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b
      }, g.svg = function (a, b, c, d, e, f, g, i) {
        var j = {};
        return h(a, "object") && null == b ? j = a : (null != a && (j.x = a), null != b && (j.y = b), null != c && (j.width = c), null != d && (j.height = d), null != e && null != f && null != g && null != i && (j.viewBox = [e, f, g, i])), this.el("svg", j)
      }, g.mask = function (a) {
        var b = this.el("mask");
        return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b
      }, g.ptrn = function (a, b, c, d, e, f, g, i) {
        if (h(a, "object")) var j = a;
        else j = {
          patternUnits: "userSpaceOnUse"
        }, a && (j.x = a), b && (j.y = b), null != c && (j.width = c), null != d && (j.height = d), j.viewBox = null != e && null != f && null != g && null != i ? [e, f, g, i] : [a || 0, b || 0, c || 0, d || 0];
        return this.el("pattern", j)
      }, g.use = function (a) {
        return null != a ? (a instanceof d && (a.attr("id") || a.attr({
          id: c._.id(a)
        }), a = a.attr("id")), "#" == String(a).charAt() && (a = a.substring(1)), this.el("use", {
          "xlink:href": "#" + a
        })) : d.prototype.use.call(this)
      }, g.symbol = function (a, b, c, d) {
        var e = {};
        return null != a && null != b && null != c && null != d && (e.viewBox = [a, b, c, d]), this.el("symbol", e)
      }, g.text = function (a, b, c) {
        var d = {};
        return h(a, "object") ? d = a : null != a && (d = {
          x: a,
          y: b,
          text: c || ""
        }), this.el("text", d)
      }, g.line = function (a, b, c, d) {
        var e = {};
        return h(a, "object") ? e = a : null != a && (e = {
          x1: a,
          x2: c,
          y1: b,
          y2: d
        }), this.el("line", e)
      }, g.polyline = function (a) {
        arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
        var b = {};
        return h(a, "object") && !h(a, "array") ? b = a : null != a && (b = {
          points: a
        }), this.el("polyline", b)
      }, g.polygon = function (a) {
        arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
        var b = {};
        return h(a, "object") && !h(a, "array") ? b = a : null != a && (b = {
          points: a
        }), this.el("polygon", b)
      },
      function () {
        function d() {
          return this.selectAll("stop")
        }

        function e(a, b) {
          var d = k("stop"),
            e = {
              offset: +b + "%"
            };
          return a = c.color(a), e["stop-color"] = a.hex, a.opacity < 1 && (e["stop-opacity"] = a.opacity), k(d, e), this.node.appendChild(d), this
        }

        function f() {
          if ("linearGradient" == this.type) {
            var a = k(this.node, "x1") || 0,
              b = k(this.node, "x2") || 1,
              d = k(this.node, "y1") || 0,
              e = k(this.node, "y2") || 0;
            return c._.box(a, d, math.abs(b - a), math.abs(e - d))
          }
          var f = this.node.cx || .5,
            g = this.node.cy || .5,
            h = this.node.r || 0;
          return c._.box(f - h, g - h, 2 * h, 2 * h)
        }

        function h(a, c) {
          function d(a, b) {
            for (var c = (b - l) / (a - m), d = m; a > d; d++) g[d].offset = +(+l + c * (d - m)).toFixed(2);
            m = a, l = b
          }
          var e, f = b("snap.util.grad.parse", null, c).firstDefined();
          if (!f) return null;
          f.params.unshift(a), e = "l" == f.type.toLowerCase() ? i.apply(0, f.params) : j.apply(0, f.params), f.type != f.type.toLowerCase() && k(e.node, {
            gradientUnits: "userSpaceOnUse"
          });
          var g = f.stops,
            h = g.length,
            l = 0,
            m = 0;
          h--;
          for (var n = 0; h > n; n++) "offset" in g[n] && d(n, g[n].offset);
          for (g[h].offset = g[h].offset || 100, d(h, g[h].offset), n = 0; h >= n; n++) {
            var o = g[n];
            e.addStop(o.color, o.offset)
          }
          return e
        }

        function i(a, b, g, h, i) {
          var j = c._.make("linearGradient", a);
          return j.stops = d, j.addStop = e, j.getBBox = f, null != b && k(j.node, {
            x1: b,
            y1: g,
            x2: h,
            y2: i
          }), j
        }

        function j(a, b, g, h, i, j) {
          var l = c._.make("radialGradient", a);
          return l.stops = d, l.addStop = e, l.getBBox = f, null != b && k(l.node, {
            cx: b,
            cy: g,
            r: h
          }), null != i && null != j && k(l.node, {
            fx: i,
            fy: j
          }), l
        }
        var k = c._.$;
        g.gradient = function (a) {
          return h(this.defs, a)
        }, g.gradientLinear = function (a, b, c, d) {
          return i(this.defs, a, b, c, d)
        }, g.gradientRadial = function (a, b, c, d, e) {
          return j(this.defs, a, b, c, d, e)
        }, g.toString = function () {
          var a, b = this.node.ownerDocument,
            d = b.createDocumentFragment(),
            e = b.createElement("div"),
            f = this.node.cloneNode(!0);
          return d.appendChild(e), e.appendChild(f), c._.$(f, {
            xmlns: "http://www.w3.org/2000/svg"
          }), a = e.innerHTML, d.removeChild(d.firstChild), a
        }, g.toDataURL = function () {
          return a && a.btoa ? "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this))) : void 0
        }, g.clear = function () {
          for (var a, b = this.node.firstChild; b;) a = b.nextSibling, "defs" != b.tagName ? b.parentNode.removeChild(b) : g.clear.call({
            node: b
          }), b = a
        }
      }()
  }), d.plugin(function (a, b) {
    function c(a) {
      var b = c.ps = c.ps || {};
      return b[a] ? b[a].sleep = 100 : b[a] = {
        sleep: 100
      }, setTimeout(function () {
        for (var c in b) b[K](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
      }), b[a]
    }

    function d(a, b, c, d) {
      return null == a && (a = b = c = d = 0), null == b && (b = a.y, c = a.width, d = a.height, a = a.x), {
        x: a,
        y: b,
        width: c,
        w: c,
        height: d,
        h: d,
        x2: a + c,
        y2: b + d,
        cx: a + c / 2,
        cy: b + d / 2,
        r1: N.min(c, d) / 2,
        r2: N.max(c, d) / 2,
        r0: N.sqrt(c * c + d * d) / 2,
        path: w(a, b, c, d),
        vb: [a, b, c, d].join(" ")
      }
    }

    function e() {
      return this.join(",").replace(L, "$1")
    }

    function f(a) {
      var b = J(a);
      return b.toString = e, b
    }

    function g(a, b, c, d, e, f, g, h, j) {
      return null == j ? n(a, b, c, d, e, f, g, h) : i(a, b, c, d, e, f, g, h, o(a, b, c, d, e, f, g, h, j))
    }

    function h(c, d) {
      function e(a) {
        return +(+a).toFixed(3)
      }
      return a._.cacher(function (a, f, h) {
        a instanceof b && (a = a.attr("d")), a = E(a);
        for (var j, k, l, m, n, o = "", p = {}, q = 0, r = 0, s = a.length; s > r; r++) {
          if (l = a[r], "M" == l[0]) j = +l[1], k = +l[2];
          else {
            if (m = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6]), q + m > f) {
              if (d && !p.start) {
                if (n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q), o += ["C" + e(n.start.x), e(n.start.y), e(n.m.x), e(n.m.y), e(n.x), e(n.y)], h) return o;
                p.start = o, o = ["M" + e(n.x), e(n.y) + "C" + e(n.n.x), e(n.n.y), e(n.end.x), e(n.end.y), e(l[5]), e(l[6])].join(), q += m, j = +l[5], k = +l[6];
                continue
              }
              if (!c && !d) return n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q)
            }
            q += m, j = +l[5], k = +l[6]
          }
          o += l.shift() + l
        }
        return p.end = o, n = c ? q : d ? p : i(j, k, l[0], l[1], l[2], l[3], l[4], l[5], 1)
      }, null, a._.clone)
    }

    function i(a, b, c, d, e, f, g, h, i) {
      var j = 1 - i,
        k = R(j, 3),
        l = R(j, 2),
        m = i * i,
        n = m * i,
        o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
        p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
        q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
        r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
        s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
        t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
        u = j * a + i * c,
        v = j * b + i * d,
        w = j * e + i * g,
        x = j * f + i * h,
        y = 90 - 180 * N.atan2(q - s, r - t) / O;
      return {
        x: o,
        y: p,
        m: {
          x: q,
          y: r
        },
        n: {
          x: s,
          y: t
        },
        start: {
          x: u,
          y: v
        },
        end: {
          x: w,
          y: x
        },
        alpha: y
      }
    }

    function j(b, c, e, f, g, h, i, j) {
      a.is(b, "array") || (b = [b, c, e, f, g, h, i, j]);
      var k = D.apply(null, b);
      return d(k.min.x, k.min.y, k.max.x - k.min.x, k.max.y - k.min.y)
    }

    function k(a, b, c) {
      return b >= a.x && b <= a.x + a.width && c >= a.y && c <= a.y + a.height
    }

    function l(a, b) {
      return a = d(a), b = d(b), k(b, a.x, a.y) || k(b, a.x2, a.y) || k(b, a.x, a.y2) || k(b, a.x2, a.y2) || k(a, b.x, b.y) || k(a, b.x2, b.y) || k(a, b.x, b.y2) || k(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y)
    }

    function m(a, b, c, d, e) {
      var f = -3 * b + 9 * c - 9 * d + 3 * e,
        g = a * f + 6 * b - 12 * c + 6 * d;
      return a * g - 3 * b + 3 * c
    }

    function n(a, b, c, d, e, f, g, h, i) {
      null == i && (i = 1), i = i > 1 ? 1 : 0 > i ? 0 : i;
      for (var j = i / 2, k = 12, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], n = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], o = 0, p = 0; k > p; p++) {
        var q = j * l[p] + j,
          r = m(q, a, c, e, g),
          s = m(q, b, d, f, h),
          t = r * r + s * s;
        o += n[p] * N.sqrt(t)
      }
      return j * o
    }

    function o(a, b, c, d, e, f, g, h, i) {
      if (!(0 > i || n(a, b, c, d, e, f, g, h) < i)) {
        var j, k = 1,
          l = k / 2,
          m = k - l,
          o = .01;
        for (j = n(a, b, c, d, e, f, g, h, m); S(j - i) > o;) l /= 2, m += (i > j ? 1 : -1) * l, j = n(a, b, c, d, e, f, g, h, m);
        return m
      }
    }

    function p(a, b, c, d, e, f, g, h) {
      if (!(Q(a, c) < P(e, g) || P(a, c) > Q(e, g) || Q(b, d) < P(f, h) || P(b, d) > Q(f, h))) {
        var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
          j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
          k = (a - c) * (f - h) - (b - d) * (e - g);
        if (k) {
          var l = i / k,
            m = j / k,
            n = +l.toFixed(2),
            o = +m.toFixed(2);
          if (!(n < +P(a, c).toFixed(2) || n > +Q(a, c).toFixed(2) || n < +P(e, g).toFixed(2) || n > +Q(e, g).toFixed(2) || o < +P(b, d).toFixed(2) || o > +Q(b, d).toFixed(2) || o < +P(f, h).toFixed(2) || o > +Q(f, h).toFixed(2))) return {
            x: l,
            y: m
          }
        }
      }
    }

    function q(a, b, c) {
      var d = j(a),
        e = j(b);
      if (!l(d, e)) return c ? 0 : [];
      for (var f = n.apply(0, a), g = n.apply(0, b), h = ~~(f / 8), k = ~~(g / 8), m = [], o = [], q = {}, r = c ? 0 : [], s = 0; h + 1 > s; s++) {
        var t = i.apply(0, a.concat(s / h));
        m.push({
          x: t.x,
          y: t.y,
          t: s / h
        })
      }
      for (s = 0; k + 1 > s; s++) t = i.apply(0, b.concat(s / k)), o.push({
        x: t.x,
        y: t.y,
        t: s / k
      });
      for (s = 0; h > s; s++)
        for (var u = 0; k > u; u++) {
          var v = m[s],
            w = m[s + 1],
            x = o[u],
            y = o[u + 1],
            z = S(w.x - v.x) < .001 ? "y" : "x",
            A = S(y.x - x.x) < .001 ? "y" : "x",
            B = p(v.x, v.y, w.x, w.y, x.x, x.y, y.x, y.y);
          if (B) {
            if (q[B.x.toFixed(4)] == B.y.toFixed(4)) continue;
            q[B.x.toFixed(4)] = B.y.toFixed(4);
            var C = v.t + S((B[z] - v[z]) / (w[z] - v[z])) * (w.t - v.t),
              D = x.t + S((B[A] - x[A]) / (y[A] - x[A])) * (y.t - x.t);
            C >= 0 && 1 >= C && D >= 0 && 1 >= D && (c ? r++ : r.push({
              x: B.x,
              y: B.y,
              t1: C,
              t2: D
            }))
          }
        }
      return r
    }

    function r(a, b) {
      return t(a, b)
    }

    function s(a, b) {
      return t(a, b, 1)
    }

    function t(a, b, c) {
      a = E(a), b = E(b);
      for (var d, e, f, g, h, i, j, k, l, m, n = c ? 0 : [], o = 0, p = a.length; p > o; o++) {
        var r = a[o];
        if ("M" == r[0]) d = h = r[1], e = i = r[2];
        else {
          "C" == r[0] ? (l = [d, e].concat(r.slice(1)), d = l[6], e = l[7]) : (l = [d, e, d, e, h, i, h, i], d = h, e = i);
          for (var s = 0, t = b.length; t > s; s++) {
            var u = b[s];
            if ("M" == u[0]) f = j = u[1], g = k = u[2];
            else {
              "C" == u[0] ? (m = [f, g].concat(u.slice(1)), f = m[6], g = m[7]) : (m = [f, g, f, g, j, k, j, k], f = j, g = k);
              var v = q(l, m, c);
              if (c) n += v;
              else {
                for (var w = 0, x = v.length; x > w; w++) v[w].segment1 = o, v[w].segment2 = s, v[w].bez1 = l, v[w].bez2 = m;
                n = n.concat(v)
              }
            }
          }
        }
      }
      return n
    }

    function u(a, b, c) {
      var d = v(a);
      return k(d, b, c) && t(a, [
        ["M", b, c],
        ["H", d.x2 + 10]
      ], 1) % 2 == 1
    }

    function v(a) {
      var b = c(a);
      if (b.bbox) return J(b.bbox);
      if (!a) return d();
      a = E(a);
      for (var e, f = 0, g = 0, h = [], i = [], j = 0, k = a.length; k > j; j++)
        if (e = a[j], "M" == e[0]) f = e[1], g = e[2], h.push(f), i.push(g);
        else {
          var l = D(f, g, e[1], e[2], e[3], e[4], e[5], e[6]);
          h = h.concat(l.min.x, l.max.x), i = i.concat(l.min.y, l.max.y), f = e[5], g = e[6]
        }
      var m = P.apply(0, h),
        n = P.apply(0, i),
        o = Q.apply(0, h),
        p = Q.apply(0, i),
        q = d(m, n, o - m, p - n);
      return b.bbox = J(q), q
    }

    function w(a, b, c, d, f) {
      if (f) return [
        ["M", +a + +f, b],
        ["l", c - 2 * f, 0],
        ["a", f, f, 0, 0, 1, f, f],
        ["l", 0, d - 2 * f],
        ["a", f, f, 0, 0, 1, -f, f],
        ["l", 2 * f - c, 0],
        ["a", f, f, 0, 0, 1, -f, -f],
        ["l", 0, 2 * f - d],
        ["a", f, f, 0, 0, 1, f, -f],
        ["z"]
      ];
      var g = [
        ["M", a, b],
        ["l", c, 0],
        ["l", 0, d],
        ["l", -c, 0],
        ["z"]
      ];
      return g.toString = e, g
    }

    function x(a, b, c, d, f) {
      if (null == f && null == d && (d = c), a = +a, b = +b, c = +c, d = +d, null != f) var g = Math.PI / 180,
        h = a + c * Math.cos(-d * g),
        i = a + c * Math.cos(-f * g),
        j = b + c * Math.sin(-d * g),
        k = b + c * Math.sin(-f * g),
        l = [
          ["M", h, j],
          ["A", c, c, 0, +(f - d > 180), 0, i, k]
        ];
      else l = [
        ["M", a, b],
        ["m", 0, -d],
        ["a", c, d, 0, 1, 1, 0, 2 * d],
        ["a", c, d, 0, 1, 1, 0, -2 * d],
        ["z"]
      ];
      return l.toString = e, l
    }

    function y(b) {
      var d = c(b),
        g = String.prototype.toLowerCase;
      if (d.rel) return f(d.rel);
      a.is(b, "array") && a.is(b && b[0], "array") || (b = a.parsePathString(b));
      var h = [],
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0;
      "M" == b[0][0] && (i = b[0][1], j = b[0][2], k = i, l = j, m++, h.push(["M", i, j]));
      for (var n = m, o = b.length; o > n; n++) {
        var p = h[n] = [],
          q = b[n];
        if (q[0] != g.call(q[0])) switch (p[0] = g.call(q[0]), p[0]) {
          case "a":
            p[1] = q[1], p[2] = q[2], p[3] = q[3], p[4] = q[4], p[5] = q[5], p[6] = +(q[6] - i).toFixed(3), p[7] = +(q[7] - j).toFixed(3);
            break;
          case "v":
            p[1] = +(q[1] - j).toFixed(3);
            break;
          case "m":
            k = q[1], l = q[2];
          default:
            for (var r = 1, s = q.length; s > r; r++) p[r] = +(q[r] - (r % 2 ? i : j)).toFixed(3)
        } else {
          p = h[n] = [], "m" == q[0] && (k = q[1] + i, l = q[2] + j);
          for (var t = 0, u = q.length; u > t; t++) h[n][t] = q[t]
        }
        var v = h[n].length;
        switch (h[n][0]) {
          case "z":
            i = k, j = l;
            break;
          case "h":
            i += +h[n][v - 1];
            break;
          case "v":
            j += +h[n][v - 1];
            break;
          default:
            i += +h[n][v - 2], j += +h[n][v - 1]
        }
      }
      return h.toString = e, d.rel = f(h), h
    }

    function z(b) {
      var d = c(b);
      if (d.abs) return f(d.abs);
      if (I(b, "array") && I(b && b[0], "array") || (b = a.parsePathString(b)), !b || !b.length) return [
        ["M", 0, 0]
      ];
      var g, h = [],
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0;
      "M" == b[0][0] && (i = +b[0][1], j = +b[0][2], k = i, l = j, m++, h[0] = ["M", i, j]);
      for (var n, o, p = 3 == b.length && "M" == b[0][0] && "R" == b[1][0].toUpperCase() && "Z" == b[2][0].toUpperCase(), q = m, r = b.length; r > q; q++) {
        if (h.push(n = []), o = b[q], g = o[0], g != g.toUpperCase()) switch (n[0] = g.toUpperCase(), n[0]) {
            case "A":
              n[1] = o[1], n[2] = o[2], n[3] = o[3], n[4] = o[4], n[5] = o[5], n[6] = +o[6] + i, n[7] = +o[7] + j;
              break;
            case "V":
              n[1] = +o[1] + j;
              break;
            case "H":
              n[1] = +o[1] + i;
              break;
            case "R":
              for (var s = [i, j].concat(o.slice(1)), t = 2, u = s.length; u > t; t++) s[t] = +s[t] + i, s[++t] = +s[t] + j;
              h.pop(), h = h.concat(G(s, p));
              break;
            case "O":
              h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s);
              break;
            case "U":
              h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2));
              break;
            case "M":
              k = +o[1] + i, l = +o[2] + j;
            default:
              for (t = 1, u = o.length; u > t; t++) n[t] = +o[t] + (t % 2 ? i : j)
          } else if ("R" == g) s = [i, j].concat(o.slice(1)), h.pop(), h = h.concat(G(s, p)), n = ["R"].concat(o.slice(-2));
          else if ("O" == g) h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s);
        else if ("U" == g) h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2));
        else
          for (var v = 0, w = o.length; w > v; v++) n[v] = o[v];
        if (g = g.toUpperCase(), "O" != g) switch (n[0]) {
          case "Z":
            i = +k, j = +l;
            break;
          case "H":
            i = n[1];
            break;
          case "V":
            j = n[1];
            break;
          case "M":
            k = n[n.length - 2], l = n[n.length - 1];
          default:
            i = n[n.length - 2], j = n[n.length - 1]
        }
      }
      return h.toString = e, d.abs = f(h), h
    }

    function A(a, b, c, d) {
      return [a, b, c, d, c, d]
    }

    function B(a, b, c, d, e, f) {
      var g = 1 / 3,
        h = 2 / 3;
      return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
    }

    function C(b, c, d, e, f, g, h, i, j, k) {
      var l, m = 120 * O / 180,
        n = O / 180 * (+f || 0),
        o = [],
        p = a._.cacher(function (a, b, c) {
          var d = a * N.cos(c) - b * N.sin(c),
            e = a * N.sin(c) + b * N.cos(c);
          return {
            x: d,
            y: e
          }
        });
      if (k) y = k[0], z = k[1], w = k[2], x = k[3];
      else {
        l = p(b, c, -n), b = l.x, c = l.y, l = p(i, j, -n), i = l.x, j = l.y;
        var q = (N.cos(O / 180 * f), N.sin(O / 180 * f), (b - i) / 2),
          r = (c - j) / 2,
          s = q * q / (d * d) + r * r / (e * e);
        s > 1 && (s = N.sqrt(s), d = s * d, e = s * e);
        var t = d * d,
          u = e * e,
          v = (g == h ? -1 : 1) * N.sqrt(S((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
          w = v * d * r / e + (b + i) / 2,
          x = v * -e * q / d + (c + j) / 2,
          y = N.asin(((c - x) / e).toFixed(9)),
          z = N.asin(((j - x) / e).toFixed(9));
        y = w > b ? O - y : y, z = w > i ? O - z : z, 0 > y && (y = 2 * O + y), 0 > z && (z = 2 * O + z), h && y > z && (y -= 2 * O), !h && z > y && (z -= 2 * O)
      }
      var A = z - y;
      if (S(A) > m) {
        var B = z,
          D = i,
          E = j;
        z = y + m * (h && z > y ? 1 : -1), i = w + d * N.cos(z), j = x + e * N.sin(z), o = C(i, j, d, e, f, 0, h, D, E, [z, B, w, x])
      }
      A = z - y;
      var F = N.cos(y),
        G = N.sin(y),
        H = N.cos(z),
        I = N.sin(z),
        J = N.tan(A / 4),
        K = 4 / 3 * d * J,
        L = 4 / 3 * e * J,
        M = [b, c],
        P = [b + K * G, c - L * F],
        Q = [i + K * I, j - L * H],
        R = [i, j];
      if (P[0] = 2 * M[0] - P[0], P[1] = 2 * M[1] - P[1], k) return [P, Q, R].concat(o);
      o = [P, Q, R].concat(o).join().split(",");
      for (var T = [], U = 0, V = o.length; V > U; U++) T[U] = U % 2 ? p(o[U - 1], o[U], n).y : p(o[U], o[U + 1], n).x;
      return T
    }

    function D(a, b, c, d, e, f, g, h) {
      for (var i, j, k, l, m, n, o, p, q = [], r = [
          [],
          []
        ], s = 0; 2 > s; ++s)
        if (0 == s ? (j = 6 * a - 12 * c + 6 * e, i = -3 * a + 9 * c - 9 * e + 3 * g, k = 3 * c - 3 * a) : (j = 6 * b - 12 * d + 6 * f, i = -3 * b + 9 * d - 9 * f + 3 * h, k = 3 * d - 3 * b), S(i) < 1e-12) {
          if (S(j) < 1e-12) continue;
          l = -k / j, l > 0 && 1 > l && q.push(l)
        } else o = j * j - 4 * k * i, p = N.sqrt(o), 0 > o || (m = (-j + p) / (2 * i), m > 0 && 1 > m && q.push(m), n = (-j - p) / (2 * i), n > 0 && 1 > n && q.push(n));
      for (var t, u = q.length, v = u; u--;) l = q[u], t = 1 - l, r[0][u] = t * t * t * a + 3 * t * t * l * c + 3 * t * l * l * e + l * l * l * g, r[1][u] = t * t * t * b + 3 * t * t * l * d + 3 * t * l * l * f + l * l * l * h;
      return r[0][v] = a, r[1][v] = b, r[0][v + 1] = g, r[1][v + 1] = h, r[0].length = r[1].length = v + 2, {
        min: {
          x: P.apply(0, r[0]),
          y: P.apply(0, r[1])
        },
        max: {
          x: Q.apply(0, r[0]),
          y: Q.apply(0, r[1])
        }
      }
    }

    function E(a, b) {
      var d = !b && c(a);
      if (!b && d.curve) return f(d.curve);
      for (var e = z(a), g = b && z(b), h = {
          x: 0,
          y: 0,
          bx: 0,
          by: 0,
          X: 0,
          Y: 0,
          qx: null,
          qy: null
        }, i = {
          x: 0,
          y: 0,
          bx: 0,
          by: 0,
          X: 0,
          Y: 0,
          qx: null,
          qy: null
        }, j = (function (a, b, c) {
          var d, e;
          if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
          switch (!(a[0] in {
            T: 1,
            Q: 1
          }) && (b.qx = b.qy = null), a[0]) {
            case "M":
              b.X = a[1], b.Y = a[2];
              break;
            case "A":
              a = ["C"].concat(C.apply(0, [b.x, b.y].concat(a.slice(1))));
              break;
            case "S":
              "C" == c || "S" == c ? (d = 2 * b.x - b.bx, e = 2 * b.y - b.by) : (d = b.x, e = b.y), a = ["C", d, e].concat(a.slice(1));
              break;
            case "T":
              "Q" == c || "T" == c ? (b.qx = 2 * b.x - b.qx, b.qy = 2 * b.y - b.qy) : (b.qx = b.x, b.qy = b.y), a = ["C"].concat(B(b.x, b.y, b.qx, b.qy, a[1], a[2]));
              break;
            case "Q":
              b.qx = a[1], b.qy = a[2], a = ["C"].concat(B(b.x, b.y, a[1], a[2], a[3], a[4]));
              break;
            case "L":
              a = ["C"].concat(A(b.x, b.y, a[1], a[2]));
              break;
            case "H":
              a = ["C"].concat(A(b.x, b.y, a[1], b.y));
              break;
            case "V":
              a = ["C"].concat(A(b.x, b.y, b.x, a[1]));
              break;
            case "Z":
              a = ["C"].concat(A(b.x, b.y, b.X, b.Y))
          }
          return a
        }), k = function (a, b) {
          if (a[b].length > 7) {
            a[b].shift();
            for (var c = a[b]; c.length;) m[b] = "A", g && (n[b] = "A"), a.splice(b++, 0, ["C"].concat(c.splice(0, 6)));
            a.splice(b, 1), r = Q(e.length, g && g.length || 0)
          }
        }, l = function (a, b, c, d, f) {
          a && b && "M" == a[f][0] && "M" != b[f][0] && (b.splice(f, 0, ["M", d.x, d.y]), c.bx = 0, c.by = 0, c.x = a[f][1], c.y = a[f][2], r = Q(e.length, g && g.length || 0))
        }, m = [], n = [], o = "", p = "", q = 0, r = Q(e.length, g && g.length || 0); r > q; q++) {
        e[q] && (o = e[q][0]), "C" != o && (m[q] = o, q && (p = m[q - 1])), e[q] = j(e[q], h, p), "A" != m[q] && "C" == o && (m[q] = "C"), k(e, q), g && (g[q] && (o = g[q][0]), "C" != o && (n[q] = o, q && (p = n[q - 1])), g[q] = j(g[q], i, p), "A" != n[q] && "C" == o && (n[q] = "C"), k(g, q)), l(e, g, h, i, q), l(g, e, i, h, q);
        var s = e[q],
          t = g && g[q],
          u = s.length,
          v = g && t.length;
        h.x = s[u - 2], h.y = s[u - 1], h.bx = M(s[u - 4]) || h.x, h.by = M(s[u - 3]) || h.y, i.bx = g && (M(t[v - 4]) || i.x), i.by = g && (M(t[v - 3]) || i.y), i.x = g && t[v - 2], i.y = g && t[v - 1]
      }
      return g || (d.curve = f(e)), g ? [e, g] : e
    }

    function F(a, b) {
      if (!b) return a;
      var c, d, e, f, g, h, i;
      for (a = E(a), e = 0, g = a.length; g > e; e++)
        for (i = a[e], f = 1, h = i.length; h > f; f += 2) c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
      return a
    }

    function G(a, b) {
      for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
        var f = [{
          x: +a[d - 2],
          y: +a[d - 1]
        }, {
          x: +a[d],
          y: +a[d + 1]
        }, {
          x: +a[d + 2],
          y: +a[d + 3]
        }, {
          x: +a[d + 4],
          y: +a[d + 5]
        }];
        b ? d ? e - 4 == d ? f[3] = {
          x: +a[0],
          y: +a[1]
        } : e - 2 == d && (f[2] = {
          x: +a[0],
          y: +a[1]
        }, f[3] = {
          x: +a[2],
          y: +a[3]
        }) : f[0] = {
          x: +a[e - 2],
          y: +a[e - 1]
        } : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
          x: +a[d],
          y: +a[d + 1]
        }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
      }
      return c
    }
    var H = b.prototype,
      I = a.is,
      J = a._.clone,
      K = "hasOwnProperty",
      L = /,?([a-z]),?/gi,
      M = parseFloat,
      N = Math,
      O = N.PI,
      P = N.min,
      Q = N.max,
      R = N.pow,
      S = N.abs,
      T = h(1),
      U = h(),
      V = h(0, 1),
      W = a._unit2px,
      X = {
        path: function (a) {
          return a.attr("path")
        },
        circle: function (a) {
          var b = W(a);
          return x(b.cx, b.cy, b.r)
        },
        ellipse: function (a) {
          var b = W(a);
          return x(b.cx || 0, b.cy || 0, b.rx, b.ry)
        },
        rect: function (a) {
          var b = W(a);
          return w(b.x || 0, b.y || 0, b.width, b.height, b.rx, b.ry)
        },
        image: function (a) {
          var b = W(a);
          return w(b.x || 0, b.y || 0, b.width, b.height)
        },
        line: function (a) {
          return "M" + [a.attr("x1") || 0, a.attr("y1") || 0, a.attr("x2"), a.attr("y2")]
        },
        polyline: function (a) {
          return "M" + a.attr("points")
        },
        polygon: function (a) {
          return "M" + a.attr("points") + "z"
        },
        deflt: function (a) {
          var b = a.node.getBBox();
          return w(b.x, b.y, b.width, b.height)
        }
      };
    a.path = c, a.path.getTotalLength = T, a.path.getPointAtLength = U, a.path.getSubpath = function (a, b, c) {
      if (this.getTotalLength(a) - c < 1e-6) return V(a, b).end;
      var d = V(a, c, 1);
      return b ? V(d, b).end : d
    }, H.getTotalLength = function () {
      return this.node.getTotalLength ? this.node.getTotalLength() : void 0
    }, H.getPointAtLength = function (a) {
      return U(this.attr("d"), a)
    }, H.getSubpath = function (b, c) {
      return a.path.getSubpath(this.attr("d"), b, c)
    }, a._.box = d, a.path.findDotsAtSegment = i, a.path.bezierBBox = j, a.path.isPointInsideBBox = k, a.closest = function (b, c, e, f) {
      for (var g = 100, h = d(b - g / 2, c - g / 2, g, g), i = [], j = e[0].hasOwnProperty("x") ? function (a) {
          return {
            x: e[a].x,
            y: e[a].y
          }
        } : function (a) {
          return {
            x: e[a],
            y: f[a]
          }
        }, l = 0; 1e6 >= g && !l;) {
        for (var m = 0, n = e.length; n > m; m++) {
          var o = j(m);
          if (k(h, o.x, o.y)) {
            l++, i.push(o);
            break
          }
        }
        l || (g *= 2, h = d(b - g / 2, c - g / 2, g, g))
      }
      if (1e6 != g) {
        var p, q = 1 / 0;
        for (m = 0, n = i.length; n > m; m++) {
          var r = a.len(b, c, i[m].x, i[m].y);
          q > r && (q = r, i[m].len = r, p = i[m])
        }
        return p
      }
    }, a.path.isBBoxIntersect = l, a.path.intersection = r, a.path.intersectionNumber = s, a.path.isPointInside = u, a.path.getBBox = v, a.path.get = X, a.path.toRelative = y, a.path.toAbsolute = z, a.path.toCubic = E, a.path.map = F, a.path.toString = e, a.path.clone = f
  }), d.plugin(function (a) {
    var d = Math.max,
      e = Math.min,
      f = function (a) {
        if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", a)
          for (var b = 0, c = a.length; c > b; b++) a[b] && (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
      },
      g = f.prototype;
    g.push = function () {
      for (var a, b, c = 0, d = arguments.length; d > c; c++) a = arguments[c], a && (b = this.items.length, this[b] = this.items[b] = a, this.length++);
      return this
    }, g.pop = function () {
      return this.length && delete this[this.length--], this.items.pop()
    }, g.forEach = function (a, b) {
      for (var c = 0, d = this.items.length; d > c; c++)
        if (a.call(b, this.items[c], c) === !1) return this;
      return this
    }, g.animate = function (d, e, f, g) {
      "function" != typeof f || f.length || (g = f, f = c.linear), d instanceof a._.Animation && (g = d.callback, f = d.easing, e = f.dur, d = d.attr);
      var h = arguments;
      if (a.is(d, "array") && a.is(h[h.length - 1], "array")) var i = !0;
      var j, k = function () {
          j ? this.b = j : j = this.b
        },
        l = 0,
        m = this,
        n = g && function () {
          ++l == m.length && g.call(this)
        };
      return this.forEach(function (a, c) {
        b.once("snap.animcreated." + a.id, k), i ? h[c] && a.animate.apply(a, h[c]) : a.animate(d, e, f, n)
      })
    }, g.remove = function () {
      for (; this.length;) this.pop().remove();
      return this
    }, g.bind = function (a, b, c) {
      var d = {};
      if ("function" == typeof b) this.bindings[a] = b;
      else {
        var e = c || a;
        this.bindings[a] = function (a) {
          d[e] = a, b.attr(d)
        }
      }
      return this
    }, g.attr = function (a) {
      var b = {};
      for (var c in a) this.bindings[c] ? this.bindings[c](a[c]) : b[c] = a[c];
      for (var d = 0, e = this.items.length; e > d; d++) this.items[d].attr(b);
      return this
    }, g.clear = function () {
      for (; this.length;) this.pop()
    }, g.splice = function (a, b) {
      a = 0 > a ? d(this.length + a, 0) : a, b = d(0, e(this.length - a, b));
      var c, g = [],
        h = [],
        i = [];
      for (c = 2; c < arguments.length; c++) i.push(arguments[c]);
      for (c = 0; b > c; c++) h.push(this[a + c]);
      for (; c < this.length - a; c++) g.push(this[a + c]);
      var j = i.length;
      for (c = 0; c < j + g.length; c++) this.items[a + c] = this[a + c] = j > c ? i[c] : g[c - j];
      for (c = this.items.length = this.length -= b - j; this[c];) delete this[c++];
      return new f(h)
    }, g.exclude = function (a) {
      for (var b = 0, c = this.length; c > b; b++)
        if (this[b] == a) return this.splice(b, 1), !0;
      return !1
    }, g.insertAfter = function (a) {
      for (var b = this.items.length; b--;) this.items[b].insertAfter(a);
      return this
    }, g.getBBox = function () {
      for (var a = [], b = [], c = [], f = [], g = this.items.length; g--;)
        if (!this.items[g].removed) {
          var h = this.items[g].getBBox();
          a.push(h.x), b.push(h.y), c.push(h.x + h.width), f.push(h.y + h.height)
        }
      return a = e.apply(0, a), b = e.apply(0, b), c = d.apply(0, c), f = d.apply(0, f), {
        x: a,
        y: b,
        x2: c,
        y2: f,
        width: c - a,
        height: f - b,
        cx: a + (c - a) / 2,
        cy: b + (f - b) / 2
      }
    }, g.clone = function (a) {
      a = new f;
      for (var b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].clone());
      return a
    }, g.toString = function () {
      return "Snap‘s set"
    }, g.type = "set", a.Set = f, a.set = function () {
      var a = new f;
      return arguments.length && a.push.apply(a, Array.prototype.slice.call(arguments, 0)), a
    }
  }), d.plugin(function (a, c) {
    function d(a) {
      var b = a[0];
      switch (b.toLowerCase()) {
        case "t":
          return [b, 0, 0];
        case "m":
          return [b, 1, 0, 0, 1, 0, 0];
        case "r":
          return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
        case "s":
          return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1]
      }
    }

    function e(b, c, e) {
      c = p(c).replace(/\.{3}|\u2026/g, b), b = a.parseTransformString(b) || [], c = a.parseTransformString(c) || [];
      for (var f, g, h, i, l = Math.max(b.length, c.length), m = [], n = [], o = 0; l > o; o++) {
        if (h = b[o] || d(c[o]), i = c[o] || d(h), h[0] != i[0] || "r" == h[0].toLowerCase() && (h[2] != i[2] || h[3] != i[3]) || "s" == h[0].toLowerCase() && (h[3] != i[3] || h[4] != i[4])) {
          b = a._.transform2matrix(b, e()), c = a._.transform2matrix(c, e()), m = [
            ["m", b.a, b.b, b.c, b.d, b.e, b.f]
          ], n = [
            ["m", c.a, c.b, c.c, c.d, c.e, c.f]
          ];
          break
        }
        for (m[o] = [], n[o] = [], f = 0, g = Math.max(h.length, i.length); g > f; f++) f in h && (m[o][f] = h[f]), f in i && (n[o][f] = i[f])
      }
      return {
        from: k(m),
        to: k(n),
        f: j(m)
      }
    }

    function f(a) {
      return a
    }

    function g(a) {
      return function (b) {
        return +b.toFixed(3) + a
      }
    }

    function h(a) {
      return a.join(" ")
    }

    function i(b) {
      return a.rgb(b[0], b[1], b[2])
    }

    function j(a) {
      var b, c, d, e, f, g, h = 0,
        i = [];
      for (b = 0, c = a.length; c > b; b++) {
        for (f = "[", g = ['"' + a[b][0] + '"'], d = 1, e = a[b].length; e > d; d++) g[d] = "val[" + h++ + "]";
        f += g + "]", i[b] = f
      }
      return Function("val", "return Snap.path.toString.call([" + i + "])")
    }

    function k(a) {
      for (var b = [], c = 0, d = a.length; d > c; c++)
        for (var e = 1, f = a[c].length; f > e; e++) b.push(a[c][e]);
      return b
    }

    function l(a) {
      return isFinite(parseFloat(a))
    }

    function m(b, c) {
      return a.is(b, "array") && a.is(c, "array") ? b.toString() == c.toString() : !1
    }
    var n = {},
      o = /[a-z]+$/i,
      p = String;
    n.stroke = n.fill = "colour", c.prototype.equal = function (a, c) {
      return b("snap.util.equal", this, a, c).firstDefined()
    }, b.on("snap.util.equal", function (b, c) {
      var d, q, r = p(this.attr(b) || ""),
        s = this;
      if (l(r) && l(c)) return {
        from: parseFloat(r),
        to: parseFloat(c),
        f: f
      };
      if ("colour" == n[b]) return d = a.color(r), q = a.color(c), {
        from: [d.r, d.g, d.b, d.opacity],
        to: [q.r, q.g, q.b, q.opacity],
        f: i
      };
      if ("viewBox" == b) return d = this.attr(b).vb.split(" ").map(Number), q = c.split(" ").map(Number), {
        from: d,
        to: q,
        f: h
      };
      if ("transform" == b || "gradientTransform" == b || "patternTransform" == b) return c instanceof a.Matrix && (c = c.toTransformString()), a._.rgTransform.test(c) || (c = a._.svgTransform2string(c)), e(r, c, function () {
        return s.getBBox(1)
      });
      if ("d" == b || "path" == b) return d = a.path.toCubic(r, c), {
        from: k(d[0]),
        to: k(d[1]),
        f: j(d[0])
      };
      if ("points" == b) return d = p(r).split(a._.separator), q = p(c).split(a._.separator), {
        from: d,
        to: q,
        f: function (a) {
          return a
        }
      };
      var t = r.match(o),
        u = p(c).match(o);
      return t && m(t, u) ? {
        from: parseFloat(r),
        to: parseFloat(c),
        f: g(t)
      } : {
        from: this.asPX(b),
        to: this.asPX(b, c),
        f: f
      }
    })
  }), d.plugin(function (a, c, d, e) {
    for (var f = c.prototype, g = "hasOwnProperty", h = ("createTouch" in e.doc), i = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], j = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
      }, k = (function (a, b) {
        var c = "y" == a ? "scrollTop" : "scrollLeft",
          d = b && b.node ? b.node.ownerDocument : e.doc;
        return d[c in d.documentElement ? "documentElement" : "body"][c]
      }), l = function () {
        return this.originalEvent.preventDefault()
      }, m = function () {
        return this.originalEvent.stopPropagation()
      }, n = function (a, b, c, d) {
        var e = h && j[b] ? j[b] : b,
          f = function (e) {
            var f = k("y", d),
              i = k("x", d);
            if (h && j[g](b))
              for (var n = 0, o = e.targetTouches && e.targetTouches.length; o > n; n++)
                if (e.targetTouches[n].target == a || a.contains(e.targetTouches[n].target)) {
                  var p = e;
                  e = e.targetTouches[n], e.originalEvent = p, e.preventDefault = l, e.stopPropagation = m;
                  break
                }
            var q = e.clientX + i,
              r = e.clientY + f;
            return c.call(d, e, q, r)
          };
        return b !== e && a.addEventListener(b, f, !1), a.addEventListener(e, f, !1),
          function () {
            return b !== e && a.removeEventListener(b, f, !1), a.removeEventListener(e, f, !1), !0
          }
      }, o = [], p = function (a) {
        for (var c, d = a.clientX, e = a.clientY, f = k("y"), g = k("x"), i = o.length; i--;) {
          if (c = o[i], h) {
            for (var j, l = a.touches && a.touches.length; l--;)
              if (j = a.touches[l], j.identifier == c.el._drag.id || c.el.node.contains(j.target)) {
                d = j.clientX, e = j.clientY, (a.originalEvent ? a.originalEvent : a).preventDefault();
                break
              }
          } else a.preventDefault(); {
            var m = c.el.node;
            m.nextSibling, m.parentNode, m.style.display
          }
          d += g, e += f, b("snap.drag.move." + c.el.id, c.move_scope || c.el, d - c.el._drag.x, e - c.el._drag.y, d, e, a)
        }
      }, q = function (c) {
        a.unmousemove(p).unmouseup(q);
        for (var d, e = o.length; e--;) d = o[e], d.el._drag = {}, b("snap.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, c), b.off("snap.drag.*." + d.el.id);
        o = []
      }, r = i.length; r--;) ! function (b) {
      a[b] = f[b] = function (c, d) {
        if (a.is(c, "function")) this.events = this.events || [], this.events.push({
          name: b,
          f: c,
          unbind: n(this.node || document, b, c, d || this)
        });
        else
          for (var e = 0, f = this.events.length; f > e; e++)
            if (this.events[e].name == b) try {
              this.events[e].f.call(this)
            } catch (g) {}
        return this
      }, a["un" + b] = f["un" + b] = function (a) {
        for (var c = this.events || [], d = c.length; d--;)
          if (c[d].name == b && (c[d].f == a || !a)) return c[d].unbind(), c.splice(d, 1), !c.length && delete this.events, this;
        return this
      }
    }(i[r]);
    f.hover = function (a, b, c, d) {
      return this.mouseover(a, c).mouseout(b, d || c)
    }, f.unhover = function (a, b) {
      return this.unmouseover(a).unmouseout(b)
    };
    var s = [];
    f.drag = function (c, d, e, f, g, h) {
      function i(i, j, l) {
        (i.originalEvent || i).preventDefault(), k._drag.x = j, k._drag.y = l, k._drag.id = i.identifier, !o.length && a.mousemove(p).mouseup(q), o.push({
          el: k,
          move_scope: f,
          start_scope: g,
          end_scope: h
        }), d && b.on("snap.drag.start." + k.id, d), c && b.on("snap.drag.move." + k.id, c), e && b.on("snap.drag.end." + k.id, e), b("snap.drag.start." + k.id, g || f || k, j, l, i)
      }

      function j(a, c, d) {
        b("snap.draginit." + k.id, k, a, c, d)
      }
      var k = this;
      if (!arguments.length) {
        var l;
        return k.drag(function (a, b) {
          this.attr({
            transform: l + (l ? "T" : "t") + [a, b]
          })
        }, function () {
          l = this.transform().local
        })
      }
      return b.on("snap.draginit." + k.id, i), k._drag = {}, s.push({
        el: k,
        start: i,
        init: j
      }), k.mousedown(j), k
    }, f.undrag = function () {
      for (var c = s.length; c--;) s[c].el == this && (this.unmousedown(s[c].init), s.splice(c, 1), b.unbind("snap.drag.*." + this.id), b.unbind("snap.draginit." + this.id));
      return !s.length && a.unmousemove(p).unmouseup(q), this
    }
  }), d.plugin(function (a, c, d) {
    var e = (c.prototype, d.prototype),
      f = /^\s*url\((.+)\)/,
      g = String,
      h = a._.$;
    a.filter = {}, e.filter = function (b) {
      var d = this;
      "svg" != d.type && (d = d.paper);
      var e = a.parse(g(b)),
        f = a._.id(),
        i = (d.node.offsetWidth, d.node.offsetHeight, h("filter"));
      return h(i, {
        id: f,
        filterUnits: "userSpaceOnUse"
      }), i.appendChild(e.node), d.defs.appendChild(i), new c(i)
    }, b.on("snap.util.getattr.filter", function () {
      b.stop();
      var c = h(this.node, "filter");
      if (c) {
        var d = g(c).match(f);
        return d && a.select(d[1])
      }
    }), b.on("snap.util.attr.filter", function (d) {
      if (d instanceof c && "filter" == d.type) {
        b.stop();
        var e = d.node.id;
        e || (h(d.node, {
          id: d.id
        }), e = d.id), h(this.node, {
          filter: a.url(e)
        })
      }
      d && "none" != d || (b.stop(), this.node.removeAttribute("filter"))
    }), a.filter.blur = function (b, c) {
      null == b && (b = 2);
      var d = null == c ? b : [b, c];
      return a.format('<feGaussianBlur stdDeviation="{def}"/>', {
        def: d
      })
    }, a.filter.blur.toString = function () {
      return this()
    }, a.filter.shadow = function (b, c, d, e, f) {
      return "string" == typeof d && (e = d, f = e, d = 4), "string" != typeof e && (f = e, e = "#000"), e = e || "#000", null == d && (d = 4), null == f && (f = 1), null == b && (b = 0, c = 2), null == c && (c = b), e = a.color(e), a.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
        color: e,
        dx: b,
        dy: c,
        blur: d,
        opacity: f
      })
    }, a.filter.shadow.toString = function () {
      return this()
    }, a.filter.grayscale = function (b) {
      return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
        a: .2126 + .7874 * (1 - b),
        b: .7152 - .7152 * (1 - b),
        c: .0722 - .0722 * (1 - b),
        d: .2126 - .2126 * (1 - b),
        e: .7152 + .2848 * (1 - b),
        f: .0722 - .0722 * (1 - b),
        g: .2126 - .2126 * (1 - b),
        h: .0722 + .9278 * (1 - b)
      })
    }, a.filter.grayscale.toString = function () {
      return this()
    }, a.filter.sepia = function (b) {
      return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
        a: .393 + .607 * (1 - b),
        b: .769 - .769 * (1 - b),
        c: .189 - .189 * (1 - b),
        d: .349 - .349 * (1 - b),
        e: .686 + .314 * (1 - b),
        f: .168 - .168 * (1 - b),
        g: .272 - .272 * (1 - b),
        h: .534 - .534 * (1 - b),
        i: .131 + .869 * (1 - b)
      })
    }, a.filter.sepia.toString = function () {
      return this()
    }, a.filter.saturate = function (b) {
      return null == b && (b = 1), a.format('<feColorMatrix type="saturate" values="{amount}"/>', {
        amount: 1 - b
      })
    }, a.filter.saturate.toString = function () {
      return this()
    }, a.filter.hueRotate = function (b) {
      return b = b || 0, a.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
        angle: b
      })
    }, a.filter.hueRotate.toString = function () {
      return this()
    }, a.filter.invert = function (b) {
      return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
        amount: b,
        amount2: 1 - b
      })
    }, a.filter.invert.toString = function () {
      return this()
    }, a.filter.brightness = function (b) {
      return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
        amount: b
      })
    }, a.filter.brightness.toString = function () {
      return this()
    }, a.filter.contrast = function (b) {
      return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
        amount: b,
        amount2: .5 - b / 2
      })
    }, a.filter.contrast.toString = function () {
      return this()
    }
  }), d.plugin(function (a, b) {
    var c = a._.box,
      d = a.is,
      e = /^[^a-z]*([tbmlrc])/i,
      f = function () {
        return "T" + this.dx + "," + this.dy
      };
    b.prototype.getAlign = function (a, b) {
      null == b && d(a, "string") && (b = a, a = null), a = a || this.paper;
      var g = a.getBBox ? a.getBBox() : c(a),
        h = this.getBBox(),
        i = {};
      switch (b = b && b.match(e), b = b ? b[1].toLowerCase() : "c") {
        case "t":
          i.dx = 0, i.dy = g.y - h.y;
          break;
        case "b":
          i.dx = 0, i.dy = g.y2 - h.y2;
          break;
        case "m":
          i.dx = 0, i.dy = g.cy - h.cy;
          break;
        case "l":
          i.dx = g.x - h.x, i.dy = 0;
          break;
        case "r":
          i.dx = g.x2 - h.x2, i.dy = 0;
          break;
        default:
          i.dx = g.cx - h.cx, i.dy = 0
      }
      return i.toString = f, i
    }, b.prototype.align = function (a, b) {
      return this.transform("..." + this.getAlign(a, b))
    }
  }), d
});

/*! Hammer.JS - v2.0.6 - 2016-01-06
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the  license */
! function (a, b, c, d) {
  "use strict";

  function e(a, b, c) {
    return setTimeout(j(a, c), b)
  }

  function f(a, b, c) {
    return Array.isArray(a) ? (g(a, c[b], c), !0) : !1
  }

  function g(a, b, c) {
    var e;
    if (a)
      if (a.forEach) a.forEach(b, c);
      else if (a.length !== d)
      for (e = 0; e < a.length;) b.call(c, a[e], e, a), e++;
    else
      for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a)
  }

  function h(b, c, d) {
    var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";
    return function () {
      var c = new Error("get-stack-trace"),
        d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
        f = a.console && (a.console.warn || a.console.log);
      return f && f.call(a.console, e, d), b.apply(this, arguments)
    }
  }

  function i(a, b, c) {
    var d, e = b.prototype;
    d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && ha(d, c)
  }

  function j(a, b) {
    return function () {
      return a.apply(b, arguments)
    }
  }

  function k(a, b) {
    return typeof a == ka ? a.apply(b ? b[0] || d : d, b) : a
  }

  function l(a, b) {
    return a === d ? b : a
  }

  function m(a, b, c) {
    g(q(b), function (b) {
      a.addEventListener(b, c, !1)
    })
  }

  function n(a, b, c) {
    g(q(b), function (b) {
      a.removeEventListener(b, c, !1)
    })
  }

  function o(a, b) {
    for (; a;) {
      if (a == b) return !0;
      a = a.parentNode
    }
    return !1
  }

  function p(a, b) {
    return a.indexOf(b) > -1
  }

  function q(a) {
    return a.trim().split(/\s+/g)
  }

  function r(a, b, c) {
    if (a.indexOf && !c) return a.indexOf(b);
    for (var d = 0; d < a.length;) {
      if (c && a[d][c] == b || !c && a[d] === b) return d;
      d++
    }
    return -1
  }

  function s(a) {
    return Array.prototype.slice.call(a, 0)
  }

  function t(a, b, c) {
    for (var d = [], e = [], f = 0; f < a.length;) {
      var g = b ? a[f][b] : a[f];
      r(e, g) < 0 && d.push(a[f]), e[f] = g, f++
    }
    return c && (d = b ? d.sort(function (a, c) {
      return a[b] > c[b]
    }) : d.sort()), d
  }

  function u(a, b) {
    for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ia.length;) {
      if (c = ia[g], e = c ? c + f : b, e in a) return e;
      g++
    }
    return d
  }

  function v() {
    return qa++
  }

  function w(b) {
    var c = b.ownerDocument || b;
    return c.defaultView || c.parentWindow || a
  }

  function x(a, b) {
    var c = this;
    this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function (b) {
      k(a.options.enable, [a]) && c.handler(b)
    }, this.init()
  }

  function y(a) {
    var b, c = a.options.inputClass;
    return new(b = c ? c : ta ? M : ua ? P : sa ? R : L)(a, z)
  }

  function z(a, b, c) {
    var d = c.pointers.length,
      e = c.changedPointers.length,
      f = b & Aa && d - e === 0,
      g = b & (Ca | Da) && d - e === 0;
    c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, A(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c
  }

  function A(a, b) {
    var c = a.session,
      d = b.pointers,
      e = d.length;
    c.firstInput || (c.firstInput = D(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !1);
    var f = c.firstInput,
      g = c.firstMultiple,
      h = g ? g.center : f.center,
      i = b.center = E(d);
    b.timeStamp = na(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = I(h, i), b.distance = H(h, i), B(c, b), b.offsetDirection = G(b.deltaX, b.deltaY);
    var j = F(b.deltaTime, b.deltaX, b.deltaY);
    b.overallVelocityX = j.x, b.overallVelocityY = j.y, b.overallVelocity = ma(j.x) > ma(j.y) ? j.x : j.y, b.scale = g ? K(g.pointers, d) : 1, b.rotation = g ? J(g.pointers, d) : 0, b.maxPointers = c.prevInput ? b.pointers.length > c.prevInput.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length, C(c, b);
    var k = a.element;
    o(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k
  }

  function B(a, b) {
    var c = b.center,
      d = a.offsetDelta || {},
      e = a.prevDelta || {},
      f = a.prevInput || {};
    (b.eventType === Aa || f.eventType === Ca) && (e = a.prevDelta = {
      x: f.deltaX || 0,
      y: f.deltaY || 0
    }, d = a.offsetDelta = {
      x: c.x,
      y: c.y
    }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y)
  }

  function C(a, b) {
    var c, e, f, g, h = a.lastInterval || b,
      i = b.timeStamp - h.timeStamp;
    if (b.eventType != Da && (i > za || h.velocity === d)) {
      var j = b.deltaX - h.deltaX,
        k = b.deltaY - h.deltaY,
        l = F(i, j, k);
      e = l.x, f = l.y, c = ma(l.x) > ma(l.y) ? l.x : l.y, g = G(j, k), a.lastInterval = b
    } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;
    b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g
  }

  function D(a) {
    for (var b = [], c = 0; c < a.pointers.length;) b[c] = {
      clientX: la(a.pointers[c].clientX),
      clientY: la(a.pointers[c].clientY)
    }, c++;
    return {
      timeStamp: na(),
      pointers: b,
      center: E(b),
      deltaX: a.deltaX,
      deltaY: a.deltaY
    }
  }

  function E(a) {
    var b = a.length;
    if (1 === b) return {
      x: la(a[0].clientX),
      y: la(a[0].clientY)
    };
    for (var c = 0, d = 0, e = 0; b > e;) c += a[e].clientX, d += a[e].clientY, e++;
    return {
      x: la(c / b),
      y: la(d / b)
    }
  }

  function F(a, b, c) {
    return {
      x: b / a || 0,
      y: c / a || 0
    }
  }

  function G(a, b) {
    return a === b ? Ea : ma(a) >= ma(b) ? 0 > a ? Fa : Ga : 0 > b ? Ha : Ia
  }

  function H(a, b, c) {
    c || (c = Ma);
    var d = b[c[0]] - a[c[0]],
      e = b[c[1]] - a[c[1]];
    return Math.sqrt(d * d + e * e)
  }

  function I(a, b, c) {
    c || (c = Ma);
    var d = b[c[0]] - a[c[0]],
      e = b[c[1]] - a[c[1]];
    return 180 * Math.atan2(e, d) / Math.PI
  }

  function J(a, b) {
    return I(b[1], b[0], Na) + I(a[1], a[0], Na)
  }

  function K(a, b) {
    return H(b[0], b[1], Na) / H(a[0], a[1], Na)
  }

  function L() {
    this.evEl = Pa, this.evWin = Qa, this.allow = !0, this.pressed = !1, x.apply(this, arguments)
  }

  function M() {
    this.evEl = Ta, this.evWin = Ua, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
  }

  function N() {
    this.evTarget = Wa, this.evWin = Xa, this.started = !1, x.apply(this, arguments)
  }

  function O(a, b) {
    var c = s(a.touches),
      d = s(a.changedTouches);
    return b & (Ca | Da) && (c = t(c.concat(d), "identifier", !0)), [c, d]
  }

  function P() {
    this.evTarget = Za, this.targetIds = {}, x.apply(this, arguments)
  }

  function Q(a, b) {
    var c = s(a.touches),
      d = this.targetIds;
    if (b & (Aa | Ba) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];
    var e, f, g = s(a.changedTouches),
      h = [],
      i = this.target;
    if (f = c.filter(function (a) {
        return o(a.target, i)
      }), b === Aa)
      for (e = 0; e < f.length;) d[f[e].identifier] = !0, e++;
    for (e = 0; e < g.length;) d[g[e].identifier] && h.push(g[e]), b & (Ca | Da) && delete d[g[e].identifier], e++;
    return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0
  }

  function R() {
    x.apply(this, arguments);
    var a = j(this.handler, this);
    this.touch = new P(this.manager, a), this.mouse = new L(this.manager, a)
  }

  function S(a, b) {
    this.manager = a, this.set(b)
  }

  function T(a) {
    if (p(a, db)) return db;
    var b = p(a, eb),
      c = p(a, fb);
    return b && c ? db : b || c ? b ? eb : fb : p(a, cb) ? cb : bb
  }

  function U(a) {
    this.options = ha({}, this.defaults, a || {}), this.id = v(), this.manager = null, this.options.enable = l(this.options.enable, !0), this.state = gb, this.simultaneous = {}, this.requireFail = []
  }

  function V(a) {
    return a & lb ? "cancel" : a & jb ? "end" : a & ib ? "move" : a & hb ? "start" : ""
  }

  function W(a) {
    return a == Ia ? "down" : a == Ha ? "up" : a == Fa ? "left" : a == Ga ? "right" : ""
  }

  function X(a, b) {
    var c = b.manager;
    return c ? c.get(a) : a
  }

  function Y() {
    U.apply(this, arguments)
  }

  function Z() {
    Y.apply(this, arguments), this.pX = null, this.pY = null
  }

  function $() {
    Y.apply(this, arguments)
  }

  function _() {
    U.apply(this, arguments), this._timer = null, this._input = null
  }

  function aa() {
    Y.apply(this, arguments)
  }

  function ba() {
    Y.apply(this, arguments)
  }

  function ca() {
    U.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
  }

  function da(a, b) {
    return b = b || {}, b.recognizers = l(b.recognizers, da.defaults.preset), new ea(a, b)
  }

  function ea(a, b) {
    this.options = ha({}, da.defaults, b || {}), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = a, this.input = y(this), this.touchAction = new S(this, this.options.touchAction), fa(this, !0), g(this.options.recognizers, function (a) {
      var b = this.add(new a[0](a[1]));
      a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3])
    }, this)
  }

  function fa(a, b) {
    var c = a.element;
    c.style && g(a.options.cssProps, function (a, d) {
      c.style[u(c.style, d)] = b ? a : ""
    })
  }

  function ga(a, c) {
    var d = b.createEvent("Event");
    d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d)
  }
  var ha, ia = ["", "webkit", "Moz", "MS", "ms", "o"],
    ja = b.createElement("div"),
    ka = "function",
    la = Math.round,
    ma = Math.abs,
    na = Date.now;
  ha = "function" != typeof Object.assign ? function (a) {
    if (a === d || null === a) throw new TypeError("Cannot convert undefined or null to object");
    for (var b = Object(a), c = 1; c < arguments.length; c++) {
      var e = arguments[c];
      if (e !== d && null !== e)
        for (var f in e) e.hasOwnProperty(f) && (b[f] = e[f])
    }
    return b
  } : Object.assign;
  var oa = h(function (a, b, c) {
      for (var e = Object.keys(b), f = 0; f < e.length;)(!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
      return a
    }, "extend", "Use `assign`."),
    pa = h(function (a, b) {
      return oa(a, b, !0)
    }, "merge", "Use `assign`."),
    qa = 1,
    ra = /mobile|tablet|ip(ad|hone|od)|android/i,
    sa = "ontouchstart" in a,
    ta = u(a, "PointerEvent") !== d,
    ua = sa && ra.test(navigator.userAgent),
    va = "touch",
    wa = "pen",
    xa = "mouse",
    ya = "kinect",
    za = 25,
    Aa = 1,
    Ba = 2,
    Ca = 4,
    Da = 8,
    Ea = 1,
    Fa = 2,
    Ga = 4,
    Ha = 8,
    Ia = 16,
    Ja = Fa | Ga,
    Ka = Ha | Ia,
    La = Ja | Ka,
    Ma = ["x", "y"],
    Na = ["clientX", "clientY"];
  x.prototype = {
    handler: function () {},
    init: function () {
      this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(w(this.element), this.evWin, this.domHandler)
    },
    destroy: function () {
      this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(w(this.element), this.evWin, this.domHandler)
    }
  };
  var Oa = {
      mousedown: Aa,
      mousemove: Ba,
      mouseup: Ca
    },
    Pa = "mousedown",
    Qa = "mousemove mouseup";
  i(L, x, {
    handler: function (a) {
      var b = Oa[a.type];
      b & Aa && 0 === a.button && (this.pressed = !0), b & Ba && 1 !== a.which && (b = Ca), this.pressed && this.allow && (b & Ca && (this.pressed = !1), this.callback(this.manager, b, {
        pointers: [a],
        changedPointers: [a],
        pointerType: xa,
        srcEvent: a
      }))
    }
  });
  var Ra = {
      pointerdown: Aa,
      pointermove: Ba,
      pointerup: Ca,
      pointercancel: Da,
      pointerout: Da
    },
    Sa = {
      2: va,
      3: wa,
      4: xa,
      5: ya
    },
    Ta = "pointerdown",
    Ua = "pointermove pointerup pointercancel";
  a.MSPointerEvent && !a.PointerEvent && (Ta = "MSPointerDown", Ua = "MSPointerMove MSPointerUp MSPointerCancel"), i(M, x, {
    handler: function (a) {
      var b = this.store,
        c = !1,
        d = a.type.toLowerCase().replace("ms", ""),
        e = Ra[d],
        f = Sa[a.pointerType] || a.pointerType,
        g = f == va,
        h = r(b, a.pointerId, "pointerId");
      e & Aa && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ca | Da) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, {
        pointers: b,
        changedPointers: [a],
        pointerType: f,
        srcEvent: a
      }), c && b.splice(h, 1))
    }
  });
  var Va = {
      touchstart: Aa,
      touchmove: Ba,
      touchend: Ca,
      touchcancel: Da
    },
    Wa = "touchstart",
    Xa = "touchstart touchmove touchend touchcancel";
  i(N, x, {
    handler: function (a) {
      var b = Va[a.type];
      if (b === Aa && (this.started = !0), this.started) {
        var c = O.call(this, a, b);
        b & (Ca | Da) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, {
          pointers: c[0],
          changedPointers: c[1],
          pointerType: va,
          srcEvent: a
        })
      }
    }
  });
  var Ya = {
      touchstart: Aa,
      touchmove: Ba,
      touchend: Ca,
      touchcancel: Da
    },
    Za = "touchstart touchmove touchend touchcancel";
  i(P, x, {
    handler: function (a) {
      var b = Ya[a.type],
        c = Q.call(this, a, b);
      c && this.callback(this.manager, b, {
        pointers: c[0],
        changedPointers: c[1],
        pointerType: va,
        srcEvent: a
      })
    }
  }), i(R, x, {
    handler: function (a, b, c) {
      var d = c.pointerType == va,
        e = c.pointerType == xa;
      if (d) this.mouse.allow = !1;
      else if (e && !this.mouse.allow) return;
      b & (Ca | Da) && (this.mouse.allow = !0), this.callback(a, b, c)
    },
    destroy: function () {
      this.touch.destroy(), this.mouse.destroy()
    }
  });
  var $a = u(ja.style, "touchAction"),
    _a = $a !== d,
    ab = "compute",
    bb = "auto",
    cb = "manipulation",
    db = "none",
    eb = "pan-x",
    fb = "pan-y";
  S.prototype = {
    set: function (a) {
      a == ab && (a = this.compute()), _a && this.manager.element.style && (this.manager.element.style[$a] = a), this.actions = a.toLowerCase().trim()
    },
    update: function () {
      this.set(this.manager.options.touchAction)
    },
    compute: function () {
      var a = [];
      return g(this.manager.recognizers, function (b) {
        k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
      }), T(a.join(" "))
    },
    preventDefaults: function (a) {
      if (!_a) {
        var b = a.srcEvent,
          c = a.offsetDirection;
        if (this.manager.session.prevented) return void b.preventDefault();
        var d = this.actions,
          e = p(d, db),
          f = p(d, fb),
          g = p(d, eb);
        if (e) {
          var h = 1 === a.pointers.length,
            i = a.distance < 2,
            j = a.deltaTime < 250;
          if (h && i && j) return
        }
        if (!g || !f) return e || f && c & Ja || g && c & Ka ? this.preventSrc(b) : void 0
      }
    },
    preventSrc: function (a) {
      this.manager.session.prevented = !0, a.preventDefault()
    }
  };
  var gb = 1,
    hb = 2,
    ib = 4,
    jb = 8,
    kb = jb,
    lb = 16,
    mb = 32;
  U.prototype = {
    defaults: {},
    set: function (a) {
      return ha(this.options, a), this.manager && this.manager.touchAction.update(), this
    },
    recognizeWith: function (a) {
      if (f(a, "recognizeWith", this)) return this;
      var b = this.simultaneous;
      return a = X(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this
    },
    dropRecognizeWith: function (a) {
      return f(a, "dropRecognizeWith", this) ? this : (a = X(a, this), delete this.simultaneous[a.id], this)
    },
    requireFailure: function (a) {
      if (f(a, "requireFailure", this)) return this;
      var b = this.requireFail;
      return a = X(a, this), -1 === r(b, a) && (b.push(a), a.requireFailure(this)), this
    },
    dropRequireFailure: function (a) {
      if (f(a, "dropRequireFailure", this)) return this;
      a = X(a, this);
      var b = r(this.requireFail, a);
      return b > -1 && this.requireFail.splice(b, 1), this
    },
    hasRequireFailures: function () {
      return this.requireFail.length > 0
    },
    canRecognizeWith: function (a) {
      return !!this.simultaneous[a.id]
    },
    emit: function (a) {
      function b(b) {
        c.manager.emit(b, a)
      }
      var c = this,
        d = this.state;
      jb > d && b(c.options.event + V(d)), b(c.options.event), a.additionalEvent && b(a.additionalEvent), d >= jb && b(c.options.event + V(d))
    },
    tryEmit: function (a) {
      return this.canEmit() ? this.emit(a) : void(this.state = mb)
    },
    canEmit: function () {
      for (var a = 0; a < this.requireFail.length;) {
        if (!(this.requireFail[a].state & (mb | gb))) return !1;
        a++
      }
      return !0
    },
    recognize: function (a) {
      var b = ha({}, a);
      return k(this.options.enable, [this, b]) ? (this.state & (kb | lb | mb) && (this.state = gb), this.state = this.process(b), void(this.state & (hb | ib | jb | lb) && this.tryEmit(b))) : (this.reset(), void(this.state = mb))
    },
    process: function (a) {},
    getTouchAction: function () {},
    reset: function () {}
  }, i(Y, U, {
    defaults: {
      pointers: 1
    },
    attrTest: function (a) {
      var b = this.options.pointers;
      return 0 === b || a.pointers.length === b
    },
    process: function (a) {
      var b = this.state,
        c = a.eventType,
        d = b & (hb | ib),
        e = this.attrTest(a);
      return d && (c & Da || !e) ? b | lb : d || e ? c & Ca ? b | jb : b & hb ? b | ib : hb : mb
    }
  }), i(Z, Y, {
    defaults: {
      event: "pan",
      threshold: 10,
      pointers: 1,
      direction: La
    },
    getTouchAction: function () {
      var a = this.options.direction,
        b = [];
      return a & Ja && b.push(fb), a & Ka && b.push(eb), b
    },
    directionTest: function (a) {
      var b = this.options,
        c = !0,
        d = a.distance,
        e = a.direction,
        f = a.deltaX,
        g = a.deltaY;
      return e & b.direction || (b.direction & Ja ? (e = 0 === f ? Ea : 0 > f ? Fa : Ga, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ea : 0 > g ? Ha : Ia, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction
    },
    attrTest: function (a) {
      return Y.prototype.attrTest.call(this, a) && (this.state & hb || !(this.state & hb) && this.directionTest(a))
    },
    emit: function (a) {
      this.pX = a.deltaX, this.pY = a.deltaY;
      var b = W(a.direction);
      b && (a.additionalEvent = this.options.event + b), this._super.emit.call(this, a)
    }
  }), i($, Y, {
    defaults: {
      event: "pinch",
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function () {
      return [db]
    },
    attrTest: function (a) {
      return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & hb)
    },
    emit: function (a) {
      if (1 !== a.scale) {
        var b = a.scale < 1 ? "in" : "out";
        a.additionalEvent = this.options.event + b
      }
      this._super.emit.call(this, a)
    }
  }), i(_, U, {
    defaults: {
      event: "press",
      pointers: 1,
      time: 251,
      threshold: 9
    },
    getTouchAction: function () {
      return [bb]
    },
    process: function (a) {
      var b = this.options,
        c = a.pointers.length === b.pointers,
        d = a.distance < b.threshold,
        f = a.deltaTime > b.time;
      if (this._input = a, !d || !c || a.eventType & (Ca | Da) && !f) this.reset();
      else if (a.eventType & Aa) this.reset(), this._timer = e(function () {
        this.state = kb, this.tryEmit()
      }, b.time, this);
      else if (a.eventType & Ca) return kb;
      return mb
    },
    reset: function () {
      clearTimeout(this._timer)
    },
    emit: function (a) {
      this.state === kb && (a && a.eventType & Ca ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = na(), this.manager.emit(this.options.event, this._input)))
    }
  }), i(aa, Y, {
    defaults: {
      event: "rotate",
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function () {
      return [db]
    },
    attrTest: function (a) {
      return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & hb)
    }
  }), i(ba, Y, {
    defaults: {
      event: "swipe",
      threshold: 10,
      velocity: .3,
      direction: Ja | Ka,
      pointers: 1
    },
    getTouchAction: function () {
      return Z.prototype.getTouchAction.call(this)
    },
    attrTest: function (a) {
      var b, c = this.options.direction;
      return c & (Ja | Ka) ? b = a.overallVelocity : c & Ja ? b = a.overallVelocityX : c & Ka && (b = a.overallVelocityY), this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && ma(b) > this.options.velocity && a.eventType & Ca
    },
    emit: function (a) {
      var b = W(a.offsetDirection);
      b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a)
    }
  }), i(ca, U, {
    defaults: {
      event: "tap",
      pointers: 1,
      taps: 1,
      interval: 300,
      time: 250,
      threshold: 9,
      posThreshold: 10
    },
    getTouchAction: function () {
      return [cb]
    },
    process: function (a) {
      var b = this.options,
        c = a.pointers.length === b.pointers,
        d = a.distance < b.threshold,
        f = a.deltaTime < b.time;
      if (this.reset(), a.eventType & Aa && 0 === this.count) return this.failTimeout();
      if (d && f && c) {
        if (a.eventType != Ca) return this.failTimeout();
        var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
          h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;
        this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;
        var i = this.count % b.taps;
        if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function () {
          this.state = kb, this.tryEmit()
        }, b.interval, this), hb) : kb
      }
      return mb
    },
    failTimeout: function () {
      return this._timer = e(function () {
        this.state = mb
      }, this.options.interval, this), mb
    },
    reset: function () {
      clearTimeout(this._timer)
    },
    emit: function () {
      this.state == kb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
    }
  }), da.VERSION = "2.0.6", da.defaults = {
    domEvents: !1,
    touchAction: ab,
    enable: !0,
    inputTarget: null,
    inputClass: null,
    preset: [
      [aa, {
        enable: !1
      }],
      [$, {
          enable: !1
        },
        ["rotate"]
      ],
      [ba, {
        direction: Ja
      }],
      [Z, {
          direction: Ja
        },
        ["swipe"]
      ],
      [ca],
      [ca, {
          event: "doubletap",
          taps: 2
        },
        ["tap"]
      ],
      [_]
    ],
    cssProps: {
      userSelect: "none",
      touchSelect: "none",
      touchCallout: "none",
      contentZooming: "none",
      userDrag: "none",
      tapHighlightColor: "rgba(0,0,0,0)"
    }
  };
  var nb = 1,
    ob = 2;
  ea.prototype = {
    set: function (a) {
      return ha(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this
    },
    stop: function (a) {
      this.session.stopped = a ? ob : nb
    },
    recognize: function (a) {
      var b = this.session;
      if (!b.stopped) {
        this.touchAction.preventDefaults(a);
        var c, d = this.recognizers,
          e = b.curRecognizer;
        (!e || e && e.state & kb) && (e = b.curRecognizer = null);
        for (var f = 0; f < d.length;) c = d[f], b.stopped === ob || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (hb | ib | jb) && (e = b.curRecognizer = c), f++
      }
    },
    get: function (a) {
      if (a instanceof U) return a;
      for (var b = this.recognizers, c = 0; c < b.length; c++)
        if (b[c].options.event == a) return b[c];
      return null
    },
    add: function (a) {
      if (f(a, "add", this)) return this;
      var b = this.get(a.options.event);
      return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a
    },
    remove: function (a) {
      if (f(a, "remove", this)) return this;
      if (a = this.get(a)) {
        var b = this.recognizers,
          c = r(b, a); - 1 !== c && (b.splice(c, 1), this.touchAction.update())
      }
      return this
    },
    on: function (a, b) {
      var c = this.handlers;
      return g(q(a), function (a) {
        c[a] = c[a] || [], c[a].push(b)
      }), this
    },
    off: function (a, b) {
      var c = this.handlers;
      return g(q(a), function (a) {
        b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a]
      }), this
    },
    emit: function (a, b) {
      this.options.domEvents && ga(a, b);
      var c = this.handlers[a] && this.handlers[a].slice();
      if (c && c.length) {
        b.type = a, b.preventDefault = function () {
          b.srcEvent.preventDefault()
        };
        for (var d = 0; d < c.length;) c[d](b), d++
      }
    },
    destroy: function () {
      this.element && fa(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
    }
  }, ha(da, {
    INPUT_START: Aa,
    INPUT_MOVE: Ba,
    INPUT_END: Ca,
    INPUT_CANCEL: Da,
    STATE_POSSIBLE: gb,
    STATE_BEGAN: hb,
    STATE_CHANGED: ib,
    STATE_ENDED: jb,
    STATE_RECOGNIZED: kb,
    STATE_CANCELLED: lb,
    STATE_FAILED: mb,
    DIRECTION_NONE: Ea,
    DIRECTION_LEFT: Fa,
    DIRECTION_RIGHT: Ga,
    DIRECTION_UP: Ha,
    DIRECTION_DOWN: Ia,
    DIRECTION_HORIZONTAL: Ja,
    DIRECTION_VERTICAL: Ka,
    DIRECTION_ALL: La,
    Manager: ea,
    Input: x,
    TouchAction: S,
    TouchInput: P,
    MouseInput: L,
    PointerEventInput: M,
    TouchMouseInput: R,
    SingleTouchInput: N,
    Recognizer: U,
    AttrRecognizer: Y,
    Tap: ca,
    Pan: Z,
    Swipe: ba,
    Pinch: $,
    Rotate: aa,
    Press: _,
    on: m,
    off: n,
    each: g,
    merge: pa,
    extend: oa,
    assign: ha,
    inherit: i,
    bindFn: j,
    prefixed: u
  });
  var pb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};
  pb.Hammer = da, "function" == typeof define && define.amd ? define(function () {
    return da
  }) : "undefined" != typeof module && module.exports ? module.exports = da : a[c] = da
}(window, document, "Hammer");
//# sourceMappingURL=hammer.min.map

// Snap.svg 0.4.1
//
// Copyright (c) 2013 – 2015 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// build: 2015-04-13

! function (a) {
  var b, c, d = "0.4.2",
    e = "hasOwnProperty",
    f = /[\.\/]/,
    g = /\s*,\s*/,
    h = "*",
    i = function (a, b) {
      return a - b
    },
    j = {
      n: {}
    },
    k = function () {
      for (var a = 0, b = this.length; b > a; a++)
        if ("undefined" != typeof this[a]) return this[a]
    },
    l = function () {
      for (var a = this.length; --a;)
        if ("undefined" != typeof this[a]) return this[a]
    },
    m = function (a, d) {
      a = String(a);
      var e, f = c,
        g = Array.prototype.slice.call(arguments, 2),
        h = m.listeners(a),
        j = 0,
        n = [],
        o = {},
        p = [],
        q = b;
      p.firstDefined = k, p.lastDefined = l, b = a, c = 0;
      for (var r = 0, s = h.length; s > r; r++) "zIndex" in h[r] && (n.push(h[r].zIndex), h[r].zIndex < 0 && (o[h[r].zIndex] = h[r]));
      for (n.sort(i); n[j] < 0;)
        if (e = o[n[j++]], p.push(e.apply(d, g)), c) return c = f, p;
      for (r = 0; s > r; r++)
        if (e = h[r], "zIndex" in e)
          if (e.zIndex == n[j]) {
            if (p.push(e.apply(d, g)), c) break;
            do
              if (j++, e = o[n[j]], e && p.push(e.apply(d, g)), c) break; while (e)
          } else o[e.zIndex] = e;
      else if (p.push(e.apply(d, g)), c) break;
      return c = f, b = q, p
    };
  m._events = j, m.listeners = function (a) {
    var b, c, d, e, g, i, k, l, m = a.split(f),
      n = j,
      o = [n],
      p = [];
    for (e = 0, g = m.length; g > e; e++) {
      for (l = [], i = 0, k = o.length; k > i; i++)
        for (n = o[i].n, c = [n[m[e]], n[h]], d = 2; d--;) b = c[d], b && (l.push(b), p = p.concat(b.f || []));
      o = l
    }
    return p
  }, m.on = function (a, b) {
    if (a = String(a), "function" != typeof b) return function () {};
    for (var c = a.split(g), d = 0, e = c.length; e > d; d++) ! function (a) {
      for (var c, d = a.split(f), e = j, g = 0, h = d.length; h > g; g++) e = e.n, e = e.hasOwnProperty(d[g]) && e[d[g]] || (e[d[g]] = {
        n: {}
      });
      for (e.f = e.f || [], g = 0, h = e.f.length; h > g; g++)
        if (e.f[g] == b) {
          c = !0;
          break
        }!c && e.f.push(b)
    }(c[d]);
    return function (a) {
      +a == +a && (b.zIndex = +a)
    }
  }, m.f = function (a) {
    var b = [].slice.call(arguments, 1);
    return function () {
      m.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
    }
  }, m.stop = function () {
    c = 1
  }, m.nt = function (a) {
    return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b
  }, m.nts = function () {
    return b.split(f)
  }, m.off = m.unbind = function (a, b) {
    if (!a) return void(m._events = j = {
      n: {}
    });
    var c = a.split(g);
    if (c.length > 1)
      for (var d = 0, i = c.length; i > d; d++) m.off(c[d], b);
    else {
      c = a.split(f);
      var k, l, n, d, i, o, p, q = [j];
      for (d = 0, i = c.length; i > d; d++)
        for (o = 0; o < q.length; o += n.length - 2) {
          if (n = [o, 1], k = q[o].n, c[d] != h) k[c[d]] && n.push(k[c[d]]);
          else
            for (l in k) k[e](l) && n.push(k[l]);
          q.splice.apply(q, n)
        }
      for (d = 0, i = q.length; i > d; d++)
        for (k = q[d]; k.n;) {
          if (b) {
            if (k.f) {
              for (o = 0, p = k.f.length; p > o; o++)
                if (k.f[o] == b) {
                  k.f.splice(o, 1);
                  break
                }!k.f.length && delete k.f
            }
            for (l in k.n)
              if (k.n[e](l) && k.n[l].f) {
                var r = k.n[l].f;
                for (o = 0, p = r.length; p > o; o++)
                  if (r[o] == b) {
                    r.splice(o, 1);
                    break
                  }!r.length && delete k.n[l].f
              }
          } else {
            delete k.f;
            for (l in k.n) k.n[e](l) && k.n[l].f && delete k.n[l].f
          }
          k = k.n
        }
    }
  }, m.once = function (a, b) {
    var c = function () {
      return m.unbind(a, c), b.apply(this, arguments)
    };
    return m.on(a, c)
  }, m.version = d, m.toString = function () {
    return "You are running Eve " + d
  }, "undefined" != typeof module && module.exports ? module.exports = m : "function" == typeof define && define.amd ? define("eve", [], function () {
    return m
  }) : a.eve = m
}(this),
function (a, b) {
  if ("function" == typeof define && define.amd) define(["eve"], function (c) {
    return b(a, c)
  });
  else if ("undefined" != typeof exports) {
    var c = require("eve");
    module.exports = b(a, c)
  } else b(a, a.eve)
}(window || this, function (a, b) {
  var c = function (b) {
      var c = {},
        d = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function (a) {
          setTimeout(a, 16)
        },
        e = Array.isArray || function (a) {
          return a instanceof Array || "[object Array]" == Object.prototype.toString.call(a)
        },
        f = 0,
        g = "M" + (+new Date).toString(36),
        h = function () {
          return g + (f++).toString(36)
        },
        i = Date.now || function () {
          return +new Date
        },
        j = function (a) {
          var b = this;
          if (null == a) return b.s;
          var c = b.s - a;
          b.b += b.dur * c, b.B += b.dur * c, b.s = a
        },
        k = function (a) {
          var b = this;
          return null == a ? b.spd : void(b.spd = a)
        },
        l = function (a) {
          var b = this;
          return null == a ? b.dur : (b.s = b.s * a / b.dur, void(b.dur = a))
        },
        m = function () {
          var a = this;
          delete c[a.id], a.update(), b("mina.stop." + a.id, a)
        },
        n = function () {
          var a = this;
          a.pdif || (delete c[a.id], a.update(), a.pdif = a.get() - a.b)
        },
        o = function () {
          var a = this;
          a.pdif && (a.b = a.get() - a.pdif, delete a.pdif, c[a.id] = a)
        },
        p = function () {
          var a, b = this;
          if (e(b.start)) {
            a = [];
            for (var c = 0, d = b.start.length; d > c; c++) a[c] = +b.start[c] + (b.end[c] - b.start[c]) * b.easing(b.s)
          } else a = +b.start + (b.end - b.start) * b.easing(b.s);
          b.set(a)
        },
        q = function () {
          var a = 0;
          for (var e in c)
            if (c.hasOwnProperty(e)) {
              var f = c[e],
                g = f.get();
              a++, f.s = (g - f.b) / (f.dur / f.spd), f.s >= 1 && (delete c[e], f.s = 1, a--, function (a) {
                setTimeout(function () {
                  b("mina.finish." + a.id, a)
                })
              }(f)), f.update()
            }
          a && d(q)
        },
        r = function (a, b, e, f, g, i, s) {
          var t = {
            id: h(),
            start: a,
            end: b,
            b: e,
            s: 0,
            dur: f - e,
            spd: 1,
            get: g,
            set: i,
            easing: s || r.linear,
            status: j,
            speed: k,
            duration: l,
            stop: m,
            pause: n,
            resume: o,
            update: p
          };
          c[t.id] = t;
          var u, v = 0;
          for (u in c)
            if (c.hasOwnProperty(u) && (v++, 2 == v)) break;
          return 1 == v && d(q), t
        };
      return r.time = i, r.getById = function (a) {
        return c[a] || null
      }, r.linear = function (a) {
        return a
      }, r.easeout = function (a) {
        return Math.pow(a, 1.7)
      }, r.easein = function (a) {
        return Math.pow(a, .48)
      }, r.easeinout = function (a) {
        if (1 == a) return 1;
        if (0 == a) return 0;
        var b = .48 - a / 1.04,
          c = Math.sqrt(.1734 + b * b),
          d = c - b,
          e = Math.pow(Math.abs(d), 1 / 3) * (0 > d ? -1 : 1),
          f = -c - b,
          g = Math.pow(Math.abs(f), 1 / 3) * (0 > f ? -1 : 1),
          h = e + g + .5;
        return 3 * (1 - h) * h * h + h * h * h
      }, r.backin = function (a) {
        if (1 == a) return 1;
        var b = 1.70158;
        return a * a * ((b + 1) * a - b)
      }, r.backout = function (a) {
        if (0 == a) return 0;
        a -= 1;
        var b = 1.70158;
        return a * a * ((b + 1) * a + b) + 1
      }, r.elastic = function (a) {
        return a == !!a ? a : Math.pow(2, -10 * a) * Math.sin(2 * (a - .075) * Math.PI / .3) + 1
      }, r.bounce = function (a) {
        var b, c = 7.5625,
          d = 2.75;
        return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b
      }, a.mina = r, r
    }("undefined" == typeof b ? function () {} : b),
    d = function (a) {
      function c(a, b) {
        if (a) {
          if (a.nodeType) return w(a);
          if (e(a, "array") && c.set) return c.set.apply(c, a);
          if (a instanceof s) return a;
          if (null == b) return a = y.doc.querySelector(String(a)), w(a)
        }
        return a = null == a ? "100%" : a, b = null == b ? "100%" : b, new v(a, b)
      }

      function d(a, b) {
        if (b) {
          if ("#text" == a && (a = y.doc.createTextNode(b.text || b["#text"] || "")), "#comment" == a && (a = y.doc.createComment(b.text || b["#text"] || "")), "string" == typeof a && (a = d(a)), "string" == typeof b) return 1 == a.nodeType ? "xlink:" == b.substring(0, 6) ? a.getAttributeNS(T, b.substring(6)) : "xml:" == b.substring(0, 4) ? a.getAttributeNS(U, b.substring(4)) : a.getAttribute(b) : "text" == b ? a.nodeValue : null;
          if (1 == a.nodeType) {
            for (var c in b)
              if (b[z](c)) {
                var e = A(b[c]);
                e ? "xlink:" == c.substring(0, 6) ? a.setAttributeNS(T, c.substring(6), e) : "xml:" == c.substring(0, 4) ? a.setAttributeNS(U, c.substring(4), e) : a.setAttribute(c, e) : a.removeAttribute(c)
              }
          } else "text" in b && (a.nodeValue = b.text)
        } else a = y.doc.createElementNS(U, a);
        return a
      }

      function e(a, b) {
        return b = A.prototype.toLowerCase.call(b), "finite" == b ? isFinite(a) : "array" == b && (a instanceof Array || Array.isArray && Array.isArray(a)) ? !0 : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || J.call(a).slice(8, -1).toLowerCase() == b
      }

      function f(a) {
        if ("function" == typeof a || Object(a) !== a) return a;
        var b = new a.constructor;
        for (var c in a) a[z](c) && (b[c] = f(a[c]));
        return b
      }

      function h(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
          if (a[c] === b) return a.push(a.splice(c, 1)[0])
      }

      function i(a, b, c) {
        function d() {
          var e = Array.prototype.slice.call(arguments, 0),
            f = e.join("␀"),
            g = d.cache = d.cache || {},
            i = d.count = d.count || [];
          return g[z](f) ? (h(i, f), c ? c(g[f]) : g[f]) : (i.length >= 1e3 && delete g[i.shift()], i.push(f), g[f] = a.apply(b, e), c ? c(g[f]) : g[f])
        }
        return d
      }

      function j(a, b, c, d, e, f) {
        if (null == e) {
          var g = a - c,
            h = b - d;
          return g || h ? (180 + 180 * D.atan2(-h, -g) / H + 360) % 360 : 0
        }
        return j(a, b, e, f) - j(c, d, e, f)
      }

      function k(a) {
        return a % 360 * H / 180
      }

      function l(a) {
        return 180 * a / H % 360
      }

      function m(a) {
        var b = [];
        return a = a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (a, c, d) {
          return d = d.split(/\s*,\s*|\s+/), "rotate" == c && 1 == d.length && d.push(0, 0), "scale" == c && (d.length > 2 ? d = d.slice(0, 2) : 2 == d.length && d.push(0, 0), 1 == d.length && d.push(d[0], 0, 0)), b.push("skewX" == c ? ["m", 1, 0, D.tan(k(d[0])), 1, 0, 0] : "skewY" == c ? ["m", 1, D.tan(k(d[0])), 0, 1, 0, 0] : [c.charAt(0)].concat(d)), a
        }), b
      }

      function n(a, b) {
        var d = ab(a),
          e = new c.Matrix;
        if (d)
          for (var f = 0, g = d.length; g > f; f++) {
            var h, i, j, k, l, m = d[f],
              n = m.length,
              o = A(m[0]).toLowerCase(),
              p = m[0] != o,
              q = p ? e.invert() : 0;
            "t" == o && 2 == n ? e.translate(m[1], 0) : "t" == o && 3 == n ? p ? (h = q.x(0, 0), i = q.y(0, 0), j = q.x(m[1], m[2]), k = q.y(m[1], m[2]), e.translate(j - h, k - i)) : e.translate(m[1], m[2]) : "r" == o ? 2 == n ? (l = l || b, e.rotate(m[1], l.x + l.width / 2, l.y + l.height / 2)) : 4 == n && (p ? (j = q.x(m[2], m[3]), k = q.y(m[2], m[3]), e.rotate(m[1], j, k)) : e.rotate(m[1], m[2], m[3])) : "s" == o ? 2 == n || 3 == n ? (l = l || b, e.scale(m[1], m[n - 1], l.x + l.width / 2, l.y + l.height / 2)) : 4 == n ? p ? (j = q.x(m[2], m[3]), k = q.y(m[2], m[3]), e.scale(m[1], m[1], j, k)) : e.scale(m[1], m[1], m[2], m[3]) : 5 == n && (p ? (j = q.x(m[3], m[4]), k = q.y(m[3], m[4]), e.scale(m[1], m[2], j, k)) : e.scale(m[1], m[2], m[3], m[4])) : "m" == o && 7 == n && e.add(m[1], m[2], m[3], m[4], m[5], m[6])
          }
        return e
      }

      function o(a) {
        var b = a.node.ownerSVGElement && w(a.node.ownerSVGElement) || a.node.parentNode && w(a.node.parentNode) || c.select("svg") || c(0, 0),
          d = b.select("defs"),
          e = null == d ? !1 : d.node;
        return e || (e = u("defs", b.node).node), e
      }

      function p(a) {
        return a.node.ownerSVGElement && w(a.node.ownerSVGElement) || c.select("svg")
      }

      function q(a, b, c) {
        function e(a) {
          if (null == a) return I;
          if (a == +a) return a;
          d(j, {
            width: a
          });
          try {
            return j.getBBox().width
          } catch (b) {
            return 0
          }
        }

        function f(a) {
          if (null == a) return I;
          if (a == +a) return a;
          d(j, {
            height: a
          });
          try {
            return j.getBBox().height
          } catch (b) {
            return 0
          }
        }

        function g(d, e) {
          null == b ? i[d] = e(a.attr(d) || 0) : d == b && (i = e(null == c ? a.attr(d) || 0 : c))
        }
        var h = p(a).node,
          i = {},
          j = h.querySelector(".svg---mgr");
        switch (j || (j = d("rect"), d(j, {
          x: -9e9,
          y: -9e9,
          width: 10,
          height: 10,
          "class": "svg---mgr",
          fill: "none"
        }), h.appendChild(j)), a.type) {
          case "rect":
            g("rx", e), g("ry", f);
          case "image":
            g("width", e), g("height", f);
          case "text":
            g("x", e), g("y", f);
            break;
          case "circle":
            g("cx", e), g("cy", f), g("r", e);
            break;
          case "ellipse":
            g("cx", e), g("cy", f), g("rx", e), g("ry", f);
            break;
          case "line":
            g("x1", e), g("x2", e), g("y1", f), g("y2", f);
            break;
          case "marker":
            g("refX", e), g("markerWidth", e), g("refY", f), g("markerHeight", f);
            break;
          case "radialGradient":
            g("fx", e), g("fy", f);
            break;
          case "tspan":
            g("dx", e), g("dy", f);
            break;
          default:
            g(b, e)
        }
        return h.removeChild(j), i
      }

      function r(a) {
        e(a, "array") || (a = Array.prototype.slice.call(arguments, 0));
        for (var b = 0, c = 0, d = this.node; this[b];) delete this[b++];
        for (b = 0; b < a.length; b++) "set" == a[b].type ? a[b].forEach(function (a) {
          d.appendChild(a.node)
        }) : d.appendChild(a[b].node);
        var f = d.childNodes;
        for (b = 0; b < f.length; b++) this[c++] = w(f[b]);
        return this
      }

      function s(a) {
        if (a.snap in V) return V[a.snap];
        var b;
        try {
          b = a.ownerSVGElement
        } catch (c) {}
        this.node = a, b && (this.paper = new v(b)), this.type = a.tagName || a.nodeName;
        var d = this.id = S(this);
        if (this.anims = {}, this._ = {
            transform: []
          }, a.snap = d, V[d] = this, "g" == this.type && (this.add = r), this.type in {
            g: 1,
            mask: 1,
            pattern: 1,
            symbol: 1
          })
          for (var e in v.prototype) v.prototype[z](e) && (this[e] = v.prototype[e])
      }

      function t(a) {
        this.node = a
      }

      function u(a, b) {
        var c = d(a);
        b.appendChild(c);
        var e = w(c);
        return e
      }

      function v(a, b) {
        var c, e, f, g = v.prototype;
        if (a && "svg" == a.tagName) {
          if (a.snap in V) return V[a.snap];
          var h = a.ownerDocument;
          c = new s(a), e = a.getElementsByTagName("desc")[0], f = a.getElementsByTagName("defs")[0], e || (e = d("desc"), e.appendChild(h.createTextNode("Created with Snap")), c.node.appendChild(e)), f || (f = d("defs"), c.node.appendChild(f)), c.defs = f;
          for (var i in g) g[z](i) && (c[i] = g[i]);
          c.paper = c.root = c
        } else c = u("svg", y.doc.body), d(c.node, {
          height: b,
          version: 1.1,
          width: a,
          xmlns: U
        });
        return c
      }

      function w(a) {
        return a ? a instanceof s || a instanceof t ? a : a.tagName && "svg" == a.tagName.toLowerCase() ? new v(a) : a.tagName && "object" == a.tagName.toLowerCase() && "image/svg+xml" == a.type ? new v(a.contentDocument.getElementsByTagName("svg")[0]) : new s(a) : a
      }

      function x(a, b) {
        for (var c = 0, d = a.length; d > c; c++) {
          var e = {
              type: a[c].type,
              attr: a[c].attr()
            },
            f = a[c].children();
          b.push(e), f.length && x(f, e.childNodes = [])
        }
      }
      c.version = "0.4.0", c.toString = function () {
        return "Snap v" + this.version
      }, c._ = {};
      var y = {
        win: a.window,
        doc: a.window.document
      };
      c._.glob = y; {
        var z = "hasOwnProperty",
          A = String,
          B = parseFloat,
          C = parseInt,
          D = Math,
          E = D.max,
          F = D.min,
          G = D.abs,
          H = (D.pow, D.PI),
          I = (D.round, ""),
          J = Object.prototype.toString,
          K = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
          L = (c._.separator = /[,\s]+/, /[\s]*,[\s]*/),
          M = {
            hs: 1,
            rg: 1
          },
          N = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
          O = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
          P = /(-?\d*\.?\d*(?:e[\-+]?\\d+)?)[\s]*,?[\s]*/gi,
          Q = 0,
          R = "S" + (+new Date).toString(36),
          S = function (a) {
            return (a && a.type ? a.type : I) + R + (Q++).toString(36)
          },
          T = "http://www.w3.org/1999/xlink",
          U = "http://www.w3.org/2000/svg",
          V = {};
        c.url = function (a) {
          return "url('#" + a + "')"
        }
      }
      c._.$ = d, c._.id = S, c.format = function () {
        var a = /\{([^\}]+)\}/g,
          b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
          c = function (a, c, d) {
            var e = d;
            return c.replace(b, function (a, b, c, d, f) {
              b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()))
            }), e = (null == e || e == d ? a : e) + ""
          };
        return function (b, d) {
          return A(b).replace(a, function (a, b) {
            return c(a, b, d)
          })
        }
      }(), c._.clone = f, c._.cacher = i, c.rad = k, c.deg = l, c.sin = function (a) {
        return D.sin(c.rad(a))
      }, c.tan = function (a) {
        return D.tan(c.rad(a))
      }, c.cos = function (a) {
        return D.cos(c.rad(a))
      }, c.asin = function (a) {
        return c.deg(D.asin(a))
      }, c.acos = function (a) {
        return c.deg(D.acos(a))
      }, c.atan = function (a) {
        return c.deg(D.atan(a))
      }, c.atan2 = function (a) {
        return c.deg(D.atan2(a))
      }, c.angle = j, c.len = function (a, b, d, e) {
        return Math.sqrt(c.len2(a, b, d, e))
      }, c.len2 = function (a, b, c, d) {
        return (a - c) * (a - c) + (b - d) * (b - d)
      }, c.closestPoint = function (a, b, c) {
        function d(a) {
          var d = a.x - b,
            e = a.y - c;
          return d * d + e * e
        }
        for (var e, f, g, h, i = a.node, j = i.getTotalLength(), k = j / i.pathSegList.numberOfItems * .125, l = 1 / 0, m = 0; j >= m; m += k)(h = d(g = i.getPointAtLength(m))) < l && (e = g, f = m, l = h);
        for (k *= .5; k > .5;) {
          var n, o, p, q, r, s;
          (p = f - k) >= 0 && (r = d(n = i.getPointAtLength(p))) < l ? (e = n, f = p, l = r) : (q = f + k) <= j && (s = d(o = i.getPointAtLength(q))) < l ? (e = o, f = q, l = s) : k *= .5
        }
        return e = {
          x: e.x,
          y: e.y,
          length: f,
          distance: Math.sqrt(l)
        }
      }, c.is = e, c.snapTo = function (a, b, c) {
        if (c = e(c, "finite") ? c : 10, e(a, "array")) {
          for (var d = a.length; d--;)
            if (G(a[d] - b) <= c) return a[d]
        } else {
          a = +a;
          var f = b % a;
          if (c > f) return b - f;
          if (f > a - c) return b - f + a
        }
        return b
      }, c.getRGB = i(function (a) {
        if (!a || (a = A(a)).indexOf("-") + 1) return {
          r: -1,
          g: -1,
          b: -1,
          hex: "none",
          error: 1,
          toString: Z
        };
        if ("none" == a) return {
          r: -1,
          g: -1,
          b: -1,
          hex: "none",
          toString: Z
        };
        if (!(M[z](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = W(a)), !a) return {
          r: -1,
          g: -1,
          b: -1,
          hex: "none",
          error: 1,
          toString: Z
        };
        var b, d, f, g, h, i, j = a.match(K);
        return j ? (j[2] && (f = C(j[2].substring(5), 16), d = C(j[2].substring(3, 5), 16), b = C(j[2].substring(1, 3), 16)), j[3] && (f = C((h = j[3].charAt(3)) + h, 16), d = C((h = j[3].charAt(2)) + h, 16), b = C((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4].split(L), b = B(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), d = B(i[1]), "%" == i[1].slice(-1) && (d *= 2.55), f = B(i[2]), "%" == i[2].slice(-1) && (f *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (g = B(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100)), j[5] ? (i = j[5].split(L), b = B(i[0]), "%" == i[0].slice(-1) && (b /= 100), d = B(i[1]), "%" == i[1].slice(-1) && (d /= 100), f = B(i[2]), "%" == i[2].slice(-1) && (f /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsba" == j[1].toLowerCase().slice(0, 4) && (g = B(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), c.hsb2rgb(b, d, f, g)) : j[6] ? (i = j[6].split(L), b = B(i[0]), "%" == i[0].slice(-1) && (b /= 100), d = B(i[1]), "%" == i[1].slice(-1) && (d /= 100), f = B(i[2]), "%" == i[2].slice(-1) && (f /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (g = B(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), c.hsl2rgb(b, d, f, g)) : (b = F(D.round(b), 255), d = F(D.round(d), 255), f = F(D.round(f), 255), g = F(E(g, 0), 1), j = {
          r: b,
          g: d,
          b: f,
          toString: Z
        }, j.hex = "#" + (16777216 | f | d << 8 | b << 16).toString(16).slice(1), j.opacity = e(g, "finite") ? g : 1, j)) : {
          r: -1,
          g: -1,
          b: -1,
          hex: "none",
          error: 1,
          toString: Z
        }
      }, c), c.hsb = i(function (a, b, d) {
        return c.hsb2rgb(a, b, d).hex
      }), c.hsl = i(function (a, b, d) {
        return c.hsl2rgb(a, b, d).hex
      }), c.rgb = i(function (a, b, c, d) {
        if (e(d, "finite")) {
          var f = D.round;
          return "rgba(" + [f(a), f(b), f(c), +d.toFixed(2)] + ")"
        }
        return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1)
      });
      var W = function (a) {
          var b = y.doc.getElementsByTagName("head")[0] || y.doc.getElementsByTagName("svg")[0],
            c = "rgb(255, 0, 0)";
          return (W = i(function (a) {
            if ("red" == a.toLowerCase()) return c;
            b.style.color = c, b.style.color = a;
            var d = y.doc.defaultView.getComputedStyle(b, I).getPropertyValue("color");
            return d == c ? null : d
          }))(a)
        },
        X = function () {
          return "hsb(" + [this.h, this.s, this.b] + ")"
        },
        Y = function () {
          return "hsl(" + [this.h, this.s, this.l] + ")"
        },
        Z = function () {
          return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
        },
        $ = function (a, b, d) {
          if (null == b && e(a, "object") && "r" in a && "g" in a && "b" in a && (d = a.b, b = a.g, a = a.r), null == b && e(a, string)) {
            var f = c.getRGB(a);
            a = f.r, b = f.g, d = f.b
          }
          return (a > 1 || b > 1 || d > 1) && (a /= 255, b /= 255, d /= 255), [a, b, d]
        },
        _ = function (a, b, d, f) {
          a = D.round(255 * a), b = D.round(255 * b), d = D.round(255 * d);
          var g = {
            r: a,
            g: b,
            b: d,
            opacity: e(f, "finite") ? f : 1,
            hex: c.rgb(a, b, d),
            toString: Z
          };
          return e(f, "finite") && (g.opacity = f), g
        };
      c.color = function (a) {
        var b;
        return e(a, "object") && "h" in a && "s" in a && "b" in a ? (b = c.hsb2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : e(a, "object") && "h" in a && "s" in a && "l" in a ? (b = c.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : (e(a, "string") && (a = c.getRGB(a)), e(a, "object") && "r" in a && "g" in a && "b" in a && !("error" in a) ? (b = c.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = c.rgb2hsb(a), a.v = b.b) : (a = {
          hex: "none"
        }, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1, a.error = 1)), a.toString = Z, a
      }, c.hsb2rgb = function (a, b, c, d) {
        e(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, d = a.o, a = a.h), a *= 360;
        var f, g, h, i, j;
        return a = a % 360 / 60, j = c * b, i = j * (1 - G(a % 2 - 1)), f = g = h = c - j, a = ~~a, f += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], _(f, g, h, d)
      }, c.hsl2rgb = function (a, b, c, d) {
        e(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;
        var f, g, h, i, j;
        return a = a % 360 / 60, j = 2 * b * (.5 > c ? c : 1 - c), i = j * (1 - G(a % 2 - 1)), f = g = h = c - j / 2, a = ~~a, f += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], _(f, g, h, d)
      }, c.rgb2hsb = function (a, b, c) {
        c = $(a, b, c), a = c[0], b = c[1], c = c[2];
        var d, e, f, g;
        return f = E(a, b, c), g = f - F(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = (d + 360) % 6 * 60 / 360, e = 0 == g ? 0 : g / f, {
          h: d,
          s: e,
          b: f,
          toString: X
        }
      }, c.rgb2hsl = function (a, b, c) {
        c = $(a, b, c), a = c[0], b = c[1], c = c[2];
        var d, e, f, g, h, i;
        return g = E(a, b, c), h = F(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = (d + 360) % 6 * 60 / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), {
          h: d,
          s: e,
          l: f,
          toString: Y
        }
      }, c.parsePathString = function (a) {
        if (!a) return null;
        var b = c.path(a);
        if (b.arr) return c.path.clone(b.arr);
        var d = {
            a: 7,
            c: 6,
            o: 2,
            h: 1,
            l: 2,
            m: 2,
            r: 4,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            u: 3,
            z: 0
          },
          f = [];
        return e(a, "array") && e(a[0], "array") && (f = c.path.clone(a)), f.length || A(a).replace(N, function (a, b, c) {
          var e = [],
            g = b.toLowerCase();
          if (c.replace(P, function (a, b) {
              b && e.push(+b)
            }), "m" == g && e.length > 2 && (f.push([b].concat(e.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "o" == g && 1 == e.length && f.push([b, e[0]]), "r" == g) f.push([b].concat(e));
          else
            for (; e.length >= d[g] && (f.push([b].concat(e.splice(0, d[g]))), d[g]););
        }), f.toString = c.path.toString, b.arr = c.path.clone(f), f
      };
      var ab = c.parseTransformString = function (a) {
        if (!a) return null;
        var b = [];
        return e(a, "array") && e(a[0], "array") && (b = c.path.clone(a)), b.length || A(a).replace(O, function (a, c, d) {
          {
            var e = [];
            c.toLowerCase()
          }
          d.replace(P, function (a, b) {
            b && e.push(+b)
          }), b.push([c].concat(e))
        }), b.toString = c.path.toString, b
      };
      c._.svgTransform2string = m, c._.rgTransform = /^[a-z][\s]*-?\.?\d/i, c._.transform2matrix = n, c._unit2px = q;
      y.doc.contains || y.doc.compareDocumentPosition ? function (a, b) {
        var c = 9 == a.nodeType ? a.documentElement : a,
          d = b && b.parentNode;
        return a == d || !(!d || 1 != d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
      } : function (a, b) {
        if (b)
          for (; b;)
            if (b = b.parentNode, b == a) return !0;
        return !1
      };
      c._.getSomeDefs = o, c._.getSomeSVG = p, c.select = function (a) {
        return a = A(a).replace(/([^\\]):/g, "$1\\:"), w(y.doc.querySelector(a))
      }, c.selectAll = function (a) {
        for (var b = y.doc.querySelectorAll(a), d = (c.set || Array)(), e = 0; e < b.length; e++) d.push(w(b[e]));
        return d
      }, setInterval(function () {
        for (var a in V)
          if (V[z](a)) {
            var b = V[a],
              c = b.node;
            ("svg" != b.type && !c.ownerSVGElement || "svg" == b.type && (!c.parentNode || "ownerSVGElement" in c.parentNode && !c.ownerSVGElement)) && delete V[a]
          }
      }, 1e4), s.prototype.attr = function (a, c) {
        var d = this,
          f = d.node;
        if (!a) {
          if (1 != f.nodeType) return {
            text: f.nodeValue
          };
          for (var g = f.attributes, h = {}, i = 0, j = g.length; j > i; i++) h[g[i].nodeName] = g[i].nodeValue;
          return h
        }
        if (e(a, "string")) {
          if (!(arguments.length > 1)) return b("snap.util.getattr." + a, d).firstDefined();
          var k = {};
          k[a] = c, a = k
        }
        for (var l in a) a[z](l) && b("snap.util.attr." + l, d, a[l]);
        return d
      }, c.parse = function (a) {
        var b = y.doc.createDocumentFragment(),
          c = !0,
          d = y.doc.createElement("div");
        if (a = A(a), a.match(/^\s*<\s*svg(?:\s|>)/) || (a = "<svg>" + a + "</svg>", c = !1), d.innerHTML = a, a = d.getElementsByTagName("svg")[0])
          if (c) b = a;
          else
            for (; a.firstChild;) b.appendChild(a.firstChild);
        return new t(b)
      }, c.fragment = function () {
        for (var a = Array.prototype.slice.call(arguments, 0), b = y.doc.createDocumentFragment(), d = 0, e = a.length; e > d; d++) {
          var f = a[d];
          f.node && f.node.nodeType && b.appendChild(f.node), f.nodeType && b.appendChild(f), "string" == typeof f && b.appendChild(c.parse(f).node)
        }
        return new t(b)
      }, c._.make = u, c._.wrap = w, v.prototype.el = function (a, b) {
        var c = u(a, this.node);
        return b && c.attr(b), c
      }, s.prototype.children = function () {
        for (var a = [], b = this.node.childNodes, d = 0, e = b.length; e > d; d++) a[d] = c(b[d]);
        return a
      }, s.prototype.toJSON = function () {
        var a = [];
        return x([this], a), a[0]
      }, b.on("snap.util.getattr", function () {
        var a = b.nt();
        a = a.substring(a.lastIndexOf(".") + 1);
        var c = a.replace(/[A-Z]/g, function (a) {
          return "-" + a.toLowerCase()
        });
        return bb[z](c) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(c) : d(this.node, a)
      });
      var bb = {
        "alignment-baseline": 0,
        "baseline-shift": 0,
        clip: 0,
        "clip-path": 0,
        "clip-rule": 0,
        color: 0,
        "color-interpolation": 0,
        "color-interpolation-filters": 0,
        "color-profile": 0,
        "color-rendering": 0,
        cursor: 0,
        direction: 0,
        display: 0,
        "dominant-baseline": 0,
        "enable-background": 0,
        fill: 0,
        "fill-opacity": 0,
        "fill-rule": 0,
        filter: 0,
        "flood-color": 0,
        "flood-opacity": 0,
        font: 0,
        "font-family": 0,
        "font-size": 0,
        "font-size-adjust": 0,
        "font-stretch": 0,
        "font-style": 0,
        "font-variant": 0,
        "font-weight": 0,
        "glyph-orientation-horizontal": 0,
        "glyph-orientation-vertical": 0,
        "image-rendering": 0,
        kerning: 0,
        "letter-spacing": 0,
        "lighting-color": 0,
        marker: 0,
        "marker-end": 0,
        "marker-mid": 0,
        "marker-start": 0,
        mask: 0,
        opacity: 0,
        overflow: 0,
        "pointer-events": 0,
        "shape-rendering": 0,
        "stop-color": 0,
        "stop-opacity": 0,
        stroke: 0,
        "stroke-dasharray": 0,
        "stroke-dashoffset": 0,
        "stroke-linecap": 0,
        "stroke-linejoin": 0,
        "stroke-miterlimit": 0,
        "stroke-opacity": 0,
        "stroke-width": 0,
        "text-anchor": 0,
        "text-decoration": 0,
        "text-rendering": 0,
        "unicode-bidi": 0,
        visibility: 0,
        "word-spacing": 0,
        "writing-mode": 0
      };
      b.on("snap.util.attr", function (a) {
          var c = b.nt(),
            e = {};
          c = c.substring(c.lastIndexOf(".") + 1), e[c] = a;
          var f = c.replace(/-(\w)/gi, function (a, b) {
              return b.toUpperCase()
            }),
            g = c.replace(/[A-Z]/g, function (a) {
              return "-" + a.toLowerCase()
            });
          bb[z](g) ? this.node.style[f] = null == a ? I : a : d(this.node, e)
        }),
        function () {}(v.prototype), c.ajax = function (a, c, d, f) {
          var g = new XMLHttpRequest,
            h = S();
          if (g) {
            if (e(c, "function")) f = d, d = c, c = null;
            else if (e(c, "object")) {
              var i = [];
              for (var j in c) c.hasOwnProperty(j) && i.push(encodeURIComponent(j) + "=" + encodeURIComponent(c[j]));
              c = i.join("&")
            }
            return g.open(c ? "POST" : "GET", a, !0), c && (g.setRequestHeader("X-Requested-With", "XMLHttpRequest"), g.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), d && (b.once("snap.ajax." + h + ".0", d), b.once("snap.ajax." + h + ".200", d), b.once("snap.ajax." + h + ".304", d)), g.onreadystatechange = function () {
              4 == g.readyState && b("snap.ajax." + h + "." + g.status, f, g)
            }, 4 == g.readyState ? g : (g.send(c), g)
          }
        }, c.load = function (a, b, d) {
          c.ajax(a, function (a) {
            var e = c.parse(a.responseText);
            d ? b.call(d, e) : b(e)
          })
        };
      var cb = function (a) {
        var b = a.getBoundingClientRect(),
          c = a.ownerDocument,
          d = c.body,
          e = c.documentElement,
          f = e.clientTop || d.clientTop || 0,
          h = e.clientLeft || d.clientLeft || 0,
          i = b.top + (g.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
          j = b.left + (g.win.pageXOffset || e.scrollLeft || d.scrollLeft) - h;
        return {
          y: i,
          x: j
        }
      };
      return c.getElementByPoint = function (a, b) {
        var c = this,
          d = (c.canvas, y.doc.elementFromPoint(a, b));
        if (y.win.opera && "svg" == d.tagName) {
          var e = cb(d),
            f = d.createSVGRect();
          f.x = a - e.x, f.y = b - e.y, f.width = f.height = 1;
          var g = d.getIntersectionList(f, null);
          g.length && (d = g[g.length - 1])
        }
        return d ? w(d) : null
      }, c.plugin = function (a) {
        a(c, s, v, y, t)
      }, y.win.Snap = c, c
    }(a || this);
  return d.plugin(function (d, e, f, g, h) {
    function i(a, b) {
      if (null == b) {
        var c = !0;
        if (b = a.node.getAttribute("linearGradient" == a.type || "radialGradient" == a.type ? "gradientTransform" : "pattern" == a.type ? "patternTransform" : "transform"), !b) return new d.Matrix;
        b = d._.svgTransform2string(b)
      } else b = d._.rgTransform.test(b) ? o(b).replace(/\.{3}|\u2026/g, a._.transform || "") : d._.svgTransform2string(b), n(b, "array") && (b = d.path ? d.path.toString.call(b) : o(b)), a._.transform = b;
      var e = d._.transform2matrix(b, a.getBBox(1));
      return c ? e : void(a.matrix = e)
    }

    function j(a) {
      function b(a, b) {
        var c = q(a.node, b);
        c = c && c.match(f), c = c && c[2], c && "#" == c.charAt() && (c = c.substring(1), c && (h[c] = (h[c] || []).concat(function (c) {
          var d = {};
          d[b] = URL(c), q(a.node, d)
        })))
      }

      function c(a) {
        var b = q(a.node, "xlink:href");
        b && "#" == b.charAt() && (b = b.substring(1), b && (h[b] = (h[b] || []).concat(function (b) {
          a.attr("xlink:href", "#" + b)
        })))
      }
      for (var d, e = a.selectAll("*"), f = /^\s*url\(("|'|)(.*)\1\)\s*$/, g = [], h = {}, i = 0, j = e.length; j > i; i++) {
        d = e[i], b(d, "fill"), b(d, "stroke"), b(d, "filter"), b(d, "mask"), b(d, "clip-path"), c(d);
        var k = q(d.node, "id");
        k && (q(d.node, {
          id: d.id
        }), g.push({
          old: k,
          id: d.id
        }))
      }
      for (i = 0, j = g.length; j > i; i++) {
        var l = h[g[i].old];
        if (l)
          for (var m = 0, n = l.length; n > m; m++) l[m](g[i].id)
      }
    }

    function k(a, b, c) {
      return function (d) {
        var e = d.slice(a, b);
        return 1 == e.length && (e = e[0]), c ? c(e) : e
      }
    }

    function l(a) {
      return function () {
        var b = a ? "<" + this.type : "",
          c = this.node.attributes,
          d = this.node.childNodes;
        if (a)
          for (var e = 0, f = c.length; f > e; e++) b += " " + c[e].name + '="' + c[e].value.replace(/"/g, '\\"') + '"';
        if (d.length) {
          for (a && (b += ">"), e = 0, f = d.length; f > e; e++) 3 == d[e].nodeType ? b += d[e].nodeValue : 1 == d[e].nodeType && (b += u(d[e]).toString());
          a && (b += "</" + this.type + ">")
        } else a && (b += "/>");
        return b
      }
    }
    var m = e.prototype,
      n = d.is,
      o = String,
      p = d._unit2px,
      q = d._.$,
      r = d._.make,
      s = d._.getSomeDefs,
      t = "hasOwnProperty",
      u = d._.wrap;
    m.getBBox = function (a) {
      if (!d.Matrix || !d.path) return this.node.getBBox();
      var b = this,
        c = new d.Matrix;
      if (b.removed) return d._.box();
      for (;
        "use" == b.type;)
        if (a || (c = c.add(b.transform().localMatrix.translate(b.attr("x") || 0, b.attr("y") || 0))), b.original) b = b.original;
        else {
          var e = b.attr("xlink:href");
          b = b.original = b.node.ownerDocument.getElementById(e.substring(e.indexOf("#") + 1))
        }
      var f = b._,
        g = d.path.get[b.type] || d.path.get.deflt;
      try {
        return a ? (f.bboxwt = g ? d.path.getBBox(b.realPath = g(b)) : d._.box(b.node.getBBox()), d._.box(f.bboxwt)) : (b.realPath = g(b), b.matrix = b.transform().localMatrix, f.bbox = d.path.getBBox(d.path.map(b.realPath, c.add(b.matrix))), d._.box(f.bbox))
      } catch (h) {
        return d._.box()
      }
    };
    var v = function () {
      return this.string
    };
    m.transform = function (a) {
      var b = this._;
      if (null == a) {
        for (var c, e = this, f = new d.Matrix(this.node.getCTM()), g = i(this), h = [g], j = new d.Matrix, k = g.toTransformString(), l = o(g) == o(this.matrix) ? o(b.transform) : k;
          "svg" != e.type && (e = e.parent());) h.push(i(e));
        for (c = h.length; c--;) j.add(h[c]);
        return {
          string: l,
          globalMatrix: f,
          totalMatrix: j,
          localMatrix: g,
          diffMatrix: f.clone().add(g.invert()),
          global: f.toTransformString(),
          total: j.toTransformString(),
          local: k,
          toString: v
        }
      }
      return a instanceof d.Matrix ? (this.matrix = a, this._.transform = a.toTransformString()) : i(this, a), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? q(this.node, {
        gradientTransform: this.matrix
      }) : "pattern" == this.type ? q(this.node, {
        patternTransform: this.matrix
      }) : q(this.node, {
        transform: this.matrix
      })), this
    }, m.parent = function () {
      return u(this.node.parentNode)
    }, m.append = m.add = function (a) {
      if (a) {
        if ("set" == a.type) {
          var b = this;
          return a.forEach(function (a) {
            b.add(a)
          }), this
        }
        a = u(a), this.node.appendChild(a.node), a.paper = this.paper
      }
      return this
    }, m.appendTo = function (a) {
      return a && (a = u(a), a.append(this)), this
    }, m.prepend = function (a) {
      if (a) {
        if ("set" == a.type) {
          var b, c = this;
          return a.forEach(function (a) {
            b ? b.after(a) : c.prepend(a), b = a
          }), this
        }
        a = u(a);
        var d = a.parent();
        this.node.insertBefore(a.node, this.node.firstChild), this.add && this.add(), a.paper = this.paper, this.parent() && this.parent().add(), d && d.add()
      }
      return this
    }, m.prependTo = function (a) {
      return a = u(a), a.prepend(this), this
    }, m.before = function (a) {
      if ("set" == a.type) {
        var b = this;
        return a.forEach(function (a) {
          var c = a.parent();
          b.node.parentNode.insertBefore(a.node, b.node), c && c.add()
        }), this.parent().add(), this
      }
      a = u(a);
      var c = a.parent();
      return this.node.parentNode.insertBefore(a.node, this.node), this.parent() && this.parent().add(), c && c.add(), a.paper = this.paper, this
    }, m.after = function (a) {
      a = u(a);
      var b = a.parent();
      return this.node.nextSibling ? this.node.parentNode.insertBefore(a.node, this.node.nextSibling) : this.node.parentNode.appendChild(a.node), this.parent() && this.parent().add(), b && b.add(), a.paper = this.paper, this
    }, m.insertBefore = function (a) {
      a = u(a);
      var b = this.parent();
      return a.node.parentNode.insertBefore(this.node, a.node), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
    }, m.insertAfter = function (a) {
      a = u(a);
      var b = this.parent();
      return a.node.parentNode.insertBefore(this.node, a.node.nextSibling), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
    }, m.remove = function () {
      var a = this.parent();
      return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, a && a.add(), this
    }, m.select = function (a) {
      return u(this.node.querySelector(a))
    }, m.selectAll = function (a) {
      for (var b = this.node.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++) c.push(u(b[e]));
      return c
    }, m.asPX = function (a, b) {
      return null == b && (b = this.attr(a)), +p(this, a, b)
    }, m.use = function () {
      var a, b = this.node.id;
      return b || (b = this.id, q(this.node, {
        id: b
      })), a = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? r(this.type, this.node.parentNode) : r("use", this.node.parentNode), q(a.node, {
        "xlink:href": "#" + b
      }), a.original = this, a
    }, m.clone = function () {
      var a = u(this.node.cloneNode(!0));
      return q(a.node, "id") && q(a.node, {
        id: a.id
      }), j(a), a.insertAfter(this), a
    }, m.toDefs = function () {
      var a = s(this);
      return a.appendChild(this.node), this
    }, m.pattern = m.toPattern = function (a, b, c, d) {
      var e = r("pattern", s(this));
      return null == a && (a = this.getBBox()), n(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, a = a.x), q(e.node, {
        x: a,
        y: b,
        width: c,
        height: d,
        patternUnits: "userSpaceOnUse",
        id: e.id,
        viewBox: [a, b, c, d].join(" ")
      }), e.node.appendChild(this.node), e
    }, m.marker = function (a, b, c, d, e, f) {
      var g = r("marker", s(this));
      return null == a && (a = this.getBBox()), n(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, e = a.refX || a.cx, f = a.refY || a.cy, a = a.x), q(g.node, {
        viewBox: [a, b, c, d].join(" "),
        markerWidth: c,
        markerHeight: d,
        orient: "auto",
        refX: e || 0,
        refY: f || 0,
        id: g.id
      }), g.node.appendChild(this.node), g
    };
    var w = function (a, b, d, e) {
      "function" != typeof d || d.length || (e = d, d = c.linear), this.attr = a, this.dur = b, d && (this.easing = d), e && (this.callback = e)
    };
    d._.Animation = w, d.animation = function (a, b, c, d) {
      return new w(a, b, c, d)
    }, m.inAnim = function () {
      var a = this,
        b = [];
      for (var c in a.anims) a.anims[t](c) && ! function (a) {
        b.push({
          anim: new w(a._attrs, a.dur, a.easing, a._callback),
          mina: a,
          curStatus: a.status(),
          status: function (b) {
            return a.status(b)
          },
          stop: function () {
            a.stop()
          }
        })
      }(a.anims[c]);
      return b
    }, d.animate = function (a, d, e, f, g, h) {
      "function" != typeof g || g.length || (h = g, g = c.linear);
      var i = c.time(),
        j = c(a, d, i, i + f, c.time, e, g);
      return h && b.once("mina.finish." + j.id, h), j
    }, m.stop = function () {
      for (var a = this.inAnim(), b = 0, c = a.length; c > b; b++) a[b].stop();
      return this
    }, m.animate = function (a, d, e, f) {
      "function" != typeof e || e.length || (f = e, e = c.linear), a instanceof w && (f = a.callback, e = a.easing, d = a.dur, a = a.attr);
      var g, h, i, j, l = [],
        m = [],
        p = {},
        q = this;
      for (var r in a)
        if (a[t](r)) {
          q.equal ? (j = q.equal(r, o(a[r])), g = j.from, h = j.to, i = j.f) : (g = +q.attr(r), h = +a[r]);
          var s = n(g, "array") ? g.length : 1;
          p[r] = k(l.length, l.length + s, i), l = l.concat(g), m = m.concat(h)
        }
      var u = c.time(),
        v = c(l, m, u, u + d, c.time, function (a) {
          var b = {};
          for (var c in p) p[t](c) && (b[c] = p[c](a));
          q.attr(b)
        }, e);
      return q.anims[v.id] = v, v._attrs = a, v._callback = f, b("snap.animcreated." + q.id, v), b.once("mina.finish." + v.id, function () {
        delete q.anims[v.id], f && f.call(q)
      }), b.once("mina.stop." + v.id, function () {
        delete q.anims[v.id]
      }), q
    };
    var x = {};
    m.data = function (a, c) {
      var e = x[this.id] = x[this.id] || {};
      if (0 == arguments.length) return b("snap.data.get." + this.id, this, e, null), e;
      if (1 == arguments.length) {
        if (d.is(a, "object")) {
          for (var f in a) a[t](f) && this.data(f, a[f]);
          return this
        }
        return b("snap.data.get." + this.id, this, e[a], a), e[a]
      }
      return e[a] = c, b("snap.data.set." + this.id, this, c, a), this
    }, m.removeData = function (a) {
      return null == a ? x[this.id] = {} : x[this.id] && delete x[this.id][a], this
    }, m.outerSVG = m.toString = l(1), m.innerSVG = l(), m.toDataURL = function () {
      if (a && a.btoa) {
        var b = this.getBBox(),
          c = d.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
            x: +b.x.toFixed(3),
            y: +b.y.toFixed(3),
            width: +b.width.toFixed(3),
            height: +b.height.toFixed(3),
            contents: this.outerSVG()
          });
        return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(c)))
      }
    }, h.prototype.select = m.select, h.prototype.selectAll = m.selectAll
  }), d.plugin(function (a) {
    function b(a, b, d, e, f, g) {
      return null == b && "[object SVGMatrix]" == c.call(a) ? (this.a = a.a, this.b = a.b, this.c = a.c, this.d = a.d, this.e = a.e, void(this.f = a.f)) : void(null != a ? (this.a = +a, this.b = +b, this.c = +d, this.d = +e, this.e = +f, this.f = +g) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
    }
    var c = Object.prototype.toString,
      d = String,
      e = Math,
      f = "";
    ! function (c) {
      function g(a) {
        return a[0] * a[0] + a[1] * a[1]
      }

      function h(a) {
        var b = e.sqrt(g(a));
        a[0] && (a[0] /= b), a[1] && (a[1] /= b)
      }
      c.add = function (a, c, d, e, f, g) {
        var h, i, j, k, l = [
            [],
            [],
            []
          ],
          m = [
            [this.a, this.c, this.e],
            [this.b, this.d, this.f],
            [0, 0, 1]
          ],
          n = [
            [a, d, f],
            [c, e, g],
            [0, 0, 1]
          ];
        for (a && a instanceof b && (n = [
            [a.a, a.c, a.e],
            [a.b, a.d, a.f],
            [0, 0, 1]
          ]), h = 0; 3 > h; h++)
          for (i = 0; 3 > i; i++) {
            for (k = 0, j = 0; 3 > j; j++) k += m[h][j] * n[j][i];
            l[h][i] = k
          }
        return this.a = l[0][0], this.b = l[1][0], this.c = l[0][1], this.d = l[1][1], this.e = l[0][2], this.f = l[1][2], this
      }, c.invert = function () {
        var a = this,
          c = a.a * a.d - a.b * a.c;
        return new b(a.d / c, -a.b / c, -a.c / c, a.a / c, (a.c * a.f - a.d * a.e) / c, (a.b * a.e - a.a * a.f) / c)
      }, c.clone = function () {
        return new b(this.a, this.b, this.c, this.d, this.e, this.f)
      }, c.translate = function (a, b) {
        return this.add(1, 0, 0, 1, a, b)
      }, c.scale = function (a, b, c, d) {
        return null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d), this
      }, c.rotate = function (b, c, d) {
        b = a.rad(b), c = c || 0, d = d || 0;
        var f = +e.cos(b).toFixed(9),
          g = +e.sin(b).toFixed(9);
        return this.add(f, g, -g, f, c, d), this.add(1, 0, 0, 1, -c, -d)
      }, c.x = function (a, b) {
        return a * this.a + b * this.c + this.e
      }, c.y = function (a, b) {
        return a * this.b + b * this.d + this.f
      }, c.get = function (a) {
        return +this[d.fromCharCode(97 + a)].toFixed(4)
      }, c.toString = function () {
        return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
      }, c.offset = function () {
        return [this.e.toFixed(4), this.f.toFixed(4)]
      }, c.determinant = function () {
        return this.a * this.d - this.b * this.c
      }, c.split = function () {
        var b = {};
        b.dx = this.e, b.dy = this.f;
        var c = [
          [this.a, this.c],
          [this.b, this.d]
        ];
        b.scalex = e.sqrt(g(c[0])), h(c[0]), b.shear = c[0][0] * c[1][0] + c[0][1] * c[1][1], c[1] = [c[1][0] - c[0][0] * b.shear, c[1][1] - c[0][1] * b.shear], b.scaley = e.sqrt(g(c[1])), h(c[1]), b.shear /= b.scaley, this.determinant() < 0 && (b.scalex = -b.scalex);
        var d = -c[0][1],
          f = c[1][1];
        return 0 > f ? (b.rotate = a.deg(e.acos(f)), 0 > d && (b.rotate = 360 - b.rotate)) : b.rotate = a.deg(e.asin(d)), b.isSimple = !(+b.shear.toFixed(9) || b.scalex.toFixed(9) != b.scaley.toFixed(9) && b.rotate), b.isSuperSimple = !+b.shear.toFixed(9) && b.scalex.toFixed(9) == b.scaley.toFixed(9) && !b.rotate, b.noRotation = !+b.shear.toFixed(9) && !b.rotate, b
      }, c.toTransformString = function (a) {
        var b = a || this.split();
        return +b.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [+b.dx.toFixed(4), +b.dy.toFixed(4)] : f) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : f) + (b.rotate ? "r" + [+b.rotate.toFixed(4), 0, 0] : f))
      }
    }(b.prototype), a.Matrix = b, a.matrix = function (a, c, d, e, f, g) {
      return new b(a, c, d, e, f, g)
    }
  }), d.plugin(function (a, c, d, e, f) {
    function g(d) {
      return function (e) {
        if (b.stop(), e instanceof f && 1 == e.node.childNodes.length && ("radialGradient" == e.node.firstChild.tagName || "linearGradient" == e.node.firstChild.tagName || "pattern" == e.node.firstChild.tagName) && (e = e.node.firstChild, n(this).appendChild(e), e = l(e)), e instanceof c)
          if ("radialGradient" == e.type || "linearGradient" == e.type || "pattern" == e.type) {
            e.node.id || p(e.node, {
              id: e.id
            });
            var g = q(e.node.id)
          } else g = e.attr(d);
        else if (g = a.color(e), g.error) {
          var h = a(n(this).ownerSVGElement).gradient(e);
          h ? (h.node.id || p(h.node, {
            id: h.id
          }), g = q(h.node.id)) : g = e
        } else g = r(g);
        var i = {};
        i[d] = g, p(this.node, i), this.node.style[d] = t
      }
    }

    function h(a) {
      b.stop(), a == +a && (a += "px"), this.node.style.fontSize = a
    }

    function i(a) {
      for (var b = [], c = a.childNodes, d = 0, e = c.length; e > d; d++) {
        var f = c[d];
        3 == f.nodeType && b.push(f.nodeValue), "tspan" == f.tagName && b.push(1 == f.childNodes.length && 3 == f.firstChild.nodeType ? f.firstChild.nodeValue : i(f))
      }
      return b
    }

    function j() {
      return b.stop(), this.node.style.fontSize
    }
    var k = a._.make,
      l = a._.wrap,
      m = a.is,
      n = a._.getSomeDefs,
      o = /^url\(#?([^)]+)\)$/,
      p = a._.$,
      q = a.url,
      r = String,
      s = a._.separator,
      t = "";
    b.on("snap.util.attr.mask", function (a) {
        if (a instanceof c || a instanceof f) {
          if (b.stop(), a instanceof f && 1 == a.node.childNodes.length && (a = a.node.firstChild, n(this).appendChild(a), a = l(a)), "mask" == a.type) var d = a;
          else d = k("mask", n(this)), d.node.appendChild(a.node);
          !d.node.id && p(d.node, {
            id: d.id
          }), p(this.node, {
            mask: q(d.id)
          })
        }
      }),
      function (a) {
        b.on("snap.util.attr.clip", a), b.on("snap.util.attr.clip-path", a), b.on("snap.util.attr.clipPath", a)
      }(function (a) {
        if (a instanceof c || a instanceof f) {
          if (b.stop(), "clipPath" == a.type) var d = a;
          else d = k("clipPath", n(this)), d.node.appendChild(a.node), !d.node.id && p(d.node, {
            id: d.id
          });
          p(this.node, {
            "clip-path": q(d.node.id || d.id)
          })
        }
      }), b.on("snap.util.attr.fill", g("fill")), b.on("snap.util.attr.stroke", g("stroke"));
    var u = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
    b.on("snap.util.grad.parse", function (a) {
        a = r(a);
        var b = a.match(u);
        if (!b) return null;
        var c = b[1],
          d = b[2],
          e = b[3];
        return d = d.split(/\s*,\s*/).map(function (a) {
          return +a == a ? +a : a
        }), 1 == d.length && 0 == d[0] && (d = []), e = e.split("-"), e = e.map(function (a) {
          a = a.split(":");
          var b = {
            color: a[0]
          };
          return a[1] && (b.offset = parseFloat(a[1])), b
        }), {
          type: c,
          params: d,
          stops: e
        }
      }), b.on("snap.util.attr.d", function (c) {
        b.stop(), m(c, "array") && m(c[0], "array") && (c = a.path.toString.call(c)), c = r(c), c.match(/[ruo]/i) && (c = a.path.toAbsolute(c)), p(this.node, {
          d: c
        })
      })(-1), b.on("snap.util.attr.#text", function (a) {
        b.stop(), a = r(a);
        for (var c = e.doc.createTextNode(a); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
        this.node.appendChild(c)
      })(-1), b.on("snap.util.attr.path", function (a) {
        b.stop(), this.attr({
          d: a
        })
      })(-1), b.on("snap.util.attr.class", function (a) {
        b.stop(), this.node.className.baseVal = a
      })(-1), b.on("snap.util.attr.viewBox", function (a) {
        var c;
        c = m(a, "object") && "x" in a ? [a.x, a.y, a.width, a.height].join(" ") : m(a, "array") ? a.join(" ") : a, p(this.node, {
          viewBox: c
        }), b.stop()
      })(-1), b.on("snap.util.attr.transform", function (a) {
        this.transform(a), b.stop()
      })(-1), b.on("snap.util.attr.r", function (a) {
        "rect" == this.type && (b.stop(), p(this.node, {
          rx: a,
          ry: a
        }))
      })(-1), b.on("snap.util.attr.textpath", function (a) {
        if (b.stop(), "text" == this.type) {
          var d, e, f;
          if (!a && this.textPath) {
            for (e = this.textPath; e.node.firstChild;) this.node.appendChild(e.node.firstChild);
            return e.remove(), void delete this.textPath
          }
          if (m(a, "string")) {
            var g = n(this),
              h = l(g.parentNode).path(a);
            g.appendChild(h.node), d = h.id, h.attr({
              id: d
            })
          } else a = l(a), a instanceof c && (d = a.attr("id"), d || (d = a.id, a.attr({
            id: d
          })));
          if (d)
            if (e = this.textPath, f = this.node, e) e.attr({
              "xlink:href": "#" + d
            });
            else {
              for (e = p("textPath", {
                  "xlink:href": "#" + d
                }); f.firstChild;) e.appendChild(f.firstChild);
              f.appendChild(e), this.textPath = l(e)
            }
        }
      })(-1), b.on("snap.util.attr.text", function (a) {
        if ("text" == this.type) {
          for (var c = this.node, d = function (a) {
              var b = p("tspan");
              if (m(a, "array"))
                for (var c = 0; c < a.length; c++) b.appendChild(d(a[c]));
              else b.appendChild(e.doc.createTextNode(a));
              return b.normalize && b.normalize(), b
            }; c.firstChild;) c.removeChild(c.firstChild);
          for (var f = d(a); f.firstChild;) c.appendChild(f.firstChild)
        }
        b.stop()
      })(-1), b.on("snap.util.attr.fontSize", h)(-1), b.on("snap.util.attr.font-size", h)(-1), b.on("snap.util.getattr.transform", function () {
        return b.stop(), this.transform()
      })(-1), b.on("snap.util.getattr.textpath", function () {
        return b.stop(), this.textPath
      })(-1),
      function () {
        function c(c) {
          return function () {
            b.stop();
            var d = e.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + c);
            return "none" == d ? d : a(e.doc.getElementById(d.match(o)[1]))
          }
        }

        function d(a) {
          return function (c) {
            b.stop();
            var d = "marker" + a.charAt(0).toUpperCase() + a.substring(1);
            if ("" == c || !c) return void(this.node.style[d] = "none");
            if ("marker" == c.type) {
              var e = c.node.id;
              return e || p(c.node, {
                id: c.id
              }), void(this.node.style[d] = q(e))
            }
          }
        }
        b.on("snap.util.getattr.marker-end", c("end"))(-1), b.on("snap.util.getattr.markerEnd", c("end"))(-1), b.on("snap.util.getattr.marker-start", c("start"))(-1), b.on("snap.util.getattr.markerStart", c("start"))(-1), b.on("snap.util.getattr.marker-mid", c("mid"))(-1), b.on("snap.util.getattr.markerMid", c("mid"))(-1), b.on("snap.util.attr.marker-end", d("end"))(-1), b.on("snap.util.attr.markerEnd", d("end"))(-1), b.on("snap.util.attr.marker-start", d("start"))(-1), b.on("snap.util.attr.markerStart", d("start"))(-1), b.on("snap.util.attr.marker-mid", d("mid"))(-1), b.on("snap.util.attr.markerMid", d("mid"))(-1)
      }(), b.on("snap.util.getattr.r", function () {
        return "rect" == this.type && p(this.node, "rx") == p(this.node, "ry") ? (b.stop(), p(this.node, "rx")) : void 0
      })(-1), b.on("snap.util.getattr.text", function () {
        if ("text" == this.type || "tspan" == this.type) {
          b.stop();
          var a = i(this.node);
          return 1 == a.length ? a[0] : a
        }
      })(-1), b.on("snap.util.getattr.#text", function () {
        return this.node.textContent
      })(-1), b.on("snap.util.getattr.viewBox", function () {
        b.stop();
        var c = p(this.node, "viewBox");
        return c ? (c = c.split(s), a._.box(+c[0], +c[1], +c[2], +c[3])) : void 0
      })(-1), b.on("snap.util.getattr.points", function () {
        var a = p(this.node, "points");
        return b.stop(), a ? a.split(s) : void 0
      })(-1), b.on("snap.util.getattr.path", function () {
        var a = p(this.node, "d");
        return b.stop(), a
      })(-1), b.on("snap.util.getattr.class", function () {
        return this.node.className.baseVal
      })(-1), b.on("snap.util.getattr.fontSize", j)(-1), b.on("snap.util.getattr.font-size", j)(-1)
  }), d.plugin(function (a, b) {
    var c = /\S+/g,
      d = String,
      e = b.prototype;
    e.addClass = function (a) {
      var b, e, f, g, h = d(a || "").match(c) || [],
        i = this.node,
        j = i.className.baseVal,
        k = j.match(c) || [];
      if (h.length) {
        for (b = 0; f = h[b++];) e = k.indexOf(f), ~e || k.push(f);
        g = k.join(" "), j != g && (i.className.baseVal = g)
      }
      return this
    }, e.removeClass = function (a) {
      var b, e, f, g, h = d(a || "").match(c) || [],
        i = this.node,
        j = i.className.baseVal,
        k = j.match(c) || [];
      if (k.length) {
        for (b = 0; f = h[b++];) e = k.indexOf(f), ~e && k.splice(e, 1);
        g = k.join(" "), j != g && (i.className.baseVal = g)
      }
      return this
    }, e.hasClass = function (a) {
      var b = this.node,
        d = b.className.baseVal,
        e = d.match(c) || [];
      return !!~e.indexOf(a)
    }, e.toggleClass = function (a, b) {
      if (null != b) return b ? this.addClass(a) : this.removeClass(a);
      var d, e, f, g, h = (a || "").match(c) || [],
        i = this.node,
        j = i.className.baseVal,
        k = j.match(c) || [];
      for (d = 0; f = h[d++];) e = k.indexOf(f), ~e ? k.splice(e, 1) : k.push(f);
      return g = k.join(" "), j != g && (i.className.baseVal = g), this
    }
  }), d.plugin(function () {
    function a(a) {
      return a
    }

    function c(a) {
      return function (b) {
        return +b.toFixed(3) + a
      }
    }
    var d = {
        "+": function (a, b) {
          return a + b
        },
        "-": function (a, b) {
          return a - b
        },
        "/": function (a, b) {
          return a / b
        },
        "*": function (a, b) {
          return a * b
        }
      },
      e = String,
      f = /[a-z]+$/i,
      g = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
    b.on("snap.util.attr", function (a) {
      var c = e(a).match(g);
      if (c) {
        var h = b.nt(),
          i = h.substring(h.lastIndexOf(".") + 1),
          j = this.attr(i),
          k = {};
        b.stop();
        var l = c[3] || "",
          m = j.match(f),
          n = d[c[1]];
        if (m && m == l ? a = n(parseFloat(j), +c[2]) : (j = this.asPX(i), a = n(this.asPX(i), this.asPX(i, c[2] + l))), isNaN(j) || isNaN(a)) return;
        k[i] = a, this.attr(k)
      }
    })(-10), b.on("snap.util.equal", function (h, i) {
      var j = e(this.attr(h) || ""),
        k = e(i).match(g);
      if (k) {
        b.stop();
        var l = k[3] || "",
          m = j.match(f),
          n = d[k[1]];
        return m && m == l ? {
          from: parseFloat(j),
          to: n(parseFloat(j), +k[2]),
          f: c(m)
        } : (j = this.asPX(h), {
          from: j,
          to: n(j, this.asPX(h, k[2] + l)),
          f: a
        })
      }
    })(-10)
  }), d.plugin(function (c, d, e, f) {
    var g = e.prototype,
      h = c.is;
    g.rect = function (a, b, c, d, e, f) {
      var g;
      return null == f && (f = e), h(a, "object") && "[object Object]" == a ? g = a : null != a && (g = {
        x: a,
        y: b,
        width: c,
        height: d
      }, null != e && (g.rx = e, g.ry = f)), this.el("rect", g)
    }, g.circle = function (a, b, c) {
      var d;
      return h(a, "object") && "[object Object]" == a ? d = a : null != a && (d = {
        cx: a,
        cy: b,
        r: c
      }), this.el("circle", d)
    };
    var i = function () {
      function a() {
        this.parentNode.removeChild(this)
      }
      return function (b, c) {
        var d = f.doc.createElement("img"),
          e = f.doc.body;
        d.style.cssText = "position:absolute;left:-9999em;top:-9999em", d.onload = function () {
          c.call(d), d.onload = d.onerror = null, e.removeChild(d)
        }, d.onerror = a, e.appendChild(d), d.src = b
      }
    }();
    g.image = function (a, b, d, e, f) {
        var g = this.el("image");
        if (h(a, "object") && "src" in a) g.attr(a);
        else if (null != a) {
          var j = {
            "xlink:href": a,
            preserveAspectRatio: "none"
          };
          null != b && null != d && (j.x = b, j.y = d), null != e && null != f ? (j.width = e, j.height = f) : i(a, function () {
            c._.$(g.node, {
              width: this.offsetWidth,
              height: this.offsetHeight
            })
          }), c._.$(g.node, j)
        }
        return g
      }, g.ellipse = function (a, b, c, d) {
        var e;
        return h(a, "object") && "[object Object]" == a ? e = a : null != a && (e = {
          cx: a,
          cy: b,
          rx: c,
          ry: d
        }), this.el("ellipse", e)
      }, g.path = function (a) {
        var b;
        return h(a, "object") && !h(a, "array") ? b = a : a && (b = {
          d: a
        }), this.el("path", b)
      }, g.group = g.g = function (a) {
        var b = this.el("g");
        return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b
      }, g.svg = function (a, b, c, d, e, f, g, i) {
        var j = {};
        return h(a, "object") && null == b ? j = a : (null != a && (j.x = a), null != b && (j.y = b), null != c && (j.width = c), null != d && (j.height = d), null != e && null != f && null != g && null != i && (j.viewBox = [e, f, g, i])), this.el("svg", j)
      }, g.mask = function (a) {
        var b = this.el("mask");
        return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b
      }, g.ptrn = function (a, b, c, d, e, f, g, i) {
        if (h(a, "object")) var j = a;
        else j = {
          patternUnits: "userSpaceOnUse"
        }, a && (j.x = a), b && (j.y = b), null != c && (j.width = c), null != d && (j.height = d), j.viewBox = null != e && null != f && null != g && null != i ? [e, f, g, i] : [a || 0, b || 0, c || 0, d || 0];
        return this.el("pattern", j)
      }, g.use = function (a) {
        return null != a ? (a instanceof d && (a.attr("id") || a.attr({
          id: c._.id(a)
        }), a = a.attr("id")), "#" == String(a).charAt() && (a = a.substring(1)), this.el("use", {
          "xlink:href": "#" + a
        })) : d.prototype.use.call(this)
      }, g.symbol = function (a, b, c, d) {
        var e = {};
        return null != a && null != b && null != c && null != d && (e.viewBox = [a, b, c, d]), this.el("symbol", e)
      }, g.text = function (a, b, c) {
        var d = {};
        return h(a, "object") ? d = a : null != a && (d = {
          x: a,
          y: b,
          text: c || ""
        }), this.el("text", d)
      }, g.line = function (a, b, c, d) {
        var e = {};
        return h(a, "object") ? e = a : null != a && (e = {
          x1: a,
          x2: c,
          y1: b,
          y2: d
        }), this.el("line", e)
      }, g.polyline = function (a) {
        arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
        var b = {};
        return h(a, "object") && !h(a, "array") ? b = a : null != a && (b = {
          points: a
        }), this.el("polyline", b)
      }, g.polygon = function (a) {
        arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
        var b = {};
        return h(a, "object") && !h(a, "array") ? b = a : null != a && (b = {
          points: a
        }), this.el("polygon", b)
      },
      function () {
        function d() {
          return this.selectAll("stop")
        }

        function e(a, b) {
          var d = k("stop"),
            e = {
              offset: +b + "%"
            };
          return a = c.color(a), e["stop-color"] = a.hex, a.opacity < 1 && (e["stop-opacity"] = a.opacity), k(d, e), this.node.appendChild(d), this
        }

        function f() {
          if ("linearGradient" == this.type) {
            var a = k(this.node, "x1") || 0,
              b = k(this.node, "x2") || 1,
              d = k(this.node, "y1") || 0,
              e = k(this.node, "y2") || 0;
            return c._.box(a, d, math.abs(b - a), math.abs(e - d))
          }
          var f = this.node.cx || .5,
            g = this.node.cy || .5,
            h = this.node.r || 0;
          return c._.box(f - h, g - h, 2 * h, 2 * h)
        }

        function h(a, c) {
          function d(a, b) {
            for (var c = (b - l) / (a - m), d = m; a > d; d++) g[d].offset = +(+l + c * (d - m)).toFixed(2);
            m = a, l = b
          }
          var e, f = b("snap.util.grad.parse", null, c).firstDefined();
          if (!f) return null;
          f.params.unshift(a), e = "l" == f.type.toLowerCase() ? i.apply(0, f.params) : j.apply(0, f.params), f.type != f.type.toLowerCase() && k(e.node, {
            gradientUnits: "userSpaceOnUse"
          });
          var g = f.stops,
            h = g.length,
            l = 0,
            m = 0;
          h--;
          for (var n = 0; h > n; n++) "offset" in g[n] && d(n, g[n].offset);
          for (g[h].offset = g[h].offset || 100, d(h, g[h].offset), n = 0; h >= n; n++) {
            var o = g[n];
            e.addStop(o.color, o.offset)
          }
          return e
        }

        function i(a, b, g, h, i) {
          var j = c._.make("linearGradient", a);
          return j.stops = d, j.addStop = e, j.getBBox = f, null != b && k(j.node, {
            x1: b,
            y1: g,
            x2: h,
            y2: i
          }), j
        }

        function j(a, b, g, h, i, j) {
          var l = c._.make("radialGradient", a);
          return l.stops = d, l.addStop = e, l.getBBox = f, null != b && k(l.node, {
            cx: b,
            cy: g,
            r: h
          }), null != i && null != j && k(l.node, {
            fx: i,
            fy: j
          }), l
        }
        var k = c._.$;
        g.gradient = function (a) {
          return h(this.defs, a)
        }, g.gradientLinear = function (a, b, c, d) {
          return i(this.defs, a, b, c, d)
        }, g.gradientRadial = function (a, b, c, d, e) {
          return j(this.defs, a, b, c, d, e)
        }, g.toString = function () {
          var a, b = this.node.ownerDocument,
            d = b.createDocumentFragment(),
            e = b.createElement("div"),
            f = this.node.cloneNode(!0);
          return d.appendChild(e), e.appendChild(f), c._.$(f, {
            xmlns: "http://www.w3.org/2000/svg"
          }), a = e.innerHTML, d.removeChild(d.firstChild), a
        }, g.toDataURL = function () {
          return a && a.btoa ? "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this))) : void 0
        }, g.clear = function () {
          for (var a, b = this.node.firstChild; b;) a = b.nextSibling, "defs" != b.tagName ? b.parentNode.removeChild(b) : g.clear.call({
            node: b
          }), b = a
        }
      }()
  }), d.plugin(function (a, b) {
    function c(a) {
      var b = c.ps = c.ps || {};
      return b[a] ? b[a].sleep = 100 : b[a] = {
        sleep: 100
      }, setTimeout(function () {
        for (var c in b) b[K](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
      }), b[a]
    }

    function d(a, b, c, d) {
      return null == a && (a = b = c = d = 0), null == b && (b = a.y, c = a.width, d = a.height, a = a.x), {
        x: a,
        y: b,
        width: c,
        w: c,
        height: d,
        h: d,
        x2: a + c,
        y2: b + d,
        cx: a + c / 2,
        cy: b + d / 2,
        r1: N.min(c, d) / 2,
        r2: N.max(c, d) / 2,
        r0: N.sqrt(c * c + d * d) / 2,
        path: w(a, b, c, d),
        vb: [a, b, c, d].join(" ")
      }
    }

    function e() {
      return this.join(",").replace(L, "$1")
    }

    function f(a) {
      var b = J(a);
      return b.toString = e, b
    }

    function g(a, b, c, d, e, f, g, h, j) {
      return null == j ? n(a, b, c, d, e, f, g, h) : i(a, b, c, d, e, f, g, h, o(a, b, c, d, e, f, g, h, j))
    }

    function h(c, d) {
      function e(a) {
        return +(+a).toFixed(3)
      }
      return a._.cacher(function (a, f, h) {
        a instanceof b && (a = a.attr("d")), a = E(a);
        for (var j, k, l, m, n, o = "", p = {}, q = 0, r = 0, s = a.length; s > r; r++) {
          if (l = a[r], "M" == l[0]) j = +l[1], k = +l[2];
          else {
            if (m = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6]), q + m > f) {
              if (d && !p.start) {
                if (n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q), o += ["C" + e(n.start.x), e(n.start.y), e(n.m.x), e(n.m.y), e(n.x), e(n.y)], h) return o;
                p.start = o, o = ["M" + e(n.x), e(n.y) + "C" + e(n.n.x), e(n.n.y), e(n.end.x), e(n.end.y), e(l[5]), e(l[6])].join(), q += m, j = +l[5], k = +l[6];
                continue
              }
              if (!c && !d) return n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q)
            }
            q += m, j = +l[5], k = +l[6]
          }
          o += l.shift() + l
        }
        return p.end = o, n = c ? q : d ? p : i(j, k, l[0], l[1], l[2], l[3], l[4], l[5], 1)
      }, null, a._.clone)
    }

    function i(a, b, c, d, e, f, g, h, i) {
      var j = 1 - i,
        k = R(j, 3),
        l = R(j, 2),
        m = i * i,
        n = m * i,
        o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
        p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
        q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
        r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
        s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
        t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
        u = j * a + i * c,
        v = j * b + i * d,
        w = j * e + i * g,
        x = j * f + i * h,
        y = 90 - 180 * N.atan2(q - s, r - t) / O;
      return {
        x: o,
        y: p,
        m: {
          x: q,
          y: r
        },
        n: {
          x: s,
          y: t
        },
        start: {
          x: u,
          y: v
        },
        end: {
          x: w,
          y: x
        },
        alpha: y
      }
    }

    function j(b, c, e, f, g, h, i, j) {
      a.is(b, "array") || (b = [b, c, e, f, g, h, i, j]);
      var k = D.apply(null, b);
      return d(k.min.x, k.min.y, k.max.x - k.min.x, k.max.y - k.min.y)
    }

    function k(a, b, c) {
      return b >= a.x && b <= a.x + a.width && c >= a.y && c <= a.y + a.height
    }

    function l(a, b) {
      return a = d(a), b = d(b), k(b, a.x, a.y) || k(b, a.x2, a.y) || k(b, a.x, a.y2) || k(b, a.x2, a.y2) || k(a, b.x, b.y) || k(a, b.x2, b.y) || k(a, b.x, b.y2) || k(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y)
    }

    function m(a, b, c, d, e) {
      var f = -3 * b + 9 * c - 9 * d + 3 * e,
        g = a * f + 6 * b - 12 * c + 6 * d;
      return a * g - 3 * b + 3 * c
    }

    function n(a, b, c, d, e, f, g, h, i) {
      null == i && (i = 1), i = i > 1 ? 1 : 0 > i ? 0 : i;
      for (var j = i / 2, k = 12, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], n = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], o = 0, p = 0; k > p; p++) {
        var q = j * l[p] + j,
          r = m(q, a, c, e, g),
          s = m(q, b, d, f, h),
          t = r * r + s * s;
        o += n[p] * N.sqrt(t)
      }
      return j * o
    }

    function o(a, b, c, d, e, f, g, h, i) {
      if (!(0 > i || n(a, b, c, d, e, f, g, h) < i)) {
        var j, k = 1,
          l = k / 2,
          m = k - l,
          o = .01;
        for (j = n(a, b, c, d, e, f, g, h, m); S(j - i) > o;) l /= 2, m += (i > j ? 1 : -1) * l, j = n(a, b, c, d, e, f, g, h, m);
        return m
      }
    }

    function p(a, b, c, d, e, f, g, h) {
      if (!(Q(a, c) < P(e, g) || P(a, c) > Q(e, g) || Q(b, d) < P(f, h) || P(b, d) > Q(f, h))) {
        var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
          j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
          k = (a - c) * (f - h) - (b - d) * (e - g);
        if (k) {
          var l = i / k,
            m = j / k,
            n = +l.toFixed(2),
            o = +m.toFixed(2);
          if (!(n < +P(a, c).toFixed(2) || n > +Q(a, c).toFixed(2) || n < +P(e, g).toFixed(2) || n > +Q(e, g).toFixed(2) || o < +P(b, d).toFixed(2) || o > +Q(b, d).toFixed(2) || o < +P(f, h).toFixed(2) || o > +Q(f, h).toFixed(2))) return {
            x: l,
            y: m
          }
        }
      }
    }

    function q(a, b, c) {
      var d = j(a),
        e = j(b);
      if (!l(d, e)) return c ? 0 : [];
      for (var f = n.apply(0, a), g = n.apply(0, b), h = ~~(f / 8), k = ~~(g / 8), m = [], o = [], q = {}, r = c ? 0 : [], s = 0; h + 1 > s; s++) {
        var t = i.apply(0, a.concat(s / h));
        m.push({
          x: t.x,
          y: t.y,
          t: s / h
        })
      }
      for (s = 0; k + 1 > s; s++) t = i.apply(0, b.concat(s / k)), o.push({
        x: t.x,
        y: t.y,
        t: s / k
      });
      for (s = 0; h > s; s++)
        for (var u = 0; k > u; u++) {
          var v = m[s],
            w = m[s + 1],
            x = o[u],
            y = o[u + 1],
            z = S(w.x - v.x) < .001 ? "y" : "x",
            A = S(y.x - x.x) < .001 ? "y" : "x",
            B = p(v.x, v.y, w.x, w.y, x.x, x.y, y.x, y.y);
          if (B) {
            if (q[B.x.toFixed(4)] == B.y.toFixed(4)) continue;
            q[B.x.toFixed(4)] = B.y.toFixed(4);
            var C = v.t + S((B[z] - v[z]) / (w[z] - v[z])) * (w.t - v.t),
              D = x.t + S((B[A] - x[A]) / (y[A] - x[A])) * (y.t - x.t);
            C >= 0 && 1 >= C && D >= 0 && 1 >= D && (c ? r++ : r.push({
              x: B.x,
              y: B.y,
              t1: C,
              t2: D
            }))
          }
        }
      return r
    }

    function r(a, b) {
      return t(a, b)
    }

    function s(a, b) {
      return t(a, b, 1)
    }

    function t(a, b, c) {
      a = E(a), b = E(b);
      for (var d, e, f, g, h, i, j, k, l, m, n = c ? 0 : [], o = 0, p = a.length; p > o; o++) {
        var r = a[o];
        if ("M" == r[0]) d = h = r[1], e = i = r[2];
        else {
          "C" == r[0] ? (l = [d, e].concat(r.slice(1)), d = l[6], e = l[7]) : (l = [d, e, d, e, h, i, h, i], d = h, e = i);
          for (var s = 0, t = b.length; t > s; s++) {
            var u = b[s];
            if ("M" == u[0]) f = j = u[1], g = k = u[2];
            else {
              "C" == u[0] ? (m = [f, g].concat(u.slice(1)), f = m[6], g = m[7]) : (m = [f, g, f, g, j, k, j, k], f = j, g = k);
              var v = q(l, m, c);
              if (c) n += v;
              else {
                for (var w = 0, x = v.length; x > w; w++) v[w].segment1 = o, v[w].segment2 = s, v[w].bez1 = l, v[w].bez2 = m;
                n = n.concat(v)
              }
            }
          }
        }
      }
      return n
    }

    function u(a, b, c) {
      var d = v(a);
      return k(d, b, c) && t(a, [
        ["M", b, c],
        ["H", d.x2 + 10]
      ], 1) % 2 == 1
    }

    function v(a) {
      var b = c(a);
      if (b.bbox) return J(b.bbox);
      if (!a) return d();
      a = E(a);
      for (var e, f = 0, g = 0, h = [], i = [], j = 0, k = a.length; k > j; j++)
        if (e = a[j], "M" == e[0]) f = e[1], g = e[2], h.push(f), i.push(g);
        else {
          var l = D(f, g, e[1], e[2], e[3], e[4], e[5], e[6]);
          h = h.concat(l.min.x, l.max.x), i = i.concat(l.min.y, l.max.y), f = e[5], g = e[6]
        }
      var m = P.apply(0, h),
        n = P.apply(0, i),
        o = Q.apply(0, h),
        p = Q.apply(0, i),
        q = d(m, n, o - m, p - n);
      return b.bbox = J(q), q
    }

    function w(a, b, c, d, f) {
      if (f) return [
        ["M", +a + +f, b],
        ["l", c - 2 * f, 0],
        ["a", f, f, 0, 0, 1, f, f],
        ["l", 0, d - 2 * f],
        ["a", f, f, 0, 0, 1, -f, f],
        ["l", 2 * f - c, 0],
        ["a", f, f, 0, 0, 1, -f, -f],
        ["l", 0, 2 * f - d],
        ["a", f, f, 0, 0, 1, f, -f],
        ["z"]
      ];
      var g = [
        ["M", a, b],
        ["l", c, 0],
        ["l", 0, d],
        ["l", -c, 0],
        ["z"]
      ];
      return g.toString = e, g
    }

    function x(a, b, c, d, f) {
      if (null == f && null == d && (d = c), a = +a, b = +b, c = +c, d = +d, null != f) var g = Math.PI / 180,
        h = a + c * Math.cos(-d * g),
        i = a + c * Math.cos(-f * g),
        j = b + c * Math.sin(-d * g),
        k = b + c * Math.sin(-f * g),
        l = [
          ["M", h, j],
          ["A", c, c, 0, +(f - d > 180), 0, i, k]
        ];
      else l = [
        ["M", a, b],
        ["m", 0, -d],
        ["a", c, d, 0, 1, 1, 0, 2 * d],
        ["a", c, d, 0, 1, 1, 0, -2 * d],
        ["z"]
      ];
      return l.toString = e, l
    }

    function y(b) {
      var d = c(b),
        g = String.prototype.toLowerCase;
      if (d.rel) return f(d.rel);
      a.is(b, "array") && a.is(b && b[0], "array") || (b = a.parsePathString(b));
      var h = [],
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0;
      "M" == b[0][0] && (i = b[0][1], j = b[0][2], k = i, l = j, m++, h.push(["M", i, j]));
      for (var n = m, o = b.length; o > n; n++) {
        var p = h[n] = [],
          q = b[n];
        if (q[0] != g.call(q[0])) switch (p[0] = g.call(q[0]), p[0]) {
          case "a":
            p[1] = q[1], p[2] = q[2], p[3] = q[3], p[4] = q[4], p[5] = q[5], p[6] = +(q[6] - i).toFixed(3), p[7] = +(q[7] - j).toFixed(3);
            break;
          case "v":
            p[1] = +(q[1] - j).toFixed(3);
            break;
          case "m":
            k = q[1], l = q[2];
          default:
            for (var r = 1, s = q.length; s > r; r++) p[r] = +(q[r] - (r % 2 ? i : j)).toFixed(3)
        } else {
          p = h[n] = [], "m" == q[0] && (k = q[1] + i, l = q[2] + j);
          for (var t = 0, u = q.length; u > t; t++) h[n][t] = q[t]
        }
        var v = h[n].length;
        switch (h[n][0]) {
          case "z":
            i = k, j = l;
            break;
          case "h":
            i += +h[n][v - 1];
            break;
          case "v":
            j += +h[n][v - 1];
            break;
          default:
            i += +h[n][v - 2], j += +h[n][v - 1]
        }
      }
      return h.toString = e, d.rel = f(h), h
    }

    function z(b) {
      var d = c(b);
      if (d.abs) return f(d.abs);
      if (I(b, "array") && I(b && b[0], "array") || (b = a.parsePathString(b)), !b || !b.length) return [
        ["M", 0, 0]
      ];
      var g, h = [],
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0;
      "M" == b[0][0] && (i = +b[0][1], j = +b[0][2], k = i, l = j, m++, h[0] = ["M", i, j]);
      for (var n, o, p = 3 == b.length && "M" == b[0][0] && "R" == b[1][0].toUpperCase() && "Z" == b[2][0].toUpperCase(), q = m, r = b.length; r > q; q++) {
        if (h.push(n = []), o = b[q], g = o[0], g != g.toUpperCase()) switch (n[0] = g.toUpperCase(), n[0]) {
            case "A":
              n[1] = o[1], n[2] = o[2], n[3] = o[3], n[4] = o[4], n[5] = o[5], n[6] = +o[6] + i, n[7] = +o[7] + j;
              break;
            case "V":
              n[1] = +o[1] + j;
              break;
            case "H":
              n[1] = +o[1] + i;
              break;
            case "R":
              for (var s = [i, j].concat(o.slice(1)), t = 2, u = s.length; u > t; t++) s[t] = +s[t] + i, s[++t] = +s[t] + j;
              h.pop(), h = h.concat(G(s, p));
              break;
            case "O":
              h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s);
              break;
            case "U":
              h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2));
              break;
            case "M":
              k = +o[1] + i, l = +o[2] + j;
            default:
              for (t = 1, u = o.length; u > t; t++) n[t] = +o[t] + (t % 2 ? i : j)
          } else if ("R" == g) s = [i, j].concat(o.slice(1)), h.pop(), h = h.concat(G(s, p)), n = ["R"].concat(o.slice(-2));
          else if ("O" == g) h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s);
        else if ("U" == g) h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2));
        else
          for (var v = 0, w = o.length; w > v; v++) n[v] = o[v];
        if (g = g.toUpperCase(), "O" != g) switch (n[0]) {
          case "Z":
            i = +k, j = +l;
            break;
          case "H":
            i = n[1];
            break;
          case "V":
            j = n[1];
            break;
          case "M":
            k = n[n.length - 2], l = n[n.length - 1];
          default:
            i = n[n.length - 2], j = n[n.length - 1]
        }
      }
      return h.toString = e, d.abs = f(h), h
    }

    function A(a, b, c, d) {
      return [a, b, c, d, c, d]
    }

    function B(a, b, c, d, e, f) {
      var g = 1 / 3,
        h = 2 / 3;
      return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
    }

    function C(b, c, d, e, f, g, h, i, j, k) {
      var l, m = 120 * O / 180,
        n = O / 180 * (+f || 0),
        o = [],
        p = a._.cacher(function (a, b, c) {
          var d = a * N.cos(c) - b * N.sin(c),
            e = a * N.sin(c) + b * N.cos(c);
          return {
            x: d,
            y: e
          }
        });
      if (k) y = k[0], z = k[1], w = k[2], x = k[3];
      else {
        l = p(b, c, -n), b = l.x, c = l.y, l = p(i, j, -n), i = l.x, j = l.y;
        var q = (N.cos(O / 180 * f), N.sin(O / 180 * f), (b - i) / 2),
          r = (c - j) / 2,
          s = q * q / (d * d) + r * r / (e * e);
        s > 1 && (s = N.sqrt(s), d = s * d, e = s * e);
        var t = d * d,
          u = e * e,
          v = (g == h ? -1 : 1) * N.sqrt(S((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
          w = v * d * r / e + (b + i) / 2,
          x = v * -e * q / d + (c + j) / 2,
          y = N.asin(((c - x) / e).toFixed(9)),
          z = N.asin(((j - x) / e).toFixed(9));
        y = w > b ? O - y : y, z = w > i ? O - z : z, 0 > y && (y = 2 * O + y), 0 > z && (z = 2 * O + z), h && y > z && (y -= 2 * O), !h && z > y && (z -= 2 * O)
      }
      var A = z - y;
      if (S(A) > m) {
        var B = z,
          D = i,
          E = j;
        z = y + m * (h && z > y ? 1 : -1), i = w + d * N.cos(z), j = x + e * N.sin(z), o = C(i, j, d, e, f, 0, h, D, E, [z, B, w, x])
      }
      A = z - y;
      var F = N.cos(y),
        G = N.sin(y),
        H = N.cos(z),
        I = N.sin(z),
        J = N.tan(A / 4),
        K = 4 / 3 * d * J,
        L = 4 / 3 * e * J,
        M = [b, c],
        P = [b + K * G, c - L * F],
        Q = [i + K * I, j - L * H],
        R = [i, j];
      if (P[0] = 2 * M[0] - P[0], P[1] = 2 * M[1] - P[1], k) return [P, Q, R].concat(o);
      o = [P, Q, R].concat(o).join().split(",");
      for (var T = [], U = 0, V = o.length; V > U; U++) T[U] = U % 2 ? p(o[U - 1], o[U], n).y : p(o[U], o[U + 1], n).x;
      return T
    }

    function D(a, b, c, d, e, f, g, h) {
      for (var i, j, k, l, m, n, o, p, q = [], r = [
          [],
          []
        ], s = 0; 2 > s; ++s)
        if (0 == s ? (j = 6 * a - 12 * c + 6 * e, i = -3 * a + 9 * c - 9 * e + 3 * g, k = 3 * c - 3 * a) : (j = 6 * b - 12 * d + 6 * f, i = -3 * b + 9 * d - 9 * f + 3 * h, k = 3 * d - 3 * b), S(i) < 1e-12) {
          if (S(j) < 1e-12) continue;
          l = -k / j, l > 0 && 1 > l && q.push(l)
        } else o = j * j - 4 * k * i, p = N.sqrt(o), 0 > o || (m = (-j + p) / (2 * i), m > 0 && 1 > m && q.push(m), n = (-j - p) / (2 * i), n > 0 && 1 > n && q.push(n));
      for (var t, u = q.length, v = u; u--;) l = q[u], t = 1 - l, r[0][u] = t * t * t * a + 3 * t * t * l * c + 3 * t * l * l * e + l * l * l * g, r[1][u] = t * t * t * b + 3 * t * t * l * d + 3 * t * l * l * f + l * l * l * h;
      return r[0][v] = a, r[1][v] = b, r[0][v + 1] = g, r[1][v + 1] = h, r[0].length = r[1].length = v + 2, {
        min: {
          x: P.apply(0, r[0]),
          y: P.apply(0, r[1])
        },
        max: {
          x: Q.apply(0, r[0]),
          y: Q.apply(0, r[1])
        }
      }
    }

    function E(a, b) {
      var d = !b && c(a);
      if (!b && d.curve) return f(d.curve);
      for (var e = z(a), g = b && z(b), h = {
          x: 0,
          y: 0,
          bx: 0,
          by: 0,
          X: 0,
          Y: 0,
          qx: null,
          qy: null
        }, i = {
          x: 0,
          y: 0,
          bx: 0,
          by: 0,
          X: 0,
          Y: 0,
          qx: null,
          qy: null
        }, j = (function (a, b, c) {
          var d, e;
          if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
          switch (!(a[0] in {
            T: 1,
            Q: 1
          }) && (b.qx = b.qy = null), a[0]) {
            case "M":
              b.X = a[1], b.Y = a[2];
              break;
            case "A":
              a = ["C"].concat(C.apply(0, [b.x, b.y].concat(a.slice(1))));
              break;
            case "S":
              "C" == c || "S" == c ? (d = 2 * b.x - b.bx, e = 2 * b.y - b.by) : (d = b.x, e = b.y), a = ["C", d, e].concat(a.slice(1));
              break;
            case "T":
              "Q" == c || "T" == c ? (b.qx = 2 * b.x - b.qx, b.qy = 2 * b.y - b.qy) : (b.qx = b.x, b.qy = b.y), a = ["C"].concat(B(b.x, b.y, b.qx, b.qy, a[1], a[2]));
              break;
            case "Q":
              b.qx = a[1], b.qy = a[2], a = ["C"].concat(B(b.x, b.y, a[1], a[2], a[3], a[4]));
              break;
            case "L":
              a = ["C"].concat(A(b.x, b.y, a[1], a[2]));
              break;
            case "H":
              a = ["C"].concat(A(b.x, b.y, a[1], b.y));
              break;
            case "V":
              a = ["C"].concat(A(b.x, b.y, b.x, a[1]));
              break;
            case "Z":
              a = ["C"].concat(A(b.x, b.y, b.X, b.Y))
          }
          return a
        }), k = function (a, b) {
          if (a[b].length > 7) {
            a[b].shift();
            for (var c = a[b]; c.length;) m[b] = "A", g && (n[b] = "A"), a.splice(b++, 0, ["C"].concat(c.splice(0, 6)));
            a.splice(b, 1), r = Q(e.length, g && g.length || 0)
          }
        }, l = function (a, b, c, d, f) {
          a && b && "M" == a[f][0] && "M" != b[f][0] && (b.splice(f, 0, ["M", d.x, d.y]), c.bx = 0, c.by = 0, c.x = a[f][1], c.y = a[f][2], r = Q(e.length, g && g.length || 0))
        }, m = [], n = [], o = "", p = "", q = 0, r = Q(e.length, g && g.length || 0); r > q; q++) {
        e[q] && (o = e[q][0]), "C" != o && (m[q] = o, q && (p = m[q - 1])), e[q] = j(e[q], h, p), "A" != m[q] && "C" == o && (m[q] = "C"), k(e, q), g && (g[q] && (o = g[q][0]), "C" != o && (n[q] = o, q && (p = n[q - 1])), g[q] = j(g[q], i, p), "A" != n[q] && "C" == o && (n[q] = "C"), k(g, q)), l(e, g, h, i, q), l(g, e, i, h, q);
        var s = e[q],
          t = g && g[q],
          u = s.length,
          v = g && t.length;
        h.x = s[u - 2], h.y = s[u - 1], h.bx = M(s[u - 4]) || h.x, h.by = M(s[u - 3]) || h.y, i.bx = g && (M(t[v - 4]) || i.x), i.by = g && (M(t[v - 3]) || i.y), i.x = g && t[v - 2], i.y = g && t[v - 1]
      }
      return g || (d.curve = f(e)), g ? [e, g] : e
    }

    function F(a, b) {
      if (!b) return a;
      var c, d, e, f, g, h, i;
      for (a = E(a), e = 0, g = a.length; g > e; e++)
        for (i = a[e], f = 1, h = i.length; h > f; f += 2) c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
      return a
    }

    function G(a, b) {
      for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
        var f = [{
          x: +a[d - 2],
          y: +a[d - 1]
        }, {
          x: +a[d],
          y: +a[d + 1]
        }, {
          x: +a[d + 2],
          y: +a[d + 3]
        }, {
          x: +a[d + 4],
          y: +a[d + 5]
        }];
        b ? d ? e - 4 == d ? f[3] = {
          x: +a[0],
          y: +a[1]
        } : e - 2 == d && (f[2] = {
          x: +a[0],
          y: +a[1]
        }, f[3] = {
          x: +a[2],
          y: +a[3]
        }) : f[0] = {
          x: +a[e - 2],
          y: +a[e - 1]
        } : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
          x: +a[d],
          y: +a[d + 1]
        }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
      }
      return c
    }
    var H = b.prototype,
      I = a.is,
      J = a._.clone,
      K = "hasOwnProperty",
      L = /,?([a-z]),?/gi,
      M = parseFloat,
      N = Math,
      O = N.PI,
      P = N.min,
      Q = N.max,
      R = N.pow,
      S = N.abs,
      T = h(1),
      U = h(),
      V = h(0, 1),
      W = a._unit2px,
      X = {
        path: function (a) {
          return a.attr("path")
        },
        circle: function (a) {
          var b = W(a);
          return x(b.cx, b.cy, b.r)
        },
        ellipse: function (a) {
          var b = W(a);
          return x(b.cx || 0, b.cy || 0, b.rx, b.ry)
        },
        rect: function (a) {
          var b = W(a);
          return w(b.x || 0, b.y || 0, b.width, b.height, b.rx, b.ry)
        },
        image: function (a) {
          var b = W(a);
          return w(b.x || 0, b.y || 0, b.width, b.height)
        },
        line: function (a) {
          return "M" + [a.attr("x1") || 0, a.attr("y1") || 0, a.attr("x2"), a.attr("y2")]
        },
        polyline: function (a) {
          return "M" + a.attr("points")
        },
        polygon: function (a) {
          return "M" + a.attr("points") + "z"
        },
        deflt: function (a) {
          var b = a.node.getBBox();
          return w(b.x, b.y, b.width, b.height)
        }
      };
    a.path = c, a.path.getTotalLength = T, a.path.getPointAtLength = U, a.path.getSubpath = function (a, b, c) {
      if (this.getTotalLength(a) - c < 1e-6) return V(a, b).end;
      var d = V(a, c, 1);
      return b ? V(d, b).end : d
    }, H.getTotalLength = function () {
      return this.node.getTotalLength ? this.node.getTotalLength() : void 0
    }, H.getPointAtLength = function (a) {
      return U(this.attr("d"), a)
    }, H.getSubpath = function (b, c) {
      return a.path.getSubpath(this.attr("d"), b, c)
    }, a._.box = d, a.path.findDotsAtSegment = i, a.path.bezierBBox = j, a.path.isPointInsideBBox = k, a.closest = function (b, c, e, f) {
      for (var g = 100, h = d(b - g / 2, c - g / 2, g, g), i = [], j = e[0].hasOwnProperty("x") ? function (a) {
          return {
            x: e[a].x,
            y: e[a].y
          }
        } : function (a) {
          return {
            x: e[a],
            y: f[a]
          }
        }, l = 0; 1e6 >= g && !l;) {
        for (var m = 0, n = e.length; n > m; m++) {
          var o = j(m);
          if (k(h, o.x, o.y)) {
            l++, i.push(o);
            break
          }
        }
        l || (g *= 2, h = d(b - g / 2, c - g / 2, g, g))
      }
      if (1e6 != g) {
        var p, q = 1 / 0;
        for (m = 0, n = i.length; n > m; m++) {
          var r = a.len(b, c, i[m].x, i[m].y);
          q > r && (q = r, i[m].len = r, p = i[m])
        }
        return p
      }
    }, a.path.isBBoxIntersect = l, a.path.intersection = r, a.path.intersectionNumber = s, a.path.isPointInside = u, a.path.getBBox = v, a.path.get = X, a.path.toRelative = y, a.path.toAbsolute = z, a.path.toCubic = E, a.path.map = F, a.path.toString = e, a.path.clone = f
  }), d.plugin(function (a) {
    var d = Math.max,
      e = Math.min,
      f = function (a) {
        if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", a)
          for (var b = 0, c = a.length; c > b; b++) a[b] && (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
      },
      g = f.prototype;
    g.push = function () {
      for (var a, b, c = 0, d = arguments.length; d > c; c++) a = arguments[c], a && (b = this.items.length, this[b] = this.items[b] = a, this.length++);
      return this
    }, g.pop = function () {
      return this.length && delete this[this.length--], this.items.pop()
    }, g.forEach = function (a, b) {
      for (var c = 0, d = this.items.length; d > c; c++)
        if (a.call(b, this.items[c], c) === !1) return this;
      return this
    }, g.animate = function (d, e, f, g) {
      "function" != typeof f || f.length || (g = f, f = c.linear), d instanceof a._.Animation && (g = d.callback, f = d.easing, e = f.dur, d = d.attr);
      var h = arguments;
      if (a.is(d, "array") && a.is(h[h.length - 1], "array")) var i = !0;
      var j, k = function () {
          j ? this.b = j : j = this.b
        },
        l = 0,
        m = this,
        n = g && function () {
          ++l == m.length && g.call(this)
        };
      return this.forEach(function (a, c) {
        b.once("snap.animcreated." + a.id, k), i ? h[c] && a.animate.apply(a, h[c]) : a.animate(d, e, f, n)
      })
    }, g.remove = function () {
      for (; this.length;) this.pop().remove();
      return this
    }, g.bind = function (a, b, c) {
      var d = {};
      if ("function" == typeof b) this.bindings[a] = b;
      else {
        var e = c || a;
        this.bindings[a] = function (a) {
          d[e] = a, b.attr(d)
        }
      }
      return this
    }, g.attr = function (a) {
      var b = {};
      for (var c in a) this.bindings[c] ? this.bindings[c](a[c]) : b[c] = a[c];
      for (var d = 0, e = this.items.length; e > d; d++) this.items[d].attr(b);
      return this
    }, g.clear = function () {
      for (; this.length;) this.pop()
    }, g.splice = function (a, b) {
      a = 0 > a ? d(this.length + a, 0) : a, b = d(0, e(this.length - a, b));
      var c, g = [],
        h = [],
        i = [];
      for (c = 2; c < arguments.length; c++) i.push(arguments[c]);
      for (c = 0; b > c; c++) h.push(this[a + c]);
      for (; c < this.length - a; c++) g.push(this[a + c]);
      var j = i.length;
      for (c = 0; c < j + g.length; c++) this.items[a + c] = this[a + c] = j > c ? i[c] : g[c - j];
      for (c = this.items.length = this.length -= b - j; this[c];) delete this[c++];
      return new f(h)
    }, g.exclude = function (a) {
      for (var b = 0, c = this.length; c > b; b++)
        if (this[b] == a) return this.splice(b, 1), !0;
      return !1
    }, g.insertAfter = function (a) {
      for (var b = this.items.length; b--;) this.items[b].insertAfter(a);
      return this
    }, g.getBBox = function () {
      for (var a = [], b = [], c = [], f = [], g = this.items.length; g--;)
        if (!this.items[g].removed) {
          var h = this.items[g].getBBox();
          a.push(h.x), b.push(h.y), c.push(h.x + h.width), f.push(h.y + h.height)
        }
      return a = e.apply(0, a), b = e.apply(0, b), c = d.apply(0, c), f = d.apply(0, f), {
        x: a,
        y: b,
        x2: c,
        y2: f,
        width: c - a,
        height: f - b,
        cx: a + (c - a) / 2,
        cy: b + (f - b) / 2
      }
    }, g.clone = function (a) {
      a = new f;
      for (var b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].clone());
      return a
    }, g.toString = function () {
      return "Snap‘s set"
    }, g.type = "set", a.Set = f, a.set = function () {
      var a = new f;
      return arguments.length && a.push.apply(a, Array.prototype.slice.call(arguments, 0)), a
    }
  }), d.plugin(function (a, c) {
    function d(a) {
      var b = a[0];
      switch (b.toLowerCase()) {
        case "t":
          return [b, 0, 0];
        case "m":
          return [b, 1, 0, 0, 1, 0, 0];
        case "r":
          return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
        case "s":
          return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1]
      }
    }

    function e(b, c, e) {
      c = p(c).replace(/\.{3}|\u2026/g, b), b = a.parseTransformString(b) || [], c = a.parseTransformString(c) || [];
      for (var f, g, h, i, l = Math.max(b.length, c.length), m = [], n = [], o = 0; l > o; o++) {
        if (h = b[o] || d(c[o]), i = c[o] || d(h), h[0] != i[0] || "r" == h[0].toLowerCase() && (h[2] != i[2] || h[3] != i[3]) || "s" == h[0].toLowerCase() && (h[3] != i[3] || h[4] != i[4])) {
          b = a._.transform2matrix(b, e()), c = a._.transform2matrix(c, e()), m = [
            ["m", b.a, b.b, b.c, b.d, b.e, b.f]
          ], n = [
            ["m", c.a, c.b, c.c, c.d, c.e, c.f]
          ];
          break
        }
        for (m[o] = [], n[o] = [], f = 0, g = Math.max(h.length, i.length); g > f; f++) f in h && (m[o][f] = h[f]), f in i && (n[o][f] = i[f])
      }
      return {
        from: k(m),
        to: k(n),
        f: j(m)
      }
    }

    function f(a) {
      return a
    }

    function g(a) {
      return function (b) {
        return +b.toFixed(3) + a
      }
    }

    function h(a) {
      return a.join(" ")
    }

    function i(b) {
      return a.rgb(b[0], b[1], b[2])
    }

    function j(a) {
      var b, c, d, e, f, g, h = 0,
        i = [];
      for (b = 0, c = a.length; c > b; b++) {
        for (f = "[", g = ['"' + a[b][0] + '"'], d = 1, e = a[b].length; e > d; d++) g[d] = "val[" + h++ + "]";
        f += g + "]", i[b] = f
      }
      return Function("val", "return Snap.path.toString.call([" + i + "])")
    }

    function k(a) {
      for (var b = [], c = 0, d = a.length; d > c; c++)
        for (var e = 1, f = a[c].length; f > e; e++) b.push(a[c][e]);
      return b
    }

    function l(a) {
      return isFinite(parseFloat(a))
    }

    function m(b, c) {
      return a.is(b, "array") && a.is(c, "array") ? b.toString() == c.toString() : !1
    }
    var n = {},
      o = /[a-z]+$/i,
      p = String;
    n.stroke = n.fill = "colour", c.prototype.equal = function (a, c) {
      return b("snap.util.equal", this, a, c).firstDefined()
    }, b.on("snap.util.equal", function (b, c) {
      var d, q, r = p(this.attr(b) || ""),
        s = this;
      if (l(r) && l(c)) return {
        from: parseFloat(r),
        to: parseFloat(c),
        f: f
      };
      if ("colour" == n[b]) return d = a.color(r), q = a.color(c), {
        from: [d.r, d.g, d.b, d.opacity],
        to: [q.r, q.g, q.b, q.opacity],
        f: i
      };
      if ("viewBox" == b) return d = this.attr(b).vb.split(" ").map(Number), q = c.split(" ").map(Number), {
        from: d,
        to: q,
        f: h
      };
      if ("transform" == b || "gradientTransform" == b || "patternTransform" == b) return c instanceof a.Matrix && (c = c.toTransformString()), a._.rgTransform.test(c) || (c = a._.svgTransform2string(c)), e(r, c, function () {
        return s.getBBox(1)
      });
      if ("d" == b || "path" == b) return d = a.path.toCubic(r, c), {
        from: k(d[0]),
        to: k(d[1]),
        f: j(d[0])
      };
      if ("points" == b) return d = p(r).split(a._.separator), q = p(c).split(a._.separator), {
        from: d,
        to: q,
        f: function (a) {
          return a
        }
      };
      var t = r.match(o),
        u = p(c).match(o);
      return t && m(t, u) ? {
        from: parseFloat(r),
        to: parseFloat(c),
        f: g(t)
      } : {
        from: this.asPX(b),
        to: this.asPX(b, c),
        f: f
      }
    })
  }), d.plugin(function (a, c, d, e) {
    for (var f = c.prototype, g = "hasOwnProperty", h = ("createTouch" in e.doc), i = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], j = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
      }, k = (function (a, b) {
        var c = "y" == a ? "scrollTop" : "scrollLeft",
          d = b && b.node ? b.node.ownerDocument : e.doc;
        return d[c in d.documentElement ? "documentElement" : "body"][c]
      }), l = function () {
        return this.originalEvent.preventDefault()
      }, m = function () {
        return this.originalEvent.stopPropagation()
      }, n = function (a, b, c, d) {
        var e = h && j[b] ? j[b] : b,
          f = function (e) {
            var f = k("y", d),
              i = k("x", d);
            if (h && j[g](b))
              for (var n = 0, o = e.targetTouches && e.targetTouches.length; o > n; n++)
                if (e.targetTouches[n].target == a || a.contains(e.targetTouches[n].target)) {
                  var p = e;
                  e = e.targetTouches[n], e.originalEvent = p, e.preventDefault = l, e.stopPropagation = m;
                  break
                }
            var q = e.clientX + i,
              r = e.clientY + f;
            return c.call(d, e, q, r)
          };
        return b !== e && a.addEventListener(b, f, !1), a.addEventListener(e, f, !1),
          function () {
            return b !== e && a.removeEventListener(b, f, !1), a.removeEventListener(e, f, !1), !0
          }
      }, o = [], p = function (a) {
        for (var c, d = a.clientX, e = a.clientY, f = k("y"), g = k("x"), i = o.length; i--;) {
          if (c = o[i], h) {
            for (var j, l = a.touches && a.touches.length; l--;)
              if (j = a.touches[l], j.identifier == c.el._drag.id || c.el.node.contains(j.target)) {
                d = j.clientX, e = j.clientY, (a.originalEvent ? a.originalEvent : a).preventDefault();
                break
              }
          } else a.preventDefault(); {
            var m = c.el.node;
            m.nextSibling, m.parentNode, m.style.display
          }
          d += g, e += f, b("snap.drag.move." + c.el.id, c.move_scope || c.el, d - c.el._drag.x, e - c.el._drag.y, d, e, a)
        }
      }, q = function (c) {
        a.unmousemove(p).unmouseup(q);
        for (var d, e = o.length; e--;) d = o[e], d.el._drag = {}, b("snap.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, c), b.off("snap.drag.*." + d.el.id);
        o = []
      }, r = i.length; r--;) ! function (b) {
      a[b] = f[b] = function (c, d) {
        if (a.is(c, "function")) this.events = this.events || [], this.events.push({
          name: b,
          f: c,
          unbind: n(this.node || document, b, c, d || this)
        });
        else
          for (var e = 0, f = this.events.length; f > e; e++)
            if (this.events[e].name == b) try {
              this.events[e].f.call(this)
            } catch (g) {}
        return this
      }, a["un" + b] = f["un" + b] = function (a) {
        for (var c = this.events || [], d = c.length; d--;)
          if (c[d].name == b && (c[d].f == a || !a)) return c[d].unbind(), c.splice(d, 1), !c.length && delete this.events, this;
        return this
      }
    }(i[r]);
    f.hover = function (a, b, c, d) {
      return this.mouseover(a, c).mouseout(b, d || c)
    }, f.unhover = function (a, b) {
      return this.unmouseover(a).unmouseout(b)
    };
    var s = [];
    f.drag = function (c, d, e, f, g, h) {
      function i(i, j, l) {
        (i.originalEvent || i).preventDefault(), k._drag.x = j, k._drag.y = l, k._drag.id = i.identifier, !o.length && a.mousemove(p).mouseup(q), o.push({
          el: k,
          move_scope: f,
          start_scope: g,
          end_scope: h
        }), d && b.on("snap.drag.start." + k.id, d), c && b.on("snap.drag.move." + k.id, c), e && b.on("snap.drag.end." + k.id, e), b("snap.drag.start." + k.id, g || f || k, j, l, i)
      }

      function j(a, c, d) {
        b("snap.draginit." + k.id, k, a, c, d)
      }
      var k = this;
      if (!arguments.length) {
        var l;
        return k.drag(function (a, b) {
          this.attr({
            transform: l + (l ? "T" : "t") + [a, b]
          })
        }, function () {
          l = this.transform().local
        })
      }
      return b.on("snap.draginit." + k.id, i), k._drag = {}, s.push({
        el: k,
        start: i,
        init: j
      }), k.mousedown(j), k
    }, f.undrag = function () {
      for (var c = s.length; c--;) s[c].el == this && (this.unmousedown(s[c].init), s.splice(c, 1), b.unbind("snap.drag.*." + this.id), b.unbind("snap.draginit." + this.id));
      return !s.length && a.unmousemove(p).unmouseup(q), this
    }
  }), d.plugin(function (a, c, d) {
    var e = (c.prototype, d.prototype),
      f = /^\s*url\((.+)\)/,
      g = String,
      h = a._.$;
    a.filter = {}, e.filter = function (b) {
      var d = this;
      "svg" != d.type && (d = d.paper);
      var e = a.parse(g(b)),
        f = a._.id(),
        i = (d.node.offsetWidth, d.node.offsetHeight, h("filter"));
      return h(i, {
        id: f,
        filterUnits: "userSpaceOnUse"
      }), i.appendChild(e.node), d.defs.appendChild(i), new c(i)
    }, b.on("snap.util.getattr.filter", function () {
      b.stop();
      var c = h(this.node, "filter");
      if (c) {
        var d = g(c).match(f);
        return d && a.select(d[1])
      }
    }), b.on("snap.util.attr.filter", function (d) {
      if (d instanceof c && "filter" == d.type) {
        b.stop();
        var e = d.node.id;
        e || (h(d.node, {
          id: d.id
        }), e = d.id), h(this.node, {
          filter: a.url(e)
        })
      }
      d && "none" != d || (b.stop(), this.node.removeAttribute("filter"))
    }), a.filter.blur = function (b, c) {
      null == b && (b = 2);
      var d = null == c ? b : [b, c];
      return a.format('<feGaussianBlur stdDeviation="{def}"/>', {
        def: d
      })
    }, a.filter.blur.toString = function () {
      return this()
    }, a.filter.shadow = function (b, c, d, e, f) {
      return "string" == typeof d && (e = d, f = e, d = 4), "string" != typeof e && (f = e, e = "#000"), e = e || "#000", null == d && (d = 4), null == f && (f = 1), null == b && (b = 0, c = 2), null == c && (c = b), e = a.color(e), a.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
        color: e,
        dx: b,
        dy: c,
        blur: d,
        opacity: f
      })
    }, a.filter.shadow.toString = function () {
      return this()
    }, a.filter.grayscale = function (b) {
      return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
        a: .2126 + .7874 * (1 - b),
        b: .7152 - .7152 * (1 - b),
        c: .0722 - .0722 * (1 - b),
        d: .2126 - .2126 * (1 - b),
        e: .7152 + .2848 * (1 - b),
        f: .0722 - .0722 * (1 - b),
        g: .2126 - .2126 * (1 - b),
        h: .0722 + .9278 * (1 - b)
      })
    }, a.filter.grayscale.toString = function () {
      return this()
    }, a.filter.sepia = function (b) {
      return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
        a: .393 + .607 * (1 - b),
        b: .769 - .769 * (1 - b),
        c: .189 - .189 * (1 - b),
        d: .349 - .349 * (1 - b),
        e: .686 + .314 * (1 - b),
        f: .168 - .168 * (1 - b),
        g: .272 - .272 * (1 - b),
        h: .534 - .534 * (1 - b),
        i: .131 + .869 * (1 - b)
      })
    }, a.filter.sepia.toString = function () {
      return this()
    }, a.filter.saturate = function (b) {
      return null == b && (b = 1), a.format('<feColorMatrix type="saturate" values="{amount}"/>', {
        amount: 1 - b
      })
    }, a.filter.saturate.toString = function () {
      return this()
    }, a.filter.hueRotate = function (b) {
      return b = b || 0, a.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
        angle: b
      })
    }, a.filter.hueRotate.toString = function () {
      return this()
    }, a.filter.invert = function (b) {
      return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
        amount: b,
        amount2: 1 - b
      })
    }, a.filter.invert.toString = function () {
      return this()
    }, a.filter.brightness = function (b) {
      return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
        amount: b
      })
    }, a.filter.brightness.toString = function () {
      return this()
    }, a.filter.contrast = function (b) {
      return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
        amount: b,
        amount2: .5 - b / 2
      })
    }, a.filter.contrast.toString = function () {
      return this()
    }
  }), d.plugin(function (a, b) {
    var c = a._.box,
      d = a.is,
      e = /^[^a-z]*([tbmlrc])/i,
      f = function () {
        return "T" + this.dx + "," + this.dy
      };
    b.prototype.getAlign = function (a, b) {
      null == b && d(a, "string") && (b = a, a = null), a = a || this.paper;
      var g = a.getBBox ? a.getBBox() : c(a),
        h = this.getBBox(),
        i = {};
      switch (b = b && b.match(e), b = b ? b[1].toLowerCase() : "c") {
        case "t":
          i.dx = 0, i.dy = g.y - h.y;
          break;
        case "b":
          i.dx = 0, i.dy = g.y2 - h.y2;
          break;
        case "m":
          i.dx = 0, i.dy = g.cy - h.cy;
          break;
        case "l":
          i.dx = g.x - h.x, i.dy = 0;
          break;
        case "r":
          i.dx = g.x2 - h.x2, i.dy = 0;
          break;
        default:
          i.dx = g.cx - h.cx, i.dy = 0
      }
      return i.toString = f, i
    }, b.prototype.align = function (a, b) {
      return this.transform("..." + this.getAlign(a, b))
    }
  }), d
});


/*!
 * @license CreateJS
 * Visit http://createjs.com/ for documentation, updates and examples.
 *
 * Copyright (c) 2011-2015 gskinner.com, inc.
 *
 * Distributed under the terms of the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * This notice shall be included in all copies or substantial portions of the Software.
 */
this.createjs = this.createjs || {}, createjs.extend = function (a, b) {
    "use strict";

    function c() {
      this.constructor = a
    }
    return c.prototype = b.prototype, a.prototype = new c
  }, this.createjs = this.createjs || {}, createjs.promote = function (a, b) {
    "use strict";
    var c = a.prototype,
      d = Object.getPrototypeOf && Object.getPrototypeOf(c) || c.__proto__;
    if (d) {
      c[(b += "_") + "constructor"] = d.constructor;
      for (var e in d) c.hasOwnProperty(e) && "function" == typeof d[e] && (c[b + e] = d[e])
    }
    return a
  }, this.createjs = this.createjs || {}, createjs.indexOf = function (a, b) {
    "use strict";
    for (var c = 0, d = a.length; d > c; c++)
      if (b === a[c]) return c;
    return -1
  }, this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b, c) {
      this.type = a, this.target = null, this.currentTarget = null, this.eventPhase = 0, this.bubbles = !!b, this.cancelable = !!c, this.timeStamp = (new Date).getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.removed = !1
    }
    var b = a.prototype;
    b.preventDefault = function () {
      this.defaultPrevented = this.cancelable && !0
    }, b.stopPropagation = function () {
      this.propagationStopped = !0
    }, b.stopImmediatePropagation = function () {
      this.immediatePropagationStopped = this.propagationStopped = !0
    }, b.remove = function () {
      this.removed = !0
    }, b.clone = function () {
      return new a(this.type, this.bubbles, this.cancelable)
    }, b.set = function (a) {
      for (var b in a) this[b] = a[b];
      return this
    }, b.toString = function () {
      return "[Event (type=" + this.type + ")]"
    }, createjs.Event = a
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a() {
      this._listeners = null, this._captureListeners = null
    }
    var b = a.prototype;
    a.initialize = function (a) {
      a.addEventListener = b.addEventListener, a.on = b.on, a.removeEventListener = a.off = b.removeEventListener, a.removeAllEventListeners = b.removeAllEventListeners, a.hasEventListener = b.hasEventListener, a.dispatchEvent = b.dispatchEvent, a._dispatchEvent = b._dispatchEvent, a.willTrigger = b.willTrigger
    }, b.addEventListener = function (a, b, c) {
      var d;
      d = c ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
      var e = d[a];
      return e && this.removeEventListener(a, b, c), e = d[a], e ? e.push(b) : d[a] = [b], b
    }, b.on = function (a, b, c, d, e, f) {
      return b.handleEvent && (c = c || b, b = b.handleEvent), c = c || this, this.addEventListener(a, function (a) {
        b.call(c, a, e), d && a.remove()
      }, f)
    }, b.removeEventListener = function (a, b, c) {
      var d = c ? this._captureListeners : this._listeners;
      if (d) {
        var e = d[a];
        if (e)
          for (var f = 0, g = e.length; g > f; f++)
            if (e[f] == b) {
              1 == g ? delete d[a] : e.splice(f, 1);
              break
            }
      }
    }, b.off = b.removeEventListener, b.removeAllEventListeners = function (a) {
      a ? (this._listeners && delete this._listeners[a], this._captureListeners && delete this._captureListeners[a]) : this._listeners = this._captureListeners = null
    }, b.dispatchEvent = function (a, b, c) {
      if ("string" == typeof a) {
        var d = this._listeners;
        if (!(b || d && d[a])) return !0;
        a = new createjs.Event(a, b, c)
      } else a.target && a.clone && (a = a.clone());
      try {
        a.target = this
      } catch (e) {}
      if (a.bubbles && this.parent) {
        for (var f = this, g = [f]; f.parent;) g.push(f = f.parent);
        var h, i = g.length;
        for (h = i - 1; h >= 0 && !a.propagationStopped; h--) g[h]._dispatchEvent(a, 1 + (0 == h));
        for (h = 1; i > h && !a.propagationStopped; h++) g[h]._dispatchEvent(a, 3)
      } else this._dispatchEvent(a, 2);
      return !a.defaultPrevented
    }, b.hasEventListener = function (a) {
      var b = this._listeners,
        c = this._captureListeners;
      return !!(b && b[a] || c && c[a])
    }, b.willTrigger = function (a) {
      for (var b = this; b;) {
        if (b.hasEventListener(a)) return !0;
        b = b.parent
      }
      return !1
    }, b.toString = function () {
      return "[EventDispatcher]"
    }, b._dispatchEvent = function (a, b) {
      var c, d = 1 == b ? this._captureListeners : this._listeners;
      if (a && d) {
        var e = d[a.type];
        if (!e || !(c = e.length)) return;
        try {
          a.currentTarget = this
        } catch (f) {}
        try {
          a.eventPhase = b
        } catch (f) {}
        a.removed = !1, e = e.slice();
        for (var g = 0; c > g && !a.immediatePropagationStopped; g++) {
          var h = e[g];
          h.handleEvent ? h.handleEvent(a) : h(a), a.removed && (this.off(a.type, h, 1 == b), a.removed = !1)
        }
      }
    }, createjs.EventDispatcher = a
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a() {
      throw "Ticker cannot be instantiated."
    }
    a.RAF_SYNCHED = "synched", a.RAF = "raf", a.TIMEOUT = "timeout", a.useRAF = !1, a.timingMode = null, a.maxDelta = 0, a.paused = !1, a.removeEventListener = null, a.removeAllEventListeners = null, a.dispatchEvent = null, a.hasEventListener = null, a._listeners = null, createjs.EventDispatcher.initialize(a), a._addEventListener = a.addEventListener, a.addEventListener = function () {
      return !a._inited && a.init(), a._addEventListener.apply(a, arguments)
    }, a._inited = !1, a._startTime = 0, a._pausedTime = 0, a._ticks = 0, a._pausedTicks = 0, a._interval = 50, a._lastTime = 0, a._times = null, a._tickTimes = null, a._timerId = null, a._raf = !0, a.setInterval = function (b) {
      a._interval = b, a._inited && a._setupTick()
    }, a.getInterval = function () {
      return a._interval
    }, a.setFPS = function (b) {
      a.setInterval(1e3 / b)
    }, a.getFPS = function () {
      return 1e3 / a._interval
    };
    try {
      Object.defineProperties(a, {
        interval: {
          get: a.getInterval,
          set: a.setInterval
        },
        framerate: {
          get: a.getFPS,
          set: a.setFPS
        }
      })
    } catch (b) {
      console.log(b)
    }
    a.init = function () {
      a._inited || (a._inited = !0, a._times = [], a._tickTimes = [], a._startTime = a._getTime(), a._times.push(a._lastTime = 0), a.interval = a._interval)
    }, a.reset = function () {
      if (a._raf) {
        var b = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
        b && b(a._timerId)
      } else clearTimeout(a._timerId);
      a.removeAllEventListeners("tick"), a._timerId = a._times = a._tickTimes = null, a._startTime = a._lastTime = a._ticks = 0, a._inited = !1
    }, a.getMeasuredTickTime = function (b) {
      var c = 0,
        d = a._tickTimes;
      if (!d || d.length < 1) return -1;
      b = Math.min(d.length, b || 0 | a.getFPS());
      for (var e = 0; b > e; e++) c += d[e];
      return c / b
    }, a.getMeasuredFPS = function (b) {
      var c = a._times;
      return !c || c.length < 2 ? -1 : (b = Math.min(c.length - 1, b || 0 | a.getFPS()), 1e3 / ((c[0] - c[b]) / b))
    }, a.setPaused = function (b) {
      a.paused = b
    }, a.getPaused = function () {
      return a.paused
    }, a.getTime = function (b) {
      return a._startTime ? a._getTime() - (b ? a._pausedTime : 0) : -1
    }, a.getEventTime = function (b) {
      return a._startTime ? (a._lastTime || a._startTime) - (b ? a._pausedTime : 0) : -1
    }, a.getTicks = function (b) {
      return a._ticks - (b ? a._pausedTicks : 0)
    }, a._handleSynch = function () {
      a._timerId = null, a._setupTick(), a._getTime() - a._lastTime >= .97 * (a._interval - 1) && a._tick()
    }, a._handleRAF = function () {
      a._timerId = null, a._setupTick(), a._tick()
    }, a._handleTimeout = function () {
      a._timerId = null, a._setupTick(), a._tick()
    }, a._setupTick = function () {
      if (null == a._timerId) {
        var b = a.timingMode || a.useRAF && a.RAF_SYNCHED;
        if (b == a.RAF_SYNCHED || b == a.RAF) {
          var c = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
          if (c) return a._timerId = c(b == a.RAF ? a._handleRAF : a._handleSynch), void(a._raf = !0)
        }
        a._raf = !1, a._timerId = setTimeout(a._handleTimeout, a._interval)
      }
    }, a._tick = function () {
      var b = a.paused,
        c = a._getTime(),
        d = c - a._lastTime;
      if (a._lastTime = c, a._ticks++, b && (a._pausedTicks++, a._pausedTime += d), a.hasEventListener("tick")) {
        var e = new createjs.Event("tick"),
          f = a.maxDelta;
        e.delta = f && d > f ? f : d, e.paused = b, e.time = c, e.runTime = c - a._pausedTime, a.dispatchEvent(e)
      }
      for (a._tickTimes.unshift(a._getTime() - c); a._tickTimes.length > 100;) a._tickTimes.pop();
      for (a._times.unshift(c); a._times.length > 100;) a._times.pop()
    };
    var c = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
    a._getTime = function () {
      return (c && c.call(performance) || (new Date).getTime()) - a._startTime
    }, createjs.Ticker = a
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a() {
      throw "UID cannot be instantiated"
    }
    a._nextID = 0, a.get = function () {
      return a._nextID++
    }, createjs.UID = a
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b, c, d, e, f, g, h, i, j, k) {
      this.Event_constructor(a, b, c), this.stageX = d, this.stageY = e, this.rawX = null == i ? d : i, this.rawY = null == j ? e : j, this.nativeEvent = f, this.pointerID = g, this.primary = !!h, this.relatedTarget = k
    }
    var b = createjs.extend(a, createjs.Event);
    b._get_localX = function () {
      return this.currentTarget.globalToLocal(this.rawX, this.rawY).x
    }, b._get_localY = function () {
      return this.currentTarget.globalToLocal(this.rawX, this.rawY).y
    }, b._get_isTouch = function () {
      return -1 !== this.pointerID
    };
    try {
      Object.defineProperties(b, {
        localX: {
          get: b._get_localX
        },
        localY: {
          get: b._get_localY
        },
        isTouch: {
          get: b._get_isTouch
        }
      })
    } catch (c) {}
    b.clone = function () {
      return new a(this.type, this.bubbles, this.cancelable, this.stageX, this.stageY, this.nativeEvent, this.pointerID, this.primary, this.rawX, this.rawY)
    }, b.toString = function () {
      return "[MouseEvent (type=" + this.type + " stageX=" + this.stageX + " stageY=" + this.stageY + ")]"
    }, createjs.MouseEvent = createjs.promote(a, "Event")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b, c, d, e, f) {
      this.setValues(a, b, c, d, e, f)
    }
    var b = a.prototype;
    a.DEG_TO_RAD = Math.PI / 180, a.identity = null, b.setValues = function (a, b, c, d, e, f) {
      return this.a = null == a ? 1 : a, this.b = b || 0, this.c = c || 0, this.d = null == d ? 1 : d, this.tx = e || 0, this.ty = f || 0, this
    }, b.append = function (a, b, c, d, e, f) {
      var g = this.a,
        h = this.b,
        i = this.c,
        j = this.d;
      return (1 != a || 0 != b || 0 != c || 1 != d) && (this.a = g * a + i * b, this.b = h * a + j * b, this.c = g * c + i * d, this.d = h * c + j * d), this.tx = g * e + i * f + this.tx, this.ty = h * e + j * f + this.ty, this
    }, b.prepend = function (a, b, c, d, e, f) {
      var g = this.a,
        h = this.c,
        i = this.tx;
      return this.a = a * g + c * this.b, this.b = b * g + d * this.b, this.c = a * h + c * this.d, this.d = b * h + d * this.d, this.tx = a * i + c * this.ty + e, this.ty = b * i + d * this.ty + f, this
    }, b.appendMatrix = function (a) {
      return this.append(a.a, a.b, a.c, a.d, a.tx, a.ty)
    }, b.prependMatrix = function (a) {
      return this.prepend(a.a, a.b, a.c, a.d, a.tx, a.ty)
    }, b.appendTransform = function (b, c, d, e, f, g, h, i, j) {
      if (f % 360) var k = f * a.DEG_TO_RAD,
        l = Math.cos(k),
        m = Math.sin(k);
      else l = 1, m = 0;
      return g || h ? (g *= a.DEG_TO_RAD, h *= a.DEG_TO_RAD, this.append(Math.cos(h), Math.sin(h), -Math.sin(g), Math.cos(g), b, c), this.append(l * d, m * d, -m * e, l * e, 0, 0)) : this.append(l * d, m * d, -m * e, l * e, b, c), (i || j) && (this.tx -= i * this.a + j * this.c, this.ty -= i * this.b + j * this.d), this
    }, b.prependTransform = function (b, c, d, e, f, g, h, i, j) {
      if (f % 360) var k = f * a.DEG_TO_RAD,
        l = Math.cos(k),
        m = Math.sin(k);
      else l = 1, m = 0;
      return (i || j) && (this.tx -= i, this.ty -= j), g || h ? (g *= a.DEG_TO_RAD, h *= a.DEG_TO_RAD, this.prepend(l * d, m * d, -m * e, l * e, 0, 0), this.prepend(Math.cos(h), Math.sin(h), -Math.sin(g), Math.cos(g), b, c)) : this.prepend(l * d, m * d, -m * e, l * e, b, c), this
    }, b.rotate = function (b) {
      b *= a.DEG_TO_RAD;
      var c = Math.cos(b),
        d = Math.sin(b),
        e = this.a,
        f = this.b;
      return this.a = e * c + this.c * d, this.b = f * c + this.d * d, this.c = -e * d + this.c * c, this.d = -f * d + this.d * c, this
    }, b.skew = function (b, c) {
      return b *= a.DEG_TO_RAD, c *= a.DEG_TO_RAD, this.append(Math.cos(c), Math.sin(c), -Math.sin(b), Math.cos(b), 0, 0), this
    }, b.scale = function (a, b) {
      return this.a *= a, this.b *= a, this.c *= b, this.d *= b, this
    }, b.translate = function (a, b) {
      return this.tx += this.a * a + this.c * b, this.ty += this.b * a + this.d * b, this
    }, b.identity = function () {
      return this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0, this
    }, b.invert = function () {
      var a = this.a,
        b = this.b,
        c = this.c,
        d = this.d,
        e = this.tx,
        f = a * d - b * c;
      return this.a = d / f, this.b = -b / f, this.c = -c / f, this.d = a / f, this.tx = (c * this.ty - d * e) / f, this.ty = -(a * this.ty - b * e) / f, this
    }, b.isIdentity = function () {
      return 0 === this.tx && 0 === this.ty && 1 === this.a && 0 === this.b && 0 === this.c && 1 === this.d
    }, b.equals = function (a) {
      return this.tx === a.tx && this.ty === a.ty && this.a === a.a && this.b === a.b && this.c === a.c && this.d === a.d
    }, b.transformPoint = function (a, b, c) {
      return c = c || {}, c.x = a * this.a + b * this.c + this.tx, c.y = a * this.b + b * this.d + this.ty, c
    }, b.decompose = function (b) {
      null == b && (b = {}), b.x = this.tx, b.y = this.ty, b.scaleX = Math.sqrt(this.a * this.a + this.b * this.b), b.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
      var c = Math.atan2(-this.c, this.d),
        d = Math.atan2(this.b, this.a),
        e = Math.abs(1 - c / d);
      return 1e-5 > e ? (b.rotation = d / a.DEG_TO_RAD, this.a < 0 && this.d >= 0 && (b.rotation += b.rotation <= 0 ? 180 : -180), b.skewX = b.skewY = 0) : (b.skewX = c / a.DEG_TO_RAD, b.skewY = d / a.DEG_TO_RAD), b
    }, b.copy = function (a) {
      return this.setValues(a.a, a.b, a.c, a.d, a.tx, a.ty)
    }, b.clone = function () {
      return new a(this.a, this.b, this.c, this.d, this.tx, this.ty)
    }, b.toString = function () {
      return "[Matrix2D (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]"
    }, a.identity = new a, createjs.Matrix2D = a
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b, c, d, e) {
      this.setValues(a, b, c, d, e)
    }
    var b = a.prototype;
    b.setValues = function (a, b, c, d, e) {
      return this.visible = null == a ? !0 : !!a, this.alpha = null == b ? 1 : b, this.shadow = c, this.compositeOperation = d, this.matrix = e || this.matrix && this.matrix.identity() || new createjs.Matrix2D, this
    }, b.append = function (a, b, c, d, e) {
      return this.alpha *= b, this.shadow = c || this.shadow, this.compositeOperation = d || this.compositeOperation, this.visible = this.visible && a, e && this.matrix.appendMatrix(e), this
    }, b.prepend = function (a, b, c, d, e) {
      return this.alpha *= b, this.shadow = this.shadow || c, this.compositeOperation = this.compositeOperation || d, this.visible = this.visible && a, e && this.matrix.prependMatrix(e), this
    }, b.identity = function () {
      return this.visible = !0, this.alpha = 1, this.shadow = this.compositeOperation = null, this.matrix.identity(), this
    }, b.clone = function () {
      return new a(this.alpha, this.shadow, this.compositeOperation, this.visible, this.matrix.clone())
    }, createjs.DisplayProps = a
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b) {
      this.setValues(a, b)
    }
    var b = a.prototype;
    b.setValues = function (a, b) {
      return this.x = a || 0, this.y = b || 0, this
    }, b.copy = function (a) {
      return this.x = a.x, this.y = a.y, this
    }, b.clone = function () {
      return new a(this.x, this.y)
    }, b.toString = function () {
      return "[Point (x=" + this.x + " y=" + this.y + ")]"
    }, createjs.Point = a
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b, c, d) {
      this.setValues(a, b, c, d)
    }
    var b = a.prototype;
    b.setValues = function (a, b, c, d) {
      return this.x = a || 0, this.y = b || 0, this.width = c || 0, this.height = d || 0, this
    }, b.extend = function (a, b, c, d) {
      return c = c || 0, d = d || 0, a + c > this.x + this.width && (this.width = a + c - this.x), b + d > this.y + this.height && (this.height = b + d - this.y), a < this.x && (this.width += this.x - a, this.x = a), b < this.y && (this.height += this.y - b, this.y = b), this
    }, b.pad = function (a, b, c, d) {
      return this.x -= b, this.y -= a, this.width += b + d, this.height += a + c, this
    }, b.copy = function (a) {
      return this.setValues(a.x, a.y, a.width, a.height)
    }, b.contains = function (a, b, c, d) {
      return c = c || 0, d = d || 0, a >= this.x && a + c <= this.x + this.width && b >= this.y && b + d <= this.y + this.height
    }, b.union = function (a) {
      return this.clone().extend(a.x, a.y, a.width, a.height)
    }, b.intersection = function (b) {
      var c = b.x,
        d = b.y,
        e = c + b.width,
        f = d + b.height;
      return this.x > c && (c = this.x), this.y > d && (d = this.y), this.x + this.width < e && (e = this.x + this.width), this.y + this.height < f && (f = this.y + this.height), c >= e || d >= f ? null : new a(c, d, e - c, f - d)
    }, b.intersects = function (a) {
      return a.x <= this.x + this.width && this.x <= a.x + a.width && a.y <= this.y + this.height && this.y <= a.y + a.height
    }, b.isEmpty = function () {
      return this.width <= 0 || this.height <= 0
    }, b.clone = function () {
      return new a(this.x, this.y, this.width, this.height)
    }, b.toString = function () {
      return "[Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")]"
    }, createjs.Rectangle = a
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b, c, d, e, f, g) {
      a.addEventListener && (this.target = a, this.overLabel = null == c ? "over" : c, this.outLabel = null == b ? "out" : b, this.downLabel = null == d ? "down" : d, this.play = e, this._isPressed = !1, this._isOver = !1, this._enabled = !1, a.mouseChildren = !1, this.enabled = !0, this.handleEvent({}), f && (g && (f.actionsEnabled = !1, f.gotoAndStop && f.gotoAndStop(g)), a.hitArea = f))
    }
    var b = a.prototype;
    b.setEnabled = function (a) {
      if (a != this._enabled) {
        var b = this.target;
        this._enabled = a, a ? (b.cursor = "pointer", b.addEventListener("rollover", this), b.addEventListener("rollout", this), b.addEventListener("mousedown", this), b.addEventListener("pressup", this), b._reset && (b.__reset = b._reset, b._reset = this._reset)) : (b.cursor = null, b.removeEventListener("rollover", this), b.removeEventListener("rollout", this), b.removeEventListener("mousedown", this), b.removeEventListener("pressup", this), b.__reset && (b._reset = b.__reset, delete b.__reset))
      }
    }, b.getEnabled = function () {
      return this._enabled
    };
    try {
      Object.defineProperties(b, {
        enabled: {
          get: b.getEnabled,
          set: b.setEnabled
        }
      })
    } catch (c) {}
    b.toString = function () {
      return "[ButtonHelper]"
    }, b.handleEvent = function (a) {
      var b, c = this.target,
        d = a.type;
      "mousedown" == d ? (this._isPressed = !0, b = this.downLabel) : "pressup" == d ? (this._isPressed = !1, b = this._isOver ? this.overLabel : this.outLabel) : "rollover" == d ? (this._isOver = !0, b = this._isPressed ? this.downLabel : this.overLabel) : (this._isOver = !1, b = this._isPressed ? this.overLabel : this.outLabel), this.play ? c.gotoAndPlay && c.gotoAndPlay(b) : c.gotoAndStop && c.gotoAndStop(b)
    }, b._reset = function () {
      var a = this.paused;
      this.__reset(), this.paused = a
    }, createjs.ButtonHelper = a
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b, c, d) {
      this.color = a || "black", this.offsetX = b || 0, this.offsetY = c || 0, this.blur = d || 0
    }
    var b = a.prototype;
    a.identity = new a("transparent", 0, 0, 0), b.toString = function () {
      return "[Shadow]"
    }, b.clone = function () {
      return new a(this.color, this.offsetX, this.offsetY, this.blur)
    }, createjs.Shadow = a
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a) {
      this.EventDispatcher_constructor(), this.complete = !0, this.framerate = 0, this._animations = null, this._frames = null, this._images = null, this._data = null, this._loadCount = 0, this._frameHeight = 0, this._frameWidth = 0, this._numFrames = 0, this._regX = 0, this._regY = 0, this._spacing = 0, this._margin = 0, this._parseData(a)
    }
    var b = createjs.extend(a, createjs.EventDispatcher);
    b.getAnimations = function () {
      return this._animations.slice()
    };
    try {
      Object.defineProperties(b, {
        animations: {
          get: b.getAnimations
        }
      })
    } catch (c) {}
    b.getNumFrames = function (a) {
      if (null == a) return this._frames ? this._frames.length : this._numFrames || 0;
      var b = this._data[a];
      return null == b ? 0 : b.frames.length
    }, b.getAnimation = function (a) {
      return this._data[a]
    }, b.getFrame = function (a) {
      var b;
      return this._frames && (b = this._frames[a]) ? b : null
    }, b.getFrameBounds = function (a, b) {
      var c = this.getFrame(a);
      return c ? (b || new createjs.Rectangle).setValues(-c.regX, -c.regY, c.rect.width, c.rect.height) : null
    }, b.toString = function () {
      return "[SpriteSheet]"
    }, b.clone = function () {
      throw "SpriteSheet cannot be cloned."
    }, b._parseData = function (a) {
      var b, c, d, e;
      if (null != a) {
        if (this.framerate = a.framerate || 0, a.images && (c = a.images.length) > 0)
          for (e = this._images = [], b = 0; c > b; b++) {
            var f = a.images[b];
            if ("string" == typeof f) {
              var g = f;
              f = document.createElement("img"), f.src = g
            }
            e.push(f), f.getContext || f.naturalWidth || (this._loadCount++, this.complete = !1, function (a, b) {
              f.onload = function () {
                a._handleImageLoad(b)
              }
            }(this, g), function (a, b) {
              f.onerror = function () {
                a._handleImageError(b)
              }
            }(this, g))
          }
        if (null == a.frames);
        else if (Array.isArray(a.frames))
          for (this._frames = [], e = a.frames, b = 0, c = e.length; c > b; b++) {
            var h = e[b];
            this._frames.push({
              image: this._images[h[4] ? h[4] : 0],
              rect: new createjs.Rectangle(h[0], h[1], h[2], h[3]),
              regX: h[5] || 0,
              regY: h[6] || 0
            })
          } else d = a.frames, this._frameWidth = d.width, this._frameHeight = d.height, this._regX = d.regX || 0, this._regY = d.regY || 0, this._spacing = d.spacing || 0, this._margin = d.margin || 0, this._numFrames = d.count, 0 == this._loadCount && this._calculateFrames();
        if (this._animations = [], null != (d = a.animations)) {
          this._data = {};
          var i;
          for (i in d) {
            var j = {
                name: i
              },
              k = d[i];
            if ("number" == typeof k) e = j.frames = [k];
            else if (Array.isArray(k))
              if (1 == k.length) j.frames = [k[0]];
              else
                for (j.speed = k[3], j.next = k[2], e = j.frames = [], b = k[0]; b <= k[1]; b++) e.push(b);
            else {
              j.speed = k.speed, j.next = k.next;
              var l = k.frames;
              e = j.frames = "number" == typeof l ? [l] : l.slice(0)
            }(j.next === !0 || void 0 === j.next) && (j.next = i), (j.next === !1 || e.length < 2 && j.next == i) && (j.next = null), j.speed || (j.speed = 1), this._animations.push(i), this._data[i] = j
          }
        }
      }
    }, b._handleImageLoad = function (a) {
      0 == --this._loadCount && (this._calculateFrames(), this.complete = !0, this.dispatchEvent("complete"))
    }, b._handleImageError = function (a) {
      var b = new createjs.Event("error");
      b.src = a, this.dispatchEvent(b), 0 == --this._loadCount && this.dispatchEvent("complete")
    }, b._calculateFrames = function () {
      if (!this._frames && 0 != this._frameWidth) {
        this._frames = [];
        var a = this._numFrames || 1e5,
          b = 0,
          c = this._frameWidth,
          d = this._frameHeight,
          e = this._spacing,
          f = this._margin;
        a: for (var g = 0, h = this._images; g < h.length; g++)
          for (var i = h[g], j = i.width, k = i.height, l = f; k - f - d >= l;) {
            for (var m = f; j - f - c >= m;) {
              if (b >= a) break a;
              b++, this._frames.push({
                image: i,
                rect: new createjs.Rectangle(m, l, c, d),
                regX: this._regX,
                regY: this._regY
              }), m += c + e
            }
            l += d + e
          }
        this._numFrames = b
      }
    }, createjs.SpriteSheet = createjs.promote(a, "EventDispatcher")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a() {
      this.command = null, this._stroke = null, this._strokeStyle = null, this._oldStrokeStyle = null, this._strokeDash = null, this._oldStrokeDash = null, this._strokeIgnoreScale = !1, this._fill = null, this._instructions = [], this._commitIndex = 0, this._activeInstructions = [], this._dirty = !1, this._storeIndex = 0, this.clear()
    }
    var b = a.prototype,
      c = a;
    a.getRGB = function (a, b, c, d) {
      return null != a && null == c && (d = b, c = 255 & a, b = a >> 8 & 255, a = a >> 16 & 255), null == d ? "rgb(" + a + "," + b + "," + c + ")" : "rgba(" + a + "," + b + "," + c + "," + d + ")"
    }, a.getHSL = function (a, b, c, d) {
      return null == d ? "hsl(" + a % 360 + "," + b + "%," + c + "%)" : "hsla(" + a % 360 + "," + b + "%," + c + "%," + d + ")"
    }, a.BASE_64 = {
      A: 0,
      B: 1,
      C: 2,
      D: 3,
      E: 4,
      F: 5,
      G: 6,
      H: 7,
      I: 8,
      J: 9,
      K: 10,
      L: 11,
      M: 12,
      N: 13,
      O: 14,
      P: 15,
      Q: 16,
      R: 17,
      S: 18,
      T: 19,
      U: 20,
      V: 21,
      W: 22,
      X: 23,
      Y: 24,
      Z: 25,
      a: 26,
      b: 27,
      c: 28,
      d: 29,
      e: 30,
      f: 31,
      g: 32,
      h: 33,
      i: 34,
      j: 35,
      k: 36,
      l: 37,
      m: 38,
      n: 39,
      o: 40,
      p: 41,
      q: 42,
      r: 43,
      s: 44,
      t: 45,
      u: 46,
      v: 47,
      w: 48,
      x: 49,
      y: 50,
      z: 51,
      0: 52,
      1: 53,
      2: 54,
      3: 55,
      4: 56,
      5: 57,
      6: 58,
      7: 59,
      8: 60,
      9: 61,
      "+": 62,
      "/": 63
    }, a.STROKE_CAPS_MAP = ["butt", "round", "square"], a.STROKE_JOINTS_MAP = ["miter", "round", "bevel"];
    var d = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
    d.getContext && (a._ctx = d.getContext("2d"), d.width = d.height = 1), b.getInstructions = function () {
      return this._updateInstructions(), this._instructions
    };
    try {
      Object.defineProperties(b, {
        instructions: {
          get: b.getInstructions
        }
      })
    } catch (e) {}
    b.isEmpty = function () {
      return !(this._instructions.length || this._activeInstructions.length)
    }, b.draw = function (a, b) {
      this._updateInstructions();
      for (var c = this._instructions, d = this._storeIndex, e = c.length; e > d; d++) c[d].exec(a, b)
    }, b.drawAsPath = function (a) {
      this._updateInstructions();
      for (var b, c = this._instructions, d = this._storeIndex, e = c.length; e > d; d++)(b = c[d]).path !== !1 && b.exec(a)
    }, b.moveTo = function (a, b) {
      return this.append(new c.MoveTo(a, b), !0)
    }, b.lineTo = function (a, b) {
      return this.append(new c.LineTo(a, b))
    }, b.arcTo = function (a, b, d, e, f) {
      return this.append(new c.ArcTo(a, b, d, e, f))
    }, b.arc = function (a, b, d, e, f, g) {
      return this.append(new c.Arc(a, b, d, e, f, g))
    }, b.quadraticCurveTo = function (a, b, d, e) {
      return this.append(new c.QuadraticCurveTo(a, b, d, e))
    }, b.bezierCurveTo = function (a, b, d, e, f, g) {
      return this.append(new c.BezierCurveTo(a, b, d, e, f, g))
    }, b.rect = function (a, b, d, e) {
      return this.append(new c.Rect(a, b, d, e))
    }, b.closePath = function () {
      return this._activeInstructions.length ? this.append(new c.ClosePath) : this
    }, b.clear = function () {
      return this._instructions.length = this._activeInstructions.length = this._commitIndex = 0, this._strokeStyle = this._oldStrokeStyle = this._stroke = this._fill = this._strokeDash = this._oldStrokeDash = null, this._dirty = this._strokeIgnoreScale = !1, this
    }, b.beginFill = function (a) {
      return this._setFill(a ? new c.Fill(a) : null)
    }, b.beginLinearGradientFill = function (a, b, d, e, f, g) {
      return this._setFill((new c.Fill).linearGradient(a, b, d, e, f, g))
    }, b.beginRadialGradientFill = function (a, b, d, e, f, g, h, i) {
      return this._setFill((new c.Fill).radialGradient(a, b, d, e, f, g, h, i))
    }, b.beginBitmapFill = function (a, b, d) {
      return this._setFill(new c.Fill(null, d).bitmap(a, b))
    }, b.endFill = function () {
      return this.beginFill()
    }, b.setStrokeStyle = function (a, b, d, e, f) {
      return this._updateInstructions(!0), this._strokeStyle = this.command = new c.StrokeStyle(a, b, d, e, f), this._stroke && (this._stroke.ignoreScale = f), this._strokeIgnoreScale = f, this
    }, b.setStrokeDash = function (a, b) {
      return this._updateInstructions(!0), this._strokeDash = this.command = new c.StrokeDash(a, b), this
    }, b.beginStroke = function (a) {
      return this._setStroke(a ? new c.Stroke(a) : null)
    }, b.beginLinearGradientStroke = function (a, b, d, e, f, g) {
      return this._setStroke((new c.Stroke).linearGradient(a, b, d, e, f, g))
    }, b.beginRadialGradientStroke = function (a, b, d, e, f, g, h, i) {
      return this._setStroke((new c.Stroke).radialGradient(a, b, d, e, f, g, h, i))
    }, b.beginBitmapStroke = function (a, b) {
      return this._setStroke((new c.Stroke).bitmap(a, b))
    }, b.endStroke = function () {
      return this.beginStroke()
    }, b.curveTo = b.quadraticCurveTo, b.drawRect = b.rect, b.drawRoundRect = function (a, b, c, d, e) {
      return this.drawRoundRectComplex(a, b, c, d, e, e, e, e)
    }, b.drawRoundRectComplex = function (a, b, d, e, f, g, h, i) {
      return this.append(new c.RoundRect(a, b, d, e, f, g, h, i))
    }, b.drawCircle = function (a, b, d) {
      return this.append(new c.Circle(a, b, d))
    }, b.drawEllipse = function (a, b, d, e) {
      return this.append(new c.Ellipse(a, b, d, e))
    }, b.drawPolyStar = function (a, b, d, e, f, g) {
      return this.append(new c.PolyStar(a, b, d, e, f, g))
    }, b.append = function (a, b) {
      return this._activeInstructions.push(a), this.command = a, b || (this._dirty = !0), this
    }, b.decodePath = function (b) {
      for (var c = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath], d = [2, 2, 4, 6, 0], e = 0, f = b.length, g = [], h = 0, i = 0, j = a.BASE_64; f > e;) {
        var k = b.charAt(e),
          l = j[k],
          m = l >> 3,
          n = c[m];
        if (!n || 3 & l) throw "bad path data (@" + e + "): " + k;
        var o = d[m];
        m || (h = i = 0), g.length = 0, e++;
        for (var p = (l >> 2 & 1) + 2, q = 0; o > q; q++) {
          var r = j[b.charAt(e)],
            s = r >> 5 ? -1 : 1;
          r = (31 & r) << 6 | j[b.charAt(e + 1)], 3 == p && (r = r << 6 | j[b.charAt(e + 2)]), r = s * r / 10, q % 2 ? h = r += h : i = r += i, g[q] = r, e += p
        }
        n.apply(this, g)
      }
      return this
    }, b.store = function () {
      return this._updateInstructions(!0), this._storeIndex = this._instructions.length, this
    }, b.unstore = function () {
      return this._storeIndex = 0, this
    }, b.clone = function () {
      var b = new a;
      return b.command = this.command, b._stroke = this._stroke, b._strokeStyle = this._strokeStyle, b._strokeDash = this._strokeDash, b._strokeIgnoreScale = this._strokeIgnoreScale, b._fill = this._fill, b._instructions = this._instructions.slice(), b._commitIndex = this._commitIndex, b._activeInstructions = this._activeInstructions.slice(), b._dirty = this._dirty, b._storeIndex = this._storeIndex, b
    }, b.toString = function () {
      return "[Graphics]"
    }, b.mt = b.moveTo, b.lt = b.lineTo, b.at = b.arcTo, b.bt = b.bezierCurveTo, b.qt = b.quadraticCurveTo, b.a = b.arc, b.r = b.rect, b.cp = b.closePath, b.c = b.clear, b.f = b.beginFill, b.lf = b.beginLinearGradientFill, b.rf = b.beginRadialGradientFill, b.bf = b.beginBitmapFill, b.ef = b.endFill, b.ss = b.setStrokeStyle, b.sd = b.setStrokeDash, b.s = b.beginStroke, b.ls = b.beginLinearGradientStroke, b.rs = b.beginRadialGradientStroke, b.bs = b.beginBitmapStroke, b.es = b.endStroke, b.dr = b.drawRect, b.rr = b.drawRoundRect, b.rc = b.drawRoundRectComplex, b.dc = b.drawCircle, b.de = b.drawEllipse, b.dp = b.drawPolyStar, b.p = b.decodePath, b._updateInstructions = function (b) {
      var c = this._instructions,
        d = this._activeInstructions,
        e = this._commitIndex;
      if (this._dirty && d.length) {
        c.length = e, c.push(a.beginCmd);
        var f = d.length,
          g = c.length;
        c.length = g + f;
        for (var h = 0; f > h; h++) c[h + g] = d[h];
        this._fill && c.push(this._fill), this._stroke && (this._strokeDash !== this._oldStrokeDash && (this._oldStrokeDash = this._strokeDash, c.push(this._strokeDash)), this._strokeStyle !== this._oldStrokeStyle && (this._oldStrokeStyle = this._strokeStyle, c.push(this._strokeStyle)), c.push(this._stroke)), this._dirty = !1
      }
      b && (d.length = 0, this._commitIndex = c.length)
    }, b._setFill = function (a) {
      return this._updateInstructions(!0), this.command = this._fill = a, this
    }, b._setStroke = function (a) {
      return this._updateInstructions(!0), (this.command = this._stroke = a) && (a.ignoreScale = this._strokeIgnoreScale), this
    }, (c.LineTo = function (a, b) {
      this.x = a, this.y = b
    }).prototype.exec = function (a) {
      a.lineTo(this.x, this.y)
    }, (c.MoveTo = function (a, b) {
      this.x = a, this.y = b
    }).prototype.exec = function (a) {
      a.moveTo(this.x, this.y)
    }, (c.ArcTo = function (a, b, c, d, e) {
      this.x1 = a, this.y1 = b, this.x2 = c, this.y2 = d, this.radius = e
    }).prototype.exec = function (a) {
      a.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius)
    }, (c.Arc = function (a, b, c, d, e, f) {
      this.x = a, this.y = b, this.radius = c, this.startAngle = d, this.endAngle = e, this.anticlockwise = !!f
    }).prototype.exec = function (a) {
      a.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise)
    }, (c.QuadraticCurveTo = function (a, b, c, d) {
      this.cpx = a, this.cpy = b, this.x = c, this.y = d
    }).prototype.exec = function (a) {
      a.quadraticCurveTo(this.cpx, this.cpy, this.x, this.y)
    }, (c.BezierCurveTo = function (a, b, c, d, e, f) {
      this.cp1x = a, this.cp1y = b, this.cp2x = c, this.cp2y = d, this.x = e, this.y = f
    }).prototype.exec = function (a) {
      a.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x, this.y)
    }, (c.Rect = function (a, b, c, d) {
      this.x = a, this.y = b, this.w = c, this.h = d
    }).prototype.exec = function (a) {
      a.rect(this.x, this.y, this.w, this.h)
    }, (c.ClosePath = function () {}).prototype.exec = function (a) {
      a.closePath()
    }, (c.BeginPath = function () {}).prototype.exec = function (a) {
      a.beginPath()
    }, b = (c.Fill = function (a, b) {
      this.style = a, this.matrix = b
    }).prototype, b.exec = function (a) {
      if (this.style) {
        a.fillStyle = this.style;
        var b = this.matrix;
        b && (a.save(), a.transform(b.a, b.b, b.c, b.d, b.tx, b.ty)), a.fill(), b && a.restore()
      }
    }, b.linearGradient = function (b, c, d, e, f, g) {
      for (var h = this.style = a._ctx.createLinearGradient(d, e, f, g), i = 0, j = b.length; j > i; i++) h.addColorStop(c[i], b[i]);
      return h.props = {
        colors: b,
        ratios: c,
        x0: d,
        y0: e,
        x1: f,
        y1: g,
        type: "linear"
      }, this
    }, b.radialGradient = function (b, c, d, e, f, g, h, i) {
      for (var j = this.style = a._ctx.createRadialGradient(d, e, f, g, h, i), k = 0, l = b.length; l > k; k++) j.addColorStop(c[k], b[k]);
      return j.props = {
        colors: b,
        ratios: c,
        x0: d,
        y0: e,
        r0: f,
        x1: g,
        y1: h,
        r1: i,
        type: "radial"
      }, this
    }, b.bitmap = function (b, c) {
      if (b.naturalWidth || b.getContext || b.readyState >= 2) {
        var d = this.style = a._ctx.createPattern(b, c || "");
        d.props = {
          image: b,
          repetition: c,
          type: "bitmap"
        }
      }
      return this
    }, b.path = !1, b = (c.Stroke = function (a, b) {
      this.style = a, this.ignoreScale = b
    }).prototype, b.exec = function (a) {
      this.style && (a.strokeStyle = this.style, this.ignoreScale && (a.save(), a.setTransform(1, 0, 0, 1, 0, 0)), a.stroke(), this.ignoreScale && a.restore())
    }, b.linearGradient = c.Fill.prototype.linearGradient, b.radialGradient = c.Fill.prototype.radialGradient, b.bitmap = c.Fill.prototype.bitmap, b.path = !1, b = (c.StrokeStyle = function (a, b, c, d, e) {
      this.width = a, this.caps = b, this.joints = c, this.miterLimit = d, this.ignoreScale = e
    }).prototype, b.exec = function (b) {
      b.lineWidth = null == this.width ? "1" : this.width, b.lineCap = null == this.caps ? "butt" : isNaN(this.caps) ? this.caps : a.STROKE_CAPS_MAP[this.caps], b.lineJoin = null == this.joints ? "miter" : isNaN(this.joints) ? this.joints : a.STROKE_JOINTS_MAP[this.joints], b.miterLimit = null == this.miterLimit ? "10" : this.miterLimit, b.ignoreScale = null == this.ignoreScale ? !1 : this.ignoreScale
    }, b.path = !1, (c.StrokeDash = function (a, b) {
      this.segments = a, this.offset = b || 0
    }).prototype.exec = function (a) {
      a.setLineDash && (a.setLineDash(this.segments || c.StrokeDash.EMPTY_SEGMENTS), a.lineDashOffset = this.offset || 0)
    }, c.StrokeDash.EMPTY_SEGMENTS = [], (c.RoundRect = function (a, b, c, d, e, f, g, h) {
      this.x = a, this.y = b, this.w = c, this.h = d, this.radiusTL = e, this.radiusTR = f, this.radiusBR = g, this.radiusBL = h
    }).prototype.exec = function (a) {
      var b = (j > i ? i : j) / 2,
        c = 0,
        d = 0,
        e = 0,
        f = 0,
        g = this.x,
        h = this.y,
        i = this.w,
        j = this.h,
        k = this.radiusTL,
        l = this.radiusTR,
        m = this.radiusBR,
        n = this.radiusBL;
      0 > k && (k *= c = -1), k > b && (k = b), 0 > l && (l *= d = -1), l > b && (l = b), 0 > m && (m *= e = -1), m > b && (m = b), 0 > n && (n *= f = -1), n > b && (n = b), a.moveTo(g + i - l, h), a.arcTo(g + i + l * d, h - l * d, g + i, h + l, l), a.lineTo(g + i, h + j - m), a.arcTo(g + i + m * e, h + j + m * e, g + i - m, h + j, m), a.lineTo(g + n, h + j), a.arcTo(g - n * f, h + j + n * f, g, h + j - n, n), a.lineTo(g, h + k), a.arcTo(g - k * c, h - k * c, g + k, h, k), a.closePath()
    }, (c.Circle = function (a, b, c) {
      this.x = a, this.y = b, this.radius = c
    }).prototype.exec = function (a) {
      a.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    }, (c.Ellipse = function (a, b, c, d) {
      this.x = a, this.y = b, this.w = c, this.h = d
    }).prototype.exec = function (a) {
      var b = this.x,
        c = this.y,
        d = this.w,
        e = this.h,
        f = .5522848,
        g = d / 2 * f,
        h = e / 2 * f,
        i = b + d,
        j = c + e,
        k = b + d / 2,
        l = c + e / 2;
      a.moveTo(b, l), a.bezierCurveTo(b, l - h, k - g, c, k, c), a.bezierCurveTo(k + g, c, i, l - h, i, l), a.bezierCurveTo(i, l + h, k + g, j, k, j), a.bezierCurveTo(k - g, j, b, l + h, b, l)
    }, (c.PolyStar = function (a, b, c, d, e, f) {
      this.x = a, this.y = b, this.radius = c, this.sides = d, this.pointSize = e, this.angle = f
    }).prototype.exec = function (a) {
      var b = this.x,
        c = this.y,
        d = this.radius,
        e = (this.angle || 0) / 180 * Math.PI,
        f = this.sides,
        g = 1 - (this.pointSize || 0),
        h = Math.PI / f;
      a.moveTo(b + Math.cos(e) * d, c + Math.sin(e) * d);
      for (var i = 0; f > i; i++) e += h, 1 != g && a.lineTo(b + Math.cos(e) * d * g, c + Math.sin(e) * d * g), e += h, a.lineTo(b + Math.cos(e) * d, c + Math.sin(e) * d);
      a.closePath()
    }, a.beginCmd = new c.BeginPath, createjs.Graphics = a
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a() {
      this.EventDispatcher_constructor(), this.alpha = 1, this.cacheCanvas = null, this.cacheID = 0, this.id = createjs.UID.get(), this.mouseEnabled = !0, this.tickEnabled = !0, this.name = null, this.parent = null, this.regX = 0, this.regY = 0, this.rotation = 0, this.scaleX = 1, this.scaleY = 1, this.skewX = 0, this.skewY = 0, this.shadow = null, this.visible = !0, this.x = 0, this.y = 0, this.transformMatrix = null, this.compositeOperation = null, this.snapToPixel = !0, this.filters = null,
        this.mask = null, this.hitArea = null, this.cursor = null, this._cacheOffsetX = 0, this._cacheOffsetY = 0, this._filterOffsetX = 0, this._filterOffsetY = 0, this._cacheScale = 1, this._cacheDataURLID = 0, this._cacheDataURL = null, this._props = new createjs.DisplayProps, this._rectangle = new createjs.Rectangle, this._bounds = null
    }
    var b = createjs.extend(a, createjs.EventDispatcher);
    a._MOUSE_EVENTS = ["click", "dblclick", "mousedown", "mouseout", "mouseover", "pressmove", "pressup", "rollout", "rollover"], a.suppressCrossDomainErrors = !1, a._snapToPixelEnabled = !1;
    var c = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
    c.getContext && (a._hitTestCanvas = c, a._hitTestContext = c.getContext("2d"), c.width = c.height = 1), a._nextCacheID = 1, b.getStage = function () {
      for (var a = this, b = createjs.Stage; a.parent;) a = a.parent;
      return a instanceof b ? a : null
    };
    try {
      Object.defineProperties(b, {
        stage: {
          get: b.getStage
        }
      })
    } catch (d) {}
    b.isVisible = function () {
      return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY)
    }, b.draw = function (a, b) {
      var c = this.cacheCanvas;
      if (b || !c) return !1;
      var d = this._cacheScale;
      return a.drawImage(c, this._cacheOffsetX + this._filterOffsetX, this._cacheOffsetY + this._filterOffsetY, c.width / d, c.height / d), !0
    }, b.updateContext = function (b) {
      var c = this,
        d = c.mask,
        e = c._props.matrix;
      d && d.graphics && !d.graphics.isEmpty() && (d.getMatrix(e), b.transform(e.a, e.b, e.c, e.d, e.tx, e.ty), d.graphics.drawAsPath(b), b.clip(), e.invert(), b.transform(e.a, e.b, e.c, e.d, e.tx, e.ty)), this.getMatrix(e);
      var f = e.tx,
        g = e.ty;
      a._snapToPixelEnabled && c.snapToPixel && (f = f + (0 > f ? -.5 : .5) | 0, g = g + (0 > g ? -.5 : .5) | 0), b.transform(e.a, e.b, e.c, e.d, f, g), b.globalAlpha *= c.alpha, c.compositeOperation && (b.globalCompositeOperation = c.compositeOperation), c.shadow && this._applyShadow(b, c.shadow)
    }, b.cache = function (a, b, c, d, e) {
      e = e || 1, this.cacheCanvas || (this.cacheCanvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")), this._cacheWidth = c, this._cacheHeight = d, this._cacheOffsetX = a, this._cacheOffsetY = b, this._cacheScale = e, this.updateCache()
    }, b.updateCache = function (b) {
      var c = this.cacheCanvas;
      if (!c) throw "cache() must be called before updateCache()";
      var d = this._cacheScale,
        e = this._cacheOffsetX * d,
        f = this._cacheOffsetY * d,
        g = this._cacheWidth,
        h = this._cacheHeight,
        i = c.getContext("2d"),
        j = this._getFilterBounds();
      e += this._filterOffsetX = j.x, f += this._filterOffsetY = j.y, g = Math.ceil(g * d) + j.width, h = Math.ceil(h * d) + j.height, g != c.width || h != c.height ? (c.width = g, c.height = h) : b || i.clearRect(0, 0, g + 1, h + 1), i.save(), i.globalCompositeOperation = b, i.setTransform(d, 0, 0, d, -e, -f), this.draw(i, !0), this._applyFilters(), i.restore(), this.cacheID = a._nextCacheID++
    }, b.uncache = function () {
      this._cacheDataURL = this.cacheCanvas = null, this.cacheID = this._cacheOffsetX = this._cacheOffsetY = this._filterOffsetX = this._filterOffsetY = 0, this._cacheScale = 1
    }, b.getCacheDataURL = function () {
      return this.cacheCanvas ? (this.cacheID != this._cacheDataURLID && (this._cacheDataURL = this.cacheCanvas.toDataURL()), this._cacheDataURL) : null
    }, b.localToGlobal = function (a, b, c) {
      return this.getConcatenatedMatrix(this._props.matrix).transformPoint(a, b, c || new createjs.Point)
    }, b.globalToLocal = function (a, b, c) {
      return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(a, b, c || new createjs.Point)
    }, b.localToLocal = function (a, b, c, d) {
      return d = this.localToGlobal(a, b, d), c.globalToLocal(d.x, d.y, d)
    }, b.setTransform = function (a, b, c, d, e, f, g, h, i) {
      return this.x = a || 0, this.y = b || 0, this.scaleX = null == c ? 1 : c, this.scaleY = null == d ? 1 : d, this.rotation = e || 0, this.skewX = f || 0, this.skewY = g || 0, this.regX = h || 0, this.regY = i || 0, this
    }, b.getMatrix = function (a) {
      var b = this,
        c = a && a.identity() || new createjs.Matrix2D;
      return b.transformMatrix ? c.copy(b.transformMatrix) : c.appendTransform(b.x, b.y, b.scaleX, b.scaleY, b.rotation, b.skewX, b.skewY, b.regX, b.regY)
    }, b.getConcatenatedMatrix = function (a) {
      for (var b = this, c = this.getMatrix(a); b = b.parent;) c.prependMatrix(b.getMatrix(b._props.matrix));
      return c
    }, b.getConcatenatedDisplayProps = function (a) {
      a = a ? a.identity() : new createjs.DisplayProps;
      var b = this,
        c = b.getMatrix(a.matrix);
      do a.prepend(b.visible, b.alpha, b.shadow, b.compositeOperation), b != this && c.prependMatrix(b.getMatrix(b._props.matrix)); while (b = b.parent);
      return a
    }, b.hitTest = function (b, c) {
      var d = a._hitTestContext;
      d.setTransform(1, 0, 0, 1, -b, -c), this.draw(d);
      var e = this._testHit(d);
      return d.setTransform(1, 0, 0, 1, 0, 0), d.clearRect(0, 0, 2, 2), e
    }, b.set = function (a) {
      for (var b in a) this[b] = a[b];
      return this
    }, b.getBounds = function () {
      if (this._bounds) return this._rectangle.copy(this._bounds);
      var a = this.cacheCanvas;
      if (a) {
        var b = this._cacheScale;
        return this._rectangle.setValues(this._cacheOffsetX, this._cacheOffsetY, a.width / b, a.height / b)
      }
      return null
    }, b.getTransformedBounds = function () {
      return this._getBounds()
    }, b.setBounds = function (a, b, c, d) {
      null == a && (this._bounds = a), this._bounds = (this._bounds || new createjs.Rectangle).setValues(a, b, c, d)
    }, b.clone = function () {
      return this._cloneProps(new a)
    }, b.toString = function () {
      return "[DisplayObject (name=" + this.name + ")]"
    }, b._cloneProps = function (a) {
      return a.alpha = this.alpha, a.mouseEnabled = this.mouseEnabled, a.tickEnabled = this.tickEnabled, a.name = this.name, a.regX = this.regX, a.regY = this.regY, a.rotation = this.rotation, a.scaleX = this.scaleX, a.scaleY = this.scaleY, a.shadow = this.shadow, a.skewX = this.skewX, a.skewY = this.skewY, a.visible = this.visible, a.x = this.x, a.y = this.y, a.compositeOperation = this.compositeOperation, a.snapToPixel = this.snapToPixel, a.filters = null == this.filters ? null : this.filters.slice(0), a.mask = this.mask, a.hitArea = this.hitArea, a.cursor = this.cursor, a._bounds = this._bounds, a
    }, b._applyShadow = function (a, b) {
      b = b || Shadow.identity, a.shadowColor = b.color, a.shadowOffsetX = b.offsetX, a.shadowOffsetY = b.offsetY, a.shadowBlur = b.blur
    }, b._tick = function (a) {
      var b = this._listeners;
      b && b.tick && (a.target = null, a.propagationStopped = a.immediatePropagationStopped = !1, this.dispatchEvent(a))
    }, b._testHit = function (b) {
      try {
        var c = b.getImageData(0, 0, 1, 1).data[3] > 1
      } catch (d) {
        if (!a.suppressCrossDomainErrors) throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."
      }
      return c
    }, b._applyFilters = function () {
      if (this.filters && 0 != this.filters.length && this.cacheCanvas)
        for (var a = this.filters.length, b = this.cacheCanvas.getContext("2d"), c = this.cacheCanvas.width, d = this.cacheCanvas.height, e = 0; a > e; e++) this.filters[e].applyFilter(b, 0, 0, c, d)
    }, b._getFilterBounds = function (a) {
      var b, c = this.filters,
        d = this._rectangle.setValues(0, 0, 0, 0);
      if (!c || !(b = c.length)) return d;
      for (var e = 0; b > e; e++) {
        var f = this.filters[e];
        f.getBounds && f.getBounds(d)
      }
      return d
    }, b._getBounds = function (a, b) {
      return this._transformBounds(this.getBounds(), a, b)
    }, b._transformBounds = function (a, b, c) {
      if (!a) return a;
      var d = a.x,
        e = a.y,
        f = a.width,
        g = a.height,
        h = this._props.matrix;
      h = c ? h.identity() : this.getMatrix(h), (d || e) && h.appendTransform(0, 0, 1, 1, 0, 0, 0, -d, -e), b && h.prependMatrix(b);
      var i = f * h.a,
        j = f * h.b,
        k = g * h.c,
        l = g * h.d,
        m = h.tx,
        n = h.ty,
        o = m,
        p = m,
        q = n,
        r = n;
      return (d = i + m) < o ? o = d : d > p && (p = d), (d = i + k + m) < o ? o = d : d > p && (p = d), (d = k + m) < o ? o = d : d > p && (p = d), (e = j + n) < q ? q = e : e > r && (r = e), (e = j + l + n) < q ? q = e : e > r && (r = e), (e = l + n) < q ? q = e : e > r && (r = e), a.setValues(o, q, p - o, r - q)
    }, b._hasMouseEventListener = function () {
      for (var b = a._MOUSE_EVENTS, c = 0, d = b.length; d > c; c++)
        if (this.hasEventListener(b[c])) return !0;
      return !!this.cursor
    }, createjs.DisplayObject = createjs.promote(a, "EventDispatcher")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a() {
      this.DisplayObject_constructor(), this.children = [], this.mouseChildren = !0, this.tickChildren = !0
    }
    var b = createjs.extend(a, createjs.DisplayObject);
    b.getNumChildren = function () {
      return this.children.length
    };
    try {
      Object.defineProperties(b, {
        numChildren: {
          get: b.getNumChildren
        }
      })
    } catch (c) {}
    b.initialize = a, b.isVisible = function () {
      var a = this.cacheCanvas || this.children.length;
      return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && a)
    }, b.draw = function (a, b) {
      if (this.DisplayObject_draw(a, b)) return !0;
      for (var c = this.children.slice(), d = 0, e = c.length; e > d; d++) {
        var f = c[d];
        f.isVisible() && (a.save(), f.updateContext(a), f.draw(a), a.restore())
      }
      return !0
    }, b.addChild = function (a) {
      if (null == a) return a;
      var b = arguments.length;
      if (b > 1) {
        for (var c = 0; b > c; c++) this.addChild(arguments[c]);
        return arguments[b - 1]
      }
      return a.parent && a.parent.removeChild(a), a.parent = this, this.children.push(a), a.dispatchEvent("added"), a
    }, b.addChildAt = function (a, b) {
      var c = arguments.length,
        d = arguments[c - 1];
      if (0 > d || d > this.children.length) return arguments[c - 2];
      if (c > 2) {
        for (var e = 0; c - 1 > e; e++) this.addChildAt(arguments[e], d + e);
        return arguments[c - 2]
      }
      return a.parent && a.parent.removeChild(a), a.parent = this, this.children.splice(b, 0, a), a.dispatchEvent("added"), a
    }, b.removeChild = function (a) {
      var b = arguments.length;
      if (b > 1) {
        for (var c = !0, d = 0; b > d; d++) c = c && this.removeChild(arguments[d]);
        return c
      }
      return this.removeChildAt(createjs.indexOf(this.children, a))
    }, b.removeChildAt = function (a) {
      var b = arguments.length;
      if (b > 1) {
        for (var c = [], d = 0; b > d; d++) c[d] = arguments[d];
        c.sort(function (a, b) {
          return b - a
        });
        for (var e = !0, d = 0; b > d; d++) e = e && this.removeChildAt(c[d]);
        return e
      }
      if (0 > a || a > this.children.length - 1) return !1;
      var f = this.children[a];
      return f && (f.parent = null), this.children.splice(a, 1), f.dispatchEvent("removed"), !0
    }, b.removeAllChildren = function () {
      for (var a = this.children; a.length;) this.removeChildAt(0)
    }, b.getChildAt = function (a) {
      return this.children[a]
    }, b.getChildByName = function (a) {
      for (var b = this.children, c = 0, d = b.length; d > c; c++)
        if (b[c].name == a) return b[c];
      return null
    }, b.sortChildren = function (a) {
      this.children.sort(a)
    }, b.getChildIndex = function (a) {
      return createjs.indexOf(this.children, a)
    }, b.swapChildrenAt = function (a, b) {
      var c = this.children,
        d = c[a],
        e = c[b];
      d && e && (c[a] = e, c[b] = d)
    }, b.swapChildren = function (a, b) {
      for (var c, d, e = this.children, f = 0, g = e.length; g > f && (e[f] == a && (c = f), e[f] == b && (d = f), null == c || null == d); f++);
      f != g && (e[c] = b, e[d] = a)
    }, b.setChildIndex = function (a, b) {
      var c = this.children,
        d = c.length;
      if (!(a.parent != this || 0 > b || b >= d)) {
        for (var e = 0; d > e && c[e] != a; e++);
        e != d && e != b && (c.splice(e, 1), c.splice(b, 0, a))
      }
    }, b.contains = function (a) {
      for (; a;) {
        if (a == this) return !0;
        a = a.parent
      }
      return !1
    }, b.hitTest = function (a, b) {
      return null != this.getObjectUnderPoint(a, b)
    }, b.getObjectsUnderPoint = function (a, b, c) {
      var d = [],
        e = this.localToGlobal(a, b);
      return this._getObjectsUnderPoint(e.x, e.y, d, c > 0, 1 == c), d
    }, b.getObjectUnderPoint = function (a, b, c) {
      var d = this.localToGlobal(a, b);
      return this._getObjectsUnderPoint(d.x, d.y, null, c > 0, 1 == c)
    }, b.getBounds = function () {
      return this._getBounds(null, !0)
    }, b.getTransformedBounds = function () {
      return this._getBounds()
    }, b.clone = function (b) {
      var c = this._cloneProps(new a);
      return b && this._cloneChildren(c), c
    }, b.toString = function () {
      return "[Container (name=" + this.name + ")]"
    }, b._tick = function (a) {
      if (this.tickChildren)
        for (var b = this.children.length - 1; b >= 0; b--) {
          var c = this.children[b];
          c.tickEnabled && c._tick && c._tick(a)
        }
      this.DisplayObject__tick(a)
    }, b._cloneChildren = function (a) {
      a.children.length && a.removeAllChildren();
      for (var b = a.children, c = 0, d = this.children.length; d > c; c++) {
        var e = this.children[c].clone(!0);
        e.parent = a, b.push(e)
      }
    }, b._getObjectsUnderPoint = function (b, c, d, e, f, g) {
      if (g = g || 0, !g && !this._testMask(this, b, c)) return null;
      var h, i = createjs.DisplayObject._hitTestContext;
      f = f || e && this._hasMouseEventListener();
      for (var j = this.children, k = j.length, l = k - 1; l >= 0; l--) {
        var m = j[l],
          n = m.hitArea;
        if (m.visible && (n || m.isVisible()) && (!e || m.mouseEnabled) && (n || this._testMask(m, b, c)))
          if (!n && m instanceof a) {
            var o = m._getObjectsUnderPoint(b, c, d, e, f, g + 1);
            if (!d && o) return e && !this.mouseChildren ? this : o
          } else {
            if (e && !f && !m._hasMouseEventListener()) continue;
            var p = m.getConcatenatedDisplayProps(m._props);
            if (h = p.matrix, n && (h.appendMatrix(n.getMatrix(n._props.matrix)), p.alpha = n.alpha), i.globalAlpha = p.alpha, i.setTransform(h.a, h.b, h.c, h.d, h.tx - b, h.ty - c), (n || m).draw(i), !this._testHit(i)) continue;
            if (i.setTransform(1, 0, 0, 1, 0, 0), i.clearRect(0, 0, 2, 2), !d) return e && !this.mouseChildren ? this : m;
            d.push(m)
          }
      }
      return null
    }, b._testMask = function (a, b, c) {
      var d = a.mask;
      if (!d || !d.graphics || d.graphics.isEmpty()) return !0;
      var e = this._props.matrix,
        f = a.parent;
      e = f ? f.getConcatenatedMatrix(e) : e.identity(), e = d.getMatrix(d._props.matrix).prependMatrix(e);
      var g = createjs.DisplayObject._hitTestContext;
      return g.setTransform(e.a, e.b, e.c, e.d, e.tx - b, e.ty - c), d.graphics.drawAsPath(g), g.fillStyle = "#000", g.fill(), this._testHit(g) ? (g.setTransform(1, 0, 0, 1, 0, 0), g.clearRect(0, 0, 2, 2), !0) : !1
    }, b._getBounds = function (a, b) {
      var c = this.DisplayObject_getBounds();
      if (c) return this._transformBounds(c, a, b);
      var d = this._props.matrix;
      d = b ? d.identity() : this.getMatrix(d), a && d.prependMatrix(a);
      for (var e = this.children.length, f = null, g = 0; e > g; g++) {
        var h = this.children[g];
        h.visible && (c = h._getBounds(d)) && (f ? f.extend(c.x, c.y, c.width, c.height) : f = c.clone())
      }
      return f
    }, createjs.Container = createjs.promote(a, "DisplayObject")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a) {
      this.Container_constructor(), this.autoClear = !0, this.canvas = "string" == typeof a ? document.getElementById(a) : a, this.mouseX = 0, this.mouseY = 0, this.drawRect = null, this.snapToPixelEnabled = !1, this.mouseInBounds = !1, this.tickOnUpdate = !0, this.mouseMoveOutside = !1, this.preventSelection = !0, this._pointerData = {}, this._pointerCount = 0, this._primaryPointerID = null, this._mouseOverIntervalID = null, this._nextStage = null, this._prevStage = null, this.enableDOMEvents(!0)
    }
    var b = createjs.extend(a, createjs.Container);
    b._get_nextStage = function () {
      return this._nextStage
    }, b._set_nextStage = function (a) {
      this._nextStage && (this._nextStage._prevStage = null), a && (a._prevStage = this), this._nextStage = a
    };
    try {
      Object.defineProperties(b, {
        nextStage: {
          get: b._get_nextStage,
          set: b._set_nextStage
        }
      })
    } catch (c) {}
    b.update = function (a) {
      if (this.canvas && (this.tickOnUpdate && this.tick(a), this.dispatchEvent("drawstart", !1, !0) !== !1)) {
        createjs.DisplayObject._snapToPixelEnabled = this.snapToPixelEnabled;
        var b = this.drawRect,
          c = this.canvas.getContext("2d");
        c.setTransform(1, 0, 0, 1, 0, 0), this.autoClear && (b ? c.clearRect(b.x, b.y, b.width, b.height) : c.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)), c.save(), this.drawRect && (c.beginPath(), c.rect(b.x, b.y, b.width, b.height), c.clip()), this.updateContext(c), this.draw(c, !1), c.restore(), this.dispatchEvent("drawend")
      }
    }, b.tick = function (a) {
      if (this.tickEnabled && this.dispatchEvent("tickstart", !1, !0) !== !1) {
        var b = new createjs.Event("tick");
        if (a)
          for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
        this._tick(b), this.dispatchEvent("tickend")
      }
    }, b.handleEvent = function (a) {
      "tick" == a.type && this.update(a)
    }, b.clear = function () {
      if (this.canvas) {
        var a = this.canvas.getContext("2d");
        a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)
      }
    }, b.toDataURL = function (a, b) {
      var c, d = this.canvas.getContext("2d"),
        e = this.canvas.width,
        f = this.canvas.height;
      if (a) {
        c = d.getImageData(0, 0, e, f);
        var g = d.globalCompositeOperation;
        d.globalCompositeOperation = "destination-over", d.fillStyle = a, d.fillRect(0, 0, e, f)
      }
      var h = this.canvas.toDataURL(b || "image/png");
      return a && (d.putImageData(c, 0, 0), d.globalCompositeOperation = g), h
    }, b.enableMouseOver = function (a) {
      if (this._mouseOverIntervalID && (clearInterval(this._mouseOverIntervalID), this._mouseOverIntervalID = null, 0 == a && this._testMouseOver(!0)), null == a) a = 20;
      else if (0 >= a) return;
      var b = this;
      this._mouseOverIntervalID = setInterval(function () {
        b._testMouseOver()
      }, 1e3 / Math.min(50, a))
    }, b.enableDOMEvents = function (a) {
      null == a && (a = !0);
      var b, c, d = this._eventListeners;
      if (!a && d) {
        for (b in d) c = d[b], c.t.removeEventListener(b, c.f, !1);
        this._eventListeners = null
      } else if (a && !d && this.canvas) {
        var e = window.addEventListener ? window : document,
          f = this;
        d = this._eventListeners = {}, d.mouseup = {
          t: e,
          f: function (a) {
            f._handleMouseUp(a)
          }
        }, d.mousemove = {
          t: e,
          f: function (a) {
            f._handleMouseMove(a)
          }
        }, d.dblclick = {
          t: this.canvas,
          f: function (a) {
            f._handleDoubleClick(a)
          }
        }, d.mousedown = {
          t: this.canvas,
          f: function (a) {
            f._handleMouseDown(a)
          }
        };
        for (b in d) c = d[b], c.t.addEventListener(b, c.f, !1)
      }
    }, b.clone = function () {
      throw "Stage cannot be cloned."
    }, b.toString = function () {
      return "[Stage (name=" + this.name + ")]"
    }, b._getElementRect = function (a) {
      var b;
      try {
        b = a.getBoundingClientRect()
      } catch (c) {
        b = {
          top: a.offsetTop,
          left: a.offsetLeft,
          width: a.offsetWidth,
          height: a.offsetHeight
        }
      }
      var d = (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || document.body.clientLeft || 0),
        e = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || document.body.clientTop || 0),
        f = window.getComputedStyle ? getComputedStyle(a, null) : a.currentStyle,
        g = parseInt(f.paddingLeft) + parseInt(f.borderLeftWidth),
        h = parseInt(f.paddingTop) + parseInt(f.borderTopWidth),
        i = parseInt(f.paddingRight) + parseInt(f.borderRightWidth),
        j = parseInt(f.paddingBottom) + parseInt(f.borderBottomWidth);
      return {
        left: b.left + d + g,
        right: b.right + d - i,
        top: b.top + e + h,
        bottom: b.bottom + e - j
      }
    }, b._getPointerData = function (a) {
      var b = this._pointerData[a];
      return b || (b = this._pointerData[a] = {
        x: 0,
        y: 0
      }), b
    }, b._handleMouseMove = function (a) {
      a || (a = window.event), this._handlePointerMove(-1, a, a.pageX, a.pageY)
    }, b._handlePointerMove = function (a, b, c, d, e) {
      if ((!this._prevStage || void 0 !== e) && this.canvas) {
        var f = this._nextStage,
          g = this._getPointerData(a),
          h = g.inBounds;
        this._updatePointerPosition(a, b, c, d), (h || g.inBounds || this.mouseMoveOutside) && (-1 === a && g.inBounds == !h && this._dispatchMouseEvent(this, h ? "mouseleave" : "mouseenter", !1, a, g, b), this._dispatchMouseEvent(this, "stagemousemove", !1, a, g, b), this._dispatchMouseEvent(g.target, "pressmove", !0, a, g, b)), f && f._handlePointerMove(a, b, c, d, null)
      }
    }, b._updatePointerPosition = function (a, b, c, d) {
      var e = this._getElementRect(this.canvas);
      c -= e.left, d -= e.top;
      var f = this.canvas.width,
        g = this.canvas.height;
      c /= (e.right - e.left) / f, d /= (e.bottom - e.top) / g;
      var h = this._getPointerData(a);
      (h.inBounds = c >= 0 && d >= 0 && f - 1 >= c && g - 1 >= d) ? (h.x = c, h.y = d) : this.mouseMoveOutside && (h.x = 0 > c ? 0 : c > f - 1 ? f - 1 : c, h.y = 0 > d ? 0 : d > g - 1 ? g - 1 : d), h.posEvtObj = b, h.rawX = c, h.rawY = d, (a === this._primaryPointerID || -1 === a) && (this.mouseX = h.x, this.mouseY = h.y, this.mouseInBounds = h.inBounds)
    }, b._handleMouseUp = function (a) {
      this._handlePointerUp(-1, a, !1)
    }, b._handlePointerUp = function (a, b, c, d) {
      var e = this._nextStage,
        f = this._getPointerData(a);
      if (!this._prevStage || void 0 !== d) {
        var g = null,
          h = f.target;
        d || !h && !e || (g = this._getObjectsUnderPoint(f.x, f.y, null, !0)), f.down && (this._dispatchMouseEvent(this, "stagemouseup", !1, a, f, b, g), f.down = !1), g == h && this._dispatchMouseEvent(h, "click", !0, a, f, b), this._dispatchMouseEvent(h, "pressup", !0, a, f, b), c ? (a == this._primaryPointerID && (this._primaryPointerID = null), delete this._pointerData[a]) : f.target = null, e && e._handlePointerUp(a, b, c, d || g && this)
      }
    }, b._handleMouseDown = function (a) {
      this._handlePointerDown(-1, a, a.pageX, a.pageY)
    }, b._handlePointerDown = function (a, b, c, d, e) {
      this.preventSelection && b.preventDefault(), (null == this._primaryPointerID || -1 === a) && (this._primaryPointerID = a), null != d && this._updatePointerPosition(a, b, c, d);
      var f = null,
        g = this._nextStage,
        h = this._getPointerData(a);
      e || (f = h.target = this._getObjectsUnderPoint(h.x, h.y, null, !0)), h.inBounds && (this._dispatchMouseEvent(this, "stagemousedown", !1, a, h, b, f), h.down = !0), this._dispatchMouseEvent(f, "mousedown", !0, a, h, b), g && g._handlePointerDown(a, b, c, d, e || f && this)
    }, b._testMouseOver = function (a, b, c) {
      if (!this._prevStage || void 0 !== b) {
        var d = this._nextStage;
        if (!this._mouseOverIntervalID) return void(d && d._testMouseOver(a, b, c));
        var e = this._getPointerData(-1);
        if (e && (a || this.mouseX != this._mouseOverX || this.mouseY != this._mouseOverY || !this.mouseInBounds)) {
          var f, g, h, i = e.posEvtObj,
            j = c || i && i.target == this.canvas,
            k = null,
            l = -1,
            m = "";
          !b && (a || this.mouseInBounds && j) && (k = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, !0), this._mouseOverX = this.mouseX, this._mouseOverY = this.mouseY);
          var n = this._mouseOverTarget || [],
            o = n[n.length - 1],
            p = this._mouseOverTarget = [];
          for (f = k; f;) p.unshift(f), m || (m = f.cursor), f = f.parent;
          for (this.canvas.style.cursor = m, !b && c && (c.canvas.style.cursor = m), g = 0, h = p.length; h > g && p[g] == n[g]; g++) l = g;
          for (o != k && this._dispatchMouseEvent(o, "mouseout", !0, -1, e, i, k), g = n.length - 1; g > l; g--) this._dispatchMouseEvent(n[g], "rollout", !1, -1, e, i, k);
          for (g = p.length - 1; g > l; g--) this._dispatchMouseEvent(p[g], "rollover", !1, -1, e, i, o);
          o != k && this._dispatchMouseEvent(k, "mouseover", !0, -1, e, i, o), d && d._testMouseOver(a, b || k && this, c || j && this)
        }
      }
    }, b._handleDoubleClick = function (a, b) {
      var c = null,
        d = this._nextStage,
        e = this._getPointerData(-1);
      b || (c = this._getObjectsUnderPoint(e.x, e.y, null, !0), this._dispatchMouseEvent(c, "dblclick", !0, -1, e, a)), d && d._handleDoubleClick(a, b || c && this)
    }, b._dispatchMouseEvent = function (a, b, c, d, e, f, g) {
      if (a && (c || a.hasEventListener(b))) {
        var h = new createjs.MouseEvent(b, c, !1, e.x, e.y, f, d, d === this._primaryPointerID || -1 === d, e.rawX, e.rawY, g);
        a.dispatchEvent(h)
      }
    }, createjs.Stage = createjs.promote(a, "Container")
  }(), this.createjs = this.createjs || {},
  function () {
    function a(a) {
      this.DisplayObject_constructor(), "string" == typeof a ? (this.image = document.createElement("img"), this.image.src = a) : this.image = a, this.sourceRect = null
    }
    var b = createjs.extend(a, createjs.DisplayObject);
    b.initialize = a, b.isVisible = function () {
      var a = this.image,
        b = this.cacheCanvas || a && (a.naturalWidth || a.getContext || a.readyState >= 2);
      return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && b)
    }, b.draw = function (a, b) {
      if (this.DisplayObject_draw(a, b) || !this.image) return !0;
      var c = this.image,
        d = this.sourceRect;
      if (d) {
        var e = d.x,
          f = d.y,
          g = e + d.width,
          h = f + d.height,
          i = 0,
          j = 0,
          k = c.width,
          l = c.height;
        0 > e && (i -= e, e = 0), g > k && (g = k), 0 > f && (j -= f, f = 0), h > l && (h = l), a.drawImage(c, e, f, g - e, h - f, i, j, g - e, h - f)
      } else a.drawImage(c, 0, 0);
      return !0
    }, b.getBounds = function () {
      var a = this.DisplayObject_getBounds();
      if (a) return a;
      var b = this.image,
        c = this.sourceRect || b,
        d = b && (b.naturalWidth || b.getContext || b.readyState >= 2);
      return d ? this._rectangle.setValues(0, 0, c.width, c.height) : null
    }, b.clone = function () {
      var b = new a(this.image);
      return this.sourceRect && (b.sourceRect = this.sourceRect.clone()), this._cloneProps(b), b
    }, b.toString = function () {
      return "[Bitmap (name=" + this.name + ")]"
    }, createjs.Bitmap = createjs.promote(a, "DisplayObject")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b) {
      this.DisplayObject_constructor(), this.currentFrame = 0, this.currentAnimation = null, this.paused = !0, this.spriteSheet = a, this.currentAnimationFrame = 0, this.framerate = 0, this._animation = null, this._currentFrame = null, this._skipAdvance = !1, null != b && this.gotoAndPlay(b)
    }
    var b = createjs.extend(a, createjs.DisplayObject);
    b.initialize = a, b.isVisible = function () {
      var a = this.cacheCanvas || this.spriteSheet.complete;
      return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && a)
    }, b.draw = function (a, b) {
      if (this.DisplayObject_draw(a, b)) return !0;
      this._normalizeFrame();
      var c = this.spriteSheet.getFrame(0 | this._currentFrame);
      if (!c) return !1;
      var d = c.rect;
      return d.width && d.height && a.drawImage(c.image, d.x, d.y, d.width, d.height, -c.regX, -c.regY, d.width, d.height), !0
    }, b.play = function () {
      this.paused = !1
    }, b.stop = function () {
      this.paused = !0
    }, b.gotoAndPlay = function (a) {
      this.paused = !1, this._skipAdvance = !0, this._goto(a)
    }, b.gotoAndStop = function (a) {
      this.paused = !0, this._goto(a)
    }, b.advance = function (a) {
      var b = this.framerate || this.spriteSheet.framerate,
        c = b && null != a ? a / (1e3 / b) : 1;
      this._normalizeFrame(c)
    }, b.getBounds = function () {
      return this.DisplayObject_getBounds() || this.spriteSheet.getFrameBounds(this.currentFrame, this._rectangle)
    }, b.clone = function () {
      return this._cloneProps(new a(this.spriteSheet))
    }, b.toString = function () {
      return "[Sprite (name=" + this.name + ")]"
    }, b._cloneProps = function (a) {
      return this.DisplayObject__cloneProps(a), a.currentFrame = this.currentFrame, a.currentAnimation = this.currentAnimation, a.paused = this.paused, a.currentAnimationFrame = this.currentAnimationFrame, a.framerate = this.framerate, a._animation = this._animation, a._currentFrame = this._currentFrame, a._skipAdvance = this._skipAdvance, a
    }, b._tick = function (a) {
      this.paused || (this._skipAdvance || this.advance(a && a.delta), this._skipAdvance = !1), this.DisplayObject__tick(a)
    }, b._normalizeFrame = function (a) {
      a = a || 0;
      var b, c = this._animation,
        d = this.paused,
        e = this._currentFrame;
      if (c) {
        var f = c.speed || 1,
          g = this.currentAnimationFrame;
        if (b = c.frames.length, g + a * f >= b) {
          var h = c.next;
          if (this._dispatchAnimationEnd(c, e, d, h, b - 1)) return;
          if (h) return this._goto(h, a - (b - g) / f);
          this.paused = !0, g = c.frames.length - 1
        } else g += a * f;
        this.currentAnimationFrame = g, this._currentFrame = c.frames[0 | g]
      } else if (e = this._currentFrame += a, b = this.spriteSheet.getNumFrames(), e >= b && b > 0 && !this._dispatchAnimationEnd(c, e, d, b - 1) && (this._currentFrame -= b) >= b) return this._normalizeFrame();
      e = 0 | this._currentFrame, this.currentFrame != e && (this.currentFrame = e, this.dispatchEvent("change"))
    }, b._dispatchAnimationEnd = function (a, b, c, d, e) {
      var f = a ? a.name : null;
      if (this.hasEventListener("animationend")) {
        var g = new createjs.Event("animationend");
        g.name = f, g.next = d, this.dispatchEvent(g)
      }
      var h = this._animation != a || this._currentFrame != b;
      return h || c || !this.paused || (this.currentAnimationFrame = e, h = !0), h
    }, b._goto = function (a, b) {
      if (this.currentAnimationFrame = 0, isNaN(a)) {
        var c = this.spriteSheet.getAnimation(a);
        c && (this._animation = c, this.currentAnimation = a, this._normalizeFrame(b))
      } else this.currentAnimation = this._animation = null, this._currentFrame = a, this._normalizeFrame()
    }, createjs.Sprite = createjs.promote(a, "DisplayObject")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a) {
      this.DisplayObject_constructor(), this.graphics = a ? a : new createjs.Graphics
    }
    var b = createjs.extend(a, createjs.DisplayObject);
    b.isVisible = function () {
      var a = this.cacheCanvas || this.graphics && !this.graphics.isEmpty();
      return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && a)
    }, b.draw = function (a, b) {
      return this.DisplayObject_draw(a, b) ? !0 : (this.graphics.draw(a, this), !0)
    }, b.clone = function (b) {
      var c = b && this.graphics ? this.graphics.clone() : this.graphics;
      return this._cloneProps(new a(c))
    }, b.toString = function () {
      return "[Shape (name=" + this.name + ")]"
    }, createjs.Shape = createjs.promote(a, "DisplayObject")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b, c) {
      this.DisplayObject_constructor(), this.text = a, this.font = b, this.color = c, this.textAlign = "left", this.textBaseline = "top", this.maxWidth = null, this.outline = 0, this.lineHeight = 0, this.lineWidth = null
    }
    var b = createjs.extend(a, createjs.DisplayObject),
      c = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
    c.getContext && (a._workingContext = c.getContext("2d"), c.width = c.height = 1), a.H_OFFSETS = {
      start: 0,
      left: 0,
      center: -.5,
      end: -1,
      right: -1
    }, a.V_OFFSETS = {
      top: 0,
      hanging: -.01,
      middle: -.4,
      alphabetic: -.8,
      ideographic: -.85,
      bottom: -1
    }, b.isVisible = function () {
      var a = this.cacheCanvas || null != this.text && "" !== this.text;
      return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && a)
    }, b.draw = function (a, b) {
      if (this.DisplayObject_draw(a, b)) return !0;
      var c = this.color || "#000";
      return this.outline ? (a.strokeStyle = c, a.lineWidth = 1 * this.outline) : a.fillStyle = c, this._drawText(this._prepContext(a)), !0
    }, b.getMeasuredWidth = function () {
      return this._getMeasuredWidth(this.text)
    }, b.getMeasuredLineHeight = function () {
      return 1.2 * this._getMeasuredWidth("M")
    }, b.getMeasuredHeight = function () {
      return this._drawText(null, {}).height
    }, b.getBounds = function () {
      var b = this.DisplayObject_getBounds();
      if (b) return b;
      if (null == this.text || "" === this.text) return null;
      var c = this._drawText(null, {}),
        d = this.maxWidth && this.maxWidth < c.width ? this.maxWidth : c.width,
        e = d * a.H_OFFSETS[this.textAlign || "left"],
        f = this.lineHeight || this.getMeasuredLineHeight(),
        g = f * a.V_OFFSETS[this.textBaseline || "top"];
      return this._rectangle.setValues(e, g, d, c.height)
    }, b.getMetrics = function () {
      var b = {
        lines: []
      };
      return b.lineHeight = this.lineHeight || this.getMeasuredLineHeight(), b.vOffset = b.lineHeight * a.V_OFFSETS[this.textBaseline || "top"], this._drawText(null, b, b.lines)
    }, b.clone = function () {
      return this._cloneProps(new a(this.text, this.font, this.color))
    }, b.toString = function () {
      return "[Text (text=" + (this.text.length > 20 ? this.text.substr(0, 17) + "..." : this.text) + ")]"
    }, b._cloneProps = function (a) {
      return this.DisplayObject__cloneProps(a), a.textAlign = this.textAlign, a.textBaseline = this.textBaseline, a.maxWidth = this.maxWidth, a.outline = this.outline, a.lineHeight = this.lineHeight, a.lineWidth = this.lineWidth, a
    }, b._prepContext = function (a) {
      return a.font = this.font || "10px sans-serif", a.textAlign = this.textAlign || "left", a.textBaseline = this.textBaseline || "top", a
    }, b._drawText = function (b, c, d) {
      var e = !!b;
      e || (b = a._workingContext, b.save(), this._prepContext(b));
      for (var f = this.lineHeight || this.getMeasuredLineHeight(), g = 0, h = 0, i = String(this.text).split(/(?:\r\n|\r|\n)/), j = 0, k = i.length; k > j; j++) {
        var l = i[j],
          m = null;
        if (null != this.lineWidth && (m = b.measureText(l).width) > this.lineWidth) {
          var n = l.split(/(\s)/);
          l = n[0], m = b.measureText(l).width;
          for (var o = 1, p = n.length; p > o; o += 2) {
            var q = b.measureText(n[o] + n[o + 1]).width;
            m + q > this.lineWidth ? (e && this._drawTextLine(b, l, h * f), d && d.push(l), m > g && (g = m), l = n[o + 1], m = b.measureText(l).width, h++) : (l += n[o] + n[o + 1], m += q)
          }
        }
        e && this._drawTextLine(b, l, h * f), d && d.push(l), c && null == m && (m = b.measureText(l).width), m > g && (g = m), h++
      }
      return c && (c.width = g, c.height = h * f), e || b.restore(), c
    }, b._drawTextLine = function (a, b, c) {
      this.outline ? a.strokeText(b, 0, c, this.maxWidth || 65535) : a.fillText(b, 0, c, this.maxWidth || 65535)
    }, b._getMeasuredWidth = function (b) {
      var c = a._workingContext;
      c.save();
      var d = this._prepContext(c).measureText(b).width;
      return c.restore(), d
    }, createjs.Text = createjs.promote(a, "DisplayObject")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b) {
      this.Container_constructor(), this.text = a || "", this.spriteSheet = b, this.lineHeight = 0, this.letterSpacing = 0, this.spaceWidth = 0, this._oldProps = {
        text: 0,
        spriteSheet: 0,
        lineHeight: 0,
        letterSpacing: 0,
        spaceWidth: 0
      }
    }
    var b = createjs.extend(a, createjs.Container);
    a.maxPoolSize = 100, a._spritePool = [], b.draw = function (a, b) {
      this.DisplayObject_draw(a, b) || (this._updateText(), this.Container_draw(a, b))
    }, b.getBounds = function () {
      return this._updateText(), this.Container_getBounds()
    }, b.isVisible = function () {
      var a = this.cacheCanvas || this.spriteSheet && this.spriteSheet.complete && this.text;
      return !!(this.visible && this.alpha > 0 && 0 !== this.scaleX && 0 !== this.scaleY && a)
    }, b.clone = function () {
      return this._cloneProps(new a(this.text, this.spriteSheet))
    }, b.addChild = b.addChildAt = b.removeChild = b.removeChildAt = b.removeAllChildren = function () {}, b._cloneProps = function (a) {
      return this.Container__cloneProps(a), a.lineHeight = this.lineHeight, a.letterSpacing = this.letterSpacing, a.spaceWidth = this.spaceWidth, a
    }, b._getFrameIndex = function (a, b) {
      var c, d = b.getAnimation(a);
      return d || (a != (c = a.toUpperCase()) || a != (c = a.toLowerCase()) || (c = null), c && (d = b.getAnimation(c))), d && d.frames[0]
    }, b._getFrame = function (a, b) {
      var c = this._getFrameIndex(a, b);
      return null == c ? c : b.getFrame(c)
    }, b._getLineHeight = function (a) {
      var b = this._getFrame("1", a) || this._getFrame("T", a) || this._getFrame("L", a) || a.getFrame(0);
      return b ? b.rect.height : 1
    }, b._getSpaceWidth = function (a) {
      var b = this._getFrame("1", a) || this._getFrame("l", a) || this._getFrame("e", a) || this._getFrame("a", a) || a.getFrame(0);
      return b ? b.rect.width : 1
    }, b._updateText = function () {
      var b, c = 0,
        d = 0,
        e = this._oldProps,
        f = !1,
        g = this.spaceWidth,
        h = this.lineHeight,
        i = this.spriteSheet,
        j = a._spritePool,
        k = this.children,
        l = 0,
        m = k.length;
      for (var n in e) e[n] != this[n] && (e[n] = this[n], f = !0);
      if (f) {
        var o = !!this._getFrame(" ", i);
        o || g || (g = this._getSpaceWidth(i)), h || (h = this._getLineHeight(i));
        for (var p = 0, q = this.text.length; q > p; p++) {
          var r = this.text.charAt(p);
          if (" " != r || o)
            if ("\n" != r && "\r" != r) {
              var s = this._getFrameIndex(r, i);
              null != s && (m > l ? b = k[l] : (k.push(b = j.length ? j.pop() : new createjs.Sprite), b.parent = this, m++), b.spriteSheet = i, b.gotoAndStop(s), b.x = c, b.y = d, l++, c += b.getBounds().width + this.letterSpacing)
            } else "\r" == r && "\n" == this.text.charAt(p + 1) && p++, c = 0, d += h;
          else c += g
        }
        for (; m > l;) j.push(b = k.pop()), b.parent = null, m--;
        j.length > a.maxPoolSize && (j.length = a.maxPoolSize)
      }
    }, createjs.BitmapText = createjs.promote(a, "Container")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(b, c, d, e) {
      this.Container_constructor(), !a.inited && a.init(), this.mode = b || a.INDEPENDENT, this.startPosition = c || 0, this.loop = d, this.currentFrame = 0, this.timeline = new createjs.Timeline(null, e, {
        paused: !0,
        position: c,
        useTicks: !0
      }), this.paused = !1, this.actionsEnabled = !0, this.autoReset = !0, this.frameBounds = this.frameBounds || null, this.framerate = null, this._synchOffset = 0, this._prevPos = -1, this._prevPosition = 0, this._t = 0, this._managed = {}
    }

    function b() {
      throw "MovieClipPlugin cannot be instantiated."
    }
    var c = createjs.extend(a, createjs.Container);
    a.INDEPENDENT = "independent", a.SINGLE_FRAME = "single", a.SYNCHED = "synched", a.inited = !1, a.init = function () {
      a.inited || (b.install(), a.inited = !0)
    }, c.getLabels = function () {
      return this.timeline.getLabels()
    }, c.getCurrentLabel = function () {
      return this._updateTimeline(), this.timeline.getCurrentLabel()
    }, c.getDuration = function () {
      return this.timeline.duration;
    };
    try {
      Object.defineProperties(c, {
        labels: {
          get: c.getLabels
        },
        currentLabel: {
          get: c.getCurrentLabel
        },
        totalFrames: {
          get: c.getDuration
        },
        duration: {
          get: c.getDuration
        }
      })
    } catch (d) {}
    c.initialize = a, c.isVisible = function () {
      return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY)
    }, c.draw = function (a, b) {
      return this.DisplayObject_draw(a, b) ? !0 : (this._updateTimeline(), this.Container_draw(a, b), !0)
    }, c.play = function () {
      this.paused = !1
    }, c.stop = function () {
      this.paused = !0
    }, c.gotoAndPlay = function (a) {
      this.paused = !1, this._goto(a)
    }, c.gotoAndStop = function (a) {
      this.paused = !0, this._goto(a)
    }, c.advance = function (b) {
      var c = a.INDEPENDENT;
      if (this.mode == c) {
        for (var d = this, e = d.framerate;
          (d = d.parent) && null == e;) d.mode == c && (e = d._framerate);
        this._framerate = e;
        var f = null != e && -1 != e && null != b ? b / (1e3 / e) + this._t : 1,
          g = 0 | f;
        for (this._t = f - g; !this.paused && g--;) this._prevPosition = this._prevPos < 0 ? 0 : this._prevPosition + 1, this._updateTimeline()
      }
    }, c.clone = function () {
      throw "MovieClip cannot be cloned."
    }, c.toString = function () {
      return "[MovieClip (name=" + this.name + ")]"
    }, c._tick = function (a) {
      this.advance(a && a.delta), this.Container__tick(a)
    }, c._goto = function (a) {
      var b = this.timeline.resolve(a);
      null != b && (-1 == this._prevPos && (this._prevPos = NaN), this._prevPosition = b, this._t = 0, this._updateTimeline())
    }, c._reset = function () {
      this._prevPos = -1, this._t = this.currentFrame = 0, this.paused = !1
    }, c._updateTimeline = function () {
      var b = this.timeline,
        c = this.mode != a.INDEPENDENT;
      b.loop = null == this.loop ? !0 : this.loop;
      var d = c ? this.startPosition + (this.mode == a.SINGLE_FRAME ? 0 : this._synchOffset) : this._prevPos < 0 ? 0 : this._prevPosition,
        e = c || !this.actionsEnabled ? createjs.Tween.NONE : null;
      if (this.currentFrame = b._calcPosition(d), b.setPosition(d, e), this._prevPosition = b._prevPosition, this._prevPos != b._prevPos) {
        this.currentFrame = this._prevPos = b._prevPos;
        for (var f in this._managed) this._managed[f] = 1;
        for (var g = b._tweens, h = 0, i = g.length; i > h; h++) {
          var j = g[h],
            k = j._target;
          if (k != this && !j.passive) {
            var l = j._stepPosition;
            k instanceof createjs.DisplayObject ? this._addManagedChild(k, l) : this._setState(k.state, l)
          }
        }
        var m = this.children;
        for (h = m.length - 1; h >= 0; h--) {
          var n = m[h].id;
          1 == this._managed[n] && (this.removeChildAt(h), delete this._managed[n])
        }
      }
    }, c._setState = function (a, b) {
      if (a)
        for (var c = a.length - 1; c >= 0; c--) {
          var d = a[c],
            e = d.t,
            f = d.p;
          for (var g in f) e[g] = f[g];
          this._addManagedChild(e, b)
        }
    }, c._addManagedChild = function (b, c) {
      b._off || (this.addChildAt(b, 0), b instanceof a && (b._synchOffset = c, b.mode == a.INDEPENDENT && b.autoReset && !this._managed[b.id] && b._reset()), this._managed[b.id] = 2)
    }, c._getBounds = function (a, b) {
      var c = this.DisplayObject_getBounds();
      return c || (this._updateTimeline(), this.frameBounds && (c = this._rectangle.copy(this.frameBounds[this.currentFrame]))), c ? this._transformBounds(c, a, b) : this.Container__getBounds(a, b)
    }, createjs.MovieClip = createjs.promote(a, "Container"), b.priority = 100, b.install = function () {
      createjs.Tween.installPlugin(b, ["startPosition"])
    }, b.init = function (a, b, c) {
      return c
    }, b.step = function () {}, b.tween = function (b, c, d, e, f, g, h, i) {
      return b.target instanceof a ? 1 == g ? f[c] : e[c] : d
    }
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a() {
      throw "SpriteSheetUtils cannot be instantiated"
    }
    var b = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
    b.getContext && (a._workingCanvas = b, a._workingContext = b.getContext("2d"), b.width = b.height = 1), a.addFlippedFrames = function (b, c, d, e) {
      if (c || d || e) {
        var f = 0;
        c && a._flip(b, ++f, !0, !1), d && a._flip(b, ++f, !1, !0), e && a._flip(b, ++f, !0, !0)
      }
    }, a.extractFrame = function (b, c) {
      isNaN(c) && (c = b.getAnimation(c).frames[0]);
      var d = b.getFrame(c);
      if (!d) return null;
      var e = d.rect,
        f = a._workingCanvas;
      f.width = e.width, f.height = e.height, a._workingContext.drawImage(d.image, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height);
      var g = document.createElement("img");
      return g.src = f.toDataURL("image/png"), g
    }, a.mergeAlpha = function (a, b, c) {
      c || (c = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")), c.width = Math.max(b.width, a.width), c.height = Math.max(b.height, a.height);
      var d = c.getContext("2d");
      return d.save(), d.drawImage(a, 0, 0), d.globalCompositeOperation = "destination-in", d.drawImage(b, 0, 0), d.restore(), c
    }, a._flip = function (b, c, d, e) {
      for (var f = b._images, g = a._workingCanvas, h = a._workingContext, i = f.length / c, j = 0; i > j; j++) {
        var k = f[j];
        k.__tmp = j, h.setTransform(1, 0, 0, 1, 0, 0), h.clearRect(0, 0, g.width + 1, g.height + 1), g.width = k.width, g.height = k.height, h.setTransform(d ? -1 : 1, 0, 0, e ? -1 : 1, d ? k.width : 0, e ? k.height : 0), h.drawImage(k, 0, 0);
        var l = document.createElement("img");
        l.src = g.toDataURL("image/png"), l.width = k.width, l.height = k.height, f.push(l)
      }
      var m = b._frames,
        n = m.length / c;
      for (j = 0; n > j; j++) {
        k = m[j];
        var o = k.rect.clone();
        l = f[k.image.__tmp + i * c];
        var p = {
          image: l,
          rect: o,
          regX: k.regX,
          regY: k.regY
        };
        d && (o.x = l.width - o.x - o.width, p.regX = o.width - k.regX), e && (o.y = l.height - o.y - o.height, p.regY = o.height - k.regY), m.push(p)
      }
      var q = "_" + (d ? "h" : "") + (e ? "v" : ""),
        r = b._animations,
        s = b._data,
        t = r.length / c;
      for (j = 0; t > j; j++) {
        var u = r[j];
        k = s[u];
        var v = {
          name: u + q,
          speed: k.speed,
          next: k.next,
          frames: []
        };
        k.next && (v.next += q), m = k.frames;
        for (var w = 0, x = m.length; x > w; w++) v.frames.push(m[w] + n * c);
        s[v.name] = v, r.push(v.name)
      }
    }, createjs.SpriteSheetUtils = a
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a) {
      this.EventDispatcher_constructor(), this.maxWidth = 2048, this.maxHeight = 2048, this.spriteSheet = null, this.scale = 1, this.padding = 1, this.timeSlice = .3, this.progress = -1, this.framerate = a || 0, this._frames = [], this._animations = {}, this._data = null, this._nextFrameIndex = 0, this._index = 0, this._timerID = null, this._scale = 1
    }
    var b = createjs.extend(a, createjs.EventDispatcher);
    a.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions", a.ERR_RUNNING = "a build is already running", b.addFrame = function (b, c, d, e, f) {
      if (this._data) throw a.ERR_RUNNING;
      var g = c || b.bounds || b.nominalBounds;
      return !g && b.getBounds && (g = b.getBounds()), g ? (d = d || 1, this._frames.push({
        source: b,
        sourceRect: g,
        scale: d,
        funct: e,
        data: f,
        index: this._frames.length,
        height: g.height * d
      }) - 1) : null
    }, b.addAnimation = function (b, c, d, e) {
      if (this._data) throw a.ERR_RUNNING;
      this._animations[b] = {
        frames: c,
        next: d,
        speed: e
      }
    }, b.addMovieClip = function (b, c, d, e, f, g) {
      if (this._data) throw a.ERR_RUNNING;
      var h = b.frameBounds,
        i = c || b.bounds || b.nominalBounds;
      if (!i && b.getBounds && (i = b.getBounds()), i || h) {
        var j, k, l = this._frames.length,
          m = b.timeline.duration;
        for (j = 0; m > j; j++) {
          var n = h && h[j] ? h[j] : i;
          this.addFrame(b, n, d, this._setupMovieClipFrame, {
            i: j,
            f: e,
            d: f
          })
        }
        var o = b.timeline._labels,
          p = [];
        for (var q in o) p.push({
          index: o[q],
          label: q
        });
        if (p.length)
          for (p.sort(function (a, b) {
              return a.index - b.index
            }), j = 0, k = p.length; k > j; j++) {
            for (var r = p[j].label, s = l + p[j].index, t = l + (j == k - 1 ? m : p[j + 1].index), u = [], v = s; t > v; v++) u.push(v);
            (!g || (r = g(r, b, s, t))) && this.addAnimation(r, u, !0)
          }
      }
    }, b.build = function () {
      if (this._data) throw a.ERR_RUNNING;
      for (this._startBuild(); this._drawNext(););
      return this._endBuild(), this.spriteSheet
    }, b.buildAsync = function (b) {
      if (this._data) throw a.ERR_RUNNING;
      this.timeSlice = b, this._startBuild();
      var c = this;
      this._timerID = setTimeout(function () {
        c._run()
      }, 50 - 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)))
    }, b.stopAsync = function () {
      clearTimeout(this._timerID), this._data = null
    }, b.clone = function () {
      throw "SpriteSheetBuilder cannot be cloned."
    }, b.toString = function () {
      return "[SpriteSheetBuilder]"
    }, b._startBuild = function () {
      var b = this.padding || 0;
      this.progress = 0, this.spriteSheet = null, this._index = 0, this._scale = this.scale;
      var c = [];
      this._data = {
        images: [],
        frames: c,
        framerate: this.framerate,
        animations: this._animations
      };
      var d = this._frames.slice();
      if (d.sort(function (a, b) {
          return a.height <= b.height ? -1 : 1
        }), d[d.length - 1].height + 2 * b > this.maxHeight) throw a.ERR_DIMENSIONS;
      for (var e = 0, f = 0, g = 0; d.length;) {
        var h = this._fillRow(d, e, g, c, b);
        if (h.w > f && (f = h.w), e += h.h, !h.h || !d.length) {
          var i = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
          i.width = this._getSize(f, this.maxWidth), i.height = this._getSize(e, this.maxHeight), this._data.images[g] = i, h.h || (f = e = 0, g++)
        }
      }
    }, b._setupMovieClipFrame = function (a, b) {
      var c = a.actionsEnabled;
      a.actionsEnabled = !1, a.gotoAndStop(b.i), a.actionsEnabled = c, b.f && b.f(a, b.d, b.i)
    }, b._getSize = function (a, b) {
      for (var c = 4; Math.pow(2, ++c) < a;);
      return Math.min(b, Math.pow(2, c))
    }, b._fillRow = function (b, c, d, e, f) {
      var g = this.maxWidth,
        h = this.maxHeight;
      c += f;
      for (var i = h - c, j = f, k = 0, l = b.length - 1; l >= 0; l--) {
        var m = b[l],
          n = this._scale * m.scale,
          o = m.sourceRect,
          p = m.source,
          q = Math.floor(n * o.x - f),
          r = Math.floor(n * o.y - f),
          s = Math.ceil(n * o.height + 2 * f),
          t = Math.ceil(n * o.width + 2 * f);
        if (t > g) throw a.ERR_DIMENSIONS;
        s > i || j + t > g || (m.img = d, m.rect = new createjs.Rectangle(j, c, t, s), k = k || s, b.splice(l, 1), e[m.index] = [j, c, t, s, d, Math.round(-q + n * p.regX - f), Math.round(-r + n * p.regY - f)], j += t)
      }
      return {
        w: j,
        h: k
      }
    }, b._endBuild = function () {
      this.spriteSheet = new createjs.SpriteSheet(this._data), this._data = null, this.progress = 1, this.dispatchEvent("complete")
    }, b._run = function () {
      for (var a = 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)), b = (new Date).getTime() + a, c = !1; b > (new Date).getTime();)
        if (!this._drawNext()) {
          c = !0;
          break
        }
      if (c) this._endBuild();
      else {
        var d = this;
        this._timerID = setTimeout(function () {
          d._run()
        }, 50 - a)
      }
      var e = this.progress = this._index / this._frames.length;
      if (this.hasEventListener("progress")) {
        var f = new createjs.Event("progress");
        f.progress = e, this.dispatchEvent(f)
      }
    }, b._drawNext = function () {
      var a = this._frames[this._index],
        b = a.scale * this._scale,
        c = a.rect,
        d = a.sourceRect,
        e = this._data.images[a.img],
        f = e.getContext("2d");
      return a.funct && a.funct(a.source, a.data), f.save(), f.beginPath(), f.rect(c.x, c.y, c.width, c.height), f.clip(), f.translate(Math.ceil(c.x - d.x * b), Math.ceil(c.y - d.y * b)), f.scale(b, b), a.source.draw(f), f.restore(), ++this._index < this._frames.length
    }, createjs.SpriteSheetBuilder = createjs.promote(a, "EventDispatcher")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a) {
      this.DisplayObject_constructor(), "string" == typeof a && (a = document.getElementById(a)), this.mouseEnabled = !1;
      var b = a.style;
      b.position = "absolute", b.transformOrigin = b.WebkitTransformOrigin = b.msTransformOrigin = b.MozTransformOrigin = b.OTransformOrigin = "0% 0%", this.htmlElement = a, this._oldProps = null
    }
    var b = createjs.extend(a, createjs.DisplayObject);
    b.isVisible = function () {
      return null != this.htmlElement
    }, b.draw = function (a, b) {
      return !0
    }, b.cache = function () {}, b.uncache = function () {}, b.updateCache = function () {}, b.hitTest = function () {}, b.localToGlobal = function () {}, b.globalToLocal = function () {}, b.localToLocal = function () {}, b.clone = function () {
      throw "DOMElement cannot be cloned."
    }, b.toString = function () {
      return "[DOMElement (name=" + this.name + ")]"
    }, b._tick = function (a) {
      var b = this.getStage();
      b && b.on("drawend", this._handleDrawEnd, this, !0), this.DisplayObject__tick(a)
    }, b._handleDrawEnd = function (a) {
      var b = this.htmlElement;
      if (b) {
        var c = b.style,
          d = this.getConcatenatedDisplayProps(this._props),
          e = d.matrix,
          f = d.visible ? "visible" : "hidden";
        if (f != c.visibility && (c.visibility = f), d.visible) {
          var g = this._oldProps,
            h = g && g.matrix,
            i = 1e4;
          if (!h || !h.equals(e)) {
            var j = "matrix(" + (e.a * i | 0) / i + "," + (e.b * i | 0) / i + "," + (e.c * i | 0) / i + "," + (e.d * i | 0) / i + "," + (e.tx + .5 | 0);
            c.transform = c.WebkitTransform = c.OTransform = c.msTransform = j + "," + (e.ty + .5 | 0) + ")", c.MozTransform = j + "px," + (e.ty + .5 | 0) + "px)", g || (g = this._oldProps = new createjs.DisplayProps(!0, NaN)), g.matrix.copy(e)
          }
          g.alpha != d.alpha && (c.opacity = "" + (d.alpha * i | 0) / i, g.alpha = d.alpha)
        }
      }
    }, createjs.DOMElement = createjs.promote(a, "DisplayObject")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a() {}
    var b = a.prototype;
    b.getBounds = function (a) {
      return a
    }, b.applyFilter = function (a, b, c, d, e, f, g, h) {
      f = f || a, null == g && (g = b), null == h && (h = c);
      try {
        var i = a.getImageData(b, c, d, e)
      } catch (j) {
        return !1
      }
      return this._applyFilter(i) ? (f.putImageData(i, g, h), !0) : !1
    }, b.toString = function () {
      return "[Filter]"
    }, b.clone = function () {
      return new a
    }, b._applyFilter = function (a) {
      return !0
    }, createjs.Filter = a
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b, c) {
      (isNaN(a) || 0 > a) && (a = 0), (isNaN(b) || 0 > b) && (b = 0), (isNaN(c) || 1 > c) && (c = 1), this.blurX = 0 | a, this.blurY = 0 | b, this.quality = 0 | c
    }
    var b = createjs.extend(a, createjs.Filter);
    a.MUL_TABLE = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1], a.SHG_TABLE = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9], b.getBounds = function (a) {
      var b = 0 | this.blurX,
        c = 0 | this.blurY;
      if (0 >= b && 0 >= c) return a;
      var d = Math.pow(this.quality, .2);
      return (a || new createjs.Rectangle).pad(b * d + 1, c * d + 1, b * d + 1, c * d + 1)
    }, b.clone = function () {
      return new a(this.blurX, this.blurY, this.quality)
    }, b.toString = function () {
      return "[BlurFilter]"
    }, b._applyFilter = function (b) {
      var c = this.blurX >> 1;
      if (isNaN(c) || 0 > c) return !1;
      var d = this.blurY >> 1;
      if (isNaN(d) || 0 > d) return !1;
      if (0 == c && 0 == d) return !1;
      var e = this.quality;
      (isNaN(e) || 1 > e) && (e = 1), e |= 0, e > 3 && (e = 3), 1 > e && (e = 1);
      var f = b.data,
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = 0,
        v = c + c + 1 | 0,
        w = d + d + 1 | 0,
        x = 0 | b.width,
        y = 0 | b.height,
        z = x - 1 | 0,
        A = y - 1 | 0,
        B = c + 1 | 0,
        C = d + 1 | 0,
        D = {
          r: 0,
          b: 0,
          g: 0,
          a: 0
        },
        E = D;
      for (i = 1; v > i; i++) E = E.n = {
        r: 0,
        b: 0,
        g: 0,
        a: 0
      };
      E.n = D;
      var F = {
          r: 0,
          b: 0,
          g: 0,
          a: 0
        },
        G = F;
      for (i = 1; w > i; i++) G = G.n = {
        r: 0,
        b: 0,
        g: 0,
        a: 0
      };
      G.n = F;
      for (var H = null, I = 0 | a.MUL_TABLE[c], J = 0 | a.SHG_TABLE[c], K = 0 | a.MUL_TABLE[d], L = 0 | a.SHG_TABLE[d]; e-- > 0;) {
        m = l = 0;
        var M = I,
          N = J;
        for (h = y; --h > -1;) {
          for (n = B * (r = f[0 | l]), o = B * (s = f[l + 1 | 0]), p = B * (t = f[l + 2 | 0]), q = B * (u = f[l + 3 | 0]), E = D, i = B; --i > -1;) E.r = r, E.g = s, E.b = t, E.a = u, E = E.n;
          for (i = 1; B > i; i++) j = l + ((i > z ? z : i) << 2) | 0, n += E.r = f[j], o += E.g = f[j + 1], p += E.b = f[j + 2], q += E.a = f[j + 3], E = E.n;
          for (H = D, g = 0; x > g; g++) f[l++] = n * M >>> N, f[l++] = o * M >>> N, f[l++] = p * M >>> N, f[l++] = q * M >>> N, j = m + ((j = g + c + 1) < z ? j : z) << 2, n -= H.r - (H.r = f[j]), o -= H.g - (H.g = f[j + 1]), p -= H.b - (H.b = f[j + 2]), q -= H.a - (H.a = f[j + 3]), H = H.n;
          m += x
        }
        for (M = K, N = L, g = 0; x > g; g++) {
          for (l = g << 2 | 0, n = C * (r = f[l]) | 0, o = C * (s = f[l + 1 | 0]) | 0, p = C * (t = f[l + 2 | 0]) | 0, q = C * (u = f[l + 3 | 0]) | 0, G = F, i = 0; C > i; i++) G.r = r, G.g = s, G.b = t, G.a = u, G = G.n;
          for (k = x, i = 1; d >= i; i++) l = k + g << 2, n += G.r = f[l], o += G.g = f[l + 1], p += G.b = f[l + 2], q += G.a = f[l + 3], G = G.n, A > i && (k += x);
          if (l = g, H = F, e > 0)
            for (h = 0; y > h; h++) j = l << 2, f[j + 3] = u = q * M >>> N, u > 0 ? (f[j] = n * M >>> N, f[j + 1] = o * M >>> N, f[j + 2] = p * M >>> N) : f[j] = f[j + 1] = f[j + 2] = 0, j = g + ((j = h + C) < A ? j : A) * x << 2, n -= H.r - (H.r = f[j]), o -= H.g - (H.g = f[j + 1]), p -= H.b - (H.b = f[j + 2]), q -= H.a - (H.a = f[j + 3]), H = H.n, l += x;
          else
            for (h = 0; y > h; h++) j = l << 2, f[j + 3] = u = q * M >>> N, u > 0 ? (u = 255 / u, f[j] = (n * M >>> N) * u, f[j + 1] = (o * M >>> N) * u, f[j + 2] = (p * M >>> N) * u) : f[j] = f[j + 1] = f[j + 2] = 0, j = g + ((j = h + C) < A ? j : A) * x << 2, n -= H.r - (H.r = f[j]), o -= H.g - (H.g = f[j + 1]), p -= H.b - (H.b = f[j + 2]), q -= H.a - (H.a = f[j + 3]), H = H.n, l += x
        }
      }
      return !0
    }, createjs.BlurFilter = createjs.promote(a, "Filter")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a) {
      this.alphaMap = a, this._alphaMap = null, this._mapData = null
    }
    var b = createjs.extend(a, createjs.Filter);
    b.clone = function () {
      var b = new a(this.alphaMap);
      return b._alphaMap = this._alphaMap, b._mapData = this._mapData, b
    }, b.toString = function () {
      return "[AlphaMapFilter]"
    }, b._applyFilter = function (a) {
      if (!this.alphaMap) return !0;
      if (!this._prepAlphaMap()) return !1;
      for (var b = a.data, c = this._mapData, d = 0, e = b.length; e > d; d += 4) b[d + 3] = c[d] || 0;
      return !0
    }, b._prepAlphaMap = function () {
      if (!this.alphaMap) return !1;
      if (this.alphaMap == this._alphaMap && this._mapData) return !0;
      this._mapData = null;
      var a, b = this._alphaMap = this.alphaMap,
        c = b;
      b instanceof HTMLCanvasElement ? a = c.getContext("2d") : (c = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas"), c.width = b.width, c.height = b.height, a = c.getContext("2d"), a.drawImage(b, 0, 0));
      try {
        var d = a.getImageData(0, 0, b.width, b.height)
      } catch (e) {
        return !1
      }
      return this._mapData = d.data, !0
    }, createjs.AlphaMapFilter = createjs.promote(a, "Filter")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a) {
      this.mask = a
    }
    var b = createjs.extend(a, createjs.Filter);
    b.applyFilter = function (a, b, c, d, e, f, g, h) {
      return this.mask ? (f = f || a, null == g && (g = b), null == h && (h = c), f.save(), a != f ? !1 : (f.globalCompositeOperation = "destination-in", f.drawImage(this.mask, g, h), f.restore(), !0)) : !0
    }, b.clone = function () {
      return new a(this.mask)
    }, b.toString = function () {
      return "[AlphaMaskFilter]"
    }, createjs.AlphaMaskFilter = createjs.promote(a, "Filter")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b, c, d, e, f, g, h) {
      this.redMultiplier = null != a ? a : 1, this.greenMultiplier = null != b ? b : 1, this.blueMultiplier = null != c ? c : 1, this.alphaMultiplier = null != d ? d : 1, this.redOffset = e || 0, this.greenOffset = f || 0, this.blueOffset = g || 0, this.alphaOffset = h || 0
    }
    var b = createjs.extend(a, createjs.Filter);
    b.toString = function () {
      return "[ColorFilter]"
    }, b.clone = function () {
      return new a(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset, this.alphaOffset)
    }, b._applyFilter = function (a) {
      for (var b = a.data, c = b.length, d = 0; c > d; d += 4) b[d] = b[d] * this.redMultiplier + this.redOffset, b[d + 1] = b[d + 1] * this.greenMultiplier + this.greenOffset, b[d + 2] = b[d + 2] * this.blueMultiplier + this.blueOffset, b[d + 3] = b[d + 3] * this.alphaMultiplier + this.alphaOffset;
      return !0
    }, createjs.ColorFilter = createjs.promote(a, "Filter")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b, c, d) {
      this.setColor(a, b, c, d)
    }
    var b = a.prototype;
    a.DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10], a.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], a.LENGTH = a.IDENTITY_MATRIX.length, b.setColor = function (a, b, c, d) {
      return this.reset().adjustColor(a, b, c, d)
    }, b.reset = function () {
      return this.copy(a.IDENTITY_MATRIX)
    }, b.adjustColor = function (a, b, c, d) {
      return this.adjustHue(d), this.adjustContrast(b), this.adjustBrightness(a), this.adjustSaturation(c)
    }, b.adjustBrightness = function (a) {
      return 0 == a || isNaN(a) ? this : (a = this._cleanValue(a, 255), this._multiplyMatrix([1, 0, 0, 0, a, 0, 1, 0, 0, a, 0, 0, 1, 0, a, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this)
    }, b.adjustContrast = function (b) {
      if (0 == b || isNaN(b)) return this;
      b = this._cleanValue(b, 100);
      var c;
      return 0 > b ? c = 127 + b / 100 * 127 : (c = b % 1, c = 0 == c ? a.DELTA_INDEX[b] : a.DELTA_INDEX[b << 0] * (1 - c) + a.DELTA_INDEX[(b << 0) + 1] * c, c = 127 * c + 127), this._multiplyMatrix([c / 127, 0, 0, 0, .5 * (127 - c), 0, c / 127, 0, 0, .5 * (127 - c), 0, 0, c / 127, 0, .5 * (127 - c), 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
    }, b.adjustSaturation = function (a) {
      if (0 == a || isNaN(a)) return this;
      a = this._cleanValue(a, 100);
      var b = 1 + (a > 0 ? 3 * a / 100 : a / 100),
        c = .3086,
        d = .6094,
        e = .082;
      return this._multiplyMatrix([c * (1 - b) + b, d * (1 - b), e * (1 - b), 0, 0, c * (1 - b), d * (1 - b) + b, e * (1 - b), 0, 0, c * (1 - b), d * (1 - b), e * (1 - b) + b, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
    }, b.adjustHue = function (a) {
      if (0 == a || isNaN(a)) return this;
      a = this._cleanValue(a, 180) / 180 * Math.PI;
      var b = Math.cos(a),
        c = Math.sin(a),
        d = .213,
        e = .715,
        f = .072;
      return this._multiplyMatrix([d + b * (1 - d) + c * -d, e + b * -e + c * -e, f + b * -f + c * (1 - f), 0, 0, d + b * -d + .143 * c, e + b * (1 - e) + .14 * c, f + b * -f + c * -.283, 0, 0, d + b * -d + c * -(1 - d), e + b * -e + c * e, f + b * (1 - f) + c * f, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
    }, b.concat = function (b) {
      return b = this._fixMatrix(b), b.length != a.LENGTH ? this : (this._multiplyMatrix(b), this)
    }, b.clone = function () {
      return (new a).copy(this)
    }, b.toArray = function () {
      for (var b = [], c = 0, d = a.LENGTH; d > c; c++) b[c] = this[c];
      return b
    }, b.copy = function (b) {
      for (var c = a.LENGTH, d = 0; c > d; d++) this[d] = b[d];
      return this
    }, b.toString = function () {
      return "[ColorMatrix]"
    }, b._multiplyMatrix = function (a) {
      var b, c, d, e = [];
      for (b = 0; 5 > b; b++) {
        for (c = 0; 5 > c; c++) e[c] = this[c + 5 * b];
        for (c = 0; 5 > c; c++) {
          var f = 0;
          for (d = 0; 5 > d; d++) f += a[c + 5 * d] * e[d];
          this[c + 5 * b] = f
        }
      }
    }, b._cleanValue = function (a, b) {
      return Math.min(b, Math.max(-b, a))
    }, b._fixMatrix = function (b) {
      return b instanceof a && (b = b.toArray()), b.length < a.LENGTH ? b = b.slice(0, b.length).concat(a.IDENTITY_MATRIX.slice(b.length, a.LENGTH)) : b.length > a.LENGTH && (b = b.slice(0, a.LENGTH)), b
    }, createjs.ColorMatrix = a
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a) {
      this.matrix = a
    }
    var b = createjs.extend(a, createjs.Filter);
    b.toString = function () {
      return "[ColorMatrixFilter]"
    }, b.clone = function () {
      return new a(this.matrix)
    }, b._applyFilter = function (a) {
      for (var b, c, d, e, f = a.data, g = f.length, h = this.matrix, i = h[0], j = h[1], k = h[2], l = h[3], m = h[4], n = h[5], o = h[6], p = h[7], q = h[8], r = h[9], s = h[10], t = h[11], u = h[12], v = h[13], w = h[14], x = h[15], y = h[16], z = h[17], A = h[18], B = h[19], C = 0; g > C; C += 4) b = f[C], c = f[C + 1], d = f[C + 2], e = f[C + 3], f[C] = b * i + c * j + d * k + e * l + m, f[C + 1] = b * n + c * o + d * p + e * q + r, f[C + 2] = b * s + c * t + d * u + e * v + w, f[C + 3] = b * x + c * y + d * z + e * A + B;
      return !0
    }, createjs.ColorMatrixFilter = createjs.promote(a, "Filter")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a() {
      throw "Touch cannot be instantiated"
    }
    a.isSupported = function () {
      return !!("ontouchstart" in window || window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 0)
    }, a.enable = function (b, c, d) {
      return b && b.canvas && a.isSupported() ? b.__touch ? !0 : (b.__touch = {
        pointers: {},
        multitouch: !c,
        preventDefault: !d,
        count: 0
      }, "ontouchstart" in window ? a._IOS_enable(b) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && a._IE_enable(b), !0) : !1
    }, a.disable = function (b) {
      b && ("ontouchstart" in window ? a._IOS_disable(b) : (window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && a._IE_disable(b), delete b.__touch)
    }, a._IOS_enable = function (b) {
      var c = b.canvas,
        d = b.__touch.f = function (c) {
          a._IOS_handleEvent(b, c)
        };
      c.addEventListener("touchstart", d, !1), c.addEventListener("touchmove", d, !1), c.addEventListener("touchend", d, !1), c.addEventListener("touchcancel", d, !1)
    }, a._IOS_disable = function (a) {
      var b = a.canvas;
      if (b) {
        var c = a.__touch.f;
        b.removeEventListener("touchstart", c, !1), b.removeEventListener("touchmove", c, !1), b.removeEventListener("touchend", c, !1), b.removeEventListener("touchcancel", c, !1)
      }
    }, a._IOS_handleEvent = function (a, b) {
      if (a) {
        a.__touch.preventDefault && b.preventDefault && b.preventDefault();
        for (var c = b.changedTouches, d = b.type, e = 0, f = c.length; f > e; e++) {
          var g = c[e],
            h = g.identifier;
          g.target == a.canvas && ("touchstart" == d ? this._handleStart(a, h, b, g.pageX, g.pageY) : "touchmove" == d ? this._handleMove(a, h, b, g.pageX, g.pageY) : ("touchend" == d || "touchcancel" == d) && this._handleEnd(a, h, b))
        }
      }
    }, a._IE_enable = function (b) {
      var c = b.canvas,
        d = b.__touch.f = function (c) {
          a._IE_handleEvent(b, c)
        };
      void 0 === window.navigator.pointerEnabled ? (c.addEventListener("MSPointerDown", d, !1), window.addEventListener("MSPointerMove", d, !1), window.addEventListener("MSPointerUp", d, !1), window.addEventListener("MSPointerCancel", d, !1), b.__touch.preventDefault && (c.style.msTouchAction = "none")) : (c.addEventListener("pointerdown", d, !1), window.addEventListener("pointermove", d, !1), window.addEventListener("pointerup", d, !1), window.addEventListener("pointercancel", d, !1), b.__touch.preventDefault && (c.style.touchAction = "none")), b.__touch.activeIDs = {}
    }, a._IE_disable = function (a) {
      var b = a.__touch.f;
      void 0 === window.navigator.pointerEnabled ? (window.removeEventListener("MSPointerMove", b, !1), window.removeEventListener("MSPointerUp", b, !1), window.removeEventListener("MSPointerCancel", b, !1), a.canvas && a.canvas.removeEventListener("MSPointerDown", b, !1)) : (window.removeEventListener("pointermove", b, !1), window.removeEventListener("pointerup", b, !1), window.removeEventListener("pointercancel", b, !1), a.canvas && a.canvas.removeEventListener("pointerdown", b, !1))
    }, a._IE_handleEvent = function (a, b) {
      if (a) {
        a.__touch.preventDefault && b.preventDefault && b.preventDefault();
        var c = b.type,
          d = b.pointerId,
          e = a.__touch.activeIDs;
        if ("MSPointerDown" == c || "pointerdown" == c) {
          if (b.srcElement != a.canvas) return;
          e[d] = !0, this._handleStart(a, d, b, b.pageX, b.pageY)
        } else e[d] && ("MSPointerMove" == c || "pointermove" == c ? this._handleMove(a, d, b, b.pageX, b.pageY) : ("MSPointerUp" == c || "MSPointerCancel" == c || "pointerup" == c || "pointercancel" == c) && (delete e[d], this._handleEnd(a, d, b)))
      }
    }, a._handleStart = function (a, b, c, d, e) {
      var f = a.__touch;
      if (f.multitouch || !f.count) {
        var g = f.pointers;
        g[b] || (g[b] = !0, f.count++, a._handlePointerDown(b, c, d, e))
      }
    }, a._handleMove = function (a, b, c, d, e) {
      a.__touch.pointers[b] && a._handlePointerMove(b, c, d, e)
    }, a._handleEnd = function (a, b, c) {
      var d = a.__touch,
        e = d.pointers;
      e[b] && (d.count--, a._handlePointerUp(b, c, !0), delete e[b])
    }, createjs.Touch = a
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";
    var a = createjs.EaselJS = createjs.EaselJS || {};
    a.version = "0.8.2", a.buildDate = "Thu, 26 Nov 2015 20:44:34 GMT"
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";
    var a = createjs.PreloadJS = createjs.PreloadJS || {};
    a.version = "0.6.2", a.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT"
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";
    createjs.proxy = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 2);
      return function () {
        return a.apply(b, Array.prototype.slice.call(arguments, 0).concat(c))
      }
    }
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b, c) {
      this.Event_constructor("error"), this.title = a, this.message = b, this.data = c
    }
    var b = createjs.extend(a, createjs.Event);
    b.clone = function () {
      return new createjs.ErrorEvent(this.title, this.message, this.data)
    }, createjs.ErrorEvent = createjs.promote(a, "Event")
  }(), this.createjs = this.createjs || {},
  function (a) {
    "use strict";

    function b(a, b) {
      this.Event_constructor("progress"), this.loaded = a, this.total = null == b ? 1 : b, this.progress = 0 == b ? 0 : this.loaded / this.total
    }
    var c = createjs.extend(b, createjs.Event);
    c.clone = function () {
      return new createjs.ProgressEvent(this.loaded, this.total)
    }, createjs.ProgressEvent = createjs.promote(b, "Event")
  }(window),
  function () {
    function a(b, d) {
      function f(a) {
        if (f[a] !== q) return f[a];
        var b;
        if ("bug-string-char-index" == a) b = "a" != "a" [0];
        else if ("json" == a) b = f("json-stringify") && f("json-parse");
        else {
          var c, e = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
          if ("json-stringify" == a) {
            var i = d.stringify,
              k = "function" == typeof i && t;
            if (k) {
              (c = function () {
                return 1
              }).toJSON = c;
              try {
                k = "0" === i(0) && "0" === i(new g) && '""' == i(new h) && i(s) === q && i(q) === q && i() === q && "1" === i(c) && "[1]" == i([c]) && "[null]" == i([q]) && "null" == i(null) && "[null,null,null]" == i([q, s, null]) && i({
                  a: [c, !0, !1, null, "\x00\b\n\f\r	"]
                }) == e && "1" === i(null, c) && "[\n 1,\n 2\n]" == i([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == i(new j(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == i(new j(864e13)) && '"-000001-01-01T00:00:00.000Z"' == i(new j(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == i(new j(-1))
              } catch (l) {
                k = !1
              }
            }
            b = k
          }
          if ("json-parse" == a) {
            var m = d.parse;
            if ("function" == typeof m) try {
              if (0 === m("0") && !m(!1)) {
                c = m(e);
                var n = 5 == c.a.length && 1 === c.a[0];
                if (n) {
                  try {
                    n = !m('"	"')
                  } catch (l) {}
                  if (n) try {
                    n = 1 !== m("01")
                  } catch (l) {}
                  if (n) try {
                    n = 1 !== m("1.")
                  } catch (l) {}
                }
              }
            } catch (l) {
              n = !1
            }
            b = n
          }
        }
        return f[a] = !!b
      }
      b || (b = e.Object()), d || (d = e.Object());
      var g = b.Number || e.Number,
        h = b.String || e.String,
        i = b.Object || e.Object,
        j = b.Date || e.Date,
        k = b.SyntaxError || e.SyntaxError,
        l = b.TypeError || e.TypeError,
        m = b.Math || e.Math,
        n = b.JSON || e.JSON;
      "object" == typeof n && n && (d.stringify = n.stringify, d.parse = n.parse);
      var o, p, q, r = i.prototype,
        s = r.toString,
        t = new j(-0xc782b5b800cec);
      try {
        t = -109252 == t.getUTCFullYear() && 0 === t.getUTCMonth() && 1 === t.getUTCDate() && 10 == t.getUTCHours() && 37 == t.getUTCMinutes() && 6 == t.getUTCSeconds() && 708 == t.getUTCMilliseconds()
      } catch (u) {}
      if (!f("json")) {
        var v = "[object Function]",
          w = "[object Date]",
          x = "[object Number]",
          y = "[object String]",
          z = "[object Array]",
          A = "[object Boolean]",
          B = f("bug-string-char-index");
        if (!t) var C = m.floor,
          D = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
          E = function (a, b) {
            return D[b] + 365 * (a - 1970) + C((a - 1969 + (b = +(b > 1))) / 4) - C((a - 1901 + b) / 100) + C((a - 1601 + b) / 400)
          };
        if ((o = r.hasOwnProperty) || (o = function (a) {
            var b, c = {};
            return (c.__proto__ = null, c.__proto__ = {
              toString: 1
            }, c).toString != s ? o = function (a) {
              var b = this.__proto__,
                c = a in (this.__proto__ = null, this);
              return this.__proto__ = b, c
            } : (b = c.constructor, o = function (a) {
              var c = (this.constructor || b).prototype;
              return a in this && !(a in c && this[a] === c[a])
            }), c = null, o.call(this, a)
          }), p = function (a, b) {
            var d, e, f, g = 0;
            (d = function () {
              this.valueOf = 0
            }).prototype.valueOf = 0, e = new d;
            for (f in e) o.call(e, f) && g++;
            return d = e = null, g ? p = 2 == g ? function (a, b) {
              var c, d = {},
                e = s.call(a) == v;
              for (c in a) e && "prototype" == c || o.call(d, c) || !(d[c] = 1) || !o.call(a, c) || b(c)
            } : function (a, b) {
              var c, d, e = s.call(a) == v;
              for (c in a) e && "prototype" == c || !o.call(a, c) || (d = "constructor" === c) || b(c);
              (d || o.call(a, c = "constructor")) && b(c)
            } : (e = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], p = function (a, b) {
              var d, f, g = s.call(a) == v,
                h = !g && "function" != typeof a.constructor && c[typeof a.hasOwnProperty] && a.hasOwnProperty || o;
              for (d in a) g && "prototype" == d || !h.call(a, d) || b(d);
              for (f = e.length; d = e[--f]; h.call(a, d) && b(d));
            }), p(a, b)
          }, !f("json-stringify")) {
          var F = {
              92: "\\\\",
              34: '\\"',
              8: "\\b",
              12: "\\f",
              10: "\\n",
              13: "\\r",
              9: "\\t"
            },
            G = "000000",
            H = function (a, b) {
              return (G + (b || 0)).slice(-a)
            },
            I = "\\u00",
            J = function (a) {
              for (var b = '"', c = 0, d = a.length, e = !B || d > 10, f = e && (B ? a.split("") : a); d > c; c++) {
                var g = a.charCodeAt(c);
                switch (g) {
                  case 8:
                  case 9:
                  case 10:
                  case 12:
                  case 13:
                  case 34:
                  case 92:
                    b += F[g];
                    break;
                  default:
                    if (32 > g) {
                      b += I + H(2, g.toString(16));
                      break
                    }
                    b += e ? f[c] : a.charAt(c)
                }
              }
              return b + '"'
            },
            K = function (a, b, c, d, e, f, g) {
              var h, i, j, k, m, n, r, t, u, v, B, D, F, G, I, L;
              try {
                h = b[a]
              } catch (M) {}
              if ("object" == typeof h && h)
                if (i = s.call(h), i != w || o.call(h, "toJSON")) "function" == typeof h.toJSON && (i != x && i != y && i != z || o.call(h, "toJSON")) && (h = h.toJSON(a));
                else if (h > -1 / 0 && 1 / 0 > h) {
                if (E) {
                  for (m = C(h / 864e5), j = C(m / 365.2425) + 1970 - 1; E(j + 1, 0) <= m; j++);
                  for (k = C((m - E(j, 0)) / 30.42); E(j, k + 1) <= m; k++);
                  m = 1 + m - E(j, k), n = (h % 864e5 + 864e5) % 864e5, r = C(n / 36e5) % 24, t = C(n / 6e4) % 60, u = C(n / 1e3) % 60, v = n % 1e3
                } else j = h.getUTCFullYear(), k = h.getUTCMonth(), m = h.getUTCDate(), r = h.getUTCHours(), t = h.getUTCMinutes(), u = h.getUTCSeconds(), v = h.getUTCMilliseconds();
                h = (0 >= j || j >= 1e4 ? (0 > j ? "-" : "+") + H(6, 0 > j ? -j : j) : H(4, j)) + "-" + H(2, k + 1) + "-" + H(2, m) + "T" + H(2, r) + ":" + H(2, t) + ":" + H(2, u) + "." + H(3, v) + "Z"
              } else h = null;
              if (c && (h = c.call(b, a, h)), null === h) return "null";
              if (i = s.call(h), i == A) return "" + h;
              if (i == x) return h > -1 / 0 && 1 / 0 > h ? "" + h : "null";
              if (i == y) return J("" + h);
              if ("object" == typeof h) {
                for (G = g.length; G--;)
                  if (g[G] === h) throw l();
                if (g.push(h), B = [], I = f, f += e, i == z) {
                  for (F = 0, G = h.length; G > F; F++) D = K(F, h, c, d, e, f, g), B.push(D === q ? "null" : D);
                  L = B.length ? e ? "[\n" + f + B.join(",\n" + f) + "\n" + I + "]" : "[" + B.join(",") + "]" : "[]"
                } else p(d || h, function (a) {
                  var b = K(a, h, c, d, e, f, g);
                  b !== q && B.push(J(a) + ":" + (e ? " " : "") + b)
                }), L = B.length ? e ? "{\n" + f + B.join(",\n" + f) + "\n" + I + "}" : "{" + B.join(",") + "}" : "{}";
                return g.pop(), L
              }
            };
          d.stringify = function (a, b, d) {
            var e, f, g, h;
            if (c[typeof b] && b)
              if ((h = s.call(b)) == v) f = b;
              else if (h == z) {
              g = {};
              for (var i, j = 0, k = b.length; k > j; i = b[j++], h = s.call(i), (h == y || h == x) && (g[i] = 1));
            }
            if (d)
              if ((h = s.call(d)) == x) {
                if ((d -= d % 1) > 0)
                  for (e = "", d > 10 && (d = 10); e.length < d; e += " ");
              } else h == y && (e = d.length <= 10 ? d : d.slice(0, 10));
            return K("", (i = {}, i[""] = a, i), f, g, e, "", [])
          }
        }
        if (!f("json-parse")) {
          var L, M, N = h.fromCharCode,
            O = {
              92: "\\",
              34: '"',
              47: "/",
              98: "\b",
              116: "	",
              110: "\n",
              102: "\f",
              114: "\r"
            },
            P = function () {
              throw L = M = null, k()
            },
            Q = function () {
              for (var a, b, c, d, e, f = M, g = f.length; g > L;) switch (e = f.charCodeAt(L)) {
                case 9:
                case 10:
                case 13:
                case 32:
                  L++;
                  break;
                case 123:
                case 125:
                case 91:
                case 93:
                case 58:
                case 44:
                  return a = B ? f.charAt(L) : f[L], L++, a;
                case 34:
                  for (a = "@", L++; g > L;)
                    if (e = f.charCodeAt(L), 32 > e) P();
                    else if (92 == e) switch (e = f.charCodeAt(++L)) {
                    case 92:
                    case 34:
                    case 47:
                    case 98:
                    case 116:
                    case 110:
                    case 102:
                    case 114:
                      a += O[e], L++;
                      break;
                    case 117:
                      for (b = ++L, c = L + 4; c > L; L++) e = f.charCodeAt(L), e >= 48 && 57 >= e || e >= 97 && 102 >= e || e >= 65 && 70 >= e || P();
                      a += N("0x" + f.slice(b, L));
                      break;
                    default:
                      P()
                  } else {
                    if (34 == e) break;
                    for (e = f.charCodeAt(L), b = L; e >= 32 && 92 != e && 34 != e;) e = f.charCodeAt(++L);
                    a += f.slice(b, L)
                  }
                  if (34 == f.charCodeAt(L)) return L++, a;
                  P();
                default:
                  if (b = L, 45 == e && (d = !0, e = f.charCodeAt(++L)), e >= 48 && 57 >= e) {
                    for (48 == e && (e = f.charCodeAt(L + 1), e >= 48 && 57 >= e) && P(), d = !1; g > L && (e = f.charCodeAt(L), e >= 48 && 57 >= e); L++);
                    if (46 == f.charCodeAt(L)) {
                      for (c = ++L; g > c && (e = f.charCodeAt(c), e >= 48 && 57 >= e); c++);
                      c == L && P(), L = c
                    }
                    if (e = f.charCodeAt(L), 101 == e || 69 == e) {
                      for (e = f.charCodeAt(++L), (43 == e || 45 == e) && L++, c = L; g > c && (e = f.charCodeAt(c), e >= 48 && 57 >= e); c++);
                      c == L && P(), L = c
                    }
                    return +f.slice(b, L)
                  }
                  if (d && P(), "true" == f.slice(L, L + 4)) return L += 4, !0;
                  if ("false" == f.slice(L, L + 5)) return L += 5, !1;
                  if ("null" == f.slice(L, L + 4)) return L += 4, null;
                  P()
              }
              return "$"
            },
            R = function (a) {
              var b, c;
              if ("$" == a && P(), "string" == typeof a) {
                if ("@" == (B ? a.charAt(0) : a[0])) return a.slice(1);
                if ("[" == a) {
                  for (b = []; a = Q(), "]" != a; c || (c = !0)) c && ("," == a ? (a = Q(), "]" == a && P()) : P()), "," == a && P(), b.push(R(a));
                  return b
                }
                if ("{" == a) {
                  for (b = {}; a = Q(), "}" != a; c || (c = !0)) c && ("," == a ? (a = Q(), "}" == a && P()) : P()), ("," == a || "string" != typeof a || "@" != (B ? a.charAt(0) : a[0]) || ":" != Q()) && P(), b[a.slice(1)] = R(Q());
                  return b
                }
                P()
              }
              return a
            },
            S = function (a, b, c) {
              var d = T(a, b, c);
              d === q ? delete a[b] : a[b] = d
            },
            T = function (a, b, c) {
              var d, e = a[b];
              if ("object" == typeof e && e)
                if (s.call(e) == z)
                  for (d = e.length; d--;) S(e, d, c);
                else p(e, function (a) {
                  S(e, a, c)
                });
              return c.call(a, b, e)
            };
          d.parse = function (a, b) {
            var c, d;
            return L = 0, M = "" + a, c = R(Q()), "$" != Q() && P(), L = M = null, b && s.call(b) == v ? T((d = {}, d[""] = c, d), "", b) : c
          }
        }
      }
      return d.runInContext = a, d
    }
    var b = "function" == typeof define && define.amd,
      c = {
        "function": !0,
        object: !0
      },
      d = c[typeof exports] && exports && !exports.nodeType && exports,
      e = c[typeof window] && window || this,
      f = d && c[typeof module] && module && !module.nodeType && "object" == typeof global && global;
    if (!f || f.global !== f && f.window !== f && f.self !== f || (e = f), d && !b) a(e, d);
    else {
      var g = e.JSON,
        h = e.JSON3,
        i = !1,
        j = a(e, e.JSON3 = {
          noConflict: function () {
            return i || (i = !0, e.JSON = g, e.JSON3 = h, g = h = null), j
          }
        });
      e.JSON = {
        parse: j.parse,
        stringify: j.stringify
      }
    }
    b && define(function () {
      return j
    })
  }.call(this),
  function () {
    var a = {};
    a.appendToHead = function (b) {
      a.getHead().appendChild(b)
    }, a.getHead = function () {
      return document.head || document.getElementsByTagName("head")[0]
    }, a.getBody = function () {
      return document.body || document.getElementsByTagName("body")[0]
    }, createjs.DomUtils = a
  }(),
  function () {
    var a = {};
    a.parseXML = function (a, b) {
      var c = null;
      try {
        if (window.DOMParser) {
          var d = new DOMParser;
          c = d.parseFromString(a, b)
        }
      } catch (e) {}
      if (!c) try {
        c = new ActiveXObject("Microsoft.XMLDOM"), c.async = !1, c.loadXML(a)
      } catch (e) {
        c = null
      }
      return c
    }, a.parseJSON = function (a) {
      if (null == a) return null;
      try {
        return JSON.parse(a)
      } catch (b) {
        throw b
      }
    }, createjs.DataUtils = a
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a() {
      this.src = null, this.type = null, this.id = null, this.maintainOrder = !1, this.callback = null, this.data = null, this.method = createjs.LoadItem.GET, this.values = null, this.headers = null, this.withCredentials = !1, this.mimeType = null, this.crossOrigin = null, this.loadTimeout = c.LOAD_TIMEOUT_DEFAULT
    }
    var b = a.prototype = {},
      c = a;
    c.LOAD_TIMEOUT_DEFAULT = 8e3, c.create = function (b) {
      if ("string" == typeof b) {
        var d = new a;
        return d.src = b, d
      }
      if (b instanceof c) return b;
      if (b instanceof Object && b.src) return null == b.loadTimeout && (b.loadTimeout = c.LOAD_TIMEOUT_DEFAULT), b;
      throw new Error("Type not recognized.")
    }, b.set = function (a) {
      for (var b in a) this[b] = a[b];
      return this
    }, createjs.LoadItem = c
  }(),
  function () {
    var a = {};
    a.ABSOLUTE_PATT = /^(?:\w+:)?\/{2}/i, a.RELATIVE_PATT = /^[.\/]*?\//i, a.EXTENSION_PATT = /\/?[^\/]+\.(\w{1,5})$/i, a.parseURI = function (b) {
      var c = {
        absolute: !1,
        relative: !1
      };
      if (null == b) return c;
      var d = b.indexOf("?");
      d > -1 && (b = b.substr(0, d));
      var e;
      return a.ABSOLUTE_PATT.test(b) ? c.absolute = !0 : a.RELATIVE_PATT.test(b) && (c.relative = !0), (e = b.match(a.EXTENSION_PATT)) && (c.extension = e[1].toLowerCase()), c
    }, a.formatQueryString = function (a, b) {
      if (null == a) throw new Error("You must specify data.");
      var c = [];
      for (var d in a) c.push(d + "=" + escape(a[d]));
      return b && (c = c.concat(b)), c.join("&")
    }, a.buildPath = function (a, b) {
      if (null == b) return a;
      var c = [],
        d = a.indexOf("?");
      if (-1 != d) {
        var e = a.slice(d + 1);
        c = c.concat(e.split("&"))
      }
      return -1 != d ? a.slice(0, d) + "?" + this.formatQueryString(b, c) : a + "?" + this.formatQueryString(b, c)
    }, a.isCrossDomain = function (a) {
      var b = document.createElement("a");
      b.href = a.src;
      var c = document.createElement("a");
      c.href = location.href;
      var d = "" != b.hostname && (b.port != c.port || b.protocol != c.protocol || b.hostname != c.hostname);
      return d
    }, a.isLocal = function (a) {
      var b = document.createElement("a");
      return b.href = a.src, "" == b.hostname && "file:" == b.protocol
    }, a.isBinary = function (a) {
      switch (a) {
        case createjs.AbstractLoader.IMAGE:
        case createjs.AbstractLoader.BINARY:
          return !0;
        default:
          return !1
      }
    }, a.isImageTag = function (a) {
      return a instanceof HTMLImageElement
    }, a.isAudioTag = function (a) {
      return window.HTMLAudioElement ? a instanceof HTMLAudioElement : !1
    }, a.isVideoTag = function (a) {
      return window.HTMLVideoElement ? a instanceof HTMLVideoElement : !1
    }, a.isText = function (a) {
      switch (a) {
        case createjs.AbstractLoader.TEXT:
        case createjs.AbstractLoader.JSON:
        case createjs.AbstractLoader.MANIFEST:
        case createjs.AbstractLoader.XML:
        case createjs.AbstractLoader.CSS:
        case createjs.AbstractLoader.SVG:
        case createjs.AbstractLoader.JAVASCRIPT:
        case createjs.AbstractLoader.SPRITESHEET:
          return !0;
        default:
          return !1
      }
    }, a.getTypeByExtension = function (a) {
      if (null == a) return createjs.AbstractLoader.TEXT;
      switch (a.toLowerCase()) {
        case "jpeg":
        case "jpg":
        case "gif":
        case "png":
        case "webp":
        case "bmp":
          return createjs.AbstractLoader.IMAGE;
        case "ogg":
        case "mp3":
        case "webm":
          return createjs.AbstractLoader.SOUND;
        case "mp4":
        case "webm":
        case "ts":
          return createjs.AbstractLoader.VIDEO;
        case "json":
          return createjs.AbstractLoader.JSON;
        case "xml":
          return createjs.AbstractLoader.XML;
        case "css":
          return createjs.AbstractLoader.CSS;
        case "js":
          return createjs.AbstractLoader.JAVASCRIPT;
        case "svg":
          return createjs.AbstractLoader.SVG;
        default:
          return createjs.AbstractLoader.TEXT
      }
    }, createjs.RequestUtils = a
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b, c) {
      this.EventDispatcher_constructor(), this.loaded = !1, this.canceled = !1, this.progress = 0, this.type = c, this.resultFormatter = null, a ? this._item = createjs.LoadItem.create(a) : this._item = null, this._preferXHR = b, this._result = null, this._rawResult = null, this._loadedItems = null, this._tagSrcAttribute = null, this._tag = null
    }
    var b = createjs.extend(a, createjs.EventDispatcher),
      c = a;
    c.POST = "POST", c.GET = "GET", c.BINARY = "binary", c.CSS = "css", c.IMAGE = "image", c.JAVASCRIPT = "javascript", c.JSON = "json", c.JSONP = "jsonp", c.MANIFEST = "manifest", c.SOUND = "sound", c.VIDEO = "video", c.SPRITESHEET = "spritesheet", c.SVG = "svg", c.TEXT = "text", c.XML = "xml", b.getItem = function () {
      return this._item
    }, b.getResult = function (a) {
      return a ? this._rawResult : this._result
    }, b.getTag = function () {
      return this._tag
    }, b.setTag = function (a) {
      this._tag = a
    }, b.load = function () {
      this._createRequest(), this._request.on("complete", this, this), this._request.on("progress", this, this), this._request.on("loadStart", this, this), this._request.on("abort", this, this), this._request.on("timeout", this, this), this._request.on("error", this, this);
      var a = new createjs.Event("initialize");
      a.loader = this._request, this.dispatchEvent(a), this._request.load()
    }, b.cancel = function () {
      this.canceled = !0, this.destroy()
    }, b.destroy = function () {
      this._request && (this._request.removeAllEventListeners(), this._request.destroy()), this._request = null, this._item = null, this._rawResult = null, this._result = null, this._loadItems = null, this.removeAllEventListeners()
    }, b.getLoadedItems = function () {
      return this._loadedItems
    }, b._createRequest = function () {
      this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
    }, b._createTag = function (a) {
      return null
    }, b._sendLoadStart = function () {
      this._isCanceled() || this.dispatchEvent("loadstart")
    }, b._sendProgress = function (a) {
      if (!this._isCanceled()) {
        var b = null;
        "number" == typeof a ? (this.progress = a, b = new createjs.ProgressEvent(this.progress)) : (b = a, this.progress = a.loaded / a.total, b.progress = this.progress, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0)), this.hasEventListener("progress") && this.dispatchEvent(b)
      }
    }, b._sendComplete = function () {
      if (!this._isCanceled()) {
        this.loaded = !0;
        var a = new createjs.Event("complete");
        a.rawResult = this._rawResult, null != this._result && (a.result = this._result), this.dispatchEvent(a)
      }
    }, b._sendError = function (a) {
      !this._isCanceled() && this.hasEventListener("error") && (null == a && (a = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")), this.dispatchEvent(a))
    }, b._isCanceled = function () {
      return null == window.createjs || this.canceled ? !0 : !1
    }, b.resultFormatter = null, b.handleEvent = function (a) {
      switch (a.type) {
        case "complete":
          this._rawResult = a.target._response;
          var b = this.resultFormatter && this.resultFormatter(this);
          b instanceof Function ? b.call(this, createjs.proxy(this._resultFormatSuccess, this), createjs.proxy(this._resultFormatFailed, this)) : (this._result = b || this._rawResult, this._sendComplete());
          break;
        case "progress":
          this._sendProgress(a);
          break;
        case "error":
          this._sendError(a);
          break;
        case "loadstart":
          this._sendLoadStart();
          break;
        case "abort":
        case "timeout":
          this._isCanceled() || this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_" + a.type.toUpperCase() + "_ERROR"))
      }
    }, b._resultFormatSuccess = function (a) {
      this._result = a, this._sendComplete()
    }, b._resultFormatFailed = function (a) {
      this._sendError(a)
    }, b.buildPath = function (a, b) {
      return createjs.RequestUtils.buildPath(a, b)
    }, b.toString = function () {
      return "[PreloadJS AbstractLoader]"
    }, createjs.AbstractLoader = createjs.promote(a, "EventDispatcher")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b, c) {
      this.AbstractLoader_constructor(a, b, c), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.on("initialize", this._updateXHR, this)
    }
    var b = createjs.extend(a, createjs.AbstractLoader);
    b.load = function () {
      this._tag || (this._tag = this._createTag(this._item.src)), this._tag.preload = "auto", this._tag.load(), this.AbstractLoader_load()
    }, b._createTag = function () {}, b._createRequest = function () {
      this._preferXHR ? this._request = new createjs.XHRRequest(this._item) : this._request = new createjs.MediaTagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
    }, b._updateXHR = function (a) {
      a.loader.setResponseType && a.loader.setResponseType("blob")
    }, b._formatResult = function (a) {
      if (this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.onstalled = null, this._preferXHR) {
        var b = window.URL || window.webkitURL,
          c = a.getResult(!0);
        a.getTag().src = b.createObjectURL(c)
      }
      return a.getTag()
    }, createjs.AbstractMediaLoader = createjs.promote(a, "AbstractLoader")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";
    var a = function (a) {
        this._item = a
      },
      b = createjs.extend(a, createjs.EventDispatcher);
    b.load = function () {}, b.destroy = function () {}, b.cancel = function () {}, createjs.AbstractRequest = createjs.promote(a, "EventDispatcher")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b, c) {
      this.AbstractRequest_constructor(a), this._tag = b, this._tagSrcAttribute = c, this._loadedHandler = createjs.proxy(this._handleTagComplete, this), this._addedToDOM = !1, this._startTagVisibility = null
    }
    var b = createjs.extend(a, createjs.AbstractRequest);
    b.load = function () {
      this._tag.onload = createjs.proxy(this._handleTagComplete, this), this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this), this._tag.onerror = createjs.proxy(this._handleError, this);
      var a = new createjs.Event("initialize");
      a.loader = this._tag, this.dispatchEvent(a), this._hideTag(), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this._tag[this._tagSrcAttribute] = this._item.src, null == this._tag.parentNode && (window.document.body.appendChild(this._tag), this._addedToDOM = !0)
    }, b.destroy = function () {
      this._clean(), this._tag = null, this.AbstractRequest_destroy()
    }, b._handleReadyStateChange = function () {
      clearTimeout(this._loadTimeout);
      var a = this._tag;
      ("loaded" == a.readyState || "complete" == a.readyState) && this._handleTagComplete()
    }, b._handleError = function () {
      this._clean(), this.dispatchEvent("error")
    }, b._handleTagComplete = function () {
      this._rawResult = this._tag, this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult, this._clean(), this._showTag(), this.dispatchEvent("complete")
    }, b._handleTimeout = function () {
      this._clean(), this.dispatchEvent(new createjs.Event("timeout"))
    }, b._clean = function () {
      this._tag.onload = null, this._tag.onreadystatechange = null, this._tag.onerror = null, this._addedToDOM && null != this._tag.parentNode && this._tag.parentNode.removeChild(this._tag), clearTimeout(this._loadTimeout)
    }, b._hideTag = function () {
      this._startTagVisibility = this._tag.style.visibility, this._tag.style.visibility = "hidden"
    }, b._showTag = function () {
      this._tag.style.visibility = this._startTagVisibility
    }, b._handleStalled = function () {}, createjs.TagRequest = createjs.promote(a, "AbstractRequest")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b, c) {
      this.AbstractRequest_constructor(a), this._tag = b, this._tagSrcAttribute = c, this._loadedHandler = createjs.proxy(this._handleTagComplete, this)
    }
    var b = createjs.extend(a, createjs.TagRequest);
    b.load = function () {
      var a = createjs.proxy(this._handleStalled, this);
      this._stalledCallback = a;
      var b = createjs.proxy(this._handleProgress, this);
      this._handleProgress = b, this._tag.addEventListener("stalled", a), this._tag.addEventListener("progress", b), this._tag.addEventListener && this._tag.addEventListener("canplaythrough", this._loadedHandler, !1), this.TagRequest_load()
    }, b._handleReadyStateChange = function () {
      clearTimeout(this._loadTimeout);
      var a = this._tag;
      ("loaded" == a.readyState || "complete" == a.readyState) && this._handleTagComplete()
    }, b._handleStalled = function () {}, b._handleProgress = function (a) {
      if (a && !(a.loaded > 0 && 0 == a.total)) {
        var b = new createjs.ProgressEvent(a.loaded, a.total);
        this.dispatchEvent(b)
      }
    }, b._clean = function () {
      this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.removeEventListener("stalled", this._stalledCallback), this._tag.removeEventListener("progress", this._progressCallback), this.TagRequest__clean()
    }, createjs.MediaTagRequest = createjs.promote(a, "TagRequest")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a) {
      this.AbstractRequest_constructor(a), this._request = null, this._loadTimeout = null, this._xhrLevel = 1, this._response = null, this._rawResponse = null, this._canceled = !1, this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this), this._handleProgressProxy = createjs.proxy(this._handleProgress, this), this._handleAbortProxy = createjs.proxy(this._handleAbort, this), this._handleErrorProxy = createjs.proxy(this._handleError, this), this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this), this._handleLoadProxy = createjs.proxy(this._handleLoad, this), this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this), !this._createXHR(a)
    }
    var b = createjs.extend(a, createjs.AbstractRequest);
    a.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], b.getResult = function (a) {
      return a && this._rawResponse ? this._rawResponse : this._response
    }, b.cancel = function () {
      this.canceled = !0, this._clean(), this._request.abort()
    }, b.load = function () {
      if (null == this._request) return void this._handleError();
      null != this._request.addEventListener ? (this._request.addEventListener("loadstart", this._handleLoadStartProxy, !1), this._request.addEventListener("progress", this._handleProgressProxy, !1), this._request.addEventListener("abort", this._handleAbortProxy, !1), this._request.addEventListener("error", this._handleErrorProxy, !1), this._request.addEventListener("timeout", this._handleTimeoutProxy, !1), this._request.addEventListener("load", this._handleLoadProxy, !1), this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, !1)) : (this._request.onloadstart = this._handleLoadStartProxy, this._request.onprogress = this._handleProgressProxy, this._request.onabort = this._handleAbortProxy, this._request.onerror = this._handleErrorProxy, this._request.ontimeout = this._handleTimeoutProxy, this._request.onload = this._handleLoadProxy, this._request.onreadystatechange = this._handleReadyStateChangeProxy), 1 == this._xhrLevel && (this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout));
      try {
        this._item.values && this._item.method != createjs.AbstractLoader.GET ? this._item.method == createjs.AbstractLoader.POST && this._request.send(createjs.RequestUtils.formatQueryString(this._item.values)) : this._request.send()
      } catch (a) {
        this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, a))
      }
    }, b.setResponseType = function (a) {
      "blob" === a && (a = window.URL ? "blob" : "arraybuffer", this._responseType = a), this._request.responseType = a
    }, b.getAllResponseHeaders = function () {
      return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null
    }, b.getResponseHeader = function (a) {
      return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(a) : null
    }, b._handleProgress = function (a) {
      if (a && !(a.loaded > 0 && 0 == a.total)) {
        var b = new createjs.ProgressEvent(a.loaded, a.total);
        this.dispatchEvent(b)
      }
    }, b._handleLoadStart = function (a) {
      clearTimeout(this._loadTimeout), this.dispatchEvent("loadstart")
    }, b._handleAbort = function (a) {
      this._clean(), this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, a))
    }, b._handleError = function (a) {
      this._clean(), this.dispatchEvent(new createjs.ErrorEvent(a.message))
    }, b._handleReadyStateChange = function (a) {
      4 == this._request.readyState && this._handleLoad()
    }, b._handleLoad = function (a) {
      if (!this.loaded) {
        this.loaded = !0;
        var b = this._checkError();
        if (b) return void this._handleError(b);
        if (this._response = this._getResponse(), "arraybuffer" === this._responseType) try {
          this._response = new Blob([this._response])
        } catch (c) {
          if (window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, "TypeError" === c.name && window.BlobBuilder) {
            var d = new BlobBuilder;
            d.append(this._response), this._response = d.getBlob()
          }
        }
        this._clean(), this.dispatchEvent(new createjs.Event("complete"))
      }
    }, b._handleTimeout = function (a) {
      this._clean(), this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, a))
    }, b._checkError = function () {
      var a = parseInt(this._request.status);
      switch (a) {
        case 404:
        case 0:
          return new Error(a)
      }
      return null
    }, b._getResponse = function () {
      if (null != this._response) return this._response;
      if (null != this._request.response) return this._request.response;
      try {
        if (null != this._request.responseText) return this._request.responseText
      } catch (a) {}
      try {
        if (null != this._request.responseXML) return this._request.responseXML
      } catch (a) {}
      return null
    }, b._createXHR = function (a) {
      var b = createjs.RequestUtils.isCrossDomain(a),
        c = {},
        d = null;
      if (window.XMLHttpRequest) d = new XMLHttpRequest, b && void 0 === d.withCredentials && window.XDomainRequest && (d = new XDomainRequest);
      else {
        for (var e = 0, f = s.ACTIVEX_VERSIONS.length; f > e; e++) {
          var g = s.ACTIVEX_VERSIONS[e];
          try {
            d = new ActiveXObject(g);
            break
          } catch (h) {}
        }
        if (null == d) return !1
      }
      null == a.mimeType && createjs.RequestUtils.isText(a.type) && (a.mimeType = "text/plain; charset=utf-8"), a.mimeType && d.overrideMimeType && d.overrideMimeType(a.mimeType), this._xhrLevel = "string" == typeof d.responseType ? 2 : 1;
      var i = null;
      if (i = a.method == createjs.AbstractLoader.GET ? createjs.RequestUtils.buildPath(a.src, a.values) : a.src, d.open(a.method || createjs.AbstractLoader.GET, i, !0), b && d instanceof XMLHttpRequest && 1 == this._xhrLevel && (c.Origin = location.origin), a.values && a.method == createjs.AbstractLoader.POST && (c["Content-Type"] = "application/x-www-form-urlencoded"), b || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest"), a.headers)
        for (var j in a.headers) c[j] = a.headers[j];
      for (j in c) d.setRequestHeader(j, c[j]);
      return d instanceof XMLHttpRequest && void 0 !== a.withCredentials && (d.withCredentials = a.withCredentials), this._request = d, !0
    }, b._clean = function () {
      clearTimeout(this._loadTimeout), null != this._request.removeEventListener ? (this._request.removeEventListener("loadstart", this._handleLoadStartProxy), this._request.removeEventListener("progress", this._handleProgressProxy), this._request.removeEventListener("abort", this._handleAbortProxy), this._request.removeEventListener("error", this._handleErrorProxy), this._request.removeEventListener("timeout", this._handleTimeoutProxy), this._request.removeEventListener("load", this._handleLoadProxy), this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy)) : (this._request.onloadstart = null, this._request.onprogress = null, this._request.onabort = null, this._request.onerror = null, this._request.ontimeout = null, this._request.onload = null, this._request.onreadystatechange = null)
    }, b.toString = function () {
      return "[PreloadJS XHRRequest]"
    }, createjs.XHRRequest = createjs.promote(a, "AbstractRequest")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b, c) {
      this.AbstractLoader_constructor(), this._plugins = [], this._typeCallbacks = {}, this._extensionCallbacks = {}, this.next = null, this.maintainScriptOrder = !0, this.stopOnError = !1, this._maxConnections = 1, this._availableLoaders = [createjs.ImageLoader, createjs.JavaScriptLoader, createjs.CSSLoader, createjs.JSONLoader, createjs.JSONPLoader, createjs.SoundLoader, createjs.ManifestLoader, createjs.SpriteSheetLoader, createjs.XMLLoader, createjs.SVGLoader, createjs.BinaryLoader, createjs.VideoLoader, createjs.TextLoader], this._defaultLoaderLength = this._availableLoaders.length, this.init(a, b, c)
    }
    var b = createjs.extend(a, createjs.AbstractLoader),
      c = a;
    b.init = function (a, b, c) {
      this.useXHR = !0, this.preferXHR = !0, this._preferXHR = !0, this.setPreferXHR(a), this._paused = !1, this._basePath = b, this._crossOrigin = c, this._loadStartWasDispatched = !1, this._currentlyLoadingScript = null, this._currentLoads = [], this._loadQueue = [], this._loadQueueBackup = [], this._loadItemsById = {}, this._loadItemsBySrc = {}, this._loadedResults = {}, this._loadedRawResults = {}, this._numItems = 0, this._numItemsLoaded = 0, this._scriptOrder = [], this._loadedScripts = [], this._lastProgress = NaN
    }, c.loadTimeout = 8e3, c.LOAD_TIMEOUT = 0, c.BINARY = createjs.AbstractLoader.BINARY, c.CSS = createjs.AbstractLoader.CSS, c.IMAGE = createjs.AbstractLoader.IMAGE, c.JAVASCRIPT = createjs.AbstractLoader.JAVASCRIPT, c.JSON = createjs.AbstractLoader.JSON, c.JSONP = createjs.AbstractLoader.JSONP, c.MANIFEST = createjs.AbstractLoader.MANIFEST, c.SOUND = createjs.AbstractLoader.SOUND, c.VIDEO = createjs.AbstractLoader.VIDEO, c.SVG = createjs.AbstractLoader.SVG, c.TEXT = createjs.AbstractLoader.TEXT, c.XML = createjs.AbstractLoader.XML, c.POST = createjs.AbstractLoader.POST, c.GET = createjs.AbstractLoader.GET, b.registerLoader = function (a) {
      if (!a || !a.canLoadItem) throw new Error("loader is of an incorrect type.");
      if (-1 != this._availableLoaders.indexOf(a)) throw new Error("loader already exists.");
      this._availableLoaders.unshift(a)
    }, b.unregisterLoader = function (a) {
      var b = this._availableLoaders.indexOf(a); - 1 != b && b < this._defaultLoaderLength - 1 && this._availableLoaders.splice(b, 1)
    }, b.setUseXHR = function (a) {
      return this.setPreferXHR(a)
    }, b.setPreferXHR = function (a) {
      return this.preferXHR = 0 != a && null != window.XMLHttpRequest, this.preferXHR
    }, b.removeAll = function () {
      this.remove()
    }, b.remove = function (a) {
      var b = null;
      if (a && !Array.isArray(a)) b = [a];
      else if (a) b = a;
      else if (arguments.length > 0) return;
      var c = !1;
      if (b) {
        for (; b.length;) {
          var d = b.pop(),
            e = this.getResult(d);
          for (f = this._loadQueue.length - 1; f >= 0; f--)
            if (g = this._loadQueue[f].getItem(), g.id == d || g.src == d) {
              this._loadQueue.splice(f, 1)[0].cancel();
              break
            }
          for (f = this._loadQueueBackup.length - 1; f >= 0; f--)
            if (g = this._loadQueueBackup[f].getItem(), g.id == d || g.src == d) {
              this._loadQueueBackup.splice(f, 1)[0].cancel();
              break
            }
          if (e) this._disposeItem(this.getItem(d));
          else
            for (var f = this._currentLoads.length - 1; f >= 0; f--) {
              var g = this._currentLoads[f].getItem();
              if (g.id == d || g.src == d) {
                this._currentLoads.splice(f, 1)[0].cancel(), c = !0;
                break
              }
            }
        }
        c && this._loadNext()
      } else {
        this.close();
        for (var h in this._loadItemsById) this._disposeItem(this._loadItemsById[h]);
        this.init(this.preferXHR, this._basePath)
      }
    }, b.reset = function () {
      this.close();
      for (var a in this._loadItemsById) this._disposeItem(this._loadItemsById[a]);
      for (var b = [], c = 0, d = this._loadQueueBackup.length; d > c; c++) b.push(this._loadQueueBackup[c].getItem());
      this.loadManifest(b, !1)
    }, b.installPlugin = function (a) {
      if (null != a && null != a.getPreloadHandlers) {
        this._plugins.push(a);
        var b = a.getPreloadHandlers();
        if (b.scope = a, null != b.types)
          for (var c = 0, d = b.types.length; d > c; c++) this._typeCallbacks[b.types[c]] = b;
        if (null != b.extensions)
          for (c = 0, d = b.extensions.length; d > c; c++) this._extensionCallbacks[b.extensions[c]] = b
      }
    }, b.setMaxConnections = function (a) {
      this._maxConnections = a, !this._paused && this._loadQueue.length > 0 && this._loadNext()
    }, b.loadFile = function (a, b, c) {
      if (null == a) {
        var d = new createjs.ErrorEvent("PRELOAD_NO_FILE");
        return void this._sendError(d)
      }
      this._addItem(a, null, c), b !== !1 ? this.setPaused(!1) : this.setPaused(!0)
    }, b.loadManifest = function (a, b, d) {
      var e = null,
        f = null;
      if (Array.isArray(a)) {
        if (0 == a.length) {
          var g = new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");
          return void this._sendError(g)
        }
        e = a
      } else if ("string" == typeof a) e = [{
        src: a,
        type: c.MANIFEST
      }];
      else {
        if ("object" != typeof a) {
          var g = new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");
          return void this._sendError(g)
        }
        if (void 0 !== a.src) {
          if (null == a.type) a.type = c.MANIFEST;
          else if (a.type != c.MANIFEST) {
            var g = new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");
            this._sendError(g)
          }
          e = [a]
        } else void 0 !== a.manifest && (e = a.manifest, f = a.path)
      }
      for (var h = 0, i = e.length; i > h; h++) this._addItem(e[h], f, d);
      b !== !1 ? this.setPaused(!1) : this.setPaused(!0)
    }, b.load = function () {
      this.setPaused(!1)
    }, b.getItem = function (a) {
      return this._loadItemsById[a] || this._loadItemsBySrc[a]
    }, b.getResult = function (a, b) {
      var c = this._loadItemsById[a] || this._loadItemsBySrc[a];
      if (null == c) return null;
      var d = c.id;
      return b && this._loadedRawResults[d] ? this._loadedRawResults[d] : this._loadedResults[d]
    }, b.getItems = function (a) {
      var b = [];
      for (var c in this._loadItemsById) {
        var d = this._loadItemsById[c],
          e = this.getResult(c);
        (a !== !0 || null != e) && b.push({
          item: d,
          result: e,
          rawResult: this.getResult(c, !0)
        })
      }
      return b
    }, b.setPaused = function (a) {
      this._paused = a, this._paused || this._loadNext()
    }, b.close = function () {
      for (; this._currentLoads.length;) this._currentLoads.pop().cancel();
      this._scriptOrder.length = 0, this._loadedScripts.length = 0, this.loadStartWasDispatched = !1, this._itemCount = 0, this._lastProgress = NaN
    }, b._addItem = function (a, b, c) {
      var d = this._createLoadItem(a, b, c);
      if (null != d) {
        var e = this._createLoader(d);
        null != e && ("plugins" in e && (e.plugins = this._plugins), d._loader = e, this._loadQueue.push(e), this._loadQueueBackup.push(e), this._numItems++, this._updateProgress(), (this.maintainScriptOrder && d.type == createjs.LoadQueue.JAVASCRIPT || d.maintainOrder === !0) && (this._scriptOrder.push(d), this._loadedScripts.push(null)))
      }
    }, b._createLoadItem = function (a, b, c) {
      var d = createjs.LoadItem.create(a);
      if (null == d) return null;
      var e = "",
        f = c || this._basePath;
      if (d.src instanceof Object) {
        if (!d.type) return null;
        if (b) {
          e = b;
          var g = createjs.RequestUtils.parseURI(b);
          null == f || g.absolute || g.relative || (e = f + e)
        } else null != f && (e = f)
      } else {
        var h = createjs.RequestUtils.parseURI(d.src);
        h.extension && (d.ext = h.extension), null == d.type && (d.type = createjs.RequestUtils.getTypeByExtension(d.ext));
        var i = d.src;
        if (!h.absolute && !h.relative)
          if (b) {
            e = b;
            var g = createjs.RequestUtils.parseURI(b);
            i = b + i, null == f || g.absolute || g.relative || (e = f + e)
          } else null != f && (e = f);
        d.src = e + d.src
      }
      d.path = e, (void 0 === d.id || null === d.id || "" === d.id) && (d.id = i);
      var j = this._typeCallbacks[d.type] || this._extensionCallbacks[d.ext];
      if (j) {
        var k = j.callback.call(j.scope, d, this);
        if (k === !1) return null;
        k === !0 || null != k && (d._loader = k), h = createjs.RequestUtils.parseURI(d.src), null != h.extension && (d.ext = h.extension)
      }
      return this._loadItemsById[d.id] = d, this._loadItemsBySrc[d.src] = d, null == d.crossOrigin && (d.crossOrigin = this._crossOrigin), d
    }, b._createLoader = function (a) {
      if (null != a._loader) return a._loader;
      for (var b = this.preferXHR, c = 0; c < this._availableLoaders.length; c++) {
        var d = this._availableLoaders[c];
        if (d && d.canLoadItem(a)) return new d(a, b)
      }
      return null
    }, b._loadNext = function () {
      if (!this._paused) {
        this._loadStartWasDispatched || (this._sendLoadStart(), this._loadStartWasDispatched = !0), this._numItems == this._numItemsLoaded ? (this.loaded = !0, this._sendComplete(), this.next && this.next.load && this.next.load()) : this.loaded = !1;
        for (var a = 0; a < this._loadQueue.length && !(this._currentLoads.length >= this._maxConnections); a++) {
          var b = this._loadQueue[a];
          this._canStartLoad(b) && (this._loadQueue.splice(a, 1), a--, this._loadItem(b))
        }
      }
    }, b._loadItem = function (a) {
      a.on("fileload", this._handleFileLoad, this), a.on("progress", this._handleProgress, this), a.on("complete", this._handleFileComplete, this), a.on("error", this._handleError, this), a.on("fileerror", this._handleFileError, this), this._currentLoads.push(a), this._sendFileStart(a.getItem()), a.load()
    }, b._handleFileLoad = function (a) {
      a.target = null, this.dispatchEvent(a)
    }, b._handleFileError = function (a) {
      var b = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, a.item);
      this._sendError(b)
    }, b._handleError = function (a) {
      var b = a.target;
      this._numItemsLoaded++, this._finishOrderedItem(b, !0), this._updateProgress();
      var c = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, b.getItem());
      this._sendError(c), this.stopOnError ? this.setPaused(!0) : (this._removeLoadItem(b), this._cleanLoadItem(b), this._loadNext())
    }, b._handleFileComplete = function (a) {
      var b = a.target,
        c = b.getItem(),
        d = b.getResult();
      this._loadedResults[c.id] = d;
      var e = b.getResult(!0);
      null != e && e !== d && (this._loadedRawResults[c.id] = e), this._saveLoadedItems(b), this._removeLoadItem(b), this._finishOrderedItem(b) || this._processFinishedLoad(c, b), this._cleanLoadItem(b)
    }, b._saveLoadedItems = function (a) {
      var b = a.getLoadedItems();
      if (null !== b)
        for (var c = 0; c < b.length; c++) {
          var d = b[c].item;
          this._loadItemsBySrc[d.src] = d, this._loadItemsById[d.id] = d, this._loadedResults[d.id] = b[c].result, this._loadedRawResults[d.id] = b[c].rawResult
        }
    }, b._finishOrderedItem = function (a, b) {
      var c = a.getItem();
      if (this.maintainScriptOrder && c.type == createjs.LoadQueue.JAVASCRIPT || c.maintainOrder) {
        a instanceof createjs.JavaScriptLoader && (this._currentlyLoadingScript = !1);
        var d = createjs.indexOf(this._scriptOrder, c);
        return -1 == d ? !1 : (this._loadedScripts[d] = b === !0 ? !0 : c, this._checkScriptLoadOrder(), !0)
      }
      return !1
    }, b._checkScriptLoadOrder = function () {
      for (var a = this._loadedScripts.length, b = 0; a > b; b++) {
        var c = this._loadedScripts[b];
        if (null === c) break;
        if (c !== !0) {
          var d = this._loadedResults[c.id];
          c.type == createjs.LoadQueue.JAVASCRIPT && createjs.DomUtils.appendToHead(d);
          var e = c._loader;
          this._processFinishedLoad(c, e), this._loadedScripts[b] = !0
        }
      }
    }, b._processFinishedLoad = function (a, b) {
      if (this._numItemsLoaded++, !this.maintainScriptOrder && a.type == createjs.LoadQueue.JAVASCRIPT) {
        var c = b.getTag();
        createjs.DomUtils.appendToHead(c)
      }
      this._updateProgress(), this._sendFileComplete(a, b), this._loadNext()
    }, b._canStartLoad = function (a) {
      if (!this.maintainScriptOrder || a.preferXHR) return !0;
      var b = a.getItem();
      if (b.type != createjs.LoadQueue.JAVASCRIPT) return !0;
      if (this._currentlyLoadingScript) return !1;
      for (var c = this._scriptOrder.indexOf(b), d = 0; c > d;) {
        var e = this._loadedScripts[d];
        if (null == e) return !1;
        d++
      }
      return this._currentlyLoadingScript = !0, !0
    }, b._removeLoadItem = function (a) {
      for (var b = this._currentLoads.length, c = 0; b > c; c++)
        if (this._currentLoads[c] == a) {
          this._currentLoads.splice(c, 1);
          break
        }
    }, b._cleanLoadItem = function (a) {
      var b = a.getItem();
      b && delete b._loader
    }, b._handleProgress = function (a) {
      var b = a.target;
      this._sendFileProgress(b.getItem(), b.progress), this._updateProgress()
    }, b._updateProgress = function () {
      var a = this._numItemsLoaded / this._numItems,
        b = this._numItems - this._numItemsLoaded;
      if (b > 0) {
        for (var c = 0, d = 0, e = this._currentLoads.length; e > d; d++) c += this._currentLoads[d].progress;
        a += c / b * (b / this._numItems)
      }
      this._lastProgress != a && (this._sendProgress(a), this._lastProgress = a)
    }, b._disposeItem = function (a) {
      delete this._loadedResults[a.id], delete this._loadedRawResults[a.id], delete this._loadItemsById[a.id], delete this._loadItemsBySrc[a.src]
    }, b._sendFileProgress = function (a, b) {
      if (!this._isCanceled() && !this._paused && this.hasEventListener("fileprogress")) {
        var c = new createjs.Event("fileprogress");
        c.progress = b, c.loaded = b, c.total = 1, c.item = a, this.dispatchEvent(c)
      }
    }, b._sendFileComplete = function (a, b) {
      if (!this._isCanceled() && !this._paused) {
        var c = new createjs.Event("fileload");
        c.loader = b, c.item = a, c.result = this._loadedResults[a.id], c.rawResult = this._loadedRawResults[a.id], a.completeHandler && a.completeHandler(c), this.hasEventListener("fileload") && this.dispatchEvent(c)
      }
    }, b._sendFileStart = function (a) {
      var b = new createjs.Event("filestart");
      b.item = a, this.hasEventListener("filestart") && this.dispatchEvent(b)
    }, b.toString = function () {
      return "[PreloadJS LoadQueue]"
    }, createjs.LoadQueue = createjs.promote(a, "AbstractLoader")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a) {
      this.AbstractLoader_constructor(a, !0, createjs.AbstractLoader.TEXT)
    }
    var b = (createjs.extend(a, createjs.AbstractLoader), a);
    b.canLoadItem = function (a) {
      return a.type == createjs.AbstractLoader.TEXT
    }, createjs.TextLoader = createjs.promote(a, "AbstractLoader")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a) {
      this.AbstractLoader_constructor(a, !0, createjs.AbstractLoader.BINARY), this.on("initialize", this._updateXHR, this)
    }
    var b = createjs.extend(a, createjs.AbstractLoader),
      c = a;
    c.canLoadItem = function (a) {
      return a.type == createjs.AbstractLoader.BINARY
    }, b._updateXHR = function (a) {
      a.loader.setResponseType("arraybuffer")
    }, createjs.BinaryLoader = createjs.promote(a, "AbstractLoader")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b) {
      this.AbstractLoader_constructor(a, b, createjs.AbstractLoader.CSS), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "href", b ? this._tag = document.createElement("style") : this._tag = document.createElement("link"), this._tag.rel = "stylesheet", this._tag.type = "text/css"
    }
    var b = createjs.extend(a, createjs.AbstractLoader),
      c = a;
    c.canLoadItem = function (a) {
      return a.type == createjs.AbstractLoader.CSS
    }, b._formatResult = function (a) {
      if (this._preferXHR) {
        var b = a.getTag();
        if (b.styleSheet) b.styleSheet.cssText = a.getResult(!0);
        else {
          var c = document.createTextNode(a.getResult(!0));
          b.appendChild(c)
        }
      } else b = this._tag;
      return createjs.DomUtils.appendToHead(b), b
    }, createjs.CSSLoader = createjs.promote(a, "AbstractLoader")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b) {
      this.AbstractLoader_constructor(a, b, createjs.AbstractLoader.IMAGE), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", createjs.RequestUtils.isImageTag(a) ? this._tag = a : createjs.RequestUtils.isImageTag(a.src) ? this._tag = a.src : createjs.RequestUtils.isImageTag(a.tag) && (this._tag = a.tag), null != this._tag ? this._preferXHR = !1 : this._tag = document.createElement("img"), this.on("initialize", this._updateXHR, this)
    }
    var b = createjs.extend(a, createjs.AbstractLoader),
      c = a;
    c.canLoadItem = function (a) {
      return a.type == createjs.AbstractLoader.IMAGE
    }, b.load = function () {
      if ("" != this._tag.src && this._tag.complete) return void this._sendComplete();
      var a = this._item.crossOrigin;
      1 == a && (a = "Anonymous"), null == a || createjs.RequestUtils.isLocal(this._item.src) || (this._tag.crossOrigin = a), this.AbstractLoader_load()
    }, b._updateXHR = function (a) {
      a.loader.mimeType = "text/plain; charset=x-user-defined-binary", a.loader.setResponseType && a.loader.setResponseType("blob")
    }, b._formatResult = function (a) {
      return this._formatImage
    }, b._formatImage = function (a, b) {
      var c = this._tag,
        d = window.URL || window.webkitURL;
      if (this._preferXHR)
        if (d) {
          var e = d.createObjectURL(this.getResult(!0));
          c.src = e, c.addEventListener("load", this._cleanUpURL, !1), c.addEventListener("error", this._cleanUpURL, !1)
        } else c.src = this._item.src;
      else;
      c.complete ? a(c) : (c.onload = createjs.proxy(function () {
        a(this._tag)
      }, this), c.onerror = createjs.proxy(function () {
        b(_this._tag)
      }, this))
    }, b._cleanUpURL = function (a) {
      var b = window.URL || window.webkitURL;
      b.revokeObjectURL(a.target.src)
    }, createjs.ImageLoader = createjs.promote(a, "AbstractLoader")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b) {
      this.AbstractLoader_constructor(a, b, createjs.AbstractLoader.JAVASCRIPT), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.setTag(document.createElement("script"))
    }
    var b = createjs.extend(a, createjs.AbstractLoader),
      c = a;
    c.canLoadItem = function (a) {
      return a.type == createjs.AbstractLoader.JAVASCRIPT
    }, b._formatResult = function (a) {
      var b = a.getTag();
      return this._preferXHR && (b.text = a.getResult(!0)), b
    }, createjs.JavaScriptLoader = createjs.promote(a, "AbstractLoader")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a) {
      this.AbstractLoader_constructor(a, !0, createjs.AbstractLoader.JSON), this.resultFormatter = this._formatResult
    }
    var b = createjs.extend(a, createjs.AbstractLoader),
      c = a;
    c.canLoadItem = function (a) {
      return a.type == createjs.AbstractLoader.JSON
    }, b._formatResult = function (a) {
      var b = null;
      try {
        b = createjs.DataUtils.parseJSON(a.getResult(!0))
      } catch (c) {
        var d = new createjs.ErrorEvent("JSON_FORMAT", null, c);
        return this._sendError(d), c
      }
      return b
    }, createjs.JSONLoader = createjs.promote(a, "AbstractLoader")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a) {
      this.AbstractLoader_constructor(a, !1, createjs.AbstractLoader.JSONP), this.setTag(document.createElement("script")), this.getTag().type = "text/javascript"
    }
    var b = createjs.extend(a, createjs.AbstractLoader),
      c = a;
    c.canLoadItem = function (a) {
      return a.type == createjs.AbstractLoader.JSONP
    }, b.cancel = function () {
      this.AbstractLoader_cancel(), this._dispose()
    }, b.load = function () {
      if (null == this._item.callback) throw new Error("callback is required for loading JSONP requests.");
      if (null != window[this._item.callback]) throw new Error("JSONP callback '" + this._item.callback + "' already exists on window. You need to specify a different callback or re-name the current one.");
      window[this._item.callback] = createjs.proxy(this._handleLoad, this), window.document.body.appendChild(this._tag), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this._tag.src = this._item.src
    }, b._handleLoad = function (a) {
      this._result = this._rawResult = a, this._sendComplete(), this._dispose()
    }, b._handleTimeout = function () {
      this._dispose(), this.dispatchEvent(new createjs.ErrorEvent("timeout"))
    }, b._dispose = function () {
      window.document.body.removeChild(this._tag), delete window[this._item.callback], clearTimeout(this._loadTimeout)
    }, createjs.JSONPLoader = createjs.promote(a, "AbstractLoader")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a) {
      this.AbstractLoader_constructor(a, null, createjs.AbstractLoader.MANIFEST), this.plugins = null, this._manifestQueue = null
    }
    var b = createjs.extend(a, createjs.AbstractLoader),
      c = a;
    c.MANIFEST_PROGRESS = .25, c.canLoadItem = function (a) {
      return a.type == createjs.AbstractLoader.MANIFEST
    }, b.load = function () {
      this.AbstractLoader_load()
    }, b._createRequest = function () {
      var a = this._item.callback;
      null != a ? this._request = new createjs.JSONPLoader(this._item) : this._request = new createjs.JSONLoader(this._item)
    }, b.handleEvent = function (a) {
      switch (a.type) {
        case "complete":
          return this._rawResult = a.target.getResult(!0), this._result = a.target.getResult(), this._sendProgress(c.MANIFEST_PROGRESS), void this._loadManifest(this._result);
        case "progress":
          return a.loaded *= c.MANIFEST_PROGRESS, this.progress = a.loaded / a.total, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0), void this._sendProgress(a)
      }
      this.AbstractLoader_handleEvent(a)
    }, b.destroy = function () {
      this.AbstractLoader_destroy(), this._manifestQueue.close()
    }, b._loadManifest = function (a) {
      if (a && a.manifest) {
        var b = this._manifestQueue = new createjs.LoadQueue;
        b.on("fileload", this._handleManifestFileLoad, this), b.on("progress", this._handleManifestProgress, this), b.on("complete", this._handleManifestComplete, this, !0), b.on("error", this._handleManifestError, this, !0);
        for (var c = 0, d = this.plugins.length; d > c; c++) b.installPlugin(this.plugins[c]);
        b.loadManifest(a)
      } else this._sendComplete()
    }, b._handleManifestFileLoad = function (a) {
      a.target = null, this.dispatchEvent(a)
    }, b._handleManifestComplete = function (a) {
      this._loadedItems = this._manifestQueue.getItems(!0), this._sendComplete()
    }, b._handleManifestProgress = function (a) {
      this.progress = a.progress * (1 - c.MANIFEST_PROGRESS) + c.MANIFEST_PROGRESS, this._sendProgress(this.progress)
    }, b._handleManifestError = function (a) {
      var b = new createjs.Event("fileerror");
      b.item = a.data, this.dispatchEvent(b)
    }, createjs.ManifestLoader = createjs.promote(a, "AbstractLoader")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b) {
      this.AbstractMediaLoader_constructor(a, b, createjs.AbstractLoader.SOUND), createjs.RequestUtils.isAudioTag(a) ? this._tag = a : createjs.RequestUtils.isAudioTag(a.src) ? this._tag = a : createjs.RequestUtils.isAudioTag(a.tag) && (this._tag = createjs.RequestUtils.isAudioTag(a) ? a : a.src), null != this._tag && (this._preferXHR = !1)
    }
    var b = createjs.extend(a, createjs.AbstractMediaLoader),
      c = a;
    c.canLoadItem = function (a) {
      return a.type == createjs.AbstractLoader.SOUND
    }, b._createTag = function (a) {
      var b = document.createElement("audio");
      return b.autoplay = !1, b.preload = "none", b.src = a, b
    }, createjs.SoundLoader = createjs.promote(a, "AbstractMediaLoader")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b) {
      this.AbstractMediaLoader_constructor(a, b, createjs.AbstractLoader.VIDEO), createjs.RequestUtils.isVideoTag(a) || createjs.RequestUtils.isVideoTag(a.src) ? (this.setTag(createjs.RequestUtils.isVideoTag(a) ? a : a.src), this._preferXHR = !1) : this.setTag(this._createTag())
    }
    var b = createjs.extend(a, createjs.AbstractMediaLoader),
      c = a;
    b._createTag = function () {
      return document.createElement("video")
    }, c.canLoadItem = function (a) {
      return a.type == createjs.AbstractLoader.VIDEO
    }, createjs.VideoLoader = createjs.promote(a, "AbstractMediaLoader")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b) {
      this.AbstractLoader_constructor(a, b, createjs.AbstractLoader.SPRITESHEET), this._manifestQueue = null
    }
    var b = createjs.extend(a, createjs.AbstractLoader),
      c = a;
    c.SPRITESHEET_PROGRESS = .25, c.canLoadItem = function (a) {
      return a.type == createjs.AbstractLoader.SPRITESHEET
    }, b.destroy = function () {
      this.AbstractLoader_destroy, this._manifestQueue.close()
    }, b._createRequest = function () {
      var a = this._item.callback;
      null != a ? this._request = new createjs.JSONPLoader(this._item) : this._request = new createjs.JSONLoader(this._item)
    }, b.handleEvent = function (a) {
      switch (a.type) {
        case "complete":
          return this._rawResult = a.target.getResult(!0), this._result = a.target.getResult(), this._sendProgress(c.SPRITESHEET_PROGRESS), void this._loadManifest(this._result);
        case "progress":
          return a.loaded *= c.SPRITESHEET_PROGRESS, this.progress = a.loaded / a.total, (isNaN(this.progress) || this.progress == 1 / 0) && (this.progress = 0), void this._sendProgress(a)
      }
      this.AbstractLoader_handleEvent(a)
    }, b._loadManifest = function (a) {
      if (a && a.images) {
        var b = this._manifestQueue = new createjs.LoadQueue(this._preferXHR, this._item.path, this._item.crossOrigin);
        b.on("complete", this._handleManifestComplete, this, !0), b.on("fileload", this._handleManifestFileLoad, this), b.on("progress", this._handleManifestProgress, this), b.on("error", this._handleManifestError, this, !0), b.loadManifest(a.images)
      }
    }, b._handleManifestFileLoad = function (a) {
      var b = a.result;
      if (null != b) {
        var c = this.getResult().images,
          d = c.indexOf(a.item.src);
        c[d] = b
      }
    }, b._handleManifestComplete = function (a) {
      this._result = new createjs.SpriteSheet(this._result), this._loadedItems = this._manifestQueue.getItems(!0), this._sendComplete()
    }, b._handleManifestProgress = function (a) {
      this.progress = a.progress * (1 - c.SPRITESHEET_PROGRESS) + c.SPRITESHEET_PROGRESS, this._sendProgress(this.progress)
    }, b._handleManifestError = function (a) {
      var b = new createjs.Event("fileerror");
      b.item = a.data, this.dispatchEvent(b)
    }, createjs.SpriteSheetLoader = createjs.promote(a, "AbstractLoader")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b) {
      this.AbstractLoader_constructor(a, b, createjs.AbstractLoader.SVG), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "data", b ? this.setTag(document.createElement("svg")) : (this.setTag(document.createElement("object")), this.getTag().type = "image/svg+xml")
    }
    var b = createjs.extend(a, createjs.AbstractLoader),
      c = a;
    c.canLoadItem = function (a) {
      return a.type == createjs.AbstractLoader.SVG
    }, b._formatResult = function (a) {
      var b = createjs.DataUtils.parseXML(a.getResult(!0), "text/xml"),
        c = a.getTag();
      return !this._preferXHR && document.body.contains(c) && document.body.removeChild(c), null != b.documentElement ? (c.appendChild(b.documentElement), c.style.visibility = "visible", c) : b
    }, createjs.SVGLoader = createjs.promote(a, "AbstractLoader")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a) {
      this.AbstractLoader_constructor(a, !0, createjs.AbstractLoader.XML), this.resultFormatter = this._formatResult
    }
    var b = createjs.extend(a, createjs.AbstractLoader),
      c = a;
    c.canLoadItem = function (a) {
      return a.type == createjs.AbstractLoader.XML
    }, b._formatResult = function (a) {
      return createjs.DataUtils.parseXML(a.getResult(!0), "text/xml")
    }, createjs.XMLLoader = createjs.promote(a, "AbstractLoader")
  }(), this.createjs = this.createjs || {},
  function () {
    var a = createjs.SoundJS = createjs.SoundJS || {};
    a.version = "0.6.2", a.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT"
  }(), this.createjs = this.createjs || {}, createjs.indexOf = function (a, b) {
    "use strict";
    for (var c = 0, d = a.length; d > c; c++)
      if (b === a[c]) return c;
    return -1
  }, this.createjs = this.createjs || {},
  function () {
    "use strict";
    createjs.proxy = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 2);
      return function () {
        return a.apply(b, Array.prototype.slice.call(arguments, 0).concat(c))
      }
    }
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a() {
      throw "BrowserDetect cannot be instantiated"
    }
    var b = a.agent = window.navigator.userAgent;
    a.isWindowPhone = b.indexOf("IEMobile") > -1 || b.indexOf("Windows Phone") > -1, a.isFirefox = b.indexOf("Firefox") > -1, a.isOpera = null != window.opera, a.isChrome = b.indexOf("Chrome") > -1, a.isIOS = (b.indexOf("iPod") > -1 || b.indexOf("iPhone") > -1 || b.indexOf("iPad") > -1) && !a.isWindowPhone, a.isAndroid = b.indexOf("Android") > -1 && !a.isWindowPhone, a.isBlackberry = b.indexOf("Blackberry") > -1, createjs.BrowserDetect = a
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";
    var a = function () {
        this.interrupt = null, this.delay = null, this.offset = null, this.loop = null, this.volume = null, this.pan = null, this.startTime = null, this.duration = null
      },
      b = a.prototype = {},
      c = a;
    c.create = function (a) {
      if (a instanceof c || a instanceof Object) {
        var b = new createjs.PlayPropsConfig;
        return b.set(a), b
      }
      throw new Error("Type not recognized.")
    }, b.set = function (a) {
      for (var b in a) this[b] = a[b];
      return this
    }, b.toString = function () {
      return "[PlayPropsConfig]"
    }, createjs.PlayPropsConfig = c
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a() {
      throw "Sound cannot be instantiated"
    }

    function b(a, b) {
      this.init(a, b)
    }
    var c = a;
    c.INTERRUPT_ANY = "any", c.INTERRUPT_EARLY = "early", c.INTERRUPT_LATE = "late", c.INTERRUPT_NONE = "none", c.PLAY_INITED = "playInited", c.PLAY_SUCCEEDED = "playSucceeded", c.PLAY_INTERRUPTED = "playInterrupted", c.PLAY_FINISHED = "playFinished", c.PLAY_FAILED = "playFailed", c.SUPPORTED_EXTENSIONS = ["mp3", "ogg", "opus", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"], c.EXTENSION_MAP = {
      m4a: "mp4"
    }, c.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([\/.]*?(?:[^?]+)?\/)?((?:[^\/?]+)\.(\w+))(?:\?(\S+)?)?$/, c.defaultInterruptBehavior = c.INTERRUPT_NONE, c.alternateExtensions = [], c.activePlugin = null, c._masterVolume = 1, Object.defineProperty(c, "volume", {
      get: function () {
        return this._masterVolume
      },
      set: function (a) {
        if (null == Number(a)) return !1;
        if (a = Math.max(0, Math.min(1, a)), c._masterVolume = a, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(a))
          for (var b = this._instances, d = 0, e = b.length; e > d; d++) b[d].setMasterVolume(a)
      }
    }), c._masterMute = !1, Object.defineProperty(c, "muted", {
      get: function () {
        return this._masterMute
      },
      set: function (a) {
        if (null == a) return !1;
        if (this._masterMute = a, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(a))
          for (var b = this._instances, c = 0, d = b.length; d > c; c++) b[c].setMasterMute(a);
        return !0
      }
    }), Object.defineProperty(c, "capabilities", {
      get: function () {
        return null == c.activePlugin ? null : c.activePlugin._capabilities
      },
      set: function (a) {
        return !1
      }
    }), c._pluginsRegistered = !1, c._lastID = 0, c._instances = [], c._idHash = {}, c._preloadHash = {}, c._defaultPlayPropsHash = {}, c.addEventListener = null, c.removeEventListener = null, c.removeAllEventListeners = null, c.dispatchEvent = null, c.hasEventListener = null, c._listeners = null, createjs.EventDispatcher.initialize(c), c.getPreloadHandlers = function () {
      return {
        callback: createjs.proxy(c.initLoad, c),
        types: ["sound"],
        extensions: c.SUPPORTED_EXTENSIONS
      }
    }, c._handleLoadComplete = function (a) {
      var b = a.target.getItem().src;
      if (c._preloadHash[b])
        for (var d = 0, e = c._preloadHash[b].length; e > d; d++) {
          var f = c._preloadHash[b][d];
          if (c._preloadHash[b][d] = !0, c.hasEventListener("fileload")) {
            var a = new createjs.Event("fileload");
            a.src = f.src, a.id = f.id, a.data = f.data, a.sprite = f.sprite, c.dispatchEvent(a)
          }
        }
    }, c._handleLoadError = function (a) {
      var b = a.target.getItem().src;
      if (c._preloadHash[b])
        for (var d = 0, e = c._preloadHash[b].length; e > d; d++) {
          var f = c._preloadHash[b][d];
          if (c._preloadHash[b][d] = !1, c.hasEventListener("fileerror")) {
            var a = new createjs.Event("fileerror");
            a.src = f.src, a.id = f.id, a.data = f.data, a.sprite = f.sprite, c.dispatchEvent(a)
          }
        }
    }, c._registerPlugin = function (a) {
      return a.isSupported() ? (c.activePlugin = new a, !0) : !1
    }, c.registerPlugins = function (a) {
      c._pluginsRegistered = !0;
      for (var b = 0, d = a.length; d > b; b++)
        if (c._registerPlugin(a[b])) return !0;
      return !1
    }, c.initializeDefaultPlugins = function () {
      return null != c.activePlugin ? !0 : c._pluginsRegistered ? !1 : c.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin]) ? !0 : !1
    }, c.isReady = function () {
      return null != c.activePlugin
    }, c.getCapabilities = function () {
      return null == c.activePlugin ? null : c.activePlugin._capabilities
    }, c.getCapability = function (a) {
      return null == c.activePlugin ? null : c.activePlugin._capabilities[a]
    }, c.initLoad = function (a) {
      return c._registerSound(a)
    }, c._registerSound = function (a) {
      if (!c.initializeDefaultPlugins()) return !1;
      var d;
      if (a.src instanceof Object ? (d = c._parseSrc(a.src), d.src = a.path + d.src) : d = c._parsePath(a.src), null == d) return !1;
      a.src = d.src, a.type = "sound";
      var e = a.data,
        f = null;
      if (null != e && (isNaN(e.channels) ? isNaN(e) || (f = parseInt(e)) : f = parseInt(e.channels), e.audioSprite))
        for (var g, h = e.audioSprite.length; h--;) g = e.audioSprite[h], c._idHash[g.id] = {
          src: a.src,
          startTime: parseInt(g.startTime),
          duration: parseInt(g.duration)
        }, g.defaultPlayProps && (c._defaultPlayPropsHash[g.id] = createjs.PlayPropsConfig.create(g.defaultPlayProps));
      null != a.id && (c._idHash[a.id] = {
        src: a.src
      });
      var i = c.activePlugin.register(a);
      return b.create(a.src, f), null != e && isNaN(e) ? a.data.channels = f || b.maxPerChannel() : a.data = f || b.maxPerChannel(), i.type && (a.type = i.type), a.defaultPlayProps && (c._defaultPlayPropsHash[a.src] = createjs.PlayPropsConfig.create(a.defaultPlayProps)), i
    }, c.registerSound = function (a, b, d, e, f) {
      var g = {
        src: a,
        id: b,
        data: d,
        defaultPlayProps: f
      };
      a instanceof Object && a.src && (e = b, g = a), g = createjs.LoadItem.create(g), g.path = e, null == e || g.src instanceof Object || (g.src = e + a);
      var h = c._registerSound(g);
      if (!h) return !1;
      if (c._preloadHash[g.src] || (c._preloadHash[g.src] = []), c._preloadHash[g.src].push(g), 1 == c._preloadHash[g.src].length) h.on("complete", createjs.proxy(this._handleLoadComplete, this)), h.on("error", createjs.proxy(this._handleLoadError, this)), c.activePlugin.preload(h);
      else if (1 == c._preloadHash[g.src][0]) return !0;
      return g
    }, c.registerSounds = function (a, b) {
      var c = [];
      a.path && (b ? b += a.path : b = a.path, a = a.manifest);
      for (var d = 0, e = a.length; e > d; d++) c[d] = createjs.Sound.registerSound(a[d].src, a[d].id, a[d].data, b, a[d].defaultPlayProps);
      return c
    }, c.removeSound = function (a, d) {
      if (null == c.activePlugin) return !1;
      a instanceof Object && a.src && (a = a.src);
      var e;
      if (a instanceof Object ? e = c._parseSrc(a) : (a = c._getSrcById(a).src, e = c._parsePath(a)), null == e) return !1;
      a = e.src, null != d && (a = d + a);
      for (var f in c._idHash) c._idHash[f].src == a && delete c._idHash[f];
      return b.removeSrc(a), delete c._preloadHash[a], c.activePlugin.removeSound(a), !0
    }, c.removeSounds = function (a, b) {
      var c = [];
      a.path && (b ? b += a.path : b = a.path, a = a.manifest);
      for (var d = 0, e = a.length; e > d; d++) c[d] = createjs.Sound.removeSound(a[d].src, b);
      return c
    }, c.removeAllSounds = function () {
      c._idHash = {}, c._preloadHash = {}, b.removeAll(), c.activePlugin && c.activePlugin.removeAllSounds()
    }, c.loadComplete = function (a) {
      if (!c.isReady()) return !1;
      var b = c._parsePath(a);
      return a = b ? c._getSrcById(b.src).src : c._getSrcById(a).src, void 0 == c._preloadHash[a] ? !1 : 1 == c._preloadHash[a][0]
    }, c._parsePath = function (a) {
      "string" != typeof a && (a = a.toString());
      var b = a.match(c.FILE_PATTERN);
      if (null == b) return !1;
      for (var d = b[4], e = b[5], f = c.capabilities, g = 0; !f[e];)
        if (e = c.alternateExtensions[g++], g > c.alternateExtensions.length) return null;
      a = a.replace("." + b[5], "." + e);
      var h = {
        name: d,
        src: a,
        extension: e
      };
      return h
    }, c._parseSrc = function (a) {
      var b = {
          name: void 0,
          src: void 0,
          extension: void 0
        },
        d = c.capabilities;
      for (var e in a)
        if (a.hasOwnProperty(e) && d[e]) {
          b.src = a[e], b.extension = e;
          break
        }
      if (!b.src) return !1;
      var f = b.src.lastIndexOf("/");
      return -1 != f ? b.name = b.src.slice(f + 1) : b.name = b.src, b
    }, c.play = function (a, b, d, e, f, g, h, i, j) {
      var k;
      k = b instanceof Object || b instanceof createjs.PlayPropsConfig ? createjs.PlayPropsConfig.create(b) : createjs.PlayPropsConfig.create({
        interrupt: b,
        delay: d,
        offset: e,
        loop: f,
        volume: g,
        pan: h,
        startTime: i,
        duration: j
      });
      var l = c.createInstance(a, k.startTime, k.duration),
        m = c._playInstance(l, k);
      return m || l._playFailed(), l
    }, c.createInstance = function (a, d, e) {
      if (!c.initializeDefaultPlugins()) return new createjs.DefaultSoundInstance(a, d, e);
      var f = c._defaultPlayPropsHash[a];
      a = c._getSrcById(a);
      var g = c._parsePath(a.src),
        h = null;
      return null != g && null != g.src ? (b.create(g.src), null == d && (d = a.startTime), h = c.activePlugin.create(g.src, d, e || a.duration), f = f || c._defaultPlayPropsHash[g.src], f && h.applyPlayProps(f)) : h = new createjs.DefaultSoundInstance(a, d, e), h.uniqueId = c._lastID++, h
    }, c.stop = function () {
      for (var a = this._instances, b = a.length; b--;) a[b].stop()
    }, c.setVolume = function (a) {
      if (null == Number(a)) return !1;
      if (a = Math.max(0, Math.min(1, a)), c._masterVolume = a, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(a))
        for (var b = this._instances, d = 0, e = b.length; e > d; d++) b[d].setMasterVolume(a)
    }, c.getVolume = function () {
      return this._masterVolume
    }, c.setMute = function (a) {
      if (null == a) return !1;
      if (this._masterMute = a, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(a))
        for (var b = this._instances, c = 0, d = b.length; d > c; c++) b[c].setMasterMute(a);
      return !0
    }, c.getMute = function () {
      return this._masterMute
    }, c.setDefaultPlayProps = function (a, b) {
      a = c._getSrcById(a), c._defaultPlayPropsHash[c._parsePath(a.src).src] = createjs.PlayPropsConfig.create(b)
    }, c.getDefaultPlayProps = function (a) {
      return a = c._getSrcById(a), c._defaultPlayPropsHash[c._parsePath(a.src).src]
    }, c._playInstance = function (a, b) {
      var d = c._defaultPlayPropsHash[a.src] || {};
      if (null == b.interrupt && (b.interrupt = d.interrupt || c.defaultInterruptBehavior), null == b.delay && (b.delay = d.delay || 0), null == b.offset && (b.offset = a.getPosition()), null == b.loop && (b.loop = a.loop), null == b.volume && (b.volume = a.volume), null == b.pan && (b.pan = a.pan), 0 == b.delay) {
        var e = c._beginPlaying(a, b);
        if (!e) return !1
      } else {
        var f = setTimeout(function () {
          c._beginPlaying(a, b)
        }, b.delay);
        a.delayTimeoutId = f
      }
      return this._instances.push(a), !0
    }, c._beginPlaying = function (a, c) {
      if (!b.add(a, c.interrupt)) return !1;
      var d = a._beginPlaying(c);
      if (!d) {
        var e = createjs.indexOf(this._instances, a);
        return e > -1 && this._instances.splice(e, 1), !1
      }
      return !0
    }, c._getSrcById = function (a) {
      return c._idHash[a] || {
        src: a
      }
    }, c._playFinished = function (a) {
      b.remove(a);
      var c = createjs.indexOf(this._instances, a);
      c > -1 && this._instances.splice(c, 1)
    }, createjs.Sound = a, b.channels = {}, b.create = function (a, c) {
      var d = b.get(a);
      return null == d ? (b.channels[a] = new b(a, c), !0) : !1
    }, b.removeSrc = function (a) {
      var c = b.get(a);
      return null == c ? !1 : (c._removeAll(), delete b.channels[a], !0)
    }, b.removeAll = function () {
      for (var a in b.channels) b.channels[a]._removeAll();
      b.channels = {}
    }, b.add = function (a, c) {
      var d = b.get(a.src);
      return null == d ? !1 : d._add(a, c)
    }, b.remove = function (a) {
      var c = b.get(a.src);
      return null == c ? !1 : (c._remove(a), !0)
    }, b.maxPerChannel = function () {
      return d.maxDefault
    }, b.get = function (a) {
      return b.channels[a]
    };
    var d = b.prototype;
    d.constructor = b, d.src = null, d.max = null, d.maxDefault = 100, d.length = 0, d.init = function (a, b) {
      this.src = a, this.max = b || this.maxDefault, -1 == this.max && (this.max = this.maxDefault), this._instances = []
    }, d._get = function (a) {
      return this._instances[a]
    }, d._add = function (a, b) {
      return this._getSlot(b, a) ? (this._instances.push(a), this.length++, !0) : !1
    }, d._remove = function (a) {
      var b = createjs.indexOf(this._instances, a);
      return -1 == b ? !1 : (this._instances.splice(b, 1), this.length--, !0)
    }, d._removeAll = function () {
      for (var a = this.length - 1; a >= 0; a--) this._instances[a].stop()
    }, d._getSlot = function (b, c) {
      var d, e;
      if (b != a.INTERRUPT_NONE && (e = this._get(0), null == e)) return !0;
      for (var f = 0, g = this.max; g > f; f++) {
        if (d = this._get(f), null == d) return !0;
        if (d.playState == a.PLAY_FINISHED || d.playState == a.PLAY_INTERRUPTED || d.playState == a.PLAY_FAILED) {
          e = d;
          break
        }
        b != a.INTERRUPT_NONE && (b == a.INTERRUPT_EARLY && d.getPosition() < e.getPosition() || b == a.INTERRUPT_LATE && d.getPosition() > e.getPosition()) && (e = d)
      }
      return null != e ? (e._interrupt(), this._remove(e), !0) : !1
    }, d.toString = function () {
      return "[Sound SoundChannel]"
    }
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";
    var a = function (a, b, c, d) {
        this.EventDispatcher_constructor(), this.src = a, this.uniqueId = -1, this.playState = null, this.delayTimeoutId = null, this._volume = 1, Object.defineProperty(this, "volume", {
          get: this.getVolume,
          set: this.setVolume
        }), this._pan = 0, Object.defineProperty(this, "pan", {
          get: this.getPan,
          set: this.setPan
        }), this._startTime = Math.max(0, b || 0), Object.defineProperty(this, "startTime", {
          get: this.getStartTime,
          set: this.setStartTime
        }), this._duration = Math.max(0, c || 0), Object.defineProperty(this, "duration", {
          get: this.getDuration,
          set: this.setDuration
        }), this._playbackResource = null, Object.defineProperty(this, "playbackResource", {
          get: this.getPlaybackResource,
          set: this.setPlaybackResource
        }), d !== !1 && d !== !0 && this.setPlaybackResource(d), this._position = 0, Object.defineProperty(this, "position", {
          get: this.getPosition,
          set: this.setPosition
        }), this._loop = 0, Object.defineProperty(this, "loop", {
          get: this.getLoop,
          set: this.setLoop
        }), this._muted = !1, Object.defineProperty(this, "muted", {
          get: this.getMuted,
          set: this.setMuted
        }), this._paused = !1, Object.defineProperty(this, "paused", {
          get: this.getPaused,
          set: this.setPaused
        })
      },
      b = createjs.extend(a, createjs.EventDispatcher);
    b.play = function (a, b, c, d, e, f) {
      var g;
      return g = a instanceof Object || a instanceof createjs.PlayPropsConfig ? createjs.PlayPropsConfig.create(a) : createjs.PlayPropsConfig.create({
        interrupt: a,
        delay: b,
        offset: c,
        loop: d,
        volume: e,
        pan: f
      }), this.playState == createjs.Sound.PLAY_SUCCEEDED ? (this.applyPlayProps(g), void(this._paused && this.setPaused(!1))) : (this._cleanUp(), createjs.Sound._playInstance(this, g), this)
    }, b.stop = function () {
      return this._position = 0, this._paused = !1, this._handleStop(), this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, this
    }, b.destroy = function () {
      this._cleanUp(), this.src = null, this.playbackResource = null, this.removeAllEventListeners()
    }, b.applyPlayProps = function (a) {
      return null != a.offset && this.setPosition(a.offset), null != a.loop && this.setLoop(a.loop), null != a.volume && this.setVolume(a.volume), null != a.pan && this.setPan(a.pan), null != a.startTime && (this.setStartTime(a.startTime), this.setDuration(a.duration)), this
    }, b.toString = function () {
      return "[AbstractSoundInstance]"
    }, b.getPaused = function () {
      return this._paused
    }, b.setPaused = function (a) {
      return a !== !0 && a !== !1 || this._paused == a || 1 == a && this.playState != createjs.Sound.PLAY_SUCCEEDED ? void 0 : (this._paused = a, a ? this._pause() : this._resume(), clearTimeout(this.delayTimeoutId), this)
    }, b.setVolume = function (a) {
      return a == this._volume ? this : (this._volume = Math.max(0, Math.min(1, a)), this._muted || this._updateVolume(), this)
    }, b.getVolume = function () {
      return this._volume
    }, b.setMuted = function (a) {
      return a === !0 || a === !1 ? (this._muted = a, this._updateVolume(), this) : void 0
    }, b.getMuted = function () {
      return this._muted
    }, b.setPan = function (a) {
      return a == this._pan ? this : (this._pan = Math.max(-1, Math.min(1, a)), this._updatePan(), this)
    }, b.getPan = function () {
      return this._pan
    }, b.getPosition = function () {
      return this._paused || this.playState != createjs.Sound.PLAY_SUCCEEDED || (this._position = this._calculateCurrentPosition()), this._position
    }, b.setPosition = function (a) {
      return this._position = Math.max(0, a), this.playState == createjs.Sound.PLAY_SUCCEEDED && this._updatePosition(), this
    }, b.getStartTime = function () {
      return this._startTime
    }, b.setStartTime = function (a) {
      return a == this._startTime ? this : (this._startTime = Math.max(0, a || 0), this._updateStartTime(), this)
    }, b.getDuration = function () {
      return this._duration
    }, b.setDuration = function (a) {
      return a == this._duration ? this : (this._duration = Math.max(0, a || 0), this._updateDuration(), this)
    }, b.setPlaybackResource = function (a) {
      return this._playbackResource = a, 0 == this._duration && this._setDurationFromSource(), this
    }, b.getPlaybackResource = function () {
      return this._playbackResource
    }, b.getLoop = function () {
      return this._loop
    }, b.setLoop = function (a) {
      null != this._playbackResource && (0 != this._loop && 0 == a ? this._removeLooping(a) : 0 == this._loop && 0 != a && this._addLooping(a)), this._loop = a
    }, b._sendEvent = function (a) {
      var b = new createjs.Event(a);
      this.dispatchEvent(b)
    }, b._cleanUp = function () {
      clearTimeout(this.delayTimeoutId), this._handleCleanUp(), this._paused = !1, createjs.Sound._playFinished(this)
    }, b._interrupt = function () {
      this._cleanUp(), this.playState = createjs.Sound.PLAY_INTERRUPTED, this._sendEvent("interrupted")
    }, b._beginPlaying = function (a) {
      return this.setPosition(a.offset), this.setLoop(a.loop), this.setVolume(a.volume), this.setPan(a.pan), null != a.startTime && (this.setStartTime(a.startTime), this.setDuration(a.duration)), null != this._playbackResource && this._position < this._duration ? (this._paused = !1, this._handleSoundReady(), this.playState = createjs.Sound.PLAY_SUCCEEDED, this._sendEvent("succeeded"), !0) : (this._playFailed(), !1)
    }, b._playFailed = function () {
      this._cleanUp(), this.playState = createjs.Sound.PLAY_FAILED, this._sendEvent("failed")
    }, b._handleSoundComplete = function (a) {
      return this._position = 0, 0 != this._loop ? (this._loop--, this._handleLoop(), void this._sendEvent("loop")) : (this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, void this._sendEvent("complete"))
    }, b._handleSoundReady = function () {}, b._updateVolume = function () {}, b._updatePan = function () {}, b._updateStartTime = function () {}, b._updateDuration = function () {}, b._setDurationFromSource = function () {}, b._calculateCurrentPosition = function () {}, b._updatePosition = function () {}, b._removeLooping = function (a) {}, b._addLooping = function (a) {}, b._pause = function () {}, b._resume = function () {}, b._handleStop = function () {}, b._handleCleanUp = function () {}, b._handleLoop = function () {}, createjs.AbstractSoundInstance = createjs.promote(a, "EventDispatcher"), createjs.DefaultSoundInstance = createjs.AbstractSoundInstance
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";
    var a = function () {
        this._capabilities = null, this._loaders = {}, this._audioSources = {}, this._soundInstances = {}, this._volume = 1, this._loaderClass, this._soundInstanceClass
      },
      b = a.prototype;
    a._capabilities = null, a.isSupported = function () {
      return !0
    }, b.register = function (a) {
      var b = this._loaders[a.src];
      return b && !b.canceled ? this._loaders[a.src] : (this._audioSources[a.src] = !0, this._soundInstances[a.src] = [], b = new this._loaderClass(a), b.on("complete", this._handlePreloadComplete, this), this._loaders[a.src] = b, b)
    }, b.preload = function (a) {
      a.on("error", this._handlePreloadError, this), a.load()
    }, b.isPreloadStarted = function (a) {
      return null != this._audioSources[a]
    }, b.isPreloadComplete = function (a) {
      return !(null == this._audioSources[a] || 1 == this._audioSources[a])
    }, b.removeSound = function (a) {
      if (this._soundInstances[a]) {
        for (var b = this._soundInstances[a].length; b--;) {
          var c = this._soundInstances[a][b];
          c.destroy()
        }
        delete this._soundInstances[a], delete this._audioSources[a], this._loaders[a] && this._loaders[a].destroy(), delete this._loaders[a]
      }
    }, b.removeAllSounds = function () {
      for (var a in this._audioSources) this.removeSound(a)
    }, b.create = function (a, b, c) {
      this.isPreloadStarted(a) || this.preload(this.register(a));
      var d = new this._soundInstanceClass(a, b, c, this._audioSources[a]);
      return this._soundInstances[a].push(d), d
    }, b.setVolume = function (a) {
      return this._volume = a, this._updateVolume(), !0
    }, b.getVolume = function () {
      return this._volume
    }, b.setMute = function (a) {
      return this._updateVolume(), !0
    }, b.toString = function () {
      return "[AbstractPlugin]"
    }, b._handlePreloadComplete = function (a) {
      var b = a.target.getItem().src;
      this._audioSources[b] = a.result;
      for (var c = 0, d = this._soundInstances[b].length; d > c; c++) {
        var e = this._soundInstances[b][c];
        e.setPlaybackResource(this._audioSources[b]);
      }
    }, b._handlePreloadError = function (a) {}, b._updateVolume = function () {}, createjs.AbstractPlugin = a
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a) {
      this.AbstractLoader_constructor(a, !0, createjs.AbstractLoader.SOUND)
    }
    var b = createjs.extend(a, createjs.AbstractLoader);
    a.context = null, b.toString = function () {
      return "[WebAudioLoader]"
    }, b._createRequest = function () {
      this._request = new createjs.XHRRequest(this._item, !1), this._request.setResponseType("arraybuffer")
    }, b._sendComplete = function (b) {
      a.context.decodeAudioData(this._rawResult, createjs.proxy(this._handleAudioDecoded, this), createjs.proxy(this._sendError, this))
    }, b._handleAudioDecoded = function (a) {
      this._result = a, this.AbstractLoader__sendComplete()
    }, createjs.WebAudioLoader = createjs.promote(a, "AbstractLoader")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b, d, e) {
      this.AbstractSoundInstance_constructor(a, b, d, e), this.gainNode = c.context.createGain(), this.panNode = c.context.createPanner(), this.panNode.panningModel = c._panningModel, this.panNode.connect(this.gainNode), this._updatePan(), this.sourceNode = null, this._soundCompleteTimeout = null, this._sourceNodeNext = null, this._playbackStartTime = 0, this._endedHandler = createjs.proxy(this._handleSoundComplete, this)
    }
    var b = createjs.extend(a, createjs.AbstractSoundInstance),
      c = a;
    c.context = null, c._scratchBuffer = null, c.destinationNode = null, c._panningModel = "equalpower", b.destroy = function () {
      this.AbstractSoundInstance_destroy(), this.panNode.disconnect(0), this.panNode = null, this.gainNode.disconnect(0), this.gainNode = null
    }, b.toString = function () {
      return "[WebAudioSoundInstance]"
    }, b._updatePan = function () {
      this.panNode.setPosition(this._pan, 0, -.5)
    }, b._removeLooping = function (a) {
      this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)
    }, b._addLooping = function (a) {
      this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0))
    }, b._setDurationFromSource = function () {
      this._duration = 1e3 * this.playbackResource.duration
    }, b._handleCleanUp = function () {
      this.sourceNode && this.playState == createjs.Sound.PLAY_SUCCEEDED && (this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)), 0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0), clearTimeout(this._soundCompleteTimeout), this._playbackStartTime = 0
    }, b._cleanUpAudioNode = function (a) {
      if (a) {
        a.stop(0), a.disconnect(0);
        try {
          a.buffer = c._scratchBuffer
        } catch (b) {}
        a = null
      }
      return a
    }, b._handleSoundReady = function (a) {
      this.gainNode.connect(c.destinationNode);
      var b = .001 * this._duration,
        d = .001 * this._position;
      d > b && (d = b), this.sourceNode = this._createAndPlayAudioNode(c.context.currentTime - b, d), this._playbackStartTime = this.sourceNode.startTime - d, this._soundCompleteTimeout = setTimeout(this._endedHandler, 1e3 * (b - d)), 0 != this._loop && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0))
    }, b._createAndPlayAudioNode = function (a, b) {
      var d = c.context.createBufferSource();
      d.buffer = this.playbackResource, d.connect(this.panNode);
      var e = .001 * this._duration;
      return d.startTime = a + e, d.start(d.startTime, b + .001 * this._startTime, e - b), d
    }, b._pause = function () {
      this._position = 1e3 * (c.context.currentTime - this._playbackStartTime), this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext), 0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0), clearTimeout(this._soundCompleteTimeout)
    }, b._resume = function () {
      this._handleSoundReady()
    }, b._updateVolume = function () {
      var a = this._muted ? 0 : this._volume;
      a != this.gainNode.gain.value && (this.gainNode.gain.value = a)
    }, b._calculateCurrentPosition = function () {
      return 1e3 * (c.context.currentTime - this._playbackStartTime)
    }, b._updatePosition = function () {
      this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext), clearTimeout(this._soundCompleteTimeout), this._paused || this._handleSoundReady()
    }, b._handleLoop = function () {
      this._cleanUpAudioNode(this.sourceNode), this.sourceNode = this._sourceNodeNext, this._playbackStartTime = this.sourceNode.startTime, this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0), this._soundCompleteTimeout = setTimeout(this._endedHandler, this._duration)
    }, b._updateDuration = function () {
      this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._pause(), this._resume())
    }, createjs.WebAudioSoundInstance = createjs.promote(a, "AbstractSoundInstance")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a() {
      this.AbstractPlugin_constructor(), this._panningModel = c._panningModel, this.context = c.context, this.dynamicsCompressorNode = this.context.createDynamicsCompressor(), this.dynamicsCompressorNode.connect(this.context.destination), this.gainNode = this.context.createGain(), this.gainNode.connect(this.dynamicsCompressorNode), createjs.WebAudioSoundInstance.destinationNode = this.gainNode, this._capabilities = c._capabilities, this._loaderClass = createjs.WebAudioLoader, this._soundInstanceClass = createjs.WebAudioSoundInstance, this._addPropsToClasses()
    }
    var b = createjs.extend(a, createjs.AbstractPlugin),
      c = a;
    c._capabilities = null, c._panningModel = "equalpower", c.context = null, c._scratchBuffer = null, c._unlocked = !1, c.isSupported = function () {
      var a = createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid || createjs.BrowserDetect.isBlackberry;
      return "file:" != location.protocol || a || this._isFileXHRSupported() ? (c._generateCapabilities(), null == c.context ? !1 : !0) : !1
    }, c.playEmptySound = function () {
      if (null != c.context) {
        var a = c.context.createBufferSource();
        a.buffer = c._scratchBuffer, a.connect(c.context.destination), a.start(0, 0, 0)
      }
    }, c._isFileXHRSupported = function () {
      var a = !0,
        b = new XMLHttpRequest;
      try {
        b.open("GET", "WebAudioPluginTest.fail", !1)
      } catch (c) {
        return a = !1
      }
      b.onerror = function () {
        a = !1
      }, b.onload = function () {
        a = 404 == this.status || 200 == this.status || 0 == this.status && "" != this.response
      };
      try {
        b.send()
      } catch (c) {
        a = !1
      }
      return a
    }, c._generateCapabilities = function () {
      if (null == c._capabilities) {
        var a = document.createElement("audio");
        if (null == a.canPlayType) return null;
        if (null == c.context)
          if (window.AudioContext) c.context = new AudioContext;
          else {
            if (!window.webkitAudioContext) return null;
            c.context = new webkitAudioContext
          }
        null == c._scratchBuffer && (c._scratchBuffer = c.context.createBuffer(1, 1, 22050)), c._compatibilitySetUp(), "ontouchstart" in window && "running" != c.context.state && (c._unlock(), document.addEventListener("mousedown", c._unlock, !0), document.addEventListener("touchend", c._unlock, !0)), c._capabilities = {
          panning: !0,
          volume: !0,
          tracks: -1
        };
        for (var b = createjs.Sound.SUPPORTED_EXTENSIONS, d = createjs.Sound.EXTENSION_MAP, e = 0, f = b.length; f > e; e++) {
          var g = b[e],
            h = d[g] || g;
          c._capabilities[g] = "no" != a.canPlayType("audio/" + g) && "" != a.canPlayType("audio/" + g) || "no" != a.canPlayType("audio/" + h) && "" != a.canPlayType("audio/" + h)
        }
        c.context.destination.numberOfChannels < 2 && (c._capabilities.panning = !1)
      }
    }, c._compatibilitySetUp = function () {
      if (c._panningModel = "equalpower", !c.context.createGain) {
        c.context.createGain = c.context.createGainNode;
        var a = c.context.createBufferSource();
        a.__proto__.start = a.__proto__.noteGrainOn, a.__proto__.stop = a.__proto__.noteOff, c._panningModel = 0
      }
    }, c._unlock = function () {
      c._unlocked || (c.playEmptySound(), "running" == c.context.state && (document.removeEventListener("mousedown", c._unlock, !0), document.removeEventListener("touchend", c._unlock, !0), c._unlocked = !0))
    }, b.toString = function () {
      return "[WebAudioPlugin]"
    }, b._addPropsToClasses = function () {
      var a = this._soundInstanceClass;
      a.context = this.context, a._scratchBuffer = c._scratchBuffer, a.destinationNode = this.gainNode, a._panningModel = this._panningModel, this._loaderClass.context = this.context
    }, b._updateVolume = function () {
      var a = createjs.Sound._masterMute ? 0 : this._volume;
      a != this.gainNode.gain.value && (this.gainNode.gain.value = a)
    }, createjs.WebAudioPlugin = createjs.promote(a, "AbstractPlugin")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a() {
      throw "HTMLAudioTagPool cannot be instantiated"
    }

    function b(a) {
      this._tags = []
    }
    var c = a;
    c._tags = {}, c._tagPool = new b, c._tagUsed = {}, c.get = function (a) {
      var b = c._tags[a];
      return null == b ? (b = c._tags[a] = c._tagPool.get(), b.src = a) : c._tagUsed[a] ? (b = c._tagPool.get(), b.src = a) : c._tagUsed[a] = !0, b
    }, c.set = function (a, b) {
      b == c._tags[a] ? c._tagUsed[a] = !1 : c._tagPool.set(b)
    }, c.remove = function (a) {
      var b = c._tags[a];
      return null == b ? !1 : (c._tagPool.set(b), delete c._tags[a], delete c._tagUsed[a], !0)
    }, c.getDuration = function (a) {
      var b = c._tags[a];
      return null != b && b.duration ? 1e3 * b.duration : 0
    }, createjs.HTMLAudioTagPool = a;
    var d = b.prototype;
    d.constructor = b, d.get = function () {
      var a;
      return a = 0 == this._tags.length ? this._createTag() : this._tags.pop(), null == a.parentNode && document.body.appendChild(a), a
    }, d.set = function (a) {
      var b = createjs.indexOf(this._tags, a); - 1 == b && (this._tags.src = null, this._tags.push(a))
    }, d.toString = function () {
      return "[TagPool]"
    }, d._createTag = function () {
      var a = document.createElement("audio");
      return a.autoplay = !1, a.preload = "none", a
    }
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b, c, d) {
      this.AbstractSoundInstance_constructor(a, b, c, d), this._audioSpriteStopTime = null, this._delayTimeoutId = null, this._endedHandler = createjs.proxy(this._handleSoundComplete, this), this._readyHandler = createjs.proxy(this._handleTagReady, this), this._stalledHandler = createjs.proxy(this._playFailed, this), this._audioSpriteEndHandler = createjs.proxy(this._handleAudioSpriteLoop, this), this._loopHandler = createjs.proxy(this._handleSoundComplete, this), c ? this._audioSpriteStopTime = .001 * (b + c) : this._duration = createjs.HTMLAudioTagPool.getDuration(this.src)
    }
    var b = createjs.extend(a, createjs.AbstractSoundInstance);
    b.setMasterVolume = function (a) {
      this._updateVolume()
    }, b.setMasterMute = function (a) {
      this._updateVolume()
    }, b.toString = function () {
      return "[HTMLAudioSoundInstance]"
    }, b._removeLooping = function () {
      null != this._playbackResource && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
    }, b._addLooping = function () {
      null == this._playbackResource || this._audioSpriteStopTime || (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0)
    }, b._handleCleanUp = function () {
      var a = this._playbackResource;
      if (null != a) {
        a.pause(), a.loop = !1, a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), a.removeEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1);
        try {
          a.currentTime = this._startTime
        } catch (b) {}
        createjs.HTMLAudioTagPool.set(this.src, a), this._playbackResource = null
      }
    }, b._beginPlaying = function (a) {
      return this._playbackResource = createjs.HTMLAudioTagPool.get(this.src), this.AbstractSoundInstance__beginPlaying(a)
    }, b._handleSoundReady = function (a) {
      if (4 !== this._playbackResource.readyState) {
        var b = this._playbackResource;
        return b.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), b.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), b.preload = "auto", void b.load()
      }
      this._updateVolume(), this._playbackResource.currentTime = .001 * (this._startTime + this._position), this._audioSpriteStopTime ? this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1) : (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), 0 != this._loop && (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0)), this._playbackResource.play()
    }, b._handleTagReady = function (a) {
      this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), this._handleSoundReady()
    }, b._pause = function () {
      this._playbackResource.pause()
    }, b._resume = function () {
      this._playbackResource.play()
    }, b._updateVolume = function () {
      if (null != this._playbackResource) {
        var a = this._muted || createjs.Sound._masterMute ? 0 : this._volume * createjs.Sound._masterVolume;
        a != this._playbackResource.volume && (this._playbackResource.volume = a)
      }
    }, b._calculateCurrentPosition = function () {
      return 1e3 * this._playbackResource.currentTime - this._startTime
    }, b._updatePosition = function () {
      this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1);
      try {
        this._playbackResource.currentTime = .001 * (this._position + this._startTime)
      } catch (a) {
        this._handleSetPositionSeek(null)
      }
    }, b._handleSetPositionSeek = function (a) {
      null != this._playbackResource && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
    }, b._handleAudioSpriteLoop = function (a) {
      this._playbackResource.currentTime <= this._audioSpriteStopTime || (this._playbackResource.pause(), 0 == this._loop ? this._handleSoundComplete(null) : (this._position = 0, this._loop--, this._playbackResource.currentTime = .001 * this._startTime, this._paused || this._playbackResource.play(), this._sendEvent("loop")))
    }, b._handleLoop = function (a) {
      0 == this._loop && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
    }, b._updateStartTime = function () {
      this._audioSpriteStopTime = .001 * (this._startTime + this._duration), this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1))
    }, b._updateDuration = function () {
      this._audioSpriteStopTime = .001 * (this._startTime + this._duration), this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1))
    }, b._setDurationFromSource = function () {
      this._duration = createjs.HTMLAudioTagPool.getDuration(this.src), this._playbackResource = null
    }, createjs.HTMLAudioSoundInstance = createjs.promote(a, "AbstractSoundInstance")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a() {
      this.AbstractPlugin_constructor(), this.defaultNumChannels = 2, this._capabilities = c._capabilities, this._loaderClass = createjs.SoundLoader, this._soundInstanceClass = createjs.HTMLAudioSoundInstance
    }
    var b = createjs.extend(a, createjs.AbstractPlugin),
      c = a;
    c.MAX_INSTANCES = 30, c._AUDIO_READY = "canplaythrough", c._AUDIO_ENDED = "ended", c._AUDIO_SEEKED = "seeked", c._AUDIO_STALLED = "stalled", c._TIME_UPDATE = "timeupdate", c._capabilities = null, c.isSupported = function () {
      return c._generateCapabilities(), null != c._capabilities
    }, c._generateCapabilities = function () {
      if (null == c._capabilities) {
        var a = document.createElement("audio");
        if (null == a.canPlayType) return null;
        c._capabilities = {
          panning: !1,
          volume: !0,
          tracks: -1
        };
        for (var b = createjs.Sound.SUPPORTED_EXTENSIONS, d = createjs.Sound.EXTENSION_MAP, e = 0, f = b.length; f > e; e++) {
          var g = b[e],
            h = d[g] || g;
          c._capabilities[g] = "no" != a.canPlayType("audio/" + g) && "" != a.canPlayType("audio/" + g) || "no" != a.canPlayType("audio/" + h) && "" != a.canPlayType("audio/" + h)
        }
      }
    }, b.register = function (a) {
      var b = createjs.HTMLAudioTagPool.get(a.src),
        c = this.AbstractPlugin_register(a);
      return c.setTag(b), c
    }, b.removeSound = function (a) {
      this.AbstractPlugin_removeSound(a), createjs.HTMLAudioTagPool.remove(a)
    }, b.create = function (a, b, c) {
      var d = this.AbstractPlugin_create(a, b, c);
      return d.setPlaybackResource(null), d
    }, b.toString = function () {
      return "[HTMLAudioPlugin]"
    }, b.setVolume = b.getVolume = b.setMute = null, createjs.HTMLAudioPlugin = createjs.promote(a, "AbstractPlugin")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(b, c, d) {
      this.ignoreGlobalPause = !1, this.loop = !1, this.duration = 0, this.pluginData = d || {}, this.target = b, this.position = null, this.passive = !1, this._paused = !1, this._curQueueProps = {}, this._initQueueProps = {}, this._steps = [], this._actions = [], this._prevPosition = 0, this._stepPosition = 0, this._prevPos = -1, this._target = b, this._useTicks = !1, this._inited = !1, this._registered = !1, c && (this._useTicks = c.useTicks, this.ignoreGlobalPause = c.ignoreGlobalPause, this.loop = c.loop, c.onChange && this.addEventListener("change", c.onChange), c.override && a.removeTweens(b)), c && c.paused ? this._paused = !0 : createjs.Tween._register(this, !0), c && null != c.position && this.setPosition(c.position, a.NONE)
    }
    var b = createjs.extend(a, createjs.EventDispatcher);
    a.NONE = 0, a.LOOP = 1, a.REVERSE = 2, a.IGNORE = {}, a._tweens = [], a._plugins = {}, a.get = function (b, c, d, e) {
      return e && a.removeTweens(b), new a(b, c, d)
    }, a.tick = function (b, c) {
      for (var d = a._tweens.slice(), e = d.length - 1; e >= 0; e--) {
        var f = d[e];
        c && !f.ignoreGlobalPause || f._paused || f.tick(f._useTicks ? 1 : b)
      }
    }, a.handleEvent = function (a) {
      "tick" == a.type && this.tick(a.delta, a.paused)
    }, a.removeTweens = function (b) {
      if (b.tweenjs_count) {
        for (var c = a._tweens, d = c.length - 1; d >= 0; d--) {
          var e = c[d];
          e._target == b && (e._paused = !0, c.splice(d, 1))
        }
        b.tweenjs_count = 0
      }
    }, a.removeAllTweens = function () {
      for (var b = a._tweens, c = 0, d = b.length; d > c; c++) {
        var e = b[c];
        e._paused = !0, e.target && (e.target.tweenjs_count = 0)
      }
      b.length = 0
    }, a.hasActiveTweens = function (b) {
      return b ? null != b.tweenjs_count && !!b.tweenjs_count : a._tweens && !!a._tweens.length
    }, a.installPlugin = function (b, c) {
      var d = b.priority;
      null == d && (b.priority = d = 0);
      for (var e = 0, f = c.length, g = a._plugins; f > e; e++) {
        var h = c[e];
        if (g[h]) {
          for (var i = g[h], j = 0, k = i.length; k > j && !(d < i[j].priority); j++);
          g[h].splice(j, 0, b)
        } else g[h] = [b]
      }
    }, a._register = function (b, c) {
      var d = b._target,
        e = a._tweens;
      if (c && !b._registered) d && (d.tweenjs_count = d.tweenjs_count ? d.tweenjs_count + 1 : 1), e.push(b), !a._inited && createjs.Ticker && (createjs.Ticker.addEventListener("tick", a), a._inited = !0);
      else if (!c && b._registered) {
        d && d.tweenjs_count--;
        for (var f = e.length; f--;)
          if (e[f] == b) {
            e.splice(f, 1);
            break
          }
      }
      b._registered = c
    }, b.wait = function (a, b) {
      if (null == a || 0 >= a) return this;
      var c = this._cloneProps(this._curQueueProps);
      return this._addStep({
        d: a,
        p0: c,
        e: this._linearEase,
        p1: c,
        v: b
      })
    }, b.to = function (a, b, c) {
      return (isNaN(b) || 0 > b) && (b = 0), this._addStep({
        d: b || 0,
        p0: this._cloneProps(this._curQueueProps),
        e: c,
        p1: this._cloneProps(this._appendQueueProps(a))
      })
    }, b.call = function (a, b, c) {
      return this._addAction({
        f: a,
        p: b ? b : [this],
        o: c ? c : this._target
      })
    }, b.set = function (a, b) {
      return this._addAction({
        f: this._set,
        o: this,
        p: [a, b ? b : this._target]
      })
    }, b.play = function (a) {
      return a || (a = this), this.call(a.setPaused, [!1], a)
    }, b.pause = function (a) {
      return a || (a = this), this.call(a.setPaused, [!0], a)
    }, b.setPosition = function (a, b) {
      0 > a && (a = 0), null == b && (b = 1);
      var c = a,
        d = !1;
      if (c >= this.duration && (this.loop ? c %= this.duration : (c = this.duration, d = !0)), c == this._prevPos) return d;
      var e = this._prevPos;
      if (this.position = this._prevPos = c, this._prevPosition = a, this._target)
        if (d) this._updateTargetProps(null, 1);
        else if (this._steps.length > 0) {
        for (var f = 0, g = this._steps.length; g > f && !(this._steps[f].t > c); f++);
        var h = this._steps[f - 1];
        this._updateTargetProps(h, (this._stepPosition = c - h.t) / h.d)
      }
      return 0 != b && this._actions.length > 0 && (this._useTicks ? this._runActions(c, c) : 1 == b && e > c ? (e != this.duration && this._runActions(e, this.duration), this._runActions(0, c, !0)) : this._runActions(e, c)), d && this.setPaused(!0), this.dispatchEvent("change"), d
    }, b.tick = function (a) {
      this._paused || this.setPosition(this._prevPosition + a)
    }, b.setPaused = function (b) {
      return this._paused === !!b ? this : (this._paused = !!b, a._register(this, !b), this)
    }, b.w = b.wait, b.t = b.to, b.c = b.call, b.s = b.set, b.toString = function () {
      return "[Tween]"
    }, b.clone = function () {
      throw "Tween can not be cloned."
    }, b._updateTargetProps = function (b, c) {
      var d, e, f, g, h, i;
      if (b || 1 != c) {
        if (this.passive = !!b.v, this.passive) return;
        b.e && (c = b.e(c, 0, 1, 1)), d = b.p0, e = b.p1
      } else this.passive = !1, d = e = this._curQueueProps;
      for (var j in this._initQueueProps) {
        null == (g = d[j]) && (d[j] = g = this._initQueueProps[j]), null == (h = e[j]) && (e[j] = h = g), f = g == h || 0 == c || 1 == c || "number" != typeof g ? 1 == c ? h : g : g + (h - g) * c;
        var k = !1;
        if (i = a._plugins[j])
          for (var l = 0, m = i.length; m > l; l++) {
            var n = i[l].tween(this, j, f, d, e, c, !!b && d == e, !b);
            n == a.IGNORE ? k = !0 : f = n
          }
        k || (this._target[j] = f)
      }
    }, b._runActions = function (a, b, c) {
      var d = a,
        e = b,
        f = -1,
        g = this._actions.length,
        h = 1;
      for (a > b && (d = b, e = a, f = g, g = h = -1);
        (f += h) != g;) {
        var i = this._actions[f],
          j = i.t;
        (j == e || j > d && e > j || c && j == a) && i.f.apply(i.o, i.p)
      }
    }, b._appendQueueProps = function (b) {
      var c, d, e, f, g;
      for (var h in b)
        if (void 0 === this._initQueueProps[h]) {
          if (d = this._target[h], c = a._plugins[h])
            for (e = 0, f = c.length; f > e; e++) d = c[e].init(this, h, d);
          this._initQueueProps[h] = this._curQueueProps[h] = void 0 === d ? null : d
        } else d = this._curQueueProps[h];
      for (var h in b) {
        if (d = this._curQueueProps[h], c = a._plugins[h])
          for (g = g || {}, e = 0, f = c.length; f > e; e++) c[e].step && c[e].step(this, h, d, b[h], g);
        this._curQueueProps[h] = b[h]
      }
      return g && this._appendQueueProps(g), this._curQueueProps
    }, b._cloneProps = function (a) {
      var b = {};
      for (var c in a) b[c] = a[c];
      return b
    }, b._addStep = function (a) {
      return a.d > 0 && (this._steps.push(a), a.t = this.duration, this.duration += a.d), this
    }, b._addAction = function (a) {
      return a.t = this.duration, this._actions.push(a), this
    }, b._set = function (a, b) {
      for (var c in a) b[c] = a[c]
    }, createjs.Tween = createjs.promote(a, "EventDispatcher")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a(a, b, c) {
      this.EventDispatcher_constructor(), this.ignoreGlobalPause = !1, this.duration = 0, this.loop = !1, this.position = null, this._paused = !1, this._tweens = [], this._labels = null, this._labelList = null, this._prevPosition = 0, this._prevPos = -1, this._useTicks = !1, this._registered = !1, c && (this._useTicks = c.useTicks, this.loop = c.loop, this.ignoreGlobalPause = c.ignoreGlobalPause, c.onChange && this.addEventListener("change", c.onChange)), a && this.addTween.apply(this, a), this.setLabels(b), c && c.paused ? this._paused = !0 : createjs.Tween._register(this, !0), c && null != c.position && this.setPosition(c.position, createjs.Tween.NONE)
    }
    var b = createjs.extend(a, createjs.EventDispatcher);
    b.addTween = function (a) {
      var b = arguments.length;
      if (b > 1) {
        for (var c = 0; b > c; c++) this.addTween(arguments[c]);
        return arguments[0]
      }
      return 0 == b ? null : (this.removeTween(a), this._tweens.push(a), a.setPaused(!0), a._paused = !1, a._useTicks = this._useTicks, a.duration > this.duration && (this.duration = a.duration), this._prevPos >= 0 && a.setPosition(this._prevPos, createjs.Tween.NONE), a)
    }, b.removeTween = function (a) {
      var b = arguments.length;
      if (b > 1) {
        for (var c = !0, d = 0; b > d; d++) c = c && this.removeTween(arguments[d]);
        return c
      }
      if (0 == b) return !1;
      for (var e = this._tweens, d = e.length; d--;)
        if (e[d] == a) return e.splice(d, 1), a.duration >= this.duration && this.updateDuration(), !0;
      return !1
    }, b.addLabel = function (a, b) {
      this._labels[a] = b;
      var c = this._labelList;
      if (c) {
        for (var d = 0, e = c.length; e > d && !(b < c[d].position); d++);
        c.splice(d, 0, {
          label: a,
          position: b
        })
      }
    }, b.setLabels = function (a) {
      this._labels = a ? a : {}
    }, b.getLabels = function () {
      var a = this._labelList;
      if (!a) {
        a = this._labelList = [];
        var b = this._labels;
        for (var c in b) a.push({
          label: c,
          position: b[c]
        });
        a.sort(function (a, b) {
          return a.position - b.position
        })
      }
      return a
    }, b.getCurrentLabel = function () {
      var a = this.getLabels(),
        b = this.position,
        c = a.length;
      if (c) {
        for (var d = 0; c > d && !(b < a[d].position); d++);
        return 0 == d ? null : a[d - 1].label
      }
      return null
    }, b.gotoAndPlay = function (a) {
      this.setPaused(!1), this._goto(a)
    }, b.gotoAndStop = function (a) {
      this.setPaused(!0), this._goto(a)
    }, b.setPosition = function (a, b) {
      var c = this._calcPosition(a),
        d = !this.loop && a >= this.duration;
      if (c == this._prevPos) return d;
      this._prevPosition = a, this.position = this._prevPos = c;
      for (var e = 0, f = this._tweens.length; f > e; e++)
        if (this._tweens[e].setPosition(c, b), c != this._prevPos) return !1;
      return d && this.setPaused(!0), this.dispatchEvent("change"), d
    }, b.setPaused = function (a) {
      this._paused = !!a, createjs.Tween._register(this, !a)
    }, b.updateDuration = function () {
      this.duration = 0;
      for (var a = 0, b = this._tweens.length; b > a; a++) {
        var c = this._tweens[a];
        c.duration > this.duration && (this.duration = c.duration)
      }
    }, b.tick = function (a) {
      this.setPosition(this._prevPosition + a)
    }, b.resolve = function (a) {
      var b = Number(a);
      return isNaN(b) && (b = this._labels[a]), b
    }, b.toString = function () {
      return "[Timeline]"
    }, b.clone = function () {
      throw "Timeline can not be cloned."
    }, b._goto = function (a) {
      var b = this.resolve(a);
      null != b && this.setPosition(b)
    }, b._calcPosition = function (a) {
      return 0 > a ? 0 : a < this.duration ? a : this.loop ? a % this.duration : this.duration
    }, createjs.Timeline = createjs.promote(a, "EventDispatcher")
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a() {
      throw "Ease cannot be instantiated."
    }
    a.linear = function (a) {
      return a
    }, a.none = a.linear, a.get = function (a) {
      return -1 > a && (a = -1), a > 1 && (a = 1),
        function (b) {
          return 0 == a ? b : 0 > a ? b * (b * -a + 1 + a) : b * ((2 - b) * a + (1 - a))
        }
    }, a.getPowIn = function (a) {
      return function (b) {
        return Math.pow(b, a)
      }
    }, a.getPowOut = function (a) {
      return function (b) {
        return 1 - Math.pow(1 - b, a)
      }
    }, a.getPowInOut = function (a) {
      return function (b) {
        return (b *= 2) < 1 ? .5 * Math.pow(b, a) : 1 - .5 * Math.abs(Math.pow(2 - b, a))
      }
    }, a.quadIn = a.getPowIn(2), a.quadOut = a.getPowOut(2), a.quadInOut = a.getPowInOut(2), a.cubicIn = a.getPowIn(3), a.cubicOut = a.getPowOut(3), a.cubicInOut = a.getPowInOut(3), a.quartIn = a.getPowIn(4), a.quartOut = a.getPowOut(4), a.quartInOut = a.getPowInOut(4), a.quintIn = a.getPowIn(5), a.quintOut = a.getPowOut(5), a.quintInOut = a.getPowInOut(5), a.sineIn = function (a) {
      return 1 - Math.cos(a * Math.PI / 2)
    }, a.sineOut = function (a) {
      return Math.sin(a * Math.PI / 2)
    }, a.sineInOut = function (a) {
      return -.5 * (Math.cos(Math.PI * a) - 1)
    }, a.getBackIn = function (a) {
      return function (b) {
        return b * b * ((a + 1) * b - a)
      }
    }, a.backIn = a.getBackIn(1.7), a.getBackOut = function (a) {
      return function (b) {
        return --b * b * ((a + 1) * b + a) + 1
      }
    }, a.backOut = a.getBackOut(1.7), a.getBackInOut = function (a) {
      return a *= 1.525,
        function (b) {
          return (b *= 2) < 1 ? .5 * (b * b * ((a + 1) * b - a)) : .5 * ((b -= 2) * b * ((a + 1) * b + a) + 2)
        }
    }, a.backInOut = a.getBackInOut(1.7), a.circIn = function (a) {
      return -(Math.sqrt(1 - a * a) - 1)
    }, a.circOut = function (a) {
      return Math.sqrt(1 - --a * a)
    }, a.circInOut = function (a) {
      return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
    }, a.bounceIn = function (b) {
      return 1 - a.bounceOut(1 - b)
    }, a.bounceOut = function (a) {
      return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
    }, a.bounceInOut = function (b) {
      return .5 > b ? .5 * a.bounceIn(2 * b) : .5 * a.bounceOut(2 * b - 1) + .5
    }, a.getElasticIn = function (a, b) {
      var c = 2 * Math.PI;
      return function (d) {
        if (0 == d || 1 == d) return d;
        var e = b / c * Math.asin(1 / a);
        return -(a * Math.pow(2, 10 * (d -= 1)) * Math.sin((d - e) * c / b))
      }
    }, a.elasticIn = a.getElasticIn(1, .3), a.getElasticOut = function (a, b) {
      var c = 2 * Math.PI;
      return function (d) {
        if (0 == d || 1 == d) return d;
        var e = b / c * Math.asin(1 / a);
        return a * Math.pow(2, -10 * d) * Math.sin((d - e) * c / b) + 1
      }
    }, a.elasticOut = a.getElasticOut(1, .3), a.getElasticInOut = function (a, b) {
      var c = 2 * Math.PI;
      return function (d) {
        var e = b / c * Math.asin(1 / a);
        return (d *= 2) < 1 ? -.5 * (a * Math.pow(2, 10 * (d -= 1)) * Math.sin((d - e) * c / b)) : a * Math.pow(2, -10 * (d -= 1)) * Math.sin((d - e) * c / b) * .5 + 1
      }
    }, a.elasticInOut = a.getElasticInOut(1, .3 * 1.5), createjs.Ease = a
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";

    function a() {
      throw "MotionGuidePlugin cannot be instantiated."
    }
    a.priority = 0, a._rotOffS, a._rotOffE, a._rotNormS, a._rotNormE, a.install = function () {
      return createjs.Tween.installPlugin(a, ["guide", "x", "y", "rotation"]), createjs.Tween.IGNORE
    }, a.init = function (a, b, c) {
      var d = a.target;
      return d.hasOwnProperty("x") || (d.x = 0), d.hasOwnProperty("y") || (d.y = 0), d.hasOwnProperty("rotation") || (d.rotation = 0), "rotation" == b && (a.__needsRot = !0), "guide" == b ? null : c
    }, a.step = function (b, c, d, e, f) {
      if ("rotation" == c && (b.__rotGlobalS = d, b.__rotGlobalE = e, a.testRotData(b, f)), "guide" != c) return e;
      var g, h = e;
      h.hasOwnProperty("path") || (h.path = []);
      var i = h.path;
      if (h.hasOwnProperty("end") || (h.end = 1), h.hasOwnProperty("start") || (h.start = d && d.hasOwnProperty("end") && d.path === i ? d.end : 0), h.hasOwnProperty("_segments") && h._length) return e;
      var j = i.length,
        k = 10;
      if (!(j >= 6 && (j - 2) % 4 == 0)) throw "invalid 'path' data, please see documentation for valid paths";
      h._segments = [], h._length = 0;
      for (var l = 2; j > l; l += 4) {
        for (var m, n, o = i[l - 2], p = i[l - 1], q = i[l + 0], r = i[l + 1], s = i[l + 2], t = i[l + 3], u = o, v = p, w = 0, x = [], y = 1; k >= y; y++) {
          var z = y / k,
            A = 1 - z;
          m = A * A * o + 2 * A * z * q + z * z * s, n = A * A * p + 2 * A * z * r + z * z * t, w += x[x.push(Math.sqrt((g = m - u) * g + (g = n - v) * g)) - 1], u = m, v = n
        }
        h._segments.push(w), h._segments.push(x), h._length += w
      }
      g = h.orient, h.orient = !0;
      var B = {};
      return a.calc(h, h.start, B), b.__rotPathS = Number(B.rotation.toFixed(5)), a.calc(h, h.end, B), b.__rotPathE = Number(B.rotation.toFixed(5)), h.orient = !1, a.calc(h, h.end, f), h.orient = g, h.orient ? (b.__guideData = h, a.testRotData(b, f), e) : e
    }, a.testRotData = function (a, b) {
      if (void 0 === a.__rotGlobalS || void 0 === a.__rotGlobalE) {
        if (a.__needsRot) return;
        void 0 !== a._curQueueProps.rotation ? a.__rotGlobalS = a.__rotGlobalE = a._curQueueProps.rotation : a.__rotGlobalS = a.__rotGlobalE = b.rotation = a.target.rotation || 0
      }
      if (void 0 !== a.__guideData) {
        var c = a.__guideData,
          d = a.__rotGlobalE - a.__rotGlobalS,
          e = a.__rotPathE - a.__rotPathS,
          f = d - e;
        if ("auto" == c.orient) f > 180 ? f -= 360 : -180 > f && (f += 360);
        else if ("cw" == c.orient) {
          for (; 0 > f;) f += 360;
          0 == f && d > 0 && 180 != d && (f += 360)
        } else if ("ccw" == c.orient) {
          for (f = d - (e > 180 ? 360 - e : e); f > 0;) f -= 360;
          0 == f && 0 > d && -180 != d && (f -= 360)
        }
        c.rotDelta = f, c.rotOffS = a.__rotGlobalS - a.__rotPathS, a.__rotGlobalS = a.__rotGlobalE = a.__guideData = a.__needsRot = void 0
      }
    }, a.tween = function (b, c, d, e, f, g, h, i) {
      var j = f.guide;
      if (void 0 == j || j === e.guide) return d;
      if (j.lastRatio != g) {
        var k = (j.end - j.start) * (h ? j.end : g) + j.start;
        switch (a.calc(j, k, b.target), j.orient) {
          case "cw":
          case "ccw":
          case "auto":
            b.target.rotation += j.rotOffS + j.rotDelta * g;
            break;
          case "fixed":
          default:
            b.target.rotation += j.rotOffS
        }
        j.lastRatio = g
      }
      return "rotation" != c || j.orient && "false" != j.orient ? b.target[c] : d
    }, a.calc = function (a, b, c) {
      if (void 0 == a._segments) throw "Missing critical pre-calculated information, please file a bug";
      void 0 == c && (c = {
        x: 0,
        y: 0,
        rotation: 0
      });
      for (var d = a._segments, e = a.path, f = a._length * b, g = d.length - 2, h = 0; f > d[h] && g > h;) f -= d[h], h += 2;
      var i = d[h + 1],
        j = 0;
      for (g = i.length - 1; f > i[j] && g > j;) f -= i[j], j++;
      var k = j / ++g + f / (g * i[j]);
      h = 2 * h + 2;
      var l = 1 - k;
      return c.x = l * l * e[h - 2] + 2 * l * k * e[h + 0] + k * k * e[h + 2], c.y = l * l * e[h - 1] + 2 * l * k * e[h + 1] + k * k * e[h + 3], a.orient && (c.rotation = 57.2957795 * Math.atan2((e[h + 1] - e[h - 1]) * l + (e[h + 3] - e[h + 1]) * k, (e[h + 0] - e[h - 2]) * l + (e[h + 2] - e[h + 0]) * k)), c
    }, createjs.MotionGuidePlugin = a
  }(), this.createjs = this.createjs || {},
  function () {
    "use strict";
    var a = createjs.TweenJS = createjs.TweenJS || {};
    a.version = "0.6.2", a.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT"
  }();