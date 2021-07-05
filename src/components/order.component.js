import { Component } from "react";

export default class Order extends Component {
    constructor(props){
        super(props);

        this.quantity_change=this.quantity_change.bind(this);
        this.priceInput=this.priceInput.bind(this);

        this.state={
            price: 0,
            quantity: 1,
            total: 0
        }
    }

    quantity_change(e) {
        e.preventDefault();
        this.setState({
            quantity: e.target.value,
            total: e.target.value*this.state.price
        });
    }

    priceInput(e){
        this.setState({
            price: e.target.value,
            total: e.target.value*this.state.quantity
        });
    }

    render() {
        return (
            <div>
                <div className="container cont-2">
                    <div className="row">
                        <div className="col-lg-6 col-xs-12 col-md-6 prd">
                            <img src="./assets/images1/dosa.jpg" alt="" /><br /><br />
                            <input id="name" type="text" name="" value="Dosa" /><br />
                            <input type="number" name="qunt" id="quantity" required placeholder="0" onInput={this.quantity_change} /><br />
                            <input type="text" id="price" placeholder="0" onInput={this.priceInput}/>
                        </div>

                        <div className="col-lg-6 col-xs-12 col-md-6">
                            <h1>Your Order Details...</h1>
                            <h2>Dish Discription</h2>
                            <p><br />Dosa :<br /><br />A very delicious south indian dish for breakfast<br />
                                Nutrients : Carbohydrates,Proteins,Little fat<br />
                                Ingredients : Rice,Potato,Cerel </p><br />
                            <span className="tot">Your Total :{this.state.total}</span><span id="total"></span>
                        </div>
                    </div>
                </div>

                <div className="container order_cont">
                    <div className="row">
                        <form action="submit" method="POST" className="col-lg-12">
                            <input type="text" placeholder="Name" name="name" required /><br />

                            <input type="text" name="contact" placeholder="Contact Number" required /><br />

                            <input type="email" placeholder="Email" name="Email" /><br />

                            <h2>Address for Delivery</h2><br />

                            <input type="text-area" name="textarea" placeholder="Address" className="address" required /><br />

                            <input type="text" name="city" placeholder="City" required /><br />

                            <input type="text-area" required name="landmark" placeholder="Landmark(e.g. near Hanuman temple....)" /><br />

                            <input type="text" placeholder="Apartment Name" name="apt_name" /><br />

                            <input type="text" placeholder="PinCode" required /><br />

                            <select name="Select mode of Pay" id="pay" required className="sl">
                                <option value="">Select Mode of Payment</option>
                                <option value="">Cash on Delivery</option>
                                <option value="">Google Pay</option>
                                <option value="">UPI Payment</option>
                                <option value="">Credit/Debit Card</option>
                            </select><br />

                            <button type="submit" className="btn btn-info submt" >Place Order</button>
                        </form>
                    </div>
                </div>

                <p className="hr"></p>
            </div>

        );
    }
}