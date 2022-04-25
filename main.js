"use strict";
(self["webpackChunksevabharti_project"] = self["webpackChunksevabharti_project"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _component_about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/about/about.component */ 7782);
/* harmony import */ var _component_adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/adminlogin/adminlogin.component */ 1977);
/* harmony import */ var _component_adminpanel_adminpanel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/adminpanel/adminpanel.component */ 2731);
/* harmony import */ var _component_benfrequest_benfrequest_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/benfrequest/benfrequest.component */ 8891);
/* harmony import */ var _component_benfrequestlist_benfrequestlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/benfrequestlist/benfrequestlist.component */ 6805);
/* harmony import */ var _component_benfsignup_benfsignup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/benfsignup/benfsignup.component */ 3314);
/* harmony import */ var _component_bloodbanklist_bloodbanklist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/bloodbanklist/bloodbanklist.component */ 2194);
/* harmony import */ var _component_bloodbankpanel_bloodbankpanel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/bloodbankpanel/bloodbankpanel.component */ 6684);
/* harmony import */ var _component_bloodbanks_bloodbanks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/bloodbanks/bloodbanks.component */ 1662);
/* harmony import */ var _component_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/contact/contact.component */ 5789);
/* harmony import */ var _component_donorlist_donorlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/donorlist/donorlist.component */ 8633);
/* harmony import */ var _component_enquirylist_enquirylist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/enquirylist/enquirylist.component */ 30);
/* harmony import */ var _component_feedbacklist_feedbacklist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/feedbacklist/feedbacklist.component */ 1829);
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/home/home.component */ 8837);
/* harmony import */ var _component_mobilevalidation_mobilevalidation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/mobilevalidation/mobilevalidation.component */ 8202);
/* harmony import */ var _component_otpvalidation_otpvalidation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/otpvalidation/otpvalidation.component */ 4456);
/* harmony import */ var _component_otpvalidation1_otpvalidation1_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/otpvalidation1/otpvalidation1.component */ 965);
/* harmony import */ var _component_otpverification_otpverification_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/otpverification/otpverification.component */ 5085);
/* harmony import */ var _component_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/signup/signup.component */ 686);
/* harmony import */ var _component_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/userlist/userlist.component */ 4670);
/* harmony import */ var _component_userlogin_userlogin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/userlogin/userlogin.component */ 8678);
/* harmony import */ var _component_userpanel_userpanel_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/userpanel/userpanel.component */ 5636);
/* harmony import */ var _component_uservalidation_uservalidation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/uservalidation/uservalidation.component */ 4909);
/* harmony import */ var _component_uservalidation1_uservalidation1_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/uservalidation1/uservalidation1.component */ 1779);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 3184);



























const routes = [
    { path: 'home', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_13__.HomeComponent },
    { path: 'about', component: _component_about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent },
    { path: 'contact', component: _component_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__.ContactComponent },
    { path: 'bloodbanks', component: _component_bloodbanks_bloodbanks_component__WEBPACK_IMPORTED_MODULE_8__.BloodbanksComponent },
    { path: 'bloodbankpanel', component: _component_bloodbankpanel_bloodbankpanel_component__WEBPACK_IMPORTED_MODULE_7__.BloodbankpanelComponent },
    { path: 'userlogin', component: _component_userlogin_userlogin_component__WEBPACK_IMPORTED_MODULE_20__.UserloginComponent },
    { path: 'adminlogin', component: _component_adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_1__.AdminloginComponent },
    {
        path: 'adminpanel', component: _component_adminpanel_adminpanel_component__WEBPACK_IMPORTED_MODULE_2__.AdminpanelComponent,
        children: [
            { path: 'donorlist', component: _component_donorlist_donorlist_component__WEBPACK_IMPORTED_MODULE_10__.DonorlistComponent },
            { path: 'benfrequestlist', component: _component_benfrequestlist_benfrequestlist_component__WEBPACK_IMPORTED_MODULE_4__.BenfrequestlistComponent },
            { path: 'bloodbanklist', component: _component_bloodbanklist_bloodbanklist_component__WEBPACK_IMPORTED_MODULE_6__.BloodbanklistComponent },
            { path: 'feedbacklist', component: _component_feedbacklist_feedbacklist_component__WEBPACK_IMPORTED_MODULE_12__.FeedbacklistComponent },
            { path: 'enquirylist', component: _component_enquirylist_enquirylist_component__WEBPACK_IMPORTED_MODULE_11__.EnquirylistComponent },
            { path: 'userlist', component: _component_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_19__.UserlistComponent }
        ]
    },
    { path: 'mobilevalidation', component: _component_mobilevalidation_mobilevalidation_component__WEBPACK_IMPORTED_MODULE_14__.MobilevalidationComponent },
    { path: 'otpverification', component: _component_otpverification_otpverification_component__WEBPACK_IMPORTED_MODULE_17__.OtpverificationComponent },
    { path: 'uservalidation', component: _component_uservalidation_uservalidation_component__WEBPACK_IMPORTED_MODULE_22__.UservalidationComponent },
    { path: 'uservalidation1', component: _component_uservalidation1_uservalidation1_component__WEBPACK_IMPORTED_MODULE_23__.Uservalidation1Component },
    { path: 'otpvalidation', component: _component_otpvalidation_otpvalidation_component__WEBPACK_IMPORTED_MODULE_15__.OtpvalidationComponent },
    { path: 'otpvalidation1', component: _component_otpvalidation1_otpvalidation1_component__WEBPACK_IMPORTED_MODULE_16__.Otpvalidation1Component },
    { path: 'benfsignup', component: _component_benfsignup_benfsignup_component__WEBPACK_IMPORTED_MODULE_5__.BenfsignupComponent },
    { path: 'signup', component: _component_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__.SignupComponent },
    {
        path: 'userpanel', component: _component_userpanel_userpanel_component__WEBPACK_IMPORTED_MODULE_21__.UserpanelComponent,
        children: [
            { path: 'benfrequest', component: _component_benfrequest_benfrequest_component__WEBPACK_IMPORTED_MODULE_3__.BenfrequestComponent },
        ]
    },
    {
        path: 'userlogin', component: _component_userlogin_userlogin_component__WEBPACK_IMPORTED_MODULE_20__.UserloginComponent,
        children: [
            { path: 'signup', component: _component_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__.SignupComponent }
        ]
    },
    { path: '', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_13__.HomeComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AppComponent {
    constructor() {
        this.title = 'sevabharti_project';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 25, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "static-top", "p-2"], [1, "container"], ["routerLink", "/home", "href", "#", 1, "navbar-brand"], ["src", "../assets/sparity.png", "alt", "...", "height", "36", "width", "150"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto"], [1, "nav-item"], ["aria-current", "page", "routerLink", "/home", 1, "nav-link", "active"], ["routerLink", "/about", 1, "nav-link"], ["routerLink", "/contact", 1, "nav-link"], ["routerLink", "/mobilevalidation", 1, "nav-link"], ["routerLink", "/adminlogin", 1, "nav-link"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body")(1, "nav", 0)(2, "div", 1)(3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "ul", 7)(9, "li", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8)(13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8)(16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 8)(19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 8)(22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "AdminLogin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/home/home.component */ 8837);
/* harmony import */ var _component_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/about/about.component */ 7782);
/* harmony import */ var _component_adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/adminlogin/adminlogin.component */ 1977);
/* harmony import */ var _component_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/contact/contact.component */ 5789);
/* harmony import */ var _component_bloodbanks_bloodbanks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/bloodbanks/bloodbanks.component */ 1662);
/* harmony import */ var _component_userlogin_userlogin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/userlogin/userlogin.component */ 8678);
/* harmony import */ var _pipe_translate_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipe/translate.pipe */ 7799);
/* harmony import */ var _component_adminpanel_adminpanel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/adminpanel/adminpanel.component */ 2731);
/* harmony import */ var _component_donorlist_donorlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/donorlist/donorlist.component */ 8633);
/* harmony import */ var _component_benfrequest_benfrequest_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/benfrequest/benfrequest.component */ 8891);
/* harmony import */ var _component_benfrequestlist_benfrequestlist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/benfrequestlist/benfrequestlist.component */ 6805);
/* harmony import */ var _component_benfsignup_benfsignup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/benfsignup/benfsignup.component */ 3314);
/* harmony import */ var _component_bloodbanklist_bloodbanklist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/bloodbanklist/bloodbanklist.component */ 2194);
/* harmony import */ var _component_bloodbankpanel_bloodbankpanel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/bloodbankpanel/bloodbankpanel.component */ 6684);
/* harmony import */ var _component_bloodbanksignup_bloodbanksignup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/bloodbanksignup/bloodbanksignup.component */ 7834);
/* harmony import */ var _component_def_def_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/def/def.component */ 7561);
/* harmony import */ var _component_default_default_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/default/default.component */ 3511);
/* harmony import */ var _component_enquirylist_enquirylist_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/enquirylist/enquirylist.component */ 30);
/* harmony import */ var _component_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/feedback/feedback.component */ 7197);
/* harmony import */ var _component_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/mainpage/mainpage.component */ 1697);
/* harmony import */ var _component_mobilevalidation_mobilevalidation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/mobilevalidation/mobilevalidation.component */ 8202);
/* harmony import */ var _component_otpvalidation_otpvalidation_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/otpvalidation/otpvalidation.component */ 4456);
/* harmony import */ var _component_otpvalidation1_otpvalidation1_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./component/otpvalidation1/otpvalidation1.component */ 965);
/* harmony import */ var _component_otpverification_otpverification_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./component/otpverification/otpverification.component */ 5085);
/* harmony import */ var _component_signup_signup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./component/signup/signup.component */ 686);
/* harmony import */ var _component_userpanel_userpanel_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./component/userpanel/userpanel.component */ 5636);
/* harmony import */ var _component_uservalidation_uservalidation_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./component/uservalidation/uservalidation.component */ 4909);
/* harmony import */ var _component_uservalidation1_uservalidation1_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./component/uservalidation1/uservalidation1.component */ 1779);
/* harmony import */ var _component_feedbacklist_feedbacklist_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./component/feedbacklist/feedbacklist.component */ 1829);
/* harmony import */ var _component_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./component/userlist/userlist.component */ 4670);
/* harmony import */ var _component_order_order_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./component/order/order.component */ 2732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/core */ 3184);







































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_35__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_36__.FormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_37__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_36__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _component_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        _component_about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent,
        _component_adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_4__.AdminloginComponent,
        _component_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__.ContactComponent,
        _component_bloodbanks_bloodbanks_component__WEBPACK_IMPORTED_MODULE_6__.BloodbanksComponent,
        _component_userlogin_userlogin_component__WEBPACK_IMPORTED_MODULE_7__.UserloginComponent,
        _pipe_translate_pipe__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe,
        _component_adminpanel_adminpanel_component__WEBPACK_IMPORTED_MODULE_9__.AdminpanelComponent,
        _component_donorlist_donorlist_component__WEBPACK_IMPORTED_MODULE_10__.DonorlistComponent,
        _component_benfrequest_benfrequest_component__WEBPACK_IMPORTED_MODULE_11__.BenfrequestComponent,
        _component_benfrequestlist_benfrequestlist_component__WEBPACK_IMPORTED_MODULE_12__.BenfrequestlistComponent,
        _component_benfsignup_benfsignup_component__WEBPACK_IMPORTED_MODULE_13__.BenfsignupComponent,
        _component_bloodbanklist_bloodbanklist_component__WEBPACK_IMPORTED_MODULE_14__.BloodbanklistComponent,
        _component_bloodbankpanel_bloodbankpanel_component__WEBPACK_IMPORTED_MODULE_15__.BloodbankpanelComponent,
        _component_bloodbanksignup_bloodbanksignup_component__WEBPACK_IMPORTED_MODULE_16__.BloodbanksignupComponent,
        _component_def_def_component__WEBPACK_IMPORTED_MODULE_17__.DefComponent,
        _component_default_default_component__WEBPACK_IMPORTED_MODULE_18__.DefaultComponent,
        _component_enquirylist_enquirylist_component__WEBPACK_IMPORTED_MODULE_19__.EnquirylistComponent,
        _component_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_20__.FeedbackComponent,
        _component_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_21__.MainpageComponent,
        _component_mobilevalidation_mobilevalidation_component__WEBPACK_IMPORTED_MODULE_22__.MobilevalidationComponent,
        _component_otpvalidation_otpvalidation_component__WEBPACK_IMPORTED_MODULE_23__.OtpvalidationComponent,
        _component_otpvalidation1_otpvalidation1_component__WEBPACK_IMPORTED_MODULE_24__.Otpvalidation1Component,
        _component_otpverification_otpverification_component__WEBPACK_IMPORTED_MODULE_25__.OtpverificationComponent,
        _component_signup_signup_component__WEBPACK_IMPORTED_MODULE_26__.SignupComponent,
        _component_userpanel_userpanel_component__WEBPACK_IMPORTED_MODULE_27__.UserpanelComponent,
        _component_uservalidation_uservalidation_component__WEBPACK_IMPORTED_MODULE_28__.UservalidationComponent,
        _component_uservalidation1_uservalidation1_component__WEBPACK_IMPORTED_MODULE_29__.Uservalidation1Component,
        _component_feedbacklist_feedbacklist_component__WEBPACK_IMPORTED_MODULE_30__.FeedbacklistComponent,
        _component_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_31__.UserlistComponent,
        _component_order_order_component__WEBPACK_IMPORTED_MODULE_32__.OrderComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_35__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_36__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_37__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_36__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 7782:
/*!****************************************************!*\
  !*** ./src/app/component/about/about.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 175, vars: 0, consts: [[1, "image-aboutus-banner", 2, "margin-top", "70px"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "lg-text"], [1, "image-aboutus-para"], [1, "bread-bar", 2, "background", "white"], [1, "col-md-8", "col-sm-6", "col-xs-8"], [1, "breadcrumb"], ["href", "index.html"], [1, "active"], [1, "col-md-4", "col-sm-6", "col-xs-4"], [1, "aboutus-secktion", "paddingTB60"], [1, "col-md-6"], [1, "strong"], [1, "lead"], [1, "container", "team-sektion", "paddingTB60"], [1, "site-heading", "text-center"], [1, "border"], [1, "col-md-4", "team-box"], [1, "team-img", "thumbnail"], ["src", "../../../assets//blood13.jpeg", 2, "width", "346px"], [1, "team-content"], [1, "border-team"], [1, "social-icons"], ["href", "https://www.facebook.com/"], ["id", "social-fb", 1, "fa", "fa-facebook-square", "fa-3x", "social"], ["href", "https://twitter.com/"], ["id", "social-tw", 1, "fa", "fa-twitter-square", "fa-3x", "social"], ["href", "https://plus.google.com/"], ["id", "social-gp", 1, "fa", "fa-google-plus-square", "fa-3x", "social"], ["href", "mailto:bootsnipp@gmail.com"], ["id", "social-em", 1, "fa", "fa-envelope-square", "fa-3x", "social"], ["src", "../../../assets//blood12.jpeg", 2, "width", "346px"], ["src", "../../../assets//blood11.jpeg", 2, "width", "346px"], [1, "cta-sektion", "cta-padding35"], [1, "col-md-9", "col-sm-9", "col-xs-12"], [1, "glyphicon", "glyphicon-cog"], [1, "col-md-3", "col-sm-3", "col-xs-12", "Tpadding10"], ["type", "button", 1, "btn", "btn-primary", "site-btn"], [1, "page-footer", "font-small", "danger-color", "pt-4"], [1, "container-fluid", "text-center", "text-md-left"], [1, "col-md-6", "mt-md-0", "mt-3"], [1, "text-uppercase"], [1, "clearfix", "w-100", "d-md-none", "pb-3"], [1, "col-md-3", "mb-md-0", "mb-3"], [1, "list-unstyled"], ["href", "www.Sparity.com"], [1, "fas", "fa-envelope-open", "mr-3"], ["href", "#!"], [1, "fas", "fa-location-arrow", "mr-3"], [1, "fas", "fa-tty", "mr-3"], [1, "col-md-12", "py-5"], [1, "mb-5", "flex-center"], [1, "fb-ic"], [1, "fab", "fa-facebook-f", "fa-lg", "white-text", "mr-md-5", "mr-3", "fa-2x"], [1, "tw-ic"], [1, "fab", "fa-twitter", "fa-lg", "white-text", "mr-md-5", "mr-3", "fa-2x"], [1, "gplus-ic"], [1, "fab", "fa-google-plus-g", "fa-lg", "white-text", "mr-md-5", "mr-3", "fa-2x"], [1, "li-ic"], [1, "fab", "fa-linkedin-in", "fa-lg", "white-text", "mr-md-5", "mr-3", "fa-2x"], [1, "ins-ic"], [1, "fab", "fa-instagram", "fa-lg", "white-text", "mr-md-5", "mr-3", "fa-2x"], [1, "pin-ic"], [1, "fab", "fa-pinterest", "fa-lg", "white-text", "fa-2x"], [1, "footer-copyright", "text-center", "py-3"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "div", 1)(10, "div", 2)(11, "div", 7)(12, "ol", 8)(13, "li")(14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12)(20, "div", 1)(21, "div", 2)(22, "div", 13)(23, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Who we are and");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "what we do");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "This is the world's leading portal for");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "easy and quick ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13)(32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam. Lorem ipsum dolor sit amet. Nulla convallis egestas rhoncus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16)(37, "div", 2)(38, "div", 17)(39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Our Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " ut labore et dolore magna aliqua. Ut enim ad minim ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 2)(47, "div", 19)(48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22)(51, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Philip Freeman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 24)(57, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 19)(66, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 22)(69, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Philip Freeman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 24)(75, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 19)(84, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 22)(87, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Philip Freeman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 24)(93, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 35)(102, "div", 1)(103, "div", 2)(104, "div", 36)(105, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Homes for sale?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Explore properties like a pro. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 38)(111, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Start Right Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "footer", 40)(114, "div", 41)(115, "div", 2)(116, "div", 42)(117, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Lets make all Bonded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Bonded is a web based blood Donation platform which connects thousands of blood donors in three simple steps. Bonded ensures hassle free blood donation and privacy of a blood donor. A blood donor can select any specific date and location to donate blood and find a suitable person who needs blood. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "hr", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 45)(123, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "ul", 46)(126, "li")(127, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "www.Sparity.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li")(131, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "MADHAPUR,500081");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li")(135, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "+91-6372438128");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 45)(139, "h5", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Support Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "ul", 46)(142, "li")(143, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Link 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li")(146, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Link 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li")(149, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Link 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li")(152, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Credits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 1)(155, "div", 2)(156, "div", 52)(157, "div", 53)(158, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "\u00A9 2019 Copyright: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " Bonded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " All Rights Reserved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: [".cta-padding35[_ngcontent-%COMP%] {\r\n    padding: 35px 0 35px;\r\n    background-color: #b40028;\r\n    color:#fff;\r\n}\r\n\r\n.site-btn[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    padding: 13px 30px;\r\n    border-radius: 5px;\r\n    border: 1px solid #b40028 ;\r\n    min-width: 200px;\r\n    display: inline-block;\r\n    text-align: center;\r\n    position: relative;\r\n    z-index: 1;\r\n    color: #b40028 ;\r\n    background-color:transparent;\r\n    transition: all .25s ease-in-out;\r\n    margin: 10px 0px 10px 0px;\r\n    \r\n}\r\n.site-btn[_ngcontent-%COMP%]:hover {\r\n    background: #b40028 ;\r\n    border: 1px solid #fff;\r\n    font-weight:700px;\r\n    \r\n    \r\n}\r\n.team-content[_ngcontent-%COMP%] {\r\n    padding: 0px 15px 15px 15px;\r\n}\r\n.border-team[_ngcontent-%COMP%] {\r\n    border-bottom:1px solid #e2e2e2;\r\n    margin-bottom:10px;\r\n}\r\n.team-img[_ngcontent-%COMP%]:hover {\r\n    background:#f5f5f5;\r\n    \r\n}\r\n\r\n.social-icons[_ngcontent-%COMP%]{\r\n    \r\n    margin: 0;\r\n    padding: 0;\r\n    font-size : 10px;\r\n}\r\n.social[_ngcontent-%COMP%] {\r\n    margin:7px 7px 7px 0px;\r\n    color:#232323;\r\n}\r\n#social-fb[_ngcontent-%COMP%]:hover {\r\n     color: #3B5998;\r\n     transition:all .25s;\r\n }\r\n#social-tw[_ngcontent-%COMP%]:hover {\r\n     color: #4099FF;\r\n     transition:all .25s;\r\n }\r\n#social-gp[_ngcontent-%COMP%]:hover {\r\n     color: #d34836;\r\n     transition:all .25s;\r\n }\r\n#social-em[_ngcontent-%COMP%]:hover {\r\n     color: #f39c12;\r\n     transition:all .25s;\r\n }\r\n\r\n.site-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-size : 40px;\r\n    margin-bottom: 15px;\r\n    font-weight: 600;\r\n}\r\n.border[_ngcontent-%COMP%] {\r\n    background: #e1e1e1;\r\n    height: 1px;\r\n    width: 25%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 45px;\r\n}\r\n.paddingTB60[_ngcontent-%COMP%] {\r\n    padding-top:60px;\r\n    padding-bottom:60px;\r\n}\r\n.image-aboutus-banner[_ngcontent-%COMP%] {\r\n    background: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(\"https://images.pexels.com/photos/673649/pexels-photo-673649.jpeg?w=940&h=650&auto=compress&cs=tinysrgb\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    color: #fff;\r\n    padding-top: 110px;\r\n    padding-bottom:110px;\r\n }\r\n.image-aboutus-sm-banner[_ngcontent-%COMP%] {\r\n    background: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(\"https://images.pexels.com/photos/631008/pexels-photo-631008.jpeg?w=940&h=650&auto=compress&cs=tinysrgb\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    color: #fff;\r\n    padding-top: 30px;\r\n    padding-bottom:30px;\r\n }\r\n.lg-text[_ngcontent-%COMP%] {\r\n    font-size:52px;\r\n    font-weight: 600;\r\n    text-transform: none;\r\n    color:#fff;\r\n}\r\n.image-aboutus-para[_ngcontent-%COMP%] {\r\n    color:#fff;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    font-family: 'Roboto';\r\n    line-height: 24px;\r\n    letter-spacing: 0.5px;\r\n    font-weight: 400;\r\n    font-style: normal;\r\n    color: #494949;\r\n    font-size: 16px;\r\n}\r\na[_ngcontent-%COMP%]:hover {\r\n    color: #465cff;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n    font-size: 35px;\r\n    line-height: 40px;\r\n    letter-spacing: 0px;\r\n    font-weight: 600;\r\n    color: #000;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    line-height: 40px;\r\n    letter-spacing: 0px;\r\n    font-weight: 600;\r\n    color: #000;\r\n}\r\nh3[_ngcontent-%COMP%] {\r\n    line-height: 26px;\r\n    font-size: 20px;\r\n    letter-spacing: 0px;\r\n    font-weight: 600;\r\n    font-style: normal;\r\n    color: #000;\r\n}\r\nh4[_ngcontent-%COMP%] { font-size: 19px; \r\n     letter-spacing: 0px; \r\n     font-weight: 600;\r\n     font-style: normal;\r\n     color: #000;\r\n}\r\np[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n    font-style: normal;\r\n    color: #494949;\r\n}\r\na[_ngcontent-%COMP%] {\r\n    color: #494949;\r\n}\r\n.capital[_ngcontent-%COMP%] {\r\n    text-transform:uppercase;\r\n}\r\ni[_ngcontent-%COMP%] {\r\n    font-style: normal;\r\n    font-size: 42px;\r\n    text-align: center;\r\n    line-height: 64px;\r\n}\r\n\r\n.bread-bar[_ngcontent-%COMP%] {\r\n    background: #f9f9f9;\r\n    box-shadow: 0 1px 2px rgba(0,0,0,.1);\r\n    min-height: 40px;\r\n    height: auto;\r\n    position: relative;\r\n    z-index: 555;\r\n}\r\n.breadcrumb[_ngcontent-%COMP%] {\r\n    background: none;\r\n    margin: 0;\r\n    font-weight: 300;\r\n    padding-left: 0;\r\n    font-size: 13px;\r\n}\r\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #999;\r\n}\r\n.breadcrumb[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%] {\r\n    color: #666;\r\n}\r\n.breadcrumb[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%]::before {\r\n    content: \"\\203A\";\r\n    color: #999;\r\n    padding: 0 8px;\r\n}\r\n.fas[_ngcontent-%COMP%]{\r\n    font-size: 20px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLFVBQVU7QUFDZDtBQUNBLFlBQVk7QUFDWjtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLHlCQUF5Qjs7QUFFN0I7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsaUJBQWlCOzs7QUFHckI7QUFLQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCOztBQUV0QjtBQUVBLGlCQUFpQjtBQUVqQjs7SUFFSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7QUFHQTtLQUNLLGNBQWM7S0FDZCxtQkFBbUI7Q0FDdkI7QUFDQTtLQUNJLGNBQWM7S0FDZCxtQkFBbUI7Q0FDdkI7QUFDQTtLQUNJLGNBQWM7S0FDZCxtQkFBbUI7Q0FDdkI7QUFDQTtLQUNJLGNBQWM7S0FDZCxtQkFBbUI7Q0FDdkI7QUFHRCxpQkFBaUI7QUFDakI7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFFRztJQUNDLDBLQUEwSztJQUMxSyw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG9CQUFvQjtDQUN2QjtBQUVDO0lBQ0UsMEtBQTBLO0lBQzFLLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUdBLGFBQWE7QUFDYjtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0MsS0FBSyxlQUFlO0tBQ2hCLG1CQUFtQjtLQUNuQixnQkFBZ0I7S0FDaEIsa0JBQWtCO0tBQ2xCLFdBQVc7QUFDaEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUdBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdGEtcGFkZGluZzM1IHtcclxuICAgIHBhZGRpbmc6IDM1cHggMCAzNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I0MDAyODtcclxuICAgIGNvbG9yOiNmZmY7XHJcbn1cclxuLyogQnV0dG9ucyAqL1xyXG4uc2l0ZS1idG4ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMTNweCAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I0MDAyOCA7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGNvbG9yOiAjYjQwMDI4IDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcclxuICAgIG1hcmdpbjogMTBweCAwcHggMTBweCAwcHg7XHJcbiAgICBcclxufVxyXG4uc2l0ZS1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2I0MDAyOCA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6NzAwcHg7XHJcbiAgICBcclxuICAgIFxyXG59XHJcbiBcclxuXHJcblxyXG5cclxuLnRlYW0tY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweCAxNXB4IDE1cHg7XHJcbn1cclxuLmJvcmRlci10ZWFtIHtcclxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNlMmUyZTI7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbn1cclxuLnRlYW0taW1nOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6I2Y1ZjVmNTtcclxuICAgIFxyXG59XHJcblxyXG4vKiBTb2NpYWwgSWNvbnMgKi9cclxuXHJcbi5zb2NpYWwtaWNvbnN7XHJcbiAgICBcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXNpemUgOiAxMHB4O1xyXG59XHJcbi5zb2NpYWwge1xyXG4gICAgbWFyZ2luOjdweCA3cHggN3B4IDBweDtcclxuICAgIGNvbG9yOiMyMzIzMjM7XHJcbn1cclxuXHJcblxyXG4jc29jaWFsLWZiOmhvdmVyIHtcclxuICAgICBjb2xvcjogIzNCNTk5ODtcclxuICAgICB0cmFuc2l0aW9uOmFsbCAuMjVzO1xyXG4gfVxyXG4gI3NvY2lhbC10dzpob3ZlciB7XHJcbiAgICAgY29sb3I6ICM0MDk5RkY7XHJcbiAgICAgdHJhbnNpdGlvbjphbGwgLjI1cztcclxuIH1cclxuICNzb2NpYWwtZ3A6aG92ZXIge1xyXG4gICAgIGNvbG9yOiAjZDM0ODM2O1xyXG4gICAgIHRyYW5zaXRpb246YWxsIC4yNXM7XHJcbiB9XHJcbiAjc29jaWFsLWVtOmhvdmVyIHtcclxuICAgICBjb2xvcjogI2YzOWMxMjtcclxuICAgICB0cmFuc2l0aW9uOmFsbCAuMjVzO1xyXG4gfVxyXG5cclxuXHJcbi8qIFNpdGUgSGVhZGluZyAqL1xyXG4uc2l0ZS1oZWFkaW5nIGgze1xyXG4gICAgZm9udC1zaXplIDogNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5ib3JkZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2UxZTFlMTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxufVxyXG5cclxuLnBhZGRpbmdUQjYwIHtcclxuICAgIHBhZGRpbmctdG9wOjYwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTo2MHB4O1xyXG59XHJcblxyXG4gICAuaW1hZ2UtYWJvdXR1cy1iYW5uZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsLjcpLCByZ2JhKDAsMCwwLC43KSksIHVybChcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzY3MzY0OS9wZXhlbHMtcGhvdG8tNjczNjQ5LmpwZWc/dz05NDAmaD02NTAmYXV0bz1jb21wcmVzcyZjcz10aW55c3JnYlwiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZy10b3A6IDExMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206MTEwcHg7XHJcbiB9XHJcbiBcclxuICAuaW1hZ2UtYWJvdXR1cy1zbS1iYW5uZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsLjcpLCByZ2JhKDAsMCwwLC43KSksIHVybChcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzYzMTAwOC9wZXhlbHMtcGhvdG8tNjMxMDA4LmpwZWc/dz05NDAmaD02NTAmYXV0bz1jb21wcmVzcyZjcz10aW55c3JnYlwiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTozMHB4O1xyXG4gfVxyXG4ubGctdGV4dCB7XHJcbiAgICBmb250LXNpemU6NTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGNvbG9yOiNmZmY7XHJcbn1cclxuLmltYWdlLWFib3V0dXMtcGFyYSB7XHJcbiAgICBjb2xvcjojZmZmO1xyXG59XHJcblxyXG5cclxuLyogZm9udCBDU1MgKi9cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzQ5NDk0OTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzQ2NWNmZjtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuaDMge1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbiBoNCB7IGZvbnQtc2l6ZTogMTlweDsgXHJcbiAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDsgXHJcbiAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjNDk0OTQ5O1xyXG59XHJcblxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogIzQ5NDk0OTtcclxufVxyXG5cclxuLmNhcGl0YWwge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG59XHJcblxyXG5cclxuaSB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNjRweDtcclxufVxyXG5cclxuLyogQnJlYWRjdW0gYmFyICovXHJcbi5icmVhZC1iYXIge1xyXG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLC4xKTtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA1NTU7XHJcbn1cclxuLmJyZWFkY3J1bWIge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLmJyZWFkY3J1bWIgYSB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxufVxyXG4uYnJlYWRjcnVtYiA+IC5hY3RpdmUge1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbn1cclxuLmJyZWFkY3J1bWIgPiBsaSArIGxpOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXDIwM0FcIjtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgcGFkZGluZzogMCA4cHg7XHJcbn1cclxuLmZhc3tcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 1977:
/*!**************************************************************!*\
  !*** ./src/app/component/adminlogin/adminlogin.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminloginComponent": () => (/* binding */ AdminloginComponent)
