"use strict";
(self["webpackChunktracker"] = self["webpackChunktracker"] || []).push([[674],{

/***/ 40431:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _guest_user_verify_user_verify_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guest/user-verify/user-verify.component */ 63597);
/* harmony import */ var _guest_verify_your_mail_verify_your_mail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../guest/verify-your-mail/verify-your-mail.component */ 57932);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ 13866);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 78146);
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reset-password/reset-password.component */ 88310);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ 64309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);









const routes = [{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent
}, {
  path: 'signup',
  component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__.SignupComponent
}, {
  path: 'forgot-password',
  component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__.ForgotPasswordComponent
}, {
  path: 'reset-password/:id',
  component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__.ResetPasswordComponent
}, {
  path: 'verify-user/:token',
  component: _guest_user_verify_user_verify_component__WEBPACK_IMPORTED_MODULE_0__.UserVerifyComponent
}, {
  path: 'verify-your-mail',
  component: _guest_verify_your_mail_verify_your_mail_component__WEBPACK_IMPORTED_MODULE_1__.VerifyYourMailComponent
}];
let AuthRoutingModule = /*#__PURE__*/(() => {
  class AuthRoutingModule {}

  AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) {
    return new (t || AuthRoutingModule)();
  };

  AuthRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AuthRoutingModule
  });
  AuthRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
  return AuthRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 71674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 40431);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 78146);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/signup.component */ 64309);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ 13866);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 97392);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ 56709);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-password/reset-password.component */ 88310);
/* harmony import */ var _guest_user_verify_user_verify_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../guest/user-verify/user-verify.component */ 63597);
/* harmony import */ var _guest_verify_your_mail_verify_your_mail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../guest/verify-your-mail/verify-your-mail.component */ 57932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 94650);





 // material imports










let AuthModule = /*#__PURE__*/(() => {
  class AuthModule {}

  AuthModule.ɵfac = function AuthModule_Factory(t) {
    return new (t || AuthModule)();
  };

  AuthModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: AuthModule
  });
  AuthModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
  });
  return AuthModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__.SignupComponent, _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__.ForgotPasswordComponent, _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__.ResetPasswordComponent, _guest_user_verify_user_verify_component__WEBPACK_IMPORTED_MODULE_6__.UserVerifyComponent, _guest_verify_your_mail_verify_your_mail_component__WEBPACK_IMPORTED_MODULE_7__.VerifyYourMailComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
  });
})();

/***/ }),

/***/ 13866:
/*!*******************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/auth.service */ 90263);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 284);










const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};

const _c1 = function () {
  return ["/auth/login"];
};

