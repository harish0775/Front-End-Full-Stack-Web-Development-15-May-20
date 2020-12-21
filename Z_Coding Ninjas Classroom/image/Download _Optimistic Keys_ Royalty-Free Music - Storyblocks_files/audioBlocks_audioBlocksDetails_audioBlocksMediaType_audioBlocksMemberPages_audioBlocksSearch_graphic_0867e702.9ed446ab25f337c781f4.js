(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{10:function(e,t,n){"use strict";var a=n(156),r=n.n(a),o=n(0),i=n.n(o),s=n(304),c=n.n(s),l=n(2),u=n(12),p=n(5),h=n(11),d=n(19),g=n(13),f=n(17),m=n(188),v=n.n(m),y=(n(422),n(4)),S=n(216),b=n(217),T=n(215);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function O(e,t,n){return t&&E(e.prototype,t),n&&E(e,n),e}function x(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?N(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(e){function t(){var e,n;C(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return P(N(n=x(this,(e=k(t)).call.apply(e,[this].concat(r)))),"handleChange",(function(e){var t=n.props.isUnifiedTopNavEnabled?e.value:e.target.value;n.props.selectedUpdate(t),g.Telemetry.increment("nav.search.".concat(t))})),n}return U(t,e),O(t,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"render",value:function(){var e=this.props,t=e.options,n=e.selectedOption;if(this.props.isUnifiedTopNavEnabled)return i.a.createElement(v.a,{"aria-label":"Select Search Type",value:n,onChange:this.handleChange,options:t,placeholder:"Select...",clearable:!1,searchable:!1,autofocus:!0,noResultsText:null});var a=t.map((function(e){return i.a.createElement("option",{key:e.value,value:e.value},e.label)}));return i.a.createElement("select",{"aria-label":"Select Search Type",value:n,onChange:this.handleChange},a)}}]),t}(o.Component);P(j,"defaultProps",{options:{},selectedOption:"",isUnifiedTopNavEnabled:!1});var B=function(e){function t(){return C(this,t),x(this,k(t).apply(this,arguments))}return U(t,e),O(t,[{key:"render",value:function(){return i.a.createElement("span",{className:"unifiedNav-searchDropdown"},i.a.createElement(j,this.props))}}]),t}(o.Component),D=function(e){function t(){var e,n;C(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return P(N(n=x(this,(e=k(t)).call.apply(e,[this].concat(o)))),"state",{keywords:[],collections:[],mayRenderSuggestions:!0,collectionHighlighted:!1}),P(N(n),"onChange",(function(e,t){var a=t.newValue;n.setState({mayRenderSuggestions:!0}),n.props.searchBoxUpdate(a)})),P(N(n),"loadSuggestions",(function(e){var t=e.value;if("input-focused"!==e.reason&&n.validateKeywords(t)&&n.state.mayRenderSuggestions){var a=g.Telemetry.timer("search.frontEnd.typeAhead"),r=n.getTypeAheadPath(n.props.contentClass);fetch(r+"?keywords="+encodeURIComponent(t)).then((function(e){e.ok&&e.json().then((function(e){e&&e.data&&e.data.keywords&&e.data.keywords.length&&n.setState({keywords:e.data.keywords,collections:t&&t.length?e.data.collections:[]})}))})).finally(a)}})),P(N(n),"debouncedLoadSuggestions",r()(n.loadSuggestions,250,{maxWait:1e3})),P(N(n),"invalidCharacters",new RegExp("[^“”‘’ -~ -ÿ]")),P(N(n),"clearSuggestions",(function(){n.setState({keywords:[],collections:[],mayRenderSuggestions:!1,collectionHighlighted:!1})})),P(N(n),"onKeyDown",(function(e){"Enter"!==e.key||n.state.collectionHighlighted||n.clearSuggestions()})),P(N(n),"onSuggestionSelected",(function(e,t){var a=t.suggestion,r=t.suggestionValue;"string"==typeof a&&(n.clearSuggestions(),n.props.submitTypeaheadSuggestion(e,r))})),P(N(n),"renderSectionTitle",(function(e){return e.title&&e.suggestions&&e.suggestions.length>0?i.a.createElement("div",{className:"collections-container"},i.a.createElement("h5",{className:"collections-container-heading"},e.title)):null})),P(N(n),"renderSuggestionsContainer",(function(e){var t=e.containerProps,a=e.children;return n.state.mayRenderSuggestions&&(a||n.state.collections.length)?i.a.createElement("div",t,a):null})),P(N(n),"getSuggestionValue",(function(e){return e.routeUri?(n.setState({collectionHighlighted:!0}),n.props.searchTerm):(n.setState({collectionHighlighted:!1}),e)})),P(N(n),"renderSuggestion",(function(e,t){var a=t.query,r=n.getCollectionBaseUrl();if(e.routeUri){var o=e;return i.a.createElement("div",{className:"collection"},i.a.createElement("a",{href:r+o.routeUri},i.a.createElement("img",{className:"collection-thumbnail",src:o.typeaheadThumbnailUrl}),o.heroTitle))}var s=a.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"");return i.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.replace(new RegExp(s,"i"),"<b>$&</b>")}})})),P(N(n),"getCollectionBaseUrl",(function(){var e=Object(p.f)();if(e===y.b||e===y.c){var t=n.props.contentClass,a=f.h.getSiteFromContentClass(t);return a===y.d||a===y.a?y.e.getBaseUrl(a)+"/collections/":"/images/collections/"}return"graphicstock"===e?"/images/collections/":"/collections/"})),n}return U(t,e),O(t,[{key:"getTypeAheadPath",value:function(e){var t=Object(p.f)();if(t===y.b||t===y.c)switch(e){case f.g:return(new S.a).getTypeaheadPath();case f.d:return(new b.a).getTypeaheadPath();case f.e:return(new T.a).getTypeaheadPath();default:y.e.buildInstance().getTypeaheadPath()}return y.e.buildInstance().getTypeaheadPath()}},{key:"validateKeywords",value:function(e){return e&&e.trim().length>1&&!this.invalidCharacters.test(e)}},{key:"render",value:function(){var e=this.state,t=[{suggestions:e.keywords},{title:"COLLECTIONS",suggestions:e.collections}],n={placeholder:"Search...",value:this.props.searchTerm,onChange:this.onChange,onKeyDown:this.onKeyDown,className:"unifiedNav-searchInput","aria-label":"Input search: "};return i.a.createElement("div",{className:"unifiedNav-searchBox"},i.a.createElement(c.a,{id:"unifiedNav-searchBox-autosuggest",multiSection:!0,renderSectionTitle:this.renderSectionTitle,getSectionSuggestions:function(e){return e.suggestions},suggestions:t,onSuggestionsFetchRequested:this.debouncedLoadSuggestions,onSuggestionsClearRequested:this.clearSuggestions,onSuggestionSelected:this.onSuggestionSelected,renderSuggestion:this.renderSuggestion,inputProps:n,renderSuggestionsContainer:this.renderSuggestionsContainer,getSuggestionValue:this.getSuggestionValue}))}}]),t}(o.Component),L=function(e){function t(){return C(this,t),x(this,k(t).apply(this,arguments))}return U(t,e),O(t,[{key:"render",value:function(){return i.a.createElement("button",{type:"submit",className:"unifiedNav-searchButton","aria-label":"Submit Search"},i.a.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",className:"search-icon"},i.a.createElement("path",{d:"M15.9471365,14.5813852 L15.176316,14.5813852 L14.9031138,14.315539 C16.0739803,12.9370775 16.678928,11.0564621 16.3471825,9.05769289 C15.8885931,6.32046212 13.6249179,4.13461597 10.8928961,3.79984674 C6.76559165,3.28784674 3.29202103,6.79307751 3.79939651,10.9580006 C4.13114202,13.7149237 6.29724505,15.9992314 9.00975244,16.4620006 C10.9904683,16.7967698 12.8540975,16.1863083 14.2201084,15.0047698 L14.4835533,15.2804621 L14.4835533,16.0583083 L18.6303722,20.2429237 C19.0304182,20.646616 19.684152,20.646616 20.0841981,20.2429237 C20.4842442,19.8392314 20.4842442,19.179539 20.0841981,18.7758467 L15.9471365,14.5813852 Z M10.092804,14.5813852 C7.66325596,14.5813852 5.70205457,12.6023083 5.70205457,10.150616 C5.70205457,7.69892366 7.66325596,5.71984674 10.092804,5.71984674 C12.5223519,5.71984674 14.4835533,7.69892366 14.4835533,10.150616 C14.4835533,12.6023083 12.5223519,14.5813852 10.092804,14.5813852 Z",id:"path-1"})))}}]),t}(o.Component),R=function(e){function t(){var e,n;C(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return P(N(n=x(this,(e=k(t)).call.apply(e,[this].concat(r)))),"state",{prevSearchTerm:n.props.selectedSearchFilterOptions.searchTerm||"",navQueryText:n.props.selectedSearchFilterOptions.searchTerm||""}),P(N(n),"updateSearchTerm",(function(e){n.setState({navQueryText:e})})),P(N(n),"updateSelectedSearch",(function(e){var t=n.props.selectedSearchFilterOptions,a=f.h.getContentClassFromMediaType(e),r={searchTerm:n.state.navQueryText,contentClass:a,searchType:e,"media-type":e,categories:"",page:1,isPagination:!1,searchOrigin:h.d.SEARCH_BAR};r=n.shouldUpdateDefault(t,r);var o=n.props.selectedSearchFilterOptions.update(r);n.props.isUnifiedTopNavEnabled?n.props.dispatch(Object(u.h)(o)):n.props.dispatch(Object(u.m)(o))})),P(N(n),"submitTypeaheadSuggestion",(function(e,t){n.setState({navQueryText:t},(function(){n.submit(e,h.d.TYPE_AHEAD)}))})),P(N(n),"submit",(function(e,t){e.preventDefault(),n.props.dispatch(Object(d.j)());var a=n.props.selectedSearchFilterOptions,r={searchTerm:n.state.navQueryText.trim(),contentClass:f.h.getContentClassFromMediaType(a.searchType),searchType:a.searchType,"media-type":a.searchType,page:1,isPagination:!1,searchOrigin:t||h.d.SEARCH_BAR};r=n.shouldUpdateDefault(a,r);var o=n.props.selectedSearchFilterOptions.update(r);n.props.dispatch(Object(u.m)(o))})),n}return U(t,e),O(t,[{key:"componentDidUpdate",value:function(e){this.props.selectedSearchFilterOptions.searchTerm!==e.selectedSearchFilterOptions.searchTerm&&this.setState({navQueryText:this.props.selectedSearchFilterOptions.searchTerm})}},{key:"componentDidMount",value:function(){window.onblur=function(){document.activeElement.blur()}}},{key:"render",value:function(){var e=this.props.selectedSearchFilterOptions.mediaType,t=f.h.getContentClassFromMediaType(e);return this.props.isUnifiedTopNavEnabled?i.a.createElement("form",{className:"unifiedNav-search",onSubmit:this.submit},i.a.createElement(B,{isUnifiedTopNavEnabled:this.props.isUnifiedTopNavEnabled,options:f.f,selectedOption:e,selectedUpdate:this.updateSelectedSearch}),i.a.createElement(D,{searchTerm:this.state.navQueryText,submitTypeaheadSuggestion:this.submitTypeaheadSuggestion,searchBoxUpdate:this.updateSearchTerm,contentClass:t}),i.a.createElement(L,null)):this.renderLegacySearchBar(e)}},{key:"renderLegacySearchBar",value:function(e){return i.a.createElement("form",{className:"unifiedNav-search",onSubmit:this.submit},i.a.createElement(D,{searchTerm:this.state.navQueryText,submitTypeaheadSuggestion:this.submitTypeaheadSuggestion,searchBoxUpdate:this.updateSearchTerm}),i.a.createElement(B,{options:f.h.getSearchTypes(),selectedOption:e,selectedUpdate:this.updateSelectedSearch}),i.a.createElement(L,null))}},{key:"shouldUpdateDefault",value:function(e,t){return e.defaultSort&&""!==t.searchTerm?t.sort="most_relevant":t.sort=e.sort,t}}],[{key:"getDerivedStateFromProps",value:function(e,t){return""===e.selectedSearchFilterOptions.searchTerm&&t.prevSearchTerm===t.navQueryText?{navQueryText:""}:{prevSearchTerm:e.selectedSearchFilterOptions.searchTerm}}}]),t}(o.Component);t.a=Object(l.connect)((function(e){return{selectedSearchFilterOptions:e.app.search.selectedSearchFilterOptions,isUnifiedTopNavEnabled:e.auth.featureFlags.isUnifiedTopNavEnabled}}))(R)},101:function(e,t,n){},102:function(e,t,n){},55:function(e,t){window.toggleExpandSingle||(window.toggleExpandSingle=function(e){var t=document.querySelector(e);t&&t.classList.toggle("expanded")})},65:function(e,t,n){},77:function(e,t){var n,a;n=document.querySelector(".footer-subscribeEmailInput"),a=document.querySelector(".footer-subscribeForm"),n&&a&&a.addEventListener("submit",(function(e){var t=n.value;t&&t.trim().match(/^[^@]+@[^@]+\..+$/)||(e.preventDefault(),e.stopImmediatePropagation())}))},87:function(e,t,n){(function(e){window.SiteBottomBannerWidgetView=function(t){var n=e("#bottom-banner-widget");n.find("#bottom-banner-widget-button").on("click",(function(){e.ajax({url:"/api/member/License04032017Accept",method:"POST",success:function(t){t.success&&n.animate({height:"0px"},500,(function(){e(this).hide()}))}})}))}}).call(this,n(7))},88:function(e,t,n){(function(e){var t=function(t){var n=this,a=t&&t.cookieName,r=t&&t.showNow,o=e(".top-alert");if(o.length){var i=e("#xsell-nav");this.originalMargin=i.outerHeight()||0,o.find(".close").on("click",(function(){o.slideUp({duration:500,progress:function(e,t,a){n.updateFirstMargin()},complete:function(){e("body").removeClass("header-visible"),e(".first").css("margin-top","")}});var t=new Date;t.setDate(t.getDate()+7),document.cookie=a+"=1; expires="+t.toUTCString()+"; path=/; domain=."+window.location.host})),!o.is(":visible")&&r&&n.showHelloBar()}};t.prototype.showHelloBar=function(){var t=this,n=e(".top-alert");e("body").hasClass("header-visible")||n.delay(1e3).slideDown({duration:500,progress:function(e,n,a){t.updateFirstMargin()},complete:function(){e("body").addClass("header-visible")}})},t.prototype.updateFirstMargin=function(){var t=e(".top-alert").is(":visible")?e(".top-alert").outerHeight():0,n=e("#xsell-nav-spacer");if(0!==n.length){var a=e("#xsell-nav"),r=e("#subNav");n.css("height",a.height()+"px"),r.find(".subNav-categoryMenu").css("top",a.height()-1+"px")}else{var o=e(".first"),i=this.originalMargin+t;o.css("margin-top",i+"px")}},window.SiteTopHeaderWidgetView=t}).call(this,n(7))}}]);