import { Button } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { holdGuestEmail, holdModalState, holdTableNumber, selectModalState } from "../../features/guestSlice";

const GuestModal = () => {
    const [input, setInput] = useState("");
    const ref = useRef(); 
    const [username, setUsername] = useState("");
    const theModalState = useSelector(selectModalState); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      const checkClicked = (e) => {
        if(theModalState && ref.current && !ref.current.contains(e.target)) {
          dispatch(holdModalState({
            modalState: false
          }));
        }
      }
      document.addEventListener("click", checkClicked);
      return () => {
        document.removeEventListener("click", checkClicked);  
      }
      //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theModalState])

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
           <div className = "modal-container" ref = { ref }>
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