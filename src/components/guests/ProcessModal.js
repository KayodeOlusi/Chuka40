import { useDispatch } from "react-redux";
import { holdChangeProgress, holdInProgress } from "../../features/guestSlice";

const ProcessModal = () => {
    const dispatch = useDispatch();

    const closeThisModal = () => {
        dispatch(holdInProgress({
            inProgress: false
        }));
        dispatch(holdChangeProgress({
            changeProgress: true
        }));
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