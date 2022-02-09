import { Add, Home, Logout, PersonOutline } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAsAdmin } from "../../features/adminSlice";

const Bottomnav = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return ( 
        <div className="bottom-nav">
            <Button> <Home onClick = {() => navigate("/dashboard")} /> </Button>
            <Button> <Add onClick = {() => navigate("/create")} /> </Button>
            <Button> <PersonOutline onClick = {() => navigate("/profile")} /> </Button>
            <Button> <Logout onClick = {() => dispatch(logoutAsAdmin({ user: null }))} /> </Button>
        </div>
     );
}
 
export default Bottomnav;