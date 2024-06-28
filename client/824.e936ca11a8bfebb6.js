"use strict";
(self["webpackChunktracker"] = self["webpackChunktracker"] || []).push([[824],{

/***/ 34528:
/*!****************************************************************!*\
  !*** ./src/app/core/model/table-header-data/member-setting.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "betaTeaster": () => (/* binding */ betaTeaster),
/* harmony export */   "billingTable": () => (/* binding */ billingTable),
/* harmony export */   "dateFormat": () => (/* binding */ dateFormat),
/* harmony export */   "durationFormat": () => (/* binding */ durationFormat),
/* harmony export */   "integrationTable": () => (/* binding */ integrationTable),
/* harmony export */   "paymentAccountTable": () => (/* binding */ paymentAccountTable),
/* harmony export */   "siteNotification": () => (/* binding */ siteNotification),
/* harmony export */   "timeFormat": () => (/* binding */ timeFormat),
/* harmony export */   "workSummaries": () => (/* binding */ workSummaries)
/* harmony export */ });
const billingTable = [{
  key: 'organization_name',
  label: 'Organization',
  config: {
    isProfileWithLetter: true // isRedirect: true

  }
}, {
  key: 'status',
  label: 'Status',
  config: {
    isText: true
  }
}, {
  key: 'createdon',
  label: 'Created on',
  config: {
    isText: true
  }
}, {
  key: 'plan',
  label: 'Plan',
  config: {
    isText: true
  }
}, {
  key: 'discount',
  label: 'Discount',
  config: {
    isText: true // isRedirect: true

  }
}, {
  key: 'btn',
  label: '',
  config: {
    isBtn: true,
    btnValue: 'Manage billing'
  }
}];
const paymentAccountTable = [{
  key: 'organization_name',
  label: 'Organization',
  config: {
    isProfileWithLetter: true // isRedirect: true

  }
}, {
  key: 'account',
  label: 'Account',
  config: {
    isText: true
  }
}, {
  key: 'period',
  label: 'Period',
  config: {
    isText: true
  }
}, {
  key: 'rate',
  label: 'Rate',
  config: {
    isText: true
  }
}];
const integrationTable = [{
  key: 'organization',
  label: 'Organization',
  config: {
    isText: true
  }
}, {
  key: 'integration',
  label: 'Integration',
  config: {
    isText: true
  }
}]; // permission menu for setting

let workSummaries = [{
  value: 'daily',
  permission: 'Daily'
}, {
  value: 'weekly',
  permission: 'Weekly'
}, {
  value: 'never',
  permission: 'Never'
}];
let siteNotification = [{
  value: 'mobile',
  permission: 'Mobile'
}, {
  value: 'none',
  permission: 'None'
}];
let betaTeaster = [{
  value: 'no',
  permission: 'No',
  class: 'active'
}, {
  value: 'yes',
  permission: 'Yes'
}];
let dateFormat = [{
  permission: 'm/d/y (e.g. 7/31/2017)',
  value: 'm/d/y'
}, {
  permission: 'd/m/y (e.g. 31/7/2017)',
  value: 'd/m/y'
}, {
  permission: 'y/m/d (e.g. 2017/7/31)',
  value: 'y/m/d'
}, {
  permission: 'y-m-d (e.g. 2017-07-31)',
  value: 'y-m-d'
}, {
  permission: 'Pretty (e.g. Mon, Jul 31, 2017)',
  value: 'pretty'
}];
let timeFormat = [{
  permission: '12-hour (e.g. 4:10 pm)',
  value: '12hour'
}, {
  permission: '24-hour (e.g. 16:10)',
  value: '24hour'
}, {
  permission: '12-hour with seconds (e.g. 4:10:00 pm)',
  value: '12hourWithSeconds'
}, {
  permission: '24-hour with seconds (e.g. 16:10:00)',
  value: '24hourWithSeconds'
}];
let durationFormat = [{
  permission: 'Decimal (e.g. 1.25)',
  value: 'decimal'
}, {
  permission: 'HH:MM (e.g. 1:15)',
  value: 'hhmm'
}, {
  permission: 'HH:MM:SS (e.g. 1:15:00)',
  value: 'hhmmss'
}];

/***/ }),

/***/ 82081:
/*!*******************************************************************!*\
  !*** ./src/app/pages/member-setting/billing/billing.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingComponent": () => (/* binding */ BillingComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_model_table_header_data_member_setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/member-setting */ 34528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var src_app_core_services_organization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/organization.service */ 14261);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/dynamic-table/dynamic-table.component */ 57834);






