"use strict";
(self["webpackChunktracker"] = self["webpackChunktracker"] || []).push([[42],{

/***/ 29370:
/*!**********************************************************!*\
  !*** ./src/app/core/model/table-header-data/activity.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activityAppsTable": () => (/* binding */ activityAppsTable),
/* harmony export */   "activityUrlsTable": () => (/* binding */ activityUrlsTable)
/* harmony export */ });
let activityAppsTable = [{
  key: 'project',
  label: 'Project'
}, {
  key: 'appName',
  label: 'App Name'
}, {
  key: 'timeSpent',
  label: 'Time Spent(hrs)'
}, {
  key: 'session',
  label: 'Sessions'
}];
let activityUrlsTable = [{
  key: 'project',
  label: 'Project'
}, {
  key: 'site',
  label: 'Site'
}, {
  key: 'timeSpant',
  label: 'Time Spent(hrs)'
}, {
  key: 'action',
  label: 'Action'
}];

/***/ }),

/***/ 81631:
/*!***********************************************************!*\
  !*** ./src/app/pages/activity/activity-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityRoutingModule": () => (/* binding */ ActivityRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _apps_apps_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apps/apps.component */ 19296);
/* harmony import */ var _screenshots_screenshots_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screenshots/screenshots.component */ 1028);
/* harmony import */ var _urls_urls_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./urls/urls.component */ 31374);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);






const routes = [{
  path: 'apps',
  component: _apps_apps_component__WEBPACK_IMPORTED_MODULE_0__.AppsComponent
}, {
  path: 'screenshots',
  component: _screenshots_screenshots_component__WEBPACK_IMPORTED_MODULE_1__.ScreenshotsComponent
}, {
  path: 'urls',
  component: _urls_urls_component__WEBPACK_IMPORTED_MODULE_2__.UrlsComponent
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'screenshots'
}];
let ActivityRoutingModule = /*#__PURE__*/(() => {
  class ActivityRoutingModule {}

  ActivityRoutingModule.ɵfac = function ActivityRoutingModule_Factory(t) {
    return new (t || ActivityRoutingModule)();
  };

  ActivityRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: ActivityRoutingModule
  });
  ActivityRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
  return ActivityRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ActivityRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 57042:
/*!***************************************************!*\
  !*** ./src/app/pages/activity/activity.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityModule": () => (/* binding */ ActivityModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _activity_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity-routing.module */ 81631);
/* harmony import */ var _screenshots_screenshots_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screenshots/screenshots.component */ 1028);
/* harmony import */ var _apps_apps_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apps/apps.component */ 19296);
/* harmony import */ var _urls_urls_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./urls/urls.component */ 31374);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ 3848);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ 73162);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 80529);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 56709);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dialog */ 77729);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);





 // angular material imports



 //primeng imports







let ActivityModule = /*#__PURE__*/(() => {
  class ActivityModule {}

  ActivityModule.ɵfac = function ActivityModule_Factory(t) {
    return new (t || ActivityModule)();
  };

  ActivityModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: ActivityModule
  });
  ActivityModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _activity_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActivityRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabsModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__.MatProgressBarModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule, primeng_table__WEBPACK_IMPORTED_MODULE_11__.TableModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_14__.DialogModule]
  });
  return ActivityModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ActivityModule, {
    declarations: [_screenshots_screenshots_component__WEBPACK_IMPORTED_MODULE_1__.ScreenshotsComponent, _apps_apps_component__WEBPACK_IMPORTED_MODULE_2__.AppsComponent, _urls_urls_component__WEBPACK_IMPORTED_MODULE_3__.UrlsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _activity_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActivityRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__.MatTabsModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__.MatProgressBarModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule, primeng_table__WEBPACK_IMPORTED_MODULE_11__.TableModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_14__.DialogModule]
  });
})();

/***/ }),

/***/ 19296:
/*!*******************************************************!*\
  !*** ./src/app/pages/activity/apps/apps.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppsComponent": () => (/* binding */ AppsComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_model_table_header_data_activity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/activity */ 29370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _shared_activity_filter_module_activity_filter_module_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/activity-filter-module/activity-filter-module.component */ 32285);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 10805);







function AppsComponent_ng_template_24_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const cols_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cols_r5.label, " ");
  }
}

function AppsComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppsComponent_ng_template_24_th_1_Template, 2, 1, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", columns_r3);
  }
}

function AppsComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 19)(1, "td", 20)(2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const apps_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](apps_r6.timerange);
  }
}

function AppsComponent_ng_template_26_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const cols_r11 = ctx.$implicit;
    const apps_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](apps_r7[cols_r11.key]);
  }
}

function AppsComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppsComponent_ng_template_26_td_1_Template, 3, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r9 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", columns_r9);
  }
}

let AppsComponent = /*#__PURE__*/(() => {
  class AppsComponent {
    constructor() {
      this.activityArray = [{
        project: 'BA',
        appName: 'Google Chorme',
        timeSpent: '0:20:22',
        session: '22',
        timerange: 'Mon, May 3 2021 1:00 pm ACST'
      }, {
        project: 'BA',
        appName: 'Google Chorme',
        timeSpent: '0:20:22',
        session: '22',
        timerange: 'Mon, May 3 2021 1:00 pm ACST'
      }, {
        project: 'BA',
        appName: 'Google Chorme',
        timeSpent: '0:20:22',
        session: '22',
        timerange: 'Mon, May 3 2021 1:00 pm ACST'
      }, {
        project: 'BA',
        appName: 'Google Chorme',
        timeSpent: '0:20:22',
        session: '22',
        timerange: 'Mon, May 3 2021 1:00 pm ACST'
      }, {
        project: 'BA',
        appName: 'Google Chorme',
        timeSpent: '0:20:22',
        session: '22',
        timerange: 'Mon, May 3 2021 1:00 pm ACST'
      }];
      this.activityAppscols = src_app_core_model_table_header_data_activity__WEBPACK_IMPORTED_MODULE_0__.activityAppsTable;
    }

    ngOnInit() {}

  }

  AppsComponent.ɵfac = function AppsComponent_Factory(t) {
    return new (t || AppsComponent)();
  };

  AppsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppsComponent,
    selectors: [["app-apps"]],
    decls: 27,
    vars: 3,
    consts: [[1, "white_box", "main_content"], [1, "top_title_wrap"], [1, "row", "align-items-center"], [1, "col-md-4"], [1, "mb-0"], [1, "col-md-4", "text-center"], [1, "nav", "nav-tabs", "common_tabs", 2, "min-width", "232px"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#me", 1, "nav-link", "active"], ["data-bs-toggle", "tab", "href", "#all", 1, "nav-link"], [1, "settings_btn", "text-end"], ["href", "#"], [1, "fa-solid", "fa-gear"], [1, "activity_table_wrap"], ["sortField", "representative.timerange", "sortMode", "single", "scrollHeight", "400px", "rowGroupMode", "subheader", "groupRowsBy", "representative.timerange", "responsiveLayout", "scroll", 3, "value", "columns", "scrollable"], ["pTemplate", "header"], ["pTemplate", "groupheader"], ["pTemplate", "body"], [4, "ngFor", "ngForOf"], ["pRowGroupHeader", ""], ["colspan", "5"], [1, "font-bold"]],
    template: function AppsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Apps Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "ul", 6)(8, "li", 7)(9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Every 10 Min");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li", 7)(12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "All Screenshot");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 3)(15, "div", 10)(16, "a", 11)(17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "app-activity-filter-module");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 13)(23, "p-table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, AppsComponent_ng_template_24_Template, 2, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, AppsComponent_ng_template_25_Template, 4, 1, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, AppsComponent_ng_template_26_Template, 2, 1, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.activityArray)("columns", ctx.activityAppscols)("scrollable", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _shared_activity_filter_module_activity_filter_module_component__WEBPACK_IMPORTED_MODULE_1__.ActivityFilterModuleComponent, primeng_table__WEBPACK_IMPORTED_MODULE_4__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_4__.RowGroupHeader],
    styles: [".activity_table_wrap .p-datatable .p-datatable-tbody>tr>td {\r\n  padding: 16px 15px !important;\r\n}\r\n\r\n  .activity_table_wrap .p-datatable .p-datatable-tbody>tr:first-child>td {\r\n  background: #F2F8FF;\r\n  font-weight: 500;\r\n  color: var(--dark-blue);\r\n  justify-content: flex-start;\r\n}"]
  });
  return AppsComponent;
})();

/***/ }),

/***/ 1028:
/*!*********************************************************************!*\
  !*** ./src/app/pages/activity/screenshots/screenshots.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreenshotsComponent": () => (/* binding */ ScreenshotsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _shared_activity_filter_module_activity_filter_module_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/activity-filter-module/activity-filter-module.component */ 32285);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ 73162);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 56709);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ 77729);










function ScreenshotsComponent_div_160_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div", 29)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 30)(5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "No to-dos / Jobs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 31)(8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 34)(11, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScreenshotsComponent_div_160_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.viewScreenShot());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "View screen");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 36)(14, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "mat-checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 38)(17, "ul")(18, "li")(19, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScreenshotsComponent_div_160_Template_a_click_19_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const TodoList_r2 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.shareScreenShot(TodoList_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li")(22, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScreenshotsComponent_div_160_Template_a_click_22_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const TodoList_r2 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.deleteScreenShot(TodoList_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 42)(25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 43)(28, "h5", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "mat-progress-bar", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const TodoList_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](TodoList_r2.emp_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", TodoList_r2.totalSS, " Screens");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](TodoList_r2.timeRange);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", TodoList_r2.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](TodoList_r2.complete);
  }
}

function ScreenshotsComponent_div_165_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", data_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r7.details);
  }
}

