"use strict";
(self["webpackChunktracker"] = self["webpackChunktracker"] || []).push([[46],{

/***/ 6146:
/*!**********************************************************!*\
  !*** ./src/app/core/model/table-header-data/schedule.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "membersScheduleTable": () => (/* binding */ membersScheduleTable),
/* harmony export */   "timeOffRequestActionMenus": () => (/* binding */ timeOffRequestActionMenus),
/* harmony export */   "timeOffRequestTable": () => (/* binding */ timeOffRequestTable)
/* harmony export */ });
let membersScheduleTable = [{
  key: 'member',
  label: 'Member',
  config: {
    isProfile: true,
    isHeaderSwitch: true
  }
}, {
  key: '21',
  label: 'Fr 21 June',
  config: {
    isText: true,
    isTime: true
  }
}, {
  key: '22',
  label: 'Fr 22 June',
  config: {
    isText: true
  }
}, {
  key: '23',
  label: 'Fr 23 June',
  config: {
    isText: true
  }
}, {
  key: '24',
  label: 'Fr 24 June',
  config: {
    isText: true
  }
}, {
  key: '25',
  label: 'Fr 25 June',
  config: {
    isText: true
  }
}, {
  key: '26',
  label: 'Fr 26 June',
  config: {
    isText: true
  }
}, {
  key: 'total',
  label: 'Total',
  config: {
    isText: true
  }
}];
let timeOffRequestTable = [{
  key: 'member',
  label: 'Member',
  config: {
    isProfile: true
  }
}, {
  key: 'policy',
  label: 'Policy',
  config: {
    isText: true
  }
}, {
  key: 'startDate',
  label: 'Start',
  config: {
    isDate: true
  }
}, {
  key: 'endDate',
  label: 'End',
  config: {
    isDate: true
  }
}, {
  key: 'hoursRequested',
  label: 'Hours Requested',
  config: {
    isTime: true
  }
}, {
  key: 'status',
  label: 'Status',
  config: {
    isStatus: true
  }
}, {
  key: 'requestedIn',
  label: 'Requested In',
  config: {
    isDate: true
  }
}, {
  key: 'action',
  label: 'Action',
  config: {
    isAction: true
  }
}]; // action menus for Time Off Requests component

let timeOffRequestActionMenus = [{
  label: 'View',
  event: 'view',
  config: {
    isShow: true
  }
}, {
  label: 'Edit',
  event: 'edit',
  config: {
    isShow: true
  }
}, {
  label: 'Delete',
  event: 'Delete',
  config: {
    isShow: true
  }
}, {
  label: 'Approve',
  event: 'Approve',
  config: {
    isShow: true
  }
}, {
  label: 'Deny',
  event: 'deny',
  config: {
    isShow: true
  }
}];

/***/ }),

/***/ 34468:
/*!****************************************************************!*\
  !*** ./src/app/pages/schedules/calendar/calendar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarComponent": () => (/* binding */ CalendarComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material-moment-adapter */ 8277);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 47873);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fullcalendar/angular */ 76806);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 15439);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_core_model_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/model/common */ 18595);
/* harmony import */ var src_app_core_model_table_header_data_schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/model/table-header-data/schedule */ 6146);
/* harmony import */ var src_app_shared_pop_up_model_create_schedule_create_schedule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pop-up-model/create-schedule/create-schedule.component */ 5065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var src_app_core_services_organization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/organization.service */ 14261);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/date-time-range-picker/date-time-range-picker.component */ 96991);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ 90455);
























function CalendarComponent_mat_option_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const tz_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", tz_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", tz_r4.viewValue, " ");
  }
}

function CalendarComponent_mat_option_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const member_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", member_r5.user_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", member_r5.name, " ");
  }
}

function CalendarComponent_ng_template_69_th_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](col_r8.label);
  }
}

function CalendarComponent_ng_template_69_th_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span")(1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Show Unscheduled");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "mat-slide-toggle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", col_r8.label, " ");
  }
}

