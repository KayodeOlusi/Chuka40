import { Button } from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectTableNumber, selectFoodTray, selectGuestEmail, holdGuestInit, holdGuestNum } from "../../../features/guestSlice";
import { db } from "../../../firebase";

const OrderNum = (min, max) => {
    const first = (max - min) + 1;
    const second = Math.random() * first;
    const result = Math.floor(second) + min;
    return result ;
}


const Order = () => {
    const orderedFood = useSelector(selectFoodTray);
    const tableNumber = useSelector(selectTableNumber);
    const guestEmail = useSelector(selectGuestEmail)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const myOrderNum = OrderNum(10000, 50000);

    const submitOrder = () => {
        addDoc(collection(db, "orders"), {
            table: tableNumber,
            email: guestEmail,
            meals: orderedFood,
            timestamp: serverTimestamp(),
            process: Boolean(false),
            complete: Boolean(false),
            completed: Boolean(false),
            orderNum: myOrderNum
        })
        navigate("/category/nigerian/order/update");
        dispatch(holdGuestInit({
            guestInit: guestEmail
        }));
        dispatch(holdGuestNum({
            guestNum: myOrderNum
        }));
        localStorage.setItem("orderNumber", myOrderNum);
    }

    return ( 
        <>
            <div className="order">
                <div className="container">
                    <div className="order-header">
                        <h3>
                            Food Tray
                        </h3>
                        <p>Please confirm food items on your food tray</p>
                    </div>
                    <div className="ordered-meals">
                        {
                            orderedFood.map((food, index) => (
                                <div 
                                    className = "ordered-food"
                                    key = { index }
                                >
                                    <h3>{ food }</h3>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="order-button text-center"> 
                <Button type = "submit" className = "order-btn" onClick = { submitOrder }>
                    Submit Order
                </Button>
            </div>
        </>
     );
}
 
export default Order;