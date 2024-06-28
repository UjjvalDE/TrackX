"use strict";
(self["webpackChunktracker"] = self["webpackChunktracker"] || []).push([[234],{

/***/ 46156:
/*!*********************************************************!*\
  !*** ./src/app/core/model/table-header-data/reports.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amountOwnedTable": () => (/* binding */ amountOwnedTable),
/* harmony export */   "appsUrlsTable": () => (/* binding */ appsUrlsTable),
/* harmony export */   "clientBudgetsTable": () => (/* binding */ clientBudgetsTable),
/* harmony export */   "dailyLimitTable": () => (/* binding */ dailyLimitTable),
/* harmony export */   "expensesTable": () => (/* binding */ expensesTable),
/* harmony export */   "manualTimeEditTable": () => (/* binding */ manualTimeEditTable),
/* harmony export */   "paymentsTable": () => (/* binding */ paymentsTable),
/* harmony export */   "projectWorkOrderTable": () => (/* binding */ projectWorkOrderTable),
/* harmony export */   "scheduleTable": () => (/* binding */ scheduleTable),
/* harmony export */   "scheduledReportAction": () => (/* binding */ scheduledReportAction),
/* harmony export */   "shiftAttendanceTable": () => (/* binding */ shiftAttendanceTable),
/* harmony export */   "timeActivityTable": () => (/* binding */ timeActivityTable),
/* harmony export */   "timeOffBalanceTable": () => (/* binding */ timeOffBalanceTable),
/* harmony export */   "timeOffTransactionTable": () => (/* binding */ timeOffTransactionTable),
/* harmony export */   "timesheetsApprovalsTable": () => (/* binding */ timesheetsApprovalsTable),
/* harmony export */   "weeklyLimitReportTable": () => (/* binding */ weeklyLimitReportTable),
/* harmony export */   "workBreaksTable": () => (/* binding */ workBreaksTable)
/* harmony export */ });
let timeActivityTable = [{
  key: 'date',
  label: 'Date',
  selected: true,
  disable: true,
  config: {
    isText: true
  }
}, {
  key: 'projectOrder',
  label: 'Project Order',
  selected: true,
  disable: true,
  config: {
    isText: true
  }
}, {
  key: 'member',
  label: 'Member',
  selected: true,
  disable: true,
  config: {
    isText: true
  }
}, {
  key: 'toDo',
  label: 'To-do',
  selected: true,
  disable: true,
  config: {
    isText: true
  }
}, {
  key: 'client',
  label: 'Client',
  selected: true,
  disable: true,
  config: {
    isText: true
  }
}, {
  key: 'time',
  label: 'Time',
  selected: false,
  config: {
    isTime: true
  }
}, {
  key: 'breakTime',
  label: 'Break Time',
  selected: false,
  config: {
    isText: true
  }
}, {
  key: 'activity',
  label: 'Activity',
  selected: false,
  config: {
    isPercentage: true
  }
}, {
  key: 'idle_per',
  label: 'Idle (%)',
  selected: false,
  config: {
    isText: true
  }
}, {
  key: 'idle_hr',
  label: 'Idle (hr)',
  selected: false,
  config: {
    isCurrency: true,
    isHeaderInfoIcon: true
  }
}, {
  key: 'spent',
  label: 'Spent',
  selected: false,
  config: {
    isText: true
  }
}, {
  key: 'billedAmount',
  label: 'Billed Amount',
  selected: false,
  config: {
    isText: true
  }
}, {
  key: 'billedTime',
  label: 'Billded Time',
  selected: false,
  config: {
    isText: true
  }
}, {
  key: 'nonBillableTime',
  label: 'Non-Billable Time',
  selected: false,
  config: {
    isText: true
  }
}, {
  key: 'notes',
  label: 'Notes',
  selected: false,
  config: {
    isText: true
  }
}];
let appsUrlsTable = [{
  key: 'date',
  label: 'Date',
  selected: true,
  disable: false,
  config: {
    isText: true
  }
}, {
  key: 'project_WorkOrder',
  label: 'Project / Work order',
  selected: true,
  disable: false,
  config: {
    isText: true
  }
}, {
  key: 'member',
  label: 'Member',
  selected: true,
  disable: false,
  config: {
    isText: true
  }
}, {
  key: 'appOrSite',
  label: '	App or site',
  selected: true,
  disable: false,
  config: {
    isText: true
  }
}, {
  key: 'timeSpent_hrs',
  label: 'Time spent (hrs)',
  selected: true,
  disable: false,
  config: {
    isText: true
  }
}, {
  key: 'percentUsed',
  label: 'Percent used',
  selected: true,
  disable: false,
  config: {
    isText: true
  }
}];
const expensesTable = [{
  key: 'date',
  label: 'Date',
  selected: true,
  disable: true,
  config: {
    isProfileWithLetter: true
  }
}, {
  key: 'member',
  label: 'Member',
  selected: true,
  disable: true,
  config: {
    isProfile: true
  }
}, {
  key: 'projectOrder',
  label: 'Project Order',
  selected: true,
  disable: true,
  config: {
    isProfileWithLetter: true
  }
}, {
  key: 'desctiption',
  label: 'Desctiption',
  selected: true,
  disable: false,
  config: {
    isText: true
  }
}, {
  key: 'amount',
  label: 'Amount',
  selected: true,
  disable: false,
  config: {
    isCurrency: true
  }
}, {
  key: 'category',
  label: 'Category',
  selected: true,
  disable: false,
  config: {
    isText: true
  }
}, {
  key: 'notes',
  label: 'Notes',
  selected: false,
  disable: false,
  config: {
    isText: true
  }
}];
const manualTimeEditTable = [{
  key: 'member',
  label: 'Member',
  config: {
    isProfileWithLetter: true
  }
}, {
  key: 'projectOrder',
  label: 'Project/Work Order',
  config: {
    isText: true
  }
}, {
  key: 'toDo',
  label: 'To-do/Job',
  config: {
    isText: true
  }
}, {
  key: 'action',
  label: 'Action',
  config: {
    isStatus: true
  }
}, {
  key: 'timeSpan',
  label: 'Time Span',
  config: {
    isText: true
  }
}, {
  key: 'timeChange',
  label: 'Time Change',
  config: {
    isInfo: true
  }
}, {
  key: 'reason',
  label: 'Reason',
  config: {
    isText: true
  }
}, {
  key: 'changedBy',
  label: 'Changed By',
  config: {
    isText: true
  }
}, {
  key: 'changedAt',
  label: 'Changed At',
  config: {
    isText: true
  }
}];
const weeklyLimitReportTable = [{
  key: 'week',
  label: 'Week',
  config: {
    isText: true
  }
}, {
  key: 'member',
  label: 'Member',
  config: {
    isText: true
  }
}, {
  key: 'time_spent',
  label: 'Time spent',
  config: {
    isText: true
  }
}, {
  key: 'weekly_limit',
  label: 'Weekly limit',
  config: {
    isText: true
  }
}, {
  key: 'percentage_used',
  label: 'Percentage used',
  config: {
    isProgressbar: true
  }
}, {
  key: 'remaining',
  label: 'Remaining',
  config: {
    isText: true
  }
}];
const amountOwnedTable = [{
  key: 'project',
  label: 'Project',
  config: {
    isProfileWithLetter: true
  }
}, {
  key: 'currentRate',
  label: 'Current rate',
  config: {
    isCurrency: true
  }
}, {
  key: 'hours',
  label: 'Hours',
  config: {
    isText: true
  }
}, {
  key: 'amount',
  label: 'Amount',
  config: {
    isCurrency: true
  }
}];
const timesheetsApprovalsTable = [{
  key: 'date',
  label: 'Date',
  selected: true,
  disable: true,
  config: {
    isText: true
  }
}, {
  key: 'member',
  label: 'Member',
  selected: true,
  disable: true,
  config: {
    isText: true
  }
}, {
  key: 'project_workOrder',
  label: 'Project / Work order',
  selected: true,
  disable: true,
  config: {
    isText: true
  }
}, {
  key: 'employeeId',
  label: 'Employee ID',
  selected: false,
  disable: false,
  config: {
    isText: true
  }
}, {
  key: 'taxInfo',
  label: 'Tax Info',
  selected: false,
  disable: false,
  config: {
    isText: true
  }
}, {
  key: 'timesheetStatus',
  label: 'Timesheet status',
  selected: true,
  disable: true,
  config: {
    isText: true
  }
}, {
  key: 'timesheets',
  label: 'Timesheet',
  selected: true,
  disable: true,
  config: {
    isText: true
  }
}, {
  key: 'time',
  label: 'time',
  selected: true,
  disable: true,
  config: {
    isText: true
  }
}, {
  key: 'activity',
  label: 'Activity',
  selected: false,
  disable: false,
  config: {
    isText: true
  }
}, {
  key: 'payRate',
  label: 'Pay rate',
  selected: false,
  disable: false,
  config: {
    isCurrency: true,
    isInfo: true
  }
}, {
  key: 'spent',
  label: 'Spent',
  selected: false,
  disable: false,
  config: {
    isCurrency: true
  }
}, {
  key: 'billRate',
  label: 'Bill rate',
  selected: false,
  disable: false,
  config: {
    isCurrency: true
  }
}, {
  key: 'billedAmount',
  label: 'Billed Amount',
  selected: false,
  disable: false,
  config: {
    isCurrency: true
  }
}, {
  key: 'billableTime',
  label: 'Billable Time',
  selected: false,
  disable: false,
  config: {
    isText: true
  }
}, {
  key: 'NonBillableTime',
  label: 'Non-Billable Time',
  selected: false,
  disable: false,
  config: {
    isText: true
  }
}];
const scheduleTable = [{
  key: 'Name',
  label: 'Name',
  config: {
    isProfile: true
  }
}, {
  key: 'Report',
  label: 'Report',
  config: {
    isText: true
  }
}, {
  key: 'Recurring',
  label: 'Recurring',
  config: {
    isText: true
  }
}, {
  key: 'Status',
  label: 'Status',
  config: {
    isStatus: true
  }
}, {
  key: 'action',
  label: 'Action',
  config: {
    isAction: true
  }
}];
const workBreaksTable = [{
  key: 'member',
  label: 'Member',
  selected: true,
  disable: true,
  config: {}
}, {
  key: 'date',
  label: 'Date',
  selected: true,
  disable: true,
  config: {}
}, {
  key: 'policy',
  label: 'Policy',
  selected: true,
  disable: true,
  config: {}
}, {
  key: 'status',
  label: 'Status',
  selected: true,
  config: {}
}, {
  key: 'started',
  label: 'Started',
  selected: true,
  config: {}
}, {
  key: 'ended',
  label: 'Ended',
  selected: true,
  config: {}
}, {
  key: 'allotted_hrs',
  label: 'Allotted (hrs)',
  selected: true,
  config: {}
}, {
  key: '	actual_hrs',
  label: '	Actual (hrs)',
  selected: true,
  config: {}
}, {
  key: 'paid_hrs',
  label: 'Paid (hrs)',
  selected: true,
  config: {}
}];
const paymentsTable = [{
  key: 'member',
  label: 'Member',
  selected: true,
  config: {}
}, {
  key: 'paymentType',
  label: 'Payments Type',
  selected: true,
  config: {}
}, {
  key: 'paidOn',
  label: 'Paid On',
  selected: true,
  config: {}
}, {
  key: 'notes',
  label: 'Notes',
  selected: true,
  config: {}
}, {
  key: 'amount',
  label: 'Amount',
  selected: true,
  config: {}
}];
const timeOffBalanceTable = [{
  key: 'policy',
  label: 'Policy',
  selected: true,
  config: {}
}, {
  key: 'member',
  label: 'Member',
  selected: true,
  config: {}
}, {
  key: 'used',
  label: 'Used',
  selected: true,
  config: {}
}, {
  key: 'pending',
  label: 'Pending',
  selected: true,
  config: {}
}, {
  key: 'balance',
  label: 'Balance',
  selected: true,
  config: {}
}];
const timeOffTransactionTable = [{
  key: 'policy',
  label: 'Policy',
  selected: true,
  config: {}
}, {
  key: 'member',
  label: 'Member',
  selected: true,
  config: {}
}, {
  key: 'date',
  label: 'Date',
  selected: true,
  config: {}
}, {
  key: 'bookedon',
  label: 'Booked on',
  selected: true,
  config: {}
}, {
  key: 'type',
  label: 'Type',
  selected: true,
  config: {}
}, {
  key: 'reason',
  label: 'Reason',
  selected: true,
  config: {}
}, {
  key: 'changedBy',
  label: 'Changed by',
  selected: true,
  config: {}
}, {
  key: 'duration',
  label: 'Duration',
  selected: true,
  config: {}
}];
let shiftAttendanceTable = [{
  key: 'date',
  label: 'Date',
  selected: true,
  config: {}
}, {
  key: 'member',
  label: 'Member',
  selected: true,
  config: {}
}, {
  key: 'status',
  label: 'Status',
  selected: true,
  config: {}
}, {
  key: 'shift',
  label: 'Shift',
  selected: true,
  config: {}
}, {
  key: 'startTime',
  label: 'Start time',
  selected: true,
  config: {}
}, {
  key: 'required',
  label: 'Required',
  selected: true,
  config: {}
}, {
  key: 'actual',
  label: 'Actual',
  selected: true,
  config: {}
}, {
  key: 'late',
  label: 'Late',
  selected: true,
  config: {}
}];
let scheduledReportAction = [{
  label: 'Edit',
  event: 'edit',
  config: {
    isShow: true
  }
}, {
  label: 'Pause',
  event: 'pause',
  config: {
    isShow: true
  }
}, {
  label: 'Resume',
  event: 'resume',
  config: {
    isShow: false
  }
}, {
  label: 'Delete',
  event: 'delete',
  config: {
    isShow: true
  }
}];
let dailyLimitTable = [{
  key: 'date',
  label: 'Date',
  config: {
    isText: true
  }
}, {
  key: 'member',
  label: 'Member',
  config: {
    isText: true
  }
}, {
  key: 'time_spent',
  label: 'Time spent',
  config: {
    isText: true
  }
}, {
  key: 'daily_limit',
  label: 'Daily limit',
  config: {
    isText: true
  }
}, {
  key: 'percentage_used',
  label: 'Percentage used',
  config: {
    isProgressbar: true
  }
}, {
  key: 'remaining',
  label: 'Remaining',
  config: {
    isText: true
  }
}];
let projectWorkOrderTable = [{
  key: 'month',
  label: 'Month',
  config: {
    isText: true
  }
}, {
  key: 'project_work_order',
  label: 'Project / Work order',
  config: {
    isText: true
  }
}, {
  key: 'spent',
  label: 'Spent',
  config: {
    isText: true
  }
}, {
  key: 'budget',
  label: 'Budget',
  config: {
    isProgressbar: true
  }
}, {
  key: 'remaining',
  label: 'Remaining',
  config: {
    isText: true
  }
}];
const clientBudgetsTable = [{
  key: 'month',
  label: 'Date',
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
  key: 'spent',
  label: 'Spent',
  config: {
    isText: true
  }
}, {
  key: 'budget',
  label: 'Budget',
  config: {
    isProgressbar: true
  }
}, {
  key: 'remaining',
  label: 'Remaining',
  config: {
    isText: true
  }
}];

/***/ }),

/***/ 16496:
/*!*******************************************************!*\
  !*** ./src/app/pages/reports/all-reports-sections.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allReportsArray": () => (/* binding */ allReportsArray)
/* harmony export */ });
let allReportsArray = [{
  name: 'General',
  data: [{
    reportName: 'Time & Activity',
    reportDescription: "'See team members' time worked, activity levels, and amounts earned per project or to-do'",
    reportShow: true,
    routerLink: '/reports/timeactivity'
  }, {
    reportName: 'Weekly',
    reportDescription: "See team members' time worked, activity levels, and amount earned per week",
    reportShow: true,
    routerLink: '/reports/weekly'
  }, {
    reportName: 'Apps & Urls',
    reportDescription: "See team members' apps used and URLs visited while working",
    reportShow: true,
    routerLink: '/reports/apps-urls'
  }, {
    reportName: 'Manual Time Edits',
    reportDescription: "See team members' time worked, project, to-do, and reason for each manual time entry",
    reportShow: true,
    routerLink: '/reports/manual-time-edits'
  }, {
    reportName: 'Timesheet approvals',
    reportDescription: "See team member's timesheets and their status",
    reportShow: true,
    routerLink: '/reports/timesheet-approvals'
  }, {
    reportName: 'Expenses',
    reportDescription: "See how much has been spent on expenses by member and project",
    reportShow: true,
    routerLink: '/reports/expenses'
  }, {
    reportName: 'Work breaks',
    reportDescription: "See how many work breaks team members are taking",
    reportShow: true,
    routerLink: '/reports/work-breaks'
  }]
}, {
  name: 'Payment',
  data: [{
    reportName: 'Amounts owed',
    reportDescription: "See how much the hourly paid team members are currently owed",
    reportShow: true,
    routerLink: '/reports/amount-owned'
  }, {
    reportName: 'Payments',
    reportDescription: "See how much team members were paid over a given period",
    reportShow: true,
    routerLink: '/reports/payments'
  }]
}, {
  name: 'Budgets And Limits',
  data: [{
    reportName: 'Weekly Limits',
    reportDescription: "See how much the hourly paid team members are currently owed",
    reportShow: true,
    routerLink: '/reports/weekly-limit'
  }, {
    reportName: 'Daily Limits',
    reportDescription: "See how much team members were paid over a given period",
    reportShow: true,
    routerLink: '/reports/daliy-limits'
  }, {
    reportName: 'Project budgets',
    reportDescription: "See team members' apps used and URLs visited while working",
    reportShow: true,
    routerLink: '/reports/project-work-order-budgets'
  }, {
    reportName: 'Client budgets',
    reportDescription: "See how much of your clients’ budgets have been spent",
    reportShow: true,
    routerLink: '/reports/client-budgets'
  }]
}, {
  name: 'Time Off',
  data: [{
    reportName: 'Time Off Balances',
    reportDescription: "See your team's time off balances across the organization's time off policies",
    reportShow: true,
    routerLink: '/reports/time-off-balances'
  }, {
    reportName: 'Time Off Transactions',
    reportDescription: "See how much team members were paid over a given period",
    reportShow: true,
    routerLink: '/reports/time-off-transaction'
  }]
}, {
  name: 'Schedule',
  data: [{
    reportName: 'Shift Attendance',
    reportDescription: "See team members' completed, late, abandoned, and missed shifts",
    reportShow: true,
    routerLink: '/reports/shift-attendance'
  }]
}];

/***/ }),

/***/ 71186:
/*!********************************************************************!*\
  !*** ./src/app/pages/reports/all-reports/all-reports.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllReportsComponent": () => (/* binding */ AllReportsComponent)
/* harmony export */ });
/* harmony import */ var _all_reports_sections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../all-reports-sections */ 16496);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34793);





function AllReportsComponent_div_10_div_4_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 15)(1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AllReportsComponent_div_10_div_4_a_5_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.componentShow("enable"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", null);
  }
}

function AllReportsComponent_div_10_div_4_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 17)(1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AllReportsComponent_div_10_div_4_a_6_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.componentShow("disable"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", null);
  }
}

const _c0 = function (a0) {
  return [a0];
};

function AllReportsComponent_div_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AllReportsComponent_div_10_div_4_a_5_Template, 2, 1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AllReportsComponent_div_10_div_4_a_6_Template, 2, 1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, item_r3.routerLink));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.reportName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r3.reportShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r3.reportShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.reportDescription);
  }
}

function AllReportsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AllReportsComponent_div_10_div_4_Template, 9, 7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", data_r1.data);
  }
}

let AllReportsComponent = /*#__PURE__*/(() => {
  class AllReportsComponent {
    constructor() {
      this.allReportsList = _all_reports_sections__WEBPACK_IMPORTED_MODULE_0__.allReportsArray;
    }

    ngOnInit() {}

    componentShow(type) {
      console.log(type); // if its enable return disable
      // if its disable return enable

      if (type == 'disable') {} else if (type == 'enable') {}
    }

  }

  AllReportsComponent.ɵfac = function AllReportsComponent_Factory(t) {
    return new (t || AllReportsComponent)();
  };

  AllReportsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AllReportsComponent,
    selectors: [["app-all-reports"]],
    decls: 11,
    vars: 1,
    consts: [[1, "white_box", "main_content"], [1, "row"], [1, "col-md-6"], [1, "col-md-6", "text-end"], ["routerLink", "/reports/scheduled-reports", 1, "text_dark_gradient", "btn_dark_text"], [1, "fa", "fa-clock"], ["class", "all_report", 4, "ngFor", "ngForOf"], [1, "all_report"], [1, "report_list"], ["class", "card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "card", 3, "routerLink"], [1, "card-body"], [1, "d-flex", "justify-content-between"], ["style", "pointer-events: none;", 3, "routerLink", 4, "ngIf"], [3, "routerLink", 4, "ngIf"], [2, "pointer-events", "none", 3, "routerLink"], ["src", "../../../../assets/images/icon/eye-disable.svg", "alt", "", 3, "click"], [3, "routerLink"], ["src", "../../../../assets/images/icon/eye-enable.svg", "alt", "", 3, "click"]],
    template: function AllReportsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Scheduled reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AllReportsComponent_div_10_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allReportsList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref]
  });
  return AllReportsComponent;
})();

/***/ }),

/***/ 18801:
/*!************************************************************************************!*\
  !*** ./src/app/pages/reports/amount-owned-report/amount-owned-report.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmountOwnedReportComponent": () => (/* binding */ AmountOwnedReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-charts */ 74717);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 46758);
/* harmony import */ var src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/reports */ 46156);
/* harmony import */ var src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/report-filter/report-filter.component */ 32272);
/* harmony import */ var src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pop-up-model/schedule-report-model/schedule-report-model.component */ 450);
/* harmony import */ var src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pop-up-model/send-report-model/send-report-model.component */ 28096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/date-time-range-picker/date-time-range-picker.component */ 96991);
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/loader/loader.component */ 89047);
/* harmony import */ var _shared_common_line_chart_common_line_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/common-line-chart/common-line-chart.component */ 99949);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/api */ 10805);




















function AmountOwnedReportComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 49)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Total Amount Per Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "app-common-line-chart", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("lineChartData", ctx_r0.lineChartData)("lineChartLabel", ctx_r0.lineChartLabel)("date", ctx_r0.date);
  }
}

function AmountOwnedReportComponent_ng_template_83_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", col_r6.label, " ");
  }
}

function AmountOwnedReportComponent_ng_template_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AmountOwnedReportComponent_ng_template_83_th_1_Template, 2, 1, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", columns_r4);
  }
}

function AmountOwnedReportComponent_ng_template_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 52)(1, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "01:00:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const rowData_r7 = ctx.$implicit;
    const expanded_r9 = ctx.expanded;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pRowToggler", rowData_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", expanded_r9 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](rowData_r7.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("$", ctx_r2.calculateCustomerTotal(rowData_r7.date), ".00");
  }
}

function AmountOwnedReportComponent_ng_template_85_td_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 58)(1, "span", 58)(2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const col_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const rowData_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](rowData_r10[col_r13.key].charAt(0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", rowData_r10[col_r13.key], "");
  }
}

function AmountOwnedReportComponent_ng_template_85_td_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const rowData_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](2, 1, rowData_r10[col_r13.key], "USD", "symbol"), " ");
  }
}

function AmountOwnedReportComponent_ng_template_85_td_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const rowData_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](rowData_r10[col_r13.key]);
  }
}

function AmountOwnedReportComponent_ng_template_85_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AmountOwnedReportComponent_ng_template_85_td_1_span_1_Template, 5, 2, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AmountOwnedReportComponent_ng_template_85_td_1_span_2_Template, 3, 5, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, AmountOwnedReportComponent_ng_template_85_td_1_span_3_Template, 2, 1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", col_r13.config == null ? null : col_r13.config.isProfileWithLetter);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (col_r13.config == null ? null : col_r13.config.isCurrency) && !(col_r13.config == null ? null : col_r13.config.isTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", col_r13.config == null ? null : col_r13.config.isText);
  }
}

function AmountOwnedReportComponent_ng_template_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AmountOwnedReportComponent_ng_template_85_td_1_Template, 4, 3, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r11 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", columns_r11);
  }
}

const _c0 = function () {
  return ["/reports/all-reports"];
};

