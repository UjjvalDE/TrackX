"use strict";
(self["webpackChunktracker"] = self["webpackChunktracker"] || []).push([[307],{

/***/ 30232:
/*!********************************************************************!*\
  !*** ./src/app/core/model/table-header-data/project-management.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeClientActionMenus": () => (/* binding */ activeClientActionMenus),
/* harmony export */   "activeProjectActionMenus": () => (/* binding */ activeProjectActionMenus),
/* harmony export */   "activeProjectTable": () => (/* binding */ activeProjectTable),
/* harmony export */   "archiveClientActionMenus": () => (/* binding */ archiveClientActionMenus),
/* harmony export */   "archiveProjectActionMenus": () => (/* binding */ archiveProjectActionMenus),
/* harmony export */   "clientTable": () => (/* binding */ clientTable),
/* harmony export */   "projectDetailMemberAction": () => (/* binding */ projectDetailMemberAction),
/* harmony export */   "projectDetailMemberTable": () => (/* binding */ projectDetailMemberTable),
/* harmony export */   "projectDetailTeamAction": () => (/* binding */ projectDetailTeamAction),
/* harmony export */   "projectDetailTeamTable": () => (/* binding */ projectDetailTeamTable),
/* harmony export */   "projectRoleDetails": () => (/* binding */ projectRoleDetails),
/* harmony export */   "toDosActionMenus": () => (/* binding */ toDosActionMenus),
/* harmony export */   "toDosTable": () => (/* binding */ toDosTable)
/* harmony export */ });
let activeProjectTable = [{
  key: '',
  label: '',
  config: {
    isCheckbox: true
  }
}, {
  key: 'name',
  label: 'Project Name',
  config: {
    isProfileWithLetter: true // isRedirect: true

  }
}, {
  key: 'team',
  label: 'Teams',
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
  label: 'Budget',
  config: {
    isText: true
  }
}, {
  key: 'action',
  label: 'Action',
  config: {
    isAction: true
  }
}];
let toDosTable = [{
  key: 'title',
  label: 'To-Do',
  config: {
    isText: true
  }
}, {
  key: 'assignee_name',
  label: 'Assignee',
  config: {
    isProfile: true
  }
}, {
  key: 'created_at',
  label: 'Created',
  config: {
    isDate: true
  }
}, {
  key: 'action',
  label: 'Action',
  config: {
    isAction: true
  }
}];
let clientTable = [{
  key: 'name',
  label: 'Name',
  config: {
    isProfile: true
  }
}, {
  key: 'budget_type',
  label: 'Budget',
  config: {
    isText: true
  }
}, // {
//   key: 'autoInvoicing',
//   label: 'Auto-invoicing',
//   config: {
//     isText: true
//   }
// },
{
  key: 'action',
  label: 'Action',
  config: {
    isAction: true
  }
}];
let projectDetailMemberTable = [{
  key: '',
  label: '',
  config: {
    isCheckbox: true
  }
}, {
  key: 'name',
  label: 'Name',
  config: {
    isProfile: true
  }
}, {
  key: 'role',
  label: 'Role',
  config: {
    // isText: true
    isRoleChange: true
  }
}, {
  key: 'PayRate_BillRate',
  label: 'Pay Rate/ Bill Rate',
  config: {
    isText: true
  }
}, {
  key: '',
  label: 'Action',
  config: {
    isAction: true
  }
}];
let projectDetailTeamTable = [{
  key: '',
  label: '',
  config: {
    isCheckbox: true
  }
}, {
  key: 'name',
  label: 'Name',
  config: {
    isProfile: true
  }
}, {
  key: '',
  label: 'Action',
  config: {
    isAction: true
  }
}]; // action menus

let activeProjectActionMenus = [{
  label: 'Duplicate Project',
  event: 'duplicateProject',
  config: {
    isShow: true
  }
}, {
  label: 'Edit Project',
  event: 'editProject',
  config: {
    isShow: true
  }
}, {
  label: 'Archive Project',
  event: 'archiveProject',
  config: {
    isShow: true
  }
},
/*  {
   label: 'Transfer',
   event: 'transfer',
   config: {
     isShow: true
   }
 }, */
{
  label: 'Delete Project',
  event: 'deleteProject',
  config: {
    isShow: true
  }
}];
let archiveProjectActionMenus = [{
  label: 'Restore Project',
  event: 'restoreProject',
  config: {
    isShow: true
  }
}];
let toDosActionMenus = [{
  label: 'Edit',
  event: 'edit',
  config: {
    // isShow: true,
    completed: false
  }
}, {
  label: 'Mark As Completed',
  event: 'markAsCompleted',
  config: {
    // isShow: true,
    completed: false
  }
}, {
  label: 'Re-open',
  event: 'markAsReopen',
  config: {
    // isShow: true,
    completed: true
  }
}, {
  label: 'Delete',
  event: 'delete',
  config: {
    isShow: true
  }
}];
let activeClientActionMenus = [{
  label: 'Edit Client',
  event: 'editClient',
  config: {
    isShow: true
  }
}, {
  label: 'Archive Client',
  event: 'archiveClient',
  config: {
    isShow: true
  }
}, {
  label: 'Delete Client',
  event: 'deleteClient',
  config: {
    isShow: true
  }
}];
let archiveClientActionMenus = [{
  label: 'Edit Client',
  event: 'editClient',
  config: {
    isShow: true
  }
}, {
  label: 'Restore Client',
  event: 'restoreClient',
  config: {
    isShow: true
  }
}, {
  label: 'Delete Client',
  event: 'deleteClient',
  config: {
    isShow: true
  }
}];
let projectDetailMemberAction = [{
  label: 'Edit Pay/Bill Rate',
  event: 'editPay_BillRate',
  config: {
    isShow: true
  }
}, {
  label: 'Remove Member',
  event: 'removeMember',
  config: {
    isShow: true
  }
}];
let projectDetailTeamAction = [{
  label: 'Remove Project From Team',
  event: 'removeProjectFromTeam',
  config: {
    isShow: true
  }
}]; // RoleDetails

let projectRoleDetails = [{
  roleName: 'Manager',
  role: 1
}, {
  roleName: 'User',
  role: 2
}, {
  roleName: 'Viewer',
  role: 3
}, {
  roleName: 'Projects Manger',
  role: 4
}];

/***/ }),

/***/ 53530:
/*!***********************************************************************!*\
  !*** ./src/app/pages/project-management/clients/clients.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsComponent": () => (/* binding */ ClientsComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_model_table_header_data_project_management__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/project-management */ 30232);
/* harmony import */ var src_app_shared_pop_up_model_add_client_model_add_client_model_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/add-client-model/add-client-model.component */ 29064);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var src_app_core_services_project_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/project-management.service */ 56014);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/dynamic-table/dynamic-table.component */ 57834);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/loader/loader.component */ 89047);










const _c0 = function (a0) {
  return {
    "active": a0
  };
};

