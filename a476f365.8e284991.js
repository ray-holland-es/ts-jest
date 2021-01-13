(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var a=t(3),i=t(7),o=(t(0),t(97)),r={title:"Diagnostics option"},s={unversionedId:"options/diagnostics",id:"options/diagnostics",isDocsHomePage:!1,title:"Diagnostics option",description:"The diagnostics option configures error reporting.",source:"@site/docs/options/diagnostics.md",slug:"/options/diagnostics",permalink:"/ts-jest/docs/options/diagnostics",editUrl:"https://github.com/kulshekhar/ts-jest/edit/master/docs/docs/options/diagnostics.md",version:"current"},l=[{value:"Disabling/enabling",id:"disablingenabling",children:[]},{value:"Advanced configuration",id:"advanced-configuration",children:[]},{value:"Examples",id:"examples",children:[]}],c={rightToc:l};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"diagnostics")," option configures error reporting.\nIt can both be enabled/disabled entirely or limited to a specific type of errors and/or files."),Object(o.b)("p",null,"If a diagnostic is not filtered out, ",Object(o.b)("inlineCode",{parentName:"p"},"ts-jest")," will fail the compilation and your test."),Object(o.b)("h3",{id:"disablingenabling"},"Disabling/enabling"),Object(o.b)("p",null,"By default all diagnostics are enabled. This is the same as setting the ",Object(o.b)("inlineCode",{parentName:"p"},"diagnostics")," option to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),".\nTo disable all diagnostics, set ",Object(o.b)("inlineCode",{parentName:"p"},"diagnostics")," to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),".\nThis might lead to slightly better performance, especially if you're not using Jest's cache."),Object(o.b)("h3",{id:"advanced-configuration"},"Advanced configuration"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"diagnostics")," option's value can also accept an object for more advanced configuration. Each config. key is optional:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"warnOnly")),": If specified and ",Object(o.b)("inlineCode",{parentName:"li"},"true"),", diagnostics will be reported but won't stop compilation (default: ",Object(o.b)("em",{parentName:"li"},"disabled"),")."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"ignoreCodes")),": List of TypeScript error codes to ignore. Complete list can be found ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Microsoft/TypeScript/blob/master/src/compiler/diagnosticMessages.json"}),"there"),". By default here are the ones ignored:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"6059"),": ",Object(o.b)("em",{parentName:"li"},"'rootDir' is expected to contain all source files.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"18002"),": ",Object(o.b)("em",{parentName:"li"},"The 'files' list in config file is empty.")," (it is strongly recommended to include this one)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"18003"),": ",Object(o.b)("em",{parentName:"li"},"No inputs were found in config file.")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"pathRegex")),": If specified, diagnostics of source files which path does ",Object(o.b)("strong",{parentName:"li"},"not")," match will be ignored."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"pretty")),": Enables/disables colorful and pretty output of errors (default: ",Object(o.b)("em",{parentName:"li"},"enabled"),").")),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("h4",{id:"disabling-diagnostics"},"Disabling diagnostics"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      diagnostics: false,\n    },\n  },\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "diagnostics": false\n      }\n    }\n  }\n}\n')),Object(o.b)("h4",{id:"advanced-options"},"Advanced options"),Object(o.b)("h5",{id:"enabling-diagnostics-for-test-files-only"},"Enabling diagnostics for test files only"),Object(o.b)("p",null,"Assuming all your test files ends with ",Object(o.b)("inlineCode",{parentName:"p"},".spec.ts")," or ",Object(o.b)("inlineCode",{parentName:"p"},".test.ts"),", using the following config will enable error reporting only for those files:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      diagnostics: {\n        pathRegex: /\\.(spec|test)\\.ts$/,\n      },\n    },\n  },\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "diagnostics": {\n          "pathRegex": "\\\\.(spec|test)\\\\.ts$"\n        }\n      }\n    }\n  }\n}\n')),Object(o.b)("h5",{id:"do-not-fail-on-first-error"},"Do not fail on first error"),Object(o.b)("p",null,"While some diagnostics are stop-blockers for the compilation, most of them are not. If you want the compilation (and so your tests) to continue when encountering those, set the ",Object(o.b)("inlineCode",{parentName:"p"},"warnOnly")," to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      diagnostics: {\n        warnOnly: true,\n      },\n    },\n  },\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "diagnostics": {\n          "warnOnly": true\n        }\n      }\n    }\n  }\n}\n')),Object(o.b)("h5",{id:"ignoring-some-error-codes"},"Ignoring some error codes"),Object(o.b)("p",null,"All TypeScript error codes can be found ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Microsoft/TypeScript/blob/master/src/compiler/diagnosticMessages.json"}),"there"),". The ",Object(o.b)("inlineCode",{parentName:"p"},"ignoreCodes")," option accepts this values:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"A single ",Object(o.b)("inlineCode",{parentName:"li"},"number")," (example: ",Object(o.b)("inlineCode",{parentName:"li"},"1009"),"): unique error code to ignore"),Object(o.b)("li",{parentName:"ol"},"A ",Object(o.b)("inlineCode",{parentName:"li"},"string")," with a code (example ",Object(o.b)("inlineCode",{parentName:"li"},'"1009"'),", ",Object(o.b)("inlineCode",{parentName:"li"},'"TS1009"')," or ",Object(o.b)("inlineCode",{parentName:"li"},'"TS1009"'),")"),Object(o.b)("li",{parentName:"ol"},"A ",Object(o.b)("inlineCode",{parentName:"li"},"string")," with a list of the above (example: ",Object(o.b)("inlineCode",{parentName:"li"},'"1009, TS2571, 4072"'),")"),Object(o.b)("li",{parentName:"ol"},"An ",Object(o.b)("inlineCode",{parentName:"li"},"array")," of one or more from ",Object(o.b)("inlineCode",{parentName:"li"},"1")," or ",Object(o.b)("inlineCode",{parentName:"li"},"3")," (example: ",Object(o.b)("inlineCode",{parentName:"li"},'[1009, "TS2571", "6031"]'),")")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      diagnostics: {\n        ignoreCodes: [2571, 6031, 18003],\n      },\n    },\n  },\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "diagnostics": {\n          "ignoreCodes": [2571, 6031, 18003]\n        }\n      }\n    }\n  }\n}\n')))}b.isMDXComponent=!0},97:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),b=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=b(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},j=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(t),j=a,m=p["".concat(r,".").concat(j)]||p[j]||d[j]||o;return t?i.a.createElement(m,s(s({ref:n},c),{},{components:t})):i.a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=j;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}j.displayName="MDXCreateElement"}}]);