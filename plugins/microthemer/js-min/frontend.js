try{window.top.TvrMT&&(window.onerror=function(e,t,s){window.top.TvrMT.TvrUi.JSerrors.push({error:e,URL:t,line:s,source:window.top.TvrLang.frontend}),window.top.TvrMT.TvrUi.instant_show_js_error("front")},window.top.TvrMT.TvrUi.catch_js_errors(window,!0),window.top.TvrMT.tvrLazyLoad=function(e){function t(t,s){var r,a=e.createElement(t);for(r in s)s.hasOwnProperty(r)&&a.setAttribute(r,s[r]);return a}function s(e){var t,s,r=c[e];r&&(t=r.callback,(s=r.urls).shift(),d=0,s.length||(t&&t.call(r.context,r.obj),c[e]=null,p[e].length&&a(e)))}function r(){var t=navigator.userAgent;((i={async:!0===e.createElement("script").async}).webkit=/AppleWebKit\//.test(t))||(i.ie=/MSIE|Trident/.test(t))||(i.opera=/Opera/.test(t))||(i.gecko=/Gecko\//.test(t))||(i.unknown=!0)}function a(a,d,u,f,m){var g,_,v,h,y,w,b=function(){s(a)},T="css"===a,C=[];if(i||r(),d)if(d="string"==typeof d?[d]:d.concat(),T||i.async||i.gecko||i.opera)p[a].push({urls:d,callback:u,obj:f,context:m});else for(g=0,_=d.length;g<_;++g)p[a].push({urls:[d[g]],callback:g===_-1?u:null,obj:f,context:m});if(!c[a]&&(h=c[a]=p[a].shift())){for(o||(o=e.head||e.getElementsByTagName("head")[0]),g=0,_=(y=h.urls.concat()).length;g<_;++g)w=y[g],T?v=i.gecko?t("style"):t("link",{href:w,rel:"stylesheet"}):(v=t("script",{src:w})).async=!1,v.className="lazyload",v.setAttribute("charset","utf-8"),i.ie&&!T&&"onreadystatechange"in v&&!("draggable"in v)?v.onreadystatechange=function(){/loaded|complete/.test(v.readyState)&&(v.onreadystatechange=null,b())}:T&&(i.gecko||i.webkit)?i.webkit?(h.urls[g]=v.href,l()):(v.innerHTML='@import "'+w+'";',n(v)):v.onload=v.onerror=b,C.push(v);for(g=0,_=C.length;g<_;++g)o.insertBefore(C[g],document.getElementById("mtdynSeperatorcss-1"))}}function n(e){var t;try{t=!!e.sheet.cssRules}catch(r){return void((d+=1)<200?setTimeout(function(){n(e)},50):t&&s("css"))}s("css")}function l(){var e,t=c.css;if(t){for(e=u.length;--e>=0;)if(u[e].href===t.urls[0]){s("css");break}d+=1,t&&(d<200?setTimeout(l,50):s("css"))}}var i,o,c={},d=0,p={css:[],js:[]},u=e.styleSheets;return{css:function(e,t,s,r){a("css",e,t,s,r)},js:function(e,t,s,r){a("js",e,t,s,r)}}}(this.document),jQuery(document).ready(function(e){function t(){window.top.TvrMT.MTF=l,window.top.TvrMT.init.set_vars(),window.top.TvrMT.TvrCom.set_vars(),window.top.TvrMT.mod.MTace.set_vars(),l.init_front()}var s=window.top.TvrMT,r=s.TvrUi,a=s.TvrCom,n=(s.tvrsprintf,window.top.TvrLang),l={triggerEl:{},triggerEls:{},triggerElIndex:"",styleSheetObj:{},stylesheetUrl:"",stat:{html:e("html"),body:e("body"),win:window,doc:document,MTFrontEls:!1},init_front:function(){a.startT(arguments),window.FLBuilder?(s.integrate.FLBuilder=window.FLBuilder,r.stat.tvr.addClass("bbeaver_is_on")):r.stat.tvr.removeClass("bbeaver_is_on"),l.get_mt_stylesheet(),l.add_styleNode("dynSeperator"),l.add_styleNode("dynSeperator");var t=window.TVR_DEV_MODE?"/page":"-min",i=r.pluginUrl+"css/animate.min.css";if(e("#mtdynSeperatorcss-0").before('<link rel="stylesheet" type="text/css" href="'+i+'">'),a.isDefined(window.MT_Events_Data))l.JSEventsLoaded=!0;else{var o=r.pluginUrl+"js"+t+"/animation-events.js";e.ajax({url:o,dataType:"script",success:function(e){}})}r.sRules.setup_mt_vars&&r.sRules.setup_mt_vars(),r.sRules.define("mode","browser"),r.sRules.define("async",!0),r.sRules.define("page",document),r.reinitRules=!0,r.pref.default_sug_values_set||r.refresh_sug_values({all:1}),r.recalculate_active_events(),l.support.createHTMLDocument=function(){var e=document.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}();l.stat.body.append('<div id="mt-stuff-ignore"><div id="one-click-go"></div><div id="one-click-create">+</div><div id="mt-el-options" class="mt-matching"></div></div>'),l.stat.MTFrontEls=e("#mt-stuff-ignore"),r.pref.selname_code_synced&&l.stat.html.addClass("selname_code_synced"),r.iframe_loaded(l.stat.html),r.setup_keyboard_shortcuts(document),l.setup_overlay_plugin(),parseInt(e("#mt-show-admin-bar").attr("content"))||l.stat.html.addClass("no-admin-bar-please"),a.in_array(n.load_wp,r.progStatus)&&r.update_prog_indicator("minus",!1,n.load_wp),a.in_array(n.refresh_js,r.progStatus)&&r.update_prog_indicator("minus",!1,n.refresh_js),a.in_array(n.refresh_styles,r.progStatus)&&r.update_prog_indicator("minus",!1,n.refresh_styles),r.awaitingIframeReloadAfterSave?(l.refreshCSS(),r.awaitingIframeReloadAfterSave=!1):(l.get_computed_styles({data:r.curSelCSS,con:"str",intelli:r.intelli}),r.refresh_comp_css()),r.remember_page_viewed(),r.pref.hover_inspect&&l.bind_wizard_hover(),l.stat.body.on("mouseenter","div.mt-el-quick-item",function(t){var s=e(this);if(s.hasClass("mt-el-quick-label"))return!1;r.sug_sel_mouseenter(s)}).on("mouseleave","div.mt-el-quick-item",function(t){if(e(this).hasClass("mt-el-quick-label"))return!1;r.sug_sel_mouseleave()}),l.stat.html.on("mouseup",function(){r.colorPickerDragging&&r.picker_method("clickpick")}),l.stat.html.click(function(t){var n=e(t.target);if(r.close_all_expanded(n,""),n.hasClass("mt-el-quick-label")||n.hasClass("num-els-heading"))return!1;if(s.integrate.FLBuilder&&(n.hasClass("fl-builder-done-button")?r.turn_bb_toggle("off",!0):(n.hasClass("fl-builder-cancel-button")||"dismiss"==n.data("action"))&&r.turn_bb_toggle("on",!0)),r.pref.hover_inspect)if(t.preventDefault(),t.stopPropagation(),r.el_selected){var i=n.closest(".mt-el-quick-item");if(a.isDomEl(i))if((n=i).hasClass("mt-quick-create")){var o=l.dom.sels.final[parseInt(n.data("id"))].code;r.wizard_new_or_update_selector({},"wizard-add",o)}else n.hasClass("mt-matching-item")&&(r.tvr_iterate_selectors_v(!1,n.data("id")),r.feature_off(!1,"hover_inspect",{noSave:1}));else l.element_unselected(n,t)}else l.element_selected(n);else{var c=!1,d=n.closest('a, input[type="submit"], button[type="submit"]');a.isDomEl(d)&&(c={el:d,tagName:d.prop("tagName").toLowerCase()}),l.singleClick(n,t,c)}}).dblclick(function(t){t.preventDefault();var n=e(t.target);if(s.integrate.FLBuilder&&(a.isDomEl(n.closest(".fl-lightbox-wrap"))||a.isDomEl(n.closest(".fl-col-overlay"))))return!1;n.data("double",2),r.toggle_feature(!1,"hover_inspect"),r.feature_on(!1,"show_interface"),r.pref.hover_inspect&&n.trigger("mouseover.wiz-hover").trigger("click")}),a.endT(arguments)},support:{},new_or_default_document:function(e){var t=e;if(l.support.createHTMLDocument){var s=(t=document.implementation.createHTMLDocument("")).createElement("base");s.href=document.location.href,t.head.appendChild(s)}return t},overlayCount:0,get_mt_stylesheet:function(){a.startT(arguments),l.stylesheet=e("#microthemer-css"),a.isDomEl(l.stylesheet)||(l.stylesheet=e('link[href*="\\/micro-themes\\/'+r.cssMin+r.cssStub+'-styles.css"]')),a.isDomEl(l.stylesheet)?l.stylesheetUrl=l.stylesheet.attr("href"):(l.stylesheet=!1,l.stylesheetUrl=!1),a.endT(arguments)},setup_overlay_plugin:function(){a.startT(arguments),function(e){e.fn.extend({add_overlay:function(t){var s=this.length&&this.length<80?this.length:79,r=["left","top","right","bottom"],n={padding:!0,margin:!0,border:!0,content:!0},t=e.extend(n,t);return this.each(function(n){if(a.startT("add_overlay"),n>s)return a.endT("add_overlay"),!1;var i=l.overlayCount,o=e(this);if(!o.hasClass("tvr-element-overlay")&&o.is(":visible")){o.addClass("tvr-element-overlay");var c={},d=parseInt(o.css("font-size")),p=o.offset();p.top=p.top+parseInt(o.css("border-top-width")),p.left=p.left+parseInt(o.css("border-left-width")),l.stat.MTFrontEls.append('<div id="over-cont-'+i+'" class="tvr-overlay tvr-container-overlay" style="width:'+o.innerWidth()+"px;height:"+o.innerHeight()+'px;"></div>');var u=e("#over-cont-"+i);if(u.offset({top:p.top,left:p.left}),t.margin){u.append('<div class="tvr-overlay tvr-margin-overlay"></div>');for(var f in r)if(r.hasOwnProperty(f)){var m=0-parseInt(o.css("margin-"+r[f]))-parseInt(o.css("border-"+r[f]+"-width"));c[r[f]]=m/d+"em"}u.find(".tvr-margin-overlay").css(c)}if(t.border&&(u.append('<div class="tvr-overlay tvr-border-overlay"></div>'),u.find(".tvr-border-overlay").css({top:0-parseInt(o.css("border-top-width"))/d+"em",right:0-parseInt(o.css("border-right-width"))/d+"em",bottom:0-parseInt(o.css("border-bottom-width"))/d+"em",left:0-parseInt(o.css("border-left-width"))/d+"em"})),t.padding&&u.append('<div class="tvr-overlay tvr-padding-overlay"></div>'),t.content){u.append('<div class="tvr-overlay tvr-content-overlay"></div>'),c={};for(var f in r)r.hasOwnProperty(f)&&(c[r[f]]=parseInt(o.css("padding-"+r[f]))/d+"em");u.find(".tvr-content-overlay").css(c)}if(a.isDomEl(l.triggerEl)){var g=l.triggerEl.offset();e("#one-click-go, #one-click-create, #mt-el-options").offset({top:g.top,left:g.left})}l.overlayCount++,a.endT("add_overlay",1)}})}})}(jQuery),a.endT(arguments)},refreshJS:function(){a.startT(arguments),location.reload(),a.endT(arguments)},refreshCSS:function(){a.startT(arguments);for(var t=[],s=document.head.getElementsByClassName("lazyload"),i=0;i<s.length;++i)t.push(s[i]);var o,c="?reload="+(new Date).getTime();o=r.microUrl+r.cssMin+r.cssStub+"-styles.css"+c;var d=e("#microthemer_g_font-css"),p=a.isDomEl(d)?decodeURIComponent(d.attr("href").split("&")[0]):"";if(r.g_url&&r.g_url!=r.prev_g_url&&r.g_url!=p)u=[o,r.g_url+c.replace("?","&")];else{var u=o;d=e("#tvr-no-sheet"),t=[].filter.call(t,function(e){return("link"===e.tagName.toLowerCase()?e.href:e.textContent).indexOf("micro-themes")>-1})}window.top.TvrMT.tvrLazyLoad.css(u,function(s){var i=(l.stylesheet?l.stylesheet:e("#no-mt-css")).add(d);i&&i.remove();for(var o=0;o<t.length;++o){var c=t[o];c.parentNode?c.parentNode.removeChild(c):console.log("no parentNode",c,t)}l.get_computed_styles({data:r.curSelCSS,con:"str"}),r.refresh_comp_css(),r.el_selected||l.reposition_overlays({con:"reg",scroll:0}),a.in_array(n.refresh_styles,r.progStatus)&&r.update_prog_indicator("minus",!1,n.refresh_styles),r.reinitRules=!0,r.maybe_update_wizard_panels()},"hello"),a.endT(arguments)},styleNodes:{dynSeperator:[],preview:[],animation:[],pause_animation:[]},add_styleNode:function(e){var t=l.styleNodes[e],s=document.createElement("style"),r="mt"+e+"css-"+t.length;s.setAttribute("id",r),document.head.appendChild(s),t.push(r)},remove_styleNode:function(t){var s=l.styleNodes[t],r=s[s.length-1];e("#"+r).remove(),s.pop()},update_dynamic_css:function(e,t,s){var r=l.styleNodes[t];r.length||l.add_styleNode(t);var a=r[r.length-1];document.getElementById(a).innerHTML=e},after_animation:function(e,t){var s="transition"==t.type?"transitionend.tvr webkitTransitionEnd.tvr oTransitionEnd.tvr otransitionend.tvr MSTransitionEnd.tvr":"oanimationend.tvr animationend.tvr webkitAnimationEnd.tvr";e.on(s,function(){t.cb.apply(this,t.args),e.off(s)})},trigger_animation:function(e){var t=e.ast_selector_string+" { -webkit-animation-name: none !important; animation-name: none !important;  }",s=e.css,i=l.jquery_compat_sel_elements(e.ast_eventless_selector_string),o=i.first();a.isDomEl(i)&&(e.isJSEvent?o.hasClass(e.JSEventClass)?i.removeClass(e.JSEventClass):i.addClass(e.JSEventClass):l.update_dynamic_css(t,"animation"),window.requestAnimationFrame(function(t){window.requestAnimationFrame(function(t){e.isJSEvent&&i.addClass(e.JSEventClass),l.update_dynamic_css(s,"animation")})}),l.after_animation(o,{cb:function(){l.remove_styleNode("animation")}}),"inline"===o.css("display")&&(r.animation_inline_warning={short:n.inline_animation_short,long:"<p>"+n.inline_animation_long+"</p>",type:"info"}))},element_selected:function(e){a.startT(arguments),r.el_selected=1,l.stat.html.add(r.stat.tvr).addClass("mt-element-selected"),l.align_selector_go_menu(),r.maybe_update_wizard_panels({onlyDeferred:1}),r.maybe_auto_select_label(),r.stat.tvr.removeClass("tvr_inspect_waiting"),a.endT(arguments)},element_unselected:function(e,t){a.startT(arguments),r.el_selected=0,l.stat.html.add(r.stat.tvr).removeClass("mt-element-selected"),r.redo_sug_sels("",!0),e&&e.trigger("blur").trigger("mouseover"),a.endT(arguments)},clean_classes:function(e){a.startT(arguments);var t=["no-admin-bar-please","mt_highlight","mt-sels-target","mt-element-selected","tvr-hh-mode","mt-hover-bound","customize-support","tvr-trigger-el","tvr-element-overlay","tvr-static-overlay","tvr-hover-element","mt-click","mt-mouseenter","mt-focus","mt-inview","mt-inview_once"],s=new RegExp(t.join("|"),"g"),r=e.replace(s,"").replace(/\s\s+/g," ").replace(/^\s+|\s+$/g,"");return a.endT(arguments),r},align_selector_go_menu:function(){a.startT(arguments);var t=e("#mt-el-opts-inner"),s=e(l.stat.html.hasClass("mt-sels-target")?"#one-click-go":"#one-click-create"),r=l.off_screen(t);t.css({position:r.on?"static":"absolute",right:r.right?"-"+s.outerWidth()+"px":"auto",bottom:r.bottom?"-"+s.outerHeight()+"px":"auto"}),a.endT(arguments)},set_quick_go_options:function(t){a.startT(arguments);var s=l.get_matching_selectors(t,r.get_all_selector_code()),i=a.obj_length(s),o=e("#mt-el-options"),c=e("#one-click-go"),d=e("#one-click-create"),p="mt-el-quick-item",u="",f=i?c:d,m="",g={};if(i){l.stat.html.addClass("mt-sels-target"),c.text(i),u='<div class="mt-el-quick-label '+p+'" title="'+n.quick_go_long+'">'+n.quick_go+':<span class="num-els-icon num-els-heading" title="'+n.num_els_n+'">N</span></div>';for(var _ in s)s.hasOwnProperty(_)&&(m+='<div class="mt-matching-item mt-matching '+p+'" data-code="'+(b=a.regular_escape_quotes(s[_].code))+'" '+(T=r.pref.selname_code_synced?"":'title="'+b+'"')+'data-id="'+s[_].id+'" >'+s[_].sName+r.num_els_icon(s[_].n)+"</div>",g[s[_].code]=!0);m=u+'<div class="quick-items-body existing-sels">'+m+"</div>"}else l.stat.html.removeClass("mt-sels-target");for(var v=0,h="",y=0;y<l.dom.sels.final.length;y++){var w=l.dom.sels.final[y];if(!g[w.code]){if(y>=8)break;var b=a.regular_escape_quotes(w.code),T=r.pref.selname_code_synced?"":'title="'+b+'"',C=((w.isCombo?" combobox has-arrows":"")&&"x_plus"==w.refKey?"<sup>+</sup>":"")?"+":"",E=r.num_els_icon(w.n,C);h+='<div class="mt-quick-create '+p+'" data-code="'+b+'" '+T+'data-id="'+y+'" >'+r.get_nice_name(b,!1,r.pref.selname_code_synced)+E+"</div>",++v}}v&&(h=(u='<div class="mt-el-quick-label '+p+'" title="'+n.quick_create_long+'">'+n.quick_create+': <span class="num-els-icon num-els-heading" title="'+n.num_els_n+'">N</span></div>')+'<div class="quick-items-body create-sels">'+h+"</div>"),o.html('<div id="mt-el-opts-inner">'+m+h+"</div>"),o.css({width:f.outerWidth(),height:f.outerHeight()}),a.endT(arguments)},dom:{sels:{nothing:[]}},N:[],Nsub:{index:"",N:[]},selectorMatches:function(e,t){a.startT(arguments);var s=Element.prototype,r=s.matches||s.webkitMatchesSelector||s.mozMatchesSelector||s.msMatchesSelector||function(e){return-1!==[].indexOf.call(document.querySelectorAll(e),this)},n=!1;try{n=r.call(e,t)}catch(e){console.log("Invalid selector present",e)}return a.endT(arguments),n},mediaMatches:function(e){return window.matchMedia(e).matches},jquery_compat_sel_elements:function(t,s){a.startT(arguments),t=a.custom_to_non_escaped(t),t=r.analyse_sel_code(t).code;var n,i=a.pseudo_str_to_arr(t);if(i){var o=r.get_pseudo_config(i);for(var c in o)if(o.hasOwnProperty(c)){var d=o[c],p=d.replace?d.replace:"";d.strip&&(t=t.replace(c,p))}if(s)return t;n=l.validate_and_filter_excluded_els(t);for(c in o)o.hasOwnProperty(c)&&(d=o[c]).filter&&n.length&&(n=n.filter(function(){var t=e(this),s=t[0],r=(a.get_tagName(t),t.val()),n=t.attr("min"),i=t.attr("max");switch(c){case":in-range":return n&&r>=n&&i&&r<=i;case":out-of-range":return n&&r<n&&i&&r>i;case":invalid":return l.selectorMatches(s,":invalid");case":valid":return l.selectorMatches(s,":valid")}}))}else{if(s)return t;n=l.validate_and_filter_excluded_els(t)}return a.endT(arguments),n},format_att_selector:function(e,t){var s;switch(t){case"id":s="#"+e;break;case"class":s="."+e.split(" ")[0];break;case"type":s='[type="'+e+'"]'}return s},search_dom:function(t,s){a.startT(arguments);var r=!1,n=a.get_tagName(t),i=t.parent(),o={tagName:[n]};a.isDomEl(i)&&(r=!0,a.get_tagName(i));for(var c in s.atts)if(s.atts.hasOwnProperty(c)){var d=s.atts[c];if(!(s[d+"Count"]>=s["max_"+d]||"body"!=n&&s[d+"LevelCount"]>=s["max_"+d+"_level"]||"id"==d&&s.elHasId)){var p=t.attr(d);if(p&&"class"==d&&(p=l.clean_classes(p)),p){"id"==d&&0===s.level&&(s.elHasId=!0);var u=p.split(" ");o[d]=[];for(var f in u)if(u.hasOwnProperty(f)&&!("class"==d&&"body"!=n&&f>=s.max_class_per_level)){var m=l.format_att_selector(u[f],d);o[d].push(m),++s[d+"Count"]}"class"==d&&++s[d+"LevelCount"]}else o[d]=0}}var g=t.parents(),_=t.prevAll(),v=t.nextAll(),h=t.children(),y=h.not("script, link").first(),w=_.length+1,b=_.filter(n).length+1,T=v.length+1,C=v.filter(n).length+1,E={":first-child":1===w?1:0,":first-of-type":1===b?1:0,":nth-child(n)":w,":nth-of-type":b,":last-child":1===T?1:0,":last-of-type":1===C?1:0,":nth-last-child(n)":T,":nth-last-of-type(n)":C,":only-child":1===w&&1===T?1:0,":only-of-type":1===b&&1===C?1:0},k=":nth-of-type("+b+")";o.pseudo={},o.pseudo[":nth-of-type"]=[];for(var S in o)if(o.hasOwnProperty(S)&&"id"!=S&&"pseudo"!=S&&o[S])for(var x in o[S])if(o[S].hasOwnProperty(x)){var N=o[S][x];o.pseudo[":nth-of-type"].push(N+k)}var P,L={el:{type:"el",fullObj:t,count:1,m:[]},par:{type:"par",fullObj:g,count:g.length,m:[]},child:{type:"child",fullObj:y,count:h.length,m:[]},prev:{type:"prev",fullObj:_,count:w-1,m:[]},next:{type:"next",fullObj:v,count:T-1,m:[]}};for(var O in L)L.hasOwnProperty(O)&&L[O].fullObj&&L[O].fullObj.each(function(t){var r=e(this),n=a.get_tagName(r),i=n;for(var o in s.atts)if(s.atts.hasOwnProperty(o)){var c=s.atts[o],d=r.attr(c);if(d&&"class"==c&&(d=l.clean_classes(d)),d){i+=l.format_att_selector(d,c);break}}L[O].m.push({tagName:n,obj:r,bcLabel:i}),"el"==L[O].type&&(P=i)});if(s.nodes.push({level:s.level,SelType:o,tagName:n,elBcLabel:P,pseudo:E,family:L}),s.level,("html"==n||"body"==n)&&(s.sels.sigAtts[n+"SelType"]=o,"body"==n))for(var c in o.class)if(o.class.hasOwnProperty(c)){var j=o.class[c],M=j.match(/^\.mt\-\d+$/),q=j.match(/^\.mt\-.+$/);M?s.sels.sigAtts.pageIdClass=M[0]:q?s.sels.sigAtts.pageNameClass=q[0]:s.sels.sigAtts.pageOtherClass.push(j)}return r?(++s.level,l.search_dom(i,s)):(a.endT(arguments,1),s)},build_selector_suggestions_2:function(t){a.startT(arguments);var s=l.triggerEl;if(!a.isDomEl(s))return!1;var n={$el:s,el:s[0],foundSingle:!1,level:0,idCount:0,classCount:0,classLevelCount:0,typeCount:0,singleCount:0,elHasId:0,max_id:5,max_levels:12,max_class_per_level:5,max_class:1e3,max_type:1,max_single:1e3,atts:["type","id","class"],nodes:[],invalidSel:!1,sels:{sigAtts:{htmlSelType:[],bodySelType:[],pageIdClass:0,pageNameClass:0,pageOtherClass:[]},allRefKeys:[],alreadyGot:{},curLevel:0,prevLevel:0,directEl:[],passes:[[],[],[]],final:[],nothing:[],combo:{}},html:{breadCrumbs:{trail:{},combo:{}}}};n=l.search_dom(s,n);var i={passNum:0,incReg:1,incPseudo:0,findFirstSingle:0,incJustSpanDiv:0};if((n=l.generate_selectors(n,i)).foundSingle||(i.passNum=1,i.incPseudo=1,i.fullTrail=1,i.max_single=30,n=l.generate_selectors(n,i)),a.startT("generate_selectors post processing"),n.sels.final=e.extend(!0,[],n.sels.passes[0]),i.passNum>0&&n.foundSingle){var o=[];for(var c in n.sels.passes[i.passNum])if(n.sels.passes[i.passNum].hasOwnProperty(c)){var d=n.sels.passes[i.passNum][c];1===d.n&&o.push(d)}n.sels.final=n.sels.final.concat(o)}n.sels.final.sort(a.firstBy("n").thenBy("justTagName").thenBy("level").thenBy("trailLength").thenBy("useOfNth").thenBy("specificity",-1).thenBy("charLength")),n=l.organise_equiv_selectors(n),a.endT("generate_selectors post processing"),l.dom=n,n.sels.final[0]?r.intelli_css=n.sels.final[0].code:l.dom.sels.nothing[0]?r.intelli_css=l.dom.sels.nothing[0].code:r.intelli_css="#no-element",n.sels.final[0],r.update_selector_suggestions(),a.endT(arguments,1)},sel_trail:function(e){return{pieces:e.split(/\s?>\s?|\s?\+(?![^(]*\))\s?|\s?~\s?|\s/)}},organise_equiv_selectors:function(t){for(var s=0;s<t.sels.final.length;s++)(a=t.sels.final[s]).n<30?a.$targetEls.each(function(t){a.refKey+=String(Array.prototype.indexOf.call(l.N,e(this)[0]))}):a.refKey="x_plus",t.sels.allRefKeys[a.refKey]?(e.isArray(t.sels.combo[a.refKey])||(t.sels.combo[a.refKey]=[],t.sels.combo[a.refKey].push(t.sels.allRefKeys[a.refKey].code)),a.removeMe=1,t.sels.combo[a.refKey].push(a.code),t.sels.allRefKeys[a.refKey].isCombo=1):t.sels.allRefKeys[a.refKey]=a;for(var r=t.sels.final.length-1;r>=0;r--){var a=t.sels.final[r];a.removeMe&&t.sels.final.splice(r,1)}return t},generate_selectors:function(e,t){a.startT(arguments),t=t||{};for(var s in e.nodes)if(e.nodes.hasOwnProperty(s)){var r=e.nodes[s];r.level!==e.curLevel&&(e.prevLevel=e.curLevel,e.curLevel=r.level);for(var n in r.SelType)if(r.SelType.hasOwnProperty(n)){if(e.foundSingle&&e.singleCount>=t.max_single)return e;if(r.SelType[n]){var i=r.SelType[n];if("pseudo"==n){if(t.incPseudo)for(var o in i)if(i.hasOwnProperty(o))for(var c in i[o])i[o].hasOwnProperty(c)&&(e=l.format_sel_item(i[o][c],n,r,e,t))}else if(t.incReg)for(var c in i)i.hasOwnProperty(c)&&(e=l.format_sel_item(i[c],n,r,e,t))}}var d=t.incPseudo&&!e.foundSingle;if(s>=e.max_levels-1&&!d)break}return a.endT(arguments,1),e},format_sel_item:function(t,s,r,n,i){a.startT(arguments),i=i||{};var o,c="tagName"!=s||"span"!=t&&"div"!=t?0:1,d=[];if(0!==r.level){if(!c||i.incJustSpanDiv)for(var p in n.sels.directEl)if(n.sels.directEl.hasOwnProperty(p)){var u=n.sels.directEl[p];o="tagName"!=s&&"pseudo"!=s||!u.justTagName?0:1,d.push({code:t+" "+u.code,justTagName:o}),i.fullTrail&&d.push({code:t+l.full_trail(n.nodes,r,u,{})+" > "+u.code,justTagName:o})}}else d.push({code:t,justTagName:"tagName"==s||"pseudo"==s?1:0});for(var p in d)if(d.hasOwnProperty(p)&&(t=d[p].code,o=d[p].justTagName,!n.sels.alreadyGot[t])){n.sels.alreadyGot[t]=1;var f=l.apply_css_filters(t,r,n);if(t=f.code,!c||i.incJustSpanDiv){var m=l.jquery_compat_sel_elements(t);"#no-element"==m.selector&&(n.invalidSel=!0);var g=m.length}var _=t.match(/nth\-/g);_=_?_.length:0;var v={code:t,charLength:t.length,trailLength:l.sel_trail(t).pieces.length,useOfNth:_,$targetEls:m,n:g,refKey:"",level:r.level,specificity:a.get_specifcity(t),justTagName:o,pseudo:"pseudo"==s?1:0};if(c&&!i.incJustSpanDiv||(g<1?n.sels.nothing.push(v):n.sels.passes[i.passNum].push(v)),0===r.level){var h=e.extend(!0,{},v);f&&f.prefix&&(h.code=f.nonPrefixCode),n.sels.directEl.push(h)}if(1===g&&(n.foundSingle=!0,n.singleCount++,n.singleCount>=i.max_single))break}return a.endT(arguments,1),n},apply_css_filters:function(e,t,s,a){var n,i,o,c=!1;if(!(a=a||{}).manual&&0===t.level){var d=["pseudo_elements","pseudo_classes"];for(var p in d)if(d.hasOwnProperty(p)){o=d[p];for(n in r.pref[o])r.pref[o].hasOwnProperty(n)&&(i=r.get_pseudo_config([n])[n],n=l.maybe_adjust_for_editable_pseudo(i,n),r.pref[o][i.pCE]&&(":nth-of-type(n)"==i.pCE&&(e=l.apply_filter_at_level({level:"suffix",code:e,regPattern:new RegExp(":nth\\-of\\-type\\(.+\\)","g"),strMatch:!1,repl:""})),e+=n))}}var u=e,f="";if(r.pref.page_specific["page-id"]&&s.sels.sigAtts.pageIdClass&&(f+=s.sels.sigAtts.pageIdClass),r.pref.page_specific["page-name"]&&s.sels.sigAtts.pageNameClass&&(f+=s.sels.sigAtts.pageNameClass),!a.manual&&f&&((v=l.prefix_on(e,t,s,f)).skip||(e=v.justPrepend?f+" "+e:l.apply_filter_at_level({level:v.level,code:e,strMatch:v.strMatch,repl:v.repl,addIfNotPresent:1}))),a.manual){n=a.$li.data("filter"),o=a.$li.data("type"),i=r.get_pseudo_config([n])[n],n=l.maybe_adjust_for_editable_pseudo(i,n);var m,g,_=!1;if("pseudo_elements"==o||"pseudo_classes"==o){c=i.editable?new RegExp(i.pCE.replace(i.editable.str,"\\(.+\\)")):i.pCE;h=!1;m="suffix",g=n}else if("page_specific"==o){f="page-id"==i.pCE?s.sels.sigAtts.pageIdClass:s.sels.sigAtts.pageNameClass;var v=l.prefix_on(e,t,s,f),h=r.pref[o][i.pCE]?v.strMatch:f;m=v.level,g=v.repl,_=v.skip}var y=1;r.pref[o][i.pCE]||(g="",_=!1,y=0),_||(e=l.apply_filter_at_level({level:m,code:e,regPattern:c,strMatch:h,repl:g,addIfNotPresent:y}))}return{code:e,nonPrefixCode:u,prefix:f}},maybe_adjust_for_editable_pseudo:function(e,t){if(e.editable){var s=r.get_pseudo("val",{pseudoCE:t});t=s?t.replace(e.editable.str,"("+s+")"):t}return t},apply_filter_at_level:function(e){var t=l.sel_trail(e.code).pieces,s="suffix"==e.level?t.length-1:e.level,r=t[s],n=e.strMatch?e.strMatch:e.regPattern;return(e.strMatch?r.indexOf(n)>-1:r.match(n))?t[s]=r.replace(n,e.repl):e.addIfNotPresent&&(t[s]+=e.repl),a.isDefined(t[s])||t.splice(s,1),e.code=t.join(" "),e.code},prefix_on:function(e,t,s,r){var a,n={},i=l.sel_trail(e).pieces,o=i[0].indexOf(s.sels.sigAtts.pageIdClass)>-1||i[0].indexOf(s.sels.sigAtts.pageNameClass)>-1;if("html"==t.tagName||"body"==t.tagName||o){var c=!1;if("html"==t.tagName){var d=l.bl_components(i[1]),p=s.sels.sigAtts.bodySelType;for(var u in p)if(p.hasOwnProperty(u))for(var f in p[u])if(p[u].hasOwnProperty(f)){var m=p[u][f];if(d.pseudoStripped==m){a=1,c=!0;break}}c||(n={level:1,strMatch:i[1],repl:r+" "+i[1]})}else{d=l.bl_components(i[0]);a=0}("body"==t.tagName||c||o)&&(n={level:a,strMatch:d.bodyLevelAtt,repl:d.pseudoStripped+r+d.pseudoStr,skip:d.pseudoStripped.indexOf(r)>-1})}else n={justPrepend:1,level:0,strMatch:i[0],repl:r+" "+i[0]};return n},bl_components:function(e){var t={bodyLevelAtt:e,pseudoStripped:a.strip_pseudo(e),pseudoArr:a.pseudo_str_to_arr(e),pseudoStr:""};return t.pseudoArr&&(t.pseudoStr=t.pseudoArr.join("")),t},full_trail:function(e,t,s,r){for(var a="",n=t.level-1;n>0;n--)a+=" > "+e[n].SelType.pseudo[":nth-of-type"][0];return a},finish_tag_string:function(e,t){return a.startT(arguments),t+="area"!=e&&"base"!=e&&"br"!=e&&"col"!=e&&"command"!=e&&"embed"!=e&&"hr"!=e&&"img"!=e&&"input"!=e&&"meta"!=e&&"param"!=e&&"source"!=e?"&#62;...&#60;/"+e+"&#62;":" /&#62;",a.endT(arguments),t},find_parent_attributes:function(e,t){return e.attr(t)&&l.clean_classes(e.attr(t))?e:!!(e=e.parent().not("html")).prop("tagName")&&l.find_parent_attributes(e,t)},format_mixed_array:function(e,t){a.startT(arguments);for(var s={},r=0;r<e.length;r++){var n=t[r].atts,i="&#60;"+n.type;n.id&&(i+=' id="'+n.id+'"'),n.class&&(n.class=n.class.replace("tvr-element-overlay","").replace("tvr-static-overlay","").replace("  "," "),/\S/.test(n.class)&&(i+=' class="'+n.class+'"')),i=l.finish_tag_string(n.type,i),s[r]=[],s[r].val=e[r],s[r].htmlString=i}return a.endT(arguments),s},compProps:{},flatten:function(e){a.startT(arguments);var t=[],s=-1;for(var r in e)if(e.hasOwnProperty(r)&&"[object Array]"===Object.prototype.toString.call(e[r]))for(var n in e[r])e[r].hasOwnProperty(n)&&(t[++s]=e[r][n]);return a.endT(arguments),t},sel_elements:{},validate_and_filter_excluded_els:function(t){try{return e(t)}catch(t){return e("#no-element")}},el_comp_styles:function(e,t,s){var r={},a=!1;if(s.eventClass&&!e.hasClass(s.eventClass)&&(e.addClass(s.eventClass),a=!0),s.pseudoEl)for(var n=0;n<t.length;n++){var l=t[n];r[l]=window.getComputedStyle(e[0],s.pseudoEl).getPropertyValue(l)}else r=e.css(t);return a&&e.removeClass(s.eventClass),r},get_computed_styles:function(t){if(a.startT(arguments),!t.intelli){t.pseudoEl=null;var s=a.get_pseudo_el(t.data);s&&(t.pseudoEl=s[0]),t.eventClass=r.maybe_pair_class(t.data,"class");var i=t.M=r.get_pg_meta(t.row);i&&r.event_type(i.eventKey)&&(t.eventClass="mt-"+i.eventKey)}var o="str"==t.con?l.jquery_compat_sel_elements(t.data):l.triggerEl;if(l.sel_elements=o,!o.length)return r.compProps={},a.endT(arguments,1),!1;var c,d=(c=t.intelli?r.cssProps[r.pgInFocusWiz]:r.pgInFocus?r.cssProps[r.pgInFocus]:l.flatten(r.cssProps)).indexOf("display-flex");-1!==d&&(c[d]="display");var p=o.length;p>19&&(p=19);var u={ltr:{start:"left",end:"right",webkitauto:"left"},rtl:{start:"right",end:"left",webkitauto:"right"}},f=[],m=[];l.compProps={};var g=0,_=jQuery.fn.jquery.split(".").map(function(e){return("0"+e).slice(-2)}).join(".");_=_.toString(),o.each(function(s){if(++g,s>p)return!1;f[s]=[];var i=e(this);if(_>="01.09.00")o=l.el_comp_styles(i,c,t);else{var o={"font-family":""},d={short:n.update_jquery,long:"<p>"+n.update_jquery_long+"</p>",type:"error"};r.log(d),r.update_full_logs()}for(var v in o)if(o.hasOwnProperty(v)&&a.hasValue(o[v])){if("text-align"!=v||"start"!=o[v]&&"end"!=o[v]){if("text-align"==v&&"-webkit-auto"==o[v])o[v]=u[o.direction][o[v].replace(/-/g,"")];else if("text-decoration"==v){h=o[v].split(" ");o[v]=h[0]}}else;if(o[v]=a.sane_decimal(o[v]),"background-position"==v||"background-repeat"==v||"background-size"==v||"background-clip"==v||"background-attachment"==v){var h=o[v].split(",");o[v]=h[0]}"background-image"==v&&(o["background-img-full"]=o[v],o["extracted-gradient"]=a.extract_str("gradient",o[v]),o[v]=a.extract_str("bg-image",o[v]));var y=i.parent();m[s]=[],m[s].element={},m[s].element=i.css(["font-size","width","height"]),a.isDomEl(y)&&(m[s].parent=y.css(["font-size","width","height"]))}f[s].propsList=o,f[s].atts=[],f[s].atts.type=i.prop("tagName").toLowerCase(),f[s].atts.id=i.attr("id"),f[s].atts.class=i.attr("class")});for(var v in c)if(c.hasOwnProperty(v)){var h=c[v],y=f[0].propsList[h],w=[],b=!1;for(var T in f)f.hasOwnProperty(T)&&f[T].propsList&&(w[T]=f[T].propsList[h],w[T]!=y&&(b=!0));l.compProps[h]=b?l.format_mixed_array(w,f):y}t.intelli?(r.intelliCompProps=l.compProps,r.intellinodeCSS=m):(r.compProps=l.compProps,r.nodeCSS=m),a.endT(arguments,1)},reposition_overlays:function(t){a.startT(arguments);var s,n,i,o={con:"reg",scroll:!0,css:"#no-element"},c=e.extend({},o,t);l.stat.MTFrontEls.find("div.tvr-container-overlay").remove(),l.$highligted_els&&l.$highligted_els.length&&l.$highligted_els.removeClass("tvr-element-overlay tvr-static-overlay tvr-hover-element"),l.overlayCount=0;try{if("mixed-hover"==c.con?i=n=l.sel_elements.eq(r.mixedElKey):(s="reg"==c.con?r.curSelCSS:"intelli"==c.con?r.intelli_css:c.css,i=(n=c.$sel_elements?c.$sel_elements:l.jquery_compat_sel_elements(s)).first()),!n.length)return;l.$highligted_els=n,c.scroll&&(l.off_screen(i,!0).half.on||e("html, body").animate({scrollTop:i.offset().top-36},250)),e(n).add_overlay()}catch(e){console.log("exceptionObject",e)}a.endT(arguments)},maintain_cur_scroll:function(e,t,s){a.startT(arguments);var r=l.stat.body.scrollTop()+e;if(l.stat.body.scrollTop(r),!a.isDomEl(l.triggerEl))return a.endT(arguments),!1;var n=l.off_screen(l.triggerEl);t&&!n.half.on&&l.stat.body.scrollTop(l.triggerEl.offset().top-100),a.endT(arguments)},mouse_coordinate:function(e,t){a.startT(arguments);var s=e.clientX+l.stat.body.scrollLeft(),r=e.clientY+l.stat.body.scrollTop(),n={x:s,y:r};if(t){var i=t.offset();n.elX=s-i.left,n.elY=r-i.top}return a.endT(arguments),n},quick_button_clicked:function(t){a.startT(arguments);var s=e("#one-click-create"),r=t.elX<=s.outerWidth()&&t.elY<=s.outerHeight();return r&&(r=l.stat.html.hasClass("mt-sels-target")?"go":"create"),a.endT(arguments),r},off_screen:function(t,s){if(a.startT(arguments),!a.isDomEl(t))return!1;var r=t.offset(),n={c:{scrT:e(window).scrollTop(),scrL:e(window).scrollLeft(),top:r.top,height:t.height(),windowHeight:e(window).height(),left:r.left,width:t.width(),windowWidth:e(window).width()}};n.bottom=n.c.top+n.c.height<=n.c.windowHeight+n.c.scrT?0:1,n.right=n.c.left+n.c.width<=n.c.windowWidth+n.c.scrL?0:1,n.top=n.c.top>=n.c.scrT?0:1,n.left=n.c.left>=n.c.scrL?0:1,n.on=!(n.bottom||n.right||n.top||n.left);var l=["half","third"];for(var i in l)if(l.hasOwnProperty(i)){var o=i+2,c=l[i];n[c]={bottom:n.c.top+n.c.height/o<=n.c.windowHeight+n.c.scrT?0:1,right:n.c.left+n.c.width/o<=n.c.windowWidth+n.c.scrL?0:1,top:n.c.top+n.c.height/o>=n.c.scrT?0:1,left:n.c.left+n.c.width/o>=n.c.scrL?0:1},n[c].on=!(n[c].bottom||n[c].right||n[c].top||n[c].left)}return a.endT(arguments),n},get_matching_selectors:function(t,s){a.startT(arguments);var r=[],n=t[0],i=0;for(var o in s)if(s.hasOwnProperty(o)){var c=s[o].code;l.selectorMatches(n,c)&&(r[i]={id:o,fName:s[o].fName,sName:s[o].sName,code:c,n:e(c).length,ui_order:i},++i)}return r.sort(a.firstBy("n").thenBy("ui_order",-1)),a.endT(arguments),r},bind_wizard_hover:function(){if(a.startT(arguments),l.stat.html.hasClass("tvr-hh-mode"))return!0;l.stat.html.addClass("tvr-hh-mode"),s.integrate.FLBuilder&&r.bb_is_editing()&&(l.BBTempDisabled=!0,s.integrate.FLBuilder._destroyOverlayEvents(),s.integrate.FLBuilder._closePanel()),r.show_wizard(!0),r.update_wizard_html({updateVisEditor:1}),s.integrate.FLBuilder,l.stat.html.hasClass("mt-hover-bound")||(l.stat.html.addClass("mt-hover-bound"),e(document).on("mouseover.wiz-hover","*",function(t){t.stopPropagation();var s=e(this);if(r.el_selected||s.hasClass("tvr-hover-element")||s.hasClass("mt-matching")||!l.stat.html.hasClass("tvr-hh-mode"))return!1;s.addClass("tvr-hover-element"),l.all_targeting_actions(s,{wrapjQuery:!1,scroll:!1})}).on("mouseout.wiz-hover","*",function(t){t.stopPropagation(),e(this).removeClass("tvr-hover-element")})),a.endT(arguments,1)},all_targeting_actions:function(t,s){t=s.wrapjQuery?e(t):t,e(".tvr-trigger-el").removeClass("tvr-trigger-el"),l.triggerEl=t,t.addClass("tvr-trigger-el"),r.feature_on(0,"mt_highlight",{fHTML:1,noSave:1}),r.stat.tvr.addClass("tvr_inspect_waiting"),l.instant_targeting_actions(s),"immediate"==s.quick?l.quick_targeting_actions(s):(r.timer.quickTarget&&clearTimeout(r.timer.quickTarget),r.timer.quickTarget=setTimeout(function(){l.quick_targeting_actions(s)},50)),"immediate"==s.deferred?l.deferred_targeting_actions(s):(r.timer.deferredTarget&&clearTimeout(r.timer.deferredTarget),r.timer.deferredTarget=setTimeout(function(){l.deferred_targeting_actions(s)},150)),s.selectElement&&l.element_selected(t)},instant_targeting_actions:function(e){a.startT(arguments),l.reposition_overlays({con:"targeting-hover",scroll:e.scroll,$sel_elements:l.triggerEl}),a.endT(arguments)},quick_targeting_actions:function(e){if(a.startT(arguments),!a.isDomEl(l.triggerEl))return!1;e.onlyQuick=!0,r.maybe_update_wizard_panels(e),l.N=document.getElementsByTagName("*"),l.triggerElIndex=String(Array.prototype.indexOf.call(l.N,l.triggerEl[0])),l.build_selector_suggestions_2(),l.set_quick_go_options(l.triggerEl),r.update_dom_arrows(e),a.endT(arguments)},deferred_targeting_actions:function(e){if(a.startT(arguments),!a.isDomEl(l.triggerEl))return!1;e.onlyQuick=!1,e.onlyDeferred=!0,e.forceHTMLUpdate=!0,e.exclActual=!0,r.maybe_update_wizard_panels(e),a.endT(arguments,1)},unbind_wizard_hover:function(){a.startT(arguments),l.stat.html.removeClass("tvr-hh-mode"),l.element_unselected(),r.feature_off(0,"mt_highlight",{fHTML:1,noSave:1}),r.hide_wizard(),l.triggerEl={},l.BBTempDisabled&&s.integrate.FLBuilder&&r.bb_is_editing()&&(s.integrate.FLBuilder._bindOverlayEvents(),l.BBTempDisabled=!1),a.endT(arguments)},singleClick:function(e,t,s){if(a.startT(arguments),t.preventDefault(),s&&"a"==s.tagName){var l=s.el.attr("href");if(l&&l.match(/\.(gif|jpe?g|png|svg)$/i))return!1;if(l.indexOf(r.adminUrl)>-1)return r.update_full_logs({short:n.navigate_wp_admin,long:"<p>"+n.navigate_wp_admin_long+"</p>",type:"info"}),a.endT(arguments),!1}setTimeout(function(){var t=parseInt(e.data("double"),10);if(t>0)return e.data("double",t-1),!1;if(s)if("a"==s.tagName&&"#"!=l.charAt(0))window.location=l;else{var r=e.closest("form");a.isDomEl(r)&&r.trigger("submit")}},1e3),a.endT(arguments)}};s.integrate.elementor=!!window.parent.ElementorConfig&&window.parent.ElementorConfig,s.integrate.elementor?t():window.addEventListener?window.addEventListener("load",t,!1):window.attachEvent&&window.attachEvent("onload",t)}))}catch(e){}