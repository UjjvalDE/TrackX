"use strict";
(self["webpackChunktracker"] = self["webpackChunktracker"] || []).push([[435],{

/***/ 13288:
/*!***********************************************************!*\
  !*** ./src/app/core/model/table-header-data/financial.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEditInvoicesTable": () => (/* binding */ addEditInvoicesTable),
/* harmony export */   "approvedTimesheetsAction": () => (/* binding */ approvedTimesheetsAction),
/* harmony export */   "approvedTimesheetsTable": () => (/* binding */ approvedTimesheetsTable),
/* harmony export */   "expencesTable": () => (/* binding */ expencesTable),
/* harmony export */   "invoiceTable": () => (/* binding */ invoiceTable),
/* harmony export */   "invoiceTableAction": () => (/* binding */ invoiceTableAction),
/* harmony export */   "pastPaymentDetailTable": () => (/* binding */ pastPaymentDetailTable),
/* harmony export */   "pastPaymentsAction": () => (/* binding */ pastPaymentsAction),
/* harmony export */   "pastPaymentsTable": () => (/* binding */ pastPaymentsTable),
/* harmony export */   "payForHoursAction": () => (/* binding */ payForHoursAction),
/* harmony export */   "payForHoursTable": () => (/* binding */ payForHoursTable)
/* harmony export */ });
let invoiceTable = [{
  key: '',
  label: '',
  config: {
    isCheckbox: true
  }
}, {
  key: 'invoice',
  label: 'Invoice',
  config: {
    isText: true
  }
}, {
  key: 'client',
  label: 'Client',
  config: {
    isText: true
  }
}, {
  key: 'issueDate',
  label: 'Issue Date',
  config: {
    isDate: true
  }
}, {
  key: 'daysOld',
  label: 'Days Old',
  config: {
    isText: true
  }
}, {
  key: 'total',
  label: 'Total',
  config: {
    isCurrency: true
  }
}, {
  key: 'paid',
  label: 'Paid',
  config: {
    isCurrency: true
  }
}, {
  key: 'status',
  label: 'Status',
  config: {
    isStatus: true
  }
}, {
  key: 'action',
  label: '',
  config: {
    isAction: true
  }
}];
let addEditInvoicesTable = [{
  key: 'toggler',
  label: ''
}, {
  key: 'description',
  type: 'text',
  label: 'Description'
}, {
  key: 'qty',
  type: 'number',
  label: 'Qty'
}, {
  key: 'unitPrice',
  type: 'number',
  label: 'Unit Price'
}, {
  key: 'amount',
  label: 'Amount'
}, {
  key: 'tax1',
  label: 'Tax 1',
  type: 'switch'
}, {
  key: 'tax2',
  label: 'Tax 2',
  type: 'switch'
}, {
  key: 'discount',
  label: 'Discount',
  type: 'switch'
}, {
  key: 'delete',
  label: 'Action'
}];
let expencesTable = [{
  label: 'Member',
  key: 'member',
  config: {
    isProfile: true
  }
}, {
  label: 'Date',
  key: 'date',
  config: {
    isDate: true
  }
}, {
  label: 'Description',
  key: 'description',
  config: {
    isText: true
  }
}, {
  label: 'Amount',
  key: 'amount',
  config: {
    isCurrency: true
  }
}, {
  label: 'Category',
  key: 'category',
  config: {
    isCategory: true
  }
}, {
  label: 'Project',
  key: 'project',
  config: {
    isProfileWithLetter: true
  }
}, {
  label: 'Status',
  key: 'status',
  config: {
    isStatus: true
  }
}, {
  label: 'Action',
  key: 'action',
  config: {
    isAction: true
  }
}];
let payForHoursTable = [{
  label: 'Team Member',
  key: 'teamMember',
  config: {
    isProfile: true
  }
}, {
  label: 'Current Rate',
  key: 'currentRate',
  config: {
    isText: true
  }
}, {
  label: 'Unpaid Amount',
  key: 'unpaidAmount',
  config: {
    isText: true
  }
}, {
  label: 'Unpaid Hours',
  key: 'unpaidHours',
  config: {
    isText: true
  }
}, {
  label: '',
  key: '',
  config: {
    isAction: true
  }
}];
let approvedTimesheetsTable = [{
  label: '',
  key: '',
  config: {
    isCheckbox: true
  }
}, {
  label: 'Team Member',
  key: 'teamMember',
  config: {
    isProfile: true
  }
}, {
  label: 'Pay Period',
  key: 'payPeriod',
  config: {
    isText: true
  }
}, {
  label: 'Cuurrent Rate',
  key: 'cuurrentRate',
  config: {
    isText: true
  }
}, {
  label: 'Unpaid Amount',
  key: 'unpaidAmount',
  config: {
    isCurrency: true
  }
}, {
  label: 'Unpaid Hours',
  key: 'unpaidHours',
  config: {
    isText: true
  }
}, {
  label: 'Action',
  key: '',
  config: {
    isAction: true
  }
}];
let pastPaymentsTable = [{
  label: 'Pay Dates',
  key: 'payDates',
  config: {
    isText: true
  }
}, {
  label: 'Payees',
  key: 'payees',
  config: {
    isText: true,
    isHeaderInfoIcon: true,
    isHeaderInfoIconDetails: 'Shows the total number of members in this payment'
  }
}, {
  label: 'Amount',
  key: 'amount',
  config: {
    isText: true
  }
}, {
  label: 'Status',
  key: 'status',
  config: {
    isStatus: true
  }
}, {
  label: 'Paid On',
  key: 'paidOn',
  config: {
    isText: true
  }
}, {
  label: 'Created By',
  key: 'createdBy',
  config: {
    isText: true
  }
}, {
  label: 'Created On',
  key: 'createdOn',
  config: {
    isText: true
  }
}, {
  label: 'Action',
  key: 'action',
  config: {
    isAction: true
  }
}];
let pastPaymentDetailTable = [{
  label: 'Member',
  key: 'member',
  config: {
    isProfile: true
  }
}, {
  label: 'Rate Type',
  key: 'rateType',
  config: {
    isText: true
  }
}, {
  label: 'Hours',
  key: 'hours',
  config: {
    isText: true
  }
}, {
  label: 'Status',
  key: 'status',
  config: {
    isStatus: true
  }
}, {
  label: 'Amount',
  key: 'amount',
  config: {
    isText: true
  }
}]; //action menu

let invoiceTableAction = [{
  label: 'Record Payment',
  event: 'recordPayment',
  config: {
    isShow: true
  }
}, {
  label: 'Edit Invoice',
  event: 'editInvoice',
  config: {
    isShow: true
  }
}, {
  label: 'Delete Invoice',
  event: 'deleteInvoice',
  config: {
    isShow: true
  }
}];
let payForHoursAction = [{
  label: 'Edit Pay Rate',
  event: 'editPayRate',
  config: {
    isShow: true
  }
}];
let approvedTimesheetsAction = [{
  label: 'Edit Pay Rate',
  event: 'editPayRate',
  config: {
    isShow: true
  }
}, {
  label: 'Pay',
  event: 'pay',
  config: {
    isShow: true
  }
}];
let pastPaymentsAction = [{
  label: 'View',
  event: 'viewPayments',
  config: {
    isShow: true
  }
}, {
  label: 'Export/Pay',
  event: 'Export_Pay',
  config: {
    isShow: true
  }
}];

/***/ }),

/***/ 28079:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/financials/add-edit-invoice/add-edit-invoice.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddEditInvoiceComponent": () => (/* binding */ AddEditInvoiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_app_core_model_table_header_data_financial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/financial */ 13288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ 99602);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ 90455);













function AddEditInvoiceComponent_ng_template_66_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const col_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](col_r6.label);
  }
}

function AddEditInvoiceComponent_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddEditInvoiceComponent_ng_template_66_th_1_Template, 3, 1, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", columns_r4);
  }
}

function AddEditInvoiceComponent_ng_template_67_tr_0_td_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}

function AddEditInvoiceComponent_ng_template_67_tr_0_td_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span")(1, "mat-form-field", 49)(2, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddEditInvoiceComponent_ng_template_67_tr_0_td_1_span_2_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);
      const cols_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.addNewRow(cols_r14.key, i_r12));
    })("input", function AddEditInvoiceComponent_ng_template_67_tr_0_td_1_span_2_Template_input_input_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);
      const cols_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r25.inputChange(cols_r14.key, i_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const cols_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", cols_r14.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", cols_r14.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Enter valid ", cols_r14.label, "");
  }
}

function AddEditInvoiceComponent_ng_template_67_tr_0_td_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 64)(1, "mat-form-field", 49)(2, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AddEditInvoiceComponent_ng_template_67_tr_0_td_1_span_3_Template_input_input_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);
      const cols_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r29.inputChange(cols_r14.key, i_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const cols_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", cols_r14.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", cols_r14.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Enter valid ", cols_r14.label, "");
  }
}

function AddEditInvoiceComponent_ng_template_67_tr_0_td_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span")(1, "mat-slide-toggle", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddEditInvoiceComponent_ng_template_67_tr_0_td_1_span_4_Template_mat_slide_toggle_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);
      const cols_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r34.inputChange(cols_r14.key, i_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const cols_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", cols_r14.key);
  }
}

function AddEditInvoiceComponent_ng_template_67_tr_0_td_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span")(1, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditInvoiceComponent_ng_template_67_tr_0_td_1_span_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41);
      const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r39.inviceDetailDelete(i_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}

function AddEditInvoiceComponent_ng_template_67_tr_0_td_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r20.invoiceForm.controls["invoicesDetails"].value[i_r12].amount), " ");
  }
}

function AddEditInvoiceComponent_ng_template_67_tr_0_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddEditInvoiceComponent_ng_template_67_tr_0_td_1_span_1_Template, 3, 0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddEditInvoiceComponent_ng_template_67_tr_0_td_1_span_2_Template, 5, 3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddEditInvoiceComponent_ng_template_67_tr_0_td_1_span_3_Template, 5, 3, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AddEditInvoiceComponent_ng_template_67_tr_0_td_1_span_4_Template, 2, 1, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AddEditInvoiceComponent_ng_template_67_tr_0_td_1_span_5_Template, 3, 0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AddEditInvoiceComponent_ng_template_67_tr_0_td_1_span_6_Template, 3, 3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const cols_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", cols_r14.key == "toggler");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", cols_r14.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", cols_r14.type == "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", cols_r14.type == "switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", cols_r14.key == "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", cols_r14.key == "amount");
  }
}

function AddEditInvoiceComponent_ng_template_67_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddEditInvoiceComponent_ng_template_67_tr_0_td_1_Template, 7, 6, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r12 = ctx.index;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const index_r9 = ctx_r43.rowIndex;
    const columns_r8 = ctx_r43.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r12)("pReorderableRow", index_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", columns_r8);
  }
}

function AddEditInvoiceComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AddEditInvoiceComponent_ng_template_67_tr_0_Template, 2, 3, "tr", 58);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.details().controls);
  }
}

const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};

let AddEditInvoiceComponent = /*#__PURE__*/(() => {
  class AddEditInvoiceComponent {
    constructor(formBuilder, router) {
      this.formBuilder = formBuilder;
      this.router = router;
      this.isInvoiceFormSubmitted = true;
      this.allData = [{
        description: '',
        qty: '',
        unitPrice: '',
        amount: '',
        tax1: '',
        tax2: '',
        discount: ''
      }];
      this.addEditInvoicesTableCols = src_app_core_model_table_header_data_financial__WEBPACK_IMPORTED_MODULE_0__.addEditInvoicesTable;
    }

    ngOnInit() {
      this.invoiceForm = this.formBuilder.group({
        invoiceNumber: ['', []],
        issueDate: [new Date(), []],
        poNumber: ['', []],
        dueDate: ['', []],
        invoicesDetails: this.formBuilder.array([]),
        notes: ['', []],
        total: [0, []],
        tax1: [0, []],
        tax2: [0, []],
        discount: [0, []],
        grandTotal: [0, []]
      });
      this.details().push(this.newdetail());
    }

    get invoiceFormVal() {
      return this.invoiceForm.controls;
    }

    newdetail() {
      return this.formBuilder.group({
        description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        qty: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        unitPrice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        amount: ['', []],
        tax1: [false, []],
        tax2: [false, []],
        discount: [false, []]
      });
    }

    details() {
      return this.invoiceForm.get("invoicesDetails");
    }

    addItems() {
      this.details().push(this.newdetail());
    }

    addNewRow(key, index) {
      if (key == 'description' && this.invoiceForm.controls['invoicesDetails'].value[index].description !== '') {
        if (this.invoiceForm.controls['invoicesDetails'].value.length - 1 == index) {
          this.addItems();
        }
      }
    }

    inputChange(key, index) {
      let amount; // = 0

      let qty = this.invoiceForm.controls['invoicesDetails'].value[index].qty;
      let unitprice = this.invoiceForm.controls['invoicesDetails'].value[index].unitPrice;
      let totalValue = this.invoiceForm.controls['total'].value;
      let tax1Per = this.invoiceForm.controls['tax1'].value;
      let tax2Per = this.invoiceForm.controls['tax2'].value;
      let discountPer = this.invoiceForm.controls['discount'].value;
      let grandTotal = 0;
      totalValue = 0;
      amount = qty * unitprice;
      this.invoiceForm.controls['invoicesDetails'].value[index].amount = amount;
      this.invoiceForm.controls['invoicesDetails'].value.forEach((element, index) => {
        totalValue = totalValue + element.amount;
        amount = element.qty * element.unitPrice;
        let tax1Amount = 0;
        let tax2Amount = 0;
        let discountAmount = 0;

        if (element.tax1) {
          tax1Amount = element.amount * tax1Per / 100;
        }

        ;

        if (element.tax2) {
          tax2Amount = element.amount * tax2Per / 100;
        }

        ;

        if (element.discount) {
          discountAmount = element.amount * discountPer / 100;
        }

        ;
        let elementTotal = amount + (tax1Amount + tax2Amount) - discountAmount;
        grandTotal = grandTotal + elementTotal;
      });
      this.invoiceForm.patchValue({
        total: totalValue,
        grandTotal: grandTotal
      });
    }

    inviceDetailDelete(index) {
      this.details().removeAt(index);
      this.inputChange('delete', index);
    }

    cancleClick() {
      this.router.navigate(['/financials/invoices']);
    }

  }

  AddEditInvoiceComponent.ɵfac = function AddEditInvoiceComponent_Factory(t) {
    return new (t || AddEditInvoiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };

  AddEditInvoiceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AddEditInvoiceComponent,
    selectors: [["app-add-edit-invoice"]],
    decls: 134,
    vars: 26,
    consts: [[1, "white_box", "main_content"], [1, "top_title_wrap"], [1, "row", "align-items-center"], [1, "col-md-4"], [1, "mb-0"], [1, "col-md-8"], [1, "settings_btn", "text-end"], [1, "dropdown", "button_drop"], ["data-toggle", "dropdown", "type", "button", "id", "settingMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "text-secondary"], [1, "fa-solid", "fa-gear"], ["aria-labelledby", "settingMenuButton", 1, "dropdown-menu"], [1, "invoice_top_wrap"], [1, "invoice_top_left"], [1, "main_invoice_form"], [3, "formGroup"], [1, "row", "mb-5"], [1, "col-md-7"], [1, "row"], [1, "mb-3"], ["for", "invoiceNumber"], ["appearance", "fill", 3, "ngClass"], ["type", "text", "disable", "", "matInput", "", "formControlName", "invoiceNumber"], [1, "col-md-5"], ["for", "issueDate"], ["appearance", "fill", 1, "example-full-width", 3, "ngClass"], ["matInput", "", "formControlName", "issueDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["issueDate", ""], ["for", "poNumber"], ["type", "text", "matInput", "", "formControlName", "poNumber", "id", "poNumber"], ["for", "dueDate"], ["matInput", "", "formControlName", "dueDate", 3, "matDatepicker"], ["dueDate", ""], [1, "invoice_table_wrap", "mb-5"], ["formArrayName", "invoicesDetails", 3, "columns", "value", "reorderableColumns"], ["pTemplate", "header", "stickyHeader", "true"], ["pTemplate", "body"], [1, "col-md-6"], ["type", "button", 1, "btn_blue", "me-3", 3, "click"], ["type", "button", 1, "btn_dark_border"], [1, "note_wrap", "mt-5"], ["for", "notes"], ["appearance", "fill"], ["formControlName", "notes", "matInput", "", "id", "notes", "cols", "30", "rows", "20"], [1, "invoice_total_wrap"], [1, "invoice_total_wrap_inner"], [1, "col-2"], [1, "col-10"], [1, "m-0"], ["appearance", "outline"], ["type", "text", "matInput", "", "formControlName", "tax1", 3, "input"], ["type", "text", "matInput", "", "formControlName", "tax2", 3, "input"], ["type", "text", "matInput", "", "formControlName", "discount", 3, "input"], [1, "text-end", "mt-4"], ["type", "button", 1, "btn_dark_border", 3, "click"], ["type", "button", 1, "ms-3", "btn_blue_border"], ["type", "button", 1, "ms-3", "btn_blue"], [4, "ngFor", "ngForOf"], [3, "formGroupName", "pReorderableRow", 4, "ngFor", "ngForOf"], [3, "formGroupName", "pReorderableRow"], [4, "ngIf"], ["class", "quantity_input", 4, "ngIf"], ["src", "../../../../assets/images/icon/drag.svg", "alt", "", 1, "drag_img", 3, "pReorderableRowHandle"], ["type", "text", "matInput", "", 3, "formControlName", "placeholder", "change", "input"], [1, "quantity_input"], ["type", "number", "matInput", "", 3, "formControlName", "placeholder", "input"], [1, "example-margin", 3, "formControlName", "change"], ["type", "button", 1, "trash_btn", 3, "click"], ["src", "../../../../assets/images/icon/trash.svg", "alt", ""]],
    template: function AddEditInvoiceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Invoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "a", 8)(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div")(16, "div", 11)(17, "ul")(18, "li")(19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Ravi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13)(29, "form", 14)(30, "div", 15)(31, "div", 16)(32, "div", 17)(33, "div", 16)(34, "div", 18)(35, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Invoice Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 22)(40, "div", 18)(41, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Issue Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 25)(45, "mat-datepicker-toggle", 26)(46, "mat-datepicker", null, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 16)(49, "div", 18)(50, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "PO Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 22)(55, "div", 18)(56, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Due Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 31)(60, "mat-datepicker-toggle", 26)(61, "mat-datepicker", null, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div")(64, "div", 33)(65, "p-table", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, AddEditInvoiceComponent_ng_template_66_Template, 2, 1, "ng-template", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, AddEditInvoiceComponent_ng_template_67_Template, 1, 1, "ng-template", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 17)(69, "div", 37)(70, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditInvoiceComponent_Template_button_click_70_listener() {
          return ctx.addItems();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Add Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 39)(73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Generate Line Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 40)(76, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Notes (Shown On Invoices)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "textarea", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 37)(81, "div", 44)(82, "div", 45)(83, "div", 2)(84, "div", 46)(85, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 47)(88, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](90, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 45)(92, "div", 2)(93, "div", 46)(94, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Tax 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 47)(97, "mat-form-field", 49)(98, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AddEditInvoiceComponent_Template_input_input_98_listener() {
          return ctx.inputChange("tax1", 0);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 45)(100, "div", 2)(101, "div", 46)(102, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Tax 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 47)(105, "mat-form-field", 49)(106, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AddEditInvoiceComponent_Template_input_input_106_listener() {
          return ctx.inputChange("tax2", 0);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 45)(108, "div", 2)(109, "div", 46)(110, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 47)(113, "mat-form-field", 49)(114, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AddEditInvoiceComponent_Template_input_input_114_listener() {
          return ctx.inputChange("discount", 0);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 45)(116, "div", 2)(117, "div", 46)(118, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Grand Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 47)(121, "p", 48)(122, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](124, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 53)(126, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditInvoiceComponent_Template_button_click_126_listener() {
          return ctx.cancleClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Cancle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "button", 55)(130, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Save As Draft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Save As Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      }

      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](47);

        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](62);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.invoiceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c0, ctx.isInvoiceFormSubmitted && (ctx.invoiceFormVal["invoiceNumber"] == null ? null : ctx.invoiceFormVal["invoiceNumber"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c0, ctx.isInvoiceFormSubmitted && (ctx.invoiceFormVal["issueDate"] == null ? null : ctx.invoiceFormVal["issueDate"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](22, _c0, ctx.isInvoiceFormSubmitted && (ctx.invoiceFormVal["poNumber"] == null ? null : ctx.invoiceFormVal["poNumber"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](24, _c0, ctx.isInvoiceFormSubmitted && (ctx.invoiceFormVal["dueDate"] == null ? null : ctx.invoiceFormVal["dueDate"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx.addEditInvoicesTableCols)("value", ctx.allData)("reorderableColumns", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](90, 14, ctx.invoiceForm.controls["total"].value), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](124, 16, ctx.invoiceForm.controls["grandTotal"].value));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerToggle, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_8__.ReorderableRowHandle, primeng_table__WEBPACK_IMPORTED_MODULE_8__.ReorderableRow, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggle, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe],
    styles: [".invoice_top_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .invoice_top_left[_ngcontent-%COMP%] {\r\n  color: var(--dark-blue);\r\n  min-width: 100px;\r\n  display: inline-block;\r\n}\r\n\r\n.invoice_top_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #999;\r\n  display: inline-block;\r\n}\r\n\r\n.invoice_top_wrap[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.drag_img[_ngcontent-%COMP%] {\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  -webkit-user-drag: none;\r\n}\r\n\r\n  .invoice_table_wrap .p-datatable .p-datatable-thead>tr>th:first-child {\r\n  width: 50px;\r\n}\r\n\r\n  .invoice_table_wrap .p-datatable .p-datatable-thead>tr>th:nth-child(3),   .invoice_table_wrap .p-datatable .p-datatable-thead>tr>th:nth-child(4) {\r\n  width: 130px;\r\n}\r\n\r\n.trash_btn[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  background: transparent;\r\n  padding: 0;\r\n}\r\n\r\n.note_wrap[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  height: 180px;\r\n}\r\n\r\n.invoice_total_wrap_inner[_ngcontent-%COMP%] {\r\n  border-top: 1px solid #E8E8E8;\r\n  padding: 8px 0;\r\n}\r\n\r\n.invoice_total_wrap_inner[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.invoice_total_wrap[_ngcontent-%COMP%]   .invoice_total_wrap_inner[_ngcontent-%COMP%]:last-child {\r\n  border-bottom: 1px solid #E8E8E8;\r\n}\r\n\r\n.invoice_total_wrap_inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n  color: var(--dark-blue);\r\n}"]
  });
  return AddEditInvoiceComponent;
})();

/***/ }),

/***/ 62120:
/*!*****************************************************************!*\
  !*** ./src/app/pages/financials/expenses/expenses.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpensesComponent": () => (/* binding */ ExpensesComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_model_table_header_data_financial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/financial */ 13288);
/* harmony import */ var src_app_shared_pop_up_model_add_edit_expenses_model_add_edit_expenses_model_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/add-edit-expenses-model/add-edit-expenses-model.component */ 31847);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/dynamic-table/dynamic-table.component */ 57834);
/* harmony import */ var _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/date-time-range-picker/date-time-range-picker.component */ 96991);







