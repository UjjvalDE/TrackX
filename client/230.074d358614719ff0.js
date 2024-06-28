"use strict";
(self["webpackChunktracker"] = self["webpackChunktracker"] || []).push([[230],{

/***/ 90284:
/*!******************************************************************!*\
  !*** ./src/app/core/model/table-header-data/setting_policies.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkBreaksPoliciesAction": () => (/* binding */ WorkBreaksPoliciesAction),
/* harmony export */   "WorkBreaksPoliciesArchivedAction": () => (/* binding */ WorkBreaksPoliciesArchivedAction),
/* harmony export */   "WorkBreaksPoliciesTable": () => (/* binding */ WorkBreaksPoliciesTable),
/* harmony export */   "achievements_efficiencyProTable": () => (/* binding */ achievements_efficiencyProTable),
/* harmony export */   "achievements_productivityChampTable": () => (/* binding */ achievements_productivityChampTable),
/* harmony export */   "achievements_timeHeroTable": () => (/* binding */ achievements_timeHeroTable),
/* harmony export */   "activity_deleteScreeShotTable": () => (/* binding */ activity_deleteScreeShotTable),
/* harmony export */   "activity_screenshotBlur": () => (/* binding */ activity_screenshotBlur),
/* harmony export */   "activity_screenshotFrequency": () => (/* binding */ activity_screenshotFrequency),
/* harmony export */   "activity_trackAppsUrls": () => (/* binding */ activity_trackAppsUrls),
/* harmony export */   "generalProjectSettingTable": () => (/* binding */ generalProjectSettingTable),
/* harmony export */   "general_productLinksTable": () => (/* binding */ general_productLinksTable),
/* harmony export */   "permissionProject": () => (/* binding */ permissionProject),
/* harmony export */   "permissionTimeApps_AllowedApps": () => (/* binding */ permissionTimeApps_AllowedApps),
/* harmony export */   "permissionTimeApps_idleTimeout": () => (/* binding */ permissionTimeApps_idleTimeout),
/* harmony export */   "permissionTimeApps_keepIdleTime": () => (/* binding */ permissionTimeApps_keepIdleTime),
/* harmony export */   "schedules_shiftAlerts": () => (/* binding */ schedules_shiftAlerts),
/* harmony export */   "timeOffPoliciesAction": () => (/* binding */ timeOffPoliciesAction),
/* harmony export */   "timeOffPoliciesArchiedAction": () => (/* binding */ timeOffPoliciesArchiedAction),
/* harmony export */   "timeoffPoliciesTable": () => (/* binding */ timeoffPoliciesTable),
/* harmony export */   "timeoff_holidayAction": () => (/* binding */ timeoff_holidayAction),
/* harmony export */   "timeoff_holidayTable": () => (/* binding */ timeoff_holidayTable),
/* harmony export */   "timeoff_timeoffbalaceTable": () => (/* binding */ timeoff_timeoffbalaceTable)
/* harmony export */ });
// general component end
let generalProjectSettingTable = [{
  key: 'userName',
  label: 'Name',
  config: {
    isProfile: true
  }
}, {
  key: 'permission',
  label: '',
  config: {
    isPermissions: true
  }
}];
let general_productLinksTable = [{
  key: 'product',
  label: 'Product',
  config: {
    isText: true
  }
}, {
  key: 'linkedSince',
  label: 'Linked Since',
  config: {
    isText: true
  }
}]; // permissions Menu for general projects

let permissionProject = [{
  value: 'none',
  permission: 'None'
}, {
  value: 'viewer',
  permission: 'Viewer'
}, {
  value: 'user',
  permission: 'User'
}, {
  value: 'manager',
  permission: 'Manager'
}]; // permissions Menu for general timeApps > allowed apps

let permissionTimeApps_AllowedApps = [{
  value: 'allApps',
  permission: 'All Apps',
  class: 'active'
}, {
  value: 'desktoponly',
  permission: 'Desktop only'
}]; // permissions Menu for general timeApps > idle timeout

let permissionTimeApps_idleTimeout = [{
  value: 'never',
  permission: 'Never',
  class: 'active'
}, {
  value: '5mins',
  permission: '5 mins'
}, {
  value: '10mins',
  permission: '10 mins'
}, {
  value: '20mins',
  permission: '20 mins'
}]; // permissions Menu for general timeApps > keep idle timeout

let permissionTimeApps_keepIdleTime = [{
  value: 'prompt',
  permission: 'Prompt',
  class: 'active'
}, {
  value: 'always',
  permission: 'Always'
}, {
  value: 'never',
  permission: 'Never'
}]; // general component end
// features cmponent start

let activity_deleteScreeShotTable = [{
  key: 'name',
  label: 'Name',
  config: {
    isProfile: true
  }
}, {
  key: 'toggleValue',
  label: '',
  config: {
    isSlideToggle: true
  }
}];
let timeoffPoliciesTable = [{
  key: 'policyName',
  label: 'Policy Name',
  config: {
    isText: true
  }
}, {
  key: 'members',
  label: 'Members',
  config: {
    isText: true
  }
}, {
  key: 'accrualschedule',
  label: 'Accrual Schedule',
  config: {
    isText: true
  }
}, {
  key: 'action',
  label: '',
  config: {
    isAction: true
  }
}];
let timeoff_holidayTable = [{
  key: 'holiday',
  label: 'Holiday',
  config: {
    isText: true
  }
}, {
  key: 'members',
  label: 'Members',
  config: {
    isMembersImage: true
  }
}, {
  key: 'date',
  label: 'Date',
  config: {
    isText: true
  }
}, {
  key: 'action',
  label: '',
  config: {
    isAction: true
  }
}];
let timeoff_timeoffbalaceTable = [{
  key: '',
  label: '',
  config: {
    isCheckbox: true
  }
}, {
  key: 'members',
  label: 'Members',
  config: {
    isText: true
  }
}, {
  key: 'abcd',
  label: 'abcd',
  config: {
    isText: true
  }
}];
let achievements_efficiencyProTable = [{
  key: 'name',
  label: 'Name',
  config: {
    isProfile: true
  }
}, {
  key: 'efficiencyPro',
  label: 'Efficiency Pro',
  config: {
    isSlideToggle: true
  }
}, {
  key: 'activityGoal',
  label: 'Activity Goal',
  config: {
    isinputField: true,
    isInputGroup: true,
    groupValue: "%"
  }
}];
let achievements_productivityChampTable = [{
  key: 'name',
  label: 'Name',
  config: {
    isProfile: true
  }
}, {
  key: 'productivityChamp',
  label: 'Productivity Champ',
  config: {
    isSlideToggle: true
  }
}, {
  key: 'weeklyToDosGoal',
  label: 'Weekly To-Dos Goal',
  config: {
    isinputField: true,
    isInputGroup: true,
    groupValue: "To-Dos"
  }
}];
let achievements_timeHeroTable = [{
  key: 'name',
  label: 'Name',
  config: {
    isProfile: true
  }
}, {
  key: 'timeHero',
  label: 'timeHero',
  config: {
    isSlideToggle: true
  }
}, {
  key: 'weeklyHoursGoal',
  label: 'Weekly Hours Goal',
  config: {
    isinputField: true,
    isInputGroup: true,
    groupValue: "Hours"
  }
}];
let WorkBreaksPoliciesTable = [{
  key: 'policyName',
  label: 'Policy Name',
  config: {
    isText: true
  }
}, {
  key: 'members',
  label: 'Members',
  config: {
    isText: true
  }
}, {
  key: 'type',
  label: 'Type',
  config: {
    isText: true
  }
}, {
  key: 'actions',
  label: 'Actions',
  config: {
    isAction: true
  }
}]; // action menus

let timeOffPoliciesAction = [{
  label: 'Edit',
  event: 'edit',
  config: {
    isShow: true
  }
}, {
  label: 'Archive',
  event: 'archive',
  config: {
    isShow: true
  }
}, {
  label: 'Remove',
  event: 'remove',
  config: {
    isShow: true
  }
}];
let timeOffPoliciesArchiedAction = [{
  label: 'View',
  event: 'view',
  config: {
    isShow: true
  }
}, {
  label: 'Restore',
  event: 'restore',
  config: {
    isShow: true
  }
}];
let timeoff_holidayAction = [{
  label: 'Edit',
  event: 'edit',
  config: {
    isShow: true
  }
}, {
  label: 'Remove',
  event: 'remove',
  config: {
    isShow: true
  }
}];
let WorkBreaksPoliciesAction = [{
  label: 'Edit Policy',
  event: 'editPolicy',
  config: {
    isShow: true
  }
}, {
  label: 'Archive Policy',
  event: 'archivePolicy',
  config: {
    isShow: true
  }
}];
let WorkBreaksPoliciesArchivedAction = [{
  label: 'Restore Policy',
  event: 'restorePolicy',
  config: {
    isShow: true
  }
}]; // permissions
// permission menu for activity >  track apps & urls

let activity_trackAppsUrls = [{
  value: 'off',
  permission: 'Off'
}, {
  value: 'apps',
  permission: 'Apps'
}, {
  value: 'appsURLs',
  permission: 'Apps & URLs'
}]; // permission menu for activity >  Screenshot Frequency

let activity_screenshotFrequency = [{
  value: 'none',
  permission: 'None',
  class: 'active'
}, {
  value: '1x',
  permission: '1x'
}, {
  value: '2x',
  permission: '2x'
}, {
  value: '3x',
  permission: '3x'
}]; // permission menu for activity > Screenshot Blur

let activity_screenshotBlur = [{
  value: 'off',
  permission: 'Off',
  class: 'active'
}, {
  value: 'on',
  permission: 'On'
}]; // permission menu for Schedules > Shift alerts

let schedules_shiftAlerts = [{
  value: 'both',
  permission: 'Both',
  class: 'active'
}, {
  value: 'managment',
  permission: 'Managment'
}, {
  value: 'user',
  permission: 'User'
}, {
  value: 'noOne',
  permission: 'No One'
}];

/***/ }),

/***/ 95865:
/*!**********************************************************************!*\
  !*** ./src/app/pages/settings-policies/account/account.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountComponent": () => (/* binding */ AccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_app_core_model_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/common */ 18595);
/* harmony import */ var src_app_shared_pop_up_model_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/change-password/change-password.component */ 91257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ 90263);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 47873);
/* harmony import */ var mat_select_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! mat-select-filter */ 36838);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ 90811);

















function AccountComponent_mat_option_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const timeZone_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", timeZone_r2.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", timeZone_r2.value, " ");
  }
}

function AccountComponent_mat_option_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const timeZone_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", timeZone_r3.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", timeZone_r3.name, " ");
  }
}

const _c0 = function () {
  return ["/settings/all-setting"];
};

const _c1 = function (a0) {
  return {
    "is-invalid": a0
  };
};

let AccountComponent = /*#__PURE__*/(() => {
  class AccountComponent {
    constructor(formBuilder, matDialog, authService, masterService, router) {
      this.formBuilder = formBuilder;
      this.matDialog = matDialog;
      this.authService = authService;
      this.masterService = masterService;
      this.router = router;
      this.isAccountFormSave = true;
      this.manage2Factor = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('off');
      this.timeZoneArray = src_app_core_model_common__WEBPACK_IMPORTED_MODULE_0__.timezoneList;
      this.contryCodeArray = src_app_core_model_common__WEBPACK_IMPORTED_MODULE_0__.contryCode;
      this.timeZoneList = this.timeZoneArray.slice();
      this.contryCodeList = this.contryCodeArray.slice();
    }

    ngOnInit() {
      this.accountForm = this.formBuilder.group({
        name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
        timezone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        contryCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        phone: [''],
        skypeName: ['']
      });
    }

    get accountFormVal() {
      return this.accountForm.controls;
    }

    saveAccountForm() {
      this.isAccountFormSave = true;

      if (this.accountForm.invalid) {
        for (const i in this.accountForm.controls) {
          this.accountForm.controls[i].markAsDirty();
          this.accountForm.controls[i].updateValueAndValidity();
        }

        return;
      }
    }

    ChangePassword() {
      const changePasswordDialog = this.matDialog.open(src_app_shared_pop_up_model_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordComponent, {
        width: '600px'
      });
    }

    Logout() {
      this.authService.LogOut().subscribe(response => {
        if (response.ReturnCode == 200 && response.err == 0 && response) {
          this.masterService.showSuccess(response.ReturnMsg, 'Success');
          localStorage.clear();
          this.router.navigate(['/auth/login']);
        } else {
          this.masterService.showError(response.ReturnMsg, 'Error');
        }
      }, error => {
        this.masterService.showError(error.error.ReturnMsg, 'Error');
      });
    }

  }

  AccountComponent.ɵfac = function AccountComponent_Factory(t) {
    return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_3__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
  };

  AccountComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AccountComponent,
    selectors: [["app-account"]],
    decls: 88,
    vars: 25,
    consts: [[1, "white_box", "main_content"], [1, "setting_title", 3, "routerLink"], ["src", "../../../../assets/images/icon/back-arrow-blue.svg", "alt", ""], [1, "mb-5"], [1, "row"], [1, "col-md-3"], [1, "user_img_account"], ["src", "../../../../assets/images/user1.png", "alt", ""], [1, "edit_img_wrap"], ["src", "../../../../assets/images/camera.svg", "alt", ""], [1, "cz_button_all"], [1, "d-flex", "flex-column"], [1, "btn_blue_border"], [1, "btn_blue_border", 3, "click"], [1, "btn_red_border", 3, "click"], [1, "btn_red_border"], [1, "col-md-9", "cz_form_setting"], [1, "cz_form_setting_input"], [3, "formGroup"], [1, "cz_setting_input"], ["for", "name"], ["appearance", "fill", 3, "ngClass"], ["type", "text", "matInput", "", "formControlName", "name"], ["for", "email"], ["type", "email", "matInput", "", "formControlName", "email", "id", "password"], ["for", "timezone"], ["formControlName", "timezone"], [3, "array", "displayMember", "filteredReturn"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "phone"], [1, "cz_setting_input_phone"], ["appearance", "fill", 1, "cz_setting_input_select"], ["formControlName", "contryCode"], ["appearance", "fill", 1, "cz_setting_input_select_phone", 3, "ngClass"], ["type", "number", "matInput", "", "formControlName", "phone"], ["for", "skypeName"], ["type", "text", "matInput", "", "formControlName", "skypeName"], [1, "cz_setting_input_button_save"], [1, "btn_dark"], [1, "btn_blue", 3, "click"], [1, "cz_two_factor"], [1, "nav", "nav-tabs", "common_tabs", "mb-5", 3, "formControl"], ["value", "off", 1, "nav-item"], ["value", "on", 1, "nav-item"], [3, "value"]],
    template: function AccountComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 10)(14, "div", 11)(15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Delete Picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AccountComponent_Template_button_click_17_listener() {
          return ctx.ChangePassword();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AccountComponent_Template_button_click_19_listener() {
          return ctx.Logout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Log Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Delete Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 16)(24, "div", 17)(25, "form", 18)(26, "div")(27, "div", 19)(28, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Enter Valid Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 19)(35, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Enter Valid Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 19)(42, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Time zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "mat-form-field", 21)(45, "mat-select", 26)(46, "mat-select-filter", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("filteredReturn", function AccountComponent_Template_mat_select_filter_filteredReturn_46_listener($event) {
          return ctx.timeZoneList = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Select Timezone");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, AccountComponent_mat_option_49_Template, 2, 2, "mat-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Enter select timezone");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 19)(53, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 31)(56, "mat-form-field", 32)(57, "mat-select", 33)(58, "mat-select-filter", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("filteredReturn", function AccountComponent_Template_mat_select_filter_filteredReturn_58_listener($event) {
          return ctx.contryCodeList = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Select Timezone");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](61, AccountComponent_mat_option_61_Template, 2, 2, "mat-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "mat-form-field", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Enter Valid Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 19)(67, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Skype Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](70, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "Enter Valid Skype Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 38)(74, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "Cancle");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AccountComponent_Template_button_click_76_listener() {
          return ctx.saveAccountForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 41)(79, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "Manage Two Factor Authentication");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "Two-factor authentication is an extra layer of security that requires you to enter a code from your two-factor app when logging into your account from an untrusted device.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "mat-button-toggle-group", 42)(84, "mat-button-toggle", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "Off");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "mat-button-toggle", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, "On");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.accountForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c1, ctx.isAccountFormSave && (ctx.accountFormVal["name"] == null ? null : ctx.accountFormVal["name"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](17, _c1, ctx.isAccountFormSave && (ctx.accountFormVal["email"] == null ? null : ctx.accountFormVal["email"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](19, _c1, ctx.isAccountFormSave && (ctx.accountFormVal["timezone"] == null ? null : ctx.accountFormVal["timezone"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("array", ctx.timeZoneArray)("displayMember", "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.timeZoneList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("array", ctx.contryCodeArray)("displayMember", "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.contryCodeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](21, _c1, ctx.isAccountFormSave && (ctx.accountFormVal["phone"] == null ? null : ctx.accountFormVal["phone"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](23, _c1, ctx.isAccountFormSave && (ctx.accountFormVal["skypeName"] == null ? null : ctx.accountFormVal["skypeName"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.manage2Factor);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, mat_select_filter__WEBPACK_IMPORTED_MODULE_13__.MatSelectFilterComponent, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__.MatButtonToggle]
  });
  return AccountComponent;
})();

/***/ }),

