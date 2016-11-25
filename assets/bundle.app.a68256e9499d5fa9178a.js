webpackJsonp([1],{202:function(e,t,n){e.e=n(228)},222:function(e,t){function n(){return"serviceWorker"in navigator&&(window.fetch||"imageRendering"in document.documentElement.style)&&("https:"===window.location.protocol||"localhost"===window.location.hostname)}function a(e){if(e||(e={}),n()){var t=navigator.serviceWorker.register("sw.js"),a=function(e){function t(){switch(u.state){case"redundant":r("onUpdateFailed"),u.onstatechange=null;break;case"installing":a||r("onUpdating");break;case"installed":o||r("onUpdateReady");break;case"activated":r("onUpdated"),u.onstatechange=null}}function n(){switch(u.state){case"redundant":u.onstatechange=null;break;case"installing":break;case"installed":break;case"activated":r("onInstalled"),u.onstatechange=null}}var a,o,u=e.installing||e.waiting;if(u&&!u.onstatechange){var i;e.active?(t(),i=t):(n(),i=n),a=!0,e.waiting&&(o=!0),u.onstatechange=i}},r=function(t){"function"==typeof e[t]&&e[t]({source:"ServiceWorker"})};return void t.then(function(e){e&&(a(e),e.onupdatefound=function(){a(e)})}).catch(function(e){return r("onError"),Promise.reject(e)})}}function r(e,t){if(n())return void navigator.serviceWorker.getRegistration().then(function(n){return n&&n.waiting?(n.waiting.postMessage({action:"skipWaiting"}),void(e&&e())):void(t&&t())})}t.install=a,t.applyUpdate=r},228:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var r=n(20),o=a(r),u=n(93),i=a(u),l=n(240),s=a(l),c=n(232),f=a(c),d=(0,s.default)();i.default.render(o.default.createElement(f.default,{store:d}),document.getElementById("root"))},232:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(20),o=a(r),u=n(94),i=n(292),l=n(281),s=function(e){var t=e.store;return o.default.createElement(u.Provider,{store:t},o.default.createElement(l.Router,{history:l.hashHistory},o.default.createElement(l.Route,{path:"/",component:i.Template.default},o.default.createElement(l.IndexRedirect,{to:"el"}),o.default.createElement(l.Route,{path:":lang"},o.default.createElement(l.IndexRoute,{component:i.DummyPage.default}),o.default.createElement(l.Route,{path:":category"},o.default.createElement(l.IndexRoute,{component:i.Page.default}),o.default.createElement(l.Route,{path:"puzzle",component:i.Puzzle.default},o.default.createElement(l.IndexRedirect,{to:"1"}),o.default.createElement(l.Route,{path:":index",component:i.Puzzle.default})))))))};t.default=s},240:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(50),o=n(95),u=a(o),i=n(319),l=a(i),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,r.createStore)(l.default,e,(0,r.applyMiddleware)(u.default));return t};t.default=s},282:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.PUZZLE_PART_POSITION="puzzle-part-position",t.IS_PUZZLE_SOLVED="is-puzzle-solved",t.SHUFFLE_PUZZLE="shuffle-puzzle",t.INIT_PUZZLE="init-puzzle"},292:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.Template=t.OfflineUpdate=t.Puzzle=t.DummyPage=t.Page=void 0;var r=n(318),o=a(r),u=n(363),i=a(u),l=n(365),s=a(l),c=n(315),f=a(c),d=n(293),p=a(d);t.Page=s,t.DummyPage=i,t.Puzzle=f,t.OfflineUpdate=p,t.Template=o},293:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.offlineProps=void 0;var r=n(308),o=a(r),u=n(309),i=a(u);t.offlineProps=i.default,t.default=o.default},294:function(e,t,n){"use strict";function a(e){return new Promise(function(t){setTimeout(t,e)})}function r(){return function(e){return e(s()),a(500).then(function(){return e(c())})}}function o(e){return function(t){return t(i(e)),a(500).then(function(){return t(l())})}}Object.defineProperty(t,"__esModule",{value:!0}),t.shufflePuzzle=t.initPuzzle=t.isPuzzleSolved=t.getPuzzlePartPosition=void 0,t.delay=a,t.initAndShufflePuzzle=r,t.checkPuzzlePartPosition=o;var u=n(282),i=t.getPuzzlePartPosition=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;if("number"!=typeof e)throw new TypeError("Value should be string");return{type:u.PUZZLE_PART_POSITION,part:e}},l=t.isPuzzleSolved=function(){return{type:u.IS_PUZZLE_SOLVED}},s=t.initPuzzle=function(){return{type:u.INIT_PUZZLE}},c=t.shufflePuzzle=function(){return{type:u.SHUFFLE_PUZZLE}}},308:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(20),c=a(s);n(321);var f=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));if(n.state={status:"",message:"Quiz has been updated.",hidden:!0},"production"!==e.NODE_ENV)return o(n);var a=e.install;return a({onInstalled:function(){return n.onInstalled()},onUpdating:function(){return n.onUpdating()},onUpdateReady:function(){return n.onUpdateReady()},onUpdateFailed:function(){return n.onUpdateFailed()},onUpdated:function(){return n.onUpdated()},onReload:function(){return n.reload()},onDismiss:function(){return n.dismiss()}}),n}return u(t,e),l(t,[{key:"onInstalled",value:function(){}},{key:"onUpdating",value:function(){this.setState(i({},this.state,{status:"updating",message:"updating...",hidden:!1}))}},{key:"onUpdateReady",value:function(){var e=this.props.applyUpdate;e(),this.setState(i({},this.state,{status:"update-ready",hidden:!1}))}},{key:"onUpdateFailed",value:function(){this.setState(i({},this.state,{message:"Quiz has not been updated.",status:"update-failed",hidden:!1}))}},{key:"onUpdated",value:function(){this.setState(i({},this.state,{status:"updated",message:"Quiz has been updated.",hidden:!1}))}},{key:"reload",value:function(){window.location.reload()}},{key:"dismiss",value:function(){this.setState(i({},this.state,{hidden:!0}))}},{key:"renderActions",value:function(){var e=this,t=this.state.status;return"updating"===t?"":c.default.createElement("span",null,c.default.createElement("a",{href:"javascript:",onClick:function(){return e.reload()}},"Reload"),c.default.createElement("span",null," page to apply update or "),c.default.createElement("a",{href:"javascript:",onClick:function(){return e.dismiss()}},"dismiss"),c.default.createElement("span",null," notification."))}},{key:"render",value:function(){var e=this.state,t=e.hidden,n=e.message;return c.default.createElement("div",{className:"offline-update"+(t?" hidden":"")},c.default.createElement("div",{className:"container"},c.default.createElement("span",null,n," "),this.renderActions()))}}]),t}(s.Component);f.propTypes={NODE_ENV:s.PropTypes.string.isRequired,install:s.PropTypes.func.isRequired,applyUpdate:s.PropTypes.func.isRequired},f.defaultProps={NODE_ENV:"development"},t.default=f},309:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"production",t={install:function(){},applyUpdate:function(){},env:e},a=t.install,r=t.applyUpdate;return"production"===e&&(a=n(222).install,r=n(222).applyUpdate),{install:a,applyUpdate:r,NODE_ENV:"production"}};t.default=a},310:function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:600,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:450,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:4;n(this,e),this.gap=u,this.columns=t,this.rows=a,this.width=r,this.height=o,this.emptyIndex=t*a-1,this.parts=[]}return a(e,[{key:"initParts",value:function(){var e=[],t=this.columns*this.rows,n=Math.floor((this.width-this.gap*this.columns)/this.columns),a=Math.floor((this.height-this.gap*this.rows)/this.rows),r=this.gap/2,o=this.gap/2;this.emptyIndex=t-1;for(var u=0;u<t;u++)e.push({index:u,label:u+1,empty:u==t-1,bx:r,by:o,x:r,y:o,w:n,h:a}),Math.ceil(r+n)>=this.width-10?(r=this.gap/2,o+=a+this.gap):r+=n+this.gap;return this.parts=e,{parts:e,emptyIndex:e.length-1,columns:this.columns,rows:this.rows}}},{key:"isPuzzleSolved",value:function(){return this.parts.every(function(e,t){var n=e.index;return n===t})}},{key:"getNewIndex",value:function(e){var t=this.getNeigborParts();return t.indexOf(e)>=0?this.emptyIndex:e}},{key:"getNeigborParts",value:function(){var e=this,t=[];return t.push(this.emptyIndex-this.columns),t.push(this.emptyIndex+this.columns),(this.emptyIndex+1)%this.columns!==0&&t.push(this.emptyIndex+1),this.emptyIndex%this.columns!==0&&t.push(this.emptyIndex-1),t.filter(function(t){return t>=0&&t<e.columns*e.rows})}},{key:"getRandomIndex",value:function(){var e=this.getNeigborParts();return e[Math.floor(Math.random()*e.length)]}},{key:"shuffle",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4,t=0;t<e;t++)this.parts=this.changeParts(this.getRandomIndex());return this.parts}},{key:"changeParts",value:function(e){var t=this.getNewIndex(e);if(e!=t){var n=this.parts.find(function(e){var n=e.index;return t===n}),a=this.parts.find(function(t){var n=t.index;return e===n}),r=a.x,o=a.y;a.x=n.x,a.y=n.y,n.x=r,n.y=o,a.index=t,n.index=e,this.emptyIndex=e}return this.parts.slice()}}]),e}();t.default=r},311:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.mapDispatchToProps=t.mapStateToProps=t.Puzzle=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(20),s=a(l),c=n(94),f=n(281),d=n(294),p=n(313);n(322);var h=n(381),m=h.data,b=t.Puzzle=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u(t,e),i(t,[{key:"componentWillMount",value:function(){this.props.shufflePuzzle()}},{key:"getImage",value:function(){var e=this.props.params,t=e.lang,n=e.category,a=e.index;return{images:m[t][n].images,image:m[t][n].images[a-1],index:parseInt(a),path:"/"+t+"/"+n+"/puzzle"}}},{key:"render",value:function(){var e=this.props,t=e.parts,n=e.partClick,a=e.isPuzzleSolved,r=e.params,o=r.lang,u=this.getImage(),i=u.image,l=u.index,c=u.path,d=u.images;return s.default.createElement("div",{className:"game page"},s.default.createElement("div",{className:a?"solved":""},s.default.createElement("ul",{className:"puzzle-container",style:(0,p.getBgImageStyles)(a,i)},t.map(function(e,t){return s.default.createElement("li",{key:t,style:(0,p.getStyles)(e,i),className:e.empty?"empty":""},s.default.createElement("a",{style:(0,p.getSizeStyles)(e.w,e.h),href:"javascript:",onClick:function(){return n(e.index)}},s.default.createElement("span",{className:"number"},e.label)))})),s.default.createElement(f.Link,{to:"/"+o,className:"btn back"},m[o]["button-puzzle-home-label"]),s.default.createElement("div",{className:"puzzle-complete"},s.default.createElement("div",{className:"puzzle-complete-message"},l===d.length&&s.default.createElement("br",null),l===d.length&&s.default.createElement("br",null),s.default.createElement("h2",null,m[o]["puzzle-complete-title"]),l<d.length&&s.default.createElement("h3",null,m[o]["puzzle-complete-subtitle"]),l===d.length&&s.default.createElement("br",null)),s.default.createElement("div",{className:"puzzle-complete-group"},s.default.createElement(f.Link,{to:"/"+o,className:"btn puzzle-go-home"},m[o]["button-puzzle-home-label"]),l<d.length&&s.default.createElement(f.Link,{to:c+"/"+(l+1),className:"btn puzzle-next"},m[o]["button-puzzle-next-label"])))))}}]),t}(l.Component);b.propTypes={isPuzzleSolved:l.PropTypes.bool.isRequired,parts:l.PropTypes.array.isRequired,shufflePuzzle:l.PropTypes.func,partClick:l.PropTypes.func};var y=t.mapStateToProps=function(e){var t=e.puzzle;return t},v=t.mapDispatchToProps=function(e){return{partClick:function(t){return e((0,d.checkPuzzlePartPosition)(t))},shufflePuzzle:function(){return e((0,d.initAndShufflePuzzle)())}}};t.default=(0,c.connect)(y,v)(b)},312:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(311),o=a(r);t.default=o.default},313:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a=(t.getStyles=function(e,t){var a=e.x,u=e.y,i=e.w,l=e.h,s=e.bx,c=e.by;return n({left:a+"px",top:u+"px"},r(s,c,t),o(i,l))},t.getBgImageStyles=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments[1];return e?{backgroundImage:"url("+t+")"}:{}}),r=t.getBgStyles=function(e,t,r){return n({backgroundPosition:"-"+e+"px -"+t+"px"},a(void 0,r))},o=t.getSizeStyles=function(e,t){return{width:e+"px",height:t+"px"}}},314:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.NAME="puzzle"},315:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=t.constants=t.actionTypes=t.actions=void 0;var o=n(312),u=r(o),i=n(316),l=r(i),s=n(294),c=a(s),f=n(282),d=a(f),p=n(314),h=a(p);t.actions=c,t.actionTypes=d,t.constants=h,t.reducer=l.default,t.default=u.default},316:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments[1];switch(t.type){case u.PUZZLE_PART_POSITION:return o({},e,{parts:s.changeParts(t.part),emptyIndex:s.emptyIndex});case u.IS_PUZZLE_SOLVED:return o({},e,{isPuzzleSolved:s.isPuzzleSolved()});case u.INIT_PUZZLE:return o({},s.initParts(),{isPuzzleSolved:!1});case u.SHUFFLE_PUZZLE:return o({},e,{parts:s.shuffle(),isPuzzleSolved:!1});default:return o({},e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.INITIAL_STATE=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.default=r;var u=n(282),i=n(310),l=a(i),s=new l.default,c=t.INITIAL_STATE=o({},s.initParts(),{isPuzzleSolved:!1})},317:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(20),o=a(r),u=n(291),i=a(u),l=n(367),s=a(l),c=n(293),f=a(c);n(323),n(394),n(369);var d=n(381),p=d.data,h=[n(373),n(372)],m=function(e){var t=e.children,n=e.location,a=e.params,r=a.lang,u=a.category,l=u?p[r]["button-start-label"]:p[r]["button-select-label"],d=u?"/puzzle":"",m=u?"":"empty",b=n.pathname.split("/").join(" ");return o.default.createElement("div",null,o.default.createElement(f.default,(0,c.offlineProps)()),o.default.createElement("div",{className:"container"},o.default.createElement("div",{className:"pages"},o.default.createElement("div",{className:"page-container "+b},o.default.createElement(s.default,{title:p[r].laikes.title,subtitle:p[r].laikes.subtitle,position:"left",image:h[0],buttonLabel:l,link:r+"/laikes"+d}),o.default.createElement(s.default,{title:p[r].astikes.title,subtitle:p[r].astikes.subtitle,position:"right",image:h[1],buttonLabel:l,link:r+"/astikes"+d})),o.default.createElement(i.default,{component:"div",className:"page-content "+m,transitionName:"top",transitionAppear:!0,transitionAppearTimeout:100,transitionEnterTimeout:500,transitionLeaveTimeout:500},o.default.cloneElement(t,{key:n.pathname})))))};t.default=m},318:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Template=void 0;var r=n(317),o=a(r);t.Template=o.default,t.default=o.default},319:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var r=n(50),o=n(292);t.default=(0,r.combineReducers)(a({},o.Puzzle.constants.NAME,o.Puzzle.reducer))},321:function(e,t){},322:321,323:321,362:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(20),s=a(l),c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"componentWillMount",value:function(){var e=document.querySelector("body");e.classList.remove("laikes-bg"),e.classList.remove("astikes-bg")}},{key:"render",value:function(){return s.default.createElement("div",null)}}]),t}(l.Component);t.default=c},363:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(362),o=a(r);t.default=o.default},364:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(20),s=a(l),c=n(281),f=n(381),d=f.data;n(368);var p=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"componentWillMount",value:function(){var e=this.props.params.category,t=document.querySelector("body");t.classList.add(e+"-bg")}},{key:"render",value:function(){var e=this.props.params,t=e.lang,n=e.category,a=d[t][n].description;return s.default.createElement("div",{className:"content"},s.default.createElement("div",{className:"content-image"},s.default.createElement("img",{src:d[t][n].katopsi})),s.default.createElement("div",{className:"content-text",dangerouslySetInnerHTML:{__html:a}}),s.default.createElement(c.Link,{to:"/"+t,className:"btn back"},d[t]["button-puzzle-home-label"]))}}]),t}(l.Component);t.default=p},365:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(364),o=a(r);t.default=o.default},366:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(20),o=a(r),u=n(281),i=function(e){var t=e.image,n=e.buttonLabel,a=e.link,r=e.position,i=e.title,l=e.subtitle;return o.default.createElement("div",{className:r+"-panel"},o.default.createElement("div",{className:"bg",style:{backgroundImage:"url("+t+")"}}),o.default.createElement("h4",null,i," ",l),o.default.createElement("div",{className:"title"},o.default.createElement("h1",null,i),o.default.createElement("hr",null),o.default.createElement("h5",null,l)),o.default.createElement(u.Link,{to:""+a,className:"btn"},n))};t.default=i},367:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(366),o=a(r);t.default=o.default},368:321,369:321,372:function(e,t,n){e.e=n.p+"ad3ae4add81b3e57a61e81a31447dd05.jpg"},373:function(e,t,n){e.e=n.p+"9cc89c1ca098e0a4ab5dc18f5a9112e8.jpg"},381:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[n(385),n(386),n(390)],r=[n(382),n(383),n(384),n(389)],o=n(388),u=n(387),i={el:{"button-select-label":"Επιλογή","button-start-label":"Έναρξη","button-puzzle-home-label":"Επιστροφή στην αρχική","button-puzzle-next-label":"Συνέχισε στην επόμενη","puzzle-complete-title":"Συγχαρητήρια τα κατάφερες!","puzzle-complete-subtitle":"Προσπάθησε ξανά με διαφορετική εικόνα",laikes:{title:"Λαϊκές",subtitle:"κατοικίες",description:'Στις παραδοσιακές λαϊκές κατοικίες βλέπει κανείς χαμηλά κτίσματα με ένα ή και δύο ορόφους. Τα <strong>ισόγεια</strong>, με σμυρνέικο στυλ, περιλαμβάνουν κεντρικό διάδρομο με την κουζίνα στο βάθος και δύο ή τέσσερα δωμάτια δεξιά κι αριστερά του διαδρόμου.<br> Στα <strong>διώροφα</strong>, τα «δίπατα», το ισόγειο είναι χαμηλό σε ύψος. Είναι το "κατώι" που λειτουργεί ως στάβλος ή αποθήκη. Στο ανώι οδηγεί εσωτερική ή εξωτερική σκάλα. Εκεί βρίσκονται τα υπνοδωμάτια, η κρεβατοκάμαρα για το ζευγάρι κι ένα πιο μεγάλο δωμάτιο, η «μεγάλ’ κάμαρ’» το οποίο χρησιμοποιούσαν για να υποδέχονται τους καλεσμένους, αλλά και για τον ύπνο των παιδιών.<br> Η ανάγκη διαχωρισμού των χώρων και των λειτουργιών του σπιτιού οδήγησαν στη δημιουργία της χαρακτηριστικής <strong>κατοικίας με "αξάτα"</strong>, δηλαδή τη μικρή ή μεγαλύτερη υπερυψωμένη βεράντα του σπιτιού, στην οποία οδηγεί εξωτερική πέτρινη σκάλα. Ο όροφος φιλοξενεί και πάλι τα δωμάτια, ενώ στο κατώι βρίσκεται ο στάβλος, και οι αποθήκες ή το μαγειριό, με διαχωρισμένες πλέον εισόδους.<br><br> Τα περισσότερα σπίτια είχαν μια μικρή αυλή ή κήπο, με εξωτερικό φούρνο κι ένα μικρό βοηθητικό «παρασπίτι» για την αποθήκευση προϊόντων και τις βοηθητικές εργασίες.',images:a,katopsi:o},astikes:{title:"Αστικές",subtitle:"κατοικίες",description:'Τα σπίτια των εύπορων οικογενειών, των εμπόρων ή των ανθρώπων που μετανάστευσαν και γύρισαν πλούσιοι είναι μεγάλα με πλούσια διακόσμηση. Συνήθως είναι διώροφα με τέσσερα ή και περισσότερα ευρύχωρα δωμάτια, με εσωτερική ξύλινη σκάλα, με εξώστη και εξωτερικά πέτρινη διακόσμηση.<br><br>Συχνά συναντά κανείς στοιχεία νεοκλασικής αρχιτεκτονικής και σπανιότερα χαρακτηριστικά κατοικιών της ηπειρωτικής Ελλάδας όπως τα "σαχνισιά", δηλαδή τις προεξοχές του ορόφου.<br><br>Τα πέτρινα χειροτεχνήματα που διακοσμούν τις αστικές κατοικίες εξυμνούν τις αρετές των ντόπιων μαστόρων της πέτρας.',images:r,katopsi:u}},en:{"button-select-label":"Select","button-start-label":"Start","button-puzzle-home-label":"Back to Home","button-puzzle-next-label":"Next Puzzle","puzzle-complete-title":"Congratulations you did it!","puzzle-complete-subtitle":"Try next Puzzle!",laikes:{title:"Popular",subtitle:"houses",description:'Low buildings with one or two floors is a characteristic of popular houses.<br>The ground level houses, with Smyrna style, include a central corridor with the kitchen at the back and two or four rooms to the right and to the left of the corridor (Type A).<br>In two deck houses, the "two stories", the ground floor is low in height. The "basement" uses as a stable or warehouse. There is an internal or external staircase leading to the upper floor leads. There are the bedrooms, the bedroom for the couple and a larger room, the “megal’ kamar’” (the large chamber) which was used for receiving guests, and for sleeping room for the children. (Type B)<br>The need for separating spaces and functions of the house led to the creation of the characteristic residence with "axata", ie small or larger elevated terrace of the house, which leads to an external stone staircase. The first floor hosts again the rooms, while the basement is the stable, and the warehouses or cooking room, with separate entrances now. (Type C)<br><br>Most homes have a small yard or garden with outdoor oven and a small utility " house" for storage products and ancillary works.',images:a,katopsi:o},astikes:{title:"Urban",subtitle:"houses",description:'The houses of affluent families, traders or people who emigrated and returned wealthy are large with rich decoration. Usually two floors with four or more spacious rooms, with wooden internal staircase, with balcony and outdoor stone decoration. (Types D & E)<br><br>It is frequent to find elements of neoclassical architecture and rarely features of residences of the mainland as "sachnisia", ie the floor projections.<br><br>The stone artifacts decorating urban houses praise the virtues of local stone masons.',images:r,katopsi:u}}};t.data=i},382:function(e,t,n){e.e=n.p+"f4d4ca2bebd062d803cecee8a7c7450b.jpg"},383:function(e,t,n){e.e=n.p+"b553c5cca6927b4145daf9098a6a7942.jpg"},384:function(e,t,n){e.e=n.p+"34203682f88781b206da4fd436c830ee.jpg"},385:function(e,t,n){e.e=n.p+"9d36f718a8f55bb6940b5606ac7080cd.jpg"},386:function(e,t,n){e.e=n.p+"152409ee8e3ba3491bb8182d45e8a169.jpg"},387:function(e,t,n){e.e=n.p+"75c53bb9acb3f620236c187142b472e8.png"},388:function(e,t,n){e.e=n.p+"f22fd7abff90f34a1fbf7cbec03636ad.png"},389:function(e,t,n){e.e=n.p+"68b7afde7aa6ff5e54d803af0c2cecbb.jpg"},390:function(e,t,n){e.e=n.p+"a59fae0a4ed9604f4c0f18fe1cecfa60.jpg"},394:321},[202]);