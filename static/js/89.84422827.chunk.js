(this["webpackJsonpguillaume-elambert.github.io"]=this["webpackJsonpguillaume-elambert.github.io"]||[]).push([[89],{276:function(e,t,n){!function(e){"use strict";function t(e){for(var t={},n=0,r=e.length;n<r;++n)t[e[n]]=!0;return t}var n=["alias","and","BEGIN","begin","break","case","class","def","defined?","do","else","elsif","END","end","ensure","false","for","if","in","module","next","not","or","redo","rescue","retry","return","self","super","then","true","undef","unless","until","when","while","yield","nil","raise","throw","catch","fail","loop","callcc","caller","lambda","proc","public","protected","private","require","load","require_relative","extend","autoload","__END__","__FILE__","__LINE__","__dir__"],r=t(n),i=t(["def","class","case","for","while","until","module","then","catch","loop","proc","begin"]),a=t(["end","until"]),o={"[":"]","{":"}","(":")"},u={"]":"[","}":"{",")":"("};e.defineMode("ruby",(function(t){var n;function l(e,t,n){return n.tokenize.push(e),e(t,n)}function f(e,t){if(e.sol()&&e.match("=begin")&&e.eol())return t.tokenize.push(h),"comment";if(e.eatSpace())return null;var r,i=e.next();if("`"==i||"'"==i||'"'==i)return l(p(i,"string",'"'==i||"`"==i),e,t);if("/"==i)return s(e)?l(p(i,"string-2",!0),e,t):"operator";if("%"==i){var a="string",u=!0;e.eat("s")?a="atom":e.eat(/[WQ]/)?a="string":e.eat(/[r]/)?a="string-2":e.eat(/[wxq]/)&&(a="string",u=!1);var f=e.eat(/[^\w\s=]/);return f?(o.propertyIsEnumerable(f)&&(f=o[f]),l(p(f,a,u,!0),e,t)):"operator"}if("#"==i)return e.skipToEnd(),"comment";if("<"==i&&(r=e.match(/^<([-~])[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/)))return l(k(r[2],r[1]),e,t);if("0"==i)return e.eat("x")?e.eatWhile(/[\da-fA-F]/):e.eat("b")?e.eatWhile(/[01]/):e.eatWhile(/[0-7]/),"number";if(/\d/.test(i))return e.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/),"number";if("?"==i){for(;e.match(/^\\[CM]-/););return e.eat("\\")?e.eatWhile(/\w/):e.next(),"string"}if(":"==i)return e.eat("'")?l(p("'","atom",!1),e,t):e.eat('"')?l(p('"',"atom",!0),e,t):e.eat(/[\<\>]/)?(e.eat(/[\<\>]/),"atom"):e.eat(/[\+\-\*\/\&\|\:\!]/)?"atom":e.eat(/[a-zA-Z$@_\xa1-\uffff]/)?(e.eatWhile(/[\w$\xa1-\uffff]/),e.eat(/[\?\!\=]/),"atom"):"operator";if("@"==i&&e.match(/^@?[a-zA-Z_\xa1-\uffff]/))return e.eat("@"),e.eatWhile(/[\w\xa1-\uffff]/),"variable-2";if("$"==i)return e.eat(/[a-zA-Z_]/)?e.eatWhile(/[\w]/):e.eat(/\d/)?e.eat(/\d/):e.next(),"variable-3";if(/[a-zA-Z_\xa1-\uffff]/.test(i))return e.eatWhile(/[\w\xa1-\uffff]/),e.eat(/[\?\!]/),e.eat(":")?"atom":"ident";if("|"!=i||!t.varList&&"{"!=t.lastTok&&"do"!=t.lastTok){if(/[\(\)\[\]{}\\;]/.test(i))return n=i,null;if("-"==i&&e.eat(">"))return"arrow";if(/[=+\-\/*:\.^%<>~|]/.test(i)){var d=e.eatWhile(/[=+\-\/*:\.^%<>~|]/);return"."!=i||d||(n="."),"operator"}return null}return n="|",null}function s(e){for(var t,n=e.pos,r=0,i=!1,a=!1;null!=(t=e.next());)if(a)a=!1;else{if("[{(".indexOf(t)>-1)r++;else if("]})".indexOf(t)>-1){if(--r<0)break}else if("/"==t&&0==r){i=!0;break}a="\\"==t}return e.backUp(e.pos-n),i}function d(e){return e||(e=1),function(t,n){if("}"==t.peek()){if(1==e)return n.tokenize.pop(),n.tokenize[n.tokenize.length-1](t,n);n.tokenize[n.tokenize.length-1]=d(e-1)}else"{"==t.peek()&&(n.tokenize[n.tokenize.length-1]=d(e+1));return f(t,n)}}function c(){var e=!1;return function(t,n){return e?(n.tokenize.pop(),n.tokenize[n.tokenize.length-1](t,n)):(e=!0,f(t,n))}}function p(e,t,n,r){return function(i,a){var o,u=!1;for("read-quoted-paused"===a.context.type&&(a.context=a.context.prev,i.eat("}"));null!=(o=i.next());){if(o==e&&(r||!u)){a.tokenize.pop();break}if(n&&"#"==o&&!u){if(i.eat("{")){"}"==e&&(a.context={prev:a.context,type:"read-quoted-paused"}),a.tokenize.push(d());break}if(/[@\$]/.test(i.peek())){a.tokenize.push(c());break}}u=!u&&"\\"==o}return t}}function k(e,t){return function(n,r){return t&&n.eatSpace(),n.match(e)?r.tokenize.pop():n.skipToEnd(),"string"}}function h(e,t){return e.sol()&&e.match("=end")&&e.eol()&&t.tokenize.pop(),e.skipToEnd(),"comment"}return{startState:function(){return{tokenize:[f],indented:0,context:{type:"top",indented:-t.indentUnit},continuedLine:!1,lastTok:null,varList:!1}},token:function(e,t){n=null,e.sol()&&(t.indented=e.indentation());var o,u=t.tokenize[t.tokenize.length-1](e,t),l=n;if("ident"==u){var f=e.current();"keyword"==(u="."==t.lastTok?"property":r.propertyIsEnumerable(e.current())?"keyword":/^[A-Z]/.test(f)?"tag":"def"==t.lastTok||"class"==t.lastTok||t.varList?"def":"variable")&&(l=f,i.propertyIsEnumerable(f)?o="indent":a.propertyIsEnumerable(f)?o="dedent":"if"!=f&&"unless"!=f||e.column()!=e.indentation()?"do"==f&&t.context.indented<t.indented&&(o="indent"):o="indent")}return(n||u&&"comment"!=u)&&(t.lastTok=l),"|"==n&&(t.varList=!t.varList),"indent"==o||/[\(\[\{]/.test(n)?t.context={prev:t.context,type:n||u,indented:t.indented}:("dedent"==o||/[\)\]\}]/.test(n))&&t.context.prev&&(t.context=t.context.prev),e.eol()&&(t.continuedLine="\\"==n||"operator"==u),u},indent:function(n,r){if(n.tokenize[n.tokenize.length-1]!=f)return e.Pass;var i=r&&r.charAt(0),a=n.context,o=a.type==u[i]||"keyword"==a.type&&/^(?:end|until|else|elsif|when|rescue)\b/.test(r);return a.indented+(o?0:t.indentUnit)+(n.continuedLine?t.indentUnit:0)},electricInput:/^\s*(?:end|rescue|elsif|else|\})$/,lineComment:"#",fold:"indent"}})),e.defineMIME("text/x-ruby","ruby"),e.registerHelper("hintWords","ruby",n)}(n(33))}}]);
//# sourceMappingURL=89.84422827.chunk.js.map