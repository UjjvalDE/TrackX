"use strict";
(self["webpackChunktracker"] = self["webpackChunktracker"] || []).push([[601],{

/***/ 80351:
/*!********************************************************************************!*\
  !*** ./src/app/pages/timesheet/approvals-detail/approvals-detail.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovalsDetailComponent": () => (/* binding */ ApprovalsDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_app_core_model_table_header_data_time_sheet_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/time-sheet-data */ 21857);
/* harmony import */ var src_app_shared_pop_up_model_time_sheet_split_delete_time_sheet_split_delete_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/time-sheet-split-delete/time-sheet-split-delete.component */ 53720);
/* harmony import */ var src_app_shared_pop_up_model_time_sheet_split_time_time_sheet_split_time_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pop-up-model/time-sheet-split-time/time-sheet-split-time.component */ 94085);
/* harmony import */ var src_app_shared_pop_up_model_timesheet_add_time_model_timesheet_add_time_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pop-up-model/timesheet-add-time-model/timesheet-add-time-model.component */ 1019);
/* harmony import */ var src_app_shared_pop_up_model_timesheet_details_timesheet_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/pop-up-model/timesheet-details/timesheet-details.component */ 81541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 47873);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 56709);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ 28255);





















function ApprovalsDetailComponent_mat_option_121_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const lavel_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", lavel_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](lavel_r5);
  }
}

function ApprovalsDetailComponent_li_127_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li")(1, "a", 64)(2, "mat-checkbox", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ApprovalsDetailComponent_li_127_Template_mat_checkbox_change_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const col_r6 = restoredCtx.$implicit;
      const i_r7 = restoredCtx.index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.OnColumnToggle(col_r6, i_r7, $event.checked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const col_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", col_r6.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", col_r6.label, " ");
  }
}

function ApprovalsDetailComponent_ng_template_130_th_1_p_tableHeaderCheckbox_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "p-tableHeaderCheckbox");
  }
}

function ApprovalsDetailComponent_ng_template_130_th_1_span_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ApprovalsDetailComponent_ng_template_130_th_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ApprovalsDetailComponent_ng_template_130_th_1_span_2_span_2_Template, 2, 0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", col_r12.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", col_r12 == null ? null : col_r12.config == null ? null : col_r12.config.isHeaderInfoIcon);
  }
}

function ApprovalsDetailComponent_ng_template_130_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ApprovalsDetailComponent_ng_template_130_th_1_p_tableHeaderCheckbox_1_Template, 1, 0, "p-tableHeaderCheckbox", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ApprovalsDetailComponent_ng_template_130_th_1_span_2_Template, 3, 2, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", col_r12 == null ? null : col_r12.config == null ? null : col_r12.config.isCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !(col_r12 == null ? null : col_r12.config == null ? null : col_r12.config.isCheckbox));
  }
}

function ApprovalsDetailComponent_ng_template_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ApprovalsDetailComponent_ng_template_130_th_1_Template, 3, 2, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", columns_r10);
  }
}

function ApprovalsDetailComponent_ng_template_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const rowData_r17 = ctx.$implicit;
    const expanded_r19 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pRowToggler", rowData_r17)("icon", expanded_r19 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rowData_r17.representative.date);
  }
}

function ApprovalsDetailComponent_ng_template_132_td_1_mat_checkbox_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-checkbox", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ApprovalsDetailComponent_ng_template_132_td_1_mat_checkbox_1_Template_mat_checkbox_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);
      const rowData_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r27.TdClickEvent({
        element: rowData_r20,
        event: "checkBoxChecked",
        checked: $event["checked"]
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const rowData_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", rowData_r20[col_r23.key]);
  }
}

function ApprovalsDetailComponent_ng_template_132_td_1_span_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const rowData_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rowData_r20[col_r23.key] ? rowData_r20[col_r23.key].charAt(0) : "");
  }
}

function ApprovalsDetailComponent_ng_template_132_td_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 77)(1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ApprovalsDetailComponent_ng_template_132_td_1_span_2_span_2_Template, 2, 1, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const col_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const rowData_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", col_r23.config == null ? null : col_r23.config.isProfileWithLetter);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r20[col_r23.key], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rowData_r20["projectName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rowData_r20["todo"]);
  }
}

function ApprovalsDetailComponent_ng_template_132_td_1_span_5_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ApprovalsDetailComponent_ng_template_132_td_1_span_5_button_5_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r42);
      const action_r39 = restoredCtx.$implicit;
      const rowData_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r40.TdClickEvent({
        element: rowData_r20,
        event: action_r39.event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const action_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](action_r39.label);
  }
}

function ApprovalsDetailComponent_ng_template_132_td_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span")(1, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-menu", null, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ApprovalsDetailComponent_ng_template_132_td_1_span_5_button_5_Template, 2, 1, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);

    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", _r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r26.actionMenuDaily);
  }
}

function ApprovalsDetailComponent_ng_template_132_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ApprovalsDetailComponent_ng_template_132_td_1_mat_checkbox_1_Template, 1, 1, "mat-checkbox", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ApprovalsDetailComponent_ng_template_132_td_1_span_2_Template, 8, 4, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ApprovalsDetailComponent_ng_template_132_td_1_span_5_Template, 6, 2, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r23 = ctx.$implicit;
    const rowData_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", col_r23 == null ? null : col_r23.config == null ? null : col_r23.config.isCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", col_r23.config == null ? null : col_r23.config.isProject_todo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rowData_r20[col_r23.key]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (col_r23 == null ? null : col_r23.config == null ? null : col_r23.config.isAction) && !rowData_r20.rowDisable);
  }
}

function ApprovalsDetailComponent_ng_template_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ApprovalsDetailComponent_ng_template_132_td_1_Template, 6, 4, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r21 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", columns_r21);
  }
}

const _c0 = function () {
  return ["/timesheet/approvals"];
};

