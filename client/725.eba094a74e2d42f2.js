"use strict";
(self["webpackChunktracker"] = self["webpackChunktracker"] || []).push([[725],{

/***/ 44586:
/*!***********************************************************!*\
  !*** ./src/app/pages/people/members/members.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MembersComponent": () => (/* binding */ MembersComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_model_table_header_data_people__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/people */ 21463);
/* harmony import */ var src_app_shared_pop_up_model_confirmation_model_confirmation_model_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/confirmation-model/confirmation-model.component */ 59925);
/* harmony import */ var src_app_shared_pop_up_model_invite_team_member_model_invite_team_member_model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pop-up-model/invite-team-member-model/invite-team-member-model.component */ 47483);
/* harmony import */ var src_app_shared_pop_up_model_onboarding_status_model_onboarding_status_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pop-up-model/onboarding-status-model/onboarding-status-model.component */ 70512);
/* harmony import */ var src_app_shared_pop_up_model_edit_member_model_edit_member_model_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/pop-up-model/edit-member-model/edit-member-model.component */ 17325);
/* harmony import */ var src_app_shared_pop_up_model_edit_invite_edit_invite_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/pop-up-model/edit-invite/edit-invite.component */ 96051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var src_app_core_services_organization_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/organization.service */ 14261);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var src_app_core_services_people_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/people.service */ 85804);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/dynamic-table/dynamic-table.component */ 57834);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/loader/loader.component */ 89047);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 47873);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 97392);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ 28255);























function MembersComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Batch Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-menu", null, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MembersComponent_div_12_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r5.BatchAction("disableTimeTrack"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Disable time tracking");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MembersComponent_div_12_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r7.BatchAction("removeMember"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "Remove member");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](4);

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matMenuTriggerFor", _r4);
  }
}

function MembersComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 11)(1, "mat-form-field", 24)(2, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function MembersComponent_div_16_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r8.name = $event);
    })("keyup", function MembersComponent_div_16_Template_input_keyup_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r10.memberSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 26)(4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r1.name);
  }
}

function MembersComponent_div_17_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const role_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", role_r12.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", role_r12.role, " ");
  }
}

function MembersComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 11)(1, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-form-field", 24)(4, "mat-select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function MembersComponent_div_17_Template_mat_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r13.role = $event);
    })("selectionChange", function MembersComponent_div_17_Template_mat_select_selectionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r15.memberSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "All Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, MembersComponent_div_17_mat_option_7_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r2.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r2.roleArray);
  }
}

function MembersComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 11)(1, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Time Tracking");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "mat-form-field", 24)(4, "mat-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function MembersComponent_div_18_Template_mat_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r16.time_track = $event);
    })("selectionChange", function MembersComponent_div_18_Template_mat_select_selectionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r18.memberSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Enabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r3.time_track);
  }
}

