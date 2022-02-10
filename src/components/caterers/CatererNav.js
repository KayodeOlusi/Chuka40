import { AddShoppingCart, Home, Inventory, Logout } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../features/catererSlice";

const CatererNav = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return ( 
        <div className="bottom-nav">
            <Button> <Home onClick = {() => navigate("/caterers/dashboard")} /> </Button>
            <Button> <AddShoppingCart onClick = {() => navigate("/caterers/orders")} /> </Button>
            <Button> <Inventory onClick = {() => navigate("/caterers/store")} /> </Button>
            <Button> <Logout onClick = {() => dispatch(logOut({ catererDetails: null }))} /> </Button>
        </div>
     );
}
 
export default CatererNav;