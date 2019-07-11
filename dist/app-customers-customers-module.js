(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-customers-customers-module"],{

/***/ "./src/app/customers/customers-card/customers-card.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/customers/customers-card/customers-card.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-container {\r\n    width:85%;\r\n}\r\n\r\n.card {\r\n    background-color:#fff;\r\n    border: 1px solid #d4d4d4;\r\n    height:120px;\r\n    margin-bottom: 20px;\r\n    position: relative;\r\n}\r\n\r\n.card-header {\r\n    background-color:#027FF4;\r\n    font-size:14pt;\r\n    color:white;\r\n    padding:5px;\r\n    width:100%;\r\n}\r\n\r\n.card-close {\r\n    color: white;\r\n    font-weight:bold;\r\n    margin-right:5px;\r\n}\r\n\r\n.card-body {\r\n    padding-left: 5px;\r\n}\r\n\r\n.card-body-left {\r\n    margin-top: -5px;\r\n}\r\n\r\n.card-body-right {\r\n    margin-left: 20px;\r\n    margin-top: 2px;\r\n}\r\n\r\n.card-body-content {\r\n    width: 100px;\r\n}\r\n\r\n.card-image {\r\n    height:50px;width:50px;margin-top:10px;\r\n}\r\n\r\n.white {\r\n    color: white;\r\n}\r\n\r\n.white:hover {\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJzL2N1c3RvbWVycy1jYXJkL2N1c3RvbWVycy1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0NBQ2I7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxZQUFZLFdBQVcsZ0JBQWdCO0NBQzFDOztBQUVEO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lcnMvY3VzdG9tZXJzLWNhcmQvY3VzdG9tZXJzLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDo4NSU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XHJcbiAgICBoZWlnaHQ6MTIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDI3RkY0O1xyXG4gICAgZm9udC1zaXplOjE0cHQ7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLmNhcmQtY2xvc2Uge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHktbGVmdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5LXJpZ2h0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5LWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4uY2FyZC1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6NTBweDt3aWR0aDo1MHB4O21hcmdpbi10b3A6MTBweDtcclxufVxyXG5cclxuLndoaXRlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLndoaXRlOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/customers/customers-card/customers-card.component.html":
/*!************************************************************************!*\
  !*** ./src/app/customers/customers-card/customers-card.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row card-container\">\r\n        <div class=\"col-sm-6 col-md-4 col-lg-3\" *ngFor=\"let customer of customers;trackBy:trackbyService.customer\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <a [routerLink]=\"['/customers',customer.id,'details']\" class=\"white\">\r\n                        {{customer.firstName | capitalize }} {{ customer.lastName | capitalize }} \r\n                    </a>\r\n                    <a [routerLink]=\"['/customers',customer.id,'edit']\">\r\n                        <i title=\"Edit\"  \r\n                           class=\"pull-right glyphicon glyphicon-edit edit-icon white\"></i>\r\n                    </a>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"clearfix\">\r\n                        <div class=\"pull-left card-body-left\">\r\n                            <a href=\"#\" class=\"white\">\r\n                                <img src=\"assets/images/{{customer.gender | lowercase}}.png\" class=\"card-image\" />\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"pull-left card-body-right\">\r\n                            <div class=\"card-body-content\">{{customer.city | trim }}, {{customer.state.name}}</div>\r\n                            <a [routerLink]=\"['/customers',customer.id,'orders']\">View Orders</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"!customers.length\">\r\n            No Records Found\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/customers/customers-card/customers-card.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/customers/customers-card/customers-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: CustomersCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersCardComponent", function() { return CustomersCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_trackby_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/trackby.service */ "./src/app/core/services/trackby.service.ts");



