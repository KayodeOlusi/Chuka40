import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectOrderId } from "../../features/catererSlice";
import CatererNav from "./CatererNav";

const OrderDetails = () => {
    const theState = useSelector(selectOrderId)

    useEffect(() => {
        console.log(theState)
    })

    return ( 
        <div className="order-details">
            <h2>hey</h2>

            <CatererNav />
        </div>
     );
}
 
export default OrderDetails;