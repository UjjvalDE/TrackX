"use strict";
(self["webpackChunktracker"] = self["webpackChunktracker"] || []).push([[592],{

/***/ 6665:
/*!******************************************************************************!*\
  !*** ./src/app/guest/user-register-verify/user-register-verify.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRegisterVerifyComponent": () => (/* binding */ UserRegisterVerifyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/auth.service */ 90263);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);




let UserRegisterVerifyComponent = /*#__PURE__*/(() => {
  class UserRegisterVerifyComponent {
    constructor(activatedRoute, router, authService, masterService) {
      this.activatedRoute = activatedRoute;
      this.router = router;
      this.authService = authService;
      this.masterService = masterService;
    }

    ngOnInit() {
      let userToken = this.activatedRoute.snapshot.params['token'];
      this.verifyUser(userToken);
    }

    verifyUser(userToken) {
      if (userToken) {
        this.authService.VerifyEmailRegister(userToken).subscribe(response => {
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

  UserRegisterVerifyComponent.ɵfac = function UserRegisterVerifyComponent_Factory(t) {
    return new (t || UserRegisterVerifyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_1__.MasterService));
  };

  UserRegisterVerifyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: UserRegisterVerifyComponent,
    selectors: [["app-user-register-verify"]],
    decls: 0,
    vars: 0,
    template: function UserRegisterVerifyComponent_Template(rf, ctx) {}
  });
  return UserRegisterVerifyComponent;
})();

/***/ })

}]);