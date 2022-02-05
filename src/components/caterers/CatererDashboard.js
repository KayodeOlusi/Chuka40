import { collection } from "firebase/firestore";
import { useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCaterer } from "../../features/catererSlice";
import { db } from "../../firebase";
import CatererNav from "./CatererNav";

const CatererDashboard = () => {
    const [totalOrders] = useCollection(collection(db, "orders"));
    const caterer = useSelector(selectCaterer);
    const navigate = useNavigate();

    useEffect(() => {
        if(!caterer) {
            navigate("/caterers");
        }  
    })
    

    return ( 
        <div className="admin-dashboard-panel">
            <div className="container">
                <div className="details row gy-2">
                    <div className="total-caterers col-6">
                        <div className="inner-total">
                            <h6>Total Orders</h6>
                            {
                                totalOrders ? <h2>{ totalOrders.docs.length }</h2> : <h2>0</h2>
                            }
                        </div>
                    </div>
                    <div className="food-category col-6">
                        <div className="inner-food">
                            <h6>Food Categories</h6>
                            <h2>2</h2>
                        </div>
                    </div>
                </div>
            </div>
            <CatererNav />
        </div>
     );
}
 
export default CatererDashboard;