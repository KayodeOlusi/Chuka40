import { Button } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectTableNumber, selectFoodTray, selectGuestEmail } from "../../../features/guestSlice";
import { db } from "../../../firebase";

const Order = () => {
    const orderedFood = useSelector(selectFoodTray);
    const tableNumber = useSelector(selectTableNumber);
    const guestEmail = useSelector(selectGuestEmail)
    const navigate = useNavigate();

    const submitOrder = () => {
        addDoc(collection(db, "orders"), {
            table: tableNumber,
            email: guestEmail,
            meals: orderedFood
        })
        navigate("/category/nigerian/order/update");
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