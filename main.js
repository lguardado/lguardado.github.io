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

/***/ "./src/app/about/About.component.html":
/*!********************************************!*\
  !*** ./src/app/about/About.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <!-- About -->\n  <section>\n      <ol>\n          <li>\n            <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\n          </li>\n        </ol>\n    <div class=\"section-marker\" id=\"about\"></div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 text-center\">\n          <h2 class=\"section-heading text-uppercase\">{{ 'ABOUT_SECTION.EXPERIENCE' | translate}}</h2>\n          <h3 class=\"section-subheading text-muted\"></h3>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <ul class=\"timeline\">\n            <li class=\"timeline-item\">\n                <div class=\"timeline-image\">\n                    <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#portfolioModal1\">\n                      <img class=\"rounded-circle img-fluid\" src=\"assets/img/about/solstice.jpg\" alt=\"\">\n                    </a>\n                  </div>\n              <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                  <h5>{{ \"ABOUT_SECTION.DEC_NOW\" | translate }}</h5>\n                  <h4 class=\"subheading\">{{ \"ABOUT_SECTION.SOLSTICE.SOLSTICE\" | translate }}</h4>\n                  <a class=\"portfolio-link\" href=\"https://www.solstice.com/join-our-team-buenos-aires\" target=\"_blank\">{{ 'SITE' | translate}}</a>\n                </div>\n                <div class=\"timeline-body\">\n                  <p class=\"text-muted\">{{ \"ABOUT_SECTION.SOLSTICE_INTRO\" | translate }}</p>\n                  <div class=\"portfolio-link\" data-toggle=\"modal\" (click)=\"openDialog('Solstice')\"> {{ 'READ_MORE' | translate }}\n                  </div>\n\n                </div>\n              </div>\n            </li>\n            <li class=\"timeline-inverted timeline-item\">\n              <div class=\"timeline-image\">\n                <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#portfolioModal2\">\n                  <img class=\"rounded-circle img-fluid\" src=\"assets/img/about/iatasa.png\" alt=\"\">\n                </a>\n              </div>\n              <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                  <h5>{{ \"ABOUT_SECTION.MAY_DEC\" | translate }}</h5>\n                  <h4 class=\"subheading\">{{ \"ABOUT_SECTION.IATASA.IATASA\" | translate }}</h4>\n                </div>\n                <div class=\"timeline-body\">\n                  <a class=\"portfolio-link\" href=\"http://iatasa.com/Web/Default.aspx\" target=\"_blank\"> {{ \"SITE\" | translate }}</a>\n                  <p class=\"text-muted\">{{ \"ABOUT_SECTION.IATASA_INTRO\" | translate }}</p>\n                  <a class=\"portfolio-link\" data-toggle=\"modal\" (click)=\"openDialog('Iatasa')\">\n                    {{ 'READ_MORE' | translate }}\n                  </a>\n                </div>\n              </div>\n            </li>\n            <li class=\"timeline-item\">\n              <div class=\"timeline-image\">\n                <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#portfolioModal3\">\n                  <img class=\"rounded-circle img-fluid\" src=\"assets/img/about/access_informatica.png\" alt=\"\">\n                </a>\n              </div>\n              <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                  <h5>{{ \"ABOUT_SECTION.AUG_APR\" | translate }}</h5>\n                  <h4 class=\"subheading\">{{ \"ABOUT_SECTION.ACCESS\" | translate }}</h4>\n                </div>\n                <div class=\"timeline-body\">\n                  <a class=\"portfolio-link\" href=\"http://mlmanager.com.ar/\" target=\"_blank\"> {{ 'SITE' | translate }}</a>\n                  <p class=\"text-muted\">{{ \"ABOUT_SECTION.ACCESS_INTRO\" | translate }}\n                  </p>\n                  \n                  <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#portfolioModal3\">\n                    {{ 'READ_MORE' | translate }}\n                  </a>\n                </div>\n              </div>\n            </li>\n            <li class=\"timeline-inverted timeline-item\">\n              <div class=\"timeline-image\">\n                  <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#portfolioModal4\">\n                <img class=\"rounded-circle img-fluid\" src=\"assets/img/about/cablevision_fibertel.jpg\" alt=\"\">\n                </a>\n              </div>\n              <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                  <h5>{{ \"ABOUT_SECTION.MARCH_AUG\" | translate }}</h5>\n                  <h4 class=\"subheading\">{{ \"ABOUT_SECTION.CABLEVISION\" | translate }}</h4>\n                </div>\n                <div class=\"timeline-body\">\n                  <a class=\"portfolio-link\" href=\"https://www.cablevisionfibertel.com.ar/\" target=\"_blank\"> {{ \"SITE\" | translate }}</a>\n                  <p class=\"text-muted\">{{ \"ABOUT_SECTION.CABLEVISION_INTRO\" | translate }}\n                  </p>\n                  <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#portfolioModal4\">\n                    {{ 'READ_MORE' | translate }}\n                  </a>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/about/About.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/About.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timeline {\n  position: relative;\n  padding: 0;\n  list-style: none; }\n  .timeline .rounded-circle {\n    height: 100%; }\n  .timeline .timeline-item {\n    padding-bottom: 300px; }\n  .timeline:before {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 40px;\n    width: 2px;\n    margin-left: -1.5px;\n    content: '';\n    background-color: #e9ecef; }\n  .timeline > li {\n    position: relative;\n    min-height: 50px;\n    margin-bottom: 50px; }\n  .timeline > li:after, .timeline > li:before {\n      display: none;\n      content: ' '; }\n  .timeline > li:after {\n      clear: both; }\n  .timeline > li .timeline-panel {\n      position: relative;\n      float: right;\n      width: 100%;\n      padding: 0 20px 0 100px;\n      text-align: left; }\n  .timeline > li .timeline-panel:before {\n        right: auto;\n        left: -15px;\n        border-right-width: 15px;\n        border-left-width: 0; }\n  .timeline > li .timeline-panel:after {\n        right: auto;\n        left: -14px;\n        border-right-width: 14px;\n        border-left-width: 0; }\n  .timeline > li .timeline-image {\n      transition: box-shadow 0.3s ease-in;\n      position: absolute;\n      z-index: 100;\n      left: 0;\n      width: 80px;\n      height: 80px;\n      margin-left: 0;\n      text-align: center;\n      color: white;\n      border: 7px solid #e9ecef;\n      border-radius: 100%;\n      background-color: #fed136; }\n  .timeline > li .timeline-image:hover {\n        box-shadow: 3px 0px 25px #989898;\n        transition: box-shadow 0.3s ease-in; }\n  .timeline > li .timeline-image h4 {\n        font-size: 10px;\n        line-height: 14px;\n        margin-top: 12px; }\n  .timeline > li.timeline-inverted > .timeline-panel {\n      float: right;\n      padding: 0 20px 0 100px;\n      text-align: left; }\n  .timeline > li.timeline-inverted > .timeline-panel:before {\n        right: auto;\n        left: -15px;\n        border-right-width: 15px;\n        border-left-width: 0; }\n  .timeline > li.timeline-inverted > .timeline-panel:after {\n        right: auto;\n        left: -14px;\n        border-right-width: 14px;\n        border-left-width: 0; }\n  .timeline > li:last-child {\n      margin-bottom: 0; }\n  .timeline .timeline-heading .portfolio-link {\n    color: #2c70ba; }\n  .timeline .timeline-heading h4 {\n    margin-top: 0;\n    color: inherit; }\n  .timeline .timeline-heading h4.subheading {\n      text-transform: none; }\n  .timeline .timeline-body .portfolio-link {\n    color: #298be4; }\n  .timeline .timeline-body > ul, .timeline .timeline-body > p {\n    margin-bottom: 0; }\n  @media (max-width: 425px) {\n  .timeline .timeline-item {\n    padding-bottom: 450px; } }\n  @media (min-width: 768px) {\n  .timeline:before {\n    left: 50%; }\n  .timeline > li {\n    min-height: 100px;\n    margin-bottom: 100px; }\n    .timeline > li .timeline-panel {\n      float: left;\n      width: 41%;\n      padding: 0 20px 20px 30px;\n      text-align: right; }\n    .timeline > li .timeline-image {\n      left: 50%;\n      width: 100px;\n      height: 100px;\n      margin-left: -50px; }\n      .timeline > li .timeline-image h4 {\n        font-size: 13px;\n        line-height: 18px;\n        margin-top: 16px; }\n    .timeline > li.timeline-inverted > .timeline-panel {\n      float: right;\n      padding: 0 30px 20px 20px;\n      text-align: left; } }\n  @media (min-width: 992px) {\n  .timeline > li {\n    min-height: 150px; }\n    .timeline > li .timeline-panel {\n      padding: 0 20px 20px; }\n    .timeline > li .timeline-image {\n      width: 150px;\n      height: 150px;\n      margin-left: -75px; }\n      .timeline > li .timeline-image h4 {\n        font-size: 18px;\n        line-height: 26px;\n        margin-top: 30px; }\n    .timeline > li.timeline-inverted > .timeline-panel {\n      padding: 0 20px 20px; } }\n  @media (min-width: 1200px) {\n  .timeline > li {\n    min-height: 170px; }\n    .timeline > li .timeline-panel {\n      padding: 0 20px 20px 100px; }\n    .timeline > li .timeline-image {\n      width: 170px;\n      height: 170px;\n      margin-left: -85px; }\n      .timeline > li .timeline-image h4 {\n        margin-top: 40px; }\n    .timeline > li.timeline-inverted > .timeline-panel {\n      padding: 0 100px 20px 20px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWNhc2d1YXJkYWRvL25nLXBvcnRmb2xpby9zcmMvYXBwL2Fib3V0L0Fib3V0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2x1Y2FzZ3VhcmRhZG8vbmctcG9ydGZvbGlvL3NyYy9jc3Mvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUlFLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsaUJBQWdCLEVBcUhqQjtFQTNIRDtJQUVJLGFBQVksRUFDYjtFQUhIO0lBUUksc0JBQXFCLEVBQ3RCO0VBVEg7SUFXSSxtQkFBa0I7SUFDbEIsT0FBTTtJQUNOLFVBQVM7SUFDVCxXQUFVO0lBQ1YsV0FBVTtJQUNWLG9CQUFtQjtJQUNuQixZQUFXO0lBQ1gsMEJBQXlCLEVBQzFCO0VBbkJIO0lBcUJJLG1CQUFrQjtJQUNsQixpQkFBZ0I7SUFDaEIsb0JBQW1CLEVBNkVwQjtFQXBHSDtNQXlCTSxjQUFhO01BQ2IsYUFBWSxFQUNiO0VBM0JMO01BNkJNLFlBQVcsRUFDWjtFQTlCTDtNQWdDTSxtQkFBa0I7TUFDbEIsYUFBWTtNQUNaLFlBQVc7TUFDWCx3QkFBdUI7TUFDdkIsaUJBQWdCLEVBYWpCO0VBakRMO1FBc0NRLFlBQVc7UUFDWCxZQUFXO1FBQ1gseUJBQXdCO1FBQ3hCLHFCQUFvQixFQUNyQjtFQTFDUDtRQTRDUSxZQUFXO1FBQ1gsWUFBVztRQUNYLHlCQUF3QjtRQUN4QixxQkFBb0IsRUFDckI7RUFoRFA7TUFxRE0sb0NBQW1DO01BRW5DLG1CQUFrQjtNQUNsQixhQUFZO01BQ1osUUFBTztNQUNQLFlBQVc7TUFDWCxhQUFZO01BQ1osZUFBYztNQUNkLG1CQUFrQjtNQUNsQixhQUFZO01BQ1osMEJBQXlCO01BQ3pCLG9CQUFtQjtNQUNuQiwwQkFBeUIsRUFjMUI7RUEvRUw7UUFvRVEsaUNBQWdDO1FBR2hDLG9DQUFtQyxFQUVwQztFQXpFUDtRQTJFUSxnQkFBZTtRQUNmLGtCQUFpQjtRQUNqQixpQkFBZ0IsRUFDakI7RUE5RVA7TUFpRk0sYUFBWTtNQUNaLHdCQUF1QjtNQUN2QixpQkFBZ0IsRUFhakI7RUFoR0w7UUFxRlEsWUFBVztRQUNYLFlBQVc7UUFDWCx5QkFBd0I7UUFDeEIscUJBQW9CLEVBQ3JCO0VBekZQO1FBMkZRLFlBQVc7UUFDWCxZQUFXO1FBQ1gseUJBQXdCO1FBQ3hCLHFCQUFvQixFQUNyQjtFQS9GUDtNQWtHTSxpQkFBZ0IsRUFDakI7RUFuR0w7SUF1R00sZUNsRmMsRURtRmY7RUF4R0w7SUEwR00sY0FBYTtJQUNiLGVBQWMsRUFJZjtFQS9HTDtNQTZHUSxxQkFBb0IsRUFDckI7RUE5R1A7SUFtSE0sZUFBYyxFQUNmO0VBcEhMO0lBdUhRLGlCQUFnQixFQUNqQjtFQUtQO0VBQ0U7SUFDRSxzQkFBcUIsRUFDdEIsRUFBQTtFQUdIO0VBQ0U7SUFFSSxVQUFTLEVBQ1Y7RUFISDtJQUtJLGtCQUFpQjtJQUNqQixxQkFBb0IsRUF1QnJCO0lBN0JIO01BUU0sWUFBVztNQUNYLFdBQVU7TUFDViwwQkFBeUI7TUFDekIsa0JBQWlCLEVBQ2xCO0lBWkw7TUFjTSxVQUFTO01BQ1QsYUFBWTtNQUNaLGNBQWE7TUFDYixtQkFBa0IsRUFNbkI7TUF2Qkw7UUFtQlEsZ0JBQWU7UUFDZixrQkFBaUI7UUFDakIsaUJBQWdCLEVBQ2pCO0lBdEJQO01BeUJNLGFBQVk7TUFDWiwwQkFBeUI7TUFDekIsaUJBQWdCLEVBQ2pCLEVBQUE7RUFLUDtFQUNFO0lBQ0Usa0JBQWlCLEVBaUJsQjtJQWxCRDtNQUdJLHFCQUFvQixFQUNyQjtJQUpIO01BTUksYUFBWTtNQUNaLGNBQWE7TUFDYixtQkFBa0IsRUFNbkI7TUFkSDtRQVVNLGdCQUFlO1FBQ2Ysa0JBQWlCO1FBQ2pCLGlCQUFnQixFQUNqQjtJQWJMO01BZ0JJLHFCQUFvQixFQUNyQixFQUFBO0VBSUw7RUFDRTtJQUNFLGtCQUFpQixFQWVsQjtJQWhCRDtNQUdJLDJCQUEwQixFQUMzQjtJQUpIO01BTUksYUFBWTtNQUNaLGNBQWE7TUFDYixtQkFBa0IsRUFJbkI7TUFaSDtRQVVNLGlCQUFnQixFQUNqQjtJQVhMO01BY0ksMkJBQTBCLEVBQzNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9BYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2Nzcy9zdHlsZXMvdmFyaWFibGVzJztcblxuLnRpbWVsaW5lIHtcbiAgLnJvdW5kZWQtY2lyY2xlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICAudGltZWxpbmUtaXRlbSB7XG4gICAgcGFkZGluZy1ib3R0b206IDMwMHB4O1xuICB9XG4gICY6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiA0MHB4O1xuICAgIHdpZHRoOiAycHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xLjVweDtcbiAgICBjb250ZW50OiAnJztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICB9XG4gID4gbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgJjphZnRlciwgJjpiZWZvcmUge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICB9XG4gICAgJjphZnRlciB7XG4gICAgICBjbGVhcjogYm90aDtcbiAgICB9XG4gICAgLnRpbWVsaW5lLXBhbmVsIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMCAyMHB4IDAgMTAwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogLTE1cHg7XG4gICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMTVweDtcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gICAgICB9XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IC0xNHB4O1xuICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDE0cHg7XG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICAgICAgfVxuICAgIH1cbiAgICAudGltZWxpbmUtaW1hZ2Uge1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LWJveC1zaGFkb3cgMC4zcyBlYXNlLWluO1xuICAgICAgdHJhbnNpdGlvbjogLXdlYmtpdC1ib3gtc2hhZG93IDAuM3MgZWFzZS1pbjtcbiAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLWluO1xuICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2UtaW4sIC13ZWJraXQtYm94LXNoYWRvdyAwLjNzIGVhc2UtaW47XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAxMDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogN3B4IHNvbGlkICNlOWVjZWY7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZDEzNjtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAwcHggMjVweCAjOTg5ODk4O1xuICAgICAgICBib3gtc2hhZG93OiAzcHggMHB4IDI1cHggIzk4OTg5ODtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LWJveC1zaGFkb3cgMC4zcyBlYXNlLWluO1xuICAgICAgICB0cmFuc2l0aW9uOiAtd2Via2l0LWJveC1zaGFkb3cgMC4zcyBlYXNlLWluO1xuICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZS1pbjtcbiAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2UtaW4sIC13ZWJraXQtYm94LXNoYWRvdyAwLjNzIGVhc2UtaW47XG4gICAgICB9XG4gICAgICBoNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICB9XG4gICAgfVxuICAgICYudGltZWxpbmUtaW52ZXJ0ZWQgPiAudGltZWxpbmUtcGFuZWwge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgcGFkZGluZzogMCAyMHB4IDAgMTAwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogLTE1cHg7XG4gICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMTVweDtcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gICAgICB9XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IC0xNHB4O1xuICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDE0cHg7XG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICAgICAgfVxuICAgIH1cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cbiAgLnRpbWVsaW5lLWhlYWRpbmcge1xuICAgIC5wb3J0Zm9saW8tbGluayB7XG4gICAgICBjb2xvcjogJGJsdWUtY29sb3I7XG4gICAgfVxuICAgIGg0IHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICYuc3ViaGVhZGluZyB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAudGltZWxpbmUtYm9keSB7XG4gICAgLnBvcnRmb2xpby1saW5rIHtcbiAgICAgIGNvbG9yOiAjMjk4YmU0O1xuICAgIH1cbiAgICA+IHtcbiAgICAgIHVsLCBwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC50aW1lbGluZSAudGltZWxpbmUtaXRlbSB7XG4gICAgcGFkZGluZy1ib3R0b206IDQ1MHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAudGltZWxpbmUge1xuICAgICY6YmVmb3JlIHtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICB9XG4gICAgPiBsaSB7XG4gICAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgICAgLnRpbWVsaW5lLXBhbmVsIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHdpZHRoOiA0MSU7XG4gICAgICAgIHBhZGRpbmc6IDAgMjBweCAyMHB4IDMwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgICAgLnRpbWVsaW5lLWltYWdlIHtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcbiAgICAgICAgaDQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nOiAwIDMwcHggMjBweCAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnRpbWVsaW5lID4gbGkge1xuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgIC50aW1lbGluZS1wYW5lbCB7XG4gICAgICBwYWRkaW5nOiAwIDIwcHggMjBweDtcbiAgICB9XG4gICAgLnRpbWVsaW5lLWltYWdlIHtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogLTc1cHg7XG4gICAgICBoNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICB9XG4gICAgfVxuICAgICYudGltZWxpbmUtaW52ZXJ0ZWQgPiAudGltZWxpbmUtcGFuZWwge1xuICAgICAgcGFkZGluZzogMCAyMHB4IDIwcHg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnRpbWVsaW5lID4gbGkge1xuICAgIG1pbi1oZWlnaHQ6IDE3MHB4O1xuICAgIC50aW1lbGluZS1wYW5lbCB7XG4gICAgICBwYWRkaW5nOiAwIDIwcHggMjBweCAxMDBweDtcbiAgICB9XG4gICAgLnRpbWVsaW5lLWltYWdlIHtcbiAgICAgIHdpZHRoOiAxNzBweDtcbiAgICAgIGhlaWdodDogMTcwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogLTg1cHg7XG4gICAgICBoNCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICB9XG4gICAgfVxuICAgICYudGltZWxpbmUtaW52ZXJ0ZWQgPiAudGltZWxpbmUtcGFuZWwge1xuICAgICAgcGFkZGluZzogMCAxMDBweCAyMHB4IDIwcHg7XG4gICAgfVxuICB9XG59XG4iLCIvLyBmb250IGZhbWlseVxuJGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1jb25kZW5zZWQ6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcblxuLy8gZm9udCB3ZWlnaHRcbiRmb250LWJvbGRlcjogODAwO1xuJGZvbnQtYm9sZDogNzAwO1xuJGZvbnQtc2VtaS1ib2xkOiA2MDA7XG4kZm9udC1yZWd1bGFyOiA0MDA7XG4kZm9udC1saWdodDogMzAwO1xuXG4vLyBjb2xvcnNcbiRyZWQtY29sb3I6ICNiYjIzMzI7XG4kYmxhY2stY29sb3I6ICMwMDAwMDA7XG4kd2hpdGUtY29sb3I6ICNmZmZmZmY7XG4keWVsbG93LWNvbG9yOiAjZmVkMTM2O1xuJHNvZnQteWVsbG93LWNvbG9yOiAjZjllN2E2O1xuJGNoYXJjb2FsLWNvbG9yOiAjNDA0MDQxO1xuJHdhcm0tZ3JheS1jb2xvcjogIzZmNmQ2ZDtcbiRhbG1vc3Qtd2hpdGU6ICNmYWZhZmI7XG4kbmV1dHJhbC1ncmF5OiAjZGJkYmRiO1xuJGxpZ2h0LWdyYXktY29sb3I6ICNhN2E5YWI7XG4kd2FzaC1ncmF5LWNvbG9yOiAjZjFmMWYyO1xuJGJsdWUtY29sb3I6ICMyYzcwYmE7XG4kZXJyb3ItcmVkLWNvbG9yOiAjZGYwMDAwO1xuJGdyZWVuLWNvbG9yOiAjMDA4NzAwO1xuJG9yYW5nZS1jb2xvcjogI2ZjNjUwRDtcbiRlZGl0LWJsdWUtY29sb3I6ICMyYzcwYmE7XG4kZGFyay1ibHVlLWNvbG9yOiAjMDAzRTdFO1xuJGJyb3duaXNoLWdyZXk6ICM1YzVhNWE7XG4kZGFyay1ncmF5LWNvbG9yOiAjNGM0YjRiO1xuXG4vLyBidXR0b246aG92ZXIgY29sb3JzXG4kYnV0dG9uLWhvdmVyLWRhcmstcmVkLWNvbG9yOiAjOGMxYTE5O1xuJGJ1dHRvbi1ob3Zlci1kYXJrLWNoYXJjb2FsLWNvbG9yOiAjMzAzMDMwO1xuJGJ1dHRvbi1ob3Zlci1kYXJrLW5ldXRyYWwtZ3JheTogI2E0YTRhNDtcblxuXG4vLyBzb2NpYWwgbWVkaWEgY29sb3JzXG4kZmFjZWJvb2stY29sb3I6ICMzQjU5OTg7XG4kdHdpdHRlci1jb2xvcjogIzU1YWNlZTtcbiRnb29nbGVwbHVzLWNvbG9yOiAjZGQ0YjM5O1xuJGxpbmtlZGluLWNvbG9yOiAjMDA3N0I1O1xuJHlvdXR1YmUtY29sb3I6ICNiYjAwMDA7XG5cbi8vZ2xvYmFsIGhlYWRlciBjb2xvcnNcbiRkYXJrLWdyYXktY29sb3I6ICM1NTU7XG4kaGVhZGVyLWdyYXktY29sb3I6ICM4MDgyODU7XG5cbi8vIHRlbXBvcmFyeSBjb2xvcnNcbiRncmF5LWNvbG9yLTI6ICNiYmJkYzA7XG4kZ3JheS1jb2xvci0zOiAjZTZlN2U4O1xuJGdyYXktY29sb3ItNDogIzUxNTE1MjtcbiRncmF5LWNvbG9yLTU6ICNiYmJkYzA7XG4kZ3JheS1jb2xvci02OiAjOTc5Nzk3O1xuJGdyYXktY29sb3ItNzogI2U0ZTRlNDtcbiRncmF5LWNvbG9yLTg6ICM1ODU4NWI7XG4kZ3JheS1jb2xvci0xMDogIzBkMWUzMjtcbiRncmF5LWNvbG9yLTExOiAjODA4Mjg0O1xuJGdyYXktY29sb3ItMTI6ICMzMjMyMzY7XG4keWVsbG93LWNvbG9yOiAjZjVjOTIzO1xuJGxpZ2h0LWdyZWVuLWNvbG9yOiAjYWZjZTRhO1xuXG4vL29wYWNpdHktY29sb3JzXG4kZ3JheS1vcGFjaXR5OiByZ2JhKDE2NywgMTY5LCAxNzEsIDAuNSk7XG4kYmxhY2stb3BhY2l0eTogcmdiYSgwLCAwLCAwLCAwLjUpO1xuJGJsYWNrLW9wYWNpdHktMTogcmdiYSgwLCAwLCAwLCAwLjkpO1xuJGJsYWNrLW9wYWNpdHktMjU6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4kYmxhY2stb3BhY2l0eS0wOiByZ2JhKDAsIDAsIDAsIDApO1xuXG4vL2ZvbnQtc2l6ZXNcbiRjYXB0aW9uLWZvbnQtc2l6ZTogKFxuICBzbTogMTJweCxcbiAgbnVsbDogMTFweFxuKTtcblxuJGlucHV0LWVycm9yLWZvbnQtc2l6ZTogKFxuICBudWxsOiAxMnB4XG4pO1xuXG4keHgtc21hbGwtZm9udC1zaXplOiAoXG4gIG51bGw6IDEycHhcbik7XG5cbiR4LXNtYWxsLWZvbnQtc2l6ZTogKFxuICBudWxsOiAxM3B4XG4pO1xuXG5cbiR4eHgtc21hbGwtZm9udC1zaXplOiAoXG4gIG51bGw6IDExcHhcbik7XG4kc21hbGwtZm9udC1zaXplOiAoXG4gIG51bGw6IDE0cHhcbik7XG5cbiRtZWRpdW0tZm9udC1zaXplOiAoXG4gIG51bGw6IDE2cHhcbik7XG5cbiR4LW1lZGl1bS1mb250LXNpemU6IChcbiAgbnVsbDogMThweFxuKTtcblxuJGxhcmdlLWZvbnQtc2l6ZTogKFxuICBudWxsOiAyMHB4XG4pO1xuXG4keC1sYXJnZS1mb250LXNpemU6IChcbiAgbnVsbDogMjJweFxuKTtcblxuJHRpdGxlLXNtYWxsLWZvbnQtc2l6ZTogKFxuICBudWxsOiAyNHB4XG4pO1xuXG4kdGl0bGUtbWVkaXVtLWZvbnQtc2l6ZTogKFxuICBudWxsOiAyOHB4XG4pO1xuXG4kdGl0bGUtbGFyZ2UtZm9udC1zaXplOiAoXG4gIG51bGw6IDMycHhcbik7XG5cbi8vY3VzdG9tIGZvbnQgc2l6ZXNcbiRiaWdnZXItZm9udC1zaXplOiAoXG4gIG51bGw6IDQwcHhcbik7XG5cbi8vaWNvbi1mb250IHNpemVzXG4kdG9vbGJhci1pY29uLXNpemU6IChcbiAgbnVsbDogMjJweFxuKTtcblxuLy9zb2NpYWwgbWVkaWEgaWNvbi1mb250IHNpemVzXG4kc29jaWFsLWljb24tc2l6ZTogKFxuICBudWxsOiAyMHB4XG4pO1xuXG4kZ29vZ2xlLXBsdXMtaWNvbi1zaXplOiAoXG4gIG51bGw6IDE4cHhcbik7XG5cbiR0d2l0dGVyLWljb24tc2l6ZTogKFxuICBudWxsOiAxNnB4XG4pO1xuXG4vL3RlbXBvcmFyeSBmb250c1xuJHJlZ3VsYXItZm9udC1zaXplczogKFxuICBudWxsOiAxM3B4LFxuICBtZDogMTRweFxuKTtcblxuJHZlcnktc21hbGwtZm9udC1zaXplczogKFxuICBudWxsOiAxMHB4LFxuICBtZDogMTFweFxuKTtcblxuJHNtYWxsLWZvbnQtc2l6ZXM6IChcbiAgbnVsbDogMTFweCxcbiAgbWQ6IDEycHhcbik7XG5cbiRib2xkLWZvbnQtc2l6ZXM6IChcbiAgbnVsbDogMTRweCxcbiAgbWQ6IDE2cHhcbik7XG5cbiR0aXRsZS1mb250LXNpemVzOiAoXG4gIG51bGw6IDEzcHgsXG4gIG1kOiAxNHB4XG4pO1xuXG4kbWVkaXVtLWZvbnQtc2l6ZXM6IChcbiAgbnVsbDogMTZweCxcbiAgbWQ6IDE4cHhcbik7XG5cbiRzdWItdGl0bGUtZm9udC1zaXplczogKFxuICBudWxsOiAxNHB4XG4pO1xuXG4kYWN0aXZpdHktZm9udC1zaXplczogKFxuICBudWxsOiAxNnB4LFxuICBtZDogMjBweFxuKTtcblxuJGJpZy1mb250LXNpemVzOiAoXG4gIG51bGw6IDE2cHgsXG4gIG1kOiAxOHB4XG4pO1xuXG4kYmlnZ2VyLWZvbnQtc2l6ZXM6IChcbiAgbnVsbDogMTZweCxcbiAgc206IDE4cHgsXG4gIG1kOiAyNHB4XG4pO1xuXG4kc2VhcmNoLWhlbHAtZm9udC1zaXplOiAoXG4gIG51bGw6IDE4cHgsXG4gIHNtOiAyMnB4LFxuICBtZDogMjhweFxuKTtcbiRzZWFyY2gtZm9udC1zaXplOiAoXG4gIG51bGw6IDI4cHgsXG4gIHNtOiAyMnB4LFxuICBtZDogMjhweFxuKTtcblxuJHJlY2VudC1hY3Rpdml0eS1mb250LXNpemU6IChcbiAgbnVsbDogMThweCxcbiAgc206IDIycHgsXG4gIG1kOiAyOHB4XG4pO1xuXG4kaS13YW50LWZvbnQtc2l6ZTogKFxuICBzbTogMjhweCxcbiAgbWQ6IDI4cHgsXG4gIGxnOiA0MHB4XG4pO1xuXG4kc2VhcmNoLXJlc3VsdHMtZm9udC1zaXplOiAoXG4gIG51bGw6IDE0cHgsXG4gIHNtOiAxNnB4LFxuICBtZDogMThweFxuKTtcblxuLy89PSBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzIGZyb20gYm9vdHN0cmFwXG5cbi8vIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lXG4vLyoqIERlcHJlY2F0ZWQgYEBzY3JlZW4teHNgIGFzIG9mIHYzLjAuMVxuJHNjcmVlbi14czogICAgICAgICAgICAgICAgICA0ODBweDtcbi8vKiogRGVwcmVjYXRlZCBgJHNjcmVlbi14cy1taW5gIGFzIG9mIHYzLjIuMFxuJHNjcmVlbi14cy1taW46ICAgICAgICAgICAgICAkc2NyZWVuLXhzO1xuLy8qKiBEZXByZWNhdGVkIGBAc2NyZWVuLXBob25lYCBhcyBvZiB2My4wLjFcbiRzY3JlZW4tcGhvbmU6ICAgICAgICAgICAgICAgJHNjcmVlbi14cy1taW47XG5cbi8vIFNtYWxsIHNjcmVlbiAvIHRhYmxldFxuLy8qKiBEZXByZWNhdGVkIGAkc2NyZWVuLXNtYCBhcyBvZiB2My4wLjFcbiRzY3JlZW4tc206ICAgICAgICAgICAgICAgICAgNzY4cHg7XG4kc2NyZWVuLXNtLW1pbjogICAgICAgICAgICAgICRzY3JlZW4tc207XG4vLyoqIERlcHJlY2F0ZWQgYCRzY3JlZW4tdGFibGV0YCBhcyBvZiB2My4wLjFcbiRzY3JlZW4tdGFibGV0OiAgICAgICAgICAgICAgJHNjcmVlbi1zbS1taW47XG5cbi8vIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wXG4vLyoqIERlcHJlY2F0ZWQgYCRzY3JlZW4tbWRgIGFzIG9mIHYzLjAuMVxuJHNjcmVlbi1tZDogICAgICAgICAgICAgICAgICA5OTJweDtcbiRzY3JlZW4tbWQtbWluOiAgICAgICAgICAgICAgJHNjcmVlbi1tZDtcbi8vKiogRGVwcmVjYXRlZCBgJHNjcmVlbi1kZXNrdG9wYCBhcyBvZiB2My4wLjFcbiRzY3JlZW4tZGVza3RvcDogICAgICAgICAgICAgJHNjcmVlbi1tZC1taW47XG5cbi8vIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcFxuLy8qKiBEZXByZWNhdGVkIGAkc2NyZWVuLWxnYCBhcyBvZiB2My4wLjFcbiRzY3JlZW4tbGc6ICAgICAgICAgICAgICAgICAgMTIwMHB4O1xuJHNjcmVlbi1sZy1taW46ICAgICAgICAgICAgICAkc2NyZWVuLWxnO1xuLy8qKiBEZXByZWNhdGVkIGAkc2NyZWVuLWxnLWRlc2t0b3BgIGFzIG9mIHYzLjAuMVxuJHNjcmVlbi1sZy1kZXNrdG9wOiAgICAgICAgICAkc2NyZWVuLWxnLW1pbjtcblxuLy8gU28gbWVkaWEgcXVlcmllcyBkb24ndCBvdmVybGFwIHdoZW4gcmVxdWlyZWQsIHByb3ZpZGUgYSBtYXhpbXVtXG4kc2NyZWVuLXhzLW1heDogICAgICAgICAgICAgICgkc2NyZWVuLXNtLW1pbiAtIDEpO1xuJHNjcmVlbi1zbS1tYXg6ICAgICAgICAgICAgICAoJHNjcmVlbi1tZC1taW4gLSAxKTtcbiRzY3JlZW4tbWQtbWF4OiAgICAgICAgICAgICAgKCRzY3JlZW4tbGctbWluIC0gMSk7XG5cbiRicmVha3BvaW50czogKFxuICB4czogJHNjcmVlbi14cyxcbiAgc206ICRzY3JlZW4tc20sXG4gIG1kOiAkc2NyZWVuLW1kLFxuICBsZzogJHNjcmVlbi1sZ1xuKTtcblxuIl19 */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modal_model_modal_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/model/modal.model */ "./src/app/modal/model/modal.model.ts");