let ExpensesComponent = /*#__PURE__*/(() => {
  class ExpensesComponent {
    constructor(formBuilder, matDialog) {
      this.formBuilder = formBuilder;
      this.matDialog = matDialog;
      this.expencesTableCols = src_app_core_model_table_header_data_financial__WEBPACK_IMPORTED_MODULE_0__.expencesTable;
      this.expencesTableData = [{
        member: 'Raj',
        date: 'Fri, Jul 9, 2021',
        description: 'Leaning Project',
        amount: '123',
        category: 'Benefits',
        project: 'Development',
        status: 'Uninvoiced',
        cssClass: 'bg-danger',
        cssCategoryClass: 'bg-success'
      }];
    }

    ngOnInit() {
      this.expencesFilterForm = this.formBuilder.group({
        date: ['', []]
      });
    }

    SelectedDateEvent(event) {
      const fromDate = event.fromDate;
      const toDate = event.toDate;

      if (fromDate && toDate) {
        this.expencesFilterForm.removeControl('date');
        this.expencesFilterForm.patchValue({
          fromDate: fromDate,
          todate: toDate
        });
      }
    }

    TdClickEvent(event) {}

    addExpenses() {
      const addEditExpensesDialog = this.matDialog.open(src_app_shared_pop_up_model_add_edit_expenses_model_add_edit_expenses_model_component__WEBPACK_IMPORTED_MODULE_1__.AddEditExpensesModelComponent, {
        height: '900px',
        width: '900px',
        disableClose: true
      });
    }

  }

  ExpensesComponent.ɵfac = function ExpensesComponent_Factory(t) {
    return new (t || ExpensesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog));
  };

  ExpensesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ExpensesComponent,
    selectors: [["app-expenses"]],
    decls: 40,
    vars: 3,
    consts: [[1, "white_box", "main_content"], [1, "top_title_wrap"], [1, "row", "align-items-center"], [1, "col-md-4"], [1, "mb-0"], [1, "col-md-8"], [1, "nav", "nav-tabs", "tab_design_one", "mb-5"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#unInvoiced", 1, "nav-link", "active"], ["data-bs-toggle", "tab", "href", "#invoiced", 1, "nav-link"], ["data-bs-toggle", "tab", "href", "#paid", 1, "nav-link"], ["data-bs-toggle", "tab", "href", "#all", 1, "nav-link"], [1, "row", "mb-5"], [3, "formControlFromDateNameValue", "formControlSelectedDateValue"], [1, "invoice_paid_wrap"], [1, "text_green_gradient"], [1, "text-end", "mb-5"], [1, "btn_blue", 3, "click"], [3, "tableColsDetails", "tableDataArray", "actionMenu", "tdClickEmitter"], [1, "no_expences_box"], [1, "no_expences_box_in", "gray_box"], ["src", "../../../../assets/images/no-expences.png", "alt", "", 1, "mb-3"]],
    template: function ExpensesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Expenses");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div")(8, "ul", 6)(9, "li", 7)(10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Uninvoiced");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "li", 7)(13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Invoiced");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "li", 7)(16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Paid");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "li", 7)(19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 12)(22, "div", 3)(23, "app-date-time-range-picker", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("formControlSelectedDateValue", function ExpensesComponent_Template_app_date_time_range_picker_formControlSelectedDateValue_23_listener($event) {
          return ctx.SelectedDateEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 5)(25, "ul", 14)(26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Total: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "$0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 16)(31, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExpensesComponent_Template_button_click_31_listener() {
          return ctx.addExpenses();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Add Expense");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div")(34, "TrackerX-dynamic-table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("tdClickEmitter", function ExpensesComponent_Template_TrackerX_dynamic_table_tdClickEmitter_34_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 19)(36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "There Are No Expenses");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControlFromDateNameValue", ctx.expencesFilterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tableColsDetails", ctx.expencesTableCols)("tableDataArray", ctx.expencesTableData);
      }
    },
    dependencies: [_shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_2__.DynamicTableComponent, _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_3__.DateTimeRangePickerComponent],
    styles: [".no_expences_box[_ngcontent-%COMP%] {\r\n  margin: 80px 0 0;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.no_expences_box[_ngcontent-%COMP%]   .no_expences_box_in[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n  width: 100%;\r\n  text-align: center;\r\n  border-radius: 10px;\r\n  padding: 40px;\r\n}\r\n\r\n.no_expences_box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: var(--dark-blue);\r\n  font-size: 16px;\r\n}"]
  });
  return ExpensesComponent;
})();

/***/ }),

/***/ 47347:
/*!***************************************************************!*\
  !*** ./src/app/pages/financials/financials-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinancialsRoutingModule": () => (/* binding */ FinancialsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _add_edit_invoice_add_edit_invoice_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-edit-invoice/add-edit-invoice.component */ 28079);
/* harmony import */ var _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expenses/expenses.component */ 62120);
/* harmony import */ var _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoices/invoices.component */ 34598);
/* harmony import */ var _past_payment_detail_past_payment_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./past-payment-detail/past-payment-detail.component */ 50169);
/* harmony import */ var _past_payments_past_payments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./past-payments/past-payments.component */ 5081);
/* harmony import */ var _send_payments_send_payments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./send-payments/send-payments.component */ 4412);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);









const routes = [{
  path: 'expenses',
  component: _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_1__.ExpensesComponent
}, {
  path: 'invoices',
  component: _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_2__.InvoicesComponent
}, {
  path: 'send-payments',
  component: _send_payments_send_payments_component__WEBPACK_IMPORTED_MODULE_5__.SendPaymentsComponent
}, {
  path: 'invoices/new',
  component: _add_edit_invoice_add_edit_invoice_component__WEBPACK_IMPORTED_MODULE_0__.AddEditInvoiceComponent
}, {
  path: 'past-payments',
  component: _past_payments_past_payments_component__WEBPACK_IMPORTED_MODULE_4__.PastPaymentsComponent
}, {
  path: 'past-payments/details/:id',
  component: _past_payment_detail_past_payment_detail_component__WEBPACK_IMPORTED_MODULE_3__.PastPaymentDetailComponent
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'invoices'
}];
let FinancialsRoutingModule = /*#__PURE__*/(() => {
  class FinancialsRoutingModule {}

  FinancialsRoutingModule.ɵfac = function FinancialsRoutingModule_Factory(t) {
    return new (t || FinancialsRoutingModule)();
  };

  FinancialsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: FinancialsRoutingModule
  });
  FinancialsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
  return FinancialsRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](FinancialsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 33435:
/*!*******************************************************!*\
  !*** ./src/app/pages/financials/financials.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinancialsModule": () => (/* binding */ FinancialsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _financials_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./financials-routing.module */ 47347);
/* harmony import */ var _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoices/invoices.component */ 34598);
/* harmony import */ var _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expenses/expenses.component */ 62120);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _add_edit_invoice_add_edit_invoice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit-invoice/add-edit-invoice.component */ 28079);
/* harmony import */ var _send_payments_send_payments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./send-payments/send-payments.component */ 4412);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 99602);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 53626);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ 90455);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button-toggle */ 90811);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var _past_payments_past_payments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./past-payments/past-payments.component */ 5081);
/* harmony import */ var _past_payment_detail_past_payment_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./past-payment-detail/past-payment-detail.component */ 50169);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 94650);






 // material imports








 //primng imports





let FinancialsModule = /*#__PURE__*/(() => {
  class FinancialsModule {}

  FinancialsModule.ɵfac = function FinancialsModule_Factory(t) {
    return new (t || FinancialsModule)();
  };

  FinancialsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: FinancialsModule
  });
  FinancialsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _financials_routing_module__WEBPACK_IMPORTED_MODULE_0__.FinancialsRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule, primeng_table__WEBPACK_IMPORTED_MODULE_15__.TableModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__.MatSlideToggleModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__.MatButtonToggleModule]
  });
  return FinancialsModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](FinancialsModule, {
    declarations: [_invoices_invoices_component__WEBPACK_IMPORTED_MODULE_1__.InvoicesComponent, _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_2__.ExpensesComponent, _add_edit_invoice_add_edit_invoice_component__WEBPACK_IMPORTED_MODULE_4__.AddEditInvoiceComponent, _send_payments_send_payments_component__WEBPACK_IMPORTED_MODULE_5__.SendPaymentsComponent, _past_payments_past_payments_component__WEBPACK_IMPORTED_MODULE_6__.PastPaymentsComponent, _past_payment_detail_past_payment_detail_component__WEBPACK_IMPORTED_MODULE_7__.PastPaymentDetailComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _financials_routing_module__WEBPACK_IMPORTED_MODULE_0__.FinancialsRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule, primeng_table__WEBPACK_IMPORTED_MODULE_15__.TableModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__.MatSlideToggleModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__.MatButtonToggleModule]
  });
})();

/***/ }),

/***/ 34598:
/*!*****************************************************************!*\
  !*** ./src/app/pages/financials/invoices/invoices.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoicesComponent": () => (/* binding */ InvoicesComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 46758);
/* harmony import */ var src_app_core_model_table_header_data_financial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/financial */ 13288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var src_app_core_services_organization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/organization.service */ 14261);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/dynamic-table/dynamic-table.component */ 57834);
/* harmony import */ var _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/date-time-range-picker/date-time-range-picker.component */ 96991);
/* harmony import */ var _shared_common_chips_common_chips_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/common-chips/common-chips.component */ 62437);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 47873);















function InvoicesComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "app-common-chips", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("chipsValueChangesEmitter", function InvoicesComponent_div_37_Template_app_common_chips_chipsValueChangesEmitter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.ChipClickEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selectAllShow", false)("allDataArray", ctx_r0.AllClientData.asObservable());
  }
}

function InvoicesComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "app-common-chips", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("chipsValueChangesEmitter", function InvoicesComponent_div_38_Template_app_common_chips_chipsValueChangesEmitter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.ChipClickEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selectAllShow", false)("allDataArray", ctx_r1.AllMembersValue.asObservable());
  }
}

const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};

let InvoicesComponent = /*#__PURE__*/(() => {
  class InvoicesComponent {
    constructor(formBuilder, router, masterService, organizationService) {
      this.formBuilder = formBuilder;
      this.router = router;
      this.masterService = masterService;
      this.organizationService = organizationService;
      this.AllClientData = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
      this.AllMembersValue = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
      this.membersShow = false;
      this.isInvoiceFilterFormSave = false;
      this.organizationDetails = {};
      this.invoiceTableCols = src_app_core_model_table_header_data_financial__WEBPACK_IMPORTED_MODULE_0__.invoiceTable;
      this.invoiceTableActionMenu = src_app_core_model_table_header_data_financial__WEBPACK_IMPORTED_MODULE_0__.invoiceTableAction;
      this.invoiceTableArray = [{
        invoice: 'AB1004',
        client: 'Project Manager',
        issueDate: 'Thu, May 6, 2021',
        daysOld: '0',
        total: '0.00',
        paid: '0.00',
        status: 'Draft',
        cssClass: 'bg-warning'
      }, {
        invoice: 'AB1004',
        client: 'Project Manager',
        issueDate: 'Thu, May 6, 2021',
        daysOld: '0',
        total: '0.00',
        paid: '0.00',
        status: 'Draft',
        cssClass: 'bg-warning'
      }];
      this.allClientData = [{
        viewValue: 'abcd',
        value: 'abcd'
      }];
      this.membersListArray = [];
      this.membersListResponse = {};
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.AllClientData.next(this.allClientData);
      this.invoiceFilterForm = this.formBuilder.group({
        date: ['', []],
        client: ['', []],
        status: ['open', []]
      });
      this.GetMember();
    }

    get invoiceFilterFormVal() {
      return this.invoiceFilterForm.controls;
    }

    TabChange(event) {
      if (event == 'clients') {
        this.membersShow = false;
      } else if (event == 'team') {
        this.membersShow = true;
      }
    }

    ChipClickEvent(event) {
      if (event.label == 'Project') {// this.members.setValue(event.value)
      }
    }

    SelectedDateEvent(event) {
      const fromDate = event.fromDate;
      const toDate = event.toDate;

      if (fromDate && toDate) {
        this.invoiceFilterForm.removeControl('date');
        this.invoiceFilterForm.patchValue({
          fromDate: fromDate,
          todate: toDate
        });
      } // this.ValueChange()

    }

    GetMember() {
      let data = {
        status: true
      };
      this.organizationService.GetOrganizationMember(this.organizationDetails['_id'], 1, 10, data).subscribe(response => {
        if (response && response.ReturnCode == 200) {
          this.membersListResponse = response;

          if (this.membersListResponse && this.membersListResponse['Data'].length > 0) {
            this.membersListArray = this.membersListResponse['Data'];
            let newArray = [];
            this.membersListArray.forEach(element => {
              newArray.push({
                viewValue: element.full_name,
                value: element.member_id
              });
            });
            this.AllMembersValue.next(newArray);
          }
        }
      }, error => {
        this.masterService.showError(error.error.ReturnMsg, '');
      });
    }

    TdClickEvent(event) {}

    newInvoices() {
      this.router.navigate(['financials/invoices/new']);
    }

  }

  InvoicesComponent.ɵfac = function InvoicesComponent_Factory(t) {
    return new (t || InvoicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_1__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_organization_service__WEBPACK_IMPORTED_MODULE_2__.OrganizationService));
  };

  InvoicesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: InvoicesComponent,
    selectors: [["app-invoices"]],
    decls: 62,
    vars: 10,
    consts: [[1, "white_box", "main_content"], [1, "top_title_wrap"], [1, "row", "align-items-center"], [1, "col-md-4"], [1, "mb-0"], [1, "col-md-8"], [1, "settings_btn", "text-end"], ["routerLink", "/settings/features/invoices"], [1, "fa-solid", "fa-gear"], [1, "nav", "nav-tabs", "tab_design_one", "mb-5"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#clients", 1, "nav-link", "active", 3, "click"], ["data-bs-toggle", "tab", "href", "#team", 1, "nav-link", 3, "click"], [1, "row", "mb-3"], [3, "formControlFromDateNameValue", "formControlSelectedDateValue"], [1, "invoice_paid_wrap"], [1, "text_green_gradient"], [1, "row", "align-items-end", "mb-5", "financials_invoices"], [1, "col-md-9"], [1, "row"], [1, "col-md-5"], [4, "ngIf"], [1, "col-md-7"], [1, "row", "align-items-end", 3, "formGroup"], ["for", "status"], ["appearance", "fill", 3, "ngClass"], ["id", "status", "formControlName", "status"], ["value", "open"], ["value", "close"], ["value", "all"], [1, "btn_dark"], [1, "col-md-3", "text-end", "d-flex", "btn_top_m", "justify-content-end", "flex-wrap"], [1, "btn_blue", 3, "click"], ["disabled", "", 1, "btn_dark", "ms-3", "btn_reapon"], [3, "tableDataArray", "tableColsDetails", "actionMenu", "tdClickEmitter"], ["chipLable", "Client", 3, "selectAllShow", "allDataArray", "chipsValueChangesEmitter"], ["chipLable", "Members", 3, "selectAllShow", "allDataArray", "chipsValueChangesEmitter"]],
    template: function InvoicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Invoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "a", 7)(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div")(13, "ul", 9)(14, "li", 10)(15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InvoicesComponent_Template_a_click_15_listener() {
          return ctx.TabChange("clients");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "li", 10)(18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InvoicesComponent_Template_a_click_18_listener() {
          return ctx.TabChange("team");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 13)(21, "div", 3)(22, "app-date-time-range-picker", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("formControlSelectedDateValue", function InvoicesComponent_Template_app_date_time_range_picker_formControlSelectedDateValue_22_listener($event) {
          return ctx.SelectedDateEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 5)(24, "ul", 15)(25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Outstanding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "$0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Paid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "$0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 17)(34, "div", 18)(35, "div", 19)(36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, InvoicesComponent_div_37_Template, 2, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, InvoicesComponent_div_38_Template, 2, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 22)(40, "form", 23)(41, "div", 22)(42, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "mat-form-field", 25)(45, "mat-select", 26)(46, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Open");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "mat-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 20)(53, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 31)(56, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InvoicesComponent_Template_button_click_56_listener() {
          return ctx.newInvoices();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "New Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div")(61, "TrackerX-dynamic-table", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("tdClickEmitter", function InvoicesComponent_Template_TrackerX_dynamic_table_tdClickEmitter_61_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlFromDateNameValue", ctx.invoiceFilterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.membersShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.membersShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.invoiceFilterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](8, _c0, ctx.isInvoiceFilterFormSave && (ctx.invoiceFilterFormVal["status"] == null ? null : ctx.invoiceFilterFormVal["status"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tableDataArray", ctx.invoiceTableArray)("tableColsDetails", ctx.invoiceTableCols)("actionMenu", ctx.invoiceTableActionMenu);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_3__.DynamicTableComponent, _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_4__.DateTimeRangePickerComponent, _shared_common_chips_common_chips_component__WEBPACK_IMPORTED_MODULE_5__.CommonChipsComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption]
  });
  return InvoicesComponent;
})();

/***/ }),

/***/ 50169:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/financials/past-payment-detail/past-payment-detail.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PastPaymentDetailComponent": () => (/* binding */ PastPaymentDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_app_core_model_table_header_data_financial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/financial */ 13288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/dynamic-table/dynamic-table.component */ 57834);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 47873);










const _c0 = function () {
  return ["/financials/past-payments"];
};

let PastPaymentDetailComponent = /*#__PURE__*/(() => {
  class PastPaymentDetailComponent {
    constructor(route) {
      this.route = route;
      this.groupBy = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('');
      this.pastPaymentDetailTableCols = src_app_core_model_table_header_data_financial__WEBPACK_IMPORTED_MODULE_0__.pastPaymentDetailTable;
      this.pastPaymentDetailArray = [{
        member: 'Harsh',
        rateType: 'One Time',
        hours: '0.00',
        status: 'Pending',
        amount: '$101.00'
      }, {
        member: 'Harsh',
        rateType: 'One Time',
        hours: '0.00',
        status: 'Done',
        amount: '$101.00'
      }];
    }

    ngOnInit() {}

    TdClickEvent(event) {
      if (event.event == '') {}
    }

  }

  PastPaymentDetailComponent.ɵfac = function PastPaymentDetailComponent_Factory(t) {
    return new (t || PastPaymentDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
  };

  PastPaymentDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: PastPaymentDetailComponent,
    selectors: [["app-past-payment-detail"]],
    decls: 45,
    vars: 5,
    consts: [[1, "white_box", "main_content"], [1, "setting_title", 3, "routerLink"], ["src", "../../../../assets/images/icon/back-arrow-blue.svg", "alt", ""], [1, "d-flex", "align-items-baseline"], [1, "mb-5"], [1, "ms-3"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "p_color", "align-items-center"], [1, "d-flex"], [1, "mb-0"], [1, "badge", "bg-warning", "cz_pending", "mb-0"], [1, "d-flex", "cz_btn"], [1, "btn_blue_border"], [1, "btn_dark_border"], [1, "btn_dark_border", "m-0"], [1, "col-md-2"], ["for", "groupBy"], ["appearance", "fill", 1, "mb-5"], [3, "formControl"], ["value", "member"], ["value", "date"], ["page", "pastPaymentsDetail", 3, "tableColsDetails", "tableDataArray", "tdClickEmitter"]],
    template: function PastPaymentDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3)(6, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Payment For");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Tue, Aug 23, 2022 - Tue, Aug 23, 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Organization: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "hv2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 8)(18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Paid By: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Harsh");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div")(23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Status: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 11)(28, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Add Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Export/Pay");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 15)(35, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Group By");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-form-field", 17)(38, "mat-select", 18)(39, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div")(44, "TrackerX-dynamic-table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("tdClickEmitter", function PastPaymentDetailComponent_Template_TrackerX_dynamic_table_tdClickEmitter_44_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.groupBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tableColsDetails", ctx.pastPaymentDetailTableCols)("tableDataArray", ctx.pastPaymentDetailArray);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_1__.DynamicTableComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption]
  });
  return PastPaymentDetailComponent;
})();

/***/ }),

/***/ 5081:
/*!***************************************************************************!*\
  !*** ./src/app/pages/financials/past-payments/past-payments.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PastPaymentsComponent": () => (/* binding */ PastPaymentsComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_model_table_header_data_financial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/financial */ 13288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/dynamic-table/dynamic-table.component */ 57834);
/* harmony import */ var _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/date-time-range-picker/date-time-range-picker.component */ 96991);






let PastPaymentsComponent = /*#__PURE__*/(() => {
  class PastPaymentsComponent {
    constructor(formBuilder, router) {
      this.formBuilder = formBuilder;
      this.router = router;
      this.pastPaymentsTableCols = src_app_core_model_table_header_data_financial__WEBPACK_IMPORTED_MODULE_0__.pastPaymentsTable;
      this.pastPaymentsActionMenu = src_app_core_model_table_header_data_financial__WEBPACK_IMPORTED_MODULE_0__.pastPaymentsAction;
      this.pastPaymentsArray = [{
        id: '004',
        payDates: 'Tue, Aug 23, 2022 - Tue, Aug 23, 2022',
        payees: '2',
        amount: '202.02',
        status: 'Pending',
        paidOn: 'Tue, Aug 23, 2022',
        createdBy: 'Harsh',
        createdOn: 'Tue, Aug 23, 2022 10:41 am'
      }];
    }

    ngOnInit() {
      this.pastPaymentsForm = this.formBuilder.group({});
    }

    ViewPayments(element) {
      if (element.id) {
        this.router.navigateByUrl('/financials/past-payments/details/' + element.id);
      }
    }

    SelectedDateEvent(event) {}

    TdClickEvent(event) {
      if (event.event == 'viewPayments') {
        this.ViewPayments(event.element);
      } else if (event.event == 'Export_Pay') {// export pay Payments
      }
    }

  }

  PastPaymentsComponent.ɵfac = function PastPaymentsComponent_Factory(t) {
    return new (t || PastPaymentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };

  PastPaymentsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: PastPaymentsComponent,
    selectors: [["app-past-payments"]],
    decls: 19,
    vars: 4,
    consts: [[1, "white_box", "main_content"], [1, "top_title_wrap"], [1, "row", "align-items-center"], [1, "col-md-4"], [1, "mb-0"], [1, "col-md-8"], [1, "settings_btn", "text-end"], ["routerLink", "/settings/features/payments"], [1, "fa-solid", "fa-gear"], [1, "col-md-6", "d-flex", "align-items-center", "mb-5"], [3, "formControlFromDateNameValue", "formControlSelectedDateValue"], [1, "mb-0", "ms-3"], ["page", "pastPaymentsDetails", 3, "tableDataArray", "tableColsDetails", "actionMenu", "tdClickEmitter"]],
    template: function PastPaymentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Past Payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "a", 7)(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div")(13, "div", 9)(14, "app-date-time-range-picker", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("formControlSelectedDateValue", function PastPaymentsComponent_Template_app_date_time_range_picker_formControlSelectedDateValue_14_listener($event) {
          return ctx.SelectedDateEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "(GMT+05:30) Asia/Kolkata");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div")(18, "TrackerX-dynamic-table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("tdClickEmitter", function PastPaymentsComponent_Template_TrackerX_dynamic_table_tdClickEmitter_18_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControlFromDateNameValue", ctx.pastPaymentsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tableDataArray", ctx.pastPaymentsArray)("tableColsDetails", ctx.pastPaymentsTableCols)("actionMenu", ctx.pastPaymentsActionMenu);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_1__.DynamicTableComponent, _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_2__.DateTimeRangePickerComponent]
  });
  return PastPaymentsComponent;
})();

