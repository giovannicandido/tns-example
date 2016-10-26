"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var side_drawer_content_component_1 = require("./sideDrawerContent/side-drawer-content.component");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var AppComponentModule = (function () {
    function AppComponentModule() {
    }
    AppComponentModule = __decorate([
        core_1.NgModule({
            declarations: [angular_1.SIDEDRAWER_DIRECTIVES, app_component_1.AppComponent, side_drawer_content_component_1.SideDrawerContentComponent],
            bootstrap: [app_component_1.AppComponent],
            imports: [platform_1.NativeScriptModule],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponentModule);
    return AppComponentModule;
}());
platform_1.platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
//# sourceMappingURL=main.js.map