/***/ 44681:
/*!******************************************************************************!*\
  !*** ./src/app/pages/settings-policies/all-setting/all-setting.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllSettingComponent": () => (/* binding */ AllSettingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34793);




const _c0 = function (a0) {
  return [a0];
};

function AllSettingComponent_div_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, item_r3.routerLink));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.settingName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r3.settingImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.settingDescription);
  }
}

function AllSettingComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AllSettingComponent_div_5_div_4_Template, 8, 6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r1.data);
  }
}

let AllSettingComponent = /*#__PURE__*/(() => {
  class AllSettingComponent {
    constructor() {
      this.allSettingArray = [{
        name: 'General',
        data: [{
          settingName: 'Organization',
          settingDescription: 'Edit your company’s name, address, time zone, and more',
          settingImage: '../assets/images/setting-icon/organization.png',
          routerLink: '/settings/general/organization'
        }, {
          settingName: 'Projects',
          settingDescription: 'Set default project members',
          settingImage: '../assets/images/setting-icon/projects.png',
          routerLink: '/settings/general/projects'
        }, {
          settingName: 'Timer Apps',
          settingDescription: 'Control the behavior of your team’s time tracking apps',
          settingImage: '../assets/images/setting-icon/timer-apps.png',
          routerLink: '/settings/general/timerApps'
        }, {
          settingName: 'Quickbooks for Desktop',
          settingDescription: 'Configure Hubstaff to export to Quickbooks',
          settingImage: '../assets/images/setting-icon/quickbooksDesktop.png',
          routerLink: '/settings/general/quickBooks'
        }, {
          settingName: 'Product Links',
          settingDescription: 'Link your Hubstaff products together',
          settingImage: '../assets/images/setting-icon/productLinks.png',
          routerLink: '/settings/general/productsLinks'
        }]
      }, {
        name: 'Features',
        data: [{
          settingName: 'Activity',
          settingDescription: 'Track screenshots, apps, URLs, locations, and more',
          settingImage: '../assets/images/setting-icon/activity.png',
          routerLink: '/settings/features/activity'
        }, {
          settingName: 'Timesheets',
          settingDescription: 'Allow team members to modify time with or without a reason',
          settingImage: '../assets/images/setting-icon/timesheets.png',
          routerLink: '/settings/features/timesheets'
        }, {
          settingName: 'Invoices',
          settingDescription: 'Set up invoices with your tax ID, terms, and a payment button',
          settingImage: '../assets/images/setting-icon/invoices.png',
          routerLink: '/settings/features/invoices'
        }, {
          settingName: 'Schedules',
          settingDescription: 'Determine who gets shift alerts in your organization',
          settingImage: '../assets/images/setting-icon/schedules.png',
          routerLink: '/settings/features/schedules'
        }, {
          settingName: 'Time off',
          settingDescription: 'Manage your company’s time off and holiday policies',
          settingImage: '../assets/images/setting-icon/timeoff.png',
          routerLink: '/settings/features/timeOff'
        }, {
          settingName: 'Payments',
          settingDescription: 'Set up manual payments and automatic payroll',
          settingImage: '../assets/images/setting-icon/payments.png',
          routerLink: '/settings/features/payments'
        }, {
          settingName: 'Achievements',
          settingDescription: 'Award your team members with badges when they hit their goals',
          settingImage: '../assets/images/setting-icon/achievements.png',
          routerLink: '/settings/features/achievements'
        }, {
          settingName: 'Work breaks',
          settingDescription: 'Manage your company’s work breaks',
          settingImage: '../assets/images/setting-icon/workbreaks.png',
          routerLink: '/settings/features/workBreaks'
        }]
      }, {
        name: 'Integrations',
        data: [{
          settingName: 'Integrations',
          settingDescription: 'View all Hubstaff Integrations by category and setup the ones you want',
          settingImage: '../assets/images/setting-icon/intergrations.png',
          routerLink: '',
          settingId: 'organization'
        }]
      }, {
        name: 'Billing',
        data: [{
          settingName: 'Information',
          settingDescription: 'View current plan and billing information',
          settingImage: '../assets/images/setting-icon/information.png',
          routerLink: '/settings/billing',
          settingId: 'organization'
        }, {
          settingName: 'Change Plan',
          settingDescription: 'Modify your monthly or annual plan',
          settingImage: '../assets/images/setting-icon/changePlan.png',
          routerLink: '',
          settingId: 'organization'
        }, {
          settingName: 'Change Card',
          settingDescription: 'Update your payment method',
          settingImage: '../assets/images/setting-icon/changeCard.png',
          routerLink: '/settings/billing',
          settingId: 'organization'
        }, {
          settingName: 'Billing History',
          settingDescription: 'View records of charges and print past invoices',
          settingImage: '../assets/images/setting-icon/billingHistory.png',
          routerLink: '/settings/billing',
          settingId: 'organization'
        }]
      }];
    }

    ngOnInit() {}

  }

  AllSettingComponent.ɵfac = function AllSettingComponent_Factory(t) {
    return new (t || AllSettingComponent)();
  };

  AllSettingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AllSettingComponent,
    selectors: [["app-all-setting"]],
    decls: 6,
    vars: 1,
    consts: [[1, "white_box", "main_content"], ["class", "all_report ", 4, "ngFor", "ngForOf"], [1, "all_report"], [1, "report_list"], ["class", "card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "card", 3, "routerLink"], [1, "card-body"], [1, "d-flex", "justify-content-between"], ["alt", "", 3, "src"]],
    template: function AllSettingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Settings & Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AllSettingComponent_div_5_Template, 5, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allSettingArray);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink]
  });
  return AllSettingComponent;
})();

/***/ }),

/***/ 10293:
/*!**********************************************************************!*\
  !*** ./src/app/pages/settings-policies/billing/billing.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingComponent": () => (/* binding */ BillingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);

let BillingComponent = /*#__PURE__*/(() => {
  class BillingComponent {
    constructor() {}

    ngOnInit() {}

  }

  BillingComponent.ɵfac = function BillingComponent_Factory(t) {
    return new (t || BillingComponent)();
  };

  BillingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BillingComponent,
    selectors: [["app-billing"]],
    decls: 67,
    vars: 0,
    consts: [[1, "white_box", "main_content"], [1, "setting_title"], ["src", "../../../../assets/images/icon/back-arrow-blue.svg", "alt", ""], [1, "mb-5", "h2"], [1, "your_plan_text"], [1, "badge", "green_gradient", "border-none"], [1, "d-flex", "flex-wrap", "align-items-center"], [1, "btn_gray"], [1, "alert", "alert-warning", "mx-3"], [1, "btn_blue_border"], [1, "upgrade_plan"], [1, "row", "align-items-center"], [1, "col-xxl-2"], ["src", "../../../../assets/images/Saly-1.png", "alt", ""], [1, "col-xxl-8"], [1, "font_size"], [1, "d-flex", "upgrade_plan_text_tracking", "flex-wrap"], ["src", "../../../../assets/images/setting-icon/App&URL.png", "alt", ""], ["src", "../../../../assets/images/setting-icon/u_calculator.png", "alt", ""], ["src", "../../../../assets/images/setting-icon/Payroll.png", "alt", ""], ["src", "../../../../assets/images/setting-icon/Attendance.png", "alt", ""], [1, "green_gradient", "border-none", "text_color"], [1, "d-flex", "align-items-center", "mb-4"], [1, "m-0"], [1, "red_gradient", "border-none", "text_color", "ms-3"], [1, "mb-4"], [1, "btn_blue", "ms-3"]],
    template: function BillingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Billing Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div")(8, "div")(9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Your Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4)(12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6)(17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "No Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Trial expires: Fri, Jun 4, 2021 (10 days left)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 9)(22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Choose Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10)(25, "div", 11)(26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14)(29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Upgrade Your Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Upgrade to a premium plan and gain access to powerfil new features that make running your business even easier.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16)(34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " App & URL Tracking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Weekly budgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Payroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Attendance scheduling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12)(47, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Upgrade Plan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div")(50, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Payment Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 22)(53, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Credit Card On File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 25)(58, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "View Card Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Add Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div")(63, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Billing History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "View Billing History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    }
  });
  return BillingComponent;
})();

/***/ }),

/***/ 14796:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/settings-policies/features/feature-achievements/feature-achievements.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureAchievementsComponent": () => (/* binding */ FeatureAchievementsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/setting_policies */ 90284);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/dynamic-table/dynamic-table.component */ 57834);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ 90455);









let FeatureAchievementsComponent = /*#__PURE__*/(() => {
  class FeatureAchievementsComponent {
    constructor() {
      this.efficiencyToggle = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('');
      this.activityGoal = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('');
      this.todosGoal = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('');
      this.weeklyHoursGoal = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('');
      this.achievements_efficiencyProCols = src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__.achievements_efficiencyProTable;
      this.achievements_productivityChampCols = src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__.achievements_productivityChampTable;
      this.achievements_timeHeroCols = src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__.achievements_timeHeroTable;
      this.achievements_efficiencyProArray = [{
        name: 'Ravi',
        efficiencyPro: '',
        activityGoal: ''
      }, {
        name: 'Ravi',
        efficiencyPro: '',
        activityGoal: ''
      }];
    }

    ngOnInit() {}

    TdClickEvent(event) {}

  }

  FeatureAchievementsComponent.ɵfac = function FeatureAchievementsComponent_Factory(t) {
    return new (t || FeatureAchievementsComponent)();
  };

  FeatureAchievementsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: FeatureAchievementsComponent,
    selectors: [["app-feature-achievements"]],
    decls: 156,
    vars: 12,
    consts: [[1, "row"], [1, "col-md-3"], [1, "nav", "nav-tabs", "flex-column", "vertical_tab"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#efficiencyPro", 1, "nav-link", "active"], ["data-bs-toggle", "tab", "href", "#productivityChamp", 1, "nav-link"], ["data-bs-toggle", "tab", "href", "#timeHero", 1, "nav-link"], [1, "col-md-9"], [1, "tab-content"], ["id", "efficiencyPro", 1, "tab-pane", "active"], [1, "mb-4"], ["matTooltip", "Achievement badges are sent to members via email and appear on their dashboard."], ["src", "../../../assets/images/icon/info.svg", "alt", ""], [1, "big"], [1, "row", "mb-5"], [1, "col-md-2"], ["matTooltip", "Organization default. This is what all current and future members will be set to."], [3, "formControl"], [1, "col-md-10"], [1, "goal_wrap"], [1, "goal_icon"], ["src", "../../../../../assets/images/icon/efficiency.svg", "alt", ""], [1, "goal_text"], [1, "row", "align-items-end"], [1, "col-md-4"], ["id", "activityGoal"], ["matTooltip", "The average activity members must reach each day to receive the badge.", 1, "fa-solid", "fa-circle-info"], ["appearance", "fill"], ["type", "text", "matInput", "", "id", "activityGoal", "placeholder", "50", 3, "formControl"], [1, "subfix_wrap"], [1, "btn_blue"], [1, "mb-2"], [1, "m-0"], [3, "tableColsDetails", "tableDataArray", "tdClickEmitter"], ["id", "productivityChamp", 1, "tab-pane", "fade"], ["matTooltip", "The number of to-dos members must complete each week to receive the badge."], ["src", "../../../../../assets/images/icon/productivity-champ.svg", "alt", ""], ["id", "todosGoal"], ["matTooltip", "Organization default. This is what all current and future members will be set\n                        to.", 1, "fa-solid", "fa-circle-info"], ["type", "text", "matInput", "", "id", "todosGoal", "placeholder", "5", 3, "formControl"], ["id", "timeHero", 1, "tab-pane", "fade"], ["src", "../../../../../assets/images/icon/time_hero.svg", "alt", ""], ["id", "weeklyHoursGoal"], ["matTooltip", "The number of hours members must track each week to receive the badge."], ["type", "text", "matInput", "", "id", "weeklyHoursGoal", "placeholder", "40", 3, "formControl"]],
    template: function FeatureAchievementsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "ul", 2)(4, "li", 3)(5, "a", 4)(6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Efficiency Pro");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 3)(9, "a", 5)(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Productivity Champ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 3)(13, "a", 6)(14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Time Hero");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 7)(17, "div", 8)(18, "div", 9)(19, "div")(20, "div", 10)(21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Efficiency Pro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "This achievement badge is given to members every day their activity meets the activity goal.They can win this badge multiple days in a row to create hot streaks.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 14)(28, "div", 15)(29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Default: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "mat-slide-toggle", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 18)(35, "div", 19)(36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 22)(39, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Efficiency pro");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Reach the goal for activity each day");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 23)(44, "div", 24)(45, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Activity Goal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 24)(53, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Apply To All");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div")(56, "div", 10)(57, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Individual Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Override the organization default for specific members");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div")(62, "TrackerX-dynamic-table", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("tdClickEmitter", function FeatureAchievementsComponent_Template_TrackerX_dynamic_table_tdClickEmitter_62_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 34)(64, "div")(65, "div", 10)(66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Productivity Champ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "This achievement badge is given to members every week they meet the weekly to-dos goal. They can win this badge multiple weeks in a row to create hot streaks.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 14)(73, "div", 15)(74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Default: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](77, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](78, "mat-slide-toggle", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 18)(80, "div", 19)(81, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 22)(84, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Productivity Champ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Reach the goal for completed to-dos each week");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 23)(89, "div", 24)(90, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Weekly to-dos goal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](92, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "To-Dos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 24)(98, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "Apply To All");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](100, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div")(102, "div", 10)(103, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "Individual Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "Override the organization default for specific members");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div")(108, "TrackerX-dynamic-table", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("tdClickEmitter", function FeatureAchievementsComponent_Template_TrackerX_dynamic_table_tdClickEmitter_108_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div", 40)(110, "div")(111, "div", 10)(112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "Time Hero ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](115, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "This achievement badge is given to members every week their hours meet the weekly hours goal. They can win this badge multiple weeks in a row to create hot streaks.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 14)(119, "div", 15)(120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "Default: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](123, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](124, "mat-slide-toggle", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 18)(126, "div", 19)(127, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](128, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 22)(130, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "Time Hero");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](133, "Reach the goal for total hours worked each week");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div", 23)(135, "div", 24)(136, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "Weekly hours goal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](139, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](141, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, "Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "div", 24)(145, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "Apply To All");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](147, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "div")(149, "div", 10)(150, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](151, "Individual Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](153, "Override the organization default for specific members");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "div")(155, "TrackerX-dynamic-table", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("tdClickEmitter", function FeatureAchievementsComponent_Template_TrackerX_dynamic_table_tdClickEmitter_155_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.efficiencyToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.activityGoal);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tableColsDetails", ctx.achievements_efficiencyProCols)("tableDataArray", ctx.achievements_efficiencyProArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.efficiencyToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.todosGoal);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tableColsDetails", ctx.achievements_productivityChampCols)("tableDataArray", ctx.achievements_efficiencyProArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.efficiencyToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.weeklyHoursGoal);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tableColsDetails", ctx.achievements_timeHeroCols)("tableDataArray", ctx.achievements_efficiencyProArray);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_1__.DynamicTableComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__.MatSlideToggle]
  });
  return FeatureAchievementsComponent;
})();

/***/ }),

/***/ 51397:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/settings-policies/features/feature-activity/feature-activity.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureActivityComponent": () => (/* binding */ FeatureActivityComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/setting_policies */ 90284);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/dynamic-table/dynamic-table.component */ 57834);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ 90455);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ 90811);











function FeatureActivityComponent_mat_button_toggle_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-button-toggle", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const permission_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", permission_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", permission_r3.permission, " ");
  }
}

function FeatureActivityComponent_mat_button_toggle_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-button-toggle", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const permission_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", permission_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", permission_r4.permission, " ");
  }
}

function FeatureActivityComponent_mat_button_toggle_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-button-toggle", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const permission_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", permission_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", permission_r5.permission, " ");
  }
}

const _c0 = function (a0) {
  return {
    "active": a0
  };
};