var AboutComponent = /** @class */ (function () {
    function AboutComponent(dialog, translateService) {
        this.dialog = dialog;
        this.translateService = translateService;
        this.data = new _modal_model_modal_model__WEBPACK_IMPORTED_MODULE_5__["ModalModel"]();
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.getSolsticeTranslations();
        this.getIatasaTranslations();
    };
    AboutComponent.prototype.openDialog = function (company) {
        switch (company) {
            case 'Solstice': {
                this.data = this.solsticeTranslations;
                break;
            }
            case 'Iatasa': {
                this.data = this.iatasaTranslations;
                break;
            }
        }
        var dialogRef = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"], {
            width: '60%',
            minWidth: '60%',
            height: '60%',
            minHeight: '60%',
            data: this.data
        });
        console.log(dialogRef);
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    AboutComponent.prototype.getSolsticeVariables = function () {
        return [
            'ABOUT_SECTION.SOLSTICE.SOLSTICE',
            'ABOUT_SECTION.SOLSTICE.BIO',
            'ABOUT_SECTION.SOLSTICE.POSITION',
            'ABOUT_SECTION.SOLSTICE.CURRENT',
            'ABOUT_SECTION.SOLSTICE.OTHER',
            'ABOUT_SECTION.SOLSTICE.MORE',
            'ABOUT_SECTION.SOLSTICE.MORE_URL',
            'ABOUT_SECTION.SOLSTICE.MORE_PART2',
            'ABOUT_SECTION.SOLSTICE.URL',
            'ABOUT_SECTION.SOLSTICE.IMAGE_URL'
        ];
    };
    AboutComponent.prototype.getIatasaVariables = function () {
        return [
            'ABOUT_SECTION.IATASA.IATASA',
            'ABOUT_SECTION.IATASA.POSITION',
            'ABOUT_SECTION.IATASA.BIO',
            'ABOUT_SECTION.IATASA.CURRENT',
            'ABOUT_SECTION.IATASA.OTHER',
            'ABOUT_SECTION.IATASA.URL',
            'ABOUT_SECTION.IATASA.IMAGE_URL'
        ];
    };
    AboutComponent.prototype.getSolsticeTranslations = function () {
        var _this = this;
        var translateVariables = this.getSolsticeVariables();
        var translations = new _modal_model_modal_model__WEBPACK_IMPORTED_MODULE_5__["ModalModel"];
        this.translateService.get(translateVariables).subscribe(function (res) {
            translations.companyName = res['ABOUT_SECTION.SOLSTICE.SOLSTICE'];
            translations.companyPosition = res['ABOUT_SECTION.SOLSTICE.POSITION'];
            translations.companyBio = res['ABOUT_SECTION.SOLSTICE.BIO'];
            translations.current = res['ABOUT_SECTION.SOLSTICE.CURRENT'];
            translations.other = res['ABOUT_SECTION.SOLSTICE.OTHER'];
            translations.more = res['ABOUT_SECTION.SOLSTICE.MORE'];
            translations.moreUrl = res['ABOUT_SECTION.SOLSTICE.MORE_URL'];
            translations.more2 = res['ABOUT_SECTION.SOLSTICE.MORE_PART2'];
            translations.url = res['ABOUT_SECTION.SOLSTICE.URL'];
            translations.image_url = res['ABOUT_SECTION.SOLSTICE.IMAGE_URL'];
            _this.solsticeTranslations = translations;
        });
    };
    AboutComponent.prototype.getIatasaTranslations = function () {
        var _this = this;
        var translateVariables = this.getIatasaVariables();
        var translations = new _modal_model_modal_model__WEBPACK_IMPORTED_MODULE_5__["ModalModel"];
        this.translateService.get(translateVariables).subscribe(function (res) {
            translations.companyName = res['ABOUT_SECTION.IATASA.IATASA'];
            translations.companyPosition = res['ABOUT_SECTION.IATASA.POSITION'];
            translations.companyBio = res['ABOUT_SECTION.IATASA.BIO'];
            translations.current = res['ABOUT_SECTION.IATASA.CURRENT'];
            translations.other = res['ABOUT_SECTION.IATASA.OTHER'];
            translations.url = res['ABOUT_SECTION.IATASA.URL'];
            translations.image_url = res['ABOUT_SECTION.IATASA.IMAGE_URL'];
            _this.iatasaTranslations = translations;
        });
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./About.component.html */ "./src/app/about/About.component.html"),
            styles: [__webpack_require__(/*! ./About.component.scss */ "./src/app/about/About.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (window:scroll)=\"scroll()\">\n  <app-navbar [isTopScroll]=\"isTopScroll\"></app-navbar>\n  <app-header></app-header>\n  <app-education></app-education>\n  <app-skills></app-skills>\n  <app-about></app-about>\n  <app-feedback></app-feedback>\n  <app-contact></app-contact>\n  <app-print></app-print>\n  <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        this.title = 'ng-portfolio';
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
    }
    AppComponent.prototype.scroll = function () {
        this.isTopScroll = !(window.pageYOffset > 0);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.scroll();
        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./print/print.component */ "./src/app/print/print.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");




















// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__["TranslateHttpLoader"](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _education_education_component__WEBPACK_IMPORTED_MODULE_6__["EducationComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_9__["FeedbackComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                _print_print_component__WEBPACK_IMPORTED_MODULE_11__["PrintComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["ModalComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]]
                    }
                }),
                _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["ModalComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <!-- Contact -->\n  <section id=\"contact\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 text-center\">\n          <h2 class=\"section-heading text-uppercase\">{{ 'CONTACT.CONTACT_ME' | translate }}</h2>\n          <h3 class=\"es section-subheading white-text\">{{ 'CONTACT.CONTACT_INFO' | translate }}\n            <a href=\"mailto:lucas.guardado@gmail.com\"> {{ 'CONTACT.EMAIL' | translate }}</a></h3>\n          <h3 class=\"es section-subheading white-text\">{{ 'CONTACT.LINKEDIN' | translate }}\n            <a href=\"https://www.linkedin.com/in/lucas-guardado\" target=\"_blank\">{{ 'HERE' | translate }}</a></h3>\n        </div>\n      </div>\n    </div>\n  </section>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/education/education.component.html":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <!-- education Grid -->\n  <section>\n    <div class=\"section-marker\" id=\"education\"></div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 text-center\">\n          <h2 class=\"section-heading text-uppercase education-title\">{{ 'EDUCATION.EDUCATION' | translate }}</h2>\n        </div>\n      </div>\n      <div class=\"row education-row\">\n            <mat-card>\n            <h4 >{{ 'EDUCATION.SA' | translate }}</h4>\n            <p class=\"es text-muted\">{{ 'EDUCATION.ORT' | translate}}</p>\n            <a class=\"portfolio-link\" href=\"http://www.ort.edu.ar/\" target=\"_blank\"> {{ 'SITE' | translate}}</a>\n          </mat-card>\n         \n            <mat-card>\n              <h4 class=\"es\">{{ 'EDUCATION.ELECTRONICS' | translate }}</h4>\n              <p class=\"es text-muted\">{{ 'EDUCATION.LA_SALETTE' | translate}}</p>\n              <a class=\"es portfolio-link\" href=\"http://www.lasalette.com.ar/\" target=\"_blank\"> {{ 'SITE' | translate }}</a>\n            </mat-card>\n      </div>\n    </div>\n  </section>\n"

/***/ }),

