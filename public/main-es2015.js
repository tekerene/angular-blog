(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+0qy":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-add/post-add.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pt-5 example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n        *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <div class=\"button-row\">\n    <a mat-flat-button color=\"primary\" [routerLink]=\"['/post']\"><mat-icon>list</mat-icon></a>\n  </div>\n  <mat-card class=\"example-card\">\n    <form [formGroup]=\"postForm\" (ngSubmit)=\"onFormSubmit()\">\n      <mat-form-field class=\"example-full-width\">\n        <mat-select formControlName=\"category\" [errorStateMatcher]=\"matcher\">\n          <mat-option *ngFor=\"let cat of categories\" [value]=\"cat._id\">\n            {{cat.catName}}\n          </mat-option>\n        </mat-select>\n        <mat-error>\n          <span *ngIf=\"!postForm.get('category').valid && postForm.get('category').touched\">Please select Category</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Post Title\" formControlName=\"postTitle\"\n                [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!postForm.get('postTitle').valid && postForm.get('postTitle').touched\">Please enter Post Title</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Post Author\" formControlName=\"postAuthor\"\n                [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!postForm.get('postAuthor').valid && postForm.get('postAuthor').touched\">Please enter Post Author</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <textarea matInput placeholder=\"Post Desc\" formControlName=\"postDesc\"\n                [errorStateMatcher]=\"matcher\"></textarea>\n        <mat-error>\n          <span *ngIf=\"!postForm.get('postDesc').valid && postForm.get('postDesc').touched\">Please enter Post Description</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n          <ckeditor matCkeditor placeholder=\"Post Content\" formControlName=\"postContent\"></ckeditor>\n          <mat-error>\n            <span *ngIf=\"!postForm.get('postContent').valid && postForm.get('postContent').touched\">Please enter Post Content</span>\n          </mat-error>\n        </mat-form-field>\n      <div class=\"button-row\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Post Reference\" formControlName=\"postReference\"\n                [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!postForm.get('postReference').valid && postForm.get('postReference').touched\">Please enter Post Ref</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Post Image URL\" formControlName=\"postImgUrl\"\n                  [errorStateMatcher]=\"matcher\">\n          <mat-error>\n            <span *ngIf=\"!postForm.get('postImgUrl').valid && postForm.get('postImgUrl').touched\">Please enter Post Image URL</span>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Post Read Time in minutes\" formControlName=\"readTime\"\n                  [errorStateMatcher]=\"matcher\">\n          <mat-error>\n            <span *ngIf=\"!postForm.get('readTime').valid && postForm.get('readTime').touched\">Please enter Post readTime Duration</span>\n          </mat-error>\n        </mat-form-field>\n        <button type=\"submit\"  mat-flat-button color=\"primary\"><mat-icon>save</mat-icon></button>\n      </div>\n    </form>\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "/1Pu":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-details/post-details.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n        *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <div class=\"button-row\">\n    <a mat-flat-button color=\"primary\" [routerLink]=\"['/post']\"><mat-icon>list</mat-icon></a>\n  </div>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title><h2>{{post.postTitle}}</h2></mat-card-title>\n      <p>Created by: {{post.postAuthor}}, {{post.created | date}}, updated: {{post.updated | date}}</p>\n      <mat-card-subtitle>{{post.postDesc}}</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image src=\"{{post.postImgUrl}}\" alt=\"{{post.postTitle}}\">\n    <mat-card-content>\n      <dl>\n        <dt>Post Content:</dt>\n        <dd [innerHTML]=\"post.postContent\"></dd>\n        <dt>Reference:</dt>\n        <dd>{{post.postReference}}</dd>\n      </dl>\n    </mat-card-content>\n    <mat-card-actions>\n      <a mat-flat-button color=\"primary\" [routerLink]=\"['/post/edit', post.id]\"><mat-icon>edit</mat-icon></a>\n      <a mat-flat-button color=\"warn\" (click)=\"deletePost(post.id)\"><mat-icon>delete</mat-icon></a>\n    </mat-card-actions>\n  </mat-card>\n</div>\n");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/factor/Desktop/project/sarkblog mean stack/client/src/main.ts */"zUnb");


/***/ }),

/***/ "0ydo":
/*!***********************************************************!*\
  !*** ./src/app/auth/login-admin/login-admin.component.ts ***!
  \***********************************************************/
/*! exports provided: MyErrorStateMatcher, LoginAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAdminComponent", function() { return LoginAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login-admin.component.html */ "eMJ/");
/* harmony import */ var _login_admin_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-admin.component.scss */ "5mYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/auth.service */ "7Vn+");







/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let LoginAdminComponent = class LoginAdminComponent {
    constructor(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.username = '';
        this.password = '';
        this.matcher = new MyErrorStateMatcher();
        this.isLoadingResults = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    onFormSubmit(form) {
        this.authService.login(form)
            .subscribe(res => {
            console.log(res);
            if (res.token) {
                localStorage.setItem('token', res.token);
                this.router.navigate(['post']);
            }
        }, (err) => {
            console.log(err);
        });
    }
    register() {
        this.router.navigate(['register']);
    }
};
LoginAdminComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
LoginAdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login-admin',
        template: _raw_loader_login_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_admin_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginAdminComponent);



/***/ }),

/***/ "4IuV":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-details/category-details.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n        *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <div class=\"button-row\">\n    <a mat-flat-button color=\"primary\" [routerLink]=\"['/category']\"><mat-icon>list</mat-icon></a>\n  </div>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title><h2>{{category.catName}}</h2></mat-card-title>\n      <mat-card-subtitle>{{category.catDesc}}</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image src=\"{{category.catImgUrl}}\" alt=\"{{category.catName}}\">\n    <mat-card-content>\n      <dl>\n        <dt>Category Content:</dt>\n        <dd [innerHTML]=\"category.catContent\"></dd>\n        <dt>Updated At:</dt>\n        <dd>{{category.updated | date}}</dd>\n      </dl>\n    </mat-card-content>\n    <mat-card-actions>\n      <a mat-flat-button color=\"primary\" [routerLink]=\"['/category/edit', category?.id  || 'all']\"><mat-icon>edit</mat-icon></a>\n      <a mat-flat-button color=\"warn\" (click)=\"deleteCategory(category.id)\"><mat-icon>delete</mat-icon></a>\n    </mat-card-actions>\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "5mYt":
/*!*************************************************************!*\
  !*** ./src/app/auth/login-admin/login-admin.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\n  background-color: #007bc7;\n  margin-top: 10em;\n  height: 60vh;\n}\n.example-container h2 {\n  color: #fff;\n  font-size: 2.5em;\n  font-weight: 600;\n}\n.example-container .example-card {\n  background-color: #fff;\n  border-radius: 22px;\n  padding: 2em;\n}\n.example-container .example-card .button-row button {\n  width: 100%;\n  padding: 5px;\n  border-radius: 27px;\n  font-size: 1.3em;\n  font-weight: 700;\n}\n.example-container .example-card .button-row .button-register {\n  background-color: #01ba94;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLWFkbWluLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlL352YXJpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJDVVE7RURUUixnQkFBQTtFQUNBLFlBQUE7QUFESjtBQUVJO0VBQ0ksV0NKTztFREtQLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUVJO0VBQ0ksc0JDVE87RURVUCxtQkFBQTtFQUNBLFlBQUE7QUFBUjtBQUdRO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFEUjtBQUdRO0VBQ0kseUJDbkJHO0FEa0JmIiwiZmlsZSI6ImxvZ2luLWFkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3N0eWxlL352YXJpYWJsZS5zY3NzJztcblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRCbHVlO1xuICAgIG1hcmdpbi10b3A6IDEwZW07XG4gICAgaGVpZ2h0OiA2MHZoO1xuICAgIGgyIHtcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5V2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIC5leGFtcGxlLWNhcmR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5V2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gICAgICAgIHBhZGRpbmc6IDJlbTtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjQpLCByZ2JhKDAsMCwwLDAuMikpLCB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zdHlsZS9waG90by0xNTY4OTkyNjg4MDY1LTUzNmFhZDhhMTJmNi5qcGVnJyk7XG4gICAgLmJ1dHRvbi1yb3cge1xuICAgICAgICBidXR0b257XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI3cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbi1yZWdpc3RlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeUdyZWVuO1xuICAgICAgICB9XG4gICAgfVxuICAgIH1cbn1cbkBtZWRpYShtYXgtd2lkdGg6IDU3NS45OHB4KXtcblxufSIsIlxuXG4kcHJpbWFyeUNvbG9yOiAjN2Y3ZjdmO1xuJHByaW1hcnlXaGl0ZTogI2ZmZjtcbiRwcmltYXJ5QmxhY2s6ICMwMDA7XG4kcHJpbWFyeUJsdWU6ICMwMDYxZjI7XG4kcHJpbWFyeUdyZWVuOiAjMDFiYTk0O1xuJHByaW1hcnlUZWFsOiAjMDVhYjlmO1xuJHByaW1hcnlEYXJrOiMxZjJkNDE7XG4kc2Vjb25kYXJ5V2hpdGU6ICNhN2FiYjM7XG4kc2Vjb25kYXJ5RGFyazogI2EwYTdiMDtcbiRzZWNvbmRhcnlDb2xvcjogIzMwNDA2OTtcbiRwcmltYXJ5R3JheTogIzhlOTVhMDtcbiRsaWdodEJsdWU6ICMwMDdiYzc7Il19 */");

/***/ }),

/***/ "5p0G":
/*!*******************************************!*\
  !*** ./src/app/_services/post.service.ts ***!
  \*******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");






const apiUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl}api/post/`;
//const apiUrl = 'api/post/';
let PostService = class PostService {
    constructor(http) {
        this.http = http;
    }
    getPosts() {
        return this.http.get(apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched Posts')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getPosts', [])));
    }
    getPost(id) {
        const url = `${apiUrl}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log(`fetched post by id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getPost id=${id}`)));
    }
    addPost(post) {
        return this.http.post(apiUrl, post).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((prod) => console.log(`added post w/ id=${post.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addPost')));
    }
    updatePost(id, post) {
        const url = `${apiUrl}/${id}`;
        return this.http.put(url, post).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log(`updated post id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updatePost')));
    }
    deletePost(id) {
        const url = `${apiUrl}/${id}`;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log(`deleted post id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deletePost')));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error); // log to console instead
            this.log(`${operation} failed: ${error.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
    log(message) {
        console.log(message);
    }
};
PostService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PostService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PostService);



/***/ }),

/***/ "6Cpu":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n        *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"d-flex\">\n      \n      <h1 class=\"mr-3\">\n        <a routerLink=\"/post\">Posts</a>\n      </h1>\n      <h1 class=\"ml-3\">\n        <a routerLink=\"/category\">Category</a>\n      </h1>\n    </div>\n  </div>\n\n  <div class=\"button-row\">\n    <a mat-flat-button color=\"primary\" [routerLink]=\"['add']\"><mat-icon>add</mat-icon></a>\n  </div>\n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"data\" class=\"example-table\"\n            matSort matSortActive=\"catName\" matSortDisableClear matSortDirection=\"asc\">\n\n      <!-- Category Name Column -->\n      <ng-container matColumnDef=\"catName\">\n        <th mat-header-cell *matHeaderCellDef>Category Name</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.catName}}</td>\n      </ng-container>\n\n      <!-- Category Description Column -->\n      <ng-container matColumnDef=\"catDesc\">\n        <th mat-header-cell *matHeaderCellDef>Category Description</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.catDesc}}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['details/', row._id]\"></tr>\n    </table>\n  </div>\n</div>\n");

/***/ }),

/***/ "6PNY":
/*!*****************************************************************!*\
  !*** ./src/app/category/category-add/category-add.component.ts ***!
  \*****************************************************************/
/*! exports provided: MyErrorStateMatcher, CategoryAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryAddComponent", function() { return CategoryAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_category_add_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./category-add.component.html */ "ikNA");
/* harmony import */ var _category_add_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-add.component.scss */ "ENbU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/category.service */ "AfT/");