/***/ }),

/***/ 4412:
/*!***************************************************************************!*\
  !*** ./src/app/pages/financials/send-payments/send-payments.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendPaymentsComponent": () => (/* binding */ SendPaymentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 46758);
/* harmony import */ var src_app_core_model_table_header_data_financial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/financial */ 13288);
/* harmony import */ var src_app_shared_pop_up_model_create_payment_create_payment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/create-payment/create-payment.component */ 83562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var src_app_core_services_project_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/project-management.service */ 56014);
/* harmony import */ var src_app_core_services_organization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/organization.service */ 14261);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/dynamic-table/dynamic-table.component */ 57834);
/* harmony import */ var _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/date-time-range-picker/date-time-range-picker.component */ 96991);
/* harmony import */ var _shared_common_chips_common_chips_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/common-chips/common-chips.component */ 62437);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 47873);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button-toggle */ 90811);






















function SendPaymentsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 55)(1, "div", 56)(2, "a", 57)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
}

function SendPaymentsComponent_mat_option_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const projects_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", projects_r4._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", projects_r4.project_Name, " ");
  }
}

function SendPaymentsComponent_mat_option_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const member_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", member_r5.member_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", member_r5.full_name, " ");
  }
}

function SendPaymentsComponent_mat_option_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const member_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", member_r6.member_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", member_r6.full_name, " ");
  }
}

const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};

let SendPaymentsComponent = /*#__PURE__*/(() => {
  class SendPaymentsComponent {
    constructor(formBuilder, masterService, projectService, organizationService, matDialog) {
      this.formBuilder = formBuilder;
      this.masterService = masterService;
      this.projectService = projectService;
      this.organizationService = organizationService;
      this.matDialog = matDialog;
      this.AllMembersValue = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
      this.organizationDetails = {};
      this.start = 1;
      this.limit = 25;
      this.totalRecords = 0;
      this.isPayForHourFilterFormSave = false;
      this.isApprovedTimesheetsFilterFormSave = false;
      this.isOneTimeAmountFormSave = false;
      this.settingBtnShow = true;
      this.membersListResponse = {};
      this.projectListArray = [];
      this.membersListArray = [];
      this.payForHoursTableCols = src_app_core_model_table_header_data_financial__WEBPACK_IMPORTED_MODULE_0__.payForHoursTable;
      this.approvedTimesheetsTableCols = src_app_core_model_table_header_data_financial__WEBPACK_IMPORTED_MODULE_0__.approvedTimesheetsTable;
      this.payForHoursActionMenu = src_app_core_model_table_header_data_financial__WEBPACK_IMPORTED_MODULE_0__.payForHoursAction;
      this.approvedTimesheetsActionMenu = src_app_core_model_table_header_data_financial__WEBPACK_IMPORTED_MODULE_0__.approvedTimesheetsAction;
      this.payForHoursTableArray = [{
        teamMember: 'Minal',
        currentRate: 'No rate set',
        unpaidAmount: 'N/A',
        unpaidHours: '1:00'
      }, {
        teamMember: 'HV',
        currentRate: 'No rate set',
        unpaidAmount: 'N/A',
        unpaidHours: '1:00'
      }];
      this.approvedTimesheetsTableArray = [{
        teamMember: 'John Doe',
        payPeriod: 'Mon, Aug 15, 2022 - Thu, Aug 18, 2022',
        cuurrentRate: '$10.00 /hr',
        unpaidAmount: 132.69,
        unpaidHours: '13:16'
      }];
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.payForHourFilterForm = this.formBuilder.group({
        reportType: ['all'],
        projects: ['0'],
        members: ['0'],
        archivedProjects: ['no']
      });
      this.approvedTimesheetsFilterForm = this.formBuilder.group({
        members: ['']
      });
      this.oneTimeAmountForm = this.formBuilder.group({
        amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        note: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]]
      });
      this.GetActiveProject();
      this.GetMember();
    }

    get payForHourFilterFormVal() {
      return this.payForHourFilterForm.controls;
    }

    get approvedTimesheetsFilterFormVal() {
      return this.approvedTimesheetsFilterForm.controls;
    }

    get oneTimeAmountFormVal() {
      return this.oneTimeAmountForm.controls;
    }

    SelectedDateEvent(event) {}

    TabChange(event) {
      if (event == 'payForHours') {
        this.settingBtnShow = true;
      } else if (event == 'approvedTimesheets') {
        this.settingBtnShow = false;
      } else if (event == 'oneTimeAmount') {
        this.settingBtnShow = false;
      }
    }

    TdClickEvent(event) {
      // console.log(event)
      if (event.event == "pay") {
        this.payPayments(event.element);
      }
    }

    ChipClickEvent(event) {}

    GetActiveProject() {
      this.projectListArray = [];
      this.masterService.showSpppiner();
      this.projectService.GetProjects(this.organizationDetails['_id'], this.start, this.limit, true).subscribe(response => {
        if (response && response.ReturnCode == 200 && response.err == 0) {
          this.masterService.hideSppiner();
          this.projectListArray = response.Data.list;
          this.totalRecords = response.Data.count;
        } else {
          this.masterService.showError(response.ReturnMsg, 'Error');
          this.masterService.hideSppiner();
        }
      }, error => {
        this.masterService.showError(error.error.ReturnMsg, 'Error');
        this.masterService.hideSppiner();
      });
    }

    GetMember() {
      let data = {
        status: true
      };
      this.organizationService.GetOrganizationMember(this.organizationDetails['_id'], 1, 10, data).subscribe(response => {
        if (response && response.ReturnCode == 200) {
          this.membersListResponse = response;

          if (this.membersListResponse && this.membersListResponse['Data'].length > 0) {
            this.membersListArray = this.membersListResponse['Data'];
            let newArray = [];
            this.membersListArray.forEach(element => {
              newArray.push({
                viewValue: element.full_name,
                value: element.member_id
              });
            });
            this.AllMembersValue.next(newArray);
          }
        }
      }, error => {
        this.masterService.showError(error.error.ReturnMsg, '');
      });
    }

    payForHourFilterApply() {
      this.isPayForHourFilterFormSave = true;

      if (this.payForHourFilterForm.invalid) {
        this.payForHourFilterForm.markAllAsTouched();

        for (const i in this.payForHourFilterForm.controls) {
          this.payForHourFilterForm.controls[i].markAsDirty();
          this.payForHourFilterForm.controls[i].updateValueAndValidity();
        }

        return;
      }
    }

    sendPayments() {
      this.matDialog.open(src_app_shared_pop_up_model_create_payment_create_payment_component__WEBPACK_IMPORTED_MODULE_1__.CreatePaymentComponent, {
        height: '600px',
        width: '630px'
      }).afterClosed().subscribe(result => {});
    }

    approvedTimesheetsFilterApply() {
      this.isApprovedTimesheetsFilterFormSave = true;

      if (this.approvedTimesheetsFilterForm.invalid) {
        this.approvedTimesheetsFilterForm.markAllAsTouched();

        for (const i in this.approvedTimesheetsFilterForm.controls) {
          this.approvedTimesheetsFilterForm.controls[i].markAsDirty();
          this.approvedTimesheetsFilterForm.controls[i].updateValueAndValidity();
        }

        return;
      }
    }

    createPaymentApply() {
      this.isOneTimeAmountFormSave = true;

      if (this.oneTimeAmountForm.invalid) {
        this.oneTimeAmountForm.markAllAsTouched();

        for (const i in this.oneTimeAmountForm.controls) {
          this.oneTimeAmountForm.controls[i].markAsDirty();
          this.oneTimeAmountForm.controls[i].updateValueAndValidity();
        }

        return;
      }

      this.matDialog.open(src_app_shared_pop_up_model_create_payment_create_payment_component__WEBPACK_IMPORTED_MODULE_1__.CreatePaymentComponent, {
        height: '600px',
        width: '970px'
      }).afterClosed().subscribe(result => {});
    }

    payPayments(event) {
      this.matDialog.open(src_app_shared_pop_up_model_create_payment_create_payment_component__WEBPACK_IMPORTED_MODULE_1__.CreatePaymentComponent, {
        height: '600px',
        width: '970px'
      }).afterClosed().subscribe(result => {});
    }

  }

  SendPaymentsComponent.ɵfac = function SendPaymentsComponent_Factory(t) {
    return new (t || SendPaymentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_2__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_project_management_service__WEBPACK_IMPORTED_MODULE_3__.ProjectManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_organization_service__WEBPACK_IMPORTED_MODULE_4__.OrganizationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog));
  };

  SendPaymentsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: SendPaymentsComponent,
    selectors: [["app-send-payments"]],
    decls: 118,
    vars: 32,
    consts: [[1, "white_box", "main_content"], [1, "top_title_wrap"], [1, "row", "align-items-center"], [1, "col-md-4"], [1, "mb-0"], [1, "col-md-8"], ["class", "settings_btn text-end", 4, "ngIf"], [1, "nav", "nav-tabs", "tab_design_one", "mb-5"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#payForHours", 1, "nav-link", "active", 3, "click"], ["data-bs-toggle", "tab", "href", "#approvedTimesheets", 1, "nav-link", 3, "click"], ["data-bs-toggle", "tab", "href", "#oneTimeAmount", 1, "nav-link", 3, "click"], [1, "tab-content"], ["id", "payForHours", 1, "tab-pane", "active"], [3, "formGroup"], [1, "row", "justify-content-between", "align-items-end", "mb-5"], ["format", "DD MMM, YY", 3, "formControlFromDateNameValue", "formControlSelectedDateValue"], [1, "col-md-2"], ["for", "reportType"], ["appearance", "fill", 3, "ngClass"], ["formControlName", "reportType"], ["value", "all"], ["value", "detailed"], ["value", "overview"], [1, "col-md-10", "row"], [1, "col-lg-3"], ["for", "projects"], ["formControlName", "projects"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "members"], ["formControlName", "members"], ["for", "includeArchivedProjects"], ["formControlName", "archivedProjects", "aria-label", "Font Style", "id", "includeArchivedProjects"], ["value", "no"], ["value", "yes"], [1, "btn_blue", 3, "click"], [3, "tableColsDetails", "tableDataArray", "actionMenu", "tdClickEmitter"], [1, "d-flex", "justify-content-between", "mt-4"], ["id", "approvedTimesheets", 1, "tab-pane", "fade"], [1, "row"], [1, "col-3", "d-flex", "align-items-end"], ["format", "DD MMM, YY", 1, "w-100", 3, "formControlFromDateNameValue", "formControlSelectedDateValue"], [1, "col-3"], ["appearance", "fill"], ["id", "oneTimeAmount", 1, "tab-pane", "fade"], [1, "col-md-6"], [1, ""], ["chipLable", "Members", 3, "selectAllShow", "allDataArray", "chipsValueChangesEmitter"], ["for", "amount"], ["type", "text", "formControlName", "amount", "matInput", "", "id", "amount"], [1, "subfix_wrap"], ["for", ""], ["matInput", "", "cols", "30", "formControlName", "note", "rows", "5", "placeholder", "Enter a note about the payment"], [1, "text-end", "mt-4"], [1, "settings_btn", "text-end"], [1, "dropdown", "button_drop"], ["routerLink", "/settings/features/payments"], [1, "fa-solid", "fa-gear"], [3, "value"]],
    template: function SendPaymentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Send Payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, SendPaymentsComponent_div_7_Template, 6, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div")(9, "ul", 7)(10, "li", 8)(11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SendPaymentsComponent_Template_a_click_11_listener() {
          return ctx.TabChange("payForHours");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, " Pay For Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "li", 8)(14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SendPaymentsComponent_Template_a_click_14_listener() {
          return ctx.TabChange("approvedTimesheets");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Approved Timesheets");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "li", 8)(17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SendPaymentsComponent_Template_a_click_17_listener() {
          return ctx.TabChange("oneTimeAmount");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "One-Time Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div")(20, "div", 12)(21, "div", 13)(22, "div")(23, "form", 14)(24, "div")(25, "div", 15)(26, "div", 3)(27, "app-date-time-range-picker", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("formControlSelectedDateValue", function SendPaymentsComponent_Template_app_date_time_range_picker_formControlSelectedDateValue_27_listener($event) {
          return ctx.SelectedDateEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 17)(29, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "Report Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "mat-form-field", 19)(32, "mat-select", 20)(33, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "Detailed");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 15)(40, "div", 24)(41, "div", 25)(42, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "mat-form-field", 19)(45, "mat-select", 27)(46, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "All Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, SendPaymentsComponent_mat_option_48_Template, 2, 2, "mat-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 25)(50, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "mat-form-field", 19)(53, "mat-select", 31)(54, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, "All Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](56, SendPaymentsComponent_mat_option_56_Template, 2, 2, "mat-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div", 25)(58, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "Include Archived Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "mat-button-toggle-group", 33)(61, "mat-button-toggle", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "mat-button-toggle", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64, "yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 17)(66, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SendPaymentsComponent_Template_button_click_66_listener() {
          return ctx.payForHourFilterApply();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "div")(69, "TrackerX-dynamic-table", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("tdClickEmitter", function SendPaymentsComponent_Template_TrackerX_dynamic_table_tdClickEmitter_69_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "div", 38)(71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72, "No paid or unpaid time");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SendPaymentsComponent_Template_button_click_73_listener() {
          return ctx.sendPayments();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](74, "Send Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "div", 39)(76, "div")(77, "form", 14)(78, "div", 40)(79, "div", 41)(80, "app-date-time-range-picker", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("formControlSelectedDateValue", function SendPaymentsComponent_Template_app_date_time_range_picker_formControlSelectedDateValue_80_listener($event) {
          return ctx.SelectedDateEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "div", 43)(82, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](83, "Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "mat-form-field", 44)(85, "mat-select", 31)(86, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](87, "All Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](88, SendPaymentsComponent_mat_option_88_Template, 2, 2, "mat-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "div", 41)(90, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SendPaymentsComponent_Template_button_click_90_listener() {
          return ctx.approvedTimesheetsFilterApply();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](91, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "div")(93, "TrackerX-dynamic-table", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("tdClickEmitter", function SendPaymentsComponent_Template_TrackerX_dynamic_table_tdClickEmitter_93_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "div", 45)(95, "div", 46)(96, "form", 14)(97, "div")(98, "div", 47)(99, "app-common-chips", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("chipsValueChangesEmitter", function SendPaymentsComponent_Template_app_common_chips_chipsValueChangesEmitter_99_listener($event) {
          return ctx.ChipClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](100, "div", 47)(101, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](102, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](104, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](105, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](106, "USD");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](107, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](108, "Enter amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](109, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](110, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](111, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](112, "textarea", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](113, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](114, "Enter Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](115, "div", 54)(116, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SendPaymentsComponent_Template_button_click_116_listener() {
          return ctx.createPaymentApply();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](117, "Create Payament");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.settingBtnShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.payForHourFilterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControlFromDateNameValue", ctx.payForHourFilterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](22, _c0, ctx.isPayForHourFilterFormSave && (ctx.payForHourFilterFormVal["reportType"] == null ? null : ctx.payForHourFilterFormVal["reportType"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](24, _c0, ctx.isPayForHourFilterFormSave && (ctx.payForHourFilterFormVal["projects"] == null ? null : ctx.payForHourFilterFormVal["projects"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.projectListArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](26, _c0, ctx.isPayForHourFilterFormSave && (ctx.payForHourFilterFormVal["members"] == null ? null : ctx.payForHourFilterFormVal["members"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.membersListArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tableColsDetails", ctx.payForHoursTableCols)("tableDataArray", ctx.payForHoursTableArray)("actionMenu", ctx.payForHoursActionMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.approvedTimesheetsFilterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControlFromDateNameValue", ctx.approvedTimesheetsFilterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.membersListArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("tableColsDetails", ctx.approvedTimesheetsTableCols)("tableDataArray", ctx.approvedTimesheetsTableArray)("actionMenu", ctx.approvedTimesheetsActionMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.oneTimeAmountForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selectAllShow", true)("allDataArray", ctx.AllMembersValue.asObservable());
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](28, _c0, ctx.isOneTimeAmountFormSave && (ctx.oneTimeAmountFormVal["amount"] == null ? null : ctx.oneTimeAmountFormVal["amount"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](30, _c0, ctx.isOneTimeAmountFormSave && (ctx.oneTimeAmountFormVal["note"] == null ? null : ctx.oneTimeAmountFormVal["note"].errors)));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_5__.DynamicTableComponent, _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_6__.DateTimeRangePickerComponent, _shared_common_chips_common_chips_component__WEBPACK_IMPORTED_MODULE_7__.CommonChipsComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__.MatButtonToggle]
  });
  return SendPaymentsComponent;
})();

/***/ }),

/***/ 55013:
/*!******************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2020/table.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseCdkCell": () => (/* binding */ BaseCdkCell),
/* harmony export */   "BaseRowDef": () => (/* binding */ BaseRowDef),
/* harmony export */   "CDK_ROW_TEMPLATE": () => (/* binding */ CDK_ROW_TEMPLATE),
/* harmony export */   "CDK_TABLE": () => (/* binding */ CDK_TABLE),
/* harmony export */   "CDK_TABLE_TEMPLATE": () => (/* binding */ CDK_TABLE_TEMPLATE),
/* harmony export */   "CdkCell": () => (/* binding */ CdkCell),
/* harmony export */   "CdkCellDef": () => (/* binding */ CdkCellDef),
/* harmony export */   "CdkCellOutlet": () => (/* binding */ CdkCellOutlet),
/* harmony export */   "CdkColumnDef": () => (/* binding */ CdkColumnDef),
/* harmony export */   "CdkFooterCell": () => (/* binding */ CdkFooterCell),
/* harmony export */   "CdkFooterCellDef": () => (/* binding */ CdkFooterCellDef),
/* harmony export */   "CdkFooterRow": () => (/* binding */ CdkFooterRow),
/* harmony export */   "CdkFooterRowDef": () => (/* binding */ CdkFooterRowDef),
/* harmony export */   "CdkHeaderCell": () => (/* binding */ CdkHeaderCell),
/* harmony export */   "CdkHeaderCellDef": () => (/* binding */ CdkHeaderCellDef),
/* harmony export */   "CdkHeaderRow": () => (/* binding */ CdkHeaderRow),
/* harmony export */   "CdkHeaderRowDef": () => (/* binding */ CdkHeaderRowDef),
/* harmony export */   "CdkNoDataRow": () => (/* binding */ CdkNoDataRow),
/* harmony export */   "CdkRecycleRows": () => (/* binding */ CdkRecycleRows),
/* harmony export */   "CdkRow": () => (/* binding */ CdkRow),
/* harmony export */   "CdkRowDef": () => (/* binding */ CdkRowDef),
/* harmony export */   "CdkTable": () => (/* binding */ CdkTable),
/* harmony export */   "CdkTableModule": () => (/* binding */ CdkTableModule),
/* harmony export */   "CdkTextColumn": () => (/* binding */ CdkTextColumn),
/* harmony export */   "DataRowOutlet": () => (/* binding */ DataRowOutlet),
/* harmony export */   "DataSource": () => (/* reexport safe */ _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__.DataSource),
/* harmony export */   "FooterRowOutlet": () => (/* binding */ FooterRowOutlet),
/* harmony export */   "HeaderRowOutlet": () => (/* binding */ HeaderRowOutlet),
/* harmony export */   "NoDataRowOutlet": () => (/* binding */ NoDataRowOutlet),
/* harmony export */   "STICKY_DIRECTIONS": () => (/* binding */ STICKY_DIRECTIONS),
/* harmony export */   "STICKY_POSITIONING_LISTENER": () => (/* binding */ STICKY_POSITIONING_LISTENER),
/* harmony export */   "StickyStyler": () => (/* binding */ StickyStyler),
/* harmony export */   "TEXT_COLUMN_OPTIONS": () => (/* binding */ TEXT_COLUMN_OPTIONS),
/* harmony export */   "_COALESCED_STYLE_SCHEDULER": () => (/* binding */ _COALESCED_STYLE_SCHEDULER),
/* harmony export */   "_CoalescedStyleScheduler": () => (/* binding */ _CoalescedStyleScheduler),
/* harmony export */   "_Schedule": () => (/* binding */ _Schedule),
/* harmony export */   "mixinHasStickyInput": () => (/* binding */ mixinHasStickyInput)
/* harmony export */ });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ 40445);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 21281);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ 95017);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/platform */ 83353);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/scrolling */ 67376);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 46758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80188);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 61135);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 45191);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 39646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 82722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 95698);












/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Mixin to provide a directive with a function that checks if the sticky input has been
 * changed since the last time the function was called. Essentially adds a dirty-check to the
 * sticky value.
 * @docs-private
 */

const _c0 = [[["caption"]], [["colgroup"], ["col"]]];
const _c1 = ["caption", "colgroup, col"];

function CdkTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("text-align", ctx_r0.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
  }
}

function CdkTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("text-align", ctx_r1.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
  }
}

function mixinHasStickyInput(base) {
  return class extends base {
    constructor(...args) {
      super(...args);
      this._sticky = false;
      /** Whether the sticky input has changed since it was last checked. */

      this._hasStickyChanged = false;
    }
    /** Whether sticky positioning should be applied. */


    get sticky() {
      return this._sticky;
    }

    set sticky(v) {
      const prevValue = this._sticky;
      this._sticky = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(v);
      this._hasStickyChanged = prevValue !== this._sticky;
    }
    /** Whether the sticky value has changed since this was last called. */


    hasStickyChanged() {
      const hasStickyChanged = this._hasStickyChanged;
      this._hasStickyChanged = false;
      return hasStickyChanged;
    }
    /** Resets the dirty check for cases where the sticky state has been used without checking. */


    resetStickyChanged() {
      this._hasStickyChanged = false;
    }

  };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Used to provide a table to some of the sub-components without causing a circular dependency.
 * @docs-private
 */


const CDK_TABLE = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('CDK_TABLE');
/** Injection token that can be used to specify the text column options. */

const TEXT_COLUMN_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('text-column-options');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Cell definition for a CDK table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */

let CdkCellDef = /*#__PURE__*/(() => {
  class CdkCellDef {
    constructor(
    /** @docs-private */
    template) {
      this.template = template;
    }

  }

  CdkCellDef.ɵfac = function CdkCellDef_Factory(t) {
    return new (t || CdkCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef));
  };

  CdkCellDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: CdkCellDef,
    selectors: [["", "cdkCellDef", ""]]
  });
  return CdkCellDef;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Header cell definition for a CDK table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */


let CdkHeaderCellDef = /*#__PURE__*/(() => {
  class CdkHeaderCellDef {
    constructor(
    /** @docs-private */
    template) {
      this.template = template;
    }

  }

  CdkHeaderCellDef.ɵfac = function CdkHeaderCellDef_Factory(t) {
    return new (t || CdkHeaderCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef));
  };

  CdkHeaderCellDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: CdkHeaderCellDef,
    selectors: [["", "cdkHeaderCellDef", ""]]
  });
  return CdkHeaderCellDef;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Footer cell definition for a CDK table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */


let CdkFooterCellDef = /*#__PURE__*/(() => {
  class CdkFooterCellDef {
    constructor(
    /** @docs-private */
    template) {
      this.template = template;
    }

  }

  CdkFooterCellDef.ɵfac = function CdkFooterCellDef_Factory(t) {
    return new (t || CdkFooterCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef));
  };

  CdkFooterCellDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: CdkFooterCellDef,
    selectors: [["", "cdkFooterCellDef", ""]]
  });
  return CdkFooterCellDef;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})(); // Boilerplate for applying mixins to CdkColumnDef.

/** @docs-private */


class CdkColumnDefBase {}

const _CdkColumnDefBase = /*#__PURE__*/mixinHasStickyInput(CdkColumnDefBase);
/**
 * Column definition for the CDK table.
 * Defines a set of cells available for a table column.
 */


let CdkColumnDef = /*#__PURE__*/(() => {
  class CdkColumnDef extends _CdkColumnDefBase {
    constructor(_table) {
      super();
      this._table = _table;
      this._stickyEnd = false;
    }
    /** Unique name for this column. */


    get name() {
      return this._name;
    }

    set name(name) {
      this._setNameInput(name);
    }
    /**
     * Whether this column should be sticky positioned on the end of the row. Should make sure
     * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
     * has been changed.
     */


    get stickyEnd() {
      return this._stickyEnd;
    }

    set stickyEnd(v) {
      const prevValue = this._stickyEnd;
      this._stickyEnd = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(v);
      this._hasStickyChanged = prevValue !== this._stickyEnd;
    }
    /**
     * Overridable method that sets the css classes that will be added to every cell in this
     * column.
     * In the future, columnCssClassName will change from type string[] to string and this
     * will set a single string value.
     * @docs-private
     */


    _updateColumnCssClassName() {
      this._columnCssClassName = [`cdk-column-${this.cssClassFriendlyName}`];
    }
    /**
     * This has been extracted to a util because of TS 4 and VE.
     * View Engine doesn't support property rename inheritance.
     * TS 4.0 doesn't allow properties to override accessors or vice-versa.
     * @docs-private
     */


    _setNameInput(value) {
      // If the directive is set without a name (updated programmatically), then this setter will
      // trigger with an empty string and should not overwrite the programmatically set value.
      if (value) {
        this._name = value;
        this.cssClassFriendlyName = value.replace(/[^a-z0-9_-]/gi, '-');

        this._updateColumnCssClassName();
      }
    }

  }

  CdkColumnDef.ɵfac = function CdkColumnDef_Factory(t) {
    return new (t || CdkColumnDef)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_TABLE, 8));
  };

  CdkColumnDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: CdkColumnDef,
    selectors: [["", "cdkColumnDef", ""]],
    contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, CdkCellDef, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, CdkHeaderCellDef, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, CdkFooterCellDef, 5);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.footerCell = _t.first);
      }
    },
    inputs: {
      sticky: "sticky",
      name: ["cdkColumnDef", "name"],
      stickyEnd: "stickyEnd"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: 'MAT_SORT_HEADER_COLUMN_DEF',
      useExisting: CdkColumnDef
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
  });
  return CdkColumnDef;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Base class for the cells. Adds a CSS classname that identifies the column it renders in. */


class BaseCdkCell {
  constructor(columnDef, elementRef) {
    elementRef.nativeElement.classList.add(...columnDef._columnCssClassName);
  }

}
/** Header cell template container that adds the right classes and role. */


let CdkHeaderCell = /*#__PURE__*/(() => {
  class CdkHeaderCell extends BaseCdkCell {
    constructor(columnDef, elementRef) {
      super(columnDef, elementRef);
    }

  }

  CdkHeaderCell.ɵfac = function CdkHeaderCell_Factory(t) {
    return new (t || CdkHeaderCell)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };

  CdkHeaderCell.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: CdkHeaderCell,
    selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]],
    hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
  });
  return CdkHeaderCell;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Footer cell template container that adds the right classes and role. */


let CdkFooterCell = /*#__PURE__*/(() => {
  class CdkFooterCell extends BaseCdkCell {
    constructor(columnDef, elementRef) {
      super(columnDef, elementRef);

      if (columnDef._table?._elementRef.nativeElement.nodeType === 1) {
        const tableRole = columnDef._table._elementRef.nativeElement.getAttribute('role');

        const role = tableRole === 'grid' || tableRole === 'treegrid' ? 'gridcell' : 'cell';
        elementRef.nativeElement.setAttribute('role', role);
      }
    }

  }

  CdkFooterCell.ɵfac = function CdkFooterCell_Factory(t) {
    return new (t || CdkFooterCell)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };

  CdkFooterCell.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: CdkFooterCell,
    selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]],
    hostAttrs: [1, "cdk-footer-cell"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
  });
  return CdkFooterCell;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Cell template container that adds the right classes and role. */


let CdkCell = /*#__PURE__*/(() => {
  class CdkCell extends BaseCdkCell {
    constructor(columnDef, elementRef) {
      super(columnDef, elementRef);

      if (columnDef._table?._elementRef.nativeElement.nodeType === 1) {
        const tableRole = columnDef._table._elementRef.nativeElement.getAttribute('role');

        const role = tableRole === 'grid' || tableRole === 'treegrid' ? 'gridcell' : 'cell';
        elementRef.nativeElement.setAttribute('role', role);
      }
    }

  }

  CdkCell.ɵfac = function CdkCell_Factory(t) {
    return new (t || CdkCell)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };

  CdkCell.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: CdkCell,
    selectors: [["cdk-cell"], ["td", "cdk-cell", ""]],
    hostAttrs: [1, "cdk-cell"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
  });
  return CdkCell;
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
 * @docs-private
 */


class _Schedule {
  constructor() {
    this.tasks = [];
    this.endTasks = [];
  }

}
/** Injection token used to provide a coalesced style scheduler. */


const _COALESCED_STYLE_SCHEDULER = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('_COALESCED_STYLE_SCHEDULER');
/**
 * Allows grouping up CSSDom mutations after the current execution context.
 * This can significantly improve performance when separate consecutive functions are
 * reading from the CSSDom and then mutating it.
 *
 * @docs-private
 */


let _CoalescedStyleScheduler = /*#__PURE__*/(() => {
  class _CoalescedStyleScheduler {
    constructor(_ngZone) {
      this._ngZone = _ngZone;
      this._currentSchedule = null;
      this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    /**
     * Schedules the specified task to run at the end of the current VM turn.
     */


    schedule(task) {
      this._createScheduleIfNeeded();

      this._currentSchedule.tasks.push(task);
    }
    /**
     * Schedules the specified task to run after other scheduled tasks at the end of the current
     * VM turn.
     */


    scheduleEnd(task) {
      this._createScheduleIfNeeded();

      this._currentSchedule.endTasks.push(task);
    }
    /** Prevent any further tasks from running. */


    ngOnDestroy() {
      this._destroyed.next();

      this._destroyed.complete();
    }

    _createScheduleIfNeeded() {
      if (this._currentSchedule) {
        return;
      }

      this._currentSchedule = new _Schedule();

      this._getScheduleObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._destroyed)).subscribe(() => {
        while (this._currentSchedule.tasks.length || this._currentSchedule.endTasks.length) {
          const schedule = this._currentSchedule; // Capture new tasks scheduled by the current set of tasks.

          this._currentSchedule = new _Schedule();

          for (const task of schedule.tasks) {
            task();
          }

          for (const task of schedule.endTasks) {
            task();
          }
        }

        this._currentSchedule = null;
      });
    }

    _getScheduleObservable() {
      // Use onStable when in the context of an ongoing change detection cycle so that we
      // do not accidentally trigger additional cycles.
      return this._ngZone.isStable ? (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(Promise.resolve(undefined)) : this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1));
    }

  }

  _CoalescedStyleScheduler.ɵfac = function _CoalescedStyleScheduler_Factory(t) {
    return new (t || _CoalescedStyleScheduler)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
  };

  _CoalescedStyleScheduler.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: _CoalescedStyleScheduler,
    factory: _CoalescedStyleScheduler.ɵfac
  });
  return _CoalescedStyleScheduler;
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
 * The row template that can be used by the mat-table. Should not be used outside of the
 * material library.
 */


const CDK_ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
/**
 * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
 * for changes and notifying the table.
 */

let BaseRowDef = /*#__PURE__*/(() => {
  class BaseRowDef {
    constructor(
    /** @docs-private */
    template, _differs) {
      this.template = template;
      this._differs = _differs;
    }

    ngOnChanges(changes) {
      // Create a new columns differ if one does not yet exist. Initialize it based on initial value
      // of the columns property or an empty array if none is provided.
      if (!this._columnsDiffer) {
        const columns = changes['columns'] && changes['columns'].currentValue || [];
        this._columnsDiffer = this._differs.find(columns).create();

        this._columnsDiffer.diff(columns);
      }
    }
    /**
     * Returns the difference between the current columns and the columns from the last diff, or null
     * if there is no difference.
     */


    getColumnsDiff() {
      return this._columnsDiffer.diff(this.columns);
    }
    /** Gets this row def's relevant cell template from the provided column def. */


    extractCellTemplate(column) {
      if (this instanceof CdkHeaderRowDef) {
        return column.headerCell.template;
      }

      if (this instanceof CdkFooterRowDef) {
        return column.footerCell.template;
      } else {
        return column.cell.template;
      }
    }

  }

  BaseRowDef.ɵfac = function BaseRowDef_Factory(t) {
    return new (t || BaseRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers));
  };

  BaseRowDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: BaseRowDef,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
  });
  return BaseRowDef;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})(); // Boilerplate for applying mixins to CdkHeaderRowDef.

/** @docs-private */


class CdkHeaderRowDefBase extends BaseRowDef {}

const _CdkHeaderRowDefBase = /*#__PURE__*/mixinHasStickyInput(CdkHeaderRowDefBase);
/**
 * Header row definition for the CDK table.
 * Captures the header row's template and other header properties such as the columns to display.
 */


let CdkHeaderRowDef = /*#__PURE__*/(() => {
  class CdkHeaderRowDef extends _CdkHeaderRowDefBase {
    constructor(template, _differs, _table) {
      super(template, _differs);
      this._table = _table;
    } // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.


    ngOnChanges(changes) {
      super.ngOnChanges(changes);
    }

  }

  CdkHeaderRowDef.ɵfac = function CdkHeaderRowDef_Factory(t) {
    return new (t || CdkHeaderRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_TABLE, 8));
  };

  CdkHeaderRowDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: CdkHeaderRowDef,
    selectors: [["", "cdkHeaderRowDef", ""]],
    inputs: {
      columns: ["cdkHeaderRowDef", "columns"],
      sticky: ["cdkHeaderRowDefSticky", "sticky"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
  });
  return CdkHeaderRowDef;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})(); // Boilerplate for applying mixins to CdkFooterRowDef.

/** @docs-private */


class CdkFooterRowDefBase extends BaseRowDef {}

const _CdkFooterRowDefBase = /*#__PURE__*/mixinHasStickyInput(CdkFooterRowDefBase);
/**
 * Footer row definition for the CDK table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */


let CdkFooterRowDef = /*#__PURE__*/(() => {
  class CdkFooterRowDef extends _CdkFooterRowDefBase {
    constructor(template, _differs, _table) {
      super(template, _differs);
      this._table = _table;
    } // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.


    ngOnChanges(changes) {
      super.ngOnChanges(changes);
    }

  }

  CdkFooterRowDef.ɵfac = function CdkFooterRowDef_Factory(t) {
    return new (t || CdkFooterRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_TABLE, 8));
  };

  CdkFooterRowDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: CdkFooterRowDef,
    selectors: [["", "cdkFooterRowDef", ""]],
    inputs: {
      columns: ["cdkFooterRowDef", "columns"],
      sticky: ["cdkFooterRowDefSticky", "sticky"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
  });
  return CdkFooterRowDef;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Data row definition for the CDK table.
 * Captures the header row's template and other row properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */


let CdkRowDef = /*#__PURE__*/(() => {
  class CdkRowDef extends BaseRowDef {
    // TODO(andrewseguin): Add an input for providing a switch function to determine
    //   if this template should be used.
    constructor(template, _differs, _table) {
      super(template, _differs);
      this._table = _table;
    }

  }

  CdkRowDef.ɵfac = function CdkRowDef_Factory(t) {
    return new (t || CdkRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_TABLE, 8));
  };

  CdkRowDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: CdkRowDef,
    selectors: [["", "cdkRowDef", ""]],
    inputs: {
      columns: ["cdkRowDefColumns", "columns"],
      when: ["cdkRowDefWhen", "when"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
  });
  return CdkRowDef;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Outlet for rendering cells inside of a row or header row.
 * @docs-private
 */


let CdkCellOutlet = /*#__PURE__*/(() => {
  class CdkCellOutlet {
    constructor(_viewContainer) {
      this._viewContainer = _viewContainer;
      CdkCellOutlet.mostRecentCellOutlet = this;
    }

    ngOnDestroy() {
      // If this was the last outlet being rendered in the view, remove the reference
      // from the static property after it has been destroyed to avoid leaking memory.
      if (CdkCellOutlet.mostRecentCellOutlet === this) {
        CdkCellOutlet.mostRecentCellOutlet = null;
      }
    }

  }

  /**
   * Static property containing the latest constructed instance of this class.
   * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
   * createEmbeddedView. After one of these components are created, this property will provide
   * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
   * construct the cells with the provided context.
   */
  CdkCellOutlet.mostRecentCellOutlet = null;

  CdkCellOutlet.ɵfac = function CdkCellOutlet_Factory(t) {
    return new (t || CdkCellOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef));
  };

  CdkCellOutlet.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: CdkCellOutlet,
    selectors: [["", "cdkCellOutlet", ""]]
  });
  return CdkCellOutlet;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Header template container that contains the cell outlet. Adds the right class and role. */


let CdkHeaderRow = /*#__PURE__*/(() => {
  class CdkHeaderRow {}

  CdkHeaderRow.ɵfac = function CdkHeaderRow_Factory(t) {
    return new (t || CdkHeaderRow)();
  };

  CdkHeaderRow.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CdkHeaderRow,
    selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]],
    hostAttrs: ["role", "row", 1, "cdk-header-row"],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function CdkHeaderRow_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 0);
      }
    },
    dependencies: [CdkCellOutlet],
    encapsulation: 2
  });
  return CdkHeaderRow;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Footer template container that contains the cell outlet. Adds the right class and role. */


let CdkFooterRow = /*#__PURE__*/(() => {
  class CdkFooterRow {}

  CdkFooterRow.ɵfac = function CdkFooterRow_Factory(t) {
    return new (t || CdkFooterRow)();
  };

  CdkFooterRow.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CdkFooterRow,
    selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]],
    hostAttrs: ["role", "row", 1, "cdk-footer-row"],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function CdkFooterRow_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 0);
      }
    },
    dependencies: [CdkCellOutlet],
    encapsulation: 2
  });
  return CdkFooterRow;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Data row template container that contains the cell outlet. Adds the right class and role. */


let CdkRow = /*#__PURE__*/(() => {
  class CdkRow {}

  CdkRow.ɵfac = function CdkRow_Factory(t) {
    return new (t || CdkRow)();
  };

  CdkRow.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CdkRow,
    selectors: [["cdk-row"], ["tr", "cdk-row", ""]],
    hostAttrs: ["role", "row", 1, "cdk-row"],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function CdkRow_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 0);
      }
    },
    dependencies: [CdkCellOutlet],
    encapsulation: 2
  });
  return CdkRow;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Row that can be used to display a message when no data is shown in the table. */


let CdkNoDataRow = /*#__PURE__*/(() => {
  class CdkNoDataRow {
    constructor(templateRef) {
      this.templateRef = templateRef;
      this._contentClassName = 'cdk-no-data-row';
    }

  }

  CdkNoDataRow.ɵfac = function CdkNoDataRow_Factory(t) {
    return new (t || CdkNoDataRow)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef));
  };

  CdkNoDataRow.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: CdkNoDataRow,
    selectors: [["ng-template", "cdkNoDataRow", ""]]
  });
  return CdkNoDataRow;
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
 * List of all possible directions that can be used for sticky positioning.
 * @docs-private
 */


const STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
/**
 * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
 * @docs-private
 */

class StickyStyler {
  /**
   * @param _isNativeHtmlTable Whether the sticky logic should be based on a table
   *     that uses the native `<table>` element.
   * @param _stickCellCss The CSS class that will be applied to every row/cell that has
   *     sticky positioning applied.
   * @param direction The directionality context of the table (ltr/rtl); affects column positioning
   *     by reversing left/right positions.
   * @param _isBrowser Whether the table is currently being rendered on the server or the client.
   * @param _needsPositionStickyOnElement Whether we need to specify position: sticky on cells
   *     using inline styles. If false, it is assumed that position: sticky is included in
   *     the component stylesheet for _stickCellCss.
   * @param _positionListener A listener that is notified of changes to sticky rows/columns
   *     and their dimensions.
   */
  constructor(_isNativeHtmlTable, _stickCellCss, direction, _coalescedStyleScheduler, _isBrowser = true, _needsPositionStickyOnElement = true, _positionListener) {
    this._isNativeHtmlTable = _isNativeHtmlTable;
    this._stickCellCss = _stickCellCss;
    this.direction = direction;
    this._coalescedStyleScheduler = _coalescedStyleScheduler;
    this._isBrowser = _isBrowser;
    this._needsPositionStickyOnElement = _needsPositionStickyOnElement;
    this._positionListener = _positionListener;
    this._cachedCellWidths = [];
    this._borderCellCss = {
      'top': `${_stickCellCss}-border-elem-top`,
      'bottom': `${_stickCellCss}-border-elem-bottom`,
      'left': `${_stickCellCss}-border-elem-left`,
      'right': `${_stickCellCss}-border-elem-right`
    };
  }
  /**
   * Clears the sticky positioning styles from the row and its cells by resetting the `position`
   * style, setting the zIndex to 0, and unsetting each provided sticky direction.
   * @param rows The list of rows that should be cleared from sticking in the provided directions
   * @param stickyDirections The directions that should no longer be set as sticky on the rows.
   */


  clearStickyPositioning(rows, stickyDirections) {
    const elementsToClear = [];

    for (const row of rows) {
      // If the row isn't an element (e.g. if it's an `ng-container`),
      // it won't have inline styles or `children` so we skip it.
      if (row.nodeType !== row.ELEMENT_NODE) {
        continue;
      }

      elementsToClear.push(row);

      for (let i = 0; i < row.children.length; i++) {
        elementsToClear.push(row.children[i]);
      }
    } // Coalesce with sticky row/column updates (and potentially other changes like column resize).


    this._coalescedStyleScheduler.schedule(() => {
      for (const element of elementsToClear) {
        this._removeStickyStyle(element, stickyDirections);
      }
    });
  }
  /**
   * Applies sticky left and right positions to the cells of each row according to the sticky
   * states of the rendered column definitions.
   * @param rows The rows that should have its set of cells stuck according to the sticky states.
   * @param stickyStartStates A list of boolean states where each state represents whether the cell
   *     in this index position should be stuck to the start of the row.
   * @param stickyEndStates A list of boolean states where each state represents whether the cell
   *     in this index position should be stuck to the end of the row.
   * @param recalculateCellWidths Whether the sticky styler should recalculate the width of each
   *     column cell. If `false` cached widths will be used instead.
   */


  updateStickyColumns(rows, stickyStartStates, stickyEndStates, recalculateCellWidths = true) {
    if (!rows.length || !this._isBrowser || !(stickyStartStates.some(state => state) || stickyEndStates.some(state => state))) {
      if (this._positionListener) {
        this._positionListener.stickyColumnsUpdated({
          sizes: []
        });

        this._positionListener.stickyEndColumnsUpdated({
          sizes: []
        });
      }

      return;
    }

    const firstRow = rows[0];
    const numCells = firstRow.children.length;

    const cellWidths = this._getCellWidths(firstRow, recalculateCellWidths);

    const startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);