/* harmony export */ });
/* harmony import */ var _interfaces_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interfaces/admin */ 7744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_adminservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/adminservice.service */ 4523);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);






function AdminloginComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminloginComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AdminloginComponent {
    constructor(_adminservice, _router) {
        this._adminservice = _adminservice;
        this._router = _router;
        this.rec = new _interfaces_admin__WEBPACK_IMPORTED_MODULE_0__.Admin();
    }
    // adminlogin() {
    //   this.myForm = this.formbuild.group({
    //      name: ['', Validators.required ]
    //   });
    // }
    login(rec) {
        this._adminservice.getbyid(rec.admin_username, rec.admin_password).subscribe((res) => {
            if (res[0].admin_username == this.rec.admin_username && res[0].admin_password == this.rec.admin_password) {
                alert('You are the admin login successfully');
                this._router.navigate(['adminpanel']);
            }
            else {
                alert('You are not registered');
            }
        });
    }
    change() {
        this._router.navigate(['home']);
    }
    ngOnInit() {
    }
}
AdminloginComponent.ɵfac = function AdminloginComponent_Factory(t) { return new (t || AdminloginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_adminservice_service__WEBPACK_IMPORTED_MODULE_1__.AdminserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
AdminloginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdminloginComponent, selectors: [["app-adminlogin"]], decls: 28, vars: 4, consts: [[1, "container", "h-100", 2, "margin-top", "100px"], [1, "d-flex", "justify-content-center", "h-100"], [1, "user_card"], [1, "d-flex", "justify-content-center"], [1, "brand_logo_container"], ["src", "../../../assets/3811608.png", "alt", "Logo", 1, "brand_logo"], [1, "d-flex", "justify-content-center", "form_container"], [1, "input-group", "mb-3", 2, "margin-left", "45px"], [1, "input-group-append"], [1, "input-group-text"], [1, "fas", "fa-user"], ["type", "text", "name", "username", "value", "", "placeholder", "username", "required", "", 1, "form-control", "input_user", 3, "ngModel", "ngModelChange"], ["model1", "ngModel"], ["style", "color: red", 4, "ngIf"], [1, "input-group", "mb-2", 2, "margin-left", "45px"], [1, "fas", "fa-key"], ["type", "password", "name", "password", "value", "", "placeholder", "password", "required", "", "pattern", "[A-Za-z.\\s0-9]{10}", "minlength", "8", "maxlength", "20", 1, "form-control", "input_pass", 3, "ngModel", "ngModelChange"], ["model2", "ngModel"], [1, "d-flex", "justify-content-center", "mt-3", "login_container", 2, "margin-left", "10px"], ["type", "button", "name", "button", 1, "btn", "login_btn", 3, "click"], [2, "color", "red"]], template: function AdminloginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "form")(8, "div", 7)(9, "div", 8)(10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div")(13, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminloginComponent_Template_input_ngModelChange_13_listener($event) { return ctx.rec.admin_username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AdminloginComponent_div_15_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 14)(17, "div", 8)(18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div")(21, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminloginComponent_Template_input_ngModelChange_21_listener($event) { return ctx.rec.admin_password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, AdminloginComponent_div_23_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 18)(25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminloginComponent_Template_button_click_25_listener() { return ctx.login(ctx.rec); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "router-outlet");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.rec.admin_username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.rec.admin_password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r2.hasError("required"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: [".user_card[_ngcontent-%COMP%] {\r\n        height: 400px;\r\n        width: 350px;\r\n        margin-top: auto;\r\n        margin-bottom: auto;\r\n        background: #f39c12;\r\n        position: relative;\r\n        display: flex;\r\n        justify-content: center;\r\n        flex-direction: column;\r\n        padding: 10px;\r\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n        -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n        -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n        border-radius: 5px;\r\n\r\n    }\r\n    .brand_logo_container[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        height: 170px;\r\n        width: 170px;\r\n        top: -75px;\r\n        border-radius: 50%;\r\n        background: #60a3bc;\r\n        padding: 10px;\r\n        text-align: center;\r\n    }\r\n    .brand_logo[_ngcontent-%COMP%] {\r\n        height: 150px;\r\n        width: 150px;\r\n        border-radius: 50%;\r\n        border: 2px solid white;\r\n    }\r\n    .form_container[_ngcontent-%COMP%] {\r\n        margin-top: 100px;\r\n    }\r\n    .login_btn[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        background: #c0392b !important;\r\n        color: white !important;\r\n    }\r\n    .login_btn[_ngcontent-%COMP%]:focus {\r\n        box-shadow: none !important;\r\n        outline: 0px !important;\r\n    }\r\n    .login_container[_ngcontent-%COMP%] {\r\n        padding: 0 2rem;\r\n    }\r\n    .input-group-text[_ngcontent-%COMP%] {\r\n        background: #c0392b !important;\r\n        color: white !important;\r\n        border: 0 !important;\r\n        border-radius: 0.25rem 0 0 0.25rem !important;\r\n    }\r\n    .input_user[_ngcontent-%COMP%], .input_pass[_ngcontent-%COMP%]:focus {\r\n        box-shadow: none !important;\r\n        outline: 0px !important;\r\n    }\r\n    .custom-checkbox[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]::before {\r\n        background-color: #c0392b !important;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWlubG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQyx1Q0FBdUM7SUFDcEM7UUFDSSxhQUFhO1FBQ2IsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0QixhQUFhO1FBQ2IsNEVBQTRFO1FBQzVFLG9GQUFvRjtRQUNwRixpRkFBaUY7UUFDakYsa0JBQWtCOztJQUV0QjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixZQUFZO1FBQ1osVUFBVTtRQUNWLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksYUFBYTtRQUNiLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFdBQVc7UUFDWCw4QkFBOEI7UUFDOUIsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSwyQkFBMkI7UUFDM0IsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSw4QkFBOEI7UUFDOUIsdUJBQXVCO1FBQ3ZCLG9CQUFvQjtRQUNwQiw2Q0FBNkM7SUFDakQ7SUFDQTs7UUFFSSwyQkFBMkI7UUFDM0IsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxvQ0FBb0M7SUFDeEMiLCJmaWxlIjoiYWRtaW5sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHQvKiBDb2RlZCB3aXRoIGxvdmUgYnkgTXV0aXVsbGFoIFNhbWltICovXHJcbiAgICAudXNlcl9jYXJkIHtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YzOWMxMjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICB9XHJcbiAgICAuYnJhbmRfbG9nb19jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNzBweDtcclxuICAgICAgICB0b3A6IC03NXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNjBhM2JjO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJyYW5kX2xvZ28ge1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5mb3JtX2NvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAubG9naW5fYnRuIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYzAzOTJiICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubG9naW5fYnRuOmZvY3VzIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3V0bGluZTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubG9naW5fY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDJyZW07XHJcbiAgICB9XHJcbiAgICAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2MwMzkyYiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW0gMCAwIDAuMjVyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5pbnB1dF91c2VyLFxyXG4gICAgLmlucHV0X3Bhc3M6Zm9jdXMge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBvdXRsaW5lOiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWR+LmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjMDM5MmIgIWltcG9ydGFudDtcclxuICAgIH0iXX0= */"] });


/***/ }),

/***/ 2731:
/*!**************************************************************!*\
  !*** ./src/app/component/adminpanel/adminpanel.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminpanelComponent": () => (/* binding */ AdminpanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_adminservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/adminservice.service */ 4523);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AdminpanelComponent {
    constructor(adminservice, router) {
        this.adminservice = adminservice;
        this.router = router;
        this.adminservice.getadmindetails().subscribe((res) => { this.arods = res; });
    }
    change1() {
        this.router.navigate(['adminlogin']);
    }
    ngOnInit() {
    }
}
AdminpanelComponent.ɵfac = function AdminpanelComponent_Factory(t) { return new (t || AdminpanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_adminservice_service__WEBPACK_IMPORTED_MODULE_0__.AdminserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AdminpanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminpanelComponent, selectors: [["app-adminpanel"]], decls: 44, vars: 0, consts: [[2, "background", "black", "margin-top", "-50px"], ["id", "sidebarMenu", 1, "collapse", "d-lg-block", "sidebar", "mt-5", "collapse", "bg-dark", 2, "height", "617px"], [1, "position-sticky"], [1, "list-group", "list-group-flush", "bg-dark", "mx-3", "mt-4"], ["aria-current", "true", 1, "list-group-item", "text-white", "list-group-item-action", "bg-dark", "py-2", "ripple"], [1, "fas", "fa-tachometer-alt", "fa-fw", "me-3"], [1, "list-group-item", "list-group-item-action", "bg-dark", "py-2", "ripple", "active"], [1, "fas", "fa-chart-area", "text-white", "fa-fw", "me-3"], [1, "text-white"], ["routerLink", "userlist", "href", "#", 1, "list-group-item", "text-white", "list-group-item-action", "bg-dark", "py-2", "ripple"], [1, "fas", "fa-globe", "fa-fw", "me-3"], ["routerLink", "donorlist", 1, "list-group-item", "text-white", "list-group-item-action", "bg-dark", "py-2", "ripple"], [1, "fas", "fa-lock", "fa-fw", "me-3"], ["routerLink", "benfrequestlist", "href", "#", 1, "list-group-item", "text-white", "list-group-item-action", "bg-dark", "py-2", "ripple"], [1, "fas", "fa-chart-line", "fa-fw", "me-3"], ["routerLink", "bloodbanklist", "href", "#", 1, "list-group-item", "text-white", "list-group-item-action", "bg-dark", "py-2", "ripple"], [1, "fas", "fa-chart-pie", "fa-fw", "me-3"], ["routerLink", "feedbacklist", "href", "#", 1, "list-group-item", "text-white", "list-group-item-action", "bg-dark", "py-2", "ripple"], [1, "fas", "fa-chart-bar", "fa-fw", "me-3"], ["routerLink", "enquirylist", "href", "#", 1, "list-group-item", "text-white", "list-group-item-action", "bg-dark", "py-2", "ripple"], [1, "list-group-item", "text-white", "list-group-item-action", "bg-dark", "py-2", "ripple"], [1, "btn", "btn-bark", "text-white", 3, "click"], [2, "margin-top", "58px"], [1, "container", "pt-4"]], template: function AdminpanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0)(1, "nav", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Main dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Webiste traffic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "UserList");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Donor List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Blood Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Blood Banks Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Beneficiary Feedbacks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Enquiry Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminpanelComponent_Template_button_click_38_listener() { return ctx.change1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "main", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["body[_ngcontent-%COMP%] {\r\n    background-color: #fbfbfb;\r\n  }\r\n  @media (min-width: 991.98px) {\r\n    main[_ngcontent-%COMP%] {\r\n      padding-left: 240px;\r\n    }\r\n  }\r\n  \r\n  .sidebar[_ngcontent-%COMP%] {\r\n    \r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 58px 0 0; \r\n    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);\r\n    width: 240px;\r\n    z-index: 600;\r\n  }\r\n  @media (max-width: 991.98px) {\r\n    .sidebar[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\r\n    border-radius: 5px;\r\n    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);\r\n  }\r\n  .sidebar-sticky[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 0;\r\n    height: calc(100vh - 48px);\r\n    padding-top: 0.5rem;\r\n    overflow-x: hidden;\r\n    overflow-y: auto; \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWlucGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0U7TUFDRSxtQkFBbUI7SUFDckI7RUFDRjtFQUVBLFlBQVk7RUFDWjtJQUNFLHFCQUFxQjtJQUNyQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxpQkFBaUIsRUFBRSxxQkFBcUI7SUFDeEMscUVBQXFFO0lBQ3JFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7RUFFQTtJQUNFO01BQ0UsV0FBVztJQUNiO0VBQ0Y7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQix1RUFBdUU7RUFDekU7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUUsNkRBQTZEO0VBQ2pGIiwiZmlsZSI6ImFkbWlucGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgICBtYWluIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyNDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogU2lkZWJhciAqL1xyXG4gIC5zaWRlYmFyIHtcclxuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nOiA1OHB4IDAgMDsgLyogSGVpZ2h0IG9mIG5hdmJhciAqL1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiKDAgMCAwIC8gNSUpLCAwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gNSUpO1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgei1pbmRleDogNjAwO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5hY3RpdmUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiKDAgMCAwIC8gMTYlKSwgMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDEyJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyLXN0aWNreSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcclxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvOyAvKiBTY3JvbGxhYmxlIGNvbnRlbnRzIGlmIHZpZXdwb3J0IGlzIHNob3J0ZXIgdGhhbiBjb250ZW50LiAqL1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ 8891:
/*!****************************************************************!*\
  !*** ./src/app/component/benfrequest/benfrequest.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BenfrequestComponent": () => (/* binding */ BenfrequestComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_benfsignup_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/benfsignup.service */ 466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function BenfrequestComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.benf_fullname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.benf_age);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.gender_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.blood_type_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.bloodgroup_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.benf_units_required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.benf_accepted_bloodgroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.benf_deadline);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.benf_mobile1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.benf_mobile2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.benf_hospital_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.benf_hospital_address);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.country_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.state_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.district_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.area_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.benf_pincode);
} }
class BenfrequestComponent {
    constructor(benf) {
        this.benf = benf;
        var mob1 = Number(localStorage.getItem('mobile'));
        this.benf.getbyid(mob1).subscribe((res) => {
            this.prods = res.data;
        });
    }
    ngOnInit() {
    }
}
BenfrequestComponent.ɵfac = function BenfrequestComponent_Factory(t) { return new (t || BenfrequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_benfsignup_service__WEBPACK_IMPORTED_MODULE_0__.BenfsignupService)); };
BenfrequestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BenfrequestComponent, selectors: [["app-benfrequest"]], decls: 39, vars: 1, consts: [["id", "dtBasicExample", "cellspacing", "0", 1, "table", "float-left", "table-danger", "table-hover", "table-striped", "table-bordered", "table-sm", 2, "display", "inline-block", "overflow", "scroll", "margin-top", "-570px", "width", "70%", "height", "40%", "margin-left", "320px"], [1, "th-sm"], [4, "ngFor", "ngForOf"]], template: function BenfrequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0)(1, "thead")(2, "tr")(3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Age ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Gender ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "BloodRequestType ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "BloodGroup ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "UnitsRequired ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "AcceptedBloodGroup ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "DeadLine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Mobileno ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "AlternativeMobileno ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "HospitalName ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "HospitalLocation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "State ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "District ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Area ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Pincode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, BenfrequestComponent_tr_38_Template, 35, 17, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.prods);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiZW5mcmVxdWVzdC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 6805:
/*!************************************************************************!*\
  !*** ./src/app/component/benfrequestlist/benfrequestlist.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BenfrequestlistComponent": () => (/* binding */ BenfrequestlistComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_benfsignup_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/benfsignup.service */ 466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function BenfrequestlistComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.benf_fullname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.benf_age);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.gender_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.blood_type_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.bloodgroup_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.benf_units_required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.benf_accepted_bloodgroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.benf_deadline);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.benf_mobile1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.benf_mobile2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.benf_hospital_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.benf_hospital_address);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.country_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.state_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.district_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.area_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.benf_pincode);
} }
class BenfrequestlistComponent {
    constructor(benf) {
        this.benf = benf;
        this.benf.get().subscribe((res) => {
            this.prods1 = res.data;
        });
    }
    ngOnInit() {
    }
}
BenfrequestlistComponent.ɵfac = function BenfrequestlistComponent_Factory(t) { return new (t || BenfrequestlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_benfsignup_service__WEBPACK_IMPORTED_MODULE_0__.BenfsignupService)); };
BenfrequestlistComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BenfrequestlistComponent, selectors: [["app-benfrequestlist"]], decls: 39, vars: 1, consts: [["id", "dtBasicExample", "cellspacing", "0", 1, "table", "float-left", "table-danger", "table-hover", "table-striped", "table-bordered", "table-sm", 2, "display", "inline-block", "overflow", "scroll", "margin-top", "-600px", "width", "70%", "height", "40%", "margin-left", "320px"], [1, "th-sm"], [4, "ngFor", "ngForOf"]], template: function BenfrequestlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0)(1, "thead")(2, "tr")(3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Age ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Gender ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "BloodRequestType ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "BloodGroup ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "UnitsRequired ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "AcceptedBloodGroup ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "DeadLine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Mobileno ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "AlternativeMobileno ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "HospitalName ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "HospitalLocation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "State ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "District ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Area ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Pincode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, BenfrequestlistComponent_tr_38_Template, 35, 17, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.prods1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiZW5mcmVxdWVzdGxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3314:
/*!**************************************************************!*\
  !*** ./src/app/component/benfsignup/benfsignup.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BenfsignupComponent": () => (/* binding */ BenfsignupComponent)
/* harmony export */ });
/* harmony import */ var src_app_interfaces_benfsignup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/benfsignup */ 8838);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_autocall_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/autocall.service */ 2974);
/* harmony import */ var src_app_service_benfsignup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/benfsignup.service */ 466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_service_gender_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/gender.service */ 5231);
/* harmony import */ var src_app_service_bloodtype_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/bloodtype.service */ 5158);
/* harmony import */ var src_app_service_bloodgroup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/bloodgroup.service */ 224);
/* harmony import */ var src_app_service_accbloodgroup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/accbloodgroup.service */ 2548);
/* harmony import */ var src_app_service_country_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/country.service */ 7173);
/* harmony import */ var src_app_service_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/state.service */ 8163);
/* harmony import */ var _service_district_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/district.service */ 9453);
/* harmony import */ var src_app_service_area_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/area.service */ 8910);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6362);
















function BenfsignupComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Name Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BenfsignupComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Name Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BenfsignupComponent_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", key_r32.gender_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", key_r32.gender_name, "");
} }
function BenfsignupComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Gender required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BenfsignupComponent_option_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", key_r33.bloodgroup_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", key_r33.bloodgroup_name, "");
} }
function BenfsignupComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " BloodGroup required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BenfsignupComponent_option_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", key_r34.blood_type_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", key_r34.blood_type_name, "");
} }
function BenfsignupComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Blood Request Type required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BenfsignupComponent_option_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", key_r35.bloodgroup_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", key_r35.benf_accepted_bloodgroup, "");
} }
function BenfsignupComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Alternative BloodGroup required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BenfsignupComponent_option_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", key_r36.country_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", key_r36.country_name, "");
} }
function BenfsignupComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Country required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BenfsignupComponent_option_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", key_r37.state_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", key_r37.state_name, "");
} }
function BenfsignupComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " State required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BenfsignupComponent_option_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", key_r38.district_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", key_r38.district_name, "");
} }
function BenfsignupComponent_div_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " District required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BenfsignupComponent_option_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", key_r39.area_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", key_r39.area_name, "");
} }
function BenfsignupComponent_div_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Area required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BenfsignupComponent_div_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Hospital Name Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function BenfsignupComponent_div_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Hospital Address Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
class BenfsignupComponent {
    constructor(autocall, benf, router, gender, bloodtype, bloodgroup, accbloodgroup, country, state, district, area, benfserive) {
        this.autocall = autocall;
        this.benf = benf;
        this.router = router;
        this.gender = gender;
        this.bloodtype = bloodtype;
        this.bloodgroup = bloodgroup;
        this.accbloodgroup = accbloodgroup;
        this.country = country;
        this.state = state;
        this.district = district;
        this.area = area;
        this.benfserive = benfserive;
        this._categoryList = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject([]);
        this.categoryList$ = this._categoryList.asObservable();
        this.statebool = false;
        this.rec = new src_app_interfaces_benfsignup__WEBPACK_IMPORTED_MODULE_0__.Benfsignup();
    }
    save(rec) {
        this.benf.post(rec).subscribe((res) => {
            alert(res.status);
            if (res.status == 'success') {
                // this.prods1.push(rec);
                this.router.navigate(['mobilevalidation']);
                this.autocall.get().subscribe(() => { alert('Done..'); });
            }
            else {
                alert('error');
            }
        }, () => {
            alert('task completed');
            //clear rec
            // this.rec.benf_fullname="";
            // this.rec.benf_age=null;
            // this.rec.benf_gender=null;
            // this.rec.benf_blood_type=null;
            // this.rec.benf_bloodgroup=null;
            // this.rec.benf_units_required=null;
            // this.rec.benf_acc_bloodgroup=null;
            // this.rec.benf_deadline="";
            // this.rec.benf_mobile1=null;
            // this.rec.benf_mobile2=null;
            // this.rec.benf_hospital_name="";
            // this.rec.benf_hospital_address="";
            // this.rec.benf_country=null;
            // this.rec.benf_state=null;
            // this.rec.benf_district=null;
            // this.rec.benf_area=null;
            // this.rec.benf_pincode=null;
        });
    }
    ngOnInit() {
        let adminid = localStorage.getItem('adminID');
        this.getaddress();
        this.getgender();
        this.getbloodtype();
        this.getbloodgroup();
        this.getaccbloodgroup();
    }
    getgender() {
        this.gender.get().subscribe((data1) => {
            this.grods = data1.data;
            console.log(data1.data[0].gender_name);
            this._categoryList.next(data1);
        });
    }
    getbloodtype() {
        this.bloodtype.get().subscribe((data1) => {
            this.trods = data1.data;
            console.log(data1.data[0].blood_type_name);
            this._categoryList.next(data1);
        });
    }
    getbloodgroup() {
        this.bloodgroup.get().subscribe((data1) => {
            this.brods = data1.data;
            console.log(data1.data[0].bloodgroup_name);
            this._categoryList.next(data1);
        });
    }
    getaccbloodgroup() {
        this.accbloodgroup.get().subscribe((data1) => {
            this.abrods = data1.data;
            console.log(data1.data[0].benf_accepted_bloodgroup);
            this._categoryList.next(data1);
        });
    }
    getaddress() {
        this.country.get().subscribe((data1) => {
            this.prods = data1.data;
            console.log(data1.data[0].country_name);
            this._categoryList.next(data1);
            this.getstate(data1.data[0].country_id);
        });
    }
    getstate(data) {
        // console.log(data.target.value);
        this.state.get(data).subscribe((data1) => {
            this.srods = data1.data;
            this.statebool = true;
            console.log(data1.data[0].state_name);
            this._categoryList.next(data1);
            this.getdistrict(data1.data[0].state_id);
        });
    }
    getdistrict(data) {
        // console.log(data.target.value);
        this.district.get(data).subscribe((data1) => {
            this.drods = data1.data;
            this.statebool = true;
            console.log(data1.data[0].district_name);
            this._categoryList.next(data1);
            this.getarea(data1.data[0].district_id);
        });
    }
    getarea(data) {
        this.area.get(data).subscribe((data1) => {
            this.arods = data1.data;
            this.statebool = true;
            console.log(data1.data[0].area_name);
            this._categoryList.next(data1);
        });
    }
    keyPress(event) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
}
BenfsignupComponent.ɵfac = function BenfsignupComponent_Factory(t) { return new (t || BenfsignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_service_autocall_service__WEBPACK_IMPORTED_MODULE_1__.AutocallService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_service_benfsignup_service__WEBPACK_IMPORTED_MODULE_2__.BenfsignupService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_service_gender_service__WEBPACK_IMPORTED_MODULE_3__.GenderService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_service_bloodtype_service__WEBPACK_IMPORTED_MODULE_4__.BloodtypeService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_service_bloodgroup_service__WEBPACK_IMPORTED_MODULE_5__.BloodgroupService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_service_accbloodgroup_service__WEBPACK_IMPORTED_MODULE_6__.AccbloodgroupService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_service_country_service__WEBPACK_IMPORTED_MODULE_7__.CountryService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_service_state_service__WEBPACK_IMPORTED_MODULE_8__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_service_district_service__WEBPACK_IMPORTED_MODULE_9__.DistrictService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_service_area_service__WEBPACK_IMPORTED_MODULE_10__.AreaService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_service_benfsignup_service__WEBPACK_IMPORTED_MODULE_2__.BenfsignupService)); };
BenfsignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: BenfsignupComponent, selectors: [["app-root"]], decls: 114, vars: 45, consts: [[1, "container", "register"], [1, "row"], [1, "col-md-3", "register-left"], ["src", "https://image.ibb.co/n7oTvU/logo_white.png", "alt", ""], ["type", "submit", "name", "", "value", "Signup"], [1, "col-md-9", "register-right"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs", "nav-justified"], [1, "nav-item"], ["id", "home-tab", "data-toggle", "tab", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active", "w-100", 2, "margin", "0 auto", "margin-top", "10px"], ["id", "myTabContent", 1, "tab-content"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "row", "register-form"], [1, "col-md-6"], [1, "form-group"], ["type", "text", "placeholder", "Enter Your Name *", "value", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["model", "ngModel"], ["style", "color: red", 4, "ngIf"], ["type", "text", "placeholder", "Enter Your Age *", "value", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["model3", "ngModel"], ["type", "text", "minlength", "10", "maxlength", "10", "placeholder", "Enter Your  Mobile no. *", "value", "", 1, "form-control", 3, "ngModel", "keypress", "ngModelChange"], ["type", "text", "placeholder", "Enter Your Alternative Mobile no. *", "value", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "placeholder", "Enter No Of Units Required", "value", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "gender", "ngModel", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["gender", "ngModel"], ["disabled", "", 1, "visually-hidden", 3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "bloodgroup", "ngModel", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["bloodgroup", "ngModel"], ["disabled", "", 1, "hidden", 3, "ngValue"], ["name", "bloodrqsttyp", "ngModel", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["bloodrqsttyp", "ngModel"], ["name", "accptdbloodgroup", "ngModel", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["accptdbloodgroup", "ngModel"], ["type", "text", "placeholder", "Enter Your DeadLine *", "value", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "country", "ngModel", "", "required", "", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["country", "ngModel"], ["name", "state", "ngModel", "", "required", "", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["state", "ngModel"], ["name", "dist", "ngModel", "", "required", "", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["dist", "ngModel"], ["name", "area", "ngModel", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["area", "ngModel"], ["type", "text", "placeholder", "Enter Your Pincode *", "value", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "placeholder", "Enter Hospital  Name *", "value", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["model1", "ngModel"], ["type", "email", "placeholder", "Enter Hospital Address *", "value", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["model2", "ngModel"], ["type", "submit", "value", "Register", 1, "btnRegister", 3, "click"], [2, "color", "red"], [3, "value"]], template: function BenfsignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "You are 30 seconds away from earning your own money!");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "input", 4)(9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 5)(11, "ul", 6)(12, "li", 7)(13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "I Need Blood");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function BenfsignupComponent_Template_input_ngModelChange_20_listener($event) { return ctx.rec.benf_fullname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, BenfsignupComponent_div_22_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "div", 12)(24, "div", 13)(25, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function BenfsignupComponent_Template_input_ngModelChange_25_listener($event) { return ctx.rec.benf_age = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](27, BenfsignupComponent_div_27_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "div", 12)(29, "div", 13)(30, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keypress", function BenfsignupComponent_Template_input_keypress_30_listener($event) { return ctx.keyPress($event); })("ngModelChange", function BenfsignupComponent_Template_input_ngModelChange_30_listener($event) { return ctx.rec.benf_mobile1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "div", 12)(32, "div", 13)(33, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function BenfsignupComponent_Template_input_ngModelChange_33_listener($event) { return ctx.rec.benf_mobile2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "div", 12)(35, "div", 13)(36, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function BenfsignupComponent_Template_input_ngModelChange_36_listener($event) { return ctx.rec.benf_units_required = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "div", 12)(38, "div", 13)(39, "select", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function BenfsignupComponent_Template_select_ngModelChange_39_listener($event) { return ctx.rec.benf_gender = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, "Please select your Gender ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](43, BenfsignupComponent_option_43_Template, 2, 2, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](44, BenfsignupComponent_div_44_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "div", 12)(46, "div", 13)(47, "select", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function BenfsignupComponent_Template_select_ngModelChange_47_listener($event) { return ctx.rec.benf_bloodgroup = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50, "Please select your BloodGroup ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](51, BenfsignupComponent_option_51_Template, 2, 2, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](52, BenfsignupComponent_div_52_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "div", 12)(54, "div", 13)(55, "select", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function BenfsignupComponent_Template_select_ngModelChange_55_listener($event) { return ctx.rec.benf_blood_type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](57, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](58, "Please select your Blood Request Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](59, BenfsignupComponent_option_59_Template, 2, 2, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](60, BenfsignupComponent_div_60_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "div", 12)(62, "div", 13)(63, "select", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function BenfsignupComponent_Template_select_ngModelChange_63_listener($event) { return ctx.rec.benf_acc_bloodgroup = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](65, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](66, "Please Select your Accepted BloodGroupTypes");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](67, BenfsignupComponent_option_67_Template, 2, 2, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](68, BenfsignupComponent_div_68_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](69, "div", 12)(70, "div", 13)(71, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function BenfsignupComponent_Template_input_ngModelChange_71_listener($event) { return ctx.rec.benf_deadline = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](72, "div", 12)(73, "div", 13)(74, "select", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function BenfsignupComponent_Template_select_change_74_listener($event) { return ctx.getstate($event.target.value); })("ngModelChange", function BenfsignupComponent_Template_select_ngModelChange_74_listener($event) { return ctx.rec.benf_country = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](76, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](77, "Please select your Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](78, BenfsignupComponent_option_78_Template, 2, 2, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](79, BenfsignupComponent_div_79_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](80, "div", 12)(81, "div", 13)(82, "select", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function BenfsignupComponent_Template_select_change_82_listener($event) { return ctx.getdistrict($event.target.value); })("ngModelChange", function BenfsignupComponent_Template_select_ngModelChange_82_listener($event) { return ctx.rec.benf_state = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](84, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](85, "Please select your state");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](86, BenfsignupComponent_option_86_Template, 2, 2, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](87, BenfsignupComponent_div_87_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](88, "div", 12)(89, "div", 13)(90, "select", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function BenfsignupComponent_Template_select_change_90_listener($event) { return ctx.getarea($event.target.value); })("ngModelChange", function BenfsignupComponent_Template_select_ngModelChange_90_listener($event) { return ctx.rec.benf_district = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](92, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](93, "Please select your dist");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](94, BenfsignupComponent_option_94_Template, 2, 2, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](95, BenfsignupComponent_div_95_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](96, "div", 13)(97, "select", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function BenfsignupComponent_Template_select_ngModelChange_97_listener($event) { return ctx.rec.benf_area = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](99, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](100, "Please select your area");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](101, BenfsignupComponent_option_101_Template, 2, 2, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](102, BenfsignupComponent_div_102_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](103, "div", 13)(104, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function BenfsignupComponent_Template_input_ngModelChange_104_listener($event) { return ctx.rec.benf_pincode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](105, "div", 13)(106, "input", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function BenfsignupComponent_Template_input_ngModelChange_106_listener($event) { return ctx.rec.benf_hospital_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](108, BenfsignupComponent_div_108_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](109, "div", 13)(110, "input", 45, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function BenfsignupComponent_Template_input_ngModelChange_110_listener($event) { return ctx.rec.benf_hospital_address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](112, BenfsignupComponent_div_112_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](113, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function BenfsignupComponent_Template_input_click_113_listener() { return ctx.save(ctx.rec); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](21);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](26);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](40);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](48);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](56);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](64);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](75);
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](83);
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](91);
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](98);
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](107);
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.rec.benf_fullname);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.rec.benf_age);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r2.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.rec.benf_mobile1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.rec.benf_mobile2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.rec.benf_units_required);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.rec.benf_gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.grods);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r4.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.rec.benf_bloodgroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.brods);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r7.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.rec.benf_blood_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.trods);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r10.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.rec.benf_acc_bloodgroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.abrods);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r13.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.rec.benf_deadline);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.rec.benf_country);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.prods);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r16.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.rec.benf_state);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.srods);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r19.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.rec.benf_district);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.drods);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r22.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.rec.benf_area);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.arods);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r25.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.rec.benf_pincode);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.rec.benf_hospital_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r28.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.rec.benf_hospital_address);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r30.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf], styles: [".register[_ngcontent-%COMP%]{\r\n    background: -webkit-linear-gradient(left, #3931af, #00c6ff);\r\n    margin-top: 3%;\r\n    padding: 3%;\r\n  }\r\n  .register-left[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: #fff;\r\n    margin-top: 4%;\r\n  }\r\n  .register-left[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    border: none;\r\n    border-radius: 1.5rem;\r\n    padding: 2%;\r\n    width: 60%;\r\n    background: #f8f9fa;\r\n    font-weight: bold;\r\n    color: #383d41;\r\n    margin-top: 30%;\r\n    margin-bottom: 3%;\r\n    cursor: pointer;\r\n  }\r\n  .register-right[_ngcontent-%COMP%]{\r\n    background: #f8f9fa;\r\n    border-top-left-radius: 10% 50%;\r\n    border-bottom-left-radius: 10% 50%;\r\n  }\r\n  .register-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin-top: 15%;\r\n    margin-bottom: 5%;\r\n    width: 25%;\r\n    animation: mover 1s infinite  alternate;\r\n  }\r\n  @keyframes mover {\r\n    0% { transform: translateY(0); }\r\n    100% { transform: translateY(-20px); }\r\n  }\r\n  .register-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-weight: lighter;\r\n    padding: 12%;\r\n    margin-top: -9%;\r\n  }\r\n  .register[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]{\r\n    padding: 10%;\r\n    margin-top: 10%;\r\n  }\r\n  .btnRegister[_ngcontent-%COMP%]{\r\n    float: right;\r\n    margin-top: 10%;\r\n    border: none;\r\n    border-radius: 1.5rem;\r\n    padding: 2%;\r\n    background: #0062cc;\r\n    color: #fff;\r\n    font-weight: 600;\r\n    width: 50%;\r\n    cursor: pointer;\r\n  }\r\n  .register[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{\r\n    margin-top: 3%;\r\n    border: none;\r\n    background: #0062cc;\r\n    border-radius: 1.5rem;\r\n    width: 28%;\r\n    float: right;\r\n  }\r\n  .register[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\r\n    padding: 2%;\r\n    height: 34px;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    border-top-right-radius: 1.5rem;\r\n    border-bottom-right-radius: 1.5rem;\r\n  }\r\n  .register[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{\r\n    border: none;\r\n  }\r\n  .register[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    color: #0062cc;\r\n    border: 2px solid #0062cc;\r\n    border-top-left-radius: 1.5rem;\r\n    border-bottom-left-radius: 1.5rem;\r\n  }\r\n  .register-heading[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin-top: 8%;\r\n    margin-bottom: -15%;\r\n    color: #495057;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlbmZzaWdudXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJEQUEyRDtJQUMzRCxjQUFjO0lBQ2QsV0FBVztFQUNiO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0Isa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFVBQVU7SUFFVix1Q0FBdUM7RUFDekM7RUFLQTtJQUNFLEtBQUssd0JBQXdCLEVBQUU7SUFDL0IsT0FBTyw0QkFBNEIsRUFBRTtFQUN2QztFQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osZUFBZTtFQUNqQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsY0FBYztJQUNkLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixZQUFZO0VBQ2Q7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0Isa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGNBQWM7RUFDaEIiLCJmaWxlIjoiYmVuZnNpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVye1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzM5MzFhZiwgIzAwYzZmZik7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gIH1cclxuICAucmVnaXN0ZXItbGVmdHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci1sZWZ0IGlucHV0e1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMzODNkNDE7XHJcbiAgICBtYXJnaW4tdG9wOiAzMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLXJpZ2h0e1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwJSA1MCU7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMCUgNTAlO1xyXG4gIH1cclxuICAucmVnaXN0ZXItbGVmdCBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZXIgMnMgaW5maW5pdGUgIGFsdGVybmF0ZTtcclxuICAgIGFuaW1hdGlvbjogbW92ZXIgMXMgaW5maW5pdGUgIGFsdGVybmF0ZTtcclxuICB9XHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIG1vdmVyIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIG1vdmVyIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgfVxyXG4gIH1cclxuICAucmVnaXN0ZXItbGVmdCBwe1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBwYWRkaW5nOiAxMiU7XHJcbiAgICBtYXJnaW4tdG9wOiAtOSU7XHJcbiAgfVxyXG4gIC5yZWdpc3RlciAucmVnaXN0ZXItZm9ybXtcclxuICAgIHBhZGRpbmc6IDEwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICB9XHJcbiAgLmJ0blJlZ2lzdGVye1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA2MmNjO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnJlZ2lzdGVyIC5uYXYtdGFic3tcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogIzAwNjJjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuICAgIHdpZHRoOiAyOCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIC5yZWdpc3RlciAubmF2LXRhYnMgLm5hdi1saW5re1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMS41cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEuNXJlbTtcclxuICB9XHJcbiAgLnJlZ2lzdGVyIC5uYXYtdGFicyAubmF2LWxpbms6aG92ZXJ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIC5yZWdpc3RlciAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZXtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGNvbG9yOiAjMDA2MmNjO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwNjJjYztcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEuNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEuNXJlbTtcclxuICB9XHJcbiAgLnJlZ2lzdGVyLWhlYWRpbmd7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA4JTtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xNSU7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICB9XHJcbiAgIl19 */"] });


/***/ }),

/***/ 2194:
/*!********************************************************************!*\
  !*** ./src/app/component/bloodbanklist/bloodbanklist.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloodbanklistComponent": () => (/* binding */ BloodbanklistComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_bloodbank_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/bloodbank.service */ 7442);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function BloodbanklistComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const b_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](b_r1.bloodbank_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](b_r1.bloodbank_location);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](b_r1.bloodbank_contactno);
} }
class BloodbanklistComponent {
    constructor(bloodbankservice) {
        this.bloodbankservice = bloodbankservice;
        this.bloodbankservice.getbloodbank().subscribe((res) => { this.brods = res; });
    }
    ngOnInit() {
    }
}
BloodbanklistComponent.ɵfac = function BloodbanklistComponent_Factory(t) { return new (t || BloodbanklistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_bloodbank_service__WEBPACK_IMPORTED_MODULE_0__.BloodbankService)); };
BloodbanklistComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BloodbanklistComponent, selectors: [["app-bloodbanklist"]], decls: 11, vars: 1, consts: [["id", "dtBasicExample", "cellspacing", "0", 1, "table", "float-left", "table-danger", "table-hover", "table-striped", "table-bordered", "table-sm", 2, "margin-top", "-450px", "width", "70%", "height", "40%", "margin-left", "320px"], [1, "th-sm"], [4, "ngFor", "ngForOf"]], template: function BloodbanklistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0)(1, "thead")(2, "tr")(3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "BloodBankName ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Location ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "ContactNumber ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, BloodbanklistComponent_tr_10_Template, 7, 3, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.brods);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9vZGJhbmtsaXN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 6684:
/*!**********************************************************************!*\
  !*** ./src/app/component/bloodbankpanel/bloodbankpanel.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloodbankpanelComponent": () => (/* binding */ BloodbankpanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class BloodbankpanelComponent {
    constructor(_router) {
        this._router = _router;
    }
    change() {
        this._router.navigate(['home']);
    }
    ngOnInit() {
    }
}
BloodbankpanelComponent.ɵfac = function BloodbankpanelComponent_Factory(t) { return new (t || BloodbankpanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
BloodbankpanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BloodbankpanelComponent, selectors: [["app-bloodbankpanel"]], decls: 15, vars: 0, consts: [[1, "flex-container"], [1, "flex-container1"], ["routerLink", ""], [3, "click"], [2, "font-size", "x-large", "float", "left", "margin", "15px"]], template: function BloodbankpanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome user......");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "div")(6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div")(9, "a")(10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BloodbankpanelComponent_Template_button_click_10_listener() { return ctx.change(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div")(13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["div[_ngcontent-%COMP%]{\r\n    background-color: rgb(205, 206, 201);\r\n    height: 100px;\r\n}\r\ndiv[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: white;\r\n    font-size: 40px;\r\n}\r\n.flex-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    background-color: rgb(198, 187, 189);\r\n    height: 500px;\r\n    align-items: stretch;\r\n  }\r\n.flex-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    \r\n    background-color: white;\r\n    color: black;\r\n    line-height: 75px;\r\n    font-size: 30px; \r\n   margin: 10px;\r\n   padding: 5px;\r\n   height: auto;\r\n  }\r\n.flex-container[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%]{\r\n      font-size: 30px;\r\n  }\r\n.flex-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(1) {flex-grow: 1;}\r\n.flex-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2) {flex-grow: 4;}\r\n.flex-container2[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction:column;\r\n    background-color: rgb(192, 9, 39);\r\n    height: auto;\r\n    align-items: stretch;\r\n  }\r\n.flex-container2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    \r\n    background-color: white;\r\n    color: black;\r\n    line-height: 75px;\r\n    font-size: 30px; \r\n   margin: 10px;\r\n   padding: 5px;\r\n  \r\n  }\r\n.flex-container2[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%]{\r\n      font-size: 30px;\r\n  }\r\n.flex-container2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(1) {flex-grow: 2;}\r\n.flex-container2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2) {flex-grow: 2;}\r\n.flex-container2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2) {flex-grow: 2;}\r\n.flex-container2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2) {flex-grow: 2;}\r\n.flex-container2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2) {flex-grow: 2;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb29kYmFua3BhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2Isb0JBQW9CO0VBQ3RCO0FBRUE7SUFDRTs7Ozt3QkFJb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtHQUNoQixZQUFZO0dBQ1osWUFBWTtHQUNaLFlBQVk7RUFDYjtBQUNBO01BQ0ksZUFBZTtFQUNuQjtBQUNBLG9DQUFvQyxZQUFZLENBQUM7QUFDakQsb0NBQW9DLFlBQVksQ0FBQztBQUNqRDtJQUNFLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixvQkFBb0I7RUFDdEI7QUFFQTtJQUNFOzs7O3dCQUlvQjtJQUNwQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0dBQ2hCLFlBQVk7R0FDWixZQUFZOztFQUViO0FBQ0E7TUFDSSxlQUFlO0VBQ25CO0FBQ0EscUNBQXFDLFlBQVksQ0FBQztBQUNsRCxxQ0FBcUMsWUFBWSxDQUFDO0FBQ2xELHFDQUFxQyxZQUFZLENBQUM7QUFDbEQscUNBQXFDLFlBQVksQ0FBQztBQUNsRCxxQ0FBcUMsWUFBWSxDQUFDIiwiZmlsZSI6ImJsb29kYmFua3BhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA1LCAyMDYsIDIwMSk7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbmRpdj4gaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTgsIDE4NywgMTg5KTtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB9XHJcbiAgXHJcbiAgLmZsZXgtY29udGFpbmVyID4gZGl2IHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDc1cHg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGxpbmUtaGVpZ2h0OiA3NXB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgbWFyZ2luOiAxMHB4O1xyXG4gICBwYWRkaW5nOiA1cHg7XHJcbiAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgLmZsZXgtY29udGFpbmVyID4gaDF7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbiAgLmZsZXgtY29udGFpbmVyIGRpdjpudGgtb2YtdHlwZSgxKSB7ZmxleC1ncm93OiAxO31cclxuICAuZmxleC1jb250YWluZXIgZGl2Om50aC1vZi10eXBlKDIpIHtmbGV4LWdyb3c6IDQ7fVxyXG4gIC5mbGV4LWNvbnRhaW5lcjIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDksIDM5KTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIH1cclxuICBcclxuICAuZmxleC1jb250YWluZXIyID4gZGl2IHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDc1cHg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGxpbmUtaGVpZ2h0OiA3NXB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgbWFyZ2luOiAxMHB4O1xyXG4gICBwYWRkaW5nOiA1cHg7XHJcbiAgXHJcbiAgfVxyXG4gIC5mbGV4LWNvbnRhaW5lcjIgPiBoMXtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuICAuZmxleC1jb250YWluZXIyIGRpdjpudGgtb2YtdHlwZSgxKSB7ZmxleC1ncm93OiAyO31cclxuICAuZmxleC1jb250YWluZXIyIGRpdjpudGgtb2YtdHlwZSgyKSB7ZmxleC1ncm93OiAyO31cclxuICAuZmxleC1jb250YWluZXIyIGRpdjpudGgtb2YtdHlwZSgyKSB7ZmxleC1ncm93OiAyO31cclxuICAuZmxleC1jb250YWluZXIyIGRpdjpudGgtb2YtdHlwZSgyKSB7ZmxleC1ncm93OiAyO31cclxuICAuZmxleC1jb250YWluZXIyIGRpdjpudGgtb2YtdHlwZSgyKSB7ZmxleC1ncm93OiAyO30iXX0= */"] });


/***/ }),

/***/ 1662:
/*!**************************************************************!*\
  !*** ./src/app/component/bloodbanks/bloodbanks.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloodbanksComponent": () => (/* binding */ BloodbanksComponent)
/* harmony export */ });
/* harmony import */ var src_app_interfaces_bloodbank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/bloodbank */ 7574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_service_bloodbank_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/bloodbank.service */ 7442);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);





class BloodbanksComponent {
    constructor(router, bloodbank) {
        this.router = router;
        this.bloodbank = bloodbank;
        this.rec = new src_app_interfaces_bloodbank__WEBPACK_IMPORTED_MODULE_0__.Bloodbank();
    }
    login(rec) {
        this.bloodbank.getbyid(rec.bloodbank_username, rec.bloodbank_password).subscribe((res) => {
            if (res[0].bloodbank_username == this.rec.bloodbank_username && res[0].bloodbank_password == this.rec.bloodbank_password) {
                this.router.navigate(['bloodbankpanel']);
            }
            else {
                alert('You are not registered');
            }
        }, () => {
            //clear rec
            this.rec.bloodbank_username = "";
            this.rec.bloodbank_password = "";
        });
    }
    change1() {
        this.router.navigate(['home']);
    }
    ngOnInit() {
    }
}
BloodbanksComponent.ɵfac = function BloodbanksComponent_Factory(t) { return new (t || BloodbanksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_bloodbank_service__WEBPACK_IMPORTED_MODULE_1__.BloodbankService)); };
BloodbanksComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BloodbanksComponent, selectors: [["app-root"]], decls: 14, vars: 2, consts: [[1, "div1"], [1, "div2"], ["type", "text", "placeholder", "Enter BloodBank Username", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Enter BloodBank Password", 3, "ngModel", "ngModelChange"], [3, "click"], ["routerLink", "bloodbanksignup"]], template: function BloodbanksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BloodbanksComponent_Template_input_ngModelChange_2_listener($event) { return ctx.rec.bloodbank_username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BloodbanksComponent_Template_input_ngModelChange_4_listener($event) { return ctx.rec.bloodbank_password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BloodbanksComponent_Template_button_click_6_listener() { return ctx.login(ctx.rec); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "If not registered ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button")(11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.rec.bloodbank_username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.rec.bloodbank_password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["*[_ngcontent-%COMP%]{\r\n    box-sizing: border-box;\r\n    \r\n}\r\n\r\n.div2[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    text-align: center;\r\n    background-color:  rgb(210, 142, 154);\r\n    color: black;\r\n    width: 500px;\r\n    height: 400px;\r\n    margin-left: 400px;\r\n    margin-top: 100px;\r\n}\r\n.div2[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    width: 450px;\r\n    height: 50px;\r\n    padding: 30px;\r\n    margin: 20px;\r\n}\r\n@media screen and (max_width: 1000px)\r\n{\r\n    div[_ngcontent-%COMP%]{\r\n        width: auto;\r\n        height: auto;\r\n        \r\n    }\r\n    div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]{\r\n        width: auto;\r\n        height: auto;\r\n        margin: 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb29kYmFua3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjs7QUFFMUI7QUFDQTs7Ozs7O0dBTUc7QUFDSDtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7O0lBRUk7UUFDSSxXQUFXO1FBQ1gsWUFBWTs7SUFFaEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osU0FBUztJQUNiO0FBQ0oiLCJmaWxlIjoiYmxvb2RiYW5rcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBcclxufVxyXG4vKiAuZGl2MXtcclxuICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0Jsb29kLUJhbmstMi5qcGcnKTtcclxuICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIGhlaWdodDogMTAwMHB4O1xyXG59ICovXHJcbi5kaXYye1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYigyMTAsIDE0MiwgMTU0KTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG4uZGl2MiA+IGlucHV0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4X3dpZHRoOiAxMDAwcHgpXHJcbntcclxuICAgIGRpdntcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBkaXYgPiBpbnB1dHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 7834:
/*!************************************************************************!*\
  !*** ./src/app/component/bloodbanksignup/bloodbanksignup.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloodbanksignupComponent": () => (/* binding */ BloodbanksignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class BloodbanksignupComponent {
    constructor() { }
    ngOnInit() {
    }
}
BloodbanksignupComponent.ɵfac = function BloodbanksignupComponent_Factory(t) { return new (t || BloodbanksignupComponent)(); };
BloodbanksignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BloodbanksignupComponent, selectors: [["app-bloodbanksignup"]], decls: 2, vars: 0, template: function BloodbanksignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "bloodbanksignup works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9vZGJhbmtzaWdudXAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 5789:
/*!********************************************************!*\
  !*** ./src/app/component/contact/contact.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _interfaces_enquiry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interfaces/enquiry */ 204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_enquiry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/enquiry.service */ 3325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);




class ContactComponent {
    constructor(enquiry) {
        this.enquiry = enquiry;
        this.rec = new _interfaces_enquiry__WEBPACK_IMPORTED_MODULE_0__.Enquiry();
    }
    add(rec) {
        this.enquiry.addenquiry(rec).subscribe((res) => {
            if (res == 'success') {
                //clear rec
                alert('Enquiry sent successfully');
            }
            else {
                alert('error');
            }
        }, () => {
            alert('Enquiry sent successfully');
            this.rec.enquiry_name = "";
            this.rec.enquiry_mobileno = null;
            this.rec.enquiry_message = "";
        });
    }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_enquiry_service__WEBPACK_IMPORTED_MODULE_1__.EnquiryService)); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-root"]], decls: 105, vars: 3, consts: [[1, "mb-4", 2, "background", "white"], [1, "h1-responsive", "font-weight-bold", "text-center", "my-4"], [1, "text-center", "w-responsive", "mx-auto", "mb-5"], [1, "row"], [1, "col-md-9", "mb-md-0", "mb-5"], ["id", "contact-form", "name", "contact-form", "action", "mail.php", "method", "POST"], [1, "col-md-6"], [1, "md-form", "mb-0"], ["for", "name", 1, ""], ["type", "text", "id", "name", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "number", 1, ""], ["type", "number", "id", "number", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-12"], [1, "md-form"], ["for", "message"], ["type", "text", "id", "message", "name", "message", "rows", "2", 1, "form-control", "md-textarea", 3, "ngModel", "ngModelChange"], [1, "text-center", "text-md-left"], [1, "btn", "btn-danger", "w-100", "mt-3", 3, "click"], [1, "status"], [1, "col-md-3", "text-center"], [1, "list-unstyled", "mb-0"], [1, "fas", "fa-map-marker-alt", "fa-2x"], [1, "fas", "fa-phone", "mt-4", "fa-2x"], [1, "fas", "fa-envelope", "mt-4", "fa-2x"], [1, "page-footer", "font-small", "danger-color", "pt-4", 2, "background", "white"], [1, "container-fluid", "text-center", "text-md-left"], [1, "col-md-6", "mt-md-0", "mt-3"], [1, "text-uppercase"], [1, "clearfix", "w-100", "d-md-none", "pb-3"], [1, "col-md-3", "mb-md-0", "mb-3"], [1, "list-unstyled"], ["href", "www.Sparity.com"], [1, "fas", "fa-envelope-open", "mr-3"], ["href", "#!"], [1, "fas", "fa-location-arrow", "mr-3"], [1, "fas", "fa-tty", "mr-3"], [1, "container"], [1, "col-md-12", "py-5"], [1, "mb-5", "flex-center"], [1, "fb-ic"], [1, "fab", "fa-facebook-f", "fa-lg", "white-text", "mr-md-5", "mr-3", "fa-2x"], [1, "tw-ic"], [1, "fab", "fa-twitter", "fa-lg", "white-text", "mr-md-5", "mr-3", "fa-2x"], [1, "gplus-ic"], [1, "fab", "fa-google-plus-g", "fa-lg", "white-text", "mr-md-5", "mr-3", "fa-2x"], [1, "li-ic"], [1, "fab", "fa-linkedin-in", "fa-lg", "white-text", "mr-md-5", "mr-3", "fa-2x"], [1, "ins-ic"], [1, "fab", "fa-instagram", "fa-lg", "white-text", "mr-md-5", "mr-3", "fa-2x"], [1, "pin-ic"], [1, "fab", "fa-pinterest", "fa-lg", "white-text", "fa-2x"], [1, "footer-copyright", "text-center", "py-3"], ["href", "index.html"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "form", 5)(8, "div", 3)(9, "div", 6)(10, "div", 7)(11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Your name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_13_listener($event) { return ctx.rec.enquiry_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 6)(15, "div", 7)(16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Your Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_18_listener($event) { return ctx.rec.enquiry_mobileno = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 3)(20, "div", 12)(21, "div", 13)(22, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Your message");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_textarea_ngModelChange_24_listener($event) { return ctx.rec.enquiry_message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 16)(26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_26_listener() { return ctx.add(ctx.rec); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 19)(30, "ul", 20)(31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "HYDREABAED, MADHAPUR 50081, INDIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "+ 91 6372345678");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "contact@Sparity.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "footer", 24)(44, "div", 25)(45, "div", 3)(46, "div", 26)(47, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Lets make all Bonded");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Bonded is a web based blood Donation platform which connects thousands of blood donors in three simple steps. Bonded ensures hassle free blood donation and privacy of a blood donor. A blood donor can select any specific date and location to donate blood and find a suitable person who needs blood. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "hr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 29)(53, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "ul", 30)(56, "li")(57, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "www.Sparity.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "li")(61, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "MADHAPUR,500081");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "li")(65, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "+91-6372438128");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 29)(69, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Support Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "ul", 30)(72, "li")(73, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Link 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "li")(76, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Link 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "li")(79, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Link 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "li")(82, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Credits");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 36)(85, "div", 3)(86, "div", 37)(87, "div", 38)(88, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "\u00A9 2022 Copyright: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, " Bonded");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, " All Rights Reserved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.rec.enquiry_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.rec.enquiry_mobileno);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.rec.enquiry_message);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 7561:
/*!************************************************!*\
  !*** ./src/app/component/def/def.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefComponent": () => (/* binding */ DefComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class DefComponent {
    constructor() { }
    ngOnInit() {
    }
}
DefComponent.ɵfac = function DefComponent_Factory(t) { return new (t || DefComponent)(); };
DefComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefComponent, selectors: [["app-def"]], decls: 2, vars: 0, template: function DefComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "def works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWYuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3511:
/*!********************************************************!*\
  !*** ./src/app/component/default/default.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultComponent": () => (/* binding */ DefaultComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class DefaultComponent {
    constructor() { }
    ngOnInit() {
    }
}
DefaultComponent.ɵfac = function DefaultComponent_Factory(t) { return new (t || DefaultComponent)(); };
DefaultComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultComponent, selectors: [["app-default"]], decls: 2, vars: 0, template: function DefaultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "default works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWZhdWx0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 8633:
/*!************************************************************!*\
  !*** ./src/app/component/donorlist/donorlist.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonorlistComponent": () => (/* binding */ DonorlistComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_signup_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/signup.service */ 2169);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function DonorlistComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.user_fullname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.user_age);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.gender_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.bloodgroup_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.user_mobile1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.user_mobile2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.user_emailid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.user_fulladdress);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.country_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.state_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.district_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.area_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.user_pincode);
} }
class DonorlistComponent {
    constructor(signupservice) {
        this.signupservice = signupservice;
        this.signupservice.getdetails().subscribe((res) => { this.prods = res.data; });
    }
    delete(user_mobile1) {
        this.signupservice.delete(user_mobile1).subscribe((res) => {
            if (res.status == 'success') {
                localStorage.setItem('usermobile', res.data.user_mobile1);
                alert('record deleted successfully');
            }
        });
    }
    ngOnInit() {
    }
}
DonorlistComponent.ɵfac = function DonorlistComponent_Factory(t) { return new (t || DonorlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_signup_service__WEBPACK_IMPORTED_MODULE_0__.SignupService)); };
DonorlistComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DonorlistComponent, selectors: [["app-donorlist"]], decls: 31, vars: 1, consts: [["id", "dtBasicExample", "cellspacing", "0", 1, "table", "float-left", "table-danger", "table-hover", "table-striped", "table-bordered", "table-sm", 2, "display", "inline-block", "overflow", "scroll", "margin-top", "-630px", "width", "70%", "height", "40%", "margin-left", "320px"], [1, "th-sm"], [4, "ngFor", "ngForOf"]], template: function DonorlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0)(1, "thead")(2, "tr")(3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "FullName ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Age ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Gender ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "BloodGroup ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "MobileNumber ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "AlternativeMobileNumber ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "FullAddress ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "State ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "District ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Area ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Pincode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, DonorlistComponent_tr_30_Template, 27, 13, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.prods);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb25vcmxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 30:
/*!****************************************************************!*\
  !*** ./src/app/component/enquirylist/enquirylist.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnquirylistComponent": () => (/* binding */ EnquirylistComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_enquiry_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/enquiry.service */ 3325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function EnquirylistComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const e_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](e_r1.enquiry_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](e_r1.enquiry_mobileno);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](e_r1.enquiry_message);
} }
class EnquirylistComponent {
    constructor(enquiryservice) {
        this.enquiryservice = enquiryservice;
        this.enquiryservice.getenquiry().subscribe((res) => { this.erods = res; });
    }
    ngOnInit() {
    }
}
EnquirylistComponent.ɵfac = function EnquirylistComponent_Factory(t) { return new (t || EnquirylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_enquiry_service__WEBPACK_IMPORTED_MODULE_0__.EnquiryService)); };
EnquirylistComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EnquirylistComponent, selectors: [["app-enquirylist"]], decls: 11, vars: 1, consts: [["id", "dtBasicExample", "cellspacing", "0", 1, "table", "float-left", "table-danger", "table-hover", "table-striped", "table-bordered", "table-sm", 2, "margin-top", "-600px", "width", "70%", "height", "40%", "margin-left", "320px"], [1, "th-sm"], [4, "ngFor", "ngForOf"]], template: function EnquirylistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0)(1, "thead")(2, "tr")(3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "MobileNumber ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, EnquirylistComponent_tr_10_Template, 7, 3, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.erods);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbnF1aXJ5bGlzdC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 7197:
/*!**********************************************************!*\
  !*** ./src/app/component/feedback/feedback.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackComponent": () => (/* binding */ FeedbackComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_inventory_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/inventory.service */ 7447);


class FeedbackComponent {
    constructor(inventoryservice) {
        this.inventoryservice = inventoryservice;
        this.inventoryservice.getfeedback().subscribe((res) => {
            this.frods = res;
        });
    }
    ngOnInit() {
    }
}
FeedbackComponent.ɵfac = function FeedbackComponent_Factory(t) { return new (t || FeedbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_inventory_service__WEBPACK_IMPORTED_MODULE_0__.InventoryService)); };
FeedbackComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FeedbackComponent, selectors: [["app-feedback"]], decls: 2, vars: 0, template: function FeedbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "feedback works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkYmFjay5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 1829:
/*!******************************************************************!*\
  !*** ./src/app/component/feedbacklist/feedbacklist.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbacklistComponent": () => (/* binding */ FeedbacklistComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_inventory_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/inventory.service */ 7447);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function FeedbacklistComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const f_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](f_r1.feedback_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](f_r1.feedback_emaill);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](f_r1.feedback_message);
} }
class FeedbacklistComponent {
    constructor(inventoryservice) {
        this.inventoryservice = inventoryservice;
        this.inventoryservice.getfeedback().subscribe((res) => {
            this.frods = res;
        });
    }
    ngOnInit() {
    }
}
FeedbacklistComponent.ɵfac = function FeedbacklistComponent_Factory(t) { return new (t || FeedbacklistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_inventory_service__WEBPACK_IMPORTED_MODULE_0__.InventoryService)); };
FeedbacklistComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FeedbacklistComponent, selectors: [["app-feedbacklist"]], decls: 11, vars: 1, consts: [["id", "dtBasicExample", "cellspacing", "0", 1, "table", "float-left", "table-danger", "table-hover", "table-striped", "table-bordered", "table-sm", 2, "margin-top", "-600px", "width", "70%", "height", "40%", "margin-left", "320px"], [1, "th-sm"], [4, "ngFor", "ngForOf"]], template: function FeedbacklistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0)(1, "thead")(2, "tr")(3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "FeedbackName ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "FeedbackEmail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, FeedbacklistComponent_tr_10_Template, 7, 3, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.frods);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkYmFja2xpc3QuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 8837:
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _interfaces_feedback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interfaces/feedback */ 5749);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_inventory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/inventory.service */ 7447);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);