function CalendarComponent_ng_template_69_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CalendarComponent_ng_template_69_th_1_span_1_Template, 2, 1, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CalendarComponent_ng_template_69_th_1_span_3_Template, 6, 1, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(col_r8 == null ? null : col_r8.config == null ? null : col_r8.config.isHeaderSwitch));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", col_r8 == null ? null : col_r8.config == null ? null : col_r8.config.isHeaderSwitch);
  }
}

function CalendarComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CalendarComponent_ng_template_69_th_1_Template, 4, 2, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.membersCols);
  }
}

function CalendarComponent_ng_template_70_td_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const col_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const rowData_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", rowData_r13[col_r16.key], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](rowData_r13["time"]);
  }
}

function CalendarComponent_ng_template_70_td_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const rowData_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", rowData_r13[col_r16.key], " ");
  }
}

function CalendarComponent_ng_template_70_td_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const rowData_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r13[col_r16.key], "");
  }
}

function CalendarComponent_ng_template_70_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CalendarComponent_ng_template_70_td_1_span_1_Template, 4, 2, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CalendarComponent_ng_template_70_td_1_span_2_Template, 2, 1, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CalendarComponent_ng_template_70_td_1_span_3_Template, 3, 1, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (col_r16.config == null ? null : col_r16.config.isText) && (col_r16.config == null ? null : col_r16.config.isTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (col_r16.config == null ? null : col_r16.config.isText) && !(col_r16.config == null ? null : col_r16.config.isTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", col_r16.config == null ? null : col_r16.config.isProfile);
  }
}

function CalendarComponent_ng_template_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CalendarComponent_ng_template_70_td_1_Template, 4, 3, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r14 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", columns_r14);
  }
}

