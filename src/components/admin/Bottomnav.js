import { Add, Home, PersonOutline } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Bottomnav = () => {
    const navigate = useNavigate();

    return ( 
        <div className="bottom-nav">
            <Button> <Home onClick = {() => navigate("/dashboard")} /> </Button>
            <Button> <Add onClick = {() => navigate("/create")} /> </Button>
            <Button> <PersonOutline /> </Button>
        </div>
     );
}
 
export default Bottomnav;