let BillingComponent = /*#__PURE__*/(() => {
  class BillingComponent {
    constructor(masterService, organizationService, router) {
      this.masterService = masterService;
      this.organizationService = organizationService;
      this.router = router;
      this.billingTableCols = src_app_core_model_table_header_data_member_setting__WEBPACK_IMPORTED_MODULE_0__.billingTable;
      this.organizationArray = [];
      this.totalRecords = 0;
      this.start = 1;
      this.limit = 25;
    }

    ngOnInit() {
      this.GetActiveorganzation();
    }

    GetActiveorganzation() {
      this.masterService.showSpppiner();
      this.organizationService.GetOrganization(this.start, this.limit, false).subscribe(response => {
        if (response && response.ReturnCode == 200 && response.err == 0) {
          if (response['Data'].list.length > 0) {
            this.masterService.hideSppiner();
            this.totalRecords = response.Data.count;
            response.Data.list.filter(x => {
              x['redirectTo'] = '/people/members';
            });
            this.organizationArray = response.Data.list;
          } else {
            this.totalRecords = response.Data.length;
            this.router.navigate(['/guest/get-started']);
            this.masterService.hideSppiner();
          }
        } else {
          this.masterService.hideSppiner();
        }
      }, error => {
        this.masterService.hideSppiner();
        this.masterService.showError(error.error.ReturnMsg, 'Error');
      });
    }

  }

  BillingComponent.ɵfac = function BillingComponent_Factory(t) {
    return new (t || BillingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_1__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_organization_service__WEBPACK_IMPORTED_MODULE_2__.OrganizationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };

  BillingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: BillingComponent,
    selectors: [["app-billing"]],
    decls: 6,
    vars: 2,
    consts: [[3, "tableColsDetails", "tableDataArray"]],
    template: function BillingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div")(2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Each organization is billed separately ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "TrackerX-dynamic-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tableColsDetails", ctx.billingTableCols)("tableDataArray", ctx.organizationArray);
      }
    },
    dependencies: [_shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_3__.DynamicTableComponent]
  });
  return BillingComponent;
})();

/***/ }),

/***/ 25133:
/*!***************************************************************************!*\
  !*** ./src/app/pages/member-setting/integration/integration.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntegrationComponent": () => (/* binding */ IntegrationComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_model_table_header_data_member_setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/member-setting */ 34528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/dynamic-table/dynamic-table.component */ 57834);





function IntegrationComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "TrackerX-dynamic-table", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tableColsDetails", ctx_r0.integrationTableCols);
  }
}

function IntegrationComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No integrations");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

let IntegrationComponent = /*#__PURE__*/(() => {
  class IntegrationComponent {
    constructor() {
      this.integrationTableCols = src_app_core_model_table_header_data_member_setting__WEBPACK_IMPORTED_MODULE_0__.integrationTable;
      this.integrationArray = [];
      this.showTable = false;
    }

    ngOnInit() {}

  }

  IntegrationComponent.ɵfac = function IntegrationComponent_Factory(t) {
    return new (t || IntegrationComponent)();
  };

  IntegrationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: IntegrationComponent,
    selectors: [["app-integration"]],
    decls: 3,
    vars: 2,
    consts: [[4, "ngIf"], [3, "tableColsDetails", "tableDataArray", "actionMenu"], [1, "h4"]],
    template: function IntegrationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, IntegrationComponent_div_1_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, IntegrationComponent_div_2_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.showTable);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_1__.DynamicTableComponent]
  });
  return IntegrationComponent;
})();

/***/ }),

/***/ 79785:
/*!***********************************************************************!*\
  !*** ./src/app/pages/member-setting/invoicing/invoicing.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoicingComponent": () => (/* binding */ InvoicingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 284);









const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};

const _c1 = function (a0) {
  return {
    "text-danger": a0
  };
};

