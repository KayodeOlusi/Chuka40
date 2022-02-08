import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
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

    return ( 
        <div className = "single-continental-food">
            <h5>{ name }</h5>
            <h6>{ toppings }</h6>
            <Button className = "edit-btn" onClick = { editMeal }>Edit Meal</Button>
        </div>
     );
}
 
export default SingleCont;