let ForgotPasswordComponent = /*#__PURE__*/(() => {
  class ForgotPasswordComponent {
    constructor(formBuilder, masterService, authService, router) {
      this.formBuilder = formBuilder;
      this.masterService = masterService;
      this.authService = authService;
      this.router = router;
      this.isFormSubmitted = false;
    }

    ngOnInit() {
      this.forgotPasswordForm = this.formBuilder.group({
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]]
      });
    }

    get forgotPasswordFormVal() {
      return this.forgotPasswordForm.controls;
    }

    sendlink() {
      this.isFormSubmitted = true;

      if (this.forgotPasswordForm.invalid) {
        for (const i in this.forgotPasswordForm.controls) {
          this.forgotPasswordForm.controls[i].markAsDirty();
          this.forgotPasswordForm.controls[i].updateValueAndValidity();
        }

        return;
      }

      this.authService.ForgotPassword(this.forgotPasswordForm.value).subscribe(response => {
        if (response && response.ReturnCode == 200 && response.err == 0) {
          this.masterService.hideSppiner();
          this.masterService.showSuccess(response.ReturnMsg, 'Success');
        } else {
          this.masterService.showError(response.ReturnMsg, 'Error');
        }
      }, error => {
        this.masterService.hideSppiner();
        this.masterService.showError(error.error.ReturnMsg, 'Error');
      });
    }

    backToSignin() {
      this.router.navigate(['auth/sign-in']);
    }

  }

  ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
    return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_0__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };

  ForgotPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ForgotPasswordComponent,
    selectors: [["app-forgot-password"]],
    decls: 24,
    vars: 6,
    consts: [[1, "main_login_wrap"], [1, "login_wrap_inner"], [1, "login_box", "forgot_password_box"], [1, "forgot_pass_logo", "w-100"], ["src", "../../../assets/images/logo.svg", "alt", ""], [1, "w-100"], [1, "title"], [1, "forgot_form_wrap"], [3, "formGroup"], ["for", "email"], ["appearance", "fill", 3, "ngClass"], ["type", "email", "id", "email", "formControlName", "email", "matInput", "", "placeholder", "Enter a email"], [1, "text-center", "mt-5", "mb-4"], [1, "btn_dark", 3, "click"], [1, "create_account"], [3, "routerLink"], [1, "text_gradient"]],
    template: function ForgotPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5)(6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Forgot Your Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7)(9, "form", 8)(10, "div")(11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Email*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Enter valid email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12)(18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_18_listener() {
          return ctx.sendlink();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Send Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 14)(21, "p", 15)(22, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Back to Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.forgotPasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx.isFormSubmitted && (ctx.forgotPasswordFormVal["email"] == null ? null : ctx.forgotPasswordFormVal["email"].errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c1));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput]
  });
  return ForgotPasswordComponent;
})();

/***/ }),

/***/ 78146:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/auth.service */ 90263);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 97392);












function LoginComponent_mat_error_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Enter Valid Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};

const _c1 = function () {
  return ["/auth/forgot-password"];
};

let LoginComponent = /*#__PURE__*/(() => {
  class LoginComponent {
    constructor(formBuilder, authService, masterService, router) {
      this.formBuilder = formBuilder;
      this.authService = authService;
      this.masterService = masterService;
      this.router = router;
      this.isLoginFormSubmitted = false;
      this.hide = true;
    }

    ngOnInit() {
      if (localStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dataKey)) {
        let userData = this.masterService.GetLoginUser();

        if (userData != undefined) {
          if (userData['Userdata'].organization && userData['Userdata'].organization.length > 0) {
            this.router.navigate(['dashboard']);
          } else {
            this.router.navigate(['guest/get-started']);
          }
        } else {
          this.router.navigate(['/auth/login']);
        }
      }

      this.loginForm = this.formBuilder.group({
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
      });
    }

    get loginFormVal() {
      return this.loginForm.controls;
    }

    submitLoginForm() {
      this.isLoginFormSubmitted = true;

      if (this.loginForm.invalid) {
        for (const i in this.loginForm.controls) {
          this.loginForm.controls[i].markAsDirty();
          this.loginForm.controls[i].updateValueAndValidity();
        }

        return;
      }

      this.masterService.showSpppiner();
      this.authService.Login(this.loginForm.value).subscribe(response => {
        if (response && response.ReturnCode == 200 && response.err == 0) {
          if (response.Data) {
            const decodeData = this.authService.getDecodeAccessToken(response.Data.Token);
            console.log('login res', response.Data);
            localStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dataKey, btoa(JSON.stringify(response.Data, response.Data.Token)));
            this.masterService.hideSppiner();
            this.masterService.showSuccess(response.ReturnMsg, 'Success');

            if (response.Data.Userdata.organization && response.Data.Userdata.organization.length > 0) {
              this.router.navigate(['dashboard']);
            } else {
              this.router.navigate(['guest/get-started']);
            }
          }
        } else {
          this.masterService.hideSppiner();
          this.masterService.showError(response.ReturnMsg, 'Error');
        }
      }, error => {
        this.masterService.showError(error.error.ReturnMsg, 'Error');
        this.masterService.hideSppiner();
      });
    }

    createNewAccount() {
      this.router.navigate(['/auth/signup']);
    }

  }

  LoginComponent.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_2__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };

  LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 33,
    vars: 14,
    consts: [[1, "main_login_wrap"], [1, "login_wrap_inner"], [1, "login_box"], [1, "title"], ["autocomplete", "off", 3, "formGroup"], ["for", "email"], ["appearance", "fill", 1, "form-field-style", "w-100", 3, "ngClass"], ["matInput", "", "type", "email", "id", "email", "formControlName", "email", "placeholder", "Enter a email", "tabindex", "1"], ["for", "password"], ["id", "password", "matInput", "", "formControlName", "password", "placeholder", "Password", "tabindex", "2", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [4, "ngIf"], [1, "forgot_password", 3, "routerLink"], [1, "text-center", "mb-4"], ["type", "submit", "tabindex", "3", 1, "btn_dark", 3, "click"], [1, "create_account"], [1, "text_gradient", 3, "click"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div")(6, "form", 4)(7, "div")(8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Email*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Enter Valid Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div")(15, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Password*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_19_listener() {
          return ctx.hide = !ctx.hide;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, LoginComponent_mat_error_22_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Forgot Your Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 13)(26, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_26_listener() {
          return ctx.submitLoginForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 15)(29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_31_listener() {
          return ctx.createNewAccount();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, ctx.isLoginFormSubmitted && (ctx.loginFormVal["email"] == null ? null : ctx.loginFormVal["email"].errors == null ? null : ctx.loginFormVal["email"].errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c0, ctx.isLoginFormSubmitted && (ctx.loginFormVal["password"] == null ? null : ctx.loginFormVal["password"].errors == null ? null : ctx.loginFormVal["password"].errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginFormVal["password"] == null ? null : ctx.loginFormVal["password"].errors == null ? null : ctx.loginFormVal["password"].errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c1));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon]
  });
  return LoginComponent;
})();

/***/ }),

