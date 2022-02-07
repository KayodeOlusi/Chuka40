import { Button } from "@mui/material";
import { addDoc, collection, doc } from "firebase/firestore";
import moment from "moment";
import { useDocument } from "react-firebase-hooks/firestore";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectOrderId } from "../../features/catererSlice";
import { holdCompleted, selectCompleted } from "../../features/guestSlice";
import { db } from "../../firebase";
import CatererNav from "./CatererNav";

const OrderDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const checkTheOrderId = useSelector(selectOrderId);
    const isOrderCompleted = useSelector(selectCompleted);
    const [checkOrderDetails] = useDocument(checkTheOrderId && doc(db, "orders", checkTheOrderId));
    const theTable = checkOrderDetails?.data().table;
    const theTime = checkOrderDetails?.data().timestamp;
    const theMeals = checkOrderDetails?.data().meals;
    const theEmail = checkOrderDetails?.data().email;

    const completeTheOrder = () => {
        dispatch(holdCompleted({
            completed: true
        }));
        addDoc(collection(db, "completed"), {
            table: theTable,
            email: theEmail,
            time: theTime,
            meals: theMeals
        });
        navigate("/caterers/orders");
    };

    return ( 
        <div className="order-details">
            <div className="container">
                <div className="header pt-4">
                    <h4>Order Details</h4>  
                </div>
                    <div className="contents">
                        <h5>Location</h5>
                        <h6>{ checkOrderDetails?.data().email }</h6>
                        <h6>Table No : { checkOrderDetails?.data().table }</h6>
                        <h6>Time of Order : { moment(checkOrderDetails?.data().timestamp?.toDate()).calendar() }</h6>
                        <hr />
                        <h5>Order Items</h5>
                        {
                            checkOrderDetails?.data().meals.map((meal, index) => (
                                <h6 key = { index }>{ meal }</h6>
                            ))
                        }
                        { isOrderCompleted && <p>Completed Successfully</p> }
                    </div>
            </div>
            <div className="complete-order-btn">
                <Button className = "complete-order" onClick = { completeTheOrder }>Complete Order</Button>
            </div>
            <CatererNav />
        </div>
     );
}
 
export default OrderDetails;