let FeatureActivityComponent = /*#__PURE__*/(() => {
  class FeatureActivityComponent {
    constructor(activatedRoute) {
      this.activatedRoute = activatedRoute;
      this.defaultDeleteScreenShots = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('');
      this.recordActivity = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('');
      this.permissionTableCols = src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__.generalProjectSettingTable;
      this.activity_trackAppsUrls = src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__.activity_trackAppsUrls;
      this.activity_screenshotFrequency = src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__.activity_screenshotFrequency;
      this.activity_screenshotBlur = src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__.activity_screenshotBlur;
      this.activity_deleteScreeShotCols = src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__.activity_deleteScreeShotTable;
      this.activity_trackAppsUrlsTableArray = [{
        userName: 'Ravi',
        permission: 'appsURLs'
      }, {
        userName: 'Ravi Parmar',
        permission: 'appsURLs'
      }];
      this.activity_screenshotFrequencyTableArray = [{
        userName: 'Ravi',
        permission: '1x'
      }, {
        userName: 'Ravi Parmar',
        permission: '1x'
      }];
      this.activity_screenshotBlurTableArray = [{
        userName: 'Ravi',
        permission: 'off'
      }, {
        userName: 'Ravi Parmar',
        permission: 'off'
      }];
      this.activity_deleteScreenshotTableArray = [{
        name: 'Ravi',
        toggleValue: 'true'
      }, {
        name: 'Ravi',
        toggleValue: 'false'
      }];
      this.currentFragment = 'trackAppsUrls';
      this.defaultTrack = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('off');
      this.defaultScreenShot = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('none');
      this.defaultSsBlur = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('off');
    }

    ngOnInit() {
      this.activatedRoute.fragment.subscribe(fragment => {
        if (fragment) {
          this.currentFragment = fragment;
        }
      });
    }

    TdClickEvent(event) {
      console.log(event);
    }

  }

  FeatureActivityComponent.ɵfac = function FeatureActivityComponent_Factory(t) {
    return new (t || FeatureActivityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
  };

  FeatureActivityComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: FeatureActivityComponent,
    selectors: [["app-feature-activity"]],
    decls: 126,
    vars: 40,
    consts: [[1, "row"], [1, "col-lg-3"], [1, "nav", "nav-tabs", "flex-column", "vertical_tab"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#trackAppsUrls", 1, "nav-link", 3, "ngClass"], ["data-bs-toggle", "tab", "href", "#screenshotFrequency", 1, "nav-link", 3, "ngClass"], ["data-bs-toggle", "tab", "href", "#screenshotBlur", 1, "nav-link", 3, "ngClass"], ["data-bs-toggle", "tab", "href", "#deleteScreenshots", 1, "nav-link", 3, "ngClass"], ["data-bs-toggle", "tab", "href", "#recordActivity", 1, "nav-link", 3, "ngClass"], [1, "col-lg-9"], [1, "tab-content"], ["id", "trackAppsUrls", 1, "tab-pane", 3, "ngClass"], ["matTooltip", "Info about the action"], ["src", "../../../assets/images/icon/info.svg", "alt", ""], [1, "big"], [1, "nav", "nav-tabs", "common_tabs", "mb-5", 3, "formControl"], ["class", "nav-item", 3, "value", 4, "ngFor", "ngForOf"], [3, "tableColsDetails", "tableDataArray", "permissionsMenu", "tdClickEmitter"], ["id", "screenshotFrequency", 1, "tab-pane", 3, "ngClass"], ["id", "screenshotBlur", 1, "tab-pane", 3, "ngClass"], ["id", "deleteScreenshots", 1, "tab-pane", 3, "ngClass"], [1, "mb-3"], [3, "formControl"], ["id", "recordActivity", 1, "tab-pane", 3, "ngClass"], [1, "nav-item", 3, "value"]],
    template: function FeatureActivityComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "ul", 2)(3, "li", 3)(4, "a", 4)(5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Track Apps & URLs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 3)(8, "a", 5)(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Screenshot Frequency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li", 3)(12, "a", 6)(13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Screenshot Blur");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li", 3)(16, "a", 7)(17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Delete Screenshots");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li", 3)(20, "a", 8)(21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Record Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 9)(24, "div", 10)(25, "div", 11)(26, "div")(27, "div")(28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Track Apps & URLS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Control whether the names of apps used and the URLs visited are tracked");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div")(35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Default: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "mat-button-toggle-group", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, FeatureActivityComponent_mat_button_toggle_40_Template, 2, 2, "mat-button-toggle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div")(42, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Individual Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Override the organization default for specific members");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "TrackerX-dynamic-table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("tdClickEmitter", function FeatureActivityComponent_Template_TrackerX_dynamic_table_tdClickEmitter_46_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 18)(48, "div")(49, "div")(50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Screenshot Frequency ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Control the number of screenshots taken in a 10 minute period.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div")(57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Default: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "mat-button-toggle-group", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, FeatureActivityComponent_mat_button_toggle_62_Template, 2, 2, "mat-button-toggle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div")(64, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Individual Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Override the organization default for specific members");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "TrackerX-dynamic-table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("tdClickEmitter", function FeatureActivityComponent_Template_TrackerX_dynamic_table_tdClickEmitter_68_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 19)(70, "div")(71, "div")(72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Screenshot Blur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Control whether the desktop app blurs screenshots for security and privacy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div")(79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Default: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "mat-button-toggle-group", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](84, FeatureActivityComponent_mat_button_toggle_84_Template, 2, 2, "mat-button-toggle", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div")(86, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Individual Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Override the organization default for specific members");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "TrackerX-dynamic-table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("tdClickEmitter", function FeatureActivityComponent_Template_TrackerX_dynamic_table_tdClickEmitter_90_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 20)(92, "div")(93, "div")(94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Delete screenshots ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "Allow managers and owners to delete screenshots.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 21)(101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Default: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "mat-slide-toggle", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div")(107, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Individual Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "Override the organization default for specific members");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "TrackerX-dynamic-table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("tdClickEmitter", function FeatureActivityComponent_Template_TrackerX_dynamic_table_tdClickEmitter_111_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 23)(113, "div")(114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "Record Activity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](117, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "Control whether keyboard and mouse activity is monitored");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div")(121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "All Users ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](125, "mat-slide-toggle", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](30, _c0, ctx.currentFragment === "trackAppsUrls"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](32, _c0, ctx.currentFragment === "screenshotFrequency"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](34, _c0, ctx.currentFragment === "screenshotBlur"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](36, _c0, ctx.currentFragment === "deleteScreenshots"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](38, _c0, ctx.currentFragment === "recordActivity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.currentFragment == "trackAppsUrls" ? "active" : "fade");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.defaultTrack);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.activity_trackAppsUrls);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tableColsDetails", ctx.permissionTableCols)("tableDataArray", ctx.activity_trackAppsUrlsTableArray)("permissionsMenu", ctx.activity_trackAppsUrls);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.currentFragment == "screenshotFrequency" ? "active" : "fade");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.defaultScreenShot);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.activity_screenshotFrequency);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tableColsDetails", ctx.permissionTableCols)("tableDataArray", ctx.activity_screenshotFrequencyTableArray)("permissionsMenu", ctx.activity_screenshotFrequency);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.currentFragment == "screenshotBlur" ? "active" : "fade");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.defaultSsBlur);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.activity_screenshotBlur);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tableColsDetails", ctx.permissionTableCols)("tableDataArray", ctx.activity_screenshotBlurTableArray)("permissionsMenu", ctx.activity_screenshotBlur);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.currentFragment == "deleteScreenshots" ? "active" : "fade");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.defaultDeleteScreenShots);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tableColsDetails", ctx.activity_deleteScreeShotCols)("tableDataArray", ctx.activity_deleteScreenshotTableArray)("permissionsMenu", ctx.activity_screenshotBlur);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.currentFragment == "recordActivity" ? "active" : "fade");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.recordActivity);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_1__.DynamicTableComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__.MatSlideToggle, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggle]
  });
  return FeatureActivityComponent;
})();

/***/ }),

/***/ 876:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/settings-policies/features/feature-invoices/feature-invoices.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureInvoicesComponent": () => (/* binding */ FeatureInvoicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 11481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _core_directive_drag_drop_file_upload_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/directive/drag-drop-file-upload.directive */ 98626);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);









const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};

let FeatureInvoicesComponent = /*#__PURE__*/(() => {
  class FeatureInvoicesComponent {
    constructor(formBuilder, sanitizer) {
      this.formBuilder = formBuilder;
      this.sanitizer = sanitizer;
      this.fileArr = '';
      this.fileObj = [];
      this.imgArr = [];
      this.isInvoiceFormSave = false;
    }

    ngOnInit() {
      this.invoiceForm = this.formBuilder.group({
        address: ['', []],
        logo: ['', []],
        taxID: ['', []],
        taxRate: ['', []],
        paymentNotes: ['', []],
        netTerms: ['', []],
        payPalEmail: ['', []]
      });
    }

    get InvoiceFormVal() {
      return this.invoiceForm.controls;
    }

    uploadLogoImage(e) {
      const fileListAsArray = Array.from(e);
      fileListAsArray.forEach((item, i) => {
        const file = e;
        const url = URL.createObjectURL(file[i]);
        this.imgArr.push(url); // this.fileArr.push({ item, url: url });

        this.fileArr = url;
      }); // this.fileArr.forEach((item) => {
      //   this.fileObj.push(item.item);
      // });
      // Set files form control
      // this.form.patchValue({
      //   avatar: this.fileObj,
      // });
    }

    sanitize(url) {
      return this.sanitizer.bypassSecurityTrustUrl(url);
    }

  }

  FeatureInvoicesComponent.ɵfac = function FeatureInvoicesComponent_Factory(t) {
    return new (t || FeatureInvoicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer));
  };

  FeatureInvoicesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FeatureInvoicesComponent,
    selectors: [["app-feature-invoices"]],
    decls: 97,
    vars: 14,
    consts: [[1, "row"], [1, "col-md-7"], [3, "formGroup"], [1, "mb-3"], ["for", "address"], ["appearance", "fill", 3, "ngClass"], ["id", "address", "cols", "30", "rows", "10", "formControlName", "address", "matInput", ""], ["for", "logo"], [1, "upload_file"], ["appDragDropFileUpload", "", 3, "fileDropped"], ["appearance", "fill"], ["src", "../../../../assets/images/icon/upload.svg", "alt", ""], [1, "ddinfo"], [1, "or"], ["type", "file", "name", "logo", "hidden", "", 3, "change"], ["fileField", ""], ["type", "button", 1, "btn_blue_border", 3, "click"], [1, "size_limit"], ["alt", "", 3, "src"], ["type", "text", "matInput", "", 1, "d-none"], ["for", "taxID"], ["matTooltip", "Info about the action"], ["src", "../../../assets/images/icon/info.svg", "alt", ""], ["type", "text", "matInput", "", "placeholder", "Enter tax ID", "id", "taxID", "formControlName", "taxID"], [1, "mb-5"], [1, "col-md-4"], ["for", "taxRate"], ["appearance", "fill", 1, "position-relative", 3, "ngClass"], ["type", "text", "matInput", "", "formControlName", "taxRate", "id", "taxRate", "placeholder", "Ex: 7"], [1, "invoice_bedge", "bg_blue_gradient"], ["for", "paymentNotes"], ["matInput", "", "id", "paymentNotes", "cols", "30", "rows", "10", "formControlName", "paymentNotes", "placeholder", "Enter notes to client"], ["for", "netTerms"], ["type", "text", "matInput", "", "formControlName", "netTerms", "id", "netTerms", "placeholder", "30"], ["for", "payPalEmail"], ["type", "text", "matInput", "", "formControlName", "payPalEmail", "id", "payPalEmail", "placeholder", "Enter your business\u2019s PayPal email address"], [1, "mt-2"], [1, "mt-5", "text-center"], [1, "btn_dark", "mx-2"], [1, "btn_blue", "mx-2"]],
    template: function FeatureInvoicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div")(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "All changes made here will also update your organizations's General settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 0)(7, "div", 1)(8, "form", 2)(9, "div", 3)(10, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 3)(15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8)(18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("fileDropped", function FeatureInvoicesComponent_Template_div_fileDropped_18_listener($event) {
          return ctx.uploadLogoImage($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Drag and drop your files here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "OR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FeatureInvoicesComponent_Template_input_change_25_listener($event) {
          return ctx.uploadLogoImage($event.target.files);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FeatureInvoicesComponent_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);

          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26);

          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.click());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Browse Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "File size limit: 1 MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 18)(33, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div")(35, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Taxes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 3)(38, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Tax ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Enter Tax id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 24)(47, "div", 0)(48, "div", 25)(49, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Tax Rate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Enter Tax rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div")(60, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Payment terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 3)(63, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Notes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "textarea", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 24)(70, "div", 0)(71, "div", 25)(72, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Net Terms* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div")(81, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Payment button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 3)(84, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "PayPal Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Enter Paypal Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Easily accept payments from clients with PayPal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 37)(93, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.invoiceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.isInvoiceFormSave && (ctx.InvoiceFormVal["address"] == null ? null : ctx.InvoiceFormVal["address"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.sanitize(ctx.fileArr), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.isInvoiceFormSave && (ctx.InvoiceFormVal["taxID"] == null ? null : ctx.InvoiceFormVal["taxID"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx.isInvoiceFormSave && (ctx.InvoiceFormVal["taxRate"] == null ? null : ctx.InvoiceFormVal["taxRate"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, ctx.isInvoiceFormSave && (ctx.InvoiceFormVal["paymentNotes"] == null ? null : ctx.InvoiceFormVal["paymentNotes"].errors)));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _core_directive_drag_drop_file_upload_directive__WEBPACK_IMPORTED_MODULE_0__.DragDropFileUploadDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltip]
  });
  return FeatureInvoicesComponent;
})();

/***/ }),

/***/ 45647:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/settings-policies/features/feature-payments/feature-payments.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturePaymentsComponent": () => (/* binding */ FeaturePaymentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button-toggle */ 90811);







let FeaturePaymentsComponent = /*#__PURE__*/(() => {
  class FeaturePaymentsComponent {
    constructor() {
      this.processPayments = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('manually');
      this.sendPaymentsDays = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('');
    }

    ngOnInit() {}

  }

  FeaturePaymentsComponent.ɵfac = function FeaturePaymentsComponent_Factory(t) {
    return new (t || FeaturePaymentsComponent)();
  };

  FeaturePaymentsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FeaturePaymentsComponent,
    selectors: [["app-feature-payments"]],
    decls: 36,
    vars: 2,
    consts: [["matTooltip", "When set to automatically, time is marked as \u201Cpaid\u201D in our system and if you have payroll enabled, the payment will be sent."], ["src", "../../../assets/images/icon/info.svg", "alt", ""], [1, "big"], [1, "nav", "nav-tabs", "common_tabs", "mb-5", 3, "formControl"], ["value", "manually", 1, "nav-item"], ["value", "automatically", 1, "nav-item"], ["matTooltip", "This is the number of days after the pay period ends that you would like to send payments for\n        timesheets"], [1, "row"], [1, "col-md-3"], ["matTooltip", "This gives you time to edit timesheets once the pay period is over, or approve timesheets over multiple days and group all members into a single payment."], ["appearance", "fill"], ["type", "text", "matInput", "", 3, "formControl"], [1, "subfix_wrap"], [1, "mt-5"], [1, "btn_dark", "me-3"], [1, "btn_blue"]],
    template: function FeaturePaymentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div")(2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Process Payments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Choose whether you want to manually send payments or have them automatically processed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div")(9, "mat-button-toggle-group", 3)(10, "mat-button-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Manually");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-button-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Automatically");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div")(15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Delay Payroll ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Set a payroll delay so that all payments can be made at one time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 7)(22, "div", 8)(23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Send Payments After ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 13)(32, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.processPayments);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.sendPaymentsDays);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltip, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__.MatButtonToggle]
  });
  return FeaturePaymentsComponent;
})();

/***/ }),

/***/ 94743:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/settings-policies/features/feature-schedules/feature-schedules.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureSchedulesComponent": () => (/* binding */ FeatureSchedulesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/setting_policies */ 90284);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/dynamic-table/dynamic-table.component */ 57834);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button-toggle */ 90811);










function FeatureSchedulesComponent_mat_button_toggle_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-button-toggle", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const permission_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", permission_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", permission_r1.permission, "");
  }
}

const _c0 = function (a0) {
  return {
    "active": a0
  };
};

let FeatureSchedulesComponent = /*#__PURE__*/(() => {
  class FeatureSchedulesComponent {
    constructor(activatedRoute) {
      this.activatedRoute = activatedRoute;
      this.permissionTableCols = src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__.generalProjectSettingTable;
      this.schedules_shiftAlerts = src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__.schedules_shiftAlerts;
      this.schedules_shiftAlertsTableArray = [{
        userName: 'Ravi',
        permission: 'both'
      }, {
        userName: 'Ravi',
        permission: 'both'
      }];
      this.currentFragment = 'calendarType';
      this.defaultAllUser = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('private');
      this.defaultShiftAlerts = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('both');
    }

    ngOnInit() {
      this.activatedRoute.fragment.subscribe(fragment => {
        if (fragment) {
          this.currentFragment = fragment;
        }
      });
    }

    TdClickEvent(event) {}

  }

  FeatureSchedulesComponent.ɵfac = function FeatureSchedulesComponent_Factory(t) {
    return new (t || FeatureSchedulesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
  };

  FeatureSchedulesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: FeatureSchedulesComponent,
    selectors: [["app-feature-schedules"]],
    decls: 60,
    vars: 14,
    consts: [[1, "row"], [1, "col-md-3"], [1, "nav", "nav-tabs", "flex-column", "vertical_tab"], [1, "tab-item"], ["data-bs-toggle", "tab", "href", "#calendarType", 1, "nav-link", 3, "ngClass"], ["data-bs-toggle", "tab", "href", "#shiftAlerts", 1, "nav-link", 3, "ngClass"], [1, "col-md-9"], [1, "tab-content"], ["id", "calendarType", 1, "tab-pane", 3, "ngClass"], ["matTooltip", "This setting determines what users can view in the calendar. Organization owners and managers will always have full visibility."], ["src", "../../../assets/images/icon/info.svg", "alt", ""], ["matTooltip", "This setting affects all users."], [1, "nav", "nav-tabs", "common_tabs", "mb-5", 3, "formControl"], ["value", "private", 1, "nav-item"], ["value", "collaborative", 1, "nav-item"], ["id", "shiftAlerts", 1, "tab-pane", 3, "ngClass"], ["matTooltip", "Info about the action"], [1, "big"], ["class", "nav-item", 3, "value", 4, "ngFor", "ngForOf"], [3, "tableColsDetails", "tableDataArray", "permissionsMenu", "tdClickEmitter"], [1, "nav-item", 3, "value"]],
    template: function FeatureSchedulesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "ul", 2)(4, "li", 3)(5, "a", 4)(6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Calendar type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 3)(9, "a", 5)(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Shift alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6)(13, "div", 7)(14, "div", 8)(15, "div")(16, "div")(17, "div")(18, "div")(19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "CALENDAR TYPE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Making the calendar private restricts users so they can only view their own shifts and time off. If the calendar is collaborative, everyone is able to to view all shifts and time off for all members of the organization.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div")(26, "div")(27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "ALL USERS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div")(32, "mat-button-toggle-group", 12)(33, "mat-button-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Private");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-button-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Collaborative");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 15)(38, "div")(39, "div")(40, "div")(41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Shift Alerts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Control who receives alerts about a member.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div")(48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Default: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "mat-button-toggle-group", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, FeatureSchedulesComponent_mat_button_toggle_53_Template, 2, 2, "mat-button-toggle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div")(55, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Individual Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Override the organization default for specific members.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "TrackerX-dynamic-table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("tdClickEmitter", function FeatureSchedulesComponent_Template_TrackerX_dynamic_table_tdClickEmitter_59_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, ctx.currentFragment === "calendarType"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c0, ctx.currentFragment === "shiftAlerts"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.currentFragment == "calendarType" ? "active" : "fade");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.defaultAllUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.currentFragment == "shiftAlerts" ? "active" : "fade");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.defaultShiftAlerts);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.schedules_shiftAlerts);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tableColsDetails", ctx.permissionTableCols)("tableDataArray", ctx.schedules_shiftAlertsTableArray)("permissionsMenu", ctx.schedules_shiftAlerts);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_1__.DynamicTableComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggle]
  });
  return FeatureSchedulesComponent;
})();