let ApprovalsDetailComponent = /*#__PURE__*/(() => {
  class ApprovalsDetailComponent {
    constructor(formBuilder, masterService, matDialog) {
      this.formBuilder = formBuilder;
      this.masterService = masterService;
      this.matDialog = matDialog;
      this.fullName = 'Minal';
      this.levelsArray = ['>80%', '>60%', '<40%', '<20%'];
      this.cols = [];
      this.dailyTableShowCols = [];
      this.dailyValue = [{
        project: 'BA',
        projectName: 'ABC',
        todo: 'No To-do',
        activity: '100',
        manual: '0',
        idle: '0',
        duration: '0:00:02',
        time: '3:31 pm - 3:31 pm',
        "representative": {
          "date": "We, Jul 14, 2021"
        }
      }, {
        project: 'Development',
        projectName: 'ABC',
        todo: 'No To-do',
        activity: '100',
        manual: '0',
        idle: '0',
        duration: '0:00:02',
        time: '3:31 pm - 3:31 pm',
        "representative": {
          "date": "We, Jul 14, 2021"
        }
      }, {
        project: 'Travel',
        projectName: 'ABC',
        todo: 'No To-do',
        activity: '100',
        manual: '0',
        idle: '0',
        duration: '0:00:02',
        time: '3:31 pm - 3:31 pm',
        "representative": {
          "date": "Thu, Jul 15, 2021"
        }
      }];
      this.actionMenuDaily = [{
        label: 'Edit Time  Enter',
        event: 'editTime'
      }, {
        label: 'Split Time Enter',
        event: 'splitTimeEnter'
      }, {
        label: 'Delete Time Enter',
        event: 'deleteTimeEnter'
      }];
      this.dailyCols = src_app_core_model_table_header_data_time_sheet_data__WEBPACK_IMPORTED_MODULE_0__.dailyTable;
    }

    ngOnInit() {
      this.filterForm = this.formBuilder.group({
        fromDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        todate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        activityLevel: ['0', []],
        timeZone: ['0', []],
        timetype: ['0', []],
        source: ['0', []]
      });
      this.dailyTableShowCols = this.dailyCols;
      this.cols = this.dailyCols.slice(2);
    }

    OnColumnToggle(col, indexElement, event) {
      this.dailyTableShowCols = this.masterService.OnColumnToggle(col, indexElement, event, this.dailyCols, this.dailyTableShowCols, 2);
    }

    TdClickEvent(item) {
      // this.viewEditData = item.element;
      if (item.event == 'editTime') {
        this.ShowAddTimeDialog(item);
      } else if (item.event == 'splitTimeEnter') {
        this.ShowTimeSplitDialog(item);
      } else if (item.event == 'deleteTimeEnter') {
        this.DeleteSplitDialog(item);
      }
    }

    ShowTimeSplitDialog(event) {
      const splitTime = this.matDialog.open(src_app_shared_pop_up_model_time_sheet_split_time_time_sheet_split_time_component__WEBPACK_IMPORTED_MODULE_2__.TimeSheetSplitTimeComponent, {
        width: '675px'
      });
    }

    DeleteSplitDialog(event) {
      const deleteDialog = this.matDialog.open(src_app_shared_pop_up_model_time_sheet_split_delete_time_sheet_split_delete_component__WEBPACK_IMPORTED_MODULE_1__.TimeSheetSplitDeleteComponent, {
        width: '675px'
      });
    }

    ShowAddTimeDialog(data) {
      const addTimeDialog = this.matDialog.open(src_app_shared_pop_up_model_timesheet_add_time_model_timesheet_add_time_model_component__WEBPACK_IMPORTED_MODULE_3__.TimesheetAddTimeModelComponent, {
        width: '675px',
        data: data
      });
    }

    OnDetailClick() {
      let data;
      const timesheetDetailDialog = this.matDialog.open(src_app_shared_pop_up_model_timesheet_details_timesheet_details_component__WEBPACK_IMPORTED_MODULE_4__.TimesheetDetailsComponent, {
        width: '675px',
        data: data
      });
    }

  }

  ApprovalsDetailComponent.ɵfac = function ApprovalsDetailComponent_Factory(t) {
    return new (t || ApprovalsDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_5__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog));
  };

  ApprovalsDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ApprovalsDetailComponent,
    selectors: [["app-approvals-detail"]],
    decls: 133,
    vars: 8,
    consts: [[1, "white_box", "main_content"], [1, "top_title_wrap"], [1, "row", "align-items-center"], [1, "col-md-6"], [1, "mb-0", 3, "routerLink"], [1, "fa", "fa-angle-left"], [1, "settings_btn", 2, "margin-right", "10%"], [3, "click"], [1, "fa-solid", "fa-users"], [1, "settings_btn", "text-end"], ["routerLink", "/settings/features/payments"], [1, "fa-solid", "fa-gear"], [1, "row"], [1, "d-flex", "align-items-center", "mb-5"], ["src", "../../../assets/images/user-img.svg", "alt", "user", "width", "30", "height", "30", 1, "me-1"], [1, "ms-3"], [1, "m-0"], [1, "d-flex", "cz_open"], [1, "badge", "bg-warning", "mt-0"], [1, "col-md-6", "text-end", "cz_botton_submit"], [1, "btn", "btn-outline-danger"], [1, "btn", "btn-outline-primary"], [1, "row", "cz_worked", "mb-5"], [1, "col-md-2"], [1, "col-md-6", "filter_top_wrap", "justify-content-end"], [1, "arrow_wrap", "text-end"], [1, "btn_change", "btn_prev"], [1, "fa", "fa-arrow-left"], [1, "btn_change", "btn_next"], [1, "fa", "fa-arrow-right"], [1, "filter_select", "mb-5"], [1, "row", 3, "formGroup"], ["for", "timeZone"], ["appearance", "fill"], ["formControlName", "timeZone", "id", "timeZone"], ["value", ""], ["value", "memberTimezone"], ["value", "abcTimeZone"], ["for", "timetype"], ["formControlName", "timetype", "id", "timetype"], ["value", "normal"], ["value", "idle"], ["value", "resumed"], ["value", "manual"], ["for", "source"], ["formControlName", "source", "id", "source"], ["value", "desktop"], ["value", "mobile"], ["value", "browser"], ["value", "webTimer"], ["for", "activityLevel"], ["formControlName", "activityLevel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-4", "align-self-end", "text-end"], [1, "dropdown"], ["data-toggle", "dropdown", "type", "button", "id", "dropdownMenuButton1", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn_round_gray", "me-3"], [1, "fa-solid", "fa-table-cells-large"], ["aria-labelledby", "dropdownMenuButton1", 1, "dropdown-menu"], [4, "ngFor", "ngForOf"], ["sortField", "representative.date", "sortMode", "single", "dataKey", "representative.date", "rowGroupMode", "subheader", "groupRowsBy", "representative.date", 3, "value", "columns"], ["pTemplate", "header"], ["pTemplate", "groupheader"], ["pTemplate", "rowexpansion"], [3, "value"], [1, "dropdown-item"], [3, "checked", "change"], [4, "ngIf"], ["class", "d-flex align-items-center", 4, "ngIf"], [1, "d-flex", "align-items-center"], ["matTooltip", "Info about the action", 4, "ngIf"], ["matTooltip", "Info about the action"], ["src", "../../../assets/images/icon/info.svg", "alt", ""], ["colspan", "8", 2, "text-align", "left !important"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-button-text", "p-button-rounded", "p-button-plain", "p-mr-2", 3, "pRowToggler", "icon"], [1, "p-text-bold", "p-ml-2"], [3, "checked", "change", 4, "ngIf"], ["class", "member_title_wrap", 4, "ngIf"], [1, "member_title_wrap"], [1, "user_img"], ["class", "user_custom_img orange", 4, "ngIf"], [1, "user_custom_img", "orange"], [1, "btn", "btn-sm", "drop_menu_dot", 3, "matMenuTriggerFor"], ["src", "../../../assets/images/icon/dots.svg", "alt", ""], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"]],
    template: function ApprovalsDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " All timesheets");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 3)(8, "div", 6)(9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ApprovalsDetailComponent_Template_a_click_9_listener() {
          return ctx.OnDetailClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 9)(14, "a", 10)(15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 12)(19, "div", 3)(20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 15)(23, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 17)(26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Mon, Aug 22, 2022 - Sun, Aug 28, 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Open");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 19)(31, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Unsubmit Timesheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Approve Timesheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Deny Timesheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 12)(38, "div", 3)(39, "div", 22)(40, "div", 23)(41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "7:03");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "Worked");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 23)(46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "0:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "PTO");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 23)(51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "0:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Holiday");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 23)(56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "$0:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "Amount owed");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 23)(61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "1%");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "div", 24)(66, "div", 25)(67, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](68, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](70, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 30)(72, "form", 31)(73, "div", 23)(74, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, "Time Zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "mat-form-field", 33)(77, "mat-select", 34)(78, "mat-option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "My Time Zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "mat-option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "Member's Time Zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "mat-option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83, "ABC\"Company\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "div", 23)(85, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86, "Time Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "mat-form-field", 33)(88, "mat-select", 39)(89, "mat-option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90, "All Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "mat-option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92, "Normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "mat-option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](94, "Idle");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "mat-option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](96, "Resumed");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "mat-option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](98, "Manual");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "div", 23)(100, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101, "Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "mat-form-field", 33)(103, "mat-select", 45)(104, "mat-option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, "All Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "mat-option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107, "Desktop");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "mat-option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](109, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "mat-option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](111, "Browser");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "mat-option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](113, "Web Timer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "div", 23)(115, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](116, "Activity Levels");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "mat-form-field", 33)(118, "mat-select", 51)(119, "mat-option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](120, "All level");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](121, ApprovalsDetailComponent_mat_option_121_Template, 2, 2, "mat-option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "div", 53)(123, "div", 54)(124, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](125, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "ul", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](127, ApprovalsDetailComponent_li_127_Template, 4, 2, "li", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "div")(129, "p-table", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](130, ApprovalsDetailComponent_ng_template_130_Template, 2, 1, "ng-template", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](131, ApprovalsDetailComponent_ng_template_131_Template, 5, 3, "ng-template", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](132, ApprovalsDetailComponent_ng_template_132_Template, 2, 1, "ng-template", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.fullName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.levelsArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.cols);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.dailyValue)("columns", ctx.dailyCols);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckbox, primeng_table__WEBPACK_IMPORTED_MODULE_16__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_17__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_16__.RowToggler, primeng_table__WEBPACK_IMPORTED_MODULE_16__.TableHeaderCheckbox, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuTrigger]
  });
  return ApprovalsDetailComponent;
})();