let AmountOwnedReportComponent = /*#__PURE__*/(() => {
  class AmountOwnedReportComponent {
    constructor(formBuilder, masterService, matDialog) {
      this.formBuilder = formBuilder;
      this.masterService = masterService;
      this.matDialog = matDialog;
      this.date = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
      this.amountOwnedList = [{
        "id": 1000,
        "project": "BA",
        "currentRate": 10.00,
        "hours": "01:00:00",
        "amount": 200,
        "date": "We, Jul 14, 2021"
      }, {
        "id": 1001,
        "project": "BA",
        "currentRate": 10.00,
        "hours": "01:00:00",
        "amount": 300,
        "date": "Th, Jul 15, 2021"
      }];
      this.amountOwnedCols = src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__.amountOwnedTable;
      this.showAmountOwnedGraph = true;
      this.cols = [];
      this.amountOwnedTableShowCols = [];
      this.currentTab = 'all';
      this.organizationDetails = {};
      this.lineChartData = {
        datasets: [{
          data: [0, 50, 0, 200, 0, 300, 0],
          label: 'Amount',
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          fill: 'origin'
        }]
      };
      this.lineChartLabel = [];
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.filterForm = this.formBuilder.group({
        fromDate: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        toDate: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]]
      });
      this.amountOwnedTableShowCols = this.amountOwnedCols;
      this.cols = JSON.parse(JSON.stringify(this.amountOwnedCols));
      setTimeout(() => {
        this.date.next({
          fromDate: this.filterForm.controls['fromDate'].value,
          toDate: this.filterForm.controls['toDate'].value
        });
      }, 100);
    }

    SelectedDateEvent(event) {
      const fromDate = event.fromDate;
      const toDate = event.toDate;

      if (fromDate && toDate) {
        this.filterForm.patchValue({
          fromDate: fromDate,
          toDate: toDate
        });
      }

      this.date.next({
        fromDate: this.filterForm.controls['fromDate'].value,
        toDate: this.filterForm.controls['toDate'].value
      });
    }

    calculateCustomerTotal(date) {
      let total = 0;

      if (this.amountOwnedList) {
        for (let customer of this.amountOwnedList) {
          if (customer.date === date) {
            total += customer.amount;
          }
        }
      }

      return total;
    }

    ShowGraph() {
      if (this.showAmountOwnedGraph == true) {
        this.showAmountOwnedGraph = false;
      } else {
        this.showAmountOwnedGraph = true;
      }
    }

    OnColumnToggle(col, indexElement, event) {
      this.amountOwnedTableShowCols = this.masterService.OnColumnToggle(col, indexElement, event, this.amountOwnedCols, this.amountOwnedTableShowCols, 0);
      console.log('cols', this.cols);
    }

    OnFilter() {
      let reportData = {
        reportName: 'Amount-owned',
        filterInput: {
          projects: true
        },
        currentTab: this.currentTab
      };
      const filterDialog = this.matDialog.open(src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__.ReportFilterComponent, {
        width: '675px',
        data: reportData
      });
    }

    OnSend() {
      const sendDialog = this.matDialog.open(src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__.SendReportModelComponent, {
        width: '675px'
      });
    }

    OnSchedule() {
      const scheduleDialog = this.matDialog.open(src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__.ScheduleReportModelComponent, {
        width: '675px'
      });
    }

    OnTabClick(type) {
      this.currentTab = type;
    }

  }

  AmountOwnedReportComponent.ɵfac = function AmountOwnedReportComponent_Factory(t) {
    return new (t || AmountOwnedReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog));
  };

  AmountOwnedReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: AmountOwnedReportComponent,
    selectors: [["app-amount-owned-report"]],
    viewQuery: function AmountOwnedReportComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_12__.BaseChartDirective, 5);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
      }
    },
    decls: 86,
    vars: 9,
    consts: [[1, "white_box", "dashboars_title"], [1, "top_title_wrap"], [1, "row", "align-items-center", "mb-4"], [1, "col-md-6"], [1, "setting_title", 3, "routerLink"], ["src", "../../../../assets/images/icon/back-arrow-blue.svg", "alt", ""], [1, "mb-0"], [1, "text-end"], ["routerLink", "/reports/scheduled-reports", 1, "text_dark_gradient", "btn_dark_text"], [1, "fa", "fa-clock"], [1, "row", "align-items-center", "mb-5"], [1, "nav", "nav-tabs", "tab_design_one"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#me", 1, "nav-link", 3, "click"], ["data-bs-toggle", "tab", "href", "#all", 1, "nav-link", "active", 3, "click"], [1, "col-md-6", "text-end"], [3, "formGroup"], [1, "row", "justify-content-end"], [1, "col-md-8"], [1, "row"], [3, "formControlFromDateNameValue", "formControlSelectedDateValue"], [1, "col-md-4"], ["type", "submit", 1, "btn_blue", 3, "click"], [1, "activity_top_wrap", "mb-5"], [1, "activity_left_text"], [1, "text_green_gradient"], [3, "ngClass", "click"], [1, "fa-solid", "fa-chart-column"], ["class", "mt-3", 4, "ngIf"], [1, "white_box"], [1, "col-md-3"], [1, "d-flex", "align-items-baseline"], [1, "me-2"], [1, "col-md-9", "text-end"], [1, "activity_table_menu_wrap"], [1, "left_links"], [1, "text_gradient", "cursor-pointer", 3, "click"], ["src", "../../../../assets/images/icon/send.svg", "alt", ""], ["src", "../../../../assets/images/icon/schedule.svg", "alt", ""], [1, "dropdown"], ["data-toggle", "dropdown", "type", "button", "id", "settingMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "text_gradient", "cursor-pointer"], ["src", "../../../../assets/images/icon/export.svg", "alt", ""], ["aria-labelledby", "settingMenuButton", 1, "dropdown-menu"], [1, "dropdown-item"], [1, "row", "mb-5"], ["sortField", "date", "sortMode", "single", "dataKey", "date", "rowGroupMode", "subheader", "groupRowsBy", "date", 3, "value", "columns"], ["pTemplate", "header"], ["pTemplate", "groupheader"], ["pTemplate", "rowexpansion"], [1, "mt-3"], [3, "lineChartData", "lineChartLabel", "date"], [4, "ngFor", "ngForOf"], ["pRipple", "", 3, "pRowToggler"], ["colspan", "2", 2, "text-align", "left !important"], ["type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "p-button-plain", "p-mr-2", 3, "icon"], [1, "p-text-bold", "p-ml-2"], ["class", "d-flex align-items-center", 4, "ngIf"], [4, "ngIf"], [1, "d-flex", "align-items-center"], [1, "user_custom_img", "orange"]],
    template: function AmountOwnedReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Amounts Owed Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 3)(11, "div", 7)(12, "a", 8)(13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " Scheduled Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 10)(17, "div", 3)(18, "ul", 11)(19, "li", 12)(20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AmountOwnedReportComponent_Template_a_click_20_listener() {
          return ctx.OnTabClick("me");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "li", 12)(23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AmountOwnedReportComponent_Template_a_click_23_listener() {
          return ctx.OnTabClick("all");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 15)(26, "form", 16)(27, "div", 17)(28, "div", 18)(29, "div", 19)(30, "div", 18)(31, "app-date-time-range-picker", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("formControlSelectedDateValue", function AmountOwnedReportComponent_Template_app_date_time_range_picker_formControlSelectedDateValue_31_listener($event) {
          return ctx.SelectedDateEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 21)(33, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AmountOwnedReportComponent_Template_button_click_33_listener() {
          return ctx.OnFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 23)(36, "div", 24)(37, "ul")(38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "Expenses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "$400.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AmountOwnedReportComponent_Template_button_click_46_listener() {
          return ctx.ShowGraph();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](47, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, AmountOwnedReportComponent_div_48_Template, 5, 3, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 29)(50, "div", 10)(51, "div", 30)(52, "div", 31)(53, "h3", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, "Asia - Kolkata");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div", 33)(58, "div", 34)(59, "ul", 35)(60, "li")(61, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AmountOwnedReportComponent_Template_a_click_61_listener() {
          return ctx.OnSend();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](62, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63, " Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "li")(65, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AmountOwnedReportComponent_Template_a_click_65_listener() {
          return ctx.OnSchedule();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](66, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, " Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "li")(69, "div", 39)(70, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](71, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "ul", 42)(74, "li")(75, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](76, "To CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "li")(78, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79, "To PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "div", 44)(81, "div")(82, "p-table", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](83, AmountOwnedReportComponent_ng_template_83_Template, 2, 1, "ng-template", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](84, AmountOwnedReportComponent_ng_template_84_Template, 9, 4, "ng-template", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](85, AmountOwnedReportComponent_ng_template_85_Template, 2, 1, "ng-template", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControlFromDateNameValue", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx.showAmountOwnedGraph == true ? "activity_filter_btn" : "activity_filter_btn_active");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showAmountOwnedGraph);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx.organizationDetails["organization_Name"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx.amountOwnedList)("columns", ctx.amountOwnedTableShowCols);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref, _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__.DateTimeRangePickerComponent, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent, _shared_common_line_chart_common_line_chart_component__WEBPACK_IMPORTED_MODULE_7__.CommonLineChartComponent, primeng_button__WEBPACK_IMPORTED_MODULE_15__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_16__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_17__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_16__.RowToggler, _angular_common__WEBPACK_IMPORTED_MODULE_13__.CurrencyPipe]
  });
  return AmountOwnedReportComponent;
})();

/***/ }),

/***/ 14388:
/*!****************************************************************!*\
  !*** ./src/app/pages/reports/apps-urls/apps-urls.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppsUrlsComponent": () => (/* binding */ AppsUrlsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 15439);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/model/table-header-data/reports */ 46156);
/* harmony import */ var src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pop-up-model/report-filter/report-filter.component */ 32272);
/* harmony import */ var src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pop-up-model/schedule-report-model/schedule-report-model.component */ 450);
/* harmony import */ var src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/pop-up-model/send-report-model/send-report-model.component */ 28096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/date-time-range-picker/date-time-range-picker.component */ 96991);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 47873);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/api */ 10805);





















function AppsUrlsComponent_ng_template_82_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", col_r5.label, " ");
  }
}

function AppsUrlsComponent_ng_template_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AppsUrlsComponent_ng_template_82_th_1_Template, 2, 1, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", columns_r3);
  }
}

function AppsUrlsComponent_ng_template_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 52)(1, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const rowData_r6 = ctx.$implicit;
    const expanded_r8 = ctx.expanded;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pRowToggler", rowData_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", expanded_r8 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](rowData_r6[ctx_r1.groupBy]);
  }
}

function AppsUrlsComponent_ng_template_84_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r12 = ctx.$implicit;
    const rowData_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r9[col_r12.key], " ");
  }
}

function AppsUrlsComponent_ng_template_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AppsUrlsComponent_ng_template_84_td_1_Template, 2, 1, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r10 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", columns_r10);
  }
}

const _c0 = function () {
  return ["/reports/all-reports"];
};

let AppsUrlsComponent = /*#__PURE__*/(() => {
  class AppsUrlsComponent {
    constructor(formBuilder, matDialog, masterService) {
      this.formBuilder = formBuilder;
      this.matDialog = matDialog;
      this.masterService = masterService;
      this.groupBy = 'date';
      this.textFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('');
      this.currentTab = 'all';
      this.organizationDetails = {};
      this.appsUrlsArray = [{
        date: 'Thu, Sep 15, 2022',
        project_WorkOrder: 'Ba',
        member: 'Ravi',
        appOrSite: 'Brave',
        timeSpent_hrs: '2:34:09',
        percentUsed: '76%'
      }, {
        date: 'Thu, Sep 16, 2022',
        project_WorkOrder: 'Ba',
        member: 'Ravi1',
        appOrSite: ' Microsoft Office 2010',
        timeSpent_hrs: '2:34:09',
        percentUsed: '76%'
      }, {
        date: 'Thu, Sep 15, 2022',
        project_WorkOrder: 'Ba1',
        member: 'Ravi1',
        appOrSite: 'Brave',
        timeSpent_hrs: '2:34:09',
        percentUsed: '76%'
      }, {
        date: 'Thu, Sep 16, 2022',
        project_WorkOrder: 'Ba1',
        member: 'Ravi',
        appOrSite: 'Brave',
        timeSpent_hrs: '2:34:09',
        percentUsed: '76%'
      }, {
        date: 'Thu, Sep 15, 2022',
        project_WorkOrder: 'Ba2',
        member: 'Ravi',
        appOrSite: 'Brave',
        timeSpent_hrs: '2:34:09',
        percentUsed: '76%'
      }, {
        date: 'Thu, Sep 16, 2022',
        project_WorkOrder: 'Ba2',
        member: 'Ravi',
        appOrSite: 'Brave',
        timeSpent_hrs: '2:34:09',
        percentUsed: '76%'
      }];
      this.appsUrlsTableCols = [];
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      let currentWeekDays = this.startAndEndOfWeek(moment__WEBPACK_IMPORTED_MODULE_0__());
      this.filterForm = this.formBuilder.group({
        fromDate: [currentWeekDays[0], [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        toDate: [currentWeekDays[1], [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
      });
      this.changeGroupby();
    }

    startAndEndOfWeek(date) {
      var now = date ? new Date(date) : new Date();
      let startOfWeek = moment__WEBPACK_IMPORTED_MODULE_0__(now).clone().startOf('isoWeek');
      let endOfWeek = moment__WEBPACK_IMPORTED_MODULE_0__(now).clone().endOf('isoWeek');
      return [startOfWeek, endOfWeek];
    }

    changeGroupby() {
      this.appsUrlsTableCols = [];
      src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_1__.appsUrlsTable.forEach(element => {
        if (this.groupBy != element.key) {
          this.appsUrlsTableCols.push(element);
        }
      });
    }

    SelectedDateEvent(event) {
      const fromDate = event.startDate._d;
      const toDate = event.endDate._d;

      if (fromDate && toDate) {
        this.filterForm.patchValue({
          fromDate: fromDate,
          toDate: toDate
        });
      }
    }

    OnSend() {
      const sendDialog = this.matDialog.open(src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_4__.SendReportModelComponent, {
        width: '675px'
      });
    }

    OnSchedule() {
      const scheduleDialog = this.matDialog.open(src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_3__.ScheduleReportModelComponent, {
        width: '675px'
      });
    }

    OnFilter() {
      let reportData = {
        reportName: 'Apps-urls',
        filterInput: {
          item_type: true,
          projects: true,
          sum_date_ranges: true,
          include_archived_project: true
        },
        currentTab: this.currentTab
      };
      const filterDialog = this.matDialog.open(src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_2__.ReportFilterComponent, {
        width: '675px',
        data: reportData
      });
    }

    OnTabClick(type) {
      this.currentTab = type;
    }

  }

  AppsUrlsComponent.ɵfac = function AppsUrlsComponent_Factory(t) {
    return new (t || AppsUrlsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_5__.MasterService));
  };

  AppsUrlsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: AppsUrlsComponent,
    selectors: [["app-apps-urls"]],
    decls: 85,
    vars: 13,
    consts: [[1, "white_box", "dashboars_title", "main_content"], [1, "top_title_wrap"], [1, "row", "align-items-center", "mb-4"], [1, "col-md-6"], [1, "setting_title", 3, "routerLink"], ["src", "../../../../assets/images/icon/back-arrow-blue.svg", "alt", ""], [1, "mb-0"], [1, "text-end"], ["routerLink", "/reports/scheduled-reports", 1, "text_dark_gradient", "btn_dark_text"], [1, "fa", "fa-clock"], [1, "row", "align-items-center", "mb-5"], [1, "nav", "nav-tabs", "tab_design_one"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#me", 1, "nav-link", 3, "click"], ["data-bs-toggle", "tab", "href", "#all", 1, "nav-link", "active", 3, "click"], [1, "col-md-6", "text-end"], [3, "formGroup"], [1, "row", "justify-content-end"], [1, "col-md-8"], [1, "row"], ["type", "weekly", 3, "formControlFromDateNameValue", "formControlSelectedDateValue"], [1, "col-md-4"], ["type", "button", 1, "btn_blue", 3, "click"], [1, "row", "mb-2"], [1, "d-flex", "align-items-baseline", "activity_table_top_wrap"], [1, "me-2"], [1, "col-4"], ["for", "groupBy"], ["appearance", "fill"], [3, "ngModel", "ngModelChange", "selectionChange"], ["value", "date"], ["value", "project_WorkOrder"], ["value", "member"], [1, "col-md-6", "text-end", "align-self-end"], [1, "d-flex", "justify-content-end", "align-items-end", "flex-column", "apps_urls"], [1, "activity_table_menu_wrap"], [1, "left_links"], [1, "text_gradient", "cursor-pointer", 3, "click"], ["src", "../../../../assets/images/icon/send.svg", "alt", ""], ["src", "../../../../assets/images/icon/schedule.svg", "alt", ""], [1, "dropdown"], ["data-toggle", "dropdown", "type", "button", "id", "settingMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "text_gradient", "cursor-pointer"], ["src", "../../../../assets/images/icon/export.svg", "alt", ""], ["aria-labelledby", "settingMenuButton", 1, "dropdown-menu"], [1, "dropdown-item"], [1, "col-5"], ["type", "text", "matInput", "", "placeholder", "Search", 3, "formControl"], ["sortMode", "single", "rowGroupMode", "subheader", "responsiveLayout", "none", 3, "value", "sortField", "dataKey", "groupRowsBy", "columns", "scrollable"], ["pTemplate", "header"], ["pTemplate", "groupheader"], ["pTemplate", "rowexpansion"], [4, "ngFor", "ngForOf"], ["pRipple", "", 3, "pRowToggler"], ["colspan", "", 2, "text-align", "left !important"], ["type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "p-button-plain", "p-mr-2", 3, "icon"], [1, "p-text-bold", "p-ml-2"], ["colspan", "99"]],
    template: function AppsUrlsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Apps & Urls Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 3)(10, "div", 7)(11, "a", 8)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " Scheduled Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 10)(16, "div", 3)(17, "ul", 11)(18, "li", 12)(19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppsUrlsComponent_Template_a_click_19_listener() {
          return ctx.OnTabClick("me");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "li", 12)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppsUrlsComponent_Template_a_click_22_listener() {
          return ctx.OnTabClick("all");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 15)(25, "form", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "div", 18)(30, "app-date-time-range-picker", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("formControlSelectedDateValue", function AppsUrlsComponent_Template_app_date_time_range_picker_formControlSelectedDateValue_30_listener($event) {
          return ctx.SelectedDateEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 21)(32, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppsUrlsComponent_Template_button_click_32_listener() {
          return ctx.OnFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 23)(35, "div", 3)(36, "div", 24)(37, "h3", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Asia - Kolkata");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 26)(42, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Group By: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "mat-form-field", 28)(45, "mat-select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AppsUrlsComponent_Template_mat_select_ngModelChange_45_listener($event) {
          return ctx.groupBy = $event;
        })("selectionChange", function AppsUrlsComponent_Template_mat_select_selectionChange_45_listener() {
          return ctx.changeGroupby();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "mat-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "mat-option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 33)(53, "div", 34)(54, "div", 35)(55, "ul", 36)(56, "li")(57, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppsUrlsComponent_Template_a_click_57_listener() {
          return ctx.OnSend();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](58, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, " Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "li")(61, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppsUrlsComponent_Template_a_click_61_listener() {
          return ctx.OnSchedule();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](62, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, " Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "li")(65, "div", 40)(66, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](67, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "ul", 43)(70, "li")(71, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, "To CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "li")(74, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75, "To PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 45)(77, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](78, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div")(80, "div")(81, "p-table", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](82, AppsUrlsComponent_ng_template_82_Template, 2, 1, "ng-template", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](83, AppsUrlsComponent_ng_template_83_Template, 6, 3, "ng-template", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](84, AppsUrlsComponent_ng_template_84_Template, 2, 1, "ng-template", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControlFromDateNameValue", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx.organizationDetails["organization_Name"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.groupBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx.textFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.appsUrlsArray)("sortField", ctx.groupBy)("dataKey", ctx.groupBy)("groupRowsBy", ctx.groupBy)("columns", ctx.appsUrlsTableCols)("scrollable", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_6__.DateTimeRangePickerComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, primeng_button__WEBPACK_IMPORTED_MODULE_16__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_17__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_18__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_17__.RowToggler]
  });
  return AppsUrlsComponent;
})();

/***/ }),

/***/ 38799:
/*!**************************************************************************!*\
  !*** ./src/app/pages/reports/client-budgets/client-budgets.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientBudgetsComponent": () => (/* binding */ ClientBudgetsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/reports */ 46156);
/* harmony import */ var src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/report-filter/report-filter.component */ 32272);
/* harmony import */ var src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pop-up-model/schedule-report-model/schedule-report-model.component */ 450);
/* harmony import */ var src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pop-up-model/send-report-model/send-report-model.component */ 28096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/date-time-range-picker/date-time-range-picker.component */ 96991);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 47873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ 73162);




















function ClientBudgetsComponent_ng_template_69_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", col_r5.label, " ");
  }
}

function ClientBudgetsComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ClientBudgetsComponent_ng_template_69_th_1_Template, 2, 1, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", columns_r3);
  }
}

function ClientBudgetsComponent_ng_template_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 44)(1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const rowData_r6 = ctx.$implicit;
    const expanded_r8 = ctx.expanded;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pRowToggler", rowData_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", expanded_r8 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rowData_r6[ctx_r1.groupBy]);
  }
}

function ClientBudgetsComponent_ng_template_71_td_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const rowData_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r9[col_r12.key], " ");
  }
}

function ClientBudgetsComponent_ng_template_71_td_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "mat-progress-bar", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const col_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const rowData_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r9["budget_rate"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", rowData_r9["budget"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", rowData_r9[col_r12.key], " %");
  }
}

function ClientBudgetsComponent_ng_template_71_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ClientBudgetsComponent_ng_template_71_td_1_span_1_Template, 2, 1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ClientBudgetsComponent_ng_template_71_td_1_span_2_Template, 5, 3, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", col_r12.config.isText);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", col_r12.config == null ? null : col_r12.config.isProgressbar);
  }
}

function ClientBudgetsComponent_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ClientBudgetsComponent_ng_template_71_td_1_Template, 3, 2, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r10 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", columns_r10);
  }
}

const _c0 = function () {
  return ["/reports/all-reports"];
};

let ClientBudgetsComponent = /*#__PURE__*/(() => {
  class ClientBudgetsComponent {
    constructor(masterService, formBuilder, matDialog) {
      this.masterService = masterService;
      this.formBuilder = formBuilder;
      this.matDialog = matDialog;
      this.organizationDetails = {};
      this.groupBy = 'month';
      this.clientBudgetsArray = [{
        client: 'c1',
        spent: '2:26',
        budget: '86',
        budget_rate: '500:00',
        remaining: '497:33',
        month: 'fixed'
      }];
      this.clientBudgetsTableCols = [];
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.filterForm = this.formBuilder.group({
        fromDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        toDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
      });
      this.changeGroupby();
    }

    changeGroupby() {
      this.clientBudgetsTableCols = [];
      src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__.clientBudgetsTable.forEach(element => {
        if (this.groupBy != element.key) {
          this.clientBudgetsTableCols.push(element);
        }
      });
    }

    SelectedDateEvent(event) {
      const fromDate = event.fromDate;
      const toDate = event.toDate;

      if (fromDate && toDate) {
        this.filterForm.patchValue({
          fromDate: new Date(fromDate),
          toDate: new Date(toDate)
        });
      }
    }

    OnSend() {
      const sendDialog = this.matDialog.open(src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__.SendReportModelComponent, {
        width: '675px'
      });
    }

    OnSchedule() {
      const scheduleDialog = this.matDialog.open(src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__.ScheduleReportModelComponent, {
        width: '675px'
      });
    }

    OnFilter() {
      let reportData = {
        reportName: 'Client Budgets',
        filterInput: {
          clients: true
        },
        currentTab: ''
      };
      const filterDialog = this.matDialog.open(src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__.ReportFilterComponent, {
        width: '675px',
        data: reportData
      });
    }

  }

  ClientBudgetsComponent.ɵfac = function ClientBudgetsComponent_Factory(t) {
    return new (t || ClientBudgetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog));
  };

  ClientBudgetsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ClientBudgetsComponent,
    selectors: [["app-client-budgets"]],
    decls: 72,
    vars: 12,
    consts: [[1, "white_box", "dashboars_title", "main_content"], [1, ""], [1, "row", "align-items-center", "mb-4"], [1, "col-md-6"], [1, "setting_title", 3, "routerLink"], ["src", "../../../../assets/images/icon/back-arrow-blue.svg", "alt", ""], [1, "mb-0"], [1, "text-end"], ["href", "/reports/scheduled-reports", 1, "text_dark_gradient", "btn_dark_text"], [1, "fa", "fa-clock"], [1, "row", "align-items-center", "mb-5"], [1, "col-md-6", "text-end"], [3, "formGroup"], [1, "row", "justify-content-end"], [1, "col-md-8"], [1, "row"], [3, "formControlFromDateNameValue", "formControlSelectedDateValue"], [1, "col-md-4"], ["type", "submit", 1, "btn_blue", 3, "click"], [1, "d-flex", "align-items-baseline"], [1, "me-2"], [1, "col-md-3"], ["for", "groupBy"], ["appearance", "fill"], ["name", "groupBy", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "month"], ["value", "client"], [1, "col-md-9", "text-end"], [1, "activity_table_menu_wrap"], [1, "left_links"], [1, "text_gradient", "cursor-pointer", 3, "click"], ["src", "../../../../assets/images/icon/send.svg", "alt", ""], ["src", "../../../../assets/images/icon/schedule.svg", "alt", ""], [1, "dropdown"], ["data-toggle", "dropdown", "type", "button", "id", "settingMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "text_gradient", "cursor-pointer"], ["src", "../../../../assets/images/icon/export.svg", "alt", ""], ["aria-labelledby", "settingMenuButton", 1, "dropdown-menu"], [1, "dropdown-item"], [1, "row", "mb-5"], ["sortMode", "single", "rowGroupMode", "subheader", "responsiveLayout", "none", 3, "value", "sortField", "dataKey", "responsive", "groupRowsBy", "columns"], ["pTemplate", "header"], ["pTemplate", "groupheader"], ["pTemplate", "rowexpansion"], [4, "ngFor", "ngForOf"], ["pRipple", "", 3, "pRowToggler"], ["colspan", "2", 2, "text-align", "left !important"], ["type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "p-button-plain", "p-mr-2", 3, "icon"], [1, "p-text-bold", "p-ml-2"], ["colspan", "15"], [4, "ngIf"], ["class", "d-flex", 4, "ngIf"], [1, "d-flex"], ["mode", "determinate", 3, "value"]],
    template: function ClientBudgetsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Client Budgets Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 3)(10, "div", 7)(11, "a", 8)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Scheduled Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 11)(18, "form", 12)(19, "div", 13)(20, "div", 14)(21, "div", 15)(22, "div", 14)(23, "app-date-time-range-picker", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("formControlSelectedDateValue", function ClientBudgetsComponent_Template_app_date_time_range_picker_formControlSelectedDateValue_23_listener($event) {
          return ctx.SelectedDateEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 17)(25, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientBudgetsComponent_Template_button_click_25_listener() {
          return ctx.OnFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 19)(28, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Asia - Kolkata");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 10)(33, "div", 21)(34, "div")(35, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Group By:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "mat-form-field", 23)(38, "mat-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ClientBudgetsComponent_Template_mat_select_ngModelChange_38_listener($event) {
          return ctx.groupBy = $event;
        })("selectionChange", function ClientBudgetsComponent_Template_mat_select_selectionChange_38_listener() {
          return ctx.changeGroupby();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 27)(44, "div", 28)(45, "ul", 29)(46, "li")(47, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientBudgetsComponent_Template_a_click_47_listener() {
          return ctx.OnSend();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](48, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, " Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "li")(51, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientBudgetsComponent_Template_a_click_51_listener() {
          return ctx.OnSchedule();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](52, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "li")(55, "div", 33)(56, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](57, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "ul", 36)(60, "li")(61, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "To CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "li")(64, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "To PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 38)(67, "div")(68, "p-table", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](69, ClientBudgetsComponent_ng_template_69_Template, 2, 1, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](70, ClientBudgetsComponent_ng_template_70_Template, 6, 3, "ng-template", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](71, ClientBudgetsComponent_ng_template_71_Template, 2, 1, "ng-template", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlFromDateNameValue", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.organizationDetails["organization_Name"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.groupBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.clientBudgetsArray)("sortField", ctx.groupBy)("dataKey", ctx.groupBy)("responsive", false)("groupRowsBy", ctx.groupBy)("columns", ctx.clientBudgetsTableCols);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__.DateTimeRangePickerComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_15__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_16__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_15__.RowToggler, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__.MatProgressBar]
  });
  return ClientBudgetsComponent;
})();

/***/ }),

