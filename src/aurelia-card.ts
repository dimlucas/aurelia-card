import { bindable } from 'aurelia-framework';
import * as $ from 'jquery';
import 'jquery-ui';

export class AureliaCardCustomElement {

    @bindable transparent: boolean = false;

    //The card's resizability defaults to false
    @bindable resizable: boolean = false;

    //If set to true the card's contents will be collapsible
    @bindable collapsible: boolean = false;

    //The handles that can be used for resizing. 
    //Predefined values: [all, horizontal, h, vertical, v]
    //Comma separated values. Accepted values: n,e,s,w,ne,se,nw,sw
    @bindable handles: string = "s";
    private allHandles: string = "n,s,w,e,ne,se,nw,sw";
    private hHandles: string = "e,w";
    private vHandles: string = "n,s";
    private handleClassPrefix: string = "ui-resizable-handle ui-resizable-";
    private northHandleClass: string = this.handleClassPrefix + "n";
    private eastHandleClass: string = this.handleClassPrefix + "e";
    private westHandleClass: string = this.handleClassPrefix + "w";
    private southHandleClass: string = this.handleClassPrefix + "s";
    private northEastHandleClass: string = this.handleClassPrefix + "ne";
    private southEastHandleClass: string = this.handleClassPrefix + "se";
    private northWestHandleClass: string = this.handleClassPrefix + "nw";
    private southWestHandleClass: string = this.handleClassPrefix + "sw";

    //If set to true, the card's original aspect ratio will be maintained
    @bindable aspectRatio: boolean = false;
    card: any;
    collapseBtn: any;

    aspectRatioChanged(newValue, oldValue) {
        console.log("Aspect Ratio changed form " + oldValue + " to " + newValue);
    }

    handlesChanged(newValue, oldValue) {
        if (newValue != oldValue) {
            if (newValue == 'all') {
                this.handles = this.allHandles
            }
            else if ((newValue == 'horizontal') || (newValue == 'h')) {
                this.handles = this.hHandles;
            }
            else if ((newValue == 'vertical') || (newValue == 'v')) {
                this.handles = this.vHandles;
            }
        }
    }

    attached() {
        if (this.resizable) {
            $(this.card).resizable({
                handles: this.handles
            });
            let eastHandle = document.getElementsByClassName(this.eastHandleClass)[0];
            let westHandle = document.getElementsByClassName(this.westHandleClass)[0];
            let northHandle = document.getElementsByClassName(this.northHandleClass)[0];
            let southHandle = document.getElementsByClassName(this.southHandleClass)[0];
            let neHandle = document.getElementsByClassName(this.northEastHandleClass)[0];
            let seHandle = document.getElementsByClassName(this.southEastHandleClass)[0];
            let nwHandle = document.getElementsByClassName(this.northWestHandleClass)[0];
            let swHandle = document.getElementsByClassName(this.southWestHandleClass)[0];
            if(eastHandle){
                //Add icons to the handles here
            }
            if(westHandle){
                console.log(westHandle);
            }
            if(northHandle){
                console.log(northHandle);
            }
            if(southHandle){
                console.log(southHandle);
            }
            if(neHandle){
                console.log(neHandle);
            }
            if(nwHandle){
                console.log(nwHandle);
            }
            if(seHandle){
                console.log(seHandle);
            }
            if(swHandle){
                console.log(swHandle);
            }
        }

        //Called to solve a bug caused when the first call to .collapse() does nothing
        if(this.collapsible){
            $(this.card).collapse('show');
        }
    }

    //Collapses the card's contents when the collapse button is clicked
    collapse(): void{
        if(this.collapsible){
            $(this.card).collapse('toggle');
            $(this.collapseBtn).toggleClass('rotate-up');
        }
    }
}

