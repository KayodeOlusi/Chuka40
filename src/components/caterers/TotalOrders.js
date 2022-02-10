import CatererNav from './CatererNav';
import { collection, orderBy } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import { Skeleton } from "@mui/material";
import SingleOrder from './SingleOrder';
import { useSelector } from 'react-redux';
import { selectDelete } from '../../features/catererSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TotalOrders = () => {
    const [totalOrders, loading] = useCollection(collection(db, "orders"), orderBy("timestamp", "desc"));
    const theIdDelete = useSelector(selectDelete);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(theIdDelete)
    }, [theIdDelete]);

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
        <div className="total-orders">
            <div className="container">
                <div className="header mt-3 mb-3">
                    <h4>My Orders</h4>
                </div>

                <div className="the-orders">
                    <div className = "order-cart">
                        <h5 className="all">All</h5>
                        <h5 onClick={() =>navigate("/caterers/completed")}>Completed</h5>
                    </div>
                    {
                        totalOrders?.docs.map(doc => (
                           <SingleOrder
                                email = { doc.data().email } 
                                tableNumber = { doc.data().table }
                                meals = { doc.data().meals }
                                key = { doc.id }
                                id = { doc.id }
                                timestamp = { doc.data().timestamp }
                                complete = { doc.data().complete }
                           />
                        ))
                    }
                </div>
            </div>
            <div className="add-space-to-order"></div>
            <CatererNav />
        </div>
     );
}
 
export default TotalOrders;