/***/ 13456:
/*!**********************************************************************!*\
  !*** ./src/app/pages/reports/daily-limits/daily-limits.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DailyLimitsComponent": () => (/* binding */ DailyLimitsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/reports */ 46156);
/* harmony import */ var src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/report-filter/report-filter.component */ 32272);
/* harmony import */ var src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pop-up-model/schedule-report-model/schedule-report-model.component */ 450);
/* harmony import */ var src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pop-up-model/send-report-model/send-report-model.component */ 28096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/date-time-range-picker/date-time-range-picker.component */ 96991);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 47873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ 73162);




















function DailyLimitsComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 46)(1, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DailyLimitsComponent_div_31_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.OnFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}

function DailyLimitsComponent_ng_template_74_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", col_r8.label, " ");
  }
}

function DailyLimitsComponent_ng_template_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DailyLimitsComponent_ng_template_74_th_1_Template, 2, 1, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", columns_r6);
  }
}

function DailyLimitsComponent_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 49)(1, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const expanded_r11 = ctx.expanded;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pRowToggler", rowData_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", expanded_r11 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rowData_r9[ctx_r2.groupBy]);
  }
}

function DailyLimitsComponent_ng_template_76_td_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const rowData_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r12[col_r15.key], " ");
  }
}

function DailyLimitsComponent_ng_template_76_td_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-progress-bar", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const col_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const rowData_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", rowData_r12["percentage_used"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", rowData_r12[col_r15.key], " %");
  }
}

function DailyLimitsComponent_ng_template_76_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DailyLimitsComponent_ng_template_76_td_1_span_1_Template, 2, 1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DailyLimitsComponent_ng_template_76_td_1_span_2_Template, 4, 2, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", col_r15.config.isText);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", col_r15.config == null ? null : col_r15.config.isProgressbar);
  }
}

function DailyLimitsComponent_ng_template_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DailyLimitsComponent_ng_template_76_td_1_Template, 3, 2, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r13 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", columns_r13);
  }
}

const _c0 = function () {
  return ["/reports/all-reports"];
};

let DailyLimitsComponent = /*#__PURE__*/(() => {
  class DailyLimitsComponent {
    constructor(masterService, formBuilder, matDialog) {
      this.masterService = masterService;
      this.formBuilder = formBuilder;
      this.matDialog = matDialog;
      this.currentTab = 'all';
      this.organizationDetails = {};
      this.groupBy = 'date';
      this.daliyLimitTableCols = [];
      this.dailyLimitArray = [{
        date: '2022-09-14',
        member: 'Minal',
        time_spent: '1:42:46',
        daily_limit: '2:00:00',
        percentage_used: '86',
        remaining: '0:17:14'
      }];
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.filterForm = this.formBuilder.group({
        fromDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        toDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
      });
      this.changeGroupby();
    }

    changeGroupby() {
      this.daliyLimitTableCols = [];
      src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__.dailyLimitTable.forEach(element => {
        if (this.groupBy != element.key) {
          this.daliyLimitTableCols.push(element);
        }
      });
    }

    OnTabClick(type) {
      this.currentTab = type;
    }

    SelectedDateEvent(event) {
      const fromDate = event.fromDate;
      const toDate = event.toDate;

      if (fromDate && toDate) {
        this.filterForm.patchValue({
          fromDate: new Date(fromDate),
          toDate: new Date(toDate)
        });
      }
    }

    OnSend() {
      const sendDialog = this.matDialog.open(src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__.SendReportModelComponent, {
        width: '675px'
      });
    }

    OnSchedule() {
      const scheduleDialog = this.matDialog.open(src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__.ScheduleReportModelComponent, {
        width: '675px'
      });
    }

    OnFilter() {
      let reportData = {
        reportName: 'Daily-limit',
        filterInput: {},
        currentTab: this.currentTab
      };
      const filterDialog = this.matDialog.open(src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__.ReportFilterComponent, {
        width: '675px',
        data: reportData
      });
    }

  }

  DailyLimitsComponent.ɵfac = function DailyLimitsComponent_Factory(t) {
    return new (t || DailyLimitsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog));
  };

  DailyLimitsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: DailyLimitsComponent,
    selectors: [["app-daily-limits"]],
    decls: 77,
    vars: 13,
    consts: [[1, "white_box", "dashboars_title", "main_content"], [1, ""], [1, "row", "align-items-center", "mb-4"], [1, "col-md-6"], [1, "setting_title", 3, "routerLink"], ["src", "../../../../assets/images/icon/back-arrow-blue.svg", "alt", ""], [1, "mb-0"], [1, "text-end"], ["href", "/reports/scheduled-reports", 1, "text_dark_gradient", "btn_dark_text"], [1, "fa", "fa-clock"], [1, "row", "align-items-center", "mb-5"], [1, "nav", "nav-tabs", "tab_design_one"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#me", 1, "nav-link", 3, "click"], ["data-bs-toggle", "tab", "href", "#all", 1, "nav-link", "active", 3, "click"], [1, "col-md-6", "text-end"], [3, "formGroup"], [1, "row", "justify-content-end"], [1, "col-md-8"], [1, "row"], [3, "formControlFromDateNameValue", "formControlSelectedDateValue"], ["class", "col-md-4", 4, "ngIf"], [1, "d-flex", "align-items-baseline"], [1, "me-2"], [1, "col-md-3"], ["for", "groupBy"], ["appearance", "fill"], ["name", "groupBy", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "date"], ["value", "member"], [1, "col-md-9", "text-end"], [1, "activity_table_menu_wrap"], [1, "left_links"], [1, "text_gradient", "cursor-pointer", 3, "click"], ["src", "../../../../assets/images/icon/send.svg", "alt", ""], ["src", "../../../../assets/images/icon/schedule.svg", "alt", ""], [1, "dropdown"], ["data-toggle", "dropdown", "type", "button", "id", "settingMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "text_gradient", "cursor-pointer"], ["src", "../../../../assets/images/icon/export.svg", "alt", ""], ["aria-labelledby", "settingMenuButton", 1, "dropdown-menu"], [1, "dropdown-item"], [1, "row", "mb-5"], ["sortMode", "single", "rowGroupMode", "subheader", "responsiveLayout", "none", 3, "value", "sortField", "dataKey", "responsive", "groupRowsBy", "columns"], ["pTemplate", "header"], ["pTemplate", "groupheader"], ["pTemplate", "rowexpansion"], [1, "col-md-4"], ["type", "submit", 1, "btn_blue", 3, "click"], [4, "ngFor", "ngForOf"], ["pRipple", "", 3, "pRowToggler"], ["colspan", "2", 2, "text-align", "left !important"], ["type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "p-button-plain", "p-mr-2", 3, "icon"], [1, "p-text-bold", "p-ml-2"], ["colspan", "15"], [4, "ngIf"], ["class", "d-flex", 4, "ngIf"], [1, "d-flex"], ["mode", "determinate", 3, "value"]],
    template: function DailyLimitsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Daily Limits Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 3)(10, "div", 7)(11, "a", 8)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Scheduled Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 10)(16, "div", 3)(17, "ul", 11)(18, "li", 12)(19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DailyLimitsComponent_Template_a_click_19_listener() {
          return ctx.OnTabClick("me");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "li", 12)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DailyLimitsComponent_Template_a_click_22_listener() {
          return ctx.OnTabClick("all");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 15)(25, "form", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "div", 18)(30, "app-date-time-range-picker", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("formControlSelectedDateValue", function DailyLimitsComponent_Template_app_date_time_range_picker_formControlSelectedDateValue_30_listener($event) {
          return ctx.SelectedDateEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, DailyLimitsComponent_div_31_Template, 3, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 22)(33, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Asia - Kolkata");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 10)(38, "div", 24)(39, "div")(40, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Group By:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "mat-form-field", 26)(43, "mat-select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function DailyLimitsComponent_Template_mat_select_ngModelChange_43_listener($event) {
          return ctx.groupBy = $event;
        })("selectionChange", function DailyLimitsComponent_Template_mat_select_selectionChange_43_listener() {
          return ctx.changeGroupby();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "mat-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 30)(49, "div", 31)(50, "ul", 32)(51, "li")(52, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DailyLimitsComponent_Template_a_click_52_listener() {
          return ctx.OnSend();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](53, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, " Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "li")(56, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DailyLimitsComponent_Template_a_click_56_listener() {
          return ctx.OnSchedule();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](57, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "li")(60, "div", 36)(61, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](62, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "ul", 39)(65, "li")(66, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "To CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "li")(69, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "To PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 41)(72, "div")(73, "p-table", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](74, DailyLimitsComponent_ng_template_74_Template, 2, 1, "ng-template", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](75, DailyLimitsComponent_ng_template_75_Template, 6, 3, "ng-template", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](76, DailyLimitsComponent_ng_template_76_Template, 2, 1, "ng-template", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlFromDateNameValue", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentTab == "all");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.organizationDetails["organization_Name"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.groupBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.dailyLimitArray)("sortField", ctx.groupBy)("dataKey", ctx.groupBy)("responsive", false)("groupRowsBy", ctx.groupBy)("columns", ctx.daliyLimitTableCols);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__.DateTimeRangePickerComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_15__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_16__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_15__.RowToggler, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__.MatProgressBar]
  });
  return DailyLimitsComponent;
})();

/***/ }),

/***/ 83431:
/*!**************************************************************!*\
  !*** ./src/app/pages/reports/expenses/expenses.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpensesComponent": () => (/* binding */ ExpensesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 46758);
/* harmony import */ var src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/reports */ 46156);
/* harmony import */ var src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/report-filter/report-filter.component */ 32272);
/* harmony import */ var src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pop-up-model/schedule-report-model/schedule-report-model.component */ 450);
/* harmony import */ var src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pop-up-model/send-report-model/send-report-model.component */ 28096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/date-time-range-picker/date-time-range-picker.component */ 96991);
/* harmony import */ var _shared_common_line_chart_common_line_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/common-line-chart/common-line-chart.component */ 99949);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 47873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ 56709);






















function ExpensesComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 59)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Total Amount Per Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-common-line-chart", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("lineChartData", ctx_r0.lineChartData)("lineChartLabel", ctx_r0.lineChartLabel)("date", ctx_r0.date);
  }
}

const _c0 = function (a0) {
  return {
    "checkBoxDisable": a0
  };
};

function ExpensesComponent_li_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 61)(1, "a", 48)(2, "mat-checkbox", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ExpensesComponent_li_94_Template_mat_checkbox_change_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const col_r5 = restoredCtx.$implicit;
      const i_r6 = restoredCtx.index;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.OnColumnToggle(col_r5, i_r6, $event.checked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const col_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](4, _c0, col_r5["disable"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", col_r5.disable)("checked", col_r5.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", col_r5.label, " ");
  }
}

function ExpensesComponent_ng_template_98_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", col_r11.label, " ");
  }
}

function ExpensesComponent_ng_template_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ExpensesComponent_ng_template_98_th_1_Template, 2, 1, "th", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", columns_r9);
  }
}

function ExpensesComponent_ng_template_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 64)(1, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "td", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const rowData_r12 = ctx.$implicit;
    const expanded_r14 = ctx.expanded;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pRowToggler", rowData_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", expanded_r14 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](rowData_r12[ctx_r3.groupBy]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("$", ctx_r3.calculateCustomerTotal(rowData_r12.date), ".00");
  }
}

function ExpensesComponent_ng_template_100_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r18 = ctx.$implicit;
    const rowData_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r15[col_r18.key], " ");
  }
}

function ExpensesComponent_ng_template_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ExpensesComponent_ng_template_100_td_1_Template, 2, 1, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r16 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", columns_r16);
  }
}

const _c1 = function () {
  return ["/reports/all-reports"];
};

let ExpensesComponent = /*#__PURE__*/(() => {
  class ExpensesComponent {
    constructor(formBuilder, matDialog, masterService) {
      this.formBuilder = formBuilder;
      this.matDialog = matDialog;
      this.masterService = masterService;
      this.date = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
      this.groupBy = 'date';
      this.expenses = [{
        "id": 1000,
        "projectOrder": "BA",
        "member": "Ravi",
        "desctiption": "",
        "amount": 200,
        "category": "",
        "notes": '',
        "date": "We, Jul 14, 2021"
      }, {
        "id": 1001,
        "projectOrder": "BA",
        "member": "Ravi",
        "desctiption": "",
        "amount": 300,
        "category": "",
        "notes": '',
        "date": "Th, Jul 15, 2021"
      }, {
        "id": 1002,
        "projectOrder": "BA",
        "member": "Ravi",
        "desctiption": "abc",
        "amount": 100,
        "category": "car",
        "notes": '',
        "date": "Th, Jul 15, 2021"
      }];
      this.cols = [];
      this.expensesCols = src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__.expensesTable;
      this.expensesShowCols = [];
      this.showExpensesGraph = true;
      this.currentTab = 'all';
      this.organizationDetails = {};
      this.lineChartData = {
        datasets: [{
          data: [0, 50, 0, 200, 0, 300, 0],
          label: 'Tracked',
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          fill: 'origin'
        }, {
          data: [0, 83, 0, 0, 55, 0, 0],
          label: 'Manual',
          backgroundColor: 'rgba(77,83,96,0.2)',
          borderColor: 'rgba(77,83,96,1)',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)',
          fill: 'origin'
        }, {
          data: [30, 0, 0, 0, 0, 0, 10],
          label: 'Break',
          backgroundColor: 'rgba(255,0,0,0.3)',
          borderColor: 'red',
          pointBackgroundColor: 'red',
          pointBorderColor: 'red',
          pointHoverBackgroundColor: 'red',
          pointHoverBorderColor: 'red',
          fill: 'origin'
        }],
        labels: []
      };
      this.lineChartLabel = [];
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.cols = JSON.parse(JSON.stringify(this.expensesCols)); // this.expensesShowCols = this.expensesCols;

      this.filterForm = this.formBuilder.group({
        fromDate: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        toDate: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
      });
      setTimeout(() => {
        this.date.next({
          fromDate: this.filterForm.controls['fromDate'].value,
          toDate: this.filterForm.controls['toDate'].value
        });
      }, 100);
      this.changeGroupby();
    }

    calculateCustomerTotal(date) {
      let total = 0;

      if (this.expenses) {
        for (let customer of this.expenses) {
          if (customer.date === date) {
            total += customer.amount;
          }
        }
      }

      return total;
    }

    changeGroupby() {
      this.expensesShowCols = [];
      this.expensesCols.forEach(element => {
        if (element.selected) {
          if (this.groupBy != element.key) {
            this.expensesShowCols.push(element);
          }
        }
      });
    }

    OnColumnToggle(col, indexElement, event) {
      this.expensesCols.forEach(element => {
        if (element.key == col.key) {
          element.selected = event;
        }
      });
      this.changeGroupby(); // this.expensesShowCols = this.masterService.OnColumnToggle(col, indexElement, event, this.expensesCols, this.expensesShowCols, 0);
    }

    SelectedDateEvent(event) {
      const fromDate = event.fromDate;
      const toDate = event.toDate;

      if (fromDate && toDate) {
        this.filterForm.patchValue({
          fromDate: fromDate,
          toDate: toDate
        });
        this.date.next({
          fromDate: this.filterForm.controls['fromDate'].value,
          toDate: this.filterForm.controls['toDate'].value
        });
      }
    }

    ShowGraph() {
      if (this.showExpensesGraph == true) {
        this.showExpensesGraph = false;
      } else {
        this.showExpensesGraph = true;
      }
    }

    OnSend() {
      const sendDialog = this.matDialog.open(src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__.SendReportModelComponent, {
        width: '675px'
      });
    }

    OnSchedule() {
      const scheduleDialog = this.matDialog.open(src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__.ScheduleReportModelComponent, {
        width: '675px'
      });
    }

    OnFilter() {
      let reportData = {
        reportName: 'Expenses',
        filterInput: {
          billing_type: true,
          projects: true,
          categories: true,
          sum_date_ranges: true,
          include_archived_project: true
        },
        currentTab: this.currentTab
      };
      const filterDialog = this.matDialog.open(src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__.ReportFilterComponent, {
        width: '675px',
        data: reportData
      });
    }

    OnTabClick(type) {
      this.currentTab = type;
    }

  }

  ExpensesComponent.ɵfac = function ExpensesComponent_Factory(t) {
    return new (t || ExpensesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__.MasterService));
  };

  ExpensesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: ExpensesComponent,
    selectors: [["app-expenses"]],
    decls: 101,
    vars: 14,
    consts: [[1, "white_box", "dashboars_title", "main_content"], [1, "top_title_wrap"], [1, "row", "align-items-center", "mb-4"], [1, "col-md-6"], [1, "setting_title", 3, "routerLink"], ["src", "../../../../assets/images/icon/back-arrow-blue.svg", "alt", ""], [1, "mb-0"], [1, "text-end"], ["routerLink", "/reports/scheduled-reports", 1, "text_dark_gradient", "btn_dark_text"], [1, "fa", "fa-clock"], [1, "row", "align-items-center", "mb-5"], [1, "nav", "nav-tabs", "tab_design_one"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#me", 1, "nav-link", 3, "click"], ["data-bs-toggle", "tab", "href", "#all", 1, "nav-link", "active", 3, "click"], [1, "col-md-6", "text-end"], [3, "formGroup"], [1, "row", "justify-content-end"], [1, "col-md-8"], [1, "row"], [3, "formControlFromDateNameValue", "formControlSelectedDateValue"], [1, "col-md-4"], ["type", "submit", 1, "btn_blue", 3, "click"], [1, "activity_top_wrap", "mb-5"], [1, "activity_left_text"], [1, "text_green_gradient"], [3, "ngClass", "click"], [1, "fa-solid", "fa-chart-column"], ["class", "mt-3", 4, "ngIf"], [1, "d-flex", "align-items-baseline"], [1, "me-2"], [1, "col-md-3"], ["for", "groupBy"], ["appearance", "fill"], ["name", "groupBy", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "date"], ["value", "member"], ["value", "projectOrder"], [1, "col-md-9", "text-end"], [1, "activity_table_menu_wrap"], [1, "left_links"], [1, "text_gradient", "cursor-pointer", 3, "click"], ["src", "../../../../assets/images/icon/send.svg", "alt", ""], ["src", "../../../../assets/images/icon/schedule.svg", "alt", ""], [1, "dropdown"], ["data-toggle", "dropdown", "type", "button", "id", "settingMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "text_gradient", "cursor-pointer"], ["src", "../../../../assets/images/icon/export.svg", "alt", ""], ["aria-labelledby", "settingMenuButton", 1, "dropdown-menu"], [1, "dropdown-item"], [1, "d-flex"], ["data-toggle", "dropdown", "type", "button", "id", "filterMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn_round_gray", "me-3"], [1, "fa-solid", "fa-filter"], ["aria-labelledby", "dropdownMenuButton1", 1, "dropdown-menu"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "row", "mb-5"], ["sortMode", "single", "rowGroupMode", "subheader", 3, "value", "sortField", "dataKey", "groupRowsBy", "columns"], ["pTemplate", "header"], ["pTemplate", "groupheader"], ["pTemplate", "rowexpansion"], [1, "mt-3"], [3, "lineChartData", "lineChartLabel", "date"], [3, "ngClass"], [3, "disabled", "checked", "change"], [4, "ngFor", "ngForOf"], ["pRipple", "", 3, "pRowToggler"], ["colspan", "3", 2, "text-align", "left !important"], ["type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "p-button-plain", "p-mr-2", 3, "icon"], [1, "p-text-bold", "p-ml-2"], ["colspan", "2"]],
    template: function ExpensesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Expense Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 3)(10, "div", 7)(11, "a", 8)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " Scheduled Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 10)(16, "div", 3)(17, "ul", 11)(18, "li", 12)(19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExpensesComponent_Template_a_click_19_listener() {
          return ctx.OnTabClick("me");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "li", 12)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExpensesComponent_Template_a_click_22_listener() {
          return ctx.OnTabClick("all");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 15)(25, "form", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "div", 18)(30, "app-date-time-range-picker", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("formControlSelectedDateValue", function ExpensesComponent_Template_app_date_time_range_picker_formControlSelectedDateValue_30_listener($event) {
          return ctx.SelectedDateEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 21)(32, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExpensesComponent_Template_button_click_32_listener() {
          return ctx.OnFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 23)(35, "div", 24)(36, "ul")(37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Expenses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "$400.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExpensesComponent_Template_button_click_45_listener() {
          return ctx.ShowGraph();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](46, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, ExpensesComponent_div_47_Template, 5, 3, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 29)(49, "h3", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "Asia - Kolkata");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 10)(54, "div", 31)(55, "div")(56, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "Group By:");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "mat-form-field", 33)(59, "mat-select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExpensesComponent_Template_mat_select_ngModelChange_59_listener($event) {
          return ctx.groupBy = $event;
        })("selectionChange", function ExpensesComponent_Template_mat_select_selectionChange_59_listener() {
          return ctx.changeGroupby();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "mat-option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "mat-option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "mat-option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 38)(67, "div", 39)(68, "ul", 40)(69, "li")(70, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExpensesComponent_Template_a_click_70_listener() {
          return ctx.OnSend();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](71, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, " Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "li")(74, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExpensesComponent_Template_a_click_74_listener() {
          return ctx.OnSchedule();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](75, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, " Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "li")(78, "div", 44)(79, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](80, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](81, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "ul", 47)(83, "li")(84, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, "To CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "li")(87, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88, "To PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "div", 49)(90, "div", 44)(91, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](92, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "ul", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](94, ExpensesComponent_li_94_Template, 4, 6, "li", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "div", 54)(96, "div")(97, "p-table", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](98, ExpensesComponent_ng_template_98_Template, 2, 1, "ng-template", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](99, ExpensesComponent_ng_template_99_Template, 8, 4, "ng-template", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](100, ExpensesComponent_ng_template_100_Template, 2, 1, "ng-template", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](13, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControlFromDateNameValue", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.showExpensesGraph == true ? "activity_filter_btn" : "activity_filter_btn_active");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showExpensesGraph);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx.organizationDetails["organization_Name"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.groupBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.cols);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.expenses)("sortField", ctx.groupBy)("dataKey", ctx.groupBy)("groupRowsBy", ctx.groupBy)("columns", ctx.expensesShowCols);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__.DateTimeRangePickerComponent, _shared_common_line_chart_common_line_chart_component__WEBPACK_IMPORTED_MODULE_6__.CommonLineChartComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, primeng_button__WEBPACK_IMPORTED_MODULE_16__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_17__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_18__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_17__.RowToggler, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckbox]
  });
  return ExpensesComponent;
})();

/***/ }),

/***/ 40520:
/*!********************************************************************************!*\
  !*** ./src/app/pages/reports/manual-time-edits/manual-time-edits.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManualTimeEditsComponent": () => (/* binding */ ManualTimeEditsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/reports */ 46156);
/* harmony import */ var src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/report-filter/report-filter.component */ 32272);
/* harmony import */ var src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pop-up-model/schedule-report-model/schedule-report-model.component */ 450);
/* harmony import */ var src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pop-up-model/send-report-model/send-report-model.component */ 28096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/date-time-range-picker/date-time-range-picker.component */ 96991);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);

















function ManualTimeEditsComponent_ng_template_83_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", col_r5.label, " ");
  }
}

function ManualTimeEditsComponent_ng_template_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ManualTimeEditsComponent_ng_template_83_th_1_Template, 2, 1, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", columns_r3);
  }
}

function ManualTimeEditsComponent_ng_template_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 47)(1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const rowData_r6 = ctx.$implicit;
    const expanded_r8 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pRowToggler", rowData_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", expanded_r8 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rowData_r6.date);
  }
}

function ManualTimeEditsComponent_ng_template_85_td_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 54)(1, "span", 54)(2, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const col_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const rowData_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rowData_r9[col_r12.key].charAt(0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r9[col_r12.key], "");
  }
}

function ManualTimeEditsComponent_ng_template_85_td_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const rowData_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", rowData_r9["action"] == "Add" ? "bg-success" : "bg-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r9[col_r12.key], "");
  }
}

function ManualTimeEditsComponent_ng_template_85_td_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const col_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const rowData_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r9[col_r12.key], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate2"]("matTooltip", "", rowData_r9["action"], ": ", rowData_r9["timeChange"], "");
  }
}

function ManualTimeEditsComponent_ng_template_85_td_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const rowData_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rowData_r9[col_r12.key]);
  }
}