let MembersComponent = /*#__PURE__*/(() => {
  class MembersComponent {
    constructor(matDialog, organizationService, masterService, activatedRoute, peopleService) {
      this.matDialog = matDialog;
      this.organizationService = organizationService;
      this.masterService = masterService;
      this.activatedRoute = activatedRoute;
      this.peopleService = peopleService;
      this.name = '';
      this.role = '';
      this.time_track = '';
      this.membersTab = true;
      this.organizationDetails = {};
      this.membersListResponse = {};
      this.invitesListResponse = {};
      this.selectedMember = {};
      this.membersListArray = [];
      this.invitesListArray = [];
      this.selectedCheckBox = [];
      this.roleArray = [{
        value: 1,
        role: 'Organization Owner'
      }, {
        value: 2,
        role: 'Organization Manager'
      }, {
        value: 3,
        role: 'Project Manager'
      }, {
        value: 4,
        role: 'User'
      }, {
        value: 5,
        role: 'Project Viewer'
      }, {
        value: 5,
        role: 'Multiple Project Roles'
      }];
      this.membersTableCols = src_app_core_model_table_header_data_people__WEBPACK_IMPORTED_MODULE_0__.membersTable;
      this.memberActionMenu = src_app_core_model_table_header_data_people__WEBPACK_IMPORTED_MODULE_0__.memberActionMenu;
      this.invitesActionMenu = src_app_core_model_table_header_data_people__WEBPACK_IMPORTED_MODULE_0__.invitesActionMenus;
      this.invitesTableCols = src_app_core_model_table_header_data_people__WEBPACK_IMPORTED_MODULE_0__.invitesTable;
      this.start = 1;
      this.limit = 25;
      this.totalRecords = 0;
      this.filterData = {
        name: '',
        time_track: '',
        role: '',
        status: true
      };
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.GetMember();
      this.activatedRoute.queryParams.subscribe(params => {
        const invite = params['invite'];

        if (invite) {
          this.InviteMember();
        }
      });
    }

    GetMember() {
      this.membersListArray = [];
      this.masterService.showSpppiner();
      this.organizationService.GetOrganizationMember(this.organizationDetails['_id'], this.start, this.limit, this.filterData).subscribe(response => {
        if (response && response.ReturnCode == 200 && response.err == 0) {
          this.membersListResponse = response;

          if (this.membersListResponse && this.membersListResponse['Data'].list.length > 0) {
            this.membersListArray = [];
            this.membersListResponse['Data'].list.forEach(element => {
              this.membersListArray.push({ ...element,
                table: 'members'
              });
              if (element.status) element.status = "Active";else element.status = "Removed";
            });
            this.totalRecords = this.membersListResponse['Data'].count;
            this.masterService.hideSppiner();
          } else {
            this.totalRecords = 0;
            this.masterService.hideSppiner();
          }
        } else {
          this.totalRecords = 0;
          this.masterService.hideSppiner();
        }
      }, error => {
        this.masterService.hideSppiner();
        this.masterService.showError(error.error.ReturnMsg, 'Error');
      });
    }

    GetInvites() {
      this.masterService.showSpppiner();
      this.invitesListArray = [];
      let data = {
        status: false
      };
      this.organizationService.GetOrganizationMember(this.organizationDetails['_id'], this.start, this.limit, data).subscribe(response => {
        if (response && response.ReturnCode == 200 && response.err == 0) {
          this.invitesListResponse = response;

          if (this.invitesListResponse && this.invitesListResponse['Data'].list.length > 0) {
            this.totalRecords = this.invitesListResponse['Data'].count;
            this.invitesListResponse['Data'].list.forEach(element => {
              this.invitesListArray.push({ ...element,
                status: 'Pending',
                table: 'invites'
              });
            });
            this.masterService.hideSppiner(); // this.invitesListArray = this.invitesListResponse['Data'];
          } else {
            this.totalRecords = 0;
            this.masterService.hideSppiner();
          }
        } else {
          this.totalRecords = 0;
          this.masterService.hideSppiner();
        }
      }, error => {
        this.masterService.hideSppiner();
        this.masterService.showError(error.error.ReturnMsg, 'Error');
      });
    }

    TabChange(type) {
      if (type == 'members') {
        this.membersTab = true;
        this.GetMember();
      } else {
        this.membersTab = false;
        this.GetInvites();
      }
    }

    TdClickEvent(event) {
      if (event.event == 'disableTracking') {
        this.OnChangeTimeTracking(event);
      } else if (event.event == 'removeMember') {
        let userId = [];
        userId.push(event.element.user_id);
        this.removeMember(userId);
      } else if (event.event == 'editMember') {
        this.OnUpdateMember(event.element);
      } else if (event.event == 'editInvites') {
        this.OnUpdateInvite(event);
      } else if (event.event == 'resendInvites') {
        this.ResendInvites(event.element);
      } else if (event.event == 'deleteInvites') {
        this.DeleteInvites(event.element);
      } else if (event.event == 'enableTracking') {
        this.OnChangeTimeTracking(event);
      } else if (event.event == 'checkBoxChecked') {
        this.checkBoxEvent(event);
      } else if (event.event == "allCheckBoxSelected") {
        this.allCheckBoxSelected(event);
      }
    } // method call on header checkbox selected


    allCheckBoxSelected(event) {
      this.selectedCheckBox = [];

      if (event.checked == 'true') {
        this.membersListArray.forEach((member, i) => {
          if (member.status) this.selectedCheckBox.push(member.user_id);
        });
      } else {
        this.selectedCheckBox = [];
      }
    } // method call on row checkbox selected


    checkBoxEvent(event) {
      if (event.checked == 'true') {
        if (event.element.user_id) {
          this.selectedCheckBox.push(event.element.user_id);
        }
      } else {
        if (this.selectedCheckBox.length > 0) {
          this.selectedCheckBox.forEach((id, i) => {
            if (id == event.element.user_id.toString()) {
              this.selectedCheckBox.splice(i, 1);
            }
          });
        }
      }
    }

    BatchAction(action) {
      if (this.selectedCheckBox.length > 0) {
        if (action == "disableTimeTrack") {} else if (action == "removeMember") {
          this.removeMember(this.selectedCheckBox);
        }
      }
    }

    OnChangeTimeTracking(event) {
      let data = JSON.parse(JSON.stringify(event.element)); // data['projects'] = data['projects'].length > 0 ? data['projects'] : [];
      // data['teams'] = data['teams'].length > 0 ? data['teams'] : [];

      if (event.event == 'enableTracking') {
        data['time_track'] = true;
      } else {
        data['time_track'] = false;
      }

      let user = [];
      user.push(data.user_id);
      data['userId'] = user;
      this.masterService.showSpppiner();
      this.organizationService.UpdateMember(this.organizationDetails['_id'], data).subscribe(response => {
        if (response && response.ReturnCode == 200 && response.err == 0) {
          this.GetMember();
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

    OnUpdateMember(memberData) {
      const editMemberDialog = this.matDialog.open(src_app_shared_pop_up_model_edit_member_model_edit_member_model_component__WEBPACK_IMPORTED_MODULE_4__.EditMemberModelComponent, {
        width: '700px',
        data: memberData
      });
      editMemberDialog.afterClosed().subscribe(result => {
        if (result) {
          this.GetMember();
        }
      });
    }

    DeleteInvites(event) {
      const confirmationDialog = this.matDialog.open(src_app_shared_pop_up_model_confirmation_model_confirmation_model_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationModelComponent, {
        data: {
          message: 'Are sure want to delete this invite?'
        }
      });
      confirmationDialog.afterClosed().subscribe(result => {
        if (result == true) {
          this.organizationService.DeleteInvitesMember(event._id).subscribe(response => {
            if (response && response.ReturnCode == 200 && response.err == 0) {
              this.GetInvites();
              this.masterService.showSuccess(response.ReturnMsg, 'Success');
            } else {
              this.masterService.showError(response.ReturnMsg, 'Error');
            }
          }, error => {
            this.masterService.showError(error.error.ReturnMsg, 'Error');
          });
        }
      });
    }

    ResendInvites(event) {
      this.masterService.showSpppiner();
      let body = {
        url: window.location.origin
      };
      this.organizationService.ResendInvites(event._id, body).subscribe(response => {
        if (response && response.ReturnCode == 200 && response.err == 0) {
          this.masterService.hideSppiner();
          this.GetInvites();
          this.masterService.showSuccess(response.ReturnMsg, 'Success');
        } else {
          this.masterService.hideSppiner();
          this.masterService.showError(response.ReturnMsg, 'Error');
        }
      }, error => {
        this.masterService.showError(error.error.ReturnMsg, 'Error');
        this.masterService.hideSppiner();
      });
    } // removw member method


    removeMember(data) {
      const confirmationDialog = this.matDialog.open(src_app_shared_pop_up_model_confirmation_model_confirmation_model_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationModelComponent, {
        data: {
          message: 'Are sure want to remove this member?'
        }
      });
      confirmationDialog.afterClosed().subscribe(result => {
        if (result) {
          let Data = {
            userId: data
          };
          this.organizationService.LeaveOrganization(this.organizationDetails['_id'], Data).subscribe(response => {
            if (response && response.ReturnCode == 200) {
              this.GetMember();
              this.masterService.showSuccess(response.ReturnMsg, 'Success');
            }
          }, error => {
            this.masterService.showError(error.error.ReturnMsg, '');
          });
        }
      });
    } // update invites methods


    OnUpdateInvite(event) {
      this.selectedMember = event.element;
      const editInviteDialog = this.matDialog.open(src_app_shared_pop_up_model_edit_invite_edit_invite_component__WEBPACK_IMPORTED_MODULE_5__.EditInviteComponent, {
        width: '700px',
        data: this.selectedMember
      });
      editInviteDialog.afterClosed().subscribe(result => {
        if (result) this.GetInvites();
      });
    }

    OnInviteMemberRowSelect(event) {
      this.selectedMember = event.element;
      this.selectedMember['type'] = 'edit';
      const addEditProjectDialog = this.matDialog.open(src_app_shared_pop_up_model_invite_team_member_model_invite_team_member_model_component__WEBPACK_IMPORTED_MODULE_2__.InviteTeamMemberModelComponent, {
        width: '870px',
        data: this.selectedMember
      });
      addEditProjectDialog.afterClosed().subscribe(result => {
        if (result) this.GetInvites();
      });
    }

    OnboradingBtnClick() {
      const onBoradingModel = this.matDialog.open(src_app_shared_pop_up_model_onboarding_status_model_onboarding_status_model_component__WEBPACK_IMPORTED_MODULE_3__.OnboardingStatusModelComponent, {
        height: '800px',
        width: '870px'
      });
    }

    InviteMember() {
      const inviteteamMemberDialog = this.matDialog.open(src_app_shared_pop_up_model_invite_team_member_model_invite_team_member_model_component__WEBPACK_IMPORTED_MODULE_2__.InviteTeamMemberModelComponent, {
        height: '600px',
        width: '675px'
      });
      inviteteamMemberDialog.afterClosed().subscribe(result => {
        if (result) {
          this.membersTab = false;
          this.GetInvites();
        }
      });
    }

    memberSearch() {
      this.filterData = {
        name: this.name ? this.name : '',
        time_track: this.time_track ? this.time_track : '',
        role: this.role ? this.role : '',
        status: true
      };
      this.GetMember();
    }

    OnPageChange(event) {
      const pageNumber = Math.round(event.first / event.rows) + 1;
      this.start = pageNumber;
      this.limit = event.rows;

      if (this.membersTab) {
        this.GetMember();
      } else {
        this.GetInvites();
      }
    }

  }

  MembersComponent.ɵfac = function MembersComponent_Factory(t) {
    return new (t || MembersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_organization_service__WEBPACK_IMPORTED_MODULE_6__.OrganizationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_7__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_people_service__WEBPACK_IMPORTED_MODULE_8__.PeopleService));
  };

  MembersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: MembersComponent,
    selectors: [["app-members"]],
    decls: 32,
    vars: 16,
    consts: [[1, "white_box", "main_content"], [1, "nav", "nav-tabs", "tab_design_one"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#member", 1, "nav-link", "active", 3, "click"], ["data-bs-toggle", "tab", "href", "#invites", 1, "nav-link", 3, "click"], [1, "col-md-2"], [4, "ngIf"], [1, "row", "align-items-end", "mb-5"], [1, "col-md-8"], [1, "row", "align-items-end"], ["class", "col-md-4", 4, "ngIf"], [1, "col-md-4"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-end"], [1, "btn_blue", 3, "click"], [1, "tab-content"], ["id", "member", 1, "tab-pane", "active"], [1, "member_tab_wrap"], ["tableName", "members", 3, "tableColsDetails", "tableDataArray", "limit", "isPagination", "actionMenu", "totalRecords", "tdClickEmitter", "paginationEvent"], ["id", "invites", 1, "tab-pane", "fade"], [1, "member_invites_table_wrap"], ["tableName", "invites", 3, "tableColsDetails", "tableDataArray", "limit", "totalRecords", "actionMenu", "isPagination", "tdClickEmitter", "paginationEvent"], [1, "btn_blue_border", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["appearance", "fill"], ["type", "text", "matInput", "", "placeholder", "Search member", 3, "ngModel", "ngModelChange", "keyup"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear"], ["for", "role"], [3, "ngModel", "ngModelChange", "selectionChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["for", "tracking"], ["id", "tracking", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "true"], ["value", "false"]],
    template: function MembersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 0)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "ul", 1)(5, "li", 2)(6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MembersComponent_Template_a_click_6_listener() {
          return ctx.TabChange("members");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "li", 2)(9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MembersComponent_Template_a_click_9_listener() {
          return ctx.TabChange("invites");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Invites");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, MembersComponent_div_12_Template, 10, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 7)(14, "div", 8)(15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, MembersComponent_div_16_Template, 6, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, MembersComponent_div_17_Template, 8, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, MembersComponent_div_18_Template, 11, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "div", 11)(20, "div", 12)(21, "div")(22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MembersComponent_Template_button_click_22_listener() {
          return ctx.InviteMember();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "Invite Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "div", 14)(25, "div", 15)(26, "div", 16)(27, "div")(28, "TrackerX-dynamic-table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("tdClickEmitter", function MembersComponent_Template_TrackerX_dynamic_table_tdClickEmitter_28_listener($event) {
          return ctx.TdClickEvent($event);
        })("paginationEvent", function MembersComponent_Template_TrackerX_dynamic_table_paginationEvent_28_listener($event) {
          return ctx.OnPageChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "div", 18)(30, "div", 19)(31, "TrackerX-dynamic-table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("tdClickEmitter", function MembersComponent_Template_TrackerX_dynamic_table_tdClickEmitter_31_listener($event) {
          return ctx.TdClickEvent($event);
        })("paginationEvent", function MembersComponent_Template_TrackerX_dynamic_table_paginationEvent_31_listener($event) {
          return ctx.OnPageChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedCheckBox.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.membersTab);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.membersTab);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.membersTab);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("tableColsDetails", ctx.membersTableCols)("tableDataArray", ctx.membersListArray)("limit", ctx.limit)("isPagination", true)("actionMenu", ctx.memberActionMenu)("totalRecords", ctx.totalRecords);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("tableColsDetails", ctx.invitesTableCols)("tableDataArray", ctx.invitesListArray)("limit", ctx.limit)("totalRecords", ctx.totalRecords)("actionMenu", ctx.invitesActionMenu)("isPagination", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_9__.DynamicTableComponent, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__.LoaderComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuTrigger]
  });
  return MembersComponent;
})();

/***/ }),

/***/ 15505:
/*!*******************************************************!*\
  !*** ./src/app/pages/people/people-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeopleRoutingModule": () => (/* binding */ PeopleRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _members_members_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./members/members.component */ 44586);
