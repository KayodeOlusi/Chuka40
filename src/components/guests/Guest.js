import Image1 from "../../assets/Image1.jpeg";
import { Button } from "@mui/material";
import GuestModal from "./GuestModal";
import { useDispatch, useSelector } from "react-redux";
import { holdModalState, selectModalState } from "../../features/guestSlice";

const Guest = () => {
    const modal = useSelector(selectModalState);
    const dispatch = useDispatch();

    const showTheModal = () => {
        dispatch(holdModalState({
            modalState: true
        }))
    }

    return ( 
        <>
            { modal && <GuestModal /> }
            <div className = "guest">
                <div className="home d-flex justify-content-center align-items-center">
                    <div className="row container">
                        <div className="col-lg-6 col-md-12 col-sm-12 text-center">
                            <img src = { Image1 } alt = "Welcome" className="img-thumbnail" />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 text-center mt-3">
                            <h2 className="text-white">Welcome to Chuka</h2>
                            <h2 className="text-white">@Big 40!</h2>
                            <p className="mt-3">We hope you have an amazing time today</p>
                            <div className="homepage-btn mt-4">
                                <Button className="btn homepage-button" onClick = { showTheModal }>
                                    Enter Table Number
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
         );
    }
 
export default Guest;