var CustomersCardComponent = /** @class */ (function () {
    function CustomersCardComponent(trackbyService) {
        this.trackbyService = trackbyService;
        this.customers = [];
    }
    CustomersCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CustomersCardComponent.prototype, "customers", void 0);
    CustomersCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cm-customers-card',
            template: __webpack_require__(/*! ./customers-card.component.html */ "./src/app/customers/customers-card/customers-card.component.html"),
            styles: [__webpack_require__(/*! ./customers-card.component.css */ "./src/app/customers/customers-card/customers-card.component.css")],
            // When using OnPush detectors, then the framework will check an OnPush
            // component when any of its input properties changes, when it fires
            // an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_trackby_service__WEBPACK_IMPORTED_MODULE_2__["TrackByService"]])
    ], CustomersCardComponent);
    return CustomersCardComponent;
}());



/***/ }),

/***/ "./src/app/customers/customers-grid/customers-grid.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/customers/customers-grid/customers-grid.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container  div {\r\n    padding-left: 0px;\r\n}\r\n\r\n.grid-container td {\r\n    vertical-align: middle;\r\n}\r\n\r\n.grid-image {\r\n    height:50px;width:50px;margin-top:10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJzL2N1c3RvbWVycy1ncmlkL2N1c3RvbWVycy1ncmlkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSx1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxZQUFZLFdBQVcsZ0JBQWdCO0NBQzFDIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXJzL2N1c3RvbWVycy1ncmlkL2N1c3RvbWVycy1ncmlkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIgIGRpdiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyIHRkIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5ncmlkLWltYWdlIHtcclxuICAgIGhlaWdodDo1MHB4O3dpZHRoOjUwcHg7bWFyZ2luLXRvcDoxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/customers/customers-grid/customers-grid.component.html":
/*!************************************************************************!*\
  !*** ./src/app/customers/customers-grid/customers-grid.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row grid-container\">\r\n        <div class=\"col-md-10\">\r\n            <div class=\"table\">\r\n                <table class=\"table table-striped table-hover\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>&nbsp;</th>\r\n                            <th cmSortBy=\"firstName\" (sorted)=\"sort($event)\">First Name</th>\r\n                            <th cmSortBy=\"lastName\" (sorted)=\"sort($event)\">Last Name</th>\r\n                            <th cmSortBy=\"address\" (sorted)=\"sort($event)\">Address</th>\r\n                            <th cmSortBy=\"city\" (sorted)=\"sort($event)\">City</th>\r\n                            <th cmSortBy=\"state.name\" (sorted)=\"sort($event)\">State</th>\r\n                            <!-- Or you can do this directly rather than using sort-by directive -->\r\n                            <th (click)=\"sort('orderTotal')\">Order Total</th>\r\n                            <th>&nbsp;</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let customer of customers;trackBy:trackbyService.customer\">\r\n                            <td><img src=\"assets/images/{{ customer.gender | lowercase }}.png\"\r\n                                    class=\"grid-image\" alt=\"Customer Image\" /></td>\r\n                            <td><a [routerLink]=\"['/customers',customer.id,'details']\">{{ customer.firstName | capitalize }}</a></td>\r\n                            <td>{{ customer.lastName | capitalize }}</td>\r\n                            <td>{{ customer.address }}</td>\r\n                            <td>{{ customer.city | trim }}</td>\r\n                            <td>{{ customer.state.name }}</td>\r\n                            <td>{{ customer.orderTotal | currency:'USD':'symbol' }}</td>\r\n                            <td><a [routerLink]=\"['/customers',customer.id,'orders']\">View Orders</a></td>\r\n                        </tr>\r\n                        <tr *ngIf=\"!customers.length\">\r\n                            <td>&nbsp;</td>\r\n                            <td colspan=\"7\">No Records Found</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/customers/customers-grid/customers-grid.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/customers/customers-grid/customers-grid.component.ts ***!
  \**********************************************************************/
/*! exports provided: CustomersGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersGridComponent", function() { return CustomersGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_sorter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/sorter.service */ "./src/app/core/services/sorter.service.ts");
/* harmony import */ var _core_services_trackby_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/trackby.service */ "./src/app/core/services/trackby.service.ts");