class HomeComponent {
    constructor(_inventoryservice, router) {
        this._inventoryservice = _inventoryservice;
        this.router = router;
        this.newrec = new _interfaces_feedback__WEBPACK_IMPORTED_MODULE_0__.Feedback();
        this._inventoryservice.getfeedback().subscribe((res) => {
            this.prods = res;
        });
    }
    add(newrec) {
        this._inventoryservice.addfeedback(newrec).subscribe((res) => {
            if (res == "success") {
                this.prods.push(newrec);
            }
            else {
                alert('error');
            }
        }, () => {
            alert('feedback sent successfully');
            //clear records
            newrec.feedback_name = "";
            newrec.feedback_emaill = "";
            newrec.feedback_message = "";
        });
    }
    donate() {
        this.router.navigate(['uservalidation']);
    }
    receive() {
        this.router.navigate(['uservalidation1']);
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_inventory_service__WEBPACK_IMPORTED_MODULE_1__.InventoryService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 240, vars: 3, consts: [[1, "card", "card-image", "img-fluid", 2, "background-image", "url('../../../assets/MicrosoftTeams-image\\ \\(4\\).png')", "background-size", "cover", "background-color", "black"], [1, "text-white", "text-center", "rgba-stylish-strong", "py-5", "px-4"], [1, "py-5"], [1, "card-title", "h4", "my-4", "py-2"], [1, "mb-4", "pb-2", "px-md-5", "mx-md-5"], [1, "btn", "btn-danger", 3, "click"], ["id", "container", 1, "container-fluid"], ["id", "prompt", 1, "card", "text-center"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-danger"], ["id", "container2", 1, "container-fluid"], [1, "jumbotron", "jumbotron-fluid", "text-center"], [1, "container"], [1, "display-4"], [1, "dots"], [1, "lead"], [1, "container-fluid", "mb-5"], [1, "card-deck"], [1, "card", "mb-3", "col-md-3"], [1, "view", "overlay"], ["id", "card1", "src", "../../../assets/component.jpg", "alt", "Card image cap", 1, "card-img-top"], ["href", "#!"], [1, "mask", "rgba-white-slight"], ["src", "../../../assets/component1.jpg", "alt", "Card image cap", 1, "card-img-top", 2, "height", "231px"], ["src", "../../../assets/component2.jpg", "alt", "Card image cap", 1, "card-img-top", 2, "height", "231px"], ["src", "../../../assets/component3.jpg", "alt", "Card image cap", 1, "card-img-top", 2, "height", "231px"], [1, "row"], [1, "col-sm-6", "col-md-6"], [1, "p-1"], [1, "streak", "grey", "lighten-3"], [1, "flex-center"], [1, "mb-0", "list-unstyled"], [1, "h2-responsive"], ["aria-hidden", "true", 1, "fas", "fa-quote-left"], ["aria-hidden", "true", 1, "fas", "fa-quote-right"], [1, "streak", "lighten-3"], [1, "mb-0"], [1, "text-center", "font-italic", "mb-0"], [1, "card"], [1, "card-header", "danger-color", "white-text", "text-center", "py-4"], [1, "card-body", "px-lg-5", "pt-0"], ["action", "#!", 1, "text-center", 2, "color", "#757575"], [1, "form-row"], [1, "col"], [1, "md-form"], ["for", "materialRegisterFormFirstName"], ["type", "text", "name", "name", "id", "materialRegisterFormFirstName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "materialRegisterFormEmail"], ["type", "email", "name", "email", "id", "materialRegisterFormEmail", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "materialContactFormMessage"], ["id", "materialContactFormMessage", "name", "message", "rows", "3", 1, "form-control", "md-textarea", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-danger", "btn-rounded", "btn-block", "my-4", "waves-effect", "z-depth-0", 3, "click"], ["id", "container2", 1, "container-fluid", "mb-5"], [1, "card", "card-cascade", "narrower", "mb-6"], [1, "view", "view-cascade", "overlay"], ["src", "https://mdbootstrap.com/img/Photos/Others/men.jpg", "alt", "Card image cap", 1, "card-img-top"], [1, "card-body", "card-body-cascade", "text-center"], [1, "font-weight-bold", "indigo-text", "py-2"], ["type", "button", 1, "btn-floating", "btn-small", "btn-fb"], [1, "fab", "fa-facebook-f"], ["type", "button", 1, "btn-floating", "btn-small", "btn-tw"], [1, "fab", "fa-twitter"], ["type", "button", 1, "btn-floating", "btn-small", "btn-instagram"], [1, "fab", "fa-instagram"], ["src", "https://mdbootstrap.com/img/Photos/Others/photo6.jpg", "alt", "Card image cap", 1, "card-img-top"], [1, "jumbotron", "text-center", "grey", "darken-3", "white-text", "mx-2", "mb-5"], [1, "card-title", "h2"], [1, "pt-2"], ["type", "button", 1, "btn", "btn-danger", "btn-rounded"], [1, "my-4", "rgba-white-light"], [1, "page-footer", "font-small", "danger-color", "pt-4"], [1, "container-fluid", "text-center", "text-md-left"], [1, "col-md-6", "mt-md-0", "mt-3"], [1, "text-uppercase"], [1, "clearfix", "w-100", "d-md-none", "pb-3"], [1, "col-md-3", "mb-md-0", "mb-3"], [1, "list-unstyled"], ["href", "www.Sparity.com"], [1, "fas", "fa-envelope-open", "mr-3"], [1, "fas", "fa-location-arrow", "mr-3"], [1, "fas", "fa-tty", "mr-3"], [1, "col-md-12", "py-5"], [1, "mb-5", "flex-center"], [1, "fb-ic"], [1, "fab", "fa-facebook-f", "fa-lg", "white-text", "mr-md-5", "mr-3", "fa-2x"], [1, "tw-ic"], [1, "fab", "fa-twitter", "fa-lg", "white-text", "mr-md-5", "mr-3", "fa-2x"], [1, "gplus-ic"], [1, "fab", "fa-google-plus-g", "fa-lg", "white-text", "mr-md-5", "mr-3", "fa-2x"], [1, "li-ic"], [1, "fab", "fa-linkedin-in", "fa-lg", "white-text", "mr-md-5", "mr-3", "fa-2x"], [1, "ins-ic"], [1, "fab", "fa-instagram", "fa-lg", "white-text", "mr-md-5", "mr-3", "fa-2x"], [1, "pin-ic"], [1, "fab", "fa-pinterest", "fa-lg", "white-text", "fa-2x"], [1, "footer-copyright", "text-center", "py-3"], ["href", "index.html"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "DONATE BLOOD, SAVE LIFE!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "DONATE YOUR BLOOD AND INSPIRE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "OTHERS TO DONATE.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_9_listener() { return ctx.donate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "DONATE BLOOD");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_11_listener() { return ctx.receive(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "I NEED BLOOD");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6)(14, "div", 7)(15, "div", 8)(16, "h4", 9)(17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "WE ARE HERE FOR HELPING PEOPLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "You can give blood at any of our blood donation venues. We have several donor centers and visit other vanues on various occassions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "REQUEST BLOOD");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 12)(24, "div", 13)(25, "div", 14)(26, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "DONATION PROCESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "hr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "The donation process from the time you arrive at center until the time you leave");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 18)(32, "div", 19)(33, "div", 20)(34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 8)(39, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "REGISTRATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "You need to complete a very simple registration form which contatins all required contact information to enter in the donation process.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 20)(44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 8)(49, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "SCREENING");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "A drop of blood from your finger will be taken for a simple test to ensure that your blood levels are proper enough for donation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 20)(54, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 8)(59, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "DONATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "After passing screening test successfully you will be directed to a donor bed for donation. It will take only 6-10 minutes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 20)(64, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 8)(69, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "REFRESHMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "you can also stay in the sitting room until you feel strong enough to leave the center. You will receive refreshments in the donation zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 18)(74, "div", 28)(75, "div", 29)(76, "section", 30)(77, "div", 31)(78, "div", 32)(79, "ul", 33)(80, "li")(81, "h2", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, " A single pint can save three lives. A single gesture can create a million smiles. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "section", 30)(86, "div", 37)(87, "div", 32)(88, "ul", 33)(89, "li")(90, "h2", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, " Bring a life back to power. Make blood donation your responsibility ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "li", 38)(95, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "~ American Red Cross");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 29)(98, "div", 40)(99, "h5", 41)(100, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "FEEDBACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 42)(103, "form", 43)(104, "div", 44)(105, "div", 45)(106, "div", 46)(107, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_109_listener($event) { return ctx.newrec.feedback_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 44)(111, "div", 45)(112, "div", 46)(113, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_115_listener($event) { return ctx.newrec.feedback_emaill = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 46)(117, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "textarea", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_textarea_ngModelChange_119_listener($event) { return ctx.newrec.feedback_message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_120_listener() { return ctx.add(ctx.newrec); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "FEEDBACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "div", 13)(123, "div", 14)(124, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "OUR VOLUNTEERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](126, "hr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "The volunteers who give their talent and time to fulfill the mission.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 54)(130, "div", 14)(131, "div", 19)(132, "div", 55)(133, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](134, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](136, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "div", 58)(138, "h4", 9)(139, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "Joy Dey");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "h6", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, "Web developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](146, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](148, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](150, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "div", 55)(152, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](153, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](155, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "div", 58)(157, "h4", 9)(158, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "Kalyanjit Das");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "h6", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, "Web developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](165, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](167, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](169, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 12)(171, "div", 67)(172, "h2", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "JOIN WITH US AND SAVE LIFE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "div", 69)(175, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, "BECOME A VOLUNTEER");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](177, "hr", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "footer", 72)(179, "div", 73)(180, "div", 28)(181, "div", 74)(182, "h5", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](183, "Lets make all Bonded");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](185, "Bonded is a web based blood Donation platform which connects thousands of blood donors in three simple steps. Bonded ensures hassle free blood donation and privacy of a blood donor. A blood donor can select any specific date and location to donate blood and find a suitable person who needs blood. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](186, "hr", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "div", 77)(188, "h5", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "ul", 78)(191, "li")(192, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](193, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](194, "www.Sparity.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "li")(196, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](197, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](198, "MADHAPUR,500081");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "li")(200, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](201, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](202, "+91-6372438128");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "div", 77)(204, "h5", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](205, "Support Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](206, "ul", 78)(207, "li")(208, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](209, "Link 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "li")(211, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](212, "Link 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](213, "li")(214, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](215, "Link 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "li")(217, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](218, "Credits");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](219, "div", 14)(220, "div", 28)(221, "div", 83)(222, "div", 84)(223, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](224, "i", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](225, "a", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](226, "i", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](227, "a", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](228, "i", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](229, "a", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](230, "i", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](231, "a", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](232, "i", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](233, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](234, "i", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](236, "\u00A9 2019 Copyright: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](237, "a", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](238, " Bonded");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](239, " All Rights Reserved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.newrec.feedback_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.newrec.feedback_emaill);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.newrec.feedback_message);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], styles: [".post-entry-1[_ngcontent-%COMP%] {\r\n  margin-bottom: 30px;\r\n}\r\n.post-entry-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin-bottom: 30px;\r\n}\r\n.post-entry-1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  font-size: 20px;\r\n  font-weight: 500;\r\n  line-height: 1.2;\r\n  font-weight: 500;\r\n}\r\n.post-entry-1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: var(--color-black);\r\n}\r\n.post-entry-1.lg[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 40px;\r\n  line-height: 1;\r\n}\r\n.post-meta[_ngcontent-%COMP%] {\r\n  font-size: 11px;\r\n  letter-spacing: 0.07rem;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n  font-family: var(--font-secondary);\r\n  color: rgba(var(--color-black-rgb), 0.4);\r\n  margin-bottom: 10px;\r\n}\r\n@media (max-width: 768px) {\r\n  .custom-border[_ngcontent-%COMP%] {\r\n    border: none !important;\r\n  }\r\n}\r\n.author[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\r\n.author[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 40px;\r\n  border-radius: 50%;\r\n  margin-bottom: 0;\r\n}\r\n.author[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 15px;\r\n  font-family: var(--font-secondary);\r\n}\r\n.trending[_ngcontent-%COMP%] {\r\n  border: 1px solid rgba(var(--color-black-rgb), 0.1);\r\n}\r\n.trending[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\r\n  color: var(--color-black);\r\n  padding: 20px;\r\n  border-bottom: 1px solid rgba(var(--color-black-rgb), 0.1);\r\n}\r\n.trending[_ngcontent-%COMP%]   .trending-post[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n.trending[_ngcontent-%COMP%]   .trending-post[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n  display: block;\r\n}\r\n.trending[_ngcontent-%COMP%]   .trending-post[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  padding: 20px;\r\n  border-bottom: 1px solid rgba(var(--color-black-rgb), 0.1);\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.trending[_ngcontent-%COMP%]   .trending-post[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  z-index: -1;\r\n  font-size: 5rem;\r\n  left: -10px;\r\n  top: -20px;\r\n  font-weight: 700;\r\n  color: rgba(var(--color-black-rgb), 0.05);\r\n}\r\n.trending[_ngcontent-%COMP%]   .trending-post[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: rgba(var(--color-black-rgb), 0.9);\r\n}\r\n.trending[_ngcontent-%COMP%]   .trending-post[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%] {\r\n  color: rgba(var(--color-black-rgb), 0.7);\r\n  font-weight: 500;\r\n}\r\n.trending[_ngcontent-%COMP%]   .trending-post[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%] {\r\n  color: rgba(var(--color-black-rgb), 1);\r\n}\r\n.trending[_ngcontent-%COMP%]   .trending-post[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%] {\r\n  border-bottom: none;\r\n}\r\n.post-entry-2[_ngcontent-%COMP%] {\r\n  margin-bottom: 30px;\r\n}\r\n.post-entry-2[_ngcontent-%COMP%]   .post-meta[_ngcontent-%COMP%] {\r\n  font-size: 11px;\r\n  letter-spacing: 0.07rem;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n  font-family: var(--font-secondary);\r\n  color: rgba(var(--color-black-rgb), 0.4);\r\n  margin-bottom: 10px;\r\n}\r\n.post-entry-2[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%] {\r\n  color: rgba(var(--color-black-rgb), 0.7);\r\n  font-weight: 500;\r\n  margin-bottom: 20px;\r\n  display: block;\r\n}\r\n.post-entry-2[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\r\n  flex: 0 0 65%;\r\n}\r\n@media (max-width: 960px) {\r\n  .post-entry-2[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\r\n    flex: 0 0 100%;\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n.post-entry-2.half[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\r\n  flex: 0 0 50%;\r\n}\r\n@media (max-width: 768px) {\r\n  .post-entry-2.half[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\r\n    flex: 0 0 100%;\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n.post-entry-2.small-img[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\r\n  flex: 0 0 30%;\r\n}\r\n@media (max-width: 768px) {\r\n  .post-entry-2.small-img[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\r\n    flex: 0 0 100%;\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n.img-bg[_ngcontent-%COMP%] {\r\n  height: 500px;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  position: relative;\r\n  background-position: center center;\r\n}\r\n@media (max-width: 768px) {\r\n  .img-bg[_ngcontent-%COMP%] {\r\n    height: 400px;\r\n  }\r\n}\r\n.img-bg[_ngcontent-%COMP%]:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  background: black;\r\n  background: linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0) 100%);\r\n  opacity: 0.5;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n  top: 0;\r\n}\r\n.img-bg[_ngcontent-%COMP%]   .img-bg-inner[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 2;\r\n  max-width: 700px;\r\n  position: relative;\r\n  padding-left: 100px;\r\n  padding-right: 100px;\r\n  margin-bottom: 50px;\r\n}\r\n@media (max-width: 768px) {\r\n  .img-bg[_ngcontent-%COMP%]   .img-bg-inner[_ngcontent-%COMP%] {\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n    margin-bottom: 50px;\r\n  }\r\n}\r\n.img-bg[_ngcontent-%COMP%]   .img-bg-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .img-bg[_ngcontent-%COMP%]   .img-bg-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: var(--color-white);\r\n}\r\n@media (max-width: 500px) {\r\n  .img-bg[_ngcontent-%COMP%]   .img-bg-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n.custom-swiper-button-next[_ngcontent-%COMP%], .custom-swiper-button-prev[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  z-index: 9;\r\n}\r\n@media (max-width: 768px) {\r\n  .custom-swiper-button-next[_ngcontent-%COMP%], .custom-swiper-button-prev[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n.custom-swiper-button-next[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .custom-swiper-button-prev[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  color: rgba(var(--color-white-rgb), 0.7);\r\n  transition: 0.3s all ease;\r\n}\r\n.custom-swiper-button-next[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .custom-swiper-button-next[_ngcontent-%COMP%]:focus   span[_ngcontent-%COMP%], .custom-swiper-button-prev[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .custom-swiper-button-prev[_ngcontent-%COMP%]:focus   span[_ngcontent-%COMP%] {\r\n  color: rgba(var(--color-white-rgb), 1);\r\n}\r\n.custom-swiper-button-next[_ngcontent-%COMP%] {\r\n  right: 40px;\r\n}\r\n.custom-swiper-button-prev[_ngcontent-%COMP%] {\r\n  left: 40px;\r\n}\r\n.swiper-pagination[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\r\n  background-color: rgba(var(--color-white-rgb), 0.8);\r\n}\r\n.swiper-pagination[_ngcontent-%COMP%]   .swiper-pagination-bullet-active[_ngcontent-%COMP%] {\r\n  background-color: rgba(var(--color-white-rgb), 1);\r\n}\r\n.more[_ngcontent-%COMP%] {\r\n  font-family: var(--font-secondary);\r\n  text-transform: uppercase;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  position: relative;\r\n  display: inline-block;\r\n  padding-bottom: 5px;\r\n}\r\n.more[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  height: 2px;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: var(--color-black);\r\n}\r\n.post-content[_ngcontent-%COMP%] {\r\n  padding-left: 10%;\r\n  padding-right: 10%;\r\n}\r\n@media (max-width: 768px) {\r\n  .post-content[_ngcontent-%COMP%] {\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n  }\r\n}\r\n.post-content[_ngcontent-%COMP%]   .firstcharacter[_ngcontent-%COMP%] {\r\n  float: left;\r\n  font-family: Georgia;\r\n  font-size: 75px;\r\n  line-height: 60px;\r\n  padding-top: 4px;\r\n  padding-right: 8px;\r\n  padding-left: 3px;\r\n}\r\n.post-content[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  left: 52%;\r\n  min-width: 990px;\r\n  transform: translateX(-50%);\r\n}\r\n@media (max-width: 1255px) {\r\n  .post-content[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\r\n    min-width: auto;\r\n    left: auto !important;\r\n    transform: none;\r\n  }\r\n}\r\n.post-content[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\r\n  font-family: var(--font-secondary);\r\n  font-size: 14px;\r\n  padding: 10px 0 0 0;\r\n}\r\n.aside-title[_ngcontent-%COMP%], .category-title[_ngcontent-%COMP%] {\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1rem;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  margin-bottom: 30px;\r\n  border-bottom: 2px solid var(--color-black);\r\n}\r\n.category-title[_ngcontent-%COMP%] {\r\n  border-bottom: none;\r\n}\r\n.custom-pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  text-align: center;\r\n  border-radius: 50%;\r\n  font-family: var(--font-secondary);\r\n  margin: 5px;\r\n  transition: 0.3s all ease;\r\n}\r\n.custom-pagination[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n  background: var(--color-black);\r\n  color: var(--color-white);\r\n}\r\n.custom-pagination[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:hover {\r\n  background: rgba(var(--color-black-rgb), 0.9);\r\n}\r\n.custom-pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background: rgba(var(--color-black-rgb), 0.1);\r\n}\r\n.custom-pagination[_ngcontent-%COMP%]   a.prev[_ngcontent-%COMP%], .custom-pagination[_ngcontent-%COMP%]   a.next[_ngcontent-%COMP%] {\r\n  width: auto !important;\r\n  border-radius: 4px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n.custom-pagination[_ngcontent-%COMP%]   a.prev[_ngcontent-%COMP%]:hover, .custom-pagination[_ngcontent-%COMP%]   a.next[_ngcontent-%COMP%]:hover {\r\n  background: rgba(var(--color-black-rgb), 0.1);\r\n}\r\n\r\n.aside-block[_ngcontent-%COMP%] {\r\n  margin-bottom: 30px;\r\n}\r\n.aside-block[_ngcontent-%COMP%]   .custom-tab-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n.aside-block[_ngcontent-%COMP%]   .custom-tab-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  color: var(--color-black);\r\n  text-transform: uppercase;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  letter-spacing: 2px;\r\n  border-radius: 0;\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  margin-right: 20px;\r\n}\r\n.aside-block[_ngcontent-%COMP%]   .custom-tab-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\r\n  background-color: var(--color-black) !important;\r\n  background-color: transparent !important;\r\n  color: var(--color-black);\r\n  border-bottom: 2px solid var(--color-black);\r\n}\r\n.link-video[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n.link-video[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  position: absolute;\r\n  width: 50px;\r\n  height: 50px;\r\n  line-height: 50px;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  display: inline-block;\r\n  background-color: rgba(var(--color-black-rgb), 0.2);\r\n  color: var(--color-white);\r\n}\r\n.aside-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n  padding-bottom: 10px;\r\n  border-bottom: 1px solid rgba(var(--color-black-rgb), 0.1);\r\n}\r\n.aside-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  color: rgba(var(--color-black-rgb), 0.7);\r\n}\r\n.aside-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .aside-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\r\n  color: rgba(var(--color-black-rgb), 1);\r\n}\r\n.aside-tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n.aside-tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  color: rgba(var(--color-black-rgb), 0.7);\r\n  padding: 7px 10px;\r\n  border: 1px solid rgba(var(--color-black-rgb), 0.1);\r\n  margin-bottom: 3px;\r\n  transition: 0.3s all ease;\r\n}\r\n.aside-tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .aside-tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\r\n  color: rgba(var(--color-black-rgb), 1);\r\n  border: 1px solid rgba(var(--color-black-rgb), 0.5);\r\n}\r\n\r\n.comment[_ngcontent-%COMP%] {\r\n  \r\n}\r\n.comment[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 3rem;\r\n  height: 3rem;\r\n}\r\n.comment[_ngcontent-%COMP%]   .avatar-img[_ngcontent-%COMP%], .comment[_ngcontent-%COMP%]   .avatar-initials[_ngcontent-%COMP%], .comment[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: inherit;\r\n}\r\n.comment[_ngcontent-%COMP%]   .avatar-img[_ngcontent-%COMP%] {\r\n  display: block;\r\n  object-fit: cover;\r\n}\r\n.comment[_ngcontent-%COMP%]   .avatar-initials[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: var(--color-white);\r\n  line-height: 0;\r\n  background-color: rgba(var(--color-black-rgba), 0.1);\r\n}\r\n.comment[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background: rgba(var(--color-black-rgba), 0.1) url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='%23fff' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'/%3e%3c/svg%3e\") no-repeat center/1.75rem;\r\n}\r\n.comment[_ngcontent-%COMP%]   .avatar-indicator[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: 20%;\r\n  height: 20%;\r\n  display: block;\r\n  background-color: rgba(var(--color-black-rgba), 0.1);\r\n  border-radius: 50%;\r\n}\r\n.comment[_ngcontent-%COMP%]   .avatar-group[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n}\r\n.comment[_ngcontent-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]    + .avatar[_ngcontent-%COMP%] {\r\n  margin-left: -0.75rem;\r\n}\r\n.comment[_ngcontent-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]:hover {\r\n  z-index: 1;\r\n}\r\n.comment[_ngcontent-%COMP%]   .avatar-sm[_ngcontent-%COMP%], .comment[_ngcontent-%COMP%]   .avatar-group-sm[_ngcontent-%COMP%]    > .avatar[_ngcontent-%COMP%] {\r\n  width: 2.125rem;\r\n  height: 2.125rem;\r\n  font-size: 1rem;\r\n}\r\n.comment[_ngcontent-%COMP%]   .avatar-sm[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%], .comment[_ngcontent-%COMP%]   .avatar-group-sm[_ngcontent-%COMP%]    > .avatar[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\r\n  background-size: 1.25rem;\r\n}\r\n.comment[_ngcontent-%COMP%]   .avatar-group-sm[_ngcontent-%COMP%]    > .avatar[_ngcontent-%COMP%]    + .avatar[_ngcontent-%COMP%] {\r\n  margin-left: -0.53125rem;\r\n}\r\n.comment[_ngcontent-%COMP%]   .avatar-lg[_ngcontent-%COMP%], .comment[_ngcontent-%COMP%]   .avatar-group-lg[_ngcontent-%COMP%]    > .avatar[_ngcontent-%COMP%] {\r\n  width: 4rem;\r\n  height: 4rem;\r\n  font-size: 1.5rem;\r\n}\r\n.comment[_ngcontent-%COMP%]   .avatar-lg[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%], .comment[_ngcontent-%COMP%]   .avatar-group-lg[_ngcontent-%COMP%]    > .avatar[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\r\n  background-size: 2.25rem;\r\n}\r\n.comment[_ngcontent-%COMP%]   .avatar-group-lg[_ngcontent-%COMP%]    > .avatar[_ngcontent-%COMP%]    + .avatar[_ngcontent-%COMP%] {\r\n  margin-left: -1rem;\r\n}\r\n.comment[_ngcontent-%COMP%]   .avatar-light[_ngcontent-%COMP%]   .avatar-indicator[_ngcontent-%COMP%] {\r\n  box-shadow: 0 0 0 2px rgba(var(--color-white-rgba), 0.75);\r\n}\r\n.comment[_ngcontent-%COMP%]   .avatar-group-light[_ngcontent-%COMP%]    > .avatar[_ngcontent-%COMP%] {\r\n  box-shadow: 0 0 0 2px rgba(var(--color-white-rgba), 0.75);\r\n}\r\n.comment[_ngcontent-%COMP%]   .avatar-dark[_ngcontent-%COMP%]   .avatar-indicator[_ngcontent-%COMP%] {\r\n  box-shadow: 0 0 0 2px rgba(var(--color-black-rgba), 0.25);\r\n}\r\n.comment[_ngcontent-%COMP%]   .avatar-group-dark[_ngcontent-%COMP%]    > .avatar[_ngcontent-%COMP%] {\r\n  box-shadow: 0 0 0 2px rgba(var(--color-black-rgba), 0.25);\r\n}\r\n.comment[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  font-family: inherit;\r\n}\r\n.comment[_ngcontent-%COMP%]   .comment-replies-title[_ngcontent-%COMP%], .comment[_ngcontent-%COMP%]   .comment-title[_ngcontent-%COMP%] {\r\n  text-transform: uppercase;\r\n  color: var(--color-black) !important;\r\n  letter-spacing: 0.1rem;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  margin-bottom: 30px;\r\n}\r\n.comment[_ngcontent-%COMP%]   .comment-meta[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%], .comment[_ngcontent-%COMP%]   .reply-meta[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\r\n  font-family: var(--font-secondary);\r\n  font-size: 12px;\r\n}\r\n\r\n.contact[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n.contact[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 48px;\r\n  display: inline-block;\r\n  margin-bottom: 10px;\r\n  color: var(--color-primary);\r\n}\r\n.contact[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   address[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n}\r\n.contact[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  margin-bottom: 15px;\r\n  font-weight: bold;\r\n  letter-spacing: 0.1rem;\r\n  text-transform: uppercase;\r\n  color: var(--color-primary);\r\n}\r\n.contact[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: var(--color-primary);\r\n}\r\n@media (min-width: 768px) {\r\n  .contact[_ngcontent-%COMP%]   .info-item-borders[_ngcontent-%COMP%] {\r\n    border-left: 1px solid rgba(var(--color-secondary-rgb), 0.2);\r\n    border-right: 1px solid rgba(var(--color-secondary-rgb), 0.2);\r\n  }\r\n}\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%] {\r\n  box-shadow: 0 0 30px rgba(var(--color-black-rgb), 0.1);\r\n  padding: 30px;\r\n  background: var(--color-white);\r\n}\r\n@media (max-width: 640px) {\r\n  .contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n  }\r\n}\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\r\n  display: none;\r\n  color: var(--color-white);\r\n  background: var(--color-red);\r\n  text-align: left;\r\n  padding: 15px;\r\n  font-weight: 600;\r\n}\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   br[_ngcontent-%COMP%]    + br[_ngcontent-%COMP%] {\r\n  margin-top: 25px;\r\n}\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   .sent-message[_ngcontent-%COMP%] {\r\n  display: none;\r\n  color: var(--color-white);\r\n  background: var(--color-green);\r\n  text-align: center;\r\n  padding: 15px;\r\n  font-weight: 600;\r\n}\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\r\n  display: none;\r\n  background: var(--color-white);\r\n  text-align: center;\r\n  padding: 15px;\r\n}\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  border-radius: 50%;\r\n  width: 24px;\r\n  height: 24px;\r\n  margin: 0 10px -6px 0;\r\n  border: 3px solid var(--color-green);\r\n  border-top-color: var(--color-white);\r\n  animation: animate-loading 1s linear infinite;\r\n}\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  padding: 10px 14px;\r\n  border-radius: 0;\r\n  box-shadow: none;\r\n  font-size: 15px;\r\n}\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::focus, .contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::focus {\r\n  background-color: var(--color-primary);\r\n}\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%] {\r\n  background: var(--color-primary);\r\n  border: 0;\r\n  padding: 10px 30px;\r\n  color: #fff;\r\n  transition: 0.4s;\r\n  cursor: pointer;\r\n}\r\n.contact[_ngcontent-%COMP%]   .php-email-form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]:hover {\r\n  background: rgba(var(--color-primary-rgb), 0.8);\r\n}\r\n@keyframes animate-loading {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n#container[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n#container2[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  padding: 0;\r\n}\r\n#prompt[_ngcontent-%COMP%] {\r\n  background-color: #eaeaea;\r\n}\r\n.dots[_ngcontent-%COMP%] {\r\n  color: #ff3547;\r\n  height: 3px;\r\n  border-width: 0 0 3px;\r\n  border-style: solid;\r\n  border-image: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 1\" width=\"8\" height=\"4\"><circle fill=\"#{$color}\" cx=\"1\" cy=\"0.5\" r=\"0.5\"/></svg>') 0 0 100% repeat;\r\n  width: 150px;\r\n}\r\n.btn-rounded[_ngcontent-%COMP%] {\r\n  border-radius: 10em;\r\n}\r\n.streak[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: block;\r\n  height: 250px;\r\n  overflow: hidden;\r\n  padding: 3rem;\r\n}\r\n.p-1[_ngcontent-%COMP%] {\r\n  margin: 0.25rem !important;\r\n}\r\n.card-cascade[_ngcontent-%COMP%]   .view.view-cascade[_ngcontent-%COMP%] {\r\n  border-radius: .25rem;\r\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\r\n}\r\n.view[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  overflow: hidden;\r\n  cursor: default;\r\n  padding: 15px;\r\n}\r\n.mask[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n.view[_ngcontent-%COMP%]   .mask[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  background-attachment: fixed;\r\n}\r\n.waves-effect[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n.rgba-white-slight[_ngcontent-%COMP%], .rgba-white-slight[_ngcontent-%COMP%]:after {\r\n  background-color: rgba(255, 255, 255, 0.1);\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n  margin-left: 5px;\r\n  background-color: d20003 !important;\r\n}\r\n.btn-floating[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 1;\r\n  display: inline-block;\r\n  padding: 0;\r\n  margin: 10px;\r\n  overflow: hidden;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n  border-radius: 50%;\r\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\r\n  transition: all 0.2s ease-in-out;\r\n  width: 47px;\r\n  height: 47px;\r\n}\r\n.waves-effect[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n.btn-floating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 1.25rem;\r\n  line-height: 47px;\r\n  display: inline-block;\r\n  width: inherit;\r\n  color: #fff;\r\n  text-align: center;\r\n}\r\n.btn-fb[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background-color: #3b5998 !important;\r\n}\r\n.btn-tw[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background-color: #55acee !important;\r\n}\r\n.btn-instagram[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background-color: #ec4a89 !important;\r\n}\r\n.card-cascade.narrower[_ngcontent-%COMP%]   .view.view-cascade[_ngcontent-%COMP%] {\r\n  margin-top: -1.25rem;\r\n  margin-right: 4%;\r\n  margin-left: 4%;\r\n}\r\n.card-cascade.narrower[_ngcontent-%COMP%] {\r\n  margin-top: 1.25rem;\r\n}\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  height: 100%;\r\n  width: 100%; \r\n  background: #FFF;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 400;\r\n}\r\n.wrapper[_ngcontent-%COMP%] {\r\n  display: table;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n.container-fostrap[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  padding: 1em;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n}\r\n.fostrap-logo[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  margin-bottom:15px\r\n}\r\nh1.heading[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  font-size: 1.15em;\r\n  font-weight: 900;\r\n  margin: 0 0 0.5em;\r\n  color: #505050;\r\n}\r\n@media (min-width: 450px) {\r\n  h1.heading[_ngcontent-%COMP%] {\r\n    font-size: 3.55em;\r\n  }\r\n}\r\n@media (min-width: 760px) {\r\n  h1.heading[_ngcontent-%COMP%] {\r\n    font-size: 3.05em;\r\n  }\r\n}\r\n@media (min-width: 900px) {\r\n  h1.heading[_ngcontent-%COMP%] {\r\n    font-size: 3.25em;\r\n    margin: 0 0 0.3em;\r\n  }\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  display: block; \r\n    margin-bottom: 20px;\r\n    line-height: 1.42857143;\r\n    background-color: #fff;\r\n    border-radius: 2px;\r\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); \r\n    transition: box-shadow .25s;\r\n    padding: 30px;\r\n}\r\n.card[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n}\r\n.img-card[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height:200px;\r\n  border-top-left-radius:2px;\r\n  border-top-right-radius:2px;\r\n  display:block;\r\n    overflow: hidden;\r\n}\r\n.img-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 200px;\r\n  object-fit:cover; \r\n  transition: all .25s ease;\r\n}\r\n.card-content[_ngcontent-%COMP%] {\r\n  padding:15px;\r\n  text-align:left;\r\n}\r\n.card-title[_ngcontent-%COMP%] {\r\n  margin-top:0px;\r\n  font-weight: 700;\r\n  font-size: 1.60em;\r\n  \r\n}\r\n.card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  text-decoration: none !important;\r\n  \r\n}\r\n.card-read-more[_ngcontent-%COMP%] {\r\n  border-top: 1px solid #D4D4D4;\r\n}\r\n.card-read-more[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none !important;\r\n  padding:10px;\r\n  font-weight:600;\r\n  text-transform: uppercase\r\n}\r\n#card1[_ngcontent-%COMP%]{\r\n  height: 228px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLHdDQUF3QztFQUN4QyxtQkFBbUI7QUFDckI7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0FBQ0Y7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZUFBZTtFQUNmLGtDQUFrQztBQUNwQztBQUVBO0VBQ0UsbURBQW1EO0FBQ3JEO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLDBEQUEwRDtBQUM1RDtBQUNBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDtBQUNBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYiwwREFBMEQ7RUFDMUQsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIseUNBQXlDO0FBQzNDO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSx3Q0FBd0M7RUFDeEMsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLHdDQUF3QztFQUN4QyxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHdDQUF3QztFQUN4QyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtFQUFrRTtFQUNsRSxZQUFZO0VBQ1osU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVTtFQUNWLE1BQU07QUFDUjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjtBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsMkJBQTJCO0VBQzNCLFVBQVU7QUFDWjtBQUNBO0VBQ0U7O0lBRUUsYUFBYTtFQUNmO0FBQ0Y7QUFDQTs7RUFFRSxlQUFlO0VBQ2Ysd0NBQXdDO0VBQ3hDLHlCQUF5QjtBQUMzQjtBQUNBOzs7RUFHRSxzQ0FBc0M7QUFDeEM7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxtREFBbUQ7QUFDckQ7QUFDQTtFQUNFLGlEQUFpRDtBQUNuRDtBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjtBQUNGO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7QUFDRjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsMkNBQTJDO0FBQzdDO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLDZDQUE2QztBQUMvQztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSw2Q0FBNkM7QUFDL0M7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLCtDQUErQztFQUMvQyx3Q0FBd0M7RUFDeEMseUJBQXlCO0VBQ3pCLDJDQUEyQztBQUM3QztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbURBQW1EO0VBQ25ELHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQiwwREFBMEQ7QUFDNUQ7QUFDQTtFQUNFLGNBQWM7RUFDZCx3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLHNDQUFzQztBQUN4QztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsd0NBQXdDO0VBQ3hDLGlCQUFpQjtFQUNqQixtREFBbUQ7RUFDbkQsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usc0NBQXNDO0VBQ3RDLG1EQUFtRDtBQUNyRDtBQUVBOzsrREFFK0Q7QUFDL0Q7RUFDRSwwREFBMEQ7QUFDNUQ7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBOzs7RUFHRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsY0FBYztFQUVkLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxvREFBb0Q7QUFDdEQ7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLDZQQUE2UDtBQUMvUDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsb0RBQW9EO0VBQ3BELGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBOztFQUVFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBOztFQUVFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFDQTs7RUFFRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UseURBQXlEO0FBQzNEO0FBQ0E7RUFDRSx5REFBeUQ7QUFDM0Q7QUFDQTtFQUNFLHlEQUF5RDtBQUMzRDtBQUNBO0VBQ0UseURBQXlEO0FBQzNEO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTs7RUFFRSx5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLGtDQUFrQztFQUNsQyxlQUFlO0FBQ2pCO0FBRUE7OytEQUUrRDtBQUMvRDtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFO0lBQ0UsNERBQTREO0lBQzVELDZEQUE2RDtFQUMvRDtBQUNGO0FBQ0E7RUFDRSxzREFBc0Q7RUFDdEQsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsb0NBQW9DO0VBQ3BDLG9DQUFvQztFQUVwQyw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsU0FBUztFQUNULGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLCtDQUErQztBQUNqRDtBQVNBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGO0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQiwrTEFBK0w7RUFDL0wsWUFBWTtBQUNkO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0UscUJBQXFCO0VBRXJCLDhFQUE4RTtBQUNoRjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsYUFBYTtBQUNmO0FBRUE7RUFDRSxVQUFVO0VBRVYsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBR3pCLGlCQUFpQjtFQUNqQix3Q0FBd0M7QUFDMUM7QUFFQTs7RUFFRSwwQ0FBMEM7QUFDNUM7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQ0FBbUM7QUFDckM7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysa0JBQWtCO0VBRWxCLDhFQUE4RTtFQUU5RSxnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBR3pCLGlCQUFpQjtFQUNqQix3Q0FBd0M7QUFDMUM7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUlBOztFQUdPLHNCQUFzQjtFQUMzQixZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1o7QUFDRjtBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtBQUNGO0FBQ0E7RUFDRSxjQUFjO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHNFQUFzRTtJQUN0RSwyQkFBMkI7SUFDM0IsYUFBYTtBQUNqQjtBQUNBO0VBQ0Usc0VBQXNFO0FBQ3hFO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsYUFBYTtJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7O0FBRW5CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0NBQWdDOztBQUVsQztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLGVBQWU7RUFDZjtBQUNGO0FBQ0E7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtZW50cnktMSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4ucG9zdC1lbnRyeS0xIGltZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4ucG9zdC1lbnRyeS0xIGgyIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4ucG9zdC1lbnRyeS0xIGgyIGEge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XHJcbn1cclxuLnBvc3QtZW50cnktMS5sZyBoMiB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG4ucG9zdC1tZXRhIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDdyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNlY29uZGFyeSk7XHJcbiAgY29sb3I6IHJnYmEodmFyKC0tY29sb3ItYmxhY2stcmdiKSwgMC40KTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY3VzdG9tLWJvcmRlciB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5hdXRob3IgLnBob3RvIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmF1dGhvciAucGhvdG8gaW1nIHtcclxuICB3aWR0aDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uYXV0aG9yIC5uYW1lIGgzIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Vjb25kYXJ5KTtcclxufVxyXG5cclxuLnRyZW5kaW5nIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWNvbG9yLWJsYWNrLXJnYiksIDAuMSk7XHJcbn1cclxuLnRyZW5kaW5nID4gaDMge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSh2YXIoLS1jb2xvci1ibGFjay1yZ2IpLCAwLjEpO1xyXG59XHJcbi50cmVuZGluZyAudHJlbmRpbmctcG9zdCB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLnRyZW5kaW5nIC50cmVuZGluZy1wb3N0IGxpIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi50cmVuZGluZyAudHJlbmRpbmctcG9zdCBsaSBhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKHZhcigtLWNvbG9yLWJsYWNrLXJnYiksIDAuMSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnRyZW5kaW5nIC50cmVuZGluZy1wb3N0IGxpIGEgLm51bWJlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIGZvbnQtc2l6ZTogNXJlbTtcclxuICBsZWZ0OiAtMTBweDtcclxuICB0b3A6IC0yMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYmEodmFyKC0tY29sb3ItYmxhY2stcmdiKSwgMC4wNSk7XHJcbn1cclxuLnRyZW5kaW5nIC50cmVuZGluZy1wb3N0IGxpIGEgaDMge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogcmdiYSh2YXIoLS1jb2xvci1ibGFjay1yZ2IpLCAwLjkpO1xyXG59XHJcbi50cmVuZGluZyAudHJlbmRpbmctcG9zdCBsaSBhIC5hdXRob3Ige1xyXG4gIGNvbG9yOiByZ2JhKHZhcigtLWNvbG9yLWJsYWNrLXJnYiksIDAuNyk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4udHJlbmRpbmcgLnRyZW5kaW5nLXBvc3QgbGkgYTpob3ZlciBoMyB7XHJcbiAgY29sb3I6IHJnYmEodmFyKC0tY29sb3ItYmxhY2stcmdiKSwgMSk7XHJcbn1cclxuLnRyZW5kaW5nIC50cmVuZGluZy1wb3N0IGxpOmxhc3QtY2hpbGQgYSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLnBvc3QtZW50cnktMiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4ucG9zdC1lbnRyeS0yIC5wb3N0LW1ldGEge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wN3JlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Vjb25kYXJ5KTtcclxuICBjb2xvcjogcmdiYSh2YXIoLS1jb2xvci1ibGFjay1yZ2IpLCAwLjQpO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnBvc3QtZW50cnktMiAuYXV0aG9yIHtcclxuICBjb2xvcjogcmdiYSh2YXIoLS1jb2xvci1ibGFjay1yZ2IpLCAwLjcpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ucG9zdC1lbnRyeS0yIC50aHVtYm5haWwge1xyXG4gIGZsZXg6IDAgMCA2NSU7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgLnBvc3QtZW50cnktMiAudGh1bWJuYWlsIHtcclxuICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbn1cclxuLnBvc3QtZW50cnktMi5oYWxmIC50aHVtYm5haWwge1xyXG4gIGZsZXg6IDAgMCA1MCU7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnBvc3QtZW50cnktMi5oYWxmIC50aHVtYm5haWwge1xyXG4gICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxufVxyXG4ucG9zdC1lbnRyeS0yLnNtYWxsLWltZyAudGh1bWJuYWlsIHtcclxuICBmbGV4OiAwIDAgMzAlO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5wb3N0LWVudHJ5LTIuc21hbGwtaW1nIC50aHVtYm5haWwge1xyXG4gICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmltZy1iZyB7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmltZy1iZyB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gIH1cclxufVxyXG4uaW1nLWJnOmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIGJsYWNrIDAlLCByZ2JhKDAsIDAsIDAsIDApIDEwMCUpO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogMDtcclxufVxyXG4uaW1nLWJnIC5pbWctYmctaW5uZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuaW1nLWJnIC5pbWctYmctaW5uZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG59XHJcbi5pbWctYmcgLmltZy1iZy1pbm5lciBoMiwgLmltZy1iZyAuaW1nLWJnLWlubmVyIHAge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLmltZy1iZyAuaW1nLWJnLWlubmVyIHAge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5jdXN0b20tc3dpcGVyLWJ1dHRvbi1uZXh0LFxyXG4uY3VzdG9tLXN3aXBlci1idXR0b24tcHJldiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB6LWluZGV4OiA5O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jdXN0b20tc3dpcGVyLWJ1dHRvbi1uZXh0LFxyXG4uY3VzdG9tLXN3aXBlci1idXR0b24tcHJldiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4uY3VzdG9tLXN3aXBlci1idXR0b24tbmV4dCBzcGFuLFxyXG4uY3VzdG9tLXN3aXBlci1idXR0b24tcHJldiBzcGFuIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHJnYmEodmFyKC0tY29sb3Itd2hpdGUtcmdiKSwgMC43KTtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xyXG59XHJcbi5jdXN0b20tc3dpcGVyLWJ1dHRvbi1uZXh0OmhvdmVyIHNwYW4sIC5jdXN0b20tc3dpcGVyLWJ1dHRvbi1uZXh0OmZvY3VzIHNwYW4sXHJcbi5jdXN0b20tc3dpcGVyLWJ1dHRvbi1wcmV2OmhvdmVyIHNwYW4sXHJcbi5jdXN0b20tc3dpcGVyLWJ1dHRvbi1wcmV2OmZvY3VzIHNwYW4ge1xyXG4gIGNvbG9yOiByZ2JhKHZhcigtLWNvbG9yLXdoaXRlLXJnYiksIDEpO1xyXG59XHJcblxyXG4uY3VzdG9tLXN3aXBlci1idXR0b24tbmV4dCB7XHJcbiAgcmlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20tc3dpcGVyLWJ1dHRvbi1wcmV2IHtcclxuICBsZWZ0OiA0MHB4O1xyXG59XHJcblxyXG4uc3dpcGVyLXBhZ2luYXRpb24gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1jb2xvci13aGl0ZS1yZ2IpLCAwLjgpO1xyXG59XHJcbi5zd2lwZXItcGFnaW5hdGlvbiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1jb2xvci13aGl0ZS1yZ2IpLCAxKTtcclxufVxyXG5cclxuLm1vcmUge1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNlY29uZGFyeSk7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuLm1vcmU6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ibGFjayk7XHJcbn1cclxuXHJcbi5wb3N0LWNvbnRlbnQge1xyXG4gIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAucG9zdC1jb250ZW50IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG59XHJcbi5wb3N0LWNvbnRlbnQgLmZpcnN0Y2hhcmFjdGVyIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBmb250LWZhbWlseTogR2VvcmdpYTtcclxuICBmb250LXNpemU6IDc1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgcGFkZGluZy10b3A6IDRweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbn1cclxuLnBvc3QtY29udGVudCBmaWd1cmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA1MiU7XHJcbiAgbWluLXdpZHRoOiA5OTBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyNTVweCkge1xyXG4gIC5wb3N0LWNvbnRlbnQgZmlndXJlIHtcclxuICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbn1cclxuLnBvc3QtY29udGVudCBmaWd1cmUgZmlnY2FwdGlvbiB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Vjb25kYXJ5KTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcGFkZGluZzogMTBweCAwIDAgMDtcclxufVxyXG5cclxuLmFzaWRlLXRpdGxlLCAuY2F0ZWdvcnktdGl0bGUge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ibGFjayk7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS10aXRsZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLmN1c3RvbS1wYWdpbmF0aW9uIGEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zZWNvbmRhcnkpO1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XHJcbn1cclxuLmN1c3RvbS1wYWdpbmF0aW9uIGEuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ibGFjayk7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcclxufVxyXG4uY3VzdG9tLXBhZ2luYXRpb24gYS5hY3RpdmU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tY29sb3ItYmxhY2stcmdiKSwgMC45KTtcclxufVxyXG4uY3VzdG9tLXBhZ2luYXRpb24gYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1jb2xvci1ibGFjay1yZ2IpLCAwLjEpO1xyXG59XHJcbi5jdXN0b20tcGFnaW5hdGlvbiBhLnByZXYsIC5jdXN0b20tcGFnaW5hdGlvbiBhLm5leHQge1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5jdXN0b20tcGFnaW5hdGlvbiBhLnByZXY6aG92ZXIsIC5jdXN0b20tcGFnaW5hdGlvbiBhLm5leHQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tY29sb3ItYmxhY2stcmdiKSwgMC4xKTtcclxufVxyXG5cclxuLyogY3VzdG9tIHRhYiBuYXYgb24gc2lkZWJhciAqL1xyXG4uYXNpZGUtYmxvY2sge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLmFzaWRlLWJsb2NrIC5jdXN0b20tdGFiLW5hdiAubmF2LWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uYXNpZGUtYmxvY2sgLmN1c3RvbS10YWItbmF2IC5uYXYtaXRlbSBidXR0b24ge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5hc2lkZS1ibG9jayAuY3VzdG9tLXRhYi1uYXYgLm5hdi1pdGVtIGJ1dHRvbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3ItYmxhY2spO1xyXG59XHJcblxyXG4ubGluay12aWRlbyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5saW5rLXZpZGVvIHNwYW4ge1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tY29sb3ItYmxhY2stcmdiKSwgMC4yKTtcclxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xyXG59XHJcblxyXG4uYXNpZGUtbGlua3MgbGkge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEodmFyKC0tY29sb3ItYmxhY2stcmdiKSwgMC4xKTtcclxufVxyXG4uYXNpZGUtbGlua3MgbGkgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6IHJnYmEodmFyKC0tY29sb3ItYmxhY2stcmdiKSwgMC43KTtcclxufVxyXG4uYXNpZGUtbGlua3MgbGkgYTpob3ZlciwgLmFzaWRlLWxpbmtzIGxpIGE6Zm9jdXMge1xyXG4gIGNvbG9yOiByZ2JhKHZhcigtLWNvbG9yLWJsYWNrLXJnYiksIDEpO1xyXG59XHJcblxyXG4uYXNpZGUtdGFncyBsaSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5hc2lkZS10YWdzIGxpIGEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogcmdiYSh2YXIoLS1jb2xvci1ibGFjay1yZ2IpLCAwLjcpO1xyXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0tY29sb3ItYmxhY2stcmdiKSwgMC4xKTtcclxuICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZTtcclxufVxyXG4uYXNpZGUtdGFncyBsaSBhOmhvdmVyLCAuYXNpZGUtdGFncyBsaSBhOmZvY3VzIHtcclxuICBjb2xvcjogcmdiYSh2YXIoLS1jb2xvci1ibGFjay1yZ2IpLCAxKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWNvbG9yLWJsYWNrLXJnYiksIDAuNSk7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuIyBDb21tZW50c1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5jb21tZW50IHtcclxuICAvKiBGb250IG5vdCB3b3JraW5nIGluIDx0ZXh0YXJlYT4gZm9yIHRoaXMgdmVyc2lvbiBvZiBicyAqL1xyXG59XHJcbi5jb21tZW50IC5hdmF0YXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDNyZW07XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG59XHJcbi5jb21tZW50IC5hdmF0YXItaW1nLFxyXG4uY29tbWVudCAuYXZhdGFyLWluaXRpYWxzLFxyXG4uY29tbWVudCAuYXZhdGFyLXBsYWNlaG9sZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcclxufVxyXG4uY29tbWVudCAuYXZhdGFyLWltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuLmNvbW1lbnQgLmF2YXRhci1pbml0aWFscyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tY29sb3ItYmxhY2stcmdiYSksIDAuMSk7XHJcbn1cclxuLmNvbW1lbnQgLmF2YXRhci1wbGFjZWhvbGRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tY29sb3ItYmxhY2stcmdiYSksIDAuMSkgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMCAyMCclM2UlM2NwYXRoIGZpbGw9JyUyM2ZmZicgZD0nTTEwIDlhMyAzIDAgMTAwLTYgMyAzIDAgMDAwIDZ6bS03IDlhNyA3IDAgMTExNCAwSDN6Jy8lM2UlM2Mvc3ZnJTNlXCIpIG5vLXJlcGVhdCBjZW50ZXIvMS43NXJlbTtcclxufVxyXG4uY29tbWVudCAuYXZhdGFyLWluZGljYXRvciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMjAlO1xyXG4gIGhlaWdodDogMjAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tY29sb3ItYmxhY2stcmdiYSksIDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5jb21tZW50IC5hdmF0YXItZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcbi5jb21tZW50IC5hdmF0YXItZ3JvdXAgLmF2YXRhciArIC5hdmF0YXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMC43NXJlbTtcclxufVxyXG4uY29tbWVudCAuYXZhdGFyLWdyb3VwIC5hdmF0YXI6aG92ZXIge1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLmNvbW1lbnQgLmF2YXRhci1zbSxcclxuLmNvbW1lbnQgLmF2YXRhci1ncm91cC1zbSA+IC5hdmF0YXIge1xyXG4gIHdpZHRoOiAyLjEyNXJlbTtcclxuICBoZWlnaHQ6IDIuMTI1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG4uY29tbWVudCAuYXZhdGFyLXNtIC5hdmF0YXItcGxhY2Vob2xkZXIsXHJcbi5jb21tZW50IC5hdmF0YXItZ3JvdXAtc20gPiAuYXZhdGFyIC5hdmF0YXItcGxhY2Vob2xkZXIge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMS4yNXJlbTtcclxufVxyXG4uY29tbWVudCAuYXZhdGFyLWdyb3VwLXNtID4gLmF2YXRhciArIC5hdmF0YXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMC41MzEyNXJlbTtcclxufVxyXG4uY29tbWVudCAuYXZhdGFyLWxnLFxyXG4uY29tbWVudCAuYXZhdGFyLWdyb3VwLWxnID4gLmF2YXRhciB7XHJcbiAgd2lkdGg6IDRyZW07XHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcbi5jb21tZW50IC5hdmF0YXItbGcgLmF2YXRhci1wbGFjZWhvbGRlcixcclxuLmNvbW1lbnQgLmF2YXRhci1ncm91cC1sZyA+IC5hdmF0YXIgLmF2YXRhci1wbGFjZWhvbGRlciB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAyLjI1cmVtO1xyXG59XHJcbi5jb21tZW50IC5hdmF0YXItZ3JvdXAtbGcgPiAuYXZhdGFyICsgLmF2YXRhciB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xcmVtO1xyXG59XHJcbi5jb21tZW50IC5hdmF0YXItbGlnaHQgLmF2YXRhci1pbmRpY2F0b3Ige1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKHZhcigtLWNvbG9yLXdoaXRlLXJnYmEpLCAwLjc1KTtcclxufVxyXG4uY29tbWVudCAuYXZhdGFyLWdyb3VwLWxpZ2h0ID4gLmF2YXRhciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEodmFyKC0tY29sb3Itd2hpdGUtcmdiYSksIDAuNzUpO1xyXG59XHJcbi5jb21tZW50IC5hdmF0YXItZGFyayAuYXZhdGFyLWluZGljYXRvciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEodmFyKC0tY29sb3ItYmxhY2stcmdiYSksIDAuMjUpO1xyXG59XHJcbi5jb21tZW50IC5hdmF0YXItZ3JvdXAtZGFyayA+IC5hdmF0YXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKHZhcigtLWNvbG9yLWJsYWNrLXJnYmEpLCAwLjI1KTtcclxufVxyXG4uY29tbWVudCB0ZXh0YXJlYSB7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbn1cclxuLmNvbW1lbnQgLmNvbW1lbnQtcmVwbGllcy10aXRsZSxcclxuLmNvbW1lbnQgLmNvbW1lbnQtdGl0bGUge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKSAhaW1wb3J0YW50O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4uY29tbWVudCAuY29tbWVudC1tZXRhIC50ZXh0LW11dGVkLFxyXG4uY29tbWVudCAucmVwbHktbWV0YSAudGV4dC1tdXRlZCB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Vjb25kYXJ5KTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuIyBDb250YWN0XHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLmNvbnRhY3QgLmluZm8taXRlbSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb250YWN0IC5pbmZvLWl0ZW0gaSB7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxufVxyXG4uY29udGFjdCAuaW5mby1pdGVtIGFkZHJlc3MsIC5jb250YWN0IC5pbmZvLWl0ZW0gcCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uY29udGFjdCAuaW5mby1pdGVtIGgzIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbi5jb250YWN0IC5pbmZvLWl0ZW0gYTpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250YWN0IC5pbmZvLWl0ZW0tYm9yZGVycyB7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEodmFyKC0tY29sb3Itc2Vjb25kYXJ5LXJnYiksIDAuMik7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKHZhcigtLWNvbG9yLXNlY29uZGFyeS1yZ2IpLCAwLjIpO1xyXG4gIH1cclxufVxyXG4uY29udGFjdCAucGhwLWVtYWlsLWZvcm0ge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEodmFyKC0tY29sb3ItYmxhY2stcmdiKSwgMC4xKTtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXdoaXRlKTtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAuY29udGFjdCAucGhwLWVtYWlsLWZvcm0ge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbn1cclxuLmNvbnRhY3QgLnBocC1lbWFpbC1mb3JtIC5lcnJvci1tZXNzYWdlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcmVkKTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uY29udGFjdCAucGhwLWVtYWlsLWZvcm0gLmVycm9yLW1lc3NhZ2UgYnIgKyBiciB7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG4uY29udGFjdCAucGhwLWVtYWlsLWZvcm0gLnNlbnQtbWVzc2FnZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWdyZWVuKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5jb250YWN0IC5waHAtZW1haWwtZm9ybSAubG9hZGluZyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci13aGl0ZSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLmNvbnRhY3QgLnBocC1lbWFpbC1mb3JtIC5sb2FkaW5nOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBtYXJnaW46IDAgMTBweCAtNnB4IDA7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItZ3JlZW4pO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZS1sb2FkaW5nIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IGFuaW1hdGUtbG9hZGluZyAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuLmNvbnRhY3QgLnBocC1lbWFpbC1mb3JtIC5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5jb250YWN0IC5waHAtZW1haWwtZm9ybSBpbnB1dCwgLmNvbnRhY3QgLnBocC1lbWFpbC1mb3JtIHRleHRhcmVhIHtcclxuICBwYWRkaW5nOiAxMHB4IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uY29udGFjdCAucGhwLWVtYWlsLWZvcm0gaW5wdXQ6OmZvY3VzLCAuY29udGFjdCAucGhwLWVtYWlsLWZvcm0gdGV4dGFyZWE6OmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxufVxyXG4uY29udGFjdCAucGhwLWVtYWlsLWZvcm0gYnV0dG9uW3R5cGU9c3VibWl0XSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY29udGFjdCAucGhwLWVtYWlsLWZvcm0gYnV0dG9uW3R5cGU9c3VibWl0XTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1jb2xvci1wcmltYXJ5LXJnYiksIDAuOCk7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGUtbG9hZGluZyB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBhbmltYXRlLWxvYWRpbmcge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NvbnRhaW5lcjIge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuI3Byb21wdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcclxufVxyXG5cclxuLmRvdHMge1xyXG4gIGNvbG9yOiAjZmYzNTQ3O1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIGJvcmRlci13aWR0aDogMCAwIDNweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyIDFcIiB3aWR0aD1cIjhcIiBoZWlnaHQ9XCI0XCI+PGNpcmNsZSBmaWxsPVwiI3skY29sb3J9XCIgY3g9XCIxXCIgY3k9XCIwLjVcIiByPVwiMC41XCIvPjwvc3ZnPicpIDAgMCAxMDAlIHJlcGVhdDtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5idG4tcm91bmRlZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBlbTtcclxufVxyXG5cclxuLnN0cmVhayB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAzcmVtO1xyXG59XHJcblxyXG4ucC0xIHtcclxuICBtYXJnaW46IDAuMjVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtY2FzY2FkZSAudmlldy52aWV3LWNhc2NhZGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICBib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbn1cclxuXHJcbi52aWV3IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLm1hc2sge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnZpZXcgLm1hc2sge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxufVxyXG5cclxuLndhdmVzLWVmZmVjdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnJnYmEtd2hpdGUtc2xpZ2h0LFxyXG4ucmdiYS13aGl0ZS1zbGlnaHQ6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxufVxyXG4uYnRue1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZDIwMDAzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tZmxvYXRpbmcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICBib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICB3aWR0aDogNDdweDtcclxuICBoZWlnaHQ6IDQ3cHg7XHJcbn1cclxuXHJcbi53YXZlcy1lZmZlY3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5idG4tZmxvYXRpbmcgaSB7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiA0N3B4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogaW5oZXJpdDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4tZmIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi10dyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1YWNlZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLWluc3RhZ3JhbSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjNGE4OSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1jYXNjYWRlLm5hcnJvd2VyIC52aWV3LnZpZXctY2FzY2FkZSB7XHJcbiAgbWFyZ2luLXRvcDogLTEuMjVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiA0JTtcclxuICBtYXJnaW4tbGVmdDogNCU7XHJcbn1cclxuLmNhcmQtY2FzY2FkZS5uYXJyb3dlciB7XHJcbiAgbWFyZ2luLXRvcDogMS4yNXJlbTtcclxufVxyXG5cclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsMTAwLDkwMCk7XHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTsgXHJcbiAgYmFja2dyb3VuZDogI0ZGRjtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4gXHJcbi53cmFwcGVyIHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXItZm9zdHJhcCB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLmZvc3RyYXAtbG9nbyB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206MTVweFxyXG59XHJcbmgxLmhlYWRpbmcge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMS4xNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgbWFyZ2luOiAwIDAgMC41ZW07XHJcbiAgY29sb3I6ICM1MDUwNTA7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDQ1MHB4KSB7XHJcbiAgaDEuaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDMuNTVlbTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2MHB4KSB7XHJcbiAgaDEuaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDMuMDVlbTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgaDEuaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDMuMjVlbTtcclxuICAgIG1hcmdpbjogMCAwIDAuM2VtO1xyXG4gIH1cclxufSBcclxuLmNhcmQge1xyXG4gIGRpc3BsYXk6IGJsb2NrOyBcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsMCwwLDAuMTYpLDAgMnB4IDEwcHggMCByZ2JhKDAsMCwwLDAuMTIpOyBcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjI1cztcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuLmNhcmQ6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE3cHggMCByZ2JhKDAsMCwwLDAuMiksMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XHJcbn1cclxuLmltZy1jYXJkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6MjAwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoycHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MnB4O1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5pbWctY2FyZCBpbWd7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBvYmplY3QtZml0OmNvdmVyOyBcclxuICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xyXG59IFxyXG4uY2FyZC1jb250ZW50IHtcclxuICBwYWRkaW5nOjE1cHg7XHJcbiAgdGV4dC1hbGlnbjpsZWZ0O1xyXG59XHJcbi5jYXJkLXRpdGxlIHtcclxuICBtYXJnaW4tdG9wOjBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMS42MGVtO1xyXG4gIFxyXG59XHJcbi5jYXJkLXRpdGxlIGEge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIFxyXG59XHJcbi5jYXJkLXJlYWQtbW9yZSB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNENEQ0RDQ7XHJcbn1cclxuLmNhcmQtcmVhZC1tb3JlIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6MTBweDtcclxuICBmb250LXdlaWdodDo2MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxyXG59XHJcbiNjYXJkMXtcclxuICBoZWlnaHQ6IDIyOHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 1697:
/*!**********************************************************!*\
  !*** ./src/app/component/mainpage/mainpage.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainpageComponent": () => (/* binding */ MainpageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class MainpageComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainpageComponent.ɵfac = function MainpageComponent_Factory(t) { return new (t || MainpageComponent)(); };
MainpageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainpageComponent, selectors: [["app-mainpage"]], decls: 2, vars: 0, template: function MainpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "mainpage works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWlucGFnZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 8202:
/*!**************************************************************************!*\
  !*** ./src/app/component/mobilevalidation/mobilevalidation.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobilevalidationComponent": () => (/* binding */ MobilevalidationComponent)
/* harmony export */ });
/* harmony import */ var _interfaces_mobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interfaces/mobile */ 5327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_mobile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/mobile.service */ 1323);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);






function MobilevalidationComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter 10 Digit Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MobilevalidationComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class MobilevalidationComponent {
    constructor(mobile, router) {
        this.mobile = mobile;
        this.router = router;
        this.mrec = new _interfaces_mobile__WEBPACK_IMPORTED_MODULE_0__.Mobile();
    }
    change1(mrec) {
        this.mobile.get(mrec.mobile_no).subscribe((res) => {
            //alert(res.data);
            if (res.status == 'success') {
                localStorage.setItem('OTP', res.data.OTP);
                localStorage.setItem('mobile', res.data.mb);
                this.router.navigate(['otpverification']);
            }
            else {
                alert('you are not registered');
                //clear rec
                this.mrec.mobile_no = null;
            }
        }, () => {
            alert('task completed');
            this.mrec.mobile_no = null;
        });
    }
    ngOnInit() {
    }
    keyPress(event) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
}
MobilevalidationComponent.ɵfac = function MobilevalidationComponent_Factory(t) { return new (t || MobilevalidationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_mobile_service__WEBPACK_IMPORTED_MODULE_1__.MobileService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
MobilevalidationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MobilevalidationComponent, selectors: [["app-mobilevalidation"]], decls: 14, vars: 3, consts: [[1, "container", "vh-100", "d-flex", "justify-content-center", "align-items-center"], [1, "card", "py-4", "px-4"], [1, "text-center"], ["src", "../../../assets/mobile-icon.png", "width", "60"], [1, "text-center", "mb-3"], [1, "info-text"], [1, "position-relative", "mb-3", "form-input"], ["minlength", "10", "maxlength", "10", "required", "", "minlength", "10", "maxlength", "10", 1, "form-control", 3, "ngModel", "keypress", "ngModelChange"], ["model3", "ngModel"], ["style", "color: red", 4, "ngIf"], [1, "btn", "btn-danger", 3, "click"], [2, "color", "red"]], template: function MobilevalidationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Please enter your mobile number to Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function MobilevalidationComponent_Template_input_keypress_8_listener($event) { return ctx.keyPress($event); })("ngModelChange", function MobilevalidationComponent_Template_input_ngModelChange_8_listener($event) { return ctx.mrec.mobile_no = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MobilevalidationComponent_div_10_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, MobilevalidationComponent_div_11_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MobilevalidationComponent_Template_button_click_12_listener() { return ctx.change1(ctx.mrec); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.mrec.mobile_no);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.hasError("required"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: [".class1[_ngcontent-%COMP%]\r\n{\r\n    border: 2px solid;\r\n    background-color: rgb(211, 181, 143);\r\n    color: black;\r\n    box-shadow: 0px 5px 20px 0px #6F1667;\r\n    width: 500px;\r\n    height: 300px;\r\n    margin-left: 400px;\r\n    margin-top: 100px;\r\n    font-size: 20px;\r\n    padding: 20px;\r\n}\r\n.class1[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]{\r\n    width: 400px;\r\n    padding: 20px;\r\n    margin: 20px;\r\n    height: 30px;\r\n    margin-left: 30px;\r\n}\r\n.class1[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]{\r\n    width:auto;\r\n    height: 40px;\r\n    margin-top: 40px;\r\n    margin-left: 180px;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    box-shadow: 5px 5px 10px 5px #9cc6ed;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYmlsZXZhbGlkYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG9DQUFvQztBQUN4QyIsImZpbGUiOiJtb2JpbGV2YWxpZGF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xhc3MxXHJcbntcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMSwgMTgxLCAxNDMpO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAyMHB4IDBweCAjNkYxNjY3O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG4uY2xhc3MxID4gaW5wdXR7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuLmNsYXNzMSA+IGJ1dHRvbntcclxuICAgIHdpZHRoOmF1dG87XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE4MHB4O1xyXG59XHJcbi5jYXJke1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDVweCAjOWNjNmVkO1xyXG59Il19 */"] });


/***/ }),

/***/ 2732:
/*!****************************************************!*\
  !*** ./src/app/component/order/order.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderComponent": () => (/* binding */ OrderComponent)
/* harmony export */ });
/* harmony import */ var src_app_interfaces_order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/order */ 3755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/order.service */ 2909);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);




class OrderComponent {
    constructor(order) {
        this.order = order;
        this.rec = new src_app_interfaces_order__WEBPACK_IMPORTED_MODULE_0__.Order();
    }
    add(rec) {
        this.order.add(rec).subscribe((res) => {
            if (res.order_id !== 0) {
                alert(res.order_id);
                // var id=res.order_id;
                localStorage.setItem('id', res.order_id);
            }
        }, () => {
            alert('task completed');
            this.rec.amount = null;
        });
    }
    pay() {
    }
    ngOnInit() {
    }
}
OrderComponent.ɵfac = function OrderComponent_Factory(t) { return new (t || OrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_order_service__WEBPACK_IMPORTED_MODULE_1__.OrderService)); };
OrderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OrderComponent, selectors: [["app-root"]], decls: 5, vars: 1, consts: [["type", "number", "placeholder", "Enter Your Amount", 3, "ngModel", "ngModelChange"], [3, "click"]], template: function OrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OrderComponent_Template_input_ngModelChange_1_listener($event) { return ctx.rec.amount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderComponent_Template_button_click_3_listener() { return ctx.add(ctx.rec); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "SEND");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.rec.amount);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 965:
/*!**********************************************************************!*\
  !*** ./src/app/component/otpvalidation1/otpvalidation1.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Otpvalidation1Component": () => (/* binding */ Otpvalidation1Component)
/* harmony export */ });
/* harmony import */ var src_app_interfaces_mobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/mobile */ 5327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_mobile1_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/mobile1.service */ 8211);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);






