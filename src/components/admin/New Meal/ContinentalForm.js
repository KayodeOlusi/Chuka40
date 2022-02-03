import { Button } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectAdmin } from "../../../features/adminSlice";
import { db } from "../../../firebase";
import { useSelector } from 'react-redux'

const NewContinental = () => {
    const [name, setName] = useState("");
    const [ingredient, setIngredient] = useState("");
    const [portion, setPortion] = useState("");
    const navigate = useNavigate();
    const user = useSelector(selectAdmin);

    const addMeal = () => {
        if(!(name && ingredient && portion)) {
            return false;
        }
        addDoc(collection(db, "continental"), {
            name: name,
            quantity: portion,
            toppings: ingredient
        });
        navigate("/dashboard");
        console.log("successful");
    }

    if(!user) {
        navigate("/admin");
    }

    return ( 
        <> 
            <div className="meal-form">
                <div className="container">
                    <div className="header pt-5">
                       <h5>New Food Item</h5> 
                       <p>Add a new food item</p>
                    </div>
                    <form className="mt-5">
                        <label htmlFor="name" className = "lead">Name of Food</label> <br/>
                        <input
                            type="text"
                            name="name"
                            id="name" 
                            placeholder="Name" 
                            value = { name } 
                            onChange = {e => setName(e.target.value)} 
                        /> <br/>
                        <label htmlFor="ingredients" className = "lead">Food Ingredients</label> <br/>
                        <input 
                            type="text" 
                            name="ingredients" 
                            id="indredients" 
                            placeholder="Seperate with a coma" 
                            onChange = {e => setIngredient(e.target.value)} 
                            value = { ingredient } 
                        /> <br/>
                        <label htmlFor="portions" className = "lead">Portions Available</label> <br/>
                        <input 
                            type = "number" 
                            name = "portions" 
                            id = "portions" 
                            placeholder = "Portions" 
                            onChange = {e => setPortion(e.target.value)} 
                            value = { portion } 
                        /> <br/>
                    </form>
                </div>
            </div>
            <div className="add-space"></div>
            <div className="create-meal-btn text-center bg-danger"> 
                <Button type = "submit" className = "create-meal-button" onClick = { addMeal }>
                    Create Item
                </Button>
            </div>
        </>
     );
}
 
export default NewContinental;