function ManualTimeEditsComponent_ng_template_85_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ManualTimeEditsComponent_ng_template_85_td_1_span_1_Template, 5, 2, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ManualTimeEditsComponent_ng_template_85_td_1_span_2_Template, 2, 2, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ManualTimeEditsComponent_ng_template_85_td_1_span_3_Template, 4, 3, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ManualTimeEditsComponent_ng_template_85_td_1_span_4_Template, 2, 1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (col_r12.config == null ? null : col_r12.config.isProfileWithLetter) && !(col_r12.config == null ? null : col_r12.config.isProfile) && !(col_r12.config == null ? null : col_r12.config.isProfileActive) && !(col_r12.config == null ? null : col_r12.config.isBadge) && !(col_r12.config == null ? null : col_r12.config.isProject_todo));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", col_r12.config == null ? null : col_r12.config.isStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", col_r12.config == null ? null : col_r12.config.isInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", col_r12.config == null ? null : col_r12.config.isText);
  }
}

function ManualTimeEditsComponent_ng_template_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ManualTimeEditsComponent_ng_template_85_td_1_Template, 5, 4, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r10 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", columns_r10);
  }
}

const _c0 = function () {
  return ["/reports/all-reports"];
};

let ManualTimeEditsComponent = /*#__PURE__*/(() => {
  class ManualTimeEditsComponent {
    constructor(formBuilder, matDialog, masterService) {
      this.formBuilder = formBuilder;
      this.matDialog = matDialog;
      this.masterService = masterService;
      this.organizationDetails = {};
      this.manualTimeEditValue = [{
        projectOrder: 'Admin1',
        toDo: 'No to-do / job',
        member: 'client 1',
        action: 'Add',
        timeSpan: 'Mon, Aug 15, 2022 9:00...',
        timeChange: '01:00',
        reason: 'test',
        changedBy: 'harsh',
        changedAt: '11:54 am',
        date: "Changes made Mon, Aug 15, 2022"
      }, {
        projectOrder: 'BA',
        toDo: 'No to-do / job',
        member: 'Ravi',
        action: 'Delete',
        timeSpan: 'Tue, Aug 16, 2022 9:00...',
        timeChange: '-01:00',
        reason: 'test',
        changedBy: 'harsh',
        changedAt: '11:54 am',
        date: "Changes made Tue, Aug 16, 2022"
      }];
      this.manualTimeEditCols = src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__.manualTimeEditTable;
      this.currentTab = 'all';
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.filterForm = this.formBuilder.group({
        fromDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        todate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
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
    }

    OnSend() {
      const sendDialog = this.matDialog.open(src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__.SendReportModelComponent, {
        width: '675px'
      });
    }

    OnSchedule() {
      const scheduleDialog = this.matDialog.open(src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__.ScheduleReportModelComponent, {
        width: '675px'
      });
    }

    OnFilter() {
      let reportData = {
        reportName: 'Manual-time-edit',
        filterInput: {
          projects: true,
          to_dos: true,
          status: true
        },
        currentTab: this.currentTab
      };
      const filterDialog = this.matDialog.open(src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__.ReportFilterComponent, {
        width: '675px',
        data: reportData
      });
    }

    OnTabClick(type) {
      this.currentTab = type;
    }

  }

  ManualTimeEditsComponent.ɵfac = function ManualTimeEditsComponent_Factory(t) {
    return new (t || ManualTimeEditsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__.MasterService));
  };

  ManualTimeEditsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ManualTimeEditsComponent,
    selectors: [["app-manual-time-edits"]],
    decls: 86,
    vars: 7,
    consts: [[1, "white_box", "dashboars_title"], [1, "top_title_wrap"], [1, "row", "align-items-center", "mb-4"], [1, "col-md-6"], [1, "setting_title", 3, "routerLink"], ["src", "../../../../assets/images/icon/back-arrow-blue.svg", "alt", ""], [1, "mb-0"], [1, "text-end"], ["routerLink", "/reports/scheduled-reports", 1, "text_dark_gradient", "btn_dark_text"], [1, "fa", "fa-clock"], [1, "row", "align-items-center", "mb-5"], [1, "nav", "nav-tabs", "tab_design_one"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#me", 1, "nav-link", 3, "click"], ["data-bs-toggle", "tab", "href", "#all", 1, "nav-link", "active", 3, "click"], [1, "col-md-6", "text-end"], [3, "formGroup"], [1, "row", "justify-content-end"], [1, "col-md-8"], [1, "row"], [3, "formControlFromDateNameValue", "formControlSelectedDateValue"], [1, "col-md-4"], ["type", "submit", 1, "btn_blue", 3, "click"], [1, "activity_top_wrap", "mb-5"], [1, "activity_left_text"], [1, "text_green_gradient"], [1, "white_box"], [1, "col-md-3"], [1, "d-flex", "align-items-baseline", "activity_table_top_wrap"], [1, "me-2"], [1, "col-md-9", "text-end"], [1, "activity_table_menu_wrap"], [1, "left_links"], [1, "text_gradient", "cursor-pointer", 3, "click"], ["src", "../../../../assets/images/icon/send.svg", "alt", ""], ["src", "../../../../assets/images/icon/schedule.svg", "alt", ""], [1, "dropdown"], ["data-toggle", "dropdown", "type", "button", "id", "settingMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "text_gradient", "cursor-pointer"], ["src", "../../../../assets/images/icon/export.svg", "alt", ""], ["aria-labelledby", "settingMenuButton", 1, "dropdown-menu"], [1, "dropdown-item"], [1, "row", "mb-5"], ["sortField", "date", "sortMode", "single", "dataKey", "date", "rowGroupMode", "subheader", "groupRowsBy", "date", 3, "value", "columns"], ["pTemplate", "header"], ["pTemplate", "groupheader"], ["pTemplate", "rowexpansion"], [4, "ngFor", "ngForOf"], ["pRipple", "", 3, "pRowToggler"], ["colspan", "10", 2, "text-align", "left !important"], ["type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "p-button-plain", "p-mr-2", 3, "icon"], [1, "p-text-bold", "p-ml-2"], ["class", "d-flex align-items-center", 4, "ngIf"], ["class", "badge", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "d-flex", "align-items-center"], [1, "user_custom_img", "orange"], [1, "badge", 3, "ngClass"], [3, "matTooltip"], [1, "fa", "fa-info-circle"]],
    template: function ManualTimeEditsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Manual Time Edits Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 3)(10, "div", 7)(11, "a", 8)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Scheduled Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 10)(16, "div", 3)(17, "ul", 11)(18, "li", 12)(19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManualTimeEditsComponent_Template_a_click_19_listener() {
          return ctx.OnTabClick("me");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "li", 12)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManualTimeEditsComponent_Template_a_click_22_listener() {
          return ctx.OnTabClick("all");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 15)(25, "form", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "div", 18)(30, "app-date-time-range-picker", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("formControlSelectedDateValue", function ManualTimeEditsComponent_Template_app_date_time_range_picker_formControlSelectedDateValue_30_listener($event) {
          return ctx.SelectedDateEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 21)(32, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManualTimeEditsComponent_Template_button_click_32_listener() {
          return ctx.OnFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 23)(35, "div", 24)(36, "ul")(37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Affected Members ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Hours Added ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "12:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Hours Deleted ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "12:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 26)(50, "div", 10)(51, "div", 27)(52, "div", 28)(53, "h3", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "Asia - Kolkata");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 30)(58, "div", 31)(59, "ul", 32)(60, "li")(61, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManualTimeEditsComponent_Template_a_click_61_listener() {
          return ctx.OnSend();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](62, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, " Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "li")(65, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ManualTimeEditsComponent_Template_a_click_65_listener() {
          return ctx.OnSchedule();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](66, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, " Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "li")(69, "div", 36)(70, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](71, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "ul", 39)(74, "li")(75, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76, "To CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "li")(78, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "To PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "div", 41)(81, "div")(82, "p-table", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](83, ManualTimeEditsComponent_ng_template_83_Template, 2, 1, "ng-template", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](84, ManualTimeEditsComponent_ng_template_84_Template, 5, 3, "ng-template", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](85, ManualTimeEditsComponent_ng_template_85_Template, 2, 1, "ng-template", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlFromDateNameValue", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.organizationDetails["organization_Name"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.manualTimeEditValue)("columns", ctx.manualTimeEditCols);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__.DateTimeRangePickerComponent, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_12__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_13__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_12__.RowToggler, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip]
  });
  return ManualTimeEditsComponent;
})();

/***/ }),

/***/ 99460:
/*!**************************************************************!*\
  !*** ./src/app/pages/reports/payments/payments.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsComponent": () => (/* binding */ PaymentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-charts */ 74717);
/* harmony import */ var src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/reports */ 46156);
/* harmony import */ var src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/report-filter/report-filter.component */ 32272);
/* harmony import */ var src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pop-up-model/schedule-report-model/schedule-report-model.component */ 450);
/* harmony import */ var src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pop-up-model/send-report-model/send-report-model.component */ 28096);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 46758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/date-time-range-picker/date-time-range-picker.component */ 96991);
/* harmony import */ var _shared_common_line_chart_common_line_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/common-line-chart/common-line-chart.component */ 99949);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 47873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/api */ 10805);






















function PaymentsComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 53)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Total Amount Per Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-common-line-chart", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("lineChartData", ctx_r0.lineChartData)("lineChartLabel", ctx_r0.lineChartLabel)("date", ctx_r0.date);
  }
}

function PaymentsComponent_ng_template_90_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", col_r6.label, " ");
  }
}

function PaymentsComponent_ng_template_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PaymentsComponent_ng_template_90_th_1_Template, 2, 1, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", columns_r4);
  }
}

function PaymentsComponent_ng_template_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 56)(1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "$0.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const rowData_r7 = ctx.$implicit;
    const expanded_r9 = ctx.expanded;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pRowToggler", rowData_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", expanded_r9 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](rowData_r7[ctx_r2.groupBy]);
  }
}

function PaymentsComponent_ng_template_92_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r13 = ctx.$implicit;
    const rowData_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", rowData_r10[col_r13.key], " ");
  }
}

function PaymentsComponent_ng_template_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PaymentsComponent_ng_template_92_td_1_Template, 2, 1, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r11 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", columns_r11);
  }
}

const _c0 = function () {
  return ["/reports/all-reports"];
};

let PaymentsComponent = /*#__PURE__*/(() => {
  class PaymentsComponent {
    constructor(masterService, matDialog, formBuilder) {
      this.masterService = masterService;
      this.matDialog = matDialog;
      this.formBuilder = formBuilder;
      this.date = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
      this.groupBy = 'paidOn';
      this.organizationDetails = {};
      this.paymentsArray = [{
        paymentType: 'One-time payment',
        paidOn: 'Wed, Sep 14, 2022',
        notes: '',
        amount: '$100.00',
        member: 'harsh'
      }, {
        paymentType: 'One-time payment',
        paidOn: 'Wed, Sep 13, 2022',
        notes: '',
        amount: '$100.00',
        member: 'harsh'
      }, {
        paymentType: 'One-time payment',
        paidOn: 'Wed, Sep 12, 2022',
        notes: '',
        amount: '$100.00',
        member: 'harsh'
      }];
      this.cols = [];
      this.paymentsTableCols = [];
      this.expensesShowCols = [];
      this.showExpensesGraph = true;
      this.currentTab = 'all';
      this.lineChartData = {
        datasets: [{
          data: [0, 50, 0, 200, 0, 300, 0],
          label: 'Tracked',
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          fill: 'origin'
        } // {
        //   data: [0, 83, 0, 0, 55, 0, 0],
        //   label: 'Manual',
        //   backgroundColor: 'rgba(77,83,96,0.2)',
        //   borderColor: 'rgba(77,83,96,1)',
        //   pointBackgroundColor: 'rgba(77,83,96,1)',
        //   pointBorderColor: '#fff',
        //   pointHoverBackgroundColor: '#fff',
        //   pointHoverBorderColor: 'rgba(77,83,96,1)',
        //   fill: 'origin',
        // },
        // {
        //   data: [30, 0, 0, 0, 0, 0, 10],
        //   label: 'Break',
        //   backgroundColor: 'rgba(255,0,0,0.3)',
        //   borderColor: 'red',
        //   pointBackgroundColor: 'red',
        //   pointBorderColor: 'red',
        //   pointHoverBackgroundColor: 'red',
        //   pointHoverBorderColor: 'red',
        //   fill: 'origin',
        // }
        ],
        labels: []
      };
      this.lineChartLabel = [];
      this.showExpensesGraph = true;
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.paymentsForm = this.formBuilder.group({
        fromDate: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        toDate: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
      });
      setTimeout(() => {
        this.date.next({
          fromDate: this.paymentsForm.controls['fromDate'].value,
          toDate: this.paymentsForm.controls['toDate'].value
        });
      }, 100);
      this.changeGroupby();
    }

    SelectedDateEvent(event) {
      const fromDate = event.fromDate;
      const toDate = event.toDate;

      if (fromDate && toDate) {
        this.paymentsForm.patchValue({
          fromDate: fromDate,
          toDate: toDate
        });
        this.date.next({
          fromDate: this.paymentsForm.controls['fromDate'].value,
          toDate: this.paymentsForm.controls['toDate'].value
        });
      }
    }

    changeGroupby() {
      this.paymentsTableCols = [];
      src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__.paymentsTable.forEach(element => {
        if (this.groupBy != element.key) {
          this.paymentsTableCols.push(element);
        }
      });
    }

    ShowGraph() {
      if (this.showExpensesGraph == true) {
        this.showExpensesGraph = false;
      } else {
        this.showExpensesGraph = true;
      }
    }

    OnSend() {
      const sendDialog = this.matDialog.open(src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__.SendReportModelComponent, {
        width: '675px'
      });
    }

    OnSchedule() {
      const scheduleDialog = this.matDialog.open(src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__.ScheduleReportModelComponent, {
        width: '675px'
      });
    }

    OnFilter() {
      let reportData = {
        reportName: 'Expenses',
        filterInput: {
          projects: true,
          sum_date_ranges: true
        },
        currentTab: this.currentTab
      };
      const filterDialog = this.matDialog.open(src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__.ReportFilterComponent, {
        width: '675px',
        data: reportData
      });
    }

    OnTabClick(type) {
      this.currentTab = type;
    }

  }

  PaymentsComponent.ɵfac = function PaymentsComponent_Factory(t) {
    return new (t || PaymentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder));
  };

  PaymentsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: PaymentsComponent,
    selectors: [["app-payments"]],
    viewQuery: function PaymentsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_11__.BaseChartDirective, 5);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
      }
    },
    decls: 93,
    vars: 13,
    consts: [[1, "white_box", "dashboars_title", "main_content"], [1, "top_title_wrap"], [1, "row", "align-items-center", "mb-4"], [1, "col-md-6"], [1, "setting_title", 3, "routerLink"], ["src", "../../../../assets/images/icon/back-arrow-blue.svg", "alt", ""], [1, "mb-0"], [1, "text-end"], ["routerLink", "/reports/scheduled-reports", 1, "text_dark_gradient", "btn_dark_text"], [1, "fa", "fa-clock"], [1, "row", "align-items-center", "mb-5"], [1, "nav", "nav-tabs", "tab_design_one"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#me", 1, "nav-link", 3, "click"], ["data-bs-toggle", "tab", "href", "#all", 1, "nav-link", "active", 3, "click"], [1, "col-md-6", "text-end"], [3, "formGroup"], [1, "row", "justify-content-end"], [1, "col-md-8"], [1, "row"], [3, "formControlFromDateNameValue", "formControlSelectedDateValue"], [1, "col-md-4"], ["type", "submit", 1, "btn_blue", 3, "click"], [1, "activity_top_wrap", "mb-5"], [1, "activity_left_text"], [1, "text_green_gradient"], [3, "ngClass", "click"], [1, "fa-solid", "fa-chart-column"], ["class", "mt-3", 4, "ngIf"], [1, "activity_table_top_wrap"], [1, "me-2"], [1, "col-md-3"], ["for", "groupBy"], ["appearance", "fill"], ["name", "groupBy", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "paidOn"], ["value", "member"], [1, "col-md-9", "text-end"], [1, "activity_table_menu_wrap"], [1, "left_links"], [1, "text_gradient", "cursor-pointer", 3, "click"], ["src", "../../../../assets/images/icon/send.svg", "alt", ""], ["src", "../../../../assets/images/icon/schedule.svg", "alt", ""], [1, "dropdown"], ["data-toggle", "dropdown", "type", "button", "id", "settingMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "text_gradient", "cursor-pointer"], ["src", "../../../../assets/images/icon/export.svg", "alt", ""], ["aria-labelledby", "settingMenuButton", 1, "dropdown-menu"], [1, "dropdown-item"], [1, "row", "mb-5"], ["sortMode", "single", "rowGroupMode", "subheader", 3, "value", "sortField", "dataKey", "groupRowsBy", "columns"], ["pTemplate", "header"], ["pTemplate", "groupheader"], ["pTemplate", "rowexpansion"], [1, "mt-3"], [3, "lineChartData", "lineChartLabel", "date"], [4, "ngFor", "ngForOf"], ["pRipple", "", 3, "pRowToggler"], ["colspan", "2", 2, "text-align", "left !important"], ["type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "p-button-plain", "p-mr-2", 3, "icon"], [1, "p-text-bold", "p-ml-2"], ["colspan", "1"]],
    template: function PaymentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Payments Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 3)(10, "div", 7)(11, "a", 8)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Scheduled Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 10)(16, "div", 3)(17, "ul", 11)(18, "li", 12)(19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaymentsComponent_Template_a_click_19_listener() {
          return ctx.OnTabClick("me");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "li", 12)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaymentsComponent_Template_a_click_22_listener() {
          return ctx.OnTabClick("all");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 15)(25, "form", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "div", 18)(30, "app-date-time-range-picker", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("formControlSelectedDateValue", function PaymentsComponent_Template_app_date_time_range_picker_formControlSelectedDateValue_30_listener($event) {
          return ctx.SelectedDateEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 21)(32, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaymentsComponent_Template_button_click_32_listener() {
          return ctx.OnFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 23)(35, "div", 24)(36, "ul")(37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "PAYMENTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "AMOUNT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "$400.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaymentsComponent_Template_button_click_45_listener() {
          return ctx.ShowGraph();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](46, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, PaymentsComponent_div_47_Template, 5, 3, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 29)(49, "h3", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "Asia - Kolkata");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 10)(54, "div", 31)(55, "div")(56, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "Group By:");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "mat-form-field", 33)(59, "mat-select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function PaymentsComponent_Template_mat_select_ngModelChange_59_listener($event) {
          return ctx.groupBy = $event;
        })("selectionChange", function PaymentsComponent_Template_mat_select_selectionChange_59_listener() {
          return ctx.changeGroupby();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "mat-option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61, "Paid On");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "mat-option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 37)(65, "div", 38)(66, "ul", 39)(67, "li")(68, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaymentsComponent_Template_a_click_68_listener() {
          return ctx.OnSend();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](69, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, " Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "li")(72, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaymentsComponent_Template_a_click_72_listener() {
          return ctx.OnSchedule();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](73, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74, " Schedule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "li")(76, "div", 43)(77, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](78, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](79, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "ul", 46)(81, "li")(82, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83, "To CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "li")(85, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, "To PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "div", 48)(88, "div")(89, "p-table", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](90, PaymentsComponent_ng_template_90_Template, 2, 1, "ng-template", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](91, PaymentsComponent_ng_template_91_Template, 8, 3, "ng-template", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](92, PaymentsComponent_ng_template_92_Template, 2, 1, "ng-template", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.paymentsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControlFromDateNameValue", ctx.paymentsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.showExpensesGraph == true ? "activity_filter_btn" : "activity_filter_btn_active");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showExpensesGraph);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx.organizationDetails["organization_Name"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.groupBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.paymentsArray)("sortField", ctx.groupBy)("dataKey", ctx.groupBy)("groupRowsBy", ctx.groupBy)("columns", ctx.paymentsTableCols);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__.DateTimeRangePickerComponent, _shared_common_line_chart_common_line_chart_component__WEBPACK_IMPORTED_MODULE_6__.CommonLineChartComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, primeng_button__WEBPACK_IMPORTED_MODULE_17__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_18__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_19__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_18__.RowToggler]
  });
  return PaymentsComponent;
})();

/***/ }),

/***/ 43758:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/reports/project-work-order-budgets/project-work-order-budgets.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectWorkOrderBudgetsComponent": () => (/* binding */ ProjectWorkOrderBudgetsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/reports */ 46156);
/* harmony import */ var src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/report-filter/report-filter.component */ 32272);
/* harmony import */ var src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pop-up-model/schedule-report-model/schedule-report-model.component */ 450);
/* harmony import */ var src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pop-up-model/send-report-model/send-report-model.component */ 28096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/date-time-range-picker/date-time-range-picker.component */ 96991);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 47873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ 73162);




















function ProjectWorkOrderBudgetsComponent_ng_template_69_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", col_r5.label, " ");
  }
}

function ProjectWorkOrderBudgetsComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProjectWorkOrderBudgetsComponent_ng_template_69_th_1_Template, 2, 1, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", columns_r3);
  }
}

function ProjectWorkOrderBudgetsComponent_ng_template_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 44)(1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const rowData_r6 = ctx.$implicit;
    const expanded_r8 = ctx.expanded;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pRowToggler", rowData_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", expanded_r8 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rowData_r6[ctx_r1.groupBy]);
  }
}

function ProjectWorkOrderBudgetsComponent_ng_template_71_td_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const rowData_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r9[col_r12.key], " ");
  }
}

function ProjectWorkOrderBudgetsComponent_ng_template_71_td_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-progress-bar", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const col_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const rowData_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", rowData_r9["budget"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", rowData_r9[col_r12.key], " %");
  }
}

function ProjectWorkOrderBudgetsComponent_ng_template_71_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProjectWorkOrderBudgetsComponent_ng_template_71_td_1_span_1_Template, 2, 1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ProjectWorkOrderBudgetsComponent_ng_template_71_td_1_span_2_Template, 4, 2, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", col_r12.config.isText);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", col_r12.config == null ? null : col_r12.config.isProgressbar);
  }
}

function ProjectWorkOrderBudgetsComponent_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProjectWorkOrderBudgetsComponent_ng_template_71_td_1_Template, 3, 2, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r10 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", columns_r10);
  }
}

const _c0 = function () {
  return ["/reports/all-reports"];
};

let ProjectWorkOrderBudgetsComponent = /*#__PURE__*/(() => {
  class ProjectWorkOrderBudgetsComponent {
    constructor(masterService, formBuilder, matDialog) {
      this.masterService = masterService;
      this.formBuilder = formBuilder;
      this.matDialog = matDialog;
      this.organizationDetails = {};
      this.groupBy = 'month';
      this.projectWorkOrderTableCols = [];
      this.projectWorkOrderArray = [{
        month: 'September, 2022',
        spent: '1:42:46',
        budget: '80',
        remaining: '0:17:14',
        project_work_order: 'Development'
      }];
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.filterForm = this.formBuilder.group({
        fromDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        toDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
      });
      this.changeGroupby();
    }

    changeGroupby() {
      this.projectWorkOrderTableCols = [];
      src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__.projectWorkOrderTable.forEach(element => {
        if (this.groupBy != element.key) {
          this.projectWorkOrderTableCols.push(element);
        }
      });
    }

    SelectedDateEvent(event) {
      const fromDate = event.fromDate;
      const toDate = event.toDate;

      if (fromDate && toDate) {
        this.filterForm.patchValue({
          fromDate: new Date(fromDate),
          toDate: new Date(toDate)
        });
      }
    }

    OnSend() {
      const sendDialog = this.matDialog.open(src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__.SendReportModelComponent, {
        width: '675px'
      });
    }

    OnSchedule() {
      const scheduleDialog = this.matDialog.open(src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__.ScheduleReportModelComponent, {
        width: '675px'
      });
    }

    OnFilter() {
      let reportData = {
        reportName: 'Project/Work order budgets',
        filterInput: {
          projects: true,
          include_archived_project: true
        },
        currentTab: ''
      };
      const filterDialog = this.matDialog.open(src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__.ReportFilterComponent, {
        width: '675px',
        data: reportData
      });
    }

  }

  ProjectWorkOrderBudgetsComponent.ɵfac = function ProjectWorkOrderBudgetsComponent_Factory(t) {
    return new (t || ProjectWorkOrderBudgetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog));
  };

  ProjectWorkOrderBudgetsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ProjectWorkOrderBudgetsComponent,
    selectors: [["app-project-work-order-budgets"]],
    decls: 72,
    vars: 12,
    consts: [[1, "white_box", "dashboars_title", "main_content"], [1, ""], [1, "row", "align-items-center", "mb-4"], [1, "col-md-6"], [1, "setting_title", 3, "routerLink"], ["src", "../../../../assets/images/icon/back-arrow-blue.svg", "alt", ""], [1, "mb-0"], [1, "text-end"], ["href", "/reports/scheduled-reports", 1, "text_dark_gradient", "btn_dark_text"], [1, "fa", "fa-clock"], [1, "row", "align-items-center", "mb-5"], [1, "col-md-6", "text-end"], [3, "formGroup"], [1, "row", "justify-content-end"], [1, "col-md-8"], [1, "row"], [3, "formControlFromDateNameValue", "formControlSelectedDateValue"], [1, "col-md-4"], ["type", "submit", 1, "btn_blue", 3, "click"], [1, "d-flex", "align-items-baseline"], [1, "me-2"], [1, "col-md-3"], ["for", "groupBy"], ["appearance", "fill"], ["name", "groupBy", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "month"], ["value", "project_work_order"], [1, "col-md-9", "text-end"], [1, "activity_table_menu_wrap"], [1, "left_links"], [1, "text_gradient", "cursor-pointer", 3, "click"], ["src", "../../../../assets/images/icon/send.svg", "alt", ""], ["src", "../../../../assets/images/icon/schedule.svg", "alt", ""], [1, "dropdown"], ["data-toggle", "dropdown", "type", "button", "id", "settingMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "text_gradient", "cursor-pointer"], ["src", "../../../../assets/images/icon/export.svg", "alt", ""], ["aria-labelledby", "settingMenuButton", 1, "dropdown-menu"], [1, "dropdown-item"], [1, "row", "mb-5"], ["sortMode", "single", "rowGroupMode", "subheader", "responsiveLayout", "none", 3, "value", "sortField", "dataKey", "responsive", "groupRowsBy", "columns"], ["pTemplate", "header"], ["pTemplate", "groupheader"], ["pTemplate", "rowexpansion"], [4, "ngFor", "ngForOf"], ["pRipple", "", 3, "pRowToggler"], ["colspan", "2", 2, "text-align", "left !important"], ["type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "p-button-plain", "p-mr-2", 3, "icon"], [1, "p-text-bold", "p-ml-2"], ["colspan", "15"], [4, "ngIf"], ["class", "d-flex", 4, "ngIf"], [1, "d-flex"], ["mode", "determinate", 3, "value"]],
    template: function ProjectWorkOrderBudgetsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Project / Work Order Budgets Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 3)(10, "div", 7)(11, "a", 8)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Scheduled Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 11)(18, "form", 12)(19, "div", 13)(20, "div", 14)(21, "div", 15)(22, "div", 14)(23, "app-date-time-range-picker", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("formControlSelectedDateValue", function ProjectWorkOrderBudgetsComponent_Template_app_date_time_range_picker_formControlSelectedDateValue_23_listener($event) {
          return ctx.SelectedDateEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 17)(25, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProjectWorkOrderBudgetsComponent_Template_button_click_25_listener() {
          return ctx.OnFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 19)(28, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Asia - Kolkata");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 10)(33, "div", 21)(34, "div")(35, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Group By:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "mat-form-field", 23)(38, "mat-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProjectWorkOrderBudgetsComponent_Template_mat_select_ngModelChange_38_listener($event) {
          return ctx.groupBy = $event;
        })("selectionChange", function ProjectWorkOrderBudgetsComponent_Template_mat_select_selectionChange_38_listener() {
          return ctx.changeGroupby();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "mat-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Project / Work order");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 27)(44, "div", 28)(45, "ul", 29)(46, "li")(47, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProjectWorkOrderBudgetsComponent_Template_a_click_47_listener() {
          return ctx.OnSend();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](48, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, " Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "li")(51, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProjectWorkOrderBudgetsComponent_Template_a_click_51_listener() {
          return ctx.OnSchedule();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](52, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "li")(55, "div", 33)(56, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](57, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "ul", 36)(60, "li")(61, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "To CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "li")(64, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "To PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 38)(67, "div")(68, "p-table", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](69, ProjectWorkOrderBudgetsComponent_ng_template_69_Template, 2, 1, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](70, ProjectWorkOrderBudgetsComponent_ng_template_70_Template, 6, 3, "ng-template", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](71, ProjectWorkOrderBudgetsComponent_ng_template_71_Template, 2, 1, "ng-template", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlFromDateNameValue", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.organizationDetails["organization_Name"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.groupBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.projectWorkOrderArray)("sortField", ctx.groupBy)("dataKey", ctx.groupBy)("responsive", false)("groupRowsBy", ctx.groupBy)("columns", ctx.projectWorkOrderTableCols);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__.DateTimeRangePickerComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_15__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_16__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_15__.RowToggler, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__.MatProgressBar]
  });
  return ProjectWorkOrderBudgetsComponent;
})();

/***/ }),

