(this["webpackJsonpelambert.guillau.me"]=this["webpackJsonpelambert.guillau.me"]||[]).push([[108],{377:function(t,e,n){!function(t){"use strict";t.defineMode("troff",(function(){var t={};function e(e){if(e.eatSpace())return null;var n=e.sol(),a=e.next();if("\\"===a)return e.match("fB")||e.match("fR")||e.match("fI")||e.match("u")||e.match("d")||e.match("%")||e.match("&")?"string":e.match("m[")?(e.skipTo("]"),e.next(),"string"):e.match("s+")||e.match("s-")?(e.eatWhile(/[\d-]/),"string"):e.match("(")||e.match("*(")?(e.eatWhile(/[\w-]/),"string"):"string";if(n&&("."===a||"'"===a)&&e.eat("\\")&&e.eat('"'))return e.skipToEnd(),"comment";if(n&&"."===a){if(e.match("B ")||e.match("I ")||e.match("R "))return"attribute";if(e.match("TH ")||e.match("SH ")||e.match("SS ")||e.match("HP "))return e.skipToEnd(),"quote";if(e.match(/[A-Z]/)&&e.match(/[A-Z]/)||e.match(/[a-z]/)&&e.match(/[a-z]/))return"attribute"}e.eatWhile(/[\w-]/);var r=e.current();return t.hasOwnProperty(r)?t[r]:null}function n(t,n){return(n.tokens[0]||e)(t,n)}return{startState:function(){return{tokens:[]}},token:function(t,e){return n(t,e)}}})),t.defineMIME("text/troff","troff"),t.defineMIME("text/x-troff","troff"),t.defineMIME("application/x-troff","troff")}(n(33))}}]);
//# sourceMappingURL=108.a0c65cf7.chunk.js.map