let InvoicingComponent = /*#__PURE__*/(() => {
  class InvoicingComponent {
    constructor(masterService, formBuilder) {
      this.masterService = masterService;
      this.formBuilder = formBuilder;
      this.invoicFormSubmitted = false;
      this.imageSizeError = false;
      this.organizationDetails = {};
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.invoiceForm = this.formBuilder.group({
        address: ['', []],
        logo: ['', []],
        taxId: ['', []],
        taxRate: ['', []],
        notes: ['', []],
        netTerms: ['', []]
      });
    }

    get invoicFormVal() {
      return this.invoiceForm.controls;
    }

    selectexpensesImageFile(event, file) {
      if (event.target.files[0].size / 1024 / 1024 > 1) {
        this.personPhotoImageFile = file;
        this.selectedFiles = event.target.files;
        this.imageSizeError = true;
        return;
      } else {
        this.imageSizeError = false;
      }
    }

    saveForm() {
      console.log(this.invoiceForm.value);
    }

  }

  InvoicingComponent.ɵfac = function InvoicingComponent_Factory(t) {
    return new (t || InvoicingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_0__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
  };

  InvoicingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: InvoicingComponent,
    selectors: [["app-invoicing"]],
    decls: 59,
    vars: 14,
    consts: [[1, ""], [1, "col-6"], ["onchange", "", 3, "formGroup"], ["for", "address"], ["appearance", "fill", 3, "ngClass"], ["id", "address", "formControlName", "address", "matInput", "", "cols", "5", "rows", "5"], ["for", "logo"], ["type", "file", "name", "logo", "id", "logo", "accept", "image/.png,.jpeg,.jpg", "placeholder", "Browse Files", "formControlName", "logo", 1, "upload-box", 3, "change"], ["fileInput", ""], [3, "ngClass"], ["for", "taxId"], ["matTooltip", "Used to show your tax id for team invoices"], ["src", "../../../assets/images/icon/info.svg", "alt", ""], ["type", "text", "matInput", "", "formControlName", "taxId"], [1, "col-md-4"], ["for", "taxRate"], ["matTooltip", "Info about the action"], ["appearance", "fill", 1, "position-relative", 3, "ngClass"], ["type", "text", "matInput", "", "formControlName", "taxRate", "id", "taxRate", "placeholder", "0"], [1, "invoice_bedge", "bg_blue_gradient"], ["for", "notes"], ["matTooltip", "Used as your default note for team invoices"], ["appearance", "fill"], ["id", "notes", "cols", "5", "rows", "5", "matInput", "", "formControlName", "notes"], ["for", "netTerms"], ["matTooltip", "Used as your default net terms for team invoices"], ["type", "netTerms", "matInput", "", "formControlName", "netTerms", "id", "netTerms", "placeholder", "0"]],
    template: function InvoicingComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div")(6, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Enter valid address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div")(13, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function InvoicingComponent_Template_input_change_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);

          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);

          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.selectexpensesImageFile($event, _r0.files));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "File size limit: 1 MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Taxes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div")(22, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Tax ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Enter valid Tax ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14)(31, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Tax Rate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Enter Tax rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Payment Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div")(44, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Notes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 14)(51, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Net Terms ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.invoiceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Organization: ", ctx.organizationDetails["organization_name"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.invoicFormSubmitted && (ctx.invoicFormVal["address"] == null ? null : ctx.invoicFormVal["address"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c1, ctx.imageSizeError));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx.invoicFormSubmitted && (ctx.invoicFormVal["taxId"] == null ? null : ctx.invoicFormVal["taxId"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, ctx.invoicFormSubmitted && (ctx.invoicFormVal["taxRate"] == null ? null : ctx.invoicFormVal["taxRate"].errors)));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltip, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput]
  });
  return InvoicingComponent;
})();

/***/ }),

/***/ 3352:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/member-setting/member-setting/member-setting.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberSettingComponent": () => (/* binding */ MemberSettingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);




const _c0 = function (a0) {
  return {
    "active": a0
  };
};