/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let CategoryAddComponent = class CategoryAddComponent {
    constructor(router, api, formBuilder) {
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.catName = '';
        this.catDesc = '';
        this.catImgUrl = '';
        this.catContent = '';
        this.isLoadingResults = false;
        this.matcher = new MyErrorStateMatcher();
    }
    ngOnInit() {
        this.categoryForm = this.formBuilder.group({
            catName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            catDesc: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            catImgUrl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            catContent: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    onFormSubmit() {
        this.isLoadingResults = true;
        this.api.addCategory(this.categoryForm.value)
            .subscribe((res) => {
            const id = res._id;
            this.isLoadingResults = false;
            this.router.navigate(['/category/details', id]);
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
CategoryAddComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
CategoryAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-category-add',
        template: _raw_loader_category_add_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_category_add_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CategoryAddComponent);



/***/ }),

/***/ "7Vn+":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");






const apiUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl}api/auth/`;
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.isLoggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loggedInStatus = false;
    }
    getUsers() {
        return this.http.get(apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched Users')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getUsers', [])));
    }
    getUser(id) {
        const url = `${apiUrl}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log(`fetched User by id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getUser id=${id}`)));
    }
    login(data) {
        return this.http.post(apiUrl + 'login', data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => {
            this.isLoggedIn.emit(true);
            this.loggedInStatus = true;
            localStorage.setItem('sarkblog', 'true');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('login', [])));
    }
    // logout(): Observable<any> {
    //   return this.http.post<any>(apiUrl + 'logout', {})
    //     .pipe(
    //       tap(_ => {
    //         this.isLoggedIn.emit(false);
    //         this.loggedInStatus = false;
    //       }),
    //       catchError(this.handleError('logout', []))
    //     );
    // }
    logout() {
        localStorage.clear();
    }
    register(data) {
        return this.http.post(apiUrl + 'register', data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('login')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('login', [])));
    }
    isAuthenticated() {
        // Check whether the current time is past the
        // access token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error); // log to console instead
            this.log(`${operation} failed: ${error.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
    log(message) {
        console.log(message);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService.propDecorators = {
    isLoggedIn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "8PEf":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "9R8I":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./details.component.html */ "Fmb7");
/* harmony import */ var _details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details.component.scss */ "aZnr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/auth.service */ "7Vn+");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/category.service */ "AfT/");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/home.service */ "x+LS");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_services/post.service */ "5p0G");









let DetailsComponent = class DetailsComponent {
    constructor(authApi, route, cat, api, postService, router) {
        this.authApi = authApi;
        this.route = route;
        this.cat = cat;
        this.api = api;
        this.postService = postService;
        this.router = router;
        this.pageId = '';
        this.catList = [];
        this.categories = [];
        this.postList = [];
        this.users = [];
        this.post = {
            category: '',
            id: '',
            postTitle: '',
            postAuthor: '',
            postDesc: '',
            postContent: '',
            postReference: '',
            postImgUrl: '',
            created: null,
            updated: null,
            readTime: null
        };
        this.checkCat = {
            id: '',
            catName: '',
            catDesc: '',
            catImgUrl: '',
            catContent: '',
            updated: null
        };
        this.isLoadingResults = true;
    }
    ngOnInit() {
        this.getPostDetails(this.route.snapshot.params.id);
        this.getPostCategory(this.route.snapshot.params.id);
        this.getusers();
        this.getPost();
        this.cat.getCategories()
            .subscribe((res) => {
            this.catList = res;
            console.log(this.catList);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
        /**
         * @VISITOR COUNTER
         */
        this.api.incrementPageCount().then(data => this.serviceCount.changeCount(data));
    }
    getPostDetails(id) {
        this.api.getPost(id)
            .subscribe((data) => {
            this.post = data;
            console.log(this.post);
            this.pageId = `post/details/${this.post.id}`;
            this.isLoadingResults = false;
        });
    }
    getPostCategory(id) {
        this.cat.getCategory(id)
            .subscribe((data) => {
            //console.log(data)
            this.checkCat = data;
            console.log(this.checkCat);
            this.isLoadingResults = false;
        });
    }
    getPost() {
        this.postService.getPosts().subscribe((res) => {
            this.postList = res;
            console.log(this.postList);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    getCategories() {
        this.cat.getCategories().subscribe((res) => {
            this.categories = res;
            console.log(this.categories);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    getusers() {
        this.authApi.getUsers().subscribe((res) => {
            this.users = res;
            console.log(this.users);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
DetailsComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"] },
    { type: _services_home_service__WEBPACK_IMPORTED_MODULE_7__["HomeService"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_8__["PostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
DetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-details',
        template: _raw_loader_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetailsComponent);



/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.scss */ "bdh1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/post.service */ "5p0G");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/home.service */ "x+LS");







let HomeComponent = class HomeComponent {
    constructor(api, postService, toast) {
        this.api = api;
        this.postService = postService;
        this.toast = toast;
        this.posts = [];
        this.isLoadingResults = true;
        this.page = 1;
        //this.posts = new Array<any>();
    }
    ngOnInit() {
        this.api.getPosts()
            .subscribe((res) => {
            this.posts = res;
            console.log(this.posts);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    toastSuccess() {
        this.toast.success("successfull", "toast up");
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_home_service__WEBPACK_IMPORTED_MODULE_6__["HomeService"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeComponent);



/***/ }),

/***/ "AfT/":
/*!***********************************************!*\
  !*** ./src/app/_services/category.service.ts ***!
  \***********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");






const apiUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl}/api/category/`;
//const apiUrl = 'api/category/';
let CategoryService = class CategoryService {
    constructor(http) {
        this.http = http;
    }
    getCategories() {
        return this.http.get(apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched Categories')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCategories', [])));
    }
    getCategory(id) {
        const url = `${apiUrl}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log(`fetched category by id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getCategory id=${id}`)));
    }
    addCategory(category) {
        return this.http.post(apiUrl, category).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((prod) => console.log(`added category w/ id=${category.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addCategory')));
    }
    updateCategory(id, category) {
        const url = `${apiUrl}/${id}`;
        return this.http.put(url, category).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log(`updated category id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateCategory')));
    }
    deleteCategory(id) {
        const url = `${apiUrl}/${id}`;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log(`deleted category id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteCategory')));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error); // log to console instead
            this.log(`${operation} failed: ${error.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
    log(message) {
        console.log(message);
    }
};
CategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoryService);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: 'https://sarkblog.herokuapp.com/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BGiY":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contact\">\n    <div class=\"container\">\n        <div class=\"jumbotron\">\n            <h1 class=\"m-4\">Welcome to the contact Page</h1>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "CO2p":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navbar-banner\">\n  <nav class=\"navbar fixed-top navbar-expand-md navbar-dark bg-light\">\n    <div class=\"container\">\n\n      <a class=\"navbar-brand\">\n        <img class=\"img-fluid sarkblog-logo\" src=\"../../assets/style/sark (1).png\" alt=\"\">\n      </a>\n      <button class=\"bg-info navbar-toggler navbar-toggler-right\" (click)=\"toggleNavbarCollapsing()\" type=\"button\"\n        data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\"\n        aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" [class.collapse]=\"navbarCollapsed\" id=\"navbarResponsive\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/home\" routerlinkactive=\"active\">Home</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/blog\" routerlinkactive=\"active\">Blog</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/contact\" routerlinkactive=\"active\">Contact</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\">\n              <i class=\"fa fa-user\"></i>\n            </a>\n          </li>\n          <li class=\"nav-button\">\n            <button class=\"btn\" *ngIf=\"auth\" routerLink=\"/login\">Join Us<i class=\"fas fa-arrow-right\"></i></button>\n            <button class=\"btn\" *ngIf=\"!auth\" (click)=\"logout()\"><i class=\"fa fa-user\"></i>Log Out</button>\n\n          </li>\n\n        </ul>\n      </div>\n    </div>\n  </nav>\n</div>");

/***/ }),

/***/ "CRz0":
/*!*********************************************************!*\
  !*** ./src/app/post/post-edit/post-edit.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LWVkaXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "DA75":
/*!*******************************************************!*\
  !*** ./src/app/post/post-add/post-add.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LWFkZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ENbU":
/*!*******************************************************************!*\
  !*** ./src/app/category/category-add/category-add.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS1hZGQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "EPmy":
/*!****************************************************!*\
  !*** ./src/app/bycategory/bycategory.component.ts ***!
  \****************************************************/
/*! exports provided: BycategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BycategoryComponent", function() { return BycategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bycategory_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bycategory.component.html */ "TWh7");
/* harmony import */ var _bycategory_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bycategory.component.scss */ "LNU8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/home.service */ "x+LS");






let BycategoryComponent = class BycategoryComponent {
    constructor(route, api) {
        this.route = route;
        this.api = api;
        this.posts = [];
        this.isLoadingResults = true;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.getPostsByCategory(this.route.snapshot.params.id);
        });
    }
    getPostsByCategory(id) {
        this.posts = [];
        console.log(this.posts, "######+++++ category ");
        this.api.getPostsByCategory(id)
            .subscribe((res) => {
            this.posts = res;
            console.log(this.posts);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
BycategoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"] }
];
BycategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bycategory',
        template: _raw_loader_bycategory_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bycategory_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BycategoryComponent);



/***/ }),

/***/ "F7z0":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-header-dark {\n  color: #fff;\n  background-color: #1f2d41;\n}\n\n.page-header {\n  position: relative;\n  padding-top: 20rem;\n  padding-bottom: 0;\n}\n\n.bg-img-cover {\n  background-position: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('photo-1568992688065-536aad8a12f6.jpeg');\n}\n\nheader .svg-border-rounded {\n  border: none;\n}\n\n.blog-header {\n  padding-top: 4em;\n  position: relative;\n}\n\n.blog-header .post-preview-featured-img {\n  height: 100%;\n  width: 100%;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('computer.jpeg');\n  background-position: 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.blog-header .bg-light {\n  background-color: #eff3f9 !important;\n}\n\n.blog-header .card.lift {\n  text-decoration: none;\n  color: inherit;\n}\n\n.blog-header .card {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 0 solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.35rem;\n}\n\n.blog-header .lift {\n  box-shadow: 0 0.15rem 1.75rem 0 rgba(31, 45, 65, 0.15);\n  transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  /* transition: transform .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out,-webkit-box-shadow .15s ease-in-out; */\n}\n\n.blog-header .no-gutters {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.blog-header .no-gutters .card-body {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 1.35rem;\n}\n\n.blog-header .no-gutters .card-body .card-title {\n  font-size: 1.75rem;\n  color: #304069;\n}\n\n.blog-header .no-gutters .card-body .card-text {\n  font-size: 1.2rem;\n  font-weight: 300;\n}\n\n.blog-header .no-gutters .card-body .post-preview-meta {\n  display: flex;\n}\n\n.blog-header .no-gutters .card-body .post-preview-meta img {\n  border-radius: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 72px;\n  width: auto;\n}\n\n.blog-header .no-gutters .card-body .post-preview-meta .post-preview-meta-details {\n  padding: 0.5em;\n}\n\n.blog-banner .recent-blog {\n  font-size: 3em;\n}\n\n.blog-banner .card-img-top {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 220px;\n  border: none;\n}\n\n.blog-banner .card-body p {\n  color: #a0a7b0;\n  font-size: 1em;\n  word-spacing: 0.2em;\n  letter-spacing: 0.01em;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.blog-banner .card-body p:hover {\n  text-decoration: none;\n}\n\n.blog-banner .card {\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.35rem;\n  text-decoration: none;\n  box-shadow: 0 -0.85rem 4.8rem 0 rgba(31, 45, 65, 0.15);\n  overflow: hidden;\n  position: relative;\n}\n\n.blog-banner .card .card-body .card-title {\n  margin-bottom: 0.75rem;\n  color: #304069;\n}\n\n.blog-banner .card .card-footer {\n  border: none;\n}\n\n.blog-banner .card .card-footer .post-preview-meta {\n  display: flex;\n  color: #8e95a0;\n}\n\n.blog-banner .card .card-footer .post-preview-meta img {\n  border-radius: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 40px;\n  width: 40px;\n}\n\n.blog-banner .card .card-footer .post-preview-meta-details {\n  padding: 0.5em;\n}\n\n.blog-banner .card .card-footer .post-update {\n  display: flex;\n}\n\n.blog-banner .card .card-footer .post-update .post-preview-meta-details-name {\n  margin: 16px 1px 13px 2px;\n}\n\n.blog-banner .lift {\n  box-shadow: 0 0.15rem 1.75rem 0 rgba(31, 45, 65, 0.15);\n  /* transition: transform .15s ease-in-out,box-shadow .15s ease-in-out; */\n  transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.blog-banner .lift:hover {\n  transform: translateY(-0.33333rem);\n  box-shadow: 0 0.5rem 2rem 0 rgba(31, 45, 65, 0.25);\n}\n\n.pagination-banner .pagination-blog .page-item .page-link {\n  border-radius: 0.35rem;\n  border: none;\n  padding: 0.75rem 1rem;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.pagination-banner .page-item.active .page-link {\n  z-index: 3;\n  color: #fff;\n  background-color: #0061f2;\n  border-color: #0061f2;\n}\n\n.pagination-banner .page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #0061f2;\n  background-color: #fff;\n  border: 1px solid #d7dce3;\n}\n\n.pagination-banner .pagination-blog .page-item {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Jsb2cuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGUvfnZhcmlhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUhBQUE7QUFFRjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsK0ZBQUE7RUFFQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFHRTtFQUNFLG9DQUFBO0FBREo7O0FBR0U7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFHRTtFQUdFLGFBQUE7RUFJQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FBREo7O0FBSUU7RUFFRSxzREFBQTtFQUtBLHFFQUFBO0VBQ0EsK0lBQUE7QUFKSjs7QUFPRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUxKOztBQU1JO0VBR0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUpOOztBQU1NO0VBQ0Usa0JBQUE7RUFDQSxjQ3ZFUztBRG1FakI7O0FBTU07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBSlI7O0FBTU07RUFDRSxhQUFBO0FBSlI7O0FBS1E7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUhWOztBQUtRO0VBQ0UsY0FBQTtBQUhWOztBQVdFO0VBQ0UsY0FBQTtBQVJKOztBQVVFO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQVJKOztBQVdJO0VBQ0UsY0MxR1U7RUQyR1YsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFUTjs7QUFXSTtFQUNFLHFCQUFBO0FBVE47O0FBWUU7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFFQSxzREFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFWSjs7QUFhTTtFQUNFLHNCQUFBO0VBQ0EsY0NySVM7QUQwSGpCOztBQWVJO0VBQ0UsWUFBQTtBQWJOOztBQWNNO0VBQ0UsYUFBQTtFQUNBLGNDNUlNO0FEZ0lkOztBQWFRO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFYVjs7QUFjTTtFQUNFLGNBQUE7QUFaUjs7QUFjTTtFQUNFLGFBQUE7QUFaUjs7QUFhUTtFQUNFLHlCQUFBO0FBWFY7O0FBZ0JFO0VBRUUsc0RBQUE7RUFLQSx3RUFBQTtFQUNBLHFFQUFBO0FBaEJKOztBQW1CRTtFQUVFLGtDQUFBO0VBRUEsa0RBQUE7QUFqQko7O0FBcUJFO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBbEJKOztBQW9CRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQWxCSjs7QUFvQkU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQWxCSjs7QUFvQkU7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0FBbEJKIiwiZmlsZSI6ImJsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vYXNzZXRzL3N0eWxlL352YXJpYWJsZS5zY3NzXCI7XG4ucGFnZS1oZWFkZXItZGFyayB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyZDQxO1xufVxuLnBhZ2UtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogMjByZW07XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuLmJnLWltZy1jb3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuOCksIHJnYmEoMCwgMCwgMCwgMC43KSksXG4gICAgdXJsKFwiLi4vLi4vYXNzZXRzL3N0eWxlL3Bob3RvLTE1Njg5OTI2ODgwNjUtNTM2YWFkOGExMmY2LmpwZWdcIik7XG59XG5oZWFkZXIge1xuICAuc3ZnLWJvcmRlci1yb3VuZGVkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbn1cblxuLmJsb2ctaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDRlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5wb3N0LXByZXZpZXctZmVhdHVyZWQtaW1nIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC44KSwgcmdiYSgwLCAwLCAwLCAwLjcpKSxcbiAgICAgIHVybChcIi4uLy4uL2Fzc2V0cy9zdHlsZS9jb21wdXRlci5qcGVnXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbiAgLmJnLWxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmM2Y5ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNhcmQubGlmdCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG4gIC5jYXJkIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogMCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xuICB9XG5cbiAgLmxpZnQge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwLjE1cmVtIDEuNzVyZW0gMCByZ2JhKDMxLCA0NSwgNjUsIDAuMTUpO1xuICAgIGJveC1zaGFkb3c6IDAgMC4xNXJlbSAxLjc1cmVtIDAgcmdiYSgzMSwgNDUsIDY1LCAwLjE1KTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0LFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0LFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgICAvKiB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQsLXdlYmtpdC10cmFuc2Zvcm0gLjE1cyBlYXNlLWluLW91dCwtd2Via2l0LWJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDsgKi9cbiAgfVxuXG4gIC5uby1ndXR0ZXJzIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICAtbXMtZmxleDogMSAxIGF1dG87XG4gICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgICAgIHBhZGRpbmc6IDEuMzVyZW07XG5cbiAgICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgICAgICBjb2xvcjogJHNlY29uZGFyeUNvbG9yO1xuICAgICAgfVxuICAgICAgLmNhcmQtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgfVxuICAgICAgLnBvc3QtcHJldmlldy1tZXRhIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIGhlaWdodDogNzJweDtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAucG9zdC1wcmV2aWV3LW1ldGEtZGV0YWlscyB7XG4gICAgICAgICAgcGFkZGluZzogMC41ZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmJsb2ctYmFubmVyIHtcbiAgLnJlY2VudC1ibG9nIHtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgfVxuICAuY2FyZC1pbWctdG9wIHtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICAuY2FyZC1ib2R5IHtcbiAgICBwIHtcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5RGFyaztcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgd29yZC1zcGFjaW5nOiAwLjJlbTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICAgIHA6aG92ZXIge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxuICAuY2FyZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAtMC44NXJlbSA0LjhyZW0gMCByZ2JhKDMxLCA0NSwgNjUsIDAuMTUpO1xuICAgIGJveC1zaGFkb3c6IDAgLTAuODVyZW0gNC44cmVtIDAgcmdiYSgzMSwgNDUsIDY1LCAwLjE1KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5jYXJkLWJvZHkge1xuICAgICAgLmNhcmQtdGl0bGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICAgICAgICBjb2xvcjogJHNlY29uZGFyeUNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJkLWZvb3RlciB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAucG9zdC1wcmV2aWV3LW1ldGEge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBjb2xvcjogJHByaW1hcnlHcmF5O1xuICAgICAgICBpbWcge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAucG9zdC1wcmV2aWV3LW1ldGEtZGV0YWlscyB7XG4gICAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgICAgfVxuICAgICAgLnBvc3QtdXBkYXRlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLnBvc3QtcHJldmlldy1tZXRhLWRldGFpbHMtbmFtZSB7XG4gICAgICAgICAgbWFyZ2luOiAxNnB4IDFweCAxM3B4IDJweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAubGlmdCB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAuMTVyZW0gMS43NXJlbSAwIHJnYmEoMzEsIDQ1LCA2NSwgMC4xNSk7XG4gICAgYm94LXNoYWRvdzogMCAwLjE1cmVtIDEuNzVyZW0gMCByZ2JhKDMxLCA0NSwgNjUsIDAuMTUpO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4xNXMgZWFzZS1pbi1vdXQsXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4xNXMgZWFzZS1pbi1vdXQsXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgLyogdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xNXMgZWFzZS1pbi1vdXQsYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0OyAqL1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dCxcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LWJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgLmxpZnQ6aG92ZXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjMzMzMzcmVtKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMzMzMzNyZW0pO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwLjVyZW0gMnJlbSAwIHJnYmEoMzEsIDQ1LCA2NSwgMC4yNSk7XG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMnJlbSAwIHJnYmEoMzEsIDQ1LCA2NSwgMC4yNSk7XG4gIH1cbn1cbi5wYWdpbmF0aW9uLWJhbm5lciB7XG4gIC5wYWdpbmF0aW9uLWJsb2cgLnBhZ2UtaXRlbSAucGFnZS1saW5rIHtcbiAgICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxuICAucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rIHtcbiAgICB6LWluZGV4OiAzO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDYxZjI7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA2MWYyO1xuICB9XG4gIC5wYWdlLWxpbmsge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICBjb2xvcjogIzAwNjFmMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkN2RjZTM7XG4gIH1cbiAgLnBhZ2luYXRpb24tYmxvZyAucGFnZS1pdGVtIHtcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG4gIH1cbn1cbiIsIlxuXG4kcHJpbWFyeUNvbG9yOiAjN2Y3ZjdmO1xuJHByaW1hcnlXaGl0ZTogI2ZmZjtcbiRwcmltYXJ5QmxhY2s6ICMwMDA7XG4kcHJpbWFyeUJsdWU6ICMwMDYxZjI7XG4kcHJpbWFyeUdyZWVuOiAjMDFiYTk0O1xuJHByaW1hcnlUZWFsOiAjMDVhYjlmO1xuJHByaW1hcnlEYXJrOiMxZjJkNDE7XG4kc2Vjb25kYXJ5V2hpdGU6ICNhN2FiYjM7XG4kc2Vjb25kYXJ5RGFyazogI2EwYTdiMDtcbiRzZWNvbmRhcnlDb2xvcjogIzMwNDA2OTtcbiRwcmltYXJ5R3JheTogIzhlOTVhMDtcbiRsaWdodEJsdWU6ICMwMDdiYzc7Il19 */");

/***/ }),

/***/ "Fmb7":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"detail-banner\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-9 col-sm-12\">\n\n                <div class=\"main-banner\">\n\n                    <div class=\"example-container mat-elevation-z8\">\n                        <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n                            <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n                        </div>\n                        <mat-card class=\"example-card\" [routerLink]=\"['/details/', post.id]\">\n                            <mat-card-header>\n                                <!-- <div mat-card-avatar class=\"example-header-image\"></div> -->\n                                <mat-card-title class=\"post-title\">{{post.postTitle}}</mat-card-title>\n\n                                <mat-card-subtitle>{{post.postDesc}}</mat-card-subtitle>\n                            </mat-card-header>\n                            <img class=\"post-image\" mat-card-image src=\"{{post.postImgUrl}}\" alt=\"{{post.postTitle}}\">\n                            <div class=\"post-info\">\n                                <h5>Posted on:\n                                    {{post.updated | date: 'dd MMM yyyy'}},</h5>\n                                <ng-container>\n                                    <div class=\"post-info-sub d-flex\">\n                                        <p class=\"mr-4\">\n                                            <span>Author:\n                                            </span>\n                                            <strong>{{post.postAuthor}}</strong>\n                                        </p>\n                                        <p>\n                                            <i class=\"fa fa-eye mr-2\"></i>{{serviceCount}}</p>\n                                        <p>{{post.readTime}}\n                                            min Read</p>\n                                        <!-- <ng-container>\n                                            <p>{{catList.catName}}</p>\n                                        </ng-container> -->\n\n\n                                    </div>\n                                </ng-container>\n\n\n                            </div>\n                            <!-- <div class=\"content\">\n                                        <div class=\"text-contain text-center\" [innerHTML]=\"post.postContent\"></div>\n                                        </div> -->\n                            <mat-card-content [innerHTML]=\"post.postContent\"></mat-card-content>\n                            <mat-card-actions>\n                                <button mat-button>LIKE</button>\n                                <button mat-button>SHARE</button>\n                                <button mat-button>Comment</button>\n                                <button mat-button>Follow</button>\n                            </mat-card-actions>\n                        </mat-card>\n                    </div>\n                </div>\n            </div>\n            <div class=\"side-banner col-md-3 col-sm-12\">\n                <div class=\"post-share-area mb-40 item-shadow-1 \">\n                    <p>Social Accounts!</p>\n                    <ul class=\"social-default item-inline d-flex\">\n                        <li>\n                            <a href=\"https://www.facebook.com/sharer/sharer.php?u=https://www.sarkblog.com/blog\"\n                                class=\"social-button facebook\" id=\"\" title=\"\">\n                                <span class=\"fab fa-facebook\"></span>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"https://twitter.com/intent/tweet?text=Default+share+text&amp;url=https://www.sarkblog.com/blog\"\n                                class=\"social-button twitter\" id=\"\" title=\"\">\n                                <span class=\"fab fa-twitter\"></span>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"http://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.sarkblog.com/blog\"\n                                class=\"social-button linkedin\" id=\"\" title=\"\">\n                                <span class=\"fab fa-linkedin\"></span>\n                            </a>\n                        </li>\n                        <li>\n                            <a target=\"_blank\" href=\"https://wa.me/?text=https://www.sarkblog.com/blog\"\n                                class=\"social-button whatsapp\" id=\"\" title=\"\">\n                                <span class=\"fab fa-whatsapp\"></span>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n                <!-- Search Widget -->\n                <div class=\"card mb-4\">\n                    <h5 class=\"card-header\">Search</h5>\n                    <div class=\"card-body\">\n                        <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n                            <span class=\"input-group-append\">\n                                <button class=\"btn btn-secondary\" type=\"button\">Go!</button>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Categories Widget -->\n                <div class=\"card my-4\">\n                    <div class=\"trending-posts\">\n                        <div class=\"topic-border color-cod-gray mb-30\">\n                            <div class=\"topic-box-lg color-cod-gray\">Categories</div>\n                        </div>\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-6\" *ngFor=\"let cat of catList\">\n\n                                    <ul class=\"list-unstyled mb-0\">\n                                        <li>\n                                            <a href=\"#\">{{cat.catName}}</a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Side Widget -->\n                <div class=\"card my-4\">\n                    <ng-container *ngFor=\"let user of users.reverse(), let i = index\">\n                        <div *ngIf=\"i<1\" class=\"m-0 p-0 trending-posts\">\n                            <div class=\"topic-border color-cod-gray mb-30\">\n                                <div class=\"topic-box-lg color-cod-gray\">About The Author</div>\n                            </div>\n                            <div class=\"card-body \"> \n                                \n                                <div class=\"author\">\n                                    <h6 class=\"text-center\">{{user.fullName}}</h6>\n                                    <div class=\"user-img\">\n                                        <img class=\"user-image img-fluid\" src=\"{{user.userProfileUrl}}\" alt=\"{{user.username}}\">\n                                    </div>\n                                \n                                    <p>{{user.bio}}</p>\n\n                                    <div class=\"border\">\n                                        <div class=\"social-accounts\">\n                                            <h3>follow me on</h3>\n                                            <div class=\"social-icons\">\n                                                <a href=\"#\" class=\"fab fa-twitter\"></a>\n                                                <a href=\"#\" class=\"fab fa-facebook\"></a>\n                                                <a href=\"#\" class=\"fab fa-instagram\"></a>\n                                                <a href=\"#\" class=\"fab fa-whatsapp\"></a>\n                                                <a href=\"#\" class=\"fab fa-linkedin\"></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                \n\n                            </div>\n                           \n\n                            <!--  -->\n                        </div>\n                    </ng-container>\n                </div>\n\n                <div class=\"card my-4\">\n                    <div class=\"trending-posts\">\n                        <div class=\"topic-border color-cod-gray mb-30\">\n                            <div class=\"topic-box-lg color-cod-gray\">News Letter</div>\n                        </div>\n                        <div class=\"card-body\">\n                            <div class=\"sidebar-box\">\n                                <div class=\"newsletter-area\">\n                                    <h2 class=\"title-medium-light size-xl pl-30 pr-30\">Subscribe to our news letter!\n                                    </h2>\n                                    <img style=\"width:120px\" alt=\"newsletter\" class=\"lazy img-fluid m-auto mb-15 loaded\"\n                                        loading=\"lazy\" src=\"https://bproo.com/public/img/banner/newsletter.png\"\n                                        data-ll-status=\"loaded\">\n                                    <p id=\"leftSideSubscribeBox\">By receiving free stock articles and smart tutorials to\n                                        advance your\n                                        career.</p>\n                                    <form action=\"\" id=\"leftSide-form\" class=\"subscription-needs-validation1\"\n                                        novalidate=\"\">\n                                        <input type=\"hidden\" name=\"_token\"\n                                            value=\"vgo0OwcAG1jyVzJuCttQHPDeODM4oG2GMAKNr8yM\">\n                                        <div class=\"input-group stylish-input-group mb-3\">\n                                            <input type=\"text\" name=\"name\" placeholder=\"Enter your first-name\"\n                                                class=\"form-control\" required=\"\">\n                                            <div class=\"invalid-feedback\" style=\"font-size: 1.5rem;\">\n                                                Please provide your name.\n                                            </div>\n                                        </div>\n                                        <div class=\"input-group stylish-input-group\">\n                                            <input type=\"text\" name=\"email\" placeholder=\"Enter your mail\"\n                                                class=\"form-control\" required=\"\">\n                                            <div class=\"invalid-feedback\" style=\"font-size: 1.5rem;\">\n                                                Please provide a valid email.\n                                            </div>\n                                            <span class=\"input-group-addon\">\n                                                <button type=\"button\" name=\"subscribe1\">\n                                                    <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n                                                </button>\n                                            </span>\n                                        </div>\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"my-4\">\n                    <div class=\"trending-posts\">\n                        <div class=\"topic-border color-cod-gray mb-30\">\n                            <div class=\"topic-box-lg color-cod-gray\">Trending Posts</div>\n                        </div>\n                        <div class=\"card-body\">\n\n                            <tr *ngIf=\"postList.length <=0\" class=\"no-data text-center\">There is no Post added yet!>\n                            </tr>\n\n                            <div>\n                                <ng-container *ngFor=\"let post of postList.reverse() , let i = index;\">\n                                    <div *ngIf=\"i<3\">\n                                        <a href=\"details/{{post._id}}\">\n                                            <div class=\"d-flex trending-posts\">\n                                                <div class=\"image-post\">\n                                                    <img src=\"{{post.postImgUrl}}\" alt=\"{{post.postTitle}}\">\n                                                    <p>Posted on:\n                                                        {{post.updated | date: 'dd MMM yyyy'}}</p>\n                                                </div>\n                                                <div class=\"text-desc\">\n                                                    <p>\n                                                        <i class=\"fa fa-calendar mr-2\"></i>\n                                                        {{post.readTime}}\n                                                        Min Read</p>\n                                                    <p>{{post.postTitle}}</p>\n                                                </div>\n                                            </div>\n                                        </a>\n                                        <hr>\n                                    </div>\n                                </ng-container>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- Comments Form -->\n<section class=\"comment\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"card col-md-8 my-4\">\n                <h5 class=\"card-header\">Leave a Comment:</h5>\n                <div class=\"card-body\">\n                    <!-- <form>\n                                <div class=\"form-group\">\n                                  <textarea class=\"form-control\" class=\"form-control\" rows=\"3\"></textarea>\n                                </div>\n                                <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                              </form> -->\n                    <disqus [identifier]=\"pageId\"></disqus>\n                    <!-- <disqus [identifier]=\"pageId\" [url]=\"url\" [category]=\"catId\" [language]=\"language\" (newComment)=\"onNewComment($event)\" (paginate)=\"onPaginate($event)\"></disqus> -->\n\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- <noscript>Please enable JavaScript to view the <a href=\"https://disqus.com/?ref_noscript\">comments powered by Disqus.</a></noscript> -->\n\n</section>");

/***/ }),

/***/ "GB7h":
/*!******************************************!*\
  !*** ./src/app/post/post.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header data-v-22791a1b=\"\" data-v-0cc2979f=\"\" class=\"page-header bg-img-cover overlay overlay-60 page-header-dark\"\n  data-v-7930edba=\"\">\n  <div class=\"container\">\n    <div data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"page-header-content\">\n      <div data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"container text-center\">\n        <div data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"row justify-content-center\">\n          <div data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"page-first col-lg-8\">\n            <h1 data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"page-header-title mb-3\">Publications</h1>\n            <p data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"page-header-text mb-0\">Browse articles, keep up to date, and\n              learn more on our blog!</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <span data-v-c5f3fcf8=\"\" data-v-22791a1b=\"\">\n    <div data-v-c5f3fcf8=\"\" class=\"svg-border-rounded text-light\">\n      <svg data-v-c5f3fcf8=\"\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 144.54 17.34\" preserveAspectRatio=\"none\"\n        fill=\"currentColor\">\n        <path data-v-c5f3fcf8=\"\" d=\"M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0\"></path>\n      </svg>\n    </div>\n  </span>\n</header>\n\n<!-- <button type=\"button\" (click)=\"toastSuccess()\">show message</button> -->\n\n<section data-v-0e51b078=\"\" data-v-6dd90c3b=\"\" class=\"py-10 bg-white\" data-v-7930edba=\"\">\n  <h3 class=\"feature-banner text-center m-4\">Our Features</h3>\n  <div data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" class=\"container\">\n    <div data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" class=\"item-banner row text-center\">\n      <div data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" class=\"col-lg-4 mb-5 mb-lg-0 feature-text\">\n        <div data-v-6dd90c3b=\"\" data-v-0e51b078=\"\"\n          class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\">\n          <svg data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24px\" height=\"24px\"\n            viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\n            stroke-linejoin=\"round\" class=\"feather feather-droplet\">\n            <path data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" d=\"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z\">\n\n            </path>\n          </svg>\n        </div>\n        <h2 data-v-6dd90c3b=\"\" data-v-0e51b078=\"\">Design</h2>\n        <p data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" class=\"mb-0\">We start by creating a set of brand guidelines and\n          standards</p>\n      </div>\n      <div data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" class=\"col-lg-4 mb-5 mb-lg-0  feature-text\">\n        <div data-v-6dd90c3b=\"\" data-v-0e51b078=\"\"\n          class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\">\n          <svg data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24px\" height=\"24px\"\n            viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\n            stroke-linejoin=\"round\" class=\"feather feather-code\">\n            <polyline data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" points=\"16 18 22 12 16 6\"></polyline>\n            <polyline data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" points=\"8 6 2 12 8 18\"></polyline>\n          </svg></div>\n        <h2 data-v-6dd90c3b=\"\" data-v-0e51b078=\"\">Develop</h2>\n        <p data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" class=\"mb-0\">\n          Our award winning development team creates personalized digital experiences\n        </p>\n      </div>\n      <div data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" class=\"col-lg-4 feature-text\">\n        <div data-v-6dd90c3b=\"\" data-v-0e51b078=\"\"\n          class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\">\n          <svg data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24px\" height=\"24px\"\n            viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\n            stroke-linejoin=\"round\" class=\"feather feather-truck\">\n            <rect data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" x=\"1\" y=\"3\" width=\"15\" height=\"13\"> </rect>\n            <polygon data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" points=\"16 8 20 8 23 11 23 16 16 16 16 8\"></polygon>\n            <circle data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" cx=\"5.5\" cy=\"18.5\" r=\"2.5\"> </circle>\n            <circle data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" cx=\"18.5\" cy=\"18.5\" r=\"2.5\"></circle>\n          </svg>\n        </div>\n        <h2 data-v-6dd90c3b=\"\" data-v-0e51b078=\"\">Deliver</h2>\n        <p data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" class=\"mb-0\">\n          Our products are created on time, and to your exact specifications\n        </p>\n      </div>\n    </div>\n\n\n    <span data-v-c5f3fcf8=\"\" data-v-0e51b078=\"\">\n      <div data-v-c5f3fcf8=\"\" class=\"svg-border-rounded text-light\">\n        <svg data-v-c5f3fcf8=\"\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 144.54 17.34\" preserveAspectRatio=\"none\"\n          fill=\"currentColor\">\n          <path data-v-c5f3fcf8=\"\" d=\"M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0\"></path>\n        </svg>\n      </div>\n    </span>\n  </div>\n</section>\n\n<section class=\"blog-banner\">\n  <h2 class=\"recent-blog text-center m-5\">Recent Blogs</h2>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n        <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n      </div>\n      <div *ngFor=\"let post of posts | paginate: {id : 'listing_pagination',\n      itemsPerPage:3,\n      currentPage: page,\n      totalItems: totalRecords}\" data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"col-md-6 col-xl-4 mb-5\">\n        <a data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card post-preview lift h-100\">\n          <img data-v-0cc2979f=\"\" data-v-0e51b078=\"\" src=\"{{post.postImgUrl}}\" alt=\"...\" class=\"card-img-top\">\n          <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-body\">\n            <a [routerLink]=\"['/details/', post._id]\">\n              <h5 data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-title\">{{post.postTitle}}</h5>\n            </a>\n            <p data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-text\">{{post.postDesc}}</p>\n          </div>\n          <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-footer\">\n            <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta\">\n              <img data-v-0cc2979f=\"\" data-v-0e51b078=\"\" src=\"https://source.unsplash.com/e12wQLAjQi0/100x100\"\n                class=\"post-preview-meta-img\">\n              <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details\">\n                <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details-name\">{{post.postAuthor}}</div>\n                <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details-date\">{{post.readTime}} min read\n                </div>\n              </div>\n              <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-update\">\n                <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details-name\">{{post.updated | date: 'dd MMM yyyy'}}</div>\n\n              </div>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- <div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <mat-grid-list cols=\"3\">\n    <mat-grid-tile *ngFor=\"let post of posts\">\n      <mat-card class=\"example-card\" [routerLink]=\"['/details/', post._id]\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>{{post.postTitle}}</mat-card-title>\n          <mat-card-subtitle>{{post.updated}}</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image src=\"{{post.postImgUrl}}\" alt=\"{{post.postTitle}}\">\n        <mat-card-content>\n          {{post.postDesc}}\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div> -->");

/***/ }),

/***/ "H8dG":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\n  --input-padding-x: 1.5rem;\n  --input-padding-y: .75rem;\n}\n\n.example-container {\n  background-color: #007bc7;\n  margin-top: 10em;\n  height: 70vh;\n}\n\n.example-container h2 {\n  color: #fff;\n  font-size: 2.5em;\n  font-weight: 600;\n}\n\n.example-container .example-card {\n  background-color: #fff;\n  border-radius: 22px;\n  padding: 2em;\n}\n\n.example-container .example-card .button-row button {\n  width: 100%;\n  padding: 5px;\n  border-radius: 27px;\n  font-size: 1.3em;\n  font-weight: 700;\n}\n\n.example-container .example-card .button-row .button-register {\n  background-color: #01ba94;\n}\n\n.example-container .card-signin {\n  border: 0;\n  border-radius: 1rem;\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n\n.example-container .card-signin .card-title {\n  margin-bottom: 2rem;\n  font-weight: 300;\n  font-size: 1.5rem;\n}\n\n.example-container .card-signin .card-img-left {\n  width: 45%;\n  /* Link to your background image using in the property below! */\n  background: scroll center url(\"https://source.unsplash.com/WEQbe2jBg40/414x512\");\n  background-size: cover;\n}\n\n.example-container .card-signin .card-body {\n  padding: 2rem;\n}\n\n.example-container .card-signin .card-body .form-signin {\n  width: 100%;\n}\n\n.example-container .card-signin .card-body .form-signin .btn {\n  font-size: 80%;\n  border-radius: 5rem;\n  letter-spacing: 0.1rem;\n  font-weight: bold;\n  padding: 1rem;\n  transition: all 0.2s;\n}\n\n.example-container .card-signin .card-body .form-signin .form-label-group {\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.example-container .card-signin .card-body .form-signin .form-label-group input {\n  height: auto;\n  border-radius: 2rem;\n}\n\n.example-container .card-signin .card-body .form-signin .form-label-group > input,\n.example-container .card-signin .card-body .form-signin .form-label-group > label {\n  padding: var(--input-padding-y) var(--input-padding-x);\n}\n\n.example-container .card-signin .card-body .form-signin .form-label-group > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  /* Override default `<label>` margin */\n  line-height: 1.5;\n  color: #495057;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  transition: all 0.1s ease-in-out;\n}\n\n.example-container .card-signin .card-body .form-signin .form-label-group input::-moz-placeholder {\n  color: transparent;\n}\n\n.example-container .card-signin .card-body .form-signin .form-label-group input::placeholder {\n  color: transparent;\n}\n\n.example-container .card-signin .card-body .form-signin .form-label-group input:not(:-moz-placeholder-shown) {\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\n  padding-bottom: calc(var(--input-padding-y) / 3);\n}\n\n.example-container .card-signin .card-body .form-signin .form-label-group input:not(:placeholder-shown) {\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\n  padding-bottom: calc(var(--input-padding-y) / 3);\n}\n\n.example-container .card-signin .card-body .form-signin .form-label-group input:not(:-moz-placeholder-shown) ~ label {\n  padding-top: calc(var(--input-padding-y) / 3);\n  padding-bottom: calc(var(--input-padding-y) / 3);\n  font-size: 12px;\n  color: #777;\n}\n\n.example-container .card-signin .card-body .form-signin .form-label-group input:not(:placeholder-shown) ~ label {\n  padding-top: calc(var(--input-padding-y) / 3);\n  padding-bottom: calc(var(--input-padding-y) / 3);\n  font-size: 12px;\n  color: #777;\n}\n\n.example-container .card-signin .card-body .form-signin .btn-google {\n  color: white;\n  background-color: #ea4335;\n}\n\n.example-container .card-signin .card-body .form-signin .btn-facebook {\n  color: white;\n  background-color: #3b5998;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlL352YXJpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQUZGOztBQUtBO0VBQ0kseUJDSVE7RURIUixnQkFBQTtFQUNBLFlBQUE7QUFGSjs7QUFHSTtFQUNJLFdDVk87RURXUCxnQkFBQTtFQUNBLGdCQUFBO0FBRFI7O0FBR0k7RUFDSSxzQkNmTztFRGdCUCxtQkFBQTtFQUNBLFlBQUE7QUFEUjs7QUFJUTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRlI7O0FBSVE7RUFDSSx5QkN6Qkc7QUR1QmY7O0FBT0s7RUFDQyxTQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGdCQUFBO0FBTE47O0FBTU07RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFKUjs7QUFNTTtFQUNFLFVBQUE7RUFDQSwrREFBQTtFQUNBLGdGQUFBO0VBQ0Esc0JBQUE7QUFKUjs7QUFNTTtFQUNFLGFBQUE7QUFKUjs7QUFLUTtFQUNFLFdBQUE7QUFIVjs7QUFJVTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUFGWjs7QUFJVTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFGWjs7QUFHWTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQURkOztBQUlVOztFQUVFLHNEQUFBO0FBRlo7O0FBS1U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FBSFo7O0FBS1U7RUFDRSxrQkFBQTtBQUhaOztBQUVVO0VBQ0Usa0JBQUE7QUFIWjs7QUFNRTtFQUNFLDRFQUFBO0VBQ0EsZ0RBQUE7QUFKSjs7QUFFRTtFQUNFLDRFQUFBO0VBQ0EsZ0RBQUE7QUFKSjs7QUFPRTtFQUNFLDZDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUxKOztBQUNFO0VBQ0UsNkNBQUE7RUFDQSxnREFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBTEo7O0FBUUU7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUFOSjs7QUFTRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQVBKIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3N0eWxlL352YXJpYWJsZS5zY3NzJztcblxuXG46cm9vdCB7XG4gIC0taW5wdXQtcGFkZGluZy14OiAxLjVyZW07XG4gIC0taW5wdXQtcGFkZGluZy15OiAuNzVyZW07XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Qmx1ZTtcbiAgICBtYXJnaW4tdG9wOiAxMGVtO1xuICAgIGhlaWdodDogNzB2aDtcbiAgICBoMiB7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeVdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICAuZXhhbXBsZS1jYXJke1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeVdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICAgICAgICBwYWRkaW5nOiAyZW07XG4gICAgICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC40KSwgcmdiYSgwLDAsMCwwLjIpKSwgdXJsKCcuLi8uLi8uLi9hc3NldHMvc3R5bGUvcGhvdG8tMTU2ODk5MjY4ODA2NS01MzZhYWQ4YTEyZjYuanBlZycpO1xuICAgIC5idXR0b24tcm93IHtcbiAgICAgICAgYnV0dG9ue1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyN3B4O1xuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b24tcmVnaXN0ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnlHcmVlbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB9XG5cbiAgICAgLmNhcmQtc2lnbmluIHtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB9XG4gICAgICAuY2FyZC1pbWctbGVmdCB7XG4gICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgIC8qIExpbmsgdG8geW91ciBiYWNrZ3JvdW5kIGltYWdlIHVzaW5nIGluIHRoZSBwcm9wZXJ0eSBiZWxvdyEgKi9cbiAgICAgICAgYmFja2dyb3VuZDogc2Nyb2xsIGNlbnRlciB1cmwoJ2h0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9XRVFiZTJqQmc0MC80MTR4NTEyJyk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICB9XG4gICAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgLmZvcm0tc2lnbmluIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogODAlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9ybS1sYWJlbC1ncm91cCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtLWxhYmVsLWdyb3VwPmlucHV0LFxuICAgICAgICAgIC5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlucHV0LXBhZGRpbmcteSkgdmFyKC0taW5wdXQtcGFkZGluZy14KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLmZvcm0tbGFiZWwtZ3JvdXA+bGFiZWwge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgLyogT3ZlcnJpZGUgZGVmYXVsdCBgPGxhYmVsPmAgbWFyZ2luICovXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgY29sb3I6ICM0OTUwNTc7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XG4gICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSArIHZhcigtLWlucHV0LXBhZGRpbmcteSkgKiAoMiAvIDMpKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XG4gIH1cbiAgXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pfmxhYmVsIHtcbiAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzc3NztcbiAgfVxuICBcbiAgLmJ0bi1nb29nbGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE0MzM1O1xuICB9XG4gIFxuICAuYnRuLWZhY2Vib29rIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcbiAgfVxuICAgICAgICB9XG4gICAgICB9XG4gIH1cbn1cblxuXG5cblxuIFxuIFxuICAiLCJcblxuJHByaW1hcnlDb2xvcjogIzdmN2Y3ZjtcbiRwcmltYXJ5V2hpdGU6ICNmZmY7XG4kcHJpbWFyeUJsYWNrOiAjMDAwO1xuJHByaW1hcnlCbHVlOiAjMDA2MWYyO1xuJHByaW1hcnlHcmVlbjogIzAxYmE5NDtcbiRwcmltYXJ5VGVhbDogIzA1YWI5ZjtcbiRwcmltYXJ5RGFyazojMWYyZDQxO1xuJHNlY29uZGFyeVdoaXRlOiAjYTdhYmIzO1xuJHNlY29uZGFyeURhcms6ICNhMGE3YjA7XG4kc2Vjb25kYXJ5Q29sb3I6ICMzMDQwNjk7XG4kcHJpbWFyeUdyYXk6ICM4ZTk1YTA7XG4kbGlnaHRCbHVlOiAjMDA3YmM3OyJdfQ== */");

/***/ }),

/***/ "HhuZ":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div data-v-c5f3fcf8=\"\" class=\"svg-border-rounded text-dark\">\n    <svg data-v-c5f3fcf8=\"\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 144.54 17.34\" preserveAspectRatio=\"none\"\n        fill=\"currentColor\">\n        <path data-v-c5f3fcf8=\"\" d=\"M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0\"></path>\n    </svg>\n</div>\n<div class=\"clip-path\">\n    <footer class=\"py-1 footer\">\n        <div class=\"container footer-top\">\n            <div class=\"col-md-12\">\n                <div class=\"footer-banner\">\n                    <div class=\"row\">\n                    <div class=\"footer-logo col-md-3 col-sm-6\">\n                        <h3><a href=\"\">SarkBlog</a></h3>\n                        <p>We Moves With Technology</p>\n                        <div class=\"d-flex footer-social\">\n                            <i class=\"fab fa-instagram\"></i>\n                            <i class=\"fab fa-facebook\"></i>\n                            <i class=\"fab fa-github\"></i>\n                            <i class=\"fab fa-twitter\"></i>\n                        </div>\n                    </div>\n                    <div class=\"product-area col-md-3 col-sm-6\">\n                        <ul>\n                            <h3>Products</h3>\n                            <li>Landing</li>\n                            <li>Transportation</li>\n                            <li>Real estate</li>\n                            <li>Construction</li>\n                        </ul>\n                    </div>\n               \n               \n                    <div class=\"technical-area col-md-3 col-sm-6\">\n                        <ul>\n                            <h3>Technical</h3>\n                            <li>Landing</li>\n                            <li>Transportation</li>\n                            <li>Real estate</li>\n                            <li>Construction</li>\n                        </ul>\n                    </div>\n                    <div class=\"legal-area col-md-3 col-sm-6\">\n                        <ul>\n                            <h3>Legal</h3>\n                            <li>Landing</li>\n                            <li>Transportation</li>\n                            <li>Real estate</li>\n                            <li>Construction</li>\n                        </ul>\n                    </div>\n                </div>\n                </div>\n            </div>\n            </div>\n            <div class=\"footer-bottom\">\n                <p class=\"m-0 text-center text-white\">Copyright &copy; SarKBlog 2020</p>\n                <p class=\"m-0 text-center text-white\">Privacy Policy · Terms & Conditions</p>\n            </div>\n        \n    </footer>\n</div>");

/***/ }),

/***/ "LNU8":
/*!******************************************************!*\
  !*** ./src/app/bycategory/bycategory.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\n  margin-top: 10em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2J5Y2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKIiwiZmlsZSI6ImJ5Y2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDEwZW07XG59Il19 */");

/***/ }),

/***/ "LgBW":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_blog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./blog.component.html */ "iJX/");
/* harmony import */ var _blog_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog.component.scss */ "F7z0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/auth.service */ "7Vn+");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/category.service */ "AfT/");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/home.service */ "x+LS");








let BlogComponent = class BlogComponent {
    constructor(route, authApi, catApi, api) {
        this.route = route;
        this.authApi = authApi;
        this.catApi = catApi;
        this.api = api;
        this.posts = [];
        this.isLoadingResults = true;
        this.page = 1;
        this.categories = [];
        this.users = [];
        this.singleUser = [];
        this.posts = new Array();
    }
    ngOnInit() {
        this.api.getPosts().subscribe((res) => {
            this.posts = res;
            // this.data = res.results;
            // console.log(this.data = res.results);
            console.log(this.posts);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
        this.filterPost();
        this.getCategories();
        this.getusers();
        this.getuser(this.route.snapshot.params.id);
    }
    /**
 * @filter blog
 */
    filterPost() {
        this.api.getPosts().subscribe((res) => {
            this.posts = res.map(o => {
                o.search_label = ` ${o.category} ${o.id} ${o.postTitle} ${o.postAuthor} 
        ${o.postDesc} ${o.postContent} ${o.postReference} ${o.postImgUrl}
         ${o.created} ${o.updated}
      `;
                return o;
            });
            console.log(this.posts);
        }, error => {
            console.log(error);
        });
    }
    getCategories() {
        this.catApi.getCategories().subscribe((res) => {
            this.categories = res;
            console.log(this.categories);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    getusers() {
        this.authApi.getUsers().subscribe((res) => {
            this.users = res;
            console.log(this.users);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    getuser(id) {
        this.authApi.getUser(id).subscribe((res) => {
            this.singleUser = res;
            console.log(this.singleUser);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
BlogComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"] },
    { type: _services_home_service__WEBPACK_IMPORTED_MODULE_7__["HomeService"] }
];
BlogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({ selector: 'app-blog', template: _raw_loader_blog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"], styles: [_blog_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]] })
], BlogComponent);



/***/ }),

/***/ "LoHQ":
/*!******************************************!*\
  !*** ./src/app/_authGuard/auth.guard.ts ***!
  \******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "7Vn+");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        const url = state.url;
        return this.checkLogin(url);
    }
    checkLogin(url) {
        let status = localStorage.getItem('sarkblog');
        if (status === 'true') {
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "MY8x":
/*!***************************************************************************!*\
  !*** ./src/app/category/category-details/category-details.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Np+I":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contact {\n  margin-top: 12em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdCB7XG4gICAgbWFyZ2luLXRvcDogMTJlbTtcbn0iXX0= */");

/***/ }),

/***/ "OzAx":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "RkmP":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "SIlP":
/*!****************************************************!*\
  !*** ./src/app/_interceptors/token.interceptor.ts ***!
  \****************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let TokenInterceptor = class TokenInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(request, next) {
        const token = localStorage.getItem('token');
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: token
                }
            });
        }
        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                setHeaders: {
                    'content-type': 'application/json'
                }
            });
        }
        request = request.clone({
            headers: request.headers.set('Accept', 'application/json')
        });
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                console.log('event--->>>', event);
            }
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            console.log(error);
            if (error.status === 401) {
                this.router.navigate(['login']);
            }
            if (error.status === 400) {
                alert(error.error);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
TokenInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TokenInterceptor);



/***/ }),

/***/ "SL0s":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example-container mat-elevation-z8\">\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-subtitle>Populate the Category and Post data by click on the Menu.</mat-card-subtitle>\n    </mat-card-header>\n  \n  </mat-card>\n</div>\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_services/auth.service */ "7Vn+");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_services/home.service */ "x+LS");







let AppComponent = class AppComponent {
    constructor(api, authService, router) {
        this.api = api;
        this.authService = authService;
        this.router = router;
        this.title = 'client';
        this.categories = [];
        this.loginStatus = false;
    }
    ngOnInit() {
        this.authService.isLoggedIn.subscribe((status) => {
            console.log(status);
            if (status === true) {
                this.loginStatus = true;
            }
            else {
                this.loginStatus = false;
            }
        });
        this.api.getCategories()
            .subscribe((res) => {
            this.categories = res;
            console.log(this.categories);
        }, err => {
            console.log(err);
        });
    }
    // logout() {
    //   this.authService.logout()
    //     .subscribe((res: any) => {
    //       this.router.navigate(['/']);
    //     }, err => {
    //       console.log(err);
    //     });
    // }
    getActiveAdmin() {
        if (Boolean(localStorage.getItem("username")) &&
            Boolean(localStorage.getItem("imageurl")) && Boolean(localStorage.getItem("bio"))) {
            this.activeAdmin.username = localStorage.getItem("username");
            this.activeAdmin.userProfileUrl = localStorage.getItem("imageurl");
            this.activeAdmin.bio = localStorage.getItem("bio");
        }
        else {
            this.activeAdmin = Object.assign({}, JSON.parse(localStorage.getItem("sark_blog_admin_details")));
        }
    }
    logout() {
        this.authService.logout();
        this.router.navigate(["/"]);
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_home_service__WEBPACK_IMPORTED_MODULE_6__["HomeService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "TRGY":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin.component.html */ "SL0s");
/* harmony import */ var _admin_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.component.scss */ "RkmP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminComponent.ctorParameters = () => [];
AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin',
        template: _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminComponent);



/***/ }),

/***/ "TWh7":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bycategory/bycategory.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n        *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <mat-grid-list cols=\"3\">\n    <mat-grid-tile *ngFor=\"let post of posts\">\n      <mat-card class=\"example-card\" [routerLink]=\"['/details/', post._id]\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>{{post.postTitle}}</mat-card-title>\n          <mat-card-subtitle>{{post.updated}}</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image src=\"{{post.postImgUrl}}\" alt=\"Photo of a Shiba Inu\">\n        <mat-card-content>\n          {{post.postDesc}}\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>\n");

/***/ }),

/***/ "VwQp":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-edit/category-edit.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n        *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <div class=\"button-row\">\n    <a mat-flat-button color=\"primary\" (click)=\"categoryDetails()\"><mat-icon>list</mat-icon></a>\n  </div>\n  <mat-card class=\"example-card\">\n    <form [formGroup]=\"categoryForm\" (ngSubmit)=\"onFormSubmit()\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Category Name\" formControlName=\"catName\"\n                [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!categoryForm.get('catName').valid && categoryForm.get('catName').touched\">Please enter Category Name</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <textarea matInput placeholder=\"Category Desc\" formControlName=\"catDesc\"\n                [errorStateMatcher]=\"matcher\"></textarea>\n        <mat-error>\n          <span *ngIf=\"!categoryForm.get('catDesc').valid && categoryForm.get('catDesc').touched\">Please enter Category Description</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Category Image URL\" formControlName=\"catImgUrl\"\n                [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!categoryForm.get('catImgUrl').valid && categoryForm.get('catImgUrl').touched\">Please enter Category Image URL</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <ckeditor matCkeditor placehoder=\"Category Content\" formControlName=\"catContent\"></ckeditor>\n        <mat-error>\n          <span *ngIf=\"!categoryForm.get('catContent').valid && categoryForm.get('catContent').touched\">Please enter Category Description</span>\n        </mat-error>\n      </mat-form-field>\n      <div class=\"button-row\">\n        <button type=\"submit\" [disabled]=\"!categoryForm.valid\" mat-flat-button color=\"primary\"><mat-icon>save</mat-icon></button>\n      </div>\n    </form>\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"app-banner\">\n<div class=\"\">\n    <app-navbar></app-navbar>\n    <router-outlet></router-outlet>\n    \n  </div>\n  <app-footer></app-footer>\n</div>");

/***/ }),

/***/ "XgRU":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\n  background-color: #007bc7;\n  margin-top: 7em;\n  height: 85vh;\n}\n.example-container h2 {\n  color: #fff;\n  font-size: 2.5em;\n  font-weight: 600;\n}\n.example-container .example-card {\n  background-color: #fff;\n  border-radius: 12px;\n  padding: 0.4em 1em;\n}\n.example-container .example-card mat-form-field {\n  padding: 2px 15px;\n}\n.example-container .example-card .button-row button {\n  width: 100%;\n  padding: 5px;\n  border-radius: 27px;\n  font-size: 1.3em;\n  font-weight: 600;\n}\n.example-container .example-card .button-row .button-register {\n  background-color: #01ba94;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlL352YXJpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJDVVE7RURUUixlQUFBO0VBQ0EsWUFBQTtBQURKO0FBRUk7RUFDSSxXQ0pPO0VES1AsZ0JBQUE7RUFDQSxnQkFBQTtBQUFSO0FBRUk7RUFDSSxzQkNUTztFRFVQLG1CQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUNRO0VBQ0ksaUJBQUE7QUFDWjtBQUVZO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBWjtBQUVZO0VBQ0kseUJDckJEO0FEcUJmIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3N0eWxlL352YXJpYWJsZS5zY3NzJztcblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRCbHVlO1xuICAgIG1hcmdpbi10b3A6IDdlbTtcbiAgICBoZWlnaHQ6IDg1dmg7XG4gICAgaDIge1xuICAgICAgICBjb2xvcjogJHByaW1hcnlXaGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgLmV4YW1wbGUtY2FyZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5V2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIHBhZGRpbmc6IDAuNGVtIDFlbTtcbiAgICAgICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICAgICAgcGFkZGluZzogMnB4IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbi1yb3cge1xuICAgICAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyN3B4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnV0dG9uLXJlZ2lzdGVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeUdyZWVuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIlxuXG4kcHJpbWFyeUNvbG9yOiAjN2Y3ZjdmO1xuJHByaW1hcnlXaGl0ZTogI2ZmZjtcbiRwcmltYXJ5QmxhY2s6ICMwMDA7XG4kcHJpbWFyeUJsdWU6ICMwMDYxZjI7XG4kcHJpbWFyeUdyZWVuOiAjMDFiYTk0O1xuJHByaW1hcnlUZWFsOiAjMDVhYjlmO1xuJHByaW1hcnlEYXJrOiMxZjJkNDE7XG4kc2Vjb25kYXJ5V2hpdGU6ICNhN2FiYjM7XG4kc2Vjb25kYXJ5RGFyazogI2EwYTdiMDtcbiRzZWNvbmRhcnlDb2xvcjogIzMwNDA2OTtcbiRwcmltYXJ5R3JheTogIzhlOTVhMDtcbiRsaWdodEJsdWU6ICMwMDdiYzc7Il19 */");

/***/ }),

/***/ "Y6QS":
/*!*************************************************************************!*\
  !*** ./src/app/category/category-details/category-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: CategoryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailsComponent", function() { return CategoryDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_category_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./category-details.component.html */ "4IuV");
/* harmony import */ var _category_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-details.component.scss */ "MY8x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/category.service */ "AfT/");






let CategoryDetailsComponent = class CategoryDetailsComponent {
    constructor(route, api, router) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.category = { id: null, catName: '', catDesc: '', catImgUrl: '', catContent: '', updated: null };
        this.isLoadingResults = true;
    }
    ngOnInit() {
        this.getCategoryDetails(this.route.snapshot.params.id);
    }
    getCategoryDetails(id) {
        this.api.getCategory(id)
            .subscribe((data) => {
            this.category = data;
            this.category.id = data._id;
            console.log(this.category);
            this.isLoadingResults = false;
        });
    }
    deleteCategory(id) {
        this.isLoadingResults = true;
        this.api.deleteCategory(id)
            .subscribe(res => {
            this.isLoadingResults = false;
            this.router.navigate(['/category']);
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
CategoryDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CategoryDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-category-details',
        template: _raw_loader_category_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_category_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CategoryDetailsComponent);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/login/login.component */ "bsvf");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/register/register.component */ "ZGml");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./details/details.component */ "9R8I");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./category/category.component */ "clsX");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./post/post.component */ "fQWx");
/* harmony import */ var _category_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./category/category-details/category-details.component */ "Y6QS");
/* harmony import */ var _category_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./category/category-add/category-add.component */ "6PNY");
/* harmony import */ var _category_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./category/category-edit/category-edit.component */ "fv54");
/* harmony import */ var _post_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./post/post-details/post-details.component */ "qMKO");
/* harmony import */ var _post_post_add_post_add_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./post/post-add/post-add.component */ "uj5D");
/* harmony import */ var _post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./post/post-edit/post-edit.component */ "vrb6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_interceptors/token.interceptor */ "SIlP");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "vdoh");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _bycategory_bycategory_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./bycategory/bycategory.component */ "EPmy");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ckeditor4-angular */ "eIsa");
/* harmony import */ var mat_contenteditable__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! mat-contenteditable */ "O6gE");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./blog/blog.component */ "LgBW");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! jw-angular-pagination */ "P9+s");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ngx_disqus__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-disqus */ "uqZ0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _auth_login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./auth/login-admin/login-admin.component */ "0ydo");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-toastr */ "5eHb");


































// import { NgSelectModule } from '@ng-select/ng-select';
// import { NgSelectConfig } from '@ng-select/ng-select';
//  import { ɵs } from '@ng-select/ng-select';
// import { ConsoleService } from '@ng-select/ng-select/lib/console.service';




let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _details_details_component__WEBPACK_IMPORTED_MODULE_8__["DetailsComponent"],
            _category_category_component__WEBPACK_IMPORTED_MODULE_9__["CategoryComponent"],
            _post_post_component__WEBPACK_IMPORTED_MODULE_10__["PostComponent"],
            _category_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_11__["CategoryDetailsComponent"],
            _category_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_12__["CategoryAddComponent"],
            _category_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_13__["CategoryEditComponent"],
            _post_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_14__["PostDetailsComponent"],
            _post_post_add_post_add_component__WEBPACK_IMPORTED_MODULE_15__["PostAddComponent"],
            _post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_16__["PostEditComponent"],
            _bycategory_bycategory_component__WEBPACK_IMPORTED_MODULE_22__["BycategoryComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_25__["AdminComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_26__["NavbarComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_27__["FooterComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_28__["HeaderComponent"],
            _blog_blog_component__WEBPACK_IMPORTED_MODULE_29__["BlogComponent"],
            jw_angular_pagination__WEBPACK_IMPORTED_MODULE_30__["JwPaginationComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_35__["ContactComponent"],
            _auth_login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_36__["LoginAdminComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatOptionModule"],
            ckeditor4_angular__WEBPACK_IMPORTED_MODULE_23__["CKEditorModule"],
            mat_contenteditable__WEBPACK_IMPORTED_MODULE_24__["MatContenteditableModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_31__["NgxPaginationModule"],
            ngx_disqus__WEBPACK_IMPORTED_MODULE_32__["DisqusModule"].forRoot('sarkblog'),
            _angular_common__WEBPACK_IMPORTED_MODULE_33__["CommonModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_34__["Ng2SearchPipeModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_37__["ToastrModule"].forRoot()
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
                useClass: _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_18__["TokenInterceptor"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "ZGUQ":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n        *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <div class=\"container\">\n    <div class=\"d-flex\">\n      \n      <h1 class=\"mr-3\">\n        <a routerLink=\"/post\">Posts</a>\n      </h1>\n      <h1 class=\"ml-3\">\n        <a routerLink=\"/category\">Category</a>\n      </h1>\n    </div>\n  </div>\n  <div class=\"button-row\">\n    <a mat-flat-button color=\"primary\" [routerLink]=\"['add']\"><mat-icon>add</mat-icon></a>\n  </div>\n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"data\" class=\"example-table\"\n            matSort matSortActive=\"postTitle\" matSortDisableClear matSortDirection=\"asc\">\n\n      <!-- Post Name Column -->\n      <ng-container matColumnDef=\"postTitle\">\n        <th mat-header-cell *matHeaderCellDef>Post Title</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.postTitle}}</td>\n      </ng-container>\n\n      <!-- Post Description Column -->\n      <ng-container matColumnDef=\"postDesc\">\n        <th mat-header-cell *matHeaderCellDef>Post Description</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.postDesc}}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['details/', row._id]\"></tr>\n    </table>\n  </div>\n</div>\n");

/***/ }),

/***/ "ZGml":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: MyErrorStateMatcher, RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "hnEC");
/* harmony import */ var _register_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.scss */ "XgRU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/auth.service */ "7Vn+");







/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let RegisterComponent = class RegisterComponent {
    constructor(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.fullName = '';
        this.username = '';
        this.password = '';
        this.userProfileReference = '';
        this.userProfileUrl = '';
        this.bio = '';
        this.isLoadingResults = false;
        this.matcher = new MyErrorStateMatcher();
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            fullName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            userProfileReference: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            userProfileUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            bio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    onFormSubmit(form) {
        this.authService.register(form)
            .subscribe(res => {
            this.router.navigate(['login']);
        }, (err) => {
            console.log(err);
            alert(err.error);
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterComponent);



/***/ }),

/***/ "aZnr":
/*!************************************************!*\
  !*** ./src/app/details/details.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".detail-banner .post-image {\n  width: calc(100% + 32px);\n  margin: 0 -16px 16px;\n}\n.detail-banner .main-banner .post-title {\n  font-size: 2em;\n  font-weight: 600;\n  line-height: 43px;\n  word-spacing: 1px;\n  letter-spacing: 1px;\n}\n.detail-banner .main-banner .post-info .post-info-sub p {\n  border-right: 2px solid gray;\n  margin-left: 5px;\n  padding: 0 10px 0 0;\n}\n.detail-banner .main-banner .post-info .post-info-sub p span {\n  background: #05ab9f;\n  font-size: 1.2em;\n  color: #fff;\n  font-weight: 500;\n}\n.detail-banner .main-banner .post-info .post-info-sub p strong {\n  margin-right: 5px;\n  padding-left: 0.8em;\n}\n.detail-banner .main-banner mat-card-content {\n  font-size: 1.1em;\n  width: 100%;\n}\n.detail-banner .side-banner {\n  margin-top: 10em;\n  box-shadow: 0 0 10px -4px black;\n}\n.detail-banner .side-banner .post-share-area {\n  padding: 0;\n  background-color: #f8f8f8;\n}\n.detail-banner .side-banner .post-share-area p {\n  padding-top: 15px;\n  font-size: 2em;\n  font-weight: 600;\n  text-align: center;\n  text-transform: capitalize;\n}\n.detail-banner .side-banner .post-share-area .social-default {\n  list-style-type: none;\n  justify-content: center;\n  align-items: center;\n  font-size: 2.5em;\n}\n.detail-banner .side-banner .post-share-area .social-default li {\n  margin-right: 0.5em;\n}\n.detail-banner .side-banner .post-share-area .social-default li a {\n  list-style: none;\n}\n.detail-banner .side-banner .trending-posts {\n  margin-bottom: 0rem;\n}\n.detail-banner .side-banner .trending-posts .topic-border {\n  position: relative;\n  border-bottom: 2px solid #000;\n}\n.detail-banner .side-banner .trending-posts .topic-border .topic-box-lg:before {\n  z-index: 2;\n  content: \"\";\n  top: 0;\n  right: -8px;\n  position: absolute;\n  width: 0;\n  height: 0;\n}\n.detail-banner .side-banner .trending-posts .topic-border .topic-box-lg {\n  display: inline-block;\n  position: relative;\n  color: #fff;\n  height: 40px;\n  background-color: #000;\n  padding: 0 20px;\n  line-height: 40px;\n  text-align: center;\n  text-transform: capitalize;\n  font-weight: 600;\n  font-size: 18px;\n  z-index: 2;\n}\n.detail-banner .side-banner .trending-posts .topic-border .topic-box-lg:after {\n  content: \"\";\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n.detail-banner .side-banner .trending-posts .topic-border:after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n  width: 100%;\n  height: 2px;\n}\n.detail-banner .side-banner .trending-posts .color-cod-gray:before {\n  border-top: 8px solid #111;\n  border-right: 8px solid transparent;\n}\n.detail-banner .side-banner .card-body {\n  width: 100%;\n  margin-top: 1em;\n  padding: 0px 3px;\n}\n.detail-banner .side-banner .card-body .user-image {\n  border-radius: 100%;\n  width: 100%;\n}\n.detail-banner .side-banner .card-body .trending-posts .image-post {\n  width: 100%;\n}\n.detail-banner .side-banner .card-body .trending-posts .image-post img {\n  width: 100%;\n  height: 100px auto;\n}\n.detail-banner .side-banner .card-body .trending-posts .image-post p:first-child {\n  font-size: 10px;\n}\n.detail-banner .side-banner .card-body .trending-posts .image-post p {\n  font-size: 12px !important;\n}\n.detail-banner .side-banner .card-body .trending-posts .text-desc {\n  margin-left: 10px;\n  width: 100%;\n  color: #a7abb3;\n  cursor: pointer;\n}\n.detail-banner .side-banner .card-body .trending-posts .text-desc p:first-child {\n  font-size: 10px;\n}\n.detail-banner .side-banner .card-body .trending-posts .text-desc p {\n  font-size: 12px !important;\n}\n.detail-banner .side-banner .card-body .author h6 {\n  margin-top: 1.5em;\n  font-size: 1.5em;\n  text-transform: capitalize;\n}\n.detail-banner .side-banner .card-body .author .user-img {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.detail-banner .side-banner .card-body .author .user-img img {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.detail-banner .side-banner .card-body .author p {\n  font-size: 1em;\n  text-transform: capitalize;\n  text-align: center;\n  margin: 1em;\n}\n.detail-banner .side-banner .card-body .author .social-accounts h3 {\n  padding: 0.4em 0em;\n  font-size: 1.5em;\n  font-weight: 600;\n  text-transform: capitalize;\n  text-align: center;\n}\n.detail-banner .side-banner .card-body .author .social-accounts .social-icons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.detail-banner .side-banner .card-body .author .social-accounts .social-icons a {\n  font-size: 1.8em;\n  text-align: center;\n  margin: 8px;\n}\n.detail-banner .side-banner .card-body .active {\n  color: #05ab9f;\n  background: #a0a7b0;\n}\n.detail-banner .side-banner .card-body .newsletter-area {\n  padding: 0.8em;\n  background-color: #0061f2;\n}\n.detail-banner .side-banner .card-body .newsletter-area h2 {\n  font-size: 1.8em;\n  color: #000;\n  font-weight: 700;\n  text-align: center;\n}\n.detail-banner .side-banner .card-body .newsletter-area img {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.detail-banner .side-banner .card-body .newsletter-area .subscription-needs-validation1 .input-group .input-group-addon button {\n  border: none;\n}\n.detail-banner .side-banner .card-body .newsletter-area .subscription-needs-validation1 .input-group .input-group-addon button i {\n  font-size: 2.1em;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .side-banner .post-share-area .social-default {\n    font-size: 1.8em !important;\n    margin-right: 1em;\n  }\n  .side-banner .post-share-area .social-default li {\n    margin-right: 0.5em !important;\n  }\n  .side-banner .author p {\n    margin: 0.1em !important;\n  }\n  .side-banner .social-accounts h3 {\n    font-size: 1em;\n  }\n  .side-banner .social-accounts .social-icons a {\n    font-size: 1.4em !important;\n    margin: 5px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2RldGFpbHMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGUvfnZhcmlhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUFDSSx3QkFBQTtFQUNBLG9CQUFBO0FBSFI7QUFNUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUpaO0FBUWdCO0VBQ0ksNEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTnBCO0FBT29CO0VBQ0ksbUJDaEJWO0VEaUJVLGdCQUFBO0VBQ0EsV0N0QlQ7RUR1QlMsZ0JBQUE7QUFMeEI7QUFPb0I7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FBTHhCO0FBVVE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUFSWjtBQVdJO0VBQ0ksZ0JBQUE7RUFDQSwrQkFBQTtBQVRSO0FBV1E7RUFRSSxVQUFBO0VBQ0EseUJBQUE7QUFoQlo7QUFRWTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQU5oQjtBQVVZO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFSaEI7QUFTZ0I7RUFDSSxtQkFBQTtBQVBwQjtBQVFvQjtFQUNJLGdCQUFBO0FBTnhCO0FBV1E7RUFDSSxtQkFBQTtBQVRaO0FBVVk7RUFDSSxrQkFBQTtFQUNBLDZCQUFBO0FBUmhCO0FBU2dCO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFQcEI7QUFTZ0I7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0NqRkw7RURrRkssWUFBQTtFQUNBLHNCQ2xGTDtFRG1GSyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQVBwQjtBQVNnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQVBwQjtBQVVZO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQVJoQjtBQVVZO0VBQ0ksMEJBQUE7RUFDQSxtQ0FBQTtBQVJoQjtBQVlRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVZaO0FBV1k7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUFUaEI7QUFZYTtFQUNJLFdBQUE7QUFWakI7QUFZaUI7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFWckI7QUFZaUI7RUFDRyxlQUFBO0FBVnBCO0FBWWdCO0VBQ0ksMEJBQUE7QUFWcEI7QUFjYTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNDN0lBO0VEOElBLGVBQUE7QUFaakI7QUFhaUI7RUFDSSxlQUFBO0FBWHJCO0FBYWlCO0VBQ0ksMEJBQUE7QUFYckI7QUFpQmdCO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBZnBCO0FBaUJnQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFmcEI7QUFnQm9CO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQWRwQjtBQWtCZ0I7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFoQnBCO0FBbUJvQjtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUFqQnhCO0FBbUJvQjtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBakJ4QjtBQWtCd0I7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQWhCNUI7QUFzQlk7RUFDSSxjQzVNRjtFRDZNRSxtQkMxTUE7QURzTGhCO0FBdUJZO0VBQ0ssY0FBQTtFQUNBLHlCQ3BOSDtBRCtMZDtBQXNCaUI7RUFDSSxnQkFBQTtFQUNBLFdDeE5OO0VEeU5NLGdCQUFBO0VBQ0Esa0JBQUE7QUFwQnJCO0FBc0JpQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBcEJyQjtBQXlCNkI7RUFDRyxZQUFBO0FBdkJoQztBQXdCaUM7RUFDSSxnQkFBQTtBQXRCckM7QUFzQ0E7RUFHUTtJQUNJLDJCQUFBO0lBQ0EsaUJBQUE7RUFyQ1Y7RUFzQ1U7SUFDSSw4QkFBQTtFQXBDZDtFQXlDTTtJQUNJLHdCQUFBO0VBdkNWO0VBMkNNO0lBQ0ksY0FBQTtFQXpDVjtFQTRDVTtJQUNJLDJCQUFBO0lBQ0Esc0JBQUE7RUExQ2Q7QUFDRiIsImZpbGUiOiJkZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9zdHlsZS9+dmFyaWFibGUuc2Nzc1wiO1xuXG4uZGV0YWlsLWJhbm5lciB7XG5cbiAgICAucG9zdC1pbWFnZSB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICAgICAgbWFyZ2luOiAwIC0xNnB4IDE2cHg7XG4gICAgfVxuICAgIC5tYWluLWJhbm5lciB7XG4gICAgICAgIC5wb3N0LXRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0M3B4O1xuICAgICAgICAgICAgd29yZC1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICB9XG4gICAgICAgIC5wb3N0LWluZm8ge1xuICAgICAgICAgICAgLnBvc3QtaW5mby1zdWIge1xuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBncmF5O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHggMCAwO1xuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5VGVhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnlXaGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjhlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtYXQtY2FyZC1jb250ZW50IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuc2lkZS1iYW5uZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMGVtO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAtNHB4IGJsYWNrO1xuXG4gICAgICAgIC5wb3N0LXNoYXJlLWFyZWEge1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICAgICAgICAgIC5zb2NpYWwtZGVmYXVsdCB7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07XG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudHJlbmRpbmctcG9zdHMge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcbiAgICAgICAgICAgIC50b3BpYy1ib3JkZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHByaW1hcnlCbGFjaztcbiAgICAgICAgICAgICAgICAudG9waWMtYm94LWxnOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC04cHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRvcGljLWJveC1sZyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnlXaGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeUJsYWNrO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50b3BpYy1ib3gtbGc6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50b3BpYy1ib3JkZXI6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29sb3ItY29kLWdyYXk6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiA4cHggc29saWQgIzExMTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgIFxuICAgICAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDNweDtcbiAgICAgICAgICAgIC51c2VyLWltYWdle1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudHJlbmRpbmctcG9zdHMge1xuICAgICAgICAgICAgIC5pbWFnZS1wb3N0e1xuICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4IGF1dG87XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgcDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICAgLnRleHQtZGVzY3tcbiAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnlXaGl0ZTtcbiAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICBwOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYXV0aG9yIHtcbiAgICAgICAgICAgICAgICBoNiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuNWVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnVzZXItaW1ne1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMWVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc29jaWFsLWFjY291bnRzIHtcbiAgICAgICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC40ZW0gMGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc29jaWFsLWljb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDhweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5VGVhbDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5RGFyaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLm5ld3NsZXR0ZXItYXJlYSB7XG4gICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuOGVtO1xuICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeUJsdWU7XG4gICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnlCbGFjaztcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAuc3Vic2NyaXB0aW9uLW5lZWRzLXZhbGlkYXRpb24xIHtcbiAgICAgICAgICAgICAgICAgICAgIC5pbnB1dC1ncm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgLmlucHV0LWdyb3VwLWFkZG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjFlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbiAgIFxufVxuQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuLnNpZGUtYmFubmVyIHtcbiAgICAucG9zdC1zaGFyZS1hcmVhIHtcbiAgICAgICAgLnNvY2lhbC1kZWZhdWx0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44ZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41ZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuYXV0aG9yIHtcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDAuMWVtICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNvY2lhbC1hY2NvdW50cyB7XG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICB9XG4gICAgICAgIC5zb2NpYWwtaWNvbnMge1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7XG4gICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG59XG4iLCJcblxuJHByaW1hcnlDb2xvcjogIzdmN2Y3ZjtcbiRwcmltYXJ5V2hpdGU6ICNmZmY7XG4kcHJpbWFyeUJsYWNrOiAjMDAwO1xuJHByaW1hcnlCbHVlOiAjMDA2MWYyO1xuJHByaW1hcnlHcmVlbjogIzAxYmE5NDtcbiRwcmltYXJ5VGVhbDogIzA1YWI5ZjtcbiRwcmltYXJ5RGFyazojMWYyZDQxO1xuJHNlY29uZGFyeVdoaXRlOiAjYTdhYmIzO1xuJHNlY29uZGFyeURhcms6ICNhMGE3YjA7XG4kc2Vjb25kYXJ5Q29sb3I6ICMzMDQwNjk7XG4kcHJpbWFyeUdyYXk6ICM4ZTk1YTA7XG4kbGlnaHRCbHVlOiAjMDA3YmM3OyJdfQ== */");

/***/ }),

/***/ "bdh1":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-header-dark {\n  color: #fff;\n  background-color: #1f2d41;\n}\n\n.page-header {\n  position: relative;\n  padding-top: 20rem;\n  padding-bottom: 0;\n}\n\n.bg-img-cover {\n  background-position: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('photo-1568992688065-536aad8a12f6.jpeg');\n}\n\nheader .svg-border-rounded {\n  border: none;\n}\n\n.icon-stack-xl {\n  height: 5rem;\n  width: 5rem;\n  font-size: 1.75rem;\n}\n\n.bg-gradient-primary-to-secondary {\n  background-color: #0061f2;\n  border-radius: 100%;\n  margin: 2em 4.5em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  /* background-image: linear-gradient(135deg,#0061f2,rgba(105,0,199,.8)); */\n}\n\n.feature-banner {\n  font-size: 3em;\n}\n\n.feature-text {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.card {\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.35rem;\n  text-decoration: none;\n  box-shadow: 0 -0.85rem 4.8rem 0 rgba(31, 45, 65, 0.15);\n  overflow: hidden;\n  position: relative;\n}\n\n.card .card-body .card-title {\n  margin-bottom: 0.75rem;\n  color: #304069;\n}\n\n.card .card-footer {\n  border: none;\n}\n\n.card .card-footer .post-preview-meta {\n  display: flex;\n  color: #8e95a0;\n}\n\n.card .card-footer .post-preview-meta img {\n  border-radius: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 72px;\n  width: auto;\n}\n\n.card .card-footer .post-preview-meta-details {\n  padding: 0.5em;\n}\n\n.card .card-footer .post-update {\n  display: flex;\n}\n\n.card .card-footer .post-update .post-preview-meta-details-name {\n  margin: 16px 1px 13px 2px;\n}\n\n.lift {\n  box-shadow: 0 0.15rem 1.75rem 0 rgba(31, 45, 65, 0.15);\n  /* transition: transform .15s ease-in-out,box-shadow .15s ease-in-out; */\n  transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.lift:hover {\n  transform: translateY(-0.33333rem);\n  box-shadow: 0 0.5rem 2rem 0 rgba(31, 45, 65, 0.25);\n}\n\n.blog-banner .recent-blog {\n  font-size: 3em;\n}\n\n.blog-banner .card-img-top {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 220px;\n  border: none;\n}\n\n.blog-banner .card-body p {\n  color: #a0a7b0;\n  font-size: 1em;\n  word-spacing: 0.2em;\n  letter-spacing: 0.01em;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.blog-banner .card-body p:hover {\n  text-decoration: none;\n}\n\n@media (max-width: 575.98px) {\n  header .page-header-content .page-first {\n    margin: -6em 2em 7em 2em;\n  }\n\n  .bg-white h3 {\n    font-size: 2.5em;\n    font-weight: 600;\n  }\n  .bg-white .icon-stack {\n    margin: 0em 4.5em;\n  }\n\n  .blog-banner h2 {\n    font-size: 2em !important;\n    font-weight: 600;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGUvfnZhcmlhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUhBQUE7QUFFSjs7QUFDSTtFQUNJLFlBQUE7QUFFUjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwRUFBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtBQUlKOztBQUZBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUhBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBRUEsc0RBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSlE7RUFDSSxzQkFBQTtFQUNBLGNBQUE7QUFNWjs7QUFGSTtFQUNJLFlBQUE7QUFJUjs7QUFIUTtFQUNFLGFBQUE7RUFDQSxjQ3pESTtBRDhEZDs7QUFKVTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBTVo7O0FBSFE7RUFDRSxjQUFBO0FBS1Y7O0FBSFE7RUFDRSxhQUFBO0FBS1Y7O0FBSlU7RUFDRSx5QkFBQTtBQU1aOztBQURBO0VBRUksc0RBQUE7RUFLQSx3RUFBQTtFQUNBLHFFQUFBO0FBRUo7O0FBQ0U7RUFFRSxrQ0FBQTtFQUVBLGtEQUFBO0FBRUo7O0FBQ0k7RUFDSSxjQUFBO0FBRVI7O0FBQUk7RUFDSSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRVI7O0FBQ1E7RUFDSSxjQzNHSTtFRDRHSixjQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUNaOztBQUNRO0VBQ0kscUJBQUE7QUFDWjs7QUFHQTtFQUdNO0lBQ0Usd0JBQUE7RUFGTjs7RUFPRTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUFKSjtFQU9BO0lBQ0UsaUJBQUE7RUFMRjs7RUFTRTtJQUNFLHlCQUFBO0lBQ0EsZ0JBQUE7RUFOSjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9hc3NldHMvc3R5bGUvfnZhcmlhYmxlLnNjc3MnO1xuLnBhZ2UtaGVhZGVyLWRhcmsge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjJkNDE7XG59XG4ucGFnZS1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLXRvcDogMjByZW07XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uYmctaW1nLWNvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjgpLCByZ2JhKDAsIDAsIDAsIDAuNykpLCB1cmwoXCIuLi8uLi9hc3NldHMvc3R5bGUvcGhvdG8tMTU2ODk5MjY4ODA2NS01MzZhYWQ4YTEyZjYuanBlZ1wiKTtcbn1cbmhlYWRlciB7XG4gICAgLnN2Zy1ib3JkZXItcm91bmRlZCB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG59XG4uaWNvbi1zdGFjay14bCB7XG4gICAgaGVpZ2h0OiA1cmVtO1xuICAgIHdpZHRoOiA1cmVtO1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cbi5iZy1ncmFkaWVudC1wcmltYXJ5LXRvLXNlY29uZGFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjFmMjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIG1hcmdpbjogMmVtIDQuNWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzAwNjFmMixyZ2JhKDEwNSwwLDE5OSwuOCkpOyAqL1xufVxuLmZlYXR1cmUtYmFubmVyIHtcbiAgICBmb250LXNpemU6IDNlbTtcbn1cbi5mZWF0dXJlLXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNhcmQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgLTAuODVyZW0gNC44cmVtIDAgcmdiYSgzMSwgNDUsIDY1LCAwLjE1KTtcbiAgICBib3gtc2hhZG93OiAwIC0wLjg1cmVtIDQuOHJlbSAwIHJnYmEoMzEsIDQ1LCA2NSwgMC4xNSk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmNhcmQtYm9keSB7XG4gICAgICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gICAgICAgICAgICBjb2xvcjogIzMwNDA2OTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJkLWZvb3RlciB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgLnBvc3QtcHJldmlldy1tZXRhIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeUdyYXk7XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIGhlaWdodDogNzJweDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucG9zdC1wcmV2aWV3LW1ldGEtZGV0YWlscyB7XG4gICAgICAgICAgcGFkZGluZzogMC41ZW07XG4gICAgICAgIH1cbiAgICAgICAgLnBvc3QtdXBkYXRlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC5wb3N0LXByZXZpZXctbWV0YS1kZXRhaWxzLW5hbWUge1xuICAgICAgICAgICAgbWFyZ2luOiAxNnB4IDFweCAxM3B4IDJweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbn1cbi5saWZ0IHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMC4xNXJlbSAxLjc1cmVtIDAgcmdiYSgzMSwgNDUsIDY1LCAwLjE1KTtcbiAgICBib3gtc2hhZG93OiAwIDAuMTVyZW0gMS43NXJlbSAwIHJnYmEoMzEsIDQ1LCA2NSwgMC4xNSk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dCxcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dCxcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgICAvKiB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7ICovXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0gMC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgfVxuICAubGlmdDpob3ZlciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMzMzMzNyZW0pO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4zMzMzM3JlbSk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAuNXJlbSAycmVtIDAgcmdiYSgzMSwgNDUsIDY1LCAwLjI1KTtcbiAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAycmVtIDAgcmdiYSgzMSwgNDUsIDY1LCAwLjI1KTtcbiAgfVxuLmJsb2ctYmFubmVyIHtcbiAgICAucmVjZW50LWJsb2cge1xuICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICB9XG4gICAgLmNhcmQtaW1nLXRvcCB7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyMjBweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeURhcms7XG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIHdvcmQtc3BhY2luZzogMC4yZW07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIHA6aG92ZXIge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgfVxufVxuQG1lZGlhKG1heC13aWR0aDogNTc1Ljk4cHgpIHsgXG4gIGhlYWRlciB7XG4gICAgLnBhZ2UtaGVhZGVyLWNvbnRlbnQge1xuICAgICAgLnBhZ2UtZmlyc3Qge1xuICAgICAgICBtYXJnaW46IC02ZW0gMmVtIDdlbSAyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5iZy13aGl0ZSB7XG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICBcbiAgLmljb24tc3RhY2sge1xuICAgIG1hcmdpbjogMGVtIDQuNWVtO1xuICB9XG59XG4gIC5ibG9nLWJhbm5lciB7XG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiAyZW0gIWltcG9ydGFudDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIFxuICB9XG4gfVxuXG4iLCJcblxuJHByaW1hcnlDb2xvcjogIzdmN2Y3ZjtcbiRwcmltYXJ5V2hpdGU6ICNmZmY7XG4kcHJpbWFyeUJsYWNrOiAjMDAwO1xuJHByaW1hcnlCbHVlOiAjMDA2MWYyO1xuJHByaW1hcnlHcmVlbjogIzAxYmE5NDtcbiRwcmltYXJ5VGVhbDogIzA1YWI5ZjtcbiRwcmltYXJ5RGFyazojMWYyZDQxO1xuJHNlY29uZGFyeVdoaXRlOiAjYTdhYmIzO1xuJHNlY29uZGFyeURhcms6ICNhMGE3YjA7XG4kc2Vjb25kYXJ5Q29sb3I6ICMzMDQwNjk7XG4kcHJpbWFyeUdyYXk6ICM4ZTk1YTA7XG4kbGlnaHRCbHVlOiAjMDA3YmM3OyJdfQ== */");

/***/ }),

/***/ "bsvf":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: MyErrorStateMatcher, LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "zu2e");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss */ "H8dG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/auth.service */ "7Vn+");







/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let LoginComponent = class LoginComponent {
    constructor(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.username = '';
        this.password = '';
        this.matcher = new MyErrorStateMatcher();
        this.isLoadingResults = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    onFormSubmit(form) {
        this.authService.login(form)
            .subscribe(res => {
            console.log(res);
            if (res.token) {
                localStorage.setItem('token', res.token);
                this.router.navigate(['home']);
            }
        }, (err) => {
            console.log(err);
        });
    }
    register() {
        this.router.navigate(['register']);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginComponent);



/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contact.component.html */ "BGiY");
/* harmony import */ var _contact_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.component.scss */ "Np+I");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent.ctorParameters = () => [];
ContactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact',
        template: _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContactComponent);



/***/ }),

/***/ "clsX":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_category_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./category.component.html */ "6Cpu");
/* harmony import */ var _category_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.component.scss */ "OzAx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/category.service */ "AfT/");





let CategoryComponent = class CategoryComponent {
    constructor(api) {
        this.api = api;
        this.displayedColumns = ['catName', 'catDesc'];
        this.data = [];
        this.isLoadingResults = true;
    }
    ngOnInit() {
        this.api.getCategories()
            .subscribe((res) => {
            this.data = res;
            console.log(this.data);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
CategoryComponent.ctorParameters = () => [
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] }
];
CategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-category',
        template: _raw_loader_category_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_category_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CategoryComponent);



/***/ }),

/***/ "eIu9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-edit/post-edit.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example-container mat-elevation-z8\">\n    <div class=\"example-loading-shade\"\n          *ngIf=\"isLoadingResults\">\n      <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n    </div>\n    <div class=\"button-row\">\n      <a mat-flat-button color=\"primary\" (click)=\"postDetails()\"><mat-icon>list</mat-icon></a>\n    </div>\n    <mat-card class=\"example-card\">\n      <form [formGroup]=\"postForm\" (ngSubmit)=\"onFormSubmit()\">\n        <mat-form-field class=\"example-full-width\">\n          <mat-select formControlName=\"category\" [errorStateMatcher]=\"matcher\">\n            <mat-option *ngFor=\"let cat of categories\" [value]=\"cat._id\">\n              {{cat.catName}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <span *ngIf=\"!postForm.get('category').valid && postForm.get('category').touched\">Please select Category</span>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Post Title\" formControlName=\"postTitle\"\n                  [errorStateMatcher]=\"matcher\">\n          <mat-error>\n            <span *ngIf=\"!postForm.get('postTitle').valid && postForm.get('postTitle').touched\">Please enter Post Title</span>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Post Author\" formControlName=\"postAuthor\"\n                  [errorStateMatcher]=\"matcher\">\n          <mat-error>\n            <span *ngIf=\"!postForm.get('postAuthor').valid && postForm.get('postAuthor').touched\">Please enter Post Author</span>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <textarea matInput placeholder=\"Post Desc\" formControlName=\"postDesc\"\n                  [errorStateMatcher]=\"matcher\"></textarea>\n          <mat-error>\n            <span *ngIf=\"!postForm.get('postDesc').valid && postForm.get('postDesc').touched\">Please enter Post Description</span>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n            <ckeditor matCkeditor placehoder=\"Post Content\" formControlName=\"postContent\"></ckeditor>\n            <mat-error>\n              <span *ngIf=\"!postForm.get('postContent').valid && postForm.get('postContent').touched\">Please enter Post Content</span>\n            </mat-error>\n          </mat-form-field>\n        <div class=\"button-row\">\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Post Reference\" formControlName=\"postReference\"\n                  [errorStateMatcher]=\"matcher\">\n          <mat-error>\n            <span *ngIf=\"!postForm.get('postReference').valid && postForm.get('postReference').touched\">Please enter Post Ref</span>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Post Image URL\" formControlName=\"postImgUrl\"\n                    [errorStateMatcher]=\"matcher\">\n            <mat-error>\n              <span *ngIf=\"!postForm.get('postImgUrl').valid && postForm.get('postImgUrl').touched\">Please enter Post Image URL</span>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Post Read Time in minutes\" formControlName=\"readTime\"\n                    [errorStateMatcher]=\"matcher\">\n            <mat-error>\n              <span *ngIf=\"!postForm.get('readTime').valid && postForm.get('readTime').touched\">Please enter Post readTime Duration</span>\n            </mat-error>\n          </mat-form-field>\n          <button type=\"submit\" [disabled]=\"!postForm.valid\" mat-flat-button color=\"primary\"><mat-icon>save</mat-icon></button>\n        </div>\n      </form>\n    </mat-card>\n  </div>\n");

/***/ }),

/***/ "eMJ/":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login-admin/login-admin.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example-container mat-elevation-z8\">\n    <div class=\"container-fluid\">\n      <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n    <div class=\"example-loading-shade\"\n         *ngIf=\"isLoadingResults\">\n      <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n    </div>\n    <h2 class=\"m-3 text-center\">Login Form</h2>\n    <mat-card class=\"example-card\">\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onFormSubmit(loginForm.value)\">\n        <mat-form-field class=\"example-full-width\">\n          <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"username\"\n                 [errorStateMatcher]=\"matcher\">\n          <mat-error>\n            <span *ngIf=\"!loginForm.get('username').valid && loginForm.get('username').touched\">Please enter your username</span>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\"\n                 [errorStateMatcher]=\"matcher\">\n          <mat-error>\n            <span *ngIf=\"!loginForm.get('password').valid && loginForm.get('password').touched\">Please enter your password</span>\n          </mat-error>\n        </mat-form-field>\n        <div class=\"custom-control custom-checkbox mb-3\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n          <label class=\"custom-control-label\" for=\"customCheck1\">Remember password</label>\n        </div>\n        <div class=\"button-row\">\n          <button  type=\"submit\" [disabled]=\"!loginForm.valid\" mat-flat-button color=\"primary\">Login</button>\n        </div>\n        <div class=\"button-row\">\n          <button class=\"button-register\" type=\"button\" mat-flat-button color=\"primary\" (click)=\"register()\">Register</button>\n        </div>\n      </form>\n    </mat-card>\n  </div>\n  </div>\n  </div>\n  \n");

/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "kjkU");
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.scss */ "8PEf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent.ctorParameters = () => [];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeaderComponent);



/***/ }),

/***/ "fQWx":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_post_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./post.component.html */ "ZGUQ");
/* harmony import */ var _post_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post.component.scss */ "GB7h");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/post.service */ "5p0G");





let PostComponent = class PostComponent {
    constructor(api) {
        this.api = api;
        this.displayedColumns = ['postTitle', 'postDesc'];
        this.data = [];
        this.isLoadingResults = true;
    }
    ngOnInit() {
        this.api.getPosts()
            .subscribe((res) => {
            this.data = res;
            console.log(this.data);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
PostComponent.ctorParameters = () => [
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] }
];
PostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-post',
        template: _raw_loader_post_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_post_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PostComponent);



/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "HhuZ");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.scss */ "pUeC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FooterComponent);



/***/ }),

/***/ "fv54":
/*!*******************************************************************!*\
  !*** ./src/app/category/category-edit/category-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: MyErrorStateMatcher, CategoryEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryEditComponent", function() { return CategoryEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_category_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./category-edit.component.html */ "VwQp");
/* harmony import */ var _category_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-edit.component.scss */ "huvq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/category.service */ "AfT/");







/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let CategoryEditComponent = class CategoryEditComponent {
    constructor(router, route, api, formBuilder) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.id = '';
        this.catName = '';
        this.catDesc = '';
        this.catImgUrl = '';
        this.catContent = '';
        this.updated = null;
        this.isLoadingResults = false;
        this.matcher = new MyErrorStateMatcher();
    }
    ngOnInit() {
        this.getCategory(this.route.snapshot.params.id);
        this.categoryForm = this.formBuilder.group({
            catName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            catDesc: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            catImgUrl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            catContent: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    getCategory(id) {
        this.api.getCategory(id).subscribe((data) => {
            this.id = data._id;
            this.categoryForm.setValue({
                catName: data.catName,
                catDesc: data.catDesc,
                catImgUrl: data.catImgUrl,
                catContent: data.catContent
            });
        });
    }
    onFormSubmit() {
        this.isLoadingResults = true;
        this.api.updateCategory(this.id, this.categoryForm.value)
            .subscribe((res) => {
            const id = res._id;
            this.isLoadingResults = false;
            this.router.navigate(['/category/details', id]);
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    categoryDetails() {
        this.router.navigate(['/category/details', this.id]);
    }
};
CategoryEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
CategoryEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-category-edit',
        template: _raw_loader_category_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_category_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CategoryEditComponent);



/***/ }),

/***/ "hnEC":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example-container mat-elevation-z8\">\n  <div class=\"container-fluid\">\n    <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n  <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <h2 class=\"m-3 text-center\">Registration Form</h2>\n  <mat-card class=\"example-card\">\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onFormSubmit(registerForm.value)\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"fullName\" placeholder=\"Full Name\" formControlName=\"fullName\"\n          [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!registerForm.get('fullName').valid && registerForm.get('fullName').touched\">Please enter your\n            Full Name</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"username\" [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!registerForm.get('username').valid && registerForm.get('username').touched\">Please enter your\n            username</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!registerForm.get('password').valid && registerForm.get('password').touched\">Please enter your\n            password</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"text\" matInput placeholder=\"Bio(breif discription)\" formControlName=\"bio\" [errorStateMatcher]=\"matcher\" autocomplete=\"off\">\n        <mat-error>\n          <span *ngIf=\"!registerForm.get('bio').valid && registerForm.get('bio').touched\">User Brief description\n            (bio)</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"userProfileUrl\" matInput placeholder=\"userProfile URL\" formControlName=\"userProfileUrl\"\n          [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!registerForm.get('userProfileUrl').valid && registerForm.get('userProfileUrl').touched\">Please\n            enter userPrifile Image URL</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"userProfileReference\" matInput placeholder=\"userProfileReference\" formControlName=\"userProfileReference\"\n          [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!registerForm.get('userProfileReference').valid && registerForm.get('userProfileReference').touched\">Please enter\n            userProfile image Reference</span>\n        </mat-error>\n      </mat-form-field>\n      <div class=\"button-row\">\n        <button  type=\"submit\" [disabled]=\"!registerForm.valid\" mat-flat-button color=\"primary\">Register</button>\n      </div>\n      <div class=\"button-row\">\n        <button class=\"button-register\" type=\"submit\" mat-flat-button color=\"primary\">Login</button>\n      </div>\n    </form>\n  </mat-card>\n</div>\n  </div>\n</div>");

/***/ }),

/***/ "huvq":
/*!*********************************************************************!*\
  !*** ./src/app/category/category-edit/category-edit.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "iJX/":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header data-v-22791a1b=\"\" data-v-0cc2979f=\"\" class=\"page-header bg-img-cover overlay overlay-60 page-header-dark\"\n  data-v-7930edba=\"\">\n  <div class=\"container\">\n    <div data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"page-header-content\">\n      <div data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"container text-center\">\n        <div data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"row justify-content-center\">\n          <div data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"col-lg-8\">\n            <h1 data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"page-header-title mb-3\">Publications</h1>\n            <p data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"page-header-text mb-0\">Browse articles, keep up\n              to date, and\n              learn more on our blog!</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <span data-v-c5f3fcf8=\"\" data-v-22791a1b=\"\">\n    <div data-v-c5f3fcf8=\"\" class=\"svg-border-rounded text-light\">\n      <svg data-v-c5f3fcf8=\"\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 144.54 17.34\" preserveAspectRatio=\"none\"\n        fill=\"currentColor\">\n        <path data-v-c5f3fcf8=\"\" d=\"M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0\">\n        </path>\n      </svg>\n    </div>\n  </span>\n</header>\n<section class=\"blog-header py-10 bg-light\">\n  <div class=\"container\">\n    <a data-v-0cc2979f=\"\" data-v-0e51b078=\"\" href=\"javascript:void(0);\"\n      class=\"card post-preview post-preview-featured lift mb-5\">\n      <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"row no-gutters\">\n        <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"col-lg-5\">\n          <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-featured-img\">\n            <!-- <img src=\"../../assets/style/computer.jpeg\" alt=\"\"> -->\n          </div>\n        </div>\n        <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"col-lg-7\">\n          <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-body\">\n            <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"py-5\">\n              <h5 data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-title\">Boots on the Ground, Inclusive\n                Thought Provoking Ideas</h5>\n              <p data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-text\">Empower communities and energize\n                engaging ideas; scale and impact do-gooders while disruptring industries. Venture\n                philanthropy benefits corporations and people by moving the needle.</p>\n            </div>\n            <hr data-v-0cc2979f=\"\" data-v-0e51b078=\"\">\n            <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta\">\n              <img data-v-0cc2979f=\"\" data-v-0e51b078=\"\" src=\"https://source.unsplash.com/QAB-WJcbgJk/100x100\"\n                class=\"post-preview-meta-img\">\n              <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details\">\n                <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details-name\">\n                  Valerie Luna</div>\n                <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details-date\">Feb 5\n                  · 6 min read</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </a>\n  </div>\n</section>\n\n<section class=\"blog-banner\">\n  <h2 class=\"recent-blog text-center m-5\">Recent Blogs</h2>\n  <div class=\"container mb-4\">\n    <div class=\"row justify-content-center align-item-center\">\n      <div class=\"col-md-4 col-sm-5\">\n        <input type=\"text\" [(ngModel)]=\"selectedUser\" type=\"text\" placeholder=\"Filter Post by title\">\n      </div>\n\n      <div class=\"col-md-6 col-sm-5\">\n        <mat-select>Search By Category\n          <mat-option *ngFor=\"let cat of categories\" [value]=\"cat._id\">\n            {{cat.catName}}\n          </mat-option>\n        </mat-select>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n        <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n      </div>\n      <div *ngFor=\"let post of posts | filter:selectedUser | paginate: {id : 'listing_pagination',\n      itemsPerPage:6,\n      currentPage: page,\n      totalItems: totalRecords}\" data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"col-md-6 col-xl-4 mb-5\">\n\n        <a data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card post-preview lift h-100\">\n          <img data-v-0cc2979f=\"\" data-v-0e51b078=\"\" src=\"{{post.postImgUrl}}\" alt=\"...\" class=\"card-img-top\">\n          <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-body\">\n            <a [routerLink]=\"['/details/', post._id]\">\n              <h5 data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-title\">{{post.postTitle}}</h5>\n            </a>\n            <p data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-text\">{{post.postDesc}}</p>\n          </div>\n          <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-footer\">\n            <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta\">\n              <ng-container *ngFor=\"let user of users, let i = index;\">\n                <div *ngIf=\"i===1\">\n                  <img data-v-0cc2979f=\"\" data-v-0e51b078=\"\" src=\"{{user.userProfileUrl}}\"\n                    class=\"post-preview-meta-img\">\n                </div>\n              </ng-container>\n              <!-- <img data-v-0cc2979f=\"\" data-v-0e51b078=\"\" src=\"{{user.userProfileReference}}\" \n              class=\"post-preview-meta-img\"> -->\n              <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details\">\n                <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details-name\">{{post.postAuthor}}\n                </div>\n                <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details-date\">\n                  {{post.updated | date: 'dd MMM yyyy'}}</div>\n              </div>\n              <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-update\">\n                <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details-name\">\n                  {{post.readTime}} min read\n                </div>\n              </div>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n\n</section>\n\n<section class=\"pagination-banner\">\n  <div>\n    <pagination-controls id=\"listing_pagination\" maxSize=\"6\" directionalLinks=\"true\" (pageChange)=\"page = $event\">\n    </pagination-controls>\n  </div>\n</section>");

/***/ }),

/***/ "ikNA":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-add/category-add.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n        *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <div class=\"button-row\">\n    <a mat-flat-button color=\"primary\" [routerLink]=\"['/category']\"><mat-icon>list</mat-icon></a>\n  </div>\n  <mat-card class=\"example-card\">\n    <form [formGroup]=\"categoryForm\" (ngSubmit)=\"onFormSubmit()\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Category Name\" formControlName=\"catName\"\n                [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!categoryForm.get('catName').valid && categoryForm.get('catName').touched\">Please enter Category Name</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <textarea matInput placeholder=\"Category Desc\" formControlName=\"catDesc\"\n                [errorStateMatcher]=\"matcher\"></textarea>\n        <mat-error>\n          <span *ngIf=\"!categoryForm.get('catDesc').valid && categoryForm.get('catDesc').touched\">Please enter Category Description</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Category Image URL\" formControlName=\"catImgUrl\"\n                [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!categoryForm.get('catImgUrl').valid && categoryForm.get('catImgUrl').touched\">Please enter Category Image URL</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <ckeditor matCkeditor placehoder=\"Category Content\" formControlName=\"catContent\"></ckeditor>\n        <mat-error>\n          <span *ngIf=\"!categoryForm.get('catContent').valid && categoryForm.get('catContent').touched\">Please enter Category Description</span>\n        </mat-error>\n      </mat-form-field>\n      <div class=\"button-row\">\n        <button type=\"submit\" [disabled]=\"!categoryForm.valid\" mat-flat-button color=\"primary\"><mat-icon>save</mat-icon></button>\n      </div>\n    </form>\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "CO2p");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.scss */ "l2CK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/auth.service */ "7Vn+");





let NavbarComponent = class NavbarComponent {
    constructor(authenticate) {
        this.authenticate = authenticate;
        this.navbarCollapsed = true;
    }
    toggleNavbarCollapsing() {
        this.navbarCollapsed = !this.navbarCollapsed;
    }
    ngOnInit() {
        this.auth = this.authenticate.isAuthenticated();
    }
    login() {
        this.auth = false;
    }
    logout() {
        this.auth = true;
        this.authenticate.logout();
        console.log("user login out successfully");
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-navbar',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NavbarComponent);



/***/ }),

/***/ "kjkU":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header m-5 pt-5\">\n    <div class=\"container\">\n      \n    </div>\n</div>\n\n\n");

/***/ }),

/***/ "l2CK":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\n  padding: 1em 1em 1em 1em;\n}\n.navbar .container .sarkblog-logo {\n  height: 69px;\n  width: 200px;\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n.navbar .container a {\n  color: #7f7f7f;\n  font-size: 18px;\n}\n.navbar .container .navbar-brand {\n  color: #0061f2;\n  letter-spacing: 2px;\n  font-size: 2em;\n  font-weight: 500;\n}\n.navbar .container .navbar-nav {\n  padding: 1em 0em 0em 2em;\n}\n.navbar .container .nav-button {\n  background-color: #01ba94;\n  margin: 0.2em 1em 1em 1em;\n  border-radius: 27px;\n}\n.navbar .container .nav-button button {\n  color: #fff;\n  font-size: 1em;\n  font-weight: 500;\n  letter-spacing: 2px;\n}\n.navbar .container .nav-button button i {\n  margin-left: 5px;\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25hdmJhci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZS9+dmFyaWFibGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHdCQUFBO0FBQUo7QUFFSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUFSO0FBRUk7RUFDSSxjQ1RPO0VEVVAsZUFBQTtBQUFSO0FBRUk7RUFDSSxjQ1ZNO0VEV04sbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUVJO0VBQ0ksd0JBQUE7QUFBUjtBQUVJO0VBQ0kseUJDbEJPO0VEbUJQLHlCQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUNRO0VBQ0ksV0N6Qkc7RUQwQkgsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDWjtBQUFZO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBRWhCIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zdHlsZS9+dmFyaWFibGUuc2Nzcyc7XG4ubmF2YmFyIHtcbiAgICBwYWRkaW5nOiAxZW0gMWVtIDFlbSAxZW07XG4uY29udGFpbmVyIHtcbiAgICAuc2Fya2Jsb2ctbG9nbyB7XG4gICAgICAgIGhlaWdodDogNjlweDtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICAgIGEge1xuICAgICAgICBjb2xvcjogJHByaW1hcnlDb2xvcjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgICAubmF2YmFyLWJyYW5kIHtcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5Qmx1ZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDsgXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICAubmF2YmFyLW5hdiB7XG4gICAgICAgIHBhZGRpbmc6IDFlbSAwZW0gMGVtIDJlbTtcbiAgICB9XG4gICAgLm5hdi1idXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeUdyZWVuO1xuICAgICAgICBtYXJnaW46IDAuMmVtIDFlbSAxZW0gMWVtIDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjdweDtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeVdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG59IiwiXG5cbiRwcmltYXJ5Q29sb3I6ICM3ZjdmN2Y7XG4kcHJpbWFyeVdoaXRlOiAjZmZmO1xuJHByaW1hcnlCbGFjazogIzAwMDtcbiRwcmltYXJ5Qmx1ZTogIzAwNjFmMjtcbiRwcmltYXJ5R3JlZW46ICMwMWJhOTQ7XG4kcHJpbWFyeVRlYWw6ICMwNWFiOWY7XG4kcHJpbWFyeURhcms6IzFmMmQ0MTtcbiRzZWNvbmRhcnlXaGl0ZTogI2E3YWJiMztcbiRzZWNvbmRhcnlEYXJrOiAjYTBhN2IwO1xuJHNlY29uZGFyeUNvbG9yOiAjMzA0MDY5O1xuJHByaW1hcnlHcmF5OiAjOGU5NWEwO1xuJGxpZ2h0Qmx1ZTogIzAwN2JjNzsiXX0= */");

/***/ }),

/***/ "pUeC":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".svg-border-rounded {\n  color: #1f2d41 !important;\n}\n\n.clip-path {\n  margin-top: 0;\n  width: 100%;\n}\n\nfooter {\n  background: #1f2d41;\n  width: 100%;\n}\n\nfooter .footer-top {\n  margin-top: -7em !important;\n}\n\nfooter .footer-banner {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 8em 0 0;\n  color: #a7abb3;\n}\n\nfooter .footer-banner h3 {\n  font-size: 1.3em;\n  padding: 0.8em 0;\n  font-weight: 500;\n  letter-spacing: 2px;\n}\n\nfooter .footer-banner ul li {\n  list-style-type: none;\n  text-align: left;\n  line-height: 1.5;\n}\n\nfooter .footer-logo {\n  color: #fff;\n}\n\nfooter .footer-logo h3 {\n  font-size: 2em;\n  padding: 0;\n  margin: 0;\n}\n\nfooter .footer-logo p {\n  color: #a7abb3;\n  font-size: 15px;\n}\n\nfooter .footer-logo .footer-social i {\n  margin-right: 0.7em;\n  font-size: 1.4em;\n}\n\nfooter .footer-bottom {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 7em 1em -1em;\n  border-top: 1px solid #7f7f7f;\n}\n\nfooter .footer-bottom p {\n  margin-left: 2em;\n  padding: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZS9+dmFyaWFibGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlCQUFBO0FBREo7O0FBb0JBO0VBQ0ksYUFBQTtFQUVBLFdBQUE7QUFsQko7O0FBcUJBO0VBQ0ksbUJDckJTO0VEc0JULFdBQUE7QUFsQko7O0FBbUJJO0VBQ0ksMkJBQUE7QUFqQlI7O0FBbUJJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQy9CUztBRGNqQjs7QUFrQlE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWhCWjs7QUFtQlk7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFqQmhCOztBQXFCSTtFQUNJLFdDckRPO0FEa0NmOztBQW9CUTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQWxCWjs7QUFvQlE7RUFDSSxjQ3RESztFRHVETCxlQUFBO0FBbEJaOztBQXFCWTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7QUFuQmhCOztBQXVCSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FBckJSOztBQXNCUTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQXBCWiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9hc3NldHMvc3R5bGUvfnZhcmlhYmxlLnNjc3MnO1xuXG4uc3ZnLWJvcmRlci1yb3VuZGVkIHtcbiAgICBjb2xvcjogJHByaW1hcnlEYXJrICFpbXBvcnRhbnQ7XG59XG5cbi8vIC5wYWdlLWhlYWRlci1kYXJrIHtcbi8vICAgICBjb2xvcjogI2ZmZjtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyZDQxO1xuLy8gfVxuLy8gLnBhZ2UtaGVhZGVyIHtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgcGFkZGluZy10b3A6IDA7XG4vLyAgICAgcGFkZGluZy1ib3R0b206IDA7XG4vLyB9XG4vLyAuYmctaW1nLWNvdmVyIHtcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlO1xuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4vLyAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbi8vICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjgpLCByZ2JhKDAsIDAsIDAsIDAuNykpLCB1cmwoJy4uLy4uL2Fzc2V0cy9zdHlsZS9jbGFzc2ljLTIwMjgwMTNfOTYwXzcyMC5wbmcnKTtcbi8vICAgICBiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5V2hpdGU7XG4vLyB9XG4uY2xpcC1wYXRoIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIC8vIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vICAgICBjbGlwLXBhdGg6IHBvbHlnb24oNDElIDIyJSwgNTUlIDI0JSwgNjklIDIxJSwgODIlIDE1JSwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSwgMCAwLCAxOCUgMTMlLCAzMSUgMTklKTtcbn1cbmZvb3RlciB7XG4gICAgYmFja2dyb3VuZDogJHByaW1hcnlEYXJrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5mb290ZXItdG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTdlbSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZm9vdGVyLWJhbm5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDhlbSAwIDA7XG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5V2hpdGU7XG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjhlbSAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgIH1cbiAgICAgICAgdWwge1xuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZvb3Rlci1sb2dvIHtcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5V2hpdGU7XG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5V2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3Rlci1zb2NpYWwge1xuICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjdlbTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5mb290ZXItYm90dG9tIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogN2VtIDFlbSAtMWVtO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHByaW1hcnlDb2xvcjtcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMmVtO1xuICAgICAgICAgICAgcGFkZGluZzogMS41ZW07XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsIlxuXG4kcHJpbWFyeUNvbG9yOiAjN2Y3ZjdmO1xuJHByaW1hcnlXaGl0ZTogI2ZmZjtcbiRwcmltYXJ5QmxhY2s6ICMwMDA7XG4kcHJpbWFyeUJsdWU6ICMwMDYxZjI7XG4kcHJpbWFyeUdyZWVuOiAjMDFiYTk0O1xuJHByaW1hcnlUZWFsOiAjMDVhYjlmO1xuJHByaW1hcnlEYXJrOiMxZjJkNDE7XG4kc2Vjb25kYXJ5V2hpdGU6ICNhN2FiYjM7XG4kc2Vjb25kYXJ5RGFyazogI2EwYTdiMDtcbiRzZWNvbmRhcnlDb2xvcjogIzMwNDA2OTtcbiRwcmltYXJ5R3JheTogIzhlOTVhMDtcbiRsaWdodEJsdWU6ICMwMDdiYzc7Il19 */");

/***/ }),

/***/ "qMKO":
/*!*************************************************************!*\
  !*** ./src/app/post/post-details/post-details.component.ts ***!
  \*************************************************************/
/*! exports provided: PostDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailsComponent", function() { return PostDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_post_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./post-details.component.html */ "/1Pu");
/* harmony import */ var _post_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-details.component.scss */ "s/Hl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/post.service */ "5p0G");






let PostDetailsComponent = class PostDetailsComponent {
    constructor(route, api, router) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.post = {
            category: '',
            id: '',
            postTitle: '',
            postAuthor: '',
            postDesc: '',
            postContent: '',
            postReference: '',
            postImgUrl: '',
            created: null,
            updated: null,
            readTime: ''
        };
        this.isLoadingResults = true;
    }
    ngOnInit() {
        this.getPostDetails(this.route.snapshot.params.id);
    }
    getPostDetails(id) {
        this.api.getPost(id)
            .subscribe((data) => {
            this.post = data;
            this.post.id = data._id;
            console.log(this.post);
            this.isLoadingResults = false;
        });
    }
    deletePost(id) {
        this.isLoadingResults = true;
        this.api.deletePost(id)
            .subscribe(res => {
            this.isLoadingResults = false;
            this.router.navigate(['/post']);
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
PostDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
PostDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-post-details',
        template: _raw_loader_post_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_post_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PostDetailsComponent);



/***/ }),

/***/ "s/Hl":
/*!***************************************************************!*\
  !*** ./src/app/post/post-details/post-details.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "uj5D":
/*!*****************************************************!*\
  !*** ./src/app/post/post-add/post-add.component.ts ***!
  \*****************************************************/
/*! exports provided: MyErrorStateMatcher, PostAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostAddComponent", function() { return PostAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_post_add_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./post-add.component.html */ "+0qy");
/* harmony import */ var _post_add_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-add.component.scss */ "DA75");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/post.service */ "5p0G");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/category.service */ "AfT/");





//import { PostService } from '../../post.service';



/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let PostAddComponent = class PostAddComponent {
    constructor(router, api, catApi, formBuilder) {
        this.router = router;
        this.api = api;
        this.catApi = catApi;
        this.formBuilder = formBuilder;
        this.category = '';
        this.postTitle = '';
        this.postAuthor = '';
        this.postDesc = '';
        this.postContent = '';
        this.postReference = '';
        this.postImgUrl = '';
        this.readTime = '';
        this.isLoadingResults = false;
        this.matcher = new MyErrorStateMatcher();
        this.categories = [];
    }
    ngOnInit() {
        this.getCategories();
        this.postForm = this.formBuilder.group({
            category: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            postTitle: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            postAuthor: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            postDesc: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            postContent: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            postReference: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            postImgUrl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            readTime: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    onFormSubmit() {
        this.isLoadingResults = true;
        this.api.addPost(this.postForm.value)
            .subscribe((res) => {
            const id = res._id;
            this.isLoadingResults = false;
            this.router.navigate(['/post/details', id]);
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    getCategories() {
        this.catApi.getCategories()
            .subscribe((res) => {
            this.categories = res;
            console.log(this.categories);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
PostAddComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"] },
    { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
PostAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-post-add',
        template: _raw_loader_post_add_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_post_add_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PostAddComponent);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "bsvf");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/register/register.component */ "ZGml");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details/details.component */ "9R8I");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category/category.component */ "clsX");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./post/post.component */ "fQWx");
/* harmony import */ var _category_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./category/category-details/category-details.component */ "Y6QS");
/* harmony import */ var _category_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./category/category-add/category-add.component */ "6PNY");
/* harmony import */ var _category_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./category/category-edit/category-edit.component */ "fv54");
/* harmony import */ var _post_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./post/post-details/post-details.component */ "qMKO");
/* harmony import */ var _post_post_add_post_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./post/post-add/post-add.component */ "uj5D");
/* harmony import */ var _post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./post/post-edit/post-edit.component */ "vrb6");
/* harmony import */ var _bycategory_bycategory_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bycategory/bycategory.component */ "EPmy");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./blog/blog.component */ "LgBW");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _auth_login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/login-admin/login-admin.component */ "0ydo");
/* harmony import */ var _authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_authGuard/auth.guard */ "LoHQ");






















const routes = [
    {
        path: 'header',
        component: _header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        data: { title: 'Blog Home' }
    },
    {
        path: 'admin',
        canActivate: [_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]],
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["AdminComponent"],
        data: { title: 'Blog Admin' }
    },
    {
        path: 'bycategory/:id',
        component: _bycategory_bycategory_component__WEBPACK_IMPORTED_MODULE_15__["BycategoryComponent"],
        data: { title: 'Post by Category' }
    },
    {
        path: 'details/:id',
        component: _details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"],
        data: { title: 'Show Post Details' }
    },
    {
        path: 'blog',
        component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_18__["BlogComponent"],
        data: { title: 'Show All Blogs ' }
    },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_19__["ContactComponent"],
        data: { title: 'Show contact page ' }
    },
    {
        path: 'category',
        canActivate: [_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]],
        component: _category_category_component__WEBPACK_IMPORTED_MODULE_7__["CategoryComponent"],
        data: { title: 'Category' }
    },
    {
        path: 'category/details/:id',
        canActivate: [_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]],
        component: _category_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_9__["CategoryDetailsComponent"],
        data: { title: 'Category Details' }
    },
    {
        path: 'category/add',
        canActivate: [_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]],
        component: _category_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_10__["CategoryAddComponent"],
        data: { title: 'Category Add' }
    },
    {
        path: 'category/edit/:id',
        canActivate: [_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]],
        component: _category_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_11__["CategoryEditComponent"],
        data: { title: 'Category Edit' }
    },
    {
        path: 'post',
        canActivate: [_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]],
        component: _post_post_component__WEBPACK_IMPORTED_MODULE_8__["PostComponent"],
        data: { title: 'Post' }
    },
    {
        path: 'post/details/:id',
        canActivate: [_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]],
        component: _post_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_12__["PostDetailsComponent"],
        data: { title: 'Post Details' }
    },
    {
        path: 'post/add',
        canActivate: [_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]],
        component: _post_post_add_post_add_component__WEBPACK_IMPORTED_MODULE_13__["PostAddComponent"],
        data: { title: 'Post Add' }
    },
    {
        path: 'post/edit/:id',
        canActivate: [_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]],
        component: _post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_14__["PostEditComponent"],
        data: { title: 'Post Edit' }
    },
    // ],
    //},
    {
        path: 'login',
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        data: { title: 'Login' }
    },
    {
        path: 'login-admin',
        component: _auth_login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_20__["LoginAdminComponent"],
        data: { title: 'Login-user' }
    },
    {
        path: 'register',
        component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
        data: { title: 'Register' }
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vrb6":
/*!*******************************************************!*\
  !*** ./src/app/post/post-edit/post-edit.component.ts ***!
  \*******************************************************/
/*! exports provided: MyErrorStateMatcher, PostEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEditComponent", function() { return PostEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_post_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./post-edit.component.html */ "eIu9");
/* harmony import */ var _post_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-edit.component.scss */ "CRz0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/post.service */ "5p0G");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/category.service */ "AfT/");








/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let PostEditComponent = class PostEditComponent {
    constructor(router, route, api, catApi, formBuilder) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.catApi = catApi;
        this.formBuilder = formBuilder;
        this.category = '';
        this.id = '';
        this.postTitle = '';
        this.postAuthor = '';
        this.postDesc = '';
        this.postContent = '';
        this.postReference = '';
        this.postImgUrl = '';
        this.readTime = '';
        this.updated = null;
        this.isLoadingResults = false;
        this.matcher = new MyErrorStateMatcher();
        this.categories = [];
    }
    ngOnInit() {
        this.getCategories();
        this.getPost(this.route.snapshot.params.id);
        this.postForm = this.formBuilder.group({
            category: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            postTitle: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            postAuthor: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            postDesc: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            postContent: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            postReference: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            postImgUrl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            readTime: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    getPost(id) {
        this.api.getPost(id).subscribe((data) => {
            this.id = data._id;
            this.postForm.setValue({
                category: data.category,
                postTitle: data.postTitle,
                postAuthor: data.postAuthor,
                postDesc: data.postDesc,
                postContent: data.postContent,
                postReference: data.postReference,
                postImgUrl: data.postImgUrl,
                readTime: data.readTime
            });
        });
    }
    getCategories() {
        this.catApi.getCategories()
            .subscribe((res) => {
            this.categories = res;
            console.log(this.categories);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    onFormSubmit() {
        this.isLoadingResults = true;
        this.api.updatePost(this.id, this.postForm.value)
            .subscribe((res) => {
            const id = res._id;
            this.isLoadingResults = false;
            this.router.navigate(['/post/details', id]);
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    postDetails() {
        this.router.navigate(['/post/details', this.id]);
    }
};
PostEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"] },
    { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
PostEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-post-edit',
        template: _raw_loader_post_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_post_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PostEditComponent);



/***/ }),

/***/ "x+LS":
/*!*******************************************!*\
  !*** ./src/app/_services/home.service.ts ***!
  \*******************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");






const apiUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl}api/public/`;
// const apiUrl = 'api/public/';
let HomeService = class HomeService {
    constructor(http) {
        this.http = http;
        this._pageCount = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this.count$ = this._pageCount.asObservable();
        this.counter = 0;
    }
    incrementPageCount() {
        const pageCount = this.af.object('/pageCount/').$ref
            .ref.transaction(count => {
            this.counter = count;
            return this.counter + 1;
        }).then((data) => { return data.snapshot.node_.value_; });
        return pageCount;
    }
    getCategories() {
        return this.http.get(apiUrl + 'category')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched Categories')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCategories', [])));
    }
    getPosts() {
        return this.http.get(apiUrl + 'post')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched Posts')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getPosts', [])));
    }
    getPostsByCategory(id) {
        return this.http.get(apiUrl + 'bycategory/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.log('fetched Posts')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getPosts', [])));
    }
    getPost(id) {
        return this.http.get(apiUrl + 'post/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => console.log(`fetched post by id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getPost id=${id}`)));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error); // log to console instead
            this.log(`${operation} failed: ${error.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
    log(message) {
        console.log(message);
    }
};
HomeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HomeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HomeService);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-banner {\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1iYW5uZXIge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xufSJdfQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "AytR");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zu2e":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"example-container mat-elevation-z8\">\n  <div class=\"container-fluid\">\n    <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n      <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n        <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n      </div>\n      <h2 class=\"m-3 text-center\">Login Form</h2>\n      \n      <mat-card class=\"example-card\">\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onFormSubmit(loginForm.value)\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"username\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n              <span *ngIf=\"!loginForm.get('username').valid && loginForm.get('username').touched\">Please enter your\n                username</span>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\"\n              [errorStateMatcher]=\"matcher\">\n            <mat-error>\n              <span *ngIf=\"!loginForm.get('password').valid && loginForm.get('password').touched\">Please enter your\n                password</span>\n            </mat-error>\n          </mat-form-field>\n          <div class=\"custom-control custom-checkbox mb-3\">\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n            <label class=\"custom-control-label\" for=\"customCheck1\">Remember password</label>\n          </div>\n          <div class=\"button-row\">\n            <button type=\"submit\" [disabled]=\"!loginForm.valid\" mat-flat-button color=\"primary\">Login</button>\n          </div>\n          <div class=\"button-row\">\n            <button class=\"button-register\" type=\"button\" mat-flat-button color=\"primary\"\n              (click)=\"register()\">Register</button>\n          </div>\n        </form>\n      </mat-card>\n    </div>\n  </div>\n</div> -->\n\n<div class=\"example-container mat-elevation-z8\">\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-10 col-xl-9 mx-auto\">\n      <div class=\"card card-signin flex-row my-5\">\n        <div class=\"card-img-left  d-md-flex\">\n          <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n        </div>\n        <h2 class=\"m-3 text-center\">Login Form</h2>\n        <div class=\"card-body\">\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onFormSubmit(loginForm.value)\" class=\"form-signin\">\n            <div class=\"form-label-group\">\n              <input type=\"email\" placeholder=\"Email\" formControlName=\"username\" [errorStateMatcher]=\"matcher\" class=\"form-control\">\n              <span *ngIf=\"!loginForm.get('username').valid && loginForm.get('username').touched\">Please enter your\n                username</span>\n            </div>\n\n            <hr>\n            <mat-form-field class=\"example-full-width\">\n              <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\"\n                [errorStateMatcher]=\"matcher\">\n              <mat-error>\n                <span *ngIf=\"!loginForm.get('password').valid && loginForm.get('password').touched\">Please enter your\n                  password</span>\n              </mat-error>\n            </mat-form-field>\n            <!-- <div class=\"form-label-group\">\n              <input type=\"password\" placeholder=\"Password\" formControlName=\"password\"\n              [errorStateMatcher]=\"matcher\">\n              <div>\n                <span *ngIf=\"!loginForm.get('password').valid && loginForm.get('password').touched\">Please enter your\n                  password</span>\n              </div>\n            </div> -->\n            \n            <hr>\n\n           <div class=\"button-row\">\n            <button type=\"submit\" [disabled]=\"!loginForm.valid\" mat-flat-button color=\"primary\">Login</button>\n          </div>\n          <div class=\"button-row\">\n            <button class=\"button-register\" type=\"button\" mat-flat-button color=\"primary\"\n              (click)=\"register()\">Register</button>\n          </div>\n            <hr class=\"my-4\">\n            <button class=\"btn btn-lg btn-google btn-block text-uppercase\" type=\"submit\"><i class=\"fab fa-google mr-2\"></i> Sign up with Google</button>\n            <button class=\"btn btn-lg btn-facebook btn-block text-uppercase\" type=\"submit\"><i class=\"fab fa-facebook-f mr-2\"></i> Sign up with Facebook</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map