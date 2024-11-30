interface State {
    order: Order;

    cancelOrder();
    verifyPayment();
    shipOrder();
}

class Order {
    currentState: State;
    cancelledOrderState: State;
    paymentPendingState: State;
    orderBeingPreparedState: State;
    orderShippedState: State;

    constructor() {
        this.cancelledOrderState = new CancelledOrderState(this);
        this.paymentPendingState = new PaymentPendingState(this);
        this.orderBeingPreparedState = new orderBeingPreparedState(this);
        this.orderShippedState = new OrderShippedState(this);

        this.setState(this.paymentPendingState);

    }

    public setState(state: State) {
        this.currentState = state;
    }
    public getState(): State {
        return this.currentState;
    }
}

class CancelledOrderState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrder() {
        console.log("Your order has already been cancelled...");
    }
    verifyPayment() {
        console.log("Order cancelled, you cannot verify payment...");
    }
    shipOrder() {
        console.log("Order cannot ship , it was cancelled.");
    }
}

class PaymentPendingState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrder() {
        console.log("Cancelling your unpaid order ... ");
        this.order.setState(this.order.cancelledOrderState);
    }
    verifyPayment() {
        console.log("Payment verified . Shipping soon");
        this.order.setState(this.order.orderBeingPreparedState);
    }
    shipOrder() {
       console.log("Cannot ship the order when payment is pending !");

    }
}

class orderBeingPreparedState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrder() {
       console.log("Cancelling your order...")
       this.order.setState(this.order.cancelledOrderState);
    }
    verifyPayment() {
       console.log("Already verified your payment.");
    }
    shipOrder() {
        console.log("Shipping your order now.");
        this.order.setState(this.order.orderShippedState);
    }
}

class OrderShippedState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrder() {
        console.log()
    }
    verifyPayment() {
        throw new Error("Method not implemented.");
    }
    shipOrder() {
        throw new Error("Method not implemented.");
    }
}