let ClientsComponent = /*#__PURE__*/(() => {
  class ClientsComponent {
    constructor(matDialog, masterService, projectManagementService) {
      this.matDialog = matDialog;
      this.masterService = masterService;
      this.projectManagementService = projectManagementService;
      this.clientCols = src_app_core_model_table_header_data_project_management__WEBPACK_IMPORTED_MODULE_0__.clientTable;
      this.clientValue = [];
      this.actionMenu = src_app_core_model_table_header_data_project_management__WEBPACK_IMPORTED_MODULE_0__.activeClientActionMenus;
      this.selectedClient = {};
      this.organizationDetails = {};
      this.tabType = 'active';
      this.start = 1;
      this.limit = 25;
      this.totalRecords = 0;
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.GetActiveClient(this.organizationDetails['_id']);
    }

    GetActiveClient(org_id) {
      this.masterService.showSpppiner();
      this.projectManagementService.GetActiveArchiveClient(org_id, this.start, this.limit, true).subscribe(response => {
        if (response && response.ReturnCode == 200 && response.err == 0) {
          this.clientValue = response.Data.list;
          this.totalRecords = response.Data.count;
          this.masterService.hideSppiner();
        } else {
          this.totalRecords = 0;
          this.clientValue = [];
          this.masterService.hideSppiner();
        }
      }, error => {
        this.masterService.showError(error.error.ReturnMsg, 'Error');
        this.masterService.hideSppiner();
      });
    }

    GetArchivedClient(org_id) {
      this.clientValue = [];
      this.masterService.showSpppiner();
      this.projectManagementService.GetActiveArchiveClient(org_id, this.start, this.limit, false).subscribe(response => {
        if (response && response.ReturnCode == 200 && response.err == 0) {
          this.clientValue = response.Data.list;
          this.totalRecords = response.Data.count;
          this.masterService.hideSppiner();
        } else {
          this.totalRecords = 0;
          this.clientValue = [];
          this.masterService.hideSppiner();
        }
      }, error => {
        this.masterService.hideSppiner();
        this.masterService.showError(error.error.ReturnMsg, 'Error');
      });
    }

    TdClickEvent(event) {
      if (event.event == 'editClient' || event.event == 'rowUpdate') {
        this.EditClient(event.element);
      } else if (event.event == 'archiveClient') {
        this.ArchiveClient(event.element._id);
      } else if (event.event == 'deleteClient') {
        this.DeleteClient(event.element._id);
      } else if (event.event == 'restoreClient') {
        this.RestoreClient(event.element._id);
      }
    }

    OnPageChange(event) {
      const pageNumber = Math.round(event.first / event.rows) + 1;
      this.start = pageNumber;
      this.limit = event.rows;

      if (this.tabType == 'active') {
        this.GetActiveClient(this.organizationDetails['_id']);
      } else {
        this.GetArchivedClient(this.organizationDetails['_id']);
      }
    }

    RestoreClient(clientId) {
      this.masterService.showSpppiner();
      this.projectManagementService.RestoreClient(clientId).subscribe(response => {
        if (response && response.ReturnCode == 200 && response.err == 0) {
          this.masterService.hideSppiner();
          this.GetArchivedClient(this.organizationDetails['_id']);
        } else {
          this.masterService.hideSppiner();
          this.masterService.showError(response.ReturnMsg, 'Error');
        }
      }, error => {
        this.masterService.hideSppiner();
        this.masterService.showError(error.error.ReturnMsg, 'Error');
      });
    }

    DeleteClient(clientId) {
      this.masterService.showSpppiner();
      this.projectManagementService.DeleteClient(clientId).subscribe(response => {
        if (response && response.ReturnCode == 200 && response.err == 0) {
          this.masterService.hideSppiner();
          this.GetActiveClient(this.organizationDetails['_id']);
          this.masterService.showSuccess(response.ReturnMsg, 'Success');
        } else {
          this.masterService.hideSppiner();
          this.masterService.showError(response.ReturnMsg, 'Error');
        }
      }, error => {
        this.masterService.hideSppiner();
        this.masterService.showError(error.error.ReturnMsg, 'Error');
      });
    }

    ArchiveClient(clientId) {
      this.masterService.showSpppiner();
      this.projectManagementService.ArchiveClient(clientId).subscribe(response => {
        if (response && response.ReturnCode == 200 && response.err == 0) {
          this.GetActiveClient(this.organizationDetails['_id']);
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

    TabClick(type) {
      this.tabType = type;

      if (type == 'active') {
        this.actionMenu = src_app_core_model_table_header_data_project_management__WEBPACK_IMPORTED_MODULE_0__.activeClientActionMenus;
        this.GetActiveClient(this.organizationDetails['_id']);
      } else {
        this.actionMenu = src_app_core_model_table_header_data_project_management__WEBPACK_IMPORTED_MODULE_0__.archiveClientActionMenus;
        this.GetArchivedClient(this.organizationDetails['_id']);
      }
    }

    AddClient() {
      const addClientDialog = this.matDialog.open(src_app_shared_pop_up_model_add_client_model_add_client_model_component__WEBPACK_IMPORTED_MODULE_1__.AddClientModelComponent, {
        width: '700px'
      });
      addClientDialog.afterClosed().subscribe(result => {
        if (result) {
          this.GetActiveClient(this.organizationDetails['_id']);
        }
      });
    }

    EditClient(element) {
      this.selectedClient = element;
      this.selectedClient['type'] = 'edit';
      const addEditProjectDialog = this.matDialog.open(src_app_shared_pop_up_model_add_client_model_add_client_model_component__WEBPACK_IMPORTED_MODULE_1__.AddClientModelComponent, {
        width: '870px',
        data: this.selectedClient
      });
      addEditProjectDialog.afterClosed().subscribe(result => {
        if (result) {
          this.GetActiveClient(this.organizationDetails['_id']);
        }
      });
    }

  }

  ClientsComponent.ɵfac = function ClientsComponent_Factory(t) {
    return new (t || ClientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_2__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_project_management_service__WEBPACK_IMPORTED_MODULE_3__.ProjectManagementService));
  };

  ClientsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ClientsComponent,
    selectors: [["app-clients"]],
    decls: 22,
    vars: 11,
    consts: [[1, "white_box", "main_content"], [1, "top_title_wrap"], [1, "row", "align-items-center"], [1, "col-md-6"], [1, "mb-0"], [1, "row", "mb-5"], [1, "nav", "nav-tabs", "tab_design_one"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#active", 1, "nav-link", 3, "ngClass", "click"], ["data-bs-toggle", "tab", "href", "#archived", 1, "nav-link", 3, "ngClass", "click"], [1, "col-md-6", "text-end"], [1, "btn_blue", "mx-2", 3, "click"], [1, "row"], ["tableName", "clients", 3, "tableColsDetails", "tableDataArray", "isPagination", "totalRecords", "actionMenu", "paginationEvent", "tdClickEmitter"]],
    template: function ClientsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 5)(8, "div", 3)(9, "ul", 6)(10, "li", 7)(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientsComponent_Template_a_click_11_listener() {
          return ctx.TabClick("active");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "li", 7)(14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientsComponent_Template_a_click_14_listener() {
          return ctx.TabClick("archived");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Archived");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 10)(17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientsComponent_Template_button_click_17_listener() {
          return ctx.AddClient();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Add Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 12)(20, "div")(21, "TrackerX-dynamic-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("paginationEvent", function ClientsComponent_Template_TrackerX_dynamic_table_paginationEvent_21_listener($event) {
          return ctx.OnPageChange($event);
        })("tdClickEmitter", function ClientsComponent_Template_TrackerX_dynamic_table_tdClickEmitter_21_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c0, ctx.tabType == "active"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](9, _c0, ctx.tabType == "archived"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tableColsDetails", ctx.clientCols)("tableDataArray", ctx.clientValue)("isPagination", true)("totalRecords", ctx.totalRecords)("actionMenu", ctx.actionMenu);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_4__.DynamicTableComponent, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__.LoaderComponent]
  });
  return ClientsComponent;
})();

/***/ }),

/***/ 32082:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/project-management/project-management-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectManagementRoutingModule": () => (/* binding */ ProjectManagementRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients/clients.component */ 53530);
/* harmony import */ var _project_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project/project-detail/project-detail.component */ 76014);
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project/project.component */ 27118);
/* harmony import */ var _to_dos_to_dos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./to-dos/to-dos.component */ 20755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);







const routes = [{
  path: 'clients',
  component: _clients_clients_component__WEBPACK_IMPORTED_MODULE_0__.ClientsComponent
}, {
  path: 'project',
  component: _project_project_component__WEBPACK_IMPORTED_MODULE_2__.ProjectComponent
}, {
  path: 'project-detail/:id',
  component: _project_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_1__.ProjectDetailComponent
}, {
  path: 'to-dos',
  component: _to_dos_to_dos_component__WEBPACK_IMPORTED_MODULE_3__.ToDosComponent
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'project'
}];
let ProjectManagementRoutingModule = /*#__PURE__*/(() => {
  class ProjectManagementRoutingModule {}

  ProjectManagementRoutingModule.ɵfac = function ProjectManagementRoutingModule_Factory(t) {
    return new (t || ProjectManagementRoutingModule)();
  };

  ProjectManagementRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: ProjectManagementRoutingModule
  });
  ProjectManagementRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
  return ProjectManagementRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ProjectManagementRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 9307:
/*!***********************************************************************!*\
  !*** ./src/app/pages/project-management/project-management.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectManagementModule": () => (/* binding */ ProjectManagementModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _project_management_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-management-routing.module */ 32082);
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project/project.component */ 27118);
/* harmony import */ var _to_dos_to_dos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./to-dos/to-dos.component */ 20755);
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clients/clients.component */ 53530);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 97392);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ 90455);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 56709);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ 28255);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _project_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project/project-detail/project-detail.component */ 76014);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);



















let ProjectManagementModule = /*#__PURE__*/(() => {
  class ProjectManagementModule {}

  ProjectManagementModule.ɵfac = function ProjectManagementModule_Factory(t) {
    return new (t || ProjectManagementModule)();
  };

  ProjectManagementModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: ProjectManagementModule
  });
  ProjectManagementModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _project_management_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectManagementRoutingModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__.MatSlideToggleModule, primeng_table__WEBPACK_IMPORTED_MODULE_15__.TableModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule]
  });
  return ProjectManagementModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ProjectManagementModule, {
    declarations: [_project_project_component__WEBPACK_IMPORTED_MODULE_1__.ProjectComponent, _to_dos_to_dos_component__WEBPACK_IMPORTED_MODULE_2__.ToDosComponent, _clients_clients_component__WEBPACK_IMPORTED_MODULE_3__.ClientsComponent, _project_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_5__.ProjectDetailComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _project_management_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectManagementRoutingModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__.MatSlideToggleModule, primeng_table__WEBPACK_IMPORTED_MODULE_15__.TableModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule]
  });
})();

/***/ }),

/***/ 76014:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/project-management/project/project-detail/project-detail.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectDetailComponent": () => (/* binding */ ProjectDetailComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_model_table_header_data_project_management__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/project-management */ 30232);
/* harmony import */ var src_app_shared_pop_up_model_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/add-project/add-project.component */ 93636);
/* harmony import */ var src_app_shared_pop_up_model_confirmation_model_confirmation_model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pop-up-model/confirmation-model/confirmation-model.component */ 59925);
/* harmony import */ var src_app_shared_pop_up_model_delete_project_confirmation_model_delete_project_confirmation_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pop-up-model/delete-project-confirmation-model/delete-project-confirmation-model.component */ 38780);
/* harmony import */ var src_app_shared_pop_up_model_duplicate_project_model_duplicate_project_model_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/pop-up-model/duplicate-project-model/duplicate-project-model.component */ 29246);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var src_app_core_services_project_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/project-management.service */ 56014);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/dynamic-table/dynamic-table.component */ 57834);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/loader/loader.component */ 89047);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);















function ProjectDetailComponent_h5_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h5", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectDetailComponent_h5_20_Template_h5_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r4.archiveProject());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Archive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function ProjectDetailComponent_h5_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h5", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectDetailComponent_h5_21_Template_h5_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r6.restoreProject());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Restore ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function ProjectDetailComponent_button_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectDetailComponent_button_73_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r8.editProject("members"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Edit Member");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function ProjectDetailComponent_button_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectDetailComponent_button_74_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r10.editProject("teams"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Edit Teams");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

const _c0 = function () {
  return ["/project-management/project"];
};