let ScreenshotsComponent = /*#__PURE__*/(() => {
  class ScreenshotsComponent {
    constructor(matDialog) {
      this.matDialog = matDialog;
      this.display = false;
      this.data = [{
        image: '../../../../assets/images/ss2.png',
        details: 'img1'
      } // {
      //   image: '../../../../assets/images/ss2.png',
      //   details: 'img2'
      // },
      ];
      this.images = [{
        source: '../../../../assets/images/ss2.png',
        thumbnail: '../../../../assets/images/ss2.png'
      }];
      this.toDoListArray = [{
        emp_name: 'BA',
        toDoname: 'No to-dos / Jobs',
        totalSS: '3',
        timeRange: '03:00 pm - 03:10 pm',
        complete: '65% of 9 minutes',
        progress: '80'
      }, {
        emp_name: 'BA',
        toDoname: 'No to-dos / Jobs',
        totalSS: '3',
        timeRange: '03:10 pm - 03:20 pm',
        complete: '65% of 9 minutes',
        progress: '80'
      }, {
        emp_name: 'BA',
        toDoname: 'No to-dos / Jobs',
        totalSS: '3',
        timeRange: '03:20 pm - 03:30 pm',
        complete: '65% of 9 minutes',
        progress: '80'
      }, {
        emp_name: 'BA',
        toDoname: 'No to-dos / Jobs',
        totalSS: '3',
        timeRange: '03:30 pm - 03:40 pm',
        complete: '65% of 9 minutes',
        progress: '80'
      }];
    }

    ngOnInit() {}

    shareScreenShot(TodoList) {}

    deleteScreenShot(TodoList) {}

    viewScreenShot() {
      this.display = true; // let data = [
      //   {
      //     image: '../../../../assets/images/ss2.png',
      //     details: 'img1'
      //   },
      //   // {
      //   //   image: '../../../../assets/images/ss2.png',
      //   //   details: 'img2'
      //   // },
      // ]
      // let viewScreenShotDialog = this.matDialog.open(ViewScreenshotDetailComponent, {
      //   data: data,
      //   height: '100vh',
      //   width: '100vh'
      // })
    }

  }

  ScreenshotsComponent.ɵfac = function ScreenshotsComponent_Factory(t) {
    return new (t || ScreenshotsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog));
  };

  ScreenshotsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ScreenshotsComponent,
    selectors: [["app-screenshots"]],
    decls: 166,
    vars: 6,
    consts: [[1, "white_box", "main_content"], [1, "top_title_wrap"], [1, "row", "align-items-center"], [1, "col-md-4"], [1, "mb-0"], [1, "col-md-4", "col-sm-6"], [1, "nav", "nav-tabs", "common_tabs", 2, "min-width", "232px"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#me", 1, "nav-link", "active"], ["data-bs-toggle", "tab", "href", "#all", 1, "nav-link"], [1, "settings_btn", "text-end"], ["routerLink", "/settings/features/activity", "fragment", "trackAppsUrls"], [1, "fa-solid", "fa-gear"], [1, "fas", "fa-globe-asia"], [1, "mt-5"], [1, "tab-content"], ["id", "me", 1, "tab-pane", "active"], [1, "activity_time_wrap", "gray_box"], [1, "row"], [1, "activity_time_wrap_inner"], [1, "col-6"], [1, "text_gradient"], [1, "d-flex", "title_with_arrow"], [1, "fa", "fa-up-long", "text_green_gradient"], [1, "text_green_gradient"], [1, "col-4"], [1, "text_red_gradient"], [1, "activity_time_wrap_inner", "mb-0"], [1, "screenshot_activity_wrap"], [1, "todo_title", "text-center"], [1, "card_title", "text-center"], [1, "card", "screenshot_card_wrap"], [1, "card_img_top"], ["src", "../../../../assets/images/ss2.png", "alt", "Card image cap"], [1, "screenshor_card_hover_content"], [1, "btn_blue", 3, "click"], [1, "screenshot_action_wrap"], [1, "checkbox"], [1, "delate_wrap"], ["href", "#"], [1, "fa-solid", "fa-arrow-turn-up"], [1, "fa-solid", "fa-trash-can"], [1, "blue_gradient", "screen_btn"], [1, "card-body"], [1, "card-text"], ["mode", "determinate", "value", "40", "matTooltip", "Overall: 65%, Mouse: 60%, Keyboard: 19%"], [1, "d-flex", "ss_title_wrap", "mb-4", "mt-5"], [1, "ms-5", "mb-0"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], ["id", "all", 1, "tab-pane", "container", "fade"], ["header", "Title", 3, "visible", "blockScroll", "draggable", "modal", "visibleChange"], [1, "bg-transparent"], [4, "ngFor", "ngForOf"], ["href", "", 3, "click"], ["mode", "determinate", "matTooltip", "Overall: 65%, Mouse: 60%, Keyboard: 19%", 3, "value"], ["alt", "", 3, "src"]],
    template: function ScreenshotsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Screenshots Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "ul", 6)(8, "li", 7)(9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Every 10 Min");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7)(12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "All Screenshot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5)(15, "div", 10)(16, "a", 11)(17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Time totals on this screen will not match reports if you are in a different timezone than the organization. View reports for this day. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "app-activity-filter-module");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "div", 3)(30, "div", 19)(31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 18)(34, "div", 20)(35, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "04:50");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Total Worked");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 20)(40, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "03:45");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "The Prev Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 3)(47, "div", 19)(48, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 18)(51, "div", 25)(52, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Average");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 25)(57, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "The Prev Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 25)(62, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "11%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "To ORG AVG");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 3)(69, "div", 27)(70, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "To-Dos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 18)(73, "div", 20)(74, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 20)(79, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "The Prev Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 28)(84, "div", 18)(85, "div", 3)(86, "div", 29)(87, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 30)(90, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "No to-dos / Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 31)(93, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 34)(96, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScreenshotsComponent_Template_button_click_96_listener() {
          return ctx.viewScreenShot();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "View screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 36)(99, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "mat-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 38)(102, "ul")(103, "li")(104, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "li")(107, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "button", 42)(110, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "3 Screens");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 43)(113, "h5", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "02:40 pm - 04:00 pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "mat-progress-bar", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "65% of 9 minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 3)(119, "div", 29)(120, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 30)(123, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "No to-dos / Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 31)(126, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 34)(129, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScreenshotsComponent_Template_button_click_129_listener() {
          return ctx.viewScreenShot();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "View screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 36)(132, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "mat-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 38)(135, "ul")(136, "li")(137, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "li")(140, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "button", 42)(143, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "3 Screens");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 43)(146, "h5", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "02:40 pm - 04:00 pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "mat-progress-bar", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "65% of 9 minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div")(152, "div", 46)(153, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "03:00 pm - 04:00 pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Total time worked: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, " 0:39:34 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](160, ScreenshotsComponent_div_160_Template, 33, 5, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div")(163, "p-dialog", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function ScreenshotsComponent_Template_p_dialog_visibleChange_163_listener($event) {
          return ctx.display = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](165, ScreenshotsComponent_div_165_Template, 4, 2, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](160);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.toDoListArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.display)("blockScroll", true)("draggable", false)("modal", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _shared_activity_filter_module_activity_filter_module_component__WEBPACK_IMPORTED_MODULE_0__.ActivityFilterModuleComponent, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBar, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckbox, primeng_dialog__WEBPACK_IMPORTED_MODULE_8__.Dialog]
  });
  return ScreenshotsComponent;
})();

/***/ }),

/***/ 31374:
/*!*******************************************************!*\
  !*** ./src/app/pages/activity/urls/urls.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlsComponent": () => (/* binding */ UrlsComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_model_table_header_data_activity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/activity */ 29370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _shared_activity_filter_module_activity_filter_module_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/activity-filter-module/activity-filter-module.component */ 32285);



let UrlsComponent = /*#__PURE__*/(() => {
  class UrlsComponent {
    constructor() {
      this.urlListArray = [];
      this.activityUrlsCols = src_app_core_model_table_header_data_activity__WEBPACK_IMPORTED_MODULE_0__.activityUrlsTable;
    }

    ngOnInit() {}

  }

  UrlsComponent.ɵfac = function UrlsComponent_Factory(t) {
    return new (t || UrlsComponent)();
  };

  UrlsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: UrlsComponent,
    selectors: [["app-urls"]],
    decls: 24,
    vars: 0,
    consts: [[1, "white_box", "main_content"], [1, "top_title_wrap"], [1, "row", "align-items-center"], [1, "col-md-4"], [1, "mb-0"], [1, "nav", "nav-tabs", "common_tabs"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#me", 1, "nav-link", "active"], ["data-bs-toggle", "tab", "href", "#all", 1, "nav-link"], [1, "settings_btn", "text-end"], ["href", "#"], [1, "fa-solid", "fa-gear"]],
    template: function UrlsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "URL Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3)(7, "ul", 5)(8, "li", 6)(9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Every 10 Min");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li", 6)(12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "All Screenshot");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 3)(15, "div", 9)(16, "a", 10)(17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "app-activity-filter-module");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_shared_activity_filter_module_activity_filter_module_component__WEBPACK_IMPORTED_MODULE_1__.ActivityFilterModuleComponent]
  });
  return UrlsComponent;
})();

/***/ }),

/***/ 3848:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/tabs.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_TAB": () => (/* binding */ MAT_TAB),
/* harmony export */   "MAT_TABS_CONFIG": () => (/* binding */ MAT_TABS_CONFIG),
/* harmony export */   "MAT_TAB_GROUP": () => (/* binding */ MAT_TAB_GROUP),
/* harmony export */   "MatInkBar": () => (/* binding */ MatInkBar),
/* harmony export */   "MatTab": () => (/* binding */ MatTab),
/* harmony export */   "MatTabBody": () => (/* binding */ MatTabBody),
/* harmony export */   "MatTabBodyPortal": () => (/* binding */ MatTabBodyPortal),
/* harmony export */   "MatTabChangeEvent": () => (/* binding */ MatTabChangeEvent),
/* harmony export */   "MatTabContent": () => (/* binding */ MatTabContent),
/* harmony export */   "MatTabGroup": () => (/* binding */ MatTabGroup),
/* harmony export */   "MatTabHeader": () => (/* binding */ MatTabHeader),
/* harmony export */   "MatTabLabel": () => (/* binding */ MatTabLabel),
/* harmony export */   "MatTabLabelWrapper": () => (/* binding */ MatTabLabelWrapper),
/* harmony export */   "MatTabLink": () => (/* binding */ MatTabLink),
/* harmony export */   "MatTabNav": () => (/* binding */ MatTabNav),
/* harmony export */   "MatTabNavPanel": () => (/* binding */ MatTabNavPanel),
/* harmony export */   "MatTabsModule": () => (/* binding */ MatTabsModule),
/* harmony export */   "_MAT_INK_BAR_POSITIONER": () => (/* binding */ _MAT_INK_BAR_POSITIONER),
/* harmony export */   "_MatTabBodyBase": () => (/* binding */ _MatTabBodyBase),
/* harmony export */   "_MatTabGroupBase": () => (/* binding */ _MatTabGroupBase),
/* harmony export */   "_MatTabHeaderBase": () => (/* binding */ _MatTabHeaderBase),
/* harmony export */   "_MatTabLinkBase": () => (/* binding */ _MatTabLinkBase),
/* harmony export */   "_MatTabNavBase": () => (/* binding */ _MatTabNavBase),
/* harmony export */   "matTabsAnimations": () => (/* binding */ matTabsAnimations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/a11y */ 12687);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/observers */ 49643);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ 84080);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ 94650);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 47873);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 95698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 68675);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 71884);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 82722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 63900);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 35684);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 46758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 96921);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 54968);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 39646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 56451);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 60515);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 69751);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 82805);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ 40445);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 37340);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/coercion */ 21281);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/scrolling */ 67376);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/platform */ 83353);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/keycodes */ 29521);






















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token for the MatInkBar's Positioner. */

function MatTab_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}

const _c0 = ["*"];

function MatTabBody_ng_template_2_Template(rf, ctx) {}

const _c1 = function (a0) {
  return {
    animationDuration: a0
  };
};

const _c2 = function (a0, a1) {
  return {
    value: a0,
    params: a1
  };
};

const _c3 = ["tabListContainer"];
const _c4 = ["tabList"];
const _c5 = ["tabListInner"];
const _c6 = ["nextPaginator"];
const _c7 = ["previousPaginator"];
const _c8 = ["tabBodyWrapper"];
const _c9 = ["tabHeader"];

function MatTabGroup_div_2_ng_template_2_ng_template_0_Template(rf, ctx) {}

function MatTabGroup_div_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatTabGroup_div_2_ng_template_2_ng_template_0_Template, 0, 0, "ng-template", 10);
  }

  if (rf & 2) {
    const tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", tab_r4.templateLabel);
  }
}

function MatTabGroup_div_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }

  if (rf & 2) {
    const tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r4.textLabel);
  }
}

