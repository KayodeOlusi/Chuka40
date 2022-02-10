import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { holdEditId, holdShowEdit } from "../../features/catererSlice";

const SingleCont = ({ name, toppings, id }) => {
    const dispatch = useDispatch();

    const editMeal = () => {
        dispatch(holdShowEdit({
            editModal: true
        }));
        dispatch(holdEditId({
            editId: id
        }));
    }

    const deleteMeal  = (e) => {
        e.preventDefault();
        deleteDoc(doc(db, "nigerian", id));
    }

    return ( 
        <div className = "single-continental-food">
            <h5>{ name }</h5>
            <h6>{ toppings }</h6>
            <div>
                <Button className = "edit-btn" onClick = { editMeal }>Edit Meal</Button>
                <Button className = "delete-btn" onClick = { deleteMeal }>Delete Meal</Button>
            </div>
        </div>
     );
}
 
export default SingleCont;