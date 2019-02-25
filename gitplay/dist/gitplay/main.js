(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <app-link-user></app-link-user>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'gitplay';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _link_user_link_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./link-user/link-user.component */ "./src/app/link-user/link-user.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _github_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./github.service */ "./src/app/github.service.ts");
/* harmony import */ var _link_user_user_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./link-user/user-details.component */ "./src/app/link-user/user-details.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _link_user_link_user_component__WEBPACK_IMPORTED_MODULE_4__["LinkUserComponent"],
                _link_user_user_details_component__WEBPACK_IMPORTED_MODULE_7__["UserDetailsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [_github_service__WEBPACK_IMPORTED_MODULE_6__["APIService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/github.service.ts":
/*!***********************************!*\
  !*** ./src/app/github.service.ts ***!
  \***********************************/
/*! exports provided: APIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIService", function() { return APIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var APIService = /** @class */ (function () {
    function APIService(http) {
        this.http = http;
    }
    APIService.prototype.githubAPI = function (url) {
        console.log(url);
        url = url + '?access_token=03abfa863fe6904145a8bb97df98e302290bbb8f';
        var response = this.http.get(url, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Authorization': '03abfa863fe6904145a8bb97df98e302290bbb8f' }),
            // params: new HttpParams().set('username', '').set('password', ''),
            observe: 'response'
        });
        return response;
    };
    APIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], APIService);
    return APIService;
}());

// auth token: 03abfa863fe6904145a8bb97df98e302290bbb8f


/***/ }),

/***/ "./src/app/link-user/link-user.component.css":
/*!***************************************************!*\
  !*** ./src/app/link-user/link-user.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    box-sizing: border-box;\n}\n\n.data {\n    color: blue;\n    font-family: menlo;\n    font-weight: 500;\n}\n\n.btn {\n    margin: 5px;\n}\n\n#repos  {\n    background-color: azure;\n    height: 230px;\n    overflow: scroll;\n}\n\n#commits  {\n    background-color: azure;\n    height: 250px;\n    overflow: scroll;\n}\n\n.section {\n    margin-top: 5px;\n    box-shadow: 0 2px 6px rgba(47,51,55,0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGluay11c2VyL2xpbmstdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHdDQUF3QztBQUM1QyIsImZpbGUiOiJzcmMvYXBwL2xpbmstdXNlci9saW5rLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5kYXRhIHtcbiAgICBjb2xvcjogYmx1ZTtcbiAgICBmb250LWZhbWlseTogbWVubG87XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmJ0biB7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbiNyZXBvcyAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xuICAgIGhlaWdodDogMjMwcHg7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuI2NvbW1pdHMgIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoNDcsNTEsNTUsMC4xKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/link-user/link-user.component.html":
/*!****************************************************!*\
  !*** ./src/app/link-user/link-user.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <input #username type=\"text\" placeholder=\"username\">\n  <button class=\"btn btn-sm btn-primary\" (click)=\"getUserDetails(username.value)\">Let's Go</button>\n  <div class=\"row\">\n    <div class=\"col-md-6 border section\" *ngIf=\"userURL\">\n\n      <app-user-details \n          [url] = 'userURL'\n          (emitURL) = 'getRepos($event)'></app-user-details>\n\n    </div>\n\n    <div class=\"col-md-6 border section\" *ngIf=\"repoList && repoList.length\">\n      <h5 class=\"text-center\">Repositories: {{repoList.length}}</h5>\n      <div id=\"repos\">\n        <button *ngFor=\"let repo of repoList\" class=\"btn btn-primary btn-sm\" (click)=\"getRepoDetails(repo.url)\">{{repo.name}}</button>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"border section\" *ngIf=\"repoDetails.owner\" id=\"repo-details\">\n    <div class=\"card text-center\">\n      <div class=\"card-header\">\n        {{repoDetails.owner.login}}\n      </div>\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{repoDetails.name}}</h5>\n        <p class=\"card-text\">{{repoDetails.description}}</p>\n        <p>Subscribers: {{repoDetails.subscribers_count}}</p>\n        <p>Watchers: {{repoDetails.watchers_count}}</p>\n        <a href=\"#\" class=\"btn btn-primary\">Commits</a>\n      </div>\n      <div class=\"card-footer text-muted\">\n        github link:<a [href]=\"repoDetails.svn_url\">{{repoDetails.name}}</a>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"commitList && commitList.length\" class=\"section\">\n    <p>Commits: {{commitList.length}}</p>\n    <div id=\"commits\">\n      <hr>\n      <button *ngFor=\"let commit of commitList\" class=\"btn btn-primary btn-sm\">{{commit.sha| slice : 0 : 5 }}</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/link-user/link-user.component.ts":
/*!**************************************************!*\
  !*** ./src/app/link-user/link-user.component.ts ***!
  \**************************************************/
/*! exports provided: LinkUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkUserComponent", function() { return LinkUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _github_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../github.service */ "./src/app/github.service.ts");