/***/ }),

/***/ 84589:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/settings-policies/features/feature-timeoff/feature-timeoff.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureTimeoffComponent": () => (/* binding */ FeatureTimeoffComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/setting_policies */ 90284);
/* harmony import */ var src_app_shared_pop_up_model_add_holiday_add_holiday_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/add-holiday/add-holiday.component */ 82123);
/* harmony import */ var src_app_shared_pop_up_model_add_policy_add_policy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pop-up-model/add-policy/add-policy.component */ 94651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/dynamic-table/dynamic-table.component */ 57834);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);














const _c0 = function (a0) {
  return {
    "active": a0
  };
};

let FeatureTimeoffComponent = /*#__PURE__*/(() => {
  class FeatureTimeoffComponent {
    constructor(matDialog, activatedRoute) {
      this.matDialog = matDialog;
      this.activatedRoute = activatedRoute;
      this.searchMembers = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('');
      this.timeoffPoliciesCols = src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__.timeoffPoliciesTable;
      this.timeoff_holidayCols = src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__.timeoff_holidayTable;
      this.timeoff_timeoffbalaceCols = src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__.timeoff_timeoffbalaceTable;
      this.timeOffPoliciesActionMenu = src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__.timeOffPoliciesAction;
      this.timeOffPoliciesArchiedMenu = src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__.timeOffPoliciesArchiedAction;
      this.timeoff_holidayActionMenu = src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__.timeoff_holidayAction;
      this.timeOffPoliciesData = [{
        policyName: 'abcd',
        members: '2',
        accrualschedule: 'None'
      }, {
        policyName: 'abcd',
        members: '2',
        accrualschedule: 'None'
      }];
      this.holidayTableArray = [{
        holiday: 'Christmas Day',
        members: [{
          name: 'BA'
        }, {
          name: 'Travel'
        }],
        date: 'Dec 25'
      }];
      this.timeoff_timeoffbalaceArray = [{
        members: 'Ravi',
        abcd: 'abcd'
      }];
      this.currentFragment = 'timeOffPolicies';
    }

    ngOnInit() {
      this.activatedRoute.fragment.subscribe(fragment => {
        if (fragment) {
          this.currentFragment = fragment;
        }
      });
    }

    addPolicy() {
      const addPolicyModal = this.matDialog.open(src_app_shared_pop_up_model_add_policy_add_policy_component__WEBPACK_IMPORTED_MODULE_2__.AddPolicyComponent, {
        width: '675px'
      });
    }

    TdClickEvent(event) {}

    addHoliday() {
      const addHolidayModal = this.matDialog.open(src_app_shared_pop_up_model_add_holiday_add_holiday_component__WEBPACK_IMPORTED_MODULE_1__.AddHolidayComponent, {
        width: '675px'
      });
    }

  }

  FeatureTimeoffComponent.ɵfac = function FeatureTimeoffComponent_Factory(t) {
    return new (t || FeatureTimeoffComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
  };

  FeatureTimeoffComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: FeatureTimeoffComponent,
    selectors: [["app-feature-timeoff"]],
    decls: 90,
    vars: 25,
    consts: [[1, "row"], [1, "col-md-3"], [1, "nav", "nav-tabs", "flex-column", "vertical_tab", "mb-5"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#timeOffPolicies", 1, "nav-link", 3, "ngClass"], ["data-bs-toggle", "tab", "href", "#holidays", 1, "nav-link", 3, "ngClass"], ["data-bs-toggle", "tab", "href", "#timeOffBalances", 1, "nav-link", 3, "ngClass"], [1, "col-md-9"], [1, "tab-content"], ["id", "timeOffPolicies", 1, "tab-pane", 3, "ngClass"], [1, "nav", "nav-tabs", "tab_design_one", "mb-5"], ["data-bs-toggle", "tab", "href", "#active", 1, "nav-link", "active"], ["data-bs-toggle", "tab", "href", "#archived", 1, "nav-link"], ["id", "active", 1, "tab-pane", "active"], [1, "no_time_off", "my-5"], [1, "no_time_off_in", "text-center"], ["src", "../../../../../assets/images/time-off-policy.png", "alt", "", 1, "mb-4"], [1, "mb-5"], [1, "btn_blue", 3, "click"], ["tableName", "Policy", 3, "tableColsDetails", "tableDataArray", "actionMenu", "isPagination", "tdClickEmitter"], ["id", "archived", 1, "tab-pane", "fade"], [3, "tableColsDetails", "tableDataArray", "actionMenu", "tdClickEmitter"], ["id", "holidays", 1, "tab-pane", 3, "ngClass"], ["src", "../../../../../assets/images/public-holiday.png", "alt", "", 1, "mb-4"], [1, "row", "mb-4"], [1, "col-sm-8"], [1, "mb-2"], ["matTooltip", "This allows managers to set up policies."], ["src", "../../../assets/images/icon/info.svg", "alt", ""], [1, "col-sm-4", "text-end"], ["id", "timeOffBalances", 1, "tab-pane", 3, "ngClass"], [1, "col-md-6"], ["for", "tax_id"], ["matTooltip", "This allows managers to pay members for holidays."], ["appearance", "fill"], ["type", "text", "matInput", "", "placeholder", "Search members", 3, "formControl"], [1, "text-end", "mb-5", "import_btn"], [1, "btn_blue_border"], ["src", "../../../../../assets/images/icon/export2.svg", "alt", ""], [1, "btn_blue", "ms-3"], ["src", "../../../../../assets/images/icon/import.svg", "alt", ""], [3, "tableColsDetails", "tableDataArray"]],
    template: function FeatureTimeoffComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "ul", 2)(4, "li", 3)(5, "a", 4)(6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Time Off Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "li", 3)(9, "a", 5)(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Holidays");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "li", 3)(13, "a", 6)(14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Time Off Balances");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 7)(17, "div", 8)(18, "div", 9)(19, "div")(20, "ul", 10)(21, "li", 3)(22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "li", 3)(25, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Archived");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 8)(28, "div", 13)(29, "div")(30, "div", 14)(31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "No active time off Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Set up automatic accrual policies for time off");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FeatureTimeoffComponent_Template_button_click_37_listener() {
          return ctx.addPolicy();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Add A Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div")(40, "TrackerX-dynamic-table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("tdClickEmitter", function FeatureTimeoffComponent_Template_TrackerX_dynamic_table_tdClickEmitter_40_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 20)(42, "div")(43, "TrackerX-dynamic-table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("tdClickEmitter", function FeatureTimeoffComponent_Template_TrackerX_dynamic_table_tdClickEmitter_43_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 22)(45, "div", 14)(46, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Public Holiday");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Add holidays and give your team time off to kick back and relax. you can pay them for that time, too.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FeatureTimeoffComponent_Template_button_click_52_listener() {
          return ctx.addHoliday();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Add A Holiday");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div")(55, "div", 24)(56, "div", 25)(57, "h4", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Holidays ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](60, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Set up holidays for time off");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 29)(64, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FeatureTimeoffComponent_Template_button_click_64_listener() {
          return ctx.addHoliday();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Add A Holiday");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div")(67, "TrackerX-dynamic-table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("tdClickEmitter", function FeatureTimeoffComponent_Template_TrackerX_dynamic_table_tdClickEmitter_67_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 30)(69, "div", 24)(70, "div", 31)(71, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Time off Balances ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](74, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Set up time off balances for members");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 31)(78, "mat-form-field", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](79, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 36)(81, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](82, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](86, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](89, "TrackerX-dynamic-table", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](19, _c0, ctx.currentFragment === "timeOffPolicies"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](21, _c0, ctx.currentFragment === "holidays"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](23, _c0, ctx.currentFragment === "timeOffBalances"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.currentFragment == "timeOffPolicies" ? "active" : "fade");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tableColsDetails", ctx.timeoffPoliciesCols)("tableDataArray", ctx.timeOffPoliciesData)("actionMenu", ctx.timeOffPoliciesActionMenu)("isPagination", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tableColsDetails", ctx.timeoffPoliciesCols)("tableDataArray", ctx.timeOffPoliciesData)("actionMenu", ctx.timeOffPoliciesArchiedMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.currentFragment == "holidays" ? "active" : "fade");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tableColsDetails", ctx.timeoff_holidayCols)("tableDataArray", ctx.holidayTableArray)("actionMenu", ctx.timeoff_holidayActionMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.currentFragment == "timeOffBalances" ? "active" : "fade");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.searchMembers);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tableColsDetails", ctx.timeoff_timeoffbalaceCols)("tableDataArray", ctx.timeoff_timeoffbalaceArray);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_3__.DynamicTableComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip]
  });
  return FeatureTimeoffComponent;
})();

/***/ }),

/***/ 34253:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/settings-policies/features/feature-timesheets/feature-timesheets.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureTimesheetsComponent": () => (/* binding */ FeatureTimesheetsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/setting_policies */ 90284);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/dynamic-table/dynamic-table.component */ 57834);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ 90455);










const _c0 = function (a0) {
  return {
    "active": a0
  };
};

let FeatureTimesheetsComponent = /*#__PURE__*/(() => {
  class FeatureTimesheetsComponent {
    constructor(activatedRoute) {
      this.activatedRoute = activatedRoute;
      this.modifyTime = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('');
      this.activity_deleteScreeShotCols = src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__.activity_deleteScreeShotTable;
      this.activity_deleteScreenshotTableArray = [{
        name: 'Ravi',
        toggleValue: 'true'
      }, {
        name: 'Ravi',
        toggleValue: 'false'
      }];
      this.currentFragment = 'modifyTime';
    }

    ngOnInit() {
      this.activatedRoute.fragment.subscribe(fragment => {
        if (fragment) {
          this.currentFragment = fragment;
        }
      });
    }

    TdClickEvent(event) {}

  }

  FeatureTimesheetsComponent.ɵfac = function FeatureTimesheetsComponent_Factory(t) {
    return new (t || FeatureTimesheetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
  };

  FeatureTimesheetsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: FeatureTimesheetsComponent,
    selectors: [["app-feature-timesheets"]],
    decls: 54,
    vars: 14,
    consts: [[1, "row"], [1, "col-md-3"], [1, "nav", "nav-tabs", "flex-column", "vertical_tab"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#modifyTime", 1, "nav-link", 3, "ngClass"], ["data-bs-toggle", "tab", "href", "#requireReason", 1, "nav-link", 3, "ngClass"], [1, "col-md-9"], [1, "tab-content"], ["id", "modifyTime", 1, "tab-pane", 3, "ngClass"], ["matTooltip", "Info about the action"], ["src", "../../../assets/images/icon/info.svg", "alt", ""], [1, "big"], [1, "mb-3"], [3, "formControl"], [3, "tableColsDetails", "tableDataArray", "tdClickEmitter"], ["id", "requireReason", 1, "tab-pane", 3, "ngClass"]],
    template: function FeatureTimesheetsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "ul", 2)(4, "li", 3)(5, "a", 4)(6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Modify Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 3)(9, "a", 5)(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Require Reason");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 6)(13, "div", 7)(14, "div", 8)(15, "div")(16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Modify Time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Allow team members to edit their time manually. All members are always able to delete their own time before it\u2019s paid.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 12)(23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Default: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "mat-slide-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div")(29, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Individual Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Override the organization default for specific members");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "TrackerX-dynamic-table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("tdClickEmitter", function FeatureTimesheetsComponent_Template_TrackerX_dynamic_table_tdClickEmitter_33_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 15)(35, "div")(36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Require Reason ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Require team members to provide a reason when editing their time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 12)(43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Default: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "mat-slide-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div")(49, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Individual Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Override the organization default for specific members.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "TrackerX-dynamic-table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("tdClickEmitter", function FeatureTimesheetsComponent_Template_TrackerX_dynamic_table_tdClickEmitter_53_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, ctx.currentFragment === "modifyTime"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c0, ctx.currentFragment === "requireReason"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.currentFragment == "modifyTime" ? "active" : "fade");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.modifyTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tableColsDetails", ctx.activity_deleteScreeShotCols)("tableDataArray", ctx.activity_deleteScreenshotTableArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.currentFragment == "requireReason" ? "active" : "fade");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.modifyTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tableColsDetails", ctx.activity_deleteScreeShotCols)("tableDataArray", ctx.activity_deleteScreenshotTableArray);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_1__.DynamicTableComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__.MatSlideToggle]
  });
  return FeatureTimesheetsComponent;
})();

/***/ }),

/***/ 22258:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/settings-policies/features/feature-workbreaks/feature-workbreaks.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureWorkbreaksComponent": () => (/* binding */ FeatureWorkbreaksComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/setting_policies */ 90284);
/* harmony import */ var src_app_shared_pop_up_model_add_work_break_model_add_work_break_model_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/add-work-break-model/add-work-break-model.component */ 21678);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/dynamic-table/dynamic-table.component */ 57834);





let FeatureWorkbreaksComponent = /*#__PURE__*/(() => {
  class FeatureWorkbreaksComponent {
    constructor(matDialog) {
      this.matDialog = matDialog;
      this.WorkBreaksPoliciesCols = src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__.WorkBreaksPoliciesTable;
      this.WorkBreaksPoliciesMenu = src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__.WorkBreaksPoliciesAction;
      this.WorkBreaksPoliciesArchivedMenu = src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__.WorkBreaksPoliciesArchivedAction;
      this.WorkBreaksPoliciesArray = [{
        policyName: 'abcd',
        members: '2',
        type: 'Paid'
      }, {
        policyName: 'abcd',
        members: '2',
        type: 'Paid'
      }];
    }

    ngOnInit() {}

    addBreackPolicy() {
      const beackPolicyModal = this.matDialog.open(src_app_shared_pop_up_model_add_work_break_model_add_work_break_model_component__WEBPACK_IMPORTED_MODULE_1__.AddWorkBreakModelComponent, {
        width: '800px',
        height: '800px'
      });
    }

  }

  FeatureWorkbreaksComponent.ɵfac = function FeatureWorkbreaksComponent_Factory(t) {
    return new (t || FeatureWorkbreaksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog));
  };

  FeatureWorkbreaksComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: FeatureWorkbreaksComponent,
    selectors: [["app-feature-workbreaks"]],
    decls: 46,
    vars: 6,
    consts: [[1, "row"], [1, "col-md-3"], [1, "nav", "nav-tabs", "flex-column", "vertical_tab"], [1, "nav-item"], ["data-bs-taggle", "tab", "href", "#workBreakPolicies1", 1, "nav-link", "active"], [1, "col-md-9"], [1, "tab-content"], ["id", "workBreakPolicies1", 1, "nav-pane", "active"], [1, "no_time_off", "my-5"], [1, "no_time_off_in", "text-center"], ["src", "../../../../../assets/images/active-work.png", "alt", "", 1, "mb-4"], [1, "mb-5"], [1, "btn_blue", 3, "click"], [1, "nav", "nav-tabs", "tab_design_one", "mb-5"], ["data-bs-toggle", "tab", "href", "#active1", 1, "nav-link", "active"], ["data-bs-toggle", "tab", "href", "#archived1", 1, "nav-link"], ["id", "active1", 1, "tab-pane", "active"], [1, "row", "mb-4"], [1, "col-md-8"], [1, "mb-2"], [1, "m-0"], [1, "col-md-4", "text-end"], [3, "tableColsDetails", "tableDataArray", "actionMenu"], ["id", "archived1", 1, "tab-pane", "fade"]],
    template: function FeatureWorkbreaksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "div")(4, "ul", 2)(5, "li", 3)(6, "a", 4)(7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Work Break Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "div")(13, "div", 8)(14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "No Active Work Break Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Set up automatic work break policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FeatureWorkbreaksComponent_Template_button_click_20_listener() {
          return ctx.addBreackPolicy();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Add A Holiday");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div")(23, "div")(24, "ul", 13)(25, "li", 3)(26, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "li", 3)(29, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Archived");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 6)(32, "div", 16)(33, "div", 17)(34, "div", 18)(35, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Work Break Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Set up automatic work break policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 21)(40, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FeatureWorkbreaksComponent_Template_button_click_40_listener() {
          return ctx.addBreackPolicy();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Add Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "TrackerX-dynamic-table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "TrackerX-dynamic-table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tableColsDetails", ctx.WorkBreaksPoliciesCols)("tableDataArray", ctx.WorkBreaksPoliciesArray)("actionMenu", ctx.WorkBreaksPoliciesMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tableColsDetails", ctx.WorkBreaksPoliciesCols)("tableDataArray", ctx.WorkBreaksPoliciesArray)("actionMenu", ctx.WorkBreaksPoliciesArchivedMenu);
      }
    },
    dependencies: [_shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_2__.DynamicTableComponent]
  });
  return FeatureWorkbreaksComponent;
})();