/***/ "./src/app/education/education.component.scss":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".education-row {\n  justify-content: space-around; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWNhc2d1YXJkYWRvL25nLXBvcnRmb2xpby9zcmMvYXBwL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBNkIsRUFDOUIiLCJmaWxlIjoic3JjL2FwcC9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkdWNhdGlvbi1yb3cge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.scss */ "./src/app/education/education.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/feedback/feedback.component.html":
/*!**************************************************!*\
  !*** ./src/app/feedback/feedback.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  <!-- Feedback -->\n  <section class=\"bg-light\" >\n    <div id=\"feedback\" class=\"section-marker\"></div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 text-center\">\n          <h2 class=\"es section-heading text-uppercase\">{{ 'FEEDBACK.ABOUT' | translate }}</h2>\n          <h3 class=\"section-subheading text-muted feedback-intro\">{{ 'FEEDBACK.INTRO' | translate }}</h3>\n        </div>\n      </div>\n      <div class=\"row\">\n        <!-- Feedback member -->\n        <div class=\"col-sm-4\">\n          <div class=\"feedback-member\">\n            <img class=\"mx-auto rounded-circle\" src=\"assets/img/team/1.png\" alt=\"\" data-toggle=\"modal\" href=\"#feedbackModal1\">\n            <!-- Partial feedback -->\n            <p class=\"text-muted feedback-text\">\"Lucas is one of the nicest people I have worked with...\"</p>\n            <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#feedbackModal1\">\n              {{ 'READ_MORE' | translate }}\n            </a>\n          </div>\n        </div>\n        <!-- Feedback member -->\n        <div class=\"col-sm-4\">\n          <div class=\"feedback-member\">\n            <img class=\"mx-auto rounded-circle\" src=\"assets/img/team/2.png\" alt=\"\" data-toggle=\"modal\" href=\"#feedbackModal2\">\n            <!-- Partial feedback -->\n            <p class=\"text-muted feedback-text\">\"Lucas is very knowledgeable and has the unique skill of questioning everything that is\n              unclear...\"\n            </p>\n            <a class=\"portfolio-link feedback-text\" data-toggle=\"modal\" href=\"#feedbackModal2\">\n                {{ 'READ_MORE' | translate }}\n            </a>\n          </div>\n        </div>\n        <!-- Feedback member -->\n        <div class=\"col-sm-4\">\n          <div class=\"feedback-member\">\n            <img class=\"mx-auto rounded-circle\" src=\"assets/img/team/3.png\" alt=\"\" data-toggle=\"modal\" href=\"#feedbackModal3\">\n            <!-- Partial feedback -->\n            <p class=\"text-muted feedback-text\">\"Lucas is the epitome of the principle Catch Excellence...\"</p>\n            <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#feedbackModal3\">\n                {{ 'READ_MORE' | translate }}\n            </a>\n          </div>\n        </div>\n        <!-- Feedback member -->\n        <div class=\"col-sm-4\">\n          <div class=\"feedback-member\">\n            <img class=\"mx-auto rounded-circle\" src=\"assets/img/team/4.png\" alt=\"\" data-toggle=\"modal\" href=\"#feedbackModal4\">\n            <!-- Partial feedback -->\n            <p class=\"text-muted feedback-text\">\"The biggest thing I have noticed change in Lucas lately is that he is embracing his role\n              a leader...\"</p>\n            <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#feedbackModal4\">\n                {{ 'READ_MORE' | translate }}\n            </a>\n          </div>\n        </div>\n        <!-- Feedback member -->\n        <div class=\"col-sm-4\">\n          <div class=\"feedback-member\">\n            <img class=\"mx-auto rounded-circle\" src=\"assets/img/team/5.png\" alt=\"\" data-toggle=\"modal\" href=\"#feedbackModal5\">\n            <!-- Partial feedback -->\n            <p class=\"text-muted feedback-text\">\"Lucas has the ability to learn new technologies very easily...\"</p>\n            <a class=\"portfolio-link\" data-toggle=\"modal\" href=\"#feedbackModal5\">\n                {{ 'READ_MORE' | translate }}\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n"

/***/ }),