/* harmony import */ var _teams_team_detail_team_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teams/team-detail/team-detail.component */ 87272);
/* harmony import */ var _teams_teams_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teams/teams.component */ 87942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94650);






const routes = [{
  path: 'members',
  component: _members_members_component__WEBPACK_IMPORTED_MODULE_0__.MembersComponent
}, {
  path: 'teams',
  component: _teams_teams_component__WEBPACK_IMPORTED_MODULE_2__.TeamsComponent
}, {
  path: 'team-detail/:id',
  component: _teams_team_detail_team_detail_component__WEBPACK_IMPORTED_MODULE_1__.TeamDetailComponent
}, {
  path: '',
  redirectTo: 'members',
  pathMatch: 'full'
}];
let PeopleRoutingModule = /*#__PURE__*/(() => {
  class PeopleRoutingModule {}

  PeopleRoutingModule.ɵfac = function PeopleRoutingModule_Factory(t) {
    return new (t || PeopleRoutingModule)();
  };

  PeopleRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: PeopleRoutingModule
  });
  PeopleRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
  return PeopleRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PeopleRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 76725:
/*!***********************************************!*\
  !*** ./src/app/pages/people/people.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeopleModule": () => (/* binding */ PeopleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _people_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./people-routing.module */ 15505);
/* harmony import */ var _members_members_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./members/members.component */ 44586);
/* harmony import */ var _teams_teams_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teams/teams.component */ 87942);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ 90455);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 97392);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dialog */ 77729);
/* harmony import */ var _teams_team_detail_team_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./teams/team-detail/team-detail.component */ 87272);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 28255);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);



 // angular material module








 // primerange import





