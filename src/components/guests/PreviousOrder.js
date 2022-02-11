import { Button } from "@mui/material";
import { collection, doc, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { holdChangeCompleted, holdChangeProgress, selectChangeCompleted, selectChangeProgress } from "../../features/guestSlice";
import { db } from "../../firebase";
import ProcessModal from "./ProcessModal";
import SuccessModal from "./SuccessModal";

const PreviousOrder = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [id, setId] = useState(null);
    const progress = useSelector(selectChangeProgress);
    const complete = useSelector(selectChangeCompleted);
    const [orderCollection] = useCollection(query(collection(db, "orders")));
    const [selectFromDocument] = useDocument(id && doc(db, "orders", id));
    const inProgress = selectFromDocument?.data().process;
    const isCompleted = selectFromDocument?.data().complete;
    const theOrderNum = localStorage.getItem("previousNumber");
    const theOrderNumber = JSON.parse(theOrderNum)

    const toHome = () => {
        navigate("/");
        dispatch(holdChangeProgress({ changeProgress: false }));
        dispatch(holdChangeCompleted({ changeCompleted: false }));
    };

    useEffect(() => {
        orderCollection?.docs.forEach(doc => {
            if((doc.data().orderNum === theOrderNumber)) {
                setId(doc.id);
                console.log(true, id, inProgress, isCompleted);
            }
        })
    })

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
                        <h5>Name: { selectFromDocument?.data().email }</h5>
                        <h6>Table Number: { selectFromDocument?.data().table }</h6>
                        <h6>My Order Number: { selectFromDocument?.data().orderNum }</h6>
                        <p style= {{ color: "black", fontSize: "8px" }}>Note: USE ORDER NUMBER TO GET BACK TO THIS PAGE IF CLOSED</p>
                        <hr />
                        <p>{ selectFromDocument?.data().meals.map(meal => " | " + meal + " | ") }</p>
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
 
export default PreviousOrder;