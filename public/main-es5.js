(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+0qy":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-add/post-add.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function qy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"pt-5 example-container mat-elevation-z8\">\r\n  <div class=\"example-loading-shade\"\r\n        *ngIf=\"isLoadingResults\">\r\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n  </div>\r\n  <div class=\"button-row\">\r\n    <a mat-flat-button color=\"primary\" [routerLink]=\"['/post']\"><mat-icon>list</mat-icon></a>\r\n  </div>\r\n  <mat-card class=\"example-card\">\r\n    <form [formGroup]=\"postForm\" (ngSubmit)=\"onFormSubmit()\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <mat-select formControlName=\"category\" [errorStateMatcher]=\"matcher\">\r\n          <mat-option *ngFor=\"let cat of categories\" [value]=\"cat._id\">\r\n            {{cat.catName}}\r\n          </mat-option>\r\n        </mat-select>\r\n        <mat-error>\r\n          <span *ngIf=\"!postForm.get('category').valid && postForm.get('category').touched\">Please select Category</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Post Title\" formControlName=\"postTitle\"\r\n                [errorStateMatcher]=\"matcher\">\r\n        <mat-error>\r\n          <span *ngIf=\"!postForm.get('postTitle').valid && postForm.get('postTitle').touched\">Please enter Post Title</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Post Author\" formControlName=\"postAuthor\"\r\n                [errorStateMatcher]=\"matcher\">\r\n        <mat-error>\r\n          <span *ngIf=\"!postForm.get('postAuthor').valid && postForm.get('postAuthor').touched\">Please enter Post Author</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <textarea matInput placeholder=\"Post Desc\" formControlName=\"postDesc\"\r\n                [errorStateMatcher]=\"matcher\"></textarea>\r\n        <mat-error>\r\n          <span *ngIf=\"!postForm.get('postDesc').valid && postForm.get('postDesc').touched\">Please enter Post Description</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n          <ckeditor matCkeditor placeholder=\"Post Content\" formControlName=\"postContent\"></ckeditor>\r\n          <mat-error>\r\n            <span *ngIf=\"!postForm.get('postContent').valid && postForm.get('postContent').touched\">Please enter Post Content</span>\r\n          </mat-error>\r\n        </mat-form-field>\r\n      <div class=\"button-row\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Post Reference\" formControlName=\"postReference\"\r\n                [errorStateMatcher]=\"matcher\">\r\n        <mat-error>\r\n          <span *ngIf=\"!postForm.get('postReference').valid && postForm.get('postReference').touched\">Please enter Post Ref</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Post Image URL\" formControlName=\"postImgUrl\"\r\n                  [errorStateMatcher]=\"matcher\">\r\n          <mat-error>\r\n            <span *ngIf=\"!postForm.get('postImgUrl').valid && postForm.get('postImgUrl').touched\">Please enter Post Image URL</span>\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Post Read Time in minutes\" formControlName=\"readTime\"\r\n                  [errorStateMatcher]=\"matcher\">\r\n          <mat-error>\r\n            <span *ngIf=\"!postForm.get('readTime').valid && postForm.get('readTime').touched\">Please enter Post readTime Duration</span>\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <button type=\"submit\"  mat-flat-button color=\"primary\"><mat-icon>save</mat-icon></button>\r\n      </div>\r\n    </form>\r\n  </mat-card>\r\n</div>\r\n";
      /***/
    },

    /***/
    "/1Pu":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-details/post-details.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Pu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"example-container mat-elevation-z8\">\r\n  <div class=\"example-loading-shade\"\r\n        *ngIf=\"isLoadingResults\">\r\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n  </div>\r\n  <div class=\"button-row\">\r\n    <a mat-flat-button color=\"primary\" [routerLink]=\"['/post']\"><mat-icon>list</mat-icon></a>\r\n  </div>\r\n  <mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n      <mat-card-title><h2>{{post.postTitle}}</h2></mat-card-title>\r\n      <p>Created by: {{post.postAuthor}}, {{post.created | date}}, updated: {{post.updated | date}}</p>\r\n      <mat-card-subtitle>{{post.postDesc}}</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <img mat-card-image src=\"{{post.postImgUrl}}\" alt=\"{{post.postTitle}}\">\r\n    <mat-card-content>\r\n      <dl>\r\n        <dt>Post Content:</dt>\r\n        <dd [innerHTML]=\"post.postContent\"></dd>\r\n        <dt>Reference:</dt>\r\n        <dd>{{post.postReference}}</dd>\r\n      </dl>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <a mat-flat-button color=\"primary\" [routerLink]=\"['/post/edit', post.id]\"><mat-icon>edit</mat-icon></a>\r\n      <a mat-flat-button color=\"warn\" (click)=\"deletePost(post.id)\"><mat-icon>delete</mat-icon></a>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>\r\n";
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\user\Desktop\projects\sarkblog\angular-blog\client\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0ydo":
    /*!***********************************************************!*\
      !*** ./src/app/auth/login-admin/login-admin.component.ts ***!
      \***********************************************************/

    /*! exports provided: MyErrorStateMatcher, LoginAdminComponent */

    /***/
    function ydo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function () {
        return MyErrorStateMatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginAdminComponent", function () {
        return LoginAdminComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login-admin.component.html */
      "eMJ/");
      /* harmony import */


      var _login_admin_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login-admin.component.scss */
      "5mYt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/auth.service */
      "7Vn+");
      /** Error when invalid control is dirty, touched, or submitted. */


      var MyErrorStateMatcher = /*#__PURE__*/function () {
        function MyErrorStateMatcher() {
          _classCallCheck(this, MyErrorStateMatcher);
        }

        _createClass(MyErrorStateMatcher, [{
          key: "isErrorState",
          value: function isErrorState(control, form) {
            var isSubmitted = form && form.submitted;
            return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
          }
        }]);

        return MyErrorStateMatcher;
      }();

      var LoginAdminComponent = /*#__PURE__*/function () {
        function LoginAdminComponent(formBuilder, router, authService) {
          _classCallCheck(this, LoginAdminComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.authService = authService;
          this.username = '';
          this.password = '';
          this.matcher = new MyErrorStateMatcher();
          this.isLoadingResults = false;
        }

        _createClass(LoginAdminComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.formBuilder.group({
              username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit(form) {
            var _this = this;

            this.authService.login(form).subscribe(function (res) {
              console.log(res);

              if (res.token) {
                localStorage.setItem('token', res.token);

                _this.router.navigate(['post']);
              }
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "register",
          value: function register() {
            this.router.navigate(['register']);
          }
        }]);

        return LoginAdminComponent;
      }();

      LoginAdminComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }];
      };

      LoginAdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login-admin',
        template: _raw_loader_login_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_admin_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginAdminComponent);
      /***/
    },

    /***/
    "4IuV":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-details/category-details.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IuV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"example-container mat-elevation-z8\">\r\n  <div class=\"example-loading-shade\"\r\n        *ngIf=\"isLoadingResults\">\r\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n  </div>\r\n  <div class=\"button-row\">\r\n    <a mat-flat-button color=\"primary\" [routerLink]=\"['/category']\"><mat-icon>list</mat-icon></a>\r\n  </div>\r\n  <mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n      <mat-card-title><h2>{{category.catName}}</h2></mat-card-title>\r\n      <mat-card-subtitle>{{category.catDesc}}</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <img mat-card-image src=\"{{category.catImgUrl}}\" alt=\"{{category.catName}}\">\r\n    <mat-card-content>\r\n      <dl>\r\n        <dt>Category Content:</dt>\r\n        <dd [innerHTML]=\"category.catContent\"></dd>\r\n        <dt>Updated At:</dt>\r\n        <dd>{{category.updated | date}}</dd>\r\n      </dl>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <a mat-flat-button color=\"primary\" [routerLink]=\"['/category/edit', category?.id  || 'all']\"><mat-icon>edit</mat-icon></a>\r\n      <a mat-flat-button color=\"warn\" (click)=\"deleteCategory(category.id)\"><mat-icon>delete</mat-icon></a>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>\r\n";
      /***/
    },

    /***/
    "5mYt":
    /*!*************************************************************!*\
      !*** ./src/app/auth/login-admin/login-admin.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function mYt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".example-container {\n  background-color: #007bc7;\n  margin-top: 10em;\n  height: 60vh;\n}\n.example-container h2 {\n  color: #fff;\n  font-size: 2.5em;\n  font-weight: 600;\n}\n.example-container .example-card {\n  background-color: #fff;\n  border-radius: 22px;\n  padding: 2em;\n}\n.example-container .example-card .button-row button {\n  width: 100%;\n  padding: 5px;\n  border-radius: 27px;\n  font-size: 1.3em;\n  font-weight: 700;\n}\n.example-container .example-card .button-row .button-register {\n  background-color: #01ba94;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi1hZG1pbi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlXFx+dmFyaWFibGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlCQ1VRO0VEVFIsZ0JBQUE7RUFDQSxZQUFBO0FBREo7QUFFSTtFQUNJLFdDSk87RURLUCxnQkFBQTtFQUNBLGdCQUFBO0FBQVI7QUFFSTtFQUNJLHNCQ1RPO0VEVVAsbUJBQUE7RUFDQSxZQUFBO0FBQVI7QUFHUTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRFI7QUFHUTtFQUNJLHlCQ25CRztBRGtCZiIsImZpbGUiOiJsb2dpbi1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zdHlsZS9+dmFyaWFibGUuc2Nzcyc7XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Qmx1ZTtcclxuICAgIG1hcmdpbi10b3A6IDEwZW07XHJcbiAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICBoMiB7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5V2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gICAgLmV4YW1wbGUtY2FyZHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeVdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICAgICAgcGFkZGluZzogMmVtO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC40KSwgcmdiYSgwLDAsMCwwLjIpKSwgdXJsKCcuLi8uLi8uLi9hc3NldHMvc3R5bGUvcGhvdG8tMTU2ODk5MjY4ODA2NS01MzZhYWQ4YTEyZjYuanBlZycpO1xyXG4gICAgLmJ1dHRvbi1yb3cge1xyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjdweDtcclxuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b24tcmVnaXN0ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeUdyZWVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOiA1NzUuOThweCl7XHJcblxyXG59IiwiXHJcblxyXG4kcHJpbWFyeUNvbG9yOiAjN2Y3ZjdmO1xyXG4kcHJpbWFyeVdoaXRlOiAjZmZmO1xyXG4kcHJpbWFyeUJsYWNrOiAjMDAwO1xyXG4kcHJpbWFyeUJsdWU6ICMwMDYxZjI7XHJcbiRwcmltYXJ5R3JlZW46ICMwMWJhOTQ7XHJcbiRwcmltYXJ5VGVhbDogIzA1YWI5ZjtcclxuJHByaW1hcnlEYXJrOiMxZjJkNDE7XHJcbiRzZWNvbmRhcnlXaGl0ZTogI2E3YWJiMztcclxuJHNlY29uZGFyeURhcms6ICNhMGE3YjA7XHJcbiRzZWNvbmRhcnlDb2xvcjogIzMwNDA2OTtcclxuJHByaW1hcnlHcmF5OiAjOGU5NWEwO1xyXG4kbGlnaHRCbHVlOiAjMDA3YmM3OyJdfQ== */";
      /***/
    },

    /***/
    "5p0G":
    /*!*******************************************!*\
      !*** ./src/app/_services/post.service.ts ***!
      \*******************************************/

    /*! exports provided: PostService */

    /***/
    function p0G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostService", function () {
        return PostService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var apiUrl = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl, "api/post/"); //const apiUrl = 'api/post/';

      var PostService = /*#__PURE__*/function () {
        function PostService(http) {
          _classCallCheck(this, PostService);

          this.http = http;
        }

        _createClass(PostService, [{
          key: "getPosts",
          value: function getPosts() {
            var _this2 = this;

            return this.http.get(apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
              return _this2.log('fetched Posts');
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getPosts', [])));
          }
        }, {
          key: "getPost",
          value: function getPost(id) {
            var url = "".concat(apiUrl, "/").concat(id);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
              return console.log("fetched post by id=".concat(id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getPost id=".concat(id))));
          }
        }, {
          key: "addPost",
          value: function addPost(post) {
            return this.http.post(apiUrl, post).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (prod) {
              return console.log("added post w/ id=".concat(post.id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addPost')));
          }
        }, {
          key: "updatePost",
          value: function updatePost(id, post) {
            var url = "".concat(apiUrl, "/").concat(id);
            return this.http.put(url, post).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
              return console.log("updated post id=".concat(id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updatePost')));
          }
        }, {
          key: "deletePost",
          value: function deletePost(id) {
            var url = "".concat(apiUrl, "/").concat(id);
            return this.http["delete"](url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
              return console.log("deleted post id=".concat(id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deletePost')));
          }
        }, {
          key: "handleError",
          value: function handleError() {
            var _this3 = this;

            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              console.error(error); // log to console instead

              _this3.log("".concat(operation, " failed: ").concat(error.message));

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
            };
          }
        }, {
          key: "log",
          value: function log(message) {
            console.log(message);
          }
        }]);

        return PostService;
      }();

      PostService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      PostService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PostService);
      /***/
    },

    /***/
    "6Cpu":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function Cpu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"example-container mat-elevation-z8\">\r\n  <div class=\"example-loading-shade\"\r\n        *ngIf=\"isLoadingResults\">\r\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"d-flex\">\r\n      \r\n      <h1 class=\"mr-3\">\r\n        <a routerLink=\"/post\">Posts</a>\r\n      </h1>\r\n      <h1 class=\"ml-3\">\r\n        <a routerLink=\"/category\">Category</a>\r\n      </h1>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"button-row\">\r\n    <a mat-flat-button color=\"primary\" [routerLink]=\"['add']\"><mat-icon>add</mat-icon></a>\r\n  </div>\r\n  <div class=\"mat-elevation-z8\">\r\n    <table mat-table [dataSource]=\"data\" class=\"example-table\"\r\n            matSort matSortActive=\"catName\" matSortDisableClear matSortDirection=\"asc\">\r\n\r\n      <!-- Category Name Column -->\r\n      <ng-container matColumnDef=\"catName\">\r\n        <th mat-header-cell *matHeaderCellDef>Category Name</th>\r\n        <td mat-cell *matCellDef=\"let row\">{{row.catName}}</td>\r\n      </ng-container>\r\n\r\n      <!-- Category Description Column -->\r\n      <ng-container matColumnDef=\"catDesc\">\r\n        <th mat-header-cell *matHeaderCellDef>Category Description</th>\r\n        <td mat-cell *matCellDef=\"let row\">{{row.catDesc}}</td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['details/', row._id]\"></tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "6PNY":
    /*!*****************************************************************!*\
      !*** ./src/app/category/category-add/category-add.component.ts ***!
      \*****************************************************************/

    /*! exports provided: MyErrorStateMatcher, CategoryAddComponent */

    /***/
    function PNY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function () {
        return MyErrorStateMatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryAddComponent", function () {
        return CategoryAddComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_category_add_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./category-add.component.html */
      "ikNA");
      /* harmony import */


      var _category_add_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./category-add.component.scss */
      "ENbU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/category.service */
      "AfT/");
      /** Error when invalid control is dirty, touched, or submitted. */


      var MyErrorStateMatcher = /*#__PURE__*/function () {
        function MyErrorStateMatcher() {
          _classCallCheck(this, MyErrorStateMatcher);
        }

        _createClass(MyErrorStateMatcher, [{
          key: "isErrorState",
          value: function isErrorState(control, form) {
            var isSubmitted = form && form.submitted;
            return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
          }
        }]);

        return MyErrorStateMatcher;
      }();

      var CategoryAddComponent = /*#__PURE__*/function () {
        function CategoryAddComponent(router, api, formBuilder) {
          _classCallCheck(this, CategoryAddComponent);

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

        _createClass(CategoryAddComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.categoryForm = this.formBuilder.group({
              catName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              catDesc: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              catImgUrl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              catContent: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            });
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit() {
            var _this4 = this;

            this.isLoadingResults = true;
            this.api.addCategory(this.categoryForm.value).subscribe(function (res) {
              var id = res._id;
              _this4.isLoadingResults = false;

              _this4.router.navigate(['/category/details', id]);
            }, function (err) {
              console.log(err);
              _this4.isLoadingResults = false;
            });
          }
        }]);

        return CategoryAddComponent;
      }();

      CategoryAddComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }];
      };

      CategoryAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-category-add',
        template: _raw_loader_category_add_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_category_add_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CategoryAddComponent);
      /***/
    },

    /***/
    "7Vn+":
    /*!*******************************************!*\
      !*** ./src/app/_services/auth.service.ts ***!
      \*******************************************/

    /*! exports provided: AuthService */

    /***/
    function Vn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var apiUrl = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl, "api/auth/");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.isLoggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.loggedInStatus = false;
        }

        _createClass(AuthService, [{
          key: "getUsers",
          value: function getUsers() {
            var _this5 = this;

            return this.http.get(apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
              return _this5.log('fetched Users');
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getUsers', [])));
          }
        }, {
          key: "getUser",
          value: function getUser(id) {
            var url = "".concat(apiUrl, "/").concat(id);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
              return console.log("fetched User by id=".concat(id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getUser id=".concat(id))));
          }
        }, {
          key: "login",
          value: function login(data) {
            var _this6 = this;

            return this.http.post(apiUrl + 'login', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
              _this6.isLoggedIn.emit(true);

              _this6.loggedInStatus = true;
              localStorage.setItem('sarkblog', 'true');
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('login', [])));
          } // logout(): Observable<any> {
          //   return this.http.post<any>(apiUrl + 'logout', {})
          //     .pipe(
          //       tap(_ => {
          //         this.isLoggedIn.emit(false);
          //         this.loggedInStatus = false;
          //       }),
          //       catchError(this.handleError('logout', []))
          //     );
          // }

        }, {
          key: "logout",
          value: function logout() {
            localStorage.clear();
          }
        }, {
          key: "register",
          value: function register(data) {
            var _this7 = this;

            return this.http.post(apiUrl + 'register', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
              return _this7.log('login');
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('login', [])));
          }
        }, {
          key: "isAuthenticated",
          value: function isAuthenticated() {
            // Check whether the current time is past the
            // access token's expiry time
            var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
            return new Date().getTime() < expiresAt;
          }
        }, {
          key: "handleError",
          value: function handleError() {
            var _this8 = this;

            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              console.error(error); // log to console instead

              _this8.log("".concat(operation, " failed: ").concat(error.message));

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
            };
          }
        }, {
          key: "log",
          value: function log(message) {
            console.log(message);
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AuthService.propDecorators = {
        isLoggedIn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "8PEf":
    /*!**********************************************!*\
      !*** ./src/app/header/header.component.scss ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function PEf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "9R8I":
    /*!**********************************************!*\
      !*** ./src/app/details/details.component.ts ***!
      \**********************************************/

    /*! exports provided: DetailsComponent */

    /***/
    function R8I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsComponent", function () {
        return DetailsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./details.component.html */
      "Fmb7");
      /* harmony import */


      var _details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./details.component.scss */
      "aZnr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_services/auth.service */
      "7Vn+");
      /* harmony import */


      var _services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_services/category.service */
      "AfT/");
      /* harmony import */


      var _services_home_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../_services/home.service */
      "x+LS");
      /* harmony import */


      var _services_post_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../_services/post.service */
      "5p0G");

      var DetailsComponent = /*#__PURE__*/function () {
        function DetailsComponent(authApi, route, cat, api, postService, router) {
          _classCallCheck(this, DetailsComponent);

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

        _createClass(DetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.getPostDetails(this.route.snapshot.params.id);
            this.getPostCategory(this.route.snapshot.params.id);
            this.getusers();
            this.getPost();
            this.cat.getCategories().subscribe(function (res) {
              _this9.catList = res;
              console.log(_this9.catList);
              _this9.isLoadingResults = false;
            }, function (err) {
              console.log(err);
              _this9.isLoadingResults = false;
            });
            /**
             * @VISITOR COUNTER
             */

            this.api.incrementPageCount().then(function (data) {
              return _this9.serviceCount.changeCount(data);
            });
          }
        }, {
          key: "getPostDetails",
          value: function getPostDetails(id) {
            var _this10 = this;

            this.api.getPost(id).subscribe(function (data) {
              _this10.post = data;
              console.log(_this10.post);
              _this10.pageId = "post/details/".concat(_this10.post.id);
              _this10.isLoadingResults = false;
            });
          }
        }, {
          key: "getPostCategory",
          value: function getPostCategory(id) {
            var _this11 = this;

            this.cat.getCategory(id).subscribe(function (data) {
              //console.log(data)
              _this11.checkCat = data;
              console.log(_this11.checkCat);
              _this11.isLoadingResults = false;
            });
          }
        }, {
          key: "getPost",
          value: function getPost() {
            var _this12 = this;

            this.postService.getPosts().subscribe(function (res) {
              _this12.postList = res;
              console.log(_this12.postList);
              _this12.isLoadingResults = false;
            }, function (err) {
              console.log(err);
              _this12.isLoadingResults = false;
            });
          }
        }, {
          key: "getCategories",
          value: function getCategories() {
            var _this13 = this;

            this.cat.getCategories().subscribe(function (res) {
              _this13.categories = res;
              console.log(_this13.categories);
              _this13.isLoadingResults = false;
            }, function (err) {
              console.log(err);
              _this13.isLoadingResults = false;
            });
          }
        }, {
          key: "getusers",
          value: function getusers() {
            var _this14 = this;

            this.authApi.getUsers().subscribe(function (res) {
              _this14.users = res;
              console.log(_this14.users);
              _this14.isLoadingResults = false;
            }, function (err) {
              console.log(err);
              _this14.isLoadingResults = false;
            });
          }
        }]);

        return DetailsComponent;
      }();

      DetailsComponent.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]
        }, {
          type: _services_home_service__WEBPACK_IMPORTED_MODULE_7__["HomeService"]
        }, {
          type: _services_post_service__WEBPACK_IMPORTED_MODULE_8__["PostService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      DetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-details',
        template: _raw_loader_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DetailsComponent);
      /***/
    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.component.html */
      "Gd4t");
      /* harmony import */


      var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component.scss */
      "bdh1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_services/post.service */
      "5p0G");
      /* harmony import */


      var _services_home_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_services/home.service */
      "x+LS");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(api, postService, toast) {
          _classCallCheck(this, HomeComponent);

          this.api = api;
          this.postService = postService;
          this.toast = toast;
          this.posts = [];
          this.isLoadingResults = true;
          this.page = 1; //this.posts = new Array<any>();
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.api.getPosts().subscribe(function (res) {
              _this15.posts = res;
              console.log(_this15.posts);
              _this15.isLoadingResults = false;
            }, function (err) {
              console.log(err);
              _this15.isLoadingResults = false;
            });
          }
        }, {
          key: "toastSuccess",
          value: function toastSuccess() {
            this.toast.success("successfull", "toast up");
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ctorParameters = function () {
        return [{
          type: _services_home_service__WEBPACK_IMPORTED_MODULE_6__["HomeService"]
        }, {
          type: _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      };

      HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomeComponent);
      /***/
    },

    /***/
    "AfT/":
    /*!***********************************************!*\
      !*** ./src/app/_services/category.service.ts ***!
      \***********************************************/

    /*! exports provided: CategoryService */

    /***/
    function AfT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
        return CategoryService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var apiUrl = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl, "/api/category/"); //const apiUrl = 'api/category/';

      var CategoryService = /*#__PURE__*/function () {
        function CategoryService(http) {
          _classCallCheck(this, CategoryService);

          this.http = http;
        }

        _createClass(CategoryService, [{
          key: "getCategories",
          value: function getCategories() {
            var _this16 = this;

            return this.http.get(apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
              return _this16.log('fetched Categories');
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCategories', [])));
          }
        }, {
          key: "getCategory",
          value: function getCategory(id) {
            var url = "".concat(apiUrl, "/").concat(id);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
              return console.log("fetched category by id=".concat(id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getCategory id=".concat(id))));
          }
        }, {
          key: "addCategory",
          value: function addCategory(category) {
            return this.http.post(apiUrl, category).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (prod) {
              return console.log("added category w/ id=".concat(category.id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addCategory')));
          }
        }, {
          key: "updateCategory",
          value: function updateCategory(id, category) {
            var url = "".concat(apiUrl, "/").concat(id);
            return this.http.put(url, category).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
              return console.log("updated category id=".concat(id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateCategory')));
          }
        }, {
          key: "deleteCategory",
          value: function deleteCategory(id) {
            var url = "".concat(apiUrl, "/").concat(id);
            return this.http["delete"](url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
              return console.log("deleted category id=".concat(id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteCategory')));
          }
        }, {
          key: "handleError",
          value: function handleError() {
            var _this17 = this;

            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              console.error(error); // log to console instead

              _this17.log("".concat(operation, " failed: ").concat(error.message));

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
            };
          }
        }, {
          key: "log",
          value: function log(message) {
            console.log(message);
          }
        }]);

        return CategoryService;
      }();

      CategoryService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      CategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CategoryService);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "BGiY":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function BGiY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"contact\">\r\n    <div class=\"container\">\r\n        <div class=\"jumbotron\">\r\n            <h1 class=\"m-4\">Welcome to the contact Page</h1>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "CO2p":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function CO2p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"navbar-banner\">\r\n  <nav class=\"navbar fixed-top navbar-expand-md navbar-dark bg-light\">\r\n    <div class=\"container\">\r\n\r\n      <a class=\"navbar-brand\">\r\n        <img class=\"img-fluid sarkblog-logo\" src=\"../../assets/style/sark (1).png\" alt=\"\">\r\n      </a>\r\n      <button class=\"bg-info navbar-toggler navbar-toggler-right\" (click)=\"toggleNavbarCollapsing()\" type=\"button\"\r\n        data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\"\r\n        aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" [class.collapse]=\"navbarCollapsed\" id=\"navbarResponsive\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"/home\" routerlinkactive=\"active\">Home</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"/blog\" routerlinkactive=\"active\">Blog</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"/contact\" routerlinkactive=\"active\">Contact</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link fa fa-user\" routerLink=\"post\">\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-button\">\r\n            <button class=\"btn\" *ngIf=\"auth\" routerLink=\"/login\">Join Us<i class=\"fas fa-arrow-right\"></i></button>\r\n            <button class=\"btn\" *ngIf=\"!auth\" (click)=\"logout()\"><i class=\"fa fa-user\"></i>Log Out</button>\r\n\r\n          </li>\r\n\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</div>";
      /***/
    },

    /***/
    "CRz0":
    /*!*********************************************************!*\
      !*** ./src/app/post/post-edit/post-edit.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function CRz0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LWVkaXQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "DA75":
    /*!*******************************************************!*\
      !*** ./src/app/post/post-add/post-add.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function DA75(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LWFkZC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "ENbU":
    /*!*******************************************************************!*\
      !*** ./src/app/category/category-add/category-add.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function ENbU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS1hZGQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "EPmy":
    /*!****************************************************!*\
      !*** ./src/app/bycategory/bycategory.component.ts ***!
      \****************************************************/

    /*! exports provided: BycategoryComponent */

    /***/
    function EPmy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BycategoryComponent", function () {
        return BycategoryComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bycategory_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bycategory.component.html */
      "TWh7");
      /* harmony import */


      var _bycategory_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bycategory.component.scss */
      "LNU8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_services/home.service */
      "x+LS");

      var BycategoryComponent = /*#__PURE__*/function () {
        function BycategoryComponent(route, api) {
          _classCallCheck(this, BycategoryComponent);

          this.route = route;
          this.api = api;
          this.posts = [];
          this.isLoadingResults = true;
        }

        _createClass(BycategoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            this.route.params.subscribe(function (params) {
              _this18.getPostsByCategory(_this18.route.snapshot.params.id);
            });
          }
        }, {
          key: "getPostsByCategory",
          value: function getPostsByCategory(id) {
            var _this19 = this;

            this.posts = [];
            console.log(this.posts, "######+++++ category ");
            this.api.getPostsByCategory(id).subscribe(function (res) {
              _this19.posts = res;
              console.log(_this19.posts);
              _this19.isLoadingResults = false;
            }, function (err) {
              console.log(err);
              _this19.isLoadingResults = false;
            });
          }
        }]);

        return BycategoryComponent;
      }();

      BycategoryComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _services_home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"]
        }];
      };

      BycategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bycategory',
        template: _raw_loader_bycategory_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bycategory_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BycategoryComponent);
      /***/
    },

    /***/
    "Eln7":
    /*!********************************************!*\
      !*** ./src/app/_services/toast.service.ts ***!
      \********************************************/

    /*! exports provided: ToastService */

    /***/
    function Eln7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastService", function () {
        return ToastService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      var ToastService = /*#__PURE__*/function () {
        function ToastService(toastr) {
          var _this20 = this;

          _classCallCheck(this, ToastService);

          this.toastr = toastr;
          this.toastRef = 1; // Remove last toastr

          this.removeToast = function () {
            _this20.toastr.clear(_this20.toastRef.ToastId);
          };
        } // Error message


        _createClass(ToastService, [{
          key: "showErrorToast",
          value: function showErrorToast(message) {
            var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var timeOut = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5000;
            var extendedTimeOut = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5000;
            var easeTime = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 700;
            this.removeToast();
            this.toastRef = this.toastr.warning(message, title, {
              timeOut: timeOut,
              extendedTimeOut: extendedTimeOut,
              easeTime: easeTime,
              closeButton: true,
              easing: "ease-in",
              positionClass: "toast-top-center",
              enableHtml: true
            });
          } // Info message

        }, {
          key: "showInfoToast",
          value: function showInfoToast(message) {
            var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var timeOut = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5000;
            var extendedTimeOut = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5000;
            var easeTime = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 700;
            this.removeToast();
            this.toastRef = this.toastr.info(message, title, {
              timeOut: timeOut,
              extendedTimeOut: extendedTimeOut,
              easeTime: easeTime,
              closeButton: true,
              easing: "ease-in",
              positionClass: "toast-top-center",
              enableHtml: true
            });
          } // Success message

        }, {
          key: "showSuccessToast",
          value: function showSuccessToast(message) {
            var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var timeOut = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5000;
            var extendedTimeOut = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5000;
            var easeTime = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 700;
            this.removeToast();
            this.toastRef = this.toastr.success(message, title, {
              timeOut: timeOut,
              extendedTimeOut: extendedTimeOut,
              easeTime: easeTime,
              closeButton: true,
              easing: "ease-in",
              positionClass: "toast-top-center",
              enableHtml: true
            });
          }
        }]);

        return ToastService;
      }();

      ToastService.ctorParameters = function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }];
      };

      ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ToastService);
      /***/
    },

    /***/
    "F7z0":
    /*!******************************************!*\
      !*** ./src/app/blog/blog.component.scss ***!
      \******************************************/

    /*! exports provided: default */

    /***/
    function F7z0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".page-header-dark {\n  color: #fff;\n  background-color: #1f2d41;\n}\n\n.page-header {\n  position: relative;\n  padding-top: 20rem;\n  padding-bottom: 0;\n}\n\n.bg-img-cover {\n  background-position: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('photo-1568992688065-536aad8a12f6.jpeg');\n}\n\nheader .svg-border-rounded {\n  border: none;\n}\n\n.blog-header {\n  padding-top: 4em;\n  position: relative;\n}\n\n.blog-header .post-preview-featured-img {\n  height: 100%;\n  width: 100%;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('computer.jpeg');\n  background-position: 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.blog-header .bg-light {\n  background-color: #eff3f9 !important;\n}\n\n.blog-header .card.lift {\n  text-decoration: none;\n  color: inherit;\n}\n\n.blog-header .card {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 0 solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.35rem;\n}\n\n.blog-header .lift {\n  box-shadow: 0 0.15rem 1.75rem 0 rgba(31, 45, 65, 0.15);\n  transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  /* transition: transform .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out,-webkit-box-shadow .15s ease-in-out; */\n}\n\n.blog-header .no-gutters {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.blog-header .no-gutters .card-body {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 1.35rem;\n}\n\n.blog-header .no-gutters .card-body .card-title {\n  font-size: 1.75rem;\n  color: #304069;\n}\n\n.blog-header .no-gutters .card-body .card-text {\n  font-size: 1.2rem;\n  font-weight: 300;\n}\n\n.blog-header .no-gutters .card-body .post-preview-meta {\n  display: flex;\n}\n\n.blog-header .no-gutters .card-body .post-preview-meta img {\n  border-radius: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 72px;\n  width: auto;\n}\n\n.blog-header .no-gutters .card-body .post-preview-meta .post-preview-meta-details {\n  padding: 0.5em;\n}\n\n.blog-banner .recent-blog {\n  font-size: 3em;\n}\n\n.blog-banner .card-img-top {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 220px;\n  border: none;\n}\n\n.blog-banner .card-body p {\n  color: #a0a7b0;\n  font-size: 1em;\n  word-spacing: 0.2em;\n  letter-spacing: 0.01em;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.blog-banner .card-body p:hover {\n  text-decoration: none;\n}\n\n.blog-banner .card {\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.35rem;\n  text-decoration: none;\n  box-shadow: 0 -0.85rem 4.8rem 0 rgba(31, 45, 65, 0.15);\n  overflow: hidden;\n  position: relative;\n}\n\n.blog-banner .card .card-body .card-title {\n  margin-bottom: 0.75rem;\n  color: #304069;\n}\n\n.blog-banner .card .card-footer {\n  border: none;\n}\n\n.blog-banner .card .card-footer .post-preview-meta {\n  display: flex;\n  color: #8e95a0;\n}\n\n.blog-banner .card .card-footer .post-preview-meta img {\n  border-radius: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 40px;\n  width: 40px;\n}\n\n.blog-banner .card .card-footer .post-preview-meta-details {\n  padding: 0.5em;\n}\n\n.blog-banner .card .card-footer .post-update {\n  display: flex;\n}\n\n.blog-banner .card .card-footer .post-update .post-preview-meta-details-name {\n  margin: 16px 1px 13px 2px;\n}\n\n.blog-banner .lift {\n  box-shadow: 0 0.15rem 1.75rem 0 rgba(31, 45, 65, 0.15);\n  /* transition: transform .15s ease-in-out,box-shadow .15s ease-in-out; */\n  transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.blog-banner .lift:hover {\n  transform: translateY(-0.33333rem);\n  box-shadow: 0 0.5rem 2rem 0 rgba(31, 45, 65, 0.25);\n}\n\n.pagination-banner .pagination-blog .page-item .page-link {\n  border-radius: 0.35rem;\n  border: none;\n  padding: 0.75rem 1rem;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.pagination-banner .page-item.active .page-link {\n  z-index: 3;\n  color: #fff;\n  background-color: #0061f2;\n  border-color: #0061f2;\n}\n\n.pagination-banner .page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #0061f2;\n  background-color: #fff;\n  border: 1px solid #d7dce3;\n}\n\n.pagination-banner .pagination-blog .page-item {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJsb2cuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc3R5bGVcXH52YXJpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBQUY7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHVIQUFBO0FBRUY7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLCtGQUFBO0VBRUEsd0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBREo7O0FBR0U7RUFDRSxvQ0FBQTtBQURKOztBQUdFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBREo7O0FBR0U7RUFHRSxhQUFBO0VBSUEsc0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQURKOztBQUlFO0VBRUUsc0RBQUE7RUFLQSxxRUFBQTtFQUNBLCtJQUFBO0FBSko7O0FBT0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFMSjs7QUFNSTtFQUdFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFKTjs7QUFNTTtFQUNFLGtCQUFBO0VBQ0EsY0N2RVM7QURtRWpCOztBQU1NO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQUpSOztBQU1NO0VBQ0UsYUFBQTtBQUpSOztBQUtRO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFIVjs7QUFLUTtFQUNFLGNBQUE7QUFIVjs7QUFXRTtFQUNFLGNBQUE7QUFSSjs7QUFVRTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFSSjs7QUFXSTtFQUNFLGNDMUdVO0VEMkdWLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBVE47O0FBV0k7RUFDRSxxQkFBQTtBQVROOztBQVlFO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBRUEsc0RBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBVko7O0FBYU07RUFDRSxzQkFBQTtFQUNBLGNDcklTO0FEMEhqQjs7QUFlSTtFQUNFLFlBQUE7QUFiTjs7QUFjTTtFQUNFLGFBQUE7RUFDQSxjQzVJTTtBRGdJZDs7QUFhUTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBWFY7O0FBY007RUFDRSxjQUFBO0FBWlI7O0FBY007RUFDRSxhQUFBO0FBWlI7O0FBYVE7RUFDRSx5QkFBQTtBQVhWOztBQWdCRTtFQUVFLHNEQUFBO0VBS0Esd0VBQUE7RUFDQSxxRUFBQTtBQWhCSjs7QUFtQkU7RUFFRSxrQ0FBQTtFQUVBLGtEQUFBO0FBakJKOztBQXFCRTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQWxCSjs7QUFvQkU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFsQko7O0FBb0JFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFsQko7O0FBb0JFO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQWxCSiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9zdHlsZS9+dmFyaWFibGUuc2Nzc1wiO1xyXG4ucGFnZS1oZWFkZXItZGFyayB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMmQ0MTtcclxufVxyXG4ucGFnZS1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLXRvcDogMjByZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuLmJnLWltZy1jb3ZlciB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC44KSwgcmdiYSgwLCAwLCAwLCAwLjcpKSxcclxuICAgIHVybChcIi4uLy4uL2Fzc2V0cy9zdHlsZS9waG90by0xNTY4OTkyNjg4MDY1LTUzNmFhZDhhMTJmNi5qcGVnXCIpO1xyXG59XHJcbmhlYWRlciB7XHJcbiAgLnN2Zy1ib3JkZXItcm91bmRlZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uYmxvZy1oZWFkZXIge1xyXG4gIHBhZGRpbmctdG9wOiA0ZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAucG9zdC1wcmV2aWV3LWZlYXR1cmVkLWltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuOCksIHJnYmEoMCwgMCwgMCwgMC43KSksXHJcbiAgICAgIHVybChcIi4uLy4uL2Fzc2V0cy9zdHlsZS9jb21wdXRlci5qcGVnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIC5iZy1saWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmM2Y5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jYXJkLmxpZnQge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIC5jYXJkIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlcjogMCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XHJcbiAgfVxyXG5cclxuICAubGlmdCB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMC4xNXJlbSAxLjc1cmVtIDAgcmdiYSgzMSwgNDUsIDY1LCAwLjE1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMC4xNXJlbSAxLjc1cmVtIDAgcmdiYSgzMSwgNDUsIDY1LCAwLjE1KTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4xNXMgZWFzZS1pbi1vdXQsXHJcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0LFxyXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAvKiB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQsLXdlYmtpdC10cmFuc2Zvcm0gLjE1cyBlYXNlLWluLW91dCwtd2Via2l0LWJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDsgKi9cclxuICB9XHJcblxyXG4gIC5uby1ndXR0ZXJzIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgICAgLW1zLWZsZXg6IDEgMSBhdXRvO1xyXG4gICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgbWluLWhlaWdodDogMXB4O1xyXG4gICAgICBwYWRkaW5nOiAxLjM1cmVtO1xyXG5cclxuICAgICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeUNvbG9yO1xyXG4gICAgICB9XHJcbiAgICAgIC5jYXJkLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIH1cclxuICAgICAgLnBvc3QtcHJldmlldy1tZXRhIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICBoZWlnaHQ6IDcycHg7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBvc3QtcHJldmlldy1tZXRhLWRldGFpbHMge1xyXG4gICAgICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYmxvZy1iYW5uZXIge1xyXG4gIC5yZWNlbnQtYmxvZyB7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICB9XHJcbiAgLmNhcmQtaW1nLXRvcCB7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnlEYXJrO1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgd29yZC1zcGFjaW5nOiAwLjJlbTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICBwOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2FyZCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAtMC44NXJlbSA0LjhyZW0gMCByZ2JhKDMxLCA0NSwgNjUsIDAuMTUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44NXJlbSA0LjhyZW0gMCByZ2JhKDMxLCA0NSwgNjUsIDAuMTUpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnlDb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWZvb3RlciB7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgLnBvc3QtcHJldmlldy1tZXRhIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeUdyYXk7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAucG9zdC1wcmV2aWV3LW1ldGEtZGV0YWlscyB7XHJcbiAgICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgIH1cclxuICAgICAgLnBvc3QtdXBkYXRlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC5wb3N0LXByZXZpZXctbWV0YS1kZXRhaWxzLW5hbWUge1xyXG4gICAgICAgICAgbWFyZ2luOiAxNnB4IDFweCAxM3B4IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmxpZnQge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAuMTVyZW0gMS43NXJlbSAwIHJnYmEoMzEsIDQ1LCA2NSwgMC4xNSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuMTVyZW0gMS43NXJlbSAwIHJnYmEoMzEsIDQ1LCA2NSwgMC4xNSk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0LFxyXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dCxcclxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLyogdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xNXMgZWFzZS1pbi1vdXQsYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0OyAqL1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LFxyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAubGlmdDpob3ZlciB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4zMzMzM3JlbSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMzMzMzNyZW0pO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAuNXJlbSAycmVtIDAgcmdiYSgzMSwgNDUsIDY1LCAwLjI1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDJyZW0gMCByZ2JhKDMxLCA0NSwgNjUsIDAuMjUpO1xyXG4gIH1cclxufVxyXG4ucGFnaW5hdGlvbi1iYW5uZXIge1xyXG4gIC5wYWdpbmF0aW9uLWJsb2cgLnBhZ2UtaXRlbSAucGFnZS1saW5rIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG4gIC5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbmsge1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjFmMjtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwNjFmMjtcclxuICB9XHJcbiAgLnBhZ2UtbGluayB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcclxuICAgIGNvbG9yOiAjMDA2MWYyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkN2RjZTM7XHJcbiAgfVxyXG4gIC5wYWdpbmF0aW9uLWJsb2cgLnBhZ2UtaXRlbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcclxuICB9XHJcbn1cclxuIiwiXHJcblxyXG4kcHJpbWFyeUNvbG9yOiAjN2Y3ZjdmO1xyXG4kcHJpbWFyeVdoaXRlOiAjZmZmO1xyXG4kcHJpbWFyeUJsYWNrOiAjMDAwO1xyXG4kcHJpbWFyeUJsdWU6ICMwMDYxZjI7XHJcbiRwcmltYXJ5R3JlZW46ICMwMWJhOTQ7XHJcbiRwcmltYXJ5VGVhbDogIzA1YWI5ZjtcclxuJHByaW1hcnlEYXJrOiMxZjJkNDE7XHJcbiRzZWNvbmRhcnlXaGl0ZTogI2E3YWJiMztcclxuJHNlY29uZGFyeURhcms6ICNhMGE3YjA7XHJcbiRzZWNvbmRhcnlDb2xvcjogIzMwNDA2OTtcclxuJHByaW1hcnlHcmF5OiAjOGU5NWEwO1xyXG4kbGlnaHRCbHVlOiAjMDA3YmM3OyJdfQ== */";
      /***/
    },

    /***/
    "Fmb7":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function Fmb7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"detail-banner\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-9 col-sm-12\">\r\n\r\n                <div class=\"main-banner\">\r\n\r\n                    <div class=\"example-container mat-elevation-z8\">\r\n                        <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\r\n                            <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n                        </div>\r\n                        <mat-card class=\"example-card\" [routerLink]=\"['/details/', post.id]\">\r\n                            <mat-card-header>\r\n                                <!-- <div mat-card-avatar class=\"example-header-image\"></div> -->\r\n                                <mat-card-title class=\"post-title\">{{post.postTitle}}</mat-card-title>\r\n\r\n                                <mat-card-subtitle>{{post.postDesc}}</mat-card-subtitle>\r\n                            </mat-card-header>\r\n                            <img class=\"post-image\" mat-card-image src=\"{{post.postImgUrl}}\" alt=\"{{post.postTitle}}\">\r\n                            <div class=\"post-info\">\r\n                                <h5>Posted on:\r\n                                    {{post.updated | date: 'dd MMM yyyy'}},</h5>\r\n                                <ng-container>\r\n                                    <div class=\"post-info-sub d-flex\">\r\n                                        <p class=\"mr-4\">\r\n                                            <span>Author:\r\n                                            </span>\r\n                                            <strong>{{post.postAuthor}}</strong>\r\n                                        </p>\r\n                                        <p>\r\n                                            <i class=\"fa fa-eye mr-2\"></i>{{serviceCount}}</p>\r\n                                        <p>{{post.readTime}}\r\n                                            min Read</p>\r\n                                        <!-- <ng-container>\r\n                                            <p>{{catList.catName}}</p>\r\n                                        </ng-container> -->\r\n\r\n\r\n                                    </div>\r\n                                </ng-container>\r\n\r\n\r\n                            </div>\r\n                            <!-- <div class=\"content\">\r\n                                        <div class=\"text-contain text-center\" [innerHTML]=\"post.postContent\"></div>\r\n                                        </div> -->\r\n                            <mat-card-content [innerHTML]=\"post.postContent\"></mat-card-content>\r\n                            <mat-card-actions>\r\n                                <button mat-button>LIKE</button>\r\n                                <button mat-button>SHARE</button>\r\n                                <button mat-button>Comment</button>\r\n                                <button mat-button>Follow</button>\r\n                            </mat-card-actions>\r\n                        </mat-card>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"side-banner col-md-3 col-sm-12\">\r\n                <div class=\"post-share-area mb-40 item-shadow-1 \">\r\n                    <p>Social Accounts!</p>\r\n                    <ul class=\"social-default item-inline d-flex\">\r\n                        <li>\r\n                            <a href=\"https://www.facebook.com/sharer/sharer.php?u=https://www.sarkblog.com/blog\"\r\n                                class=\"social-button facebook\" id=\"\" title=\"\">\r\n                                <span class=\"fab fa-facebook\"></span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"https://twitter.com/intent/tweet?text=Default+share+text&amp;url=https://www.sarkblog.com/blog\"\r\n                                class=\"social-button twitter\" id=\"\" title=\"\">\r\n                                <span class=\"fab fa-twitter\"></span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"http://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.sarkblog.com/blog\"\r\n                                class=\"social-button linkedin\" id=\"\" title=\"\">\r\n                                <span class=\"fab fa-linkedin\"></span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a target=\"_blank\" href=\"https://wa.me/?text=https://www.sarkblog.com/blog\"\r\n                                class=\"social-button whatsapp\" id=\"\" title=\"\">\r\n                                <span class=\"fab fa-whatsapp\"></span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- Search Widget -->\r\n                <div class=\"card mb-4\">\r\n                    <h5 class=\"card-header\">Search</h5>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\r\n                            <span class=\"input-group-append\">\r\n                                <button class=\"btn btn-secondary\" type=\"button\">Go!</button>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Categories Widget -->\r\n                <div class=\"card my-4\">\r\n                    <div class=\"trending-posts\">\r\n                        <div class=\"topic-border color-cod-gray mb-30\">\r\n                            <div class=\"topic-box-lg color-cod-gray\">Categories</div>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-6\" *ngFor=\"let cat of catList\">\r\n\r\n                                    <ul class=\"list-unstyled mb-0\">\r\n                                        <li>\r\n                                            <a href=\"#\">{{cat.catName}}</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Side Widget -->\r\n                <div class=\"card my-4\">\r\n                    <ng-container *ngFor=\"let user of users.reverse(), let i = index\">\r\n                        <div *ngIf=\"i<1\" class=\"m-0 p-0 trending-posts\">\r\n                            <div class=\"topic-border color-cod-gray mb-30\">\r\n                                <div class=\"topic-box-lg color-cod-gray\">About The Author</div>\r\n                            </div>\r\n                            <div class=\"card-body \"> \r\n                                \r\n                                <div class=\"author\">\r\n                                    <h6 class=\"text-center\">{{user.fullName}}</h6>\r\n                                    <div class=\"user-img\">\r\n                                        <img class=\"user-image img-fluid\" src=\"{{user.userProfileUrl}}\" alt=\"{{user.username}}\">\r\n                                    </div>\r\n                                \r\n                                    <p>{{user.bio}}</p>\r\n\r\n                                    <div class=\"border\">\r\n                                        <div class=\"social-accounts\">\r\n                                            <h3>follow me on</h3>\r\n                                            <div class=\"social-icons\">\r\n                                                <a href=\"#\" class=\"fab fa-twitter\"></a>\r\n                                                <a href=\"#\" class=\"fab fa-facebook\"></a>\r\n                                                <a href=\"#\" class=\"fab fa-instagram\"></a>\r\n                                                <a href=\"#\" class=\"fab fa-whatsapp\"></a>\r\n                                                <a href=\"#\" class=\"fab fa-linkedin\"></a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                \r\n\r\n                            </div>\r\n                           \r\n\r\n                            <!--  -->\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n\r\n                <div class=\"card my-4\">\r\n                    <div class=\"trending-posts\">\r\n                        <div class=\"topic-border color-cod-gray mb-30\">\r\n                            <div class=\"topic-box-lg color-cod-gray\">News Letter</div>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"sidebar-box\">\r\n                                <div class=\"newsletter-area\">\r\n                                    <h2 class=\"title-medium-light size-xl pl-30 pr-30\">Subscribe to our news letter!\r\n                                    </h2>\r\n                                    <img style=\"width:120px\" alt=\"newsletter\" class=\"lazy img-fluid m-auto mb-15 loaded\"\r\n                                        loading=\"lazy\" src=\"https://bproo.com/public/img/banner/newsletter.png\"\r\n                                        data-ll-status=\"loaded\">\r\n                                    <p id=\"leftSideSubscribeBox\">By receiving free stock articles and smart tutorials to\r\n                                        advance your\r\n                                        career.</p>\r\n                                    <form action=\"\" id=\"leftSide-form\" class=\"subscription-needs-validation1\"\r\n                                        novalidate=\"\">\r\n                                        <input type=\"hidden\" name=\"_token\"\r\n                                            value=\"vgo0OwcAG1jyVzJuCttQHPDeODM4oG2GMAKNr8yM\">\r\n                                        <div class=\"input-group stylish-input-group mb-3\">\r\n                                            <input type=\"text\" name=\"name\" placeholder=\"Enter your first-name\"\r\n                                                class=\"form-control\" required=\"\">\r\n                                            <div class=\"invalid-feedback\" style=\"font-size: 1.5rem;\">\r\n                                                Please provide your name.\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"input-group stylish-input-group\">\r\n                                            <input type=\"text\" name=\"email\" placeholder=\"Enter your mail\"\r\n                                                class=\"form-control\" required=\"\">\r\n                                            <div class=\"invalid-feedback\" style=\"font-size: 1.5rem;\">\r\n                                                Please provide a valid email.\r\n                                            </div>\r\n                                            <span class=\"input-group-addon\">\r\n                                                <button type=\"button\" name=\"subscribe1\">\r\n                                                    <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\r\n                                                </button>\r\n                                            </span>\r\n                                        </div>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"my-4\">\r\n                    <div class=\"trending-posts\">\r\n                        <div class=\"topic-border color-cod-gray mb-30\">\r\n                            <div class=\"topic-box-lg color-cod-gray\">Trending Posts</div>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n\r\n                            <tr *ngIf=\"postList.length <=0\" class=\"no-data text-center\">There is no Post added yet!>\r\n                            </tr>\r\n\r\n                            <div>\r\n                                <ng-container *ngFor=\"let post of postList.reverse() , let i = index;\">\r\n                                    <div *ngIf=\"i<3\">\r\n                                        <a href=\"details/{{post._id}}\">\r\n                                            <div class=\"d-flex trending-posts\">\r\n                                                <div class=\"image-post\">\r\n                                                    <img src=\"{{post.postImgUrl}}\" alt=\"{{post.postTitle}}\">\r\n                                                    <p>Posted on:\r\n                                                        {{post.updated | date: 'dd MMM yyyy'}}</p>\r\n                                                </div>\r\n                                                <div class=\"text-desc\">\r\n                                                    <p>\r\n                                                        <i class=\"fa fa-calendar mr-2\"></i>\r\n                                                        {{post.readTime}}\r\n                                                        Min Read</p>\r\n                                                    <p>{{post.postTitle}}</p>\r\n                                                </div>\r\n                                            </div>\r\n                                        </a>\r\n                                        <hr>\r\n                                    </div>\r\n                                </ng-container>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<!-- Comments Form -->\r\n<section class=\"comment\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"card col-md-8 my-4\">\r\n                <h5 class=\"card-header\">Leave a Comment:</h5>\r\n                <div class=\"card-body\">\r\n                    <!-- <form>\r\n                                <div class=\"form-group\">\r\n                                  <textarea class=\"form-control\" class=\"form-control\" rows=\"3\"></textarea>\r\n                                </div>\r\n                                <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n                              </form> -->\r\n                    <disqus [identifier]=\"pageId\"></disqus>\r\n                    <!-- <disqus [identifier]=\"pageId\" [url]=\"url\" [category]=\"catId\" [language]=\"language\" (newComment)=\"onNewComment($event)\" (paginate)=\"onPaginate($event)\"></disqus> -->\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <noscript>Please enable JavaScript to view the <a href=\"https://disqus.com/?ref_noscript\">comments powered by Disqus.</a></noscript> -->\r\n\r\n</section>";
      /***/
    },

    /***/
    "GB7h":
    /*!******************************************!*\
      !*** ./src/app/post/post.component.scss ***!
      \******************************************/

    /*! exports provided: default */

    /***/
    function GB7h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "Gd4t":
    /*!********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function Gd4t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<header data-v-22791a1b=\"\" data-v-0cc2979f=\"\" class=\"page-header bg-img-cover overlay overlay-60 page-header-dark\"\r\n  data-v-7930edba=\"\">\r\n  <div class=\"container\">\r\n    <div data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"page-header-content\">\r\n      <div data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"container text-center\">\r\n        <div data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"row justify-content-center\">\r\n          <div data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"page-first col-lg-8\">\r\n            <h1 data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"page-header-title mb-3\">Publications</h1>\r\n            <p data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"page-header-text mb-0\">Browse articles, keep up to date, and\r\n              learn more on our blog!</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <span data-v-c5f3fcf8=\"\" data-v-22791a1b=\"\">\r\n    <div data-v-c5f3fcf8=\"\" class=\"svg-border-rounded text-light\">\r\n      <svg data-v-c5f3fcf8=\"\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 144.54 17.34\" preserveAspectRatio=\"none\"\r\n        fill=\"currentColor\">\r\n        <path data-v-c5f3fcf8=\"\" d=\"M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0\"></path>\r\n      </svg>\r\n    </div>\r\n  </span>\r\n</header>\r\n\r\n<!-- <button type=\"button\" (click)=\"toastSuccess()\">show message</button> -->\r\n\r\n<section data-v-0e51b078=\"\" data-v-6dd90c3b=\"\" class=\"py-10 bg-white\" data-v-7930edba=\"\">\r\n  <h3 class=\"feature-banner text-center m-4\">Our Features</h3>\r\n  <div data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" class=\"container\">\r\n    <div data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" class=\"item-banner row text-center\">\r\n      <div data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" class=\"col-lg-4 mb-5 mb-lg-0 feature-text\">\r\n        <div data-v-6dd90c3b=\"\" data-v-0e51b078=\"\"\r\n          class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\">\r\n          <svg data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24px\" height=\"24px\"\r\n            viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\r\n            stroke-linejoin=\"round\" class=\"feather feather-droplet\">\r\n            <path data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" d=\"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z\">\r\n\r\n            </path>\r\n          </svg>\r\n        </div>\r\n        <h2 data-v-6dd90c3b=\"\" data-v-0e51b078=\"\">Design</h2>\r\n        <p data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" class=\"mb-0\">We start by creating a set of brand guidelines and\r\n          standards</p>\r\n      </div>\r\n      <div data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" class=\"col-lg-4 mb-5 mb-lg-0  feature-text\">\r\n        <div data-v-6dd90c3b=\"\" data-v-0e51b078=\"\"\r\n          class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\">\r\n          <svg data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24px\" height=\"24px\"\r\n            viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\r\n            stroke-linejoin=\"round\" class=\"feather feather-code\">\r\n            <polyline data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" points=\"16 18 22 12 16 6\"></polyline>\r\n            <polyline data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" points=\"8 6 2 12 8 18\"></polyline>\r\n          </svg></div>\r\n        <h2 data-v-6dd90c3b=\"\" data-v-0e51b078=\"\">Develop</h2>\r\n        <p data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" class=\"mb-0\">\r\n          Our award winning development team creates personalized digital experiences\r\n        </p>\r\n      </div>\r\n      <div data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" class=\"col-lg-4 feature-text\">\r\n        <div data-v-6dd90c3b=\"\" data-v-0e51b078=\"\"\r\n          class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\">\r\n          <svg data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24px\" height=\"24px\"\r\n            viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\r\n            stroke-linejoin=\"round\" class=\"feather feather-truck\">\r\n            <rect data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" x=\"1\" y=\"3\" width=\"15\" height=\"13\"> </rect>\r\n            <polygon data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" points=\"16 8 20 8 23 11 23 16 16 16 16 8\"></polygon>\r\n            <circle data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" cx=\"5.5\" cy=\"18.5\" r=\"2.5\"> </circle>\r\n            <circle data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" cx=\"18.5\" cy=\"18.5\" r=\"2.5\"></circle>\r\n          </svg>\r\n        </div>\r\n        <h2 data-v-6dd90c3b=\"\" data-v-0e51b078=\"\">Deliver</h2>\r\n        <p data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" class=\"mb-0\">\r\n          Our products are created on time, and to your exact specifications\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <span data-v-c5f3fcf8=\"\" data-v-0e51b078=\"\">\r\n      <div data-v-c5f3fcf8=\"\" class=\"svg-border-rounded text-light\">\r\n        <svg data-v-c5f3fcf8=\"\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 144.54 17.34\" preserveAspectRatio=\"none\"\r\n          fill=\"currentColor\">\r\n          <path data-v-c5f3fcf8=\"\" d=\"M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0\"></path>\r\n        </svg>\r\n      </div>\r\n    </span>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"blog-banner\">\r\n  <h2 class=\"recent-blog text-center m-5\">Recent Blogs</h2>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\r\n        <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n      </div>\r\n      <div *ngFor=\"let post of posts | paginate: {id : 'listing_pagination',\r\n      itemsPerPage:3,\r\n      currentPage: page,\r\n      totalItems: totalRecords}\" data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"col-md-6 col-xl-4 mb-5\">\r\n        <a data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card post-preview lift h-100\">\r\n          <img data-v-0cc2979f=\"\" data-v-0e51b078=\"\" src=\"{{post.postImgUrl}}\" alt=\"...\" class=\"card-img-top\">\r\n          <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-body\">\r\n            <a [routerLink]=\"['/details/', post._id]\">\r\n              <h5 data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-title\">{{post.postTitle}}</h5>\r\n            </a>\r\n            <p data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-text\">{{post.postDesc}}</p>\r\n          </div>\r\n          <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-footer\">\r\n            <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta\">\r\n              <img data-v-0cc2979f=\"\" data-v-0e51b078=\"\" src=\"https://source.unsplash.com/e12wQLAjQi0/100x100\"\r\n                class=\"post-preview-meta-img\">\r\n              <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details\">\r\n                <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details-name\">{{post.postAuthor}}</div>\r\n                <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details-date\">{{post.readTime}} min read\r\n                </div>\r\n              </div>\r\n              <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-update\">\r\n                <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details-name\">{{post.updated | date: 'dd MMM yyyy'}}</div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- <div class=\"example-container mat-elevation-z8\">\r\n  <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\r\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n  </div>\r\n  <mat-grid-list cols=\"3\">\r\n    <mat-grid-tile *ngFor=\"let post of posts\">\r\n      <mat-card class=\"example-card\" [routerLink]=\"['/details/', post._id]\">\r\n        <mat-card-header>\r\n          <div mat-card-avatar class=\"example-header-image\"></div>\r\n          <mat-card-title>{{post.postTitle}}</mat-card-title>\r\n          <mat-card-subtitle>{{post.updated}}</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <img mat-card-image src=\"{{post.postImgUrl}}\" alt=\"{{post.postTitle}}\">\r\n        <mat-card-content>\r\n          {{post.postDesc}}\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n</div> -->";
      /***/
    },

    /***/
    "H8dG":
    /*!*************************************************!*\
      !*** ./src/app/auth/login/login.component.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function H8dG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":root {\n  --input-padding-x: 1.5rem;\n  --input-padding-y: .75rem;\n}\n\n.example-container {\n  background-color: #007bc7;\n  margin-top: 10em;\n  height: 70vh;\n}\n\n.example-container h2 {\n  color: #fff;\n  font-size: 2.5em;\n  font-weight: 600;\n}\n\n.example-container .example-card {\n  background-color: #fff;\n  border-radius: 22px;\n  padding: 2em;\n}\n\n.example-container .example-card .button-row button {\n  width: 100%;\n  padding: 5px;\n  border-radius: 27px;\n  font-size: 1.3em;\n  font-weight: 700;\n}\n\n.example-container .example-card .button-row .button-register {\n  background-color: #01ba94;\n}\n\n.example-container .card-signin {\n  border: 0;\n  border-radius: 1rem;\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n\n.example-container .card-signin .card-title {\n  margin-bottom: 2rem;\n  font-weight: 300;\n  font-size: 1.5rem;\n}\n\n.example-container .card-signin .card-img-left {\n  width: 45%;\n  /* Link to your background image using in the property below! */\n  background: scroll center url(\"https://source.unsplash.com/WEQbe2jBg40/414x512\");\n  background-size: cover;\n}\n\n.example-container .card-signin h2 {\n  width: 0%;\n}\n\n.example-container .card-signin .card-body {\n  padding: 2rem;\n}\n\n.example-container .card-signin .card-body .form-signin {\n  width: 100%;\n}\n\n.example-container .card-signin .card-body .form-signin .btn {\n  font-size: 80%;\n  border-radius: 5rem;\n  letter-spacing: 0.1rem;\n  font-weight: bold;\n  padding: 1rem;\n  transition: all 0.2s;\n}\n\n.example-container .card-signin .card-body .form-signin .form-label-group {\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.example-container .card-signin .card-body .form-signin .form-label-group input {\n  height: auto;\n  border-radius: 2rem;\n  width: 100%;\n  height: 50px;\n  text-align: center;\n  border: none;\n}\n\n.example-container .card-signin .card-body .form-signin .form-label-group > input,\n.example-container .card-signin .card-body .form-signin .form-label-group > label {\n  padding: var(--input-padding-y) var(--input-padding-x);\n}\n\n.example-container .card-signin .card-body .form-signin .form-label-group > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  /* Override default `<label>` margin */\n  line-height: 1.5;\n  color: #495057;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  transition: all 0.1s ease-in-out;\n}\n\n.example-container .card-signin .card-body .form-signin .form-label-group input::-moz-placeholder {\n  color: transparent;\n}\n\n.example-container .card-signin .card-body .form-signin .form-label-group input::placeholder {\n  color: transparent;\n}\n\n.example-container .card-signin .card-body .form-signin .form-label-group input:not(:-moz-placeholder-shown) {\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\n  padding-bottom: calc(var(--input-padding-y) / 3);\n}\n\n.example-container .card-signin .card-body .form-signin .form-label-group input:not(:placeholder-shown) {\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\n  padding-bottom: calc(var(--input-padding-y) / 3);\n}\n\n.example-container .card-signin .card-body .form-signin .form-label-group input:not(:-moz-placeholder-shown) ~ label {\n  padding-top: calc(var(--input-padding-y) / 3);\n  padding-bottom: calc(var(--input-padding-y) / 3);\n  font-size: 12px;\n  color: #777;\n}\n\n.example-container .card-signin .card-body .form-signin .form-label-group input:not(:placeholder-shown) ~ label {\n  padding-top: calc(var(--input-padding-y) / 3);\n  padding-bottom: calc(var(--input-padding-y) / 3);\n  font-size: 12px;\n  color: #777;\n}\n\n.example-container .card-signin .card-body .form-signin .btn-google {\n  color: white;\n  background-color: #ea4335;\n}\n\n.example-container .card-signin .card-body .form-signin .btn-facebook {\n  color: white;\n  background-color: #3b5998;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlXFx+dmFyaWFibGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUFGRjs7QUFLQTtFQUNJLHlCQ0lRO0VESFIsZ0JBQUE7RUFDQSxZQUFBO0FBRko7O0FBR0k7RUFDSSxXQ1ZPO0VEV1AsZ0JBQUE7RUFDQSxnQkFBQTtBQURSOztBQUdJO0VBQ0ksc0JDZk87RURnQlAsbUJBQUE7RUFDQSxZQUFBO0FBRFI7O0FBSVE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUZSOztBQUlRO0VBQ0kseUJDekJHO0FEdUJmOztBQU9LO0VBQ0MsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7RUFDQSxnQkFBQTtBQUxOOztBQU1NO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBSlI7O0FBTU07RUFDRSxVQUFBO0VBQ0EsK0RBQUE7RUFDQSxnRkFBQTtFQUNBLHNCQUFBO0FBSlI7O0FBTU07RUFDRSxTQUFBO0FBSlI7O0FBTU07RUFDRSxhQUFBO0FBSlI7O0FBS1E7RUFDRSxXQUFBO0FBSFY7O0FBSVU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBRlo7O0FBSVU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBRlo7O0FBR1k7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQURkOztBQUlVOztFQUVFLHNEQUFBO0FBRlo7O0FBS1U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FBSFo7O0FBS1U7RUFDRSxrQkFBQTtBQUhaOztBQUVVO0VBQ0Usa0JBQUE7QUFIWjs7QUFNRTtFQUNFLDRFQUFBO0VBQ0EsZ0RBQUE7QUFKSjs7QUFFRTtFQUNFLDRFQUFBO0VBQ0EsZ0RBQUE7QUFKSjs7QUFPRTtFQUNFLDZDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUxKOztBQUNFO0VBQ0UsNkNBQUE7RUFDQSxnREFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBTEo7O0FBUUU7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUFOSjs7QUFTRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQVBKIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3N0eWxlL352YXJpYWJsZS5zY3NzJztcclxuXHJcblxyXG46cm9vdCB7XHJcbiAgLS1pbnB1dC1wYWRkaW5nLXg6IDEuNXJlbTtcclxuICAtLWlucHV0LXBhZGRpbmcteTogLjc1cmVtO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Qmx1ZTtcclxuICAgIG1hcmdpbi10b3A6IDEwZW07XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBoMiB7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5V2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gICAgLmV4YW1wbGUtY2FyZHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeVdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICAgICAgcGFkZGluZzogMmVtO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC40KSwgcmdiYSgwLDAsMCwwLjIpKSwgdXJsKCcuLi8uLi8uLi9hc3NldHMvc3R5bGUvcGhvdG8tMTU2ODk5MjY4ODA2NS01MzZhYWQ4YTEyZjYuanBlZycpO1xyXG4gICAgLmJ1dHRvbi1yb3cge1xyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjdweDtcclxuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b24tcmVnaXN0ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeUdyZWVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAgLmNhcmQtc2lnbmluIHtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICB9XHJcbiAgICAgIC5jYXJkLWltZy1sZWZ0IHtcclxuICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgIC8qIExpbmsgdG8geW91ciBiYWNrZ3JvdW5kIGltYWdlIHVzaW5nIGluIHRoZSBwcm9wZXJ0eSBiZWxvdyEgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kOiBzY3JvbGwgY2VudGVyIHVybCgnaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL1dFUWJlMmpCZzQwLzQxNHg1MTInKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICB9XHJcbiAgICAgIGgyIHtcclxuICAgICAgICB3aWR0aDogMCU7XHJcbiAgICAgIH1cclxuICAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICAuZm9ybS1zaWduaW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA4MCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tbGFiZWwtZ3JvdXAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tbGFiZWwtZ3JvdXA+aW5wdXQsXHJcbiAgICAgICAgICAuZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWlucHV0LXBhZGRpbmcteSkgdmFyKC0taW5wdXQtcGFkZGluZy14KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLmZvcm0tbGFiZWwtZ3JvdXA+bGFiZWwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XHJcbiAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpICsgdmFyKC0taW5wdXQtcGFkZGluZy15KSAqICgyIC8gMykpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKX5sYWJlbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1nb29nbGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhNDMzNTtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1mYWNlYm9vayB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xyXG4gIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiBcclxuIFxyXG4gICIsIlxyXG5cclxuJHByaW1hcnlDb2xvcjogIzdmN2Y3ZjtcclxuJHByaW1hcnlXaGl0ZTogI2ZmZjtcclxuJHByaW1hcnlCbGFjazogIzAwMDtcclxuJHByaW1hcnlCbHVlOiAjMDA2MWYyO1xyXG4kcHJpbWFyeUdyZWVuOiAjMDFiYTk0O1xyXG4kcHJpbWFyeVRlYWw6ICMwNWFiOWY7XHJcbiRwcmltYXJ5RGFyazojMWYyZDQxO1xyXG4kc2Vjb25kYXJ5V2hpdGU6ICNhN2FiYjM7XHJcbiRzZWNvbmRhcnlEYXJrOiAjYTBhN2IwO1xyXG4kc2Vjb25kYXJ5Q29sb3I6ICMzMDQwNjk7XHJcbiRwcmltYXJ5R3JheTogIzhlOTVhMDtcclxuJGxpZ2h0Qmx1ZTogIzAwN2JjNzsiXX0= */";
      /***/
    },

    /***/
    "HhuZ":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function HhuZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div data-v-c5f3fcf8=\"\" class=\"svg-border-rounded text-dark\">\r\n    <svg data-v-c5f3fcf8=\"\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 144.54 17.34\" preserveAspectRatio=\"none\"\r\n        fill=\"currentColor\">\r\n        <path data-v-c5f3fcf8=\"\" d=\"M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0\"></path>\r\n    </svg>\r\n</div>\r\n<div class=\"clip-path\">\r\n    <footer class=\"py-1 footer\">\r\n        <div class=\"container footer-top\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"footer-banner\">\r\n                    <div class=\"row\">\r\n                    <div class=\"footer-logo col-md-3 col-sm-6\">\r\n                        <h3><a href=\"\">SarkBlog</a></h3>\r\n                        <p>We Moves With Technology</p>\r\n                        <div class=\"d-flex footer-social\">\r\n                            <i class=\"fab fa-instagram\"></i>\r\n                            <i class=\"fab fa-facebook\"></i>\r\n                            <i class=\"fab fa-github\"></i>\r\n                            <i class=\"fab fa-twitter\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"product-area col-md-3 col-sm-6\">\r\n                        <ul>\r\n                            <h3>Products</h3>\r\n                            <li>Landing</li>\r\n                            <li>Transportation</li>\r\n                            <li>Real estate</li>\r\n                            <li>Construction</li>\r\n                        </ul>\r\n                    </div>\r\n               \r\n               \r\n                    <div class=\"technical-area col-md-3 col-sm-6\">\r\n                        <ul>\r\n                            <h3>Technical</h3>\r\n                            <li>Landing</li>\r\n                            <li>Transportation</li>\r\n                            <li>Real estate</li>\r\n                            <li>Construction</li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"legal-area col-md-3 col-sm-6\">\r\n                        <ul>\r\n                            <h3>Legal</h3>\r\n                            <li>Landing</li>\r\n                            <li>Transportation</li>\r\n                            <li>Real estate</li>\r\n                            <li>Construction</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n            <div class=\"footer-bottom\">\r\n                <p class=\"m-0 text-center text-white\">Copyright &copy; SarKBlog 2020</p>\r\n                <p class=\"m-0 text-center text-white\">Privacy Policy · Terms & Conditions</p>\r\n            </div>\r\n        \r\n    </footer>\r\n</div>";
      /***/
    },

    /***/
    "LNU8":
    /*!******************************************************!*\
      !*** ./src/app/bycategory/bycategory.component.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function LNU8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".example-container {\n  margin-top: 10em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJ5Y2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKIiwiZmlsZSI6ImJ5Y2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTBlbTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "LgBW":
    /*!****************************************!*\
      !*** ./src/app/blog/blog.component.ts ***!
      \****************************************/

    /*! exports provided: BlogComponent */

    /***/
    function LgBW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
        return BlogComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_blog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./blog.component.html */
      "iJX/");
      /* harmony import */


      var _blog_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./blog.component.scss */
      "F7z0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_services/auth.service */
      "7Vn+");
      /* harmony import */


      var _services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_services/category.service */
      "AfT/");
      /* harmony import */


      var _services_home_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../_services/home.service */
      "x+LS");

      var BlogComponent = /*#__PURE__*/function () {
        function BlogComponent(route, authApi, catApi, api) {
          _classCallCheck(this, BlogComponent);

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

        _createClass(BlogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this21 = this;

            this.api.getPosts().subscribe(function (res) {
              _this21.posts = res; // this.data = res.results;
              // console.log(this.data = res.results);

              console.log(_this21.posts);
              _this21.isLoadingResults = false;
            }, function (err) {
              console.log(err);
              _this21.isLoadingResults = false;
            });
            this.filterPost();
            this.getCategories();
            this.getusers();
            this.getuser(this.route.snapshot.params.id);
          }
          /**
          * @filter blog
          */

        }, {
          key: "filterPost",
          value: function filterPost() {
            var _this22 = this;

            this.api.getPosts().subscribe(function (res) {
              _this22.posts = res.map(function (o) {
                o.search_label = " ".concat(o.category, " ").concat(o.id, " ").concat(o.postTitle, " ").concat(o.postAuthor, " \n        ").concat(o.postDesc, " ").concat(o.postContent, " ").concat(o.postReference, " ").concat(o.postImgUrl, "\n         ").concat(o.created, " ").concat(o.updated, "\n      ");
                return o;
              });
              console.log(_this22.posts);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getCategories",
          value: function getCategories() {
            var _this23 = this;

            this.catApi.getCategories().subscribe(function (res) {
              _this23.categories = res;
              console.log(_this23.categories);
              _this23.isLoadingResults = false;
            }, function (err) {
              console.log(err);
              _this23.isLoadingResults = false;
            });
          }
        }, {
          key: "getusers",
          value: function getusers() {
            var _this24 = this;

            this.authApi.getUsers().subscribe(function (res) {
              _this24.users = res;
              console.log(_this24.users);
              _this24.isLoadingResults = false;
            }, function (err) {
              console.log(err);
              _this24.isLoadingResults = false;
            });
          }
        }, {
          key: "getuser",
          value: function getuser(id) {
            var _this25 = this;

            this.authApi.getUser(id).subscribe(function (res) {
              _this25.singleUser = res;
              console.log(_this25.singleUser);
              _this25.isLoadingResults = false;
            }, function (err) {
              console.log(err);
              _this25.isLoadingResults = false;
            });
          }
        }]);

        return BlogComponent;
      }();

      BlogComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]
        }, {
          type: _services_home_service__WEBPACK_IMPORTED_MODULE_7__["HomeService"]
        }];
      };

      BlogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-blog',
        template: _raw_loader_blog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_blog_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BlogComponent);
      /***/
    },

    /***/
    "LoHQ":
    /*!******************************************!*\
      !*** ./src/app/_authGuard/auth.guard.ts ***!
      \******************************************/

    /*! exports provided: AuthGuard */

    /***/
    function LoHQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_services/auth.service */
      "7Vn+");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authService, router) {
          _classCallCheck(this, AuthGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var url = state.url;
            return this.checkLogin(url);
          }
        }, {
          key: "checkLogin",
          value: function checkLogin(url) {
            var status = localStorage.getItem('sarkblog');

            if (status === 'true') {
              return true;
            } // Store the attempted URL for redirecting


            this.authService.redirectUrl = url; // Navigate to the login page with extras

            this.router.navigate(['/login']);
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthGuard);
      /***/
    },

    /***/
    "MY8x":
    /*!***************************************************************************!*\
      !*** ./src/app/category/category-details/category-details.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function MY8x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "Np+I":
    /*!************************************************!*\
      !*** ./src/app/contact/contact.component.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function NpI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".contact {\n  margin-top: 12em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMmVtO1xyXG59Il19 */";
      /***/
    },

    /***/
    "OzAx":
    /*!**************************************************!*\
      !*** ./src/app/category/category.component.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function OzAx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "RkmP":
    /*!********************************************!*\
      !*** ./src/app/admin/admin.component.scss ***!
      \********************************************/

    /*! exports provided: default */

    /***/
    function RkmP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "SIlP":
    /*!****************************************************!*\
      !*** ./src/app/_interceptors/token.interceptor.ts ***!
      \****************************************************/

    /*! exports provided: TokenInterceptor */

    /***/
    function SIlP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
        return TokenInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_services/toast.service */
      "Eln7");

      var TokenInterceptor = /*#__PURE__*/function () {
        function TokenInterceptor(route, toast) {
          _classCallCheck(this, TokenInterceptor);

          this.route = route;
          this.toast = toast;
        }

        _createClass(TokenInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this26 = this;

            if (request.url === 'https://sarkblog.herokuapp.com/api/auth/login' || request.url === 'https://sarkblog.herokuapp.com/api/auth/forgot-password' || request.url === 'https://sarkblog.herokuapp.com/api/auth/check-token' || request.url === "https://sarkblog.herokuapp.com/api/auth/reset-password") {
              console.log(' ********  Adding a Basic Headeer v ***********');
              request = request.clone({
                headers: request.headers.append('Authorization', 'Basic ' + "".concat(btoa('ActivaApp:ActivaUser')))
              });
            } else {
              request = request.clone({
                headers: request.headers.append('Authorization', 'Bearer ' + "".concat(localStorage.getItem('token')))
              });
            }

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
              // Implement a switch to pass around our error status. This is implemented here so as to use it globally
              switch (error.status) {
                case 401:
                  localStorage.clear();

                  _this26.route.navigate(['/dashboard']);

                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
                  break;

                case 403:
                  _this26.toast.showInfoToast('Acces Denied :You dont have permission to perform this operation');

                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
                  break;

                case 404:
                  _this26.toast.showInfoToast('User does not exist!');

                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
                  break;

                case 400:
                  var message = '';

                  if (error.error.data) {
                    var key = Object.values(error.error.data);
                    key.forEach(function (element) {
                      message = message + element + '\n';
                    });

                    _this26.toast.showErrorToast(message);
                  } else {
                    _this26.toast.showErrorToast(error.error.message);
                  }

                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
                  break;

                case 500:
                  _this26.toast.showInfoToast('Please try again.');

                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
                  break;

                case 503:
                  _this26.toast.showInfoToast('Please try again.');

                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
                  break;

                default:
                  if (error.error.message) {
                    _this26.toast.showInfoToast(error.error.message);
                  } else {
                    _this26.toast.showInfoToast("Connection lost, try again in a moment!.");
                  }

                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
                  break;
              }
            }));
          }
        }]);

        return TokenInterceptor;
      }();

      TokenInterceptor.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }];
      };

      TokenInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TokenInterceptor);
      /***/
    },

    /***/
    "SL0s":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function SL0s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"example-container mat-elevation-z8\">\r\n  <mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n      <mat-card-subtitle>Populate the Category and Post data by click on the Menu.</mat-card-subtitle>\r\n    </mat-card-header>\r\n  \r\n  </mat-card>\r\n</div>\r\n";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./_services/auth.service */
      "7Vn+");
      /* harmony import */


      var _services_home_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./_services/home.service */
      "x+LS");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(api, authService, router) {
          _classCallCheck(this, AppComponent);

          this.api = api;
          this.authService = authService;
          this.router = router;
          this.title = 'client';
          this.categories = [];
          this.loginStatus = false;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this27 = this;

            this.authService.isLoggedIn.subscribe(function (status) {
              console.log(status);

              if (status === true) {
                _this27.loginStatus = true;
              } else {
                _this27.loginStatus = false;
              }
            });
            this.api.getCategories().subscribe(function (res) {
              _this27.categories = res;
              console.log(_this27.categories);
            }, function (err) {
              console.log(err);
            });
          } // logout() {
          //   this.authService.logout()
          //     .subscribe((res: any) => {
          //       this.router.navigate(['/']);
          //     }, err => {
          //       console.log(err);
          //     });
          // }

        }, {
          key: "getActiveAdmin",
          value: function getActiveAdmin() {
            if (Boolean(localStorage.getItem("username")) && Boolean(localStorage.getItem("imageurl")) && Boolean(localStorage.getItem("bio"))) {
              this.activeAdmin.username = localStorage.getItem("username");
              this.activeAdmin.userProfileUrl = localStorage.getItem("imageurl");
              this.activeAdmin.bio = localStorage.getItem("bio");
            } else {
              this.activeAdmin = Object.assign({}, JSON.parse(localStorage.getItem("sark_blog_admin_details")));
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authService.logout();
            this.router.navigate(["/"]);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _services_home_service__WEBPACK_IMPORTED_MODULE_6__["HomeService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "TRGY":
    /*!******************************************!*\
      !*** ./src/app/admin/admin.component.ts ***!
      \******************************************/

    /*! exports provided: AdminComponent */

    /***/
    function TRGY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
        return AdminComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin.component.html */
      "SL0s");
      /* harmony import */


      var _admin_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin.component.scss */
      "RkmP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AdminComponent = /*#__PURE__*/function () {
        function AdminComponent() {
          _classCallCheck(this, AdminComponent);
        }

        _createClass(AdminComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminComponent;
      }();

      AdminComponent.ctorParameters = function () {
        return [];
      };

      AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin',
        template: _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AdminComponent);
      /***/
    },

    /***/
    "TWh7":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bycategory/bycategory.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function TWh7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"example-container mat-elevation-z8\">\r\n  <div class=\"example-loading-shade\"\r\n        *ngIf=\"isLoadingResults\">\r\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n  </div>\r\n  <mat-grid-list cols=\"3\">\r\n    <mat-grid-tile *ngFor=\"let post of posts\">\r\n      <mat-card class=\"example-card\" [routerLink]=\"['/details/', post._id]\">\r\n        <mat-card-header>\r\n          <div mat-card-avatar class=\"example-header-image\"></div>\r\n          <mat-card-title>{{post.postTitle}}</mat-card-title>\r\n          <mat-card-subtitle>{{post.updated}}</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <img mat-card-image src=\"{{post.postImgUrl}}\" alt=\"Photo of a Shiba Inu\">\r\n        <mat-card-content>\r\n          {{post.postDesc}}\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n</div>\r\n";
      /***/
    },

    /***/
    "VwQp":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-edit/category-edit.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VwQp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"example-container mat-elevation-z8\">\r\n  <div class=\"example-loading-shade\"\r\n        *ngIf=\"isLoadingResults\">\r\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n  </div>\r\n  <div class=\"button-row\">\r\n    <a mat-flat-button color=\"primary\" (click)=\"categoryDetails()\"><mat-icon>list</mat-icon></a>\r\n  </div>\r\n  <mat-card class=\"example-card\">\r\n    <form [formGroup]=\"categoryForm\" (ngSubmit)=\"onFormSubmit()\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Category Name\" formControlName=\"catName\"\r\n                [errorStateMatcher]=\"matcher\">\r\n        <mat-error>\r\n          <span *ngIf=\"!categoryForm.get('catName').valid && categoryForm.get('catName').touched\">Please enter Category Name</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <textarea matInput placeholder=\"Category Desc\" formControlName=\"catDesc\"\r\n                [errorStateMatcher]=\"matcher\"></textarea>\r\n        <mat-error>\r\n          <span *ngIf=\"!categoryForm.get('catDesc').valid && categoryForm.get('catDesc').touched\">Please enter Category Description</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Category Image URL\" formControlName=\"catImgUrl\"\r\n                [errorStateMatcher]=\"matcher\">\r\n        <mat-error>\r\n          <span *ngIf=\"!categoryForm.get('catImgUrl').valid && categoryForm.get('catImgUrl').touched\">Please enter Category Image URL</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <ckeditor matCkeditor placehoder=\"Category Content\" formControlName=\"catContent\"></ckeditor>\r\n        <mat-error>\r\n          <span *ngIf=\"!categoryForm.get('catContent').valid && categoryForm.get('catContent').touched\">Please enter Category Description</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <div class=\"button-row\">\r\n        <button type=\"submit\" [disabled]=\"!categoryForm.valid\" mat-flat-button color=\"primary\"><mat-icon>save</mat-icon></button>\r\n      </div>\r\n    </form>\r\n  </mat-card>\r\n</div>\r\n";
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<div class=\"app-banner\">\r\n<div class=\"\">\r\n    <app-navbar></app-navbar>\r\n    <router-outlet></router-outlet>\r\n    \r\n  </div>\r\n  <app-footer></app-footer>\r\n</div>";
      /***/
    },

    /***/
    "XgRU":
    /*!*******************************************************!*\
      !*** ./src/app/auth/register/register.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function XgRU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".example-container {\n  background-color: #007bc7;\n  margin-top: 7em;\n  height: 85vh;\n}\n.example-container h2 {\n  color: #fff;\n  font-size: 2.5em;\n  font-weight: 600;\n}\n.example-container .example-card {\n  background-color: #fff;\n  border-radius: 12px;\n  padding: 0.4em 1em;\n}\n.example-container .example-card mat-form-field {\n  padding: 2px 15px;\n}\n.example-container .example-card .button-row button {\n  width: 100%;\n  padding: 5px;\n  border-radius: 27px;\n  font-size: 1.3em;\n  font-weight: 600;\n}\n.example-container .example-card .button-row .button-register {\n  background-color: #01ba94;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHN0eWxlXFx+dmFyaWFibGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlCQ1VRO0VEVFIsZUFBQTtFQUNBLFlBQUE7QUFESjtBQUVJO0VBQ0ksV0NKTztFREtQLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUVJO0VBQ0ksc0JDVE87RURVUCxtQkFBQTtFQUNBLGtCQUFBO0FBQVI7QUFDUTtFQUNJLGlCQUFBO0FBQ1o7QUFFWTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQVo7QUFFWTtFQUNJLHlCQ3JCRDtBRHFCZiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zdHlsZS9+dmFyaWFibGUuc2Nzcyc7XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Qmx1ZTtcclxuICAgIG1hcmdpbi10b3A6IDdlbTtcclxuICAgIGhlaWdodDogODV2aDtcclxuICAgIGgyIHtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnlXaGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgICAuZXhhbXBsZS1jYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeVdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgcGFkZGluZzogMC40ZW0gMWVtO1xyXG4gICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMnB4IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b24tcm93IHtcclxuICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyN3B4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idXR0b24tcmVnaXN0ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnlHcmVlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5cclxuJHByaW1hcnlDb2xvcjogIzdmN2Y3ZjtcclxuJHByaW1hcnlXaGl0ZTogI2ZmZjtcclxuJHByaW1hcnlCbGFjazogIzAwMDtcclxuJHByaW1hcnlCbHVlOiAjMDA2MWYyO1xyXG4kcHJpbWFyeUdyZWVuOiAjMDFiYTk0O1xyXG4kcHJpbWFyeVRlYWw6ICMwNWFiOWY7XHJcbiRwcmltYXJ5RGFyazojMWYyZDQxO1xyXG4kc2Vjb25kYXJ5V2hpdGU6ICNhN2FiYjM7XHJcbiRzZWNvbmRhcnlEYXJrOiAjYTBhN2IwO1xyXG4kc2Vjb25kYXJ5Q29sb3I6ICMzMDQwNjk7XHJcbiRwcmltYXJ5R3JheTogIzhlOTVhMDtcclxuJGxpZ2h0Qmx1ZTogIzAwN2JjNzsiXX0= */";
      /***/
    },

    /***/
    "Y6QS":
    /*!*************************************************************************!*\
      !*** ./src/app/category/category-details/category-details.component.ts ***!
      \*************************************************************************/

    /*! exports provided: CategoryDetailsComponent */

    /***/
    function Y6QS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryDetailsComponent", function () {
        return CategoryDetailsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_category_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./category-details.component.html */
      "4IuV");
      /* harmony import */


      var _category_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./category-details.component.scss */
      "MY8x");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/category.service */
      "AfT/");

      var CategoryDetailsComponent = /*#__PURE__*/function () {
        function CategoryDetailsComponent(route, api, router) {
          _classCallCheck(this, CategoryDetailsComponent);

          this.route = route;
          this.api = api;
          this.router = router;
          this.category = {
            id: null,
            catName: '',
            catDesc: '',
            catImgUrl: '',
            catContent: '',
            updated: null
          };
          this.isLoadingResults = true;
        }

        _createClass(CategoryDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCategoryDetails(this.route.snapshot.params.id);
          }
        }, {
          key: "getCategoryDetails",
          value: function getCategoryDetails(id) {
            var _this28 = this;

            this.api.getCategory(id).subscribe(function (data) {
              _this28.category = data;
              _this28.category.id = data._id;
              console.log(_this28.category);
              _this28.isLoadingResults = false;
            });
          }
        }, {
          key: "deleteCategory",
          value: function deleteCategory(id) {
            var _this29 = this;

            this.isLoadingResults = true;
            this.api.deleteCategory(id).subscribe(function (res) {
              _this29.isLoadingResults = false;

              _this29.router.navigate(['/category']);
            }, function (err) {
              console.log(err);
              _this29.isLoadingResults = false;
            });
          }
        }]);

        return CategoryDetailsComponent;
      }();

      CategoryDetailsComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      CategoryDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-category-details',
        template: _raw_loader_category_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_category_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CategoryDetailsComponent);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./auth/login/login.component */
      "bsvf");
      /* harmony import */


      var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./auth/register/register.component */
      "ZGml");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _details_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./details/details.component */
      "9R8I");
      /* harmony import */


      var _category_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./category/category.component */
      "clsX");
      /* harmony import */


      var _post_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./post/post.component */
      "fQWx");
      /* harmony import */


      var _category_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./category/category-details/category-details.component */
      "Y6QS");
      /* harmony import */


      var _category_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./category/category-add/category-add.component */
      "6PNY");
      /* harmony import */


      var _category_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./category/category-edit/category-edit.component */
      "fv54");
      /* harmony import */


      var _post_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./post/post-details/post-details.component */
      "qMKO");
      /* harmony import */


      var _post_post_add_post_add_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./post/post-add/post-add.component */
      "uj5D");
      /* harmony import */


      var _post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./post/post-edit/post-edit.component */
      "vrb6");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./_interceptors/token.interceptor */
      "SIlP");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material */
      "vdoh");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _bycategory_bycategory_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./bycategory/bycategory.component */
      "EPmy");
      /* harmony import */


      var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ckeditor4-angular */
      "eIsa");
      /* harmony import */


      var mat_contenteditable__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! mat-contenteditable */
      "O6gE");
      /* harmony import */


      var _admin_admin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./admin/admin.component */
      "TRGY");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "kWWo");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./footer/footer.component */
      "fp1T");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _blog_blog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./blog/blog.component */
      "LgBW");
      /* harmony import */


      var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! jw-angular-pagination */
      "P9+s");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ngx-pagination */
      "oOf3");
      /* harmony import */


      var ngx_disqus__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ngx-disqus */
      "uqZ0");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ng2-search-filter */
      "cZdB");
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./contact/contact.component */
      "bzTf");
      /* harmony import */


      var _auth_login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./auth/login-admin/login-admin.component */
      "0ydo");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb"); // import { NgSelectModule } from '@ng-select/ng-select';
      // import { NgSelectConfig } from '@ng-select/ng-select';
      //  import { ɵs } from '@ng-select/ng-select';
      // import { ConsoleService } from '@ng-select/ng-select/lib/console.service';


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_8__["DetailsComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_9__["CategoryComponent"], _post_post_component__WEBPACK_IMPORTED_MODULE_10__["PostComponent"], _category_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_11__["CategoryDetailsComponent"], _category_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_12__["CategoryAddComponent"], _category_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_13__["CategoryEditComponent"], _post_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_14__["PostDetailsComponent"], _post_post_add_post_add_component__WEBPACK_IMPORTED_MODULE_15__["PostAddComponent"], _post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_16__["PostEditComponent"], _bycategory_bycategory_component__WEBPACK_IMPORTED_MODULE_22__["BycategoryComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_25__["AdminComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_26__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_27__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_28__["HeaderComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_29__["BlogComponent"], jw_angular_pagination__WEBPACK_IMPORTED_MODULE_30__["JwPaginationComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_35__["ContactComponent"], _auth_login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_36__["LoginAdminComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatOptionModule"], ckeditor4_angular__WEBPACK_IMPORTED_MODULE_23__["CKEditorModule"], mat_contenteditable__WEBPACK_IMPORTED_MODULE_24__["MatContenteditableModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_31__["NgxPaginationModule"], ngx_disqus__WEBPACK_IMPORTED_MODULE_32__["DisqusModule"].forRoot('sarkblog'), _angular_common__WEBPACK_IMPORTED_MODULE_33__["CommonModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_34__["Ng2SearchPipeModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_37__["ToastrModule"].forRoot()],
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
          useClass: _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_18__["TokenInterceptor"],
          multi: true
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "ZGUQ":
    /*!********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function ZGUQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"example-container mat-elevation-z8\">\r\n  <div class=\"example-loading-shade\"\r\n        *ngIf=\"isLoadingResults\">\r\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"d-flex\">\r\n      \r\n      <h1 class=\"mr-3\">\r\n        <a routerLink=\"/post\">Posts</a>\r\n      </h1>\r\n      <h1 class=\"ml-3\">\r\n        <a routerLink=\"/category\">Category</a>\r\n      </h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"button-row\">\r\n    <a mat-flat-button color=\"primary\" [routerLink]=\"['add']\"><mat-icon>add</mat-icon></a>\r\n  </div>\r\n  <div class=\"mat-elevation-z8\">\r\n    <table mat-table [dataSource]=\"data\" class=\"example-table\"\r\n            matSort matSortActive=\"postTitle\" matSortDisableClear matSortDirection=\"asc\">\r\n\r\n      <!-- Post Name Column -->\r\n      <ng-container matColumnDef=\"postTitle\">\r\n        <th mat-header-cell *matHeaderCellDef>Post Title</th>\r\n        <td mat-cell *matCellDef=\"let row\">{{row.postTitle}}</td>\r\n      </ng-container>\r\n\r\n      <!-- Post Description Column -->\r\n      <ng-container matColumnDef=\"postDesc\">\r\n        <th mat-header-cell *matHeaderCellDef>Post Description</th>\r\n        <td mat-cell *matCellDef=\"let row\">{{row.postDesc}}</td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['details/', row._id]\"></tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "ZGml":
    /*!*****************************************************!*\
      !*** ./src/app/auth/register/register.component.ts ***!
      \*****************************************************/

    /*! exports provided: MyErrorStateMatcher, RegisterComponent */

    /***/
    function ZGml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function () {
        return MyErrorStateMatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.component.html */
      "hnEC");
      /* harmony import */


      var _register_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register.component.scss */
      "XgRU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/auth.service */
      "7Vn+");
      /** Error when invalid control is dirty, touched, or submitted. */


      var MyErrorStateMatcher = /*#__PURE__*/function () {
        function MyErrorStateMatcher() {
          _classCallCheck(this, MyErrorStateMatcher);
        }

        _createClass(MyErrorStateMatcher, [{
          key: "isErrorState",
          value: function isErrorState(control, form) {
            var isSubmitted = form && form.submitted;
            return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
          }
        }]);

        return MyErrorStateMatcher;
      }();

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(formBuilder, router, authService) {
          _classCallCheck(this, RegisterComponent);

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

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registerForm = this.formBuilder.group({
              fullName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              userProfileReference: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              userProfileUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              bio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit(form) {
            var _this30 = this;

            this.authService.register(form).subscribe(function (res) {
              _this30.router.navigate(['login']);
            }, function (err) {
              console.log(err);
              alert(err.error);
            });
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }];
      };

      RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RegisterComponent);
      /***/
    },

    /***/
    "aZnr":
    /*!************************************************!*\
      !*** ./src/app/details/details.component.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function aZnr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".detail-banner .post-image {\n  width: calc(100% + 32px);\n  margin: 0 -16px 16px;\n}\n.detail-banner .main-banner .post-title {\n  font-size: 2em;\n  font-weight: 600;\n  line-height: 43px;\n  word-spacing: 1px;\n  letter-spacing: 1px;\n}\n.detail-banner .main-banner .post-info .post-info-sub p {\n  border-right: 2px solid gray;\n  margin-left: 5px;\n  padding: 0 10px 0 0;\n}\n.detail-banner .main-banner .post-info .post-info-sub p span {\n  background: #05ab9f;\n  font-size: 1.2em;\n  color: #fff;\n  font-weight: 500;\n}\n.detail-banner .main-banner .post-info .post-info-sub p strong {\n  margin-right: 5px;\n  padding-left: 0.8em;\n}\n.detail-banner .main-banner mat-card-content {\n  font-size: 1.1em;\n  width: 100%;\n}\n.detail-banner .side-banner {\n  margin-top: 10em;\n  box-shadow: 0 0 10px -4px black;\n}\n.detail-banner .side-banner .post-share-area {\n  padding: 0;\n  background-color: #f8f8f8;\n}\n.detail-banner .side-banner .post-share-area p {\n  padding-top: 15px;\n  font-size: 2em;\n  font-weight: 600;\n  text-align: center;\n  text-transform: capitalize;\n}\n.detail-banner .side-banner .post-share-area .social-default {\n  list-style-type: none;\n  justify-content: center;\n  align-items: center;\n  font-size: 2.5em;\n}\n.detail-banner .side-banner .post-share-area .social-default li {\n  margin-right: 0.5em;\n}\n.detail-banner .side-banner .post-share-area .social-default li a {\n  list-style: none;\n}\n.detail-banner .side-banner .trending-posts {\n  margin-bottom: 0rem;\n}\n.detail-banner .side-banner .trending-posts .topic-border {\n  position: relative;\n  border-bottom: 2px solid #000;\n}\n.detail-banner .side-banner .trending-posts .topic-border .topic-box-lg:before {\n  z-index: 2;\n  content: \"\";\n  top: 0;\n  right: -8px;\n  position: absolute;\n  width: 0;\n  height: 0;\n}\n.detail-banner .side-banner .trending-posts .topic-border .topic-box-lg {\n  display: inline-block;\n  position: relative;\n  color: #fff;\n  height: 40px;\n  background-color: #000;\n  padding: 0 20px;\n  line-height: 40px;\n  text-align: center;\n  text-transform: capitalize;\n  font-weight: 600;\n  font-size: 18px;\n  z-index: 2;\n}\n.detail-banner .side-banner .trending-posts .topic-border .topic-box-lg:after {\n  content: \"\";\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n.detail-banner .side-banner .trending-posts .topic-border:after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n  width: 100%;\n  height: 2px;\n}\n.detail-banner .side-banner .trending-posts .color-cod-gray:before {\n  border-top: 8px solid #111;\n  border-right: 8px solid transparent;\n}\n.detail-banner .side-banner .card-body {\n  width: 100%;\n  margin-top: 1em;\n  padding: 0px 3px;\n}\n.detail-banner .side-banner .card-body .user-image {\n  border-radius: 100%;\n  width: 100%;\n}\n.detail-banner .side-banner .card-body .trending-posts .image-post {\n  width: 100%;\n}\n.detail-banner .side-banner .card-body .trending-posts .image-post img {\n  width: 100%;\n  height: 100px auto;\n}\n.detail-banner .side-banner .card-body .trending-posts .image-post p:first-child {\n  font-size: 10px;\n}\n.detail-banner .side-banner .card-body .trending-posts .image-post p {\n  font-size: 12px !important;\n}\n.detail-banner .side-banner .card-body .trending-posts .text-desc {\n  margin-left: 10px;\n  width: 100%;\n  color: #a7abb3;\n  cursor: pointer;\n}\n.detail-banner .side-banner .card-body .trending-posts .text-desc p:first-child {\n  font-size: 10px;\n}\n.detail-banner .side-banner .card-body .trending-posts .text-desc p {\n  font-size: 12px !important;\n}\n.detail-banner .side-banner .card-body .author h6 {\n  margin-top: 1.5em;\n  font-size: 1.5em;\n  text-transform: capitalize;\n}\n.detail-banner .side-banner .card-body .author .user-img {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.detail-banner .side-banner .card-body .author .user-img img {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.detail-banner .side-banner .card-body .author p {\n  font-size: 1em;\n  text-transform: capitalize;\n  text-align: center;\n  margin: 1em;\n}\n.detail-banner .side-banner .card-body .author .social-accounts h3 {\n  padding: 0.4em 0em;\n  font-size: 1.5em;\n  font-weight: 600;\n  text-transform: capitalize;\n  text-align: center;\n}\n.detail-banner .side-banner .card-body .author .social-accounts .social-icons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.detail-banner .side-banner .card-body .author .social-accounts .social-icons a {\n  font-size: 1.8em;\n  text-align: center;\n  margin: 8px;\n}\n.detail-banner .side-banner .card-body .active {\n  color: #05ab9f;\n  background: #a0a7b0;\n}\n.detail-banner .side-banner .card-body .newsletter-area {\n  padding: 0.8em;\n  background-color: #0061f2;\n}\n.detail-banner .side-banner .card-body .newsletter-area h2 {\n  font-size: 1.8em;\n  color: #000;\n  font-weight: 700;\n  text-align: center;\n}\n.detail-banner .side-banner .card-body .newsletter-area img {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.detail-banner .side-banner .card-body .newsletter-area .subscription-needs-validation1 .input-group .input-group-addon button {\n  border: none;\n}\n.detail-banner .side-banner .card-body .newsletter-area .subscription-needs-validation1 .input-group .input-group-addon button i {\n  font-size: 2.1em;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .side-banner .post-share-area .social-default {\n    font-size: 1.8em !important;\n    margin-right: 1em;\n  }\n  .side-banner .post-share-area .social-default li {\n    margin-right: 0.5em !important;\n  }\n  .side-banner .author p {\n    margin: 0.1em !important;\n  }\n  .side-banner .social-accounts h3 {\n    font-size: 1em;\n  }\n  .side-banner .social-accounts .social-icons a {\n    font-size: 1.4em !important;\n    margin: 5px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRldGFpbHMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc3R5bGVcXH52YXJpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VBQ0ksd0JBQUE7RUFDQSxvQkFBQTtBQUhSO0FBTVE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFKWjtBQVFnQjtFQUNJLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQU5wQjtBQU9vQjtFQUNJLG1CQ2hCVjtFRGlCVSxnQkFBQTtFQUNBLFdDdEJUO0VEdUJTLGdCQUFBO0FBTHhCO0FBT29CO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQUx4QjtBQVVRO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBUlo7QUFXSTtFQUNJLGdCQUFBO0VBQ0EsK0JBQUE7QUFUUjtBQVdRO0VBUUksVUFBQTtFQUNBLHlCQUFBO0FBaEJaO0FBUVk7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFOaEI7QUFVWTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBUmhCO0FBU2dCO0VBQ0ksbUJBQUE7QUFQcEI7QUFRb0I7RUFDSSxnQkFBQTtBQU54QjtBQVdRO0VBQ0ksbUJBQUE7QUFUWjtBQVVZO0VBQ0ksa0JBQUE7RUFDQSw2QkFBQTtBQVJoQjtBQVNnQjtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBUHBCO0FBU2dCO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdDakZMO0VEa0ZLLFlBQUE7RUFDQSxzQkNsRkw7RURtRkssZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFQcEI7QUFTZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFQcEI7QUFVWTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFSaEI7QUFVWTtFQUNJLDBCQUFBO0VBQ0EsbUNBQUE7QUFSaEI7QUFZUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFWWjtBQVdZO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FBVGhCO0FBWWE7RUFDSSxXQUFBO0FBVmpCO0FBWWlCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBVnJCO0FBWWlCO0VBQ0csZUFBQTtBQVZwQjtBQVlnQjtFQUNJLDBCQUFBO0FBVnBCO0FBY2E7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQzdJQTtFRDhJQSxlQUFBO0FBWmpCO0FBYWlCO0VBQ0ksZUFBQTtBQVhyQjtBQWFpQjtFQUNJLDBCQUFBO0FBWHJCO0FBaUJnQjtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQWZwQjtBQWlCZ0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBZnBCO0FBZ0JvQjtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFkcEI7QUFrQmdCO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBaEJwQjtBQW1Cb0I7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBakJ4QjtBQW1Cb0I7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWpCeEI7QUFrQndCO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFoQjVCO0FBc0JZO0VBQ0ksY0M1TUY7RUQ2TUUsbUJDMU1BO0FEc0xoQjtBQXVCWTtFQUNLLGNBQUE7RUFDQSx5QkNwTkg7QUQrTGQ7QUFzQmlCO0VBQ0ksZ0JBQUE7RUFDQSxXQ3hOTjtFRHlOTSxnQkFBQTtFQUNBLGtCQUFBO0FBcEJyQjtBQXNCaUI7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQXBCckI7QUF5QjZCO0VBQ0csWUFBQTtBQXZCaEM7QUF3QmlDO0VBQ0ksZ0JBQUE7QUF0QnJDO0FBc0NBO0VBR1E7SUFDSSwyQkFBQTtJQUNBLGlCQUFBO0VBckNWO0VBc0NVO0lBQ0ksOEJBQUE7RUFwQ2Q7RUF5Q007SUFDSSx3QkFBQTtFQXZDVjtFQTJDTTtJQUNJLGNBQUE7RUF6Q1Y7RUE0Q1U7SUFDSSwyQkFBQTtJQUNBLHNCQUFBO0VBMUNkO0FBQ0YiLCJmaWxlIjoiZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc3R5bGUvfnZhcmlhYmxlLnNjc3NcIjtcclxuXHJcbi5kZXRhaWwtYmFubmVyIHtcclxuXHJcbiAgICAucG9zdC1pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xyXG4gICAgICAgIG1hcmdpbjogMCAtMTZweCAxNnB4O1xyXG4gICAgfVxyXG4gICAgLm1haW4tYmFubmVyIHtcclxuICAgICAgICAucG9zdC10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDNweDtcclxuICAgICAgICAgICAgd29yZC1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wb3N0LWluZm8ge1xyXG4gICAgICAgICAgICAucG9zdC1pbmZvLXN1YiB7XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBncmF5O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4IDAgMDtcclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnlUZWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnlXaGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC44ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2lkZS1iYW5uZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwZW07XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggLTRweCBibGFjaztcclxuXHJcbiAgICAgICAgLnBvc3Qtc2hhcmUtYXJlYSB7XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gICAgICAgICAgICAuc29jaWFsLWRlZmF1bHQge1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudHJlbmRpbmctcG9zdHMge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xyXG4gICAgICAgICAgICAudG9waWMtYm9yZGVyIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkcHJpbWFyeUJsYWNrO1xyXG4gICAgICAgICAgICAgICAgLnRvcGljLWJveC1sZzpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC04cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50b3BpYy1ib3gtbGcge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5V2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5QmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRvcGljLWJveC1sZzphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50b3BpYy1ib3JkZXI6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbG9yLWNvZC1ncmF5OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiA4cHggc29saWQgIzExMTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAzcHg7XHJcbiAgICAgICAgICAgIC51c2VyLWltYWdle1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50cmVuZGluZy1wb3N0cyB7XHJcbiAgICAgICAgICAgICAuaW1hZ2UtcG9zdHtcclxuICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHggYXV0bztcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgcDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgICAgIC50ZXh0LWRlc2N7XHJcbiAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgICAgICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5V2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgIHA6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hdXRob3Ige1xyXG4gICAgICAgICAgICAgICAgaDYge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudXNlci1pbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNvY2lhbC1hY2NvdW50cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjRlbSAwZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zb2NpYWwtaWNvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA4cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5VGVhbDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRzZWNvbmRhcnlEYXJrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAubmV3c2xldHRlci1hcmVhIHtcclxuICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjhlbTtcclxuICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeUJsdWU7XHJcbiAgICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnlCbGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAuc3Vic2NyaXB0aW9uLW5lZWRzLXZhbGlkYXRpb24xIHtcclxuICAgICAgICAgICAgICAgICAgICAgLmlucHV0LWdyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIC5pbnB1dC1ncm91cC1hZGRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICBcclxufVxyXG5AbWVkaWEobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbi5zaWRlLWJhbm5lciB7XHJcbiAgICAucG9zdC1zaGFyZS1hcmVhIHtcclxuICAgICAgICAuc29jaWFsLWRlZmF1bHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuOGVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYXV0aG9yIHtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjFlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zb2NpYWwtYWNjb3VudHMge1xyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zb2NpYWwtaWNvbnMge1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40ZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG59XHJcbiIsIlxyXG5cclxuJHByaW1hcnlDb2xvcjogIzdmN2Y3ZjtcclxuJHByaW1hcnlXaGl0ZTogI2ZmZjtcclxuJHByaW1hcnlCbGFjazogIzAwMDtcclxuJHByaW1hcnlCbHVlOiAjMDA2MWYyO1xyXG4kcHJpbWFyeUdyZWVuOiAjMDFiYTk0O1xyXG4kcHJpbWFyeVRlYWw6ICMwNWFiOWY7XHJcbiRwcmltYXJ5RGFyazojMWYyZDQxO1xyXG4kc2Vjb25kYXJ5V2hpdGU6ICNhN2FiYjM7XHJcbiRzZWNvbmRhcnlEYXJrOiAjYTBhN2IwO1xyXG4kc2Vjb25kYXJ5Q29sb3I6ICMzMDQwNjk7XHJcbiRwcmltYXJ5R3JheTogIzhlOTVhMDtcclxuJGxpZ2h0Qmx1ZTogIzAwN2JjNzsiXX0= */";
      /***/
    },

    /***/
    "bdh1":
    /*!******************************************!*\
      !*** ./src/app/home/home.component.scss ***!
      \******************************************/

    /*! exports provided: default */

    /***/
    function bdh1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".page-header-dark {\n  color: #fff;\n  background-color: #1f2d41;\n}\n\n.page-header {\n  position: relative;\n  padding-top: 20rem;\n  padding-bottom: 0;\n}\n\n.bg-img-cover {\n  background-position: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('photo-1568992688065-536aad8a12f6.jpeg');\n}\n\nheader .svg-border-rounded {\n  border: none;\n}\n\n.icon-stack-xl {\n  height: 5rem;\n  width: 5rem;\n  font-size: 1.75rem;\n}\n\n.bg-gradient-primary-to-secondary {\n  background-color: #0061f2;\n  border-radius: 100%;\n  margin: 2em 4.5em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  /* background-image: linear-gradient(135deg,#0061f2,rgba(105,0,199,.8)); */\n}\n\n.feature-banner {\n  font-size: 3em;\n}\n\n.feature-text {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.card {\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.35rem;\n  text-decoration: none;\n  box-shadow: 0 -0.85rem 4.8rem 0 rgba(31, 45, 65, 0.15);\n  overflow: hidden;\n  position: relative;\n}\n\n.card .card-body .card-title {\n  margin-bottom: 0.75rem;\n  color: #304069;\n}\n\n.card .card-footer {\n  border: none;\n}\n\n.card .card-footer .post-preview-meta {\n  display: flex;\n  color: #8e95a0;\n}\n\n.card .card-footer .post-preview-meta img {\n  border-radius: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 72px;\n  width: auto;\n}\n\n.card .card-footer .post-preview-meta-details {\n  padding: 0.5em;\n}\n\n.card .card-footer .post-update {\n  display: flex;\n}\n\n.card .card-footer .post-update .post-preview-meta-details-name {\n  margin: 16px 1px 13px 2px;\n}\n\n.lift {\n  box-shadow: 0 0.15rem 1.75rem 0 rgba(31, 45, 65, 0.15);\n  /* transition: transform .15s ease-in-out,box-shadow .15s ease-in-out; */\n  transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.lift:hover {\n  transform: translateY(-0.33333rem);\n  box-shadow: 0 0.5rem 2rem 0 rgba(31, 45, 65, 0.25);\n}\n\n.blog-banner .recent-blog {\n  font-size: 3em;\n}\n\n.blog-banner .card-img-top {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 220px;\n  border: none;\n}\n\n.blog-banner .card-body p {\n  color: #a0a7b0;\n  font-size: 1em;\n  word-spacing: 0.2em;\n  letter-spacing: 0.01em;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.blog-banner .card-body p:hover {\n  text-decoration: none;\n}\n\n@media (max-width: 575.98px) {\n  header .page-header-content .page-first {\n    margin: -6em 2em 7em 2em;\n  }\n\n  .bg-white h3 {\n    font-size: 2.5em;\n    font-weight: 600;\n  }\n  .bg-white .icon-stack {\n    margin: 0em 4.5em;\n  }\n\n  .blog-banner h2 {\n    font-size: 2em !important;\n    font-weight: 600;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc3R5bGVcXH52YXJpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FBQUo7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHVIQUFBO0FBRUo7O0FBQ0k7RUFDSSxZQUFBO0FBRVI7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEVBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7QUFJSjs7QUFGQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFIQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUVBLHNEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUpRO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0FBTVo7O0FBRkk7RUFDSSxZQUFBO0FBSVI7O0FBSFE7RUFDRSxhQUFBO0VBQ0EsY0N6REk7QUQ4RGQ7O0FBSlU7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQU1aOztBQUhRO0VBQ0UsY0FBQTtBQUtWOztBQUhRO0VBQ0UsYUFBQTtBQUtWOztBQUpVO0VBQ0UseUJBQUE7QUFNWjs7QUFEQTtFQUVJLHNEQUFBO0VBS0Esd0VBQUE7RUFDQSxxRUFBQTtBQUVKOztBQUNFO0VBRUUsa0NBQUE7RUFFQSxrREFBQTtBQUVKOztBQUNJO0VBQ0ksY0FBQTtBQUVSOztBQUFJO0VBQ0ksb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUVSOztBQUNRO0VBQ0ksY0MzR0k7RUQ0R0osY0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFDWjs7QUFDUTtFQUNJLHFCQUFBO0FBQ1o7O0FBR0E7RUFHTTtJQUNFLHdCQUFBO0VBRk47O0VBT0U7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0VBSko7RUFPQTtJQUNFLGlCQUFBO0VBTEY7O0VBU0U7SUFDRSx5QkFBQTtJQUNBLGdCQUFBO0VBTko7QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3N0eWxlL352YXJpYWJsZS5zY3NzJztcclxuLnBhZ2UtaGVhZGVyLWRhcmsge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyZDQxO1xyXG59XHJcbi5wYWdlLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXRvcDogMjByZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG4uYmctaW1nLWNvdmVyIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuOCksIHJnYmEoMCwgMCwgMCwgMC43KSksIHVybChcIi4uLy4uL2Fzc2V0cy9zdHlsZS9waG90by0xNTY4OTkyNjg4MDY1LTUzNmFhZDhhMTJmNi5qcGVnXCIpO1xyXG59XHJcbmhlYWRlciB7XHJcbiAgICAuc3ZnLWJvcmRlci1yb3VuZGVkIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuLmljb24tc3RhY2steGwge1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgd2lkdGg6IDVyZW07XHJcbiAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbn1cclxuLmJnLWdyYWRpZW50LXByaW1hcnktdG8tc2Vjb25kYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDYxZjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyZW0gNC41ZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzAwNjFmMixyZ2JhKDEwNSwwLDE5OSwuOCkpOyAqL1xyXG59XHJcbi5mZWF0dXJlLWJhbm5lciB7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxufVxyXG4uZmVhdHVyZS10ZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jYXJkIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIC0wLjg1cmVtIDQuOHJlbSAwIHJnYmEoMzEsIDQ1LCA2NSwgMC4xNSk7XHJcbiAgICBib3gtc2hhZG93OiAwIC0wLjg1cmVtIDQuOHJlbSAwIHJnYmEoMzEsIDQ1LCA2NSwgMC4xNSk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogIzMwNDA2OTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtZm9vdGVyIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgLnBvc3QtcHJldmlldy1tZXRhIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnlHcmF5O1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzJweDtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wb3N0LXByZXZpZXctbWV0YS1kZXRhaWxzIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucG9zdC11cGRhdGUge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIC5wb3N0LXByZXZpZXctbWV0YS1kZXRhaWxzLW5hbWUge1xyXG4gICAgICAgICAgICBtYXJnaW46IDE2cHggMXB4IDEzcHggMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG59XHJcbi5saWZ0IHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwLjE1cmVtIDEuNzVyZW0gMCByZ2JhKDMxLCA0NSwgNjUsIDAuMTUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjE1cmVtIDEuNzVyZW0gMCByZ2JhKDMxLCA0NSwgNjUsIDAuMTUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dCxcclxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4xNXMgZWFzZS1pbi1vdXQsXHJcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcclxuICAgIC8qIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDsgKi9cclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dCxcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0gMC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgLmxpZnQ6aG92ZXIge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMzMzMzNyZW0pO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjMzMzMzcmVtKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwLjVyZW0gMnJlbSAwIHJnYmEoMzEsIDQ1LCA2NSwgMC4yNSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAycmVtIDAgcmdiYSgzMSwgNDUsIDY1LCAwLjI1KTtcclxuICB9XHJcbi5ibG9nLWJhbm5lciB7XHJcbiAgICAucmVjZW50LWJsb2cge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgfVxyXG4gICAgLmNhcmQtaW1nLXRvcCB7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMjBweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnlEYXJrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgd29yZC1zcGFjaW5nOiAwLjJlbTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHA6aG92ZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6IDU3NS45OHB4KSB7IFxyXG4gIGhlYWRlciB7XHJcbiAgICAucGFnZS1oZWFkZXItY29udGVudCB7XHJcbiAgICAgIC5wYWdlLWZpcnN0IHtcclxuICAgICAgICBtYXJnaW46IC02ZW0gMmVtIDdlbSAyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmJnLXdoaXRlIHtcclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICBcclxuICAuaWNvbi1zdGFjayB7XHJcbiAgICBtYXJnaW46IDBlbSA0LjVlbTtcclxuICB9XHJcbn1cclxuICAuYmxvZy1iYW5uZXIge1xyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDJlbSAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG4gfVxyXG5cclxuIiwiXHJcblxyXG4kcHJpbWFyeUNvbG9yOiAjN2Y3ZjdmO1xyXG4kcHJpbWFyeVdoaXRlOiAjZmZmO1xyXG4kcHJpbWFyeUJsYWNrOiAjMDAwO1xyXG4kcHJpbWFyeUJsdWU6ICMwMDYxZjI7XHJcbiRwcmltYXJ5R3JlZW46ICMwMWJhOTQ7XHJcbiRwcmltYXJ5VGVhbDogIzA1YWI5ZjtcclxuJHByaW1hcnlEYXJrOiMxZjJkNDE7XHJcbiRzZWNvbmRhcnlXaGl0ZTogI2E3YWJiMztcclxuJHNlY29uZGFyeURhcms6ICNhMGE3YjA7XHJcbiRzZWNvbmRhcnlDb2xvcjogIzMwNDA2OTtcclxuJHByaW1hcnlHcmF5OiAjOGU5NWEwO1xyXG4kbGlnaHRCbHVlOiAjMDA3YmM3OyJdfQ== */";
      /***/
    },

    /***/
    "bsvf":
    /*!***********************************************!*\
      !*** ./src/app/auth/login/login.component.ts ***!
      \***********************************************/

    /*! exports provided: MyErrorStateMatcher, LoginComponent */

    /***/
    function bsvf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function () {
        return MyErrorStateMatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "zu2e");
      /* harmony import */


      var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.component.scss */
      "H8dG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/auth.service */
      "7Vn+");
      /** Error when invalid control is dirty, touched, or submitted. */


      var MyErrorStateMatcher = /*#__PURE__*/function () {
        function MyErrorStateMatcher() {
          _classCallCheck(this, MyErrorStateMatcher);
        }

        _createClass(MyErrorStateMatcher, [{
          key: "isErrorState",
          value: function isErrorState(control, form) {
            var isSubmitted = form && form.submitted;
            return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
          }
        }]);

        return MyErrorStateMatcher;
      }();

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(formBuilder, router, authService) {
          _classCallCheck(this, LoginComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.authService = authService;
          this.username = '';
          this.password = '';
          this.matcher = new MyErrorStateMatcher();
          this.isLoadingResults = false;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.formBuilder.group({
              username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit(form) {
            var _this31 = this;

            this.isLoadingResults = true;
            this.authService.login(form).subscribe(function (res) {
              console.log(res);

              if (res.token) {
                localStorage.setItem('token', res.token);

                _this31.router.navigate(['home']);

                _this31.isLoadingResults = false;
              }
            }, function (err) {
              _this31.isLoadingResults = false;

              _this31.toastService.showErrorToast(err.error.message, "Oups!!!");
            });
          }
        }, {
          key: "register",
          value: function register() {
            this.router.navigate(['register']);
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }];
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginComponent);
      /***/
    },

    /***/
    "bzTf":
    /*!**********************************************!*\
      !*** ./src/app/contact/contact.component.ts ***!
      \**********************************************/

    /*! exports provided: ContactComponent */

    /***/
    function bzTf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
        return ContactComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./contact.component.html */
      "BGiY");
      /* harmony import */


      var _contact_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contact.component.scss */
      "Np+I");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ContactComponent = /*#__PURE__*/function () {
        function ContactComponent() {
          _classCallCheck(this, ContactComponent);
        }

        _createClass(ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactComponent;
      }();

      ContactComponent.ctorParameters = function () {
        return [];
      };

      ContactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact',
        template: _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ContactComponent);
      /***/
    },

    /***/
    "clsX":
    /*!************************************************!*\
      !*** ./src/app/category/category.component.ts ***!
      \************************************************/

    /*! exports provided: CategoryComponent */

    /***/
    function clsX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryComponent", function () {
        return CategoryComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_category_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./category.component.html */
      "6Cpu");
      /* harmony import */


      var _category_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./category.component.scss */
      "OzAx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_services/category.service */
      "AfT/");

      var CategoryComponent = /*#__PURE__*/function () {
        function CategoryComponent(api) {
          _classCallCheck(this, CategoryComponent);

          this.api = api;
          this.displayedColumns = ['catName', 'catDesc'];
          this.data = [];
          this.isLoadingResults = true;
        }

        _createClass(CategoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this32 = this;

            this.api.getCategories().subscribe(function (res) {
              _this32.data = res;
              console.log(_this32.data);
              _this32.isLoadingResults = false;
            }, function (err) {
              console.log(err);
              _this32.isLoadingResults = false;
            });
          }
        }]);

        return CategoryComponent;
      }();

      CategoryComponent.ctorParameters = function () {
        return [{
          type: _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]
        }];
      };

      CategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-category',
        template: _raw_loader_category_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_category_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CategoryComponent);
      /***/
    },

    /***/
    "eIu9":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-edit/post-edit.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function eIu9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"example-container mat-elevation-z8\">\r\n    <div class=\"example-loading-shade\"\r\n          *ngIf=\"isLoadingResults\">\r\n      <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n    </div>\r\n    <div class=\"button-row\">\r\n      <a mat-flat-button color=\"primary\" (click)=\"postDetails()\"><mat-icon>list</mat-icon></a>\r\n    </div>\r\n    <mat-card class=\"example-card\">\r\n      <form [formGroup]=\"postForm\" (ngSubmit)=\"onFormSubmit()\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <mat-select formControlName=\"category\" [errorStateMatcher]=\"matcher\">\r\n            <mat-option *ngFor=\"let cat of categories\" [value]=\"cat._id\">\r\n              {{cat.catName}}\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error>\r\n            <span *ngIf=\"!postForm.get('category').valid && postForm.get('category').touched\">Please select Category</span>\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Post Title\" formControlName=\"postTitle\"\r\n                  [errorStateMatcher]=\"matcher\">\r\n          <mat-error>\r\n            <span *ngIf=\"!postForm.get('postTitle').valid && postForm.get('postTitle').touched\">Please enter Post Title</span>\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Post Author\" formControlName=\"postAuthor\"\r\n                  [errorStateMatcher]=\"matcher\">\r\n          <mat-error>\r\n            <span *ngIf=\"!postForm.get('postAuthor').valid && postForm.get('postAuthor').touched\">Please enter Post Author</span>\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <textarea matInput placeholder=\"Post Desc\" formControlName=\"postDesc\"\r\n                  [errorStateMatcher]=\"matcher\"></textarea>\r\n          <mat-error>\r\n            <span *ngIf=\"!postForm.get('postDesc').valid && postForm.get('postDesc').touched\">Please enter Post Description</span>\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">\r\n            <ckeditor matCkeditor placehoder=\"Post Content\" formControlName=\"postContent\"></ckeditor>\r\n            <mat-error>\r\n              <span *ngIf=\"!postForm.get('postContent').valid && postForm.get('postContent').touched\">Please enter Post Content</span>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        <div class=\"button-row\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Post Reference\" formControlName=\"postReference\"\r\n                  [errorStateMatcher]=\"matcher\">\r\n          <mat-error>\r\n            <span *ngIf=\"!postForm.get('postReference').valid && postForm.get('postReference').touched\">Please enter Post Ref</span>\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"Post Image URL\" formControlName=\"postImgUrl\"\r\n                    [errorStateMatcher]=\"matcher\">\r\n            <mat-error>\r\n              <span *ngIf=\"!postForm.get('postImgUrl').valid && postForm.get('postImgUrl').touched\">Please enter Post Image URL</span>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"Post Read Time in minutes\" formControlName=\"readTime\"\r\n                    [errorStateMatcher]=\"matcher\">\r\n            <mat-error>\r\n              <span *ngIf=\"!postForm.get('readTime').valid && postForm.get('readTime').touched\">Please enter Post readTime Duration</span>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <button type=\"submit\" [disabled]=\"!postForm.valid\" mat-flat-button color=\"primary\"><mat-icon>save</mat-icon></button>\r\n        </div>\r\n      </form>\r\n    </mat-card>\r\n  </div>\r\n";
      /***/
    },

    /***/
    "eMJ/":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login-admin/login-admin.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eMJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"example-container mat-elevation-z8\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n    <div class=\"example-loading-shade\"\r\n         *ngIf=\"isLoadingResults\">\r\n      <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n    </div>\r\n    <h2 class=\"m-3 text-center\">Login Form</h2>\r\n    <mat-card class=\"example-card\">\r\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onFormSubmit(loginForm.value)\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"username\"\r\n                 [errorStateMatcher]=\"matcher\">\r\n          <mat-error>\r\n            <span *ngIf=\"!loginForm.get('username').valid && loginForm.get('username').touched\">Please enter your username</span>\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\"\r\n                 [errorStateMatcher]=\"matcher\">\r\n          <mat-error>\r\n            <span *ngIf=\"!loginForm.get('password').valid && loginForm.get('password').touched\">Please enter your password</span>\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <div class=\"custom-control custom-checkbox mb-3\">\r\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\r\n          <label class=\"custom-control-label\" for=\"customCheck1\">Remember password</label>\r\n        </div>\r\n        <div class=\"button-row\">\r\n          <button  type=\"submit\" [disabled]=\"!loginForm.valid\" mat-flat-button color=\"primary\">Login</button>\r\n        </div>\r\n        <div class=\"button-row\">\r\n          <button class=\"button-register\" type=\"button\" mat-flat-button color=\"primary\" (click)=\"register()\">Register</button>\r\n        </div>\r\n      </form>\r\n    </mat-card>\r\n  </div>\r\n  </div>\r\n  </div>\r\n  \r\n";
      /***/
    },

    /***/
    "fECr":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function fECr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./header.component.html */
      "kjkU");
      /* harmony import */


      var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header.component.scss */
      "8PEf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ctorParameters = function () {
        return [];
      };

      HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HeaderComponent);
      /***/
    },

    /***/
    "fQWx":
    /*!****************************************!*\
      !*** ./src/app/post/post.component.ts ***!
      \****************************************/

    /*! exports provided: PostComponent */

    /***/
    function fQWx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostComponent", function () {
        return PostComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_post_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./post.component.html */
      "ZGUQ");
      /* harmony import */


      var _post_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./post.component.scss */
      "GB7h");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_services/post.service */
      "5p0G");

      var PostComponent = /*#__PURE__*/function () {
        function PostComponent(api) {
          _classCallCheck(this, PostComponent);

          this.api = api;
          this.displayedColumns = ['postTitle', 'postDesc'];
          this.data = [];
          this.isLoadingResults = true;
        }

        _createClass(PostComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this33 = this;

            this.api.getPosts().subscribe(function (res) {
              _this33.data = res;
              console.log(_this33.data);
              _this33.isLoadingResults = false;
            }, function (err) {
              console.log(err);
              _this33.isLoadingResults = false;
            });
          }
        }]);

        return PostComponent;
      }();

      PostComponent.ctorParameters = function () {
        return [{
          type: _services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]
        }];
      };

      PostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-post',
        template: _raw_loader_post_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_post_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PostComponent);
      /***/
    },

    /***/
    "fp1T":
    /*!********************************************!*\
      !*** ./src/app/footer/footer.component.ts ***!
      \********************************************/

    /*! exports provided: FooterComponent */

    /***/
    function fp1T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer.component.html */
      "HhuZ");
      /* harmony import */


      var _footer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./footer.component.scss */
      "pUeC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ctorParameters = function () {
        return [];
      };

      FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FooterComponent);
      /***/
    },

    /***/
    "fv54":
    /*!*******************************************************************!*\
      !*** ./src/app/category/category-edit/category-edit.component.ts ***!
      \*******************************************************************/

    /*! exports provided: MyErrorStateMatcher, CategoryEditComponent */

    /***/
    function fv54(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function () {
        return MyErrorStateMatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryEditComponent", function () {
        return CategoryEditComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_category_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./category-edit.component.html */
      "VwQp");
      /* harmony import */


      var _category_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./category-edit.component.scss */
      "huvq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/category.service */
      "AfT/");
      /** Error when invalid control is dirty, touched, or submitted. */


      var MyErrorStateMatcher = /*#__PURE__*/function () {
        function MyErrorStateMatcher() {
          _classCallCheck(this, MyErrorStateMatcher);
        }

        _createClass(MyErrorStateMatcher, [{
          key: "isErrorState",
          value: function isErrorState(control, form) {
            var isSubmitted = form && form.submitted;
            return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
          }
        }]);

        return MyErrorStateMatcher;
      }();

      var CategoryEditComponent = /*#__PURE__*/function () {
        function CategoryEditComponent(router, route, api, formBuilder) {
          _classCallCheck(this, CategoryEditComponent);

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

        _createClass(CategoryEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCategory(this.route.snapshot.params.id);
            this.categoryForm = this.formBuilder.group({
              catName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              catDesc: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              catImgUrl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              catContent: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            });
          }
        }, {
          key: "getCategory",
          value: function getCategory(id) {
            var _this34 = this;

            this.api.getCategory(id).subscribe(function (data) {
              _this34.id = data._id;

              _this34.categoryForm.setValue({
                catName: data.catName,
                catDesc: data.catDesc,
                catImgUrl: data.catImgUrl,
                catContent: data.catContent
              });
            });
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit() {
            var _this35 = this;

            this.isLoadingResults = true;
            this.api.updateCategory(this.id, this.categoryForm.value).subscribe(function (res) {
              var id = res._id;
              _this35.isLoadingResults = false;

              _this35.router.navigate(['/category/details', id]);
            }, function (err) {
              console.log(err);
              _this35.isLoadingResults = false;
            });
          }
        }, {
          key: "categoryDetails",
          value: function categoryDetails() {
            this.router.navigate(['/category/details', this.id]);
          }
        }]);

        return CategoryEditComponent;
      }();

      CategoryEditComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }];
      };

      CategoryEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-category-edit',
        template: _raw_loader_category_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_category_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CategoryEditComponent);
      /***/
    },

    /***/
    "hnEC":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function hnEC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"example-container mat-elevation-z8\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n  <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\r\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n  </div>\r\n  <h2 class=\"m-3 text-center\">Registration Form</h2>\r\n  <mat-card class=\"example-card\">\r\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onFormSubmit(registerForm.value)\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput type=\"fullName\" placeholder=\"Full Name\" formControlName=\"fullName\"\r\n          [errorStateMatcher]=\"matcher\">\r\n        <mat-error>\r\n          <span *ngIf=\"!registerForm.get('fullName').valid && registerForm.get('fullName').touched\">Please enter your\r\n            Full Name</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"username\" [errorStateMatcher]=\"matcher\">\r\n        <mat-error>\r\n          <span *ngIf=\"!registerForm.get('username').valid && registerForm.get('username').touched\">Please enter your\r\n            username</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" [errorStateMatcher]=\"matcher\">\r\n        <mat-error>\r\n          <span *ngIf=\"!registerForm.get('password').valid && registerForm.get('password').touched\">Please enter your\r\n            password</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input type=\"text\" matInput placeholder=\"Bio(breif discription)\" formControlName=\"bio\" [errorStateMatcher]=\"matcher\" autocomplete=\"off\">\r\n        <mat-error>\r\n          <span *ngIf=\"!registerForm.get('bio').valid && registerForm.get('bio').touched\">User Brief description\r\n            (bio)</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input type=\"userProfileUrl\" matInput placeholder=\"userProfile URL\" formControlName=\"userProfileUrl\"\r\n          [errorStateMatcher]=\"matcher\">\r\n        <mat-error>\r\n          <span *ngIf=\"!registerForm.get('userProfileUrl').valid && registerForm.get('userProfileUrl').touched\">Please\r\n            enter userPrifile Image URL</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input type=\"userProfileReference\" matInput placeholder=\"userProfileReference\" formControlName=\"userProfileReference\"\r\n          [errorStateMatcher]=\"matcher\">\r\n        <mat-error>\r\n          <span *ngIf=\"!registerForm.get('userProfileReference').valid && registerForm.get('userProfileReference').touched\">Please enter\r\n            userProfile image Reference</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <div class=\"button-row\">\r\n        <button  type=\"submit\" [disabled]=\"!registerForm.valid\" mat-flat-button color=\"primary\">Register</button>\r\n      </div>\r\n      <div class=\"button-row\">\r\n        <button class=\"button-register\" type=\"submit\" mat-flat-button color=\"primary\">Login</button>\r\n      </div>\r\n    </form>\r\n  </mat-card>\r\n</div>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "huvq":
    /*!*********************************************************************!*\
      !*** ./src/app/category/category-edit/category-edit.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function huvq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "iJX/":
    /*!********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function iJX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<header data-v-22791a1b=\"\" data-v-0cc2979f=\"\" class=\"page-header bg-img-cover overlay overlay-60 page-header-dark\"\r\n  data-v-7930edba=\"\">\r\n  <div class=\"container\">\r\n    <div data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"page-header-content\">\r\n      <div data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"container text-center\">\r\n        <div data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"row justify-content-center\">\r\n          <div data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"col-lg-8\">\r\n            <h1 data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"page-header-title mb-3\">Publications</h1>\r\n            <p data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"page-header-text mb-0\">Browse articles, keep up\r\n              to date, and\r\n              learn more on our blog!</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <span data-v-c5f3fcf8=\"\" data-v-22791a1b=\"\">\r\n    <div data-v-c5f3fcf8=\"\" class=\"svg-border-rounded text-light\">\r\n      <svg data-v-c5f3fcf8=\"\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 144.54 17.34\" preserveAspectRatio=\"none\"\r\n        fill=\"currentColor\">\r\n        <path data-v-c5f3fcf8=\"\" d=\"M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0\">\r\n        </path>\r\n      </svg>\r\n    </div>\r\n  </span>\r\n</header>\r\n<section class=\"blog-header py-10 bg-light\">\r\n  <div class=\"container\">\r\n    <a data-v-0cc2979f=\"\" data-v-0e51b078=\"\" href=\"javascript:void(0);\"\r\n      class=\"card post-preview post-preview-featured lift mb-5\">\r\n      <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"row no-gutters\">\r\n        <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"col-lg-5\">\r\n          <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-featured-img\">\r\n            <!-- <img src=\"../../assets/style/computer.jpeg\" alt=\"\"> -->\r\n          </div>\r\n        </div>\r\n        <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"col-lg-7\">\r\n          <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-body\">\r\n            <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"py-5\">\r\n              <h5 data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-title\">Boots on the Ground, Inclusive\r\n                Thought Provoking Ideas</h5>\r\n              <p data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-text\">Empower communities and energize\r\n                engaging ideas; scale and impact do-gooders while disruptring industries. Venture\r\n                philanthropy benefits corporations and people by moving the needle.</p>\r\n            </div>\r\n            <hr data-v-0cc2979f=\"\" data-v-0e51b078=\"\">\r\n            <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta\">\r\n              <img data-v-0cc2979f=\"\" data-v-0e51b078=\"\" src=\"https://source.unsplash.com/QAB-WJcbgJk/100x100\"\r\n                class=\"post-preview-meta-img\">\r\n              <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details\">\r\n                <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details-name\">\r\n                  Valerie Luna</div>\r\n                <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details-date\">Feb 5\r\n                  · 6 min read</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </a>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"blog-banner\">\r\n  <h2 class=\"recent-blog text-center m-5\">Recent Blogs</h2>\r\n  <div class=\"container mb-4\">\r\n    <div class=\"row justify-content-center align-item-center\">\r\n      <div class=\"col-md-4 col-sm-5\">\r\n        <input type=\"text\" [(ngModel)]=\"selectedUser\" type=\"text\" placeholder=\"Filter Post by title\">\r\n      </div>\r\n\r\n      <div class=\"col-md-6 col-sm-5\">\r\n        <mat-select>Search By Category\r\n          <mat-option *ngFor=\"let cat of categories\" [value]=\"cat._id\">\r\n            {{cat.catName}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\r\n        <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n      </div>\r\n      <div *ngFor=\"let post of posts | filter:selectedUser | paginate: {id : 'listing_pagination',\r\n      itemsPerPage:6,\r\n      currentPage: page,\r\n      totalItems: totalRecords}\" data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"col-md-6 col-xl-4 mb-5\">\r\n\r\n        <a data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card post-preview lift h-100\">\r\n          <img data-v-0cc2979f=\"\" data-v-0e51b078=\"\" src=\"{{post.postImgUrl}}\" alt=\"...\" class=\"card-img-top\">\r\n          <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-body\">\r\n            <a [routerLink]=\"['/details/', post._id]\">\r\n              <h5 data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-title\">{{post.postTitle}}</h5>\r\n            </a>\r\n            <p data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-text\">{{post.postDesc}}</p>\r\n          </div>\r\n          <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-footer\">\r\n            <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta\">\r\n              <ng-container *ngFor=\"let user of users, let i = index;\">\r\n                <div *ngIf=\"i===1\">\r\n                  <img data-v-0cc2979f=\"\" data-v-0e51b078=\"\" src=\"{{user.userProfileUrl}}\"\r\n                    class=\"post-preview-meta-img\">\r\n                </div>\r\n              </ng-container>\r\n              <!-- <img data-v-0cc2979f=\"\" data-v-0e51b078=\"\" src=\"{{user.userProfileReference}}\" \r\n              class=\"post-preview-meta-img\"> -->\r\n              <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details\">\r\n                <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details-name\">{{post.postAuthor}}\r\n                </div>\r\n                <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details-date\">\r\n                  {{post.updated | date: 'dd MMM yyyy'}}</div>\r\n              </div>\r\n              <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-update\">\r\n                <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details-name\">\r\n                  {{post.readTime}} min read\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</section>\r\n\r\n<section class=\"pagination-banner\">\r\n  <div>\r\n    <pagination-controls id=\"listing_pagination\" maxSize=\"6\" directionalLinks=\"true\" (pageChange)=\"page = $event\">\r\n    </pagination-controls>\r\n  </div>\r\n</section>";
      /***/
    },

    /***/
    "ikNA":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-add/category-add.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ikNA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"example-container mat-elevation-z8\">\r\n  <div class=\"example-loading-shade\"\r\n        *ngIf=\"isLoadingResults\">\r\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n  </div>\r\n  <div class=\"button-row\">\r\n    <a mat-flat-button color=\"primary\" [routerLink]=\"['/category']\"><mat-icon>list</mat-icon></a>\r\n  </div>\r\n  <mat-card class=\"example-card\">\r\n    <form [formGroup]=\"categoryForm\" (ngSubmit)=\"onFormSubmit()\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Category Name\" formControlName=\"catName\"\r\n                [errorStateMatcher]=\"matcher\">\r\n        <mat-error>\r\n          <span *ngIf=\"!categoryForm.get('catName').valid && categoryForm.get('catName').touched\">Please enter Category Name</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <textarea matInput placeholder=\"Category Desc\" formControlName=\"catDesc\"\r\n                [errorStateMatcher]=\"matcher\"></textarea>\r\n        <mat-error>\r\n          <span *ngIf=\"!categoryForm.get('catDesc').valid && categoryForm.get('catDesc').touched\">Please enter Category Description</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Category Image URL\" formControlName=\"catImgUrl\"\r\n                [errorStateMatcher]=\"matcher\">\r\n        <mat-error>\r\n          <span *ngIf=\"!categoryForm.get('catImgUrl').valid && categoryForm.get('catImgUrl').touched\">Please enter Category Image URL</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <ckeditor matCkeditor placehoder=\"Category Content\" formControlName=\"catContent\"></ckeditor>\r\n        <mat-error>\r\n          <span *ngIf=\"!categoryForm.get('catContent').valid && categoryForm.get('catContent').touched\">Please enter Category Description</span>\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <div class=\"button-row\">\r\n        <button type=\"submit\" [disabled]=\"!categoryForm.valid\" mat-flat-button color=\"primary\"><mat-icon>save</mat-icon></button>\r\n      </div>\r\n    </form>\r\n  </mat-card>\r\n</div>\r\n";
      /***/
    },

    /***/
    "kWWo":
    /*!********************************************!*\
      !*** ./src/app/navbar/navbar.component.ts ***!
      \********************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function kWWo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "CO2p");
      /* harmony import */


      var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./navbar.component.scss */
      "l2CK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_services/auth.service */
      "7Vn+");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(authenticate) {
          _classCallCheck(this, NavbarComponent);

          this.authenticate = authenticate;
          this.navbarCollapsed = true;
        }

        _createClass(NavbarComponent, [{
          key: "toggleNavbarCollapsing",
          value: function toggleNavbarCollapsing() {
            this.navbarCollapsed = !this.navbarCollapsed;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.auth = this.authenticate.isAuthenticated();
          }
        }, {
          key: "login",
          value: function login() {
            this.auth = false;
          }
        }, {
          key: "logout",
          value: function logout() {
            this.auth = true;
            this.authenticate.logout();
            console.log("user login out successfully");
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      };

      NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-navbar',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NavbarComponent);
      /***/
    },

    /***/
    "kjkU":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function kjkU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"header m-5 pt-5\">\r\n    <div class=\"container\">\r\n      \r\n    </div>\r\n</div>\r\n\r\n\r\n";
      /***/
    },

    /***/
    "l2CK":
    /*!**********************************************!*\
      !*** ./src/app/navbar/navbar.component.scss ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function l2CK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".navbar {\n  padding: 1em 1em 1em 1em;\n}\n.navbar .container .sarkblog-logo {\n  height: 69px;\n  width: 200px;\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n.navbar .container a {\n  color: #7f7f7f;\n  font-size: 18px;\n}\n.navbar .container .navbar-brand {\n  color: #0061f2;\n  letter-spacing: 2px;\n  font-size: 2em;\n  font-weight: 500;\n}\n.navbar .container .navbar-nav {\n  padding: 1em 0em 0em 2em;\n}\n.navbar .container .nav-button {\n  background-color: #01ba94;\n  margin: 0.2em 1em 1em 1em;\n  border-radius: 27px;\n}\n.navbar .container .nav-button button {\n  color: #fff;\n  font-size: 1em;\n  font-weight: 500;\n  letter-spacing: 2px;\n}\n.navbar .container .nav-button button i {\n  margin-left: 5px;\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5hdmJhci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzdHlsZVxcfnZhcmlhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx3QkFBQTtBQUFKO0FBRUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUVJO0VBQ0ksY0NUTztFRFVQLGVBQUE7QUFBUjtBQUVJO0VBQ0ksY0NWTTtFRFdOLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQVI7QUFFSTtFQUNJLHdCQUFBO0FBQVI7QUFFSTtFQUNJLHlCQ2xCTztFRG1CUCx5QkFBQTtFQUNBLG1CQUFBO0FBQVI7QUFDUTtFQUNJLFdDekJHO0VEMEJILGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ1o7QUFBWTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUVoQiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9hc3NldHMvc3R5bGUvfnZhcmlhYmxlLnNjc3MnO1xyXG4ubmF2YmFyIHtcclxuICAgIHBhZGRpbmc6IDFlbSAxZW0gMWVtIDFlbTtcclxuLmNvbnRhaW5lciB7XHJcbiAgICAuc2Fya2Jsb2ctbG9nbyB7XHJcbiAgICAgICAgaGVpZ2h0OiA2OXB4O1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeUNvbG9yO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIC5uYXZiYXItYnJhbmQge1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeUJsdWU7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDsgXHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIC5uYXZiYXItbmF2IHtcclxuICAgICAgICBwYWRkaW5nOiAxZW0gMGVtIDBlbSAyZW07XHJcbiAgICB9XHJcbiAgICAubmF2LWJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnlHcmVlbjtcclxuICAgICAgICBtYXJnaW46IDAuMmVtIDFlbSAxZW0gMWVtIDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyN3B4O1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeVdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxufSIsIlxyXG5cclxuJHByaW1hcnlDb2xvcjogIzdmN2Y3ZjtcclxuJHByaW1hcnlXaGl0ZTogI2ZmZjtcclxuJHByaW1hcnlCbGFjazogIzAwMDtcclxuJHByaW1hcnlCbHVlOiAjMDA2MWYyO1xyXG4kcHJpbWFyeUdyZWVuOiAjMDFiYTk0O1xyXG4kcHJpbWFyeVRlYWw6ICMwNWFiOWY7XHJcbiRwcmltYXJ5RGFyazojMWYyZDQxO1xyXG4kc2Vjb25kYXJ5V2hpdGU6ICNhN2FiYjM7XHJcbiRzZWNvbmRhcnlEYXJrOiAjYTBhN2IwO1xyXG4kc2Vjb25kYXJ5Q29sb3I6ICMzMDQwNjk7XHJcbiRwcmltYXJ5R3JheTogIzhlOTVhMDtcclxuJGxpZ2h0Qmx1ZTogIzAwN2JjNzsiXX0= */";
      /***/
    },

    /***/
    "pUeC":
    /*!**********************************************!*\
      !*** ./src/app/footer/footer.component.scss ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function pUeC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".svg-border-rounded {\n  color: #1f2d41 !important;\n}\n\n.clip-path {\n  margin-top: 0;\n  width: 100%;\n}\n\nfooter {\n  background: #1f2d41;\n  width: 100%;\n}\n\nfooter .footer-top {\n  margin-top: -7em !important;\n}\n\nfooter .footer-banner {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 8em 0 0;\n  color: #a7abb3;\n}\n\nfooter .footer-banner h3 {\n  font-size: 1.3em;\n  padding: 0.8em 0;\n  font-weight: 500;\n  letter-spacing: 2px;\n}\n\nfooter .footer-banner ul li {\n  list-style-type: none;\n  text-align: left;\n  line-height: 1.5;\n}\n\nfooter .footer-logo {\n  color: #fff;\n}\n\nfooter .footer-logo h3 {\n  font-size: 2em;\n  padding: 0;\n  margin: 0;\n}\n\nfooter .footer-logo p {\n  color: #a7abb3;\n  font-size: 15px;\n}\n\nfooter .footer-logo .footer-social i {\n  margin-right: 0.7em;\n  font-size: 1.4em;\n}\n\nfooter .footer-bottom {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 7em 1em -1em;\n  border-top: 1px solid #7f7f7f;\n}\n\nfooter .footer-bottom p {\n  margin-left: 2em;\n  padding: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzdHlsZVxcfnZhcmlhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx5QkFBQTtBQURKOztBQW9CQTtFQUNJLGFBQUE7RUFFQSxXQUFBO0FBbEJKOztBQXFCQTtFQUNJLG1CQ3JCUztFRHNCVCxXQUFBO0FBbEJKOztBQW1CSTtFQUNJLDJCQUFBO0FBakJSOztBQW1CSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0MvQlM7QURjakI7O0FBa0JRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFoQlo7O0FBbUJZO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBakJoQjs7QUFxQkk7RUFDSSxXQ3JETztBRGtDZjs7QUFvQlE7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFsQlo7O0FBb0JRO0VBQ0ksY0N0REs7RUR1REwsZUFBQTtBQWxCWjs7QUFxQlk7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FBbkJoQjs7QUF1Qkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtBQXJCUjs7QUFzQlE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFwQloiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3N0eWxlL352YXJpYWJsZS5zY3NzJztcclxuXHJcbi5zdmctYm9yZGVyLXJvdW5kZWQge1xyXG4gICAgY29sb3I6ICRwcmltYXJ5RGFyayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyAucGFnZS1oZWFkZXItZGFyayB7XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjJkNDE7XHJcbi8vIH1cclxuLy8gLnBhZ2UtaGVhZGVyIHtcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgIHBhZGRpbmctdG9wOiAwO1xyXG4vLyAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbi8vIH1cclxuLy8gLmJnLWltZy1jb3ZlciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlO1xyXG4vLyAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuLy8gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbi8vICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjgpLCByZ2JhKDAsIDAsIDAsIDAuNykpLCB1cmwoJy4uLy4uL2Fzc2V0cy9zdHlsZS9jbGFzc2ljLTIwMjgwMTNfOTYwXzcyMC5wbmcnKTtcclxuLy8gICAgIGJhY2tncm91bmQ6ICRzZWNvbmRhcnlXaGl0ZTtcclxuLy8gfVxyXG4uY2xpcC1wYXRoIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAvLyBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gICAgIGNsaXAtcGF0aDogcG9seWdvbig0MSUgMjIlLCA1NSUgMjQlLCA2OSUgMjElLCA4MiUgMTUlLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDAsIDE4JSAxMyUsIDMxJSAxOSUpO1xyXG59XHJcbmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeURhcms7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5mb290ZXItdG9wIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtN2VtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyLWJhbm5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiA4ZW0gMCAwO1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5V2hpdGU7XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjhlbSAwO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvb3Rlci1sb2dvIHtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnlXaGl0ZTtcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeVdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXItc29jaWFsIHtcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuN2VtO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5mb290ZXItYm90dG9tIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDdlbSAxZW0gLTFlbTtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHByaW1hcnlDb2xvcjtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMS41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJcclxuXHJcbiRwcmltYXJ5Q29sb3I6ICM3ZjdmN2Y7XHJcbiRwcmltYXJ5V2hpdGU6ICNmZmY7XHJcbiRwcmltYXJ5QmxhY2s6ICMwMDA7XHJcbiRwcmltYXJ5Qmx1ZTogIzAwNjFmMjtcclxuJHByaW1hcnlHcmVlbjogIzAxYmE5NDtcclxuJHByaW1hcnlUZWFsOiAjMDVhYjlmO1xyXG4kcHJpbWFyeURhcms6IzFmMmQ0MTtcclxuJHNlY29uZGFyeVdoaXRlOiAjYTdhYmIzO1xyXG4kc2Vjb25kYXJ5RGFyazogI2EwYTdiMDtcclxuJHNlY29uZGFyeUNvbG9yOiAjMzA0MDY5O1xyXG4kcHJpbWFyeUdyYXk6ICM4ZTk1YTA7XHJcbiRsaWdodEJsdWU6ICMwMDdiYzc7Il19 */";
      /***/
    },

    /***/
    "qMKO":
    /*!*************************************************************!*\
      !*** ./src/app/post/post-details/post-details.component.ts ***!
      \*************************************************************/

    /*! exports provided: PostDetailsComponent */

    /***/
    function qMKO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostDetailsComponent", function () {
        return PostDetailsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_post_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./post-details.component.html */
      "/1Pu");
      /* harmony import */


      var _post_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./post-details.component.scss */
      "s/Hl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/post.service */
      "5p0G");

      var PostDetailsComponent = /*#__PURE__*/function () {
        function PostDetailsComponent(route, api, router) {
          _classCallCheck(this, PostDetailsComponent);

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

        _createClass(PostDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getPostDetails(this.route.snapshot.params.id);
          }
        }, {
          key: "getPostDetails",
          value: function getPostDetails(id) {
            var _this36 = this;

            this.api.getPost(id).subscribe(function (data) {
              _this36.post = data;
              _this36.post.id = data._id;
              console.log(_this36.post);
              _this36.isLoadingResults = false;
            });
          }
        }, {
          key: "deletePost",
          value: function deletePost(id) {
            var _this37 = this;

            this.isLoadingResults = true;
            this.api.deletePost(id).subscribe(function (res) {
              _this37.isLoadingResults = false;

              _this37.router.navigate(['/post']);
            }, function (err) {
              console.log(err);
              _this37.isLoadingResults = false;
            });
          }
        }]);

        return PostDetailsComponent;
      }();

      PostDetailsComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      PostDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-post-details',
        template: _raw_loader_post_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_post_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PostDetailsComponent);
      /***/
    },

    /***/
    "s/Hl":
    /*!***************************************************************!*\
      !*** ./src/app/post/post-details/post-details.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function sHl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "uj5D":
    /*!*****************************************************!*\
      !*** ./src/app/post/post-add/post-add.component.ts ***!
      \*****************************************************/

    /*! exports provided: MyErrorStateMatcher, PostAddComponent */

    /***/
    function uj5D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function () {
        return MyErrorStateMatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostAddComponent", function () {
        return PostAddComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_post_add_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./post-add.component.html */
      "+0qy");
      /* harmony import */


      var _post_add_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./post-add.component.scss */
      "DA75");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/post.service */
      "5p0G");
      /* harmony import */


      var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_services/category.service */
      "AfT/"); //import { PostService } from '../../post.service';

      /** Error when invalid control is dirty, touched, or submitted. */


      var MyErrorStateMatcher = /*#__PURE__*/function () {
        function MyErrorStateMatcher() {
          _classCallCheck(this, MyErrorStateMatcher);
        }

        _createClass(MyErrorStateMatcher, [{
          key: "isErrorState",
          value: function isErrorState(control, form) {
            var isSubmitted = form && form.submitted;
            return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
          }
        }]);

        return MyErrorStateMatcher;
      }();

      var PostAddComponent = /*#__PURE__*/function () {
        function PostAddComponent(router, api, catApi, formBuilder) {
          _classCallCheck(this, PostAddComponent);

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

        _createClass(PostAddComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
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
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit() {
            var _this38 = this;

            this.isLoadingResults = true;
            this.api.addPost(this.postForm.value).subscribe(function (res) {
              var id = res._id;
              _this38.isLoadingResults = false;

              _this38.router.navigate(['/post/details', id]);
            }, function (err) {
              console.log(err);
              _this38.isLoadingResults = false;
            });
          }
        }, {
          key: "getCategories",
          value: function getCategories() {
            var _this39 = this;

            this.catApi.getCategories().subscribe(function (res) {
              _this39.categories = res;
              console.log(_this39.categories);
              _this39.isLoadingResults = false;
            }, function (err) {
              console.log(err);
              _this39.isLoadingResults = false;
            });
          }
        }]);

        return PostAddComponent;
      }();

      PostAddComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"]
        }, {
          type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }];
      };

      PostAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-post-add',
        template: _raw_loader_post_add_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_post_add_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PostAddComponent);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth/login/login.component */
      "bsvf");
      /* harmony import */


      var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./auth/register/register.component */
      "ZGml");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _details_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./details/details.component */
      "9R8I");
      /* harmony import */


      var _category_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./category/category.component */
      "clsX");
      /* harmony import */


      var _post_post_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./post/post.component */
      "fQWx");
      /* harmony import */


      var _category_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./category/category-details/category-details.component */
      "Y6QS");
      /* harmony import */


      var _category_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./category/category-add/category-add.component */
      "6PNY");
      /* harmony import */


      var _category_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./category/category-edit/category-edit.component */
      "fv54");
      /* harmony import */


      var _post_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./post/post-details/post-details.component */
      "qMKO");
      /* harmony import */


      var _post_post_add_post_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./post/post-add/post-add.component */
      "uj5D");
      /* harmony import */


      var _post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./post/post-edit/post-edit.component */
      "vrb6");
      /* harmony import */


      var _bycategory_bycategory_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./bycategory/bycategory.component */
      "EPmy");
      /* harmony import */


      var _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./admin/admin.component */
      "TRGY");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _blog_blog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./blog/blog.component */
      "LgBW");
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./contact/contact.component */
      "bzTf");
      /* harmony import */


      var _auth_login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./auth/login-admin/login-admin.component */
      "0ydo");
      /* harmony import */


      var _authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./_authGuard/auth.guard */
      "LoHQ");

      var routes = [{
        path: 'header',
        component: _header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"]
      }, {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        data: {
          title: 'Blog Home'
        }
      }, {
        path: 'admin',
        canActivate: [_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]],
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["AdminComponent"],
        data: {
          title: 'Blog Admin'
        }
      }, {
        path: 'bycategory/:id',
        component: _bycategory_bycategory_component__WEBPACK_IMPORTED_MODULE_15__["BycategoryComponent"],
        data: {
          title: 'Post by Category'
        }
      }, {
        path: 'details/:id',
        component: _details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"],
        data: {
          title: 'Show Post Details'
        }
      }, {
        path: 'blog',
        component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_18__["BlogComponent"],
        data: {
          title: 'Show All Blogs '
        }
      }, {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_19__["ContactComponent"],
        data: {
          title: 'Show contact page '
        }
      }, {
        path: 'category',
        canActivate: [_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]],
        component: _category_category_component__WEBPACK_IMPORTED_MODULE_7__["CategoryComponent"],
        data: {
          title: 'Category'
        }
      }, {
        path: 'category/details/:id',
        canActivate: [_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]],
        component: _category_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_9__["CategoryDetailsComponent"],
        data: {
          title: 'Category Details'
        }
      }, {
        path: 'category/add',
        canActivate: [_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]],
        component: _category_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_10__["CategoryAddComponent"],
        data: {
          title: 'Category Add'
        }
      }, {
        path: 'category/edit/:id',
        canActivate: [_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]],
        component: _category_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_11__["CategoryEditComponent"],
        data: {
          title: 'Category Edit'
        }
      }, {
        path: 'post',
        canActivate: [_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]],
        component: _post_post_component__WEBPACK_IMPORTED_MODULE_8__["PostComponent"],
        data: {
          title: 'Post'
        }
      }, {
        path: 'post/details/:id',
        canActivate: [_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]],
        component: _post_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_12__["PostDetailsComponent"],
        data: {
          title: 'Post Details'
        }
      }, {
        path: 'post/add',
        canActivate: [_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]],
        component: _post_post_add_post_add_component__WEBPACK_IMPORTED_MODULE_13__["PostAddComponent"],
        data: {
          title: 'Post Add'
        }
      }, {
        path: 'post/edit/:id',
        canActivate: [_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]],
        component: _post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_14__["PostEditComponent"],
        data: {
          title: 'Post Edit'
        }
      }, // ],
      //},
      {
        path: 'login',
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        data: {
          title: 'Login'
        }
      }, {
        path: 'login-admin',
        component: _auth_login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_20__["LoginAdminComponent"],
        data: {
          title: 'Login-user'
        }
      }, {
        path: 'register',
        component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
        data: {
          title: 'Register'
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "vrb6":
    /*!*******************************************************!*\
      !*** ./src/app/post/post-edit/post-edit.component.ts ***!
      \*******************************************************/

    /*! exports provided: MyErrorStateMatcher, PostEditComponent */

    /***/
    function vrb6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function () {
        return MyErrorStateMatcher;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostEditComponent", function () {
        return PostEditComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_post_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./post-edit.component.html */
      "eIu9");
      /* harmony import */


      var _post_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./post-edit.component.scss */
      "CRz0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/post.service */
      "5p0G");
      /* harmony import */


      var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_services/category.service */
      "AfT/");
      /** Error when invalid control is dirty, touched, or submitted. */


      var MyErrorStateMatcher = /*#__PURE__*/function () {
        function MyErrorStateMatcher() {
          _classCallCheck(this, MyErrorStateMatcher);
        }

        _createClass(MyErrorStateMatcher, [{
          key: "isErrorState",
          value: function isErrorState(control, form) {
            var isSubmitted = form && form.submitted;
            return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
          }
        }]);

        return MyErrorStateMatcher;
      }();

      var PostEditComponent = /*#__PURE__*/function () {
        function PostEditComponent(router, route, api, catApi, formBuilder) {
          _classCallCheck(this, PostEditComponent);

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

        _createClass(PostEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
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
        }, {
          key: "getPost",
          value: function getPost(id) {
            var _this40 = this;

            this.api.getPost(id).subscribe(function (data) {
              _this40.id = data._id;

              _this40.postForm.setValue({
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
        }, {
          key: "getCategories",
          value: function getCategories() {
            var _this41 = this;

            this.catApi.getCategories().subscribe(function (res) {
              _this41.categories = res;
              console.log(_this41.categories);
              _this41.isLoadingResults = false;
            }, function (err) {
              console.log(err);
              _this41.isLoadingResults = false;
            });
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit() {
            var _this42 = this;

            this.isLoadingResults = true;
            this.api.updatePost(this.id, this.postForm.value).subscribe(function (res) {
              var id = res._id;
              _this42.isLoadingResults = false;

              _this42.router.navigate(['/post/details', id]);
            }, function (err) {
              console.log(err);
              _this42.isLoadingResults = false;
            });
          }
        }, {
          key: "postDetails",
          value: function postDetails() {
            this.router.navigate(['/post/details', this.id]);
          }
        }]);

        return PostEditComponent;
      }();

      PostEditComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"]
        }, {
          type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }];
      };

      PostEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-post-edit',
        template: _raw_loader_post_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_post_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PostEditComponent);
      /***/
    },

    /***/
    "x+LS":
    /*!*******************************************!*\
      !*** ./src/app/_services/home.service.ts ***!
      \*******************************************/

    /*! exports provided: HomeService */

    /***/
    function xLS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeService", function () {
        return HomeService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var apiUrl = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl, "api/public/"); // const apiUrl = 'api/public/';

      var HomeService = /*#__PURE__*/function () {
        function HomeService(http) {
          _classCallCheck(this, HomeService);

          this.http = http;
          this._pageCount = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
          this.count$ = this._pageCount.asObservable();
          this.counter = 0;
        }

        _createClass(HomeService, [{
          key: "incrementPageCount",
          value: function incrementPageCount() {
            var _this43 = this;

            var pageCount = this.af.object('/pageCount/').$ref.ref.transaction(function (count) {
              _this43.counter = count;
              return _this43.counter + 1;
            }).then(function (data) {
              return data.snapshot.node_.value_;
            });
            return pageCount;
          }
        }, {
          key: "getCategories",
          value: function getCategories() {
            var _this44 = this;

            return this.http.get(apiUrl + 'category').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
              return _this44.log('fetched Categories');
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCategories', [])));
          }
        }, {
          key: "getPosts",
          value: function getPosts() {
            var _this45 = this;

            return this.http.get(apiUrl + 'post').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
              return _this45.log('fetched Posts');
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getPosts', [])));
          }
        }, {
          key: "getPostsByCategory",
          value: function getPostsByCategory(id) {
            var _this46 = this;

            return this.http.get(apiUrl + 'bycategory/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
              return _this46.log('fetched Posts');
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getPosts', [])));
          }
        }, {
          key: "getPost",
          value: function getPost(id) {
            return this.http.get(apiUrl + 'post/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
              return console.log("fetched post by id=".concat(id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getPost id=".concat(id))));
          }
        }, {
          key: "handleError",
          value: function handleError() {
            var _this47 = this;

            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              console.error(error); // log to console instead

              _this47.log("".concat(operation, " failed: ").concat(error.message));

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
            };
          }
        }, {
          key: "log",
          value: function log(message) {
            console.log(message);
          }
        }]);

        return HomeService;
      }();

      HomeService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      HomeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], HomeService);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".app-banner {\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWJhbm5lciB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! hammerjs */
      "yLV6");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "zu2e":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function zu2e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <div class=\"example-container mat-elevation-z8\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n      <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\r\n        <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n      </div>\r\n      <h2 class=\"m-3 text-center\">Login Form</h2>\r\n      \r\n      <mat-card class=\"example-card\">\r\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onFormSubmit(loginForm.value)\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"username\" [errorStateMatcher]=\"matcher\">\r\n            <mat-error>\r\n              <span *ngIf=\"!loginForm.get('username').valid && loginForm.get('username').touched\">Please enter your\r\n                username</span>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\"\r\n              [errorStateMatcher]=\"matcher\">\r\n            <mat-error>\r\n              <span *ngIf=\"!loginForm.get('password').valid && loginForm.get('password').touched\">Please enter your\r\n                password</span>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <div class=\"custom-control custom-checkbox mb-3\">\r\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\r\n            <label class=\"custom-control-label\" for=\"customCheck1\">Remember password</label>\r\n          </div>\r\n          <div class=\"button-row\">\r\n            <button type=\"submit\" [disabled]=\"!loginForm.valid\" mat-flat-button color=\"primary\">Login</button>\r\n          </div>\r\n          <div class=\"button-row\">\r\n            <button class=\"button-register\" type=\"button\" mat-flat-button color=\"primary\"\r\n              (click)=\"register()\">Register</button>\r\n          </div>\r\n        </form>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n<div class=\"example-container mat-elevation-z8\">\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-10 col-xl-9 mx-auto\">\r\n      <div class=\"card card-signin flex-row my-5\">\r\n        <div class=\"card-img-left  d-md-flex\">\r\n          <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n        </div>\r\n        <h2 class=\"text-center\">Login Form</h2>\r\n        <div class=\"card-body\">\r\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onFormSubmit(loginForm.value)\" class=\"form-signin\">\r\n            <div class=\"form-label-group\">\r\n              <input type=\"email\" placeholder=\"Email\" formControlName=\"username\" [errorStateMatcher]=\"matcher\" class=\"form-control\">\r\n              <span *ngIf=\"!loginForm.get('username').valid && loginForm.get('username').touched\">Please enter your\r\n                username</span>\r\n            </div>\r\n\r\n            <hr>\r\n           \r\n            <div class=\"form-label-group\">\r\n              <input type=\"password\" placeholder=\"Password\" formControlName=\"password\"\r\n              [errorStateMatcher]=\"matcher\">\r\n              <div>\r\n                <span *ngIf=\"!loginForm.get('password').valid && loginForm.get('password').touched\">Please enter your\r\n                  password</span>\r\n              </div>\r\n            </div>\r\n            \r\n            <hr>\r\n\r\n           <div class=\"button-row\">\r\n            <button type=\"submit\" [disabled]=\"!loginForm.valid\" mat-flat-button color=\"primary\">Login</button>\r\n          </div>\r\n          <div class=\"button-row\">\r\n            <button class=\"button-register\" type=\"button\" mat-flat-button color=\"primary\"\r\n              (click)=\"register()\">Register</button>\r\n          </div>\r\n            <hr class=\"my-4\">\r\n            <button class=\"btn btn-lg btn-google btn-block text-uppercase\" type=\"submit\"><i class=\"fab fa-google mr-2\"></i> Sign up with Google</button>\r\n            <button class=\"btn btn-lg btn-facebook btn-block text-uppercase\" type=\"submit\"><i class=\"fab fa-facebook-f mr-2\"></i> Sign up with Facebook</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map