interface Subject{
    registerObserver(obs:Observer);
    removeObserver(obs:Observer);
    notifyObservers();
}

interface Observer{
    update(temperature:number);
}


class weatherStation {
    private temperature:number;

    setTemperature(temp:number){
        this.temperature=temp;
    }
}