/***/ }),

/***/ 59534:
/*!************************************************************************!*\
  !*** ./src/app/pages/settings-policies/features/features.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturesComponent": () => (/* binding */ FeaturesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);




const _c0 = function () {
  return ["/settings/all-setting"];
};

const _c1 = function (a0) {
  return {
    "active": a0
  };
};

let FeaturesComponent = /*#__PURE__*/(() => {
  class FeaturesComponent {
    constructor(router) {
      this.router = router;
      this.tabActive = '';
    }

    ngOnInit() {
      if (window.location.pathname.split('/').length == 3) {
        setTimeout(() => {
          this.tabActive = 'activity';
          this.TabClick('activity');
        }, 500);
      } else {
        this.tabActive = window.location.pathname.split('/')[3];
      }
    }

    TabClick(event) {
      if (event) {
        this.tabActive = event;
        this.router.navigateByUrl('/settings/features/' + event);
      }
    }

  }

  FeaturesComponent.ɵfac = function FeaturesComponent_Factory(t) {
    return new (t || FeaturesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };

  FeaturesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FeaturesComponent,
    selectors: [["app-features"]],
    decls: 36,
    vars: 26,
    consts: [[1, "white_box", "main_content"], [1, "setting_title", 3, "routerLink"], ["src", "../../../../assets/images/icon/back-arrow-blue.svg", "alt", ""], [1, "mb-5"], [1, "dashboars_tabs", "mb-5"], [1, "nav", "nav-tabs", "tab_design_one"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#activity", 1, "nav-link", 3, "ngClass", "click"], ["data-bs-toggle", "tab", "href", "#timesheets", 1, "nav-link", 3, "ngClass", "click"], ["data-bs-toggle", "tab", "href", "#invoices", 1, "nav-link", 3, "ngClass", "click"], ["data-bs-toggle", "tab", "href", "#schedules", 1, "nav-link", 3, "ngClass", "click"], ["data-bs-toggle", "tab", "href", "#timeOff", 1, "nav-link", 3, "ngClass", "click"], ["data-bs-toggle", "tab", "href", "#payments", 1, "nav-link", 3, "ngClass", "click"], ["data-bs-toggle", "tab", "href", "#achievements", 1, "nav-link", 3, "ngClass", "click"], ["data-bs-toggle", "tab", "href", "#workBreaks", 1, "nav-link", 3, "ngClass", "click"]],
    template: function FeaturesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Setting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Features Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div")(8, "div", 4)(9, "ul", 5)(10, "li", 6)(11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeaturesComponent_Template_a_click_11_listener() {
          return ctx.TabClick("activity");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6)(14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeaturesComponent_Template_a_click_14_listener() {
          return ctx.TabClick("timesheets");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Timesheets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 6)(17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeaturesComponent_Template_a_click_17_listener() {
          return ctx.TabClick("invoices");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Invoices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 6)(20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeaturesComponent_Template_a_click_20_listener() {
          return ctx.TabClick("schedules");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Schedules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 6)(23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeaturesComponent_Template_a_click_23_listener() {
          return ctx.TabClick("timeOff");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Time off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 6)(26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeaturesComponent_Template_a_click_26_listener() {
          return ctx.TabClick("payments");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 6)(29, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeaturesComponent_Template_a_click_29_listener() {
          return ctx.TabClick("achievements");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Achievements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 6)(32, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeaturesComponent_Template_a_click_32_listener() {
          return ctx.TabClick("workBreaks");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Work Breaks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx.tabActive == "activity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, ctx.tabActive == "timesheets"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c1, ctx.tabActive == "invoices"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, ctx.tabActive == "schedules"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c1, ctx.tabActive == "timeOff"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c1, ctx.tabActive == "payments"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c1, ctx.tabActive == "achievements"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c1, ctx.tabActive == "workBreaks"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink]
  });
  return FeaturesComponent;
})();

/***/ }),

/***/ 92497:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/settings-policies/general/general-organization/general-organization.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralOrganizationComponent": () => (/* binding */ GeneralOrganizationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_app_core_model_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/common */ 18595);
/* harmony import */ var src_app_guest_industry_list_industry_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/guest/industry-list/industry-list */ 21160);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var src_app_core_services_organization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/organization.service */ 14261);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 11481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _core_directive_drag_drop_file_upload_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/directive/drag-drop-file-upload.directive */ 98626);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 47873);
/* harmony import */ var mat_select_filter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! mat-select-filter */ 36838);


















function GeneralOrganizationComponent_mat_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const type_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", type_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](type_r5.name);
  }
}

function GeneralOrganizationComponent_mat_option_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const currency_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", currency_r6.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](currency_r6.value);
  }
}

function GeneralOrganizationComponent_mat_option_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const days_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", days_r7.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](days_r7.value);
  }
}

function GeneralOrganizationComponent_mat_option_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const timeZone_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", timeZone_r8.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](timeZone_r8.value);
  }
}

const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};

let GeneralOrganizationComponent = /*#__PURE__*/(() => {
  class GeneralOrganizationComponent {
    constructor(formBuilder, masterService, organizationService, activatedRoute, sanitizer) {
      this.formBuilder = formBuilder;
      this.masterService = masterService;
      this.organizationService = organizationService;
      this.activatedRoute = activatedRoute;
      this.sanitizer = sanitizer;
      this.isOrganizationFormSave = false;
      this.fileArr = '';
      this.organizationData = {};
      this.fileObj = [];
      this.industry_list = src_app_guest_industry_list_industry_list__WEBPACK_IMPORTED_MODULE_1__.industry_list;
      this.timeZoneArray = src_app_core_model_common__WEBPACK_IMPORTED_MODULE_0__.timezoneList;
      this.currencyArray = src_app_core_model_common__WEBPACK_IMPORTED_MODULE_0__.currencyList;
      this.startWeekOnArray = src_app_core_model_common__WEBPACK_IMPORTED_MODULE_0__.weekList;
      this.versionArray = ['2012 or newer', '2011', '2010', '2009', '2008'];
      this.startWeekOnList = this.startWeekOnArray.slice();
      this.currencyList = this.currencyArray.slice();
      this.timeZoneList = this.timeZoneArray.slice();
      this.versionList = this.versionArray.slice();
    }

    ngOnInit() {
      this.organizationForm = this.formBuilder.group({
        organization_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        organization_type: [''],
        address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        goals: [''],
        profile_img: [''],
        logo: [''],
        plan: [''],
        tax_id: [''],
        currency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        start_week_on: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        timezone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        _id: ['']
      });
      this.activatedRoute.queryParams.subscribe(params => {
        const organizationId = params['id'] ? params['id'] : this.masterService.GetLoginOrg();
        this.GetOrganizationById(organizationId['_id']);
      });
    }

    get organizationFormVal() {
      return this.organizationForm.controls;
    }

    GetOrganizationById(id) {
      if (id) {
        this.masterService.showSpppiner();
        this.organizationService.GetOrganizationById(id).subscribe(response => {
          if (response && response.ReturnCode == 200 && response.err == 0) {
            this.organizationData = response.Data;

            if (this.organizationData) {
              this.organizationForm.patchValue({
                organization_name: this.organizationData.organization_name,
                organization_type: this.organizationData.organization_type,
                address: this.organizationData.address,
                goals: this.organizationData.goals,
                profile_img: this.organizationData.profile_img,
                logo: this.organizationData.logo,
                plan: this.organizationData.plan,
                tax_id: this.organizationData.tax_id,
                currency: this.organizationData.currency,
                start_week_on: this.organizationData.start_week_on,
                timezone: this.organizationData.timezone,
                _id: this.organizationData._id
              });
            }

            this.masterService.hideSppiner();
          } else {
            this.masterService.hideSppiner();
            this.masterService.showError(response.ReturnMsg, 'Error');
          }
        }, error => {
          this.masterService.hideSppiner();
          this.masterService.showError(error.error.ReturnMsg, 'Error');
        });
      }
    }

    UpdateOrganization() {
      this.masterService.showSpppiner();
      this.organizationService.UpdateOrganization(this.organizationForm.value, this.organizationForm.value._id).subscribe(response => {
        if (response && response.ReturnCode == 200 && response.err == 0) {
          this.GetOrganizationById(this.organizationForm.value._id); // window.location.reload();

          this.masterService.showSuccess(response.ReturnMsg, 'Success');
          this.masterService.hideSppiner();
        } else {
          this.masterService.showError(response.ReturnMsg, 'Error');
          this.masterService.hideSppiner();
        }
      }, error => {
        this.masterService.hideSppiner();
        this.masterService.showError(error.error.ReturnMsg, 'Error');
      });
    }

    uploadLogoImage(e) {
      const fileListAsArray = Array.from(e);
      fileListAsArray.forEach((item, i) => {
        const file = e;
        const url = URL.createObjectURL(file[i]);
        this.imgArr = fileListAsArray[0];
        this.fileArr = url;
      });
      const formData = new FormData();
      formData.append("profile_img", this.imgArr, this.imgArr.name);
      this.masterService.uploadFile(formData).subscribe(response => {
        if (response && response.ReturnCode == 200 && response.err == 0) {
          this.masterService.showSuccess('Upload successfully.!', 'Success');
        } else {
          this.masterService.showError('Something went wrong.!', 'Error');
        }
      }, error => {
        this.masterService.showError(error.error.ReturnMsg, 'Error');
      });
    }

    sanitize(url) {
      return this.sanitizer.bypassSecurityTrustUrl(url);
    }

  }

  GeneralOrganizationComponent.ɵfac = function GeneralOrganizationComponent_Factory(t) {
    return new (t || GeneralOrganizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_2__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_organization_service__WEBPACK_IMPORTED_MODULE_3__.OrganizationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer));
  };

  GeneralOrganizationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: GeneralOrganizationComponent,
    selectors: [["app-general-organization"]],
    decls: 90,
    vars: 30,
    consts: [[1, "row"], [1, "col-lg-7"], [3, "formGroup"], [1, "mb-3"], ["for", "organization_name"], ["appearance", "fill", 3, "ngClass"], ["type", "text", "formControlName", "organization_name", "id", "organization_name", "matInput", ""], ["for", "organization_type"], ["id", "organization_type", "formControlName", "organization_type"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "address"], ["id", "address", "formControlName", "address", "matInput", "", "cols", "30", "rows", "10"], ["for", "uploadAlogo"], [1, "upload_file"], ["appDragDropFileUpload", "", 3, "fileDropped"], ["appearance", "fill"], ["src", "../../../../assets/images/icon/upload.svg", "alt", ""], [1, "ddinfo"], [1, "or"], ["type", "file", "name", "logo", "hidden", "", 3, "change"], ["fileField", ""], ["type", "button", 1, "btn_blue_border", 3, "click"], [1, "size_limit"], ["alt", "", 3, "src"], ["type", "text", "matInput", "", 1, "d-none"], ["for", "tax_id"], ["matTooltip", "Info about the action"], ["src", "../../../assets/images/icon/info.svg", "alt", ""], ["type", "text", "matInput", "", "formControlName", "tax_id", "id", "tax_id"], ["for", "currency"], ["formControlName", "currency", "id", "currency"], [3, "array", "displayMember", "filteredReturn"], ["for", "start_week_on"], ["formControlName", "start_week_on", "id", "start_week_on"], ["for", "timezone"], ["formControlName", "timezone", "id", "timezone", "name", "timezone"], ["href", "#", 1, "text_gradient"], [1, "text-center", "mt-5"], ["type", "button", 1, "btn_dark", "mx-2"], ["type", "submit", 1, "btn_blue", "mx-2", 3, "click"], [3, "value"]],
    template: function GeneralOrganizationComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2)(3, "div")(4, "div", 3)(5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 3)(10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Organization Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-form-field", 5)(13, "mat-select", 8)(14, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Select a type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, GeneralOrganizationComponent_mat_option_16_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Select a type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 3)(20, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 3)(25, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Upload A Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 14)(28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("fileDropped", function GeneralOrganizationComponent_Template_div_fileDropped_28_listener($event) {
          return ctx.uploadLogoImage($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Drag and drop your files here");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "OR");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function GeneralOrganizationComponent_Template_input_change_35_listener($event) {
          return ctx.uploadLogoImage($event.target.files);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GeneralOrganizationComponent_Template_button_click_37_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);

          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](36);

          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r1.click());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Browse Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "File size limit: 1 MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "img", 24)(43, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 3)(45, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Tax Id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 3)(52, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "mat-form-field", 5)(55, "mat-select", 31)(56, "mat-select-filter", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("filteredReturn", function GeneralOrganizationComponent_Template_mat_select_filter_filteredReturn_56_listener($event) {
          return ctx.currencyList = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Select Currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, GeneralOrganizationComponent_mat_option_59_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 3)(61, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Start Week On*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "mat-form-field", 5)(64, "mat-select", 34)(65, "mat-select-filter", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("filteredReturn", function GeneralOrganizationComponent_Template_mat_select_filter_filteredReturn_65_listener($event) {
          return ctx.startWeekOnList = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Select Start Week Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, GeneralOrganizationComponent_mat_option_68_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 3)(70, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Time Zone*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "mat-form-field", 16)(73, "mat-select", 36)(74, "mat-select-filter", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("filteredReturn", function GeneralOrganizationComponent_Template_mat_select_filter_filteredReturn_74_listener($event) {
          return ctx.timeZoneList = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Select Timezone");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](77, GeneralOrganizationComponent_mat_option_77_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 3)(79, "p")(80, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](81, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, " Please read the support article about the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, " effects of changing time zones.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 38)(86, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GeneralOrganizationComponent_Template_button_click_88_listener() {
          return ctx.UpdateOrganization();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.organizationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c0, ctx.isOrganizationFormSave && (ctx.organizationFormVal["organization_name"] == null ? null : ctx.organizationFormVal["organization_name"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](20, _c0, ctx.isOrganizationFormSave && (ctx.organizationFormVal["organization_type"] == null ? null : ctx.organizationFormVal["organization_type"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.industry_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](22, _c0, ctx.isOrganizationFormSave && (ctx.organizationFormVal["address"] == null ? null : ctx.organizationFormVal["address"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.sanitize(ctx.fileArr), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](24, _c0, ctx.isOrganizationFormSave && (ctx.organizationFormVal["tax_id"] == null ? null : ctx.organizationFormVal["tax_id"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](26, _c0, ctx.isOrganizationFormSave && (ctx.organizationFormVal["currency"] == null ? null : ctx.organizationFormVal["currency"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("array", ctx.currencyArray)("displayMember", "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.currencyList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](28, _c0, ctx.isOrganizationFormSave && (ctx.organizationFormVal["start_week_on"] == null ? null : ctx.organizationFormVal["start_week_on"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("array", ctx.startWeekOnArray)("displayMember", "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.startWeekOnList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("array", ctx.timeZoneArray)("displayMember", "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.timeZoneList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _core_directive_drag_drop_file_upload_directive__WEBPACK_IMPORTED_MODULE_4__.DragDropFileUploadDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, mat_select_filter__WEBPACK_IMPORTED_MODULE_15__.MatSelectFilterComponent]
  });
  return GeneralOrganizationComponent;
})();

/***/ }),

/***/ 19901:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/settings-policies/general/general-productlinks/general-productlinks.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralProductlinksComponent": () => (/* binding */ GeneralProductlinksComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/setting_policies */ 90284);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/dynamic-table/dynamic-table.component */ 57834);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);




let GeneralProductlinksComponent = /*#__PURE__*/(() => {
  class GeneralProductlinksComponent {
    constructor() {
      this.general_productLinksCols = src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__.general_productLinksTable; // linked apps table

      this.generalProductLinksArray = [{
        product: 'abcd',
        linkedSince: '2019'
      }];
    }

    ngOnInit() {}

    TdClickEvent(event) {}

  }

  GeneralProductlinksComponent.ɵfac = function GeneralProductlinksComponent_Factory(t) {
    return new (t || GeneralProductlinksComponent)();
  };

  GeneralProductlinksComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: GeneralProductlinksComponent,
    selectors: [["app-general-productlinks"]],
    decls: 14,
    vars: 2,
    consts: [[1, "row"], [1, "col-md-7"], ["matTooltip", "Info about the action"], ["src", "../../../assets/images/icon/info.svg", "alt", ""], [1, "mb-5"], [1, "btn_blue"], [3, "tableColsDetails", "tableDataArray", "tdClickEmitter"]],
    template: function GeneralProductlinksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Product links ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Linking your organization with other TrackerX products automatically syncs changes between them.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Link With Another TrackerX Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div")(13, "TrackerX-dynamic-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("tdClickEmitter", function GeneralProductlinksComponent_Template_TrackerX_dynamic_table_tdClickEmitter_13_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tableColsDetails", ctx.general_productLinksCols)("tableDataArray", ctx.generalProductLinksArray);
      }
    },
    dependencies: [_shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_1__.DynamicTableComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__.MatTooltip]
  });
  return GeneralProductlinksComponent;
})();

/***/ }),

/***/ 13790:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/settings-policies/general/general-projects/general-projects.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralProjectsComponent": () => (/* binding */ GeneralProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/setting_policies */ 90284);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/dynamic-table/dynamic-table.component */ 57834);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ 90811);









function GeneralProjectsComponent_mat_button_toggle_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-button-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const permission_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", permission_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", permission_r1.permission, "");
  }
}

let GeneralProjectsComponent = /*#__PURE__*/(() => {
  class GeneralProjectsComponent {
    constructor() {
      this.generalProjectSettingCols = src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__.generalProjectSettingTable; //Project & time apps table cols

      this.permissionProjectMenu = src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__.permissionProject; //projects table permission

      this.generalProjectSettingArray = [{
        userName: 'ravi',
        permission: 'none'
      }, {
        userName: 'ravi',
        permission: 'none'
      }];
      this.defaultProjectRole = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('none');
    }

    ngOnInit() {}

    TdClickEvent(event) {}

  }

  GeneralProjectsComponent.ɵfac = function GeneralProjectsComponent_Factory(t) {
    return new (t || GeneralProjectsComponent)();
  };

  GeneralProjectsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: GeneralProjectsComponent,
    selectors: [["app-general-projects"]],
    decls: 33,
    vars: 5,
    consts: [[1, "row"], [1, "col-md-3"], [1, "nav", "nav-tabs", "flex-column", "vertical_tab"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#defaultMemberRole", 1, "nav-link", "active"], [1, "col-md-9"], [1, "tab-content"], ["id", "defaultMemberRole", 1, "tab-pane", "active"], [1, ""], ["matTooltip", "Info about the action"], ["src", "../../../assets/images/icon/info.svg", "alt", ""], [1, "big"], [1, "nav", "nav-tabs", "common_tabs", "mb-5", 3, "formControl"], ["class", "nav-item", 3, "value", 4, "ngFor", "ngForOf"], [3, "tableDataArray", "tableColsDetails", "permissionsMenu", "tdClickEmitter"], [1, "nav-item", 3, "value"]],
    template: function GeneralProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "ul", 2)(4, "li", 3)(5, "a", 4)(6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Default Members Role ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "div", 8)(13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Default Members Role ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "When Creating a new project, members will be assigned by default to the selected role. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 8)(20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Default: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-button-toggle-group", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, GeneralProjectsComponent_mat_button_toggle_25_Template, 2, 2, "mat-button-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 8)(27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Individual Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Override the organization default for specific members");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div")(32, "TrackerX-dynamic-table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("tdClickEmitter", function GeneralProjectsComponent_Template_TrackerX_dynamic_table_tdClickEmitter_32_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.defaultProjectRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.permissionProjectMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tableDataArray", ctx.generalProjectSettingArray)("tableColsDetails", ctx.generalProjectSettingCols)("permissionsMenu", ctx.permissionProjectMenu);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_1__.DynamicTableComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltip, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__.MatButtonToggle]
  });
  return GeneralProjectsComponent;
})();

/***/ }),

/***/ 11686:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/settings-policies/general/general-quickbooks/general-quickbooks.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralQuickbooksComponent": () => (/* binding */ GeneralQuickbooksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 47873);
/* harmony import */ var mat_select_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mat-select-filter */ 36838);