var CustomersGridComponent = /** @class */ (function () {
    function CustomersGridComponent(sorterService, trackbyService) {
        this.sorterService = sorterService;
        this.trackbyService = trackbyService;
        this.customers = [];
    }
    CustomersGridComponent.prototype.ngOnInit = function () {
    };
    CustomersGridComponent.prototype.sort = function (prop) {
        this.sorterService.sort(this.customers, prop);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CustomersGridComponent.prototype, "customers", void 0);
    CustomersGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cm-customers-grid',
            template: __webpack_require__(/*! ./customers-grid.component.html */ "./src/app/customers/customers-grid/customers-grid.component.html"),
            styles: [__webpack_require__(/*! ./customers-grid.component.css */ "./src/app/customers/customers-grid/customers-grid.component.css")],
            // When using OnPush detectors, then the framework will check an OnPush
            // component when any of its input properties changes, when it fires
            // an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_sorter_service__WEBPACK_IMPORTED_MODULE_2__["SorterService"], _core_services_trackby_service__WEBPACK_IMPORTED_MODULE_3__["TrackByService"]])
    ], CustomersGridComponent);
    return CustomersGridComponent;
}());



/***/ }),

/***/ "./src/app/customers/customers-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/customers/customers-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CustomersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersRoutingModule", function() { return CustomersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _customers_card_customers_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customers-card/customers-card.component */ "./src/app/customers/customers-card/customers-card.component.ts");
/* harmony import */ var _customers_grid_customers_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customers-grid/customers-grid.component */ "./src/app/customers/customers-grid/customers-grid.component.ts");






var routes = [
    { path: '', component: _customers_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"] }
];
var CustomersRoutingModule = /** @class */ (function () {
    function CustomersRoutingModule() {
    }
    CustomersRoutingModule.components = [_customers_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"], _customers_card_customers_card_component__WEBPACK_IMPORTED_MODULE_4__["CustomersCardComponent"], _customers_grid_customers_grid_component__WEBPACK_IMPORTED_MODULE_5__["CustomersGridComponent"]];
    CustomersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CustomersRoutingModule);
    return CustomersRoutingModule;
}());



/***/ }),

/***/ "./src/app/customers/customers.component.html":
/*!****************************************************!*\
  !*** ./src/app/customers/customers.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"customers view indent\">\r\n    <div class=\"container\">\r\n        <header>\r\n            <h3>\r\n                <span class=\"glyphicon glyphicon-user\"></span>\r\n                {{ title }}\r\n            </h3>\r\n        </header>\r\n        <br />\r\n        <div class=\"row\">\r\n            <div class=\"col-md-10\">\r\n                <div class=\"navbar\">\r\n                    <ul class=\"nav navbar-nav\">\r\n                        <li class=\"toolbar-item\">\r\n                            <a (click)=\"changeDisplayMode(displayModeEnum.Card)\" [class.active]=\"displayMode === displayModeEnum.Card\">\r\n                                <span class=\"glyphicon glyphicon-th-large\"></span> Card View\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"toolbar-item\">\r\n                            <a (click)=\"changeDisplayMode(displayModeEnum.Grid)\" [class.active]=\"displayMode === displayModeEnum.Grid\">\r\n                                <span class=\"glyphicon glyphicon-align-justify\"></span> List View\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"toolbar-item\">\r\n                            <a (click)=\"changeDisplayMode(displayModeEnum.Map)\" [class.active]=\"displayMode === displayModeEnum.Map\">\r\n                                <span class=\"glyphicon glyphicon-map-marker\"></span> Map View\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"toolbar-item\">\r\n                            <a routerLink=\"/customers/0/edit\">\r\n                                <span class=\"glyphicon glyphicon-plus\"></span> New Customer\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                    <cm-filter-textbox class=\"navbar-right\"\r\n                     (changed)=\"filterChanged($event)\"></cm-filter-textbox>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n        <cm-customers-card \r\n          [customers]=\"filteredCustomers\" \r\n          [hidden]=\"displayMode !== displayModeEnum.Card\"></cm-customers-card>\r\n    \r\n        <cm-customers-grid \r\n          [customers]=\"filteredCustomers\" \r\n          [hidden]=\"displayMode !== displayModeEnum.Grid\"></cm-customers-grid>\r\n\r\n        <cm-map *ngIf=\"filteredCustomers.length\" \r\n            [zoom]=\"2\" \r\n            [enabled]=\"displayMode === displayModeEnum.Map\" \r\n            [hidden]=\"displayMode !== displayModeEnum.Map\">\r\n          <cm-map-point \r\n            *ngFor=\"let customer of filteredCustomers\" \r\n            [latitude]=\"customer.latitude\" \r\n            [longitude]=\"customer.longitude\"\r\n            [markerText]=\"'<h3>' + customer.firstName + ' ' + customer.lastName + '</a></h3>' + customer.city + ', ' + customer.state.name\"></cm-map-point>\r\n        </cm-map>\r\n\r\n        <cm-pagination\r\n            [totalItems]=\"totalRecords\" \r\n            [pageSize]=\"pageSize\" \r\n            (pageChanged)=\"pageChanged($event)\"></cm-pagination>\r\n          \r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/customers/customers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _core_services_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/filter.service */ "./src/app/core/services/filter.service.ts");
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/logger.service */ "./src/app/core/services/logger.service.ts");





