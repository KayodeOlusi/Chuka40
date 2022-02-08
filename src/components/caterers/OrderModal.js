import { Cancel, CheckCircle } from "@mui/icons-material";
import { doc } from "firebase/firestore";
import moment from "moment";
import { useDocument } from "react-firebase-hooks/firestore";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { holdShowModal, selectOrderId } from "../../features/catererSlice";
import { holdInProgress } from "../../features/guestSlice";
import { db } from "../../firebase";

const OrderModal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const checkTheOrderId = useSelector(selectOrderId);
    const [checkOrderDetails] = useDocument(checkTheOrderId && doc(db, "orders", checkTheOrderId));

    const proceedToOrder = (e) => {
        e.preventDefault();
        navigate("/caterers/orders/details");
        dispatch(holdShowModal({
            showOrderModal: false
        }));
        dispatch(holdInProgress({
            inProgress: true
        }));
    }

    const cancelOrder = () => {
        dispatch(holdShowModal({
            showOrderModal: false
        }));
    }

    return ( 
        <div className="the-modal">
            <div className="modal-container">
                <div className="header">
                    <h3>Confirm Order</h3>
                    <p>Start Processing Order?</p>
                </div>
                <div className="contents">
                    <h6>Table : { checkOrderDetails?.data().table }</h6>
                    <h6>{  moment(checkOrderDetails?.data().timestamp?.toDate()).calendar() }</h6>
                </div>
                <div className="caterer-modal-btns mt-3">
                    <Cancel style = {{ color: "red" }} onClick = { cancelOrder } />
                    <CheckCircle style = {{ color: "green" }} onClick = { proceedToOrder } />
                </div>
            </div>
        </div>
     );
}
 
export default OrderModal;