(this["webpackJsonpelambert.guillau.me"]=this["webpackJsonpelambert.guillau.me"]||[]).push([[121],{285:function(e,t,i){!function(e){"use strict";e.defineMode("yaml",(function(){var e=new RegExp("\\b(("+["true","false","on","off","yes","no"].join(")|(")+"))$","i");return{token:function(t,i){var n=t.peek(),r=i.escaped;if(i.escaped=!1,"#"==n&&(0==t.pos||/\s/.test(t.string.charAt(t.pos-1))))return t.skipToEnd(),"comment";if(t.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/))return"string";if(i.literal&&t.indentation()>i.keyCol)return t.skipToEnd(),"string";if(i.literal&&(i.literal=!1),t.sol()){if(i.keyCol=0,i.pair=!1,i.pairStart=!1,t.match(/---/))return"def";if(t.match(/\.\.\./))return"def";if(t.match(/\s*-\s+/))return"meta"}if(t.match(/^(\{|\}|\[|\])/))return"{"==n?i.inlinePairs++:"}"==n?i.inlinePairs--:"["==n?i.inlineList++:i.inlineList--,"meta";if(i.inlineList>0&&!r&&","==n)return t.next(),"meta";if(i.inlinePairs>0&&!r&&","==n)return i.keyCol=0,i.pair=!1,i.pairStart=!1,t.next(),"meta";if(i.pairStart){if(t.match(/^\s*(\||\>)\s*/))return i.literal=!0,"meta";if(t.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i))return"variable-2";if(0==i.inlinePairs&&t.match(/^\s*-?[0-9\.\,]+\s?$/))return"number";if(i.inlinePairs>0&&t.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))return"number";if(t.match(e))return"keyword"}return!i.pair&&t.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)?(i.pair=!0,i.keyCol=t.indentation(),"atom"):i.pair&&t.match(/^:\s*/)?(i.pairStart=!0,"meta"):(i.pairStart=!1,i.escaped="\\"==n,t.next(),null)},startState:function(){return{pair:!1,pairStart:!1,keyCol:0,inlinePairs:0,inlineList:0,literal:!1,escaped:!1}},lineComment:"#",fold:"indent"}})),e.defineMIME("text/x-yaml","yaml"),e.defineMIME("text/yaml","yaml")}(i(33))}}]);
//# sourceMappingURL=121.d3dff00d.chunk.js.map