function MatTabGroup_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatTabGroup_div_2_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const tab_r4 = restoredCtx.$implicit;
      const i_r5 = restoredCtx.index;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12._handleClick(tab_r4, _r0, i_r5));
    })("cdkFocusChange", function MatTabGroup_div_2_Template_div_cdkFocusChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const i_r5 = restoredCtx.index;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14._tabFocusChanged($event, i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTabGroup_div_2_ng_template_2_Template, 1, 1, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatTabGroup_div_2_ng_template_3_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const i_r5 = ctx.index;

    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-label-active", ctx_r1.selectedIndex === i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r1._getTabLabelId(i_r5))("ngClass", tab_r4.labelClass)("disabled", tab_r4.disabled)("matRippleDisabled", tab_r4.disabled || ctx_r1.disableRipple);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabIndex", ctx_r1._getTabIndex(tab_r4, i_r5))("aria-posinset", i_r5 + 1)("aria-setsize", ctx_r1._tabs.length)("aria-controls", ctx_r1._getTabContentId(i_r5))("aria-selected", ctx_r1.selectedIndex === i_r5)("aria-label", tab_r4.ariaLabel || null)("aria-labelledby", !tab_r4.ariaLabel && tab_r4.ariaLabelledby ? tab_r4.ariaLabelledby : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r4.templateLabel)("ngIfElse", _r7);
  }
}

function MatTabGroup_mat_tab_body_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-body", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("_onCentered", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentered_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17._removeTabBodyWrapperHeight());
    })("_onCentering", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentering_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19._setTabBodyWrapperHeight($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const tab_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-body-active", ctx_r3.selectedIndex === i_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r3._getTabContentId(i_r16))("ngClass", tab_r15.bodyClass)("content", tab_r15.content)("position", tab_r15.position)("origin", tab_r15.origin)("animationDuration", ctx_r3.animationDuration)("preserveContent", ctx_r3.preserveContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r3.contentTabIndex != null && ctx_r3.selectedIndex === i_r16 ? ctx_r3.contentTabIndex : null)("aria-labelledby", ctx_r3._getTabLabelId(i_r16));
  }
}

const _c10 = ["mat-tab-nav-bar", ""];

const _MAT_INK_BAR_POSITIONER = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatInkBarPositioner', {
  providedIn: 'root',
  factory: _MAT_INK_BAR_POSITIONER_FACTORY
});
/**
 * The default positioner function for the MatInkBar.
 * @docs-private
 */


function _MAT_INK_BAR_POSITIONER_FACTORY() {
  const method = element => ({
    left: element ? (element.offsetLeft || 0) + 'px' : '0',
    width: element ? (element.offsetWidth || 0) + 'px' : '0'
  });

  return method;
}
/**
 * The ink-bar is used to display and animate the line underneath the current active tab label.
 * @docs-private
 */


let MatInkBar = /*#__PURE__*/(() => {
  class MatInkBar {
    constructor(_elementRef, _ngZone, _inkBarPositioner, _animationMode) {
      this._elementRef = _elementRef;
      this._ngZone = _ngZone;
      this._inkBarPositioner = _inkBarPositioner;
      this._animationMode = _animationMode;
    }
    /**
     * Calculates the styles from the provided element in order to align the ink-bar to that element.
     * Shows the ink bar if previously set as hidden.
     * @param element
     */


    alignToElement(element) {
      this.show(); // `onStable` might not run for a while if the zone has already stabilized.
      // Wrap the call in `NgZone.run` to ensure that it runs relatively soon.

      this._ngZone.run(() => {
        this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1)).subscribe(() => {
          const positions = this._inkBarPositioner(element);

          const inkBar = this._elementRef.nativeElement;
          inkBar.style.left = positions.left;
          inkBar.style.width = positions.width;
        });
      });
    }
    /** Shows the ink bar. */


    show() {
      this._elementRef.nativeElement.style.visibility = 'visible';
    }
    /** Hides the ink bar. */


    hide() {
      this._elementRef.nativeElement.style.visibility = 'hidden';
    }

  }

  MatInkBar.ɵfac = function MatInkBar_Factory(t) {
    return new (t || MatInkBar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MAT_INK_BAR_POSITIONER), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
  };

  MatInkBar.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatInkBar,
    selectors: [["mat-ink-bar"]],
    hostAttrs: [1, "mat-ink-bar"],
    hostVars: 2,
    hostBindings: function MatInkBar_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
      }
    }
  });
  return MatInkBar;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `MatTabContent`. It serves as
 * alternative token to the actual `MatTabContent` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


const MAT_TAB_CONTENT = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatTabContent');
/** Decorates the `ng-template` tags and reads out the template from it. */

let MatTabContent = /*#__PURE__*/(() => {
  class MatTabContent {
    constructor(
    /** Content for the tab. */
    template) {
      this.template = template;
    }

  }

  MatTabContent.ɵfac = function MatTabContent_Factory(t) {
    return new (t || MatTabContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };

  MatTabContent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatTabContent,
    selectors: [["", "matTabContent", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: MAT_TAB_CONTENT,
      useExisting: MatTabContent
    }])]
  });
  return MatTabContent;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `MatTabLabel`. It serves as
 * alternative token to the actual `MatTabLabel` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


const MAT_TAB_LABEL = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatTabLabel');
/**
 * Used to provide a tab label to a tab without causing a circular dependency.
 * @docs-private
 */

const MAT_TAB = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_TAB');
/** Used to flag tab labels for use with the portal directive */

let MatTabLabel = /*#__PURE__*/(() => {
  class MatTabLabel extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.CdkPortal {
    constructor(templateRef, viewContainerRef, _closestTab) {
      super(templateRef, viewContainerRef);
      this._closestTab = _closestTab;
    }

  }

  MatTabLabel.ɵfac = function MatTabLabel_Factory(t) {
    return new (t || MatTabLabel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TAB, 8));
  };

  MatTabLabel.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatTabLabel,
    selectors: [["", "mat-tab-label", ""], ["", "matTabLabel", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: MAT_TAB_LABEL,
      useExisting: MatTabLabel
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return MatTabLabel;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatTab.

/** @docs-private */


const _MatTabBase = /*#__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisabled)(class {});
/**
 * Used to provide a tab group to a tab without causing a circular dependency.
 * @docs-private
 */


const MAT_TAB_GROUP = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_TAB_GROUP');
let MatTab = /*#__PURE__*/(() => {
  class MatTab extends _MatTabBase {
    constructor(_viewContainerRef, _closestTabGroup) {
      super();
      this._viewContainerRef = _viewContainerRef;
      this._closestTabGroup = _closestTabGroup;
      /** Plain text label for the tab, used when there is no template label. */

      this.textLabel = '';
      /** Portal that will be the hosted content of the tab */

      this._contentPortal = null;
      /** Emits whenever the internal state of the tab changes. */

      this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      /**
       * The relatively indexed position where 0 represents the center, negative is left, and positive
       * represents the right.
       */

      this.position = null;
      /**
       * The initial relatively index origin of the tab if it was created and selected after there
       * was already a selected tab. Provides context of what position the tab should originate from.
       */

      this.origin = null;
      /**
       * Whether the tab is currently active.
       */

      this.isActive = false;
    }
    /** Content for the tab label given by `<ng-template mat-tab-label>`. */


    get templateLabel() {
      return this._templateLabel;
    }

    set templateLabel(value) {
      this._setTemplateLabelInput(value);
    }
    /** @docs-private */


    get content() {
      return this._contentPortal;
    }

    ngOnChanges(changes) {
      if (changes.hasOwnProperty('textLabel') || changes.hasOwnProperty('disabled')) {
        this._stateChanges.next();
      }
    }

    ngOnDestroy() {
      this._stateChanges.complete();
    }

    ngOnInit() {
      this._contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.TemplatePortal(this._explicitContent || this._implicitContent, this._viewContainerRef);
    }
    /**
     * This has been extracted to a util because of TS 4 and VE.
     * View Engine doesn't support property rename inheritance.
     * TS 4.0 doesn't allow properties to override accessors or vice-versa.
     * @docs-private
     */


    _setTemplateLabelInput(value) {
      // Only update the label if the query managed to find one. This works around an issue where a
      // user may have manually set `templateLabel` during creation mode, which would then get
      // clobbered by `undefined` when the query resolves. Also note that we check that the closest
      // tab matches the current one so that we don't pick up labels from nested tabs.
      if (value && value._closestTab === this) {
        this._templateLabel = value;
      }
    }

  }

  MatTab.ɵfac = function MatTab_Factory(t) {
    return new (t || MatTab)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TAB_GROUP, 8));
  };

  MatTab.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatTab,
    selectors: [["mat-tab"]],
    contentQueries: function MatTab_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_TAB_LABEL, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_TAB_CONTENT, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateLabel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._explicitContent = _t.first);
      }
    },
    viewQuery: function MatTab_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._implicitContent = _t.first);
      }
    },
    inputs: {
      disabled: "disabled",
      textLabel: ["label", "textLabel"],
      ariaLabel: ["aria-label", "ariaLabel"],
      ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
      labelClass: "labelClass",
      bodyClass: "bodyClass"
    },
    exportAs: ["matTab"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: MAT_TAB,
      useExisting: MatTab
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatTab_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatTab_ng_template_0_Template, 1, 0, "ng-template");
      }
    },
    encapsulation: 2
  });
  return MatTab;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Animations used by the Material tabs.
 * @docs-private
 */


