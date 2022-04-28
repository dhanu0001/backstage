(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{"../plugins/home/src/homePageComponents/StarredEntities/Content.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return Content}));var _backstage_plugin_catalog_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../plugins/catalog-react/src/index.ts"),_backstage_catalog_model__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../packages/catalog-model/src/index.ts"),_backstage_core_plugin_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../packages/core-plugin-api/src/index.ts"),_backstage_core_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../packages/core-components/src/index.ts"),_material_ui_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../node_modules/@material-ui/core/esm/Typography/Typography.js"),_material_ui_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../node_modules/@material-ui/core/esm/List/List.js"),_material_ui_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../node_modules/@material-ui/core/esm/ListItem/ListItem.js"),_material_ui_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../node_modules/@material-ui/core/esm/ListItemText/ListItemText.js"),_material_ui_core__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../node_modules/@material-ui/core/esm/ListItemSecondaryAction/ListItemSecondaryAction.js"),_material_ui_core__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../node_modules/@material-ui/core/esm/Tooltip/Tooltip.js"),_material_ui_core__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../node_modules/@material-ui/core/esm/IconButton/IconButton.js"),_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../node_modules/@material-ui/icons/Star.js"),_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_11__),react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);const _jsxFileName="/home/runner/work/backstage/backstage/plugins/home/src/homePageComponents/StarredEntities/Content.tsx";var enterModule;(enterModule=__webpack_require__("../node_modules/react-hot-loader/index.js").enterModule)&&enterModule(module);const Content=()=>{const catalogEntityRoute=Object(_backstage_core_plugin_api__WEBPACK_IMPORTED_MODULE_2__.useRouteRef)(_backstage_plugin_catalog_react__WEBPACK_IMPORTED_MODULE_0__.entityRouteRef),{starredEntities:starredEntities,toggleStarredEntity:toggleStarredEntity}=Object(_backstage_plugin_catalog_react__WEBPACK_IMPORTED_MODULE_0__.useStarredEntities)();return 0===starredEntities.size?react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.a,{variant:"body1",__self:void 0,__source:{fileName:_jsxFileName,lineNumber:47}},"You do not have any starred entities yet!"):react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.a,{__self:void 0,__source:{fileName:_jsxFileName,lineNumber:53}},Array.from(starredEntities).map((entity=>react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,{key:entity,__self:void 0,__source:{fileName:_jsxFileName,lineNumber:55}},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_backstage_core_components__WEBPACK_IMPORTED_MODULE_3__.Link,{to:catalogEntityRoute(Object(_backstage_catalog_model__WEBPACK_IMPORTED_MODULE_1__.l)(entity)),__self:void 0,__source:{fileName:_jsxFileName,lineNumber:56}},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,{primary:Object(_backstage_catalog_model__WEBPACK_IMPORTED_MODULE_1__.l)(entity).name,__self:void 0,__source:{fileName:_jsxFileName,lineNumber:57}})),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.a,{__self:void 0,__source:{fileName:_jsxFileName,lineNumber:59}},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.a,{title:"Remove from starred",__self:void 0,__source:{fileName:_jsxFileName,lineNumber:60}},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.a,{edge:"end","aria-label":"unstar",onClick:()=>toggleStarredEntity(entity),__self:void 0,__source:{fileName:_jsxFileName,lineNumber:61}},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_11___default.a,{style:{color:"#f3ba37"},__self:void 0,__source:{fileName:_jsxFileName,lineNumber:66}}))))))))};var reactHotLoader,leaveModule;reactHotLoader=__webpack_require__("../node_modules/react-hot-loader/index.js").default,leaveModule=__webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule,reactHotLoader&&(reactHotLoader.register(Content,"Content","/home/runner/work/backstage/backstage/plugins/home/src/homePageComponents/StarredEntities/Content.tsx"),leaveModule(module));try{Content.displayName="Content",Content.__docgenInfo={description:"A component to display a list of starred entities for the user.",displayName:"Content",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/home/src/homePageComponents/StarredEntities/Content.tsx#Content"]={docgenInfo:Content.__docgenInfo,name:"Content",path:"../plugins/home/src/homePageComponents/StarredEntities/Content.tsx#Content"})}catch(__react_docgen_typescript_loader_error){}}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"../plugins/home/src/homePageComponents/StarredEntities/index.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var enterModule,reactHotLoader,leaveModule,_Content__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../plugins/home/src/homePageComponents/StarredEntities/Content.tsx");__webpack_require__.d(__webpack_exports__,"Content",(function(){return _Content__WEBPACK_IMPORTED_MODULE_0__.a})),(enterModule=__webpack_require__("../node_modules/react-hot-loader/index.js").enterModule)&&enterModule(module),reactHotLoader=__webpack_require__("../node_modules/react-hot-loader/index.js").default,leaveModule=__webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule,reactHotLoader&&leaveModule(module)}.call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))}}]);