let ProjectDetailComponent = /*#__PURE__*/(() => {
  class ProjectDetailComponent {
    constructor(route, matDialog, router, projectService, masterService) {
      this.route = route;
      this.matDialog = matDialog;
      this.router = router;
      this.projectService = projectService;
      this.masterService = masterService;
      this.projectId = '';
      this.organizationDetails = {};
      this.EditProjectMemberBtn = true;
      this.EditProjectTeamBtn = false;
      this.projectDetailMemberTableCols = src_app_core_model_table_header_data_project_management__WEBPACK_IMPORTED_MODULE_0__.projectDetailMemberTable;
      this.projectDetailTeamTableCols = src_app_core_model_table_header_data_project_management__WEBPACK_IMPORTED_MODULE_0__.projectDetailTeamTable;
      this.projectDetailMemberActionMenu = src_app_core_model_table_header_data_project_management__WEBPACK_IMPORTED_MODULE_0__.projectDetailMemberAction;
      this.projectDetailTeamActionMenu = src_app_core_model_table_header_data_project_management__WEBPACK_IMPORTED_MODULE_0__.projectDetailTeamAction;
      this.projectRoleDetailsMenu = src_app_core_model_table_header_data_project_management__WEBPACK_IMPORTED_MODULE_0__.projectRoleDetails;
      this.projectDetailMemberArray = [{
        name: 'Harsh',
        role: 1,
        PayRate_BillRate: 'No Pay Rate/No Bill Rate'
      }, {
        name: 'Test',
        role: 1,
        PayRate_BillRate: 'No Pay Rate/No Bill Rate'
      }];
      this.projectDetailTeamArray = [{
        name: 'HV'
      }, {
        name: 'HV2'
      }];
      this.archivedProject = true;
      this.projectDetail = {};
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.projectId = this.route.snapshot.paramMap.get('id');
      if (this.projectId) this.GetProjectDetail();
    }

    TdClickEvent(event) {
      if (event.event == 'removeTeamMember') {} else if (event.event == 'removeTeamProject') {}
    }

    GetProjectDetail() {// this.masterService.showSpppiner();
      // this.projectService.GetProjectById(this.projectId).subscribe(
      //   (response: ApiResponse) => {
      //     if (response && response.ReturnCode == 200) {
      //       this.masterService.showSuccess(response.ReturnMsg, 'Success');
      //       this.masterService.hideSppiner();
      //       window.location.reload();
      //     } else {
      //       this.masterService.hideSppiner();
      //       this.masterService.showError(response.ReturnMsg, 'Error');
      //     }
      //   }, (error) => {
      //     this.masterService.showError(error.error.ReturnMsg, 'Error');
      //     this.masterService.hideSppiner();
      //   });
    }

    TabChange(event) {
      if (event == 'members') {
        this.EditProjectMemberBtn = true;
        this.EditProjectTeamBtn = false;
      } else if (event == 'teams') {
        this.EditProjectMemberBtn = false;
        this.EditProjectTeamBtn = true;
      }
    }

    editProject(currentFragment) {
      let element = {
        data: '',
        currentFragment: currentFragment,
        type: 'edit'
      };
      const addProjectModel = this.matDialog.open(src_app_shared_pop_up_model_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_1__.AddProjectComponent, {
        height: '900px',
        width: '700px',
        data: element
      });
      addProjectModel.afterClosed().subscribe(result => {
        if (result == true) {
          this.GetProjectDetail();
        }
      });
    }

    duplicateProject() {
      let element = {};
      const duplicateProjectModel = this.matDialog.open(src_app_shared_pop_up_model_duplicate_project_model_duplicate_project_model_component__WEBPACK_IMPORTED_MODULE_4__.DuplicateProjectModelComponent, {
        height: '900px',
        width: '600px',
        data: this.projectDetail
      });
      duplicateProjectModel.afterClosed().subscribe(result => {
        if (result == true) {
          this.GetProjectDetail();
        }
      });
    }

    leaveProject() {
      const confirmationDialog = this.matDialog.open(src_app_shared_pop_up_model_confirmation_model_confirmation_model_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationModelComponent, {
        data: {
          message: 'Are sure want to leave this project?'
        }
      });
      confirmationDialog.afterClosed().subscribe(result => {});
    }

    transferProject() {}

    archiveProject() {
      const confirmationDialog = this.matDialog.open(src_app_shared_pop_up_model_confirmation_model_confirmation_model_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationModelComponent, {
        data: {
          message: 'Are sure want to archive this project?'
        }
      });
      confirmationDialog.afterClosed().subscribe(result => {
        if (result == true) {
          let projectIdList = [];
          projectIdList.push(this.projectId);
          let project = {
            project_id: projectIdList,
            status: false
          };
          this.projectService.ArchiveRestoreProject(this.organizationDetails['_id'], project).subscribe(response => {
            this.masterService.hideSppiner();

            if (response && response.ReturnCode == 200 && response.err == 0) {
              this.masterService.showSuccess(response.ReturnMsg, 'Success');
              this.archivedProject = false;
            } else {
              this.masterService.showError(response.ReturnMsg, 'Error');
              this.masterService.hideSppiner();
            }
          }, error => {
            this.masterService.showError(error.error.ReturnMsg, 'Error');
            this.masterService.hideSppiner();
          });
        }
      });
    }

    restoreProject() {
      const confirmationDialog = this.matDialog.open(src_app_shared_pop_up_model_confirmation_model_confirmation_model_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationModelComponent, {
        data: {
          message: 'Are sure want to archive this project?'
        }
      });
      confirmationDialog.afterClosed().subscribe(result => {
        if (result == true) {
          let projectIdList = [];
          projectIdList.push(this.projectId);
          let project = {
            project_id: projectIdList,
            status: true
          };
          this.projectService.ArchiveRestoreProject(this.organizationDetails['_id'], project).subscribe(response => {
            this.masterService.hideSppiner();

            if (response && response.ReturnCode == 200 && response.err == 0) {
              this.masterService.showSuccess(response.ReturnMsg, 'Success');
              this.archivedProject = true;
            } else {
              this.masterService.showError(response.ReturnMsg, 'Error');
              this.masterService.hideSppiner();
            }
          }, error => {
            this.masterService.showError(error.error.ReturnMsg, 'Error');
            this.masterService.hideSppiner();
          });
        }
      });
    }

    deleteProject() {
      this.projectDetail['org_id'] = this.organizationDetails['_id'];
      this.projectDetail['project_id'] = this.projectId;
      const confirmationDialog = this.matDialog.open(src_app_shared_pop_up_model_delete_project_confirmation_model_delete_project_confirmation_model_component__WEBPACK_IMPORTED_MODULE_3__.DeleteProjectConfirmationModelComponent, {
        width: '700px',
        data: this.projectDetail
      });
      confirmationDialog.afterClosed().subscribe(result => {
        if (result == true) {
          this.archivedProject = false;
        }
      });
    }

  }

  ProjectDetailComponent.ɵfac = function ProjectDetailComponent_Factory(t) {
    return new (t || ProjectDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_project_management_service__WEBPACK_IMPORTED_MODULE_5__.ProjectManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_6__.MasterService));
  };

  ProjectDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: ProjectDetailComponent,
    selectors: [["app-project-detail"]],
    decls: 81,
    vars: 13,
    consts: [[1, "white_box", "main_content"], [1, "d-flex", "justify-content-between", "flex-wrap"], [1, "setting_title", 3, "routerLink"], ["src", "../../../../assets/images/icon/back-arrow-blue.svg", "alt", ""], [1, "d-flex", "flex-wrap", "setting_title_main"], ["matTooltip", "Edit the project name, etc.", 1, "setting_title", "text_gradient", 3, "click"], ["src", "", "alt", ""], ["matTooltip", "Duplicate the project", 1, "setting_title", "text_gradient", 3, "click"], ["matTooltip", "Remove yourself from this project", 1, "setting_title", "text_gradient", 3, "click"], ["matTooltip", "This feature is available for paid plans only", 1, "setting_title", "text_gradient", 3, "click"], ["class", "setting_title text_gradient", "matTooltip", "If you're done with this project but want to keep it around. Prevents any more time from being logged.", 3, "click", 4, "ngIf"], ["class", "setting_title text_gradient", "matTooltip", "Restore the project", 3, "click", 4, "ngIf"], ["matTooltip", "Permanently delete the project", 1, "setting_title", "text-danger", 3, "click"], ["src", "../../../../assets/images/icon/trash.svg", "alt", ""], [1, "mb-5", "text-start"], [1, "d-flex", "flex-wrap", "project_detail"], [1, "me-3"], [1, "d-flex"], [1, "badge", "bg-success"], [1, "project_detail_2"], [1, "d-flex", "align-items-center"], [1, ""], [1, "d-block"], [1, "d-flex", "m-0", "align-items-center"], [1, "m-0", 2, "margin-right", "30px !important"], [1, "btn_dark_border", 3, "click"], [1, "d-flex", "justify-content-between"], [1, "dashboars_tabs", "mb-5"], [1, "nav", "nav-tabs", "tab_design_one"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#members", 1, "nav-link", "active", 3, "click"], ["data-bs-toggle", "tab", "href", "#teams", 1, "nav-link", 3, "click"], ["class", "btn_blue", 3, "click", 4, "ngIf"], [1, "tab-content"], ["id", "members", 1, "tab-pane", "active"], [3, "tableColsDetails", "tableDataArray", "actionMenu", "roleDetails", "tdClickEmitter"], ["id", "teams", 1, "tab-pane", "fade"], [3, "tableColsDetails", "tableDataArray", "actionMenu", "tdClickEmitter"], ["matTooltip", "If you're done with this project but want to keep it around. Prevents any more time from being logged.", 1, "setting_title", "text_gradient", 3, "click"], ["matTooltip", "Restore the project", 1, "setting_title", "text_gradient", 3, "click"], [1, "btn_blue", 3, "click"]],
    template: function ProjectDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 0)(2, "div")(3, "div", 1)(4, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 4)(8, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectDetailComponent_Template_h5_click_8_listener() {
          return ctx.editProject("general");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectDetailComponent_Template_h5_click_11_listener() {
          return ctx.duplicateProject();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, " Duplicate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectDetailComponent_Template_h5_click_14_listener() {
          return ctx.leaveProject();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, " Leave ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectDetailComponent_Template_h5_click_17_listener() {
          return ctx.transferProject();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, " Transfer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, ProjectDetailComponent_h5_20_Template, 3, 0, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, ProjectDetailComponent_h5_21_Template, 3, 0, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectDetailComponent_Template_h5_click_22_listener() {
          return ctx.deleteProject();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "BA");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 15)(28, "div", 16)(29, "div", 17)(30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "Client: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 17)(35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "Status: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "div", 19)(40, "div", 17)(41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "Last Active: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "Thu, Sep 1, 2022 3:20 pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 17)(46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "Billable: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "div", 20)(51, "div", 21)(52, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53, "Budget: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "div", 23)(55, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectDetailComponent_Template_button_click_57_listener() {
          return ctx.editProject("budget");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58, "Edit Budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "div", 17)(60, "div", 21)(61, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62, "No to-dos");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "div", 26)(64, "div", 27)(65, "ul", 28)(66, "li", 29)(67, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectDetailComponent_Template_a_click_67_listener() {
          return ctx.TabChange("members");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68, "Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "li", 29)(70, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectDetailComponent_Template_a_click_70_listener() {
          return ctx.TabChange("teams");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](71, "Teams");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](73, ProjectDetailComponent_button_73_Template, 2, 0, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](74, ProjectDetailComponent_button_74_Template, 2, 0, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "div")(76, "div", 33)(77, "div", 34)(78, "TrackerX-dynamic-table", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("tdClickEmitter", function ProjectDetailComponent_Template_TrackerX_dynamic_table_tdClickEmitter_78_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "div", 36)(80, "TrackerX-dynamic-table", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("tdClickEmitter", function ProjectDetailComponent_Template_TrackerX_dynamic_table_tdClickEmitter_80_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.archivedProject);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.archivedProject);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.EditProjectMemberBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.EditProjectTeamBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("tableColsDetails", ctx.projectDetailMemberTableCols)("tableDataArray", ctx.projectDetailMemberArray)("actionMenu", ctx.projectDetailMemberActionMenu)("roleDetails", ctx.projectRoleDetailsMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("tableColsDetails", ctx.projectDetailTeamTableCols)("tableDataArray", ctx.projectDetailTeamArray)("actionMenu", ctx.projectDetailTeamActionMenu);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_7__.DynamicTableComponent, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__.LoaderComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip],
    styles: ["h5[_ngcontent-%COMP%] {\r\n  font-size: 14px !important;\r\n  margin-left: 35px !important;\r\n}\r\n.btn_dark_border[_ngcontent-%COMP%]:hover{\r\n  color: white;\r\n}"]
  });
  return ProjectDetailComponent;
})();

