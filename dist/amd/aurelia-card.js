var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'jquery', 'jquery-ui'], function (require, exports, aurelia_framework_1, $) {
    "use strict";
    var CardCustomElement = (function () {
        function CardCustomElement() {
            this.transparent = false;
            this.resizable = false;
            this.handles = "s";
            this.allHandles = "n,s,w,e,ne,se,nw,sw";
            this.hHandles = "e,w";
            this.vHandles = "n,s";
            this.handleClassPrefix = "ui-resizable-handle ui-resizable-";
            this.northHandleClass = this.handleClassPrefix + "n";
            this.eastHandleClass = this.handleClassPrefix + "e";
            this.westHandleClass = this.handleClassPrefix + "w";
            this.southHandleClass = this.handleClassPrefix + "s";
            this.northEastHandleClass = this.handleClassPrefix + "ne";
            this.southEastHandleClass = this.handleClassPrefix + "se";
            this.northWestHandleClass = this.handleClassPrefix + "nw";
            this.southWestHandleClass = this.handleClassPrefix + "sw";
            this.aspectRatio = false;
        }
        CardCustomElement.prototype.aspectRatioChanged = function (newValue, oldValue) {
            console.log("Aspect Ratio changed form " + oldValue + " to " + newValue);
        };
        CardCustomElement.prototype.handlesChanged = function (newValue, oldValue) {
            if (newValue != oldValue) {
                if (newValue == 'all') {
                    this.handles = this.allHandles;
                }
                else if ((newValue == 'horizontal') || (newValue == 'h')) {
                    this.handles = this.hHandles;
                }
                else if ((newValue == 'vertical') || (newValue == 'v')) {
                    this.handles = this.vHandles;
                }
            }
        };
        CardCustomElement.prototype.attached = function () {
            if (this.resizable) {
                $(this.card).resizable({
                    handles: this.handles
                });
                var eastHandle = document.getElementsByClassName(this.eastHandleClass)[0];
                var westHandle = document.getElementsByClassName(this.westHandleClass)[0];
                var northHandle = document.getElementsByClassName(this.northHandleClass)[0];
                var southHandle = document.getElementsByClassName(this.southHandleClass)[0];
                var neHandle = document.getElementsByClassName(this.northEastHandleClass)[0];
                var seHandle = document.getElementsByClassName(this.southEastHandleClass)[0];
                var nwHandle = document.getElementsByClassName(this.northWestHandleClass)[0];
                var swHandle = document.getElementsByClassName(this.southWestHandleClass)[0];
                if (eastHandle) {
                }
                if (westHandle) {
                    console.log(westHandle);
                }
                if (northHandle) {
                    console.log(northHandle);
                }
                if (southHandle) {
                    console.log(southHandle);
                }
                if (neHandle) {
                    console.log(neHandle);
                }
                if (nwHandle) {
                    console.log(nwHandle);
                }
                if (seHandle) {
                    console.log(seHandle);
                }
                if (swHandle) {
                    console.log(swHandle);
                }
            }
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], CardCustomElement.prototype, "transparent", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], CardCustomElement.prototype, "resizable", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], CardCustomElement.prototype, "handles", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], CardCustomElement.prototype, "aspectRatio", void 0);
        return CardCustomElement;
    }());
    exports.CardCustomElement = CardCustomElement;
});

//# sourceMappingURL=aurelia-card.js.map
