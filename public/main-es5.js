function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"example-container mat-elevation-z8\">\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-subtitle>Populate the Category and Post data by click on the Menu.</mat-card-subtitle>\n    </mat-card-header>\n  \n  </mat-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <mat-toolbar>\n  <button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n  <mat-menu #menu=\"matMenu\">\n    <div *ngIf=\"loginStatus === false\">\n      <button mat-menu-item [routerLink]=\"['/']\">Home</button>\n      <button mat-menu-item *ngFor=\"let cat of categories\" [routerLink]=\"['/bycategory/', cat._id]\">{{cat.catName}}</button>\n    </div>\n    <div *ngIf=\"loginStatus === true\">\n      <button mat-menu-item [routerLink]=\"['/admin']\">Home</button>\n      <button mat-menu-item [routerLink]=\"['/category']\">Category</button>\n      <button mat-menu-item [routerLink]=\"['/post']\">Post</button>\n      <button mat-menu-item (click)=\"logout()\">Logout</button>\n    </div>\n  </mat-menu>\n</mat-toolbar> -->\n<div class=\"app-banner\">\n<div class=\"\">\n    <app-navbar></app-navbar>\n    <router-outlet></router-outlet>\n    \n  </div>\n  <app-footer></app-footer>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"container-fluid\">\n    <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n  <div class=\"example-loading-shade\"\n       *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <h2 class=\"m-3 text-center\">Login Form</h2>\n  <mat-card class=\"example-card\">\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onFormSubmit(loginForm.value)\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"username\"\n               [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!loginForm.get('username').valid && loginForm.get('username').touched\">Please enter your username</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\"\n               [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!loginForm.get('password').valid && loginForm.get('password').touched\">Please enter your password</span>\n        </mat-error>\n      </mat-form-field>\n      <div class=\"custom-control custom-checkbox mb-3\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n        <label class=\"custom-control-label\" for=\"customCheck1\">Remember password</label>\n      </div>\n      <div class=\"button-row\">\n        <button  type=\"submit\" [disabled]=\"!loginForm.valid\" mat-flat-button color=\"primary\">Login</button>\n      </div>\n      <div class=\"button-row\">\n        <button class=\"button-register\" type=\"button\" mat-flat-button color=\"primary\" (click)=\"register()\">Register</button>\n      </div>\n    </form>\n  </mat-card>\n</div>\n</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"container-fluid\">\n    <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n  <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <h2 class=\"m-3 text-center\">Registration Form</h2>\n  <mat-card class=\"example-card\">\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onFormSubmit(registerForm.value)\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"fullName\" placeholder=\"Full Name\" formControlName=\"fullName\"\n          [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!registerForm.get('fullName').valid && registerForm.get('fullName').touched\">Please enter your\n            Full Name</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"username\" [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!registerForm.get('username').valid && registerForm.get('username').touched\">Please enter your\n            username</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!registerForm.get('password').valid && registerForm.get('password').touched\">Please enter your\n            password</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"text\" matInput placeholder=\"Bio(breif discription)\" formControlName=\"bio\" [errorStateMatcher]=\"matcher\" autocomplete=\"off\">\n        <mat-error>\n          <span *ngIf=\"!registerForm.get('bio').valid && registerForm.get('bio').touched\">User Brief description\n            (bio)</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"userProfileUrl\" matInput placeholder=\"userProfile URL\" formControlName=\"userProfileUrl\"\n          [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!registerForm.get('userProfileUrl').valid && registerForm.get('userProfileUrl').touched\">Please\n            enter userPrifile Image URL</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"userProfileReference\" matInput placeholder=\"userProfileReference\" formControlName=\"userProfileReference\"\n          [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!registerForm.get('userProfileReference').valid && registerForm.get('userProfileReference').touched\">Please enter\n            userProfile image Reference</span>\n        </mat-error>\n      </mat-form-field>\n      <div class=\"button-row\">\n        <button  type=\"submit\" [disabled]=\"!registerForm.valid\" mat-flat-button color=\"primary\">Register</button>\n      </div>\n      <div class=\"button-row\">\n        <button class=\"button-register\" type=\"submit\" mat-flat-button color=\"primary\">Login</button>\n      </div>\n    </form>\n  </mat-card>\n</div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlogBlogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header data-v-22791a1b=\"\" data-v-0cc2979f=\"\" class=\"page-header bg-img-cover overlay overlay-60 page-header-dark\"\n  data-v-7930edba=\"\">\n  <div class=\"container\">\n    <div data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"page-header-content\">\n      <div data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"container text-center\">\n        <div data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"row justify-content-center\">\n          <div data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"col-lg-8\">\n            <h1 data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"page-header-title mb-3\">Publications</h1>\n            <p data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"page-header-text mb-0\">Browse articles, keep up\n              to date, and\n              learn more on our blog!</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <span data-v-c5f3fcf8=\"\" data-v-22791a1b=\"\">\n    <div data-v-c5f3fcf8=\"\" class=\"svg-border-rounded text-light\">\n      <svg data-v-c5f3fcf8=\"\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 144.54 17.34\" preserveAspectRatio=\"none\"\n        fill=\"currentColor\">\n        <path data-v-c5f3fcf8=\"\" d=\"M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0\">\n        </path>\n      </svg>\n    </div>\n  </span>\n</header>\n<section class=\"blog-header py-10 bg-light\">\n  <div class=\"container\">\n    <a data-v-0cc2979f=\"\" data-v-0e51b078=\"\" href=\"javascript:void(0);\"\n      class=\"card post-preview post-preview-featured lift mb-5\">\n      <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"row no-gutters\">\n        <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"col-lg-5\">\n          <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-featured-img\">\n            <!-- <img src=\"../../assets/style/computer.jpeg\" alt=\"\"> -->\n          </div>\n        </div>\n        <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"col-lg-7\">\n          <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-body\">\n            <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"py-5\">\n              <h5 data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-title\">Boots on the Ground, Inclusive\n                Thought Provoking Ideas</h5>\n              <p data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-text\">Empower communities and energize\n                engaging ideas; scale and impact do-gooders while disruptring industries. Venture\n                philanthropy benefits corporations and people by moving the needle.</p>\n            </div>\n            <hr data-v-0cc2979f=\"\" data-v-0e51b078=\"\">\n            <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta\">\n              <img data-v-0cc2979f=\"\" data-v-0e51b078=\"\" src=\"https://source.unsplash.com/QAB-WJcbgJk/100x100\"\n                class=\"post-preview-meta-img\">\n              <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details\">\n                <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details-name\">\n                  Valerie Luna</div>\n                <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details-date\">Feb 5\n                  · 6 min read</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </a>\n  </div>\n</section>\n\n<section class=\"blog-banner\">\n  <h2 class=\"recent-blog text-center m-5\">Recent Blogs</h2>\n  <div class=\"container mb-4\">\n    <div class=\"row justify-content-center align-item-center\">\n   <div class=\"col-md-4 col-sm-5\">\n        <input type=\"text\" [(ngModel)]=\"selectedUser\"  type=\"text\" placeholder=\"Filter Post by title\">\n      </div>\n      \n      <div class=\"col-md-6 col-sm-5\">\n        <mat-select>Search By Category \n          <mat-option *ngFor=\"let cat of categories\" [value]=\"cat._id\">\n            {{cat.catName}}\n          </mat-option>\n        </mat-select>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n        <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n      </div>\n      <div *ngFor=\"let post of posts | filter:selectedUser | paginate: {id : 'listing_pagination',\n      itemsPerPage:6,\n      currentPage: page,\n      totalItems: totalRecords}\" data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"col-md-6 col-xl-4 mb-5\">\n      \n        <a data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card post-preview lift h-100\">\n          <img data-v-0cc2979f=\"\" data-v-0e51b078=\"\" src=\"{{post.postImgUrl}}\" alt=\"...\" class=\"card-img-top\">\n          <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-body\">\n            <a [routerLink]=\"['/details/', post._id]\">\n              <h5 data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-title\">{{post.postTitle}}</h5>\n            </a>\n            <p data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-text\">{{post.postDesc}}</p>\n          </div>\n          <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-footer\">\n            <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta\">\n              <ng-container *ngFor=\"let user of users\">\n                <!-- <img data-v-0cc2979f=\"\" data-v-0e51b078=\"\" src=\"{{user.userProfileUrl}}\" \n                class=\"post-preview-meta-img\"> -->\n              </ng-container>\n              <!-- <img data-v-0cc2979f=\"\" data-v-0e51b078=\"\" src=\"{{user.userProfileReference}}\" \n              class=\"post-preview-meta-img\"> -->\n              <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details\">\n                <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details-name\">{{post.postAuthor}}</div>\n                <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details-date\">{{post.updated | date: 'dd MMM yyyy'}}</div>\n              </div>\n              <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-update\">\n                <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details-name\">\n                  {{post.readTime}} min read\n                </div>\n              </div>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n  \n</section>\n\n<section class=\"pagination-banner\">\n  <div>\n    <pagination-controls id=\"listing_pagination\" maxSize=\"6\" directionalLinks=\"true\" (pageChange)=\"page = $event\"></pagination-controls>\n  </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bycategory/bycategory.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bycategory/bycategory.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBycategoryBycategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n        *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <mat-grid-list cols=\"3\">\n    <mat-grid-tile *ngFor=\"let post of posts\">\n      <mat-card class=\"example-card\" [routerLink]=\"['/details/', post._id]\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>{{post.postTitle}}</mat-card-title>\n          <mat-card-subtitle>{{post.updated}}</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image src=\"{{post.postImgUrl}}\" alt=\"Photo of a Shiba Inu\">\n        <mat-card-content>\n          {{post.postDesc}}\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-add/category-add.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-add/category-add.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoryCategoryAddCategoryAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n        *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <div class=\"button-row\">\n    <a mat-flat-button color=\"primary\" [routerLink]=\"['/category']\"><mat-icon>list</mat-icon></a>\n  </div>\n  <mat-card class=\"example-card\">\n    <form [formGroup]=\"categoryForm\" (ngSubmit)=\"onFormSubmit()\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Category Name\" formControlName=\"catName\"\n                [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!categoryForm.get('catName').valid && categoryForm.get('catName').touched\">Please enter Category Name</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <textarea matInput placeholder=\"Category Desc\" formControlName=\"catDesc\"\n                [errorStateMatcher]=\"matcher\"></textarea>\n        <mat-error>\n          <span *ngIf=\"!categoryForm.get('catDesc').valid && categoryForm.get('catDesc').touched\">Please enter Category Description</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Category Image URL\" formControlName=\"catImgUrl\"\n                [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!categoryForm.get('catImgUrl').valid && categoryForm.get('catImgUrl').touched\">Please enter Category Image URL</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <ckeditor matCkeditor placehoder=\"Category Content\" formControlName=\"catContent\"></ckeditor>\n        <mat-error>\n          <span *ngIf=\"!categoryForm.get('catContent').valid && categoryForm.get('catContent').touched\">Please enter Category Description</span>\n        </mat-error>\n      </mat-form-field>\n      <div class=\"button-row\">\n        <button type=\"submit\" [disabled]=\"!categoryForm.valid\" mat-flat-button color=\"primary\"><mat-icon>save</mat-icon></button>\n      </div>\n    </form>\n  </mat-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-details/category-details.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-details/category-details.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoryCategoryDetailsCategoryDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n        *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <div class=\"button-row\">\n    <a mat-flat-button color=\"primary\" [routerLink]=\"['/category']\"><mat-icon>list</mat-icon></a>\n  </div>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title><h2>{{category.catName}}</h2></mat-card-title>\n      <mat-card-subtitle>{{category.catDesc}}</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image src=\"{{category.catImgUrl}}\" alt=\"{{category.catName}}\">\n    <mat-card-content>\n      <dl>\n        <dt>Category Content:</dt>\n        <dd [innerHTML]=\"category.catContent\"></dd>\n        <dt>Updated At:</dt>\n        <dd>{{category.updated | date}}</dd>\n      </dl>\n    </mat-card-content>\n    <mat-card-actions>\n      <a mat-flat-button color=\"primary\" [routerLink]=\"['/category/edit', category?.id  || 'all']\"><mat-icon>edit</mat-icon></a>\n      <a mat-flat-button color=\"warn\" (click)=\"deleteCategory(category.id)\"><mat-icon>delete</mat-icon></a>\n    </mat-card-actions>\n  </mat-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-edit/category-edit.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-edit/category-edit.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoryCategoryEditCategoryEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n        *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <div class=\"button-row\">\n    <a mat-flat-button color=\"primary\" (click)=\"categoryDetails()\"><mat-icon>list</mat-icon></a>\n  </div>\n  <mat-card class=\"example-card\">\n    <form [formGroup]=\"categoryForm\" (ngSubmit)=\"onFormSubmit()\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Category Name\" formControlName=\"catName\"\n                [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!categoryForm.get('catName').valid && categoryForm.get('catName').touched\">Please enter Category Name</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <textarea matInput placeholder=\"Category Desc\" formControlName=\"catDesc\"\n                [errorStateMatcher]=\"matcher\"></textarea>\n        <mat-error>\n          <span *ngIf=\"!categoryForm.get('catDesc').valid && categoryForm.get('catDesc').touched\">Please enter Category Description</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Category Image URL\" formControlName=\"catImgUrl\"\n                [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!categoryForm.get('catImgUrl').valid && categoryForm.get('catImgUrl').touched\">Please enter Category Image URL</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <ckeditor matCkeditor placehoder=\"Category Content\" formControlName=\"catContent\"></ckeditor>\n        <mat-error>\n          <span *ngIf=\"!categoryForm.get('catContent').valid && categoryForm.get('catContent').touched\">Please enter Category Description</span>\n        </mat-error>\n      </mat-form-field>\n      <div class=\"button-row\">\n        <button type=\"submit\" [disabled]=\"!categoryForm.valid\" mat-flat-button color=\"primary\"><mat-icon>save</mat-icon></button>\n      </div>\n    </form>\n  </mat-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoryCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n        *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"d-flex\">\n      \n      <h1 class=\"mr-3\">\n        <a routerLink=\"/post\">Posts</a>\n      </h1>\n      <h1 class=\"ml-3\">\n        <a routerLink=\"/category\">Category</a>\n      </h1>\n    </div>\n  </div>\n\n  <div class=\"button-row\">\n    <a mat-flat-button color=\"primary\" [routerLink]=\"['add']\"><mat-icon>add</mat-icon></a>\n  </div>\n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"data\" class=\"example-table\"\n            matSort matSortActive=\"catName\" matSortDisableClear matSortDirection=\"asc\">\n\n      <!-- Category Name Column -->\n      <ng-container matColumnDef=\"catName\">\n        <th mat-header-cell *matHeaderCellDef>Category Name</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.catName}}</td>\n      </ng-container>\n\n      <!-- Category Description Column -->\n      <ng-container matColumnDef=\"catDesc\">\n        <th mat-header-cell *matHeaderCellDef>Category Description</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.catDesc}}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['details/', row._id]\"></tr>\n    </table>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"contact\">\n    <div class=\"container\">\n        <div class=\"jumbotron\">\n            <h1 class=\"m-4\">Welcome to the contact Page</h1>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDetailsDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"detail-banner\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-9 col-sm-12\">\n\n                <div class=\"main-banner\">\n\n                    <div class=\"example-container mat-elevation-z8\">\n                        <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n                            <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n                        </div>\n                        <mat-card class=\"example-card\" [routerLink]=\"['/details/', post.id]\">\n                            <mat-card-header>\n                                <!-- <div mat-card-avatar class=\"example-header-image\"></div> -->\n                                <mat-card-title class=\"post-title\">{{post.postTitle}}</mat-card-title>\n\n                                <mat-card-subtitle>{{post.postDesc}}</mat-card-subtitle>\n                            </mat-card-header>\n                            <img class=\"post-image\" mat-card-image src=\"{{post.postImgUrl}}\" alt=\"{{post.postTitle}}\">\n                            <div class=\"post-info\">\n                                <h5>Posted on:\n                                    {{post.updated | date: 'dd MMM yyyy'}},</h5>\n                                <ng-container>\n                                    <div class=\"post-info-sub d-flex\">\n                                        <p class=\"mr-4\">\n                                            <span>Author:\n                                            </span>\n                                            <strong>{{post.postAuthor}}</strong>\n                                        </p>\n                                        <p>\n                                            <i class=\"fa fa-eye mr-2\"></i>23</p>\n                                        <p>{{post.readTime}}\n                                            min Read</p>\n                                        <!-- <ng-container>\n                                            <p>{{catList.catName}}</p>\n                                        </ng-container> -->\n\n\n                                    </div>\n                                </ng-container>\n\n\n                            </div>\n                            <!-- <div class=\"content\">\n                                        <div class=\"text-contain text-center\" [innerHTML]=\"post.postContent\"></div>\n                                        </div> -->\n                            <mat-card-content [innerHTML]=\"post.postContent\"></mat-card-content>\n                            <mat-card-actions>\n                                <button mat-button>LIKE</button>\n                                <button mat-button>SHARE</button>\n                                <button mat-button>Comment</button>\n                                <button mat-button>Follow</button>\n                            </mat-card-actions>\n                        </mat-card>\n                    </div>\n                </div>\n            </div>\n            <div class=\"side-banner col-md-3 col-sm-12\">\n                <div class=\"post-share-area mb-40 item-shadow-1 \">\n                    <p>Social Accounts!</p>\n                    <ul class=\"social-default item-inline d-flex\">\n                        <li>\n                            <a href=\"https://www.facebook.com/sharer/sharer.php?u=https://www.sarkblog.com/blog\"\n                                class=\"social-button facebook\" id=\"\" title=\"\">\n                                <span class=\"fab fa-facebook\"></span>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"https://twitter.com/intent/tweet?text=Default+share+text&amp;url=https://www.sarkblog.com/blog\"\n                                class=\"social-button twitter\" id=\"\" title=\"\">\n                                <span class=\"fab fa-twitter\"></span>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"http://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.sarkblog.com/blog\"\n                                class=\"social-button linkedin\" id=\"\" title=\"\">\n                                <span class=\"fab fa-linkedin\"></span>\n                            </a>\n                        </li>\n                        <li>\n                            <a target=\"_blank\" href=\"https://wa.me/?text=https://www.sarkblog.com/blog\"\n                                class=\"social-button whatsapp\" id=\"\" title=\"\">\n                                <span class=\"fab fa-whatsapp\"></span>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n                <!-- Search Widget -->\n                <div class=\"card mb-4\">\n                    <h5 class=\"card-header\">Search</h5>\n                    <div class=\"card-body\">\n                        <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n                            <span class=\"input-group-append\">\n                                <button class=\"btn btn-secondary\" type=\"button\">Go!</button>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Categories Widget -->\n                <div class=\"card my-4\">\n                    <div class=\"trending-posts\">\n                        <div class=\"topic-border color-cod-gray mb-30\">\n                            <div class=\"topic-box-lg color-cod-gray\">Categories</div>\n                        </div>\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-6\" *ngFor=\"let cat of catList\">\n\n                                    <ul class=\"list-unstyled mb-0\">\n                                        <li>\n                                            <a href=\"#\">{{cat.catName}}</a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Side Widget -->\n                <div class=\"card my-4\">\n                    <ng-container *ngFor=\"let user of users.reverse(), let i = index\">\n                        <div *ngIf=\"i<1\" class=\"m-0 p-0 trending-posts\">\n                            <div class=\"topic-border color-cod-gray mb-30\">\n                                <div class=\"topic-box-lg color-cod-gray\">About The Author</div>\n                            </div>\n                            <div class=\"card-body \"> \n                                \n                                <div class=\"author\">\n                                    <h6 class=\"text-center\">{{user.fullName}}</h6>\n                                    <div class=\"user-img\">\n                                        <img class=\"user-image img-fluid\" src=\"{{user.userProfileUrl}}\" alt=\"{{user.username}}\">\n                                    </div>\n                                \n                                    <p>{{user.bio}}</p>\n\n                                    <div class=\"border\">\n                                        <div class=\"social-accounts\">\n                                            <h3>follow me on</h3>\n                                            <div class=\"social-icons\">\n                                                <a href=\"#\" class=\"fab fa-twitter\"></a>\n                                                <a href=\"#\" class=\"fab fa-facebook\"></a>\n                                                <a href=\"#\" class=\"fab fa-instagram\"></a>\n                                                <a href=\"#\" class=\"fab fa-whatsapp\"></a>\n                                                <a href=\"#\" class=\"fab fa-linkedin\"></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                \n\n                            </div>\n                           \n\n                            <!--  -->\n                        </div>\n                    </ng-container>\n                </div>\n\n                <div class=\"card my-4\">\n                    <div class=\"trending-posts\">\n                        <div class=\"topic-border color-cod-gray mb-30\">\n                            <div class=\"topic-box-lg color-cod-gray\">News Letter</div>\n                        </div>\n                        <div class=\"card-body\">\n                            <div class=\"sidebar-box\">\n                                <div class=\"newsletter-area\">\n                                    <h2 class=\"title-medium-light size-xl pl-30 pr-30\">Subscribe to our news letter!\n                                    </h2>\n                                    <img style=\"width:120px\" alt=\"newsletter\" class=\"lazy img-fluid m-auto mb-15 loaded\"\n                                        loading=\"lazy\" src=\"https://bproo.com/public/img/banner/newsletter.png\"\n                                        data-ll-status=\"loaded\">\n                                    <p id=\"leftSideSubscribeBox\">By receiving free stock articles and smart tutorials to\n                                        advance your\n                                        career.</p>\n                                    <form action=\"\" id=\"leftSide-form\" class=\"subscription-needs-validation1\"\n                                        novalidate=\"\">\n                                        <input type=\"hidden\" name=\"_token\"\n                                            value=\"vgo0OwcAG1jyVzJuCttQHPDeODM4oG2GMAKNr8yM\">\n                                        <div class=\"input-group stylish-input-group mb-3\">\n                                            <input type=\"text\" name=\"name\" placeholder=\"Enter your first-name\"\n                                                class=\"form-control\" required=\"\">\n                                            <div class=\"invalid-feedback\" style=\"font-size: 1.5rem;\">\n                                                Please provide your name.\n                                            </div>\n                                        </div>\n                                        <div class=\"input-group stylish-input-group\">\n                                            <input type=\"text\" name=\"email\" placeholder=\"Enter your mail\"\n                                                class=\"form-control\" required=\"\">\n                                            <div class=\"invalid-feedback\" style=\"font-size: 1.5rem;\">\n                                                Please provide a valid email.\n                                            </div>\n                                            <span class=\"input-group-addon\">\n                                                <button type=\"button\" name=\"subscribe1\">\n                                                    <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n                                                </button>\n                                            </span>\n                                        </div>\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"my-4\">\n                    <div class=\"trending-posts\">\n                        <div class=\"topic-border color-cod-gray mb-30\">\n                            <div class=\"topic-box-lg color-cod-gray\">Trending Posts</div>\n                        </div>\n                        <div class=\"card-body\">\n\n                            <tr *ngIf=\"postList.length <=0\" class=\"no-data text-center\">There is no Post added yet!>\n                            </tr>\n\n                            <div>\n                                <ng-container *ngFor=\"let post of postList.reverse() , let i = index;\">\n                                    <div *ngIf=\"i<3\">\n                                        <a href=\"details/{{post._id}}\">\n                                            <div class=\"d-flex trending-posts\">\n                                                <div class=\"image-post\">\n                                                    <img src=\"{{post.postImgUrl}}\" alt=\"{{post.postTitle}}\">\n                                                    <p>Posted on:\n                                                        {{post.updated | date: 'dd MMM yyyy'}}</p>\n                                                </div>\n                                                <div class=\"text-desc\">\n                                                    <p>\n                                                        <i class=\"fa fa-calendar mr-2\"></i>\n                                                        {{post.readTime}}\n                                                        Min Read</p>\n                                                    <p>{{post.postTitle}}</p>\n                                                </div>\n                                            </div>\n                                        </a>\n                                        <hr>\n                                    </div>\n                                </ng-container>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- Comments Form -->\n<section class=\"comment\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"card col-md-8 my-4\">\n                <h5 class=\"card-header\">Leave a Comment:</h5>\n                <div class=\"card-body\">\n                    <!-- <form>\n                                <div class=\"form-group\">\n                                  <textarea class=\"form-control\" class=\"form-control\" rows=\"3\"></textarea>\n                                </div>\n                                <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                              </form> -->\n                    <disqus [identifier]=\"pageId\"></disqus>\n                    <!-- <disqus [identifier]=\"pageId\" [url]=\"url\" [category]=\"catId\" [language]=\"language\" (newComment)=\"onNewComment($event)\" (paginate)=\"onPaginate($event)\"></disqus> -->\n\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- <noscript>Please enable JavaScript to view the <a href=\"https://disqus.com/?ref_noscript\">comments powered by Disqus.</a></noscript> -->\n\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div data-v-c5f3fcf8=\"\" class=\"svg-border-rounded text-dark\">\n    <svg data-v-c5f3fcf8=\"\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 144.54 17.34\" preserveAspectRatio=\"none\"\n        fill=\"currentColor\">\n        <path data-v-c5f3fcf8=\"\" d=\"M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0\"></path>\n    </svg>\n</div>\n<div class=\"clip-path\">\n    <footer class=\"py-1 footer\">\n        <div class=\"container footer-top\">\n            <div class=\"col-md-12\">\n                <div class=\"footer-banner\">\n                    <div class=\"row\">\n                    <div class=\"footer-logo col-md-3 col-sm-6\">\n                        <h3><a href=\"\">SarkBlog</a></h3>\n                        <p>We Moves With Technology</p>\n                        <div class=\"d-flex footer-social\">\n                            <i class=\"fab fa-instagram\"></i>\n                            <i class=\"fab fa-facebook\"></i>\n                            <i class=\"fab fa-github\"></i>\n                            <i class=\"fab fa-twitter\"></i>\n                        </div>\n                    </div>\n                    <div class=\"product-area col-md-3 col-sm-6\">\n                        <ul>\n                            <h3>Products</h3>\n                            <li>Landing</li>\n                            <li>Transportation</li>\n                            <li>Real estate</li>\n                            <li>Construction</li>\n                        </ul>\n                    </div>\n               \n               \n                    <div class=\"technical-area col-md-3 col-sm-6\">\n                        <ul>\n                            <h3>Technical</h3>\n                            <li>Landing</li>\n                            <li>Transportation</li>\n                            <li>Real estate</li>\n                            <li>Construction</li>\n                        </ul>\n                    </div>\n                    <div class=\"legal-area col-md-3 col-sm-6\">\n                        <ul>\n                            <h3>Legal</h3>\n                            <li>Landing</li>\n                            <li>Transportation</li>\n                            <li>Real estate</li>\n                            <li>Construction</li>\n                        </ul>\n                    </div>\n                </div>\n                </div>\n            </div>\n            </div>\n            <div class=\"footer-bottom\">\n                <p class=\"m-0 text-center text-white\">Copyright &copy; SarKBlog 2020</p>\n                <p class=\"m-0 text-center text-white\">Privacy Policy · Terms & Conditions</p>\n            </div>\n        \n    </footer>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header m-5 pt-5\">\n    <div class=\"container\">\n      \n    </div>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header data-v-22791a1b=\"\" data-v-0cc2979f=\"\" class=\"page-header bg-img-cover overlay overlay-60 page-header-dark\"\n  data-v-7930edba=\"\">\n  <div class=\"container\">\n    <div data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"page-header-content\">\n      <div data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"container text-center\">\n        <div data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"row justify-content-center\">\n          <div data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"page-first col-lg-8\">\n            <h1 data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"page-header-title mb-3\">Publications</h1>\n            <p data-v-0cc2979f=\"\" data-v-22791a1b=\"\" class=\"page-header-text mb-0\">Browse articles, keep up to date, and\n              learn more on our blog!</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <span data-v-c5f3fcf8=\"\" data-v-22791a1b=\"\">\n    <div data-v-c5f3fcf8=\"\" class=\"svg-border-rounded text-light\">\n      <svg data-v-c5f3fcf8=\"\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 144.54 17.34\" preserveAspectRatio=\"none\"\n        fill=\"currentColor\">\n        <path data-v-c5f3fcf8=\"\" d=\"M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0\"></path>\n      </svg>\n    </div>\n  </span>\n</header>\n\n<section data-v-0e51b078=\"\" data-v-6dd90c3b=\"\" class=\"py-10 bg-white\" data-v-7930edba=\"\">\n  <h3 class=\"feature-banner text-center m-4\">Our Features</h3>\n  <div data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" class=\"container\">\n    <div data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" class=\"item-banner row text-center\">\n      <div data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" class=\"col-lg-4 mb-5 mb-lg-0 feature-text\">\n        <div data-v-6dd90c3b=\"\" data-v-0e51b078=\"\"\n          class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\">\n          <svg data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24px\" height=\"24px\"\n            viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\n            stroke-linejoin=\"round\" class=\"feather feather-droplet\">\n            <path data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" d=\"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z\">\n\n            </path>\n          </svg>\n        </div>\n        <h2 data-v-6dd90c3b=\"\" data-v-0e51b078=\"\">Design</h2>\n        <p data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" class=\"mb-0\">We start by creating a set of brand guidelines and\n          standards</p>\n      </div>\n      <div data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" class=\"col-lg-4 mb-5 mb-lg-0  feature-text\">\n        <div data-v-6dd90c3b=\"\" data-v-0e51b078=\"\"\n          class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\">\n          <svg data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24px\" height=\"24px\"\n            viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\n            stroke-linejoin=\"round\" class=\"feather feather-code\">\n            <polyline data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" points=\"16 18 22 12 16 6\"></polyline>\n            <polyline data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" points=\"8 6 2 12 8 18\"></polyline>\n          </svg></div>\n        <h2 data-v-6dd90c3b=\"\" data-v-0e51b078=\"\">Develop</h2>\n        <p data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" class=\"mb-0\">\n          Our award winning development team creates personalized digital experiences\n        </p>\n      </div>\n      <div data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" class=\"col-lg-4 feature-text\">\n        <div data-v-6dd90c3b=\"\" data-v-0e51b078=\"\"\n          class=\"icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4\">\n          <svg data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24px\" height=\"24px\"\n            viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\n            stroke-linejoin=\"round\" class=\"feather feather-truck\">\n            <rect data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" x=\"1\" y=\"3\" width=\"15\" height=\"13\"> </rect>\n            <polygon data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" points=\"16 8 20 8 23 11 23 16 16 16 16 8\"></polygon>\n            <circle data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" cx=\"5.5\" cy=\"18.5\" r=\"2.5\"> </circle>\n            <circle data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" cx=\"18.5\" cy=\"18.5\" r=\"2.5\"></circle>\n          </svg>\n        </div>\n        <h2 data-v-6dd90c3b=\"\" data-v-0e51b078=\"\">Deliver</h2>\n        <p data-v-6dd90c3b=\"\" data-v-0e51b078=\"\" class=\"mb-0\">\n          Our products are created on time, and to your exact specifications\n        </p>\n      </div>\n    </div>\n\n\n    <span data-v-c5f3fcf8=\"\" data-v-0e51b078=\"\">\n      <div data-v-c5f3fcf8=\"\" class=\"svg-border-rounded text-light\">\n        <svg data-v-c5f3fcf8=\"\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 144.54 17.34\" preserveAspectRatio=\"none\"\n          fill=\"currentColor\">\n          <path data-v-c5f3fcf8=\"\" d=\"M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0\"></path>\n        </svg>\n      </div>\n    </span>\n  </div>\n</section>\n\n<section class=\"blog-banner\">\n  <h2 class=\"recent-blog text-center m-5\">Recent Blogs</h2>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n        <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n      </div>\n      <div *ngFor=\"let post of posts | paginate: {id : 'listing_pagination',\n      itemsPerPage:3,\n      currentPage: page,\n      totalItems: totalRecords}\" data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"col-md-6 col-xl-4 mb-5\">\n        <a data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card post-preview lift h-100\">\n          <img data-v-0cc2979f=\"\" data-v-0e51b078=\"\" src=\"{{post.postImgUrl}}\" alt=\"...\" class=\"card-img-top\">\n          <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-body\">\n            <a [routerLink]=\"['/details/', post._id]\">\n              <h5 data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-title\">{{post.postTitle}}</h5>\n            </a>\n            <p data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-text\">{{post.postDesc}}</p>\n          </div>\n          <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"card-footer\">\n            <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta\">\n              <img data-v-0cc2979f=\"\" data-v-0e51b078=\"\" src=\"https://source.unsplash.com/e12wQLAjQi0/100x100\"\n                class=\"post-preview-meta-img\">\n              <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details\">\n                <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details-name\">{{post.postAuthor}}</div>\n                <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details-date\">{{post.readTime}} min read\n                </div>\n              </div>\n              <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-update\">\n                <div data-v-0cc2979f=\"\" data-v-0e51b078=\"\" class=\"post-preview-meta-details-name\">{{post.updated | date: 'dd MMM yyyy'}}</div>\n\n              </div>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- <div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\" *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <mat-grid-list cols=\"3\">\n    <mat-grid-tile *ngFor=\"let post of posts\">\n      <mat-card class=\"example-card\" [routerLink]=\"['/details/', post._id]\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>{{post.postTitle}}</mat-card-title>\n          <mat-card-subtitle>{{post.updated}}</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image src=\"{{post.postImgUrl}}\" alt=\"{{post.postTitle}}\">\n        <mat-card-content>\n          {{post.postDesc}}\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " \n <div class=\"navbar-banner\">\n   <nav class=\"navbar fixed-top navbar-expand-md navbar-dark bg-light\"> \n    <div class=\"container\">\n\n      <a class=\"navbar-brand\" href=\"#\">\n        <img class=\"img-fluid sarkblog-logo\" src=\"../../assets/style/sark (1).png\" alt=\"\">\n      </a>\n      <button class=\"bg-info navbar-toggler navbar-toggler-right\" (click)=\"toggleNavbarCollapsing()\" \n      type=\"button\" data-toggle=\"collapse\" \n      data-target=\"#navbarResponsive\" \n      aria-controls=\"navbarResponsive\" \n      aria-expanded=\"false\" \n      aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" [class.collapse]=\"navbarCollapsed\" id=\"navbarResponsive\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/home\" routerlinkactive=\"active\">Home</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/blog\" routerlinkactive=\"active\">Blog</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/contact\" routerlinkactive=\"active\">Contact</a>\n          </li>\n          <li class=\"nav-button\">\n            <button class=\"btn\" routerLink=\"/login\">Join Us<i class=\"fas fa-arrow-right\"></i></button>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-add/post-add.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-add/post-add.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostPostAddPostAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"pt-5 example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n        *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <div class=\"button-row\">\n    <a mat-flat-button color=\"primary\" [routerLink]=\"['/post']\"><mat-icon>list</mat-icon></a>\n  </div>\n  <mat-card class=\"example-card\">\n    <form [formGroup]=\"postForm\" (ngSubmit)=\"onFormSubmit()\">\n      <mat-form-field class=\"example-full-width\">\n        <mat-select formControlName=\"category\" [errorStateMatcher]=\"matcher\">\n          <mat-option *ngFor=\"let cat of categories\" [value]=\"cat._id\">\n            {{cat.catName}}\n          </mat-option>\n        </mat-select>\n        <mat-error>\n          <span *ngIf=\"!postForm.get('category').valid && postForm.get('category').touched\">Please select Category</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Post Title\" formControlName=\"postTitle\"\n                [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!postForm.get('postTitle').valid && postForm.get('postTitle').touched\">Please enter Post Title</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Post Author\" formControlName=\"postAuthor\"\n                [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!postForm.get('postAuthor').valid && postForm.get('postAuthor').touched\">Please enter Post Author</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <textarea matInput placeholder=\"Post Desc\" formControlName=\"postDesc\"\n                [errorStateMatcher]=\"matcher\"></textarea>\n        <mat-error>\n          <span *ngIf=\"!postForm.get('postDesc').valid && postForm.get('postDesc').touched\">Please enter Post Description</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n          <ckeditor matCkeditor placeholder=\"Post Content\" formControlName=\"postContent\"></ckeditor>\n          <mat-error>\n            <span *ngIf=\"!postForm.get('postContent').valid && postForm.get('postContent').touched\">Please enter Post Content</span>\n          </mat-error>\n        </mat-form-field>\n      <div class=\"button-row\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Post Reference\" formControlName=\"postReference\"\n                [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!postForm.get('postReference').valid && postForm.get('postReference').touched\">Please enter Post Ref</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Post Image URL\" formControlName=\"postImgUrl\"\n                  [errorStateMatcher]=\"matcher\">\n          <mat-error>\n            <span *ngIf=\"!postForm.get('postImgUrl').valid && postForm.get('postImgUrl').touched\">Please enter Post Image URL</span>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Post Read Time in minutes\" formControlName=\"readTime\"\n                  [errorStateMatcher]=\"matcher\">\n          <mat-error>\n            <span *ngIf=\"!postForm.get('readTime').valid && postForm.get('readTime').touched\">Please enter Post readTime Duration</span>\n          </mat-error>\n        </mat-form-field>\n        <button type=\"submit\"  mat-flat-button color=\"primary\"><mat-icon>save</mat-icon></button>\n      </div>\n    </form>\n  </mat-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-details/post-details.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-details/post-details.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostPostDetailsPostDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n        *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <div class=\"button-row\">\n    <a mat-flat-button color=\"primary\" [routerLink]=\"['/post']\"><mat-icon>list</mat-icon></a>\n  </div>\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title><h2>{{post.postTitle}}</h2></mat-card-title>\n      <p>Created by: {{post.postAuthor}}, {{post.created | date}}, updated: {{post.updated | date}}</p>\n      <mat-card-subtitle>{{post.postDesc}}</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image src=\"{{post.postImgUrl}}\" alt=\"{{post.postTitle}}\">\n    <mat-card-content>\n      <dl>\n        <dt>Post Content:</dt>\n        <dd [innerHTML]=\"post.postContent\"></dd>\n        <dt>Reference:</dt>\n        <dd>{{post.postReference}}</dd>\n      </dl>\n    </mat-card-content>\n    <mat-card-actions>\n      <a mat-flat-button color=\"primary\" [routerLink]=\"['/post/edit', post.id]\"><mat-icon>edit</mat-icon></a>\n      <a mat-flat-button color=\"warn\" (click)=\"deletePost(post.id)\"><mat-icon>delete</mat-icon></a>\n    </mat-card-actions>\n  </mat-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-edit/post-edit.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-edit/post-edit.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostPostEditPostEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"example-container mat-elevation-z8\">\n    <div class=\"example-loading-shade\"\n          *ngIf=\"isLoadingResults\">\n      <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n    </div>\n    <div class=\"button-row\">\n      <a mat-flat-button color=\"primary\" (click)=\"postDetails()\"><mat-icon>list</mat-icon></a>\n    </div>\n    <mat-card class=\"example-card\">\n      <form [formGroup]=\"postForm\" (ngSubmit)=\"onFormSubmit()\">\n        <mat-form-field class=\"example-full-width\">\n          <mat-select formControlName=\"category\" [errorStateMatcher]=\"matcher\">\n            <mat-option *ngFor=\"let cat of categories\" [value]=\"cat._id\">\n              {{cat.catName}}\n            </mat-option>\n          </mat-select>\n          <mat-error>\n            <span *ngIf=\"!postForm.get('category').valid && postForm.get('category').touched\">Please select Category</span>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Post Title\" formControlName=\"postTitle\"\n                  [errorStateMatcher]=\"matcher\">\n          <mat-error>\n            <span *ngIf=\"!postForm.get('postTitle').valid && postForm.get('postTitle').touched\">Please enter Post Title</span>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Post Author\" formControlName=\"postAuthor\"\n                  [errorStateMatcher]=\"matcher\">\n          <mat-error>\n            <span *ngIf=\"!postForm.get('postAuthor').valid && postForm.get('postAuthor').touched\">Please enter Post Author</span>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <textarea matInput placeholder=\"Post Desc\" formControlName=\"postDesc\"\n                  [errorStateMatcher]=\"matcher\"></textarea>\n          <mat-error>\n            <span *ngIf=\"!postForm.get('postDesc').valid && postForm.get('postDesc').touched\">Please enter Post Description</span>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n            <ckeditor matCkeditor placehoder=\"Post Content\" formControlName=\"postContent\"></ckeditor>\n            <mat-error>\n              <span *ngIf=\"!postForm.get('postContent').valid && postForm.get('postContent').touched\">Please enter Post Content</span>\n            </mat-error>\n          </mat-form-field>\n        <div class=\"button-row\">\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Post Reference\" formControlName=\"postReference\"\n                  [errorStateMatcher]=\"matcher\">\n          <mat-error>\n            <span *ngIf=\"!postForm.get('postReference').valid && postForm.get('postReference').touched\">Please enter Post Ref</span>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Post Image URL\" formControlName=\"postImgUrl\"\n                    [errorStateMatcher]=\"matcher\">\n            <mat-error>\n              <span *ngIf=\"!postForm.get('postImgUrl').valid && postForm.get('postImgUrl').touched\">Please enter Post Image URL</span>\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Post Read Time in minutes\" formControlName=\"readTime\"\n                    [errorStateMatcher]=\"matcher\">\n            <mat-error>\n              <span *ngIf=\"!postForm.get('readTime').valid && postForm.get('readTime').touched\">Please enter Post readTime Duration</span>\n            </mat-error>\n          </mat-form-field>\n          <button type=\"submit\" [disabled]=\"!postForm.valid\" mat-flat-button color=\"primary\"><mat-icon>save</mat-icon></button>\n        </div>\n      </form>\n    </mat-card>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostPostComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n        *ngIf=\"isLoadingResults\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n  </div>\n  <div class=\"container\">\n    <div class=\"d-flex\">\n      \n      <h1 class=\"mr-3\">\n        <a routerLink=\"/post\">Posts</a>\n      </h1>\n      <h1 class=\"ml-3\">\n        <a routerLink=\"/category\">Category</a>\n      </h1>\n    </div>\n  </div>\n  <div class=\"button-row\">\n    <a mat-flat-button color=\"primary\" [routerLink]=\"['add']\"><mat-icon>add</mat-icon></a>\n  </div>\n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"data\" class=\"example-table\"\n            matSort matSortActive=\"postTitle\" matSortDisableClear matSortDirection=\"asc\">\n\n      <!-- Post Name Column -->\n      <ng-container matColumnDef=\"postTitle\">\n        <th mat-header-cell *matHeaderCellDef>Post Title</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.postTitle}}</td>\n      </ng-container>\n\n      <!-- Post Description Column -->\n      <ng-container matColumnDef=\"postDesc\">\n        <th mat-header-cell *matHeaderCellDef>Post Description</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.postDesc}}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['details/', row._id]\"></tr>\n    </table>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    /***/

  },

  /***/
  "./src/app/admin/admin.component.scss":
  /*!********************************************!*\
    !*** ./src/app/admin/admin.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin.component.ts":
  /*!******************************************!*\
    !*** ./src/app/admin/admin.component.ts ***!
    \******************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

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

    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin.component.scss */
      "./src/app/admin/admin.component.scss"))["default"]]
    })], AdminComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth/login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth/register/register.component */
    "./src/app/auth/register/register.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _details_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./details/details.component */
    "./src/app/details/details.component.ts");
    /* harmony import */


    var _category_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./category/category.component */
    "./src/app/category/category.component.ts");
    /* harmony import */


    var _post_post_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./post/post.component */
    "./src/app/post/post.component.ts");
    /* harmony import */


    var _category_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./category/category-details/category-details.component */
    "./src/app/category/category-details/category-details.component.ts");
    /* harmony import */


    var _category_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./category/category-add/category-add.component */
    "./src/app/category/category-add/category-add.component.ts");
    /* harmony import */


    var _category_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./category/category-edit/category-edit.component */
    "./src/app/category/category-edit/category-edit.component.ts");
    /* harmony import */


    var _post_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./post/post-details/post-details.component */
    "./src/app/post/post-details/post-details.component.ts");
    /* harmony import */


    var _post_post_add_post_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./post/post-add/post-add.component */
    "./src/app/post/post-add/post-add.component.ts");
    /* harmony import */


    var _post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./post/post-edit/post-edit.component */
    "./src/app/post/post-edit/post-edit.component.ts");
    /* harmony import */


    var _bycategory_bycategory_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./bycategory/bycategory.component */
    "./src/app/bycategory/bycategory.component.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./blog/blog.component */
    "./src/app/blog/blog.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");

    var routes = [{
      path: 'header',
      component: _header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"]
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
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
      component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_17__["AdminComponent"],
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
      component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_19__["BlogComponent"],
      data: {
        title: 'Show All Blogs '
      }
    }, {
      path: 'contact',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_20__["ContactComponent"],
      data: {
        title: 'Show contact page '
      }
    }, {
      path: 'category',
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
      component: _category_category_component__WEBPACK_IMPORTED_MODULE_7__["CategoryComponent"],
      data: {
        title: 'Category'
      }
    }, {
      path: 'category/details/:id',
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
      component: _category_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_9__["CategoryDetailsComponent"],
      data: {
        title: 'Category Details'
      }
    }, {
      path: 'category/add',
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
      component: _category_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_10__["CategoryAddComponent"],
      data: {
        title: 'Category Add'
      }
    }, {
      path: 'category/edit/:id',
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
      component: _category_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_11__["CategoryEditComponent"],
      data: {
        title: 'Category Edit'
      }
    }, {
      path: 'post',
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
      component: _post_post_component__WEBPACK_IMPORTED_MODULE_8__["PostComponent"],
      data: {
        title: 'Post'
      }
    }, {
      path: 'post/details/:id',
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
      component: _post_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_12__["PostDetailsComponent"],
      data: {
        title: 'Post Details'
      }
    }, {
      path: 'post/add',
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
      component: _post_post_add_post_add_component__WEBPACK_IMPORTED_MODULE_13__["PostAddComponent"],
      data: {
        title: 'Post Add'
      }
    }, {
      path: 'post/edit/:id',
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
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
      path: 'register',
      component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
      data: {
        title: 'Register'
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app-banner {\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhY3Rvci9EZXNrdG9wL3Byb2plY3Qvc2Fya2Jsb2cgbWVhbiBzdGFjay9jbGllbnQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWJhbm5lciB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59IiwiLmFwcC1iYW5uZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.service */
    "./src/app/home.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth.service.ts");

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
          var _this = this;

          this.authService.isLoggedIn.subscribe(function (status) {
            console.log(status);

            if (status === true) {
              _this.loginStatus = true;
            } else {
              _this.loginStatus = false;
            }
          });
          this.api.getCategories().subscribe(function (res) {
            _this.categories = res;
            console.log(_this.categories);
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this2 = this;

          this.authService.logout().subscribe(function (res) {
            _this2.router.navigate(['/']);
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth/login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth/register/register.component */
    "./src/app/auth/register/register.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _details_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./details/details.component */
    "./src/app/details/details.component.ts");
    /* harmony import */


    var _category_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./category/category.component */
    "./src/app/category/category.component.ts");
    /* harmony import */


    var _post_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./post/post.component */
    "./src/app/post/post.component.ts");
    /* harmony import */


    var _category_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./category/category-details/category-details.component */
    "./src/app/category/category-details/category-details.component.ts");
    /* harmony import */


    var _category_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./category/category-add/category-add.component */
    "./src/app/category/category-add/category-add.component.ts");
    /* harmony import */


    var _category_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./category/category-edit/category-edit.component */
    "./src/app/category/category-edit/category-edit.component.ts");
    /* harmony import */


    var _post_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./post/post-details/post-details.component */
    "./src/app/post/post-details/post-details.component.ts");
    /* harmony import */


    var _post_post_add_post_add_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./post/post-add/post-add.component */
    "./src/app/post/post-add/post-add.component.ts");
    /* harmony import */


    var _post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./post/post-edit/post-edit.component */
    "./src/app/post/post-edit/post-edit.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./interceptors/token.interceptor */
    "./src/app/interceptors/token.interceptor.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _bycategory_bycategory_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./bycategory/bycategory.component */
    "./src/app/bycategory/bycategory.component.ts");
    /* harmony import */


    var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ckeditor4-angular */
    "./node_modules/ckeditor4-angular/fesm2015/ckeditor4-angular.js");
    /* harmony import */


    var mat_contenteditable__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! mat-contenteditable */
    "./node_modules/mat-contenteditable/fesm2015/mat-contenteditable.js");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./blog/blog.component */
    "./src/app/blog/blog.component.ts");
    /* harmony import */


    var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! jw-angular-pagination */
    "./node_modules/jw-angular-pagination/fesm2015/jw-angular-pagination.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var ngx_disqus__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ngx-disqus */
    "./node_modules/ngx-disqus/fesm2015/ngx-disqus.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/ng2-search-filter.js");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts"); // import { NgSelectModule } from '@ng-select/ng-select';
    // import { NgSelectConfig } from '@ng-select/ng-select';
    //  import { ɵs } from '@ng-select/ng-select';
    // import { ConsoleService } from '@ng-select/ng-select/lib/console.service';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_8__["DetailsComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_9__["CategoryComponent"], _post_post_component__WEBPACK_IMPORTED_MODULE_10__["PostComponent"], _category_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_11__["CategoryDetailsComponent"], _category_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_12__["CategoryAddComponent"], _category_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_13__["CategoryEditComponent"], _post_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_14__["PostDetailsComponent"], _post_post_add_post_add_component__WEBPACK_IMPORTED_MODULE_15__["PostAddComponent"], _post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_16__["PostEditComponent"], _bycategory_bycategory_component__WEBPACK_IMPORTED_MODULE_22__["BycategoryComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_25__["AdminComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_26__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_27__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_28__["HeaderComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_29__["BlogComponent"], jw_angular_pagination__WEBPACK_IMPORTED_MODULE_30__["JwPaginationComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_35__["ContactComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatOptionModule"], ckeditor4_angular__WEBPACK_IMPORTED_MODULE_23__["CKEditorModule"], mat_contenteditable__WEBPACK_IMPORTED_MODULE_24__["MatContenteditableModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_31__["NgxPaginationModule"], ngx_disqus__WEBPACK_IMPORTED_MODULE_32__["DisqusModule"].forRoot('sarkblog'), _angular_common__WEBPACK_IMPORTED_MODULE_33__["CommonModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_34__["Ng2SearchPipeModule"]],
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
  "./src/app/auth.service.ts":
  /*!*********************************!*\
    !*** ./src/app/auth.service.ts ***!
    \*********************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var apiUrl = 'https://sarkblog.herokuapp.com/api/auth/'; //const apiUrl = 'api/auth/';

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
          var _this3 = this;

          return this.http.get(apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
            return _this3.log('fetched Users');
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
          var _this4 = this;

          return this.http.post(apiUrl + 'login', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
            _this4.isLoggedIn.emit(true);

            _this4.loggedInStatus = true;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('login', [])));
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this5 = this;

          return this.http.post(apiUrl + 'logout', {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
            _this5.isLoggedIn.emit(false);

            _this5.loggedInStatus = false;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('logout', [])));
        }
      }, {
        key: "register",
        value: function register(data) {
          var _this6 = this;

          return this.http.post(apiUrl + 'register', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
            return _this6.log('login');
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('login', [])));
        }
      }, {
        key: "handleError",
        value: function handleError() {
          var _this7 = this;

          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            console.error(error); // log to console instead

            _this7.log("".concat(operation, " failed: ").concat(error.message));

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

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AuthService.prototype, "isLoggedIn", void 0);
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");

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
          if (this.authService.loggedInStatus) {
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
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.scss":
  /*!*************************************************!*\
    !*** ./src/app/auth/login/login.component.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-container {\n  background-color: #007bc7;\n  margin-top: 10em;\n  height: 60vh;\n}\n.example-container h2 {\n  color: #fff;\n  font-size: 2.5em;\n  font-weight: 600;\n}\n.example-container .example-card {\n  background-color: #fff;\n  border-radius: 22px;\n  padding: 2em;\n}\n.example-container .example-card .button-row button {\n  width: 100%;\n  padding: 5px;\n  border-radius: 27px;\n  font-size: 1.3em;\n  font-weight: 700;\n}\n.example-container .example-card .button-row .button-register {\n  background-color: #01ba94;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhY3Rvci9EZXNrdG9wL3Byb2plY3Qvc2Fya2Jsb2cgbWVhbiBzdGFjay9jbGllbnQvc3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZmFjdG9yL0Rlc2t0b3AvcHJvamVjdC9zYXJrYmxvZyBtZWFuIHN0YWNrL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlL352YXJpYWJsZS5zY3NzIiwic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJDUVE7RURQUixnQkFBQTtFQUNBLFlBQUE7QUVESjtBRkVJO0VBQ0ksV0NOTztFRE9QLGdCQUFBO0VBQ0EsZ0JBQUE7QUVBUjtBRkVJO0VBQ0ksc0JDWE87RURZUCxtQkFBQTtFQUNBLFlBQUE7QUVBUjtBRkdRO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUVEUjtBRkdRO0VBQ0kseUJDckJHO0FDb0JmIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zdHlsZS9+dmFyaWFibGUuc2Nzcyc7XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Qmx1ZTtcbiAgICBtYXJnaW4tdG9wOiAxMGVtO1xuICAgIGhlaWdodDogNjB2aDtcbiAgICBoMiB7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeVdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICAuZXhhbXBsZS1jYXJke1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeVdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICAgICAgICBwYWRkaW5nOiAyZW07XG4gICAgICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC40KSwgcmdiYSgwLDAsMCwwLjIpKSwgdXJsKCcuLi8uLi8uLi9hc3NldHMvc3R5bGUvcGhvdG8tMTU2ODk5MjY4ODA2NS01MzZhYWQ4YTEyZjYuanBlZycpO1xuICAgIC5idXR0b24tcm93IHtcbiAgICAgICAgYnV0dG9ue1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyN3B4O1xuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b24tcmVnaXN0ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnlHcmVlbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB9XG59IiwiJHByaW1hcnlDb2xvcjogIzdmN2Y3ZjtcbiRwcmltYXJ5V2hpdGU6ICNmZmY7XG4kcHJpbWFyeUJsYWNrOiAjMDAwO1xuJHByaW1hcnlCbHVlOiAjMDA2MWYyO1xuJHByaW1hcnlHcmVlbjogIzAxYmE5NDtcbiRwcmltYXJ5VGVhbDogIzA1YWI5ZjtcbiRwcmltYXJ5RGFyazojMWYyZDQxO1xuJHNlY29uZGFyeVdoaXRlOiAjYTdhYmIzO1xuJHNlY29uZGFyeURhcms6ICNhMGE3YjA7XG4kc2Vjb25kYXJ5Q29sb3I6ICMzMDQwNjk7XG4kcHJpbWFyeUdyYXk6ICM4ZTk1YTA7XG4kbGlnaHRCbHVlOiAjMDA3YmM3OyIsIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiYzc7XG4gIG1hcmdpbi10b3A6IDEwZW07XG4gIGhlaWdodDogNjB2aDtcbn1cbi5leGFtcGxlLWNvbnRhaW5lciBoMiB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIuNWVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmV4YW1wbGUtY29udGFpbmVyIC5leGFtcGxlLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBwYWRkaW5nOiAyZW07XG59XG4uZXhhbXBsZS1jb250YWluZXIgLmV4YW1wbGUtY2FyZCAuYnV0dG9uLXJvdyBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAyN3B4O1xuICBmb250LXNpemU6IDEuM2VtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmV4YW1wbGUtY29udGFpbmVyIC5leGFtcGxlLWNhcmQgLmJ1dHRvbi1yb3cgLmJ1dHRvbi1yZWdpc3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMWJhOTQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: MyErrorStateMatcher, LoginComponent */

  /***/
  function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
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
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "onFormSubmit",
        value: function onFormSubmit(form) {
          var _this8 = this;

          this.authService.login(form).subscribe(function (res) {
            console.log(res);

            if (res.token) {
              localStorage.setItem('token', res.token);

              _this8.router.navigate(['category']);
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

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/auth/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/auth/register/register.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/auth/register/register.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthRegisterRegisterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-container {\n  background-color: #007bc7;\n  margin-top: 7em;\n  height: 85vh;\n}\n.example-container h2 {\n  color: #fff;\n  font-size: 2.5em;\n  font-weight: 600;\n}\n.example-container .example-card {\n  background-color: #fff;\n  border-radius: 12px;\n  padding: 0.4em 1em;\n}\n.example-container .example-card mat-form-field {\n  padding: 2px 15px;\n}\n.example-container .example-card .button-row button {\n  width: 100%;\n  padding: 5px;\n  border-radius: 27px;\n  font-size: 1.3em;\n  font-weight: 600;\n}\n.example-container .example-card .button-row .button-register {\n  background-color: #01ba94;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhY3Rvci9EZXNrdG9wL3Byb2plY3Qvc2Fya2Jsb2cgbWVhbiBzdGFjay9jbGllbnQvc3JjL2FwcC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZmFjdG9yL0Rlc2t0b3AvcHJvamVjdC9zYXJrYmxvZyBtZWFuIHN0YWNrL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlL352YXJpYWJsZS5zY3NzIiwic3JjL2FwcC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJDUVE7RURQUixlQUFBO0VBQ0EsWUFBQTtBRURKO0FGRUk7RUFDSSxXQ05PO0VET1AsZ0JBQUE7RUFDQSxnQkFBQTtBRUFSO0FGRUk7RUFDSSxzQkNYTztFRFlQLG1CQUFBO0VBQ0Esa0JBQUE7QUVBUjtBRkNRO0VBQ0ksaUJBQUE7QUVDWjtBRkVZO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUVBWjtBRkVZO0VBQ0kseUJDdkJEO0FDdUJmIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zdHlsZS9+dmFyaWFibGUuc2Nzcyc7XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0Qmx1ZTtcbiAgICBtYXJnaW4tdG9wOiA3ZW07XG4gICAgaGVpZ2h0OiA4NXZoO1xuICAgIGgyIHtcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5V2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIC5leGFtcGxlLWNhcmQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeVdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBwYWRkaW5nOiAwLjRlbSAxZW07XG4gICAgICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b24tcm93IHtcbiAgICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjdweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJ1dHRvbi1yZWdpc3RlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnlHcmVlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIkcHJpbWFyeUNvbG9yOiAjN2Y3ZjdmO1xuJHByaW1hcnlXaGl0ZTogI2ZmZjtcbiRwcmltYXJ5QmxhY2s6ICMwMDA7XG4kcHJpbWFyeUJsdWU6ICMwMDYxZjI7XG4kcHJpbWFyeUdyZWVuOiAjMDFiYTk0O1xuJHByaW1hcnlUZWFsOiAjMDVhYjlmO1xuJHByaW1hcnlEYXJrOiMxZjJkNDE7XG4kc2Vjb25kYXJ5V2hpdGU6ICNhN2FiYjM7XG4kc2Vjb25kYXJ5RGFyazogI2EwYTdiMDtcbiRzZWNvbmRhcnlDb2xvcjogIzMwNDA2OTtcbiRwcmltYXJ5R3JheTogIzhlOTVhMDtcbiRsaWdodEJsdWU6ICMwMDdiYzc7IiwiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JjNztcbiAgbWFyZ2luLXRvcDogN2VtO1xuICBoZWlnaHQ6IDg1dmg7XG59XG4uZXhhbXBsZS1jb250YWluZXIgaDIge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5leGFtcGxlLWNvbnRhaW5lciAuZXhhbXBsZS1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMC40ZW0gMWVtO1xufVxuLmV4YW1wbGUtY29udGFpbmVyIC5leGFtcGxlLWNhcmQgbWF0LWZvcm0tZmllbGQge1xuICBwYWRkaW5nOiAycHggMTVweDtcbn1cbi5leGFtcGxlLWNvbnRhaW5lciAuZXhhbXBsZS1jYXJkIC5idXR0b24tcm93IGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI3cHg7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uZXhhbXBsZS1jb250YWluZXIgLmV4YW1wbGUtY2FyZCAuYnV0dG9uLXJvdyAuYnV0dG9uLXJlZ2lzdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxYmE5NDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/auth/register/register.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/auth/register/register.component.ts ***!
    \*****************************************************/

  /*! exports provided: MyErrorStateMatcher, RegisterComponent */

  /***/
  function srcAppAuthRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
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
            fullName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userProfileReference: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userProfileUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            bio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "onFormSubmit",
        value: function onFormSubmit(form) {
          var _this9 = this;

          this.authService.register(form).subscribe(function (res) {
            _this9.router.navigate(['login']);
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
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.scss */
      "./src/app/auth/register/register.component.scss"))["default"]]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/blog/blog.component.scss":
  /*!******************************************!*\
    !*** ./src/app/blog/blog.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlogBlogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-header-dark {\n  color: #fff;\n  background-color: #1f2d41;\n}\n\n.page-header {\n  position: relative;\n  padding-top: 20rem;\n  padding-bottom: 0;\n}\n\n.bg-img-cover {\n  background-position: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('photo-1568992688065-536aad8a12f6.jpeg');\n}\n\nheader .svg-border-rounded {\n  border: none;\n}\n\n.blog-header {\n  padding-top: 4em;\n  position: relative;\n}\n\n.blog-header .post-preview-featured-img {\n  height: 100%;\n  width: 100%;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('computer.jpeg');\n  background-position: 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.blog-header .bg-light {\n  background-color: #eff3f9 !important;\n}\n\n.blog-header .card.lift {\n  text-decoration: none;\n  color: inherit;\n}\n\n.blog-header .card {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 0 solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.35rem;\n}\n\n.blog-header .lift {\n  box-shadow: 0 0.15rem 1.75rem 0 rgba(31, 45, 65, 0.15);\n  transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  /* transition: transform .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out,-webkit-box-shadow .15s ease-in-out; */\n}\n\n.blog-header .no-gutters {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.blog-header .no-gutters .card-body {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 1.35rem;\n}\n\n.blog-header .no-gutters .card-body .card-title {\n  font-size: 1.75rem;\n  color: #304069;\n}\n\n.blog-header .no-gutters .card-body .card-text {\n  font-size: 1.2rem;\n  font-weight: 300;\n}\n\n.blog-header .no-gutters .card-body .post-preview-meta {\n  display: flex;\n}\n\n.blog-header .no-gutters .card-body .post-preview-meta img {\n  border-radius: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 72px;\n  width: auto;\n}\n\n.blog-header .no-gutters .card-body .post-preview-meta .post-preview-meta-details {\n  padding: 0.5em;\n}\n\n.blog-banner .recent-blog {\n  font-size: 3em;\n}\n\n.blog-banner .card-img-top {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 220px;\n  border: none;\n}\n\n.blog-banner .card-body p {\n  color: #a0a7b0;\n  font-size: 1em;\n  word-spacing: 0.2em;\n  letter-spacing: 0.01em;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.blog-banner .card-body p:hover {\n  text-decoration: none;\n}\n\n.blog-banner .card {\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.35rem;\n  text-decoration: none;\n  box-shadow: 0 -0.85rem 4.8rem 0 rgba(31, 45, 65, 0.15);\n  overflow: hidden;\n  position: relative;\n}\n\n.blog-banner .card .card-body .card-title {\n  margin-bottom: 0.75rem;\n  color: #304069;\n}\n\n.blog-banner .card .card-footer {\n  border: none;\n}\n\n.blog-banner .card .card-footer .post-preview-meta {\n  display: flex;\n  color: #8e95a0;\n}\n\n.blog-banner .card .card-footer .post-preview-meta img {\n  border-radius: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 72px;\n  width: auto;\n}\n\n.blog-banner .card .card-footer .post-preview-meta-details {\n  padding: 0.5em;\n}\n\n.blog-banner .card .card-footer .post-update {\n  display: flex;\n}\n\n.blog-banner .card .card-footer .post-update .post-preview-meta-details-name {\n  margin: 16px 1px 13px 2px;\n}\n\n.blog-banner .lift {\n  box-shadow: 0 0.15rem 1.75rem 0 rgba(31, 45, 65, 0.15);\n  /* transition: transform .15s ease-in-out,box-shadow .15s ease-in-out; */\n  transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.blog-banner .lift:hover {\n  transform: translateY(-0.33333rem);\n  box-shadow: 0 0.5rem 2rem 0 rgba(31, 45, 65, 0.25);\n}\n\n.pagination-banner .pagination-blog .page-item .page-link {\n  border-radius: 0.35rem;\n  border: none;\n  padding: 0.75rem 1rem;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.pagination-banner .page-item.active .page-link {\n  z-index: 3;\n  color: #fff;\n  background-color: #0061f2;\n  border-color: #0061f2;\n}\n\n.pagination-banner .page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #0061f2;\n  background-color: #fff;\n  border: 1px solid #d7dce3;\n}\n\n.pagination-banner .pagination-blog .page-item {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhY3Rvci9EZXNrdG9wL3Byb2plY3Qvc2Fya2Jsb2cgbWVhbiBzdGFjay9jbGllbnQvc3JjL2FwcC9ibG9nL2Jsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuc2NzcyIsIi9ob21lL2ZhY3Rvci9EZXNrdG9wL3Byb2plY3Qvc2Fya2Jsb2cgbWVhbiBzdGFjay9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZS9+dmFyaWFibGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1SEFBQTtBQ0VGOztBREVFO0VBQ0UsWUFBQTtBQ0NKOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREVFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSwrRkFBQTtFQUVBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0RKOztBREdFO0VBQ0Usb0NBQUE7QUNESjs7QURHRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ0RKOztBREdFO0VBR0UsYUFBQTtFQUlBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUNESjs7QURJRTtFQUVFLHNEQUFBO0VBS0EscUVBQUE7RUFDQSwrSUFBQTtBQ0pKOztBRE9FO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDTEo7O0FETUk7RUFHRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSk47O0FETU07RUFDRSxrQkFBQTtFQUNBLGNFekVTO0FEcUVqQjs7QURNTTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNKUjs7QURNTTtFQUNFLGFBQUE7QUNKUjs7QURLUTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDSFY7O0FES1E7RUFDRSxjQUFBO0FDSFY7O0FEV0U7RUFDRSxjQUFBO0FDUko7O0FEVUU7RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDUko7O0FEV0k7RUFDRSxjRTVHVTtFRjZHVixjQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ1ROOztBRFdJO0VBQ0UscUJBQUE7QUNUTjs7QURZRTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUVBLHNEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1ZKOztBRGFNO0VBQ0Usc0JBQUE7RUFDQSxjRXZJUztBRDRIakI7O0FEZUk7RUFDRSxZQUFBO0FDYk47O0FEY007RUFDRSxhQUFBO0VBQ0EsY0U5SU07QURrSWQ7O0FEYVE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1hWOztBRGNNO0VBQ0UsY0FBQTtBQ1pSOztBRGNNO0VBQ0UsYUFBQTtBQ1pSOztBRGFRO0VBQ0UseUJBQUE7QUNYVjs7QURnQkU7RUFFRSxzREFBQTtFQUtBLHdFQUFBO0VBQ0EscUVBQUE7QUNoQko7O0FEbUJFO0VBRUUsa0NBQUE7RUFFQSxrREFBQTtBQ2pCSjs7QURxQkU7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNsQko7O0FEb0JFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDbEJKOztBRG9CRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FDbEJKOztBRG9CRTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUNsQkoiLCJmaWxlIjoic3JjL2FwcC9ibG9nL2Jsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vYXNzZXRzL3N0eWxlL352YXJpYWJsZS5zY3NzXCI7XG4ucGFnZS1oZWFkZXItZGFyayB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyZDQxO1xufVxuLnBhZ2UtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogMjByZW07XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuLmJnLWltZy1jb3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuOCksIHJnYmEoMCwgMCwgMCwgMC43KSksXG4gICAgdXJsKFwiLi4vLi4vYXNzZXRzL3N0eWxlL3Bob3RvLTE1Njg5OTI2ODgwNjUtNTM2YWFkOGExMmY2LmpwZWdcIik7XG59XG5oZWFkZXIge1xuICAuc3ZnLWJvcmRlci1yb3VuZGVkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbn1cblxuLmJsb2ctaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDRlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5wb3N0LXByZXZpZXctZmVhdHVyZWQtaW1nIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC44KSwgcmdiYSgwLCAwLCAwLCAwLjcpKSxcbiAgICAgIHVybChcIi4uLy4uL2Fzc2V0cy9zdHlsZS9jb21wdXRlci5qcGVnXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbiAgLmJnLWxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmM2Y5ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNhcmQubGlmdCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG4gIC5jYXJkIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogMCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xuICB9XG5cbiAgLmxpZnQge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwLjE1cmVtIDEuNzVyZW0gMCByZ2JhKDMxLCA0NSwgNjUsIDAuMTUpO1xuICAgIGJveC1zaGFkb3c6IDAgMC4xNXJlbSAxLjc1cmVtIDAgcmdiYSgzMSwgNDUsIDY1LCAwLjE1KTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0LFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0LFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgICAvKiB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQsLXdlYmtpdC10cmFuc2Zvcm0gLjE1cyBlYXNlLWluLW91dCwtd2Via2l0LWJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDsgKi9cbiAgfVxuXG4gIC5uby1ndXR0ZXJzIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICAtbXMtZmxleDogMSAxIGF1dG87XG4gICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgICAgIHBhZGRpbmc6IDEuMzVyZW07XG5cbiAgICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgICAgICBjb2xvcjogJHNlY29uZGFyeUNvbG9yO1xuICAgICAgfVxuICAgICAgLmNhcmQtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgfVxuICAgICAgLnBvc3QtcHJldmlldy1tZXRhIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIGhlaWdodDogNzJweDtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAucG9zdC1wcmV2aWV3LW1ldGEtZGV0YWlscyB7XG4gICAgICAgICAgcGFkZGluZzogMC41ZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmJsb2ctYmFubmVyIHtcbiAgLnJlY2VudC1ibG9nIHtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgfVxuICAuY2FyZC1pbWctdG9wIHtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICAuY2FyZC1ib2R5IHtcbiAgICBwIHtcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5RGFyaztcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgd29yZC1zcGFjaW5nOiAwLjJlbTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICAgIHA6aG92ZXIge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxuICAuY2FyZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAtMC44NXJlbSA0LjhyZW0gMCByZ2JhKDMxLCA0NSwgNjUsIDAuMTUpO1xuICAgIGJveC1zaGFkb3c6IDAgLTAuODVyZW0gNC44cmVtIDAgcmdiYSgzMSwgNDUsIDY1LCAwLjE1KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5jYXJkLWJvZHkge1xuICAgICAgLmNhcmQtdGl0bGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICAgICAgICBjb2xvcjogJHNlY29uZGFyeUNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJkLWZvb3RlciB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAucG9zdC1wcmV2aWV3LW1ldGEge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBjb2xvcjogJHByaW1hcnlHcmF5O1xuICAgICAgICBpbWcge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgaGVpZ2h0OiA3MnB4O1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAucG9zdC1wcmV2aWV3LW1ldGEtZGV0YWlscyB7XG4gICAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgICAgfVxuICAgICAgLnBvc3QtdXBkYXRlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLnBvc3QtcHJldmlldy1tZXRhLWRldGFpbHMtbmFtZSB7XG4gICAgICAgICAgbWFyZ2luOiAxNnB4IDFweCAxM3B4IDJweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAubGlmdCB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAuMTVyZW0gMS43NXJlbSAwIHJnYmEoMzEsIDQ1LCA2NSwgMC4xNSk7XG4gICAgYm94LXNoYWRvdzogMCAwLjE1cmVtIDEuNzVyZW0gMCByZ2JhKDMxLCA0NSwgNjUsIDAuMTUpO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4xNXMgZWFzZS1pbi1vdXQsXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4xNXMgZWFzZS1pbi1vdXQsXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgLyogdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xNXMgZWFzZS1pbi1vdXQsYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0OyAqL1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dCxcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LWJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgLmxpZnQ6aG92ZXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjMzMzMzcmVtKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMzMzMzNyZW0pO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwLjVyZW0gMnJlbSAwIHJnYmEoMzEsIDQ1LCA2NSwgMC4yNSk7XG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMnJlbSAwIHJnYmEoMzEsIDQ1LCA2NSwgMC4yNSk7XG4gIH1cbn1cbi5wYWdpbmF0aW9uLWJhbm5lciB7XG4gIC5wYWdpbmF0aW9uLWJsb2cgLnBhZ2UtaXRlbSAucGFnZS1saW5rIHtcbiAgICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxuICAucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rIHtcbiAgICB6LWluZGV4OiAzO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDYxZjI7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA2MWYyO1xuICB9XG4gIC5wYWdlLWxpbmsge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICBjb2xvcjogIzAwNjFmMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkN2RjZTM7XG4gIH1cbiAgLnBhZ2luYXRpb24tYmxvZyAucGFnZS1pdGVtIHtcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG4gIH1cbn1cbiIsIi5wYWdlLWhlYWRlci1kYXJrIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjJkNDE7XG59XG5cbi5wYWdlLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDIwcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLmJnLWltZy1jb3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuOCksIHJnYmEoMCwgMCwgMCwgMC43KSksIHVybChcIi4uLy4uL2Fzc2V0cy9zdHlsZS9waG90by0xNTY4OTkyNjg4MDY1LTUzNmFhZDhhMTJmNi5qcGVnXCIpO1xufVxuXG5oZWFkZXIgLnN2Zy1ib3JkZXItcm91bmRlZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmJsb2ctaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDRlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJsb2ctaGVhZGVyIC5wb3N0LXByZXZpZXctZmVhdHVyZWQtaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC44KSwgcmdiYSgwLCAwLCAwLCAwLjcpKSwgdXJsKFwiLi4vLi4vYXNzZXRzL3N0eWxlL2NvbXB1dGVyLmpwZWdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5ibG9nLWhlYWRlciAuYmctbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmM2Y5ICFpbXBvcnRhbnQ7XG59XG4uYmxvZy1oZWFkZXIgLmNhcmQubGlmdCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4uYmxvZy1oZWFkZXIgLmNhcmQge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAwO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAwIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xufVxuLmJsb2ctaGVhZGVyIC5saWZ0IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAuMTVyZW0gMS43NXJlbSAwIHJnYmEoMzEsIDQ1LCA2NSwgMC4xNSk7XG4gIGJveC1zaGFkb3c6IDAgMC4xNXJlbSAxLjc1cmVtIDAgcmdiYSgzMSwgNDUsIDY1LCAwLjE1KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIC8qIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCwtd2Via2l0LXRyYW5zZm9ybSAuMTVzIGVhc2UtaW4tb3V0LC13ZWJraXQtYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0OyAqL1xufVxuLmJsb2ctaGVhZGVyIC5uby1ndXR0ZXJzIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLmJsb2ctaGVhZGVyIC5uby1ndXR0ZXJzIC5jYXJkLWJvZHkge1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtbXMtZmxleDogMSAxIGF1dG87XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmc6IDEuMzVyZW07XG59XG4uYmxvZy1oZWFkZXIgLm5vLWd1dHRlcnMgLmNhcmQtYm9keSAuY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgY29sb3I6ICMzMDQwNjk7XG59XG4uYmxvZy1oZWFkZXIgLm5vLWd1dHRlcnMgLmNhcmQtYm9keSAuY2FyZC10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uYmxvZy1oZWFkZXIgLm5vLWd1dHRlcnMgLmNhcmQtYm9keSAucG9zdC1wcmV2aWV3LW1ldGEge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJsb2ctaGVhZGVyIC5uby1ndXR0ZXJzIC5jYXJkLWJvZHkgLnBvc3QtcHJldmlldy1tZXRhIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBoZWlnaHQ6IDcycHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuLmJsb2ctaGVhZGVyIC5uby1ndXR0ZXJzIC5jYXJkLWJvZHkgLnBvc3QtcHJldmlldy1tZXRhIC5wb3N0LXByZXZpZXctbWV0YS1kZXRhaWxzIHtcbiAgcGFkZGluZzogMC41ZW07XG59XG5cbi5ibG9nLWJhbm5lciAucmVjZW50LWJsb2cge1xuICBmb250LXNpemU6IDNlbTtcbn1cbi5ibG9nLWJhbm5lciAuY2FyZC1pbWctdG9wIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIyMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG4uYmxvZy1iYW5uZXIgLmNhcmQtYm9keSBwIHtcbiAgY29sb3I6ICNhMGE3YjA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB3b3JkLXNwYWNpbmc6IDAuMmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5ibG9nLWJhbm5lciAuY2FyZC1ib2R5IHA6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYmxvZy1iYW5uZXIgLmNhcmQge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDA7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgLTAuODVyZW0gNC44cmVtIDAgcmdiYSgzMSwgNDUsIDY1LCAwLjE1KTtcbiAgYm94LXNoYWRvdzogMCAtMC44NXJlbSA0LjhyZW0gMCByZ2JhKDMxLCA0NSwgNjUsIDAuMTUpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYmxvZy1iYW5uZXIgLmNhcmQgLmNhcmQtYm9keSAuY2FyZC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gIGNvbG9yOiAjMzA0MDY5O1xufVxuLmJsb2ctYmFubmVyIC5jYXJkIC5jYXJkLWZvb3RlciB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5ibG9nLWJhbm5lciAuY2FyZCAuY2FyZC1mb290ZXIgLnBvc3QtcHJldmlldy1tZXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICM4ZTk1YTA7XG59XG4uYmxvZy1iYW5uZXIgLmNhcmQgLmNhcmQtZm9vdGVyIC5wb3N0LXByZXZpZXctbWV0YSBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgaGVpZ2h0OiA3MnB4O1xuICB3aWR0aDogYXV0bztcbn1cbi5ibG9nLWJhbm5lciAuY2FyZCAuY2FyZC1mb290ZXIgLnBvc3QtcHJldmlldy1tZXRhLWRldGFpbHMge1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cbi5ibG9nLWJhbm5lciAuY2FyZCAuY2FyZC1mb290ZXIgLnBvc3QtdXBkYXRlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5ibG9nLWJhbm5lciAuY2FyZCAuY2FyZC1mb290ZXIgLnBvc3QtdXBkYXRlIC5wb3N0LXByZXZpZXctbWV0YS1kZXRhaWxzLW5hbWUge1xuICBtYXJnaW46IDE2cHggMXB4IDEzcHggMnB4O1xufVxuLmJsb2ctYmFubmVyIC5saWZ0IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAuMTVyZW0gMS43NXJlbSAwIHJnYmEoMzEsIDQ1LCA2NSwgMC4xNSk7XG4gIGJveC1zaGFkb3c6IDAgMC4xNXJlbSAxLjc1cmVtIDAgcmdiYSgzMSwgNDUsIDY1LCAwLjE1KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuICAvKiB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7ICovXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gMC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbn1cbi5ibG9nLWJhbm5lciAubGlmdDpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjMzMzMzcmVtKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjMzMzMzcmVtKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAuNXJlbSAycmVtIDAgcmdiYSgzMSwgNDUsIDY1LCAwLjI1KTtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMnJlbSAwIHJnYmEoMzEsIDQ1LCA2NSwgMC4yNSk7XG59XG5cbi5wYWdpbmF0aW9uLWJhbm5lciAucGFnaW5hdGlvbi1ibG9nIC5wYWdlLWl0ZW0gLnBhZ2UtbGluayB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzVyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbi5wYWdpbmF0aW9uLWJhbm5lciAucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rIHtcbiAgei1pbmRleDogMztcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDYxZjI7XG4gIGJvcmRlci1jb2xvcjogIzAwNjFmMjtcbn1cbi5wYWdpbmF0aW9uLWJhbm5lciAucGFnZS1saW5rIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgY29sb3I6ICMwMDYxZjI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkN2RjZTM7XG59XG4ucGFnaW5hdGlvbi1iYW5uZXIgLnBhZ2luYXRpb24tYmxvZyAucGFnZS1pdGVtIHtcbiAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbn0iLCIkcHJpbWFyeUNvbG9yOiAjN2Y3ZjdmO1xuJHByaW1hcnlXaGl0ZTogI2ZmZjtcbiRwcmltYXJ5QmxhY2s6ICMwMDA7XG4kcHJpbWFyeUJsdWU6ICMwMDYxZjI7XG4kcHJpbWFyeUdyZWVuOiAjMDFiYTk0O1xuJHByaW1hcnlUZWFsOiAjMDVhYjlmO1xuJHByaW1hcnlEYXJrOiMxZjJkNDE7XG4kc2Vjb25kYXJ5V2hpdGU6ICNhN2FiYjM7XG4kc2Vjb25kYXJ5RGFyazogI2EwYTdiMDtcbiRzZWNvbmRhcnlDb2xvcjogIzMwNDA2OTtcbiRwcmltYXJ5R3JheTogIzhlOTVhMDtcbiRsaWdodEJsdWU6ICMwMDdiYzc7Il19 */";
    /***/
  },

  /***/
  "./src/app/blog/blog.component.ts":
  /*!****************************************!*\
    !*** ./src/app/blog/blog.component.ts ***!
    \****************************************/

  /*! exports provided: BlogComponent */

  /***/
  function srcAppBlogBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
      return BlogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../home.service */
    "./src/app/home.service.ts");
    /* harmony import */


    var _category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../category.service */
    "./src/app/category.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

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
          var _this10 = this;

          this.api.getPosts().subscribe(function (res) {
            _this10.posts = res; // this.data = res.results;
            // console.log(this.data = res.results);

            console.log(_this10.posts);
            _this10.isLoadingResults = false;
          }, function (err) {
            console.log(err);
            _this10.isLoadingResults = false;
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
          var _this11 = this;

          this.api.getPosts().subscribe(function (res) {
            _this11.posts = res.map(function (o) {
              o.search_label = " ".concat(o.category, " ").concat(o.id, " ").concat(o.postTitle, " ").concat(o.postAuthor, " \n        ").concat(o.postDesc, " ").concat(o.postContent, " ").concat(o.postReference, " ").concat(o.postImgUrl, "\n         ").concat(o.created, " ").concat(o.updated, "\n      ");
              return o;
            });
            console.log(_this11.posts);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this12 = this;

          this.catApi.getCategories().subscribe(function (res) {
            _this12.categories = res;
            console.log(_this12.categories);
            _this12.isLoadingResults = false;
          }, function (err) {
            console.log(err);
            _this12.isLoadingResults = false;
          });
        }
      }, {
        key: "getusers",
        value: function getusers() {
          var _this13 = this;

          this.authApi.getUsers().subscribe(function (res) {
            _this13.users = res;
            console.log(_this13.users);
            _this13.isLoadingResults = false;
          }, function (err) {
            console.log(err);
            _this13.isLoadingResults = false;
          });
        }
      }, {
        key: "getuser",
        value: function getuser(id) {
          var _this14 = this;

          this.authApi.getUser(id).subscribe(function (res) {
            _this14.singleUser = res;
            console.log(_this14.singleUser);
            _this14.isLoadingResults = false;
          }, function (err) {
            console.log(err);
            _this14.isLoadingResults = false;
          });
        }
      }]);

      return BlogComponent;
    }();

    BlogComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
      }, {
        type: _home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"]
      }];
    };

    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blog.component.scss */
      "./src/app/blog/blog.component.scss"))["default"]]
    })], BlogComponent);
    /***/
  },

  /***/
  "./src/app/bycategory/bycategory.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/bycategory/bycategory.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBycategoryBycategoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-container {\n  margin-top: 10em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhY3Rvci9EZXNrdG9wL3Byb2plY3Qvc2Fya2Jsb2cgbWVhbiBzdGFjay9jbGllbnQvc3JjL2FwcC9ieWNhdGVnb3J5L2J5Y2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2J5Y2F0ZWdvcnkvYnljYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ieWNhdGVnb3J5L2J5Y2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDEwZW07XG59IiwiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTBlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/bycategory/bycategory.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/bycategory/bycategory.component.ts ***!
    \****************************************************/

  /*! exports provided: BycategoryComponent */

  /***/
  function srcAppBycategoryBycategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BycategoryComponent", function () {
      return BycategoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../home.service */
    "./src/app/home.service.ts");

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
          var _this15 = this;

          this.route.params.subscribe(function (params) {
            _this15.getPostsByCategory(_this15.route.snapshot.params.id);
          });
        }
      }, {
        key: "getPostsByCategory",
        value: function getPostsByCategory(id) {
          var _this16 = this;

          this.posts = [];
          console.log(this.posts, "######+++++ category ");
          this.api.getPostsByCategory(id).subscribe(function (res) {
            _this16.posts = res;
            console.log(_this16.posts);
            _this16.isLoadingResults = false;
          }, function (err) {
            console.log(err);
            _this16.isLoadingResults = false;
          });
        }
      }]);

      return BycategoryComponent;
    }();

    BycategoryComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"]
      }];
    };

    BycategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bycategory',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bycategory.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bycategory/bycategory.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bycategory.component.scss */
      "./src/app/bycategory/bycategory.component.scss"))["default"]]
    })], BycategoryComponent);
    /***/
  },

  /***/
  "./src/app/category.service.ts":
  /*!*************************************!*\
    !*** ./src/app/category.service.ts ***!
    \*************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcAppCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var apiUrl = 'https://sarkblog.herokuapp.com/api/category/'; //const apiUrl = 'api/category/';

    var CategoryService = /*#__PURE__*/function () {
      function CategoryService(http) {
        _classCallCheck(this, CategoryService);

        this.http = http;
      }

      _createClass(CategoryService, [{
        key: "getCategories",
        value: function getCategories() {
          var _this17 = this;

          return this.http.get(apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
            return _this17.log('fetched Categories');
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
          var _this18 = this;

          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            console.error(error); // log to console instead

            _this18.log("".concat(operation, " failed: ").concat(error.message));

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

    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CategoryService);
    /***/
  },

  /***/
  "./src/app/category/category-add/category-add.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/category/category-add/category-add.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoryCategoryAddCategoryAddComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LWFkZC9jYXRlZ29yeS1hZGQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/category/category-add/category-add.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/category/category-add/category-add.component.ts ***!
    \*****************************************************************/

  /*! exports provided: MyErrorStateMatcher, CategoryAddComponent */

  /***/
  function srcAppCategoryCategoryAddCategoryAddComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../category.service */
    "./src/app/category.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
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
            catName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            catDesc: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            catImgUrl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            catContent: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
        }
      }, {
        key: "onFormSubmit",
        value: function onFormSubmit() {
          var _this19 = this;

          this.isLoadingResults = true;
          this.api.addCategory(this.categoryForm.value).subscribe(function (res) {
            var id = res._id;
            _this19.isLoadingResults = false;

            _this19.router.navigate(['/category/details', id]);
          }, function (err) {
            console.log(err);
            _this19.isLoadingResults = false;
          });
        }
      }]);

      return CategoryAddComponent;
    }();

    CategoryAddComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    CategoryAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-category-add',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./category-add.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-add/category-add.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./category-add.component.scss */
      "./src/app/category/category-add/category-add.component.scss"))["default"]]
    })], CategoryAddComponent);
    /***/
  },

  /***/
  "./src/app/category/category-details/category-details.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/category/category-details/category-details.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoryCategoryDetailsCategoryDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LWRldGFpbHMvY2F0ZWdvcnktZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/category/category-details/category-details.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/category/category-details/category-details.component.ts ***!
    \*************************************************************************/

  /*! exports provided: CategoryDetailsComponent */

  /***/
  function srcAppCategoryCategoryDetailsCategoryDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryDetailsComponent", function () {
      return CategoryDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../category.service */
    "./src/app/category.service.ts");

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
          var _this20 = this;

          this.api.getCategory(id).subscribe(function (data) {
            _this20.category = data;
            _this20.category.id = data._id;
            console.log(_this20.category);
            _this20.isLoadingResults = false;
          });
        }
      }, {
        key: "deleteCategory",
        value: function deleteCategory(id) {
          var _this21 = this;

          this.isLoadingResults = true;
          this.api.deleteCategory(id).subscribe(function (res) {
            _this21.isLoadingResults = false;

            _this21.router.navigate(['/category']);
          }, function (err) {
            console.log(err);
            _this21.isLoadingResults = false;
          });
        }
      }]);

      return CategoryDetailsComponent;
    }();

    CategoryDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    CategoryDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-category-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./category-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-details/category-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./category-details.component.scss */
      "./src/app/category/category-details/category-details.component.scss"))["default"]]
    })], CategoryDetailsComponent);
    /***/
  },

  /***/
  "./src/app/category/category-edit/category-edit.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/category/category-edit/category-edit.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoryCategoryEditCategoryEditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LWVkaXQvY2F0ZWdvcnktZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/category/category-edit/category-edit.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/category/category-edit/category-edit.component.ts ***!
    \*******************************************************************/

  /*! exports provided: MyErrorStateMatcher, CategoryEditComponent */

  /***/
  function srcAppCategoryCategoryEditCategoryEditComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../category.service */
    "./src/app/category.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
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
            catName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            catDesc: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            catImgUrl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            catContent: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
        }
      }, {
        key: "getCategory",
        value: function getCategory(id) {
          var _this22 = this;

          this.api.getCategory(id).subscribe(function (data) {
            _this22.id = data._id;

            _this22.categoryForm.setValue({
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
          var _this23 = this;

          this.isLoadingResults = true;
          this.api.updateCategory(this.id, this.categoryForm.value).subscribe(function (res) {
            var id = res._id;
            _this23.isLoadingResults = false;

            _this23.router.navigate(['/category/details', id]);
          }, function (err) {
            console.log(err);
            _this23.isLoadingResults = false;
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
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    CategoryEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-category-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./category-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-edit/category-edit.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./category-edit.component.scss */
      "./src/app/category/category-edit/category-edit.component.scss"))["default"]]
    })], CategoryEditComponent);
    /***/
  },

  /***/
  "./src/app/category/category.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/category/category.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoryCategoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/category/category.component.ts":
  /*!************************************************!*\
    !*** ./src/app/category/category.component.ts ***!
    \************************************************/

  /*! exports provided: CategoryComponent */

  /***/
  function srcAppCategoryCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryComponent", function () {
      return CategoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../category.service */
    "./src/app/category.service.ts");

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
          var _this24 = this;

          this.api.getCategories().subscribe(function (res) {
            _this24.data = res;
            console.log(_this24.data);
            _this24.isLoadingResults = false;
          }, function (err) {
            console.log(err);
            _this24.isLoadingResults = false;
          });
        }
      }]);

      return CategoryComponent;
    }();

    CategoryComponent.ctorParameters = function () {
      return [{
        type: _category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]
      }];
    };

    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./category.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./category.component.scss */
      "./src/app/category/category.component.scss"))["default"]]
    })], CategoryComponent);
    /***/
  },

  /***/
  "./src/app/contact/contact.component.scss":
  /*!************************************************!*\
    !*** ./src/app/contact/contact.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".contact {\n  margin-top: 12em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhY3Rvci9EZXNrdG9wL3Byb2plY3Qvc2Fya2Jsb2cgbWVhbiBzdGFjay9jbGllbnQvc3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdCB7XG4gICAgbWFyZ2luLXRvcDogMTJlbTtcbn0iLCIuY29udGFjdCB7XG4gIG1hcmdpbi10b3A6IDEyZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

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

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.scss */
      "./src/app/contact/contact.component.scss"))["default"]]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/details/details.component.scss":
  /*!************************************************!*\
    !*** ./src/app/details/details.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDetailsDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".detail-banner .post-image {\n  width: calc(100% + 32px);\n  margin: 0 -16px 16px;\n}\n.detail-banner .main-banner .post-title {\n  font-size: 2em;\n  font-weight: 600;\n  line-height: 43px;\n  word-spacing: 1px;\n  letter-spacing: 1px;\n}\n.detail-banner .main-banner .post-info .post-info-sub p {\n  border-right: 2px solid gray;\n  margin-left: 5px;\n  padding: 0 10px 0 0;\n}\n.detail-banner .main-banner .post-info .post-info-sub p span {\n  background: #05ab9f;\n  font-size: 1.2em;\n  color: #fff;\n  font-weight: 500;\n}\n.detail-banner .main-banner .post-info .post-info-sub p strong {\n  margin-right: 5px;\n  padding-left: 0.8em;\n}\n.detail-banner .main-banner mat-card-content {\n  font-size: 1.1em;\n  width: 100%;\n}\n.detail-banner .side-banner {\n  margin-top: 10em;\n  box-shadow: 0 0 10px -4px black;\n}\n.detail-banner .side-banner .post-share-area {\n  padding: 0;\n  background-color: #f8f8f8;\n}\n.detail-banner .side-banner .post-share-area p {\n  padding-top: 15px;\n  font-size: 2em;\n  font-weight: 600;\n  text-align: center;\n  text-transform: capitalize;\n}\n.detail-banner .side-banner .post-share-area .social-default {\n  list-style-type: none;\n  justify-content: center;\n  align-items: center;\n  font-size: 2.5em;\n}\n.detail-banner .side-banner .post-share-area .social-default li {\n  margin-right: 0.5em;\n}\n.detail-banner .side-banner .post-share-area .social-default li a {\n  list-style: none;\n}\n.detail-banner .side-banner .trending-posts {\n  margin-bottom: 0rem;\n}\n.detail-banner .side-banner .trending-posts .topic-border {\n  position: relative;\n  border-bottom: 2px solid #000;\n}\n.detail-banner .side-banner .trending-posts .topic-border .topic-box-lg:before {\n  z-index: 2;\n  content: \"\";\n  top: 0;\n  right: -8px;\n  position: absolute;\n  width: 0;\n  height: 0;\n}\n.detail-banner .side-banner .trending-posts .topic-border .topic-box-lg {\n  display: inline-block;\n  position: relative;\n  color: #fff;\n  height: 40px;\n  background-color: #000;\n  padding: 0 20px;\n  line-height: 40px;\n  text-align: center;\n  text-transform: capitalize;\n  font-weight: 600;\n  font-size: 18px;\n  z-index: 2;\n}\n.detail-banner .side-banner .trending-posts .topic-border .topic-box-lg:after {\n  content: \"\";\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n.detail-banner .side-banner .trending-posts .topic-border:after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n  width: 100%;\n  height: 2px;\n}\n.detail-banner .side-banner .trending-posts .color-cod-gray:before {\n  border-top: 8px solid #111;\n  border-right: 8px solid transparent;\n}\n.detail-banner .side-banner .card-body {\n  width: 100%;\n  margin-top: 1em;\n  padding: 0px 3px;\n}\n.detail-banner .side-banner .card-body .user-image {\n  border-radius: 100%;\n  width: 100%;\n}\n.detail-banner .side-banner .card-body .trending-posts .image-post {\n  width: 100%;\n}\n.detail-banner .side-banner .card-body .trending-posts .image-post img {\n  width: 100%;\n  height: 100px auto;\n}\n.detail-banner .side-banner .card-body .trending-posts .image-post p:first-child {\n  font-size: 10px;\n}\n.detail-banner .side-banner .card-body .trending-posts .image-post p {\n  font-size: 12px !important;\n}\n.detail-banner .side-banner .card-body .trending-posts .text-desc {\n  margin-left: 10px;\n  width: 100%;\n  color: #a7abb3;\n  cursor: pointer;\n}\n.detail-banner .side-banner .card-body .trending-posts .text-desc p:first-child {\n  font-size: 10px;\n}\n.detail-banner .side-banner .card-body .trending-posts .text-desc p {\n  font-size: 12px !important;\n}\n.detail-banner .side-banner .card-body .author h6 {\n  margin-top: 1.5em;\n  font-size: 1.5em;\n  text-transform: capitalize;\n}\n.detail-banner .side-banner .card-body .author .user-img {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.detail-banner .side-banner .card-body .author .user-img img {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.detail-banner .side-banner .card-body .author p {\n  font-size: 1em;\n  text-transform: capitalize;\n  text-align: center;\n  margin: 1em;\n}\n.detail-banner .side-banner .card-body .author .social-accounts h3 {\n  padding: 0.4em 0em;\n  font-size: 1.5em;\n  font-weight: 600;\n  text-transform: capitalize;\n  text-align: center;\n}\n.detail-banner .side-banner .card-body .author .social-accounts .social-icons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.detail-banner .side-banner .card-body .author .social-accounts .social-icons a {\n  font-size: 1.8em;\n  text-align: center;\n  margin: 8px;\n}\n.detail-banner .side-banner .card-body .active {\n  color: #05ab9f;\n  background: #a0a7b0;\n}\n.detail-banner .side-banner .card-body .newsletter-area {\n  padding: 0.8em;\n  background-color: #0061f2;\n}\n.detail-banner .side-banner .card-body .newsletter-area h2 {\n  font-size: 1.8em;\n  color: #000;\n  font-weight: 700;\n  text-align: center;\n}\n.detail-banner .side-banner .card-body .newsletter-area img {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.detail-banner .side-banner .card-body .newsletter-area .subscription-needs-validation1 .input-group .input-group-addon button {\n  border: none;\n}\n.detail-banner .side-banner .card-body .newsletter-area .subscription-needs-validation1 .input-group .input-group-addon button i {\n  font-size: 2.1em;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .side-banner .post-share-area .social-default {\n    font-size: 1.8em !important;\n    margin-right: 1em;\n  }\n  .side-banner .post-share-area .social-default li {\n    margin-right: 0.5em !important;\n  }\n  .side-banner .author p {\n    margin: 0.1em !important;\n  }\n  .side-banner .social-accounts h3 {\n    font-size: 1em;\n  }\n  .side-banner .social-accounts .social-icons a {\n    font-size: 1.4em !important;\n    margin: 5px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhY3Rvci9EZXNrdG9wL3Byb2plY3Qvc2Fya2Jsb2cgbWVhbiBzdGFjay9jbGllbnQvc3JjL2FwcC9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuc2NzcyIsIi9ob21lL2ZhY3Rvci9EZXNrdG9wL3Byb2plY3Qvc2Fya2Jsb2cgbWVhbiBzdGFjay9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZS9+dmFyaWFibGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJSTtFQUNJLHdCQUFBO0VBQ0Esb0JBQUE7QUNIUjtBRE1RO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDSlo7QURRZ0I7RUFDSSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNOcEI7QURPb0I7RUFDSSxtQkVsQlY7RUZtQlUsZ0JBQUE7RUFDQSxXRXhCVDtFRnlCUyxnQkFBQTtBQ0x4QjtBRE9vQjtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUNMeEI7QURVUTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQ1JaO0FEV0k7RUFDSSxnQkFBQTtFQUNBLCtCQUFBO0FDVFI7QURXUTtFQVFJLFVBQUE7RUFDQSx5QkFBQTtBQ2hCWjtBRFFZO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FDTmhCO0FEVVk7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1JoQjtBRFNnQjtFQUNJLG1CQUFBO0FDUHBCO0FEUW9CO0VBQ0ksZ0JBQUE7QUNOeEI7QURXUTtFQUNJLG1CQUFBO0FDVFo7QURVWTtFQUNJLGtCQUFBO0VBQ0EsNkJBQUE7QUNSaEI7QURTZ0I7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ1BwQjtBRFNnQjtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXRW5GTDtFRm9GSyxZQUFBO0VBQ0Esc0JFcEZMO0VGcUZLLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDUHBCO0FEU2dCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDUHBCO0FEVVk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDUmhCO0FEVVk7RUFDSSwwQkFBQTtFQUNBLG1DQUFBO0FDUmhCO0FEWVE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDVlo7QURXWTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ1RoQjtBRFlhO0VBQ0ksV0FBQTtBQ1ZqQjtBRFlpQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ1ZyQjtBRFlpQjtFQUNHLGVBQUE7QUNWcEI7QURZZ0I7RUFDSSwwQkFBQTtBQ1ZwQjtBRGNhO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0UvSUE7RUZnSkEsZUFBQTtBQ1pqQjtBRGFpQjtFQUNJLGVBQUE7QUNYckI7QURhaUI7RUFDSSwwQkFBQTtBQ1hyQjtBRGlCZ0I7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNmcEI7QURpQmdCO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ2ZwQjtBRGdCb0I7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDZHBCO0FEa0JnQjtFQUNJLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ2hCcEI7QURtQm9CO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ2pCeEI7QURtQm9CO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNqQnhCO0FEa0J3QjtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDaEI1QjtBRHNCWTtFQUNJLGNFOU1GO0VGK01FLG1CRTVNQTtBRHdMaEI7QUR1Qlk7RUFDSyxjQUFBO0VBQ0EseUJFdE5IO0FEaU1kO0FEc0JpQjtFQUNJLGdCQUFBO0VBQ0EsV0UxTk47RUYyTk0sZ0JBQUE7RUFDQSxrQkFBQTtBQ3BCckI7QURzQmlCO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNwQnJCO0FEeUI2QjtFQUNHLFlBQUE7QUN2QmhDO0FEd0JpQztFQUNJLGdCQUFBO0FDdEJyQztBRHNDQTtFQUdRO0lBQ0ksMkJBQUE7SUFDQSxpQkFBQTtFQ3JDVjtFRHNDVTtJQUNJLDhCQUFBO0VDcENkO0VEeUNNO0lBQ0ksd0JBQUE7RUN2Q1Y7RUQyQ007SUFDSSxjQUFBO0VDekNWO0VENENVO0lBQ0ksMkJBQUE7SUFDQSxzQkFBQTtFQzFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9zdHlsZS9+dmFyaWFibGUuc2Nzc1wiO1xuXG4uZGV0YWlsLWJhbm5lciB7XG5cbiAgICAucG9zdC1pbWFnZSB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgICAgICAgbWFyZ2luOiAwIC0xNnB4IDE2cHg7XG4gICAgfVxuICAgIC5tYWluLWJhbm5lciB7XG4gICAgICAgIC5wb3N0LXRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0M3B4O1xuICAgICAgICAgICAgd29yZC1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICB9XG4gICAgICAgIC5wb3N0LWluZm8ge1xuICAgICAgICAgICAgLnBvc3QtaW5mby1zdWIge1xuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBncmF5O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHggMCAwO1xuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5VGVhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnlXaGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjhlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtYXQtY2FyZC1jb250ZW50IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuc2lkZS1iYW5uZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMGVtO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAtNHB4IGJsYWNrO1xuXG4gICAgICAgIC5wb3N0LXNoYXJlLWFyZWEge1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICAgICAgICAgIC5zb2NpYWwtZGVmYXVsdCB7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07XG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudHJlbmRpbmctcG9zdHMge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcbiAgICAgICAgICAgIC50b3BpYy1ib3JkZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHByaW1hcnlCbGFjaztcbiAgICAgICAgICAgICAgICAudG9waWMtYm94LWxnOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC04cHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRvcGljLWJveC1sZyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnlXaGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeUJsYWNrO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50b3BpYy1ib3gtbGc6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50b3BpYy1ib3JkZXI6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29sb3ItY29kLWdyYXk6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiA4cHggc29saWQgIzExMTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgIFxuICAgICAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDNweDtcbiAgICAgICAgICAgIC51c2VyLWltYWdle1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudHJlbmRpbmctcG9zdHMge1xuICAgICAgICAgICAgIC5pbWFnZS1wb3N0e1xuICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4IGF1dG87XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgcDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICAgLnRleHQtZGVzY3tcbiAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnlXaGl0ZTtcbiAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICBwOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYXV0aG9yIHtcbiAgICAgICAgICAgICAgICBoNiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuNWVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnVzZXItaW1ne1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMWVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc29jaWFsLWFjY291bnRzIHtcbiAgICAgICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC40ZW0gMGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc29jaWFsLWljb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDhweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5VGVhbDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5RGFyaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLm5ld3NsZXR0ZXItYXJlYSB7XG4gICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuOGVtO1xuICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeUJsdWU7XG4gICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnlCbGFjaztcbiAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAuc3Vic2NyaXB0aW9uLW5lZWRzLXZhbGlkYXRpb24xIHtcbiAgICAgICAgICAgICAgICAgICAgIC5pbnB1dC1ncm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgLmlucHV0LWdyb3VwLWFkZG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjFlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbiAgIFxufVxuQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuLnNpZGUtYmFubmVyIHtcbiAgICAucG9zdC1zaGFyZS1hcmVhIHtcbiAgICAgICAgLnNvY2lhbC1kZWZhdWx0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44ZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41ZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuYXV0aG9yIHtcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDAuMWVtICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNvY2lhbC1hY2NvdW50cyB7XG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICB9XG4gICAgICAgIC5zb2NpYWwtaWNvbnMge1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7XG4gICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG59XG4iLCIuZGV0YWlsLWJhbm5lciAucG9zdC1pbWFnZSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgbWFyZ2luOiAwIC0xNnB4IDE2cHg7XG59XG4uZGV0YWlsLWJhbm5lciAubWFpbi1iYW5uZXIgLnBvc3QtdGl0bGUge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDQzcHg7XG4gIHdvcmQtc3BhY2luZzogMXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLmRldGFpbC1iYW5uZXIgLm1haW4tYmFubmVyIC5wb3N0LWluZm8gLnBvc3QtaW5mby1zdWIgcCB7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGdyYXk7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBhZGRpbmc6IDAgMTBweCAwIDA7XG59XG4uZGV0YWlsLWJhbm5lciAubWFpbi1iYW5uZXIgLnBvc3QtaW5mbyAucG9zdC1pbmZvLXN1YiBwIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjMDVhYjlmO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5kZXRhaWwtYmFubmVyIC5tYWluLWJhbm5lciAucG9zdC1pbmZvIC5wb3N0LWluZm8tc3ViIHAgc3Ryb25nIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMC44ZW07XG59XG4uZGV0YWlsLWJhbm5lciAubWFpbi1iYW5uZXIgbWF0LWNhcmQtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuLmRldGFpbC1iYW5uZXIgLnNpZGUtYmFubmVyIHtcbiAgbWFyZ2luLXRvcDogMTBlbTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggLTRweCBibGFjaztcbn1cbi5kZXRhaWwtYmFubmVyIC5zaWRlLWJhbm5lciAucG9zdC1zaGFyZS1hcmVhIHtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbn1cbi5kZXRhaWwtYmFubmVyIC5zaWRlLWJhbm5lciAucG9zdC1zaGFyZS1hcmVhIHAge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uZGV0YWlsLWJhbm5lciAuc2lkZS1iYW5uZXIgLnBvc3Qtc2hhcmUtYXJlYSAuc29jaWFsLWRlZmF1bHQge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDIuNWVtO1xufVxuLmRldGFpbC1iYW5uZXIgLnNpZGUtYmFubmVyIC5wb3N0LXNoYXJlLWFyZWEgLnNvY2lhbC1kZWZhdWx0IGxpIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbn1cbi5kZXRhaWwtYmFubmVyIC5zaWRlLWJhbm5lciAucG9zdC1zaGFyZS1hcmVhIC5zb2NpYWwtZGVmYXVsdCBsaSBhIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5kZXRhaWwtYmFubmVyIC5zaWRlLWJhbm5lciAudHJlbmRpbmctcG9zdHMge1xuICBtYXJnaW4tYm90dG9tOiAwcmVtO1xufVxuLmRldGFpbC1iYW5uZXIgLnNpZGUtYmFubmVyIC50cmVuZGluZy1wb3N0cyAudG9waWMtYm9yZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcbn1cbi5kZXRhaWwtYmFubmVyIC5zaWRlLWJhbm5lciAudHJlbmRpbmctcG9zdHMgLnRvcGljLWJvcmRlciAudG9waWMtYm94LWxnOmJlZm9yZSB7XG4gIHotaW5kZXg6IDI7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IC04cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cbi5kZXRhaWwtYmFubmVyIC5zaWRlLWJhbm5lciAudHJlbmRpbmctcG9zdHMgLnRvcGljLWJvcmRlciAudG9waWMtYm94LWxnIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgei1pbmRleDogMjtcbn1cbi5kZXRhaWwtYmFubmVyIC5zaWRlLWJhbm5lciAudHJlbmRpbmctcG9zdHMgLnRvcGljLWJvcmRlciAudG9waWMtYm94LWxnOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogLTE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5kZXRhaWwtYmFubmVyIC5zaWRlLWJhbm5lciAudHJlbmRpbmctcG9zdHMgLnRvcGljLWJvcmRlcjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbn1cbi5kZXRhaWwtYmFubmVyIC5zaWRlLWJhbm5lciAudHJlbmRpbmctcG9zdHMgLmNvbG9yLWNvZC1ncmF5OmJlZm9yZSB7XG4gIGJvcmRlci10b3A6IDhweCBzb2xpZCAjMTExO1xuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5kZXRhaWwtYmFubmVyIC5zaWRlLWJhbm5lciAuY2FyZC1ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgcGFkZGluZzogMHB4IDNweDtcbn1cbi5kZXRhaWwtYmFubmVyIC5zaWRlLWJhbm5lciAuY2FyZC1ib2R5IC51c2VyLWltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGV0YWlsLWJhbm5lciAuc2lkZS1iYW5uZXIgLmNhcmQtYm9keSAudHJlbmRpbmctcG9zdHMgLmltYWdlLXBvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbi5kZXRhaWwtYmFubmVyIC5zaWRlLWJhbm5lciAuY2FyZC1ib2R5IC50cmVuZGluZy1wb3N0cyAuaW1hZ2UtcG9zdCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweCBhdXRvO1xufVxuLmRldGFpbC1iYW5uZXIgLnNpZGUtYmFubmVyIC5jYXJkLWJvZHkgLnRyZW5kaW5nLXBvc3RzIC5pbWFnZS1wb3N0IHA6Zmlyc3QtY2hpbGQge1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uZGV0YWlsLWJhbm5lciAuc2lkZS1iYW5uZXIgLmNhcmQtYm9keSAudHJlbmRpbmctcG9zdHMgLmltYWdlLXBvc3QgcCB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuLmRldGFpbC1iYW5uZXIgLnNpZGUtYmFubmVyIC5jYXJkLWJvZHkgLnRyZW5kaW5nLXBvc3RzIC50ZXh0LWRlc2Mge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjYTdhYmIzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZGV0YWlsLWJhbm5lciAuc2lkZS1iYW5uZXIgLmNhcmQtYm9keSAudHJlbmRpbmctcG9zdHMgLnRleHQtZGVzYyBwOmZpcnN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmRldGFpbC1iYW5uZXIgLnNpZGUtYmFubmVyIC5jYXJkLWJvZHkgLnRyZW5kaW5nLXBvc3RzIC50ZXh0LWRlc2MgcCB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuLmRldGFpbC1iYW5uZXIgLnNpZGUtYmFubmVyIC5jYXJkLWJvZHkgLmF1dGhvciBoNiB7XG4gIG1hcmdpbi10b3A6IDEuNWVtO1xuICBmb250LXNpemU6IDEuNWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5kZXRhaWwtYmFubmVyIC5zaWRlLWJhbm5lciAuY2FyZC1ib2R5IC5hdXRob3IgLnVzZXItaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZGV0YWlsLWJhbm5lciAuc2lkZS1iYW5uZXIgLmNhcmQtYm9keSAuYXV0aG9yIC51c2VyLWltZyBpbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5kZXRhaWwtYmFubmVyIC5zaWRlLWJhbm5lciAuY2FyZC1ib2R5IC5hdXRob3IgcCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDFlbTtcbn1cbi5kZXRhaWwtYmFubmVyIC5zaWRlLWJhbm5lciAuY2FyZC1ib2R5IC5hdXRob3IgLnNvY2lhbC1hY2NvdW50cyBoMyB7XG4gIHBhZGRpbmc6IDAuNGVtIDBlbTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kZXRhaWwtYmFubmVyIC5zaWRlLWJhbm5lciAuY2FyZC1ib2R5IC5hdXRob3IgLnNvY2lhbC1hY2NvdW50cyAuc29jaWFsLWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZGV0YWlsLWJhbm5lciAuc2lkZS1iYW5uZXIgLmNhcmQtYm9keSAuYXV0aG9yIC5zb2NpYWwtYWNjb3VudHMgLnNvY2lhbC1pY29ucyBhIHtcbiAgZm9udC1zaXplOiAxLjhlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDhweDtcbn1cbi5kZXRhaWwtYmFubmVyIC5zaWRlLWJhbm5lciAuY2FyZC1ib2R5IC5hY3RpdmUge1xuICBjb2xvcjogIzA1YWI5ZjtcbiAgYmFja2dyb3VuZDogI2EwYTdiMDtcbn1cbi5kZXRhaWwtYmFubmVyIC5zaWRlLWJhbm5lciAuY2FyZC1ib2R5IC5uZXdzbGV0dGVyLWFyZWEge1xuICBwYWRkaW5nOiAwLjhlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjFmMjtcbn1cbi5kZXRhaWwtYmFubmVyIC5zaWRlLWJhbm5lciAuY2FyZC1ib2R5IC5uZXdzbGV0dGVyLWFyZWEgaDIge1xuICBmb250LXNpemU6IDEuOGVtO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRldGFpbC1iYW5uZXIgLnNpZGUtYmFubmVyIC5jYXJkLWJvZHkgLm5ld3NsZXR0ZXItYXJlYSBpbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRldGFpbC1iYW5uZXIgLnNpZGUtYmFubmVyIC5jYXJkLWJvZHkgLm5ld3NsZXR0ZXItYXJlYSAuc3Vic2NyaXB0aW9uLW5lZWRzLXZhbGlkYXRpb24xIC5pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYWRkb24gYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLmRldGFpbC1iYW5uZXIgLnNpZGUtYmFubmVyIC5jYXJkLWJvZHkgLm5ld3NsZXR0ZXItYXJlYSAuc3Vic2NyaXB0aW9uLW5lZWRzLXZhbGlkYXRpb24xIC5pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYWRkb24gYnV0dG9uIGkge1xuICBmb250LXNpemU6IDIuMWVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuc2lkZS1iYW5uZXIgLnBvc3Qtc2hhcmUtYXJlYSAuc29jaWFsLWRlZmF1bHQge1xuICAgIGZvbnQtc2l6ZTogMS44ZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgfVxuICAuc2lkZS1iYW5uZXIgLnBvc3Qtc2hhcmUtYXJlYSAuc29jaWFsLWRlZmF1bHQgbGkge1xuICAgIG1hcmdpbi1yaWdodDogMC41ZW0gIWltcG9ydGFudDtcbiAgfVxuICAuc2lkZS1iYW5uZXIgLmF1dGhvciBwIHtcbiAgICBtYXJnaW46IDAuMWVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNpZGUtYmFubmVyIC5zb2NpYWwtYWNjb3VudHMgaDMge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG4gIC5zaWRlLWJhbm5lciAuc29jaWFsLWFjY291bnRzIC5zb2NpYWwtaWNvbnMgYSB7XG4gICAgZm9udC1zaXplOiAxLjRlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iLCIkcHJpbWFyeUNvbG9yOiAjN2Y3ZjdmO1xuJHByaW1hcnlXaGl0ZTogI2ZmZjtcbiRwcmltYXJ5QmxhY2s6ICMwMDA7XG4kcHJpbWFyeUJsdWU6ICMwMDYxZjI7XG4kcHJpbWFyeUdyZWVuOiAjMDFiYTk0O1xuJHByaW1hcnlUZWFsOiAjMDVhYjlmO1xuJHByaW1hcnlEYXJrOiMxZjJkNDE7XG4kc2Vjb25kYXJ5V2hpdGU6ICNhN2FiYjM7XG4kc2Vjb25kYXJ5RGFyazogI2EwYTdiMDtcbiRzZWNvbmRhcnlDb2xvcjogIzMwNDA2OTtcbiRwcmltYXJ5R3JheTogIzhlOTVhMDtcbiRsaWdodEJsdWU6ICMwMDdiYzc7Il19 */";
    /***/
  },

  /***/
  "./src/app/details/details.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/details/details.component.ts ***!
    \**********************************************/

  /*! exports provided: DetailsComponent */

  /***/
  function srcAppDetailsDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsComponent", function () {
      return DetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../home.service */
    "./src/app/home.service.ts");
    /* harmony import */


    var _category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../category.service */
    "./src/app/category.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../post.service */
    "./src/app/post.service.ts");

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
          var _this25 = this;

          this.getPostDetails(this.route.snapshot.params.id);
          this.getPostCategory(this.route.snapshot.params.id);
          this.getusers();
          this.getPost();
          this.cat.getCategories().subscribe(function (res) {
            _this25.catList = res;
            console.log(_this25.catList);
            _this25.isLoadingResults = false;
          }, function (err) {
            console.log(err);
            _this25.isLoadingResults = false;
          });
        }
      }, {
        key: "getPostDetails",
        value: function getPostDetails(id) {
          var _this26 = this;

          this.api.getPost(id).subscribe(function (data) {
            _this26.post = data;
            console.log(_this26.post);
            _this26.pageId = "post/details/".concat(_this26.post.id);
            _this26.isLoadingResults = false;
          });
        }
      }, {
        key: "getPostCategory",
        value: function getPostCategory(id) {
          var _this27 = this;

          this.cat.getCategory(id).subscribe(function (data) {
            //console.log(data)
            _this27.checkCat = data;
            console.log(_this27.checkCat);
            _this27.isLoadingResults = false;
          });
        }
      }, {
        key: "getPost",
        value: function getPost() {
          var _this28 = this;

          this.postService.getPosts().subscribe(function (res) {
            _this28.postList = res;
            console.log(_this28.postList);
            _this28.isLoadingResults = false;
          }, function (err) {
            console.log(err);
            _this28.isLoadingResults = false;
          });
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this29 = this;

          this.cat.getCategories().subscribe(function (res) {
            _this29.categories = res;
            console.log(_this29.categories);
            _this29.isLoadingResults = false;
          }, function (err) {
            console.log(err);
            _this29.isLoadingResults = false;
          });
        }
      }, {
        key: "getusers",
        value: function getusers() {
          var _this30 = this;

          this.authApi.getUsers().subscribe(function (res) {
            _this30.users = res;
            console.log(_this30.users);
            _this30.isLoadingResults = false;
          }, function (err) {
            console.log(err);
            _this30.isLoadingResults = false;
          });
        }
      }]);

      return DetailsComponent;
    }();

    DetailsComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]
      }, {
        type: _home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"]
      }, {
        type: _post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./details.component.scss */
      "./src/app/details/details.component.scss"))["default"]]
    })], DetailsComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/footer/footer.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".svg-border-rounded {\n  color: #1f2d41 !important;\n}\n\n.clip-path {\n  margin-top: 0;\n  width: 100%;\n}\n\nfooter {\n  background: #1f2d41;\n  width: 100%;\n}\n\nfooter .footer-top {\n  margin-top: -7em !important;\n}\n\nfooter .footer-banner {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 8em 0 0;\n  color: #a7abb3;\n}\n\nfooter .footer-banner h3 {\n  font-size: 1.3em;\n  padding: 0.8em 0;\n  font-weight: 500;\n  letter-spacing: 2px;\n}\n\nfooter .footer-banner ul li {\n  list-style-type: none;\n  text-align: left;\n  line-height: 1.5;\n}\n\nfooter .footer-logo {\n  color: #fff;\n}\n\nfooter .footer-logo h3 {\n  font-size: 2em;\n  padding: 0;\n  margin: 0;\n}\n\nfooter .footer-logo p {\n  color: #a7abb3;\n  font-size: 15px;\n}\n\nfooter .footer-logo .footer-social i {\n  margin-right: 0.7em;\n  font-size: 1.4em;\n}\n\nfooter .footer-bottom {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 7em 1em -1em;\n  border-top: 1px solid #7f7f7f;\n}\n\nfooter .footer-bottom p {\n  margin-left: 2em;\n  padding: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhY3Rvci9EZXNrdG9wL3Byb2plY3Qvc2Fya2Jsb2cgbWVhbiBzdGFjay9jbGllbnQvc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZmFjdG9yL0Rlc2t0b3AvcHJvamVjdC9zYXJrYmxvZyBtZWFuIHN0YWNrL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlL352YXJpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJBQUE7QUNESjs7QURvQkE7RUFDSSxhQUFBO0VBRUEsV0FBQTtBQ2xCSjs7QURxQkE7RUFDSSxtQkV2QlM7RUZ3QlQsV0FBQTtBQ2xCSjs7QURtQkk7RUFDSSwyQkFBQTtBQ2pCUjs7QURtQkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNFakNTO0FEZ0JqQjs7QURrQlE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2hCWjs7QURtQlk7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNqQmhCOztBRHFCSTtFQUNJLFdFdkRPO0FEb0NmOztBRG9CUTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ2xCWjs7QURvQlE7RUFDSSxjRXhESztFRnlETCxlQUFBO0FDbEJaOztBRHFCWTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7QUNuQmhCOztBRHVCSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FDckJSOztBRHNCUTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ3BCWiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9hc3NldHMvc3R5bGUvfnZhcmlhYmxlLnNjc3MnO1xuXG4uc3ZnLWJvcmRlci1yb3VuZGVkIHtcbiAgICBjb2xvcjogJHByaW1hcnlEYXJrICFpbXBvcnRhbnQ7XG59XG5cbi8vIC5wYWdlLWhlYWRlci1kYXJrIHtcbi8vICAgICBjb2xvcjogI2ZmZjtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyZDQxO1xuLy8gfVxuLy8gLnBhZ2UtaGVhZGVyIHtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgcGFkZGluZy10b3A6IDA7XG4vLyAgICAgcGFkZGluZy1ib3R0b206IDA7XG4vLyB9XG4vLyAuYmctaW1nLWNvdmVyIHtcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlO1xuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4vLyAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbi8vICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjgpLCByZ2JhKDAsIDAsIDAsIDAuNykpLCB1cmwoJy4uLy4uL2Fzc2V0cy9zdHlsZS9jbGFzc2ljLTIwMjgwMTNfOTYwXzcyMC5wbmcnKTtcbi8vICAgICBiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5V2hpdGU7XG4vLyB9XG4uY2xpcC1wYXRoIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIC8vIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vICAgICBjbGlwLXBhdGg6IHBvbHlnb24oNDElIDIyJSwgNTUlIDI0JSwgNjklIDIxJSwgODIlIDE1JSwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSwgMCAwLCAxOCUgMTMlLCAzMSUgMTklKTtcbn1cbmZvb3RlciB7XG4gICAgYmFja2dyb3VuZDogJHByaW1hcnlEYXJrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5mb290ZXItdG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTdlbSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZm9vdGVyLWJhbm5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDhlbSAwIDA7XG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5V2hpdGU7XG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjhlbSAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgIH1cbiAgICAgICAgdWwge1xuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZvb3Rlci1sb2dvIHtcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5V2hpdGU7XG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5V2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3Rlci1zb2NpYWwge1xuICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjdlbTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5mb290ZXItYm90dG9tIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogN2VtIDFlbSAtMWVtO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHByaW1hcnlDb2xvcjtcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMmVtO1xuICAgICAgICAgICAgcGFkZGluZzogMS41ZW07XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsIi5zdmctYm9yZGVyLXJvdW5kZWQge1xuICBjb2xvcjogIzFmMmQ0MSAhaW1wb3J0YW50O1xufVxuXG4uY2xpcC1wYXRoIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMxZjJkNDE7XG4gIHdpZHRoOiAxMDAlO1xufVxuZm9vdGVyIC5mb290ZXItdG9wIHtcbiAgbWFyZ2luLXRvcDogLTdlbSAhaW1wb3J0YW50O1xufVxuZm9vdGVyIC5mb290ZXItYmFubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogOGVtIDAgMDtcbiAgY29sb3I6ICNhN2FiYjM7XG59XG5mb290ZXIgLmZvb3Rlci1iYW5uZXIgaDMge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBwYWRkaW5nOiAwLjhlbSAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuZm9vdGVyIC5mb290ZXItYmFubmVyIHVsIGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuZm9vdGVyIC5mb290ZXItbG9nbyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuZm9vdGVyIC5mb290ZXItbG9nbyBoMyB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5mb290ZXIgLmZvb3Rlci1sb2dvIHAge1xuICBjb2xvcjogI2E3YWJiMztcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuZm9vdGVyIC5mb290ZXItbG9nbyAuZm9vdGVyLXNvY2lhbCBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjdlbTtcbiAgZm9udC1zaXplOiAxLjRlbTtcbn1cbmZvb3RlciAuZm9vdGVyLWJvdHRvbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDdlbSAxZW0gLTFlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3ZjdmN2Y7XG59XG5mb290ZXIgLmZvb3Rlci1ib3R0b20gcCB7XG4gIG1hcmdpbi1sZWZ0OiAyZW07XG4gIHBhZGRpbmc6IDEuNWVtO1xufSIsIiRwcmltYXJ5Q29sb3I6ICM3ZjdmN2Y7XG4kcHJpbWFyeVdoaXRlOiAjZmZmO1xuJHByaW1hcnlCbGFjazogIzAwMDtcbiRwcmltYXJ5Qmx1ZTogIzAwNjFmMjtcbiRwcmltYXJ5R3JlZW46ICMwMWJhOTQ7XG4kcHJpbWFyeVRlYWw6ICMwNWFiOWY7XG4kcHJpbWFyeURhcms6IzFmMmQ0MTtcbiRzZWNvbmRhcnlXaGl0ZTogI2E3YWJiMztcbiRzZWNvbmRhcnlEYXJrOiAjYTBhN2IwO1xuJHNlY29uZGFyeUNvbG9yOiAjMzA0MDY5O1xuJHByaW1hcnlHcmF5OiAjOGU5NWEwO1xuJGxpZ2h0Qmx1ZTogIzAwN2JjNzsiXX0= */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

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

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/header/header.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

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

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/home.service.ts":
  /*!*********************************!*\
    !*** ./src/app/home.service.ts ***!
    \*********************************/

  /*! exports provided: HomeService */

  /***/
  function srcAppHomeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeService", function () {
      return HomeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var apiUrl = 'https://sarkblog.herokuapp.com/api/public/'; // const apiUrl = 'api/public/';

    var HomeService = /*#__PURE__*/function () {
      function HomeService(http) {
        _classCallCheck(this, HomeService);

        this.http = http;
      }

      _createClass(HomeService, [{
        key: "getCategories",
        value: function getCategories() {
          var _this31 = this;

          return this.http.get(apiUrl + 'category').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
            return _this31.log('fetched Categories');
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCategories', [])));
        }
      }, {
        key: "getPosts",
        value: function getPosts() {
          var _this32 = this;

          return this.http.get(apiUrl + 'post').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
            return _this32.log('fetched Posts');
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getPosts', [])));
        }
      }, {
        key: "getPostsByCategory",
        value: function getPostsByCategory(id) {
          var _this33 = this;

          return this.http.get(apiUrl + 'bycategory/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
            return _this33.log('fetched Posts');
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
          var _this34 = this;

          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            console.error(error); // log to console instead

            _this34.log("".concat(operation, " failed: ").concat(error.message));

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

    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HomeService);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-header-dark {\n  color: #fff;\n  background-color: #1f2d41;\n}\n\n.page-header {\n  position: relative;\n  padding-top: 20rem;\n  padding-bottom: 0;\n}\n\n.bg-img-cover {\n  background-position: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('photo-1568992688065-536aad8a12f6.jpeg');\n}\n\nheader .svg-border-rounded {\n  border: none;\n}\n\n.icon-stack-xl {\n  height: 5rem;\n  width: 5rem;\n  font-size: 1.75rem;\n}\n\n.bg-gradient-primary-to-secondary {\n  background-color: #0061f2;\n  border-radius: 100%;\n  margin: 2em 4.5em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  /* background-image: linear-gradient(135deg,#0061f2,rgba(105,0,199,.8)); */\n}\n\n.feature-banner {\n  font-size: 3em;\n}\n\n.feature-text {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.card {\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.35rem;\n  text-decoration: none;\n  box-shadow: 0 -0.85rem 4.8rem 0 rgba(31, 45, 65, 0.15);\n  overflow: hidden;\n  position: relative;\n}\n\n.card .card-body .card-title {\n  margin-bottom: 0.75rem;\n  color: #304069;\n}\n\n.card .card-footer {\n  border: none;\n}\n\n.card .card-footer .post-preview-meta {\n  display: flex;\n  color: #8e95a0;\n}\n\n.card .card-footer .post-preview-meta img {\n  border-radius: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 72px;\n  width: auto;\n}\n\n.card .card-footer .post-preview-meta-details {\n  padding: 0.5em;\n}\n\n.card .card-footer .post-update {\n  display: flex;\n}\n\n.card .card-footer .post-update .post-preview-meta-details-name {\n  margin: 16px 1px 13px 2px;\n}\n\n.lift {\n  box-shadow: 0 0.15rem 1.75rem 0 rgba(31, 45, 65, 0.15);\n  /* transition: transform .15s ease-in-out,box-shadow .15s ease-in-out; */\n  transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.lift:hover {\n  transform: translateY(-0.33333rem);\n  box-shadow: 0 0.5rem 2rem 0 rgba(31, 45, 65, 0.25);\n}\n\n.blog-banner .recent-blog {\n  font-size: 3em;\n}\n\n.blog-banner .card-img-top {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 220px;\n  border: none;\n}\n\n.blog-banner .card-body p {\n  color: #a0a7b0;\n  font-size: 1em;\n  word-spacing: 0.2em;\n  letter-spacing: 0.01em;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.blog-banner .card-body p:hover {\n  text-decoration: none;\n}\n\n@media (max-width: 575.98px) {\n  header .page-header-content .page-first {\n    margin: -6em 2em 7em 2em;\n  }\n\n  .bg-white h3 {\n    font-size: 2.5em;\n    font-weight: 600;\n  }\n  .bg-white .icon-stack {\n    margin: 0em 4.5em;\n  }\n\n  .blog-banner h2 {\n    font-size: 2em !important;\n    font-weight: 600;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhY3Rvci9EZXNrdG9wL3Byb2plY3Qvc2Fya2Jsb2cgbWVhbiBzdGFjay9jbGllbnQvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsIi9ob21lL2ZhY3Rvci9EZXNrdG9wL3Byb2plY3Qvc2Fya2Jsb2cgbWVhbiBzdGFjay9jbGllbnQvc3JjL2Fzc2V0cy9zdHlsZS9+dmFyaWFibGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQ0FKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1SEFBQTtBQ0VKOztBRENJO0VBQ0ksWUFBQTtBQ0VSOztBRENBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBFQUFBO0FDR0o7O0FEREE7RUFDSSxjQUFBO0FDSUo7O0FERkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDS0o7O0FESEE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFFQSxzREFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURKUTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtBQ01aOztBREZJO0VBQ0ksWUFBQTtBQ0lSOztBREhRO0VBQ0UsYUFBQTtFQUNBLGNFM0RJO0FEZ0VkOztBREpVO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNNWjs7QURIUTtFQUNFLGNBQUE7QUNLVjs7QURIUTtFQUNFLGFBQUE7QUNLVjs7QURKVTtFQUNFLHlCQUFBO0FDTVo7O0FEREE7RUFFSSxzREFBQTtFQUtBLHdFQUFBO0VBQ0EscUVBQUE7QUNFSjs7QURDRTtFQUVFLGtDQUFBO0VBRUEsa0RBQUE7QUNFSjs7QURDSTtFQUNJLGNBQUE7QUNFUjs7QURBSTtFQUNJLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNFUjs7QURDUTtFQUNJLGNFN0dJO0VGOEdKLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDQ1o7O0FEQ1E7RUFDSSxxQkFBQTtBQ0NaOztBREdBO0VBR007SUFDRSx3QkFBQTtFQ0ZOOztFRE9FO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtFQ0pKO0VET0E7SUFDRSxpQkFBQTtFQ0xGOztFRFNFO0lBQ0UseUJBQUE7SUFDQSxnQkFBQTtFQ05KO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9hc3NldHMvc3R5bGUvfnZhcmlhYmxlLnNjc3MnO1xuLnBhZ2UtaGVhZGVyLWRhcmsge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjJkNDE7XG59XG4ucGFnZS1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLXRvcDogMjByZW07XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uYmctaW1nLWNvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjgpLCByZ2JhKDAsIDAsIDAsIDAuNykpLCB1cmwoXCIuLi8uLi9hc3NldHMvc3R5bGUvcGhvdG8tMTU2ODk5MjY4ODA2NS01MzZhYWQ4YTEyZjYuanBlZ1wiKTtcbn1cbmhlYWRlciB7XG4gICAgLnN2Zy1ib3JkZXItcm91bmRlZCB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG59XG4uaWNvbi1zdGFjay14bCB7XG4gICAgaGVpZ2h0OiA1cmVtO1xuICAgIHdpZHRoOiA1cmVtO1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cbi5iZy1ncmFkaWVudC1wcmltYXJ5LXRvLXNlY29uZGFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjFmMjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIG1hcmdpbjogMmVtIDQuNWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzAwNjFmMixyZ2JhKDEwNSwwLDE5OSwuOCkpOyAqL1xufVxuLmZlYXR1cmUtYmFubmVyIHtcbiAgICBmb250LXNpemU6IDNlbTtcbn1cbi5mZWF0dXJlLXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNhcmQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgLTAuODVyZW0gNC44cmVtIDAgcmdiYSgzMSwgNDUsIDY1LCAwLjE1KTtcbiAgICBib3gtc2hhZG93OiAwIC0wLjg1cmVtIDQuOHJlbSAwIHJnYmEoMzEsIDQ1LCA2NSwgMC4xNSk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmNhcmQtYm9keSB7XG4gICAgICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gICAgICAgICAgICBjb2xvcjogIzMwNDA2OTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJkLWZvb3RlciB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgLnBvc3QtcHJldmlldy1tZXRhIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeUdyYXk7XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIGhlaWdodDogNzJweDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucG9zdC1wcmV2aWV3LW1ldGEtZGV0YWlscyB7XG4gICAgICAgICAgcGFkZGluZzogMC41ZW07XG4gICAgICAgIH1cbiAgICAgICAgLnBvc3QtdXBkYXRlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC5wb3N0LXByZXZpZXctbWV0YS1kZXRhaWxzLW5hbWUge1xuICAgICAgICAgICAgbWFyZ2luOiAxNnB4IDFweCAxM3B4IDJweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbn1cbi5saWZ0IHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMC4xNXJlbSAxLjc1cmVtIDAgcmdiYSgzMSwgNDUsIDY1LCAwLjE1KTtcbiAgICBib3gtc2hhZG93OiAwIDAuMTVyZW0gMS43NXJlbSAwIHJnYmEoMzEsIDQ1LCA2NSwgMC4xNSk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dCxcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dCxcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgICAvKiB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7ICovXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0gMC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgfVxuICAubGlmdDpob3ZlciB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMzMzMzNyZW0pO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4zMzMzM3JlbSk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAuNXJlbSAycmVtIDAgcmdiYSgzMSwgNDUsIDY1LCAwLjI1KTtcbiAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAycmVtIDAgcmdiYSgzMSwgNDUsIDY1LCAwLjI1KTtcbiAgfVxuLmJsb2ctYmFubmVyIHtcbiAgICAucmVjZW50LWJsb2cge1xuICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICB9XG4gICAgLmNhcmQtaW1nLXRvcCB7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyMjBweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeURhcms7XG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIHdvcmQtc3BhY2luZzogMC4yZW07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIHA6aG92ZXIge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgfVxufVxuQG1lZGlhKG1heC13aWR0aDogNTc1Ljk4cHgpIHsgXG4gIGhlYWRlciB7XG4gICAgLnBhZ2UtaGVhZGVyLWNvbnRlbnQge1xuICAgICAgLnBhZ2UtZmlyc3Qge1xuICAgICAgICBtYXJnaW46IC02ZW0gMmVtIDdlbSAyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5iZy13aGl0ZSB7XG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICBcbiAgLmljb24tc3RhY2sge1xuICAgIG1hcmdpbjogMGVtIDQuNWVtO1xuICB9XG59XG4gIC5ibG9nLWJhbm5lciB7XG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiAyZW0gIWltcG9ydGFudDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIFxuICB9XG4gfVxuXG4iLCIucGFnZS1oZWFkZXItZGFyayB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyZDQxO1xufVxuXG4ucGFnZS1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAyMHJlbTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5iZy1pbWctY292ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjgpLCByZ2JhKDAsIDAsIDAsIDAuNykpLCB1cmwoXCIuLi8uLi9hc3NldHMvc3R5bGUvcGhvdG8tMTU2ODk5MjY4ODA2NS01MzZhYWQ4YTEyZjYuanBlZ1wiKTtcbn1cblxuaGVhZGVyIC5zdmctYm9yZGVyLXJvdW5kZWQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5pY29uLXN0YWNrLXhsIHtcbiAgaGVpZ2h0OiA1cmVtO1xuICB3aWR0aDogNXJlbTtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xufVxuXG4uYmctZ3JhZGllbnQtcHJpbWFyeS10by1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2MWYyO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXJnaW46IDJlbSA0LjVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzAwNjFmMixyZ2JhKDEwNSwwLDE5OSwuOCkpOyAqL1xufVxuXG4uZmVhdHVyZS1iYW5uZXIge1xuICBmb250LXNpemU6IDNlbTtcbn1cblxuLmZlYXR1cmUtdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2FyZCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICBib3JkZXItcmFkaXVzOiAwLjM1cmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAtMC44NXJlbSA0LjhyZW0gMCByZ2JhKDMxLCA0NSwgNjUsIDAuMTUpO1xuICBib3gtc2hhZG93OiAwIC0wLjg1cmVtIDQuOHJlbSAwIHJnYmEoMzEsIDQ1LCA2NSwgMC4xNSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jYXJkIC5jYXJkLWJvZHkgLmNhcmQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICBjb2xvcjogIzMwNDA2OTtcbn1cbi5jYXJkIC5jYXJkLWZvb3RlciB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5jYXJkIC5jYXJkLWZvb3RlciAucG9zdC1wcmV2aWV3LW1ldGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogIzhlOTVhMDtcbn1cbi5jYXJkIC5jYXJkLWZvb3RlciAucG9zdC1wcmV2aWV3LW1ldGEgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGhlaWdodDogNzJweDtcbiAgd2lkdGg6IGF1dG87XG59XG4uY2FyZCAuY2FyZC1mb290ZXIgLnBvc3QtcHJldmlldy1tZXRhLWRldGFpbHMge1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cbi5jYXJkIC5jYXJkLWZvb3RlciAucG9zdC11cGRhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNhcmQgLmNhcmQtZm9vdGVyIC5wb3N0LXVwZGF0ZSAucG9zdC1wcmV2aWV3LW1ldGEtZGV0YWlscy1uYW1lIHtcbiAgbWFyZ2luOiAxNnB4IDFweCAxM3B4IDJweDtcbn1cblxuLmxpZnQge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMC4xNXJlbSAxLjc1cmVtIDAgcmdiYSgzMSwgNDUsIDY1LCAwLjE1KTtcbiAgYm94LXNoYWRvdzogMCAwLjE1cmVtIDEuNzVyZW0gMCByZ2JhKDMxLCA0NSwgNjUsIDAuMTUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LWJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LWJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIC8qIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDsgKi9cbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuXG4ubGlmdDpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjMzMzMzcmVtKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjMzMzMzcmVtKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAuNXJlbSAycmVtIDAgcmdiYSgzMSwgNDUsIDY1LCAwLjI1KTtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMnJlbSAwIHJnYmEoMzEsIDQ1LCA2NSwgMC4yNSk7XG59XG5cbi5ibG9nLWJhbm5lciAucmVjZW50LWJsb2cge1xuICBmb250LXNpemU6IDNlbTtcbn1cbi5ibG9nLWJhbm5lciAuY2FyZC1pbWctdG9wIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIyMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG4uYmxvZy1iYW5uZXIgLmNhcmQtYm9keSBwIHtcbiAgY29sb3I6ICNhMGE3YjA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB3b3JkLXNwYWNpbmc6IDAuMmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5ibG9nLWJhbm5lciAuY2FyZC1ib2R5IHA6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICBoZWFkZXIgLnBhZ2UtaGVhZGVyLWNvbnRlbnQgLnBhZ2UtZmlyc3Qge1xuICAgIG1hcmdpbjogLTZlbSAyZW0gN2VtIDJlbTtcbiAgfVxuXG4gIC5iZy13aGl0ZSBoMyB7XG4gICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gIC5iZy13aGl0ZSAuaWNvbi1zdGFjayB7XG4gICAgbWFyZ2luOiAwZW0gNC41ZW07XG4gIH1cblxuICAuYmxvZy1iYW5uZXIgaDIge1xuICAgIGZvbnQtc2l6ZTogMmVtICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxufSIsIiRwcmltYXJ5Q29sb3I6ICM3ZjdmN2Y7XG4kcHJpbWFyeVdoaXRlOiAjZmZmO1xuJHByaW1hcnlCbGFjazogIzAwMDtcbiRwcmltYXJ5Qmx1ZTogIzAwNjFmMjtcbiRwcmltYXJ5R3JlZW46ICMwMWJhOTQ7XG4kcHJpbWFyeVRlYWw6ICMwNWFiOWY7XG4kcHJpbWFyeURhcms6IzFmMmQ0MTtcbiRzZWNvbmRhcnlXaGl0ZTogI2E3YWJiMztcbiRzZWNvbmRhcnlEYXJrOiAjYTBhN2IwO1xuJHNlY29uZGFyeUNvbG9yOiAjMzA0MDY5O1xuJHByaW1hcnlHcmF5OiAjOGU5NWEwO1xuJGxpZ2h0Qmx1ZTogIzAwN2JjNzsiXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../home.service */
    "./src/app/home.service.ts");
    /* harmony import */


    var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../post.service */
    "./src/app/post.service.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(api, postService) {
        _classCallCheck(this, HomeComponent);

        this.api = api;
        this.postService = postService;
        this.posts = [];
        this.isLoadingResults = true;
        this.page = 1; //this.posts = new Array<any>();
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this35 = this;

          this.api.getPosts().subscribe(function (res) {
            _this35.posts = res;
            console.log(_this35.posts);
            _this35.isLoadingResults = false;
          }, function (err) {
            console.log(err);
            _this35.isLoadingResults = false;
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"]
      }, {
        type: _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/interceptors/token.interceptor.ts":
  /*!***************************************************!*\
    !*** ./src/app/interceptors/token.interceptor.ts ***!
    \***************************************************/

  /*! exports provided: TokenInterceptor */

  /***/
  function srcAppInterceptorsTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
      return TokenInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TokenInterceptor = /*#__PURE__*/function () {
      function TokenInterceptor(router) {
        _classCallCheck(this, TokenInterceptor);

        this.router = router;
      }

      _createClass(TokenInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this36 = this;

          var token = localStorage.getItem('token');

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
          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
              console.log('event--->>>', event);
            }

            return event;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            console.log(error);

            if (error.status === 401) {
              _this36.router.navigate(['login']);
            }

            if (error.status === 400) {
              alert(error.error);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
          }));
        }
      }]);

      return TokenInterceptor;
    }();

    TokenInterceptor.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TokenInterceptor);
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/navbar/navbar.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navbar {\n  padding: 1em 1em 1em 1em;\n}\n.navbar .container .sarkblog-logo {\n  height: 69px;\n  width: 200px;\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n.navbar .container a {\n  color: #7f7f7f;\n  font-size: 18px;\n}\n.navbar .container .navbar-brand {\n  color: #0061f2;\n  letter-spacing: 2px;\n  font-size: 2em;\n  font-weight: 500;\n}\n.navbar .container .navbar-nav {\n  padding: 1em 0em 0em 2em;\n}\n.navbar .container .nav-button {\n  background-color: #01ba94;\n  margin: 0.2em 1em 1em 1em;\n  border-radius: 27px;\n}\n.navbar .container .nav-button button {\n  color: #fff;\n  font-size: 1em;\n  font-weight: 500;\n  letter-spacing: 2px;\n}\n.navbar .container .nav-button button i {\n  margin-left: 5px;\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhY3Rvci9EZXNrdG9wL3Byb2plY3Qvc2Fya2Jsb2cgbWVhbiBzdGFjay9jbGllbnQvc3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZmFjdG9yL0Rlc2t0b3AvcHJvamVjdC9zYXJrYmxvZyBtZWFuIHN0YWNrL2NsaWVudC9zcmMvYXNzZXRzL3N0eWxlL352YXJpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksd0JBQUE7QUNBSjtBREVJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDQVI7QURFSTtFQUNJLGNFWE87RUZZUCxlQUFBO0FDQVI7QURFSTtFQUNJLGNFWk07RUZhTixtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0FSO0FERUk7RUFDSSx3QkFBQTtBQ0FSO0FERUk7RUFDSSx5QkVwQk87RUZxQlAseUJBQUE7RUFDQSxtQkFBQTtBQ0FSO0FEQ1E7RUFDSSxXRTNCRztFRjRCSCxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NaO0FEQVk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNFaEIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3N0eWxlL352YXJpYWJsZS5zY3NzJztcbi5uYXZiYXIge1xuICAgIHBhZGRpbmc6IDFlbSAxZW0gMWVtIDFlbTtcbi5jb250YWluZXIge1xuICAgIC5zYXJrYmxvZy1sb2dvIHtcbiAgICAgICAgaGVpZ2h0OiA2OXB4O1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeUNvbG9yO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIC5uYXZiYXItYnJhbmQge1xuICAgICAgICBjb2xvcjogJHByaW1hcnlCbHVlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4OyBcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICAgIC5uYXZiYXItbmF2IHtcbiAgICAgICAgcGFkZGluZzogMWVtIDBlbSAwZW0gMmVtO1xuICAgIH1cbiAgICAubmF2LWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5R3JlZW47XG4gICAgICAgIG1hcmdpbjogMC4yZW0gMWVtIDFlbSAxZW0gO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyN3B4O1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5V2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbn0iLCIubmF2YmFyIHtcbiAgcGFkZGluZzogMWVtIDFlbSAxZW0gMWVtO1xufVxuLm5hdmJhciAuY29udGFpbmVyIC5zYXJrYmxvZy1sb2dvIHtcbiAgaGVpZ2h0OiA2OXB4O1xuICB3aWR0aDogMjAwcHg7XG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5uYXZiYXIgLmNvbnRhaW5lciBhIHtcbiAgY29sb3I6ICM3ZjdmN2Y7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5uYXZiYXIgLmNvbnRhaW5lciAubmF2YmFyLWJyYW5kIHtcbiAgY29sb3I6ICMwMDYxZjI7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLm5hdmJhciAuY29udGFpbmVyIC5uYXZiYXItbmF2IHtcbiAgcGFkZGluZzogMWVtIDBlbSAwZW0gMmVtO1xufVxuLm5hdmJhciAuY29udGFpbmVyIC5uYXYtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxYmE5NDtcbiAgbWFyZ2luOiAwLjJlbSAxZW0gMWVtIDFlbTtcbiAgYm9yZGVyLXJhZGl1czogMjdweDtcbn1cbi5uYXZiYXIgLmNvbnRhaW5lciAubmF2LWJ1dHRvbiBidXR0b24ge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG4ubmF2YmFyIC5jb250YWluZXIgLm5hdi1idXR0b24gYnV0dG9uIGkge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBmb250LXNpemU6IDFlbTtcbn0iLCIkcHJpbWFyeUNvbG9yOiAjN2Y3ZjdmO1xuJHByaW1hcnlXaGl0ZTogI2ZmZjtcbiRwcmltYXJ5QmxhY2s6ICMwMDA7XG4kcHJpbWFyeUJsdWU6ICMwMDYxZjI7XG4kcHJpbWFyeUdyZWVuOiAjMDFiYTk0O1xuJHByaW1hcnlUZWFsOiAjMDVhYjlmO1xuJHByaW1hcnlEYXJrOiMxZjJkNDE7XG4kc2Vjb25kYXJ5V2hpdGU6ICNhN2FiYjM7XG4kc2Vjb25kYXJ5RGFyazogI2EwYTdiMDtcbiRzZWNvbmRhcnlDb2xvcjogIzMwNDA2OTtcbiRwcmltYXJ5R3JheTogIzhlOTVhMDtcbiRsaWdodEJsdWU6ICMwMDdiYzc7Il19 */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);

        this.navbarCollapsed = true;
      }

      _createClass(NavbarComponent, [{
        key: "toggleNavbarCollapsing",
        value: function toggleNavbarCollapsing() {
          this.navbarCollapsed = !this.navbarCollapsed;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/navbar/navbar.component.scss"))["default"]]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/post.service.ts":
  /*!*********************************!*\
    !*** ./src/app/post.service.ts ***!
    \*********************************/

  /*! exports provided: PostService */

  /***/
  function srcAppPostServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostService", function () {
      return PostService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var apiUrl = 'https://sarkblog.herokuapp.com/api/post/'; //const apiUrl = 'api/post/';

    var PostService = /*#__PURE__*/function () {
      function PostService(http) {
        _classCallCheck(this, PostService);

        this.http = http;
      }

      _createClass(PostService, [{
        key: "getPosts",
        value: function getPosts() {
          var _this37 = this;

          return this.http.get(apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
            return _this37.log('fetched Posts');
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
          var _this38 = this;

          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            console.error(error); // log to console instead

            _this38.log("".concat(operation, " failed: ").concat(error.message));

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

    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PostService);
    /***/
  },

  /***/
  "./src/app/post/post-add/post-add.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/post/post-add/post-add.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostPostAddPostAddComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC1hZGQvcG9zdC1hZGQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/post/post-add/post-add.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/post/post-add/post-add.component.ts ***!
    \*****************************************************/

  /*! exports provided: MyErrorStateMatcher, PostAddComponent */

  /***/
  function srcAppPostPostAddPostAddComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../post.service */
    "./src/app/post.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../category.service */
    "./src/app/category.service.ts");
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
            category: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            postTitle: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            postAuthor: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            postDesc: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            postContent: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            postReference: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            postImgUrl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            readTime: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
        }
      }, {
        key: "onFormSubmit",
        value: function onFormSubmit() {
          var _this39 = this;

          this.isLoadingResults = true;
          this.api.addPost(this.postForm.value).subscribe(function (res) {
            var id = res._id;
            _this39.isLoadingResults = false;

            _this39.router.navigate(['/post/details', id]);
          }, function (err) {
            console.log(err);
            _this39.isLoadingResults = false;
          });
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this40 = this;

          this.catApi.getCategories().subscribe(function (res) {
            _this40.categories = res;
            console.log(_this40.categories);
            _this40.isLoadingResults = false;
          }, function (err) {
            console.log(err);
            _this40.isLoadingResults = false;
          });
        }
      }]);

      return PostAddComponent;
    }();

    PostAddComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]
      }, {
        type: _category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    PostAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post-add',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post-add.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-add/post-add.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post-add.component.scss */
      "./src/app/post/post-add/post-add.component.scss"))["default"]]
    })], PostAddComponent);
    /***/
  },

  /***/
  "./src/app/post/post-details/post-details.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/post/post-details/post-details.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostPostDetailsPostDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC1kZXRhaWxzL3Bvc3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/post/post-details/post-details.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/post/post-details/post-details.component.ts ***!
    \*************************************************************/

  /*! exports provided: PostDetailsComponent */

  /***/
  function srcAppPostPostDetailsPostDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostDetailsComponent", function () {
      return PostDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../post.service */
    "./src/app/post.service.ts");

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
          var _this41 = this;

          this.api.getPost(id).subscribe(function (data) {
            _this41.post = data;
            _this41.post.id = data._id;
            console.log(_this41.post);
            _this41.isLoadingResults = false;
          });
        }
      }, {
        key: "deletePost",
        value: function deletePost(id) {
          var _this42 = this;

          this.isLoadingResults = true;
          this.api.deletePost(id).subscribe(function (res) {
            _this42.isLoadingResults = false;

            _this42.router.navigate(['/post']);
          }, function (err) {
            console.log(err);
            _this42.isLoadingResults = false;
          });
        }
      }]);

      return PostDetailsComponent;
    }();

    PostDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    PostDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-details/post-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post-details.component.scss */
      "./src/app/post/post-details/post-details.component.scss"))["default"]]
    })], PostDetailsComponent);
    /***/
  },

  /***/
  "./src/app/post/post-edit/post-edit.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/post/post-edit/post-edit.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostPostEditPostEditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC1lZGl0L3Bvc3QtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/post/post-edit/post-edit.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/post/post-edit/post-edit.component.ts ***!
    \*******************************************************/

  /*! exports provided: MyErrorStateMatcher, PostEditComponent */

  /***/
  function srcAppPostPostEditPostEditComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../post.service */
    "./src/app/post.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../category.service */
    "./src/app/category.service.ts");
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
            category: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            postTitle: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            postAuthor: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            postDesc: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            postContent: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            postReference: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            postImgUrl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            readTime: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
        }
      }, {
        key: "getPost",
        value: function getPost(id) {
          var _this43 = this;

          this.api.getPost(id).subscribe(function (data) {
            _this43.id = data._id;

            _this43.postForm.setValue({
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
          var _this44 = this;

          this.catApi.getCategories().subscribe(function (res) {
            _this44.categories = res;
            console.log(_this44.categories);
            _this44.isLoadingResults = false;
          }, function (err) {
            console.log(err);
            _this44.isLoadingResults = false;
          });
        }
      }, {
        key: "onFormSubmit",
        value: function onFormSubmit() {
          var _this45 = this;

          this.isLoadingResults = true;
          this.api.updatePost(this.id, this.postForm.value).subscribe(function (res) {
            var id = res._id;
            _this45.isLoadingResults = false;

            _this45.router.navigate(['/post/details', id]);
          }, function (err) {
            console.log(err);
            _this45.isLoadingResults = false;
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
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]
      }, {
        type: _category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    PostEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-edit/post-edit.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post-edit.component.scss */
      "./src/app/post/post-edit/post-edit.component.scss"))["default"]]
    })], PostEditComponent);
    /***/
  },

  /***/
  "./src/app/post/post.component.scss":
  /*!******************************************!*\
    !*** ./src/app/post/post.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostPostComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/post/post.component.ts":
  /*!****************************************!*\
    !*** ./src/app/post/post.component.ts ***!
    \****************************************/

  /*! exports provided: PostComponent */

  /***/
  function srcAppPostPostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostComponent", function () {
      return PostComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../post.service */
    "./src/app/post.service.ts");

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
          var _this46 = this;

          this.api.getPosts().subscribe(function (res) {
            _this46.data = res;
            console.log(_this46.data);
            _this46.isLoadingResults = false;
          }, function (err) {
            console.log(err);
            _this46.isLoadingResults = false;
          });
        }
      }]);

      return PostComponent;
    }();

    PostComponent.ctorParameters = function () {
      return [{
        type: _post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]
      }];
    };

    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post.component.scss */
      "./src/app/post/post.component.scss"))["default"]]
    })], PostComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
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
    /*! /home/factor/Desktop/project/sarkblog mean stack/client/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map