var LinkUserComponent = /** @class */ (function () {
    function LinkUserComponent(_user) {
        this._user = _user;
        this.userURL = '';
        this.repoList = [];
        this.commitList = [];
        this.repoDetails = {};
    }
    LinkUserComponent.prototype.ngOnInit = function () {
    };
    LinkUserComponent.prototype.getUserDetails = function (username) {
        this.userURL = "https://api.github.com/users/" + username;
        //also fires user-details component
    };
    LinkUserComponent.prototype.getRepos = function (user_reposURL) {
        var _this = this;
        this._user.githubAPI(user_reposURL)
            .subscribe(function (resp) {
            _this.repoList = _this.repoList.concat(resp.body);
            if (resp.headers.get('Link')) {
                var linkHeader = resp.headers.get('Link');
                if (linkHeader.includes('next')) {
                    var links = _this.linkParser(linkHeader);
                    var nextURL = links['next']['url'];
                    _this.getRepos(nextURL);
                }
            }
        });
    };
    LinkUserComponent.prototype.getRepoDetails = function (repoURL) {
        var _this = this;
        console.log(repoURL);
        this._user.githubAPI(repoURL)
            .subscribe(function (resp) {
            console.log(resp.body);
            _this.repoDetails = resp.body;
        });
    };
    LinkUserComponent.prototype.getCommits = function (repoURL) {
        var _this = this;
        if (repoURL.includes('sha')) {
            repoURL = repoURL.slice(0, -6);
            console.log(repoURL);
        }
        this._user.githubAPI(repoURL)
            .subscribe(function (resp) {
            _this.commitList = _this.commitList.concat(resp.body);
            if (resp.headers.get('Link')) {
                var linkHeader = resp.headers.get('Link');
                console.log(linkHeader);
                if (linkHeader.includes('next')) {
                    var links = _this.linkParser(linkHeader);
                    console.log(links);
                    var nextURL = links['next']['url'];
                    console.log(nextURL);
                    _this.getCommits(nextURL);
                }
            }
        });
    };
    LinkUserComponent.prototype.linkParser = function (link) {
        var re = /<([^\?]+\?[a-z]+=([\d]+))>;[\s]*rel="([a-z]+)"/g;
        var arrRes = [];
        var obj = {};
        while ((arrRes = re.exec(link)) !== null) {
            obj[arrRes[3]] = {
                url: arrRes[1],
                page: arrRes[2]
            };
        }
        return obj;
    };
    LinkUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-link-user',
            template: __webpack_require__(/*! ./link-user.component.html */ "./src/app/link-user/link-user.component.html"),
            styles: [__webpack_require__(/*! ./link-user.component.css */ "./src/app/link-user/link-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_github_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]])
    ], LinkUserComponent);
    return LinkUserComponent;
}());



/***/ }),

/***/ "./src/app/link-user/user-details.component.css":
/*!******************************************************!*\
  !*** ./src/app/link-user/user-details.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpbmstdXNlci91c2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/link-user/user-details.component.html":
/*!*******************************************************!*\
  !*** ./src/app/link-user/user-details.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"userDetails.login\" class=\"card mb-3 text-right inline\" style=\"max-width: 540px;\">\n  <div class=\"row no-gutters\">\n    <div class=\"col-md-6\">\n      <img [src]=\"userDetails.avatar_url\" class=\"card-img\">\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{userDetails.login}}</h5>\n        <div class=\"card-text\">\n          <p>Public Repositories: <span class=\"data\">{{userDetails.public_repos}}</span><br>\n            Public Gists: <span class=\"data\">{{userDetails.public_gists}}</span><br>\n            Following: <span class=\"data\">{{userDetails.following}}</span><br>\n            Followers: <span class=\"data\">{{userDetails.followers}}</span></p>\n        </div>\n        <a href=\"#\" class=\"btn btn-primary\" (click)=\"getRepos(userDetails.repos_url)\">List Repos</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/link-user/user-details.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/link-user/user-details.component.ts ***!
  \*****************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _github_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../github.service */ "./src/app/github.service.ts");




var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(_userDetails) {
        this._userDetails = _userDetails;
        this.emitURL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userDetails = {};
    }
    UserDetailsComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this._userDetails.githubAPI(this.url)
            .subscribe(function (resp) {
            // checking the rate limiting
            console.log(resp.headers.get('X-RateLimit-Limit'));
            console.log(resp.headers.get('X-RateLimit-Remaining'));
            _this.userDetails = resp.body;
        });
    };
    UserDetailsComponent.prototype.getRepos = function (repoListURL) {
        console.log(repoListURL);
        this.emitURL.emit(repoListURL);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserDetailsComponent.prototype, "url", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserDetailsComponent.prototype, "emitURL", void 0);
    UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/link-user/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/link-user/user-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_github_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Harman/github/Small Projects/git-play/gitplay/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map