/***/ 59837:
/*!*********************************************************!*\
  !*** ./src/app/pages/reports/reports-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsRoutingModule": () => (/* binding */ ReportsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _all_reports_all_reports_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-reports/all-reports.component */ 71186);
/* harmony import */ var _amount_owned_report_amount_owned_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./amount-owned-report/amount-owned-report.component */ 18801);
/* harmony import */ var _apps_urls_apps_urls_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apps-urls/apps-urls.component */ 14388);
/* harmony import */ var _client_budgets_client_budgets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-budgets/client-budgets.component */ 38799);
/* harmony import */ var _daily_limits_daily_limits_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./daily-limits/daily-limits.component */ 13456);
/* harmony import */ var _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expenses/expenses.component */ 83431);
/* harmony import */ var _manual_time_edits_manual_time_edits_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manual-time-edits/manual-time-edits.component */ 40520);
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./payments/payments.component */ 99460);
/* harmony import */ var _project_work_order_budgets_project_work_order_budgets_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project-work-order-budgets/project-work-order-budgets.component */ 43758);
/* harmony import */ var _scheduled_reports_scheduled_reports_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scheduled-reports/scheduled-reports.component */ 54780);
/* harmony import */ var _shift_attendance_shift_attendance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shift-attendance/shift-attendance.component */ 12047);
/* harmony import */ var _time_activity_time_activity_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./time-activity/time-activity.component */ 53195);
/* harmony import */ var _timeoff_balance_timeoff_balance_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./timeoff-balance/timeoff-balance.component */ 52038);
/* harmony import */ var _timeoff_transactions_timeoff_transactions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./timeoff-transactions/timeoff-transactions.component */ 69533);
/* harmony import */ var _timesheet_approvals_timesheet_approvals_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./timesheet-approvals/timesheet-approvals.component */ 71634);
/* harmony import */ var _weekly_limit_report_weekly_limit_report_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./weekly-limit-report/weekly-limit-report.component */ 28801);
/* harmony import */ var _weekly_weekly_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./weekly/weekly.component */ 61922);
/* harmony import */ var _work_breaks_work_breaks_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./work-breaks/work-breaks.component */ 82255);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 94650);





















const routes = [{
  path: 'all-reports',
  component: _all_reports_all_reports_component__WEBPACK_IMPORTED_MODULE_0__.AllReportsComponent
}, {
  path: 'apps-urls',
  component: _apps_urls_apps_urls_component__WEBPACK_IMPORTED_MODULE_2__.AppsUrlsComponent
}, {
  path: 'expenses',
  component: _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_5__.ExpensesComponent
}, {
  path: 'timeactivity',
  component: _time_activity_time_activity_component__WEBPACK_IMPORTED_MODULE_11__.TimeActivityComponent
}, {
  path: 'weekly',
  component: _weekly_weekly_component__WEBPACK_IMPORTED_MODULE_16__.WeeklyComponent
}, {
  path: 'manual-time-edits',
  component: _manual_time_edits_manual_time_edits_component__WEBPACK_IMPORTED_MODULE_6__.ManualTimeEditsComponent
}, {
  path: 'weekly-limit',
  component: _weekly_limit_report_weekly_limit_report_component__WEBPACK_IMPORTED_MODULE_15__.WeeklyLimitReportComponent
}, {
  path: 'amount-owned',
  component: _amount_owned_report_amount_owned_report_component__WEBPACK_IMPORTED_MODULE_1__.AmountOwnedReportComponent
}, {
  path: 'timesheet-approvals',
  component: _timesheet_approvals_timesheet_approvals_component__WEBPACK_IMPORTED_MODULE_14__.TimesheetApprovalsComponent
}, {
  path: 'work-breaks',
  component: _work_breaks_work_breaks_component__WEBPACK_IMPORTED_MODULE_17__.WorkBreaksComponent
}, {
  path: 'payments',
  component: _payments_payments_component__WEBPACK_IMPORTED_MODULE_7__.PaymentsComponent
}, {
  path: 'time-off-balances',
  component: _timeoff_balance_timeoff_balance_component__WEBPACK_IMPORTED_MODULE_12__.TimeoffBalanceComponent
}, {
  path: 'time-off-transaction',
  component: _timeoff_transactions_timeoff_transactions_component__WEBPACK_IMPORTED_MODULE_13__.TimeoffTransactionsComponent
}, {
  path: 'shift-attendance',
  component: _shift_attendance_shift_attendance_component__WEBPACK_IMPORTED_MODULE_10__.ShiftAttendanceComponent
}, {
  path: 'scheduled-reports',
  component: _scheduled_reports_scheduled_reports_component__WEBPACK_IMPORTED_MODULE_9__.ScheduledReportsComponent
}, {
  path: 'daliy-limits',
  component: _daily_limits_daily_limits_component__WEBPACK_IMPORTED_MODULE_4__.DailyLimitsComponent
}, {
  path: 'project-work-order-budgets',
  component: _project_work_order_budgets_project_work_order_budgets_component__WEBPACK_IMPORTED_MODULE_8__.ProjectWorkOrderBudgetsComponent
}, {
  path: 'client-budgets',
  component: _client_budgets_client_budgets_component__WEBPACK_IMPORTED_MODULE_3__.ClientBudgetsComponent
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'all-reports'
}];
let ReportsRoutingModule = /*#__PURE__*/(() => {
  class ReportsRoutingModule {}

  ReportsRoutingModule.ɵfac = function ReportsRoutingModule_Factory(t) {
    return new (t || ReportsRoutingModule)();
  };

  ReportsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({
    type: ReportsRoutingModule
  });
  ReportsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule]
  });
  return ReportsRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](ReportsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule]
  });
})();

/***/ }),

/***/ 82234:
/*!*************************************************!*\
  !*** ./src/app/pages/reports/reports.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsModule": () => (/* binding */ ReportsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reports-routing.module */ 59837);
/* harmony import */ var _time_activity_time_activity_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time-activity/time-activity.component */ 53195);
/* harmony import */ var _weekly_weekly_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weekly/weekly.component */ 61922);
/* harmony import */ var _apps_urls_apps_urls_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apps-urls/apps-urls.component */ 14388);
/* harmony import */ var _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expenses/expenses.component */ 83431);
/* harmony import */ var _all_reports_all_reports_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-reports/all-reports.component */ 71186);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng2-charts */ 74717);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ 284);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var _manual_time_edits_manual_time_edits_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manual-time-edits/manual-time-edits.component */ 40520);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tooltip */ 10266);
/* harmony import */ var _weekly_limit_report_weekly_limit_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./weekly-limit-report/weekly-limit-report.component */ 28801);
/* harmony import */ var _amount_owned_report_amount_owned_report_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./amount-owned-report/amount-owned-report.component */ 18801);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-bar */ 73162);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/checkbox */ 56709);
/* harmony import */ var _timesheet_approvals_timesheet_approvals_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timesheet-approvals/timesheet-approvals.component */ 71634);
/* harmony import */ var _scheduled_reports_scheduled_reports_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scheduled-reports/scheduled-reports.component */ 54780);
/* harmony import */ var _work_breaks_work_breaks_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./work-breaks/work-breaks.component */ 82255);
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./payments/payments.component */ 99460);
/* harmony import */ var _timeoff_balance_timeoff_balance_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./timeoff-balance/timeoff-balance.component */ 52038);
/* harmony import */ var _timeoff_transactions_timeoff_transactions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./timeoff-transactions/timeoff-transactions.component */ 69533);
/* harmony import */ var _shift_attendance_shift_attendance_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shift-attendance/shift-attendance.component */ 12047);
/* harmony import */ var _daily_limits_daily_limits_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./daily-limits/daily-limits.component */ 13456);
/* harmony import */ var _project_work_order_budgets_project_work_order_budgets_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./project-work-order-budgets/project-work-order-budgets.component */ 43758);
/* harmony import */ var _client_budgets_client_budgets_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./client-budgets/client-budgets.component */ 38799);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 94650);
































let ReportsModule = /*#__PURE__*/(() => {
  class ReportsModule {}

  ReportsModule.ɵfac = function ReportsModule_Factory(t) {
    return new (t || ReportsModule)();
  };

  ReportsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
    type: ReportsModule
  });
  ReportsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, _reports_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportsRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule, ng2_charts__WEBPACK_IMPORTED_MODULE_23__.NgChartsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelectModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_26__.MatInputModule, primeng_button__WEBPACK_IMPORTED_MODULE_27__.ButtonModule, primeng_table__WEBPACK_IMPORTED_MODULE_28__.TableModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__.MatTooltipModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__.MatProgressBarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__.MatCheckboxModule]
  });
  return ReportsModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](ReportsModule, {
    declarations: [_time_activity_time_activity_component__WEBPACK_IMPORTED_MODULE_1__.TimeActivityComponent, _weekly_weekly_component__WEBPACK_IMPORTED_MODULE_2__.WeeklyComponent, _apps_urls_apps_urls_component__WEBPACK_IMPORTED_MODULE_3__.AppsUrlsComponent, _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_4__.ExpensesComponent, _all_reports_all_reports_component__WEBPACK_IMPORTED_MODULE_5__.AllReportsComponent, _manual_time_edits_manual_time_edits_component__WEBPACK_IMPORTED_MODULE_7__.ManualTimeEditsComponent, _weekly_limit_report_weekly_limit_report_component__WEBPACK_IMPORTED_MODULE_8__.WeeklyLimitReportComponent, _amount_owned_report_amount_owned_report_component__WEBPACK_IMPORTED_MODULE_9__.AmountOwnedReportComponent, _timesheet_approvals_timesheet_approvals_component__WEBPACK_IMPORTED_MODULE_10__.TimesheetApprovalsComponent, _scheduled_reports_scheduled_reports_component__WEBPACK_IMPORTED_MODULE_11__.ScheduledReportsComponent, _work_breaks_work_breaks_component__WEBPACK_IMPORTED_MODULE_12__.WorkBreaksComponent, _daily_limits_daily_limits_component__WEBPACK_IMPORTED_MODULE_17__.DailyLimitsComponent, _project_work_order_budgets_project_work_order_budgets_component__WEBPACK_IMPORTED_MODULE_18__.ProjectWorkOrderBudgetsComponent, _client_budgets_client_budgets_component__WEBPACK_IMPORTED_MODULE_19__.ClientBudgetsComponent, _payments_payments_component__WEBPACK_IMPORTED_MODULE_13__.PaymentsComponent, _timeoff_balance_timeoff_balance_component__WEBPACK_IMPORTED_MODULE_14__.TimeoffBalanceComponent, _timeoff_transactions_timeoff_transactions_component__WEBPACK_IMPORTED_MODULE_15__.TimeoffTransactionsComponent, _shift_attendance_shift_attendance_component__WEBPACK_IMPORTED_MODULE_16__.ShiftAttendanceComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, _reports_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportsRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule, ng2_charts__WEBPACK_IMPORTED_MODULE_23__.NgChartsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelectModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_26__.MatInputModule, primeng_button__WEBPACK_IMPORTED_MODULE_27__.ButtonModule, primeng_table__WEBPACK_IMPORTED_MODULE_28__.TableModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__.MatTooltipModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__.MatProgressBarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__.MatCheckboxModule]
  });
})();

/***/ }),

/***/ 54780:
/*!********************************************************************************!*\
  !*** ./src/app/pages/reports/scheduled-reports/scheduled-reports.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduledReportsComponent": () => (/* binding */ ScheduledReportsComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/reports */ 46156);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/dynamic-table/dynamic-table.component */ 57834);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 47873);









const _c0 = function () {
  return ["/reports/all-reports"];
};

let ScheduledReportsComponent = /*#__PURE__*/(() => {
  class ScheduledReportsComponent {
    constructor() {
      this.scheduledTableValue = [{
        Name: 'John',
        Report: 'Weekly Limits Report',
        Recurring: 'Daily (Mo, Tu, We, Th, Fr) Next: Wed, Aug 31, 2022, 12:00 pm IST',
        Status: 'Active'
      }, {
        Name: 'John',
        Report: 'Weekly Limits Report',
        Recurring: 'Weekly (We) Next: Wed, Aug 31, 2022, 12:00 pm IST',
        Status: 'Paused'
      }];
      this.scheduledCols = src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__.scheduleTable;
      this.actionMenu = src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__.scheduledReportAction;
      this.start = 1;
      this.limit = 25;
      this.totalRecords = 0;
    }

    ngOnInit() {
      this.totalRecords = this.scheduledTableValue.length;
    }

    TdClickEvent(event) {
      if (event.event == 'edit') {} else if (event.event == 'delete') {} else if (event.event == 'resume') {} else if (event.event == 'pause') {}
    }

    OnPageChange(event) {
      const pageNumber = Math.round(event.first / event.rows) + 1;
      this.start = pageNumber;
      this.limit = event.rows;
    }

  }

  ScheduledReportsComponent.ɵfac = function ScheduledReportsComponent_Factory(t) {
    return new (t || ScheduledReportsComponent)();
  };

  ScheduledReportsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ScheduledReportsComponent,
    selectors: [["app-scheduled-reports"]],
    decls: 21,
    vars: 9,
    consts: [[1, "white_box", "dashboars_title"], [1, "top_title_wrap"], [1, "row", "align-items-center", "mb-4"], [1, "col-md-4"], [1, "setting_title", 3, "routerLink"], ["src", "../../../../assets/images/icon/back-arrow-blue.svg", "alt", ""], [1, "mb-0"], [1, "col-md-4", "text-end"], [1, "row", "justify-content-end"], ["for", "reports"], ["appearance", "fill"], ["name", "reports", 3, "ngModel", "ngModelChange"], ["value", ""], [1, "row", "mb-3"], ["tableName", "Scheduled Reports", 3, "tableColsDetails", "tableDataArray", "isPagination", "limit", "totalRecords", "actionMenu", "tdClickEmitter", "paginationEvent"]],
    template: function ScheduledReportsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Scheduled Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 2)(10, "div", 7)(11, "div", 8)(12, "div")(13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-form-field", 10)(16, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ScheduledReportsComponent_Template_mat_select_ngModelChange_16_listener($event) {
          return ctx.reports = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "All Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 13)(20, "TrackerX-dynamic-table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("tdClickEmitter", function ScheduledReportsComponent_Template_TrackerX_dynamic_table_tdClickEmitter_20_listener($event) {
          return ctx.TdClickEvent($event);
        })("paginationEvent", function ScheduledReportsComponent_Template_TrackerX_dynamic_table_paginationEvent_20_listener($event) {
          return ctx.OnPageChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.reports);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tableColsDetails", ctx.scheduledCols)("tableDataArray", ctx.scheduledTableValue)("isPagination", true)("limit", ctx.limit)("totalRecords", ctx.totalRecords)("actionMenu", ctx.actionMenu);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_1__.DynamicTableComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption]
  });
  return ScheduledReportsComponent;
})();

/***/ }),

/***/ 12047:
/*!******************************************************************************!*\
  !*** ./src/app/pages/reports/shift-attendance/shift-attendance.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftAttendanceComponent": () => (/* binding */ ShiftAttendanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/reports */ 46156);
/* harmony import */ var src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/report-filter/report-filter.component */ 32272);
/* harmony import */ var src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pop-up-model/schedule-report-model/schedule-report-model.component */ 450);
/* harmony import */ var src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pop-up-model/send-report-model/send-report-model.component */ 28096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/date-time-range-picker/date-time-range-picker.component */ 96991);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 47873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 10805);



















function ShiftAttendanceComponent_ng_template_76_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", col_r5.label, " ");
  }
}

function ShiftAttendanceComponent_ng_template_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ShiftAttendanceComponent_ng_template_76_th_1_Template, 2, 1, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", columns_r3);
  }
}

function ShiftAttendanceComponent_ng_template_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 48)(1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const rowData_r6 = ctx.$implicit;
    const expanded_r8 = ctx.expanded;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pRowToggler", rowData_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", expanded_r8 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rowData_r6[ctx_r1.groupBy]);
  }
}

function ShiftAttendanceComponent_ng_template_78_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r12 = ctx.$implicit;
    const rowData_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r9[col_r12.key], " ");
  }
}

function ShiftAttendanceComponent_ng_template_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ShiftAttendanceComponent_ng_template_78_td_1_Template, 2, 1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r10 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", columns_r10);
  }
}

const _c0 = function () {
  return ["/reports/all-reports"];
};

let ShiftAttendanceComponent = /*#__PURE__*/(() => {
  class ShiftAttendanceComponent {
    constructor(matDialog, formBuilder, masterService) {
      this.matDialog = matDialog;
      this.formBuilder = formBuilder;
      this.masterService = masterService;
      this.groupBy = 'date';
      this.currentTab = 'all';
      this.organizationDetails = {};
      this.shiftAttendanceTableCols = [];
      this.shiftAttendanceArray = [{
        date: 'Wed, Sep 14',
        dateTime: 'Wed, Sep 14, 2022 9:00 am - 5:00 pm',
        member: 'harsh',
        status: 'Missed',
        shift: 'N/A',
        startTime: '7:31:12',
        required: '0:00',
        actual: '0:00',
        late: 'N/A'
      }, {
        date: 'Wed, Sep 14',
        dateTime: 'Wed, Sep 14, 2022 9:00 am - 5:00 pm',
        member: 'Minal',
        status: 'Missed',
        shift: 'N/A',
        startTime: '7:31:12',
        required: '0:00',
        actual: '0:00',
        late: 'N/A'
      }, {
        date: 'Wed, Sep 15',
        dateTime: 'Wed, Sep 15, 2022 9:00 am - 5:00 pm',
        member: 'harsh',
        status: 'Missed',
        shift: 'N/A',
        startTime: '7:31:12',
        required: '0:00',
        actual: '0:00',
        late: 'N/A'
      }, {
        date: 'Wed, Sep 15',
        dateTime: 'Wed, Sep 15, 2022 9:00 am - 5:00 pm',
        member: 'Minal',
        status: 'Missed',
        shift: 'N/A',
        startTime: '7:31:12',
        required: '0:00',
        actual: '0:00',
        late: 'N/A'
      }];
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.shiftAttendanceForm = this.formBuilder.group({
        fromDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        toDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
      });
      this.changeGroupby();
    }

    SelectedDateEvent(event) {
      const fromDate = event.fromDate;
      const toDate = event.toDate;

      if (fromDate && toDate) {
        this.shiftAttendanceForm.patchValue({
          fromDate: new Date(fromDate),
          toDate: new Date(toDate)
        });
      }
    }

    changeGroupby() {
      this.shiftAttendanceTableCols = [];
      src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__.shiftAttendanceTable.forEach(element => {
        if (this.groupBy != element.key) {
          this.shiftAttendanceTableCols.push(element);
        }
      });
    }

    OnFilter() {
      let reportData = {
        reportName: 'Shift Attendance',
        filterInput: {
          shiftAttendanceStatus: true
        },
        currentTab: this.currentTab
      };
      const filterDialog = this.matDialog.open(src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__.ReportFilterComponent, {
        width: '675px',
        data: reportData
      });
    }

    OnTabClick(type) {
      this.currentTab = type;
    }

    OnSend() {
      const sendDialog = this.matDialog.open(src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__.SendReportModelComponent, {
        width: '675px'
      });
    }

    OnSchedule() {
      const scheduleDialog = this.matDialog.open(src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__.ScheduleReportModelComponent, {
        width: '675px'
      });
    }

  }

  ShiftAttendanceComponent.ɵfac = function ShiftAttendanceComponent_Factory(t) {
    return new (t || ShiftAttendanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__.MasterService));
  };

  ShiftAttendanceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ShiftAttendanceComponent,
    selectors: [["app-shift-attendance"]],
    decls: 79,
    vars: 12,
    consts: [[1, "white_box", "dashboars_title", "main_content"], [1, ""], [1, "row", "align-items-center", "mb-4"], [1, "col-md-6"], [1, "setting_title", 3, "routerLink"], ["src", "../../../../assets/images/icon/back-arrow-blue.svg", "alt", ""], [1, "mb-0"], [1, "text-end"], ["href", "/reports/scheduled-reports", 1, "text_dark_gradient", "btn_dark_text"], [1, "fa", "fa-clock"], [1, "row", "align-items-center", "mb-5"], [1, "nav", "nav-tabs", "tab_design_one"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#me", 1, "nav-link", 3, "click"], ["data-bs-toggle", "tab", "href", "#all", 1, "nav-link", "active", 3, "click"], [1, "col-md-6", "text-end"], [3, "formGroup"], [1, "row", "justify-content-end"], [1, "col-md-8"], [1, "row"], [3, "formControlFromDateNameValue", "formControlSelectedDateValue"], [1, "col-md-4"], ["type", "submit", 1, "btn_blue", 3, "click"], [1, "d-flex", "align-items-baseline"], [1, "me-2"], [1, "col-md-3"], ["for", "groupBy"], ["appearance", "fill"], ["name", "groupBy", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "member"], ["value", "date"], [1, "col-md-9", "text-end"], [1, "activity_table_menu_wrap"], [1, "left_links"], [1, "text_gradient", "cursor-pointer", 3, "click"], ["src", "../../../../assets/images/icon/send.svg", "alt", ""], ["src", "../../../../assets/images/icon/schedule.svg", "alt", ""], [1, "dropdown"], ["data-toggle", "dropdown", "type", "button", "id", "settingMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "text_gradient", "cursor-pointer"], ["src", "../../../../assets/images/icon/export.svg", "alt", ""], ["aria-labelledby", "settingMenuButton", 1, "dropdown-menu"], [1, "dropdown-item"], [1, "row", "mb-5"], ["sortMode", "single", "rowGroupMode", "subheader", "responsiveLayout", "none", 3, "value", "sortField", "dataKey", "responsive", "groupRowsBy", "columns"], ["pTemplate", "header"], ["pTemplate", "groupheader"], ["pTemplate", "rowexpansion"], [4, "ngFor", "ngForOf"], ["pRipple", "", 3, "pRowToggler"], ["colspan", "2", 2, "text-align", "left !important"], ["type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "p-button-plain", "p-mr-2", 3, "icon"], [1, "p-text-bold", "p-ml-2"], ["colspan", "15"]],
    template: function ShiftAttendanceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Shift Attendance Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 3)(10, "div", 7)(11, "a", 8)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Scheduled Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 10)(16, "div", 3)(17, "ul", 11)(18, "li", 12)(19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ShiftAttendanceComponent_Template_a_click_19_listener() {
          return ctx.OnTabClick("me");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "li", 12)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ShiftAttendanceComponent_Template_a_click_22_listener() {
          return ctx.OnTabClick("all");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 15)(25, "form", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "div", 18)(30, "app-date-time-range-picker", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("formControlSelectedDateValue", function ShiftAttendanceComponent_Template_app_date_time_range_picker_formControlSelectedDateValue_30_listener($event) {
          return ctx.SelectedDateEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 21)(32, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ShiftAttendanceComponent_Template_button_click_32_listener() {
          return ctx.OnFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 23)(35, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Asia - Kolkata");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 10)(40, "div", 25)(41, "div")(42, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Group By:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "mat-form-field", 27)(45, "mat-select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ShiftAttendanceComponent_Template_mat_select_ngModelChange_45_listener($event) {
          return ctx.groupBy = $event;
        })("selectionChange", function ShiftAttendanceComponent_Template_mat_select_selectionChange_45_listener() {
          return ctx.changeGroupby();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "mat-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 31)(51, "div", 32)(52, "ul", 33)(53, "li")(54, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ShiftAttendanceComponent_Template_a_click_54_listener() {
          return ctx.OnSend();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](55, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, " Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "li")(58, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ShiftAttendanceComponent_Template_a_click_58_listener() {
          return ctx.OnSchedule();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](59, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "li")(62, "div", 37)(63, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](64, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "ul", 40)(67, "li")(68, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "To CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "li")(71, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "To PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 42)(74, "div")(75, "p-table", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](76, ShiftAttendanceComponent_ng_template_76_Template, 2, 1, "ng-template", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](77, ShiftAttendanceComponent_ng_template_77_Template, 7, 3, "ng-template", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](78, ShiftAttendanceComponent_ng_template_78_Template, 2, 1, "ng-template", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.shiftAttendanceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlFromDateNameValue", ctx.shiftAttendanceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.organizationDetails["organization_Name"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.groupBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.shiftAttendanceArray)("sortField", ctx.groupBy)("dataKey", ctx.groupBy)("responsive", false)("groupRowsBy", ctx.groupBy)("columns", ctx.shiftAttendanceTableCols);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__.DateTimeRangePickerComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_15__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_16__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_15__.RowToggler]
  });
  return ShiftAttendanceComponent;
})();

/***/ }),

/***/ 53195:
/*!************************************************************************!*\
  !*** ./src/app/pages/reports/time-activity/time-activity.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeActivityComponent": () => (/* binding */ TimeActivityComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/reports */ 46156);
