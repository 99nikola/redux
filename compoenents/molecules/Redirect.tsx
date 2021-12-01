import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/UserSlice";

interface RedirectProps {
    to: string
}

const Redirect: React.FC<RedirectProps> = (props) => {

    const router = useRouter();

    useEffect(() => {
        router.push(props.to);
    }, []);

    return <></>
}

export default Redirect