/***/ }),

/***/ 27118:
/*!***********************************************************************!*\
  !*** ./src/app/pages/project-management/project/project.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectComponent": () => (/* binding */ ProjectComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_pop_up_model_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/pop-up-model/add-project/add-project.component */ 93636);
/* harmony import */ var src_app_core_model_table_header_data_project_management__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/model/table-header-data/project-management */ 30232);
/* harmony import */ var src_app_shared_pop_up_model_duplicate_project_model_duplicate_project_model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pop-up-model/duplicate-project-model/duplicate-project-model.component */ 29246);
/* harmony import */ var src_app_shared_pop_up_model_confirmation_model_confirmation_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pop-up-model/confirmation-model/confirmation-model.component */ 59925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var src_app_core_services_project_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/project-management.service */ 56014);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 97392);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/loader/loader.component */ 89047);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 28255);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);



















function ProjectComponent_div_24_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProjectComponent_div_24_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.BatchAction("archive"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function ProjectComponent_div_24_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProjectComponent_div_24_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r9.BatchAction("restore"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Restore");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function ProjectComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Batch Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-menu", null, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ProjectComponent_div_24_button_6_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ProjectComponent_div_24_button_7_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matMenuTriggerFor", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.tabType == "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.tabType == "archived");
  }
}

function ProjectComponent_ng_template_30_th_1_p_tableHeaderCheckbox_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-tableHeaderCheckbox", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProjectComponent_ng_template_30_th_1_p_tableHeaderCheckbox_1_Template_p_tableHeaderCheckbox_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.TdClickEvent({
        event: "allCheckBoxSelected",
        checked: $event.target["ariaChecked"]
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function ProjectComponent_ng_template_30_th_1_span_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function ProjectComponent_ng_template_30_th_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ProjectComponent_ng_template_30_th_1_span_2_span_2_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", col_r13.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", col_r13 == null ? null : col_r13.config == null ? null : col_r13.config.isHeaderInfoIcon);
  }
}

function ProjectComponent_ng_template_30_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ProjectComponent_ng_template_30_th_1_p_tableHeaderCheckbox_1_Template, 1, 0, "p-tableHeaderCheckbox", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ProjectComponent_ng_template_30_th_1_span_2_Template, 3, 2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", col_r13 == null ? null : col_r13.config == null ? null : col_r13.config.isCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(col_r13 == null ? null : col_r13.config == null ? null : col_r13.config.isCheckbox));
  }
}

function ProjectComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ProjectComponent_ng_template_30_th_1_Template, 3, 2, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", columns_r11);
  }
}

function ProjectComponent_ng_template_31_td_1_p_tableCheckbox_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p-tableCheckbox", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProjectComponent_ng_template_31_td_1_p_tableCheckbox_1_Template_p_tableCheckbox_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
      const rowData_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r30.TdClickEvent({
        element: rowData_r20,
        event: "checkBoxChecked",
        checked: $event.target["ariaChecked"]
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const rowData_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", rowData_r20);
  }
}

function ProjectComponent_ng_template_31_td_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 30)(1, "span", 30)(2, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const col_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const rowData_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](rowData_r20[col_r23.key].toUpperCase().charAt(0));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r20[col_r23.key], " ");
  }
}

function ProjectComponent_ng_template_31_td_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 40)(1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const rowData_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r20[col_r23.key], "");
  }
}

function ProjectComponent_ng_template_31_td_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const rowData_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](rowData_r20["cssClass"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r20[col_r23.key], "");
  }
}

function ProjectComponent_ng_template_31_td_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const rowData_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](rowData_r20[col_r23.key] ? rowData_r20[col_r23.key] : "None");
  }
}

function ProjectComponent_ng_template_31_td_1_span_6_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProjectComponent_ng_template_31_td_1_span_6_button_5_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r47);
      const action_r44 = restoredCtx.$implicit;
      const rowData_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r45.TdClickEvent({
        element: rowData_r20,
        event: action_r44.event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const action_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](action_r44.label);
  }
}

function ProjectComponent_ng_template_31_td_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span")(1, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-menu", null, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ProjectComponent_ng_template_31_td_1_span_6_button_5_Template, 2, 1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4);

    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matMenuTriggerFor", _r42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r29.actionMenu);
  }
}

function ProjectComponent_ng_template_31_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ProjectComponent_ng_template_31_td_1_p_tableCheckbox_1_Template, 1, 1, "p-tableCheckbox", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ProjectComponent_ng_template_31_td_1_span_2_Template, 5, 2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ProjectComponent_ng_template_31_td_1_span_3_Template, 4, 1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ProjectComponent_ng_template_31_td_1_span_4_Template, 2, 3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ProjectComponent_ng_template_31_td_1_span_5_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ProjectComponent_ng_template_31_td_1_span_6_Template, 6, 2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", col_r23 == null ? null : col_r23.config == null ? null : col_r23.config.isCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (col_r23.config == null ? null : col_r23.config.isProfileWithLetter) && !(col_r23.config == null ? null : col_r23.config.isProfile) && !(col_r23.config == null ? null : col_r23.config.isProfileActive) && !(col_r23.config == null ? null : col_r23.config.isBadge) && !(col_r23.config == null ? null : col_r23.config.isProject_todo));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", col_r23.config == null ? null : col_r23.config.isProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", col_r23.config == null ? null : col_r23.config.isStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", col_r23.config == null ? null : col_r23.config.isText);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", col_r23 == null ? null : col_r23.config == null ? null : col_r23.config.isAction);
  }
}

function ProjectComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ProjectComponent_ng_template_31_td_1_Template, 7, 6, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const rowData_r20 = ctx.$implicit;
    const columns_r21 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pSelectableRow", rowData_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", columns_r21);
  }
}

function ProjectComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " No records found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const columns_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("colspan", columns_r48.length);
  }
}

const _c0 = function () {
  return [10, 25, 50];
};

