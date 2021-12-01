import { Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setOnlineStatus } from "../../store/user/UserActions";
import { RouteGuard } from "../molecules/RouteGuard";
import Link from "next/link";

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
