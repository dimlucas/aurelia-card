import 'jquery-ui';
export declare class AureliaCardCustomElement {
    transparent: boolean;
    resizable: boolean;
    collapsible: boolean;
    handles: string;
    private allHandles;
    private hHandles;
    private vHandles;
    private handleClassPrefix;
    private northHandleClass;
    private eastHandleClass;
    private westHandleClass;
    private southHandleClass;
    private northEastHandleClass;
    private southEastHandleClass;
    private northWestHandleClass;
    private southWestHandleClass;
    aspectRatio: boolean;
    card: any;
    collapseBtn: any;
    aspectRatioChanged(newValue: any, oldValue: any): void;
    handlesChanged(newValue: any, oldValue: any): void;
    attached(): void;
    collapse(): void;
}
