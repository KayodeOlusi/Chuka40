import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { holdModalState, holdTableNumber } from "../../features/guestSlice";

const GuestModal = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addTableNumber = (e) => {
      e.preventDefault();

      if(!input) {
        return false;
      };
      dispatch(holdTableNumber({
        tableNumber: input
      }));
      setInput("");
      dispatch(holdModalState({
        modalState: false
      }))
      navigate("/category");
    }

    return ( 
        <div className="the-modal">
           <div className = "modal-container">
                <div className = "header">
                    <h3>Location</h3>
                    <p>Please enter your table number to continue</p>
                </div>
                <div className="contents mt-3">
                  <form onClick = { addTableNumber }>
                      <h6>Table Number</h6>
                      <input type="number" value = { input } onChange={(e) => setInput(e.target.value)} placeholder = "Table Number..." /> <br/>
                      <Button className="btn modal-button text-center" type = "submit">
                        Proceed
                      </Button>
                  </form>
                </div>
            </div>
        </div>
     );
}
 
export default GuestModal;