/***/ }),

/***/ 38566:
/*!******************************************************************!*\
  !*** ./src/app/pages/timesheet/approvals/approvals.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovalsComponent": () => (/* binding */ ApprovalsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_app_core_model_table_header_data_time_sheet_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/time-sheet-data */ 21857);
/* harmony import */ var src_app_shared_pop_up_model_timesheet_filter_model_timesheet_filter_model_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/timesheet-filter-model/timesheet-filter-model.component */ 83425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var src_app_core_services_organization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/organization.service */ 14261);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/dynamic-table/dynamic-table.component */ 57834);
/* harmony import */ var _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/date-time-range-picker/date-time-range-picker.component */ 96991);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 47873);
















function ApprovalsComponent_mat_option_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const member_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", member_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](member_r1.full_name);
  }
}

let ApprovalsComponent = /*#__PURE__*/(() => {
  class ApprovalsComponent {
    constructor(masterService, matDialog, organizationService, fb) {
      this.masterService = masterService;
      this.matDialog = matDialog;
      this.organizationService = organizationService;
      this.fb = fb;
      this.actionApproval = [{
        label: 'View',
        event: 'view'
      }, {
        label: 'Approve',
        event: 'approve'
      }, {
        label: 'Deny',
        event: 'deny'
      }];
      this.memberList = [];
      this.approvalCols = src_app_core_model_table_header_data_time_sheet_data__WEBPACK_IMPORTED_MODULE_0__.approvalTable;
      this.approvalValue = [{
        member: 'John Doe',
        redirectTo: '/timesheet/approval-detail',
        pay_period: 'Mon, Apr 19, 2021 - Sat, Apr 24 2021',
        total: '1:22:26',
        activity: '20',
        status: 'Denied',
        cssClass: 'bg-danger',
        submitted_on: 'Sat Apr 24, 2021'
      }, {
        member: 'John Doe',
        redirectTo: '/timesheet/approval-detail',
        pay_period: 'Mon, Apr 19, 2021 - Sat, Apr 24 2021',
        total: '1:22:26',
        activity: '1',
        status: 'Denied',
        cssClass: 'bg-danger',
        submitted_on: 'Fri Apr 23, 2021'
      }, {
        member: 'John Doe',
        redirectTo: '/timesheet/approval-detail',
        pay_period: 'Mon, Apr 19, 2021 - Sat, Apr 24 2021',
        total: '1:22:26',
        activity: '0',
        status: 'Submitted',
        cssClass: 'bg-primary',
        submitted_on: 'Mon Apr 26, 2021'
      }, {
        member: 'John Doe',
        redirectTo: '/timesheet/approval-detail',
        pay_period: 'Mon, Apr 19, 2021 - Sat, Apr 24 2021',
        total: '1:22:26',
        activity: '37',
        status: 'Open',
        cssClass: 'bg-warning',
        submitted_on: ''
      }, {
        member: 'John Doe',
        redirectTo: '/timesheet/approval-detail',
        pay_period: 'Mon, Apr 19, 2021 - Sat, Apr 24 2021',
        total: '1:22:26',
        activity: '0',
        status: 'Open',
        cssClass: 'bg-warning',
        submitted_on: ''
      }];
      this.approvalData = {};
      this.organizationDetails = {};
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.filterForm = this.fb.group({
        fromDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        todate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        member: ['']
      });
      this.GetMember();
    }

    GetMember() {
      this.organizationService.GetOrganizationMember(this.organizationDetails['_id'], 1, 10).subscribe(response => {
        if (response && response.ReturnCode == 200 && response.err == 0) {
          if (response && response['Data'].length > 0) {
            this.memberList = response['Data'];
          }
        }
      }, error => {
        this.masterService.showError(error.error.ReturnMsg, 'Error');
      });
    }

    SelectedDateEvent(event) {
      const fromDate = event.fromDate;
      const toDate = event.toDate;

      if (fromDate && toDate) {
        this.filterForm.removeControl('date');
        this.filterForm.patchValue({
          fromDate: fromDate,
          todate: toDate
        });
      }

      this.ValueChange();
    }

    ValueChange() {
      this.filterForm = this.filterForm.value;
    }

    ShowFilterDialog() {
      const filterDialog = this.matDialog.open(src_app_shared_pop_up_model_timesheet_filter_model_timesheet_filter_model_component__WEBPACK_IMPORTED_MODULE_1__.TimesheetFilterModelComponent, {
        width: '440px'
      });
    }

    OnApply() {}

    TdClickEvent(item) {
      this.approvalData = item.element;
    }

    TabClick(type) {
      if (type == 'open') {} else if (type == 'submitted') {} else if (type == 'approved') {} else if (type == 'denied') {} else if (type == 'all') {}
    }

  }

  ApprovalsComponent.ɵfac = function ApprovalsComponent_Factory(t) {
    return new (t || ApprovalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_2__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_organization_service__WEBPACK_IMPORTED_MODULE_3__.OrganizationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder));
  };

  ApprovalsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ApprovalsComponent,
    selectors: [["app-approvals"]],
    decls: 51,
    vars: 6,
    consts: [[1, "white_box", "main_content"], [1, "top_title_wrap"], [1, "row", "align-items-center"], [1, "col-md-6"], [1, "mb-0"], [1, "settings_btn", "text-end"], ["routerLink", "/people/members"], [1, "fa-solid", "fa-users"], [1, "row"], [1, "col-md-3"], [3, "formControlFromDateNameValue", "formControlSelectedDateValue"], [1, "col-md-9", "text-end"], [1, "btn_dark_border", 3, "click"], [3, "formGroup"], [1, "member_wrap_div"], ["for", "member"], ["appearance", "fill"], ["id", "member", "formControlName", "member"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "btn_dark", 3, "click"], [1, "nav", "nav-tabs", "tab_design_one", "mb-5"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#open", 1, "nav-link", "active", 3, "click"], ["data-bs-toggle", "tab", "href", "#submitted", 1, "nav-link", 3, "click"], ["data-bs-toggle", "tab", "href", "#approved", 1, "nav-link", 3, "click"], ["data-bs-toggle", "tab", "href", "#denied", 1, "nav-link", 3, "click"], ["data-bs-toggle", "tab", "href", "#all", 1, "nav-link", 3, "click"], [1, "approval_table_wrap"], [3, "tableColsDetails", "tableDataArray", "actionMenu", "tdClickEmitter"], [3, "value"]],
    template: function ApprovalsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Timesheet Approvals");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 3)(7, "div", 5)(8, "a", 6)(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " Manage Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "app-date-time-range-picker", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("formControlSelectedDateValue", function ApprovalsComponent_Template_app_date_time_range_picker_formControlSelectedDateValue_14_listener($event) {
          return ctx.SelectedDateEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 11)(16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ApprovalsComponent_Template_button_click_16_listener() {
          return ctx.ShowFilterDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "form", 13)(20, "div", 8)(21, "div", 9)(22, "div", 14)(23, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "mat-form-field", 16)(26, "mat-select", 17)(27, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Select Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, ApprovalsComponent_mat_option_29_Template, 2, 2, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ApprovalsComponent_Template_button_click_30_listener() {
          return ctx.OnApply();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div")(33, "ul", 21)(34, "li", 22)(35, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ApprovalsComponent_Template_a_click_35_listener() {
          return ctx.TabClick("open");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Open");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "li", 22)(38, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ApprovalsComponent_Template_a_click_38_listener() {
          return ctx.TabClick("submitted");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Submitted");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "li", 22)(41, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ApprovalsComponent_Template_a_click_41_listener() {
          return ctx.TabClick("approved");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Approved");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "li", 22)(44, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ApprovalsComponent_Template_a_click_44_listener() {
          return ctx.TabClick("denied");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Denied");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "li", 22)(47, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ApprovalsComponent_Template_a_click_47_listener() {
          return ctx.TabClick("all");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 28)(50, "TrackerX-dynamic-table", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("tdClickEmitter", function ApprovalsComponent_Template_TrackerX_dynamic_table_tdClickEmitter_50_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlFromDateNameValue", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.memberList);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tableColsDetails", ctx.approvalCols)("tableDataArray", ctx.approvalValue)("actionMenu", ctx.actionApproval);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_4__.DynamicTableComponent, _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__.DateTimeRangePickerComponent, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption]
  });
  return ApprovalsComponent;
})();

/***/ }),