/* harmony import */ var src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/report-filter/report-filter.component */ 32272);
/* harmony import */ var src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pop-up-model/schedule-report-model/schedule-report-model.component */ 450);
/* harmony import */ var src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pop-up-model/send-report-model/send-report-model.component */ 28096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/date-time-range-picker/date-time-range-picker.component */ 96991);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-charts */ 74717);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 47873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ 56709);





















function TimeActivityComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 63)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Total Hours Worked Per Day");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "canvas", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("datasets", ctx_r0.barChartData)("labels", ctx_r0.barChartLabels)("options", ctx_r0.barChartOptions)("legend", ctx_r0.barChartLegend);
  }
}

function TimeActivityComponent_li_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li")(1, "a", 51)(2, "mat-checkbox", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function TimeActivityComponent_li_103_Template_mat_checkbox_change_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const col_r6 = restoredCtx.$implicit;
      const i_r7 = restoredCtx.index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.OnColumnToggle(col_r6, i_r7, $event.checked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const col_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", col_r6.selected)("disabled", col_r6.disable);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", col_r6.label, " ");
  }
}

function TimeActivityComponent_ng_template_107_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", col_r12.label, " ");
  }
}

function TimeActivityComponent_ng_template_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TimeActivityComponent_ng_template_107_th_1_Template, 2, 1, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", columns_r10);
  }
}

function TimeActivityComponent_ng_template_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 66)(1, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const rowData_r13 = ctx.$implicit;
    const expanded_r15 = ctx.expanded;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pRowToggler", rowData_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", expanded_r15 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rowData_r13[ctx_r3.groupBy]);
  }
}

function TimeActivityComponent_ng_template_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "12:00:00");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "18%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const rowData_r16 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("$", ctx_r4.calculateCustomerTotal(rowData_r16.date), ".00");
  }
}

function TimeActivityComponent_ng_template_110_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r20 = ctx.$implicit;
    const rowData_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r17[col_r20.key], " ");
  }
}

function TimeActivityComponent_ng_template_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TimeActivityComponent_ng_template_110_td_1_Template, 2, 1, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r18 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", columns_r18);
  }
}

const _c0 = function () {
  return ["/reports/all-reports"];
};

let TimeActivityComponent = /*#__PURE__*/(() => {
  class TimeActivityComponent {
    constructor(formBuilder, matDialog, masterService) {
      this.formBuilder = formBuilder;
      this.matDialog = matDialog;
      this.masterService = masterService;
      this.groupBy = 'date';
      this.cols = [];
      this.timeActivityShowCols = [];
      this.timeActivityCols = src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__.timeActivityTable;
      this.timeActivityValue = [{
        projectOrder: 'BA',
        toDo: '',
        member: 'Ravi',
        time: '12:00:00',
        activity: '18',
        spent: 0,
        notes: '',
        "date": "We, Jul 14, 2021"
      }, {
        projectOrder: 'BA',
        toDo: '',
        member: 'Ravi',
        time: '12:00:00',
        activity: '18',
        spent: 0,
        notes: '',
        "date": "Th, Jul 15, 2021"
      }, {
        projectOrder: 'BA',
        toDo: '',
        member: 'Ravi',
        time: '12:00:00',
        activity: '18',
        spent: 0,
        notes: '',
        "date": "Th, Jul 15, 2021"
      }];
      this.barChartLabels = ['Jul 12', 'Jul 13', 'Jul 14', 'Jul 15', 'Jul 16', 'Jul 17', 'Jul 18'];
      this.barChartOptions = {
        scaleShowVerticalLines: false,
        responsive: true,
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false
            }
          },
          y: {
            stacked: true,
            ticks: {
              stepSize: 2
            }
          }
        }
      };
      this.barChartLegend = true;
      this.barChartData = [{
        data: [0, 2, 8, 0, 0, 0, 0],
        label: 'Tracked',
        barThickness: 16,
        backgroundColor: "#177BEA",
        borderColor: "#177BEA",
        hoverBackgroundColor: "#177BEA",
        barPercentage: 0.5
      }, {
        data: [0, 4, 2, 0, 0, 0, 0],
        label: 'Manual',
        barThickness: 16,
        backgroundColor: "#E59200",
        borderColor: "#E59200",
        hoverBackgroundColor: "#E59200",
        barPercentage: 0.5
      }, {
        data: [0, 5, 3, 0, 0, 0, 0],
        label: 'Break',
        barThickness: 16,
        backgroundColor: "#C2D3E9",
        borderColor: "#C2D3E9",
        hoverBackgroundColor: "#C2D3E9",
        barPercentage: 0.5
      }];
      this.showExpensesGraph = true;
      this.currentTab = 'all';
      this.organizationDetails = {};
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.cols = JSON.parse(JSON.stringify(this.timeActivityCols)); // this.timeActivityShowCols = this.timeActivityCols;

      this.timeActivityCols.forEach(element => {
        if (element.selected == true) {
          this.timeActivityShowCols.push(element);
        }
      });
      this.filterForm = this.formBuilder.group({
        fromDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        todate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
      });
      this.changeGroupby();
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
    }

    calculateCustomerTotal(date) {
      let total = 0;

      if (this.timeActivityValue) {
        for (let value of this.timeActivityValue) {
          if (value.date === date) {
            total += value.spent;
          }
        }
      }

      return total;
    }

    changeGroupby() {
      // this.timeOffTransactionTableCols = [];
      // timeOffTransactionTable.forEach((element) => {
      //   if (this.groupBy != element.key) {
      //     this.timeOffTransactionTableCols.push(element);
      //   }
      // })
      // let Array = [];
      this.timeActivityShowCols = [];
      this.timeActivityCols.forEach(element => {
        if (element.selected) {
          if (this.groupBy != element.key) {
            this.timeActivityShowCols.push(element);
          }
        }
      }); // this.timeActivityShowCols = Array;
    }

    ShowGraph() {
      if (this.showExpensesGraph == true) {
        this.showExpensesGraph = false;
      } else {
        this.showExpensesGraph = true;
      }
    }

    OnColumnToggle(col, indexElement, event) {
      this.timeActivityCols.forEach(element => {
        if (element.key == col.key) {
          element.selected = event;
        }
      });
      this.changeGroupby(); // this.timeActivityShowCols = [];
      // this.timeActivityCols.forEach(element => {
      //   if (element.selected == true) {
      //     this.timeActivityShowCols.push(element);
      //   }
      // });
      // this.timeActivityShowCols = this.masterService.OnColumnToggle(col, indexElement, event, this.timeActivityCols, this.timeActivityShowCols, 0);
    }

    OnSend() {
      const sendDialog = this.matDialog.open(src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__.SendReportModelComponent, {
        width: '675px'
      });
    }

    OnSchedule() {
      const scheduleDialog = this.matDialog.open(src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__.ScheduleReportModelComponent, {
        width: '675px'
      });
    }

    OnFilter() {
      let reportData = {
        reportName: 'Time & Activity',
        filterInput: {
          clients: true,
          projects: true,
          to_dos: true,
          sum_date_ranges: true,
          include_archived_project: true,
          work_breaks: true
        },
        currentTab: this.currentTab
      };
      const filterDialog = this.matDialog.open(src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__.ReportFilterComponent, {
        width: '675px',
        data: reportData
      });
    }

    OnTabClick(type) {
      this.currentTab = type;
    }

  }

  TimeActivityComponent.ɵfac = function TimeActivityComponent_Factory(t) {
    return new (t || TimeActivityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__.MasterService));
  };

  TimeActivityComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: TimeActivityComponent,
    selectors: [["app-time-activity"]],
    decls: 111,
    vars: 15,
    consts: [[1, "white_box", "dashboars_title", "main_content"], [1, "top_title_wrap"], [1, "row", "align-items-center", "mb-4"], [1, "col-md-6"], [1, "setting_title", 3, "routerLink"], ["src", "../../../../assets/images/icon/back-arrow-blue.svg", "alt", ""], [1, "mb-0"], [1, "text-end"], ["routerLink", "/reports/scheduled-reports", 1, "text_dark_gradient", "btn_dark_text"], [1, "fa", "fa-clock"], [1, "row", "align-items-center", "mb-5"], [1, "nav", "nav-tabs", "tab_design_one"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#me", 1, "nav-link", 3, "click"], ["data-bs-toggle", "tab", "href", "#all", 1, "nav-link", "active", 3, "click"], [1, "col-md-6", "text-end"], [3, "formGroup"], [1, "row", "justify-content-end"], [1, "col-md-8"], [1, "row"], [3, "formControlFromDateNameValue", "formControlSelectedDateValue"], [1, "col-md-4"], ["type", "submit", 1, "btn_blue", 3, "click"], [1, "activity_top_wrap", "mb-5"], [1, "activity_left_text"], [1, "text_green_gradient"], [3, "ngClass", "click"], [1, "fa-solid", "fa-chart-column"], ["class", "mt-3", 4, "ngIf"], [1, "white_box-2"], [1, "d-flex", "align-items-baseline"], [1, "me-2"], [1, "col-md-3"], ["for", "groupBy"], ["appearance", "fill"], ["name", "groupBy", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "date"], ["value", "member"], ["value", "projectOrder"], ["value", "toDo"], ["value", "client"], [1, "col-md-9", "text-end"], [1, "activity_table_menu_wrap"], [1, "left_links"], [1, "text_gradient", "cursor-pointer", 3, "click"], ["src", "../../../../assets/images/icon/send.svg", "alt", ""], ["src", "../../../../assets/images/icon/schedule.svg", "alt", ""], [1, "dropdown"], ["data-toggle", "dropdown", "type", "button", "id", "settingMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "text_gradient", "cursor-pointer"], ["src", "../../../../assets/images/icon/export.svg", "alt", ""], ["aria-labelledby", "settingMenuButton", 1, "dropdown-menu"], [1, "dropdown-item"], [1, "d-flex"], ["data-toggle", "dropdown", "type", "button", "id", "filterMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn_round_gray", "me-3"], [1, "fa", "fa-filter"], ["aria-labelledby", "dropdownMenuButton1", 1, "dropdown-menu"], [4, "ngFor", "ngForOf"], [1, "row", "mb-5"], ["sortMode", "single", "rowGroupMode", "subheader", "responsiveLayout", "none", 3, "value", "sortField", "dataKey", "groupRowsBy", "columns", "scrollable"], ["pTemplate", "header"], ["pTemplate", "groupheader"], ["pTemplate", "groupfooter"], ["pTemplate", "rowexpansion"], [1, "mt-3"], ["baseChart", "", "height", "70", "type", "bar", 3, "datasets", "labels", "options", "legend"], [3, "checked", "disabled", "change"], ["pRipple", "", 3, "pRowToggler"], ["colspan", "", 2, "text-align", "left !important"], ["type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "p-button-plain", "p-mr-2", 3, "icon"], [1, "p-text-bold", "p-ml-2"], ["colspan", "99"]],
    template: function TimeActivityComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Time & Activity Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 3)(10, "div", 7)(11, "a", 8)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Scheduled Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 10)(16, "div", 3)(17, "ul", 11)(18, "li", 12)(19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimeActivityComponent_Template_a_click_19_listener() {
          return ctx.OnTabClick("me");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "li", 12)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimeActivityComponent_Template_a_click_22_listener() {
          return ctx.OnTabClick("all");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 15)(25, "form", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "div", 18)(30, "app-date-time-range-picker", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("formControlSelectedDateValue", function TimeActivityComponent_Template_app_date_time_range_picker_formControlSelectedDateValue_30_listener($event) {
          return ctx.SelectedDateEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 21)(32, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimeActivityComponent_Template_button_click_32_listener() {
          return ctx.OnFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 23)(35, "div", 24)(36, "ul")(37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "10:23:44");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "AVG. Activity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Earned ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimeActivityComponent_Template_button_click_49_listener() {
          return ctx.ShowGraph();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, TimeActivityComponent_div_51_Template, 5, 4, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 29)(53, "div", 30)(54, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "Asia - Kolkata");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 10)(59, "div", 32)(60, "div")(61, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "Group By:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "mat-form-field", 34)(64, "mat-select", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function TimeActivityComponent_Template_mat_select_ngModelChange_64_listener($event) {
          return ctx.groupBy = $event;
        })("selectionChange", function TimeActivityComponent_Template_mat_select_selectionChange_64_listener() {
          return ctx.changeGroupby();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "mat-option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "mat-option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "mat-option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "mat-option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "To-Do");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "mat-option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div", 41)(76, "div", 42)(77, "ul", 43)(78, "li")(79, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimeActivityComponent_Template_a_click_79_listener() {
          return ctx.OnSend();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](80, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, " Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "li")(83, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimeActivityComponent_Template_a_click_83_listener() {
          return ctx.OnSchedule();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](84, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, " Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "li")(87, "div", 47)(88, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](89, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "ul", 50)(92, "li")(93, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](94, "To CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "li")(96, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, "To PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "div", 52)(99, "div", 47)(100, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](101, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "ul", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](103, TimeActivityComponent_li_103_Template, 4, 3, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "div", 57)(105, "div")(106, "p-table", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](107, TimeActivityComponent_ng_template_107_Template, 2, 1, "ng-template", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](108, TimeActivityComponent_ng_template_108_Template, 6, 3, "ng-template", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](109, TimeActivityComponent_ng_template_109_Template, 10, 1, "ng-template", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](110, TimeActivityComponent_ng_template_110_Template, 2, 1, "ng-template", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlFromDateNameValue", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.showExpensesGraph == true ? "activity_filter_btn" : "activity_filter_btn_active");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showExpensesGraph);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.organizationDetails["organization_Name"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.groupBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.cols);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.timeActivityValue)("sortField", ctx.groupBy)("dataKey", ctx.groupBy)("groupRowsBy", ctx.groupBy)("columns", ctx.timeActivityShowCols)("scrollable", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__.DateTimeRangePickerComponent, ng2_charts__WEBPACK_IMPORTED_MODULE_11__.BaseChartDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, primeng_button__WEBPACK_IMPORTED_MODULE_15__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_16__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_17__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_16__.RowToggler, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckbox]
  });
  return TimeActivityComponent;
})();

/***/ }),

/***/ 52038:
/*!****************************************************************************!*\
  !*** ./src/app/pages/reports/timeoff-balance/timeoff-balance.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeoffBalanceComponent": () => (/* binding */ TimeoffBalanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/reports */ 46156);
/* harmony import */ var src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/report-filter/report-filter.component */ 32272);
/* harmony import */ var src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pop-up-model/schedule-report-model/schedule-report-model.component */ 450);
/* harmony import */ var src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pop-up-model/send-report-model/send-report-model.component */ 28096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/date-time-range-picker/date-time-range-picker.component */ 96991);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 47873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 10805);



















function TimeoffBalanceComponent_ng_template_76_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", col_r5.label, " ");
  }
}

function TimeoffBalanceComponent_ng_template_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TimeoffBalanceComponent_ng_template_76_th_1_Template, 2, 1, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", columns_r3);
  }
}

function TimeoffBalanceComponent_ng_template_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 48)(1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const rowData_r6 = ctx.$implicit;
    const expanded_r8 = ctx.expanded;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pRowToggler", rowData_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", expanded_r8 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rowData_r6[ctx_r1.groupBy]);
  }
}

function TimeoffBalanceComponent_ng_template_78_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r12 = ctx.$implicit;
    const rowData_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r9[col_r12.key], " ");
  }
}

function TimeoffBalanceComponent_ng_template_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TimeoffBalanceComponent_ng_template_78_td_1_Template, 2, 1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r10 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", columns_r10);
  }
}

const _c0 = function () {
  return ["/reports/all-reports"];
};

let TimeoffBalanceComponent = /*#__PURE__*/(() => {
  class TimeoffBalanceComponent {
    constructor(matDialog, formBuilder, masterService) {
      this.matDialog = matDialog;
      this.formBuilder = formBuilder;
      this.masterService = masterService;
      this.groupBy = 'policy';
      this.currentTab = 'all';
      this.organizationDetails = {};
      this.timeOffBalanceTableCols = [];
      this.timeOffBalanceArray = [{
        policy: 'test',
        member: 'Harsh',
        used: '50.00',
        pending: '150.00',
        balance: '200.00'
      }, {
        policy: 'test',
        member: 'Minal',
        used: '50.00',
        pending: '150.00',
        balance: '200.00'
      }];
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.timeOffBalanceForm = this.formBuilder.group({
        fromDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        toDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
      });
      this.changeGroupby();
    }

    SelectedDateEvent(event) {
      const fromDate = event.fromDate;
      const toDate = event.toDate;

      if (fromDate && toDate) {
        this.timeOffBalanceForm.patchValue({
          fromDate: new Date(fromDate),
          toDate: new Date(toDate)
        });
      }
    }

    changeGroupby() {
      this.timeOffBalanceTableCols = [];
      src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__.timeOffBalanceTable.forEach(element => {
        if (this.groupBy != element.key) {
          this.timeOffBalanceTableCols.push(element);
        }
      });
    }

    OnFilter() {
      let reportData = {
        reportName: 'Time Off Balances',
        filterInput: {
          policy: true
        },
        currentTab: this.currentTab
      };
      const filterDialog = this.matDialog.open(src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__.ReportFilterComponent, {
        width: '675px',
        data: reportData
      });
    }

    OnSend() {
      const sendDialog = this.matDialog.open(src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__.SendReportModelComponent, {
        width: '675px'
      });
    }

    OnSchedule() {
      const scheduleDialog = this.matDialog.open(src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__.ScheduleReportModelComponent, {
        width: '675px'
      });
    }

    OnTabClick(type) {
      this.currentTab = type;
    }

  }

  TimeoffBalanceComponent.ɵfac = function TimeoffBalanceComponent_Factory(t) {
    return new (t || TimeoffBalanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__.MasterService));
  };

  TimeoffBalanceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: TimeoffBalanceComponent,
    selectors: [["app-timeoff-balance"]],
    decls: 79,
    vars: 12,
    consts: [[1, "white_box", "dashboars_title", "main_content"], [1, ""], [1, "row", "align-items-center", "mb-4"], [1, "col-md-6"], [1, "setting_title", 3, "routerLink"], ["src", "../../../../assets/images/icon/back-arrow-blue.svg", "alt", ""], [1, "mb-0"], [1, "text-end"], ["href", "/reports/scheduled-reports", 1, "text_dark_gradient", "btn_dark_text"], [1, "fa", "fa-clock"], [1, "row", "align-items-center", "mb-5"], [1, "nav", "nav-tabs", "tab_design_one"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#me", 1, "nav-link", 3, "click"], ["data-bs-toggle", "tab", "href", "#all", 1, "nav-link", "active", 3, "click"], [1, "col-md-6", "text-end"], [3, "formGroup"], [1, "row", "justify-content-end"], [1, "col-md-8"], [1, "row"], [3, "formControlFromDateNameValue", "formControlSelectedDateValue"], [1, "col-md-4"], ["type", "submit", 1, "btn_blue", 3, "click"], [1, "d-flex", "align-items-baseline"], [1, "me-2"], [1, "col-md-3"], ["for", "groupBy"], ["appearance", "fill"], ["name", "groupBy", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "member"], ["value", "policy"], [1, "col-md-9", "text-end"], [1, "activity_table_menu_wrap"], [1, "left_links"], [1, "text_gradient", "cursor-pointer", 3, "click"], ["src", "../../../../assets/images/icon/send.svg", "alt", ""], ["src", "../../../../assets/images/icon/schedule.svg", "alt", ""], [1, "dropdown"], ["data-toggle", "dropdown", "type", "button", "id", "settingMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "text_gradient", "cursor-pointer"], ["src", "../../../../assets/images/icon/export.svg", "alt", ""], ["aria-labelledby", "settingMenuButton", 1, "dropdown-menu"], [1, "dropdown-item"], [1, "row", "mb-5"], ["sortMode", "single", "rowGroupMode", "subheader", "responsiveLayout", "none", 3, "value", "sortField", "dataKey", "responsive", "groupRowsBy", "columns"], ["pTemplate", "header"], ["pTemplate", "groupheader"], ["pTemplate", "rowexpansion"], [4, "ngFor", "ngForOf"], ["pRipple", "", 3, "pRowToggler"], ["colspan", "2", 2, "text-align", "left !important"], ["type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "p-button-plain", "p-mr-2", 3, "icon"], [1, "p-text-bold", "p-ml-2"], ["colspan", "15"]],
    template: function TimeoffBalanceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Time-Off Balances Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 3)(10, "div", 7)(11, "a", 8)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Scheduled Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 10)(16, "div", 3)(17, "ul", 11)(18, "li", 12)(19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimeoffBalanceComponent_Template_a_click_19_listener() {
          return ctx.OnTabClick("me");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "li", 12)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimeoffBalanceComponent_Template_a_click_22_listener() {
          return ctx.OnTabClick("all");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 15)(25, "form", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "div", 18)(30, "app-date-time-range-picker", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("formControlSelectedDateValue", function TimeoffBalanceComponent_Template_app_date_time_range_picker_formControlSelectedDateValue_30_listener($event) {
          return ctx.SelectedDateEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 21)(32, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimeoffBalanceComponent_Template_button_click_32_listener() {
          return ctx.OnFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 23)(35, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Asia - Kolkata");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 10)(40, "div", 25)(41, "div")(42, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Group By:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "mat-form-field", 27)(45, "mat-select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function TimeoffBalanceComponent_Template_mat_select_ngModelChange_45_listener($event) {
          return ctx.groupBy = $event;
        })("selectionChange", function TimeoffBalanceComponent_Template_mat_select_selectionChange_45_listener() {
          return ctx.changeGroupby();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "mat-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 31)(51, "div", 32)(52, "ul", 33)(53, "li")(54, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimeoffBalanceComponent_Template_a_click_54_listener() {
          return ctx.OnSend();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](55, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, " Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "li")(58, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimeoffBalanceComponent_Template_a_click_58_listener() {
          return ctx.OnSchedule();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](59, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "li")(62, "div", 37)(63, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](64, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "ul", 40)(67, "li")(68, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "To CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "li")(71, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "To PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 42)(74, "div")(75, "p-table", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](76, TimeoffBalanceComponent_ng_template_76_Template, 2, 1, "ng-template", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](77, TimeoffBalanceComponent_ng_template_77_Template, 7, 3, "ng-template", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](78, TimeoffBalanceComponent_ng_template_78_Template, 2, 1, "ng-template", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.timeOffBalanceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlFromDateNameValue", ctx.timeOffBalanceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.organizationDetails["organization_Name"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.groupBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.timeOffBalanceArray)("sortField", ctx.groupBy)("dataKey", ctx.groupBy)("responsive", false)("groupRowsBy", ctx.groupBy)("columns", ctx.timeOffBalanceTableCols);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__.DateTimeRangePickerComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_15__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_16__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_15__.RowToggler]
  });
  return TimeoffBalanceComponent;
})();

/***/ }),

/***/ 69533:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/reports/timeoff-transactions/timeoff-transactions.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeoffTransactionsComponent": () => (/* binding */ TimeoffTransactionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/reports */ 46156);
/* harmony import */ var src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/report-filter/report-filter.component */ 32272);
/* harmony import */ var src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pop-up-model/schedule-report-model/schedule-report-model.component */ 450);
/* harmony import */ var src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pop-up-model/send-report-model/send-report-model.component */ 28096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/date-time-range-picker/date-time-range-picker.component */ 96991);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 47873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 10805);



















function TimeoffTransactionsComponent_ng_template_76_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", col_r5.label, " ");
  }
}

function TimeoffTransactionsComponent_ng_template_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TimeoffTransactionsComponent_ng_template_76_th_1_Template, 2, 1, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", columns_r3);
  }
}

function TimeoffTransactionsComponent_ng_template_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 48)(1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const rowData_r6 = ctx.$implicit;
    const expanded_r8 = ctx.expanded;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pRowToggler", rowData_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", expanded_r8 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rowData_r6[ctx_r1.groupBy]);
  }
}

function TimeoffTransactionsComponent_ng_template_78_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r12 = ctx.$implicit;
    const rowData_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r9[col_r12.key], " ");
  }
}

function TimeoffTransactionsComponent_ng_template_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TimeoffTransactionsComponent_ng_template_78_td_1_Template, 2, 1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r10 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", columns_r10);
  }
}

const _c0 = function () {
  return ["/reports/all-reports"];
};

