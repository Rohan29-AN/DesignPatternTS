interface Iphone {
    useLighting();
}

interface Android {
    useMicroUsb();
}

class iphoneDevice implements Iphone {
    useLighting() {
        console.log('Using lightning port ...');
    }
}

class androidDevice implements Android {
    useMicroUsb() {
        console.log('Using micro usb ...');
    }
}

class LightingToMicroUsbAdapter implements Android {
    private iphone: iphoneDevice;

    constructor(device: iphoneDevice) {
        this.iphone = device;

    }
    useMicroUsb() {
        console.log("Want to use micro USB , converting to Lighting...");
        this.iphone.useLighting()
    }
}

class MicroUsbToLightningAdapter implements Iphone{
    private android: androidDevice;

    constructor(device: androidDevice) {
        this.android = device;

    }

    useLighting() {
        console.log("Want to use lightning , converting to micro usb...");
        this.android.useMicroUsb()
    }

}


let iphone7= new iphoneDevice();
let googlePixel= new androidDevice();

let usbToLightningCharger=new  MicroUsbToLightningAdapter(googlePixel);
usbToLightningCharger.useLighting();