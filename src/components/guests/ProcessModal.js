import { doc, updateDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { holdChangeProgress } from "../../features/guestSlice";
import { db } from "../../firebase";

const ProcessModal = ({ id }) => {
    const dispatch = useDispatch();

    const closeThisModal = () => {
        dispatch(holdChangeProgress({
            changeProgress: true
        }));
        updateDoc(doc(db, "orders", id), {
            process: Boolean(false)
        });
    } 

    return ( 
        <div className="process-modal">
            <div className="process-modal-container">
                <h3 className = "pt-3 pb-3 text-center">Your order is being prepared</h3>
                <div className="process-order-btn" onClick = { closeThisModal }>
                    Continue
                </div>
            </div>
        </div>
     );
}
 
export default ProcessModal;