import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory, Link } from "react-router-dom";
import '../style.css'



const CheckOut = (props) => {
    const [cart, setCart] = useState([]);
    let history = useHistory()

    useEffect(() => {
        cartDB();
    }, [])

    const cartDB = () => {
        axios.get("http://localhost:8000/api/cart")
            .then(res => { setCart(res.data) })
            .catch(err => console.log(err))
    }
    const routeChange = () => {
        history.push('/');
    }

    const placeOrder = () => {
        for (const item of cart) {
            axios.delete("http://localhost:8000/api/cart/" + item._id)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => console.log(err))
            console.log("delete");
        }
        history.push('/thankyou');
    }





    return (
        <div>
            <div className="myheader">
                <h1 onClick={routeChange} className='pointer'> Gift Shop </h1>
                <Link to={`/cart`}>
                    <img src="data:image/png;base64,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" alt="" style={{ width: 50, marginBottom: 10 }} />
                </Link>
            </div>
            <div className="singleview">

                <div className="">
                    <h1>Checkout</h1>
                    {
                        cart.map((item, i) => {

                            return (
                                <div className="product" key={item._id} >
                                    <div>
                                        <h4> {item.title} </h4>
                                        {
                                            <img src={item.imageUrl} alt="" style={{ width: 300, borderRadius: 60 }} />
                                        }
                                        <h4>{item.description}</h4>
                                        <h4>quantity: {item.qty}
                                        </h4>
                                        <h5>Price: ${(item.price * item.qty).toFixed(2)} </h5>
                                    </div>
                                </div>
                            )
                        })

                    }
                    <h3>
                        Total: $
                        {cart.reduce((sum, i) => (
                            sum += i.qty * i.price
                        ), 0)}
                    </h3>
                    <button className="btn btn-2" onClick={placeOrder}>Place Order</button>
                </div>
            </div>
        </div >

    )
}


export default CheckOut;

