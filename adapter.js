var iphoneDevice = /** @class */ (function () {
    function iphoneDevice() {
    }
    iphoneDevice.prototype.useLighting = function () {
        console.log('Using lightning port ...');
    };
    return iphoneDevice;
}());
var androidDevice = /** @class */ (function () {
    function androidDevice() {
    }
    androidDevice.prototype.useMicroUsb = function () {
        console.log('Using micro usb ...');
    };
    return androidDevice;
}());
var LightingToMicroUsbAdapter = /** @class */ (function () {
    function LightingToMicroUsbAdapter(device) {
        this.iphone = device;
    }
    LightingToMicroUsbAdapter.prototype.useMicroUsb = function () {
        console.log("Want to use micro USB , converting to Lighting...");
        this.iphone.useLighting();
    };
    return LightingToMicroUsbAdapter;
}());
var MicroUsbToLightningAdapter = /** @class */ (function () {
    function MicroUsbToLightningAdapter(device) {
        this.android = device;
    }
    MicroUsbToLightningAdapter.prototype.useLighting = function () {
        console.log("Want to use lightning , converting to micro usb...");
        this.android.useMicroUsb();
    };
    return MicroUsbToLightningAdapter;
}());
var iphone7 = new iphoneDevice();
var googlePixel = new androidDevice();
var usbToLightningCharger = new MicroUsbToLightningAdapter(googlePixel);
usbToLightningCharger.useLighting();
