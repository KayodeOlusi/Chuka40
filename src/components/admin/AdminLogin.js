import { Button } from "@mui/material";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "@firebase/auth"
import { useDispatch } from "react-redux";
import { loginAsAdmin } from "../../features/adminSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const navigate = useNavigate();
    const [invalid, setInvalid] = useState(false)

    const loginToDashboard = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            if(user.email !== "admin.chuka40@app.com" && user.password !== "admin123") {
                alert("not an admin")
            }else {
                dispatch(loginAsAdmin({
                    email: user.email,
                    password: user.password
                }))
                navigate("/dashboard");
            }
        })
        .catch(setInvalid(true))
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
                            <h2 className = "text-white">Login as Admin</h2>
                            { invalid && <p style = {{ color: "red", fontSize: "12px" }}>Invalid Email or Password</p> }  
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
 
export default AdminLogin;