/***/ 88310:
/*!*****************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/auth.service */ 90263);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 97392);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/loader/loader.component */ 89047);












function ResetPasswordComponent_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Enter Valid Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};

const _c1 = function () {
  return ["/auth/login"];
};

let ResetPasswordComponent = /*#__PURE__*/(() => {
  class ResetPasswordComponent {
    constructor(formBuilder, masterService, authService, router, activatedRoute) {
      this.formBuilder = formBuilder;
      this.masterService = masterService;
      this.authService = authService;
      this.router = router;
      this.activatedRoute = activatedRoute;
      this.isResetPasswordFormSubmitted = false;
      this.passwordHide = true;
      this.confirmPassword = true;
    }

    ngOnInit() {
      this.resetPasswordForm = this.formBuilder.group({
        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        confirmpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        token: ['']
      });
      this.activatedRoute.paramMap.subscribe(params => {
        const token = params.get('id');

        if (token) {
          this.resetPasswordForm.patchValue({
            token: token
          });
        }
      });
    }

    get resetPasswordFormVal() {
      return this.resetPasswordForm.controls;
    }

    resetPassword() {
      this.isResetPasswordFormSubmitted = true;

      if (this.resetPasswordForm.invalid) {
        for (const i in this.resetPasswordForm.controls) {
          this.resetPasswordForm.controls[i].markAsDirty();
          this.resetPasswordForm.controls[i].updateValueAndValidity();
        }

        return;
      }

      this.masterService.showSpppiner();

      if (this.ConfirmedValidator('password', 'confirmpassword')) {
        this.authService.ResetPassword(this.resetPasswordForm.value).subscribe(response => {
          if (response && response.ReturnCode == 200 && response.err == 0) {
            this.masterService.hideSppiner();
            this.masterService.showSuccess(response.ReturnMsg, "Success");
            this.router.navigate(['/auth/login']);
          } else {
            this.masterService.showError(response.ReturnMsg, "Error");
          }
        }, error => {
          this.masterService.hideSppiner();
          this.masterService.showError(error.error.ReturnMsg, "Error");
        });
      } else {
        this.masterService.showError('Password and Confirm Password must be match.', "Error");
        this.masterService.hideSppiner();
      }
    }

    ConfirmedValidator(controlName, matchingControlName) {
      const password = this.resetPasswordForm.controls[controlName];
      const confirmpassword = this.resetPasswordForm.controls[matchingControlName];

      if (password.value == confirmpassword.value) {
        return true;
      } else {
        return false;
      }
    }

  }

  ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) {
    return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_0__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
  };

  ResetPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ResetPasswordComponent,
    selectors: [["app-reset-password"]],
    decls: 35,
    vars: 18,
    consts: [[1, "main_login_wrap"], [1, "login_wrap_inner"], [1, "login_box"], [1, "title"], ["autocomplete", "off", "id", "resetPasswordForm", 3, "formGroup"], ["for", "password"], ["appearance", "fill", 3, "ngClass"], ["id", "password", "matInput", "", "formControlName", "password", "placeholder", "Enter a password", "tabindex", " 2", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [4, "ngIf"], [1, "mb-2"], ["for", "confirmpassword"], ["matInput", "", "formControlName", "confirmpassword", "placeholder", "Enter a confirm password", "id", "confirmpassword", 3, "type"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "text-center", "mb-4"], ["type", "submit", 1, "btn_dark", 3, "click"], [1, "create_account"], [1, "text_gradient", 3, "routerLink"]],
    template: function ResetPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div")(7, "form", 4)(8, "div")(9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "New Password*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_13_listener() {
          return ctx.passwordHide = !ctx.passwordHide;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ResetPasswordComponent_mat_error_16_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 10)(18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Confirm Password*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_22_listener() {
          return ctx.confirmPassword = !ctx.confirmPassword;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Enter Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 14)(28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_28_listener() {
          return ctx.resetPassword();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 16)(31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.resetPasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c0, ctx.isResetPasswordFormSubmitted && (ctx.resetPasswordFormVal["password"] == null ? null : ctx.resetPasswordFormVal["password"].errors == null ? null : ctx.resetPasswordFormVal["password"].errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.passwordHide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.passwordHide);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.passwordHide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.resetPasswordFormVal["password"] == null ? null : ctx.resetPasswordFormVal["password"].errors == null ? null : ctx.resetPasswordFormVal["password"].errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](15, _c0, ctx.isResetPasswordFormSubmitted && (ctx.resetPasswordFormVal == null ? null : ctx.resetPasswordFormVal.confirmpassword == null ? null : ctx.resetPasswordFormVal.confirmpassword.errors)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.confirmPassword ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.confirmPassword ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](17, _c1));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent]
  });
  return ResetPasswordComponent;
})();