let ProjectComponent = /*#__PURE__*/(() => {
  class ProjectComponent {
    constructor(matDialog, masterService, projectService) {
      this.matDialog = matDialog;
      this.masterService = masterService;
      this.projectService = projectService;
      this.projectListResponse = {};
      this.organizationDetails = {};
      this.activeProjectCols = src_app_core_model_table_header_data_project_management__WEBPACK_IMPORTED_MODULE_1__.activeProjectTable;
      this.actionMenu = src_app_core_model_table_header_data_project_management__WEBPACK_IMPORTED_MODULE_1__.activeProjectActionMenus;
      this.projectListArray = [];
      this.selectedCheckBox = [];
      this.tabType = 'active';
      this.start = 1;
      this.limit = 25;
      this.totalRecords = 0;
      this.filterData = {
        name: ''
      };
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.GetActiveProject();
    }

    ProjectSearch() {
      this.filterData['name'] = this.searchProject;

      if (this.tabType == 'active') {
        this.GetActiveProject();
        this.actionMenu = src_app_core_model_table_header_data_project_management__WEBPACK_IMPORTED_MODULE_1__.activeProjectActionMenus;
      } else {
        this.GetArchiveProject();
        this.actionMenu = src_app_core_model_table_header_data_project_management__WEBPACK_IMPORTED_MODULE_1__.archiveProjectActionMenus;
      }
    }

    GetActiveProject() {
      this.projectListArray = [];
      this.masterService.showSpppiner();
      this.projectService.GetProjects(this.organizationDetails['_id'], this.start, this.limit, true, this.filterData).subscribe(response => {
        this.masterService.hideSppiner();

        if (response && response.ReturnCode == 200 && response.err == 0) {
          this.projectListResponse = response;

          if (this.projectListResponse && this.projectListResponse['Data'].list && this.projectListResponse['Data'].list.length > 0) {
            this.projectListResponse['Data'].list.filter(x => {
              x['redirectTo'] = '/project-management/project-detail/' + x._id;
            });
            this.totalRecords = this.projectListResponse['Data'].count;
            this.projectListArray = this.projectListResponse['Data'].list;
          } else {
            this.masterService.hideSppiner();
          }
        } else {
          this.totalRecords = 0;
          this.masterService.hideSppiner();
        }
      }, error => {
        this.masterService.showError(error.error.ReturnMsg, 'Error');
        this.masterService.hideSppiner();
      });
    }

    GetArchiveProject() {
      this.projectListArray = [];
      this.masterService.showSpppiner();
      this.projectService.GetProjects(this.organizationDetails['_id'], this.start, this.limit, false, this.filterData).subscribe(response => {
        if (response && response.ReturnCode == 200 && response.err == 0) {
          this.masterService.hideSppiner();

          if (response && response['Data'].list && response['Data'].list.length > 0) {
            this.projectListArray = response.Data.list;
            this.totalRecords = response.Data.count;
            response['Data'].list.filter(x => {
              x['redirectTo'] = '/project-management/project-detail/' + x._id;
            });
          } else {
            this.totalRecords = 0;
            this.masterService.hideSppiner();
          }
        } else {
          this.totalRecords = 0;
          this.masterService.hideSppiner();
        }
      }, error => {
        this.masterService.showError(error.error.ReturnMsg, 'Error');
        this.masterService.hideSppiner();
      });
    }

    AddToArchiveProject(projectIdList) {
      const confirmationDialog = this.matDialog.open(src_app_shared_pop_up_model_confirmation_model_confirmation_model_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmationModelComponent, {
        data: {
          message: 'Are sure want to archive this project?'
        }
      });
      confirmationDialog.afterClosed().subscribe(result => {
        if (result == true) {
          this.masterService.showSpppiner();
          let project = {
            project_id: projectIdList,
            status: false
          };
          this.projectService.ArchiveRestoreProject(this.organizationDetails['_id'], project).subscribe(response => {
            this.masterService.hideSppiner();

            if (response && response.ReturnCode == 200 && response.err == 0) {
              this.masterService.showSuccess(response.ReturnMsg, 'Success');
              this.GetActiveProject();
              this.selectedCheckBox = [];
            } else {
              this.masterService.hideSppiner();
              this.masterService.showError(response.ReturnMsg, "Error");
            }
          }, error => {
            this.masterService.hideSppiner();
            this.masterService.showError(error.error.ReturnMsg, 'Error');
          });
        }
      });
    }

    RestoreProject(projectIdList) {
      const confirmationDialog = this.matDialog.open(src_app_shared_pop_up_model_confirmation_model_confirmation_model_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmationModelComponent, {
        data: {
          message: 'Are sure want to restore this project?'
        }
      });
      confirmationDialog.afterClosed().subscribe(result => {
        if (result == true) {
          this.masterService.showSpppiner();
          let project = {
            project_id: projectIdList,
            status: true
          };
          this.projectService.ArchiveRestoreProject(this.organizationDetails['_id'], project).subscribe(response => {
            if (response && response.ReturnCode == 200 && response.err == 0) {
              this.masterService.hideSppiner();
              this.masterService.showSuccess(response.ReturnMsg, 'Success');
              this.GetArchiveProject();
              this.selectedCheckBox = [];
            } else {
              this.masterService.hideSppiner();
              this.masterService.showError(response.ReturnMsg, 'Error');
            }
          }, error => {
            this.masterService.hideSppiner();
            this.masterService.showError(error.error.ReturnMsg, 'Error');
          });
          this.masterService.hideSppiner();
        }
      });
    }

    AddProject() {
      let element = {
        currentFragment: 'general'
      };
      const addEditProjectDialog = this.matDialog.open(src_app_shared_pop_up_model_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_0__.AddProjectComponent, {
        width: '870px',
        data: element
      });
      addEditProjectDialog.afterClosed().subscribe(result => {
        if (result) this.GetActiveProject();
      });
    }

    TdClickEvent(event) {
      if (event.event == 'duplicateProject') {
        this.OnDuplicateProject(event);
      } else if (event.event == 'archiveProject') {
        let projectIdList = [];
        projectIdList.push(event.element._id);
        this.AddToArchiveProject(projectIdList);
      } else if (event.event == 'restoreProject') {
        let projectIdList = [];
        projectIdList.push(event.element._id);
        this.RestoreProject(projectIdList);
      } else if (event.event == 'transfer') {} else if (event.event == 'editProject') {
        this.OnRowSelect(event);
      } else if (event.event == 'deleteProject') {
        this.DeleteProject(event.element._id);
      } else if (event.event == "checkBoxChecked") {
        this.checkBoxEvent(event);
      } else if (event.event == "allCheckBoxSelected") {
        this.allCheckBoxSelected(event);
      }
    } // method call on header checkbox selected


    allCheckBoxSelected(event) {
      this.selectedCheckBox = [];

      if (event.checked == 'true') {
        this.projectListArray.forEach((project, i) => {
          this.selectedCheckBox.push(project._id);
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
        if (action == "archive") {
          this.AddToArchiveProject(this.selectedCheckBox);
        } else if (action == "restore") {
          this.RestoreProject(this.selectedCheckBox);
        }
      }
    }

    OnDuplicateProject(event) {
      const duplicateProjectDialog = this.matDialog.open(src_app_shared_pop_up_model_duplicate_project_model_duplicate_project_model_component__WEBPACK_IMPORTED_MODULE_2__.DuplicateProjectModelComponent, {
        width: '870px',
        data: event.element
      });
      duplicateProjectDialog.afterClosed().subscribe(result => {
        if (result) this.GetActiveProject();
      });
    }

    DeleteProject(projectId) {
      const confirmationDialog = this.matDialog.open(src_app_shared_pop_up_model_confirmation_model_confirmation_model_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmationModelComponent, {
        data: {
          message: 'Are sure want to delete this project?'
        }
      });
      confirmationDialog.afterClosed().subscribe(result => {
        if (result == true) {
          this.masterService.showSpppiner();
          this.projectService.DeleteProject(this.organizationDetails['_id'], projectId).subscribe(response => {
            if (response && response.ReturnCode == 200 && response.err == 0) {
              this.masterService.showSuccess(response.ReturnMsg, 'Success');
              this.masterService.hideSppiner();
              this.GetActiveProject();
            } else {
              this.masterService.hideSppiner();
              this.masterService.showError(response.ReturnMsg, 'Error');
            }
          }, error => {
            this.masterService.hideSppiner();
            this.masterService.showError(error.error.ReturnMsg, 'Error');
          });
        }
      });
    }

    TabClick(type) {
      if (type == 'active') {
        this.tabType = type;
        this.GetActiveProject();
        this.actionMenu = src_app_core_model_table_header_data_project_management__WEBPACK_IMPORTED_MODULE_1__.activeProjectActionMenus;
      } else {
        this.tabType = type;
        this.GetArchiveProject();
        this.actionMenu = src_app_core_model_table_header_data_project_management__WEBPACK_IMPORTED_MODULE_1__.archiveProjectActionMenus;
      }
    }

    OnPageChange(event) {
      const pageNumber = Math.round(event.first / event.rows) + 1;
      this.start = pageNumber;
      this.limit = event.rows;

      if (this.tabType == 'active') {
        this.GetActiveProject();
        this.actionMenu = src_app_core_model_table_header_data_project_management__WEBPACK_IMPORTED_MODULE_1__.activeProjectActionMenus;
      } else {
        this.GetArchiveProject();
        this.actionMenu = src_app_core_model_table_header_data_project_management__WEBPACK_IMPORTED_MODULE_1__.archiveProjectActionMenus;
      }
    }

    OnRowSelect(event) {
      this.selectedProject = event.element;
      this.selectedProject['currentFragment'] = 'general';
      this.selectedProject['method'] = 'edit';
      const addEditProjectDialog = this.matDialog.open(src_app_shared_pop_up_model_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_0__.AddProjectComponent, {
        width: '870px',
        data: this.selectedProject
      });
      addEditProjectDialog.afterClosed().subscribe(result => {
        if (result) this.GetActiveProject();
      });
    }

  }

  ProjectComponent.ɵfac = function ProjectComponent_Factory(t) {
    return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_project_management_service__WEBPACK_IMPORTED_MODULE_5__.ProjectManagementService));
  };

  ProjectComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: ProjectComponent,
    selectors: [["app-project"]],
    decls: 33,
    vars: 14,
    consts: [[1, "white_box", "main_content"], [1, "top_title_wrap"], [1, "row", "align-items-center"], [1, "col-md-4"], [1, "mb-0"], [1, "nav", "nav-tabs", "tab_design_one"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#active", 1, "nav-link", "active", 3, "click"], ["data-bs-toggle", "tab", "href", "#archived", 1, "nav-link", 3, "click"], [1, "d-flex", "justify-content-between", "my-5"], [1, "d-flex"], ["appearance", "fill", 1, "example-form-field"], ["matInput", "", "type", "text", "placeholder", "Search projects", 3, "ngModel", "ngModelChange", "keyup"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear"], [1, "ps-2"], [4, "ngIf"], [1, "btn_blue", "mx-2", 3, "click"], [1, "project_table_detail_wrap"], ["responsiveLayout", "scroll", 3, "columns", "value", "paginator", "rows", "rowsPerPageOptions", "totalRecords", "showCurrentPageReport", "currentPageReportTemplate", "lazy", "rowHover", "resizableColumns", "onPage"], ["pTemplate", "header", "stickyHeader", "true"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "btn_blue_border", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], [4, "ngFor", "ngForOf"], [3, "click", 4, "ngIf"], ["class", "d-flex align-items-center", 4, "ngIf"], [3, "click"], [1, "d-flex", "align-items-center"], ["matTooltip", "Info about the action", 4, "ngIf"], ["matTooltip", "Info about the action"], ["src", "../../../assets/images/icon/info.svg", "alt", ""], [3, "pSelectableRow"], [3, "value", "click", 4, "ngIf"], ["class", "member_title_wrap", 4, "ngIf"], ["class", "badge", 3, "class", 4, "ngIf"], [3, "value", "click"], [1, "user_custom_img", "orange"], [1, "member_title_wrap"], [1, "user_img"], ["src", "../../../assets/images/user-img.svg", "alt", "user", 1, "me-1"], [1, "badge"], [1, "btn", "btn-sm", "drop_menu_dot", 3, "matMenuTriggerFor"], ["src", "../../../assets/images/icon/dots.svg", "alt", ""], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "text-center"]],
    template: function ProjectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div")(8, "ul", 5)(9, "li", 6)(10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProjectComponent_Template_a_click_10_listener() {
          return ctx.TabClick("active");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "li", 6)(13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProjectComponent_Template_a_click_13_listener() {
          return ctx.TabClick("archived");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Archived");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div")(18, "mat-form-field", 11)(19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ProjectComponent_Template_input_ngModelChange_19_listener($event) {
          return ctx.searchProject = $event;
        })("keyup", function ProjectComponent_Template_input_keyup_19_listener() {
          return ctx.ProjectSearch();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "button", 13)(21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, ProjectComponent_div_24_Template, 8, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div")(26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProjectComponent_Template_button_click_26_listener() {
          return ctx.AddProject();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Add Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 17)(29, "p-table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onPage", function ProjectComponent_Template_p_table_onPage_29_listener($event) {
          return ctx.OnPageChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, ProjectComponent_ng_template_30_Template, 2, 1, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, ProjectComponent_ng_template_31_Template, 2, 2, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, ProjectComponent_ng_template_32_Template, 3, 1, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.searchProject);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selectedCheckBox.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("currentPageReportTemplate", "Showing {last} of ", ctx.totalRecords, " projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("columns", ctx.activeProjectCols)("value", ctx.projectListArray)("paginator", true)("rows", ctx.limit)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](13, _c0))("totalRecords", ctx.totalRecords)("showCurrentPageReport", true)("lazy", true)("rowHover", true)("resizableColumns", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent, primeng_table__WEBPACK_IMPORTED_MODULE_14__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_15__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_14__.SelectableRow, primeng_table__WEBPACK_IMPORTED_MODULE_14__.TableCheckbox, primeng_table__WEBPACK_IMPORTED_MODULE_14__.TableHeaderCheckbox, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuTrigger, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip],
    styles: [".project_table_detail_wrap table.p-datatable-table .p-datatable-thead th:first-child {\r\n  width: 50px;\r\n}\r\n  .p-paginator .p-paginator-current {\r\n  margin-right: auto;\r\n}"]
  });
  return ProjectComponent;
})();

/***/ }),

/***/ 20755:
/*!*********************************************************************!*\
  !*** ./src/app/pages/project-management/to-dos/to-dos.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDosComponent": () => (/* binding */ ToDosComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 15439);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_core_model_table_header_data_project_management__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/model/table-header-data/project-management */ 30232);
