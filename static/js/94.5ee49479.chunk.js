(this["webpackJsonpelambert.guillau.me"]=this["webpackJsonpelambert.guillau.me"]||[]).push([[94],{361:function(e,n,t){!function(e){"use strict";e.defineMode("sieve",(function(e){function n(e){for(var n={},t=e.split(" "),r=0;r<t.length;++r)n[t[r]]=!0;return n}var t=n("if elsif else stop require"),r=n("true false not"),i=e.indentUnit;function u(e,n){var i=e.next();if("/"==i&&e.eat("*"))return n.tokenize=l,l(e,n);if("#"===i)return e.skipToEnd(),"comment";if('"'==i)return n.tokenize=a(i),n.tokenize(e,n);if("("==i)return n._indent.push("("),n._indent.push("{"),null;if("{"===i)return n._indent.push("{"),null;if(")"==i&&(n._indent.pop(),n._indent.pop()),"}"===i)return n._indent.pop(),null;if(","==i)return null;if(";"==i)return null;if(/[{}\(\),;]/.test(i))return null;if(/\d/.test(i))return e.eatWhile(/[\d]/),e.eat(/[KkMmGg]/),"number";if(":"==i)return e.eatWhile(/[a-zA-Z_]/),e.eatWhile(/[a-zA-Z0-9_]/),"operator";e.eatWhile(/\w/);var u=e.current();return"text"==u&&e.eat(":")?(n.tokenize=o,"string"):t.propertyIsEnumerable(u)?"keyword":r.propertyIsEnumerable(u)?"atom":null}function o(e,n){return n._multiLineString=!0,e.sol()?("."==e.next()&&e.eol()&&(n._multiLineString=!1,n.tokenize=u),"string"):(e.eatSpace(),"#"==e.peek()?(e.skipToEnd(),"comment"):(e.skipToEnd(),"string"))}function l(e,n){for(var t,r=!1;null!=(t=e.next());){if(r&&"/"==t){n.tokenize=u;break}r="*"==t}return"comment"}function a(e){return function(n,t){for(var r,i=!1;null!=(r=n.next())&&(r!=e||i);)i=!i&&"\\"==r;return i||(t.tokenize=u),"string"}}return{startState:function(e){return{tokenize:u,baseIndent:e||0,_indent:[]}},token:function(e,n){return e.eatSpace()?null:(n.tokenize||u)(e,n)},indent:function(e,n){var t=e._indent.length;return n&&"}"==n[0]&&t--,t<0&&(t=0),t*i},electricChars:"}"}})),e.defineMIME("application/sieve","sieve")}(t(33))}}]);
//# sourceMappingURL=94.5ee49479.chunk.js.map