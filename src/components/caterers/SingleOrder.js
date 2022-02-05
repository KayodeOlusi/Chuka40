import { Button } from "@mui/material";
import moment from 'moment';

const SingleOrder = ({ email, id, tableNumber, meals, timestamp }) => {
    return ( 
        <div className="single-order">
            <div className="container">
                <div className="header pb-3">
                    <h5>Table { tableNumber }</h5>
                    <h6>{ moment(timestamp?.toDate()).calendar() }</h6>
                    <h6>{ meals.length } food items</h6>
                </div>
                <Button className = "single-order-btn" >Check Order</Button>
            </div>
        </div>
     );
}
 
export default SingleOrder;