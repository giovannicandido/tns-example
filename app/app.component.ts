import { Component, ViewChild, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import * as sideDrawerModule  from "nativescript-telerik-ui/sidedrawer";

import {RadSideDrawerComponent, SideDrawerType} from "nativescript-telerik-ui/sidedrawer/angular/"
import { registerElement } from "nativescript-angular/element-registry";

registerElement("Map", () => require("nativescript-mapbox").Mapbox)

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    
    private _sideDrawerTransition: sideDrawerModule.DrawerTransitionBase;
    constructor(private _page: Page, private _changeDetectionRef: ChangeDetectorRef) {
        this._page.on("loaded", this.onLoaded, this);
    }

    @ViewChild("drawer") public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
        console.info("AfterViewInit")
    }

    openDrawer(){
        this.drawer.toggleDrawerState();
    }
    public get sideDrawerTransition(): sideDrawerModule.DrawerTransitionBase {
        return this._sideDrawerTransition;
    }
    public onLoaded(args) {
        this._sideDrawerTransition = new sideDrawerModule.PushTransition();
    }
}
