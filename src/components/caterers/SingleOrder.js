import { Button } from "@mui/material";
import moment from 'moment';
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SingleOrder = ({ email, id, tableNumber, meals, timestamp }) => {
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const holdTheOrderId = (e) => {
        e.preventDefault();
        if(id) {
            console.log(id)
            navigate("/caterers/orders/details")
        }
        // dispatch()
    }

    return ( 
        <div className="single-order">
            <div className="container">
                <div className="header pb-3">
                    <h5>Table { tableNumber }</h5>
                    <h6>{ moment(timestamp?.toDate()).calendar() }</h6>
                    <h6>Available</h6>
                </div>
                <Button className = "single-order-btn" onClick = { holdTheOrderId } >Check Order</Button>
            </div>
        </div>
     );
}
 
export default SingleOrder;