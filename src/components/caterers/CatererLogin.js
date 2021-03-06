import { Button } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { holdCatererDetails } from "../../features/catererSlice";
import { auth } from "../../firebase";

const CatererLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginToDashboard = (e) => {
        e.preventDefault();
        if(!(email && password)) {
            return false;
        }
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            if(user.email === "admin.chuka40@app.com" && user.password === "admin123") {
                console.log("not a caterer");
            }
            else {
                dispatch(holdCatererDetails({
                    email: user.email,
                    password: user.password
                }))
                navigate("/caterers/dashboard");
            }
        })
        .catch(e => console.log(e))
    } 

    return ( 
        <>
            <div className="admin-login">
                <div className="homepage d-flex justify-content-center align-items-center">
                    <div className="row container">
                        <div className="text-center col-lg-6 col-md-12 col-sm-12">
                            <img src="https://static.vecteezy.com/system/resources/previews/000/554/708/original/lock-vector-icon.jpg" alt = "admin" />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 admin-login-details text-center mt-3">
                            <h4 className = "text-white">Login as Caterer</h4>
                            <form className = "text-center" onSubmit = { loginToDashboard }>
                                <input type="text" placeholder = "Email" className = "" value = { email } onChange = {e => setEmail(e.target.value)} />
                                <input type="password" placeholder = "Password" className = "mt-3" value = { password } onChange = {e => setPassword(e.target.value)} /> <br />
                                <Button type = "submit" className = "admin-btn mt-3">
                                    Login
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default CatererLogin;