var BlurayPlayer = /** @class */ (function () {
    function BlurayPlayer() {
    }
    BlurayPlayer.prototype.on = function () {
        console.log("Bluray player turning on...");
    };
    BlurayPlayer.prototype.turnOff = function () {
        console.log("Bluray turning off...");
    };
    BlurayPlayer.prototype.play = function () {
        console.log("Playing bluray disc...");
    };
    return BlurayPlayer;
}());
var Amplifier = /** @class */ (function () {
    function Amplifier() {
    }
    Amplifier.prototype.on = function () {
        console.log("Applifier is turning on...");
    };
    Amplifier.prototype.off = function () {
        console.log("Amplifier is turning off...");
    };
    Amplifier.prototype.setSource = function (source) {
        this.source = source;
        console.log("Setting source to :" + source);
    };
    Amplifier.prototype.setVolume = function (volume) {
        this.volume = volume;
        console.log("Setting volume to :" + volume);
    };
    return Amplifier;
}());
var Lights = /** @class */ (function () {
    function Lights() {
    }
    Lights.prototype.dim = function () {
        console.log("Lights are dimming...");
    };
    return Lights;
}());
var Tv = /** @class */ (function () {
    function Tv() {
    }
    Tv.prototype.on = function () {
        console.log("TV is turning on...");
    };
    Tv.prototype.off = function () {
        console.log("TV is turning");
    };
    return Tv;
}());
var PopcornMaker = /** @class */ (function () {
    function PopcornMaker() {
    }
    PopcornMaker.prototype.on = function () {
        console.log("Popcorn maker is turning on...");
    };
    PopcornMaker.prototype.off = function () {
        console.log("Popcorn maker is turning off...");
    };
    PopcornMaker.prototype.pop = function () {
        console.log("Popping corn");
    };
    return PopcornMaker;
}());
var HomeTheaterFacade = /** @class */ (function () {
    function HomeTheaterFacade(bluray, amp, lights, tv, popCornMaker) {
        this.amplifier = amp;
        this.lights = lights;
        this.tv = tv;
        this.popCornMaker = popCornMaker;
        this.bluray = bluray;
    }
    HomeTheaterFacade.prototype.watchMovie = function () {
        this.popCornMaker.on();
        this.popCornMaker.pop();
        this.lights.dim();
        this.tv.on();
        this.bluray.on();
        this.amplifier.on();
        this.amplifier.setSource("Bluray");
        this.amplifier.setVolume(15);
        this.bluray.on();
    };
    HomeTheaterFacade.prototype.endMovie = function () {
        this.popCornMaker.off();
        this.amplifier.off();
        this.tv.off();
        this.bluray.turnOff();
    };
    return HomeTheaterFacade;
}());
var bluray = new BlurayPlayer();
var tv = new Tv();
var amplifier = new Amplifier();
var lights = new Lights();
var popCornMaker = new PopcornMaker();
var homeTheater = new HomeTheaterFacade(bluray, amplifier, lights, tv, popCornMaker);
homeTheater.watchMovie();