/***/ "./src/app/feedback/feedback.component.scss":
/*!**************************************************!*\
  !*** ./src/app/feedback/feedback.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feedback-intro {\n  max-width: 500px;\n  margin: 0 auto;\n  margin-bottom: 100px; }\n\n.feedback-member {\n  -moz-flex: 1;\n  flex: 1;\n  -moz-flex-direction: column;\n  flex-direction: column;\n  margin-bottom: 50px;\n  text-align: center; }\n\n.feedback-member .rounded-circle {\n    transition: 0.3s ease-in; }\n\n.feedback-member .rounded-circle:hover {\n      box-shadow: 3px 0px 25px #989898;\n      transition: 0.3s ease-in; }\n\n.feedback-member .portfolio-link {\n    color: #298be4; }\n\n.feedback-member img {\n    width: 150px;\n    height: 150px;\n    border: 7px solid #fff; }\n\n.feedback-member h4 {\n    margin-top: 25px;\n    margin-bottom: 0;\n    text-transform: none; }\n\n.feedback-member p {\n    margin-top: 0; }\n\n.feedback-member .feedback-text {\n    font-style: italic; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWNhc2d1YXJkYWRvL25nLXBvcnRmb2xpby9zcmMvYXBwL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2x1Y2FzZ3VhcmRhZG8vbmctcG9ydGZvbGlvL3NyYy9jc3Mvc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QscUJBQW9CLEVBQ3JCOztBQUVEO0VDK1pFLGFBZGdCO0VBZ0JoQixRQWhCZ0I7RUE5SWhCLDRCRGpROEI7RUNtUTlCLHVCRG5ROEI7RUFDOUIsb0JBQW1CO0VBQ25CLG1CQUFrQixFQTJCbkI7O0FBL0JEO0lDMEVFLHlCRHBFa0MsRUFLakM7O0FBWEg7TUNnSkUsaUNEeEk0QztNQ2tFNUMseUJEakVvQyxFQUNqQzs7QUFWTDtJQWFJLGVBQWMsRUFDZjs7QUFkSDtJQWdCSSxhQUFZO0lBQ1osY0FBYTtJQUNiLHVCQUFzQixFQUN2Qjs7QUFuQkg7SUFxQkksaUJBQWdCO0lBQ2hCLGlCQUFnQjtJQUNoQixxQkFBb0IsRUFDckI7O0FBeEJIO0lBMEJJLGNBQWEsRUFDZDs7QUEzQkg7SUE2QkksbUJBQWtCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9jc3Mvc3R5bGVzL21peGlucyc7XG5cbi5mZWVkYmFjay1pbnRybyB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuLmZlZWRiYWNrLW1lbWJlciB7XG4gIEBpbmNsdWRlIGZsZXg7XG4gIEBpbmNsdWRlIGZsZXgtZGlyZWN0aW9uKGNvbHVtbik7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLnJvdW5kZWQtY2lyY2xlIHtcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKDAuM3MgZWFzZS1pbik7XG4gICAgJjpob3ZlciB7XG4gICAgICBAaW5jbHVkZSBib3gtc2hhZG93KDNweCAwcHggMjVweCAjOTg5ODk4KTtcbiAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oMC4zcyBlYXNlLWluKTtcbiAgICB9XG4gIH1cbiAgLnBvcnRmb2xpby1saW5rIHtcbiAgICBjb2xvcjogIzI5OGJlNDtcbiAgfVxuICBpbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJvcmRlcjogN3B4IHNvbGlkICNmZmY7XG4gIH1cbiAgaDQge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuICBwIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIC5mZWVkYmFjay10ZXh0IHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIH1cbn0iLCJAbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgQGlmICRtZWRpYSA9PSBzbSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkc2NyZWVuLXNtLW1pbikgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRtZWRpYSA9PSBtZCB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkc2NyZWVuLW1kLW1pbikgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRtZWRpYSA9PSBsZyB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkc2NyZWVuLWxnLW1pbikgeyBAY29udGVudDsgfVxuICB9XG59XG5cbi8vZm9yIEFuaW1hdGlvbnNcbkBtaXhpbiBrZXlmcmFtZXMoJGFuaW1hdGlvbk5hbWUpIHtcbiAgQC13ZWJraXQta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW1vei1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtby1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEBrZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIGJvcnJvd2VkIGlkZWFzIGZyb20gaHR0cHM6Ly93d3cuc21hc2hpbmdtYWdhemluZS5jb20vMjAxNS8wNi9yZXNwb25zaXZlLXR5cG9ncmFwaHktd2l0aC1zYXNzLW1hcHMvXG4vLyBmb250LXNpemUgbWl4aW4gdG8gdXNlIHNhc3MgbWFwc1xuQG1peGluIGZvbnQtc2l6ZSgkZnMtbWFwLCAkaW1wb3J0YW50OiAnJywgJGZzLWJyZWFrcG9pbnRzOiAkYnJlYWtwb2ludHMpIHtcbiAgQGVhY2ggJGZzLWJyZWFrcG9pbnQsICRmcy1mb250LXNpemUgaW4gJGZzLW1hcCB7XG4gICAgQGlmICRmcy1icmVha3BvaW50ICE9IG51bGwge1xuICAgICAgLy8gSWYgJGZzLWZvbnQtc2l6ZSBpcyBhIGtleSB0aGF0IGV4aXN0cyBpblxuICAgICAgLy8gJGZzLWJyZWFrcG9pbnRzLCB1c2UgdGhlIHZhbHVlXG4gICAgICBAaWYgbWFwLWhhcy1rZXkoJGZzLWJyZWFrcG9pbnRzLCAkZnMtYnJlYWtwb2ludCkge1xuICAgICAgICAkZnMtYnJlYWtwb2ludDogbWFwLWdldCgkZnMtYnJlYWtwb2ludHMsICRmcy1icmVha3BvaW50KTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRmcy1icmVha3BvaW50KSB7XG4gICAgICAgIEBpbmNsdWRlIG1ha2UtZm9udC1zaXplKCRmcy1mb250LXNpemUsICRpbXBvcnRhbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICBAaW5jbHVkZSBtYWtlLWZvbnQtc2l6ZSgkZnMtZm9udC1zaXplLCAkaW1wb3J0YW50KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVXRpbGl0eSBmdW5jdGlvbiBmb3IgbWl4aW4gZm9udC1zaXplXG5AbWl4aW4gbWFrZS1mb250LXNpemUoJGZzLWZvbnQtc2l6ZSwgJGltcG9ydGFudDogJycpIHtcbiAgLy8gSWYgJGZzLWZvbnQtc2l6ZSBpcyBhIGxpc3QsIGluY2x1ZGVcbiAgLy8gYm90aCBmb250LXNpemUgYW5kIGxpbmUtaGVpZ2h0XG4gIEBpZiB0eXBlLW9mKCRmcy1mb250LXNpemUpID09IFwibGlzdFwiIHtcbiAgICBmb250LXNpemU6IHVucXVvdGUobnRoKCRmcy1mb250LXNpemUsIDEpICsnICcrICRpbXBvcnRhbnQpO1xuICAgIEBpZiAobGVuZ3RoKCRmcy1mb250LXNpemUpID4gMSkge1xuICAgICAgbGluZS1oZWlnaHQ6IHVucXVvdGUobnRoKCRmcy1mb250LXNpemUsIDIpKTtcbiAgICB9XG4gIH1cbiAgQGVsc2Uge1xuICAgIGZvbnQtc2l6ZTogJGZzLWZvbnQtc2l6ZSB1bnF1b3RlKCRpbXBvcnRhbnQpO1xuICB9XG59XG5cblxuQG1peGluIHRyYW5zZm9ybSgkdmFsdWUpe1xuICAtd2Via2l0LXRyYW5zZm9ybTogJHZhbHVlO1xuICAtbXMtdHJhbnNmb3JtOiAkdmFsdWU7IC8vIElFOSBvbmx5XG4gIC1vLXRyYW5zZm9ybTogJHZhbHVlO1xuICB0cmFuc2Zvcm06ICR2YWx1ZTtcbn1cblxuQG1peGluIGZvbnQoJGZvbnQtd2VpZ2h0LCAkZm9udC1zaXplLCAkaW1wb3J0YW50OiAnJykge1xuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xuICBAaW5jbHVkZSBmb250LXNpemUoJGZvbnQtc2l6ZSwgJGltcG9ydGFudCk7XG59XG5cbi8vTWl4aW5zIGZvciB0cmFuc2l0aW9uXG5AbWl4aW4gdHJhbnNpdGlvbigkdHJhbnNpdGlvbi4uLikge1xuICAtbW96LXRyYW5zaXRpb246ICAgICR0cmFuc2l0aW9uO1xuICAtby10cmFuc2l0aW9uOiAgICAgICR0cmFuc2l0aW9uO1xuICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICB0cmFuc2l0aW9uOiAgICAgICAgICR0cmFuc2l0aW9uO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbi1wcm9wZXJ0eSgkcHJvcGVydHkuLi4pIHtcbiAgLW1vei10cmFuc2l0aW9uLXByb3BlcnR5OiAgICAkcHJvcGVydHk7XG4gIC1vLXRyYW5zaXRpb24tcHJvcGVydHk6ICAgICAgJHByb3BlcnR5O1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6ICRwcm9wZXJ0eTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogICAgICAgICAkcHJvcGVydHk7XG59XG5AbWl4aW4gdHJhbnNpdGlvbi1kdXJhdGlvbigkZHVyYXRpb24uLi4pIHtcbiAgLW1vei10cmFuc2l0aW9uLXByb3BlcnR5OiAgICAkZHVyYXRpb247XG4gIC1vLXRyYW5zaXRpb24tcHJvcGVydHk6ICAgICAgJGR1cmF0aW9uO1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6ICRkdXJhdGlvbjtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogICAgICAgICAkZHVyYXRpb247XG59XG5AbWl4aW4gdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24oJHRpbWluZy4uLikge1xuICAtbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiAgICAkdGltaW5nO1xuICAtby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogICAgICAkdGltaW5nO1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiAkdGltaW5nO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogICAgICAgICAkdGltaW5nO1xufVxuQG1peGluIHRyYW5zaXRpb24tZGVsYXkoJGRlbGF5Li4uKSB7XG4gIC1tb3otdHJhbnNpdGlvbi1kZWxheTogICAgJGRlbGF5O1xuICAtby10cmFuc2l0aW9uLWRlbGF5OiAgICAgICRkZWxheTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAkZGVsYXk7XG4gIHRyYW5zaXRpb24tZGVsYXk6ICAgICAgICAgJGRlbGF5O1xufVxuXG4vLyBBbmltYXRpb25zXG5AbWl4aW4gYW5pbWF0aW9uKCRhbmltYXRpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb246ICRhbmltYXRpb247XG4gIC1vLWFuaW1hdGlvbjogJGFuaW1hdGlvbjtcbiAgYW5pbWF0aW9uOiAkYW5pbWF0aW9uO1xufVxuQG1peGluIGFuaW1hdGlvbi1uYW1lKCRuYW1lKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ICRuYW1lO1xuICBhbmltYXRpb24tbmFtZTogJG5hbWU7XG59XG5AbWl4aW4gYW5pbWF0aW9uLWR1cmF0aW9uKCRkdXJhdGlvbikge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogJGR1cmF0aW9uO1xuICBhbmltYXRpb24tZHVyYXRpb246ICRkdXJhdGlvbjtcbn1cbkBtaXhpbiBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uKCR0aW1pbmctZnVuY3Rpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiAkdGltaW5nLWZ1bmN0aW9uO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiAkdGltaW5nLWZ1bmN0aW9uO1xufVxuQG1peGluIGFuaW1hdGlvbi1kZWxheSgkZGVsYXkpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6ICRkZWxheTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAkZGVsYXk7XG59XG5AbWl4aW4gYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCgkaXRlcmF0aW9uLWNvdW50KSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogJGl0ZXJhdGlvbi1jb3VudDtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogJGl0ZXJhdGlvbi1jb3VudDtcbn1cbkBtaXhpbiBhbmltYXRpb24tZGlyZWN0aW9uKCRkaXJlY3Rpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xufVxuQG1peGluIGFuaW1hdGlvbi1maWxsLW1vZGUoJGZpbGwtbW9kZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6ICRmaWxsLW1vZGU7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6ICRmaWxsLW1vZGU7XG59XG5cbi8vIERyb3Agc2hhZG93c1xuLy9cbi8vIE5vdGU6IERlcHJlY2F0ZWQgYC5ib3gtc2hhZG93KClgIGFzIG9mIHYzLjEuMCBzaW5jZSBhbGwgb2YgQm9vdHN0cmFwJ3Ncbi8vIHN1cHBvcnRlZCBicm93c2VycyB0aGF0IGhhdmUgYm94IHNoYWRvdyBjYXBhYmlsaXRpZXMgbm93IHN1cHBvcnQgaXQuXG5cbkBtaXhpbiBib3gtc2hhZG93KCRzaGFkb3cuLi4pIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkc2hhZG93OyAvLyBpT1MgPDQuMyAmIEFuZHJvaWQgPDQuMVxuICBib3gtc2hhZG93OiAkc2hhZG93O1xufVxuXG5cbi8vIEZsZXhib3ggTWl4aW5zXG4vLyBodHRwOi8vcGhpbGlwd2FsdG9uLmdpdGh1Yi5pby9zb2x2ZWQtYnktZmxleGJveC9cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9waGlsaXB3YWx0b24vc29sdmVkLWJ5LWZsZXhib3hcbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTMgQnJpYW4gRnJhbmNvXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvXG4vLyBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG9cbi8vIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC5cbi8vIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZXG4vLyBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULFxuLy8gVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEVcbi8vIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuLy9cbi8vIFRoaXMgaXMgYSBzZXQgb2YgbWl4aW5zIGZvciB0aG9zZSB3aG8gd2FudCB0byBtZXNzIGFyb3VuZCB3aXRoIGZsZXhib3hcbi8vIHVzaW5nIHRoZSBuYXRpdmUgc3VwcG9ydCBvZiBjdXJyZW50IGJyb3dzZXJzLiBGb3IgZnVsbCBzdXBwb3J0IHRhYmxlXG4vLyBjaGVjazogaHR0cDovL2Nhbml1c2UuY29tL2ZsZXhib3hcbi8vXG4vLyBCYXNpY2FsbHkgdGhpcyB3aWxsIHVzZTpcbi8vXG4vLyAqIEZhbGxiYWNrLCBvbGQgc3ludGF4IChJRTEwLCBtb2JpbGUgd2Via2l0IGJyb3dzZXJzIC0gbm8gd3JhcHBpbmcpXG4vLyAqIEZpbmFsIHN0YW5kYXJkcyBzeW50YXggKEZGLCBTYWZhcmksIENocm9tZSwgSUUxMSwgT3BlcmEpXG4vL1xuLy8gVGhpcyB3YXMgaW5zcGlyZWQgYnk6XG4vL1xuLy8gKiBodHRwOi8vZGV2Lm9wZXJhLmNvbS9hcnRpY2xlcy92aWV3L2FkdmFuY2VkLWNyb3NzLWJyb3dzZXItZmxleGJveC9cbi8vXG4vLyBXaXRoIGhlbHAgZnJvbTpcbi8vXG4vLyAqIGh0dHA6Ly93My5vcmcvdHIvY3NzMy1mbGV4Ym94L1xuLy8gKiBodHRwOi8vdGhlLWVjaG9wbGV4Lm5ldC9mbGV4eWJveGVzL1xuLy8gKiBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvaGg3NzIwNjkodj12cy44NSkuYXNweFxuLy8gKiBodHRwOi8vY3NzLXRyaWNrcy5jb20vdXNpbmctZmxleGJveC9cbi8vICogaHR0cDovL2Rldi5vcGVyYS5jb20vYXJ0aWNsZXMvdmlldy9hZHZhbmNlZC1jcm9zcy1icm93c2VyLWZsZXhib3gvXG4vLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLXVzL2RvY3Mvd2ViL2d1aWRlL2Nzcy9mbGV4aWJsZV9ib3hlc1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gRmxleGJveCBDb250YWluZXJzXG4vL1xuLy8gVGhlICdmbGV4JyB2YWx1ZSBjYXVzZXMgYW4gZWxlbWVudCB0byBnZW5lcmF0ZSBhIGJsb2NrLWxldmVsIGZsZXhcbi8vIGNvbnRhaW5lciBib3guXG4vL1xuLy8gVGhlICdpbmxpbmUtZmxleCcgdmFsdWUgY2F1c2VzIGFuIGVsZW1lbnQgdG8gZ2VuZXJhdGUgYSBpbmxpbmUtbGV2ZWxcbi8vIGZsZXggY29udGFpbmVyIGJveC5cbi8vXG4vLyBkaXNwbGF5OiBmbGV4IHwgaW5saW5lLWZsZXhcbi8vXG4vLyBodHRwOi8vdzMub3JnL3RyL2NzczMtZmxleGJveC8jZmxleC1jb250YWluZXJzXG4vL1xuLy8gKFBsYWNlaG9sZGVyIHNlbGVjdG9ycyBmb3IgZWFjaCB0eXBlLCBmb3IgdGhvc2Ugd2hvIHJhdGhlciBAZXh0ZW5kKVxuXG5AbWl4aW4gZmxleGJveCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiVmbGV4Ym94IHsgQGluY2x1ZGUgZmxleGJveDsgfVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIGlubGluZS1mbGV4IHtcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWlubGluZS1mbGV4O1xuICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4laW5saW5lLWZsZXggeyBAaW5jbHVkZSBpbmxpbmUtZmxleDsgfVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gRmxleGJveCBEaXJlY3Rpb25cbi8vXG4vLyBUaGUgJ2ZsZXgtZGlyZWN0aW9uJyBwcm9wZXJ0eSBzcGVjaWZpZXMgaG93IGZsZXggaXRlbXMgYXJlIHBsYWNlZCBpblxuLy8gdGhlIGZsZXggY29udGFpbmVyLCBieSBzZXR0aW5nIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGZsZXggY29udGFpbmVyJ3Ncbi8vIG1haW4gYXhpcy4gVGhpcyBkZXRlcm1pbmVzIHRoZSBkaXJlY3Rpb24gdGhhdCBmbGV4IGl0ZW1zIGFyZSBsYWlkIG91dCBpbi5cbi8vXG4vLyBWYWx1ZXM6IHJvdyB8IHJvdy1yZXZlcnNlIHwgY29sdW1uIHwgY29sdW1uLXJldmVyc2Vcbi8vIERlZmF1bHQ6IHJvd1xuLy9cbi8vIGh0dHA6Ly93My5vcmcvdHIvY3NzMy1mbGV4Ym94LyNmbGV4LWRpcmVjdGlvbi1wcm9wZXJ0eVxuXG5AbWl4aW4gZmxleC1kaXJlY3Rpb24oJHZhbHVlOiByb3cpIHtcbiAgQGlmICR2YWx1ZSA9PSByb3ctcmV2ZXJzZSB7XG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiByZXZlcnNlO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcbiAgfSBAZWxzZSBpZiAkdmFsdWUgPT0gY29sdW1uIHtcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICB9IEBlbHNlIGlmICR2YWx1ZSA9PSBjb2x1bW4tcmV2ZXJzZSB7XG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiByZXZlcnNlO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIH0gQGVsc2Uge1xuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcbiAgfVxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiAkdmFsdWU7XG4gIC1tb3otZmxleC1kaXJlY3Rpb246ICR2YWx1ZTtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiAkdmFsdWU7XG4gIGZsZXgtZGlyZWN0aW9uOiAkdmFsdWU7XG59XG4vLyBTaG9ydGVyIHZlcnNpb246XG5AbWl4aW4gZmxleC1kaXIoJGFyZ3MuLi4pIHsgQGluY2x1ZGUgZmxleC1kaXJlY3Rpb24oJGFyZ3MuLi4pOyB9XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBGbGV4Ym94IFdyYXBcbi8vXG4vLyBUaGUgJ2ZsZXgtd3JhcCcgcHJvcGVydHkgY29udHJvbHMgd2hldGhlciB0aGUgZmxleCBjb250YWluZXIgaXMgc2luZ2xlLWxpbmVcbi8vIG9yIG11bHRpLWxpbmUsIGFuZCB0aGUgZGlyZWN0aW9uIG9mIHRoZSBjcm9zcy1heGlzLCB3aGljaCBkZXRlcm1pbmVzXG4vLyB0aGUgZGlyZWN0aW9uIG5ldyBsaW5lcyBhcmUgc3RhY2tlZCBpbi5cbi8vXG4vLyBWYWx1ZXM6IG5vd3JhcCB8IHdyYXAgfCB3cmFwLXJldmVyc2Vcbi8vIERlZmF1bHQ6IG5vd3JhcFxuLy9cbi8vIGh0dHA6Ly93My5vcmcvdHIvY3NzMy1mbGV4Ym94LyNmbGV4LXdyYXAtcHJvcGVydHlcblxuQG1peGluIGZsZXgtd3JhcCgkdmFsdWU6IG5vd3JhcCkge1xuICAvLyBObyBXZWJraXQgQm94IGZhbGxiYWNrLlxuICAtd2Via2l0LWZsZXgtd3JhcDogJHZhbHVlO1xuICAtbW96LWZsZXgtd3JhcDogJHZhbHVlO1xuICBAaWYgJHZhbHVlID09IG5vd3JhcCB7XG4gICAgLW1zLWZsZXgtd3JhcDogbm9uZTtcbiAgfSBAZWxzZSB7XG4gICAgLW1zLWZsZXgtd3JhcDogJHZhbHVlO1xuICB9XG4gIGZsZXgtd3JhcDogJHZhbHVlO1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gRmxleGJveCBGbG93IChzaG9ydGhhbmQpXG4vL1xuLy8gVGhlICdmbGV4LWZsb3cnIHByb3BlcnR5IGlzIGEgc2hvcnRoYW5kIGZvciBzZXR0aW5nIHRoZSAnZmxleC1kaXJlY3Rpb24nXG4vLyBhbmQgJ2ZsZXgtd3JhcCcgcHJvcGVydGllcywgd2hpY2ggdG9nZXRoZXIgZGVmaW5lIHRoZSBmbGV4IGNvbnRhaW5lcidzXG4vLyBtYWluIGFuZCBjcm9zcyBheGVzLlxuLy9cbi8vIFZhbHVlczogPGZsZXgtZGlyZWN0aW9uPiB8IDxmbGV4LXdyYXA+XG4vLyBEZWZhdWx0OiByb3cgbm93cmFwXG4vL1xuLy8gaHR0cDovL3czLm9yZy90ci9jc3MzLWZsZXhib3gvI2ZsZXgtZmxvdy1wcm9wZXJ0eVxuXG5AbWl4aW4gZmxleC1mbG93KCR2YWx1ZXM6IChyb3cgbm93cmFwKSkge1xuICAvLyBObyBXZWJraXQgQm94IGZhbGxiYWNrLlxuICAtd2Via2l0LWZsZXgtZmxvdzogJHZhbHVlcztcbiAgLW1vei1mbGV4LWZsb3c6ICR2YWx1ZXM7XG4gIC1tcy1mbGV4LWZsb3c6ICR2YWx1ZXM7XG4gIGZsZXgtZmxvdzogJHZhbHVlcztcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEZsZXhib3ggT3JkZXJcbi8vXG4vLyBUaGUgJ29yZGVyJyBwcm9wZXJ0eSBjb250cm9scyB0aGUgb3JkZXIgaW4gd2hpY2ggZmxleCBpdGVtcyBhcHBlYXIgd2l0aGluXG4vLyB0aGVpciBmbGV4IGNvbnRhaW5lciwgYnkgYXNzaWduaW5nIHRoZW0gdG8gb3JkaW5hbCBncm91cHMuXG4vL1xuLy8gRGVmYXVsdDogMFxuLy9cbi8vIGh0dHA6Ly93My5vcmcvdHIvY3NzMy1mbGV4Ym94LyNvcmRlci1wcm9wZXJ0eVxuXG5AbWl4aW4gb3JkZXIoJGludDogMCkge1xuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAkaW50ICsgMTtcbiAgLXdlYmtpdC1vcmRlcjogJGludDtcbiAgLW1vei1vcmRlcjogJGludDtcbiAgLW1zLWZsZXgtb3JkZXI6ICRpbnQ7XG4gIG9yZGVyOiAkaW50O1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gRmxleGJveCBHcm93XG4vL1xuLy8gVGhlICdmbGV4LWdyb3cnIHByb3BlcnR5IHNldHMgdGhlIGZsZXggZ3JvdyBmYWN0b3IuIE5lZ2F0aXZlIG51bWJlcnNcbi8vIGFyZSBpbnZhbGlkLlxuLy9cbi8vIERlZmF1bHQ6IDBcbi8vXG4vLyBodHRwOi8vdzMub3JnL3RyL2NzczMtZmxleGJveC8jZmxleC1ncm93LXByb3BlcnR5XG5cbkBtaXhpbiBmbGV4LWdyb3coJGludDogMCkge1xuICAtd2Via2l0LWJveC1mbGV4OiAkaW50O1xuICAtd2Via2l0LWZsZXgtZ3JvdzogJGludDtcbiAgLW1vei1mbGV4LWdyb3c6ICRpbnQ7XG4gIC1tcy1mbGV4LXBvc2l0aXZlOiAkaW50O1xuICBmbGV4LWdyb3c6ICRpbnQ7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBGbGV4Ym94IFNocmlua1xuLy9cbi8vIFRoZSAnZmxleC1zaHJpbmsnIHByb3BlcnR5IHNldHMgdGhlIGZsZXggc2hyaW5rIGZhY3Rvci4gTmVnYXRpdmUgbnVtYmVyc1xuLy8gYXJlIGludmFsaWQuXG4vL1xuLy8gRGVmYXVsdDogMVxuLy9cbi8vIGh0dHA6Ly93My5vcmcvdHIvY3NzMy1mbGV4Ym94LyNmbGV4LXNocmluay1wcm9wZXJ0eVxuXG5AbWl4aW4gZmxleC1zaHJpbmsoJGludDogMSkge1xuICAtd2Via2l0LWZsZXgtc2hyaW5rOiAkaW50O1xuICAtbW96LWZsZXgtc2hyaW5rOiAkaW50O1xuICAtbXMtZmxleC1uZWdhdGl2ZTogJGludDtcbiAgZmxleC1zaHJpbms6ICRpbnQ7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBGbGV4Ym94IEJhc2lzXG4vL1xuLy8gVGhlICdmbGV4LWJhc2lzJyBwcm9wZXJ0eSBzZXRzIHRoZSBmbGV4IGJhc2lzLiBOZWdhdGl2ZSBsZW5ndGhzIGFyZSBpbnZhbGlkLlxuLy9cbi8vIFZhbHVlczogTGlrZSBcIndpZHRoXCJcbi8vIERlZmF1bHQ6IGF1dG9cbi8vXG4vLyBodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLWZsZXhib3gvI2ZsZXgtYmFzaXMtcHJvcGVydHlcblxuQG1peGluIGZsZXgtYmFzaXMoJHZhbHVlOiBhdXRvKSB7XG4gIC13ZWJraXQtZmxleC1iYXNpczogJHZhbHVlO1xuICAtbW96LWZsZXgtYmFzaXM6ICR2YWx1ZTtcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6ICR2YWx1ZTtcbiAgZmxleC1iYXNpczogJHZhbHVlO1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gRmxleGJveCBcIkZsZXhcIiAoc2hvcnRoYW5kKVxuLy9cbi8vIFRoZSAnZmxleCcgcHJvcGVydHkgc3BlY2lmaWVzIHRoZSBjb21wb25lbnRzIG9mIGEgZmxleGlibGUgbGVuZ3RoOiB0aGVcbi8vIGZsZXggZ3JvdyBmYWN0b3IgYW5kIGZsZXggc2hyaW5rIGZhY3RvciwgYW5kIHRoZSBmbGV4IGJhc2lzLiBXaGVuIGFuXG4vLyBlbGVtZW50IGlzIGEgZmxleCBpdGVtLCAnZmxleCcgaXMgY29uc3VsdGVkIGluc3RlYWQgb2YgdGhlIG1haW4gc2l6ZVxuLy8gcHJvcGVydHkgdG8gZGV0ZXJtaW5lIHRoZSBtYWluIHNpemUgb2YgdGhlIGVsZW1lbnQuIElmIGFuIGVsZW1lbnQgaXNcbi8vIG5vdCBhIGZsZXggaXRlbSwgJ2ZsZXgnIGhhcyBubyBlZmZlY3QuXG4vL1xuLy8gVmFsdWVzOiBub25lIHwgPGZsZXgtZ3Jvdz4gPGZsZXgtc2hyaW5rPiB8fCA8ZmxleC1iYXNpcz5cbi8vIERlZmF1bHQ6IFNlZSBpbmRpdmlkdWFsIHByb3BlcnRpZXMgKDEgMSAwKS5cbi8vXG4vLyBodHRwOi8vdzMub3JnL3RyL2NzczMtZmxleGJveC8jZmxleC1wcm9wZXJ0eVxuXG5AbWl4aW4gZmxleCgkZmc6IDEsICRmczogbnVsbCwgJGZiOiBudWxsKSB7XG5cbiAgLy8gU2V0IGEgdmFyaWFibGUgdG8gYmUgdXNlZCBieSBib3gtZmxleCBwcm9wZXJ0aWVzXG4gICRmZy1ib3hmbGV4OiAkZmc7XG5cbiAgLy8gQm94LUZsZXggb25seSBzdXBwb3J0cyBhIGZsZXgtZ3JvdyB2YWx1ZSBzbyBsZXQncyBncmFiIHRoZVxuICAvLyBmaXJzdCBpdGVtIGluIHRoZSBsaXN0IGFuZCBqdXN0IHJldHVybiB0aGF0LlxuICBAaWYgdHlwZS1vZigkZmcpID09ICdsaXN0JyB7XG4gICAgJGZnLWJveGZsZXg6IG50aCgkZmcsIDEpO1xuICB9XG5cbiAgLXdlYmtpdC1ib3gtZmxleDogJGZnLWJveGZsZXg7XG4gIC13ZWJraXQtZmxleDogJGZnICRmcyAkZmI7XG4gIC1tb3otYm94LWZsZXg6ICRmZy1ib3hmbGV4O1xuICAtbW96LWZsZXg6ICRmZyAkZnMgJGZiO1xuICAtbXMtZmxleDogJGZnICRmcyAkZmI7XG4gIGZsZXg6ICRmZyAkZnMgJGZiO1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gRmxleGJveCBKdXN0aWZ5IENvbnRlbnRcbi8vXG4vLyBUaGUgJ2p1c3RpZnktY29udGVudCcgcHJvcGVydHkgYWxpZ25zIGZsZXggaXRlbXMgYWxvbmcgdGhlIG1haW4gYXhpc1xuLy8gb2YgdGhlIGN1cnJlbnQgbGluZSBvZiB0aGUgZmxleCBjb250YWluZXIuIFRoaXMgaXMgZG9uZSBhZnRlciBhbnkgZmxleGlibGVcbi8vIGxlbmd0aHMgYW5kIGFueSBhdXRvIG1hcmdpbnMgaGF2ZSBiZWVuIHJlc29sdmVkLiBUeXBpY2FsbHkgaXQgaGVscHMgZGlzdHJpYnV0ZVxuLy8gZXh0cmEgZnJlZSBzcGFjZSBsZWZ0b3ZlciB3aGVuIGVpdGhlciBhbGwgdGhlIGZsZXggaXRlbXMgb24gYSBsaW5lIGFyZVxuLy8gaW5mbGV4aWJsZSwgb3IgYXJlIGZsZXhpYmxlIGJ1dCBoYXZlIHJlYWNoZWQgdGhlaXIgbWF4aW11bSBzaXplLiBJdCBhbHNvXG4vLyBleGVydHMgc29tZSBjb250cm9sIG92ZXIgdGhlIGFsaWdubWVudCBvZiBpdGVtcyB3aGVuIHRoZXkgb3ZlcmZsb3cgdGhlIGxpbmUuXG4vL1xuLy8gTm90ZTogJ3NwYWNlLSonIHZhbHVlcyBub3Qgc3VwcG9ydGVkIGluIG9sZGVyIHN5bnRheGVzLlxuLy9cbi8vIFZhbHVlczogZmxleC1zdGFydCB8IGZsZXgtZW5kIHwgY2VudGVyIHwgc3BhY2UtYmV0d2VlbiB8IHNwYWNlLWFyb3VuZFxuLy8gRGVmYXVsdDogZmxleC1zdGFydFxuLy9cbi8vIGh0dHA6Ly93My5vcmcvdHIvY3NzMy1mbGV4Ym94LyNqdXN0aWZ5LWNvbnRlbnQtcHJvcGVydHlcblxuQG1peGluIGp1c3RpZnktY29udGVudCgkdmFsdWU6IGZsZXgtc3RhcnQpIHtcbiAgQGlmICR2YWx1ZSA9PSBmbGV4LXN0YXJ0IHtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcbiAgfSBAZWxzZSBpZiAkdmFsdWUgPT0gZmxleC1lbmQge1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcbiAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XG4gIH0gQGVsc2UgaWYgJHZhbHVlID09IHNwYWNlLWJldHdlZW4ge1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAgfSBAZWxzZSBpZiAkdmFsdWUgPT0gc3BhY2UtYXJvdW5kIHtcbiAgICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xuICB9IEBlbHNlIHtcbiAgICAtd2Via2l0LWJveC1wYWNrOiAkdmFsdWU7XG4gICAgLW1zLWZsZXgtcGFjazogJHZhbHVlO1xuICB9XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiAkdmFsdWU7XG4gIC1tb3otanVzdGlmeS1jb250ZW50OiAkdmFsdWU7XG4gIGp1c3RpZnktY29udGVudDogJHZhbHVlO1xufVxuLy8gU2hvcnRlciB2ZXJzaW9uOlxuQG1peGluIGZsZXgtanVzdCgkYXJncy4uLikgeyBAaW5jbHVkZSBqdXN0aWZ5LWNvbnRlbnQoJGFyZ3MuLi4pOyB9XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBGbGV4Ym94IEFsaWduIEl0ZW1zXG4vL1xuLy8gRmxleCBpdGVtcyBjYW4gYmUgYWxpZ25lZCBpbiB0aGUgY3Jvc3MgYXhpcyBvZiB0aGUgY3VycmVudCBsaW5lIG9mIHRoZVxuLy8gZmxleCBjb250YWluZXIsIHNpbWlsYXIgdG8gJ2p1c3RpZnktY29udGVudCcgYnV0IGluIHRoZSBwZXJwZW5kaWN1bGFyXG4vLyBkaXJlY3Rpb24uICdhbGlnbi1pdGVtcycgc2V0cyB0aGUgZGVmYXVsdCBhbGlnbm1lbnQgZm9yIGFsbCBvZiB0aGUgZmxleFxuLy8gY29udGFpbmVyJ3MgaXRlbXMsIGluY2x1ZGluZyBhbm9ueW1vdXMgZmxleCBpdGVtcy4gJ2FsaWduLXNlbGYnIGFsbG93c1xuLy8gdGhpcyBkZWZhdWx0IGFsaWdubWVudCB0byBiZSBvdmVycmlkZGVuIGZvciBpbmRpdmlkdWFsIGZsZXggaXRlbXMuIChGb3Jcbi8vIGFub255bW91cyBmbGV4IGl0ZW1zLCAnYWxpZ24tc2VsZicgYWx3YXlzIG1hdGNoZXMgdGhlIHZhbHVlIG9mICdhbGlnbi1pdGVtcydcbi8vIG9uIHRoZWlyIGFzc29jaWF0ZWQgZmxleCBjb250YWluZXIuKVxuLy9cbi8vIFZhbHVlczogZmxleC1zdGFydCB8IGZsZXgtZW5kIHwgY2VudGVyIHwgYmFzZWxpbmUgfCBzdHJldGNoXG4vLyBEZWZhdWx0OiBzdHJldGNoXG4vL1xuLy8gaHR0cDovL3czLm9yZy90ci9jc3MzLWZsZXhib3gvI2FsaWduLWl0ZW1zLXByb3BlcnR5XG5cbkBtaXhpbiBhbGlnbi1pdGVtcygkdmFsdWU6IHN0cmV0Y2gpIHtcbiAgQGlmICR2YWx1ZSA9PSBmbGV4LXN0YXJ0IHtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XG4gICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xuICB9IEBlbHNlIGlmICR2YWx1ZSA9PSBmbGV4LWVuZCB7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcbiAgICAtbXMtZmxleC1hbGlnbjogZW5kO1xuICB9IEBlbHNlIHtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogJHZhbHVlO1xuICAgIC1tcy1mbGV4LWFsaWduOiAkdmFsdWU7XG4gIH1cbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogJHZhbHVlO1xuICAtbW96LWFsaWduLWl0ZW1zOiAkdmFsdWU7XG4gIGFsaWduLWl0ZW1zOiAkdmFsdWU7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBGbGV4Ym94IEFsaWduIFNlbGZcbi8vXG4vLyBWYWx1ZXM6IGF1dG8gfCBmbGV4LXN0YXJ0IHwgZmxleC1lbmQgfCBjZW50ZXIgfCBiYXNlbGluZSB8IHN0cmV0Y2hcbi8vIERlZmF1bHQ6IGF1dG9cblxuQG1peGluIGFsaWduLXNlbGYoJHZhbHVlOiBhdXRvKSB7XG4gIC8vIE5vIFdlYmtpdCBCb3ggRmFsbGJhY2suXG4gIC13ZWJraXQtYWxpZ24tc2VsZjogJHZhbHVlO1xuICAtbW96LWFsaWduLXNlbGY6ICR2YWx1ZTtcbiAgQGlmICR2YWx1ZSA9PSBmbGV4LXN0YXJ0IHtcbiAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBzdGFydDtcbiAgfSBAZWxzZSBpZiAkdmFsdWUgPT0gZmxleC1lbmQge1xuICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGVuZDtcbiAgfSBAZWxzZSB7XG4gICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogJHZhbHVlO1xuICB9XG4gIGFsaWduLXNlbGY6ICR2YWx1ZTtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEZsZXhib3ggQWxpZ24gQ29udGVudFxuLy9cbi8vIFRoZSAnYWxpZ24tY29udGVudCcgcHJvcGVydHkgYWxpZ25zIGEgZmxleCBjb250YWluZXIncyBsaW5lcyB3aXRoaW4gdGhlXG4vLyBmbGV4IGNvbnRhaW5lciB3aGVuIHRoZXJlIGlzIGV4dHJhIHNwYWNlIGluIHRoZSBjcm9zcy1heGlzLCBzaW1pbGFyIHRvXG4vLyBob3cgJ2p1c3RpZnktY29udGVudCcgYWxpZ25zIGluZGl2aWR1YWwgaXRlbXMgd2l0aGluIHRoZSBtYWluLWF4aXMuIE5vdGUsXG4vLyB0aGlzIHByb3BlcnR5IGhhcyBubyBlZmZlY3Qgd2hlbiB0aGUgZmxleGJveCBoYXMgb25seSBhIHNpbmdsZSBsaW5lLlxuLy9cbi8vIFZhbHVlczogZmxleC1zdGFydCB8IGZsZXgtZW5kIHwgY2VudGVyIHwgc3BhY2UtYmV0d2VlbiB8IHNwYWNlLWFyb3VuZCB8IHN0cmV0Y2hcbi8vIERlZmF1bHQ6IHN0cmV0Y2hcbi8vXG4vLyBodHRwOi8vdzMub3JnL3RyL2NzczMtZmxleGJveC8jYWxpZ24tY29udGVudC1wcm9wZXJ0eVxuXG5AbWl4aW4gYWxpZ24tY29udGVudCgkdmFsdWU6IHN0cmV0Y2gpIHtcbiAgLy8gTm8gV2Via2l0IEJveCBGYWxsYmFjay5cbiAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiAkdmFsdWU7XG4gIC1tb3otYWxpZ24tY29udGVudDogJHZhbHVlO1xuICBAaWYgJHZhbHVlID09IGZsZXgtc3RhcnQge1xuICAgIC1tcy1mbGV4LWxpbmUtcGFjazogc3RhcnQ7XG4gIH0gQGVsc2UgaWYgJHZhbHVlID09IGZsZXgtZW5kIHtcbiAgICAtbXMtZmxleC1saW5lLXBhY2s6IGVuZDtcbiAgfSBAZWxzZSB7XG4gICAgLW1zLWZsZXgtbGluZS1wYWNrOiAkdmFsdWU7XG4gIH1cbiAgYWxpZ24tY29udGVudDogJHZhbHVlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/feedback/feedback.component.ts":
/*!************************************************!*\
  !*** ./src/app/feedback/feedback.component.ts ***!
  \************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent() {
    }
    FeedbackComponent.prototype.ngOnInit = function () {
    };
    FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.component.html */ "./src/app/feedback/feedback.component.html"),
            styles: [__webpack_require__(/*! ./feedback.component.scss */ "./src/app/feedback/feedback.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <!-- Footer -->\n  <footer>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <span class=\"copyright\">Copyright &copy; Lucas Guardado 2018</span>\n        </div>\n        <div class=\"col-md-6 right-side\">\n          <a href=\"mailto:lucas.guardado@gmail.com\">&#9993; lucas.guardado@gmail.com</a>\n          <span class=\"updated en\">{{ 'FOOTER.UPDATED' | translate }}: sept 2018</span>\n        </div>\n      </div>\n    </div>\n  </footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  padding: 25px 0;\n  text-align: center; }\n  footer span.copyright {\n    font-size: 90%;\n    line-height: 40px;\n    text-transform: none;\n    font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; }\n  footer ul.quicklinks {\n    font-size: 90%;\n    line-height: 40px;\n    margin-bottom: 0;\n    text-transform: none;\n    font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; }\n  footer .right-side {\n    display: -moz-flex;\n    display: flex;\n    -moz-flex-direction: column;\n    flex-direction: column; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWNhc2d1YXJkYWRvL25nLXBvcnRmb2xpby9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbHVjYXNndWFyZGFkby9uZy1wb3J0Zm9saW8vc3JjL2Nzcy9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0JBQWU7RUFDZixtQkFBa0IsRUFrQm5CO0VBcEJEO0lBSUksZUFBYztJQUNkLGtCQUFpQjtJQUNqQixxQkFBb0I7SUFDcEIscU1BQW9NLEVBQ3JNO0VBUkg7SUFVSSxlQUFjO0lBQ2Qsa0JBQWlCO0lBQ2pCLGlCQUFnQjtJQUNoQixxQkFBb0I7SUFDcEIscU1BQW9NLEVBQ3JNO0VBZkg7SUMwTkUsbUJBQWtCO0lBRWxCLGNBQWE7SUE2Q2IsNEJEdlBnQztJQ3lQaEMsdUJEelBnQyxFQUMvQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9jc3Mvc3R5bGVzL21peGlucyc7XG5cbmZvb3RlciB7XG4gIHBhZGRpbmc6IDI1cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBzcGFuLmNvcHlyaWdodCB7XG4gICAgZm9udC1zaXplOiA5MCU7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6ICdEcm9pZCBTZXJpZicsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsICdOb3RvIENvbG9yIEVtb2ppJztcbiAgfVxuICB1bC5xdWlja2xpbmtzIHtcbiAgICBmb250LXNpemU6IDkwJTtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiAnRHJvaWQgU2VyaWYnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLCAnTm90byBDb2xvciBFbW9qaSc7XG4gIH1cbiAgLnJpZ2h0LXNpZGUge1xuICAgIEBpbmNsdWRlIGZsZXhib3goKTtcbiAgICBAaW5jbHVkZSBmbGV4LWRpcmVjdGlvbihjb2x1bW4pO1xuICB9XG59IiwiQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gIEBpZiAkbWVkaWEgPT0gc20ge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNjcmVlbi1zbS1taW4pIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkbWVkaWEgPT0gbWQge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNjcmVlbi1tZC1taW4pIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkbWVkaWEgPT0gbGcge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNjcmVlbi1sZy1taW4pIHsgQGNvbnRlbnQ7IH1cbiAgfVxufVxuXG4vL2ZvciBBbmltYXRpb25zXG5AbWl4aW4ga2V5ZnJhbWVzKCRhbmltYXRpb25OYW1lKSB7XG4gIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBib3Jyb3dlZCBpZGVhcyBmcm9tIGh0dHBzOi8vd3d3LnNtYXNoaW5nbWFnYXppbmUuY29tLzIwMTUvMDYvcmVzcG9uc2l2ZS10eXBvZ3JhcGh5LXdpdGgtc2Fzcy1tYXBzL1xuLy8gZm9udC1zaXplIG1peGluIHRvIHVzZSBzYXNzIG1hcHNcbkBtaXhpbiBmb250LXNpemUoJGZzLW1hcCwgJGltcG9ydGFudDogJycsICRmcy1icmVha3BvaW50czogJGJyZWFrcG9pbnRzKSB7XG4gIEBlYWNoICRmcy1icmVha3BvaW50LCAkZnMtZm9udC1zaXplIGluICRmcy1tYXAge1xuICAgIEBpZiAkZnMtYnJlYWtwb2ludCAhPSBudWxsIHtcbiAgICAgIC8vIElmICRmcy1mb250LXNpemUgaXMgYSBrZXkgdGhhdCBleGlzdHMgaW5cbiAgICAgIC8vICRmcy1icmVha3BvaW50cywgdXNlIHRoZSB2YWx1ZVxuICAgICAgQGlmIG1hcC1oYXMta2V5KCRmcy1icmVha3BvaW50cywgJGZzLWJyZWFrcG9pbnQpIHtcbiAgICAgICAgJGZzLWJyZWFrcG9pbnQ6IG1hcC1nZXQoJGZzLWJyZWFrcG9pbnRzLCAkZnMtYnJlYWtwb2ludCk7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkZnMtYnJlYWtwb2ludCkge1xuICAgICAgICBAaW5jbHVkZSBtYWtlLWZvbnQtc2l6ZSgkZnMtZm9udC1zaXplLCAkaW1wb3J0YW50KTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgQGluY2x1ZGUgbWFrZS1mb250LXNpemUoJGZzLWZvbnQtc2l6ZSwgJGltcG9ydGFudCk7XG4gICAgfVxuICB9XG59XG5cbi8vIFV0aWxpdHkgZnVuY3Rpb24gZm9yIG1peGluIGZvbnQtc2l6ZVxuQG1peGluIG1ha2UtZm9udC1zaXplKCRmcy1mb250LXNpemUsICRpbXBvcnRhbnQ6ICcnKSB7XG4gIC8vIElmICRmcy1mb250LXNpemUgaXMgYSBsaXN0LCBpbmNsdWRlXG4gIC8vIGJvdGggZm9udC1zaXplIGFuZCBsaW5lLWhlaWdodFxuICBAaWYgdHlwZS1vZigkZnMtZm9udC1zaXplKSA9PSBcImxpc3RcIiB7XG4gICAgZm9udC1zaXplOiB1bnF1b3RlKG50aCgkZnMtZm9udC1zaXplLCAxKSArJyAnKyAkaW1wb3J0YW50KTtcbiAgICBAaWYgKGxlbmd0aCgkZnMtZm9udC1zaXplKSA+IDEpIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiB1bnF1b3RlKG50aCgkZnMtZm9udC1zaXplLCAyKSk7XG4gICAgfVxuICB9XG4gIEBlbHNlIHtcbiAgICBmb250LXNpemU6ICRmcy1mb250LXNpemUgdW5xdW90ZSgkaW1wb3J0YW50KTtcbiAgfVxufVxuXG5cbkBtaXhpbiB0cmFuc2Zvcm0oJHZhbHVlKXtcbiAgLXdlYmtpdC10cmFuc2Zvcm06ICR2YWx1ZTtcbiAgLW1zLXRyYW5zZm9ybTogJHZhbHVlOyAvLyBJRTkgb25seVxuICAtby10cmFuc2Zvcm06ICR2YWx1ZTtcbiAgdHJhbnNmb3JtOiAkdmFsdWU7XG59XG5cbkBtaXhpbiBmb250KCRmb250LXdlaWdodCwgJGZvbnQtc2l6ZSwgJGltcG9ydGFudDogJycpIHtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbiAgQGluY2x1ZGUgZm9udC1zaXplKCRmb250LXNpemUsICRpbXBvcnRhbnQpO1xufVxuXG4vL01peGlucyBmb3IgdHJhbnNpdGlvblxuQG1peGluIHRyYW5zaXRpb24oJHRyYW5zaXRpb24uLi4pIHtcbiAgLW1vei10cmFuc2l0aW9uOiAgICAkdHJhbnNpdGlvbjtcbiAgLW8tdHJhbnNpdGlvbjogICAgICAkdHJhbnNpdGlvbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgdHJhbnNpdGlvbjogICAgICAgICAkdHJhbnNpdGlvbjtcbn1cblxuQG1peGluIHRyYW5zaXRpb24tcHJvcGVydHkoJHByb3BlcnR5Li4uKSB7XG4gIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eTogICAgJHByb3BlcnR5O1xuICAtby10cmFuc2l0aW9uLXByb3BlcnR5OiAgICAgICRwcm9wZXJ0eTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiAkcHJvcGVydHk7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6ICAgICAgICAgJHByb3BlcnR5O1xufVxuQG1peGluIHRyYW5zaXRpb24tZHVyYXRpb24oJGR1cmF0aW9uLi4uKSB7XG4gIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eTogICAgJGR1cmF0aW9uO1xuICAtby10cmFuc2l0aW9uLXByb3BlcnR5OiAgICAgICRkdXJhdGlvbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiAkZHVyYXRpb247XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6ICAgICAgICAgJGR1cmF0aW9uO1xufVxuQG1peGluIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKCR0aW1pbmcuLi4pIHtcbiAgLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogICAgJHRpbWluZztcbiAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICAgICAgJHRpbWluZztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogJHRpbWluZztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICAgICAgICAgJHRpbWluZztcbn1cbkBtaXhpbiB0cmFuc2l0aW9uLWRlbGF5KCRkZWxheS4uLikge1xuICAtbW96LXRyYW5zaXRpb24tZGVsYXk6ICAgICRkZWxheTtcbiAgLW8tdHJhbnNpdGlvbi1kZWxheTogICAgICAkZGVsYXk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogJGRlbGF5O1xuICB0cmFuc2l0aW9uLWRlbGF5OiAgICAgICAgICRkZWxheTtcbn1cblxuLy8gQW5pbWF0aW9uc1xuQG1peGluIGFuaW1hdGlvbigkYW5pbWF0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAkYW5pbWF0aW9uO1xuICAtby1hbmltYXRpb246ICRhbmltYXRpb247XG4gIGFuaW1hdGlvbjogJGFuaW1hdGlvbjtcbn1cbkBtaXhpbiBhbmltYXRpb24tbmFtZSgkbmFtZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiAkbmFtZTtcbiAgYW5pbWF0aW9uLW5hbWU6ICRuYW1lO1xufVxuQG1peGluIGFuaW1hdGlvbi1kdXJhdGlvbigkZHVyYXRpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246ICRkdXJhdGlvbjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAkZHVyYXRpb247XG59XG5AbWl4aW4gYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbigkdGltaW5nLWZ1bmN0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogJHRpbWluZy1mdW5jdGlvbjtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogJHRpbWluZy1mdW5jdGlvbjtcbn1cbkBtaXhpbiBhbmltYXRpb24tZGVsYXkoJGRlbGF5KSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkZGVsYXk7XG4gIGFuaW1hdGlvbi1kZWxheTogJGRlbGF5O1xufVxuQG1peGluIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQoJGl0ZXJhdGlvbi1jb3VudCkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6ICRpdGVyYXRpb24tY291bnQ7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6ICRpdGVyYXRpb24tY291bnQ7XG59XG5AbWl4aW4gYW5pbWF0aW9uLWRpcmVjdGlvbigkZGlyZWN0aW9uKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cbkBtaXhpbiBhbmltYXRpb24tZmlsbC1tb2RlKCRmaWxsLW1vZGUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiAkZmlsbC1tb2RlO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiAkZmlsbC1tb2RlO1xufVxuXG4vLyBEcm9wIHNoYWRvd3Ncbi8vXG4vLyBOb3RlOiBEZXByZWNhdGVkIGAuYm94LXNoYWRvdygpYCBhcyBvZiB2My4xLjAgc2luY2UgYWxsIG9mIEJvb3RzdHJhcCdzXG4vLyBzdXBwb3J0ZWQgYnJvd3NlcnMgdGhhdCBoYXZlIGJveCBzaGFkb3cgY2FwYWJpbGl0aWVzIG5vdyBzdXBwb3J0IGl0LlxuXG5AbWl4aW4gYm94LXNoYWRvdygkc2hhZG93Li4uKSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHNoYWRvdzsgLy8gaU9TIDw0LjMgJiBBbmRyb2lkIDw0LjFcbiAgYm94LXNoYWRvdzogJHNoYWRvdztcbn1cblxuXG4vLyBGbGV4Ym94IE1peGluc1xuLy8gaHR0cDovL3BoaWxpcHdhbHRvbi5naXRodWIuaW8vc29sdmVkLWJ5LWZsZXhib3gvXG4vLyBodHRwczovL2dpdGh1Yi5jb20vcGhpbGlwd2FsdG9uL3NvbHZlZC1ieS1mbGV4Ym94XG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDEzIEJyaWFuIEZyYW5jb1xuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0b1xuLy8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvXG4vLyB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuXG4vLyBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWVxuLy8gQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCxcbi8vIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFXG4vLyBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbi8vXG4vLyBUaGlzIGlzIGEgc2V0IG9mIG1peGlucyBmb3IgdGhvc2Ugd2hvIHdhbnQgdG8gbWVzcyBhcm91bmQgd2l0aCBmbGV4Ym94XG4vLyB1c2luZyB0aGUgbmF0aXZlIHN1cHBvcnQgb2YgY3VycmVudCBicm93c2Vycy4gRm9yIGZ1bGwgc3VwcG9ydCB0YWJsZVxuLy8gY2hlY2s6IGh0dHA6Ly9jYW5pdXNlLmNvbS9mbGV4Ym94XG4vL1xuLy8gQmFzaWNhbGx5IHRoaXMgd2lsbCB1c2U6XG4vL1xuLy8gKiBGYWxsYmFjaywgb2xkIHN5bnRheCAoSUUxMCwgbW9iaWxlIHdlYmtpdCBicm93c2VycyAtIG5vIHdyYXBwaW5nKVxuLy8gKiBGaW5hbCBzdGFuZGFyZHMgc3ludGF4IChGRiwgU2FmYXJpLCBDaHJvbWUsIElFMTEsIE9wZXJhKVxuLy9cbi8vIFRoaXMgd2FzIGluc3BpcmVkIGJ5OlxuLy9cbi8vICogaHR0cDovL2Rldi5vcGVyYS5jb20vYXJ0aWNsZXMvdmlldy9hZHZhbmNlZC1jcm9zcy1icm93c2VyLWZsZXhib3gvXG4vL1xuLy8gV2l0aCBoZWxwIGZyb206XG4vL1xuLy8gKiBodHRwOi8vdzMub3JnL3RyL2NzczMtZmxleGJveC9cbi8vICogaHR0cDovL3RoZS1lY2hvcGxleC5uZXQvZmxleHlib3hlcy9cbi8vICogaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2hoNzcyMDY5KHY9dnMuODUpLmFzcHhcbi8vICogaHR0cDovL2Nzcy10cmlja3MuY29tL3VzaW5nLWZsZXhib3gvXG4vLyAqIGh0dHA6Ly9kZXYub3BlcmEuY29tL2FydGljbGVzL3ZpZXcvYWR2YW5jZWQtY3Jvc3MtYnJvd3Nlci1mbGV4Ym94L1xuLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi11cy9kb2NzL3dlYi9ndWlkZS9jc3MvZmxleGlibGVfYm94ZXNcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEZsZXhib3ggQ29udGFpbmVyc1xuLy9cbi8vIFRoZSAnZmxleCcgdmFsdWUgY2F1c2VzIGFuIGVsZW1lbnQgdG8gZ2VuZXJhdGUgYSBibG9jay1sZXZlbCBmbGV4XG4vLyBjb250YWluZXIgYm94LlxuLy9cbi8vIFRoZSAnaW5saW5lLWZsZXgnIHZhbHVlIGNhdXNlcyBhbiBlbGVtZW50IHRvIGdlbmVyYXRlIGEgaW5saW5lLWxldmVsXG4vLyBmbGV4IGNvbnRhaW5lciBib3guXG4vL1xuLy8gZGlzcGxheTogZmxleCB8IGlubGluZS1mbGV4XG4vL1xuLy8gaHR0cDovL3czLm9yZy90ci9jc3MzLWZsZXhib3gvI2ZsZXgtY29udGFpbmVyc1xuLy9cbi8vIChQbGFjZWhvbGRlciBzZWxlY3RvcnMgZm9yIGVhY2ggdHlwZSwgZm9yIHRob3NlIHdobyByYXRoZXIgQGV4dGVuZClcblxuQG1peGluIGZsZXhib3gge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4lZmxleGJveCB7IEBpbmNsdWRlIGZsZXhib3g7IH1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBpbmxpbmUtZmxleCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcbiAgZGlzcGxheTogLW1vei1pbmxpbmUtZmxleDtcbiAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuJWlubGluZS1mbGV4IHsgQGluY2x1ZGUgaW5saW5lLWZsZXg7IH1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEZsZXhib3ggRGlyZWN0aW9uXG4vL1xuLy8gVGhlICdmbGV4LWRpcmVjdGlvbicgcHJvcGVydHkgc3BlY2lmaWVzIGhvdyBmbGV4IGl0ZW1zIGFyZSBwbGFjZWQgaW5cbi8vIHRoZSBmbGV4IGNvbnRhaW5lciwgYnkgc2V0dGluZyB0aGUgZGlyZWN0aW9uIG9mIHRoZSBmbGV4IGNvbnRhaW5lcidzXG4vLyBtYWluIGF4aXMuIFRoaXMgZGV0ZXJtaW5lcyB0aGUgZGlyZWN0aW9uIHRoYXQgZmxleCBpdGVtcyBhcmUgbGFpZCBvdXQgaW4uXG4vL1xuLy8gVmFsdWVzOiByb3cgfCByb3ctcmV2ZXJzZSB8IGNvbHVtbiB8IGNvbHVtbi1yZXZlcnNlXG4vLyBEZWZhdWx0OiByb3dcbi8vXG4vLyBodHRwOi8vdzMub3JnL3RyL2NzczMtZmxleGJveC8jZmxleC1kaXJlY3Rpb24tcHJvcGVydHlcblxuQG1peGluIGZsZXgtZGlyZWN0aW9uKCR2YWx1ZTogcm93KSB7XG4gIEBpZiAkdmFsdWUgPT0gcm93LXJldmVyc2Uge1xuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogcmV2ZXJzZTtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XG4gIH0gQGVsc2UgaWYgJHZhbHVlID09IGNvbHVtbiB7XG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgfSBAZWxzZSBpZiAkdmFsdWUgPT0gY29sdW1uLXJldmVyc2Uge1xuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogcmV2ZXJzZTtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICB9IEBlbHNlIHtcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XG4gIH1cbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogJHZhbHVlO1xuICAtbW96LWZsZXgtZGlyZWN0aW9uOiAkdmFsdWU7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogJHZhbHVlO1xuICBmbGV4LWRpcmVjdGlvbjogJHZhbHVlO1xufVxuLy8gU2hvcnRlciB2ZXJzaW9uOlxuQG1peGluIGZsZXgtZGlyKCRhcmdzLi4uKSB7IEBpbmNsdWRlIGZsZXgtZGlyZWN0aW9uKCRhcmdzLi4uKTsgfVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gRmxleGJveCBXcmFwXG4vL1xuLy8gVGhlICdmbGV4LXdyYXAnIHByb3BlcnR5IGNvbnRyb2xzIHdoZXRoZXIgdGhlIGZsZXggY29udGFpbmVyIGlzIHNpbmdsZS1saW5lXG4vLyBvciBtdWx0aS1saW5lLCBhbmQgdGhlIGRpcmVjdGlvbiBvZiB0aGUgY3Jvc3MtYXhpcywgd2hpY2ggZGV0ZXJtaW5lc1xuLy8gdGhlIGRpcmVjdGlvbiBuZXcgbGluZXMgYXJlIHN0YWNrZWQgaW4uXG4vL1xuLy8gVmFsdWVzOiBub3dyYXAgfCB3cmFwIHwgd3JhcC1yZXZlcnNlXG4vLyBEZWZhdWx0OiBub3dyYXBcbi8vXG4vLyBodHRwOi8vdzMub3JnL3RyL2NzczMtZmxleGJveC8jZmxleC13cmFwLXByb3BlcnR5XG5cbkBtaXhpbiBmbGV4LXdyYXAoJHZhbHVlOiBub3dyYXApIHtcbiAgLy8gTm8gV2Via2l0IEJveCBmYWxsYmFjay5cbiAgLXdlYmtpdC1mbGV4LXdyYXA6ICR2YWx1ZTtcbiAgLW1vei1mbGV4LXdyYXA6ICR2YWx1ZTtcbiAgQGlmICR2YWx1ZSA9PSBub3dyYXAge1xuICAgIC1tcy1mbGV4LXdyYXA6IG5vbmU7XG4gIH0gQGVsc2Uge1xuICAgIC1tcy1mbGV4LXdyYXA6ICR2YWx1ZTtcbiAgfVxuICBmbGV4LXdyYXA6ICR2YWx1ZTtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEZsZXhib3ggRmxvdyAoc2hvcnRoYW5kKVxuLy9cbi8vIFRoZSAnZmxleC1mbG93JyBwcm9wZXJ0eSBpcyBhIHNob3J0aGFuZCBmb3Igc2V0dGluZyB0aGUgJ2ZsZXgtZGlyZWN0aW9uJ1xuLy8gYW5kICdmbGV4LXdyYXAnIHByb3BlcnRpZXMsIHdoaWNoIHRvZ2V0aGVyIGRlZmluZSB0aGUgZmxleCBjb250YWluZXInc1xuLy8gbWFpbiBhbmQgY3Jvc3MgYXhlcy5cbi8vXG4vLyBWYWx1ZXM6IDxmbGV4LWRpcmVjdGlvbj4gfCA8ZmxleC13cmFwPlxuLy8gRGVmYXVsdDogcm93IG5vd3JhcFxuLy9cbi8vIGh0dHA6Ly93My5vcmcvdHIvY3NzMy1mbGV4Ym94LyNmbGV4LWZsb3ctcHJvcGVydHlcblxuQG1peGluIGZsZXgtZmxvdygkdmFsdWVzOiAocm93IG5vd3JhcCkpIHtcbiAgLy8gTm8gV2Via2l0IEJveCBmYWxsYmFjay5cbiAgLXdlYmtpdC1mbGV4LWZsb3c6ICR2YWx1ZXM7XG4gIC1tb3otZmxleC1mbG93OiAkdmFsdWVzO1xuICAtbXMtZmxleC1mbG93OiAkdmFsdWVzO1xuICBmbGV4LWZsb3c6ICR2YWx1ZXM7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBGbGV4Ym94IE9yZGVyXG4vL1xuLy8gVGhlICdvcmRlcicgcHJvcGVydHkgY29udHJvbHMgdGhlIG9yZGVyIGluIHdoaWNoIGZsZXggaXRlbXMgYXBwZWFyIHdpdGhpblxuLy8gdGhlaXIgZmxleCBjb250YWluZXIsIGJ5IGFzc2lnbmluZyB0aGVtIHRvIG9yZGluYWwgZ3JvdXBzLlxuLy9cbi8vIERlZmF1bHQ6IDBcbi8vXG4vLyBodHRwOi8vdzMub3JnL3RyL2NzczMtZmxleGJveC8jb3JkZXItcHJvcGVydHlcblxuQG1peGluIG9yZGVyKCRpbnQ6IDApIHtcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogJGludCArIDE7XG4gIC13ZWJraXQtb3JkZXI6ICRpbnQ7XG4gIC1tb3otb3JkZXI6ICRpbnQ7XG4gIC1tcy1mbGV4LW9yZGVyOiAkaW50O1xuICBvcmRlcjogJGludDtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEZsZXhib3ggR3Jvd1xuLy9cbi8vIFRoZSAnZmxleC1ncm93JyBwcm9wZXJ0eSBzZXRzIHRoZSBmbGV4IGdyb3cgZmFjdG9yLiBOZWdhdGl2ZSBudW1iZXJzXG4vLyBhcmUgaW52YWxpZC5cbi8vXG4vLyBEZWZhdWx0OiAwXG4vL1xuLy8gaHR0cDovL3czLm9yZy90ci9jc3MzLWZsZXhib3gvI2ZsZXgtZ3Jvdy1wcm9wZXJ0eVxuXG5AbWl4aW4gZmxleC1ncm93KCRpbnQ6IDApIHtcbiAgLXdlYmtpdC1ib3gtZmxleDogJGludDtcbiAgLXdlYmtpdC1mbGV4LWdyb3c6ICRpbnQ7XG4gIC1tb3otZmxleC1ncm93OiAkaW50O1xuICAtbXMtZmxleC1wb3NpdGl2ZTogJGludDtcbiAgZmxleC1ncm93OiAkaW50O1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gRmxleGJveCBTaHJpbmtcbi8vXG4vLyBUaGUgJ2ZsZXgtc2hyaW5rJyBwcm9wZXJ0eSBzZXRzIHRoZSBmbGV4IHNocmluayBmYWN0b3IuIE5lZ2F0aXZlIG51bWJlcnNcbi8vIGFyZSBpbnZhbGlkLlxuLy9cbi8vIERlZmF1bHQ6IDFcbi8vXG4vLyBodHRwOi8vdzMub3JnL3RyL2NzczMtZmxleGJveC8jZmxleC1zaHJpbmstcHJvcGVydHlcblxuQG1peGluIGZsZXgtc2hyaW5rKCRpbnQ6IDEpIHtcbiAgLXdlYmtpdC1mbGV4LXNocmluazogJGludDtcbiAgLW1vei1mbGV4LXNocmluazogJGludDtcbiAgLW1zLWZsZXgtbmVnYXRpdmU6ICRpbnQ7XG4gIGZsZXgtc2hyaW5rOiAkaW50O1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gRmxleGJveCBCYXNpc1xuLy9cbi8vIFRoZSAnZmxleC1iYXNpcycgcHJvcGVydHkgc2V0cyB0aGUgZmxleCBiYXNpcy4gTmVnYXRpdmUgbGVuZ3RocyBhcmUgaW52YWxpZC5cbi8vXG4vLyBWYWx1ZXM6IExpa2UgXCJ3aWR0aFwiXG4vLyBEZWZhdWx0OiBhdXRvXG4vL1xuLy8gaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1mbGV4Ym94LyNmbGV4LWJhc2lzLXByb3BlcnR5XG5cbkBtaXhpbiBmbGV4LWJhc2lzKCR2YWx1ZTogYXV0bykge1xuICAtd2Via2l0LWZsZXgtYmFzaXM6ICR2YWx1ZTtcbiAgLW1vei1mbGV4LWJhc2lzOiAkdmFsdWU7XG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAkdmFsdWU7XG4gIGZsZXgtYmFzaXM6ICR2YWx1ZTtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEZsZXhib3ggXCJGbGV4XCIgKHNob3J0aGFuZClcbi8vXG4vLyBUaGUgJ2ZsZXgnIHByb3BlcnR5IHNwZWNpZmllcyB0aGUgY29tcG9uZW50cyBvZiBhIGZsZXhpYmxlIGxlbmd0aDogdGhlXG4vLyBmbGV4IGdyb3cgZmFjdG9yIGFuZCBmbGV4IHNocmluayBmYWN0b3IsIGFuZCB0aGUgZmxleCBiYXNpcy4gV2hlbiBhblxuLy8gZWxlbWVudCBpcyBhIGZsZXggaXRlbSwgJ2ZsZXgnIGlzIGNvbnN1bHRlZCBpbnN0ZWFkIG9mIHRoZSBtYWluIHNpemVcbi8vIHByb3BlcnR5IHRvIGRldGVybWluZSB0aGUgbWFpbiBzaXplIG9mIHRoZSBlbGVtZW50LiBJZiBhbiBlbGVtZW50IGlzXG4vLyBub3QgYSBmbGV4IGl0ZW0sICdmbGV4JyBoYXMgbm8gZWZmZWN0LlxuLy9cbi8vIFZhbHVlczogbm9uZSB8IDxmbGV4LWdyb3c+IDxmbGV4LXNocmluaz4gfHwgPGZsZXgtYmFzaXM+XG4vLyBEZWZhdWx0OiBTZWUgaW5kaXZpZHVhbCBwcm9wZXJ0aWVzICgxIDEgMCkuXG4vL1xuLy8gaHR0cDovL3czLm9yZy90ci9jc3MzLWZsZXhib3gvI2ZsZXgtcHJvcGVydHlcblxuQG1peGluIGZsZXgoJGZnOiAxLCAkZnM6IG51bGwsICRmYjogbnVsbCkge1xuXG4gIC8vIFNldCBhIHZhcmlhYmxlIHRvIGJlIHVzZWQgYnkgYm94LWZsZXggcHJvcGVydGllc1xuICAkZmctYm94ZmxleDogJGZnO1xuXG4gIC8vIEJveC1GbGV4IG9ubHkgc3VwcG9ydHMgYSBmbGV4LWdyb3cgdmFsdWUgc28gbGV0J3MgZ3JhYiB0aGVcbiAgLy8gZmlyc3QgaXRlbSBpbiB0aGUgbGlzdCBhbmQganVzdCByZXR1cm4gdGhhdC5cbiAgQGlmIHR5cGUtb2YoJGZnKSA9PSAnbGlzdCcge1xuICAgICRmZy1ib3hmbGV4OiBudGgoJGZnLCAxKTtcbiAgfVxuXG4gIC13ZWJraXQtYm94LWZsZXg6ICRmZy1ib3hmbGV4O1xuICAtd2Via2l0LWZsZXg6ICRmZyAkZnMgJGZiO1xuICAtbW96LWJveC1mbGV4OiAkZmctYm94ZmxleDtcbiAgLW1vei1mbGV4OiAkZmcgJGZzICRmYjtcbiAgLW1zLWZsZXg6ICRmZyAkZnMgJGZiO1xuICBmbGV4OiAkZmcgJGZzICRmYjtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEZsZXhib3ggSnVzdGlmeSBDb250ZW50XG4vL1xuLy8gVGhlICdqdXN0aWZ5LWNvbnRlbnQnIHByb3BlcnR5IGFsaWducyBmbGV4IGl0ZW1zIGFsb25nIHRoZSBtYWluIGF4aXNcbi8vIG9mIHRoZSBjdXJyZW50IGxpbmUgb2YgdGhlIGZsZXggY29udGFpbmVyLiBUaGlzIGlzIGRvbmUgYWZ0ZXIgYW55IGZsZXhpYmxlXG4vLyBsZW5ndGhzIGFuZCBhbnkgYXV0byBtYXJnaW5zIGhhdmUgYmVlbiByZXNvbHZlZC4gVHlwaWNhbGx5IGl0IGhlbHBzIGRpc3RyaWJ1dGVcbi8vIGV4dHJhIGZyZWUgc3BhY2UgbGVmdG92ZXIgd2hlbiBlaXRoZXIgYWxsIHRoZSBmbGV4IGl0ZW1zIG9uIGEgbGluZSBhcmVcbi8vIGluZmxleGlibGUsIG9yIGFyZSBmbGV4aWJsZSBidXQgaGF2ZSByZWFjaGVkIHRoZWlyIG1heGltdW0gc2l6ZS4gSXQgYWxzb1xuLy8gZXhlcnRzIHNvbWUgY29udHJvbCBvdmVyIHRoZSBhbGlnbm1lbnQgb2YgaXRlbXMgd2hlbiB0aGV5IG92ZXJmbG93IHRoZSBsaW5lLlxuLy9cbi8vIE5vdGU6ICdzcGFjZS0qJyB2YWx1ZXMgbm90IHN1cHBvcnRlZCBpbiBvbGRlciBzeW50YXhlcy5cbi8vXG4vLyBWYWx1ZXM6IGZsZXgtc3RhcnQgfCBmbGV4LWVuZCB8IGNlbnRlciB8IHNwYWNlLWJldHdlZW4gfCBzcGFjZS1hcm91bmRcbi8vIERlZmF1bHQ6IGZsZXgtc3RhcnRcbi8vXG4vLyBodHRwOi8vdzMub3JnL3RyL2NzczMtZmxleGJveC8janVzdGlmeS1jb250ZW50LXByb3BlcnR5XG5cbkBtaXhpbiBqdXN0aWZ5LWNvbnRlbnQoJHZhbHVlOiBmbGV4LXN0YXJ0KSB7XG4gIEBpZiAkdmFsdWUgPT0gZmxleC1zdGFydCB7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XG4gICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XG4gIH0gQGVsc2UgaWYgJHZhbHVlID09IGZsZXgtZW5kIHtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XG4gICAgLW1zLWZsZXgtcGFjazogZW5kO1xuICB9IEBlbHNlIGlmICR2YWx1ZSA9PSBzcGFjZS1iZXR3ZWVuIHtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gIH0gQGVsc2UgaWYgJHZhbHVlID09IHNwYWNlLWFyb3VuZCB7XG4gICAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcbiAgfSBAZWxzZSB7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogJHZhbHVlO1xuICAgIC1tcy1mbGV4LXBhY2s6ICR2YWx1ZTtcbiAgfVxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogJHZhbHVlO1xuICAtbW96LWp1c3RpZnktY29udGVudDogJHZhbHVlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICR2YWx1ZTtcbn1cbi8vIFNob3J0ZXIgdmVyc2lvbjpcbkBtaXhpbiBmbGV4LWp1c3QoJGFyZ3MuLi4pIHsgQGluY2x1ZGUganVzdGlmeS1jb250ZW50KCRhcmdzLi4uKTsgfVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gRmxleGJveCBBbGlnbiBJdGVtc1xuLy9cbi8vIEZsZXggaXRlbXMgY2FuIGJlIGFsaWduZWQgaW4gdGhlIGNyb3NzIGF4aXMgb2YgdGhlIGN1cnJlbnQgbGluZSBvZiB0aGVcbi8vIGZsZXggY29udGFpbmVyLCBzaW1pbGFyIHRvICdqdXN0aWZ5LWNvbnRlbnQnIGJ1dCBpbiB0aGUgcGVycGVuZGljdWxhclxuLy8gZGlyZWN0aW9uLiAnYWxpZ24taXRlbXMnIHNldHMgdGhlIGRlZmF1bHQgYWxpZ25tZW50IGZvciBhbGwgb2YgdGhlIGZsZXhcbi8vIGNvbnRhaW5lcidzIGl0ZW1zLCBpbmNsdWRpbmcgYW5vbnltb3VzIGZsZXggaXRlbXMuICdhbGlnbi1zZWxmJyBhbGxvd3Ncbi8vIHRoaXMgZGVmYXVsdCBhbGlnbm1lbnQgdG8gYmUgb3ZlcnJpZGRlbiBmb3IgaW5kaXZpZHVhbCBmbGV4IGl0ZW1zLiAoRm9yXG4vLyBhbm9ueW1vdXMgZmxleCBpdGVtcywgJ2FsaWduLXNlbGYnIGFsd2F5cyBtYXRjaGVzIHRoZSB2YWx1ZSBvZiAnYWxpZ24taXRlbXMnXG4vLyBvbiB0aGVpciBhc3NvY2lhdGVkIGZsZXggY29udGFpbmVyLilcbi8vXG4vLyBWYWx1ZXM6IGZsZXgtc3RhcnQgfCBmbGV4LWVuZCB8IGNlbnRlciB8IGJhc2VsaW5lIHwgc3RyZXRjaFxuLy8gRGVmYXVsdDogc3RyZXRjaFxuLy9cbi8vIGh0dHA6Ly93My5vcmcvdHIvY3NzMy1mbGV4Ym94LyNhbGlnbi1pdGVtcy1wcm9wZXJ0eVxuXG5AbWl4aW4gYWxpZ24taXRlbXMoJHZhbHVlOiBzdHJldGNoKSB7XG4gIEBpZiAkdmFsdWUgPT0gZmxleC1zdGFydCB7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xuICAgIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcbiAgfSBAZWxzZSBpZiAkdmFsdWUgPT0gZmxleC1lbmQge1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XG4gICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcbiAgfSBAZWxzZSB7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246ICR2YWx1ZTtcbiAgICAtbXMtZmxleC1hbGlnbjogJHZhbHVlO1xuICB9XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6ICR2YWx1ZTtcbiAgLW1vei1hbGlnbi1pdGVtczogJHZhbHVlO1xuICBhbGlnbi1pdGVtczogJHZhbHVlO1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gRmxleGJveCBBbGlnbiBTZWxmXG4vL1xuLy8gVmFsdWVzOiBhdXRvIHwgZmxleC1zdGFydCB8IGZsZXgtZW5kIHwgY2VudGVyIHwgYmFzZWxpbmUgfCBzdHJldGNoXG4vLyBEZWZhdWx0OiBhdXRvXG5cbkBtaXhpbiBhbGlnbi1zZWxmKCR2YWx1ZTogYXV0bykge1xuICAvLyBObyBXZWJraXQgQm94IEZhbGxiYWNrLlxuICAtd2Via2l0LWFsaWduLXNlbGY6ICR2YWx1ZTtcbiAgLW1vei1hbGlnbi1zZWxmOiAkdmFsdWU7XG4gIEBpZiAkdmFsdWUgPT0gZmxleC1zdGFydCB7XG4gICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogc3RhcnQ7XG4gIH0gQGVsc2UgaWYgJHZhbHVlID09IGZsZXgtZW5kIHtcbiAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBlbmQ7XG4gIH0gQGVsc2Uge1xuICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246ICR2YWx1ZTtcbiAgfVxuICBhbGlnbi1zZWxmOiAkdmFsdWU7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBGbGV4Ym94IEFsaWduIENvbnRlbnRcbi8vXG4vLyBUaGUgJ2FsaWduLWNvbnRlbnQnIHByb3BlcnR5IGFsaWducyBhIGZsZXggY29udGFpbmVyJ3MgbGluZXMgd2l0aGluIHRoZVxuLy8gZmxleCBjb250YWluZXIgd2hlbiB0aGVyZSBpcyBleHRyYSBzcGFjZSBpbiB0aGUgY3Jvc3MtYXhpcywgc2ltaWxhciB0b1xuLy8gaG93ICdqdXN0aWZ5LWNvbnRlbnQnIGFsaWducyBpbmRpdmlkdWFsIGl0ZW1zIHdpdGhpbiB0aGUgbWFpbi1heGlzLiBOb3RlLFxuLy8gdGhpcyBwcm9wZXJ0eSBoYXMgbm8gZWZmZWN0IHdoZW4gdGhlIGZsZXhib3ggaGFzIG9ubHkgYSBzaW5nbGUgbGluZS5cbi8vXG4vLyBWYWx1ZXM6IGZsZXgtc3RhcnQgfCBmbGV4LWVuZCB8IGNlbnRlciB8IHNwYWNlLWJldHdlZW4gfCBzcGFjZS1hcm91bmQgfCBzdHJldGNoXG4vLyBEZWZhdWx0OiBzdHJldGNoXG4vL1xuLy8gaHR0cDovL3czLm9yZy90ci9jc3MzLWZsZXhib3gvI2FsaWduLWNvbnRlbnQtcHJvcGVydHlcblxuQG1peGluIGFsaWduLWNvbnRlbnQoJHZhbHVlOiBzdHJldGNoKSB7XG4gIC8vIE5vIFdlYmtpdCBCb3ggRmFsbGJhY2suXG4gIC13ZWJraXQtYWxpZ24tY29udGVudDogJHZhbHVlO1xuICAtbW96LWFsaWduLWNvbnRlbnQ6ICR2YWx1ZTtcbiAgQGlmICR2YWx1ZSA9PSBmbGV4LXN0YXJ0IHtcbiAgICAtbXMtZmxleC1saW5lLXBhY2s6IHN0YXJ0O1xuICB9IEBlbHNlIGlmICR2YWx1ZSA9PSBmbGV4LWVuZCB7XG4gICAgLW1zLWZsZXgtbGluZS1wYWNrOiBlbmQ7XG4gIH0gQGVsc2Uge1xuICAgIC1tcy1mbGV4LWxpbmUtcGFjazogJHZhbHVlO1xuICB9XG4gIGFsaWduLWNvbnRlbnQ6ICR2YWx1ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- Header -->\n  <header class=\"masthead\">\n    <div class=\"container\">\n      <div class=\"intro-text\">\n        <img class=\"img-profile\" src=\"/assets/img/solstice-about.png\" alt=\"\">\n        <div class=\"intro-heading text-uppercase\">Lucas Guardado</div>\n        <h3 class=\"born intro-lead-in\">{{ 'HEADER.BORN' | translate }}</h3>\n        <div class=\"intro-lead-in\">{{ 'HEADER.INTRO' | translate }}</div>\n        <a class=\"tell-me-more-btn en btn btn-primary btn-xl text-uppercase js-scroll-trigger\" href=\"#education\">{{ 'HEADER.TELL_ME_MORE' | translate }}</a>\n      </div>\n    </div>\n  </header>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-profile {\n  width: 64%;\n  border-radius: 10%;\n  margin-bottom: 50px; }\n\n@media (min-width: 768px) {\n  .img-profile {\n    width: 35%; } }\n\n.tell-me-more-btn {\n  background: #f5c923; }\n\n.tell-me-more-btn:hover {\n    background: #f9e7a6; }\n\nheader.masthead {\n  text-align: center;\n  color: white;\n  background-image: url('“https://lguardado.github.io/lguardado/”/assets/img/header-bg.jpg');\n  background-repeat: no-repeat;\n  background-attachment: scroll;\n  background-position: center center;\n  background-size: cover; }\n\nheader.masthead .intro-text {\n    padding-top: 150px;\n    padding-bottom: 100px; }\n\nheader.masthead .intro-text .intro-lead-in {\n      font-size: 22px;\n      font-style: italic;\n      line-height: 22px;\n      margin-bottom: 25px;\n      font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; }\n\nheader.masthead .intro-text .intro-heading {\n      font-size: 50px;\n      font-weight: 700;\n      line-height: 50px;\n      margin-bottom: 25px;\n      font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; }\n\n@media (min-width: 768px) {\n  header.masthead .intro-text {\n    padding-top: 150px;\n    padding-bottom: 200px; }\n    header.masthead .intro-text .intro-lead-in {\n      font-size: 40px;\n      letter-spacing: 3px;\n      font-style: italic;\n      line-height: 40px;\n      margin-bottom: 25px;\n      font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; }\n    header.masthead .intro-text .intro-heading {\n      font-size: 75px;\n      font-weight: 700;\n      line-height: 75px;\n      margin-bottom: 50px;\n      font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWNhc2d1YXJkYWRvL25nLXBvcnRmb2xpby9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbHVjYXNndWFyZGFkby9uZy1wb3J0Zm9saW8vc3JjL2Nzcy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRTtJQUNFLFdBQVUsRUFDWCxFQUFBOztBQUVIO0VBQ0Usb0JDOENvQixFRDFDckI7O0FBTEQ7SUFHSSxvQkNBdUIsRURDeEI7O0FBR0g7RUFDRSxtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLDJGQUFrRDtFQUNsRCw2QkFBNEI7RUFDNUIsOEJBQTZCO0VBQzdCLG1DQUFrQztFQUNsQyx1QkFBc0IsRUFtQnZCOztBQTFCRDtJQVNJLG1CQUFrQjtJQUNsQixzQkFBcUIsRUFldEI7O0FBekJIO01BWU0sZ0JBQWU7TUFDZixtQkFBa0I7TUFDbEIsa0JBQWlCO01BQ2pCLG9CQUFtQjtNQUNuQixxTUFBb00sRUFDck07O0FBakJMO01BbUJNLGdCQUFlO01BQ2YsaUJBQWdCO01BQ2hCLGtCQUFpQjtNQUNqQixvQkFBbUI7TUFDbkIscU1BQW9NLEVBQ3JNOztBQUlMO0VBQ0U7SUFDRSxtQkFBa0I7SUFDbEIsc0JBQXFCLEVBZ0J0QjtJQWxCRDtNQUlJLGdCQUFlO01BQ2Ysb0JBQW1CO01BQ25CLG1CQUFrQjtNQUNsQixrQkFBaUI7TUFDakIsb0JBQW1CO01BQ25CLHFNQUFvTSxFQUNyTTtJQVZIO01BWUksZ0JBQWU7TUFDZixpQkFBZ0I7TUFDaEIsa0JBQWlCO01BQ2pCLG9CQUFtQjtNQUNuQixxTUFBb00sRUFDck0sRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9jc3Mvc3R5bGVzL3ZhcmlhYmxlcyc7XG5cbi5pbWctcHJvZmlsZSB7XG4gIHdpZHRoOiA2NCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pbWctcHJvZmlsZSB7XG4gICAgd2lkdGg6IDM1JTtcbiAgfVxufVxuLnRlbGwtbWUtbW9yZS1idG4ge1xuICBiYWNrZ3JvdW5kOiAkeWVsbG93LWNvbG9yO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkc29mdC15ZWxsb3ctY29sb3I7XG4gIH1cbn1cblxuaGVhZGVyLm1hc3RoZWFkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2hlYWRlci1iZy5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAuaW50cm8tdGV4dCB7XG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgICAuaW50cm8tbGVhZC1pbiB7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICBmb250LWZhbWlseTogJ0Ryb2lkIFNlcmlmJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJywgJ05vdG8gQ29sb3IgRW1vamknO1xuICAgIH1cbiAgICAuaW50cm8taGVhZGluZyB7XG4gICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgZm9udC1mYW1pbHk6ICdEcm9pZCBTZXJpZicsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsICdOb3RvIENvbG9yIEVtb2ppJztcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGhlYWRlci5tYXN0aGVhZCAuaW50cm8tdGV4dCB7XG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMDBweDtcbiAgICAuaW50cm8tbGVhZC1pbiB7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgZm9udC1mYW1pbHk6ICdEcm9pZCBTZXJpZicsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsICdOb3RvIENvbG9yIEVtb2ppJztcbiAgICB9XG4gICAgLmludHJvLWhlYWRpbmcge1xuICAgICAgZm9udC1zaXplOiA3NXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA3NXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnRHJvaWQgU2VyaWYnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLCAnTm90byBDb2xvciBFbW9qaSc7XG4gICAgfVxuICB9XG59IiwiLy8gZm9udCBmYW1pbHlcbiRmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktY29uZGVuc2VkOiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG5cbi8vIGZvbnQgd2VpZ2h0XG4kZm9udC1ib2xkZXI6IDgwMDtcbiRmb250LWJvbGQ6IDcwMDtcbiRmb250LXNlbWktYm9sZDogNjAwO1xuJGZvbnQtcmVndWxhcjogNDAwO1xuJGZvbnQtbGlnaHQ6IDMwMDtcblxuLy8gY29sb3JzXG4kcmVkLWNvbG9yOiAjYmIyMzMyO1xuJGJsYWNrLWNvbG9yOiAjMDAwMDAwO1xuJHdoaXRlLWNvbG9yOiAjZmZmZmZmO1xuJHllbGxvdy1jb2xvcjogI2ZlZDEzNjtcbiRzb2Z0LXllbGxvdy1jb2xvcjogI2Y5ZTdhNjtcbiRjaGFyY29hbC1jb2xvcjogIzQwNDA0MTtcbiR3YXJtLWdyYXktY29sb3I6ICM2ZjZkNmQ7XG4kYWxtb3N0LXdoaXRlOiAjZmFmYWZiO1xuJG5ldXRyYWwtZ3JheTogI2RiZGJkYjtcbiRsaWdodC1ncmF5LWNvbG9yOiAjYTdhOWFiO1xuJHdhc2gtZ3JheS1jb2xvcjogI2YxZjFmMjtcbiRibHVlLWNvbG9yOiAjMmM3MGJhO1xuJGVycm9yLXJlZC1jb2xvcjogI2RmMDAwMDtcbiRncmVlbi1jb2xvcjogIzAwODcwMDtcbiRvcmFuZ2UtY29sb3I6ICNmYzY1MEQ7XG4kZWRpdC1ibHVlLWNvbG9yOiAjMmM3MGJhO1xuJGRhcmstYmx1ZS1jb2xvcjogIzAwM0U3RTtcbiRicm93bmlzaC1ncmV5OiAjNWM1YTVhO1xuJGRhcmstZ3JheS1jb2xvcjogIzRjNGI0YjtcblxuLy8gYnV0dG9uOmhvdmVyIGNvbG9yc1xuJGJ1dHRvbi1ob3Zlci1kYXJrLXJlZC1jb2xvcjogIzhjMWExOTtcbiRidXR0b24taG92ZXItZGFyay1jaGFyY29hbC1jb2xvcjogIzMwMzAzMDtcbiRidXR0b24taG92ZXItZGFyay1uZXV0cmFsLWdyYXk6ICNhNGE0YTQ7XG5cblxuLy8gc29jaWFsIG1lZGlhIGNvbG9yc1xuJGZhY2Vib29rLWNvbG9yOiAjM0I1OTk4O1xuJHR3aXR0ZXItY29sb3I6ICM1NWFjZWU7XG4kZ29vZ2xlcGx1cy1jb2xvcjogI2RkNGIzOTtcbiRsaW5rZWRpbi1jb2xvcjogIzAwNzdCNTtcbiR5b3V0dWJlLWNvbG9yOiAjYmIwMDAwO1xuXG4vL2dsb2JhbCBoZWFkZXIgY29sb3JzXG4kZGFyay1ncmF5LWNvbG9yOiAjNTU1O1xuJGhlYWRlci1ncmF5LWNvbG9yOiAjODA4Mjg1O1xuXG4vLyB0ZW1wb3JhcnkgY29sb3JzXG4kZ3JheS1jb2xvci0yOiAjYmJiZGMwO1xuJGdyYXktY29sb3ItMzogI2U2ZTdlODtcbiRncmF5LWNvbG9yLTQ6ICM1MTUxNTI7XG4kZ3JheS1jb2xvci01OiAjYmJiZGMwO1xuJGdyYXktY29sb3ItNjogIzk3OTc5NztcbiRncmF5LWNvbG9yLTc6ICNlNGU0ZTQ7XG4kZ3JheS1jb2xvci04OiAjNTg1ODViO1xuJGdyYXktY29sb3ItMTA6ICMwZDFlMzI7XG4kZ3JheS1jb2xvci0xMTogIzgwODI4NDtcbiRncmF5LWNvbG9yLTEyOiAjMzIzMjM2O1xuJHllbGxvdy1jb2xvcjogI2Y1YzkyMztcbiRsaWdodC1ncmVlbi1jb2xvcjogI2FmY2U0YTtcblxuLy9vcGFjaXR5LWNvbG9yc1xuJGdyYXktb3BhY2l0eTogcmdiYSgxNjcsIDE2OSwgMTcxLCAwLjUpO1xuJGJsYWNrLW9wYWNpdHk6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiRibGFjay1vcGFjaXR5LTE6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiRibGFjay1vcGFjaXR5LTI1OiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuJGJsYWNrLW9wYWNpdHktMDogcmdiYSgwLCAwLCAwLCAwKTtcblxuLy9mb250LXNpemVzXG4kY2FwdGlvbi1mb250LXNpemU6IChcbiAgc206IDEycHgsXG4gIG51bGw6IDExcHhcbik7XG5cbiRpbnB1dC1lcnJvci1mb250LXNpemU6IChcbiAgbnVsbDogMTJweFxuKTtcblxuJHh4LXNtYWxsLWZvbnQtc2l6ZTogKFxuICBudWxsOiAxMnB4XG4pO1xuXG4keC1zbWFsbC1mb250LXNpemU6IChcbiAgbnVsbDogMTNweFxuKTtcblxuXG4keHh4LXNtYWxsLWZvbnQtc2l6ZTogKFxuICBudWxsOiAxMXB4XG4pO1xuJHNtYWxsLWZvbnQtc2l6ZTogKFxuICBudWxsOiAxNHB4XG4pO1xuXG4kbWVkaXVtLWZvbnQtc2l6ZTogKFxuICBudWxsOiAxNnB4XG4pO1xuXG4keC1tZWRpdW0tZm9udC1zaXplOiAoXG4gIG51bGw6IDE4cHhcbik7XG5cbiRsYXJnZS1mb250LXNpemU6IChcbiAgbnVsbDogMjBweFxuKTtcblxuJHgtbGFyZ2UtZm9udC1zaXplOiAoXG4gIG51bGw6IDIycHhcbik7XG5cbiR0aXRsZS1zbWFsbC1mb250LXNpemU6IChcbiAgbnVsbDogMjRweFxuKTtcblxuJHRpdGxlLW1lZGl1bS1mb250LXNpemU6IChcbiAgbnVsbDogMjhweFxuKTtcblxuJHRpdGxlLWxhcmdlLWZvbnQtc2l6ZTogKFxuICBudWxsOiAzMnB4XG4pO1xuXG4vL2N1c3RvbSBmb250IHNpemVzXG4kYmlnZ2VyLWZvbnQtc2l6ZTogKFxuICBudWxsOiA0MHB4XG4pO1xuXG4vL2ljb24tZm9udCBzaXplc1xuJHRvb2xiYXItaWNvbi1zaXplOiAoXG4gIG51bGw6IDIycHhcbik7XG5cbi8vc29jaWFsIG1lZGlhIGljb24tZm9udCBzaXplc1xuJHNvY2lhbC1pY29uLXNpemU6IChcbiAgbnVsbDogMjBweFxuKTtcblxuJGdvb2dsZS1wbHVzLWljb24tc2l6ZTogKFxuICBudWxsOiAxOHB4XG4pO1xuXG4kdHdpdHRlci1pY29uLXNpemU6IChcbiAgbnVsbDogMTZweFxuKTtcblxuLy90ZW1wb3JhcnkgZm9udHNcbiRyZWd1bGFyLWZvbnQtc2l6ZXM6IChcbiAgbnVsbDogMTNweCxcbiAgbWQ6IDE0cHhcbik7XG5cbiR2ZXJ5LXNtYWxsLWZvbnQtc2l6ZXM6IChcbiAgbnVsbDogMTBweCxcbiAgbWQ6IDExcHhcbik7XG5cbiRzbWFsbC1mb250LXNpemVzOiAoXG4gIG51bGw6IDExcHgsXG4gIG1kOiAxMnB4XG4pO1xuXG4kYm9sZC1mb250LXNpemVzOiAoXG4gIG51bGw6IDE0cHgsXG4gIG1kOiAxNnB4XG4pO1xuXG4kdGl0bGUtZm9udC1zaXplczogKFxuICBudWxsOiAxM3B4LFxuICBtZDogMTRweFxuKTtcblxuJG1lZGl1bS1mb250LXNpemVzOiAoXG4gIG51bGw6IDE2cHgsXG4gIG1kOiAxOHB4XG4pO1xuXG4kc3ViLXRpdGxlLWZvbnQtc2l6ZXM6IChcbiAgbnVsbDogMTRweFxuKTtcblxuJGFjdGl2aXR5LWZvbnQtc2l6ZXM6IChcbiAgbnVsbDogMTZweCxcbiAgbWQ6IDIwcHhcbik7XG5cbiRiaWctZm9udC1zaXplczogKFxuICBudWxsOiAxNnB4LFxuICBtZDogMThweFxuKTtcblxuJGJpZ2dlci1mb250LXNpemVzOiAoXG4gIG51bGw6IDE2cHgsXG4gIHNtOiAxOHB4LFxuICBtZDogMjRweFxuKTtcblxuJHNlYXJjaC1oZWxwLWZvbnQtc2l6ZTogKFxuICBudWxsOiAxOHB4LFxuICBzbTogMjJweCxcbiAgbWQ6IDI4cHhcbik7XG4kc2VhcmNoLWZvbnQtc2l6ZTogKFxuICBudWxsOiAyOHB4LFxuICBzbTogMjJweCxcbiAgbWQ6IDI4cHhcbik7XG5cbiRyZWNlbnQtYWN0aXZpdHktZm9udC1zaXplOiAoXG4gIG51bGw6IDE4cHgsXG4gIHNtOiAyMnB4LFxuICBtZDogMjhweFxuKTtcblxuJGktd2FudC1mb250LXNpemU6IChcbiAgc206IDI4cHgsXG4gIG1kOiAyOHB4LFxuICBsZzogNDBweFxuKTtcblxuJHNlYXJjaC1yZXN1bHRzLWZvbnQtc2l6ZTogKFxuICBudWxsOiAxNHB4LFxuICBzbTogMTZweCxcbiAgbWQ6IDE4cHhcbik7XG5cbi8vPT0gTWVkaWEgcXVlcmllcyBicmVha3BvaW50cyBmcm9tIGJvb3RzdHJhcFxuXG4vLyBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZVxuLy8qKiBEZXByZWNhdGVkIGBAc2NyZWVuLXhzYCBhcyBvZiB2My4wLjFcbiRzY3JlZW4teHM6ICAgICAgICAgICAgICAgICAgNDgwcHg7XG4vLyoqIERlcHJlY2F0ZWQgYCRzY3JlZW4teHMtbWluYCBhcyBvZiB2My4yLjBcbiRzY3JlZW4teHMtbWluOiAgICAgICAgICAgICAgJHNjcmVlbi14cztcbi8vKiogRGVwcmVjYXRlZCBgQHNjcmVlbi1waG9uZWAgYXMgb2YgdjMuMC4xXG4kc2NyZWVuLXBob25lOiAgICAgICAgICAgICAgICRzY3JlZW4teHMtbWluO1xuXG4vLyBTbWFsbCBzY3JlZW4gLyB0YWJsZXRcbi8vKiogRGVwcmVjYXRlZCBgJHNjcmVlbi1zbWAgYXMgb2YgdjMuMC4xXG4kc2NyZWVuLXNtOiAgICAgICAgICAgICAgICAgIDc2OHB4O1xuJHNjcmVlbi1zbS1taW46ICAgICAgICAgICAgICAkc2NyZWVuLXNtO1xuLy8qKiBEZXByZWNhdGVkIGAkc2NyZWVuLXRhYmxldGAgYXMgb2YgdjMuMC4xXG4kc2NyZWVuLXRhYmxldDogICAgICAgICAgICAgICRzY3JlZW4tc20tbWluO1xuXG4vLyBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcFxuLy8qKiBEZXByZWNhdGVkIGAkc2NyZWVuLW1kYCBhcyBvZiB2My4wLjFcbiRzY3JlZW4tbWQ6ICAgICAgICAgICAgICAgICAgOTkycHg7XG4kc2NyZWVuLW1kLW1pbjogICAgICAgICAgICAgICRzY3JlZW4tbWQ7XG4vLyoqIERlcHJlY2F0ZWQgYCRzY3JlZW4tZGVza3RvcGAgYXMgb2YgdjMuMC4xXG4kc2NyZWVuLWRlc2t0b3A6ICAgICAgICAgICAgICRzY3JlZW4tbWQtbWluO1xuXG4vLyBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3Bcbi8vKiogRGVwcmVjYXRlZCBgJHNjcmVlbi1sZ2AgYXMgb2YgdjMuMC4xXG4kc2NyZWVuLWxnOiAgICAgICAgICAgICAgICAgIDEyMDBweDtcbiRzY3JlZW4tbGctbWluOiAgICAgICAgICAgICAgJHNjcmVlbi1sZztcbi8vKiogRGVwcmVjYXRlZCBgJHNjcmVlbi1sZy1kZXNrdG9wYCBhcyBvZiB2My4wLjFcbiRzY3JlZW4tbGctZGVza3RvcDogICAgICAgICAgJHNjcmVlbi1sZy1taW47XG5cbi8vIFNvIG1lZGlhIHF1ZXJpZXMgZG9uJ3Qgb3ZlcmxhcCB3aGVuIHJlcXVpcmVkLCBwcm92aWRlIGEgbWF4aW11bVxuJHNjcmVlbi14cy1tYXg6ICAgICAgICAgICAgICAoJHNjcmVlbi1zbS1taW4gLSAxKTtcbiRzY3JlZW4tc20tbWF4OiAgICAgICAgICAgICAgKCRzY3JlZW4tbWQtbWluIC0gMSk7XG4kc2NyZWVuLW1kLW1heDogICAgICAgICAgICAgICgkc2NyZWVuLWxnLW1pbiAtIDEpO1xuXG4kYnJlYWtwb2ludHM6IChcbiAgeHM6ICRzY3JlZW4teHMsXG4gIHNtOiAkc2NyZWVuLXNtLFxuICBtZDogJHNjcmVlbi1tZCxcbiAgbGc6ICRzY3JlZW4tbGdcbik7XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/modal/modal.component.html":
/*!********************************************!*\
  !*** ./src/app/modal/modal.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{ data.companyName }} </h2>\n<div mat-dialog-subtitle> {{ data.companyPosition}} </div>\n<img class=\"image-preview\" src=\"{{ data.image_url }}\" />\n<div mat-dialog-content>\n  <p> {{ data.companyText }} </p>\n</div>\n{{ data.companyName }}\n{{ data.companyBio }}\n{{ data.current }}\n{{ data.other }}\n{{ data.more }}\n{{ data.moreUrl }}\n{{ data.more2 }}\n{{ data.url }}\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Close</button>\n</div>"

/***/ }),

