import { Button } from "@mui/material";
import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import { holdOrderId, holdShowModal } from "../../features/catererSlice";
import { selectCatererModal } from "../../features/catererSlice";
import { selectCompleted } from "../../features/guestSlice";
import OrderModal from "./OrderModal";

const SingleOrder = ({ email, id, tableNumber, meals, timestamp }) => {
    const dispatch = useDispatch();
    const modal = useSelector(selectCatererModal);
    const isOrderCompleted = useSelector(selectCompleted)

    const holdTheOrderId = (e) => {
        e.preventDefault();
        dispatch(holdOrderId({
            orderId: id
        }))
        dispatch(holdShowModal({
            showOrderModal: true
        }))
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
                        <h6>{ moment(timestamp?.toDate()).calendar() }</h6>
                        { isOrderCompleted && <p>Completed</p> }
                    </div>
                    <Button className = "single-order-btn" onClick = { holdTheOrderId } >Check Order</Button>
                </div>
            </div>
        </>
     );
}
 
export default SingleOrder;