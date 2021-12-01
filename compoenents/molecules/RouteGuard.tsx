import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/UserSlice';

export { RouteGuard };

const RouteGuard: React.FC = (props) => {

    const router = useRouter();
    const [ authorized, setAuthorized ] = useState(false);
    const user = useSelector(selectUser);

    useEffect(() => {
        authCheck(router.pathname);
        const hideContent = () => setAuthorized(false);

        router.events.on('routeChangeStart', hideContent);
        router.events.on('routeChangeComplete', authCheck);

        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }
    }, []);

    useEffect(() => {
        authCheck(router.pathname);
    }, [user.username]);

    const authCheck = (url: string) => {
        console.log(url, Boolean(user.username));

        const publicPaths = ['/login'];

        if (Boolean(user.username) || publicPaths.includes(url)) {
            setAuthorized(true);
            return;
        }

        setAuthorized(false);
        router.push("/login");
    }

    return (
        <>
            {authorized && props.children};
        </>
    );
}