/* harmony import */ var src_app_shared_pop_up_model_add_edit_todo_add_edit_todo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pop-up-model/add-edit-todo/add-edit-todo.component */ 29093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var src_app_core_services_project_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/project-management.service */ 56014);
/* harmony import */ var src_app_core_services_organization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/organization.service */ 14261);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 97392);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/dynamic-table/dynamic-table.component */ 57834);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 47873);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ 90455);


















function ToDosComponent_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const projects_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", projects_r2._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", projects_r2.name, " ");
  }
}

function ToDosComponent_mat_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const member_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", member_r3._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", member_r3.name, " ");
  }
}

let ToDosComponent = /*#__PURE__*/(() => {
  class ToDosComponent {
    constructor(formBuilder, masterService, projectService, organizationService, matDialog) {
      this.formBuilder = formBuilder;
      this.masterService = masterService;
      this.projectService = projectService;
      this.organizationService = organizationService;
      this.matDialog = matDialog;
      this.showCompleted = false;
      this.intergration = '';
      this.searchMembersValue = '';
      this.organizationDetails = {};
      this.start = 1;
      this.limit = 25;
      this.totalRecords = 0;
      this.membersListResponse = {};
      this.todoResponse = {};
      this.membersListArray = [];
      this.toDosCols = src_app_core_model_table_header_data_project_management__WEBPACK_IMPORTED_MODULE_1__.toDosTable;
      this.todoArray = [];
      this.actionMenu = src_app_core_model_table_header_data_project_management__WEBPACK_IMPORTED_MODULE_1__.toDosActionMenus;
      this.projectListArray = [];
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.filterForm = this.formBuilder.group({
        project: [''],
        assignee: ['']
      });
      this.GetActiveProject();
    }

    TdClickEvent(event) {
      if (event.event == 'edit') {
        this.editTodo(event);
      } else if (event.event == 'markAsCompleted') {
        this.UpdateStatus(event);
      } else if (event.event == 'delete') {
        this.DeleteTodo(event);
      } else if (event.event == 'markAsReopen') {
        this.UpdateStatus(event);
      }
    }

    GetActiveProject() {
      this.projectListArray = [];
      this.masterService.showSpppiner();
      this.projectService.GetProjects(this.organizationDetails['_id'], this.start, this.limit, true, {}).subscribe(response => {
        if (response && response.ReturnCode == 200 && response.err == 0) {
          this.masterService.hideSppiner();
          this.projectListArray = response.Data.list;
          this.totalRecords = response.Data.count;
          this.filterForm.patchValue({
            project: this.projectListArray[0]._id
          });
          this.GetTodo();
          this.GetMember();
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
      this.masterService.showSpppiner();
      this.projectService.GetProjectById(this.organizationDetails['_id'], this.filterForm.value['project']).subscribe(response => {
        if (response && response.ReturnCode == 200 && response.err == 0) {
          this.membersListResponse = response;
          this.masterService.hideSppiner();

          if (this.membersListResponse) {
            this.membersListArray = [];
            this.membersListResponse['Data'].managers.forEach(element => {
              this.membersListArray.push(element);
            });
            this.membersListResponse['Data'].users.forEach(element => {
              this.membersListArray.push(element);
            });
            this.membersListResponse['Data'].viewers.forEach(element => {
              this.membersListArray.push(element);
            }); // this.membersListArray = this.membersListResponse['Data'][0].member;
          }
        } else {
          this.masterService.showError(response.ReturnMsg, 'Error');
          this.masterService.hideSppiner();
        }
      }, error => {
        this.masterService.hideSppiner();
        this.masterService.showError(error.error.ReturnMsg, 'Error');
      });
    }

    GetTodo() {
      let filterData = {
        assignne_id: this.filterForm.value['assignee'],
        title: this.searchMembersValue,
        completed: this.showCompleted
      };
      this.todoArray = [];
      this.todoResponse = {};
      this.projectService.GetTodo(this.filterForm.value['project'], filterData, this.start, this.limit).subscribe(response => {
        if (response && response.ReturnCode == 200 && response.err == 0) {
          this.todoResponse = response;

          if (this.todoResponse['Data'].list.length > 0) {
            this.todoResponse['Data'].list.forEach(element => {
              this.todoArray.push({ ...element,
                created_at: moment__WEBPACK_IMPORTED_MODULE_0__(element.created_at).format('llll')
              });
            });
            this.totalRecords = this.todoResponse['Data'].count;
          } else {
            // this.masterService.showError(response.ReturnMsg, 'Error');
            this.totalRecords = 0;
            this.masterService.hideSppiner();
          }
        } else {
          // this.masterService.showError(response.ReturnMsg, 'Error');
          this.totalRecords = 0;
          this.masterService.hideSppiner();
        }
      }, error => {
        this.masterService.hideSppiner();
        this.masterService.showError(error.error.ReturnMsg, 'Error');
      });
    }

    searchTodos(event) {
      let data = {
        search: event.target.value
      };
    }

    addTodo() {
      let data = {
        newData: true,
        projectId: this.filterForm.value.project
      };
      const addEditTodoModel = this.matDialog.open(src_app_shared_pop_up_model_add_edit_todo_add_edit_todo_component__WEBPACK_IMPORTED_MODULE_2__.AddEditTodoComponent, {
        height: '900px',
        width: '600px',
        data: data
      }).afterClosed().subscribe(result => {
        if (result == true) {
          this.ngOnInit();
        }
      });
    }

    DeleteTodo(event) {
      let todoId = event.element._id;
      this.masterService.showSpppiner();
      this.projectService.DeleteTodo(todoId).subscribe(response => {
        if (response && response.ReturnCode == 200 && response.err == 0) {
          this.GetTodo();
          this.masterService.hideSppiner();
          this.masterService.showSuccess(response.ReturnMsg, 'Success');
        } else {
          this.masterService.showError(response.ReturnMsg, 'Error');
          this.masterService.hideSppiner();
        }
      }, error => {
        this.masterService.hideSppiner();
        this.masterService.showError(error.error.ReturnMsg, 'Error');
      });
    }

    editTodo(event) {
      let data = {
        newData: false,
        projectId: this.filterForm.value.project,
        todo_id: event.element._id
      };
      const addEditTodoModel = this.matDialog.open(src_app_shared_pop_up_model_add_edit_todo_add_edit_todo_component__WEBPACK_IMPORTED_MODULE_2__.AddEditTodoComponent, {
        height: '900px',
        width: '600px',
        data: data
      }).afterClosed().subscribe(result => {
        if (result == true) {
          this.ngOnInit();
        }
      });
    }

    UpdateStatus(event) {
      console.log(event);
      let body = {};
      if (event.event == 'markAsCompleted') body = {
        completed: true,
        _id: event.element._id
      };else if (event.event == 'markAsReopen') body = {
        completed: false,
        _id: event.element._id
      };
      this.projectService.UpdateTodo(body).subscribe(response => {
        console.log(response);

        if (response && response.ReturnCode == 200 && response.err == 0) {
          this.GetTodo();
          this.masterService.hideSppiner();
          this.masterService.showSuccess(response.ReturnMsg, "Success");
        } else {
          this.masterService.hideSppiner();
          this.masterService.showSuccess(response.ReturnMsg, "Success");
        }
      }, error => {
        this.masterService.hideSppiner();
        this.masterService.showError(error.error.ReturnMsg, 'Error');
      });
    }

    OnPageChange(event) {
      const pageNumber = Math.round(event.first / event.rows) + 1;
      this.start = pageNumber;
      this.limit = event.rows;
    }

  }

  ToDosComponent.ɵfac = function ToDosComponent_Factory(t) {
    return new (t || ToDosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_3__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_project_management_service__WEBPACK_IMPORTED_MODULE_4__.ProjectManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_organization_service__WEBPACK_IMPORTED_MODULE_5__.OrganizationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog));
  };

  ToDosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: ToDosComponent,
    selectors: [["app-to-dos"]],
    decls: 43,
    vars: 10,
    consts: [[1, "white_box", "main_content"], [1, "top_title_wrap"], [1, "row", "align-items-center"], [1, "col-md-9"], [1, "mb-0"], [1, "to_does_form_wrap"], [3, "formGroup"], [1, "row", "justify-content-between", "align-items-end", "mb-5"], [1, "col-md-4"], [1, "mb-3"], ["for", "project"], ["appearance", "fill"], ["formControlName", "project", "name", "project", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "assignee"], ["formControlName", "assignee", "name", "assignee", 3, "selectionChange"], ["value", ""], [1, "col-md-4", "col-full"], [1, "mb-3", "text-end"], [1, "btn_blue", "mx-2", 3, "click"], [3, "ngModel", "ngModelChange", "change"], ["matInput", "", "type", "text", "name", "searchMembers", "id", "searchMembers", "placeholder", "Search To-do", 3, "ngModel", "ngModelChange", "keyup"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear"], ["tableName", "todos", 3, "tableColsDetails", "tableDataArray", "isPagination", "totalRecords", "actionMenu", "paginationEvent", "tdClickEmitter"], [3, "value"]],
    template: function ToDosComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "To-Dos");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 5)(7, "form", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-form-field", 11)(14, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function ToDosComponent_Template_mat_select_selectionChange_14_listener() {
          ctx.GetMember();
          return ctx.GetTodo();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, ToDosComponent_mat_option_15_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 8)(17, "div", 9)(18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Assignee");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-form-field", 11)(21, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function ToDosComponent_Template_mat_select_selectionChange_21_listener() {
          return ctx.GetTodo();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, ToDosComponent_mat_option_24_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 17)(26, "div", 18)(27, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ToDosComponent_Template_button_click_27_listener() {
          return ctx.addTodo();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Add A To-Dos");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 7)(30, "div", 8)(31, "div", 9)(32, "mat-slide-toggle", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ToDosComponent_Template_mat_slide_toggle_ngModelChange_32_listener($event) {
          return ctx.showCompleted = $event;
        })("change", function ToDosComponent_Template_mat_slide_toggle_change_32_listener() {
          return ctx.GetTodo();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Show completed to-dos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 8)(35, "div", 9)(36, "mat-form-field", 11)(37, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ToDosComponent_Template_input_ngModelChange_37_listener($event) {
          return ctx.searchMembersValue = $event;
        })("keyup", function ToDosComponent_Template_input_keyup_37_listener($event) {
          return ctx.searchTodos($event);
        })("keyup", function ToDosComponent_Template_input_keyup_37_listener() {
          return ctx.GetTodo();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "button", 22)(39, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div")(42, "TrackerX-dynamic-table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("paginationEvent", function ToDosComponent_Template_TrackerX_dynamic_table_paginationEvent_42_listener($event) {
          return ctx.OnPageChange($event);
        })("tdClickEmitter", function ToDosComponent_Template_TrackerX_dynamic_table_tdClickEmitter_42_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.projectListArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.membersListArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.showCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.searchMembersValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tableColsDetails", ctx.toDosCols)("tableDataArray", ctx.todoArray)("isPagination", true)("totalRecords", ctx.totalRecords)("actionMenu", ctx.actionMenu);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_6__.DynamicTableComponent, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__.MatSlideToggle]
  });
  return ToDosComponent;
})();

/***/ })

}]);