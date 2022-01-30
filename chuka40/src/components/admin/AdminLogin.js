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
                alert("logged in");
                navigate("/admin/dashboard");
            }
        })
        .catch(e => alert(e))
    }

    return ( 
        <div className="admin-login">
            <div className="container">
                <div className="homepage text-center pt-5">
                    <img src="https://static.vecteezy.com/system/resources/previews/000/554/708/original/lock-vector-icon.jpg" alt = "admin" />
                </div>
                <div className="admin-login-text text-center pt-3">
                    <div className="header">
                        <h2 className = "text-white">Login as Admin</h2>
                    </div>
                </div>
                <form className = "text-center mt-5" onSubmit = { loginToDashboard }>
                    <input type="text" placeholder = "Email" className = "mb-5" value = { email } onChange = {e => setEmail(e.target.value)} /> <br />
                    <input type="password" placeholder = "Password" className = "mb-5" value = { password } onChange = {e => setPassword(e.target.value)} /> <br />
                    <Button type = "submit" className = "admin-btn">
                        Login
                    </Button>
                </form>
            </div>
        </div>
     );
}
 
export default AdminLogin;