var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(dataService, filterService, logger) {
        this.dataService = dataService;
        this.filterService = filterService;
        this.logger = logger;
        this.customers = [];
        this.filteredCustomers = [];
        this.displayModeEnum = DisplayModeEnum;
        this.totalRecords = 0;
        this.pageSize = 10;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        this.title = 'Customers';
        this.filterText = 'Filter Customers:';
        this.displayMode = DisplayModeEnum.Card;
        this.getCustomersPage(1);
    };
    CustomersComponent.prototype.changeDisplayMode = function (mode) {
        this.displayMode = mode;
    };
    CustomersComponent.prototype.pageChanged = function (page) {
        this.getCustomersPage(page);
    };
    CustomersComponent.prototype.getCustomersPage = function (page) {
        var _this = this;
        this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe(function (response) {
            _this.customers = _this.filteredCustomers = response.results;
            _this.totalRecords = response.totalRecords;
        }, function (err) { return _this.logger.log(err); }, function () { return _this.logger.log('getCustomersPage() retrieved customers for page: ' + page); });
    };
    CustomersComponent.prototype.filterChanged = function (data) {
        if (data && this.customers) {
            data = data.toUpperCase();
            var props = ['firstName', 'lastName', 'city', 'state.name'];
            this.filteredCustomers = this.filterService.filter(this.customers, data, props);
        }
        else {
            this.filteredCustomers = this.customers;
        }
    };
    CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cm-customers',
            template: __webpack_require__(/*! ./customers.component.html */ "./src/app/customers/customers.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _core_services_filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"],
            _core_services_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]])
    ], CustomersComponent);
    return CustomersComponent;
}());

var DisplayModeEnum;
(function (DisplayModeEnum) {
    DisplayModeEnum[DisplayModeEnum["Card"] = 0] = "Card";
    DisplayModeEnum[DisplayModeEnum["Grid"] = 1] = "Grid";
    DisplayModeEnum[DisplayModeEnum["Map"] = 2] = "Map";
})(DisplayModeEnum || (DisplayModeEnum = {}));


/***/ }),

/***/ "./src/app/customers/customers.module.ts":
/*!***********************************************!*\
  !*** ./src/app/customers/customers.module.ts ***!
  \***********************************************/
/*! exports provided: CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _customers_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers-routing.module */ "./src/app/customers/customers-routing.module.ts");




var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_customers_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomersRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
            declarations: [_customers_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomersRoutingModule"].components]
        })
    ], CustomersModule);
    return CustomersModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-customers-customers-module.js.map