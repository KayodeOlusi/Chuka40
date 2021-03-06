import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProcessModal from "../ProcessModal";
import SuccessModal from "../SuccessModal";
import { holdChangeCompleted, holdChangeProgress, selectChangeCompleted, selectChangeProgress } from "../../../features/guestSlice";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { collection, doc, query } from "firebase/firestore";
import { db } from "../../../firebase";
import { useEffect, useState } from "react";

const Update = () => {
    const navigate = useNavigate();
    const progress = useSelector(selectChangeProgress);
    const complete = useSelector(selectChangeCompleted);
    const name = localStorage.getItem("name");
    const table = localStorage.getItem("table"); 
    const foodItems = localStorage.getItem("food");
    const orderNumber = localStorage.getItem("orderNumber");
    const singleMeal = JSON.parse(foodItems);
    const [orderCollection] = useCollection(query(collection(db, "orders")));
    const [id, setId] = useState(null);
    const [selectFromDocument] = useDocument(id && doc(db, "orders", id));
    const inProgress = selectFromDocument?.data().process;
    const isCompleted = selectFromDocument?.data().complete;
    const dispatch = useDispatch();

    const toHome = () => {
        navigate("/");
        dispatch(holdChangeProgress({ changeProgress: false }));
        dispatch(holdChangeCompleted({ changeCompleted: false }));
    };

    useEffect(() => {
        orderCollection?.docs.forEach(doc => {
            if((doc.data().email === name) && (doc.data().table === table)) {
                setId(doc.id);
                console.log(true, id, inProgress, isCompleted);
            }
        })
        console.log(foodItems)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }); 

    return ( 
        <>
            {
                inProgress && <ProcessModal id = { id } />
            }
            {
                isCompleted && <SuccessModal id = { id } />
            }
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
                        <div className= {`in-progress ${ progress && "processing" }`}>
                            <h4>In Progress</h4>
                            <p>Your order is being prepared</p>
                        </div>
                        <div className= {`served ${ complete && "order-is-completed" }`}>
                            <h4>Served</h4>
                            <p>Enjoy your meal!</p>
                        </div>
                    </div>
                    <div className="my-order-details container">
                        <h5>Name: { name }</h5>
                        <h6>Table Number: { table }</h6>
                        <h6>My Order Number: { orderNumber }</h6>
                        <p style= {{ color: "black", fontSize: "8px" }}>Note: USE ORDER NUMBER TO GET BACK TO THIS PAGE IF CLOSED</p>
                        <hr />
                        <p>{ singleMeal }</p>
                    </div>
                </div>
            </div>
            <div className="my-order-space"></div>
            <div className="check-again text-center">
                <Button onClick = { toHome } className = "check-again-btn" >
                    Order Again 
                </Button>
            </div>
        </>
     );
}
 
export default Update;