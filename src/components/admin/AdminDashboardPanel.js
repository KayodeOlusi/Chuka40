import { collection, query } from "firebase/firestore";
import { useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAdmin } from "../../features/adminSlice";
import { db } from "../../firebase";
import Bottomnav from "./Bottomnav";

const AdminDashboardPanel = () => {
    const navigate = useNavigate();
    const [totalOrders] = useCollection(query(collection(db, "orders")));
    const [totalNigerianFood] = useCollection(query(collection(db, "nigerian")));
    const [totalContinentalFood] = useCollection(query(collection(db, "continental")));

    const user = useSelector(selectAdmin);
    useEffect(() => {
        if(!user) {
            navigate("/admin");
        }
    });
    
    return ( 
        <div className="admin-dashboard-panel">
            <div className="container">
                <div className="details row gy-2">
                    <div className="total-caterers col-6">
                        <div className="inner-total">
                            <h6>Total Caterers</h6>
                            <h2>12</h2>
                        </div>
                    </div>
                    <div className="food-category col-6">
                        <div className="inner-food">
                            <h6>Food Categories</h6>
                            <h2>2</h2>
                        </div>
                    </div>
                </div>
                <div className="details row">
                    <div className="food-menu-items col-6">
                        <div className="inner-menu">
                            <h6>Food Menu Items</h6>
                            {
                                totalNigerianFood && totalContinentalFood ? <h2>{ totalNigerianFood.docs.length + totalContinentalFood.docs.length }</h2> : <h2>0</h2>
                            }
                        </div>
                    </div>
                    <div className="total-orders col-6">
                        <div className="inner-order">
                            <h6>Total Orders</h6>
                            {
                                totalOrders ? <h2>{ totalOrders?.docs.length }</h2> : <h2>0</h2>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Bottomnav />
        </div>
     );
}
 
export default AdminDashboardPanel;