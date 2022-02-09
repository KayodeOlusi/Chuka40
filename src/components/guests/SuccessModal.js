import { doc, updateDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { holdChangeCompleted } from "../../features/guestSlice";
import { db } from "../../firebase";

const SuccessModal = ({ id }) => {
    const dispatch = useDispatch();

    const closeThisModal = () => {
        dispatch(holdChangeCompleted({
            changeCompleted: true
        }));
        updateDoc(doc(db, "orders", id), {
            complete: Boolean(false)
        });
    } 

    return ( 
        <div className="success-modal">
            <div className="success-modal-container">
                <h3 className="pt-3 pb-3 text-center">Your order has been completed</h3>
                <div className="success-order-btn" onClick = { closeThisModal }>
                   Continue
                </div>
            </div>
        </div>
     );
}
 
export default SuccessModal;