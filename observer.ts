interface Subject{
    registerObserver(obs:Observer);
    removeObserver(obs:Observer);
    notifyObservers();
}

interface Observer{
    update(temperature:number);
}


class weatherStation implements Subject{
   
    private temperature:number;
    private observers:Observer[]=[];

    setTemperature(temp:number){
        console.log("Weather station : new temperature measurement: "+temp);
        this.temperature=temp;
        this.notifyObservers();
    }

    registerObserver(obs: Observer) {
        this.observers.push(obs);
    }
    removeObserver(obs: Observer) {
        const index=this.observers.indexOf(obs);
        if(index!== -1){
            this.observers.slice(index,1);
        }
    }
    notifyObservers() {
        for(let i=0;i<this.observers.length;i++){
            this.observers[i].update(this.temperature);
        }
    }
}