const matTabsAnimations = {
  /** Animation translates a tab along the X axis. */
  translateTab: /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('translateTab', [
  /*#__PURE__*/
  // Transitions to `none` instead of 0, because some browsers might blur the content.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('center, void, left-origin-center, right-origin-center', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
    transform: 'none'
  })),
  /*#__PURE__*/
  // If the tab is either on the left or right, we additionally add a `min-height` of 1px
  // in order to ensure that the element has a height before its state changes. This is
  // necessary because Chrome does seem to skip the transition in RTL mode if the element does
  // not have a static height and is not rendered. See related issue: #9465
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('left', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
    transform: 'translate3d(-100%, 0, 0)',
    minHeight: '1px',
    // Normally this is redundant since we detach the content from the DOM, but if the user
    // opted into keeping the content in the DOM, we have to hide it so it isn't focusable.
    visibility: 'hidden'
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('right', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
    transform: 'translate3d(100%, 0, 0)',
    minHeight: '1px',
    visibility: 'hidden'
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('* => left, * => right, left => center, right => center', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('void => left-origin-center', [/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
    transform: 'translate3d(-100%, 0, 0)',
    visibility: 'hidden'
  }), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')]), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('void => right-origin-center', [/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
    transform: 'translate3d(100%, 0, 0)',
    visibility: 'hidden'
  }), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')])])
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * The portal host directive for the contents of the tab.
 * @docs-private
 */

let MatTabBodyPortal = /*#__PURE__*/(() => {
  class MatTabBodyPortal extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.CdkPortalOutlet {
    constructor(componentFactoryResolver, viewContainerRef, _host, _document) {
      super(componentFactoryResolver, viewContainerRef, _document);
      this._host = _host;
      /** Subscription to events for when the tab body begins centering. */

      this._centeringSub = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
      /** Subscription to events for when the tab body finishes leaving from center position. */

      this._leavingSub = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
    }
    /** Set initial visibility or set up subscription for changing visibility. */


    ngOnInit() {
      super.ngOnInit();
      this._centeringSub = this._host._beforeCentering.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(this._host._isCenterPosition(this._host._position))).subscribe(isCentering => {
        if (isCentering && !this.hasAttached()) {
          this.attach(this._host._content);
        }
      });
      this._leavingSub = this._host._afterLeavingCenter.subscribe(() => {
        if (!this._host.preserveContent) {
          this.detach();
        }
      });
    }
    /** Clean up centering subscription. */


    ngOnDestroy() {
      super.ngOnDestroy();

      this._centeringSub.unsubscribe();

      this._leavingSub.unsubscribe();
    }

  }

  MatTabBodyPortal.ɵfac = function MatTabBodyPortal_Factory(t) {
    return new (t || MatTabBodyPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatTabBody)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT));
  };

  MatTabBodyPortal.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatTabBodyPortal,
    selectors: [["", "matTabBodyHost", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return MatTabBodyPortal;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Base class with all of the `MatTabBody` functionality.
 * @docs-private
 */


let _MatTabBodyBase = /*#__PURE__*/(() => {
  class _MatTabBodyBase {
    constructor(_elementRef, _dir, changeDetectorRef) {
      this._elementRef = _elementRef;
      this._dir = _dir;
      /** Subscription to the directionality change observable. */

      this._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
      /** Emits when an animation on the tab is complete. */

      this._translateTabComplete = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      /** Event emitted when the tab begins to animate towards the center as the active tab. */

      this._onCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Event emitted before the centering of the tab begins. */

      this._beforeCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Event emitted before the centering of the tab begins. */

      this._afterLeavingCenter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Event emitted when the tab completes its animation towards the center. */

      this._onCentered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true); // Note that the default value will always be overwritten by `MatTabBody`, but we need one
      // anyway to prevent the animations module from throwing an error if the body is used on its own.

      /** Duration for the tab's animation. */

      this.animationDuration = '500ms';
      /** Whether the tab's content should be kept in the DOM while it's off-screen. */

      this.preserveContent = false;

      if (_dir) {
        this._dirChangeSubscription = _dir.change.subscribe(dir => {
          this._computePositionAnimationState(dir);

          changeDetectorRef.markForCheck();
        });
      } // Ensure that we get unique animation events, because the `.done` callback can get
      // invoked twice in some browsers. See https://github.com/angular/angular/issues/24084.


      this._translateTabComplete.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)((x, y) => {
        return x.fromState === y.fromState && x.toState === y.toState;
      })).subscribe(event => {
        // If the transition to the center is complete, emit an event.
        if (this._isCenterPosition(event.toState) && this._isCenterPosition(this._position)) {
          this._onCentered.emit();
        }

        if (this._isCenterPosition(event.fromState) && !this._isCenterPosition(this._position)) {
          this._afterLeavingCenter.emit();
        }
      });
    }
    /** The shifted index position of the tab body, where zero represents the active center tab. */


    set position(position) {
      this._positionIndex = position;

      this._computePositionAnimationState();
    }
    /**
     * After initialized, check if the content is centered and has an origin. If so, set the
     * special position states that transition the tab from the left or right before centering.
     */


    ngOnInit() {
      if (this._position == 'center' && this.origin != null) {
        this._position = this._computePositionFromOrigin(this.origin);
      }
    }

    ngOnDestroy() {
      this._dirChangeSubscription.unsubscribe();

      this._translateTabComplete.complete();
    }

    _onTranslateTabStarted(event) {
      const isCentering = this._isCenterPosition(event.toState);

      this._beforeCentering.emit(isCentering);

      if (isCentering) {
        this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
      }
    }
    /** The text direction of the containing app. */


    _getLayoutDirection() {
      return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /** Whether the provided position state is considered center, regardless of origin. */


    _isCenterPosition(position) {
      return position == 'center' || position == 'left-origin-center' || position == 'right-origin-center';
    }
    /** Computes the position state that will be used for the tab-body animation trigger. */


    _computePositionAnimationState(dir = this._getLayoutDirection()) {
      if (this._positionIndex < 0) {
        this._position = dir == 'ltr' ? 'left' : 'right';
      } else if (this._positionIndex > 0) {
        this._position = dir == 'ltr' ? 'right' : 'left';
      } else {
        this._position = 'center';
      }
    }
    /**
     * Computes the position state based on the specified origin position. This is used if the
     * tab is becoming visible immediately after creation.
     */


    _computePositionFromOrigin(origin) {
      const dir = this._getLayoutDirection();

      if (dir == 'ltr' && origin <= 0 || dir == 'rtl' && origin > 0) {
        return 'left-origin-center';
      }

      return 'right-origin-center';
    }

  }

  _MatTabBodyBase.ɵfac = function _MatTabBodyBase_Factory(t) {
    return new (t || _MatTabBodyBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };

  _MatTabBodyBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: _MatTabBodyBase,
    inputs: {
      _content: ["content", "_content"],
      origin: "origin",
      animationDuration: "animationDuration",
      preserveContent: "preserveContent",
      position: "position"
    },
    outputs: {
      _onCentering: "_onCentering",
      _beforeCentering: "_beforeCentering",
      _afterLeavingCenter: "_afterLeavingCenter",
      _onCentered: "_onCentered"
    }
  });
  return _MatTabBodyBase;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Wrapper for the contents of a tab.
 * @docs-private
 */


let MatTabBody = /*#__PURE__*/(() => {
  class MatTabBody extends _MatTabBodyBase {
    constructor(elementRef, dir, changeDetectorRef) {
      super(elementRef, dir, changeDetectorRef);
    }

  }

  MatTabBody.ɵfac = function MatTabBody_Factory(t) {
    return new (t || MatTabBody)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };

  MatTabBody.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatTabBody,
    selectors: [["mat-tab-body"]],
    viewQuery: function MatTabBody_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.CdkPortalOutlet, 5);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._portalHost = _t.first);
      }
    },
    hostAttrs: [1, "mat-tab-body"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    decls: 3,
    vars: 6,
    consts: [["cdkScrollable", "", 1, "mat-tab-body-content"], ["content", ""], ["matTabBodyHost", ""]],
    template: function MatTabBody_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@translateTab.start", function MatTabBody_Template_div_animation_translateTab_start_0_listener($event) {
          return ctx._onTranslateTabStarted($event);
        })("@translateTab.done", function MatTabBody_Template_div_animation_translateTab_done_0_listener($event) {
          return ctx._translateTabComplete.next($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTabBody_ng_template_2_Template, 0, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@translateTab", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c2, ctx._position, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx.animationDuration)));
      }
    },
    dependencies: [MatTabBodyPortal],
    styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}.mat-tab-body-content[style*=\"visibility: hidden\"]{display:none}"],
    encapsulation: 2,
    data: {
      animation: [matTabsAnimations.translateTab]
    }
  });
  return MatTabBody;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token that can be used to provide the default options the tabs module. */


const MAT_TABS_CONFIG = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_TABS_CONFIG');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatTabLabelWrapper.

/** @docs-private */

const _MatTabLabelWrapperBase = /*#__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisabled)(class {});
/**
 * Used in the `mat-tab-group` view to display tab labels.
 * @docs-private
 */


let MatTabLabelWrapper = /*#__PURE__*/(() => {
  class MatTabLabelWrapper extends _MatTabLabelWrapperBase {
    constructor(elementRef) {
      super();
      this.elementRef = elementRef;
    }
    /** Sets focus on the wrapper element */


    focus() {
      this.elementRef.nativeElement.focus();
    }

    getOffsetLeft() {
      return this.elementRef.nativeElement.offsetLeft;
    }

    getOffsetWidth() {
      return this.elementRef.nativeElement.offsetWidth;
    }

  }

  MatTabLabelWrapper.ɵfac = function MatTabLabelWrapper_Factory(t) {
    return new (t || MatTabLabelWrapper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };

  MatTabLabelWrapper.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatTabLabelWrapper,
    selectors: [["", "matTabLabelWrapper", ""]],
    hostVars: 3,
    hostBindings: function MatTabLabelWrapper_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-disabled", !!ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-disabled", ctx.disabled);
      }
    },
    inputs: {
      disabled: "disabled"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return MatTabLabelWrapper;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Config used to bind passive event listeners */


const passiveEventListenerOptions = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__.normalizePassiveListenerOptions)({
  passive: true
});
/**
 * The distance in pixels that will be overshot when scrolling a tab label into view. This helps
 * provide a small affordance to the label next to it.
 */

const EXAGGERATED_OVERSCROLL = 60;
/**
 * Amount of milliseconds to wait before starting to scroll the header automatically.
 * Set a little conservatively in order to handle fake events dispatched on touch devices.
 */

const HEADER_SCROLL_DELAY = 650;
/**
 * Interval in milliseconds at which to scroll the header
 * while the user is holding their pointer.
 */

const HEADER_SCROLL_INTERVAL = 100;
/**
 * Base class for a tab header that supported pagination.
 * @docs-private
 */

