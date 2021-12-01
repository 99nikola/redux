import { Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setOnlineStatus } from "../../redux/UserSlice";
import Redirect from "../molecules/Redirect";
import Link from "next/link";
import { RouteGuard } from "../molecules/RouteGuard";

const MainLayout: React.FC = (props) => {

    const dispatch = useDispatch();
    const [ alert, setAlert ] = useState(false);
    const user = useSelector(selectUser);

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
    <RouteGuard>
        <Link href="/">
            <a>HOME</a>
        </Link>
        <Link href="/login">
            <a>LOGIN</a>
        </Link>

        {props.children}
        {alert && <Alert severity="info">User is offline</Alert>}
    </RouteGuard>);
}

export default MainLayout;
