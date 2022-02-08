import { Button, Skeleton } from "@mui/material";
import { collection, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { useDispatch } from "react-redux";
import { holdAdminModal, holdAssignedMeals } from "../../features/adminSlice";
import { db } from "../../firebase";
import AdminModalOptions from "./AdminModalOptions";

const AdminModal = () => {
    const q = query(collection(db, "nigerian"));
    const emptyMeals = [];
    const dispatch = useDispatch()
    const [nigerianDishes, loading] = useCollection(q);
    const [checkState, setCheckState] = useState(Array(nigerianDishes?.docs.length).fill(false));

    useEffect(() => {
        setCheckState(Array(nigerianDishes?.docs.length).fill(false))
    }, [nigerianDishes])

    const onCheckStateChange = (position) => {
        const updatedCheckState = checkState.map((value, index) => (
            index === position ? !value : value
        ))
        setCheckState(updatedCheckState)
    };

    const addToMeals = () => {
        const meals = nigerianDishes?.docs.filter((_, index) => checkState[index])
        meals.forEach(meal => {
            emptyMeals.push(meal.data().name)
        })
        dispatch(holdAssignedMeals({
            assignedMeals: [...emptyMeals]
        }));
        dispatch(holdAdminModal({
            showAdminModal: false
        }));
    }; 

    if(loading) {
        return (
            <div className = "loader">
                <div className = "container mt-3">
                    <Skeleton />
                    <Skeleton animation = "wave" />
                    <Skeleton animation = "wave" />
                    <Skeleton animation = "wave" />
                    <Skeleton animation = "wave" />
                </div>
                <div className = "container mt-3">
                    <Skeleton />
                    <Skeleton animation = "wave" />
                    <Skeleton animation = "wave" />
                    <Skeleton animation = "wave" />
                    <Skeleton animation = "wave" />
                </div>
                <div className = "container mt-3">
                    <Skeleton />
                    <Skeleton animation = "wave" />
                    <Skeleton animation = "wave" />
                    <Skeleton animation = "wave" />
                    <Skeleton animation = "wave" />
                </div>
            </div>
        )
    }

    return ( 
        <div className="admin-modal">
           <div className = "admin-modal-container">
                <div className="header pt-3">
                    <h5>Pick Assigned Meals</h5>
                </div>
                {
                    nigerianDishes?.docs.map((doc, index) => (
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