function GeneralQuickbooksComponent_mat_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const version_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", version_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](version_r1);
  }
}

const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};

let GeneralQuickbooksComponent = /*#__PURE__*/(() => {
  class GeneralQuickbooksComponent {
    constructor(formBuilder) {
      this.formBuilder = formBuilder;
      this.isquickBooksFormSave = false;
      this.versionArray = ['2012 or newer', '2011', '2010', '2009', '2008'];
      this.versionList = this.versionArray.slice();
    }

    ngOnInit() {
      this.quickBooksForm = this.formBuilder.group({
        companyName: ['', []],
        companyCreatedTime: ['', []],
        version: ['', []]
      });
    }

    get quickBooksFormVal() {
      return this.quickBooksForm.controls;
    }

  }

  GeneralQuickbooksComponent.ɵfac = function GeneralQuickbooksComponent_Factory(t) {
    return new (t || GeneralQuickbooksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
  };

  GeneralQuickbooksComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GeneralQuickbooksComponent,
    selectors: [["app-general-quickbooks"]],
    decls: 33,
    vars: 12,
    consts: [[1, "row"], [1, "col-md-7"], ["matTooltip", "Info about the action"], ["src", "../../../assets/images/icon/info.svg", "alt", ""], [3, "formGroup"], [1, "mb-3"], ["for", "companyName"], ["appearance", "fill", 3, "ngClass"], ["type", "text", "matInput", "", "formControlName", "companyName", "id", "companyName"], ["for", "companyCreatedTime"], ["type", "text", "formControlName", "companyCreatedTime", "id", "companyCreatedTime", "matInput", ""], ["for", "version"], ["formControlName", "version"], [3, "array", "filteredReturn"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
    template: function GeneralQuickbooksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Quickbooks for Windows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p")(6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " These fields are required for exporting to Quickbooks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div")(10, "form", 4)(11, "div")(12, "div", 5)(13, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Enter Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5)(20, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Company Created Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Enter Company Created Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5)(27, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 7)(30, "mat-select", 12)(31, "mat-select-filter", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filteredReturn", function GeneralQuickbooksComponent_Template_mat_select_filter_filteredReturn_31_listener($event) {
          return ctx.versionList = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, GeneralQuickbooksComponent_mat_option_32_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.quickBooksForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.isquickBooksFormSave && (ctx.quickBooksFormVal["companyName"] == null ? null : ctx.quickBooksFormVal["companyName"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.isquickBooksFormSave && (ctx.quickBooksFormVal["companyCreatedTime"] == null ? null : ctx.quickBooksFormVal["companyCreatedTime"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.isquickBooksFormSave && (ctx.quickBooksFormVal["version"] == null ? null : ctx.quickBooksFormVal["version"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("array", ctx.versionArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.versionList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltip, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, mat_select_filter__WEBPACK_IMPORTED_MODULE_8__.MatSelectFilterComponent]
  });
  return GeneralQuickbooksComponent;
})();

/***/ }),

/***/ 35394:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/settings-policies/general/general-timeapps/general-timeapps.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralTimeappsComponent": () => (/* binding */ GeneralTimeappsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/setting_policies */ 90284);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/dynamic-table/dynamic-table.component */ 57834);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ 90811);









function GeneralTimeappsComponent_mat_button_toggle_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-button-toggle", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const permission_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", permission_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", permission_r3.permission, "");
  }
}

function GeneralTimeappsComponent_mat_button_toggle_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-button-toggle", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const permission_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", permission_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", permission_r4.permission, "");
  }
}

function GeneralTimeappsComponent_mat_button_toggle_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-button-toggle", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const permission_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", permission_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", permission_r5.permission, "");
  }
}

let GeneralTimeappsComponent = /*#__PURE__*/(() => {
  class GeneralTimeappsComponent {
    constructor() {
      this.permissionTimeApps_allowedAppsMenu = src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__.permissionTimeApps_AllowedApps; //time apps permission > allowed apps

      this.permissionTimeApps_idleTimeoutMenu = src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__.permissionTimeApps_idleTimeout; //time apps permission > idle timeout

      this.permissionTimeApps_keepIdleTimeoutMenu = src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__.permissionTimeApps_keepIdleTime; //time apps permission > keep idle timout

      this.generalProjectSettingCols = src_app_core_model_table_header_data_setting_policies__WEBPACK_IMPORTED_MODULE_0__.generalProjectSettingTable; //Project & time apps table cols

      this.generalTimeApps_allowedAppsSettingArray = [{
        userName: 'ravi',
        permission: 'allApps'
      }, {
        userName: 'ravi',
        permission: 'allApps'
      }];
      this.generalTimeApps_idleTimeoutSettingArray = [{
        userName: 'ravi',
        permission: '20mins'
      }, {
        userName: 'ravi',
        permission: '20mins'
      }];
      this.generalTimeApps_keepIdleTimeoutSettingArray = [{
        userName: 'ravi',
        permission: 'prompt'
      }, {
        userName: 'ravi',
        permission: 'prompt'
      }];
      this.defaultApps = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('allApps');
      this.idleTimeoutMenu = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('never');
      this.keepIdleTimeoutMenu = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('prompt');
    }

    ngOnInit() {}

    TdClickEvent(event) {}

  }

  GeneralTimeappsComponent.ɵfac = function GeneralTimeappsComponent_Factory(t) {
    return new (t || GeneralTimeappsComponent)();
  };

  GeneralTimeappsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: GeneralTimeappsComponent,
    selectors: [["app-general-timeapps"]],
    decls: 69,
    vars: 15,
    consts: [[1, "row"], [1, "col-md-3"], [1, "nav", "nav-tabs", "flex-column", "vertical_tab"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#allowedApps", 1, "nav-link", "active"], ["data-bs-toggle", "tab", "href", "#idleTimeout", 1, "nav-link"], ["data-bs-toggle", "tab", "href", "#keepIdleTimeOut", 1, "nav-link"], [1, "col-md-9"], [1, "tab-content"], ["id", "allowedApps", 1, "tab-pane", "active"], ["matTooltip", "Info about the action"], ["src", "../../../assets/images/icon/info.svg", "alt", ""], [1, "big"], [1, "nav", "nav-tabs", "common_tabs", "mb-5", 3, "formControl"], ["class", "nav-item", 3, "value", 4, "ngFor", "ngForOf"], [3, "tableColsDetails", "tableDataArray", "permissionsMenu", "tdClickEmitter"], ["id", "idleTimeout", 1, "tab-pane", "fade"], ["id", "keepIdleTimeOut", 1, "tab-pane", "fade"], [1, "nav-item", 3, "value"]],
    template: function GeneralTimeappsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "ul", 2)(4, "li", 3)(5, "a", 4)(6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Allowed Apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 3)(9, "a", 5)(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Idle Timeout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 3)(13, "a", 6)(14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Keep Idle Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7)(17, "div", 8)(18, "div", 9)(19, "div")(20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Allowed Apps ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Control which timer apps the team member can use.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div")(27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Default: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-button-toggle-group", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, GeneralTimeappsComponent_mat_button_toggle_32_Template, 2, 2, "mat-button-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div")(34, "TrackerX-dynamic-table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("tdClickEmitter", function GeneralTimeappsComponent_Template_TrackerX_dynamic_table_tdClickEmitter_34_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 16)(36, "div")(37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Idle Timeout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Control how the desktop app detects idel time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div")(44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Default: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "mat-button-toggle-group", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, GeneralTimeappsComponent_mat_button_toggle_49_Template, 2, 2, "mat-button-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div")(51, "TrackerX-dynamic-table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("tdClickEmitter", function GeneralTimeappsComponent_Template_TrackerX_dynamic_table_tdClickEmitter_51_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 17)(53, "div")(54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Keep Idle Time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Control Whether the desktop app keeps idel time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div")(61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Default: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "mat-button-toggle-group", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, GeneralTimeappsComponent_mat_button_toggle_66_Template, 2, 2, "mat-button-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div")(68, "TrackerX-dynamic-table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("tdClickEmitter", function GeneralTimeappsComponent_Template_TrackerX_dynamic_table_tdClickEmitter_68_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.defaultApps);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.permissionTimeApps_allowedAppsMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tableColsDetails", ctx.generalProjectSettingCols)("tableDataArray", ctx.generalTimeApps_allowedAppsSettingArray)("permissionsMenu", ctx.permissionTimeApps_allowedAppsMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.idleTimeoutMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.permissionTimeApps_idleTimeoutMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tableColsDetails", ctx.generalProjectSettingCols)("tableDataArray", ctx.generalTimeApps_idleTimeoutSettingArray)("permissionsMenu", ctx.permissionTimeApps_idleTimeoutMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.keepIdleTimeoutMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.permissionTimeApps_keepIdleTimeoutMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tableColsDetails", ctx.generalProjectSettingCols)("tableDataArray", ctx.generalTimeApps_keepIdleTimeoutSettingArray)("permissionsMenu", ctx.permissionTimeApps_keepIdleTimeoutMenu);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_1__.DynamicTableComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltip, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__.MatButtonToggle]
  });
  return GeneralTimeappsComponent;
})();

/***/ }),

/***/ 87894:
/*!**********************************************************************!*\
  !*** ./src/app/pages/settings-policies/general/general.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralComponent": () => (/* binding */ GeneralComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);





const _c0 = function () {
  return ["/settings/all-setting"];
};

const _c1 = function (a0) {
  return {
    "active": a0
  };
};

let GeneralComponent = /*#__PURE__*/(() => {
  class GeneralComponent {
    constructor(router) {
      this.router = router;
      this.tabActive = '';
    }

    ngOnInit() {
      if (window.location.pathname.split('/').length == 3) {
        setTimeout(() => {
          this.tabActive = 'organization';
          this.TabClick('organization');
        }, 500);
      } else {
        this.tabActive = window.location.pathname.split('/')[3];
      }
    }

    ngAfterViewInit() {}

    TabClick(type) {
      if (type) {
        this.tabActive = type;
        this.router.navigateByUrl('/settings/general/' + type);
      }
    }

  }

  GeneralComponent.ɵfac = function GeneralComponent_Factory(t) {
    return new (t || GeneralComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };

  GeneralComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GeneralComponent,
    selectors: [["app-general"]],
    decls: 27,
    vars: 17,
    consts: [[1, "white_box", "main_content"], [1, "setting_title", 3, "routerLink"], ["src", "../../../../assets/images/icon/back-arrow-blue.svg", "alt", ""], [1, "mb-5"], [1, ""], [1, "dashboars_tabs", "mb-4"], [1, "nav", "nav-tabs", "tab_design_one"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#organization", 1, "nav-link", "active", 3, "ngClass", "click"], ["data-bs-toggle", "tab", "href", "#projects", 1, "nav-link", 3, "ngClass", "click"], ["data-bs-toggle", "tab", "href", "#timerApps", 1, "nav-link", 3, "ngClass", "click"], ["data-bs-toggle", "tab", "href", "#quickBooks", 1, "nav-link", 3, "ngClass", "click"], ["data-bs-toggle", "tab", "href", "#productsLinks", 1, "nav-link", 3, "ngClass", "click"]],
    template: function GeneralComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "General Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "ul", 6)(10, "li", 7)(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralComponent_Template_a_click_11_listener() {
          return ctx.TabClick("organization");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7)(14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralComponent_Template_a_click_14_listener() {
          return ctx.TabClick("projects");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7)(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralComponent_Template_a_click_17_listener() {
          return ctx.TabClick("timerApps");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Timer Apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7)(20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralComponent_Template_a_click_20_listener() {
          return ctx.TabClick("quickBooks");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "QuickBooks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 7)(23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralComponent_Template_a_click_23_listener() {
          return ctx.TabClick("productsLinks");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Product Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.tabActive == "organization"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.tabActive == "projects"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.tabActive == "timerApps"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.tabActive == "quickBooks"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, ctx.tabActive == "productsLinks"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink]
  });
  return GeneralComponent;
})();

/***/ }),

/***/ 60890:
/*!********************************************************************************!*\
  !*** ./src/app/pages/settings-policies/integrations/integrations.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntegrationsComponent": () => (/* binding */ IntegrationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);

