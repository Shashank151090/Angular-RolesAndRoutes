(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-customer-customer-module"],{

/***/ "./src/app/customer/customer-details/customer-details.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/customer/customer-details/customer-details.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details-image {\r\n    height:100px;width:100px;margin-top:10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXItZGV0YWlscy9jdXN0b21lci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhLFlBQVksZ0JBQWdCO0NBQzVDIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXItZGV0YWlscy9jdXN0b21lci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlscy1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6MTAwcHg7d2lkdGg6MTAwcHg7bWFyZ2luLXRvcDoxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/customer/customer-details/customer-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/customer/customer-details/customer-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"customer\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2\">\r\n      <img src=\"assets/images/{{customer.gender | lowercase}}.png\" class=\"details-image\" />\r\n    </div>\r\n    <div class=\"col-md-10\">\r\n      <h4>    \r\n          {{ customer.firstName | capitalize }} {{ customer.lastName | capitalize }}&nbsp;          \r\n      </h4>\r\n      <br />\r\n      {{ customer.address }}\r\n      <br />\r\n      {{ customer.city }}, {{ customer.state.name }}\r\n    </div>\r\n  </div>    \r\n  <br /><br />\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\" *ngIf=\"customer && customer.latitude && customer.longitude\">\r\n      <cm-map [latitude]=\"customer.latitude\" \r\n           [longitude]=\"customer.longitude\" \r\n           [zoom]=\"10\" \r\n           [enabled]=\"mapEnabled\"\r\n           [markerText]=\"'<h3>' + customer.firstName + ' ' + customer.lastName + '</h3>' + customer.city + ', ' + customer.state.name\"></cm-map>\r\n    </div>\r\n  </div>\r\n</div>   \r\n<div *ngIf=\"!customer\" class=\"container\">\r\n   No customer found\r\n</div>  "

/***/ }),

/***/ "./src/app/customer/customer-details/customer-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/customer/customer-details/customer-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/data.service */ "./src/app/core/services/data.service.ts");




var CustomerDetailsComponent = /** @class */ (function () {
    function CustomerDetailsComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    CustomerDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to params so if it changes we pick it up. Could use this.route.parent.snapshot.params["id"] to simplify it.
        this.route.parent.params.subscribe(function (params) {
            var id = +params['id'];
            if (id) {
                _this.dataService.getCustomer(id)
                    .subscribe(function (customer) {
                    _this.customer = customer;
                    _this.mapEnabled = true;
                });
            }
        });
    };
    CustomerDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cm-customer-details',
            template: __webpack_require__(/*! ./customer-details.component.html */ "./src/app/customer/customer-details/customer-details.component.html"),
            styles: [__webpack_require__(/*! ./customer-details.component.css */ "./src/app/customer/customer-details/customer-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-edit/customer-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/customer/customer-edit/customer-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customer-form input[type='text'], \r\n.customer-form input[type='number'],\r\n.customer-form input[type='email'],\r\n.customer-form select {\r\n    width:100%;\r\n}\r\n\r\n.customer-form .ng-invalid {\r\n  border-left: 5px solid #a94442;\r\n}\r\n\r\n.customer-form .ng-valid {\r\n  border-left: 5px solid #42A948;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXItZWRpdC9jdXN0b21lci1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7SUFJSSxXQUFXO0NBQ2Q7O0FBRUQ7RUFDRSwrQkFBK0I7Q0FDaEM7O0FBRUQ7RUFDRSwrQkFBK0I7Q0FDaEMiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci9jdXN0b21lci1lZGl0L2N1c3RvbWVyLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b21lci1mb3JtIGlucHV0W3R5cGU9J3RleHQnXSwgXHJcbi5jdXN0b21lci1mb3JtIGlucHV0W3R5cGU9J251bWJlciddLFxyXG4uY3VzdG9tZXItZm9ybSBpbnB1dFt0eXBlPSdlbWFpbCddLFxyXG4uY3VzdG9tZXItZm9ybSBzZWxlY3Qge1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLmN1c3RvbWVyLWZvcm0gLm5nLWludmFsaWQge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjtcclxufVxyXG5cclxuLmN1c3RvbWVyLWZvcm0gLm5nLXZhbGlkIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/customer/customer-edit/customer-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/customer/customer-edit/customer-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <form (ngSubmit)=\"submit()\" #customerForm=\"ngForm\" class=\"customer-form\" novalidate>\r\n    <div class=\"form-group\">\r\n      <label>First Name</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"customer.firstName\" #firstName=\"ngModel\" required>\r\n      <div class=\"alert alert-danger\" [hidden]=\"firstName.pristine || firstName.valid\">First Name is required</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Last Name</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"customer.lastName\" #lastName=\"ngModel\" required>\r\n      <div class=\"alert alert-danger\" [hidden]=\"lastName.pristine || lastName.valid\">Last Name is required</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Address</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"address\" [(ngModel)]=\"customer.address\" #address=\"ngModel\" required>\r\n      <div class=\"alert alert-danger\" [hidden]=\"address.pristine || address.valid\">Address is required</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>City</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"city\" [(ngModel)]=\"customer.city\" #city=\"ngModel\" required>\r\n      <div class=\"alert alert-danger\" [hidden]=\"city.pristine || city.valid\">City is required</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>State</label>\r\n      <select class=\"form-control\" \r\n              [(ngModel)]=\"customer.state.abbreviation\"\r\n              name=\"state\" \r\n              required>\r\n          <option *ngFor=\"let state of states\" [ngValue]=\"state.abbreviation\">{{state.name}}</option>\r\n      </select>\r\n    </div>\r\n    <div *ngIf=\"customer\">\r\n      <div class=\"alert alert-warning\" *ngIf=\"customer.id && deleteMessageEnabled\">\r\n         Delete Customer?&nbsp;&nbsp;<button class=\"btn btn-danger\" (click)=\"delete($event)\">Yes</button>&nbsp;&nbsp;\r\n         <button class=\"btn btn-default\" (click)=\"deleteMessageEnabled = false\">No</button>\r\n      </div>\r\n      <button class=\"btn btn-danger\" *ngIf=\"customer.id && !deleteMessageEnabled\" (click)=\"deleteMessageEnabled = true\">Delete</button>&nbsp;&nbsp;\r\n\r\n      <div class=\"pull-right\" *ngIf=\"!deleteMessageEnabled\">\r\n        <button class=\"btn btn-default\" (click)=\"cancel($event)\">Cancel</button>&nbsp;&nbsp;\r\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"customerForm.pristine || !customerForm.valid\">{{ operationText }}</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"alert alert-danger\" *ngIf=\"errorMessage != null\">{{ errorMessage }}</div>\r\n  </form>\r\n  <br />\r\n</div>"

/***/ }),

/***/ "./src/app/customer/customer-edit/customer-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/customer/customer-edit/customer-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEditComponent", function() { return CustomerEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _core_modal_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/modal/modal.service */ "./src/app/core/modal/modal.service.ts");
/* harmony import */ var _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/growler/growler.service */ "./src/app/core/growler/growler.service.ts");
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/services/logger.service */ "./src/app/core/services/logger.service.ts");