let CalendarComponent = /*#__PURE__*/(() => {
  class CalendarComponent {
    constructor(masterService, matDialog, formBuilder, organizationService) {
      this.masterService = masterService;
      this.matDialog = matDialog;
      this.formBuilder = formBuilder;
      this.organizationService = organizationService;
      this.date = moment__WEBPACK_IMPORTED_MODULE_0__(new Date()).format("dddd D MMMM ");
      this.timezoneList = [{
        value: 'ist',
        viewValue: 'IST'
      }];
      this.memberList = [{
        value: 'member1',
        viewValue: 'Member 1'
      }];
      this.membersCols = src_app_core_model_table_header_data_schedule__WEBPACK_IMPORTED_MODULE_2__.membersScheduleTable;
      this.membersValue = [{
        "member": 'John Doe',
        "21": 'Shift',
        time: '9:00am - 5:00pm',
        "22": '',
        "23": '',
        "24": '',
        "25": '',
        "26": '',
        "total": '4:06:59'
      }];
      this.Events = [];
      this.membersListArray = [];
      this.membersListResponse = {};
      this.organizationDetails = {};
      this.calendarOptions = {
        headerToolbar: false,
        hiddenDays: [0],
        initialView: 'timeGridWeek',
        allDaySlot: false,
        contentHeight: 'auto',
        slotDuration: '00:60:00',
        dayHeaderFormat: this.dayHeaderFormatUsingMoment,
        initialEvents: [{
          id: '1',
          title: "Shift",
          start: '2022-07-25T00:00:00',
          imageUrl: 'https://www.prosolarsystemsci.ky/wp-content/uploads/2016/04/placeholder.jpg'
        }, {
          id: '2',
          title: 'Shift',
          start: '2022-07-26T01:30:00',
          end: '2022-07-26T10:00:00'
        }, {
          id: '3',
          title: 'Shift',
          start: '2022-07-27T10:00:00',
          end: '2022-07-27T15:00:00'
        }, {
          id: '4',
          title: 'Shift',
          start: '2022-07-25T09:00:00',
          end: '2022-07-25T17:00:00'
        }],
        dateClick: this.OnDateClick.bind(this),
        events: this.Events // eventContent: function (eventInfo, element) {
        //   console.log(eventInfo);
        //   if (eventInfo.event._def.extendedProps.imageUrl) {
        //     element.find("div.fc-content").prepend("<img src='" + eventInfo.event._def.extendedProps.imageUrl + "' width='16' height='16'>");
        //   }
        // console.log('event', eventInfo)
        // var innerHtml;
        // // Check if event has image
        // if (eventInfo.event._def.extendedProps.imageUrl) {
        //   // Store custom html code in variable
        //   innerHtml = eventInfo.event._def.title + "<img style='width:100px;' src='" + eventInfo.event._def.extendedProps.imageUrl + "'>";
        //   //Event with rendering html
        //   let abc = '<div>' + innerHtml + '</div>';
        //   element.html(abc);
        // }
        // }
        // eventContent: this.renderEventContent

      };
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.calendarFilterForm = this.formBuilder.group({
        fromDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        todate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        timezone: [''],
        member: ['']
      });
      this.GetMember();
    }

    GetMember() {
      let data = {
        status: true
      };
      this.organizationService.GetOrganizationMember(this.organizationDetails['_id'], 1, 10, data).subscribe(response => {
        if (response && response.ReturnCode == 200 && response.err == 0) {
          this.membersListResponse = response;

          if (this.membersListResponse && this.membersListResponse['Data'].list.length > 0) {
            this.membersListArray = this.membersListResponse['Data'].list;
          }
        } else {
          this.masterService.showError(response.ReturnMsg, 'Error');
        }
      }, error => {
        this.masterService.showError(error.error.ReturnMsg, 'Error');
      });
    }

    OnDateClick(res) {
      let eventData = res.dateStr;
      const inviteteamMemberDialog = this.matDialog.open(src_app_shared_pop_up_model_create_schedule_create_schedule_component__WEBPACK_IMPORTED_MODULE_3__.CreateScheduleComponent, {
        width: '675px',
        height: '800px',
        data: eventData
      });
    }

    OnTabClick(tabType) {
      if (tabType == 'week') {
        this.fullCalendars.forEach(fullCalendar => fullCalendar.getApi().render()); // window.dispatchEvent(new Event('resize'));
      }
    }

    renderEventContent(eventInfo, element) {
      var innerHtml; // Check if event has image

      if (eventInfo.event._def.extendedProps.imageUrl) {
        // Store custom html code in variable
        innerHtml = eventInfo.event._def.title + "<img style='width:100px;' src='" + eventInfo.event._def.extendedProps.imageUrl + "'>"; //Event with rendering html

        let abc = '<div>' + innerHtml + '</div>';
        element.append(abc);
      }
    }

    dayHeaderFormatUsingMoment(info) {
      return moment__WEBPACK_IMPORTED_MODULE_0__(info.date.marker).format("dd D MMM "); //output : Tu 21 July
    }

    SelectedDateEvent(event) {
      const fromDate = event.fromDate;
      const toDate = event.toDate;

      if (fromDate && toDate) {
        this.calendarFilterForm.removeControl('date');
        this.calendarFilterForm.patchValue({
          fromDate: fromDate,
          todate: toDate
        });
      }

      this.ValueChange();
    }

    ValueChange() {
      this.calendarFilterForm = this.calendarFilterForm.value;
    }

    DateChange(day) {
      this.masterService.activityDateChangeData.next(day);
    }

    AddSchedule() {
      const inviteteamMemberDialog = this.matDialog.open(src_app_shared_pop_up_model_create_schedule_create_schedule_component__WEBPACK_IMPORTED_MODULE_3__.CreateScheduleComponent, {
        width: '850px',
        height: '800px'
      });
    }

  }

  CalendarComponent.ɵfac = function CalendarComponent_Factory(t) {
    return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_organization_service__WEBPACK_IMPORTED_MODULE_5__.OrganizationService));
  };

  CalendarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: CalendarComponent,
    selectors: [["app-calendar"]],
    viewQuery: function CalendarComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_10__.FullCalendarComponent, 5);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.fullCalendars = _t);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
      provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.DateAdapter,
      useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_12__.MomentDateAdapter,
      deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MAT_DATE_LOCALE, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_12__.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    }, {
      provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MAT_DATE_FORMATS,
      useValue: src_app_core_model_common__WEBPACK_IMPORTED_MODULE_1__.MY_FORMATS
    }])],
    decls: 100,
    vars: 12,
    consts: [[1, "white_box", "main_content"], [1, "top_title_wrap"], [1, "row", "align-items-center"], [1, "col-md-4"], [1, "mb-0"], [1, "nav", "nav-tabs", "common_tabs"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#members", 1, "nav-link", "active"], ["data-bs-toggle", "tab", "href", "#week", 1, "nav-link", 3, "click"], ["data-bs-toggle", "tab", "href", "#day", 1, "nav-link"], [1, "settings_btn", "text-end"], [1, "dropdown", "button_drop"], ["data-toggle", "dropdown", "type", "button", "id", "settingMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "text-secondary"], [1, "fa-solid", "fa-gear"], ["aria-labelledby", "settingMenuButton", 1, "dropdown-menu"], ["routerLink", "/settings/features/schedules", "fragment", "calendarType", 1, "dropdown-item"], ["routerLink", "/settings/features/timeOff", "fragment", "timeOffPolicies", 1, "dropdown-item"], ["routerLink", "/settings/features/timeOff", "fragment", "holidays", 1, "dropdown-item"], ["routerLink", "/settings/features/workBreaks", 1, "dropdown-item"], [1, "width_set_cal"], [3, "formGroup"], [1, "d-flex", "justify-content-between", "align-items-end", "mb-5", "flex-wrap"], [1, "left_date", "d-flex", "w-50", "flex-wrap"], [1, "date_select", "w-50", "me-3"], [3, "formControlFromDateNameValue", "formControlSelectedDateValue"], [1, "today_note"], [1, "btn_gray", 3, "click"], [1, "right_schedule", "d-flex", "w-50", "flex-wrap", "justify-content-end", "align-items-end"], [1, "w-25", "me-3"], ["for", "timezone"], ["appearance", "fill"], ["id", "timezone", "formControlName", "timezone", "name", "timezone"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "member"], ["id", "member", "formControlName", "member"], [1, "date-btn"], [1, "btn_blue_border", 3, "click"], [1, "tab-content"], ["id", "members", 1, "tab-pane", "active"], ["currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", "responsiveLayout", "scroll", 3, "columns", "value", "rows", "showCurrentPageReport", "rowHover", "resizableColumns"], ["pTemplate", "header"], ["pTemplate", "body"], ["id", "week", 1, "tab-pane", "fade"], ["id", "calendarEl", 3, "options"], ["id", "day", 1, "tab-pane", "fade"], [1, "light_blue_box"], [1, "col-md-6"], [1, "schedule_user_img"], ["src", "../../../../assets/images/user-img.svg", "alt", "user"], [1, "ms-2"], [1, "m-0"], [1, "schedule_right"], [1, "late_wrap"], [3, "value"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "member_title"], [1, "title_text"], ["class", "calender_date_select", 4, "ngIf"], [1, "calender_date_select"], ["src", "../../../assets/images/user-img.svg", "alt", "user", 1, "me-1"]],
    template: function CalendarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 3)(7, "ul", 5)(8, "li", 6)(9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "li", 6)(12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CalendarComponent_Template_a_click_12_listener() {
          return ctx.OnTabClick("week");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "li", 6)(15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 3)(18, "div", 10)(19, "div", 11)(20, "a", 12)(21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "ul", 14)(25, "li")(26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Schedule Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "li")(29, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Time Off Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "li")(32, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Holiday Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "li")(35, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Work Break Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 19)(38, "form", 20)(39, "div", 21)(40, "div", 22)(41, "div", 23)(42, "app-date-time-range-picker", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("formControlSelectedDateValue", function CalendarComponent_Template_app_date_time_range_picker_formControlSelectedDateValue_42_listener($event) {
          return ctx.SelectedDateEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 25)(44, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_44_listener() {
          return ctx.DateChange("today");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 27)(47, "div", 28)(48, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Timezone");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "mat-form-field", 30)(51, "mat-select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, CalendarComponent_mat_option_52_Template, 2, 2, "mat-option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 28)(54, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "mat-form-field", 30)(57, "mat-select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, CalendarComponent_mat_option_58_Template, 2, 2, "mat-option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 35)(60, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_60_listener() {
          return ctx.AddSchedule();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "Add Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 37)(64, "div", 38)(65, "div")(66, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, "Time Off And Holidays");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "p-table", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, CalendarComponent_ng_template_69_Template, 2, 1, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](70, CalendarComponent_ng_template_70_Template, 2, 1, "ng-template", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 42)(72, "div")(73, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74, "Time Off And Holidays");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](76, "full-calendar", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "div", 44)(78, "div")(79, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "div")(82, "div", 45)(83, "div", 2)(84, "div", 46)(85, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](86, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88, "Shift ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "div", 46)(92, "div", 51)(93, "div", 52)(94, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](95, "Late");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](97, "8 hours ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99, "9:00 am - 5:00 pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.calendarFilterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControlFromDateNameValue", ctx.calendarFilterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.timezoneList);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.membersListArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("columns", ctx.membersCols)("value", ctx.membersValue)("rows", 25)("showCurrentPageReport", true)("rowHover", true)("resizableColumns", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.calendarOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.date);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_10__.FullCalendarComponent, _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_6__.DateTimeRangePickerComponent, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, primeng_table__WEBPACK_IMPORTED_MODULE_17__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_18__.PrimeTemplate, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__.MatSlideToggle],
    styles: [".fc .fc-timegrid-slot {\r\n  height: 3em !important;\r\n}"]
  });
  return CalendarComponent;
})();

/***/ }),