    const endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);

    const lastStickyStart = stickyStartStates.lastIndexOf(true);
    const firstStickyEnd = stickyEndStates.indexOf(true); // Coalesce with sticky row updates (and potentially other changes like column resize).

    this._coalescedStyleScheduler.schedule(() => {
      const isRtl = this.direction === 'rtl';
      const start = isRtl ? 'right' : 'left';
      const end = isRtl ? 'left' : 'right';

      for (const row of rows) {
        for (let i = 0; i < numCells; i++) {
          const cell = row.children[i];

          if (stickyStartStates[i]) {
            this._addStickyStyle(cell, start, startPositions[i], i === lastStickyStart);
          }

          if (stickyEndStates[i]) {
            this._addStickyStyle(cell, end, endPositions[i], i === firstStickyEnd);
          }
        }
      }

      if (this._positionListener) {
        this._positionListener.stickyColumnsUpdated({
          sizes: lastStickyStart === -1 ? [] : cellWidths.slice(0, lastStickyStart + 1).map((width, index) => stickyStartStates[index] ? width : null)
        });

        this._positionListener.stickyEndColumnsUpdated({
          sizes: firstStickyEnd === -1 ? [] : cellWidths.slice(firstStickyEnd).map((width, index) => stickyEndStates[index + firstStickyEnd] ? width : null).reverse()
        });
      }
    });
  }
  /**
   * Applies sticky positioning to the row's cells if using the native table layout, and to the
   * row itself otherwise.
   * @param rowsToStick The list of rows that should be stuck according to their corresponding
   *     sticky state and to the provided top or bottom position.
   * @param stickyStates A list of boolean states where each state represents whether the row
   *     should be stuck in the particular top or bottom position.
   * @param position The position direction in which the row should be stuck if that row should be
   *     sticky.
   *
   */


  stickRows(rowsToStick, stickyStates, position) {
    // Since we can't measure the rows on the server, we can't stick the rows properly.
    if (!this._isBrowser) {
      return;
    } // If positioning the rows to the bottom, reverse their order when evaluating the sticky
    // position such that the last row stuck will be "bottom: 0px" and so on. Note that the
    // sticky states need to be reversed as well.


    const rows = position === 'bottom' ? rowsToStick.slice().reverse() : rowsToStick;
    const states = position === 'bottom' ? stickyStates.slice().reverse() : stickyStates; // Measure row heights all at once before adding sticky styles to reduce layout thrashing.

    const stickyOffsets = [];
    const stickyCellHeights = [];
    const elementsToStick = [];

    for (let rowIndex = 0, stickyOffset = 0; rowIndex < rows.length; rowIndex++) {
      if (!states[rowIndex]) {
        continue;
      }

      stickyOffsets[rowIndex] = stickyOffset;
      const row = rows[rowIndex];
      elementsToStick[rowIndex] = this._isNativeHtmlTable ? Array.from(row.children) : [row];
      const height = row.getBoundingClientRect().height;
      stickyOffset += height;
      stickyCellHeights[rowIndex] = height;
    }

    const borderedRowIndex = states.lastIndexOf(true); // Coalesce with other sticky row updates (top/bottom), sticky columns updates
    // (and potentially other changes like column resize).

    this._coalescedStyleScheduler.schedule(() => {
      for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        if (!states[rowIndex]) {
          continue;
        }

        const offset = stickyOffsets[rowIndex];
        const isBorderedRowIndex = rowIndex === borderedRowIndex;

        for (const element of elementsToStick[rowIndex]) {
          this._addStickyStyle(element, position, offset, isBorderedRowIndex);
        }
      }

      if (position === 'top') {
        this._positionListener?.stickyHeaderRowsUpdated({
          sizes: stickyCellHeights,
          offsets: stickyOffsets,
          elements: elementsToStick
        });
      } else {
        this._positionListener?.stickyFooterRowsUpdated({
          sizes: stickyCellHeights,
          offsets: stickyOffsets,
          elements: elementsToStick
        });
      }
    });
  }
  /**
   * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
   * footer rows is to apply sticky styling to the tfoot container. This should only be done if
   * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
   * the tfoot element.
   */


  updateStickyFooterContainer(tableElement, stickyStates) {
    if (!this._isNativeHtmlTable) {
      return;
    }

    const tfoot = tableElement.querySelector('tfoot'); // Coalesce with other sticky updates (and potentially other changes like column resize).

    this._coalescedStyleScheduler.schedule(() => {
      if (stickyStates.some(state => !state)) {
        this._removeStickyStyle(tfoot, ['bottom']);
      } else {
        this._addStickyStyle(tfoot, 'bottom', 0, false);
      }
    });
  }
  /**
   * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
   * the zIndex, removing each of the provided sticky directions, and removing the
   * sticky position if there are no more directions.
   */


  _removeStickyStyle(element, stickyDirections) {
    for (const dir of stickyDirections) {
      element.style[dir] = '';
      element.classList.remove(this._borderCellCss[dir]);
    } // If the element no longer has any more sticky directions, remove sticky positioning and
    // the sticky CSS class.
    // Short-circuit checking element.style[dir] for stickyDirections as they
    // were already removed above.


    const hasDirection = STICKY_DIRECTIONS.some(dir => stickyDirections.indexOf(dir) === -1 && element.style[dir]);

    if (hasDirection) {
      element.style.zIndex = this._getCalculatedZIndex(element);
    } else {
      // When not hasDirection, _getCalculatedZIndex will always return ''.
      element.style.zIndex = '';

      if (this._needsPositionStickyOnElement) {
        element.style.position = '';
      }

      element.classList.remove(this._stickCellCss);
    }
  }
  /**
   * Adds the sticky styling to the element by adding the sticky style class, changing position
   * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
   * direction and value.
   */


  _addStickyStyle(element, dir, dirValue, isBorderElement) {
    element.classList.add(this._stickCellCss);

    if (isBorderElement) {
      element.classList.add(this._borderCellCss[dir]);
    }

    element.style[dir] = `${dirValue}px`;
    element.style.zIndex = this._getCalculatedZIndex(element);

    if (this._needsPositionStickyOnElement) {
      element.style.cssText += 'position: -webkit-sticky; position: sticky; ';
    }
  }
  /**
   * Calculate what the z-index should be for the element, depending on what directions (top,
   * bottom, left, right) have been set. It should be true that elements with a top direction
   * should have the highest index since these are elements like a table header. If any of those
   * elements are also sticky in another direction, then they should appear above other elements
   * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
   * (e.g. footer rows) should then be next in the ordering such that they are below the header
   * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
   * should minimally increment so that they are above non-sticky elements but below top and bottom
   * elements.
   */


  _getCalculatedZIndex(element) {
    const zIndexIncrements = {
      top: 100,
      bottom: 10,
      left: 1,
      right: 1
    };
    let zIndex = 0; // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
    // loses the array generic type in the `for of`. But we *also* have to use `Array` because
    // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`

    for (const dir of STICKY_DIRECTIONS) {
      if (element.style[dir]) {
        zIndex += zIndexIncrements[dir];
      }
    }

    return zIndex ? `${zIndex}` : '';
  }
  /** Gets the widths for each cell in the provided row. */


  _getCellWidths(row, recalculateCellWidths = true) {
    if (!recalculateCellWidths && this._cachedCellWidths.length) {
      return this._cachedCellWidths;
    }

    const cellWidths = [];
    const firstRowCells = row.children;

    for (let i = 0; i < firstRowCells.length; i++) {
      let cell = firstRowCells[i];
      cellWidths.push(cell.getBoundingClientRect().width);
    }

    this._cachedCellWidths = cellWidths;
    return cellWidths;
  }
  /**
   * Determines the left and right positions of each sticky column cell, which will be the
   * accumulation of all sticky column cell widths to the left and right, respectively.
   * Non-sticky cells do not need to have a value set since their positions will not be applied.
   */


  _getStickyStartColumnPositions(widths, stickyStates) {
    const positions = [];
    let nextPosition = 0;

    for (let i = 0; i < widths.length; i++) {
      if (stickyStates[i]) {
        positions[i] = nextPosition;
        nextPosition += widths[i];
      }
    }

    return positions;
  }
  /**
   * Determines the left and right positions of each sticky column cell, which will be the
   * accumulation of all sticky column cell widths to the left and right, respectively.
   * Non-sticky cells do not need to have a value set since their positions will not be applied.
   */


  _getStickyEndColumnPositions(widths, stickyStates) {
    const positions = [];
    let nextPosition = 0;

    for (let i = widths.length; i > 0; i--) {
      if (stickyStates[i]) {
        positions[i] = nextPosition;
        nextPosition += widths[i];
      }
    }

    return positions;
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Returns an error to be thrown when attempting to find an nonexistent column.
 * @param id Id whose lookup failed.
 * @docs-private
 */


function getTableUnknownColumnError(id) {
  return Error(`Could not find column with id "${id}".`);
}
/**
 * Returns an error to be thrown when two column definitions have the same name.
 * @docs-private
 */


function getTableDuplicateColumnNameError(name) {
  return Error(`Duplicate column definition name provided: "${name}".`);
}
/**
 * Returns an error to be thrown when there are multiple rows that are missing a when function.
 * @docs-private
 */


function getTableMultipleDefaultRowDefsError() {
  return Error(`There can only be one default row without a when predicate function.`);
}
/**
 * Returns an error to be thrown when there are no matching row defs for a particular set of data.
 * @docs-private
 */


function getTableMissingMatchingRowDefError(data) {
  return Error(`Could not find a matching row definition for the` + `provided row data: ${JSON.stringify(data)}`);
}
/**
 * Returns an error to be thrown when there is no row definitions present in the content.
 * @docs-private
 */


function getTableMissingRowDefsError() {
  return Error('Missing definitions for header, footer, and row; ' + 'cannot determine which columns should be rendered.');
}
/**
 * Returns an error to be thrown when the data source does not match the compatible types.
 * @docs-private
 */


function getTableUnknownDataSourceError() {
  return Error(`Provided data source did not match an array, Observable, or DataSource`);
}
/**
 * Returns an error to be thrown when the text column cannot find a parent table to inject.
 * @docs-private
 */


function getTableTextColumnMissingParentTableError() {
  return Error(`Text column could not find a parent table for registration.`);
}
/**
 * Returns an error to be thrown when a table text column doesn't have a name.
 * @docs-private
 */


function getTableTextColumnMissingNameError() {
  return Error(`Table text column must have a name.`);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** The injection token used to specify the StickyPositioningListener. */


const STICKY_POSITIONING_LISTENER = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('CDK_SPL');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Enables the recycle view repeater strategy, which reduces rendering latency. Not compatible with
 * tables that animate rows.
 */

let CdkRecycleRows = /*#__PURE__*/(() => {
  class CdkRecycleRows {}

  CdkRecycleRows.ɵfac = function CdkRecycleRows_Factory(t) {
    return new (t || CdkRecycleRows)();
  };

  CdkRecycleRows.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: CdkRecycleRows,
    selectors: [["cdk-table", "recycleRows", ""], ["table", "cdk-table", "", "recycleRows", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._VIEW_REPEATER_STRATEGY,
      useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._RecycleViewRepeaterStrategy
    }])]
  });
  return CdkRecycleRows;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Provides a handle for the table to grab the view container's ng-container to insert data rows.
 * @docs-private
 */


