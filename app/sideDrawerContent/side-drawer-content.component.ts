import {Component} from "@angular/core";

import * as gestures from "ui/gestures";

import { topmost } from "ui/frame"

import * as application from "application";
@Component({
    moduleId: module.id,
    selector: 'cds-side-drawer-content',
    styleUrls: ['side-drawer-content.css'],
    templateUrl: "side-drawer-content.component.html"
})
export class SideDrawerContentComponent {

}

function sideDrawer(): any {
    return topmost().currentPage.getViewById("side-drawer");
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

export function showSlideout(args) {
    toggleDrawerState();
}