let MemberSettingComponent = /*#__PURE__*/(() => {
  class MemberSettingComponent {
    constructor(router) {
      this.router = router;
      this.tabActive = '';
    }

    ngOnInit() {
      if (window.location.pathname.split('/').length == 2) {
        setTimeout(() => {
          this.tabActive = 'billing';
          this.TabClick('billing');
        }, 500);
      } else {
        this.tabActive = window.location.pathname.split('/')[2];
      }
    }

    TabClick(event) {
      if (event) {
        this.tabActive = event;
        this.router.navigateByUrl('/users/' + event);
      }
    }

  }

  MemberSettingComponent.ɵfac = function MemberSettingComponent_Factory(t) {
    return new (t || MemberSettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };

  MemberSettingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MemberSettingComponent,
    selectors: [["app-member-setting"]],
    decls: 24,
    vars: 15,
    consts: [[1, "white_box", "main_content"], [1, "mb-5"], [1, "dashboars_tabs", "mb-5"], [1, "nav", "nav-tabs", "tab_design_one"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#billing", 1, "nav-link", 3, "ngClass", "click"], ["data-bs-toggle", "tab", "href", "#paymentAccount", 1, "nav-link", 3, "ngClass", "click"], ["data-bs-toggle", "tab", "href", "#integrations", 1, "nav-link", 3, "ngClass", "click"], ["data-bs-toggle", "tab", "href", "#invoicing", 1, "nav-link", 3, "ngClass", "click"], ["data-bs-toggle", "tab", "href", "#setting", 1, "nav-link", 3, "ngClass", "click"]],
    template: function MemberSettingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Member settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div")(5, "div", 2)(6, "ul", 3)(7, "li", 4)(8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberSettingComponent_Template_a_click_8_listener() {
          return ctx.TabClick("billing");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Billing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4)(11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberSettingComponent_Template_a_click_11_listener() {
          return ctx.TabClick("payment-account");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Payment Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4)(14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberSettingComponent_Template_a_click_14_listener() {
          return ctx.TabClick("integrations");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Integrations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 4)(17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberSettingComponent_Template_a_click_17_listener() {
          return ctx.TabClick("invoicing");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Invoicing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 4)(20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberSettingComponent_Template_a_click_20_listener() {
          return ctx.TabClick("setting");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.tabActive == "billing"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.tabActive == "payment-account"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.tabActive == "integrations"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.tabActive == "invoicing"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.tabActive == "setting"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet]
  });
  return MemberSettingComponent;
})();

/***/ }),

/***/ 22797:
/*!**********************************************************************!*\
  !*** ./src/app/pages/member-setting/membersetting-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MembersettingRoutingModule": () => (/* binding */ MembersettingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _billing_billing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./billing/billing.component */ 82081);
/* harmony import */ var _integration_integration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./integration/integration.component */ 25133);
/* harmony import */ var _invoicing_invoicing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoicing/invoicing.component */ 79785);
/* harmony import */ var _member_setting_member_setting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./member-setting/member-setting.component */ 3352);
/* harmony import */ var _payment_account_payment_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment-account/payment-account.component */ 17178);
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setting/setting.component */ 48287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);









const routes = [{
  path: '',
  component: _member_setting_member_setting_component__WEBPACK_IMPORTED_MODULE_3__.MemberSettingComponent,
  children: [{
    path: 'billing',
    component: _billing_billing_component__WEBPACK_IMPORTED_MODULE_0__.BillingComponent
  }, {
    path: 'payment-account',
    component: _payment_account_payment_account_component__WEBPACK_IMPORTED_MODULE_4__.PaymentAccountComponent
  }, {
    path: 'integrations',
    component: _integration_integration_component__WEBPACK_IMPORTED_MODULE_1__.IntegrationComponent
  }, {
    path: 'invoicing',
    component: _invoicing_invoicing_component__WEBPACK_IMPORTED_MODULE_2__.InvoicingComponent
  }, {
    path: 'setting',
    component: _setting_setting_component__WEBPACK_IMPORTED_MODULE_5__.SettingComponent
  }]
}];
let MembersettingRoutingModule = /*#__PURE__*/(() => {
  class MembersettingRoutingModule {}

  MembersettingRoutingModule.ɵfac = function MembersettingRoutingModule_Factory(t) {
    return new (t || MembersettingRoutingModule)();
  };

  MembersettingRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: MembersettingRoutingModule
  });
  MembersettingRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
  return MembersettingRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MembersettingRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 20824:
/*!**************************************************************!*\
  !*** ./src/app/pages/member-setting/membersetting.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MembersettingModule": () => (/* binding */ MembersettingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _membersetting_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./membersetting-routing.module */ 22797);
/* harmony import */ var _member_setting_member_setting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./member-setting/member-setting.component */ 3352);
/* harmony import */ var _billing_billing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./billing/billing.component */ 82081);
/* harmony import */ var _payment_account_payment_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment-account/payment-account.component */ 17178);
/* harmony import */ var _integration_integration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./integration/integration.component */ 25133);
/* harmony import */ var _invoicing_invoicing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invoicing/invoicing.component */ 79785);
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./setting/setting.component */ 48287);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ 90811);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 94650);

 // components