let DataRowOutlet = /*#__PURE__*/(() => {
  class DataRowOutlet {
    constructor(viewContainer, elementRef) {
      this.viewContainer = viewContainer;
      this.elementRef = elementRef;
    }

  }

  DataRowOutlet.ɵfac = function DataRowOutlet_Factory(t) {
    return new (t || DataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };

  DataRowOutlet.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: DataRowOutlet,
    selectors: [["", "rowOutlet", ""]]
  });
  return DataRowOutlet;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the header.
 * @docs-private
 */


let HeaderRowOutlet = /*#__PURE__*/(() => {
  class HeaderRowOutlet {
    constructor(viewContainer, elementRef) {
      this.viewContainer = viewContainer;
      this.elementRef = elementRef;
    }

  }

  HeaderRowOutlet.ɵfac = function HeaderRowOutlet_Factory(t) {
    return new (t || HeaderRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };

  HeaderRowOutlet.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: HeaderRowOutlet,
    selectors: [["", "headerRowOutlet", ""]]
  });
  return HeaderRowOutlet;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the footer.
 * @docs-private
 */


let FooterRowOutlet = /*#__PURE__*/(() => {
  class FooterRowOutlet {
    constructor(viewContainer, elementRef) {
      this.viewContainer = viewContainer;
      this.elementRef = elementRef;
    }

  }

  FooterRowOutlet.ɵfac = function FooterRowOutlet_Factory(t) {
    return new (t || FooterRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };

  FooterRowOutlet.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: FooterRowOutlet,
    selectors: [["", "footerRowOutlet", ""]]
  });
  return FooterRowOutlet;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Provides a handle for the table to grab the view
 * container's ng-container to insert the no data row.
 * @docs-private
 */


let NoDataRowOutlet = /*#__PURE__*/(() => {
  class NoDataRowOutlet {
    constructor(viewContainer, elementRef) {
      this.viewContainer = viewContainer;
      this.elementRef = elementRef;
    }

  }

  NoDataRowOutlet.ɵfac = function NoDataRowOutlet_Factory(t) {
    return new (t || NoDataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
  };

  NoDataRowOutlet.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: NoDataRowOutlet,
    selectors: [["", "noDataRowOutlet", ""]]
  });
  return NoDataRowOutlet;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * The table template that can be used by the mat-table. Should not be used outside of the
 * material library.
 * @docs-private
 */


const CDK_TABLE_TEMPLATE = // Note that according to MDN, the `caption` element has to be projected as the **first**
// element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
`
  <ng-content select="caption"></ng-content>
  <ng-content select="colgroup, col"></ng-content>
  <ng-container headerRowOutlet></ng-container>
  <ng-container rowOutlet></ng-container>
  <ng-container noDataRowOutlet></ng-container>
  <ng-container footerRowOutlet></ng-container>
`;
/**
 * Class used to conveniently type the embedded view ref for rows with a context.
 * @docs-private
 */

class RowViewRef extends _angular_core__WEBPACK_IMPORTED_MODULE_1__.EmbeddedViewRef {}
/**
 * A data table that can render a header row, data rows, and a footer row.
 * Uses the dataSource input to determine the data to be rendered. The data can be provided either
 * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
 * connect function that will return an Observable stream that emits the data array to render.
 */


let CdkTable = /*#__PURE__*/(() => {
  class CdkTable {
    constructor(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform, _viewRepeater, _coalescedStyleScheduler, _viewportRuler,
    /**
     * @deprecated `_stickyPositioningListener` parameter to become required.
     * @breaking-change 13.0.0
     */
    _stickyPositioningListener,
    /**
     * @deprecated `_ngZone` parameter to become required.
     * @breaking-change 14.0.0
     */
    _ngZone) {
      this._differs = _differs;
      this._changeDetectorRef = _changeDetectorRef;
      this._elementRef = _elementRef;
      this._dir = _dir;
      this._platform = _platform;
      this._viewRepeater = _viewRepeater;
      this._coalescedStyleScheduler = _coalescedStyleScheduler;
      this._viewportRuler = _viewportRuler;
      this._stickyPositioningListener = _stickyPositioningListener;
      this._ngZone = _ngZone;
      /** Subject that emits when the component has been destroyed. */

      this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
      /**
       * Map of all the user's defined columns (header, data, and footer cell template) identified by
       * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
       * any custom column definitions added to `_customColumnDefs`.
       */

      this._columnDefsByName = new Map();
      /**
       * Column definitions that were defined outside of the direct content children of the table.
       * These will be defined when, e.g., creating a wrapper around the cdkTable that has
       * column definitions as *its* content child.
       */

      this._customColumnDefs = new Set();
      /**
       * Data row definitions that were defined outside of the direct content children of the table.
       * These will be defined when, e.g., creating a wrapper around the cdkTable that has
       * built-in data rows as *its* content child.
       */

      this._customRowDefs = new Set();
      /**
       * Header row definitions that were defined outside of the direct content children of the table.
       * These will be defined when, e.g., creating a wrapper around the cdkTable that has
       * built-in header rows as *its* content child.
       */

      this._customHeaderRowDefs = new Set();
      /**
       * Footer row definitions that were defined outside of the direct content children of the table.
       * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
       * built-in footer row as *its* content child.
       */

      this._customFooterRowDefs = new Set();
      /**
       * Whether the header row definition has been changed. Triggers an update to the header row after
       * content is checked. Initialized as true so that the table renders the initial set of rows.
       */

      this._headerRowDefChanged = true;
      /**
       * Whether the footer row definition has been changed. Triggers an update to the footer row after
       * content is checked. Initialized as true so that the table renders the initial set of rows.
       */

      this._footerRowDefChanged = true;
      /**
       * Whether the sticky column styles need to be updated. Set to `true` when the visible columns
       * change.
       */

      this._stickyColumnStylesNeedReset = true;
      /**
       * Whether the sticky styler should recalculate cell widths when applying sticky styles. If
       * `false`, cached values will be used instead. This is only applicable to tables with
       * {@link fixedLayout} enabled. For other tables, cell widths will always be recalculated.
       */

      this._forceRecalculateCellWidths = true;
      /**
       * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
       * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
       * the cached `RenderRow` objects when possible, the row identity is preserved when the data
       * and row template matches, which allows the `IterableDiffer` to check rows by reference
       * and understand which rows are added/moved/removed.
       *
       * Implemented as a map of maps where the first key is the `data: T` object and the second is the
       * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
       * contains an array of created pairs. The array is necessary to handle cases where the data
       * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
       * stored.
       */

      this._cachedRenderRowsMap = new Map();
      /**
       * CSS class added to any row or cell that has sticky positioning applied. May be overridden by
       * table subclasses.
       */

      this.stickyCssClass = 'cdk-table-sticky';
      /**
       * Whether to manually add position: sticky to all sticky cell elements. Not needed if
       * the position is set in a selector associated with the value of stickyCssClass. May be
       * overridden by table subclasses
       */

      this.needsPositionStickyOnElement = true;
      /** Whether the no data row is currently showing anything. */

      this._isShowingNoDataRow = false;
      this._multiTemplateDataRows = false;
      this._fixedLayout = false;
      /**
       * Emits when the table completes rendering a set of data rows based on the latest data from the
       * data source, even if the set of rows is empty.
       */

      this.contentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(); // TODO(andrewseguin): Remove max value as the end index
      //   and instead calculate the view on init and scroll.

      /**
       * Stream containing the latest information on what rows are being displayed on screen.
       * Can be used by the data source to as a heuristic of what data should be provided.
       *
       * @docs-private
       */

      this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject({
        start: 0,
        end: Number.MAX_VALUE
      });

      if (!role) {
        this._elementRef.nativeElement.setAttribute('role', 'table');
      }

      this._document = _document;
      this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === 'TABLE';
    }
    /**
     * Tracking function that will be used to check the differences in data changes. Used similarly
     * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
     * relative to the function to know if a row should be added/removed/moved.
     * Accepts a function that takes two parameters, `index` and `item`.
     */


    get trackBy() {
      return this._trackByFn;
    }

    set trackBy(fn) {
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && fn != null && typeof fn !== 'function') {
        console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
      }

      this._trackByFn = fn;
    }
    /**
     * The table's source of data, which can be provided in three ways (in order of complexity):
     *   - Simple data array (each object represents one table row)
     *   - Stream that emits a data array each time the array changes
     *   - `DataSource` object that implements the connect/disconnect interface.
     *
     * If a data array is provided, the table must be notified when the array's objects are
     * added, removed, or moved. This can be done by calling the `renderRows()` function which will
     * render the diff since the last table render. If the data array reference is changed, the table
     * will automatically trigger an update to the rows.
     *
     * When providing an Observable stream, the table will trigger an update automatically when the
     * stream emits a new array of data.
     *
     * Finally, when providing a `DataSource` object, the table will use the Observable stream
     * provided by the connect function and trigger updates when that stream emits new data array
     * values. During the table's ngOnDestroy or when the data source is removed from the table, the
     * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
     * subscriptions registered during the connect process).
     */


    get dataSource() {
      return this._dataSource;
    }

    set dataSource(dataSource) {
      if (this._dataSource !== dataSource) {
        this._switchDataSource(dataSource);
      }
    }
    /**
     * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
     * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
     * dataobject will render the first row that evaluates its when predicate to true, in the order
     * defined in the table, or otherwise the default row which does not have a when predicate.
     */


    get multiTemplateDataRows() {
      return this._multiTemplateDataRows;
    }

    set multiTemplateDataRows(v) {
      this._multiTemplateDataRows = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(v); // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
      // this setter will be invoked before the row outlet has been defined hence the null check.

      if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
        this._forceRenderDataRows();

        this.updateStickyColumnStyles();
      }
    }
    /**
     * Whether to use a fixed table layout. Enabling this option will enforce consistent column widths
     * and optimize rendering sticky styles for native tables. No-op for flex tables.
     */


    get fixedLayout() {
      return this._fixedLayout;
    }

    set fixedLayout(v) {
      this._fixedLayout = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(v); // Toggling `fixedLayout` may change column widths. Sticky column styles should be recalculated.

      this._forceRecalculateCellWidths = true;
      this._stickyColumnStylesNeedReset = true;
    }

    ngOnInit() {
      this._setupStickyStyler();

      if (this._isNativeHtmlTable) {
        this._applyNativeTableSections();
      } // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
      // the user has provided a custom trackBy, return the result of that function as evaluated
      // with the values of the `RenderRow`'s data and index.


      this._dataDiffer = this._differs.find([]).create((_i, dataRow) => {
        return this.trackBy ? this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
      });

      this._viewportRuler.change().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._onDestroy)).subscribe(() => {
        this._forceRecalculateCellWidths = true;
      });
    }

    ngAfterContentChecked() {
      // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
      this._cacheRowDefs();

      this._cacheColumnDefs(); // Make sure that the user has at least added header, footer, or data row def.


      if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTableMissingRowDefsError();
      } // Render updates if the list of columns have been changed for the header, row, or footer defs.


      const columnsChanged = this._renderUpdatedColumns();

      const rowDefsChanged = columnsChanged || this._headerRowDefChanged || this._footerRowDefChanged; // Ensure sticky column styles are reset if set to `true` elsewhere.

      this._stickyColumnStylesNeedReset = this._stickyColumnStylesNeedReset || rowDefsChanged;
      this._forceRecalculateCellWidths = rowDefsChanged; // If the header row definition has been changed, trigger a render to the header row.

      if (this._headerRowDefChanged) {
        this._forceRenderHeaderRows();

        this._headerRowDefChanged = false;
      } // If the footer row definition has been changed, trigger a render to the footer row.


      if (this._footerRowDefChanged) {
        this._forceRenderFooterRows();

        this._footerRowDefChanged = false;
      } // If there is a data source and row definitions, connect to the data source unless a
      // connection has already been made.


      if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
        this._observeRenderChanges();
      } else if (this._stickyColumnStylesNeedReset) {
        // In the above case, _observeRenderChanges will result in updateStickyColumnStyles being
        // called when it row data arrives. Otherwise, we need to call it proactively.
        this.updateStickyColumnStyles();
      }

      this._checkStickyStates();
    }

    ngOnDestroy() {
      [this._rowOutlet.viewContainer, this._headerRowOutlet.viewContainer, this._footerRowOutlet.viewContainer, this._cachedRenderRowsMap, this._customColumnDefs, this._customRowDefs, this._customHeaderRowDefs, this._customFooterRowDefs, this._columnDefsByName].forEach(def => {
        def.clear();
      });
      this._headerRowDefs = [];
      this._footerRowDefs = [];
      this._defaultRowDef = null;

      this._onDestroy.next();

      this._onDestroy.complete();

      if ((0,_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__.isDataSource)(this.dataSource)) {
        this.dataSource.disconnect(this);
      }
    }
    /**
     * Renders rows based on the table's latest set of data, which was either provided directly as an
     * input or retrieved through an Observable stream (directly or from a DataSource).
     * Checks for differences in the data since the last diff to perform only the necessary
     * changes (add/remove/move rows).
     *
     * If the table's data source is a DataSource or Observable, this will be invoked automatically
     * each time the provided Observable stream emits a new data array. Otherwise if your data is
     * an array, this function will need to be called to render any changes.
     */


    renderRows() {
      this._renderRows = this._getAllRenderRows();

      const changes = this._dataDiffer.diff(this._renderRows);

      if (!changes) {
        this._updateNoDataRow();

        this.contentChanged.next();
        return;
      }

      const viewContainer = this._rowOutlet.viewContainer;

      this._viewRepeater.applyChanges(changes, viewContainer, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record.item, currentIndex), record => record.item.data, change => {
        if (change.operation === 1
        /* _ViewRepeaterOperation.INSERTED */
        && change.context) {
          this._renderCellTemplateForItem(change.record.item.rowDef, change.context);
        }
      }); // Update the meta context of a row's context data (index, count, first, last, ...)


      this._updateRowIndexContext(); // Update rows that did not get added/removed/moved but may have had their identity changed,
      // e.g. if trackBy matched data on some property but the actual data reference changed.


      changes.forEachIdentityChange(record => {
        const rowView = viewContainer.get(record.currentIndex);
        rowView.context.$implicit = record.item.data;
      });

      this._updateNoDataRow(); // Allow the new row data to render before measuring it.
      // @breaking-change 14.0.0 Remove undefined check once _ngZone is required.


      if (this._ngZone && _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone.isInAngularZone()) {
        this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._onDestroy)).subscribe(() => {
          this.updateStickyColumnStyles();
        });
      } else {
        this.updateStickyColumnStyles();
      }

      this.contentChanged.next();
    }
    /** Adds a column definition that was not included as part of the content children. */


    addColumnDef(columnDef) {
      this._customColumnDefs.add(columnDef);
    }
    /** Removes a column definition that was not included as part of the content children. */


    removeColumnDef(columnDef) {
      this._customColumnDefs.delete(columnDef);
    }
    /** Adds a row definition that was not included as part of the content children. */


    addRowDef(rowDef) {
      this._customRowDefs.add(rowDef);
    }
    /** Removes a row definition that was not included as part of the content children. */


    removeRowDef(rowDef) {
      this._customRowDefs.delete(rowDef);
    }
    /** Adds a header row definition that was not included as part of the content children. */


    addHeaderRowDef(headerRowDef) {
      this._customHeaderRowDefs.add(headerRowDef);

      this._headerRowDefChanged = true;
    }
    /** Removes a header row definition that was not included as part of the content children. */


    removeHeaderRowDef(headerRowDef) {
      this._customHeaderRowDefs.delete(headerRowDef);

      this._headerRowDefChanged = true;
    }
    /** Adds a footer row definition that was not included as part of the content children. */


    addFooterRowDef(footerRowDef) {
      this._customFooterRowDefs.add(footerRowDef);

      this._footerRowDefChanged = true;
    }
    /** Removes a footer row definition that was not included as part of the content children. */


    removeFooterRowDef(footerRowDef) {
      this._customFooterRowDefs.delete(footerRowDef);

      this._footerRowDefChanged = true;
    }
    /** Sets a no data row definition that was not included as a part of the content children. */


    setNoDataRow(noDataRow) {
      this._customNoDataRow = noDataRow;
    }
    /**
     * Updates the header sticky styles. First resets all applied styles with respect to the cells
     * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
     * automatically called when the header row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     */


    updateStickyHeaderRowStyles() {
      const headerRows = this._getRenderedRows(this._headerRowOutlet);

      const tableElement = this._elementRef.nativeElement; // Hide the thead element if there are no header rows. This is necessary to satisfy
      // overzealous a11y checkers that fail because the `rowgroup` element does not contain
      // required child `row`.

      const thead = tableElement.querySelector('thead');

      if (thead) {
        thead.style.display = headerRows.length ? '' : 'none';
      }

      const stickyStates = this._headerRowDefs.map(def => def.sticky);

      this._stickyStyler.clearStickyPositioning(headerRows, ['top']);

      this._stickyStyler.stickRows(headerRows, stickyStates, 'top'); // Reset the dirty state of the sticky input change since it has been used.


      this._headerRowDefs.forEach(def => def.resetStickyChanged());
    }
    /**
     * Updates the footer sticky styles. First resets all applied styles with respect to the cells
     * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
     * automatically called when the footer row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     */


    updateStickyFooterRowStyles() {
      const footerRows = this._getRenderedRows(this._footerRowOutlet);

      const tableElement = this._elementRef.nativeElement; // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
      // overzealous a11y checkers that fail because the `rowgroup` element does not contain
      // required child `row`.

      const tfoot = tableElement.querySelector('tfoot');

      if (tfoot) {
        tfoot.style.display = footerRows.length ? '' : 'none';
      }

      const stickyStates = this._footerRowDefs.map(def => def.sticky);

      this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);

      this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');

      this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates); // Reset the dirty state of the sticky input change since it has been used.


      this._footerRowDefs.forEach(def => def.resetStickyChanged());
    }
    /**
     * Updates the column sticky styles. First resets all applied styles with respect to the cells
     * sticking to the left and right. Then sticky styles are added for the left and right according
     * to the column definitions for each cell in each row. This is automatically called when
     * the data source provides a new set of data or when a column definition changes its sticky
     * input. May be called manually for cases where the cell content changes outside of these events.
     */


    updateStickyColumnStyles() {
      const headerRows = this._getRenderedRows(this._headerRowOutlet);

      const dataRows = this._getRenderedRows(this._rowOutlet);

      const footerRows = this._getRenderedRows(this._footerRowOutlet); // For tables not using a fixed layout, the column widths may change when new rows are rendered.
      // In a table using a fixed layout, row content won't affect column width, so sticky styles
      // don't need to be cleared unless either the sticky column config changes or one of the row
      // defs change.


      if (this._isNativeHtmlTable && !this._fixedLayout || this._stickyColumnStylesNeedReset) {
        // Clear the left and right positioning from all columns in the table across all rows since
        // sticky columns span across all table sections (header, data, footer)
        this._stickyStyler.clearStickyPositioning([...headerRows, ...dataRows, ...footerRows], ['left', 'right']);

        this._stickyColumnStylesNeedReset = false;
      } // Update the sticky styles for each header row depending on the def's sticky state


      headerRows.forEach((headerRow, i) => {
        this._addStickyColumnStyles([headerRow], this._headerRowDefs[i]);
      }); // Update the sticky styles for each data row depending on its def's sticky state

      this._rowDefs.forEach(rowDef => {
        // Collect all the rows rendered with this row definition.
        const rows = [];

        for (let i = 0; i < dataRows.length; i++) {
          if (this._renderRows[i].rowDef === rowDef) {
            rows.push(dataRows[i]);
          }
        }

        this._addStickyColumnStyles(rows, rowDef);
      }); // Update the sticky styles for each footer row depending on the def's sticky state


      footerRows.forEach((footerRow, i) => {
        this._addStickyColumnStyles([footerRow], this._footerRowDefs[i]);
      }); // Reset the dirty state of the sticky input change since it has been used.

      Array.from(this._columnDefsByName.values()).forEach(def => def.resetStickyChanged());
    }
    /**
     * Get the list of RenderRow objects to render according to the current list of data and defined
     * row definitions. If the previous list already contained a particular pair, it should be reused
     * so that the differ equates their references.
     */


    _getAllRenderRows() {
      const renderRows = []; // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
      // new cache while unused ones can be picked up by garbage collection.

      const prevCachedRenderRows = this._cachedRenderRowsMap;
      this._cachedRenderRowsMap = new Map(); // For each data object, get the list of rows that should be rendered, represented by the
      // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.

      for (let i = 0; i < this._data.length; i++) {
        let data = this._data[i];

        const renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));

        if (!this._cachedRenderRowsMap.has(data)) {
          this._cachedRenderRowsMap.set(data, new WeakMap());
        }

        for (let j = 0; j < renderRowsForData.length; j++) {
          let renderRow = renderRowsForData[j];

          const cache = this._cachedRenderRowsMap.get(renderRow.data);

          if (cache.has(renderRow.rowDef)) {
            cache.get(renderRow.rowDef).push(renderRow);
          } else {
            cache.set(renderRow.rowDef, [renderRow]);
          }

          renderRows.push(renderRow);
        }
      }

      return renderRows;
    }
    /**
     * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
     * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
     * `(T, CdkRowDef)` pair.
     */


    _getRenderRowsForData(data, dataIndex, cache) {
      const rowDefs = this._getRowDefs(data, dataIndex);

      return rowDefs.map(rowDef => {
        const cachedRenderRows = cache && cache.has(rowDef) ? cache.get(rowDef) : [];

        if (cachedRenderRows.length) {
          const dataRow = cachedRenderRows.shift();
          dataRow.dataIndex = dataIndex;
          return dataRow;
        } else {
          return {
            data,
            rowDef,
            dataIndex
          };
        }
      });
    }
    /** Update the map containing the content's column definitions. */


    _cacheColumnDefs() {
      this._columnDefsByName.clear();

      const columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
      columnDefs.forEach(columnDef => {
        if (this._columnDefsByName.has(columnDef.name) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw getTableDuplicateColumnNameError(columnDef.name);
        }

        this._columnDefsByName.set(columnDef.name, columnDef);
      });
    }
    /** Update the list of all available row definitions that can be used. */


    _cacheRowDefs() {
      this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
      this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
      this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs); // After all row definitions are determined, find the row definition to be considered default.

      const defaultRowDefs = this._rowDefs.filter(def => !def.when);

      if (!this.multiTemplateDataRows && defaultRowDefs.length > 1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTableMultipleDefaultRowDefsError();
      }

      this._defaultRowDef = defaultRowDefs[0];
    }
    /**
     * Check if the header, data, or footer rows have changed what columns they want to display or
     * whether the sticky states have changed for the header or footer. If there is a diff, then
     * re-render that section.
     */


    _renderUpdatedColumns() {
      const columnsDiffReducer = (acc, def) => acc || !!def.getColumnsDiff(); // Force re-render data rows if the list of column definitions have changed.


      const dataColumnsChanged = this._rowDefs.reduce(columnsDiffReducer, false);

      if (dataColumnsChanged) {
        this._forceRenderDataRows();
      } // Force re-render header/footer rows if the list of column definitions have changed.


      const headerColumnsChanged = this._headerRowDefs.reduce(columnsDiffReducer, false);

      if (headerColumnsChanged) {
        this._forceRenderHeaderRows();
      }

      const footerColumnsChanged = this._footerRowDefs.reduce(columnsDiffReducer, false);

      if (footerColumnsChanged) {
        this._forceRenderFooterRows();
      }

      return dataColumnsChanged || headerColumnsChanged || footerColumnsChanged;
    }
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the row outlet. Otherwise start listening for new data.
     */


    _switchDataSource(dataSource) {
      this._data = [];

      if ((0,_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__.isDataSource)(this.dataSource)) {
        this.dataSource.disconnect(this);
      } // Stop listening for data from the previous data source.


      if (this._renderChangeSubscription) {
        this._renderChangeSubscription.unsubscribe();

        this._renderChangeSubscription = null;
      }

      if (!dataSource) {
        if (this._dataDiffer) {
          this._dataDiffer.diff([]);
        }

        this._rowOutlet.viewContainer.clear();
      }

      this._dataSource = dataSource;
    }
    /** Set up a subscription for the data provided by the data source. */


    _observeRenderChanges() {
      // If no data source has been set, there is nothing to observe for changes.
      if (!this.dataSource) {
        return;
      }

      let dataStream;

      if ((0,_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__.isDataSource)(this.dataSource)) {
        dataStream = this.dataSource.connect(this);
      } else if ((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.isObservable)(this.dataSource)) {
        dataStream = this.dataSource;
      } else if (Array.isArray(this.dataSource)) {
        dataStream = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(this.dataSource);
      }

      if (dataStream === undefined && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTableUnknownDataSourceError();
      }

      this._renderChangeSubscription = dataStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._onDestroy)).subscribe(data => {
        this._data = data || [];
        this.renderRows();
      });
    }
    /**
     * Clears any existing content in the header row outlet and creates a new embedded view
     * in the outlet using the header row definition.
     */


    _forceRenderHeaderRows() {
      // Clear the header row outlet if any content exists.
      if (this._headerRowOutlet.viewContainer.length > 0) {
        this._headerRowOutlet.viewContainer.clear();
      }

      this._headerRowDefs.forEach((def, i) => this._renderRow(this._headerRowOutlet, def, i));

      this.updateStickyHeaderRowStyles();
    }
    /**
     * Clears any existing content in the footer row outlet and creates a new embedded view
     * in the outlet using the footer row definition.
     */


    _forceRenderFooterRows() {
      // Clear the footer row outlet if any content exists.
      if (this._footerRowOutlet.viewContainer.length > 0) {
        this._footerRowOutlet.viewContainer.clear();
      }

      this._footerRowDefs.forEach((def, i) => this._renderRow(this._footerRowOutlet, def, i));

      this.updateStickyFooterRowStyles();
    }
    /** Adds the sticky column styles for the rows according to the columns' stick states. */


    _addStickyColumnStyles(rows, rowDef) {
      const columnDefs = Array.from(rowDef.columns || []).map(columnName => {
        const columnDef = this._columnDefsByName.get(columnName);

        if (!columnDef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw getTableUnknownColumnError(columnName);
        }

        return columnDef;
      });
      const stickyStartStates = columnDefs.map(columnDef => columnDef.sticky);
      const stickyEndStates = columnDefs.map(columnDef => columnDef.stickyEnd);

      this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates, !this._fixedLayout || this._forceRecalculateCellWidths);
    }
    /** Gets the list of rows that have been rendered in the row outlet. */


    _getRenderedRows(rowOutlet) {
      const renderedRows = [];

      for (let i = 0; i < rowOutlet.viewContainer.length; i++) {
        const viewRef = rowOutlet.viewContainer.get(i);
        renderedRows.push(viewRef.rootNodes[0]);
      }

      return renderedRows;
    }
    /**
     * Get the matching row definitions that should be used for this row data. If there is only
     * one row definition, it is returned. Otherwise, find the row definitions that has a when
     * predicate that returns true with the data. If none return true, return the default row
     * definition.
     */


    _getRowDefs(data, dataIndex) {
      if (this._rowDefs.length == 1) {
        return [this._rowDefs[0]];
      }

      let rowDefs = [];

      if (this.multiTemplateDataRows) {
        rowDefs = this._rowDefs.filter(def => !def.when || def.when(dataIndex, data));
      } else {
        let rowDef = this._rowDefs.find(def => def.when && def.when(dataIndex, data)) || this._defaultRowDef;

        if (rowDef) {
          rowDefs.push(rowDef);
        }
      }

      if (!rowDefs.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTableMissingMatchingRowDefError(data);
      }

      return rowDefs;
    }

    _getEmbeddedViewArgs(renderRow, index) {
      const rowDef = renderRow.rowDef;
      const context = {
        $implicit: renderRow.data
      };
      return {
        templateRef: rowDef.template,
        context,
        index
      };
    }
    /**
     * Creates a new row template in the outlet and fills it with the set of cell templates.
     * Optionally takes a context to provide to the row and cells, as well as an optional index
     * of where to place the new row template in the outlet.
     */


    _renderRow(outlet, rowDef, index, context = {}) {
      // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
      const view = outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);

      this._renderCellTemplateForItem(rowDef, context);

      return view;
    }

    _renderCellTemplateForItem(rowDef, context) {
      for (let cellTemplate of this._getCellTemplates(rowDef)) {
        if (CdkCellOutlet.mostRecentCellOutlet) {
          CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
        }
      }

      this._changeDetectorRef.markForCheck();
    }
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     */


    _updateRowIndexContext() {
      const viewContainer = this._rowOutlet.viewContainer;

      for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
        const viewRef = viewContainer.get(renderIndex);
        const context = viewRef.context;
        context.count = count;
        context.first = renderIndex === 0;
        context.last = renderIndex === count - 1;
        context.even = renderIndex % 2 === 0;
        context.odd = !context.even;

        if (this.multiTemplateDataRows) {
          context.dataIndex = this._renderRows[renderIndex].dataIndex;
          context.renderIndex = renderIndex;
        } else {
          context.index = this._renderRows[renderIndex].dataIndex;
        }
      }
    }
    /** Gets the column definitions for the provided row def. */


    _getCellTemplates(rowDef) {
      if (!rowDef || !rowDef.columns) {
        return [];
      }

      return Array.from(rowDef.columns, columnId => {
        const column = this._columnDefsByName.get(columnId);

        if (!column && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw getTableUnknownColumnError(columnId);
        }

        return rowDef.extractCellTemplate(column);
      });
    }
    /** Adds native table sections (e.g. tbody) and moves the row outlets into them. */


    _applyNativeTableSections() {
      const documentFragment = this._document.createDocumentFragment();

      const sections = [{
        tag: 'thead',
        outlets: [this._headerRowOutlet]
      }, {
        tag: 'tbody',
        outlets: [this._rowOutlet, this._noDataRowOutlet]
      }, {
        tag: 'tfoot',
        outlets: [this._footerRowOutlet]
      }];

      for (const section of sections) {
        const element = this._document.createElement(section.tag);

        element.setAttribute('role', 'rowgroup');

        for (const outlet of section.outlets) {
          element.appendChild(outlet.elementRef.nativeElement);
        }

        documentFragment.appendChild(element);
      } // Use a DocumentFragment so we don't hit the DOM on each iteration.


      this._elementRef.nativeElement.appendChild(documentFragment);
    }
    /**
     * Forces a re-render of the data rows. Should be called in cases where there has been an input
     * change that affects the evaluation of which rows should be rendered, e.g. toggling
     * `multiTemplateDataRows` or adding/removing row definitions.
     */


    _forceRenderDataRows() {
      this._dataDiffer.diff([]);

      this._rowOutlet.viewContainer.clear();

      this.renderRows();
    }
    /**
     * Checks if there has been a change in sticky states since last check and applies the correct
     * sticky styles. Since checking resets the "dirty" state, this should only be performed once
     * during a change detection and after the inputs are settled (after content check).
     */


    _checkStickyStates() {
      const stickyCheckReducer = (acc, d) => {
        return acc || d.hasStickyChanged();
      }; // Note that the check needs to occur for every definition since it notifies the definition
      // that it can reset its dirty state. Using another operator like `some` may short-circuit
      // remaining definitions and leave them in an unchecked state.


      if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
        this.updateStickyHeaderRowStyles();
      }

      if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
        this.updateStickyFooterRowStyles();
      }

      if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
        this._stickyColumnStylesNeedReset = true;
        this.updateStickyColumnStyles();
      }
    }
    /**
     * Creates the sticky styler that will be used for sticky rows and columns. Listens
     * for directionality changes and provides the latest direction to the styler. Re-applies column
     * stickiness when directionality changes.
     */


    _setupStickyStyler() {
      const direction = this._dir ? this._dir.value : 'ltr';
      this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._coalescedStyleScheduler, this._platform.isBrowser, this.needsPositionStickyOnElement, this._stickyPositioningListener);
      (this._dir ? this._dir.change : (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._onDestroy)).subscribe(value => {
        this._stickyStyler.direction = value;
        this.updateStickyColumnStyles();
      });
    }
    /** Filters definitions that belong to this table from a QueryList. */


    _getOwnDefs(items) {
      return items.filter(item => !item._table || item._table === this);
    }
    /** Creates or removes the no data row, depending on whether any data is being shown. */


    _updateNoDataRow() {
      const noDataRow = this._customNoDataRow || this._noDataRow;

      if (!noDataRow) {
        return;
      }

      const shouldShow = this._rowOutlet.viewContainer.length === 0;

      if (shouldShow === this._isShowingNoDataRow) {
        return;
      }

      const container = this._noDataRowOutlet.viewContainer;

      if (shouldShow) {
        const view = container.createEmbeddedView(noDataRow.templateRef);
        const rootNode = view.rootNodes[0]; // Only add the attributes if we have a single root node since it's hard
        // to figure out which one to add it to when there are multiple.

        if (view.rootNodes.length === 1 && rootNode?.nodeType === this._document.ELEMENT_NODE) {
          rootNode.setAttribute('role', 'row');
          rootNode.classList.add(noDataRow._contentClassName);
        }
      } else {
        container.clear();
      }

      this._isShowingNoDataRow = shouldShow;
    }

  }

  CdkTable.ɵfac = function CdkTable_Factory(t) {
    return new (t || CdkTable)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('role'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._VIEW_REPEATER_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_COALESCED_STYLE_SCHEDULER), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](STICKY_POSITIONING_LISTENER, 12), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone, 8));
  };

  CdkTable.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CdkTable,
    selectors: [["cdk-table"], ["table", "cdk-table", ""]],
    contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, CdkNoDataRow, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, CdkColumnDef, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, CdkRowDef, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, CdkHeaderRowDef, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, CdkFooterRowDef, 5);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._noDataRow = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._contentColumnDefs = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._contentRowDefs = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._contentHeaderRowDefs = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._contentFooterRowDefs = _t);
      }
    },
    viewQuery: function CdkTable_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](DataRowOutlet, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](HeaderRowOutlet, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](FooterRowOutlet, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](NoDataRowOutlet, 7);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._rowOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._headerRowOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._footerRowOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._noDataRowOutlet = _t.first);
      }
    },
    hostAttrs: [1, "cdk-table"],
    hostVars: 2,
    hostBindings: function CdkTable_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cdk-table-fixed-layout", ctx.fixedLayout);
      }
    },
    inputs: {
      trackBy: "trackBy",
      dataSource: "dataSource",
      multiTemplateDataRows: "multiTemplateDataRows",
      fixedLayout: "fixedLayout"
    },
    outputs: {
      contentChanged: "contentChanged"
    },
    exportAs: ["cdkTable"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      provide: CDK_TABLE,
      useExisting: CdkTable
    }, {
      provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._VIEW_REPEATER_STRATEGY,
      useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__._DisposeViewRepeaterStrategy
    }, {
      provide: _COALESCED_STYLE_SCHEDULER,
      useClass: _CoalescedStyleScheduler
    }, // Prevent nested tables from seeing this table's StickyPositioningListener.
    {
      provide: STICKY_POSITIONING_LISTENER,
      useValue: null
    }])],
    ngContentSelectors: _c1,
    decls: 6,
    vars: 0,
    consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
    template: function CdkTable_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](2, 0)(3, 1)(4, 2)(5, 3);
      }
    },
    dependencies: [DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, NoDataRowOutlet],
    styles: [".cdk-table-fixed-layout{table-layout:fixed}"],
    encapsulation: 2
  });
  return CdkTable;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Utility function that gets a merged list of the entries in an array and values of a Set. */


