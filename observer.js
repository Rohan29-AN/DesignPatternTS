var weatherStation = /** @class */ (function () {
    function weatherStation() {
        this.observers = [];
    }
    weatherStation.prototype.setTemperature = function (temp) {
        console.log("Weather station : new temperature measurement: " + temp);
        this.temperature = temp;
        this.notifyObservers();
    };
    weatherStation.prototype.registerObserver = function (obs) {
        this.observers.push(obs);
    };
    weatherStation.prototype.removeObserver = function (obs) {
        var index = this.observers.indexOf(obs);
        if (index !== -1) {
            this.observers.slice(index, 1);
        }
    };
    weatherStation.prototype.notifyObservers = function () {
        for (var i = 0; i < this.observers.length; i++) {
            this.observers[i].update(this.temperature);
        }
    };
    return weatherStation;
}());
var temperatureDisplay = /** @class */ (function () {
    function temperatureDisplay(weatherStation) {
        this.subject = weatherStation;
        this.subject.registerObserver(this);
    }
    temperatureDisplay.prototype.update = function (temperature) {
        console.log("Temperature display : I need to update my display");
    };
    return temperatureDisplay;
}());
var Fan = /** @class */ (function () {
    function Fan(weatherStation) {
        this.subject = weatherStation;
        this.subject.registerObserver(this);
    }
    Fan.prototype.update = function (temperature) {
        if (temperature > 25) {
            console.log("Fan : TURN ON");
        }
        else {
            console.log("Fan : TURN OFF");
        }
    };
    return Fan;
}());
var wStation = new weatherStation();
var tDisplay = new temperatureDisplay(wStation);
var fan1 = new Fan(wStation);
wStation.setTemperature(20);
wStation.setTemperature(26);