/***/ 65817:
/*!*************************************************************!*\
  !*** ./src/app/pages/schedules/schedules-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulesRoutingModule": () => (/* binding */ SchedulesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar/calendar.component */ 34468);
/* harmony import */ var _time_off_requests_time_off_requests_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time-off-requests/time-off-requests.component */ 129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);





const routes = [{
  path: 'calendar',
  component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_0__.CalendarComponent
}, {
  path: 'time-off-requests',
  component: _time_off_requests_time_off_requests_component__WEBPACK_IMPORTED_MODULE_1__.TimeOffRequestsComponent
}, {
  path: '',
  redirectTo: 'calendar',
  pathMatch: 'full'
}];
let SchedulesRoutingModule = /*#__PURE__*/(() => {
  class SchedulesRoutingModule {}

  SchedulesRoutingModule.ɵfac = function SchedulesRoutingModule_Factory(t) {
    return new (t || SchedulesRoutingModule)();
  };

  SchedulesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: SchedulesRoutingModule
  });
  SchedulesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
  return SchedulesRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SchedulesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 95046:
/*!*****************************************************!*\
  !*** ./src/app/pages/schedules/schedules.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulesModule": () => (/* binding */ SchedulesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _schedules_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedules-routing.module */ 65817);
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar/calendar.component */ 34468);
/* harmony import */ var _time_off_requests_time_off_requests_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./time-off-requests/time-off-requests.component */ 129);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ 90455);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94650);