let MatPaginatedTabHeader = /*#__PURE__*/(() => {
  class MatPaginatedTabHeader {
    constructor(_elementRef, _changeDetectorRef, _viewportRuler, _dir, _ngZone, _platform, _animationMode) {
      this._elementRef = _elementRef;
      this._changeDetectorRef = _changeDetectorRef;
      this._viewportRuler = _viewportRuler;
      this._dir = _dir;
      this._ngZone = _ngZone;
      this._platform = _platform;
      this._animationMode = _animationMode;
      /** The distance in pixels that the tab labels should be translated to the left. */

      this._scrollDistance = 0;
      /** Whether the header should scroll to the selected index after the view has been checked. */

      this._selectedIndexChanged = false;
      /** Emits when the component is destroyed. */

      this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      /** Whether the controls for pagination should be displayed */

      this._showPaginationControls = false;
      /** Whether the tab list can be scrolled more towards the end of the tab label list. */

      this._disableScrollAfter = true;
      /** Whether the tab list can be scrolled more towards the beginning of the tab label list. */

      this._disableScrollBefore = true;
      /** Stream that will stop the automated scrolling. */

      this._stopScrolling = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      this._disablePagination = false;
      this._selectedIndex = 0;
      /** Event emitted when the option is selected. */

      this.selectFocusedIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Event emitted when a label is focused. */

      this.indexFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // Bind the `mouseleave` event on the outside since it doesn't change anything in the view.

      _ngZone.runOutsideAngular(() => {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.fromEvent)(_elementRef.nativeElement, 'mouseleave').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._destroyed)).subscribe(() => {
          this._stopInterval();
        });
      });
    }
    /**
     * Whether pagination should be disabled. This can be used to avoid unnecessary
     * layout recalculations if it's known that pagination won't be required.
     */


    get disablePagination() {
      return this._disablePagination;
    }

    set disablePagination(value) {
      this._disablePagination = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(value);
    }
    /** The index of the active tab. */


    get selectedIndex() {
      return this._selectedIndex;
    }

    set selectedIndex(value) {
      value = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceNumberProperty)(value);

      if (this._selectedIndex != value) {
        this._selectedIndexChanged = true;
        this._selectedIndex = value;

        if (this._keyManager) {
          this._keyManager.updateActiveItem(value);
        }
      }
    }

    ngAfterViewInit() {
      // We need to handle these events manually, because we want to bind passive event listeners.
      (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.fromEvent)(this._previousPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._destroyed)).subscribe(() => {
        this._handlePaginatorPress('before');
      });
      (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.fromEvent)(this._nextPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._destroyed)).subscribe(() => {
        this._handlePaginatorPress('after');
      });
    }

    ngAfterContentInit() {
      const dirChange = this._dir ? this._dir.change : (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)('ltr');

      const resize = this._viewportRuler.change(150);

      const realign = () => {
        this.updatePagination();

        this._alignInkBarToSelectedTab();
      };

      this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__.FocusKeyManager(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap();

      this._keyManager.updateActiveItem(this._selectedIndex); // Defer the first call in order to allow for slower browsers to lay out the elements.
      // This helps in cases where the user lands directly on a page with paginated tabs.
      // Note that we use `onStable` instead of `requestAnimationFrame`, because the latter
      // can hold up tests that are in a background tab.


      this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1)).subscribe(realign); // On dir change or window resize, realign the ink bar and update the orientation of
      // the key manager if the direction has changed.


      (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.merge)(dirChange, resize, this._items.changes, this._itemsResized()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._destroyed)).subscribe(() => {
        // We need to defer this to give the browser some time to recalculate
        // the element dimensions. The call has to be wrapped in `NgZone.run`,
        // because the viewport change handler runs outside of Angular.
        this._ngZone.run(() => {
          Promise.resolve().then(() => {
            // Clamp the scroll distance, because it can change with the number of tabs.
            this._scrollDistance = Math.max(0, Math.min(this._getMaxScrollDistance(), this._scrollDistance));
            realign();
          });
        });

        this._keyManager.withHorizontalOrientation(this._getLayoutDirection());
      }); // If there is a change in the focus key manager we need to emit the `indexFocused`
      // event in order to provide a public event that notifies about focus changes. Also we realign
      // the tabs container by scrolling the new focused tab into the visible section.

      this._keyManager.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._destroyed)).subscribe(newFocusIndex => {
        this.indexFocused.emit(newFocusIndex);

        this._setTabFocus(newFocusIndex);
      });
    }
    /** Sends any changes that could affect the layout of the items. */


    _itemsResized() {
      if (typeof ResizeObserver !== 'function') {
        return rxjs__WEBPACK_IMPORTED_MODULE_18__.EMPTY;
      }

      return this._items.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(this._items), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(tabItems => new rxjs__WEBPACK_IMPORTED_MODULE_20__.Observable(observer => this._ngZone.runOutsideAngular(() => {
        const resizeObserver = new ResizeObserver(() => {
          observer.next();
        });
        tabItems.forEach(item => {
          resizeObserver.observe(item.elementRef.nativeElement);
        });
        return () => {
          resizeObserver.disconnect();
        };
      }))), // Skip the first emit since the resize observer emits when an item
      // is observed for new items when the tab is already inserted
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.skip)(1));
    }

    ngAfterContentChecked() {
      // If the number of tab labels have changed, check if scrolling should be enabled
      if (this._tabLabelCount != this._items.length) {
        this.updatePagination();
        this._tabLabelCount = this._items.length;

        this._changeDetectorRef.markForCheck();
      } // If the selected index has changed, scroll to the label and check if the scrolling controls
      // should be disabled.


      if (this._selectedIndexChanged) {
        this._scrollToLabel(this._selectedIndex);

        this._checkScrollingControls();

        this._alignInkBarToSelectedTab();

        this._selectedIndexChanged = false;

        this._changeDetectorRef.markForCheck();
      } // If the scroll distance has been changed (tab selected, focused, scroll controls activated),
      // then translate the header to reflect this.


      if (this._scrollDistanceChanged) {
        this._updateTabScrollPosition();

        this._scrollDistanceChanged = false;

        this._changeDetectorRef.markForCheck();
      }
    }

    ngOnDestroy() {
      this._destroyed.next();

      this._destroyed.complete();

      this._stopScrolling.complete();
    }
    /** Handles keyboard events on the header. */


    _handleKeydown(event) {
      // We don't handle any key bindings with a modifier key.
      if ((0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_22__.hasModifierKey)(event)) {
        return;
      }

      switch (event.keyCode) {
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_22__.ENTER:
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_22__.SPACE:
          if (this.focusIndex !== this.selectedIndex) {
            this.selectFocusedIndex.emit(this.focusIndex);

            this._itemSelected(event);
          }

          break;

        default:
          this._keyManager.onKeydown(event);

      }
    }
    /**
     * Callback for when the MutationObserver detects that the content has changed.
     */


    _onContentChanges() {
      const textContent = this._elementRef.nativeElement.textContent; // We need to diff the text content of the header, because the MutationObserver callback
      // will fire even if the text content didn't change which is inefficient and is prone
      // to infinite loops if a poorly constructed expression is passed in (see #14249).

      if (textContent !== this._currentTextContent) {
        this._currentTextContent = textContent || ''; // The content observer runs outside the `NgZone` by default, which
        // means that we need to bring the callback back in ourselves.

        this._ngZone.run(() => {
          this.updatePagination();

          this._alignInkBarToSelectedTab();

          this._changeDetectorRef.markForCheck();
        });
      }
    }
    /**
     * Updates the view whether pagination should be enabled or not.
     *
     * WARNING: Calling this method can be very costly in terms of performance. It should be called
     * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
     * page.
     */


    updatePagination() {
      this._checkPaginationEnabled();

      this._checkScrollingControls();

      this._updateTabScrollPosition();
    }
    /** Tracks which element has focus; used for keyboard navigation */


    get focusIndex() {
      return this._keyManager ? this._keyManager.activeItemIndex : 0;
    }
    /** When the focus index is set, we must manually send focus to the correct label */


    set focusIndex(value) {
      if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
        return;
      }

      this._keyManager.setActiveItem(value);
    }
    /**
     * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
     * providing a valid index and return true.
     */


    _isValidIndex(index) {
      if (!this._items) {
        return true;
      }

      const tab = this._items ? this._items.toArray()[index] : null;
      return !!tab && !tab.disabled;
    }
    /**
     * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
     * scrolling is enabled.
     */


    _setTabFocus(tabIndex) {
      if (this._showPaginationControls) {
        this._scrollToLabel(tabIndex);
      }

      if (this._items && this._items.length) {
        this._items.toArray()[tabIndex].focus(); // Do not let the browser manage scrolling to focus the element, this will be handled
        // by using translation. In LTR, the scroll left should be 0. In RTL, the scroll width
        // should be the full width minus the offset width.


        const containerEl = this._tabListContainer.nativeElement;

        const dir = this._getLayoutDirection();

        if (dir == 'ltr') {
          containerEl.scrollLeft = 0;
        } else {
          containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
        }
      }
    }
    /** The layout direction of the containing app. */


    _getLayoutDirection() {
      return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /** Performs the CSS transformation on the tab list that will cause the list to scroll. */


    _updateTabScrollPosition() {
      if (this.disablePagination) {
        return;
      }

      const scrollDistance = this.scrollDistance;
      const translateX = this._getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance; // Don't use `translate3d` here because we don't want to create a new layer. A new layer
      // seems to cause flickering and overflow in Internet Explorer. For example, the ink bar
      // and ripples will exceed the boundaries of the visible tab bar.
      // See: https://github.com/angular/components/issues/10276
      // We round the `transform` here, because transforms with sub-pixel precision cause some
      // browsers to blur the content of the element.

      this._tabList.nativeElement.style.transform = `translateX(${Math.round(translateX)}px)`; // Setting the `transform` on IE will change the scroll offset of the parent, causing the
      // position to be thrown off in some cases. We have to reset it ourselves to ensure that
      // it doesn't get thrown off. Note that we scope it only to IE and Edge, because messing
      // with the scroll position throws off Chrome 71+ in RTL mode (see #14689).

      if (this._platform.TRIDENT || this._platform.EDGE) {
        this._tabListContainer.nativeElement.scrollLeft = 0;
      }
    }
    /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */


    get scrollDistance() {
      return this._scrollDistance;
    }

    set scrollDistance(value) {
      this._scrollTo(value);
    }
    /**
     * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
     * the end of the list, respectively). The distance to scroll is computed to be a third of the
     * length of the tab list view window.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */


    _scrollHeader(direction) {
      const viewLength = this._tabListContainer.nativeElement.offsetWidth; // Move the scroll distance one-third the length of the tab list's viewport.

      const scrollAmount = (direction == 'before' ? -1 : 1) * viewLength / 3;
      return this._scrollTo(this._scrollDistance + scrollAmount);
    }
    /** Handles click events on the pagination arrows. */


    _handlePaginatorClick(direction) {
      this._stopInterval();

      this._scrollHeader(direction);
    }
    /**
     * Moves the tab list such that the desired tab label (marked by index) is moved into view.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */


    _scrollToLabel(labelIndex) {
      if (this.disablePagination) {
        return;
      }

      const selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;

      if (!selectedLabel) {
        return;
      } // The view length is the visible width of the tab labels.


      const viewLength = this._tabListContainer.nativeElement.offsetWidth;
      const {
        offsetLeft,
        offsetWidth
      } = selectedLabel.elementRef.nativeElement;
      let labelBeforePos, labelAfterPos;

      if (this._getLayoutDirection() == 'ltr') {
        labelBeforePos = offsetLeft;
        labelAfterPos = labelBeforePos + offsetWidth;
      } else {
        labelAfterPos = this._tabListInner.nativeElement.offsetWidth - offsetLeft;
        labelBeforePos = labelAfterPos - offsetWidth;
      }

      const beforeVisiblePos = this.scrollDistance;
      const afterVisiblePos = this.scrollDistance + viewLength;

      if (labelBeforePos < beforeVisiblePos) {
        // Scroll header to move label to the before direction
        this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
      } else if (labelAfterPos > afterVisiblePos) {
        // Scroll header to move label to the after direction
        this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
      }
    }
    /**
     * Evaluate whether the pagination controls should be displayed. If the scroll width of the
     * tab list is wider than the size of the header container, then the pagination controls should
     * be shown.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */


    _checkPaginationEnabled() {
      if (this.disablePagination) {
        this._showPaginationControls = false;
      } else {
        const isEnabled = this._tabListInner.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;

        if (!isEnabled) {
          this.scrollDistance = 0;
        }

        if (isEnabled !== this._showPaginationControls) {
          this._changeDetectorRef.markForCheck();
        }

        this._showPaginationControls = isEnabled;
      }
    }
    /**
     * Evaluate whether the before and after controls should be enabled or disabled.
     * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
     * before button. If the header is at the end of the list (scroll distance is equal to the
     * maximum distance we can scroll), then disable the after button.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */


    _checkScrollingControls() {
      if (this.disablePagination) {
        this._disableScrollAfter = this._disableScrollBefore = true;
      } else {
        // Check if the pagination arrows should be activated.
        this._disableScrollBefore = this.scrollDistance == 0;
        this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();

        this._changeDetectorRef.markForCheck();
      }
    }
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */


    _getMaxScrollDistance() {
      const lengthOfTabList = this._tabListInner.nativeElement.scrollWidth;
      const viewLength = this._tabListContainer.nativeElement.offsetWidth;
      return lengthOfTabList - viewLength || 0;
    }
    /** Tells the ink-bar to align itself to the current label wrapper */


    _alignInkBarToSelectedTab() {
      const selectedItem = this._items && this._items.length ? this._items.toArray()[this.selectedIndex] : null;
      const selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;

      if (selectedLabelWrapper) {
        this._inkBar.alignToElement(selectedLabelWrapper);
      } else {
        this._inkBar.hide();
      }
    }
    /** Stops the currently-running paginator interval.  */


    _stopInterval() {
      this._stopScrolling.next();
    }
    /**
     * Handles the user pressing down on one of the paginators.
     * Starts scrolling the header after a certain amount of time.
     * @param direction In which direction the paginator should be scrolled.
     */


    _handlePaginatorPress(direction, mouseEvent) {
      // Don't start auto scrolling for right mouse button clicks. Note that we shouldn't have to
      // null check the `button`, but we do it so we don't break tests that use fake events.
      if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
        return;
      } // Avoid overlapping timers.


      this._stopInterval(); // Start a timer after the delay and keep firing based on the interval.


      (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.timer)(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL) // Keep the timer going until something tells it to stop or the component is destroyed.
      .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.merge)(this._stopScrolling, this._destroyed))).subscribe(() => {
        const {
          maxScrollDistance,
          distance
        } = this._scrollHeader(direction); // Stop the timer if we've reached the start or the end.


        if (distance === 0 || distance >= maxScrollDistance) {
          this._stopInterval();
        }
      });
    }
    /**
     * Scrolls the header to a given position.
     * @param position Position to which to scroll.
     * @returns Information on the current scroll distance and the maximum.
     */


    _scrollTo(position) {
      if (this.disablePagination) {
        return {
          maxScrollDistance: 0,
          distance: 0
        };
      }

      const maxScrollDistance = this._getMaxScrollDistance();

      this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position)); // Mark that the scroll distance has changed so that after the view is checked, the CSS
      // transformation can move the header.

      this._scrollDistanceChanged = true;

      this._checkScrollingControls();

      return {
        maxScrollDistance,
        distance: this._scrollDistance
      };
    }

  }

  MatPaginatedTabHeader.ɵfac = function MatPaginatedTabHeader_Factory(t) {
    return new (t || MatPaginatedTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
  };

  MatPaginatedTabHeader.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatPaginatedTabHeader,
    inputs: {
      disablePagination: "disablePagination"
    }
  });
  return MatPaginatedTabHeader;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Base class with all of the `MatTabHeader` functionality.
 * @docs-private
 */


