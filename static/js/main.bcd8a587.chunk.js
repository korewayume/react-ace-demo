(this["webpackJsonpace-demo"]=this["webpackJsonpace-demo"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('{"schema":[{"name":"table_users","columns":["column_id","column_username","column_email","column_address"]},{"name":"table_accesslog","columns":["column_id","column_user_id","column_user_agent","column_ip_address","column_access_time"]}]}')},19:function(e,n,t){e.exports=t(43)},24:function(e,n,t){},25:function(e,n,t){},42:function(e,n,t){e.exports=t.p+"static/media/index.9d29da1e.less"},43:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(16),l=t.n(c),i=(t(24),t(25),t(1)),s=t(6),r=t.n(s),u=t(18),m=t(17),d=t.n(m),p=t(9),b=t(10),f=t.n(b),h=(t(33),t(34),t(36),t(37),t(38),t(39),t(40),t(3)),g=t.n(h);t(41),f.a.require("ace/snippets");function v(e){f.a.define("ace/snippets/".concat(e),["require","exports","module"],(function(n,t){t.snippetText="",t.scope=e}))}function E(e){var n=[],t={},a={};return e.forEach((function(e){n.push({name:e.name,value:e.name,score:100,meta:"Table"}),a[e.name]=function(e){var n=[];return e.columns.forEach((function(t){n.push({caption:t,name:"".concat(e.name,".").concat(t),value:"".concat(e.name,".").concat(t),score:100,meta:"Column",className:"completion"})})),n}(e),e.columns.forEach((function(e){t[e]="Column"}))})),{table:n,column:Object(p.map)(t,(function(e,n){return{name:n,value:n,score:50,meta:e}})),tableColumn:a}}v("python"),v("sql"),v("json"),v("yaml");var C={};function O(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;C[e]=Object(p.isNil)(n)?null:E(n)}g.a.setCompleters([g.a.snippetCompleter,g.a.keyWordCompleter,g.a.textCompleter,{identifierRegexps:[/[a-zA-Z_0-9.\-\u00A2-\uFFFF]/],getCompletions:function(e,n,t,a,o){var c=C[e.id]||{table:[],column:[],tableColumn:[]},l=c.table,i=c.column,s=c.tableColumn;if(0!==a.length&&0!==l.length)if("."!==a[a.length-1])o(null,l.concat(i));else{var r=a.substring(0,a.length-1);o(null,l.concat(s[r]))}else o(null,[])}}]);t(42);var j={$blockScrolling:1/0},S=Object(a.forwardRef)((function(e,n){var t=e.className,c=e.syntax,l=e.value,s=e.autocompleteEnabled,m=e.schema,p=e.onChange,b=e.onSelectionChange,f=Object(u.a)(e,["className","syntax","value","autocompleteEnabled","schema","onChange","onSelectionChange"]),h=Object(a.useState)(null),g=Object(i.a)(h,2),v=g[0],E=g[1],C=Object(a.useState)(l),S=Object(i.a)(C,2),w=S[0],_=S[1];Object(a.useEffect)((function(){_(l)}),[l]);var x=Object(a.useCallback)((function(e){_(e),p(e)}),[p]),y=Object(a.useMemo)((function(){return{behavioursEnabled:!0,enableSnippets:!0,enableBasicAutocompletion:!0,enableLiveAutocompletion:s,autoScrollEditorIntoView:!0}}),[s]);Object(a.useEffect)((function(){if(v){var e=v.editor.id;return O(e,m),function(){O(e,null)}}}),[m,v]);var k=Object(a.useCallback)((function(e){var n=v.editor.session.doc.getTextRange(e.getRange()),t=n.length>1?n:null;b(t)}),[v,b]),N=Object(a.useCallback)((function(e){e.commands.bindKey({win:"Ctrl+L",mac:"Cmd+L"},null),e.commands.bindKey({win:"Ctrl+Shift+F",mac:"Cmd+Shift+F"},null),e.commands.bindKey({win:"Ctrl+P",mac:null},null),e.commands.bindKey({win:null,mac:"Ctrl+P"},"golineup"),e.commands.on("afterExec",(function(n){"insertstring"===n.command.name&&"."===n.args&&e.completer&&e.completer.showPopup(e)})),e.focus()}),[]);return Object(a.useImperativeHandle)(n,(function(){return{paste:function(e){if(v){var n=v.editor;n.session.doc.replace(n.selection.getRange(),e);var t=n.selection.getRange();p(n.session.getValue()),n.selection.setRange(t)}},focus:function(){v&&v.editor.focus()}}}),[v,p]),o.a.createElement("div",Object.assign({className:d()("sql-editor-container",t)},f),o.a.createElement(r.a,{ref:E,theme:"textmate",mode:c||"sql",value:w,editorProps:j,width:"100%",height:"100%",setOptions:y,showPrintMargin:!1,wrapEnabled:!1,onLoad:N,onChange:x,onSelectionChange:k}))})),w=t(11),_=function(){};var x=function(){var e=Object(a.useState)(JSON.stringify(w.schema,null,2)),n=Object(i.a)(e,2),t=n[0],c=n[1],l=Object(a.useState)(w.schema),s=Object(i.a)(l,2),u=s[0],m=s[1],d=Object(a.useState)(!1),p=Object(i.a)(d,2),b=p[0],f=p[1];return Object(a.useEffect)((function(){try{m(JSON.parse(t)),f(!1)}catch(e){f(!0)}}),[t]),o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,o.a.createElement("span",null,"Schema: "),b?o.a.createElement("span",{style:{color:"red"}},"SchemaError"):null),o.a.createElement(r.a,{theme:"textmate",mode:"json",value:t,editorProps:{$blockScrolling:1/0},width:"100%",setOptions:{behavioursEnabled:!0,enableSnippets:!0,enableBasicAutocompletion:!0,enableLiveAutocompletion:!1,autoScrollEditorIntoView:!0},showPrintMargin:!1,wrapEnabled:!1,onChange:c}),o.a.createElement("h3",null,"SQL Editor:"),o.a.createElement(S,{className:"SQLEditor",schema:u,autocompleteEnabled:!0,onChange:_,onSelectionChange:_}))};var y=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.bcd8a587.chunk.js.map