/***/ 6235:
/*!*************************************************************!*\
  !*** ./src/app/pages/timesheet/timesheet-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimesheetRoutingModule": () => (/* binding */ TimesheetRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _approvals_detail_approvals_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approvals-detail/approvals-detail.component */ 80351);
/* harmony import */ var _approvals_approvals_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approvals/approvals.component */ 38566);
/* harmony import */ var _view_edit_view_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-edit/view-edit.component */ 44110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);






const routes = [{
  path: 'approvals',
  component: _approvals_approvals_component__WEBPACK_IMPORTED_MODULE_1__.ApprovalsComponent
}, {
  path: 'approval-detail',
  component: _approvals_detail_approvals_detail_component__WEBPACK_IMPORTED_MODULE_0__.ApprovalsDetailComponent
}, {
  path: 'view-edit',
  component: _view_edit_view_edit_component__WEBPACK_IMPORTED_MODULE_2__.ViewEditComponent
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'view-edit'
}];
let TimesheetRoutingModule = /*#__PURE__*/(() => {
  class TimesheetRoutingModule {}

  TimesheetRoutingModule.ɵfac = function TimesheetRoutingModule_Factory(t) {
    return new (t || TimesheetRoutingModule)();
  };

  TimesheetRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: TimesheetRoutingModule
  });
  TimesheetRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
  return TimesheetRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TimesheetRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 81601:
/*!*****************************************************!*\
  !*** ./src/app/pages/timesheet/timesheet.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimesheetModule": () => (/* binding */ TimesheetModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _timesheet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timesheet-routing.module */ 6235);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _view_edit_view_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-edit/view-edit.component */ 44110);
/* harmony import */ var _approvals_approvals_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./approvals/approvals.component */ 38566);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 56709);
/* harmony import */ var _approvals_detail_approvals_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./approvals-detail/approvals-detail.component */ 80351);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 28255);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);



 // Component


 // Material Module



 // PrimeNg Module







let TimesheetModule = /*#__PURE__*/(() => {
  class TimesheetModule {}

  TimesheetModule.ɵfac = function TimesheetModule_Factory(t) {
    return new (t || TimesheetModule)();
  };

  TimesheetModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: TimesheetModule
  });
  TimesheetModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _timesheet_routing_module__WEBPACK_IMPORTED_MODULE_0__.TimesheetRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule, primeng_table__WEBPACK_IMPORTED_MODULE_13__.TableModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule]
  });
  return TimesheetModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](TimesheetModule, {
    declarations: [_view_edit_view_edit_component__WEBPACK_IMPORTED_MODULE_2__.ViewEditComponent, _approvals_approvals_component__WEBPACK_IMPORTED_MODULE_3__.ApprovalsComponent, _approvals_detail_approvals_detail_component__WEBPACK_IMPORTED_MODULE_4__.ApprovalsDetailComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _timesheet_routing_module__WEBPACK_IMPORTED_MODULE_0__.TimesheetRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule, primeng_table__WEBPACK_IMPORTED_MODULE_13__.TableModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule]
  });
})();

/***/ }),

/***/ 44110:
/*!******************************************************************!*\
  !*** ./src/app/pages/timesheet/view-edit/view-edit.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewEditComponent": () => (/* binding */ ViewEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 15439);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_core_model_table_header_data_time_sheet_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/model/table-header-data/time-sheet-data */ 21857);
/* harmony import */ var src_app_shared_pop_up_model_time_sheet_split_delete_time_sheet_split_delete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pop-up-model/time-sheet-split-delete/time-sheet-split-delete.component */ 53720);
/* harmony import */ var src_app_shared_pop_up_model_time_sheet_split_time_time_sheet_split_time_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pop-up-model/time-sheet-split-time/time-sheet-split-time.component */ 94085);
/* harmony import */ var src_app_shared_pop_up_model_timesheet_add_time_model_timesheet_add_time_model_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/pop-up-model/timesheet-add-time-model/timesheet-add-time-model.component */ 1019);
/* harmony import */ var src_app_shared_pop_up_model_timesheet_filter_model_timesheet_filter_model_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/pop-up-model/timesheet-filter-model/timesheet-filter-model.component */ 83425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var src_app_core_services_organization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/organization.service */ 14261);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fullcalendar/angular */ 76806);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/dynamic-table/dynamic-table.component */ 57834);
/* harmony import */ var _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/date-time-range-picker/date-time-range-picker.component */ 96991);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/loader/loader.component */ 89047);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 47873);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ 56709);
























function ViewEditComponent_app_date_time_range_picker_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-date-time-range-picker", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("formControlSelectedDateValue", function ViewEditComponent_app_date_time_range_picker_30_Template_app_date_time_range_picker_formControlSelectedDateValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r7.SelectedDateEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControlFromDateNameValue", ctx_r0.filterForm);
  }
}

function ViewEditComponent_app_date_time_range_picker_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-date-time-range-picker", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("formControlSelectedDateValue", function ViewEditComponent_app_date_time_range_picker_31_Template_app_date_time_range_picker_formControlSelectedDateValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r9.SelectedDateEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControlFromDateNameValue", ctx_r1.filterForm);
  }
}

function ViewEditComponent_mat_option_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const tz_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", tz_r11.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", tz_r11.viewValue, " ");
  }
}

function ViewEditComponent_mat_option_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const member_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", member_r12.member_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", member_r12.full_name, " ");
  }
}

function ViewEditComponent_div_53_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li")(1, "a", 54)(2, "mat-checkbox", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function ViewEditComponent_div_53_li_4_Template_mat_checkbox_change_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r17);
      const col_r14 = restoredCtx.$implicit;
      const i_r15 = restoredCtx.index;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r16.OnColumnToggle(col_r14, i_r15, $event.checked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const col_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", col_r14.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", col_r14.label, " ");
  }
}

function ViewEditComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 49)(1, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ul", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, ViewEditComponent_div_53_li_4_Template, 4, 2, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r4.cols);
  }
}

function ViewEditComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}

const _c0 = function (a0) {
  return {
    "active": a0
  };
};