let PeopleModule = /*#__PURE__*/(() => {
  class PeopleModule {}

  PeopleModule.ɵfac = function PeopleModule_Factory(t) {
    return new (t || PeopleModule)();
  };

  PeopleModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: PeopleModule
  });
  PeopleModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _people_routing_module__WEBPACK_IMPORTED_MODULE_0__.PeopleRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggleModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_12__.DialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule]
  });
  return PeopleModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PeopleModule, {
    declarations: [_members_members_component__WEBPACK_IMPORTED_MODULE_1__.MembersComponent, _teams_teams_component__WEBPACK_IMPORTED_MODULE_2__.TeamsComponent, _teams_team_detail_team_detail_component__WEBPACK_IMPORTED_MODULE_4__.TeamDetailComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _people_routing_module__WEBPACK_IMPORTED_MODULE_0__.PeopleRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggleModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_12__.DialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule]
  });
})();

/***/ }),

/***/ 87272:
/*!*************************************************************************!*\
  !*** ./src/app/pages/people/teams/team-detail/team-detail.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamDetailComponent": () => (/* binding */ TeamDetailComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_model_table_header_data_people__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/people */ 21463);
/* harmony import */ var src_app_shared_pop_up_model_edit_team_edit_team_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/edit-team/edit-team.component */ 22947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var src_app_core_services_people_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/people.service */ 85804);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/dynamic-table/dynamic-table.component */ 57834);










function TeamDetailComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TeamDetailComponent_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.editTeam("teammates"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Add Member");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function TeamDetailComponent_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TeamDetailComponent_button_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.editTeam("project"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Add Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

const _c0 = function () {
  return ["/people/teams"];
};

let TeamDetailComponent = /*#__PURE__*/(() => {
  class TeamDetailComponent {
    constructor(matDialog, route, masterService, peopleService) {
      this.matDialog = matDialog;
      this.route = route;
      this.masterService = masterService;
      this.peopleService = peopleService;
      this.team_id = '';
      this.organizationDetails = {};
      this.addTeamProjectsBtn = false;
      this.addTeamMemberBtn = true;
      this.teamDetailsArray = [];
      this.teamDetailMemberTableCols = src_app_core_model_table_header_data_people__WEBPACK_IMPORTED_MODULE_0__.teamDetailMemberTable;
      this.teamDetailProjectTableCols = src_app_core_model_table_header_data_people__WEBPACK_IMPORTED_MODULE_0__.teamDetailProjectTable;
      this.teamDetailMemberActionMenu = src_app_core_model_table_header_data_people__WEBPACK_IMPORTED_MODULE_0__.teamDetailMemberAction;
      this.teamDetailProjectActionMenu = src_app_core_model_table_header_data_people__WEBPACK_IMPORTED_MODULE_0__.teamDetailProjectAction;
      this.teamRoleDetailsMenu = src_app_core_model_table_header_data_people__WEBPACK_IMPORTED_MODULE_0__.teamRoleDetails;
      this.teamDetailMemberArray = [];
      this.teamDetailProjectArray = [];
    }

    ngOnInit() {
      this.team_id = this.route.snapshot.params['id'];
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.GetTeamDetails(this.team_id);
    }

    TdClickEvent(event) {
      if (event.event == 'removeTeamMember') {} else if (event.event == 'removeTeamProject') {}
    }

    TabChange(event) {
      if (event == 'members') {
        this.addTeamMemberBtn = true;
        this.addTeamProjectsBtn = false;
      } else if (event == 'projects') {
        this.addTeamMemberBtn = false;
        this.addTeamProjectsBtn = true;
      }
    }

    GetTeamDetails(team_id) {
      if (team_id) {
        this.peopleService.GetTeamDetail(team_id).subscribe(response => {
          if (response && response.ReturnCode == 200 && response.err == 0) {
            this.teamDetailsArray = response['Data'];

            if (this.teamDetailsArray['projectData']) {
              this.teamDetailProjectArray = this.teamDetailsArray['projectData'];
            }

            if (this.teamDetailsArray['team_Data']) {
              this.teamDetailMemberArray = this.teamDetailsArray['team_Data'];
              this.teamDetailMemberArray.forEach(element => {
                if (element.role == 1) {
                  element.roleName = 'Manager';
                } else if (element.role == 2) {
                  element.roleName = 'User';
                } else if (element.role == 3) {
                  element.roleName = 'Viewer';
                }
              });
            }
          } else {
            this.masterService.showError(response.ReturnMsg, 'Error');
          }
        }, error => {
          this.masterService.showError(error.error.ReturnMsg, 'Error');
        });
      }
    }

    editTeam(currentFragment) {
      let data = {
        data: this.teamDetailsArray,
        currentFragment: currentFragment
      };
      const editTeamModel = this.matDialog.open(src_app_shared_pop_up_model_edit_team_edit_team_component__WEBPACK_IMPORTED_MODULE_1__.EditTeamComponent, {
        height: '900px',
        width: '600px',
        data: data
      });
    }

  }

  TeamDetailComponent.ɵfac = function TeamDetailComponent_Factory(t) {
    return new (t || TeamDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_2__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_people_service__WEBPACK_IMPORTED_MODULE_3__.PeopleService));
  };

  TeamDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: TeamDetailComponent,
    selectors: [["app-team-detail"]],
    decls: 29,
    vars: 12,
    consts: [[1, "white_box", "main_content"], [1, "d-flex", "justify-content-between"], [1, "setting_title", 3, "routerLink"], ["src", "../../../../assets/images/icon/back-arrow-blue.svg", "alt", ""], [1, "setting_title", "text_gradient", 3, "click"], ["src", "", "alt", ""], [1, "mb-5"], [1, "dashboars_tabs", "mb-5"], [1, "nav", "nav-tabs", "tab_design_one"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#members", 1, "nav-link", "active", 3, "click"], ["data-bs-toggle", "tab", "href", "#projects", 1, "nav-link", 3, "click"], [1, ""], ["class", "btn_blue", 3, "click", 4, "ngIf"], [1, "tab-content"], ["id", "members", 1, "tab-pane", "active"], [3, "tableColsDetails", "tableDataArray", "actionMenu", "roleDetails", "tdClickEmitter"], ["id", "projects", 1, "tab-pane", "fade"], [3, "tableColsDetails", "tableDataArray", "actionMenu", "tdClickEmitter"], [1, "btn_blue", 3, "click"]],
    template: function TeamDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "div", 1)(3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Teams ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TeamDetailComponent_Template_h4_click_6_listener() {
          return ctx.editTeam("general");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Edit Team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 1)(12, "div", 7)(13, "ul", 8)(14, "li", 9)(15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TeamDetailComponent_Template_a_click_15_listener() {
          return ctx.TabChange("members");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "li", 9)(18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TeamDetailComponent_Template_a_click_18_listener() {
          return ctx.TabChange("projects");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, TeamDetailComponent_button_21_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, TeamDetailComponent_button_22_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div")(24, "div", 14)(25, "div", 15)(26, "TrackerX-dynamic-table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("tdClickEmitter", function TeamDetailComponent_Template_TrackerX_dynamic_table_tdClickEmitter_26_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 17)(28, "TrackerX-dynamic-table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("tdClickEmitter", function TeamDetailComponent_Template_TrackerX_dynamic_table_tdClickEmitter_28_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.teamDetailsArray["teamName"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.addTeamMemberBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.addTeamProjectsBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tableColsDetails", ctx.teamDetailMemberTableCols)("tableDataArray", ctx.teamDetailMemberArray)("actionMenu", ctx.teamDetailMemberActionMenu)("roleDetails", ctx.teamRoleDetailsMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tableColsDetails", ctx.teamDetailProjectTableCols)("tableDataArray", ctx.teamDetailProjectArray)("actionMenu", ctx.teamDetailProjectActionMenu);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_4__.DynamicTableComponent]
  });
  return TeamDetailComponent;
})();

/***/ }),

/***/ 87942:
/*!*******************************************************!*\
  !*** ./src/app/pages/people/teams/teams.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamsComponent": () => (/* binding */ TeamsComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_model_table_header_data_people__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/people */ 21463);
/* harmony import */ var src_app_shared_pop_up_model_add_new_team_model_add_new_team_model_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/add-new-team-model/add-new-team-model.component */ 89701);
/* harmony import */ var src_app_shared_pop_up_model_edit_team_edit_team_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pop-up-model/edit-team/edit-team.component */ 22947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var src_app_core_services_people_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/people.service */ 85804);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/dynamic-table/dynamic-table.component */ 57834);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 28255);











function TeamsComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TeamsComponent_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.addNewTeam());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Add Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function TeamsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Batch Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-menu", null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TeamsComponent_div_7_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.BatchAction("removeTeam"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Remove Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", _r6);
  }
}

function TeamsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13)(1, "TrackerX-dynamic-table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("tdClickEmitter", function TeamsComponent_div_8_Template_TrackerX_dynamic_table_tdClickEmitter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.TdClickEvent($event));
    })("paginationEvent", function TeamsComponent_div_8_Template_TrackerX_dynamic_table_paginationEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.OnPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tableColsDetails", ctx_r2.teamsTableCols)("tableDataArray", ctx_r2.teamsArray)("actionMenu", ctx_r2.actionMenu)("totalRecords", ctx_r2.totalRecords)("isPagination", true);
  }
}

function TeamsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "No Teams Yet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TeamsComponent_div_9_Template_span_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r12.addNewTeam());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Add Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}

let TeamsComponent = /*#__PURE__*/(() => {
  class TeamsComponent {
    constructor(matDialog, peopleService, masterService) {
      this.matDialog = matDialog;
      this.peopleService = peopleService;
      this.masterService = masterService;
      this.addNewTeamShow = true;
      this.organizationDetails = {};
      this.teamsTableCols = src_app_core_model_table_header_data_people__WEBPACK_IMPORTED_MODULE_0__.teamsTable;
      this.actionMenu = src_app_core_model_table_header_data_people__WEBPACK_IMPORTED_MODULE_0__.teamsActionMenus;
      this.teamsResponse = {};
      this.teamsArray = [];
      this.selectedCheckBox = [];
      this.start = 1;
      this.limit = 25;
      this.totalRecords = 0;
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.GetTeams();
    }

    GetTeams() {
      this.peopleService.GetTeams(this.organizationDetails['_id'], this.start, this.limit).subscribe(response => {
        if (response && response.ReturnCode == 200 && response.err == 0) {
          this.teamsResponse = response;

          if (this.teamsResponse && this.teamsResponse['Data'].list.length > 0) {
            this.addNewTeamShow = false;
            this.totalRecords = this.teamsResponse['Data'].count;
            this.teamsResponse['Data'].list.filter(x => {
              x['redirectTo'] = '/people/team-detail/' + x._id;
            });
            this.teamsArray = this.teamsResponse['Data'].list;
            this.masterService.hideSppiner();
          } else {
            this.masterService.hideSppiner();
            this.addNewTeamShow = true;
          }
        } else {
          this.masterService.hideSppiner();
          this.masterService.showError(response.ReturnMsg, 'Error');
        }
      }, error => {
        this.masterService.hideSppiner();
        this.masterService.showError(error.error.ReturnMsg, 'Error');
      });
    }

    addNewTeam() {
      const addTeamDialog = this.matDialog.open(src_app_shared_pop_up_model_add_new_team_model_add_new_team_model_component__WEBPACK_IMPORTED_MODULE_1__.AddNewTeamModelComponent, {
        height: '600px',
        width: '970px'
      });
      addTeamDialog.afterClosed().subscribe(result => {
        if (result) {
          this.GetTeams();
        } else {}
      });
    }

    editTeam(element) {
      element['currentFragment'] = 'general';
      const editTeamMemberDialog = this.matDialog.open(src_app_shared_pop_up_model_edit_team_edit_team_component__WEBPACK_IMPORTED_MODULE_2__.EditTeamComponent, {
        height: '900px',
        width: '600px',
        data: element
      });
      editTeamMemberDialog.afterClosed().subscribe(result => {
        if (result) {
          this.GetTeams();
        } else {}
      });
    }

    TdClickEvent(event) {
      if (event.event == "editTeam" || event.event == 'rowUpdate') {
        this.editTeam(event.element);
      } else if (event.event == "removeTeam") {
        this.removeTeam(event.element);
      } else if (event.event == "allCheckBoxSelected") {
        this.allCheckBoxSelected(event);
      } else if (event.event == "checkBoxChecked") {
        this.checkBoxEvent(event);
      }
    }

    allCheckBoxSelected(event) {
      this.selectedCheckBox = [];

      if (event.checked == 'true') {
        this.teamsArray.forEach((team, i) => {
          this.selectedCheckBox.push(team._id);
        });
      } else {
        this.selectedCheckBox = [];
      }
    } // method call on row checkbox selected


    checkBoxEvent(event) {
      if (event.checked == 'true') {
        if (event.element._id) {
          this.selectedCheckBox.push(event.element._id);
        }
      } else {
        if (this.selectedCheckBox.length > 0) {
          this.selectedCheckBox.forEach((id, i) => {
            if (id == event.element._id.toString()) {
              this.selectedCheckBox.splice(i, 1);
            }
          });
        }
      }
    }

    BatchAction(action) {
      if (this.selectedCheckBox.length > 0) {
        if (action == "removeTeam") {// this.removeMember(this.selectedCheckBox);
        }
      }
    }

    OnTeamUpdate(event) {
      console.log(event);
    }

    removeTeam(element) {
      let teamId = [];
      teamId.push(element._id);
      this.peopleService.RemoveTeam(this.organizationDetails['_id'], teamId).subscribe(response => {
        if (response && response.ReturnCode == 200 && response.err == 0) {
          this.GetTeams();
          this.masterService.showSuccess(response.ReturnMsg, "Success");
        } else {
          this.masterService.showError(response.ReturnMsg, "Error");
        }
      }, error => {
        this.masterService.showError(error.error.ReturnMsg, "Error");
      });
    }

    OnPageChange(event) {
      const pageNumber = Math.round(event.first / event.rows) + 1;
      this.start = pageNumber;
      this.limit = event.rows;
      this.GetTeams();
    }

  }

  TeamsComponent.ɵfac = function TeamsComponent_Factory(t) {
    return new (t || TeamsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_people_service__WEBPACK_IMPORTED_MODULE_3__.PeopleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__.MasterService));
  };

  TeamsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: TeamsComponent,
    selectors: [["app-teams"]],
    decls: 10,
    vars: 4,
    consts: [[1, "white_box", "main_content"], [1, "row", "mb-5"], [1, "col-6"], [1, "col-6", "text-end"], ["class", "btn_blue", 3, "click", 4, "ngIf"], [1, "col-md-2"], [4, "ngIf"], ["class", "team_table_wrap", 4, "ngIf"], ["class", "add_team_wrap", 4, "ngIf"], [1, "btn_blue", 3, "click"], [1, "btn_blue_border", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "team_table_wrap"], ["tableName", "teams", 3, "tableColsDetails", "tableDataArray", "actionMenu", "totalRecords", "isPagination", "tdClickEmitter", "paginationEvent"], [1, "add_team_wrap"], [1, "add_team_wrap_in", "gray_box"], ["src", "../../../../assets/images/team-group.png", "alt", ""], [1, "m-0"], [1, "text_gradient", 3, "click"]],
    template: function TeamsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Teams");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, TeamsComponent_button_5_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, TeamsComponent_div_7_Template, 8, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, TeamsComponent_div_8_Template, 2, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, TeamsComponent_div_9_Template, 7, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.addNewTeamShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedCheckBox.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.addNewTeamShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.addNewTeamShow);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_5__.DynamicTableComponent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuTrigger],
    styles: [".team_table_wrap table.p-datatable-table .p-datatable-thead th:first-child {\r\n  width: 50px;\r\n}\r\n\r\n.add_team_wrap[_ngcontent-%COMP%] {\r\n  margin: 80px 0 0;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.add_team_wrap_in[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n  width: 100%;\r\n  text-align: center;\r\n  border-radius: 10px;\r\n  padding: 40px;\r\n}\r\n\r\n.add_team_wrap_in[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  position: relative;\r\n}\r\n\r\n.add_team_wrap_in[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 1px;\r\n  background: var(--blue-gradient);\r\n}"]
  });
  return TeamsComponent;
})();

/***/ })

}]);