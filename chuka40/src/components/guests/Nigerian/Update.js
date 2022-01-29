import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Update = () => {
    const navigate = useNavigate();

    const toHome = () => {
        navigate("/")
    }

    return ( 
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
                    <div className="in-progress">
                        <h4>In Progress</h4>
                        <p>Your order is being prepared</p>
                    </div>
                    <div className="served">
                        <h4>Served</h4>
                        <p>Enjoy your meal!</p>
                    </div>
                </div>

                <div className="order-again text-center">
                    <Button onClick = { toHome } className = "order-again-btn" >
                        Order Again
                    </Button>
                </div>
            </div>
        </div>
     );
}
 
export default Update;