let ViewEditComponent = /*#__PURE__*/(() => {
  class ViewEditComponent {
    constructor(matDialog, fb, activatedRoute, masterService, organizationService) {
      this.matDialog = matDialog;
      this.fb = fb;
      this.activatedRoute = activatedRoute;
      this.masterService = masterService;
      this.organizationService = organizationService;
      this.viewEditData = {};
      this.timezoneList = [{
        value: 'ist',
        viewValue: 'IST'
      }];
      this.memberList = [{
        value: 'member1',
        viewValue: 'Member 1'
      }];
      this.dailyCols = src_app_core_model_table_header_data_time_sheet_data__WEBPACK_IMPORTED_MODULE_1__.dailyTable;
      this.dailyValue = [{
        project: 'BA',
        projectName: 'ABC',
        todo: 'No To-do',
        activity: '100',
        manual: '0',
        idle: '0',
        duration: '0:00:02',
        time: '3:31 pm - 3:31 pm'
      }, {
        project: 'Development',
        projectName: 'ABC',
        todo: 'No To-do',
        activity: '100',
        manual: '0',
        idle: '0',
        duration: '0:00:02',
        time: '3:31 pm - 3:31 pm'
      }, {
        project: 'Travel',
        projectName: 'ABC',
        todo: 'No To-do',
        activity: '100',
        manual: '0',
        idle: '0',
        duration: '0:00:02',
        time: '3:31 pm - 3:31 pm'
      }];
      this.weeklyValue = [{
        profile: 'BA',
        projectName: 'ABC',
        todo: 'No To-do',
        "Mo 1 Aug": '',
        "Su 7 Aug": '',
        "Su 8 Aug": '3:53:49',
        "Su 9 Aug": '0:34:59',
        "Su 10 Aug": '',
        "Su 11 Aug": '',
        "total": '4:06:59'
      }, {
        profile: 'Development',
        projectName: 'ABC',
        todo: 'No To-do',
        "Mo 1 Aug": '',
        "Su 7 Aug": '',
        "Su 8 Aug": '3:53:49',
        "Su 9 Aug": '',
        "Su 10 Aug": '0:06:22',
        "Su 11 Aug": '',
        "total": '4:00:11'
      }, {
        profile: 'Travel',
        projectName: 'ABC',
        todo: 'No To-do',
        "Mo 1 Aug": '3:53:49',
        "Su 7 Aug": '',
        "Su 8 Aug": '3:53:49',
        "Su 9 Aug": '1:34:59',
        "Su 10 Aug": '',
        "Su 11 Aug": '',
        "total": '7:22:11'
      }];
      this.actionMenuDaily = [{
        label: 'Edit Time  Enter',
        event: 'editTime'
      }, {
        label: 'Split Time Enter',
        event: 'splitTimeEnter'
      }, {
        label: 'Delete Time Enter',
        event: 'deleteTimeEnter'
      }];
      this.displayFilter = false;
      this.showDownload = false;
      this.calendarOptions = {
        headerToolbar: false,
        hiddenDays: [0],
        initialView: 'timeGridWeek',
        allDaySlot: false,
        slotDuration: '00:60:00',
        dayHeaderFormat: this.dayHeaderFormatUsingMoment,
        initialEvents: [{
          id: '1',
          title: 'BA',
          start: '2022-07-24T13:04:00',
          end: '2022-07-24T13:34:00',
          color: '#10C2A5'
        }, {
          id: '2',
          title: 'Timed event',
          start: '2022-07-25T13:00:00',
          end: '2022-07-25T13:06:00',
          color: '#C29F3F'
        }, {
          id: '3',
          title: 'Travel',
          start: '2022-07-21T14:00:00',
          end: '2022-07-21T14:53:00',
          color: '#FE6600'
        }, {
          id: '4',
          title: 'Travel',
          start: '2022-07-23T14:00:00',
          end: '2022-07-23T14:53:00',
          color: '#FE6600'
        }, {
          id: '5',
          title: 'Long Event',
          start: '2022-07-24T14:04:00',
          end: '2022-07-24T14:34:00',
          color: '#FE6600'
        }, {
          id: '6',
          title: 'Development',
          start: '2022-07-23T15:00:00',
          end: '2022-07-23T15:53:00',
          color: '#C29F3F'
        }, {
          id: '7',
          title: 'Development',
          start: '2022-07-23T16:00:00',
          end: '2022-07-23T16:53:00',
          color: '#10C2A5'
        }] // validRange: this.SetDynamicDateRange

      };
      this.membersListResponse = {};
      this.cols = [];
      this.dailyTableShowCols = [];
      this.weeklyCols = [];
      this.totalDays = [];
      this.membersListArray = [];
      this.pickerType = 'daily';
      this.organizationDetails = {};
      this.currentFragment = 'daily';
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.filterForm = this.fb.group({
        fromDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
        toDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
        timeZone: [''],
        member: ['']
      });
      this.dailyTableShowCols = this.dailyCols;
      this.cols = this.dailyCols.slice(2);
      this.GetMember();
      this.activatedRoute.fragment.subscribe(fragment => {
        if (this.currentFragment == 'weekly') {
          this.currentFragment = fragment;
          this.WeeklyTab(this.currentFragment);
        }
      });
    }

    GetMember() {
      this.masterService.showSpppiner();
      this.organizationService.GetOrganizationMember(this.organizationDetails['_id'], 1, 10).subscribe(response => {
        if (response && response.ReturnCode == 200) {
          this.membersListResponse = response;

          if (this.membersListResponse && this.membersListResponse['Data'].length > 0) {
            this.membersListArray = this.membersListResponse['Data'];
          }

          this.masterService.hideSppiner();
        } else {
          this.masterService.hideSppiner();
        }
      }, error => {
        this.masterService.hideSppiner();
        this.masterService.showError(error.error.ReturnMsg, '');
      });
    }

    startAndEndOfWeek(date) {
      var now = date ? new Date(date) : new Date();
      let startOfWeek = moment__WEBPACK_IMPORTED_MODULE_0__(now).clone().startOf('isoWeek');
      let endOfWeek = moment__WEBPACK_IMPORTED_MODULE_0__(now).clone().endOf('isoWeek');
      return [startOfWeek, endOfWeek];
    }

    OnColumnToggle(col, indexElement, event) {
      this.dailyTableShowCols = this.masterService.OnColumnToggle(col, indexElement, event, this.dailyCols, this.dailyTableShowCols, 2);
    }

    SetDynamicDateRange(currentDate) {
      let fdate = this.filterForm ? this.filterForm.value.fromDate.valueOf() : currentDate.valueOf();
      let tdate = this.filterForm ? this.filterForm.value.toDate.valueOf() : currentDate.valueOf();
      var startDate = new Date(fdate);
      var endDate = new Date(tdate);
      startDate.setDate(startDate.getDate() - 1);
      endDate.setDate(endDate.getDate() + 2);
      return {
        start: startDate,
        end: endDate
      };
    }

    dayHeaderFormatUsingMoment(info) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(info.date.marker).format("dd D MMM "); //output :  Tu 21 July
    }

    TabClick(type) {
      if (type == 'daily') {
        this.pickerType = type;
        this.showDownload = false;
        this.filterForm.patchValue({
          fromDate: new Date(),
          toDate: new Date()
        });
        this.SelectedDateEvent(this.filterForm.value);
      } else if (type == 'weekly') {
        this.WeeklyTab(type);
        this.showDownload = true;
      } else {
        window.dispatchEvent(new Event('resize'));
        this.showDownload = true;
      }
    }

    WeeklyTab(type) {
      this.pickerType = type;
      let currentWeekDays = this.startAndEndOfWeek(moment__WEBPACK_IMPORTED_MODULE_0__());
      this.filterForm.patchValue({
        fromDate: currentWeekDays[0],
        toDate: currentWeekDays[1]
      });
      this.SelectedDateEvent(this.filterForm.value);
      this.SetWeeklyTableCols();
    }

    SelectedDateEvent(event) {
      let fromDate = event.fromDate ? event.fromDate : event.startDate._d;
      let toDate = event.toDate ? event.toDate : event.endDate._d;

      if (this.pickerType == 'weekly') {
        if (fromDate && toDate) {
          this.filterForm.patchValue({
            fromDate: fromDate,
            toDate: toDate
          });
        }

        this.SetWeeklyTableCols();
      } else if (this.pickerType == 'daily') {
        if (fromDate && toDate) {
          this.filterForm.removeControl('date');
          this.filterForm.patchValue({
            fromDate: fromDate,
            toDate: toDate
          });
        }
      } // this.SetDynamicDateRange(this.filterForm.value)

    }

    SetWeeklyTableCols() {
      this.weeklyCols = [];
      this.totalDays = [];
      let startDate = new Date(this.filterForm.value.fromDate);
      let endDate = new Date(this.filterForm.value.toDate);
      const sYear = new Date(startDate).getFullYear();
      const sMonth = new Date(startDate).getMonth();
      const sDate = new Date(sYear, sMonth, new Date(startDate).getDate());
      const eYear = new Date(endDate).getFullYear();
      const eMonth = new Date(endDate).getMonth();
      const eDate = new Date(eYear, eMonth, new Date(endDate).getDate());

      while (sDate <= eDate) {
        this.totalDays.push(new Date(sDate));
        sDate.setDate(sDate.getDate() + 1);
      }

      this.weeklyCols.push({
        key: 'profile',
        label: '',
        config: {
          isProfileWithLetter: true,
          isProject_todo: true
        }
      });
      this.totalDays.forEach((item, index) => {
        let object = {
          key: moment__WEBPACK_IMPORTED_MODULE_0__(item).format("dd D MMM"),
          label: moment__WEBPACK_IMPORTED_MODULE_0__(item).format("dd D MMM"),
          config: {
            isTime: true,
            isPlusIcon: true
          }
        };
        this.weeklyCols.push(object);
      });
      this.weeklyCols.push({
        key: 'total',
        label: 'Total',
        config: {
          isText: true
        }
      });
    }

    TdClickEvent(item) {
      this.viewEditData = item.element;

      if (item.event == 'editTime') {
        this.ShowAddTimeDialog(item);
      } else if (item.event == 'splitTimeEnter') {
        this.ShowTimeSplitDialog(item);
      } else if (item.event == 'deleteTimeEnter') {
        this.DeleteSplitDialog(item);
      }
    }

    ShowFilterDialog() {
      const filterDialog = this.matDialog.open(src_app_shared_pop_up_model_timesheet_filter_model_timesheet_filter_model_component__WEBPACK_IMPORTED_MODULE_5__.TimesheetFilterModelComponent, {
        width: '440px'
      });
    }

    ShowTimeSplitDialog(event) {
      const splitTime = this.matDialog.open(src_app_shared_pop_up_model_time_sheet_split_time_time_sheet_split_time_component__WEBPACK_IMPORTED_MODULE_3__.TimeSheetSplitTimeComponent, {
        width: '675px'
      });
    }

    DeleteSplitDialog(event) {
      const deleteDialog = this.matDialog.open(src_app_shared_pop_up_model_time_sheet_split_delete_time_sheet_split_delete_component__WEBPACK_IMPORTED_MODULE_2__.TimeSheetSplitDeleteComponent, {
        width: '675px'
      });
    }

    ShowAddTimeDialog(data) {
      const addTimeDialog = this.matDialog.open(src_app_shared_pop_up_model_timesheet_add_time_model_timesheet_add_time_model_component__WEBPACK_IMPORTED_MODULE_4__.TimesheetAddTimeModelComponent, {
        width: '675px',
        data: data
      });
    }

  }

  ViewEditComponent.ɵfac = function ViewEditComponent_Factory(t) {
    return new (t || ViewEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_6__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_organization_service__WEBPACK_IMPORTED_MODULE_7__.OrganizationService));
  };

  ViewEditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: ViewEditComponent,
    selectors: [["app-view-edit"]],
    decls: 97,
    vars: 25,
    consts: [[1, "white_box", "main_content"], [1, "top_title_wrap"], [1, "row", "align-items-center"], [1, "col-md-4"], [1, "mb-0"], [1, "nav", "nav-tabs", "common_tabs", "flex-nowrap"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#daily", 1, "nav-link", 3, "ngClass", "click"], ["data-bs-toggle", "tab", "href", "#weekly", 1, "nav-link", 3, "ngClass", "click"], ["data-bs-toggle", "tab", "href", "#calendar", 1, "nav-link", 3, "ngClass", "click"], [1, "settings_btn", "text-end"], ["routerLink", "/settings/features/timesheets"], [1, "fa-solid", "fa-gear"], [1, "row"], [3, "formGroup"], [1, "row", "align-items-end", "mb-5"], [1, "col-md-6"], [1, "filterForm_wrap"], [1, "calender_wrap_in", "me-3"], [3, "formControlFromDateNameValue", "formControlSelectedDateValue", 4, "ngIf"], ["type", "weekly", 3, "formControlFromDateNameValue", "formControlSelectedDateValue", 4, "ngIf"], [1, "ist_wrap"], ["appearance", "fill"], ["formControlName", "timeZone", "name", "timezone"], [3, "value", 4, "ngFor", "ngForOf"], [1, "filterForm_wrap_rigth"], [1, "me-3", "member_wrap"], ["formControlName", "member", "name", "member"], [1, "btn_dark_border", 3, "click"], [1, "d-flex", "justify-content-between", "mb-3", "align-items-center"], [1, "d-flex"], ["class", "dropdown", 4, "ngIf"], [4, "ngIf"], [1, "btn_blue_border", 3, "click"], [1, "tab-content"], ["id", "daily", 1, "tab-pane", 3, "ngClass"], [1, "timesheet_table_wrap"], [3, "tableColsDetails", "tableDataArray", "actionMenu", "tdClickEmitter"], ["id", "weekly", 1, "tab-pane", 3, "ngClass"], [1, "holiday_wrap", "mb-3"], [1, "col-sm-6"], ["page", "viewEditWeekly", 3, "tableColsDetails", "tableDataArray", "tdClickEmitter"], ["id", "calendar", 1, "tab-pane", 3, "ngClass"], [1, "celender_wrap"], [3, "options"], ["calendarEl", ""], [3, "formControlFromDateNameValue", "formControlSelectedDateValue"], ["type", "weekly", 3, "formControlFromDateNameValue", "formControlSelectedDateValue"], [3, "value"], [1, "dropdown"], ["data-toggle", "dropdown", "type", "button", "id", "dropdownMenuButton1", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn_round_gray", "me-3"], [1, "fa-solid", "fa-table-cells-large"], ["aria-labelledby", "dropdownMenuButton1", 1, "dropdown-menu"], [4, "ngFor", "ngForOf"], [1, "dropdown-item"], [3, "checked", "change"], [1, "btn_round_gray", "me-3"], [1, "fa", "fa-download"]],
    template: function ViewEditComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "View & Edit Timesheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 3)(8, "ul", 5)(9, "li", 6)(10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewEditComponent_Template_a_click_10_listener() {
          return ctx.TabClick("daily");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Daily");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "li", 6)(13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewEditComponent_Template_a_click_13_listener() {
          return ctx.TabClick("weekly");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "Weekly");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "li", 6)(16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewEditComponent_Template_a_click_16_listener() {
          return ctx.TabClick("calendar");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "Calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 3)(19, "div", 10)(20, "a", 11)(21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, " Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "div", 13)(25, "form", 14)(26, "div", 15)(27, "div", 16)(28, "div", 17)(29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, ViewEditComponent_app_date_time_range_picker_30_Template, 1, 1, "app-date-time-range-picker", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](31, ViewEditComponent_app_date_time_range_picker_31_Template, 1, 1, "app-date-time-range-picker", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 21)(33, "mat-form-field", 22)(34, "mat-select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](35, ViewEditComponent_mat_option_35_Template, 2, 2, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "div", 16)(37, "div", 25)(38, "div", 26)(39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40, "Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "mat-form-field", 22)(42, "mat-select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](43, ViewEditComponent_mat_option_43_Template, 2, 2, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "div")(45, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewEditComponent_Template_button_click_45_listener() {
          return ctx.ShowFilterDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "div", 29)(49, "div")(50, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51, "Today: 0:34:59");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](53, ViewEditComponent_div_53_Template, 5, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](54, ViewEditComponent_div_54_Template, 3, 0, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewEditComponent_Template_button_click_55_listener() {
          return ctx.ShowAddTimeDialog("Add");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](57, "Add Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "div", 34)(59, "div", 35)(60, "div", 36)(61, "TrackerX-dynamic-table", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("tdClickEmitter", function ViewEditComponent_Template_TrackerX_dynamic_table_tdClickEmitter_61_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](62, "div", 38)(63, "div")(64, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](65, "Time Off And Holidays");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "div", 39)(67, "div", 13)(68, "div", 40)(69, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](70, "ABC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](72, "8:00:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](73, "div", 40)(74, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](75, "Date: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](77, "Mo, June 21, 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](78, "div", 39)(79, "div", 13)(80, "div", 40)(81, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](82, "ABC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](83, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](84, "8:00:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](85, "div", 40)(86, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](87, "Date: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](88, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](89, "We, June 23, 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](90, "TrackerX-dynamic-table", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("tdClickEmitter", function ViewEditComponent_Template_TrackerX_dynamic_table_tdClickEmitter_90_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](91, "div", 42)(92, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](93, "Time Off And Holidays");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](94, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](95, "full-calendar", 44, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](19, _c0, ctx.currentFragment === "daily"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](21, _c0, ctx.currentFragment === "weekly"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](23, _c0, ctx.currentFragment === "calendar"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.pickerType == "daily");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.pickerType == "weekly");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.timezoneList);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.membersListArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.showDownload);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.showDownload);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx.currentFragment == "daily" ? "active" : "fade");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("tableColsDetails", ctx.dailyTableShowCols)("tableDataArray", ctx.dailyValue)("actionMenu", ctx.actionMenuDaily);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx.currentFragment == "weekly" ? "active" : "fade");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("tableColsDetails", ctx.weeklyCols)("tableDataArray", ctx.weeklyValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx.currentFragment == "calendar" ? "active" : "fade");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("options", ctx.calendarOptions);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_16__.FullCalendarComponent, _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_8__.DynamicTableComponent, _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_9__.DateTimeRangePickerComponent, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__.LoaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckbox],
    styles: [".filterForm_wrap[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.filterForm_wrap[_ngcontent-%COMP%]   .ist_wrap[_ngcontent-%COMP%] {\r\n  min-width: 200px;\r\n}\r\n\r\n.filterForm_wrap[_ngcontent-%COMP%]   .calender_wrap_in[_ngcontent-%COMP%] {\r\n  min-width: 350px;\r\n}\r\n\r\n.filterForm_wrap_rigth[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: flex-end;\r\n  flex-wrap: wrap;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.filterForm_wrap_rigth[_ngcontent-%COMP%]   .member_wrap[_ngcontent-%COMP%] {\r\n  min-width: 200px;\r\n}\r\n\r\n.holiday_wrap[_ngcontent-%COMP%] {\r\n  padding: 16px;\r\n  border: 1px solid #E8E8E8;\r\n  border-radius: 10px;\r\n}\r\n\r\n.holiday_wrap[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  line-height: 15px;\r\n  letter-spacing: 0.01em;\r\n  color: var(--dark-blue);\r\n}\r\n\r\n.holiday_wrap[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #999;\r\n}\r\n\r\n.holiday_wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  line-height: 16px;\r\n  font-weight: 900;\r\n}\r\n\r\n.holiday_wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n}\r\n\r\n  .fc .fc-timegrid-slot {\r\n  height: 3em !important;\r\n}"]
  });
  return ViewEditComponent;
})();

/***/ })

}]);