import { Skeleton } from "@mui/material";
import { collection, orderBy } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import CatererNav from "./CatererNav";

const Completed = () => {
    const navigate = useNavigate();
    const [totalCompletedOrders, loading] = useCollection(collection(db, "completed"), orderBy("timestamp", "desc"));

    if(loading) {
        return (
            <div className = "loader">
                <div className = "container mt-3">
                    <Skeleton />
                    <Skeleton animation = "wave" />
                    <Skeleton animation = "wave" />
                    <Skeleton animation = "wave" />
                    <Skeleton animation = "wave" />
                </div>
                <div className = "container mt-3">
                    <Skeleton />
                    <Skeleton animation = "wave" />
                    <Skeleton animation = "wave" />
                    <Skeleton animation = "wave" />
                    <Skeleton animation = "wave" />
                </div>
                <div className = "container mt-3">
                    <Skeleton />
                    <Skeleton animation = "wave" />
                    <Skeleton animation = "wave" />
                    <Skeleton animation = "wave" />
                    <Skeleton animation = "wave" />
                </div>
                <div className="meal-btn text-center bg-danger"> 
                <CatererNav />
            </div>
            </div>
        )
    }

    return ( 
        <div className="completed">
            <div className="container">
                <div className="header pt-3 pb-3">
                    <h4>Completed Orders</h4>
                </div>
                <div className="the-link pb-3">
                    <h5 onClick = {() => navigate("/caterers/orders")}>All</h5>
                    <h5 className ="compl_ete">Completed</h5>
                </div>

                {
                    totalCompletedOrders?.docs.map((doc) => (
                        <div className="the-completed mt-3" key = { doc.id }>
                            <h5>Table Number: { doc.data().table }</h5>
                            <h6>Name: { doc.data().email }</h6>
                            <hr />
                            <h5>Order Items</h5>
                            {
                                doc.data().meals.map((meal, index) => (
                                    <h6 key = { index }>{ meal }</h6>
                                ))
                            }
                        </div>
                    ))
                } 
            <div className="completed-space"></div>  
            </div>
            <CatererNav />
        </div>
     );
}
 
export default Completed;