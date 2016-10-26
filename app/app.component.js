"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var sideDrawerModule = require("nativescript-telerik-ui/sidedrawer");
var _1 = require("nativescript-telerik-ui/sidedrawer/angular/");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("Map", function () { return require("nativescript-mapbox").Mapbox; });
var AppComponent = (function () {
    function AppComponent(_page, _changeDetectionRef) {
        this._page = _page;
        this._changeDetectionRef = _changeDetectionRef;
        this._page.on("loaded", this.onLoaded, this);
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
        console.info("AfterViewInit");
    };
    AppComponent.prototype.openDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    Object.defineProperty(AppComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onLoaded = function (args) {
        this._sideDrawerTransition = new sideDrawerModule.PushTransition();
    };
    __decorate([
        core_1.ViewChild("drawer"), 
        __metadata('design:type', _1.RadSideDrawerComponent)
    ], AppComponent.prototype, "drawerComponent", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [page_1.Page, core_1.ChangeDetectorRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map