let _MatTabHeaderBase = /*#__PURE__*/(() => {
  class _MatTabHeaderBase extends MatPaginatedTabHeader {
    constructor(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) {
      super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
      this._disableRipple = false;
    }
    /** Whether the ripple effect is disabled or not. */


    get disableRipple() {
      return this._disableRipple;
    }

    set disableRipple(value) {
      this._disableRipple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(value);
    }

    _itemSelected(event) {
      event.preventDefault();
    }

  }

  _MatTabHeaderBase.ɵfac = function _MatTabHeaderBase_Factory(t) {
    return new (t || _MatTabHeaderBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
  };

  _MatTabHeaderBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: _MatTabHeaderBase,
    inputs: {
      disableRipple: "disableRipple"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return _MatTabHeaderBase;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * The header of the tab group which displays a list of all the tabs in the tab group. Includes
 * an ink bar that follows the currently selected tab. When the tabs list's width exceeds the
 * width of the header container, then arrows will be displayed to allow the user to scroll
 * left and right across the header.
 * @docs-private
 */


let MatTabHeader = /*#__PURE__*/(() => {
  class MatTabHeader extends _MatTabHeaderBase {
    constructor(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) {
      super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
    }

  }

  MatTabHeader.ɵfac = function MatTabHeader_Factory(t) {
    return new (t || MatTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
  };

  MatTabHeader.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatTabHeader,
    selectors: [["mat-tab-header"]],
    contentQueries: function MatTabHeader_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatTabLabelWrapper, 4);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._items = _t);
      }
    },
    viewQuery: function MatTabHeader_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatInkBar, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 5);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inkBar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabListInner = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
      }
    },
    hostAttrs: [1, "mat-tab-header"],
    hostVars: 4,
    hostBindings: function MatTabHeader_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl");
      }
    },
    inputs: {
      selectedIndex: "selectedIndex"
    },
    outputs: {
      selectFocusedIndex: "selectFocusedIndex",
      indexFocused: "indexFocused"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 14,
    vars: 10,
    consts: [["aria-hidden", "true", "type", "button", "mat-ripple", "", "tabindex", "-1", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "matRippleDisabled", "disabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-label-container", 3, "keydown"], ["tabListContainer", ""], ["role", "tablist", 1, "mat-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-tab-labels"], ["tabListInner", ""], ["aria-hidden", "true", "type", "button", "mat-ripple", "", "tabindex", "-1", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "matRippleDisabled", "disabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]],
    template: function MatTabHeader_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatTabHeader_Template_button_click_0_listener() {
          return ctx._handlePaginatorClick("before");
        })("mousedown", function MatTabHeader_Template_button_mousedown_0_listener($event) {
          return ctx._handlePaginatorPress("before", $event);
        })("touchend", function MatTabHeader_Template_button_touchend_0_listener() {
          return ctx._stopInterval();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatTabHeader_Template_div_keydown_3_listener($event) {
          return ctx._handleKeydown($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatTabHeader_Template_div_cdkObserveContent_5_listener() {
          return ctx._onContentChanges();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-ink-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MatTabHeader_Template_button_mousedown_11_listener($event) {
          return ctx._handlePaginatorPress("after", $event);
        })("click", function MatTabHeader_Template_button_click_11_listener() {
          return ctx._handlePaginatorClick("after");
        })("touchend", function MatTabHeader_Template_button_touchend_11_listener() {
          return ctx._stopInterval();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple)("disabled", ctx._disableScrollBefore || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple)("disabled", ctx._disableScrollAfter || null);
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_25__.CdkObserveContent, MatInkBar],
    styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;background:none;border:none;outline:0;padding:0}.mat-tab-header-pagination::-moz-focus-inner{border:0}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar._mat-animation-noopable{transition:none !important;animation:none !important}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-list._mat-animation-noopable{transition:none !important;animation:none !important}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}.mat-tab-label::before{margin:5px}@media(max-width: 599px){.mat-tab-label{min-width:72px}}"],
    encapsulation: 2
  });
  return MatTabHeader;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Used to generate unique ID's for each tab component */


let nextId = 0;
/** A simple change event emitted on focus or selection changes. */

class MatTabChangeEvent {} // Boilerplate for applying mixins to MatTabGroup.

/** @docs-private */


const _MatTabGroupMixinBase = /*#__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinColor)( /*#__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisableRipple)(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }

}), 'primary');
/**
 * Base class with all of the `MatTabGroupBase` functionality.
 * @docs-private
 */


let _MatTabGroupBase = /*#__PURE__*/(() => {
  class _MatTabGroupBase extends _MatTabGroupMixinBase {
    constructor(elementRef, _changeDetectorRef, defaultConfig, _animationMode) {
      super(elementRef);
      this._changeDetectorRef = _changeDetectorRef;
      this._animationMode = _animationMode;
      /** All of the tabs that belong to the group. */

      this._tabs = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
      /** The tab index that should be selected after the content has been checked. */

      this._indexToSelect = 0;
      /** Index of the tab that was focused last. */

      this._lastFocusedTabIndex = null;
      /** Snapshot of the height of the tab body wrapper before another tab is activated. */

      this._tabBodyWrapperHeight = 0;
      /** Subscription to tabs being added/removed. */

      this._tabsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
      /** Subscription to changes in the tab labels. */

      this._tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
      this._dynamicHeight = false;
      this._selectedIndex = null;
      /** Position of the tab header. */

      this.headerPosition = 'above';
      this._disablePagination = false;
      this._preserveContent = false;
      /** Output to enable support for two-way binding on `[(selectedIndex)]` */

      this.selectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Event emitted when focus has changed within a tab group. */

      this.focusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Event emitted when the body animation has completed */

      this.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Event emitted when the tab selection has changed. */

      this.selectedTabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
      this._groupId = nextId++;
      this.animationDuration = defaultConfig && defaultConfig.animationDuration ? defaultConfig.animationDuration : '500ms';
      this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
      this.dynamicHeight = defaultConfig && defaultConfig.dynamicHeight != null ? defaultConfig.dynamicHeight : false;
      this.contentTabIndex = defaultConfig?.contentTabIndex ?? null;
      this.preserveContent = !!defaultConfig?.preserveContent;
    }
    /** Whether the tab group should grow to the size of the active tab. */


    get dynamicHeight() {
      return this._dynamicHeight;
    }

    set dynamicHeight(value) {
      this._dynamicHeight = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(value);
    }
    /** The index of the active tab. */


    get selectedIndex() {
      return this._selectedIndex;
    }

    set selectedIndex(value) {
      this._indexToSelect = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceNumberProperty)(value, null);
    }
    /** Duration for the tab animation. Will be normalized to milliseconds if no units are set. */


    get animationDuration() {
      return this._animationDuration;
    }

    set animationDuration(value) {
      this._animationDuration = /^\d+$/.test(value + '') ? value + 'ms' : value;
    }
    /**
     * `tabindex` to be set on the inner element that wraps the tab content. Can be used for improved
     * accessibility when the tab does not have focusable elements or if it has scrollable content.
     * The `tabindex` will be removed automatically for inactive tabs.
     * Read more at https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html
     */


    get contentTabIndex() {
      return this._contentTabIndex;
    }

    set contentTabIndex(value) {
      this._contentTabIndex = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceNumberProperty)(value, null);
    }
    /**
     * Whether pagination should be disabled. This can be used to avoid unnecessary
     * layout recalculations if it's known that pagination won't be required.
     */


    get disablePagination() {
      return this._disablePagination;
    }

    set disablePagination(value) {
      this._disablePagination = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(value);
    }
    /**
     * By default tabs remove their content from the DOM while it's off-screen.
     * Setting this to `true` will keep it in the DOM which will prevent elements
     * like iframes and videos from reloading next time it comes back into the view.
     */


    get preserveContent() {
      return this._preserveContent;
    }

    set preserveContent(value) {
      this._preserveContent = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(value);
    }
    /** Background color of the tab group. */


    get backgroundColor() {
      return this._backgroundColor;
    }

    set backgroundColor(value) {
      const nativeElement = this._elementRef.nativeElement;
      nativeElement.classList.remove(`mat-background-${this.backgroundColor}`);

      if (value) {
        nativeElement.classList.add(`mat-background-${value}`);
      }

      this._backgroundColor = value;
    }
    /**
     * After the content is checked, this component knows what tabs have been defined
     * and what the selected index should be. This is where we can know exactly what position
     * each tab should be in according to the new selected index, and additionally we know how
     * a new selected tab should transition in (from the left or right).
     */


    ngAfterContentChecked() {
      // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
      // the amount of tabs changes before the actual change detection runs.
      const indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect); // If there is a change in selected index, emit a change event. Should not trigger if
      // the selected index has not yet been initialized.


      if (this._selectedIndex != indexToSelect) {
        const isFirstRun = this._selectedIndex == null;

        if (!isFirstRun) {
          this.selectedTabChange.emit(this._createChangeEvent(indexToSelect)); // Preserve the height so page doesn't scroll up during tab change.
          // Fixes https://stackblitz.com/edit/mat-tabs-scroll-page-top-on-tab-change

          const wrapper = this._tabBodyWrapper.nativeElement;
          wrapper.style.minHeight = wrapper.clientHeight + 'px';
        } // Changing these values after change detection has run
        // since the checked content may contain references to them.


        Promise.resolve().then(() => {
          this._tabs.forEach((tab, index) => tab.isActive = index === indexToSelect);

          if (!isFirstRun) {
            this.selectedIndexChange.emit(indexToSelect); // Clear the min-height, this was needed during tab change to avoid
            // unnecessary scrolling.

            this._tabBodyWrapper.nativeElement.style.minHeight = '';
          }
        });
      } // Setup the position for each tab and optionally setup an origin on the next selected tab.


      this._tabs.forEach((tab, index) => {
        tab.position = index - indexToSelect; // If there is already a selected tab, then set up an origin for the next selected tab
        // if it doesn't have one already.

        if (this._selectedIndex != null && tab.position == 0 && !tab.origin) {
          tab.origin = indexToSelect - this._selectedIndex;
        }
      });

      if (this._selectedIndex !== indexToSelect) {
        this._selectedIndex = indexToSelect;
        this._lastFocusedTabIndex = null;

        this._changeDetectorRef.markForCheck();
      }
    }

    ngAfterContentInit() {
      this._subscribeToAllTabChanges();

      this._subscribeToTabLabels(); // Subscribe to changes in the amount of tabs, in order to be
      // able to re-render the content as new tabs are added or removed.


      this._tabsSubscription = this._tabs.changes.subscribe(() => {
        const indexToSelect = this._clampTabIndex(this._indexToSelect); // Maintain the previously-selected tab if a new tab is added or removed and there is no
        // explicit change that selects a different tab.


        if (indexToSelect === this._selectedIndex) {
          const tabs = this._tabs.toArray();

          let selectedTab;

          for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].isActive) {
              // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
              // event, otherwise the consumer may end up in an infinite loop in some edge cases like
              // adding a tab within the `selectedIndexChange` event.
              this._indexToSelect = this._selectedIndex = i;
              this._lastFocusedTabIndex = null;
              selectedTab = tabs[i];
              break;
            }
          } // If we haven't found an active tab and a tab exists at the selected index, it means
          // that the active tab was swapped out. Since this won't be picked up by the rendering
          // loop in `ngAfterContentChecked`, we need to sync it up manually.


          if (!selectedTab && tabs[indexToSelect]) {
            Promise.resolve().then(() => {
              tabs[indexToSelect].isActive = true;
              this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
            });
          }
        }

        this._changeDetectorRef.markForCheck();
      });
    }
    /** Listens to changes in all of the tabs. */


    _subscribeToAllTabChanges() {
      // Since we use a query with `descendants: true` to pick up the tabs, we may end up catching
      // some that are inside of nested tab groups. We filter them out manually by checking that
      // the closest group to the tab is the current one.
      this._allTabs.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(this._allTabs)).subscribe(tabs => {
        this._tabs.reset(tabs.filter(tab => {
          return tab._closestTabGroup === this || !tab._closestTabGroup;
        }));

        this._tabs.notifyOnChanges();
      });
    }

    ngOnDestroy() {
      this._tabs.destroy();

      this._tabsSubscription.unsubscribe();

      this._tabLabelSubscription.unsubscribe();
    }
    /** Re-aligns the ink bar to the selected tab element. */


    realignInkBar() {
      if (this._tabHeader) {
        this._tabHeader._alignInkBarToSelectedTab();
      }
    }
    /**
     * Recalculates the tab group's pagination dimensions.
     *
     * WARNING: Calling this method can be very costly in terms of performance. It should be called
     * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
     * page.
     */


    updatePagination() {
      if (this._tabHeader) {
        this._tabHeader.updatePagination();
      }
    }
    /**
     * Sets focus to a particular tab.
     * @param index Index of the tab to be focused.
     */


    focusTab(index) {
      const header = this._tabHeader;

      if (header) {
        header.focusIndex = index;
      }
    }

    _focusChanged(index) {
      this._lastFocusedTabIndex = index;
      this.focusChange.emit(this._createChangeEvent(index));
    }

    _createChangeEvent(index) {
      const event = new MatTabChangeEvent();
      event.index = index;

      if (this._tabs && this._tabs.length) {
        event.tab = this._tabs.toArray()[index];
      }

      return event;
    }
    /**
     * Subscribes to changes in the tab labels. This is needed, because the @Input for the label is
     * on the MatTab component, whereas the data binding is inside the MatTabGroup. In order for the
     * binding to be updated, we need to subscribe to changes in it and trigger change detection
     * manually.
     */


    _subscribeToTabLabels() {
      if (this._tabLabelSubscription) {
        this._tabLabelSubscription.unsubscribe();
      }

      this._tabLabelSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.merge)(...this._tabs.map(tab => tab._stateChanges)).subscribe(() => this._changeDetectorRef.markForCheck());
    }
    /** Clamps the given index to the bounds of 0 and the tabs length. */


    _clampTabIndex(index) {
      // Note the `|| 0`, which ensures that values like NaN can't get through
      // and which would otherwise throw the component into an infinite loop
      // (since Math.max(NaN, 0) === NaN).
      return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
    }
    /** Returns a unique id for each tab label element */


    _getTabLabelId(i) {
      return `mat-tab-label-${this._groupId}-${i}`;
    }
    /** Returns a unique id for each tab content element */


    _getTabContentId(i) {
      return `mat-tab-content-${this._groupId}-${i}`;
    }
    /**
     * Sets the height of the body wrapper to the height of the activating tab if dynamic
     * height property is true.
     */


    _setTabBodyWrapperHeight(tabHeight) {
      if (!this._dynamicHeight || !this._tabBodyWrapperHeight) {
        return;
      }

      const wrapper = this._tabBodyWrapper.nativeElement;
      wrapper.style.height = this._tabBodyWrapperHeight + 'px'; // This conditional forces the browser to paint the height so that
      // the animation to the new height can have an origin.

      if (this._tabBodyWrapper.nativeElement.offsetHeight) {
        wrapper.style.height = tabHeight + 'px';
      }
    }
    /** Removes the height of the tab body wrapper. */


    _removeTabBodyWrapperHeight() {
      const wrapper = this._tabBodyWrapper.nativeElement;
      this._tabBodyWrapperHeight = wrapper.clientHeight;
      wrapper.style.height = '';
      this.animationDone.emit();
    }
    /** Handle click events, setting new selected index if appropriate. */


    _handleClick(tab, tabHeader, index) {
      if (!tab.disabled) {
        this.selectedIndex = tabHeader.focusIndex = index;
      }
    }
    /** Retrieves the tabindex for the tab. */


    _getTabIndex(tab, index) {
      if (tab.disabled) {
        return null;
      }

      const targetIndex = this._lastFocusedTabIndex ?? this.selectedIndex;
      return index === targetIndex ? 0 : -1;
    }
    /** Callback for when the focused state of a tab has changed. */


    _tabFocusChanged(focusOrigin, index) {
      // Mouse/touch focus happens during the `mousedown`/`touchstart` phase which
      // can cause the tab to be moved out from under the pointer, interrupting the
      // click sequence (see #21898). We don't need to scroll the tab into view for
      // such cases anyway, because it will be done when the tab becomes selected.
      if (focusOrigin && focusOrigin !== 'mouse' && focusOrigin !== 'touch') {
        this._tabHeader.focusIndex = index;
      }
    }

  }

  _MatTabGroupBase.ɵfac = function _MatTabGroupBase_Factory(t) {
    return new (t || _MatTabGroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
  };

  _MatTabGroupBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: _MatTabGroupBase,
    inputs: {
      dynamicHeight: "dynamicHeight",
      selectedIndex: "selectedIndex",
      headerPosition: "headerPosition",
      animationDuration: "animationDuration",
      contentTabIndex: "contentTabIndex",
      disablePagination: "disablePagination",
      preserveContent: "preserveContent",
      backgroundColor: "backgroundColor"
    },
    outputs: {
      selectedIndexChange: "selectedIndexChange",
      focusChange: "focusChange",
      animationDone: "animationDone",
      selectedTabChange: "selectedTabChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return _MatTabGroupBase;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Material design tab-group component. Supports basic tab pairs (label + content) and includes
 * animated ink-bar, keyboard navigation, and screen reader.
 * See: https://material.io/design/components/tabs.html
 */


let MatTabGroup = /*#__PURE__*/(() => {
  class MatTabGroup extends _MatTabGroupBase {
    constructor(elementRef, changeDetectorRef, defaultConfig, animationMode) {
      super(elementRef, changeDetectorRef, defaultConfig, animationMode);
    }

  }

  MatTabGroup.ɵfac = function MatTabGroup_Factory(t) {
    return new (t || MatTabGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
  };

  MatTabGroup.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatTabGroup,
    selectors: [["mat-tab-group"]],
    contentQueries: function MatTabGroup_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatTab, 5);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allTabs = _t);
      }
    },
    viewQuery: function MatTabGroup_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c9, 5);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabBodyWrapper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabHeader = _t.first);
      }
    },
    hostAttrs: [1, "mat-tab-group"],
    hostVars: 4,
    hostBindings: function MatTabGroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-group-dynamic-height", ctx.dynamicHeight)("mat-tab-group-inverted-header", ctx.headerPosition === "below");
      }
    },
    inputs: {
      color: "color",
      disableRipple: "disableRipple"
    },
    exportAs: ["matTabGroup"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: MAT_TAB_GROUP,
      useExisting: MatTabGroup
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    decls: 6,
    vars: 7,
    consts: [[3, "selectedIndex", "disableRipple", "disablePagination", "indexFocused", "selectFocusedIndex"], ["tabHeader", ""], ["class", "mat-tab-label mat-focus-indicator", "role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 3, "id", "mat-tab-label-active", "ngClass", "disabled", "matRippleDisabled", "click", "cdkFocusChange", 4, "ngFor", "ngForOf"], [1, "mat-tab-body-wrapper"], ["tabBodyWrapper", ""], ["role", "tabpanel", 3, "id", "mat-tab-body-active", "ngClass", "content", "position", "origin", "animationDuration", "preserveContent", "_onCentered", "_onCentering", 4, "ngFor", "ngForOf"], ["role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 1, "mat-tab-label", "mat-focus-indicator", 3, "id", "ngClass", "disabled", "matRippleDisabled", "click", "cdkFocusChange"], [1, "mat-tab-label-content"], [3, "ngIf", "ngIfElse"], ["tabTextLabel", ""], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "id", "ngClass", "content", "position", "origin", "animationDuration", "preserveContent", "_onCentered", "_onCentering"]],
    template: function MatTabGroup_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-header", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("indexFocused", function MatTabGroup_Template_mat_tab_header_indexFocused_0_listener($event) {
          return ctx._focusChanged($event);
        })("selectFocusedIndex", function MatTabGroup_Template_mat_tab_header_selectFocusedIndex_0_listener($event) {
          return ctx.selectedIndex = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTabGroup_div_2_Template, 5, 15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MatTabGroup_mat_tab_body_5_Template, 1, 11, "mat-tab-body", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex || 0)("disableRipple", ctx.disableRipple)("disablePagination", ctx.disablePagination);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._tabs);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.CdkPortalOutlet, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__.CdkMonitorFocus, MatTabLabelWrapper, MatTabBody, MatTabHeader],
    styles: [".mat-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}"],
    encapsulation: 2
  });
  return MatTabGroup;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Increasing integer for generating unique ids for tab nav components.


