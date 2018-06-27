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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        children: []
    },
    {
        path: 'principal',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        children: []
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-slick */ "./node_modules/ngx-slick/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_typer_effect_typer_effect_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/typer-effect/typer-effect.component */ "./src/app/components/typer-effect/typer-effect.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _providers_provider_page_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./providers/provider-page.service */ "./src/app/providers/provider-page.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _components_typer_effect_typer_effect_component__WEBPACK_IMPORTED_MODULE_7__["TyperEffectComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ngx_slick__WEBPACK_IMPORTED_MODULE_2__["SlickModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [
                _providers_provider_page_service__WEBPACK_IMPORTED_MODULE_9__["PageProvider"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"countries\">\n      <p>Envie sua mensagem e fotos: <a href=\"mailto:contato@capitaojack.com.br\" target=\"_top\">contato@capitaojack.com.br</a></p>\n      <p class=\"edition\">Edição nº 001/Março - Ano 2018</p>\n      <div class=\"flags\">\n          <img src=\"assets/images/flag-brasil.png\" alt=\"capitaojack brasil\">\n          <img src=\"assets/images/flag-argentina.png\" alt=\"capitaojack argentina\">\n          <img src=\"assets/images/flag-uruguai.png\" alt=\"capitaojack uruguai\">\n          <img src=\"assets/images/flag-chile.png\" alt=\"capitaojack chile\">\n          <img src=\"assets/images/flag-paraguai.png\" alt=\"capitaojack paraguai\">\n      </div>\n      <p class=\"edition\">Edição de Abr/2018 também no idioma<br>Espanhol e Inglês</p>\n  </div>\n  <div class=\"essay\">\n      <div class=\"essay-info\">Redação: 479.9702.5750</div>\n      <div class=\"info\">Giovani De Lucca</div>\n      <div class=\"small-info\">Jornalista Responsável:</div>\n      <div class=\"medium-info\">Registro Profissional MTE 17.127/RS</div>\n  </div>\n  <div class=\"clear-both\"></div>\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host footer {\n  background: #111;\n  margin-top: 5px;\n  padding: 40px 80px; }\n  :host footer p {\n    color: #FFF;\n    font-size: 14px;\n    margin: 0; }\n  :host footer .countries {\n    position: relative;\n    font-weight: 300;\n    float: left;\n    width: 78%; }\n  :host footer .countries .edition {\n      margin-top: 16px;\n      font-size: 13px; }\n  :host footer .countries .flags img {\n      height: 26px;\n      margin-right: 5px; }\n  :host footer .essay {\n    position: relative;\n    float: right;\n    width: 20%;\n    color: #FFF;\n    font-weight: 500;\n    letter-spacing: 0.8px; }\n  :host footer .essay .essay-info {\n      font-size: 15px;\n      margin-bottom: 20px; }\n  :host footer .essay .info {\n      font-size: 15px; }\n  :host footer .essay .medium-info {\n      margin-top: 20px;\n      font-size: 13px; }\n  :host footer .essay .small-info {\n      font-size: 10px; }\n  @media screen and (max-width: 768px) {\n  :host footer {\n    padding: 20px 40px; }\n    :host footer .countries {\n      margin-top: 10px;\n      width: 100%; }\n    :host footer .essay {\n      margin-top: 10px;\n      width: 100%; }\n      :host footer .essay .info {\n        font-size: 13px; }\n      :host footer .essay .medium-info {\n        font-size: 11px; }\n      :host footer .essay .small-info {\n        font-size: 9px; } }\n  @media screen and (max-width: 640px) {\n  :host footer {\n    text-align: center;\n    padding: 10px; }\n    :host footer .countries .flags {\n      margin-top: 10px; } }\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/typer-effect/typer-effect.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/typer-effect/typer-effect.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span [innerHtml]=\"text\"></span>\n"

/***/ }),

/***/ "./src/app/components/typer-effect/typer-effect.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/typer-effect/typer-effect.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/typer-effect/typer-effect.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/typer-effect/typer-effect.component.ts ***!
  \*******************************************************************/
/*! exports provided: TyperEffectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TyperEffectComponent", function() { return TyperEffectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TyperEffectComponent = /** @class */ (function () {
    function TyperEffectComponent() {
        this.text = '';
    }
    TyperEffectComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.typer(0, _this.inputText);
        }, this.inputStartAfter);
    };
    TyperEffectComponent.prototype.typer = function (i, str) {
        var _this = this;
        if (i === void 0) { i = 0; }
        setTimeout(function () {
            _this.text = _this.inputText.substring(0, i + 1) + '_';
            if (i < _this.inputText.length) {
                _this.typer(i + 1, str);
            }
            else {
                _this.text = _this.inputText;
                if (_this.inputRepeat) {
                    setTimeout(function () {
                        _this.text = '';
                        _this.typer(0, _this.inputText);
                    }, _this.inputRepeat);
                }
            }
        }, this.inputSpeed);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('text'),
        __metadata("design:type", String)
    ], TyperEffectComponent.prototype, "inputText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('speed'),
        __metadata("design:type", Number)
    ], TyperEffectComponent.prototype, "inputSpeed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('startAfter'),
        __metadata("design:type", Number)
    ], TyperEffectComponent.prototype, "inputStartAfter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('repeat'),
        __metadata("design:type", Number)
    ], TyperEffectComponent.prototype, "inputRepeat", void 0);
    TyperEffectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typer-effect',
            template: __webpack_require__(/*! ./typer-effect.component.html */ "./src/app/components/typer-effect/typer-effect.component.html"),
            styles: [__webpack_require__(/*! ./typer-effect.component.scss */ "./src/app/components/typer-effect/typer-effect.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TyperEffectComponent);
    return TyperEffectComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-slick class=\"slider\" #slickModal=\"slick-modal\" [config]=\"slideConfig\" (beforeChange)=\"beforeChange($event)\" (afterChange)=\"afterChange($event)\">\n    <div ngxSlickItem *ngFor=\"let slide of slides; let i = index\" class=\"slide\" (click)=\"slideClick(i)\">\n        <img src=\"{{ slide.img }}\" width=\"100%\">\n        <img src=\"{{ slide.img }}\" class=\"hover\" width=\"100%\">\n    </div>\n</ngx-slick>\n<div class=\"typer\">\n  <app-typer-effect [text]=\"typerText\" [speed]=\"46\" [startAfter]=\"2000\" [repeat]=\"5000\"></app-typer-effect>\n</div>\n<header>\n    <img [src]=\"activeImage\" alt=\"capitaojack capitao jack\" [class.loading]=\"loadingSlide\">\n    <h3>O Paraíso Que Escolhi</h3>\n</header>\n<section class=\"black-pearl\">\n    <div class=\"text-bottom\">\n        <div class=\"cities komika\">Porto Belo <span class=\"freehand\">e</span> Bombinhas</div>\n        <div class=\"paradise freehand\">Paraíso o Ano Todo</div>\n    </div>\n</section>\n<app-footer></app-footer>\n\n<script src=\"assets/js/main.js\"></script>"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .slider {\n  margin: 25px 0; }\n  :host .slider .slide {\n    position: relative;\n    padding: 0 20px;\n    outline: 0;\n    text-align: center;\n    cursor: pointer; }\n  :host .slider .slide img {\n      display: inline-block;\n      width: auto;\n      height: 60px;\n      pointer-events: none;\n      border-radius: 3px;\n      box-shadow: 0px 0px 15px 0px rgba(204, 51, 0, 0);\n      transition: box-shadow 0.3s ease-in-out; }\n  :host .slider .slide img.hover {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        box-shadow: 0px 0px 15px 0px #cc3300;\n        -webkit-transform: translate(-50%, -50%) scale(1);\n                transform: translate(-50%, -50%) scale(1);\n        transition: all 0.3s ease-in-out; }\n  @media (min-width: 1024px) {\n      :host .slider .slide:hover img {\n        box-shadow: 0px 0px 15px 0px #cc3300; }\n        :host .slider .slide:hover img.hover {\n          box-shadow: 0px 0px 10px 0px #e7a61a;\n          top: 400%;\n          -webkit-transform: translate(-50%, -50%) scale(4);\n                  transform: translate(-50%, -50%) scale(4); } }\n  :host .typer {\n  height: 1.1em;\n  box-sizing: content-box;\n  padding: 10px 5px;\n  color: #cc3300;\n  font-weight: bold; }\n  :host header {\n  width: 100vw; }\n  :host header img {\n    width: 100vw;\n    -o-object-fit: cover;\n       object-fit: cover;\n    height: calc(100vh - 100px - 37.59px);\n    opacity: 1;\n    transition: opacity 0.3s ease-in-out; }\n  :host header img.loading {\n      opacity: 0; }\n  :host header h3 {\n    width: 100vw;\n    height: 60px;\n    margin: 20px auto;\n    background: #FFF;\n    font-size: 60px;\n    font-weight: 500;\n    text-align: center;\n    color: #333; }\n  :host section.black-pearl {\n  position: relative;\n  background: url('porto-belo-cantao.jpeg') center no-repeat;\n  background-size: cover;\n  background-position-x: 60%;\n  width: 100vw;\n  height: 1024px; }\n  :host section.black-pearl .text-bottom {\n    position: absolute;\n    text-align: center;\n    width: 100vw;\n    left: 0;\n    top: 20px; }\n  :host section.black-pearl .text-bottom .cities {\n      text-shadow: 0px 0px 15px black;\n      text-align: center;\n      color: #FFF;\n      font-size: 25px; }\n  :host section.black-pearl .text-bottom .cities span {\n        text-shadow: 0px 0px 15px black;\n        font-size: 62px; }\n  :host section.black-pearl .text-bottom .paradise {\n      text-shadow: 0px 0px 15px black;\n      text-align: center;\n      color: #FFF;\n      font-size: 62px; }\n  @media screen and (max-width: 768px) {\n  :host header img {\n    height: 40vh; }\n  :host header h3 {\n    height: 30px;\n    font-size: 22px; }\n  :host section.black-pearl {\n    background-position-x: 53%;\n    height: 800px; } }\n  @media screen and (max-width: 640px) {\n  :host section.black-pearl .text-bottom .cities {\n    font-size: 22px; }\n    :host section.black-pearl .text-bottom .cities span {\n      font-size: 38px; }\n  :host section.black-pearl .text-bottom .paradise {\n    font-size: 40px; }\n  :host section.black-pearl {\n    height: 500px; } }\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_provider_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/provider-page.service */ "./src/app/providers/provider-page.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(pageProvider) {
        this.pageProvider = pageProvider;
        this.typerText = "";
        this.slideConfig = {
            slidesToShow: 4,
            slidesToScroll: 1,
            focusOnSelect: true,
            variableWidth: true,
            swipe: false,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnFocus: false,
            pauseOnHover: false
        };
        // min 5 slides
        this.slides = [];
        this.loadingSlide = false;
        this.activeImage = 'assets/images/header.jpg';
    }
    HomeComponent.prototype.removeSlide = function () {
        this.slides.length = this.slides.length - 1;
    };
    HomeComponent.prototype.slideClick = function (i) {
        var _this = this;
        this.loadingSlide = true;
        setTimeout(function () {
            _this.activeSlide(i);
            _this.loadingSlide = false;
        }, 1000);
    };
    HomeComponent.prototype.beforeChange = function (e) {
        this.loadingSlide = true;
    };
    HomeComponent.prototype.afterChange = function (e) {
        this.loadingSlide = false;
        this.activeSlide(e.currentSlide);
    };
    HomeComponent.prototype.activeSlide = function (index) {
        this.activeImage = this.slides[index].img;
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageProvider.getPage('principal').then(function (page) {
            _this.typerText = page.texto_animado;
            for (var i = 0; i < page.principal_header_slider.length; i++) {
                _this.slides.push({ img: page.principal_header_slider[i] });
            }
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_provider_page_service__WEBPACK_IMPORTED_MODULE_1__["PageProvider"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/providers/provider-page.service.ts":
/*!****************************************************!*\
  !*** ./src/app/providers/provider-page.service.ts ***!
  \****************************************************/
/*! exports provided: PageProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageProvider", function() { return PageProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageProvider = /** @class */ (function () {
    function PageProvider(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/wp-admin/admin-ajax.php?action=';
        console.log('Hello PageProvider');
    }
    PageProvider.prototype.getPage = function (slug) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + 'getPage&page=' + slug)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(err);
            });
        });
    };
    PageProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PageProvider);
    return PageProvider;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    apiUrl: 'http://localhost',
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/base/Documents/projects/freelas/capitaojack/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map