let SchedulesModule = /*#__PURE__*/(() => {
  class SchedulesModule {}

  SchedulesModule.ɵfac = function SchedulesModule_Factory(t) {
    return new (t || SchedulesModule)();
  };

  SchedulesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: SchedulesModule
  });
  SchedulesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _schedules_routing_module__WEBPACK_IMPORTED_MODULE_0__.SchedulesRoutingModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule, primeng_table__WEBPACK_IMPORTED_MODULE_8__.TableModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggleModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule]
  });
  return SchedulesModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SchedulesModule, {
    declarations: [_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_1__.CalendarComponent, _time_off_requests_time_off_requests_component__WEBPACK_IMPORTED_MODULE_2__.TimeOffRequestsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _schedules_routing_module__WEBPACK_IMPORTED_MODULE_0__.SchedulesRoutingModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule, primeng_table__WEBPACK_IMPORTED_MODULE_8__.TableModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__.MatSlideToggleModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule]
  });
})();

/***/ }),

/***/ 129:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/schedules/time-off-requests/time-off-requests.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeOffRequestsComponent": () => (/* binding */ TimeOffRequestsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 46758);
/* harmony import */ var src_app_core_model_table_header_data_schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/schedule */ 6146);
/* harmony import */ var src_app_shared_pop_up_model_add_holiday_add_holiday_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/add-holiday/add-holiday.component */ 82123);
/* harmony import */ var src_app_shared_pop_up_model_add_policy_add_policy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pop-up-model/add-policy/add-policy.component */ 94651);
/* harmony import */ var src_app_shared_pop_up_model_request_time_off_model_request_time_off_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pop-up-model/request-time-off-model/request-time-off-model.component */ 87372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var src_app_core_services_organization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/organization.service */ 14261);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/dynamic-table/dynamic-table.component */ 57834);
/* harmony import */ var _shared_p_chip_p_chip_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/p-chip/p-chip.component */ 11514);