let MembersettingModule = /*#__PURE__*/(() => {
  class MembersettingModule {}

  MembersettingModule.ɵfac = function MembersettingModule_Factory(t) {
    return new (t || MembersettingModule)();
  };

  MembersettingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: MembersettingModule
  });
  MembersettingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _membersetting_routing_module__WEBPACK_IMPORTED_MODULE_1__.MembersettingRoutingModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__.MatButtonToggleModule]
  });
  return MembersettingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](MembersettingModule, {
    declarations: [_member_setting_member_setting_component__WEBPACK_IMPORTED_MODULE_2__.MemberSettingComponent, _billing_billing_component__WEBPACK_IMPORTED_MODULE_3__.BillingComponent, _payment_account_payment_account_component__WEBPACK_IMPORTED_MODULE_4__.PaymentAccountComponent, _integration_integration_component__WEBPACK_IMPORTED_MODULE_5__.IntegrationComponent, _invoicing_invoicing_component__WEBPACK_IMPORTED_MODULE_6__.InvoicingComponent, _setting_setting_component__WEBPACK_IMPORTED_MODULE_7__.SettingComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _membersetting_routing_module__WEBPACK_IMPORTED_MODULE_1__.MembersettingRoutingModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__.MatButtonToggleModule]
  });
})();

/***/ }),

/***/ 17178:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/member-setting/payment-account/payment-account.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentAccountComponent": () => (/* binding */ PaymentAccountComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_model_table_header_data_member_setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/member-setting */ 34528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/dynamic-table/dynamic-table.component */ 57834);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);






function PaymentAccountComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "TrackerX-dynamic-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tableColsDetails", ctx_r0.paymentAccountTableCols);
  }
}

function PaymentAccountComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No payroll accounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

let PaymentAccountComponent = /*#__PURE__*/(() => {
  class PaymentAccountComponent {
    constructor() {
      this.tableShow = false;
      this.paymentAccountTableCols = src_app_core_model_table_header_data_member_setting__WEBPACK_IMPORTED_MODULE_0__.paymentAccountTable;
      this.paymentAccountArray = [];
    }

    ngOnInit() {}

  }

  PaymentAccountComponent.ɵfac = function PaymentAccountComponent_Factory(t) {
    return new (t || PaymentAccountComponent)();
  };

  PaymentAccountComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: PaymentAccountComponent,
    selectors: [["app-payment-account"]],
    decls: 19,
    vars: 2,
    consts: [[1, "d-flex", "justify-content-between"], ["matTooltip", "Default payment accounts are used by the export payments action in team payments. When using the payroll system the configuration of default accounts is used to update the payroll payment integrations."], ["src", "../../../assets/images/icon/info.svg", "alt", ""], [1, "btn_blue"], ["matTooltip", "Payroll accounts are used by the payroll system to automatically pay for the hours tracked in the Hubstaff system."], [4, "ngIf"], [3, "tableColsDetails", "tableDataArray", "actionMenu"], [1, "h5"]],
    template: function PaymentAccountComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div")(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Default payment accounts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "No default payment accounts");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div")(10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Add an account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div")(13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Payroll accounts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, PaymentAccountComponent_div_17_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, PaymentAccountComponent_div_18_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tableShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.tableShow);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_1__.DynamicTableComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltip]
  });
  return PaymentAccountComponent;
})();

/***/ }),

/***/ 48287:
/*!*******************************************************************!*\
  !*** ./src/app/pages/member-setting/setting/setting.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingComponent": () => (/* binding */ SettingComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_model_table_header_data_member_setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/member-setting */ 34528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button-toggle */ 90811);








function SettingComponent_mat_button_toggle_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-button-toggle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const permission_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", permission_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", permission_r6.permission, "");
  }
}

function SettingComponent_mat_button_toggle_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-button-toggle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const permission_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", permission_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", permission_r7.permission, "");
  }
}

function SettingComponent_mat_button_toggle_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-button-toggle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const permission_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", permission_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", permission_r8.permission, "");
  }
}

function SettingComponent_mat_button_toggle_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-button-toggle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const permission_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", permission_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", permission_r9.permission, "");
  }
}

function SettingComponent_mat_button_toggle_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-button-toggle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const permission_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", permission_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", permission_r10.permission, "");
  }
}

function SettingComponent_mat_button_toggle_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-button-toggle", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const permission_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", permission_r11.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", permission_r11.permission, "");
  }
}

