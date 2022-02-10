import { Button } from "@mui/material";
import { collection, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { useDispatch } from "react-redux";
import { holdAdminModal, holdAssignedMeals } from "../../features/adminSlice";
import { db } from "../../firebase";
import AdminModalOptions from "./AdminModalOptions";

const AdminModal = () => {
    const emptyMeals = [];
    const q = query(collection(db, "all"));
    const dispatch = useDispatch();
    const [allDishes] = useCollection(q);
    const [checkState, setCheckState] = useState(Array(allDishes?.docs.length).fill(false));

    useEffect(() => {
        setCheckState(Array(allDishes?.docs.length).fill(false))
    }, [allDishes])

    const onCheckStateChange = (position) => {
        const updatedCheckState = checkState.map((value, index) => (
            index === position ? !value : value
        ))
        setCheckState(updatedCheckState)
    };

    const addToMeals = () => {
        const meals = allDishes?.docs.filter((_, index) => checkState[index])
        meals.forEach(meal => {
            emptyMeals.push(meal.data().name);
        })
        dispatch(holdAssignedMeals({
            assignedMeals: [...emptyMeals]
        }));
        dispatch(holdAdminModal({
            showAdminModal: false
        }));
    }; 


    return ( 
        <div className="admin-modal">
           <div className = "admin-modal-container">
                <div className="header pt-3">
                    <h5>Pick Assigned Meals</h5>
                </div>
                {
                    allDishes?.docs.map((doc, index) => (
                        <AdminModalOptions
                            name = { doc.data().name }
                            key = { doc.id }
                            id = { doc.id }
                            onChange= {() => onCheckStateChange(index)}
                            checked = { checkState[index] }
                        />
                    ))
                }
                <div className="admin-modal-btns">
                    <Button className="admin-modal-single-btn" onClick = { addToMeals } >Continue</Button>    
                </div> 
            </div>
        </div>
     );
}
 
export default AdminModal;
