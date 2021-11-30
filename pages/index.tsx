import { Button, Typography } from "@mui/material";
import { NextPage } from "next"
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, selectUser } from "../redux/UserSlice";

const Home: NextPage = () => {

    const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const router = useRouter();

	const handleLogout = () => {
		dispatch(logoutUser());
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