/***/ }),

/***/ 64309:
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ 90263);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 97392);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 56709);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/loader/loader.component */ 89047);














function SignupComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Enter Valid name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function SignupComponent_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Enter Valid Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};

const _c1 = function () {
  return ["/auth/login"];
};

let SignupComponent = /*#__PURE__*/(() => {
  class SignupComponent {
    constructor(formBuilder, masterService, authService, router) {
      this.formBuilder = formBuilder;
      this.masterService = masterService;
      this.authService = authService;
      this.router = router;
      this.isSignUpFormSubmitted = false;
      this.hide = true;
    }

    ngOnInit() {
      this.signUpForm = this.formBuilder.group({
        name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        url: ['']
      });
      this.signUpForm.patchValue({
        url: window.location.origin
      });
    }

    get signUpFormVal() {
      return this.signUpForm.controls;
    }

    createAccount() {
      this.isSignUpFormSubmitted = true;

      if (this.signUpForm.invalid) {
        for (const i in this.signUpForm.controls) {
          this.signUpForm.controls[i].markAsDirty();
          this.signUpForm.controls[i].updateValueAndValidity();
        }

        return;
      }

      this.masterService.showSpppiner();
      this.authService.SignUp(this.signUpForm.value).subscribe(response => {
        if (response && response.ReturnCode == 200 && response.err == 0) {
          const decodeData = this.authService.getDecodeAccessToken(response.Data.Token);
          localStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dataKey, btoa(JSON.stringify(response.Data, response.Data.Token)));
          this.masterService.hideSppiner();
          this.masterService.showSuccess(response.ReturnMsg, 'Success');
          this.router.navigate(['auth/verify-your-mail']);
        } else {
          this.masterService.showError(response.ReturnMsg, 'Error');
          this.masterService.hideSppiner();
        }
      }, error => {
        this.masterService.showError(error.error.ReturnMsg, 'Error');
        this.masterService.hideSppiner();
      });
    }

  }

  SignupComponent.ɵfac = function SignupComponent_Factory(t) {
    return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_1__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };

  SignupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SignupComponent,
    selectors: [["app-signup"]],
    decls: 41,
    vars: 18,
    consts: [[1, "main_login_wrap"], [1, "login_wrap_inner"], [1, "login_box"], [1, "title"], ["autocomplete", "off", "id", "signUpForm", 3, "formGroup"], ["for", "name"], ["appearance", "fill", 3, "ngClass"], ["type", "text", "id", "name", "formControlName", "name", "matInput", "", "placeholder", "Enter a name", "tabindex", "1"], [4, "ngIf"], ["for", "email"], ["matInput", "", "type", "email", "id", "email", "formControlName", "email", "placeholder", "Enter a email", "tabindex", "2"], ["for", "password"], ["id", "password", "matInput", "", "formControlName", "password", "placeholder", "Enter a password", "tabindex", "3", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "remember_me"], ["id", "rememberMe"], [1, "text-center", "mb-4"], ["type", "submit", "tabindex", "4", 1, "btn_dark", 3, "click"], [1, "create_account"], [1, "text_gradient", 3, "routerLink"]],
    template: function SignupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div")(7, "form", 4)(8, "div")(9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Full Name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, SignupComponent_mat_error_13_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div")(15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Email*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Enter Valid Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div")(22, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Password*");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_26_listener() {
          return ctx.hide = !ctx.hide;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, SignupComponent_mat_error_29_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 14)(31, "mat-checkbox", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Remember Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 16)(34, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_34_listener() {
          return ctx.createAccount();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Create My Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 18)(37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.signUpForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c0, ctx.isSignUpFormSubmitted && (ctx.signUpFormVal["name"] == null ? null : ctx.signUpFormVal["name"].errors == null ? null : ctx.signUpFormVal["name"].errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.signUpFormVal["name"] == null ? null : ctx.signUpFormVal["name"].errors == null ? null : ctx.signUpFormVal["name"].errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c0, ctx.isSignUpFormSubmitted && (ctx.signUpFormVal["email"] == null ? null : ctx.signUpFormVal["email"].errors == null ? null : ctx.signUpFormVal["email"].errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c0, ctx.isSignUpFormSubmitted && (ctx.signUpFormVal["password"] == null ? null : ctx.signUpFormVal["password"].errors == null ? null : ctx.signUpFormVal["password"].errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.signUpFormVal["password"] == null ? null : ctx.signUpFormVal["password"].errors == null ? null : ctx.signUpFormVal["password"].errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](17, _c1));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckbox, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__.LoaderComponent]
  });
  return SignupComponent;
})();

