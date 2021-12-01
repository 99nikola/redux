import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/UserSlice';

export { RouteGuard };

const RouteGuard: React.FC = (props) => {

    const router = useRouter();
    const [ authorized, setAuthorized ] = useState(false);
    const user = useSelector(selectUser);

    const checkAuth = useCallback((url: string) => {
        const publicPaths = ["/login"];
        const isPublic = publicPaths.includes(url);

        if (user.isLogged && isPublic) {
            setAuthorized(false);
            router.back();
            return;
        }

        if (user.isLogged || isPublic) {
            setAuthorized(true);
            return;
        }

        setAuthorized(false);
        router.push("/login");
    }, [user.isLogged]);
    
    useEffect(() => {
        checkAuth(router.pathname);
        const hideContent = () => setAuthorized(false);

        router.events.on("routeChangeStart", hideContent);
        router.events.on("routeChangeComplete", checkAuth);

        return () => {
            router.events.off("routeChangeStart", hideContent);
            router.events.off("routeChangeComplete", checkAuth);
        }
    }, [checkAuth]);

    return (
        <>
            {authorized && props.children}
        </>
    );
}