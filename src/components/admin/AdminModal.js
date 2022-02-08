import { Button, Skeleton } from "@mui/material";
import { collection, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import AdminModalOptions from "./AdminModalOptions";

const AdminModal = () => {
    const q = query(collection(db, "nigerian"));
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
                    <Button className="admin-modal-single-btn">Continue</Button>    
                </div> 
            </div>
        </div>
     );
}
 
export default AdminModal;