/***/ }),

/***/ 63597:
/*!************************************************************!*\
  !*** ./src/app/guest/user-verify/user-verify.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserVerifyComponent": () => (/* binding */ UserVerifyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/auth.service */ 90263);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);




let UserVerifyComponent = /*#__PURE__*/(() => {
  class UserVerifyComponent {
    constructor(activatedRoute, router, authService, masterService) {
      this.activatedRoute = activatedRoute;
      this.router = router;
      this.authService = authService;
      this.masterService = masterService;
      this.userVerify = false;
      this.userToken = '';
    }

    ngOnInit() {
      this.userToken = this.activatedRoute.snapshot.params['token'];
      const decodeData = this.authService.getDecodeAccessToken(this.userToken);
      this.org_name = decodeData.org_name;
    }

    nextPage() {
      this.verifyUser(this.userToken);
    }

    verifyUser(userToken) {
      if (userToken) {
        this.authService.VerifyUser(userToken).subscribe(response => {
          if (response && response.ReturnCode == 200 && response.err == 0) {
            const decodeData = this.authService.getDecodeAccessToken(response.Data.token); // response.Data[0]['Userdata'] = response.Data[0];
            // localStorage.setItem(environment.dataKey, btoa(JSON.stringify(response.Data[0], response.Data[0].token)))

            this.router.navigate(['/guest/get-started']);
            this.masterService.showSuccess(response.ReturnMsg, 'Success');
          } else {
            this.router.navigate(['/auth/login']);
            this.masterService.showError(response.ReturnMsg, 'Error');
          }
        }, error => {
          this.router.navigate(['/auth/login']);
          this.masterService.showError(error.error.ReturnMsg, 'Error');
        });
      } else {
        this.router.navigate(['/auth/login']);
      }
    }

  }

  UserVerifyComponent.ɵfac = function UserVerifyComponent_Factory(t) {
    return new (t || UserVerifyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_1__.MasterService));
  };

  UserVerifyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: UserVerifyComponent,
    selectors: [["app-user-verify"]],
    decls: 10,
    vars: 1,
    consts: [[1, "container"], [1, "row"], [1, "col", "text-center"], ["type", "button", 1, "btn_blue", 3, "click"]],
    template: function UserVerifyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Accept the invite to join this organization in Hubstaff.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div")(8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserVerifyComponent_Template_button_click_8_listener() {
          return ctx.nextPage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Accept invite");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("You've been invited to join ", ctx.org_name, "");
      }
    }
  });
  return UserVerifyComponent;
})();