let IntegrationsComponent = /*#__PURE__*/(() => {
  class IntegrationsComponent {
    constructor() {}

    ngOnInit() {}

  }

  IntegrationsComponent.ɵfac = function IntegrationsComponent_Factory(t) {
    return new (t || IntegrationsComponent)();
  };

  IntegrationsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: IntegrationsComponent,
    selectors: [["app-integrations"]],
    decls: 275,
    vars: 0,
    consts: [[1, "white_box", "main_content"], [1, "row"], [1, "col-md-6"], [1, "src_btn"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Search integrations", "aria-label", "Search integrations", "aria-describedby", "basic-addon2", 1, "form-control"], ["id", "basic-addon2", 1, "input-group-text"], [1, "fa-solid", "fa-magnifying-glass"], [1, "Project_Management", "all_report"], [1, "Agile_Project"], [1, "Preferred"], [1, "d-flex"], ["src", "../../../../assets/images/Preferred.png", "alt", ""], ["src", "../../../../assets/images/Hubstaff_Tasks_fullcolor.png", "alt", ""], [1, "btn_book"], [1, "mt-5"], [1, "btn_blue", "me-3"], [1, "btn_blue_border"], [1, "agile_project_img"], ["src", "../../../../assets/images/project_img.svg", "alt", "", 1, "w-100"], [1, "product_imgs", "mt-5"], [1, "product_imgs_2"], ["src", "../../../../assets/images/Group 281.png", "alt", ""], [1, "read_more"], ["src", "../../../../assets/images/Group 280.png", "alt", ""], ["src", "../../../../assets/images/Group 282.png", "alt", ""], ["src", "../../../../assets/images/Group 283.png", "alt", ""], ["src", "../../../../assets/images/Group 284.png", "alt", ""], ["src", "../../../../assets/images/Group 265.png", "alt", ""], ["src", "../../../../assets/images/Group 978.png", "alt", ""], ["src", "../../../../assets/images/Group 285.png", "alt", ""], ["src", "../../../../assets/images/Group 979.png", "alt", ""], ["src", "../../../../assets/images/Group 980.png", "alt", ""], ["src", "../../../../assets/images/Group 985.png", "alt", ""], ["src", "../../../../assets/images/Group 984.png", "alt", ""], ["src", "../../../../assets/images/Group 983.png", "alt", ""], ["src", "../../../../assets/images/Group 982.png", "alt", ""], ["src", "../../../../assets/images/Group 981.png", "alt", ""], ["src", "../../../../assets/images/Group 986.png", "alt", ""], ["src", "../../../../assets/images/Group 987.png", "alt", ""], ["src", "../../../../assets/images/Group 988.png", "alt", ""], ["src", "../../../../assets/images/Group 989.png", "alt", ""], ["src", "../../../../assets/images/Group 990.png", "alt", ""], ["src", "../../../../assets/images/Group 991.png", "alt", ""], ["src", "../../../../assets/images/gusto-payroll-running-payday-3f660775e9140cbab80840beb0f418c1ac16bacd5b3b54f85d27644aa23ca1b9 1.svg", "alt", "", 1, "w-100"], ["src", "../../../../assets/images/Group 992.png", "alt", ""], ["src", "../../../../assets/images/Group 993.png", "alt", ""], ["src", "../../../../assets/images/Group 994.png", "alt", ""], ["src", "../../../../assets/images/Group 995.png", "alt", ""], ["src", "../../../../assets/images/Group 996.png", "alt", ""], ["src", "../../../../assets/images/Group 997.png", "alt", ""], ["src", "../../../../assets/images/Group 998.png", "alt", ""], ["src", "../../../../assets/images/Group 999.png", "alt", ""], ["src", "../../../../assets/images/Group 1000.png", "alt", ""], ["src", "../../../../assets/images/Group 1001.png", "alt", ""], ["src", "../../../../assets/images/get_started_zapier-7627c59b87196fda95e4e26a32a3224fb59672e5af08b57b469a2e5b86255baf 1.svg", "alt", "", 1, "w-100"]],
    template: function IntegrationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "H2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Choose An Integration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8)(12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Project Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9)(15, "div", 1)(16, "div", 2)(17, "div", 10)(18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u00A0\u00A0 | \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Agile Project Management For Productive Teams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "PM software that integrates with time tracking from TrackerX.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul")(27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sprints");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Visual Workflows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Checklists");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14)(34, "div", 15)(35, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Set Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 17)(38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2)(41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20)(44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 23)(47, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23)(52, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 23)(57, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 23)(62, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 23)(67, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 23)(72, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 23)(77, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 23)(82, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 23)(87, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 23)(92, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 23)(97, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 23)(102, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 23)(107, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 23)(112, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 23)(117, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 23)(122, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 23)(127, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 23)(132, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 23)(137, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 23)(142, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 8)(145, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "CRM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 20)(148, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 23)(151, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 8)(154, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Payroll Providers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 9)(157, "div", 1)(158, "div", 2)(159, "div", 10)(160, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Payroll Powered By Gusto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Sync hours, employees and payroll insights directly with your TrackerX account.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "ul")(167, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Set Up In A Snap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Run Payroll Fast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Make Payday A Celebration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 14)(174, "div", 15)(175, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Connect to Gusto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "button", 17)(178, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " Sign up for Gusto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 2)(181, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 20)(184, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 23)(187, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 8)(190, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Payment Processors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 20)(193, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 23)(196, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 23)(201, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 23)(206, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 23)(211, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 8)(214, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Accounting And Invoicing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 20)(217, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 23)(220, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 23)(225, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 8)(228, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Help Desk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 20)(231, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 23)(234, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 23)(239, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 8)(242, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Communication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 20)(245, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 23)(248, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 8)(251, "div", 9)(252, "div", 1)(253, "div", 2)(254, "div", 10)(255, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Cant\u2019t Find The Integration You\u2019re Looking For? Use Zapier!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Zapier allows you to connect Tracker X with a variety of apps.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "ul")(262, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Set Up In A Snap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Run Payroll Fast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Make Payday A Celebration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 14)(269, "div", 15)(270, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 2)(273, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    }
  });
  return IntegrationsComponent;
})();

/***/ }),

/***/ 98234:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/settings-policies/settings-policies-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPoliciesRoutingModule": () => (/* binding */ SettingsPoliciesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account/account.component */ 95865);
/* harmony import */ var _all_setting_all_setting_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-setting/all-setting.component */ 44681);
/* harmony import */ var _billing_billing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./billing/billing.component */ 10293);
/* harmony import */ var _features_feature_achievements_feature_achievements_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/feature-achievements/feature-achievements.component */ 14796);
/* harmony import */ var _features_feature_activity_feature_activity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/feature-activity/feature-activity.component */ 51397);
/* harmony import */ var _features_feature_invoices_feature_invoices_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/feature-invoices/feature-invoices.component */ 876);
/* harmony import */ var _features_feature_payments_feature_payments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/feature-payments/feature-payments.component */ 45647);
/* harmony import */ var _features_feature_schedules_feature_schedules_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/feature-schedules/feature-schedules.component */ 94743);
/* harmony import */ var _features_feature_timeoff_feature_timeoff_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/feature-timeoff/feature-timeoff.component */ 84589);
/* harmony import */ var _features_feature_timesheets_feature_timesheets_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/feature-timesheets/feature-timesheets.component */ 34253);
/* harmony import */ var _features_feature_workbreaks_feature_workbreaks_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/feature-workbreaks/feature-workbreaks.component */ 22258);
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/features.component */ 59534);
/* harmony import */ var _general_general_organization_general_organization_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./general/general-organization/general-organization.component */ 92497);
/* harmony import */ var _general_general_productlinks_general_productlinks_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./general/general-productlinks/general-productlinks.component */ 19901);
/* harmony import */ var _general_general_projects_general_projects_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./general/general-projects/general-projects.component */ 13790);
/* harmony import */ var _general_general_quickbooks_general_quickbooks_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./general/general-quickbooks/general-quickbooks.component */ 11686);
/* harmony import */ var _general_general_timeapps_general_timeapps_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./general/general-timeapps/general-timeapps.component */ 35394);
/* harmony import */ var _general_general_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./general/general.component */ 87894);
/* harmony import */ var _integrations_integrations_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./integrations/integrations.component */ 60890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 94650);






















const routes = [{
  path: 'account',
  component: _account_account_component__WEBPACK_IMPORTED_MODULE_0__.AccountComponent
}, {
  path: 'billing',
  component: _billing_billing_component__WEBPACK_IMPORTED_MODULE_2__.BillingComponent
}, {
  path: 'features',
  component: _features_features_component__WEBPACK_IMPORTED_MODULE_11__.FeaturesComponent,
  children: [{
    path: 'activity',
    component: _features_feature_activity_feature_activity_component__WEBPACK_IMPORTED_MODULE_4__.FeatureActivityComponent
  }, {
    path: 'timesheets',
    component: _features_feature_timesheets_feature_timesheets_component__WEBPACK_IMPORTED_MODULE_9__.FeatureTimesheetsComponent
  }, {
    path: 'invoices',
    component: _features_feature_invoices_feature_invoices_component__WEBPACK_IMPORTED_MODULE_5__.FeatureInvoicesComponent
  }, {
    path: 'schedules',
    component: _features_feature_schedules_feature_schedules_component__WEBPACK_IMPORTED_MODULE_7__.FeatureSchedulesComponent
  }, {
    path: 'timeOff',
    component: _features_feature_timeoff_feature_timeoff_component__WEBPACK_IMPORTED_MODULE_8__.FeatureTimeoffComponent
  }, {
    path: 'payments',
    component: _features_feature_payments_feature_payments_component__WEBPACK_IMPORTED_MODULE_6__.FeaturePaymentsComponent
  }, {
    path: 'achievements',
    component: _features_feature_achievements_feature_achievements_component__WEBPACK_IMPORTED_MODULE_3__.FeatureAchievementsComponent
  }, {
    path: 'workBreaks',
    component: _features_feature_workbreaks_feature_workbreaks_component__WEBPACK_IMPORTED_MODULE_10__.FeatureWorkbreaksComponent
  }]
}, {
  path: 'general',
  component: _general_general_component__WEBPACK_IMPORTED_MODULE_17__.GeneralComponent,
  children: [// { path: '', component: GeneralOrganizationComponent, pathMatch: 'full' },
  {
    path: 'organization',
    component: _general_general_organization_general_organization_component__WEBPACK_IMPORTED_MODULE_12__.GeneralOrganizationComponent
  }, {
    path: 'projects',
    component: _general_general_projects_general_projects_component__WEBPACK_IMPORTED_MODULE_14__.GeneralProjectsComponent
  }, {
    path: 'timerApps',
    component: _general_general_timeapps_general_timeapps_component__WEBPACK_IMPORTED_MODULE_16__.GeneralTimeappsComponent
  }, {
    path: 'quickBooks',
    component: _general_general_quickbooks_general_quickbooks_component__WEBPACK_IMPORTED_MODULE_15__.GeneralQuickbooksComponent
  }, {
    path: 'productsLinks',
    component: _general_general_productlinks_general_productlinks_component__WEBPACK_IMPORTED_MODULE_13__.GeneralProductlinksComponent
  }]
}, {
  path: 'integrations',
  component: _integrations_integrations_component__WEBPACK_IMPORTED_MODULE_18__.IntegrationsComponent
}, {
  path: 'all-setting',
  component: _all_setting_all_setting_component__WEBPACK_IMPORTED_MODULE_1__.AllSettingComponent
}];
let SettingsPoliciesRoutingModule = /*#__PURE__*/(() => {
  class SettingsPoliciesRoutingModule {}

  SettingsPoliciesRoutingModule.ɵfac = function SettingsPoliciesRoutingModule_Factory(t) {
    return new (t || SettingsPoliciesRoutingModule)();
  };

  SettingsPoliciesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
    type: SettingsPoliciesRoutingModule
  });
  SettingsPoliciesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule]
  });
  return SettingsPoliciesRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](SettingsPoliciesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule]
  });
})();

/***/ }),

/***/ 5230:
/*!*********************************************************************!*\
  !*** ./src/app/pages/settings-policies/settings-policies.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPoliciesModule": () => (/* binding */ SettingsPoliciesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _settings_policies_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-policies-routing.module */ 98234);
/* harmony import */ var _general_general_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general/general.component */ 87894);
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/features.component */ 59534);
/* harmony import */ var _integrations_integrations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./integrations/integrations.component */ 60890);
/* harmony import */ var _billing_billing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./billing/billing.component */ 10293);
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account/account.component */ 95865);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var mat_select_filter__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! mat-select-filter */ 36838);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/slide-toggle */ 90455);
/* harmony import */ var _features_feature_activity_feature_activity_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/feature-activity/feature-activity.component */ 51397);
/* harmony import */ var _features_feature_timesheets_feature_timesheets_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/feature-timesheets/feature-timesheets.component */ 34253);
/* harmony import */ var _features_feature_invoices_feature_invoices_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/feature-invoices/feature-invoices.component */ 876);
/* harmony import */ var _features_feature_schedules_feature_schedules_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/feature-schedules/feature-schedules.component */ 94743);
/* harmony import */ var _features_feature_timeoff_feature_timeoff_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/feature-timeoff/feature-timeoff.component */ 84589);
/* harmony import */ var _features_feature_payments_feature_payments_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/feature-payments/feature-payments.component */ 45647);
/* harmony import */ var _features_feature_achievements_feature_achievements_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./features/feature-achievements/feature-achievements.component */ 14796);
/* harmony import */ var _features_feature_workbreaks_feature_workbreaks_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./features/feature-workbreaks/feature-workbreaks.component */ 22258);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var _all_setting_all_setting_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./all-setting/all-setting.component */ 44681);
/* harmony import */ var _general_general_organization_general_organization_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./general/general-organization/general-organization.component */ 92497);
/* harmony import */ var _general_general_projects_general_projects_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./general/general-projects/general-projects.component */ 13790);
/* harmony import */ var _general_general_timeapps_general_timeapps_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./general/general-timeapps/general-timeapps.component */ 35394);
/* harmony import */ var _general_general_quickbooks_general_quickbooks_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./general/general-quickbooks/general-quickbooks.component */ 11686);
/* harmony import */ var _general_general_productlinks_general_productlinks_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./general/general-productlinks/general-productlinks.component */ 19901);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/button-toggle */ 90811);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 94650);
































let SettingsPoliciesModule = /*#__PURE__*/(() => {
  class SettingsPoliciesModule {}

  SettingsPoliciesModule.ɵfac = function SettingsPoliciesModule_Factory(t) {
    return new (t || SettingsPoliciesModule)();
  };

  SettingsPoliciesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({
    type: SettingsPoliciesModule
  });
  SettingsPoliciesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _settings_policies_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPoliciesRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInputModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltipModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelectModule, mat_select_filter__WEBPACK_IMPORTED_MODULE_28__.MatSelectFilterModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__.MatSlideToggleModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__.MatDialogModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_31__.MatButtonToggleModule]
  });
  return SettingsPoliciesModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](SettingsPoliciesModule, {
    declarations: [_general_general_component__WEBPACK_IMPORTED_MODULE_1__.GeneralComponent, _features_features_component__WEBPACK_IMPORTED_MODULE_2__.FeaturesComponent, _integrations_integrations_component__WEBPACK_IMPORTED_MODULE_3__.IntegrationsComponent, _billing_billing_component__WEBPACK_IMPORTED_MODULE_4__.BillingComponent, _account_account_component__WEBPACK_IMPORTED_MODULE_5__.AccountComponent, _features_feature_activity_feature_activity_component__WEBPACK_IMPORTED_MODULE_7__.FeatureActivityComponent, _features_feature_timesheets_feature_timesheets_component__WEBPACK_IMPORTED_MODULE_8__.FeatureTimesheetsComponent, _features_feature_invoices_feature_invoices_component__WEBPACK_IMPORTED_MODULE_9__.FeatureInvoicesComponent, _features_feature_schedules_feature_schedules_component__WEBPACK_IMPORTED_MODULE_10__.FeatureSchedulesComponent, _features_feature_timeoff_feature_timeoff_component__WEBPACK_IMPORTED_MODULE_11__.FeatureTimeoffComponent, _features_feature_payments_feature_payments_component__WEBPACK_IMPORTED_MODULE_12__.FeaturePaymentsComponent, _features_feature_achievements_feature_achievements_component__WEBPACK_IMPORTED_MODULE_13__.FeatureAchievementsComponent, _features_feature_workbreaks_feature_workbreaks_component__WEBPACK_IMPORTED_MODULE_14__.FeatureWorkbreaksComponent, _all_setting_all_setting_component__WEBPACK_IMPORTED_MODULE_15__.AllSettingComponent, _general_general_organization_general_organization_component__WEBPACK_IMPORTED_MODULE_16__.GeneralOrganizationComponent, _general_general_projects_general_projects_component__WEBPACK_IMPORTED_MODULE_17__.GeneralProjectsComponent, _general_general_timeapps_general_timeapps_component__WEBPACK_IMPORTED_MODULE_18__.GeneralTimeappsComponent, _general_general_quickbooks_general_quickbooks_component__WEBPACK_IMPORTED_MODULE_19__.GeneralQuickbooksComponent, _general_general_productlinks_general_productlinks_component__WEBPACK_IMPORTED_MODULE_20__.GeneralProductlinksComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _settings_policies_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPoliciesRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInputModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltipModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelectModule, mat_select_filter__WEBPACK_IMPORTED_MODULE_28__.MatSelectFilterModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__.MatSlideToggleModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__.MatDialogModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_31__.MatButtonToggleModule]
  });
})();

/***/ }),

/***/ 36838:
/*!***********************************************************************************!*\
  !*** ./node_modules/mat-select-filter/__ivy_ngcc__/fesm2015/mat-select-filter.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatSelectFilterComponent": () => (/* binding */ MatSelectFilterComponent),
/* harmony export */   "MatSelectFilterModule": () => (/* binding */ MatSelectFilterModule),
/* harmony export */   "MatSelectFilterService": () => (/* binding */ MatSelectFilterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ 29521);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ 51572);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36895);









const _c0 = ["input"];

function MatSelectFilterComponent_mat_spinner_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 5);
  }
}

function MatSelectFilterComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.noResultsMessage, "\n");
  }
}

const _c1 = function (a0) {
  return {
    "background-color": a0
  };
};

let MatSelectFilterService = /*#__PURE__*/(() => {
  class MatSelectFilterService {
    constructor() {}

  }

  MatSelectFilterService.ɵfac = function MatSelectFilterService_Factory(t) {
    return new (t || MatSelectFilterService)();
  };

  MatSelectFilterService.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
    factory: function MatSelectFilterService_Factory() {
      return new MatSelectFilterService();
    },
    token: MatSelectFilterService,
    providedIn: "root"
  });
  return MatSelectFilterService;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

