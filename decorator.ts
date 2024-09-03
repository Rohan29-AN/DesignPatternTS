abstract class Car {
    public description: string;
    public getDescription(): string {
        return this.description;
    }

    public abstract cost(): number;
}

class ModelS {
    public description = "Model S";
    public cost(): number {
        return 100000;
    }
}

class ModelX {
    public description = "Model X";
    public cost(): number {
        return 300000;
    }
}

abstract class CarOptions extends Car {
    decoratedCar: Car;
    public abstract getDescription(): string;
    public abstract cost(): number;
}

class EnhancedAutoPilot extends CarOptions {
    decoratedCar: Car;

    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }

    public getDescription(): string {
        return this.decoratedCar.getDescription() + ', Enhanced AutoPilot';
    }
    public cost(): number {
        return this.decoratedCar.cost() + 10000;
    }

}


class RearFacingSeats extends CarOptions {
    decoratedCar: Car;

    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }

    public getDescription(): string {
        return this.decoratedCar.getDescription() + ', Rear facing seats';
    }
    public cost(): number {
        return this.decoratedCar.cost() + 5000;
    }

}


