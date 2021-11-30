import { Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setOnlineStatus } from "../../redux/UserSlice";
import Redirect from "../molecules/Redirect";

const MainLayout: React.FC = (props) => {

    const dispatch = useDispatch();
    const [ alert, setAlert ] = useState(false);

    const handleOffline = () => {
        dispatch(setOnlineStatus(false));
        setAlert(true);
        setTimeout(() => setAlert(false), 2000);
    }

    useEffect(() => {
        addEventListener("offline", handleOffline);
        return () => removeEventListener("offline", handleOffline);
    }, []);
    
    return (
    <>
        <Redirect />
        {props.children}
        {alert && <Alert severity="info">User is offline</Alert>}
    </>);
}

export default MainLayout;
