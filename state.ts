interface State{
    order:Order;
    
    cancelOrder();
    verifyPayment();
    shipOrder();
}

class Order{
    currentState:State;

    public setState(state:State){
        this.currentState=state;
    }
    public getState(): State{
        return this.currentState;
    }
}