var CustomerEditComponent = /** @class */ (function () {
    function CustomerEditComponent(router, route, dataService, growler, modalService, logger) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.growler = growler;
        this.modalService = modalService;
        this.logger = logger;
        this.customer = {
            id: 0,
            firstName: '',
            lastName: '',
            gender: '',
            address: '',
            city: '',
            state: {
                abbreviation: '',
                name: ''
            }
        };
        this.operationText = 'Insert';
    }
    CustomerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to params so if it changes we pick it up. Don't technically need that here
        // since param won't be changing while component is alive.
        // Could use this.route.parent.snapshot.params["id"] to simplify it.
        this.route.parent.params.subscribe(function (params) {
            var id = +params['id'];
            if (id !== 0) {
                _this.operationText = 'Update';
                _this.getCustomer(id);
            }
        });
        this.dataService.getStates().subscribe(function (states) { return _this.states = states; });
    };
    CustomerEditComponent.prototype.getCustomer = function (id) {
        var _this = this;
        this.dataService.getCustomer(id).subscribe(function (customer) {
            _this.customer = customer;
        });
    };
    CustomerEditComponent.prototype.submit = function () {
        var _this = this;
        if (this.customer.id === 0) {
            this.dataService.insertCustomer(this.customer)
                .subscribe(function (insertedCustomer) {
                if (insertedCustomer) {
                    // Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
                    _this.customerForm.form.markAsPristine();
                    _this.router.navigate(['/customers']);
                }
                else {
                    var msg = 'Unable to insert customer';
                    _this.growler.growl(msg, _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_6__["GrowlerMessageType"].Danger);
                    _this.errorMessage = msg;
                }
            }, function (err) { return _this.logger.log(err); });
        }
        else {
            this.dataService.updateCustomer(this.customer)
                .subscribe(function (status) {
                if (status) {
                    // Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
                    _this.customerForm.form.markAsPristine();
                    _this.growler.growl('Operation performed successfully.', _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_6__["GrowlerMessageType"].Success);
                    // this.router.navigate(['/customers']);
                }
                else {
                    var msg = 'Unable to update customer';
                    _this.growler.growl(msg, _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_6__["GrowlerMessageType"].Danger);
                    _this.errorMessage = msg;
                }
            }, function (err) { return _this.logger.log(err); });
        }
    };
    CustomerEditComponent.prototype.cancel = function (event) {
        event.preventDefault();
        // Route guard will take care of showing modal dialog service if data is dirty
        this.router.navigate(['/customers']);
    };
    CustomerEditComponent.prototype.delete = function (event) {
        var _this = this;
        event.preventDefault();
        this.dataService.deleteCustomer(this.customer.id)
            .subscribe(function (status) {
            if (status) {
                _this.router.navigate(['/customers']);
            }
            else {
                _this.errorMessage = 'Unable to delete customer';
            }
        }, function (err) { return _this.logger.log(err); });
    };
    CustomerEditComponent.prototype.canDeactivate = function () {
        if (!this.customerForm.dirty) {
            return true;
        }
        // Dirty show display modal dialog to user to confirm leaving
        var modalContent = {
            header: 'Lose Unsaved Changes?',
            body: 'You have unsaved changes! Would you like to leave the page and lose them?',
            cancelButtonText: 'Cancel',
            OKButtonText: 'Leave'
        };
        return this.modalService.show(modalContent);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('customerForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], CustomerEditComponent.prototype, "customerForm", void 0);
    CustomerEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cm-customer-edit',
            template: __webpack_require__(/*! ./customer-edit.component.html */ "./src/app/customer/customer-edit/customer-edit.component.html"),
            styles: [__webpack_require__(/*! ./customer-edit.component.css */ "./src/app/customer/customer-edit/customer-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_6__["GrowlerService"],
            _core_modal_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"],
            _core_services_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]])
    ], CustomerEditComponent);
    return CustomerEditComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-orders/customer-orders.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/customer/customer-orders/customer-orders.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\" *ngIf=\"customer && customer.orders\">\r\n        <h4>Orders for {{ customer.firstName | capitalize }} {{ customer.lastName | capitalize }}</h4>\r\n        <br />\r\n        <table class=\"table table-striped table-hover orders-table\">\r\n            <tr *ngFor=\"let order of customer.orders;trackBy:ordersTrackBy\">\r\n                <td>{{ order.productName }}</td>\r\n                <td class=\"text-right\">{{ order.itemCost | currency:'USD':'symbol' }}</td>    \r\n            </tr>\r\n            <tr class=\"summary-border\">\r\n                <td>&nbsp;</td>\r\n                <td class=\"text-right\">{{ customer.orderTotal | currency:'USD':'symbol' }}</td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div *ngIf=\"customer && !customer.orders\" class=\"row\">\r\n        No orders found\r\n    </div> \r\n    <div *ngIf=\"!customer\" class=\"row\">\r\n        No customer found\r\n    </div>  \r\n</div>"

