(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(97)),s={title:"AST transformers option"},i={unversionedId:"options/astTransformers",id:"options/astTransformers",isDocsHomePage:!1,title:"AST transformers option",description:"ts-jest by default does hoisting for a few jest methods via a TypeScript AST transformer. One can also create custom",source:"@site/docs/options/astTransformers.md",slug:"/options/astTransformers",permalink:"/ts-jest/docs/options/astTransformers",editUrl:"https://github.com/kulshekhar/ts-jest/edit/master/docs/docs/options/astTransformers.md",version:"current"},c=[{value:"Examples",id:"examples",children:[]},{value:"Public transformers",id:"public-transformers",children:[]},{value:"Writing custom TypeScript AST transformers",id:"writing-custom-typescript-ast-transformers",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ts-jest")," by default does hoisting for a few ",Object(o.b)("inlineCode",{parentName:"p"},"jest")," methods via a TypeScript AST transformer. One can also create custom\nTypeScript AST transformers and provide them to ",Object(o.b)("inlineCode",{parentName:"p"},"ts-jest")," to include into compilation process."),Object(o.b)("p",null,"The option is ",Object(o.b)("inlineCode",{parentName:"p"},"astTransformers")," and it allows ones to specify which 3 types of TypeScript AST transformers to use with ",Object(o.b)("inlineCode",{parentName:"p"},"ts-jest"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"before")," means your transformers get run before TS ones, which means your transformers will get raw TS syntax\ninstead of transpiled syntax (e.g ",Object(o.b)("inlineCode",{parentName:"li"},"import")," instead of ",Object(o.b)("inlineCode",{parentName:"li"},"require")," or ",Object(o.b)("inlineCode",{parentName:"li"},"define")," )."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"after")," means your transformers get run after TS ones, which gets transpiled syntax."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"afterDeclarations")," means your transformers get run during ",Object(o.b)("inlineCode",{parentName:"li"},"d.ts")," generation phase, allowing you to transform output type declarations.")),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("h4",{id:"basic-transformers"},"Basic Transformers"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      astTransformers: {\n        before: ['my-custom-transformer'],\n      },\n    },\n  },\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "astTransformers": {\n          "before": ["my-custom-transformer"]\n        }\n      }\n    }\n  }\n}\n')),Object(o.b)("h4",{id:"configuring-transformers-with-options"},"Configuring transformers with options"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      astTransformers: {\n        before: [\n          {\n            path: 'my-custom-transformer-that-needs-extra-opts',\n            options: {}, // extra options to pass to transformers here\n          },\n        ],\n      },\n    },\n  },\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "astTransformers": {\n          "before": [\n            {\n              "path": "my-custom-transformer-that-needs-extra-opts",\n              "options": {} // extra options to pass to transformers here\n            }\n          ]\n        }\n      }\n    }\n  }\n}\n')),Object(o.b)("h3",{id:"public-transformers"},"Public transformers"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ts-jest")," is able to expose transformers for public usage to provide the possibility to opt-in/out for users. Currently\nthe exposed transformers are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"path-mapping")," convert alias import/export to relative import/export path base on ",Object(o.b)("inlineCode",{parentName:"li"},"paths")," in ",Object(o.b)("inlineCode",{parentName:"li"},"tsconfig"),".\nThis transformer works similar to ",Object(o.b)("inlineCode",{parentName:"li"},"moduleNameMapper")," in ",Object(o.b)("inlineCode",{parentName:"li"},"jest.config.js"),". When using this transformer, one might not need\n",Object(o.b)("inlineCode",{parentName:"li"},"moduleNameMapper")," anymore.")),Object(o.b)("h4",{id:"example-of-opt-in-transformers"},"Example of opt-in transformers"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      astTransformers: {\n        before: ['ts-jest/dist/transformers/path-mapping'],\n      },\n    },\n  },\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "astTransformers": {\n          "before": ["ts-jest/dist/transformers/path-mapping"]\n        }\n      }\n    }\n  }\n}\n')),Object(o.b)("h3",{id:"writing-custom-typescript-ast-transformers"},"Writing custom TypeScript AST transformers"),Object(o.b)("p",null,"To write a custom TypeScript AST transformers, one can take a look at ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/kulshekhar/ts-jest/tree/master/src/transformers"}),"the one")," that ",Object(o.b)("inlineCode",{parentName:"p"},"ts-jest")," is using."))}l.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,f=m["".concat(s,".").concat(u)]||m[u]||b[u]||o;return n?a.a.createElement(f,i(i({ref:t},p),{},{components:n})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);