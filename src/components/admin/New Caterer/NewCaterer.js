import { Button } from "@mui/material";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAdminModal, holdAdminModal, selectAssignedMeals } from "../../../features/adminSlice";
import { auth, db } from "../../../firebase";
import AdminModal from "../AdminModal";

const NewCaterer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const selectModal = useSelector(selectAdminModal);
    const selectMeals = useSelector(selectAssignedMeals)
    
    const showTheModal = () => {
        dispatch(holdAdminModal({
            showAdminModal: true
        }))
    }

    const addCaterer = () => {
        if(!(name && email && selectMeals && gender && number)) {
            return false;
        }
        else {
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {    
                const user = userCredential.user;
                const user_uid = user.uid;
                addDoc(collection(db, "users"), {
                    catererName: name,
                    catererEmail: email,
                    catererPassword: password,
                    mealsAssigned: selectMeals,
                    catererGender: gender,
                    catererNumber: number,
                    catererUid: user_uid
                })
                updateProfile(user, {
                    name: name,
                    email: email,
                    password: password,
                    mealsAssigned: selectMeals,
                    gender: gender,
                    number: number,
                    uid: user_uid
                })
                console.log("created");
            })
            .catch(e => alert(e));
            setName("");
            setEmail("");
            setGender("");
            setNumber("");
            navigate("/dashboard");
        }
    }

    return ( 
        <>
            {
                selectModal && <AdminModal />
            }
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
                            value = { selectMeals }
                            onClick = { showTheModal } 
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