let nextUniqueId = 0;
/**
 * Base class with all of the `MatTabNav` functionality.
 * @docs-private
 */

let _MatTabNavBase = /*#__PURE__*/(() => {
  class _MatTabNavBase extends MatPaginatedTabHeader {
    constructor(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode) {
      super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
      this._disableRipple = false;
      /** Theme color of the nav bar. */

      this.color = 'primary';
    }
    /** Background color of the tab nav. */


    get backgroundColor() {
      return this._backgroundColor;
    }

    set backgroundColor(value) {
      const classList = this._elementRef.nativeElement.classList;
      classList.remove(`mat-background-${this.backgroundColor}`);

      if (value) {
        classList.add(`mat-background-${value}`);
      }

      this._backgroundColor = value;
    }
    /** Whether the ripple effect is disabled or not. */


    get disableRipple() {
      return this._disableRipple;
    }

    set disableRipple(value) {
      this._disableRipple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(value);
    }

    _itemSelected() {// noop
    }

    ngAfterContentInit() {
      // We need this to run before the `changes` subscription in parent to ensure that the
      // selectedIndex is up-to-date by the time the super class starts looking for it.
      this._items.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._destroyed)).subscribe(() => {
        this.updateActiveLink();
      });

      super.ngAfterContentInit();
    }
    /** Notifies the component that the active link has been changed. */


    updateActiveLink() {
      if (!this._items) {
        return;
      }

      const items = this._items.toArray();

      for (let i = 0; i < items.length; i++) {
        if (items[i].active) {
          this.selectedIndex = i;

          this._changeDetectorRef.markForCheck();

          if (this.tabPanel) {
            this.tabPanel._activeTabId = items[i].id;
          }

          return;
        }
      } // The ink bar should hide itself if no items are active.


      this.selectedIndex = -1;

      this._inkBar.hide();
    }

    _getRole() {
      return this.tabPanel ? 'tablist' : this._elementRef.nativeElement.getAttribute('role');
    }

  }

  _MatTabNavBase.ɵfac = function _MatTabNavBase_Factory(t) {
    return new (t || _MatTabNavBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
  };

  _MatTabNavBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: _MatTabNavBase,
    inputs: {
      backgroundColor: "backgroundColor",
      disableRipple: "disableRipple",
      color: "color",
      tabPanel: "tabPanel"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return _MatTabNavBase;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Navigation component matching the styles of the tab group header.
 * Provides anchored navigation with animated ink bar.
 */


let MatTabNav = /*#__PURE__*/(() => {
  class MatTabNav extends _MatTabNavBase {
    constructor(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode) {
      super(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode);
    }

  }

  MatTabNav.ɵfac = function MatTabNav_Factory(t) {
    return new (t || MatTabNav)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
  };

  MatTabNav.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatTabNav,
    selectors: [["", "mat-tab-nav-bar", ""]],
    contentQueries: function MatTabNav_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatTabLink, 5);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._items = _t);
      }
    },
    viewQuery: function MatTabNav_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatInkBar, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 5);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inkBar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tabListInner = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
      }
    },
    hostAttrs: [1, "mat-tab-nav-bar", "mat-tab-header"],
    hostVars: 11,
    hostBindings: function MatTabNav_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx._getRole());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl")("mat-primary", ctx.color !== "warn" && ctx.color !== "accent")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn");
      }
    },
    inputs: {
      color: "color"
    },
    exportAs: ["matTabNavBar", "matTabNav"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    attrs: _c10,
    ngContentSelectors: _c0,
    decls: 14,
    vars: 10,
    consts: [["aria-hidden", "true", "type", "button", "mat-ripple", "", "tabindex", "-1", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "matRippleDisabled", "disabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-link-container", 3, "keydown"], ["tabListContainer", ""], [1, "mat-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-tab-links"], ["tabListInner", ""], ["aria-hidden", "true", "type", "button", "mat-ripple", "", "tabindex", "-1", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "matRippleDisabled", "disabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]],
    template: function MatTabNav_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatTabNav_Template_button_click_0_listener() {
          return ctx._handlePaginatorClick("before");
        })("mousedown", function MatTabNav_Template_button_mousedown_0_listener($event) {
          return ctx._handlePaginatorPress("before", $event);
        })("touchend", function MatTabNav_Template_button_touchend_0_listener() {
          return ctx._stopInterval();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatTabNav_Template_div_keydown_3_listener($event) {
          return ctx._handleKeydown($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatTabNav_Template_div_cdkObserveContent_5_listener() {
          return ctx._onContentChanges();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-ink-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MatTabNav_Template_button_mousedown_11_listener($event) {
          return ctx._handlePaginatorPress("after", $event);
        })("click", function MatTabNav_Template_button_click_11_listener() {
          return ctx._handlePaginatorClick("after");
        })("touchend", function MatTabNav_Template_button_touchend_11_listener() {
          return ctx._stopInterval();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple)("disabled", ctx._disableScrollBefore || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple)("disabled", ctx._disableScrollAfter || null);
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_25__.CdkObserveContent, MatInkBar],
    styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;background:none;border:none;outline:0;padding:0}.mat-tab-header-pagination::-moz-focus-inner{border:0}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar._mat-animation-noopable{transition:none !important;animation:none !important}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}.mat-tab-link::before{margin:5px}@media(max-width: 599px){.mat-tab-link{min-width:72px}}"],
    encapsulation: 2
  });
  return MatTabNav;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})(); // Boilerplate for applying mixins to MatTabLink.


