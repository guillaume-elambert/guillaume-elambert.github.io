(this["webpackJsonpelambert.guillau.me"]=this["webpackJsonpelambert.guillau.me"]||[]).push([[77],{344:function(e,t,r){!function(e){"use strict";e.defineMode("pascal",(function(){function e(e){for(var t={},r=e.split(" "),n=0;n<r.length;++n)t[r[n]]=!0;return t}var t=e("absolute and array asm begin case const constructor destructor div do downto else end file for function goto if implementation in inherited inline interface label mod nil not object of operator or packed procedure program record reintroduce repeat self set shl shr string then to type unit until uses var while with xor as class dispinterface except exports finalization finally initialization inline is library on out packed property raise resourcestring threadvar try absolute abstract alias assembler bitpacked break cdecl continue cppdecl cvar default deprecated dynamic enumerator experimental export external far far16 forward generic helper implements index interrupt iocheck local message name near nodefault noreturn nostackframe oldfpccall otherwise overload override pascal platform private protected public published read register reintroduce result safecall saveregisters softfloat specialize static stdcall stored strict unaligned unimplemented varargs virtual write"),r={null:!0},n=/[+\-*&%=<>!?|\/]/;function i(e,i){var u=e.next();if("#"==u&&i.startOfLine)return e.skipToEnd(),"meta";if('"'==u||"'"==u)return i.tokenize=a(u),i.tokenize(e,i);if("("==u&&e.eat("*"))return i.tokenize=o,o(e,i);if("{"==u)return i.tokenize=l,l(e,i);if(/[\[\]\(\),;\:\.]/.test(u))return null;if(/\d/.test(u))return e.eatWhile(/[\w\.]/),"number";if("/"==u&&e.eat("/"))return e.skipToEnd(),"comment";if(n.test(u))return e.eatWhile(n),"operator";e.eatWhile(/[\w\$_]/);var s=e.current();return t.propertyIsEnumerable(s)?"keyword":r.propertyIsEnumerable(s)?"atom":"variable"}function a(e){return function(t,r){for(var n,i=!1,a=!1;null!=(n=t.next());){if(n==e&&!i){a=!0;break}i=!i&&"\\"==n}return!a&&i||(r.tokenize=null),"string"}}function o(e,t){for(var r,n=!1;r=e.next();){if(")"==r&&n){t.tokenize=null;break}n="*"==r}return"comment"}function l(e,t){for(var r;r=e.next();)if("}"==r){t.tokenize=null;break}return"comment"}return{startState:function(){return{tokenize:null}},token:function(e,t){if(e.eatSpace())return null;var r=(t.tokenize||i)(e,t);return r},electricChars:"{}"}})),e.defineMIME("text/x-pascal","pascal")}(r(33))}}]);
//# sourceMappingURL=77.e5e067b4.chunk.js.map