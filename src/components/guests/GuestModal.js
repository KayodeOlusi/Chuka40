import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { holdGuestEmail, holdModalState, holdTableNumber } from "../../features/guestSlice";

const GuestModal = () => {
    const [input, setInput] = useState("");
    const [username, setUsername] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addTableNumber = (e) => {
      e.preventDefault();

      if(!input || !username || !(input && username)) {
        return false;
      };
      dispatch(holdTableNumber({
        tableNumber: input
      }));
      dispatch(holdModalState({
        modalState: false
      }));
      dispatch(holdGuestEmail({
        guestEmail: username
      }));
      setUsername("");
      setInput("");
      navigate("/category");
      localStorage.setItem("name", username);
      localStorage.setItem("table", input);
    }

    return ( 
        <div className="the-modal">
           <div className = "modal-container">
                <div className = "header">
                    <h3>Location</h3>
                    <p>Please enter your email address and table number to continue</p>
                </div>
                <div className="contents mt-3">
                  <form onClick = { addTableNumber }>
                      <input type="text" value = { username } onChange={(e) => setUsername(e.target.value)} placeholder = "Name or Email Address..." />
                      <input type="number" value = { input } onChange={(e) => setInput(e.target.value)} placeholder = "Table Number..." className="mt-3 table-number" /> <br/>
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