function Otpvalidation1Component_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter 10 Digit Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function Otpvalidation1Component_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class Otpvalidation1Component {
    constructor(mobile, router) {
        this.mobile = mobile;
        this.router = router;
        this.rec = new src_app_interfaces_mobile__WEBPACK_IMPORTED_MODULE_0__.Mobile();
    }
    verify(otp, rec) {
        var pass = localStorage.getItem('UserOTP');
        if (pass == otp) {
            alert('Your validation successfull then fill registration form');
            this.router.navigate(['benfsignup']);
            this.mobile.post(rec).subscribe((res) => {
                if (res.status == 'success') {
                    this.prods.push(rec);
                    // this.router.navigate(['signup']);
                }
                else {
                    alert('error');
                }
            });
        }
        else {
            alert('error');
        }
    }
    resend() {
        var mobile_no = Number(localStorage.getItem('mobileno'));
        // alert(mobile_no);
        this.mobile.get(mobile_no).subscribe((res) => {
            if (res.status == 'success') {
                // alert(res.data.OTP);
                // alert(res.data.mb);
                localStorage.setItem('UserOTP1', res.data.OTP);
                localStorage.setItem('mobileno1', res.data.mb);
                this.router.navigate(['otpvalidation']);
            }
            else {
                alert('you are already register goto login page and login');
            }
        });
    }
    ngOnInit() {
    }
    keyPress(event) {
        const pattern = /[0-6\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    keyPress1(event) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
}
Otpvalidation1Component.ɵfac = function Otpvalidation1Component_Factory(t) { return new (t || Otpvalidation1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_mobile1_service__WEBPACK_IMPORTED_MODULE_1__.Mobile1Service), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
Otpvalidation1Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Otpvalidation1Component, selectors: [["app-otpvalidation1"]], decls: 22, vars: 4, consts: [["id", "app"], [1, "container", "height-100", "d-flex", "justify-content-center", "align-items-center"], [1, "position-relative"], [1, "card", "p-2", "text-center"], [1, "position-relative", "mt-3", "form-input"], ["minlength", "10", "maxlength", "10", "name", "mobile_no", "required", "", "minlength", "10", "maxlength", "10", 1, "form-control", 3, "ngModel", "keypress", "ngModelChange"], ["model3", "ngModel"], ["style", "color: red", 4, "ngIf"], ["id", "otp", "name", "number", 1, "inputs", "d-flex", "flex-row", "justify-content-center", "mt-2"], ["minlength", "2", "maxlength", "6", "v-on:keyup", "inputenter(4)", "type", "text", "id", "input4", "maxlength", "6", 1, "m-2", "text-center", "form-control", "rounded", 3, "ngModel", "ngModelChange", "keypress"], [1, "mt-4"], [1, "btn", "btn-danger", "px-4", "validate", 3, "click"], [1, "mt-3", "content", "d-flex", "justify-content-center", "align-items-center"], [1, "text-decoration-none", "ms-3", "btn", "btn-danger", 3, "click"], [2, "color", "red"]], template: function Otpvalidation1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Please enter the one time password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function Otpvalidation1Component_Template_input_keypress_8_listener($event) { return ctx.keyPress($event); })("ngModelChange", function Otpvalidation1Component_Template_input_ngModelChange_8_listener($event) { return ctx.rec.mobile_no = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, Otpvalidation1Component_div_10_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, Otpvalidation1Component_div_11_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8)(13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function Otpvalidation1Component_Template_input_ngModelChange_13_listener($event) { return ctx.otp = $event; })("keypress", function Otpvalidation1Component_Template_input_keypress_13_listener($event) { return ctx.keyPress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10)(15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Otpvalidation1Component_Template_button_click_15_listener() { return ctx.verify(ctx.otp, ctx.rec); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Validate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12)(18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Didn't get the code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Otpvalidation1Component_Template_button_click_20_listener() { return ctx.resend(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Resend");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.rec.mobile_no);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.otp);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: [".inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    height: 40px;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    background-color: #6F1667\r\n}\r\n\r\n.height-100[_ngcontent-%COMP%] {\r\n    height: 100vh\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n    border: none;\r\n    height: 300px;\r\n    box-shadow: 0px 5px 20px 0px #6F1667;\r\n    z-index: 1;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n    color: #6F1667;\r\n    font-size: 20px\r\n}\r\n\r\n.inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px\r\n}\r\n\r\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    margin: 0\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n    box-shadow: none;\r\n    border: 2px solid #6F1667\r\n}\r\n\r\n.validate[_ngcontent-%COMP%] {\r\n    border-radius: 20px;\r\n    height: 40px;\r\n    background-color: #6F1667;\r\n    border: 1px solid #6F1667;\r\n    width: 100%\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #D64F4F;\r\n    transition: all 0.5s\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #6F1667\r\n}\r\n\r\n.inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 226px;\r\n    height: 40px;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]{\r\n    width: 260px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cHZhbGlkYXRpb24xLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWDtBQUNKOztBQUVBOztJQUVJLHdCQUF3QjtJQUV4QixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoib3RwdmFsaWRhdGlvbjEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dHMgaW5wdXQge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2RjE2NjdcclxufVxyXG5cclxuLmhlaWdodC0xMDAge1xyXG4gICAgaGVpZ2h0OiAxMDB2aFxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAyMHB4IDBweCAjNkYxNjY3O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxufVxyXG5cclxuLmNhcmQgaDYge1xyXG4gICAgY29sb3I6ICM2RjE2Njc7XHJcbiAgICBmb250LXNpemU6IDIwcHhcclxufVxyXG5cclxuLmlucHV0cyBpbnB1dCB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweFxyXG59XHJcblxyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM2RjE2NjdcclxufVxyXG5cclxuLnZhbGlkYXRlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkYxNjY3O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzZGMTY2NztcclxuICAgIHdpZHRoOiAxMDAlXHJcbn1cclxuXHJcbi5jb250ZW50IGEge1xyXG4gICAgY29sb3I6ICNENjRGNEY7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41c1xyXG59XHJcblxyXG4uY29udGVudCBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNkYxNjY3XHJcbn1cclxuXHJcbi5pbnB1dHMgaW5wdXQge1xyXG4gICAgd2lkdGg6IDIyNnB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgICB3aWR0aDogMjYwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 4456:
/*!********************************************************************!*\
  !*** ./src/app/component/otpvalidation/otpvalidation.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpvalidationComponent": () => (/* binding */ OtpvalidationComponent)
/* harmony export */ });
/* harmony import */ var _interfaces_mobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interfaces/mobile */ 5327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_mobile1_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/mobile1.service */ 8211);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);






function OtpvalidationComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Mobile Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function OtpvalidationComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter 10 Digit Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class OtpvalidationComponent {
    constructor(mobile1, router) {
        this.mobile1 = mobile1;
        this.router = router;
        this.rec = new _interfaces_mobile__WEBPACK_IMPORTED_MODULE_0__.Mobile();
    }
    verify(otp, rec) {
        var pass = localStorage.getItem('UserOTP');
        var pass1 = localStorage.getItem('UserOTP1');
        if (otp == pass1 || pass) {
            alert('Your validation successfull then fill registration form');
            this.router.navigate(['signup']);
            this.mobile1.post(rec).subscribe((res) => {
                if (res.status == 'success') {
                    this.prods.push(rec);
                    // this.router.navigate(['signup']);
                }
                else {
                    alert('error');
                }
            });
        }
        else {
            alert('error');
        }
    }
    resend() {
        var mobile_no = Number(localStorage.getItem('mobileno'));
        // alert(mobile_no);
        this.mobile1.get(mobile_no).subscribe((res) => {
            if (res.status == 'success') {
                // alert(res.data.OTP);
                // alert(res.data.mb);
                localStorage.setItem('UserOTP1', res.data.OTP);
                localStorage.setItem('mobileno1', res.data.mb);
                this.router.navigate(['otpvalidation']);
            }
            else {
                alert('you are already register goto login page and login');
            }
        });
    }
    // verify(otp)
    // {
    //   var pass=localStorage.getItem('UserOTP');
    //   var pass1=Number(localStorage.getItem('mobileno'));
    //   if(pass==otp)
    //   {
    //     alert('Your validation successfull then fill registration form');
    //     this.router.navigate(['signup']);
    //     this.mobile.post(pass1).subscribe(
    //       (res:any)=>{
    //       if(res.status=='success')
    //       {
    //       this.prods.push(pass1);
    //       this.router.navigate(['signup']);
    //       }
    //       else{
    //         alert('error');
    //       }
    //       }
    //     );
    //   }
    //   else{
    //     alert('error');
    //   }
    // }
    ngOnInit() {
    }
    keyPress(event) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    keyPress1(event) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
}
OtpvalidationComponent.ɵfac = function OtpvalidationComponent_Factory(t) { return new (t || OtpvalidationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_mobile1_service__WEBPACK_IMPORTED_MODULE_1__.Mobile1Service), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
OtpvalidationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OtpvalidationComponent, selectors: [["app-otpvalidation"]], decls: 26, vars: 4, consts: [["id", "app", 2, "margin-top", "150px"], [1, "container", "height-100", "d-flex", "justify-content-center", "align-items-center"], [1, "position-relative"], [1, "card", "p-2", "text-center", "bg-info"], [1, "position-relative", "mt-3", "form-input"], ["minlength", "10", "maxlength", "10", "name", "mobile_no", "required", "", "minlength", "10", "maxlength", "10", 1, "form-control", 3, "ngModel", "keypress", "ngModelChange"], ["model3", "ngModel"], ["style", "color: red", 4, "ngIf"], ["id", "otp", 1, "inputs", "d-flex", "flex-row", "justify-content-center", "mt-2", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "input1", "v-on:keyup", "inputenter(1)", "maxlength", "1", 1, "m-2", "text-center", "form-control", "rounded"], ["v-on:keyup", "inputenter(2)", "type", "text", "id", "input2", "maxlength", "1", 1, "m-2", "text-center", "form-control", "rounded"], ["v-on:keyup", "inputenter(3)", "type", "text", "id", "input3", "maxlength", "1", 1, "m-2", "text-center", "form-control", "rounded"], ["v-on:keyup", "inputenter(4)", "type", "text", "id", "input4", "maxlength", "1", 1, "m-2", "text-center", "form-control", "rounded"], [1, "mt-4"], [1, "btn", "btn-danger", "px-4", "validate", 3, "click"], [1, "mt-3", "content", "d-flex", "justify-content-center", "align-items-center"], [1, "text-decoration-none", "ms-3", "text-black"], [3, "click"], [2, "color", "red"]], template: function OtpvalidationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Please enter the one time password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function OtpvalidationComponent_Template_input_keypress_8_listener($event) { return ctx.keyPress($event); })("ngModelChange", function OtpvalidationComponent_Template_input_ngModelChange_8_listener($event) { return ctx.rec.mobile_no = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, OtpvalidationComponent_div_10_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, OtpvalidationComponent_div_11_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OtpvalidationComponent_Template_div_ngModelChange_12_listener($event) { return ctx.otp = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 9)(14, "input", 10)(15, "input", 11)(16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13)(18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OtpvalidationComponent_Template_button_click_18_listener() { return ctx.verify(ctx.otp, ctx.rec); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Validate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 15)(21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Didn't get the code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 16)(24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OtpvalidationComponent_Template_button_click_24_listener() { return ctx.resend(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Resend");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.rec.mobile_no);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.invalid("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.otp);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdHB2YWxpZGF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 5085:
/*!************************************************************************!*\
  !*** ./src/app/component/otpverification/otpverification.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpverificationComponent": () => (/* binding */ OtpverificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _service_mobile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/mobile.service */ 1323);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);




class OtpverificationComponent {
    constructor(router, mobile) {
        this.router = router;
        this.mobile = mobile;
    }
    verify1(otp) {
        var pass = localStorage.getItem('OTP');
        var pass1 = localStorage.getItem('OTP1');
        if (otp == pass || pass1) {
            this.router.navigate(['userpanel']);
        }
    }
    resend() {
        var mobile_no = Number(localStorage.getItem('mobile'));
        this.mobile.get(mobile_no).subscribe((res) => {
            //alert(res.data);
            if (res.status == 'success') {
                localStorage.setItem('OTP1', res.data.OTP);
                localStorage.setItem('mobile1', res.data.mb);
                this.router.navigate(['otpverification']);
            }
            else {
                alert('error');
            }
        });
    }
    ngOnInit() {
    }
    keyPress(event) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
}
OtpverificationComponent.ɵfac = function OtpverificationComponent_Factory(t) { return new (t || OtpverificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_mobile_service__WEBPACK_IMPORTED_MODULE_0__.MobileService)); };
OtpverificationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OtpverificationComponent, selectors: [["app-otpverification"]], decls: 17, vars: 1, consts: [["id", "app"], [1, "container", "height-100", "d-flex", "justify-content-center", "align-items-center"], [1, "position-relative"], [1, "card", "p-2", "text-center"], ["id", "otp", "name", "number", 1, "inputs", "d-flex", "flex-row", "justify-content-center", "mt-2"], ["minlength", "2", "maxlength", "6", "v-on:keyup", "inputenter(4)", "type", "text", "id", "input4", "maxlength", "6", 1, "m-2", "text-center", "form-control", "rounded", 3, "ngModel", "ngModelChange", "keypress"], [1, "mt-4"], [1, "btn", "btn-danger", "px-4", "validate", 3, "click"], [1, "mt-3", "content", "d-flex", "justify-content-center", "align-items-center"], [1, "text-decoration-none", "ms-3", 3, "click"]], template: function OtpverificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Please enter the one time password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OtpverificationComponent_Template_input_ngModelChange_8_listener($event) { return ctx.otp = $event; })("keypress", function OtpverificationComponent_Template_input_keypress_8_listener($event) { return ctx.keyPress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtpverificationComponent_Template_button_click_10_listener() { return ctx.verify1(ctx.otp); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Validate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8)(13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Didn't get the code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtpverificationComponent_Template_a_click_15_listener() { return ctx.resend(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Resend");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.otp);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: ["body[_ngcontent-%COMP%] {\r\n    background-color: #6F1667\r\n}\r\n\r\n.height-100[_ngcontent-%COMP%] {\r\n    height: 100vh\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n    border: none;\r\n    height: 300px;\r\n    box-shadow: 0px 5px 20px 0px #6F1667;\r\n    z-index: 1;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n    color: #6F1667;\r\n    font-size: 20px\r\n}\r\n\r\n.inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px\r\n}\r\n\r\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    margin: 0\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n    box-shadow: none;\r\n    border: 2px solid #6F1667\r\n}\r\n\r\n.validate[_ngcontent-%COMP%] {\r\n    border-radius: 20px;\r\n    height: 40px;\r\n    background-color: #6F1667;\r\n    border: 1px solid #6F1667;\r\n    width: 100%\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #D64F4F;\r\n    transition: all 0.5s\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #6F1667\r\n}\r\n\r\n.inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 226px;\r\n    height: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cHZlcmlmaWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJLGNBQWM7SUFDZDtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYO0FBQ0o7O0FBRUE7O0lBRUksd0JBQXdCO0lBRXhCLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekI7QUFDSjs7QUFFQTtJQUNJLGNBQWM7SUFDZDtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCIiwiZmlsZSI6Im90cHZlcmlmaWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkYxNjY3XHJcbn1cclxuXHJcbi5oZWlnaHQtMTAwIHtcclxuICAgIGhlaWdodDogMTAwdmhcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMjBweCAwcHggIzZGMTY2NztcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbn1cclxuXHJcbi5jYXJkIGg2IHtcclxuICAgIGNvbG9yOiAjNkYxNjY3O1xyXG4gICAgZm9udC1zaXplOiAyMHB4XHJcbn1cclxuXHJcbi5pbnB1dHMgaW5wdXQge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHhcclxufVxyXG5cclxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG1hcmdpbjogMFxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNkYxNjY3XHJcbn1cclxuXHJcbi52YWxpZGF0ZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZGMTY2NztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2RjE2Njc7XHJcbiAgICB3aWR0aDogMTAwJVxyXG59XHJcblxyXG4uY29udGVudCBhIHtcclxuICAgIGNvbG9yOiAjRDY0RjRGO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXNcclxufVxyXG5cclxuLmNvbnRlbnQgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzZGMTY2N1xyXG59XHJcblxyXG4uaW5wdXRzIGlucHV0IHtcclxuICAgIHdpZHRoOiAyMjZweDtcclxuICAgIGhlaWdodDogNDBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 686:
/*!******************************************************!*\
  !*** ./src/app/component/signup/signup.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _interfaces_signup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interfaces/signup */ 9209);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_userstatus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/userstatus.service */ 7719);
/* harmony import */ var _service_signup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/signup.service */ 2169);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_service_gender_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/gender.service */ 5231);
/* harmony import */ var src_app_service_bloodgroup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/bloodgroup.service */ 224);
/* harmony import */ var src_app_service_country_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/country.service */ 7173);
/* harmony import */ var src_app_service_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/state.service */ 8163);
/* harmony import */ var _service_district_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/district.service */ 9453);
/* harmony import */ var src_app_service_area_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/area.service */ 8910);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6362);














function SignupComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", key_r23.gender_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", key_r23.gender_name, "");
} }
function SignupComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Gender required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_option_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", key_r24.bloodgroup_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", key_r24.bloodgroup_name, "");
} }
function SignupComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " BloodGroup required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_option_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", key_r25.country_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", key_r25.country_name, "");
} }
function SignupComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Country required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_option_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", key_r26.state_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", key_r26.state_name, "");
} }
function SignupComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " State required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_option_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", key_r27.district_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", key_r27.district_name, "");
} }
function SignupComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " District required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_option_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", key_r28.area_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", key_r28.area_name, "");
} }
function SignupComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Area required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function SignupComponent_option_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", key_r29.id_user);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", key_r29.user_status, "");
} }
function SignupComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Select You Want to be a Donor or Not. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
class SignupComponent {
    constructor(user, signupservice, router, gender, bloodgroup, country, state, district, area) {
        this.user = user;
        this.signupservice = signupservice;
        this.router = router;
        this.gender = gender;
        this.bloodgroup = bloodgroup;
        this.country = country;
        this.state = state;
        this.district = district;
        this.area = area;
        this._categoryList = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject([]);
        this.categoryList$ = this._categoryList.asObservable();
        this.statebool = false;
        this.newrec = new _interfaces_signup__WEBPACK_IMPORTED_MODULE_0__.Signup();
    }
    add(newrec) {
        this.signupservice.postdetails(newrec).subscribe((res) => {
            if (res == "success") {
                this.prods1.push(newrec);
                this.router.navigate(['mobilevalidation']);
            }
            else {
                console.log('error');
            }
        }, () => {
            alert('signup successfully');
            this.router.navigate(['mobilevalidation']);
            //clear records
            this.newrec.user_fullname = "";
            this.newrec.user_age = null;
            this.newrec.user_gender = null;
            this.newrec.user_bloodgroup = null;
            this.newrec.user_mobile1 = null;
            this.newrec.user_mobile2 = null;
            this.newrec.user_emailid = "";
            this.newrec.user_fulladdress = "";
            this.newrec.user_country = null;
            this.newrec.user_state = null;
            this.newrec.user_district = null;
            this.newrec.user_area = null;
            this.newrec.user_pincode = null;
        });
    }
    // change1()
    // {
    //   this.router.navigate(['userlogin']);
    // }
    ngOnInit() {
        let adminid = localStorage.getItem('adminID');
        this.getaddress();
        this.getgender();
        this.getbloodgroup();
        this.getuserstatus();
    }
    getuserstatus() {
        this.user.get().subscribe((data1) => {
            this.urods = data1.data;
            console.log(data1.data[0].gender_name);
            this._categoryList.next(data1);
        });
    }
    getgender() {
        this.gender.get().subscribe((data1) => {
            this.grods = data1.data;
            console.log(data1.data[0].gender_name);
            this._categoryList.next(data1);
        });
    }
    getbloodgroup() {
        this.bloodgroup.get().subscribe((data1) => {
            this.brods = data1.data;
            console.log(data1.data[0].bloodgroup_name);
            this._categoryList.next(data1);
        });
    }
    getaddress() {
        this.country.get().subscribe((data1) => {
            this.prods = data1.data;
            console.log(data1.data[0].country_name);
            this._categoryList.next(data1);
            this.getstate(data1.data[0].country_id);
        });
    }
    getstate(data) {
        // console.log(data.target.value);
        this.state.get(data).subscribe((data1) => {
            this.srods = data1.data;
            this.statebool = true;
            console.log(data1.data[0].state_name);
            this._categoryList.next(data1);
            this.getdistrict(data1.data[0].state_id);
        });
    }
    getdistrict(data) {
        // console.log(data.target.value);
        this.district.get(data).subscribe((data1) => {
            this.drods = data1.data;
            this.statebool = true;
            console.log(data1.data[0].district_name);
            this._categoryList.next(data1);
            this.getarea(data1.data[0].district_id);
        });
    }
    getarea(data) {
        this.area.get(data).subscribe((data1) => {
            this.arods = data1.data;
            this.statebool = true;
            console.log(data1.data[0].area_name);
            this._categoryList.next(data1);
        });
    }
    keyPress(event) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_userstatus_service__WEBPACK_IMPORTED_MODULE_1__.UserstatusService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_service_signup_service__WEBPACK_IMPORTED_MODULE_2__.SignupService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_gender_service__WEBPACK_IMPORTED_MODULE_3__.GenderService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_bloodgroup_service__WEBPACK_IMPORTED_MODULE_4__.BloodgroupService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_country_service__WEBPACK_IMPORTED_MODULE_5__.CountryService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_state_service__WEBPACK_IMPORTED_MODULE_6__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_service_district_service__WEBPACK_IMPORTED_MODULE_7__.DistrictService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_area_service__WEBPACK_IMPORTED_MODULE_8__.AreaService)); };
SignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 92, vars: 36, consts: [[1, "container", "register"], [1, "row"], [1, "col-md-3", "register-left"], ["src", "https://image.ibb.co/n7oTvU/logo_white.png", "alt", ""], ["type", "submit", "name", "", "value", "Login"], [1, "col-md-9", "register-right"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs", "nav-justified"], [1, "nav-item"], ["id", "home-tab", "data-toggle", "tab", "href", "#home", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active", "w-100", 2, "margin", "0 auto", "margin-top", "10px"], ["id", "myTabContent", 1, "tab-content"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "row", "register-form"], [1, "col-md-6"], [1, "form-group"], ["type", "text", "placeholder", "Enter YourName Name *", "value", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["model", "ngModel"], ["style", "color: red", 4, "ngIf"], ["type", "text", "placeholder", "Enter YourName Age *", "value", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "minlength", "10", "maxlength", "10", "placeholder", "Enter YourName Mobile no. *", "value", "", 1, "form-control", 3, "ngModel", "keypress", "ngModelChange"], ["type", "text", "placeholder", "Enter YourNameAlternative Mobile no. *", "value", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "placeholder", "Your Email *", "value", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "gender", "ngModel", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["gender", "ngModel"], ["disabled", "", 1, "visually-hidden", 3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "bloodgroup", "ngModel", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["bloodgroup", "ngModel"], ["disabled", "", 1, "hidden", 3, "ngValue"], ["name", "country", "ngModel", "", "required", "", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["country", "ngModel"], ["name", "state", "ngModel", "", "required", "", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["state", "ngModel"], ["name", "dist", "ngModel", "", "required", "", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["dist", "ngModel"], ["name", "area", "ngModel", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["area", "ngModel"], ["type", "text", "placeholder", "Enter Your Pincode *", "value", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "placeholder", "Your Full Address *", "value", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "selectedTechs", "ngModel", "", "required", "", "disabled", "", 1, "hidden", 3, "ngValue"], ["selectedTechs", "ngModel"], ["type", "submit", "value", "Register", 1, "btnRegister", 3, "click"], [2, "color", "red"], [3, "value"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "input", 4)(7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 5)(9, "ul", 6)(10, "li", 7)(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Apply as a Donor");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_18_listener($event) { return ctx.newrec.user_fullname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, SignupComponent_div_20_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 12)(22, "div", 13)(23, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_23_listener($event) { return ctx.newrec.user_age = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 12)(25, "div", 13)(26, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keypress", function SignupComponent_Template_input_keypress_26_listener($event) { return ctx.keyPress($event); })("ngModelChange", function SignupComponent_Template_input_ngModelChange_26_listener($event) { return ctx.newrec.user_mobile1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 12)(28, "div", 13)(29, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_29_listener($event) { return ctx.newrec.user_mobile2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 12)(31, "div", 13)(32, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_32_listener($event) { return ctx.newrec.user_emailid = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "div", 12)(34, "div", 13)(35, "select", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_select_ngModelChange_35_listener($event) { return ctx.newrec.user_gender = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "Please select your Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, SignupComponent_option_39_Template, 2, 2, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](40, SignupComponent_div_40_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "div", 12)(42, "div", 13)(43, "select", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_select_ngModelChange_43_listener($event) { return ctx.newrec.user_bloodgroup = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, "Please select your BloodGroup");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](47, SignupComponent_option_47_Template, 2, 2, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](48, SignupComponent_div_48_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div", 12)(50, "div", 13)(51, "select", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function SignupComponent_Template_select_change_51_listener($event) { return ctx.getstate($event.target.value); })("ngModelChange", function SignupComponent_Template_select_ngModelChange_51_listener($event) { return ctx.newrec.user_country = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54, "Please select your Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](55, SignupComponent_option_55_Template, 2, 2, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](56, SignupComponent_div_56_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "div", 12)(58, "div", 13)(59, "select", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function SignupComponent_Template_select_change_59_listener($event) { return ctx.getdistrict($event.target.value); })("ngModelChange", function SignupComponent_Template_select_ngModelChange_59_listener($event) { return ctx.newrec.user_state = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62, "Please select your state");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](63, SignupComponent_option_63_Template, 2, 2, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](64, SignupComponent_div_64_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "div", 12)(66, "div", 13)(67, "select", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function SignupComponent_Template_select_change_67_listener($event) { return ctx.getarea($event.target.value); })("ngModelChange", function SignupComponent_Template_select_ngModelChange_67_listener($event) { return ctx.newrec.user_district = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70, "Please select your dist");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](71, SignupComponent_option_71_Template, 2, 2, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](72, SignupComponent_div_72_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "div", 13)(74, "select", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_select_ngModelChange_74_listener($event) { return ctx.newrec.user_area = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77, "Please select your area");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](78, SignupComponent_option_78_Template, 2, 2, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](79, SignupComponent_div_79_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "div", 13)(81, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_81_listener($event) { return ctx.newrec.user_pincode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "div", 13)(83, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_83_listener($event) { return ctx.newrec.user_fulladdress = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](84, "div", 13)(85, "select", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_select_ngModelChange_85_listener($event) { return ctx.newrec.userstatus = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](86, "option", 39, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](88, "Please select your are donor or not");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](89, SignupComponent_option_89_Template, 2, 2, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](90, SignupComponent_div_90_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SignupComponent_Template_input_click_91_listener() { return ctx.add(ctx.newrec); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](19);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](36);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](44);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](52);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](60);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](68);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](75);
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.newrec.user_fullname);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.newrec.user_age);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.newrec.user_mobile1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.newrec.user_mobile2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.newrec.user_emailid);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.newrec.user_gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.grods);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r2.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.newrec.user_bloodgroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.brods);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r5.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.newrec.user_country);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.prods);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r8.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.newrec.user_state);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.srods);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r11.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.newrec.user_district);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.drods);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r14.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.newrec.user_area);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.arods);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r17.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.newrec.user_pincode);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.newrec.user_fulladdress);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.newrec.userstatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.urods);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r20.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf], styles: [".register[_ngcontent-%COMP%]{\r\n  background: -webkit-linear-gradient(left, #3931af, #00c6ff);\r\n  margin-top: 3%;\r\n  padding: 3%;\r\n}\r\n.register-left[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  color: #fff;\r\n  margin-top: 4%;\r\n}\r\n.register-left[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  border: none;\r\n  border-radius: 1.5rem;\r\n  padding: 2%;\r\n  width: 60%;\r\n  background: #f8f9fa;\r\n  font-weight: bold;\r\n  color: #383d41;\r\n  margin-top: 30%;\r\n  margin-bottom: 3%;\r\n  cursor: pointer;\r\n}\r\n.register-right[_ngcontent-%COMP%]{\r\n  background: #f8f9fa;\r\n  border-top-left-radius: 10% 50%;\r\n  border-bottom-left-radius: 10% 50%;\r\n}\r\n.register-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  margin-top: 15%;\r\n  margin-bottom: 5%;\r\n  width: 25%;\r\n  animation: mover 1s infinite  alternate;\r\n}\r\n@keyframes mover {\r\n  0% { transform: translateY(0); }\r\n  100% { transform: translateY(-20px); }\r\n}\r\n.register-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-weight: lighter;\r\n  padding: 12%;\r\n  margin-top: -9%;\r\n}\r\n.register[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]{\r\n  padding: 10%;\r\n  margin-top: 10%;\r\n}\r\n.btnRegister[_ngcontent-%COMP%]{\r\n  float: right;\r\n  margin-top: 10%;\r\n  border: none;\r\n  border-radius: 1.5rem;\r\n  padding: 2%;\r\n  background: #0062cc;\r\n  color: #fff;\r\n  font-weight: 600;\r\n  width: 50%;\r\n  cursor: pointer;\r\n}\r\n.register[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{\r\n  margin-top: 3%;\r\n  border: none;\r\n  background: #0062cc;\r\n  border-radius: 1.5rem;\r\n  width: 28%;\r\n  float: right;\r\n}\r\n.register[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\r\n  padding: 2%;\r\n  height: 34px;\r\n  font-weight: 600;\r\n  color: #fff;\r\n  border-top-right-radius: 1.5rem;\r\n  border-bottom-right-radius: 1.5rem;\r\n}\r\n.register[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{\r\n  border: none;\r\n}\r\n.register[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  color: #0062cc;\r\n  border: 2px solid #0062cc;\r\n  border-top-left-radius: 1.5rem;\r\n  border-bottom-left-radius: 1.5rem;\r\n}\r\n.register-heading[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  margin-top: 8%;\r\n  margin-bottom: -15%;\r\n  color: #495057;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkRBQTJEO0VBQzNELGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsVUFBVTtFQUVWLHVDQUF1QztBQUN6QztBQUtBO0VBQ0UsS0FBSyx3QkFBd0IsRUFBRTtFQUMvQixPQUFPLDRCQUE0QixFQUFFO0FBQ3ZDO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLCtCQUErQjtFQUMvQixrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLGlDQUFpQztBQUNuQztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3RlcntcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMzkzMWFmLCAjMDBjNmZmKTtcclxuICBtYXJnaW4tdG9wOiAzJTtcclxuICBwYWRkaW5nOiAzJTtcclxufVxyXG4ucmVnaXN0ZXItbGVmdHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLXRvcDogNCU7XHJcbn1cclxuLnJlZ2lzdGVyLWxlZnQgaW5wdXR7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAyJTtcclxuICB3aWR0aDogNjAlO1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMzODNkNDE7XHJcbiAgbWFyZ2luLXRvcDogMzAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucmVnaXN0ZXItcmlnaHR7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMCUgNTAlO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwJSA1MCU7XHJcbn1cclxuLnJlZ2lzdGVyLWxlZnQgaW1ne1xyXG4gIG1hcmdpbi10b3A6IDE1JTtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICB3aWR0aDogMjUlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlciAycyBpbmZpbml0ZSAgYWx0ZXJuYXRlO1xyXG4gIGFuaW1hdGlvbjogbW92ZXIgMXMgaW5maW5pdGUgIGFsdGVybmF0ZTtcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZXIge1xyXG4gIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7IH1cclxufVxyXG5Aa2V5ZnJhbWVzIG1vdmVyIHtcclxuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxyXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpOyB9XHJcbn1cclxuLnJlZ2lzdGVyLWxlZnQgcHtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBwYWRkaW5nOiAxMiU7XHJcbiAgbWFyZ2luLXRvcDogLTklO1xyXG59XHJcbi5yZWdpc3RlciAucmVnaXN0ZXItZm9ybXtcclxuICBwYWRkaW5nOiAxMCU7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbi5idG5SZWdpc3RlcntcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgYmFja2dyb3VuZDogIzAwNjJjYztcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5yZWdpc3RlciAubmF2LXRhYnN7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICMwMDYyY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gIHdpZHRoOiAyOCU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5yZWdpc3RlciAubmF2LXRhYnMgLm5hdi1saW5re1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIGhlaWdodDogMzRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxLjVyZW07XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEuNXJlbTtcclxufVxyXG4ucmVnaXN0ZXIgLm5hdi10YWJzIC5uYXYtbGluazpob3ZlcntcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLnJlZ2lzdGVyIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZle1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBjb2xvcjogIzAwNjJjYztcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDA2MmNjO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEuNXJlbTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxLjVyZW07XHJcbn1cclxuLnJlZ2lzdGVyLWhlYWRpbmd7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDglO1xyXG4gIG1hcmdpbi1ib3R0b206IC0xNSU7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 4670:
/*!**********************************************************!*\
  !*** ./src/app/component/userlist/userlist.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserlistComponent": () => (/* binding */ UserlistComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_signup_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/signup.service */ 2169);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function UserlistComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.user_fullname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.user_age);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.gender_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.bloodgroup_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.user_mobile1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.user_mobile2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.user_emailid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.user_fulladdress);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.country_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.state_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.district_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.area_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1.user_pincode);
} }
class UserlistComponent {
    constructor(signup) {
        this.signup = signup;
        this.signup.get().subscribe((res) => {
            this.prods = res.data;
        });
    }
    ngOnInit() {
    }
}
UserlistComponent.ɵfac = function UserlistComponent_Factory(t) { return new (t || UserlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_signup_service__WEBPACK_IMPORTED_MODULE_0__.SignupService)); };
UserlistComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserlistComponent, selectors: [["app-userlist"]], decls: 31, vars: 1, consts: [["id", "dtBasicExample", "cellspacing", "0", 1, "table", "float-left", "table-success", "table-hover", "table-striped", "table-bordered", "table-sm", 2, "display", "inline-block", "overflow", "scroll", "margin-top", "-630px", "width", "70%", "height", "40%", "margin-left", "320px"], [1, "th-sm"], [4, "ngFor", "ngForOf"]], template: function UserlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0)(1, "thead")(2, "tr")(3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "FullName ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Age ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Gender ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "BloodGroup ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "MobileNumber ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "AlternativeMobileNumber ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "FullAddress ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "State ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "District ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Area ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Pincode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, UserlistComponent_tr_30_Template, 27, 13, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.prods);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VybGlzdC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 8678:
/*!************************************************************!*\
  !*** ./src/app/component/userlogin/userlogin.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserloginComponent": () => (/* binding */ UserloginComponent)
/* harmony export */ });
/* harmony import */ var _interfaces_signup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interfaces/signup */ 9209);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_signup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/signup.service */ 2169);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




