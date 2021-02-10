(this["webpackJsonpelambert.guillau.me"]=this["webpackJsonpelambert.guillau.me"]||[]).push([[12,85,101],{282:function(e,t,n){!function(e){"use strict";function t(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}var n=t(["and","or","not","is"]),a=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in"],r=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];function o(e){return e.scopes[e.scopes.length-1]}e.registerHelper("hintWords","python",a.concat(r)),e.defineMode("python",(function(i,c){for(var s="error",l=c.delimiters||c.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,u=[c.singleOperators,c.doubleOperators,c.doubleDelimiters,c.tripleDelimiters,c.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],m=0;m<u.length;m++)u[m]||u.splice(m--,1);var f=c.hangingIndent||i.indentUnit,p=a,h=r;void 0!=c.extra_keywords&&(p=p.concat(c.extra_keywords)),void 0!=c.extra_builtins&&(h=h.concat(c.extra_builtins));var d=!(c.version&&Number(c.version)<3);if(d){var b=c.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;p=p.concat(["nonlocal","False","True","None","async","await"]),h=h.concat(["ascii","bytes","exec","print"]);var k=new RegExp("^(([rbuf]|(br)|(fr))?('{3}|\"{3}|['\"]))","i")}else b=c.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/,p=p.concat(["exec","print"]),h=h.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","False","True","None"]),k=new RegExp("^(([rubf]|(ur)|(br))?('{3}|\"{3}|['\"]))","i");var g=t(p),y=t(h);function x(e,t){var n=e.sol()&&"\\"!=t.lastToken;if(n&&(t.indent=e.indentation()),n&&"py"==o(t).type){var a=o(t).offset;if(e.eatSpace()){var r=e.indentation();return r>a?E(t):r<a&&R(e,t)&&"#"!=e.peek()&&(t.errorToken=!0),null}var i=v(e,t);return a>0&&R(e,t)&&(i+=" "+s),i}return v(e,t)}function v(e,t,a){if(e.eatSpace())return null;if(!a&&e.match(/^#.*/))return"comment";if(e.match(/^[0-9\.]/,!1)){var r=!1;if(e.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(r=!0),e.match(/^[\d_]+\.\d*/)&&(r=!0),e.match(/^\.\d+/)&&(r=!0),r)return e.eat(/J/i),"number";var o=!1;if(e.match(/^0x[0-9a-f_]+/i)&&(o=!0),e.match(/^0b[01_]+/i)&&(o=!0),e.match(/^0o[0-7_]+/i)&&(o=!0),e.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(e.eat(/J/i),o=!0),e.match(/^0(?![\dx])/i)&&(o=!0),o)return e.eat(/L/i),"number"}if(e.match(k))return-1!==e.current().toLowerCase().indexOf("f")?(t.tokenize=w(e.current(),t.tokenize),t.tokenize(e,t)):(t.tokenize=_(e.current(),t.tokenize),t.tokenize(e,t));for(var i=0;i<u.length;i++)if(e.match(u[i]))return"operator";return e.match(l)?"punctuation":"."==t.lastToken&&e.match(b)?"property":e.match(g)||e.match(n)?"keyword":e.match(y)?"builtin":e.match(/^(self|cls)\b/)?"variable-2":e.match(b)?"def"==t.lastToken||"class"==t.lastToken?"def":"variable":(e.next(),a?null:s)}function w(e,t){for(;"rubf".indexOf(e.charAt(0).toLowerCase())>=0;)e=e.substr(1);var n=1==e.length,a="string";function r(e){return function(t,n){var a=v(t,n,!0);return"punctuation"==a&&("{"==t.current()?n.tokenize=r(e+1):"}"==t.current()&&(n.tokenize=e>1?r(e-1):o)),a}}function o(o,i){for(;!o.eol();)if(o.eatWhile(/[^'"\{\}\\]/),o.eat("\\")){if(o.next(),n&&o.eol())return a}else{if(o.match(e))return i.tokenize=t,a;if(o.match("{{"))return a;if(o.match("{",!1))return i.tokenize=r(0),o.current()?a:i.tokenize(o,i);if(o.match("}}"))return a;if(o.match("}"))return s;o.eat(/['"]/)}if(n){if(c.singleLineStringErrors)return s;i.tokenize=t}return a}return o.isString=!0,o}function _(e,t){for(;"rubf".indexOf(e.charAt(0).toLowerCase())>=0;)e=e.substr(1);var n=1==e.length,a="string";function r(r,o){for(;!r.eol();)if(r.eatWhile(/[^'"\\]/),r.eat("\\")){if(r.next(),n&&r.eol())return a}else{if(r.match(e))return o.tokenize=t,a;r.eat(/['"]/)}if(n){if(c.singleLineStringErrors)return s;o.tokenize=t}return a}return r.isString=!0,r}function E(e){for(;"py"!=o(e).type;)e.scopes.pop();e.scopes.push({offset:o(e).offset+i.indentUnit,type:"py",align:null})}function S(e,t,n){var a=e.match(/^([\s\[\{\(]|#.*)*$/,!1)?null:e.column()+1;t.scopes.push({offset:t.indent+f,type:n,align:a})}function R(e,t){for(var n=e.indentation();t.scopes.length>1&&o(t).offset>n;){if("py"!=o(t).type)return!0;t.scopes.pop()}return o(t).offset!=n}function z(e,t){e.sol()&&(t.beginningOfLine=!0);var n=t.tokenize(e,t),a=e.current();if(t.beginningOfLine&&"@"==a)return e.match(b,!1)?"meta":d?"operator":s;if(/\S/.test(a)&&(t.beginningOfLine=!1),"variable"!=n&&"builtin"!=n||"meta"!=t.lastToken||(n="meta"),"pass"!=a&&"return"!=a||(t.dedent+=1),"lambda"==a&&(t.lambda=!0),":"!=a||t.lambda||"py"!=o(t).type||E(t),1==a.length&&!/string|comment/.test(n)){var r="[({".indexOf(a);if(-1!=r&&S(e,t,"])}".slice(r,r+1)),-1!=(r="])}".indexOf(a))){if(o(t).type!=a)return s;t.indent=t.scopes.pop().offset-f}}return t.dedent>0&&e.eol()&&"py"==o(t).type&&(t.scopes.length>1&&t.scopes.pop(),t.dedent-=1),n}return{startState:function(e){return{tokenize:x,scopes:[{offset:e||0,type:"py",align:null}],indent:e||0,lastToken:null,lambda:!1,dedent:0}},token:function(e,t){var n=t.errorToken;n&&(t.errorToken=!1);var a=z(e,t);return a&&"comment"!=a&&(t.lastToken="keyword"==a||"punctuation"==a?e.current():a),"punctuation"==a&&(a=null),e.eol()&&t.lambda&&(t.lambda=!1),n?a+" "+s:a},indent:function(t,n){if(t.tokenize!=x)return t.tokenize.isString?e.Pass:0;var a=o(t),r=a.type==n.charAt(0);return null!=a.align?a.align-(r?1:0):a.offset-(r?f:0)},electricInput:/^\s*[\}\]\)]$/,closeBrackets:{triples:"'\""},lineComment:"#",fold:"indent"}})),e.defineMIME("text/x-python","python");var i=function(e){return e.split(" ")};e.defineMIME("text/x-cython",{name:"python",extra_keywords:i("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE")})}(n(33))},283:function(e,t,n){!function(e){"use strict";e.defineMode("stex",(function(e,t){function n(e,t){e.cmdState.push(t)}function a(e){return e.cmdState.length>0?e.cmdState[e.cmdState.length-1]:null}function r(e){var t=e.cmdState.pop();t&&t.closeBracket()}function o(e){for(var t=e.cmdState,n=t.length-1;n>=0;n--){var a=t[n];if("DEFAULT"!=a.name)return a}return{styleIdentifier:function(){return null}}}function i(e,t,n){return function(){this.name=e,this.bracketNo=0,this.style=t,this.styles=n,this.argument=null,this.styleIdentifier=function(){return this.styles[this.bracketNo-1]||null},this.openBracket=function(){return this.bracketNo++,"bracket"},this.closeBracket=function(){}}}var c={};function s(e,t){e.f=t}function l(e,t){var r;if(e.match(/^\\[a-zA-Z@]+/)){var i=e.current().slice(1);return n(t,r=new(r=c.hasOwnProperty(i)?c[i]:c.DEFAULT)),s(t,m),r.style}if(e.match(/^\\[$&%#{}_]/))return"tag";if(e.match(/^\\[,;!\/\\]/))return"tag";if(e.match("\\["))return s(t,(function(e,t){return u(e,t,"\\]")})),"keyword";if(e.match("\\("))return s(t,(function(e,t){return u(e,t,"\\)")})),"keyword";if(e.match("$$"))return s(t,(function(e,t){return u(e,t,"$$")})),"keyword";if(e.match("$"))return s(t,(function(e,t){return u(e,t,"$")})),"keyword";var l=e.next();return"%"==l?(e.skipToEnd(),"comment"):"}"==l||"]"==l?(r=a(t))?(r.closeBracket(l),s(t,m),"bracket"):"error":"{"==l||"["==l?(n(t,r=new(r=c.DEFAULT)),"bracket"):/\d/.test(l)?(e.eatWhile(/[\w.%]/),"atom"):(e.eatWhile(/[\w\-_]/),"begin"==(r=o(t)).name&&(r.argument=e.current()),r.styleIdentifier())}function u(e,t,n){if(e.eatSpace())return null;if(n&&e.match(n))return s(t,l),"keyword";if(e.match(/^\\[a-zA-Z@]+/))return"tag";if(e.match(/^[a-zA-Z]+/))return"variable-2";if(e.match(/^\\[$&%#{}_]/))return"tag";if(e.match(/^\\[,;!\/]/))return"tag";if(e.match(/^[\^_&]/))return"tag";if(e.match(/^[+\-<>|=,\/@!*:;'"`~#?]/))return null;if(e.match(/^(\d+\.\d*|\d*\.\d+|\d+)/))return"number";var a=e.next();return"{"==a||"}"==a||"["==a||"]"==a||"("==a||")"==a?"bracket":"%"==a?(e.skipToEnd(),"comment"):"error"}function m(e,t){var n=e.peek();return"{"==n||"["==n?(a(t).openBracket(n),e.eat(n),s(t,l),"bracket"):/[ \t\r]/.test(n)?(e.eat(n),null):(s(t,l),r(t),l(e,t))}return c.importmodule=i("importmodule","tag",["string","builtin"]),c.documentclass=i("documentclass","tag",["","atom"]),c.usepackage=i("usepackage","tag",["atom"]),c.begin=i("begin","tag",["atom"]),c.end=i("end","tag",["atom"]),c.label=i("label","tag",["atom"]),c.ref=i("ref","tag",["atom"]),c.eqref=i("eqref","tag",["atom"]),c.cite=i("cite","tag",["atom"]),c.bibitem=i("bibitem","tag",["atom"]),c.Bibitem=i("Bibitem","tag",["atom"]),c.RBibitem=i("RBibitem","tag",["atom"]),c.DEFAULT=function(){this.name="DEFAULT",this.style="tag",this.styleIdentifier=this.openBracket=this.closeBracket=function(){}},{startState:function(){return{cmdState:[],f:t.inMathMode?function(e,t){return u(e,t)}:l}},copyState:function(e){return{cmdState:e.cmdState.slice(),f:e.f}},token:function(e,t){return t.f(e,t)},blankLine:function(e){e.f=l,e.cmdState.length=0},lineComment:"%"}})),e.defineMIME("text/x-stex","stex"),e.defineMIME("text/x-latex","stex")}(n(33))},356:function(e,t,n){!function(e){"use strict";e.defineMode("rst",(function(t,n){var a=/^\*\*[^\*\s](?:[^\*]*[^\*\s])?\*\*/,r=/^\*[^\*\s](?:[^\*]*[^\*\s])?\*/,o=/^``[^`\s](?:[^`]*[^`\s])``/,i=/^(?:[\d]+(?:[\.,]\d+)*)/,c=/^(?:\s\+[\d]+(?:[\.,]\d+)*)/,s=/^(?:\s\-[\d]+(?:[\.,]\d+)*)/,l=new RegExp("^[Hh][Tt][Tt][Pp][Ss]?://(?:[\\d\\w.-]+)\\.(?:\\w{2,6})(?:/[\\d\\w\\#\\%\\&\\-\\.\\,\\/\\:\\=\\?\\~]+)*"),u={token:function(e){if(e.match(a)&&e.match(/\W+|$/,!1))return"strong";if(e.match(r)&&e.match(/\W+|$/,!1))return"em";if(e.match(o)&&e.match(/\W+|$/,!1))return"string-2";if(e.match(i))return"number";if(e.match(c))return"positive";if(e.match(s))return"negative";if(e.match(l))return"link";for(;null!=e.next()&&!e.match(a,!1)&&!e.match(r,!1)&&!e.match(o,!1)&&!e.match(i,!1)&&!e.match(c,!1)&&!e.match(s,!1)&&!e.match(l,!1););return null}},m=e.getMode(t,n.backdrop||"rst-base");return e.overlayMode(m,u,!0)}),"python","stex"),e.defineMode("rst-base",(function(t){function n(e){var t=Array.prototype.slice.call(arguments,1);return e.replace(/{(\d+)}/g,(function(e,n){return"undefined"!=typeof t[n]?t[n]:e}))}var a=e.getMode(t,"python"),r=e.getMode(t,"stex"),o="\\s+",i="(?:\\s*|\\W|$)",c=new RegExp(n("^{0}",i)),s="(?:[^\\W\\d_](?:[\\w!\"#$%&'()\\*\\+,\\-\\./:;<=>\\?]*[^\\W_])?)",l=new RegExp(n("^{0}",s)),u=n("(?:{0}|`{1}`)",s,"(?:[^\\W\\d_](?:[\\w\\s!\"#$%&'()\\*\\+,\\-\\./:;<=>\\?]*[^\\W_])?)"),m="(?:[^\\s\\|](?:[^\\|]*[^\\s\\|])?)",f="(?:[^\\`]+)",p=new RegExp(n("^{0}",f)),h=new RegExp("^([!'#$%&\"()*+,-./:;<=>?@\\[\\\\\\]^_`{|}~])\\1{3,}\\s*$"),d=new RegExp(n("^\\.\\.{0}",o)),b=new RegExp(n("^_{0}:{1}|^__:{1}",u,i)),k=new RegExp(n("^{0}::{1}",u,i)),g=new RegExp(n("^\\|{0}\\|{1}{2}::{3}",m,o,u,i)),y=new RegExp(n("^\\[(?:\\d+|#{0}?|\\*)]{1}",u,i)),x=new RegExp(n("^\\[{0}\\]{1}",u,i)),v=new RegExp(n("^\\|{0}\\|",m)),w=new RegExp(n("^\\[(?:\\d+|#{0}?|\\*)]_",u)),_=new RegExp(n("^\\[{0}\\]_",u)),E=new RegExp(n("^{0}__?",u)),S=new RegExp(n("^`{0}`_",f)),R=new RegExp(n("^:{0}:`{1}`{2}",s,f,i)),z=new RegExp(n("^`{1}`:{0}:{2}",s,f,i)),M=new RegExp(n("^:{0}:{1}",s,i)),T=new RegExp(n("^{0}",u)),$=new RegExp(n("^::{0}",i)),L=new RegExp(n("^\\|{0}\\|",m)),C=new RegExp(n("^{0}",o)),P=new RegExp(n("^{0}",u)),A=new RegExp(n("^::{0}",i)),F=new RegExp("^_"),I=new RegExp(n("^{0}|_",u)),W=new RegExp(n("^:{0}",i)),B=new RegExp("^::\\s*$"),O=new RegExp("^\\s+(?:>>>|In \\[\\d+\\]:)\\s");function D(t,n){var o=null;if(t.sol()&&t.match(O,!1))H(n,J,{mode:a,local:e.startState(a)});else if(t.sol()&&t.match(d))H(n,N),o="meta";else if(t.sol()&&t.match(h))H(n,D),o="header";else if(K(n)==R||t.match(R,!1))switch(G(n)){case 0:H(n,D,j(R,1)),t.match(/^:/),o="meta";break;case 1:H(n,D,j(R,2)),t.match(l),o="keyword",t.current().match(/^(?:math|latex)/)&&(n.tmp_stex=!0);break;case 2:H(n,D,j(R,3)),t.match(/^:`/),o="meta";break;case 3:if(n.tmp_stex&&(n.tmp_stex=void 0,n.tmp={mode:r,local:e.startState(r)}),n.tmp){if("`"==t.peek()){H(n,D,j(R,4)),n.tmp=void 0;break}o=n.tmp.mode.token(t,n.tmp.local);break}H(n,D,j(R,4)),t.match(p),o="string";break;case 4:H(n,D,j(R,5)),t.match(/^`/),o="meta";break;case 5:H(n,D,j(R,6)),t.match(c);break;default:H(n,D)}else if(K(n)==z||t.match(z,!1))switch(G(n)){case 0:H(n,D,j(z,1)),t.match(/^`/),o="meta";break;case 1:H(n,D,j(z,2)),t.match(p),o="string";break;case 2:H(n,D,j(z,3)),t.match(/^`:/),o="meta";break;case 3:H(n,D,j(z,4)),t.match(l),o="keyword";break;case 4:H(n,D,j(z,5)),t.match(/^:/),o="meta";break;case 5:H(n,D,j(z,6)),t.match(c);break;default:H(n,D)}else if(K(n)==M||t.match(M,!1))switch(G(n)){case 0:H(n,D,j(M,1)),t.match(/^:/),o="meta";break;case 1:H(n,D,j(M,2)),t.match(l),o="keyword";break;case 2:H(n,D,j(M,3)),t.match(/^:/),o="meta";break;case 3:H(n,D,j(M,4)),t.match(c);break;default:H(n,D)}else if(K(n)==v||t.match(v,!1))switch(G(n)){case 0:H(n,D,j(v,1)),t.match(L),o="variable-2";break;case 1:H(n,D,j(v,2)),t.match(/^_?_?/)&&(o="link");break;default:H(n,D)}else if(t.match(w))H(n,D),o="quote";else if(t.match(_))H(n,D),o="quote";else if(t.match(E))H(n,D),t.peek()&&!t.peek().match(/^\W$/)||(o="link");else if(K(n)==S||t.match(S,!1))switch(G(n)){case 0:!t.peek()||t.peek().match(/^\W$/)?H(n,D,j(S,1)):t.match(S);break;case 1:H(n,D,j(S,2)),t.match(/^`/),o="link";break;case 2:H(n,D,j(S,3)),t.match(p);break;case 3:H(n,D,j(S,4)),t.match(/^`_/),o="link";break;default:H(n,D)}else t.match(B)?H(n,Z):t.next()&&H(n,D);return o}function N(t,n){var o=null;if(K(n)==g||t.match(g,!1))switch(G(n)){case 0:H(n,N,j(g,1)),t.match(L),o="variable-2";break;case 1:H(n,N,j(g,2)),t.match(C);break;case 2:H(n,N,j(g,3)),t.match(P),o="keyword";break;case 3:H(n,N,j(g,4)),t.match(A),o="meta";break;default:H(n,D)}else if(K(n)==k||t.match(k,!1))switch(G(n)){case 0:H(n,N,j(k,1)),t.match(T),o="keyword",t.current().match(/^(?:math|latex)/)?n.tmp_stex=!0:t.current().match(/^python/)&&(n.tmp_py=!0);break;case 1:H(n,N,j(k,2)),t.match($),o="meta",(t.match(/^latex\s*$/)||n.tmp_stex)&&(n.tmp_stex=void 0,H(n,J,{mode:r,local:e.startState(r)}));break;case 2:H(n,N,j(k,3)),(t.match(/^python\s*$/)||n.tmp_py)&&(n.tmp_py=void 0,H(n,J,{mode:a,local:e.startState(a)}));break;default:H(n,D)}else if(K(n)==b||t.match(b,!1))switch(G(n)){case 0:H(n,N,j(b,1)),t.match(F),t.match(I),o="link";break;case 1:H(n,N,j(b,2)),t.match(W),o="meta";break;default:H(n,D)}else t.match(y)||t.match(x)?(H(n,D),o="quote"):(t.eatSpace(),t.eol()?H(n,D):(t.skipToEnd(),H(n,U),o="comment"));return o}function U(e,t){return q(e,t,"comment")}function Z(e,t){return q(e,t,"meta")}function q(e,t,n){return e.eol()||e.eatSpace()?(e.skipToEnd(),n):(H(t,D),null)}function J(e,t){return t.ctx.mode&&t.ctx.local?e.sol()?(e.eatSpace()||H(t,D),null):t.ctx.mode.token(e,t.ctx.local):(H(t,D),null)}function j(e,t,n,a){return{phase:e,stage:t,mode:n,local:a}}function H(e,t,n){e.tok=t,e.ctx=n||{}}function G(e){return e.ctx.stage||0}function K(e){return e.ctx.phase}return{startState:function(){return{tok:D,ctx:j(void 0,0)}},copyState:function(t){var n=t.ctx,a=t.tmp;return n.local&&(n={mode:n.mode,local:e.copyState(n.mode,n.local)}),a&&(a={mode:a.mode,local:e.copyState(a.mode,a.local)}),{tok:t.tok,ctx:n,tmp:a}},innerMode:function(e){return e.tmp?{state:e.tmp.local,mode:e.tmp.mode}:e.ctx.mode?{state:e.ctx.local,mode:e.ctx.mode}:null},token:function(e,t){return t.tok(e,t)}}}),"python","stex"),e.defineMIME("text/x-rst","rst")}(n(33),n(282),n(283),n(396))},396:function(e,t,n){!function(e){"use strict";e.overlayMode=function(t,n,a){return{startState:function(){return{base:e.startState(t),overlay:e.startState(n),basePos:0,baseCur:null,overlayPos:0,overlayCur:null,streamSeen:null}},copyState:function(a){return{base:e.copyState(t,a.base),overlay:e.copyState(n,a.overlay),basePos:a.basePos,baseCur:null,overlayPos:a.overlayPos,overlayCur:null}},token:function(e,r){return(e!=r.streamSeen||Math.min(r.basePos,r.overlayPos)<e.start)&&(r.streamSeen=e,r.basePos=r.overlayPos=e.start),e.start==r.basePos&&(r.baseCur=t.token(e,r.base),r.basePos=e.pos),e.start==r.overlayPos&&(e.pos=e.start,r.overlayCur=n.token(e,r.overlay),r.overlayPos=e.pos),e.pos=Math.min(r.basePos,r.overlayPos),null==r.overlayCur?r.baseCur:null!=r.baseCur&&r.overlay.combineTokens||a&&null==r.overlay.combineTokens?r.baseCur+" "+r.overlayCur:r.overlayCur},indent:t.indent&&function(e,n,a){return t.indent(e.base,n,a)},electricChars:t.electricChars,innerMode:function(e){return{state:e.base,mode:t}},blankLine:function(e){var r,o;return t.blankLine&&(r=t.blankLine(e.base)),n.blankLine&&(o=n.blankLine(e.overlay)),null==o?r:a&&null!=r?r+" "+o:o}}}}(n(33))}}]);
//# sourceMappingURL=12.91970471.chunk.js.map