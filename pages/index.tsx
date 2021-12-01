import { Button, Typography } from "@mui/material";
import { NextPage } from "next"
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/user/UserActions";


const Home: NextPage = () => {

    const user = useSelector((state: any) => state.user);
	const dispatch = useDispatch();
	const router = useRouter();

	const handleLogout = () => {
		dispatch(logoutUser());
		router.push("/login");
	}

    return (
        <div>
			<Button 
				variant="contained"
				onClick={handleLogout}
				>
				Logout
			</Button>
            <Typography>
                Username: {user.username}
            </Typography>
            
            <Typography>
                Email: {user.email}
            </Typography>

            <Typography>
                Online: {user.isOnline ? "online" : "offline"}
            </Typography>
        </div>
    )
}

export default Home
