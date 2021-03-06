import CheckBox from "./CheckBox";
import { db } from "../../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query } from "firebase/firestore";
import { Button, Skeleton } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { holdFoodTray } from "../../../features/guestSlice";
import { useNavigate } from "react-router-dom";

const Nigerian = () => {
    const q = query(collection(db, "nigerian"));
    const [nigerianDishes, loading] = useCollection(q);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const emptyTray = [];
    const [checkState, setCheckState] = useState(Array(nigerianDishes?.docs.length).fill(false));

    useEffect(() => {
        setCheckState(Array(nigerianDishes?.docs.length).fill(false))
    }, [nigerianDishes])

    const onCheckStateChange = (position) => {
        const updatedCheckState = checkState.map((value, index) => (
            index === position ? !value : value
        ));
        setCheckState(updatedCheckState);
    };

    const addToTray = () => {
        const trays = nigerianDishes?.docs.filter((_, index) => checkState[index])
        if(trays.length === 0) {
            return false
        }
        else {
            trays.forEach(tray => {
            emptyTray.push(tray.data().name);
        })
            dispatch(holdFoodTray({
                foodTray: [...emptyTray]
            }))
            localStorage.setItem("food", JSON.stringify(...emptyTray));
            navigate("/category/nigerian/order");   
        }
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
                <div className="meal-btn text-center bg-danger"> 
                <Button type = "submit" className = "meals-button">
                    Add to food tray
                </Button>
            </div>
            </div>
        )
    }
    
    return ( 
        <>
            <div className = "nigeria">
                <div className="container">
                    <div className="nigeria-header">
                        <h3>
                            Nigerian Delicacies
                        </h3>
                        <p>Please select a food from the menu</p>
                    </div>
                    <div className="nigerian-meals">
                        {
                            nigerianDishes?.docs.map((doc, index) => (
                                <CheckBox
                                    name = { doc.data().name }
                                    key = { doc.id }
                                    id = { doc.id }
                                    image = { doc.data().imageLink }
                                    status = { doc.data().status }
                                    toppings = { doc.data().toppings }
                                    onChange= {() => onCheckStateChange(index)}
                                    checked = { checkState[index] }
                                />
                            ))
                        } 
                    </div>
                    <div className="space"></div>
                </div>
            </div>
            <div className="meal-btn text-center bg-danger"> 
                <Button type = "submit" className = "meals-button" onClick = { addToTray }>
                    Add to food tray
                </Button>
            </div>
        </>
     );
}
 
export default Nigerian;