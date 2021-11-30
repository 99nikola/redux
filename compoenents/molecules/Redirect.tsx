import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/UserSlice";

const Redirect: React.FC = () => {

    const router = useRouter();
    const user = useSelector(selectUser);

    useEffect(() => {
        if (Boolean(user.username)) 
            return;

        router.push("/login");
    }, [user.username]);

    return <></>
}

export default Redirect