let TimeoffTransactionsComponent = /*#__PURE__*/(() => {
  class TimeoffTransactionsComponent {
    constructor(matDialog, formBuilder, masterService) {
      this.matDialog = matDialog;
      this.formBuilder = formBuilder;
      this.masterService = masterService;
      this.groupBy = 'policy';
      this.currentTab = 'all';
      this.organizationDetails = {};
      this.timeOffTransactionTableCols = [];
      this.timeOffTransactionArray = [{
        policy: 'test',
        member: 'Harsh',
        date: 'Wed, Sep 14, 2022',
        bookedon: 'Wed, Sep 14, 2022',
        type: 'Time Off',
        reason: 'test',
        changedBy: '',
        duration: '-8:00'
      }, {
        policy: 'test',
        member: 'Minal',
        date: 'Wed, Sep 14, 2022',
        bookedon: 'Wed, Sep 14, 2022',
        type: 'Time Off',
        reason: 'test',
        changedBy: '',
        duration: '-8:00'
      }, {
        policy: 'test1',
        member: 'Harsh',
        date: 'Wed, Sep 14, 2022',
        bookedon: 'Wed, Sep 14, 2022',
        type: 'Time Off',
        reason: 'test',
        changedBy: '',
        duration: '-8:00'
      }, {
        policy: 'test2',
        member: 'Minal',
        date: 'Wed, Sep 14, 2022',
        bookedon: 'Wed, Sep 14, 2022',
        type: 'Time Off',
        reason: 'test',
        changedBy: '',
        duration: '-8:00'
      }];
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.timeOffTransactionForm = this.formBuilder.group({
        fromDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        toDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
      });
      this.changeGroupby();
    }

    SelectedDateEvent(event) {
      const fromDate = event.fromDate;
      const toDate = event.toDate;

      if (fromDate && toDate) {
        this.timeOffTransactionForm.patchValue({
          fromDate: new Date(fromDate),
          toDate: new Date(toDate)
        });
      }
    }

    changeGroupby() {
      this.timeOffTransactionTableCols = [];
      src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__.timeOffTransactionTable.forEach(element => {
        if (this.groupBy != element.key) {
          this.timeOffTransactionTableCols.push(element);
        }
      });
    }

    OnFilter() {
      let reportData = {
        reportName: 'Time Off transactions',
        filterInput: {
          include_accruals: true,
          changed_by: true,
          policy: true,
          type: true
        },
        currentTab: this.currentTab
      };
      const filterDialog = this.matDialog.open(src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__.ReportFilterComponent, {
        width: '675px',
        data: reportData
      });
    }

    OnTabClick(type) {
      this.currentTab = type;
    }

    OnSend() {
      const sendDialog = this.matDialog.open(src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__.SendReportModelComponent, {
        width: '675px'
      });
    }

    OnSchedule() {
      const scheduleDialog = this.matDialog.open(src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__.ScheduleReportModelComponent, {
        width: '675px'
      });
    }

  }

  TimeoffTransactionsComponent.ɵfac = function TimeoffTransactionsComponent_Factory(t) {
    return new (t || TimeoffTransactionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__.MasterService));
  };

  TimeoffTransactionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: TimeoffTransactionsComponent,
    selectors: [["app-timeoff-transactions"]],
    decls: 79,
    vars: 12,
    consts: [[1, "white_box", "dashboars_title", "main_content"], [1, ""], [1, "row", "align-items-center", "mb-4"], [1, "col-md-6"], [1, "setting_title", 3, "routerLink"], ["src", "../../../../assets/images/icon/back-arrow-blue.svg", "alt", ""], [1, "mb-0"], [1, "text-end"], ["href", "/reports/scheduled-reports", 1, "text_dark_gradient", "btn_dark_text"], [1, "fa", "fa-clock"], [1, "row", "align-items-center", "mb-5"], [1, "nav", "nav-tabs", "tab_design_one"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#me", 1, "nav-link", 3, "click"], ["data-bs-toggle", "tab", "href", "#all", 1, "nav-link", "active", 3, "click"], [1, "col-md-6", "text-end"], [3, "formGroup"], [1, "row", "justify-content-end"], [1, "col-md-8"], [1, "row"], [3, "formControlFromDateNameValue", "formControlSelectedDateValue"], [1, "col-md-4"], ["type", "submit", 1, "btn_blue", 3, "click"], [1, "d-flex", "align-items-baseline"], [1, "me-2"], [1, "col-md-3"], ["for", "groupBy"], ["appearance", "fill"], ["name", "groupBy", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "member"], ["value", "policy"], [1, "col-md-9", "text-end"], [1, "activity_table_menu_wrap"], [1, "left_links"], [1, "text_gradient", "cursor-pointer", 3, "click"], ["src", "../../../../assets/images/icon/send.svg", "alt", ""], ["src", "../../../../assets/images/icon/schedule.svg", "alt", ""], [1, "dropdown"], ["data-toggle", "dropdown", "type", "button", "id", "settingMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "text_gradient", "cursor-pointer"], ["src", "../../../../assets/images/icon/export.svg", "alt", ""], ["aria-labelledby", "settingMenuButton", 1, "dropdown-menu"], [1, "dropdown-item"], [1, "row", "mb-5"], ["sortMode", "single", "rowGroupMode", "subheader", "responsiveLayout", "none", 3, "value", "sortField", "dataKey", "responsive", "groupRowsBy", "columns"], ["pTemplate", "header"], ["pTemplate", "groupheader"], ["pTemplate", "rowexpansion"], [4, "ngFor", "ngForOf"], ["pRipple", "", 3, "pRowToggler"], ["colspan", "2", 2, "text-align", "left !important"], ["type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "p-button-plain", "p-mr-2", 3, "icon"], [1, "p-text-bold", "p-ml-2"], ["colspan", "15"]],
    template: function TimeoffTransactionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Time-Off Balances Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 3)(10, "div", 7)(11, "a", 8)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Scheduled Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 10)(16, "div", 3)(17, "ul", 11)(18, "li", 12)(19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimeoffTransactionsComponent_Template_a_click_19_listener() {
          return ctx.OnTabClick("me");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "li", 12)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimeoffTransactionsComponent_Template_a_click_22_listener() {
          return ctx.OnTabClick("all");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 15)(25, "form", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "div", 18)(30, "app-date-time-range-picker", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("formControlSelectedDateValue", function TimeoffTransactionsComponent_Template_app_date_time_range_picker_formControlSelectedDateValue_30_listener($event) {
          return ctx.SelectedDateEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 21)(32, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimeoffTransactionsComponent_Template_button_click_32_listener() {
          return ctx.OnFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 23)(35, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Asia - Kolkata");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 10)(40, "div", 25)(41, "div")(42, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Group By:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "mat-form-field", 27)(45, "mat-select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function TimeoffTransactionsComponent_Template_mat_select_ngModelChange_45_listener($event) {
          return ctx.groupBy = $event;
        })("selectionChange", function TimeoffTransactionsComponent_Template_mat_select_selectionChange_45_listener() {
          return ctx.changeGroupby();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "mat-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 31)(51, "div", 32)(52, "ul", 33)(53, "li")(54, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimeoffTransactionsComponent_Template_a_click_54_listener() {
          return ctx.OnSend();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](55, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, " Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "li")(58, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimeoffTransactionsComponent_Template_a_click_58_listener() {
          return ctx.OnSchedule();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](59, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "li")(62, "div", 37)(63, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](64, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "ul", 40)(67, "li")(68, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "To CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "li")(71, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "To PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 42)(74, "div")(75, "p-table", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](76, TimeoffTransactionsComponent_ng_template_76_Template, 2, 1, "ng-template", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](77, TimeoffTransactionsComponent_ng_template_77_Template, 7, 3, "ng-template", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](78, TimeoffTransactionsComponent_ng_template_78_Template, 2, 1, "ng-template", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.timeOffTransactionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlFromDateNameValue", ctx.timeOffTransactionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.organizationDetails["organization_Name"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.groupBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.timeOffTransactionArray)("sortField", ctx.groupBy)("dataKey", ctx.groupBy)("responsive", false)("groupRowsBy", ctx.groupBy)("columns", ctx.timeOffTransactionTableCols);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__.DateTimeRangePickerComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_15__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_16__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_15__.RowToggler]
  });
  return TimeoffTransactionsComponent;
})();

/***/ }),

/***/ 71634:
/*!************************************************************************************!*\
  !*** ./src/app/pages/reports/timesheet-approvals/timesheet-approvals.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimesheetApprovalsComponent": () => (/* binding */ TimesheetApprovalsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/reports */ 46156);
/* harmony import */ var src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/report-filter/report-filter.component */ 32272);
/* harmony import */ var src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pop-up-model/schedule-report-model/schedule-report-model.component */ 450);
/* harmony import */ var src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pop-up-model/send-report-model/send-report-model.component */ 28096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/date-time-range-picker/date-time-range-picker.component */ 96991);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 47873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ 56709);




















const _c0 = function (a0) {
  return {
    "checkBoxDisable": a0
  };
};

function TimesheetApprovalsComponent_li_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 53)(1, "a", 42)(2, "mat-checkbox", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function TimesheetApprovalsComponent_li_80_Template_mat_checkbox_change_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const col_r4 = restoredCtx.$implicit;
      const i_r5 = restoredCtx.index;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.OnColumnToggle(col_r4, i_r5, $event.checked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c0, col_r4["disable"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", col_r4["disable"])("checked", col_r4.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", col_r4.label, " ");
  }
}

function TimesheetApprovalsComponent_ng_template_84_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", col_r10.label, " ");
  }
}

function TimesheetApprovalsComponent_ng_template_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TimesheetApprovalsComponent_ng_template_84_th_1_Template, 2, 1, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", columns_r8);
  }
}

function TimesheetApprovalsComponent_ng_template_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 56)(1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const rowData_r11 = ctx.$implicit;
    const expanded_r13 = ctx.expanded;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pRowToggler", rowData_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", expanded_r13 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rowData_r11[ctx_r2.groupBy]);
  }
}

function TimesheetApprovalsComponent_ng_template_86_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r17 = ctx.$implicit;
    const rowData_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r14[col_r17.key], " ");
  }
}

function TimesheetApprovalsComponent_ng_template_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TimesheetApprovalsComponent_ng_template_86_td_1_Template, 2, 1, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r15 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", columns_r15);
  }
}

const _c1 = function () {
  return ["/reports/all-reports"];
};

let TimesheetApprovalsComponent = /*#__PURE__*/(() => {
  class TimesheetApprovalsComponent {
    constructor(formBuilder, matDialog, masterService) {
      this.formBuilder = formBuilder;
      this.matDialog = matDialog;
      this.masterService = masterService;
      this.groupBy = 'date';
      this.organizationDetails = {};
      this.timeSheetsArray = [{
        timesheets: "minal's for period Mon, Sep 12, 2022 to Thu, Sep 15, 2022",
        member: 'minal',
        date: 'Mon, Sep 12, 2022',
        project_workOrder: 'Harsh',
        employeeId: '',
        taxInfo: '',
        timesheetStatus: 'Open',
        time: '11:15:15',
        activity: '43%',
        payRate: '$0.00',
        spent: '$0.00',
        billRate: '$0.00',
        billedAmount: '$0.00',
        billableTime: '1:30',
        NonBillableTime: '0:00'
      }, {
        timesheets: "minal's for period Mon, Sep 12, 2022 to Thu, Sep 15, 2022",
        member: 'minal',
        date: 'Mon, Sep 14, 2022',
        project_workOrder: 'Harsh',
        employeeId: '',
        taxInfo: '',
        timesheetStatus: 'Open',
        time: '11:15:15',
        activity: '43%',
        payRate: '$0.00',
        spent: '$0.00',
        billRate: '$0.00',
        billedAmount: '$0.00',
        billableTime: '1:30',
        NonBillableTime: '0:00'
      }, {
        timesheets: "minal's for period Mon, Sep 12, 2022 to Thu, Sep 15, 2022",
        member: 'minal',
        date: 'Mon, Sep 13, 2022',
        project_workOrder: 'Harsh',
        employeeId: '',
        taxInfo: '',
        timesheetStatus: 'Open',
        time: '11:15:15',
        activity: '43%',
        payRate: '$0.00',
        spent: '$0.00',
        billRate: '$0.00',
        billedAmount: '$0.00',
        billableTime: '1:30',
        NonBillableTime: '0:00'
      }];
      this.cols = [];
      this.timesheetsApprovalsCols = src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__.timesheetsApprovalsTable;
      this.timesheetsApprovalsShowCols = [];
      this.showExpensesGraph = true;
      this.currentTab = 'all';
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.cols = JSON.parse(JSON.stringify(this.timesheetsApprovalsCols));
      this.timesheetsApprovalsCols.forEach(element => {
        if (element.selected) {
          this.timesheetsApprovalsShowCols.push(element);
        }
      });
      this.filterForm = this.formBuilder.group({
        fromDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        toDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
      });
      this.changeGroupby();
    }

    calculateCustomerTotal(date) {
      let total = 0; // if (this.expenses) {
      //   for (let customer of this.expenses) {
      //     if (customer.representative.date === date) {
      //       total += customer.amount;
      //     }
      //   }
      // }

      return total;
    }

    changeGroupby() {
      this.timesheetsApprovalsShowCols = [];
      this.timesheetsApprovalsCols.forEach(element => {
        if (element.selected) {
          if (this.groupBy != element.key) {
            // Array.push(element);
            this.timesheetsApprovalsShowCols.push(element);
          }
        }
      });
    }

    OnColumnToggle(col, indexElement, event) {
      this.timesheetsApprovalsCols.forEach(element => {
        if (element.key == col.key) {
          element.selected = event;
        }
      });
      this.changeGroupby(); // this.timesheetsApprovalsShowCols = this.masterService.OnColumnToggle(col, indexElement, event, this.timesheetsApprovalsCols, this.timesheetsApprovalsShowCols, 0);
    }

    SelectedDateEvent(event) {
      const fromDate = event.fromDate;
      const toDate = event.toDate;

      if (fromDate && toDate) {
        this.filterForm.patchValue({
          fromDate: new Date(fromDate),
          toDate: new Date(toDate)
        });
      }
    }

    OnTabClick(type) {
      this.currentTab = type;
    }

    OnSend() {
      const sendDialog = this.matDialog.open(src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__.SendReportModelComponent, {
        width: '675px'
      });
    }

    OnSchedule() {
      const scheduleDialog = this.matDialog.open(src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__.ScheduleReportModelComponent, {
        width: '675px'
      });
    }

    OnFilter() {
      let reportData = {
        reportName: 'Timesheet-approval',
        filterInput: {
          status: true,
          sum_date_ranges: true
        },
        currentTab: this.currentTab
      };
      const filterDialog = this.matDialog.open(src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__.ReportFilterComponent, {
        width: '675px',
        data: reportData
      });
    }

  }

  TimesheetApprovalsComponent.ɵfac = function TimesheetApprovalsComponent_Factory(t) {
    return new (t || TimesheetApprovalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__.MasterService));
  };

  TimesheetApprovalsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: TimesheetApprovalsComponent,
    selectors: [["app-timesheet-approvals"]],
    decls: 87,
    vars: 13,
    consts: [[1, "white_box", "dashboars_title", "main_content"], [1, ""], [1, "row", "align-items-center", "mb-4"], [1, "col-md-6"], [1, "setting_title", 3, "routerLink"], ["src", "../../../../assets/images/icon/back-arrow-blue.svg", "alt", ""], [1, "mb-0"], [1, "text-end"], ["href", "/reports/scheduled-reports", 1, "text_dark_gradient", "btn_dark_text"], [1, "fa", "fa-clock"], [1, "row", "align-items-center", "mb-5"], [1, "nav", "nav-tabs", "tab_design_one"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#me", 1, "nav-link", 3, "click"], ["data-bs-toggle", "tab", "href", "#all", 1, "nav-link", "active", 3, "click"], [1, "col-md-6", "text-end"], [3, "formGroup"], [1, "row", "justify-content-end"], [1, "col-md-8"], [1, "row"], [3, "formControlFromDateNameValue", "formControlSelectedDateValue"], [1, "col-md-4"], ["type", "submit", 1, "btn_blue", 3, "click"], [1, "d-flex", "align-items-baseline"], [1, "me-2"], [1, "col-md-3"], ["for", "groupBy"], ["appearance", "fill"], ["name", "groupBy", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "date"], ["value", "member"], ["value", "timesheets"], [1, "col-md-9", "text-end"], [1, "activity_table_menu_wrap"], [1, "left_links"], [1, "text_gradient", "cursor-pointer", 3, "click"], ["src", "../../../../assets/images/icon/send.svg", "alt", ""], ["src", "../../../../assets/images/icon/schedule.svg", "alt", ""], [1, "dropdown"], ["data-toggle", "dropdown", "type", "button", "id", "settingMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "text_gradient", "cursor-pointer"], ["src", "../../../../assets/images/icon/export.svg", "alt", ""], ["aria-labelledby", "settingMenuButton", 1, "dropdown-menu"], [1, "dropdown-item"], [1, "d-flex"], ["data-toggle", "dropdown", "type", "button", "id", "filterMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn_round_gray", "me-3"], [1, "fa-solid", "fa-filter"], ["aria-labelledby", "dropdownMenuButton1", 1, "dropdown-menu"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "row", "mb-5"], ["sortMode", "single", "rowGroupMode", "subheader", "responsiveLayout", "none", 3, "value", "sortField", "dataKey", "responsive", "groupRowsBy", "columns"], ["pTemplate", "header"], ["pTemplate", "groupheader"], ["pTemplate", "rowexpansion"], [3, "ngClass"], [3, "disabled", "checked", "change"], [4, "ngFor", "ngForOf"], ["pRipple", "", 3, "pRowToggler"], ["colspan", "2", 2, "text-align", "left !important"], ["type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "p-button-plain", "p-mr-2", 3, "icon"], [1, "p-text-bold", "p-ml-2"], ["colspan", "15"]],
    template: function TimesheetApprovalsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Timesheet approvals report");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 3)(10, "div", 7)(11, "a", 8)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Scheduled Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 10)(16, "div", 3)(17, "ul", 11)(18, "li", 12)(19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimesheetApprovalsComponent_Template_a_click_19_listener() {
          return ctx.OnTabClick("me");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "li", 12)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimesheetApprovalsComponent_Template_a_click_22_listener() {
          return ctx.OnTabClick("all");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 15)(25, "form", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "div", 18)(30, "app-date-time-range-picker", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("formControlSelectedDateValue", function TimesheetApprovalsComponent_Template_app_date_time_range_picker_formControlSelectedDateValue_30_listener($event) {
          return ctx.SelectedDateEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 21)(32, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimesheetApprovalsComponent_Template_button_click_32_listener() {
          return ctx.OnFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 23)(35, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Asia - Kolkata");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 10)(40, "div", 25)(41, "div")(42, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Group By:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "mat-form-field", 27)(45, "mat-select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function TimesheetApprovalsComponent_Template_mat_select_ngModelChange_45_listener($event) {
          return ctx.groupBy = $event;
        })("selectionChange", function TimesheetApprovalsComponent_Template_mat_select_selectionChange_45_listener() {
          return ctx.changeGroupby();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "mat-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "mat-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Timesheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 32)(53, "div", 33)(54, "ul", 34)(55, "li")(56, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimesheetApprovalsComponent_Template_a_click_56_listener() {
          return ctx.OnSend();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](57, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, " Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "li")(60, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimesheetApprovalsComponent_Template_a_click_60_listener() {
          return ctx.OnSchedule();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](61, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "li")(64, "div", 38)(65, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](66, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "ul", 41)(69, "li")(70, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "To CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "li")(73, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "To PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div", 43)(76, "div", 38)(77, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](78, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "ul", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](80, TimesheetApprovalsComponent_li_80_Template, 4, 6, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "div", 48)(82, "div")(83, "p-table", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](84, TimesheetApprovalsComponent_ng_template_84_Template, 2, 1, "ng-template", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](85, TimesheetApprovalsComponent_ng_template_85_Template, 7, 3, "ng-template", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](86, TimesheetApprovalsComponent_ng_template_86_Template, 2, 1, "ng-template", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](12, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlFromDateNameValue", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.organizationDetails["organization_Name"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.groupBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.cols);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.timeSheetsArray)("sortField", ctx.groupBy)("dataKey", ctx.groupBy)("responsive", false)("groupRowsBy", ctx.groupBy)("columns", ctx.timesheetsApprovalsShowCols);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__.DateTimeRangePickerComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_15__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_16__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_15__.RowToggler, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckbox]
  });
  return TimesheetApprovalsComponent;
})();

/***/ }),

/***/ 28801:
/*!************************************************************************************!*\
  !*** ./src/app/pages/reports/weekly-limit-report/weekly-limit-report.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeeklyLimitReportComponent": () => (/* binding */ WeeklyLimitReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/reports */ 46156);
/* harmony import */ var src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/report-filter/report-filter.component */ 32272);
/* harmony import */ var src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pop-up-model/schedule-report-model/schedule-report-model.component */ 450);
/* harmony import */ var src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pop-up-model/send-report-model/send-report-model.component */ 28096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/date-time-range-picker/date-time-range-picker.component */ 96991);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 47873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ 73162);




















function WeeklyLimitReportComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 43)(1, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WeeklyLimitReportComponent_div_31_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.OnFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}

function WeeklyLimitReportComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Group By:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-form-field", 46)(4, "mat-select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function WeeklyLimitReportComponent_div_40_Template_mat_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.groupBy = $event);
    })("selectionChange", function WeeklyLimitReportComponent_div_40_Template_mat_select_selectionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.changeGroupby());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Week");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Member");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.groupBy);
  }
}

function WeeklyLimitReportComponent_ng_template_67_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", col_r12.label, " ");
  }
}

function WeeklyLimitReportComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, WeeklyLimitReportComponent_ng_template_67_th_1_Template, 2, 1, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", columns_r10);
  }
}

function WeeklyLimitReportComponent_ng_template_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 51)(1, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const rowData_r13 = ctx.$implicit;
    const expanded_r15 = ctx.expanded;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pRowToggler", rowData_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", expanded_r15 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rowData_r13[ctx_r3.groupBy]);
  }
}

function WeeklyLimitReportComponent_ng_template_69_td_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 57)(1, "span", 57)(2, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const col_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const rowData_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rowData_r16[col_r19.key].charAt(0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r16[col_r19.key], "");
  }
}

function WeeklyLimitReportComponent_ng_template_69_td_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-progress-bar", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const col_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const rowData_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", rowData_r16["percentage_used"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", rowData_r16[col_r19.key], "%");
  }
}

function WeeklyLimitReportComponent_ng_template_69_td_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const rowData_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rowData_r16[col_r19.key]);
  }
}

function WeeklyLimitReportComponent_ng_template_69_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, WeeklyLimitReportComponent_ng_template_69_td_1_span_1_Template, 5, 2, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, WeeklyLimitReportComponent_ng_template_69_td_1_span_2_Template, 4, 2, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, WeeklyLimitReportComponent_ng_template_69_td_1_span_3_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", col_r19.config == null ? null : col_r19.config.isProfileWithLetter);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", col_r19.config == null ? null : col_r19.config.isProgressbar);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", col_r19.config == null ? null : col_r19.config.isText);
  }
}

function WeeklyLimitReportComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, WeeklyLimitReportComponent_ng_template_69_td_1_Template, 4, 3, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r17 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", columns_r17);
  }
}

const _c0 = function () {
  return ["/reports/all-reports"];
};

