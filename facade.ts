class BlurayPlayer{
    on(){
        console.log("Bluray player turning on...");
    }

    turnOff(){
        console.log("Bluray turning off...");

    }

    play(){
        console.log("Playing bluray disc...");
    }
}


class Amplifier{
    private source:String;
    private volume:Number;

    on(){
        console.log("Applifier is turning on...");
    }
    off(){
        console.log("Amplifier is turning off...")
    }

    setSource(source:String){
        this.source=source;
        console.log("Setting source to :"+source);
    }

    setVolume(volume:Number){
        this.volume=volume;
        console.log("Setting volume to :"+volume);
    }
}


class Lights{
    dim(){
        console.log("Lights are dimming...")
    }
}

class Tv{
    on(){
        console.log("TV is turning on...");
    }

    off(){
        console.log("TV is turning");
    }
}

class PopcornMaker{
    on(){
        console.log("Popcorn maker is turning on...");
    }
    off(){
        console.log("Popcorn maker is turning off...");
    }
    pop(){
        console.log("Popping corn");
    }
}


class HomeTheaterFacade{
    private bluray: BlurayPlayer;
    private amplifier:Amplifier;
    private lights:Lights;
    private tv:Tv;
    private popCornMaker: PopcornMaker;


    constructor(bluray:BlurayPlayer,amp:Amplifier,lights:Lights,tv:Tv,popCornMaker:PopcornMaker){
        this.amplifier=amp;
        this.lights=lights;
        this.tv=tv;
        this.popCornMaker=popCornMaker;
        this.bluray=bluray;
    }

    public watchMovie(){
        this.popCornMaker.on();
        this.popCornMaker.pop();

        this.lights.dim();

        this.tv.on();
        this.bluray.on();


        this.amplifier.on();
        this.amplifier.setSource("Bluray");
        this.amplifier.setVolume(15);

        this.bluray.on();
    }


    public endMovie(){
        this.popCornMaker.off();
        this.amplifier.off();
        this.tv.off();
        this.bluray.turnOff();
    }
}


let bluray=new BlurayPlayer();
let tv=new Tv();
let amplifier= new Amplifier();
let lights= new Lights();
let popCornMaker =  new PopcornMaker();

let homeTheater= new HomeTheaterFacade(bluray,amplifier,lights,tv,popCornMaker);
homeTheater.watchMovie();