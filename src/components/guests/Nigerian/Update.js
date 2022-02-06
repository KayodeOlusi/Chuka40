import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCompleted, selectInProgress } from "../../../features/guestSlice";

const Update = () => {
    const navigate = useNavigate();
    const isInProgress = useSelector(selectInProgress);
    const isCompleted = useSelector(selectCompleted);

    const toHome = () => {
        navigate("/")
    }

    return ( 
        <>
            <div className="update">
                <div className="container">
                    <div className="update-header">
                        <h3>
                            Order Status
                        </h3>
                        <p>Stay on this page to monitor your order</p>
                    </div>

                    <div className="update-status">
                        <div className="successful">
                            <h4>Order Placed</h4>
                            <p>Order is placed successfully</p>
                        </div>
                        <div className= {`in-progress ${ isInProgress && "processing" }`}>
                            <h4>In Progress</h4>
                            <p>Your order is being prepared</p>
                        </div>
                        <div className= {`served ${ isCompleted && "order-is-completed" }`}>
                            <h4>Served</h4>
                            <p>Enjoy your meal!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="check-again text-center">
                <Button onClick = { toHome } className = "check-again-btn" >
                    Order Again
                </Button>
            </div>
        </>
     );
}
 
export default Update;