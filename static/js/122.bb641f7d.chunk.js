(this["webpackJsonpelambert.guillau.me"]=this["webpackJsonpelambert.guillau.me"]||[]).push([[122],{393:function(e,t,r){!function(e){"use strict";e.defineMode("z80",(function(e,t){var r,i,n=t.ez80;n?(r=/^(exx?|(ld|cp)([di]r?)?|[lp]ea|pop|push|ad[cd]|cpl|daa|dec|inc|neg|sbc|sub|and|bit|[cs]cf|x?or|res|set|r[lr]c?a?|r[lr]d|s[lr]a|srl|djnz|nop|[de]i|halt|im|in([di]mr?|ir?|irx|2r?)|ot(dmr?|[id]rx|imr?)|out(0?|[di]r?|[di]2r?)|tst(io)?|slp)(\.([sl]?i)?[sl])?\b/i,i=/^(((call|j[pr]|rst|ret[in]?)(\.([sl]?i)?[sl])?)|(rs|st)mix)\b/i):(r=/^(exx?|(ld|cp|in)([di]r?)?|pop|push|ad[cd]|cpl|daa|dec|inc|neg|sbc|sub|and|bit|[cs]cf|x?or|res|set|r[lr]c?a?|r[lr]d|s[lr]a|srl|djnz|nop|rst|[de]i|halt|im|ot[di]r|out[di]?)\b/i,i=/^(call|j[pr]|ret[in]?|b_?(call|jump))\b/i);var l=/^(af?|bc?|c|de?|e|hl?|l|i[xy]?|r|sp)\b/i,a=/^(n?[zc]|p[oe]?|m)\b/i,s=/^([hl][xy]|i[xy][hl]|slia|sll)\b/i,c=/^([\da-f]+h|[0-7]+o|[01]+b|\d+d?)\b/i;return{startState:function(){return{context:0}},token:function(e,t){if(e.column()||(t.context=0),e.eatSpace())return null;var u;if(e.eatWhile(/\w/)){if(n&&e.eat(".")&&e.eatWhile(/\w/),u=e.current(),!e.indentation())return e.match(c)?"number":null;if((1==t.context||4==t.context)&&l.test(u))return t.context=4,"var2";if(2==t.context&&a.test(u))return t.context=4,"var3";if(r.test(u))return t.context=1,"keyword";if(i.test(u))return t.context=2,"keyword";if(4==t.context&&c.test(u))return"number";if(s.test(u))return"error"}else{if(e.eat(";"))return e.skipToEnd(),"comment";if(e.eat('"')){for(;(u=e.next())&&'"'!=u;)"\\"==u&&e.next();return"string"}if(e.eat("'")){if(e.match(/\\?.'/))return"number"}else if(e.eat(".")||e.sol()&&e.eat("#")){if(t.context=5,e.eatWhile(/\w/))return"def"}else if(e.eat("$")){if(e.eatWhile(/[\da-f]/i))return"number"}else if(e.eat("%")){if(e.eatWhile(/[01]/))return"number"}else e.next()}return null}}})),e.defineMIME("text/x-z80","z80"),e.defineMIME("text/x-ez80",{name:"z80",ez80:!0})}(r(33))}}]);
//# sourceMappingURL=122.bb641f7d.chunk.js.map