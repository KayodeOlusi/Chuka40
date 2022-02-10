import { Button, Skeleton } from "@mui/material";
import { collection, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { holdFoodTray } from "../../../features/guestSlice";
import { db } from "../../../firebase";
import CheckBox from "../Nigerian/CheckBox";

const Continental = () => {
    const q = query(collection(db, "continental"));
    const [continentalDishes, loading] = useCollection(q);
    const emptyTray = [];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [checkState, setCheckState] = useState(Array(continentalDishes?.docs.length).fill(false));

    useEffect(() => {
        setCheckState(Array(continentalDishes?.docs.length).fill(false))
    }, [continentalDishes])

    const onCheckStateChange = (position) => {
        const updatedCheckState = checkState.map((value, index) => (
            index === position ? !value : value
        ))
        setCheckState(updatedCheckState)
    };
    
    const addToTray = () => {
        const trays = continentalDishes?.docs.filter((_, index) => checkState[index])
        if (trays.length === 0) {
            return false;
        } else {
            trays.forEach(tray => {
                emptyTray.push(tray.data().name)
            })
            dispatch(holdFoodTray({
                foodTray: [...emptyTray]
            }))
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
                <div className="cont-meal-btn text-center bg-danger"> 
                    <Button type = "submit" className = "cont-meals-button">
                        Add to food tray
                    </Button>
                </div>
            </div>
        )
    }

    return ( 
            <>
                <div className="continentals">
                    <div className="container">
                        <div className="continentals-header">
                            <h3>
                                Continental Delicacies
                            </h3>
                            <p>Please select a food from the menu</p>
                        </div>
                        <div className="continental-meals">
                            {
                                continentalDishes?.docs.map((doc, index) => (
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
                <div className="cont-meal-btn text-center bg-danger"> 
                    <Button type = "submit" className = "cont-meals-button" onClick = { addToTray }>
                        Add to food tray
                    </Button>
                </div>
            </>
     );
}
 
export default Continental;