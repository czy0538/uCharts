(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/ucharts/ucharts"],{

/***/ 20:
/*!***********************************************************************************************************************************************************!*\
  !*** D:/Personal/UserData/My Documents/HBuilderProjects/uCharts/uni-app/示例项目/组件/qiun-data-charts(非uniCloud)/main.js?{"page":"pages%2Fucharts%2Fucharts"} ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _ucharts = _interopRequireDefault(__webpack_require__(/*! ./pages/ucharts/ucharts.vue */ 21));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_ucharts.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 21:
/*!****************************************************************************************************************************************!*\
  !*** D:/Personal/UserData/My Documents/HBuilderProjects/uCharts/uni-app/示例项目/组件/qiun-data-charts(非uniCloud)/pages/ucharts/ucharts.vue ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ucharts_vue_vue_type_template_id_631c231c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ucharts.vue?vue&type=template&id=631c231c& */ 22);
/* harmony import */ var _ucharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ucharts.vue?vue&type=script&lang=js& */ 24);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ucharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ucharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ucharts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ucharts.vue?vue&type=style&index=0&lang=css& */ 28);
/* harmony import */ var _phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../../../phpstudy_pro/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ucharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ucharts_vue_vue_type_template_id_631c231c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ucharts_vue_vue_type_template_id_631c231c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _ucharts_vue_vue_type_template_id_631c231c___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/ucharts/ucharts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 22:
/*!***********************************************************************************************************************************************************************!*\
  !*** D:/Personal/UserData/My Documents/HBuilderProjects/uCharts/uni-app/示例项目/组件/qiun-data-charts(非uniCloud)/pages/ucharts/ucharts.vue?vue&type=template&id=631c231c& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_template_id_631c231c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../phpstudy_pro/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../../../phpstudy_pro/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../../../../../phpstudy_pro/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../../../../phpstudy_pro/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../../../phpstudy_pro/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../../../../phpstudy_pro/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ucharts.vue?vue&type=template&id=631c231c& */ 23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_template_id_631c231c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_template_id_631c231c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_template_id_631c231c___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_template_id_631c231c___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 23:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Personal/UserData/My Documents/HBuilderProjects/uCharts/uni-app/示例项目/组件/qiun-data-charts(非uniCloud)/pages/ucharts/ucharts.vue?vue&type=template&id=631c231c& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    qiunTitleBar: function() {
      return __webpack_require__.e(/*! import() | components/qiun-title-bar/qiun-title-bar */ "components/qiun-title-bar/qiun-title-bar").then(__webpack_require__.bind(null, /*! @/components/qiun-title-bar/qiun-title-bar.vue */ 96))
    },
    qiunDataCharts: function() {
      return Promise.all(/*! import() | components/qiun-data-charts/qiun-data-charts */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/qiun-data-charts/qiun-data-charts")]).then(__webpack_require__.bind(null, /*! @/components/qiun-data-charts/qiun-data-charts.vue */ 103))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var a0 = {
    extra: {
      column: {
        type: "stack"
      }
    }
  }
  var a1 = {
    extra: {
      column: {
        type: "meter"
      }
    }
  }
  var a2 = {
    enableScroll: true,
    xAxis: {
      scrollShow: true,
      itemCount: 4,
      disableGrid: true
    }
  }
  var a3 = {
    color: ["#FAC858", "#EE6666"],
    extra: {
      column: {
        linearType: "custom",
        seriesGap: 5,
        linearOpacity: 0.5,
        barBorderCircle: true,
        customColor: ["#FA7D8D", "#EB88E2"]
      }
    }
  }
  var a4 = {
    yAxis: {
      data: [
        {
          min: 0
        }
      ]
    },
    enableMarkLine: true,
    extra: {
      column: {
        seriesGap: 5,
        barBorderRadius: [6, 6, 6, 6]
      },
      markLine: {
        data: [
          {
            value: 21,
            showLabel: true
          }
        ]
      }
    }
  }
  var a5 = {
    xAxis: {
      max: 40
    }
  }
  var a6 = {
    xAxis: {
      max: 40
    },
    extra: {
      bar: {
        linearType: "custom",
        barBorderCircle: true
      }
    }
  }
  var a7 = {
    xAxis: {
      max: 70
    },
    extra: {
      bar: {
        type: "stack"
      }
    }
  }
  var a8 = {
    xAxis: {
      boundaryGap: "justify"
    }
  }
  var a9 = {
    extra: {
      line: {
        type: "step"
      }
    }
  }
  var a10 = {
    enableScroll: true,
    xAxis: {
      scrollShow: true,
      itemCount: 4,
      disableGrid: true
    }
  }
  var a11 = {
    yAxis: {
      data: [
        {
          min: 0,
          max: 80
        }
      ]
    }
  }
  var a12 = {
    extra: {
      area: {
        type: "step",
        addLine: true,
        gradient: true
      }
    }
  }
  var a13 = {
    extra: {
      area: {
        type: "curve",
        addLine: true,
        gradient: true
      }
    }
  }
  var a14 = {
    xAxis: {
      format: "xAxisDemo2"
    },
    yAxis: {
      data: [
        {
          min: 0,
          max: 80
        }
      ]
    }
  }
  var a15 = {
    yAxis: {
      data: [
        {
          position: "left",
          title: "折线"
        },
        {
          position: "right",
          min: 0,
          max: 200,
          title: "柱状图",
          textAlign: "left"
        },
        {
          position: "right",
          min: 0,
          max: 200,
          title: "点",
          textAlign: "left"
        }
      ]
    }
  }
  var a16 = {
    legend: {
      position: "bottom"
    },
    extra: {
      ring: {
        ringWidth: 60,
        linearType: "custom",
        centerColor: "#FF0"
      }
    }
  }
  var a17 = {
    legend: {
      position: "bottom"
    }
  }
  var a18 = {
    legend: {
      position: "bottom"
    },
    extra: {
      rose: {
        type: "radius"
      }
    }
  }
  var a19 = {
    title: {
      name: "80%",
      color: "#2fc25b",
      fontSize: 35
    },
    subtitle: {
      name: "正确率",
      color: "#666666",
      fontSize: 25
    }
  }
  var a20 = {
    title: {
      name: "指标",
      color: "#1890ff",
      fontSize: 35
    },
    subtitle: {},
    extra: {
      arcbar: {
        type: "circle",
        startAngle: 1.5
      }
    }
  }
  var a21 = {
    legend: {
      position: "bottom"
    },
    extra: {
      radar: {
        border: true
      }
    }
  }
  var a22 = {
    legend: {
      position: "bottom"
    },
    extra: {
      radar: {
        gridType: "circle"
      }
    }
  }
  var a23 = {
    title: {
      name: "60Km/H",
      color: "#2fc25b",
      fontSize: 25,
      offsetY: 50
    },
    subtitle: {
      name: "实时速度",
      color: "#666666",
      fontSize: 15,
      offsetY: -50
    }
  }
  var a24 = {
    title: {
      offsetY: 0
    },
    subtitle: {
      offsetY: 0
    },
    extra: {
      gauge: {
        type: "progress",
        width: 20,
        splitLine: {
          fixRadius: -10,
          width: 15
        }
      }
    }
  }
  var a25 = {
    extra: {
      funnel: {
        linearType: "custom"
      }
    }
  }
  var a26 = {
    extra: {
      funnel: {
        type: "triangle"
      }
    }
  }
  var a27 = {
    extra: {
      funnel: {
        type: "pyramid",
        labelAlign: "left"
      }
    }
  }
  var a28 = {
    extra: {
      map: {
        mercator: true
      }
    }
  }
  var a29 = {
    extra: {
      map: {
        mercator: true
      }
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        a0: a0,
        a1: a1,
        a2: a2,
        a3: a3,
        a4: a4,
        a5: a5,
        a6: a6,
        a7: a7,
        a8: a8,
        a9: a9,
        a10: a10,
        a11: a11,
        a12: a12,
        a13: a13,
        a14: a14,
        a15: a15,
        a16: a16,
        a17: a17,
        a18: a18,
        a19: a19,
        a20: a20,
        a21: a21,
        a22: a22,
        a23: a23,
        a24: a24,
        a25: a25,
        a26: a26,
        a27: a27,
        a28: a28,
        a29: a29
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 24:
/*!*****************************************************************************************************************************************************************!*\
  !*** D:/Personal/UserData/My Documents/HBuilderProjects/uCharts/uni-app/示例项目/组件/qiun-data-charts(非uniCloud)/pages/ucharts/ucharts.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../phpstudy_pro/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../../../phpstudy_pro/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../../../../phpstudy_pro/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../../../../phpstudy_pro/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../../../../phpstudy_pro/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ucharts.vue?vue&type=script&lang=js& */ 25);
/* harmony import */ var _phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 25:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Personal/UserData/My Documents/HBuilderProjects/uCharts/uni-app/示例项目/组件/qiun-data-charts(非uniCloud)/pages/ucharts/ucharts.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




















































































































































































var _demodata = _interopRequireDefault(__webpack_require__(/*! @/mockdata/demodata.json */ 26));
var _mapdata = _interopRequireDefault(__webpack_require__(/*! @/mockdata/mapdata.json */ 27));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//下面是演示数据，您的项目不需要引用，数据需要您从服务器自行获取
var _default = { data: function data() {return { chartsDataColumn1: {}, chartsDataColumn2: {}, chartsDataColumn3: {}, chartsDataColumn4: {}, chartsDataColumn5: {}, chartsDataColumn6: {}, chartsDataLine1: {}, chartsDataLine2: {}, chartsDataLine3: {}, chartsDataLine4: {}, chartsDataLine5: {}, chartsDataTLine: {}, chartsDataScatter: {}, chartsDataBubble: {}, chartsDataArea1: {}, chartsDataArea2: {}, chartsDataMix1: {}, chartsDataPie1: {}, chartsDataRing1: {}, chartsDataRose1: {}, chartsDataRose2: {}, chartsDataArcbar1: {}, chartsDataArcbar2: {}, chartsDataGauge1: {}, chartsDataGauge2: {}, chartsDataRadar1: {}, chartsDataRadar2: {}, chartsDataWord1: {}, chartsDataFunnel1: {}, chartsDataMap1: {}, chartsDataCandle1: {} };}, onReady: function onReady() {//模拟从服务器获取数据
    this.getServerData();}, methods: { getServerData: function getServerData() {var _this = this;setTimeout(function () {//因部分数据格式一样，这里不同图表引用同一数据源的话，需要深拷贝一下构造不同的对象
        //开发者需要自行处理服务器返回的数据，应与标准数据格式一致，注意series的data数值应为数字格式
        _this.chartsDataColumn1 = JSON.parse(JSON.stringify(_demodata.default.Column));_this.chartsDataColumn2 = JSON.parse(JSON.stringify(_demodata.default.Column));_this.chartsDataColumn3 = JSON.parse(JSON.stringify(_demodata.default.Column));_this.chartsDataColumn4 = JSON.parse(JSON.stringify(_demodata.default.Column));_this.chartsDataColumn5 = JSON.parse(JSON.stringify(_demodata.default.Column));var tmpColumn6 = JSON.parse(JSON.stringify(_demodata.default.Column));tmpColumn6.series[1].data[2] = { value: 21, color: '#EE6666' }; //注意，因为组件内监听了chartData，构造chartData的时候，一定要先定义一个临时变量，构造完成后统一赋值给chartData绑定的变量，否则会导致多次渲染图表
        _this.chartsDataColumn6 = tmpColumn6;_this.chartsDataLine1 = JSON.parse(JSON.stringify(_demodata.default.Line));_this.chartsDataLine2 = JSON.parse(JSON.stringify(_demodata.default.Line));_this.chartsDataLine3 = JSON.parse(JSON.stringify(_demodata.default.Line));_this.chartsDataLine4 = JSON.parse(JSON.stringify(_demodata.default.Line));var tmpLine5 = JSON.parse(JSON.stringify(_demodata.default.Line));for (var i = 0; i < tmpLine5.series.length; i++) {tmpLine5.series[i].data[2] = null;}tmpLine5.series[1].connectNulls = true;_this.chartsDataLine5 = tmpLine5;_this.chartsDataTLine = JSON.parse(JSON.stringify(_demodata.default.TLine));_this.chartsDataScatter = JSON.parse(JSON.stringify(_demodata.default.Scatter));_this.chartsDataBubble = JSON.parse(JSON.stringify(_demodata.default.Bubble));_this.chartsDataArea1 = JSON.parse(JSON.stringify(_demodata.default.Line));_this.chartsDataArea2 = JSON.parse(JSON.stringify(_demodata.default.Line));_this.chartsDataMix1 = JSON.parse(JSON.stringify(_demodata.default.Mix));_this.chartsDataPie1 = JSON.parse(JSON.stringify(_demodata.default.PieA));_this.chartsDataRing1 = JSON.parse(JSON.stringify(_demodata.default.PieA));_this.chartsDataRose1 = JSON.parse(JSON.stringify(_demodata.default.PieA));_this.chartsDataRose2 = JSON.parse(JSON.stringify(_demodata.default.PieA));_this.chartsDataArcbar1 = JSON.parse(JSON.stringify(_demodata.default.Arcbar1));_this.chartsDataArcbar2 = JSON.parse(JSON.stringify(_demodata.default.Arcbar2));_this.chartsDataGauge1 = JSON.parse(JSON.stringify(_demodata.default.Gauge));_this.chartsDataGauge2 = JSON.parse(JSON.stringify(_demodata.default.Gauge));_this.chartsDataRadar1 = JSON.parse(JSON.stringify(_demodata.default.Radar));_this.chartsDataRadar2 = JSON.parse(JSON.stringify(_demodata.default.Radar));_this.chartsDataWord1 = JSON.parse(JSON.stringify(_demodata.default.Word));_this.chartsDataFunnel1 = JSON.parse(JSON.stringify(_demodata.default.PieA));_this.chartsDataMap1 = { series: _mapdata.default.features };_this.chartsDataCandle1 = JSON.parse(JSON.stringify(_demodata.default.Candle));}, 1500);} } };exports.default = _default;

/***/ }),

/***/ 28:
/*!*************************************************************************************************************************************************************************!*\
  !*** D:/Personal/UserData/My Documents/HBuilderProjects/uCharts/uni-app/示例项目/组件/qiun-data-charts(非uniCloud)/pages/ucharts/ucharts.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../phpstudy_pro/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../../../../../phpstudy_pro/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../../../../../phpstudy_pro/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../../../phpstudy_pro/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../../../../../phpstudy_pro/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../../../../../phpstudy_pro/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../../../../phpstudy_pro/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ucharts.vue?vue&type=style&index=0&lang=css& */ 29);
/* harmony import */ var _phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_phpstudy_pro_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 29:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Personal/UserData/My Documents/HBuilderProjects/uCharts/uni-app/示例项目/组件/qiun-data-charts(非uniCloud)/pages/ucharts/ucharts.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[20,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/ucharts/ucharts.js.map