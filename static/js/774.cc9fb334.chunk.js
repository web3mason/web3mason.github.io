"use strict";(self.webpackChunk_web3mason_w3m_presale_react_app=self.webpackChunk_web3mason_w3m_presale_react_app||[]).push([[774],{5042:function(e,t,n){n.d(t,{AV:function(){return d},Ic:function(){return Y},Vs:function(){return ee},jb:function(){return z},t0:function(){return w},uA:function(){return h},uc:function(){return B},zb:function(){return b},zv:function(){return f}});var r,o=n(3433),a=n(7762),s=n(4165),i=n(5861),c=n(9439),u=n(1631),l=(0,u.sj)({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),d={state:l,subscribe:function(e){return(0,u.Ld)(l,(function(){return e(l)}))},push:function(e,t){e!==l.view&&(l.view=e,t&&(l.data=t),l.history.push(e))},reset:function(e){l.view=e,l.history=[e]},replace:function(e){l.history.length>1&&(l.history[l.history.length-1]=e,l.view=e)},goBack:function(){if(l.history.length>1){l.history.pop();var e=l.history.slice(-1),t=(0,c.Z)(e,1)[0];l.view=t}},setData:function(e){l.data=e}},f={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:function(){return typeof window<"u"&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/.test(navigator.userAgent))},isAndroid:function(){return f.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos:function(){var e=navigator.userAgent.toLowerCase();return f.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:function(e){return e.startsWith("http://")||e.startsWith("https://")},isArray:function(e){return Array.isArray(e)&&e.length>0},formatNativeUrl:function(e,t,n){if(f.isHttpUrl(e))return this.formatUniversalUrl(e,t,n);var r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r="".concat(r,"://")),r.endsWith("/")||(r="".concat(r,"/")),this.setWalletConnectDeepLink(r,n);var o=encodeURIComponent(t);return"".concat(r,"wc?uri=").concat(o)},formatUniversalUrl:function(e,t,n){if(!f.isHttpUrl(e))return this.formatNativeUrl(e,t,n);var r=e;r.endsWith("/")||(r="".concat(r,"/")),this.setWalletConnectDeepLink(r,n);var o=encodeURIComponent(t);return"".concat(r,"wc?uri=").concat(o)},wait:function(e){return(0,i.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout(t,e)})));case 1:case"end":return t.stop()}}),t)})))()},openHref:function(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink:function(e,t){try{localStorage.setItem(f.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch(n){console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink:function(e){try{var t=e.split("?"),n=(0,c.Z)(t,1)[0];localStorage.setItem(f.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:n,name:"Android"}))}catch(r){console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink:function(){try{localStorage.removeItem(f.WALLETCONNECT_DEEPLINK_CHOICE)}catch(e){console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage:function(){try{typeof localStorage<"u"&&localStorage.setItem(f.WCM_VERSION,"2.6.1")}catch(e){console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData:function(){var e,t=null==(e=d.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},p=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),m=(0,u.sj)({enabled:p,userSessionId:"",events:[],connectedWalletId:void 0}),h={state:m,subscribe:function(e){return(0,u.Ld)(m.events,(function(){return e((0,u.CO)(m.events[m.events.length-1]))}))},initialize:function(){m.enabled&&typeof(null==crypto?void 0:crypto.randomUUID)<"u"&&(m.userSessionId=crypto.randomUUID())},setConnectedWalletId:function(e){m.connectedWalletId=e},click:function(e){if(m.enabled){var t={type:"CLICK",name:e.name,userSessionId:m.userSessionId,timestamp:Date.now(),data:e};m.events.push(t)}},track:function(e){if(m.enabled){var t={type:"TRACK",name:e.name,userSessionId:m.userSessionId,timestamp:Date.now(),data:e};m.events.push(t)}},view:function(e){if(m.enabled){var t={type:"VIEW",name:e.name,userSessionId:m.userSessionId,timestamp:Date.now(),data:e};m.events.push(t)}}},v=(0,u.sj)({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),b={state:v,subscribe:function(e){return(0,u.Ld)(v,(function(){return e(v)}))},setChains:function(e){v.chains=e},setWalletConnectUri:function(e){v.walletConnectUri=e},setIsCustomDesktop:function(e){v.isCustomDesktop=e},setIsCustomMobile:function(e){v.isCustomMobile=e},setIsDataLoaded:function(e){v.isDataLoaded=e},setIsUiLoaded:function(e){v.isUiLoaded=e},setIsAuth:function(e){v.isAuth=e}},I=(0,u.sj)({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),w={state:I,subscribe:function(e){return(0,u.Ld)(I,(function(){return e(I)}))},setConfig:function(e){var t,n;h.initialize(),b.setChains(e.chains),b.setIsAuth(Boolean(e.enableAuthMode)),b.setIsCustomMobile(Boolean(null==(t=e.mobileWallets)?void 0:t.length)),b.setIsCustomDesktop(Boolean(null==(n=e.desktopWallets)?void 0:n.length)),f.setModalVersionInStorage(),Object.assign(I,e)}},g=Object.defineProperty,y=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,L=function(e,t,n){return t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},k=function(e,t){for(var n in t||(t={}))C.call(t,n)&&L(e,n,t[n]);if(y){var r,o=(0,a.Z)(y(t));try{for(o.s();!(r=o.n()).done;){n=r.value;W.call(t,n)&&L(e,n,t[n])}}catch(s){o.e(s)}finally{o.f()}}return e},E="https://explorer-api.walletconnect.com",O="wcm",j="js-2.6.1";function x(e,t){return(r=r||(0,i.Z)((0,s.Z)().mark((function e(t,n){var r,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=k({sdkType:O,sdkVersion:j},n),(o=new URL(t,E)).searchParams.append("projectId",w.state.projectId),Object.entries(r).forEach((function(e){var t=(0,c.Z)(e,2),n=t[0],r=t[1];r&&o.searchParams.append(n,String(r))})),e.next=5,fetch(o);case 5:return e.abrupt("return",e.sent.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=function(e){return(0,i.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",x("/w3m/v1/getDesktopListings",e));case 1:case"end":return t.stop()}}),t)})))()},U=function(e){return(0,i.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",x("/w3m/v1/getMobileListings",e));case 1:case"end":return t.stop()}}),t)})))()},Z=function(e){return(0,i.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",x("/w3m/v1/getAllListings",e));case 1:case"end":return t.stop()}}),t)})))()},M=function(e){return"".concat(E,"/w3m/v1/getWalletImage/").concat(e,"?projectId=").concat(w.state.projectId,"&sdkType=").concat(O,"&sdkVersion=").concat(j)},D=function(e){return"".concat(E,"/w3m/v1/getAssetImage/").concat(e,"?projectId=").concat(w.state.projectId,"&sdkType=").concat(O,"&sdkVersion=").concat(j)},_=Object.defineProperty,N=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,P=function(e,t,n){return t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},R=function(e,t){for(var n in t||(t={}))S.call(t,n)&&P(e,n,t[n]);if(N){var r,o=(0,a.Z)(N(t));try{for(o.s();!(r=o.n()).done;){n=r.value;T.call(t,n)&&P(e,n,t[n])}}catch(s){o.e(s)}finally{o.f()}}return e},V=f.isMobile(),H=(0,u.sj)({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),B={state:H,getRecomendedWallets:function(){return(0,i.Z)((0,s.Z)().mark((function e(){var t,n,r,o,a,i,c,u,l,d,p,m,h,v,I;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=w.state,n=t.explorerRecommendedWalletIds,r=t.explorerExcludedWalletIds,"NONE"!==n&&("ALL"!==r||n)){e.next=3;break}return e.abrupt("return",H.recomendedWallets);case 3:if(!f.isArray(n)){e.next=13;break}return o={recommendedIds:n.join(",")},e.next=7,Z(o);case 7:a=e.sent,i=a.listings,(c=Object.values(i)).sort((function(e,t){return n.indexOf(e.id)-n.indexOf(t.id)})),H.recomendedWallets=c,e.next=31;break;case 13:if(u=b.state,l=u.chains,d=u.isAuth,p=null===l||void 0===l?void 0:l.join(","),m=f.isArray(r),h={page:1,sdks:d?"auth_v1":void 0,entries:f.RECOMMENDED_WALLET_AMOUNT,chains:p,version:2,excludedIds:m?r.join(","):void 0},!V){e.next=25;break}return e.next=22,U(h);case 22:e.t0=e.sent,e.next=28;break;case 25:return e.next=27,A(h);case 27:e.t0=e.sent;case 28:v=e.t0,I=v.listings,H.recomendedWallets=Object.values(I);case 31:return e.abrupt("return",H.recomendedWallets);case 32:case"end":return e.stop()}}),e)})))()},getWallets:function(e){return(0,i.Z)((0,s.Z)().mark((function t(){var n,r,a,i,c,u,l,d,p,m,h,v;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=R({},e),r=w.state,a=r.explorerRecommendedWalletIds,i=r.explorerExcludedWalletIds,c=H.recomendedWallets,"ALL"!==i){t.next=3;break}return t.abrupt("return",H.wallets);case 3:if(c.length?n.excludedIds=c.map((function(e){return e.id})).join(","):f.isArray(a)&&(n.excludedIds=a.join(",")),f.isArray(i)&&(n.excludedIds=[n.excludedIds,i].filter(Boolean).join(",")),b.state.isAuth&&(n.sdks="auth_v1"),u=e.page,l=e.search,!V){t.next=12;break}return t.next=9,U(n);case 9:t.t0=t.sent,t.next=15;break;case 12:return t.next=14,A(n);case 14:t.t0=t.sent;case 15:return d=t.t0,p=d.listings,m=d.total,h=Object.values(p),v=l?"search":"wallets",t.abrupt("return",(H[v]={listings:[].concat((0,o.Z)(H[v].listings),h),total:m,page:null!==u&&void 0!==u?u:1},{listings:h,total:m}));case 21:case"end":return t.stop()}}),t)})))()},getWalletImageUrl:function(e){return M(e)},getAssetImageUrl:function(e){return D(e)},resetSearch:function(){H.search={listings:[],total:0,page:1}}},K=(0,u.sj)({open:!1}),z={state:K,subscribe:function(e){return(0,u.Ld)(K,(function(){return e(K)}))},open:function(e){return(0,i.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){var n=b.state,r=n.isUiLoaded,o=n.isDataLoaded;if(f.removeWalletConnectDeepLink(),b.setWalletConnectUri(null===e||void 0===e?void 0:e.uri),b.setChains(null===e||void 0===e?void 0:e.chains),d.reset("ConnectWallet"),r&&o)K.open=!0,t();else var a=setInterval((function(){var e=b.state;e.isUiLoaded&&e.isDataLoaded&&(clearInterval(a),K.open=!0,t())}),200)})));case 1:case"end":return t.stop()}}),t)})))()},close:function(){K.open=!1}},J=Object.defineProperty,q=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,Q=function(e,t,n){return t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n};var X=(0,u.sj)({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),Y={state:X,subscribe:function(e){return(0,u.Ld)(X,(function(){return e(X)}))},setThemeConfig:function(e){var t=e.themeMode,n=e.themeVariables;t&&(X.themeMode=t),n&&(X.themeVariables=function(e,t){for(var n in t||(t={}))F.call(t,n)&&Q(e,n,t[n]);if(q){var r,o=(0,a.Z)(q(t));try{for(o.s();!(r=o.n()).done;)n=r.value,G.call(t,n)&&Q(e,n,t[n])}catch(s){o.e(s)}finally{o.f()}}return e}({},n))}},$=(0,u.sj)({open:!1,message:"",variant:"success"}),ee={state:$,subscribe:function(e){return(0,u.Ld)($,(function(){return e($)}))},openToast:function(e,t){$.open=!0,$.message=e,$.variant=t},closeToast:function(){$.open=!1}}},774:function(e,t,n){n.r(t),n.d(t,{WalletConnectModal:function(){return c}});var r=n(4165),o=n(5861),a=n(5671),s=n(3144),i=n(5042),c=function(e){function t(e){(0,a.Z)(this,t),this.openModal=i.jb.open,this.closeModal=i.jb.close,this.subscribeModal=i.jb.subscribe,this.setTheme=i.Ic.setThemeConfig,i.Ic.setThemeConfig(e),i.t0.setConfig(e),this.initUi()}return(0,s.Z)(t,[{key:"initUi",value:function(){return(e=e||(0,o.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(typeof window<"u")){e.next=5;break}return e.next=3,Promise.all([n.e(805),n.e(315)]).then(n.bind(n,6315));case 3:t=document.createElement("wcm-modal"),document.body.insertAdjacentElement("beforeend",t),i.zb.setIsUiLoaded(!0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}]),t}()}}]);
//# sourceMappingURL=774.cc9fb334.chunk.js.map