const _MatTabLinkMixinBase = /*#__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinTabIndex)( /*#__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisableRipple)( /*#__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisabled)(class {})));
/** Base class with all of the `MatTabLink` functionality. */


let _MatTabLinkBase = /*#__PURE__*/(() => {
  class _MatTabLinkBase extends _MatTabLinkMixinBase {
    constructor(_tabNavBar,
    /** @docs-private */
    elementRef, globalRippleOptions, tabIndex, _focusMonitor, animationMode) {
      super();
      this._tabNavBar = _tabNavBar;
      this.elementRef = elementRef;
      this._focusMonitor = _focusMonitor;
      /** Whether the tab link is active or not. */

      this._isActive = false;
      /** Unique id for the tab. */

      this.id = `mat-tab-link-${nextUniqueId++}`;
      this.rippleConfig = globalRippleOptions || {};
      this.tabIndex = parseInt(tabIndex) || 0;

      if (animationMode === 'NoopAnimations') {
        this.rippleConfig.animation = {
          enterDuration: 0,
          exitDuration: 0
        };
      }
    }
    /** Whether the link is active. */


    get active() {
      return this._isActive;
    }

    set active(value) {
      const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(value);

      if (newValue !== this._isActive) {
        this._isActive = newValue;

        this._tabNavBar.updateActiveLink();
      }
    }
    /**
     * Whether ripples are disabled on interaction.
     * @docs-private
     */


    get rippleDisabled() {
      return this.disabled || this.disableRipple || this._tabNavBar.disableRipple || !!this.rippleConfig.disabled;
    }
    /** Focuses the tab link. */


    focus() {
      this.elementRef.nativeElement.focus();
    }

    ngAfterViewInit() {
      this._focusMonitor.monitor(this.elementRef);
    }

    ngOnDestroy() {
      this._focusMonitor.stopMonitoring(this.elementRef);
    }

    _handleFocus() {
      // Since we allow navigation through tabbing in the nav bar, we
      // have to update the focused index whenever the link receives focus.
      this._tabNavBar.focusIndex = this._tabNavBar._items.toArray().indexOf(this);
    }

    _handleKeydown(event) {
      if (this._tabNavBar.tabPanel && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_22__.SPACE) {
        this.elementRef.nativeElement.click();
      }
    }

    _getAriaControls() {
      return this._tabNavBar.tabPanel ? this._tabNavBar.tabPanel?.id : this.elementRef.nativeElement.getAttribute('aria-controls');
    }

    _getAriaSelected() {
      if (this._tabNavBar.tabPanel) {
        return this.active ? 'true' : 'false';
      } else {
        return this.elementRef.nativeElement.getAttribute('aria-selected');
      }
    }

    _getAriaCurrent() {
      return this.active && !this._tabNavBar.tabPanel ? 'page' : null;
    }

    _getRole() {
      return this._tabNavBar.tabPanel ? 'tab' : this.elementRef.nativeElement.getAttribute('role');
    }

    _getTabIndex() {
      if (this._tabNavBar.tabPanel) {
        return this._isActive && !this.disabled ? 0 : -1;
      } else {
        return this.tabIndex;
      }
    }

  }

  _MatTabLinkBase.ɵfac = function _MatTabLinkBase_Factory(t) {
    return new (t || _MatTabLinkBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MatTabNavBase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
  };

  _MatTabLinkBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: _MatTabLinkBase,
    inputs: {
      active: "active",
      id: "id"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return _MatTabLinkBase;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Link inside of a `mat-tab-nav-bar`.
 */


let MatTabLink = /*#__PURE__*/(() => {
  class MatTabLink extends _MatTabLinkBase {
    constructor(tabNavBar, elementRef, ngZone, platform, globalRippleOptions, tabIndex, focusMonitor, animationMode) {
      super(tabNavBar, elementRef, globalRippleOptions, tabIndex, focusMonitor, animationMode);
      this._tabLinkRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.RippleRenderer(this, ngZone, elementRef, platform);

      this._tabLinkRipple.setupTriggerEvents(elementRef.nativeElement);
    }

    ngOnDestroy() {
      super.ngOnDestroy();

      this._tabLinkRipple._removeTriggerEvents();
    }

  }

  MatTabLink.ɵfac = function MatTabLink_Factory(t) {
    return new (t || MatTabLink)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatTabNav), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
  };

  MatTabLink.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatTabLink,
    selectors: [["", "mat-tab-link", ""], ["", "matTabLink", ""]],
    hostAttrs: [1, "mat-tab-link", "mat-focus-indicator"],
    hostVars: 11,
    hostBindings: function MatTabLink_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatTabLink_focus_HostBindingHandler() {
          return ctx._handleFocus();
        })("keydown", function MatTabLink_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        });
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-controls", ctx._getAriaControls())("aria-current", ctx._getAriaCurrent())("aria-disabled", ctx.disabled)("aria-selected", ctx._getAriaSelected())("id", ctx.id)("tabIndex", ctx._getTabIndex())("role", ctx._getRole());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-tab-disabled", ctx.disabled)("mat-tab-label-active", ctx.active);
      }
    },
    inputs: {
      disabled: "disabled",
      disableRipple: "disableRipple",
      tabIndex: "tabIndex"
    },
    exportAs: ["matTabLink"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return MatTabLink;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Tab panel component associated with MatTabNav.
 */


let MatTabNavPanel = /*#__PURE__*/(() => {
  class MatTabNavPanel {
    constructor() {
      /** Unique id for the tab panel. */
      this.id = `mat-tab-nav-panel-${nextUniqueId++}`;
    }

  }

  MatTabNavPanel.ɵfac = function MatTabNavPanel_Factory(t) {
    return new (t || MatTabNavPanel)();
  };

  MatTabNavPanel.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatTabNavPanel,
    selectors: [["mat-tab-nav-panel"]],
    hostAttrs: ["role", "tabpanel", 1, "mat-tab-nav-panel"],
    hostVars: 2,
    hostBindings: function MatTabNavPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx._activeTabId)("id", ctx.id);
      }
    },
    inputs: {
      id: "id"
    },
    exportAs: ["matTabNavPanel"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatTabNavPanel_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
  return MatTabNavPanel;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


let MatTabsModule = /*#__PURE__*/(() => {
  class MatTabsModule {}

  MatTabsModule.ɵfac = function MatTabsModule_Factory(t) {
    return new (t || MatTabsModule)();
  };

  MatTabsModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatTabsModule
  });
  MatTabsModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.PortalModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_25__.ObserversModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__.A11yModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
  });
  return MatTabsModule;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=tabs.mjs.map

/***/ })

}]);