(this["webpackJsonpdata-parser"]=this["webpackJsonpdata-parser"]||[]).push([[0],{130:function(e,t,a){},198:function(e,t,a){e.exports=a(335)},203:function(e,t,a){},204:function(e,t,a){},213:function(e,t,a){},222:function(e,t,a){},332:function(e,t,a){},333:function(e,t,a){},334:function(e,t,a){},335:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"set_full_list_urls",(function(){return X})),a.d(r,"set_crawl_urls",(function(){return Y})),a.d(r,"set_crawl_selectors",(function(){return $})),a.d(r,"set_partial_results",(function(){return Q})),a.d(r,"set_final_results",(function(){return Z}));var s=a(0),n=a.n(s),c=a(8),l=a.n(c),o=(a(203),a(12)),i=a(9),u=a(14),p=a(15),m=a(16),d=a(41),_=a(174),h=a(382),b=(a(204),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"header"})}}]),t}(n.a.Component)),f=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null)}}]),t}(n.a.Component),v=a(17),E=a(123),g=a(158),y=a.n(g),O={full_list_urls:[],crawl_urls:!1,crawl_selectors:!1,partial_results:!1,final_results:!1};var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,a=Object.assign({},e);switch(t.type){case"SET_FULL_LIST_URLS":return a.full_list_urls=t.full_list_urls,a;case"SET_CRAWL_URLS":return a.crawl_urls=t.crawl_urls,a;case"SET_CRAWL_SELECTORS":return a.crawl_selectors=t.crawl_selectors,a;case"SET_PARTIAL_RESULTS":return a.partial_results=t.partial_results,a;case"SET_FINAL_RESULTS":return a.final_results=t.final_results,a;default:return e}},k=Object(v.b)({GlobalReducer:j}),C={key:"root",storage:y.a},w=Object(E.a)(C,k),N=Object(v.c)(w),S=Object(E.b)(N),x=[{title:"Title",tag_id:"liirrcbf",color:"#ffd663"},{title:"Artist Name",tag_id:"oasfwmhe",color:"#58a8f7"},{title:"Birth Year",tag_id:"laqslbyn",color:"#848dea"},{title:"Hammer Price",tag_id:"avtlfvai",color:"#64fd9a"},{title:"Top Estimation",tag_id:"dnpbjoqh",color:"#f464fd"},{title:"Floor Estimation",tag_id:"tmpdyusc",color:"#0037d2"},{title:"Currency",tag_id:"nibmukqh",color:"#bbbbbb"},{title:"Medium",tag_id:"bfiamcvb",color:"#ff7c43"},{title:"Size",tag_id:"sxqovcja",color:"#76e27a"}],R=a(47),T=a(29),F=a(7),L=a(26),q=a(379),B=a(374),U=a(369),A=a(373),P=a(377),H=a(378),G=a(376),I=a(375),W=a(386),z=a(387),D=a(11),V=a.n(D),J=a(69),M=a(70),K=a.n(M);function X(e){return{type:"SET_FULL_LIST_URLS",full_list_urls:e}}function Y(e){return{type:"SET_CRAWL_URLS",crawl_urls:e}}function $(e){return{type:"SET_CRAWL_SELECTORS",crawl_selectors:e}}function Q(e){return{type:"SET_PARTIAL_RESULTS",partial_results:e}}function Z(e){return{type:"SET_FINAL_RESULTS",final_results:e}}a(130);function ee(e){try{return document.querySelector(e),!0}catch(t){}return!1}var te=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={open_tags_dialog:!1,is_selector_valid:!0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(J.a,null),n.a.createElement("div",{className:"home-selector-container",style:this.state.is_selector_valid?{}:{backgroundColor:"#fd676417"}},n.a.createElement("div",{className:"home-selector-input-container"},n.a.createElement(U.a,{label:"Dense multiline",fullWidth:!0,disableUnderline:!0,placeholder:"My Awesome CSS selector",defaultValue:this.props.config.css_selector,onChange:function(t){e.setState({is_selector_valid:ee(t.target.value)}),e.props.edit_selector(e.props.config.selector_id,t.target.value)}})),this.props.config.tag&&n.a.createElement("span",{style:{backgroundColor:this.props.config.tag.color},className:"home-tag-indicator"},this.props.config.tag.title),!this.props.config.tag&&n.a.createElement("span",{style:{backgroundColor:"#fd6764"},className:"home-tag-indicator"},"Post Process"),n.a.createElement("i",{className:"home-selector-icon material-icons",onClick:function(){return e.setState({open_tags_dialog:!0})}},"label"),n.a.createElement("i",{className:"home-selector-icon material-icons"},"more_horiz"),n.a.createElement("i",{className:"home-selector-icon material-icons",onClick:function(){return e.props.remove_selector(e.props.config.selector_id)}},"close")),n.a.createElement(A.a,null),n.a.createElement(W.a,{onClose:function(){return e.setState({open_tags_dialog:!1})},open:this.state.open_tags_dialog,"aria-labelledby":"simple-dialog-title"},n.a.createElement(I.a,{id:"simple-dialog-title"},"Select a tag"),n.a.createElement(G.a,null,n.a.createElement(P.a,{style:{backgroundColor:"#eaeaea"},button:!0,onClick:function(){e.setState({open_tags_dialog:!1}),e.props.add_tag(e.props.config.selector_id,!1)},key:V()()},n.a.createElement(H.a,{primary:"Post process"})),x.map((function(t){return n.a.createElement(P.a,{button:!0,onClick:function(){e.setState({open_tags_dialog:!1}),e.props.add_tag(e.props.config.selector_id,t)},key:V()()},n.a.createElement(H.a,{primary:t.title}))})))))}}]),t}(n.a.Component),ae=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={add_selector_field:"",selectors:a.props.crawl_selectors?a.props.crawl_selectors:{},urls:a.props.full_list_urls},a.add_selector=a.add_selector.bind(Object(F.a)(a)),a.remove_selector=a.remove_selector.bind(Object(F.a)(a)),a.add_tag=a.add_tag.bind(Object(F.a)(a)),a.edit_selector=a.edit_selector.bind(Object(F.a)(a)),a.next=a.next.bind(Object(F.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"add_selector",value:function(){var e=Object.assign({},this.state.selectors),t=V()();e[t]={selector_id:t,css_selector:this.state.add_selector_field,tag:!1,regex:"",attr:"",urls:[],snackbar_open:!1,snackbar_message:"",redirect:!1},this.setState({selectors:e}),this.setState({add_selector_field:""}),this.props.actions.set_crawl_selectors(e)}},{key:"remove_selector",value:function(e){var t=Object.assign({},this.state.selectors);delete t[e],this.setState({selectors:t}),this.props.actions.set_crawl_selectors(t)}},{key:"add_tag",value:function(e,t){var a=Object.assign({},this.state.selectors);a[e].tag=t,this.setState({selectors:a}),this.props.actions.set_crawl_selectors(a)}},{key:"edit_selector",value:function(e,t){var a=Object.assign({},this.state.selectors);a[e].css_selector=t,this.state.selectors=a}},{key:"next",value:function(e){for(var t=Object.assign({},this.state.selectors),a=Object.keys(t).length-1;a>=0;a--){var r=Object.keys(t)[a];ee(t[r].css_selector)||delete t[r]}if(0===Object.keys(t).length)return this.setState({snackbar_message:"No proper CSS selector found"}),void this.setState({snackbar_open:!0});this.props.actions.set_crawl_selectors(t),this.setState({redirect:"/urls/"})}},{key:"render",value:function(){var e=this;return this.state.redirect?n.a.createElement(R.a,{to:this.state.redirect}):n.a.createElement("div",{className:"home-main-container"},n.a.createElement(J.a,null),n.a.createElement(B.a,{className:"home-section"},n.a.createElement("div",{className:"home-section-header"},n.a.createElement("div",null,n.a.createElement("div",{className:"home-section-header-title"},"Selectors"),n.a.createElement("div",{className:"home-section-header-subtitle"},"Add your CSS selectors and their respective tags")),n.a.createElement("div",null,n.a.createElement(q.a,{className:"home-run-button",variant:"contained",color:"primary",onClick:this.next},"NEXT"))),n.a.createElement(K.a,{speed:.8,className:"home-section-body",contentClassName:"content",horizontal:!1,smoothScrolling:!0},n.a.createElement(n.a.Fragment,null,n.a.createElement("br",null),n.a.createElement(A.a,null),Object.keys(this.state.selectors).map((function(t){return n.a.createElement(te,{config:e.state.selectors[t],remove_selector:e.remove_selector,add_tag:e.add_tag,edit_selector:e.edit_selector,key:V()()})})),n.a.createElement("div",{className:"home-selector-container"},n.a.createElement("div",{className:"home-selector-input-container"},n.a.createElement(U.a,{label:"CSS Selector",fullWidth:!0,disableUnderline:!0,placeholder:"My Awesome CSS selector",value:this.state.add_selector_field,onChange:function(t){return e.setState({add_selector_field:t.target.value})},onKeyDown:function(t){"Enter"===t.key&&e.add_selector()}})),n.a.createElement("i",{className:"home-selector-icon material-icons",onClick:this.add_selector},"add")),n.a.createElement(A.a,null)))),n.a.createElement(z.a,{message:this.state.snackbar_message,open:this.state.snackbar_open,onClose:function(){return e.setState({snackbar_open:!1})}}))}}]),t}(n.a.Component);var re=Object(L.b)((function(e){return{crawl_selectors:e.GlobalReducer.crawl_selectors}}),(function(e){return{actions:Object(v.a)(Object(T.a)({},r),e)}}))(ae),se=a(383),ne=a(122),ce=a.n(ne);function le(e){for(var t="",a=Object.keys(e),r=a.length-1;r>=0;r--){t=t+e[a[r]].url+"\n"}return t}var oe=function(e){function t(e){var a;Object(o.a)(this,t),a=Object(u.a)(this,Object(p.a)(t).call(this,e));for(var r=Object.assign({},a.props.full_list_urls),s=Object.keys(r),n=s.length-1;n>=0;n--){r[s[n]].status="in_queue"}return a.state={add_selector_field:"",urls:r},a.url_list_changed=a.url_list_changed.bind(Object(F.a)(a)),a.run=a.run.bind(Object(F.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"url_list_changed",value:function(e){for(var t=Object.assign({},{}),a=e.target.value.split("\n"),r=V()(),s=a.length-1;s>=0;s--)t[r=V()()]={url:a[s],url_id:r,status:"in_queue",page_source:!1,response_code:!1};this.props.actions.set_full_list_urls(t),this.state.urls=t}},{key:"run",value:function(e){for(var t,a,r=Object.assign({},this.state.urls),s=Object.keys(r).length-1;s>=0;s--){var n=Object.keys(r)[s];void 0!==ce()({website:r[n].url},{website:{url:!0}})&&delete r[n]}for(s=r.length-1;s>=0;s--){void 0!==ce()({website:r[s]},{website:{url:!0}})&&r.splice(s,1)}if(0===Object.keys(r).length)return this.setState({snackbar_message:"No proper URLs found"}),void this.setState({snackbar_open:!0});!e&&Object.keys(r).length>3&&(t=r,a=3,r=Object.keys(t).sort().slice(0,a).reduce((function(e,a){return e[a]=t[a],e}),{})),this.props.actions.set_crawl_urls(r),this.setState({redirect:"/progress/"})}},{key:"render",value:function(){var e=this;return this.state.redirect?n.a.createElement(R.a,{to:this.state.redirect}):n.a.createElement("div",{className:"home-main-container"},n.a.createElement(J.a,null),n.a.createElement(B.a,{className:"home-section"},n.a.createElement("div",{className:"home-section-header"},n.a.createElement("div",null,n.a.createElement("div",{className:"home-section-header-title"},"URLs to scrape"),n.a.createElement("div",{className:"home-section-header-subtitle"},"URL list here - One per line")),n.a.createElement("div",null,n.a.createElement(q.a,{className:"home-run-sample-button",variant:"contained",color:"secondary",onClick:function(){return e.setState({redirect:"/"})}},"BACK"),n.a.createElement(q.a,{className:"home-run-sample-button",variant:"contained",color:"secondary","data-tip":"Run a sample of 3 URLs only",onClick:function(){return e.run(!1)}},"RUN SAMPLE"),n.a.createElement(q.a,{className:"home-run-button",variant:"contained",color:"primary",onClick:function(){return e.run(!0)}},"RUN"))),n.a.createElement("div",{className:"home-section-body"},n.a.createElement("br",null),n.a.createElement(se.a,{id:"outlined-dense-multiline",label:"URL List",margin:"dense",variant:"outlined",multiline:!0,fullWidth:!0,defaultValue:le(this.state.urls),onChange:this.url_list_changed}))),n.a.createElement(z.a,{message:this.state.snackbar_message,open:this.state.snackbar_open,onClose:function(){return e.setState({snackbar_open:!1})}}))}}]),t}(n.a.Component);var ie=Object(L.b)((function(e){return{full_list_urls:e.GlobalReducer.full_list_urls}}),(function(e){return{actions:Object(v.a)(Object(T.a)({},r),e)}}))(oe),ue=a(160),pe=a.n(ue),me=a(381),de=(a(213),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={urls:a.props.crawl_urls,in_queue_counter:0,initial_queue_size:0,redirect:!1},a.crawl=a.crawl.bind(Object(F.a)(a)),a.crawl_next=a.crawl_next.bind(Object(F.a)(a)),a.count_in_queue=a.count_in_queue.bind(Object(F.a)(a)),a.update_queue=a.update_queue.bind(Object(F.a)(a)),a.crawl_finished=a.crawl_finished.bind(Object(F.a)(a)),a.state.initial_queue_size=a.count_in_queue(),a.crawl_next(),a.state.in_queue_counter=a.count_in_queue()+1,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"crawl_next",value:function(){for(var e=Object.assign({},this.state.urls),t=0;t<Object.keys(e).length;t++){var a=Object.keys(e)[t],r=e[a];if("in_queue"===r.status)return e[a].status="scraping",this.setState({urls:e}),this.update_queue(),void this.crawl(r)}this.crawl_finished()}},{key:"crawl",value:function(e){pe.a.ajax({context:this,url:"https://api.mydomain.com",type:"get",data:{url:e.url},success:function(t){var a=Object.assign({},this.state.urls);a[e.url_id].status=t.status,a[e.url_id].page_source=t.page_source,a[e.url_id].response_code=t.response_code,this.setState({urls:a}),this.crawl_next()},error:function(t){var a=Object.assign({},this.state.urls);a[e.url_id].status="error",this.setState({urls:a}),this.crawl_next()},complete:function(e,t){this.update_queue()},timeout:6e4})}},{key:"count_in_queue",value:function(){for(var e=0,t=Object.keys(this.state.urls).length-1;t>=0;t--){var a=Object.keys(this.state.urls)[t];"in_queue"===this.state.urls[a].status&&(e+=1)}return e}},{key:"update_queue",value:function(){var e=this.count_in_queue();this.setState({in_queue_counter:e+1})}},{key:"crawl_finished",value:function(){this.props.actions.set_crawl_urls(this.state.urls),this.setState({redirect:"/partial-results/"})}},{key:"render",value:function(){var e=this;return this.state.redirect?n.a.createElement(R.a,{to:this.state.redirect}):n.a.createElement("div",{className:"progress-main-container"},n.a.createElement(B.a,{className:"progress-section"},n.a.createElement("div",{className:"progress-section-header"},n.a.createElement("div",{className:"progress-section-header-title"},"Now running..."),n.a.createElement(q.a,{className:"home-run-button",variant:"contained",color:"secondary",onClick:function(){return e.setState({redirect:"/urls/"})}},"CANCEL")),n.a.createElement(me.a,{className:"progress-loading-bar",variant:"determinate",value:(this.state.initial_queue_size-this.state.in_queue_counter)/this.state.initial_queue_size*100}),n.a.createElement("div",{className:"progress-section-progress-legend"},this.state.initial_queue_size-this.state.in_queue_counter,"/",this.state.initial_queue_size," urls processed")),n.a.createElement(B.a,{className:"progress-section"},n.a.createElement("div",{className:"progress-section-header-title"},"Crawl Results"),n.a.createElement(n.a.Fragment,null,n.a.createElement("br",null),n.a.createElement(A.a,null),Object.keys(this.state.urls).map((function(t){return n.a.createElement(n.a.Fragment,{key:V()()},n.a.createElement("div",{className:"progress-item",key:V()()},n.a.createElement("div",{key:V()(),className:"progress-item-url"},e.state.urls[t].url),n.a.createElement("div",{key:V()(),className:"progress-item-status"},e.state.urls[t].status)),n.a.createElement(A.a,{key:V()()}))})))))}}]),t}(n.a.Component));var _e=Object(L.b)((function(e){return{crawl_urls:e.GlobalReducer.crawl_urls,crawl_selectors:e.GlobalReducer.crawl_selectors}}),(function(e){return{actions:Object(v.a)(Object(T.a)({},r),e)}}))(de),he=a(384),be=a(112),fe=a(37),ve=a.n(fe),Ee=a(38),ge=a(92),ye=a(94),Oe=a(93),je=a.n(Oe);a(222);function ke(e,t,a){for(var r=[],s=[],n=0;n<Object.keys(t).length;n++){var c=t[Object.keys(t)[n]];s.push(c.tag.title?c.tag.title:"Post Process")}var l=["URL","Status","Response Code"].concat(s);r.push(l);for(var o=0;o<Object.keys(e).length;o++){var i=[],u=Object.keys(e)[o],p=e[u];i.push(p.url),i.push(p.status?p.status:""),i.push(p.response_code);for(n=0;n<Object.keys(t).length;n++){var m=Object.keys(t)[n];a[u][m]?i.push(a[u][m].text.replace(/(\r\n|\n|\r)/gm," ")):i.push("")}r.push(i)}return r}var Ce=ye.a.div({pressable:!0,init:{scale:1},press:{scale:.98}}),we=function(e){function t(e){var a;Object(o.a)(this,t);var r=function(e,t){for(var a={},r=Object.keys(e).length-1;r>=0;r--){var s=Object.keys(e)[r],n=e[s];if(a[s]={},"success"===n.status)for(var c=Object(be.parse)(n.page_source),l=Object.keys(t).length-1;l>=0;l--){var o=Object.keys(t)[l],i=t[o],u=c.querySelector(i.css_selector),p=c.querySelectorAll(i.css_selector);if(null!==u)if(p.length>1){for(var m={data_type:"json",matches:[]},d={data_type:"json",matches:[]},_=p.length-1;_>=0;_--){var h=p[_];m.matches.push(h.structuredText),d.matches.push(h.outerHTML)}a[s][o]={data_type:"json",text:JSON.stringify(m),html:JSON.stringify(d)}}else a[s][o]={data_type:"single",text:u.structuredText,html:u.outerHTML};else a[s][o]=!1}else for(l=Object.keys(t).length-1;l>=0;l--){var b=Object.keys(t)[l];a[s][b]=!1}}return a}((a=Object(u.a)(this,Object(p.a)(t).call(this,e))).props.crawl_urls,a.props.crawl_selectors);return a.props.actions.set_partial_results(r),a.state={matches:r,redirect:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.state.redirect?n.a.createElement(R.a,{to:this.state.redirect}):n.a.createElement("div",{className:"partial-main-container"},n.a.createElement(B.a,{className:"partial-section"},n.a.createElement("div",{className:"partial-section-header"},n.a.createElement("div",null,n.a.createElement("div",{className:"partial-section-header-title"},"Partial Results"),n.a.createElement("div",{className:"partial-section-header-subtitle"},"Data parsed using the scraper results before post processing")),n.a.createElement("div",null,n.a.createElement(q.a,{className:"post-process-previous-button",variant:"contained",color:"secondary",onClick:function(){return e.setState({redirect:"/urls/"})}},"BACK"),n.a.createElement(ge.CSVLink,{separator:"|",filename:"pipe-separated-partial-data.csv",data:ke(this.props.crawl_urls,this.props.crawl_selectors,this.state.matches)},n.a.createElement(q.a,{className:"partial-download-button",variant:"contained",color:"secondary"},"DOWNLOAD")),n.a.createElement(q.a,{className:"partial-postprocess-button",variant:"contained",color:"primary",onClick:function(){e.setState({redirect:"/post-process/"})}},"Post Process"))),n.a.createElement("div",{className:"partial-section-body"},n.a.createElement("div",{className:"table-container"},n.a.createElement(he.a,{collapsing:!0,celled:!0},n.a.createElement(he.a.Header,null,n.a.createElement(he.a.Row,null,n.a.createElement(he.a.HeaderCell,null,"URL"),Object.keys(this.props.crawl_selectors).map((function(t){return n.a.createElement(he.a.HeaderCell,null,e.props.crawl_selectors[t].tag.title?e.props.crawl_selectors[t].tag.title:"Post Process")})),n.a.createElement(he.a.HeaderCell,null,"Status"),n.a.createElement(he.a.HeaderCell,null,"Response Code"))),n.a.createElement(he.a.Body,null,Object.keys(this.props.crawl_urls).map((function(t){return n.a.createElement(he.a.Row,{key:V()()},n.a.createElement(he.a.Cell,null,n.a.createElement(Ce,null,n.a.createElement(Ee.CopyToClipboard,{text:e.props.crawl_urls[t].url},n.a.createElement(ve.a,{text:e.props.crawl_urls[t].url,length:"70"})))),Object.keys(e.props.crawl_selectors).map((function(a){return n.a.createElement(he.a.Cell,null,n.a.createElement(Ce,null,"single"===e.state.matches[t][a].data_type&&n.a.createElement(Ee.CopyToClipboard,{text:e.state.matches[t][a]?e.state.matches[t][a].text:""},n.a.createElement(ve.a,{text:e.state.matches[t][a]?e.state.matches[t][a].text:"",length:"70"})),"json"===e.state.matches[t][a].data_type&&n.a.createElement(je.a,{collapsed:!0,src:JSON.parse(e.state.matches[t][a].text)})))})),n.a.createElement(he.a.Cell,null,n.a.createElement(Ce,null,n.a.createElement(Ee.CopyToClipboard,{text:e.props.crawl_urls[t].status},n.a.createElement(ve.a,{text:e.props.crawl_urls[t].status,length:"70"})))),n.a.createElement(he.a.Cell,null,n.a.createElement(Ce,null,n.a.createElement(Ee.CopyToClipboard,{text:e.props.crawl_urls[t].response_code.toString()},n.a.createElement(ve.a,{text:e.props.crawl_urls[t].response_code.toString(),length:"70"})))))}))))))))}}]),t}(n.a.Component);var Ne=Object(L.b)((function(e){return{crawl_urls:e.GlobalReducer.crawl_urls,crawl_selectors:e.GlobalReducer.crawl_selectors}}),(function(e){return{actions:Object(v.a)(Object(T.a)({},r),e)}}))(we),Se=a(169),xe=(a(332),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"post-process-selector-container"},n.a.createElement("div",{className:"post-process-selector-input-container"},n.a.createElement(U.a,{label:"Dense multiline",fullWidth:!0,disableUnderline:!0,placeholder:"",defaultValue:this.props.match.text,onChange:function(e){}})),n.a.createElement("span",{style:{backgroundColor:this.props.match.tag.color},className:"post-process-tag-indicator"},this.props.match.tag.title),n.a.createElement("i",{className:"post-process-selector-icon material-icons",onClick:function(){return e.props.parent.remove_match(e.props.match.tag.tag_id)}},"close")),n.a.createElement(A.a,null))}}]),t}(n.a.Component)),Re=window.setTimeout((function(){}),1),Te=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={is_open:!1,close_timeout:!1,current_selection:""},a.popover_close=a.popover_close.bind(Object(F.a)(a)),a.popover_open=a.popover_open.bind(Object(F.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"popover_open",value:function(){var e=window.getSelection().toString();this.props.parent.state.current_selection=e,window.clearTimeout(Re),this.setState({is_open:!0})}},{key:"popover_close",value:function(){var e=this;window.clearTimeout(Re),Re=window.setTimeout((function(){e.setState({is_open:!1}),e.props.parent.state.current_selection=""}),400)}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,this.props.children,n.a.createElement(Se.a,{selectionRef:this.props.ref_element,isOpen:this.state.is_open,onTextSelect:this.popover_open,onTextUnselect:this.popover_close},n.a.createElement("div",{className:"post-process-popover-content"},x.map((function(t){return n.a.createElement("div",{className:"post-process-popover-tag",onClick:function(){e.props.parent.add_match(t)},key:V()()},n.a.createElement("div",{className:"post-process-popover-tag-color",style:{backgroundColor:t.color},key:V()()}),n.a.createElement("div",{className:"post-process-popover-tag-title",key:V()()},t.title))})))))}}]),t}(n.a.Component);var Fe=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).ref_text=n.a.createRef(),a.ref_html=n.a.createRef();var r=function(e,t,a){for(var r=[],s=0;s<Object.keys(e).length;s++){var n=Object.keys(e)[s],c=e[n];if("success"===c.status)for(var l=0;l<Object.keys(t).length;l++){var o=Object.keys(t)[l],i=t[o];!1===i.tag&&a[n][o]&&"single"===a[n][o].data_type&&r.push({match:a[n][o],selector:i,url:c,post_processed:{}})}}return r}(a.props.crawl_urls,a.props.crawl_selectors,a.props.partial_results);return a.state={current_match_index:0,to_post_process_array:r,current_selection:"",redirect:!1},a.add_match=a.add_match.bind(Object(F.a)(a)),a.remove_match=a.remove_match.bind(Object(F.a)(a)),a.clear_matches=a.clear_matches.bind(Object(F.a)(a)),a.finish_post_process=a.finish_post_process.bind(Object(F.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"add_match",value:function(e){var t=this.state.to_post_process_array.slice();t[this.state.current_match_index].post_processed[e.tag_id]={text:this.state.current_selection,html:this.state.current_selection,tag:e},this.setState({to_post_process_array:t})}},{key:"remove_match",value:function(e){var t=this.state.to_post_process_array.slice();delete t[this.state.current_match_index].post_processed[e],this.setState({to_post_process_array:t})}},{key:"clear_matches",value:function(){for(var e=this.state.to_post_process_array.slice(),t=Object.keys(e[this.state.current_match_index].post_processed).length-1;t>=0;t--){var a=Object.keys(e[this.state.current_match_index].post_processed)[t];delete e[this.state.current_match_index].post_processed[a]}this.setState({to_post_process_array:e})}},{key:"finish_post_process",value:function(){var e=function(e,t,a,r){for(var s=[],n=0;n<Object.keys(t).length;n++){var c=t[Object.keys(t)[n]];c.tag&&s.push(c.tag.tag_id)}for(n=r.length-1;n>=0;n--)for(var l=0;l<Object.keys(r[n].post_processed).length;l++){var o=Object.keys(r[n].post_processed)[l],i=r[n].post_processed[o];s.push(i.tag.tag_id)}var u={};for(n=0;n<Object.keys(e).length;n++){var p=e[Object.keys(e)[n]];if("success"===p.status){u[p.url_id]={};for(l=s.length-1;l>=0;l--){var m=s[l];u[p.url_id][m]=!1}}}for(n=0;n<Object.keys(a).length;n++){var d=Object.keys(a)[n],_=a[d];for(l=0;l<Object.keys(_).length;l++){var h=Object.keys(_)[l],b=t[h],f=_[h];b.tag?"success"===e[d].status&&(u[d][b.tag.tag_id]=f.text):"json"===a[d][h].data_type&&(u[d]["composed_"+h]=a[d][h].text)}}for(n=r.length-1;n>=0;n--){var v=r[n].url.url_id,E=r[n].post_processed;for(l=0;l<Object.keys(E).length;l++){var g=E[Object.keys(E)[l]];u[v][g.tag.tag_id]=g.text}}return u}(this.props.crawl_urls,this.props.crawl_selectors,this.props.partial_results,this.state.to_post_process_array);this.props.actions.set_final_results(e),this.setState({redirect:"/final-results/"})}},{key:"render",value:function(){var e=this;return this.state.redirect?n.a.createElement(R.a,{to:this.state.redirect}):n.a.createElement("div",{className:"post-process-main-container"},n.a.createElement("div",{className:"post-process-main-container-inner"},n.a.createElement(B.a,{className:"post-process-section"},n.a.createElement("div",{className:"post-process-section-header"},n.a.createElement("div",null,n.a.createElement("div",{className:"post-process-section-header-title"},"Post Processing"),n.a.createElement("div",{className:"post-process-section-header-subtitle"},"Please highlight and tag all the content accordingly")),n.a.createElement("div",null,n.a.createElement("a",{href:this.state.to_post_process_array[this.state.current_match_index].url.url,rel:"noopener noreferrer",target:"_blank"},n.a.createElement(q.a,{className:"post-process-previous-button",variant:"contained",color:"secondary"},"VISIT PAGE")),0===this.state.current_match_index&&n.a.createElement(q.a,{className:"post-process-previous-button",variant:"contained",color:"primary",onClick:function(){return e.setState({redirect:"/partial-results/"})}},"BACK"),this.state.current_match_index>0&&n.a.createElement(q.a,{className:"post-process-previous-button",variant:"contained",color:"primary",onClick:function(){return e.setState({current_match_index:e.state.current_match_index-1})}},"PREVIOUS"),this.state.current_match_index<this.state.to_post_process_array.length-1&&n.a.createElement(q.a,{className:"post-process-next-button",variant:"contained",color:"primary",onClick:function(){return e.setState({current_match_index:e.state.current_match_index+1})}},"NEXT"),this.state.current_match_index===this.state.to_post_process_array.length-1&&n.a.createElement(q.a,{className:"post-process-next-button",variant:"contained",color:"primary",onClick:this.finish_post_process},"FINISH"))),n.a.createElement("div",{className:"post-process-section-body"},n.a.createElement("br",null),n.a.createElement("div",{className:"post-process-section-body-inner"},n.a.createElement(K.a,{className:"post-process-section-body-left",verticalContainerStyle:{width:4}},x.map((function(t){return n.a.createElement("div",{className:"post-process-popover-tag",key:V()(),onClick:function(){e.add_match(t)}},n.a.createElement("div",{className:"post-process-popover-tag-color",style:{backgroundColor:t.color},key:V()()}),n.a.createElement("div",{className:"post-process-popover-tag-title",key:V()()},t.title))}))),n.a.createElement("div",{className:"post-process-section-body-right"},n.a.createElement(Te,{parent:this,ref_element:this.ref_text},n.a.createElement("div",{className:"post-process-raw-text",contentEditable:"true",ref:this.ref_text},this.state.to_post_process_array[this.state.current_match_index].match.text)),n.a.createElement(Te,{parent:this,ref_element:this.ref_html},n.a.createElement("div",{className:"post-process-raw-html",contentEditable:"true",ref:this.ref_html},this.state.to_post_process_array[this.state.current_match_index].match.html)))))),n.a.createElement(B.a,{className:"post-process-section"},n.a.createElement("div",{className:"post-process-section-header"},n.a.createElement("div",null,n.a.createElement("div",{className:"post-process-section-header-title"},"Current Tags"),n.a.createElement("div",{className:"post-process-section-header-subtitle"},"These are the tags selected so far")),n.a.createElement("div",null,n.a.createElement(q.a,{className:"post-process-next-button",variant:"contained",color:"primary",onClick:this.clear_matches},"CLEAR"))),n.a.createElement("br",null),Object.keys(this.state.to_post_process_array[this.state.current_match_index].post_processed).length>0&&n.a.createElement(A.a,null),n.a.createElement(K.a,{className:"post-process-section-body post-process-matcehs-section"},Object.keys(this.state.to_post_process_array[this.state.current_match_index].post_processed).map((function(t){var a=e.state.to_post_process_array[e.state.current_match_index].post_processed[t];return n.a.createElement(xe,{parent:e,match:a,key:V()()})}))))))}}]),t}(n.a.Component);var Le=Object(L.b)((function(e){return{crawl_urls:e.GlobalReducer.crawl_urls,crawl_selectors:e.GlobalReducer.crawl_selectors,partial_results:e.GlobalReducer.partial_results}}),(function(e){return{actions:Object(v.a)(Object(T.a)({},r),e)}}))(Fe);a(333);var qe=ye.a.div({pressable:!0,init:{scale:1},press:{scale:.98}});function Be(e,t,a){for(var r,s=[],n=[],c=(r=e,Object.keys(r)[0]),l=Object.keys(e[c]).length-1;l>=0;l--){var o=Object.keys(e[c])[l];o in t?n.push(t[o].title):n.push("Composed")}var i=["URL","Status","Response Code"].concat(n);s.push(i);for(l=Object.keys(e).length-1;l>=0;l--){var u=[],p=Object.keys(e)[l];u.push(a[p].url),u.push(a[p].status),u.push(a[p].response_code);for(var m=Object.keys(e[p]).length-1;m>=0;m--){var d=Object.keys(e[p])[m];e[p][d]?u.push(e[p][d]):u.push("")}s.push(u)}return s}var Ue=function(e){function t(e){var a;Object(o.a)(this,t),a=Object(u.a)(this,Object(p.a)(t).call(this,e));var r=function(e){for(var t={},a=e.length-1;a>=0;a--){var r=e[a];t[r.tag_id]=r}return t}(x);return a.state={tags:r,csv_data:Be(a.props.final_results,r,a.props.crawl_urls),redirect:!1},console.log(a.props.final_results),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.state.redirect?n.a.createElement(R.a,{to:this.state.redirect}):n.a.createElement("div",{className:"final-main-container"},n.a.createElement(B.a,{className:"final-section"},n.a.createElement("div",{className:"final-section-header"},n.a.createElement("div",null,n.a.createElement("div",{className:"final-section-header-title"},"Final Results"),n.a.createElement("div",{className:"final-section-header-subtitle"},"Data parsed using the scraper results after post processing")),n.a.createElement("div",null,n.a.createElement(q.a,{className:"final-home-button",variant:"contained",color:"secondary",onClick:function(){e.setState({redirect:"/"})}},"Home"),n.a.createElement(ge.CSVLink,{separator:"|",filename:"pipe-separated-final-data.csv",data:this.state.csv_data},n.a.createElement(q.a,{className:"final-download-button",variant:"contained",color:"primary"},"DOWNLOAD")))),n.a.createElement("div",{className:"final-section-body"},n.a.createElement("div",{className:"table-container"},n.a.createElement(he.a,{collapsing:!0,celled:!0},n.a.createElement(he.a.Header,null,n.a.createElement(he.a.Row,null,n.a.createElement(he.a.HeaderCell,null,"URL"),Object.keys(this.props.final_results[Object.keys(this.props.final_results)[0]]).map((function(t){return n.a.createElement(he.a.HeaderCell,{key:V()()},t in e.state.tags?e.state.tags[t].title:"Composed")})),n.a.createElement(he.a.HeaderCell,null,"Status"),n.a.createElement(he.a.HeaderCell,null,"Response Code"))),n.a.createElement(he.a.Body,null,Object.keys(this.props.final_results).map((function(t){return n.a.createElement(he.a.Row,{key:V()()},n.a.createElement(he.a.Cell,null,n.a.createElement(qe,null,n.a.createElement(Ee.CopyToClipboard,{text:e.props.crawl_urls[t].url},n.a.createElement(ve.a,{text:e.props.crawl_urls[t].url,length:"70"})))),Object.keys(e.props.final_results[t]).map((function(a){return a in e.state.tags?n.a.createElement(he.a.Cell,{key:V()()},n.a.createElement(qe,null,n.a.createElement(Ee.CopyToClipboard,{text:e.props.final_results[t][a].toString()},n.a.createElement(ve.a,{text:e.props.final_results[t][a].toString(),length:"70"})))):n.a.createElement(he.a.Cell,{key:V()()},n.a.createElement(je.a,{collapsed:!0,src:JSON.parse(e.props.final_results[t][a])}))})),n.a.createElement(he.a.Cell,null,n.a.createElement(qe,null,n.a.createElement(Ee.CopyToClipboard,{text:e.props.crawl_urls[t].status},n.a.createElement(ve.a,{text:e.props.crawl_urls[t].status,length:"70"})))),n.a.createElement(he.a.Cell,null,n.a.createElement(qe,null,n.a.createElement(Ee.CopyToClipboard,{text:e.props.crawl_urls[t].response_code.toString()},n.a.createElement(ve.a,{text:e.props.crawl_urls[t].response_code.toString(),length:"70"})))))}))))))))}}]),t}(n.a.Component);var Ae=Object(L.b)((function(e){return{crawl_urls:e.GlobalReducer.crawl_urls,crawl_selectors:e.GlobalReducer.crawl_selectors,final_results:e.GlobalReducer.final_results}}),(function(e){return{actions:Object(v.a)(Object(T.a)({},r),e)}}))(Ue),Pe=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(R.d,null,n.a.createElement(R.b,{path:"/",exact:!0,render:function(){return n.a.createElement(re,null)}}),n.a.createElement(R.b,{path:"/urls/",exact:!0,render:function(){return n.a.createElement(ie,null)}}),n.a.createElement(R.b,{path:"/progress/",exact:!0,render:function(){return n.a.createElement(_e,null)}}),n.a.createElement(R.b,{path:"/partial-results/",exact:!0,render:function(){return n.a.createElement(Ne,null)}}),n.a.createElement(R.b,{path:"/post-process/",exact:!0,render:function(){return n.a.createElement(Le,null)}}),n.a.createElement(R.b,{path:"/final-results/",exact:!0,render:function(){return n.a.createElement(Ae,null)}}))}}]),t}(s.Component),He=(a(334),{typography:{fontFamily:["Karla"].join(",")},palette:{primary:{main:"#361FFB",light:"#361FFB",dark:"#361FFB",contrastText:"#FFFFFF"},secondary:{main:"#BEBEBE",light:"#BEBEBE",dark:"#BEBEBE",contrastText:"#000000"},primary1Color:"#361FFB",primary2Color:"#361FFB",primary3Color:"#361FFB",accent1Color:"#361FFB",accent2Color:"#361FFB",accent3Color:"#361FFB",textColor:"#101010"},appBar:{height:50},datePicker:{color:"#361FFB",textColor:"#101010",calendarTextColor:"#101010",selectColor:"#361FFB",selectTextColor:"#101010",calendarYearBackgroundColor:"#ffffff",headerColor:"#361FFB"},raisedButton:{textColor:"#000000",primaryTextColor:"#000000"}}),Ge=Object(_.a)(He),Ie=function(e){function t(e){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).call(this,e))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(d.a,null,n.a.createElement(h.a,{theme:Ge},n.a.createElement(b,null),n.a.createElement("div",{className:"main-content"},n.a.createElement(Pe,null)),n.a.createElement(f,null)))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var We=a(173);l.a.render(n.a.createElement(L.a,{store:N},n.a.createElement(We.a,{loading:null,persistor:S},n.a.createElement(Ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[198,1,2]]]);
//# sourceMappingURL=main.26545b52.chunk.js.map