let WeeklyLimitReportComponent = /*#__PURE__*/(() => {
  class WeeklyLimitReportComponent {
    constructor(formBuilder, masterService, matDialog) {
      this.formBuilder = formBuilder;
      this.masterService = masterService;
      this.matDialog = matDialog;
      this.groupBy = 'week';
      this.weeklyLimitValue = [{
        member: 'Admin1',
        weekly_limit: '40:00:00',
        time_spent: '5:39:34',
        percentage_used: '14',
        remaining: '100:00',
        week: "Mon, Sep 12, 2022 - Sun, Sep 18, 2022"
      }];
      this.weeklyLimitCols = [];
      this.currentTab = 'all';
      this.organizationDetails = {};
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.filterForm = this.formBuilder.group({
        fromDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        todate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
      });
      this.changeGroupby();
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
    }

    changeGroupby() {
      this.weeklyLimitCols = [];
      src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__.weeklyLimitReportTable.forEach(element => {
        if (this.groupBy != element.key) {
          this.weeklyLimitCols.push(element);
        }
      });
    }

    OnTabClick(type) {
      this.currentTab = type;
    }

    OnSend() {
      const sendDialog = this.matDialog.open(src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__.SendReportModelComponent, {
        width: '675px'
      });
    }

    OnSchedule() {
      const scheduleDialog = this.matDialog.open(src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__.ScheduleReportModelComponent, {
        width: '675px'
      });
    }

    OnFilter() {
      let reportData = {
        reportName: 'Weekly-limit',
        filterInput: {},
        currentTab: this.currentTab
      };
      const filterDialog = this.matDialog.open(src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__.ReportFilterComponent, {
        width: '675px',
        data: reportData
      });
    }

  }

  WeeklyLimitReportComponent.ɵfac = function WeeklyLimitReportComponent_Factory(t) {
    return new (t || WeeklyLimitReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog));
  };

  WeeklyLimitReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: WeeklyLimitReportComponent,
    selectors: [["app-weekly-limit-report"]],
    decls: 70,
    vars: 12,
    consts: [[1, "white_box", "dashboars_title"], [1, "top_title_wrap"], [1, "row", "align-items-center", "mb-4"], [1, "col-md-6"], [1, "setting_title", 3, "routerLink"], ["src", "../../../../assets/images/icon/back-arrow-blue.svg", "alt", ""], [1, "mb-0"], [1, "text-end"], ["routerLink", "/reports/scheduled-reports", 1, "text_dark_gradient", "btn_dark_text"], [1, "fa", "fa-clock"], [1, "row", "align-items-center", "mb-5"], [1, "nav", "nav-tabs", "tab_design_one"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#me", 1, "nav-link", 3, "click"], ["data-bs-toggle", "tab", "href", "#all", 1, "nav-link", "active", 3, "click"], [1, "col-md-6", "text-end"], [3, "formGroup"], [1, "row", "justify-content-end"], [1, "col-md-8"], [1, "row"], [3, "formControlFromDateNameValue", "formControlSelectedDateValue"], ["class", "col-md-4", 4, "ngIf"], [1, "row", "mb-2"], [1, "d-flex", "align-items-baseline"], [1, "me-2"], [1, "col-md-3"], [4, "ngIf"], [1, "col-md-9", "text-end"], [1, "activity_table_menu_wrap"], [1, "left_links"], [1, "text_gradient", "cursor-pointer", 3, "click"], ["src", "../../../../assets/images/icon/send.svg", "alt", ""], ["src", "../../../../assets/images/icon/schedule.svg", "alt", ""], [1, "dropdown"], ["data-toggle", "dropdown", "type", "button", "id", "settingMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "text_gradient", "cursor-pointer"], ["src", "../../../../assets/images/icon/export.svg", "alt", ""], ["aria-labelledby", "settingMenuButton", 1, "dropdown-menu"], [1, "dropdown-item"], [1, "row", "mb-5"], ["sortMode", "single", "rowGroupMode", "subheader", 3, "value", "sortField", "dataKey", "groupRowsBy", "columns"], ["pTemplate", "header"], ["pTemplate", "groupheader"], ["pTemplate", "rowexpansion"], [1, "col-md-4"], ["type", "submit", 1, "btn_blue", 3, "click"], ["for", "groupBy"], ["appearance", "fill"], ["name", "groupBy", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "week"], ["value", "member"], [4, "ngFor", "ngForOf"], ["pRipple", "", 3, "pRowToggler"], ["colspan", "10", 2, "text-align", "left !important"], ["type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "p-button-plain", "p-mr-2", 3, "icon"], [1, "p-text-bold", "p-ml-2"], ["class", "d-flex align-items-center", 4, "ngIf"], ["class", "d-flex", 4, "ngIf"], [1, "d-flex", "align-items-center"], [1, "user_custom_img", "orange"], [1, "d-flex"], ["mode", "determinate", 3, "value"]],
    template: function WeeklyLimitReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Weekly Limits Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 3)(10, "div", 7)(11, "a", 8)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Scheduled Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 10)(16, "div", 3)(17, "ul", 11)(18, "li", 12)(19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WeeklyLimitReportComponent_Template_a_click_19_listener() {
          return ctx.OnTabClick("me");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "li", 12)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WeeklyLimitReportComponent_Template_a_click_22_listener() {
          return ctx.OnTabClick("all");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 15)(25, "form", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "div", 18)(30, "app-date-time-range-picker", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("formControlSelectedDateValue", function WeeklyLimitReportComponent_Template_app_date_time_range_picker_formControlSelectedDateValue_30_listener($event) {
          return ctx.SelectedDateEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, WeeklyLimitReportComponent_div_31_Template, 3, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 22)(33, "div", 23)(34, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Asia - Kolkata");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 10)(39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, WeeklyLimitReportComponent_div_40_Template, 9, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 27)(42, "div", 28)(43, "ul", 29)(44, "li")(45, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WeeklyLimitReportComponent_Template_a_click_45_listener() {
          return ctx.OnSend();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, " Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "li")(49, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WeeklyLimitReportComponent_Template_a_click_49_listener() {
          return ctx.OnSchedule();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, " Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "li")(53, "div", 33)(54, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](55, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "ul", 36)(58, "li")(59, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "To CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "li")(62, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "To PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 38)(65, "div")(66, "p-table", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, WeeklyLimitReportComponent_ng_template_67_Template, 2, 1, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, WeeklyLimitReportComponent_ng_template_68_Template, 5, 3, "ng-template", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](69, WeeklyLimitReportComponent_ng_template_69_Template, 2, 1, "ng-template", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlFromDateNameValue", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentTab == "all");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.organizationDetails["organization_Name"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentTab == "all");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.weeklyLimitValue)("sortField", ctx.groupBy)("dataKey", ctx.groupBy)("groupRowsBy", ctx.groupBy)("columns", ctx.weeklyLimitCols);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__.DateTimeRangePickerComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_15__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_16__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_15__.RowToggler, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__.MatProgressBar]
  });
  return WeeklyLimitReportComponent;
})();

/***/ }),

/***/ 61922:
/*!**********************************************************!*\
  !*** ./src/app/pages/reports/weekly/weekly.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeeklyComponent": () => (/* binding */ WeeklyComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 15439);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/report-filter/report-filter.component */ 32272);
/* harmony import */ var src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pop-up-model/schedule-report-model/schedule-report-model.component */ 450);
/* harmony import */ var src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pop-up-model/send-report-model/send-report-model.component */ 28096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/dynamic-table/dynamic-table.component */ 57834);
/* harmony import */ var _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/date-time-range-picker/date-time-range-picker.component */ 96991);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-charts */ 74717);















function WeeklyComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 44)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Hours Worked Per Member");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "canvas", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("datasets", ctx_r0.barChartData)("labels", ctx_r0.barChartLabels)("options", ctx_r0.barChartOptions)("legend", ctx_r0.barChartLegend);
  }
}

const _c0 = function () {
  return ["/reports/all-reports"];
};

let WeeklyComponent = /*#__PURE__*/(() => {
  class WeeklyComponent {
    constructor(formBuilder, masterService, matDialog) {
      this.formBuilder = formBuilder;
      this.masterService = masterService;
      this.matDialog = matDialog;
      this.barChartLabels = ['Ravi'];
      this.barChartOptions = {
        scaleShowVerticalLines: false,
        responsive: true,
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false
            }
          },
          y: {
            stacked: true,
            ticks: {
              stepSize: 2
            }
          }
        }
      };
      this.barChartData = [{
        data: [2],
        label: 'Tracked',
        barThickness: 16,
        backgroundColor: "#177BEA",
        borderColor: "#177BEA",
        hoverBackgroundColor: "#177BEA",
        barPercentage: 0.5
      }, {
        data: [4],
        label: 'Manual',
        barThickness: 16,
        backgroundColor: "#E59200",
        borderColor: "#E59200",
        hoverBackgroundColor: "#E59200",
        barPercentage: 0.5
      }, {
        data: [5],
        label: 'Break',
        barThickness: 16,
        backgroundColor: "#C2D3E9",
        borderColor: "#C2D3E9",
        hoverBackgroundColor: "#C2D3E9",
        barPercentage: 0.5
      }];
      this.weeklyCols = [];
      this.totalDays = [];
      this.weeklyTableValue = [{
        projectOrder: 'Ravi',
        'Th 28 Jul': '0:00:00',
        'Fr 29 Jul': '0:00:00',
        'Sa 30 Jul': '0:00:00',
        'Su 31 Jul': '0:00:00',
        'Mo 1 Aug': '0:00:00',
        'Tu 2 Aug': '0:00:00',
        'We 3 Aug': '0:00:00',
        weeklyTotal: '26:13:40',
        activity: '14',
        spent: '0.00'
      }];
      this.barChartLegend = true;
      this.showWeeklyGraph = true;
      this.currentTab = 'all';
      this.organizationDetails = {};
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      let currentWeekDays = this.startAndEndOfWeek(moment__WEBPACK_IMPORTED_MODULE_0__());
      this.filterForm = this.formBuilder.group({
        fromDate: [currentWeekDays[0], [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        toDate: [currentWeekDays[1], [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
      });
      this.SetWeeklyTableCols();
    }

    SelectedDateEvent(event) {
      const fromDate = event.startDate._d;
      const toDate = event.endDate._d;

      if (fromDate && toDate) {
        this.filterForm.patchValue({
          fromDate: fromDate,
          toDate: toDate
        });
      }

      this.SetWeeklyTableCols();
    }

    startAndEndOfWeek(date) {
      var now = date ? new Date(date) : new Date();
      let startOfWeek = moment__WEBPACK_IMPORTED_MODULE_0__(now).clone().startOf('isoWeek');
      let endOfWeek = moment__WEBPACK_IMPORTED_MODULE_0__(now).clone().endOf('isoWeek');
      return [startOfWeek, endOfWeek];
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
        key: 'projectOrder',
        label: 'Project Order',
        config: {
          isProfile: true
        }
      });
      this.totalDays.forEach((item, index) => {
        let object = {
          key: moment__WEBPACK_IMPORTED_MODULE_0__(item).format("dd D MMM"),
          label: moment__WEBPACK_IMPORTED_MODULE_0__(item).format("dd D MMM"),
          config: {
            isTime: true
          }
        };
        this.weeklyCols.push(object);
      });
      this.weeklyCols.push({
        key: 'weeklyTotal',
        label: 'Weekly Total',
        config: {
          isTime: true
        }
      }, {
        key: 'activity',
        label: 'Activity',
        config: {
          isPercentage: true
        }
      }, {
        key: 'spent',
        label: 'Spent',
        config: {
          isCurrency: true
        }
      });
    }

    ShowGraph() {
      if (this.showWeeklyGraph == true) {
        this.showWeeklyGraph = false;
      } else {
        this.showWeeklyGraph = true;
      }
    }

    OnSend() {
      const sendDialog = this.matDialog.open(src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__.SendReportModelComponent, {
        width: '675px'
      });
    }

    OnSchedule() {
      const scheduleDialog = this.matDialog.open(src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__.ScheduleReportModelComponent, {
        width: '675px'
      });
    }

    OnFilter() {
      let reportData = {
        reportName: 'Weekly',
        filterInput: {
          projects: true
        },
        currentTab: this.currentTab
      };
      const filterDialog = this.matDialog.open(src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__.ReportFilterComponent, {
        width: '675px',
        data: reportData
      });
    }

    OnTabClick(type) {
      this.currentTab = type;
    }

  }

  WeeklyComponent.ɵfac = function WeeklyComponent_Factory(t) {
    return new (t || WeeklyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog));
  };

  WeeklyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: WeeklyComponent,
    selectors: [["app-weekly"]],
    decls: 93,
    vars: 9,
    consts: [[1, "white_box", "dashboars_title", "main_content"], [1, "top_title_wrap"], [1, "row", "align-items-center", "mb-4"], [1, "col-md-6"], [1, "setting_title", 3, "routerLink"], ["src", "../../../../assets/images/icon/back-arrow-blue.svg", "alt", ""], [1, "mb-0"], [1, "text-end"], ["routerLink", "/reports/scheduled-reports", 1, "text_dark_gradient", "btn_dark_text"], [1, "fa", "fa-clock"], [1, "row", "align-items-center", "mb-5"], [1, "nav", "nav-tabs", "tab_design_one"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#me", 1, "nav-link", 3, "click"], ["data-bs-toggle", "tab", "href", "#all", 1, "nav-link", "active", 3, "click"], [1, "col-md-6", "text-end"], [3, "formGroup"], [1, "row", "justify-content-end"], [1, "col-md-8"], [1, "row"], ["type", "weekly", 3, "formControlFromDateNameValue", "formControlSelectedDateValue"], [1, "col-md-4"], ["type", "submit", 1, "btn_blue", 3, "click"], [1, "activity_top_wrap", "mb-5"], [1, "activity_left_text"], [1, "text_green_gradient"], [3, "ngClass", "click"], [1, "fa-solid", "fa-chart-column"], ["class", "mt-3", 4, "ngIf"], [1, "white_box-2"], [1, "row", "mb-2"], [1, "d-flex", "align-items-baseline"], [1, "me-2"], [1, "activity_table_menu_wrap"], [1, "left_links"], [1, "text_gradient", "cursor-pointer", 3, "click"], ["src", "../../../../assets/images/icon/send.svg", "alt", ""], ["src", "../../../../assets/images/icon/schedule.svg", "alt", ""], [1, "dropdown"], ["data-toggle", "dropdown", "type", "button", "id", "settingMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "text_gradient", "cursor-pointer"], ["src", "../../../../assets/images/icon/export.svg", "alt", ""], ["aria-labelledby", "settingMenuButton", 1, "dropdown-menu"], [1, "dropdown-item"], [3, "tableColsDetails", "tableDataArray"], [1, "mt-3"], ["baseChart", "", "height", "70", "type", "bar", 3, "datasets", "labels", "options", "legend"]],
    template: function WeeklyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Weekly Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 3)(10, "div", 7)(11, "a", 8)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " Scheduled Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 10)(16, "div", 3)(17, "ul", 11)(18, "li", 12)(19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WeeklyComponent_Template_a_click_19_listener() {
          return ctx.OnTabClick("me");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "li", 12)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WeeklyComponent_Template_a_click_22_listener() {
          return ctx.OnTabClick("all");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 15)(25, "form", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "div", 18)(30, "app-date-time-range-picker", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("formControlSelectedDateValue", function WeeklyComponent_Template_app_date_time_range_picker_formControlSelectedDateValue_30_listener($event) {
          return ctx.SelectedDateEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 21)(32, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WeeklyComponent_Template_button_click_32_listener() {
          return ctx.OnFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 23)(35, "div", 24)(36, "ul")(37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Member Worked ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Break Time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Avg. Hours Per Member ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "26:13");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "Avg. Activity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, "14%");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "Spent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WeeklyComponent_Template_button_click_57_listener() {
          return ctx.ShowGraph();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](58, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, WeeklyComponent_div_59_Template, 5, 4, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 29)(61, "div", 30)(62, "div", 3)(63, "div", 31)(64, "h3", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, "Asia - Kolkata");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 3)(69, "div", 33)(70, "ul", 34)(71, "li")(72, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WeeklyComponent_Template_a_click_72_listener() {
          return ctx.OnSend();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](73, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74, " Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "li")(76, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WeeklyComponent_Template_a_click_76_listener() {
          return ctx.OnSchedule();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](77, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78, " Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "li")(80, "div", 38)(81, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](82, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "ul", 41)(85, "li")(86, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87, "To CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "li")(89, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90, "To PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](92, "TrackerX-dynamic-table", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControlFromDateNameValue", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.showWeeklyGraph == true ? "activity_filter_btn" : "activity_filter_btn_active");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showWeeklyGraph);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx.organizationDetails["organization_Name"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tableColsDetails", ctx.weeklyCols)("tableDataArray", ctx.weeklyTableValue);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _shared_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_5__.DynamicTableComponent, _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_6__.DateTimeRangePickerComponent, ng2_charts__WEBPACK_IMPORTED_MODULE_12__.BaseChartDirective]
  });
  return WeeklyComponent;
})();

/***/ }),

/***/ 82255:
/*!********************************************************************!*\
  !*** ./src/app/pages/reports/work-breaks/work-breaks.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkBreaksComponent": () => (/* binding */ WorkBreaksComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 24006);
/* harmony import */ var src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/model/table-header-data/reports */ 46156);
/* harmony import */ var src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pop-up-model/report-filter/report-filter.component */ 32272);
/* harmony import */ var src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pop-up-model/schedule-report-model/schedule-report-model.component */ 450);
/* harmony import */ var src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pop-up-model/send-report-model/send-report-model.component */ 28096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 94650);
/* harmony import */ var src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/master.service */ 79384);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 65938);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 34793);
/* harmony import */ var _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/date-time-range-picker/date-time-range-picker.component */ 96991);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 59549);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 84385);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 47873);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 35593);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ 41765);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 10805);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ 56709);




















const _c0 = function (a0) {
  return {
    "checkBoxDisable": a0
  };
};

function WorkBreaksComponent_li_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 53)(1, "a", 42)(2, "mat-checkbox", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function WorkBreaksComponent_li_80_Template_mat_checkbox_change_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const col_r4 = restoredCtx.$implicit;
      const i_r5 = restoredCtx.index;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.OnColumnToggle(col_r4, i_r5, $event.checked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c0, col_r4["disable"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", col_r4.disable)("checked", col_r4.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", col_r4.label, " ");
  }
}

function WorkBreaksComponent_ng_template_84_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", col_r10.label, " ");
  }
}

function WorkBreaksComponent_ng_template_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, WorkBreaksComponent_ng_template_84_th_1_Template, 2, 1, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", columns_r8);
  }
}

function WorkBreaksComponent_ng_template_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 56)(1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const rowData_r11 = ctx.$implicit;
    const expanded_r13 = ctx.expanded;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pRowToggler", rowData_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", expanded_r13 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rowData_r11[ctx_r2.groupBy]);
  }
}

function WorkBreaksComponent_ng_template_86_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r17 = ctx.$implicit;
    const rowData_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", rowData_r14[col_r17.key], " ");
  }
}

function WorkBreaksComponent_ng_template_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, WorkBreaksComponent_ng_template_86_td_1_Template, 2, 1, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const columns_r15 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", columns_r15);
  }
}

const _c1 = function () {
  return ["/reports/all-reports"];
};

let WorkBreaksComponent = /*#__PURE__*/(() => {
  class WorkBreaksComponent {
    constructor(masterService, formBuilder, matDialog) {
      this.masterService = masterService;
      this.formBuilder = formBuilder;
      this.matDialog = matDialog;
      this.groupBy = 'date';
      this.organizationDetails = {};
      this.workBreaksArray = [{
        policy: 'test',
        date: 'Mon, Sep 12, 2022',
        member: 'Harsh',
        status: 'Ended on time',
        started: '1:00 am',
        ended: '2:00 am',
        allotted_hrs: '1:00',
        actual_hrs: '1:00',
        paid_hrs: '1:00'
      }];
      this.cols = [];
      this.workBreaksTableCols = src_app_core_model_table_header_data_reports__WEBPACK_IMPORTED_MODULE_0__.workBreaksTable;
      this.workBreaksTableShowCols = [];
      this.currentTab = 'all';
    }

    ngOnInit() {
      this.organizationDetails = this.masterService.GetLoginOrg();
      this.cols = JSON.parse(JSON.stringify(this.workBreaksTableCols)); // this.workBreaksTableCols.forEach((element) => {
      //   if (element.selected) {
      //     this.workBreaksTableShowCols.push(element);
      //   }
      // })

      this.filterForm = this.formBuilder.group({
        fromDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        toDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
      });
      this.changeGroupby();
    }

    OnColumnToggle(col, indexElement, event) {
      this.workBreaksTableCols.forEach(element => {
        if (element.key == col.key) {
          element.selected = event;
        }
      });
      this.changeGroupby(); // this.workBreaksTableShowCols = this.masterService.OnColumnToggle(col, indexElement, event, this.workBreaksTableCols, this.workBreaksTableShowCols, 0);
    }

    changeGroupby() {
      // this.timeOffTransactionTableCols = [];
      // timeOffTransactionTable.forEach((element) => {
      //   if (this.groupBy != element.key) {
      //     this.timeOffTransactionTableCols.push(element);
      //   }
      // })
      // let Array = [];
      this.workBreaksTableShowCols = [];
      this.workBreaksTableCols.forEach(element => {
        if (element.selected) {
          if (this.groupBy != element.key) {
            this.workBreaksTableShowCols.push(element);
          }
        }
      }); // this.timeActivityShowCols = Array;
    }

    SelectedDateEvent(event) {
      const fromDate = event.fromDate;
      const toDate = event.toDate;

      if (fromDate && toDate) {
        this.filterForm.patchValue({
          fromDate: new Date(fromDate),
          toDate: new Date(toDate)
        });
      }
    }

    OnTabClick(type) {
      this.currentTab = type;
    }

    OnSend() {
      const sendDialog = this.matDialog.open(src_app_shared_pop_up_model_send_report_model_send_report_model_component__WEBPACK_IMPORTED_MODULE_3__.SendReportModelComponent, {
        width: '675px'
      });
    }

    OnSchedule() {
      const scheduleDialog = this.matDialog.open(src_app_shared_pop_up_model_schedule_report_model_schedule_report_model_component__WEBPACK_IMPORTED_MODULE_2__.ScheduleReportModelComponent, {
        width: '675px'
      });
    }

    OnFilter() {
      let reportData = {
        reportName: 'Work breaks',
        filterInput: {
          policy: true,
          patd: true,
          workBreakStatus: true,
          include_archived_project: true,
          sum_date_ranges: true
        },
        currentTab: this.currentTab
      };
      const filterDialog = this.matDialog.open(src_app_shared_pop_up_model_report_filter_report_filter_component__WEBPACK_IMPORTED_MODULE_1__.ReportFilterComponent, {
        width: '675px',
        data: reportData
      });
    }

  }

  WorkBreaksComponent.ɵfac = function WorkBreaksComponent_Factory(t) {
    return new (t || WorkBreaksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_master_service__WEBPACK_IMPORTED_MODULE_4__.MasterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog));
  };

  WorkBreaksComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: WorkBreaksComponent,
    selectors: [["app-work-breaks"]],
    decls: 87,
    vars: 13,
    consts: [[1, "white_box", "dashboars_title", "main_content"], [1, ""], [1, "row", "align-items-center", "mb-4"], [1, "col-md-6"], [1, "setting_title", 3, "routerLink"], ["src", "../../../../assets/images/icon/back-arrow-blue.svg", "alt", ""], [1, "mb-0"], [1, "text-end"], ["href", "/reports/scheduled-reports", 1, "text_dark_gradient", "btn_dark_text"], [1, "fa", "fa-clock"], [1, "row", "align-items-center", "mb-5"], [1, "nav", "nav-tabs", "tab_design_one"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#me", 1, "nav-link", 3, "click"], ["data-bs-toggle", "tab", "href", "#all", 1, "nav-link", "active", 3, "click"], [1, "col-md-6", "text-end"], [3, "formGroup"], [1, "row", "justify-content-end"], [1, "col-md-8"], [1, "row"], [3, "formControlFromDateNameValue", "formControlSelectedDateValue"], [1, "col-md-4"], ["type", "submit", 1, "btn_blue", 3, "click"], [1, "d-flex", "align-items-baseline"], [1, "me-2"], [1, "col-md-3"], ["for", "groupBy"], ["appearance", "fill"], ["name", "groupBy", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "date"], ["value", "member"], ["value", "policy"], [1, "col-md-9", "text-end"], [1, "activity_table_menu_wrap"], [1, "left_links"], [1, "text_gradient", "cursor-pointer", 3, "click"], ["src", "../../../../assets/images/icon/send.svg", "alt", ""], ["src", "../../../../assets/images/icon/schedule.svg", "alt", ""], [1, "dropdown"], ["data-toggle", "dropdown", "type", "button", "id", "settingMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "text_gradient", "cursor-pointer"], ["src", "../../../../assets/images/icon/export.svg", "alt", ""], ["aria-labelledby", "settingMenuButton", 1, "dropdown-menu"], [1, "dropdown-item"], [1, "d-flex"], ["data-toggle", "dropdown", "type", "button", "id", "filterMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn_round_gray", "me-3"], [1, "fa-solid", "fa-filter"], ["aria-labelledby", "dropdownMenuButton1", 1, "dropdown-menu"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "row", "mb-5"], ["sortMode", "single", "rowGroupMode", "subheader", "responsiveLayout", "none", 3, "value", "sortField", "dataKey", "responsive", "groupRowsBy", "columns"], ["pTemplate", "header"], ["pTemplate", "groupheader"], ["pTemplate", "rowexpansion"], [3, "ngClass"], [3, "disabled", "checked", "change"], [4, "ngFor", "ngForOf"], ["pRipple", "", 3, "pRowToggler"], ["colspan", "2", 2, "text-align", "left !important"], ["type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "p-button-plain", "p-mr-2", 3, "icon"], [1, "p-text-bold", "p-ml-2"], ["colspan", "15"]],
    template: function WorkBreaksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Work Break Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 3)(10, "div", 7)(11, "a", 8)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Scheduled Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 10)(16, "div", 3)(17, "ul", 11)(18, "li", 12)(19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WorkBreaksComponent_Template_a_click_19_listener() {
          return ctx.OnTabClick("me");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "li", 12)(22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WorkBreaksComponent_Template_a_click_22_listener() {
          return ctx.OnTabClick("all");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 15)(25, "form", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "div", 18)(30, "app-date-time-range-picker", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("formControlSelectedDateValue", function WorkBreaksComponent_Template_app_date_time_range_picker_formControlSelectedDateValue_30_listener($event) {
          return ctx.SelectedDateEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 21)(32, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WorkBreaksComponent_Template_button_click_32_listener() {
          return ctx.OnFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 23)(35, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Asia - Kolkata");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 10)(40, "div", 25)(41, "div")(42, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Group By:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "mat-form-field", 27)(45, "mat-select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function WorkBreaksComponent_Template_mat_select_ngModelChange_45_listener($event) {
          return ctx.groupBy = $event;
        })("selectionChange", function WorkBreaksComponent_Template_mat_select_selectionChange_45_listener() {
          return ctx.changeGroupby();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "mat-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "mat-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 32)(53, "div", 33)(54, "ul", 34)(55, "li")(56, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WorkBreaksComponent_Template_a_click_56_listener() {
          return ctx.OnSend();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](57, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, " Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "li")(60, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WorkBreaksComponent_Template_a_click_60_listener() {
          return ctx.OnSchedule();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](61, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "li")(64, "div", 38)(65, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](66, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "ul", 41)(69, "li")(70, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "To CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "li")(73, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "To PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div", 43)(76, "div", 38)(77, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](78, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "ul", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](80, WorkBreaksComponent_li_80_Template, 4, 6, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "div", 48)(82, "div")(83, "p-table", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](84, WorkBreaksComponent_ng_template_84_Template, 2, 1, "ng-template", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](85, WorkBreaksComponent_ng_template_85_Template, 7, 3, "ng-template", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](86, WorkBreaksComponent_ng_template_86_Template, 2, 1, "ng-template", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](12, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlFromDateNameValue", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.organizationDetails["organization_Name"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.groupBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.cols);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.workBreaksArray)("sortField", ctx.groupBy)("dataKey", ctx.groupBy)("responsive", false)("groupRowsBy", ctx.groupBy)("columns", ctx.workBreaksTableShowCols);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _shared_date_time_range_picker_date_time_range_picker_component__WEBPACK_IMPORTED_MODULE_5__.DateTimeRangePickerComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_15__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_16__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_15__.RowToggler, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckbox]
  });
  return WorkBreaksComponent;
})();

/***/ })

}]);