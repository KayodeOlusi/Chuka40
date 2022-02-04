import { Button } from "@mui/material";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../firebase";

const NewCaterer = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [meals, setMeals] = useState("");
    const [gender, setGender] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    

    const addCaterer = () => {
        if(!(name && email && meals && gender && number)) {
            return false;
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {    
            const user = userCredential.user;
            const user_uid = user.uid;
            addDoc(collection(db, "users"), {
                catererName: name,
                catererEmail: email,
                catererPassword: password,
                mealsAssigned: meals,
                catererGender: gender,
                catererNumber: number,
                catererUid: user_uid
            })
            updateProfile(user, {
                name: name,
                email: email,
                password: password,
                mealsAssigned: meals,
                gender: gender,
                number: number,
                uid: user_uid
            })
            console.log("created");
        })
        .catch(e => alert(e));
        setName("");
        setEmail("");
        setMeals("");
        setGender("");
        setNumber("");
        navigate("/dashboard");
    }

    return ( 
        <>
            <div className="new-caterer">
                <div className="container">
                    <div className="header pt-3">
                        <h5>Create Caterer</h5>
                    </div>
                    <form>
                    <label htmlFor="name" className = "lead">Full Name</label> <br/>
                        <input
                            type="text"
                            name="name"
                            id="name" 
                            placeholder="Name" 
                            value = { name } 
                            onChange = {e => setName(e.target.value)} 
                        /> <br/>
                        <label htmlFor="email" className = "lead">Email</label> <br/>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Email" 
                            onChange = {e => setEmail(e.target.value)} 
                            value = { email } 
                        /> <br/>
                        <label htmlFor="password" className = "lead">Password</label> <br/>
                        <input 
                            type="text" 
                            name="password" 
                            id="password" 
                            placeholder="Password" 
                            onChange = {e => setPassword(e.target.value)} 
                            value = { password } 
                        /> <br/>
                        <label htmlFor="meals" className = "lead">Assign Meals</label> <br/>
                        <input 
                            type = "text" 
                            name = "meals" 
                            id = "meals" 
                            placeholder = "Seperate with a coma" 
                            onChange = {e => setMeals(e.target.value)} 
                            value = { meals } 
                        /> <br/>
                        <label htmlFor="gender" className = "lead">Gender</label> <br/>
                        <input 
                            type = "text" 
                            name = "gender" 
                            id = "gender" 
                            placeholder = "Gender" 
                            onChange = {e => setGender(e.target.value)} 
                            value = { gender } 
                        /> <br/>
                        <label htmlFor="number" className = "lead">Mobile Number</label> <br/>
                        <input 
                            type = "number" 
                            name = "number" 
                            id = "number" 
                            placeholder = "Mobile Number" 
                            onChange = {e => setNumber(e.target.value)} 
                            value = { number } 
                        /> <br/>
                    </form>
                </div>
            </div>
            <div className="add-space"></div>
            <div className="create-caterer-btn text-center bg-danger"> 
                <Button type = "submit" className = "create-caterer-button" onClick = { addCaterer }>
                    Create Caterer
                </Button>
            </div>
        </>
     );
}
 
export default NewCaterer;