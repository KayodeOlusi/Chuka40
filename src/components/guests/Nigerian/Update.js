import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProcessModal from "../ProcessModal";
import SuccessModal from "../SuccessModal";
import { holdChangeCompleted, holdChangeProgress, selectChangeCompleted, selectChangeProgress, selectGuestInit } from "../../../features/guestSlice";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { collection, doc, query } from "firebase/firestore";
import { db } from "../../../firebase";
import { useEffect, useState } from "react";

const Update = () => {
    const navigate = useNavigate();
    const progress = useSelector(selectChangeProgress);
    const complete = useSelector(selectChangeCompleted);
    const selectGuest = useSelector(selectGuestInit);
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
            if(doc.data().email === selectGuest) {
                setId(doc.id);
                console.log(true, id, inProgress, isCompleted);
            }
        })
        //eslint-disable-next-line react-hooks/exhaustive-deps
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
                </div>
            </div>
            <div className="check-again text-center">
                <Button onClick = { toHome } className = "check-again-btn" >
                    Order Again
                </Button>
            </div>
        </>
     );
}
 
export default Update;