let SettingComponent = /*#__PURE__*/(() => {
  class SettingComponent {
    constructor(formBuilder) {
      this.formBuilder = formBuilder;
      this.workSummaries = src_app_core_model_table_header_data_member_setting__WEBPACK_IMPORTED_MODULE_0__.workSummaries;
      this.siteNotification = src_app_core_model_table_header_data_member_setting__WEBPACK_IMPORTED_MODULE_0__.siteNotification;
      this.betaTeaster = src_app_core_model_table_header_data_member_setting__WEBPACK_IMPORTED_MODULE_0__.betaTeaster;
      this.dateFormat = src_app_core_model_table_header_data_member_setting__WEBPACK_IMPORTED_MODULE_0__.dateFormat;
      this.timeFormat = src_app_core_model_table_header_data_member_setting__WEBPACK_IMPORTED_MODULE_0__.timeFormat;
      this.durationFormat = src_app_core_model_table_header_data_member_setting__WEBPACK_IMPORTED_MODULE_0__.durationFormat;
    }

    ngOnInit() {
      this.settingForm = this.formBuilder.group({
        workSummaries: ['daily', []],
        siteNotification: ['mobile', []],
        betaTeaster: ['no', []],
        dateFormat: ['pretty', []],
        timeFormat: ['12hour', []],
        durationFormat: ['hhmm', []]
      });
    }

    formValueChange() {
      console.log(this.settingForm.value);
    }

  }

  SettingComponent.ɵfac = function SettingComponent_Factory(t) {
    return new (t || SettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
  };

  SettingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SettingComponent,
    selectors: [["app-setting"]],
    decls: 56,
    vars: 7,
    consts: [[3, "formGroup"], ["matTooltip", "A work summary is an emailed report of time and activity. It is only sent if there is work to report."], ["src", "../../../assets/images/icon/info.svg", "alt", ""], ["formControlName", "workSummaries", 1, "nav", "nav-tabs", "common_tabs", "mb-5"], ["class", "nav-item", 3, "value", 4, "ngFor", "ngForOf"], ["matTooltip", "Receive a notification when a team member you manage enters/exits a job site"], ["formControlName", "siteNotification", 1, "nav", "nav-tabs", "common_tabs", "mb-5"], ["matTooltip", "Beta test new features in the app.  The app must be restarted for this change to take effect."], ["formControlName", "betaTeaster", 1, "nav", "nav-tabs", "common_tabs", "mb-5"], ["matTooltip", "Control how dates are displayed throughout the system."], ["formControlName", "dateFormat", 1, "nav", "nav-tabs", "common_tabs", "mb-5"], ["matTooltip", "Control how time is displayed throughout the system."], ["formControlName", "timeFormat", 1, "nav", "nav-tabs", "common_tabs", "mb-5"], ["matTooltip", "Control how durations are displayed throughout the system."], ["formControlName", "durationFormat", 1, "nav", "nav-tabs", "common_tabs", "mb-5"], [1, "btn_blue", 3, "click"], [1, "nav-item", 3, "value"]],
    template: function SettingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div")(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Disabled Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "To disable a notification, click the link in the bottom of the email.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div")(7, "form", 0)(8, "div")(9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div")(12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "SEND WORK SUMMARIES: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-button-toggle-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SettingComponent_mat_button_toggle_17_Template, 2, 2, "mat-button-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div")(19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "JOB SITE ENTER/EXIT NOTIFICATIONS: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-button-toggle-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, SettingComponent_mat_button_toggle_24_Template, 2, 2, "mat-button-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div")(26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "BETA TESTER: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-button-toggle-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, SettingComponent_mat_button_toggle_31_Template, 2, 2, "mat-button-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div")(33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "DATE FORMAT: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-button-toggle-group", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, SettingComponent_mat_button_toggle_38_Template, 2, 2, "mat-button-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div")(40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Time FORMAT: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-button-toggle-group", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, SettingComponent_mat_button_toggle_45_Template, 2, 2, "mat-button-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div")(47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Duration FORMAT: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-button-toggle-group", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, SettingComponent_mat_button_toggle_52_Template, 2, 2, "mat-button-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div")(54, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingComponent_Template_button_click_54_listener() {
          return ctx.formValueChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.settingForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.workSummaries);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.siteNotification);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.betaTeaster);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.dateFormat);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.timeFormat);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.durationFormat);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltip, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__.MatButtonToggle]
  });
  return SettingComponent;
})();

/***/ })

}]);