class UserloginComponent {
    constructor(signupservice, router) {
        this.signupservice = signupservice;
        this.router = router;
        this.rec = new _interfaces_signup__WEBPACK_IMPORTED_MODULE_0__.Signup();
        this.rec1 = new _interfaces_signup__WEBPACK_IMPORTED_MODULE_0__.Signup();
    }
    ngOnInit() {
    }
}
UserloginComponent.ɵfac = function UserloginComponent_Factory(t) { return new (t || UserloginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_signup_service__WEBPACK_IMPORTED_MODULE_1__.SignupService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
UserloginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UserloginComponent, selectors: [["app-userlogin"]], decls: 0, vars: 0, template: function UserloginComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJsb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOENHIiwiZmlsZSI6InVzZXJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwNTM5XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4XHJcbn1cclxuXHJcbi5mb3JtLWlucHV0IGlucHV0IHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZWVlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXNcclxufVxyXG5cclxuLmZvcm0taW5wdXQgaW5wdXQ6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDBcclxufVxyXG5cclxuLmluZm8tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHhcclxufVxyXG5cclxuLmZvcm0taW5wdXQgaSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE0cHg7XHJcbiAgICByaWdodDogMTBweFxyXG59XHJcblxyXG4uZ28tYnV0dG9uIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAyOXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjUxRkZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXNcclxufVxyXG5cclxuLmdvLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjIwMEVBXHJcbn0gKi8iXX0= */"] });


/***/ }),

/***/ 5636:
/*!************************************************************!*\
  !*** ./src/app/component/userpanel/userpanel.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserpanelComponent": () => (/* binding */ UserpanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_benfsignup_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/benfsignup.service */ 466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class UserpanelComponent {
    constructor(benf, router) {
        this.benf = benf;
        this.router = router;
        var mob1 = Number(localStorage.getItem('mobile'));
        this.benf.getbyid(mob1).subscribe((res) => {
            this.prods = res.data;
        });
    }
    change1() {
        this.router.navigate(['mobilevalidation']);
    }
    ngOnInit() {
    }
}
UserpanelComponent.ɵfac = function UserpanelComponent_Factory(t) { return new (t || UserpanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_benfsignup_service__WEBPACK_IMPORTED_MODULE_0__.BenfsignupService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
UserpanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserpanelComponent, selectors: [["app-userpanel"]], decls: 28, vars: 0, consts: [[2, "background", "black", "margin-top", "-50px"], ["id", "sidebarMenu", 1, "collapse", "d-lg-block", "sidebar", "mt-5", "collapse", "bg-dark", 2, "height", "617px"], [1, "position-sticky"], [1, "list-group", "list-group-flush", "bg-dark", "mx-3", "mt-4"], ["href", "#", "aria-current", "true", 1, "list-group-item", "text-white", "list-group-item-action", "bg-dark", "py-2", "ripple"], [1, "fas", "fa-tachometer-alt", "fa-fw", "me-3"], ["href", "#", 1, "list-group-item", "list-group-item-action", "bg-dark", "py-2", "ripple", "active"], [1, "fas", "fa-chart-area", "fa-fw", "me-3"], ["routerLink", "benfrequest", 1, "list-group-item", "text-white", "list-group-item-action", "bg-dark", "py-2", "ripple"], [1, "fas", "fa-lock", "fa-fw", "me-3"], ["routerLink", "benfrequestlist", "href", "#", 1, "list-group-item", "text-white", "list-group-item-action", "bg-dark", "py-2", "ripple"], [1, "fas", "fa-chart-line", "fa-fw", "me-3"], [1, "list-group-item", "text-white", "list-group-item-action", "bg-dark", "py-2", "ripple"], [1, "fas", "fa-globe", "fa-fw", "me-3"], [1, "btn", "btn-bark", "text-white", 3, "click"], [2, "margin-top", "58px"], [1, "container", "pt-4"]], template: function UserpanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0)(1, "nav", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Main dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Webiste traffic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Blood Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Call History");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserpanelComponent_Template_button_click_22_listener() { return ctx.change1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "main", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["body[_ngcontent-%COMP%] {\r\n    background-color: #fbfbfb;\r\n  }\r\n  @media (min-width: 991.98px) {\r\n    main[_ngcontent-%COMP%] {\r\n      padding-left: 240px;\r\n    }\r\n  }\r\n  \r\n  .sidebar[_ngcontent-%COMP%] {\r\n    \r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 58px 0 0; \r\n    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);\r\n    width: 240px;\r\n    z-index: 600;\r\n  }\r\n  @media (max-width: 991.98px) {\r\n    .sidebar[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\r\n    border-radius: 5px;\r\n    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);\r\n  }\r\n  .sidebar-sticky[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 0;\r\n    height: calc(100vh - 48px);\r\n    padding-top: 0.5rem;\r\n    overflow-x: hidden;\r\n    overflow-y: auto; \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJwYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRTtNQUNFLG1CQUFtQjtJQUNyQjtFQUNGO0VBRUEsWUFBWTtFQUNaO0lBQ0UscUJBQXFCO0lBQ3JCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLGlCQUFpQixFQUFFLHFCQUFxQjtJQUN4QyxxRUFBcUU7SUFDckUsWUFBWTtJQUNaLFlBQVk7RUFDZDtFQUVBO0lBQ0U7TUFDRSxXQUFXO0lBQ2I7RUFDRjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLHVFQUF1RTtFQUN6RTtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBRSw2REFBNkQ7RUFDakYiLCJmaWxlIjoidXNlcnBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTEuOThweCkge1xyXG4gICAgbWFpbiB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjQwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNpZGViYXIgKi9cclxuICAuc2lkZWJhciB7XHJcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZzogNThweCAwIDA7IC8qIEhlaWdodCBvZiBuYXZiYXIgKi9cclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYigwIDAgMCAvIDUlKSwgMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDUlKTtcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIHotaW5kZXg6IDYwMDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgICAuc2lkZWJhciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2lkZWJhciAuYWN0aXZlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYigwIDAgMCAvIDE2JSksIDAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAxMiUpO1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhci1zdGlja3kge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDhweCk7XHJcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgLyogU2Nyb2xsYWJsZSBjb250ZW50cyBpZiB2aWV3cG9ydCBpcyBzaG9ydGVyIHRoYW4gY29udGVudC4gKi9cclxuICB9Il19 */"] });


/***/ }),

/***/ 1779:
/*!************************************************************************!*\
  !*** ./src/app/component/uservalidation1/uservalidation1.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Uservalidation1Component": () => (/* binding */ Uservalidation1Component)
/* harmony export */ });
/* harmony import */ var _interfaces_mobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interfaces/mobile */ 5327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_mobile1_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/mobile1.service */ 8211);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);






function Uservalidation1Component_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter 10 Digit Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function Uservalidation1Component_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class Uservalidation1Component {
    constructor(mobile, router) {
        this.mobile = mobile;
        this.router = router;
        this.rec = new _interfaces_mobile__WEBPACK_IMPORTED_MODULE_0__.Mobile();
    }
    generate(mobile_no) {
        this.mobile.get(mobile_no).subscribe((res) => {
            if (res.status == 'success') {
                // alert(res.data.OTP);
                // alert(res.data.mb);
                localStorage.setItem('UserOTP', res.data.OTP);
                localStorage.setItem('mobileno', res.data.mb);
                this.router.navigate(['otpvalidation1']);
                //clear rec
                this.mobile_no = null;
            }
            else {
                alert('you are already register goto benificiary request page and place request');
                this.router.navigate(['benfsignup']);
            }
        });
    }
    ngOnInit() {
    }
    keyPress(event) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
}
Uservalidation1Component.ɵfac = function Uservalidation1Component_Factory(t) { return new (t || Uservalidation1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_mobile1_service__WEBPACK_IMPORTED_MODULE_1__.Mobile1Service), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
Uservalidation1Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Uservalidation1Component, selectors: [["app-uservalidation1"]], decls: 14, vars: 3, consts: [[1, "container", "vh-100", "d-flex", "justify-content-center", "align-items-center"], [1, "card", "py-4", "px-4"], [1, "text-center"], ["src", "../../../assets/mobile-icon.png", "width", "60"], [1, "text-center", "mb-3"], [1, "info-text"], [1, "position-relative", "mb-3", "form-input"], ["minlength", "10", "maxlength", "10", "required", "", "minlength", "10", "maxlength", "10", 1, "form-control", 3, "ngModel", "keypress", "ngModelChange"], ["model3", "ngModel"], ["style", "color: red", 4, "ngIf"], [1, "btn", "btn-danger", 3, "click"], [2, "color", "red"]], template: function Uservalidation1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Please enter your mobile number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function Uservalidation1Component_Template_input_keypress_8_listener($event) { return ctx.keyPress($event); })("ngModelChange", function Uservalidation1Component_Template_input_ngModelChange_8_listener($event) { return ctx.mobile_no = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, Uservalidation1Component_div_10_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, Uservalidation1Component_div_11_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Uservalidation1Component_Template_button_click_12_listener() { return ctx.generate(ctx.mobile_no); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.mobile_no);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.hasError("required"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: [".card[_ngcontent-%COMP%]{\r\n    width: 390px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJ2YWxpZGF0aW9uMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJ1c2VydmFsaWRhdGlvbjEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgd2lkdGg6IDM5MHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 4909:
/*!**********************************************************************!*\
  !*** ./src/app/component/uservalidation/uservalidation.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UservalidationComponent": () => (/* binding */ UservalidationComponent)
/* harmony export */ });
/* harmony import */ var _interfaces_mobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interfaces/mobile */ 5327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_mobile1_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/mobile1.service */ 8211);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);






function UservalidationComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter 10 Digit Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UservalidationComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class UservalidationComponent {
    constructor(mobile, router) {
        this.mobile = mobile;
        this.router = router;
        this.rec = new _interfaces_mobile__WEBPACK_IMPORTED_MODULE_0__.Mobile();
    }
    generate(mobile_no) {
        this.mobile.get(mobile_no).subscribe((res) => {
            if (res.status == 'success') {
                // alert(res.data.mb);
                // localStorage.setItem('UserOTP',res.data.OTP);
                localStorage.setItem('mobileno', res.data.mb);
                this.router.navigate(['otpvalidation']);
                //clear rec
                this.mobile_no = null;
            }
            else {
                alert('your mobile number already exist');
                this.mobile_no = null;
            }
        });
    }
    ngOnInit() {
    }
    keyPress(event) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
}
UservalidationComponent.ɵfac = function UservalidationComponent_Factory(t) { return new (t || UservalidationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_mobile1_service__WEBPACK_IMPORTED_MODULE_1__.Mobile1Service), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
UservalidationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UservalidationComponent, selectors: [["app-uservalidation"]], decls: 14, vars: 3, consts: [[1, "container", "vh-100", "d-flex", "justify-content-center", "align-items-center"], [1, "card", "py-4", "px-4"], [1, "text-center"], ["src", "../../../assets/mobile-icon.png", "width", "60"], [1, "text-center", "mb-3"], [1, "info-text"], [1, "position-relative", "mb-5", "form-input"], ["minlength", "10", "maxlength", "10", "name", "mobile_no", "required", "", "pattern", "[0-9]{10}", "minlength", "10", "maxlength", "10", 1, "form-control", 3, "ngModel", "keypress", "ngModelChange"], ["model4", "ngModel"], ["style", "color: red", 4, "ngIf"], [1, "btn", "btn-danger", "p-2", 3, "click"], [2, "color", "red"]], template: function UservalidationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Please enter your mobile number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function UservalidationComponent_Template_input_keypress_8_listener($event) { return ctx.keyPress($event); })("ngModelChange", function UservalidationComponent_Template_input_ngModelChange_8_listener($event) { return ctx.mobile_no = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, UservalidationComponent_div_10_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, UservalidationComponent_div_11_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UservalidationComponent_Template_button_click_12_listener() { return ctx.generate(ctx.mobile_no); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.mobile_no);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.hasError("required"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: [".card[_ngcontent-%COMP%]{\r\n    width: 390px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJ2YWxpZGF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InVzZXJ2YWxpZGF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIHdpZHRoOiAzOTBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 7744:
/*!*************************************!*\
  !*** ./src/app/interfaces/admin.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Admin": () => (/* binding */ Admin)
/* harmony export */ });
class Admin {
    constructor(admin_username = "", admin_password = "") {
        this.admin_username = admin_username;
        this.admin_password = admin_password;
    }
}


/***/ }),

/***/ 8838:
/*!******************************************!*\
  !*** ./src/app/interfaces/benfsignup.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Benfsignup": () => (/* binding */ Benfsignup)
/* harmony export */ });
class Benfsignup {
    constructor(benf_fullname = "", benf_age = null, benf_gender = null, benf_blood_type = null, benf_bloodgroup = null, benf_units_required = null, benf_acc_bloodgroup = null, benf_deadline = "", benf_mobile1 = null, benf_mobile2 = null, benf_hospital_name = "", benf_hospital_address = "", benf_country = null, benf_state = null, benf_district = null, benf_area = null, benf_pincode = null) {
        this.benf_fullname = benf_fullname;
        this.benf_age = benf_age;
        this.benf_gender = benf_gender;
        this.benf_blood_type = benf_blood_type;
        this.benf_bloodgroup = benf_bloodgroup;
        this.benf_units_required = benf_units_required;
        this.benf_acc_bloodgroup = benf_acc_bloodgroup;
        this.benf_deadline = benf_deadline;
        this.benf_mobile1 = benf_mobile1;
        this.benf_mobile2 = benf_mobile2;
        this.benf_hospital_name = benf_hospital_name;
        this.benf_hospital_address = benf_hospital_address;
        this.benf_country = benf_country;
        this.benf_state = benf_state;
        this.benf_district = benf_district;
        this.benf_area = benf_area;
        this.benf_pincode = benf_pincode;
    }
}


/***/ }),

/***/ 7574:
/*!*****************************************!*\
  !*** ./src/app/interfaces/bloodbank.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bloodbank": () => (/* binding */ Bloodbank)
/* harmony export */ });
class Bloodbank {
    constructor(bloodbank_name = "", bloodbank_location = "", bloodbank_contactno = "", bloodbank_username = "", bloodbank_password = "") {
        this.bloodbank_name = bloodbank_name;
        this.bloodbank_location = bloodbank_location;
        this.bloodbank_contactno = bloodbank_contactno;
        this.bloodbank_username = bloodbank_username;
        this.bloodbank_password = bloodbank_password;
    }
}


/***/ }),

/***/ 204:
/*!***************************************!*\
  !*** ./src/app/interfaces/enquiry.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Enquiry": () => (/* binding */ Enquiry)
/* harmony export */ });
class Enquiry {
    constructor(enquiry_name = "", enquiry_mobileno = null, enquiry_message = "") {
        this.enquiry_name = enquiry_name;
        this.enquiry_mobileno = enquiry_mobileno;
        this.enquiry_message = enquiry_message;
    }
}


/***/ }),

/***/ 5749:
/*!****************************************!*\
  !*** ./src/app/interfaces/feedback.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Feedback": () => (/* binding */ Feedback)
/* harmony export */ });
class Feedback {
    constructor(feedback_name = "", feedback_emaill = "", feedback_message = "") {
        this.feedback_name = feedback_name;
        this.feedback_emaill = feedback_emaill;
        this.feedback_message = feedback_message;
    }
}


/***/ }),

/***/ 5327:
/*!**************************************!*\
  !*** ./src/app/interfaces/mobile.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mobile": () => (/* binding */ Mobile)
/* harmony export */ });
class Mobile {
    constructor(mobile_no = null) {
        this.mobile_no = mobile_no;
    }
}


/***/ }),

/***/ 3755:
/*!*************************************!*\
  !*** ./src/app/interfaces/order.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Order": () => (/* binding */ Order)
/* harmony export */ });
class Order {
    constructor(amount = null) {
        this.amount = amount;
    }
}


/***/ }),

/***/ 9209:
/*!**************************************!*\
  !*** ./src/app/interfaces/signup.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Signup": () => (/* binding */ Signup)
/* harmony export */ });
class Signup {
    constructor(user_fullname = "", user_age = null, user_gender = null, user_bloodgroup = null, user_mobile1 = null, user_mobile2 = null, user_emailid = "", user_fulladdress = "", user_country = null, user_state = null, user_district = null, user_area = null, user_pincode = null, userstatus = null) {
        this.user_fullname = user_fullname;
        this.user_age = user_age;
        this.user_gender = user_gender;
        this.user_bloodgroup = user_bloodgroup;
        this.user_mobile1 = user_mobile1;
        this.user_mobile2 = user_mobile2;
        this.user_emailid = user_emailid;
        this.user_fulladdress = user_fulladdress;
        this.user_country = user_country;
        this.user_state = user_state;
        this.user_district = user_district;
        this.user_area = user_area;
        this.user_pincode = user_pincode;
        this.userstatus = userstatus;
    }
}


/***/ }),

/***/ 7799:
/*!****************************************!*\
  !*** ./src/app/pipe/translate.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslatePipe": () => (/* binding */ TranslatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_translate_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/translate.service */ 6120);


class TranslatePipe {
    constructor(translate) {
        this.translate = translate;
    }
    transform(key) {
        return this.translate.data[key] || key;
    }
}
TranslatePipe.ɵfac = function TranslatePipe_Factory(t) { return new (t || TranslatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_translate_service__WEBPACK_IMPORTED_MODULE_0__.TranslateService, 16)); };
TranslatePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "translate", type: TranslatePipe, pure: false });


/***/ }),

/***/ 2548:
/*!**************************************************!*\
  !*** ./src/app/service/accbloodgroup.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccbloodgroupService": () => (/* binding */ AccbloodgroupService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class AccbloodgroupService {
    constructor(httpclient) {
        this.httpclient = httpclient;
    }
    get() {
        return this.httpclient.get('http://localhost:3000/accbloodgroup');
    }
}
AccbloodgroupService.ɵfac = function AccbloodgroupService_Factory(t) { return new (t || AccbloodgroupService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
AccbloodgroupService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccbloodgroupService, factory: AccbloodgroupService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4523:
/*!*************************************************!*\
  !*** ./src/app/service/adminservice.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminserviceService": () => (/* binding */ AdminserviceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class AdminserviceService {
    constructor(_httpclient) {
        this._httpclient = _httpclient;
    }
    getadmindetails() {
        return this._httpclient.get('http://localhost:3000/admin');
    }
    getbyid(username, password) {
        return this._httpclient.get('http://localhost:3000/admin' + "/" + username + "/" + password);
    }
}
AdminserviceService.ɵfac = function AdminserviceService_Factory(t) { return new (t || AdminserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
AdminserviceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminserviceService, factory: AdminserviceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8910:
/*!*****************************************!*\
  !*** ./src/app/service/area.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreaService": () => (/* binding */ AreaService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class AreaService {
    constructor(httpclient) {
        this.httpclient = httpclient;
    }
    get(did) {
        return this.httpclient.get('http://localhost:3000/area' + "/" + did);
    }
}
AreaService.ɵfac = function AreaService_Factory(t) { return new (t || AreaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
AreaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AreaService, factory: AreaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2974:
/*!*********************************************!*\
  !*** ./src/app/service/autocall.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutocallService": () => (/* binding */ AutocallService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class AutocallService {
    constructor(_httpclient) {
        this._httpclient = _httpclient;
    }
    get() {
        return this._httpclient.get('http://localhost:3000/data');
    }
}
AutocallService.ɵfac = function AutocallService_Factory(t) { return new (t || AutocallService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
AutocallService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AutocallService, factory: AutocallService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 466:
/*!***********************************************!*\
  !*** ./src/app/service/benfsignup.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BenfsignupService": () => (/* binding */ BenfsignupService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class BenfsignupService {
    constructor(httpclient) {
        this.httpclient = httpclient;
    }
    get() {
        return this.httpclient.get('http://localhost:3000/benf');
    }
    getbyid(pid) {
        return this.httpclient.get('http://localhost:3000/benf' + "/" + pid);
    }
    post(pinfo) {
        return this.httpclient.post('http://localhost:3000/benfsignup', pinfo);
    }
}
BenfsignupService.ɵfac = function BenfsignupService_Factory(t) { return new (t || BenfsignupService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
BenfsignupService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BenfsignupService, factory: BenfsignupService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7442:
/*!**********************************************!*\
  !*** ./src/app/service/bloodbank.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloodbankService": () => (/* binding */ BloodbankService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class BloodbankService {
    constructor(httpclient) {
        this.httpclient = httpclient;
    }
    getbloodbank() {
        return this.httpclient.get('http://localhost:3000/bloodbank');
    }
    getbyid(username, password) {
        return this.httpclient.get('http://localhost:3000/bloodbank' + "/" + username + "/" + password);
    }
    addbloodbank(binfo) {
        return this.httpclient.post('http://localhost:3000/bloodbank', binfo);
    }
}
BloodbankService.ɵfac = function BloodbankService_Factory(t) { return new (t || BloodbankService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
BloodbankService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BloodbankService, factory: BloodbankService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 224:
/*!***********************************************!*\
  !*** ./src/app/service/bloodgroup.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloodgroupService": () => (/* binding */ BloodgroupService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class BloodgroupService {
    constructor(httpclient) {
        this.httpclient = httpclient;
    }
    get() {
        return this.httpclient.get('http://localhost:3000/bloodgroup');
    }
}
BloodgroupService.ɵfac = function BloodgroupService_Factory(t) { return new (t || BloodgroupService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
BloodgroupService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BloodgroupService, factory: BloodgroupService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5158:
/*!**********************************************!*\
  !*** ./src/app/service/bloodtype.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloodtypeService": () => (/* binding */ BloodtypeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class BloodtypeService {
    constructor(httpclient) {
        this.httpclient = httpclient;
    }
    get() {
        return this.httpclient.get('http://localhost:3000/bloodtype');
    }
}
BloodtypeService.ɵfac = function BloodtypeService_Factory(t) { return new (t || BloodtypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
BloodtypeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BloodtypeService, factory: BloodtypeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7173:
/*!********************************************!*\
  !*** ./src/app/service/country.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryService": () => (/* binding */ CountryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class CountryService {
    constructor(httpclient) {
        this.httpclient = httpclient;
    }
    get() {
        return this.httpclient.get('http://localhost:3000/country');
    }
}
CountryService.ɵfac = function CountryService_Factory(t) { return new (t || CountryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
CountryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CountryService, factory: CountryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9453:
/*!*********************************************!*\
  !*** ./src/app/service/district.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DistrictService": () => (/* binding */ DistrictService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class DistrictService {
    constructor(httpclient) {
        this.httpclient = httpclient;
    }
    get(did) {
        return this.httpclient.get('http://localhost:3000/district' + "/" + did);
    }
}
DistrictService.ɵfac = function DistrictService_Factory(t) { return new (t || DistrictService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
DistrictService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DistrictService, factory: DistrictService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3325:
/*!********************************************!*\
  !*** ./src/app/service/enquiry.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnquiryService": () => (/* binding */ EnquiryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class EnquiryService {
    constructor(httpclient) {
        this.httpclient = httpclient;
    }
    getenquiry() {
        return this.httpclient.get('http://localhost:3000/enquiry');
    }
    addenquiry(einfo) {
        return this.httpclient.post('http://localhost:3000/enquiry', einfo);
    }
}
EnquiryService.ɵfac = function EnquiryService_Factory(t) { return new (t || EnquiryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
EnquiryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EnquiryService, factory: EnquiryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5231:
/*!*******************************************!*\
  !*** ./src/app/service/gender.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenderService": () => (/* binding */ GenderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class GenderService {
    constructor(httpclient) {
        this.httpclient = httpclient;
    }
    get() {
        return this.httpclient.get('http://localhost:3000/gender');
    }
}
GenderService.ɵfac = function GenderService_Factory(t) { return new (t || GenderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
GenderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GenderService, factory: GenderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7447:
/*!**********************************************!*\
  !*** ./src/app/service/inventory.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryService": () => (/* binding */ InventoryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class InventoryService {
    constructor(_httpclient) {
        this._httpclient = _httpclient;
    }
    getfeedback() {
        return this._httpclient.get('http://localhost:3000/feedback');
    }
    addfeedback(finfo) {
        return this._httpclient.post('http://localhost:3000/feedback-insert', finfo);
    }
}
InventoryService.ɵfac = function InventoryService_Factory(t) { return new (t || InventoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
InventoryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InventoryService, factory: InventoryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1323:
/*!*******************************************!*\
  !*** ./src/app/service/mobile.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileService": () => (/* binding */ MobileService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class MobileService {
    constructor(_httpclient) {
        this._httpclient = _httpclient;
    }
    get(pnumber) {
        //  alert(pnumber)
        return this._httpclient.get('http://localhost:3000/verify_user' + "/" + pnumber);
    }
}
MobileService.ɵfac = function MobileService_Factory(t) { return new (t || MobileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
MobileService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MobileService, factory: MobileService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8211:
/*!********************************************!*\
  !*** ./src/app/service/mobile1.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mobile1Service": () => (/* binding */ Mobile1Service)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class Mobile1Service {
    constructor(_httpclient) {
        this._httpclient = _httpclient;
    }
    get(pnumber) {
        //  alert(pnumber)
        return this._httpclient.get('http://localhost:3000/validateuser' + "/" + pnumber);
    }
    post(pnumber) {
        return this._httpclient.post('http://localhost:3000/mobile', pnumber);
    }
}
Mobile1Service.ɵfac = function Mobile1Service_Factory(t) { return new (t || Mobile1Service)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
Mobile1Service.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Mobile1Service, factory: Mobile1Service.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2909:
/*!******************************************!*\
  !*** ./src/app/service/order.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderService": () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class OrderService {
    constructor(http) {
        this.http = http;
    }
    add(oinfo) {
        return this.http.post('http://localhost:3000/orders1', oinfo);
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
OrderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2169:
/*!*******************************************!*\
  !*** ./src/app/service/signup.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupService": () => (/* binding */ SignupService)
/* harmony export */ });
/* harmony import */ var _interfaces_signup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/signup */ 9209);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class SignupService {
    // sinfo:Signup=new Signup();
    constructor(_httpclient) {
        this._httpclient = _httpclient;
        this.sinfo = new _interfaces_signup__WEBPACK_IMPORTED_MODULE_0__.Signup();
    }
    getdetails() {
        return this._httpclient.get('http://localhost:3000/user');
    }
    get() {
        return this._httpclient.get('http://localhost:3000/user1');
    }
    getdetail(pid) {
        return this._httpclient.get('http://localhost:3000/user' + "/" + pid);
    }
    delete(pid) {
        return this._httpclient.delete('http://localhost:3000/user' + "/" + pid);
    }
    postdetails(pinfo) {
        return this._httpclient.post('http://localhost:3000/usersignup', pinfo);
    }
}
SignupService.ɵfac = function SignupService_Factory(t) { return new (t || SignupService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
SignupService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SignupService, factory: SignupService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8163:
/*!******************************************!*\
  !*** ./src/app/service/state.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateService": () => (/* binding */ StateService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class StateService {
    constructor(httpclient) {
        this.httpclient = httpclient;
    }
    get(cid) {
        return this.httpclient.get('http://localhost:3000/state' + "/" + cid);
    }
}
StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
StateService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StateService, factory: StateService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6120:
/*!**********************************************!*\
  !*** ./src/app/service/translate.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslateService": () => (/* binding */ TranslateService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 318);



class TranslateService {
    constructor(http, titleService) {
        this.http = http;
        this.titleService = titleService;
        this.data = {};
    }
    use(lang) {
        return new Promise((resolve, reject) => {
            const langPath = `assets/i18n/${lang || "en"}.json`;
            this.http.get(langPath).subscribe(translation => {
                this.data = Object.assign({}, translation || {});
                this.titleService.setTitle(this.data["TITLE"]);
                resolve(this.data);
            }, error => {
                this.data = {};
                console.log("Error");
                resolve(this.data);
            });
        });
    }
}
TranslateService.ɵfac = function TranslateService_Factory(t) { return new (t || TranslateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Title)); };
TranslateService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranslateService, factory: TranslateService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7719:
/*!***********************************************!*\
  !*** ./src/app/service/userstatus.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserstatusService": () => (/* binding */ UserstatusService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class UserstatusService {
    constructor(httpclient) {
        this.httpclient = httpclient;
    }
    get() {
        return this.httpclient.get('http://localhost:3000/userstatus');
    }
}
UserstatusService.ɵfac = function UserstatusService_Factory(t) { return new (t || UserstatusService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
UserstatusService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserstatusService, factory: UserstatusService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map