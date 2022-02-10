import { Cancel, CheckCircle } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { holdShowEdit, selectEditId } from "../../features/catererSlice";
import { doc, updateDoc } from "firebase/firestore"; 
import { db } from "../../firebase";

const EditModal = () => {
    const [available, setAvailable] = useState("");
    const dispatch = useDispatch();
    const theEditedId = useSelector(selectEditId);

    useState(() => {
        console.log(theEditedId)
    }, []);
    
    const cancelEdit = () => {
        dispatch(holdShowEdit({
            editModal: false
        }))
    };

    const confirmEdit = () => {
        updateDoc(doc(db, "nigerian", theEditedId), {
            status: available
        });
        dispatch(holdShowEdit({
            editModal: false
        }))
    }

    return ( 
        <div className="edited-modal">
            <div className="edited-modal-container">
                <form className="mt-5">
                        <label htmlFor="available" className = "lead">Status</label> <br/>
                        <input 
                            type = "text" 
                            name = "available" 
                            id = "available" 
                            placeholder = "Available or Not Available" 
                            onChange = {e => setAvailable(e.target.value)} 
                            value = { available } 
                        /> <br/>
                </form>
                <div className="edit-modal-btns mt-3">
                    <Cancel style = {{ color: "red" }} onClick = { cancelEdit } />
                    <CheckCircle style = {{ color: "green" }} onClick = { confirmEdit } />
                </div>
            </div>
        </div>
     );
}
 
export default EditModal;