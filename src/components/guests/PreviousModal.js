import { Button } from "@mui/material";
import { collection, query } from "firebase/firestore";
import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { holdGuestNum, holdPrevious } from "../../features/guestSlice";
import { db } from "../../firebase";

const PreviousModal = () => {
    const [previousNum, setPreviousNum] = useState("");
    const [orderCollection] = useCollection(query(collection(db, "orders")));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const checkPrevious = () => {
        orderCollection?.docs.forEach(doc => {
            if (doc.data().orderNum === Number(previousNum)) {
                console.log(doc.data().orderNum)
                dispatch(holdGuestNum({
                    guestNum: previousNum
                }));
                dispatch(holdPrevious({
                    previous: false
                }));
                localStorage.setItem("previousNumber", previousNum);
                navigate("/previous");
            } else {
                dispatch(holdPrevious({
                    previous: false
                }));
            }
        });
    };
 
    return (  
        <div className="the-modal">
           <div className = "modal-container">
                <div className = "header">
                    <h3>Location</h3>
                    <p>Please enter the order number</p>
                </div>
                <div className="contents mt-3">
                  <form>
                      <input type="number" value = { previousNum } onChange={(e) => setPreviousNum(e.target.value)} placeholder = "Enter Order Number of Previous Order" className="mt-3 table-number" /> <br/>
                      <Button className="btn modal-button text-center" type = "submit" onClick = { checkPrevious }>
                        Check Now
                      </Button>
                  </form>
                </div>
            </div>
        </div>
    );
}
 
export default PreviousModal;