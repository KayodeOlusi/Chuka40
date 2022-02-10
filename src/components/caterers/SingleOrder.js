import { Button } from "@mui/material";
import { deleteDoc, doc } from "firebase/firestore";
import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import { holdOrderId, holdShowModal } from "../../features/catererSlice";
import { selectCatererModal } from "../../features/catererSlice";
import { db } from "../../firebase";
import OrderModal from "./OrderModal";

const SingleOrder = ({ id, tableNumber, meals, timestamp, completed }) => {
    const dispatch = useDispatch();
    const modal = useSelector(selectCatererModal);

    const holdTheOrderId = (e) => {
        e.preventDefault();
        dispatch(holdOrderId({
            orderId: id
        }));
        dispatch(holdShowModal({
            showOrderModal: true
        }));
    };

    const deleteOrder = () => {
        deleteDoc(doc(db, "orders", id));
    }

    return ( 
        <>
            { 
                modal && <OrderModal />
            }
            <div className="single-order">
                <div className="container">
                    <div className="header pb-3">
                        <h5>Table { tableNumber }</h5>
                        <h6>{ meals.length } food items</h6>
                        <h6>{ moment(timestamp?.toDate()).calendar() }</h6>
                        { completed && <p className = "complete">Order Completed</p> }
                    </div>
                    <div className = "the-seperate">
                        <Button className = "single-order-btn" onClick = { holdTheOrderId } >Check Order</Button>
                        <Button className = "delete-order-btn" onClick = { deleteOrder } >Remove</Button>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default SingleOrder;