/***/ }),

/***/ "./src/app/customer/customer-orders/customer-orders.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/customer/customer-orders/customer-orders.component.ts ***!
  \***********************************************************************/
/*! exports provided: CustomerOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerOrdersComponent", function() { return CustomerOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/data.service */ "./src/app/core/services/data.service.ts");




var CustomerOrdersComponent = /** @class */ (function () {
    function CustomerOrdersComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
        this.orders = [];
    }
    CustomerOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to params so if it changes we pick it up.  Could use this.route.parent.snapshot.params["id"] to simplify it.
        this.route.parent.params.subscribe(function (params) {
            var id = +params['id'];
            _this.dataService.getCustomer(id).subscribe(function (customer) {
                _this.customer = customer;
            });
        });
    };
    CustomerOrdersComponent.prototype.ordersTrackBy = function (index, orderItem) {
        return index;
    };
    CustomerOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cm-customer-orders',
            template: __webpack_require__(/*! ./customer-orders.component.html */ "./src/app/customer/customer-orders/customer-orders.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], CustomerOrdersComponent);
    return CustomerOrdersComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/customer/customer-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CustomerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerRoutingModule", function() { return CustomerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _customer_orders_customer_orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-orders/customer-orders.component */ "./src/app/customer/customer-orders/customer-orders.component.ts");
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-details/customer-details.component */ "./src/app/customer/customer-details/customer-details.component.ts");
/* harmony import */ var _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-edit/customer-edit.component */ "./src/app/customer/customer-edit/customer-edit.component.ts");
/* harmony import */ var _guards_can_activate_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/can-activate.guard */ "./src/app/customer/guards/can-activate.guard.ts");
/* harmony import */ var _guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/can-deactivate.guard */ "./src/app/customer/guards/can-deactivate.guard.ts");









