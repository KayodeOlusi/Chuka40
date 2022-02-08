import { useDispatch } from "react-redux";
import { holdChangeCompleted, holdCompleted } from "../../features/guestSlice";

const SuccessModal = () => {
    const dispatch = useDispatch();

    const closeThisModal = () => {
        dispatch(holdCompleted({
            completed: false
        }));
        dispatch(holdChangeCompleted({
            changeCompleted: true
        }));
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