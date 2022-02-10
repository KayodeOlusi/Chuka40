import { collection } from "firebase/firestore";
import { useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../../firebase";
import CatererNav from "./CatererNav";

const CatererDashboard = () => {
    const [totalOrders] = useCollection(collection(db, "orders"));
    const navigate = useNavigate();
    const [user] = useAuthState(auth)

    useEffect(() => {
        if(!user) {
            navigate("/caterers");
        } 
        console.log(user) 
    })
    

    return ( 
        <div className="admin-dashboard-panel">
            <div className="container">
                <div className="details row gy-2">
                    <div className="total-caterers col-6">
                        <div className="inner-total" onClick={() => navigate("/caterers/orders")}>
                            <h6>Total Orders</h6>
                            {
                                totalOrders ? <h2>{ totalOrders.docs.length }</h2> : <h2>0</h2>
                            }
                        </div>
                    </div>
                    <div className="food-category col-6">
                        <div className="inner-food" onClick={() => navigate("/caterers/store")}>
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