var routes = [
    {
        path: '',
        component: _customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"],
        children: [
            { path: 'orders', component: _customer_orders_customer_orders_component__WEBPACK_IMPORTED_MODULE_4__["CustomerOrdersComponent"] },
            { path: 'details', component: _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_5__["CustomerDetailsComponent"] },
            {
                path: 'edit',
                component: _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_6__["CustomerEditComponent"],
                canActivate: [_guards_can_activate_guard__WEBPACK_IMPORTED_MODULE_7__["CanActivateGuard"]],
                canDeactivate: [_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_8__["CanDeactivateGuard"]]
            }
        ]
    }
];
var CustomerRoutingModule = /** @class */ (function () {
    function CustomerRoutingModule() {
    }
    CustomerRoutingModule.components = [_customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"], _customer_orders_customer_orders_component__WEBPACK_IMPORTED_MODULE_4__["CustomerOrdersComponent"], _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_5__["CustomerDetailsComponent"], _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_6__["CustomerEditComponent"]];
    CustomerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_guards_can_activate_guard__WEBPACK_IMPORTED_MODULE_7__["CanActivateGuard"], _guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_8__["CanDeactivateGuard"]]
        })
    ], CustomerRoutingModule);
    return CustomerRoutingModule;
}());



/***/ }),

/***/ "./src/app/customer/customer.component.html":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"orders view\">\r\n    <div class=\"container\">\r\n        <header>\r\n            <h3><span class=\"glyphicon glyphicon-user\"></span>&nbsp;&nbsp;Customer Information</h3>\r\n        </header>\r\n        <br />\r\n        <div class=\"navbar\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li class=\"toolbar-item\">\r\n                    <a routerLink=\"details\" routerLinkActive=\"active\">\r\n                       <span class=\"glyphicon glyphicon-list\"></span>&nbsp;&nbsp;Customer Details\r\n                    </a>\r\n                </li>\r\n                <li class=\"toolbar-item\">\r\n                    <a routerLink=\"orders\" routerLinkActive=\"active\">\r\n                        <span class=\"glyphicon glyphicon-tags\"></span>&nbsp;&nbsp;Customer Orders\r\n                    </a>\r\n                </li>\r\n                <li class=\"toolbar-item\">\r\n                    <a routerLink=\"edit\" routerLinkActive=\"active\">\r\n                        <span class=\"glyphicon glyphicon-edit\"></span>&nbsp;&nbsp;Edit Customer\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"container\">\r\n            <router-outlet></router-outlet>\r\n            <br />\r\n            <br />\r\n            <a routerLink=\"/customers\">View all Customers</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CustomerComponent = /** @class */ (function () {
    // displayMode: CustomerDisplayModeEnum;
    // displayModeEnum = CustomerDisplayModeEnum;
    function CustomerComponent(router) {
        this.router = router;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        // No longer needed due to routerLinkActive feature in Angular
        // const path = this.router.url.split('/')[3];
        // switch (path) {
        //   case 'details':
        //     this.displayMode = CustomerDisplayModeEnum.Details;
        //     break;
        //   case 'orders':
        //     this.displayMode = CustomerDisplayModeEnum.Orders;
        //     break;
        //   case 'edit':
        //     this.displayMode = CustomerDisplayModeEnum.Edit;
        //     break;
        // }
    };
    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cm-orders',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/customer/customer.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomerComponent);
    return CustomerComponent;
}());

// enum CustomerDisplayModeEnum {
//   Details=0,
//   Orders=1,
//   Edit=2
// }


/***/ }),

/***/ "./src/app/customer/customer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.module.ts ***!
  \*********************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-routing.module */ "./src/app/customer/customer-routing.module.ts");




var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_customer_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomerRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
            declarations: [_customer_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomerRoutingModule"].components]
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ }),

/***/ "./src/app/customer/guards/can-activate.guard.ts":
/*!*******************************************************!*\
  !*** ./src/app/customer/guards/can-activate.guard.ts ***!
  \*******************************************************/
/*! exports provided: CanActivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateGuard", function() { return CanActivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");




var CanActivateGuard = /** @class */ (function () {
    function CanActivateGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    CanActivateGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isAuthenticated) {
            return true;
        }
        // Track URL user is trying to go to so we can send them there after logging in
        this.authService.redirectUrl = state.url;
        this.router.navigate(['/login']);
        return false;
    };
    CanActivateGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CanActivateGuard);
    return CanActivateGuard;
}());



/***/ }),

/***/ "./src/app/customer/guards/can-deactivate.guard.ts":
/*!*********************************************************!*\
  !*** ./src/app/customer/guards/can-deactivate.guard.ts ***!
  \*********************************************************/
/*! exports provided: CanDeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivateGuard", function() { return CanDeactivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/logger.service */ "./src/app/core/services/logger.service.ts");



var CanDeactivateGuard = /** @class */ (function () {
    function CanDeactivateGuard(logger) {
        this.logger = logger;
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component, route, state) {
        this.logger.log("CustomerId: " + route.parent.params['id'] + " URL: " + state.url);
        // Check with component to see if we're able to deactivate
        return component.canDeactivate();
    };
    CanDeactivateGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]])
    ], CanDeactivateGuard);
    return CanDeactivateGuard;
}());



/***/ })

}]);
//# sourceMappingURL=app-customer-customer-module.js.map