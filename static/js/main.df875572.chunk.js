(this["webpackJsonpace-demo"]=this["webpackJsonpace-demo"]||[]).push([[0],{29:function(e){e.exports=JSON.parse('{"schema":[{"name":"table_users","columns":["column_id","column_username","column_email","column_address"]},{"name":"table_accesslog","columns":["column_id","column_user_id","column_user_agent","column_ip_address","column_access_time"]}]}')},34:function(e,n,t){e.exports=t(60)},39:function(e,n,t){},56:function(e,n,t){e.exports=t.p+"static/media/index.9d29da1e.less"},57:function(e,n,t){},60:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(26),l=t.n(c),i=(t(39),t(30)),s=t(1),u=t(13),r=t(33),m=t(27),d=t.n(m),f=t(16),p=t(21),b=t.n(p),h=t(17),g=t.n(h),v=(t(47),t(48),t(50),t(51),t(52),t(53),t(54),t(10)),C=t.n(v);t(55),g.a.require("ace/snippets");function E(e){g.a.define("ace/snippets/".concat(e),["require","exports","module"],(function(n,t){t.snippetText="",t.scope=e}))}function O(e){var n=[],t={},a={};return e.forEach((function(e){n.push({name:e.name,value:e.name,score:100,meta:"Table"}),a[e.name]=function(e){var n=[];return e.columns.forEach((function(t){n.push({caption:t,name:"".concat(e.name,".").concat(t),value:"".concat(e.name,".").concat(t),score:100,meta:"Column",className:"completion"})})),n}(e),e.columns.forEach((function(e){t[e]="Column"}))})),{table:n,column:Object(f.map)(t,(function(e,n){return{name:n,value:n,score:50,meta:e}})),tableColumn:a}}E("python"),E("sql"),E("json"),E("yaml");var j={};function w(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;j[e]=Object(f.isNil)(n)?null:O(n)}C.a.setCompleters([C.a.snippetCompleter,C.a.keyWordCompleter,C.a.textCompleter,{identifierRegexps:[/[a-zA-Z_0-9.\-\u00A2-\uFFFF]/],getCompletions:function(e,n,t,a,o){var c=j[e.id]||{table:[],column:[],tableColumn:[]},l=c.table,i=c.column,s=c.tableColumn;if(0!==a.length&&0!==l.length)if("."!==a[a.length-1])o(null,l.concat(i));else{var u=a.substring(0,a.length-1);o(null,l.concat(s[u]))}else o(null,[])}}]);var _=t(32),S=(t(56),{$blockScrolling:1/0}),x=Object(a.forwardRef)((function(e,n){var t=e.className,c=e.syntax,l=e.value,i=e.autocompleteEnabled,s=e.schema,m=e.onChange,f=e.onSelectionChange,p=Object(r.a)(e,["className","syntax","value","autocompleteEnabled","schema","onChange","onSelectionChange"]),h=Object(a.useState)(null),g=Object(u.a)(h,2),v=g[0],C=g[1],E=Object(a.useState)(null),O=Object(u.a)(E,2),j=O[0],x=O[1],y=Object(a.useState)(l),k=Object(u.a)(y,2),N=k[0],R=k[1];Object(a.useEffect)((function(){R(l)}),[l]);var F=Object(a.useCallback)((function(e){R(e),m(e)}),[m]),L=Object(a.useMemo)((function(){return{behavioursEnabled:!0,enableSnippets:!0,enableBasicAutocompletion:!0,enableLiveAutocompletion:i,autoScrollEditorIntoView:!0}}),[i]);Object(a.useEffect)((function(){if(j){var e=j.editor.id;return w(e,s),function(){w(e,null)}}}),[s,j]),Object(a.useLayoutEffect)((function(){var e=function(){j&&j.editor.resize()};if(v){e();var n=Object(_.a)(v,e);return function(){n.disconnect()}}}),[v,j]);var q=Object(a.useCallback)((function(e){var n=j.editor.session.doc.getTextRange(e.getRange()),t=n.length>1?n:null;f(t)}),[j,f]),A=Object(a.useCallback)((function(e){e.commands.bindKey({win:"Ctrl+L",mac:"Cmd+L"},null),e.commands.bindKey({win:"Ctrl+Shift+F",mac:"Cmd+Shift+F"},null),e.commands.bindKey({win:"Ctrl+P",mac:null},null),e.commands.bindKey({win:null,mac:"Ctrl+P"},"golineup"),e.commands.on("afterExec",(function(n){"insertstring"===n.command.name&&"."===n.args&&e.completer&&e.completer.showPopup(e)})),e.focus()}),[]);return Object(a.useImperativeHandle)(n,(function(){return{paste:function(e){if(j){var n=j.editor;n.session.doc.replace(n.selection.getRange(),e);var t=n.selection.getRange();m(n.session.getValue()),n.selection.setRange(t)}},focus:function(){j&&j.editor.focus()}}}),[j,m]),o.a.createElement("div",Object.assign({className:d()("sql-editor-container",t)},p,{ref:C}),o.a.createElement(b.a,{ref:x,theme:"textmate",mode:c||"sql",value:N,editorProps:S,width:"100%",height:"100%",setOptions:L,showPrintMargin:!1,wrapEnabled:!1,onLoad:A,onChange:F,onSelectionChange:q}))})),y=(t(57),t(29));var k=function(){var e=function(){};return o.a.createElement("div",{className:"App"},o.a.createElement(i.a,null,o.a.createElement(s.c,null,o.a.createElement(s.a,{path:"/"},o.a.createElement(x,{className:"SQLEditor",schema:y.schema,autocompleteEnabled:!0,onChange:e,onSelectionChange:e})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.df875572.chunk.js.map