let TimeOffRequestsComponent = /*#__PURE__*/(() => {
  class TimeOffRequestsComponent {
    constructor(matDialog, organizationService, masterService) {
      this.matDialog = matDialog;
      this.organizationService = organizationService;
      this.masterService = masterService;
      this.AllMembersValue = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
      this.members = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('');
      this.timeOffRequestTableCols = src_app_core_model_table_header_data_schedule__WEBPACK_IMPORTED_MODULE_0__.timeOffRequestTable;
      this.actionMenu = src_app_core_model_table_header_data_schedule__WEBPACK_IMPORTED_MODULE_0__.timeOffRequestActionMenus;
      this.dataArrayForTable = [{
        member: 'John Doe',
        policy: 'Abcd',
        startDate: 'Sat Apr 24, 2021',
        endDate: 'Th June 24, 2021',
        hoursRequested: '4:00:00',
        status: 'Submitted',
        requestedIn: 'We June 23, 2021',
        cssClass: 'bg-primary'
      }];
      this.allData = [{
        viewValue: 'Harsh',
        value: 'harsh'
      }];
      this.membersListArray = [];
      this.membersListResponse = {};
      this.organizationDetails = {};
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.GetMember();
    }

    GetMember() {
      let data = {
        status: true
      };
      this.organizationService.GetOrganizationMember(this.organizationDetails['_id'], 1, 10, data).subscribe(response => {
        if (response && response.ReturnCode == 200 && response.err == 0) {
          this.membersListResponse = response;

          if (this.membersListResponse && this.membersListResponse['Data'].list.length > 0) {
            this.membersListArray = this.membersListResponse['Data'].list;
            let newArray = [];
            this.membersListArray.forEach(element => {
              if (element.status) newArray.push({
                viewValue: element.name,
                value: element.user_id
              });
            });
            this.AllMembersValue.next(newArray);
          }
        } else {
          this.masterService.showError(response.ReturnMsg, 'Error');
        }
      }, error => {
        this.masterService.showError(error.error.ReturnMsg, 'Error');
      });
    }

    AddPolicy() {
      const inviteteamMemberDialog = this.matDialog.open(src_app_shared_pop_up_model_add_policy_add_policy_component__WEBPACK_IMPORTED_MODULE_2__.AddPolicyComponent, {
        width: '675px',
        height: '600px'
      });
    }

    AddHoliday() {
      const inviteteamMemberDialog = this.matDialog.open(src_app_shared_pop_up_model_add_holiday_add_holiday_component__WEBPACK_IMPORTED_MODULE_1__.AddHolidayComponent, {
        width: '675px',
        height: '600px'
      });
    }

    requestTimeOffModel() {
      const requestTimeOffModel = this.matDialog.open(src_app_shared_pop_up_model_request_time_off_model_request_time_off_model_component__WEBPACK_IMPORTED_MODULE_3__.RequestTimeOffModelComponent, {
        width: '1000px',
        height: '600px',
        autoFocus: 'off'
      });
    }

    ChipClickEvent(event) {
      if (event.label == 'Project') {
        this.members.setValue(event.value);
      }
    }

    TdClickEvent(event) {}

  }

  TimeOffRequestsComponent.ɵfac = function TimeOffRequestsComponent_Factory(t) {
    return new (t || TimeOffRequestsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_organization_service__WEBPACK_IMPORTED_MODULE_4__.OrganizationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_5__.MasterService));
  };

  TimeOffRequestsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: TimeOffRequestsComponent,
    selectors: [["app-time-off-requests"]],
    decls: 62,
    vars: 5,
    consts: [[1, "white_box", "main_content"], [1, "top_title_wrap"], [1, "row", "align-items-center"], [1, "col-md-6"], [1, "mb-0"], [1, "settings_btn", "text-end"], [1, "dropdown", "button_drop"], ["data-toggle", "dropdown", "type", "button", "id", "settingMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "text-secondary"], [1, "fa-solid", "fa-gear"], ["aria-labelledby", "settingMenuButton", 1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], [1, "row"], [1, "time_off_wrap"], ["src", "../../../../assets/images/time-off-policy.png", "alt", ""], [1, "btn_blue", 3, "click"], [1, "time_off_wrap", "no_border"], ["src", "../../../../assets/images/public-holiday.png", "alt", ""], [1, "row", "align-items-end"], ["chipLable", "Members", 3, "selectAllShow", "allDataArray", "chipsValueChangesEmitter"], [1, "col-md-6", "text-end"], [1, "dashboars_tabs", "my-5"], [1, "nav", "nav-tabs", "tab_design_one"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#submitted", 1, "nav-link", "active"], ["data-bs-toggle", "tab", "href", "#approved", 1, "nav-link"], ["data-bs-toggle", "tab", "href", "#denied", 1, "nav-link"], ["data-bs-toggle", "tab", "href", "#all", 1, "nav-link"], [3, "tableColsDetails", "tableDataArray", "actionMenu", "chipsValueChangesEmitter"]],
    template: function TimeOffRequestsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Time Off Requests ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 3)(7, "div", 5)(8, "div", 6)(9, "a", 7)(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "ul", 9)(14, "li")(15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TimeOffRequestsComponent_Template_a_click_15_listener() {
          return ctx.AddPolicy();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Time Off Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "li")(18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TimeOffRequestsComponent_Template_a_click_18_listener() {
          return ctx.AddHoliday();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Holiday Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 11)(21, "div", 3)(22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "Time Off Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "Create a policy for each team member arounf paid or unpaid time off, vaxations, sick days or whatever else you offer your team");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TimeOffRequestsComponent_Template_button_click_28_listener() {
          return ctx.AddPolicy();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Add A Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 3)(31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](32, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "Public Holiday");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "Add holidays and give your team time off to kick back and relax. you can pay them for that time, too.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TimeOffRequestsComponent_Template_button_click_37_listener() {
          return ctx.AddHoliday();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "Add A Holiday");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div")(40, "div", 17)(41, "div", 3)(42, "app-p-chip", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("chipsValueChangesEmitter", function TimeOffRequestsComponent_Template_app_p_chip_chipsValueChangesEmitter_42_listener($event) {
          return ctx.ChipClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "div", 19)(44, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function TimeOffRequestsComponent_Template_button_click_44_listener() {
          return ctx.requestTimeOffModel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "Request Time Off");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 20)(47, "ul", 21)(48, "li", 22)(49, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, "Submitted");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "li", 22)(52, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "Approved");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "li", 22)(55, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, "Denied");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "li", 22)(58, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "div")(61, "TrackerX-dynamic-table", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("chipsValueChangesEmitter", function TimeOffRequestsComponent_Template_TrackerX_dynamic_table_chipsValueChangesEmitter_61_listener($event) {
          return ctx.TdClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("selectAllShow", false)("allDataArray", ctx.AllMembersValue.asObservable());
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("tableColsDetails", ctx.timeOffRequestTableCols)("tableDataArray", ctx.dataArrayForTable)("actionMenu", ctx.actionMenu);
      }
    },
    dependencies: [_shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_6__.DynamicTableComponent, _shared_p_chip_p_chip_component__WEBPACK_IMPORTED_MODULE_7__.PChipComponent]
  });
  return TimeOffRequestsComponent;
})();

/***/ })

}]);