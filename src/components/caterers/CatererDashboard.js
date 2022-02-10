import { collection, doc } from "firebase/firestore";
import { useEffect } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCaterer } from "../../features/catererSlice";
import { db } from "../../firebase";
import CatererNav from "./CatererNav";
import { useState } from "react";

const CatererDashboard = () => {
    const [catererId, setCatererId] = useState(null);
    const [totalOrders] = useCollection(collection(db, "orders"));
    const [catererDetails] = useCollection(collection(db, "users"))
    const [selectCatererDoc] = useDocument(catererId && doc(db, "users", catererId));
    const assignedMeals = selectCatererDoc?.data().mealsAssigned;
    const caterer = useSelector(selectCaterer);
    const navigate = useNavigate();

    useEffect(() => {
        if(!caterer) {
            navigate("/caterers");
        }
        catererDetails?.docs.forEach(doc => {
            if(doc.data().catererEmail === caterer.email) {
                setCatererId(doc.id)
            }
        })  
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
                <div className="assigned-meals mt-5">
                    <h6>My Assigned Meals</h6>
                    <p>{ assignedMeals?.map(meal => " | " + meal + " | ")}</p>
                </div>
            </div>
            <CatererNav />
        </div>
     );
}
 
export default CatererDashboard;