/***/ }),

/***/ 57932:
/*!**********************************************************************!*\
  !*** ./src/app/guest/verify-your-mail/verify-your-mail.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyYourMailComponent": () => (/* binding */ VerifyYourMailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);



let VerifyYourMailComponent = /*#__PURE__*/(() => {
  class VerifyYourMailComponent {
    constructor(router, masterService) {
      this.router = router;
      this.masterService = masterService;
      this.userData = {};
    }

    ngOnInit() {
      let user = this.masterService.GetLoginUser();

      if (user) {
        this.userData = user.Userdata;
      } else {
        this.router.navigate(['/auth/login']);
      }
    }

  }

  VerifyYourMailComponent.ɵfac = function VerifyYourMailComponent_Factory(t) {
    return new (t || VerifyYourMailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_0__.MasterService));
  };

  VerifyYourMailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: VerifyYourMailComponent,
    selectors: [["app-verify-your-mail"]],
    decls: 26,
    vars: 1,
    consts: [[1, "step_wrapper"], [1, "shape_left_top"], ["src", "../../../assets/images/background/pattern1.svg", "alt", ""], [1, "shape_right_top"], ["src", "../../../assets/images/background/pattern2.svg", "alt", ""], [1, "shape_left_bottom"], [1, "shape_right_bottom"], [1, "step_wrap_box"], [1, "step_title"], [1, "title"], [1, "email_icon", "mb-3"], ["src", "../../../assets/images/email.png", "alt", ""], [1, "request_wrap"], [1, "create_account"], [1, "text_gradient"]],
    template: function VerifyYourMailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Verify your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12)(16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "You're in. An email has been sent to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " . Hit confirm and you'll be ready to start working.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13)(22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Didn\u2019t see an email? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Resend it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.userData.email);
      }
    },
    styles: [".request_wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: var(--dark-blue);\r\n}\r\n\r\n.request_wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}"]
  });
  return VerifyYourMailComponent;
})();

/***/ })

}]);