function mergeArrayAndSet(array, set) {
  return array.concat(Array.from(set));
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Column that simply shows text content for the header and row cells. Assumes that the table
 * is using the native table implementation (`<table>`).
 *
 * By default, the name of this column will be the header text and data property accessor.
 * The header text can be overridden with the `headerText` input. Cell values can be overridden with
 * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
 * input.
 */


let CdkTextColumn = /*#__PURE__*/(() => {
  class CdkTextColumn {
    constructor( // `CdkTextColumn` is always requiring a table, but we just assert it manually
    // for better error reporting.
    // tslint:disable-next-line: lightweight-tokens
    _table, _options) {
      this._table = _table;
      this._options = _options;
      /** Alignment of the cell values. */

      this.justify = 'start';
      this._options = _options || {};
    }
    /** Column name that should be used to reference this column. */


    get name() {
      return this._name;
    }

    set name(name) {
      this._name = name; // With Ivy, inputs can be initialized before static query results are
      // available. In that case, we defer the synchronization until "ngOnInit" fires.

      this._syncColumnDefName();
    }

    ngOnInit() {
      this._syncColumnDefName();

      if (this.headerText === undefined) {
        this.headerText = this._createDefaultHeaderText();
      }

      if (!this.dataAccessor) {
        this.dataAccessor = this._options.defaultDataAccessor || ((data, name) => data[name]);
      }

      if (this._table) {
        // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
        // since the columnDef will not pick up its content by the time the table finishes checking
        // its content and initializing the rows.
        this.columnDef.cell = this.cell;
        this.columnDef.headerCell = this.headerCell;

        this._table.addColumnDef(this.columnDef);
      } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
        throw getTableTextColumnMissingParentTableError();
      }
    }

    ngOnDestroy() {
      if (this._table) {
        this._table.removeColumnDef(this.columnDef);
      }
    }
    /**
     * Creates a default header text. Use the options' header text transformation function if one
     * has been provided. Otherwise simply capitalize the column name.
     */


    _createDefaultHeaderText() {
      const name = this.name;

      if (!name && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTableTextColumnMissingNameError();
      }

      if (this._options && this._options.defaultHeaderTextTransform) {
        return this._options.defaultHeaderTextTransform(name);
      }

      return name[0].toUpperCase() + name.slice(1);
    }
    /** Synchronizes the column definition name with the text column name. */


    _syncColumnDefName() {
      if (this.columnDef) {
        this.columnDef.name = this.name;
      }
    }

  }

  CdkTextColumn.ɵfac = function CdkTextColumn_Factory(t) {
    return new (t || CdkTextColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CdkTable, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TEXT_COLUMN_OPTIONS, 8));
  };

  CdkTextColumn.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CdkTextColumn,
    selectors: [["cdk-text-column"]],
    viewQuery: function CdkTextColumn_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](CdkColumnDef, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](CdkCellDef, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](CdkHeaderCellDef, 7);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.columnDef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
      }
    },
    inputs: {
      name: "name",
      headerText: "headerText",
      dataAccessor: "dataAccessor",
      justify: "justify"
    },
    decls: 3,
    vars: 0,
    consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]],
    template: function CdkTextColumn_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CdkTextColumn_th_1_Template, 2, 3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }
    },
    dependencies: [CdkCellDef, CdkHeaderCellDef, CdkColumnDef, CdkCell, CdkHeaderCell],
    encapsulation: 2
  });
  return CdkTextColumn;
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


const EXPORTED_DECLARATIONS = [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, CdkRecycleRows, NoDataRowOutlet];
let CdkTableModule = /*#__PURE__*/(() => {
  class CdkTableModule {}

  CdkTableModule.ɵfac = function CdkTableModule_Factory(t) {
    return new (t || CdkTableModule)();
  };

  CdkTableModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: CdkTableModule
  });
  CdkTableModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__.ScrollingModule]
  });
  return CdkTableModule;
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
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=table.mjs.map

/***/ }),

/***/ 90811:
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/button-toggle.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS": () => (/* binding */ MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS),
/* harmony export */   "MAT_BUTTON_TOGGLE_GROUP": () => (/* binding */ MAT_BUTTON_TOGGLE_GROUP),
/* harmony export */   "MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR": () => (/* binding */ MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR),
/* harmony export */   "MatButtonToggle": () => (/* binding */ MatButtonToggle),
/* harmony export */   "MatButtonToggleChange": () => (/* binding */ MatButtonToggleChange),
/* harmony export */   "MatButtonToggleGroup": () => (/* binding */ MatButtonToggleGroup),
/* harmony export */   "MatButtonToggleModule": () => (/* binding */ MatButtonToggleModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ 12687);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 21281);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ 95017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 47873);








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to configure the
 * default options for all button toggles within an app.
 */

const _c0 = ["button"];
const _c1 = ["*"];
const MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS');
/**
 * Injection token that can be used to reference instances of `MatButtonToggleGroup`.
 * It serves as alternative token to the actual `MatButtonToggleGroup` class which
 * could cause unnecessary retention of the class and its component metadata.
 */

const MAT_BUTTON_TOGGLE_GROUP = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatButtonToggleGroup');
/**
 * Provider Expression that allows mat-button-toggle-group to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */

const MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatButtonToggleGroup),
  multi: true
}; // Counter used to generate unique IDs.

let uniqueIdCounter = 0;
/** Change event object emitted by MatButtonToggle. */

class MatButtonToggleChange {
  constructor(
  /** The MatButtonToggle that emits the event. */
  source,
  /** The value assigned to the MatButtonToggle. */
  value) {
    this.source = source;
    this.value = value;
  }

}
/** Exclusive selection button toggle group that behaves like a radio-button group. */


let MatButtonToggleGroup = /*#__PURE__*/(() => {
  class MatButtonToggleGroup {
    constructor(_changeDetector, defaultOptions) {
      this._changeDetector = _changeDetector;
      this._vertical = false;
      this._multiple = false;
      this._disabled = false;
      /**
       * The method to be called in order to update ngModel.
       * Now `ngModel` binding is not supported in multiple selection mode.
       */

      this._controlValueAccessorChangeFn = () => {};
      /** onTouch function registered via registerOnTouch (ControlValueAccessor). */


      this._onTouched = () => {};

      this._name = `mat-button-toggle-group-${uniqueIdCounter++}`;
      /**
       * Event that emits whenever the value of the group changes.
       * Used to facilitate two-way data binding.
       * @docs-private
       */

      this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Event emitted when the group's value changes. */

      this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
    }
    /** `name` attribute for the underlying `input` element. */


    get name() {
      return this._name;
    }

    set name(value) {
      this._name = value;

      if (this._buttonToggles) {
        this._buttonToggles.forEach(toggle => {
          toggle.name = this._name;

          toggle._markForCheck();
        });
      }
    }
    /** Whether the toggle group is vertical. */


    get vertical() {
      return this._vertical;
    }

    set vertical(value) {
      this._vertical = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
    }
    /** Value of the toggle group. */


    get value() {
      const selected = this._selectionModel ? this._selectionModel.selected : [];

      if (this.multiple) {
        return selected.map(toggle => toggle.value);
      }

      return selected[0] ? selected[0].value : undefined;
    }

    set value(newValue) {
      this._setSelectionByValue(newValue);

      this.valueChange.emit(this.value);
    }
    /** Selected button toggles in the group. */


    get selected() {
      const selected = this._selectionModel ? this._selectionModel.selected : [];
      return this.multiple ? selected : selected[0] || null;
    }
    /** Whether multiple button toggles can be selected. */


    get multiple() {
      return this._multiple;
    }

    set multiple(value) {
      this._multiple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
    }
    /** Whether multiple button toggle group is disabled. */


    get disabled() {
      return this._disabled;
    }

    set disabled(value) {
      this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);

      if (this._buttonToggles) {
        this._buttonToggles.forEach(toggle => toggle._markForCheck());
      }
    }

    ngOnInit() {
      this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__.SelectionModel(this.multiple, undefined, false);
    }

    ngAfterContentInit() {
      this._selectionModel.select(...this._buttonToggles.filter(toggle => toggle.checked));
    }
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value Value to be set to the model.
     */


    writeValue(value) {
      this.value = value;

      this._changeDetector.markForCheck();
    } // Implemented as part of ControlValueAccessor.


    registerOnChange(fn) {
      this._controlValueAccessorChangeFn = fn;
    } // Implemented as part of ControlValueAccessor.


    registerOnTouched(fn) {
      this._onTouched = fn;
    } // Implemented as part of ControlValueAccessor.


    setDisabledState(isDisabled) {
      this.disabled = isDisabled;
    }
    /** Dispatch change event with current selection and group value. */


    _emitChangeEvent() {
      const selected = this.selected;
      const source = Array.isArray(selected) ? selected[selected.length - 1] : selected;
      const event = new MatButtonToggleChange(source, this.value);

      this._controlValueAccessorChangeFn(event.value);

      this.change.emit(event);
    }
    /**
     * Syncs a button toggle's selected state with the model value.
     * @param toggle Toggle to be synced.
     * @param select Whether the toggle should be selected.
     * @param isUserInput Whether the change was a result of a user interaction.
     * @param deferEvents Whether to defer emitting the change events.
     */


    _syncButtonToggle(toggle, select, isUserInput = false, deferEvents = false) {
      // Deselect the currently-selected toggle, if we're in single-selection
      // mode and the button being toggled isn't selected at the moment.
      if (!this.multiple && this.selected && !toggle.checked) {
        this.selected.checked = false;
      }

      if (this._selectionModel) {
        if (select) {
          this._selectionModel.select(toggle);
        } else {
          this._selectionModel.deselect(toggle);
        }
      } else {
        deferEvents = true;
      } // We need to defer in some cases in order to avoid "changed after checked errors", however
      // the side-effect is that we may end up updating the model value out of sequence in others
      // The `deferEvents` flag allows us to decide whether to do it on a case-by-case basis.


      if (deferEvents) {
        Promise.resolve().then(() => this._updateModelValue(isUserInput));
      } else {
        this._updateModelValue(isUserInput);
      }
    }
    /** Checks whether a button toggle is selected. */


    _isSelected(toggle) {
      return this._selectionModel && this._selectionModel.isSelected(toggle);
    }
    /** Determines whether a button toggle should be checked on init. */


    _isPrechecked(toggle) {
      if (typeof this._rawValue === 'undefined') {
        return false;
      }

      if (this.multiple && Array.isArray(this._rawValue)) {
        return this._rawValue.some(value => toggle.value != null && value === toggle.value);
      }

      return toggle.value === this._rawValue;
    }
    /** Updates the selection state of the toggles in the group based on a value. */


    _setSelectionByValue(value) {
      this._rawValue = value;

      if (!this._buttonToggles) {
        return;
      }

      if (this.multiple && value) {
        if (!Array.isArray(value) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw Error('Value must be an array in multiple-selection mode.');
        }

        this._clearSelection();

        value.forEach(currentValue => this._selectValue(currentValue));
      } else {
        this._clearSelection();

        this._selectValue(value);
      }
    }
    /** Clears the selected toggles. */


    _clearSelection() {
      this._selectionModel.clear();

      this._buttonToggles.forEach(toggle => toggle.checked = false);
    }
    /** Selects a value if there's a toggle that corresponds to it. */


    _selectValue(value) {
      const correspondingOption = this._buttonToggles.find(toggle => {
        return toggle.value != null && toggle.value === value;
      });

      if (correspondingOption) {
        correspondingOption.checked = true;

        this._selectionModel.select(correspondingOption);
      }
    }
    /** Syncs up the group's value with the model and emits the change event. */


    _updateModelValue(isUserInput) {
      // Only emit the change event for user input.
      if (isUserInput) {
        this._emitChangeEvent();
      } // Note: we emit this one no matter whether it was a user interaction, because
      // it is used by Angular to sync up the two-way data binding.


      this.valueChange.emit(this.value);
    }

  }

  MatButtonToggleGroup.ɵfac = function MatButtonToggleGroup_Factory(t) {
    return new (t || MatButtonToggleGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, 8));
  };

  MatButtonToggleGroup.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatButtonToggleGroup,
    selectors: [["mat-button-toggle-group"]],
    contentQueries: function MatButtonToggleGroup_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatButtonToggle, 5);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._buttonToggles = _t);
      }
    },
    hostAttrs: ["role", "group", 1, "mat-button-toggle-group"],
    hostVars: 5,
    hostBindings: function MatButtonToggleGroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-button-toggle-vertical", ctx.vertical)("mat-button-toggle-group-appearance-standard", ctx.appearance === "standard");
      }
    },
    inputs: {
      appearance: "appearance",
      name: "name",
      vertical: "vertical",
      value: "value",
      multiple: "multiple",
      disabled: "disabled"
    },
    outputs: {
      valueChange: "valueChange",
      change: "change"
    },
    exportAs: ["matButtonToggleGroup"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
      provide: MAT_BUTTON_TOGGLE_GROUP,
      useExisting: MatButtonToggleGroup
    }])]
  });
  return MatButtonToggleGroup;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})(); // Boilerplate for applying mixins to the MatButtonToggle class.

/** @docs-private */


const _MatButtonToggleBase = /*#__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.mixinDisableRipple)(class {});
/** Single button inside of a toggle group. */


let MatButtonToggle = /*#__PURE__*/(() => {
  class MatButtonToggle extends _MatButtonToggleBase {
    constructor(toggleGroup, _changeDetectorRef, _elementRef, _focusMonitor, defaultTabIndex, defaultOptions) {
      super();
      this._changeDetectorRef = _changeDetectorRef;
      this._elementRef = _elementRef;
      this._focusMonitor = _focusMonitor;
      this._isSingleSelector = false;
      this._checked = false;
      /**
       * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
       */

      this.ariaLabelledby = null;
      this._disabled = false;
      /** Event emitted when the group value changes. */

      this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      const parsedTabIndex = Number(defaultTabIndex);
      this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
      this.buttonToggleGroup = toggleGroup;
      this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
    }
    /** Unique ID for the underlying `button` element. */


    get buttonId() {
      return `${this.id}-button`;
    }
    /** The appearance style of the button. */


    get appearance() {
      return this.buttonToggleGroup ? this.buttonToggleGroup.appearance : this._appearance;
    }

    set appearance(value) {
      this._appearance = value;
    }
    /** Whether the button is checked. */


    get checked() {
      return this.buttonToggleGroup ? this.buttonToggleGroup._isSelected(this) : this._checked;
    }

    set checked(value) {
      const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);

      if (newValue !== this._checked) {
        this._checked = newValue;

        if (this.buttonToggleGroup) {
          this.buttonToggleGroup._syncButtonToggle(this, this._checked);
        }

        this._changeDetectorRef.markForCheck();
      }
    }
    /** Whether the button is disabled. */


    get disabled() {
      return this._disabled || this.buttonToggleGroup && this.buttonToggleGroup.disabled;
    }

    set disabled(value) {
      this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
    }

    ngOnInit() {
      const group = this.buttonToggleGroup;
      this._isSingleSelector = group && !group.multiple;
      this.id = this.id || `mat-button-toggle-${uniqueIdCounter++}`;

      if (this._isSingleSelector) {
        this.name = group.name;
      }

      if (group) {
        if (group._isPrechecked(this)) {
          this.checked = true;
        } else if (group._isSelected(this) !== this._checked) {
          // As as side effect of the circular dependency between the toggle group and the button,
          // we may end up in a state where the button is supposed to be checked on init, but it
          // isn't, because the checked value was assigned too early. This can happen when Ivy
          // assigns the static input value before the `ngOnInit` has run.
          group._syncButtonToggle(this, this._checked);
        }
      }
    }

    ngAfterViewInit() {
      this._focusMonitor.monitor(this._elementRef, true);
    }

    ngOnDestroy() {
      const group = this.buttonToggleGroup;

      this._focusMonitor.stopMonitoring(this._elementRef); // Remove the toggle from the selection once it's destroyed. Needs to happen
      // on the next tick in order to avoid "changed after checked" errors.


      if (group && group._isSelected(this)) {
        group._syncButtonToggle(this, false, false, true);
      }
    }
    /** Focuses the button. */


    focus(options) {
      this._buttonElement.nativeElement.focus(options);
    }
    /** Checks the button toggle due to an interaction with the underlying native button. */


    _onButtonClick() {
      const newChecked = this._isSingleSelector ? true : !this._checked;

      if (newChecked !== this._checked) {
        this._checked = newChecked;

        if (this.buttonToggleGroup) {
          this.buttonToggleGroup._syncButtonToggle(this, this._checked, true);

          this.buttonToggleGroup._onTouched();
        }
      } // Emit a change event when it's the single selector


      this.change.emit(new MatButtonToggleChange(this, this.value));
    }
    /**
     * Marks the button toggle as needing checking for change detection.
     * This method is exposed because the parent button toggle group will directly
     * update bound properties of the radio button.
     */


    _markForCheck() {
      // When the group value changes, the button will not be notified.
      // Use `markForCheck` to explicit update button toggle's status.
      this._changeDetectorRef.markForCheck();
    }

  }

  MatButtonToggle.ɵfac = function MatButtonToggle_Factory(t) {
    return new (t || MatButtonToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_BUTTON_TOGGLE_GROUP, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, 8));
  };

  MatButtonToggle.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatButtonToggle,
    selectors: [["mat-button-toggle"]],
    viewQuery: function MatButtonToggle_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._buttonElement = _t.first);
      }
    },
    hostAttrs: ["role", "presentation", 1, "mat-button-toggle"],
    hostVars: 12,
    hostBindings: function MatButtonToggle_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatButtonToggle_focus_HostBindingHandler() {
          return ctx.focus();
        });
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", null)("aria-labelledby", null)("id", ctx.id)("name", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-button-toggle-standalone", !ctx.buttonToggleGroup)("mat-button-toggle-checked", ctx.checked)("mat-button-toggle-disabled", ctx.disabled)("mat-button-toggle-appearance-standard", ctx.appearance === "standard");
      }
    },
    inputs: {
      disableRipple: "disableRipple",
      ariaLabel: ["aria-label", "ariaLabel"],
      ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
      id: "id",
      name: "name",
      value: "value",
      tabIndex: "tabIndex",
      appearance: "appearance",
      checked: "checked",
      disabled: "disabled"
    },
    outputs: {
      change: "change"
    },
    exportAs: ["matButtonToggle"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c1,
    decls: 6,
    vars: 9,
    consts: [["type", "button", 1, "mat-button-toggle-button", "mat-focus-indicator", 3, "id", "disabled", "click"], ["button", ""], [1, "mat-button-toggle-label-content"], [1, "mat-button-toggle-focus-overlay"], ["matRipple", "", 1, "mat-button-toggle-ripple", 3, "matRippleTrigger", "matRippleDisabled"]],
    template: function MatButtonToggle_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatButtonToggle_Template_button_click_0_listener() {
          return ctx._onButtonClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3)(5, "span", 4);
      }

      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.buttonId)("disabled", ctx.disabled || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("aria-pressed", ctx.checked)("name", ctx.name || null)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx.disableRipple || ctx.disabled);
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple],
    styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:rgba(0,0,0,0);transform:translateZ(0)}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:4px}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px;opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}"],
    encapsulation: 2,
    changeDetection: 0
  });
  return MatButtonToggle;
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


let MatButtonToggleModule = /*#__PURE__*/(() => {
  class MatButtonToggleModule {}

  MatButtonToggleModule.ɵfac = function MatButtonToggleModule_Factory(t) {
    return new (t || MatButtonToggleModule)();
  };

  MatButtonToggleModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatButtonToggleModule
  });
  MatButtonToggleModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule]
  });
  return MatButtonToggleModule;
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
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=button-toggle.mjs.map

/***/ }),

/***/ 53626:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/table.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatCell": () => (/* binding */ MatCell),
/* harmony export */   "MatCellDef": () => (/* binding */ MatCellDef),
/* harmony export */   "MatColumnDef": () => (/* binding */ MatColumnDef),
/* harmony export */   "MatFooterCell": () => (/* binding */ MatFooterCell),
/* harmony export */   "MatFooterCellDef": () => (/* binding */ MatFooterCellDef),
/* harmony export */   "MatFooterRow": () => (/* binding */ MatFooterRow),
/* harmony export */   "MatFooterRowDef": () => (/* binding */ MatFooterRowDef),
/* harmony export */   "MatHeaderCell": () => (/* binding */ MatHeaderCell),
/* harmony export */   "MatHeaderCellDef": () => (/* binding */ MatHeaderCellDef),
/* harmony export */   "MatHeaderRow": () => (/* binding */ MatHeaderRow),
/* harmony export */   "MatHeaderRowDef": () => (/* binding */ MatHeaderRowDef),
/* harmony export */   "MatNoDataRow": () => (/* binding */ MatNoDataRow),
/* harmony export */   "MatRecycleRows": () => (/* binding */ MatRecycleRows),
/* harmony export */   "MatRow": () => (/* binding */ MatRow),
/* harmony export */   "MatRowDef": () => (/* binding */ MatRowDef),
/* harmony export */   "MatTable": () => (/* binding */ MatTable),
/* harmony export */   "MatTableDataSource": () => (/* binding */ MatTableDataSource),
/* harmony export */   "MatTableModule": () => (/* binding */ MatTableModule),
/* harmony export */   "MatTextColumn": () => (/* binding */ MatTextColumn),
/* harmony export */   "_MatTableDataSource": () => (/* binding */ _MatTableDataSource)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ 55013);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ 95017);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 47873);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ 21281);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 61135);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 46758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 56451);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 39646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 39841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 54004);









/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Enables the recycle view repeater strategy, which reduces rendering latency. Not compatible with
 * tables that animate rows.
 */

const _c0 = [[["caption"]], [["colgroup"], ["col"]]];
const _c1 = ["caption", "colgroup, col"];

function MatTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r0.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
  }
}

function MatTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r1.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
  }
}

let MatRecycleRows = /*#__PURE__*/(() => {
  class MatRecycleRows {}

  MatRecycleRows.ɵfac = function MatRecycleRows_Factory(t) {
    return new (t || MatRecycleRows)();
  };

  MatRecycleRows.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatRecycleRows,
    selectors: [["mat-table", "recycleRows", ""], ["table", "mat-table", "", "recycleRows", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY,
      useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._RecycleViewRepeaterStrategy
    }])]
  });
  return MatRecycleRows;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Wrapper for the CdkTable with Material design styles.
 */


let MatTable = /*#__PURE__*/(() => {
  class MatTable extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTable {
    constructor() {
      super(...arguments);
      /** Overrides the sticky CSS class set by the `CdkTable`. */

      this.stickyCssClass = 'mat-table-sticky';
      /** Overrides the need to add position: sticky on every sticky cell element in `CdkTable`. */

      this.needsPositionStickyOnElement = false;
    }

  }

  MatTable.ɵfac = /* @__PURE__ */function () {
    let ɵMatTable_BaseFactory;
    return function MatTable_Factory(t) {
      return (ɵMatTable_BaseFactory || (ɵMatTable_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTable)))(t || MatTable);
    };
  }();

  MatTable.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatTable,
    selectors: [["mat-table"], ["table", "mat-table", ""]],
    hostAttrs: [1, "mat-table"],
    hostVars: 2,
    hostBindings: function MatTable_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-table-fixed-layout", ctx.fixedLayout);
      }
    },
    exportAs: ["matTable"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([// TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
    //  is only included in the build if used.
    {
      provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._VIEW_REPEATER_STRATEGY,
      useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__._DisposeViewRepeaterStrategy
    }, {
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTable,
      useExisting: MatTable
    }, {
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CDK_TABLE,
      useExisting: MatTable
    }, {
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__._COALESCED_STYLE_SCHEDULER,
      useClass: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__._CoalescedStyleScheduler
    }, // Prevent nested tables from seeing this table's StickyPositioningListener.
    {
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.STICKY_POSITIONING_LISTENER,
      useValue: null
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c1,
    decls: 6,
    vars: 0,
    consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
    template: function MatTable_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 0)(3, 1)(4, 2)(5, 3);
      }
    },
    dependencies: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.DataRowOutlet, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.HeaderRowOutlet, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.FooterRowOutlet, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.NoDataRowOutlet],
    styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:sticky !important}.mat-table-fixed-layout{table-layout:fixed}"],
    encapsulation: 2
  });
  return MatTable;
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
 * Cell definition for the mat-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */


let MatCellDef = /*#__PURE__*/(() => {
  class MatCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellDef {}

  MatCellDef.ɵfac = /* @__PURE__ */function () {
    let ɵMatCellDef_BaseFactory;
    return function MatCellDef_Factory(t) {
      return (ɵMatCellDef_BaseFactory || (ɵMatCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCellDef)))(t || MatCellDef);
    };
  }();

  MatCellDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCellDef,
    selectors: [["", "matCellDef", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellDef,
      useExisting: MatCellDef
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return MatCellDef;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Header cell definition for the mat-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */


let MatHeaderCellDef = /*#__PURE__*/(() => {
  class MatHeaderCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderCellDef {}

  MatHeaderCellDef.ɵfac = /* @__PURE__ */function () {
    let ɵMatHeaderCellDef_BaseFactory;
    return function MatHeaderCellDef_Factory(t) {
      return (ɵMatHeaderCellDef_BaseFactory || (ɵMatHeaderCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderCellDef)))(t || MatHeaderCellDef);
    };
  }();

  MatHeaderCellDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatHeaderCellDef,
    selectors: [["", "matHeaderCellDef", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderCellDef,
      useExisting: MatHeaderCellDef
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return MatHeaderCellDef;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Footer cell definition for the mat-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */


let MatFooterCellDef = /*#__PURE__*/(() => {
  class MatFooterCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterCellDef {}

  MatFooterCellDef.ɵfac = /* @__PURE__ */function () {
    let ɵMatFooterCellDef_BaseFactory;
    return function MatFooterCellDef_Factory(t) {
      return (ɵMatFooterCellDef_BaseFactory || (ɵMatFooterCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterCellDef)))(t || MatFooterCellDef);
    };
  }();

  MatFooterCellDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatFooterCellDef,
    selectors: [["", "matFooterCellDef", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterCellDef,
      useExisting: MatFooterCellDef
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return MatFooterCellDef;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Column definition for the mat-table.
 * Defines a set of cells available for a table column.
 */


let MatColumnDef = /*#__PURE__*/(() => {
  class MatColumnDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkColumnDef {
    /** Unique name for this column. */
    get name() {
      return this._name;
    }

    set name(name) {
      this._setNameInput(name);
    }
    /**
     * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
     * In the future, this will only add "mat-column-" and columnCssClassName
     * will change from type string[] to string.
     * @docs-private
     */


    _updateColumnCssClassName() {
      super._updateColumnCssClassName();

      this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`);
    }

  }

  MatColumnDef.ɵfac = /* @__PURE__ */function () {
    let ɵMatColumnDef_BaseFactory;
    return function MatColumnDef_Factory(t) {
      return (ɵMatColumnDef_BaseFactory || (ɵMatColumnDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatColumnDef)))(t || MatColumnDef);
    };
  }();

  MatColumnDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatColumnDef,
    selectors: [["", "matColumnDef", ""]],
    inputs: {
      sticky: "sticky",
      name: ["matColumnDef", "name"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkColumnDef,
      useExisting: MatColumnDef
    }, {
      provide: 'MAT_SORT_HEADER_COLUMN_DEF',
      useExisting: MatColumnDef
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return MatColumnDef;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Header cell template container that adds the right classes and role. */


let MatHeaderCell = /*#__PURE__*/(() => {
  class MatHeaderCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderCell {}

  MatHeaderCell.ɵfac = /* @__PURE__ */function () {
    let ɵMatHeaderCell_BaseFactory;
    return function MatHeaderCell_Factory(t) {
      return (ɵMatHeaderCell_BaseFactory || (ɵMatHeaderCell_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderCell)))(t || MatHeaderCell);
    };
  }();

  MatHeaderCell.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatHeaderCell,
    selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]],
    hostAttrs: ["role", "columnheader", 1, "mat-header-cell"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return MatHeaderCell;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Footer cell template container that adds the right classes and role. */


let MatFooterCell = /*#__PURE__*/(() => {
  class MatFooterCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterCell {}

  MatFooterCell.ɵfac = /* @__PURE__ */function () {
    let ɵMatFooterCell_BaseFactory;
    return function MatFooterCell_Factory(t) {
      return (ɵMatFooterCell_BaseFactory || (ɵMatFooterCell_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterCell)))(t || MatFooterCell);
    };
  }();

  MatFooterCell.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatFooterCell,
    selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]],
    hostAttrs: ["role", "gridcell", 1, "mat-footer-cell"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return MatFooterCell;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Cell template container that adds the right classes and role. */


let MatCell = /*#__PURE__*/(() => {
  class MatCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCell {}

  MatCell.ɵfac = /* @__PURE__ */function () {
    let ɵMatCell_BaseFactory;
    return function MatCell_Factory(t) {
      return (ɵMatCell_BaseFactory || (ɵMatCell_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCell)))(t || MatCell);
    };
  }();

  MatCell.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCell,
    selectors: [["mat-cell"], ["td", "mat-cell", ""]],
    hostAttrs: ["role", "gridcell", 1, "mat-cell"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return MatCell;
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
 * Header row definition for the mat-table.
 * Captures the header row's template and other header properties such as the columns to display.
 */


let MatHeaderRowDef = /*#__PURE__*/(() => {
  class MatHeaderRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRowDef {}

  MatHeaderRowDef.ɵfac = /* @__PURE__ */function () {
    let ɵMatHeaderRowDef_BaseFactory;
    return function MatHeaderRowDef_Factory(t) {
      return (ɵMatHeaderRowDef_BaseFactory || (ɵMatHeaderRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRowDef)))(t || MatHeaderRowDef);
    };
  }();

  MatHeaderRowDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatHeaderRowDef,
    selectors: [["", "matHeaderRowDef", ""]],
    inputs: {
      columns: ["matHeaderRowDef", "columns"],
      sticky: ["matHeaderRowDefSticky", "sticky"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRowDef,
      useExisting: MatHeaderRowDef
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return MatHeaderRowDef;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Footer row definition for the mat-table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */


let MatFooterRowDef = /*#__PURE__*/(() => {
  class MatFooterRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRowDef {}

  MatFooterRowDef.ɵfac = /* @__PURE__ */function () {
    let ɵMatFooterRowDef_BaseFactory;
    return function MatFooterRowDef_Factory(t) {
      return (ɵMatFooterRowDef_BaseFactory || (ɵMatFooterRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRowDef)))(t || MatFooterRowDef);
    };
  }();

  MatFooterRowDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatFooterRowDef,
    selectors: [["", "matFooterRowDef", ""]],
    inputs: {
      columns: ["matFooterRowDef", "columns"],
      sticky: ["matFooterRowDefSticky", "sticky"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRowDef,
      useExisting: MatFooterRowDef
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return MatFooterRowDef;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Data row definition for the mat-table.
 * Captures the data row's template and other properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */


let MatRowDef = /*#__PURE__*/(() => {
  class MatRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRowDef {}

  MatRowDef.ɵfac = /* @__PURE__ */function () {
    let ɵMatRowDef_BaseFactory;
    return function MatRowDef_Factory(t) {
      return (ɵMatRowDef_BaseFactory || (ɵMatRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRowDef)))(t || MatRowDef);
    };
  }();

  MatRowDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatRowDef,
    selectors: [["", "matRowDef", ""]],
    inputs: {
      columns: ["matRowDefColumns", "columns"],
      when: ["matRowDefWhen", "when"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRowDef,
      useExisting: MatRowDef
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return MatRowDef;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Header template container that contains the cell outlet. Adds the right class and role. */


let MatHeaderRow = /*#__PURE__*/(() => {
  class MatHeaderRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRow {}

  MatHeaderRow.ɵfac = /* @__PURE__ */function () {
    let ɵMatHeaderRow_BaseFactory;
    return function MatHeaderRow_Factory(t) {
      return (ɵMatHeaderRow_BaseFactory || (ɵMatHeaderRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRow)))(t || MatHeaderRow);
    };
  }();

  MatHeaderRow.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatHeaderRow,
    selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]],
    hostAttrs: ["role", "row", 1, "mat-header-row"],
    exportAs: ["matHeaderRow"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkHeaderRow,
      useExisting: MatHeaderRow
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function MatHeaderRow_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
      }
    },
    dependencies: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellOutlet],
    encapsulation: 2
  });
  return MatHeaderRow;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Footer template container that contains the cell outlet. Adds the right class and role. */


let MatFooterRow = /*#__PURE__*/(() => {
  class MatFooterRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRow {}

  MatFooterRow.ɵfac = /* @__PURE__ */function () {
    let ɵMatFooterRow_BaseFactory;
    return function MatFooterRow_Factory(t) {
      return (ɵMatFooterRow_BaseFactory || (ɵMatFooterRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRow)))(t || MatFooterRow);
    };
  }();

  MatFooterRow.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatFooterRow,
    selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]],
    hostAttrs: ["role", "row", 1, "mat-footer-row"],
    exportAs: ["matFooterRow"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkFooterRow,
      useExisting: MatFooterRow
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function MatFooterRow_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
      }
    },
    dependencies: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellOutlet],
    encapsulation: 2
  });
  return MatFooterRow;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Data row template container that contains the cell outlet. Adds the right class and role. */


let MatRow = /*#__PURE__*/(() => {
  class MatRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRow {}

  MatRow.ɵfac = /* @__PURE__ */function () {
    let ɵMatRow_BaseFactory;
    return function MatRow_Factory(t) {
      return (ɵMatRow_BaseFactory || (ɵMatRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRow)))(t || MatRow);
    };
  }();

  MatRow.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatRow,
    selectors: [["mat-row"], ["tr", "mat-row", ""]],
    hostAttrs: ["role", "row", 1, "mat-row"],
    exportAs: ["matRow"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkRow,
      useExisting: MatRow
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function MatRow_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
      }
    },
    dependencies: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkCellOutlet],
    encapsulation: 2
  });
  return MatRow;
})();

/*#__PURE__*/
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Row that can be used to display a message when no data is shown in the table. */


let MatNoDataRow = /*#__PURE__*/(() => {
  class MatNoDataRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkNoDataRow {
    constructor() {
      super(...arguments);
      this._contentClassName = 'mat-no-data-row';
    }

  }

  MatNoDataRow.ɵfac = /* @__PURE__ */function () {
    let ɵMatNoDataRow_BaseFactory;
    return function MatNoDataRow_Factory(t) {
      return (ɵMatNoDataRow_BaseFactory || (ɵMatNoDataRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatNoDataRow)))(t || MatNoDataRow);
    };
  }();

  MatNoDataRow.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatNoDataRow,
    selectors: [["ng-template", "matNoDataRow", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkNoDataRow,
      useExisting: MatNoDataRow
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
  return MatNoDataRow;
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
 * Column that simply shows text content for the header and row cells. Assumes that the table
 * is using the native table implementation (`<table>`).
 *
 * By default, the name of this column will be the header text and data property accessor.
 * The header text can be overridden with the `headerText` input. Cell values can be overridden with
 * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
 * input.
 */


let MatTextColumn = /*#__PURE__*/(() => {
  class MatTextColumn extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTextColumn {}

  MatTextColumn.ɵfac = /* @__PURE__ */function () {
    let ɵMatTextColumn_BaseFactory;
    return function MatTextColumn_Factory(t) {
      return (ɵMatTextColumn_BaseFactory || (ɵMatTextColumn_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTextColumn)))(t || MatTextColumn);
    };
  }();

  MatTextColumn.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatTextColumn,
    selectors: [["mat-text-column"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    decls: 3,
    vars: 0,
    consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]],
    template: function MatTextColumn_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatTextColumn_th_1_Template, 2, 3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTextColumn_td_2_Template, 2, 3, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    },
    dependencies: [MatHeaderCellDef, MatColumnDef, MatCellDef, MatHeaderCell, MatCell],
    encapsulation: 2
  });
  return MatTextColumn;
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


const EXPORTED_DECLARATIONS = [// Table
MatTable, MatRecycleRows, // Template defs
MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, // Cell directives
MatHeaderCell, MatCell, MatFooterCell, // Row directives
MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn];
let MatTableModule = /*#__PURE__*/(() => {
  class MatTableModule {}

  MatTableModule.ɵfac = function MatTableModule_Factory(t) {
    return new (t || MatTableModule)();
  };

  MatTableModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatTableModule
  });
  MatTableModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__.CdkTableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
  });
  return MatTableModule;
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
 * Corresponds to `Number.MAX_SAFE_INTEGER`. Moved out into a variable here due to
 * flaky browser support and the value not being defined in Closure's typings.
 */


const MAX_SAFE_INTEGER = 9007199254740991;
/** Shared base class with MDC-based implementation. */

class _MatTableDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__.DataSource {
  constructor(initialData = []) {
    super();
    /** Stream emitting render data to the table (depends on ordered data changes). */

    this._renderData = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
    /** Stream that emits when a new filter string is set on the data source. */

    this._filter = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject('');
    /** Used to react to internal changes of the paginator that are made by the data source itself. */

    this._internalPageChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
     * Subscription to the changes that should trigger an update to the table's rendered rows, such
     * as filtering, sorting, pagination, or base data changes.
     */

    this._renderChangesSubscription = null;
    /**
     * Data accessor function that is used for accessing data properties for sorting through
     * the default sortData function.
     * This default function assumes that the sort header IDs (which defaults to the column name)
     * matches the data's properties (e.g. column Xyz represents data['Xyz']).
     * May be set to a custom function for different behavior.
     * @param data Data object that is being accessed.
     * @param sortHeaderId The name of the column that represents the data.
     */

    this.sortingDataAccessor = (data, sortHeaderId) => {
      const value = data[sortHeaderId];

      if ((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__._isNumberValue)(value)) {
        const numberValue = Number(value); // Numbers beyond `MAX_SAFE_INTEGER` can't be compared reliably so we
        // leave them as strings. For more info: https://goo.gl/y5vbSg

        return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
      }

      return value;
    };
    /**
     * Gets a sorted copy of the data array based on the state of the MatSort. Called
     * after changes are made to the filtered data or when sort changes are emitted from MatSort.
     * By default, the function retrieves the active sort and its direction and compares data
     * by retrieving data using the sortingDataAccessor. May be overridden for a custom implementation
     * of data ordering.
     * @param data The array of data that should be sorted.
     * @param sort The connected MatSort that holds the current sort state.
     */


    this.sortData = (data, sort) => {
      const active = sort.active;
      const direction = sort.direction;

      if (!active || direction == '') {
        return data;
      }

      return data.sort((a, b) => {
        let valueA = this.sortingDataAccessor(a, active);
        let valueB = this.sortingDataAccessor(b, active); // If there are data in the column that can be converted to a number,
        // it must be ensured that the rest of the data
        // is of the same type so as not to order incorrectly.

        const valueAType = typeof valueA;
        const valueBType = typeof valueB;

        if (valueAType !== valueBType) {
          if (valueAType === 'number') {
            valueA += '';
          }

          if (valueBType === 'number') {
            valueB += '';
          }
        } // If both valueA and valueB exist (truthy), then compare the two. Otherwise, check if
        // one value exists while the other doesn't. In this case, existing value should come last.
        // This avoids inconsistent results when comparing values to undefined/null.
        // If neither value exists, return 0 (equal).


        let comparatorResult = 0;

        if (valueA != null && valueB != null) {
          // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
          if (valueA > valueB) {
            comparatorResult = 1;
          } else if (valueA < valueB) {
            comparatorResult = -1;
          }
        } else if (valueA != null) {
          comparatorResult = 1;
        } else if (valueB != null) {
          comparatorResult = -1;
        }

        return comparatorResult * (direction == 'asc' ? 1 : -1);
      });
    };
    /**
     * Checks if a data object matches the data source's filter string. By default, each data object
     * is converted to a string of its properties and returns true if the filter has
     * at least one occurrence in that string. By default, the filter string has its whitespace
     * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
     * filter matching.
     * @param data Data object used to check against the filter.
     * @param filter Filter string that has been set on the data source.
     * @returns Whether the filter matches against the data
     */


    this.filterPredicate = (data, filter) => {
      // Transform the data into a lowercase string of all property values.
      const dataStr = Object.keys(data).reduce((currentTerm, key) => {
        // Use an obscure Unicode character to delimit the words in the concatenated string.
        // This avoids matches where the values of two columns combined will match the user's query
        // (e.g. `Flute` and `Stop` will match `Test`). The character is intended to be something
        // that has a very low chance of being typed in by somebody in a text field. This one in
        // particular is "White up-pointing triangle with dot" from
        // https://en.wikipedia.org/wiki/List_of_Unicode_characters
        return currentTerm + data[key] + '◬';
      }, '').toLowerCase(); // Transform the filter by converting it to lowercase and removing whitespace.

      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) != -1;
    };

    this._data = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(initialData);

    this._updateChangeSubscription();
  }
  /** Array of data that should be rendered by the table, where each object represents one row. */


  get data() {
    return this._data.value;
  }

  set data(data) {
    data = Array.isArray(data) ? data : [];

    this._data.next(data); // Normally the `filteredData` is updated by the re-render
    // subscription, but that won't happen if it's inactive.


    if (!this._renderChangesSubscription) {
      this._filterData(data);
    }
  }
  /**
   * Filter term that should be used to filter out objects from the data array. To override how
   * data objects match to this filter string, provide a custom function for filterPredicate.
   */


  get filter() {
    return this._filter.value;
  }

  set filter(filter) {
    this._filter.next(filter); // Normally the `filteredData` is updated by the re-render
    // subscription, but that won't happen if it's inactive.


    if (!this._renderChangesSubscription) {
      this._filterData(this.data);
    }
  }
  /**
   * Instance of the MatSort directive used by the table to control its sorting. Sort changes
   * emitted by the MatSort will trigger an update to the table's rendered data.
   */


  get sort() {
    return this._sort;
  }

  set sort(sort) {
    this._sort = sort;

    this._updateChangeSubscription();
  }
  /**
   * Instance of the MatPaginator component used by the table to control what page of the data is
   * displayed. Page changes emitted by the MatPaginator will trigger an update to the
   * table's rendered data.
   *
   * Note that the data source uses the paginator's properties to calculate which page of data
   * should be displayed. If the paginator receives its properties as template inputs,
   * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
   * initialized before assigning it to this data source.
   */


  get paginator() {
    return this._paginator;
  }

  set paginator(paginator) {
    this._paginator = paginator;

    this._updateChangeSubscription();
  }
  /**
   * Subscribe to changes that should trigger an update to the table's rendered rows. When the
   * changes occur, process the current state of the filter, sort, and pagination along with
   * the provided base data and send it to the table for rendering.
   */


  _updateChangeSubscription() {
    // Sorting and/or pagination should be watched if MatSort and/or MatPaginator are provided.
    // The events should emit whenever the component emits a change or initializes, or if no
    // component is provided, a stream with just a null event should be provided.
    // The `sortChange` and `pageChange` acts as a signal to the combineLatests below so that the
    // pipeline can progress to the next step. Note that the value from these streams are not used,
    // they purely act as a signal to progress in the pipeline.
    const sortChange = this._sort ? (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(this._sort.sortChange, this._sort.initialized) : (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(null);
    const pageChange = this._paginator ? (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(this._paginator.page, this._internalPageChanges, this._paginator.initialized) : (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(null);
    const dataStream = this._data; // Watch for base data or filter changes to provide a filtered set of data.

    const filteredData = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([dataStream, this._filter]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([data]) => this._filterData(data))); // Watch for filtered data or sort changes to provide an ordered set of data.

    const orderedData = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([filteredData, sortChange]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([data]) => this._orderData(data))); // Watch for ordered data or page changes to provide a paged set of data.

    const paginatedData = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([orderedData, pageChange]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([data]) => this._pageData(data))); // Watched for paged data changes and send the result to the table to render.

    this._renderChangesSubscription?.unsubscribe();
    this._renderChangesSubscription = paginatedData.subscribe(data => this._renderData.next(data));
  }
  /**
   * Returns a filtered data array where each filter object contains the filter string within
   * the result of the filterTermAccessor function. If no filter is set, returns the data array
   * as provided.
   */


  _filterData(data) {
    // If there is a filter string, filter out data that does not contain it.
    // Each data object is converted to a string using the function defined by filterTermAccessor.
    // May be overridden for customization.
    this.filteredData = this.filter == null || this.filter === '' ? data : data.filter(obj => this.filterPredicate(obj, this.filter));

    if (this.paginator) {
      this._updatePaginator(this.filteredData.length);
    }

    return this.filteredData;
  }
  /**
   * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
   * data array as provided. Uses the default data accessor for data lookup, unless a
   * sortDataAccessor function is defined.
   */


  _orderData(data) {
    // If there is no active sort or direction, return the data without trying to sort.
    if (!this.sort) {
      return data;
    }

    return this.sortData(data.slice(), this.sort);
  }
  /**
   * Returns a paged slice of the provided data array according to the provided MatPaginator's page
   * index and length. If there is no paginator provided, returns the data array as provided.
   */


  _pageData(data) {
    if (!this.paginator) {
      return data;
    }

    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.slice(startIndex, startIndex + this.paginator.pageSize);
  }
  /**
   * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
   * index does not exceed the paginator's last page. Values are changed in a resolved promise to
   * guard against making property changes within a round of change detection.
   */


  _updatePaginator(filteredDataLength) {
    Promise.resolve().then(() => {
      const paginator = this.paginator;

      if (!paginator) {
        return;
      }

      paginator.length = filteredDataLength; // If the page index is set beyond the page, reduce it to the last page.

      if (paginator.pageIndex > 0) {
        const lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
        const newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);

        if (newPageIndex !== paginator.pageIndex) {
          paginator.pageIndex = newPageIndex; // Since the paginator only emits after user-generated changes,
          // we need our own stream so we know to should re-render the data.

          this._internalPageChanges.next();
        }
      }
    });
  }
  /**
   * Used by the MatTable. Called when it connects to the data source.
   * @docs-private
   */


  connect() {
    if (!this._renderChangesSubscription) {
      this._updateChangeSubscription();
    }

    return this._renderData;
  }
  /**
   * Used by the MatTable. Called when it disconnects from the data source.
   * @docs-private
   */


  disconnect() {
    this._renderChangesSubscription?.unsubscribe();
    this._renderChangesSubscription = null;
  }

}
/**
 * Data source that accepts a client-side data array and includes native support of filtering,
 * sorting (using MatSort), and pagination (using MatPaginator).
 *
 * Allows for sort customization by overriding sortingDataAccessor, which defines how data
 * properties are accessed. Also allows for filter customization by overriding filterTermAccessor,
 * which defines how row data is converted to a string for filter matching.
 *
 * **Note:** This class is meant to be a simple data source to help you get started. As such
 * it isn't equipped to handle some more advanced cases like robust i18n support or server-side
 * interactions. If your app needs to support more advanced use cases, consider implementing your
 * own `DataSource`.
 */


class MatTableDataSource extends _MatTableDataSource {}
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


 //# sourceMappingURL=table.mjs.map

/***/ })

}]);