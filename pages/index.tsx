import { Button, Typography } from "@mui/material";
import { NextPage } from "next"
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../store/product/ProductActions";
import { logoutUser } from "../store/user/UserActions";


const Home: NextPage = () => {

    const user = useSelector((state: any) => state.user);
    const product = useSelector((state: any) => state.product);
	const dispatch = useDispatch();
	const router = useRouter();

	const handleLogout = () => {
		dispatch(logoutUser());
		router.push("/login");
	}

    const handleLoadProduct = () => {
        dispatch(setProduct({
            name: "Product Name",
            price: 99.99
        }));
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
                <br />

                Email: {user.email}
                <br />

                Online: {user.isOnline ? "online" : "offline"}
                <br />
            </Typography>

            <Button onClick={handleLoadProduct} variant="contained">
                Change initial Product
            </Button>

            <Typography>
                Product: {product.name}
                <br />

                Price: {product.price}
                <br />
            </Typography>
        </div>
    )
}

export default Home
