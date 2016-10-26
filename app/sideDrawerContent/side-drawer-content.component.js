"use strict";
var core_1 = require("@angular/core");
var frame_1 = require("ui/frame");
var SideDrawerContentComponent = (function () {
    function SideDrawerContentComponent() {
    }
    SideDrawerContentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cds-side-drawer-content',
            styleUrls: ['side-drawer-content.css'],
            templateUrl: "side-drawer-content.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], SideDrawerContentComponent);
    return SideDrawerContentComponent;
}());
exports.SideDrawerContentComponent = SideDrawerContentComponent;
function sideDrawer() {
    return frame_1.topmost().currentPage.getViewById("side-drawer");
}
function closeDrawer() {
    var instance = sideDrawer();
    if (instance) {
        instance.closeDrawer();
    }
}
function toggleDrawerState() {
    var instance = sideDrawer();
    if (instance) {
        instance.toggleDrawerState();
    }
}
function showSlideout(args) {
    toggleDrawerState();
}
exports.showSlideout = showSlideout;
//# sourceMappingURL=side-drawer-content.component.js.map