let MatSelectFilterComponent = /*#__PURE__*/(() => {
  class MatSelectFilterComponent {
    constructor(fb) {
      this.showSpinner = true;
      this.noResultsMessage = 'No results';
      this.noResults = false;
      this.localSpinner = false;
      this.filteredReturn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.filteredItems = [];
      this.searchForm = fb.group({
        value: ''
      });
    }

    ngOnInit() {
      this.searchFormValueChangesSubscription = this.searchForm.valueChanges.subscribe(value => {
        if (this.showSpinner) {
          this.localSpinner = true;
        }

        if (value['value']) {
          // IF THE DISPLAY MEMBER INPUT IS SET WE CHECK THE SPECIFIC PROPERTY
          if (this.displayMember == null) {
            this.filteredItems = this.array.filter(name => name.toLowerCase().includes(value['value'].toLowerCase())); // OTHERWISE, WE CHECK THE ENTIRE STRING
          } else if (this.hasGroup && this.groupArrayName && this.displayMember) {
            this.filteredItems = this.array.map(a => {
              const objCopy = Object.assign({}, a);
              objCopy[this.groupArrayName] = objCopy[this.groupArrayName].filter(g => g[this.displayMember].toLowerCase().includes(value['value'].toLowerCase()));
              return objCopy;
            }).filter(x => x[this.groupArrayName].length > 0);
          } else {
            this.filteredItems = this.array.filter(name => name[this.displayMember].toLowerCase().includes(value['value'].toLowerCase()));
          } // NO RESULTS VALIDATION


          this.noResults = this.filteredItems == null || this.filteredItems.length === 0;
        } else {
          this.filteredItems = this.array.slice();
          this.noResults = false;
        }

        this.filteredReturn.emit(this.filteredItems);
        setTimeout(() => {
          if (this.showSpinner) {
            this.localSpinner = false;
          }
        }, 2000);
      });
      setTimeout(() => {
        this.input.nativeElement.focus();
      }, 500);

      if (!this.placeholder) {
        this.placeholder = 'Search...';
      }
    }

    handleKeydown(event) {
      // PREVENT PROPAGATION FOR ALL ALPHANUMERIC CHARACTERS IN ORDER TO AVOID SELECTION ISSUES
      if (event.key && event.key.length === 1 || event.keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.A && event.keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.Z || event.keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.ZERO && event.keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.NINE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.SPACE) {
        event.stopPropagation();
      }
    }

    ngOnDestroy() {
      this.filteredReturn.emit(this.array);
      this.searchFormValueChangesSubscription.unsubscribe();
    }

  }

  MatSelectFilterComponent.ɵfac = function MatSelectFilterComponent_Factory(t) {
    return new (t || MatSelectFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
  };

  MatSelectFilterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatSelectFilterComponent,
    selectors: [["mat-select-filter"]],
    viewQuery: function MatSelectFilterComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
      }
    },
    inputs: {
      showSpinner: "showSpinner",
      noResultsMessage: "noResultsMessage",
      placeholder: "placeholder",
      array: "array",
      color: "color",
      displayMember: "displayMember",
      hasGroup: "hasGroup",
      groupArrayName: "groupArrayName"
    },
    outputs: {
      filteredReturn: "filteredReturn"
    },
    decls: 6,
    vars: 7,
    consts: [[1, "mat-filter", 3, "formGroup", "ngStyle"], ["matInput", "", "formControlName", "value", 1, "mat-filter-input", 3, "placeholder", "keydown"], ["input", ""], ["class", "spinner", "diameter", "16", 4, "ngIf"], ["class", "noResultsMessage", 4, "ngIf"], ["diameter", "16", 1, "spinner"], [1, "noResultsMessage"]],
    template: function MatSelectFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0)(1, "div")(2, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatSelectFilterComponent_Template_input_keydown_2_listener($event) {
          return ctx.handleKeydown($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatSelectFilterComponent_mat_spinner_4_Template, 1, 0, "mat-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MatSelectFilterComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.color ? ctx.color : "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.localSpinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.noResults);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__.MatProgressSpinner],
    styles: [".mat-filter[_ngcontent-%COMP%]{border-bottom:1px solid grey;border-radius:0;box-shadow:none;box-sizing:border-box;font-size:inherit;padding:16px;position:-webkit-sticky;position:sticky;top:0;z-index:100}.mat-filter-input[_ngcontent-%COMP%]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background-color:unset;border:0;color:grey;outline:none;width:100%}.spinner[_ngcontent-%COMP%]{position:absolute;right:16px;top:calc(50% - 8px)}.noResultsMessage[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:16px;margin-top:10px}"]
  });
  return MatSelectFilterComponent;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

let MatSelectFilterModule = /*#__PURE__*/(() => {
  class MatSelectFilterModule {}

  MatSelectFilterModule.ɵfac = function MatSelectFilterModule_Factory(t) {
    return new (t || MatSelectFilterModule)();
  };

  MatSelectFilterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatSelectFilterModule
  });
  MatSelectFilterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__.MatProgressSpinnerModule]
  });
  return MatSelectFilterModule;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatSelectFilterModule, {
    declarations: function () {
      return [MatSelectFilterComponent];
    },
    imports: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__.MatProgressSpinnerModule];
    },
    exports: function () {
      return [MatSelectFilterComponent];
    }
  });
})();
/*
 * Public API Surface of mat-select-filter
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=mat-select-filter.js.map

/***/ }),

/***/ 51572:
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/progress-spinner.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS": () => (/* binding */ MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS),
/* harmony export */   "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY": () => (/* binding */ MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   "MatProgressSpinner": () => (/* binding */ MatProgressSpinner),
/* harmony export */   "MatProgressSpinnerModule": () => (/* binding */ MatProgressSpinnerModule),
/* harmony export */   "MatSpinner": () => (/* binding */ MatSpinner)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 21281);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ 83353);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ 67376);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ 94650);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 47873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 96921);











/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Base reference size of the spinner.
 * @docs-private
 */

function MatProgressSpinner__svg_circle_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 4);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("animation-name", "mat-progress-spinner-stroke-rotate-" + ctx_r1._spinnerAnimationLabel)("stroke-dashoffset", ctx_r1._getStrokeDashOffset(), "px")("stroke-dasharray", ctx_r1._getStrokeCircumference(), "px")("stroke-width", ctx_r1._getCircleStrokeWidth(), "%")("transform-origin", ctx_r1._getCircleTransformOrigin(_r0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r1._getCircleRadius());
  }
}

function MatProgressSpinner__svg_circle_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 4);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke-dashoffset", ctx_r2._getStrokeDashOffset(), "px")("stroke-dasharray", ctx_r2._getStrokeCircumference(), "px")("stroke-width", ctx_r2._getCircleStrokeWidth(), "%")("transform-origin", ctx_r2._getCircleTransformOrigin(_r0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r2._getCircleRadius());
  }
}

const BASE_SIZE = 100;
/**
 * Base reference stroke width of the spinner.
 * @docs-private
 */

const BASE_STROKE_WIDTH = 10; // Boilerplate for applying mixins to MatProgressSpinner.

/** @docs-private */

const _MatProgressSpinnerBase = /*#__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinColor)(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }

}, 'primary');
/** Injection token to be used to override the default options for `mat-progress-spinner`. */


const MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-progress-spinner-default-options', {
  providedIn: 'root',
  factory: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */

function MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY() {
  return {
    diameter: BASE_SIZE
  };
} // .0001 percentage difference is necessary in order to avoid unwanted animation frames
// for example because the animation duration is 4 seconds, .1% accounts to 4ms
// which are enough to see the flicker described in
// https://github.com/angular/components/issues/8984


const INDETERMINATE_ANIMATION_TEMPLATE = `
 @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {
    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }
    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }
    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }
    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }

    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }
    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }
    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }
    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }

    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }
    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }
    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }
    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }

    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }
    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }
    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }
    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }
  }
`;
/**
 * `<mat-progress-spinner>` component.
 */

class MatProgressSpinner extends _MatProgressSpinnerBase {
  constructor(elementRef, _platform, _document, animationMode, defaults,
  /**
   * @deprecated `changeDetectorRef`, `viewportRuler` and `ngZone`
   * parameters to become required.
   * @breaking-change 14.0.0
   */
  changeDetectorRef, viewportRuler, ngZone) {
    super(elementRef);
    this._document = _document;
    this._diameter = BASE_SIZE;
    this._value = 0;
    this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    /** Mode of the progress circle */

    this.mode = 'determinate';
    const trackedDiameters = MatProgressSpinner._diameters;
    this._spinnerAnimationLabel = this._getSpinnerAnimationLabel(); // The base size is already inserted via the component's structural styles. We still
    // need to track it so we don't end up adding the same styles again.

    if (!trackedDiameters.has(_document.head)) {
      trackedDiameters.set(_document.head, new Set([BASE_SIZE]));
    }

    this._noopAnimations = animationMode === 'NoopAnimations' && !!defaults && !defaults._forceAnimations;

    if (elementRef.nativeElement.nodeName.toLowerCase() === 'mat-spinner') {
      this.mode = 'indeterminate';
    }

    if (defaults) {
      if (defaults.color) {
        this.color = this.defaultColor = defaults.color;
      }

      if (defaults.diameter) {
        this.diameter = defaults.diameter;
      }

      if (defaults.strokeWidth) {
        this.strokeWidth = defaults.strokeWidth;
      }
    } // Safari has an issue where the circle isn't positioned correctly when the page has a
    // different zoom level from the default. This handler triggers a recalculation of the
    // `transform-origin` when the page zoom level changes.
    // See `_getCircleTransformOrigin` for more info.
    // @breaking-change 14.0.0 Remove null checks for `_changeDetectorRef`,
    // `viewportRuler` and `ngZone`.


    if (_platform.isBrowser && _platform.SAFARI && viewportRuler && changeDetectorRef && ngZone) {
      this._resizeSubscription = viewportRuler.change(150).subscribe(() => {
        // When the window is resize while the spinner is in `indeterminate` mode, we
        // have to mark for check so the transform origin of the circle can be recomputed.
        if (this.mode === 'indeterminate') {
          ngZone.run(() => changeDetectorRef.markForCheck());
        }
      });
    }
  }
  /** The diameter of the progress spinner (will set width and height of svg). */


  get diameter() {
    return this._diameter;
  }

  set diameter(size) {
    this._diameter = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(size);
    this._spinnerAnimationLabel = this._getSpinnerAnimationLabel(); // If this is set before `ngOnInit`, the style root may not have been resolved yet.

    if (this._styleRoot) {
      this._attachStyleNode();
    }
  }
  /** Stroke width of the progress spinner. */


  get strokeWidth() {
    return this._strokeWidth || this.diameter / 10;
  }

  set strokeWidth(value) {
    this._strokeWidth = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
  }
  /** Value of the progress circle. */


  get value() {
    return this.mode === 'determinate' ? this._value : 0;
  }

  set value(newValue) {
    this._value = Math.max(0, Math.min(100, (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(newValue)));
  }

  ngOnInit() {
    const element = this._elementRef.nativeElement; // Note that we need to look up the root node in ngOnInit, rather than the constructor, because
    // Angular seems to create the element outside the shadow root and then moves it inside, if the
    // node is inside an `ngIf` and a ShadowDom-encapsulated component.

    this._styleRoot = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__._getShadowRoot)(element) || this._document.head;

    this._attachStyleNode();

    element.classList.add('mat-progress-spinner-indeterminate-animation');
  }

  ngOnDestroy() {
    this._resizeSubscription.unsubscribe();
  }
  /** The radius of the spinner, adjusted for stroke width. */


  _getCircleRadius() {
    return (this.diameter - BASE_STROKE_WIDTH) / 2;
  }
  /** The view box of the spinner's svg element. */


  _getViewBox() {
    const viewBox = this._getCircleRadius() * 2 + this.strokeWidth;
    return `0 0 ${viewBox} ${viewBox}`;
  }
  /** The stroke circumference of the svg circle. */


  _getStrokeCircumference() {
    return 2 * Math.PI * this._getCircleRadius();
  }
  /** The dash offset of the svg circle. */


  _getStrokeDashOffset() {
    if (this.mode === 'determinate') {
      return this._getStrokeCircumference() * (100 - this._value) / 100;
    }

    return null;
  }
  /** Stroke width of the circle in percent. */


  _getCircleStrokeWidth() {
    return this.strokeWidth / this.diameter * 100;
  }
  /** Gets the `transform-origin` for the inner circle element. */


  _getCircleTransformOrigin(svg) {
    // Safari has an issue where the `transform-origin` doesn't work as expected when the page
    // has a different zoom level from the default. The problem appears to be that a zoom
    // is applied on the `svg` node itself. We can work around it by calculating the origin
    // based on the zoom level. On all other browsers the `currentScale` appears to always be 1.
    const scale = (svg.currentScale ?? 1) * 50;
    return `${scale}% ${scale}%`;
  }
  /** Dynamically generates a style tag containing the correct animation for this diameter. */


  _attachStyleNode() {
    const styleRoot = this._styleRoot;
    const currentDiameter = this._diameter;
    const diameters = MatProgressSpinner._diameters;
    let diametersForElement = diameters.get(styleRoot);

    if (!diametersForElement || !diametersForElement.has(currentDiameter)) {
      const styleTag = this._document.createElement('style');

      styleTag.setAttribute('mat-spinner-animation', this._spinnerAnimationLabel);
      styleTag.textContent = this._getAnimationText();
      styleRoot.appendChild(styleTag);

      if (!diametersForElement) {
        diametersForElement = new Set();
        diameters.set(styleRoot, diametersForElement);
      }

      diametersForElement.add(currentDiameter);
    }
  }
  /** Generates animation styles adjusted for the spinner's diameter. */


  _getAnimationText() {
    const strokeCircumference = this._getStrokeCircumference();

    return INDETERMINATE_ANIMATION_TEMPLATE // Animation should begin at 5% and end at 80%
    .replace(/START_VALUE/g, `${0.95 * strokeCircumference}`).replace(/END_VALUE/g, `${0.2 * strokeCircumference}`).replace(/DIAMETER/g, `${this._spinnerAnimationLabel}`);
  }
  /** Returns the circle diameter formatted for use with the animation-name CSS property. */


  _getSpinnerAnimationLabel() {
    // The string of a float point number will include a period ‘.’ character,
    // which is not valid for a CSS animation-name.
    return this.diameter.toString().replace('.', '_');
  }

}
/**
 * Tracks diameters of existing instances to de-dupe generated styles (default d = 100).
 * We need to keep track of which elements the diameters were attached to, because for
 * elements in the Shadow DOM the style tags are attached to the shadow root, rather
 * than the document head.
 */


MatProgressSpinner._diameters = /*#__PURE__*/new WeakMap();

MatProgressSpinner.ɵfac = function MatProgressSpinner_Factory(t) {
  return new (t || MatProgressSpinner)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

MatProgressSpinner.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatProgressSpinner,
  selectors: [["mat-progress-spinner"], ["mat-spinner"]],
  hostAttrs: ["role", "progressbar", "tabindex", "-1", 1, "mat-progress-spinner", "mat-spinner"],
  hostVars: 10,
  hostBindings: function MatProgressSpinner_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuemin", ctx.mode === "determinate" ? 0 : null)("aria-valuemax", ctx.mode === "determinate" ? 100 : null)("aria-valuenow", ctx.mode === "determinate" ? ctx.value : null)("mode", ctx.mode);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._noopAnimations);
    }
  },
  inputs: {
    color: "color",
    diameter: "diameter",
    strokeWidth: "strokeWidth",
    mode: "mode",
    value: "value"
  },
  exportAs: ["matProgressSpinner"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 8,
  consts: [["preserveAspectRatio", "xMidYMid meet", "focusable", "false", "aria-hidden", "true", 3, "ngSwitch"], ["svg", ""], ["cx", "50%", "cy", "50%", 3, "animation-name", "stroke-dashoffset", "stroke-dasharray", "stroke-width", "transform-origin", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%", 3, "stroke-dashoffset", "stroke-dasharray", "stroke-width", "transform-origin", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%"]],
  template: function MatProgressSpinner_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatProgressSpinner__svg_circle_2_Template, 1, 11, "circle", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatProgressSpinner__svg_circle_3_Template, 1, 9, "circle", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mode === "indeterminate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx._getViewBox());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchCase],
  styles: [".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:rgba(0,0,0,0);transition:stroke-dashoffset 225ms linear}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}.mat-progress-spinner[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}.mat-progress-spinner._mat-animation-noopable svg,.mat-progress-spinner._mat-animation-noopable circle{animation:none;transition:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}"],
  encapsulation: 2,
  changeDetection: 0
});

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


let MatProgressSpinnerModule = /*#__PURE__*/(() => {
  class MatProgressSpinnerModule {}

  MatProgressSpinnerModule.ɵfac = function MatProgressSpinnerModule_Factory(t) {
    return new (t || MatProgressSpinnerModule)();
  };

  MatProgressSpinnerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatProgressSpinnerModule
  });
  MatProgressSpinnerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule]
  });
  return MatProgressSpinnerModule;
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
 * @deprecated Import `MatProgressSpinner` instead. Note that the
 *    `mat-spinner` selector isn't deprecated.
 * @breaking-change 8.0.0
 */
// tslint:disable-next-line:variable-name


const MatSpinner = MatProgressSpinner;
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

 //# sourceMappingURL=progress-spinner.mjs.map

/***/ })

}]);