/***/ "./src/app/modal/modal.component.scss":
/*!********************************************!*\
  !*** ./src/app/modal/modal.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-preview {\n  width: 500px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWNhc2d1YXJkYWRvL25nLXBvcnRmb2xpby9zcmMvYXBwL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5pbWFnZS1wcmV2aWV3IHtcbiAgd2lkdGg6IDUwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var ModalComponent = /** @class */ (function () {
    function ModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/modal/modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/modal/model/modal.model.ts":
/*!********************************************!*\
  !*** ./src/app/modal/model/modal.model.ts ***!
  \********************************************/
/*! exports provided: ModalModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModel", function() { return ModalModel; });
var ModalModel = /** @class */ (function () {
    function ModalModel() {
    }
    return ModalModel;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\" [class.scrolling]=\"!isTopScroll\">\n  <a id=\"education-ref\" href=\"#education\" class=\"text-uppercase navbar-option\">{{ \"EDUCATION.EDUCATION\" | translate }}</a>\n  <a id=\"skills-ref\" href=\"#skills\" class=\"text-uppercase navbar-option\">{{ \"NAVBAR.SKILLS\" | translate }}</a>\n  <a id=\"experience-ref\" href=\"#about\" class=\"text-uppercase navbar-option\">{{ \"NAVBAR.EXPERIENCE\" | translate }}</a>\n  <a id=\"feedback-ref\" href=\"#feedback\" class=\"text-uppercase navbar-option\">{{ \"NAVBAR.FEEDBACK\" | translate }}</a>\n  <a id=\"contact-ref\" href=\"#contact\" class=\"text-uppercase navbar-option\">{{ \"NAVBAR.CONTACT\" | translate }}</a>\n  <a id=\"download-ref\" href=\"#print\" class=\"text-uppercase navbar-option\">{{ \"NAVBAR.DOWNLOAD\" | translate }}</a>\n  <img (click)=\"imageClick()\" class=\"lang-button\" src=\"{{ url }}\"/>\n</nav>\n\n\n<!-- <nav class=\"navbar navbar-expand-lg navbar-dark fixed-top\" id=\"mainNav\">\n  <div class=\"container\">\n    <a class=\"navbar-brand js-scroll-trigger\" href=\"#page-top\">Lucas Guardado</a>\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\n      aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      Menu\n      <i class=\"fas fa-bars\"></i>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav text-uppercase ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"es nav-link js-scroll-trigger\" href=\"#skills\">Aptitudes</a>\n          <a class=\"nav-link js-scroll-trigger\" href=\"#skills\">Skills</a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"es nav-link js-scroll-trigger\" href=\"#about\">Experiencia</a>\n          <a class=\"nav-link js-scroll-trigger\" href=\"#about\">Experience</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"#feedback\">Feedback</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"es nav-link js-scroll-trigger\" href=\"#contact\">Contacto</a>\n          <a class=\"nav-link js-scroll-trigger\" href=\"#contact\">Contact</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"#print\">Download</a>\n          <a class=\"es nav-link js-scroll-trigger\" href=\"#print\">Descargar</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"lang-section\">\n    <a class=\"es navbar-lang navbar-language-selected js-en-trigger\">English</a>\n    <a class=\"navbar-lang navbar-language-selected js-en-trigger\">Español</a>\n  </div>\n</nav> -->"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  z-index: 200;\n  transition-duration: .3s;\n  position: fixed;\n  padding: 20px;\n  width: 100%; }\n  .navbar.scrolling {\n    background: black;\n    padding: 0 20px;\n    transition-duration: .3s; }\n  .navbar .navbar-option {\n    cursor: pointer;\n    padding: 15px;\n    font-family: 'Roboto';\n    color: white; }\n  .navbar .lang-button {\n    width: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWNhc2d1YXJkYWRvL25nLXBvcnRmb2xpby9zcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZO0VBTVoseUJBQXdCO0VBQ3hCLGdCQUFlO0VBQ2YsY0FBYTtFQUNiLFlBQVcsRUFXWjtFQXJCRDtJQUdJLGtCQUFpQjtJQUNqQixnQkFBZTtJQUNqQix5QkFBd0IsRUFDdkI7RUFOSDtJQVlJLGdCQUFlO0lBQ2YsY0FBYTtJQUNiLHNCQUFxQjtJQUNyQixhQUFZLEVBQ2I7RUFoQkg7SUFtQkksWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICB6LWluZGV4OiAyMDA7XG4gICYuc2Nyb2xsaW5nIHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgfVxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC5uYXZiYXItb3B0aW9uIHsgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5sYW5nLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translate) {
        this.translate = translate;
        this.isTopScroll = false;
        this.en = true;
        this.url = '';
        this.url_en = '/assets/i18n/en.png';
        this.url_es = '/assets/i18n/es.png';
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.url = this.url_es;
    };
    NavbarComponent.prototype.imageClick = function () {
        if (this.en) {
            this.url = this.url_es;
            this.translate.use('en');
        }
        else {
            this.url = this.url_en;
            this.translate.use('es');
        }
        this.en = !this.en;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavbarComponent.prototype, "isTopScroll", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/print/print.component.html":
/*!********************************************!*\
  !*** ./src/app/print/print.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <!-- Print -->\n  <section class=\"print-section\" id=\"print\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 text-center\">\n          <h2 class=\"section-heading text-uppercase\"> {{ 'PRINT.CV' | translate }} </h2>\n          <h3 class=\"text-muted\"> {{ 'PRINT.YOU_CAN_DOWNLOAD' | translate }}</h3>\n          <h3><a href=\"print/Lucas_Guardado_en.pdf\" target=\"_blank\" class=\"contact-link\">{{ 'HERE' | translate}}</a></h3>\n        </div>\n      </div>\n    </div>\n  </section>\n  <a id=\"goTop\" class=\"go-top navbar-brand js-scroll-trigger\" href=\"#page-top\">\n      <i class=\"fas fa-arrow-up\"></i>\n  </a>\n"

/***/ }),

/***/ "./src/app/print/print.component.scss":
/*!********************************************!*\
  !*** ./src/app/print/print.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaW50L3ByaW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/print/print.component.ts":
/*!******************************************!*\
  !*** ./src/app/print/print.component.ts ***!
  \******************************************/
/*! exports provided: PrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintComponent", function() { return PrintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrintComponent = /** @class */ (function () {
    function PrintComponent() {
    }
    PrintComponent.prototype.ngOnInit = function () {
    };
    PrintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-print',
            template: __webpack_require__(/*! ./print.component.html */ "./src/app/print/print.component.html"),
            styles: [__webpack_require__(/*! ./print.component.scss */ "./src/app/print/print.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrintComponent);
    return PrintComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Skills -->\n <section class=\"bg-light\">\n   <div id=\"skills\" class=\"section-marker\"></div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <h2 class=\"section-heading text-uppercase\">{{ 'SKILLS.SKILLS' | translate}}</h2>\n        <h3 class=\"section-subheading text-muted\"></h3>\n      </div>\n    </div>\n    <div class=\"row text-center\">\n      <div class=\"col-md-4\">\n        <span class=\"fa-stack fa-4x\">\n          <i class=\"fas fa-circle fa-stack-2x text-primary\"></i>\n          <i class=\"fas fa-laptop fa-stack-1x fa-inverse\"></i>\n        </span>\n        <h4 class=\"service-heading\">{{ 'SKILLS.FE_BE' | translate}}</h4>\n        <p class=\"text-muted skill\">{{ 'SKILLS.ANGULAR' | translate}}</p>\n        <div class=\"progress\">\n          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:100%\">\n          </div>\n        </div>\n        <p class=\"text-muted skill\">{{ 'SKILLS.HTML_CSS' | translate}}</p>\n        <div class=\"progress\">\n          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:100%\">\n          </div>\n        </div>\n        <p class=\"text-muted skill\">{{ 'SKILLS.JAVASCRIPT' | translate}}</p>\n        <div class=\"progress\">\n          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:100%\">\n          </div>\n        </div>\n        <p class=\"text-muted skill\">{{ 'SKILLS.BOOTSTRAP' | translate}}</p>\n        <div class=\"progress\">\n          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:100%\">\n          </div>\n        </div>\n        <p class=\"text-muted skill\">{{ 'SKILLS.GIT' | translate}}</p>\n        <div class=\"progress\">\n          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:100%\">\n          </div>\n        </div>\n        <p class=\"text-muted skill\">{{ 'SKILLS.IONIC' | translate}}</p>\n        <div class=\"progress\">\n          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:80%\">\n          </div>\n        </div>\n        <p class=\"text-muted skill\">{{ 'SKILLS.MULESOFT' | translate}}</p>\n        <div class=\"progress\">\n          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:60%\">\n          </div>\n        </div>\n        <p class=\"text-muted skill\">{{ 'SKILLS.REACT' | translate}}</p>\n        <div class=\"progress\">\n          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:60%\">\n          </div>\n        </div>\n        <p class=\"text-muted skill\">{{ 'SKILLS.ANDROID' | translate}}</p>\n        <div class=\"progress\">\n          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"55\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:55%\">\n          </div>\n        </div>\n        <p class=\"text-muted skill\">{{ 'SKILLS.TDD' | translate}}</p>\n        <div class=\"progress\">\n          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\">\n          </div>\n        </div>\n        <p class=\"text-muted skill\">{{ 'SKILLS.NODE' | translate}}</p>\n        <div class=\"progress\">\n          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:40%\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 knowledge\">\n        <span class=\"fa-stack fa-4x\">\n          <i class=\"fas fa-circle fa-stack-2x text-primary\"></i>\n          <i class=\"fas fa-calendar fa-stack-1x fa-inverse\"></i>\n        </span>\n        <h4 class=\"service-heading\">{{ 'SKILLS.SCRUM' | translate}}</h4>\n        <p class=\"text-muted\">{{ 'SKILLS.SCRUM_DETAILS' | translate}}</p>\n      </div>\n      <div class=\"col-md-4\">\n        <span class=\"fa-stack fa-4x\">\n          <i class=\"fas fa-circle fa-stack-2x text-primary\"></i>\n          <i class=\"fas fa-language fa-stack-1x fa-inverse\"></i>\n        </span>\n        <h4 class=\"es service-heading\">{{ 'SKILLS.ENGLISH' | translate}}</h4>\n        <p class=\"text-muted\">{{ 'SKILLS.ENGLISH_DETAILS' | translate}}</p>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/skills/skills.component.scss":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress-bar {\n  background-color: #f4df00; }\n\nimg::-moz-selection {\n  background: transparent; }\n\nimg::selection {\n  background: transparent; }\n\nimg::-moz-selection {\n  background: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWNhc2d1YXJkYWRvL25nLXBvcnRmb2xpby9zcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSwwQkFBeUIsRUFDMUI7O0FBQ0Q7RUFDRSx3QkFBdUIsRUFDeEI7O0FBRUQ7RUFDRSx3QkFBdUIsRUFDeEI7O0FBRUQ7RUFDRSx3QkFBdUIsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZGYwMDtcbn1cbmltZzo6LW1vei1zZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW1nOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW1nOjotbW96LXNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.scss */ "./src/app/skills/skills.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
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

module.exports = __webpack_require__(/*! /Users/lucasguardado/ng-portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map